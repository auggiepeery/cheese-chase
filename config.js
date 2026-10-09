// Which multiplayer server this copy of the client talks to.
// - Served by server.js (local or on Render): leave empty -> uses its own origin (wss:// on https).
// - Opened as a file / hosted elsewhere: set a server URL here, e.g. 'https://cheese-chase.onrender.com',
//   or open the page with ?server=https://your-server
// Solo vs AI and local split-screen never need a server.
window.CHEESE_SERVER = window.CHEESE_SERVER || '';
