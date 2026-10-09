(()=>{var Nf=Object.defineProperty;var Of=(i,e)=>{for(var t in e)Nf(i,t,{get:e[t],enumerable:!0})};var Ff=0,Qh=1,Bf=2;var ld=1,jc=2,ti=3,Ri=0,Ft=1,jt=2,zn=0,Ps=1,Ci=2,$h=3,eu=4,zf=5,Ki=100,Hf=101,kf=102,Vf=103,Gf=104,Wf=200,Xf=201,qf=202,Yf=203,wl=204,Tl=205,Zf=206,Kf=207,Jf=208,jf=209,Qf=210,$f=211,ep=212,tp=213,np=214,Al=0,Rl=1,Cl=2,Us=3,Pl=4,Il=5,Ll=6,Dl=7,Qc=0,ip=1,sp=2,Ai=0,$c=1,eh=2,th=3,Ys=4,rp=5,nh=6,ih=7;var cd=300,Ns=301,Os=302,Ul=303,Nl=304,aa=306,Do=1e3,ji=1001,Ol=1002,qt=1003,op=1004;var Qr=1005;var xn=1006,qa=1007;var Qi=1008;var oi=1009,hd=1010,ud=1011,wr=1012,sh=1013,$i=1014,Bn=1015,rn=1016,rh=1017,oh=1018,Fs=1020,dd=35902,fd=1021,pd=1022,Cn=1023,md=1024,gd=1025,Is=1026,Bs=1027,ah=1028,lh=1029,xd=1030,ch=1031;var hh=1033,Ro=33776,Co=33777,Po=33778,Io=33779,Fl=35840,Bl=35841,zl=35842,Hl=35843,kl=36196,Vl=37492,Gl=37496,Wl=37808,Xl=37809,ql=37810,Yl=37811,Zl=37812,Kl=37813,Jl=37814,jl=37815,Ql=37816,$l=37817,ec=37818,tc=37819,nc=37820,ic=37821,Lo=36492,sc=36494,rc=36495,vd=36283,oc=36284,ac=36285,lc=36286;var Uo=2300,cc=2301,Ya=2302,tu=2400,nu=2401,iu=2402;var ap=3200,lp=3201;var uh=0,cp=1,wi="",Et="srgb",Ui="srgb-linear",la="linear",st="srgb";var hs=7680;var su=519,hp=512,up=513,dp=514,yd=515,fp=516,pp=517,mp=518,gp=519,hc=35044,Zs=35048;var ru="300 es",ii=2e3,No=2001,Pi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ou=1234567,_r=Math.PI/180,Tr=180/Math.PI;function si(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function Ot(i,e,t){return Math.max(e,Math.min(t,i))}function dh(i,e){return(i%e+e)%e}function xp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function vp(i,e,t){return i!==e?(t-i)/(e-i):0}function Mr(i,e,t){return(1-t)*i+t*e}function yp(i,e,t,n){return Mr(i,e,1-Math.exp(-t*n))}function _p(i,e=1){return e-Math.abs(dh(i,e*2)-e)}function Mp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Sp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function bp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ep(i,e){return i+Math.random()*(e-i)}function wp(i){return i*(.5-Math.random())}function Tp(i){i!==void 0&&(ou=i);let e=ou+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ap(i){return i*_r}function Rp(i){return i*Tr}function Cp(i){return(i&i-1)===0&&i!==0}function Pp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ip(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Lp(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Rn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function at(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var fh={DEG2RAD:_r,RAD2DEG:Tr,generateUUID:si,clamp:Ot,euclideanModulo:dh,mapLinear:xp,inverseLerp:vp,lerp:Mr,damp:yp,pingpong:_p,smoothstep:Mp,smootherstep:Sp,randInt:bp,randFloat:Ep,randFloatSpread:wp,seededRandom:Tp,degToRad:Ap,radToDeg:Rp,isPowerOfTwo:Cp,ceilPowerOfTwo:Pp,floorPowerOfTwo:Ip,setQuaternionFromProperEuler:Lp,normalize:at,denormalize:Rn},re=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},We=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],_=s[1],b=s[4],y=s[7],D=s[2],w=s[5],R=s[8];return r[0]=o*x+a*_+l*D,r[3]=o*m+a*b+l*w,r[6]=o*p+a*y+l*R,r[1]=c*x+h*_+u*D,r[4]=c*m+h*b+u*w,r[7]=c*p+h*y+u*R,r[2]=d*x+f*_+g*D,r[5]=d*m+f*b+g*w,r[8]=d*p+f*y+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Za.makeScale(e,t)),this}rotate(e){return this.premultiply(Za.makeRotation(-e)),this}translate(e,t){return this.premultiply(Za.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Za=new We;function _d(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Oo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Dp(){let i=Oo("canvas");return i.style.display="block",i}var au={};function vr(i){i in au||(au[i]=!0,console.warn(i))}function Up(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Np(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Op(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Ze={enabled:!0,workingColorSpace:Ui,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===st&&(i.r=ri(i.r),i.g=ri(i.g),i.b=ri(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===st&&(i.r=Ls(i.r),i.g=Ls(i.g),i.b=Ls(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===wi?la:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ls(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var lu=[.64,.33,.3,.6,.15,.06],cu=[.2126,.7152,.0722],hu=[.3127,.329],uu=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),du=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ze.define({[Ui]:{primaries:lu,whitePoint:hu,transfer:la,toXYZ:uu,fromXYZ:du,luminanceCoefficients:cu,workingColorSpaceConfig:{unpackColorSpace:Et},outputColorSpaceConfig:{drawingBufferColorSpace:Et}},[Et]:{primaries:lu,whitePoint:hu,transfer:st,toXYZ:uu,fromXYZ:du,luminanceCoefficients:cu,outputColorSpaceConfig:{drawingBufferColorSpace:Et}}});var us,uc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{us===void 0&&(us=Oo("canvas")),us.width=e.width,us.height=e.height;let n=us.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=us}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Oo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ri(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ri(t[n]/255)*255):t[n]=ri(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Fp=0,Fo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=si(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ka(s[o].image)):r.push(Ka(s[o]))}else r=Ka(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ka(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?uc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Bp=0,Vt=class i extends Pi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ji,s=ji,r=xn,o=Qi,a=Cn,l=oi,c=i.DEFAULT_ANISOTROPY,h=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=si(),this.name="",this.source=new Fo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Do:e.x=e.x-Math.floor(e.x);break;case ji:e.x=e.x<0?0:1;break;case Ol:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Do:e.y=e.y-Math.floor(e.y);break;case ji:e.y=e.y<0?0:1;break;case Ol:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=cd;Vt.DEFAULT_ANISOTROPY=1;var wt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,y=(f+1)/2,D=(p+1)/2,w=(h+d)/4,R=(u+x)/4,P=(g+m)/4;return b>y&&b>D?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=w/n,r=R/n):y>D?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=P/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=R/r,s=P/r),this.set(n,s,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},dc=class extends Pi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Vt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Fo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bt=class extends dc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Bo=class extends Vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var fc=class extends Vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-a,p=l*d+c*f+h*g+u*x,_=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let D=Math.sqrt(b),w=Math.atan2(D,p*_);m=Math.sin(m*w)/D,a=Math.sin(a*w)/D}let y=a*_;if(l=l*m+d*y,c=c*m+f*y,h=h*m+g*y,u=u*m+x*y,m===1-a){let D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ja.copy(this).projectOnVector(e),this.sub(Ja)}reflect(e){return this.sub(Ja.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ja=new C,fu=new zt,ai=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,wn):wn.fromBufferAttribute(r,o),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$r.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$r.copy(n.boundingBox)),$r.applyMatrix4(e.matrixWorld),this.union($r)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),eo.subVectors(this.max,cr),ds.subVectors(e.a,cr),fs.subVectors(e.b,cr),ps.subVectors(e.c,cr),yi.subVectors(fs,ds),_i.subVectors(ps,fs),Vi.subVectors(ds,ps);let t=[0,-yi.z,yi.y,0,-_i.z,_i.y,0,-Vi.z,Vi.y,yi.z,0,-yi.x,_i.z,0,-_i.x,Vi.z,0,-Vi.x,-yi.y,yi.x,0,-_i.y,_i.x,0,-Vi.y,Vi.x,0];return!ja(t,ds,fs,ps,eo)||(t=[1,0,0,0,1,0,0,0,1],!ja(t,ds,fs,ps,eo))?!1:(to.crossVectors(yi,_i),t=[to.x,to.y,to.z],ja(t,ds,fs,ps,eo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Jn=[new C,new C,new C,new C,new C,new C,new C,new C],wn=new C,$r=new ai,ds=new C,fs=new C,ps=new C,yi=new C,_i=new C,Vi=new C,cr=new C,eo=new C,to=new C,Gi=new C;function ja(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Gi.fromArray(i,r);let a=s.x*Math.abs(Gi.x)+s.y*Math.abs(Gi.y)+s.z*Math.abs(Gi.z),l=e.dot(Gi),c=t.dot(Gi),h=n.dot(Gi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var zp=new ai,hr=new C,Qa=new C,Hn=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):zp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hr.subVectors(e,this.center);let t=hr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(hr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hr.copy(e.center).add(Qa)),this.expandByPoint(hr.copy(e.center).sub(Qa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},jn=new C,$a=new C,no=new C,Mi=new C,el=new C,io=new C,tl=new C,zo=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){$a.copy(e).add(t).multiplyScalar(.5),no.copy(t).sub(e).normalize(),Mi.copy(this.origin).sub($a);let r=e.distanceTo(t)*.5,o=-this.direction.dot(no),a=Mi.dot(this.direction),l=-Mi.dot(no),c=Mi.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy($a).addScaledVector(no,d),f}intersectSphere(e,t){jn.subVectors(e.center,this.origin);let n=jn.dot(this.direction),s=jn.dot(jn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,n,s,r){el.subVectors(t,e),io.subVectors(n,e),tl.crossVectors(el,io);let o=this.direction.dot(tl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mi.subVectors(this.origin,e);let l=a*this.direction.dot(io.crossVectors(Mi,io));if(l<0)return null;let c=a*this.direction.dot(el.cross(Mi));if(c<0||l+c>o)return null;let h=-a*Mi.dot(tl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},lt=class i{constructor(e,t,n,s,r,o,a,l,c,h,u,d,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,d,f,g,x,m)}set(e,t,n,s,r,o,a,l,c,h,u,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ms.setFromMatrixColumn(e,0).length(),r=1/ms.setFromMatrixColumn(e,1).length(),o=1/ms.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d-x*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hp,e,kp)}lookAt(e,t,n){let s=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Si.crossVectors(n,dn),Si.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Si.crossVectors(n,dn)),Si.normalize(),so.crossVectors(dn,Si),s[0]=Si.x,s[4]=so.x,s[8]=dn.x,s[1]=Si.y,s[5]=so.y,s[9]=dn.y,s[2]=Si.z,s[6]=so.z,s[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],_=n[3],b=n[7],y=n[11],D=n[15],w=s[0],R=s[4],P=s[8],S=s[12],v=s[1],T=s[5],L=s[9],I=s[13],U=s[2],k=s[6],H=s[10],W=s[14],N=s[3],J=s[7],se=s[11],he=s[15];return r[0]=o*w+a*v+l*U+c*N,r[4]=o*R+a*T+l*k+c*J,r[8]=o*P+a*L+l*H+c*se,r[12]=o*S+a*I+l*W+c*he,r[1]=h*w+u*v+d*U+f*N,r[5]=h*R+u*T+d*k+f*J,r[9]=h*P+u*L+d*H+f*se,r[13]=h*S+u*I+d*W+f*he,r[2]=g*w+x*v+m*U+p*N,r[6]=g*R+x*T+m*k+p*J,r[10]=g*P+x*L+m*H+p*se,r[14]=g*S+x*I+m*W+p*he,r[3]=_*w+b*v+y*U+D*N,r[7]=_*R+b*T+y*k+D*J,r[11]=_*P+b*L+y*H+D*se,r[15]=_*S+b*I+y*W+D*he,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+x*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-s*a*h-t*l*u+t*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],_=u*m*c-x*d*c+x*l*f-a*m*f-u*l*p+a*d*p,b=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,y=h*x*c-g*u*c+g*a*f-o*x*f-h*a*p+o*u*p,D=g*u*l-h*x*l-g*a*d+o*x*d+h*a*m-o*u*m,w=t*_+n*b+s*y+r*D;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/w;return e[0]=_*R,e[1]=(x*d*r-u*m*r-x*s*f+n*m*f+u*s*p-n*d*p)*R,e[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*p+n*l*p)*R,e[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*R,e[4]=b*R,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*R,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*R,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*f+t*l*f)*R,e[8]=y*R,e[9]=(g*u*r-h*x*r-g*n*f+t*x*f+h*n*p-t*u*p)*R,e[10]=(o*x*r-g*a*r+g*n*c-t*x*c-o*n*p+t*a*p)*R,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*f-t*a*f)*R,e[12]=D*R,e[13]=(h*x*s-g*u*s+g*n*d-t*x*d-h*n*m+t*u*m)*R,e[14]=(g*a*s-o*x*s-g*n*l+t*x*l+o*n*m-t*a*m)*R,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*d+t*a*d)*R,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,x=o*h,m=o*u,p=a*u,_=l*c,b=l*h,y=l*u,D=n.x,w=n.y,R=n.z;return s[0]=(1-(x+p))*D,s[1]=(f+y)*D,s[2]=(g-b)*D,s[3]=0,s[4]=(f-y)*w,s[5]=(1-(d+p))*w,s[6]=(m+_)*w,s[7]=0,s[8]=(g+b)*R,s[9]=(m-_)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ms.set(s[0],s[1],s[2]).length(),o=ms.set(s[4],s[5],s[6]).length(),a=ms.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Tn.copy(this);let c=1/r,h=1/o,u=1/a;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=h,Tn.elements[5]*=h,Tn.elements[6]*=h,Tn.elements[8]*=u,Tn.elements[9]*=u,Tn.elements[10]*=u,t.setFromRotationMatrix(Tn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=ii){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),f,g;if(a===ii)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===No)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ii){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(o-r),d=(t+e)*c,f=(n+s)*h,g,x;if(a===ii)g=(o+r)*u,x=-2*u;else if(a===No)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ms=new C,Tn=new lt,Hp=new C(0,0,0),kp=new C(1,1,1),Si=new C,so=new C,dn=new C,pu=new lt,mu=new zt,Yt=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ot(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mu.setFromEuler(this),this.setFromQuaternion(mu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yt.DEFAULT_ORDER="XYZ";var Ho=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Vp=0,gu=new C,gs=new zt,Qn=new lt,ro=new C,ur=new C,Gp=new C,Wp=new zt,xu=new C(1,0,0),vu=new C(0,1,0),yu=new C(0,0,1),_u={type:"added"},Xp={type:"removed"},xs={type:"childadded",child:null},nl={type:"childremoved",child:null},Mt=class i extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new C,t=new Yt,n=new zt,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new We}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ho,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis(xu,e)}rotateY(e){return this.rotateOnAxis(vu,e)}rotateZ(e){return this.rotateOnAxis(yu,e)}translateOnAxis(e,t){return gu.copy(e).applyQuaternion(this.quaternion),this.position.add(gu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xu,e)}translateY(e){return this.translateOnAxis(vu,e)}translateZ(e){return this.translateOnAxis(yu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ro.copy(e):ro.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(ur,ro,this.up):Qn.lookAt(ro,ur,this.up),this.quaternion.setFromRotationMatrix(Qn),s&&(Qn.extractRotation(s.matrixWorld),gs.setFromRotationMatrix(Qn),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_u),xs.child=e,this.dispatchEvent(xs),xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xp),nl.child=e,this.dispatchEvent(nl),nl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_u),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,e,Gp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,Wp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Mt.DEFAULT_UP=new C(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var An=new C,$n=new C,il=new C,ei=new C,vs=new C,ys=new C,Mu=new C,sl=new C,rl=new C,ol=new C,al=new wt,ll=new wt,cl=new wt,Ti=class i{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),An.subVectors(e,t),s.cross(An);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){An.subVectors(s,t),$n.subVectors(n,t),il.subVectors(e,t);let o=An.dot(An),a=An.dot($n),l=An.dot(il),c=$n.dot($n),h=$n.dot(il),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ei.x),l.addScaledVector(o,ei.y),l.addScaledVector(a,ei.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return al.setScalar(0),ll.setScalar(0),cl.setScalar(0),al.fromBufferAttribute(e,t),ll.fromBufferAttribute(e,n),cl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(al,r.x),o.addScaledVector(ll,r.y),o.addScaledVector(cl,r.z),o}static isFrontFacing(e,t,n,s){return An.subVectors(n,t),$n.subVectors(e,t),An.cross($n).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),An.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;vs.subVectors(s,n),ys.subVectors(r,n),sl.subVectors(e,n);let l=vs.dot(sl),c=ys.dot(sl);if(l<=0&&c<=0)return t.copy(n);rl.subVectors(e,s);let h=vs.dot(rl),u=ys.dot(rl);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(vs,o);ol.subVectors(e,r);let f=vs.dot(ol),g=ys.dot(ol);if(g>=0&&f<=g)return t.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ys,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Mu.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Mu,a);let p=1/(m+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector(vs,o).addScaledVector(ys,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Md={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},oo={h:0,s:0,l:0};function hl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Re=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ze.workingColorSpace){if(e=dh(e,1),t=Ot(t,0,1),n=Ot(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=hl(o,r,e+1/3),this.g=hl(o,r,e),this.b=hl(o,r,e-1/3)}return Ze.toWorkingColorSpace(this,s),this}setStyle(e,t=Et){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){let n=Md[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return Ze.fromWorkingColorSpace(Xt.copy(this),e),Math.round(Ot(Xt.r*255,0,255))*65536+Math.round(Ot(Xt.g*255,0,255))*256+Math.round(Ot(Xt.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Xt.copy(this),t);let n=Xt.r,s=Xt.g,r=Xt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Et){Ze.fromWorkingColorSpace(Xt.copy(this),e);let t=Xt.r,n=Xt.g,s=Xt.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+t,bi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bi),e.getHSL(oo);let n=Mr(bi.h,oo.h,t),s=Mr(bi.s,oo.s,t),r=Mr(bi.l,oo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xt=new Re;Re.NAMES=Md;var qp=0,kn=class extends Pi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=si(),this.name="",this.blending=Ps,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wl,this.blendDst=Tl,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=su,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(n.blending=this.blending),this.side!==Ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wl&&(n.blendSrc=this.blendSrc),this.blendDst!==Tl&&(n.blendDst=this.blendDst),this.blendEquation!==Ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==su&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},vn=class extends kn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.combine=Qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var At=new C,ao=new re,_t=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=hc,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ao.fromBufferAttribute(this,t),ao.applyMatrix3(e),this.setXY(t,ao.x,ao.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hc&&(e.usage=this.usage),e}};var ko=class extends _t{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Vo=class extends _t{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var et=class extends _t{constructor(e,t,n){super(new Float32Array(e),t,n)}},Yp=0,gn=new lt,ul=new Mt,_s=new C,fn=new ai,dr=new ai,Nt=new C,St=class i extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_d(e)?Vo:ko)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return ul.lookAt(e),ul.updateMatrix(),this.applyMatrix4(ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new et(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];dr.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(fn.min,dr.min),fn.expandByPoint(Nt),Nt.addVectors(fn.max,dr.max),fn.expandByPoint(Nt)):(fn.expandByPoint(dr.min),fn.expandByPoint(dr.max))}fn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Nt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Nt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Nt.fromBufferAttribute(a,c),l&&(_s.fromBufferAttribute(e,c),Nt.add(_s)),s=Math.max(s,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _t(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new C,l[P]=new C;let c=new C,h=new C,u=new C,d=new re,f=new re,g=new re,x=new C,m=new C;function p(P,S,v){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,v),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let T=1/(f.x*g.y-g.x*f.y);isFinite(T)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(T),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(T),a[P].add(x),a[S].add(x),a[v].add(x),l[P].add(m),l[S].add(m),l[v].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let P=0,S=_.length;P<S;++P){let v=_[P],T=v.start,L=v.count;for(let I=T,U=T+L;I<U;I+=3)p(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let b=new C,y=new C,D=new C,w=new C;function R(P){D.fromBufferAttribute(s,P),w.copy(D);let S=a[P];b.copy(S),b.sub(D.multiplyScalar(D.dot(S))).normalize(),y.crossVectors(w,S);let T=y.dot(l[P])<0?-1:1;o.setXYZW(P,b.x,b.y,b.z,T)}for(let P=0,S=_.length;P<S;++P){let v=_[P],T=v.start,L=v.count;for(let I=T,U=T+L;I<U;I+=3)R(e.getX(I+0)),R(e.getX(I+1)),R(e.getX(I+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new _t(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Su=new lt,Wi=new zo,lo=new Hn,bu=new C,co=new C,ho=new C,uo=new C,dl=new C,fo=new C,Eu=new C,po=new C,$e=class extends Mt{constructor(e=new St,t=new vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){fo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(dl.fromBufferAttribute(u,e),o?fo.addScaledVector(dl,h):fo.addScaledVector(dl.sub(t),h))}t.add(fo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(r),Wi.copy(e.ray).recast(e.near),!(lo.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(lo,bu)===null||Wi.origin.distanceToSquared(bu)>(e.far-e.near)**2))&&(Su.copy(r).invert(),Wi.copy(e.ray).applyMatrix4(Su),!(n.boundingBox!==null&&Wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Wi)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,D=b;y<D;y+=3){let w=a.getX(y),R=a.getX(y+1),P=a.getX(y+2);s=mo(this,p,e,n,c,h,u,w,R,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let _=a.getX(m),b=a.getX(m+1),y=a.getX(m+2);s=mo(this,o,e,n,c,h,u,_,b,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,D=b;y<D;y+=3){let w=y,R=y+1,P=y+2;s=mo(this,p,e,n,c,h,u,w,R,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let _=m,b=m+1,y=m+2;s=mo(this,o,e,n,c,h,u,_,b,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Zp(i,e,t,n,s,r,o,a){let l;if(e.side===Ft?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Ri,a),l===null)return null;po.copy(a),po.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(po);return c<t.near||c>t.far?null:{distance:c,point:po.clone(),object:i}}function mo(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,co),i.getVertexPosition(l,ho),i.getVertexPosition(c,uo);let h=Zp(i,e,t,n,co,ho,uo,Eu);if(h){let u=new C;Ti.getBarycoord(Eu,co,ho,uo,u),s&&(h.uv=Ti.getInterpolatedAttribute(s,a,l,c,u,new re)),r&&(h.uv1=Ti.getInterpolatedAttribute(r,a,l,c,u,new re)),o&&(h.normal=Ti.getInterpolatedAttribute(o,a,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new C,materialIndex:0};Ti.getNormal(co,ho,uo,d.normal),h.face=d,h.barycoord=u}return h}var Ye=class i extends St{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(u,2));function g(x,m,p,_,b,y,D,w,R,P,S){let v=y/R,T=D/P,L=y/2,I=D/2,U=w/2,k=R+1,H=P+1,W=0,N=0,J=new C;for(let se=0;se<H;se++){let he=se*T-I;for(let ae=0;ae<k;ae++){let xe=ae*v-L;J[x]=xe*_,J[m]=he*b,J[p]=U,c.push(J.x,J.y,J.z),J[x]=0,J[m]=0,J[p]=w>0?1:-1,h.push(J.x,J.y,J.z),u.push(ae/R),u.push(1-se/P),W+=1}}for(let se=0;se<P;se++)for(let he=0;he<R;he++){let ae=d+he+k*se,xe=d+he+k*(se+1),X=d+(he+1)+k*(se+1),K=d+(he+1)+k*se;l.push(ae,xe,K),l.push(xe,X,K),N+=6}a.addGroup(f,N,S),f+=N,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function zs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Jt(i){let e={};for(let t=0;t<i.length;t++){let n=zs(i[t]);for(let s in n)e[s]=n[s]}return e}function Kp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Sd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var _n={clone:zs,merge:Jt},Jp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ft=class extends kn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jp,this.fragmentShader=jp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=Kp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Go=class extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ei=new C,wu=new re,Tu=new re,kt=class extends Go{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Tr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tr*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,t){return this.getViewBounds(e,wu,Tu),t.subVectors(Tu,wu)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(_r*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ms=-90,Ss=1,pc=class extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new kt(Ms,Ss,e,t);s.layers=this.layers,this.add(s);let r=new kt(Ms,Ss,e,t);r.layers=this.layers,this.add(r);let o=new kt(Ms,Ss,e,t);o.layers=this.layers,this.add(o);let a=new kt(Ms,Ss,e,t);a.layers=this.layers,this.add(a);let l=new kt(Ms,Ss,e,t);l.layers=this.layers,this.add(l);let c=new kt(Ms,Ss,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===ii)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===No)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Wo=class extends Vt{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ns,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},mc=class extends Bt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Wo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:xn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ye(5,5,5),r=new ft({name:"CubemapFromEquirect",uniforms:zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ft,blending:zn});r.uniforms.tEquirect.value=t;let o=new $e(s,r),a=t.minFilter;return t.minFilter===Qi&&(t.minFilter=xn),new pc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},fl=new C,Qp=new C,$p=new We,ni=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=fl.subVectors(n,t).cross(Qp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(fl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||$p.getNormalMatrix(e),s=this.coplanarPoint(fl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Xi=new Hn,go=new C,Ar=class{constructor(e=new ni,t=new ni,n=new ni,s=new ni,r=new ni,o=new ni){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ii){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],_=s[13],b=s[14],y=s[15];if(n[0].setComponents(l-r,d-c,m-f,y-p).normalize(),n[1].setComponents(l+r,d+c,m+f,y+p).normalize(),n[2].setComponents(l+o,d+h,m+g,y+_).normalize(),n[3].setComponents(l-o,d-h,m-g,y-_).normalize(),n[4].setComponents(l-a,d-u,m-x,y-b).normalize(),t===ii)n[5].setComponents(l+a,d+u,m+x,y+b).normalize();else if(t===No)n[5].setComponents(a,u,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(e){return Xi.center.set(0,0,0),Xi.radius=.7071067811865476,Xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(go.x=s.normal.x>0?e.max.x:e.min.x,go.y=s.normal.y>0?e.max.y:e.min.y,go.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(go)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function bd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function em(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Ii=class i extends St{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let _=p*d-o;for(let b=0;b<c;b++){let y=b*u-r;g.push(y,-_,0),x.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){let b=_+c*p,y=_+c*(p+1),D=_+1+c*(p+1),w=_+1+c*p;f.push(b,y,w),f.push(y,D,w)}this.setIndex(f),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(x,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},tm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,im=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,om=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,am=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,hm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,um=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_m=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Em=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Tm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Am=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Im="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Um=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Om=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,km=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ym=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Zm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Km=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$m=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,e0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,t0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,n0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,i0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,s0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,a0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,l0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,c0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,h0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,f0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,p0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,m0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,x0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,y0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,b0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,E0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,w0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,T0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,A0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,R0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,C0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,P0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,L0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,D0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,U0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,N0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,O0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,F0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,B0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,z0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,H0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,k0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,V0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,G0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,W0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,X0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,q0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Y0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Z0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,K0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,J0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,eg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ig=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,og=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ag=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ug=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_g=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Mg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ag=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Cg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ig=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Lg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:tm,alphahash_pars_fragment:nm,alphamap_fragment:im,alphamap_pars_fragment:sm,alphatest_fragment:rm,alphatest_pars_fragment:om,aomap_fragment:am,aomap_pars_fragment:lm,batching_pars_vertex:cm,batching_vertex:hm,begin_vertex:um,beginnormal_vertex:dm,bsdfs:fm,iridescence_fragment:pm,bumpmap_pars_fragment:mm,clipping_planes_fragment:gm,clipping_planes_pars_fragment:xm,clipping_planes_pars_vertex:vm,clipping_planes_vertex:ym,color_fragment:_m,color_pars_fragment:Mm,color_pars_vertex:Sm,color_vertex:bm,common:Em,cube_uv_reflection_fragment:wm,defaultnormal_vertex:Tm,displacementmap_pars_vertex:Am,displacementmap_vertex:Rm,emissivemap_fragment:Cm,emissivemap_pars_fragment:Pm,colorspace_fragment:Im,colorspace_pars_fragment:Lm,envmap_fragment:Dm,envmap_common_pars_fragment:Um,envmap_pars_fragment:Nm,envmap_pars_vertex:Om,envmap_physical_pars_fragment:Ym,envmap_vertex:Fm,fog_vertex:Bm,fog_pars_vertex:zm,fog_fragment:Hm,fog_pars_fragment:km,gradientmap_pars_fragment:Vm,lightmap_pars_fragment:Gm,lights_lambert_fragment:Wm,lights_lambert_pars_fragment:Xm,lights_pars_begin:qm,lights_toon_fragment:Zm,lights_toon_pars_fragment:Km,lights_phong_fragment:Jm,lights_phong_pars_fragment:jm,lights_physical_fragment:Qm,lights_physical_pars_fragment:$m,lights_fragment_begin:e0,lights_fragment_maps:t0,lights_fragment_end:n0,logdepthbuf_fragment:i0,logdepthbuf_pars_fragment:s0,logdepthbuf_pars_vertex:r0,logdepthbuf_vertex:o0,map_fragment:a0,map_pars_fragment:l0,map_particle_fragment:c0,map_particle_pars_fragment:h0,metalnessmap_fragment:u0,metalnessmap_pars_fragment:d0,morphinstance_vertex:f0,morphcolor_vertex:p0,morphnormal_vertex:m0,morphtarget_pars_vertex:g0,morphtarget_vertex:x0,normal_fragment_begin:v0,normal_fragment_maps:y0,normal_pars_fragment:_0,normal_pars_vertex:M0,normal_vertex:S0,normalmap_pars_fragment:b0,clearcoat_normal_fragment_begin:E0,clearcoat_normal_fragment_maps:w0,clearcoat_pars_fragment:T0,iridescence_pars_fragment:A0,opaque_fragment:R0,packing:C0,premultiplied_alpha_fragment:P0,project_vertex:I0,dithering_fragment:L0,dithering_pars_fragment:D0,roughnessmap_fragment:U0,roughnessmap_pars_fragment:N0,shadowmap_pars_fragment:O0,shadowmap_pars_vertex:F0,shadowmap_vertex:B0,shadowmask_pars_fragment:z0,skinbase_vertex:H0,skinning_pars_vertex:k0,skinning_vertex:V0,skinnormal_vertex:G0,specularmap_fragment:W0,specularmap_pars_fragment:X0,tonemapping_fragment:q0,tonemapping_pars_fragment:Y0,transmission_fragment:Z0,transmission_pars_fragment:K0,uv_pars_fragment:J0,uv_pars_vertex:j0,uv_vertex:Q0,worldpos_vertex:$0,background_vert:eg,background_frag:tg,backgroundCube_vert:ng,backgroundCube_frag:ig,cube_vert:sg,cube_frag:rg,depth_vert:og,depth_frag:ag,distanceRGBA_vert:lg,distanceRGBA_frag:cg,equirect_vert:hg,equirect_frag:ug,linedashed_vert:dg,linedashed_frag:fg,meshbasic_vert:pg,meshbasic_frag:mg,meshlambert_vert:gg,meshlambert_frag:xg,meshmatcap_vert:vg,meshmatcap_frag:yg,meshnormal_vert:_g,meshnormal_frag:Mg,meshphong_vert:Sg,meshphong_frag:bg,meshphysical_vert:Eg,meshphysical_frag:wg,meshtoon_vert:Tg,meshtoon_frag:Ag,points_vert:Rg,points_frag:Cg,shadow_vert:Pg,shadow_frag:Ig,sprite_vert:Lg,sprite_frag:Dg},ue={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Fn={basic:{uniforms:Jt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Jt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Re(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Jt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Jt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Jt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Re(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Jt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Jt([ue.points,ue.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Jt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Jt([ue.common,ue.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Jt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Jt([ue.sprite,ue.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Jt([ue.common,ue.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Jt([ue.lights,ue.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Fn.physical={uniforms:Jt([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var xo={r:0,b:0,g:0},qi=new Yt,Ug=new lt;function Ng(i,e,t,n,s,r,o){let a=new Re(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(_){let b=_.isScene===!0?_.background:null;return b&&b.isTexture&&(b=(_.backgroundBlurriness>0?t:e).get(b)),b}function x(_){let b=!1,y=g(_);y===null?p(a,l):y&&y.isColor&&(p(y,1),b=!0);let D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,b){let y=g(b);y&&(y.isCubeTexture||y.mapping===aa)?(h===void 0&&(h=new $e(new Ye(1,1,1),new ft({name:"BackgroundCubeMaterial",uniforms:zs(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),qi.copy(b.backgroundRotation),qi.x*=-1,qi.y*=-1,qi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ug.makeRotationFromEuler(qi)),h.material.toneMapped=Ze.getTransfer(y.colorSpace)!==st,(u!==y||d!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new $e(new Ii(2,2),new ft({name:"BackgroundMaterial",uniforms:zs(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(y.colorSpace)!==st,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,b){_.getRGB(xo,Sd(i)),n.buffers.color.setClear(xo.r,xo.g,xo.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(_,b=1){a.set(_),l=b,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(a,l)},render:x,addToRenderList:m}}function Og(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(v,T,L,I,U){let k=!1,H=u(I,L,T);r!==H&&(r=H,c(r.object)),k=f(v,I,L,U),k&&g(v,I,L,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,y(v,T,L,I),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,T,L){let I=L.wireframe===!0,U=n[v.id];U===void 0&&(U={},n[v.id]=U);let k=U[T.id];k===void 0&&(k={},U[T.id]=k);let H=k[I];return H===void 0&&(H=d(l()),k[I]=H),H}function d(v){let T=[],L=[],I=[];for(let U=0;U<t;U++)T[U]=0,L[U]=0,I[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:L,attributeDivisors:I,object:v,attributes:{},index:null}}function f(v,T,L,I){let U=r.attributes,k=T.attributes,H=0,W=L.getAttributes();for(let N in W)if(W[N].location>=0){let se=U[N],he=k[N];if(he===void 0&&(N==="instanceMatrix"&&v.instanceMatrix&&(he=v.instanceMatrix),N==="instanceColor"&&v.instanceColor&&(he=v.instanceColor)),se===void 0||se.attribute!==he||he&&se.data!==he.data)return!0;H++}return r.attributesNum!==H||r.index!==I}function g(v,T,L,I){let U={},k=T.attributes,H=0,W=L.getAttributes();for(let N in W)if(W[N].location>=0){let se=k[N];se===void 0&&(N==="instanceMatrix"&&v.instanceMatrix&&(se=v.instanceMatrix),N==="instanceColor"&&v.instanceColor&&(se=v.instanceColor));let he={};he.attribute=se,se&&se.data&&(he.data=se.data),U[N]=he,H++}r.attributes=U,r.attributesNum=H,r.index=I}function x(){let v=r.newAttributes;for(let T=0,L=v.length;T<L;T++)v[T]=0}function m(v){p(v,0)}function p(v,T){let L=r.newAttributes,I=r.enabledAttributes,U=r.attributeDivisors;L[v]=1,I[v]===0&&(i.enableVertexAttribArray(v),I[v]=1),U[v]!==T&&(i.vertexAttribDivisor(v,T),U[v]=T)}function _(){let v=r.newAttributes,T=r.enabledAttributes;for(let L=0,I=T.length;L<I;L++)T[L]!==v[L]&&(i.disableVertexAttribArray(L),T[L]=0)}function b(v,T,L,I,U,k,H){H===!0?i.vertexAttribIPointer(v,T,L,U,k):i.vertexAttribPointer(v,T,L,I,U,k)}function y(v,T,L,I){x();let U=I.attributes,k=L.getAttributes(),H=T.defaultAttributeValues;for(let W in k){let N=k[W];if(N.location>=0){let J=U[W];if(J===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(J=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(J=v.instanceColor)),J!==void 0){let se=J.normalized,he=J.itemSize,ae=e.get(J);if(ae===void 0)continue;let xe=ae.buffer,X=ae.type,K=ae.bytesPerElement,oe=X===i.INT||X===i.UNSIGNED_INT||J.gpuType===sh;if(J.isInterleavedBufferAttribute){let ne=J.data,ve=ne.stride,Ce=J.offset;if(ne.isInstancedInterleavedBuffer){for(let be=0;be<N.locationSize;be++)p(N.location+be,ne.meshPerAttribute);v.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let be=0;be<N.locationSize;be++)m(N.location+be);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let be=0;be<N.locationSize;be++)b(N.location+be,he/N.locationSize,X,se,ve*K,(Ce+he/N.locationSize*be)*K,oe)}else{if(J.isInstancedBufferAttribute){for(let ne=0;ne<N.locationSize;ne++)p(N.location+ne,J.meshPerAttribute);v.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ne=0;ne<N.locationSize;ne++)m(N.location+ne);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let ne=0;ne<N.locationSize;ne++)b(N.location+ne,he/N.locationSize,X,se,he*K,he/N.locationSize*ne*K,oe)}}else if(H!==void 0){let se=H[W];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(N.location,se);break;case 3:i.vertexAttrib3fv(N.location,se);break;case 4:i.vertexAttrib4fv(N.location,se);break;default:i.vertexAttrib1fv(N.location,se)}}}}_()}function D(){P();for(let v in n){let T=n[v];for(let L in T){let I=T[L];for(let U in I)h(I[U].object),delete I[U];delete T[L]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;let T=n[v.id];for(let L in T){let I=T[L];for(let U in I)h(I[U].object),delete I[U];delete T[L]}delete n[v.id]}function R(v){for(let T in n){let L=n[T];if(L[v.id]===void 0)continue;let I=L[v.id];for(let U in I)h(I[U].object),delete I[U];delete L[v.id]}}function P(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:D,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function Fg(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Bg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Cn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let P=R===rn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==oi&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Bn&&!P)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:D,maxSamples:w}}function zg(i){let e=this,t=null,n=0,s=!1,r=!1,o=new ni,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let _=r?0:n,b=_*4,y=p.clippingState||null;l.value=y,y=h(g,d,b,f);for(let D=0;D!==b;++D)y[D]=t[D];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,y=f;b!==x;++b,y+=4)o.copy(u[b]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Hg(i){let e=new WeakMap;function t(o,a){return a===Ul?o.mapping=Ns:a===Nl&&(o.mapping=Os),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ul||a===Nl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new mc(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Hs=class extends Go{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Cs=4,Au=[.125,.215,.35,.446,.526,.582],Ji=20,pl=new Hs,Ru=new Re,ml=null,gl=0,xl=0,vl=!1,Zi=(1+Math.sqrt(5))/2,bs=1/Zi,Cu=[new C(-Zi,bs,0),new C(Zi,bs,0),new C(-bs,0,Zi),new C(bs,0,Zi),new C(0,Zi,-bs),new C(0,Zi,bs),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],ks=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ml=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ml,gl,xl),this._renderer.xr.enabled=vl,e.scissorTest=!1,vo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ns||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ml=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:rn,format:Cn,colorSpace:Ui,depthBuffer:!1},s=Pu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kg(r)),this._blurMaterial=Vg(r,e,t)}return s}_compileMaterial(e){let t=new $e(this._lodPlanes[0],e);this._renderer.compile(t,pl)}_sceneToCubeUV(e,t,n,s){let a=new kt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ru),h.toneMapping=Ai,h.autoClear=!1;let f=new vn({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),g=new $e(new Ye,f),x=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(Ru),x=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):_===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let b=this._cubeSize;vo(s,_*b,p>2?b:0,b,b),h.setRenderTarget(s),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ns||e.mapping===Os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Iu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new $e(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;vo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,pl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Cu[(s-r-1)%Cu.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new $e(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ji-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Ji;m>Ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ji}`);let p=[],_=0;for(let R=0;R<Ji;++R){let P=R/x,S=Math.exp(-P*P/2);p.push(S),R===0?_+=S:R<m&&(_+=2*S)}for(let R=0;R<p.length;R++)p[R]=p[R]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;let y=this._sizeLods[s],D=3*y*(s>b-Cs?s-b+Cs:0),w=4*(this._cubeSize-y);vo(t,D,w,3*y,2*y),l.setRenderTarget(t),l.render(u,pl)}};function kg(i){let e=[],t=[],n=[],s=i,r=i-Cs+1+Au.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Cs?l=Au[o-i+Cs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,_=new Float32Array(x*g*f),b=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let w=0;w<f;w++){let R=w%3*2/3-1,P=w>2?0:-1,S=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];_.set(S,x*g*w),b.set(d,m*g*w);let v=[w,w,w,w,w,w];y.set(v,p*g*w)}let D=new St;D.setAttribute("position",new _t(_,x)),D.setAttribute("uv",new _t(b,m)),D.setAttribute("faceIndex",new _t(y,p)),e.push(D),s>Cs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Pu(i,e,t){let n=new Bt(i,e,t);return n.texture.mapping=aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Vg(i,e,t){let n=new Float32Array(Ji),s=new C(0,1,0);return new ft({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Iu(){return new ft({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Lu(){return new ft({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function ph(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Gg(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ul||l===Nl,h=l===Ns||l===Os;if(c||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new ks(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new ks(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Wg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&vr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Xg(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let _=f.array;x=f.version;for(let b=0,y=_.length;b<y;b+=3){let D=_[b+0],w=_[b+1],R=_[b+2];d.push(D,w,w,R,R,D)}}else if(g!==void 0){let _=g.array;x=g.version;for(let b=0,y=_.length/3-1;b<y;b+=3){let D=b+0,w=b+1,R=b+2;d.push(D,w,w,R,R,D)}}else return;let m=new(_d(d)?Vo:ko)(d,1);m.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function qg(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let _=0;_<g;_++)p+=f[_]*x[_];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Yg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Zg(i,e,t){let n=new WeakMap,s=new wt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let S=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],b=0;f===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let y=a.attributes.position.count*b,D=1;y>e.maxTextureSize&&(D=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let w=new Float32Array(y*D*4*u),R=new Bo(w,y,D,u);R.type=Bn,R.needsUpdate=!0;let P=b*4;for(let v=0;v<u;v++){let T=m[v],L=p[v],I=_[v],U=y*D*4*v;for(let k=0;k<T.count;k++){let H=k*P;f===!0&&(s.fromBufferAttribute(T,k),w[U+H+0]=s.x,w[U+H+1]=s.y,w[U+H+2]=s.z,w[U+H+3]=0),g===!0&&(s.fromBufferAttribute(L,k),w[U+H+4]=s.x,w[U+H+5]=s.y,w[U+H+6]=s.z,w[U+H+7]=0),x===!0&&(s.fromBufferAttribute(I,k),w[U+H+8]=s.x,w[U+H+9]=s.y,w[U+H+10]=s.z,w[U+H+11]=I.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new re(y,D)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Kg(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Xo=class extends Vt{constructor(e,t,n,s,r,o,a,l,c,h=Is){if(h!==Is&&h!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Is&&(n=$i),n===void 0&&h===Bs&&(n=Fs),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:qt,this.minFilter=l!==void 0?l:qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ed=new Vt,Du=new Xo(1,1),wd=new Bo,Td=new fc,Ad=new Wo,Uu=[],Nu=[],Ou=new Float32Array(16),Fu=new Float32Array(9),Bu=new Float32Array(4);function Ks(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Uu[s];if(r===void 0&&(r=new Float32Array(s),Uu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function It(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ca(i,e){let t=Nu[e];t===void 0&&(t=new Int32Array(e),Nu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Jg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function jg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2fv(this.addr,e),It(t,e)}}function Qg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;i.uniform3fv(this.addr,e),It(t,e)}}function $g(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4fv(this.addr,e),It(t,e)}}function ex(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,n))return;Bu.set(n),i.uniformMatrix2fv(this.addr,!1,Bu),It(t,n)}}function tx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,n))return;Fu.set(n),i.uniformMatrix3fv(this.addr,!1,Fu),It(t,n)}}function nx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,n))return;Ou.set(n),i.uniformMatrix4fv(this.addr,!1,Ou),It(t,n)}}function ix(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function sx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2iv(this.addr,e),It(t,e)}}function rx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3iv(this.addr,e),It(t,e)}}function ox(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4iv(this.addr,e),It(t,e)}}function ax(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function lx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2uiv(this.addr,e),It(t,e)}}function cx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3uiv(this.addr,e),It(t,e)}}function hx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4uiv(this.addr,e),It(t,e)}}function ux(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Du.compareFunction=yd,r=Du):r=Ed,t.setTexture2D(e||r,s)}function dx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Td,s)}function fx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ad,s)}function px(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||wd,s)}function mx(i){switch(i){case 5126:return Jg;case 35664:return jg;case 35665:return Qg;case 35666:return $g;case 35674:return ex;case 35675:return tx;case 35676:return nx;case 5124:case 35670:return ix;case 35667:case 35671:return sx;case 35668:case 35672:return rx;case 35669:case 35673:return ox;case 5125:return ax;case 36294:return lx;case 36295:return cx;case 36296:return hx;case 35678:case 36198:case 36298:case 36306:case 35682:return ux;case 35679:case 36299:case 36307:return dx;case 35680:case 36300:case 36308:case 36293:return fx;case 36289:case 36303:case 36311:case 36292:return px}}function gx(i,e){i.uniform1fv(this.addr,e)}function xx(i,e){let t=Ks(e,this.size,2);i.uniform2fv(this.addr,t)}function vx(i,e){let t=Ks(e,this.size,3);i.uniform3fv(this.addr,t)}function yx(i,e){let t=Ks(e,this.size,4);i.uniform4fv(this.addr,t)}function _x(i,e){let t=Ks(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Mx(i,e){let t=Ks(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Sx(i,e){let t=Ks(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function bx(i,e){i.uniform1iv(this.addr,e)}function Ex(i,e){i.uniform2iv(this.addr,e)}function wx(i,e){i.uniform3iv(this.addr,e)}function Tx(i,e){i.uniform4iv(this.addr,e)}function Ax(i,e){i.uniform1uiv(this.addr,e)}function Rx(i,e){i.uniform2uiv(this.addr,e)}function Cx(i,e){i.uniform3uiv(this.addr,e)}function Px(i,e){i.uniform4uiv(this.addr,e)}function Ix(i,e,t){let n=this.cache,s=e.length,r=ca(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Ed,r[o])}function Lx(i,e,t){let n=this.cache,s=e.length,r=ca(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Td,r[o])}function Dx(i,e,t){let n=this.cache,s=e.length,r=ca(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ad,r[o])}function Ux(i,e,t){let n=this.cache,s=e.length,r=ca(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||wd,r[o])}function Nx(i){switch(i){case 5126:return gx;case 35664:return xx;case 35665:return vx;case 35666:return yx;case 35674:return _x;case 35675:return Mx;case 35676:return Sx;case 5124:case 35670:return bx;case 35667:case 35671:return Ex;case 35668:case 35672:return wx;case 35669:case 35673:return Tx;case 5125:return Ax;case 36294:return Rx;case 36295:return Cx;case 36296:return Px;case 35678:case 36198:case 36298:case 36306:case 35682:return Ix;case 35679:case 36299:case 36307:return Lx;case 35680:case 36300:case 36308:case 36293:return Dx;case 36289:case 36303:case 36311:case 36292:return Ux}}var gc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=mx(t.type)}},xc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Nx(t.type)}},vc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},yl=/(\w+)(\])?(\[|\.)?/g;function zu(i,e){i.seq.push(e),i.map[e.id]=e}function Ox(i,e,t){let n=i.name,s=n.length;for(yl.lastIndex=0;;){let r=yl.exec(n),o=yl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){zu(t,c===void 0?new gc(a,i,e):new xc(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new vc(a),zu(t,u)),t=u}}}var Ds=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Ox(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Hu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Fx=37297,Bx=0;function zx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var ku=new We;function Hx(i){Ze._getMatrix(ku,Ze.workingColorSpace,i);let e=`mat3( ${ku.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(i)){case la:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Vu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+zx(i.getShaderSource(e),o)}else return s}function kx(i,e){let t=Hx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Vx(i,e){let t;switch(e){case $c:t="Linear";break;case eh:t="Reinhard";break;case th:t="Cineon";break;case Ys:t="ACESFilmic";break;case nh:t="AgX";break;case ih:t="Neutral";break;case rp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var yo=new C;function Gx(){Ze.getLuminanceCoefficients(yo);let i=yo.x.toFixed(4),e=yo.y.toFixed(4),t=yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yr).join(`
`)}function Xx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function yr(i){return i!==""}function Gu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Yx=/^[ \t]*#include +<([\w\d./]+)>/gm;function yc(i){return i.replace(Yx,Kx)}var Zx=new Map;function Kx(i,e){let t=qe[e];if(t===void 0){let n=Zx.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return yc(t)}var Jx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xu(i){return i.replace(Jx,jx)}function jx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Qx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ld?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===jc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ti&&(e="SHADOWMAP_TYPE_VSM"),e}function $x(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ns:case Os:e="ENVMAP_TYPE_CUBE";break;case aa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ev(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Os:e="ENVMAP_MODE_REFRACTION";break}return e}function tv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Qc:e="ENVMAP_BLENDING_MULTIPLY";break;case ip:e="ENVMAP_BLENDING_MIX";break;case sp:e="ENVMAP_BLENDING_ADD";break}return e}function nv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function iv(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Qx(t),c=$x(t),h=ev(t),u=tv(t),d=nv(t),f=Wx(t),g=Xx(r),x=s.createProgram(),m,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(yr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(yr).join(`
`),p.length>0&&(p+=`
`)):(m=[qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yr).join(`
`),p=[qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ai?"#define TONE_MAPPING":"",t.toneMapping!==Ai?qe.tonemapping_pars_fragment:"",t.toneMapping!==Ai?Vx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,kx("linearToOutputTexel",t.outputColorSpace),Gx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yr).join(`
`)),o=yc(o),o=Gu(o,t),o=Wu(o,t),a=yc(a),a=Gu(a,t),a=Wu(a,t),o=Xu(o),a=Xu(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ru?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ru?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=_+m+o,y=_+p+a,D=Hu(s,s.VERTEX_SHADER,b),w=Hu(s,s.FRAGMENT_SHADER,y);s.attachShader(x,D),s.attachShader(x,w),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(T){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(x).trim(),I=s.getShaderInfoLog(D).trim(),U=s.getShaderInfoLog(w).trim(),k=!0,H=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,D,w);else{let W=Vu(s,D,"vertex"),N=Vu(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+L+`
`+W+`
`+N)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(I===""||U==="")&&(H=!1);H&&(T.diagnostics={runnable:k,programLog:L,vertexShader:{log:I,prefix:m},fragmentShader:{log:U,prefix:p}})}s.deleteShader(D),s.deleteShader(w),P=new Ds(s,x),S=qx(s,x)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,Fx)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Bx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=w,this}var sv=0,_c=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Mc(e),t.set(e,n)),n}},Mc=class{constructor(e){this.id=sv++,this.code=e,this.usedTimes=0}};function rv(i,e,t,n,s,r,o){let a=new Ho,l=new _c,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,v,T,L,I){let U=L.fog,k=I.geometry,H=S.isMeshStandardMaterial?L.environment:null,W=(S.isMeshStandardMaterial?t:e).get(S.envMap||H),N=W&&W.mapping===aa?W.image.height:null,J=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let se=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,he=se!==void 0?se.length:0,ae=0;k.morphAttributes.position!==void 0&&(ae=1),k.morphAttributes.normal!==void 0&&(ae=2),k.morphAttributes.color!==void 0&&(ae=3);let xe,X,K,oe;if(J){let ot=Fn[J];xe=ot.vertexShader,X=ot.fragmentShader}else xe=S.vertexShader,X=S.fragmentShader,l.update(S),K=l.getVertexShaderID(S),oe=l.getFragmentShaderID(S);let ne=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),Ce=I.isInstancedMesh===!0,be=I.isBatchedMesh===!0,He=!!S.map,Le=!!S.matcap,ke=!!W,F=!!S.aoMap,pn=!!S.lightMap,Ke=!!S.bumpMap,Je=!!S.normalMap,Ne=!!S.displacementMap,pt=!!S.emissiveMap,Ue=!!S.metalnessMap,A=!!S.roughnessMap,M=S.anisotropy>0,V=S.clearcoat>0,Q=S.dispersion>0,ee=S.iridescence>0,j=S.sheen>0,Pe=S.transmission>0,fe=M&&!!S.anisotropyMap,_e=V&&!!S.clearcoatMap,Qe=V&&!!S.clearcoatNormalMap,le=V&&!!S.clearcoatRoughnessMap,Me=ee&&!!S.iridescenceMap,Oe=ee&&!!S.iridescenceThicknessMap,Be=j&&!!S.sheenColorMap,Se=j&&!!S.sheenRoughnessMap,je=!!S.specularMap,Xe=!!S.specularColorMap,ut=!!S.specularIntensityMap,O=Pe&&!!S.transmissionMap,de=Pe&&!!S.thicknessMap,Z=!!S.gradientMap,$=!!S.alphaMap,ye=S.alphaTest>0,me=!!S.alphaHash,Ve=!!S.extensions,bt=Ai;S.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(bt=i.toneMapping);let Gt={shaderID:J,shaderType:S.type,shaderName:S.name,vertexShader:xe,fragmentShader:X,defines:S.defines,customVertexShaderID:K,customFragmentShaderID:oe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:be,batchingColor:be&&I._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&I.instanceColor!==null,instancingMorph:Ce&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ui,alphaToCoverage:!!S.alphaToCoverage,map:He,matcap:Le,envMap:ke,envMapMode:ke&&W.mapping,envMapCubeUVHeight:N,aoMap:F,lightMap:pn,bumpMap:Ke,normalMap:Je,displacementMap:d&&Ne,emissiveMap:pt,normalMapObjectSpace:Je&&S.normalMapType===cp,normalMapTangentSpace:Je&&S.normalMapType===uh,metalnessMap:Ue,roughnessMap:A,anisotropy:M,anisotropyMap:fe,clearcoat:V,clearcoatMap:_e,clearcoatNormalMap:Qe,clearcoatRoughnessMap:le,dispersion:Q,iridescence:ee,iridescenceMap:Me,iridescenceThicknessMap:Oe,sheen:j,sheenColorMap:Be,sheenRoughnessMap:Se,specularMap:je,specularColorMap:Xe,specularIntensityMap:ut,transmission:Pe,transmissionMap:O,thicknessMap:de,gradientMap:Z,opaque:S.transparent===!1&&S.blending===Ps&&S.alphaToCoverage===!1,alphaMap:$,alphaTest:ye,alphaHash:me,combine:S.combine,mapUv:He&&x(S.map.channel),aoMapUv:F&&x(S.aoMap.channel),lightMapUv:pn&&x(S.lightMap.channel),bumpMapUv:Ke&&x(S.bumpMap.channel),normalMapUv:Je&&x(S.normalMap.channel),displacementMapUv:Ne&&x(S.displacementMap.channel),emissiveMapUv:pt&&x(S.emissiveMap.channel),metalnessMapUv:Ue&&x(S.metalnessMap.channel),roughnessMapUv:A&&x(S.roughnessMap.channel),anisotropyMapUv:fe&&x(S.anisotropyMap.channel),clearcoatMapUv:_e&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:Qe&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Se&&x(S.sheenRoughnessMap.channel),specularMapUv:je&&x(S.specularMap.channel),specularColorMapUv:Xe&&x(S.specularColorMap.channel),specularIntensityMapUv:ut&&x(S.specularIntensityMap.channel),transmissionMapUv:O&&x(S.transmissionMap.channel),thicknessMapUv:de&&x(S.thicknessMap.channel),alphaMapUv:$&&x(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Je||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!k.attributes.uv&&(He||$),fog:!!U,useFog:S.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ve,skinning:I.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:ae,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:bt,decodeVideoTexture:He&&S.map.isVideoTexture===!0&&Ze.getTransfer(S.map.colorSpace)===st,decodeVideoTextureEmissive:pt&&S.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(S.emissiveMap.colorSpace)===st,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===jt,flipSided:S.side===Ft,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ve&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&S.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Gt.vertexUv1s=c.has(1),Gt.vertexUv2s=c.has(2),Gt.vertexUv3s=c.has(3),c.clear(),Gt}function p(S){let v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(let T in S.defines)v.push(T),v.push(S.defines[T]);return S.isRawShaderMaterial===!1&&(_(v,S),b(v,S),v.push(i.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function _(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function b(S,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){let v=g[S.type],T;if(v){let L=Fn[v];T=_n.clone(L.uniforms)}else T=S.uniforms;return T}function D(S,v){let T;for(let L=0,I=h.length;L<I;L++){let U=h[L];if(U.cacheKey===v){T=U,++T.usedTimes;break}}return T===void 0&&(T=new iv(i,v,S,r),h.push(T)),T}function w(S){if(--S.usedTimes===0){let v=h.indexOf(S);h[v]=h[h.length-1],h.pop(),S.destroy()}}function R(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:D,releaseProgram:w,releaseShaderCache:R,programs:h,dispose:P}}function ov(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function av(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Yu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Zu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,g,x,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function a(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||av),n.length>1&&n.sort(d||Yu),s.length>1&&s.sort(d||Yu)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function lv(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Zu,i.set(n,[o])):s>=r.length?(o=new Zu,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function cv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Re};break;case"SpotLight":t={position:new C,direction:new C,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function hv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var uv=0;function dv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function fv(i){let e=new cv,t=hv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new lt,o=new lt;function a(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,_=0,b=0,y=0,D=0,w=0,R=0;c.sort(dv);for(let S=0,v=c.length;S<v;S++){let T=c[S],L=T.color,I=T.intensity,U=T.distance,k=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=L.r*I,u+=L.g*I,d+=L.b*I;else if(T.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(T.sh.coefficients[H],I);R++}else if(T.isDirectionalLight){let H=e.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let W=T.shadow,N=t.get(T);N.shadowIntensity=W.intensity,N.shadowBias=W.bias,N.shadowNormalBias=W.normalBias,N.shadowRadius=W.radius,N.shadowMapSize=W.mapSize,n.directionalShadow[f]=N,n.directionalShadowMap[f]=k,n.directionalShadowMatrix[f]=T.shadow.matrix,_++}n.directional[f]=H,f++}else if(T.isSpotLight){let H=e.get(T);H.position.setFromMatrixPosition(T.matrixWorld),H.color.copy(L).multiplyScalar(I),H.distance=U,H.coneCos=Math.cos(T.angle),H.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),H.decay=T.decay,n.spot[x]=H;let W=T.shadow;if(T.map&&(n.spotLightMap[D]=T.map,D++,W.updateMatrices(T),T.castShadow&&w++),n.spotLightMatrix[x]=W.matrix,T.castShadow){let N=t.get(T);N.shadowIntensity=W.intensity,N.shadowBias=W.bias,N.shadowNormalBias=W.normalBias,N.shadowRadius=W.radius,N.shadowMapSize=W.mapSize,n.spotShadow[x]=N,n.spotShadowMap[x]=k,y++}x++}else if(T.isRectAreaLight){let H=e.get(T);H.color.copy(L).multiplyScalar(I),H.halfWidth.set(T.width*.5,0,0),H.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=H,m++}else if(T.isPointLight){let H=e.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),H.distance=T.distance,H.decay=T.decay,T.castShadow){let W=T.shadow,N=t.get(T);N.shadowIntensity=W.intensity,N.shadowBias=W.bias,N.shadowNormalBias=W.normalBias,N.shadowRadius=W.radius,N.shadowMapSize=W.mapSize,N.shadowCameraNear=W.camera.near,N.shadowCameraFar=W.camera.far,n.pointShadow[g]=N,n.pointShadowMap[g]=k,n.pointShadowMatrix[g]=T.shadow.matrix,b++}n.point[g]=H,g++}else if(T.isHemisphereLight){let H=e.get(T);H.skyColor.copy(T.color).multiplyScalar(I),H.groundColor.copy(T.groundColor).multiplyScalar(I),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==_||P.numPointShadows!==b||P.numSpotShadows!==y||P.numSpotMaps!==D||P.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+D-w,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,P.directionalLength=f,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=_,P.numPointShadows=b,P.numSpotShadows=y,P.numSpotMaps=D,P.numLightProbes=R,n.version=uv++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){let b=c[p];if(b.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(b.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(b.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function Ku(i){let e=new fv(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function pv(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Ku(i),e.set(s,[a])):r>=o.length?(a=new Ku(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Sc=class extends kn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ap,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},bc=class extends kn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},mv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xv(i,e,t){let n=new Ar,s=new re,r=new re,o=new wt,a=new Sc({depthPacking:lp}),l=new bc,c={},h=t.maxTextureSize,u={[Ri]:Ft,[Ft]:Ri,[jt]:jt},d=new ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:mv,fragmentShader:gv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new St;g.setAttribute("position",new _t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new $e(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ld;let p=this.type;this.render=function(w,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let S=i.getRenderTarget(),v=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),L=i.state;L.setBlending(zn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let I=p!==ti&&this.type===ti,U=p===ti&&this.type!==ti;for(let k=0,H=w.length;k<H;k++){let W=w[k],N=W.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);let J=N.getFrameExtents();if(s.multiply(J),r.copy(N.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,N.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,N.mapSize.y=r.y)),N.map===null||I===!0||U===!0){let he=this.type!==ti?{minFilter:qt,magFilter:qt}:{};N.map!==null&&N.map.dispose(),N.map=new Bt(s.x,s.y,he),N.map.texture.name=W.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();let se=N.getViewportCount();for(let he=0;he<se;he++){let ae=N.getViewport(he);o.set(r.x*ae.x,r.y*ae.y,r.x*ae.z,r.y*ae.w),L.viewport(o),N.updateMatrices(W,he),n=N.getFrustum(),y(R,P,N.camera,W,this.type)}N.isPointLightShadow!==!0&&this.type===ti&&_(N,P),N.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,v,T)};function _(w,R){let P=e.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Bt(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,P,d,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,P,f,x,null)}function b(w,R,P,S){let v=null,T=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(T!==void 0)v=T;else if(v=P.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let L=v.uuid,I=R.uuid,U=c[L];U===void 0&&(U={},c[L]=U);let k=U[I];k===void 0&&(k=v.clone(),U[I]=k,R.addEventListener("dispose",D)),v=k}if(v.visible=R.visible,v.wireframe=R.wireframe,S===ti?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:u[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let L=i.properties.get(v);L.light=P}return v}function y(w,R,P,S,v){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===ti)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);let I=e.update(w),U=w.material;if(Array.isArray(U)){let k=I.groups;for(let H=0,W=k.length;H<W;H++){let N=k[H],J=U[N.materialIndex];if(J&&J.visible){let se=b(w,J,S,v);w.onBeforeShadow(i,w,R,P,I,se,N),i.renderBufferDirect(P,null,I,se,w,N),w.onAfterShadow(i,w,R,P,I,se,N)}}}else if(U.visible){let k=b(w,U,S,v);w.onBeforeShadow(i,w,R,P,I,k,null),i.renderBufferDirect(P,null,I,k,w,null),w.onAfterShadow(i,w,R,P,I,k,null)}}let L=w.children;for(let I=0,U=L.length;I<U;I++)y(L[I],R,P,S,v)}function D(w){w.target.removeEventListener("dispose",D);for(let P in c){let S=c[P],v=w.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}var vv={[Al]:Rl,[Cl]:Ll,[Pl]:Dl,[Us]:Il,[Rl]:Al,[Ll]:Cl,[Dl]:Pl,[Il]:Us};function yv(i,e){function t(){let O=!1,de=new wt,Z=null,$=new wt(0,0,0,0);return{setMask:function(ye){Z!==ye&&!O&&(i.colorMask(ye,ye,ye,ye),Z=ye)},setLocked:function(ye){O=ye},setClear:function(ye,me,Ve,bt,Gt){Gt===!0&&(ye*=bt,me*=bt,Ve*=bt),de.set(ye,me,Ve,bt),$.equals(de)===!1&&(i.clearColor(ye,me,Ve,bt),$.copy(de))},reset:function(){O=!1,Z=null,$.set(-1,0,0,0)}}}function n(){let O=!1,de=!1,Z=null,$=null,ye=null;return{setReversed:function(me){if(de!==me){let Ve=e.get("EXT_clip_control");de?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT);let bt=ye;ye=null,this.setClear(bt)}de=me},getReversed:function(){return de},setTest:function(me){me?ne(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(me){Z!==me&&!O&&(i.depthMask(me),Z=me)},setFunc:function(me){if(de&&(me=vv[me]),$!==me){switch(me){case Al:i.depthFunc(i.NEVER);break;case Rl:i.depthFunc(i.ALWAYS);break;case Cl:i.depthFunc(i.LESS);break;case Us:i.depthFunc(i.LEQUAL);break;case Pl:i.depthFunc(i.EQUAL);break;case Il:i.depthFunc(i.GEQUAL);break;case Ll:i.depthFunc(i.GREATER);break;case Dl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=me}},setLocked:function(me){O=me},setClear:function(me){ye!==me&&(de&&(me=1-me),i.clearDepth(me),ye=me)},reset:function(){O=!1,Z=null,$=null,ye=null,de=!1}}}function s(){let O=!1,de=null,Z=null,$=null,ye=null,me=null,Ve=null,bt=null,Gt=null;return{setTest:function(ot){O||(ot?ne(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(ot){de!==ot&&!O&&(i.stencilMask(ot),de=ot)},setFunc:function(ot,bn,Zn){(Z!==ot||$!==bn||ye!==Zn)&&(i.stencilFunc(ot,bn,Zn),Z=ot,$=bn,ye=Zn)},setOp:function(ot,bn,Zn){(me!==ot||Ve!==bn||bt!==Zn)&&(i.stencilOp(ot,bn,Zn),me=ot,Ve=bn,bt=Zn)},setLocked:function(ot){O=ot},setClear:function(ot){Gt!==ot&&(i.clearStencil(ot),Gt=ot)},reset:function(){O=!1,de=null,Z=null,$=null,ye=null,me=null,Ve=null,bt=null,Gt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,_=null,b=null,y=null,D=null,w=null,R=new Re(0,0,0),P=0,S=!1,v=null,T=null,L=null,I=null,U=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,W=0,N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(N)[1]),H=W>=1):N.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),H=W>=2);let J=null,se={},he=i.getParameter(i.SCISSOR_BOX),ae=i.getParameter(i.VIEWPORT),xe=new wt().fromArray(he),X=new wt().fromArray(ae);function K(O,de,Z,$){let ye=new Uint8Array(4),me=i.createTexture();i.bindTexture(O,me),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ve=0;Ve<Z;Ve++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(de+Ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return me}let oe={};oe[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),oe[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),oe[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(i.DEPTH_TEST),o.setFunc(Us),Ke(!1),Je(Qh),ne(i.CULL_FACE),F(zn);function ne(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function ve(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Ce(O,de){return u[O]!==de?(i.bindFramebuffer(O,de),u[O]=de,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=de),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=de),!0):!1}function be(O,de){let Z=f,$=!1;if(O){Z=d.get(de),Z===void 0&&(Z=[],d.set(de,Z));let ye=O.textures;if(Z.length!==ye.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let me=0,Ve=ye.length;me<Ve;me++)Z[me]=i.COLOR_ATTACHMENT0+me;Z.length=ye.length,$=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,$=!0);$&&i.drawBuffers(Z)}function He(O){return g!==O?(i.useProgram(O),g=O,!0):!1}let Le={[Ki]:i.FUNC_ADD,[Hf]:i.FUNC_SUBTRACT,[kf]:i.FUNC_REVERSE_SUBTRACT};Le[Vf]=i.MIN,Le[Gf]=i.MAX;let ke={[Wf]:i.ZERO,[Xf]:i.ONE,[qf]:i.SRC_COLOR,[wl]:i.SRC_ALPHA,[Qf]:i.SRC_ALPHA_SATURATE,[Jf]:i.DST_COLOR,[Zf]:i.DST_ALPHA,[Yf]:i.ONE_MINUS_SRC_COLOR,[Tl]:i.ONE_MINUS_SRC_ALPHA,[jf]:i.ONE_MINUS_DST_COLOR,[Kf]:i.ONE_MINUS_DST_ALPHA,[$f]:i.CONSTANT_COLOR,[ep]:i.ONE_MINUS_CONSTANT_COLOR,[tp]:i.CONSTANT_ALPHA,[np]:i.ONE_MINUS_CONSTANT_ALPHA};function F(O,de,Z,$,ye,me,Ve,bt,Gt,ot){if(O===zn){x===!0&&(ve(i.BLEND),x=!1);return}if(x===!1&&(ne(i.BLEND),x=!0),O!==zf){if(O!==m||ot!==S){if((p!==Ki||y!==Ki)&&(i.blendEquation(i.FUNC_ADD),p=Ki,y=Ki),ot)switch(O){case Ps:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ci:i.blendFunc(i.ONE,i.ONE);break;case $h:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ps:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ci:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case $h:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}_=null,b=null,D=null,w=null,R.set(0,0,0),P=0,m=O,S=ot}return}ye=ye||de,me=me||Z,Ve=Ve||$,(de!==p||ye!==y)&&(i.blendEquationSeparate(Le[de],Le[ye]),p=de,y=ye),(Z!==_||$!==b||me!==D||Ve!==w)&&(i.blendFuncSeparate(ke[Z],ke[$],ke[me],ke[Ve]),_=Z,b=$,D=me,w=Ve),(bt.equals(R)===!1||Gt!==P)&&(i.blendColor(bt.r,bt.g,bt.b,Gt),R.copy(bt),P=Gt),m=O,S=!1}function pn(O,de){O.side===jt?ve(i.CULL_FACE):ne(i.CULL_FACE);let Z=O.side===Ft;de&&(Z=!Z),Ke(Z),O.blending===Ps&&O.transparent===!1?F(zn):F(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let $=O.stencilWrite;a.setTest($),$&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),pt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(O){v!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),v=O)}function Je(O){O!==Ff?(ne(i.CULL_FACE),O!==T&&(O===Qh?i.cullFace(i.BACK):O===Bf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),T=O}function Ne(O){O!==L&&(H&&i.lineWidth(O),L=O)}function pt(O,de,Z){O?(ne(i.POLYGON_OFFSET_FILL),(I!==de||U!==Z)&&(i.polygonOffset(de,Z),I=de,U=Z)):ve(i.POLYGON_OFFSET_FILL)}function Ue(O){O?ne(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function A(O){O===void 0&&(O=i.TEXTURE0+k-1),J!==O&&(i.activeTexture(O),J=O)}function M(O,de,Z){Z===void 0&&(J===null?Z=i.TEXTURE0+k-1:Z=J);let $=se[Z];$===void 0&&($={type:void 0,texture:void 0},se[Z]=$),($.type!==O||$.texture!==de)&&(J!==Z&&(i.activeTexture(Z),J=Z),i.bindTexture(O,de||oe[O]),$.type=O,$.texture=de)}function V(){let O=se[J];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ee(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pe(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Qe(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function le(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Oe(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Be(O){xe.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),xe.copy(O))}function Se(O){X.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),X.copy(O))}function je(O,de){let Z=c.get(de);Z===void 0&&(Z=new WeakMap,c.set(de,Z));let $=Z.get(O);$===void 0&&($=i.getUniformBlockIndex(de,O.name),Z.set(O,$))}function Xe(O,de){let $=c.get(de).get(O);l.get(de)!==$&&(i.uniformBlockBinding(de,$,O.__bindingPointIndex),l.set(de,$))}function ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},J=null,se={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,_=null,b=null,y=null,D=null,w=null,R=new Re(0,0,0),P=0,S=!1,v=null,T=null,L=null,I=null,U=null,xe.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ne,disable:ve,bindFramebuffer:Ce,drawBuffers:be,useProgram:He,setBlending:F,setMaterial:pn,setFlipSided:Ke,setCullFace:Je,setLineWidth:Ne,setPolygonOffset:pt,setScissorTest:Ue,activeTexture:A,bindTexture:M,unbindTexture:V,compressedTexImage2D:Q,compressedTexImage3D:ee,texImage2D:Me,texImage3D:Oe,updateUBOMapping:je,uniformBlockBinding:Xe,texStorage2D:Qe,texStorage3D:le,texSubImage2D:j,texSubImage3D:Pe,compressedTexSubImage2D:fe,compressedTexSubImage3D:_e,scissor:Be,viewport:Se,reset:ut}}function Ju(i,e,t,n){let s=_v(n);switch(t){case fd:return i*e;case md:return i*e;case gd:return i*e*2;case ah:return i*e/s.components*s.byteLength;case lh:return i*e/s.components*s.byteLength;case xd:return i*e*2/s.components*s.byteLength;case ch:return i*e*2/s.components*s.byteLength;case pd:return i*e*3/s.components*s.byteLength;case Cn:return i*e*4/s.components*s.byteLength;case hh:return i*e*4/s.components*s.byteLength;case Ro:case Co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Po:case Io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bl:case Hl:return Math.max(i,16)*Math.max(e,8)/4;case Fl:case zl:return Math.max(i,8)*Math.max(e,8)/2;case kl:case Vl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Gl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ql:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case jl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ql:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case $l:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ec:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case tc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case nc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ic:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Lo:case sc:case rc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case vd:case oc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ac:case lc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _v(i){switch(i){case oi:case hd:return{byteLength:1,components:1};case wr:case ud:case rn:return{byteLength:2,components:1};case rh:case oh:return{byteLength:2,components:4};case $i:case sh:case Bn:return{byteLength:4,components:1};case dd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Mv(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return f?new OffscreenCanvas(A,M):Oo("canvas")}function x(A,M,V){let Q=1,ee=Ue(A);if((ee.width>V||ee.height>V)&&(Q=V/Math.max(ee.width,ee.height)),Q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let j=Math.floor(Q*ee.width),Pe=Math.floor(Q*ee.height);u===void 0&&(u=g(j,Pe));let fe=M?g(j,Pe):u;return fe.width=j,fe.height=Pe,fe.getContext("2d").drawImage(A,0,0,j,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+j+"x"+Pe+")."),fe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function _(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(A,M,V,Q,ee=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let j=M;if(M===i.RED&&(V===i.FLOAT&&(j=i.R32F),V===i.HALF_FLOAT&&(j=i.R16F),V===i.UNSIGNED_BYTE&&(j=i.R8)),M===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.R8UI),V===i.UNSIGNED_SHORT&&(j=i.R16UI),V===i.UNSIGNED_INT&&(j=i.R32UI),V===i.BYTE&&(j=i.R8I),V===i.SHORT&&(j=i.R16I),V===i.INT&&(j=i.R32I)),M===i.RG&&(V===i.FLOAT&&(j=i.RG32F),V===i.HALF_FLOAT&&(j=i.RG16F),V===i.UNSIGNED_BYTE&&(j=i.RG8)),M===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.RG8UI),V===i.UNSIGNED_SHORT&&(j=i.RG16UI),V===i.UNSIGNED_INT&&(j=i.RG32UI),V===i.BYTE&&(j=i.RG8I),V===i.SHORT&&(j=i.RG16I),V===i.INT&&(j=i.RG32I)),M===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.RGB8UI),V===i.UNSIGNED_SHORT&&(j=i.RGB16UI),V===i.UNSIGNED_INT&&(j=i.RGB32UI),V===i.BYTE&&(j=i.RGB8I),V===i.SHORT&&(j=i.RGB16I),V===i.INT&&(j=i.RGB32I)),M===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),V===i.UNSIGNED_INT&&(j=i.RGBA32UI),V===i.BYTE&&(j=i.RGBA8I),V===i.SHORT&&(j=i.RGBA16I),V===i.INT&&(j=i.RGBA32I)),M===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),M===i.RGBA){let Pe=ee?la:Ze.getTransfer(Q);V===i.FLOAT&&(j=i.RGBA32F),V===i.HALF_FLOAT&&(j=i.RGBA16F),V===i.UNSIGNED_BYTE&&(j=Pe===st?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function y(A,M){let V;return A?M===null||M===$i||M===Fs?V=i.DEPTH24_STENCIL8:M===Bn?V=i.DEPTH32F_STENCIL8:M===wr&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===$i||M===Fs?V=i.DEPTH_COMPONENT24:M===Bn?V=i.DEPTH_COMPONENT32F:M===wr&&(V=i.DEPTH_COMPONENT16),V}function D(A,M){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==qt&&A.minFilter!==xn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function w(A){let M=A.target;M.removeEventListener("dispose",w),P(M),M.isVideoTexture&&h.delete(M)}function R(A){let M=A.target;M.removeEventListener("dispose",R),v(M)}function P(A){let M=n.get(A);if(M.__webglInit===void 0)return;let V=A.source,Q=d.get(V);if(Q){let ee=Q[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&S(A),Object.keys(Q).length===0&&d.delete(V)}n.remove(A)}function S(A){let M=n.get(A);i.deleteTexture(M.__webglTexture);let V=A.source,Q=d.get(V);delete Q[M.__cacheKey],o.memory.textures--}function v(A){let M=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let ee=0;ee<M.__webglFramebuffer[Q].length;ee++)i.deleteFramebuffer(M.__webglFramebuffer[Q][ee]);else i.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)i.deleteFramebuffer(M.__webglFramebuffer[Q]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let V=A.textures;for(let Q=0,ee=V.length;Q<ee;Q++){let j=n.get(V[Q]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(V[Q])}n.remove(A)}let T=0;function L(){T=0}function I(){let A=T;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),T+=1,A}function U(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function k(A,M){let V=n.get(A);if(A.isVideoTexture&&Ne(A),A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){let Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(V,A,M);return}}t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+M)}function H(A,M){let V=n.get(A);if(A.version>0&&V.__version!==A.version){X(V,A,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+M)}function W(A,M){let V=n.get(A);if(A.version>0&&V.__version!==A.version){X(V,A,M);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+M)}function N(A,M){let V=n.get(A);if(A.version>0&&V.__version!==A.version){K(V,A,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+M)}let J={[Do]:i.REPEAT,[ji]:i.CLAMP_TO_EDGE,[Ol]:i.MIRRORED_REPEAT},se={[qt]:i.NEAREST,[op]:i.NEAREST_MIPMAP_NEAREST,[Qr]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[qa]:i.LINEAR_MIPMAP_NEAREST,[Qi]:i.LINEAR_MIPMAP_LINEAR},he={[hp]:i.NEVER,[gp]:i.ALWAYS,[up]:i.LESS,[yd]:i.LEQUAL,[dp]:i.EQUAL,[mp]:i.GEQUAL,[fp]:i.GREATER,[pp]:i.NOTEQUAL};function ae(A,M){if(M.type===Bn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===xn||M.magFilter===qa||M.magFilter===Qr||M.magFilter===Qi||M.minFilter===xn||M.minFilter===qa||M.minFilter===Qr||M.minFilter===Qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,J[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,J[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,J[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,se[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,se[M.minFilter]),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,he[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===qt||M.minFilter!==Qr&&M.minFilter!==Qi||M.type===Bn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function xe(A,M){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",w));let Q=M.source,ee=d.get(Q);ee===void 0&&(ee={},d.set(Q,ee));let j=U(M);if(j!==A.__cacheKey){ee[j]===void 0&&(ee[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ee[j].usedTimes++;let Pe=ee[A.__cacheKey];Pe!==void 0&&(ee[A.__cacheKey].usedTimes--,Pe.usedTimes===0&&S(M)),A.__cacheKey=j,A.__webglTexture=ee[j].texture}return V}function X(A,M,V){let Q=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=i.TEXTURE_3D);let ee=xe(A,M),j=M.source;t.bindTexture(Q,A.__webglTexture,i.TEXTURE0+V);let Pe=n.get(j);if(j.version!==Pe.__version||ee===!0){t.activeTexture(i.TEXTURE0+V);let fe=Ze.getPrimaries(Ze.workingColorSpace),_e=M.colorSpace===wi?null:Ze.getPrimaries(M.colorSpace),Qe=M.colorSpace===wi||fe===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let le=x(M.image,!1,s.maxTextureSize);le=pt(M,le);let Me=r.convert(M.format,M.colorSpace),Oe=r.convert(M.type),Be=b(M.internalFormat,Me,Oe,M.colorSpace,M.isVideoTexture);ae(Q,M);let Se,je=M.mipmaps,Xe=M.isVideoTexture!==!0,ut=Pe.__version===void 0||ee===!0,O=j.dataReady,de=D(M,le);if(M.isDepthTexture)Be=y(M.format===Bs,M.type),ut&&(Xe?t.texStorage2D(i.TEXTURE_2D,1,Be,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,Be,le.width,le.height,0,Me,Oe,null));else if(M.isDataTexture)if(je.length>0){Xe&&ut&&t.texStorage2D(i.TEXTURE_2D,de,Be,je[0].width,je[0].height);for(let Z=0,$=je.length;Z<$;Z++)Se=je[Z],Xe?O&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Se.width,Se.height,Me,Oe,Se.data):t.texImage2D(i.TEXTURE_2D,Z,Be,Se.width,Se.height,0,Me,Oe,Se.data);M.generateMipmaps=!1}else Xe?(ut&&t.texStorage2D(i.TEXTURE_2D,de,Be,le.width,le.height),O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le.width,le.height,Me,Oe,le.data)):t.texImage2D(i.TEXTURE_2D,0,Be,le.width,le.height,0,Me,Oe,le.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Xe&&ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,Be,je[0].width,je[0].height,le.depth);for(let Z=0,$=je.length;Z<$;Z++)if(Se=je[Z],M.format!==Cn)if(Me!==null)if(Xe){if(O)if(M.layerUpdates.size>0){let ye=Ju(Se.width,Se.height,M.format,M.type);for(let me of M.layerUpdates){let Ve=Se.data.subarray(me*ye/Se.data.BYTES_PER_ELEMENT,(me+1)*ye/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,me,Se.width,Se.height,1,Me,Ve)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Se.width,Se.height,le.depth,Me,Se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,Be,Se.width,Se.height,le.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Se.width,Se.height,le.depth,Me,Oe,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,Be,Se.width,Se.height,le.depth,0,Me,Oe,Se.data)}else{Xe&&ut&&t.texStorage2D(i.TEXTURE_2D,de,Be,je[0].width,je[0].height);for(let Z=0,$=je.length;Z<$;Z++)Se=je[Z],M.format!==Cn?Me!==null?Xe?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,Se.width,Se.height,Me,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,Be,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?O&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Se.width,Se.height,Me,Oe,Se.data):t.texImage2D(i.TEXTURE_2D,Z,Be,Se.width,Se.height,0,Me,Oe,Se.data)}else if(M.isDataArrayTexture)if(Xe){if(ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,Be,le.width,le.height,le.depth),O)if(M.layerUpdates.size>0){let Z=Ju(le.width,le.height,M.format,M.type);for(let $ of M.layerUpdates){let ye=le.data.subarray($*Z/le.data.BYTES_PER_ELEMENT,($+1)*Z/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,le.width,le.height,1,Me,Oe,ye)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Me,Oe,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Be,le.width,le.height,le.depth,0,Me,Oe,le.data);else if(M.isData3DTexture)Xe?(ut&&t.texStorage3D(i.TEXTURE_3D,de,Be,le.width,le.height,le.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Me,Oe,le.data)):t.texImage3D(i.TEXTURE_3D,0,Be,le.width,le.height,le.depth,0,Me,Oe,le.data);else if(M.isFramebufferTexture){if(ut)if(Xe)t.texStorage2D(i.TEXTURE_2D,de,Be,le.width,le.height);else{let Z=le.width,$=le.height;for(let ye=0;ye<de;ye++)t.texImage2D(i.TEXTURE_2D,ye,Be,Z,$,0,Me,Oe,null),Z>>=1,$>>=1}}else if(je.length>0){if(Xe&&ut){let Z=Ue(je[0]);t.texStorage2D(i.TEXTURE_2D,de,Be,Z.width,Z.height)}for(let Z=0,$=je.length;Z<$;Z++)Se=je[Z],Xe?O&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Me,Oe,Se):t.texImage2D(i.TEXTURE_2D,Z,Be,Me,Oe,Se);M.generateMipmaps=!1}else if(Xe){if(ut){let Z=Ue(le);t.texStorage2D(i.TEXTURE_2D,de,Be,Z.width,Z.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,Oe,le)}else t.texImage2D(i.TEXTURE_2D,0,Be,Me,Oe,le);m(M)&&p(Q),Pe.__version=j.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function K(A,M,V){if(M.image.length!==6)return;let Q=xe(A,M),ee=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+V);let j=n.get(ee);if(ee.version!==j.__version||Q===!0){t.activeTexture(i.TEXTURE0+V);let Pe=Ze.getPrimaries(Ze.workingColorSpace),fe=M.colorSpace===wi?null:Ze.getPrimaries(M.colorSpace),_e=M.colorSpace===wi||Pe===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let Qe=M.isCompressedTexture||M.image[0].isCompressedTexture,le=M.image[0]&&M.image[0].isDataTexture,Me=[];for(let $=0;$<6;$++)!Qe&&!le?Me[$]=x(M.image[$],!0,s.maxCubemapSize):Me[$]=le?M.image[$].image:M.image[$],Me[$]=pt(M,Me[$]);let Oe=Me[0],Be=r.convert(M.format,M.colorSpace),Se=r.convert(M.type),je=b(M.internalFormat,Be,Se,M.colorSpace),Xe=M.isVideoTexture!==!0,ut=j.__version===void 0||Q===!0,O=ee.dataReady,de=D(M,Oe);ae(i.TEXTURE_CUBE_MAP,M);let Z;if(Qe){Xe&&ut&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,je,Oe.width,Oe.height);for(let $=0;$<6;$++){Z=Me[$].mipmaps;for(let ye=0;ye<Z.length;ye++){let me=Z[ye];M.format!==Cn?Be!==null?Xe?O&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,0,0,me.width,me.height,Be,me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,je,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,0,0,me.width,me.height,Be,Se,me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye,je,me.width,me.height,0,Be,Se,me.data)}}}else{if(Z=M.mipmaps,Xe&&ut){Z.length>0&&de++;let $=Ue(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,de,je,$.width,$.height)}for(let $=0;$<6;$++)if(le){Xe?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Me[$].width,Me[$].height,Be,Se,Me[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,je,Me[$].width,Me[$].height,0,Be,Se,Me[$].data);for(let ye=0;ye<Z.length;ye++){let Ve=Z[ye].image[$].image;Xe?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,0,0,Ve.width,Ve.height,Be,Se,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,je,Ve.width,Ve.height,0,Be,Se,Ve.data)}}else{Xe?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Be,Se,Me[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,je,Be,Se,Me[$]);for(let ye=0;ye<Z.length;ye++){let me=Z[ye];Xe?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,0,0,Be,Se,me.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ye+1,je,Be,Se,me.image[$])}}}m(M)&&p(i.TEXTURE_CUBE_MAP),j.__version=ee.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function oe(A,M,V,Q,ee,j){let Pe=r.convert(V.format,V.colorSpace),fe=r.convert(V.type),_e=b(V.internalFormat,Pe,fe,V.colorSpace),Qe=n.get(M),le=n.get(V);if(le.__renderTarget=M,!Qe.__hasExternalTextures){let Me=Math.max(1,M.width>>j),Oe=Math.max(1,M.height>>j);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,j,_e,Me,Oe,M.depth,0,Pe,fe,null):t.texImage2D(ee,j,_e,Me,Oe,0,Pe,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Je(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,ee,le.__webglTexture,0,Ke(M)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,ee,le.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ne(A,M,V){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer){let Q=M.depthTexture,ee=Q&&Q.isDepthTexture?Q.type:null,j=y(M.stencilBuffer,ee),Pe=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=Ke(M);Je(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,j,M.width,M.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,j,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,j,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,A)}else{let Q=M.textures;for(let ee=0;ee<Q.length;ee++){let j=Q[ee],Pe=r.convert(j.format,j.colorSpace),fe=r.convert(j.type),_e=b(j.internalFormat,Pe,fe,j.colorSpace),Qe=Ke(M);V&&Je(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe,_e,M.width,M.height):Je(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qe,_e,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,_e,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ve(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=n.get(M.depthTexture);Q.__renderTarget=M,(!Q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),k(M.depthTexture,0);let ee=Q.__webglTexture,j=Ke(M);if(M.depthTexture.format===Is)Je(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(M.depthTexture.format===Bs)Je(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ce(A){let M=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){let Q=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Q){let ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Q.removeEventListener("dispose",ee)};Q.addEventListener("dispose",ee),M.__depthDisposeCallback=ee}M.__boundDepthTexture=Q}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");ve(M.__webglFramebuffer,A)}else if(V){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]===void 0)M.__webglDepthbuffer[Q]=i.createRenderbuffer(),ne(M.__webglDepthbuffer[Q],A,!1);else{let ee=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,j)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ne(M.__webglDepthbuffer,A,!1);else{let Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ee)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function be(A,M,V){let Q=n.get(A);M!==void 0&&oe(Q.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Ce(A)}function He(A){let M=A.texture,V=n.get(A),Q=n.get(M);A.addEventListener("dispose",R);let ee=A.textures,j=A.isWebGLCubeRenderTarget===!0,Pe=ee.length>1;if(Pe||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=M.version,o.memory.textures++),j){V.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[fe]=[];for(let _e=0;_e<M.mipmaps.length;_e++)V.__webglFramebuffer[fe][_e]=i.createFramebuffer()}else V.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let fe=0;fe<M.mipmaps.length;fe++)V.__webglFramebuffer[fe]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let fe=0,_e=ee.length;fe<_e;fe++){let Qe=n.get(ee[fe]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Je(A)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let fe=0;fe<ee.length;fe++){let _e=ee[fe];V.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[fe]);let Qe=r.convert(_e.format,_e.colorSpace),le=r.convert(_e.type),Me=b(_e.internalFormat,Qe,le,_e.colorSpace,A.isXRRenderTarget===!0),Oe=Ke(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,Me,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,V.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),ne(V.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),ae(i.TEXTURE_CUBE_MAP,M);for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)oe(V.__webglFramebuffer[fe][_e],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,_e);else oe(V.__webglFramebuffer[fe],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(M)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let fe=0,_e=ee.length;fe<_e;fe++){let Qe=ee[fe],le=n.get(Qe);t.bindTexture(i.TEXTURE_2D,le.__webglTexture),ae(i.TEXTURE_2D,Qe),oe(V.__webglFramebuffer,A,Qe,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,0),m(Qe)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(fe=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,Q.__webglTexture),ae(fe,M),M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)oe(V.__webglFramebuffer[_e],A,M,i.COLOR_ATTACHMENT0,fe,_e);else oe(V.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,fe,0);m(M)&&p(fe),t.unbindTexture()}A.depthBuffer&&Ce(A)}function Le(A){let M=A.textures;for(let V=0,Q=M.length;V<Q;V++){let ee=M[V];if(m(ee)){let j=_(A),Pe=n.get(ee).__webglTexture;t.bindTexture(j,Pe),p(j),t.unbindTexture()}}}let ke=[],F=[];function pn(A){if(A.samples>0){if(Je(A)===!1){let M=A.textures,V=A.width,Q=A.height,ee=i.COLOR_BUFFER_BIT,j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(A),fe=M.length>1;if(fe)for(let _e=0;_e<M.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let _e=0;_e<M.length;_e++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),fe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[_e]);let Qe=n.get(M[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Qe,0)}i.blitFramebuffer(0,0,V,Q,0,0,V,Q,ee,i.NEAREST),l===!0&&(ke.length=0,F.length=0,ke.push(i.COLOR_ATTACHMENT0+_e),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ke.push(j),F.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ke))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let _e=0;_e<M.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[_e]);let Qe=n.get(M[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,Qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let M=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Ke(A){return Math.min(s.maxSamples,A.samples)}function Je(A){let M=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ne(A){let M=o.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function pt(A,M){let V=A.colorSpace,Q=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==Ui&&V!==wi&&(Ze.getTransfer(V)===st?(Q!==Cn||ee!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),M}function Ue(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=L,this.setTexture2D=k,this.setTexture2DArray=H,this.setTexture3D=W,this.setTextureCube=N,this.rebindTextures=be,this.setupRenderTarget=He,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=pn,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Je}function Sv(i,e){function t(n,s=wi){let r,o=Ze.getTransfer(s);if(n===oi)return i.UNSIGNED_BYTE;if(n===rh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===oh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===dd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===hd)return i.BYTE;if(n===ud)return i.SHORT;if(n===wr)return i.UNSIGNED_SHORT;if(n===sh)return i.INT;if(n===$i)return i.UNSIGNED_INT;if(n===Bn)return i.FLOAT;if(n===rn)return i.HALF_FLOAT;if(n===fd)return i.ALPHA;if(n===pd)return i.RGB;if(n===Cn)return i.RGBA;if(n===md)return i.LUMINANCE;if(n===gd)return i.LUMINANCE_ALPHA;if(n===Is)return i.DEPTH_COMPONENT;if(n===Bs)return i.DEPTH_STENCIL;if(n===ah)return i.RED;if(n===lh)return i.RED_INTEGER;if(n===xd)return i.RG;if(n===ch)return i.RG_INTEGER;if(n===hh)return i.RGBA_INTEGER;if(n===Ro||n===Co||n===Po||n===Io)if(o===st)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ro)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ro)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Co)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Io)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fl||n===Bl||n===zl||n===Hl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===kl||n===Vl||n===Gl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===kl||n===Vl)return o===st?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Gl)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wl||n===Xl||n===ql||n===Yl||n===Zl||n===Kl||n===Jl||n===jl||n===Ql||n===$l||n===ec||n===tc||n===nc||n===ic)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wl)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xl)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ql)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yl)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zl)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kl)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jl)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jl)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ql)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$l)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ec)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tc)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nc)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ic)return o===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Lo||n===sc||n===rc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Lo)return o===st?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vd||n===oc||n===ac||n===lc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Lo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===oc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ac)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Ec=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ct=class extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}},bv={type:"move"},Sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ev=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,wc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Vt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ft({vertexShader:Ev,fragmentShader:wv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $e(new Ii(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Tc=class extends Pi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=new wc,m=t.getContextAttributes(),p=null,_=null,b=[],y=[],D=new re,w=null,R=new kt;R.viewport=new wt;let P=new kt;P.viewport=new wt;let S=[R,P],v=new Ec,T=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let K=b[X];return K===void 0&&(K=new Sr,b[X]=K),K.getTargetRaySpace()},this.getControllerGrip=function(X){let K=b[X];return K===void 0&&(K=new Sr,b[X]=K),K.getGripSpace()},this.getHand=function(X){let K=b[X];return K===void 0&&(K=new Sr,b[X]=K),K.getHandSpace()};function I(X){let K=y.indexOf(X.inputSource);if(K===-1)return;let oe=b[K];oe!==void 0&&(oe.update(X.inputSource,X.frame,c||o),oe.dispatchEvent({type:X.type,data:X.inputSource}))}function U(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",k);for(let X=0;X<b.length;X++){let K=y[X];K!==null&&(y[X]=null,b[X].disconnect(K))}T=null,L=null,x.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,_=null,xe.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",U),s.addEventListener("inputsourceschange",k),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(D),s.renderState.layers===void 0){let K={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,K),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Bt(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let K=null,oe=null,ne=null;m.depth&&(ne=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=m.stencil?Bs:Is,oe=m.stencil?Fs:$i);let ve={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(ve),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Bt(d.textureWidth,d.textureHeight,{format:Cn,type:oi,depthTexture:new Xo(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),xe.setContext(s),xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function k(X){for(let K=0;K<X.removed.length;K++){let oe=X.removed[K],ne=y.indexOf(oe);ne>=0&&(y[ne]=null,b[ne].disconnect(oe))}for(let K=0;K<X.added.length;K++){let oe=X.added[K],ne=y.indexOf(oe);if(ne===-1){for(let Ce=0;Ce<b.length;Ce++)if(Ce>=y.length){y.push(oe),ne=Ce;break}else if(y[Ce]===null){y[Ce]=oe,ne=Ce;break}if(ne===-1)break}let ve=b[ne];ve&&ve.connect(oe)}}let H=new C,W=new C;function N(X,K,oe){H.setFromMatrixPosition(K.matrixWorld),W.setFromMatrixPosition(oe.matrixWorld);let ne=H.distanceTo(W),ve=K.projectionMatrix.elements,Ce=oe.projectionMatrix.elements,be=ve[14]/(ve[10]-1),He=ve[14]/(ve[10]+1),Le=(ve[9]+1)/ve[5],ke=(ve[9]-1)/ve[5],F=(ve[8]-1)/ve[0],pn=(Ce[8]+1)/Ce[0],Ke=be*F,Je=be*pn,Ne=ne/(-F+pn),pt=Ne*-F;if(K.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(pt),X.translateZ(Ne),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),ve[10]===-1)X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let Ue=be+Ne,A=He+Ne,M=Ke-pt,V=Je+(ne-pt),Q=Le*He/A*Ue,ee=ke*He/A*Ue;X.projectionMatrix.makePerspective(M,V,Q,ee,Ue,A),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function J(X,K){K===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(K.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let K=X.near,oe=X.far;x.texture!==null&&(x.depthNear>0&&(K=x.depthNear),x.depthFar>0&&(oe=x.depthFar)),v.near=P.near=R.near=K,v.far=P.far=R.far=oe,(T!==v.near||L!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,L=v.far),R.layers.mask=X.layers.mask|2,P.layers.mask=X.layers.mask|4,v.layers.mask=R.layers.mask|P.layers.mask;let ne=X.parent,ve=v.cameras;J(v,ne);for(let Ce=0;Ce<ve.length;Ce++)J(ve[Ce],ne);ve.length===2?N(v,R,P):v.projectionMatrix.copy(R.projectionMatrix),se(X,v,ne)};function se(X,K,oe){oe===null?X.matrix.copy(K.matrixWorld):(X.matrix.copy(oe.matrixWorld),X.matrix.invert(),X.matrix.multiply(K.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Tr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let he=null;function ae(X,K){if(h=K.getViewerPose(c||o),g=K,h!==null){let oe=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let ne=!1;oe.length!==v.cameras.length&&(v.cameras.length=0,ne=!0);for(let Ce=0;Ce<oe.length;Ce++){let be=oe[Ce],He=null;if(f!==null)He=f.getViewport(be);else{let ke=u.getViewSubImage(d,be);He=ke.viewport,Ce===0&&(e.setRenderTargetTextures(_,ke.colorTexture,d.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(_))}let Le=S[Ce];Le===void 0&&(Le=new kt,Le.layers.enable(Ce),Le.viewport=new wt,S[Ce]=Le),Le.matrix.fromArray(be.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(be.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(He.x,He.y,He.width,He.height),Ce===0&&(v.matrix.copy(Le.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ne===!0&&v.cameras.push(Le)}let ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")){let Ce=u.getDepthInformation(oe[0]);Ce&&Ce.isValid&&Ce.texture&&x.init(e,Ce,s.renderState)}}for(let oe=0;oe<b.length;oe++){let ne=y[oe],ve=b[oe];ne!==null&&ve!==void 0&&ve.update(ne,K,c||o)}he&&he(X,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}let xe=new bd;xe.setAnimationLoop(ae),this.setAnimationLoop=function(X){he=X},this.dispose=function(){}}},Yi=new Yt,Tv=new lt;function Av(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Sd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,b,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,_,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ft&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ft&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=e.get(p),b=_.envMap,y=_.envMapRotation;b&&(m.envMap.value=b,Yi.copy(y),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),m.envMapRotation.value.setFromMatrix4(Tv.makeRotationFromEuler(Yi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ft&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Rv(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,b){let y=b.program;n.uniformBlockBinding(_,y)}function c(_,b){let y=s[_.id];y===void 0&&(g(_),y=h(_),s[_.id]=y,_.addEventListener("dispose",m));let D=b.program;n.updateUBOMapping(_,D);let w=e.render.frame;r[_.id]!==w&&(d(_),r[_.id]=w)}function h(_){let b=u();_.__bindingPointIndex=b;let y=i.createBuffer(),D=_.__size,w=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,D,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,y),y}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let b=s[_.id],y=_.uniforms,D=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let w=0,R=y.length;w<R;w++){let P=Array.isArray(y[w])?y[w]:[y[w]];for(let S=0,v=P.length;S<v;S++){let T=P[S];if(f(T,w,S,D)===!0){let L=T.__offset,I=Array.isArray(T.value)?T.value:[T.value],U=0;for(let k=0;k<I.length;k++){let H=I[k],W=x(H);typeof H=="number"||typeof H=="boolean"?(T.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,L+U,T.__data)):H.isMatrix3?(T.__data[0]=H.elements[0],T.__data[1]=H.elements[1],T.__data[2]=H.elements[2],T.__data[3]=0,T.__data[4]=H.elements[3],T.__data[5]=H.elements[4],T.__data[6]=H.elements[5],T.__data[7]=0,T.__data[8]=H.elements[6],T.__data[9]=H.elements[7],T.__data[10]=H.elements[8],T.__data[11]=0):(H.toArray(T.__data,U),U+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,b,y,D){let w=_.value,R=b+"_"+y;if(D[R]===void 0)return typeof w=="number"||typeof w=="boolean"?D[R]=w:D[R]=w.clone(),!0;{let P=D[R];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return D[R]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(_){let b=_.uniforms,y=0,D=16;for(let R=0,P=b.length;R<P;R++){let S=Array.isArray(b[R])?b[R]:[b[R]];for(let v=0,T=S.length;v<T;v++){let L=S[v],I=Array.isArray(L.value)?L.value:[L.value];for(let U=0,k=I.length;U<k;U++){let H=I[U],W=x(H),N=y%D,J=N%W.boundary,se=N+J;y+=J,se!==0&&D-se<W.storage&&(y+=D-se),L.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=y,y+=W.storage}}}let w=y%D;return w>0&&(y+=D-w),_.__size=y,_.__cache={},this}function x(_){let b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),b}function m(_){let b=_.target;b.removeEventListener("dispose",m);let y=o.indexOf(b.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Rr=class{constructor(e={}){let{canvas:t=Dp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,_=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Et,this.toneMapping=Ai,this.toneMappingExposure=1;let y=this,D=!1,w=0,R=0,P=null,S=-1,v=null,T=new wt,L=new wt,I=null,U=new Re(0),k=0,H=t.width,W=t.height,N=1,J=null,se=null,he=new wt(0,0,H,W),ae=new wt(0,0,H,W),xe=!1,X=new Ar,K=!1,oe=!1,ne=new lt,ve=new lt,Ce=new C,be=new wt,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Le=!1;function ke(){return P===null?N:1}let F=n;function pn(E,B){return t.getContext(E,B)}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",me,!1),F===null){let B="webgl2";if(F=pn(B,E),F===null)throw pn(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ke,Je,Ne,pt,Ue,A,M,V,Q,ee,j,Pe,fe,_e,Qe,le,Me,Oe,Be,Se,je,Xe,ut,O;function de(){Ke=new Wg(F),Ke.init(),Xe=new Sv(F,Ke),Je=new Bg(F,Ke,e,Xe),Ne=new yv(F,Ke),Je.reverseDepthBuffer&&d&&Ne.buffers.depth.setReversed(!0),pt=new Yg(F),Ue=new ov,A=new Mv(F,Ke,Ne,Ue,Je,Xe,pt),M=new Hg(y),V=new Gg(y),Q=new em(F),ut=new Og(F,Q),ee=new Xg(F,Q,pt,ut),j=new Kg(F,ee,Q,pt),Be=new Zg(F,Je,A),le=new zg(Ue),Pe=new rv(y,M,V,Ke,Je,ut,le),fe=new Av(y,Ue),_e=new lv,Qe=new pv(Ke),Oe=new Ng(y,M,V,Ne,j,f,l),Me=new xv(y,j,Je),O=new Rv(F,pt,Je,Ne),Se=new Fg(F,Ke,pt),je=new qg(F,Ke,pt),pt.programs=Pe.programs,y.capabilities=Je,y.extensions=Ke,y.properties=Ue,y.renderLists=_e,y.shadowMap=Me,y.state=Ne,y.info=pt}de();let Z=new Tc(y,F);this.xr=Z,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let E=Ke.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Ke.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(E){E!==void 0&&(N=E,this.setSize(H,W,!1))},this.getSize=function(E){return E.set(H,W)},this.setSize=function(E,B,G=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,W=B,t.width=Math.floor(E*N),t.height=Math.floor(B*N),G===!0&&(t.style.width=E+"px",t.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(H*N,W*N).floor()},this.setDrawingBufferSize=function(E,B,G){H=E,W=B,N=G,t.width=Math.floor(E*G),t.height=Math.floor(B*G),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(he)},this.setViewport=function(E,B,G,q){E.isVector4?he.set(E.x,E.y,E.z,E.w):he.set(E,B,G,q),Ne.viewport(T.copy(he).multiplyScalar(N).round())},this.getScissor=function(E){return E.copy(ae)},this.setScissor=function(E,B,G,q){E.isVector4?ae.set(E.x,E.y,E.z,E.w):ae.set(E,B,G,q),Ne.scissor(L.copy(ae).multiplyScalar(N).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(E){Ne.setScissorTest(xe=E)},this.setOpaqueSort=function(E){J=E},this.setTransparentSort=function(E){se=E},this.getClearColor=function(E){return E.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(E=!0,B=!0,G=!0){let q=0;if(E){let z=!1;if(P!==null){let ce=P.texture.format;z=ce===hh||ce===ch||ce===lh}if(z){let ce=P.texture.type,ge=ce===oi||ce===$i||ce===wr||ce===Fs||ce===rh||ce===oh,we=Oe.getClearColor(),Te=Oe.getClearAlpha(),ze=we.r,Ge=we.g,Ae=we.b;ge?(g[0]=ze,g[1]=Ge,g[2]=Ae,g[3]=Te,F.clearBufferuiv(F.COLOR,0,g)):(x[0]=ze,x[1]=Ge,x[2]=Ae,x[3]=Te,F.clearBufferiv(F.COLOR,0,x))}else q|=F.COLOR_BUFFER_BIT}B&&(q|=F.DEPTH_BUFFER_BIT),G&&(q|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",me,!1),_e.dispose(),Qe.dispose(),Ue.dispose(),M.dispose(),V.dispose(),j.dispose(),ut.dispose(),O.dispose(),Pe.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Wh),Z.removeEventListener("sessionend",Xh),ki.stop()};function $(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let E=pt.autoReset,B=Me.enabled,G=Me.autoUpdate,q=Me.needsUpdate,z=Me.type;de(),pt.autoReset=E,Me.enabled=B,Me.autoUpdate=G,Me.needsUpdate=q,Me.type=z}function me(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ve(E){let B=E.target;B.removeEventListener("dispose",Ve),bt(B)}function bt(E){Gt(E),Ue.remove(E)}function Gt(E){let B=Ue.get(E).programs;B!==void 0&&(B.forEach(function(G){Pe.releaseProgram(G)}),E.isShaderMaterial&&Pe.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,G,q,z,ce){B===null&&(B=He);let ge=z.isMesh&&z.matrixWorld.determinant()<0,we=Lf(E,B,G,q,z);Ne.setMaterial(q,ge);let Te=G.index,ze=1;if(q.wireframe===!0){if(Te=ee.getWireframeAttribute(G),Te===void 0)return;ze=2}let Ge=G.drawRange,Ae=G.attributes.position,tt=Ge.start*ze,dt=(Ge.start+Ge.count)*ze;ce!==null&&(tt=Math.max(tt,ce.start*ze),dt=Math.min(dt,(ce.start+ce.count)*ze)),Te!==null?(tt=Math.max(tt,0),dt=Math.min(dt,Te.count)):Ae!=null&&(tt=Math.max(tt,0),dt=Math.min(dt,Ae.count));let mt=dt-tt;if(mt<0||mt===1/0)return;ut.setup(z,q,we,G,Te);let nn,nt=Se;if(Te!==null&&(nn=Q.get(Te),nt=je,nt.setIndex(nn)),z.isMesh)q.wireframe===!0?(Ne.setLineWidth(q.wireframeLinewidth*ke()),nt.setMode(F.LINES)):nt.setMode(F.TRIANGLES);else if(z.isLine){let Ie=q.linewidth;Ie===void 0&&(Ie=1),Ne.setLineWidth(Ie*ke()),z.isLineSegments?nt.setMode(F.LINES):z.isLineLoop?nt.setMode(F.LINE_LOOP):nt.setMode(F.LINE_STRIP)}else z.isPoints?nt.setMode(F.POINTS):z.isSprite&&nt.setMode(F.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)nt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))nt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Ie=z._multiDrawStarts,Kn=z._multiDrawCounts,it=z._multiDrawCount,En=Te?Q.get(Te).bytesPerElement:1,cs=Ue.get(q).currentProgram.getUniforms();for(let un=0;un<it;un++)cs.setValue(F,"_gl_DrawID",un),nt.render(Ie[un]/En,Kn[un])}else if(z.isInstancedMesh)nt.renderInstances(tt,mt,z.count);else if(G.isInstancedBufferGeometry){let Ie=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Kn=Math.min(G.instanceCount,Ie);nt.renderInstances(tt,mt,Kn)}else nt.render(tt,mt)};function ot(E,B,G){E.transparent===!0&&E.side===jt&&E.forceSinglePass===!1?(E.side=Ft,E.needsUpdate=!0,jr(E,B,G),E.side=Ri,E.needsUpdate=!0,jr(E,B,G),E.side=jt):jr(E,B,G)}this.compile=function(E,B,G=null){G===null&&(G=E),p=Qe.get(G),p.init(B),b.push(p),G.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),E!==G&&E.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();let q=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ce=z.material;if(ce)if(Array.isArray(ce))for(let ge=0;ge<ce.length;ge++){let we=ce[ge];ot(we,G,z),q.add(we)}else ot(ce,G,z),q.add(ce)}),b.pop(),p=null,q},this.compileAsync=function(E,B,G=null){let q=this.compile(E,B,G);return new Promise(z=>{function ce(){if(q.forEach(function(ge){Ue.get(ge).currentProgram.isReady()&&q.delete(ge)}),q.size===0){z(E);return}setTimeout(ce,10)}Ke.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let bn=null;function Zn(E){bn&&bn(E)}function Wh(){ki.stop()}function Xh(){ki.start()}let ki=new bd;ki.setAnimationLoop(Zn),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(E){bn=E,Z.setAnimationLoop(E),E===null?ki.stop():ki.start()},Z.addEventListener("sessionstart",Wh),Z.addEventListener("sessionend",Xh),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(B),B=Z.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,B,P),p=Qe.get(E,b.length),p.init(B),b.push(p),ve.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),X.setFromProjectionMatrix(ve),oe=this.localClippingEnabled,K=le.init(this.clippingPlanes,oe),m=_e.get(E,_.length),m.init(),_.push(m),Z.enabled===!0&&Z.isPresenting===!0){let ce=y.xr.getDepthSensingMesh();ce!==null&&Xa(ce,B,-1/0,y.sortObjects)}Xa(E,B,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(J,se),Le=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Le&&Oe.addToRenderList(m,E),this.info.render.frame++,K===!0&&le.beginShadows();let G=p.state.shadowsArray;Me.render(G,E,B),K===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=m.opaque,z=m.transmissive;if(p.setupLights(),B.isArrayCamera){let ce=B.cameras;if(z.length>0)for(let ge=0,we=ce.length;ge<we;ge++){let Te=ce[ge];Yh(q,z,E,Te)}Le&&Oe.render(E);for(let ge=0,we=ce.length;ge<we;ge++){let Te=ce[ge];qh(m,E,Te,Te.viewport)}}else z.length>0&&Yh(q,z,E,B),Le&&Oe.render(E),qh(m,E,B);P!==null&&(A.updateMultisampleRenderTarget(P),A.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(y,E,B),ut.resetDefaultState(),S=-1,v=null,b.pop(),b.length>0?(p=b[b.length-1],K===!0&&le.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Xa(E,B,G,q){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){q&&be.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ve);let ge=j.update(E),we=E.material;we.visible&&m.push(E,ge,we,G,be.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||X.intersectsObject(E))){let ge=j.update(E),we=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),be.copy(E.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),be.copy(ge.boundingSphere.center)),be.applyMatrix4(E.matrixWorld).applyMatrix4(ve)),Array.isArray(we)){let Te=ge.groups;for(let ze=0,Ge=Te.length;ze<Ge;ze++){let Ae=Te[ze],tt=we[Ae.materialIndex];tt&&tt.visible&&m.push(E,ge,tt,G,be.z,Ae)}}else we.visible&&m.push(E,ge,we,G,be.z,null)}}let ce=E.children;for(let ge=0,we=ce.length;ge<we;ge++)Xa(ce[ge],B,G,q)}function qh(E,B,G,q){let z=E.opaque,ce=E.transmissive,ge=E.transparent;p.setupLightsView(G),K===!0&&le.setGlobalState(y.clippingPlanes,G),q&&Ne.viewport(T.copy(q)),z.length>0&&Jr(z,B,G),ce.length>0&&Jr(ce,B,G),ge.length>0&&Jr(ge,B,G),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function Yh(E,B,G,q){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Bt(1,1,{generateMipmaps:!0,type:Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float")?rn:oi,minFilter:Qi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));let ce=p.state.transmissionRenderTarget[q.id],ge=q.viewport||T;ce.setSize(ge.z,ge.w);let we=y.getRenderTarget();y.setRenderTarget(ce),y.getClearColor(U),k=y.getClearAlpha(),k<1&&y.setClearColor(16777215,.5),y.clear(),Le&&Oe.render(G);let Te=y.toneMapping;y.toneMapping=Ai;let ze=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),K===!0&&le.setGlobalState(y.clippingPlanes,q),Jr(E,G,q),A.updateMultisampleRenderTarget(ce),A.updateRenderTargetMipmap(ce),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Ae=0,tt=B.length;Ae<tt;Ae++){let dt=B[Ae],mt=dt.object,nn=dt.geometry,nt=dt.material,Ie=dt.group;if(nt.side===jt&&mt.layers.test(q.layers)){let Kn=nt.side;nt.side=Ft,nt.needsUpdate=!0,Zh(mt,G,q,nn,nt,Ie),nt.side=Kn,nt.needsUpdate=!0,Ge=!0}}Ge===!0&&(A.updateMultisampleRenderTarget(ce),A.updateRenderTargetMipmap(ce))}y.setRenderTarget(we),y.setClearColor(U,k),ze!==void 0&&(q.viewport=ze),y.toneMapping=Te}function Jr(E,B,G){let q=B.isScene===!0?B.overrideMaterial:null;for(let z=0,ce=E.length;z<ce;z++){let ge=E[z],we=ge.object,Te=ge.geometry,ze=q===null?ge.material:q,Ge=ge.group;we.layers.test(G.layers)&&Zh(we,B,G,Te,ze,Ge)}}function Zh(E,B,G,q,z,ce){E.onBeforeRender(y,B,G,q,z,ce),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(y,B,G,q,E,ce),z.transparent===!0&&z.side===jt&&z.forceSinglePass===!1?(z.side=Ft,z.needsUpdate=!0,y.renderBufferDirect(G,B,q,z,E,ce),z.side=Ri,z.needsUpdate=!0,y.renderBufferDirect(G,B,q,z,E,ce),z.side=jt):y.renderBufferDirect(G,B,q,z,E,ce),E.onAfterRender(y,B,G,q,z,ce)}function jr(E,B,G){B.isScene!==!0&&(B=He);let q=Ue.get(E),z=p.state.lights,ce=p.state.shadowsArray,ge=z.state.version,we=Pe.getParameters(E,z.state,ce,B,G),Te=Pe.getProgramCacheKey(we),ze=q.programs;q.environment=E.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(E.isMeshStandardMaterial?V:M).get(E.envMap||q.environment),q.envMapRotation=q.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,ze===void 0&&(E.addEventListener("dispose",Ve),ze=new Map,q.programs=ze);let Ge=ze.get(Te);if(Ge!==void 0){if(q.currentProgram===Ge&&q.lightsStateVersion===ge)return Jh(E,we),Ge}else we.uniforms=Pe.getUniforms(E),E.onBeforeCompile(we,y),Ge=Pe.acquireProgram(we,Te),ze.set(Te,Ge),q.uniforms=we.uniforms;let Ae=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ae.clippingPlanes=le.uniform),Jh(E,we),q.needsLights=Uf(E),q.lightsStateVersion=ge,q.needsLights&&(Ae.ambientLightColor.value=z.state.ambient,Ae.lightProbe.value=z.state.probe,Ae.directionalLights.value=z.state.directional,Ae.directionalLightShadows.value=z.state.directionalShadow,Ae.spotLights.value=z.state.spot,Ae.spotLightShadows.value=z.state.spotShadow,Ae.rectAreaLights.value=z.state.rectArea,Ae.ltc_1.value=z.state.rectAreaLTC1,Ae.ltc_2.value=z.state.rectAreaLTC2,Ae.pointLights.value=z.state.point,Ae.pointLightShadows.value=z.state.pointShadow,Ae.hemisphereLights.value=z.state.hemi,Ae.directionalShadowMap.value=z.state.directionalShadowMap,Ae.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ae.spotShadowMap.value=z.state.spotShadowMap,Ae.spotLightMatrix.value=z.state.spotLightMatrix,Ae.spotLightMap.value=z.state.spotLightMap,Ae.pointShadowMap.value=z.state.pointShadowMap,Ae.pointShadowMatrix.value=z.state.pointShadowMatrix),q.currentProgram=Ge,q.uniformsList=null,Ge}function Kh(E){if(E.uniformsList===null){let B=E.currentProgram.getUniforms();E.uniformsList=Ds.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function Jh(E,B){let G=Ue.get(E);G.outputColorSpace=B.outputColorSpace,G.batching=B.batching,G.batchingColor=B.batchingColor,G.instancing=B.instancing,G.instancingColor=B.instancingColor,G.instancingMorph=B.instancingMorph,G.skinning=B.skinning,G.morphTargets=B.morphTargets,G.morphNormals=B.morphNormals,G.morphColors=B.morphColors,G.morphTargetsCount=B.morphTargetsCount,G.numClippingPlanes=B.numClippingPlanes,G.numIntersection=B.numClipIntersection,G.vertexAlphas=B.vertexAlphas,G.vertexTangents=B.vertexTangents,G.toneMapping=B.toneMapping}function Lf(E,B,G,q,z){B.isScene!==!0&&(B=He),A.resetTextureUnits();let ce=B.fog,ge=q.isMeshStandardMaterial?B.environment:null,we=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ui,Te=(q.isMeshStandardMaterial?V:M).get(q.envMap||ge),ze=q.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ge=!!G.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ae=!!G.morphAttributes.position,tt=!!G.morphAttributes.normal,dt=!!G.morphAttributes.color,mt=Ai;q.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(mt=y.toneMapping);let nn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,nt=nn!==void 0?nn.length:0,Ie=Ue.get(q),Kn=p.state.lights;if(K===!0&&(oe===!0||E!==v)){let mn=E===v&&q.id===S;le.setState(q,E,mn)}let it=!1;q.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Kn.state.version||Ie.outputColorSpace!==we||z.isBatchedMesh&&Ie.batching===!1||!z.isBatchedMesh&&Ie.batching===!0||z.isBatchedMesh&&Ie.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ie.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ie.instancing===!1||!z.isInstancedMesh&&Ie.instancing===!0||z.isSkinnedMesh&&Ie.skinning===!1||!z.isSkinnedMesh&&Ie.skinning===!0||z.isInstancedMesh&&Ie.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ie.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ie.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ie.instancingMorph===!1&&z.morphTexture!==null||Ie.envMap!==Te||q.fog===!0&&Ie.fog!==ce||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==le.numPlanes||Ie.numIntersection!==le.numIntersection)||Ie.vertexAlphas!==ze||Ie.vertexTangents!==Ge||Ie.morphTargets!==Ae||Ie.morphNormals!==tt||Ie.morphColors!==dt||Ie.toneMapping!==mt||Ie.morphTargetsCount!==nt)&&(it=!0):(it=!0,Ie.__version=q.version);let En=Ie.currentProgram;it===!0&&(En=jr(q,B,z));let cs=!1,un=!1,ar=!1,gt=En.getUniforms(),On=Ie.uniforms;if(Ne.useProgram(En.program)&&(cs=!0,un=!0,ar=!0),q.id!==S&&(S=q.id,un=!0),cs||v!==E){Ne.buffers.depth.getReversed()?(ne.copy(E.projectionMatrix),Np(ne),Op(ne),gt.setValue(F,"projectionMatrix",ne)):gt.setValue(F,"projectionMatrix",E.projectionMatrix),gt.setValue(F,"viewMatrix",E.matrixWorldInverse);let xi=gt.map.cameraPosition;xi!==void 0&&xi.setValue(F,Ce.setFromMatrixPosition(E.matrixWorld)),Je.logarithmicDepthBuffer&&gt.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&gt.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),v!==E&&(v=E,un=!0,ar=!0)}if(z.isSkinnedMesh){gt.setOptional(F,z,"bindMatrix"),gt.setOptional(F,z,"bindMatrixInverse");let mn=z.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),gt.setValue(F,"boneTexture",mn.boneTexture,A))}z.isBatchedMesh&&(gt.setOptional(F,z,"batchingTexture"),gt.setValue(F,"batchingTexture",z._matricesTexture,A),gt.setOptional(F,z,"batchingIdTexture"),gt.setValue(F,"batchingIdTexture",z._indirectTexture,A),gt.setOptional(F,z,"batchingColorTexture"),z._colorsTexture!==null&&gt.setValue(F,"batchingColorTexture",z._colorsTexture,A));let lr=G.morphAttributes;if((lr.position!==void 0||lr.normal!==void 0||lr.color!==void 0)&&Be.update(z,G,En),(un||Ie.receiveShadow!==z.receiveShadow)&&(Ie.receiveShadow=z.receiveShadow,gt.setValue(F,"receiveShadow",z.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(On.envMap.value=Te,On.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&B.environment!==null&&(On.envMapIntensity.value=B.environmentIntensity),un&&(gt.setValue(F,"toneMappingExposure",y.toneMappingExposure),Ie.needsLights&&Df(On,ar),ce&&q.fog===!0&&fe.refreshFogUniforms(On,ce),fe.refreshMaterialUniforms(On,q,N,W,p.state.transmissionRenderTarget[E.id]),Ds.upload(F,Kh(Ie),On,A)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ds.upload(F,Kh(Ie),On,A),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&gt.setValue(F,"center",z.center),gt.setValue(F,"modelViewMatrix",z.modelViewMatrix),gt.setValue(F,"normalMatrix",z.normalMatrix),gt.setValue(F,"modelMatrix",z.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let mn=q.uniformsGroups;for(let xi=0,vi=mn.length;xi<vi;xi++){let jh=mn[xi];O.update(jh,En),O.bind(jh,En)}}return En}function Df(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function Uf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,B,G){Ue.get(E.texture).__webglTexture=B,Ue.get(E.depthTexture).__webglTexture=G;let q=Ue.get(E);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=G===void 0,q.__autoAllocateDepthBuffer||Ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,B){let G=Ue.get(E);G.__webglFramebuffer=B,G.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,G=0){P=E,w=B,R=G;let q=!0,z=null,ce=!1,ge=!1;if(E){let Te=Ue.get(E);if(Te.__useDefaultFramebuffer!==void 0)Ne.bindFramebuffer(F.FRAMEBUFFER,null),q=!1;else if(Te.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(Te.__hasExternalTextures)A.rebindTextures(E,Ue.get(E.texture).__webglTexture,Ue.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ae=E.depthTexture;if(Te.__boundDepthTexture!==Ae){if(Ae!==null&&Ue.has(Ae)&&(E.width!==Ae.image.width||E.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}let ze=E.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(ge=!0);let Ge=Ue.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ge[B])?z=Ge[B][G]:z=Ge[B],ce=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?z=Ue.get(E).__webglMultisampledFramebuffer:Array.isArray(Ge)?z=Ge[G]:z=Ge,T.copy(E.viewport),L.copy(E.scissor),I=E.scissorTest}else T.copy(he).multiplyScalar(N).floor(),L.copy(ae).multiplyScalar(N).floor(),I=xe;if(Ne.bindFramebuffer(F.FRAMEBUFFER,z)&&q&&Ne.drawBuffers(E,z),Ne.viewport(T),Ne.scissor(L),Ne.setScissorTest(I),ce){let Te=Ue.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,Te.__webglTexture,G)}else if(ge){let Te=Ue.get(E.texture),ze=B||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Te.__webglTexture,G||0,ze)}S=-1},this.readRenderTargetPixels=function(E,B,G,q,z,ce,ge){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Ue.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(we=we[ge]),we){Ne.bindFramebuffer(F.FRAMEBUFFER,we);try{let Te=E.texture,ze=Te.format,Ge=Te.type;if(!Je.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-q&&G>=0&&G<=E.height-z&&F.readPixels(B,G,q,z,Xe.convert(ze),Xe.convert(Ge),ce)}finally{let Te=P!==null?Ue.get(P).__webglFramebuffer:null;Ne.bindFramebuffer(F.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(E,B,G,q,z,ce,ge){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Ue.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(we=we[ge]),we){let Te=E.texture,ze=Te.format,Ge=Te.type;if(!Je.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=E.width-q&&G>=0&&G<=E.height-z){Ne.bindFramebuffer(F.FRAMEBUFFER,we);let Ae=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ae),F.bufferData(F.PIXEL_PACK_BUFFER,ce.byteLength,F.STREAM_READ),F.readPixels(B,G,q,z,Xe.convert(ze),Xe.convert(Ge),0);let tt=P!==null?Ue.get(P).__webglFramebuffer:null;Ne.bindFramebuffer(F.FRAMEBUFFER,tt);let dt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Up(F,dt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ae),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ce),F.deleteBuffer(Ae),F.deleteSync(dt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,B=null,G=0){E.isTexture!==!0&&(vr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,E=arguments[1]);let q=Math.pow(2,-G),z=Math.floor(E.image.width*q),ce=Math.floor(E.image.height*q),ge=B!==null?B.x:0,we=B!==null?B.y:0;A.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,G,0,0,ge,we,z,ce),Ne.unbindTexture()},this.copyTextureToTexture=function(E,B,G=null,q=null,z=0){E.isTexture!==!0&&(vr("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,E=arguments[1],B=arguments[2],z=arguments[3]||0,G=null);let ce,ge,we,Te,ze,Ge,Ae,tt,dt,mt=E.isCompressedTexture?E.mipmaps[z]:E.image;G!==null?(ce=G.max.x-G.min.x,ge=G.max.y-G.min.y,we=G.isBox3?G.max.z-G.min.z:1,Te=G.min.x,ze=G.min.y,Ge=G.isBox3?G.min.z:0):(ce=mt.width,ge=mt.height,we=mt.depth||1,Te=0,ze=0,Ge=0),q!==null?(Ae=q.x,tt=q.y,dt=q.z):(Ae=0,tt=0,dt=0);let nn=Xe.convert(B.format),nt=Xe.convert(B.type),Ie;B.isData3DTexture?(A.setTexture3D(B,0),Ie=F.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(A.setTexture2DArray(B,0),Ie=F.TEXTURE_2D_ARRAY):(A.setTexture2D(B,0),Ie=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,B.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,B.unpackAlignment);let Kn=F.getParameter(F.UNPACK_ROW_LENGTH),it=F.getParameter(F.UNPACK_IMAGE_HEIGHT),En=F.getParameter(F.UNPACK_SKIP_PIXELS),cs=F.getParameter(F.UNPACK_SKIP_ROWS),un=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,mt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,mt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Te),F.pixelStorei(F.UNPACK_SKIP_ROWS,ze),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ge);let ar=E.isDataArrayTexture||E.isData3DTexture,gt=B.isDataArrayTexture||B.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let On=Ue.get(E),lr=Ue.get(B),mn=Ue.get(On.__renderTarget),xi=Ue.get(lr.__renderTarget);Ne.bindFramebuffer(F.READ_FRAMEBUFFER,mn.__webglFramebuffer),Ne.bindFramebuffer(F.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let vi=0;vi<we;vi++)ar&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ue.get(E).__webglTexture,z,Ge+vi),E.isDepthTexture?(gt&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ue.get(B).__webglTexture,z,dt+vi),F.blitFramebuffer(Te,ze,ce,ge,Ae,tt,ce,ge,F.DEPTH_BUFFER_BIT,F.NEAREST)):gt?F.copyTexSubImage3D(Ie,z,Ae,tt,dt+vi,Te,ze,ce,ge):F.copyTexSubImage2D(Ie,z,Ae,tt,dt+vi,Te,ze,ce,ge);Ne.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else gt?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(Ie,z,Ae,tt,dt,ce,ge,we,nn,nt,mt.data):B.isCompressedArrayTexture?F.compressedTexSubImage3D(Ie,z,Ae,tt,dt,ce,ge,we,nn,mt.data):F.texSubImage3D(Ie,z,Ae,tt,dt,ce,ge,we,nn,nt,mt):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,z,Ae,tt,ce,ge,nn,nt,mt.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,z,Ae,tt,mt.width,mt.height,nn,mt.data):F.texSubImage2D(F.TEXTURE_2D,z,Ae,tt,ce,ge,nn,nt,mt);F.pixelStorei(F.UNPACK_ROW_LENGTH,Kn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,it),F.pixelStorei(F.UNPACK_SKIP_PIXELS,En),F.pixelStorei(F.UNPACK_SKIP_ROWS,cs),F.pixelStorei(F.UNPACK_SKIP_IMAGES,un),z===0&&B.generateMipmaps&&F.generateMipmap(Ie),Ne.unbindTexture()},this.copyTextureToTexture3D=function(E,B,G=null,q=null,z=0){return E.isTexture!==!0&&(vr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,q=arguments[1]||null,E=arguments[2],B=arguments[3],z=arguments[4]||0),vr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,B,G,q,z)},this.initRenderTarget=function(E){Ue.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),Ne.unbindTexture()},this.resetState=function(){w=0,R=0,P=null,Ne.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}},qo=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Re(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var es=class extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yt,this.environmentIntensity=1,this.environmentRotation=new Yt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ac=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=hc,this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Kt=new C,Yo=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Rn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Rn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Rn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Rn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new _t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},li=class extends kn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Es,fr=new C,ws=new C,Ts=new C,As=new re,pr=new re,Rd=new lt,_o=new C,mr=new C,Mo=new C,ju=new re,_l=new re,Qu=new re,Li=class extends Mt{constructor(e=new li){if(super(),this.isSprite=!0,this.type="Sprite",Es===void 0){Es=new St;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ac(t,5);Es.setIndex([0,1,2,0,2,3]),Es.setAttribute("position",new Yo(n,3,0,!1)),Es.setAttribute("uv",new Yo(n,2,3,!1))}this.geometry=Es,this.material=e,this.center=new re(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ws.setFromMatrixScale(this.matrixWorld),Rd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ts.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ws.multiplyScalar(-Ts.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;So(_o.set(-.5,-.5,0),Ts,o,ws,s,r),So(mr.set(.5,-.5,0),Ts,o,ws,s,r),So(Mo.set(.5,.5,0),Ts,o,ws,s,r),ju.set(0,0),_l.set(1,0),Qu.set(1,1);let a=e.ray.intersectTriangle(_o,mr,Mo,!1,fr);if(a===null&&(So(mr.set(-.5,.5,0),Ts,o,ws,s,r),_l.set(0,1),a=e.ray.intersectTriangle(_o,Mo,mr,!1,fr),a===null))return;let l=e.ray.origin.distanceTo(fr);l<e.near||l>e.far||t.push({distance:l,point:fr.clone(),uv:Ti.getInterpolation(fr,_o,mr,Mo,ju,_l,Qu,new re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function So(i,e,t,n,s,r){As.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(pr.x=r*As.x-s*As.y,pr.y=s*As.x+r*As.y):pr.copy(As),i.copy(e),i.x+=pr.x,i.y+=pr.y,i.applyMatrix4(Rd)}var Rc=class extends Vt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=qt,h=qt,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zo=class extends _t{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Rs=new lt,$u=new lt,bo=[],ed=new ai,Cv=new lt,gr=new $e,xr=new Hn,Ht=class extends $e{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Cv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ai),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rs),ed.copy(e.boundingBox).applyMatrix4(Rs),this.boundingBox.union(ed)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rs),xr.copy(e.boundingSphere).applyMatrix4(Rs),this.boundingSphere.union(xr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(gr.geometry=this.geometry,gr.material=this.material,gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xr.copy(this.boundingSphere),xr.applyMatrix4(n),e.ray.intersectsSphere(xr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Rs),$u.multiplyMatrices(n,Rs),gr.matrixWorld=$u,gr.raycast(e,bo);for(let o=0,a=bo.length;o<a;o++){let l=bo[o];l.instanceId=r,l.object=this,t.push(l)}bo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Zo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Rc(new Float32Array(s*this.count),s,this.count,ah,Bn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Cc=class extends kn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},td=new lt,Pc=new zo,Eo=new Hn,wo=new C,Ko=class extends Mt{constructor(e=new St,t=new Cc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(s),Eo.radius+=r,e.ray.intersectsSphere(Eo)===!1)return;td.copy(s).invert(),Pc.copy(e.ray).applyMatrix4(td);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let m=c.getX(g);wo.fromBufferAttribute(u,m),nd(wo,m,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)wo.fromBufferAttribute(u,g),nd(wo,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function nd(i,e,t,n,s,r,o){let a=Pc.distanceSqToPoint(i);if(a<t){let l=new C;Pc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Pn=class extends Vt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new re:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new C,s=[],r=[],o=[],a=new C,l=new lt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ot(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ot(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Cr=class extends yn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new re){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ic=class extends Cr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function mh(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var To=new C,Ml=new mh,Sl=new mh,bl=new mh,Lc=class extends yn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new C){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(To.subVectors(s[0],s[1]).add(s[0]),c=To);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(To.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=To),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Ml.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),Sl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),bl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Ml.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Sl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),bl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ml.calc(l),Sl.calc(l),bl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function id(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Pv(i,e){let t=1-i;return t*t*e}function Iv(i,e){return 2*(1-i)*i*e}function Lv(i,e){return i*i*e}function br(i,e,t,n){return Pv(i,e)+Iv(i,t)+Lv(i,n)}function Dv(i,e){let t=1-i;return t*t*t*e}function Uv(i,e){let t=1-i;return 3*t*t*i*e}function Nv(i,e){return 3*(1-i)*i*i*e}function Ov(i,e){return i*i*i*e}function Er(i,e,t,n,s){return Dv(i,e)+Uv(i,t)+Nv(i,n)+Ov(i,s)}var Jo=class extends yn{constructor(e=new re,t=new re,n=new re,s=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new re){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Er(e,s.x,r.x,o.x,a.x),Er(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Dc=class extends yn{constructor(e=new C,t=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Er(e,s.x,r.x,o.x,a.x),Er(e,s.y,r.y,o.y,a.y),Er(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},jo=class extends yn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Uc=class extends yn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qo=class extends yn{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(br(e,s.x,r.x,o.x),br(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Nc=class extends yn{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(br(e,s.x,r.x,o.x),br(e,s.y,r.y,o.y),br(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$o=class extends yn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(id(a,l.x,c.x,h.x,u.x),id(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new re().fromArray(s))}return this}},sd=Object.freeze({__proto__:null,ArcCurve:Ic,CatmullRomCurve3:Lc,CubicBezierCurve:Jo,CubicBezierCurve3:Dc,EllipseCurve:Cr,LineCurve:jo,LineCurve3:Uc,QuadraticBezierCurve:Qo,QuadraticBezierCurve3:Nc,SplineCurve:$o}),Oc=class extends yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sd[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new sd[s.type]().fromJSON(s))}return this}},Fc=class extends Oc{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new jo(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Qo(this.currentPoint.clone(),new re(e,t),new re(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Jo(this.currentPoint.clone(),new re(e,t),new re(n,s),new re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new $o(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Cr(e,t,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Bc=class i extends St{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Ot(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new C,d=new re,f=new C,g=new C,x=new C,m=0,p=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let _=0;_<=t;_++){let b=n+_*h*s,y=Math.sin(b),D=Math.cos(b);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*y,u.y=e[w].y,u.z=e[w].x*D,o.push(u.x,u.y,u.z),d.x=_/t,d.y=w/(e.length-1),a.push(d.x,d.y);let R=l[3*w+0]*y,P=l[3*w+1],S=l[3*w+0]*D;c.push(R,P,S)}}for(let _=0;_<t;_++)for(let b=0;b<e.length-1;b++){let y=b+_*e.length,D=y,w=y+e.length,R=y+e.length+1,P=y+1;r.push(D,w,P),r.push(R,P,w)}this.setIndex(r),this.setAttribute("position",new et(o,3)),this.setAttribute("uv",new et(a,2)),this.setAttribute("normal",new et(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},ts=class i extends Bc{constructor(e=1,t=1,n=4,s=8){let r=new Fc;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},Vs=class i extends St{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new C,h=new re;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new et(o,3)),this.setAttribute("normal",new et(a,3)),this.setAttribute("uv",new et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ct=class i extends St{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=n/2,p=0;_(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new et(u,3)),this.setAttribute("normal",new et(d,3)),this.setAttribute("uv",new et(f,2));function _(){let y=new C,D=new C,w=0,R=(t-e)/n;for(let P=0;P<=r;P++){let S=[],v=P/r,T=v*(t-e)+e;for(let L=0;L<=s;L++){let I=L/s,U=I*l+a,k=Math.sin(U),H=Math.cos(U);D.x=T*k,D.y=-v*n+m,D.z=T*H,u.push(D.x,D.y,D.z),y.set(k,R,H).normalize(),d.push(y.x,y.y,y.z),f.push(I,1-v),S.push(g++)}x.push(S)}for(let P=0;P<s;P++)for(let S=0;S<r;S++){let v=x[S][P],T=x[S+1][P],L=x[S+1][P+1],I=x[S][P+1];(e>0||S!==0)&&(h.push(v,T,I),w+=3),(t>0||S!==r-1)&&(h.push(T,L,I),w+=3)}c.addGroup(p,w,0),p+=w}function b(y){let D=g,w=new re,R=new C,P=0,S=y===!0?e:t,v=y===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,m*v,0),d.push(0,v,0),f.push(.5,.5),g++;let T=g;for(let L=0;L<=s;L++){let U=L/s*l+a,k=Math.cos(U),H=Math.sin(U);R.x=S*H,R.y=m*v,R.z=S*k,u.push(R.x,R.y,R.z),d.push(0,v,0),w.x=k*.5+.5,w.y=H*.5*v+.5,f.push(w.x,w.y),g++}for(let L=0;L<s;L++){let I=D+L,U=T+L;y===!0?h.push(U,U+1,I):h.push(U+1,U,I),P+=3}c.addGroup(p,P,y===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},sn=class i extends ct{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Pr=class i extends St{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new et(r,3)),this.setAttribute("normal",new et(r.slice(),3)),this.setAttribute("uv",new et(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let b=new C,y=new C,D=new C;for(let w=0;w<t.length;w+=3)f(t[w+0],b),f(t[w+1],y),f(t[w+2],D),l(b,y,D,_)}function l(_,b,y,D){let w=D+1,R=[];for(let P=0;P<=w;P++){R[P]=[];let S=_.clone().lerp(y,P/w),v=b.clone().lerp(y,P/w),T=w-P;for(let L=0;L<=T;L++)L===0&&P===w?R[P][L]=S:R[P][L]=S.clone().lerp(v,L/T)}for(let P=0;P<w;P++)for(let S=0;S<2*(w-P)-1;S++){let v=Math.floor(S/2);S%2===0?(d(R[P][v+1]),d(R[P+1][v]),d(R[P][v])):(d(R[P][v+1]),d(R[P+1][v+1]),d(R[P+1][v]))}}function c(_){let b=new C;for(let y=0;y<r.length;y+=3)b.x=r[y+0],b.y=r[y+1],b.z=r[y+2],b.normalize().multiplyScalar(_),r[y+0]=b.x,r[y+1]=b.y,r[y+2]=b.z}function h(){let _=new C;for(let b=0;b<r.length;b+=3){_.x=r[b+0],_.y=r[b+1],_.z=r[b+2];let y=m(_)/2/Math.PI+.5,D=p(_)/Math.PI+.5;o.push(y,1-D)}g(),u()}function u(){for(let _=0;_<o.length;_+=6){let b=o[_+0],y=o[_+2],D=o[_+4],w=Math.max(b,y,D),R=Math.min(b,y,D);w>.9&&R<.1&&(b<.2&&(o[_+0]+=1),y<.2&&(o[_+2]+=1),D<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,b){let y=_*3;b.x=e[y+0],b.y=e[y+1],b.z=e[y+2]}function g(){let _=new C,b=new C,y=new C,D=new C,w=new re,R=new re,P=new re;for(let S=0,v=0;S<r.length;S+=9,v+=6){_.set(r[S+0],r[S+1],r[S+2]),b.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),w.set(o[v+0],o[v+1]),R.set(o[v+2],o[v+3]),P.set(o[v+4],o[v+5]),D.copy(_).add(b).add(y).divideScalar(3);let T=m(D);x(w,v+0,_,T),x(R,v+2,b,T),x(P,v+4,y,T)}}function x(_,b,y,D){D<0&&_.x===1&&(o[b]=_.x-1),y.x===0&&y.z===0&&(o[b]=D/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},ea=class i extends Pr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Lt=class i extends Pr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},ta=class i extends Pr{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},na=class i extends St{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new C,g=new re;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let _=p+m,b=_,y=_+n+1,D=_+n+2,w=_+1;a.push(b,y,w),a.push(y,D,w)}}this.setIndex(a),this.setAttribute("position",new et(l,3)),this.setAttribute("normal",new et(c,3)),this.setAttribute("uv",new et(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var ci=class i extends St{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new C,d=new C,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let _=[],b=p/n,y=0;p===0&&o===0?y=.5/t:p===n&&l===Math.PI&&(y=-.5/t);for(let D=0;D<=t;D++){let w=D/t;u.x=-e*Math.cos(s+w*r)*Math.sin(o+b*a),u.y=e*Math.cos(o+b*a),u.z=e*Math.sin(s+w*r)*Math.sin(o+b*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(w+y,1-b),_.push(c++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){let b=h[p][_+1],y=h[p][_],D=h[p+1][_],w=h[p+1][_+1];(p!==0||o>0)&&f.push(b,y,w),(p!==n-1||l<Math.PI)&&f.push(y,D,w)}this.setIndex(f),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(x,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Di=class i extends St{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new C,u=new C,d=new C;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,_=(s+1)*f+g;o.push(x,m,_),o.push(m,p,_)}this.setIndex(o),this.setAttribute("position",new et(a,3)),this.setAttribute("normal",new et(l,3)),this.setAttribute("uv",new et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ia=class extends ft{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},ht=class extends kn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uh,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var sa=class extends kn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uh,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.combine=Qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Ao(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Fv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Gs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},zc=class extends Gs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tu,endingEnd:tu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case nu:r=e,a=2*t-n;break;case iu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case nu:o=e,l=2*n-t;break;case iu:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,_=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,b=(-1-f)*m+(1.5+f)*x+.5*g,y=f*m-f*x;for(let D=0;D!==a;++D)r[D]=p*o[h+D]+_*o[c+D]+b*o[l+D]+y*o[u+D];return r}},Hc=class extends Gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},kc=class extends Gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},In=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ao(t,this.TimeBufferType),this.values=Ao(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ao(e.times,Array),values:Ao(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new kc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Hc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Uo:t=this.InterpolantFactoryMethodDiscrete;break;case cc:t=this.InterpolantFactoryMethodLinear;break;case Ya:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Uo;case this.InterpolantFactoryMethodLinear:return cc;case this.InterpolantFactoryMethodSmooth:return Ya}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Fv(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ya,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=cc;var ns=class extends In{constructor(e,t,n){super(e,t,n)}};ns.prototype.ValueTypeName="bool";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=Uo;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var Vc=class extends In{};Vc.prototype.ValueTypeName="color";var Gc=class extends In{};Gc.prototype.ValueTypeName="number";var Wc=class extends Gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)zt.slerpFlat(r,0,o,c-a,o,c,l);return r}},ra=class extends In{InterpolantFactoryMethodLinear(e){return new Wc(this.times,this.values,this.getValueSize(),e)}};ra.prototype.ValueTypeName="quaternion";ra.prototype.InterpolantFactoryMethodSmooth=void 0;var is=class extends In{constructor(e,t,n){super(e,t,n)}};is.prototype.ValueTypeName="string";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=Uo;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var Xc=class extends In{};Xc.prototype.ValueTypeName="vector";var qc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Bv=new qc,Yc=class{constructor(e){this.manager=e!==void 0?e:Bv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Yc.DEFAULT_MATERIAL_NAME="__DEFAULT";var oa=class extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ws=class extends oa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},El=new lt,rd=new C,od=new C,Zc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ar,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;rd.setFromMatrixPosition(e.matrixWorld),t.position.copy(rd),od.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(od),t.updateMatrixWorld(),El.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(El),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(El)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Kc=class extends Zc{constructor(){super(new Hs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xs=class extends oa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new Kc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var qs=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ad(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=ad();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function ad(){return performance.now()}var gh="\\[\\]\\.:\\/",zv=new RegExp("["+gh+"]","g"),xh="[^"+gh+"]",Hv="[^"+gh.replace("\\.","")+"]",kv=/((?:WC+[\/:])*)/.source.replace("WC",xh),Vv=/(WCOD+)?/.source.replace("WCOD",Hv),Gv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xh),Wv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xh),Xv=new RegExp("^"+kv+Vv+Gv+Wv+"$"),qv=["material","materials","bones","map"],Jc=class{constructor(e,t,n){let s=n||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},yt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zv,"")}static parseTrackName(e){let t=Xv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);qv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};yt.Composite=Jc;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qy=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Rh={};Of(Rh,{AI_GRAB_DELAY:()=>bh,AI_NAMES:()=>Eh,C:()=>an,CHARACTERS:()=>Tt,CHEESE_HT:()=>$s,CHEESE_R:()=>Ln,COUNTDOWN:()=>Sh,COURSE_END:()=>Ur,FENCE_X:()=>Mh,FINISH_Z:()=>Mn,G:()=>Lr,HAY_Z:()=>on,HEAT_POINTS:()=>Ma,LEDGE_DRAG:()=>Fd,RELEASE_CD:()=>rs,ROLL_CHARGES:()=>er,ROLL_RECHARGE:()=>Id,ST:()=>ie,START_Z:()=>Ni,TRACK_HALF:()=>Nr,addRacer:()=>ya,aiInput:()=>Hd,baseH:()=>Ld,cheeseOmega:()=>ey,cheeseQuat:()=>Ah,createRace:()=>xa,gradient:()=>pa,gridOrder:()=>wh,height:()=>Fe,makeAI:()=>Bd,mulberry32:()=>Gn,newInput:()=>Or,placeAtStart:()=>Fr,quatYXZ:()=>ga,racerFlags:()=>Sa,racerQuat:()=>kd,rankRacers:()=>Br,rankings:()=>ay,resetRace:()=>sy,snapshot:()=>ly,step:()=>Th,stepRacer:()=>_a,vnoise:()=>Qt});var an={TICK:30,SNAP:30,SUB:.016666666666666666},Lr=16,Ni=-4,Mn=388,on=414,Ur=on+16,Nr=21.2,Mh=23.6,Ln=.5,$s=.17,rs=2,Sh=4.5,ie={IDLE:0,RUN:1,DIVE:2,TUMBLE:3,GETUP:4,CELEBRATE:5},Js=.08,Yv=6,Zv=12.5,Cd=10.5,Kv=.5,Jv=2.2,bh=13,er=2,Id=2.5;function Gn(i){return function(){i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var hi=(i,e,t)=>i<e?e:i>t?t:i,yh=[[0,0],[12,.72],[50,.8],[66,1],[100,.98],[114,.6],[132,.62],[148,.92],[192,.85],[214,.45],[244,.05],[252,0]].map(([i,e],t)=>[t?i*1.5:i,e]);function jv(i){if(i<=0)return 0;if(i>Ur+40)return-.035*Math.min(1,(i-Ur-40)/60);for(let e=1;e<yh.length;e++){let[t,n]=yh[e];if(i<t){let[s,r]=yh[e-1],o=(i-s)/(t-s),a=o*o*(3-2*o);return r+(n-r)*a}}return 0}var da=-200,Qv=1e3,Qs=.25,ui=new Float32Array(Math.ceil((Qv-da)/Qs)+2);{let i=0;for(let t=0;t<ui.length;t++){let n=da+t*Qs;ui[t]=i,i-=jv(n+Qs*.5)*Qs}let e=ui[Math.round((0-da)/Qs)];for(let t=0;t<ui.length;t++)ui[t]-=e}function Ld(i){let e=(i-da)/Qs;e<0&&(e=0),e>ui.length-2&&(e=ui.length-2);let t=Math.floor(e),n=e-t;return ui[t]*(1-n)+ui[t+1]*n}function ha(i,e){let t=Math.imul(i,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296}function Qt(i,e){let t=Math.floor(i),n=Math.floor(e),s=i-t,r=e-n,o=s*s*(3-2*s),a=r*r*(3-2*r),l=ha(t,n),c=ha(t+1,n),h=ha(t,n+1),u=ha(t+1,n+1);return(l+(c-l)*o)*(1-a)+(h+(u-h)*o)*a}var fa=[];{let i=Gn(1234);for(let e=0;e<165;e++){let t=i()<.25;fa.push({x:(i()*2-1)*19,z:10+i()*342,a:(i()<.2?-.55:1)*(t?.8+i()*.6:.3+i()*.4),r:t?2.4+i()*1.6:1.3+i()*1.3})}fa.sort((e,t)=>e.z-t.z)}function $v(i){return i<4||i>375?0:Math.min(1,(i-4)/10,(375-i)/25)}function Fe(i,e){let t=Ld(e),n=Math.abs(i);if(n>22){let r=n-22,o=e<on-14?1:Math.max(.12,1-(e-on+14)/70),a=r<10?.03*r*r:r<60?3+.45*(r-10):25.5+.08*(r-60);t+=a*o,n>34&&(t+=(Qt(i*.03,e*.03)-.5)*8*Math.min(1,(n-34)/25))}let s=$v(e);if(s>0){let r=.22*Math.sin(.23*i+.11*e)*Math.sin(.19*e+1.3)+.14*Math.sin(.41*e-.2*i)+.08*Math.sin(.7*i+.53*e)+(Qt(i*.35,e*.35)-.5)*.5+(Qt(i*1.1+50,e*1.1)-.5)*.14;for(let o=0;o<fa.length;o++){let a=fa[o],l=e-a.z;if(l>6.5)continue;if(l<-6.5)break;let c=i-a.x,h=(c*c+l*l)/(a.r*a.r);h<4&&(r+=a.a*Math.exp(-h*1.6))}t+=r*s}else e>383&&n<120&&(t+=(Qt(i*.05,e*.05)-.5)*2*Math.min(1,(e-383)/60));return t}function pa(i,e){return[(Fe(i+.15,e)-Fe(i-.15,e))/(2*.15),(Fe(i,e+.15)-Fe(i,e-.15))/(2*.15)]}function ga(i,e,t){let n=Math.cos(e/2),s=Math.cos(i/2),r=Math.cos(t/2),o=Math.sin(e/2),a=Math.sin(i/2),l=Math.sin(t/2);return[o*s*r+n*a*l,n*a*r-o*s*l,n*s*l-o*a*r,n*s*r+o*a*l]}var Tt=[{name:"Rugby Reg",h:1,w:1.32,skin:14724201,shirt:12068395,hoops:16053492,sleeve:12068395,shorts:16053492,legs:12068395,shoes:1118481,hair:2825486,hairStyle:"short",hat:"headband",hatColor:16053492,extras:["socks"]},{name:"Farmer Fern",h:1.1,w:.9,skin:16767416,shirt:11549230,check:5904916,sleeve:11549230,shorts:4020864,legs:4020864,shoes:3042094,boots:3042094,hair:13132842,hairStyle:"short",hat:"flatcap",hatColor:7035450,extras:["overalls","straw"]},{name:"Chef Brie",h:.95,w:1.28,skin:9262372,shirt:16316664,sleeve:16316664,shorts:4473924,legs:4473924,shoes:2236962,hair:1710618,hairStyle:"short",hat:"chef",hatColor:16777215,extras:["belly","apron","mustache","buttons"]},{name:"Sir Cheddalot",h:1.05,w:1.18,skin:16767916,shirt:12107462,sleeve:12107462,arms:10133930,shorts:10133930,legs:12107462,shoes:7041144,hair:7031339,hairStyle:"none",hat:"knight",hatColor:12107462,extras:["tabard"],tabard:2051738,metal:!0},{name:"Captain Curd",h:1.12,w:1.25,skin:14724201,shirt:2052031,sleeve:2052031,arms:2052031,shorts:14034984,legs:2052031,shoes:14034984,boots:14034984,hair:1710618,hairStyle:"quiff",hat:null,cape:14034984,extras:["mask","emblem","belt","shoulders"]},{name:"Granny Gwen",h:.82,w:1.05,skin:16769220,shirt:14257331,sleeve:14257331,arms:14257331,shorts:8021584,legs:15257520,shoes:4861984,hair:14211288,hairStyle:"bun",hat:null,extras:["skirt","glasses","buttons","handbag","pearls"]},{name:"Moo-Suit Mo",h:1,w:1.15,skin:15843965,shirt:16053492,sleeve:16053492,arms:16053492,shorts:16053492,legs:16053492,shoes:1710618,hair:5913114,hairStyle:"none",hat:"cowhood",hatColor:16053492,extras:["spots","udder"]},{name:"Lycra Lexi",h:1.12,w:.84,skin:9262372,shirt:10354432,stripe:16723872,sleeve:16723872,shorts:1447446,legs:10354432,shoes:16723872,hair:1710618,hairStyle:"ponytail",hat:"sweatband",hatColor:16723872,extras:["sunglasses"]},{name:"Reverend Rupert",h:1.15,w:.92,skin:13010498,shirt:1381653,sleeve:1381653,arms:1381653,shorts:1381653,legs:1381653,shoes:657930,hair:10132122,hairStyle:"bald",hat:null,extras:["robe","collar","glasses","cross"]},{name:"Punk Pete",h:1,w:.95,skin:16767916,shirt:1842204,sleeve:1842204,shorts:2969482,legs:2969482,shoes:3805200,boots:3805200,hair:3800852,hairStyle:"mohawk",hat:null,extras:["studs","rips","chain"]}],Eh=["Bramble","Pip","Hattie","Big Tom","Moss","Dot","Wilf","Nell"];function Or(){return{ax:0,f:0,b:0,s:0,d:0,g:0,k:0,j:0}}function xa(i=1){return{seed:i,rng:Gn(i),t:0,phase:"countdown",cd:Sh,raceT:0,overT:0,racers:[],cheese:Od(),events:[],result:null,reachBonus:0,finishOrder:[]}}var ss=4,Dd=.5*ss*Ln*Ln,ma=ss*(3*Ln*Ln+4*$s*$s)/12,Ud=[];for(let i of[-1,1])for(let e=0;e<18;e++){let t=e/18*Math.PI*2;Ud.push([i*$s,Math.cos(t)*Ln,Math.sin(t)*Ln])}function va(i,e){let[t,n,s,r]=i,[o,a,l]=e,c=r*o+n*l-s*a,h=r*a+s*o-t*l,u=r*l+t*a-n*o,d=-t*o-n*a-s*l;return[c*r+d*-t+h*-s-u*-n,h*r+d*-n+u*-t-c*-s,u*r+d*-s+c*-n-h*-t]}function Nd(i,e){return va([-i[0],-i[1],-i[2],i[3]],e)}var Ir=(i,e)=>[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]],ua=(i,e)=>i[0]*e[0]+i[1]*e[1]+i[2]*e[2];function js(i,e){let t=Nd(i,e);return va(i,[t[0]/Dd,t[1]/ma,t[2]/ma])}function Od(){return{x:0,y:Fe(0,.8)+Ln,z:.8,vx:0,vy:0,vz:0,q:ga(0,0,0),L:[0,0,0],released:!1,heldBy:null,maxImpact:0}}function ey(i){return js(i.q,i.L)}function Pd(i,e,t){i.vx+=t[0]/ss,i.vy+=t[1]/ss,i.vz+=t[2]/ss;let n=Ir(e,t);i.L[0]+=n[0],i.L[1]+=n[1],i.L[2]+=n[2]}var Fd=+(globalThis.process?.env?.LEDGE??.25);function ty(i,e,t){if(e.vy-=Lr*t,e.z<372){let x=Math.min(1.1,Math.max(0,-pa(e.x,e.z)[1]));e.vz+=.5*x*t}let n=Math.hypot(e.vx,e.vy,e.vz),s=e.z>168&&e.z<200?Fd:0,r=Math.max(0,1-(.019*n+.027+s+(n>15?(n-15)*.25:0))*t);e.vx*=r,e.vy*=r,e.vz*=r;let o=1-.12*t;e.L[0]*=o,e.L[1]*=o,e.L[2]*=o,e.x+=e.vx*t,e.y+=e.vy*t,e.z+=e.vz*t;let a=js(e.q,e.L),[l,c,h,u]=e.q;e.q=[l+.5*t*(a[0]*u+a[1]*h-a[2]*c),c+.5*t*(a[1]*u+a[2]*l-a[0]*h),h+.5*t*(a[2]*u+a[0]*c-a[1]*l),u+.5*t*(-a[0]*l-a[1]*c-a[2]*h)];let d=Math.hypot(...e.q);e.q=e.q.map(x=>x/d);let f=0,g=null;for(let x=0;x<2;x++)for(let m of Ud){let p=va(e.q,m),_=e.x+p[0],b=e.y+p[1],y=e.z+p[2],w=Fe(_,y)-b;if(w<=0)continue;let[R,P]=pa(_,y),S=1/Math.sqrt(R*R+1+P*P),v=[-R*S,S,-P*S];x===0&&w>f&&(f=w,g=v);let T=js(e.q,e.L),L=[e.vx+T[1]*p[2]-T[2]*p[1],e.vy+T[2]*p[0]-T[0]*p[2],e.vz+T[0]*p[1]-T[1]*p[0]],I=ua(L,v);if(I>=0)continue;-I>e.maxImpact&&(e.maxImpact=-I);let U=-I>3?.3:0,k=Ir(p,v),H=1/ss+ua(v,Ir(js(e.q,k),p)),W=-(1+U)*I/H;Pd(e,p,[v[0]*W,v[1]*W,v[2]*W]);let N=js(e.q,e.L),J=[e.vx+N[1]*p[2]-N[2]*p[1],e.vy+N[2]*p[0]-N[0]*p[2],e.vz+N[0]*p[1]-N[1]*p[0]],se=ua(J,v),he=[J[0]-se*v[0],J[1]-se*v[1],J[2]-se*v[2]],ae=Math.hypot(...he);if(ae>1e-5){let xe=he.map(oe=>oe/ae),X=1/ss+ua(xe,Ir(js(e.q,Ir(p,xe)),p)),K=Math.min(ae/X,.7*W);Pd(e,p,[-xe[0]*K,-xe[1]*K,-xe[2]*K])}}f>0&&(e.x+=g[0]*f*.9,e.y+=g[1]*f*.9,e.z+=g[2]*f*.9),Math.abs(e.x)>Nr-.4&&(e.x=Math.sign(e.x)*(Nr-.4),e.vx=-e.vx*.5,e.L[2]*=-.3),e.z>on-.7&&(e.z=on-.7,e.vz=-Math.abs(e.vz)*.25,e.L=e.L.map(x=>x*.4))}function ny(i,e){let t=i.cheese;if(t.heldBy!=null){let s=i.racers.find(r=>r.id===t.heldBy);s&&(t.x=s.x,t.z=s.z,t.y=s.y+2.15,t.vx=t.vy=t.vz=0,t.L=[0,0,0],t.q=ga(s.heading+Math.PI/2,0,0));return}if(!t.released){t.y=Fe(t.x,t.z)+Ln;return}let n=4;for(let s=0;s<n;s++)ty(i,t,e/n);t.maxImpact>3.5&&i.events.push({e:"bounce",x:t.x,y:t.y-Ln,z:t.z,s:t.maxImpact}),t.maxImpact=0}function iy(i,e){e.released=!0,e.vz=7,e.vx=(i.rng()-.5)*.6;let t=[e.vz/Ln,(i.rng()-.5)*.6,(i.rng()-.5)*.4],n=Nd(e.q,t);e.L=va(e.q,[n[0]*Dd,n[1]*ma,n[2]*ma])}function ya(i,{id:e,name:t,char:n=0,ai:s=null}){let r=i.racers.length,o={id:e,name:t,char:n,ai:s,idx:r,x:0,y:0,z:Ni,vx:0,vy:0,vz:0,heading:0,state:ie.IDLE,st:0,dur:0,meter:0,stamina:1,sprinting:!1,sprintLock:!1,charges:er,chargeT:0,rollJumps:0,cleanT:0,involuntary:0,grounded:!0,airT:0,immune:0,gy:0,jumped:!1,reach:0,grabCd:0,tackleT:0,tackleCd:0,slowT:0,spin:0,roll:0,spinRate:0,rollRate:0,why:"",finished:!1,finishTime:0,hasCheese:!1,_d:0,_g:0,_k:0,_j:0,aiInp:Or()};return s===!0&&(o.ai=Bd(i)),i.racers.push(o),Fr(i,o),o}function Bd(i){let e=i.rng;return{rubber:1,pull:0,pref:-6+e()*14,side:(e()*2-1)*5,caution:.3+e()*.5,aggro:.1+e()*.6,sprinty:.3+e()*.6,wander:1+e()*3,wf:.3+e()*.5,ph:e()*6,react:.6+e()*.35,laneX:(e()*2-1)*6,fwdHold:1,sprintHold:0}}function wh(i,e=Math.random){let t=i.racers.filter(r=>!r.ai),n=i.racers.filter(r=>r.ai).sort(()=>e()-.5),s=Math.floor(n.length/2);i.racers=[...n.slice(0,s),...t,...n.slice(s)],i.racers.forEach((r,o)=>{r.idx=o})}function Fr(i,e){let t=Math.max(i.racers.length,1),n=Math.min(3,36/t);e.x=(e.idx-(t-1)/2)*n,e.z=Ni,e.y=Fe(e.x,e.z),e.gy=e.y,e.vx=e.vy=e.vz=0,e.heading=0,e.state=ie.IDLE,e.st=0,e.meter=0,e.stamina=1,e.spin=e.roll=0,e.charges=er,e.chargeT=0,e.involuntary=0,e.sprintLock=!1,e.finished=!1,e.hasCheese=!1,e.slowT=e.reach=e.tackleT=0,e.jumped=!1}function sy(i,e){i.seed=e,i.rng=Gn(e),i.t=0,i.phase="countdown",i.cd=Sh,i.raceT=0,i.overT=0,i.cheese=Od(),i.events=[],i.result=null,i.finishOrder=[];for(let t of i.racers)Fr(i,t)}function Vn(i,e,t,n=!1){if(!n&&e.immune>0||e.state===ie.TUMBLE||e.state===ie.CELEBRATE)return;let s=Math.hypot(e.vx,e.vz);e.state=ie.TUMBLE,e.st=0,e.why=t,e.spinRate=4+s*.55,e.rollRate=(i.rng()-.5)*6,e.meter=0,e.jumped=!1,t!=="dive"&&t!=="jump"&&e.involuntary++,e.grounded&&(e.vy=Math.max(e.vy,1.2+s*.06)),i.events.push({e:"tumble",id:e.id,why:t})}function Dr(i,e){let t=i.cheese,n=Math.max(0,Math.abs(t.y-(e.y+(e.state===ie.RUN?1:.45)))-.6);return Math.hypot(t.x-e.x,n,t.z-e.z)}function zd(i,e){return!e.ai||i.raceT>bh}function _a(i,e,t,n,s=!1){let r=(n.d|0)+(n.j|0),o=(n.g|0)+(n.k|0),a=r!==e._d,l=o!==e._g;if(e._d=r,e._g=o,e.st+=t,e.grabCd=Math.max(0,e.grabCd-t),e.tackleCd=Math.max(0,e.tackleCd-t),e.reach=Math.max(0,e.reach-t),e.tackleT=Math.max(0,e.tackleT-t),e.slowT=Math.max(0,e.slowT-t),e.immune=Math.max(0,e.immune-t),e.cleanT=Math.max(0,e.cleanT-t),e.jumpCd=Math.max(0,(e.jumpCd||0)-t),e.rjT=Math.max(0,(e.rjT||0)-t),e.charges<er&&(e.chargeT+=t,e.chargeT>=Id&&(e.charges++,e.chargeT=0)),e.sprinting=!1,e.state===ie.IDLE){e.y=Fe(e.x,e.z),e.gy=e.y,e.vx=e.vy=e.vz=0;return}a?e.spaceBuf=.2:e.spaceBuf=Math.max(0,(e.spaceBuf||0)-t);let[c,h]=pa(e.x,e.z),u=1/(1+c*c+h*h),d=Math.hypot(e.vx,e.vz),f=i.cheese,g=0,x=0,m=w=>{if(d>.01){let R=Math.min(w*t,d)/d/t;g-=e.vx*R,x-=e.vz*R}},p=w=>{g+=-Lr*c*u*w,x+=-Lr*h*u*w},_=hi(n.ax,-1,1);switch(e.state){case ie.RUN:{p(Kv);let w=e.slowT>0?.3:1;n.s||(e.sprintLock=!1);let R=n.s&&n.f&&!e.sprintLock&&e.stamina>0&&e.grounded;R?(e.sprinting=!0,e.stamina=Math.max(0,e.stamina-t/Jv),e.stamina<=0&&(e.sprintLock=!0)):n.s||(e.stamina=Math.min(1,e.stamina+t/4));let P=(R?Zv:Yv)*(e.ai?e.ai.rubber:1);if(n.f&&(x+=P*w+Math.max(0,7-e.vz)*1.4*w),n.b&&e.vz>0&&(x-=10),g+=(_*7.5-e.vx)*(_?7:5),g-=Js*d*e.vx,x-=Js*d*e.vz,e.slowT>0&&(g-=e.vx*1.6,x-=e.vz*1.6),e.cleanT>0&&(x+=3),d>Cd?e.meter+=(d-Cd)*.12*t*(e.grounded?1:.4)*(R?1.5:1):e.meter=Math.max(0,e.meter-.35*t),_&&d>8&&(e.meter+=Math.abs(_)*(d-8)*.035*t),n.b&&(e.meter=Math.max(0,e.meter-1*t)),e.spaceBuf>0&&e.airT<.15&&e.jumpCd<=0){e.spaceBuf=0;let S=f.z-e.z;if(f.released&&f.heldBy==null&&S>.5&&S<5.5&&Math.abs(f.x-e.x)<2.2&&zd(i,e)){e.state=ie.DIVE,e.st=0;let T=Math.atan2(f.x-e.x,Math.max(.5,S));e.vx=e.vx*.5+Math.sin(T)*(d*.5+4.5),e.vz=e.vz*.5+Math.cos(T)*(d*.5+4.5),e.vy=c*e.vx+h*e.vz+1.4,e.grounded=!1,e.airT=.01,i.events.push({e:"dive",id:e.id})}else{e.vy=Math.max(e.vy,c*e.vx+h*e.vz)+4.6,e.grounded=!1,e.jumped=!0,e.airT=.01,e.jumpCd=2;let T=.25,L=e.x+e.vx*T,I=e.z+e.vz*T;e.crestJump=Fe(L,I)<Fe(e.x,e.z)+(c*e.vx+h*e.vz)*T-.12,i.events.push({e:"jump",id:e.id})}}s||(e.meter>=1?Vn(i,e,"speed"):d>14&&e.grounded&&i.rng()<(d-14)*.08*t&&Vn(i,e,"trip"));break}case ie.DIVE:p(.7),g+=_*3,g-=Js*.5*d*e.vx,x-=Js*.5*d*e.vz;break;case ie.TUMBLE:{p(.8),e.grounded&&m(1.2),g-=Js*.75*d*e.vx,x-=Js*.75*d*e.vz,g+=_*(e.grounded?4:7),n.f&&!e.grounded&&(x+=2),e.spin+=e.spinRate*t,e.spinRate=e.spinRate*(1-.6*t)+(e.grounded?d*.3*t:0),e.roll+=e.rollRate*t,e.rollRate*=1-1.2*t;let w=Math.abs(h)<.15;if(e.spaceBuf>0&&e.st>.25)if(d>=5&&e.charges>0&&e.airT<.3&&(e.rjT||0)<=0){e.spaceBuf=0,e.charges--,e.chargeT=0,e.rollJumps++;let R=f.heldBy==null?hi((f.x-e.x)*.25,-3,3):0;e.vy=Math.max(e.vy,c*e.vx+h*e.vz)+7,e.vz+=2.5,e.vx+=R+_*2,e.rjT=.8;{let P=Math.hypot(e.vx,e.vz),S=Math.max(d,14);P>S&&(e.vx*=S/P,e.vz*=S/P)}e.grounded=!1,e.airT=.01,i.events.push({e:"rjump",id:e.id})}else d<5&&(e.spaceBuf=0,e.state=ie.GETUP,e.st=0,e.dur=.6);(d<3&&e.st>.7||w&&d<6&&e.st>2.5||e.st>9)&&(e.state=ie.GETUP,e.st=0,e.dur=.6);break}case ie.GETUP:p(.3),m(7),e.st>e.dur&&(e.state=ie.RUN,e.st=0,e.immune=1.5,e.spin=0,e.roll=0,e.meter=0);break;case ie.CELEBRATE:m(12),p(.2);break}e.ai&&e.ai.pull&&e.state!==ie.CELEBRATE&&e.state!==ie.GETUP&&(x+=e.ai.pull),e.vx+=g*t,e.vz+=x*t,e.vz<-4&&(e.vz=-4),e.x+=e.vx*t,e.z+=e.vz*t,Math.abs(e.x)>Nr&&(e.x=Math.sign(e.x)*Nr,e.vx=-e.vx*.3),e.z>on-.9&&(e.z=on-.9,e.vz>0&&(e.vz>7&&!s&&Vn(i,e,"hay"),e.vz=-e.vz*.2)),e.z<Ni-6&&(e.z=Ni-6,e.vz=Math.max(0,e.vz));let b=Fe(e.x,e.z),y=hi((b-e.gy)/t,-40,7),D=e.grounded;if(e.vy-=Lr*t,e.y+=e.vy*t,D&&e.state===ie.RUN&&!e.jumped&&e.y>b&&e.y-b<.3&&e.vy-y>-2&&(e.y=b),e.y<=b){if(!D){let w=-(e.vy-y);e.state===ie.RUN?e.jumped?(w<5.5?(e.crestJump&&(e.cleanT=.5),i.events.push({e:"clean",id:e.id,boost:!!e.crestJump})):s||Vn(i,e,"jump",!0),e.jumped=!1):!s&&(w>9||e.airT>.8)?Vn(i,e,"landing"):e.meter+=Math.max(0,w-3.5)*.06:e.state===ie.DIVE&&e.st>.12&&!s&&Vn(i,e,"dive",!0),w>3&&e.airT>.12&&i.events.push({e:"land",id:e.id,s:w})}e.y=b,e.state===ie.TUMBLE&&!D&&e.vy<y-3?(e.vy=y+Math.min(4,(y-e.vy)*.3),e.grounded=!1):(e.vy=y,e.grounded=!0),e.airT=0}else e.grounded=!1,e.airT+=t;if(e.gy=b,(e.state===ie.RUN||e.state===ie.DIVE)&&d>.6){let w=Math.atan2(e.vx,e.vz)-e.heading;w=Math.atan2(Math.sin(w),Math.cos(w)),e.heading+=w*Math.min(1,t*12)}else if(e.state===ie.CELEBRATE){let w=Math.PI-e.heading;w=Math.atan2(Math.sin(w),Math.cos(w)),e.heading+=w*Math.min(1,t*3)}if(l&&e.grabCd<=0&&(e.state===ie.RUN||e.state===ie.DIVE||e.state===ie.TUMBLE)){if(f.released&&f.heldBy==null&&Dr(i,e)<3.2||e.state!==ie.RUN)e.reach=.35,e.grabCd=.45,i.events.push({e:"reach",id:e.id});else if(e.tackleT=.35,e.grabCd=.45,!s&&e.tackleCd<=0){let R=null,P=2;for(let S of i.racers){if(S===e||S.state===ie.TUMBLE||S.state===ie.CELEBRATE||S.state===ie.GETUP||S.finished)continue;let v=Math.hypot(S.x-e.x,S.z-e.z);v<P&&Math.abs(S.y-e.y)<1.5&&(P=v,R=S)}if(R){e.tackleCd=5,e.vx*=.8,e.vz*=.8,R.slowT=1;let S=R.immune<=0;i.events.push({e:"grab",id:e.id,target:R.id,trip:S}),S&&(R.vx+=(R.x-e.x)*1.5,R.vz*=.85,Vn(i,R,"grabbed"))}else i.events.push({e:"whiff",id:e.id})}}}function Hd(i,e){let t=e.ai,n=i.cheese,s=e.aiInp,r=i.rng;if(i.phase==="over")return s.f=0,s.b=1,s.s=0,s.ax=0,s;let o=null;for(let f of i.racers)!f.ai&&(!o||f.z>o.z)&&(o=f);if(t.rubber=1,t.pull=0,o&&i.phase==="race"&&e.state!==ie.TUMBLE&&Math.hypot(n.x-e.x,n.z-e.z)>30&&e.z<300){let f=e.z-o.z;t.pull=hi((t.pref-f)*.3,-3,3)}let a=i.raceT>bh,l=n.released&&n.heldBy==null&&n.z>e.z-2,c=Math.max(6,Math.hypot(e.vx,e.vz)),h=hi((n.z-e.z)/c,0,1.5),u=l?n.x+n.vx*h+Math.sin(i.t*t.wf+t.ph)*t.wander*.4*hi((n.z-e.z)/30,0,1):t.laneX;o&&!(l&&n.z-e.z<10)&&(u=u*.6+(o.x+t.side)*.4),u=hi(u,-14,14);for(let f of i.racers){if(f===e)continue;let g=f.z-e.z;g>0&&g<3&&Math.abs(f.x-e.x)<1&&t.aggro<.5&&(u+=e.x>=f.x?1.5:-1.5)}let d=u-e.x;if(s.ax=hi(hi(d*1.1,-7,7)/7.5,-1,1),Math.abs(s.ax)<.08&&(s.ax=0),e.state===ie.TUMBLE){Math.hypot(e.vx,e.vz)>6&&e.charges>0&&l&&a&&n.z-e.z<14&&r()<.02&&s.d++;let g=Dr(i,e);return l&&a&&g<2.2&&r()<t.react&&s.g++,s}if(e.meter>t.caution+.1?t.fwdHold=0:e.meter<t.caution-.15&&(t.fwdHold=1),s.f=t.fwdHold,s.b=e.meter>t.caution+.3?1:0,t.sprintHold)(e.stamina<.05||e.meter>Math.max(.5,t.caution*.8))&&(t.sprintHold=0);else{let f=n.released&&n.heldBy==null&&n.z-e.z>10;e.stamina>(f?.8:.95)&&e.meter<(f?.25:.1)&&r()<t.sprinty*(f?.03:.015)&&(t.sprintHold=1)}if(s.s=t.sprintHold,(e.state===ie.RUN||e.state===ie.DIVE)&&a){let f=Dr(i,e);if(l&&f<1.6+i.reachBonus&&r()<t.react&&s.g++,e.state===ie.RUN&&l){let g=n.z-e.z;g>1.6&&g<4.2&&Math.abs(n.x-e.x)<1.3&&r()<.05*t.react&&s.d++}}if(e.state===ie.RUN&&e.tackleCd<=0&&i.raceT>3){for(let f of i.racers)if(!(f===e||f.state===ie.TUMBLE)&&f.z>e.z&&Math.hypot(f.x-e.x,f.z-e.z)<1.7&&Math.hypot(n.x-f.x,n.z-f.z)<20&&Dr(i,e)>3.5&&r()<t.aggro*.002){s.g++;break}}return s}function Th(i,e,t){let n=Math.max(1,Math.round(e/an.SUB)),s=e/n;for(let r=0;r<n;r++)oy(i,s,t)}var ry=(i,e)=>i&&(i.get?i.get(e):i[e])||null;function oy(i,e,t){i.t+=e;let n=i.cheese;if(i.phase==="countdown"){if(i.cd-=e,i.cd<=rs&&!n.released&&(iy(i,n),i.events.push({e:"release"})),i.cd<=0){i.phase="race",i.raceT=0;for(let r of i.racers)r.state=ie.RUN,r.st=0;i.events.push({e:"go"})}}else i.phase==="race"?i.raceT+=e:i.phase==="over"&&(i.overT+=e);for(let r of i.racers){let o=r.ai?i.phase==="race"||i.phase==="over"?Hd(i,r):r.aiInp:ry(t,r.id)||Or();_a(i,r,e,o,!1)}ny(i,e);let s=i.racers;for(let r=0;r<s.length;r++)for(let o=r+1;o<s.length;o++){let a=s[r],l=s[o];if(a.state===ie.IDLE)continue;let c=l.x-a.x,h=l.z-a.z,u=Math.hypot(c,h);if(u<.75&&u>1e-4&&Math.abs(a.y-l.y)<1.4){let d=(.75-u)/2,f=c/u,g=h/u;a.x-=f*d,a.z-=g*d,l.x+=f*d,l.z+=g*d;let x=(l.vx-a.vx)*f+(l.vz-a.vz)*g;if(x<0&&(a.vx+=f*x*.5,a.vz+=g*x*.5,l.vx-=f*x*.5,l.vz-=g*x*.5,-x>6))if(a.state===ie.TUMBLE)Vn(i,l,"collision");else if(l.state===ie.TUMBLE)Vn(i,a,"collision");else{let m=i.rng()<.5?a:l;i.rng()<.4&&Vn(i,m,"collision")}}}if(i.phase==="race"){if(n.released&&n.heldBy==null)for(let r of s){if(!zd(i,r))continue;let o=r.state===ie.DIVE,a=r.state===ie.TUMBLE&&!r.grounded;if(!(r.reach>0&&(r.state===ie.RUN||r.state===ie.DIVE||r.state===ie.TUMBLE))&&!o&&!a)continue;let l=Dr(i,r),c=(r.reach>0?o?2.3:r.state===ie.TUMBLE?1.6:1.7:o?1.9:1.3)+(r.ai?0:i.reachBonus);if(l<c){n.heldBy=r.id,r.hasCheese=!0,r.reach=0,_h(i,r,"cheese");break}}for(let r of s)!r.finished&&r.z>=Mn&&(r.finished=!0,r.finishTime=i.raceT,i.finishOrder.push(r.id),i.events.push({e:"finish",id:r.id}),i.phase==="race"&&_h(i,r,"finish"));if(i.raceT>150){let r=s.reduce((o,a)=>a.z>o.z?a:o,s[0]);_h(i,r,"timeout")}}}function _h(i,e,t){i.phase="over",i.overT=0,i.result={id:e.id,name:e.name,how:t,time:i.raceT},e.state=ie.CELEBRATE,e.st=0,e.spin=e.roll=0,e.vy=Math.min(e.vy,0),i.events.push({e:"win",id:e.id,how:t})}function Br(i,e){let t=e?e.id:null;return[...i].sort((n,s)=>{if(t!=null){if(n.id===t)return-1;if(s.id===t)return 1}let r=n.finished?1:0,o=s.finished?1:0;if(r!==o)return o-r;if(r&&o&&n.finishTime&&s.finishTime&&n.finishTime!==s.finishTime)return n.finishTime-s.finishTime;let a=Math.round(s.z*100)-Math.round(n.z*100);return a||(String(n.id)<String(s.id)?-1:String(n.id)>String(s.id)?1:0)})}function ay(i){return Br(i.racers,i.result)}var Ma=[10,7,5,3,2,1],Dt=i=>Math.round(i*1e3)/1e3;function kd(i){return ga(i.heading,i.state===ie.TUMBLE?i.spin:0,i.state===ie.TUMBLE?i.roll:0)}function Ah(i){return i.q}function Sa(i){return(i.reach>0?1:0)|(i.tackleT>0?2:0)|(i.slowT>0?4:0)|(i.finished?8:0)|(i.grounded?16:0)|(i.sprinting?32:0)|(i.jumped?64:0)|(i.cleanT>0?128:0)}function ly(i,e){let t={countdown:0,race:1,over:2},n=i.cheese,s={t:"s",k:e,p:t[i.phase],cd:Dt(i.cd),rt:Dt(i.raceT),r:i.racers.map(r=>[r.id,Dt(r.x),Dt(r.y),Dt(r.z),...kd(r).map(Dt),Dt(r.vx),Dt(r.vy),Dt(r.vz),r.state,Sa(r),Dt(r.meter),Dt(r.st),Dt(r.stamina),r.charges]),c:[Dt(n.x),Dt(n.y),Dt(n.z),...n.q.map(Dt),Dt(n.vx),Dt(n.vy),Dt(n.vz),n.heldBy==null?null:n.heldBy,n.released?1:0],e:i.events};return i.result&&(s.res=i.result),i.events=[],s}var Rt=Ur;function cy(i){let e=i.map(o=>o.index?o.toNonIndexed():o),t=e.reduce((o,a)=>o+a.attributes.position.count,0),n=new Float32Array(t*3),s=0;for(let o of e)n.set(o.attributes.position.array,s*3),s+=o.attributes.position.count;let r=new St;return r.setAttribute("position",new _t(n,3)),r.computeVertexNormals(),r}function zr(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new Pn(n);return s.colorSpace=Et,s}function Wd(i,e="#fff",t=null,n=256,s=64,r="bold 40px sans-serif"){return zr(n,s,o=>{t&&(o.fillStyle=t,o.fillRect(0,0,n,s)),o.font=r,o.textAlign="center",o.textBaseline="middle",o.lineWidth=6,o.strokeStyle="rgba(0,0,0,0.65)",o.strokeText(i,n/2,s/2),o.fillStyle=e,o.fillText(i,n/2,s/2)})}function hy(){return zr(64,64,i=>{let e=i.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.5,"rgba(255,255,255,0.8)"),e.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=e,i.fillRect(0,0,64,64)})}var Ea=class{constructor(e,t=2500){this.max=t,this.n=0,this.cursor=0,this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.col=new Float32Array(t*3),this.size=new Float32Array(t),this.alpha=new Float32Array(t),this.life=new Float32Array(t),this.maxLife=new Float32Array(t);for(let r=0;r<t;r++)this.pos[r*3+1]=-1e5;let n=new St;n.setAttribute("position",new _t(this.pos,3).setUsage(Zs)),n.setAttribute("pcolor",new _t(this.col,3).setUsage(Zs)),n.setAttribute("psize",new _t(this.size,1).setUsage(Zs)),n.setAttribute("palpha",new _t(this.alpha,1).setUsage(Zs)),n.boundingSphere=new Hn(new C,1e6),this.geo=n;let s=new ft({uniforms:{map:{value:hy()},scale:{value:400}},vertexShader:`attribute vec3 pcolor; attribute float psize; attribute float palpha;
        uniform float scale; varying vec3 vC; varying float vA;
        void main(){ vC=pcolor; vA=palpha; vec4 mv=modelViewMatrix*vec4(position,1.0);
          gl_PointSize = min(psize*scale/max(0.1,-mv.z), 18.0); vA *= smoothstep(1.5, 4.0, -mv.z); gl_Position=projectionMatrix*mv; }`,fragmentShader:`uniform sampler2D map; varying vec3 vC; varying float vA;
        void main(){ vec4 t=texture2D(map, gl_PointCoord); float a=t.a*vA; if(a<0.02) discard; gl_FragColor=vec4(vC, a); }`,transparent:!0,depthWrite:!1});this.points=new Ko(n,s),this.points.frustumCulled=!1,e.add(this.points)}emit(e,t,n,s,r,o,a,l,c,h,u){let d=new Re(l);u=Math.max(1,Math.round(u*(this.density??1)));for(let f=0;f<u;f++){let g=this.cursor;this.cursor=(this.cursor+1)%this.max,this.pos[g*3]=e+(Math.random()-.5)*.3,this.pos[g*3+1]=t,this.pos[g*3+2]=n+(Math.random()-.5)*.3,this.vel[g*3]=s+(Math.random()-.5)*a,this.vel[g*3+1]=r+Math.random()*a,this.vel[g*3+2]=o+(Math.random()-.5)*a;let x=.8+Math.random()*.35;this.col[g*3]=d.r*x,this.col[g*3+1]=d.g*x,this.col[g*3+2]=d.b*x,this.size[g]=c*(.6+Math.random()*.8),this.life[g]=this.maxLife[g]=h*(.6+Math.random()*.8),this.alpha[g]=1}}kick(e,t,n,s,r,o){let a=Math.max(1,Math.round(o));this.emit(e,t+.05,n,s*.3,1.5,r*.3,2.2,6262575,.09,.9,a),this.emit(e,t+.05,n,s*.3,1.8,r*.3,2,7031339,.07,.8,Math.ceil(a*.6))}update(e){if(e>.05){let t=e;for(;t>1e-4;){let n=Math.min(.05,t);this.update(n),t-=n}return}for(let t=0;t<this.max;t++){if(this.life[t]<=0)continue;if(this.life[t]-=e,this.life[t]<=0){this.pos[t*3+1]=-1e5,this.alpha[t]=0;continue}this.vel[t*3+1]-=9*e;let n=1-1.2*e;this.vel[t*3]*=n,this.vel[t*3+2]*=n,this.pos[t*3]+=this.vel[t*3]*e,this.pos[t*3+1]+=this.vel[t*3+1]*e,this.pos[t*3+2]+=this.vel[t*3+2]*e;let s=Fe(this.pos[t*3],this.pos[t*3+2])+.03;this.pos[t*3+1]<s&&(this.pos[t*3+1]=s,this.vel[t*3]*=.3,this.vel[t*3+1]=0,this.vel[t*3+2]*=.3),this.alpha[t]=Math.min(1,this.life[t]/this.maxLife[t]*2.5)}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.palpha.needsUpdate=!0,this.geo.attributes.pcolor.needsUpdate=!0,this.geo.attributes.psize.needsUpdate=!0}},Ch=.98,ba=[.3,.42,.62],uy=[.06,.16,.46];function Vd(i){let e=s=>`vec3(${s.map(r=>r.toFixed(3)).join(",")})`,t=new ft({side:Ft,depthWrite:!1,fog:!1,uniforms:{time:{value:0}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }",fragmentShader:`uniform float time; varying vec3 vDir;
      void main(){
        vec3 d = normalize(vDir);            // per-pixel: no banding from interpolated directions
        float h = clamp(d.y, -1.0, 1.0);
        vec3 horizon = ${e(ba)}, zenith = ${e(uy)};
        vec3 col = mix(horizon, zenith, pow(smoothstep(0.0, 0.85, h), 0.7));
        col += vec3(1.0, 0.86, 0.62) * 0.06 * pow(max(0.0, 1.0 - abs(h - 0.02) * 6.0), 2.0); // faint warm glow on the horizon
        col = mix(col, horizon, 1.0 - smoothstep(-0.03, 0.06, h)); // below the horizon = haze (matches the fog)
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),n=new $e(new ci(i,64,32),t);return n.renderOrder=-10,n.frustumCulled=!1,n}function dy(i){let e=new Lt(1,1),t=new sa({color:16777215,emissive:11187396,flatShading:!0,fog:!1}),n=34,s=6,r=new Ht(e,t,n*s),o=new Mt,a=0;for(let l=0;l<n;l++){let c=l/n*Math.PI*2+i()*.15,h=520+i()*260,u=Math.sin(c)*h,d=200+Math.cos(c)*h,f=70+i()*120,g=22+i()*26;for(let x=0;x<s;x++){let m=(x-s/2)*g*.55+(i()-.5)*g*.4,p=(x%2?.25:0)*g+i()*g*.2,_=g*(.55+i()*.5)*(x===2||x===3?1.3:1);o.position.set(u+m*Math.cos(c),f+p,d-m*Math.sin(c)),o.rotation.set(i()*3,i()*3,i()*3),o.scale.set(_,_*.55,_*.8),o.updateMatrix(),r.setMatrixAt(a++,o.matrix)}}return r.count=a,r.frustumCulled=!1,r.renderOrder=-9,r}function Gd(i,e){if(e<-6||e>on+8)return 0;let t=0,n=[-11,-4.5,1.5,7.5,13];for(let s=0;s<n.length;s++){let r=n[s]+2.6*Math.sin(e*.035+s*1.7)+1.2*Math.sin(e*.11+s*2.3),o=.55+.45*Qt(e*.08,s*10)+(s===2?.5:0),a=Math.abs(i-r)/o;a<1.6&&(t=Math.max(t,(1-a/1.6)*(.55+.6*Qt(i*.9,e*.5))))}return t+=Math.max(0,Qt(i*.18+20,e*.12)-.62)*2.2*(Math.abs(i)<20?1:0),e<4&&(t=Math.max(t,Math.max(0,1-Math.abs(i)/12)*.4*Qt(i*.7,e*.7+3))),e>Mn-6&&e<on+2&&(t=Math.max(t,.9*Qt(i*.4,e*.4)*(1-Math.abs(i)/30))),Math.min(1,Math.max(0,t))}function Xd(i,e){let t=Gn(42),n={update:null,detail:[]};n.setDetail=v=>{for(let T of n.detail)T(v)};let s=new Mt,r=new Re,o=Vd(1e3);i.add(o),n.sky=o,n.clouds=dy(Gn(7)),i.add(n.clouds);let a=new ks(e),l=new es;l.add(Vd(50));let c=new $e(new Vs(49,24),new vn({color:4872752}));c.rotation.x=-Math.PI/2,c.position.y=-2,l.add(c),i.environment=a.fromScene(l,.04).texture,i.environmentIntensity=.55,i.fog=new qo(new Re().setRGB(ba[0]*Ch+.055,ba[1]*Ch+.03,ba[2]*Ch,Ui),.0015);let h=new C().setFromSphericalCoords(1,fh.degToRad(38),fh.degToRad(160));n.sunDir=h.clone();let u=new Ws(14674421,6120248,1.1);i.add(u);let d=new Xs(16766624,2.5);d.castShadow=!0,d.shadow.mapSize.set(2048,2048);let f=d.shadow.camera;f.left=-38,f.right=38,f.top=38,f.bottom=-38,f.near=1,f.far=220,d.shadow.bias=-3e-4,d.shadow.normalBias=.035,d.shadow.radius=3,d.shadow.intensity=.8,i.add(d),i.add(d.target),n.sun=d,n.placeSun=v=>{let T=.037109375,L=Math.round(v.x/T)*T,I=Math.round(v.z/T)*T;d.target.position.set(L,v.y,I),d.position.set(L+h.x*100,v.y+h.y*100,I+h.z*100),d.target.updateMatrixWorld()};let g=new Re(7313982),x=new Re(9286735),m=new Re(5075506),p=new Re(5390895),_=new Re(6969920),b=new Re,y=[8037188,9680211,13088613,6261306,11577434,8823370,13812346].map(v=>new Re(v)),D=(v,T,L)=>{let I=Math.abs(v),U=Qt(v*.09,T*.09),k=Qt(v*.5+9,T*.5);if(L.copy(g).lerp(x,U*.7+k*.25),T>Rt||I>75){let W=Math.floor(v/45+100),N=Math.floor((T-Rt)/55);L.lerp(y[(W*7+N*13)%y.length],.75)}I>24&&I<80&&T<Rt&&L.lerp(m,Math.min(1,(I-24)/18)*.6);let H=Gd(v,T);return H>0&&(b.copy(_).lerp(p,Qt(v*1.3,T*1.3)),L.lerp(b,Math.min(.9,H*.95))),L.multiplyScalar(.92+Qt(v*2.1,T*2.1)*.16),L},w=new ht({vertexColors:!0,roughness:.95,metalness:0,flatShading:!0});function R(v,T,L,I,U,k,H,W=.05){let N=new Ii(T-v,I-L,U,k);N.rotateX(-Math.PI/2),N.translate((v+T)/2,0,(L+I)/2);let J=N.attributes.position,se=(T-v)/U,he=(I-L)/k,ae=Gn(U*31+k);for(let be=0;be<J.count;be++){let He=J.getX(be),Le=J.getZ(be);He>v+.001&&He<T-.001&&Le>L+.001&&Le<I-.001&&(He+=(ae()-.5)*se*.35,Le+=(ae()-.5)*he*.35),J.setXYZ(be,He,Fe(He,Le),Le)}let xe=N.index.array,X=[];for(let be=0;be<xe.length;be+=3){if(H){let He=0,Le=0;for(let ke=0;ke<3;ke++)He+=J.getX(xe[be+ke])/3,Le+=J.getZ(xe[be+ke])/3;if(Math.abs(He)<H[0]&&Le>H[1]&&Le<H[2])continue}X.push(xe[be],xe[be+1],xe[be+2])}let K=new Float32Array(X.length*3),oe=new Float32Array(X.length*3),ne=Gn(U*7+k*3);for(let be=0;be<X.length;be+=3){let He=0,Le=0;for(let ke=0;ke<3;ke++){let F=X[be+ke];K[(be+ke)*3]=J.getX(F),K[(be+ke)*3+1]=J.getY(F),K[(be+ke)*3+2]=J.getZ(F),He+=J.getX(F)/3,Le+=J.getZ(F)/3}D(He,Le,b).multiplyScalar(1-W+ne()*W*2);for(let ke=0;ke<3;ke++)b.toArray(oe,(be+ke)*3)}let ve=new St;ve.setAttribute("position",new _t(K,3)),ve.setAttribute("color",new _t(oe,3)),ve.computeVertexNormals(),N.dispose();let Ce=new $e(ve,w);return Ce.receiveShadow=!0,i.add(Ce),Ce}R(-27,27,-42,Rt+2,50,400,null,.06);let P=R(-150,150,-160,Rt+260,90,200,[25,-38,Rt-2],.08);P.material=w.clone(),P.material.polygonOffset=!0,P.material.polygonOffsetFactor=1,P.material.polygonOffsetUnits=4;let S=R(-900,900,-700,1700,110,150,[146,-156,Rt+256],.1);S.material=w.clone(),S.material.polygonOffset=!0,S.material.polygonOffsetFactor=2,S.material.polygonOffsetUnits=8,S.receiveShadow=!1;{let v=[],T=Gn(99);for(let he=0;he<3;he++){let ae=new sn(.09+T()*.04,.32+T()*.22,4,1);ae.translate((T()-.5)*.18,.16,(T()-.5)*.18),ae.rotateZ((T()-.5)*.5),ae.rotateX((T()-.5)*.4),v.push(ae.toNonIndexed())}let L=new St,I=v.reduce((he,ae)=>he+ae.attributes.position.count,0),U=new Float32Array(I*3),k=new Float32Array(I*3),H=0;for(let he of v){let ae=he.attributes.position;for(let xe=0;xe<ae.count;xe++){U.set([ae.getX(xe),ae.getY(xe),ae.getZ(xe)],(H+xe)*3);let X=ae.getY(xe),K=.75+Math.min(1,X/.45)*.5;k.set([K,K,K*.95],(H+xe)*3)}H+=ae.count}L.setAttribute("position",new _t(U,3)),L.setAttribute("color",new _t(k,3)),L.computeVertexNormals();let W=14e3,N=new Ht(L,new ht({vertexColors:!0,flatShading:!0,roughness:.9}),W),J=0,se=0;for(;J<W&&se++<W*4;){let he=(t()*2-1)*34,ae=-30+t()*(Rt+30),xe=1+(t()*4|0);for(let X=0;X<xe&&J<W;X++){let K=he+(t()-.5)*2.2,oe=ae+(t()-.5)*2.2;if(Gd(K,oe)>.3+t()*.3)continue;let ne=Math.abs(K)>21?1.5:1;s.position.set(K,Fe(K,oe)-.04,oe),s.rotation.set(0,t()*6.28,0);let ve=(.8+t()*.8)*ne;s.scale.set(ve,ve*(.8+t()*.6),ve),s.updateMatrix(),N.setMatrixAt(J,s.matrix);let Ce=t()<.04;r.setHex(Ce?[16052448,15913034,15311040][t()*3|0]:[6262582,7315520,8564810,5209390][t()*4|0]),N.setColorAt(J,r),J++}}N.count=J,N.castShadow=!1,N.receiveShadow=!0,i.add(N),n.tufts=N,n.tuftsMax=J}{let v=new ea(1,0),T=new Ht(v,new ht({color:16777215,flatShading:!0,roughness:.9}),260),L=0;for(let I=0;I<260;I++){let k=(t()<.5?-1:1)*(22.5+t()*60),H=-20+t()*(Rt+200);if(Math.abs(k)<33&&Math.abs(k)>23.8)continue;let W=.3+Math.pow(t(),2)*1.6;s.position.set(k,Fe(k,H)+W*.15,H),s.rotation.set(t()*3,t()*3,t()*3),s.scale.set(W*(1+t()*.6),W*(.6+t()*.4),W),s.updateMatrix(),T.setMatrixAt(L,s.matrix),r.setHSL(.09,.08+t()*.06,.5+t()*.15),T.setColorAt(L,r),L++}T.count=L;{let I=L;n.detail.push(U=>{T.count=Math.floor(I*Math.max(.5,U))})}T.castShadow=!0,T.receiveShadow=!0,i.add(T)}{let v=new ct(.25,.4,2.4,5);v.translate(0,1.2,0);let T=(()=>{let ne=new sn(1.9,2.6,6);ne.translate(0,3,0);let ve=new sn(1.45,2.2,6);ve.translate(0,4.4,0);let Ce=new sn(.95,1.8,6);return Ce.translate(0,5.6,0),cy([ne,ve,Ce])})(),L=new Lt(2.4,0);L.translate(0,3.9,0);let I=new Lt(1.7,0);I.translate(1,5.1,.5);let U=700,k=160,H=new ht({color:5916210,roughness:.95,flatShading:!0}),W=new ht({color:16777215,roughness:.9,flatShading:!0}),N=new Ht(v,H,k),J=new Ht(v,H,U),se=new Ht(T,W,k),he=new Ht(L,W,U),ae=new Ht(I,W,U),xe=0,X=0,K=0,oe=(ne,ve)=>{for(let Ce=0;Ce<ne;Ce++){let be=t()<.5?-1:1,He,Le;if(t()<.8)Le=-100+t()*(Rt+120),He=be*((Le>-25&&Le<Rt?39:28)+Math.pow(t(),.7)*80);else if(Le=Rt+t()*260,He=(t()*2-1)*140,Math.abs(He)<46+(Le-Rt)*.35)continue;if(Le>200&&Math.abs(He)<52&&t()<.6)continue;let ke=.8+t()*.9;s.position.set(He,Fe(He,Le)-.2,Le),s.rotation.set(0,t()*6,0),s.scale.set(ke,ke*(.85+t()*.4),ke),s.updateMatrix(),ve?N.setMatrixAt(X,s.matrix):J.setMatrixAt(K,s.matrix),xe++,r.setHSL(ve?.36+t()*.04:.2+t()*.08,ve?.35+t()*.1:.42+t()*.18,ve?.2+t()*.05:.28+t()*.1),ve?(se.setMatrixAt(X,s.matrix),se.setColorAt(X,r),X++):(he.setMatrixAt(K,s.matrix),he.setColorAt(K,r),r.offsetHSL(0,0,.03),ae.setMatrixAt(K,s.matrix),ae.setColorAt(K,r),K++)}};oe(k,!0),oe(U,!1),N.count=X,J.count=K,se.count=X,he.count=K,ae.count=K;for(let ne of[N,J,se,he,ae])ne.castShadow=!0,ne.receiveShadow=!0,i.add(ne);n.detail.push(ne=>{let ve=Math.floor(X*ne),Ce=Math.floor(K*ne);N.count=se.count=ve,J.count=he.count=ae.count=Ce})}{let v=new Lt(1,0),T=new ht({color:16777215,roughness:.95,flatShading:!0}),L=[];for(let U of[-1,1])for(let k=-30;k<Rt;k+=1.1)L.push([U*(35+Math.sin(k*.05)*.6),k,1]);for(let U of[Rt+30,Rt+85,Rt+140,Rt+200])for(let k=-150;k<150;k+=1.3)Math.abs(k)>26&&L.push([k,U+Math.sin(k*.04)*3,.9]);for(let U of[-105,-60,60,105])for(let k=Rt;k<Rt+260;k+=1.3)L.push([U+Math.sin(k*.03)*3,k,.9]);for(let U=-24;U<=24;U+=1.1)L.push([U,-34,1]);let I=new Ht(v,T,L.length);L.forEach(([U,k,H],W)=>{s.position.set(U+(t()-.5)*.4,Fe(U,k)+.55*H,k),s.rotation.set(t()*3,t()*3,t()*3);let N=H*(.85+t()*.4);s.scale.set(N*1.1,N*(.9+t()*.5),N*1.1),s.updateMatrix(),I.setMatrixAt(W,s.matrix),r.setHSL(.25+t()*.04,.42,.22+t()*.06),I.setColorAt(W,r)}),I.castShadow=!0,I.receiveShadow=!0,i.add(I)}{let v=new Ye(.13,1.3,.13);v.translate(0,.65,0);let T=new Ye(.06,.12,1),L=new ht({color:9398853,roughness:.95,flatShading:!0}),I=[];for(let N=-14;N<=on;N+=2.4)I.push(N);let U=new Ht(v,L,I.length*2),k=new Ht(T,L,I.length*6),H=0,W=0;for(let N of[-1,1]){let J=N*Mh;for(let se=0;se<I.length;se++){let he=I[se];if(s.position.set(J,Fe(J,he)-.1,he),s.rotation.set((t()-.5)*.08,0,(t()-.5)*.08),s.scale.set(1,1,1),s.updateMatrix(),U.setMatrixAt(H++,s.matrix),se<I.length-1){let ae=I[se+1];for(let xe of[.35,.75,1.15]){let X=new C(J,Fe(J,he)-.1+xe,he),K=new C(J,Fe(J,ae)-.1+xe,ae);s.position.copy(X).add(K).multiplyScalar(.5),s.rotation.set(0,0,0),s.lookAt(K),s.scale.set(1,1,X.distanceTo(K)),s.updateMatrix(),k.setMatrixAt(W++,s.matrix)}}}}U.count=H,k.count=W;for(let N of[U,k])N.castShadow=!0,N.receiveShadow=!0,i.add(N)}{let T=new ct(.2,.27,1,6);T.translate(0,.62,0);let L=new Lt(.18,0);L.translate(0,1.32,0);let I=new sn(.75,.35,6);I.translate(0,2.05,0);let U=new Ht(T,new ht({roughness:.75,flatShading:!0}),900),k=new Ht(L,new ht({roughness:.7,flatShading:!0}),900),H=new Ht(I,new ht({roughness:.5,flatShading:!0}),900),W=[],N=[2045264,3099178,10697515,14266416,5988198,8007493,3829647,9071173,2236962,14737632,2846298,13064986],J=[15843965,14724201,13010498,9262372,16767916],se=0;for(let ae=0;ae<900;ae++){let xe=t()<.5?-1:1,X=-12+t()*(on+4),K=xe*(24.4+Math.pow(t(),1.5)*9.5),oe={x:K,z:X,y:Fe(K,X),ph:t()*6.28,sp:4+t()*6,jump:t()<.3,rot:(xe>0?-Math.PI/2:Math.PI/2)+(t()-.5)*.8,sc:.85+t()*.3,umb:-1};t()<.07&&(oe.umb=se,r.setHex([2045264,10697515,2236962,14266416,3099178][se%5]),H.setColorAt(se,r),se++,oe.jump=!1),W.push(oe),r.setHex(N[t()*N.length|0]),U.setColorAt(ae,r),r.setHex(J[t()*J.length|0]),k.setColorAt(ae,r)}H.count=se;let he=[];{let ae=0;for(let xe=0;xe<=900;xe++)he.push(ae),xe<900&&W[xe].umb>=0&&ae++}n.detail.push(ae=>{let xe=Math.floor(900*ae);U.count=k.count=xe,H.count=he[xe]});for(let ae of[U,k,H])ae.castShadow=!0,ae.receiveShadow=!0,ae.instanceMatrix.setUsage(Zs),i.add(ae);n.updateCrowd=(ae,xe,X)=>{for(let K=0;K<900;K++){let oe=W[K],ne=Math.abs(oe.z-xe)<60;if(!ne&&!n._crowdInit)continue;let ve=(oe.jump||ne&&X)&&oe.umb<0?Math.max(0,Math.sin(ae*oe.sp+oe.ph))*(ne&&X?.3:.12):0;s.position.set(oe.x,oe.y+ve,oe.z),s.rotation.set(0,oe.rot+Math.sin(ae*1.3+oe.ph)*.25,Math.sin(ae*oe.sp*.5+oe.ph)*.06),s.scale.setScalar(oe.sc),s.updateMatrix(),U.setMatrixAt(K,s.matrix),k.setMatrixAt(K,s.matrix),oe.umb>=0&&H.setMatrixAt(oe.umb,s.matrix)}U.instanceMatrix.needsUpdate=!0,k.instanceMatrix.needsUpdate=!0,H.instanceMatrix.needsUpdate=!0},n._crowdInit=!0,n.updateCrowd(0,0,!1),n._crowdInit=!1}{let v=new ct(.05,.05,4.5,6);v.translate(0,2.25,0);let T=new Ii(1.1,.7);T.translate(.55,4.05,0);let L=new ht({color:13421772,metalness:.3,roughness:.5});n.flags=[];for(let[I,U,k]of[[-23,2,14266416],[23,2,14266416],[-23,120,10697515],[23,230,10697515],[-23,330,2045264]]){let H=new $e(v,L);H.position.set(I,Fe(I,U)-.1,U),H.castShadow=!0,i.add(H);let W=new $e(T,new ht({color:k,side:jt,roughness:.85}));W.position.copy(H.position),W.castShadow=!0,i.add(W),n.flags.push(W)}}{let v=Fe(0,Mn),T=zr(256,32,W=>{for(let N=0;N<32;N++)for(let J=0;J<4;J++)W.fillStyle=(N+J)%2?"#1a1a1a":"#eeeeee",W.fillRect(N*8,J*8,8,8)}),L=new $e(new Ii(44,1.4,44,1),new ht({map:T,roughness:.9,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}));L.rotation.x=-Math.PI/2,L.position.set(0,v+.04,Mn),L.receiveShadow=!0,i.add(L);let I=new ht({color:9071173,roughness:.9});for(let W of[-1,1]){let N=new $e(new ct(.18,.2,5.5,8),I);N.position.set(W*22,v+2.75,Mn),N.castShadow=!0,i.add(N)}let U=zr(1024,64,(W,N,J)=>{W.fillStyle="#f2ead6",W.fillRect(0,0,N,J),W.fillStyle="#9b2a1e",W.fillRect(0,0,N,6),W.fillRect(0,J-6,N,6),W.font="bold 40px Georgia, serif",W.fillStyle="#9b2a1e",W.textAlign="center",W.textBaseline="middle",W.fillText("FINISH  \xB7  FINISH  \xB7  FINISH  \xB7  FINISH",N/2,J/2+2)}),k=new ht({map:U,roughness:.9}),H=new $e(new Ye(44,1.2,.08),[I,I,I,I,k,k]);H.position.set(0,v+4.9,Mn),H.castShadow=!0,i.add(H)}{let v=new Ye(1.25,.6,.65),T=zr(64,64,U=>{U.fillStyle="#c9a957",U.fillRect(0,0,64,64);for(let k=0;k<300;k++){U.strokeStyle=Math.random()<.5?"#a8873c":"#e2c97e",U.beginPath();let H=Math.random()*64,W=Math.random()*64;U.moveTo(H,W),U.lineTo(H+Math.random()*10-5,W+Math.random()*3),U.stroke()}}),L=new Ht(v,new ht({map:T,roughness:1}),200),I=0;for(let U=0;U<3;U++)for(let k=-22;k<=22;k+=1.3){let H=on+.35;s.position.set(k+U%2*.6,Fe(k,H)+.3+U*.6,H),s.rotation.set(0,(t()-.5)*.1,0),s.scale.set(1,1,1),s.updateMatrix(),L.setMatrixAt(I++,s.matrix)}L.count=I,L.castShadow=!0,L.receiveShadow=!0,i.add(L)}{let v=new $e(new ct(.035,.035,44,6),new ht({color:14208942}));v.rotation.z=Math.PI/2,v.position.set(0,Fe(0,Ni+1.4)+.05,Ni+1.4),i.add(v)}return n.update=v=>{o.material.uniforms.time.value=v;for(let T=0;T<n.flags.length;T++)n.flags[T].rotation.y=Math.sin(v*2+T)*.3},n}var xt={PELVIS:0,CHEST:1,HEAD:2,SHL:3,SHR:4,ELL:5,ELR:6,HDL:7,HDR:8,HIPL:9,HIPR:10,KNL:11,KNR:12,FTL:13,FTR:14},$t=15,fy=[.15,.16,.17,.08,.08,.06,.06,.06,.06,.09,.09,.07,.07,.06,.06],qd=[.35,.4,.8,.7,.7,1.3,1.3,1.7,1.7,.55,.55,1,1,1.4,1.4],Dn=[[0,1],[1,2],[3,4],[1,3],[1,4],[0,3],[0,4],[9,10],[0,9],[0,10],[9,1],[10,1],[3,9],[4,10],[3,10],[4,9],[2,3],[2,4],[2,0],[3,5],[5,7],[4,6],[6,8],[9,11],[11,13],[10,12],[12,14]],py=[[3,7,.3],[4,8,.3],[9,13,.58],[10,14,.58],[7,2,.22],[8,2,.22],[13,0,.45],[14,0,.45],[13,2,.6],[14,2,.6],[11,12,.14],[13,14,.12],[5,0,.3],[6,0,.3],[11,1,.45],[12,1,.45]],my=-16,wa=class{constructor(){this.p=new Float64Array($t*3),this.o=new Float64Array($t*3),this.len=new Float64Array(Dn.length),this.active=!1,this.acc=0,this.impact=0,this.seed=Math.random()*1e3}init(e,t,n,s=1/120){let r=0,o=0,a=0;for(let c of e)r+=c[0]/$t,o+=c[1]/$t,a+=c[2]/$t;for(let c=0;c<$t;c++){let[h,u,d]=e[c],f=h-r,g=u-o,x=d-a,m=t[0]+n[1]*x-n[2]*g,p=t[1]+n[2]*f-n[0]*x,_=t[2]+n[0]*g-n[1]*f;this.p[c*3]=h,this.p[c*3+1]=u,this.p[c*3+2]=d,this.o[c*3]=h-m*s,this.o[c*3+1]=u-p*s,this.o[c*3+2]=d-_*s}for(let c=0;c<Dn.length;c++){let[h,u]=Dn[c];this.len[c]=Math.hypot(this.p[h*3]-this.p[u*3],this.p[h*3+1]-this.p[u*3+1],this.p[h*3+2]-this.p[u*3+2])}let l=new Float64Array($t).fill(1e9);l[0]=0;for(let c=0;c<$t;c++)for(let h=0;h<Dn.length;h++){let[u,d]=Dn[h];l[u]+this.len[h]<l[d]&&(l[d]=l[u]+this.len[h]),l[d]+this.len[h]<l[u]&&(l[u]=l[d]+this.len[h])}this.maxR=l.map(c=>c*1.03+.02),this.active=!0,this.acc=0,this.t=0}addVelocity(e,t=[0,0,0],n=1/120){let s=this.center();for(let r=0;r<$t;r++){let o=r*3,a=this.p[o]-s[0],l=this.p[o+1]-s[1],c=this.p[o+2]-s[2],h=e[0]+t[1]*c-t[2]*l,u=e[1]+t[2]*a-t[0]*c,d=e[2]+t[0]*l-t[1]*a;this.o[o]-=h*n,this.o[o+1]-=u*n,this.o[o+2]-=d*n}}get(e){return[this.p[e*3],this.p[e*3+1],this.p[e*3+2]]}center(){let e=this.p;return[(e[0]+e[3])/2,(e[1]+e[4])/2,(e[2]+e[5])/2]}update(e,t,n=1){this.acc=Math.min(this.acc+Math.max(0,e),.135);let s=1/120,r=0;for(this.impact=0;this.acc>=s&&r<16;)this.step(s,t,n),this.acc-=s,r++;if(this.harden(),!Number.isFinite(this.p[0]+this.p[1]+this.p[2])&&t)for(let o=0;o<$t*3;o++)this.p[o]=t[o%3],this.o[o]=this.p[o]}harden(){for(let n=0;n<2;n++)for(let s=0;s<Dn.length;s++){let[r,o]=Dn[s],a=r*3,l=o*3,c=this.p,h=Math.hypot(c[l]-c[a],c[l+1]-c[a+1],c[l+2]-c[a+2]);Math.abs(h-this.len[s])>this.len[s]*.04&&this.solve(r,o,this.len[s],0)}let e=this.p,t=this.o;for(let n=1;n<$t;n++){let s=n*3,r=e[s]-e[0],o=e[s+1]-e[1],a=e[s+2]-e[2],l=Math.hypot(r,o,a),c=this.maxR[n];if(l>c){let h=c/l,u=e[0]+r*h,d=e[1]+o*h,f=e[2]+a*h;t[s]+=u-e[s],t[s+1]+=d-e[s+1],t[s+2]+=f-e[s+2],e[s]=u,e[s+1]=d,e[s+2]=f}}}step(e,t,n){let s=this.p,r=this.o;this.t+=e;for(let o=0;o<$t;o++){let a=o*3,l=(s[a]-r[a])*.998,c=(s[a+1]-r[a+1])*.998,h=(s[a+2]-r[a+2])*.998;r[a]=s[a],r[a+1]=s[a+1],r[a+2]=s[a+2],s[a]+=l,s[a+1]+=c+my*e*e,s[a+2]+=h}if(n>0){let o=this.t*9+this.seed;for(let a of[7,8,13,14]){let l=a*3,c=n*4e-4;s[l]+=Math.sin(o+a)*c,s[l+1]+=Math.cos(o*1.3+a)*c,s[l+2]+=Math.sin(o*.7+a*2)*c}}if(t){let o=this.center(),a=t[0]-o[0],l=t[1]-o[1],c=t[2]-o[2];if(Math.hypot(a,l,c)>4)for(let u=0;u<$t;u++)s[u*3]+=a,s[u*3+1]+=l,s[u*3+2]+=c,r[u*3]+=a,r[u*3+1]+=l,r[u*3+2]+=c;else{let f=l>0?l:l*.3;for(let g=0;g<$t;g++)s[g*3]+=a*.06,s[g*3+1]+=f*.06,s[g*3+2]+=c*.06,r[g*3]+=a*.045,r[g*3+1]+=f*.045,r[g*3+2]+=c*.045}}for(let o=0;o<10;o++){for(let a=0;a<Dn.length;a++){let[l,c]=Dn[a];this.solve(l,c,this.len[a],0)}for(let[a,l,c]of py)this.solve(a,l,c,1);for(let a=0;a<$t;a++){let l=a*3,c=Fe(s[l],s[l+2])+fy[a];if(s[l+1]<c){let h=s[l+1]-r[l+1];o===0&&-h/e>this.impact&&(this.impact=-h/e),s[l+1]=c,o===0&&(r[l]=s[l]-(s[l]-r[l])*.93,r[l+2]=s[l+2]-(s[l+2]-r[l+2])*.93,h<0&&(r[l+1]=s[l+1]+h*.25))}}}}solve(e,t,n,s){let r=this.p,o=e*3,a=t*3,l=r[a]-r[o],c=r[a+1]-r[o+1],h=r[a+2]-r[o+2],u=Math.hypot(l,c,h)||1e-6;if(s&&u>=n)return;let d=qd[e],f=qd[t],g=(u-n)/(u*(d+f));r[o]+=l*g*d,r[o+1]+=c*g*d,r[o+2]+=h*g*d,r[a]-=l*g*f,r[a+1]-=c*g*f,r[a+2]-=h*g*f}maxStickError(){let e=0;for(let t=0;t<Dn.length;t++){let[n,s]=Dn[t],r=Math.hypot(this.p[n*3]-this.p[s*3],this.p[n*3+1]-this.p[s*3+1],this.p[n*3+2]-this.p[s*3+2]);e=Math.max(e,Math.abs(r-this.len[t])/this.len[t])}return e}};var Ph=new Map;function De(i,e){let t=i+(e?JSON.stringify(e):"");return Ph.has(t)||Ph.set(t,new ht({color:i,roughness:.72,metalness:0,flatShading:!0,...e||{}})),Ph.get(t)}function pe(i,e,t,n=0,s=0,r=0){let o=new $e(e,t);return o.position.set(n,s,r),o.castShadow=!0,o.receiveShadow=!0,i.add(o),o}function gy(i,e){let t=De(e.hatColor??3355443);switch(e.hat){case"flatcap":pe(i,new ct(.19,.19,.08,7),t,0,.13,-.01),pe(i,new Ye(.26,.03,.14),t,0,.11,.15).rotation.x=.15;break;case"headband":{let n=pe(i,new Di(.17,.03,4,8),t,0,.06,0);n.rotation.x=Math.PI/2;break}case"sweatband":{let n=pe(i,new Di(.172,.035,4,8),t,0,.07,0);n.rotation.x=Math.PI/2;break}case"chef":pe(i,new ct(.17,.15,.26,7),t,0,.22,0),pe(i,new Lt(.22,0),t,0,.42,0).scale.set(1,.7,1);break;case"knight":{pe(i,new ct(.2,.21,.36,8),De(e.hatColor,{metalness:.6,roughness:.35}),0,.03,0),pe(i,new Ye(.3,.035,.05),De(1118481),0,.04,.19),pe(i,new Ye(.03,.12,.05),De(1118481),0,-.05,.19);let n=pe(i,new sn(.07,.42,5),De(14034984),0,.35,-.08);n.rotation.x=-.6;break}case"cowhood":{pe(i,new Lt(.205,0),De(16053492),0,.03,-.03).scale.set(1,1,1.05),pe(i,new Ye(.2,.14,.04),De(15843965),0,-.01,.165);for(let n of[-1,1]){let s=pe(i,new sn(.04,.16,5),De(16116944),n*.12,.22,0);s.rotation.z=-n*.5;let r=pe(i,new Ye(.14,.05,.07),De(1710618),n*.23,.08,0);r.rotation.z=n*.5}pe(i,new Ye(.16,.08,.06),De(15902133),0,-.1,.2);break}}}function xy(i,e){let t=De(e.hair);switch(e.hairStyle){case"short":pe(i,new ci(.182,7,4,0,Math.PI*2,0,Math.PI*.45),t,0,.012,-.02).rotation.x=-.35;break;case"quiff":pe(i,new ci(.182,7,4,0,Math.PI*2,0,Math.PI*.42),t,0,.01,-.02).rotation.x=-.3,pe(i,new Lt(.09,0),t,0,.17,.09).scale.set(1.4,.8,1);break;case"bun":pe(i,new ci(.185,7,4,0,Math.PI*2,0,Math.PI*.5),t,0,.01,-.02).rotation.x=-.25,pe(i,new Lt(.1,0),t,0,.17,-.12);break;case"ponytail":pe(i,new ci(.182,7,4,0,Math.PI*2,0,Math.PI*.45),t,0,.012,-.02).rotation.x=-.35;{let n=pe(i,new sn(.07,.34,5),t,0,-.02,-.24);n.rotation.x=-2.6}break;case"bald":for(let n of[-1,1])pe(i,new Ye(.05,.08,.16),t,n*.165,-0,-.04);break;case"mohawk":for(let n=0;n<5;n++){let s=pe(i,new sn(.045,.26-Math.abs(n-1.5)*.03,4),De(n%2?16723872:e.hair),0,.2,.12-n*.07);s.rotation.x=-.3-n*.15}break}}function Lh(i){let e=Tt[(i%Tt.length+Tt.length)%Tt.length],t=new Set(e.extras||[]),n=e.w||1,s=e.h||1,r=new Ct,o=new Ct;o.scale.setScalar(s),r.add(o);let a=new Ct;a.position.y=.95,o.add(a);let l=e.metal?{metalness:.55,roughness:.4}:void 0,c=De(e.skin),h=De(e.shirt,l),u=De(e.shorts,l),d=De(e.shoes??2236962,l),f=De(e.sleeve??e.shirt,l),g=De(e.arms??e.skin,l),x=De(e.legs??e.skin,l),m=new Ct;if(m.scale.set(n,1,.75+n*.25),a.add(m),pe(m,new ct(.2,.18,.24,6),u,0,.02,0),pe(m,new ct(.22,.18,.56,6),h,0,.38,0),e.hoops)for(let w of[.24,.4,.56])pe(m,new ct(.218+(w-.38)*.07,.212+(w-.38)*.07,.07,6),De(e.hoops),0,w,0);if(e.stripe)for(let w of[-1,1])pe(m,new Ye(.05,.56,.42),De(e.stripe),w*.17,.38,0);if(e.check)for(let w of[.2,.36,.52])pe(m,new ct(.222,.215,.035,6),De(e.check),0,w,0);if(t.has("belly")&&pe(m,new Lt(.2,0),h,0,.24,.1).scale.set(1,.95,.9),t.has("overalls")){pe(m,new Ye(.28,.3,.06),u,0,.3,.16);for(let w of[-1,1])pe(m,new Ye(.04,.3,.42),u,w*.1,.48,0)}if(t.has("apron")&&(pe(m,new Ye(.34,.75,.03),De(16777215),0,.05,.2).rotation.x=-.06,pe(m,new Ye(.36,.04,.44),De(16777215),0,.28,0)),t.has("buttons"))for(let w of[.22,.34,.46,.58])pe(m,new Ye(.035,.035,.02),De(e.name.startsWith("Chef")?3355443:16119260),0,w,t.has("belly")?.27:.205);if(t.has("tabard")&&(pe(m,new Ye(.3,.8,.03),De(e.tabard),0,.22,.2),pe(m,new Ye(.3,.8,.03),De(e.tabard),0,.22,-.2),pe(m,new Ye(.06,.32,.035),De(16765773),0,.38,.215),pe(m,new Ye(.22,.06,.035),De(16765773),0,.42,.215)),t.has("emblem")){let w=pe(m,new ct(.1,.1,.03,3),De(16765773),0,.42,.2);w.rotation.x=Math.PI/2,w.rotation.y=Math.PI}if(t.has("belt")&&pe(m,new ct(.205,.2,.06,6),De(16765773),0,.13,0),t.has("shoulders"))for(let w of[-1,1])pe(m,new Lt(.12,0),h,w*.22,.6,0);if(t.has("skirt")&&(pe(m,new ct(.2,.3,.46,7,1,!0),u,0,-.18,0).material=De(e.shorts,{side:jt})),t.has("robe")&&pe(m,new ct(.2,.32,.75,7,1,!0),De(e.shirt,{side:jt}),0,-.33,0),t.has("collar")){let w=pe(m,new ct(.1,.1,.05,7),De(16777215),0,.68,0)}if(t.has("cross")&&(pe(m,new Ye(.03,.12,.02),De(13938487,{metalness:.8,roughness:.3}),0,.4,.2),pe(m,new Ye(.08,.03,.02),De(13938487,{metalness:.8,roughness:.3}),0,.42,.2)),t.has("pearls")){let w=pe(m,new Di(.12,.022,4,10),De(16644332),0,.62,.04);w.rotation.x=Math.PI/2-.4}if(t.has("studs"))for(let w=0;w<8;w++){let R=-.9+w*.26;pe(m,new ta(.025,0),De(14540253,{metalness:.9,roughness:.2}),Math.sin(R)*.2,.6,Math.cos(R)*.2*(w%2?1:-1))}if(t.has("chain")){let w=pe(m,new Di(.12,.012,3,10,Math.PI),De(13421772,{metalness:.9,roughness:.3}),.1,.02,.17);w.rotation.z=Math.PI}if(t.has("udder")&&pe(m,new Lt(.07,0),De(15902133),0,.08,.19),t.has("spots"))for(let[w,R,P]of[[.12,.45,.17],[-.1,.3,-.18],[.15,.22,-.12],[-.14,.5,.12]])pe(m,new Lt(.08,0),De(1118481),w,R,P).scale.set(1,1,.35);let p=new Mt;p.position.y=.6,a.add(p);let _=new Ct;_.position.y=.68,a.add(_);let b=new Ct;if(b.position.y=.15,_.add(b),pe(b,new Lt(.17,1),c),xy(b,e),e.hat!=="knight"){for(let w of[-1,1])pe(b,new Ye(.035,.05,.02),De(1118481),w*.06,0,.16);pe(b,new sn(.03,.06,4),c,0,-.02,.18).rotation.x=Math.PI/2}if(t.has("glasses"))for(let w of[-1,1])pe(b,new Di(.04,.009,3,8),De(2236962),w*.065,0,.17);t.has("sunglasses")&&pe(b,new Ye(.24,.05,.03),De(1118481,{metalness:.5,roughness:.2}),0,.01,.165),t.has("mask")&&pe(b,new Ye(.3,.06,.2),De(1118481),0,.01,.07),t.has("mustache")&&pe(b,new Ye(.14,.03,.03),De(1710618),0,-.065,.165),t.has("straw")&&pe(b,new ct(.006,.006,.18,3),De(15258234),.06,-.09,.22).rotation.set(1.3,0,.6),gy(b,e);let y=null;e.cape&&(y=new Ct,y.position.set(0,.62,-.17*(.75+n*.25)),a.add(y),pe(y,new Ye(.46*n,.78,.02),De(e.cape),0,-.39,0));let D={};for(let w of[-1,1]){let R=w<0?"R":"L",P=new Ct;P.position.set(w*(.07+.2*n),.6,0),a.add(P),pe(P,new ts(.06*(.6+.4*n),.24,1,5),f,0,-.15,0);let S=new Ct;S.position.y=-.32,P.add(S),pe(S,new ts(.052,.22,1,5),g,0,-.13,0),pe(S,new Lt(.062,0),e.metal?De(7041144,l):t.has("spots")?De(1710618):c,0,-.29,0),t.has("handbag")&&w>0&&pe(S,new Ye(.16,.13,.07),De(7023674),0,-.36,.06);let v=new Mt;v.position.y=-.3,S.add(v),D["hd"+R]=v;let T=new Ct;T.position.set(w*.11*(.7+.3*n),-.04,0),a.add(T),pe(T,new ts(.08*(.75+.25*n),.28,1,5),u,0,-.2,0),t.has("rips")&&pe(T,new Ye(.07,.05,.02),c,0,-.32,.08);let L=new Ct;L.position.y=-.44,T.add(L),pe(L,new ts(.066,.28,1,5),x,0,-.2,0),t.has("socks")&&pe(L,new ct(.072,.07,.06,6),De(16053492),0,-.22,0),e.boots&&pe(L,new ct(.085,.08,.3,6),De(e.boots,l),0,-.3,0),pe(L,new Ye(.13,.09,.27),d,0,-.43,.05);let I=new Mt;I.position.set(0,-.44,.03),L.add(I),D["ft"+R]=I,D["sh"+R]=P,D["el"+R]=S,D["hip"+R]=T,D["kn"+R]=L}return{root:r,scaler:o,H:s,body:a,neck:_,head:b,cape:y,limbs:D,ch:e,chest:p}}var e_=new zt,t_=new Yt,ln=(i,e,t)=>i+(e-i)*t;function Yd(i){return Math.atan2(Math.sin(i),Math.cos(i))}var Ih=new C,Hr=new C,os=new C,tr=new C,Zd=new C,Kd=new lt,Jd=new zt,jd=new zt,Qd=new zt,Oi=new C(0,-1,0),vy=new C(0,1,0),yy=[["shL","body",xt.SHL,xt.ELL,Oi],["elL","shL",xt.ELL,xt.HDL,Oi],["shR","body",xt.SHR,xt.ELR,Oi],["elR","shR",xt.ELR,xt.HDR,Oi],["hipL","body",xt.HIPL,xt.KNL,Oi],["knL","hipL",xt.KNL,xt.FTL,Oi],["hipR","body",xt.HIPR,xt.KNR,Oi],["knR","hipR",xt.KNR,xt.FTR,Oi]],cn=new C,Ta=new C,kr=class{constructor(e,t,n,s){if(this.rd=new wa,this.blend=null,this.info=t,this.m=Lh(t.char),this.root=this.m.root,e.add(this.root),this.phase=Math.random()*6,this.prevState=-1,this.lastPitch=0,this.lastRoll=0,this.yaw=0,this.t=0,this.stepAcc=0,n){let r=Wd(n,s||"#fff",null,256,64,"bold 34px sans-serif"),o=new Li(new li({map:r,depthTest:!1,transparent:!0}));o.scale.set(1.6,.4,1),o.position.y=2.35,o.renderOrder=10,this.root.add(o),this.label=o}}groups(){let e=this.m.limbs;return{body:this.m.body,neck:this.m.neck,shL:e.shL,elL:e.elL,shR:e.shR,elR:e.elR,hipL:e.hipL,knL:e.knL,hipR:e.hipR,knR:e.knR}}startRagdoll(e,t){let n=this.m,s=n.limbs;this.root.updateMatrixWorld(!0);let r=g=>g.getWorldPosition(new C).toArray(),o=[r(n.body),r(n.chest),r(n.head),r(s.shL),r(s.shR),r(s.elL),r(s.elR),r(s.hdL),r(s.hdR),r(s.hipL),r(s.hipR),r(s.knL),r(s.knR),r(s.ftL),r(s.ftR)],a=Math.hypot(e.vx,e.vz),l=a>.5?e.vx/a:Math.sin(e.yaw),c=a>.5?e.vz/a:Math.cos(e.yaw),h=t==="dive"?3.2:2.5+a*.45,u=c*h+(Math.random()-.5)*2,d=(Math.random()-.5)*3,f=-l*h+(Math.random()-.5)*2;this.rd.init(o,[e.vx,(e.vy||0)+(t==="dive"?2.5:1.5),e.vz],[u,d,f]),this.blend=null}poseFromRagdoll(){let e=this.rd,t=this.m,n=this.groups(),s=l=>Ih.set(e.p[l*3],e.p[l*3+1],e.p[l*3+2]),r=s(xt.PELVIS).clone();if(this.root.position.set(r.x,r.y-.95*t.H,r.z),this.root.quaternion.identity(),t.body.position.set(0,.95,0),tr.copy(s(xt.CHEST)).sub(r).normalize(),os.copy(s(xt.SHL)).sub(Hr.copy(s(xt.SHR))).add(Hr.copy(s(xt.HIPL)).sub(s(xt.HIPR))),os.addScaledVector(tr,-os.dot(tr)),!(os.lengthSq()>1e-6)||!Number.isFinite(tr.x))return;os.normalize(),Zd.crossVectors(os,tr),Kd.makeBasis(os,tr,Zd),t.body.quaternion.setFromRotationMatrix(Kd);let o={body:t.body.quaternion.clone()},a=(l,c,h,u,d)=>(Hr.set(e.p[u*3]-e.p[h*3],e.p[u*3+1]-e.p[h*3+1],e.p[u*3+2]-e.p[h*3+2]).normalize(),Qd.copy(c).invert(),Hr.applyQuaternion(Qd),l.quaternion.setFromUnitVectors(d,Hr),c.clone().multiply(l.quaternion));a(n.neck,o.body,xt.CHEST,xt.HEAD,vy);for(let[l,c,h,u,d]of yy)o[l]=a(n[l],o[c],h,u,d)}endRagdoll(){let e=this.groups();this.blend={t:0,rootPos:this.root.position.clone(),rootQ:this.root.quaternion.clone(),bodyPos:this.m.body.position.clone(),q:{}};for(let t in e)this.blend.q[t]=e[t].quaternion.clone(),e[t].quaternion.identity();this.rd.active=!1}apply(e,t,n){this._apply(e,t,n),this.label&&(this.root.updateMatrixWorld(!0),this.m.head.getWorldPosition(cn),this.m.body.getWorldPosition(Ta),cn.y=Math.max(cn.y,Ta.y+.25*this.m.H),this.root.worldToLocal(cn),this.label.position.set(cn.x,cn.y+.32+.18*this.m.H,cn.z)),this.tag&&this.tag.visible&&(this.root.updateMatrixWorld(!0),this.m.head.getWorldPosition(cn),this.m.body.getWorldPosition(Ta),cn.y=Math.max(cn.y,Ta.y+.25*this.m.H),this.root.worldToLocal(cn),this.tag.position.set(cn.x,cn.y+.3+.18*this.m.H,cn.z))}setFade(e){if(e=Math.max(.15,Math.min(1,e)),!this.fadeMats){if(e>=.99)return;this.fadeMats=[];let t=new Map;this.m.root.traverse(n=>{if(!n.isMesh)return;let s=r=>{if(!t.has(r)){let o=r.clone();o.transparent=!0,t.set(r,o),this.fadeMats.push(o)}return t.get(r)};n.material=Array.isArray(n.material)?n.material.map(s):s(n.material)})}if(!(this.fadeA!==void 0&&Math.abs(this.fadeA-e)<.01)){this.fadeA=e;for(let t of this.fadeMats)t.opacity=e,t.depthWrite=e>.95}}setTag(e,t){if(!e){this.tag&&(this.tag.visible=!1);return}if(this.tag||(this.tag=new Li(new li({depthTest:!1,transparent:!0,fog:!1,sizeAttenuation:!1,toneMapped:!1})),this.tag.center.set(.5,0),this.tag.renderOrder=10,this.tag.scale.set(.22,.055,1),this.root.add(this.tag),this.tagTex={}),this.tagRank!==e){if(this.tagRank=e,!this.tagTex[e]){let n=document.createElement("canvas");n.width=256,n.height=64;let s=n.getContext("2d"),r=["#ffd34d","#dfe6ee","#e0975a"][e-1];s.font="bold 30px sans-serif";let o=Math.min(250,s.measureText(t).width+62);s.fillStyle="rgba(20,14,6,0.55)",s.beginPath(),s.roundRect((256-o)/2,10,o,44,22),s.fill(),s.fillStyle=r,s.beginPath(),s.arc((256-o)/2+24,32,13,0,Math.PI*2),s.fill(),s.fillStyle="#1b1408",s.font="bold 18px sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText(String(e),(256-o)/2+24,33),s.fillStyle=r,s.font="bold 30px sans-serif",s.textAlign="left",s.fillText(t,(256-o)/2+44,33);let a=new Pn(n);a.colorSpace=Et,this.tagTex[e]=a}this.tag.material.map=this.tagTex[e],this.tag.material.needsUpdate=!0}this.tag.visible=!0}_apply(e,t,n){let s=this.m,r=s.limbs,o=s.body;if(this.t+=t,e.state===ie.DIVE||e.state===ie.TUMBLE){this.rd.active||this.startRagdoll(e,e.state===ie.DIVE?"dive":"tumble");let m=[e.x,e.y+(e.state===ie.DIVE?.55:.3),e.z];if(this.rd.update(t,m,e.state===ie.TUMBLE?1:.4),this.poseFromRagdoll(),this.kickCd=(this.kickCd||0)-t,n&&this.rd.impact>3.5&&this.kickCd<=0){this.kickCd=.12;let p=this.rd.center();n.kick(p[0],p[1]-.25,p[2],e.vx,e.vz,Math.min(10,this.rd.impact))}s.cape&&(s.cape.rotation.x=-1.2+Math.sin(this.t*20)*.3),this.prevState=e.state;return}this.rd.active&&(this.endRagdoll(),this.prevState=ie.GETUP);let a=1-Math.exp(-14*t);this.root.position.set(e.x,e.y,e.z),this.root.rotation.set(0,e.yaw,0);let l=Math.hypot(e.vx,e.vz),c=e.state;c!==this.prevState&&(this.prevState===ie.TUMBLE?(this.lastPitch=Yd(o.rotation.x),this.lastRoll=Yd(o.rotation.z)):this.prevState===ie.DIVE&&(this.lastPitch=o.rotation.x,this.lastRoll=0),this.prevState=c);let h={shL:0,shR:0,elL:0,elR:0,hipL:0,hipR:0,knL:0,knR:0,shZL:0,shZR:0},u=.95,d=0,f=0,g=!1;switch(c){case ie.IDLE:{let m=Math.sin(this.t*2.5)*.03;d=.25,u=.85+m,h.hipL=-.6,h.knL=.9,h.hipR=.35,h.knR=.5,h.shL=.5,h.shR=-.6,h.elL=-.5,h.elR=-.9;break}case ie.RUN:{let m=Math.min(1,.3+l/8),p=(1+Math.min(1.1,l*.07))*(s.H||1);this.phase+=t*Math.max(4,Math.PI*l/p);let _=this.phase;h.hipL=-Math.sin(_)*.95*m,h.hipR=Math.sin(_)*.95*m,h.knL=.25+Math.max(0,Math.sin(_+1.4))*1.35*m,h.knR=.25+Math.max(0,Math.sin(_+1.4+Math.PI))*1.35*m,h.shL=Math.sin(_)*.9*m,h.shR=-Math.sin(_)*.9*m,h.elL=-.9-.3*m,h.elR=-.9-.3*m,h.shZL=.15,h.shZR=-.15,d=.08+Math.min(.25,l*.015)-(e.meter||0)*.35,f=Math.sin(this.t*13)*(e.meter||0)*.25,e.meter>.5&&(h.shZL=1.2+Math.sin(this.t*17)*.5,h.shZR=-1.2-Math.sin(this.t*15)*.5),u=.95+Math.abs(Math.sin(_))*.07*m-.05*m,e.flags&4&&(f+=Math.sin(this.t*20)*.2),n&&l>4&&e.grounded&&(this.stepAcc+=t*Math.max(4,Math.PI*l/((1+Math.min(1.1,l*.07))*(s.H||1)))/Math.PI,this.stepAcc>1&&(this.stepAcc=0,n.kick(e.x,e.y,e.z,e.vx,e.vz,l*.35)));break}case ie.DIVE:d=1.35,u=.42,h.shL=h.shR=-2.9,h.elL=h.elR=0,h.hipL=.25,h.hipR=.15,h.knL=.3,h.knR=.5,n&&e.grounded&&l>2&&Math.random()<.5&&n.kick(e.x,e.y,e.z,e.vx,e.vz,3);break;case ie.TUMBLE:{g=!0,d=e.pitch,f=e.roll,u=.5;let m=this.t;h.shL=Math.sin(m*11)*2,h.shR=Math.sin(m*9+1)*2,h.shZL=1+Math.sin(m*7)*.8,h.shZR=-1-Math.sin(m*8)*.8,h.hipL=Math.sin(m*10+2)*1.2,h.hipR=Math.sin(m*12)*1.2,h.knL=.6+Math.sin(m*9)*.6,h.knR=.6+Math.cos(m*11)*.6,h.elL=-.5,h.elR=-.8,n&&Math.random()<.6&&e.grounded!==!1&&n.kick(e.x,e.y,e.z,e.vx,e.vz,4+l*.4);break}case ie.GETUP:{let m=Math.min(1,(e.st||0)/.45);d=.5*(1-m)+.1,u=.7+.25*m,h.hipL=-1.1*(1-m),h.knL=1.5*(1-m)+.2,h.hipR=-.4*(1-m),h.knR=.8*(1-m)+.2,h.shL=.5*(1-m),h.shR=.5*(1-m),h.elL=h.elR=-.6,h.shZL=.3,h.shZR=-.3;break}case ie.CELEBRATE:{let m=Math.abs(Math.sin(this.t*6));u=.95+m*.25,d=-.1,h.shL=-2.9,h.shR=-2.9,h.shZL=-.35+Math.sin(this.t*8)*.2,h.shZR=.35-Math.sin(this.t*8)*.2,h.elL=h.elR=-.2,h.hipL=-.3*m,h.knL=.6*m,h.hipR=-.3*m,h.knR=.6*m;break}}e.flags&1&&(c===ie.RUN||c===ie.DIVE)&&(h.shL=h.shR=c===ie.DIVE?-3:-1.55,h.elL=h.elR=-.1,h.shZL=h.shZR=0),e.flags&2&&c===ie.RUN&&(h.shR=-1.6,h.elR=-.2,h.shZR=.4,h.shL=-1.2,h.shZL=-.3),g?(o.rotation.x=d,o.rotation.z=f):(o.rotation.x=ln(o.rotation.x,d,a),o.rotation.z=ln(o.rotation.z,f,a)),o.position.y=ln(o.position.y,u,g?1:a);let x=c===ie.TUMBLE?1-Math.exp(-25*t):a;if(r.shL.rotation.x=ln(r.shL.rotation.x,h.shL,x),r.shR.rotation.x=ln(r.shR.rotation.x,h.shR,x),r.shL.rotation.z=ln(r.shL.rotation.z,h.shZL,x),r.shR.rotation.z=ln(r.shR.rotation.z,h.shZR,x),r.elL.rotation.x=ln(r.elL.rotation.x,h.elL,x),r.elR.rotation.x=ln(r.elR.rotation.x,h.elR,x),r.hipL.rotation.x=ln(r.hipL.rotation.x,h.hipL,x),r.hipR.rotation.x=ln(r.hipR.rotation.x,h.hipR,x),r.knL.rotation.x=ln(r.knL.rotation.x,h.knL,x),r.knR.rotation.x=ln(r.knR.rotation.x,h.knR,x),s.neck.rotation.x=c===ie.DIVE?-.9:c===ie.RUN?-d*.6:0,s.cape&&(s.cape.rotation.x=ln(s.cape.rotation.x,-Math.min(1.3,.15+l*.09)+Math.sin(this.t*14)*.08,a)),this.blend){let m=this.blend;m.t+=t;let p=Math.min(1,m.t/.4),_=p*p*(3-2*p);if(p>=1){this.blend=null;return}let b=this.groups();for(let y in b)Jd.copy(b[y].quaternion),b[y].quaternion.copy(m.q[y]).slerp(Jd,_);jd.copy(this.root.quaternion),this.root.quaternion.copy(m.rootQ).slerp(jd,_),this.root.position.lerpVectors(m.rootPos,Ih.copy(this.root.position),_),o.position.lerpVectors(m.bodyPos,Ih.copy(o.position),_)}}kick(e,t,n){if(!this.rd.active)return;let s=Math.hypot(e,n)||1;this.rd.addVelocity([e,t,n],[n/s*3.2,0,-e/s*3.2])}dispose(e){e.remove(this.root)}};function _y(){let i=(n,s,r)=>{let o=document.createElement("canvas");o.width=n,o.height=s,r(o.getContext("2d"),n,s);let a=new Pn(o);return a.colorSpace=Et,a},e=i(256,256,n=>{let s=n.createRadialGradient(128,128,20,128,128,128);s.addColorStop(0,"#f7d774"),s.addColorStop(.8,"#efc356"),s.addColorStop(.93,"#d9952e"),s.addColorStop(1,"#b8741e"),n.fillStyle=s,n.fillRect(0,0,256,256);for(let r=0;r<600;r++)n.fillStyle=`rgba(150,90,20,${Math.random()*.12})`,n.beginPath(),n.arc(Math.random()*256,Math.random()*256,Math.random()*3,0,7),n.fill();n.strokeStyle="rgba(150,40,20,0.75)",n.lineWidth=6,n.beginPath(),n.arc(128,128,70,0,7),n.stroke(),n.fillStyle="rgba(150,40,20,0.8)",n.font="bold 44px serif",n.textAlign="center",n.textBaseline="middle",n.fillText("CC",128,120),n.font="bold 15px serif",n.fillText("HILL  ROLL",128,158)}),t=i(512,64,n=>{n.fillStyle="#d99a35",n.fillRect(0,0,512,64);for(let s=0;s<900;s++)n.fillStyle=`rgba(${120+Math.random()*80},${60+Math.random()*50},10,${Math.random()*.2})`,n.fillRect(Math.random()*512,Math.random()*64,2+Math.random()*6,1+Math.random()*2);n.fillStyle="rgba(90,40,10,0.35)";for(let s=0;s<512;s+=32)n.fillRect(s,0,3,64);n.fillStyle="rgba(255,240,200,0.25)",n.fillRect(0,6,512,4),n.fillRect(0,54,512,4)});return{face:e,rind:t}}var Aa=class{constructor(e){let{face:t,rind:n}=_y(),s=new ct(.5,.5,.34,14,1),r=[new ht({map:n,roughness:.55,flatShading:!0}),new ht({map:t,roughness:.6,flatShading:!0}),new ht({map:t,roughness:.6,flatShading:!0})],o=new $e(s,r);o.rotation.z=Math.PI/2,o.castShadow=!0,o.receiveShadow=!0,this.group=new Ct,this.group.add(o);let a=new $e(new ct(.5,.5,.34,14,1),new vn({color:16773536,side:Ft,fog:!1,toneMapped:!1}));a.rotation.z=Math.PI/2,a.scale.set(1.16,1.3,1.16),this.group.add(a),this.hull=a;let l=document.createElement("canvas");l.width=4,l.height=128;{let d=l.getContext("2d"),f=d.createLinearGradient(0,0,0,128);f.addColorStop(0,"rgba(255,190,40,0)"),f.addColorStop(.55,"rgba(255,185,40,0.4)"),f.addColorStop(1,"rgba(255,205,70,0.85)"),d.fillStyle=f,d.fillRect(0,0,4,128)}let c=new Pn(l);c.colorSpace=Et;let h=new $e(new ct(.16,.26,14,10,1,!0),new vn({map:c,transparent:!0,depthWrite:!1,side:jt,blending:Ci,fog:!1,toneMapped:!1}));h.renderOrder=9,this.beam=h,e.add(h);let u=new $e(new na(.75,.95,32),new vn({color:16765773,transparent:!0,opacity:.35,depthWrite:!1}));u.rotation.x=-Math.PI/2,this.ring=u,e.add(u),e.add(this.group)}apply(e,t,n,s,r){this.group.position.set(e,t,n),this.group.quaternion.set(s[0],s[1],s[2],s[3]),this.ring.position.set(e,r+.06,n),this.beam.position.set(e,t+7.4,n),this.ring.visible=t-r<1.4}};var rt=null,Fi=null,Ia=null,Ra=null,Ca=null,nr=!1,en={get ready(){return!!rt},get muted(){return nr},unlock(){if(rt){rt.state==="suspended"&&rt.resume();return}let i=window.AudioContext||window.webkitAudioContext;if(!i)return;try{rt=new i}catch{rt=null;return}Fi=rt.createGain(),Fi.gain.value=nr?0:.7,Fi.connect(rt.destination),Ia=rt.createBuffer(1,rt.sampleRate*2,rt.sampleRate);let e=Ia.getChannelData(0),t=0;for(let r=0;r<e.length;r++){let o=Math.random()*2-1;t=.97*t+.03*o,e[r]=o*.5+t*2.5}Ra=$d("bandpass",700,.7),Ra.g.gain.value=0,Ca=$d("bandpass",1100,.5),Ca.g.gain.value=0;let n=rt.createOscillator(),s=rt.createGain();n.frequency.value=3.1,s.gain.value=.25,n.connect(s),s.connect(Ca.f.frequency),n.start()},toggleMute(){return nr=!nr,Fi&&Fi.gain.setTargetAtTime(nr?0:.7,rt.currentTime,.05),nr},update(i,e,t){if(!rt)return;let n=rt.currentTime,s=t?Math.min(.5,Math.max(0,(i-4)/22)):0;Ra.g.gain.setTargetAtTime(s*s*1.6,n,.15),Ra.f.frequency.setTargetAtTime(400+i*55,n,.2),Ca.g.gain.setTargetAtTime(t?.04+e*.08:.015,n,.4)},step(i=1){rt&&Pa(.05,"lowpass",380+Math.random()*120,.18*i)},thud(i=1){if(!rt)return;let e=rt.currentTime,t=rt.createOscillator(),n=rt.createGain();t.type="sine",t.frequency.setValueAtTime(110+Math.random()*30,e),t.frequency.exponentialRampToValueAtTime(38,e+.22),n.gain.setValueAtTime(Math.min(.9,.25+i*.06),e),n.gain.exponentialRampToValueAtTime(.001,e+.3),t.connect(n),n.connect(Fi),t.start(e),t.stop(e+.32),Pa(.12,"lowpass",600,Math.min(.5,.1+i*.03))},whoosh(){rt&&Pa(.35,"bandpass",900,.35,2400)},cheer(i=!1){if(!rt)return;let e=i?2.8:1.2;for(let t=0;t<(i?4:2);t++)Pa(e,"bandpass",700+t*350,i?.45:.18,null,.25)}};function $d(i,e,t){let n=rt.createBufferSource();n.buffer=Ia,n.loop=!0;let s=rt.createBiquadFilter();s.type=i,s.frequency.value=e,s.Q.value=t;let r=rt.createGain();return n.connect(s),s.connect(r),r.connect(Fi),n.start(),{src:n,f:s,g:r}}function Pa(i,e,t,n,s=null,r=.005){let o=rt.currentTime,a=rt.createBufferSource();a.buffer=Ia,a.playbackRate.value=.8+Math.random()*.4;let l=rt.createBiquadFilter();l.type=e,l.frequency.setValueAtTime(t,o),s&&l.frequency.exponentialRampToValueAtTime(s,o+i);let c=rt.createGain();c.gain.setValueAtTime(1e-4,o),c.gain.exponentialRampToValueAtTime(n,o+r),c.gain.exponentialRampToValueAtTime(1e-4,o+i),a.connect(l),l.connect(c),c.connect(Fi),a.start(o,Math.random()*1.5),a.stop(o+i+.05)}var La={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var tn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},My=new Hs(-1,1,1,-1,0,1),Dh=class extends St{constructor(){super(),this.setAttribute("position",new et([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new et([0,2,0,0,2,0],2))}},Sy=new Dh,Wn=class{constructor(e){this._mesh=new $e(Sy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,My)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ir=class extends tn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ft?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=_n.clone(e.uniforms),this.material=new ft({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Wn(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Vr=class extends tn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Da=class extends tn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ua=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new re);this._width=n.width,this._height=n.height,t=new Bt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:rn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ir(La),this.copyPass.material.blending=zn,this.clock=new qs}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Vr!==void 0&&(o instanceof Vr?n=!0:o instanceof Da&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Na=class extends tn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Re}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var ef={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Re(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var sr=class i extends tn{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new re(e.x,e.y):new re(256,256),this.clearColor=new Re(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Bt(r,o,{type:rn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Bt(r,o,{type:rn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Bt(r,o,{type:rn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=ef;this.highPassUniforms=_n.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ft({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new re(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=La;this.copyUniforms=_n.clone(h.uniforms),this.blendMaterial=new ft({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ci,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Re,this.oldClearAlpha=1,this.basic=new vn,this.fsQuad=new Wn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new re(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new ft({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new re(.5,.5)},direction:{value:new re(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new ft({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};sr.BlurDirectionX=new re(1,0);sr.BlurDirectionY=new re(0,1);var tf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Oa=class extends tn{constructor(){super();let e=tf;this.uniforms=_n.clone(e.uniforms),this.material=new ia({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Wn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ze.getTransfer(this._outputColorSpace)===st&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===$c?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===eh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===th?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ys?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===nh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ih&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Gr={name:"SMAAEdgesShader",defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new re(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},Wr={name:"SMAAWeightsShader",defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new re(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},Fa={name:"SMAABlendShader",uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new re(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};var Ba=class extends tn{constructor(e,t){super(),this.edgesRT=new Bt(e,t,{depthBuffer:!1,type:rn}),this.edgesRT.texture.name="SMAAPass.edges",this.weightsRT=new Bt(e,t,{depthBuffer:!1,type:rn}),this.weightsRT.texture.name="SMAAPass.weights";let n=this,s=new Image;s.src=this.getAreaTexture(),s.onload=function(){n.areaTexture.needsUpdate=!0},this.areaTexture=new Vt,this.areaTexture.name="SMAAPass.area",this.areaTexture.image=s,this.areaTexture.minFilter=xn,this.areaTexture.generateMipmaps=!1,this.areaTexture.flipY=!1;let r=new Image;r.src=this.getSearchTexture(),r.onload=function(){n.searchTexture.needsUpdate=!0},this.searchTexture=new Vt,this.searchTexture.name="SMAAPass.search",this.searchTexture.image=r,this.searchTexture.magFilter=qt,this.searchTexture.minFilter=qt,this.searchTexture.generateMipmaps=!1,this.searchTexture.flipY=!1,this.uniformsEdges=_n.clone(Gr.uniforms),this.uniformsEdges.resolution.value.set(1/e,1/t),this.materialEdges=new ft({defines:Object.assign({},Gr.defines),uniforms:this.uniformsEdges,vertexShader:Gr.vertexShader,fragmentShader:Gr.fragmentShader}),this.uniformsWeights=_n.clone(Wr.uniforms),this.uniformsWeights.resolution.value.set(1/e,1/t),this.uniformsWeights.tDiffuse.value=this.edgesRT.texture,this.uniformsWeights.tArea.value=this.areaTexture,this.uniformsWeights.tSearch.value=this.searchTexture,this.materialWeights=new ft({defines:Object.assign({},Wr.defines),uniforms:this.uniformsWeights,vertexShader:Wr.vertexShader,fragmentShader:Wr.fragmentShader}),this.uniformsBlend=_n.clone(Fa.uniforms),this.uniformsBlend.resolution.value.set(1/e,1/t),this.uniformsBlend.tDiffuse.value=this.weightsRT.texture,this.materialBlend=new ft({uniforms:this.uniformsBlend,vertexShader:Fa.vertexShader,fragmentShader:Fa.fragmentShader}),this.fsQuad=new Wn(null)}render(e,t,n){this.uniformsEdges.tDiffuse.value=n.texture,this.fsQuad.material=this.materialEdges,e.setRenderTarget(this.edgesRT),this.clear&&e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialWeights,e.setRenderTarget(this.weightsRT),this.clear&&e.clear(),this.fsQuad.render(e),this.uniformsBlend.tColor.value=n.texture,this.fsQuad.material=this.materialBlend,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,t){this.edgesRT.setSize(e,t),this.weightsRT.setSize(e,t),this.materialEdges.uniforms.resolution.value.set(1/e,1/t),this.materialWeights.uniforms.resolution.value.set(1/e,1/t),this.materialBlend.uniforms.resolution.value.set(1/e,1/t)}getAreaTexture(){return"data:image/png;base64,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"}getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}dispose(){this.edgesRT.dispose(),this.weightsRT.dispose(),this.areaTexture.dispose(),this.searchTexture.dispose(),this.materialEdges.dispose(),this.materialWeights.dispose(),this.materialBlend.dispose(),this.fsQuad.dispose()}};var Ee=i=>document.querySelector(i),by=Ee("#c"),vt=new Rr({canvas:by,antialias:!0,powerPreference:"high-performance"});vt.setPixelRatio(Math.min(window.devicePixelRatio,2));vt.setSize(innerWidth,innerHeight);vt.shadowMap.enabled=!0;vt.shadowMap.type=jc;vt.toneMapping=Ys;vt.toneMappingExposure=1.05;vt.outputColorSpace=Et;var Sn=new es,Ut=Xd(Sn,vt),hn=new Ea(Sn,3e3),mi=new Aa(Sn),fi=new kt(55,innerWidth/innerHeight,.1,3e3),Hi=(()=>{let i=new Ua(vt),e=new Na(Sn,fi);i.addPass(e),i.addPass(new sr(new re(innerWidth/2,innerHeight/2),.22,.6,.92)),i.addPass(new Oa),i.addPass(new ir({uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; varying vec2 vUv;
      void main(){ vec4 c = texture2D(tDiffuse, vUv); vec3 col = c.rgb;
        float l = dot(col, vec3(0.299, 0.587, 0.114));
        col = mix(vec3(l), col, 1.1);                       // a touch more saturation
        col = (col - 0.5) * 1.06 + 0.5;                      // and contrast
        col *= vec3(1.02, 1.0, 0.97);                        // warm grade
        gl_FragColor = vec4(clamp(col, 0.0, 1.0), c.a); }`}));let t=new Ba(innerWidth*vt.getPixelRatio(),innerHeight*vt.getPixelRatio());return i.addPass(t),{composer:i,rp:e,enabled:!0}})();function nf(i){Hi.enabled&&or>=2?(Hi.rp.camera=i,Hi.composer.render()):vt.render(Sn,i)}var Uh={solo:{up:["KeyW","ArrowUp"],down:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"],sprint:["ShiftLeft","ShiftRight"],jump:["Space"],grab:["KeyE","KeyF"]},p1:{up:["KeyW"],down:["KeyS"],left:["KeyA"],right:["KeyD"],sprint:["ShiftLeft"],jump:["Space"],grab:["KeyE"]},p2:{up:["ArrowUp"],down:["ArrowDown"],left:["ArrowLeft"],right:["ArrowRight"],sprint:["ShiftRight","Numpad0"],jump:["Enter","NumpadEnter"],grab:["Slash","Period","Numpad1"]}},Zt=new Set,ff=[];addEventListener("keydown",i=>{if(!(i.target&&(i.target.tagName==="INPUT"||i.target.tagName==="SELECT"))){if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Slash","Enter"].includes(i.code)&&Y.mode&&i.preventDefault(),en.unlock(),i.code==="KeyM"&&!(i.target&&i.target.tagName==="INPUT")&&en.toggleMute(),!i.repeat)for(let e of ff)e(i.code);Zt.add(i.code),Vy(i)}});addEventListener("keyup",i=>Zt.delete(i.code));addEventListener("blur",()=>Zt.clear());var Zr=class{constructor(e){this.map=e,this.inp=Or(),ff.push(t=>this.press(t))}press(e){this.active&&(this.map.jump.includes(e)&&this.inp.d++,this.map.grab.includes(e)&&this.inp.g++)}read(){let e=n=>n.some(s=>Zt.has(s)),t=this.map;return this.inp.f=e(t.up)?1:0,this.inp.b=e(t.down)?1:0,this.inp.s=e(t.sprint)?1:0,this.inp.ax=(e(t.left)?1:0)-(e(t.right)?1:0),this.inp}};function Ey(i){let e=Ee("#touch");if(!("ontouchstart"in window))return;e.style.display="block";let t=(n,s,r)=>{let o=Ee(n);o.addEventListener("touchstart",a=>{a.preventDefault(),s()}),o.addEventListener("touchend",a=>{a.preventDefault(),r&&r()})};t("#t-left",()=>Zt.add("KeyA"),()=>Zt.delete("KeyA")),t("#t-right",()=>Zt.add("KeyD"),()=>Zt.delete("KeyD")),t("#t-run",()=>Zt.add("KeyW"),()=>Zt.delete("KeyW")),t("#t-brake",()=>Zt.add("KeyS"),()=>Zt.delete("KeyS")),addEventListener("touchstart",()=>en.unlock(),{passive:!0}),t("#t-jump",()=>i.press("Space")),t("#t-grab",()=>i.press("KeyE")),t("#t-sprint",()=>{Zt.add("ShiftLeft"),Zt.add("KeyW")},()=>{Zt.delete("ShiftLeft"),Zt.delete("KeyW")})}var Y={mode:null,race:null,views:[],racerViews:new Map,acc:0,resultsShown:!1,resultT:0,chars:[0,1],slowT:0,match:null},rr={solo:new Zr(Uh.solo),p1:new Zr(Uh.p1),p2:new Zr(Uh.p2)};Ey(rr.solo);function kh(){for(let i of Y.racerViews.values())i.dispose(Sn);Y.racerViews.clear(),Ee("#huds").innerHTML="",Y.views=[];for(let i of Object.values(rr))i.active=!1}function wy(i,e,t){let n=document.createElement("div");return n.className="hud",t===2&&(n.style.left=e?"50%":"0",n.style.width="50%"),n.innerHTML=`<div class="hud-tl"><div class="hud-label">${i}</div><div class="timer">0:00.00</div></div>
    <div class="hud-tr"><div class="pos">1<sup>st</sup></div><div class="of"></div></div>
    <div class="speedlines"></div>
    <div class="hud-feed"></div>
    <div class="hud-callout"></div>
    <div class="hud-msg"></div>
    <div class="hud-hint"></div>
    <div class="cheese-arrow">\u{1F9C0}<i>\u27A4</i></div>
    <div class="cheese-mark"><span>\u{1F9C0}</span><i></i><b></b></div>
    <div class="hud-bl"><div class="speed"><b>0</b> km/h</div>
      <div class="meter"><div class="meter-fill"></div><span>BALANCE</span></div>
      <div class="meter stam"><div class="meter-fill stam-fill"></div><span>SPRINT</span></div>
      <div class="charges" title="roll-jumps"></div>
      <div class="cheese-dist"></div></div>`,Ee("#huds").appendChild(n),{el:n,timer:n.querySelector(".timer"),pos:n.querySelector(".pos"),of:n.querySelector(".of"),msg:n.querySelector(".hud-msg"),hint:n.querySelector(".hud-hint"),speed:n.querySelector(".speed b"),meter:n.querySelector(".meter-fill"),stam:n.querySelector(".stam-fill"),cdist:n.querySelector(".cheese-dist"),charges:n.querySelector(".charges"),lines:n.querySelector(".speedlines"),arrow:n.querySelector(".cheese-arrow"),arrowI:n.querySelector(".cheese-arrow i"),mark:n.querySelector(".cheese-mark"),markD:n.querySelector(".cheese-mark b"),feed:n.querySelector(".hud-feed"),callout:n.querySelector(".hud-callout"),msgT:0,calloutT:0,calloutCd:0}}var Vh=!1;function Xn(i,e,t="",n=1.6){!i||!Vh||(i.hud.msg.textContent=e,i.hud.msg.className="hud-msg show "+t,i.hud.msgT=n)}function as(i,e=null){if(Vh)for(let t of Y.views){if(e){let r=pi(t.racerId);if(!e.some(a=>a===t.racerId||r&&pi(a)&&pi(a).distanceTo(r)<30))continue}let n=t.hud.feed,s=document.createElement("div");for(s.className="feed-item",s.textContent=i,n.prepend(s);n.children.length>3;)n.lastChild.remove();setTimeout(()=>s.classList.add("fade"),3e3),setTimeout(()=>s.remove(),4e3)}}function Va(i,e,t,n,s){let r=new kt(62,1,.1,3e3),o={racerId:i,cam:r,hud:wy(e,n,s),ctrl:t,shake:0,camPos:null,look:new C,idx:n,n:s};return t&&(t.active=!0),Y.views.push(o),o}function pf(i,e,t){let n=Y.racerViews.get(i.id);return n||(n=new kr(Sn,i,e,t),Y.racerViews.set(i.id,n)),n}var Un=i=>{let e=Y.race&&Y.race.racers.find(t=>t.id===i);return e?e.name:te.names.get(i)||"?"},sf=i=>Y.views.find(e=>e.racerId===i);function Ty(i){let e=i==="split"?2:1,t=[],n=new Set;e===2&&Y.chars[0]===Y.chars[1]&&(Y.chars[1]=(Y.chars[1]+1)%Tt.length);for(let o=0;o<e;o++)t.push({id:"p"+(o+1),name:e===1?"You":"Player "+(o+1),char:Y.chars[o]}),n.add(Y.chars[o]);let s=i==="split"?4:5,r=[...Eh].sort(()=>Math.random()-.5);for(let o=0;o<s;o++){let a;do a=Math.random()*Tt.length|0;while(n.has(a)&&n.size<Tt.length);n.add(a),t.push({id:"ai"+o,name:r[o],char:a,ai:!0})}return{mode:i,heat:0,roster:t,points:{},best:{},done:!1}}function Gh(i,e=!1){kh(),te.close(),Y.mode=i,(!e||!Y.match||Y.match.mode!==i||Y.match.done)&&(Y.match=Ty(i)),Y.match.heat++,Y.match.scored=!1;let t=Math.random()*1e9|0,n=xa(t);Y.race=n;let s=i==="split"?2:1;for(let r of Y.match.roster)ya(n,r);wh(n);for(let r of n.racers)Fr(n,r);for(let r of n.racers){let o=!r.ai;pf(r,o?s===1?"YOU":r.id.toUpperCase():null,o?"#ffd34d":"#ffffff")}s===1?Va("p1","YOU",rr.solo,0,1):(Va("p1","PLAYER 1  (WASD)",rr.p1,0,2),Va("p2","PLAYER 2  (ARROWS)",rr.p2,1,2)),Y.acc=0,Y.resultsShown=!1,Y.resultT=0,Y.slowT=0,Nn(null),document.body.classList.add("racing"),as(`Heat ${Y.match.heat} of 3`)}function mf(i){let e=Y.race;Y.slowT>0&&(Y.slowT-=i,i*=.3),Y.acc+=i;let t={};for(let o of Y.views)t[o.racerId]=o.ctrl.read();let n=0,s=Math.ceil(1/an.SUB)+1;for(;Y.acc>=an.SUB&&n<s;)Th(e,an.SUB,t),Y.acc-=an.SUB,n++,xf(e.events),e.events=[];n>=s&&(Y.acc=0);for(let o of e.racers){let a=Y.racerViews.get(o.id);a.apply(gf(o),i,hn),a.lastSp=Math.hypot(o.vx,o.vz),a.lastState=o.state,a.lastGrounded=o.grounded}let r=e.cheese;mi.apply(r.x,r.y,r.z,Ah(r),Fe(r.x,r.z)),Wa=r.heldBy!=null,yf(e.phase,e.cd,e.raceT,e.racers.map(rf),r),e.phase==="over"&&Mf(e.result,e.racers.map(rf),i)}function gf(i){return{x:i.x,y:i.y,z:i.z,vy:i.vy,stamina:i.stamina,yaw:i.heading,pitch:i.spin,roll:i.roll,state:i.state,st:i.st,vx:i.vx,vz:i.vz,meter:i.meter,grounded:i.grounded,flags:Sa(i)}}var rf=i=>({id:i.id,name:i.name,char:i.char,x:i.x,y:i.y,z:i.z,vx:i.vx,vz:i.vz,state:i.state,meter:i.meter,stamina:i.stamina,st:i.st,charges:i.charges,ai:!!i.ai,finished:i.finished,finishTime:i.finishTime});function pi(i){let e=Y.racerViews.get(i);return e?e.root.position:null}function xf(i){for(let e of i){let t=e.id!=null?sf(e.id):null;switch(e.e){case"release":as("\u{1F9C0} The cheese is away!");for(let n of Y.views)Xn(n,"CHEESE AWAY!","gold",1);en.cheer();break;case"go":for(let n of Y.views)Xn(n,"GO!","go",.8);en.cheer();break;case"tumble":{let n=pi(e.id);n&&(hn.kick(n.x,n.y,n.z,0,4,30),hn.emit(n.x,n.y+.3,n.z,0,3,0,3,5929518,.1,1.2,14));let s={grabbed:"TRIPPED!",landing:"HARD LANDING!",jump:"ROLL WITH IT!",dive:"HEAD OVER HEELS!",air:"AIRBORNE!",trip:"STUMBLE!",speed:"TOO FAST!",collision:"SKITTLED!",hay:"INTO THE HAY!"};if(t){Xn(t,s[e.why]||"WIPEOUT!","red",1),t.shake=.6;let r=Y.racerViews.get(e.id);Y.mode!=="online"&&r&&r.lastSp>11&&e.why!=="dive"&&e.why!=="jump"&&(Y.slowT=.5)}n&&of(n)&&en.thud(6),e.why!=="dive"&&e.why!=="jump"&&as(`\u{1F4AB} ${Un(e.id)} is cartwheeling down the hill!`,[e.id]);break}case"bounce":hn.kick(e.x,e.y,e.z,0,3,Math.min(18,e.s*2));break;case"land":{let n=pi(e.id);n&&hn.kick(n.x,n.y,n.z,0,2,e.s),t&&(t.shake=Math.max(t.shake,Math.min(.35,e.s*.03))),n&&of(n)&&en.thud(e.s*.5);break}case"dive":{let n=pi(e.id);n&&hn.kick(n.x,n.y,n.z,0,4,8),t&&(Xn(t,"DIVE!","",.5),en.whoosh());break}case"jump":{let n=pi(e.id);n&&hn.kick(n.x,n.y,n.z,0,3,6),t&&en.whoosh();break}case"rjump":{let n=pi(e.id);n&&hn.kick(n.x,n.y,n.z,0,5,14);let s=Y.racerViews.get(e.id),r=Y.race&&Y.race.racers.find(o=>o.id===e.id);s&&r&&s.kick(r.vx*.35,6.5,r.vz*.35),t&&(Xn(t,"ROLL-JUMP!","gold",.6),en.whoosh(),t.shake=.3,t.fovPunch=8);break}case"clean":t&&Xn(t,"CLEAN LANDING! +SPEED","go",.7);break;case"grab":{as(`\u270B ${Un(e.id)} grabbed ${Un(e.target)}${e.trip?" \u2014 down they go!":"!"}`,[e.id,e.target]),t&&Xn(t,e.trip?"TRIPPED THEM!":"GRABBED!","gold",.8);let n=sf(e.target);n&&!e.trip&&Xn(n,"GRABBED!","red",.8);break}case"whiff":t&&Xn(t,"missed grab","",.5);break;case"finish":as(`\u{1F3C1} ${Un(e.id)} crossed the line!`);break;case"win":as(e.how==="cheese"?`\u{1F9C0} ${Un(e.id)} CAUGHT THE CHEESE!`:`\u{1F3C6} ${Un(e.id)} wins!`);for(let n of Y.views)Xn(n,n.racerId===e.id?e.how==="cheese"?"YOU GOT THE CHEESE!":"YOU WIN!":`${Un(e.id)} WINS`,n.racerId===e.id?"gold big":"red",3);{let n=pi(e.id);if(n)for(let s=0;s<6;s++)hn.emit(n.x,n.y+2,n.z,0,5,0,6,[16765773,16735838,6211839,8257418][s%4],.12,2.2,25)}en.cheer(!0);break}}}function of(i){return Y.views.some(e=>e.camPos&&e.camPos.distanceTo(i)<25)}var Ay=i=>i+(["th","st","nd","rd"][i%100>10&&i%100<14?0:i%10<4?i%10:0]||"th");function Bh(i){i=Math.max(0,i);let e=Math.floor(i/60),t=i-e*60;return`${e}:${t<10?"0":""}${t.toFixed(2)}`}var za=new C,Nh=new C,Xr=new C;function vf(){for(let[i,e]of Y.racerViews){let t=1;for(let n of Y.views){if(!n.camPos||i===n.racerId)continue;let s=Y.racerViews.get(n.racerId);Xr.copy(e.root.position),Xr.y+=.9*e.m.H;let r=n.cam.position.distanceTo(Xr);if(t=Math.min(t,.25+.75*Math.max(0,Math.min(1,(r-2.5)/3))),s){za.copy(n.cam.position),Nh.copy(s.root.position),Nh.y+=.9*s.m.H;let o=Nh.clone().sub(za),a=o.length();o.divideScalar(a||1);let l=Xr.clone().sub(za).dot(o);if(l>.5&&l<a-.6){let c=Xr.clone().sub(za).addScaledVector(o,-l).length();c<.9&&(t=Math.min(t,.3+.7*(c/.9)))}}}e.setFade(t),t<.6&&e.tag&&(e.tag.visible=!1)}}var af=performance.now();function Ry(i,e){let t=performance.now(),n=Math.min(.1,(t-af)/1e3);af=t;let s=Y.views.map(r=>r.racerId);e.forEach((r,o)=>{let a=Y.racerViews.get(r.id);a&&a.setTag(i==="race"&&o<3&&!s.includes(r.id)?o+1:0,r.name)});for(let r of Y.views){let o=r.hud;o.calloutT>0&&(o.calloutT-=n,o.calloutT<=0&&(o.callout.className="hud-callout")),o.calloutCd=Math.max(0,o.calloutCd-n);let a=e.findIndex(c=>c.id===r.racerId);if(a<0||i!=="race"){r.prevAhead=null;continue}let l=new Set(e.slice(0,a).map(c=>c.id));if(r.prevAhead&&o.calloutCd<=0&&o.calloutT<=0){let c=null;for(let h of l)if(!r.prevAhead.has(h)){c=`${Un(h)} overtakes you`;break}if(!c){for(let h of r.prevAhead)if(!l.has(h)&&e.some(u=>u.id===h)){c=`You pass ${Un(h)}`;break}}c&&(o.callout.textContent=c,o.callout.className="hud-callout show"+(c.startsWith("You")?" good":""),o.calloutT=1.8,o.calloutCd=3.5)}(o.calloutCd<=0||!r.prevAhead)&&(r.prevAhead=l)}}function Cy(i,e,t){return i==="countdown"?Math.max(0,rs-e):t+rs}function yf(i,e,t,n,s){let r=Br(n,null);for(let h of Y.views){let u=n.find(y=>y.id===h.racerId),d=h.hud;if(d.timer.textContent=Bh(Cy(i,e,t)),!u){d.pos.textContent="SPECTATING";continue}let f=r.findIndex(y=>y.id===u.id)+1;d.pos.innerHTML=Ay(f).replace(/(\d+)(\D+)/,"$1<sup>$2</sup>"),d.of.textContent=`of ${n.length}`;let g=Math.hypot(u.vx,u.vz);d.speed.textContent=Math.round(g*3.6);let x=Math.min(1,u.meter||0);d.meter.style.width=x*100+"%",d.meter.style.background=x>.7?"#ff4d4d":x>.4?"#ffb84d":"#7dff8a",d.stam.style.width=Math.max(0,Math.min(1,u.stamina??1))*100+"%";let m=u.charges??2;d._ch!==m&&(d._ch=m,d.charges.innerHTML="ROLL-JUMP "+"<b>\u25CF</b>".repeat(m)+"<i>\u25CF</i>".repeat(Math.max(0,er-m))),d.lines.style.opacity=Math.max(0,Math.min(.85,(g-12)/8)).toFixed(2);let p=s.z-u.z,_=Math.hypot(s.x-u.x,s.z-u.z);d.cdist.textContent=s.heldBy!=null?"\u{1F9C0} caught!":p>=0?`\u{1F9C0} ${_.toFixed(0)} m ahead`:`\u{1F9C0} ${_.toFixed(0)} m behind`;let b="";if(i==="race"){let y=s.heldBy==null&&_<3.2&&Math.abs(s.y-u.y-.5)<2.5,D=!1;y&&u.state!==ie.GETUP?b="GRAB IT! [E]":s.heldBy==null&&u.state===ie.RUN&&p>.5&&p<5.5&&Math.abs(s.x-u.x)<2.2?b="DIVE AT IT! [SPACE]":u.state===ie.TUMBLE&&(u.st||0)>.25?b=g>=5?(u.charges??0)>0?"ROLL-JUMP [SPACE] \xB7 steer in the air":"rolling\u2026 (roll-jump recharging)":"GET UP [SPACE]":u.state===ie.RUN&&x>.6?b="TOO FAST! Ease off / brake":u.state===ie.RUN&&r.some(w=>w.id!==u.id&&w.state!==ie.TUMBLE&&Math.hypot(w.x-u.x,w.z-u.z)<1.9)&&(b="GRAB RACER [E]"),h.n===2&&(b=b.replace("[E]",h.idx?"[ / ]":"[E]").replace(/\[SPACE\]/g,h.idx?"[ENTER]":"[SPACE]"))}Vh||(b=""),d.hint.textContent=b,d.hint.className="hud-hint"+(b?" show":"")+(b.startsWith("GRAB IT")?" hot":"")}Ry(i,r);let o=Ee("#countdown");if(i==="countdown"){let h=Math.ceil(e-1.5);o.textContent=h>0?h:"\u{1F9C0}",o.className="show"}else o.className="";let a=Ee("#progress"),l="",c=h=>Math.max(0,Math.min(100,(h+4)/(Mn+4)*100));l+=`<div class="pdot cheese" style="top:${c(s.z)}%">\u{1F9C0}</div>`;for(let h of n){let u=Y.views.some(d=>d.racerId===h.id);l+=`<div class="pdot${u?" me":""}" style="top:${c(h.z)}%; background:#${Tt[h.char%Tt.length].shirt.toString(16).padStart(6,"0")}"></div>`}a.innerHTML=l}var lf=new C,qr=new C;function _f(i,e,t){let n=Y.racerViews.get(i.racerId),s;if(n)s=n.root.position;else{let D=null;for(let w of Y.racerViews.values())(!D||w.root.position.z>D.root.position.z)&&(D=w);s=D?D.root.position:new C(0,0,0)}let r=t==="over",o=performance.now()/1e3,a=n&&n.lastSp||0,l=n&&(n.lastState===ie.TUMBLE||n.lastState===ie.DIVE);r?(i.orbitT=(i.orbitT??0)+e,i.orbitA=1.1*Math.sin(i.orbitT*.3)):i.orbitT=0;let c=Math.max(0,(Fe(s.x,s.z-3)-Fe(s.x,s.z+3))/6),h=(t==="countdown"?6.5:6+Math.min(1,a*.05))/(1+c*.45),u=r?2:l?5:9;i.vel||(i.vel=new C),i.prevP&&e>0&&i.vel.lerp(qr.copy(s).sub(i.prevP).divideScalar(e).clampLength(0,40),1-Math.exp(-10*e)),i.prevP=(i.prevP||new C).copy(s);let d=r?0:1/u,f=r?lf.set(s.x+Math.sin(i.orbitA)*9,s.y+2.5,s.z+Math.cos(i.orbitA)*9):lf.set(s.x*.85+i.vel.x*d,s.y+(l?3.8:4.5)+i.vel.y*d,s.z-h+i.vel.z*d);f.y=Math.max(f.y,Fe(f.x,f.z)+1.6),(!i.camPos||i.camPos.distanceTo(f)>35)&&(i.camPos=f.clone());let g=1-Math.exp(-u*e);i.camPos.lerp(f,g),i.camPos.y=Math.max(i.camPos.y,Fe(i.camPos.x,i.camPos.z)+1);let x=10,m=s.z+x,p=s.y-Fe(s.x,m),_=r?new C(s.x,s.y+1,s.z):new C(s.x*.95+i.vel.x*d,s.y+.7-p*.62+i.vel.y*d,m+i.vel.z*d);i.look.lerp(_,1-Math.exp(-(l?5:8)*e)),i.cam.position.copy(i.camPos);let b=t==="race"&&n&&n.lastGrounded?Math.max(0,a-9)*.004:0,y=i.shake+b;y>0&&(i.cam.position.x+=(Math.random()-.5)*y,i.cam.position.y+=(Math.random()-.5)*y),i.shake=Math.max(0,i.shake-e*1.5),i.cam.lookAt(i.look),i.fovPunch=Math.max(0,(i.fovPunch||0)-e*14),i.cam.fov+=(Math.min(85,60+Math.min(16,Math.max(0,a-5)*.9)+i.fovPunch)-i.cam.fov)*(1-Math.exp(-(i.fovPunch>0?8:3)*e)),i.cam.updateProjectionMatrix(),i.hud.msgT>0&&(i.hud.msgT-=e,i.hud.msgT<=0&&(i.hud.msg.className="hud-msg"))}function Py(i){let e=i.hud.arrow,t=i.hud.mark;if(!Y.mode||Wa){e.style.display="none",t.style.display="none";return}let n=mi.group.position;qr.set(n.x,n.y+.9,n.z).project(i.cam);let s=qr.z>1,r=qr.x,o=qr.y;if(!s&&Math.abs(r)<.94&&Math.abs(o)<.9){e.style.display="none",t.style.display="block",t.style.left=(r*.5+.5)*100+"%",t.style.top=(-o*.5+.5)*100+"%";let l=Y.racerViews.get(i.racerId),c=l?Math.hypot(l.root.position.x-n.x,l.root.position.z-n.z):0;i.hud.markD.textContent=c>6?`${c.toFixed(0)} m`:"",t.classList.toggle("near",c<2.8);return}t.style.display="none",s&&(r=-r,o=-Math.abs(o)-1);let a=Math.max(Math.abs(r)/.85,Math.abs(o)/.8);r/=a,o/=a,e.style.display="block",e.style.left=(r*.5+.5)*100+"%",e.style.top=(-o*.5+.5)*100+"%",i.hud.arrowI.style.transform=`rotate(${Math.atan2(-o,r)}rad)`}var Wa=!1,qn=(()=>{let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255,240,150,1)"),t.addColorStop(.35,"rgba(255,205,60,0.55)"),t.addColorStop(1,"rgba(255,200,60,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);let n=new Li(new li({map:new Pn(i),blending:Ci,depthWrite:!1,depthTest:!0,transparent:!0,fog:!1,toneMapped:!1}));n.renderOrder=10,Sn.add(n);let s=document.createElement("canvas");s.width=96,s.height=112;let r=s.getContext("2d");r.lineJoin="round",r.lineWidth=9,r.strokeStyle="#3a2400",r.fillStyle="#ffd34d",r.beginPath(),r.arc(48,40,32,0,Math.PI*2),r.stroke(),r.fill(),r.beginPath(),r.moveTo(30,70),r.lineTo(66,70),r.lineTo(48,104),r.closePath(),r.stroke(),r.fill(),r.font="bold 40px sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillText("\u{1F9C0}",48,42);let o=new Pn(s);o.colorSpace=Et;let a=new Li(new li({map:o,depthTest:!1,transparent:!0,fog:!1,sizeAttenuation:!1,toneMapped:!1}));return a.center.set(.5,0),a.renderOrder=11,Sn.add(a),{sp:n,pin:a}})();function Iy(i){let e=!!Y.mode&&!Wa;if(qn.sp.visible=mi.beam.visible=e,qn.pin.visible=!1,!e)return;let t=mi.group.position,n=Y.views.some(l=>{let c=Y.racerViews.get(l.racerId);return c&&c.root.position.distanceTo(t)<2.6}),s=1+Math.sin(i*(n?14:6))*(n?.3:.18);qn.sp.material.color.setHex(n?10354538:16769162),mi.hull.material.color.setHex(n?12124042:16773536);let r=1e9;for(let l of Y.views)l.camPos&&(r=Math.min(r,l.camPos.distanceTo(t)));let o=Math.max(0,Math.min(1,(r-8)/22));mi.beam.material.opacity=.18+.72*o;{let l=Math.max(1,r/45);mi.beam.scale.set(l,1+Math.max(0,r-60)/120,l)}qn.sp.material.opacity=.35+.65*o,qn.sp.position.copy(t),qn.sp.scale.setScalar((1.8+1.8*o)*s),qn.pin.position.set(t.x,t.y+1.2+Math.sin(i*4)*.25,t.z);let a=Y.views.length>1?.11:.085;qn.pin.scale.set(a*96/112,a,1)}function Mf(i,e,t){if(Y.resultsShown||!i||(Y.resultT+=t,Y.resultT<2.6))return;Y.resultsShown=!0;let n=Y.views.map(g=>g.racerId),s=Br(e,i),r=n.includes(i.id),o;r?o=i.how==="cheese"?n.length>1?`${Un(i.id)} CAUGHT THE CHEESE!`:"YOU CAUGHT THE CHEESE!":n.length>1?`${Un(i.id)} WINS!`:"YOU WIN!":o=i.how==="cheese"?`${i.name} caught the cheese`:`${i.name} won the race`,Ee("#res-title").textContent=o,Ee("#res-title").className=r?"win":"lose",Ee("#res-sub").textContent=(i.how==="cheese"?"Cheese snatched":i.how==="finish"?"First across the line":"Time limit")+` in ${Bh(i.time+rs)}`;let a=s[0],l=Math.max(4,((a?a.z:0)+4)/Math.max(1,i.time)),c=Y.mode!=="online"?Y.match:null,h={};s.forEach((g,x)=>{h[g.id]=Ma[x]||0});let u="";if(s.forEach((g,x)=>{let m=n.includes(g.id),p;if(x===0)p=g.id===i.id?i.how==="cheese"?"\u{1F9C0} caught it":"\u{1F3C6} winner":"leader";else if(g.finished&&a.finished&&g.finishTime&&a.finishTime)p=`+${(g.finishTime-a.finishTime).toFixed(2)} s`;else{let b=Math.max(0,a.z-g.z);p=`+${b<10?b.toFixed(1):b.toFixed(0)} m \xB7 +${(b/l).toFixed(1)} s`}let _=c?`<td class="pts">${m?`<span class="earn">+${h[g.id]}</span>`:`+${h[g.id]}`}</td>`:"";u+=`<tr class="${m?"me":""}"><td>${x+1}</td><td>${Ga(g.name)}${g.ai?" <small>(AI)</small>":""}</td><td>${Tt[g.char%Tt.length].name}</td><td>${p}</td>${_}</tr>`}),Ee("#res-table").innerHTML=u,c&&!c.scored&&(c.scored=!0,s.forEach((g,x)=>{c.points[g.id]=(c.points[g.id]||0)+h[g.id],c.best[g.id]=Math.min(c.best[g.id]??99,x)}),c.heat>=3&&(c.done=!0)),c){let g=[...c.roster].sort((m,p)=>(c.points[p.id]||0)-(c.points[m.id]||0)||(c.best[m.id]??99)-(c.best[p.id]??99)||(m.id<p.id?-1:1)),x=c.done?g[0]:null;Ee("#res-board").innerHTML=`<div class="board-title">${c.done?"\u{1F3C6} MATCH WINNER: "+Ga(x.name)+` (${c.points[x.id]||0} pts)`:`Heat ${c.heat} of 3 \u2014 most points after 3 heats wins (${Ma.join("/")})`}</div><div class="chips">`+g.map((m,p)=>`<span class="chip${n.includes(m.id)?" me":""}">${p+1}. ${Ga(m.name)} <b>${c.points[m.id]||0}</b> pts${n.includes(m.id)?` <span class="earn">+${h[m.id]}</span>`:""}</span>`).join("")+"</div>",Ee("#btn-again").textContent=c.done?"NEW MATCH (R)":`NEXT HEAT ${c.heat+1}/3 (R)`}else Ee("#res-board").innerHTML="",Ee("#btn-again").textContent="RACE AGAIN (R)";if(r&&Y.mode!=="online")try{let g=parseFloat(localStorage.getItem("cc-best")||"0");(!g||i.time<g)&&localStorage.setItem("cc-best",String(i.time))}catch{}let d="";try{let g=localStorage.getItem("cc-best");g&&(d=`Best winning time: ${Bh(parseFloat(g)+rs)}`)}catch{}Ee("#res-best").textContent=d;let f=Ee("#btn-again");Y.mode==="online"?(f.style.display=te.isHost?"":"none",Ee("#res-wait").style.display=te.isHost?"none":""):(f.style.display="",Ee("#res-wait").style.display="none"),Nn("#screen-results"),setTimeout(()=>{f.style.display!=="none"&&f.focus()},30)}var Ga=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function zh(){let i=new URLSearchParams(location.search).get("server");return i||(window.CHEESE_SERVER?window.CHEESE_SERVER:location.protocol==="http:"||location.protocol==="https:"?location.origin:"")}function cf(i){let e=i.trim().replace(/\/+$/,"");return/^[a-z]+:\/\//i.test(e)||(e=(location.protocol==="https:"?"https://":"http://")+e),e=e.replace(/^http:/i,"ws:").replace(/^https:/i,"wss:"),e+"/ws"}var te={ws:null,id:null,code:null,isHost:!1,players:[],names:new Map,snaps:[],offset:null,rtt:.1,me:null,predRace:null,lastSend:0,inRace:!1,phase:"countdown",cd:0,raceT:0,result:null,cheese:{x:0,y:0,z:0,q:[0,0,0,1],vx:0,vy:0,vz:0,heldBy:null},cheeseDisp:null,close(){if(this.ws){this.ws.onclose=null;try{this.ws.close()}catch{}}this.ws=null,this.id=null,this.inRace=!1},send(i){this.ws&&this.ws.readyState===1&&this.ws.send(JSON.stringify(i))}};function di(i,e){let t=Ee("#online-status");t.textContent=i,t.className=e?"err":""}function Sf(i){let e=Ee("#server-url").value.trim();if(!e){di("Enter a server URL (e.g. https://your-app.onrender.com).",!0);return}let t=(Ee("#player-name").value.trim()||"Runner").slice(0,16);try{localStorage.setItem("cc-name",t),localStorage.setItem("cc-server",e)}catch{}let n=Ee("#room-code").value.trim().toUpperCase();if(!i&&!/^[A-Z]{4}$/.test(n)){di("Room codes are 4 letters.",!0);return}te.close();let s;try{s=new WebSocket(cf(e))}catch(o){di("Bad server URL: "+o.message,!0);return}te.ws=s,di("Connecting\u2026 (free hosts can take ~30-60 s to wake up)");let r=setTimeout(()=>{s.readyState!==1&&di("Still connecting\u2026 is the server running?",!0)},8e3);s.onopen=()=>{clearTimeout(r),di("Connected."),te.send(i?{t:"create",name:t,char:Y.chars[0]}:{t:"join",code:n,name:t,char:Y.chars[0]})},s.onerror=()=>di("Could not connect to "+cf(e),!0),s.onclose=()=>{clearTimeout(r),Y.mode==="online"&&(as("\u26A0 Disconnected from server"),Kr()),di("Disconnected.",!0),te.ws=null},s.onmessage=o=>{let a;try{a=JSON.parse(o.data)}catch{return}Ly(a)}}setInterval(()=>{te.ws&&te.ws.readyState===1&&te.send({t:"ping",c:performance.now()})},1e3);function Ly(i){switch(i.t){case"error":di(i.msg,!0);break;case"welcome":te.id=i.id,te.code=i.code,history.replaceState(null,"",`?room=${i.code}`+(new URLSearchParams(location.search).get("server")?"&server="+encodeURIComponent(new URLSearchParams(location.search).get("server")):"")),te.inRace||Nn("#screen-lobby");break;case"lobby":te.players=i.players,te.isHost=i.host===te.id,te.code=i.code;for(let e of i.players)te.names.set(e.id,e.name);Dy(i),i.phase==="lobby"&&Y.mode==="online"&&Y.resultsShown&&(Ee("#btn-again").style.display=te.isHost?"":"none",Ee("#res-wait").style.display=te.isHost?"none":"");break;case"pong":{let e=(performance.now()-i.c)/1e3;te.rtt=te.rtt*.8+e*.2;break}case"start":Uy(i);break;case"s":Oy(i);break}}function Dy(i){Ee("#lobby-code").textContent=i.code;let e=`${location.origin}${location.pathname}?room=${i.code}`+(location.protocol.startsWith("http")&&zh()!==location.origin?"&server="+encodeURIComponent(zh()):"");Ee("#lobby-link").value=location.protocol.startsWith("http")?e:`Room code: ${i.code}`,Ee("#lobby-players").innerHTML=i.players.map(t=>`<li>${Ga(t.name)} <small>${Tt[t.char%Tt.length].name}</small>${t.id===i.host?" <b>HOST</b>":""}${t.id===te.id?" (you)":""}</li>`).join(""),Ee("#lobby-start").style.display=te.isHost?"":"none",Ee("#lobby-bots").disabled=!te.isHost,Ee("#lobby-bots").value=i.bots,Ee("#lobby-wait").style.display=te.isHost?"none":"",Ee("#lobby-wait").textContent=i.phase==="lobby"?"Waiting for the host to start\u2026":"A race is in progress \u2014 you will join the next one."}function Uy(i){kh(),Y.mode="online",te.inRace=!0,te.snaps=[],te.offset=null,te.result=null,te.phase="countdown",te.racers=i.racers;for(let t of i.racers)te.names.set(t.id,t.name);let e=xa(i.seed);e.reachBonus=i.reachBonus||0;for(let t of i.racers)ya(e,{id:t.id,name:t.name,char:t.char});Y.race=e,te.me=e.racers.find(t=>t.id===te.id)||null;for(let t of i.racers)pf(t,t.id===te.id?"YOU":t.ai?null:t.name+" \u2605",t.id===te.id?"#ffd34d":"#9fe6ff");Va(te.me?te.id:null,te.me?`YOU \xB7 ROOM ${te.code}`:`SPECTATING \xB7 ROOM ${te.code}`,te.me?rr.solo:null,0,1),te.predicting=!1,Y.resultsShown=!1,Y.resultT=0,Y.acc=0,Nn(null),document.body.classList.add("racing")}function Ny(i){return{id:i[0],x:i[1],y:i[2],z:i[3],q:[i[4],i[5],i[6],i[7]],vx:i[8],vy:i[9],vz:i[10],state:i[11],flags:i[12],meter:i[13],st:i[14],stamina:i[15],charges:i[16]}}function Oy(i){if(!te.inRace)return;let e=performance.now()/1e3,t=i.k/an.TICK,n=e-t;te.offset=te.offset==null?n:Math.min(n,te.offset*.98+n*.02+5e-4),n<te.offset&&(te.offset=n);let s={time:t,racers:new Map(i.r.map(a=>{let l=Ny(a);return[l.id,l]})),c:i.c};for(te.snaps.push(s);te.snaps.length>40;)te.snaps.shift();te.phase=["countdown","race","over"][i.p],te.cd=i.cd,te.raceT=i.rt,i.res&&(te.result=i.res);let r=i.c;te.cheese={x:r[0],y:r[1],z:r[2],q:[r[3],r[4],r[5],r[6]],vx:r[7],vy:r[8],vz:r[9],heldBy:r[10],released:r[11],time:t},i.e&&i.e.length&&xf(i.e);let o=te.me;if(o){let a=s.racers.get(o.id);if(a)if(!(a.state===ie.RUN||a.state===ie.DIVE))te.predicting=!1,Ha(o,a);else if(!te.predicting)te.predicting=!0,Ha(o,a);else{o.state!==a.state&&!(o.state===ie.DIVE&&a.state===ie.RUN&&o.st<.5)&&Ha(o,a);let c=te.rtt*.5+1/an.TICK,h=a.x+a.vx*c,u=a.z+a.vz*c,d=h-o.x,f=u-o.z;Math.hypot(d,f)>4?Ha(o,a):(o.x+=d*.15,o.z+=f*.15,o.vx+=(a.vx-o.vx)*.1,o.vz+=(a.vz-o.vz)*.1),o.meter=a.meter}}}function Ha(i,e){i.x=e.x,i.y=e.y,i.z=e.z,i.vx=e.vx,i.vy=e.vy,i.vz=e.vz,i.state=e.state,i.st=e.st,i.meter=e.meter,i.gy=Fe(i.x,i.z);let t=new Yt().setFromQuaternion(new zt(...e.q),"YXZ");i.heading=t.y}function Fy(i,e){let t=te.snaps;if(!t.length)return null;let n=null,s=null;for(let h=t.length-1;h>=0;h--)if(t[h].time<=e){n=t[h],s=t[h+1]||null;break}n||(n=t[0]);let r=n.racers.get(i);if(!r)return null;let o=s&&s.racers.get(i);if(!o)return r;let a=Math.max(0,Math.min(1,(e-n.time)/(s.time-n.time))),l=new zt(...r.q),c=new zt(...o.q);return l.slerp(c,a),{...o,x:r.x+(o.x-r.x)*a,y:r.y+(o.y-r.y)*a,z:r.z+(o.z-r.z)*a,q:[l.x,l.y,l.z,l.w],vx:r.vx+(o.vx-r.vx)*a,vz:r.vz+(o.vz-r.vz)*a}}var hf=new zt,ka=new Yt;function By(i){return hf.set(i.q[0],i.q[1],i.q[2],i.q[3]),ka.setFromQuaternion(hf,"YXZ"),{x:i.x,y:i.y,z:i.z,vy:i.vy,stamina:i.stamina,yaw:ka.y,pitch:ka.x,roll:ka.z,state:i.state,st:i.st,vx:i.vx,vz:i.vz,meter:i.meter,flags:i.flags,grounded:!!(i.flags&16)}}function zy(i){let e=performance.now()/1e3;if(te.offset==null)return;let t=e-te.offset,n=t-.11,s=Y.views[0],r=null;s&&s.ctrl&&(r=s.ctrl.read()),r&&e-te.lastSend>1/an.TICK&&(te.lastSend=e,te.send({t:"in",i:[r.ax,r.f,r.b,r.d,r.g,r.k,r.j,r.s]}));let o=te.me;if(o&&te.predicting&&r){Y.acc+=i;let m=0,p=Math.ceil(1/an.SUB)+1;for(;Y.acc>=an.SUB&&m<p;)_a(Y.race,o,an.SUB,r,!0),Y.acc-=an.SUB,m++;m>=p&&(Y.acc=0),Y.race.events=[]}let a=[];for(let m of te.racers){let p=Y.racerViews.get(m.id),_;if(o&&m.id===o.id&&te.predicting)_={...gf(o),grounded:o.grounded};else{let y=Fy(m.id,o&&m.id===o.id?t:n);if(!y)continue;_=By(y)}p.apply(_,i,hn),p.lastSp=Math.hypot(_.vx,_.vz),p.lastState=_.state,p.lastGrounded=_.grounded;let b=te.snaps.length?te.snaps[te.snaps.length-1].racers.get(m.id):null;a.push({id:m.id,name:m.name,char:m.char,ai:m.ai,x:_.x,y:_.y,z:_.z,vx:_.vx,vz:_.vz,state:_.state,meter:_.meter,stamina:_.stamina,st:_.st,charges:b?b.charges:2,finished:!!((_.flags|0)&8)})}let l=te.cheese,c=l.heldBy!=null||!l.released?0:Math.min(.3,t-l.time+te.rtt*.5),h=l.x+l.vx*c,u=l.y+l.vy*c,d=l.z+l.vz*c;te.cheeseDisp||(te.cheeseDisp={x:h,y:u,z:d});let f=te.cheeseDisp,g=1-Math.exp(-15*i);if(Math.hypot(h-f.x,d-f.z)>5&&(f.x=h,f.y=u,f.z=d),f.x+=(h-f.x)*g,f.y+=(u-f.y)*g,f.z+=(d-f.z)*g,f.y=Math.max(f.y,Fe(f.x,f.z)+$s*.8),l.heldBy!=null){let m=Y.racerViews.get(l.heldBy);m&&(f.x=m.root.position.x,f.y=m.root.position.y+2.15,f.z=m.root.position.z)}mi.apply(f.x,f.y,f.z,l.q,Fe(f.x,f.z)),Wa=l.heldBy!=null;let x={x:f.x,y:f.y,z:f.z,heldBy:l.heldBy};yf(te.phase,te.cd,te.raceT,a,x),te.phase==="over"&&Mf(te.result,a,i)}var Yn=(()=>{let i=new Rr({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});i.setPixelRatio(1),i.setSize(240,300),i.toneMapping=Ys,i.outputColorSpace=Et,i.shadowMap.enabled=!0;let e=new es;e.add(new Ws(16777215,5601075,1.3));let t=new Xs(16773341,2.2);t.position.set(2,4,3),t.castShadow=!0,e.add(t);let n=new $e(new Vs(.9,32),new ht({color:5934901}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,e.add(n);let s=new kt(32,240/300,.1,50);return s.position.set(0,1.3,5.2),s.lookAt(0,1.05,0),{r:i,sc:e,cam:s,models:[]}})(),zi=[];function Hy(i){let e=Ee("#select-panels");e.innerHTML="",zi.length=0;for(let t of Yn.models)Yn.sc.remove(t.root);Yn.models=[];for(let t=0;t<i;t++){let n=document.createElement("div");n.className="sel-panel",n.innerHTML=`<div class="sel-title">${i>1?"PLAYER "+(t+1)+(t?" <small>(\u25C0 \u25B6 arrows)</small>":" <small>(A / D)</small>"):"CHOOSE YOUR RUNNER"}</div>
      <canvas width="240" height="300"></canvas>
      <div class="sel-row"><button class="sel-prev">\u25C0</button><div class="sel-name"></div><button class="sel-next">\u25B6</button></div>
      <div class="sel-note">Cosmetic only \u2014 every runner handles the same.</div>`,e.appendChild(n);let s={i:t,el:n,ctx:n.querySelector("canvas").getContext("2d"),name:n.querySelector(".sel-name"),model:null};n.querySelector(".sel-prev").onclick=()=>Bi(t,-1),n.querySelector(".sel-next").onclick=()=>Bi(t,1),zi.push(s),bf(s)}}function bf(i){i.model&&Yn.sc.remove(i.model.root),i.model=Lh(Y.chars[i.i]),i.view={m:i.model},i.name.textContent=Tt[Y.chars[i.i]].name}function Bi(i,e){Y.chars[i]=(Y.chars[i]+e+Tt.length)%Tt.length,bf(zi[i]);try{localStorage.setItem("cc-chars",JSON.stringify(Y.chars))}catch{}}function ky(i){for(let e of zi){Yn.sc.add(e.model.root),e.model.root.rotation.y=i*.9+e.i;let t=e.model.limbs,n=i*6+e.i;e.model.body.position.y=.95+Math.abs(Math.sin(n))*.03,t.shL.rotation.x=Math.sin(n)*.4,t.shR.rotation.x=-Math.sin(n)*.4,t.elL.rotation.x=t.elR.rotation.x=-.6,t.hipL.rotation.x=-Math.sin(n)*.15,t.hipR.rotation.x=Math.sin(n)*.15,e.model.cape&&(e.model.cape.rotation.x=-.25+Math.sin(i*3)*.1),Yn.r.render(Yn.sc,Yn.cam),e.ctx.clearRect(0,0,240,300),e.ctx.drawImage(Yn.r.domElement,0,0),Yn.sc.remove(e.model.root)}}var Hh="solo";function Nn(i){for(let e of document.querySelectorAll(".screen"))e.classList.remove("show");i&&Ee(i).classList.add("show"),Y.screen=i}function Kr(){te.close(),kh(),Y.mode=null,Y.race=null,Y.match=null,document.body.classList.remove("racing"),Ee("#countdown").className="",Ee("#progress").innerHTML="",history.replaceState(null,"",location.pathname+(new URLSearchParams(location.search).get("server")?"?server="+encodeURIComponent(new URLSearchParams(location.search).get("server")):"")),Nn("#screen-menu")}function ls(i){Hh=i,Hy(i==="split"?2:1),Ee("#select-go").textContent=i==="online"?"NEXT: ONLINE \u25B6":"START RACE \u25B6",Ee("#select-mode").textContent={solo:"Solo vs AI",split:"Local 2-Player Split-screen",online:"Online Multiplayer"}[i],Nn("#screen-select")}function Ef(){if(Hh==="online"){Nn("#screen-online");return}Gh(Hh)}function Vy(i){let e=Y.screen;i.target&&i.target.tagName==="INPUT"||(e==="#screen-select"?(i.code==="KeyA"&&Bi(0,-1),i.code==="KeyD"&&Bi(0,1),zi.length>1&&i.code==="ArrowLeft"&&Bi(1,-1),zi.length>1&&i.code==="ArrowRight"&&Bi(1,1),zi.length===1&&i.code==="ArrowLeft"&&Bi(0,-1),zi.length===1&&i.code==="ArrowRight"&&Bi(0,1),(i.code==="Enter"||i.code==="Space")&&(i.preventDefault(),Ef()),i.code==="Escape"&&Nn("#screen-menu")):e==="#screen-menu"?(i.code==="Digit1"&&ls("solo"),i.code==="Digit2"&&ls("split"),i.code==="Digit3"&&ls("online")):e==="#screen-results"?(i.code==="KeyR"&&wf(),i.code==="Escape"&&Kr()):Y.mode&&!e&&(i.code==="Escape"&&Kr(),i.code==="KeyR"&&Y.mode!=="online"&&Y.race&&Y.race.phase!=="countdown"&&i.shiftKey&&(Y.match.heat--,Gh(Y.mode,!0))))}function wf(){Y.mode==="online"?te.isHost&&te.send({t:"start",bots:+Ee("#lobby-bots").value}):Y.mode&&Gh(Y.mode,!0)}Ee("#btn-solo").onclick=()=>ls("solo");Ee("#btn-split").onclick=()=>ls("split");Ee("#btn-online").onclick=()=>ls("online");Ee("#select-go").onclick=Ef;Ee("#select-back").onclick=()=>Nn("#screen-menu");Ee("#online-create").onclick=()=>Sf(!0);Ee("#online-join").onclick=()=>Sf(!1);Ee("#online-back").onclick=()=>{te.close(),Nn("#screen-menu")};Ee("#lobby-start").onclick=()=>te.send({t:"start",bots:+Ee("#lobby-bots").value});Ee("#lobby-bots").onchange=()=>te.send({t:"bots",bots:+Ee("#lobby-bots").value});Ee("#lobby-leave").onclick=()=>Kr();Ee("#lobby-copy").onclick=()=>{let i=Ee("#lobby-link");i.select();try{navigator.clipboard.writeText(i.value)}catch{document.execCommand("copy")}};Ee("#btn-again").onclick=wf;Ee("#btn-menu").onclick=Kr;try{Ee("#player-name").value=localStorage.getItem("cc-name")||"";let i=JSON.parse(localStorage.getItem("cc-chars")||"null");Array.isArray(i)&&i.length===2&&(Y.chars=i.map(e=>(e|0)%Tt.length))}catch{}var Tf="";try{Tf=localStorage.getItem("cc-server")||""}catch{}Ee("#server-url").value=zh()||Tf;{let i=new URLSearchParams(location.search).get("room");i?(Ee("#room-code").value=i.toUpperCase(),ls("online")):Nn("#screen-menu")}location.protocol==="file:"&&(Ee("#online-note").textContent="Opened from a file: enter the address of a running Cheese Chase server (e.g. https://your-app.onrender.com or http://localhost:8797).");function Gy(){vt.setSize(innerWidth,innerHeight),Hi.composer.setPixelRatio(vt.getPixelRatio()),Hi.composer.setSize(innerWidth,innerHeight),fi.aspect=innerWidth/innerHeight,fi.updateProjectionMatrix()}addEventListener("resize",Gy);var uf=new qs,or=2,Oh=performance.now(),Fh=0,Yr=0,df=["Low","Medium","High"];function Af(){try{let i=vt.getContext(),e=i.getExtension("WEBGL_debug_renderer_info");return String(e?i.getParameter(e.UNMASKED_RENDERER_WEBGL):i.getParameter(i.RENDERER))}catch{return""}}var Rf=/swiftshader|llvmpipe|softpipe|software|basic render|mesa offscreen|lavapipe/i.test(Af());function Cf(i){or=i,vt.setPixelRatio(i>=2?Math.min(devicePixelRatio,2):i===1?Math.min(devicePixelRatio,1):Math.min(.7,devicePixelRatio)),Ut.tufts.count=i>=2?Ut.tuftsMax:Math.floor(i===1?Ut.tuftsMax*.6:Ut.tuftsMax*.25),Ut.setDetail(i>=2?1:i===1?.7:.4),hn.density=i>=2?1:i===1?.7:.35,Ut.sun.castShadow=i>0;let e=i>=2?2048:1024;Ut.sun.shadow.mapSize.x!==e&&(Ut.sun.shadow.mapSize.set(e,e),Ut.sun.shadow.map&&(Ut.sun.shadow.map.dispose(),Ut.sun.shadow.map=null)),vt.setSize(innerWidth,innerHeight),Hi.composer.setPixelRatio(vt.getPixelRatio()),Hi.composer.setSize(innerWidth,innerHeight),Wy()}var gi="auto";{let i={low:0,medium:1,med:1,high:2,auto:"auto",0:0,1:1,2:2},e=new URLSearchParams(location.search).get("quality"),t=null;try{t=localStorage.getItem("cc-quality")}catch{}gi=e!=null&&e in i?i[e]:t!=null&&t in i?i[t]:"auto"}function Wy(){let i=document.getElementById("btn-quality");i&&(i.textContent=`Graphics: ${gi==="auto"?`Auto (${df[or]})`:df[or]}`)}function Pf(){Cf(gi==="auto"?Rf?0:2:gi),Yr=0}new URLSearchParams(location.search).get("post")==="0"&&(Hi.enabled=!1);Pf();{let i=document.getElementById("btn-quality");i&&(i.onclick=()=>{let e=["auto",0,1,2];gi=e[(e.indexOf(gi)+1)%e.length];try{localStorage.setItem("cc-quality",String(gi))}catch{}Pf()})}window.__ccQuality=()=>({quality:or,mode:gi,software:Rf,renderer:Af()});function If(){requestAnimationFrame(If);let i=Math.min(1,uf.getDelta()),e=uf.elapsedTime;Fh++;let t=performance.now();if(t-Oh>500){let r=(t-Oh)/1e3;window.__cc.fps=Fh/r,Oh=t,Fh=0,gi==="auto"&&Y.mode&&!document.hidden&&or>0&&(Yr=window.__cc.fps<25?Yr+r:0,Yr>=2&&(Cf(0),Yr=0))}try{Y.mode==="online"?zy(i):Y.mode&&mf(i)}catch(r){console.error(r)}hn.update(i),Ut.update(e);let n=innerWidth,s=innerHeight;if(Y.mode&&Y.views.length){let r=Y.mode==="online"?te.phase:Y.race.phase,o=Y.views[0].camPos?Y.views[0].camPos.z:0;Ut.updateCrowd(e,o+10,r!=="countdown"),vt.setScissorTest(Y.views.length>1),Iy(e);{let a=Y.racerViews.get(Y.views[0].racerId),l=a&&a.lastSp||0;if(en.update(l,r==="over"?1:Math.min(1,Math.max(0,(a?a.root.position.z:0)/Mn)),r!=="countdown"),a&&a.lastState===ie.RUN&&a.lastGrounded&&l>1&&(Y.stepPh=(Y.stepPh||0)+i*(1.6+l*.2),Y.stepPh>=1)){Y.stepPh-=1,en.step(Math.min(1.5,.5+l/14));let c=a.root.position;l>8&&hn.kick(c.x,c.y,c.z,0,1,2)}}for(let a of Y.views)_f(a,i,r);vf();for(let a of Y.views){Py(a);let l=n/a.n,c=a.idx*l;a.cam.aspect=l/s,a.cam.updateProjectionMatrix(),Ut.placeSun(a.look),Ut.sky.position.copy(a.cam.position),Y.views.length===1?(vt.setViewport(0,0,n,s),nf(a.cam)):(vt.setViewport(c,0,l,s),vt.setScissor(c,0,l,s),vt.render(Sn,a.cam))}vt.setScissorTest(!1)}else{qn.sp.visible=qn.pin.visible=mi.beam.visible=!1,en.update(0,0,!1);let r=40+e*6%(Mn-40);if(window.__cc&&window.__cc.lineupCam){let o=window.__cc.lineupCam;fi.position.set(...o[0]),fi.lookAt(...o[1])}else fi.position.set(26+Math.sin(e*.1)*6,Fe(0,r-20)+16,r-20),fi.lookAt(0,Fe(0,r+25),r+25);Ut.placeSun(new C(0,Fe(0,r),r)),Ut.sky.position.copy(fi.position),Ut.updateCrowd(e,r,!0),vt.setViewport(0,0,n,s),nf(fi),Y.screen==="#screen-select"&&ky(e)}}window.__cc={game:Y,online:te,Core:Rh,world:Ut,scene:Sn,fps:0,fadeBlockers:vf,lineup(){let i=[];for(let e=0;e<Tt.length;e++){let t=(e-(Tt.length-1)/2)*1.25,n=-2,s=new kr(Sn,{id:"L"+e,char:e},null);s.apply({x:t,y:Fe(t,n),z:n,yaw:e%2?.3:-.3,pitch:0,roll:0,state:ie.IDLE,st:0,vx:0,vz:0,flags:0,grounded:!0},.016,null);for(let r=0;r<60;r++)s.apply({x:t,y:Fe(t,n),z:n,yaw:e%2?.3:-.3,pitch:0,roll:0,state:ie.IDLE,st:0,vx:0,vz:0,flags:0,grounded:!0},.03,null);i.push(s)}return this.lineupCam=[[0,Fe(0,-2)+1.6,4.6],[0,Fe(0,-2)+.95,-2]],i.length},advance(i){for(let e=0;e<i*60;e++){if(Y.mode&&Y.mode!=="online"){mf(1/60);for(let t of Y.views)_f(t,1/60,Y.race.phase)}hn.update(1/60)}}};If();})();
