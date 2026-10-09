#!/usr/bin/env bash
# LOCAL TESTING helper (the permanent deployment is Render - see README).
# Runs the Cheese Chase server with auto-restart, plus an optional Cloudflare quick tunnel for a temporary public URL.
# Usage: ./start.sh            server + quick tunnel (URL written to url.txt)
#        ./start.sh server     (re)start server only; an existing tunnel keeps its URL
#        ./start.sh stop       stop both
set -u
cd "$(dirname "$0")"
PORT="${PORT:-8797}"
mkdir -p logs
stop_server() {
  [ -f logs/server.pid ] && kill "$(cat logs/server.pid)" 2>/dev/null
  pkill -f "^node $(pwd)/server.js" 2>/dev/null
  rm -f logs/server.pid
}
stop_tunnel() {
  [ -f logs/tunnel.pid ] && kill "$(cat logs/tunnel.pid)" 2>/dev/null
  pkill -f "cloudflared tunnel --url http://localhost:$PORT" 2>/dev/null
  rm -f logs/tunnel.pid
}
stop_server
[ "${1:-}" = "server" ] || stop_tunnel
sleep 1
[ "${1:-}" = "stop" ] && { echo "stopped"; exit 0; }
[ -d node_modules/ws ] || npm install --silent
[ -f js/game.js ] || npm run build
PORT=$PORT nohup bash -c "while true; do node $(pwd)/server.js; echo 'server exited, restarting' >&2; sleep 1; done" > logs/server.log 2>&1 &
echo $! > logs/server.pid
for i in $(seq 1 20); do curl -fs "http://localhost:$PORT/health" >/dev/null && break; sleep 0.5; done
curl -fs "http://localhost:$PORT/health" >/dev/null || { echo "Server failed to start; see logs/server.log"; exit 1; }
echo "Server up: http://localhost:$PORT"
[ "${1:-}" = "server" ] && { [ -f url.txt ] && echo "(tunnel, if running: $(cat url.txt))"; exit 0; }
if [ ! -x bin/cloudflared ]; then
  mkdir -p bin
  curl -sSL -o bin/cloudflared https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64 && chmod +x bin/cloudflared
fi
: > logs/tunnel.log
# Some networks return fake DNS answers (198.18.x) for Cloudflare's edge; then dial known edge IPs directly.
EDGE_ARGS=""
EDGE_IP=$(getent hosts region1.v2.argotunnel.com | awk '{print $1; exit}')
case "$EDGE_IP" in ""|198.18.*|198.19.*) EDGE_ARGS="--edge 198.41.192.67:7844 --edge 198.41.192.7:7844 --edge 198.41.200.13:7844 --edge 198.41.200.33:7844";; esac
nohup bin/cloudflared tunnel --url "http://localhost:$PORT" --no-autoupdate --protocol "${TUNNEL_PROTOCOL:-http2}" $EDGE_ARGS > logs/tunnel.log 2>&1 &
echo $! > logs/tunnel.pid
URL=""
for i in $(seq 1 60); do
  URL=$(grep -oE 'https://[a-z0-9-]+\.trycloudflare\.com' logs/tunnel.log | head -1)
  [ -n "$URL" ] && break; sleep 1
done
[ -z "$URL" ] && { echo "Tunnel failed; see logs/tunnel.log"; exit 1; }
for i in $(seq 1 40); do curl -fs "$URL/health" >/dev/null && break; sleep 1.5; done
curl -fs "$URL/health" >/dev/null || echo "Tunnel started ($URL) but not reachable yet; see logs/tunnel.log"
echo "$URL" > url.txt
echo "Temporary public URL (quick tunnel): $URL"
