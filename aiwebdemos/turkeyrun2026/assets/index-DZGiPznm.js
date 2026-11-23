var Gl=n=>{throw TypeError(n)};var Hl=(n,t,e)=>t.has(n)||Gl("Cannot "+e);var cr=(n,t,e)=>(Hl(n,t,"read from private field"),e?e.call(n):t.get(n)),ei=(n,t,e)=>t.has(n)?Gl("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,e);var V=(n,t,e)=>(Hl(n,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const ll="183",Yu=0,Vl=1,Zu=2,Ks=1,$u=2,Xs=3,Sn=0,di=1,qe=2,en=0,xs=1,Kr=2,Wl=3,Xl=4,Ku=5,Bn=100,Ju=101,ju=102,Qu=103,td=104,ed=200,id=201,nd=202,sd=203,no=204,so=205,rd=206,ad=207,od=208,ld=209,cd=210,hd=211,ud=212,dd=213,fd=214,ro=0,ao=1,oo=2,vs=3,lo=4,co=5,ho=6,uo=7,cl=0,pd=1,md=2,Bi=0,ih=1,nh=2,sh=3,hl=4,rh=5,ah=6,oh=7,lh=300,Vn=301,Ss=302,_a=303,va=304,ha=306,fo=1e3,ji=1001,po=1002,Qe=1003,gd=1004,hr=1005,li=1006,Sa=1007,kn=1008,xi=1009,ch=1010,hh=1011,Qs=1012,ul=1013,ki=1014,Ci=1015,rn=1016,dl=1017,fl=1018,tr=1020,uh=35902,dh=35899,fh=1021,ph=1022,Ri=1023,an=1026,Gn=1027,pl=1028,ml=1029,Ms=1030,gl=1031,xl=1033,Hr=33776,Vr=33777,Wr=33778,Xr=33779,mo=35840,go=35841,xo=35842,_o=35843,vo=36196,So=37492,Mo=37496,yo=37488,Eo=37489,bo=37490,To=37491,wo=37808,Ao=37809,Co=37810,Ro=37811,Po=37812,Lo=37813,Io=37814,Do=37815,No=37816,Uo=37817,Fo=37818,Oo=37819,Bo=37820,zo=37821,ko=36492,Go=36494,Ho=36495,Vo=36283,Wo=36284,Xo=36285,qo=36286,xd=3200,mh=0,_d=1,gn="",oi="srgb",ys="srgb-linear",Jr="linear",me="srgb",Zn=7680,ql=519,vd=512,Sd=513,Md=514,_l=515,yd=516,Ed=517,vl=518,bd=519,Yo=35044,Yl=35048,Zl="300 es",Oi=2e3,er=2001;function Td(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function jr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function wd(){const n=jr("canvas");return n.style.display="block",n}const $l={};function Qr(...n){const t="THREE."+n.shift();console.log(t,...n)}function gh(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Wt(...n){n=gh(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function se(...n){n=gh(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function ta(...n){const t=n.join(" ");t in $l||($l[t]=!0,Wt(...n))}function Ad(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const Cd={[ro]:ao,[oo]:ho,[lo]:uo,[vs]:co,[ao]:ro,[ho]:oo,[uo]:lo,[co]:vs};class Rs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const ii=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ma=Math.PI/180,Zo=180/Math.PI;function nn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ii[n&255]+ii[n>>8&255]+ii[n>>16&255]+ii[n>>24&255]+"-"+ii[t&255]+ii[t>>8&255]+"-"+ii[t>>16&15|64]+ii[t>>24&255]+"-"+ii[e&63|128]+ii[e>>8&255]+"-"+ii[e>>16&255]+ii[e>>24&255]+ii[i&255]+ii[i>>8&255]+ii[i>>16&255]+ii[i>>24&255]).toLowerCase()}function ee(n,t,e){return Math.max(t,Math.min(e,n))}function Rd(n,t){return(n%t+t)%t}function ya(n,t,e){return(1-e)*n+e*t}function Fi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Se(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class st{constructor(t=0,e=0){st.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ps{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(d!==v||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*v;m<0&&(u=-u,f=-f,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){const _=Math.acos(m),y=Math.sin(_);p=Math.sin(p*_)/y,o=Math.sin(o*_)/y,l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+v*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+v*o;const _=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=_,c*=_,h*=_,d*=_}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),u=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Wt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ee(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,i=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Kl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Kl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),d=2*(r*i-a*e);return this.x=e+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ea.copy(this).projectOnVector(t),this.sub(Ea)}reflect(t){return this.sub(Ea.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ea=new L,Kl=new Ps;class $t{constructor(t,e,i,s,r,a,o,l,c){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],v=s[0],m=s[3],p=s[6],_=s[1],y=s[4],M=s[7],C=s[2],w=s[5],P=s[8];return r[0]=a*v+o*_+l*C,r[3]=a*m+o*y+l*w,r[6]=a*p+o*M+l*P,r[1]=c*v+h*_+d*C,r[4]=c*m+h*y+d*w,r[7]=c*p+h*M+d*P,r[2]=u*v+f*_+g*C,r[5]=u*m+f*y+g*w,r[8]=u*p+f*M+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=e*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(s*c-h*i)*v,t[2]=(o*i-s*a)*v,t[3]=u*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=f*v,t[7]=(i*l-c*e)*v,t[8]=(a*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ba.makeScale(t,e)),this}rotate(t){return this.premultiply(ba.makeRotation(-t)),this}translate(t,e){return this.premultiply(ba.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ba=new $t,Jl=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jl=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pd(){const n={enabled:!0,workingColorSpace:ys,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===me&&(s.r=sn(s.r),s.g=sn(s.g),s.b=sn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===me&&(s.r=_s(s.r),s.g=_s(s.g),s.b=_s(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gn?Jr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ta("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ta("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ys]:{primaries:t,whitePoint:i,transfer:Jr,toXYZ:Jl,fromXYZ:jl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:t,whitePoint:i,transfer:me,toXYZ:Jl,fromXYZ:jl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),n}const ae=Pd();function sn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _s(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let $n;class Ld{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{$n===void 0&&($n=jr("canvas")),$n.width=t.width,$n.height=t.height;const s=$n.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=$n}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=jr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=sn(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(sn(e[i]/255)*255):e[i]=sn(e[i]);return{data:e,width:t.width,height:t.height}}else return Wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Id=0;class Sl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=nn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ta(s[a].image)):r.push(Ta(s[a]))}else r=Ta(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Ta(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ld.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Wt("Texture: Unable to serialize Texture."),{})}let Dd=0;const wa=new L;class ci extends Rs{constructor(t=ci.DEFAULT_IMAGE,e=ci.DEFAULT_MAPPING,i=ji,s=ji,r=li,a=kn,o=Ri,l=xi,c=ci.DEFAULT_ANISOTROPY,h=gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=nn(),this.name="",this.source=new Sl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wa).x}get height(){return this.source.getSize(wa).y}get depth(){return this.source.getSize(wa).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Wt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fo:t.x=t.x-Math.floor(t.x);break;case ji:t.x=t.x<0?0:1;break;case po:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fo:t.y=t.y-Math.floor(t.y);break;case ji:t.y=t.y<0?0:1;break;case po:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ci.DEFAULT_IMAGE=null;ci.DEFAULT_MAPPING=lh;ci.DEFAULT_ANISOTROPY=1;class Ne{constructor(t=0,e=0,i=0,s=1){Ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,M=(f+1)/2,C=(p+1)/2,w=(h+u)/4,P=(d+v)/4,S=(g+m)/4;return y>M&&y>C?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=w/i,r=P/i):M>C?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=w/s,r=S/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=P/r,s=S/r),this.set(i,s,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-v)/_,this.z=(u-h)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this.w=ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this.w=ee(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nd extends Rs{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:i.depth},r=new ci(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:li,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Sl(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends Nd{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class xh extends ci{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ud extends ci{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ce{constructor(t,e,i,s,r,a,o,l,c,h,d,u,f,g,v,m){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,d,u,f,g,v,m)}set(t,e,i,s,r,a,o,l,c,h,d,u,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,s=1/Kn.setFromMatrixColumn(t,0).length(),r=1/Kn.setFromMatrixColumn(t,1).length(),a=1/Kn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,f=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-v*c,e[9]=-o*l,e[2]=v-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u+v*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=v+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u-v*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=v-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,f=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-v*d}else if(t.order==="XZY"){const u=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fd,t,Od)}lookAt(t,e,i){const s=this.elements;return pi.subVectors(t,e),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),cn.crossVectors(i,pi),cn.lengthSq()===0&&(Math.abs(i.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),cn.crossVectors(i,pi)),cn.normalize(),ur.crossVectors(pi,cn),s[0]=cn.x,s[4]=ur.x,s[8]=pi.x,s[1]=cn.y,s[5]=ur.y,s[9]=pi.y,s[2]=cn.z,s[6]=ur.z,s[10]=pi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],_=i[3],y=i[7],M=i[11],C=i[15],w=s[0],P=s[4],S=s[8],b=s[12],B=s[1],R=s[5],F=s[9],k=s[13],X=s[2],O=s[6],H=s[10],U=s[14],nt=s[3],Q=s[7],gt=s[11],_t=s[15];return r[0]=a*w+o*B+l*X+c*nt,r[4]=a*P+o*R+l*O+c*Q,r[8]=a*S+o*F+l*H+c*gt,r[12]=a*b+o*k+l*U+c*_t,r[1]=h*w+d*B+u*X+f*nt,r[5]=h*P+d*R+u*O+f*Q,r[9]=h*S+d*F+u*H+f*gt,r[13]=h*b+d*k+u*U+f*_t,r[2]=g*w+v*B+m*X+p*nt,r[6]=g*P+v*R+m*O+p*Q,r[10]=g*S+v*F+m*H+p*gt,r[14]=g*b+v*k+m*U+p*_t,r[3]=_*w+y*B+M*X+C*nt,r[7]=_*P+y*R+M*O+C*Q,r[11]=_*S+y*F+M*H+C*gt,r[15]=_*b+y*k+M*U+C*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15],_=l*f-c*u,y=o*f-c*d,M=o*u-l*d,C=a*f-c*h,w=a*u-l*h,P=a*d-o*h;return e*(v*_-m*y+p*M)-i*(g*_-m*C+p*w)+s*(g*y-v*C+p*P)-r*(g*M-v*w+m*P)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],_=e*o-i*a,y=e*l-s*a,M=e*c-r*a,C=i*l-s*o,w=i*c-r*o,P=s*c-r*l,S=h*v-d*g,b=h*m-u*g,B=h*p-f*g,R=d*m-u*v,F=d*p-f*v,k=u*p-f*m,X=_*k-y*F+M*R+C*B-w*b+P*S;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/X;return t[0]=(o*k-l*F+c*R)*O,t[1]=(s*F-i*k-r*R)*O,t[2]=(v*P-m*w+p*C)*O,t[3]=(u*w-d*P-f*C)*O,t[4]=(l*B-a*k-c*b)*O,t[5]=(e*k-s*B+r*b)*O,t[6]=(m*M-g*P-p*y)*O,t[7]=(h*P-u*M+f*y)*O,t[8]=(a*F-o*B+c*S)*O,t[9]=(i*B-e*F-r*S)*O,t[10]=(g*w-v*M+p*_)*O,t[11]=(d*M-h*w-f*_)*O,t[12]=(o*b-a*R-l*S)*O,t[13]=(e*R-i*b+s*S)*O,t[14]=(v*y-g*C-m*_)*O,t[15]=(h*C-d*y+u*_)*O,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,v=a*h,m=a*d,p=o*d,_=l*c,y=l*h,M=l*d,C=i.x,w=i.y,P=i.z;return s[0]=(1-(v+p))*C,s[1]=(f+M)*C,s[2]=(g-y)*C,s[3]=0,s[4]=(f-M)*w,s[5]=(1-(u+p))*w,s[6]=(m+_)*w,s[7]=0,s[8]=(g+y)*P,s[9]=(m-_)*P,s[10]=(1-(u+v))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),e.identity(),this;let a=Kn.set(s[0],s[1],s[2]).length();const o=Kn.set(s[4],s[5],s[6]).length(),l=Kn.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Ei.copy(this);const c=1/a,h=1/o,d=1/l;return Ei.elements[0]*=c,Ei.elements[1]*=c,Ei.elements[2]*=c,Ei.elements[4]*=h,Ei.elements[5]*=h,Ei.elements[6]*=h,Ei.elements[8]*=d,Ei.elements[9]*=d,Ei.elements[10]*=d,e.setFromRotationMatrix(Ei),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=Oi,l=!1){const c=this.elements,h=2*r/(e-t),d=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s);let g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===Oi)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===er)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Oi,l=!1){const c=this.elements,h=2/(e-t),d=2/(i-s),u=-(e+t)/(e-t),f=-(i+s)/(i-s);let g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===Oi)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===er)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Kn=new L,Ei=new ce,Fd=new L(0,0,0),Od=new L(1,1,1),cn=new L,ur=new L,pi=new L,Ql=new ce,tc=new Ps;class Gi{constructor(t=0,e=0,i=0,s=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ee(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ql.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ql,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tc.setFromEuler(this),this.setFromQuaternion(tc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class _h{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Bd=0;const ec=new L,Jn=new Ps,qi=new ce,dr=new L,Ds=new L,zd=new L,kd=new Ps,ic=new L(1,0,0),nc=new L(0,1,0),sc=new L(0,0,1),rc={type:"added"},Gd={type:"removed"},jn={type:"childadded",child:null},Aa={type:"childremoved",child:null};class ke extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ke.DEFAULT_UP.clone();const t=new L,e=new Gi,i=new Ps,s=new L(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new $t}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=ke.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _h,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Jn.setFromAxisAngle(t,e),this.quaternion.multiply(Jn),this}rotateOnWorldAxis(t,e){return Jn.setFromAxisAngle(t,e),this.quaternion.premultiply(Jn),this}rotateX(t){return this.rotateOnAxis(ic,t)}rotateY(t){return this.rotateOnAxis(nc,t)}rotateZ(t){return this.rotateOnAxis(sc,t)}translateOnAxis(t,e){return ec.copy(t).applyQuaternion(this.quaternion),this.position.add(ec.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ic,t)}translateY(t){return this.translateOnAxis(nc,t)}translateZ(t){return this.translateOnAxis(sc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?dr.copy(t):dr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(Ds,dr,this.up):qi.lookAt(dr,Ds,this.up),this.quaternion.setFromRotationMatrix(qi),s&&(qi.extractRotation(s.matrixWorld),Jn.setFromRotationMatrix(qi),this.quaternion.premultiply(Jn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(se("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rc),jn.child=t,this.dispatchEvent(jn),jn.child=null):se("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gd),Aa.child=t,this.dispatchEvent(Aa),Aa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rc),jn.child=t,this.dispatchEvent(jn),jn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,t,zd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,kd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}ke.DEFAULT_UP=new L(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ie extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hd={type:"move"};class Ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ie;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hn={h:0,s:0,l:0},fr={h:0,s:0,l:0};function Ra(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Gt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=oi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=i,ae.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ae.workingColorSpace){if(t=Rd(t,1),e=ee(e,0,1),i=ee(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Ra(a,r,t+1/3),this.g=Ra(a,r,t),this.b=Ra(a,r,t-1/3)}return ae.colorSpaceToWorking(this,s),this}setStyle(t,e=oi){function i(r){r!==void 0&&parseFloat(r)<1&&Wt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Wt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=oi){const i=vh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=sn(t.r),this.g=sn(t.g),this.b=sn(t.b),this}copyLinearToSRGB(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=oi){return ae.workingToColorSpace(ni.copy(this),t),Math.round(ee(ni.r*255,0,255))*65536+Math.round(ee(ni.g*255,0,255))*256+Math.round(ee(ni.b*255,0,255))}getHexString(t=oi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(ni.copy(this),e);const i=ni.r,s=ni.g,r=ni.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(ni.copy(this),e),t.r=ni.r,t.g=ni.g,t.b=ni.b,t}getStyle(t=oi){ae.workingToColorSpace(ni.copy(this),t);const e=ni.r,i=ni.g,s=ni.b;return t!==oi?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(hn),this.setHSL(hn.h+t,hn.s+e,hn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(hn),t.getHSL(fr);const i=ya(hn.h,fr.h,e),s=ya(hn.s,fr.s,e),r=ya(hn.l,fr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ni=new Gt;Gt.NAMES=vh;class Ml{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=e,this.far=i}clone(){return new Ml(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Vd extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const bi=new L,Yi=new L,Pa=new L,Zi=new L,Qn=new L,ts=new L,ac=new L,La=new L,Ia=new L,Da=new L,Na=new Ne,Ua=new Ne,Fa=new Ne;class Mi{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),bi.subVectors(t,e),s.cross(bi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){bi.subVectors(s,e),Yi.subVectors(i,e),Pa.subVectors(t,e);const a=bi.dot(bi),o=bi.dot(Yi),l=bi.dot(Pa),c=Yi.dot(Yi),h=Yi.dot(Pa),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zi.x),l.addScaledVector(a,Zi.y),l.addScaledVector(o,Zi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return Na.setScalar(0),Ua.setScalar(0),Fa.setScalar(0),Na.fromBufferAttribute(t,e),Ua.fromBufferAttribute(t,i),Fa.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Na,r.x),a.addScaledVector(Ua,r.y),a.addScaledVector(Fa,r.z),a}static isFrontFacing(t,e,i,s){return bi.subVectors(i,e),Yi.subVectors(t,e),bi.cross(Yi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),bi.cross(Yi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Mi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Mi.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;Qn.subVectors(s,i),ts.subVectors(r,i),La.subVectors(t,i);const l=Qn.dot(La),c=ts.dot(La);if(l<=0&&c<=0)return e.copy(i);Ia.subVectors(t,s);const h=Qn.dot(Ia),d=ts.dot(Ia);if(h>=0&&d<=h)return e.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(Qn,a);Da.subVectors(t,r);const f=Qn.dot(Da),g=ts.dot(Da);if(g>=0&&f<=g)return e.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(ts,o);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return ac.subVectors(r,s),o=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(ac,o);const p=1/(m+v+u);return a=v*p,o=u*p,e.copy(i).addScaledVector(Qn,a).addScaledVector(ts,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Xn{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ti.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ti.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ti.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ti):Ti.fromBufferAttribute(r,a),Ti.applyMatrix4(t.matrixWorld),this.expandByPoint(Ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pr.copy(i.boundingBox)),pr.applyMatrix4(t.matrixWorld),this.union(pr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ti),Ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ns),mr.subVectors(this.max,Ns),es.subVectors(t.a,Ns),is.subVectors(t.b,Ns),ns.subVectors(t.c,Ns),un.subVectors(is,es),dn.subVectors(ns,is),bn.subVectors(es,ns);let e=[0,-un.z,un.y,0,-dn.z,dn.y,0,-bn.z,bn.y,un.z,0,-un.x,dn.z,0,-dn.x,bn.z,0,-bn.x,-un.y,un.x,0,-dn.y,dn.x,0,-bn.y,bn.x,0];return!Oa(e,es,is,ns,mr)||(e=[1,0,0,0,1,0,0,0,1],!Oa(e,es,is,ns,mr))?!1:(gr.crossVectors(un,dn),e=[gr.x,gr.y,gr.z],Oa(e,es,is,ns,mr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const $i=[new L,new L,new L,new L,new L,new L,new L,new L],Ti=new L,pr=new Xn,es=new L,is=new L,ns=new L,un=new L,dn=new L,bn=new L,Ns=new L,mr=new L,gr=new L,Tn=new L;function Oa(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Tn.fromArray(n,r);const o=s.x*Math.abs(Tn.x)+s.y*Math.abs(Tn.y)+s.z*Math.abs(Tn.z),l=t.dot(Tn),c=e.dot(Tn),h=i.dot(Tn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Be=new L,xr=new st;let Wd=0;class vi{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Yo,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)xr.fromBufferAttribute(this,e),xr.applyMatrix3(t),this.setXY(e,xr.x,xr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Fi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Se(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),i=Se(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),i=Se(i,this.array),s=Se(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),i=Se(i,this.array),s=Se(s,this.array),r=Se(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Yo&&(t.usage=this.usage),t}}class Sh extends vi{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Mh extends vi{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class oe extends vi{constructor(t,e,i){super(new Float32Array(t),e,i)}}const Xd=new Xn,Us=new L,Ba=new L;class ar{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Xd.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Us.subVectors(t,this.center);const e=Us.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Us,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ba.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Us.copy(t.center).add(Ba)),this.expandByPoint(Us.copy(t.center).sub(Ba))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let qd=0;const Si=new ce,za=new ke,ss=new L,mi=new Xn,Fs=new Xn,Xe=new L;class Ve extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=nn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Td(t)?Mh:Sh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new $t().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Si.makeRotationFromQuaternion(t),this.applyMatrix4(Si),this}rotateX(t){return Si.makeRotationX(t),this.applyMatrix4(Si),this}rotateY(t){return Si.makeRotationY(t),this.applyMatrix4(Si),this}rotateZ(t){return Si.makeRotationZ(t),this.applyMatrix4(Si),this}translate(t,e,i){return Si.makeTranslation(t,e,i),this.applyMatrix4(Si),this}scale(t,e,i){return Si.makeScale(t,e,i),this.applyMatrix4(Si),this}lookAt(t){return za.lookAt(t),za.updateMatrix(),this.applyMatrix4(za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new oe(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];mi.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&se('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ar);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const i=this.boundingSphere.center;if(mi.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Fs.setFromBufferAttribute(o),this.morphTargetsRelative?(Xe.addVectors(mi.min,Fs.min),mi.expandByPoint(Xe),Xe.addVectors(mi.max,Fs.max),mi.expandByPoint(Xe)):(mi.expandByPoint(Fs.min),mi.expandByPoint(Fs.max))}mi.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Xe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Xe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Xe.fromBufferAttribute(o,c),l&&(ss.fromBufferAttribute(t,c),Xe.add(ss)),s=Math.max(s,i.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&se('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){se("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let S=0;S<i.count;S++)o[S]=new L,l[S]=new L;const c=new L,h=new L,d=new L,u=new st,f=new st,g=new st,v=new L,m=new L;function p(S,b,B){c.fromBufferAttribute(i,S),h.fromBufferAttribute(i,b),d.fromBufferAttribute(i,B),u.fromBufferAttribute(r,S),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,B),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(R),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(R),o[S].add(v),o[b].add(v),o[B].add(v),l[S].add(m),l[b].add(m),l[B].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let S=0,b=_.length;S<b;++S){const B=_[S],R=B.start,F=B.count;for(let k=R,X=R+F;k<X;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const y=new L,M=new L,C=new L,w=new L;function P(S){C.fromBufferAttribute(s,S),w.copy(C);const b=o[S];y.copy(b),y.sub(C.multiplyScalar(C.dot(b))).normalize(),M.crossVectors(w,b);const R=M.dot(l[S])<0?-1:1;a.setXYZW(S,y.x,y.y,y.z,R)}for(let S=0,b=_.length;S<b;++S){const B=_[S],R=B.start,F=B.count;for(let k=R,X=R+F;k<X;k+=3)P(t.getX(k+0)),P(t.getX(k+1)),P(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,d=new L;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new vi(u,h,d)}if(this.index===null)return Wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ve,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Yo,this.updateRanges=[],this.version=0,this.uuid=nn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const hi=new L;class ea{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)hi.fromBufferAttribute(this,e),hi.applyMatrix4(t),this.setXYZ(e,hi.x,hi.y,hi.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)hi.fromBufferAttribute(this,e),hi.applyNormalMatrix(t),this.setXYZ(e,hi.x,hi.y,hi.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)hi.fromBufferAttribute(this,e),hi.transformDirection(t),this.setXYZ(e,hi.x,hi.y,hi.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Fi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Se(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Fi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Fi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Fi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Fi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),i=Se(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),i=Se(i,this.array),s=Se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),i=Se(i,this.array),s=Se(s,this.array),r=Se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Qr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new vi(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ea(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Qr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Zd=0;class Ls extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=nn(),this.name="",this.type="Material",this.blending=xs,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=no,this.blendDst=so,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ql,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zn,this.stencilZFail=Zn,this.stencilZPass=Zn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Wt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(i.blending=this.blending),this.side!==Sn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==no&&(i.blendSrc=this.blendSrc),this.blendDst!==so&&(i.blendDst=this.blendDst),this.blendEquation!==Bn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ql&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ia extends Ls{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let rs;const Os=new L,as=new L,os=new L,ls=new st,Bs=new st,yh=new ce,_r=new L,zs=new L,vr=new L,oc=new st,ka=new st,lc=new st;class $o extends ke{constructor(t=new ia){if(super(),this.isSprite=!0,this.type="Sprite",rs===void 0){rs=new Ve;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Yd(e,5);rs.setIndex([0,1,2,0,2,3]),rs.setAttribute("position",new ea(i,3,0,!1)),rs.setAttribute("uv",new ea(i,2,3,!1))}this.geometry=rs,this.material=t,this.center=new st(.5,.5),this.count=1}raycast(t,e){t.camera===null&&se('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),as.setFromMatrixScale(this.matrixWorld),yh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),os.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&as.multiplyScalar(-os.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;Sr(_r.set(-.5,-.5,0),os,a,as,s,r),Sr(zs.set(.5,-.5,0),os,a,as,s,r),Sr(vr.set(.5,.5,0),os,a,as,s,r),oc.set(0,0),ka.set(1,0),lc.set(1,1);let o=t.ray.intersectTriangle(_r,zs,vr,!1,Os);if(o===null&&(Sr(zs.set(-.5,.5,0),os,a,as,s,r),ka.set(0,1),o=t.ray.intersectTriangle(_r,vr,zs,!1,Os),o===null))return;const l=t.ray.origin.distanceTo(Os);l<t.near||l>t.far||e.push({distance:l,point:Os.clone(),uv:Mi.getInterpolation(Os,_r,zs,vr,oc,ka,lc,new st),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Sr(n,t,e,i,s,r){ls.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Bs.x=r*ls.x-s*ls.y,Bs.y=s*ls.x+r*ls.y):Bs.copy(ls),n.copy(t),n.x+=Bs.x,n.y+=Bs.y,n.applyMatrix4(yh)}const Ki=new L,Ga=new L,Mr=new L,fn=new L,Ha=new L,yr=new L,Va=new L;class $d{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ki)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ki.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ki.copy(this.origin).addScaledVector(this.direction,e),Ki.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Ga.copy(t).add(e).multiplyScalar(.5),Mr.copy(e).sub(t).normalize(),fn.copy(this.origin).sub(Ga);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Mr),o=fn.dot(this.direction),l=-fn.dot(Mr),c=fn.lengthSq(),h=Math.abs(1-a*a);let d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const v=1/h;d*=v,u*=v,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ga).addScaledVector(Mr,u),f}intersectSphere(t,e){Ki.subVectors(t.center,this.origin);const i=Ki.dot(this.direction),s=Ki.dot(Ki)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ki)!==null}intersectTriangle(t,e,i,s,r){Ha.subVectors(e,t),yr.subVectors(i,t),Va.crossVectors(Ha,yr);let a=this.direction.dot(Va),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fn.subVectors(this.origin,t);const l=o*this.direction.dot(yr.crossVectors(fn,yr));if(l<0)return null;const c=o*this.direction.dot(Ha.cross(fn));if(c<0||l+c>a)return null;const h=-o*fn.dot(Va);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pe extends Ls{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const cc=new ce,wn=new $d,Er=new ar,hc=new L,br=new L,Tr=new L,wr=new L,Wa=new L,Ar=new L,uc=new L,Cr=new L;class zt extends ke{constructor(t=new Ve,e=new Pe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Ar.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(Wa.fromBufferAttribute(d,t),a?Ar.addScaledVector(Wa,h):Ar.addScaledVector(Wa.sub(e),h))}e.add(Ar)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Er.copy(i.boundingSphere),Er.applyMatrix4(r),wn.copy(t.ray).recast(t.near),!(Er.containsPoint(wn.origin)===!1&&(wn.intersectSphere(Er,hc)===null||wn.origin.distanceToSquared(hc)>(t.far-t.near)**2))&&(cc.copy(r).invert(),wn.copy(t.ray).applyMatrix4(cc),!(i.boundingBox!==null&&wn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,wn)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=_,C=y;M<C;M+=3){const w=o.getX(M),P=o.getX(M+1),S=o.getX(M+2);s=Rr(this,p,t,i,c,h,d,w,P,S),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const _=o.getX(m),y=o.getX(m+1),M=o.getX(m+2);s=Rr(this,a,t,i,c,h,d,_,y,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=_,C=y;M<C;M+=3){const w=M,P=M+1,S=M+2;s=Rr(this,p,t,i,c,h,d,w,P,S),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const _=m,y=m+1,M=m+2;s=Rr(this,a,t,i,c,h,d,_,y,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Kd(n,t,e,i,s,r,a,o){let l;if(t.side===di?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Sn,o),l===null)return null;Cr.copy(o),Cr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Cr);return c<e.near||c>e.far?null:{distance:c,point:Cr.clone(),object:n}}function Rr(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,br),n.getVertexPosition(l,Tr),n.getVertexPosition(c,wr);const h=Kd(n,t,e,i,br,Tr,wr,uc);if(h){const d=new L;Mi.getBarycoord(uc,br,Tr,wr,d),s&&(h.uv=Mi.getInterpolatedAttribute(s,o,l,c,d,new st)),r&&(h.uv1=Mi.getInterpolatedAttribute(r,o,l,c,d,new st)),a&&(h.normal=Mi.getInterpolatedAttribute(a,o,l,c,d,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new L,materialIndex:0};Mi.getNormal(br,Tr,wr,u.normal),h.face=u,h.barycoord=d}return h}class Eh extends ci{constructor(t=null,e=1,i=1,s,r,a,o,l,c=Qe,h=Qe,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dc extends vi{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const cs=new ce,fc=new ce,Pr=[],pc=new Xn,Jd=new ce,ks=new zt,Gs=new ar;class Ko extends zt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new dc(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Jd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Xn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,cs),pc.copy(t.boundingBox).applyMatrix4(cs),this.boundingBox.union(pc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ar),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,cs),Gs.copy(t.boundingSphere).applyMatrix4(cs),this.boundingSphere.union(Gs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(ks.geometry=this.geometry,ks.material=this.material,ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gs.copy(this.boundingSphere),Gs.applyMatrix4(i),t.ray.intersectsSphere(Gs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,cs),fc.multiplyMatrices(i,cs),ks.matrixWorld=fc,ks.raycast(t,Pr);for(let a=0,o=Pr.length;a<o;a++){const l=Pr[a];l.instanceId=r,l.object=this,e.push(l)}Pr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new dc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Eh(new Float32Array(s*this.count),s,this.count,pl,Ci));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Xa=new L,jd=new L,Qd=new $t;class Un{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Xa.subVectors(i,e).cross(jd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Xa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Qd.getNormalMatrix(t),s=this.coplanarPoint(Xa).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const An=new ar,tf=new st(.5,.5),Lr=new L;class yl{constructor(t=new Un,e=new Un,i=new Un,s=new Un,r=new Un,a=new Un){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Oi,i=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],_=r[12],y=r[13],M=r[14],C=r[15];if(s[0].setComponents(c-a,f-h,p-g,C-_).normalize(),s[1].setComponents(c+a,f+h,p+g,C+_).normalize(),s[2].setComponents(c+o,f+d,p+v,C+y).normalize(),s[3].setComponents(c-o,f-d,p-v,C-y).normalize(),i)s[4].setComponents(l,u,m,M).normalize(),s[5].setComponents(c-l,f-u,p-m,C-M).normalize();else if(s[4].setComponents(c-l,f-u,p-m,C-M).normalize(),e===Oi)s[5].setComponents(c+l,f+u,p+m,C+M).normalize();else if(e===er)s[5].setComponents(l,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),An.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),An.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(An)}intersectsSprite(t){An.center.set(0,0,0);const e=tf.distanceTo(t.center);return An.radius=.7071067811865476+e,An.applyMatrix4(t.matrixWorld),this.intersectsSphere(An)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Lr.x=s.normal.x>0?t.max.x:t.min.x,Lr.y=s.normal.y>0?t.max.y:t.min.y,Lr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Lr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bh extends ci{constructor(t=[],e=Vn,i,s,r,a,o,l,c,h){super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class El extends ci{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ir extends ci{constructor(t,e,i=ki,s,r,a,o=Qe,l=Qe,c,h=an,d=1){if(h!==an&&h!==Gn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Sl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ef extends ir{constructor(t,e=ki,i=Vn,s,r,a=Qe,o=Qe,l,c=an){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Th extends ci{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ye extends Ve{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(d,2));function g(v,m,p,_,y,M,C,w,P,S,b){const B=M/P,R=C/S,F=M/2,k=C/2,X=w/2,O=P+1,H=S+1;let U=0,nt=0;const Q=new L;for(let gt=0;gt<H;gt++){const _t=gt*R-k;for(let xt=0;xt<O;xt++){const Ht=xt*B-F;Q[v]=Ht*_,Q[m]=_t*y,Q[p]=X,c.push(Q.x,Q.y,Q.z),Q[v]=0,Q[m]=0,Q[p]=w>0?1:-1,h.push(Q.x,Q.y,Q.z),d.push(xt/P),d.push(1-gt/S),U+=1}}for(let gt=0;gt<S;gt++)for(let _t=0;_t<P;_t++){const xt=u+_t+O*gt,Ht=u+_t+O*(gt+1),de=u+(_t+1)+O*(gt+1),ge=u+(_t+1)+O*gt;l.push(xt,Ht,ge),l.push(Ht,de,ge),nt+=6}o.addGroup(f,nt,b),f+=nt,u+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ye(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Ji extends Ve{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new L,h=new st;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=i+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(o,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ji(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class je extends Ve{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const v=[],m=i/2;let p=0;_(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new oe(d,3)),this.setAttribute("normal",new oe(u,3)),this.setAttribute("uv",new oe(f,2));function _(){const M=new L,C=new L;let w=0;const P=(e-t)/i;for(let S=0;S<=r;S++){const b=[],B=S/r,R=B*(e-t)+t;for(let F=0;F<=s;F++){const k=F/s,X=k*l+o,O=Math.sin(X),H=Math.cos(X);C.x=R*O,C.y=-B*i+m,C.z=R*H,d.push(C.x,C.y,C.z),M.set(O,P,H).normalize(),u.push(M.x,M.y,M.z),f.push(k,1-B),b.push(g++)}v.push(b)}for(let S=0;S<s;S++)for(let b=0;b<r;b++){const B=v[b][S],R=v[b+1][S],F=v[b+1][S+1],k=v[b][S+1];(t>0||b!==0)&&(h.push(B,R,k),w+=3),(e>0||b!==r-1)&&(h.push(R,F,k),w+=3)}c.addGroup(p,w,0),p+=w}function y(M){const C=g,w=new st,P=new L;let S=0;const b=M===!0?t:e,B=M===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,m*B,0),u.push(0,B,0),f.push(.5,.5),g++;const R=g;for(let F=0;F<=s;F++){const X=F/s*l+o,O=Math.cos(X),H=Math.sin(X);P.x=b*H,P.y=m*B,P.z=b*O,d.push(P.x,P.y,P.z),u.push(0,B,0),w.x=O*.5+.5,w.y=H*.5*B+.5,f.push(w.x,w.y),g++}for(let F=0;F<s;F++){const k=C+F,X=R+F;M===!0?h.push(X,X+1,k):h.push(X+1,X,k),S+=3}c.addGroup(p,S,M===!0?1:2),p+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new je(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Pi extends je{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Pi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ua extends Ve{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new oe(r,3)),this.setAttribute("normal",new oe(r.slice(),3)),this.setAttribute("uv",new oe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const y=new L,M=new L,C=new L;for(let w=0;w<e.length;w+=3)f(e[w+0],y),f(e[w+1],M),f(e[w+2],C),l(y,M,C,_)}function l(_,y,M,C){const w=C+1,P=[];for(let S=0;S<=w;S++){P[S]=[];const b=_.clone().lerp(M,S/w),B=y.clone().lerp(M,S/w),R=w-S;for(let F=0;F<=R;F++)F===0&&S===w?P[S][F]=b:P[S][F]=b.clone().lerp(B,F/R)}for(let S=0;S<w;S++)for(let b=0;b<2*(w-S)-1;b++){const B=Math.floor(b/2);b%2===0?(u(P[S][B+1]),u(P[S+1][B]),u(P[S][B])):(u(P[S][B+1]),u(P[S+1][B+1]),u(P[S+1][B]))}}function c(_){const y=new L;for(let M=0;M<r.length;M+=3)y.x=r[M+0],y.y=r[M+1],y.z=r[M+2],y.normalize().multiplyScalar(_),r[M+0]=y.x,r[M+1]=y.y,r[M+2]=y.z}function h(){const _=new L;for(let y=0;y<r.length;y+=3){_.x=r[y+0],_.y=r[y+1],_.z=r[y+2];const M=m(_)/2/Math.PI+.5,C=p(_)/Math.PI+.5;a.push(M,1-C)}g(),d()}function d(){for(let _=0;_<a.length;_+=6){const y=a[_+0],M=a[_+2],C=a[_+4],w=Math.max(y,M,C),P=Math.min(y,M,C);w>.9&&P<.1&&(y<.2&&(a[_+0]+=1),M<.2&&(a[_+2]+=1),C<.2&&(a[_+4]+=1))}}function u(_){r.push(_.x,_.y,_.z)}function f(_,y){const M=_*3;y.x=t[M+0],y.y=t[M+1],y.z=t[M+2]}function g(){const _=new L,y=new L,M=new L,C=new L,w=new st,P=new st,S=new st;for(let b=0,B=0;b<r.length;b+=9,B+=6){_.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),M.set(r[b+6],r[b+7],r[b+8]),w.set(a[B+0],a[B+1]),P.set(a[B+2],a[B+3]),S.set(a[B+4],a[B+5]),C.copy(_).add(y).add(M).divideScalar(3);const R=m(C);v(w,B+0,_,R),v(P,B+2,y,R),v(S,B+4,M,R)}}function v(_,y,M,C){C<0&&_.x===1&&(a[y]=_.x-1),M.x===0&&M.z===0&&(a[y]=C/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ua(t.vertices,t.indices,t.radius,t.detail)}}class bl extends ua{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new bl(t.radius,t.detail)}}class Vi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Wt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let s=0;const r=i.length;let a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);const h=i[s],u=i[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new st:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new L,s=[],r=[],a=[],o=new L,l=new ce;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(ee(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ee(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Tl extends Vi{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new st){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class nf extends Tl{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function wl(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){const a=r*r,o=a*r;return n+t*r+e*a+i*o}}}const Ir=new L,qa=new wl,Ya=new wl,Za=new wl;class sf extends Vi{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new L){const i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Ir.subVectors(s[0],s[1]).add(s[0]),c=Ir);const d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ir.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ir),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),qa.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,v,m),Ya.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,v,m),Za.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(qa.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Ya.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Za.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(qa.calc(l),Ya.calc(l),Za.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function mc(n,t,e,i,s){const r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function rf(n,t){const e=1-n;return e*e*t}function af(n,t){return 2*(1-n)*n*t}function of(n,t){return n*n*t}function Js(n,t,e,i){return rf(n,t)+af(n,e)+of(n,i)}function lf(n,t){const e=1-n;return e*e*e*t}function cf(n,t){const e=1-n;return 3*e*e*n*t}function hf(n,t){return 3*(1-n)*n*n*t}function uf(n,t){return n*n*n*t}function js(n,t,e,i,s){return lf(n,t)+cf(n,e)+hf(n,i)+uf(n,s)}class wh extends Vi{constructor(t=new st,e=new st,i=new st,s=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new st){const i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(js(t,s.x,r.x,a.x,o.x),js(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class df extends Vi{constructor(t=new L,e=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new L){const i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(js(t,s.x,r.x,a.x,o.x),js(t,s.y,r.y,a.y,o.y),js(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ah extends Vi{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ff extends Vi{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ch extends Vi{constructor(t=new st,e=new st,i=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new st){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Js(t,s.x,r.x,a.x),Js(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pf extends Vi{constructor(t=new L,e=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new L){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Js(t,s.x,r.x,a.x),Js(t,s.y,r.y,a.y),Js(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rh extends Vi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){const i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(mc(o,l.x,c.x,h.x,d.x),mc(o,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new st().fromArray(s))}return this}}var Jo=Object.freeze({__proto__:null,ArcCurve:nf,CatmullRomCurve3:sf,CubicBezierCurve:wh,CubicBezierCurve3:df,EllipseCurve:Tl,LineCurve:Ah,LineCurve3:ff,QuadraticBezierCurve:Ch,QuadraticBezierCurve3:pf,SplineCurve:Rh});class mf extends Vi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jo[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Jo[s.type]().fromJSON(s))}return this}}class gc extends mf{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Ah(this.currentPoint.clone(),new st(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new Ch(this.currentPoint.clone(),new st(t,e),new st(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){const o=new wh(this.currentPoint.clone(),new st(t,e),new st(i,s),new st(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Rh(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){const c=new Tl(t,e,i,s,r,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class na extends gc{constructor(t){super(t),this.uuid=nn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new gc().fromJSON(s))}return this}}function gf(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=Ph(n,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=Mf(n,t,r,e)),n.length>80*e){o=n[0],l=n[1];let h=o,d=l;for(let u=e;u<s;u+=e){const f=n[u],g=n[u+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return nr(r,a,e,o,l,c,0),a}function Ph(n,t,e,i,s){let r;if(s===If(n,t,e,i)>0)for(let a=t;a<e;a+=i)r=xc(a/i|0,n[a],n[a+1],r);else for(let a=e-i;a>=t;a-=i)r=xc(a/i|0,n[a],n[a+1],r);return r&&Es(r,r.next)&&(rr(r),r=r.next),r}function Wn(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Es(e,e.next)||Le(e.prev,e,e.next)===0)){if(rr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function nr(n,t,e,i,s,r,a){if(!n)return;!a&&r&&wf(n,i,s,r);let o=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?_f(n,i,s,r):xf(n)){t.push(l.i,n.i,c.i),rr(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=vf(Wn(n),t),nr(n,t,e,i,s,r,2)):a===2&&Sf(n,t,e,i,s,r):nr(Wn(n),t,e,i,s,r,1);break}}}function xf(n){const t=n.prev,e=n,i=n.next;if(Le(t,e,i)>=0)return!1;const s=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c);let g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&qs(s,o,r,l,a,c,g.x,g.y)&&Le(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function _f(n,t,e,i){const s=n.prev,r=n,a=n.next;if(Le(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),g=Math.min(h,d,u),v=Math.max(o,l,c),m=Math.max(h,d,u),p=jo(f,g,t,e,i),_=jo(v,m,t,e,i);let y=n.prevZ,M=n.nextZ;for(;y&&y.z>=p&&M&&M.z<=_;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&qs(o,h,l,d,c,u,y.x,y.y)&&Le(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=f&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&qs(o,h,l,d,c,u,M.x,M.y)&&Le(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&qs(o,h,l,d,c,u,y.x,y.y)&&Le(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=_;){if(M.x>=f&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&qs(o,h,l,d,c,u,M.x,M.y)&&Le(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function vf(n,t){let e=n;do{const i=e.prev,s=e.next.next;!Es(i,s)&&Ih(i,e,e.next,s)&&sr(i,s)&&sr(s,i)&&(t.push(i.i,e.i,s.i),rr(e),rr(e.next),e=n=s),e=e.next}while(e!==n);return Wn(e)}function Sf(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Rf(a,o)){let l=Dh(a,o);a=Wn(a,a.next),l=Wn(l,l.next),nr(a,t,e,i,s,r,0),nr(l,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function Mf(n,t,e,i){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*i,l=r<a-1?t[r+1]*i:n.length,c=Ph(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Cf(c))}s.sort(yf);for(let r=0;r<s.length;r++)e=Ef(s[r],e);return e}function yf(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function Ef(n,t){const e=bf(n,t);if(!e)return t;const i=Dh(e,n);return Wn(i,i.next),Wn(e,e.next)}function bf(n,t){let e=t;const i=n.x,s=n.y;let r=-1/0,a;if(Es(n,e))return e;do{if(Es(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===i))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Lh(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){const d=Math.abs(s-e.y)/(i-e.x);sr(e,n)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&Tf(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function Tf(n,t){return Le(n.prev,n,t.prev)<0&&Le(t.next,n,n.next)<0}function wf(n,t,e,i){let s=n;do s.z===0&&(s.z=jo(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Af(s)}function Af(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,e*=2}while(t>1);return n}function jo(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Cf(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Lh(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function qs(n,t,e,i,s,r,a,o){return!(n===a&&t===o)&&Lh(n,t,e,i,s,r,a,o)}function Rf(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Pf(n,t)&&(sr(n,t)&&sr(t,n)&&Lf(n,t)&&(Le(n.prev,n,t.prev)||Le(n,t.prev,t))||Es(n,t)&&Le(n.prev,n,n.next)>0&&Le(t.prev,t,t.next)>0)}function Le(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Es(n,t){return n.x===t.x&&n.y===t.y}function Ih(n,t,e,i){const s=Nr(Le(n,t,e)),r=Nr(Le(n,t,i)),a=Nr(Le(e,i,n)),o=Nr(Le(e,i,t));return!!(s!==r&&a!==o||s===0&&Dr(n,e,t)||r===0&&Dr(n,i,t)||a===0&&Dr(e,n,i)||o===0&&Dr(e,t,i))}function Dr(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Nr(n){return n>0?1:n<0?-1:0}function Pf(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Ih(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function sr(n,t){return Le(n.prev,n,n.next)<0?Le(n,t,n.next)>=0&&Le(n,n.prev,t)>=0:Le(n,t,n.prev)<0||Le(n,n.next,t)<0}function Lf(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Dh(n,t){const e=Qo(n.i,n.x,n.y),i=Qo(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function xc(n,t,e,i){const s=Qo(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function rr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Qo(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function If(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}class Df{static triangulate(t,e,i=2){return gf(t,e,i)}}class Qi{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return Qi.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];_c(t),vc(i,t);let a=t.length;e.forEach(_c);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,vc(i,e[l]);const o=Df.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function _c(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function vc(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Al extends Ve{constructor(t=new na([new st(.5,.5),new st(-.5,.5),new st(-.5,-.5),new st(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new oe(s,3)),this.setAttribute("uv",new oe(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:Nf;let y,M=!1,C,w,P,S;if(p){y=p.getSpacedPoints(h),M=!0,u=!1;const J=p.isCatmullRomCurve3?p.closed:!1;C=p.computeFrenetFrames(h,J),w=new L,P=new L,S=new L}u||(m=0,f=0,g=0,v=0);const b=o.extractPoints(c);let B=b.shape;const R=b.holes;if(!Qi.isClockWise(B)){B=B.reverse();for(let J=0,et=R.length;J<et;J++){const j=R[J];Qi.isClockWise(j)&&(R[J]=j.reverse())}}function k(J){const j=10000000000000001e-36;let dt=J[0];for(let A=1;A<=J.length;A++){const Ut=A%J.length,vt=J[Ut],Ot=vt.x-dt.x,ct=vt.y-dt.y,T=Ot*Ot+ct*ct,x=Math.max(Math.abs(vt.x),Math.abs(vt.y),Math.abs(dt.x),Math.abs(dt.y)),D=j*x*x;if(T<=D){J.splice(Ut,1),A--;continue}dt=vt}}k(B),R.forEach(k);const X=R.length,O=B;for(let J=0;J<X;J++){const et=R[J];B=B.concat(et)}function H(J,et,j){return et||se("ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(et,j)}const U=B.length;function nt(J,et,j){let dt,A,Ut;const vt=J.x-et.x,Ot=J.y-et.y,ct=j.x-J.x,T=j.y-J.y,x=vt*vt+Ot*Ot,D=vt*T-Ot*ct;if(Math.abs(D)>Number.EPSILON){const q=Math.sqrt(x),K=Math.sqrt(ct*ct+T*T),Y=et.x-Ot/q,bt=et.y+vt/q,ht=j.x-T/K,It=j.y+ct/K,Bt=((ht-Y)*T-(It-bt)*ct)/(vt*T-Ot*ct);dt=Y+vt*Bt-J.x,A=bt+Ot*Bt-J.y;const tt=dt*dt+A*A;if(tt<=2)return new st(dt,A);Ut=Math.sqrt(tt/2)}else{let q=!1;vt>Number.EPSILON?ct>Number.EPSILON&&(q=!0):vt<-Number.EPSILON?ct<-Number.EPSILON&&(q=!0):Math.sign(Ot)===Math.sign(T)&&(q=!0),q?(dt=-Ot,A=vt,Ut=Math.sqrt(x)):(dt=vt,A=Ot,Ut=Math.sqrt(x/2))}return new st(dt/Ut,A/Ut)}const Q=[];for(let J=0,et=O.length,j=et-1,dt=J+1;J<et;J++,j++,dt++)j===et&&(j=0),dt===et&&(dt=0),Q[J]=nt(O[J],O[j],O[dt]);const gt=[];let _t,xt=Q.concat();for(let J=0,et=X;J<et;J++){const j=R[J];_t=[];for(let dt=0,A=j.length,Ut=A-1,vt=dt+1;dt<A;dt++,Ut++,vt++)Ut===A&&(Ut=0),vt===A&&(vt=0),_t[dt]=nt(j[dt],j[Ut],j[vt]);gt.push(_t),xt=xt.concat(_t)}let Ht;if(m===0)Ht=Qi.triangulateShape(O,R);else{const J=[],et=[];for(let j=0;j<m;j++){const dt=j/m,A=f*Math.cos(dt*Math.PI/2),Ut=g*Math.sin(dt*Math.PI/2)+v;for(let vt=0,Ot=O.length;vt<Ot;vt++){const ct=H(O[vt],Q[vt],Ut);Ft(ct.x,ct.y,-A),dt===0&&J.push(ct)}for(let vt=0,Ot=X;vt<Ot;vt++){const ct=R[vt];_t=gt[vt];const T=[];for(let x=0,D=ct.length;x<D;x++){const q=H(ct[x],_t[x],Ut);Ft(q.x,q.y,-A),dt===0&&T.push(q)}dt===0&&et.push(T)}}Ht=Qi.triangulateShape(J,et)}const de=Ht.length,ge=g+v;for(let J=0;J<U;J++){const et=u?H(B[J],xt[J],ge):B[J];M?(P.copy(C.normals[0]).multiplyScalar(et.x),w.copy(C.binormals[0]).multiplyScalar(et.y),S.copy(y[0]).add(P).add(w),Ft(S.x,S.y,S.z)):Ft(et.x,et.y,0)}for(let J=1;J<=h;J++)for(let et=0;et<U;et++){const j=u?H(B[et],xt[et],ge):B[et];M?(P.copy(C.normals[J]).multiplyScalar(j.x),w.copy(C.binormals[J]).multiplyScalar(j.y),S.copy(y[J]).add(P).add(w),Ft(S.x,S.y,S.z)):Ft(j.x,j.y,d/h*J)}for(let J=m-1;J>=0;J--){const et=J/m,j=f*Math.cos(et*Math.PI/2),dt=g*Math.sin(et*Math.PI/2)+v;for(let A=0,Ut=O.length;A<Ut;A++){const vt=H(O[A],Q[A],dt);Ft(vt.x,vt.y,d+j)}for(let A=0,Ut=R.length;A<Ut;A++){const vt=R[A];_t=gt[A];for(let Ot=0,ct=vt.length;Ot<ct;Ot++){const T=H(vt[Ot],_t[Ot],dt);M?Ft(T.x,T.y+y[h-1].y,y[h-1].x+j):Ft(T.x,T.y,d+j)}}}$(),ot();function $(){const J=s.length/3;if(u){let et=0,j=U*et;for(let dt=0;dt<de;dt++){const A=Ht[dt];Nt(A[2]+j,A[1]+j,A[0]+j)}et=h+m*2,j=U*et;for(let dt=0;dt<de;dt++){const A=Ht[dt];Nt(A[0]+j,A[1]+j,A[2]+j)}}else{for(let et=0;et<de;et++){const j=Ht[et];Nt(j[2],j[1],j[0])}for(let et=0;et<de;et++){const j=Ht[et];Nt(j[0]+U*h,j[1]+U*h,j[2]+U*h)}}i.addGroup(J,s.length/3-J,0)}function ot(){const J=s.length/3;let et=0;lt(O,et),et+=O.length;for(let j=0,dt=R.length;j<dt;j++){const A=R[j];lt(A,et),et+=A.length}i.addGroup(J,s.length/3-J,1)}function lt(J,et){let j=J.length;for(;--j>=0;){const dt=j;let A=j-1;A<0&&(A=J.length-1);for(let Ut=0,vt=h+m*2;Ut<vt;Ut++){const Ot=U*Ut,ct=U*(Ut+1),T=et+dt+Ot,x=et+A+Ot,D=et+A+ct,q=et+dt+ct;Vt(T,x,D,q)}}}function Ft(J,et,j){l.push(J),l.push(et),l.push(j)}function Nt(J,et,j){xe(J),xe(et),xe(j);const dt=s.length/3,A=_.generateTopUV(i,s,dt-3,dt-2,dt-1);qt(A[0]),qt(A[1]),qt(A[2])}function Vt(J,et,j,dt){xe(J),xe(et),xe(dt),xe(et),xe(j),xe(dt);const A=s.length/3,Ut=_.generateSideWallUV(i,s,A-6,A-3,A-2,A-1);qt(Ut[0]),qt(Ut[1]),qt(Ut[3]),qt(Ut[1]),qt(Ut[2]),qt(Ut[3])}function xe(J){s.push(l[J*3+0]),s.push(l[J*3+1]),s.push(l[J*3+2])}function qt(J){r.push(J.x),r.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Uf(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];i.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Jo[s.type]().fromJSON(s)),new Al(i,t.options)}}const Nf={generateTopUV:function(n,t,e,i,s){const r=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new st(r,a),new st(o,l),new st(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],d=t[i*3+2],u=t[s*3],f=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new st(a,1-l),new st(c,1-d),new st(u,1-g),new st(v,1-p)]:[new st(o,1-l),new st(h,1-d),new st(f,1-g),new st(m,1-p)]}};function Uf(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class gs extends ua{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new gs(t.radius,t.detail)}}class _n extends Ve{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const _=p*u-a;for(let y=0;y<c;y++){const M=y*d-r;g.push(M,-_,0),v.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){const y=_+c*p,M=_+c*(p+1),C=_+1+c*(p+1),w=_+1+c*p;f.push(y,M,w),f.push(M,C,w)}this.setIndex(f),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(v,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _n(t.width,t.height,t.widthSegments,t.heightSegments)}}class Cl extends Ve{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let d=t;const u=(e-t)/s,f=new L,g=new st;for(let v=0;v<=s;v++){for(let m=0;m<=i;m++){const p=r+m/i*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let v=0;v<s;v++){const m=v*(i+1);for(let p=0;p<i;p++){const _=p+m,y=_,M=_+i+1,C=_+i+2,w=_+1;o.push(y,M,w),o.push(M,C,w)}}this.setIndex(o),this.setAttribute("position",new oe(l,3)),this.setAttribute("normal",new oe(c,3)),this.setAttribute("uv",new oe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Rl extends Ve{constructor(t=new na([new st(0,.5),new st(-.5,-.5),new st(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new oe(s,3)),this.setAttribute("normal",new oe(r,3)),this.setAttribute("uv",new oe(a,2));function c(h){const d=s.length/3,u=h.extractPoints(e);let f=u.shape;const g=u.holes;Qi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const _=g[m];Qi.isClockWise(_)===!0&&(g[m]=_.reverse())}const v=Qi.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const _=g[m];f=f.concat(_)}for(let m=0,p=f.length;m<p;m++){const _=f[m];s.push(_.x,_.y,0),r.push(0,0,1),a.push(_.x,_.y)}for(let m=0,p=v.length;m<p;m++){const _=v[m],y=_[0]+d,M=_[1]+d,C=_[2]+d;i.push(y,M,C),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Ff(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];i.push(a)}return new Rl(i,t.curveSegments)}}function Ff(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class ne extends Ve{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new L,u=new L,f=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const _=[],y=p/i;let M=0;p===0&&a===0?M=.5/e:p===i&&l===Math.PI&&(M=-.5/e);for(let C=0;C<=e;C++){const w=C/e;d.x=-t*Math.cos(s+w*r)*Math.sin(a+y*o),d.y=t*Math.cos(a+y*o),d.z=t*Math.sin(s+w*r)*Math.sin(a+y*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(w+M,1-y),_.push(c++)}h.push(_)}for(let p=0;p<i;p++)for(let _=0;_<e;_++){const y=h[p][_+1],M=h[p][_],C=h[p+1][_],w=h[p+1][_+1];(p!==0||a>0)&&f.push(y,M,w),(p!==i-1||l<Math.PI)&&f.push(M,C,w)}this.setIndex(f),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(v,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ne(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class da extends Ve{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);const l=[],c=[],h=[],d=[],u=new L,f=new L,g=new L;for(let v=0;v<=i;v++){const m=a+v/i*o;for(let p=0;p<=s;p++){const _=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(_),f.y=(t+e*Math.cos(m))*Math.sin(_),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(v/i)}}for(let v=1;v<=i;v++)for(let m=1;m<=s;m++){const p=(s+1)*v+m-1,_=(s+1)*(v-1)+m-1,y=(s+1)*(v-1)+m,M=(s+1)*v+m;l.push(p,_,M),l.push(_,y,M)}this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new da(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function bs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function ui(n){const t={};for(let e=0;e<n.length;e++){const i=bs(n[e]);for(const s in i)t[s]=i[s]}return t}function Of(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Nh(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const Bf={clone:bs,merge:ui};var zf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hi extends Ls{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zf,this.fragmentShader=kf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bs(t.uniforms),this.uniformsGroups=Of(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Gf extends Hi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Pt extends Ls{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mh,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=cl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Hf extends Ls{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Vf extends Ls{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class fa extends ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Wf extends fa{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const $a=new ce,Sc=new L,Mc=new L;class Uh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.mapType=xi,this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yl,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Sc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sc),Mc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mc),e.updateMatrixWorld(),$a.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($a,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===er||e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply($a)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ur=new L,Fr=new Ps,Ii=new L;class Fh extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ur,Fr,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ur,Fr,Ii.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(Ur,Fr,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ur,Fr,Ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const pn=new L,yc=new st,Ec=new st;class gi extends Fh{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Zo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ma*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zo*2*Math.atan(Math.tan(Ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(pn.x,pn.y).multiplyScalar(-t/pn.z),pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(pn.x,pn.y).multiplyScalar(-t/pn.z)}getViewSize(t,e){return this.getViewBounds(t,yc,Ec),e.subVectors(Ec,yc)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ma*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Xf extends Uh{constructor(){super(new gi(90,1,.5,500)),this.isPointLightShadow=!0}}class qf extends fa{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Xf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Pl extends Fh{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Yf extends Uh{constructor(){super(new Pl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zf extends fa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.shadow=new Yf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class $f extends fa{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const hs=-90,us=1;class Kf extends ke{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new gi(hs,us,t,e);s.layers=this.layers,this.add(s);const r=new gi(hs,us,t,e);r.layers=this.layers,this.add(r);const a=new gi(hs,us,t,e);a.layers=this.layers,this.add(a);const o=new gi(hs,us,t,e);o.layers=this.layers,this.add(o);const l=new gi(hs,us,t,e);l.layers=this.layers,this.add(l);const c=new gi(hs,us,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Oi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===er)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Jf extends gi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class jf{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Qf.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Qf(){this._document.hidden===!1&&this.reset()}function bc(n,t,e,i){const s=tp(i);switch(e){case fh:return n*t;case pl:return n*t/s.components*s.byteLength;case ml:return n*t/s.components*s.byteLength;case Ms:return n*t*2/s.components*s.byteLength;case gl:return n*t*2/s.components*s.byteLength;case ph:return n*t*3/s.components*s.byteLength;case Ri:return n*t*4/s.components*s.byteLength;case xl:return n*t*4/s.components*s.byteLength;case Hr:case Vr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Wr:case Xr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case go:case _o:return Math.max(n,16)*Math.max(t,8)/4;case mo:case xo:return Math.max(n,8)*Math.max(t,8)/2;case vo:case So:case yo:case Eo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Mo:case bo:case To:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case wo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ao:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Co:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ro:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Po:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Lo:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Io:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Do:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case No:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Fo:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Oo:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Bo:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case zo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ko:case Go:case Ho:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Vo:case Wo:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Xo:case qo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function tp(n){switch(n){case xi:case ch:return{byteLength:1,components:1};case Qs:case hh:case rn:return{byteLength:2,components:1};case dl:case fl:return{byteLength:2,components:4};case ki:case ul:case Ci:return{byteLength:4,components:1};case uh:case dh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ll}}));typeof window<"u"&&(window.__THREE__?Wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ll);function Oh(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function ep(n){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ip=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,np=`#ifdef USE_ALPHAHASH
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
#endif`,sp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ap=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,op=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lp=`#ifdef USE_AOMAP
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
#endif`,cp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hp=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,up=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mp=`#ifdef USE_IRIDESCENCE
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
#endif`,gp=`#ifdef USE_BUMPMAP
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
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,yp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ep=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Tp=`#define PI 3.141592653589793
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
} // validated`,wp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ap=`vec3 transformedNormal = objectNormal;
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
#endif`,Cp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ip="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Np=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Up=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Fp=`#ifdef USE_ENVMAP
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
#endif`,Op=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bp=`#ifdef USE_ENVMAP
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
#endif`,zp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vp=`#ifdef USE_GRADIENTMAP
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
}`,Wp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yp=`uniform bool receiveShadow;
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
#endif`,Zp=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,$p=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,tm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,em=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,im=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,nm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,am=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,om=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,um=`#if defined( USE_POINTS_UV )
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
#endif`,dm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xm=`#ifdef USE_MORPHTARGETS
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
#endif`,_m=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Em=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bm=`#ifdef USE_NORMALMAP
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
#endif`,Tm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Am=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Lm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Im=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Um=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Om=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Bm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,km=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Gm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hm=`#ifdef USE_SKINNING
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
#endif`,Vm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wm=`#ifdef USE_SKINNING
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
#endif`,Xm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ym=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$m=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Km=`#ifdef USE_TRANSMISSION
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
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const e0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i0=`uniform sampler2D t2D;
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
}`,n0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`#include <common>
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
}`,l0=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,c0=`#define DISTANCE
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
}`,h0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,d0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`uniform float scale;
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
}`,p0=`uniform vec3 diffuse;
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
}`,m0=`#include <common>
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
}`,g0=`uniform vec3 diffuse;
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
}`,x0=`#define LAMBERT
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
}`,_0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,v0=`#define MATCAP
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
}`,S0=`#define MATCAP
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
}`,M0=`#define NORMAL
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
}`,y0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,E0=`#define PHONG
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
}`,b0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,T0=`#define STANDARD
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
}`,w0=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,A0=`#define TOON
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
}`,C0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,R0=`uniform float size;
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
}`,P0=`uniform vec3 diffuse;
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
}`,L0=`#include <common>
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
}`,I0=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,D0=`uniform float rotation;
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
}`,N0=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:ip,alphahash_pars_fragment:np,alphamap_fragment:sp,alphamap_pars_fragment:rp,alphatest_fragment:ap,alphatest_pars_fragment:op,aomap_fragment:lp,aomap_pars_fragment:cp,batching_pars_vertex:hp,batching_vertex:up,begin_vertex:dp,beginnormal_vertex:fp,bsdfs:pp,iridescence_fragment:mp,bumpmap_pars_fragment:gp,clipping_planes_fragment:xp,clipping_planes_pars_fragment:_p,clipping_planes_pars_vertex:vp,clipping_planes_vertex:Sp,color_fragment:Mp,color_pars_fragment:yp,color_pars_vertex:Ep,color_vertex:bp,common:Tp,cube_uv_reflection_fragment:wp,defaultnormal_vertex:Ap,displacementmap_pars_vertex:Cp,displacementmap_vertex:Rp,emissivemap_fragment:Pp,emissivemap_pars_fragment:Lp,colorspace_fragment:Ip,colorspace_pars_fragment:Dp,envmap_fragment:Np,envmap_common_pars_fragment:Up,envmap_pars_fragment:Fp,envmap_pars_vertex:Op,envmap_physical_pars_fragment:Zp,envmap_vertex:Bp,fog_vertex:zp,fog_pars_vertex:kp,fog_fragment:Gp,fog_pars_fragment:Hp,gradientmap_pars_fragment:Vp,lightmap_pars_fragment:Wp,lights_lambert_fragment:Xp,lights_lambert_pars_fragment:qp,lights_pars_begin:Yp,lights_toon_fragment:$p,lights_toon_pars_fragment:Kp,lights_phong_fragment:Jp,lights_phong_pars_fragment:jp,lights_physical_fragment:Qp,lights_physical_pars_fragment:tm,lights_fragment_begin:em,lights_fragment_maps:im,lights_fragment_end:nm,logdepthbuf_fragment:sm,logdepthbuf_pars_fragment:rm,logdepthbuf_pars_vertex:am,logdepthbuf_vertex:om,map_fragment:lm,map_pars_fragment:cm,map_particle_fragment:hm,map_particle_pars_fragment:um,metalnessmap_fragment:dm,metalnessmap_pars_fragment:fm,morphinstance_vertex:pm,morphcolor_vertex:mm,morphnormal_vertex:gm,morphtarget_pars_vertex:xm,morphtarget_vertex:_m,normal_fragment_begin:vm,normal_fragment_maps:Sm,normal_pars_fragment:Mm,normal_pars_vertex:ym,normal_vertex:Em,normalmap_pars_fragment:bm,clearcoat_normal_fragment_begin:Tm,clearcoat_normal_fragment_maps:wm,clearcoat_pars_fragment:Am,iridescence_pars_fragment:Cm,opaque_fragment:Rm,packing:Pm,premultiplied_alpha_fragment:Lm,project_vertex:Im,dithering_fragment:Dm,dithering_pars_fragment:Nm,roughnessmap_fragment:Um,roughnessmap_pars_fragment:Fm,shadowmap_pars_fragment:Om,shadowmap_pars_vertex:Bm,shadowmap_vertex:zm,shadowmask_pars_fragment:km,skinbase_vertex:Gm,skinning_pars_vertex:Hm,skinning_vertex:Vm,skinnormal_vertex:Wm,specularmap_fragment:Xm,specularmap_pars_fragment:qm,tonemapping_fragment:Ym,tonemapping_pars_fragment:Zm,transmission_fragment:$m,transmission_pars_fragment:Km,uv_pars_fragment:Jm,uv_pars_vertex:jm,uv_vertex:Qm,worldpos_vertex:t0,background_vert:e0,background_frag:i0,backgroundCube_vert:n0,backgroundCube_frag:s0,cube_vert:r0,cube_frag:a0,depth_vert:o0,depth_frag:l0,distance_vert:c0,distance_frag:h0,equirect_vert:u0,equirect_frag:d0,linedashed_vert:f0,linedashed_frag:p0,meshbasic_vert:m0,meshbasic_frag:g0,meshlambert_vert:x0,meshlambert_frag:_0,meshmatcap_vert:v0,meshmatcap_frag:S0,meshnormal_vert:M0,meshnormal_frag:y0,meshphong_vert:E0,meshphong_frag:b0,meshphysical_vert:T0,meshphysical_frag:w0,meshtoon_vert:A0,meshtoon_frag:C0,points_vert:R0,points_frag:P0,shadow_vert:L0,shadow_frag:I0,sprite_vert:D0,sprite_frag:N0},ft={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Ui={basic:{uniforms:ui([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:ui([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Gt(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:ui([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:ui([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:ui([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:ui([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:ui([ft.points,ft.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:ui([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:ui([ft.common,ft.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:ui([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:ui([ft.sprite,ft.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:ui([ft.common,ft.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:ui([ft.lights,ft.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Ui.physical={uniforms:ui([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const Or={r:0,b:0,g:0},Cn=new Gi,U0=new ce;function F0(n,t,e,i,s,r){const a=new Gt(0);let o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(_){let y=_.isScene===!0?_.background:null;if(y&&y.isTexture){const M=_.backgroundBlurriness>0;y=t.get(y,M)}return y}function g(_){let y=!1;const M=f(_);M===null?m(a,o):M&&M.isColor&&(m(M,1),y=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?e.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(_,y){const M=f(y);M&&(M.isCubeTexture||M.mapping===ha)?(c===void 0&&(c=new zt(new ye(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:bs(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Cn.copy(y.backgroundRotation),Cn.x*=-1,Cn.y*=-1,Cn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Cn.y*=-1,Cn.z*=-1),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(U0.makeRotationFromEuler(Cn)),c.material.toneMapped=ae.getTransfer(M.colorSpace)!==me,(h!==M||d!==M.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new zt(new _n(2,2),new Hi({name:"BackgroundMaterial",uniforms:bs(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ae.getTransfer(M.colorSpace)!==me,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,y){_.getRGB(Or,Nh(n)),e.buffers.color.setClear(Or.r,Or.g,Or.b,y,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),o=y,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,m(a,o)},render:g,addToRenderList:v,dispose:p}}function O0(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,a=!1;function o(R,F,k,X,O){let H=!1;const U=d(R,X,k,F);r!==U&&(r=U,c(r.object)),H=f(R,X,k,O),H&&g(R,X,k,O),O!==null&&t.update(O,n.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,M(R,F,k,X),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return n.createVertexArray()}function c(R){return n.bindVertexArray(R)}function h(R){return n.deleteVertexArray(R)}function d(R,F,k,X){const O=X.wireframe===!0;let H=i[F.id];H===void 0&&(H={},i[F.id]=H);const U=R.isInstancedMesh===!0?R.id:0;let nt=H[U];nt===void 0&&(nt={},H[U]=nt);let Q=nt[k.id];Q===void 0&&(Q={},nt[k.id]=Q);let gt=Q[O];return gt===void 0&&(gt=u(l()),Q[O]=gt),gt}function u(R){const F=[],k=[],X=[];for(let O=0;O<e;O++)F[O]=0,k[O]=0,X[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:k,attributeDivisors:X,object:R,attributes:{},index:null}}function f(R,F,k,X){const O=r.attributes,H=F.attributes;let U=0;const nt=k.getAttributes();for(const Q in nt)if(nt[Q].location>=0){const _t=O[Q];let xt=H[Q];if(xt===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(xt=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(xt=R.instanceColor)),_t===void 0||_t.attribute!==xt||xt&&_t.data!==xt.data)return!0;U++}return r.attributesNum!==U||r.index!==X}function g(R,F,k,X){const O={},H=F.attributes;let U=0;const nt=k.getAttributes();for(const Q in nt)if(nt[Q].location>=0){let _t=H[Q];_t===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(_t=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(_t=R.instanceColor));const xt={};xt.attribute=_t,_t&&_t.data&&(xt.data=_t.data),O[Q]=xt,U++}r.attributes=O,r.attributesNum=U,r.index=X}function v(){const R=r.newAttributes;for(let F=0,k=R.length;F<k;F++)R[F]=0}function m(R){p(R,0)}function p(R,F){const k=r.newAttributes,X=r.enabledAttributes,O=r.attributeDivisors;k[R]=1,X[R]===0&&(n.enableVertexAttribArray(R),X[R]=1),O[R]!==F&&(n.vertexAttribDivisor(R,F),O[R]=F)}function _(){const R=r.newAttributes,F=r.enabledAttributes;for(let k=0,X=F.length;k<X;k++)F[k]!==R[k]&&(n.disableVertexAttribArray(k),F[k]=0)}function y(R,F,k,X,O,H,U){U===!0?n.vertexAttribIPointer(R,F,k,O,H):n.vertexAttribPointer(R,F,k,X,O,H)}function M(R,F,k,X){v();const O=X.attributes,H=k.getAttributes(),U=F.defaultAttributeValues;for(const nt in H){const Q=H[nt];if(Q.location>=0){let gt=O[nt];if(gt===void 0&&(nt==="instanceMatrix"&&R.instanceMatrix&&(gt=R.instanceMatrix),nt==="instanceColor"&&R.instanceColor&&(gt=R.instanceColor)),gt!==void 0){const _t=gt.normalized,xt=gt.itemSize,Ht=t.get(gt);if(Ht===void 0)continue;const de=Ht.buffer,ge=Ht.type,$=Ht.bytesPerElement,ot=ge===n.INT||ge===n.UNSIGNED_INT||gt.gpuType===ul;if(gt.isInterleavedBufferAttribute){const lt=gt.data,Ft=lt.stride,Nt=gt.offset;if(lt.isInstancedInterleavedBuffer){for(let Vt=0;Vt<Q.locationSize;Vt++)p(Q.location+Vt,lt.meshPerAttribute);R.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Vt=0;Vt<Q.locationSize;Vt++)m(Q.location+Vt);n.bindBuffer(n.ARRAY_BUFFER,de);for(let Vt=0;Vt<Q.locationSize;Vt++)y(Q.location+Vt,xt/Q.locationSize,ge,_t,Ft*$,(Nt+xt/Q.locationSize*Vt)*$,ot)}else{if(gt.isInstancedBufferAttribute){for(let lt=0;lt<Q.locationSize;lt++)p(Q.location+lt,gt.meshPerAttribute);R.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let lt=0;lt<Q.locationSize;lt++)m(Q.location+lt);n.bindBuffer(n.ARRAY_BUFFER,de);for(let lt=0;lt<Q.locationSize;lt++)y(Q.location+lt,xt/Q.locationSize,ge,_t,xt*$,xt/Q.locationSize*lt*$,ot)}}else if(U!==void 0){const _t=U[nt];if(_t!==void 0)switch(_t.length){case 2:n.vertexAttrib2fv(Q.location,_t);break;case 3:n.vertexAttrib3fv(Q.location,_t);break;case 4:n.vertexAttrib4fv(Q.location,_t);break;default:n.vertexAttrib1fv(Q.location,_t)}}}}_()}function C(){b();for(const R in i){const F=i[R];for(const k in F){const X=F[k];for(const O in X){const H=X[O];for(const U in H)h(H[U].object),delete H[U];delete X[O]}}delete i[R]}}function w(R){if(i[R.id]===void 0)return;const F=i[R.id];for(const k in F){const X=F[k];for(const O in X){const H=X[O];for(const U in H)h(H[U].object),delete H[U];delete X[O]}}delete i[R.id]}function P(R){for(const F in i){const k=i[F];for(const X in k){const O=k[X];if(O[R.id]===void 0)continue;const H=O[R.id];for(const U in H)h(H[U].object),delete H[U];delete O[R.id]}}}function S(R){for(const F in i){const k=i[F],X=R.isInstancedMesh===!0?R.id:0,O=k[X];if(O!==void 0){for(const H in O){const U=O[H];for(const nt in U)h(U[nt].object),delete U[nt];delete O[H]}delete k[X],Object.keys(k).length===0&&delete i[F]}}}function b(){B(),a=!0,r!==s&&(r=s,c(r.object))}function B(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:B,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function B0(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function a(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),e.update(h,i,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,i,1)}function l(c,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v]*u[v];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function z0(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==Ri&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const S=P===rn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==xi&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Ci&&!S)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Wt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:M,maxSamples:C,samples:w}}function k0(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new Un,o=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const _=r?0:i,y=_*4;let M=p.clippingState||null;l.value=M,M=h(g,u,y,f);for(let C=0;C!==y;++C)M[C]=e[C];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,M=f;y!==v;++y,M+=4)a.copy(d[y]).applyMatrix4(_,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}const xn=4,Tc=[.125,.215,.35,.446,.526,.582],zn=20,G0=256,Hs=new Pl,wc=new Gt;let Ka=null,Ja=0,ja=0,Qa=!1;const H0=new L;class Ac{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:a=256,position:o=H0}=r;Ka=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),Qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ka,Ja,ja),this._renderer.xr.enabled=Qa,t.scissorTest=!1,ds(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vn||t.mapping===Ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ka=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),Qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:li,minFilter:li,generateMipmaps:!1,type:rn,format:Ri,colorSpace:ys,depthBuffer:!1},s=Cc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cc(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=V0(r)),this._blurMaterial=X0(r,t,e),this._ggxMaterial=W0(r,t,e)}return s}_compileMaterial(t){const e=new zt(new Ve,t);this._renderer.compile(e,Hs)}_sceneToCubeUV(t,e,i,s,r){const l=new gi(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(wc),d.toneMapping=Bi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new zt(new ye,new Pe({name:"PMREM.Background",side:di,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let p=!1;const _=t.background;_?_.isColor&&(m.color.copy(_),t.background=null,p=!0):(m.color.copy(wc),p=!0);for(let y=0;y<6;y++){const M=y%3;M===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[y],r.y,r.z)):M===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[y]));const C=this._cubeSize;ds(s,M*C,y>2?C:0,C,C),d.setRenderTarget(s),p&&d.render(v,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=_}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Vn||t.mapping===Ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;ds(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Hs)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,f=d*u,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-xn?i-g+xn:0),p=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,ds(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(o,Hs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,ds(t,m,p,3*v,2*v),s.setRenderTarget(t),s.render(o,Hs)}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&se("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[s];d.material=c;const u=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*zn-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):zn;m>zn&&Wt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zn}`);const p=[];let _=0;for(let P=0;P<zn;++P){const S=P/v,b=Math.exp(-S*S/2);p.push(b),P===0?_+=b:P<m&&(_+=2*b)}for(let P=0;P<p.length;P++)p[P]=p[P]/_;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:y}=this;u.dTheta.value=g,u.mipInt.value=y-i;const M=this._sizeLods[s],C=3*M*(s>y-xn?s-y+xn:0),w=4*(this._cubeSize-M);ds(e,C,w,3*M,2*M),l.setRenderTarget(e),l.render(d,Hs)}}function V0(n){const t=[],e=[],i=[];let s=n;const r=n-xn+1+Tc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-xn?l=Tc[a-n+xn-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,v=3,m=2,p=1,_=new Float32Array(v*g*f),y=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let w=0;w<f;w++){const P=w%3*2/3-1,S=w>2?0:-1,b=[P,S,0,P+2/3,S,0,P+2/3,S+1,0,P,S,0,P+2/3,S+1,0,P,S+1,0];_.set(b,v*g*w),y.set(u,m*g*w);const B=[w,w,w,w,w,w];M.set(B,p*g*w)}const C=new Ve;C.setAttribute("position",new vi(_,v)),C.setAttribute("uv",new vi(y,m)),C.setAttribute("faceIndex",new vi(M,p)),i.push(new zt(C,null)),s>xn&&s--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function Cc(n,t,e){const i=new zi(n,t,e);return i.texture.mapping=ha,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ds(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function W0(n,t,e){return new Hi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:G0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function X0(n,t,e){const i=new Float32Array(zn),s=new L(0,1,0);return new Hi({name:"SphericalGaussianBlur",defines:{n:zn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:pa(),fragmentShader:`

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
		`,blending:en,depthTest:!1,depthWrite:!1})}function Rc(){return new Hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pa(),fragmentShader:`

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
		`,blending:en,depthTest:!1,depthWrite:!1})}function Pc(){return new Hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function pa(){return`

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
	`}class Bh extends zi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new bh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ye(5,5,5),r=new Hi({name:"CubemapFromEquirect",uniforms:bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:di,blending:en});r.uniforms.tEquirect.value=e;const a=new zt(s,r),o=e.minFilter;return e.minFilter===kn&&(e.minFilter=li),new Kf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}function q0(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===_a||f===va)if(t.has(u)){const g=t.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const v=new Bh(g.height);return v.fromEquirectangularTexture(n,u),t.set(u,v),u.addEventListener("dispose",c),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,g=f===_a||f===va,v=f===Vn||f===Ss;if(g||v){let m=e.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Ac(n)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const _=u.image;return g&&_&&_.height>0||v&&_&&l(_)?(i===null&&(i=new Ac(n)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===_a?u.mapping=Vn:f===va&&(u.mapping=Ss),u}function l(u){let f=0;const g=6;for(let v=0;v<g;v++)u[v]!==void 0&&f++;return f===g}function c(u){const f=u.target;f.removeEventListener("dispose",c);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function Y0(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&ta("WebGLRenderer: "+i+" extension not supported."),s}}}function Z0(n,t,e,i){const s={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)t.update(u[f],n.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,g=d.attributes.position;let v=0;if(g===void 0)return;if(f!==null){const _=f.array;v=f.version;for(let y=0,M=_.length;y<M;y+=3){const C=_[y+0],w=_[y+1],P=_[y+2];u.push(C,w,w,P,P,C)}}else{const _=g.array;v=g.version;for(let y=0,M=_.length/3-1;y<M;y+=3){const C=y+0,w=y+1,P=y+2;u.push(C,w,w,P,P,C)}}const m=new(g.count>=65535?Mh:Sh)(u,1);m.version=v;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function $0(n,t,e){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){n.drawElements(i,f,r,u*a),e.update(f,i,1)}function c(u,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,u*a,g),e.update(f,i,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,i,1)}function d(u,f,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/a,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,u,0,v,0,g);let p=0;for(let _=0;_<g;_++)p+=f[_]*v[_];e.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function K0(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:se("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function J0(n,t,e){const i=new WeakMap,s=new Ne;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let B=function(){S.dispose(),i.delete(o),o.removeEventListener("dispose",B)};var f=B;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let C=o.attributes.position.count*M,w=1;C>t.maxTextureSize&&(w=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const P=new Float32Array(C*w*4*d),S=new xh(P,C,w,d);S.type=Ci,S.needsUpdate=!0;const b=M*4;for(let R=0;R<d;R++){const F=p[R],k=_[R],X=y[R],O=C*w*4*R;for(let H=0;H<F.count;H++){const U=H*b;g===!0&&(s.fromBufferAttribute(F,H),P[O+U+0]=s.x,P[O+U+1]=s.y,P[O+U+2]=s.z,P[O+U+3]=0),v===!0&&(s.fromBufferAttribute(k,H),P[O+U+4]=s.x,P[O+U+5]=s.y,P[O+U+6]=s.z,P[O+U+7]=0),m===!0&&(s.fromBufferAttribute(X,H),P[O+U+8]=s.x,P[O+U+9]=s.y,P[O+U+10]=s.z,P[O+U+11]=X.itemSize===4?s.w:1)}}u={count:d,texture:S,size:new st(C,w)},i.set(o,u),o.addEventListener("dispose",B)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function j0(n,t,e,i,s){let r=new WeakMap;function a(c){const h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const Q0={[ih]:"LINEAR_TONE_MAPPING",[nh]:"REINHARD_TONE_MAPPING",[sh]:"CINEON_TONE_MAPPING",[hl]:"ACES_FILMIC_TONE_MAPPING",[ah]:"AGX_TONE_MAPPING",[oh]:"NEUTRAL_TONE_MAPPING",[rh]:"CUSTOM_TONE_MAPPING"};function tg(n,t,e,i,s){const r=new zi(t,e,{type:n,depthBuffer:i,stencilBuffer:s}),a=new zi(t,e,{type:rn,depthBuffer:!1,stencilBuffer:!1}),o=new Ve;o.setAttribute("position",new oe([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new oe([0,2,0,0,2,0],2));const l=new Gf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

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
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new zt(o,l),h=new Pl(-1,1,1,-1,0,1);let d=null,u=null,f=!1,g,v=null,m=[],p=!1;this.setSize=function(_,y){r.setSize(_,y),a.setSize(_,y);for(let M=0;M<m.length;M++){const C=m[M];C.setSize&&C.setSize(_,y)}},this.setEffects=function(_){m=_,p=m.length>0&&m[0].isRenderPass===!0;const y=r.width,M=r.height;for(let C=0;C<m.length;C++){const w=m[C];w.setSize&&w.setSize(y,M)}},this.begin=function(_,y){if(f||_.toneMapping===Bi&&m.length===0)return!1;if(v=y,y!==null){const M=y.width,C=y.height;(r.width!==M||r.height!==C)&&this.setSize(M,C)}return p===!1&&_.setRenderTarget(r),g=_.toneMapping,_.toneMapping=Bi,!0},this.hasRenderPass=function(){return p},this.end=function(_,y){_.toneMapping=g,f=!0;let M=r,C=a;for(let w=0;w<m.length;w++){const P=m[w];if(P.enabled!==!1&&(P.render(_,C,M,y),P.needsSwap!==!1)){const S=M;M=C,C=S}}if(d!==_.outputColorSpace||u!==_.toneMapping){d=_.outputColorSpace,u=_.toneMapping,l.defines={},ae.getTransfer(d)===me&&(l.defines.SRGB_TRANSFER="");const w=Q0[u];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,_.setRenderTarget(v),_.render(c,h),v=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const zh=new ci,tl=new ir(1,1),kh=new xh,Gh=new Ud,Hh=new bh,Lc=[],Ic=[],Dc=new Float32Array(16),Nc=new Float32Array(9),Uc=new Float32Array(4);function Is(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Lc[s];if(r===void 0&&(r=new Float32Array(s),Lc[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Ge(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function He(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ma(n,t){let e=Ic[t];e===void 0&&(e=new Int32Array(t),Ic[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function eg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function ig(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;n.uniform2fv(this.addr,t),He(e,t)}}function ng(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ge(e,t))return;n.uniform3fv(this.addr,t),He(e,t)}}function sg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;n.uniform4fv(this.addr,t),He(e,t)}}function rg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ge(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(Ge(e,i))return;Uc.set(i),n.uniformMatrix2fv(this.addr,!1,Uc),He(e,i)}}function ag(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ge(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(Ge(e,i))return;Nc.set(i),n.uniformMatrix3fv(this.addr,!1,Nc),He(e,i)}}function og(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ge(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(Ge(e,i))return;Dc.set(i),n.uniformMatrix4fv(this.addr,!1,Dc),He(e,i)}}function lg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function cg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;n.uniform2iv(this.addr,t),He(e,t)}}function hg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;n.uniform3iv(this.addr,t),He(e,t)}}function ug(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;n.uniform4iv(this.addr,t),He(e,t)}}function dg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function fg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;n.uniform2uiv(this.addr,t),He(e,t)}}function pg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;n.uniform3uiv(this.addr,t),He(e,t)}}function mg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;n.uniform4uiv(this.addr,t),He(e,t)}}function gg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(tl.compareFunction=e.isReversedDepthBuffer()?vl:_l,r=tl):r=zh,e.setTexture2D(t||r,s)}function xg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Gh,s)}function _g(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Hh,s)}function vg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||kh,s)}function Sg(n){switch(n){case 5126:return eg;case 35664:return ig;case 35665:return ng;case 35666:return sg;case 35674:return rg;case 35675:return ag;case 35676:return og;case 5124:case 35670:return lg;case 35667:case 35671:return cg;case 35668:case 35672:return hg;case 35669:case 35673:return ug;case 5125:return dg;case 36294:return fg;case 36295:return pg;case 36296:return mg;case 35678:case 36198:case 36298:case 36306:case 35682:return gg;case 35679:case 36299:case 36307:return xg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return vg}}function Mg(n,t){n.uniform1fv(this.addr,t)}function yg(n,t){const e=Is(t,this.size,2);n.uniform2fv(this.addr,e)}function Eg(n,t){const e=Is(t,this.size,3);n.uniform3fv(this.addr,e)}function bg(n,t){const e=Is(t,this.size,4);n.uniform4fv(this.addr,e)}function Tg(n,t){const e=Is(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function wg(n,t){const e=Is(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Ag(n,t){const e=Is(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Cg(n,t){n.uniform1iv(this.addr,t)}function Rg(n,t){n.uniform2iv(this.addr,t)}function Pg(n,t){n.uniform3iv(this.addr,t)}function Lg(n,t){n.uniform4iv(this.addr,t)}function Ig(n,t){n.uniform1uiv(this.addr,t)}function Dg(n,t){n.uniform2uiv(this.addr,t)}function Ng(n,t){n.uniform3uiv(this.addr,t)}function Ug(n,t){n.uniform4uiv(this.addr,t)}function Fg(n,t,e){const i=this.cache,s=t.length,r=ma(e,s);Ge(i,r)||(n.uniform1iv(this.addr,r),He(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=tl:a=zh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Og(n,t,e){const i=this.cache,s=t.length,r=ma(e,s);Ge(i,r)||(n.uniform1iv(this.addr,r),He(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Gh,r[a])}function Bg(n,t,e){const i=this.cache,s=t.length,r=ma(e,s);Ge(i,r)||(n.uniform1iv(this.addr,r),He(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Hh,r[a])}function zg(n,t,e){const i=this.cache,s=t.length,r=ma(e,s);Ge(i,r)||(n.uniform1iv(this.addr,r),He(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||kh,r[a])}function kg(n){switch(n){case 5126:return Mg;case 35664:return yg;case 35665:return Eg;case 35666:return bg;case 35674:return Tg;case 35675:return wg;case 35676:return Ag;case 5124:case 35670:return Cg;case 35667:case 35671:return Rg;case 35668:case 35672:return Pg;case 35669:case 35673:return Lg;case 5125:return Ig;case 36294:return Dg;case 36295:return Ng;case 36296:return Ug;case 35678:case 36198:case 36298:case 36306:case 35682:return Fg;case 35679:case 36299:case 36307:return Og;case 35680:case 36300:case 36308:case 36293:return Bg;case 36289:case 36303:case 36311:case 36292:return zg}}class Gg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Sg(e.type)}}class Hg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kg(e.type)}}class Vg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const to=/(\w+)(\])?(\[|\.)?/g;function Fc(n,t){n.seq.push(t),n.map[t.id]=t}function Wg(n,t,e){const i=n.name,s=i.length;for(to.lastIndex=0;;){const r=to.exec(i),a=to.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Fc(e,c===void 0?new Gg(o,n,t):new Hg(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new Vg(o),Fc(e,d)),e=d}}}class qr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Wg(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function Oc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Xg=37297;let qg=0;function Yg(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Bc=new $t;function Zg(n){ae._getMatrix(Bc,ae.workingColorSpace,n);const t=`mat3( ${Bc.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(n)){case Jr:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return Wt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function zc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Yg(n.getShaderSource(t),o)}else return r}function $g(n,t){const e=Zg(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Kg={[ih]:"Linear",[nh]:"Reinhard",[sh]:"Cineon",[hl]:"ACESFilmic",[ah]:"AgX",[oh]:"Neutral",[rh]:"Custom"};function Jg(n,t){const e=Kg[t];return e===void 0?(Wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Br=new L;function jg(){ae.getLuminanceCoefficients(Br);const n=Br.x.toFixed(4),t=Br.y.toFixed(4),e=Br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ys).join(`
`)}function tx(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function ex(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Ys(n){return n!==""}function kc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ix=/^[ \t]*#include +<([\w\d./]+)>/gm;function el(n){return n.replace(ix,sx)}const nx=new Map;function sx(n,t){let e=Jt[t];if(e===void 0){const i=nx.get(t);if(i!==void 0)e=Jt[i],Wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return el(e)}const rx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hc(n){return n.replace(rx,ax)}function ax(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vc(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const ox={[Ks]:"SHADOWMAP_TYPE_PCF",[Xs]:"SHADOWMAP_TYPE_VSM"};function lx(n){return ox[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const cx={[Vn]:"ENVMAP_TYPE_CUBE",[Ss]:"ENVMAP_TYPE_CUBE",[ha]:"ENVMAP_TYPE_CUBE_UV"};function hx(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":cx[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const ux={[Ss]:"ENVMAP_MODE_REFRACTION"};function dx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":ux[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const fx={[cl]:"ENVMAP_BLENDING_MULTIPLY",[pd]:"ENVMAP_BLENDING_MIX",[md]:"ENVMAP_BLENDING_ADD"};function px(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":fx[n.combine]||"ENVMAP_BLENDING_NONE"}function mx(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function gx(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=lx(e),c=hx(e),h=dx(e),d=px(e),u=mx(e),f=Qg(e),g=tx(r),v=s.createProgram();let m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ys).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ys).join(`
`),p.length>0&&(p+=`
`)):(m=[Vc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ys).join(`
`),p=[Vc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bi?"#define TONE_MAPPING":"",e.toneMapping!==Bi?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Bi?Jg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,$g("linearToOutputTexel",e.outputColorSpace),jg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ys).join(`
`)),a=el(a),a=kc(a,e),a=Gc(a,e),o=el(o),o=kc(o,e),o=Gc(o,e),a=Hc(a),o=Hc(o),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=_+m+a,M=_+p+o,C=Oc(s,s.VERTEX_SHADER,y),w=Oc(s,s.FRAGMENT_SHADER,M);s.attachShader(v,C),s.attachShader(v,w),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function P(R){if(n.debug.checkShaderErrors){const F=s.getProgramInfoLog(v)||"",k=s.getShaderInfoLog(C)||"",X=s.getShaderInfoLog(w)||"",O=F.trim(),H=k.trim(),U=X.trim();let nt=!0,Q=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(nt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,C,w);else{const gt=zc(s,C,"vertex"),_t=zc(s,w,"fragment");se("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+O+`
`+gt+`
`+_t)}else O!==""?Wt("WebGLProgram: Program Info Log:",O):(H===""||U==="")&&(Q=!1);Q&&(R.diagnostics={runnable:nt,programLog:O,vertexShader:{log:H,prefix:m},fragmentShader:{log:U,prefix:p}})}s.deleteShader(C),s.deleteShader(w),S=new qr(s,v),b=ex(s,v)}let S;this.getUniforms=function(){return S===void 0&&P(this),S};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let B=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(v,Xg)),B},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=qg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=w,this}let xx=0;class _x{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new vx(t),e.set(t,i)),i}}class vx{constructor(t){this.id=xx++,this.code=t,this.usedTimes=0}}function Sx(n,t,e,i,s,r){const a=new _h,o=new _x,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer;let u=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return l.add(S),S===0?"uv":`uv${S}`}function v(S,b,B,R,F){const k=R.fog,X=F.geometry,O=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?R.environment:null,H=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,U=t.get(S.envMap||O,H),nt=U&&U.mapping===ha?U.image.height:null,Q=f[S.type];S.precision!==null&&(u=i.getMaxPrecision(S.precision),u!==S.precision&&Wt("WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));const gt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,_t=gt!==void 0?gt.length:0;let xt=0;X.morphAttributes.position!==void 0&&(xt=1),X.morphAttributes.normal!==void 0&&(xt=2),X.morphAttributes.color!==void 0&&(xt=3);let Ht,de,ge,$;if(Q){const fe=Ui[Q];Ht=fe.vertexShader,de=fe.fragmentShader}else Ht=S.vertexShader,de=S.fragmentShader,o.update(S),ge=o.getVertexShaderID(S),$=o.getFragmentShaderID(S);const ot=n.getRenderTarget(),lt=n.state.buffers.depth.getReversed(),Ft=F.isInstancedMesh===!0,Nt=F.isBatchedMesh===!0,Vt=!!S.map,xe=!!S.matcap,qt=!!U,J=!!S.aoMap,et=!!S.lightMap,j=!!S.bumpMap,dt=!!S.normalMap,A=!!S.displacementMap,Ut=!!S.emissiveMap,vt=!!S.metalnessMap,Ot=!!S.roughnessMap,ct=S.anisotropy>0,T=S.clearcoat>0,x=S.dispersion>0,D=S.iridescence>0,q=S.sheen>0,K=S.transmission>0,Y=ct&&!!S.anisotropyMap,bt=T&&!!S.clearcoatMap,ht=T&&!!S.clearcoatNormalMap,It=T&&!!S.clearcoatRoughnessMap,Bt=D&&!!S.iridescenceMap,tt=D&&!!S.iridescenceThicknessMap,rt=q&&!!S.sheenColorMap,Tt=q&&!!S.sheenRoughnessMap,At=!!S.specularMap,St=!!S.specularColorMap,jt=!!S.specularIntensityMap,I=K&&!!S.transmissionMap,ut=K&&!!S.thicknessMap,at=!!S.gradientMap,Et=!!S.alphaMap,it=S.alphaTest>0,Z=!!S.alphaHash,wt=!!S.extensions;let Xt=Bi;S.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Xt=n.toneMapping);const Ee={shaderID:Q,shaderType:S.type,shaderName:S.name,vertexShader:Ht,fragmentShader:de,defines:S.defines,customVertexShaderID:ge,customFragmentShaderID:$,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:Nt,batchingColor:Nt&&F._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&F.instanceColor!==null,instancingMorph:Ft&&F.morphTexture!==null,outputColorSpace:ot===null?n.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:ys,alphaToCoverage:!!S.alphaToCoverage,map:Vt,matcap:xe,envMap:qt,envMapMode:qt&&U.mapping,envMapCubeUVHeight:nt,aoMap:J,lightMap:et,bumpMap:j,normalMap:dt,displacementMap:A,emissiveMap:Ut,normalMapObjectSpace:dt&&S.normalMapType===_d,normalMapTangentSpace:dt&&S.normalMapType===mh,metalnessMap:vt,roughnessMap:Ot,anisotropy:ct,anisotropyMap:Y,clearcoat:T,clearcoatMap:bt,clearcoatNormalMap:ht,clearcoatRoughnessMap:It,dispersion:x,iridescence:D,iridescenceMap:Bt,iridescenceThicknessMap:tt,sheen:q,sheenColorMap:rt,sheenRoughnessMap:Tt,specularMap:At,specularColorMap:St,specularIntensityMap:jt,transmission:K,transmissionMap:I,thicknessMap:ut,gradientMap:at,opaque:S.transparent===!1&&S.blending===xs&&S.alphaToCoverage===!1,alphaMap:Et,alphaTest:it,alphaHash:Z,combine:S.combine,mapUv:Vt&&g(S.map.channel),aoMapUv:J&&g(S.aoMap.channel),lightMapUv:et&&g(S.lightMap.channel),bumpMapUv:j&&g(S.bumpMap.channel),normalMapUv:dt&&g(S.normalMap.channel),displacementMapUv:A&&g(S.displacementMap.channel),emissiveMapUv:Ut&&g(S.emissiveMap.channel),metalnessMapUv:vt&&g(S.metalnessMap.channel),roughnessMapUv:Ot&&g(S.roughnessMap.channel),anisotropyMapUv:Y&&g(S.anisotropyMap.channel),clearcoatMapUv:bt&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:ht&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:It&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&g(S.sheenRoughnessMap.channel),specularMapUv:At&&g(S.specularMap.channel),specularColorMapUv:St&&g(S.specularColorMap.channel),specularIntensityMapUv:jt&&g(S.specularIntensityMap.channel),transmissionMapUv:I&&g(S.transmissionMap.channel),thicknessMapUv:ut&&g(S.thicknessMap.channel),alphaMapUv:Et&&g(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(dt||ct),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!X.attributes.uv&&(Vt||Et),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||X.attributes.normal===void 0&&dt===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:lt,skinning:F.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:xt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:Xt,decodeVideoTexture:Vt&&S.map.isVideoTexture===!0&&ae.getTransfer(S.map.colorSpace)===me,decodeVideoTextureEmissive:Ut&&S.emissiveMap.isVideoTexture===!0&&ae.getTransfer(S.emissiveMap.colorSpace)===me,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===qe,flipSided:S.side===di,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:wt&&S.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&S.extensions.multiDraw===!0||Nt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ee.vertexUv1s=l.has(1),Ee.vertexUv2s=l.has(2),Ee.vertexUv3s=l.has(3),l.clear(),Ee}function m(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const B in S.defines)b.push(B),b.push(S.defines[B]);return S.isRawShaderMaterial===!1&&(p(b,S),_(b,S),b.push(n.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function p(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function _(S,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){const b=f[S.type];let B;if(b){const R=Ui[b];B=Bf.clone(R.uniforms)}else B=S.uniforms;return B}function M(S,b){let B=h.get(b);return B!==void 0?++B.usedTimes:(B=new gx(n,b,S,s),c.push(B),h.set(b,B)),B}function C(S){if(--S.usedTimes===0){const b=c.indexOf(S);c[b]=c[c.length-1],c.pop(),h.delete(S.cacheKey),S.destroy()}}function w(S){o.remove(S)}function P(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:y,acquireProgram:M,releaseProgram:C,releaseShaderCache:w,programs:c,dispose:P}}function Mx(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function yx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Wc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Xc(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,v,m,p){let _=n[t];return _===void 0?(_={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:p},n[t]=_):(_.id=u.id,_.object=u,_.geometry=f,_.material=g,_.materialVariant=a(u),_.groupOrder=v,_.renderOrder=u.renderOrder,_.z=m,_.group=p),t++,_}function l(u,f,g,v,m,p){const _=o(u,f,g,v,m,p);g.transmission>0?i.push(_):g.transparent===!0?s.push(_):e.push(_)}function c(u,f,g,v,m,p){const _=o(u,f,g,v,m,p);g.transmission>0?i.unshift(_):g.transparent===!0?s.unshift(_):e.unshift(_)}function h(u,f){e.length>1&&e.sort(u||yx),i.length>1&&i.sort(f||Wc),s.length>1&&s.sort(f||Wc)}function d(){for(let u=t,f=n.length;u<f;u++){const g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Ex(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new Xc,n.set(i,[a])):s>=r.length?(a=new Xc,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function bx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Gt};break;case"SpotLight":e={position:new L,direction:new L,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new L,halfWidth:new L,halfHeight:new L};break}return n[t.id]=e,e}}}function Tx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let wx=0;function Ax(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Cx(n){const t=new bx,e=Tx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);const s=new L,r=new ce,a=new ce;function o(c){let h=0,d=0,u=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,_=0,y=0,M=0,C=0,w=0,P=0;c.sort(Ax);for(let b=0,B=c.length;b<B;b++){const R=c[b],F=R.color,k=R.intensity,X=R.distance;let O=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Ms?O=R.shadow.map.texture:O=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=F.r*k,d+=F.g*k,u+=F.b*k;else if(R.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(R.sh.coefficients[H],k);P++}else if(R.isDirectionalLight){const H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const U=R.shadow,nt=e.get(R);nt.shadowIntensity=U.intensity,nt.shadowBias=U.bias,nt.shadowNormalBias=U.normalBias,nt.shadowRadius=U.radius,nt.shadowMapSize=U.mapSize,i.directionalShadow[f]=nt,i.directionalShadowMap[f]=O,i.directionalShadowMatrix[f]=R.shadow.matrix,_++}i.directional[f]=H,f++}else if(R.isSpotLight){const H=t.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(F).multiplyScalar(k),H.distance=X,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,i.spot[v]=H;const U=R.shadow;if(R.map&&(i.spotLightMap[C]=R.map,C++,U.updateMatrices(R),R.castShadow&&w++),i.spotLightMatrix[v]=U.matrix,R.castShadow){const nt=e.get(R);nt.shadowIntensity=U.intensity,nt.shadowBias=U.bias,nt.shadowNormalBias=U.normalBias,nt.shadowRadius=U.radius,nt.shadowMapSize=U.mapSize,i.spotShadow[v]=nt,i.spotShadowMap[v]=O,M++}v++}else if(R.isRectAreaLight){const H=t.get(R);H.color.copy(F).multiplyScalar(k),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=H,m++}else if(R.isPointLight){const H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){const U=R.shadow,nt=e.get(R);nt.shadowIntensity=U.intensity,nt.shadowBias=U.bias,nt.shadowNormalBias=U.normalBias,nt.shadowRadius=U.radius,nt.shadowMapSize=U.mapSize,nt.shadowCameraNear=U.camera.near,nt.shadowCameraFar=U.camera.far,i.pointShadow[g]=nt,i.pointShadowMap[g]=O,i.pointShadowMatrix[g]=R.shadow.matrix,y++}i.point[g]=H,g++}else if(R.isHemisphereLight){const H=t.get(R);H.skyColor.copy(R.color).multiplyScalar(k),H.groundColor.copy(R.groundColor).multiplyScalar(k),i.hemi[p]=H,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_FLOAT_1,i.rectAreaLTC2=ft.LTC_FLOAT_2):(i.rectAreaLTC1=ft.LTC_HALF_1,i.rectAreaLTC2=ft.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const S=i.hash;(S.directionalLength!==f||S.pointLength!==g||S.spotLength!==v||S.rectAreaLength!==m||S.hemiLength!==p||S.numDirectionalShadows!==_||S.numPointShadows!==y||S.numSpotShadows!==M||S.numSpotMaps!==C||S.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=M+C-w,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=P,S.directionalLength=f,S.pointLength=g,S.spotLength=v,S.rectAreaLength=m,S.hemiLength=p,S.numDirectionalShadows=_,S.numPointShadows=y,S.numSpotShadows=M,S.numSpotMaps=C,S.numLightProbes=P,i.version=wx++)}function l(c,h){let d=0,u=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){const y=c[p];if(y.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(y.isSpotLight){const M=i.spot[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const M=i.point[u];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),u++}else if(y.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function qc(n){const t=new Cx(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Rx(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new qc(n),t.set(s,[o])):r>=a.length?(o=new qc(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const Px=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ix=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Dx=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Yc=new ce,Vs=new L,eo=new L;function Nx(n,t,e){let i=new yl;const s=new st,r=new st,a=new Ne,o=new Hf,l=new Vf,c={},h=e.maxTextureSize,d={[Sn]:di,[di]:Sn,[qe]:qe},u=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:Px,fragmentShader:Lx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ve;g.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new zt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ks;let p=this.type;this.render=function(w,P,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===$u&&(Wt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ks);const b=n.getRenderTarget(),B=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),F=n.state;F.setBlending(en),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const k=p!==this.type;k&&P.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(O=>O.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,O=w.length;X<O;X++){const H=w[X],U=H.shadow;if(U===void 0){Wt("WebGLShadowMap:",H,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const nt=U.getFrameExtents();s.multiply(nt),r.copy(U.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,U.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,U.mapSize.y=r.y));const Q=n.state.buffers.depth.getReversed();if(U.camera._reversedDepth=Q,U.map===null||k===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Xs){if(H.isPointLight){Wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new zi(s.x,s.y,{format:Ms,type:rn,minFilter:li,magFilter:li,generateMipmaps:!1}),U.map.texture.name=H.name+".shadowMap",U.map.depthTexture=new ir(s.x,s.y,Ci),U.map.depthTexture.name=H.name+".shadowMapDepth",U.map.depthTexture.format=an,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Qe,U.map.depthTexture.magFilter=Qe}else H.isPointLight?(U.map=new Bh(s.x),U.map.depthTexture=new ef(s.x,ki)):(U.map=new zi(s.x,s.y),U.map.depthTexture=new ir(s.x,s.y,ki)),U.map.depthTexture.name=H.name+".shadowMap",U.map.depthTexture.format=an,this.type===Ks?(U.map.depthTexture.compareFunction=Q?vl:_l,U.map.depthTexture.minFilter=li,U.map.depthTexture.magFilter=li):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Qe,U.map.depthTexture.magFilter=Qe);U.camera.updateProjectionMatrix()}const gt=U.map.isWebGLCubeRenderTarget?6:1;for(let _t=0;_t<gt;_t++){if(U.map.isWebGLCubeRenderTarget)n.setRenderTarget(U.map,_t),n.clear();else{_t===0&&(n.setRenderTarget(U.map),n.clear());const xt=U.getViewport(_t);a.set(r.x*xt.x,r.y*xt.y,r.x*xt.z,r.y*xt.w),F.viewport(a)}if(H.isPointLight){const xt=U.camera,Ht=U.matrix,de=H.distance||xt.far;de!==xt.far&&(xt.far=de,xt.updateProjectionMatrix()),Vs.setFromMatrixPosition(H.matrixWorld),xt.position.copy(Vs),eo.copy(xt.position),eo.add(Ix[_t]),xt.up.copy(Dx[_t]),xt.lookAt(eo),xt.updateMatrixWorld(),Ht.makeTranslation(-Vs.x,-Vs.y,-Vs.z),Yc.multiplyMatrices(xt.projectionMatrix,xt.matrixWorldInverse),U._frustum.setFromProjectionMatrix(Yc,xt.coordinateSystem,xt.reversedDepth)}else U.updateMatrices(H);i=U.getFrustum(),M(P,S,U.camera,H,this.type)}U.isPointLightShadow!==!0&&this.type===Xs&&_(U,S),U.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,B,R)};function _(w,P){const S=t.update(v);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new zi(s.x,s.y,{format:Ms,type:rn})),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(P,null,S,u,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(P,null,S,f,v,null)}function y(w,P,S,b){let B=null;const R=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)B=R;else if(B=S.isPointLight===!0?l:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const F=B.uuid,k=P.uuid;let X=c[F];X===void 0&&(X={},c[F]=X);let O=X[k];O===void 0&&(O=B.clone(),X[k]=O,P.addEventListener("dispose",C)),B=O}if(B.visible=P.visible,B.wireframe=P.wireframe,b===Xs?B.side=P.shadowSide!==null?P.shadowSide:P.side:B.side=P.shadowSide!==null?P.shadowSide:d[P.side],B.alphaMap=P.alphaMap,B.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,B.map=P.map,B.clipShadows=P.clipShadows,B.clippingPlanes=P.clippingPlanes,B.clipIntersection=P.clipIntersection,B.displacementMap=P.displacementMap,B.displacementScale=P.displacementScale,B.displacementBias=P.displacementBias,B.wireframeLinewidth=P.wireframeLinewidth,B.linewidth=P.linewidth,S.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const F=n.properties.get(B);F.light=S}return B}function M(w,P,S,b,B){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&B===Xs)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);const k=t.update(w),X=w.material;if(Array.isArray(X)){const O=k.groups;for(let H=0,U=O.length;H<U;H++){const nt=O[H],Q=X[nt.materialIndex];if(Q&&Q.visible){const gt=y(w,Q,b,B);w.onBeforeShadow(n,w,P,S,k,gt,nt),n.renderBufferDirect(S,null,k,gt,w,nt),w.onAfterShadow(n,w,P,S,k,gt,nt)}}}else if(X.visible){const O=y(w,X,b,B);w.onBeforeShadow(n,w,P,S,k,O,null),n.renderBufferDirect(S,null,k,O,w,null),w.onAfterShadow(n,w,P,S,k,O,null)}}const F=w.children;for(let k=0,X=F.length;k<X;k++)M(F[k],P,S,b,B)}function C(w){w.target.removeEventListener("dispose",C);for(const S in c){const b=c[S],B=w.target.uuid;B in b&&(b[B].dispose(),delete b[B])}}}function Ux(n,t){function e(){let I=!1;const ut=new Ne;let at=null;const Et=new Ne(0,0,0,0);return{setMask:function(it){at!==it&&!I&&(n.colorMask(it,it,it,it),at=it)},setLocked:function(it){I=it},setClear:function(it,Z,wt,Xt,Ee){Ee===!0&&(it*=Xt,Z*=Xt,wt*=Xt),ut.set(it,Z,wt,Xt),Et.equals(ut)===!1&&(n.clearColor(it,Z,wt,Xt),Et.copy(ut))},reset:function(){I=!1,at=null,Et.set(-1,0,0,0)}}}function i(){let I=!1,ut=!1,at=null,Et=null,it=null;return{setReversed:function(Z){if(ut!==Z){const wt=t.get("EXT_clip_control");Z?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),ut=Z;const Xt=it;it=null,this.setClear(Xt)}},getReversed:function(){return ut},setTest:function(Z){Z?ot(n.DEPTH_TEST):lt(n.DEPTH_TEST)},setMask:function(Z){at!==Z&&!I&&(n.depthMask(Z),at=Z)},setFunc:function(Z){if(ut&&(Z=Cd[Z]),Et!==Z){switch(Z){case ro:n.depthFunc(n.NEVER);break;case ao:n.depthFunc(n.ALWAYS);break;case oo:n.depthFunc(n.LESS);break;case vs:n.depthFunc(n.LEQUAL);break;case lo:n.depthFunc(n.EQUAL);break;case co:n.depthFunc(n.GEQUAL);break;case ho:n.depthFunc(n.GREATER);break;case uo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Et=Z}},setLocked:function(Z){I=Z},setClear:function(Z){it!==Z&&(it=Z,ut&&(Z=1-Z),n.clearDepth(Z))},reset:function(){I=!1,at=null,Et=null,it=null,ut=!1}}}function s(){let I=!1,ut=null,at=null,Et=null,it=null,Z=null,wt=null,Xt=null,Ee=null;return{setTest:function(fe){I||(fe?ot(n.STENCIL_TEST):lt(n.STENCIL_TEST))},setMask:function(fe){ut!==fe&&!I&&(n.stencilMask(fe),ut=fe)},setFunc:function(fe,Wi,Xi){(at!==fe||Et!==Wi||it!==Xi)&&(n.stencilFunc(fe,Wi,Xi),at=fe,Et=Wi,it=Xi)},setOp:function(fe,Wi,Xi){(Z!==fe||wt!==Wi||Xt!==Xi)&&(n.stencilOp(fe,Wi,Xi),Z=fe,wt=Wi,Xt=Xi)},setLocked:function(fe){I=fe},setClear:function(fe){Ee!==fe&&(n.clearStencil(fe),Ee=fe)},reset:function(){I=!1,ut=null,at=null,Et=null,it=null,Z=null,wt=null,Xt=null,Ee=null}}}const r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,f=[],g=null,v=!1,m=null,p=null,_=null,y=null,M=null,C=null,w=null,P=new Gt(0,0,0),S=0,b=!1,B=null,R=null,F=null,k=null,X=null;const O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,U=0;const nt=n.getParameter(n.VERSION);nt.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(nt)[1]),H=U>=1):nt.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),H=U>=2);let Q=null,gt={};const _t=n.getParameter(n.SCISSOR_BOX),xt=n.getParameter(n.VIEWPORT),Ht=new Ne().fromArray(_t),de=new Ne().fromArray(xt);function ge(I,ut,at,Et){const it=new Uint8Array(4),Z=n.createTexture();n.bindTexture(I,Z),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let wt=0;wt<at;wt++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ut,0,n.RGBA,1,1,Et,0,n.RGBA,n.UNSIGNED_BYTE,it):n.texImage2D(ut+wt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,it);return Z}const $={};$[n.TEXTURE_2D]=ge(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=ge(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=ge(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=ge(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ot(n.DEPTH_TEST),a.setFunc(vs),j(!1),dt(Vl),ot(n.CULL_FACE),J(en);function ot(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function lt(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function Ft(I,ut){return d[I]!==ut?(n.bindFramebuffer(I,ut),d[I]=ut,I===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ut),I===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ut),!0):!1}function Nt(I,ut){let at=f,Et=!1;if(I){at=u.get(ut),at===void 0&&(at=[],u.set(ut,at));const it=I.textures;if(at.length!==it.length||at[0]!==n.COLOR_ATTACHMENT0){for(let Z=0,wt=it.length;Z<wt;Z++)at[Z]=n.COLOR_ATTACHMENT0+Z;at.length=it.length,Et=!0}}else at[0]!==n.BACK&&(at[0]=n.BACK,Et=!0);Et&&n.drawBuffers(at)}function Vt(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const xe={[Bn]:n.FUNC_ADD,[Ju]:n.FUNC_SUBTRACT,[ju]:n.FUNC_REVERSE_SUBTRACT};xe[Qu]=n.MIN,xe[td]=n.MAX;const qt={[ed]:n.ZERO,[id]:n.ONE,[nd]:n.SRC_COLOR,[no]:n.SRC_ALPHA,[cd]:n.SRC_ALPHA_SATURATE,[od]:n.DST_COLOR,[rd]:n.DST_ALPHA,[sd]:n.ONE_MINUS_SRC_COLOR,[so]:n.ONE_MINUS_SRC_ALPHA,[ld]:n.ONE_MINUS_DST_COLOR,[ad]:n.ONE_MINUS_DST_ALPHA,[hd]:n.CONSTANT_COLOR,[ud]:n.ONE_MINUS_CONSTANT_COLOR,[dd]:n.CONSTANT_ALPHA,[fd]:n.ONE_MINUS_CONSTANT_ALPHA};function J(I,ut,at,Et,it,Z,wt,Xt,Ee,fe){if(I===en){v===!0&&(lt(n.BLEND),v=!1);return}if(v===!1&&(ot(n.BLEND),v=!0),I!==Ku){if(I!==m||fe!==b){if((p!==Bn||M!==Bn)&&(n.blendEquation(n.FUNC_ADD),p=Bn,M=Bn),fe)switch(I){case xs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kr:n.blendFunc(n.ONE,n.ONE);break;case Wl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:se("WebGLState: Invalid blending: ",I);break}else switch(I){case xs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Wl:se("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xl:se("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:se("WebGLState: Invalid blending: ",I);break}_=null,y=null,C=null,w=null,P.set(0,0,0),S=0,m=I,b=fe}return}it=it||ut,Z=Z||at,wt=wt||Et,(ut!==p||it!==M)&&(n.blendEquationSeparate(xe[ut],xe[it]),p=ut,M=it),(at!==_||Et!==y||Z!==C||wt!==w)&&(n.blendFuncSeparate(qt[at],qt[Et],qt[Z],qt[wt]),_=at,y=Et,C=Z,w=wt),(Xt.equals(P)===!1||Ee!==S)&&(n.blendColor(Xt.r,Xt.g,Xt.b,Ee),P.copy(Xt),S=Ee),m=I,b=!1}function et(I,ut){I.side===qe?lt(n.CULL_FACE):ot(n.CULL_FACE);let at=I.side===di;ut&&(at=!at),j(at),I.blending===xs&&I.transparent===!1?J(en):J(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const Et=I.stencilWrite;o.setTest(Et),Et&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ut(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ot(n.SAMPLE_ALPHA_TO_COVERAGE):lt(n.SAMPLE_ALPHA_TO_COVERAGE)}function j(I){B!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),B=I)}function dt(I){I!==Yu?(ot(n.CULL_FACE),I!==R&&(I===Vl?n.cullFace(n.BACK):I===Zu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):lt(n.CULL_FACE),R=I}function A(I){I!==F&&(H&&n.lineWidth(I),F=I)}function Ut(I,ut,at){I?(ot(n.POLYGON_OFFSET_FILL),(k!==ut||X!==at)&&(k=ut,X=at,a.getReversed()&&(ut=-ut),n.polygonOffset(ut,at))):lt(n.POLYGON_OFFSET_FILL)}function vt(I){I?ot(n.SCISSOR_TEST):lt(n.SCISSOR_TEST)}function Ot(I){I===void 0&&(I=n.TEXTURE0+O-1),Q!==I&&(n.activeTexture(I),Q=I)}function ct(I,ut,at){at===void 0&&(Q===null?at=n.TEXTURE0+O-1:at=Q);let Et=gt[at];Et===void 0&&(Et={type:void 0,texture:void 0},gt[at]=Et),(Et.type!==I||Et.texture!==ut)&&(Q!==at&&(n.activeTexture(at),Q=at),n.bindTexture(I,ut||$[I]),Et.type=I,Et.texture=ut)}function T(){const I=gt[Q];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(I){se("WebGLState:",I)}}function D(){try{n.compressedTexImage3D(...arguments)}catch(I){se("WebGLState:",I)}}function q(){try{n.texSubImage2D(...arguments)}catch(I){se("WebGLState:",I)}}function K(){try{n.texSubImage3D(...arguments)}catch(I){se("WebGLState:",I)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(I){se("WebGLState:",I)}}function bt(){try{n.compressedTexSubImage3D(...arguments)}catch(I){se("WebGLState:",I)}}function ht(){try{n.texStorage2D(...arguments)}catch(I){se("WebGLState:",I)}}function It(){try{n.texStorage3D(...arguments)}catch(I){se("WebGLState:",I)}}function Bt(){try{n.texImage2D(...arguments)}catch(I){se("WebGLState:",I)}}function tt(){try{n.texImage3D(...arguments)}catch(I){se("WebGLState:",I)}}function rt(I){Ht.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Ht.copy(I))}function Tt(I){de.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),de.copy(I))}function At(I,ut){let at=c.get(ut);at===void 0&&(at=new WeakMap,c.set(ut,at));let Et=at.get(I);Et===void 0&&(Et=n.getUniformBlockIndex(ut,I.name),at.set(I,Et))}function St(I,ut){const Et=c.get(ut).get(I);l.get(ut)!==Et&&(n.uniformBlockBinding(ut,Et,I.__bindingPointIndex),l.set(ut,Et))}function jt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},Q=null,gt={},d={},u=new WeakMap,f=[],g=null,v=!1,m=null,p=null,_=null,y=null,M=null,C=null,w=null,P=new Gt(0,0,0),S=0,b=!1,B=null,R=null,F=null,k=null,X=null,Ht.set(0,0,n.canvas.width,n.canvas.height),de.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ot,disable:lt,bindFramebuffer:Ft,drawBuffers:Nt,useProgram:Vt,setBlending:J,setMaterial:et,setFlipSided:j,setCullFace:dt,setLineWidth:A,setPolygonOffset:Ut,setScissorTest:vt,activeTexture:Ot,bindTexture:ct,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:D,texImage2D:Bt,texImage3D:tt,updateUBOMapping:At,uniformBlockBinding:St,texStorage2D:ht,texStorage3D:It,texSubImage2D:q,texSubImage3D:K,compressedTexSubImage2D:Y,compressedTexSubImage3D:bt,scissor:rt,viewport:Tt,reset:jt}}function Fx(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return f?new OffscreenCanvas(T,x):jr("canvas")}function v(T,x,D){let q=1;const K=ct(T);if((K.width>D||K.height>D)&&(q=D/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Y=Math.floor(q*K.width),bt=Math.floor(q*K.height);d===void 0&&(d=g(Y,bt));const ht=x?g(Y,bt):d;return ht.width=Y,ht.height=bt,ht.getContext("2d").drawImage(T,0,0,Y,bt),Wt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Y+"x"+bt+")."),ht}else return"data"in T&&Wt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){n.generateMipmap(T)}function _(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(T,x,D,q,K=!1){if(T!==null){if(n[T]!==void 0)return n[T];Wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=x;if(x===n.RED&&(D===n.FLOAT&&(Y=n.R32F),D===n.HALF_FLOAT&&(Y=n.R16F),D===n.UNSIGNED_BYTE&&(Y=n.R8)),x===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(Y=n.R8UI),D===n.UNSIGNED_SHORT&&(Y=n.R16UI),D===n.UNSIGNED_INT&&(Y=n.R32UI),D===n.BYTE&&(Y=n.R8I),D===n.SHORT&&(Y=n.R16I),D===n.INT&&(Y=n.R32I)),x===n.RG&&(D===n.FLOAT&&(Y=n.RG32F),D===n.HALF_FLOAT&&(Y=n.RG16F),D===n.UNSIGNED_BYTE&&(Y=n.RG8)),x===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(Y=n.RG8UI),D===n.UNSIGNED_SHORT&&(Y=n.RG16UI),D===n.UNSIGNED_INT&&(Y=n.RG32UI),D===n.BYTE&&(Y=n.RG8I),D===n.SHORT&&(Y=n.RG16I),D===n.INT&&(Y=n.RG32I)),x===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),D===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),D===n.UNSIGNED_INT&&(Y=n.RGB32UI),D===n.BYTE&&(Y=n.RGB8I),D===n.SHORT&&(Y=n.RGB16I),D===n.INT&&(Y=n.RGB32I)),x===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),D===n.UNSIGNED_INT&&(Y=n.RGBA32UI),D===n.BYTE&&(Y=n.RGBA8I),D===n.SHORT&&(Y=n.RGBA16I),D===n.INT&&(Y=n.RGBA32I)),x===n.RGB&&(D===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),D===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),x===n.RGBA){const bt=K?Jr:ae.getTransfer(q);D===n.FLOAT&&(Y=n.RGBA32F),D===n.HALF_FLOAT&&(Y=n.RGBA16F),D===n.UNSIGNED_BYTE&&(Y=bt===me?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function M(T,x){let D;return T?x===null||x===ki||x===tr?D=n.DEPTH24_STENCIL8:x===Ci?D=n.DEPTH32F_STENCIL8:x===Qs&&(D=n.DEPTH24_STENCIL8,Wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ki||x===tr?D=n.DEPTH_COMPONENT24:x===Ci?D=n.DEPTH_COMPONENT32F:x===Qs&&(D=n.DEPTH_COMPONENT16),D}function C(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Qe&&T.minFilter!==li?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function w(T){const x=T.target;x.removeEventListener("dispose",w),S(x),x.isVideoTexture&&h.delete(x)}function P(T){const x=T.target;x.removeEventListener("dispose",P),B(x)}function S(T){const x=i.get(T);if(x.__webglInit===void 0)return;const D=T.source,q=u.get(D);if(q){const K=q[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&b(T),Object.keys(q).length===0&&u.delete(D)}i.remove(T)}function b(T){const x=i.get(T);n.deleteTexture(x.__webglTexture);const D=T.source,q=u.get(D);delete q[x.__cacheKey],a.memory.textures--}function B(T){const x=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let K=0;K<x.__webglFramebuffer[q].length;K++)n.deleteFramebuffer(x.__webglFramebuffer[q][K]);else n.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)n.deleteFramebuffer(x.__webglFramebuffer[q]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const D=T.textures;for(let q=0,K=D.length;q<K;q++){const Y=i.get(D[q]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),a.memory.textures--),i.remove(D[q])}i.remove(T)}let R=0;function F(){R=0}function k(){const T=R;return T>=s.maxTextures&&Wt("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),R+=1,T}function X(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function O(T,x){const D=i.get(T);if(T.isVideoTexture&&vt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&D.__version!==T.version){const q=T.image;if(q===null)Wt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Wt("WebGLRenderer: Texture marked for update but image is incomplete");else{$(D,T,x);return}}else T.isExternalTexture&&(D.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+x)}function H(T,x){const D=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){$(D,T,x);return}else T.isExternalTexture&&(D.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+x)}function U(T,x){const D=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){$(D,T,x);return}e.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+x)}function nt(T,x){const D=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&D.__version!==T.version){ot(D,T,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+x)}const Q={[fo]:n.REPEAT,[ji]:n.CLAMP_TO_EDGE,[po]:n.MIRRORED_REPEAT},gt={[Qe]:n.NEAREST,[gd]:n.NEAREST_MIPMAP_NEAREST,[hr]:n.NEAREST_MIPMAP_LINEAR,[li]:n.LINEAR,[Sa]:n.LINEAR_MIPMAP_NEAREST,[kn]:n.LINEAR_MIPMAP_LINEAR},_t={[vd]:n.NEVER,[bd]:n.ALWAYS,[Sd]:n.LESS,[_l]:n.LEQUAL,[Md]:n.EQUAL,[vl]:n.GEQUAL,[yd]:n.GREATER,[Ed]:n.NOTEQUAL};function xt(T,x){if(x.type===Ci&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===li||x.magFilter===Sa||x.magFilter===hr||x.magFilter===kn||x.minFilter===li||x.minFilter===Sa||x.minFilter===hr||x.minFilter===kn)&&Wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,Q[x.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,Q[x.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,Q[x.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,gt[x.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,gt[x.minFilter]),x.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,_t[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Qe||x.minFilter!==hr&&x.minFilter!==kn||x.type===Ci&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const D=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Ht(T,x){let D=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",w));const q=x.source;let K=u.get(q);K===void 0&&(K={},u.set(q,K));const Y=X(x);if(Y!==T.__cacheKey){K[Y]===void 0&&(K[Y]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,D=!0),K[Y].usedTimes++;const bt=K[T.__cacheKey];bt!==void 0&&(K[T.__cacheKey].usedTimes--,bt.usedTimes===0&&b(x)),T.__cacheKey=Y,T.__webglTexture=K[Y].texture}return D}function de(T,x,D){return Math.floor(Math.floor(T/D)/x)}function ge(T,x,D,q){const Y=T.updateRanges;if(Y.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,D,q,x.data);else{Y.sort((tt,rt)=>tt.start-rt.start);let bt=0;for(let tt=1;tt<Y.length;tt++){const rt=Y[bt],Tt=Y[tt],At=rt.start+rt.count,St=de(Tt.start,x.width,4),jt=de(rt.start,x.width,4);Tt.start<=At+1&&St===jt&&de(Tt.start+Tt.count-1,x.width,4)===St?rt.count=Math.max(rt.count,Tt.start+Tt.count-rt.start):(++bt,Y[bt]=Tt)}Y.length=bt+1;const ht=n.getParameter(n.UNPACK_ROW_LENGTH),It=n.getParameter(n.UNPACK_SKIP_PIXELS),Bt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let tt=0,rt=Y.length;tt<rt;tt++){const Tt=Y[tt],At=Math.floor(Tt.start/4),St=Math.ceil(Tt.count/4),jt=At%x.width,I=Math.floor(At/x.width),ut=St,at=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,jt),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),e.texSubImage2D(n.TEXTURE_2D,0,jt,I,ut,at,D,q,x.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ht),n.pixelStorei(n.UNPACK_SKIP_PIXELS,It),n.pixelStorei(n.UNPACK_SKIP_ROWS,Bt)}}function $(T,x,D){let q=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=n.TEXTURE_3D);const K=Ht(T,x),Y=x.source;e.bindTexture(q,T.__webglTexture,n.TEXTURE0+D);const bt=i.get(Y);if(Y.version!==bt.__version||K===!0){e.activeTexture(n.TEXTURE0+D);const ht=ae.getPrimaries(ae.workingColorSpace),It=x.colorSpace===gn?null:ae.getPrimaries(x.colorSpace),Bt=x.colorSpace===gn||ht===It?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);let tt=v(x.image,!1,s.maxTextureSize);tt=Ot(x,tt);const rt=r.convert(x.format,x.colorSpace),Tt=r.convert(x.type);let At=y(x.internalFormat,rt,Tt,x.colorSpace,x.isVideoTexture);xt(q,x);let St;const jt=x.mipmaps,I=x.isVideoTexture!==!0,ut=bt.__version===void 0||K===!0,at=Y.dataReady,Et=C(x,tt);if(x.isDepthTexture)At=M(x.format===Gn,x.type),ut&&(I?e.texStorage2D(n.TEXTURE_2D,1,At,tt.width,tt.height):e.texImage2D(n.TEXTURE_2D,0,At,tt.width,tt.height,0,rt,Tt,null));else if(x.isDataTexture)if(jt.length>0){I&&ut&&e.texStorage2D(n.TEXTURE_2D,Et,At,jt[0].width,jt[0].height);for(let it=0,Z=jt.length;it<Z;it++)St=jt[it],I?at&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,St.width,St.height,rt,Tt,St.data):e.texImage2D(n.TEXTURE_2D,it,At,St.width,St.height,0,rt,Tt,St.data);x.generateMipmaps=!1}else I?(ut&&e.texStorage2D(n.TEXTURE_2D,Et,At,tt.width,tt.height),at&&ge(x,tt,rt,Tt)):e.texImage2D(n.TEXTURE_2D,0,At,tt.width,tt.height,0,rt,Tt,tt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){I&&ut&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Et,At,jt[0].width,jt[0].height,tt.depth);for(let it=0,Z=jt.length;it<Z;it++)if(St=jt[it],x.format!==Ri)if(rt!==null)if(I){if(at)if(x.layerUpdates.size>0){const wt=bc(St.width,St.height,x.format,x.type);for(const Xt of x.layerUpdates){const Ee=St.data.subarray(Xt*wt/St.data.BYTES_PER_ELEMENT,(Xt+1)*wt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,Xt,St.width,St.height,1,rt,Ee)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,0,St.width,St.height,tt.depth,rt,St.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,it,At,St.width,St.height,tt.depth,0,St.data,0,0);else Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?at&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,0,St.width,St.height,tt.depth,rt,Tt,St.data):e.texImage3D(n.TEXTURE_2D_ARRAY,it,At,St.width,St.height,tt.depth,0,rt,Tt,St.data)}else{I&&ut&&e.texStorage2D(n.TEXTURE_2D,Et,At,jt[0].width,jt[0].height);for(let it=0,Z=jt.length;it<Z;it++)St=jt[it],x.format!==Ri?rt!==null?I?at&&e.compressedTexSubImage2D(n.TEXTURE_2D,it,0,0,St.width,St.height,rt,St.data):e.compressedTexImage2D(n.TEXTURE_2D,it,At,St.width,St.height,0,St.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?at&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,St.width,St.height,rt,Tt,St.data):e.texImage2D(n.TEXTURE_2D,it,At,St.width,St.height,0,rt,Tt,St.data)}else if(x.isDataArrayTexture)if(I){if(ut&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Et,At,tt.width,tt.height,tt.depth),at)if(x.layerUpdates.size>0){const it=bc(tt.width,tt.height,x.format,x.type);for(const Z of x.layerUpdates){const wt=tt.data.subarray(Z*it/tt.data.BYTES_PER_ELEMENT,(Z+1)*it/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,tt.width,tt.height,1,rt,Tt,wt)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,rt,Tt,tt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,At,tt.width,tt.height,tt.depth,0,rt,Tt,tt.data);else if(x.isData3DTexture)I?(ut&&e.texStorage3D(n.TEXTURE_3D,Et,At,tt.width,tt.height,tt.depth),at&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,rt,Tt,tt.data)):e.texImage3D(n.TEXTURE_3D,0,At,tt.width,tt.height,tt.depth,0,rt,Tt,tt.data);else if(x.isFramebufferTexture){if(ut)if(I)e.texStorage2D(n.TEXTURE_2D,Et,At,tt.width,tt.height);else{let it=tt.width,Z=tt.height;for(let wt=0;wt<Et;wt++)e.texImage2D(n.TEXTURE_2D,wt,At,it,Z,0,rt,Tt,null),it>>=1,Z>>=1}}else if(jt.length>0){if(I&&ut){const it=ct(jt[0]);e.texStorage2D(n.TEXTURE_2D,Et,At,it.width,it.height)}for(let it=0,Z=jt.length;it<Z;it++)St=jt[it],I?at&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,rt,Tt,St):e.texImage2D(n.TEXTURE_2D,it,At,rt,Tt,St);x.generateMipmaps=!1}else if(I){if(ut){const it=ct(tt);e.texStorage2D(n.TEXTURE_2D,Et,At,it.width,it.height)}at&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,rt,Tt,tt)}else e.texImage2D(n.TEXTURE_2D,0,At,rt,Tt,tt);m(x)&&p(q),bt.__version=Y.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ot(T,x,D){if(x.image.length!==6)return;const q=Ht(T,x),K=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+D);const Y=i.get(K);if(K.version!==Y.__version||q===!0){e.activeTexture(n.TEXTURE0+D);const bt=ae.getPrimaries(ae.workingColorSpace),ht=x.colorSpace===gn?null:ae.getPrimaries(x.colorSpace),It=x.colorSpace===gn||bt===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const Bt=x.isCompressedTexture||x.image[0].isCompressedTexture,tt=x.image[0]&&x.image[0].isDataTexture,rt=[];for(let Z=0;Z<6;Z++)!Bt&&!tt?rt[Z]=v(x.image[Z],!0,s.maxCubemapSize):rt[Z]=tt?x.image[Z].image:x.image[Z],rt[Z]=Ot(x,rt[Z]);const Tt=rt[0],At=r.convert(x.format,x.colorSpace),St=r.convert(x.type),jt=y(x.internalFormat,At,St,x.colorSpace),I=x.isVideoTexture!==!0,ut=Y.__version===void 0||q===!0,at=K.dataReady;let Et=C(x,Tt);xt(n.TEXTURE_CUBE_MAP,x);let it;if(Bt){I&&ut&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Et,jt,Tt.width,Tt.height);for(let Z=0;Z<6;Z++){it=rt[Z].mipmaps;for(let wt=0;wt<it.length;wt++){const Xt=it[wt];x.format!==Ri?At!==null?I?at&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,wt,0,0,Xt.width,Xt.height,At,Xt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,wt,jt,Xt.width,Xt.height,0,Xt.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,wt,0,0,Xt.width,Xt.height,At,St,Xt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,wt,jt,Xt.width,Xt.height,0,At,St,Xt.data)}}}else{if(it=x.mipmaps,I&&ut){it.length>0&&Et++;const Z=ct(rt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Et,jt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(tt){I?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,rt[Z].width,rt[Z].height,At,St,rt[Z].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,jt,rt[Z].width,rt[Z].height,0,At,St,rt[Z].data);for(let wt=0;wt<it.length;wt++){const Ee=it[wt].image[Z].image;I?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,wt+1,0,0,Ee.width,Ee.height,At,St,Ee.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,wt+1,jt,Ee.width,Ee.height,0,At,St,Ee.data)}}else{I?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,At,St,rt[Z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,jt,At,St,rt[Z]);for(let wt=0;wt<it.length;wt++){const Xt=it[wt];I?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,wt+1,0,0,At,St,Xt.image[Z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,wt+1,jt,At,St,Xt.image[Z])}}}m(x)&&p(n.TEXTURE_CUBE_MAP),Y.__version=K.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function lt(T,x,D,q,K,Y){const bt=r.convert(D.format,D.colorSpace),ht=r.convert(D.type),It=y(D.internalFormat,bt,ht,D.colorSpace),Bt=i.get(x),tt=i.get(D);if(tt.__renderTarget=x,!Bt.__hasExternalTextures){const rt=Math.max(1,x.width>>Y),Tt=Math.max(1,x.height>>Y);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?e.texImage3D(K,Y,It,rt,Tt,x.depth,0,bt,ht,null):e.texImage2D(K,Y,It,rt,Tt,0,bt,ht,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),Ut(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,K,tt.__webglTexture,0,A(x)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,K,tt.__webglTexture,Y),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ft(T,x,D){if(n.bindRenderbuffer(n.RENDERBUFFER,T),x.depthBuffer){const q=x.depthTexture,K=q&&q.isDepthTexture?q.type:null,Y=M(x.stencilBuffer,K),bt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ut(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,A(x),Y,x.width,x.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,A(x),Y,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Y,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,bt,n.RENDERBUFFER,T)}else{const q=x.textures;for(let K=0;K<q.length;K++){const Y=q[K],bt=r.convert(Y.format,Y.colorSpace),ht=r.convert(Y.type),It=y(Y.internalFormat,bt,ht,Y.colorSpace);Ut(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,A(x),It,x.width,x.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,A(x),It,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,It,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Nt(T,x,D){const q=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(x.depthTexture);if(K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q){if(K.__webglInit===void 0&&(K.__webglInit=!0,x.depthTexture.addEventListener("dispose",w)),K.__webglTexture===void 0){K.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),xt(n.TEXTURE_CUBE_MAP,x.depthTexture);const Bt=r.convert(x.depthTexture.format),tt=r.convert(x.depthTexture.type);let rt;x.depthTexture.format===an?rt=n.DEPTH_COMPONENT24:x.depthTexture.format===Gn&&(rt=n.DEPTH24_STENCIL8);for(let Tt=0;Tt<6;Tt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,rt,x.width,x.height,0,Bt,tt,null)}}else O(x.depthTexture,0);const Y=K.__webglTexture,bt=A(x),ht=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+D:n.TEXTURE_2D,It=x.depthTexture.format===Gn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===an)Ut(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,It,ht,Y,0,bt):n.framebufferTexture2D(n.FRAMEBUFFER,It,ht,Y,0);else if(x.depthTexture.format===Gn)Ut(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,It,ht,Y,0,bt):n.framebufferTexture2D(n.FRAMEBUFFER,It,ht,Y,0);else throw new Error("Unknown depthTexture format")}function Vt(T){const x=i.get(T),D=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const q=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){const K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=q}if(T.depthTexture&&!x.__autoAllocateDepthBuffer)if(D)for(let q=0;q<6;q++)Nt(x.__webglFramebuffer[q],T,q);else{const q=T.texture.mipmaps;q&&q.length>0?Nt(x.__webglFramebuffer[0],T,0):Nt(x.__webglFramebuffer,T,0)}else if(D){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=n.createRenderbuffer(),Ft(x.__webglDepthbuffer[q],T,!1);else{const K=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,Y)}}else{const q=T.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Ft(x.__webglDepthbuffer,T,!1);else{const K=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,Y)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function xe(T,x,D){const q=i.get(T);x!==void 0&&lt(q.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&Vt(T)}function qt(T){const x=T.texture,D=i.get(T),q=i.get(x);T.addEventListener("dispose",P);const K=T.textures,Y=T.isWebGLCubeRenderTarget===!0,bt=K.length>1;if(bt||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=x.version,a.memory.textures++),Y){D.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer[ht]=[];for(let It=0;It<x.mipmaps.length;It++)D.__webglFramebuffer[ht][It]=n.createFramebuffer()}else D.__webglFramebuffer[ht]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer=[];for(let ht=0;ht<x.mipmaps.length;ht++)D.__webglFramebuffer[ht]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(bt)for(let ht=0,It=K.length;ht<It;ht++){const Bt=i.get(K[ht]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&Ut(T)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ht=0;ht<K.length;ht++){const It=K[ht];D.__webglColorRenderbuffer[ht]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[ht]);const Bt=r.convert(It.format,It.colorSpace),tt=r.convert(It.type),rt=y(It.internalFormat,Bt,tt,It.colorSpace,T.isXRRenderTarget===!0),Tt=A(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt,rt,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,D.__webglColorRenderbuffer[ht])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),Ft(D.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),xt(n.TEXTURE_CUBE_MAP,x);for(let ht=0;ht<6;ht++)if(x.mipmaps&&x.mipmaps.length>0)for(let It=0;It<x.mipmaps.length;It++)lt(D.__webglFramebuffer[ht][It],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,It);else lt(D.__webglFramebuffer[ht],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(x)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ht=0,It=K.length;ht<It;ht++){const Bt=K[ht],tt=i.get(Bt);let rt=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(rt=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(rt,tt.__webglTexture),xt(rt,Bt),lt(D.__webglFramebuffer,T,Bt,n.COLOR_ATTACHMENT0+ht,rt,0),m(Bt)&&p(rt)}e.unbindTexture()}else{let ht=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ht=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ht,q.__webglTexture),xt(ht,x),x.mipmaps&&x.mipmaps.length>0)for(let It=0;It<x.mipmaps.length;It++)lt(D.__webglFramebuffer[It],T,x,n.COLOR_ATTACHMENT0,ht,It);else lt(D.__webglFramebuffer,T,x,n.COLOR_ATTACHMENT0,ht,0);m(x)&&p(ht),e.unbindTexture()}T.depthBuffer&&Vt(T)}function J(T){const x=T.textures;for(let D=0,q=x.length;D<q;D++){const K=x[D];if(m(K)){const Y=_(T),bt=i.get(K).__webglTexture;e.bindTexture(Y,bt),p(Y),e.unbindTexture()}}}const et=[],j=[];function dt(T){if(T.samples>0){if(Ut(T)===!1){const x=T.textures,D=T.width,q=T.height;let K=n.COLOR_BUFFER_BIT;const Y=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,bt=i.get(T),ht=x.length>1;if(ht)for(let Bt=0;Bt<x.length;Bt++)e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Bt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Bt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);const It=T.texture.mipmaps;It&&It.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Bt=0;Bt<x.length;Bt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),ht){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,bt.__webglColorRenderbuffer[Bt]);const tt=i.get(x[Bt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,tt,0)}n.blitFramebuffer(0,0,D,q,0,0,D,q,K,n.NEAREST),l===!0&&(et.length=0,j.length=0,et.push(n.COLOR_ATTACHMENT0+Bt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(et.push(Y),j.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,j)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,et))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ht)for(let Bt=0;Bt<x.length;Bt++){e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Bt,n.RENDERBUFFER,bt.__webglColorRenderbuffer[Bt]);const tt=i.get(x[Bt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Bt,n.TEXTURE_2D,tt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function A(T){return Math.min(s.maxSamples,T.samples)}function Ut(T){const x=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function vt(T){const x=a.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function Ot(T,x){const D=T.colorSpace,q=T.format,K=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||D!==ys&&D!==gn&&(ae.getTransfer(D)===me?(q!==Ri||K!==xi)&&Wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):se("WebGLTextures: Unsupported texture color space:",D)),x}function ct(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.setTexture2D=O,this.setTexture2DArray=H,this.setTexture3D=U,this.setTextureCube=nt,this.rebindTextures=xe,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=Ut,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Ox(n,t){function e(i,s=gn){let r;const a=ae.getTransfer(s);if(i===xi)return n.UNSIGNED_BYTE;if(i===dl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===fl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===uh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===dh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ch)return n.BYTE;if(i===hh)return n.SHORT;if(i===Qs)return n.UNSIGNED_SHORT;if(i===ul)return n.INT;if(i===ki)return n.UNSIGNED_INT;if(i===Ci)return n.FLOAT;if(i===rn)return n.HALF_FLOAT;if(i===fh)return n.ALPHA;if(i===ph)return n.RGB;if(i===Ri)return n.RGBA;if(i===an)return n.DEPTH_COMPONENT;if(i===Gn)return n.DEPTH_STENCIL;if(i===pl)return n.RED;if(i===ml)return n.RED_INTEGER;if(i===Ms)return n.RG;if(i===gl)return n.RG_INTEGER;if(i===xl)return n.RGBA_INTEGER;if(i===Hr||i===Vr||i===Wr||i===Xr)if(a===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Vr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===mo||i===go||i===xo||i===_o)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===mo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===go)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_o)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vo||i===So||i===Mo||i===yo||i===Eo||i===bo||i===To)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===vo||i===So)return a===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Mo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===yo)return r.COMPRESSED_R11_EAC;if(i===Eo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===bo)return r.COMPRESSED_RG11_EAC;if(i===To)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===wo||i===Ao||i===Co||i===Ro||i===Po||i===Lo||i===Io||i===Do||i===No||i===Uo||i===Fo||i===Oo||i===Bo||i===zo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===wo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ao)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Co)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ro)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Po)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Lo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Io)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Do)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===No)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Uo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Oo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ko||i===Go||i===Ho)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ko)return a===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Go)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ho)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Vo||i===Wo||i===Xo||i===qo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Vo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Wo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===qo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===tr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const Bx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zx=`
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

}`;class kx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Th(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Hi({vertexShader:Bx,fragmentShader:zx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new zt(new _n(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gx extends Rs{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const v=typeof XRWebGLBinding<"u",m=new kx,p={},_=e.getContextAttributes();let y=null,M=null;const C=[],w=[],P=new st;let S=null;const b=new gi;b.viewport=new Ne;const B=new gi;B.viewport=new Ne;const R=[b,B],F=new Jf;let k=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ot=C[$];return ot===void 0&&(ot=new Ca,C[$]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function($){let ot=C[$];return ot===void 0&&(ot=new Ca,C[$]=ot),ot.getGripSpace()},this.getHand=function($){let ot=C[$];return ot===void 0&&(ot=new Ca,C[$]=ot),ot.getHandSpace()};function O($){const ot=w.indexOf($.inputSource);if(ot===-1)return;const lt=C[ot];lt!==void 0&&(lt.update($.inputSource,$.frame,c||a),lt.dispatchEvent({type:$.type,data:$.inputSource}))}function H(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",U);for(let $=0;$<C.length;$++){const ot=w[$];ot!==null&&(w[$]=null,C[$].disconnect(ot))}k=null,X=null,m.reset();for(const $ in p)delete p[$];t.setRenderTarget(y),f=null,u=null,d=null,s=null,M=null,ge.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&Wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&Wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",H),s.addEventListener("inputsourceschange",U),_.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(P),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let lt=null,Ft=null,Nt=null;_.depth&&(Nt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=_.stencil?Gn:an,Ft=_.stencil?tr:ki);const Vt={colorFormat:e.RGBA8,depthFormat:Nt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Vt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new zi(u.textureWidth,u.textureHeight,{format:Ri,type:xi,depthTexture:new ir(u.textureWidth,u.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const lt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,lt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new zi(f.framebufferWidth,f.framebufferHeight,{format:Ri,type:xi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ge.setContext(s),ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function U($){for(let ot=0;ot<$.removed.length;ot++){const lt=$.removed[ot],Ft=w.indexOf(lt);Ft>=0&&(w[Ft]=null,C[Ft].disconnect(lt))}for(let ot=0;ot<$.added.length;ot++){const lt=$.added[ot];let Ft=w.indexOf(lt);if(Ft===-1){for(let Vt=0;Vt<C.length;Vt++)if(Vt>=w.length){w.push(lt),Ft=Vt;break}else if(w[Vt]===null){w[Vt]=lt,Ft=Vt;break}if(Ft===-1)break}const Nt=C[Ft];Nt&&Nt.connect(lt)}}const nt=new L,Q=new L;function gt($,ot,lt){nt.setFromMatrixPosition(ot.matrixWorld),Q.setFromMatrixPosition(lt.matrixWorld);const Ft=nt.distanceTo(Q),Nt=ot.projectionMatrix.elements,Vt=lt.projectionMatrix.elements,xe=Nt[14]/(Nt[10]-1),qt=Nt[14]/(Nt[10]+1),J=(Nt[9]+1)/Nt[5],et=(Nt[9]-1)/Nt[5],j=(Nt[8]-1)/Nt[0],dt=(Vt[8]+1)/Vt[0],A=xe*j,Ut=xe*dt,vt=Ft/(-j+dt),Ot=vt*-j;if(ot.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ot),$.translateZ(vt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Nt[10]===-1)$.projectionMatrix.copy(ot.projectionMatrix),$.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const ct=xe+vt,T=qt+vt,x=A-Ot,D=Ut+(Ft-Ot),q=J*qt/T*ct,K=et*qt/T*ct;$.projectionMatrix.makePerspective(x,D,q,K,ct,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function _t($,ot){ot===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ot.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let ot=$.near,lt=$.far;m.texture!==null&&(m.depthNear>0&&(ot=m.depthNear),m.depthFar>0&&(lt=m.depthFar)),F.near=B.near=b.near=ot,F.far=B.far=b.far=lt,(k!==F.near||X!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),k=F.near,X=F.far),F.layers.mask=$.layers.mask|6,b.layers.mask=F.layers.mask&-5,B.layers.mask=F.layers.mask&-3;const Ft=$.parent,Nt=F.cameras;_t(F,Ft);for(let Vt=0;Vt<Nt.length;Vt++)_t(Nt[Vt],Ft);Nt.length===2?gt(F,b,B):F.projectionMatrix.copy(b.projectionMatrix),xt($,F,Ft)};function xt($,ot,lt){lt===null?$.matrix.copy(ot.matrixWorld):($.matrix.copy(lt.matrixWorld),$.matrix.invert(),$.matrix.multiply(ot.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ot.projectionMatrix),$.projectionMatrixInverse.copy(ot.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Zo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function($){return p[$]};let Ht=null;function de($,ot){if(h=ot.getViewerPose(c||a),g=ot,h!==null){const lt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let Ft=!1;lt.length!==F.cameras.length&&(F.cameras.length=0,Ft=!0);for(let qt=0;qt<lt.length;qt++){const J=lt[qt];let et=null;if(f!==null)et=f.getViewport(J);else{const dt=d.getViewSubImage(u,J);et=dt.viewport,qt===0&&(t.setRenderTargetTextures(M,dt.colorTexture,dt.depthStencilTexture),t.setRenderTarget(M))}let j=R[qt];j===void 0&&(j=new gi,j.layers.enable(qt),j.viewport=new Ne,R[qt]=j),j.matrix.fromArray(J.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(J.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(et.x,et.y,et.width,et.height),qt===0&&(F.matrix.copy(j.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ft===!0&&F.cameras.push(j)}const Nt=s.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const qt=d.getDepthInformation(lt[0]);qt&&qt.isValid&&qt.texture&&m.init(qt,s.renderState)}if(Nt&&Nt.includes("camera-access")&&v){t.state.unbindTexture(),d=i.getBinding();for(let qt=0;qt<lt.length;qt++){const J=lt[qt].camera;if(J){let et=p[J];et||(et=new Th,p[J]=et);const j=d.getCameraImage(J);et.sourceTexture=j}}}}for(let lt=0;lt<C.length;lt++){const Ft=w[lt],Nt=C[lt];Ft!==null&&Nt!==void 0&&Nt.update(Ft,ot,c||a)}Ht&&Ht($,ot),ot.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ot}),g=null}const ge=new Oh;ge.setAnimationLoop(de),this.setAnimationLoop=function($){Ht=$},this.dispose=function(){}}}const Rn=new Gi,Hx=new ce;function Vx(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Nh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,y,M){p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,_,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===di&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===di&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=t.get(p),y=_.envMap,M=_.envMapRotation;y&&(m.envMap.value=y,Rn.copy(M),Rn.x*=-1,Rn.y*=-1,Rn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Rn.y*=-1,Rn.z*=-1),m.envMapRotation.value.setFromMatrix4(Hx.makeRotationFromEuler(Rn)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===di&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Wx(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){const M=y.program;i.uniformBlockBinding(_,M)}function c(_,y){let M=s[_.id];M===void 0&&(g(_),M=h(_),s[_.id]=M,_.addEventListener("dispose",m));const C=y.program;i.updateUBOMapping(_,C);const w=t.render.frame;r[_.id]!==w&&(u(_),r[_.id]=w)}function h(_){const y=d();_.__bindingPointIndex=y;const M=n.createBuffer(),C=_.__size,w=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,C,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,M),M}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return se("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const y=s[_.id],M=_.uniforms,C=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let w=0,P=M.length;w<P;w++){const S=Array.isArray(M[w])?M[w]:[M[w]];for(let b=0,B=S.length;b<B;b++){const R=S[b];if(f(R,w,b,C)===!0){const F=R.__offset,k=Array.isArray(R.value)?R.value:[R.value];let X=0;for(let O=0;O<k.length;O++){const H=k[O],U=v(H);typeof H=="number"||typeof H=="boolean"?(R.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,F+X,R.__data)):H.isMatrix3?(R.__data[0]=H.elements[0],R.__data[1]=H.elements[1],R.__data[2]=H.elements[2],R.__data[3]=0,R.__data[4]=H.elements[3],R.__data[5]=H.elements[4],R.__data[6]=H.elements[5],R.__data[7]=0,R.__data[8]=H.elements[6],R.__data[9]=H.elements[7],R.__data[10]=H.elements[8],R.__data[11]=0):(H.toArray(R.__data,X),X+=U.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,y,M,C){const w=_.value,P=y+"_"+M;if(C[P]===void 0)return typeof w=="number"||typeof w=="boolean"?C[P]=w:C[P]=w.clone(),!0;{const S=C[P];if(typeof w=="number"||typeof w=="boolean"){if(S!==w)return C[P]=w,!0}else if(S.equals(w)===!1)return S.copy(w),!0}return!1}function g(_){const y=_.uniforms;let M=0;const C=16;for(let P=0,S=y.length;P<S;P++){const b=Array.isArray(y[P])?y[P]:[y[P]];for(let B=0,R=b.length;B<R;B++){const F=b[B],k=Array.isArray(F.value)?F.value:[F.value];for(let X=0,O=k.length;X<O;X++){const H=k[X],U=v(H),nt=M%C,Q=nt%U.boundary,gt=nt+Q;M+=Q,gt!==0&&C-gt<U.storage&&(M+=C-gt),F.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=U.storage}}}const w=M%C;return w>0&&(M+=C-w),_.__size=M,_.__cache={},this}function v(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?Wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Wt("WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const M=a.indexOf(y.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const _ in s)n.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}const Xx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Di=null;function qx(){return Di===null&&(Di=new Eh(Xx,16,16,Ms,rn),Di.name="DFG_LUT",Di.minFilter=li,Di.magFilter=li,Di.wrapS=ji,Di.wrapT=ji,Di.generateMipmaps=!1,Di.needsUpdate=!0),Di}class Yx{constructor(t={}){const{canvas:e=wd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=xi}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const v=f,m=new Set([xl,gl,ml]),p=new Set([xi,ki,Qs,tr,dl,fl]),_=new Uint32Array(4),y=new Int32Array(4);let M=null,C=null;const w=[],P=[];let S=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let B=!1;this._outputColorSpace=oi;let R=0,F=0,k=null,X=-1,O=null;const H=new Ne,U=new Ne;let nt=null;const Q=new Gt(0);let gt=0,_t=e.width,xt=e.height,Ht=1,de=null,ge=null;const $=new Ne(0,0,_t,xt),ot=new Ne(0,0,_t,xt);let lt=!1;const Ft=new yl;let Nt=!1,Vt=!1;const xe=new ce,qt=new L,J=new Ne,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let j=!1;function dt(){return k===null?Ht:1}let A=i;function Ut(E,N){return e.getContext(E,N)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ll}`),e.addEventListener("webglcontextlost",wt,!1),e.addEventListener("webglcontextrestored",Xt,!1),e.addEventListener("webglcontextcreationerror",Ee,!1),A===null){const N="webgl2";if(A=Ut(N,E),A===null)throw Ut(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw se("WebGLRenderer: "+E.message),E}let vt,Ot,ct,T,x,D,q,K,Y,bt,ht,It,Bt,tt,rt,Tt,At,St,jt,I,ut,at,Et;function it(){vt=new Y0(A),vt.init(),ut=new Ox(A,vt),Ot=new z0(A,vt,t,ut),ct=new Ux(A,vt),Ot.reversedDepthBuffer&&u&&ct.buffers.depth.setReversed(!0),T=new K0(A),x=new Mx,D=new Fx(A,vt,ct,x,Ot,ut,T),q=new q0(b),K=new ep(A),at=new O0(A,K),Y=new Z0(A,K,T,at),bt=new j0(A,Y,K,at,T),St=new J0(A,Ot,D),rt=new k0(x),ht=new Sx(b,q,vt,Ot,at,rt),It=new Vx(b,x),Bt=new Ex,tt=new Rx(vt),At=new F0(b,q,ct,bt,g,l),Tt=new Nx(b,bt,Ot),Et=new Wx(A,T,Ot,ct),jt=new B0(A,vt,T),I=new $0(A,vt,T),T.programs=ht.programs,b.capabilities=Ot,b.extensions=vt,b.properties=x,b.renderLists=Bt,b.shadowMap=Tt,b.state=ct,b.info=T}it(),v!==xi&&(S=new tg(v,e.width,e.height,s,r));const Z=new Gx(b,A);this.xr=Z,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const E=vt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=vt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Ht},this.setPixelRatio=function(E){E!==void 0&&(Ht=E,this.setSize(_t,xt,!1))},this.getSize=function(E){return E.set(_t,xt)},this.setSize=function(E,N,W=!0){if(Z.isPresenting){Wt("WebGLRenderer: Can't change size while VR device is presenting.");return}_t=E,xt=N,e.width=Math.floor(E*Ht),e.height=Math.floor(N*Ht),W===!0&&(e.style.width=E+"px",e.style.height=N+"px"),S!==null&&S.setSize(e.width,e.height),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(_t*Ht,xt*Ht).floor()},this.setDrawingBufferSize=function(E,N,W){_t=E,xt=N,Ht=W,e.width=Math.floor(E*W),e.height=Math.floor(N*W),this.setViewport(0,0,E,N)},this.setEffects=function(E){if(v===xi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let N=0;N<E.length;N++)if(E[N].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(H)},this.getViewport=function(E){return E.copy($)},this.setViewport=function(E,N,W,G){E.isVector4?$.set(E.x,E.y,E.z,E.w):$.set(E,N,W,G),ct.viewport(H.copy($).multiplyScalar(Ht).round())},this.getScissor=function(E){return E.copy(ot)},this.setScissor=function(E,N,W,G){E.isVector4?ot.set(E.x,E.y,E.z,E.w):ot.set(E,N,W,G),ct.scissor(U.copy(ot).multiplyScalar(Ht).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(E){ct.setScissorTest(lt=E)},this.setOpaqueSort=function(E){de=E},this.setTransparentSort=function(E){ge=E},this.getClearColor=function(E){return E.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor(...arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha(...arguments)},this.clear=function(E=!0,N=!0,W=!0){let G=0;if(E){let z=!1;if(k!==null){const pt=k.texture.format;z=m.has(pt)}if(z){const pt=k.texture.type,yt=p.has(pt),mt=At.getClearColor(),Ct=At.getClearAlpha(),Lt=mt.r,Zt=mt.g,Qt=mt.b;yt?(_[0]=Lt,_[1]=Zt,_[2]=Qt,_[3]=Ct,A.clearBufferuiv(A.COLOR,0,_)):(y[0]=Lt,y[1]=Zt,y[2]=Qt,y[3]=Ct,A.clearBufferiv(A.COLOR,0,y))}else G|=A.COLOR_BUFFER_BIT}N&&(G|=A.DEPTH_BUFFER_BIT),W&&(G|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&A.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",wt,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",Ee,!1),At.dispose(),Bt.dispose(),tt.dispose(),x.dispose(),q.dispose(),bt.dispose(),at.dispose(),Et.dispose(),ht.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Dl),Z.removeEventListener("sessionend",Nl),yn.stop()};function wt(E){E.preventDefault(),Qr("WebGLRenderer: Context Lost."),B=!0}function Xt(){Qr("WebGLRenderer: Context Restored."),B=!1;const E=T.autoReset,N=Tt.enabled,W=Tt.autoUpdate,G=Tt.needsUpdate,z=Tt.type;it(),T.autoReset=E,Tt.enabled=N,Tt.autoUpdate=W,Tt.needsUpdate=G,Tt.type=z}function Ee(E){se("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function fe(E){const N=E.target;N.removeEventListener("dispose",fe),Wi(N)}function Wi(E){Xi(E),x.remove(E)}function Xi(E){const N=x.get(E).programs;N!==void 0&&(N.forEach(function(W){ht.releaseProgram(W)}),E.isShaderMaterial&&ht.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,W,G,z,pt){N===null&&(N=et);const yt=z.isMesh&&z.matrixWorld.determinant()<0,mt=Gu(E,N,W,G,z);ct.setMaterial(G,yt);let Ct=W.index,Lt=1;if(G.wireframe===!0){if(Ct=Y.getWireframeAttribute(W),Ct===void 0)return;Lt=2}const Zt=W.drawRange,Qt=W.attributes.position;let Dt=Zt.start*Lt,_e=(Zt.start+Zt.count)*Lt;pt!==null&&(Dt=Math.max(Dt,pt.start*Lt),_e=Math.min(_e,(pt.start+pt.count)*Lt)),Ct!==null?(Dt=Math.max(Dt,0),_e=Math.min(_e,Ct.count)):Qt!=null&&(Dt=Math.max(Dt,0),_e=Math.min(_e,Qt.count));const Ue=_e-Dt;if(Ue<0||Ue===1/0)return;at.setup(z,G,mt,W,Ct);let Ie,ve=jt;if(Ct!==null&&(Ie=K.get(Ct),ve=I,ve.setIndex(Ie)),z.isMesh)G.wireframe===!0?(ct.setLineWidth(G.wireframeLinewidth*dt()),ve.setMode(A.LINES)):ve.setMode(A.TRIANGLES);else if(z.isLine){let ti=G.linewidth;ti===void 0&&(ti=1),ct.setLineWidth(ti*dt()),z.isLineSegments?ve.setMode(A.LINES):z.isLineLoop?ve.setMode(A.LINE_LOOP):ve.setMode(A.LINE_STRIP)}else z.isPoints?ve.setMode(A.POINTS):z.isSprite&&ve.setMode(A.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ta("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ve.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))ve.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const ti=z._multiDrawStarts,Rt=z._multiDrawCounts,fi=z._multiDrawCount,le=Ct?K.get(Ct).bytesPerElement:1,yi=x.get(G).currentProgram.getUniforms();for(let Li=0;Li<fi;Li++)yi.setValue(A,"_gl_DrawID",Li),ve.render(ti[Li]/le,Rt[Li])}else if(z.isInstancedMesh)ve.renderInstances(Dt,Ue,z.count);else if(W.isInstancedBufferGeometry){const ti=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Rt=Math.min(W.instanceCount,ti);ve.renderInstances(Dt,Ue,Rt)}else ve.render(Dt,Ue)};function Il(E,N,W){E.transparent===!0&&E.side===qe&&E.forceSinglePass===!1?(E.side=di,E.needsUpdate=!0,lr(E,N,W),E.side=Sn,E.needsUpdate=!0,lr(E,N,W),E.side=qe):lr(E,N,W)}this.compile=function(E,N,W=null){W===null&&(W=E),C=tt.get(W),C.init(N),P.push(C),W.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(C.pushLight(z),z.castShadow&&C.pushShadow(z))}),E!==W&&E.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(C.pushLight(z),z.castShadow&&C.pushShadow(z))}),C.setupLights();const G=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const pt=z.material;if(pt)if(Array.isArray(pt))for(let yt=0;yt<pt.length;yt++){const mt=pt[yt];Il(mt,W,z),G.add(mt)}else Il(pt,W,z),G.add(pt)}),C=P.pop(),G},this.compileAsync=function(E,N,W=null){const G=this.compile(E,N,W);return new Promise(z=>{function pt(){if(G.forEach(function(yt){x.get(yt).currentProgram.isReady()&&G.delete(yt)}),G.size===0){z(E);return}setTimeout(pt,10)}vt.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let ga=null;function ku(E){ga&&ga(E)}function Dl(){yn.stop()}function Nl(){yn.start()}const yn=new Oh;yn.setAnimationLoop(ku),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(E){ga=E,Z.setAnimationLoop(E),E===null?yn.stop():yn.start()},Z.addEventListener("sessionstart",Dl),Z.addEventListener("sessionend",Nl),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){se("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;const W=Z.enabled===!0&&Z.isPresenting===!0,G=S!==null&&(k===null||W)&&S.begin(b,k);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(N),N=Z.getCamera()),E.isScene===!0&&E.onBeforeRender(b,E,N,k),C=tt.get(E,P.length),C.init(N),P.push(C),xe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ft.setFromProjectionMatrix(xe,Oi,N.reversedDepth),Vt=this.localClippingEnabled,Nt=rt.init(this.clippingPlanes,Vt),M=Bt.get(E,w.length),M.init(),w.push(M),Z.enabled===!0&&Z.isPresenting===!0){const yt=b.xr.getDepthSensingMesh();yt!==null&&xa(yt,N,-1/0,b.sortObjects)}xa(E,N,0,b.sortObjects),M.finish(),b.sortObjects===!0&&M.sort(de,ge),j=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,j&&At.addToRenderList(M,E),this.info.render.frame++,Nt===!0&&rt.beginShadows();const z=C.state.shadowsArray;if(Tt.render(z,E,N),Nt===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&S.hasRenderPass())===!1){const yt=M.opaque,mt=M.transmissive;if(C.setupLights(),N.isArrayCamera){const Ct=N.cameras;if(mt.length>0)for(let Lt=0,Zt=Ct.length;Lt<Zt;Lt++){const Qt=Ct[Lt];Fl(yt,mt,E,Qt)}j&&At.render(E);for(let Lt=0,Zt=Ct.length;Lt<Zt;Lt++){const Qt=Ct[Lt];Ul(M,E,Qt,Qt.viewport)}}else mt.length>0&&Fl(yt,mt,E,N),j&&At.render(E),Ul(M,E,N)}k!==null&&F===0&&(D.updateMultisampleRenderTarget(k),D.updateRenderTargetMipmap(k)),G&&S.end(b),E.isScene===!0&&E.onAfterRender(b,E,N),at.resetDefaultState(),X=-1,O=null,P.pop(),P.length>0?(C=P[P.length-1],Nt===!0&&rt.setGlobalState(b.clippingPlanes,C.state.camera)):C=null,w.pop(),w.length>0?M=w[w.length-1]:M=null};function xa(E,N,W,G){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)C.pushLight(E),E.castShadow&&C.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ft.intersectsSprite(E)){G&&J.setFromMatrixPosition(E.matrixWorld).applyMatrix4(xe);const yt=bt.update(E),mt=E.material;mt.visible&&M.push(E,yt,mt,W,J.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ft.intersectsObject(E))){const yt=bt.update(E),mt=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),J.copy(E.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),J.copy(yt.boundingSphere.center)),J.applyMatrix4(E.matrixWorld).applyMatrix4(xe)),Array.isArray(mt)){const Ct=yt.groups;for(let Lt=0,Zt=Ct.length;Lt<Zt;Lt++){const Qt=Ct[Lt],Dt=mt[Qt.materialIndex];Dt&&Dt.visible&&M.push(E,yt,Dt,W,J.z,Qt)}}else mt.visible&&M.push(E,yt,mt,W,J.z,null)}}const pt=E.children;for(let yt=0,mt=pt.length;yt<mt;yt++)xa(pt[yt],N,W,G)}function Ul(E,N,W,G){const{opaque:z,transmissive:pt,transparent:yt}=E;C.setupLightsView(W),Nt===!0&&rt.setGlobalState(b.clippingPlanes,W),G&&ct.viewport(H.copy(G)),z.length>0&&or(z,N,W),pt.length>0&&or(pt,N,W),yt.length>0&&or(yt,N,W),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function Fl(E,N,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[G.id]===void 0){const Dt=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[G.id]=new zi(1,1,{generateMipmaps:!0,type:Dt?rn:xi,minFilter:kn,samples:Math.max(4,Ot.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace})}const pt=C.state.transmissionRenderTarget[G.id],yt=G.viewport||H;pt.setSize(yt.z*b.transmissionResolutionScale,yt.w*b.transmissionResolutionScale);const mt=b.getRenderTarget(),Ct=b.getActiveCubeFace(),Lt=b.getActiveMipmapLevel();b.setRenderTarget(pt),b.getClearColor(Q),gt=b.getClearAlpha(),gt<1&&b.setClearColor(16777215,.5),b.clear(),j&&At.render(W);const Zt=b.toneMapping;b.toneMapping=Bi;const Qt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),C.setupLightsView(G),Nt===!0&&rt.setGlobalState(b.clippingPlanes,G),or(E,W,G),D.updateMultisampleRenderTarget(pt),D.updateRenderTargetMipmap(pt),vt.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let _e=0,Ue=N.length;_e<Ue;_e++){const Ie=N[_e],{object:ve,geometry:ti,material:Rt,group:fi}=Ie;if(Rt.side===qe&&ve.layers.test(G.layers)){const le=Rt.side;Rt.side=di,Rt.needsUpdate=!0,Ol(ve,W,G,ti,Rt,fi),Rt.side=le,Rt.needsUpdate=!0,Dt=!0}}Dt===!0&&(D.updateMultisampleRenderTarget(pt),D.updateRenderTargetMipmap(pt))}b.setRenderTarget(mt,Ct,Lt),b.setClearColor(Q,gt),Qt!==void 0&&(G.viewport=Qt),b.toneMapping=Zt}function or(E,N,W){const G=N.isScene===!0?N.overrideMaterial:null;for(let z=0,pt=E.length;z<pt;z++){const yt=E[z],{object:mt,geometry:Ct,group:Lt}=yt;let Zt=yt.material;Zt.allowOverride===!0&&G!==null&&(Zt=G),mt.layers.test(W.layers)&&Ol(mt,N,W,Ct,Zt,Lt)}}function Ol(E,N,W,G,z,pt){E.onBeforeRender(b,N,W,G,z,pt),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(b,N,W,G,E,pt),z.transparent===!0&&z.side===qe&&z.forceSinglePass===!1?(z.side=di,z.needsUpdate=!0,b.renderBufferDirect(W,N,G,z,E,pt),z.side=Sn,z.needsUpdate=!0,b.renderBufferDirect(W,N,G,z,E,pt),z.side=qe):b.renderBufferDirect(W,N,G,z,E,pt),E.onAfterRender(b,N,W,G,z,pt)}function lr(E,N,W){N.isScene!==!0&&(N=et);const G=x.get(E),z=C.state.lights,pt=C.state.shadowsArray,yt=z.state.version,mt=ht.getParameters(E,z.state,pt,N,W),Ct=ht.getProgramCacheKey(mt);let Lt=G.programs;G.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?N.environment:null,G.fog=N.fog;const Zt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;G.envMap=q.get(E.envMap||G.environment,Zt),G.envMapRotation=G.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Lt===void 0&&(E.addEventListener("dispose",fe),Lt=new Map,G.programs=Lt);let Qt=Lt.get(Ct);if(Qt!==void 0){if(G.currentProgram===Qt&&G.lightsStateVersion===yt)return zl(E,mt),Qt}else mt.uniforms=ht.getUniforms(E),E.onBeforeCompile(mt,b),Qt=ht.acquireProgram(mt,Ct),Lt.set(Ct,Qt),G.uniforms=mt.uniforms;const Dt=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Dt.clippingPlanes=rt.uniform),zl(E,mt),G.needsLights=Vu(E),G.lightsStateVersion=yt,G.needsLights&&(Dt.ambientLightColor.value=z.state.ambient,Dt.lightProbe.value=z.state.probe,Dt.directionalLights.value=z.state.directional,Dt.directionalLightShadows.value=z.state.directionalShadow,Dt.spotLights.value=z.state.spot,Dt.spotLightShadows.value=z.state.spotShadow,Dt.rectAreaLights.value=z.state.rectArea,Dt.ltc_1.value=z.state.rectAreaLTC1,Dt.ltc_2.value=z.state.rectAreaLTC2,Dt.pointLights.value=z.state.point,Dt.pointLightShadows.value=z.state.pointShadow,Dt.hemisphereLights.value=z.state.hemi,Dt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Dt.spotLightMatrix.value=z.state.spotLightMatrix,Dt.spotLightMap.value=z.state.spotLightMap,Dt.pointShadowMatrix.value=z.state.pointShadowMatrix),G.currentProgram=Qt,G.uniformsList=null,Qt}function Bl(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=qr.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function zl(E,N){const W=x.get(E);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function Gu(E,N,W,G,z){N.isScene!==!0&&(N=et),D.resetTextureUnits();const pt=N.fog,yt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?N.environment:null,mt=k===null?b.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:ys,Ct=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Lt=q.get(G.envMap||yt,Ct),Zt=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Qt=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Dt=!!W.morphAttributes.position,_e=!!W.morphAttributes.normal,Ue=!!W.morphAttributes.color;let Ie=Bi;G.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Ie=b.toneMapping);const ve=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ti=ve!==void 0?ve.length:0,Rt=x.get(G),fi=C.state.lights;if(Nt===!0&&(Vt===!0||E!==O)){const We=E===O&&G.id===X;rt.setState(G,E,We)}let le=!1;G.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==fi.state.version||Rt.outputColorSpace!==mt||z.isBatchedMesh&&Rt.batching===!1||!z.isBatchedMesh&&Rt.batching===!0||z.isBatchedMesh&&Rt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Rt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Rt.instancing===!1||!z.isInstancedMesh&&Rt.instancing===!0||z.isSkinnedMesh&&Rt.skinning===!1||!z.isSkinnedMesh&&Rt.skinning===!0||z.isInstancedMesh&&Rt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Rt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Rt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Rt.instancingMorph===!1&&z.morphTexture!==null||Rt.envMap!==Lt||G.fog===!0&&Rt.fog!==pt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==rt.numPlanes||Rt.numIntersection!==rt.numIntersection)||Rt.vertexAlphas!==Zt||Rt.vertexTangents!==Qt||Rt.morphTargets!==Dt||Rt.morphNormals!==_e||Rt.morphColors!==Ue||Rt.toneMapping!==Ie||Rt.morphTargetsCount!==ti)&&(le=!0):(le=!0,Rt.__version=G.version);let yi=Rt.currentProgram;le===!0&&(yi=lr(G,N,z));let Li=!1,En=!1,qn=!1;const Me=yi.getUniforms(),Ye=Rt.uniforms;if(ct.useProgram(yi.program)&&(Li=!0,En=!0,qn=!0),G.id!==X&&(X=G.id,En=!0),Li||O!==E){ct.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Me.setValue(A,"projectionMatrix",E.projectionMatrix),Me.setValue(A,"viewMatrix",E.matrixWorldInverse);const ln=Me.map.cameraPosition;ln!==void 0&&ln.setValue(A,qt.setFromMatrixPosition(E.matrixWorld)),Ot.logarithmicDepthBuffer&&Me.setValue(A,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Me.setValue(A,"isOrthographic",E.isOrthographicCamera===!0),O!==E&&(O=E,En=!0,qn=!0)}if(Rt.needsLights&&(fi.state.directionalShadowMap.length>0&&Me.setValue(A,"directionalShadowMap",fi.state.directionalShadowMap,D),fi.state.spotShadowMap.length>0&&Me.setValue(A,"spotShadowMap",fi.state.spotShadowMap,D),fi.state.pointShadowMap.length>0&&Me.setValue(A,"pointShadowMap",fi.state.pointShadowMap,D)),z.isSkinnedMesh){Me.setOptional(A,z,"bindMatrix"),Me.setOptional(A,z,"bindMatrixInverse");const We=z.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),Me.setValue(A,"boneTexture",We.boneTexture,D))}z.isBatchedMesh&&(Me.setOptional(A,z,"batchingTexture"),Me.setValue(A,"batchingTexture",z._matricesTexture,D),Me.setOptional(A,z,"batchingIdTexture"),Me.setValue(A,"batchingIdTexture",z._indirectTexture,D),Me.setOptional(A,z,"batchingColorTexture"),z._colorsTexture!==null&&Me.setValue(A,"batchingColorTexture",z._colorsTexture,D));const on=W.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&St.update(z,W,yi),(En||Rt.receiveShadow!==z.receiveShadow)&&(Rt.receiveShadow=z.receiveShadow,Me.setValue(A,"receiveShadow",z.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&N.environment!==null&&(Ye.envMapIntensity.value=N.environmentIntensity),Ye.dfgLUT!==void 0&&(Ye.dfgLUT.value=qx()),En&&(Me.setValue(A,"toneMappingExposure",b.toneMappingExposure),Rt.needsLights&&Hu(Ye,qn),pt&&G.fog===!0&&It.refreshFogUniforms(Ye,pt),It.refreshMaterialUniforms(Ye,G,Ht,xt,C.state.transmissionRenderTarget[E.id]),qr.upload(A,Bl(Rt),Ye,D)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(qr.upload(A,Bl(Rt),Ye,D),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Me.setValue(A,"center",z.center),Me.setValue(A,"modelViewMatrix",z.modelViewMatrix),Me.setValue(A,"normalMatrix",z.normalMatrix),Me.setValue(A,"modelMatrix",z.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const We=G.uniformsGroups;for(let ln=0,Yn=We.length;ln<Yn;ln++){const kl=We[ln];Et.update(kl,yi),Et.bind(kl,yi)}}return yi}function Hu(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Vu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(E,N,W){const G=x.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),x.get(E.texture).__webglTexture=N,x.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:W,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,N){const W=x.get(E);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0};const Wu=A.createFramebuffer();this.setRenderTarget=function(E,N=0,W=0){k=E,R=N,F=W;let G=null,z=!1,pt=!1;if(E){const mt=x.get(E);if(mt.__useDefaultFramebuffer!==void 0){ct.bindFramebuffer(A.FRAMEBUFFER,mt.__webglFramebuffer),H.copy(E.viewport),U.copy(E.scissor),nt=E.scissorTest,ct.viewport(H),ct.scissor(U),ct.setScissorTest(nt),X=-1;return}else if(mt.__webglFramebuffer===void 0)D.setupRenderTarget(E);else if(mt.__hasExternalTextures)D.rebindTextures(E,x.get(E.texture).__webglTexture,x.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Zt=E.depthTexture;if(mt.__boundDepthTexture!==Zt){if(Zt!==null&&x.has(Zt)&&(E.width!==Zt.image.width||E.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(E)}}const Ct=E.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(pt=!0);const Lt=x.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Lt[N])?G=Lt[N][W]:G=Lt[N],z=!0):E.samples>0&&D.useMultisampledRTT(E)===!1?G=x.get(E).__webglMultisampledFramebuffer:Array.isArray(Lt)?G=Lt[W]:G=Lt,H.copy(E.viewport),U.copy(E.scissor),nt=E.scissorTest}else H.copy($).multiplyScalar(Ht).floor(),U.copy(ot).multiplyScalar(Ht).floor(),nt=lt;if(W!==0&&(G=Wu),ct.bindFramebuffer(A.FRAMEBUFFER,G)&&ct.drawBuffers(E,G),ct.viewport(H),ct.scissor(U),ct.setScissorTest(nt),z){const mt=x.get(E.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+N,mt.__webglTexture,W)}else if(pt){const mt=N;for(let Ct=0;Ct<E.textures.length;Ct++){const Lt=x.get(E.textures[Ct]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Ct,Lt.__webglTexture,W,mt)}}else if(E!==null&&W!==0){const mt=x.get(E.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,mt.__webglTexture,W)}X=-1},this.readRenderTargetPixels=function(E,N,W,G,z,pt,yt,mt=0){if(!(E&&E.isWebGLRenderTarget)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=x.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&yt!==void 0&&(Ct=Ct[yt]),Ct){ct.bindFramebuffer(A.FRAMEBUFFER,Ct);try{const Lt=E.textures[mt],Zt=Lt.format,Qt=Lt.type;if(E.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+mt),!Ot.textureFormatReadable(Zt)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(Qt)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-G&&W>=0&&W<=E.height-z&&A.readPixels(N,W,G,z,ut.convert(Zt),ut.convert(Qt),pt)}finally{const Lt=k!==null?x.get(k).__webglFramebuffer:null;ct.bindFramebuffer(A.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(E,N,W,G,z,pt,yt,mt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=x.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&yt!==void 0&&(Ct=Ct[yt]),Ct)if(N>=0&&N<=E.width-G&&W>=0&&W<=E.height-z){ct.bindFramebuffer(A.FRAMEBUFFER,Ct);const Lt=E.textures[mt],Zt=Lt.format,Qt=Lt.type;if(E.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+mt),!Ot.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Dt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Dt),A.bufferData(A.PIXEL_PACK_BUFFER,pt.byteLength,A.STREAM_READ),A.readPixels(N,W,G,z,ut.convert(Zt),ut.convert(Qt),0);const _e=k!==null?x.get(k).__webglFramebuffer:null;ct.bindFramebuffer(A.FRAMEBUFFER,_e);const Ue=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Ad(A,Ue,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Dt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,pt),A.deleteBuffer(Dt),A.deleteSync(Ue),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,N=null,W=0){const G=Math.pow(2,-W),z=Math.floor(E.image.width*G),pt=Math.floor(E.image.height*G),yt=N!==null?N.x:0,mt=N!==null?N.y:0;D.setTexture2D(E,0),A.copyTexSubImage2D(A.TEXTURE_2D,W,0,0,yt,mt,z,pt),ct.unbindTexture()};const Xu=A.createFramebuffer(),qu=A.createFramebuffer();this.copyTextureToTexture=function(E,N,W=null,G=null,z=0,pt=0){let yt,mt,Ct,Lt,Zt,Qt,Dt,_e,Ue;const Ie=E.isCompressedTexture?E.mipmaps[pt]:E.image;if(W!==null)yt=W.max.x-W.min.x,mt=W.max.y-W.min.y,Ct=W.isBox3?W.max.z-W.min.z:1,Lt=W.min.x,Zt=W.min.y,Qt=W.isBox3?W.min.z:0;else{const Ye=Math.pow(2,-z);yt=Math.floor(Ie.width*Ye),mt=Math.floor(Ie.height*Ye),E.isDataArrayTexture?Ct=Ie.depth:E.isData3DTexture?Ct=Math.floor(Ie.depth*Ye):Ct=1,Lt=0,Zt=0,Qt=0}G!==null?(Dt=G.x,_e=G.y,Ue=G.z):(Dt=0,_e=0,Ue=0);const ve=ut.convert(N.format),ti=ut.convert(N.type);let Rt;N.isData3DTexture?(D.setTexture3D(N,0),Rt=A.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(D.setTexture2DArray(N,0),Rt=A.TEXTURE_2D_ARRAY):(D.setTexture2D(N,0),Rt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,N.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,N.unpackAlignment);const fi=A.getParameter(A.UNPACK_ROW_LENGTH),le=A.getParameter(A.UNPACK_IMAGE_HEIGHT),yi=A.getParameter(A.UNPACK_SKIP_PIXELS),Li=A.getParameter(A.UNPACK_SKIP_ROWS),En=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Ie.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Ie.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Lt),A.pixelStorei(A.UNPACK_SKIP_ROWS,Zt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Qt);const qn=E.isDataArrayTexture||E.isData3DTexture,Me=N.isDataArrayTexture||N.isData3DTexture;if(E.isDepthTexture){const Ye=x.get(E),on=x.get(N),We=x.get(Ye.__renderTarget),ln=x.get(on.__renderTarget);ct.bindFramebuffer(A.READ_FRAMEBUFFER,We.__webglFramebuffer),ct.bindFramebuffer(A.DRAW_FRAMEBUFFER,ln.__webglFramebuffer);for(let Yn=0;Yn<Ct;Yn++)qn&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,x.get(E).__webglTexture,z,Qt+Yn),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,x.get(N).__webglTexture,pt,Ue+Yn)),A.blitFramebuffer(Lt,Zt,yt,mt,Dt,_e,yt,mt,A.DEPTH_BUFFER_BIT,A.NEAREST);ct.bindFramebuffer(A.READ_FRAMEBUFFER,null),ct.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(z!==0||E.isRenderTargetTexture||x.has(E)){const Ye=x.get(E),on=x.get(N);ct.bindFramebuffer(A.READ_FRAMEBUFFER,Xu),ct.bindFramebuffer(A.DRAW_FRAMEBUFFER,qu);for(let We=0;We<Ct;We++)qn?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ye.__webglTexture,z,Qt+We):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Ye.__webglTexture,z),Me?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,on.__webglTexture,pt,Ue+We):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,on.__webglTexture,pt),z!==0?A.blitFramebuffer(Lt,Zt,yt,mt,Dt,_e,yt,mt,A.COLOR_BUFFER_BIT,A.NEAREST):Me?A.copyTexSubImage3D(Rt,pt,Dt,_e,Ue+We,Lt,Zt,yt,mt):A.copyTexSubImage2D(Rt,pt,Dt,_e,Lt,Zt,yt,mt);ct.bindFramebuffer(A.READ_FRAMEBUFFER,null),ct.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Me?E.isDataTexture||E.isData3DTexture?A.texSubImage3D(Rt,pt,Dt,_e,Ue,yt,mt,Ct,ve,ti,Ie.data):N.isCompressedArrayTexture?A.compressedTexSubImage3D(Rt,pt,Dt,_e,Ue,yt,mt,Ct,ve,Ie.data):A.texSubImage3D(Rt,pt,Dt,_e,Ue,yt,mt,Ct,ve,ti,Ie):E.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,pt,Dt,_e,yt,mt,ve,ti,Ie.data):E.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,pt,Dt,_e,Ie.width,Ie.height,ve,Ie.data):A.texSubImage2D(A.TEXTURE_2D,pt,Dt,_e,yt,mt,ve,ti,Ie);A.pixelStorei(A.UNPACK_ROW_LENGTH,fi),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,le),A.pixelStorei(A.UNPACK_SKIP_PIXELS,yi),A.pixelStorei(A.UNPACK_SKIP_ROWS,Li),A.pixelStorei(A.UNPACK_SKIP_IMAGES,En),pt===0&&N.generateMipmaps&&A.generateMipmap(Rt),ct.unbindTexture()},this.initRenderTarget=function(E){x.get(E).__webglFramebuffer===void 0&&D.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?D.setTextureCube(E,0):E.isData3DTexture?D.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?D.setTexture2DArray(E,0):D.setTexture2D(E,0),ct.unbindTexture()},this.resetState=function(){R=0,F=0,k=null,ct.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}}function Zx(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new Ve;let c=0;for(let h=0;h<n.length;++h){const d=n[h];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const d=[];for(let u=0;u<n.length;++u){const f=n[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=n[u].attributes.position.count}l.setIndex(d)}for(const h in r){const d=Zc(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in a){const d=a[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){const f=[];for(let v=0;v<a[h].length;++v)f.push(a[h][v][u]);const g=Zc(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Zc(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){const h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new vi(a,e,i);let l=0;for(let c=0;c<n.length;++c){const h=n[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<e;g++){const v=h.getComponent(u,g);o.setComponent(u+d,g,v)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var ws,Vh,Wh;class $x{constructor(){ei(this,ws);this.colliders=[]}addCircle(t,e,i,s={}){const r={type:"circle",x:t,z:e,radius:i,blocksMovement:s.blocksMovement!==!1,blocksVision:s.blocksVision!==!1,cover:!!s.cover,tag:s.tag||"circle"};return this.colliders.push(r),r}addBox(t,e,i,s,r={}){const a={type:"box",minX:Math.min(t,i),maxX:Math.max(t,i),minZ:Math.min(e,s),maxZ:Math.max(e,s),blocksMovement:r.blocksMovement!==!1,blocksVision:r.blocksVision!==!1,cover:!!r.cover,tag:r.tag||"box"};return this.colliders.push(a),a}getCoverObjects(){return this.colliders.filter(t=>t.cover)}resolveCircle(t,e,i){let s=t,r=e;for(let a=0;a<2;a+=1)for(const o of this.colliders)if(o.blocksMovement)if(o.type==="circle"){const l=s-o.x,c=r-o.z,h=o.radius+i,d=l*l+c*c;if(d>=h*h)continue;const u=Math.sqrt(d)||1e-4,f=h-u;s+=l/u*f,r+=c/u*f}else{const l=Math.max(o.minX,Math.min(s,o.maxX)),c=Math.max(o.minZ,Math.min(r,o.maxZ)),h=s-l,d=r-c,u=h*h+d*d;if(u>1e-6){if(u>=i*i)continue;const f=Math.sqrt(u),g=i-f;s+=h/f*g,r+=d/f*g}else{const f=s-o.minX,g=o.maxX-s,v=r-o.minZ,m=o.maxZ-r,p=Math.min(f,g,v,m);p===f?s=o.minX-i:p===g?s=o.maxX+i:p===v?r=o.minZ-i:r=o.maxZ+i}}return{x:s,z:r}}isBlocked(t,e,i,s){const r=i-t,a=s-e;for(const o of this.colliders)if(o.blocksVision){if(o.type==="circle"){if(V(this,ws,Vh).call(this,t,e,r,a,o.x,o.z,o.radius))return!0}else if(V(this,ws,Wh).call(this,t,e,r,a,o))return!0}return!1}}ws=new WeakSet,Vh=function(t,e,i,s,r,a,o){const l=t-r,c=e-a,h=i*i+s*s;if(h<1e-6)return!1;const d=2*(l*i+c*s),u=l*l+c*c-o*o,f=d*d-4*h*u;if(f<0)return!1;const g=Math.sqrt(f),v=(-d-g)/(2*h),m=(-d+g)/(2*h);return v>.02&&v<.98||m>.02&&m<.98},Wh=function(t,e,i,s,r){let a=.02,o=.98;for(const l of["x","z"]){const c=l==="x"?t:e,h=l==="x"?i:s,d=l==="x"?r.minX:r.minZ,u=l==="x"?r.maxX:r.maxZ;if(Math.abs(h)<1e-6){if(c<d||c>u)return!1}else{let f=(d-c)/h,g=(u-c)/h;if(f>g&&([f,g]=[g,f]),a=Math.max(a,f),o=Math.min(o,g),a>o)return!1}}return o>a};const Je={width:44,depth:34,halfW:22,halfD:17,gateCenterZ:0,gateWidth:4,outerLimitX:30},$e={radius:.6,walkSpeed:4.6,sprintSpeed:8.2,acceleration:30,deceleration:22,turnSpeed:14,staminaMax:100,staminaDrain:26,staminaRegen:17,staminaRegenDelay:.55},pe={radius:.5,patrolSpeed:2.3,alertSpeed:1.75,chaseSpeed:5.35,searchSpeed:2.8,turnSpeed:8,catchRadius:1.5,patrolPauseMin:.4,patrolPauseMax:1.5,distractEveryMin:8,distractEveryMax:15,distractTimeMin:3.2,distractTimeMax:5.2,searchTime:5.5,gateCheckSpeed:2.8,gateCheckDuration:4.5,gateCheckSweepSpeed:1.35,gateCheckSweepAngle:.62,gateCheckCooldownMin:20,gateCheckCooldownMax:30,gateCheckRepeatMin:14,gateCheckRepeatMax:22,investigateSpeed:2.7,investigateScanTime:2.8,investigateMaxTime:10},vn={walkRadius:4.5,sprintRadius:12.5,walkLife:.55,sprintLife:.85,barkLife:1,distractedHearing:.4,gateCheckHearing:.55,reactionCooldown:1.5},be={radius:.42,start:{x:18,z:10.4},patrolSpeed:2.1,chaseSpeed:5.6,searchSpeed:3.2,turnSpeed:9,sightRange:9.5,hiddenSightRange:3.5,halfAngle:55*Math.PI/180,closeSense:2.2,hiddenCloseSense:1.5,catchRadius:1.05,hearingMultiplier:1.15,alertDuration:.55,lostSightTime:2.6,searchTime:3.2,sniffTimeMin:.9,sniffTimeMax:1.6,barkNoiseRadius:18,waypoints:[{x:18,z:10.4},{x:16.2,z:2},{x:19.4,z:-3.2}]},De={range:15,halfAngle:40*Math.PI/180,closeRange:2.6,distractedRange:5.5,checkRange:13,checkHalfAngle:30*Math.PI/180,gainBase:.55,sprintGain:1.65,hidingGain:.1,decay:.3,chaseGain:1.3,alertThreshold:.38,chaseThreshold:.98},Ke={winX:23.6,caughtOverlayDelay:1.35,winOverlayDelay:1.2,patrolRouteStandard:[{x:-7.5,z:-4.5},{x:3.5,z:-7.5},{x:13,z:-2.5},{x:10.5,z:8.5},{x:0,z:11.2},{x:-11.5,z:6.5}],patrolRouteNervous:[{x:0,z:11.2},{x:10.5,z:8.5},{x:17.2,z:4.6},{x:13,z:-2.5},{x:3.5,z:-7.5},{x:-7.5,z:-4.5},{x:-11.5,z:6.5}],gateCheckSpot:{x:18.8,z:2.6},playerStart:{x:-16,z:12.5},humanStart:{x:-7.5,z:-4.5},gate:{x:Je.halfW,z:0}},re={sky:10470616,fog:12046294,grass:7110460,grassDark:6057523,dirt:10254924,wood:9132587,woodDark:6240800,woodLight:11565634,houseWall:15852226,houseTrim:7161126,roof:10699813,roofDark:8204312,window:8372438,door:8011554,leafOrange:13658666,leafRed:11549227,leafYellow:14263595,leafGreen:5204785,turkeyBody:8079914,turkeyDark:6042656,turkeyWing:9329203,turkeyTail:11558959,beak:14721594,wattle:12597547,humanShirt:10238768,humanPants:3359836,skin:14856588,gateGlow:16757575};function _i(n,t,e){return Math.min(e,Math.max(t,n))}function sa(n,t,e){return n+(t-n)*e}function wi(n,t,e,i){return sa(n,t,1-Math.exp(-e*i))}function Hn(n,t,e,i){let s=(t-n+Math.PI)%(Math.PI*2)-Math.PI;return s<-Math.PI&&(s+=Math.PI*2),n+s*(1-Math.exp(-e*i))}function Ai(n,t,e,i){return Math.hypot(n-e,t-i)}function te(n,t){return n+Math.random()*(t-n)}function Kx(){return typeof window<"u"&&("ontouchstart"in window||navigator.maxTouchPoints>0)}function Ll(){return!!(typeof window<"u"&&window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches)}const Mt={grass:new Pt({color:re.grass}),grassDark:new Pt({color:re.grassDark}),dirt:new Pt({color:re.dirt}),wood:new Pt({color:re.wood}),woodDark:new Pt({color:re.woodDark}),woodLight:new Pt({color:re.woodLight}),wall:new Pt({color:re.houseWall}),trim:new Pt({color:re.houseTrim}),roof:new Pt({color:re.roof}),roofDark:new Pt({color:re.roofDark}),window:new Pt({color:re.window}),door:new Pt({color:re.door}),leafOrange:new Pt({color:re.leafOrange,flatShading:!0}),leafRed:new Pt({color:re.leafRed,flatShading:!0}),leafYellow:new Pt({color:re.leafYellow,flatShading:!0}),leafGreen:new Pt({color:re.leafGreen,flatShading:!0}),bush:new Pt({color:5598001,flatShading:!0}),bushLight:new Pt({color:6979386,flatShading:!0}),stone:new Pt({color:10131340,flatShading:!0}),gateGlow:new Pe({color:re.gateGlow})};function Kt(n,t,e,i,s,r,a,o=!0,l=!0){const c=new zt(new ye(n,t,e),i);return c.position.set(s,r,a),c.castShadow=o,c.receiveShadow=l,c}function fs(n,t,e,i,s,r,a,o){const l=new zt(new je(n,t,e,i),s);return l.position.set(r,a,o),l.castShadow=!0,l.receiveShadow=!0,l}function $c(n,t="#f7e7c6",e="#5a3318"){const i=document.createElement("canvas");i.width=512,i.height=192;const s=i.getContext("2d");s.fillStyle=t,s.fillRect(0,0,i.width,i.height),s.strokeStyle=e,s.lineWidth=14,s.strokeRect(10,10,i.width-20,i.height-20),s.fillStyle=e,s.font="bold 104px Georgia, serif",s.textAlign="center",s.textBaseline="middle",s.fillText(n,i.width/2,i.height/2+6);const r=new El(i);return r.colorSpace=oi,r.anisotropy=4,r}var ue,Xh,qh,Yh,Zh,$h,Kh,Jh,jh,Qh,tu,eu,iu,nu,su;class Jx{constructor(){ei(this,ue);this.scene=new Vd,this.scene.background=new Gt(re.sky),this.scene.fog=new Ml(re.fog,50,95),this.collision=new $x,this.coverObjects=[],this.time=0,this.gateProximity=0,this.gateFlare=0,V(this,ue,Xh).call(this),V(this,ue,qh).call(this),V(this,ue,Yh).call(this),V(this,ue,$h).call(this),V(this,ue,Kh).call(this),V(this,ue,Jh).call(this),V(this,ue,jh).call(this),V(this,ue,Qh).call(this),V(this,ue,tu).call(this),V(this,ue,eu).call(this),V(this,ue,iu).call(this),V(this,ue,nu).call(this),V(this,ue,su).call(this)}setGateProximity(t){this.gateProximity=Math.max(0,Math.min(1,t))}setShadowQuality(t,e){this.sun&&(this.sun.castShadow=!!t,e&&this.sun.shadow.mapSize.set(e,e),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null))}flareGate(t=1){this.gateFlare=Math.max(this.gateFlare,t)}resetGateEffects(){this.gateProximity=0,this.gateFlare=0}update(t){if(this.time+=t,this.gateFlare=Math.max(0,this.gateFlare-t*1.35),this.gateLight){const e=3+this.gateProximity*5,i=.7+this.gateProximity*1.5;this.gateLight.intensity=4.2+this.gateProximity*2.8+this.gateFlare*9+Math.sin(this.time*e)*i}this.gateSign&&(this.gateSign.rotation.z=Math.sin(this.time*1.7)*.025),this.gateFlag&&(this.gateFlag.rotation.y=Math.sin(this.time*2.2)*.25)}}ue=new WeakSet,Xh=function(){const t=new ne(128,24,16),e=t.attributes.position,i=[],s=new Gt(15913891),r=new Gt(12836325),a=new Gt(8696530),o=new Gt;for(let u=0;u<e.count;u+=1){const f=Math.max(0,Math.min(1,e.getY(u)/128));f<.22?o.copy(s).lerp(r,f/.22):o.copy(r).lerp(a,(f-.22)/.78),i.push(o.r,o.g,o.b)}t.setAttribute("color",new oe(i,3));const l=new Pe({vertexColors:!0,side:di,fog:!1,depthWrite:!1}),c=new zt(t,l);c.position.y=-6,this.scene.add(c);const h=new Pe({color:16774109,transparent:!0,opacity:.86,fog:!1,depthWrite:!1}),d=[[-42,31,-34,1.1],[8,35,-48,1.35],[48,29,16,1],[-52,27,32,.9],[22,33,54,1.2],[-6,38,18,.8]];for(const[u,f,g,v]of d){const m=new ie;m.position.set(u,f,g),m.scale.setScalar(v);for(let p=0;p<4;p+=1){const _=new zt(new ne(2.4-p*.25,9,7),h);_.position.set((p-1.5)*2.3,p%2*.5,p%3*.6-.5),_.scale.set(1.35,.62,.9),m.add(_)}this.scene.add(m)}},qh=function(){const t=new Wf(13624302,6052400,1.15);this.scene.add(t);const e=new Zf(16769720,2);e.position.set(16,30,18),e.castShadow=!0;const i=window.innerWidth<800?1024:2048;e.shadow.mapSize.set(i,i),e.shadow.camera.left=-30,e.shadow.camera.right=30,e.shadow.camera.top=30,e.shadow.camera.bottom=-30,e.shadow.camera.near=1,e.shadow.camera.far=80,e.shadow.bias=-6e-4,e.shadow.normalBias=.03,this.scene.add(e),this.scene.add(e.target),e.target.position.set(0,0,0),this.sun=e;const s=new $f(16771529,.35);this.scene.add(s)},Yh=function(){const t=Kt(110,.4,90,Mt.grassDark,0,-.25,0,!1,!0);t.receiveShadow=!0,this.scene.add(t);const e=Kt(Je.width,.4,Je.depth,Mt.grass,0,-.18,0,!1,!0);this.scene.add(e);const i=new Ji(1,10),s=[Mt.grassDark,Mt.grassLight,Mt.grass];for(let r=0;r<26;r+=1){const a=te(1.2,3.4),o=new zt(i,s[r%s.length]);o.scale.setScalar(a),o.rotation.x=-Math.PI/2,o.rotation.z=te(0,Math.PI*2),o.position.set(te(-20.5,20.5),.035,te(-16,16)),o.receiveShadow=!0,this.scene.add(o)}V(this,ue,Zh).call(this)},Zh=function(){const t=[[-14,-7.2],[-12.4,-6.2],[-9.6,-5.7],[-6.8,-5.1],[-4,-4.6],[-1.2,-4.1],[1.6,-3.6],[4.4,-3.1],[7.2,-2.6],[10,-2.1],[12.8,-1.6],[15.6,-1.1],[18.4,-.6],[20.8,-.1],[23,0]];for(let e=0;e<t.length;e+=1){const[i,s]=t[e],r=Kt(2.35,.08,1.55,Mt.dirt,i,.045,s,!1,!0);if(r.rotation.y=(e%2===0?1:-1)*.12,r.scale.x=.92+e%3*.06,this.scene.add(r),e%3===0){const a=new zt(new Ji(.28,6),Mt.stone);a.rotation.x=-Math.PI/2,a.rotation.z=te(0,Math.PI),a.position.set(i+te(-.5,.5),.09,s+te(-.35,.35)),a.receiveShadow=!0,this.scene.add(a)}}},$h=function(){const t=[],e=(d,u,f,g)=>Math.atan2(f-d,g-u),i=(d,u)=>{d.applyMatrix4(u),t.push(d)},s=(d,u,f,g)=>{const v=Math.hypot(f-d,g-u),m=e(d,u,f,g),p=new ce().makeRotationY(m);p.setPosition((d+f)/2,0,(u+g)/2);const _=Math.max(1,Math.round(v/2.4));for(let M=0;M<=_;M+=1){const C=-v/2+v/_*M,w=new ye(.28,2.15,.28),P=new ce().makeTranslation(0,1.075,C);i(w,p.clone().multiply(P))}for(const M of[.55,1.45]){const C=new ye(.12,.2,v),w=new ce().makeTranslation(0,M,0);i(C,p.clone().multiply(w))}const y=Math.floor(v/.52);for(let M=0;M<y;M+=1){const C=-v/2+.26+M*.52,w=1.55+(M%3===0?.12:0),P=new ye(.1,w,.34),S=new ce().makeTranslation(0,.86,C);i(P,p.clone().multiply(S))}},r=Je.halfW,a=Je.halfD,o=Je.gateWidth/2;s(-r,-a,r,-a),s(-r,a,r,a),s(-r,-a,-r,a),s(r,-a,r,-o-.2),s(r,o+.2,r,a);const l=Zx(t,!1),c=new zt(l,Mt.wood);c.castShadow=!0,c.receiveShadow=!0,this.scene.add(c);const h=.55;this.collision.addBox(-r-h,-a-h,r+h,-a+h,{tag:"fence"}),this.collision.addBox(-r-h,a-h,r+h,a+h,{tag:"fence"}),this.collision.addBox(-r-h,-a,-r+h,a,{tag:"fence"}),this.collision.addBox(r-h,-a,r+h,-o-.2,{tag:"fence"}),this.collision.addBox(r-h,o+.2,r+h,a,{tag:"fence"})},Kh=function(){const t=new ie;t.position.set(-14,0,-12),this.scene.add(t);const e=Kt(14,.45,8.4,Mt.woodDark,0,.22,0,!1,!0);t.add(e);const i=Kt(14,5,8,Mt.wall,0,2.7,0);t.add(i);const s=Mt.trim;for(const d of[-1,1])for(const u of[-1,1])t.add(Kt(.32,5.1,.32,s,d*6.9,2.7,u*3.9));for(const d of[-1,1]){const u=Kt(15.2,.34,5.1,d<0?Mt.roofDark:Mt.roof,0,5.85,d*2.02);u.rotation.x=d*.34,t.add(u)}t.add(Kt(15.4,.32,.4,Mt.roofDark,0,6.62,0));const r=new na;r.moveTo(-4.05,5.12),r.lineTo(4.05,5.12),r.lineTo(0,6.56),r.closePath();const a=new Al(r,{depth:.3,bevelEnabled:!1});a.translate(0,0,-.15);for(const d of[-1,1]){const u=new zt(a,Mt.wall);u.rotation.y=Math.PI/2,u.position.set(d*6.99,0,0),u.castShadow=!0,u.receiveShadow=!0,t.add(u);const f=new zt(new Ji(.44,12),Mt.window);f.rotation.y=d*(Math.PI/2),f.position.set(d*7.16,5.85,0),t.add(f);const g=new zt(new da(.48,.07,6,16),Mt.trim);g.rotation.y=d*(Math.PI/2),g.position.set(d*7.17,5.85,0),t.add(g)}const o=Kt(1,2.2,1,Mt.woodDark,4.2,6.4,-1.8);t.add(o),t.add(Kt(1.15,.2,1.15,Mt.trim,4.2,7.55,-1.8)),t.add(Kt(1.7,2.9,.14,Mt.door,.1,2.15,3.98)),t.add(Kt(2.1,.18,.2,Mt.trim,.1,3.7,4.02)),t.add(Kt(.16,2.9,.2,Mt.trim,-.8,2.15,4.02)),t.add(Kt(.16,2.9,.2,Mt.trim,1,2.15,4.02));const l=new zt(new ne(.08,8,8),Mt.gateGlow);l.position.set(.68,2.05,4.1),t.add(l);const c=[[-4.1,2.6,4.01],[4.2,2.6,4.01],[-6.9,2.7,-.8]];for(const[d,u,f]of c){const g=Kt(2.5,1.9,.16,Mt.trim,d,u,f),v=Kt(2.1,1.5,.18,Mt.window,d,u,f+.02);t.add(g,v),t.add(Kt(.12,1.5,.2,Mt.trim,d,u,f+.04)),t.add(Kt(2.1,.12,.2,Mt.trim,d,u,f+.04))}t.add(Kt(3,.25,1.4,Mt.wood,.1,.12,4.6,!1,!0)),t.add(Kt(3.2,.2,.5,Mt.woodLight,.1,.28,5.15,!1,!0));const h=new zt(new ne(.18,8,8),new Pe({color:16765567}));h.position.set(-1.15,3.15,4.12),t.add(h),this.collision.addBox(-21.4,-16.4,-6.6,-7.6,{tag:"house"}),this.collision.addBox(-22,-17,-6.4,-7.5,{blocksMovement:!1,tag:"house-visual"})},Jh=function(){const t=new ie;t.position.set(18.25,0,12.6),this.scene.add(t),t.add(Kt(2.2,1.7,2,Mt.woodLight,0,.85,0));for(const l of[.42,1.05,1.58])t.add(Kt(2.24,.055,2.04,Mt.woodDark,0,l,0,!1,!0));for(const l of[-1.04,1.04])for(const c of[-.94,.94])t.add(Kt(.14,1.78,.14,Mt.woodDark,l,.89,c));const e=new na;e.moveTo(-.42,0),e.lineTo(-.42,.52),e.absarc(0,.52,.42,Math.PI,0,!0),e.lineTo(.42,0),e.closePath();const i=new zt(new Rl(e,12),new Pe({color:2496527,side:qe}));i.position.set(0,.06,-1.01),i.rotation.y=Math.PI,t.add(i);for(const l of[-1,1]){const c=Kt(2.5,.16,1.35,l<0?Mt.roofDark:Mt.roof,0,1.92,l*.55);c.rotation.x=l*.3,t.add(c)}t.add(Kt(2.6,.16,.24,Mt.roofDark,0,2.16,0));const s=$c("WOOF");t.add(Kt(1.02,.42,.07,Mt.woodDark,0,1.55,-1.02));const r=new zt(new _n(.92,.34),new Pe({map:s,side:qe}));r.position.set(0,1.55,-1.065),r.rotation.y=Math.PI,t.add(r);const a=new zt(new je(.26,.2,.12,10),Mt.stone);a.position.set(-1.75,.06,-.35),a.receiveShadow=!0,t.add(a);const o=new zt(new Ji(.2,10),new Pt({color:6175266}));o.rotation.x=-Math.PI/2,o.position.set(-1.75,.125,-.35),t.add(o),this.collision.addBox(17,11.5,19.5,13.7,{cover:!0,tag:"doghouse"})},jh=function(){const t=Je.halfW,e=Je.gateCenterZ,i=Je.gateWidth/2,s=new ie;s.position.set(t,0,e),this.scene.add(s);for(const _ of[-1,1]){s.add(fs(.24,.28,3.2,8,Mt.woodDark,0,1.6,_*(i+.02))),s.add(fs(.32,.36,.3,8,Mt.wood,0,3.22,_*(i+.02)));const y=new zt(new ne(.19,10,10),new Pe({color:16761963}));y.position.set(0,2.55,_*(i+.02)),s.add(y)}s.add(Kt(.34,.4,Je.gateWidth+1.1,Mt.woodDark,0,3.42,0));const r=$c("EXIT");this.gateSign=new ie,this.gateSign.position.set(-.02,3.42,0);const a=new zt(new _n(2.6,1),new Pe({map:r,side:qe}));a.position.set(0,-.74,0),a.rotation.y=-Math.PI/2,this.gateSign.add(a),this.gateSign.add(Kt(.07,.3,.07,Mt.woodDark,0,-.15,-.9)),this.gateSign.add(Kt(.07,.3,.07,Mt.woodDark,0,-.15,.9)),s.add(this.gateSign);const o=new ie;o.position.set(-.18,1.25,-i+.12),o.rotation.y=-1.15;const l=new ie,c=Kt(.16,1.7,1.9,Mt.wood,0,0,0);l.add(c);for(const _ of[-.62,.62])l.add(Kt(.1,.16,1.65,Mt.woodDark,.1,_,0));o.add(l),s.add(o);const h=new Pe({color:16757575}),d=new zt(new Pi(.4,.9,4),h);d.rotation.z=-Math.PI/2,d.position.set(-1.35,1.35,0),s.add(d);const u=Kt(.16,.08,Je.gateWidth-.4,Mt.gateGlow,-.4,.06,0,!1,!1);s.add(u),this.gateLight=new qf(16757575,4.5,11,2),this.gateLight.position.set(t-.6,2.7,e),this.scene.add(this.gateLight);const f=new ie;f.position.set(t+.6,0,e+3.4),f.add(fs(.05,.05,4.2,6,Mt.woodDark,0,2.1,0));const g=new Pi(.52,1.4,4,1,!0),v=new zt(g,new Pt({color:14721594,side:qe}));v.rotation.z=-Math.PI/2,v.rotation.x=Math.PI/2,v.position.set(.75,3.5,0),this.gateFlag=v,f.add(v),this.scene.add(f);const m=new zt(new Ji(3.2,20),new Pt({color:9414990}));m.rotation.x=-Math.PI/2,m.position.set(t+4.2,.1,e),this.scene.add(m);const p=Kt(6.5,.08,3,Mt.dirt,t+3.1,.045,e,!1,!0);this.scene.add(p);for(let _=0;_<5;_+=1){const y=new zt(new Pi(.18,.7,5),new Pt({color:7178810,flatShading:!0}));y.position.set(t+te(1.8,6.5),.35,e+te(-3,3)),y.castShadow=!0,this.scene.add(y)}},Qh=function(){const t=[{x:-4.2,z:5.2,scale:1.15,color:"leafOrange"},{x:7.2,z:-6.6,scale:1,color:"leafRed"},{x:15.2,z:9,scale:1.05,color:"leafYellow"},{x:-17.6,z:5.6,scale:.95,color:"leafOrange"},{x:2.2,z:13.2,scale:1,color:"leafRed"},{x:18,z:-8.6,scale:.9,color:"leafYellow"},{x:-9,z:1.8,scale:.85,color:"leafOrange"}];for(const e of t){const i=new ie;i.position.set(e.x,0,e.z),i.scale.setScalar(e.scale),this.scene.add(i);const s=fs(.28,.42,2.4,7,Mt.woodDark,0,1.2,0);i.add(s);const r=Mt[e.color],a=[[0,3.1,0,1.25],[.85,2.75,.3,.9],[-.8,2.9,-.35,.85],[.1,3.8,-.2,.8]];for(let o=0;o<a.length;o+=1){const[l,c,h,d]=a[o],u=new zt(new gs(d,0),o%2===0?r:Mt.leafRed);u.position.set(l,c,h),u.rotation.set(te(0,3),te(0,3),te(0,3)),u.castShadow=!0,u.receiveShadow=!0,i.add(u)}this.collision.addCircle(e.x,e.z,.95*e.scale,{cover:!0,tag:"tree"})}},tu=function(){const t=[{x:5.4,z:3.2,scale:1},{x:-8.2,z:9.4,scale:1.1},{x:12,z:-6,scale:.95},{x:-16.5,z:-2.4,scale:.9},{x:.6,z:-8.8,scale:.85},{x:20,z:6.2,scale:.9},{x:-3,z:-1.2,scale:.8},{x:9,z:12,scale:.95}];for(const e of t){const i=new ie;i.position.set(e.x,0,e.z),i.scale.setScalar(e.scale),this.scene.add(i);const s=[[0,.5,0,.75],[.6,.4,.2,.55],[-.55,.42,-.15,.58],[.1,.85,-.2,.5],[-.2,.55,.55,.5]];for(let r=0;r<s.length;r+=1){const[a,o,l,c]=s[r],h=new zt(new gs(c,1),r%2===0?Mt.bush:Mt.bushLight);h.position.set(a,o,l),h.rotation.set(te(0,3),te(0,3),te(0,3)),h.castShadow=!0,h.receiveShadow=!0,i.add(h)}this.collision.addCircle(e.x,e.z,.95*e.scale,{cover:!0,tag:"bush"})}},eu=function(){const t=(e,i,s=1,r=0)=>{const a=new ie;a.position.set(e,0,i),a.rotation.y=r,a.scale.setScalar(s),this.scene.add(a);const o=Kt(1.3,1.25,1.3,Mt.woodLight,0,.63,0);a.add(o);for(const l of[-.56,.56])a.add(Kt(.12,1.3,.12,Mt.woodDark,l,.65,-.56)),a.add(Kt(.12,1.3,.12,Mt.woodDark,l,.65,.56)),a.add(Kt(1.3,.16,.1,Mt.woodDark,0,.53,.67));return a.add(Kt(1.35,.15,1.35,Mt.woodDark,0,1.3,0)),a};t(-8.5,-7,1,.12),t(-8.45,-7,.85,-.3).position.y=1.28,t(3.6,1.4,1,-.25),t(4,1.35,.9,.4).position.y=1.28,t(17.4,4.4,.95,.6),this.collision.addBox(-9.3,-7.8,-7.7,-6.2,{cover:!0,tag:"crate"}),this.collision.addBox(2.85,.6,4.95,2.4,{cover:!0,tag:"crate"}),this.collision.addCircle(17.4,4.4,.85,{cover:!0,tag:"crate"})},iu=function(){const t=(o,l,c)=>{const h=new ie;h.position.set(o,0,l),this.scene.add(h);const d=new zt(new je(.3,.24,.48,8),new Pt({color:11821884,flatShading:!0}));d.position.y=.24,d.castShadow=!0,d.receiveShadow=!0,h.add(d);const u=new zt(new je(.34,.34,.1,8),new Pt({color:13071688,flatShading:!0}));u.position.y=.48,u.castShadow=!0,h.add(u);const f=new zt(new je(.03,.04,.5,5),Mt.leafGreen);f.position.y=.72,h.add(f);for(let g=0;g<5;g+=1){const v=new zt(new gs(.1,0),c);v.position.set(Math.cos(g/5*Math.PI*2)*.14,.94+g%2*.08,Math.sin(g/5*Math.PI*2)*.14),v.castShadow=!0,h.add(v)}},e=new Pt({color:15254346,flatShading:!0}),i=new Pt({color:13130319,flatShading:!0});t(-16.4,-7.2,e),t(-11.6,-7.2,i),t(-21.2,-6.2,e),t(15.2,2.2,i);const s=new ie;s.position.set(11,0,7.4),this.scene.add(s),s.add(Kt(1.5,.12,1.5,Mt.woodLight,0,1,0));for(const o of[-.6,.6])for(const l of[-.6,.6])s.add(Kt(.12,1,.12,Mt.woodDark,o,.5,l));const r=new zt(new ne(.32,10,8),new Pt({color:13920554,flatShading:!0}));r.scale.y=.75,r.position.set(11,1.2,7.4),r.castShadow=!0,s.add(r);const a=fs(.7,.7,.9,10,Mt.leafYellow,13.2,.45,7.8);a.rotation.z=Math.PI/2,this.scene.add(a);for(let o=0;o<4;o+=1){const l=new zt(new bl(te(.25,.45),0),Mt.stone);l.position.set(te(-19,18),.2,te(-15,15)),l.rotation.set(te(0,3),te(0,3),te(0,3)),l.castShadow=!0,l.receiveShadow=!0,this.scene.add(l)}},nu=function(){const e=new _n(.24,.15),i=new Pt({vertexColors:!1,side:qe}),s=new Ko(e,i,260);s.receiveShadow=!0;const r=new ke,a=[new Gt(re.leafOrange),new Gt(re.leafRed),new Gt(re.leafYellow)];for(let o=0;o<260;o+=1)r.position.set(te(-21.3,21.3),.03,te(-16.3,16.3)),r.rotation.set(-Math.PI/2+te(-.15,.15),0,te(0,Math.PI*2)),r.scale.setScalar(te(.7,1.6)),r.updateMatrix(),s.setMatrixAt(o,r.matrix),s.setColorAt(o,a[o%a.length]);s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),this.scene.add(s)},su=function(){const t=[[-27,-11],[-26,2],[-25,15],[27,-14],[29,6],[26,16],[-20,-23],[-2,-24],[16,-22],[1,24],[17,23]];for(const[e,i]of t){const s=new ie;s.position.set(e,0,i),s.scale.setScalar(te(.9,1.4)),this.scene.add(s),s.add(fs(.3,.5,2.6,6,Mt.woodDark,0,1.3,0));const r=[Mt.leafOrange,Mt.leafRed,Mt.leafYellow,Mt.leafGreen];for(let a=0;a<3;a+=1){const o=new zt(new gs(te(.9,1.5),0),r[a%r.length]);o.position.set(te(-.8,.8),3.1+a*.5,te(-.8,.8)),o.castShadow=!0,s.add(o)}}};const Fe={body:new Pt({color:re.turkeyBody,flatShading:!0}),dark:new Pt({color:re.turkeyDark,flatShading:!0}),wing:new Pt({color:re.turkeyWing,flatShading:!0}),tailOrange:new Pt({color:re.turkeyTail,flatShading:!0}),tailRed:new Pt({color:re.leafRed,flatShading:!0}),tailYellow:new Pt({color:re.leafYellow,flatShading:!0}),beak:new Pt({color:re.beak,flatShading:!0}),wattle:new Pt({color:re.wattle,flatShading:!0}),eye:new Pt({color:16777215}),pupil:new Pe({color:1709072}),leg:new Pt({color:13208125,flatShading:!0})};function Ze(n,t,e=0,i=0,s=0){const r=new zt(n,t);return r.position.set(e,i,s),r.castShadow=!0,r.receiveShadow=!0,r}var As,ru,au;class jx{constructor(){ei(this,As);this.root=new ie,this.root.name="turkey",this.time=0,this.phase=0,this.crouch=0,this.panic=0,V(this,As,ru).call(this),V(this,As,au).call(this)}setPosition(t,e){this.root.position.set(t,0,e)}setHeading(t){this.root.rotation.y=t}resetAnimation(){this.time=0,this.phase=0,this.crouch=0,this.panic=0,this.bodyRig.position.set(0,0,0),this.bodyRig.rotation.set(0,0,0),this.bodyRig.scale.set(1,1,1),this.headGroup.position.set(0,1.48,.42),this.headGroup.rotation.set(0,0,0),this.tailGroup.rotation.set(0,0,0),this.tailGroup.scale.set(1,1,1);for(const t of this.wings)t.rotation.set(0,0,0);for(const t of this.legs)t.rotation.set(0,0,0),t.position.y=.55}update(t,e={}){const{speed:i=0,hidden:s=!1,panicked:r=!1}=e;this.time+=t;const a=i>.15,o=_i((i-$e.walkSpeed*.85)/($e.sprintSpeed-$e.walkSpeed*.85),0,1);a&&(this.phase+=t*(2.2+i*1.55)),this.crouch=wi(this.crouch,s?1:0,9,t),this.panic=wi(this.panic,r?1:0,8,t);const l=a?Math.sin(this.phase)*(.5+o*.55):Math.sin(this.time*1.7)*.05,c=a?Math.max(0,Math.sin(this.phase))*(.25+o*.35):0,h=a?Math.max(0,-Math.sin(this.phase))*(.25+o*.35):0;this.legs[0].rotation.x=l,this.legs[1].rotation.x=-l,this.legs[0].position.y=.55+c*.1+this.crouch*.12,this.legs[1].position.y=.55+h*.1+this.crouch*.12;const d=Math.sin(this.time*2.1)*.012,u=a?Math.abs(Math.sin(this.phase))*(.04+o*.09):0,f=this.panic*Math.sin(this.time*42)*.05;this.bodyRig.position.y=d+u-this.crouch*.26+f,this.bodyRig.position.z=this.crouch*.08,this.bodyRig.rotation.x=-o*.2-this.crouch*.12+this.panic*-.08,this.bodyRig.rotation.z=Math.sin(this.time*1.5)*.015+this.panic*Math.sin(this.time*33)*.04,this.bodyRig.scale.y=sa(1,.78,this.crouch),this.headGroup.rotation.x=this.crouch*.62+Math.sin(this.time*1.3)*.05-o*.18+this.panic*Math.sin(this.time*26)*.09,this.headGroup.rotation.y=s?0:Math.sin(this.time*.7)*.16,this.headGroup.position.y=1.48-this.crouch*.12,this.tailGroup.rotation.y=Math.sin(this.time*1.8+(a?this.phase*.4:0))*(.08+o*.1),this.tailGroup.rotation.x=-this.crouch*.4+o*.1,this.tailGroup.scale.setScalar(1-this.crouch*.18);const g=Math.sin(this.phase*.5)*(.08+o*.22),v=this.panic*(.75+Math.sin(this.time*30)*.25);this.wings[0].rotation.z=-g-v-this.crouch*.25,this.wings[1].rotation.z=g+v+this.crouch*.25,this.wings[0].rotation.x=a?Math.sin(this.phase)*.1:0,this.wings[1].rotation.x=a?Math.sin(this.phase)*.1:0}playCaught(){this.panic=1}}As=new WeakSet,ru=function(){this.bodyRig=new ie,this.root.add(this.bodyRig);const t=Ze(new ne(.62,14,10),Fe.body,0,.92,.02);t.scale.set(1,1.06,1.22),this.bodyRig.add(t);const e=Ze(new ne(.5,12,9),Fe.dark,0,.98,-.42);e.scale.set(.98,1,.95),this.bodyRig.add(e);const i=Ze(new ne(.36,10,8),Fe.wing,0,.85,.4);i.scale.set(.8,.9,.6),this.bodyRig.add(i),this.tailGroup=new ie,this.tailGroup.position.set(0,1.12,-.55),this.bodyRig.add(this.tailGroup);const s=[Fe.tailOrange,Fe.tailRed,Fe.tailYellow,Fe.tailOrange,Fe.tailRed];for(let d=0;d<7;d+=1){const u=(d-3)*.3,f=Ze(new ne(.33,8,6),s[d%s.length],0,0,0);f.scale.set(.26,1.35-Math.abs(d-3)*.07,.16),f.position.set(Math.sin(u)*.35,.35+Math.cos(u)*.1,-.08+Math.abs(u)*.05),f.rotation.z=-u*.85,f.rotation.x=-.55,this.tailGroup.add(f)}this.headGroup=new ie,this.headGroup.position.set(0,1.48,.42),this.bodyRig.add(this.headGroup);const r=Ze(new je(.12,.2,.5,7),Fe.body,0,-.24,.02);r.rotation.x=.16,this.headGroup.add(r);const a=Ze(new ne(.28,12,9),Fe.body,0,.06,.12);a.scale.set(.92,1,1),this.headGroup.add(a);const o=Ze(new ne(.16,8,6),Fe.wattle,0,.23,.17);o.scale.set(.9,1.15,.7),this.headGroup.add(o);const l=Ze(new Pi(.1,.34,6),Fe.beak,0,.02,.47);l.rotation.x=Math.PI/2,this.headGroup.add(l);const c=Ze(new Pi(.055,.28,6),Fe.wattle,0,.24,.42);c.rotation.x=-.5,c.rotation.z=.1,this.headGroup.add(c);const h=Ze(new ne(.1,8,6),Fe.wattle,0,-.14,.38);h.scale.set(.7,1.5,.8),h.rotation.x=-.2,this.headGroup.add(h);for(const d of[-1,1]){const u=Ze(new ne(.075,8,8),Fe.eye,d*.15,.11,.29),f=Ze(new ne(.038,6,6),Fe.pupil,d*.16,.12,.35),g=Ze(new ye(.13,.035,.06),Fe.dark,d*.15,.21,.3);g.rotation.z=d*.35,this.headGroup.add(u,f,g)}this.wings=[];for(const d of[-1,1]){const u=new ie;u.position.set(d*.56,1,.02);const f=Ze(new ne(.34,9,7),Fe.wing,0,-.2,0);f.scale.set(.3,.85,1.15),f.rotation.z=d*.18,u.add(f),this.bodyRig.add(u),this.wings.push(u)}this.legs=[];for(const d of[-1,1]){const u=new ie;u.position.set(d*.22,.55,.02);const f=Ze(new je(.055,.07,.5,6),Fe.leg,0,-.25,0),g=Ze(new ye(.2,.07,.34),Fe.leg,0,-.5,.08);for(const v of[-1,0,1]){const m=Ze(new ye(.055,.05,.2),Fe.beak,v*.07,-.51,.26);m.rotation.y=v*.28,u.add(m)}u.add(f,g),this.root.add(u),this.legs.push(u)}this.root.traverse(d=>{d.isMesh&&(d.castShadow=!0)})},au=function(){const t=new zt(new Ji(.7,16),new Pe({color:1910034,transparent:!0,opacity:.24,depthWrite:!1}));t.rotation.x=-Math.PI/2,t.position.y=.04,this.root.add(t)};const Te={shirt:new Pt({color:re.humanShirt,flatShading:!0}),shirtDark:new Pt({color:7285282,flatShading:!0}),pants:new Pt({color:re.humanPants,flatShading:!0}),shoe:new Pt({color:2761759,flatShading:!0}),skin:new Pt({color:re.skin,flatShading:!0}),hair:new Pt({color:5913122,flatShading:!0}),cap:new Pt({color:4156242,flatShading:!0}),capDark:new Pt({color:2968890,flatShading:!0}),white:new Pt({color:15985367}),dark:new Pe({color:2103830}),phone:new Pt({color:2369324}),phoneGlow:new Pe({color:8902911}),flashlightGlow:new Pe({color:16770720})};function io(n,t="!"){const e=document.createElement("canvas");e.width=128,e.height=128;const i=e.getContext("2d");i.clearRect(0,0,128,128),i.fillStyle="rgba(35, 22, 10, 0.35)",i.beginPath(),i.arc(64,70,44,0,Math.PI*2),i.fill(),i.fillStyle=n,i.beginPath(),i.arc(64,62,38,0,Math.PI*2),i.fill(),i.strokeStyle="#fff4dc",i.lineWidth=7,i.stroke(),i.fillStyle="#3a230f",i.font="bold 70px Georgia, serif",i.textAlign="center",i.textBaseline="middle",i.fillText(t,64,62);const s=new El(e);return s.colorSpace=oi,s}function we(n,t,e=0,i=0,s=0){const r=new zt(n,t);return r.position.set(e,i,s),r.castShadow=!0,r.receiveShadow=!0,r}var Cs,ou,lu;class Qx{constructor(){ei(this,Cs);this.root=new ie,this.root.name="human",this.time=0,this.phase=0,this.alertTextureLow=io("#f2c744"),this.alertTextureHigh=io("#e2482f"),this.questionTexture=io("#e0a23a","?"),V(this,Cs,ou).call(this),V(this,Cs,lu).call(this)}setPosition(t,e){this.root.position.set(t,0,e)}setHeading(t){this.root.rotation.y=t}update(t,e={}){const{speed:i=0,state:s="PATROL",alert:r=0,caught:a=!1}=e;this.time+=t;const o=i>.15,l=s==="CHASE"||i>4,c=s==="DISTRACTED",h=s==="GATE_CHECK",d=s==="INVESTIGATE";o&&(this.phase+=t*(2.4+i*2));const u=o?Math.sin(this.phase)*(l?.85:.5):0;this.legs[0].rotation.x=u,this.legs[1].rotation.x=-u,this.legs[0].position.y=.86+(o?Math.max(0,Math.sin(this.phase))*.07:0),this.legs[1].position.y=.86+(o?Math.max(0,-Math.sin(this.phase))*.07:0);const f=o?Math.abs(Math.sin(this.phase))*(l?.07:.035):Math.sin(this.time*1.9)*.01;if(this.bodyRig.position.y=f,this.bodyRig.rotation.x=l?-.16:o?-.05:0,this.arms[0].rotation.x=-u*.8,this.arms[1].rotation.x=u*.8,this.arms[0].rotation.z=.12,this.arms[1].rotation.z=-.12,c)this.arms[0].rotation.x=-1.15,this.arms[0].rotation.z=-.42,this.arms[1].rotation.x=-1,this.arms[1].rotation.z=.35,this.phone.visible=!0,this.headGroup.rotation.x=.48+Math.sin(this.time*2.3)*.04,this.headGroup.rotation.y=Math.sin(this.time*.9)*.05;else if(h)this.phone.visible=!1,this.arms[0].rotation.x=-.45,this.arms[0].rotation.z=.2,this.arms[1].rotation.x=-1.25,this.arms[1].rotation.z=-.2,this.headGroup.rotation.x=.04,this.headGroup.rotation.y=0;else{this.phone.visible=!1;const p=s==="SEARCH"||d;this.headGroup.rotation.x=p?-.05:0,this.headGroup.rotation.y=p?Math.sin(this.time*3.1)*.7:Math.sin(this.time*.8)*.16}this.flashlightProp.visible=h&&!a,this.beam.visible=h&&!a,this.beamInner.visible=h&&!a,a&&(this.bodyRig.rotation.x=-.3,this.arms[0].rotation.x=-2.4,this.arms[1].rotation.x=-2.2,this.arms[0].rotation.z=-.5,this.arms[1].rotation.z=.5,this.headGroup.rotation.x=-.25),this.alertSprite.visible=r>.04&&!a&&(!d||r>=.12),this.alertSprite.material.opacity=_i(r*1.6,0,1),this.alertSprite.material.map=r>=.7?this.alertTextureHigh:this.alertTextureLow;const g=1+Math.sin(this.time*9)*.05*(r>.7?2:1),v=sa(.5,.85,r)*g;this.alertSprite.scale.set(v,v,v),this.alertSprite.position.y=sa(2.45,2.7,r),this.questionSprite.visible=d&&!a&&r<.12;const m=.56+Math.sin(this.time*5)*.04;this.questionSprite.scale.set(m,m,m),this.questionSprite.position.y=2.55+Math.sin(this.time*3.4)*.04,r>.7&&(this.bodyRig.position.y+=Math.sin(this.time*24)*.012)}}Cs=new WeakSet,ou=function(){this.bodyRig=new ie,this.root.add(this.bodyRig),this.legs=[];for(const _ of[-1,1]){const y=new ie;y.position.set(_*.17,.86,0);const M=we(new je(.1,.12,.72,7),Te.pants,0,-.36,0),C=we(new ye(.2,.13,.34),Te.shoe,0,-.76,.07);y.add(M,C),this.bodyRig.add(y),this.legs.push(y)}const t=we(new ye(.55,.24,.34),Te.pants,0,.9,0);this.bodyRig.add(t);const e=we(new ye(.72,.86,.44),Te.shirt,0,1.38,0);e.geometry.translate(0,0,0),this.bodyRig.add(e);const i=we(new ne(.3,10,8),Te.shirt,0,1.2,.13);i.scale.set(1.05,1.15,.75),this.bodyRig.add(i);for(const _ of[1.15,1.4,1.65])this.bodyRig.add(we(new ye(.74,.05,.46),Te.shirtDark,0,_,0));this.bodyRig.add(we(new ye(.76,.08,.47),Te.dark,0,.99,0)),this.arms=[];for(const _ of[-1,1]){const y=new ie;y.position.set(_*.46,1.7,0);const M=we(new je(.08,.09,.38,6),Te.shirt,0,-.2,0),C=we(new je(.07,.08,.36,6),Te.skin,0,-.55,0),w=we(new ne(.1,8,6),Te.skin,0,-.76,0);y.add(M,C,w),this.bodyRig.add(y),this.arms.push(y)}this.headGroup=new ie,this.headGroup.position.set(0,1.95,0),this.bodyRig.add(this.headGroup);const s=we(new ne(.27,12,10),Te.skin,0,.06,0);s.scale.set(.95,1.05,1),this.headGroup.add(s);for(const _ of[-1,1])this.headGroup.add(we(new ne(.06,6,6),Te.skin,_*.27,.07,0)),this.headGroup.add(we(new ne(.045,6,6),Te.dark,_*.1,.11,.26)),this.headGroup.add(we(new ye(.08,.03,.03),Te.hair,_*.1,.18,.25));const r=we(new Pi(.06,.16,5),Te.skin,0,.03,.29);r.rotation.x=Math.PI/2,this.headGroup.add(r);const a=we(new ye(.26,.06,.06),Te.hair,0,-.07,.26);a.rotation.z=.05,this.headGroup.add(a);const o=we(new ye(.14,.025,.03),Te.dark,0,-.14,.255);this.headGroup.add(o);const l=we(new ne(.285,10,8,0,Math.PI*2,0,Math.PI*.55),Te.hair,0,.09,-.01);l.rotation.x=-.08,this.headGroup.add(l);const c=we(new je(.25,.28,.18,10),Te.cap,0,.27,0);this.headGroup.add(c);const h=we(new ne(.25,10,6,0,Math.PI*2,0,Math.PI/2),Te.cap,0,.36,0);h.scale.y=.4,this.headGroup.add(h);const d=we(new ye(.4,.05,.3),Te.capDark,0,.2,.28);d.rotation.x=-.1,this.headGroup.add(d),this.phone=new ie;const u=we(new ye(.13,.24,.025),Te.phone,0,0,0),f=we(new ye(.1,.19,.006),Te.phoneGlow,0,0,.016);this.phone.add(u,f),this.phone.position.set(.08,0,.16),this.phone.rotation.x=-.5,this.phone.visible=!1,this.arms[0].add(this.phone),this.flashlightProp=new ie;const g=we(new je(.055,.07,.28,8),Te.phone,0,0,0);g.rotation.x=Math.PI/2;const v=we(new je(.075,.06,.05,8),Te.flashlightGlow,0,0,.16);v.rotation.x=Math.PI/2,this.flashlightProp.add(g,v),this.flashlightProp.position.set(.4,1.34,.48),this.flashlightProp.visible=!1,this.bodyRig.add(this.flashlightProp);const m=new Pe({color:16769184,transparent:!0,opacity:.1,depthWrite:!1,side:qe,blending:Kr,fog:!1});this.beam=new zt(new Pi(4.4,11,18,1,!0),m),this.beam.rotation.x=-Math.PI/2,this.beam.position.set(0,1.45,5.5),this.beam.visible=!1,this.beam.castShadow=!1,this.beam.renderOrder=2,this.root.add(this.beam);const p=new Pe({color:16773572,transparent:!0,opacity:.17,depthWrite:!1,side:qe,blending:Kr,fog:!1});this.beamInner=new zt(new Pi(1.7,10.5,14,1,!0),p),this.beamInner.rotation.x=-Math.PI/2,this.beamInner.position.set(0,1.45,5.25),this.beamInner.visible=!1,this.beamInner.castShadow=!1,this.beamInner.renderOrder=2,this.root.add(this.beamInner),this.root.traverse(_=>{_.isMesh&&(_.castShadow=!0)}),this.beam.castShadow=!1,this.beamInner.castShadow=!1},lu=function(){const t=new ia({map:this.alertTextureLow,transparent:!0,depthWrite:!1});this.alertSprite=new $o(t),this.alertSprite.position.set(0,2.65,0),this.alertSprite.scale.set(.72,.72,.72),this.alertSprite.visible=!1,this.root.add(this.alertSprite);const e=new ia({map:this.questionTexture,transparent:!0,opacity:.92,depthWrite:!1});this.questionSprite=new $o(e),this.questionSprite.position.set(0,2.55,0),this.questionSprite.scale.set(.6,.6,.6),this.questionSprite.visible=!1,this.root.add(this.questionSprite)};const si={fur:new Pt({color:8017205,flatShading:!0}),furLight:new Pt({color:11108954,flatShading:!0}),furDark:new Pt({color:5059360,flatShading:!0}),cream:new Pt({color:15127472,flatShading:!0}),collar:new Pt({color:11549227,flatShading:!0}),nose:new Pe({color:2365970}),eye:new Pt({color:16777215}),pupil:new Pe({color:1709072}),tag:new Pt({color:14721594}),tongue:new Pt({color:13130319})};function ri(n,t,e=0,i=0,s=0){const r=new zt(n,t);return r.position.set(e,i,s),r.castShadow=!0,r.receiveShadow=!0,r}function t_(){const n=document.createElement("canvas");n.width=128,n.height=128;const t=n.getContext("2d");t.clearRect(0,0,128,128),t.fillStyle="rgba(35, 22, 10, 0.35)",t.beginPath(),t.arc(64,70,44,0,Math.PI*2),t.fill(),t.fillStyle="#d94a32",t.beginPath(),t.arc(64,62,38,0,Math.PI*2),t.fill(),t.strokeStyle="#fff4dc",t.lineWidth=7,t.stroke(),t.fillStyle="#fff4dc",t.font="bold 70px Georgia, serif",t.textAlign="center",t.textBaseline="middle",t.fillText("!",64,62);const e=new El(n);return e.colorSpace=oi,e}var Mn,cu,hu,uu;class e_{constructor(){ei(this,Mn);this.root=new ie,this.root.name="dog",this.time=0,this.phase=0,this.barkTimer=0,V(this,Mn,cu).call(this),V(this,Mn,hu).call(this),V(this,Mn,uu).call(this)}setPosition(t,e){this.root.position.set(t,0,e)}setHeading(t){this.root.rotation.y=t}triggerBark(){this.barkTimer=.45}resetAnimation(){this.time=0,this.phase=0,this.barkTimer=0,this.bodyRig.position.set(0,0,0),this.bodyRig.rotation.set(0,0,0),this.headGroup.rotation.set(0,0,0),this.tailGroup.rotation.set(0,0,0);for(const t of this.legs)t.rotation.set(0,0,0);this.alertSprite&&(this.alertSprite.visible=!1)}update(t,e={}){const{speed:i=0,state:s="PATROL"}=e;this.time+=t;const r=i>.12,a=s==="CHASE"||i>4,o=s==="SNIFF",l=s==="ALERT"||s==="CHASE";r&&(this.phase+=t*(3+i*2.4)),this.barkTimer=Math.max(0,this.barkTimer-t);const c=this.barkTimer>0,h=r?Math.sin(this.phase)*(a?.75:.45):0;this.legs[0].rotation.x=h,this.legs[3].rotation.x=h,this.legs[1].rotation.x=-h,this.legs[2].rotation.x=-h;for(const g of this.legs)g.position.y=.38+(r?Math.abs(Math.sin(this.phase))*.03:0);const d=r?Math.abs(Math.sin(this.phase))*(a?.07:.035):Math.sin(this.time*2.2)*.01;this.bodyRig.position.y=d,this.bodyRig.rotation.x=a?-.12:r?-.03:0,this.bodyRig.rotation.z=r?Math.sin(this.phase)*.02:0,this.headGroup.rotation.x=o?.5:c?-.32:l?-.1:Math.sin(this.time*1.8)*.03,this.headGroup.rotation.y=l?Math.sin(this.time*2.6)*.12:Math.sin(this.time*1.1)*.08;const u=l?11:r?8:4.5;this.tailGroup.rotation.y=Math.sin(this.time*u)*(l?.55:.35),this.tailGroup.rotation.x=o?-.2:0,this.tongue.scale.y=c||a?1.4:.8;const f=_i(.5+Math.sin(this.time*8)*.03,.42,.6);this.alertSprite.scale.setScalar(f),this.alertSprite.visible=l,c&&(this.bodyRig.position.y+=Math.sin(this.time*40)*.015),s==="CAUGHT"&&(this.bodyRig.rotation.x=-.25,this.headGroup.rotation.x=-.35,this.tailGroup.rotation.y=Math.sin(this.time*14)*.7,this.alertSprite.visible=!1)}}Mn=new WeakSet,cu=function(){this.bodyRig=new ie,this.root.add(this.bodyRig);const t=ri(new ne(.45,12,9),si.fur,0,.62,0);t.scale.set(.64,.56,1.12),this.bodyRig.add(t);const e=ri(new ne(.3,10,8),si.cream,0,.6,.32);e.scale.set(.82,.9,.65),this.bodyRig.add(e);const i=ri(new ne(.32,10,8),si.furLight,0,.65,-.36);i.scale.set(.85,.8,.8),this.bodyRig.add(i);const s=ri(new da(.23,.055,6,14),si.collar,0,.82,.36);this.bodyRig.add(s);const r=ri(new ne(.065,8,6),si.tag,0,.65,.49);this.bodyRig.add(r),this.headGroup=new ie,this.headGroup.position.set(0,.92,.5),this.bodyRig.add(this.headGroup);const a=ri(new ne(.24,12,9),si.fur,0,0,0);a.scale.set(1,.95,.92),this.headGroup.add(a);const o=ri(new ye(.2,.16,.3),si.furLight,0,-.04,.25);this.headGroup.add(o);const l=ri(new ne(.06,8,6),si.nose,0,-.01,.41);this.headGroup.add(l);for(const d of[-1,1]){const u=ri(new ne(.045,8,6),si.eye,d*.1,.08,.2),f=ri(new ne(.023,6,6),si.pupil,d*.1,.08,.235),g=ri(new ye(.08,.025,.05),si.furDark,d*.1,.15,.19);this.headGroup.add(u,f,g);const v=ri(new ne(.12,8,6),si.furDark,d*.18,.13,-.01);v.scale.set(.55,1.15,.45),v.rotation.z=d*.32,this.headGroup.add(v)}this.tongue=ri(new ye(.07,.02,.13),si.tongue,0,-.11,.3),this.tongue.rotation.x=.25,this.headGroup.add(this.tongue),this.tailGroup=new ie,this.tailGroup.position.set(0,.82,-.56);const c=ri(new Pi(.075,.48,6),si.furDark,0,.18,-.08);c.rotation.x=-.7,this.tailGroup.add(c),this.bodyRig.add(this.tailGroup),this.legs=[];const h=[[-.18,.38,.28],[.18,.38,.28],[-.18,.38,-.28],[.18,.38,-.28]];for(const[d,u,f]of h){const g=new ie;g.position.set(d,u,f);const v=ri(new je(.06,.075,.34,6),si.fur,0,-.17,0),m=ri(new ye(.14,.08,.18),si.furDark,0,-.35,.03);g.add(v,m),this.root.add(g),this.legs.push(g)}},hu=function(){const t=new ia({map:t_(),transparent:!0,depthWrite:!1});this.alertSprite=new $o(t),this.alertSprite.position.set(0,1.45,0),this.alertSprite.scale.set(.55,.55,.55),this.alertSprite.visible=!1,this.root.add(this.alertSprite)},uu=function(){const t=new zt(new Ji(.5,14),new Pe({color:1910034,transparent:!0,opacity:.22,depthWrite:!1}));t.rotation.x=-Math.PI/2,t.position.y=.04,this.root.add(t)};const Kc=new L(0,.5,0);class i_{constructor(t){this.camera=t,this.offset=new L(-19,22,19),this.lookOffset=new L(0,.7,-1.4),this.focus=new L(0,0,0),this.orbitAngle=.5,this.mode="menu",this.time=0,this.shakeTime=0,this.shakeDuration=1,this.shakeStrength=0,this.zoomImpulse=0,this.reducedMotion=Ll(),this.camera.position.set(16,24,24),this.camera.lookAt(Kc)}addShake(t,e=.4){this.reducedMotion||(this.shakeStrength=Math.max(this.shakeStrength,t),this.shakeDuration=Math.max(.01,e),this.shakeTime=this.shakeDuration)}addZoomPunch(t=.16){this.reducedMotion||(this.zoomImpulse=Math.max(this.zoomImpulse,t))}resetEffects(){this.shakeTime=0,this.shakeStrength=0,this.zoomImpulse=0}setMode(t){this.mode=t}snapTo(t){this.focus.copy(t),this.camera.position.copy(t).add(this.offset),this.camera.lookAt(t.clone().add(this.lookOffset))}update(t,e){if(this.time+=t,this.shakeTime=Math.max(0,this.shakeTime-t),this.zoomImpulse=wi(this.zoomImpulse,0,4.5,t),this.mode==="menu"){this.orbitAngle+=t*.055;const a=27,o=new L(Math.cos(this.orbitAngle)*a,19,Math.sin(this.orbitAngle)*a);this.camera.position.lerp(o,1-Math.exp(-1.6*t));const l=Kc.clone();this.focus.lerp(l,1-Math.exp(-2*t)),this.camera.lookAt(this.focus);return}this.focus.x=wi(this.focus.x,e.x,3.4,t),this.focus.z=wi(this.focus.z,e.z,3.4,t),this.focus.y=wi(this.focus.y,e.y,3.4,t);const i=1-this.zoomImpulse,s=this.focus.clone().addScaledVector(this.offset,i);this.camera.position.x=wi(this.camera.position.x,s.x,3.2,t),this.camera.position.y=wi(this.camera.position.y,s.y,3.2,t),this.camera.position.z=wi(this.camera.position.z,s.z,3.2,t);const r=this.focus.clone().add(this.lookOffset);if(this.camera.lookAt(r),this.shakeTime>0&&this.shakeStrength>0){const a=this.shakeTime/this.shakeDuration,o=this.shakeStrength*a;this.camera.position.x+=Math.sin(this.time*97)*o,this.camera.position.y+=Math.cos(this.time*83)*o*.6,this.camera.position.z+=Math.sin(this.time*71)*o*.5}}}const n_=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight","Space","KeyH"]),Pn=new L,Jc=new L,s_=new L(0,1,0),Ln=new L,Ws=new L;var ra,aa,oa,du;class r_{constructor(t,e,i){ei(this,oa);ei(this,ra,t=>{n_.has(t.code)&&(this.enabled&&t.preventDefault(),this.keys.add(t.code))});ei(this,aa,t=>{this.keys.delete(t.code)});this.camera=t,this.collision=e,this.coverSystem=i,this.keys=new Set,this.velocity=new L,this.heading=0,this.stamina=$e.staminaMax,this.hidden=!1,this.sprinting=!1,this.nearCover=!1,this.coverDistance=1/0,this.speed=0,this.regenTimer=0,this.virtual={x:0,y:0,sprint:!1,hide:!1},this.enabled=!1,this.stepTimer=0,this.exhausted=!1,window.addEventListener("keydown",cr(this,ra)),window.addEventListener("keyup",cr(this,aa)),window.addEventListener("blur",()=>this.keys.clear())}setVirtualMove(t,e){this.virtual.x=t,this.virtual.y=e}setVirtualSprint(t){this.virtual.sprint=t}setVirtualHide(t){this.virtual.hide=t}reset(t){this.velocity.set(0,0,0),this.heading=.6,this.stamina=$e.staminaMax,this.hidden=!1,this.sprinting=!1,this.nearCover=!1,this.regenTimer=0,this.speed=0,this.stepTimer=0,this.exhausted=!1,t&&(this.heading=Math.atan2(Je.gateCenterZ-t.z,Je.halfW-t.x))}get hideHeld(){return this.keys.has("Space")||this.keys.has("KeyH")||this.virtual.hide}update(t,e,i){if(!this.enabled)return this.speed=0,this.hidden=!1,{speed:0,sprinting:!1,hidden:!1,moving:!1,stamina:this.stamina};const s=this.coverSystem.probe(i.x,i.z);this.coverDistance=s.distance,this.nearCover=s.distance<=1.05,this.hideHeld&&this.coverSystem.canHide(i.x,i.z)?this.hidden=!0:this.hidden=!1;const r=V(this,oa,du).call(this),a=r.magnitude>.05;let o=0,l=0;a&&!this.hidden&&(this.camera.getWorldDirection(Pn),Pn.y=0,Pn.lengthSq()<1e-4&&Pn.set(0,0,-1),Pn.normalize(),Jc.crossVectors(Pn,s_).normalize(),Ln.set(0,0,0),Ln.addScaledVector(Pn,r.forward),Ln.addScaledVector(Jc,r.right),Ln.lengthSq()>1e-4&&(Ln.normalize(),o=Ln.x,l=Ln.z));const c=(this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||this.virtual.sprint)&&a&&!this.hidden&&!this.exhausted&&this.stamina>.5,h=c?$e.sprintSpeed:$e.walkSpeed;Ws.set(o*h,0,l*h);const d=Ws.x-this.velocity.x,u=Ws.z-this.velocity.z,f=Math.hypot(d,u),v=(a?$e.acceleration:$e.deceleration)*t;f>v?(this.velocity.x+=d/f*v,this.velocity.z+=u/f*v):(this.velocity.x=Ws.x,this.velocity.z=Ws.z),this.hidden&&this.velocity.set(0,0,0),this.speed=Math.hypot(this.velocity.x,this.velocity.z),this.sprinting=c&&this.speed>$e.walkSpeed*.6,this.sprinting&&c?(this.stamina=_i(this.stamina-$e.staminaDrain*t,0,$e.staminaMax),this.regenTimer=$e.staminaRegenDelay):(this.regenTimer=Math.max(0,this.regenTimer-t),this.regenTimer<=0&&(this.stamina=_i(this.stamina+$e.staminaRegen*t,0,$e.staminaMax))),c&&this.stamina<=.01&&(this.exhausted=!0),this.exhausted&&this.stamina>=25&&(this.exhausted=!1);const m=i.x,p=i.z;i.x+=this.velocity.x*t,i.z+=this.velocity.z*t,i.x=_i(i.x,-30,Je.outerLimitX),i.z=_i(i.z,-17+.35,Je.halfD-.35),i.x>Je.halfW+.4&&(i.z=_i(i.z,-17-1.5,Je.halfD+1.5));const _=this.collision.resolveCircle(i.x,i.z,$e.radius);if(i.x=_.x,i.z=_.z,this.speed>.15){const M=Math.atan2(this.velocity.x,this.velocity.z);this.heading=Hn(this.heading,M,$e.turnSpeed,t),e.setHeading(this.heading)}return Ai(m,p,i.x,i.z)<this.speed*t*.15&&this.velocity.multiplyScalar(.4),this.stepTimer-=t,this.speed>.4&&this.stepTimer<=0&&(this.stepTimer=this.sprinting?.24:.36),{speed:this.speed,sprinting:this.sprinting,hidden:this.hidden,moving:this.speed>.2,stamina:this.stamina,step:this.stepTimer>.2}}}ra=new WeakMap,aa=new WeakMap,oa=new WeakSet,du=function(){let t=0,e=0;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(t+=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(t-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(e+=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(e-=1),t+=this.virtual.y,e+=this.virtual.x;const i=Math.hypot(t,e);return i>1&&(t/=i,e/=i),{forward:t,right:e,magnitude:Math.min(1,i)}};const a_=.65;var kt,Re,Fn,il,fu,pu,mu,gu,Yr,xu;class o_{constructor(t,e,i,s,r={}){ei(this,kt);this.human=t,this.vision=e,this.collision=i,this.noise=s,this.callbacks=r,this.state="PATROL",this.speed=0,this.caught=!1,this.gateCheckSpot=Ke.gateCheckSpot,this.reset()}reset(){this.position={x:Ke.humanStart.x,z:Ke.humanStart.z},this.heading=.8,this.state="PATROL",this.stateTime=0,this.speed=0,this.waypointIndex=1,this.waitTimer=0,this.distractCooldown=te(7,11),this.distractTimer=0,this.distractionHeading=0,this.lostSightTimer=0,this.alertLowTimer=0,this.searchTimer=0,this.caught=!1,this.caughtReported=!1,this.nervous=!1,this.routeName="standard",this.gateCheckCooldown=te(pe.gateCheckCooldownMin,pe.gateCheckCooldownMax),this.gateCheckTimer=0,this.gateCheckArrived=!1,this.sinceGateCheck=0,this.investigateTarget={x:0,z:0},this.investigateTimer=0,this.investigateArrived=!1,this.investigateLookHeading=this.heading,this.lastNoiseId=this.noise?this.noise.latestId:0,this.noiseCooldown=0,this.vision.reset(),this.human.setPosition(this.position.x,this.position.z),this.human.setHeading(this.heading),this.human.update(0,{speed:0,state:"PATROL",alert:0})}update(t,e,i,s=!0){if(this.stateTime+=t,!s)return this.speed=0,this.human.setPosition(this.position.x,this.position.z),this.human.setHeading(this.heading),this.human.update(t,{speed:0,state:this.state,alert:this.vision.alert}),{state:this.state,alert:this.vision.alert,sight:this.vision.snapshot()};this.sinceGateCheck+=t;const r=this.vision.update(t,this.position,this.heading,this.state,e,i,!0),a=r.distance;if(this.noiseCooldown=Math.max(0,this.noiseCooldown-t),this.state!=="CAUGHT"&&r.alert<De.alertThreshold?V(this,kt,pu).call(this):this.noise&&(this.lastNoiseId=this.noise.latestId),this.state!=="CAUGHT")if(this.state==="PATROL")if(this.distractCooldown-=t,this.gateCheckCooldown-=t,r.alert>=De.chaseThreshold)V(this,kt,Re).call(this,"CHASE");else if(r.alert>=De.alertThreshold)V(this,kt,Re).call(this,"ALERT");else if(this.gateCheckCooldown<=0)V(this,kt,Re).call(this,"GATE_CHECK");else if(this.distractCooldown<=0)V(this,kt,Re).call(this,"DISTRACTED");else if(this.waitTimer>0)this.waitTimer-=t,this.speed=0;else{const o=V(this,kt,xu).call(this),l=this.nervous?pe.patrolSpeed*1.1:pe.patrolSpeed;if(V(this,kt,Fn).call(this,o.x,o.z,l,t)<.85){const h=V(this,kt,Yr).call(this);this.waypointIndex=(this.waypointIndex+1)%h.length;const d=this.nervous?pe.patrolPauseMax*.65:pe.patrolPauseMax;this.waitTimer=te(pe.patrolPauseMin,d)}}else if(this.state==="DISTRACTED")this.speed=0,this.heading=Hn(this.heading,this.distractionHeading,3.5,t),this.distractTimer-=t,r.alert>=.8?V(this,kt,Re).call(this,"ALERT"):this.distractTimer<=0&&V(this,kt,Re).call(this,"PATROL");else if(this.state==="ALERT"){V(this,kt,il).call(this,r.lastSeen.x,r.lastSeen.z,t,8);const o=r.lastSeen;Ai(this.position.x,this.position.z,o.x,o.z)>2.2?V(this,kt,Fn).call(this,o.x,o.z,pe.alertSpeed,t):this.speed=0,r.alert>=De.chaseThreshold?V(this,kt,Re).call(this,"CHASE"):r.alert<.16?(this.alertLowTimer+=t,this.alertLowTimer>2&&V(this,kt,Re).call(this,"SEARCH")):this.alertLowTimer=0}else if(this.state==="CHASE"){const o=r.visible?e:r.lastSeen;V(this,kt,Fn).call(this,o.x,o.z,pe.chaseSpeed,t),r.visible&&V(this,kt,il).call(this,e.x,e.z,t,10),a<pe.catchRadius&&(!i.hidden||a<1.15)?V(this,kt,Re).call(this,"CAUGHT"):r.visible?this.lostSightTimer=0:(this.lostSightTimer+=t,(this.lostSightTimer>2.8||r.alert<.22)&&V(this,kt,Re).call(this,"SEARCH"))}else if(this.state==="SEARCH"){const o=r.lastSeen,l=Ai(this.position.x,this.position.z,o.x,o.z);this.searchTimer-=t,l>1.1?V(this,kt,Fn).call(this,o.x,o.z,pe.searchSpeed,t):(this.speed=0,this.heading+=Math.sin(this.stateTime*2.4)*t*1.6),r.visible&&r.alert>=De.alertThreshold?V(this,kt,Re).call(this,r.alert>=De.chaseThreshold?"CHASE":"ALERT"):this.searchTimer<=0&&(this.nervous&&this.sinceGateCheck>8?V(this,kt,Re).call(this,"GATE_CHECK"):V(this,kt,Re).call(this,"PATROL"))}else this.state==="GATE_CHECK"?V(this,kt,gu).call(this,t,r):this.state==="INVESTIGATE"?V(this,kt,mu).call(this,t,r):this.state==="CAUGHT"&&(this.speed=0);return this.human.setPosition(this.position.x,this.position.z),this.human.setHeading(this.heading),this.human.update(t,{speed:this.speed,state:this.state,alert:this.vision.alert,caught:this.state==="CAUGHT"}),{state:this.state,alert:this.vision.alert,sight:r,caught:this.caught,nervous:this.nervous,gateCheckArrived:this.gateCheckArrived}}}kt=new WeakSet,Re=function(t){if(this.state!==t){if(this.state==="INVESTIGATE"&&(this.noiseCooldown=Math.max(this.noiseCooldown,vn.reactionCooldown)),this.state=t,this.stateTime=0,this.lostSightTimer=0,this.alertLowTimer=0,(t==="ALERT"||t==="CHASE")&&(this.nervous=!0,this.routeName="nervous"),t==="DISTRACTED"&&(this.distractTimer=te(pe.distractTimeMin,pe.distractTimeMax),this.distractionHeading=this.heading+te(2.2,4.1)),t==="SEARCH"&&(this.searchTimer=pe.searchTime),t==="INVESTIGATE"&&(this.investigateTimer=pe.investigateScanTime,this.investigateArrived=!1,this.investigateLookHeading=this.heading,this.speed=0),t==="GATE_CHECK"&&(this.gateCheckTimer=pe.gateCheckDuration,this.gateCheckArrived=!1,this.sinceGateCheck=0,this.gateCheckCooldown=te(pe.gateCheckRepeatMin,pe.gateCheckRepeatMax),this.speed=0),t==="PATROL"){const e=V(this,kt,Yr).call(this);this.waypointIndex%=e.length,this.waitTimer=te(.3,.9),this.distractCooldown=te(pe.distractEveryMin,pe.distractEveryMax),this.vision.alert=Math.min(this.vision.alert,.12)}t==="CAUGHT"&&!this.caughtReported&&(this.caughtReported=!0,this.caught=!0,this.speed=0,this.callbacks.onCaught?.())}},Fn=function(t,e,i,s){const r=t-this.position.x,a=e-this.position.z,o=Math.hypot(r,a);if(o<1e-4)return this.speed=0,o;const l=Math.atan2(r,a);this.heading=Hn(this.heading,l,pe.turnSpeed,s);const c=Math.min(i*s,o);let h=this.position.x+r/o*c,d=this.position.z+a/o*c,u=this.collision.resolveCircle(h,d,pe.radius),f=Ai(this.position.x,this.position.z,u.x,u.z);if(f<c*.25&&c>.001)for(const g of[.9,-.9,1.5,-1.5]){const v=Math.cos(g),m=Math.sin(g),p=r/o*v-a/o*m,_=r/o*m+a/o*v,y=this.position.x+p*c,M=this.position.z+_*c,C=this.collision.resolveCircle(y,M,pe.radius),w=Ai(this.position.x,this.position.z,C.x,C.z);w>f&&(u=C,f=w)}return this.position.x=u.x,this.position.z=u.z,this.speed=s>0?f/s:0,this.speed=Math.min(this.speed,i),o},il=function(t,e,i,s=7){const r=Math.atan2(t-this.position.x,e-this.position.z);this.heading=Hn(this.heading,r,s,i)},fu=function(){return this.state==="DISTRACTED"?vn.distractedHearing:this.state==="GATE_CHECK"?vn.gateCheckHearing:1},pu=function(){if(!this.noise)return!1;if(!(this.state==="PATROL"||this.state==="DISTRACTED"||this.state==="GATE_CHECK")||this.noiseCooldown>0)return this.lastNoiseId=this.noise.latestId,!1;const e=this.noise.getAudibleNoise(this.position.x,this.position.z,V(this,kt,fu).call(this),this.lastNoiseId);return this.lastNoiseId=this.noise.latestId,e?(V(this,kt,Re).call(this,"INVESTIGATE"),this.investigateTarget.x=e.x,this.investigateTarget.z=e.z,this.investigateLookHeading=Math.atan2(e.x-this.position.x,e.z-this.position.z),!0):!1},mu=function(t,e){if(e.alert>=De.chaseThreshold){V(this,kt,Re).call(this,"CHASE");return}if(e.alert>=De.alertThreshold){V(this,kt,Re).call(this,"ALERT");return}const i=this.investigateTarget;if(Ai(this.position.x,this.position.z,i.x,i.z)>.9){V(this,kt,Fn).call(this,i.x,i.z,pe.investigateSpeed,t),this.stateTime>pe.investigateMaxTime&&V(this,kt,Re).call(this,"PATROL");return}this.speed=0,this.investigateArrived||(this.investigateArrived=!0),this.investigateTimer-=t,this.heading=this.investigateLookHeading+Math.sin(this.stateTime*2.2)*.65,this.investigateTimer<=0&&V(this,kt,Re).call(this,"PATROL")},gu=function(t,e){if(e.alert>=De.chaseThreshold){V(this,kt,Re).call(this,"CHASE");return}if(e.alert>=De.alertThreshold){V(this,kt,Re).call(this,"ALERT");return}const i=this.gateCheckSpot;if(Ai(this.position.x,this.position.z,i.x,i.z)>a_){this.gateCheckArrived=!1,V(this,kt,Fn).call(this,i.x,i.z,pe.gateCheckSpeed,t),this.stateTime>pe.gateCheckDuration+7&&V(this,kt,Re).call(this,"PATROL");return}this.gateCheckArrived=!0,this.speed=0,this.gateCheckTimer-=t;const r=Math.atan2(0-i.x,0-i.z),a=Math.sin(this.stateTime*pe.gateCheckSweepSpeed)*pe.gateCheckSweepAngle;this.heading=Hn(this.heading,r+a,6,t),this.gateCheckTimer<=0&&(this.nervous=!0,this.routeName="nervous",this.waypointIndex=0,V(this,kt,Re).call(this,"PATROL"))},Yr=function(){return this.nervous?Ke.patrolRouteNervous:Ke.patrolRouteStandard},xu=function(){return V(this,kt,Yr).call(this)[this.waypointIndex]};var Ce,Ni,Zr,_u,vu,Su,Mu;class l_{constructor(t,e,i,s={}){ei(this,Ce);this.dog=t,this.collision=e,this.noise=i,this.callbacks=s,this.state="PATROL",this.speed=0,this.caught=!1,this.reset()}reset(){this.position={x:be.start.x,z:be.start.z};const t=be.waypoints[1];this.heading=Math.atan2(t.x-this.position.x,t.z-this.position.z),this.state="PATROL",this.stateTime=0,this.speed=0,this.waypointIndex=1,this.sniffTimer=0,this.sightTimer=0,this.alertTimer=0,this.lostTimer=0,this.searchTimer=0,this.lastSeen={x:this.position.x,z:this.position.z},this.lastNoiseId=this.noise?this.noise.latestId:0,this.noiseCooldown=0,this.caught=!1,this.caughtReported=!1,this.barkCount=0,this.dog.resetAnimation(),this.dog.setPosition(this.position.x,this.position.z),this.dog.setHeading(this.heading),this.dog.update(0,{speed:0,state:"PATROL"})}update(t,e,i,s=!0){if(this.stateTime+=t,!s)return this.speed=0,this.dog.setPosition(this.position.x,this.position.z),this.dog.setHeading(this.heading),this.dog.update(t,{speed:0,state:this.state}),{state:this.state,caught:this.caught,barkCount:this.barkCount};this.noiseCooldown=Math.max(0,this.noiseCooldown-t);const r=V(this,Ce,vu).call(this,e,i,t);if(this.state!=="CAUGHT"){let a=null;if(this.state==="PATROL"||this.state==="SNIFF"||this.state==="SEARCH"?a=V(this,Ce,Su).call(this):this.noise&&(this.lastNoiseId=this.noise.latestId),this.state==="PATROL"||this.state==="SNIFF")if(r.visible&&(r.distance<=be.closeSense||this.sightTimer>=.22))this.lastSeen.x=e.x,this.lastSeen.z=e.z,V(this,Ce,Ni).call(this,"ALERT");else if(a&&this.noiseCooldown<=0)this.lastSeen.x=a.x,this.lastSeen.z=a.z,V(this,Ce,Ni).call(this,"ALERT");else if(this.state==="SNIFF")this.speed=0,this.sniffTimer-=t,this.sniffTimer<=0&&V(this,Ce,Ni).call(this,"PATROL");else{const l=be.waypoints[this.waypointIndex];V(this,Ce,Zr).call(this,l.x,l.z,be.patrolSpeed,t)<.7&&(this.waypointIndex=(this.waypointIndex+1)%be.waypoints.length,V(this,Ce,Ni).call(this,"SNIFF"))}else if(this.state==="ALERT")this.speed=0,V(this,Ce,_u).call(this,this.lastSeen.x,this.lastSeen.z,t,10),r.visible&&(this.lastSeen.x=e.x,this.lastSeen.z=e.z),this.alertTimer-=t,this.alertTimer<=0&&V(this,Ce,Ni).call(this,r.visible?"CHASE":"SEARCH");else if(this.state==="CHASE"){const o=r.visible?e:this.lastSeen;V(this,Ce,Zr).call(this,o.x,o.z,be.chaseSpeed,t),r.visible?(this.lastSeen.x=e.x,this.lastSeen.z=e.z,this.lostTimer=0):this.lostTimer+=t,r.distance<be.catchRadius&&(r.visible||r.distance<.7)?V(this,Ce,Mu).call(this):!r.visible&&this.lostTimer>be.lostSightTime&&V(this,Ce,Ni).call(this,"SEARCH")}else this.state==="SEARCH"&&(Ai(this.position.x,this.position.z,this.lastSeen.x,this.lastSeen.z)>.8?V(this,Ce,Zr).call(this,this.lastSeen.x,this.lastSeen.z,be.searchSpeed,t):(this.speed=0,this.sniffTimer-=t),this.searchTimer-=t,r.visible&&this.sightTimer>.18?(this.lastSeen.x=e.x,this.lastSeen.z=e.z,V(this,Ce,Ni).call(this,"ALERT")):a&&this.noiseCooldown<=0?(this.lastSeen.x=a.x,this.lastSeen.z=a.z,V(this,Ce,Ni).call(this,"ALERT")):this.searchTimer<=0&&V(this,Ce,Ni).call(this,"PATROL"))}return this.dog.setPosition(this.position.x,this.position.z),this.dog.setHeading(this.heading),this.dog.update(t,{speed:this.speed,state:this.state}),{state:this.state,caught:this.caught,barkCount:this.barkCount,position:this.position,sight:r}}}Ce=new WeakSet,Ni=function(t){this.state!==t&&(this.state=t,this.stateTime=0,t==="ALERT"&&(this.alertTimer=be.alertDuration,this.speed=0,this.noiseCooldown=1.2,this.barkCount+=1,this.dog.triggerBark(),this.noise?.emit(this.position.x,this.position.z,be.barkNoiseRadius,"bark"),this.callbacks.onBark?.(this.position.x,this.position.z)),t==="SNIFF"&&(this.sniffTimer=te(be.sniffTimeMin,be.sniffTimeMax),this.speed=0),t==="SEARCH"&&(this.searchTimer=be.searchTime,this.noiseCooldown=Math.max(this.noiseCooldown,.8)),t==="CHASE"&&(this.lostTimer=0),t==="CAUGHT"&&(this.speed=0))},Zr=function(t,e,i,s){const r=t-this.position.x,a=e-this.position.z,o=Math.hypot(r,a);if(o<1e-4)return this.speed=0,o;this.heading=Hn(this.heading,Math.atan2(r,a),be.turnSpeed,s);const l=Math.min(i*s,o);let c=this.position.x+r/o*l,h=this.position.z+a/o*l,d=this.collision.resolveCircle(c,h,be.radius),u=Ai(this.position.x,this.position.z,d.x,d.z);if(u<l*.25&&l>.001)for(const f of[.9,-.9,1.5,-1.5]){const g=Math.cos(f),v=Math.sin(f),m=r/o*g-a/o*v,p=r/o*v+a/o*g,_=this.collision.resolveCircle(this.position.x+m*l,this.position.z+p*l,be.radius),y=Ai(this.position.x,this.position.z,_.x,_.z);y>u&&(d=_,u=y)}return this.position.x=d.x,this.position.z=d.z,this.speed=s>0?Math.min(u/s,i):0,o},_u=function(t,e,i,s=8){this.heading=Hn(this.heading,Math.atan2(t-this.position.x,e-this.position.z),s,i)},vu=function(t,e,i){const s=t.x-this.position.x,r=t.z-this.position.z,a=Math.hypot(s,r)||1e-4,o=e.hidden,l=o?be.hiddenSightRange:be.sightRange,c=o?be.hiddenCloseSense:be.closeSense,h=Math.sin(this.heading),d=Math.cos(this.heading),u=(s*h+r*d)/a,f=a<=c||u>Math.cos(be.halfAngle),g=!this.collision.isBlocked(this.position.x,this.position.z,t.x,t.z),v=f&&a<=l&&g;return v?this.sightTimer=Math.min(1,this.sightTimer+i):this.sightTimer=Math.max(0,this.sightTimer-i*2),{visible:v,distance:a,clear:g}},Su=function(){if(!this.noise)return null;const t=this.noise.getAudibleNoise(this.position.x,this.position.z,be.hearingMultiplier,this.lastNoiseId);return this.lastNoiseId=this.noise.latestId,!t||t.kind==="bark"?null:t},Mu=function(){this.caught||(this.caught=!0,this.caughtReported=!0,this.state="CAUGHT",this.stateTime=0,this.speed=0,this.dog.triggerBark(),this.callbacks.onCaught?.())};class c_{constructor(t){this.collision=t,this.reset()}reset(){this.alert=0,this.visible=!1,this.distance=1/0,this.lastSeen={x:0,z:0},this.hasSeen=!1,this.hideFactor=1,this.inCone=!1}update(t,e,i,s,r,a,o=!0){if(!o)return this.snapshot();const l=r.x-e.x,c=r.z-e.z,h=Math.hypot(l,c)||1e-4;this.distance=h;let d=De.range,u=De.halfAngle;if(s==="DISTRACTED"?(d=De.distractedRange,u*=.55):s==="GATE_CHECK"&&(d=De.checkRange,u=De.checkHalfAngle),h<De.closeRange)this.inCone=!0;else{const v=Math.sin(i),m=Math.cos(i),p=(l*v+c*m)/h;this.inCone=p>Math.cos(u)}a.sprinting&&(d*=1.1);const f=h<=d,g=!this.collision.isBlocked(e.x,e.z,r.x,r.z);if(this.hideFactor=1,a.hidden&&(this.hideFactor=h>2.8?De.hidingGain:.45),this.visible=this.inCone&&f&&g&&this.hideFactor>.05,this.visible){const v=1+(1-_i(h/Math.max(d,1),0,1))*1.1;let m=De.gainBase*v*this.hideFactor;a.sprinting&&(m*=De.sprintGain),s==="CHASE"&&(m*=De.chaseGain),s==="DISTRACTED"&&(m*=.45),this.alert=_i(this.alert+m*t,0,1),this.lastSeen.x=r.x,this.lastSeen.z=r.z,this.hasSeen=!0}else{const v=s==="CHASE"?De.decay*.55:De.decay;this.alert=_i(this.alert-v*t,0,1)}return this.snapshot()}boost(t){this.alert=_i(this.alert+t,0,1)}snapshot(){return{alert:this.alert,visible:this.visible,distance:this.distance,hidingScale:this.hideFactor,lastSeen:{...this.lastSeen},hasSeen:this.hasSeen}}}class h_{constructor(t){this.collisionSystem=t,this.coverObjects=t.getCoverObjects()}distanceToCover(t,e){let i=1/0,s=null;for(const r of this.coverObjects){let a;if(r.type==="circle")a=Math.hypot(t-r.x,e-r.z)-r.radius;else{const o=Math.max(r.minX,Math.min(t,r.maxX)),l=Math.max(r.minZ,Math.min(e,r.maxZ));a=Math.hypot(t-o,e-l)}a<i&&(i=a,s=r)}return{distance:Math.max(0,i),object:s}}canHide(t,e){return this.distanceToCover(t,e).distance<=1.05}probe(t,e){return this.distanceToCover(t,e)}}const ps=96,ms=56,zr=Math.PI*2;function jc(){return{active:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,rx:0,ry:0,rz:0,spinX:0,spinY:0,spinZ:0,life:0,maxLife:1,size:1,gravity:0,drag:1}}var Oe,Zs,nl,yu,$s,$r;class u_{constructor(t){ei(this,Oe);this.scene=t,this.reducedMotion=Ll(),this.density=1,this.dummy=new ke,this.leafCursor=0,this.dustCursor=0,this.activeLeafCount=0,this.activeDustCount=0,this.leafColors=[new Gt(14263595),new Gt(13658666),new Gt(11549227),new Gt(9414990)],this.puffColors=[new Gt(6979386),new Gt(5598001),new Gt(9071156)],this.leafParticles=Array.from({length:ps},jc),this.dustParticles=Array.from({length:ms},jc);const e=new _n(.26,.17),i=new Pt({side:qe});this.leafMesh=new Ko(e,i,ps),this.leafMesh.instanceMatrix.setUsage(Yl),this.leafMesh.frustumCulled=!1,this.leafMesh.castShadow=!1,this.leafMesh.receiveShadow=!1,this.leafMesh.renderOrder=1,this.leafMesh.visible=!1;const s=new ne(.11,5,4),r=new Pe({color:14074778,transparent:!0,opacity:.28,depthWrite:!1});this.dustMesh=new Ko(s,r,ms),this.dustMesh.instanceMatrix.setUsage(Yl),this.dustMesh.frustumCulled=!1,this.dustMesh.castShadow=!1,this.dustMesh.receiveShadow=!1,this.dustMesh.renderOrder=3,this.dustMesh.visible=!1;for(let o=0;o<ps;o+=1)this.leafMesh.setColorAt(o,this.leafColors[o%this.leafColors.length]),V(this,Oe,Zs).call(this,this.leafMesh,o);this.leafMesh.instanceColor&&(this.leafMesh.instanceColor.needsUpdate=!0),this.leafMesh.instanceMatrix.needsUpdate=!0;for(let o=0;o<ms;o+=1)V(this,Oe,Zs).call(this,this.dustMesh,o);this.dustMesh.instanceMatrix.needsUpdate=!0,this.ringPool=[],this.ringCursor=0,this.activeRingCount=0;const a=new Cl(.965,1,40);for(let o=0;o<8;o+=1){const l=new Pe({color:15775083,transparent:!0,opacity:0,side:qe,depthWrite:!1}),c=new zt(a,l);c.rotation.x=-Math.PI/2,c.position.y=.09,c.visible=!1,c.renderOrder=2,c.frustumCulled=!1,t.add(c),this.ringPool.push({mesh:c,active:!1,x:0,z:0,life:0,maxLife:1,radius:1,opacity:.3})}t.add(this.leafMesh,this.dustMesh)}setDensity(t){this.density=Math.max(.2,Math.min(1,Number(t)||1))}spawnLeafBurst(t,e,i,s=32){if(this.reducedMotion)return 0;const r=Math.max(1,Math.round(s*this.density));let a=0;for(let o=0;o<r;o+=1)V(this,Oe,nl).call(this,t,e,i,this.leafColors,{radialMin:1.4,radialMax:4.8,velocityYMin:2.4,velocityYMax:6.8,lifeMin:1.1,lifeMax:2,sizeMin:.8,sizeMax:1.7,gravity:-7.5,drag:.985}),a+=1;return V(this,Oe,$s).call(this),a}spawnLeafPuff(t,e,i=6){if(this.reducedMotion)return 0;const s=Math.max(1,Math.round(i*this.density));for(let r=0;r<s;r+=1)V(this,Oe,nl).call(this,t,.85,e,this.puffColors,{radialMin:.3,radialMax:1.3,velocityYMin:.5,velocityYMax:1.8,lifeMin:.65,lifeMax:1.2,sizeMin:.55,sizeMax:1.05,gravity:-3.2,drag:.94});return V(this,Oe,$s).call(this),s}spawnNoiseRing(t,e,i,s="walk"){const r=this.ringPool[this.ringCursor];return this.ringCursor=(this.ringCursor+1)%this.ringPool.length,r.active=!0,r.x=t,r.z=e,r.radius=i,r.maxLife=s==="bark"?.85:s==="sprint"?.65:.45,r.life=r.maxLife,r.opacity=s==="bark"?.42:s==="sprint"?.38:.2,r.mesh.position.set(t,.09,e),r.mesh.scale.setScalar(.7),r.mesh.material.color.setHex(s==="bark"?14240306:s==="sprint"?15764028:15124878),r.mesh.material.opacity=r.opacity,r.mesh.visible=!0,r}spawnDust(t,e,i,s,r=2){if(this.reducedMotion)return 0;const a=Math.max(1,Math.round(r*this.density));for(let o=0;o<a;o+=1){const l=this.dustCursor;this.dustCursor=(this.dustCursor+1)%ms;const c=this.dustParticles[l];c.active=!0,c.x=t+(Math.random()-.5)*.5,c.y=.12+Math.random()*.18,c.z=e+(Math.random()-.5)*.5,c.vx=i*(.3+Math.random()*.9)+(Math.random()-.5)*.7,c.vz=s*(.3+Math.random()*.9)+(Math.random()-.5)*.7,c.vy=.35+Math.random()*.9,c.life=.35+Math.random()*.35,c.maxLife=c.life,c.size=.55+Math.random()*.6,c.gravity=-1.1,c.drag=.92}return V(this,Oe,$r).call(this),a}update(t){if(!(t<=0)&&(V(this,Oe,yu).call(this,t),!(this.activeLeafCount===0&&this.activeDustCount===0))){for(let e=0;e<ps;e+=1){const i=this.leafParticles[e];if(i.active){if(i.life-=t,i.life<=0){i.active=!1;continue}i.vy+=i.gravity*t,i.vx*=i.drag,i.vy*=i.drag,i.vz*=i.drag,i.x+=i.vx*t,i.y+=i.vy*t,i.z+=i.vz*t,i.rx+=i.spinX*t,i.ry+=i.spinY*t,i.rz+=i.spinZ*t}}for(let e=0;e<ms;e+=1){const i=this.dustParticles[e];if(i.active){if(i.life-=t,i.life<=0){i.active=!1;continue}i.vy+=i.gravity*t,i.vx*=i.drag,i.vy*=i.drag,i.vz*=i.drag,i.x+=i.vx*t,i.y+=i.vy*t,i.z+=i.vz*t}}V(this,Oe,$s).call(this),V(this,Oe,$r).call(this)}}clear(){for(const t of this.leafParticles)t.active=!1;for(const t of this.dustParticles)t.active=!1;for(const t of this.ringPool)t.active=!1,t.mesh.visible=!1,t.mesh.material.opacity=0;this.activeRingCount=0,V(this,Oe,$s).call(this),V(this,Oe,$r).call(this)}}Oe=new WeakSet,Zs=function(t,e){this.dummy.position.set(0,-1e3,0),this.dummy.rotation.set(0,0,0),this.dummy.scale.setScalar(0),this.dummy.updateMatrix(),t.setMatrixAt(e,this.dummy.matrix)},nl=function(t,e,i,s,r){if(this.reducedMotion)return null;const a=this.leafCursor;this.leafCursor=(this.leafCursor+1)%ps;const o=this.leafParticles[a],l=Math.random()*zr,c=r.radialMin+Math.random()*(r.radialMax-r.radialMin);return o.active=!0,o.x=t+(Math.random()-.5)*.5,o.y=e+(Math.random()-.3)*.4,o.z=i+(Math.random()-.5)*.5,o.vx=Math.cos(l)*c,o.vz=Math.sin(l)*c,o.vy=r.velocityYMin+Math.random()*(r.velocityYMax-r.velocityYMin),o.rx=Math.random()*zr,o.ry=Math.random()*zr,o.rz=Math.random()*zr,o.spinX=(Math.random()-.5)*8,o.spinY=(Math.random()-.5)*7,o.spinZ=(Math.random()-.5)*6,o.life=r.lifeMin+Math.random()*(r.lifeMax-r.lifeMin),o.maxLife=o.life,o.size=r.sizeMin+Math.random()*(r.sizeMax-r.sizeMin),o.gravity=r.gravity,o.drag=r.drag,this.leafMesh.setColorAt(a,s[Math.floor(Math.random()*s.length)]),this.leafMesh.instanceColor&&(this.leafMesh.instanceColor.needsUpdate=!0),a},yu=function(t){let e=0;for(const i of this.ringPool){if(!i.active)continue;if(i.life-=t,i.life<=0){i.active=!1,i.mesh.visible=!1;continue}e+=1;const s=1-i.life/i.maxLife,r=1-Math.pow(1-s,3),a=.7+(i.radius-.7)*r;i.mesh.scale.setScalar(a),i.mesh.position.y=.09,i.mesh.material.opacity=i.opacity*(1-s)}this.activeRingCount=e},$s=function(){let t=0;for(let e=0;e<ps;e+=1){const i=this.leafParticles[e];if(!i.active){V(this,Oe,Zs).call(this,this.leafMesh,e);continue}t+=1,this.dummy.position.set(i.x,i.y,i.z),this.dummy.rotation.set(i.rx,i.ry,i.rz);const s=.35+.65*Math.max(0,i.life/i.maxLife);this.dummy.scale.setScalar(i.size*s),this.dummy.updateMatrix(),this.leafMesh.setMatrixAt(e,this.dummy.matrix)}this.activeLeafCount=t,this.leafMesh.visible=t>0,this.leafMesh.instanceMatrix.needsUpdate=!0},$r=function(){let t=0;for(let e=0;e<ms;e+=1){const i=this.dustParticles[e];if(!i.active){V(this,Oe,Zs).call(this,this.dustMesh,e);continue}t+=1,this.dummy.position.set(i.x,i.y,i.z),this.dummy.rotation.set(0,0,0);const s=.4+.6*Math.max(0,i.life/i.maxLife);this.dummy.scale.setScalar(i.size*s),this.dummy.updateMatrix(),this.dustMesh.setMatrixAt(e,this.dummy.matrix)}this.activeDustCount=t,this.dustMesh.visible=t>0,this.dustMesh.instanceMatrix.needsUpdate=!0};class d_{constructor(){this.events=[],this.latestId=0,this.lastEvent=null}reset(){this.events.length=0,this.latestId=0,this.lastEvent=null}emit(t,e,i,s="walk"){this.latestId+=1;const r=s==="sprint"?vn.sprintLife:s==="bark"?vn.barkLife:vn.walkLife,a={id:this.latestId,x:t,z:e,radius:i,kind:s,age:0,life:r};return this.events.push(a),this.lastEvent=a,a}update(t){if(t<=0)return;let e=0;for(let i=0;i<this.events.length;i+=1){const s=this.events[i];s.age+=t,s.age<s.life&&(this.events[e]=s,e+=1)}this.events.length=e}getAudibleNoise(t,e,i=1,s=0){let r=null;for(const a of this.events)a.id<=s||Math.hypot(t-a.x,e-a.z)>a.radius*i||(!r||a.id>r.id)&&(r=a);return r}}const Eu="turkey-run.best-run.v1";function tn(n){const t=Math.max(0,Math.round(Number(n)||0)),e=Math.floor(t/60),i=t%60;return`${e}:${String(i).padStart(2,"0")}`}function f_({won:n,time:t=0,spotted:e=0,chased:i=0}){if(!n)return{letter:"F",label:"TONIGHT'S DINNER",penalty:null};const s=Math.max(0,Number(t)||0)+e*12+i*10;return s<=50?{letter:"S",label:"FREE RANGE",penalty:s}:s<=75?{letter:"A",label:"CLEAN GETAWAY",penalty:s}:s<=105?{letter:"B",label:"LUCKY BIRD",penalty:s}:{letter:"C",label:"BARELY A BIRD",penalty:s}}function p_(){try{const n=window.localStorage.getItem(Eu);if(!n)return null;const t=JSON.parse(n);return!t||typeof t.time!="number"||!Number.isFinite(t.time)||typeof t.grade!="string"?null:{time:Math.max(0,Math.round(t.time)),grade:t.grade,spotted:Math.max(0,Math.round(Number(t.spotted)||0))}}catch{return null}}function m_(n){try{return window.localStorage.setItem(Eu,JSON.stringify(n)),!0}catch{return!1}}function g_(n,t){return t?n.time!==t.time?n.time<t.time:(n.spotted||0)<(t.spotted||0):!0}const bu="turkey-run.quality.v1",Ts={high:{key:"high",label:"HIGH",maxPixelRatio:2,shadows:!0,shadowSize:2048,effectsDensity:1,description:"Up to 2× resolution · 2048 shadows · full effects"},medium:{key:"medium",label:"MEDIUM",maxPixelRatio:1.5,shadows:!0,shadowSize:1024,effectsDensity:.65,description:"Up to 1.5× resolution · 1024 shadows · reduced effects"},low:{key:"low",label:"LOW",maxPixelRatio:1,shadows:!1,shadowSize:512,effectsDensity:.35,description:"1× resolution · shadows off · minimal effects"}};function x_(){const n=window.matchMedia?.("(pointer: coarse)")?.matches??!1,t=window.innerWidth<900;return n||t?"medium":"high"}function __(){try{const n=window.localStorage.getItem(bu);if(n&&Ts[n])return n}catch{}return x_()}function v_(n){if(!Ts[n])return!1;try{return window.localStorage.setItem(bu,n),!0}catch{return!1}}const In=1200,Dn=630,Qc={S:{from:"#f8dd85",to:"#d9992b",border:"#8a5a12",ink:"#4a2c18"},A:{from:"#c8e59a",to:"#7aa844",border:"#4c6a2b",ink:"#26370f"},B:{from:"#b8e2ee",to:"#5d9ab5",border:"#3d6b80",ink:"#153440"},C:{from:"#e8cba2",to:"#b17a43",border:"#7d4f26",ink:"#3a210f"},F:{from:"#ee9e80",to:"#b23a22",border:"#6e1f12",ink:"#fff1e5"}};function kr(n,t,e,i,s,r){const a=Math.min(r,i/2,s/2);n.beginPath(),n.moveTo(t+a,e),n.lineTo(t+i-a,e),n.quadraticCurveTo(t+i,e,t+i,e+a),n.lineTo(t+i,e+s-a),n.quadraticCurveTo(t+i,e+s,t+i-a,e+s),n.lineTo(t+a,e+s),n.quadraticCurveTo(t,e+s,t,e+s-a),n.lineTo(t,e+a),n.quadraticCurveTo(t,e,t+a,e),n.closePath()}function Gr(n,t,e,i,s,r,a=1){n.save(),n.translate(t,e),n.rotate(s),n.scale(1,.44),n.globalAlpha=a,n.fillStyle=r,n.beginPath(),n.arc(0,0,i,0,Math.PI*2),n.fill(),n.restore()}function ai(n,t,e,i,s,r){n.font=s,n.fillStyle=r,n.fillText(t,e,i)}function S_(n){const t=n.won?"freedom":"caught",e=String(n.timeText||tn(n.time||0)).replace(":","m"),i=n.grade?.letter||"F";return`turkey-run-${t}-${e}s-${i}.png`}function M_(n){const t=n.timeText||tn(n.time||0),e=n.grade?.letter||"F";return n.won?`I escaped Thanksgiving in ${t} with grade ${e} in Turkey Run!`:`I got caught ${Math.max(1,Math.round(n.distance||0))} m from the gate in Turkey Run. Happy Thanksgiving... I guess.`}function y_(n){const t=document.createElement("canvas");t.width=In,t.height=Dn;const e=t.getContext("2d"),i=!!n.won,s=n.grade||{letter:i?"C":"F",label:i?"BARELY A BIRD":"TONIGHT'S DINNER"},r=Qc[s.letter]||Qc.C,a=n.timeText||tn(n.time||0),o=n.spotted??0,l=n.chased??0,c=n.hides??0,h=n.distractions??0,d=Math.max(1,Math.round(n.distance||0)),u=n.best,f=e.createLinearGradient(0,0,In,Dn);f.addColorStop(0,"#2a160a"),f.addColorStop(.55,"#4a2b14"),f.addColorStop(1,"#241309"),e.fillStyle=f,e.fillRect(0,0,In,Dn);const g=e.createRadialGradient(610,300,40,610,300,720);g.addColorStop(0,"rgba(255, 196, 110, 0.16)"),g.addColorStop(1,"rgba(255, 196, 110, 0)"),e.fillStyle=g,e.fillRect(0,0,In,Dn);for(let w=0;w<9;w+=1)Gr(e,30+w*151%In,20+w*97%Dn,22+w%4*9,w*.7,w%3===0?"#d06a2a":w%3===1?"#b03a2b":"#d9a52b",.16);e.save(),e.shadowColor="rgba(0, 0, 0, 0.45)",e.shadowBlur=34,e.shadowOffsetY=14;const v=e.createLinearGradient(0,40,0,590);v.addColorStop(0,"#f9eed9"),v.addColorStop(1,"#efd9b2"),kr(e,42,42,In-84,Dn-84,28),e.fillStyle=v,e.fill(),e.restore(),kr(e,42,42,In-84,Dn-84,28),e.lineWidth=5,e.strokeStyle="#5a3418",e.stroke(),Gr(e,1112,528,44,-.6,"#d06a2a",.32),Gr(e,1082,560,28,.4,"#d9a52b",.28),Gr(e,78,548,34,1.1,"#b03a2b",.22),ai(e,"T H A N K S G I V I N G   E S C A P E",84,102,'bold 16px "Trebuchet MS", Verdana, sans-serif',"#8a5a2c"),e.save(),e.fillStyle="rgba(90, 52, 24, 0.22)",e.font='bold 80px Georgia, "Times New Roman", serif',e.fillText("TURKEY RUN",86,186),e.restore(),ai(e,"TURKEY RUN",84,184,'bold 80px Georgia, "Times New Roman", serif',"#b23a22"),ai(e,"NO ROAST FOR ME!",86,226,'italic 30px Georgia, "Times New Roman", serif',"#6b4426"),e.strokeStyle="rgba(90, 52, 24, 0.24)",e.lineWidth=2,e.beginPath(),e.moveTo(84,250),e.lineTo(706,250),e.stroke(),ai(e,i?"FREEDOM!":"HAPPY THANKSGIVING!",84,i?330:326,i?'bold 70px Georgia, "Times New Roman", serif':'bold 43px Georgia, "Times New Roman", serif',i?"#4f7a34":"#a83321"),ai(e,i?"You escaped Thanksgiving!":"You are tonight's special guest.",86,372,'24px "Trebuchet MS", Verdana, sans-serif',"#4a2c18"),ai(e,i?`Escaped in ${a} · Grade ${s.letter}`:n.caughtBy==="dog"?`The dog got you ${d} m from the gate after ${a}`:`Caught ${d} m from the gate after ${a}`,86,406,'20px "Trebuchet MS", Verdana, sans-serif',"#8a6640");const m=[["SPOTTED",o],["CHASED",l],["HIDES",c],["PHONE BREAKS",h]];for(let w=0;w<m.length;w+=1){const P=86+w*158;ai(e,m[w][0],P,466,'bold 12px "Trebuchet MS", Verdana, sans-serif',"#8a5a2c"),ai(e,String(m[w][1]),P,508,'bold 34px Georgia, "Times New Roman", serif',"#5a3418")}ai(e,"TURKEY RUN  ·  NO ROAST FOR ME!",86,558,'bold 13px "Trebuchet MS", Verdana, sans-serif',"#96744a"),e.strokeStyle="rgba(90, 52, 24, 0.22)",e.lineWidth=2,e.beginPath(),e.moveTo(752,92),e.lineTo(752,538),e.stroke(),e.save(),e.textAlign="center",ai(e,"YOUR GRADE",916,82,'bold 13px "Trebuchet MS", Verdana, sans-serif',"#8a5a2c");const p=790,_=96,y=252,M=252;e.save(),e.shadowColor="rgba(90, 52, 24, 0.3)",e.shadowBlur=18,e.shadowOffsetY=8,kr(e,p,_,y,M,30);const C=e.createLinearGradient(p,_,p+y,_+M);return C.addColorStop(0,r.from),C.addColorStop(1,r.to),e.fillStyle=C,e.fill(),e.restore(),kr(e,p,_,y,M,30),e.lineWidth=5,e.strokeStyle=r.border,e.stroke(),e.fillStyle=r.ink,e.textAlign="center",e.textBaseline="middle",e.font='bold 156px Georgia, "Times New Roman", serif',e.fillText(s.letter,p+y/2,_+112),e.font='bold 16px "Trebuchet MS", Verdana, sans-serif',e.fillText(s.label,p+y/2,_+212),e.textBaseline="alphabetic",ai(e,a,916,424,'bold 64px Georgia, "Times New Roman", serif',"#5a3418"),e.textAlign="center",ai(e,i?"ESCAPE TIME":"TIME UNTIL DINNER",916,452,'bold 13px "Trebuchet MS", Verdana, sans-serif',"#8a5a2c"),n.newBest?ai(e,"NEW BEST RUN!",916,500,'bold 20px "Trebuchet MS", Verdana, sans-serif',"#b23a22"):u?ai(e,`BEST RUN ${tn(u.time)} · ${u.grade}`,916,500,'bold 18px "Trebuchet MS", Verdana, sans-serif',"#8a6640"):ai(e,"FIRST RECORDED RUN",916,500,'bold 16px "Trebuchet MS", Verdana, sans-serif',"#8a6640"),ai(e,i?"THE HUMAN IS STILL YELLING AT HIS PHONE.":"THE OVEN IS PREHEATED.",916,530,'13px "Trebuchet MS", Verdana, sans-serif',"#96744a"),e.restore(),t}var la,Tu;class E_{constructor(t={}){ei(this,la);this.callbacks=t,this.toastTimer=null;const e=window.matchMedia?.("(pointer: coarse)")?.matches??!1;this.mobile=Kx()&&e,this.hud=document.getElementById("hud"),this.startScreen=document.getElementById("start-screen"),this.pauseScreen=document.getElementById("pause-screen"),this.endScreen=document.getElementById("end-screen"),this.mobileControls=document.getElementById("mobile-controls"),this.dangerVignette=document.getElementById("danger-vignette"),this.screenFlash=document.getElementById("screen-flash"),this.dangerLevel="safe",this.startHistoryBtn=document.getElementById("history-btn"),this.endHistoryBtn=document.getElementById("end-history-btn"),this.pauseHistoryBtn=document.getElementById("pause-history-btn"),this.historyScreen=document.getElementById("history-screen"),this.historyList=document.getElementById("history-list"),this.historyCloseBtn=document.getElementById("history-close-btn"),this.endShareBtn=document.getElementById("end-share-btn"),this.shareScreen=document.getElementById("share-screen"),this.shareImage=document.getElementById("share-image"),this.shareDownloadBtn=document.getElementById("share-download-btn"),this.shareNativeBtn=document.getElementById("share-native-btn"),this.shareCloseBtn=document.getElementById("share-close-btn"),this.startQualityBtn=document.getElementById("quality-btn"),this.pauseQualityBtn=document.getElementById("pause-quality-btn"),this.qualityScreen=document.getElementById("quality-screen"),this.qualityOptions=[...document.querySelectorAll(".quality-option")],this.qualityCloseBtn=document.getElementById("quality-close-btn"),this.perfFps=document.getElementById("perf-fps"),this.perfCalls=document.getElementById("perf-calls"),this.perfRatio=document.getElementById("perf-ratio"),this.history=[],this.historyOpen=!1,this.shareOpen=!1,this.qualityOpen=!1,this.qualityKey="high",this.lastResult=null,this.bestRun=null,this.shareCanvas=null,this.shareBlob=null,this.shareFileName="",this.shareText="",this.alertCard=document.getElementById("alert-card"),this.alertTitle=document.getElementById("alert-title"),this.alertSub=document.getElementById("alert-sub"),this.objectiveDist=document.getElementById("objective-dist"),this.staminaFill=document.getElementById("stamina-fill"),this.staminaValue=document.getElementById("stamina-value"),this.hideBadge=document.getElementById("hide-badge"),this.prompt=document.getElementById("prompt"),this.toastEl=document.getElementById("toast"),this.endEyebrow=document.getElementById("end-eyebrow"),this.endTitle=document.getElementById("end-title"),this.endSubtitle=document.getElementById("end-subtitle"),this.endDetail=document.getElementById("end-detail"),this.bestRunValue=document.getElementById("best-run-value"),this.gradeBadge=document.getElementById("grade-badge"),this.gradeLetter=document.getElementById("grade-letter"),this.gradeLabel=document.getElementById("grade-label"),this.resultTimeValue=document.getElementById("result-time-value"),this.resultTimeLabel=document.getElementById("result-time-label"),this.statSpotted=document.getElementById("stat-spotted"),this.statChased=document.getElementById("stat-chased"),this.statHides=document.getElementById("stat-hides"),this.statDistractions=document.getElementById("stat-distractions"),this.recordLine=document.getElementById("record-line"),this.muteButtons=[document.getElementById("mute-btn"),document.getElementById("pause-mute-btn"),document.getElementById("end-mute-btn")],this.mobile&&document.body.classList.add("mobile"),document.getElementById("start-btn")?.addEventListener("click",()=>this.callbacks.onStart?.()),document.getElementById("resume-btn")?.addEventListener("click",()=>this.callbacks.onResume?.()),document.getElementById("pause-restart-btn")?.addEventListener("click",()=>this.callbacks.onRestart?.()),document.getElementById("retry-btn")?.addEventListener("click",()=>this.callbacks.onRestart?.()),document.getElementById("pause-btn")?.addEventListener("click",()=>this.callbacks.onPause?.());for(const i of[this.startHistoryBtn,this.endHistoryBtn,this.pauseHistoryBtn])i?.addEventListener("click",()=>this.openHistory());this.historyCloseBtn?.addEventListener("click",()=>this.closeHistory()),this.endShareBtn?.addEventListener("click",()=>this.openShareCard()),this.shareCloseBtn?.addEventListener("click",()=>this.closeShareCard()),this.shareDownloadBtn?.addEventListener("click",()=>this.downloadShareCard()),this.shareNativeBtn?.addEventListener("click",()=>this.shareNative()),this.startQualityBtn?.addEventListener("click",()=>this.openQuality()),this.pauseQualityBtn?.addEventListener("click",()=>this.openQuality()),this.qualityCloseBtn?.addEventListener("click",()=>this.closeQuality());for(const i of this.qualityOptions)i.addEventListener("click",()=>{this.callbacks.onQualitySelect?.(i.dataset.quality)});for(const i of this.muteButtons)i?.addEventListener("click",()=>{const s=this.callbacks.onToggleMute?.();this.setMuted(s)});V(this,la,Tu).call(this)}showStart(){this.startScreen.classList.remove("hidden")}hideStart(){this.startScreen.classList.add("hidden")}setHudVisible(t){this.hud.classList.toggle("hidden",!t),this.mobileControls&&this.mobileControls.classList.toggle("hidden",!t),t||(this.dangerLevel="safe",this.dangerVignette.className="")}setDangerLevel(t){this.dangerLevel!==t&&(this.dangerLevel=t,this.dangerVignette.className=t==="safe"?"":t)}flash(t){this.screenFlash&&(this.screenFlash.className="",this.screenFlash.offsetWidth,this.screenFlash.classList.add(t))}resetTransientEffects(){this.setDangerLevel("safe"),this.screenFlash&&(this.screenFlash.className=""),this.closeHistory(),this.closeShareCard(),this.closeQuality(),this.lastResult=null}showPause(){this.pauseScreen.classList.remove("hidden")}hidePause(){this.pauseScreen.classList.add("hidden")}setBestRun(t){this.bestRun=t,this.bestRunValue&&(t?(this.bestRunValue.textContent=`${tn(t.time)} · ${t.grade}`,this.bestRunValue.classList.remove("empty")):(this.bestRunValue.textContent="No escape yet",this.bestRunValue.classList.add("empty")),this.historyOpen&&this.renderHistory())}setHistory(t){this.history=Array.isArray(t)?t:[];const e=this.history.length;this.startHistoryBtn&&(this.startHistoryBtn.textContent=e>0?`RUN HISTORY (${e})`:"RUN HISTORY"),this.endHistoryBtn&&(this.endHistoryBtn.textContent=e>0?`HISTORY (${e})`:"HISTORY"),this.pauseHistoryBtn&&(this.pauseHistoryBtn.textContent=e>0?`HISTORY (${e})`:"HISTORY"),this.historyOpen&&this.renderHistory()}formatHistoryDate(t){if(!Number.isFinite(t))return"";const e=new Date(t);return Number.isNaN(e.getTime())?"":e.toLocaleDateString(void 0,{month:"short",day:"numeric"})}renderHistory(){if(this.historyList){if(this.historyList.replaceChildren(),this.history.length===0){const t=document.createElement("div");t.className="history-empty",t.textContent="No runs yet. The record book is empty.",this.historyList.append(t);return}for(const t of this.history){const e=document.createElement("div");e.className="history-row";const i=document.createElement("span");i.className="history-grade",i.dataset.grade=t.grade||"F",i.textContent=t.grade||"F";const s=document.createElement("div");s.className="history-main";const r=document.createElement("div");r.className="history-title-row";const a=document.createElement("span");if(a.className="history-outcome",t.won?a.textContent="Escaped Thanksgiving!":t.caughtBy==="dog"?a.textContent=`The dog caught you ${Math.max(1,Math.round(t.distance||0))} m from the gate`:a.textContent=`Caught ${Math.max(1,Math.round(t.distance||0))} m from the gate`,r.append(a),t.won&&this.bestRun&&Math.round(t.time)===this.bestRun.time&&t.grade===this.bestRun.grade){const d=document.createElement("span");d.className="history-best",d.textContent="BEST",r.append(d)}const l=[this.formatHistoryDate(t.at)];t.spotted&&l.push(`${t.spotted} spotted`),t.chased&&l.push(`${t.chased} chased`),t.hides&&l.push(`${t.hides} hides`);const c=document.createElement("span");c.className="history-meta",c.textContent=l.filter(Boolean).join(" · "),s.append(r,c);const h=document.createElement("span");h.className="history-time",h.textContent=tn(t.time),e.append(i,s,h),this.historyList.append(e)}}}openHistory(){this.renderHistory(),this.historyOpen=!0,this.historyScreen?.classList.remove("hidden")}closeHistory(){this.historyOpen=!1,this.historyScreen?.classList.add("hidden")}isOverlayOpen(){return this.historyOpen||this.shareOpen||this.qualityOpen}setQuality(t){const e=Ts[t]||Ts.high;this.qualityKey=e.key;const i=`GRAPHICS: ${e.label}`;this.startQualityBtn&&(this.startQualityBtn.textContent=i),this.pauseQualityBtn&&(this.pauseQualityBtn.textContent=i);for(const s of this.qualityOptions)s.classList.toggle("selected",s.dataset.quality===e.key)}openQuality(){this.qualityOpen=!0,this.setQuality(this.qualityKey),this.qualityScreen?.classList.remove("hidden")}closeQuality(){this.qualityOpen=!1,this.qualityScreen?.classList.add("hidden")}setPerformanceStats({fps:t=0,drawCalls:e=0,pixelRatio:i=1}={}){this.perfFps&&(this.perfFps.textContent=String(Math.max(0,Math.round(t)))),this.perfCalls&&(this.perfCalls.textContent=String(Math.max(0,Math.round(e)))),this.perfRatio&&(this.perfRatio.textContent=`${Number(i).toFixed(2)}×`)}openShareCard(){if(!this.lastResult)return;const t={...this.lastResult,best:this.lastResult.best||this.bestRun},e=y_(t);this.shareCanvas=e,this.shareFileName=S_(t),this.shareText=M_(t),this.shareBlob=null,this.shareOpen=!0,this.shareNativeBtn?.classList.add("hidden"),this.shareImage&&(this.shareImage.alt=t.won?"Turkey Run escape result card":"Turkey Run caught result card",this.shareImage.src=e.toDataURL("image/png")),this.shareScreen?.classList.remove("hidden"),e.toBlob(i=>{if(this.shareOpen&&(this.shareBlob=i,!!i))try{const s=new File([i],this.shareFileName,{type:"image/png"}),r=!!(navigator.canShare?.({files:[s]})&&navigator.share);this.shareNativeBtn?.classList.toggle("hidden",!r)}catch{this.shareNativeBtn?.classList.add("hidden")}},"image/png")}closeShareCard(){this.shareOpen=!1,this.shareScreen?.classList.add("hidden"),this.shareImage&&this.shareImage.removeAttribute("src"),this.shareNativeBtn?.classList.add("hidden"),this.shareCanvas=null,this.shareBlob=null,this.shareFileName=""}downloadShareCard(){if(!this.shareCanvas)return;const t=this.shareFileName||"turkey-run-result.png",e=document.createElement("a");if(e.download=t,e.rel="noopener",this.shareBlob){const i=URL.createObjectURL(this.shareBlob);e.href=i,document.body.appendChild(e),e.click(),e.remove(),setTimeout(()=>URL.revokeObjectURL(i),2e3)}else e.href=this.shareCanvas.toDataURL("image/png"),document.body.appendChild(e),e.click(),e.remove()}async shareNative(){if(!(!this.shareBlob||!navigator.share))try{const t=new File([this.shareBlob],this.shareFileName||"turkey-run-result.png",{type:"image/png"});if(!navigator.canShare?.({files:[t]}))return;await navigator.share({files:[t],title:"Turkey Run",text:this.shareText||"Turkey Run"})}catch{}}showEnd(t,e={}){this.lastResult={...e,won:t};const i=e.timeText||tn(e.time??e.elapsed??0),s=e.spotted??0,r=e.chased??0,a=e.hides??0,o=e.distractions??0,l=e.grade??{letter:t?"C":"F",label:t?"BARELY A BIRD":"TONIGHT'S DINNER"};this.endScreen.classList.remove("win","lose"),this.endScreen.classList.add(t?"win":"lose"),this.endScreen.classList.remove("hidden"),this.gradeBadge.dataset.grade=l.letter,this.gradeLetter.textContent=l.letter,this.gradeLabel.textContent=l.label,this.resultTimeValue.textContent=i,this.resultTimeLabel.textContent=t?"ESCAPE TIME":"TIME UNTIL DINNER",this.statSpotted.textContent=String(s),this.statChased.textContent=String(r),this.statHides.textContent=String(a),this.statDistractions.textContent=String(o);const c=(f,g)=>`${f} ${g}${f===1?"":"s"}`,h=s===0?"You were never spotted.":`You were spotted ${c(s,"time")}.`,d=r===0?"You were never chased.":`He chased you ${c(r,"time")}.`,u=a===0?"You never hid once.":`You found cover ${c(a,"time")}.`;if(t)this.endEyebrow.textContent="THE GATE IS THAT WAY, GENIUS",this.endTitle.textContent="FREEDOM!",this.endSubtitle.textContent="You escaped Thanksgiving!",this.endDetail.textContent=`Escaped in ${i}. ${h} ${d} ${u} The human is still yelling at his phone.`;else{const f=Math.max(1,Math.round(e.distance||0)),g=e.caughtBy==="dog";this.endEyebrow.textContent="DINNER IS SERVED",this.endTitle.textContent="HAPPY THANKSGIVING!",this.endSubtitle.textContent="You are tonight's special guest.",this.endDetail.textContent=`${g?"The dog got you":"Caught"} ${f} m from the gate after ${i}. ${h} ${d} ${u} ${g?"The human is already preheating the oven.":"The oven is preheated."}`}e.newBest?(this.recordLine.textContent="NEW BEST RUN!",this.recordLine.classList.add("new-best")):e.best?(this.recordLine.textContent=`BEST RUN ${tn(e.best.time)} · ${e.best.grade}`,this.recordLine.classList.remove("new-best")):(this.recordLine.textContent="NO ESCAPES YET. BE THE FIRST BIRD.",this.recordLine.classList.remove("new-best"))}hideEnd(){this.endScreen.classList.add("hidden"),this.endScreen.classList.remove("win","lose")}updateHUD(t){const{stamina:e=100,alert:i=0,state:s="PATROL",hidden:r=!1,nearCover:a=!1,gateDistance:o=0,chase:l=!1}=t,c=Math.max(0,Math.min(100,e));this.staminaFill.style.width=`${c}%`,this.staminaFill.classList.toggle("low",c<25),this.staminaValue.textContent=`${Math.round(c)}%`;let h="safe";l||i>=.72?h="detected":(s==="INVESTIGATE"||i>=.36)&&(h="suspicious"),this.alertCard.classList.remove("safe","suspicious","detected"),this.alertCard.classList.add(h);const d=l?"chase":h==="detected"?"detected":h==="suspicious"?"suspicious":"safe";this.setDangerLevel(d),h==="detected"?(this.alertTitle.textContent=l||s==="CHASE"?"HE'S COMING!":"DETECTED",this.alertSub.textContent="Sprint or hide. Now."):h==="suspicious"?(this.alertTitle.textContent="SUSPICIOUS",this.alertSub.textContent="He heard something..."):(this.alertTitle.textContent="SAFE",this.alertSub.textContent=s==="DISTRACTED"?"He is glued to his phone":s==="GATE_CHECK"?"He is checking the gate":"The yard is quiet"),this.objectiveDist.textContent=o>8?`Gate ${Math.round(o)} m`:"Gate is close!",this.hideBadge.classList.toggle("hidden",!r);const u=a&&!r;this.prompt.classList.toggle("hidden",!u),u&&(this.prompt.textContent=this.mobile?"Hold HIDE to duck behind cover":"Hold SPACE to hide")}toast(t,e=1800){this.toastEl&&(this.toastEl.textContent=t,this.toastEl.classList.remove("hidden"),this.toastEl.style.animation="none",this.toastEl.offsetWidth,this.toastEl.style.animation="",this.toastTimer&&clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>{this.toastEl.classList.add("hidden")},e))}setMuted(t){for(const e of this.muteButtons)e&&(e.textContent=t?"SOUND OFF":"SOUND ON")}}la=new WeakSet,Tu=function(){if(!this.mobile)return;const t=document.getElementById("joystick"),e=document.getElementById("joystick-knob");let i=null;const s=o=>{const l=t.getBoundingClientRect(),c=l.left+l.width/2,h=l.top+l.height/2;let d=(o.clientX-c)/(l.width/2),u=(o.clientY-h)/(l.height/2);const f=Math.hypot(d,u);f>1&&(d/=f,u/=f),e.style.transform=`translate(${d*34}px, ${u*34}px)`,this.callbacks.onVirtualMove?.(d,-u)},r=()=>{i=null,e.style.transform="translate(0, 0)",this.callbacks.onVirtualMove?.(0,0)};t?.addEventListener("pointerdown",o=>{i=o.pointerId;try{t.setPointerCapture(o.pointerId)}catch{}s(o),o.preventDefault()}),t?.addEventListener("pointermove",o=>{o.pointerId===i&&(s(o),o.preventDefault())}),t?.addEventListener("pointerup",r),t?.addEventListener("pointercancel",r);const a=(o,l,c)=>{const h=document.getElementById(o);if(!h)return;const d=f=>{h.classList.add("active"),l();try{h.setPointerCapture?.(f.pointerId)}catch{}f.preventDefault()},u=f=>{h.classList.remove("active"),c(),f&&f.preventDefault()};h.addEventListener("pointerdown",d),h.addEventListener("pointerup",u),h.addEventListener("pointercancel",u),h.addEventListener("pointerleave",f=>{f.buttons===0&&u(f)})};a("mobile-sprint",()=>this.callbacks.onVirtualSprint?.(!0),()=>this.callbacks.onVirtualSprint?.(!1)),a("mobile-hide",()=>this.callbacks.onVirtualHide?.(!0),()=>this.callbacks.onVirtualHide?.(!1))};var he,ze,mn;class b_{constructor(){ei(this,he);this.context=null,this.master=null,this.muted=!1,this.ready=!1}init(){if(this.context){this.context.state==="suspended"&&this.context.resume().catch(()=>{});return}const t=window.AudioContext||window.webkitAudioContext;t&&(this.context=new t,this.master=this.context.createGain(),this.master.gain.value=this.muted?0:.45,this.master.connect(this.context.destination),this.ready=!0)}setMuted(t){this.muted=t,this.master&&this.context&&this.master.gain.setTargetAtTime(t?0:.45,this.context.currentTime,.05)}toggleMute(){return this.setMuted(!this.muted),this.muted}step(t=!1){V(this,he,mn).call(this,{duration:t?.08:.07,volume:t?.18:.1,filterFreq:t?700:500}),V(this,he,ze).call(this,{freq:t?95:120,endFreq:55,duration:.08,type:"sine",volume:t?.12:.07})}humanStep(t=!1){V(this,he,mn).call(this,{duration:.09,volume:t?.2:.11,filterFreq:380}),V(this,he,ze).call(this,{freq:85,endFreq:48,duration:.1,type:"sine",volume:t?.16:.08})}alert(){V(this,he,ze).call(this,{freq:660,duration:.09,type:"square",volume:.13}),V(this,he,ze).call(this,{freq:880,duration:.12,type:"square",volume:.13,delay:.1})}distracted(){V(this,he,ze).call(this,{freq:210,endFreq:150,duration:.16,type:"sawtooth",volume:.06}),V(this,he,ze).call(this,{freq:190,endFreq:130,duration:.16,type:"sawtooth",volume:.06,delay:.18}),V(this,he,ze).call(this,{freq:230,endFreq:160,duration:.14,type:"sawtooth",volume:.05,delay:.38})}hide(){V(this,he,mn).call(this,{duration:.22,volume:.15,filterFreq:1500,type:"bandpass"})}gateCheck(){V(this,he,mn).call(this,{duration:.1,volume:.13,filterFreq:2400,type:"bandpass"}),V(this,he,ze).call(this,{freq:920,endFreq:620,duration:.07,type:"square",volume:.05}),V(this,he,mn).call(this,{duration:.08,volume:.09,filterFreq:1800,type:"bandpass",delay:.14})}noiseHeard(){V(this,he,ze).call(this,{freq:330,endFreq:360,duration:.1,type:"triangle",volume:.09}),V(this,he,ze).call(this,{freq:440,endFreq:490,duration:.16,type:"triangle",volume:.09,delay:.1})}bark(){V(this,he,ze).call(this,{freq:230,endFreq:110,duration:.13,type:"sawtooth",volume:.11}),V(this,he,mn).call(this,{duration:.07,volume:.07,filterFreq:650,delay:.01}),V(this,he,ze).call(this,{freq:200,endFreq:95,duration:.16,type:"sawtooth",volume:.1,delay:.17}),V(this,he,mn).call(this,{duration:.06,volume:.06,filterFreq:600,delay:.18})}gobble(){if(!this.ready||this.muted)return;const t=this.context,e=t.currentTime;for(let i=0;i<5;i+=1){const s=t.createOscillator(),r=t.createGain();s.type="sawtooth",s.frequency.setValueAtTime(160+i*12,e+i*.055),s.frequency.exponentialRampToValueAtTime(90,e+i*.055+.06),r.gain.setValueAtTime(1e-4,e+i*.055),r.gain.linearRampToValueAtTime(.07,e+i*.055+.01),r.gain.exponentialRampToValueAtTime(1e-4,e+i*.055+.07),s.connect(r),r.connect(this.master),s.start(e+i*.055),s.stop(e+i*.055+.08)}}caught(){V(this,he,ze).call(this,{freq:300,endFreq:210,duration:.3,type:"sawtooth",volume:.16}),V(this,he,ze).call(this,{freq:260,endFreq:170,duration:.42,type:"sawtooth",volume:.16,delay:.28}),V(this,he,ze).call(this,{freq:210,endFreq:90,duration:.8,type:"sawtooth",volume:.18,delay:.66}),this.gobble()}win(){[523.25,659.25,783.99,1046.5].forEach((e,i)=>{V(this,he,ze).call(this,{freq:e,duration:.24,type:"triangle",volume:.16,delay:i*.12})}),V(this,he,ze).call(this,{freq:1318.5,duration:.6,type:"triangle",volume:.14,delay:.52})}gateChime(){V(this,he,ze).call(this,{freq:1046.5,duration:.3,type:"sine",volume:.08}),V(this,he,ze).call(this,{freq:1568,duration:.4,type:"sine",volume:.06,delay:.08})}}he=new WeakSet,ze=function({freq:t=440,endFreq:e=null,duration:i=.18,type:s="sine",volume:r=.3,delay:a=0,attack:o=.01}){if(!this.ready||this.muted)return;const l=this.context,c=l.currentTime+a,h=l.createOscillator(),d=l.createGain();h.type=s,h.frequency.setValueAtTime(t,c),e!==null&&h.frequency.exponentialRampToValueAtTime(Math.max(20,e),c+i),d.gain.setValueAtTime(1e-4,c),d.gain.linearRampToValueAtTime(r,c+o),d.gain.exponentialRampToValueAtTime(1e-4,c+i),h.connect(d),d.connect(this.master),h.start(c),h.stop(c+i+.02)},mn=function({duration:t=.12,volume:e=.2,filterFreq:i=800,delay:s=0,type:r="lowpass"}){if(!this.ready||this.muted)return;const a=this.context,o=a.currentTime+s,l=Math.floor(a.sampleRate*t),c=a.createBuffer(1,l,a.sampleRate),h=c.getChannelData(0);for(let g=0;g<l;g+=1)h[g]=(Math.random()*2-1)*(1-g/l);const d=a.createBufferSource();d.buffer=c;const u=a.createBiquadFilter();u.type=r,u.frequency.value=i;const f=a.createGain();f.gain.value=e,d.connect(u),u.connect(f),f.connect(this.master),d.start(o)};const Ae=Object.freeze({MENU:"menu",PLAYING:"playing",PAUSED:"paused",WON:"won",LOST:"lost"});function th(){return{spotted:0,chased:0,hides:0,distractions:0,distanceAtCatch:0,caughtBy:null}}class T_{constructor(){this.mode=Ae.MENU,this.elapsed=0,this.resultTimer=0,this.restarts=0,this.stats=th()}reset(){this.mode=Ae.PLAYING,this.elapsed=0,this.resultTimer=0,this.stats=th()}}const wu="turkey-run.history.v1",Au=10;function w_(n){return n&&typeof n.time=="number"&&Number.isFinite(n.time)&&typeof n.grade=="string"&&typeof n.won=="boolean"}function Cu(){try{const n=window.localStorage.getItem(wu);if(!n)return[];const t=JSON.parse(n);return Array.isArray(t)?t.filter(w_).slice(0,Au):[]}catch{return[]}}function A_(n){try{window.localStorage.setItem(wu,JSON.stringify(n))}catch{}}function C_(n){const t=[n,...Cu()].slice(0,Au);return A_(t),t}const Nn=new L;var Yt,Ru,Pu,Lu,sl,rl,On,Iu,al,Du,ol,Nu,Uu,Fu,Ou,Bu,zu,ca;class R_{constructor(){ei(this,Yt);ei(this,ca,()=>{this.clock.update();const t=Math.min(this.clock.getDelta(),.05),e=this.state.mode===Ae.PAUSED;let i=t;if(this.fpsFrames+=1,this.fpsElapsed+=t,this.fpsElapsed>=.5&&(this.fps=Math.round(this.fpsFrames/this.fpsElapsed),this.fpsFrames=0,this.fpsElapsed=0,this.ui?.qualityOpen&&this.ui.setPerformanceStats({fps:this.fps,drawCalls:this.renderer.info.render.calls,pixelRatio:this.renderer.getPixelRatio()})),!e){this.hitStopTimer=Math.max(0,this.hitStopTimer-t),this.slowMoTimer=Math.max(0,this.slowMoTimer-t);const s=this.slowMoTimer>0?.35:1;this.timeScale=wi(this.timeScale,s,this.slowMoTimer>0?18:6,t),i=t*(this.hitStopTimer>0?.04:this.timeScale),this.backyard.update(t),this.noise.update(i),this.effects.update(i)}if(this.state.mode===Ae.MENU)this.menuTime+=t,this.turkey.update(t,{speed:0}),this.human.update(t,{speed:0,state:"PATROL",alert:0}),this.dog.update(t,{speed:0,state:"PATROL"}),this.rig.update(t,this.playerPosition);else if(this.state.mode===Ae.PLAYING){this.state.elapsed+=t;const s=this.player.update(i,this.turkey,this.playerPosition);this.turkey.setPosition(this.playerPosition.x,this.playerPosition.z);const r={hidden:s.hidden,sprinting:s.sprinting},a=this.ai.update(i,this.playerPosition,r,!0);this.dogAI.update(i,this.playerPosition,r,!0);const o=a.state==="CHASE"&&a.sight.distance<6.5;if(this.turkey.update(i,{speed:s.speed,hidden:s.hidden,panicked:o}),this.state.mode===Ae.PLAYING){if(V(this,Yt,Uu).call(this,i,s,a).stepped){const c=s.sprinting?"sprint":"walk",h=c==="sprint"?vn.sprintRadius:vn.walkRadius;this.noise.emit(this.playerPosition.x,this.playerPosition.z,h,c),this.effects.spawnNoiseRing(this.playerPosition.x,this.playerPosition.z,h,c)}V(this,Yt,Bu).call(this,i,s),V(this,Yt,Ou).call(this,i,s),V(this,Yt,Fu).call(this,s,a),V(this,Yt,zu).call(this,s,a),this.backyard.setGateProximity(_i(1-V(this,Yt,On).call(this)/26,0,1)),this.playerPosition.x>Ke.winX&&Math.abs(this.playerPosition.z)<3.4&&V(this,Yt,Du).call(this)}Nn.set(this.playerPosition.x,.9,this.playerPosition.z),this.rig.update(t,Nn)}else this.state.mode===Ae.WON?(this.state.resultTimer-=t,this.playerPosition.x+=5.2*i,this.playerPosition.z=wi(this.playerPosition.z,0,5,i),this.turkey.setPosition(this.playerPosition.x,this.playerPosition.z),this.turkey.setHeading(Math.PI/2),this.turkey.update(i,{speed:5.2}),this.ai.update(i,this.playerPosition,{hidden:!1,sprinting:!1},!1),this.dogAI.update(i,this.playerPosition,{hidden:!1,sprinting:!1},!1),Nn.set(this.playerPosition.x,.9,this.playerPosition.z),this.rig.update(t,Nn),this.state.resultTimer<=0&&V(this,Yt,ol).call(this,!0)):this.state.mode===Ae.LOST&&(this.state.resultTimer-=t,this.turkey.update(i,{speed:0,panicked:!0}),this.ai.update(i,this.playerPosition,{hidden:!1,sprinting:!1},!1),this.dogAI.update(i,this.playerPosition,{hidden:!1,sprinting:!1},!1),Nn.set(this.playerPosition.x,.9,this.playerPosition.z),this.rig.update(t,Nn),this.state.resultTimer<=0&&V(this,Yt,ol).call(this,!1));this.renderer.render(this.scene,this.camera)});this.canvas=document.getElementById("game-canvas"),this.qualityKey=__(),this.quality=Ts[this.qualityKey],this.renderer=new Yx({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,this.quality.maxPixelRatio)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputColorSpace=oi,this.renderer.toneMapping=hl,this.renderer.toneMappingExposure=1.05,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ks,this.camera=new gi(55,window.innerWidth/window.innerHeight,.1,220),this.backyard=new Jx,this.scene=this.backyard.scene,this.collision=this.backyard.collision,this.turkey=new jx,this.scene.add(this.turkey.root),this.human=new Qx,this.scene.add(this.human.root),this.dog=new e_,this.scene.add(this.dog.root),this.reducedMotion=Ll(),this.effects=new u_(this.scene),this.effects.reducedMotion=this.reducedMotion,this.effects.setDensity(this.quality.effectsDensity),this.renderer.shadowMap.enabled=this.quality.shadows,this.backyard.setShadowQuality(this.quality.shadows,this.quality.shadowSize),this.rig=new i_(this.camera),this.coverSystem=new h_(this.collision),this.player=new r_(this.camera,this.collision,this.coverSystem),this.vision=new c_(this.collision),this.noise=new d_,this.audio=new b_,this.state=new T_,this.playerPosition=new L(Ke.playerStart.x,0,Ke.playerStart.z),this.turkey.setPosition(this.playerPosition.x,this.playerPosition.z),this.turkey.setHeading(.6),this.ai=new o_(this.human,this.vision,this.collision,this.noise,{onCaught:()=>V(this,Yt,al).call(this,"human")}),this.dogAI=new l_(this.dog,this.collision,this.noise,{onBark:(t,e)=>V(this,Yt,Iu).call(this,t,e),onCaught:()=>V(this,Yt,al).call(this,"dog")}),this.ui=new E_({onStart:()=>this.start(),onRestart:()=>this.restart(),onResume:()=>this.resume(),onPause:()=>this.togglePause(),onToggleMute:()=>this.toggleMute(),onVirtualMove:(t,e)=>this.player.setVirtualMove(t,e),onVirtualSprint:t=>this.player.setVirtualSprint(t),onVirtualHide:t=>this.player.setVirtualHide(t),onQualitySelect:t=>this.setQuality(t)}),this.overlayShown=!1,this.roundResult=null,this.bestRun=p_(),this.ui.setBestRun(this.bestRun),this.history=Cu(),this.ui.setHistory(this.history),this.ui.setQuality(this.qualityKey),this.playerStepTimer=0,this.humanStepTimer=0,this.lastHumanState="PATROL",this.wasHidden=!1,this.wasHideHeld=!1,this.hideHintCooldown=0,this.gateChimePlayed=!1,this.lowStaminaWarned=!1,this.alertWarned=!1,this.menuTime=0,this.fps=60,this.fpsFrames=0,this.fpsElapsed=0,this.timeScale=1,this.slowMoTimer=0,this.hitStopTimer=0,this.dustTimer=0,this.clock=new jf,V(this,Yt,Ru).call(this),V(this,Yt,rl).call(this),this.ui.showStart(),this.ui.setHudVisible(!1),this.rig.setMode("menu"),this.renderer.setAnimationLoop(cr(this,ca)),window.__TURKEY_RUN__=this}setQuality(t,e=!0){const i=Ts[t];i&&(this.qualityKey=t,this.quality=i,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,i.maxPixelRatio)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=i.shadows,this.renderer.shadowMap.needsUpdate=!0,this.backyard.setShadowQuality(i.shadows,i.shadowSize),this.effects.setDensity(i.effectsDensity),e&&v_(t),this.ui?.setQuality(t),this.ui?.toast(`Graphics: ${i.label}`,1400))}start(){this.audio.init(),this.audio.gobble(),V(this,Yt,sl).call(this),this.ui.hideStart(),this.ui.toast("GO! Get to the gate before dinner.",2200)}restart(){this.audio.init(),V(this,Yt,sl).call(this),this.ui.toast("Round two. Same turkey, better odds.",2e3)}resume(){this.state.mode===Ae.PAUSED&&(this.state.mode=Ae.PLAYING,this.player.enabled=!0,this.wasHideHeld=this.player.hideHeld,this.ui.hidePause(),this.ui.setHudVisible(!0),this.rig.setMode("follow"))}togglePause(){this.state.mode===Ae.PLAYING?(this.state.mode=Ae.PAUSED,this.player.enabled=!1,this.player.setVirtualMove(0,0),this.player.setVirtualSprint(!1),this.player.setVirtualHide(!1),this.ui.showPause(),this.ui.setHudVisible(!1)):this.state.mode===Ae.PAUSED&&this.resume()}toggleMute(){const t=this.audio.toggleMute();return this.ui.setMuted(t),t}}Yt=new WeakSet,Ru=function(){window.addEventListener("resize",()=>V(this,Yt,Pu).call(this)),window.addEventListener("keydown",t=>V(this,Yt,Lu).call(this,t)),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state.mode===Ae.PLAYING&&this.togglePause()}),this.canvas.addEventListener("contextmenu",t=>t.preventDefault())},Pu=function(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,this.quality.maxPixelRatio)),this.renderer.setSize(t,e)},Lu=function(t){if(t.code==="Escape"){if(this.ui.isOverlayOpen())return;(this.state.mode===Ae.PLAYING||this.state.mode===Ae.PAUSED)&&(t.preventDefault(),this.togglePause())}else if(t.code==="KeyM")this.toggleMute();else if(t.code==="Enter"){if(this.ui.isOverlayOpen())return;this.state.mode===Ae.MENU?(t.preventDefault(),this.start()):this.state.mode===Ae.WON||this.state.mode===Ae.LOST?(t.preventDefault(),this.restart()):this.state.mode===Ae.PAUSED&&(t.preventDefault(),this.resume())}},sl=function(){V(this,Yt,rl).call(this),this.state.reset(),this.state.elapsed=0,this.overlayShown=!1,this.roundResult=null,this.playerStepTimer=0,this.humanStepTimer=0,this.lastHumanState="PATROL",this.wasHidden=!1,this.wasHideHeld=!1,this.hideHintCooldown=0,this.gateChimePlayed=!1,this.lowStaminaWarned=!1,this.alertWarned=!1,this.timeScale=1,this.slowMoTimer=0,this.hitStopTimer=0,this.dustTimer=0,this.effects.clear(),this.rig.resetEffects(),this.backyard.resetGateEffects(),this.ui.resetTransientEffects(),this.player.enabled=!0,this.ui.hideStart(),this.ui.hidePause(),this.ui.hideEnd(),this.ui.setHudVisible(!0),this.rig.setMode("follow"),this.rig.snapTo(Nn.set(this.playerPosition.x,.9,this.playerPosition.z)),this.ui.updateHUD({stamina:this.player.stamina,alert:0,state:"PATROL",hidden:!1,nearCover:!1,gateDistance:V(this,Yt,On).call(this),chase:!1})},rl=function(){this.playerPosition.set(Ke.playerStart.x,0,Ke.playerStart.z),this.player.reset(Ke.playerStart),this.turkey.setPosition(this.playerPosition.x,this.playerPosition.z),this.turkey.setHeading(this.player.heading),this.turkey.resetAnimation(),this.turkey.update(0,{speed:0,hidden:!1}),this.noise.reset(),this.ai.reset(),this.dogAI.reset(),this.vision.reset()},On=function(){return Ai(this.playerPosition.x,this.playerPosition.z,Ke.gate.x,Ke.gate.z)},Iu=function(t,e){this.state.mode===Ae.PLAYING&&(this.audio.bark(),this.effects.spawnNoiseRing(t,e,be.barkNoiseRadius,"bark"),this.ui.toast("The dog is barking! It will bring the human.",2200))},al=function(t="human"){this.state.mode===Ae.PLAYING&&(this.state.mode=Ae.LOST,this.state.resultTimer=Ke.caughtOverlayDelay,this.state.stats.distanceAtCatch=V(this,Yt,On).call(this),this.state.stats.caughtBy=t,this.player.enabled=!1,this.turkey.playCaught(),t==="dog"&&this.audio.bark(),this.audio.caught(),this.reducedMotion||(this.hitStopTimer=.06,this.slowMoTimer=.45,this.timeScale=.28),this.rig.addShake(.3,.45),this.rig.addZoomPunch(.22),this.effects.spawnLeafBurst(this.playerPosition.x,1.05,this.playerPosition.z,20),this.effects.spawnDust(this.playerPosition.x,this.playerPosition.z,0,0,6),this.ui.flash("catch"),this.ui.updateHUD({stamina:this.player.stamina,alert:1,state:"CAUGHT",hidden:!1,nearCover:!1,gateDistance:V(this,Yt,On).call(this),chase:!0}),this.ui.toast(t==="dog"?"THE DOG GOT YOU!":"CAUGHT! He saw you.",1600))},Du=function(){this.state.mode===Ae.PLAYING&&(this.state.mode=Ae.WON,this.state.resultTimer=Ke.winOverlayDelay,this.player.enabled=!1,this.audio.win(),this.reducedMotion||(this.slowMoTimer=.4,this.timeScale=.38),this.rig.addZoomPunch(.16),this.effects.spawnLeafBurst(Ke.gate.x+1.1,1.5,Ke.gate.z,44),this.effects.spawnLeafBurst(this.playerPosition.x,1.25,this.playerPosition.z,14),this.backyard.flareGate(1),this.ui.flash("win"),this.ui.toast("FREEDOM! Keep going!",1400))},ol=function(t){this.overlayShown||(this.overlayShown=!0,this.roundResult=V(this,Yt,Nu).call(this,t),this.ui.setHudVisible(!1),this.ui.showEnd(t,this.roundResult))},Nu=function(t){const e=this.state.stats,i=f_({won:t,time:this.state.elapsed,spotted:e.spotted,chased:e.chased});let s=this.bestRun,r=!1;if(t){const o={time:Math.max(0,Math.round(this.state.elapsed)),grade:i.letter,spotted:e.spotted};r=g_(o,s),r&&(s=o,this.bestRun=s,m_(s),this.ui.setBestRun(s))}const a={at:Date.now(),won:t,grade:i.letter,label:i.label,time:this.state.elapsed,spotted:e.spotted,chased:e.chased,hides:e.hides,distractions:e.distractions,distance:t?0:e.distanceAtCatch,caughtBy:t?null:e.caughtBy||"human"};return this.history=C_(a),this.ui.setHistory(this.history),{won:t,grade:i,time:this.state.elapsed,timeText:tn(this.state.elapsed),spotted:e.spotted,chased:e.chased,hides:e.hides,distractions:e.distractions,distance:e.distanceAtCatch,caughtBy:t?null:e.caughtBy||"human",best:s,newBest:r}},Uu=function(t,e,i){let s=!1;return this.playerStepTimer-=t,e.speed>.6&&!e.hidden?this.playerStepTimer<=0&&(this.audio.step(e.sprinting),this.playerStepTimer=e.sprinting?.24:.38,s=!0):this.playerStepTimer=Math.min(this.playerStepTimer,.1),this.humanStepTimer-=t,this.ai.speed>.5&&i.state!=="CAUGHT"?this.humanStepTimer<=0&&(this.audio.humanStep(i.state==="CHASE"),this.humanStepTimer=i.state==="CHASE"?.3:.52):this.humanStepTimer=Math.min(this.humanStepTimer,.12),{stepped:s,sprinting:e.sprinting}},Fu=function(t,e){const i=this.state.stats,s=this.lastHumanState;if(e.state!==s&&(e.state==="ALERT"?(s!=="CHASE"&&(i.spotted+=1),this.audio.alert(),this.alertWarned||(this.ui.toast("He noticed you. Break the line of sight!",1800),this.alertWarned=!0)):e.state==="CHASE"?(i.chased+=1,s!=="ALERT"&&(i.spotted+=1),this.audio.alert(),this.ui.toast("RUN! He is coming!",1500)):e.state==="DISTRACTED"?(i.distractions+=1,this.audio.distracted(),this.ui.toast("He is on his phone. Move!",1700)):e.state==="GATE_CHECK"?(this.audio.gateCheck(),this.ui.toast("He is checking the gate! Wait for your moment.",2200)):e.state==="INVESTIGATE"?(this.audio.noiseHeard(),this.ui.toast("He heard something. Move or hide!",1800)):e.state==="SEARCH"&&this.ui.toast("He lost you. For now.",1500),this.lastHumanState=e.state),t.hidden&&!this.wasHidden){i.hides+=1;const o=this.coverSystem.probe(this.playerPosition.x,this.playerPosition.z).object?.tag;o==="bush"||o==="tree"?this.effects.spawnLeafPuff(this.playerPosition.x,this.playerPosition.z,7):this.effects.spawnDust(this.playerPosition.x,this.playerPosition.z,0,0,3),this.audio.hide(),this.ui.toast("Hidden. Stay very still.",1500)}this.wasHidden=t.hidden,t.stamina<18&&!this.lowStaminaWarned&&(this.lowStaminaWarned=!0,this.ui.toast("Out of breath! Walk to recover.",1800)),t.stamina>45&&(this.lowStaminaWarned=!1);const r=V(this,Yt,On).call(this);!this.gateChimePlayed&&r<5.5&&(this.gateChimePlayed=!0,this.backyard.flareGate(.55),this.audio.gateChime(),this.ui.toast("THE GATE! GO GO GO!",1500))},Ou=function(t,e){this.hideHintCooldown=Math.max(0,this.hideHintCooldown-t);const i=this.player.hideHeld;i&&!this.wasHideHeld&&!e.hidden&&this.hideHintCooldown<=0&&(this.ui.toast("No cover here. Hide near a bush, tree, or crate.",1900),this.hideHintCooldown=1.5),this.wasHideHeld=i},Bu=function(t,e){if(e.sprinting&&e.speed>3&&!e.hidden){if(this.dustTimer-=t,this.dustTimer<=0){const i=1/(e.speed||1);this.effects.spawnDust(this.playerPosition.x,this.playerPosition.z,-this.player.velocity.x*i,-this.player.velocity.z*i,2),this.dustTimer=.15}}else this.dustTimer=Math.min(this.dustTimer,.06)},zu=function(t,e){this.ui.updateHUD({stamina:t.stamina,alert:e.alert,state:e.state,hidden:t.hidden,nearCover:this.player.nearCover,gateDistance:V(this,Yt,On).call(this),chase:e.state==="CHASE"})},ca=new WeakMap;function eh(){try{new R_}catch(n){console.error("Turkey Run failed to start:",n);const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;padding:24px;background:#241408;color:#f7e9cf;font-family:Georgia,serif;font-size:18px;text-align:center;z-index:9999;",t.textContent="Turkey Run could not start. Your browser may not support WebGL, or hardware acceleration is disabled.",document.body.appendChild(t)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",eh):eh();
