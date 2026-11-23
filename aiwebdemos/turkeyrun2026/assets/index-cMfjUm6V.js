var Xl=i=>{throw TypeError(i)};var ql=(i,t,e)=>t.has(i)||Xl("Cannot "+e);var fr=(i,t,e)=>(ql(i,t,"read from private field"),e?e.call(i):t.get(i)),sn=(i,t,e)=>t.has(i)?Xl("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e);var V=(i,t,e)=>(ql(i,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const ul="183",ju=0,Yl=1,Qu=2,tr=1,td=2,Ks=3,Si=0,pn=1,Ye=2,ii=0,ys=1,Qr=2,Zl=3,Kl=4,ed=5,Gi=100,nd=101,id=102,sd=103,rd=104,ad=200,od=201,ld=202,cd=203,ao=204,oo=205,hd=206,ud=207,dd=208,fd=209,pd=210,md=211,gd=212,xd=213,_d=214,lo=0,co=1,ho=2,Ss=3,uo=4,fo=5,po=6,mo=7,dl=0,vd=1,yd=2,kn=0,ah=1,oh=2,lh=3,fl=4,ch=5,hh=6,uh=7,dh=300,qi=301,bs=302,Ma=303,Sa=304,fa=306,go=1e3,ti=1001,xo=1002,en=1003,Md=1004,pr=1005,hn=1006,ba=1007,Vi=1008,vn=1009,fh=1010,ph=1011,ir=1012,pl=1013,Hn=1014,Pn=1015,ai=1016,ml=1017,gl=1018,sr=1020,mh=35902,gh=35899,xh=1021,_h=1022,Ln=1023,oi=1026,Wi=1027,xl=1028,_l=1029,Es=1030,vl=1031,yl=1033,Xr=33776,qr=33777,Yr=33778,Zr=33779,_o=35840,vo=35841,yo=35842,Mo=35843,So=36196,bo=37492,Eo=37496,To=37488,wo=37489,Ao=37490,Co=37491,Ro=37808,Po=37809,Lo=37810,Io=37811,Do=37812,No=37813,Uo=37814,Fo=37815,Oo=37816,Bo=37817,zo=37818,ko=37819,Go=37820,Ho=37821,Vo=36492,Wo=36494,Xo=36495,qo=36283,Yo=36284,Zo=36285,Ko=36286,Sd=3200,vh=0,bd=1,xi="",cn="srgb",Ts="srgb-linear",ta="linear",me="srgb",Ji=7680,$l=519,Ed=512,Td=513,wd=514,Ml=515,Ad=516,Cd=517,Sl=518,Rd=519,$o=35044,Jl=35048,jl="300 es",zn=2e3,rr=2001;function Pd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ea(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ld(){const i=ea("canvas");return i.style.display="block",i}const Ql={};function na(...i){const t="THREE."+i.shift();console.log(t,...i)}function yh(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Wt(...i){i=yh(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ae(...i){i=yh(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ia(...i){const t=i.join(" ");t in Ql||(Ql[t]=!0,Wt(...i))}function Id(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Dd={[lo]:co,[ho]:po,[uo]:mo,[Ss]:fo,[co]:lo,[po]:ho,[mo]:uo,[fo]:Ss};class Is{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ea=Math.PI/180,Jo=180/Math.PI;function si(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]+"-"+rn[t&255]+rn[t>>8&255]+"-"+rn[t>>16&15|64]+rn[t>>24&255]+"-"+rn[e&63|128]+rn[e>>8&255]+"-"+rn[e>>16&255]+rn[e>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function ne(i,t,e){return Math.max(t,Math.min(e,i))}function Nd(i,t){return(i%t+t)%t}function Ta(i,t,e){return(1-e)*i+e*t}function Bn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ye(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class st{constructor(t=0,e=0){st.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ds{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(d!==y||l!==u||c!==f||h!==g){let p=l*u+c*f+h*g+d*y;p<0&&(u=-u,f=-f,g=-g,y=-y,p=-p);let m=1-o;if(p<.9995){const v=Math.acos(p),S=Math.sin(v);m=Math.sin(m*v)/S,o=Math.sin(o*v)/S,l=l*m+u*o,c=c*m+f*o,h=h*m+g*o,d=d*m+y*o}else{l=l*m+u*o,c=c*m+f*o,h=h*m+g*o,d=d*m+y*o;const v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Wt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(tc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(tc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return wa.copy(this).projectOnVector(t),this.sub(wa)}reflect(t){return this.sub(wa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wa=new L,tc=new Ds;class Kt{constructor(t,e,n,s,r,a,o,l,c){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],y=s[0],p=s[3],m=s[6],v=s[1],S=s[4],M=s[7],C=s[2],A=s[5],P=s[8];return r[0]=a*y+o*v+l*C,r[3]=a*p+o*S+l*A,r[6]=a*m+o*M+l*P,r[1]=c*y+h*v+d*C,r[4]=c*p+h*S+d*A,r[7]=c*m+h*M+d*P,r[2]=u*y+f*v+g*C,r[5]=u*p+f*S+g*A,r[8]=u*m+f*M+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return t[0]=d*y,t[1]=(s*c-h*n)*y,t[2]=(o*n-s*a)*y,t[3]=u*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=f*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Aa.makeScale(t,e)),this}rotate(t){return this.premultiply(Aa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Aa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Aa=new Kt,ec=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nc=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ud(){const i={enabled:!0,workingColorSpace:Ts,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===me&&(s.r=ri(s.r),s.g=ri(s.g),s.b=ri(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===me&&(s.r=Ms(s.r),s.g=Ms(s.g),s.b=Ms(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===xi?ta:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ia("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ia("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ts]:{primaries:t,whitePoint:n,transfer:ta,toXYZ:ec,fromXYZ:nc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:t,whitePoint:n,transfer:me,toXYZ:ec,fromXYZ:nc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),i}const oe=Ud();function ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ji;class Fd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ji===void 0&&(ji=ea("canvas")),ji.width=t.width,ji.height=t.height;const s=ji.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ji}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ea("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ri(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ri(e[n]/255)*255):e[n]=ri(e[n]);return{data:e,width:t.width,height:t.height}}else return Wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Od=0;class bl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=si(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ca(s[a].image)):r.push(Ca(s[a]))}else r=Ca(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ca(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Wt("Texture: Unable to serialize Texture."),{})}let Bd=0;const Ra=new L;class un extends Is{constructor(t=un.DEFAULT_IMAGE,e=un.DEFAULT_MAPPING,n=ti,s=ti,r=hn,a=Vi,o=Ln,l=vn,c=un.DEFAULT_ANISOTROPY,h=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=si(),this.name="",this.source=new bl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ra).x}get height(){return this.source.getSize(Ra).y}get depth(){return this.source.getSize(Ra).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Wt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case go:t.x=t.x-Math.floor(t.x);break;case ti:t.x=t.x<0?0:1;break;case xo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case go:t.y=t.y-Math.floor(t.y);break;case ti:t.y=t.y<0?0:1;break;case xo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=dh;un.DEFAULT_ANISOTROPY=1;class Ue{constructor(t=0,e=0,n=0,s=1){Ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],y=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,M=(f+1)/2,C=(m+1)/2,A=(h+u)/4,P=(d+y)/4,_=(g+p)/4;return S>M&&S>C?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=A/n,r=P/n):M>C?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=A/s,r=_/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=P/r,s=_/r),this.set(n,s,r,e),this}let v=Math.sqrt((p-g)*(p-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(d-y)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zd extends Is{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ue(0,0,t,e),this.scissorTest=!1,this.viewport=new Ue(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new un(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new bl(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gn extends zd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Mh extends un{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class kd extends un{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ce{constructor(t,e,n,s,r,a,o,l,c,h,d,u,f,g,y,p){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,y,p)}set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,y,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Qi.setFromMatrixColumn(t,0).length(),r=1/Qi.setFromMatrixColumn(t,1).length(),a=1/Qi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,f=a*d,g=o*h,y=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-y*c,e[9]=-o*l,e[2]=y-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,g=c*h,y=c*d;e[0]=u+y*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=y+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,g=c*h,y=c*d;e[0]=u-y*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=y-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,f=a*d,g=o*h,y=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+y,e[1]=l*d,e[5]=y*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=y-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-y*d}else if(t.order==="XZY"){const u=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+y,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=y*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gd,t,Hd)}lookAt(t,e,n){const s=this.elements;return gn.subVectors(t,e),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),hi.crossVectors(n,gn),hi.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),hi.crossVectors(n,gn)),hi.normalize(),mr.crossVectors(gn,hi),s[0]=hi.x,s[4]=mr.x,s[8]=gn.x,s[1]=hi.y,s[5]=mr.y,s[9]=gn.y,s[2]=hi.z,s[6]=mr.z,s[10]=gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],y=n[6],p=n[10],m=n[14],v=n[3],S=n[7],M=n[11],C=n[15],A=s[0],P=s[4],_=s[8],E=s[12],B=s[1],R=s[5],F=s[9],k=s[13],X=s[2],O=s[6],H=s[10],U=s[14],it=s[3],Q=s[7],gt=s[11],_t=s[15];return r[0]=a*A+o*B+l*X+c*it,r[4]=a*P+o*R+l*O+c*Q,r[8]=a*_+o*F+l*H+c*gt,r[12]=a*E+o*k+l*U+c*_t,r[1]=h*A+d*B+u*X+f*it,r[5]=h*P+d*R+u*O+f*Q,r[9]=h*_+d*F+u*H+f*gt,r[13]=h*E+d*k+u*U+f*_t,r[2]=g*A+y*B+p*X+m*it,r[6]=g*P+y*R+p*O+m*Q,r[10]=g*_+y*F+p*H+m*gt,r[14]=g*E+y*k+p*U+m*_t,r[3]=v*A+S*B+M*X+C*it,r[7]=v*P+S*R+M*O+C*Q,r[11]=v*_+S*F+M*H+C*gt,r[15]=v*E+S*k+M*U+C*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],y=t[7],p=t[11],m=t[15],v=l*f-c*u,S=o*f-c*d,M=o*u-l*d,C=a*f-c*h,A=a*u-l*h,P=a*d-o*h;return e*(y*v-p*S+m*M)-n*(g*v-p*C+m*A)+s*(g*S-y*C+m*P)-r*(g*M-y*A+p*P)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],y=t[13],p=t[14],m=t[15],v=e*o-n*a,S=e*l-s*a,M=e*c-r*a,C=n*l-s*o,A=n*c-r*o,P=s*c-r*l,_=h*y-d*g,E=h*p-u*g,B=h*m-f*g,R=d*p-u*y,F=d*m-f*y,k=u*m-f*p,X=v*k-S*F+M*R+C*B-A*E+P*_;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/X;return t[0]=(o*k-l*F+c*R)*O,t[1]=(s*F-n*k-r*R)*O,t[2]=(y*P-p*A+m*C)*O,t[3]=(u*A-d*P-f*C)*O,t[4]=(l*B-a*k-c*E)*O,t[5]=(e*k-s*B+r*E)*O,t[6]=(p*M-g*P-m*S)*O,t[7]=(h*P-u*M+f*S)*O,t[8]=(a*F-o*B+c*_)*O,t[9]=(n*B-e*F-r*_)*O,t[10]=(g*A-y*M+m*v)*O,t[11]=(d*M-h*A-f*v)*O,t[12]=(o*E-a*R-l*_)*O,t[13]=(e*R-n*E+s*_)*O,t[14]=(y*S-g*C-p*v)*O,t[15]=(h*C-d*S+u*v)*O,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,y=a*h,p=a*d,m=o*d,v=l*c,S=l*h,M=l*d,C=n.x,A=n.y,P=n.z;return s[0]=(1-(y+m))*C,s[1]=(f+M)*C,s[2]=(g-S)*C,s[3]=0,s[4]=(f-M)*A,s[5]=(1-(u+m))*A,s[6]=(p+v)*A,s[7]=0,s[8]=(g+S)*P,s[9]=(p-v)*P,s[10]=(1-(u+y))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinant();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Qi.set(s[0],s[1],s[2]).length();const o=Qi.set(s[4],s[5],s[6]).length(),l=Qi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),wn.copy(this);const c=1/a,h=1/o,d=1/l;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=h,wn.elements[5]*=h,wn.elements[6]*=h,wn.elements[8]*=d,wn.elements[9]*=d,wn.elements[10]*=d,e.setFromRotationMatrix(wn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=zn,l=!1){const c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===zn)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===rr)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=zn,l=!1){const c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s);let g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===zn)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===rr)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Qi=new L,wn=new ce,Gd=new L(0,0,0),Hd=new L(1,1,1),hi=new L,mr=new L,gn=new L,ic=new ce,sc=new Ds;class Vn{constructor(t=0,e=0,n=0,s=Vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ne(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ic.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ic,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sc.setFromEuler(this),this.setFromQuaternion(sc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vn.DEFAULT_ORDER="XYZ";class Sh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Vd=0;const rc=new L,ts=new Ds,Zn=new ce,gr=new L,Fs=new L,Wd=new L,Xd=new Ds,ac=new L(1,0,0),oc=new L(0,1,0),lc=new L(0,0,1),cc={type:"added"},qd={type:"removed"},es={type:"childadded",child:null},Pa={type:"childremoved",child:null};class Ge extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ge.DEFAULT_UP.clone();const t=new L,e=new Vn,n=new Ds,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new Kt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=Ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.multiply(ts),this}rotateOnWorldAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.premultiply(ts),this}rotateX(t){return this.rotateOnAxis(ac,t)}rotateY(t){return this.rotateOnAxis(oc,t)}rotateZ(t){return this.rotateOnAxis(lc,t)}translateOnAxis(t,e){return rc.copy(t).applyQuaternion(this.quaternion),this.position.add(rc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ac,t)}translateY(t){return this.translateOnAxis(oc,t)}translateZ(t){return this.translateOnAxis(lc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?gr.copy(t):gr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Fs,gr,this.up):Zn.lookAt(gr,Fs,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),ts.setFromRotationMatrix(Zn),this.quaternion.premultiply(ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ae("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cc),es.child=t,this.dispatchEvent(es),es.child=null):ae("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qd),Pa.child=t,this.dispatchEvent(Pa),Pa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cc),es.child=t,this.dispatchEvent(es),es.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,t,Wd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,Xd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ge.DEFAULT_UP=new L(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ie extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yd={type:"move"};class La{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const y of t.hand.values()){const p=e.getJointPose(y,n),m=this._getHandJoint(c,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const bh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},xr={h:0,s:0,l:0};function Ia(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=Nd(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ia(a,r,t+1/3),this.g=Ia(a,r,t),this.b=Ia(a,r,t-1/3)}return oe.colorSpaceToWorking(this,s),this}setStyle(t,e=cn){function n(r){r!==void 0&&parseFloat(r)<1&&Wt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Wt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=cn){const n=bh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ri(t.r),this.g=ri(t.g),this.b=ri(t.b),this}copyLinearToSRGB(t){return this.r=Ms(t.r),this.g=Ms(t.g),this.b=Ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=cn){return oe.workingToColorSpace(an.copy(this),t),Math.round(ne(an.r*255,0,255))*65536+Math.round(ne(an.g*255,0,255))*256+Math.round(ne(an.b*255,0,255))}getHexString(t=cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(an.copy(this),e);const n=an.r,s=an.g,r=an.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(an.copy(this),e),t.r=an.r,t.g=an.g,t.b=an.b,t}getStyle(t=cn){oe.workingToColorSpace(an.copy(this),t);const e=an.r,n=an.g,s=an.b;return t!==cn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ui),this.setHSL(ui.h+t,ui.s+e,ui.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ui),t.getHSL(xr);const n=Ta(ui.h,xr.h,e),s=Ta(ui.s,xr.s,e),r=Ta(ui.l,xr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new Gt;Gt.NAMES=bh;class El{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=e,this.far=n}clone(){return new El(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Zd extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const An=new L,Kn=new L,Da=new L,$n=new L,ns=new L,is=new L,hc=new L,Na=new L,Ua=new L,Fa=new L,Oa=new Ue,Ba=new Ue,za=new Ue;class En{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),An.subVectors(t,e),s.cross(An);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){An.subVectors(s,e),Kn.subVectors(n,e),Da.subVectors(t,e);const a=An.dot(An),o=An.dot(Kn),l=An.dot(Da),c=Kn.dot(Kn),h=Kn.dot(Da),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$n.x),l.addScaledVector(a,$n.y),l.addScaledVector(o,$n.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Oa.setScalar(0),Ba.setScalar(0),za.setScalar(0),Oa.fromBufferAttribute(t,e),Ba.fromBufferAttribute(t,n),za.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Oa,r.x),a.addScaledVector(Ba,r.y),a.addScaledVector(za,r.z),a}static isFrontFacing(t,e,n,s){return An.subVectors(n,e),Kn.subVectors(t,e),An.cross(Kn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return An.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),An.cross(Kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return En.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return En.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return En.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return En.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return En.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;ns.subVectors(s,n),is.subVectors(r,n),Na.subVectors(t,n);const l=ns.dot(Na),c=is.dot(Na);if(l<=0&&c<=0)return e.copy(n);Ua.subVectors(t,s);const h=ns.dot(Ua),d=is.dot(Ua);if(h>=0&&d<=h)return e.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ns,a);Fa.subVectors(t,r);const f=ns.dot(Fa),g=is.dot(Fa);if(g>=0&&f<=g)return e.copy(r);const y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(is,o);const p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return hc.subVectors(r,s),o=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(hc,o);const m=1/(p+y+u);return a=y*m,o=u*m,e.copy(n).addScaledVector(ns,a).addScaledVector(is,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Zi{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Cn):Cn.fromBufferAttribute(r,a),Cn.applyMatrix4(t.matrixWorld),this.expandByPoint(Cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_r.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_r.copy(n.boundingBox)),_r.applyMatrix4(t.matrixWorld),this.union(_r)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Cn),Cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Os),vr.subVectors(this.max,Os),ss.subVectors(t.a,Os),rs.subVectors(t.b,Os),as.subVectors(t.c,Os),di.subVectors(rs,ss),fi.subVectors(as,rs),wi.subVectors(ss,as);let e=[0,-di.z,di.y,0,-fi.z,fi.y,0,-wi.z,wi.y,di.z,0,-di.x,fi.z,0,-fi.x,wi.z,0,-wi.x,-di.y,di.x,0,-fi.y,fi.x,0,-wi.y,wi.x,0];return!ka(e,ss,rs,as,vr)||(e=[1,0,0,0,1,0,0,0,1],!ka(e,ss,rs,as,vr))?!1:(yr.crossVectors(di,fi),e=[yr.x,yr.y,yr.z],ka(e,ss,rs,as,vr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Jn=[new L,new L,new L,new L,new L,new L,new L,new L],Cn=new L,_r=new Zi,ss=new L,rs=new L,as=new L,di=new L,fi=new L,wi=new L,Os=new L,vr=new L,yr=new L,Ai=new L;function ka(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ai.fromArray(i,r);const o=s.x*Math.abs(Ai.x)+s.y*Math.abs(Ai.y)+s.z*Math.abs(Ai.z),l=t.dot(Ai),c=e.dot(Ai),h=n.dot(Ai);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const ze=new L,Mr=new st;let Kd=0;class Mn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Kd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$o,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Mr.fromBufferAttribute(this,e),Mr.applyMatrix3(t),this.setXY(e,Mr.x,Mr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ye(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),s=ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),s=ye(s,this.array),r=ye(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$o&&(t.usage=this.usage),t}}class Eh extends Mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Th extends Mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class re extends Mn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const $d=new Zi,Bs=new L,Ga=new L;class hr{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):$d.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bs.subVectors(t,this.center);const e=Bs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Bs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ga.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bs.copy(t.center).add(Ga)),this.expandByPoint(Bs.copy(t.center).sub(Ga))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Jd=0;const Sn=new ce,Ha=new Ge,os=new L,xn=new Zi,zs=new Zi,qe=new L;class We extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Pd(t)?Th:Eh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Sn.makeRotationFromQuaternion(t),this.applyMatrix4(Sn),this}rotateX(t){return Sn.makeRotationX(t),this.applyMatrix4(Sn),this}rotateY(t){return Sn.makeRotationY(t),this.applyMatrix4(Sn),this}rotateZ(t){return Sn.makeRotationZ(t),this.applyMatrix4(Sn),this}translate(t,e,n){return Sn.makeTranslation(t,e,n),this.applyMatrix4(Sn),this}scale(t,e,n){return Sn.makeScale(t,e,n),this.applyMatrix4(Sn),this}lookAt(t){return Ha.lookAt(t),Ha.updateMatrix(),this.applyMatrix4(Ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new re(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(xn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];zs.setFromBufferAttribute(o),this.morphTargetsRelative?(qe.addVectors(xn.min,zs.min),xn.expandByPoint(qe),qe.addVectors(xn.max,zs.max),xn.expandByPoint(qe)):(xn.expandByPoint(zs.min),xn.expandByPoint(zs.max))}xn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)qe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(qe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)qe.fromBufferAttribute(o,c),l&&(os.fromBufferAttribute(t,c),qe.add(os)),s=Math.max(s,n.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new L,l[_]=new L;const c=new L,h=new L,d=new L,u=new st,f=new st,g=new st,y=new L,p=new L;function m(_,E,B){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,B),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,B),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(R),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(R),o[_].add(y),o[E].add(y),o[B].add(y),l[_].add(p),l[E].add(p),l[B].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let _=0,E=v.length;_<E;++_){const B=v[_],R=B.start,F=B.count;for(let k=R,X=R+F;k<X;k+=3)m(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const S=new L,M=new L,C=new L,A=new L;function P(_){C.fromBufferAttribute(s,_),A.copy(C);const E=o[_];S.copy(E),S.sub(C.multiplyScalar(C.dot(E))).normalize(),M.crossVectors(A,E);const R=M.dot(l[_])<0?-1:1;a.setXYZW(_,S.x,S.y,S.z,R)}for(let _=0,E=v.length;_<E;++_){const B=v[_],R=B.start,F=B.count;for(let k=R,X=R+F;k<X;k+=3)P(t.getX(k+0)),P(t.getX(k+1)),P(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,d=new L;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),y=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,p),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let m=0;m<h;m++)u[g++]=c[f++]}return new Mn(u,h,d)}if(this.index===null)return Wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new We,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=$o,this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const dn=new L;class sa{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix4(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyNormalMatrix(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.transformDirection(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ye(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Bn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Bn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Bn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Bn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),s=ye(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),s=ye(s,this.array),r=ye(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){na("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Mn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new sa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){na("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Qd=0;class Ns extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=si(),this.name="",this.type="Material",this.blending=ys,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ao,this.blendDst=oo,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$l,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Wt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(n.blending=this.blending),this.side!==Si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ao&&(n.blendSrc=this.blendSrc),this.blendDst!==oo&&(n.blendDst=this.blendDst),this.blendEquation!==Gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ss&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$l&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ra extends Ns{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ls;const ks=new L,cs=new L,hs=new L,us=new st,Gs=new st,wh=new ce,Sr=new L,Hs=new L,br=new L,uc=new st,Va=new st,dc=new st;class jo extends Ge{constructor(t=new ra){if(super(),this.isSprite=!0,this.type="Sprite",ls===void 0){ls=new We;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new jd(e,5);ls.setIndex([0,1,2,0,2,3]),ls.setAttribute("position",new sa(n,3,0,!1)),ls.setAttribute("uv",new sa(n,2,3,!1))}this.geometry=ls,this.material=t,this.center=new st(.5,.5),this.count=1}raycast(t,e){t.camera===null&&ae('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cs.setFromMatrixScale(this.matrixWorld),wh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),hs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cs.multiplyScalar(-hs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Er(Sr.set(-.5,-.5,0),hs,a,cs,s,r),Er(Hs.set(.5,-.5,0),hs,a,cs,s,r),Er(br.set(.5,.5,0),hs,a,cs,s,r),uc.set(0,0),Va.set(1,0),dc.set(1,1);let o=t.ray.intersectTriangle(Sr,Hs,br,!1,ks);if(o===null&&(Er(Hs.set(-.5,.5,0),hs,a,cs,s,r),Va.set(0,1),o=t.ray.intersectTriangle(Sr,br,Hs,!1,ks),o===null))return;const l=t.ray.origin.distanceTo(ks);l<t.near||l>t.far||e.push({distance:l,point:ks.clone(),uv:En.getInterpolation(ks,Sr,Hs,br,uc,Va,dc,new st),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Er(i,t,e,n,s,r){us.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Gs.x=r*us.x-s*us.y,Gs.y=s*us.x+r*us.y):Gs.copy(us),i.copy(t),i.x+=Gs.x,i.y+=Gs.y,i.applyMatrix4(wh)}const jn=new L,Wa=new L,Tr=new L,pi=new L,Xa=new L,wr=new L,qa=new L;class tf{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(jn.copy(this.origin).addScaledVector(this.direction,e),jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Wa.copy(t).add(e).multiplyScalar(.5),Tr.copy(e).sub(t).normalize(),pi.copy(this.origin).sub(Wa);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Tr),o=pi.dot(this.direction),l=-pi.dot(Tr),c=pi.lengthSq(),h=Math.abs(1-a*a);let d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const y=1/h;d*=y,u*=y,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Wa).addScaledVector(Tr,u),f}intersectSphere(t,e){jn.subVectors(t.center,this.origin);const n=jn.dot(this.direction),s=jn.dot(jn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,jn)!==null}intersectTriangle(t,e,n,s,r){Xa.subVectors(e,t),wr.subVectors(n,t),qa.crossVectors(Xa,wr);let a=this.direction.dot(qa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;pi.subVectors(this.origin,t);const l=o*this.direction.dot(wr.crossVectors(pi,wr));if(l<0)return null;const c=o*this.direction.dot(Xa.cross(pi));if(c<0||l+c>a)return null;const h=-o*pi.dot(qa);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Le extends Ns{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fc=new ce,Ci=new tf,Ar=new hr,pc=new L,Cr=new L,Rr=new L,Pr=new L,Ya=new L,Lr=new L,mc=new L,Ir=new L;class zt extends Ge{constructor(t=new We,e=new Le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Lr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(Ya.fromBufferAttribute(d,t),a?Lr.addScaledVector(Ya,h):Lr.addScaledVector(Ya.sub(e),h))}e.add(Lr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(r),Ci.copy(t.ray).recast(t.near),!(Ar.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(Ar,pc)===null||Ci.origin.distanceToSquared(pc)>(t.far-t.near)**2))&&(fc.copy(r).invert(),Ci.copy(t.ray).applyMatrix4(fc),!(n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ci)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){const p=u[g],m=a[p.materialIndex],v=Math.max(p.start,f.start),S=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let M=v,C=S;M<C;M+=3){const A=o.getX(M),P=o.getX(M+1),_=o.getX(M+2);s=Dr(this,m,t,n,c,h,d,A,P,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let p=g,m=y;p<m;p+=3){const v=o.getX(p),S=o.getX(p+1),M=o.getX(p+2);s=Dr(this,a,t,n,c,h,d,v,S,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){const p=u[g],m=a[p.materialIndex],v=Math.max(p.start,f.start),S=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=v,C=S;M<C;M+=3){const A=M,P=M+1,_=M+2;s=Dr(this,m,t,n,c,h,d,A,P,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let p=g,m=y;p<m;p+=3){const v=p,S=p+1,M=p+2;s=Dr(this,a,t,n,c,h,d,v,S,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function ef(i,t,e,n,s,r,a,o){let l;if(t.side===pn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Si,o),l===null)return null;Ir.copy(o),Ir.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ir);return c<e.near||c>e.far?null:{distance:c,point:Ir.clone(),object:i}}function Dr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Cr),i.getVertexPosition(l,Rr),i.getVertexPosition(c,Pr);const h=ef(i,t,e,n,Cr,Rr,Pr,mc);if(h){const d=new L;En.getBarycoord(mc,Cr,Rr,Pr,d),s&&(h.uv=En.getInterpolatedAttribute(s,o,l,c,d,new st)),r&&(h.uv1=En.getInterpolatedAttribute(r,o,l,c,d,new st)),a&&(h.normal=En.getInterpolatedAttribute(a,o,l,c,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new L,materialIndex:0};En.getNormal(Cr,Rr,Pr,u.normal),h.face=u,h.barycoord=d}return h}class Ah extends un{constructor(t=null,e=1,n=1,s,r,a,o,l,c=en,h=en,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gc extends Mn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ds=new ce,xc=new ce,Nr=[],_c=new Zi,nf=new ce,Vs=new zt,Ws=new hr;class Qo extends zt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new gc(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,nf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Zi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ds),_c.copy(t.boundingBox).applyMatrix4(ds),this.boundingBox.union(_c)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new hr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ds),Ws.copy(t.boundingSphere).applyMatrix4(ds),this.boundingSphere.union(Ws)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Vs.geometry=this.geometry,Vs.material=this.material,Vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ws.copy(this.boundingSphere),Ws.applyMatrix4(n),t.ray.intersectsSphere(Ws)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ds),xc.multiplyMatrices(n,ds),Vs.matrixWorld=xc,Vs.raycast(t,Nr);for(let a=0,o=Nr.length;a<o;a++){const l=Nr[a];l.instanceId=r,l.object=this,e.push(l)}Nr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new gc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ah(new Float32Array(s*this.count),s,this.count,xl,Pn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Za=new L,sf=new L,rf=new Kt;class Bi{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Za.subVectors(n,e).cross(sf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Za),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||rf.getNormalMatrix(t),s=this.coplanarPoint(Za).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new hr,af=new st(.5,.5),Ur=new L;class Tl{constructor(t=new Bi,e=new Bi,n=new Bi,s=new Bi,r=new Bi,a=new Bi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],y=r[9],p=r[10],m=r[11],v=r[12],S=r[13],M=r[14],C=r[15];if(s[0].setComponents(c-a,f-h,m-g,C-v).normalize(),s[1].setComponents(c+a,f+h,m+g,C+v).normalize(),s[2].setComponents(c+o,f+d,m+y,C+S).normalize(),s[3].setComponents(c-o,f-d,m-y,C-S).normalize(),n)s[4].setComponents(l,u,p,M).normalize(),s[5].setComponents(c-l,f-u,m-p,C-M).normalize();else if(s[4].setComponents(c-l,f-u,m-p,C-M).normalize(),e===zn)s[5].setComponents(c+l,f+u,m+p,C+M).normalize();else if(e===rr)s[5].setComponents(l,u,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(t){Ri.center.set(0,0,0);const e=af.distanceTo(t.center);return Ri.radius=.7071067811865476+e,Ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ur.x=s.normal.x>0?t.max.x:t.min.x,Ur.y=s.normal.y>0?t.max.y:t.min.y,Ur.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ur)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ch extends un{constructor(t=[],e=qi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class wl extends un{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ar extends un{constructor(t,e,n=Hn,s,r,a,o=en,l=en,c,h=oi,d=1){if(h!==oi&&h!==Wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new bl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class of extends ar{constructor(t,e=Hn,n=qi,s,r,a=en,o=en,l,c=oi){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Rh extends un{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Se extends We{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(d,2));function g(y,p,m,v,S,M,C,A,P,_,E){const B=M/P,R=C/_,F=M/2,k=C/2,X=A/2,O=P+1,H=_+1;let U=0,it=0;const Q=new L;for(let gt=0;gt<H;gt++){const _t=gt*R-k;for(let xt=0;xt<O;xt++){const Ht=xt*B-F;Q[y]=Ht*v,Q[p]=_t*S,Q[m]=X,c.push(Q.x,Q.y,Q.z),Q[y]=0,Q[p]=0,Q[m]=A>0?1:-1,h.push(Q.x,Q.y,Q.z),d.push(xt/P),d.push(1-gt/_),U+=1}}for(let gt=0;gt<_;gt++)for(let _t=0;_t<P;_t++){const xt=u+_t+O*gt,Ht=u+_t+O*(gt+1),de=u+(_t+1)+O*(gt+1),ge=u+(_t+1)+O*gt;l.push(xt,Ht,ge),l.push(Ht,de,ge),it+=6}o.addGroup(f,it,E),f+=it,u+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Se(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Qn extends We{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new L,h=new st;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(o,3)),this.setAttribute("uv",new re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class tn extends We{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const y=[],p=n/2;let m=0;v(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new re(d,3)),this.setAttribute("normal",new re(u,3)),this.setAttribute("uv",new re(f,2));function v(){const M=new L,C=new L;let A=0;const P=(e-t)/n;for(let _=0;_<=r;_++){const E=[],B=_/r,R=B*(e-t)+t;for(let F=0;F<=s;F++){const k=F/s,X=k*l+o,O=Math.sin(X),H=Math.cos(X);C.x=R*O,C.y=-B*n+p,C.z=R*H,d.push(C.x,C.y,C.z),M.set(O,P,H).normalize(),u.push(M.x,M.y,M.z),f.push(k,1-B),E.push(g++)}y.push(E)}for(let _=0;_<s;_++)for(let E=0;E<r;E++){const B=y[E][_],R=y[E+1][_],F=y[E+1][_+1],k=y[E][_+1];(t>0||E!==0)&&(h.push(B,R,k),A+=3),(e>0||E!==r-1)&&(h.push(R,F,k),A+=3)}c.addGroup(m,A,0),m+=A}function S(M){const C=g,A=new st,P=new L;let _=0;const E=M===!0?t:e,B=M===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,p*B,0),u.push(0,B,0),f.push(.5,.5),g++;const R=g;for(let F=0;F<=s;F++){const X=F/s*l+o,O=Math.cos(X),H=Math.sin(X);P.x=E*H,P.y=p*B,P.z=E*O,d.push(P.x,P.y,P.z),u.push(0,B,0),A.x=O*.5+.5,A.y=H*.5*B+.5,f.push(A.x,A.y),g++}for(let F=0;F<s;F++){const k=C+F,X=R+F;M===!0?h.push(X,X+1,k):h.push(X+1,X,k),_+=3}c.addGroup(m,_,M===!0?1:2),m+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class In extends tn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new In(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class pa extends We{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(r.slice(),3)),this.setAttribute("uv",new re(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const S=new L,M=new L,C=new L;for(let A=0;A<e.length;A+=3)f(e[A+0],S),f(e[A+1],M),f(e[A+2],C),l(S,M,C,v)}function l(v,S,M,C){const A=C+1,P=[];for(let _=0;_<=A;_++){P[_]=[];const E=v.clone().lerp(M,_/A),B=S.clone().lerp(M,_/A),R=A-_;for(let F=0;F<=R;F++)F===0&&_===A?P[_][F]=E:P[_][F]=E.clone().lerp(B,F/R)}for(let _=0;_<A;_++)for(let E=0;E<2*(A-_)-1;E++){const B=Math.floor(E/2);E%2===0?(u(P[_][B+1]),u(P[_+1][B]),u(P[_][B])):(u(P[_][B+1]),u(P[_+1][B+1]),u(P[_+1][B]))}}function c(v){const S=new L;for(let M=0;M<r.length;M+=3)S.x=r[M+0],S.y=r[M+1],S.z=r[M+2],S.normalize().multiplyScalar(v),r[M+0]=S.x,r[M+1]=S.y,r[M+2]=S.z}function h(){const v=new L;for(let S=0;S<r.length;S+=3){v.x=r[S+0],v.y=r[S+1],v.z=r[S+2];const M=p(v)/2/Math.PI+.5,C=m(v)/Math.PI+.5;a.push(M,1-C)}g(),d()}function d(){for(let v=0;v<a.length;v+=6){const S=a[v+0],M=a[v+2],C=a[v+4],A=Math.max(S,M,C),P=Math.min(S,M,C);A>.9&&P<.1&&(S<.2&&(a[v+0]+=1),M<.2&&(a[v+2]+=1),C<.2&&(a[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function f(v,S){const M=v*3;S.x=t[M+0],S.y=t[M+1],S.z=t[M+2]}function g(){const v=new L,S=new L,M=new L,C=new L,A=new st,P=new st,_=new st;for(let E=0,B=0;E<r.length;E+=9,B+=6){v.set(r[E+0],r[E+1],r[E+2]),S.set(r[E+3],r[E+4],r[E+5]),M.set(r[E+6],r[E+7],r[E+8]),A.set(a[B+0],a[B+1]),P.set(a[B+2],a[B+3]),_.set(a[B+4],a[B+5]),C.copy(v).add(S).add(M).divideScalar(3);const R=p(C);y(A,B+0,v,R),y(P,B+2,S,R),y(_,B+4,M,R)}}function y(v,S,M,C){C<0&&v.x===1&&(a[S]=v.x-1),M.x===0&&M.z===0&&(a[S]=C/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pa(t.vertices,t.indices,t.radius,t.detail)}}class Al extends pa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Al(t.radius,t.detail)}}class Xn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Wt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new st:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new L,s=[],r=[],a=[],o=new L,l=new ce;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(ne(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(ne(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Cl extends Xn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new st){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class lf extends Cl{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Rl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Fr=new L,Ka=new Rl,$a=new Rl,Ja=new Rl;class cf extends Xn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Fr.subVectors(s[0],s[1]).add(s[0]),c=Fr);const d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Fr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Fr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),Ka.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,y,p),$a.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,y,p),Ja.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,y,p)}else this.curveType==="catmullrom"&&(Ka.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),$a.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Ja.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Ka.calc(l),$a.calc(l),Ja.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function vc(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function hf(i,t){const e=1-i;return e*e*t}function uf(i,t){return 2*(1-i)*i*t}function df(i,t){return i*i*t}function er(i,t,e,n){return hf(i,t)+uf(i,e)+df(i,n)}function ff(i,t){const e=1-i;return e*e*e*t}function pf(i,t){const e=1-i;return 3*e*e*i*t}function mf(i,t){return 3*(1-i)*i*i*t}function gf(i,t){return i*i*i*t}function nr(i,t,e,n,s){return ff(i,t)+pf(i,e)+mf(i,n)+gf(i,s)}class Ph extends Xn{constructor(t=new st,e=new st,n=new st,s=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new st){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(nr(t,s.x,r.x,a.x,o.x),nr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class xf extends Xn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(nr(t,s.x,r.x,a.x,o.x),nr(t,s.y,r.y,a.y,o.y),nr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Lh extends Xn{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _f extends Xn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ih extends Xn{constructor(t=new st,e=new st,n=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new st){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(er(t,s.x,r.x,a.x),er(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vf extends Xn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(er(t,s.x,r.x,a.x),er(t,s.y,r.y,a.y),er(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dh extends Xn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(vc(o,l.x,c.x,h.x,d.x),vc(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new st().fromArray(s))}return this}}var tl=Object.freeze({__proto__:null,ArcCurve:lf,CatmullRomCurve3:cf,CubicBezierCurve:Ph,CubicBezierCurve3:xf,EllipseCurve:Cl,LineCurve:Lh,LineCurve3:_f,QuadraticBezierCurve:Ih,QuadraticBezierCurve3:vf,SplineCurve:Dh});class yf extends Xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new tl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new tl[s.type]().fromJSON(s))}return this}}class yc extends yf{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Lh(this.currentPoint.clone(),new st(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Ih(this.currentPoint.clone(),new st(t,e),new st(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new Ph(this.currentPoint.clone(),new st(t,e),new st(n,s),new st(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Dh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new Cl(t,e,n,s,r,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class aa extends yc{constructor(t){super(t),this.uuid=si(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new yc().fromJSON(s))}return this}}function Mf(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Nh(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=wf(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,d=l;for(let u=e;u<s;u+=e){const f=i[u],g=i[u+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return or(r,a,e,o,l,c,0),a}function Nh(i,t,e,n,s){let r;if(s===Of(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Mc(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Mc(a/n|0,i[a],i[a+1],r);return r&&ws(r,r.next)&&(cr(r),r=r.next),r}function Yi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ws(e,e.next)||Ie(e.prev,e,e.next)===0)){if(cr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function or(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Lf(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?bf(i,n,s,r):Sf(i)){t.push(l.i,i.i,c.i),cr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Ef(Yi(i),t),or(i,t,e,n,s,r,2)):a===2&&Tf(i,t,e,n,s,r):or(Yi(i),t,e,n,s,r,1);break}}}function Sf(i){const t=i.prev,e=i,n=i.next;if(Ie(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&$s(s,o,r,l,a,c,g.x,g.y)&&Ie(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function bf(i,t,e,n){const s=i.prev,r=i,a=i.next;if(Ie(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),g=Math.min(h,d,u),y=Math.max(o,l,c),p=Math.max(h,d,u),m=el(f,g,t,e,n),v=el(y,p,t,e,n);let S=i.prevZ,M=i.nextZ;for(;S&&S.z>=m&&M&&M.z<=v;){if(S.x>=f&&S.x<=y&&S.y>=g&&S.y<=p&&S!==s&&S!==a&&$s(o,h,l,d,c,u,S.x,S.y)&&Ie(S.prev,S,S.next)>=0||(S=S.prevZ,M.x>=f&&M.x<=y&&M.y>=g&&M.y<=p&&M!==s&&M!==a&&$s(o,h,l,d,c,u,M.x,M.y)&&Ie(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;S&&S.z>=m;){if(S.x>=f&&S.x<=y&&S.y>=g&&S.y<=p&&S!==s&&S!==a&&$s(o,h,l,d,c,u,S.x,S.y)&&Ie(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;M&&M.z<=v;){if(M.x>=f&&M.x<=y&&M.y>=g&&M.y<=p&&M!==s&&M!==a&&$s(o,h,l,d,c,u,M.x,M.y)&&Ie(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Ef(i,t){let e=i;do{const n=e.prev,s=e.next.next;!ws(n,s)&&Fh(n,e,e.next,s)&&lr(n,s)&&lr(s,n)&&(t.push(n.i,e.i,s.i),cr(e),cr(e.next),e=i=s),e=e.next}while(e!==i);return Yi(e)}function Tf(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Nf(a,o)){let l=Oh(a,o);a=Yi(a,a.next),l=Yi(l,l.next),or(a,t,e,n,s,r,0),or(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function wf(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Nh(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Df(c))}s.sort(Af);for(let r=0;r<s.length;r++)e=Cf(s[r],e);return e}function Af(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Cf(i,t){const e=Rf(i,t);if(!e)return t;const n=Oh(e,i);return Yi(n,n.next),Yi(e,e.next)}function Rf(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(ws(i,e))return e;do{if(ws(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Uh(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const d=Math.abs(s-e.y)/(n-e.x);lr(e,i)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&Pf(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function Pf(i,t){return Ie(i.prev,i,t.prev)<0&&Ie(t.next,i,i.next)<0}function Lf(i,t,e,n){let s=i;do s.z===0&&(s.z=el(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,If(s)}function If(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function el(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Df(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Uh(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function $s(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Uh(i,t,e,n,s,r,a,o)}function Nf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Uf(i,t)&&(lr(i,t)&&lr(t,i)&&Ff(i,t)&&(Ie(i.prev,i,t.prev)||Ie(i,t.prev,t))||ws(i,t)&&Ie(i.prev,i,i.next)>0&&Ie(t.prev,t,t.next)>0)}function Ie(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ws(i,t){return i.x===t.x&&i.y===t.y}function Fh(i,t,e,n){const s=Br(Ie(i,t,e)),r=Br(Ie(i,t,n)),a=Br(Ie(e,n,i)),o=Br(Ie(e,n,t));return!!(s!==r&&a!==o||s===0&&Or(i,e,t)||r===0&&Or(i,n,t)||a===0&&Or(e,i,n)||o===0&&Or(e,t,n))}function Or(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Br(i){return i>0?1:i<0?-1:0}function Uf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Fh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function lr(i,t){return Ie(i.prev,i,i.next)<0?Ie(i,t,i.next)>=0&&Ie(i,i.prev,t)>=0:Ie(i,t,i.prev)<0||Ie(i,i.next,t)<0}function Ff(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Oh(i,t){const e=nl(i.i,i.x,i.y),n=nl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Mc(i,t,e,n){const s=nl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function cr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function nl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Of(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Bf{static triangulate(t,e,n=2){return Mf(t,e,n)}}class ei{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return ei.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Sc(t),bc(n,t);let a=t.length;e.forEach(Sc);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,bc(n,e[l]);const o=Bf.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Sc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function bc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Pl extends We{constructor(t=new aa([new st(.5,.5),new st(-.5,.5),new st(-.5,-.5),new st(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new re(s,3)),this.setAttribute("uv",new re(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:zf;let S,M=!1,C,A,P,_;if(m){S=m.getSpacedPoints(h),M=!0,u=!1;const J=m.isCatmullRomCurve3?m.closed:!1;C=m.computeFrenetFrames(h,J),A=new L,P=new L,_=new L}u||(p=0,f=0,g=0,y=0);const E=o.extractPoints(c);let B=E.shape;const R=E.holes;if(!ei.isClockWise(B)){B=B.reverse();for(let J=0,et=R.length;J<et;J++){const j=R[J];ei.isClockWise(j)&&(R[J]=j.reverse())}}function k(J){const j=10000000000000001e-36;let dt=J[0];for(let w=1;w<=J.length;w++){const Ut=w%J.length,vt=J[Ut],Ot=vt.x-dt.x,ct=vt.y-dt.y,T=Ot*Ot+ct*ct,x=Math.max(Math.abs(vt.x),Math.abs(vt.y),Math.abs(dt.x),Math.abs(dt.y)),D=j*x*x;if(T<=D){J.splice(Ut,1),w--;continue}dt=vt}}k(B),R.forEach(k);const X=R.length,O=B;for(let J=0;J<X;J++){const et=R[J];B=B.concat(et)}function H(J,et,j){return et||ae("ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(et,j)}const U=B.length;function it(J,et,j){let dt,w,Ut;const vt=J.x-et.x,Ot=J.y-et.y,ct=j.x-J.x,T=j.y-J.y,x=vt*vt+Ot*Ot,D=vt*T-Ot*ct;if(Math.abs(D)>Number.EPSILON){const q=Math.sqrt(x),$=Math.sqrt(ct*ct+T*T),Y=et.x-Ot/q,bt=et.y+vt/q,ht=j.x-T/$,It=j.y+ct/$,Bt=((ht-Y)*T-(It-bt)*ct)/(vt*T-Ot*ct);dt=Y+vt*Bt-J.x,w=bt+Ot*Bt-J.y;const tt=dt*dt+w*w;if(tt<=2)return new st(dt,w);Ut=Math.sqrt(tt/2)}else{let q=!1;vt>Number.EPSILON?ct>Number.EPSILON&&(q=!0):vt<-Number.EPSILON?ct<-Number.EPSILON&&(q=!0):Math.sign(Ot)===Math.sign(T)&&(q=!0),q?(dt=-Ot,w=vt,Ut=Math.sqrt(x)):(dt=vt,w=Ot,Ut=Math.sqrt(x/2))}return new st(dt/Ut,w/Ut)}const Q=[];for(let J=0,et=O.length,j=et-1,dt=J+1;J<et;J++,j++,dt++)j===et&&(j=0),dt===et&&(dt=0),Q[J]=it(O[J],O[j],O[dt]);const gt=[];let _t,xt=Q.concat();for(let J=0,et=X;J<et;J++){const j=R[J];_t=[];for(let dt=0,w=j.length,Ut=w-1,vt=dt+1;dt<w;dt++,Ut++,vt++)Ut===w&&(Ut=0),vt===w&&(vt=0),_t[dt]=it(j[dt],j[Ut],j[vt]);gt.push(_t),xt=xt.concat(_t)}let Ht;if(p===0)Ht=ei.triangulateShape(O,R);else{const J=[],et=[];for(let j=0;j<p;j++){const dt=j/p,w=f*Math.cos(dt*Math.PI/2),Ut=g*Math.sin(dt*Math.PI/2)+y;for(let vt=0,Ot=O.length;vt<Ot;vt++){const ct=H(O[vt],Q[vt],Ut);Ft(ct.x,ct.y,-w),dt===0&&J.push(ct)}for(let vt=0,Ot=X;vt<Ot;vt++){const ct=R[vt];_t=gt[vt];const T=[];for(let x=0,D=ct.length;x<D;x++){const q=H(ct[x],_t[x],Ut);Ft(q.x,q.y,-w),dt===0&&T.push(q)}dt===0&&et.push(T)}}Ht=ei.triangulateShape(J,et)}const de=Ht.length,ge=g+y;for(let J=0;J<U;J++){const et=u?H(B[J],xt[J],ge):B[J];M?(P.copy(C.normals[0]).multiplyScalar(et.x),A.copy(C.binormals[0]).multiplyScalar(et.y),_.copy(S[0]).add(P).add(A),Ft(_.x,_.y,_.z)):Ft(et.x,et.y,0)}for(let J=1;J<=h;J++)for(let et=0;et<U;et++){const j=u?H(B[et],xt[et],ge):B[et];M?(P.copy(C.normals[J]).multiplyScalar(j.x),A.copy(C.binormals[J]).multiplyScalar(j.y),_.copy(S[J]).add(P).add(A),Ft(_.x,_.y,_.z)):Ft(j.x,j.y,d/h*J)}for(let J=p-1;J>=0;J--){const et=J/p,j=f*Math.cos(et*Math.PI/2),dt=g*Math.sin(et*Math.PI/2)+y;for(let w=0,Ut=O.length;w<Ut;w++){const vt=H(O[w],Q[w],dt);Ft(vt.x,vt.y,d+j)}for(let w=0,Ut=R.length;w<Ut;w++){const vt=R[w];_t=gt[w];for(let Ot=0,ct=vt.length;Ot<ct;Ot++){const T=H(vt[Ot],_t[Ot],dt);M?Ft(T.x,T.y+S[h-1].y,S[h-1].x+j):Ft(T.x,T.y,d+j)}}}K(),ot();function K(){const J=s.length/3;if(u){let et=0,j=U*et;for(let dt=0;dt<de;dt++){const w=Ht[dt];Nt(w[2]+j,w[1]+j,w[0]+j)}et=h+p*2,j=U*et;for(let dt=0;dt<de;dt++){const w=Ht[dt];Nt(w[0]+j,w[1]+j,w[2]+j)}}else{for(let et=0;et<de;et++){const j=Ht[et];Nt(j[2],j[1],j[0])}for(let et=0;et<de;et++){const j=Ht[et];Nt(j[0]+U*h,j[1]+U*h,j[2]+U*h)}}n.addGroup(J,s.length/3-J,0)}function ot(){const J=s.length/3;let et=0;lt(O,et),et+=O.length;for(let j=0,dt=R.length;j<dt;j++){const w=R[j];lt(w,et),et+=w.length}n.addGroup(J,s.length/3-J,1)}function lt(J,et){let j=J.length;for(;--j>=0;){const dt=j;let w=j-1;w<0&&(w=J.length-1);for(let Ut=0,vt=h+p*2;Ut<vt;Ut++){const Ot=U*Ut,ct=U*(Ut+1),T=et+dt+Ot,x=et+w+Ot,D=et+w+ct,q=et+dt+ct;Vt(T,x,D,q)}}}function Ft(J,et,j){l.push(J),l.push(et),l.push(j)}function Nt(J,et,j){xe(J),xe(et),xe(j);const dt=s.length/3,w=v.generateTopUV(n,s,dt-3,dt-2,dt-1);qt(w[0]),qt(w[1]),qt(w[2])}function Vt(J,et,j,dt){xe(J),xe(et),xe(dt),xe(et),xe(j),xe(dt);const w=s.length/3,Ut=v.generateSideWallUV(n,s,w-6,w-3,w-2,w-1);qt(Ut[0]),qt(Ut[1]),qt(Ut[3]),qt(Ut[1]),qt(Ut[2]),qt(Ut[3])}function xe(J){s.push(l[J*3+0]),s.push(l[J*3+1]),s.push(l[J*3+2])}function qt(J){r.push(J.x),r.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return kf(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new tl[s.type]().fromJSON(s)),new Pl(n,t.options)}}const zf={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new st(r,a),new st(o,l),new st(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],g=t[s*3+2],y=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new st(a,1-l),new st(c,1-d),new st(u,1-g),new st(y,1-m)]:[new st(o,1-l),new st(h,1-d),new st(f,1-g),new st(p,1-m)]}};function kf(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class vs extends pa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new vs(t.radius,t.detail)}}class yi extends We{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],y=[],p=[];for(let m=0;m<h;m++){const v=m*u-a;for(let S=0;S<c;S++){const M=S*d-r;g.push(M,-v,0),y.push(0,0,1),p.push(S/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){const S=v+c*m,M=v+c*(m+1),C=v+1+c*(m+1),A=v+1+c*m;f.push(S,M,A),f.push(M,C,A)}this.setIndex(f),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(y,3)),this.setAttribute("uv",new re(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yi(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ll extends We{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let d=t;const u=(e-t)/s,f=new L,g=new st;for(let y=0;y<=s;y++){for(let p=0;p<=n;p++){const m=r+p/n*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let y=0;y<s;y++){const p=y*(n+1);for(let m=0;m<n;m++){const v=m+p,S=v,M=v+n+1,C=v+n+2,A=v+1;o.push(S,M,A),o.push(M,C,A)}}this.setIndex(o),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(c,3)),this.setAttribute("uv",new re(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ll(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Il extends We{constructor(t=new aa([new st(0,.5),new st(-.5,-.5),new st(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new re(s,3)),this.setAttribute("normal",new re(r,3)),this.setAttribute("uv",new re(a,2));function c(h){const d=s.length/3,u=h.extractPoints(e);let f=u.shape;const g=u.holes;ei.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){const v=g[p];ei.isClockWise(v)===!0&&(g[p]=v.reverse())}const y=ei.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){const v=g[p];f=f.concat(v)}for(let p=0,m=f.length;p<m;p++){const v=f[p];s.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let p=0,m=y.length;p<m;p++){const v=y[p],S=v[0]+d,M=v[1]+d,C=v[2]+d;n.push(S,M,C),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Gf(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];n.push(a)}return new Il(n,t.curveSegments)}}function Gf(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class se extends We{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new L,u=new L,f=[],g=[],y=[],p=[];for(let m=0;m<=n;m++){const v=[],S=m/n;let M=0;m===0&&a===0?M=.5/e:m===n&&l===Math.PI&&(M=-.5/e);for(let C=0;C<=e;C++){const A=C/e;d.x=-t*Math.cos(s+A*r)*Math.sin(a+S*o),d.y=t*Math.cos(a+S*o),d.z=t*Math.sin(s+A*r)*Math.sin(a+S*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),p.push(A+M,1-S),v.push(c++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<e;v++){const S=h[m][v+1],M=h[m][v],C=h[m+1][v],A=h[m+1][v+1];(m!==0||a>0)&&f.push(S,M,A),(m!==n-1||l<Math.PI)&&f.push(M,C,A)}this.setIndex(f),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(y,3)),this.setAttribute("uv",new re(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new se(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ma extends We{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],h=[],d=[],u=new L,f=new L,g=new L;for(let y=0;y<=n;y++){const p=a+y/n*o;for(let m=0;m<=s;m++){const v=m/s*r;f.x=(t+e*Math.cos(p))*Math.cos(v),f.y=(t+e*Math.cos(p))*Math.sin(v),f.z=e*Math.sin(p),c.push(f.x,f.y,f.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(m/s),d.push(y/n)}}for(let y=1;y<=n;y++)for(let p=1;p<=s;p++){const m=(s+1)*y+p-1,v=(s+1)*(y-1)+p-1,S=(s+1)*(y-1)+p,M=(s+1)*y+p;l.push(m,v,M),l.push(v,S,M)}this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ma(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function As(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function fn(i){const t={};for(let e=0;e<i.length;e++){const n=As(i[e]);for(const s in n)t[s]=n[s]}return t}function Hf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Bh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const Vf={clone:As,merge:fn};var Wf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends Ns{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wf,this.fragmentShader=Xf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=As(t.uniforms),this.uniformsGroups=Hf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class qf extends Wn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Tt extends Ns{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vh,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=dl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Yf extends Ns{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Zf extends Ns{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ga extends Ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Kf extends ga{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const ja=new ce,Ec=new L,Tc=new L;class zh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tl,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ec.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ec),Tc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Tc),e.updateMatrixWorld(),ja.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ja,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===rr||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ja)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const zr=new L,kr=new Ds,Nn=new L;class kh extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(zr,kr,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zr,kr,Nn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(zr,kr,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zr,kr,Nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const mi=new L,wc=new st,Ac=new st;class _n extends kh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Jo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ea*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jo*2*Math.atan(Math.tan(Ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(mi.x,mi.y).multiplyScalar(-t/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-t/mi.z)}getViewSize(t,e){return this.getViewBounds(t,wc,Ac),e.subVectors(Ac,wc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ea*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class $f extends zh{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0}}class Jf extends ga{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new $f}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Dl extends kh{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class jf extends zh{constructor(){super(new Dl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qf extends ga{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.shadow=new jf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class tp extends ga{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const fs=-90,ps=1;class ep extends Ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new _n(fs,ps,t,e);s.layers=this.layers,this.add(s);const r=new _n(fs,ps,t,e);r.layers=this.layers,this.add(r);const a=new _n(fs,ps,t,e);a.layers=this.layers,this.add(a);const o=new _n(fs,ps,t,e);o.layers=this.layers,this.add(o);const l=new _n(fs,ps,t,e);l.layers=this.layers,this.add(l);const c=new _n(fs,ps,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===rr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class np extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class ip{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=sp.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function sp(){this._document.hidden===!1&&this.reset()}function Cc(i,t,e,n){const s=rp(n);switch(e){case xh:return i*t;case xl:return i*t/s.components*s.byteLength;case _l:return i*t/s.components*s.byteLength;case Es:return i*t*2/s.components*s.byteLength;case vl:return i*t*2/s.components*s.byteLength;case _h:return i*t*3/s.components*s.byteLength;case Ln:return i*t*4/s.components*s.byteLength;case yl:return i*t*4/s.components*s.byteLength;case Xr:case qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Yr:case Zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vo:case Mo:return Math.max(i,16)*Math.max(t,8)/4;case _o:case yo:return Math.max(i,8)*Math.max(t,8)/2;case So:case bo:case To:case wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Eo:case Ao:case Co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Po:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Lo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Io:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Do:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case No:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Fo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case zo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ko:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Go:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ho:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Vo:case Wo:case Xo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case qo:case Yo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Zo:case Ko:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function rp(i){switch(i){case vn:case fh:return{byteLength:1,components:1};case ir:case ph:case ai:return{byteLength:2,components:1};case ml:case gl:return{byteLength:2,components:4};case Hn:case pl:case Pn:return{byteLength:4,components:1};case mh:case gh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ul}}));typeof window<"u"&&(window.__THREE__?Wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ul);function Gh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ap(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const y=d[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var op=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lp=`#ifdef USE_ALPHAHASH
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
#endif`,cp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,up=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fp=`#ifdef USE_AOMAP
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
#endif`,pp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mp=`#ifdef USE_BATCHING
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
#endif`,gp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_p=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yp=`#ifdef USE_IRIDESCENCE
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
#endif`,Mp=`#ifdef USE_BUMPMAP
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
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Cp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Rp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Pp=`#define PI 3.141592653589793
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
} // validated`,Lp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ip=`vec3 transformedNormal = objectNormal;
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
#endif`,Dp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Up=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Op="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zp=`#ifdef USE_ENVMAP
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
#endif`,kp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Gp=`#ifdef USE_ENVMAP
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
#endif`,Hp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Wp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zp=`#ifdef USE_GRADIENTMAP
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
}`,Kp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$p=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jp=`uniform bool receiveShadow;
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
#endif`,Qp=`#ifdef USE_ENVMAP
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
#endif`,tm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sm=`PhysicalMaterial material;
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
#endif`,rm=`uniform sampler2D dfgLUT;
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
}`,am=`
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
#endif`,om=`#if defined( RE_IndirectDiffuse )
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
#endif`,lm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,um=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gm=`#if defined( USE_POINTS_UV )
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
#endif`,xm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_m=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ym=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sm=`#ifdef USE_MORPHTARGETS
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
#endif`,bm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Em=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rm=`#ifdef USE_NORMALMAP
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
#endif`,Pm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Im=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Um=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Om=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,km=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xm=`float getShadowMask() {
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
}`,qm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ym=`#ifdef USE_SKINNING
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
#endif`,Zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Km=`#ifdef USE_SKINNING
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
#endif`,$m=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,t0=`#ifdef USE_TRANSMISSION
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
#endif`,e0=`#ifdef USE_TRANSMISSION
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
#endif`,n0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const a0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,o0=`uniform sampler2D t2D;
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
}`,l0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d0=`#include <common>
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
}`,f0=`#if DEPTH_PACKING == 3200
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
}`,p0=`#define DISTANCE
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
}`,m0=`#define DISTANCE
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
}`,g0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,x0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_0=`uniform float scale;
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
}`,v0=`uniform vec3 diffuse;
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
}`,y0=`#include <common>
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
}`,M0=`uniform vec3 diffuse;
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
}`,S0=`#define LAMBERT
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
}`,b0=`#define LAMBERT
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
}`,E0=`#define MATCAP
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
}`,T0=`#define MATCAP
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
}`,w0=`#define NORMAL
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
}`,A0=`#define NORMAL
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
}`,C0=`#define PHONG
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
}`,R0=`#define PHONG
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
}`,P0=`#define STANDARD
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
}`,L0=`#define STANDARD
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
}`,I0=`#define TOON
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
}`,D0=`#define TOON
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
}`,N0=`uniform float size;
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
}`,U0=`uniform vec3 diffuse;
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
}`,F0=`#include <common>
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
}`,O0=`uniform vec3 color;
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
}`,B0=`uniform float rotation;
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
}`,z0=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:op,alphahash_pars_fragment:lp,alphamap_fragment:cp,alphamap_pars_fragment:hp,alphatest_fragment:up,alphatest_pars_fragment:dp,aomap_fragment:fp,aomap_pars_fragment:pp,batching_pars_vertex:mp,batching_vertex:gp,begin_vertex:xp,beginnormal_vertex:_p,bsdfs:vp,iridescence_fragment:yp,bumpmap_pars_fragment:Mp,clipping_planes_fragment:Sp,clipping_planes_pars_fragment:bp,clipping_planes_pars_vertex:Ep,clipping_planes_vertex:Tp,color_fragment:wp,color_pars_fragment:Ap,color_pars_vertex:Cp,color_vertex:Rp,common:Pp,cube_uv_reflection_fragment:Lp,defaultnormal_vertex:Ip,displacementmap_pars_vertex:Dp,displacementmap_vertex:Np,emissivemap_fragment:Up,emissivemap_pars_fragment:Fp,colorspace_fragment:Op,colorspace_pars_fragment:Bp,envmap_fragment:zp,envmap_common_pars_fragment:kp,envmap_pars_fragment:Gp,envmap_pars_vertex:Hp,envmap_physical_pars_fragment:Qp,envmap_vertex:Vp,fog_vertex:Wp,fog_pars_vertex:Xp,fog_fragment:qp,fog_pars_fragment:Yp,gradientmap_pars_fragment:Zp,lightmap_pars_fragment:Kp,lights_lambert_fragment:$p,lights_lambert_pars_fragment:Jp,lights_pars_begin:jp,lights_toon_fragment:tm,lights_toon_pars_fragment:em,lights_phong_fragment:nm,lights_phong_pars_fragment:im,lights_physical_fragment:sm,lights_physical_pars_fragment:rm,lights_fragment_begin:am,lights_fragment_maps:om,lights_fragment_end:lm,logdepthbuf_fragment:cm,logdepthbuf_pars_fragment:hm,logdepthbuf_pars_vertex:um,logdepthbuf_vertex:dm,map_fragment:fm,map_pars_fragment:pm,map_particle_fragment:mm,map_particle_pars_fragment:gm,metalnessmap_fragment:xm,metalnessmap_pars_fragment:_m,morphinstance_vertex:vm,morphcolor_vertex:ym,morphnormal_vertex:Mm,morphtarget_pars_vertex:Sm,morphtarget_vertex:bm,normal_fragment_begin:Em,normal_fragment_maps:Tm,normal_pars_fragment:wm,normal_pars_vertex:Am,normal_vertex:Cm,normalmap_pars_fragment:Rm,clearcoat_normal_fragment_begin:Pm,clearcoat_normal_fragment_maps:Lm,clearcoat_pars_fragment:Im,iridescence_pars_fragment:Dm,opaque_fragment:Nm,packing:Um,premultiplied_alpha_fragment:Fm,project_vertex:Om,dithering_fragment:Bm,dithering_pars_fragment:zm,roughnessmap_fragment:km,roughnessmap_pars_fragment:Gm,shadowmap_pars_fragment:Hm,shadowmap_pars_vertex:Vm,shadowmap_vertex:Wm,shadowmask_pars_fragment:Xm,skinbase_vertex:qm,skinning_pars_vertex:Ym,skinning_vertex:Zm,skinnormal_vertex:Km,specularmap_fragment:$m,specularmap_pars_fragment:Jm,tonemapping_fragment:jm,tonemapping_pars_fragment:Qm,transmission_fragment:t0,transmission_pars_fragment:e0,uv_pars_fragment:n0,uv_pars_vertex:i0,uv_vertex:s0,worldpos_vertex:r0,background_vert:a0,background_frag:o0,backgroundCube_vert:l0,backgroundCube_frag:c0,cube_vert:h0,cube_frag:u0,depth_vert:d0,depth_frag:f0,distance_vert:p0,distance_frag:m0,equirect_vert:g0,equirect_frag:x0,linedashed_vert:_0,linedashed_frag:v0,meshbasic_vert:y0,meshbasic_frag:M0,meshlambert_vert:S0,meshlambert_frag:b0,meshmatcap_vert:E0,meshmatcap_frag:T0,meshnormal_vert:w0,meshnormal_frag:A0,meshphong_vert:C0,meshphong_frag:R0,meshphysical_vert:P0,meshphysical_frag:L0,meshtoon_vert:I0,meshtoon_frag:D0,points_vert:N0,points_frag:U0,shadow_vert:F0,shadow_frag:O0,sprite_vert:B0,sprite_frag:z0},ft={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},On={basic:{uniforms:fn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:fn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Gt(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:fn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:fn([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:fn([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:fn([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:fn([ft.points,ft.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:fn([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:fn([ft.common,ft.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:fn([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:fn([ft.sprite,ft.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:fn([ft.common,ft.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:fn([ft.lights,ft.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};On.physical={uniforms:fn([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const Gr={r:0,b:0,g:0},Pi=new Vn,k0=new ce;function G0(i,t,e,n,s,r){const a=new Gt(0);let o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){const M=v.backgroundBlurriness>0;S=t.get(S,M)}return S}function g(v){let S=!1;const M=f(v);M===null?p(a,o):M&&M.isColor&&(p(M,1),S=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?e.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(v,S){const M=f(S);M&&(M.isCubeTexture||M.mapping===fa)?(c===void 0&&(c=new zt(new Se(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:As(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Pi.copy(S.backgroundRotation),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(k0.makeRotationFromEuler(Pi)),c.material.toneMapped=oe.getTransfer(M.colorSpace)!==me,(h!==M||d!==M.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new zt(new yi(2,2),new Wn({name:"BackgroundMaterial",uniforms:As(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=oe.getTransfer(M.colorSpace)!==me,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,S){v.getRGB(Gr,Bh(i)),e.buffers.color.setClear(Gr.r,Gr.g,Gr.b,S,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,S=1){a.set(v),o=S,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:g,addToRenderList:y,dispose:m}}function H0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(R,F,k,X,O){let H=!1;const U=d(R,X,k,F);r!==U&&(r=U,c(r.object)),H=f(R,X,k,O),H&&g(R,X,k,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,M(R,F,k,X),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(R){return i.bindVertexArray(R)}function h(R){return i.deleteVertexArray(R)}function d(R,F,k,X){const O=X.wireframe===!0;let H=n[F.id];H===void 0&&(H={},n[F.id]=H);const U=R.isInstancedMesh===!0?R.id:0;let it=H[U];it===void 0&&(it={},H[U]=it);let Q=it[k.id];Q===void 0&&(Q={},it[k.id]=Q);let gt=Q[O];return gt===void 0&&(gt=u(l()),Q[O]=gt),gt}function u(R){const F=[],k=[],X=[];for(let O=0;O<e;O++)F[O]=0,k[O]=0,X[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:k,attributeDivisors:X,object:R,attributes:{},index:null}}function f(R,F,k,X){const O=r.attributes,H=F.attributes;let U=0;const it=k.getAttributes();for(const Q in it)if(it[Q].location>=0){const _t=O[Q];let xt=H[Q];if(xt===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(xt=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(xt=R.instanceColor)),_t===void 0||_t.attribute!==xt||xt&&_t.data!==xt.data)return!0;U++}return r.attributesNum!==U||r.index!==X}function g(R,F,k,X){const O={},H=F.attributes;let U=0;const it=k.getAttributes();for(const Q in it)if(it[Q].location>=0){let _t=H[Q];_t===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(_t=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(_t=R.instanceColor));const xt={};xt.attribute=_t,_t&&_t.data&&(xt.data=_t.data),O[Q]=xt,U++}r.attributes=O,r.attributesNum=U,r.index=X}function y(){const R=r.newAttributes;for(let F=0,k=R.length;F<k;F++)R[F]=0}function p(R){m(R,0)}function m(R,F){const k=r.newAttributes,X=r.enabledAttributes,O=r.attributeDivisors;k[R]=1,X[R]===0&&(i.enableVertexAttribArray(R),X[R]=1),O[R]!==F&&(i.vertexAttribDivisor(R,F),O[R]=F)}function v(){const R=r.newAttributes,F=r.enabledAttributes;for(let k=0,X=F.length;k<X;k++)F[k]!==R[k]&&(i.disableVertexAttribArray(k),F[k]=0)}function S(R,F,k,X,O,H,U){U===!0?i.vertexAttribIPointer(R,F,k,O,H):i.vertexAttribPointer(R,F,k,X,O,H)}function M(R,F,k,X){y();const O=X.attributes,H=k.getAttributes(),U=F.defaultAttributeValues;for(const it in H){const Q=H[it];if(Q.location>=0){let gt=O[it];if(gt===void 0&&(it==="instanceMatrix"&&R.instanceMatrix&&(gt=R.instanceMatrix),it==="instanceColor"&&R.instanceColor&&(gt=R.instanceColor)),gt!==void 0){const _t=gt.normalized,xt=gt.itemSize,Ht=t.get(gt);if(Ht===void 0)continue;const de=Ht.buffer,ge=Ht.type,K=Ht.bytesPerElement,ot=ge===i.INT||ge===i.UNSIGNED_INT||gt.gpuType===pl;if(gt.isInterleavedBufferAttribute){const lt=gt.data,Ft=lt.stride,Nt=gt.offset;if(lt.isInstancedInterleavedBuffer){for(let Vt=0;Vt<Q.locationSize;Vt++)m(Q.location+Vt,lt.meshPerAttribute);R.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Vt=0;Vt<Q.locationSize;Vt++)p(Q.location+Vt);i.bindBuffer(i.ARRAY_BUFFER,de);for(let Vt=0;Vt<Q.locationSize;Vt++)S(Q.location+Vt,xt/Q.locationSize,ge,_t,Ft*K,(Nt+xt/Q.locationSize*Vt)*K,ot)}else{if(gt.isInstancedBufferAttribute){for(let lt=0;lt<Q.locationSize;lt++)m(Q.location+lt,gt.meshPerAttribute);R.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let lt=0;lt<Q.locationSize;lt++)p(Q.location+lt);i.bindBuffer(i.ARRAY_BUFFER,de);for(let lt=0;lt<Q.locationSize;lt++)S(Q.location+lt,xt/Q.locationSize,ge,_t,xt*K,xt/Q.locationSize*lt*K,ot)}}else if(U!==void 0){const _t=U[it];if(_t!==void 0)switch(_t.length){case 2:i.vertexAttrib2fv(Q.location,_t);break;case 3:i.vertexAttrib3fv(Q.location,_t);break;case 4:i.vertexAttrib4fv(Q.location,_t);break;default:i.vertexAttrib1fv(Q.location,_t)}}}}v()}function C(){E();for(const R in n){const F=n[R];for(const k in F){const X=F[k];for(const O in X){const H=X[O];for(const U in H)h(H[U].object),delete H[U];delete X[O]}}delete n[R]}}function A(R){if(n[R.id]===void 0)return;const F=n[R.id];for(const k in F){const X=F[k];for(const O in X){const H=X[O];for(const U in H)h(H[U].object),delete H[U];delete X[O]}}delete n[R.id]}function P(R){for(const F in n){const k=n[F];for(const X in k){const O=k[X];if(O[R.id]===void 0)continue;const H=O[R.id];for(const U in H)h(H[U].object),delete H[U];delete O[R.id]}}}function _(R){for(const F in n){const k=n[F],X=R.isInstancedMesh===!0?R.id:0,O=k[X];if(O!==void 0){for(const H in O){const U=O[H];for(const it in U)h(U[it].object),delete U[it];delete O[H]}delete k[X],Object.keys(k).length===0&&delete n[F]}}}function E(){B(),a=!0,r!==s&&(r=s,c(r.object))}function B(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:B,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfObject:_,releaseStatesOfProgram:P,initAttributes:y,enableAttribute:p,disableUnusedAttributes:v}}function V0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,n,1)}function l(c,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let y=0;y<d;y++)g+=h[y]*u[y];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function W0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==Ln&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const _=P===ai&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==vn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Pn&&!_)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Wt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:M,maxSamples:C,samples:A}}function X0(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Bi,o=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const v=r?0:n,S=v*4;let M=m.clippingState||null;l.value=M,M=h(g,u,S,f);for(let C=0;C!==S;++C)M[C]=e[C];m.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){const y=d!==null?d.length:0;let p=null;if(y!==0){if(p=l.value,g!==!0||p===null){const m=f+y*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,M=f;S!==y;++S,M+=4)a.copy(d[S]).applyMatrix4(v,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}const vi=4,Rc=[.125,.215,.35,.446,.526,.582],Hi=20,q0=256,Xs=new Dl,Pc=new Gt;let Qa=null,to=0,eo=0,no=!1;const Y0=new L;class Lc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=Y0}=r;Qa=this._renderer.getRenderTarget(),to=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),no=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Qa,to,eo),this._renderer.xr.enabled=no,t.scissorTest=!1,ms(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qi||t.mapping===bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qa=this._renderer.getRenderTarget(),to=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),no=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:ai,format:Ln,colorSpace:Ts,depthBuffer:!1},s=Ic(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ic(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Z0(r)),this._blurMaterial=$0(r,t,e),this._ggxMaterial=K0(r,t,e)}return s}_compileMaterial(t){const e=new zt(new We,t);this._renderer.compile(e,Xs)}_sceneToCubeUV(t,e,n,s,r){const l=new _n(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Pc),d.toneMapping=kn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new zt(new Se,new Le({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,p=y.material;let m=!1;const v=t.background;v?v.isColor&&(p.color.copy(v),t.background=null,m=!0):(p.color.copy(Pc),m=!0);for(let S=0;S<6;S++){const M=S%3;M===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):M===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));const C=this._cubeSize;ms(s,M*C,S>2?C:0,C,C),d.setRenderTarget(s),m&&d.render(y,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=v}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===qi||t.mapping===bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;ms(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Xs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,f=d*u,{_lodMax:g}=this,y=this._sizeLods[n],p=3*y*(n>g-vi?n-g+vi:0),m=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,ms(r,p,m,3*y,2*y),s.setRenderTarget(r),s.render(o,Xs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,ms(t,p,m,3*y,2*y),s.setRenderTarget(t),s.render(o,Xs)}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ae("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[s];d.material=c;const u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Hi-1),y=r/g,p=isFinite(r)?1+Math.floor(h*y):Hi;p>Hi&&Wt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Hi}`);const m=[];let v=0;for(let P=0;P<Hi;++P){const _=P/y,E=Math.exp(-_*_/2);m.push(E),P===0?v+=E:P<p&&(v+=2*E)}for(let P=0;P<m.length;P++)m[P]=m[P]/v;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:S}=this;u.dTheta.value=g,u.mipInt.value=S-n;const M=this._sizeLods[s],C=3*M*(s>S-vi?s-S+vi:0),A=4*(this._cubeSize-M);ms(e,C,A,3*M,2*M),l.setRenderTarget(e),l.render(d,Xs)}}function Z0(i){const t=[],e=[],n=[];let s=i;const r=i-vi+1+Rc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-vi?l=Rc[a-i+vi-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,y=3,p=2,m=1,v=new Float32Array(y*g*f),S=new Float32Array(p*g*f),M=new Float32Array(m*g*f);for(let A=0;A<f;A++){const P=A%3*2/3-1,_=A>2?0:-1,E=[P,_,0,P+2/3,_,0,P+2/3,_+1,0,P,_,0,P+2/3,_+1,0,P,_+1,0];v.set(E,y*g*A),S.set(u,p*g*A);const B=[A,A,A,A,A,A];M.set(B,m*g*A)}const C=new We;C.setAttribute("position",new Mn(v,y)),C.setAttribute("uv",new Mn(S,p)),C.setAttribute("faceIndex",new Mn(M,m)),n.push(new zt(C,null)),s>vi&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Ic(i,t,e){const n=new Gn(i,t,e);return n.texture.mapping=fa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ms(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function K0(i,t,e){return new Wn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:q0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xa(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function $0(i,t,e){const n=new Float32Array(Hi),s=new L(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xa(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Dc(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xa(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Nc(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function xa(){return`

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
	`}class Hh extends Gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ch(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Se(5,5,5),r=new Wn({name:"CubemapFromEquirect",uniforms:As(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:ii});r.uniforms.tEquirect.value=e;const a=new zt(s,r),o=e.minFilter;return e.minFilter===Vi&&(e.minFilter=hn),new ep(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}function J0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===Ma||f===Sa)if(t.has(u)){const g=t.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const y=new Hh(g.height);return y.fromEquirectangularTexture(i,u),t.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,g=f===Ma||f===Sa,y=f===qi||f===bs;if(g||y){let p=e.get(u);const m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Lc(i)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{const v=u.image;return g&&v&&v.height>0||y&&v&&l(v)?(n===null&&(n=new Lc(i)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,f){return f===Ma?u.mapping=qi:f===Sa&&(u.mapping=bs),u}function l(u){let f=0;const g=6;for(let y=0;y<g;y++)u[y]!==void 0&&f++;return f===g}function c(u){const f=u.target;f.removeEventListener("dispose",c);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function j0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ia("WebGLRenderer: "+n+" extension not supported."),s}}}function Q0(i,t,e,n){const s={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,g=d.attributes.position;let y=0;if(g===void 0)return;if(f!==null){const v=f.array;y=f.version;for(let S=0,M=v.length;S<M;S+=3){const C=v[S+0],A=v[S+1],P=v[S+2];u.push(C,A,A,P,P,C)}}else{const v=g.array;y=g.version;for(let S=0,M=v.length/3-1;S<M;S+=3){const C=S+0,A=S+1,P=S+2;u.push(C,A,A,P,P,C)}}const p=new(g.count>=65535?Th:Eh)(u,1);p.version=y;const m=r.get(d);m&&t.remove(m),r.set(d,p)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function tg(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*a),e.update(f,n,1)}function c(u,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,u*a,g),e.update(f,n,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,n,1)}function d(u,f,g,y){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<u.length;m++)c(u[m]/a,f[m],y[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,y,0,g);let m=0;for(let v=0;v<g;v++)m+=f[v]*y[v];e.update(m,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function eg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:ae("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ng(i,t,e){const n=new WeakMap,s=new Ue;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let B=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",B)};var f=B;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),y===!0&&(M=2),p===!0&&(M=3);let C=o.attributes.position.count*M,A=1;C>t.maxTextureSize&&(A=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const P=new Float32Array(C*A*4*d),_=new Mh(P,C,A,d);_.type=Pn,_.needsUpdate=!0;const E=M*4;for(let R=0;R<d;R++){const F=m[R],k=v[R],X=S[R],O=C*A*4*R;for(let H=0;H<F.count;H++){const U=H*E;g===!0&&(s.fromBufferAttribute(F,H),P[O+U+0]=s.x,P[O+U+1]=s.y,P[O+U+2]=s.z,P[O+U+3]=0),y===!0&&(s.fromBufferAttribute(k,H),P[O+U+4]=s.x,P[O+U+5]=s.y,P[O+U+6]=s.z,P[O+U+7]=0),p===!0&&(s.fromBufferAttribute(X,H),P[O+U+8]=s.x,P[O+U+9]=s.y,P[O+U+10]=s.z,P[O+U+11]=X.itemSize===4?s.w:1)}}u={count:d,texture:_,size:new st(C,A)},n.set(o,u),o.addEventListener("dispose",B)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const y=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function ig(i,t,e,n,s){let r=new WeakMap;function a(c){const h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const sg={[ah]:"LINEAR_TONE_MAPPING",[oh]:"REINHARD_TONE_MAPPING",[lh]:"CINEON_TONE_MAPPING",[fl]:"ACES_FILMIC_TONE_MAPPING",[hh]:"AGX_TONE_MAPPING",[uh]:"NEUTRAL_TONE_MAPPING",[ch]:"CUSTOM_TONE_MAPPING"};function rg(i,t,e,n,s){const r=new Gn(t,e,{type:i,depthBuffer:n,stencilBuffer:s}),a=new Gn(t,e,{type:ai,depthBuffer:!1,stencilBuffer:!1}),o=new We;o.setAttribute("position",new re([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new re([0,2,0,0,2,0],2));const l=new qf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new zt(o,l),h=new Dl(-1,1,1,-1,0,1);let d=null,u=null,f=!1,g,y=null,p=[],m=!1;this.setSize=function(v,S){r.setSize(v,S),a.setSize(v,S);for(let M=0;M<p.length;M++){const C=p[M];C.setSize&&C.setSize(v,S)}},this.setEffects=function(v){p=v,m=p.length>0&&p[0].isRenderPass===!0;const S=r.width,M=r.height;for(let C=0;C<p.length;C++){const A=p[C];A.setSize&&A.setSize(S,M)}},this.begin=function(v,S){if(f||v.toneMapping===kn&&p.length===0)return!1;if(y=S,S!==null){const M=S.width,C=S.height;(r.width!==M||r.height!==C)&&this.setSize(M,C)}return m===!1&&v.setRenderTarget(r),g=v.toneMapping,v.toneMapping=kn,!0},this.hasRenderPass=function(){return m},this.end=function(v,S){v.toneMapping=g,f=!0;let M=r,C=a;for(let A=0;A<p.length;A++){const P=p[A];if(P.enabled!==!1&&(P.render(v,C,M,S),P.needsSwap!==!1)){const _=M;M=C,C=_}}if(d!==v.outputColorSpace||u!==v.toneMapping){d=v.outputColorSpace,u=v.toneMapping,l.defines={},oe.getTransfer(d)===me&&(l.defines.SRGB_TRANSFER="");const A=sg[u];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,v.setRenderTarget(y),v.render(c,h),y=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Vh=new un,il=new ar(1,1),Wh=new Mh,Xh=new kd,qh=new Ch,Uc=[],Fc=[],Oc=new Float32Array(16),Bc=new Float32Array(9),zc=new Float32Array(4);function Us(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Uc[s];if(r===void 0&&(r=new Float32Array(s),Uc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function He(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function _a(i,t){let e=Fc[t];e===void 0&&(e=new Int32Array(t),Fc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ag(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function og(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2fv(this.addr,t),Ve(e,t)}}function lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;i.uniform3fv(this.addr,t),Ve(e,t)}}function cg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4fv(this.addr,t),Ve(e,t)}}function hg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,n))return;zc.set(n),i.uniformMatrix2fv(this.addr,!1,zc),Ve(e,n)}}function ug(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,n))return;Bc.set(n),i.uniformMatrix3fv(this.addr,!1,Bc),Ve(e,n)}}function dg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,n))return;Oc.set(n),i.uniformMatrix4fv(this.addr,!1,Oc),Ve(e,n)}}function fg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2iv(this.addr,t),Ve(e,t)}}function mg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3iv(this.addr,t),Ve(e,t)}}function gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4iv(this.addr,t),Ve(e,t)}}function xg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function _g(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2uiv(this.addr,t),Ve(e,t)}}function vg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3uiv(this.addr,t),Ve(e,t)}}function yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4uiv(this.addr,t),Ve(e,t)}}function Mg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(il.compareFunction=e.isReversedDepthBuffer()?Sl:Ml,r=il):r=Vh,e.setTexture2D(t||r,s)}function Sg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Xh,s)}function bg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||qh,s)}function Eg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Wh,s)}function Tg(i){switch(i){case 5126:return ag;case 35664:return og;case 35665:return lg;case 35666:return cg;case 35674:return hg;case 35675:return ug;case 35676:return dg;case 5124:case 35670:return fg;case 35667:case 35671:return pg;case 35668:case 35672:return mg;case 35669:case 35673:return gg;case 5125:return xg;case 36294:return _g;case 36295:return vg;case 36296:return yg;case 35678:case 36198:case 36298:case 36306:case 35682:return Mg;case 35679:case 36299:case 36307:return Sg;case 35680:case 36300:case 36308:case 36293:return bg;case 36289:case 36303:case 36311:case 36292:return Eg}}function wg(i,t){i.uniform1fv(this.addr,t)}function Ag(i,t){const e=Us(t,this.size,2);i.uniform2fv(this.addr,e)}function Cg(i,t){const e=Us(t,this.size,3);i.uniform3fv(this.addr,e)}function Rg(i,t){const e=Us(t,this.size,4);i.uniform4fv(this.addr,e)}function Pg(i,t){const e=Us(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Lg(i,t){const e=Us(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ig(i,t){const e=Us(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Dg(i,t){i.uniform1iv(this.addr,t)}function Ng(i,t){i.uniform2iv(this.addr,t)}function Ug(i,t){i.uniform3iv(this.addr,t)}function Fg(i,t){i.uniform4iv(this.addr,t)}function Og(i,t){i.uniform1uiv(this.addr,t)}function Bg(i,t){i.uniform2uiv(this.addr,t)}function zg(i,t){i.uniform3uiv(this.addr,t)}function kg(i,t){i.uniform4uiv(this.addr,t)}function Gg(i,t,e){const n=this.cache,s=t.length,r=_a(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=il:a=Vh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Hg(i,t,e){const n=this.cache,s=t.length,r=_a(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Xh,r[a])}function Vg(i,t,e){const n=this.cache,s=t.length,r=_a(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||qh,r[a])}function Wg(i,t,e){const n=this.cache,s=t.length,r=_a(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Wh,r[a])}function Xg(i){switch(i){case 5126:return wg;case 35664:return Ag;case 35665:return Cg;case 35666:return Rg;case 35674:return Pg;case 35675:return Lg;case 35676:return Ig;case 5124:case 35670:return Dg;case 35667:case 35671:return Ng;case 35668:case 35672:return Ug;case 35669:case 35673:return Fg;case 5125:return Og;case 36294:return Bg;case 36295:return zg;case 36296:return kg;case 35678:case 36198:case 36298:case 36306:case 35682:return Gg;case 35679:case 36299:case 36307:return Hg;case 35680:case 36300:case 36308:case 36293:return Vg;case 36289:case 36303:case 36311:case 36292:return Wg}}class qg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Tg(e.type)}}class Yg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Xg(e.type)}}class Zg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const io=/(\w+)(\])?(\[|\.)?/g;function kc(i,t){i.seq.push(t),i.map[t.id]=t}function Kg(i,t,e){const n=i.name,s=n.length;for(io.lastIndex=0;;){const r=io.exec(n),a=io.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){kc(e,c===void 0?new qg(o,i,t):new Yg(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Zg(o),kc(e,d)),e=d}}}class Kr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Kg(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Gc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const $g=37297;let Jg=0;function jg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Hc=new Kt;function Qg(i){oe._getMatrix(Hc,oe.workingColorSpace,i);const t=`mat3( ${Hc.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(i)){case ta:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return Wt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Vc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+jg(i.getShaderSource(t),o)}else return r}function tx(i,t){const e=Qg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const ex={[ah]:"Linear",[oh]:"Reinhard",[lh]:"Cineon",[fl]:"ACESFilmic",[hh]:"AgX",[uh]:"Neutral",[ch]:"Custom"};function nx(i,t){const e=ex[t];return e===void 0?(Wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Hr=new L;function ix(){oe.getLuminanceCoefficients(Hr);const i=Hr.x.toFixed(4),t=Hr.y.toFixed(4),e=Hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Js).join(`
`)}function rx(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ax(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Js(i){return i!==""}function Wc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ox=/^[ \t]*#include +<([\w\d./]+)>/gm;function sl(i){return i.replace(ox,cx)}const lx=new Map;function cx(i,t){let e=Jt[t];if(e===void 0){const n=lx.get(t);if(n!==void 0)e=Jt[n],Wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return sl(e)}const hx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qc(i){return i.replace(hx,ux)}function ux(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yc(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const dx={[tr]:"SHADOWMAP_TYPE_PCF",[Ks]:"SHADOWMAP_TYPE_VSM"};function fx(i){return dx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const px={[qi]:"ENVMAP_TYPE_CUBE",[bs]:"ENVMAP_TYPE_CUBE",[fa]:"ENVMAP_TYPE_CUBE_UV"};function mx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":px[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const gx={[bs]:"ENVMAP_MODE_REFRACTION"};function xx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":gx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const _x={[dl]:"ENVMAP_BLENDING_MULTIPLY",[vd]:"ENVMAP_BLENDING_MIX",[yd]:"ENVMAP_BLENDING_ADD"};function vx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":_x[i.combine]||"ENVMAP_BLENDING_NONE"}function yx(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Mx(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=fx(e),c=mx(e),h=xx(e),d=vx(e),u=yx(e),f=sx(e),g=rx(r),y=s.createProgram();let p,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Js).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Js).join(`
`),m.length>0&&(m+=`
`)):(p=[Yc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),m=[Yc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==kn?"#define TONE_MAPPING":"",e.toneMapping!==kn?Jt.tonemapping_pars_fragment:"",e.toneMapping!==kn?nx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,tx("linearToOutputTexel",e.outputColorSpace),ix(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Js).join(`
`)),a=sl(a),a=Wc(a,e),a=Xc(a,e),o=sl(o),o=Wc(o,e),o=Xc(o,e),a=qc(a),o=qc(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=v+p+a,M=v+m+o,C=Gc(s,s.VERTEX_SHADER,S),A=Gc(s,s.FRAGMENT_SHADER,M);s.attachShader(y,C),s.attachShader(y,A),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function P(R){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(y)||"",k=s.getShaderInfoLog(C)||"",X=s.getShaderInfoLog(A)||"",O=F.trim(),H=k.trim(),U=X.trim();let it=!0,Q=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(it=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,C,A);else{const gt=Vc(s,C,"vertex"),_t=Vc(s,A,"fragment");ae("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+O+`
`+gt+`
`+_t)}else O!==""?Wt("WebGLProgram: Program Info Log:",O):(H===""||U==="")&&(Q=!1);Q&&(R.diagnostics={runnable:it,programLog:O,vertexShader:{log:H,prefix:p},fragmentShader:{log:U,prefix:m}})}s.deleteShader(C),s.deleteShader(A),_=new Kr(s,y),E=ax(s,y)}let _;this.getUniforms=function(){return _===void 0&&P(this),_};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let B=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(y,$g)),B},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jg++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=A,this}let Sx=0;class bx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ex(t),e.set(t,n)),n}}class Ex{constructor(t){this.id=Sx++,this.code=t,this.usedTimes=0}}function Tx(i,t,e,n,s,r){const a=new Sh,o=new bx,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function y(_,E,B,R,F){const k=R.fog,X=F.geometry,O=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,U=t.get(_.envMap||O,H),it=U&&U.mapping===fa?U.image.height:null,Q=f[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Wt("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const gt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,_t=gt!==void 0?gt.length:0;let xt=0;X.morphAttributes.position!==void 0&&(xt=1),X.morphAttributes.normal!==void 0&&(xt=2),X.morphAttributes.color!==void 0&&(xt=3);let Ht,de,ge,K;if(Q){const fe=On[Q];Ht=fe.vertexShader,de=fe.fragmentShader}else Ht=_.vertexShader,de=_.fragmentShader,o.update(_),ge=o.getVertexShaderID(_),K=o.getFragmentShaderID(_);const ot=i.getRenderTarget(),lt=i.state.buffers.depth.getReversed(),Ft=F.isInstancedMesh===!0,Nt=F.isBatchedMesh===!0,Vt=!!_.map,xe=!!_.matcap,qt=!!U,J=!!_.aoMap,et=!!_.lightMap,j=!!_.bumpMap,dt=!!_.normalMap,w=!!_.displacementMap,Ut=!!_.emissiveMap,vt=!!_.metalnessMap,Ot=!!_.roughnessMap,ct=_.anisotropy>0,T=_.clearcoat>0,x=_.dispersion>0,D=_.iridescence>0,q=_.sheen>0,$=_.transmission>0,Y=ct&&!!_.anisotropyMap,bt=T&&!!_.clearcoatMap,ht=T&&!!_.clearcoatNormalMap,It=T&&!!_.clearcoatRoughnessMap,Bt=D&&!!_.iridescenceMap,tt=D&&!!_.iridescenceThicknessMap,rt=q&&!!_.sheenColorMap,wt=q&&!!_.sheenRoughnessMap,Ct=!!_.specularMap,yt=!!_.specularColorMap,jt=!!_.specularIntensityMap,I=$&&!!_.transmissionMap,ut=$&&!!_.thicknessMap,at=!!_.gradientMap,St=!!_.alphaMap,nt=_.alphaTest>0,Z=!!_.alphaHash,At=!!_.extensions;let Xt=kn;_.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Xt=i.toneMapping);const be={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:Ht,fragmentShader:de,defines:_.defines,customVertexShaderID:ge,customFragmentShaderID:K,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:Nt,batchingColor:Nt&&F._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&F.instanceColor!==null,instancingMorph:Ft&&F.morphTexture!==null,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Ts,alphaToCoverage:!!_.alphaToCoverage,map:Vt,matcap:xe,envMap:qt,envMapMode:qt&&U.mapping,envMapCubeUVHeight:it,aoMap:J,lightMap:et,bumpMap:j,normalMap:dt,displacementMap:w,emissiveMap:Ut,normalMapObjectSpace:dt&&_.normalMapType===bd,normalMapTangentSpace:dt&&_.normalMapType===vh,metalnessMap:vt,roughnessMap:Ot,anisotropy:ct,anisotropyMap:Y,clearcoat:T,clearcoatMap:bt,clearcoatNormalMap:ht,clearcoatRoughnessMap:It,dispersion:x,iridescence:D,iridescenceMap:Bt,iridescenceThicknessMap:tt,sheen:q,sheenColorMap:rt,sheenRoughnessMap:wt,specularMap:Ct,specularColorMap:yt,specularIntensityMap:jt,transmission:$,transmissionMap:I,thicknessMap:ut,gradientMap:at,opaque:_.transparent===!1&&_.blending===ys&&_.alphaToCoverage===!1,alphaMap:St,alphaTest:nt,alphaHash:Z,combine:_.combine,mapUv:Vt&&g(_.map.channel),aoMapUv:J&&g(_.aoMap.channel),lightMapUv:et&&g(_.lightMap.channel),bumpMapUv:j&&g(_.bumpMap.channel),normalMapUv:dt&&g(_.normalMap.channel),displacementMapUv:w&&g(_.displacementMap.channel),emissiveMapUv:Ut&&g(_.emissiveMap.channel),metalnessMapUv:vt&&g(_.metalnessMap.channel),roughnessMapUv:Ot&&g(_.roughnessMap.channel),anisotropyMapUv:Y&&g(_.anisotropyMap.channel),clearcoatMapUv:bt&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:ht&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:It&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:wt&&g(_.sheenRoughnessMap.channel),specularMapUv:Ct&&g(_.specularMap.channel),specularColorMapUv:yt&&g(_.specularColorMap.channel),specularIntensityMapUv:jt&&g(_.specularIntensityMap.channel),transmissionMapUv:I&&g(_.transmissionMap.channel),thicknessMapUv:ut&&g(_.thicknessMap.channel),alphaMapUv:St&&g(_.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(dt||ct),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!X.attributes.uv&&(Vt||St),fog:!!k,useFog:_.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||X.attributes.normal===void 0&&dt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:lt,skinning:F.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:xt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xt,decodeVideoTexture:Vt&&_.map.isVideoTexture===!0&&oe.getTransfer(_.map.colorSpace)===me,decodeVideoTextureEmissive:Ut&&_.emissiveMap.isVideoTexture===!0&&oe.getTransfer(_.emissiveMap.colorSpace)===me,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ye,flipSided:_.side===pn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:At&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&_.extensions.multiDraw===!0||Nt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return be.vertexUv1s=l.has(1),be.vertexUv2s=l.has(2),be.vertexUv3s=l.has(3),l.clear(),be}function p(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const B in _.defines)E.push(B),E.push(_.defines[B]);return _.isRawShaderMaterial===!1&&(m(E,_),v(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function m(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function v(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),_.push(a.mask)}function S(_){const E=f[_.type];let B;if(E){const R=On[E];B=Vf.clone(R.uniforms)}else B=_.uniforms;return B}function M(_,E){let B=h.get(E);return B!==void 0?++B.usedTimes:(B=new Mx(i,E,_,s),c.push(B),h.set(E,B)),B}function C(_){if(--_.usedTimes===0){const E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function P(){o.dispose()}return{getParameters:y,getProgramCacheKey:p,getUniforms:S,acquireProgram:M,releaseProgram:C,releaseShaderCache:A,programs:c,dispose:P}}function wx(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Ax(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Zc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Kc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,y,p,m){let v=i[t];return v===void 0?(v={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:p,group:m},i[t]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=g,v.materialVariant=a(u),v.groupOrder=y,v.renderOrder=u.renderOrder,v.z=p,v.group=m),t++,v}function l(u,f,g,y,p,m){const v=o(u,f,g,y,p,m);g.transmission>0?n.push(v):g.transparent===!0?s.push(v):e.push(v)}function c(u,f,g,y,p,m){const v=o(u,f,g,y,p,m);g.transmission>0?n.unshift(v):g.transparent===!0?s.unshift(v):e.unshift(v)}function h(u,f){e.length>1&&e.sort(u||Ax),n.length>1&&n.sort(f||Zc),s.length>1&&s.sort(f||Zc)}function d(){for(let u=t,f=i.length;u<f;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Cx(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Kc,i.set(n,[a])):s>=r.length?(a=new Kc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Rx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Gt};break;case"SpotLight":e={position:new L,direction:new L,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function Px(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Lx=0;function Ix(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Dx(i){const t=new Rx,e=Px(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const s=new L,r=new ce,a=new ce;function o(c){let h=0,d=0,u=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,y=0,p=0,m=0,v=0,S=0,M=0,C=0,A=0,P=0;c.sort(Ix);for(let E=0,B=c.length;E<B;E++){const R=c[E],F=R.color,k=R.intensity,X=R.distance;let O=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Es?O=R.shadow.map.texture:O=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=F.r*k,d+=F.g*k,u+=F.b*k;else if(R.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(R.sh.coefficients[H],k);P++}else if(R.isDirectionalLight){const H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const U=R.shadow,it=e.get(R);it.shadowIntensity=U.intensity,it.shadowBias=U.bias,it.shadowNormalBias=U.normalBias,it.shadowRadius=U.radius,it.shadowMapSize=U.mapSize,n.directionalShadow[f]=it,n.directionalShadowMap[f]=O,n.directionalShadowMatrix[f]=R.shadow.matrix,v++}n.directional[f]=H,f++}else if(R.isSpotLight){const H=t.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(F).multiplyScalar(k),H.distance=X,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,n.spot[y]=H;const U=R.shadow;if(R.map&&(n.spotLightMap[C]=R.map,C++,U.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[y]=U.matrix,R.castShadow){const it=e.get(R);it.shadowIntensity=U.intensity,it.shadowBias=U.bias,it.shadowNormalBias=U.normalBias,it.shadowRadius=U.radius,it.shadowMapSize=U.mapSize,n.spotShadow[y]=it,n.spotShadowMap[y]=O,M++}y++}else if(R.isRectAreaLight){const H=t.get(R);H.color.copy(F).multiplyScalar(k),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=H,p++}else if(R.isPointLight){const H=t.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){const U=R.shadow,it=e.get(R);it.shadowIntensity=U.intensity,it.shadowBias=U.bias,it.shadowNormalBias=U.normalBias,it.shadowRadius=U.radius,it.shadowMapSize=U.mapSize,it.shadowCameraNear=U.camera.near,it.shadowCameraFar=U.camera.far,n.pointShadow[g]=it,n.pointShadowMap[g]=O,n.pointShadowMatrix[g]=R.shadow.matrix,S++}n.point[g]=H,g++}else if(R.isHemisphereLight){const H=t.get(R);H.skyColor.copy(R.color).multiplyScalar(k),H.groundColor.copy(R.groundColor).multiplyScalar(k),n.hemi[m]=H,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const _=n.hash;(_.directionalLength!==f||_.pointLength!==g||_.spotLength!==y||_.rectAreaLength!==p||_.hemiLength!==m||_.numDirectionalShadows!==v||_.numPointShadows!==S||_.numSpotShadows!==M||_.numSpotMaps!==C||_.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=M+C-A,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,_.directionalLength=f,_.pointLength=g,_.spotLength=y,_.rectAreaLength=p,_.hemiLength=m,_.numDirectionalShadows=v,_.numPointShadows=S,_.numSpotShadows=M,_.numSpotMaps=C,_.numLightProbes=P,n.version=Lx++)}function l(c,h){let d=0,u=0,f=0,g=0,y=0;const p=h.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){const S=c[m];if(S.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),d++}else if(S.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),f++}else if(S.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(S.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const M=n.point[u];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),u++}else if(S.isHemisphereLight){const M=n.hemi[y];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(p),y++}}}return{setup:o,setupView:l,state:n}}function $c(i){const t=new Dx(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Nx(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new $c(i),t.set(s,[o])):r>=a.length?(o=new $c(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Ux=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fx=`uniform sampler2D shadow_pass;
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
}`,Ox=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Bx=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Jc=new ce,qs=new L,so=new L;function zx(i,t,e){let n=new Tl;const s=new st,r=new st,a=new Ue,o=new Yf,l=new Zf,c={},h=e.maxTextureSize,d={[Si]:pn,[pn]:Si,[Ye]:Ye},u=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:Ux,fragmentShader:Fx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new We;g.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new zt(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tr;let m=this.type;this.render=function(A,P,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===td&&(Wt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=tr);const E=i.getRenderTarget(),B=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),F=i.state;F.setBlending(ii),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const k=m!==this.type;k&&P.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(O=>O.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,O=A.length;X<O;X++){const H=A[X],U=H.shadow;if(U===void 0){Wt("WebGLShadowMap:",H,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const it=U.getFrameExtents();s.multiply(it),r.copy(U.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,U.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,U.mapSize.y=r.y));const Q=i.state.buffers.depth.getReversed();if(U.camera._reversedDepth=Q,U.map===null||k===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Ks){if(H.isPointLight){Wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Gn(s.x,s.y,{format:Es,type:ai,minFilter:hn,magFilter:hn,generateMipmaps:!1}),U.map.texture.name=H.name+".shadowMap",U.map.depthTexture=new ar(s.x,s.y,Pn),U.map.depthTexture.name=H.name+".shadowMapDepth",U.map.depthTexture.format=oi,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=en,U.map.depthTexture.magFilter=en}else H.isPointLight?(U.map=new Hh(s.x),U.map.depthTexture=new of(s.x,Hn)):(U.map=new Gn(s.x,s.y),U.map.depthTexture=new ar(s.x,s.y,Hn)),U.map.depthTexture.name=H.name+".shadowMap",U.map.depthTexture.format=oi,this.type===tr?(U.map.depthTexture.compareFunction=Q?Sl:Ml,U.map.depthTexture.minFilter=hn,U.map.depthTexture.magFilter=hn):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=en,U.map.depthTexture.magFilter=en);U.camera.updateProjectionMatrix()}const gt=U.map.isWebGLCubeRenderTarget?6:1;for(let _t=0;_t<gt;_t++){if(U.map.isWebGLCubeRenderTarget)i.setRenderTarget(U.map,_t),i.clear();else{_t===0&&(i.setRenderTarget(U.map),i.clear());const xt=U.getViewport(_t);a.set(r.x*xt.x,r.y*xt.y,r.x*xt.z,r.y*xt.w),F.viewport(a)}if(H.isPointLight){const xt=U.camera,Ht=U.matrix,de=H.distance||xt.far;de!==xt.far&&(xt.far=de,xt.updateProjectionMatrix()),qs.setFromMatrixPosition(H.matrixWorld),xt.position.copy(qs),so.copy(xt.position),so.add(Ox[_t]),xt.up.copy(Bx[_t]),xt.lookAt(so),xt.updateMatrixWorld(),Ht.makeTranslation(-qs.x,-qs.y,-qs.z),Jc.multiplyMatrices(xt.projectionMatrix,xt.matrixWorldInverse),U._frustum.setFromProjectionMatrix(Jc,xt.coordinateSystem,xt.reversedDepth)}else U.updateMatrices(H);n=U.getFrustum(),M(P,_,U.camera,H,this.type)}U.isPointLightShadow!==!0&&this.type===Ks&&v(U,_),U.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(E,B,R)};function v(A,P){const _=t.update(y);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Gn(s.x,s.y,{format:Es,type:ai})),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(P,null,_,u,y,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(P,null,_,f,y,null)}function S(A,P,_,E){let B=null;const R=_.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)B=R;else if(B=_.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const F=B.uuid,k=P.uuid;let X=c[F];X===void 0&&(X={},c[F]=X);let O=X[k];O===void 0&&(O=B.clone(),X[k]=O,P.addEventListener("dispose",C)),B=O}if(B.visible=P.visible,B.wireframe=P.wireframe,E===Ks?B.side=P.shadowSide!==null?P.shadowSide:P.side:B.side=P.shadowSide!==null?P.shadowSide:d[P.side],B.alphaMap=P.alphaMap,B.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,B.map=P.map,B.clipShadows=P.clipShadows,B.clippingPlanes=P.clippingPlanes,B.clipIntersection=P.clipIntersection,B.displacementMap=P.displacementMap,B.displacementScale=P.displacementScale,B.displacementBias=P.displacementBias,B.wireframeLinewidth=P.wireframeLinewidth,B.linewidth=P.linewidth,_.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const F=i.properties.get(B);F.light=_}return B}function M(A,P,_,E,B){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&B===Ks)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,A.matrixWorld);const k=t.update(A),X=A.material;if(Array.isArray(X)){const O=k.groups;for(let H=0,U=O.length;H<U;H++){const it=O[H],Q=X[it.materialIndex];if(Q&&Q.visible){const gt=S(A,Q,E,B);A.onBeforeShadow(i,A,P,_,k,gt,it),i.renderBufferDirect(_,null,k,gt,A,it),A.onAfterShadow(i,A,P,_,k,gt,it)}}}else if(X.visible){const O=S(A,X,E,B);A.onBeforeShadow(i,A,P,_,k,O,null),i.renderBufferDirect(_,null,k,O,A,null),A.onAfterShadow(i,A,P,_,k,O,null)}}const F=A.children;for(let k=0,X=F.length;k<X;k++)M(F[k],P,_,E,B)}function C(A){A.target.removeEventListener("dispose",C);for(const _ in c){const E=c[_],B=A.target.uuid;B in E&&(E[B].dispose(),delete E[B])}}}function kx(i,t){function e(){let I=!1;const ut=new Ue;let at=null;const St=new Ue(0,0,0,0);return{setMask:function(nt){at!==nt&&!I&&(i.colorMask(nt,nt,nt,nt),at=nt)},setLocked:function(nt){I=nt},setClear:function(nt,Z,At,Xt,be){be===!0&&(nt*=Xt,Z*=Xt,At*=Xt),ut.set(nt,Z,At,Xt),St.equals(ut)===!1&&(i.clearColor(nt,Z,At,Xt),St.copy(ut))},reset:function(){I=!1,at=null,St.set(-1,0,0,0)}}}function n(){let I=!1,ut=!1,at=null,St=null,nt=null;return{setReversed:function(Z){if(ut!==Z){const At=t.get("EXT_clip_control");Z?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),ut=Z;const Xt=nt;nt=null,this.setClear(Xt)}},getReversed:function(){return ut},setTest:function(Z){Z?ot(i.DEPTH_TEST):lt(i.DEPTH_TEST)},setMask:function(Z){at!==Z&&!I&&(i.depthMask(Z),at=Z)},setFunc:function(Z){if(ut&&(Z=Dd[Z]),St!==Z){switch(Z){case lo:i.depthFunc(i.NEVER);break;case co:i.depthFunc(i.ALWAYS);break;case ho:i.depthFunc(i.LESS);break;case Ss:i.depthFunc(i.LEQUAL);break;case uo:i.depthFunc(i.EQUAL);break;case fo:i.depthFunc(i.GEQUAL);break;case po:i.depthFunc(i.GREATER);break;case mo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}St=Z}},setLocked:function(Z){I=Z},setClear:function(Z){nt!==Z&&(nt=Z,ut&&(Z=1-Z),i.clearDepth(Z))},reset:function(){I=!1,at=null,St=null,nt=null,ut=!1}}}function s(){let I=!1,ut=null,at=null,St=null,nt=null,Z=null,At=null,Xt=null,be=null;return{setTest:function(fe){I||(fe?ot(i.STENCIL_TEST):lt(i.STENCIL_TEST))},setMask:function(fe){ut!==fe&&!I&&(i.stencilMask(fe),ut=fe)},setFunc:function(fe,qn,Yn){(at!==fe||St!==qn||nt!==Yn)&&(i.stencilFunc(fe,qn,Yn),at=fe,St=qn,nt=Yn)},setOp:function(fe,qn,Yn){(Z!==fe||At!==qn||Xt!==Yn)&&(i.stencilOp(fe,qn,Yn),Z=fe,At=qn,Xt=Yn)},setLocked:function(fe){I=fe},setClear:function(fe){be!==fe&&(i.clearStencil(fe),be=fe)},reset:function(){I=!1,ut=null,at=null,St=null,nt=null,Z=null,At=null,Xt=null,be=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,f=[],g=null,y=!1,p=null,m=null,v=null,S=null,M=null,C=null,A=null,P=new Gt(0,0,0),_=0,E=!1,B=null,R=null,F=null,k=null,X=null;const O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,U=0;const it=i.getParameter(i.VERSION);it.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(it)[1]),H=U>=1):it.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),H=U>=2);let Q=null,gt={};const _t=i.getParameter(i.SCISSOR_BOX),xt=i.getParameter(i.VIEWPORT),Ht=new Ue().fromArray(_t),de=new Ue().fromArray(xt);function ge(I,ut,at,St){const nt=new Uint8Array(4),Z=i.createTexture();i.bindTexture(I,Z),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let At=0;At<at;At++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ut,0,i.RGBA,1,1,St,0,i.RGBA,i.UNSIGNED_BYTE,nt):i.texImage2D(ut+At,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,nt);return Z}const K={};K[i.TEXTURE_2D]=ge(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=ge(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=ge(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=ge(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ot(i.DEPTH_TEST),a.setFunc(Ss),j(!1),dt(Yl),ot(i.CULL_FACE),J(ii);function ot(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function lt(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Ft(I,ut){return d[I]!==ut?(i.bindFramebuffer(I,ut),d[I]=ut,I===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ut),I===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ut),!0):!1}function Nt(I,ut){let at=f,St=!1;if(I){at=u.get(ut),at===void 0&&(at=[],u.set(ut,at));const nt=I.textures;if(at.length!==nt.length||at[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,At=nt.length;Z<At;Z++)at[Z]=i.COLOR_ATTACHMENT0+Z;at.length=nt.length,St=!0}}else at[0]!==i.BACK&&(at[0]=i.BACK,St=!0);St&&i.drawBuffers(at)}function Vt(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const xe={[Gi]:i.FUNC_ADD,[nd]:i.FUNC_SUBTRACT,[id]:i.FUNC_REVERSE_SUBTRACT};xe[sd]=i.MIN,xe[rd]=i.MAX;const qt={[ad]:i.ZERO,[od]:i.ONE,[ld]:i.SRC_COLOR,[ao]:i.SRC_ALPHA,[pd]:i.SRC_ALPHA_SATURATE,[dd]:i.DST_COLOR,[hd]:i.DST_ALPHA,[cd]:i.ONE_MINUS_SRC_COLOR,[oo]:i.ONE_MINUS_SRC_ALPHA,[fd]:i.ONE_MINUS_DST_COLOR,[ud]:i.ONE_MINUS_DST_ALPHA,[md]:i.CONSTANT_COLOR,[gd]:i.ONE_MINUS_CONSTANT_COLOR,[xd]:i.CONSTANT_ALPHA,[_d]:i.ONE_MINUS_CONSTANT_ALPHA};function J(I,ut,at,St,nt,Z,At,Xt,be,fe){if(I===ii){y===!0&&(lt(i.BLEND),y=!1);return}if(y===!1&&(ot(i.BLEND),y=!0),I!==ed){if(I!==p||fe!==E){if((m!==Gi||M!==Gi)&&(i.blendEquation(i.FUNC_ADD),m=Gi,M=Gi),fe)switch(I){case ys:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qr:i.blendFunc(i.ONE,i.ONE);break;case Zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ae("WebGLState: Invalid blending: ",I);break}else switch(I){case ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Zl:ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kl:ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ae("WebGLState: Invalid blending: ",I);break}v=null,S=null,C=null,A=null,P.set(0,0,0),_=0,p=I,E=fe}return}nt=nt||ut,Z=Z||at,At=At||St,(ut!==m||nt!==M)&&(i.blendEquationSeparate(xe[ut],xe[nt]),m=ut,M=nt),(at!==v||St!==S||Z!==C||At!==A)&&(i.blendFuncSeparate(qt[at],qt[St],qt[Z],qt[At]),v=at,S=St,C=Z,A=At),(Xt.equals(P)===!1||be!==_)&&(i.blendColor(Xt.r,Xt.g,Xt.b,be),P.copy(Xt),_=be),p=I,E=!1}function et(I,ut){I.side===Ye?lt(i.CULL_FACE):ot(i.CULL_FACE);let at=I.side===pn;ut&&(at=!at),j(at),I.blending===ys&&I.transparent===!1?J(ii):J(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const St=I.stencilWrite;o.setTest(St),St&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ut(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function j(I){B!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),B=I)}function dt(I){I!==ju?(ot(i.CULL_FACE),I!==R&&(I===Yl?i.cullFace(i.BACK):I===Qu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):lt(i.CULL_FACE),R=I}function w(I){I!==F&&(H&&i.lineWidth(I),F=I)}function Ut(I,ut,at){I?(ot(i.POLYGON_OFFSET_FILL),(k!==ut||X!==at)&&(k=ut,X=at,a.getReversed()&&(ut=-ut),i.polygonOffset(ut,at))):lt(i.POLYGON_OFFSET_FILL)}function vt(I){I?ot(i.SCISSOR_TEST):lt(i.SCISSOR_TEST)}function Ot(I){I===void 0&&(I=i.TEXTURE0+O-1),Q!==I&&(i.activeTexture(I),Q=I)}function ct(I,ut,at){at===void 0&&(Q===null?at=i.TEXTURE0+O-1:at=Q);let St=gt[at];St===void 0&&(St={type:void 0,texture:void 0},gt[at]=St),(St.type!==I||St.texture!==ut)&&(Q!==at&&(i.activeTexture(at),Q=at),i.bindTexture(I,ut||K[I]),St.type=I,St.texture=ut)}function T(){const I=gt[Q];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(I){ae("WebGLState:",I)}}function D(){try{i.compressedTexImage3D(...arguments)}catch(I){ae("WebGLState:",I)}}function q(){try{i.texSubImage2D(...arguments)}catch(I){ae("WebGLState:",I)}}function $(){try{i.texSubImage3D(...arguments)}catch(I){ae("WebGLState:",I)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(I){ae("WebGLState:",I)}}function bt(){try{i.compressedTexSubImage3D(...arguments)}catch(I){ae("WebGLState:",I)}}function ht(){try{i.texStorage2D(...arguments)}catch(I){ae("WebGLState:",I)}}function It(){try{i.texStorage3D(...arguments)}catch(I){ae("WebGLState:",I)}}function Bt(){try{i.texImage2D(...arguments)}catch(I){ae("WebGLState:",I)}}function tt(){try{i.texImage3D(...arguments)}catch(I){ae("WebGLState:",I)}}function rt(I){Ht.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Ht.copy(I))}function wt(I){de.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),de.copy(I))}function Ct(I,ut){let at=c.get(ut);at===void 0&&(at=new WeakMap,c.set(ut,at));let St=at.get(I);St===void 0&&(St=i.getUniformBlockIndex(ut,I.name),at.set(I,St))}function yt(I,ut){const St=c.get(ut).get(I);l.get(ut)!==St&&(i.uniformBlockBinding(ut,St,I.__bindingPointIndex),l.set(ut,St))}function jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Q=null,gt={},d={},u=new WeakMap,f=[],g=null,y=!1,p=null,m=null,v=null,S=null,M=null,C=null,A=null,P=new Gt(0,0,0),_=0,E=!1,B=null,R=null,F=null,k=null,X=null,Ht.set(0,0,i.canvas.width,i.canvas.height),de.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ot,disable:lt,bindFramebuffer:Ft,drawBuffers:Nt,useProgram:Vt,setBlending:J,setMaterial:et,setFlipSided:j,setCullFace:dt,setLineWidth:w,setPolygonOffset:Ut,setScissorTest:vt,activeTexture:Ot,bindTexture:ct,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:D,texImage2D:Bt,texImage3D:tt,updateUBOMapping:Ct,uniformBlockBinding:yt,texStorage2D:ht,texStorage3D:It,texSubImage2D:q,texSubImage3D:$,compressedTexSubImage2D:Y,compressedTexSubImage3D:bt,scissor:rt,viewport:wt,reset:jt}}function Gx(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return f?new OffscreenCanvas(T,x):ea("canvas")}function y(T,x,D){let q=1;const $=ct(T);if(($.width>D||$.height>D)&&(q=D/Math.max($.width,$.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Y=Math.floor(q*$.width),bt=Math.floor(q*$.height);d===void 0&&(d=g(Y,bt));const ht=x?g(Y,bt):d;return ht.width=Y,ht.height=bt,ht.getContext("2d").drawImage(T,0,0,Y,bt),Wt("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Y+"x"+bt+")."),ht}else return"data"in T&&Wt("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),T;return T}function p(T){return T.generateMipmaps}function m(T){i.generateMipmap(T)}function v(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(T,x,D,q,$=!1){if(T!==null){if(i[T]!==void 0)return i[T];Wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=x;if(x===i.RED&&(D===i.FLOAT&&(Y=i.R32F),D===i.HALF_FLOAT&&(Y=i.R16F),D===i.UNSIGNED_BYTE&&(Y=i.R8)),x===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(Y=i.R8UI),D===i.UNSIGNED_SHORT&&(Y=i.R16UI),D===i.UNSIGNED_INT&&(Y=i.R32UI),D===i.BYTE&&(Y=i.R8I),D===i.SHORT&&(Y=i.R16I),D===i.INT&&(Y=i.R32I)),x===i.RG&&(D===i.FLOAT&&(Y=i.RG32F),D===i.HALF_FLOAT&&(Y=i.RG16F),D===i.UNSIGNED_BYTE&&(Y=i.RG8)),x===i.RG_INTEGER&&(D===i.UNSIGNED_BYTE&&(Y=i.RG8UI),D===i.UNSIGNED_SHORT&&(Y=i.RG16UI),D===i.UNSIGNED_INT&&(Y=i.RG32UI),D===i.BYTE&&(Y=i.RG8I),D===i.SHORT&&(Y=i.RG16I),D===i.INT&&(Y=i.RG32I)),x===i.RGB_INTEGER&&(D===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),D===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),D===i.UNSIGNED_INT&&(Y=i.RGB32UI),D===i.BYTE&&(Y=i.RGB8I),D===i.SHORT&&(Y=i.RGB16I),D===i.INT&&(Y=i.RGB32I)),x===i.RGBA_INTEGER&&(D===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),D===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),D===i.UNSIGNED_INT&&(Y=i.RGBA32UI),D===i.BYTE&&(Y=i.RGBA8I),D===i.SHORT&&(Y=i.RGBA16I),D===i.INT&&(Y=i.RGBA32I)),x===i.RGB&&(D===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),D===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),x===i.RGBA){const bt=$?ta:oe.getTransfer(q);D===i.FLOAT&&(Y=i.RGBA32F),D===i.HALF_FLOAT&&(Y=i.RGBA16F),D===i.UNSIGNED_BYTE&&(Y=bt===me?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function M(T,x){let D;return T?x===null||x===Hn||x===sr?D=i.DEPTH24_STENCIL8:x===Pn?D=i.DEPTH32F_STENCIL8:x===ir&&(D=i.DEPTH24_STENCIL8,Wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Hn||x===sr?D=i.DEPTH_COMPONENT24:x===Pn?D=i.DEPTH_COMPONENT32F:x===ir&&(D=i.DEPTH_COMPONENT16),D}function C(T,x){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==en&&T.minFilter!==hn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function A(T){const x=T.target;x.removeEventListener("dispose",A),_(x),x.isVideoTexture&&h.delete(x)}function P(T){const x=T.target;x.removeEventListener("dispose",P),B(x)}function _(T){const x=n.get(T);if(x.__webglInit===void 0)return;const D=T.source,q=u.get(D);if(q){const $=q[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&E(T),Object.keys(q).length===0&&u.delete(D)}n.remove(T)}function E(T){const x=n.get(T);i.deleteTexture(x.__webglTexture);const D=T.source,q=u.get(D);delete q[x.__cacheKey],a.memory.textures--}function B(T){const x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let $=0;$<x.__webglFramebuffer[q].length;$++)i.deleteFramebuffer(x.__webglFramebuffer[q][$]);else i.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)i.deleteFramebuffer(x.__webglFramebuffer[q]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const D=T.textures;for(let q=0,$=D.length;q<$;q++){const Y=n.get(D[q]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(D[q])}n.remove(T)}let R=0;function F(){R=0}function k(){const T=R;return T>=s.maxTextures&&Wt("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),R+=1,T}function X(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function O(T,x){const D=n.get(T);if(T.isVideoTexture&&vt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&D.__version!==T.version){const q=T.image;if(q===null)Wt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Wt("WebGLRenderer: Texture marked for update but image is incomplete");else{K(D,T,x);return}}else T.isExternalTexture&&(D.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+x)}function H(T,x){const D=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){K(D,T,x);return}else T.isExternalTexture&&(D.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+x)}function U(T,x){const D=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){K(D,T,x);return}e.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+x)}function it(T,x){const D=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&D.__version!==T.version){ot(D,T,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+x)}const Q={[go]:i.REPEAT,[ti]:i.CLAMP_TO_EDGE,[xo]:i.MIRRORED_REPEAT},gt={[en]:i.NEAREST,[Md]:i.NEAREST_MIPMAP_NEAREST,[pr]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[ba]:i.LINEAR_MIPMAP_NEAREST,[Vi]:i.LINEAR_MIPMAP_LINEAR},_t={[Ed]:i.NEVER,[Rd]:i.ALWAYS,[Td]:i.LESS,[Ml]:i.LEQUAL,[wd]:i.EQUAL,[Sl]:i.GEQUAL,[Ad]:i.GREATER,[Cd]:i.NOTEQUAL};function xt(T,x){if(x.type===Pn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===hn||x.magFilter===ba||x.magFilter===pr||x.magFilter===Vi||x.minFilter===hn||x.minFilter===ba||x.minFilter===pr||x.minFilter===Vi)&&Wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Q[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Q[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Q[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,gt[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,gt[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,_t[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===en||x.minFilter!==pr&&x.minFilter!==Vi||x.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const D=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ht(T,x){let D=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",A));const q=x.source;let $=u.get(q);$===void 0&&($={},u.set(q,$));const Y=X(x);if(Y!==T.__cacheKey){$[Y]===void 0&&($[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,D=!0),$[Y].usedTimes++;const bt=$[T.__cacheKey];bt!==void 0&&($[T.__cacheKey].usedTimes--,bt.usedTimes===0&&E(x)),T.__cacheKey=Y,T.__webglTexture=$[Y].texture}return D}function de(T,x,D){return Math.floor(Math.floor(T/D)/x)}function ge(T,x,D,q){const Y=T.updateRanges;if(Y.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,D,q,x.data);else{Y.sort((tt,rt)=>tt.start-rt.start);let bt=0;for(let tt=1;tt<Y.length;tt++){const rt=Y[bt],wt=Y[tt],Ct=rt.start+rt.count,yt=de(wt.start,x.width,4),jt=de(rt.start,x.width,4);wt.start<=Ct+1&&yt===jt&&de(wt.start+wt.count-1,x.width,4)===yt?rt.count=Math.max(rt.count,wt.start+wt.count-rt.start):(++bt,Y[bt]=wt)}Y.length=bt+1;const ht=i.getParameter(i.UNPACK_ROW_LENGTH),It=i.getParameter(i.UNPACK_SKIP_PIXELS),Bt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let tt=0,rt=Y.length;tt<rt;tt++){const wt=Y[tt],Ct=Math.floor(wt.start/4),yt=Math.ceil(wt.count/4),jt=Ct%x.width,I=Math.floor(Ct/x.width),ut=yt,at=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,jt),i.pixelStorei(i.UNPACK_SKIP_ROWS,I),e.texSubImage2D(i.TEXTURE_2D,0,jt,I,ut,at,D,q,x.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ht),i.pixelStorei(i.UNPACK_SKIP_PIXELS,It),i.pixelStorei(i.UNPACK_SKIP_ROWS,Bt)}}function K(T,x,D){let q=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=i.TEXTURE_3D);const $=Ht(T,x),Y=x.source;e.bindTexture(q,T.__webglTexture,i.TEXTURE0+D);const bt=n.get(Y);if(Y.version!==bt.__version||$===!0){e.activeTexture(i.TEXTURE0+D);const ht=oe.getPrimaries(oe.workingColorSpace),It=x.colorSpace===xi?null:oe.getPrimaries(x.colorSpace),Bt=x.colorSpace===xi||ht===It?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);let tt=y(x.image,!1,s.maxTextureSize);tt=Ot(x,tt);const rt=r.convert(x.format,x.colorSpace),wt=r.convert(x.type);let Ct=S(x.internalFormat,rt,wt,x.colorSpace,x.isVideoTexture);xt(q,x);let yt;const jt=x.mipmaps,I=x.isVideoTexture!==!0,ut=bt.__version===void 0||$===!0,at=Y.dataReady,St=C(x,tt);if(x.isDepthTexture)Ct=M(x.format===Wi,x.type),ut&&(I?e.texStorage2D(i.TEXTURE_2D,1,Ct,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,Ct,tt.width,tt.height,0,rt,wt,null));else if(x.isDataTexture)if(jt.length>0){I&&ut&&e.texStorage2D(i.TEXTURE_2D,St,Ct,jt[0].width,jt[0].height);for(let nt=0,Z=jt.length;nt<Z;nt++)yt=jt[nt],I?at&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,yt.width,yt.height,rt,wt,yt.data):e.texImage2D(i.TEXTURE_2D,nt,Ct,yt.width,yt.height,0,rt,wt,yt.data);x.generateMipmaps=!1}else I?(ut&&e.texStorage2D(i.TEXTURE_2D,St,Ct,tt.width,tt.height),at&&ge(x,tt,rt,wt)):e.texImage2D(i.TEXTURE_2D,0,Ct,tt.width,tt.height,0,rt,wt,tt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){I&&ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Ct,jt[0].width,jt[0].height,tt.depth);for(let nt=0,Z=jt.length;nt<Z;nt++)if(yt=jt[nt],x.format!==Ln)if(rt!==null)if(I){if(at)if(x.layerUpdates.size>0){const At=Cc(yt.width,yt.height,x.format,x.type);for(const Xt of x.layerUpdates){const be=yt.data.subarray(Xt*At/yt.data.BYTES_PER_ELEMENT,(Xt+1)*At/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,Xt,yt.width,yt.height,1,rt,be)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,yt.width,yt.height,tt.depth,rt,yt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,Ct,yt.width,yt.height,tt.depth,0,yt.data,0,0);else Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?at&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,yt.width,yt.height,tt.depth,rt,wt,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,Ct,yt.width,yt.height,tt.depth,0,rt,wt,yt.data)}else{I&&ut&&e.texStorage2D(i.TEXTURE_2D,St,Ct,jt[0].width,jt[0].height);for(let nt=0,Z=jt.length;nt<Z;nt++)yt=jt[nt],x.format!==Ln?rt!==null?I?at&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,yt.width,yt.height,rt,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,Ct,yt.width,yt.height,0,yt.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?at&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,yt.width,yt.height,rt,wt,yt.data):e.texImage2D(i.TEXTURE_2D,nt,Ct,yt.width,yt.height,0,rt,wt,yt.data)}else if(x.isDataArrayTexture)if(I){if(ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Ct,tt.width,tt.height,tt.depth),at)if(x.layerUpdates.size>0){const nt=Cc(tt.width,tt.height,x.format,x.type);for(const Z of x.layerUpdates){const At=tt.data.subarray(Z*nt/tt.data.BYTES_PER_ELEMENT,(Z+1)*nt/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,tt.width,tt.height,1,rt,wt,At)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,rt,wt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ct,tt.width,tt.height,tt.depth,0,rt,wt,tt.data);else if(x.isData3DTexture)I?(ut&&e.texStorage3D(i.TEXTURE_3D,St,Ct,tt.width,tt.height,tt.depth),at&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,rt,wt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,Ct,tt.width,tt.height,tt.depth,0,rt,wt,tt.data);else if(x.isFramebufferTexture){if(ut)if(I)e.texStorage2D(i.TEXTURE_2D,St,Ct,tt.width,tt.height);else{let nt=tt.width,Z=tt.height;for(let At=0;At<St;At++)e.texImage2D(i.TEXTURE_2D,At,Ct,nt,Z,0,rt,wt,null),nt>>=1,Z>>=1}}else if(jt.length>0){if(I&&ut){const nt=ct(jt[0]);e.texStorage2D(i.TEXTURE_2D,St,Ct,nt.width,nt.height)}for(let nt=0,Z=jt.length;nt<Z;nt++)yt=jt[nt],I?at&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,rt,wt,yt):e.texImage2D(i.TEXTURE_2D,nt,Ct,rt,wt,yt);x.generateMipmaps=!1}else if(I){if(ut){const nt=ct(tt);e.texStorage2D(i.TEXTURE_2D,St,Ct,nt.width,nt.height)}at&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt,wt,tt)}else e.texImage2D(i.TEXTURE_2D,0,Ct,rt,wt,tt);p(x)&&m(q),bt.__version=Y.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ot(T,x,D){if(x.image.length!==6)return;const q=Ht(T,x),$=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+D);const Y=n.get($);if($.version!==Y.__version||q===!0){e.activeTexture(i.TEXTURE0+D);const bt=oe.getPrimaries(oe.workingColorSpace),ht=x.colorSpace===xi?null:oe.getPrimaries(x.colorSpace),It=x.colorSpace===xi||bt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const Bt=x.isCompressedTexture||x.image[0].isCompressedTexture,tt=x.image[0]&&x.image[0].isDataTexture,rt=[];for(let Z=0;Z<6;Z++)!Bt&&!tt?rt[Z]=y(x.image[Z],!0,s.maxCubemapSize):rt[Z]=tt?x.image[Z].image:x.image[Z],rt[Z]=Ot(x,rt[Z]);const wt=rt[0],Ct=r.convert(x.format,x.colorSpace),yt=r.convert(x.type),jt=S(x.internalFormat,Ct,yt,x.colorSpace),I=x.isVideoTexture!==!0,ut=Y.__version===void 0||q===!0,at=$.dataReady;let St=C(x,wt);xt(i.TEXTURE_CUBE_MAP,x);let nt;if(Bt){I&&ut&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,jt,wt.width,wt.height);for(let Z=0;Z<6;Z++){nt=rt[Z].mipmaps;for(let At=0;At<nt.length;At++){const Xt=nt[At];x.format!==Ln?Ct!==null?I?at&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,At,0,0,Xt.width,Xt.height,Ct,Xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,At,jt,Xt.width,Xt.height,0,Xt.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,At,0,0,Xt.width,Xt.height,Ct,yt,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,At,jt,Xt.width,Xt.height,0,Ct,yt,Xt.data)}}}else{if(nt=x.mipmaps,I&&ut){nt.length>0&&St++;const Z=ct(rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,St,jt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(tt){I?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,rt[Z].width,rt[Z].height,Ct,yt,rt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,jt,rt[Z].width,rt[Z].height,0,Ct,yt,rt[Z].data);for(let At=0;At<nt.length;At++){const be=nt[At].image[Z].image;I?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,At+1,0,0,be.width,be.height,Ct,yt,be.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,At+1,jt,be.width,be.height,0,Ct,yt,be.data)}}else{I?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ct,yt,rt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,jt,Ct,yt,rt[Z]);for(let At=0;At<nt.length;At++){const Xt=nt[At];I?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,At+1,0,0,Ct,yt,Xt.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,At+1,jt,Ct,yt,Xt.image[Z])}}}p(x)&&m(i.TEXTURE_CUBE_MAP),Y.__version=$.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function lt(T,x,D,q,$,Y){const bt=r.convert(D.format,D.colorSpace),ht=r.convert(D.type),It=S(D.internalFormat,bt,ht,D.colorSpace),Bt=n.get(x),tt=n.get(D);if(tt.__renderTarget=x,!Bt.__hasExternalTextures){const rt=Math.max(1,x.width>>Y),wt=Math.max(1,x.height>>Y);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?e.texImage3D($,Y,It,rt,wt,x.depth,0,bt,ht,null):e.texImage2D($,Y,It,rt,wt,0,bt,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Ut(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,$,tt.__webglTexture,0,w(x)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,$,tt.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(T,x,D){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){const q=x.depthTexture,$=q&&q.isDepthTexture?q.type:null,Y=M(x.stencilBuffer,$),bt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ut(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,w(x),Y,x.width,x.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,w(x),Y,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Y,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,T)}else{const q=x.textures;for(let $=0;$<q.length;$++){const Y=q[$],bt=r.convert(Y.format,Y.colorSpace),ht=r.convert(Y.type),It=S(Y.internalFormat,bt,ht,Y.colorSpace);Ut(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,w(x),It,x.width,x.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,w(x),It,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,It,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Nt(T,x,D){const q=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(x.depthTexture);if($.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q){if($.__webglInit===void 0&&($.__webglInit=!0,x.depthTexture.addEventListener("dispose",A)),$.__webglTexture===void 0){$.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),xt(i.TEXTURE_CUBE_MAP,x.depthTexture);const Bt=r.convert(x.depthTexture.format),tt=r.convert(x.depthTexture.type);let rt;x.depthTexture.format===oi?rt=i.DEPTH_COMPONENT24:x.depthTexture.format===Wi&&(rt=i.DEPTH24_STENCIL8);for(let wt=0;wt<6;wt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,rt,x.width,x.height,0,Bt,tt,null)}}else O(x.depthTexture,0);const Y=$.__webglTexture,bt=w(x),ht=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+D:i.TEXTURE_2D,It=x.depthTexture.format===Wi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===oi)Ut(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,It,ht,Y,0,bt):i.framebufferTexture2D(i.FRAMEBUFFER,It,ht,Y,0);else if(x.depthTexture.format===Wi)Ut(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,It,ht,Y,0,bt):i.framebufferTexture2D(i.FRAMEBUFFER,It,ht,Y,0);else throw new Error("Unknown depthTexture format")}function Vt(T){const x=n.get(T),D=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const q=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){const $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",$)};q.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=q}if(T.depthTexture&&!x.__autoAllocateDepthBuffer)if(D)for(let q=0;q<6;q++)Nt(x.__webglFramebuffer[q],T,q);else{const q=T.texture.mipmaps;q&&q.length>0?Nt(x.__webglFramebuffer[0],T,0):Nt(x.__webglFramebuffer,T,0)}else if(D){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=i.createRenderbuffer(),Ft(x.__webglDepthbuffer[q],T,!1);else{const $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,Y)}}else{const q=T.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Ft(x.__webglDepthbuffer,T,!1);else{const $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,Y)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(T,x,D){const q=n.get(T);x!==void 0&&lt(q.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&Vt(T)}function qt(T){const x=T.texture,D=n.get(T),q=n.get(x);T.addEventListener("dispose",P);const $=T.textures,Y=T.isWebGLCubeRenderTarget===!0,bt=$.length>1;if(bt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=x.version,a.memory.textures++),Y){D.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer[ht]=[];for(let It=0;It<x.mipmaps.length;It++)D.__webglFramebuffer[ht][It]=i.createFramebuffer()}else D.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer=[];for(let ht=0;ht<x.mipmaps.length;ht++)D.__webglFramebuffer[ht]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(bt)for(let ht=0,It=$.length;ht<It;ht++){const Bt=n.get($[ht]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Ut(T)===!1){D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ht=0;ht<$.length;ht++){const It=$[ht];D.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[ht]);const Bt=r.convert(It.format,It.colorSpace),tt=r.convert(It.type),rt=S(It.internalFormat,Bt,tt,It.colorSpace,T.isXRRenderTarget===!0),wt=w(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,rt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,D.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),Ft(D.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),xt(i.TEXTURE_CUBE_MAP,x);for(let ht=0;ht<6;ht++)if(x.mipmaps&&x.mipmaps.length>0)for(let It=0;It<x.mipmaps.length;It++)lt(D.__webglFramebuffer[ht][It],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,It);else lt(D.__webglFramebuffer[ht],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);p(x)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ht=0,It=$.length;ht<It;ht++){const Bt=$[ht],tt=n.get(Bt);let rt=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(rt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,tt.__webglTexture),xt(rt,Bt),lt(D.__webglFramebuffer,T,Bt,i.COLOR_ATTACHMENT0+ht,rt,0),p(Bt)&&m(rt)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ht=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,q.__webglTexture),xt(ht,x),x.mipmaps&&x.mipmaps.length>0)for(let It=0;It<x.mipmaps.length;It++)lt(D.__webglFramebuffer[It],T,x,i.COLOR_ATTACHMENT0,ht,It);else lt(D.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,ht,0);p(x)&&m(ht),e.unbindTexture()}T.depthBuffer&&Vt(T)}function J(T){const x=T.textures;for(let D=0,q=x.length;D<q;D++){const $=x[D];if(p($)){const Y=v(T),bt=n.get($).__webglTexture;e.bindTexture(Y,bt),m(Y),e.unbindTexture()}}}const et=[],j=[];function dt(T){if(T.samples>0){if(Ut(T)===!1){const x=T.textures,D=T.width,q=T.height;let $=i.COLOR_BUFFER_BIT;const Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(T),ht=x.length>1;if(ht)for(let Bt=0;Bt<x.length;Bt++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);const It=T.texture.mipmaps;It&&It.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Bt=0;Bt<x.length;Bt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[Bt]);const tt=n.get(x[Bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,tt,0)}i.blitFramebuffer(0,0,D,q,0,0,D,q,$,i.NEAREST),l===!0&&(et.length=0,j.length=0,et.push(i.COLOR_ATTACHMENT0+Bt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(et.push(Y),j.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,j)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let Bt=0;Bt<x.length;Bt++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.RENDERBUFFER,bt.__webglColorRenderbuffer[Bt]);const tt=n.get(x[Bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.TEXTURE_2D,tt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function w(T){return Math.min(s.maxSamples,T.samples)}function Ut(T){const x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function vt(T){const x=a.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function Ot(T,x){const D=T.colorSpace,q=T.format,$=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||D!==Ts&&D!==xi&&(oe.getTransfer(D)===me?(q!==Ln||$!==vn)&&Wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ae("WebGLTextures: Unsupported texture color space:",D)),x}function ct(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.setTexture2D=O,this.setTexture2DArray=H,this.setTexture3D=U,this.setTextureCube=it,this.rebindTextures=xe,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=Ut,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Hx(i,t){function e(n,s=xi){let r;const a=oe.getTransfer(s);if(n===vn)return i.UNSIGNED_BYTE;if(n===ml)return i.UNSIGNED_SHORT_4_4_4_4;if(n===gl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===mh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===gh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===fh)return i.BYTE;if(n===ph)return i.SHORT;if(n===ir)return i.UNSIGNED_SHORT;if(n===pl)return i.INT;if(n===Hn)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===ai)return i.HALF_FLOAT;if(n===xh)return i.ALPHA;if(n===_h)return i.RGB;if(n===Ln)return i.RGBA;if(n===oi)return i.DEPTH_COMPONENT;if(n===Wi)return i.DEPTH_STENCIL;if(n===xl)return i.RED;if(n===_l)return i.RED_INTEGER;if(n===Es)return i.RG;if(n===vl)return i.RG_INTEGER;if(n===yl)return i.RGBA_INTEGER;if(n===Xr||n===qr||n===Yr||n===Zr)if(a===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Xr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Xr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_o||n===vo||n===yo||n===Mo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_o)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===So||n===bo||n===Eo||n===To||n===wo||n===Ao||n===Co)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===So||n===bo)return a===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Eo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===To)return r.COMPRESSED_R11_EAC;if(n===wo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ao)return r.COMPRESSED_RG11_EAC;if(n===Co)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ro||n===Po||n===Lo||n===Io||n===Do||n===No||n===Uo||n===Fo||n===Oo||n===Bo||n===zo||n===ko||n===Go||n===Ho)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ro)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Po)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Lo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Io)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Do)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===No)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Uo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ko)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Go)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ho)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vo||n===Wo||n===Xo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Vo)return a===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qo||n===Yo||n===Zo||n===Ko)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===qo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Yo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ko)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===sr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Vx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wx=`
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

}`;class Xx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Rh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Wn({vertexShader:Vx,fragmentShader:Wx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new zt(new yi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qx extends Is{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const y=typeof XRWebGLBinding<"u",p=new Xx,m={},v=e.getContextAttributes();let S=null,M=null;const C=[],A=[],P=new st;let _=null;const E=new _n;E.viewport=new Ue;const B=new _n;B.viewport=new Ue;const R=[E,B],F=new np;let k=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ot=C[K];return ot===void 0&&(ot=new La,C[K]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(K){let ot=C[K];return ot===void 0&&(ot=new La,C[K]=ot),ot.getGripSpace()},this.getHand=function(K){let ot=C[K];return ot===void 0&&(ot=new La,C[K]=ot),ot.getHandSpace()};function O(K){const ot=A.indexOf(K.inputSource);if(ot===-1)return;const lt=C[ot];lt!==void 0&&(lt.update(K.inputSource,K.frame,c||a),lt.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",U);for(let K=0;K<C.length;K++){const ot=A[K];ot!==null&&(A[K]=null,C[K].disconnect(ot))}k=null,X=null,p.reset();for(const K in m)delete m[K];t.setRenderTarget(S),f=null,u=null,d=null,s=null,M=null,ge.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",H),s.addEventListener("inputsourceschange",U),v.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(P),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let lt=null,Ft=null,Nt=null;v.depth&&(Nt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=v.stencil?Wi:oi,Ft=v.stencil?sr:Hn);const Vt={colorFormat:e.RGBA8,depthFormat:Nt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Vt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new Gn(u.textureWidth,u.textureHeight,{format:Ln,type:vn,depthTexture:new ar(u.textureWidth,u.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const lt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,lt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Gn(f.framebufferWidth,f.framebufferHeight,{format:Ln,type:vn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ge.setContext(s),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function U(K){for(let ot=0;ot<K.removed.length;ot++){const lt=K.removed[ot],Ft=A.indexOf(lt);Ft>=0&&(A[Ft]=null,C[Ft].disconnect(lt))}for(let ot=0;ot<K.added.length;ot++){const lt=K.added[ot];let Ft=A.indexOf(lt);if(Ft===-1){for(let Vt=0;Vt<C.length;Vt++)if(Vt>=A.length){A.push(lt),Ft=Vt;break}else if(A[Vt]===null){A[Vt]=lt,Ft=Vt;break}if(Ft===-1)break}const Nt=C[Ft];Nt&&Nt.connect(lt)}}const it=new L,Q=new L;function gt(K,ot,lt){it.setFromMatrixPosition(ot.matrixWorld),Q.setFromMatrixPosition(lt.matrixWorld);const Ft=it.distanceTo(Q),Nt=ot.projectionMatrix.elements,Vt=lt.projectionMatrix.elements,xe=Nt[14]/(Nt[10]-1),qt=Nt[14]/(Nt[10]+1),J=(Nt[9]+1)/Nt[5],et=(Nt[9]-1)/Nt[5],j=(Nt[8]-1)/Nt[0],dt=(Vt[8]+1)/Vt[0],w=xe*j,Ut=xe*dt,vt=Ft/(-j+dt),Ot=vt*-j;if(ot.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ot),K.translateZ(vt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Nt[10]===-1)K.projectionMatrix.copy(ot.projectionMatrix),K.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const ct=xe+vt,T=qt+vt,x=w-Ot,D=Ut+(Ft-Ot),q=J*qt/T*ct,$=et*qt/T*ct;K.projectionMatrix.makePerspective(x,D,q,$,ct,T),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function _t(K,ot){ot===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ot.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ot=K.near,lt=K.far;p.texture!==null&&(p.depthNear>0&&(ot=p.depthNear),p.depthFar>0&&(lt=p.depthFar)),F.near=B.near=E.near=ot,F.far=B.far=E.far=lt,(k!==F.near||X!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),k=F.near,X=F.far),F.layers.mask=K.layers.mask|6,E.layers.mask=F.layers.mask&-5,B.layers.mask=F.layers.mask&-3;const Ft=K.parent,Nt=F.cameras;_t(F,Ft);for(let Vt=0;Vt<Nt.length;Vt++)_t(Nt[Vt],Ft);Nt.length===2?gt(F,E,B):F.projectionMatrix.copy(E.projectionMatrix),xt(K,F,Ft)};function xt(K,ot,lt){lt===null?K.matrix.copy(ot.matrixWorld):(K.matrix.copy(lt.matrixWorld),K.matrix.invert(),K.matrix.multiply(ot.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ot.projectionMatrix),K.projectionMatrixInverse.copy(ot.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Jo*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(K){return m[K]};let Ht=null;function de(K,ot){if(h=ot.getViewerPose(c||a),g=ot,h!==null){const lt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let Ft=!1;lt.length!==F.cameras.length&&(F.cameras.length=0,Ft=!0);for(let qt=0;qt<lt.length;qt++){const J=lt[qt];let et=null;if(f!==null)et=f.getViewport(J);else{const dt=d.getViewSubImage(u,J);et=dt.viewport,qt===0&&(t.setRenderTargetTextures(M,dt.colorTexture,dt.depthStencilTexture),t.setRenderTarget(M))}let j=R[qt];j===void 0&&(j=new _n,j.layers.enable(qt),j.viewport=new Ue,R[qt]=j),j.matrix.fromArray(J.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(J.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(et.x,et.y,et.width,et.height),qt===0&&(F.matrix.copy(j.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ft===!0&&F.cameras.push(j)}const Nt=s.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=n.getBinding();const qt=d.getDepthInformation(lt[0]);qt&&qt.isValid&&qt.texture&&p.init(qt,s.renderState)}if(Nt&&Nt.includes("camera-access")&&y){t.state.unbindTexture(),d=n.getBinding();for(let qt=0;qt<lt.length;qt++){const J=lt[qt].camera;if(J){let et=m[J];et||(et=new Rh,m[J]=et);const j=d.getCameraImage(J);et.sourceTexture=j}}}}for(let lt=0;lt<C.length;lt++){const Ft=A[lt],Nt=C[lt];Ft!==null&&Nt!==void 0&&Nt.update(Ft,ot,c||a)}Ht&&Ht(K,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),g=null}const ge=new Gh;ge.setAnimationLoop(de),this.setAnimationLoop=function(K){Ht=K},this.dispose=function(){}}}const Li=new Vn,Yx=new ce;function Zx(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Bh(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,v,S,M){m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,M)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,v,S):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===pn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===pn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const v=t.get(m),S=v.envMap,M=v.envMapRotation;S&&(p.envMap.value=S,Li.copy(M),Li.x*=-1,Li.y*=-1,Li.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),p.envMapRotation.value.setFromMatrix4(Yx.makeRotationFromEuler(Li)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=S*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===pn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){const v=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Kx(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){const M=S.program;n.uniformBlockBinding(v,M)}function c(v,S){let M=s[v.id];M===void 0&&(g(v),M=h(v),s[v.id]=M,v.addEventListener("dispose",p));const C=S.program;n.updateUBOMapping(v,C);const A=t.render.frame;r[v.id]!==A&&(u(v),r[v.id]=A)}function h(v){const S=d();v.__bindingPointIndex=S;const M=i.createBuffer(),C=v.__size,A=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,C,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,M),M}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return ae("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const S=s[v.id],M=v.uniforms,C=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let A=0,P=M.length;A<P;A++){const _=Array.isArray(M[A])?M[A]:[M[A]];for(let E=0,B=_.length;E<B;E++){const R=_[E];if(f(R,A,E,C)===!0){const F=R.__offset,k=Array.isArray(R.value)?R.value:[R.value];let X=0;for(let O=0;O<k.length;O++){const H=k[O],U=y(H);typeof H=="number"||typeof H=="boolean"?(R.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,F+X,R.__data)):H.isMatrix3?(R.__data[0]=H.elements[0],R.__data[1]=H.elements[1],R.__data[2]=H.elements[2],R.__data[3]=0,R.__data[4]=H.elements[3],R.__data[5]=H.elements[4],R.__data[6]=H.elements[5],R.__data[7]=0,R.__data[8]=H.elements[6],R.__data[9]=H.elements[7],R.__data[10]=H.elements[8],R.__data[11]=0):(H.toArray(R.__data,X),X+=U.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,S,M,C){const A=v.value,P=S+"_"+M;if(C[P]===void 0)return typeof A=="number"||typeof A=="boolean"?C[P]=A:C[P]=A.clone(),!0;{const _=C[P];if(typeof A=="number"||typeof A=="boolean"){if(_!==A)return C[P]=A,!0}else if(_.equals(A)===!1)return _.copy(A),!0}return!1}function g(v){const S=v.uniforms;let M=0;const C=16;for(let P=0,_=S.length;P<_;P++){const E=Array.isArray(S[P])?S[P]:[S[P]];for(let B=0,R=E.length;B<R;B++){const F=E[B],k=Array.isArray(F.value)?F.value:[F.value];for(let X=0,O=k.length;X<O;X++){const H=k[X],U=y(H),it=M%C,Q=it%U.boundary,gt=it+Q;M+=Q,gt!==0&&C-gt<U.storage&&(M+=C-gt),F.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=U.storage}}}const A=M%C;return A>0&&(M+=C-A),v.__size=M,v.__cache={},this}function y(v){const S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?Wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Wt("WebGLRenderer: Unsupported uniform value type.",v),S}function p(v){const S=v.target;S.removeEventListener("dispose",p);const M=a.indexOf(S.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function m(){for(const v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}const $x=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Un=null;function Jx(){return Un===null&&(Un=new Ah($x,16,16,Es,ai),Un.name="DFG_LUT",Un.minFilter=hn,Un.magFilter=hn,Un.wrapS=ti,Un.wrapT=ti,Un.generateMipmaps=!1,Un.needsUpdate=!0),Un}class jx{constructor(t={}){const{canvas:e=Ld(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=vn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const y=f,p=new Set([yl,vl,_l]),m=new Set([vn,Hn,ir,sr,ml,gl]),v=new Uint32Array(4),S=new Int32Array(4);let M=null,C=null;const A=[],P=[];let _=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let B=!1;this._outputColorSpace=cn;let R=0,F=0,k=null,X=-1,O=null;const H=new Ue,U=new Ue;let it=null;const Q=new Gt(0);let gt=0,_t=e.width,xt=e.height,Ht=1,de=null,ge=null;const K=new Ue(0,0,_t,xt),ot=new Ue(0,0,_t,xt);let lt=!1;const Ft=new Tl;let Nt=!1,Vt=!1;const xe=new ce,qt=new L,J=new Ue,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let j=!1;function dt(){return k===null?Ht:1}let w=n;function Ut(b,N){return e.getContext(b,N)}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ul}`),e.addEventListener("webglcontextlost",At,!1),e.addEventListener("webglcontextrestored",Xt,!1),e.addEventListener("webglcontextcreationerror",be,!1),w===null){const N="webgl2";if(w=Ut(N,b),w===null)throw Ut(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw ae("WebGLRenderer: "+b.message),b}let vt,Ot,ct,T,x,D,q,$,Y,bt,ht,It,Bt,tt,rt,wt,Ct,yt,jt,I,ut,at,St;function nt(){vt=new j0(w),vt.init(),ut=new Hx(w,vt),Ot=new W0(w,vt,t,ut),ct=new kx(w,vt),Ot.reversedDepthBuffer&&u&&ct.buffers.depth.setReversed(!0),T=new eg(w),x=new wx,D=new Gx(w,vt,ct,x,Ot,ut,T),q=new J0(E),$=new ap(w),at=new H0(w,$),Y=new Q0(w,$,T,at),bt=new ig(w,Y,$,at,T),yt=new ng(w,Ot,D),rt=new X0(x),ht=new Tx(E,q,vt,Ot,at,rt),It=new Zx(E,x),Bt=new Cx,tt=new Nx(vt),Ct=new G0(E,q,ct,bt,g,l),wt=new zx(E,bt,Ot),St=new Kx(w,T,Ot,ct),jt=new V0(w,vt,T),I=new tg(w,vt,T),T.programs=ht.programs,E.capabilities=Ot,E.extensions=vt,E.properties=x,E.renderLists=Bt,E.shadowMap=wt,E.state=ct,E.info=T}nt(),y!==vn&&(_=new rg(y,e.width,e.height,s,r));const Z=new qx(E,w);this.xr=Z,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const b=vt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=vt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Ht},this.setPixelRatio=function(b){b!==void 0&&(Ht=b,this.setSize(_t,xt,!1))},this.getSize=function(b){return b.set(_t,xt)},this.setSize=function(b,N,W=!0){if(Z.isPresenting){Wt("WebGLRenderer: Can't change size while VR device is presenting.");return}_t=b,xt=N,e.width=Math.floor(b*Ht),e.height=Math.floor(N*Ht),W===!0&&(e.style.width=b+"px",e.style.height=N+"px"),_!==null&&_.setSize(e.width,e.height),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(_t*Ht,xt*Ht).floor()},this.setDrawingBufferSize=function(b,N,W){_t=b,xt=N,Ht=W,e.width=Math.floor(b*W),e.height=Math.floor(N*W),this.setViewport(0,0,b,N)},this.setEffects=function(b){if(y===vn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let N=0;N<b.length;N++)if(b[N].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(H)},this.getViewport=function(b){return b.copy(K)},this.setViewport=function(b,N,W,G){b.isVector4?K.set(b.x,b.y,b.z,b.w):K.set(b,N,W,G),ct.viewport(H.copy(K).multiplyScalar(Ht).round())},this.getScissor=function(b){return b.copy(ot)},this.setScissor=function(b,N,W,G){b.isVector4?ot.set(b.x,b.y,b.z,b.w):ot.set(b,N,W,G),ct.scissor(U.copy(ot).multiplyScalar(Ht).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(b){ct.setScissorTest(lt=b)},this.setOpaqueSort=function(b){de=b},this.setTransparentSort=function(b){ge=b},this.getClearColor=function(b){return b.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(b=!0,N=!0,W=!0){let G=0;if(b){let z=!1;if(k!==null){const pt=k.texture.format;z=p.has(pt)}if(z){const pt=k.texture.type,Mt=m.has(pt),mt=Ct.getClearColor(),Rt=Ct.getClearAlpha(),Lt=mt.r,Zt=mt.g,Qt=mt.b;Mt?(v[0]=Lt,v[1]=Zt,v[2]=Qt,v[3]=Rt,w.clearBufferuiv(w.COLOR,0,v)):(S[0]=Lt,S[1]=Zt,S[2]=Qt,S[3]=Rt,w.clearBufferiv(w.COLOR,0,S))}else G|=w.COLOR_BUFFER_BIT}N&&(G|=w.DEPTH_BUFFER_BIT),W&&(G|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&w.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",At,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",be,!1),Ct.dispose(),Bt.dispose(),tt.dispose(),x.dispose(),q.dispose(),bt.dispose(),at.dispose(),St.dispose(),ht.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Ol),Z.removeEventListener("sessionend",Bl),Ei.stop()};function At(b){b.preventDefault(),na("WebGLRenderer: Context Lost."),B=!0}function Xt(){na("WebGLRenderer: Context Restored."),B=!1;const b=T.autoReset,N=wt.enabled,W=wt.autoUpdate,G=wt.needsUpdate,z=wt.type;nt(),T.autoReset=b,wt.enabled=N,wt.autoUpdate=W,wt.needsUpdate=G,wt.type=z}function be(b){ae("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function fe(b){const N=b.target;N.removeEventListener("dispose",fe),qn(N)}function qn(b){Yn(b),x.remove(b)}function Yn(b){const N=x.get(b).programs;N!==void 0&&(N.forEach(function(W){ht.releaseProgram(W)}),b.isShaderMaterial&&ht.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,W,G,z,pt){N===null&&(N=et);const Mt=z.isMesh&&z.matrixWorld.determinant()<0,mt=qu(b,N,W,G,z);ct.setMaterial(G,Mt);let Rt=W.index,Lt=1;if(G.wireframe===!0){if(Rt=Y.getWireframeAttribute(W),Rt===void 0)return;Lt=2}const Zt=W.drawRange,Qt=W.attributes.position;let Dt=Zt.start*Lt,_e=(Zt.start+Zt.count)*Lt;pt!==null&&(Dt=Math.max(Dt,pt.start*Lt),_e=Math.min(_e,(pt.start+pt.count)*Lt)),Rt!==null?(Dt=Math.max(Dt,0),_e=Math.min(_e,Rt.count)):Qt!=null&&(Dt=Math.max(Dt,0),_e=Math.min(_e,Qt.count));const Fe=_e-Dt;if(Fe<0||Fe===1/0)return;at.setup(z,G,mt,W,Rt);let De,ve=jt;if(Rt!==null&&(De=$.get(Rt),ve=I,ve.setIndex(De)),z.isMesh)G.wireframe===!0?(ct.setLineWidth(G.wireframeLinewidth*dt()),ve.setMode(w.LINES)):ve.setMode(w.TRIANGLES);else if(z.isLine){let nn=G.linewidth;nn===void 0&&(nn=1),ct.setLineWidth(nn*dt()),z.isLineSegments?ve.setMode(w.LINES):z.isLineLoop?ve.setMode(w.LINE_LOOP):ve.setMode(w.LINE_STRIP)}else z.isPoints?ve.setMode(w.POINTS):z.isSprite&&ve.setMode(w.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ia("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ve.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))ve.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const nn=z._multiDrawStarts,Pt=z._multiDrawCounts,mn=z._multiDrawCount,le=Rt?$.get(Rt).bytesPerElement:1,Tn=x.get(G).currentProgram.getUniforms();for(let Dn=0;Dn<mn;Dn++)Tn.setValue(w,"_gl_DrawID",Dn),ve.render(nn[Dn]/le,Pt[Dn])}else if(z.isInstancedMesh)ve.renderInstances(Dt,Fe,z.count);else if(W.isInstancedBufferGeometry){const nn=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Pt=Math.min(W.instanceCount,nn);ve.renderInstances(Dt,Fe,Pt)}else ve.render(Dt,Fe)};function Fl(b,N,W){b.transparent===!0&&b.side===Ye&&b.forceSinglePass===!1?(b.side=pn,b.needsUpdate=!0,dr(b,N,W),b.side=Si,b.needsUpdate=!0,dr(b,N,W),b.side=Ye):dr(b,N,W)}this.compile=function(b,N,W=null){W===null&&(W=b),C=tt.get(W),C.init(N),P.push(C),W.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(C.pushLight(z),z.castShadow&&C.pushShadow(z))}),b!==W&&b.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(C.pushLight(z),z.castShadow&&C.pushShadow(z))}),C.setupLights();const G=new Set;return b.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const pt=z.material;if(pt)if(Array.isArray(pt))for(let Mt=0;Mt<pt.length;Mt++){const mt=pt[Mt];Fl(mt,W,z),G.add(mt)}else Fl(pt,W,z),G.add(pt)}),C=P.pop(),G},this.compileAsync=function(b,N,W=null){const G=this.compile(b,N,W);return new Promise(z=>{function pt(){if(G.forEach(function(Mt){x.get(Mt).currentProgram.isReady()&&G.delete(Mt)}),G.size===0){z(b);return}setTimeout(pt,10)}vt.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let va=null;function Xu(b){va&&va(b)}function Ol(){Ei.stop()}function Bl(){Ei.start()}const Ei=new Gh;Ei.setAnimationLoop(Xu),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(b){va=b,Z.setAnimationLoop(b),b===null?Ei.stop():Ei.start()},Z.addEventListener("sessionstart",Ol),Z.addEventListener("sessionend",Bl),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;const W=Z.enabled===!0&&Z.isPresenting===!0,G=_!==null&&(k===null||W)&&_.begin(E,k);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(_===null||_.isCompositing()===!1)&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(N),N=Z.getCamera()),b.isScene===!0&&b.onBeforeRender(E,b,N,k),C=tt.get(b,P.length),C.init(N),P.push(C),xe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ft.setFromProjectionMatrix(xe,zn,N.reversedDepth),Vt=this.localClippingEnabled,Nt=rt.init(this.clippingPlanes,Vt),M=Bt.get(b,A.length),M.init(),A.push(M),Z.enabled===!0&&Z.isPresenting===!0){const Mt=E.xr.getDepthSensingMesh();Mt!==null&&ya(Mt,N,-1/0,E.sortObjects)}ya(b,N,0,E.sortObjects),M.finish(),E.sortObjects===!0&&M.sort(de,ge),j=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,j&&Ct.addToRenderList(M,b),this.info.render.frame++,Nt===!0&&rt.beginShadows();const z=C.state.shadowsArray;if(wt.render(z,b,N),Nt===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&_.hasRenderPass())===!1){const Mt=M.opaque,mt=M.transmissive;if(C.setupLights(),N.isArrayCamera){const Rt=N.cameras;if(mt.length>0)for(let Lt=0,Zt=Rt.length;Lt<Zt;Lt++){const Qt=Rt[Lt];kl(Mt,mt,b,Qt)}j&&Ct.render(b);for(let Lt=0,Zt=Rt.length;Lt<Zt;Lt++){const Qt=Rt[Lt];zl(M,b,Qt,Qt.viewport)}}else mt.length>0&&kl(Mt,mt,b,N),j&&Ct.render(b),zl(M,b,N)}k!==null&&F===0&&(D.updateMultisampleRenderTarget(k),D.updateRenderTargetMipmap(k)),G&&_.end(E),b.isScene===!0&&b.onAfterRender(E,b,N),at.resetDefaultState(),X=-1,O=null,P.pop(),P.length>0?(C=P[P.length-1],Nt===!0&&rt.setGlobalState(E.clippingPlanes,C.state.camera)):C=null,A.pop(),A.length>0?M=A[A.length-1]:M=null};function ya(b,N,W,G){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)C.pushLight(b),b.castShadow&&C.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ft.intersectsSprite(b)){G&&J.setFromMatrixPosition(b.matrixWorld).applyMatrix4(xe);const Mt=bt.update(b),mt=b.material;mt.visible&&M.push(b,Mt,mt,W,J.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ft.intersectsObject(b))){const Mt=bt.update(b),mt=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),J.copy(b.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),J.copy(Mt.boundingSphere.center)),J.applyMatrix4(b.matrixWorld).applyMatrix4(xe)),Array.isArray(mt)){const Rt=Mt.groups;for(let Lt=0,Zt=Rt.length;Lt<Zt;Lt++){const Qt=Rt[Lt],Dt=mt[Qt.materialIndex];Dt&&Dt.visible&&M.push(b,Mt,Dt,W,J.z,Qt)}}else mt.visible&&M.push(b,Mt,mt,W,J.z,null)}}const pt=b.children;for(let Mt=0,mt=pt.length;Mt<mt;Mt++)ya(pt[Mt],N,W,G)}function zl(b,N,W,G){const{opaque:z,transmissive:pt,transparent:Mt}=b;C.setupLightsView(W),Nt===!0&&rt.setGlobalState(E.clippingPlanes,W),G&&ct.viewport(H.copy(G)),z.length>0&&ur(z,N,W),pt.length>0&&ur(pt,N,W),Mt.length>0&&ur(Mt,N,W),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function kl(b,N,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[G.id]===void 0){const Dt=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[G.id]=new Gn(1,1,{generateMipmaps:!0,type:Dt?ai:vn,minFilter:Vi,samples:Math.max(4,Ot.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace})}const pt=C.state.transmissionRenderTarget[G.id],Mt=G.viewport||H;pt.setSize(Mt.z*E.transmissionResolutionScale,Mt.w*E.transmissionResolutionScale);const mt=E.getRenderTarget(),Rt=E.getActiveCubeFace(),Lt=E.getActiveMipmapLevel();E.setRenderTarget(pt),E.getClearColor(Q),gt=E.getClearAlpha(),gt<1&&E.setClearColor(16777215,.5),E.clear(),j&&Ct.render(W);const Zt=E.toneMapping;E.toneMapping=kn;const Qt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),C.setupLightsView(G),Nt===!0&&rt.setGlobalState(E.clippingPlanes,G),ur(b,W,G),D.updateMultisampleRenderTarget(pt),D.updateRenderTargetMipmap(pt),vt.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let _e=0,Fe=N.length;_e<Fe;_e++){const De=N[_e],{object:ve,geometry:nn,material:Pt,group:mn}=De;if(Pt.side===Ye&&ve.layers.test(G.layers)){const le=Pt.side;Pt.side=pn,Pt.needsUpdate=!0,Gl(ve,W,G,nn,Pt,mn),Pt.side=le,Pt.needsUpdate=!0,Dt=!0}}Dt===!0&&(D.updateMultisampleRenderTarget(pt),D.updateRenderTargetMipmap(pt))}E.setRenderTarget(mt,Rt,Lt),E.setClearColor(Q,gt),Qt!==void 0&&(G.viewport=Qt),E.toneMapping=Zt}function ur(b,N,W){const G=N.isScene===!0?N.overrideMaterial:null;for(let z=0,pt=b.length;z<pt;z++){const Mt=b[z],{object:mt,geometry:Rt,group:Lt}=Mt;let Zt=Mt.material;Zt.allowOverride===!0&&G!==null&&(Zt=G),mt.layers.test(W.layers)&&Gl(mt,N,W,Rt,Zt,Lt)}}function Gl(b,N,W,G,z,pt){b.onBeforeRender(E,N,W,G,z,pt),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),z.onBeforeRender(E,N,W,G,b,pt),z.transparent===!0&&z.side===Ye&&z.forceSinglePass===!1?(z.side=pn,z.needsUpdate=!0,E.renderBufferDirect(W,N,G,z,b,pt),z.side=Si,z.needsUpdate=!0,E.renderBufferDirect(W,N,G,z,b,pt),z.side=Ye):E.renderBufferDirect(W,N,G,z,b,pt),b.onAfterRender(E,N,W,G,z,pt)}function dr(b,N,W){N.isScene!==!0&&(N=et);const G=x.get(b),z=C.state.lights,pt=C.state.shadowsArray,Mt=z.state.version,mt=ht.getParameters(b,z.state,pt,N,W),Rt=ht.getProgramCacheKey(mt);let Lt=G.programs;G.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?N.environment:null,G.fog=N.fog;const Zt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;G.envMap=q.get(b.envMap||G.environment,Zt),G.envMapRotation=G.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Lt===void 0&&(b.addEventListener("dispose",fe),Lt=new Map,G.programs=Lt);let Qt=Lt.get(Rt);if(Qt!==void 0){if(G.currentProgram===Qt&&G.lightsStateVersion===Mt)return Vl(b,mt),Qt}else mt.uniforms=ht.getUniforms(b),b.onBeforeCompile(mt,E),Qt=ht.acquireProgram(mt,Rt),Lt.set(Rt,Qt),G.uniforms=mt.uniforms;const Dt=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Dt.clippingPlanes=rt.uniform),Vl(b,mt),G.needsLights=Zu(b),G.lightsStateVersion=Mt,G.needsLights&&(Dt.ambientLightColor.value=z.state.ambient,Dt.lightProbe.value=z.state.probe,Dt.directionalLights.value=z.state.directional,Dt.directionalLightShadows.value=z.state.directionalShadow,Dt.spotLights.value=z.state.spot,Dt.spotLightShadows.value=z.state.spotShadow,Dt.rectAreaLights.value=z.state.rectArea,Dt.ltc_1.value=z.state.rectAreaLTC1,Dt.ltc_2.value=z.state.rectAreaLTC2,Dt.pointLights.value=z.state.point,Dt.pointLightShadows.value=z.state.pointShadow,Dt.hemisphereLights.value=z.state.hemi,Dt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Dt.spotLightMatrix.value=z.state.spotLightMatrix,Dt.spotLightMap.value=z.state.spotLightMap,Dt.pointShadowMatrix.value=z.state.pointShadowMatrix),G.currentProgram=Qt,G.uniformsList=null,Qt}function Hl(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=Kr.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function Vl(b,N){const W=x.get(b);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function qu(b,N,W,G,z){N.isScene!==!0&&(N=et),D.resetTextureUnits();const pt=N.fog,Mt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?N.environment:null,mt=k===null?E.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Ts,Rt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Lt=q.get(G.envMap||Mt,Rt),Zt=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Qt=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Dt=!!W.morphAttributes.position,_e=!!W.morphAttributes.normal,Fe=!!W.morphAttributes.color;let De=kn;G.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(De=E.toneMapping);const ve=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,nn=ve!==void 0?ve.length:0,Pt=x.get(G),mn=C.state.lights;if(Nt===!0&&(Vt===!0||b!==O)){const Xe=b===O&&G.id===X;rt.setState(G,b,Xe)}let le=!1;G.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==mn.state.version||Pt.outputColorSpace!==mt||z.isBatchedMesh&&Pt.batching===!1||!z.isBatchedMesh&&Pt.batching===!0||z.isBatchedMesh&&Pt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Pt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Pt.instancing===!1||!z.isInstancedMesh&&Pt.instancing===!0||z.isSkinnedMesh&&Pt.skinning===!1||!z.isSkinnedMesh&&Pt.skinning===!0||z.isInstancedMesh&&Pt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Pt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Pt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Pt.instancingMorph===!1&&z.morphTexture!==null||Pt.envMap!==Lt||G.fog===!0&&Pt.fog!==pt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==rt.numPlanes||Pt.numIntersection!==rt.numIntersection)||Pt.vertexAlphas!==Zt||Pt.vertexTangents!==Qt||Pt.morphTargets!==Dt||Pt.morphNormals!==_e||Pt.morphColors!==Fe||Pt.toneMapping!==De||Pt.morphTargetsCount!==nn)&&(le=!0):(le=!0,Pt.__version=G.version);let Tn=Pt.currentProgram;le===!0&&(Tn=dr(G,N,z));let Dn=!1,Ti=!1,Ki=!1;const Me=Tn.getUniforms(),Ze=Pt.uniforms;if(ct.useProgram(Tn.program)&&(Dn=!0,Ti=!0,Ki=!0),G.id!==X&&(X=G.id,Ti=!0),Dn||O!==b){ct.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Me.setValue(w,"projectionMatrix",b.projectionMatrix),Me.setValue(w,"viewMatrix",b.matrixWorldInverse);const ci=Me.map.cameraPosition;ci!==void 0&&ci.setValue(w,qt.setFromMatrixPosition(b.matrixWorld)),Ot.logarithmicDepthBuffer&&Me.setValue(w,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Me.setValue(w,"isOrthographic",b.isOrthographicCamera===!0),O!==b&&(O=b,Ti=!0,Ki=!0)}if(Pt.needsLights&&(mn.state.directionalShadowMap.length>0&&Me.setValue(w,"directionalShadowMap",mn.state.directionalShadowMap,D),mn.state.spotShadowMap.length>0&&Me.setValue(w,"spotShadowMap",mn.state.spotShadowMap,D),mn.state.pointShadowMap.length>0&&Me.setValue(w,"pointShadowMap",mn.state.pointShadowMap,D)),z.isSkinnedMesh){Me.setOptional(w,z,"bindMatrix"),Me.setOptional(w,z,"bindMatrixInverse");const Xe=z.skeleton;Xe&&(Xe.boneTexture===null&&Xe.computeBoneTexture(),Me.setValue(w,"boneTexture",Xe.boneTexture,D))}z.isBatchedMesh&&(Me.setOptional(w,z,"batchingTexture"),Me.setValue(w,"batchingTexture",z._matricesTexture,D),Me.setOptional(w,z,"batchingIdTexture"),Me.setValue(w,"batchingIdTexture",z._indirectTexture,D),Me.setOptional(w,z,"batchingColorTexture"),z._colorsTexture!==null&&Me.setValue(w,"batchingColorTexture",z._colorsTexture,D));const li=W.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&yt.update(z,W,Tn),(Ti||Pt.receiveShadow!==z.receiveShadow)&&(Pt.receiveShadow=z.receiveShadow,Me.setValue(w,"receiveShadow",z.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&N.environment!==null&&(Ze.envMapIntensity.value=N.environmentIntensity),Ze.dfgLUT!==void 0&&(Ze.dfgLUT.value=Jx()),Ti&&(Me.setValue(w,"toneMappingExposure",E.toneMappingExposure),Pt.needsLights&&Yu(Ze,Ki),pt&&G.fog===!0&&It.refreshFogUniforms(Ze,pt),It.refreshMaterialUniforms(Ze,G,Ht,xt,C.state.transmissionRenderTarget[b.id]),Kr.upload(w,Hl(Pt),Ze,D)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Kr.upload(w,Hl(Pt),Ze,D),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Me.setValue(w,"center",z.center),Me.setValue(w,"modelViewMatrix",z.modelViewMatrix),Me.setValue(w,"normalMatrix",z.normalMatrix),Me.setValue(w,"modelMatrix",z.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Xe=G.uniformsGroups;for(let ci=0,$i=Xe.length;ci<$i;ci++){const Wl=Xe[ci];St.update(Wl,Tn),St.bind(Wl,Tn)}}return Tn}function Yu(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function Zu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(b,N,W){const G=x.get(b);G.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),x.get(b.texture).__webglTexture=N,x.get(b.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:W,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,N){const W=x.get(b);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0};const Ku=w.createFramebuffer();this.setRenderTarget=function(b,N=0,W=0){k=b,R=N,F=W;let G=null,z=!1,pt=!1;if(b){const mt=x.get(b);if(mt.__useDefaultFramebuffer!==void 0){ct.bindFramebuffer(w.FRAMEBUFFER,mt.__webglFramebuffer),H.copy(b.viewport),U.copy(b.scissor),it=b.scissorTest,ct.viewport(H),ct.scissor(U),ct.setScissorTest(it),X=-1;return}else if(mt.__webglFramebuffer===void 0)D.setupRenderTarget(b);else if(mt.__hasExternalTextures)D.rebindTextures(b,x.get(b.texture).__webglTexture,x.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Zt=b.depthTexture;if(mt.__boundDepthTexture!==Zt){if(Zt!==null&&x.has(Zt)&&(b.width!==Zt.image.width||b.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(b)}}const Rt=b.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(pt=!0);const Lt=x.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Lt[N])?G=Lt[N][W]:G=Lt[N],z=!0):b.samples>0&&D.useMultisampledRTT(b)===!1?G=x.get(b).__webglMultisampledFramebuffer:Array.isArray(Lt)?G=Lt[W]:G=Lt,H.copy(b.viewport),U.copy(b.scissor),it=b.scissorTest}else H.copy(K).multiplyScalar(Ht).floor(),U.copy(ot).multiplyScalar(Ht).floor(),it=lt;if(W!==0&&(G=Ku),ct.bindFramebuffer(w.FRAMEBUFFER,G)&&ct.drawBuffers(b,G),ct.viewport(H),ct.scissor(U),ct.setScissorTest(it),z){const mt=x.get(b.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+N,mt.__webglTexture,W)}else if(pt){const mt=N;for(let Rt=0;Rt<b.textures.length;Rt++){const Lt=x.get(b.textures[Rt]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Rt,Lt.__webglTexture,W,mt)}}else if(b!==null&&W!==0){const mt=x.get(b.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,mt.__webglTexture,W)}X=-1},this.readRenderTargetPixels=function(b,N,W,G,z,pt,Mt,mt=0){if(!(b&&b.isWebGLRenderTarget)){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=x.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Mt!==void 0&&(Rt=Rt[Mt]),Rt){ct.bindFramebuffer(w.FRAMEBUFFER,Rt);try{const Lt=b.textures[mt],Zt=Lt.format,Qt=Lt.type;if(b.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+mt),!Ot.textureFormatReadable(Zt)){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(Qt)){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-G&&W>=0&&W<=b.height-z&&w.readPixels(N,W,G,z,ut.convert(Zt),ut.convert(Qt),pt)}finally{const Lt=k!==null?x.get(k).__webglFramebuffer:null;ct.bindFramebuffer(w.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(b,N,W,G,z,pt,Mt,mt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=x.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Mt!==void 0&&(Rt=Rt[Mt]),Rt)if(N>=0&&N<=b.width-G&&W>=0&&W<=b.height-z){ct.bindFramebuffer(w.FRAMEBUFFER,Rt);const Lt=b.textures[mt],Zt=Lt.format,Qt=Lt.type;if(b.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+mt),!Ot.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Dt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Dt),w.bufferData(w.PIXEL_PACK_BUFFER,pt.byteLength,w.STREAM_READ),w.readPixels(N,W,G,z,ut.convert(Zt),ut.convert(Qt),0);const _e=k!==null?x.get(k).__webglFramebuffer:null;ct.bindFramebuffer(w.FRAMEBUFFER,_e);const Fe=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Id(w,Fe,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Dt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,pt),w.deleteBuffer(Dt),w.deleteSync(Fe),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,N=null,W=0){const G=Math.pow(2,-W),z=Math.floor(b.image.width*G),pt=Math.floor(b.image.height*G),Mt=N!==null?N.x:0,mt=N!==null?N.y:0;D.setTexture2D(b,0),w.copyTexSubImage2D(w.TEXTURE_2D,W,0,0,Mt,mt,z,pt),ct.unbindTexture()};const $u=w.createFramebuffer(),Ju=w.createFramebuffer();this.copyTextureToTexture=function(b,N,W=null,G=null,z=0,pt=0){let Mt,mt,Rt,Lt,Zt,Qt,Dt,_e,Fe;const De=b.isCompressedTexture?b.mipmaps[pt]:b.image;if(W!==null)Mt=W.max.x-W.min.x,mt=W.max.y-W.min.y,Rt=W.isBox3?W.max.z-W.min.z:1,Lt=W.min.x,Zt=W.min.y,Qt=W.isBox3?W.min.z:0;else{const Ze=Math.pow(2,-z);Mt=Math.floor(De.width*Ze),mt=Math.floor(De.height*Ze),b.isDataArrayTexture?Rt=De.depth:b.isData3DTexture?Rt=Math.floor(De.depth*Ze):Rt=1,Lt=0,Zt=0,Qt=0}G!==null?(Dt=G.x,_e=G.y,Fe=G.z):(Dt=0,_e=0,Fe=0);const ve=ut.convert(N.format),nn=ut.convert(N.type);let Pt;N.isData3DTexture?(D.setTexture3D(N,0),Pt=w.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(D.setTexture2DArray(N,0),Pt=w.TEXTURE_2D_ARRAY):(D.setTexture2D(N,0),Pt=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,N.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,N.unpackAlignment);const mn=w.getParameter(w.UNPACK_ROW_LENGTH),le=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Tn=w.getParameter(w.UNPACK_SKIP_PIXELS),Dn=w.getParameter(w.UNPACK_SKIP_ROWS),Ti=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,De.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,De.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Lt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Zt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Qt);const Ki=b.isDataArrayTexture||b.isData3DTexture,Me=N.isDataArrayTexture||N.isData3DTexture;if(b.isDepthTexture){const Ze=x.get(b),li=x.get(N),Xe=x.get(Ze.__renderTarget),ci=x.get(li.__renderTarget);ct.bindFramebuffer(w.READ_FRAMEBUFFER,Xe.__webglFramebuffer),ct.bindFramebuffer(w.DRAW_FRAMEBUFFER,ci.__webglFramebuffer);for(let $i=0;$i<Rt;$i++)Ki&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,x.get(b).__webglTexture,z,Qt+$i),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,x.get(N).__webglTexture,pt,Fe+$i)),w.blitFramebuffer(Lt,Zt,Mt,mt,Dt,_e,Mt,mt,w.DEPTH_BUFFER_BIT,w.NEAREST);ct.bindFramebuffer(w.READ_FRAMEBUFFER,null),ct.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(z!==0||b.isRenderTargetTexture||x.has(b)){const Ze=x.get(b),li=x.get(N);ct.bindFramebuffer(w.READ_FRAMEBUFFER,$u),ct.bindFramebuffer(w.DRAW_FRAMEBUFFER,Ju);for(let Xe=0;Xe<Rt;Xe++)Ki?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ze.__webglTexture,z,Qt+Xe):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Ze.__webglTexture,z),Me?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,li.__webglTexture,pt,Fe+Xe):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,li.__webglTexture,pt),z!==0?w.blitFramebuffer(Lt,Zt,Mt,mt,Dt,_e,Mt,mt,w.COLOR_BUFFER_BIT,w.NEAREST):Me?w.copyTexSubImage3D(Pt,pt,Dt,_e,Fe+Xe,Lt,Zt,Mt,mt):w.copyTexSubImage2D(Pt,pt,Dt,_e,Lt,Zt,Mt,mt);ct.bindFramebuffer(w.READ_FRAMEBUFFER,null),ct.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Me?b.isDataTexture||b.isData3DTexture?w.texSubImage3D(Pt,pt,Dt,_e,Fe,Mt,mt,Rt,ve,nn,De.data):N.isCompressedArrayTexture?w.compressedTexSubImage3D(Pt,pt,Dt,_e,Fe,Mt,mt,Rt,ve,De.data):w.texSubImage3D(Pt,pt,Dt,_e,Fe,Mt,mt,Rt,ve,nn,De):b.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,pt,Dt,_e,Mt,mt,ve,nn,De.data):b.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,pt,Dt,_e,De.width,De.height,ve,De.data):w.texSubImage2D(w.TEXTURE_2D,pt,Dt,_e,Mt,mt,ve,nn,De);w.pixelStorei(w.UNPACK_ROW_LENGTH,mn),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,le),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Tn),w.pixelStorei(w.UNPACK_SKIP_ROWS,Dn),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ti),pt===0&&N.generateMipmaps&&w.generateMipmap(Pt),ct.unbindTexture()},this.initRenderTarget=function(b){x.get(b).__webglFramebuffer===void 0&&D.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?D.setTextureCube(b,0):b.isData3DTexture?D.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?D.setTexture2DArray(b,0):D.setTexture2D(b,0),ct.unbindTexture()},this.resetState=function(){R=0,F=0,k=null,ct.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}}function Qx(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new We;let c=0;for(let h=0;h<i.length;++h){const d=i[h];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const d=[];for(let u=0;u<i.length;++u){const f=i[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(const h in r){const d=jc(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in a){const d=a[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){const f=[];for(let y=0;y<a[h].length;++y)f.push(a[h][y][u]);const g=jc(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function jc(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new Mn(a,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<e;g++){const y=h.getComponent(u,g);o.setComponent(u+d,g,y)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var Rs,Yh,Zh;class t_{constructor(){sn(this,Rs);this.colliders=[]}addCircle(t,e,n,s={}){const r={type:"circle",x:t,z:e,radius:n,blocksMovement:s.blocksMovement!==!1,blocksVision:s.blocksVision!==!1,cover:!!s.cover,tag:s.tag||"circle"};return this.colliders.push(r),r}addBox(t,e,n,s,r={}){const a={type:"box",minX:Math.min(t,n),maxX:Math.max(t,n),minZ:Math.min(e,s),maxZ:Math.max(e,s),blocksMovement:r.blocksMovement!==!1,blocksVision:r.blocksVision!==!1,cover:!!r.cover,tag:r.tag||"box"};return this.colliders.push(a),a}getCoverObjects(){return this.colliders.filter(t=>t.cover)}resolveCircle(t,e,n){let s=t,r=e;for(let a=0;a<2;a+=1)for(const o of this.colliders)if(o.blocksMovement)if(o.type==="circle"){const l=s-o.x,c=r-o.z,h=o.radius+n,d=l*l+c*c;if(d>=h*h)continue;const u=Math.sqrt(d)||1e-4,f=h-u;s+=l/u*f,r+=c/u*f}else{const l=Math.max(o.minX,Math.min(s,o.maxX)),c=Math.max(o.minZ,Math.min(r,o.maxZ)),h=s-l,d=r-c,u=h*h+d*d;if(u>1e-6){if(u>=n*n)continue;const f=Math.sqrt(u),g=n-f;s+=h/f*g,r+=d/f*g}else{const f=s-o.minX,g=o.maxX-s,y=r-o.minZ,p=o.maxZ-r,m=Math.min(f,g,y,p);m===f?s=o.minX-n:m===g?s=o.maxX+n:m===y?r=o.minZ-n:r=o.maxZ+n}}return{x:s,z:r}}isBlocked(t,e,n,s){const r=n-t,a=s-e;for(const o of this.colliders)if(o.blocksVision){if(o.type==="circle"){if(V(this,Rs,Yh).call(this,t,e,r,a,o.x,o.z,o.radius))return!0}else if(V(this,Rs,Zh).call(this,t,e,r,a,o))return!0}return!1}}Rs=new WeakSet,Yh=function(t,e,n,s,r,a,o){const l=t-r,c=e-a,h=n*n+s*s;if(h<1e-6)return!1;const d=2*(l*n+c*s),u=l*l+c*c-o*o,f=d*d-4*h*u;if(f<0)return!1;const g=Math.sqrt(f),y=(-d-g)/(2*h),p=(-d+g)/(2*h);return y>.02&&y<.98||p>.02&&p<.98},Zh=function(t,e,n,s,r){let a=.02,o=.98;for(const l of["x","z"]){const c=l==="x"?t:e,h=l==="x"?n:s,d=l==="x"?r.minX:r.minZ,u=l==="x"?r.maxX:r.maxZ;if(Math.abs(h)<1e-6){if(c<d||c>u)return!1}else{let f=(d-c)/h,g=(u-c)/h;if(f>g&&([f,g]=[g,f]),a=Math.max(a,f),o=Math.min(o,g),a>o)return!1}}return o>a};const Qe={width:44,depth:34,halfW:22,halfD:17,gateCenterZ:0,gateWidth:4,outerLimitX:30},Je={radius:.6,walkSpeed:4.6,sprintSpeed:8.2,acceleration:30,deceleration:22,turnSpeed:14,staminaMax:100,staminaDrain:26,staminaRegen:17,staminaRegenDelay:.55},pe={radius:.5,patrolSpeed:2.3,alertSpeed:1.75,chaseSpeed:5.35,searchSpeed:2.8,turnSpeed:8,catchRadius:1.5,patrolPauseMin:.4,patrolPauseMax:1.5,distractEveryMin:8,distractEveryMax:15,distractTimeMin:3.2,distractTimeMax:5.2,searchTime:5.5,gateCheckSpeed:2.8,gateCheckDuration:4.5,gateCheckSweepSpeed:1.35,gateCheckSweepAngle:.62,gateCheckCooldownMin:20,gateCheckCooldownMax:30,gateCheckRepeatMin:14,gateCheckRepeatMax:22,investigateSpeed:2.7,investigateScanTime:2.8,investigateMaxTime:10},Mi={walkRadius:4.5,sprintRadius:12.5,walkLife:.55,sprintLife:.85,barkLife:1,distractedHearing:.4,gateCheckHearing:.55,reactionCooldown:1.5},Ee={radius:.42,start:{x:18,z:10.4},patrolSpeed:2.1,chaseSpeed:5.6,searchSpeed:3.2,turnSpeed:9,sightRange:9.5,hiddenSightRange:3.5,halfAngle:55*Math.PI/180,closeSense:2.2,hiddenCloseSense:1.5,catchRadius:1.05,hearingMultiplier:1.15,alertDuration:.55,lostSightTime:2.6,searchTime:3.2,sniffTimeMin:.9,sniffTimeMax:1.6,barkNoiseRadius:18,waypoints:[{x:18,z:10.4},{x:16.2,z:2},{x:19.4,z:-3.2}]},Ne={range:15,halfAngle:40*Math.PI/180,closeRange:2.6,distractedRange:5.5,checkRange:13,checkHalfAngle:30*Math.PI/180,gainBase:.55,sprintGain:1.65,hidingGain:.1,decay:.3,chaseGain:1.3,alertThreshold:.38,chaseThreshold:.98},je={winX:23.6,caughtOverlayDelay:1.35,winOverlayDelay:1.2,patrolRouteStandard:[{x:-7.5,z:-4.5},{x:3.5,z:-7.5},{x:13,z:-2.5},{x:10.5,z:8.5},{x:0,z:11.2},{x:-11.5,z:6.5}],patrolRouteNervous:[{x:0,z:11.2},{x:10.5,z:8.5},{x:17.2,z:4.6},{x:13,z:-2.5},{x:3.5,z:-7.5},{x:-7.5,z:-4.5},{x:-11.5,z:6.5}],gateCheckSpot:{x:18.8,z:2.6},playerStart:{x:-16,z:12.5},humanStart:{x:-7.5,z:-4.5},gate:{x:Qe.halfW,z:0}},ee={sky:10470616,fog:12046294,grass:7110460,grassDark:6057523,grassLight:8228677,dirt:10254924,wood:9132587,woodDark:6240800,woodLight:11565634,houseWall:15852226,houseTrim:7161126,roof:10699813,roofDark:8204312,window:8372438,door:8011554,leafOrange:13658666,leafRed:11549227,leafYellow:14263595,leafGreen:5204785,turkeyBody:8079914,turkeyDark:6042656,turkeyWing:9329203,turkeyTail:11558959,beak:14721594,wattle:12597547,humanShirt:10238768,humanPants:3359836,skin:14856588,gateGlow:16757575},_i="https://en.rustfisher.com/aiwebdemos/turkeyrun2026/index.html";function yn(i,t,e){return Math.min(e,Math.max(t,i))}function oa(i,t,e){return i+(t-i)*e}function Rn(i,t,e,n){return oa(i,t,1-Math.exp(-e*n))}function Xi(i,t,e,n){let s=(t-i+Math.PI)%(Math.PI*2)-Math.PI;return s<-Math.PI&&(s+=Math.PI*2),i+s*(1-Math.exp(-e*n))}function bn(i,t,e,n){return Math.hypot(i-e,t-n)}function te(i,t){return i+Math.random()*(t-i)}function e_(){return typeof window<"u"&&("ontouchstart"in window||navigator.maxTouchPoints>0)}function Nl(){return!!(typeof window<"u"&&window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches)}const Et={grass:new Tt({color:ee.grass}),grassDark:new Tt({color:ee.grassDark}),dirt:new Tt({color:ee.dirt}),wood:new Tt({color:ee.wood}),woodDark:new Tt({color:ee.woodDark}),woodLight:new Tt({color:ee.woodLight}),wall:new Tt({color:ee.houseWall}),trim:new Tt({color:ee.houseTrim}),roof:new Tt({color:ee.roof}),roofDark:new Tt({color:ee.roofDark}),window:new Tt({color:ee.window}),door:new Tt({color:ee.door}),leafOrange:new Tt({color:ee.leafOrange,flatShading:!0}),leafRed:new Tt({color:ee.leafRed,flatShading:!0}),leafYellow:new Tt({color:ee.leafYellow,flatShading:!0}),leafGreen:new Tt({color:ee.leafGreen,flatShading:!0}),bush:new Tt({color:5598001,flatShading:!0}),bushLight:new Tt({color:6979386,flatShading:!0}),stone:new Tt({color:10131340,flatShading:!0}),gateGlow:new Le({color:ee.gateGlow})};function $t(i,t,e,n,s,r,a,o=!0,l=!0){const c=new zt(new Se(i,t,e),n);return c.position.set(s,r,a),c.castShadow=o,c.receiveShadow=l,c}function gs(i,t,e,n,s,r,a,o){const l=new zt(new tn(i,t,e,n),s);return l.position.set(r,a,o),l.castShadow=!0,l.receiveShadow=!0,l}function Qc(i,t="#f7e7c6",e="#5a3318"){const n=document.createElement("canvas");n.width=512,n.height=192;const s=n.getContext("2d");s.fillStyle=t,s.fillRect(0,0,n.width,n.height),s.strokeStyle=e,s.lineWidth=14,s.strokeRect(10,10,n.width-20,n.height-20),s.fillStyle=e,s.font="bold 104px Georgia, serif",s.textAlign="center",s.textBaseline="middle",s.fillText(i,n.width/2,n.height/2+6);const r=new wl(n);return r.colorSpace=cn,r.anisotropy=4,r}var ue,Kh,$h,Jh,jh,Qh,tu,eu,nu,iu,su,ru,au,ou,lu;class n_{constructor(){sn(this,ue);this.scene=new Zd,this.scene.background=new Gt(ee.sky),this.scene.fog=new El(ee.fog,50,95),this.collision=new t_,this.coverObjects=[],this.time=0,this.gateProximity=0,this.gateFlare=0,V(this,ue,Kh).call(this),V(this,ue,$h).call(this),V(this,ue,Jh).call(this),V(this,ue,Qh).call(this),V(this,ue,tu).call(this),V(this,ue,eu).call(this),V(this,ue,nu).call(this),V(this,ue,iu).call(this),V(this,ue,su).call(this),V(this,ue,ru).call(this),V(this,ue,au).call(this),V(this,ue,ou).call(this),V(this,ue,lu).call(this)}setGateProximity(t){this.gateProximity=Math.max(0,Math.min(1,t))}setShadowQuality(t,e){this.sun&&(this.sun.castShadow=!!t,e&&this.sun.shadow.mapSize.set(e,e),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null))}flareGate(t=1){this.gateFlare=Math.max(this.gateFlare,t)}resetGateEffects(){this.gateProximity=0,this.gateFlare=0}update(t){if(this.time+=t,this.gateFlare=Math.max(0,this.gateFlare-t*1.35),this.gateLight){const e=3+this.gateProximity*5,n=.7+this.gateProximity*1.5;this.gateLight.intensity=4.2+this.gateProximity*2.8+this.gateFlare*9+Math.sin(this.time*e)*n}this.gateSign&&(this.gateSign.rotation.z=Math.sin(this.time*1.7)*.025),this.gateFlag&&(this.gateFlag.rotation.y=Math.sin(this.time*2.2)*.25)}}ue=new WeakSet,Kh=function(){const t=new se(128,24,16),e=t.attributes.position,n=[],s=new Gt(15913891),r=new Gt(12836325),a=new Gt(8696530),o=new Gt;for(let u=0;u<e.count;u+=1){const f=Math.max(0,Math.min(1,e.getY(u)/128));f<.22?o.copy(s).lerp(r,f/.22):o.copy(r).lerp(a,(f-.22)/.78),n.push(o.r,o.g,o.b)}t.setAttribute("color",new re(n,3));const l=new Le({vertexColors:!0,side:pn,fog:!1,depthWrite:!1}),c=new zt(t,l);c.position.y=-6,this.scene.add(c);const h=new Le({color:16774109,transparent:!0,opacity:.86,fog:!1,depthWrite:!1}),d=[[-42,31,-34,1.1],[8,35,-48,1.35],[48,29,16,1],[-52,27,32,.9],[22,33,54,1.2],[-6,38,18,.8]];for(const[u,f,g,y]of d){const p=new ie;p.position.set(u,f,g),p.scale.setScalar(y);for(let m=0;m<4;m+=1){const v=new zt(new se(2.4-m*.25,9,7),h);v.position.set((m-1.5)*2.3,m%2*.5,m%3*.6-.5),v.scale.set(1.35,.62,.9),p.add(v)}this.scene.add(p)}},$h=function(){const t=new Kf(13624302,6052400,1.15);this.scene.add(t);const e=new Qf(16769720,2);e.position.set(16,30,18),e.castShadow=!0;const n=window.innerWidth<800?1024:2048;e.shadow.mapSize.set(n,n),e.shadow.camera.left=-30,e.shadow.camera.right=30,e.shadow.camera.top=30,e.shadow.camera.bottom=-30,e.shadow.camera.near=5,e.shadow.camera.far=70,e.shadow.camera.updateProjectionMatrix(),e.shadow.bias=-6e-4,e.shadow.normalBias=.08,e.shadow.radius=2,this.scene.add(e),this.scene.add(e.target),e.target.position.set(0,0,0),this.sun=e;const s=new tp(16771529,.35);this.scene.add(s)},Jh=function(){const t=$t(110,.4,90,Et.grassDark,0,-.25,0,!1,!0);t.receiveShadow=!0,this.scene.add(t);const e=$t(Qe.width,.4,Qe.depth,Et.grass,0,-.18,0,!1,!0);this.scene.add(e);const n=new Qn(1,10),s=[new Tt({color:ee.grassDark,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),new Tt({color:ee.grassLight,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),new Tt({color:ee.grass,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1})];for(let r=0;r<26;r+=1){const a=te(1.2,3.4),o=new zt(n,s[r%s.length]);o.scale.setScalar(a),o.rotation.x=-Math.PI/2,o.rotation.z=te(0,Math.PI*2),o.position.set(te(-20.5,20.5),.036+r*7e-4,te(-16,16)),o.receiveShadow=!0,this.scene.add(o)}V(this,ue,jh).call(this)},jh=function(){const t=new Tt({color:ee.stone,flatShading:!0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),e=[[-14,-7.2],[-12.4,-6.2],[-9.6,-5.7],[-6.8,-5.1],[-4,-4.6],[-1.2,-4.1],[1.6,-3.6],[4.4,-3.1],[7.2,-2.6],[10,-2.1],[12.8,-1.6],[15.6,-1.1],[18.4,-.6],[20.8,-.1],[23,0]];for(let n=0;n<e.length;n+=1){const[s,r]=e[n],a=.045+n*.001,o=$t(2.35,.08,1.55,Et.dirt,s,a,r,!1,!0);if(o.rotation.y=(n%2===0?1:-1)*.12,o.scale.x=.92+n%3*.06,this.scene.add(o),n%3===0){const l=new zt(new Qn(.28,6),t);l.rotation.x=-Math.PI/2,l.rotation.z=te(0,Math.PI),l.position.set(s+te(-.5,.5),a+.043,r+te(-.35,.35)),l.receiveShadow=!0,this.scene.add(l)}}},Qh=function(){const t=[],e=(d,u,f,g)=>Math.atan2(f-d,g-u),n=(d,u)=>{d.applyMatrix4(u),t.push(d)},s=(d,u,f,g)=>{const y=Math.hypot(f-d,g-u),p=e(d,u,f,g),m=new ce().makeRotationY(p);m.setPosition((d+f)/2,0,(u+g)/2);const v=Math.max(1,Math.round(y/2.4));for(let M=0;M<=v;M+=1){const C=-y/2+y/v*M,A=new Se(.28,2.15,.28),P=new ce().makeTranslation(0,1.075,C);n(A,m.clone().multiply(P))}for(const M of[.55,1.45]){const C=new Se(.12,.2,y),A=new ce().makeTranslation(0,M,0);n(C,m.clone().multiply(A))}const S=Math.floor(y/.52);for(let M=0;M<S;M+=1){const C=-y/2+.26+M*.52,A=1.55+(M%3===0?.12:0),P=new Se(.1,A,.34),_=new ce().makeTranslation(0,.86,C);n(P,m.clone().multiply(_))}},r=Qe.halfW,a=Qe.halfD,o=Qe.gateWidth/2;s(-r,-a,r,-a),s(-r,a,r,a),s(-r,-a,-r,a),s(r,-a,r,-o-.2),s(r,o+.2,r,a);const l=Qx(t,!1),c=new zt(l,Et.wood);c.castShadow=!0,c.receiveShadow=!0,this.scene.add(c);const h=.55;this.collision.addBox(-r-h,-a-h,r+h,-a+h,{tag:"fence"}),this.collision.addBox(-r-h,a-h,r+h,a+h,{tag:"fence"}),this.collision.addBox(-r-h,-a,-r+h,a,{tag:"fence"}),this.collision.addBox(r-h,-a,r+h,-o-.2,{tag:"fence"}),this.collision.addBox(r-h,o+.2,r+h,a,{tag:"fence"})},tu=function(){const t=new ie;t.position.set(-14,0,-12),this.scene.add(t);const e=$t(14,.45,8.4,Et.woodDark,0,.22,0,!1,!0);t.add(e);const n=$t(14,5,8,Et.wall,0,2.7,0);t.add(n);const s=Et.trim;for(const d of[-1,1])for(const u of[-1,1])t.add($t(.32,5.1,.32,s,d*6.9,2.7,u*3.9));for(const d of[-1,1]){const u=$t(15.2,.34,5.1,d<0?Et.roofDark:Et.roof,0,5.85,d*2.02);u.rotation.x=d*.34,t.add(u)}t.add($t(15.4,.32,.4,Et.roofDark,0,6.62,0));const r=new aa;r.moveTo(-4.05,5.12),r.lineTo(4.05,5.12),r.lineTo(0,6.56),r.closePath();const a=new Pl(r,{depth:.3,bevelEnabled:!1});a.translate(0,0,-.15);for(const d of[-1,1]){const u=new zt(a,Et.wall);u.rotation.y=Math.PI/2,u.position.set(d*6.99,0,0),u.castShadow=!0,u.receiveShadow=!0,t.add(u);const f=new zt(new Qn(.44,12),Et.window);f.rotation.y=d*(Math.PI/2),f.position.set(d*7.16,5.85,0),t.add(f);const g=new zt(new ma(.48,.07,6,16),Et.trim);g.rotation.y=d*(Math.PI/2),g.position.set(d*7.17,5.85,0),t.add(g)}const o=$t(1,2.2,1,Et.woodDark,4.2,6.4,-1.8);t.add(o),t.add($t(1.15,.2,1.15,Et.trim,4.2,7.55,-1.8)),t.add($t(1.7,2.9,.14,Et.door,.1,2.15,3.98)),t.add($t(2.1,.18,.2,Et.trim,.1,3.7,4.02)),t.add($t(.16,2.9,.2,Et.trim,-.8,2.15,4.02)),t.add($t(.16,2.9,.2,Et.trim,1,2.15,4.02));const l=new zt(new se(.08,8,8),Et.gateGlow);l.position.set(.68,2.05,4.1),t.add(l);const c=[[-4.1,2.6,4.01],[4.2,2.6,4.01],[-6.9,2.7,-.8]];for(const[d,u,f]of c){const g=$t(2.5,1.9,.16,Et.trim,d,u,f),y=$t(2.1,1.5,.18,Et.window,d,u,f+.02);t.add(g,y),t.add($t(.12,1.5,.2,Et.trim,d,u,f+.04)),t.add($t(2.1,.12,.2,Et.trim,d,u,f+.04))}t.add($t(3,.25,1.4,Et.wood,.1,.12,4.6,!1,!0)),t.add($t(3.2,.2,.5,Et.woodLight,.1,.28,5.15,!1,!0));const h=new zt(new se(.18,8,8),new Le({color:16765567}));h.position.set(-1.15,3.15,4.12),t.add(h),this.collision.addBox(-21.4,-16.4,-6.6,-7.6,{tag:"house"}),this.collision.addBox(-22,-17,-6.4,-7.5,{blocksMovement:!1,tag:"house-visual"})},eu=function(){const t=new ie;t.position.set(18.25,0,12.6),this.scene.add(t),t.add($t(2.2,1.7,2,Et.woodLight,0,.85,0));for(const l of[.42,1.05,1.58])t.add($t(2.24,.055,2.04,Et.woodDark,0,l,0,!1,!0));for(const l of[-1.04,1.04])for(const c of[-.94,.94])t.add($t(.14,1.78,.14,Et.woodDark,l,.89,c));const e=new aa;e.moveTo(-.42,0),e.lineTo(-.42,.52),e.absarc(0,.52,.42,Math.PI,0,!0),e.lineTo(.42,0),e.closePath();const n=new zt(new Il(e,12),new Le({color:2496527,side:Ye}));n.position.set(0,.06,-1.01),n.rotation.y=Math.PI,t.add(n);for(const l of[-1,1]){const c=$t(2.5,.16,1.35,l<0?Et.roofDark:Et.roof,0,1.92,l*.55);c.rotation.x=l*.3,t.add(c)}t.add($t(2.6,.16,.24,Et.roofDark,0,2.16,0));const s=Qc("WOOF");t.add($t(1.02,.42,.07,Et.woodDark,0,1.55,-1.02));const r=new zt(new yi(.92,.34),new Le({map:s,side:Ye}));r.position.set(0,1.55,-1.065),r.rotation.y=Math.PI,t.add(r);const a=new zt(new tn(.26,.2,.12,10),Et.stone);a.position.set(-1.75,.06,-.35),a.receiveShadow=!0,t.add(a);const o=new zt(new Qn(.2,10),new Tt({color:6175266}));o.rotation.x=-Math.PI/2,o.position.set(-1.75,.125,-.35),t.add(o),this.collision.addBox(17,11.5,19.5,13.7,{cover:!0,tag:"doghouse"})},nu=function(){const t=Qe.halfW,e=Qe.gateCenterZ,n=Qe.gateWidth/2,s=new ie;s.position.set(t,0,e),this.scene.add(s);for(const v of[-1,1]){s.add(gs(.24,.28,3.2,8,Et.woodDark,0,1.6,v*(n+.02))),s.add(gs(.32,.36,.3,8,Et.wood,0,3.22,v*(n+.02)));const S=new zt(new se(.19,10,10),new Le({color:16761963}));S.position.set(0,2.55,v*(n+.02)),s.add(S)}s.add($t(.34,.4,Qe.gateWidth+1.1,Et.woodDark,0,3.42,0));const r=Qc("EXIT");this.gateSign=new ie,this.gateSign.position.set(-.02,3.42,0);const a=new zt(new yi(2.6,1),new Le({map:r,side:Ye}));a.position.set(0,-.74,0),a.rotation.y=-Math.PI/2,this.gateSign.add(a),this.gateSign.add($t(.07,.3,.07,Et.woodDark,0,-.15,-.9)),this.gateSign.add($t(.07,.3,.07,Et.woodDark,0,-.15,.9)),s.add(this.gateSign);const o=new ie;o.position.set(-.18,1.25,-n+.12),o.rotation.y=-1.15;const l=new ie,c=$t(.16,1.7,1.9,Et.wood,0,0,0);l.add(c);for(const v of[-.62,.62])l.add($t(.1,.16,1.65,Et.woodDark,.1,v,0));o.add(l),s.add(o);const h=new Le({color:16757575}),d=new zt(new In(.4,.9,4),h);d.rotation.z=-Math.PI/2,d.position.set(-1.35,1.35,0),s.add(d);const u=$t(.16,.08,Qe.gateWidth-.4,Et.gateGlow,-.4,.06,0,!1,!1);s.add(u),this.gateLight=new Jf(16757575,4.5,11,2),this.gateLight.position.set(t-.6,2.7,e),this.scene.add(this.gateLight);const f=new ie;f.position.set(t+.6,0,e+3.4),f.add(gs(.05,.05,4.2,6,Et.woodDark,0,2.1,0));const g=new In(.52,1.4,4,1,!0),y=new zt(g,new Tt({color:14721594,side:Ye}));y.rotation.z=-Math.PI/2,y.rotation.x=Math.PI/2,y.position.set(.75,3.5,0),this.gateFlag=y,f.add(y),this.scene.add(f);const p=new zt(new Qn(3.2,20),new Tt({color:9414990,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));p.rotation.x=-Math.PI/2,p.position.set(t+4.2,.105,e),this.scene.add(p);const m=$t(6.5,.08,3,Et.dirt,t+3.1,.045,e,!1,!0);this.scene.add(m);for(let v=0;v<5;v+=1){const S=new zt(new In(.18,.7,5),new Tt({color:7178810,flatShading:!0}));S.position.set(t+te(1.8,6.5),.35,e+te(-3,3)),S.castShadow=!0,this.scene.add(S)}},iu=function(){const t=[{x:-4.2,z:5.2,scale:1.15,color:"leafOrange"},{x:7.2,z:-6.6,scale:1,color:"leafRed"},{x:15.2,z:9,scale:1.05,color:"leafYellow"},{x:-17.6,z:5.6,scale:.95,color:"leafOrange"},{x:2.2,z:13.2,scale:1,color:"leafRed"},{x:18,z:-8.6,scale:.9,color:"leafYellow"},{x:-9,z:1.8,scale:.85,color:"leafOrange"}];for(const e of t){const n=new ie;n.position.set(e.x,0,e.z),n.scale.setScalar(e.scale),this.scene.add(n);const s=gs(.28,.42,2.4,7,Et.woodDark,0,1.2,0);n.add(s);const r=Et[e.color],a=[[0,3.1,0,1.25],[.85,2.75,.3,.9],[-.8,2.9,-.35,.85],[.1,3.8,-.2,.8]];for(let o=0;o<a.length;o+=1){const[l,c,h,d]=a[o],u=new zt(new vs(d,0),o%2===0?r:Et.leafRed);u.position.set(l,c,h),u.rotation.set(te(0,3),te(0,3),te(0,3)),u.castShadow=!0,u.receiveShadow=!1,n.add(u)}this.collision.addCircle(e.x,e.z,.95*e.scale,{cover:!0,tag:"tree"})}},su=function(){const t=[{x:5.4,z:3.2,scale:1},{x:-8.2,z:9.4,scale:1.1},{x:12,z:-6,scale:.95},{x:-16.5,z:-2.4,scale:.9},{x:.6,z:-8.8,scale:.85},{x:20,z:6.2,scale:.9},{x:-3,z:-1.2,scale:.8},{x:9,z:12,scale:.95}];for(const e of t){const n=new ie;n.position.set(e.x,0,e.z),n.scale.setScalar(e.scale),this.scene.add(n);const s=[[0,.5,0,.75],[.6,.4,.2,.55],[-.55,.42,-.15,.58],[.1,.85,-.2,.5],[-.2,.55,.55,.5]];for(let r=0;r<s.length;r+=1){const[a,o,l,c]=s[r],h=new zt(new vs(c,1),r%2===0?Et.bush:Et.bushLight);h.position.set(a,o,l),h.rotation.set(te(0,3),te(0,3),te(0,3)),h.castShadow=!0,h.receiveShadow=!1,n.add(h)}this.collision.addCircle(e.x,e.z,.95*e.scale,{cover:!0,tag:"bush"})}},ru=function(){const t=(e,n,s=1,r=0)=>{const a=new ie;a.position.set(e,0,n),a.rotation.y=r,a.scale.setScalar(s),this.scene.add(a);const o=$t(1.3,1.25,1.3,Et.woodLight,0,.63,0);a.add(o);for(const l of[-.56,.56])a.add($t(.12,1.3,.12,Et.woodDark,l,.65,-.56)),a.add($t(.12,1.3,.12,Et.woodDark,l,.65,.56)),a.add($t(1.3,.16,.1,Et.woodDark,0,.53,.67));return a.add($t(1.35,.15,1.35,Et.woodDark,0,1.3,0)),a};t(-8.5,-7,1,.12),t(-8.45,-7,.85,-.3).position.y=1.28,t(3.6,1.4,1,-.25),t(4,1.35,.9,.4).position.y=1.28,t(17.4,4.4,.95,.6),this.collision.addBox(-9.3,-7.8,-7.7,-6.2,{cover:!0,tag:"crate"}),this.collision.addBox(2.85,.6,4.95,2.4,{cover:!0,tag:"crate"}),this.collision.addCircle(17.4,4.4,.85,{cover:!0,tag:"crate"})},au=function(){const t=(o,l,c)=>{const h=new ie;h.position.set(o,0,l),this.scene.add(h);const d=new zt(new tn(.3,.24,.48,8),new Tt({color:11821884,flatShading:!0}));d.position.y=.24,d.castShadow=!0,d.receiveShadow=!0,h.add(d);const u=new zt(new tn(.34,.34,.1,8),new Tt({color:13071688,flatShading:!0}));u.position.y=.48,u.castShadow=!0,h.add(u);const f=new zt(new tn(.03,.04,.5,5),Et.leafGreen);f.position.y=.72,h.add(f);for(let g=0;g<5;g+=1){const y=new zt(new vs(.1,0),c);y.position.set(Math.cos(g/5*Math.PI*2)*.14,.94+g%2*.08,Math.sin(g/5*Math.PI*2)*.14),y.castShadow=!0,h.add(y)}},e=new Tt({color:15254346,flatShading:!0}),n=new Tt({color:13130319,flatShading:!0});t(-16.4,-7.2,e),t(-11.6,-7.2,n),t(-21.2,-6.2,e),t(15.2,2.2,n);const s=new ie;s.position.set(11,0,7.4),this.scene.add(s),s.add($t(1.5,.12,1.5,Et.woodLight,0,1,0));for(const o of[-.6,.6])for(const l of[-.6,.6])s.add($t(.12,1,.12,Et.woodDark,o,.5,l));const r=new zt(new se(.32,10,8),new Tt({color:13920554,flatShading:!0}));r.scale.y=.75,r.position.set(11,1.2,7.4),r.castShadow=!0,s.add(r);const a=gs(.7,.7,.9,10,Et.leafYellow,13.2,.45,7.8);a.rotation.z=Math.PI/2,this.scene.add(a);for(let o=0;o<4;o+=1){const l=new zt(new Al(te(.25,.45),0),Et.stone);l.position.set(te(-19,18),.2,te(-15,15)),l.rotation.set(te(0,3),te(0,3),te(0,3)),l.castShadow=!0,l.receiveShadow=!0,this.scene.add(l)}},ou=function(){const e=new yi(.24,.15),n=new Float32Array(e.attributes.position.count*3).fill(1);e.setAttribute("color",new re(n,3));const s=new Tt({vertexColors:!0,side:Ye,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),r=new Qo(e,s,260);r.receiveShadow=!0;const a=new Ge,o=[new Gt(ee.leafOrange),new Gt(ee.leafRed),new Gt(ee.leafYellow)];for(let l=0;l<260;l+=1)a.position.set(te(-21.3,21.3),.06+l%8*.0012+Math.random()*4e-4,te(-16.3,16.3)),a.rotation.set(-Math.PI/2+te(-.15,.15),0,te(0,Math.PI*2)),a.scale.setScalar(te(.7,1.6)),a.updateMatrix(),r.setMatrixAt(l,a.matrix),r.setColorAt(l,o[l%o.length]);r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0),this.scene.add(r)},lu=function(){const t=[[-27,-11],[-26,2],[-25,15],[27,-14],[29,6],[26,16],[-20,-23],[-2,-24],[16,-22],[1,24],[17,23]];for(const[e,n]of t){const s=new ie;s.position.set(e,0,n),s.scale.setScalar(te(.9,1.4)),this.scene.add(s),s.add(gs(.3,.5,2.6,6,Et.woodDark,0,1.3,0));const r=[Et.leafOrange,Et.leafRed,Et.leafYellow,Et.leafGreen];for(let a=0;a<3;a+=1){const o=new zt(new vs(te(.9,1.5),0),r[a%r.length]);o.position.set(te(-.8,.8),3.1+a*.5,te(-.8,.8)),o.castShadow=!0,s.add(o)}}};const Oe={body:new Tt({color:ee.turkeyBody,flatShading:!0}),dark:new Tt({color:ee.turkeyDark,flatShading:!0}),wing:new Tt({color:ee.turkeyWing,flatShading:!0}),tailOrange:new Tt({color:ee.turkeyTail,flatShading:!0}),tailRed:new Tt({color:ee.leafRed,flatShading:!0}),tailYellow:new Tt({color:ee.leafYellow,flatShading:!0}),beak:new Tt({color:ee.beak,flatShading:!0}),wattle:new Tt({color:ee.wattle,flatShading:!0}),eye:new Tt({color:16777215}),pupil:new Le({color:1709072}),leg:new Tt({color:13208125,flatShading:!0})};function Ke(i,t,e=0,n=0,s=0){const r=new zt(i,t);return r.position.set(e,n,s),r.castShadow=!0,r.receiveShadow=!0,r}var Ps,cu,hu;class i_{constructor(){sn(this,Ps);this.root=new ie,this.root.name="turkey",this.time=0,this.phase=0,this.crouch=0,this.panic=0,V(this,Ps,cu).call(this),V(this,Ps,hu).call(this)}setPosition(t,e){this.root.position.set(t,0,e)}setHeading(t){this.root.rotation.y=t}resetAnimation(){this.time=0,this.phase=0,this.crouch=0,this.panic=0,this.bodyRig.position.set(0,0,0),this.bodyRig.rotation.set(0,0,0),this.bodyRig.scale.set(1,1,1),this.headGroup.position.set(0,1.48,.42),this.headGroup.rotation.set(0,0,0),this.tailGroup.rotation.set(0,0,0),this.tailGroup.scale.set(1,1,1);for(const t of this.wings)t.rotation.set(0,0,0);for(const t of this.legs)t.rotation.set(0,0,0),t.position.y=.55}update(t,e={}){const{speed:n=0,hidden:s=!1,panicked:r=!1}=e;this.time+=t;const a=n>.15,o=yn((n-Je.walkSpeed*.85)/(Je.sprintSpeed-Je.walkSpeed*.85),0,1);a&&(this.phase+=t*(2.2+n*1.55)),this.crouch=Rn(this.crouch,s?1:0,9,t),this.panic=Rn(this.panic,r?1:0,8,t);const l=a?Math.sin(this.phase)*(.5+o*.55):Math.sin(this.time*1.7)*.05,c=a?Math.max(0,Math.sin(this.phase))*(.25+o*.35):0,h=a?Math.max(0,-Math.sin(this.phase))*(.25+o*.35):0;this.legs[0].rotation.x=l,this.legs[1].rotation.x=-l,this.legs[0].position.y=.55+c*.1+this.crouch*.12,this.legs[1].position.y=.55+h*.1+this.crouch*.12;const d=Math.sin(this.time*2.1)*.012,u=a?Math.abs(Math.sin(this.phase))*(.04+o*.09):0,f=this.panic*Math.sin(this.time*42)*.05;this.bodyRig.position.y=d+u-this.crouch*.26+f,this.bodyRig.position.z=this.crouch*.08,this.bodyRig.rotation.x=-o*.2-this.crouch*.12+this.panic*-.08,this.bodyRig.rotation.z=Math.sin(this.time*1.5)*.015+this.panic*Math.sin(this.time*33)*.04,this.bodyRig.scale.y=oa(1,.78,this.crouch),this.headGroup.rotation.x=this.crouch*.62+Math.sin(this.time*1.3)*.05-o*.18+this.panic*Math.sin(this.time*26)*.09,this.headGroup.rotation.y=s?0:Math.sin(this.time*.7)*.16,this.headGroup.position.y=1.48-this.crouch*.12,this.tailGroup.rotation.y=Math.sin(this.time*1.8+(a?this.phase*.4:0))*(.08+o*.1),this.tailGroup.rotation.x=-this.crouch*.4+o*.1,this.tailGroup.scale.setScalar(1-this.crouch*.18);const g=Math.sin(this.phase*.5)*(.08+o*.22),y=this.panic*(.75+Math.sin(this.time*30)*.25);this.wings[0].rotation.z=-g-y-this.crouch*.25,this.wings[1].rotation.z=g+y+this.crouch*.25,this.wings[0].rotation.x=a?Math.sin(this.phase)*.1:0,this.wings[1].rotation.x=a?Math.sin(this.phase)*.1:0}playCaught(){this.panic=1}}Ps=new WeakSet,cu=function(){this.bodyRig=new ie,this.root.add(this.bodyRig);const t=Ke(new se(.62,14,10),Oe.body,0,.92,.02);t.scale.set(1,1.06,1.22),this.bodyRig.add(t);const e=Ke(new se(.5,12,9),Oe.dark,0,.98,-.42);e.scale.set(.98,1,.95),this.bodyRig.add(e);const n=Ke(new se(.36,10,8),Oe.wing,0,.85,.4);n.scale.set(.8,.9,.6),this.bodyRig.add(n),this.tailGroup=new ie,this.tailGroup.position.set(0,1.12,-.55),this.bodyRig.add(this.tailGroup);const s=[Oe.tailOrange,Oe.tailRed,Oe.tailYellow,Oe.tailOrange,Oe.tailRed];for(let d=0;d<7;d+=1){const u=(d-3)*.3,f=Ke(new se(.33,8,6),s[d%s.length],0,0,0);f.scale.set(.26,1.35-Math.abs(d-3)*.07,.16),f.position.set(Math.sin(u)*.35,.35+Math.cos(u)*.1,-.08+Math.abs(u)*.05),f.rotation.z=-u*.85,f.rotation.x=-.55,this.tailGroup.add(f)}this.headGroup=new ie,this.headGroup.position.set(0,1.48,.42),this.bodyRig.add(this.headGroup);const r=Ke(new tn(.12,.2,.5,7),Oe.body,0,-.24,.02);r.rotation.x=.16,this.headGroup.add(r);const a=Ke(new se(.28,12,9),Oe.body,0,.06,.12);a.scale.set(.92,1,1),this.headGroup.add(a);const o=Ke(new se(.16,8,6),Oe.wattle,0,.23,.17);o.scale.set(.9,1.15,.7),this.headGroup.add(o);const l=Ke(new In(.1,.34,6),Oe.beak,0,.02,.47);l.rotation.x=Math.PI/2,this.headGroup.add(l);const c=Ke(new In(.055,.28,6),Oe.wattle,0,.24,.42);c.rotation.x=-.5,c.rotation.z=.1,this.headGroup.add(c);const h=Ke(new se(.1,8,6),Oe.wattle,0,-.14,.38);h.scale.set(.7,1.5,.8),h.rotation.x=-.2,this.headGroup.add(h);for(const d of[-1,1]){const u=Ke(new se(.075,8,8),Oe.eye,d*.15,.11,.29),f=Ke(new se(.038,6,6),Oe.pupil,d*.16,.12,.35),g=Ke(new Se(.13,.035,.06),Oe.dark,d*.15,.21,.3);g.rotation.z=d*.35,this.headGroup.add(u,f,g)}this.wings=[];for(const d of[-1,1]){const u=new ie;u.position.set(d*.56,1,.02);const f=Ke(new se(.34,9,7),Oe.wing,0,-.2,0);f.scale.set(.3,.85,1.15),f.rotation.z=d*.18,u.add(f),this.bodyRig.add(u),this.wings.push(u)}this.legs=[];for(const d of[-1,1]){const u=new ie;u.position.set(d*.22,.55,.02);const f=Ke(new tn(.055,.07,.5,6),Oe.leg,0,-.25,0),g=Ke(new Se(.2,.07,.34),Oe.leg,0,-.5,.08);for(const y of[-1,0,1]){const p=Ke(new Se(.055,.05,.2),Oe.beak,y*.07,-.51,.26);p.rotation.y=y*.28,u.add(p)}u.add(f,g),this.root.add(u),this.legs.push(u)}this.root.traverse(d=>{d.isMesh&&(d.castShadow=!0)})},hu=function(){const t=new zt(new Qn(.7,16),new Le({color:1910034,transparent:!0,opacity:.24,depthWrite:!1}));t.rotation.x=-Math.PI/2,t.position.y=.04,this.root.add(t)};const Te={shirt:new Tt({color:ee.humanShirt,flatShading:!0}),shirtDark:new Tt({color:7285282,flatShading:!0}),pants:new Tt({color:ee.humanPants,flatShading:!0}),shoe:new Tt({color:2761759,flatShading:!0}),skin:new Tt({color:ee.skin,flatShading:!0}),hair:new Tt({color:5913122,flatShading:!0}),cap:new Tt({color:4156242,flatShading:!0}),capDark:new Tt({color:2968890,flatShading:!0}),white:new Tt({color:15985367}),dark:new Le({color:2103830}),phone:new Tt({color:2369324}),phoneGlow:new Le({color:8902911}),flashlightGlow:new Le({color:16770720})};function ro(i,t="!"){const e=document.createElement("canvas");e.width=128,e.height=128;const n=e.getContext("2d");n.clearRect(0,0,128,128),n.fillStyle="rgba(35, 22, 10, 0.35)",n.beginPath(),n.arc(64,70,44,0,Math.PI*2),n.fill(),n.fillStyle=i,n.beginPath(),n.arc(64,62,38,0,Math.PI*2),n.fill(),n.strokeStyle="#fff4dc",n.lineWidth=7,n.stroke(),n.fillStyle="#3a230f",n.font="bold 70px Georgia, serif",n.textAlign="center",n.textBaseline="middle",n.fillText(t,64,62);const s=new wl(e);return s.colorSpace=cn,s}function we(i,t,e=0,n=0,s=0){const r=new zt(i,t);return r.position.set(e,n,s),r.castShadow=!0,r.receiveShadow=!0,r}var Ls,uu,du;class s_{constructor(){sn(this,Ls);this.root=new ie,this.root.name="human",this.time=0,this.phase=0,this.alertTextureLow=ro("#f2c744"),this.alertTextureHigh=ro("#e2482f"),this.questionTexture=ro("#e0a23a","?"),V(this,Ls,uu).call(this),V(this,Ls,du).call(this)}setPosition(t,e){this.root.position.set(t,0,e)}setHeading(t){this.root.rotation.y=t}update(t,e={}){const{speed:n=0,state:s="PATROL",alert:r=0,caught:a=!1}=e;this.time+=t;const o=n>.15,l=s==="CHASE"||n>4,c=s==="DISTRACTED",h=s==="GATE_CHECK",d=s==="INVESTIGATE";o&&(this.phase+=t*(2.4+n*2));const u=o?Math.sin(this.phase)*(l?.85:.5):0;this.legs[0].rotation.x=u,this.legs[1].rotation.x=-u,this.legs[0].position.y=.86+(o?Math.max(0,Math.sin(this.phase))*.07:0),this.legs[1].position.y=.86+(o?Math.max(0,-Math.sin(this.phase))*.07:0);const f=o?Math.abs(Math.sin(this.phase))*(l?.07:.035):Math.sin(this.time*1.9)*.01;if(this.bodyRig.position.y=f,this.bodyRig.rotation.x=l?-.16:o?-.05:0,this.arms[0].rotation.x=-u*.8,this.arms[1].rotation.x=u*.8,this.arms[0].rotation.z=.12,this.arms[1].rotation.z=-.12,c)this.arms[0].rotation.x=-1.15,this.arms[0].rotation.z=-.42,this.arms[1].rotation.x=-1,this.arms[1].rotation.z=.35,this.phone.visible=!0,this.headGroup.rotation.x=.48+Math.sin(this.time*2.3)*.04,this.headGroup.rotation.y=Math.sin(this.time*.9)*.05;else if(h)this.phone.visible=!1,this.arms[0].rotation.x=-.45,this.arms[0].rotation.z=.2,this.arms[1].rotation.x=-1.25,this.arms[1].rotation.z=-.2,this.headGroup.rotation.x=.04,this.headGroup.rotation.y=0;else{this.phone.visible=!1;const m=s==="SEARCH"||d;this.headGroup.rotation.x=m?-.05:0,this.headGroup.rotation.y=m?Math.sin(this.time*3.1)*.7:Math.sin(this.time*.8)*.16}this.flashlightProp.visible=h&&!a,this.beam.visible=h&&!a,this.beamInner.visible=h&&!a,a&&(this.bodyRig.rotation.x=-.3,this.arms[0].rotation.x=-2.4,this.arms[1].rotation.x=-2.2,this.arms[0].rotation.z=-.5,this.arms[1].rotation.z=.5,this.headGroup.rotation.x=-.25),this.alertSprite.visible=r>.04&&!a&&(!d||r>=.12),this.alertSprite.material.opacity=yn(r*1.6,0,1),this.alertSprite.material.map=r>=.7?this.alertTextureHigh:this.alertTextureLow;const g=1+Math.sin(this.time*9)*.05*(r>.7?2:1),y=oa(.5,.85,r)*g;this.alertSprite.scale.set(y,y,y),this.alertSprite.position.y=oa(2.45,2.7,r),this.questionSprite.visible=d&&!a&&r<.12;const p=.56+Math.sin(this.time*5)*.04;this.questionSprite.scale.set(p,p,p),this.questionSprite.position.y=2.55+Math.sin(this.time*3.4)*.04,r>.7&&(this.bodyRig.position.y+=Math.sin(this.time*24)*.012)}}Ls=new WeakSet,uu=function(){this.bodyRig=new ie,this.root.add(this.bodyRig),this.legs=[];for(const v of[-1,1]){const S=new ie;S.position.set(v*.17,.86,0);const M=we(new tn(.1,.12,.72,7),Te.pants,0,-.36,0),C=we(new Se(.2,.13,.34),Te.shoe,0,-.76,.07);S.add(M,C),this.bodyRig.add(S),this.legs.push(S)}const t=we(new Se(.55,.24,.34),Te.pants,0,.9,0);this.bodyRig.add(t);const e=we(new Se(.72,.86,.44),Te.shirt,0,1.38,0);e.geometry.translate(0,0,0),this.bodyRig.add(e);const n=we(new se(.3,10,8),Te.shirt,0,1.2,.13);n.scale.set(1.05,1.15,.75),this.bodyRig.add(n);for(const v of[1.15,1.4,1.65])this.bodyRig.add(we(new Se(.74,.05,.46),Te.shirtDark,0,v,0));this.bodyRig.add(we(new Se(.76,.08,.47),Te.dark,0,.99,0)),this.arms=[];for(const v of[-1,1]){const S=new ie;S.position.set(v*.46,1.7,0);const M=we(new tn(.08,.09,.38,6),Te.shirt,0,-.2,0),C=we(new tn(.07,.08,.36,6),Te.skin,0,-.55,0),A=we(new se(.1,8,6),Te.skin,0,-.76,0);S.add(M,C,A),this.bodyRig.add(S),this.arms.push(S)}this.headGroup=new ie,this.headGroup.position.set(0,1.95,0),this.bodyRig.add(this.headGroup);const s=we(new se(.27,12,10),Te.skin,0,.06,0);s.scale.set(.95,1.05,1),this.headGroup.add(s);for(const v of[-1,1])this.headGroup.add(we(new se(.06,6,6),Te.skin,v*.27,.07,0)),this.headGroup.add(we(new se(.045,6,6),Te.dark,v*.1,.11,.26)),this.headGroup.add(we(new Se(.08,.03,.03),Te.hair,v*.1,.18,.25));const r=we(new In(.06,.16,5),Te.skin,0,.03,.29);r.rotation.x=Math.PI/2,this.headGroup.add(r);const a=we(new Se(.26,.06,.06),Te.hair,0,-.07,.26);a.rotation.z=.05,this.headGroup.add(a);const o=we(new Se(.14,.025,.03),Te.dark,0,-.14,.255);this.headGroup.add(o);const l=we(new se(.285,10,8,0,Math.PI*2,0,Math.PI*.55),Te.hair,0,.09,-.01);l.rotation.x=-.08,this.headGroup.add(l);const c=we(new tn(.25,.28,.18,10),Te.cap,0,.27,0);this.headGroup.add(c);const h=we(new se(.25,10,6,0,Math.PI*2,0,Math.PI/2),Te.cap,0,.36,0);h.scale.y=.4,this.headGroup.add(h);const d=we(new Se(.4,.05,.3),Te.capDark,0,.2,.28);d.rotation.x=-.1,this.headGroup.add(d),this.phone=new ie;const u=we(new Se(.13,.24,.025),Te.phone,0,0,0),f=we(new Se(.1,.19,.006),Te.phoneGlow,0,0,.016);this.phone.add(u,f),this.phone.position.set(.08,0,.16),this.phone.rotation.x=-.5,this.phone.visible=!1,this.arms[0].add(this.phone),this.flashlightProp=new ie;const g=we(new tn(.055,.07,.28,8),Te.phone,0,0,0);g.rotation.x=Math.PI/2;const y=we(new tn(.075,.06,.05,8),Te.flashlightGlow,0,0,.16);y.rotation.x=Math.PI/2,this.flashlightProp.add(g,y),this.flashlightProp.position.set(.4,1.34,.48),this.flashlightProp.visible=!1,this.bodyRig.add(this.flashlightProp);const p=new Le({color:16769184,transparent:!0,opacity:.1,depthWrite:!1,side:Ye,blending:Qr,fog:!1});this.beam=new zt(new In(4.4,11,18,1,!0),p),this.beam.rotation.x=-Math.PI/2,this.beam.position.set(0,1.45,5.5),this.beam.visible=!1,this.beam.castShadow=!1,this.beam.renderOrder=2,this.root.add(this.beam);const m=new Le({color:16773572,transparent:!0,opacity:.17,depthWrite:!1,side:Ye,blending:Qr,fog:!1});this.beamInner=new zt(new In(1.7,10.5,14,1,!0),m),this.beamInner.rotation.x=-Math.PI/2,this.beamInner.position.set(0,1.45,5.25),this.beamInner.visible=!1,this.beamInner.castShadow=!1,this.beamInner.renderOrder=2,this.root.add(this.beamInner),this.root.traverse(v=>{v.isMesh&&(v.castShadow=!0)}),this.beam.castShadow=!1,this.beamInner.castShadow=!1},du=function(){const t=new ra({map:this.alertTextureLow,transparent:!0,depthWrite:!1});this.alertSprite=new jo(t),this.alertSprite.position.set(0,2.65,0),this.alertSprite.scale.set(.72,.72,.72),this.alertSprite.visible=!1,this.root.add(this.alertSprite);const e=new ra({map:this.questionTexture,transparent:!0,opacity:.92,depthWrite:!1});this.questionSprite=new jo(e),this.questionSprite.position.set(0,2.55,0),this.questionSprite.scale.set(.6,.6,.6),this.questionSprite.visible=!1,this.root.add(this.questionSprite)};const on={fur:new Tt({color:8017205,flatShading:!0}),furLight:new Tt({color:11108954,flatShading:!0}),furDark:new Tt({color:5059360,flatShading:!0}),cream:new Tt({color:15127472,flatShading:!0}),collar:new Tt({color:11549227,flatShading:!0}),nose:new Le({color:2365970}),eye:new Tt({color:16777215}),pupil:new Le({color:1709072}),tag:new Tt({color:14721594}),tongue:new Tt({color:13130319})};function ln(i,t,e=0,n=0,s=0){const r=new zt(i,t);return r.position.set(e,n,s),r.castShadow=!0,r.receiveShadow=!0,r}function r_(){const i=document.createElement("canvas");i.width=128,i.height=128;const t=i.getContext("2d");t.clearRect(0,0,128,128),t.fillStyle="rgba(35, 22, 10, 0.35)",t.beginPath(),t.arc(64,70,44,0,Math.PI*2),t.fill(),t.fillStyle="#d94a32",t.beginPath(),t.arc(64,62,38,0,Math.PI*2),t.fill(),t.strokeStyle="#fff4dc",t.lineWidth=7,t.stroke(),t.fillStyle="#fff4dc",t.font="bold 70px Georgia, serif",t.textAlign="center",t.textBaseline="middle",t.fillText("!",64,62);const e=new wl(i);return e.colorSpace=cn,e}var bi,fu,pu,mu;class a_{constructor(){sn(this,bi);this.root=new ie,this.root.name="dog",this.time=0,this.phase=0,this.barkTimer=0,V(this,bi,fu).call(this),V(this,bi,pu).call(this),V(this,bi,mu).call(this)}setPosition(t,e){this.root.position.set(t,0,e)}setHeading(t){this.root.rotation.y=t}triggerBark(){this.barkTimer=.45}resetAnimation(){this.time=0,this.phase=0,this.barkTimer=0,this.bodyRig.position.set(0,0,0),this.bodyRig.rotation.set(0,0,0),this.headGroup.rotation.set(0,0,0),this.tailGroup.rotation.set(0,0,0);for(const t of this.legs)t.rotation.set(0,0,0);this.alertSprite&&(this.alertSprite.visible=!1)}update(t,e={}){const{speed:n=0,state:s="PATROL"}=e;this.time+=t;const r=n>.12,a=s==="CHASE"||n>4,o=s==="SNIFF",l=s==="ALERT"||s==="CHASE";r&&(this.phase+=t*(3+n*2.4)),this.barkTimer=Math.max(0,this.barkTimer-t);const c=this.barkTimer>0,h=r?Math.sin(this.phase)*(a?.75:.45):0;this.legs[0].rotation.x=h,this.legs[3].rotation.x=h,this.legs[1].rotation.x=-h,this.legs[2].rotation.x=-h;for(const g of this.legs)g.position.y=.38+(r?Math.abs(Math.sin(this.phase))*.03:0);const d=r?Math.abs(Math.sin(this.phase))*(a?.07:.035):Math.sin(this.time*2.2)*.01;this.bodyRig.position.y=d,this.bodyRig.rotation.x=a?-.12:r?-.03:0,this.bodyRig.rotation.z=r?Math.sin(this.phase)*.02:0,this.headGroup.rotation.x=o?.5:c?-.32:l?-.1:Math.sin(this.time*1.8)*.03,this.headGroup.rotation.y=l?Math.sin(this.time*2.6)*.12:Math.sin(this.time*1.1)*.08;const u=l?11:r?8:4.5;this.tailGroup.rotation.y=Math.sin(this.time*u)*(l?.55:.35),this.tailGroup.rotation.x=o?-.2:0,this.tongue.scale.y=c||a?1.4:.8;const f=yn(.5+Math.sin(this.time*8)*.03,.42,.6);this.alertSprite.scale.setScalar(f),this.alertSprite.visible=l,c&&(this.bodyRig.position.y+=Math.sin(this.time*40)*.015),s==="CAUGHT"&&(this.bodyRig.rotation.x=-.25,this.headGroup.rotation.x=-.35,this.tailGroup.rotation.y=Math.sin(this.time*14)*.7,this.alertSprite.visible=!1)}}bi=new WeakSet,fu=function(){this.bodyRig=new ie,this.root.add(this.bodyRig);const t=ln(new se(.45,12,9),on.fur,0,.62,0);t.scale.set(.64,.56,1.12),this.bodyRig.add(t);const e=ln(new se(.3,10,8),on.cream,0,.6,.32);e.scale.set(.82,.9,.65),this.bodyRig.add(e);const n=ln(new se(.32,10,8),on.furLight,0,.65,-.36);n.scale.set(.85,.8,.8),this.bodyRig.add(n);const s=ln(new ma(.23,.055,6,14),on.collar,0,.82,.36);this.bodyRig.add(s);const r=ln(new se(.065,8,6),on.tag,0,.65,.49);this.bodyRig.add(r),this.headGroup=new ie,this.headGroup.position.set(0,.92,.5),this.bodyRig.add(this.headGroup);const a=ln(new se(.24,12,9),on.fur,0,0,0);a.scale.set(1,.95,.92),this.headGroup.add(a);const o=ln(new Se(.2,.16,.3),on.furLight,0,-.04,.25);this.headGroup.add(o);const l=ln(new se(.06,8,6),on.nose,0,-.01,.41);this.headGroup.add(l);for(const d of[-1,1]){const u=ln(new se(.045,8,6),on.eye,d*.1,.08,.2),f=ln(new se(.023,6,6),on.pupil,d*.1,.08,.235),g=ln(new Se(.08,.025,.05),on.furDark,d*.1,.15,.19);this.headGroup.add(u,f,g);const y=ln(new se(.12,8,6),on.furDark,d*.18,.13,-.01);y.scale.set(.55,1.15,.45),y.rotation.z=d*.32,this.headGroup.add(y)}this.tongue=ln(new Se(.07,.02,.13),on.tongue,0,-.11,.3),this.tongue.rotation.x=.25,this.headGroup.add(this.tongue),this.tailGroup=new ie,this.tailGroup.position.set(0,.82,-.56);const c=ln(new In(.075,.48,6),on.furDark,0,.18,-.08);c.rotation.x=-.7,this.tailGroup.add(c),this.bodyRig.add(this.tailGroup),this.legs=[];const h=[[-.18,.38,.28],[.18,.38,.28],[-.18,.38,-.28],[.18,.38,-.28]];for(const[d,u,f]of h){const g=new ie;g.position.set(d,u,f);const y=ln(new tn(.06,.075,.34,6),on.fur,0,-.17,0),p=ln(new Se(.14,.08,.18),on.furDark,0,-.35,.03);g.add(y,p),this.root.add(g),this.legs.push(g)}},pu=function(){const t=new ra({map:r_(),transparent:!0,depthWrite:!1});this.alertSprite=new jo(t),this.alertSprite.position.set(0,1.45,0),this.alertSprite.scale.set(.55,.55,.55),this.alertSprite.visible=!1,this.root.add(this.alertSprite)},mu=function(){const t=new zt(new Qn(.5,14),new Le({color:1910034,transparent:!0,opacity:.22,depthWrite:!1}));t.rotation.x=-Math.PI/2,t.position.y=.04,this.root.add(t)};const th=new L(0,.5,0);class o_{constructor(t){this.camera=t,this.offset=new L(-19,22,19),this.lookOffset=new L(0,.7,-1.4),this.focus=new L(0,0,0),this.orbitAngle=.5,this.mode="menu",this.time=0,this.shakeTime=0,this.shakeDuration=1,this.shakeStrength=0,this.zoomImpulse=0,this.reducedMotion=Nl(),this.camera.position.set(16,24,24),this.camera.lookAt(th)}addShake(t,e=.4){this.reducedMotion||(this.shakeStrength=Math.max(this.shakeStrength,t),this.shakeDuration=Math.max(.01,e),this.shakeTime=this.shakeDuration)}addZoomPunch(t=.16){this.reducedMotion||(this.zoomImpulse=Math.max(this.zoomImpulse,t))}resetEffects(){this.shakeTime=0,this.shakeStrength=0,this.zoomImpulse=0}setMode(t){this.mode=t}snapTo(t){this.focus.copy(t),this.camera.position.copy(t).add(this.offset),this.camera.lookAt(t.clone().add(this.lookOffset))}update(t,e){if(this.time+=t,this.shakeTime=Math.max(0,this.shakeTime-t),this.zoomImpulse=Rn(this.zoomImpulse,0,4.5,t),this.mode==="menu"){this.orbitAngle+=t*.055;const a=27,o=new L(Math.cos(this.orbitAngle)*a,19,Math.sin(this.orbitAngle)*a);this.camera.position.lerp(o,1-Math.exp(-1.6*t));const l=th.clone();this.focus.lerp(l,1-Math.exp(-2*t)),this.camera.lookAt(this.focus);return}this.focus.x=Rn(this.focus.x,e.x,3.4,t),this.focus.z=Rn(this.focus.z,e.z,3.4,t),this.focus.y=Rn(this.focus.y,e.y,3.4,t);const n=1-this.zoomImpulse,s=this.focus.clone().addScaledVector(this.offset,n);this.camera.position.x=Rn(this.camera.position.x,s.x,3.2,t),this.camera.position.y=Rn(this.camera.position.y,s.y,3.2,t),this.camera.position.z=Rn(this.camera.position.z,s.z,3.2,t);const r=this.focus.clone().add(this.lookOffset);if(this.camera.lookAt(r),this.shakeTime>0&&this.shakeStrength>0){const a=this.shakeTime/this.shakeDuration,o=this.shakeStrength*a;this.camera.position.x+=Math.sin(this.time*97)*o,this.camera.position.y+=Math.cos(this.time*83)*o*.6,this.camera.position.z+=Math.sin(this.time*71)*o*.5}}}const l_=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight","Space","KeyH"]),Ii=new L,eh=new L,c_=new L(0,1,0),Di=new L,Ys=new L;var la,ca,ha,gu;class h_{constructor(t,e,n){sn(this,ha);sn(this,la,t=>{l_.has(t.code)&&(this.enabled&&t.preventDefault(),this.keys.add(t.code))});sn(this,ca,t=>{this.keys.delete(t.code)});this.camera=t,this.collision=e,this.coverSystem=n,this.keys=new Set,this.velocity=new L,this.heading=0,this.stamina=Je.staminaMax,this.hidden=!1,this.sprinting=!1,this.nearCover=!1,this.coverDistance=1/0,this.speed=0,this.regenTimer=0,this.virtual={x:0,y:0,sprint:!1,hide:!1},this.enabled=!1,this.stepTimer=0,this.exhausted=!1,window.addEventListener("keydown",fr(this,la)),window.addEventListener("keyup",fr(this,ca)),window.addEventListener("blur",()=>this.keys.clear())}setVirtualMove(t,e){this.virtual.x=t,this.virtual.y=e}setVirtualSprint(t){this.virtual.sprint=t}setVirtualHide(t){this.virtual.hide=t}reset(t){this.velocity.set(0,0,0),this.heading=.6,this.stamina=Je.staminaMax,this.hidden=!1,this.sprinting=!1,this.nearCover=!1,this.regenTimer=0,this.speed=0,this.stepTimer=0,this.exhausted=!1,t&&(this.heading=Math.atan2(Qe.gateCenterZ-t.z,Qe.halfW-t.x))}get hideHeld(){return this.keys.has("Space")||this.keys.has("KeyH")||this.virtual.hide}update(t,e,n){if(!this.enabled)return this.speed=0,this.hidden=!1,{speed:0,sprinting:!1,hidden:!1,moving:!1,stamina:this.stamina};const s=this.coverSystem.probe(n.x,n.z);this.coverDistance=s.distance,this.nearCover=s.distance<=1.05,this.hideHeld&&this.coverSystem.canHide(n.x,n.z)?this.hidden=!0:this.hidden=!1;const r=V(this,ha,gu).call(this),a=r.magnitude>.05;let o=0,l=0;a&&!this.hidden&&(this.camera.getWorldDirection(Ii),Ii.y=0,Ii.lengthSq()<1e-4&&Ii.set(0,0,-1),Ii.normalize(),eh.crossVectors(Ii,c_).normalize(),Di.set(0,0,0),Di.addScaledVector(Ii,r.forward),Di.addScaledVector(eh,r.right),Di.lengthSq()>1e-4&&(Di.normalize(),o=Di.x,l=Di.z));const c=(this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||this.virtual.sprint)&&a&&!this.hidden&&!this.exhausted&&this.stamina>.5,h=c?Je.sprintSpeed:Je.walkSpeed;Ys.set(o*h,0,l*h);const d=Ys.x-this.velocity.x,u=Ys.z-this.velocity.z,f=Math.hypot(d,u),y=(a?Je.acceleration:Je.deceleration)*t;f>y?(this.velocity.x+=d/f*y,this.velocity.z+=u/f*y):(this.velocity.x=Ys.x,this.velocity.z=Ys.z),this.hidden&&this.velocity.set(0,0,0),this.speed=Math.hypot(this.velocity.x,this.velocity.z),this.sprinting=c&&this.speed>Je.walkSpeed*.6,this.sprinting&&c?(this.stamina=yn(this.stamina-Je.staminaDrain*t,0,Je.staminaMax),this.regenTimer=Je.staminaRegenDelay):(this.regenTimer=Math.max(0,this.regenTimer-t),this.regenTimer<=0&&(this.stamina=yn(this.stamina+Je.staminaRegen*t,0,Je.staminaMax))),c&&this.stamina<=.01&&(this.exhausted=!0),this.exhausted&&this.stamina>=25&&(this.exhausted=!1);const p=n.x,m=n.z;n.x+=this.velocity.x*t,n.z+=this.velocity.z*t,n.x=yn(n.x,-30,Qe.outerLimitX),n.z=yn(n.z,-17+.35,Qe.halfD-.35),n.x>Qe.halfW+.4&&(n.z=yn(n.z,-17-1.5,Qe.halfD+1.5));const v=this.collision.resolveCircle(n.x,n.z,Je.radius);if(n.x=v.x,n.z=v.z,this.speed>.15){const M=Math.atan2(this.velocity.x,this.velocity.z);this.heading=Xi(this.heading,M,Je.turnSpeed,t),e.setHeading(this.heading)}return bn(p,m,n.x,n.z)<this.speed*t*.15&&this.velocity.multiplyScalar(.4),this.stepTimer-=t,this.speed>.4&&this.stepTimer<=0&&(this.stepTimer=this.sprinting?.24:.36),{speed:this.speed,sprinting:this.sprinting,hidden:this.hidden,moving:this.speed>.2,stamina:this.stamina,step:this.stepTimer>.2}}}la=new WeakMap,ca=new WeakMap,ha=new WeakSet,gu=function(){let t=0,e=0;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(t+=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(t-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(e+=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(e-=1),t+=this.virtual.y,e+=this.virtual.x;const n=Math.hypot(t,e);return n>1&&(t/=n,e/=n),{forward:t,right:e,magnitude:Math.min(1,n)}};const u_=.65;var kt,Re,zi,rl,xu,_u,vu,yu,$r,Mu;class d_{constructor(t,e,n,s,r={}){sn(this,kt);this.human=t,this.vision=e,this.collision=n,this.noise=s,this.callbacks=r,this.state="PATROL",this.speed=0,this.caught=!1,this.gateCheckSpot=je.gateCheckSpot,this.reset()}reset(){this.position={x:je.humanStart.x,z:je.humanStart.z},this.heading=.8,this.state="PATROL",this.stateTime=0,this.speed=0,this.waypointIndex=1,this.waitTimer=0,this.distractCooldown=te(7,11),this.distractTimer=0,this.distractionHeading=0,this.lostSightTimer=0,this.alertLowTimer=0,this.searchTimer=0,this.caught=!1,this.caughtReported=!1,this.nervous=!1,this.routeName="standard",this.gateCheckCooldown=te(pe.gateCheckCooldownMin,pe.gateCheckCooldownMax),this.gateCheckTimer=0,this.gateCheckArrived=!1,this.sinceGateCheck=0,this.investigateTarget={x:0,z:0},this.investigateTimer=0,this.investigateArrived=!1,this.investigateLookHeading=this.heading,this.lastNoiseId=this.noise?this.noise.latestId:0,this.noiseCooldown=0,this.vision.reset(),this.human.setPosition(this.position.x,this.position.z),this.human.setHeading(this.heading),this.human.update(0,{speed:0,state:"PATROL",alert:0})}update(t,e,n,s=!0){if(this.stateTime+=t,!s)return this.speed=0,this.human.setPosition(this.position.x,this.position.z),this.human.setHeading(this.heading),this.human.update(t,{speed:0,state:this.state,alert:this.vision.alert}),{state:this.state,alert:this.vision.alert,sight:this.vision.snapshot()};this.sinceGateCheck+=t;const r=this.vision.update(t,this.position,this.heading,this.state,e,n,!0),a=r.distance;if(this.noiseCooldown=Math.max(0,this.noiseCooldown-t),this.state!=="CAUGHT"&&r.alert<Ne.alertThreshold?V(this,kt,_u).call(this):this.noise&&(this.lastNoiseId=this.noise.latestId),this.state!=="CAUGHT")if(this.state==="PATROL")if(this.distractCooldown-=t,this.gateCheckCooldown-=t,r.alert>=Ne.chaseThreshold)V(this,kt,Re).call(this,"CHASE");else if(r.alert>=Ne.alertThreshold)V(this,kt,Re).call(this,"ALERT");else if(this.gateCheckCooldown<=0)V(this,kt,Re).call(this,"GATE_CHECK");else if(this.distractCooldown<=0)V(this,kt,Re).call(this,"DISTRACTED");else if(this.waitTimer>0)this.waitTimer-=t,this.speed=0;else{const o=V(this,kt,Mu).call(this),l=this.nervous?pe.patrolSpeed*1.1:pe.patrolSpeed;if(V(this,kt,zi).call(this,o.x,o.z,l,t)<.85){const h=V(this,kt,$r).call(this);this.waypointIndex=(this.waypointIndex+1)%h.length;const d=this.nervous?pe.patrolPauseMax*.65:pe.patrolPauseMax;this.waitTimer=te(pe.patrolPauseMin,d)}}else if(this.state==="DISTRACTED")this.speed=0,this.heading=Xi(this.heading,this.distractionHeading,3.5,t),this.distractTimer-=t,r.alert>=.8?V(this,kt,Re).call(this,"ALERT"):this.distractTimer<=0&&V(this,kt,Re).call(this,"PATROL");else if(this.state==="ALERT"){V(this,kt,rl).call(this,r.lastSeen.x,r.lastSeen.z,t,8);const o=r.lastSeen;bn(this.position.x,this.position.z,o.x,o.z)>2.2?V(this,kt,zi).call(this,o.x,o.z,pe.alertSpeed,t):this.speed=0,r.alert>=Ne.chaseThreshold?V(this,kt,Re).call(this,"CHASE"):r.alert<.16?(this.alertLowTimer+=t,this.alertLowTimer>2&&V(this,kt,Re).call(this,"SEARCH")):this.alertLowTimer=0}else if(this.state==="CHASE"){const o=r.visible?e:r.lastSeen;V(this,kt,zi).call(this,o.x,o.z,pe.chaseSpeed,t),r.visible&&V(this,kt,rl).call(this,e.x,e.z,t,10),a<pe.catchRadius&&(!n.hidden||a<1.15)?V(this,kt,Re).call(this,"CAUGHT"):r.visible?this.lostSightTimer=0:(this.lostSightTimer+=t,(this.lostSightTimer>2.8||r.alert<.22)&&V(this,kt,Re).call(this,"SEARCH"))}else if(this.state==="SEARCH"){const o=r.lastSeen,l=bn(this.position.x,this.position.z,o.x,o.z);this.searchTimer-=t,l>1.1?V(this,kt,zi).call(this,o.x,o.z,pe.searchSpeed,t):(this.speed=0,this.heading+=Math.sin(this.stateTime*2.4)*t*1.6),r.visible&&r.alert>=Ne.alertThreshold?V(this,kt,Re).call(this,r.alert>=Ne.chaseThreshold?"CHASE":"ALERT"):this.searchTimer<=0&&(this.nervous&&this.sinceGateCheck>8?V(this,kt,Re).call(this,"GATE_CHECK"):V(this,kt,Re).call(this,"PATROL"))}else this.state==="GATE_CHECK"?V(this,kt,yu).call(this,t,r):this.state==="INVESTIGATE"?V(this,kt,vu).call(this,t,r):this.state==="CAUGHT"&&(this.speed=0);return this.human.setPosition(this.position.x,this.position.z),this.human.setHeading(this.heading),this.human.update(t,{speed:this.speed,state:this.state,alert:this.vision.alert,caught:this.state==="CAUGHT"}),{state:this.state,alert:this.vision.alert,sight:r,caught:this.caught,nervous:this.nervous,gateCheckArrived:this.gateCheckArrived}}}kt=new WeakSet,Re=function(t){if(this.state!==t){if(this.state==="INVESTIGATE"&&(this.noiseCooldown=Math.max(this.noiseCooldown,Mi.reactionCooldown)),this.state=t,this.stateTime=0,this.lostSightTimer=0,this.alertLowTimer=0,(t==="ALERT"||t==="CHASE")&&(this.nervous=!0,this.routeName="nervous"),t==="DISTRACTED"&&(this.distractTimer=te(pe.distractTimeMin,pe.distractTimeMax),this.distractionHeading=this.heading+te(2.2,4.1)),t==="SEARCH"&&(this.searchTimer=pe.searchTime),t==="INVESTIGATE"&&(this.investigateTimer=pe.investigateScanTime,this.investigateArrived=!1,this.investigateLookHeading=this.heading,this.speed=0),t==="GATE_CHECK"&&(this.gateCheckTimer=pe.gateCheckDuration,this.gateCheckArrived=!1,this.sinceGateCheck=0,this.gateCheckCooldown=te(pe.gateCheckRepeatMin,pe.gateCheckRepeatMax),this.speed=0),t==="PATROL"){const e=V(this,kt,$r).call(this);this.waypointIndex%=e.length,this.waitTimer=te(.3,.9),this.distractCooldown=te(pe.distractEveryMin,pe.distractEveryMax),this.vision.alert=Math.min(this.vision.alert,.12)}t==="CAUGHT"&&!this.caughtReported&&(this.caughtReported=!0,this.caught=!0,this.speed=0,this.callbacks.onCaught?.())}},zi=function(t,e,n,s){const r=t-this.position.x,a=e-this.position.z,o=Math.hypot(r,a);if(o<1e-4)return this.speed=0,o;const l=Math.atan2(r,a);this.heading=Xi(this.heading,l,pe.turnSpeed,s);const c=Math.min(n*s,o);let h=this.position.x+r/o*c,d=this.position.z+a/o*c,u=this.collision.resolveCircle(h,d,pe.radius),f=bn(this.position.x,this.position.z,u.x,u.z);if(f<c*.25&&c>.001)for(const g of[.9,-.9,1.5,-1.5]){const y=Math.cos(g),p=Math.sin(g),m=r/o*y-a/o*p,v=r/o*p+a/o*y,S=this.position.x+m*c,M=this.position.z+v*c,C=this.collision.resolveCircle(S,M,pe.radius),A=bn(this.position.x,this.position.z,C.x,C.z);A>f&&(u=C,f=A)}return this.position.x=u.x,this.position.z=u.z,this.speed=s>0?f/s:0,this.speed=Math.min(this.speed,n),o},rl=function(t,e,n,s=7){const r=Math.atan2(t-this.position.x,e-this.position.z);this.heading=Xi(this.heading,r,s,n)},xu=function(){return this.state==="DISTRACTED"?Mi.distractedHearing:this.state==="GATE_CHECK"?Mi.gateCheckHearing:1},_u=function(){if(!this.noise)return!1;if(!(this.state==="PATROL"||this.state==="DISTRACTED"||this.state==="GATE_CHECK")||this.noiseCooldown>0)return this.lastNoiseId=this.noise.latestId,!1;const e=this.noise.getAudibleNoise(this.position.x,this.position.z,V(this,kt,xu).call(this),this.lastNoiseId);return this.lastNoiseId=this.noise.latestId,e?(V(this,kt,Re).call(this,"INVESTIGATE"),this.investigateTarget.x=e.x,this.investigateTarget.z=e.z,this.investigateLookHeading=Math.atan2(e.x-this.position.x,e.z-this.position.z),!0):!1},vu=function(t,e){if(e.alert>=Ne.chaseThreshold){V(this,kt,Re).call(this,"CHASE");return}if(e.alert>=Ne.alertThreshold){V(this,kt,Re).call(this,"ALERT");return}const n=this.investigateTarget;if(bn(this.position.x,this.position.z,n.x,n.z)>.9){V(this,kt,zi).call(this,n.x,n.z,pe.investigateSpeed,t),this.stateTime>pe.investigateMaxTime&&V(this,kt,Re).call(this,"PATROL");return}this.speed=0,this.investigateArrived||(this.investigateArrived=!0),this.investigateTimer-=t,this.heading=this.investigateLookHeading+Math.sin(this.stateTime*2.2)*.65,this.investigateTimer<=0&&V(this,kt,Re).call(this,"PATROL")},yu=function(t,e){if(e.alert>=Ne.chaseThreshold){V(this,kt,Re).call(this,"CHASE");return}if(e.alert>=Ne.alertThreshold){V(this,kt,Re).call(this,"ALERT");return}const n=this.gateCheckSpot;if(bn(this.position.x,this.position.z,n.x,n.z)>u_){this.gateCheckArrived=!1,V(this,kt,zi).call(this,n.x,n.z,pe.gateCheckSpeed,t),this.stateTime>pe.gateCheckDuration+7&&V(this,kt,Re).call(this,"PATROL");return}this.gateCheckArrived=!0,this.speed=0,this.gateCheckTimer-=t;const r=Math.atan2(0-n.x,0-n.z),a=Math.sin(this.stateTime*pe.gateCheckSweepSpeed)*pe.gateCheckSweepAngle;this.heading=Xi(this.heading,r+a,6,t),this.gateCheckTimer<=0&&(this.nervous=!0,this.routeName="nervous",this.waypointIndex=0,V(this,kt,Re).call(this,"PATROL"))},$r=function(){return this.nervous?je.patrolRouteNervous:je.patrolRouteStandard},Mu=function(){return V(this,kt,$r).call(this)[this.waypointIndex]};var Ce,Fn,Jr,Su,bu,Eu,Tu;class f_{constructor(t,e,n,s={}){sn(this,Ce);this.dog=t,this.collision=e,this.noise=n,this.callbacks=s,this.state="PATROL",this.speed=0,this.caught=!1,this.reset()}reset(){this.position={x:Ee.start.x,z:Ee.start.z};const t=Ee.waypoints[1];this.heading=Math.atan2(t.x-this.position.x,t.z-this.position.z),this.state="PATROL",this.stateTime=0,this.speed=0,this.waypointIndex=1,this.sniffTimer=0,this.sightTimer=0,this.alertTimer=0,this.lostTimer=0,this.searchTimer=0,this.lastSeen={x:this.position.x,z:this.position.z},this.lastNoiseId=this.noise?this.noise.latestId:0,this.noiseCooldown=0,this.caught=!1,this.caughtReported=!1,this.barkCount=0,this.dog.resetAnimation(),this.dog.setPosition(this.position.x,this.position.z),this.dog.setHeading(this.heading),this.dog.update(0,{speed:0,state:"PATROL"})}update(t,e,n,s=!0){if(this.stateTime+=t,!s)return this.speed=0,this.dog.setPosition(this.position.x,this.position.z),this.dog.setHeading(this.heading),this.dog.update(t,{speed:0,state:this.state}),{state:this.state,caught:this.caught,barkCount:this.barkCount};this.noiseCooldown=Math.max(0,this.noiseCooldown-t);const r=V(this,Ce,bu).call(this,e,n,t);if(this.state!=="CAUGHT"){let a=null;if(this.state==="PATROL"||this.state==="SNIFF"||this.state==="SEARCH"?a=V(this,Ce,Eu).call(this):this.noise&&(this.lastNoiseId=this.noise.latestId),this.state==="PATROL"||this.state==="SNIFF")if(r.visible&&(r.distance<=Ee.closeSense||this.sightTimer>=.22))this.lastSeen.x=e.x,this.lastSeen.z=e.z,V(this,Ce,Fn).call(this,"ALERT");else if(a&&this.noiseCooldown<=0)this.lastSeen.x=a.x,this.lastSeen.z=a.z,V(this,Ce,Fn).call(this,"ALERT");else if(this.state==="SNIFF")this.speed=0,this.sniffTimer-=t,this.sniffTimer<=0&&V(this,Ce,Fn).call(this,"PATROL");else{const l=Ee.waypoints[this.waypointIndex];V(this,Ce,Jr).call(this,l.x,l.z,Ee.patrolSpeed,t)<.7&&(this.waypointIndex=(this.waypointIndex+1)%Ee.waypoints.length,V(this,Ce,Fn).call(this,"SNIFF"))}else if(this.state==="ALERT")this.speed=0,V(this,Ce,Su).call(this,this.lastSeen.x,this.lastSeen.z,t,10),r.visible&&(this.lastSeen.x=e.x,this.lastSeen.z=e.z),this.alertTimer-=t,this.alertTimer<=0&&V(this,Ce,Fn).call(this,r.visible?"CHASE":"SEARCH");else if(this.state==="CHASE"){const o=r.visible?e:this.lastSeen;V(this,Ce,Jr).call(this,o.x,o.z,Ee.chaseSpeed,t),r.visible?(this.lastSeen.x=e.x,this.lastSeen.z=e.z,this.lostTimer=0):this.lostTimer+=t,r.distance<Ee.catchRadius&&(r.visible||r.distance<.7)?V(this,Ce,Tu).call(this):!r.visible&&this.lostTimer>Ee.lostSightTime&&V(this,Ce,Fn).call(this,"SEARCH")}else this.state==="SEARCH"&&(bn(this.position.x,this.position.z,this.lastSeen.x,this.lastSeen.z)>.8?V(this,Ce,Jr).call(this,this.lastSeen.x,this.lastSeen.z,Ee.searchSpeed,t):(this.speed=0,this.sniffTimer-=t),this.searchTimer-=t,r.visible&&this.sightTimer>.18?(this.lastSeen.x=e.x,this.lastSeen.z=e.z,V(this,Ce,Fn).call(this,"ALERT")):a&&this.noiseCooldown<=0?(this.lastSeen.x=a.x,this.lastSeen.z=a.z,V(this,Ce,Fn).call(this,"ALERT")):this.searchTimer<=0&&V(this,Ce,Fn).call(this,"PATROL"))}return this.dog.setPosition(this.position.x,this.position.z),this.dog.setHeading(this.heading),this.dog.update(t,{speed:this.speed,state:this.state}),{state:this.state,caught:this.caught,barkCount:this.barkCount,position:this.position,sight:r}}}Ce=new WeakSet,Fn=function(t){this.state!==t&&(this.state=t,this.stateTime=0,t==="ALERT"&&(this.alertTimer=Ee.alertDuration,this.speed=0,this.noiseCooldown=1.2,this.barkCount+=1,this.dog.triggerBark(),this.noise?.emit(this.position.x,this.position.z,Ee.barkNoiseRadius,"bark"),this.callbacks.onBark?.(this.position.x,this.position.z)),t==="SNIFF"&&(this.sniffTimer=te(Ee.sniffTimeMin,Ee.sniffTimeMax),this.speed=0),t==="SEARCH"&&(this.searchTimer=Ee.searchTime,this.noiseCooldown=Math.max(this.noiseCooldown,.8)),t==="CHASE"&&(this.lostTimer=0),t==="CAUGHT"&&(this.speed=0))},Jr=function(t,e,n,s){const r=t-this.position.x,a=e-this.position.z,o=Math.hypot(r,a);if(o<1e-4)return this.speed=0,o;this.heading=Xi(this.heading,Math.atan2(r,a),Ee.turnSpeed,s);const l=Math.min(n*s,o);let c=this.position.x+r/o*l,h=this.position.z+a/o*l,d=this.collision.resolveCircle(c,h,Ee.radius),u=bn(this.position.x,this.position.z,d.x,d.z);if(u<l*.25&&l>.001)for(const f of[.9,-.9,1.5,-1.5]){const g=Math.cos(f),y=Math.sin(f),p=r/o*g-a/o*y,m=r/o*y+a/o*g,v=this.collision.resolveCircle(this.position.x+p*l,this.position.z+m*l,Ee.radius),S=bn(this.position.x,this.position.z,v.x,v.z);S>u&&(d=v,u=S)}return this.position.x=d.x,this.position.z=d.z,this.speed=s>0?Math.min(u/s,n):0,o},Su=function(t,e,n,s=8){this.heading=Xi(this.heading,Math.atan2(t-this.position.x,e-this.position.z),s,n)},bu=function(t,e,n){const s=t.x-this.position.x,r=t.z-this.position.z,a=Math.hypot(s,r)||1e-4,o=e.hidden,l=o?Ee.hiddenSightRange:Ee.sightRange,c=o?Ee.hiddenCloseSense:Ee.closeSense,h=Math.sin(this.heading),d=Math.cos(this.heading),u=(s*h+r*d)/a,f=a<=c||u>Math.cos(Ee.halfAngle),g=!this.collision.isBlocked(this.position.x,this.position.z,t.x,t.z),y=f&&a<=l&&g;return y?this.sightTimer=Math.min(1,this.sightTimer+n):this.sightTimer=Math.max(0,this.sightTimer-n*2),{visible:y,distance:a,clear:g}},Eu=function(){if(!this.noise)return null;const t=this.noise.getAudibleNoise(this.position.x,this.position.z,Ee.hearingMultiplier,this.lastNoiseId);return this.lastNoiseId=this.noise.latestId,!t||t.kind==="bark"?null:t},Tu=function(){this.caught||(this.caught=!0,this.caughtReported=!0,this.state="CAUGHT",this.stateTime=0,this.speed=0,this.dog.triggerBark(),this.callbacks.onCaught?.())};class p_{constructor(t){this.collision=t,this.reset()}reset(){this.alert=0,this.visible=!1,this.distance=1/0,this.lastSeen={x:0,z:0},this.hasSeen=!1,this.hideFactor=1,this.inCone=!1}update(t,e,n,s,r,a,o=!0){if(!o)return this.snapshot();const l=r.x-e.x,c=r.z-e.z,h=Math.hypot(l,c)||1e-4;this.distance=h;let d=Ne.range,u=Ne.halfAngle;if(s==="DISTRACTED"?(d=Ne.distractedRange,u*=.55):s==="GATE_CHECK"&&(d=Ne.checkRange,u=Ne.checkHalfAngle),h<Ne.closeRange)this.inCone=!0;else{const y=Math.sin(n),p=Math.cos(n),m=(l*y+c*p)/h;this.inCone=m>Math.cos(u)}a.sprinting&&(d*=1.1);const f=h<=d,g=!this.collision.isBlocked(e.x,e.z,r.x,r.z);if(this.hideFactor=1,a.hidden&&(this.hideFactor=h>2.8?Ne.hidingGain:.45),this.visible=this.inCone&&f&&g&&this.hideFactor>.05,this.visible){const y=1+(1-yn(h/Math.max(d,1),0,1))*1.1;let p=Ne.gainBase*y*this.hideFactor;a.sprinting&&(p*=Ne.sprintGain),s==="CHASE"&&(p*=Ne.chaseGain),s==="DISTRACTED"&&(p*=.45),this.alert=yn(this.alert+p*t,0,1),this.lastSeen.x=r.x,this.lastSeen.z=r.z,this.hasSeen=!0}else{const y=s==="CHASE"?Ne.decay*.55:Ne.decay;this.alert=yn(this.alert-y*t,0,1)}return this.snapshot()}boost(t){this.alert=yn(this.alert+t,0,1)}snapshot(){return{alert:this.alert,visible:this.visible,distance:this.distance,hidingScale:this.hideFactor,lastSeen:{...this.lastSeen},hasSeen:this.hasSeen}}}class m_{constructor(t){this.collisionSystem=t,this.coverObjects=t.getCoverObjects()}distanceToCover(t,e){let n=1/0,s=null;for(const r of this.coverObjects){let a;if(r.type==="circle")a=Math.hypot(t-r.x,e-r.z)-r.radius;else{const o=Math.max(r.minX,Math.min(t,r.maxX)),l=Math.max(r.minZ,Math.min(e,r.maxZ));a=Math.hypot(t-o,e-l)}a<n&&(n=a,s=r)}return{distance:Math.max(0,n),object:s}}canHide(t,e){return this.distanceToCover(t,e).distance<=1.05}probe(t,e){return this.distanceToCover(t,e)}}const xs=96,_s=56,Vr=Math.PI*2;function nh(){return{active:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,rx:0,ry:0,rz:0,spinX:0,spinY:0,spinZ:0,life:0,maxLife:1,size:1,gravity:0,drag:1}}var Be,js,al,wu,Qs,jr;class g_{constructor(t){sn(this,Be);this.scene=t,this.reducedMotion=Nl(),this.density=1,this.dummy=new Ge,this.leafCursor=0,this.dustCursor=0,this.activeLeafCount=0,this.activeDustCount=0,this.leafColors=[new Gt(14263595),new Gt(13658666),new Gt(11549227),new Gt(9414990)],this.puffColors=[new Gt(6979386),new Gt(5598001),new Gt(9071156)],this.leafParticles=Array.from({length:xs},nh),this.dustParticles=Array.from({length:_s},nh);const e=new yi(.26,.17),n=new Float32Array(e.attributes.position.count*3).fill(1);e.setAttribute("color",new re(n,3));const s=new Tt({vertexColors:!0,side:Ye,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});this.leafMesh=new Qo(e,s,xs),this.leafMesh.instanceMatrix.setUsage(Jl),this.leafMesh.frustumCulled=!1,this.leafMesh.castShadow=!1,this.leafMesh.receiveShadow=!1,this.leafMesh.renderOrder=1,this.leafMesh.visible=!1;const r=new se(.11,5,4),a=new Le({color:14074778,transparent:!0,opacity:.28,depthWrite:!1});this.dustMesh=new Qo(r,a,_s),this.dustMesh.instanceMatrix.setUsage(Jl),this.dustMesh.frustumCulled=!1,this.dustMesh.castShadow=!1,this.dustMesh.receiveShadow=!1,this.dustMesh.renderOrder=3,this.dustMesh.visible=!1;for(let l=0;l<xs;l+=1)this.leafMesh.setColorAt(l,this.leafColors[l%this.leafColors.length]),V(this,Be,js).call(this,this.leafMesh,l);this.leafMesh.instanceColor&&(this.leafMesh.instanceColor.needsUpdate=!0),this.leafMesh.instanceMatrix.needsUpdate=!0;for(let l=0;l<_s;l+=1)V(this,Be,js).call(this,this.dustMesh,l);this.dustMesh.instanceMatrix.needsUpdate=!0,this.ringPool=[],this.ringCursor=0,this.activeRingCount=0;const o=new Ll(.965,1,40);for(let l=0;l<8;l+=1){const c=new Le({color:15775083,transparent:!0,opacity:0,side:Ye,depthWrite:!1}),h=new zt(o,c);h.rotation.x=-Math.PI/2,h.position.y=.09,h.visible=!1,h.renderOrder=2,h.frustumCulled=!1,t.add(h),this.ringPool.push({mesh:h,active:!1,x:0,z:0,life:0,maxLife:1,radius:1,opacity:.3})}t.add(this.leafMesh,this.dustMesh)}setDensity(t){this.density=Math.max(.2,Math.min(1,Number(t)||1))}spawnLeafBurst(t,e,n,s=32){if(this.reducedMotion)return 0;const r=Math.max(1,Math.round(s*this.density));let a=0;for(let o=0;o<r;o+=1)V(this,Be,al).call(this,t,e,n,this.leafColors,{radialMin:1.4,radialMax:4.8,velocityYMin:2.4,velocityYMax:6.8,lifeMin:1.1,lifeMax:2,sizeMin:.8,sizeMax:1.7,gravity:-7.5,drag:.985}),a+=1;return V(this,Be,Qs).call(this),a}spawnLeafPuff(t,e,n=6){if(this.reducedMotion)return 0;const s=Math.max(1,Math.round(n*this.density));for(let r=0;r<s;r+=1)V(this,Be,al).call(this,t,.85,e,this.puffColors,{radialMin:.3,radialMax:1.3,velocityYMin:.5,velocityYMax:1.8,lifeMin:.65,lifeMax:1.2,sizeMin:.55,sizeMax:1.05,gravity:-3.2,drag:.94});return V(this,Be,Qs).call(this),s}spawnNoiseRing(t,e,n,s="walk"){const r=this.ringPool[this.ringCursor];return this.ringCursor=(this.ringCursor+1)%this.ringPool.length,r.active=!0,r.x=t,r.z=e,r.radius=n,r.maxLife=s==="bark"?.85:s==="sprint"?.65:.45,r.life=r.maxLife,r.opacity=s==="bark"?.42:s==="sprint"?.38:.2,r.mesh.position.set(t,.09,e),r.mesh.scale.setScalar(.7),r.mesh.material.color.setHex(s==="bark"?14240306:s==="sprint"?15764028:15124878),r.mesh.material.opacity=r.opacity,r.mesh.visible=!0,r}spawnDust(t,e,n,s,r=2){if(this.reducedMotion)return 0;const a=Math.max(1,Math.round(r*this.density));for(let o=0;o<a;o+=1){const l=this.dustCursor;this.dustCursor=(this.dustCursor+1)%_s;const c=this.dustParticles[l];c.active=!0,c.x=t+(Math.random()-.5)*.5,c.y=.12+Math.random()*.18,c.z=e+(Math.random()-.5)*.5,c.vx=n*(.3+Math.random()*.9)+(Math.random()-.5)*.7,c.vz=s*(.3+Math.random()*.9)+(Math.random()-.5)*.7,c.vy=.35+Math.random()*.9,c.life=.35+Math.random()*.35,c.maxLife=c.life,c.size=.55+Math.random()*.6,c.gravity=-1.1,c.drag=.92}return V(this,Be,jr).call(this),a}update(t){if(!(t<=0)&&(V(this,Be,wu).call(this,t),!(this.activeLeafCount===0&&this.activeDustCount===0))){for(let e=0;e<xs;e+=1){const n=this.leafParticles[e];if(n.active){if(n.life-=t,n.life<=0){n.active=!1;continue}n.vy+=n.gravity*t,n.vx*=n.drag,n.vy*=n.drag,n.vz*=n.drag,n.x+=n.vx*t,n.y+=n.vy*t,n.z+=n.vz*t,n.rx+=n.spinX*t,n.ry+=n.spinY*t,n.rz+=n.spinZ*t}}for(let e=0;e<_s;e+=1){const n=this.dustParticles[e];if(n.active){if(n.life-=t,n.life<=0){n.active=!1;continue}n.vy+=n.gravity*t,n.vx*=n.drag,n.vy*=n.drag,n.vz*=n.drag,n.x+=n.vx*t,n.y+=n.vy*t,n.z+=n.vz*t}}V(this,Be,Qs).call(this),V(this,Be,jr).call(this)}}clear(){for(const t of this.leafParticles)t.active=!1;for(const t of this.dustParticles)t.active=!1;for(const t of this.ringPool)t.active=!1,t.mesh.visible=!1,t.mesh.material.opacity=0;this.activeRingCount=0,V(this,Be,Qs).call(this),V(this,Be,jr).call(this)}}Be=new WeakSet,js=function(t,e){this.dummy.position.set(0,-1e3,0),this.dummy.rotation.set(0,0,0),this.dummy.scale.setScalar(0),this.dummy.updateMatrix(),t.setMatrixAt(e,this.dummy.matrix)},al=function(t,e,n,s,r){if(this.reducedMotion)return null;const a=this.leafCursor;this.leafCursor=(this.leafCursor+1)%xs;const o=this.leafParticles[a],l=Math.random()*Vr,c=r.radialMin+Math.random()*(r.radialMax-r.radialMin);return o.active=!0,o.x=t+(Math.random()-.5)*.5,o.y=e+(Math.random()-.3)*.4,o.z=n+(Math.random()-.5)*.5,o.vx=Math.cos(l)*c,o.vz=Math.sin(l)*c,o.vy=r.velocityYMin+Math.random()*(r.velocityYMax-r.velocityYMin),o.rx=Math.random()*Vr,o.ry=Math.random()*Vr,o.rz=Math.random()*Vr,o.spinX=(Math.random()-.5)*8,o.spinY=(Math.random()-.5)*7,o.spinZ=(Math.random()-.5)*6,o.life=r.lifeMin+Math.random()*(r.lifeMax-r.lifeMin),o.maxLife=o.life,o.size=r.sizeMin+Math.random()*(r.sizeMax-r.sizeMin),o.gravity=r.gravity,o.drag=r.drag,this.leafMesh.setColorAt(a,s[Math.floor(Math.random()*s.length)]),this.leafMesh.instanceColor&&(this.leafMesh.instanceColor.needsUpdate=!0),a},wu=function(t){let e=0;for(const n of this.ringPool){if(!n.active)continue;if(n.life-=t,n.life<=0){n.active=!1,n.mesh.visible=!1;continue}e+=1;const s=1-n.life/n.maxLife,r=1-Math.pow(1-s,3),a=.7+(n.radius-.7)*r;n.mesh.scale.setScalar(a),n.mesh.position.y=.09,n.mesh.material.opacity=n.opacity*(1-s)}this.activeRingCount=e},Qs=function(){let t=0;for(let e=0;e<xs;e+=1){const n=this.leafParticles[e];if(!n.active){V(this,Be,js).call(this,this.leafMesh,e);continue}t+=1,this.dummy.position.set(n.x,n.y,n.z),this.dummy.rotation.set(n.rx,n.ry,n.rz);const s=.35+.65*Math.max(0,n.life/n.maxLife);this.dummy.scale.setScalar(n.size*s),this.dummy.updateMatrix(),this.leafMesh.setMatrixAt(e,this.dummy.matrix)}this.activeLeafCount=t,this.leafMesh.visible=t>0,this.leafMesh.instanceMatrix.needsUpdate=!0},jr=function(){let t=0;for(let e=0;e<_s;e+=1){const n=this.dustParticles[e];if(!n.active){V(this,Be,js).call(this,this.dustMesh,e);continue}t+=1,this.dummy.position.set(n.x,n.y,n.z),this.dummy.rotation.set(0,0,0);const s=.4+.6*Math.max(0,n.life/n.maxLife);this.dummy.scale.setScalar(n.size*s),this.dummy.updateMatrix(),this.dustMesh.setMatrixAt(e,this.dummy.matrix)}this.activeDustCount=t,this.dustMesh.visible=t>0,this.dustMesh.instanceMatrix.needsUpdate=!0};class x_{constructor(){this.events=[],this.latestId=0,this.lastEvent=null}reset(){this.events.length=0,this.latestId=0,this.lastEvent=null}emit(t,e,n,s="walk"){this.latestId+=1;const r=s==="sprint"?Mi.sprintLife:s==="bark"?Mi.barkLife:Mi.walkLife,a={id:this.latestId,x:t,z:e,radius:n,kind:s,age:0,life:r};return this.events.push(a),this.lastEvent=a,a}update(t){if(t<=0)return;let e=0;for(let n=0;n<this.events.length;n+=1){const s=this.events[n];s.age+=t,s.age<s.life&&(this.events[e]=s,e+=1)}this.events.length=e}getAudibleNoise(t,e,n=1,s=0){let r=null;for(const a of this.events)a.id<=s||Math.hypot(t-a.x,e-a.z)>a.radius*n||(!r||a.id>r.id)&&(r=a);return r}}const Au="turkey-run.best-run.v1";function ni(i){const t=Math.max(0,Math.round(Number(i)||0)),e=Math.floor(t/60),n=t%60;return`${e}:${String(n).padStart(2,"0")}`}function __({won:i,time:t=0,spotted:e=0,chased:n=0}){if(!i)return{letter:"F",label:"TONIGHT'S DINNER",penalty:null};const s=Math.max(0,Number(t)||0)+e*12+n*10;return s<=50?{letter:"S",label:"FREE RANGE",penalty:s}:s<=75?{letter:"A",label:"CLEAN GETAWAY",penalty:s}:s<=105?{letter:"B",label:"LUCKY BIRD",penalty:s}:{letter:"C",label:"BARELY A BIRD",penalty:s}}function v_(){try{const i=window.localStorage.getItem(Au);if(!i)return null;const t=JSON.parse(i);return!t||typeof t.time!="number"||!Number.isFinite(t.time)||typeof t.grade!="string"?null:{time:Math.max(0,Math.round(t.time)),grade:t.grade,spotted:Math.max(0,Math.round(Number(t.spotted)||0))}}catch{return null}}function y_(i){try{return window.localStorage.setItem(Au,JSON.stringify(i)),!0}catch{return!1}}function M_(i,t){return t?i.time!==t.time?i.time<t.time:(i.spotted||0)<(t.spotted||0):!0}const Cu="turkey-run.quality.v1",Cs={high:{key:"high",label:"HIGH",maxPixelRatio:2,shadows:!0,shadowSize:4096,effectsDensity:1,description:"Up to 2× resolution · 4096 shadows · full effects"},medium:{key:"medium",label:"MEDIUM",maxPixelRatio:1.5,shadows:!0,shadowSize:2048,effectsDensity:.65,description:"Up to 1.5× resolution · 2048 shadows · reduced effects"},low:{key:"low",label:"LOW",maxPixelRatio:1,shadows:!1,shadowSize:512,effectsDensity:.35,description:"1× resolution · shadows off · minimal effects"}};function S_(){const i=window.matchMedia?.("(pointer: coarse)")?.matches??!1,t=window.innerWidth<900;return i||t?"medium":"high"}function b_(){try{const i=window.localStorage.getItem(Cu);if(i&&Cs[i])return i}catch{}return S_()}function E_(i){if(!Cs[i])return!1;try{return window.localStorage.setItem(Cu,i),!0}catch{return!1}}function Ul(i){return String(i||"event").toLowerCase().replace(/[^a-z0-9_]/g,"_").replace(/_+/g,"_").slice(0,40)}function T_(i){const t={};if(!i||typeof i!="object")return t;for(const[e,n]of Object.entries(i)){if(n==null)continue;const s=Ul(e);typeof n=="number"?Number.isFinite(n)&&(t[s]=n):typeof n=="boolean"?t[s]=n:typeof n=="string"&&(t[s]=n.slice(0,100))}return t}function Ru(){return typeof window<"u"&&window.__ANALYTICS_ENABLED__===!0}function Pe(i,t={}){if(!Ru())return!1;const e=Ul(i),n=T_(t);try{window.gtag?.("event",e,n)}catch{}try{window.clarity?.("event",e)}catch{}return!0}function Ni(i,t){if(!Ru()||!window.clarity)return!1;const e=Ul(i);if(!e)return!1;try{return window.clarity("set",e,String(t??"").slice(0,80)),!0}catch{return!1}}const Ui=1200,Fi=630,ih={S:{from:"#f8dd85",to:"#d9992b",border:"#8a5a12",ink:"#4a2c18"},A:{from:"#c8e59a",to:"#7aa844",border:"#4c6a2b",ink:"#26370f"},B:{from:"#b8e2ee",to:"#5d9ab5",border:"#3d6b80",ink:"#153440"},C:{from:"#e8cba2",to:"#b17a43",border:"#7d4f26",ink:"#3a210f"},F:{from:"#ee9e80",to:"#b23a22",border:"#6e1f12",ink:"#fff1e5"}};function Zs(i,t,e,n,s,r){const a=Math.min(r,n/2,s/2);i.beginPath(),i.moveTo(t+a,e),i.lineTo(t+n-a,e),i.quadraticCurveTo(t+n,e,t+n,e+a),i.lineTo(t+n,e+s-a),i.quadraticCurveTo(t+n,e+s,t+n-a,e+s),i.lineTo(t+a,e+s),i.quadraticCurveTo(t,e+s,t,e+s-a),i.lineTo(t,e+a),i.quadraticCurveTo(t,e,t+a,e),i.closePath()}function Wr(i,t,e,n,s,r,a=1){i.save(),i.translate(t,e),i.rotate(s),i.scale(1,.44),i.globalAlpha=a,i.fillStyle=r,i.beginPath(),i.arc(0,0,n,0,Math.PI*2),i.fill(),i.restore()}function $e(i,t,e,n,s,r){i.font=s,i.fillStyle=r,i.fillText(t,e,n)}function w_(i){const t=i.won?"freedom":"caught",e=String(i.timeText||ni(i.time||0)).replace(":","m"),n=i.grade?.letter||"F";return`turkey-run-${t}-${e}s-${n}.png`}function A_(i){const t=i.timeText||ni(i.time||0),e=i.grade?.letter||"F";return i.won?`I escaped Thanksgiving in ${t} with grade ${e} in Turkey Run! Play: ${_i}`:`I got caught ${Math.max(1,Math.round(i.distance||0))} m from the gate in Turkey Run. Happy Thanksgiving... I guess. Play: ${_i}`}function C_(i){const t=document.createElement("canvas");t.width=Ui,t.height=Fi;const e=t.getContext("2d"),n=!!i.won,s=i.grade||{letter:n?"C":"F",label:n?"BARELY A BIRD":"TONIGHT'S DINNER"},r=ih[s.letter]||ih.C,a=i.timeText||ni(i.time||0),o=i.spotted??0,l=i.chased??0,c=i.hides??0,h=i.distractions??0,d=Math.max(1,Math.round(i.distance||0)),u=i.best,f=e.createLinearGradient(0,0,Ui,Fi);f.addColorStop(0,"#2a160a"),f.addColorStop(.55,"#4a2b14"),f.addColorStop(1,"#241309"),e.fillStyle=f,e.fillRect(0,0,Ui,Fi);const g=e.createRadialGradient(610,300,40,610,300,720);g.addColorStop(0,"rgba(255, 196, 110, 0.16)"),g.addColorStop(1,"rgba(255, 196, 110, 0)"),e.fillStyle=g,e.fillRect(0,0,Ui,Fi);for(let _=0;_<9;_+=1)Wr(e,30+_*151%Ui,20+_*97%Fi,22+_%4*9,_*.7,_%3===0?"#d06a2a":_%3===1?"#b03a2b":"#d9a52b",.16);e.save(),e.shadowColor="rgba(0, 0, 0, 0.45)",e.shadowBlur=34,e.shadowOffsetY=14;const y=e.createLinearGradient(0,40,0,590);y.addColorStop(0,"#f9eed9"),y.addColorStop(1,"#efd9b2"),Zs(e,42,42,Ui-84,Fi-84,28),e.fillStyle=y,e.fill(),e.restore(),Zs(e,42,42,Ui-84,Fi-84,28),e.lineWidth=5,e.strokeStyle="#5a3418",e.stroke(),Wr(e,1112,528,44,-.6,"#d06a2a",.32),Wr(e,1082,560,28,.4,"#d9a52b",.28),Wr(e,78,548,34,1.1,"#b03a2b",.22),$e(e,"T H A N K S G I V I N G   E S C A P E",84,102,'bold 16px "Trebuchet MS", Verdana, sans-serif',"#8a5a2c"),e.save(),e.fillStyle="rgba(90, 52, 24, 0.22)",e.font='bold 80px Georgia, "Times New Roman", serif',e.fillText("TURKEY RUN",86,186),e.restore(),$e(e,"TURKEY RUN",84,184,'bold 80px Georgia, "Times New Roman", serif',"#b23a22"),$e(e,"NO ROAST FOR ME!",86,226,'italic 30px Georgia, "Times New Roman", serif',"#6b4426"),e.strokeStyle="rgba(90, 52, 24, 0.24)",e.lineWidth=2,e.beginPath(),e.moveTo(84,250),e.lineTo(706,250),e.stroke(),$e(e,n?"FREEDOM!":"HAPPY THANKSGIVING!",84,n?330:326,n?'bold 70px Georgia, "Times New Roman", serif':'bold 43px Georgia, "Times New Roman", serif',n?"#4f7a34":"#a83321"),$e(e,n?"You escaped Thanksgiving!":"You are tonight's special guest.",86,372,'24px "Trebuchet MS", Verdana, sans-serif',"#4a2c18"),$e(e,n?`Escaped in ${a} · Grade ${s.letter}`:i.caughtBy==="dog"?`The dog got you ${d} m from the gate after ${a}`:`Caught ${d} m from the gate after ${a}`,86,406,'20px "Trebuchet MS", Verdana, sans-serif',"#8a6640");const p=[["SPOTTED",o],["CHASED",l],["HIDES",c],["PHONE BREAKS",h]];for(let _=0;_<p.length;_+=1){const E=86+_*158;$e(e,p[_][0],E,466,'bold 12px "Trebuchet MS", Verdana, sans-serif',"#8a5a2c"),$e(e,String(p[_][1]),E,508,'bold 34px Georgia, "Times New Roman", serif',"#5a3418")}const m=524;Zs(e,84,m,614,39,10),e.fillStyle="rgba(90, 52, 24, 0.075)",e.fill(),e.strokeStyle="rgba(90, 52, 24, 0.2)",e.lineWidth=1.5,e.stroke(),$e(e,"PLAY",98,m+25,'bold 12px "Trebuchet MS", Verdana, sans-serif',"#8a5a2c"),$e(e,_i,137,m+25,'bold 12px "Trebuchet MS", Verdana, sans-serif',"#5a3418"),e.strokeStyle="rgba(90, 52, 24, 0.22)",e.lineWidth=2,e.beginPath(),e.moveTo(752,92),e.lineTo(752,538),e.stroke(),e.save(),e.textAlign="center",$e(e,"YOUR GRADE",916,82,'bold 13px "Trebuchet MS", Verdana, sans-serif',"#8a5a2c");const S=790,M=96,C=252,A=252;e.save(),e.shadowColor="rgba(90, 52, 24, 0.3)",e.shadowBlur=18,e.shadowOffsetY=8,Zs(e,S,M,C,A,30);const P=e.createLinearGradient(S,M,S+C,M+A);return P.addColorStop(0,r.from),P.addColorStop(1,r.to),e.fillStyle=P,e.fill(),e.restore(),Zs(e,S,M,C,A,30),e.lineWidth=5,e.strokeStyle=r.border,e.stroke(),e.fillStyle=r.ink,e.textAlign="center",e.textBaseline="middle",e.font='bold 156px Georgia, "Times New Roman", serif',e.fillText(s.letter,S+C/2,M+112),e.font='bold 16px "Trebuchet MS", Verdana, sans-serif',e.fillText(s.label,S+C/2,M+212),e.textBaseline="alphabetic",$e(e,a,916,424,'bold 64px Georgia, "Times New Roman", serif',"#5a3418"),e.textAlign="center",$e(e,n?"ESCAPE TIME":"TIME UNTIL DINNER",916,452,'bold 13px "Trebuchet MS", Verdana, sans-serif',"#8a5a2c"),i.newBest?$e(e,"NEW BEST RUN!",916,500,'bold 20px "Trebuchet MS", Verdana, sans-serif',"#b23a22"):u?$e(e,`BEST RUN ${ni(u.time)} · ${u.grade}`,916,500,'bold 18px "Trebuchet MS", Verdana, sans-serif',"#8a6640"):$e(e,"FIRST RECORDED RUN",916,500,'bold 16px "Trebuchet MS", Verdana, sans-serif',"#8a6640"),$e(e,n?"THE HUMAN IS STILL YELLING AT HIS PHONE.":"THE OVEN IS PREHEATED.",916,530,'13px "Trebuchet MS", Verdana, sans-serif',"#96744a"),e.restore(),t}var ua,Pu;class R_{constructor(t={}){sn(this,ua);this.callbacks=t,this.toastTimer=null;const e=window.matchMedia?.("(pointer: coarse)")?.matches??!1;this.mobile=e_()&&e,this.hud=document.getElementById("hud"),this.startScreen=document.getElementById("start-screen"),this.pauseScreen=document.getElementById("pause-screen"),this.endScreen=document.getElementById("end-screen"),this.mobileControls=document.getElementById("mobile-controls"),this.dangerVignette=document.getElementById("danger-vignette"),this.screenFlash=document.getElementById("screen-flash"),this.dangerLevel="safe",this.startHistoryBtn=document.getElementById("history-btn"),this.endHistoryBtn=document.getElementById("end-history-btn"),this.pauseHistoryBtn=document.getElementById("pause-history-btn"),this.historyScreen=document.getElementById("history-screen"),this.historyList=document.getElementById("history-list"),this.historyCloseBtn=document.getElementById("history-close-btn"),this.endShareBtn=document.getElementById("end-share-btn"),this.shareScreen=document.getElementById("share-screen"),this.shareImage=document.getElementById("share-image"),this.shareDownloadBtn=document.getElementById("share-download-btn"),this.shareNativeBtn=document.getElementById("share-native-btn"),this.shareCopyBtn=document.getElementById("share-copy-btn"),this.shareUrlText=document.getElementById("share-url-text"),this.shareCloseBtn=document.getElementById("share-close-btn"),this.copyResetTimer=null,this.startQualityBtn=document.getElementById("quality-btn"),this.pauseQualityBtn=document.getElementById("pause-quality-btn"),this.qualityScreen=document.getElementById("quality-screen"),this.qualityOptions=[...document.querySelectorAll(".quality-option")],this.qualityCloseBtn=document.getElementById("quality-close-btn"),this.perfFps=document.getElementById("perf-fps"),this.perfCalls=document.getElementById("perf-calls"),this.perfRatio=document.getElementById("perf-ratio"),this.history=[],this.historyOpen=!1,this.shareOpen=!1,this.qualityOpen=!1,this.qualityKey="high",this.lastResult=null,this.bestRun=null,this.shareCanvas=null,this.shareBlob=null,this.shareFileName="",this.shareText="",this.alertCard=document.getElementById("alert-card"),this.alertTitle=document.getElementById("alert-title"),this.alertSub=document.getElementById("alert-sub"),this.objectiveDist=document.getElementById("objective-dist"),this.staminaFill=document.getElementById("stamina-fill"),this.staminaValue=document.getElementById("stamina-value"),this.hideBadge=document.getElementById("hide-badge"),this.prompt=document.getElementById("prompt"),this.toastEl=document.getElementById("toast"),this.endEyebrow=document.getElementById("end-eyebrow"),this.endTitle=document.getElementById("end-title"),this.endSubtitle=document.getElementById("end-subtitle"),this.endDetail=document.getElementById("end-detail"),this.bestRunValue=document.getElementById("best-run-value"),this.gradeBadge=document.getElementById("grade-badge"),this.gradeLetter=document.getElementById("grade-letter"),this.gradeLabel=document.getElementById("grade-label"),this.resultTimeValue=document.getElementById("result-time-value"),this.resultTimeLabel=document.getElementById("result-time-label"),this.statSpotted=document.getElementById("stat-spotted"),this.statChased=document.getElementById("stat-chased"),this.statHides=document.getElementById("stat-hides"),this.statDistractions=document.getElementById("stat-distractions"),this.recordLine=document.getElementById("record-line"),this.muteButtons=[document.getElementById("mute-btn"),document.getElementById("pause-mute-btn"),document.getElementById("end-mute-btn")],this.mobile&&document.body.classList.add("mobile"),document.getElementById("start-btn")?.addEventListener("click",()=>this.callbacks.onStart?.()),document.getElementById("resume-btn")?.addEventListener("click",()=>this.callbacks.onResume?.()),document.getElementById("pause-restart-btn")?.addEventListener("click",()=>this.callbacks.onRestart?.()),document.getElementById("retry-btn")?.addEventListener("click",()=>this.callbacks.onRestart?.()),document.getElementById("pause-btn")?.addEventListener("click",()=>this.callbacks.onPause?.());for(const n of[this.startHistoryBtn,this.endHistoryBtn,this.pauseHistoryBtn])n?.addEventListener("click",()=>this.openHistory());this.historyCloseBtn?.addEventListener("click",()=>this.closeHistory()),this.endShareBtn?.addEventListener("click",()=>this.openShareCard()),this.shareCloseBtn?.addEventListener("click",()=>this.closeShareCard()),this.shareDownloadBtn?.addEventListener("click",()=>this.downloadShareCard()),this.shareNativeBtn?.addEventListener("click",()=>this.shareNative()),this.shareCopyBtn?.addEventListener("click",()=>this.copyGameLink()),this.startQualityBtn?.addEventListener("click",()=>this.openQuality()),this.pauseQualityBtn?.addEventListener("click",()=>this.openQuality()),this.qualityCloseBtn?.addEventListener("click",()=>this.closeQuality());for(const n of this.qualityOptions)n.addEventListener("click",()=>{this.callbacks.onQualitySelect?.(n.dataset.quality)});for(const n of document.querySelectorAll(".blog-link"))n.addEventListener("click",()=>{Pe("blog_open",{source:n.dataset.blogSource||"unknown"})});for(const n of this.muteButtons)n?.addEventListener("click",()=>{const s=this.callbacks.onToggleMute?.();this.setMuted(s)});V(this,ua,Pu).call(this)}showStart(){this.startScreen.classList.remove("hidden")}hideStart(){this.startScreen.classList.add("hidden")}setHudVisible(t){this.hud.classList.toggle("hidden",!t),this.mobileControls&&this.mobileControls.classList.toggle("hidden",!t),t||(this.dangerLevel="safe",this.dangerVignette.className="")}setDangerLevel(t){this.dangerLevel!==t&&(this.dangerLevel=t,this.dangerVignette.className=t==="safe"?"":t)}flash(t){this.screenFlash&&(this.screenFlash.className="",this.screenFlash.offsetWidth,this.screenFlash.classList.add(t))}resetTransientEffects(){this.setDangerLevel("safe"),this.screenFlash&&(this.screenFlash.className=""),this.closeHistory(),this.closeShareCard(),this.closeQuality(),this.lastResult=null}showPause(){this.pauseScreen.classList.remove("hidden")}hidePause(){this.pauseScreen.classList.add("hidden")}setBestRun(t){this.bestRun=t,this.bestRunValue&&(t?(this.bestRunValue.textContent=`${ni(t.time)} · ${t.grade}`,this.bestRunValue.classList.remove("empty")):(this.bestRunValue.textContent="No escape yet",this.bestRunValue.classList.add("empty")),this.historyOpen&&this.renderHistory())}setHistory(t){this.history=Array.isArray(t)?t:[];const e=this.history.length;this.startHistoryBtn&&(this.startHistoryBtn.textContent=e>0?`RUN HISTORY (${e})`:"RUN HISTORY"),this.endHistoryBtn&&(this.endHistoryBtn.textContent=e>0?`HISTORY (${e})`:"HISTORY"),this.pauseHistoryBtn&&(this.pauseHistoryBtn.textContent=e>0?`HISTORY (${e})`:"HISTORY"),this.historyOpen&&this.renderHistory()}formatHistoryDate(t){if(!Number.isFinite(t))return"";const e=new Date(t);return Number.isNaN(e.getTime())?"":e.toLocaleDateString(void 0,{month:"short",day:"numeric"})}renderHistory(){if(this.historyList){if(this.historyList.replaceChildren(),this.history.length===0){const t=document.createElement("div");t.className="history-empty",t.textContent="No runs yet. The record book is empty.",this.historyList.append(t);return}for(const t of this.history){const e=document.createElement("div");e.className="history-row";const n=document.createElement("span");n.className="history-grade",n.dataset.grade=t.grade||"F",n.textContent=t.grade||"F";const s=document.createElement("div");s.className="history-main";const r=document.createElement("div");r.className="history-title-row";const a=document.createElement("span");if(a.className="history-outcome",t.won?a.textContent="Escaped Thanksgiving!":t.caughtBy==="dog"?a.textContent=`The dog caught you ${Math.max(1,Math.round(t.distance||0))} m from the gate`:a.textContent=`Caught ${Math.max(1,Math.round(t.distance||0))} m from the gate`,r.append(a),t.won&&this.bestRun&&Math.round(t.time)===this.bestRun.time&&t.grade===this.bestRun.grade){const d=document.createElement("span");d.className="history-best",d.textContent="BEST",r.append(d)}const l=[this.formatHistoryDate(t.at)];t.spotted&&l.push(`${t.spotted} spotted`),t.chased&&l.push(`${t.chased} chased`),t.hides&&l.push(`${t.hides} hides`);const c=document.createElement("span");c.className="history-meta",c.textContent=l.filter(Boolean).join(" · "),s.append(r,c);const h=document.createElement("span");h.className="history-time",h.textContent=ni(t.time),e.append(n,s,h),this.historyList.append(e)}}}openHistory(){Pe("history_open",{runs:this.history.length}),this.renderHistory(),this.historyOpen=!0,this.historyScreen?.classList.remove("hidden")}closeHistory(){this.historyOpen=!1,this.historyScreen?.classList.add("hidden")}isOverlayOpen(){return this.historyOpen||this.shareOpen||this.qualityOpen}setQuality(t){const e=Cs[t]||Cs.high;this.qualityKey=e.key;const n=`GRAPHICS: ${e.label}`;this.startQualityBtn&&(this.startQualityBtn.textContent=n),this.pauseQualityBtn&&(this.pauseQualityBtn.textContent=n);for(const s of this.qualityOptions)s.classList.toggle("selected",s.dataset.quality===e.key)}openQuality(){Pe("quality_panel_open",{preset:this.qualityKey}),this.qualityOpen=!0,this.setQuality(this.qualityKey),this.qualityScreen?.classList.remove("hidden")}closeQuality(){this.qualityOpen=!1,this.qualityScreen?.classList.add("hidden")}setPerformanceStats({fps:t=0,drawCalls:e=0,pixelRatio:n=1}={}){this.perfFps&&(this.perfFps.textContent=String(Math.max(0,Math.round(t)))),this.perfCalls&&(this.perfCalls.textContent=String(Math.max(0,Math.round(e)))),this.perfRatio&&(this.perfRatio.textContent=`${Number(n).toFixed(2)}×`)}openShareCard(){if(!this.lastResult)return;Pe("share_card_open",{won:!!this.lastResult.won,grade:this.lastResult.grade?.letter||"F"});const t={...this.lastResult,best:this.lastResult.best||this.bestRun},e=C_(t);this.shareCanvas=e,this.shareFileName=w_(t),this.shareText=A_(t),this.shareBlob=null,this.shareOpen=!0,this.shareNativeBtn?.classList.add("hidden"),this.shareUrlText&&(this.shareUrlText.textContent=_i),this.shareCopyBtn&&(this.shareCopyBtn.textContent="COPY LINK"),this.copyResetTimer&&clearTimeout(this.copyResetTimer),this.shareImage&&(this.shareImage.alt=t.won?"Turkey Run escape result card":"Turkey Run caught result card",this.shareImage.src=e.toDataURL("image/png")),this.shareScreen?.classList.remove("hidden"),e.toBlob(n=>{if(this.shareOpen&&(this.shareBlob=n,!!n))try{const s=new File([n],this.shareFileName,{type:"image/png"}),r=!!(navigator.canShare?.({files:[s]})&&navigator.share);this.shareNativeBtn?.classList.toggle("hidden",!r)}catch{this.shareNativeBtn?.classList.add("hidden")}},"image/png")}closeShareCard(){this.shareOpen=!1,this.shareScreen?.classList.add("hidden"),this.shareImage&&this.shareImage.removeAttribute("src"),this.shareNativeBtn?.classList.add("hidden"),this.copyResetTimer&&clearTimeout(this.copyResetTimer),this.shareCopyBtn&&(this.shareCopyBtn.textContent="COPY LINK"),this.shareCanvas=null,this.shareBlob=null,this.shareFileName=""}downloadShareCard(){if(!this.shareCanvas)return;Pe("share_card_download",{won:!!this.lastResult?.won,grade:this.lastResult?.grade?.letter||"F"});const t=this.shareFileName||"turkey-run-result.png",e=document.createElement("a");if(e.download=t,e.rel="noopener",this.shareBlob){const n=URL.createObjectURL(this.shareBlob);e.href=n,document.body.appendChild(e),e.click(),e.remove(),setTimeout(()=>URL.revokeObjectURL(n),2e3)}else e.href=this.shareCanvas.toDataURL("image/png"),document.body.appendChild(e),e.click(),e.remove()}async copyGameLink(){let t=!1;try{await navigator.clipboard.writeText(_i),t=!0}catch{try{const e=document.createElement("textarea");e.value=_i,e.setAttribute("readonly",""),e.style.position="fixed",e.style.opacity="0",document.body.appendChild(e),e.select(),t=document.execCommand("copy"),e.remove()}catch{t=!1}}this.shareCopyBtn&&(this.shareCopyBtn.textContent=t?"COPIED!":"COPY FAILED",this.copyResetTimer&&clearTimeout(this.copyResetTimer),this.copyResetTimer=setTimeout(()=>{this.shareCopyBtn&&(this.shareCopyBtn.textContent="COPY LINK")},1800)),t&&Pe("share_link_copy",{source:"share_panel"})}async shareNative(){if(!(!this.shareBlob||!navigator.share))try{const t=new File([this.shareBlob],this.shareFileName||"turkey-run-result.png",{type:"image/png"});if(!navigator.canShare?.({files:[t]}))return;await navigator.share({files:[t],title:"Turkey Run",text:this.shareText||`Play Turkey Run: ${_i}`,url:_i}),Pe("share_card_shared",{won:!!this.lastResult?.won,grade:this.lastResult?.grade?.letter||"F"})}catch{}}showEnd(t,e={}){this.lastResult={...e,won:t};const n=e.timeText||ni(e.time??e.elapsed??0),s=e.spotted??0,r=e.chased??0,a=e.hides??0,o=e.distractions??0,l=e.grade??{letter:t?"C":"F",label:t?"BARELY A BIRD":"TONIGHT'S DINNER"};this.endScreen.classList.remove("win","lose"),this.endScreen.classList.add(t?"win":"lose"),this.endScreen.classList.remove("hidden"),this.gradeBadge.dataset.grade=l.letter,this.gradeLetter.textContent=l.letter,this.gradeLabel.textContent=l.label,this.resultTimeValue.textContent=n,this.resultTimeLabel.textContent=t?"ESCAPE TIME":"TIME UNTIL DINNER",this.statSpotted.textContent=String(s),this.statChased.textContent=String(r),this.statHides.textContent=String(a),this.statDistractions.textContent=String(o);const c=(f,g)=>`${f} ${g}${f===1?"":"s"}`,h=s===0?"You were never spotted.":`You were spotted ${c(s,"time")}.`,d=r===0?"You were never chased.":`He chased you ${c(r,"time")}.`,u=a===0?"You never hid once.":`You found cover ${c(a,"time")}.`;if(t)this.endEyebrow.textContent="THE GATE IS THAT WAY, GENIUS",this.endTitle.textContent="FREEDOM!",this.endSubtitle.textContent="You escaped Thanksgiving!",this.endDetail.textContent=`Escaped in ${n}. ${h} ${d} ${u} The human is still yelling at his phone.`;else{const f=Math.max(1,Math.round(e.distance||0)),g=e.caughtBy==="dog";this.endEyebrow.textContent="DINNER IS SERVED",this.endTitle.textContent="HAPPY THANKSGIVING!",this.endSubtitle.textContent="You are tonight's special guest.",this.endDetail.textContent=`${g?"The dog got you":"Caught"} ${f} m from the gate after ${n}. ${h} ${d} ${u} ${g?"The human is already preheating the oven.":"The oven is preheated."}`}e.newBest?(this.recordLine.textContent="NEW BEST RUN!",this.recordLine.classList.add("new-best")):e.best?(this.recordLine.textContent=`BEST RUN ${ni(e.best.time)} · ${e.best.grade}`,this.recordLine.classList.remove("new-best")):(this.recordLine.textContent="NO ESCAPES YET. BE THE FIRST BIRD.",this.recordLine.classList.remove("new-best"))}hideEnd(){this.endScreen.classList.add("hidden"),this.endScreen.classList.remove("win","lose")}updateHUD(t){const{stamina:e=100,alert:n=0,state:s="PATROL",hidden:r=!1,nearCover:a=!1,gateDistance:o=0,chase:l=!1}=t,c=Math.max(0,Math.min(100,e));this.staminaFill.style.width=`${c}%`,this.staminaFill.classList.toggle("low",c<25),this.staminaValue.textContent=`${Math.round(c)}%`;let h="safe";l||n>=.72?h="detected":(s==="INVESTIGATE"||n>=.36)&&(h="suspicious"),this.alertCard.classList.remove("safe","suspicious","detected"),this.alertCard.classList.add(h);const d=l?"chase":h==="detected"?"detected":h==="suspicious"?"suspicious":"safe";this.setDangerLevel(d),h==="detected"?(this.alertTitle.textContent=l||s==="CHASE"?"HE'S COMING!":"DETECTED",this.alertSub.textContent="Sprint or hide. Now."):h==="suspicious"?(this.alertTitle.textContent="SUSPICIOUS",this.alertSub.textContent="He heard something..."):(this.alertTitle.textContent="SAFE",this.alertSub.textContent=s==="DISTRACTED"?"He is glued to his phone":s==="GATE_CHECK"?"He is checking the gate":"The yard is quiet"),this.objectiveDist.textContent=o>8?`Gate ${Math.round(o)} m`:"Gate is close!",this.hideBadge.classList.toggle("hidden",!r);const u=a&&!r;this.prompt.classList.toggle("hidden",!u),u&&(this.prompt.textContent=this.mobile?"Hold HIDE to duck behind cover":"Hold SPACE to hide")}toast(t,e=1800){this.toastEl&&(this.toastEl.textContent=t,this.toastEl.classList.remove("hidden"),this.toastEl.style.animation="none",this.toastEl.offsetWidth,this.toastEl.style.animation="",this.toastTimer&&clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>{this.toastEl.classList.add("hidden")},e))}setMuted(t){for(const e of this.muteButtons)e&&(e.textContent=t?"SOUND OFF":"SOUND ON")}}ua=new WeakSet,Pu=function(){if(!this.mobile)return;const t=document.getElementById("joystick"),e=document.getElementById("joystick-knob");let n=null;const s=o=>{const l=t.getBoundingClientRect(),c=l.left+l.width/2,h=l.top+l.height/2;let d=(o.clientX-c)/(l.width/2),u=(o.clientY-h)/(l.height/2);const f=Math.hypot(d,u);f>1&&(d/=f,u/=f),e.style.transform=`translate(${d*34}px, ${u*34}px)`,this.callbacks.onVirtualMove?.(d,-u)},r=()=>{n=null,e.style.transform="translate(0, 0)",this.callbacks.onVirtualMove?.(0,0)};t?.addEventListener("pointerdown",o=>{n=o.pointerId;try{t.setPointerCapture(o.pointerId)}catch{}s(o),o.preventDefault()}),t?.addEventListener("pointermove",o=>{o.pointerId===n&&(s(o),o.preventDefault())}),t?.addEventListener("pointerup",r),t?.addEventListener("pointercancel",r);const a=(o,l,c)=>{const h=document.getElementById(o);if(!h)return;const d=f=>{h.classList.add("active"),l();try{h.setPointerCapture?.(f.pointerId)}catch{}f.preventDefault()},u=f=>{h.classList.remove("active"),c(),f&&f.preventDefault()};h.addEventListener("pointerdown",d),h.addEventListener("pointerup",u),h.addEventListener("pointercancel",u),h.addEventListener("pointerleave",f=>{f.buttons===0&&u(f)})};a("mobile-sprint",()=>this.callbacks.onVirtualSprint?.(!0),()=>this.callbacks.onVirtualSprint?.(!1)),a("mobile-hide",()=>this.callbacks.onVirtualHide?.(!0),()=>this.callbacks.onVirtualHide?.(!1))};var he,ke,gi;class P_{constructor(){sn(this,he);this.context=null,this.master=null,this.muted=!1,this.ready=!1}init(){if(this.context){this.context.state==="suspended"&&this.context.resume().catch(()=>{});return}const t=window.AudioContext||window.webkitAudioContext;t&&(this.context=new t,this.master=this.context.createGain(),this.master.gain.value=this.muted?0:.45,this.master.connect(this.context.destination),this.ready=!0)}setMuted(t){this.muted=t,this.master&&this.context&&this.master.gain.setTargetAtTime(t?0:.45,this.context.currentTime,.05)}toggleMute(){return this.setMuted(!this.muted),this.muted}step(t=!1){V(this,he,gi).call(this,{duration:t?.08:.07,volume:t?.18:.1,filterFreq:t?700:500}),V(this,he,ke).call(this,{freq:t?95:120,endFreq:55,duration:.08,type:"sine",volume:t?.12:.07})}humanStep(t=!1){V(this,he,gi).call(this,{duration:.09,volume:t?.2:.11,filterFreq:380}),V(this,he,ke).call(this,{freq:85,endFreq:48,duration:.1,type:"sine",volume:t?.16:.08})}alert(){V(this,he,ke).call(this,{freq:660,duration:.09,type:"square",volume:.13}),V(this,he,ke).call(this,{freq:880,duration:.12,type:"square",volume:.13,delay:.1})}distracted(){V(this,he,ke).call(this,{freq:210,endFreq:150,duration:.16,type:"sawtooth",volume:.06}),V(this,he,ke).call(this,{freq:190,endFreq:130,duration:.16,type:"sawtooth",volume:.06,delay:.18}),V(this,he,ke).call(this,{freq:230,endFreq:160,duration:.14,type:"sawtooth",volume:.05,delay:.38})}hide(){V(this,he,gi).call(this,{duration:.22,volume:.15,filterFreq:1500,type:"bandpass"})}gateCheck(){V(this,he,gi).call(this,{duration:.1,volume:.13,filterFreq:2400,type:"bandpass"}),V(this,he,ke).call(this,{freq:920,endFreq:620,duration:.07,type:"square",volume:.05}),V(this,he,gi).call(this,{duration:.08,volume:.09,filterFreq:1800,type:"bandpass",delay:.14})}noiseHeard(){V(this,he,ke).call(this,{freq:330,endFreq:360,duration:.1,type:"triangle",volume:.09}),V(this,he,ke).call(this,{freq:440,endFreq:490,duration:.16,type:"triangle",volume:.09,delay:.1})}bark(){V(this,he,ke).call(this,{freq:230,endFreq:110,duration:.13,type:"sawtooth",volume:.11}),V(this,he,gi).call(this,{duration:.07,volume:.07,filterFreq:650,delay:.01}),V(this,he,ke).call(this,{freq:200,endFreq:95,duration:.16,type:"sawtooth",volume:.1,delay:.17}),V(this,he,gi).call(this,{duration:.06,volume:.06,filterFreq:600,delay:.18})}gobble(){if(!this.ready||this.muted)return;const t=this.context,e=t.currentTime;for(let n=0;n<5;n+=1){const s=t.createOscillator(),r=t.createGain();s.type="sawtooth",s.frequency.setValueAtTime(160+n*12,e+n*.055),s.frequency.exponentialRampToValueAtTime(90,e+n*.055+.06),r.gain.setValueAtTime(1e-4,e+n*.055),r.gain.linearRampToValueAtTime(.07,e+n*.055+.01),r.gain.exponentialRampToValueAtTime(1e-4,e+n*.055+.07),s.connect(r),r.connect(this.master),s.start(e+n*.055),s.stop(e+n*.055+.08)}}caught(){V(this,he,ke).call(this,{freq:300,endFreq:210,duration:.3,type:"sawtooth",volume:.16}),V(this,he,ke).call(this,{freq:260,endFreq:170,duration:.42,type:"sawtooth",volume:.16,delay:.28}),V(this,he,ke).call(this,{freq:210,endFreq:90,duration:.8,type:"sawtooth",volume:.18,delay:.66}),this.gobble()}win(){[523.25,659.25,783.99,1046.5].forEach((e,n)=>{V(this,he,ke).call(this,{freq:e,duration:.24,type:"triangle",volume:.16,delay:n*.12})}),V(this,he,ke).call(this,{freq:1318.5,duration:.6,type:"triangle",volume:.14,delay:.52})}gateChime(){V(this,he,ke).call(this,{freq:1046.5,duration:.3,type:"sine",volume:.08}),V(this,he,ke).call(this,{freq:1568,duration:.4,type:"sine",volume:.06,delay:.08})}}he=new WeakSet,ke=function({freq:t=440,endFreq:e=null,duration:n=.18,type:s="sine",volume:r=.3,delay:a=0,attack:o=.01}){if(!this.ready||this.muted)return;const l=this.context,c=l.currentTime+a,h=l.createOscillator(),d=l.createGain();h.type=s,h.frequency.setValueAtTime(t,c),e!==null&&h.frequency.exponentialRampToValueAtTime(Math.max(20,e),c+n),d.gain.setValueAtTime(1e-4,c),d.gain.linearRampToValueAtTime(r,c+o),d.gain.exponentialRampToValueAtTime(1e-4,c+n),h.connect(d),d.connect(this.master),h.start(c),h.stop(c+n+.02)},gi=function({duration:t=.12,volume:e=.2,filterFreq:n=800,delay:s=0,type:r="lowpass"}){if(!this.ready||this.muted)return;const a=this.context,o=a.currentTime+s,l=Math.floor(a.sampleRate*t),c=a.createBuffer(1,l,a.sampleRate),h=c.getChannelData(0);for(let g=0;g<l;g+=1)h[g]=(Math.random()*2-1)*(1-g/l);const d=a.createBufferSource();d.buffer=c;const u=a.createBiquadFilter();u.type=r,u.frequency.value=n;const f=a.createGain();f.gain.value=e,d.connect(u),u.connect(f),f.connect(this.master),d.start(o)};const Ae=Object.freeze({MENU:"menu",PLAYING:"playing",PAUSED:"paused",WON:"won",LOST:"lost"});function sh(){return{spotted:0,chased:0,hides:0,distractions:0,distanceAtCatch:0,caughtBy:null}}class L_{constructor(){this.mode=Ae.MENU,this.elapsed=0,this.resultTimer=0,this.restarts=0,this.stats=sh()}reset(){this.mode=Ae.PLAYING,this.elapsed=0,this.resultTimer=0,this.stats=sh()}}const Lu="turkey-run.history.v1",Iu=10;function I_(i){return i&&typeof i.time=="number"&&Number.isFinite(i.time)&&typeof i.grade=="string"&&typeof i.won=="boolean"}function Du(){try{const i=window.localStorage.getItem(Lu);if(!i)return[];const t=JSON.parse(i);return Array.isArray(t)?t.filter(I_).slice(0,Iu):[]}catch{return[]}}function D_(i){try{window.localStorage.setItem(Lu,JSON.stringify(i))}catch{}}function N_(i){const t=[i,...Du()].slice(0,Iu);return D_(t),t}const Oi=new L;var Yt,Nu,Uu,Fu,ol,ll,ki,Ou,cl,Bu,hl,zu,ku,Gu,Hu,Vu,Wu,da;class U_{constructor(){sn(this,Yt);sn(this,da,()=>{this.clock.update();const t=Math.min(this.clock.getDelta(),.05),e=this.state.mode===Ae.PAUSED;let n=t;if(this.fpsFrames+=1,this.fpsElapsed+=t,this.fpsElapsed>=.5&&(this.fps=Math.round(this.fpsFrames/this.fpsElapsed),this.fpsFrames=0,this.fpsElapsed=0,this.ui?.qualityOpen&&this.ui.setPerformanceStats({fps:this.fps,drawCalls:this.renderer.info.render.calls,pixelRatio:this.renderer.getPixelRatio()})),!e){this.hitStopTimer=Math.max(0,this.hitStopTimer-t),this.slowMoTimer=Math.max(0,this.slowMoTimer-t);const s=this.slowMoTimer>0?.35:1;this.timeScale=Rn(this.timeScale,s,this.slowMoTimer>0?18:6,t),n=t*(this.hitStopTimer>0?.04:this.timeScale),this.backyard.update(t),this.noise.update(n),this.effects.update(n)}if(this.state.mode===Ae.MENU)this.menuTime+=t,this.turkey.update(t,{speed:0}),this.human.update(t,{speed:0,state:"PATROL",alert:0}),this.dog.update(t,{speed:0,state:"PATROL"}),this.rig.update(t,this.playerPosition);else if(this.state.mode===Ae.PLAYING){this.state.elapsed+=t;const s=this.player.update(n,this.turkey,this.playerPosition);this.turkey.setPosition(this.playerPosition.x,this.playerPosition.z);const r={hidden:s.hidden,sprinting:s.sprinting},a=this.ai.update(n,this.playerPosition,r,!0);this.dogAI.update(n,this.playerPosition,r,!0);const o=a.state==="CHASE"&&a.sight.distance<6.5;if(this.turkey.update(n,{speed:s.speed,hidden:s.hidden,panicked:o}),this.state.mode===Ae.PLAYING){if(V(this,Yt,ku).call(this,n,s,a).stepped){const c=s.sprinting?"sprint":"walk",h=c==="sprint"?Mi.sprintRadius:Mi.walkRadius;this.noise.emit(this.playerPosition.x,this.playerPosition.z,h,c),this.effects.spawnNoiseRing(this.playerPosition.x,this.playerPosition.z,h,c)}V(this,Yt,Vu).call(this,n,s),V(this,Yt,Hu).call(this,n,s),V(this,Yt,Gu).call(this,s,a),V(this,Yt,Wu).call(this,s,a),this.backyard.setGateProximity(yn(1-V(this,Yt,ki).call(this)/26,0,1)),this.playerPosition.x>je.winX&&Math.abs(this.playerPosition.z)<3.4&&V(this,Yt,Bu).call(this)}Oi.set(this.playerPosition.x,.9,this.playerPosition.z),this.rig.update(t,Oi)}else this.state.mode===Ae.WON?(this.state.resultTimer-=t,this.playerPosition.x+=5.2*n,this.playerPosition.z=Rn(this.playerPosition.z,0,5,n),this.turkey.setPosition(this.playerPosition.x,this.playerPosition.z),this.turkey.setHeading(Math.PI/2),this.turkey.update(n,{speed:5.2}),this.ai.update(n,this.playerPosition,{hidden:!1,sprinting:!1},!1),this.dogAI.update(n,this.playerPosition,{hidden:!1,sprinting:!1},!1),Oi.set(this.playerPosition.x,.9,this.playerPosition.z),this.rig.update(t,Oi),this.state.resultTimer<=0&&V(this,Yt,hl).call(this,!0)):this.state.mode===Ae.LOST&&(this.state.resultTimer-=t,this.turkey.update(n,{speed:0,panicked:!0}),this.ai.update(n,this.playerPosition,{hidden:!1,sprinting:!1},!1),this.dogAI.update(n,this.playerPosition,{hidden:!1,sprinting:!1},!1),Oi.set(this.playerPosition.x,.9,this.playerPosition.z),this.rig.update(t,Oi),this.state.resultTimer<=0&&V(this,Yt,hl).call(this,!1));this.renderer.render(this.scene,this.camera)});this.canvas=document.getElementById("game-canvas"),this.qualityKey=b_(),this.quality=Cs[this.qualityKey],this.renderer=new jx({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,this.quality.maxPixelRatio)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputColorSpace=cn,this.renderer.toneMapping=fl,this.renderer.toneMappingExposure=1.05,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=tr,this.camera=new _n(55,window.innerWidth/window.innerHeight,.1,220),this.backyard=new n_,this.scene=this.backyard.scene,this.collision=this.backyard.collision,this.turkey=new i_,this.scene.add(this.turkey.root),this.human=new s_,this.scene.add(this.human.root),this.dog=new a_,this.scene.add(this.dog.root),this.reducedMotion=Nl(),this.effects=new g_(this.scene),this.effects.reducedMotion=this.reducedMotion,this.effects.setDensity(this.quality.effectsDensity),this.renderer.shadowMap.enabled=this.quality.shadows,this.backyard.setShadowQuality(this.quality.shadows,this.quality.shadowSize),this.rig=new o_(this.camera),this.coverSystem=new m_(this.collision),this.player=new h_(this.camera,this.collision,this.coverSystem),this.vision=new p_(this.collision),this.noise=new x_,this.audio=new P_,this.state=new L_,this.playerPosition=new L(je.playerStart.x,0,je.playerStart.z),this.turkey.setPosition(this.playerPosition.x,this.playerPosition.z),this.turkey.setHeading(.6),this.ai=new d_(this.human,this.vision,this.collision,this.noise,{onCaught:()=>V(this,Yt,cl).call(this,"human")}),this.dogAI=new f_(this.dog,this.collision,this.noise,{onBark:(t,e)=>V(this,Yt,Ou).call(this,t,e),onCaught:()=>V(this,Yt,cl).call(this,"dog")}),this.ui=new R_({onStart:()=>this.start(),onRestart:()=>this.restart(),onResume:()=>this.resume(),onPause:()=>this.togglePause(),onToggleMute:()=>this.toggleMute(),onVirtualMove:(t,e)=>this.player.setVirtualMove(t,e),onVirtualSprint:t=>this.player.setVirtualSprint(t),onVirtualHide:t=>this.player.setVirtualHide(t),onQualitySelect:t=>this.setQuality(t)}),this.overlayShown=!1,this.roundResult=null,this.bestRun=v_(),this.ui.setBestRun(this.bestRun),this.history=Du(),this.ui.setHistory(this.history),this.ui.setQuality(this.qualityKey),Pe("game_ready",{quality:this.qualityKey,touch:this.ui.mobile,reduced_motion:this.reducedMotion}),Ni("quality",this.qualityKey),Ni("device",this.ui.mobile?"mobile":"desktop"),Ni("reduced_motion",String(this.reducedMotion)),this.playerStepTimer=0,this.humanStepTimer=0,this.lastHumanState="PATROL",this.wasHidden=!1,this.wasHideHeld=!1,this.hideHintCooldown=0,this.gateChimePlayed=!1,this.lowStaminaWarned=!1,this.alertWarned=!1,this.menuTime=0,this.fps=60,this.fpsFrames=0,this.fpsElapsed=0,this.timeScale=1,this.slowMoTimer=0,this.hitStopTimer=0,this.dustTimer=0,this.clock=new ip,V(this,Yt,Nu).call(this),V(this,Yt,ll).call(this),this.ui.showStart(),this.ui.setHudVisible(!1),this.rig.setMode("menu"),this.renderer.setAnimationLoop(fr(this,da)),window.__TURKEY_RUN__=this}setQuality(t,e=!0){const n=Cs[t];if(!n)return;const s=this.qualityKey;if(s===t){this.ui?.setQuality(t);return}this.qualityKey=t,this.quality=n,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,n.maxPixelRatio)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=n.shadows,this.renderer.shadowMap.needsUpdate=!0,this.backyard.setShadowQuality(n.shadows,n.shadowSize),this.effects.setDensity(n.effectsDensity),e&&E_(t),Pe("quality_change",{preset:t,previous:s}),Ni("quality",t),this.ui?.setQuality(t),this.ui?.toast(`Graphics: ${n.label}`,1400)}start(){this.audio.init(),this.audio.gobble(),V(this,Yt,ol).call(this),Pe("game_start",{quality:this.qualityKey,touch:this.ui.mobile,reduced_motion:this.reducedMotion}),Ni("quality",this.qualityKey),this.ui.hideStart(),this.ui.toast("GO! Get to the gate before dinner.",2200)}restart(){this.audio.init(),V(this,Yt,ol).call(this),Pe("run_restart",{quality:this.qualityKey}),this.ui.toast("Round two. Same turkey, better odds.",2e3)}resume(){this.state.mode===Ae.PAUSED&&(this.state.mode=Ae.PLAYING,this.player.enabled=!0,this.wasHideHeld=this.player.hideHeld,Pe("game_resume",{time_seconds:Math.round(this.state.elapsed)}),this.ui.hidePause(),this.ui.setHudVisible(!0),this.rig.setMode("follow"))}togglePause(){this.state.mode===Ae.PLAYING?(this.state.mode=Ae.PAUSED,this.player.enabled=!1,this.player.setVirtualMove(0,0),this.player.setVirtualSprint(!1),this.player.setVirtualHide(!1),Pe("game_pause",{time_seconds:Math.round(this.state.elapsed)}),this.ui.showPause(),this.ui.setHudVisible(!1)):this.state.mode===Ae.PAUSED&&this.resume()}toggleMute(){const t=this.audio.toggleMute();return this.ui.setMuted(t),t}}Yt=new WeakSet,Nu=function(){window.addEventListener("resize",()=>V(this,Yt,Uu).call(this)),window.addEventListener("keydown",t=>V(this,Yt,Fu).call(this,t)),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state.mode===Ae.PLAYING&&this.togglePause()}),this.canvas.addEventListener("contextmenu",t=>t.preventDefault())},Uu=function(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,this.quality.maxPixelRatio)),this.renderer.setSize(t,e)},Fu=function(t){if(t.code==="Escape"){if(this.ui.isOverlayOpen())return;(this.state.mode===Ae.PLAYING||this.state.mode===Ae.PAUSED)&&(t.preventDefault(),this.togglePause())}else if(t.code==="KeyM")this.toggleMute();else if(t.code==="Enter"){if(this.ui.isOverlayOpen()||document.activeElement?.tagName==="A")return;this.state.mode===Ae.MENU?(t.preventDefault(),this.start()):this.state.mode===Ae.WON||this.state.mode===Ae.LOST?(t.preventDefault(),this.restart()):this.state.mode===Ae.PAUSED&&(t.preventDefault(),this.resume())}},ol=function(){V(this,Yt,ll).call(this),this.state.reset(),this.state.elapsed=0,this.overlayShown=!1,this.roundResult=null,this.playerStepTimer=0,this.humanStepTimer=0,this.lastHumanState="PATROL",this.wasHidden=!1,this.wasHideHeld=!1,this.hideHintCooldown=0,this.gateChimePlayed=!1,this.lowStaminaWarned=!1,this.alertWarned=!1,this.timeScale=1,this.slowMoTimer=0,this.hitStopTimer=0,this.dustTimer=0,this.effects.clear(),this.rig.resetEffects(),this.backyard.resetGateEffects(),this.ui.resetTransientEffects(),this.player.enabled=!0,this.ui.hideStart(),this.ui.hidePause(),this.ui.hideEnd(),this.ui.setHudVisible(!0),this.rig.setMode("follow"),this.rig.snapTo(Oi.set(this.playerPosition.x,.9,this.playerPosition.z)),this.ui.updateHUD({stamina:this.player.stamina,alert:0,state:"PATROL",hidden:!1,nearCover:!1,gateDistance:V(this,Yt,ki).call(this),chase:!1})},ll=function(){this.playerPosition.set(je.playerStart.x,0,je.playerStart.z),this.player.reset(je.playerStart),this.turkey.setPosition(this.playerPosition.x,this.playerPosition.z),this.turkey.setHeading(this.player.heading),this.turkey.resetAnimation(),this.turkey.update(0,{speed:0,hidden:!1}),this.noise.reset(),this.ai.reset(),this.dogAI.reset(),this.vision.reset()},ki=function(){return bn(this.playerPosition.x,this.playerPosition.z,je.gate.x,je.gate.z)},Ou=function(t,e){this.state.mode===Ae.PLAYING&&(this.audio.bark(),this.effects.spawnNoiseRing(t,e,Ee.barkNoiseRadius,"bark"),Pe("dog_bark",{distance_m:Math.round(bn(this.playerPosition.x,this.playerPosition.z,t,e)),time_seconds:Math.round(this.state.elapsed)}),this.ui.toast("The dog is barking! It will bring the human.",2200))},cl=function(t="human"){this.state.mode===Ae.PLAYING&&(this.state.mode=Ae.LOST,this.state.resultTimer=je.caughtOverlayDelay,this.state.stats.distanceAtCatch=V(this,Yt,ki).call(this),this.state.stats.caughtBy=t,this.player.enabled=!1,this.turkey.playCaught(),t==="dog"&&this.audio.bark(),this.audio.caught(),this.reducedMotion||(this.hitStopTimer=.06,this.slowMoTimer=.45,this.timeScale=.28),this.rig.addShake(.3,.45),this.rig.addZoomPunch(.22),this.effects.spawnLeafBurst(this.playerPosition.x,1.05,this.playerPosition.z,20),this.effects.spawnDust(this.playerPosition.x,this.playerPosition.z,0,0,6),this.ui.flash("catch"),this.ui.updateHUD({stamina:this.player.stamina,alert:1,state:"CAUGHT",hidden:!1,nearCover:!1,gateDistance:V(this,Yt,ki).call(this),chase:!0}),this.ui.toast(t==="dog"?"THE DOG GOT YOU!":"CAUGHT! He saw you.",1600))},Bu=function(){this.state.mode===Ae.PLAYING&&(this.state.mode=Ae.WON,this.state.resultTimer=je.winOverlayDelay,this.player.enabled=!1,this.audio.win(),this.reducedMotion||(this.slowMoTimer=.4,this.timeScale=.38),this.rig.addZoomPunch(.16),this.effects.spawnLeafBurst(je.gate.x+1.1,1.5,je.gate.z,44),this.effects.spawnLeafBurst(this.playerPosition.x,1.25,this.playerPosition.z,14),this.backyard.flareGate(1),this.ui.flash("win"),this.ui.toast("FREEDOM! Keep going!",1400))},hl=function(t){this.overlayShown||(this.overlayShown=!0,this.roundResult=V(this,Yt,zu).call(this,t),this.ui.setHudVisible(!1),this.ui.showEnd(t,this.roundResult))},zu=function(t){const e=this.state.stats,n=__({won:t,time:this.state.elapsed,spotted:e.spotted,chased:e.chased});let s=this.bestRun,r=!1;if(t){const l={time:Math.max(0,Math.round(this.state.elapsed)),grade:n.letter,spotted:e.spotted};r=M_(l,s),r&&(s=l,this.bestRun=s,y_(s),this.ui.setBestRun(s))}const a={at:Date.now(),won:t,grade:n.letter,label:n.label,time:this.state.elapsed,spotted:e.spotted,chased:e.chased,hides:e.hides,distractions:e.distractions,distance:t?0:e.distanceAtCatch,caughtBy:t?null:e.caughtBy||"human"};this.history=N_(a),this.ui.setHistory(this.history);const o={grade:n.letter,time_seconds:Math.round(this.state.elapsed),spotted:e.spotted,chased:e.chased,hides:e.hides,distractions:e.distractions,quality:this.qualityKey};return t?Pe("game_win",{...o,new_best:r,distance_m:0,caught_by:"none"}):Pe("game_lose",{...o,new_best:!1,distance_m:Math.round(e.distanceAtCatch),caught_by:e.caughtBy||"human"}),Ni("last_result",t?"win":"lose"),Ni("last_grade",n.letter),{won:t,grade:n,time:this.state.elapsed,timeText:ni(this.state.elapsed),spotted:e.spotted,chased:e.chased,hides:e.hides,distractions:e.distractions,distance:e.distanceAtCatch,caughtBy:t?null:e.caughtBy||"human",best:s,newBest:r}},ku=function(t,e,n){let s=!1;return this.playerStepTimer-=t,e.speed>.6&&!e.hidden?this.playerStepTimer<=0&&(this.audio.step(e.sprinting),this.playerStepTimer=e.sprinting?.24:.38,s=!0):this.playerStepTimer=Math.min(this.playerStepTimer,.1),this.humanStepTimer-=t,this.ai.speed>.5&&n.state!=="CAUGHT"?this.humanStepTimer<=0&&(this.audio.humanStep(n.state==="CHASE"),this.humanStepTimer=n.state==="CHASE"?.3:.52):this.humanStepTimer=Math.min(this.humanStepTimer,.12),{stepped:s,sprinting:e.sprinting}},Gu=function(t,e){const n=this.state.stats,s=this.lastHumanState;if(e.state!==s&&(e.state==="ALERT"?(s!=="CHASE"&&(n.spotted+=1),Pe("human_alert",{alert_percent:Math.round(e.alert*100),time_seconds:Math.round(this.state.elapsed)}),this.audio.alert(),this.alertWarned||(this.ui.toast("He noticed you. Break the line of sight!",1800),this.alertWarned=!0)):e.state==="CHASE"?(n.chased+=1,s!=="ALERT"&&(n.spotted+=1),Pe("human_chase",{alert_percent:Math.round(e.alert*100),time_seconds:Math.round(this.state.elapsed)}),this.audio.alert(),this.ui.toast("RUN! He is coming!",1500)):e.state==="DISTRACTED"?(n.distractions+=1,Pe("human_distracted",{time_seconds:Math.round(this.state.elapsed)}),this.audio.distracted(),this.ui.toast("He is on his phone. Move!",1700)):e.state==="GATE_CHECK"?(Pe("human_gate_check",{time_seconds:Math.round(this.state.elapsed)}),this.audio.gateCheck(),this.ui.toast("He is checking the gate! Wait for your moment.",2200)):e.state==="INVESTIGATE"?(Pe("human_investigate",{time_seconds:Math.round(this.state.elapsed)}),this.audio.noiseHeard(),this.ui.toast("He heard something. Move or hide!",1800)):e.state==="SEARCH"&&(Pe("human_search",{time_seconds:Math.round(this.state.elapsed)}),this.ui.toast("He lost you. For now.",1500)),this.lastHumanState=e.state),t.hidden&&!this.wasHidden){n.hides+=1,Pe("hide_start",{time_seconds:Math.round(this.state.elapsed)});const o=this.coverSystem.probe(this.playerPosition.x,this.playerPosition.z).object?.tag;o==="bush"||o==="tree"?this.effects.spawnLeafPuff(this.playerPosition.x,this.playerPosition.z,7):this.effects.spawnDust(this.playerPosition.x,this.playerPosition.z,0,0,3),this.audio.hide(),this.ui.toast("Hidden. Stay very still.",1500)}this.wasHidden=t.hidden,t.stamina<18&&!this.lowStaminaWarned&&(this.lowStaminaWarned=!0,this.ui.toast("Out of breath! Walk to recover.",1800)),t.stamina>45&&(this.lowStaminaWarned=!1);const r=V(this,Yt,ki).call(this);!this.gateChimePlayed&&r<5.5&&(this.gateChimePlayed=!0,this.backyard.flareGate(.55),this.audio.gateChime(),this.ui.toast("THE GATE! GO GO GO!",1500))},Hu=function(t,e){this.hideHintCooldown=Math.max(0,this.hideHintCooldown-t);const n=this.player.hideHeld;n&&!this.wasHideHeld&&!e.hidden&&this.hideHintCooldown<=0&&(this.ui.toast("No cover here. Hide near a bush, tree, or crate.",1900),this.hideHintCooldown=1.5),this.wasHideHeld=n},Vu=function(t,e){if(e.sprinting&&e.speed>3&&!e.hidden){if(this.dustTimer-=t,this.dustTimer<=0){const n=1/(e.speed||1);this.effects.spawnDust(this.playerPosition.x,this.playerPosition.z,-this.player.velocity.x*n,-this.player.velocity.z*n,2),this.dustTimer=.15}}else this.dustTimer=Math.min(this.dustTimer,.06)},Wu=function(t,e){this.ui.updateHUD({stamina:t.stamina,alert:e.alert,state:e.state,hidden:t.hidden,nearCover:this.player.nearCover,gateDistance:V(this,Yt,ki).call(this),chase:e.state==="CHASE"})},da=new WeakMap;function rh(){try{new U_}catch(i){console.error("Turkey Run failed to start:",i);const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;padding:24px;background:#241408;color:#f7e9cf;font-family:Georgia,serif;font-size:18px;text-align:center;z-index:9999;",t.textContent="Turkey Run could not start. Your browser may not support WebGL, or hardware acceleration is disabled.",document.body.appendChild(t)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",rh):rh();
