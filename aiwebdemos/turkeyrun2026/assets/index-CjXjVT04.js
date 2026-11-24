var $l=s=>{throw TypeError(s)};var Jl=(s,t,e)=>t.has(s)||$l("Cannot "+e);var xr=(s,t,e)=>(Jl(s,t,"read from private field"),e?e.call(s):t.get(s)),ni=(s,t,e)=>t.has(s)?$l("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(s):t.set(s,e);var O=(s,t,e)=>(Jl(s,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();const xl="183",ad=0,jl=1,od=2,sr=1,ld=2,Qs=3,En=0,pi=1,Ve=2,ln=0,Es=1,ra=2,Ql=3,tc=4,cd=5,Wn=100,hd=101,ud=102,dd=103,fd=104,pd=200,md=201,gd=202,xd=203,po=204,mo=205,_d=206,vd=207,yd=208,Md=209,Sd=210,bd=211,Ed=212,Td=213,wd=214,go=0,xo=1,_o=2,ws=3,vo=4,yo=5,Mo=6,So=7,_l=0,Ad=1,Cd=2,Wi=0,uh=1,dh=2,fh=3,vl=4,ph=5,mh=6,gh=7,xh=300,Zn=301,As=302,Ca=303,Ra=304,ya=306,bo=1e3,sn=1001,Eo=1002,ei=1003,Rd=1004,_r=1005,hi=1006,Pa=1007,qn=1008,vi=1009,_h=1010,vh=1011,or=1012,yl=1013,qi=1014,Ii=1015,un=1016,Ml=1017,Sl=1018,lr=1020,yh=35902,Mh=35899,Sh=1021,bh=1022,Di=1023,dn=1026,Yn=1027,bl=1028,El=1029,Cs=1030,Tl=1031,wl=1033,$r=33776,Jr=33777,jr=33778,Qr=33779,To=35840,wo=35841,Ao=35842,Co=35843,Ro=36196,Po=37492,Lo=37496,Io=37488,Do=37489,No=37490,Uo=37491,Fo=37808,Oo=37809,Bo=37810,zo=37811,ko=37812,Go=37813,Ho=37814,Vo=37815,Wo=37816,Xo=37817,qo=37818,Yo=37819,Ko=37820,Zo=37821,$o=36492,Jo=36494,jo=36495,Qo=36283,tl=36284,el=36285,il=36286,Pd=3200,Eh=0,Ld=1,Mn="",ci="srgb",Rs="srgb-linear",aa="linear",ge="srgb",es=7680,ec=519,Id=512,Dd=513,Nd=514,Al=515,Ud=516,Fd=517,Cl=518,Od=519,nl=35044,ic=35048,nc="300 es",Vi=2e3,cr=2001;function Bd(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function oa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function zd(){const s=oa("canvas");return s.style.display="block",s}const sc={};function la(...s){const t="THREE."+s.shift();console.log(t,...s)}function Th(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Xt(...s){s=Th(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function le(...s){s=Th(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function ca(...s){const t=s.join(" ");t in sc||(sc[t]=!0,Xt(...s))}function kd(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const Gd={[go]:xo,[_o]:Mo,[vo]:So,[ws]:yo,[xo]:go,[Mo]:_o,[So]:vo,[yo]:ws};class Fs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const n=i[t];if(n!==void 0){const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,t);t.target=null}}}const si=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],La=Math.PI/180,sl=180/Math.PI;function cn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(si[s&255]+si[s>>8&255]+si[s>>16&255]+si[s>>24&255]+"-"+si[t&255]+si[t>>8&255]+"-"+si[t>>16&15|64]+si[t>>24&255]+"-"+si[e&63|128]+si[e>>8&255]+"-"+si[e>>16&255]+si[e>>24&255]+si[i&255]+si[i>>8&255]+si[i>>16&255]+si[i>>24&255]).toLowerCase()}function re(s,t,e){return Math.max(t,Math.min(e,s))}function Hd(s,t){return(s%t+t)%t}function Ia(s,t,e){return(1-e)*s+e*t}function Hi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Me(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class st{constructor(t=0,e=0){st.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*n+t.x,this.y=r*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Os{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3],u=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(d!==v||l!==u||c!==f||h!==g){let p=l*u+c*f+h*g+d*v;p<0&&(u=-u,f=-f,g=-g,v=-v,p=-p);let m=1-o;if(p<.9995){const y=Math.acos(p),S=Math.sin(y);m=Math.sin(m*y)/S,o=Math.sin(o*y)/S,l=l*m+u*o,c=c*m+f*o,h=h*m+g*o,d=d*m+v*o}else{l=l*m+u*o,c=c*m+f*o,h=h*m+g*o,d=d*m+v*o;const y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,n,r,a){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),d=o(r/2),u=l(i/2),f=l(n/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Xt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-n)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(a-n)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-r*l,this._y=n*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,i=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-r*n),d=2*(r*i-a*e);return this.x=e+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=n+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Da.copy(this).projectOnVector(t),this.sub(Da)}reflect(t){return this.sub(Da.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Da=new L,rc=new Os;class jt{constructor(t,e,i,n,r,a,o,l,c){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c)}set(t,e,i,n,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],v=n[0],p=n[3],m=n[6],y=n[1],S=n[4],M=n[7],C=n[2],A=n[5],P=n[8];return r[0]=a*v+o*y+l*C,r[3]=a*p+o*S+l*A,r[6]=a*m+o*M+l*P,r[1]=c*v+h*y+d*C,r[4]=c*p+h*S+d*A,r[7]=c*m+h*M+d*P,r[2]=u*v+f*y+g*C,r[5]=u*p+f*S+g*A,r[8]=u*m+f*M+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=e*d+i*u+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(n*c-h*i)*v,t[2]=(o*i-n*a)*v,t[3]=u*v,t[4]=(h*e-n*l)*v,t[5]=(n*r-o*e)*v,t[6]=f*v,t[7]=(i*l-c*e)*v,t[8]=(a*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Na.makeScale(t,e)),this}rotate(t){return this.premultiply(Na.makeRotation(-t)),this}translate(t,e){return this.premultiply(Na.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Na=new jt,ac=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),oc=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vd(){const s={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ge&&(n.r=hn(n.r),n.g=hn(n.g),n.b=hn(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ge&&(n.r=Ts(n.r),n.g=Ts(n.g),n.b=Ts(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Mn?aa:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,r){return ca("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(n,r)},toWorkingColorSpace:function(n,r){return ca("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(n,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[Rs]:{primaries:t,whitePoint:i,transfer:aa,toXYZ:ac,fromXYZ:oc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:t,whitePoint:i,transfer:ge,toXYZ:ac,fromXYZ:oc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),s}const ce=Vd();function hn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ts(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let is;class Wd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{is===void 0&&(is=oa("canvas")),is.width=t.width,is.height=t.height;const n=is.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=is}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=oa("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=hn(r[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(hn(e[i]/255)*255):e[i]=hn(e[i]);return{data:e,width:t.width,height:t.height}}else return Xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Xd=0;class Rl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=cn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(Ua(n[a].image)):r.push(Ua(n[a]))}else r=Ua(n);i.url=r}return e||(t.images[this.uuid]=i),i}}function Ua(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Wd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Xt("Texture: Unable to serialize Texture."),{})}let qd=0;const Fa=new L;class ui extends Fs{constructor(t=ui.DEFAULT_IMAGE,e=ui.DEFAULT_MAPPING,i=sn,n=sn,r=hi,a=qn,o=Di,l=vi,c=ui.DEFAULT_ANISOTROPY,h=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=cn(),this.name="",this.source=new Rl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Fa).x}get height(){return this.source.getSize(Fa).y}get depth(){return this.source.getSize(Fa).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){Xt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bo:t.x=t.x-Math.floor(t.x);break;case sn:t.x=t.x<0?0:1;break;case Eo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bo:t.y=t.y-Math.floor(t.y);break;case sn:t.y=t.y<0?0:1;break;case Eo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ui.DEFAULT_IMAGE=null;ui.DEFAULT_MAPPING=xh;ui.DEFAULT_ANISOTROPY=1;class Oe{constructor(t=0,e=0,i=0,n=1){Oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,M=(f+1)/2,C=(m+1)/2,A=(h+u)/4,P=(d+v)/4,_=(g+p)/4;return S>M&&S>C?S<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(S),n=A/i,r=P/i):M>C?M<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(M),i=A/n,r=_/n):C<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(C),i=P/r,n=_/r),this.set(i,n,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(d-v)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yd extends Fs{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Oe(0,0,t,e),this.scissorTest=!1,this.viewport=new Oe(0,0,t,e),this.textures=[];const n={width:t,height:e,depth:i.depth},r=new ui(n),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:hi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const n=Object.assign({},t.textures[e].image);this.textures[e].source=new Rl(n)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends Yd{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class wh extends ui{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ei,this.minFilter=ei,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kd extends ui{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ei,this.minFilter=ei,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class de{constructor(t,e,i,n,r,a,o,l,c,h,d,u,f,g,v,p){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c,h,d,u,f,g,v,p)}set(t,e,i,n,r,a,o,l,c,h,d,u,f,g,v,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=n,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,n=1/ns.setFromMatrixColumn(t,0).length(),r=1/ns.setFromMatrixColumn(t,1).length(),a=1/ns.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,f=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-v*c,e[9]=-o*l,e[2]=v-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u+v*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=v+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u-v*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=v-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,f=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-v*d}else if(t.order==="XZY"){const u=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zd,t,$d)}lookAt(t,e,i){const n=this.elements;return gi.subVectors(t,e),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),mn.crossVectors(i,gi),mn.lengthSq()===0&&(Math.abs(i.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),mn.crossVectors(i,gi)),mn.normalize(),vr.crossVectors(gi,mn),n[0]=mn.x,n[4]=vr.x,n[8]=gi.x,n[1]=mn.y,n[5]=vr.y,n[9]=gi.y,n[2]=mn.z,n[6]=vr.z,n[10]=gi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],v=i[6],p=i[10],m=i[14],y=i[3],S=i[7],M=i[11],C=i[15],A=n[0],P=n[4],_=n[8],E=n[12],z=n[1],R=n[5],F=n[9],G=n[13],X=n[2],B=n[6],V=n[10],U=n[14],nt=n[3],Q=n[7],gt=n[11],vt=n[15];return r[0]=a*A+o*z+l*X+c*nt,r[4]=a*P+o*R+l*B+c*Q,r[8]=a*_+o*F+l*V+c*gt,r[12]=a*E+o*G+l*U+c*vt,r[1]=h*A+d*z+u*X+f*nt,r[5]=h*P+d*R+u*B+f*Q,r[9]=h*_+d*F+u*V+f*gt,r[13]=h*E+d*G+u*U+f*vt,r[2]=g*A+v*z+p*X+m*nt,r[6]=g*P+v*R+p*B+m*Q,r[10]=g*_+v*F+p*V+m*gt,r[14]=g*E+v*G+p*U+m*vt,r[3]=y*A+S*z+M*X+C*nt,r[7]=y*P+S*R+M*B+C*Q,r[11]=y*_+S*F+M*V+C*gt,r[15]=y*E+S*G+M*U+C*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],v=t[7],p=t[11],m=t[15],y=l*f-c*u,S=o*f-c*d,M=o*u-l*d,C=a*f-c*h,A=a*u-l*h,P=a*d-o*h;return e*(v*y-p*S+m*M)-i*(g*y-p*C+m*A)+n*(g*S-v*C+m*P)-r*(g*M-v*A+p*P)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],v=t[13],p=t[14],m=t[15],y=e*o-i*a,S=e*l-n*a,M=e*c-r*a,C=i*l-n*o,A=i*c-r*o,P=n*c-r*l,_=h*v-d*g,E=h*p-u*g,z=h*m-f*g,R=d*p-u*v,F=d*m-f*v,G=u*m-f*p,X=y*G-S*F+M*R+C*z-A*E+P*_;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/X;return t[0]=(o*G-l*F+c*R)*B,t[1]=(n*F-i*G-r*R)*B,t[2]=(v*P-p*A+m*C)*B,t[3]=(u*A-d*P-f*C)*B,t[4]=(l*z-a*G-c*E)*B,t[5]=(e*G-n*z+r*E)*B,t[6]=(p*M-g*P-m*S)*B,t[7]=(h*P-u*M+f*S)*B,t[8]=(a*F-o*z+c*_)*B,t[9]=(i*z-e*F-r*_)*B,t[10]=(g*A-v*M+m*y)*B,t[11]=(d*M-h*A-f*y)*B,t[12]=(o*E-a*R-l*_)*B,t[13]=(e*R-i*E+n*_)*B,t[14]=(v*S-g*C-p*y)*B,t[15]=(h*C-d*S+u*y)*B,this}scale(t){const e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,a){return this.set(1,i,r,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,v=a*h,p=a*d,m=o*d,y=l*c,S=l*h,M=l*d,C=i.x,A=i.y,P=i.z;return n[0]=(1-(v+m))*C,n[1]=(f+M)*C,n[2]=(g-S)*C,n[3]=0,n[4]=(f-M)*A,n[5]=(1-(u+m))*A,n[6]=(p+y)*A,n[7]=0,n[8]=(g+S)*P,n[9]=(p-y)*P,n[10]=(1-(u+v))*P,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];const r=this.determinant();if(r===0)return i.set(1,1,1),e.identity(),this;let a=ns.set(n[0],n[1],n[2]).length();const o=ns.set(n[4],n[5],n[6]).length(),l=ns.set(n[8],n[9],n[10]).length();r<0&&(a=-a),Ci.copy(this);const c=1/a,h=1/o,d=1/l;return Ci.elements[0]*=c,Ci.elements[1]*=c,Ci.elements[2]*=c,Ci.elements[4]*=h,Ci.elements[5]*=h,Ci.elements[6]*=h,Ci.elements[8]*=d,Ci.elements[9]*=d,Ci.elements[10]*=d,e.setFromRotationMatrix(Ci),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,n,r,a,o=Vi,l=!1){const c=this.elements,h=2*r/(e-t),d=2*r/(i-n),u=(e+t)/(e-t),f=(i+n)/(i-n);let g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===Vi)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===cr)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,r,a,o=Vi,l=!1){const c=this.elements,h=2/(e-t),d=2/(i-n),u=-(e+t)/(e-t),f=-(i+n)/(i-n);let g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===Vi)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===cr)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ns=new L,Ci=new de,Zd=new L(0,0,0),$d=new L(1,1,1),mn=new L,vr=new L,gi=new L,lc=new de,cc=new Os;class Yi{constructor(t=0,e=0,i=0,n=Yi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(re(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-re(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return lc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return cc.setFromEuler(this),this.setFromQuaternion(cc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yi.DEFAULT_ORDER="XYZ";class Ah{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Jd=0;const hc=new L,ss=new Os,ji=new de,yr=new L,ks=new L,jd=new L,Qd=new Os,uc=new L(1,0,0),dc=new L(0,1,0),fc=new L(0,0,1),pc={type:"added"},tf={type:"removed"},rs={type:"childadded",child:null},Oa={type:"childremoved",child:null};class Ge extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ge.DEFAULT_UP.clone();const t=new L,e=new Yi,i=new Os,n=new L(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new de},normalMatrix:{value:new jt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=Ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ah,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.multiply(ss),this}rotateOnWorldAxis(t,e){return ss.setFromAxisAngle(t,e),this.quaternion.premultiply(ss),this}rotateX(t){return this.rotateOnAxis(uc,t)}rotateY(t){return this.rotateOnAxis(dc,t)}rotateZ(t){return this.rotateOnAxis(fc,t)}translateOnAxis(t,e){return hc.copy(t).applyQuaternion(this.quaternion),this.position.add(hc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(uc,t)}translateY(t){return this.translateOnAxis(dc,t)}translateZ(t){return this.translateOnAxis(fc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?yr.copy(t):yr.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(ks,yr,this.up):ji.lookAt(yr,ks,this.up),this.quaternion.setFromRotationMatrix(ji),n&&(ji.extractRotation(n.matrixWorld),ss.setFromRotationMatrix(ji),this.quaternion.premultiply(ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(le("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(pc),rs.child=t,this.dispatchEvent(rs),rs.child=null):le("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(tf),Oa.child=t,this.dispatchEvent(Oa),Oa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ji.multiply(t.parent.matrixWorld)),t.applyMatrix4(ji),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(pc),rs.child=t,this.dispatchEvent(rs),rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,t,jd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,Qd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,n=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*n,r[13]+=i-r[1]*e-r[5]*i-r[9]*n,r[14]+=n-r[2]*e-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),this.static!==!1&&(n.static=this.static),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));n.material=o}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}Ge.DEFAULT_UP=new L(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ne extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ef={type:"move"};class Ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,i),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ef)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ne;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Ch={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gn={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function za(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Bt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ci){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=ce.workingColorSpace){return this.r=t,this.g=e,this.b=i,ce.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=ce.workingColorSpace){if(t=Hd(t,1),e=re(e,0,1),i=re(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=za(a,r,t+1/3),this.g=za(a,r,t),this.b=za(a,r,t-1/3)}return ce.colorSpaceToWorking(this,n),this}setStyle(t,e=ci){function i(r){r!==void 0&&parseFloat(r)<1&&Xt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Xt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ci){const i=Ch[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hn(t.r),this.g=hn(t.g),this.b=hn(t.b),this}copyLinearToSRGB(t){return this.r=Ts(t.r),this.g=Ts(t.g),this.b=Ts(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ci){return ce.workingToColorSpace(ri.copy(this),t),Math.round(re(ri.r*255,0,255))*65536+Math.round(re(ri.g*255,0,255))*256+Math.round(re(ri.b*255,0,255))}getHexString(t=ci){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.workingToColorSpace(ri.copy(this),e);const i=ri.r,n=ri.g,r=ri.b,a=Math.max(i,n,r),o=Math.min(i,n,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(n-r)/d+(n<r?6:0);break;case n:l=(r-i)/d+2;break;case r:l=(i-n)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.workingToColorSpace(ri.copy(this),e),t.r=ri.r,t.g=ri.g,t.b=ri.b,t}getStyle(t=ci){ce.workingToColorSpace(ri.copy(this),t);const e=ri.r,i=ri.g,n=ri.b;return t!==ci?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(gn),this.setHSL(gn.h+t,gn.s+e,gn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(gn),t.getHSL(Mr);const i=Ia(gn.h,Mr.h,e),n=Ia(gn.s,Mr.s,e),r=Ia(gn.l,Mr.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ri=new Bt;Bt.NAMES=Ch;class Pl{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Bt(t),this.near=e,this.far=i}clone(){return new Pl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class nf extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yi,this.environmentIntensity=1,this.environmentRotation=new Yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Ri=new L,Qi=new L,ka=new L,tn=new L,as=new L,os=new L,mc=new L,Ga=new L,Ha=new L,Va=new L,Wa=new Oe,Xa=new Oe,qa=new Oe;class Ei{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Ri.subVectors(t,e),n.cross(Ri);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Ri.subVectors(n,e),Qi.subVectors(i,e),ka.subVectors(t,e);const a=Ri.dot(Ri),o=Ri.dot(Qi),l=Ri.dot(ka),c=Qi.dot(Qi),h=Qi.dot(ka),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,tn)===null?!1:tn.x>=0&&tn.y>=0&&tn.x+tn.y<=1}static getInterpolation(t,e,i,n,r,a,o,l){return this.getBarycoord(t,e,i,n,tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,tn.x),l.addScaledVector(a,tn.y),l.addScaledVector(o,tn.z),l)}static getInterpolatedAttribute(t,e,i,n,r,a){return Wa.setScalar(0),Xa.setScalar(0),qa.setScalar(0),Wa.fromBufferAttribute(t,e),Xa.fromBufferAttribute(t,i),qa.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(Wa,r.x),a.addScaledVector(Xa,r.y),a.addScaledVector(qa,r.z),a}static isFrontFacing(t,e,i,n){return Ri.subVectors(i,e),Qi.subVectors(t,e),Ri.cross(Qi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ri.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),Ri.cross(Qi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ei.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ei.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return Ei.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return Ei.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ei.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,r=this.c;let a,o;as.subVectors(n,i),os.subVectors(r,i),Ga.subVectors(t,i);const l=as.dot(Ga),c=os.dot(Ga);if(l<=0&&c<=0)return e.copy(i);Ha.subVectors(t,n);const h=as.dot(Ha),d=os.dot(Ha);if(h>=0&&d<=h)return e.copy(n);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(as,a);Va.subVectors(t,r);const f=as.dot(Va),g=os.dot(Va);if(g>=0&&f<=g)return e.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(os,o);const p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return mc.subVectors(r,n),o=(d-h)/(d-h+(f-g)),e.copy(n).addScaledVector(mc,o);const m=1/(p+v+u);return a=v*m,o=u*m,e.copy(i).addScaledVector(as,a).addScaledVector(os,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class jn{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Pi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Pi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Pi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Pi):Pi.fromBufferAttribute(r,a),Pi.applyMatrix4(t.matrixWorld),this.expandByPoint(Pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Sr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Sr.copy(i.boundingBox)),Sr.applyMatrix4(t.matrixWorld),this.union(Sr)}const n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pi),Pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gs),br.subVectors(this.max,Gs),ls.subVectors(t.a,Gs),cs.subVectors(t.b,Gs),hs.subVectors(t.c,Gs),xn.subVectors(cs,ls),_n.subVectors(hs,cs),Cn.subVectors(ls,hs);let e=[0,-xn.z,xn.y,0,-_n.z,_n.y,0,-Cn.z,Cn.y,xn.z,0,-xn.x,_n.z,0,-_n.x,Cn.z,0,-Cn.x,-xn.y,xn.x,0,-_n.y,_n.x,0,-Cn.y,Cn.x,0];return!Ya(e,ls,cs,hs,br)||(e=[1,0,0,0,1,0,0,0,1],!Ya(e,ls,cs,hs,br))?!1:(Er.crossVectors(xn,_n),e=[Er.x,Er.y,Er.z],Ya(e,ls,cs,hs,br))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(en[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),en[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),en[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),en[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),en[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),en[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),en[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),en[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(en),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const en=[new L,new L,new L,new L,new L,new L,new L,new L],Pi=new L,Sr=new jn,ls=new L,cs=new L,hs=new L,xn=new L,_n=new L,Cn=new L,Gs=new L,br=new L,Er=new L,Rn=new L;function Ya(s,t,e,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){Rn.fromArray(s,r);const o=n.x*Math.abs(Rn.x)+n.y*Math.abs(Rn.y)+n.z*Math.abs(Rn.z),l=t.dot(Rn),c=e.dot(Rn),h=i.dot(Rn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const He=new L,Tr=new st;let sf=0;class Mi{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=nl,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Tr.fromBufferAttribute(this,e),Tr.applyMatrix3(t),this.setXY(e,Tr.x,Tr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Hi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Me(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array),n=Me(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array),n=Me(n,this.array),r=Me(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==nl&&(t.usage=this.usage),t}}class Rh extends Mi{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ph extends Mi{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class oe extends Mi{constructor(t,e,i){super(new Float32Array(t),e,i)}}const rf=new jn,Hs=new L,Ka=new L;class pr{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):rf.setFromPoints(t).getCenter(i);let n=0;for(let r=0,a=t.length;r<a;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Hs.subVectors(t,this.center);const e=Hs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Hs,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ka.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Hs.copy(t.center).add(Ka)),this.expandByPoint(Hs.copy(t.center).sub(Ka))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let af=0;const Si=new de,Za=new Ge,us=new L,xi=new jn,Vs=new jn,Ke=new L;class qe extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=cn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bd(t)?Ph:Rh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Si.makeRotationFromQuaternion(t),this.applyMatrix4(Si),this}rotateX(t){return Si.makeRotationX(t),this.applyMatrix4(Si),this}rotateY(t){return Si.makeRotationY(t),this.applyMatrix4(Si),this}rotateZ(t){return Si.makeRotationZ(t),this.applyMatrix4(Si),this}translate(t,e,i){return Si.makeTranslation(t,e,i),this.applyMatrix4(Si),this}scale(t,e,i){return Si.makeScale(t,e,i),this.applyMatrix4(Si),this}lookAt(t){return Za.lookAt(t),Za.updateMatrix(),this.applyMatrix4(Za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,r=t.length;n<r;n++){const a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new oe(i,3))}else{const i=Math.min(t.length,e.count);for(let n=0;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&Xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const r=e[i];xi.setFromBufferAttribute(r),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const i=this.boundingSphere.center;if(xi.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Vs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ke.addVectors(xi.min,Vs.min),xi.expandByPoint(Ke),Ke.addVectors(xi.max,Vs.max),xi.expandByPoint(Ke)):(xi.expandByPoint(Vs.min),xi.expandByPoint(Vs.max))}xi.getCenter(i);let n=0;for(let r=0,a=t.count;r<a;r++)Ke.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Ke));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ke.fromBufferAttribute(o,c),l&&(us.fromBufferAttribute(t,c),Ke.add(us)),n=Math.max(n,i.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new L,l[_]=new L;const c=new L,h=new L,d=new L,u=new st,f=new st,g=new st,v=new L,p=new L;function m(_,E,z){c.fromBufferAttribute(i,_),h.fromBufferAttribute(i,E),d.fromBufferAttribute(i,z),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,z),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(R),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(R),o[_].add(v),o[E].add(v),o[z].add(v),l[_].add(p),l[E].add(p),l[z].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let _=0,E=y.length;_<E;++_){const z=y[_],R=z.start,F=z.count;for(let G=R,X=R+F;G<X;G+=3)m(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const S=new L,M=new L,C=new L,A=new L;function P(_){C.fromBufferAttribute(n,_),A.copy(C);const E=o[_];S.copy(E),S.sub(C.multiplyScalar(C.dot(E))).normalize(),M.crossVectors(A,E);const R=M.dot(l[_])<0?-1:1;a.setXYZW(_,S.x,S.y,S.z,R)}for(let _=0,E=y.length;_<E;++_){const z=y[_],R=z.start,F=z.count;for(let G=R,X=R+F;G<X;G+=3)P(t.getX(G+0)),P(t.getX(G+1)),P(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Mi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const n=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,d=new L;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),v=t.getX(u+1),p=t.getX(u+2);n.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,p),h.subVectors(a,r),d.subVectors(n,r),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)n.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(n,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ke.fromBufferAttribute(t,e),Ke.normalize(),t.setXYZ(e,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let m=0;m<h;m++)u[g++]=c[f++]}return new Mi(u,h,d)}if(this.index===null)return Xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new qe,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class of{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=nl,this.updateRanges=[],this.version=0,this.uuid=cn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const di=new L;class ha{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)di.fromBufferAttribute(this,e),di.applyMatrix4(t),this.setXYZ(e,di.x,di.y,di.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)di.fromBufferAttribute(this,e),di.applyNormalMatrix(t),this.setXYZ(e,di.x,di.y,di.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)di.fromBufferAttribute(this,e),di.transformDirection(t),this.setXYZ(e,di.x,di.y,di.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Hi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Me(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Hi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Hi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Hi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Hi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array),n=Me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array),n=Me(n,this.array),r=Me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){la("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new Mi(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ha(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){la("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let lf=0;class Bs extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=cn(),this.name="",this.type="Material",this.blending=Es,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=po,this.blendDst=mo,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Xt(`Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){Xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(i.blending=this.blending),this.side!==En&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==po&&(i.blendSrc=this.blendSrc),this.blendDst!==mo&&(i.blendDst=this.blendDst),this.blendEquation!==Wn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ec&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=n(t.textures),a=n(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ua extends Bs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ds;const Ws=new L,fs=new L,ps=new L,ms=new st,Xs=new st,Lh=new de,wr=new L,qs=new L,Ar=new L,gc=new st,$a=new st,xc=new st;class rl extends Ge{constructor(t=new ua){if(super(),this.isSprite=!0,this.type="Sprite",ds===void 0){ds=new qe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new of(e,5);ds.setIndex([0,1,2,0,2,3]),ds.setAttribute("position",new ha(i,3,0,!1)),ds.setAttribute("uv",new ha(i,2,3,!1))}this.geometry=ds,this.material=t,this.center=new st(.5,.5),this.count=1}raycast(t,e){t.camera===null&&le('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fs.setFromMatrixScale(this.matrixWorld),Lh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ps.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fs.multiplyScalar(-ps.z);const i=this.material.rotation;let n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));const a=this.center;Cr(wr.set(-.5,-.5,0),ps,a,fs,n,r),Cr(qs.set(.5,-.5,0),ps,a,fs,n,r),Cr(Ar.set(.5,.5,0),ps,a,fs,n,r),gc.set(0,0),$a.set(1,0),xc.set(1,1);let o=t.ray.intersectTriangle(wr,qs,Ar,!1,Ws);if(o===null&&(Cr(qs.set(-.5,.5,0),ps,a,fs,n,r),$a.set(0,1),o=t.ray.intersectTriangle(wr,Ar,qs,!1,Ws),o===null))return;const l=t.ray.origin.distanceTo(Ws);l<t.near||l>t.far||e.push({distance:l,point:Ws.clone(),uv:Ei.getInterpolation(Ws,wr,qs,Ar,gc,$a,xc,new st),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Cr(s,t,e,i,n,r){ms.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(Xs.x=r*ms.x-n*ms.y,Xs.y=n*ms.x+r*ms.y):Xs.copy(ms),s.copy(t),s.x+=Xs.x,s.y+=Xs.y,s.applyMatrix4(Lh)}const nn=new L,Ja=new L,Rr=new L,vn=new L,ja=new L,Pr=new L,Qa=new L;class cf{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(nn.copy(this.origin).addScaledVector(this.direction,e),nn.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Ja.copy(t).add(e).multiplyScalar(.5),Rr.copy(e).sub(t).normalize(),vn.copy(this.origin).sub(Ja);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Rr),o=vn.dot(this.direction),l=-vn.dot(Rr),c=vn.lengthSq(),h=Math.abs(1-a*a);let d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const v=1/h;d*=v,u*=v,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Ja).addScaledVector(Rr,u),f}intersectSphere(t,e){nn.subVectors(t.center,this.origin);const i=nn.dot(this.direction),n=nn.dot(nn)-i*i,r=t.radius*t.radius;if(n>r)return null;const a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,n=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,n=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,nn)!==null}intersectTriangle(t,e,i,n,r){ja.subVectors(e,t),Pr.subVectors(i,t),Qa.crossVectors(ja,Pr);let a=this.direction.dot(Qa),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;vn.subVectors(this.origin,t);const l=o*this.direction.dot(Pr.crossVectors(vn,Pr));if(l<0)return null;const c=o*this.direction.dot(ja.cross(vn));if(c<0||l+c>a)return null;const h=-o*vn.dot(Qa);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pe extends Bs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=_l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _c=new de,Pn=new cf,Lr=new pr,vc=new L,Ir=new L,Dr=new L,Nr=new L,to=new L,Ur=new L,yc=new L,Fr=new L;class Nt extends Ge{constructor(t=new qe,e=new Pe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(r&&o){Ur.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(to.fromBufferAttribute(d,t),a?Ur.addScaledVector(to,h):Ur.addScaledVector(to.sub(e),h))}e.add(Ur)}return e}raycast(t,e){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Lr.copy(i.boundingSphere),Lr.applyMatrix4(r),Pn.copy(t.ray).recast(t.near),!(Lr.containsPoint(Pn.origin)===!1&&(Pn.intersectSphere(Lr,vc)===null||Pn.origin.distanceToSquared(vc)>(t.far-t.near)**2))&&(_c.copy(r).invert(),Pn.copy(t.ray).applyMatrix4(_c),!(i.boundingBox!==null&&Pn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Pn)))}_computeIntersections(t,e,i){let n;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const p=u[g],m=a[p.materialIndex],y=Math.max(p.start,f.start),S=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let M=y,C=S;M<C;M+=3){const A=o.getX(M),P=o.getX(M+1),_=o.getX(M+2);n=Or(this,m,t,i,c,h,d,A,P,_),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const y=o.getX(p),S=o.getX(p+1),M=o.getX(p+2);n=Or(this,a,t,i,c,h,d,y,S,M),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const p=u[g],m=a[p.materialIndex],y=Math.max(p.start,f.start),S=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=y,C=S;M<C;M+=3){const A=M,P=M+1,_=M+2;n=Or(this,m,t,i,c,h,d,A,P,_),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const y=p,S=p+1,M=p+2;n=Or(this,a,t,i,c,h,d,y,S,M),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}}}function hf(s,t,e,i,n,r,a,o){let l;if(t.side===pi?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,t.side===En,o),l===null)return null;Fr.copy(o),Fr.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Fr);return c<e.near||c>e.far?null:{distance:c,point:Fr.clone(),object:s}}function Or(s,t,e,i,n,r,a,o,l,c){s.getVertexPosition(o,Ir),s.getVertexPosition(l,Dr),s.getVertexPosition(c,Nr);const h=hf(s,t,e,i,Ir,Dr,Nr,yc);if(h){const d=new L;Ei.getBarycoord(yc,Ir,Dr,Nr,d),n&&(h.uv=Ei.getInterpolatedAttribute(n,o,l,c,d,new st)),r&&(h.uv1=Ei.getInterpolatedAttribute(r,o,l,c,d,new st)),a&&(h.normal=Ei.getInterpolatedAttribute(a,o,l,c,d,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new L,materialIndex:0};Ei.getNormal(Ir,Dr,Nr,u.normal),h.face=u,h.barycoord=d}return h}class Ih extends ui{constructor(t=null,e=1,i=1,n,r,a,o,l,c=ei,h=ei,d,u){super(null,a,o,l,c,h,n,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mc extends Mi{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const gs=new de,Sc=new de,Br=[],bc=new jn,uf=new de,Ys=new Nt,Ks=new pr;class da extends Nt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Mc(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,uf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new jn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,gs),bc.copy(t.boundingBox).applyMatrix4(gs),this.boundingBox.union(bc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new pr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,gs),Ks.copy(t.boundingSphere).applyMatrix4(gs),this.boundingSphere.union(Ks)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){const i=this.matrixWorld,n=this.count;if(Ys.geometry=this.geometry,Ys.material=this.material,Ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ks.copy(this.boundingSphere),Ks.applyMatrix4(i),t.ray.intersectsSphere(Ks)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,gs),Sc.multiplyMatrices(i,gs),Ys.matrixWorld=Sc,Ys.raycast(t,Br);for(let a=0,o=Br.length;a<o;a++){const l=Br[a];l.instanceId=r,l.object=this,e.push(l)}Br.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Mc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ih(new Float32Array(n*this.count),n,this.count,bl,Ii));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=n*t;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const eo=new L,df=new L,ff=new jt;class Gn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=eo.subVectors(i,e).cross(df.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(eo),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||ff.getNormalMatrix(t),n=this.coplanarPoint(eo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ln=new pr,pf=new st(.5,.5),zr=new L;class Ll{constructor(t=new Gn,e=new Gn,i=new Gn,n=new Gn,r=new Gn,a=new Gn){this.planes=[t,e,i,n,r,a]}set(t,e,i,n,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Vi,i=!1){const n=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],v=r[9],p=r[10],m=r[11],y=r[12],S=r[13],M=r[14],C=r[15];if(n[0].setComponents(c-a,f-h,m-g,C-y).normalize(),n[1].setComponents(c+a,f+h,m+g,C+y).normalize(),n[2].setComponents(c+o,f+d,m+v,C+S).normalize(),n[3].setComponents(c-o,f-d,m-v,C-S).normalize(),i)n[4].setComponents(l,u,p,M).normalize(),n[5].setComponents(c-l,f-u,m-p,C-M).normalize();else if(n[4].setComponents(c-l,f-u,m-p,C-M).normalize(),e===Vi)n[5].setComponents(c+l,f+u,m+p,C+M).normalize();else if(e===cr)n[5].setComponents(l,u,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ln.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ln.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ln)}intersectsSprite(t){Ln.center.set(0,0,0);const e=pf.distanceTo(t.center);return Ln.radius=.7071067811865476+e,Ln.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ln)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(zr.x=n.normal.x>0?t.max.x:t.min.x,zr.y=n.normal.y>0?t.max.y:t.min.y,zr.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(zr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Dh extends ui{constructor(t=[],e=Zn,i,n,r,a,o,l,c,h){super(t,e,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Il extends ui{constructor(t,e,i,n,r,a,o,l,c){super(t,e,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hr extends ui{constructor(t,e,i=qi,n,r,a,o=ei,l=ei,c,h=dn,d=1){if(h!==dn&&h!==Yn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Rl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class mf extends hr{constructor(t,e=qi,i=Zn,n,r,a=ei,o=ei,l,c=dn){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,n,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Nh extends ui{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ue extends qe{constructor(t=1,e=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};const o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,n,a,2),g("x","z","y",1,-1,t,i,-e,n,a,3),g("x","y","z",1,-1,t,e,i,n,r,4),g("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(d,2));function g(v,p,m,y,S,M,C,A,P,_,E){const z=M/P,R=C/_,F=M/2,G=C/2,X=A/2,B=P+1,V=_+1;let U=0,nt=0;const Q=new L;for(let gt=0;gt<V;gt++){const vt=gt*R-G;for(let xt=0;xt<B;xt++){const Vt=xt*z-F;Q[v]=Vt*y,Q[p]=vt*S,Q[m]=X,c.push(Q.x,Q.y,Q.z),Q[v]=0,Q[p]=0,Q[m]=A>0?1:-1,h.push(Q.x,Q.y,Q.z),d.push(xt/P),d.push(1-gt/_),U+=1}}for(let gt=0;gt<_;gt++)for(let vt=0;vt<P;vt++){const xt=u+vt+B*gt,Vt=u+vt+B*(gt+1),fe=u+(vt+1)+B*(gt+1),xe=u+(vt+1)+B*gt;l.push(xt,Vt,xe),l.push(Vt,fe,xe),nt+=6}o.addGroup(f,nt,E),f+=nt,u+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ue(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ki extends qe{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new L,h=new st;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=i+d/e*n;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(o,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ki(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Fe extends qe{constructor(t=1,e=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const v=[],p=i/2;let m=0;y(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new oe(d,3)),this.setAttribute("normal",new oe(u,3)),this.setAttribute("uv",new oe(f,2));function y(){const M=new L,C=new L;let A=0;const P=(e-t)/i;for(let _=0;_<=r;_++){const E=[],z=_/r,R=z*(e-t)+t;for(let F=0;F<=n;F++){const G=F/n,X=G*l+o,B=Math.sin(X),V=Math.cos(X);C.x=R*B,C.y=-z*i+p,C.z=R*V,d.push(C.x,C.y,C.z),M.set(B,P,V).normalize(),u.push(M.x,M.y,M.z),f.push(G,1-z),E.push(g++)}v.push(E)}for(let _=0;_<n;_++)for(let E=0;E<r;E++){const z=v[E][_],R=v[E+1][_],F=v[E+1][_+1],G=v[E][_+1];(t>0||E!==0)&&(h.push(z,R,G),A+=3),(e>0||E!==r-1)&&(h.push(R,F,G),A+=3)}c.addGroup(m,A,0),m+=A}function S(M){const C=g,A=new st,P=new L;let _=0;const E=M===!0?t:e,z=M===!0?1:-1;for(let F=1;F<=n;F++)d.push(0,p*z,0),u.push(0,z,0),f.push(.5,.5),g++;const R=g;for(let F=0;F<=n;F++){const X=F/n*l+o,B=Math.cos(X),V=Math.sin(X);P.x=E*V,P.y=p*z,P.z=E*B,d.push(P.x,P.y,P.z),u.push(0,z,0),A.x=B*.5+.5,A.y=V*.5*z+.5,f.push(A.x,A.y),g++}for(let F=0;F<n;F++){const G=C+F,X=R+F;M===!0?h.push(X,X+1,G):h.push(X+1,X,G),_+=3}c.addGroup(m,_,M===!0?1:2),m+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ui extends Fe{constructor(t=1,e=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Ui(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ma extends qe{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const r=[],a=[];o(n),c(i),h(),this.setAttribute("position",new oe(r,3)),this.setAttribute("normal",new oe(r.slice(),3)),this.setAttribute("uv",new oe(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const S=new L,M=new L,C=new L;for(let A=0;A<e.length;A+=3)f(e[A+0],S),f(e[A+1],M),f(e[A+2],C),l(S,M,C,y)}function l(y,S,M,C){const A=C+1,P=[];for(let _=0;_<=A;_++){P[_]=[];const E=y.clone().lerp(M,_/A),z=S.clone().lerp(M,_/A),R=A-_;for(let F=0;F<=R;F++)F===0&&_===A?P[_][F]=E:P[_][F]=E.clone().lerp(z,F/R)}for(let _=0;_<A;_++)for(let E=0;E<2*(A-_)-1;E++){const z=Math.floor(E/2);E%2===0?(u(P[_][z+1]),u(P[_+1][z]),u(P[_][z])):(u(P[_][z+1]),u(P[_+1][z+1]),u(P[_+1][z]))}}function c(y){const S=new L;for(let M=0;M<r.length;M+=3)S.x=r[M+0],S.y=r[M+1],S.z=r[M+2],S.normalize().multiplyScalar(y),r[M+0]=S.x,r[M+1]=S.y,r[M+2]=S.z}function h(){const y=new L;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];const M=p(y)/2/Math.PI+.5,C=m(y)/Math.PI+.5;a.push(M,1-C)}g(),d()}function d(){for(let y=0;y<a.length;y+=6){const S=a[y+0],M=a[y+2],C=a[y+4],A=Math.max(S,M,C),P=Math.min(S,M,C);A>.9&&P<.1&&(S<.2&&(a[y+0]+=1),M<.2&&(a[y+2]+=1),C<.2&&(a[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,S){const M=y*3;S.x=t[M+0],S.y=t[M+1],S.z=t[M+2]}function g(){const y=new L,S=new L,M=new L,C=new L,A=new st,P=new st,_=new st;for(let E=0,z=0;E<r.length;E+=9,z+=6){y.set(r[E+0],r[E+1],r[E+2]),S.set(r[E+3],r[E+4],r[E+5]),M.set(r[E+6],r[E+7],r[E+8]),A.set(a[z+0],a[z+1]),P.set(a[z+2],a[z+3]),_.set(a[z+4],a[z+5]),C.copy(y).add(S).add(M).divideScalar(3);const R=p(C);v(A,z+0,y,R),v(P,z+2,S,R),v(_,z+4,M,R)}}function v(y,S,M,C){C<0&&y.x===1&&(a[S]=y.x-1),M.x===0&&M.z===0&&(a[S]=C/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ma(t.vertices,t.indices,t.radius,t.detail)}}class Dl extends Ma{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Dl(t.radius,t.detail)}}class Zi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let n=0;const r=i.length;let a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(r-1);const h=i[n],u=i[n+1]-h,f=(a-h)/u;return(n+f)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);const a=this.getPoint(n),o=this.getPoint(r),l=e||(a.isVector2?new st:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new L,n=[],r=[],a=[],o=new L,l=new de;for(let f=0;f<=t;f++){const g=f/t;n[f]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(n[0].x),d=Math.abs(n[0].y),u=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(re(n[f-1].dot(n[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(n[f],r[f])}if(e===!0){let f=Math.acos(re(r[0].dot(r[t]),-1,1));f/=t,n[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(n[g],f*g)),a[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Nl extends Zi{constructor(t=0,e=0,i=1,n=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new st){const i=e,n=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(a?r=0:r=n),this.aClockwise===!0&&!a&&(r===n?r=-n:r=r-n);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class gf extends Nl{constructor(t,e,i,n,r,a){super(t,e,i,i,n,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ul(){let s=0,t=0,e=0,i=0;function n(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){n(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,n(a,o,u,f)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+i*o}}}const kr=new L,io=new Ul,no=new Ul,so=new Ul;class xf extends Zi{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new L){const i=e,n=this.points,r=n.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%r]:(kr.subVectors(n[0],n[1]).add(n[0]),c=kr);const d=n[o%r],u=n[(o+1)%r];if(this.closed||o+2<r?h=n[(o+2)%r]:(kr.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=kr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),io.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,v,p),no.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,v,p),so.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,v,p)}else this.curveType==="catmullrom"&&(io.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),no.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),so.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(io.calc(l),no.calc(l),so.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new L().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ec(s,t,e,i,n){const r=(i-t)*.5,a=(n-e)*.5,o=s*s,l=s*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*s+e}function _f(s,t){const e=1-s;return e*e*t}function vf(s,t){return 2*(1-s)*s*t}function yf(s,t){return s*s*t}function rr(s,t,e,i){return _f(s,t)+vf(s,e)+yf(s,i)}function Mf(s,t){const e=1-s;return e*e*e*t}function Sf(s,t){const e=1-s;return 3*e*e*s*t}function bf(s,t){return 3*(1-s)*s*s*t}function Ef(s,t){return s*s*s*t}function ar(s,t,e,i,n){return Mf(s,t)+Sf(s,e)+bf(s,i)+Ef(s,n)}class Uh extends Zi{constructor(t=new st,e=new st,i=new st,n=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new st){const i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ar(t,n.x,r.x,a.x,o.x),ar(t,n.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Tf extends Zi{constructor(t=new L,e=new L,i=new L,n=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new L){const i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ar(t,n.x,r.x,a.x,o.x),ar(t,n.y,r.y,a.y,o.y),ar(t,n.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Fh extends Zi{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wf extends Zi{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Oh extends Zi{constructor(t=new st,e=new st,i=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new st){const i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(rr(t,n.x,r.x,a.x),rr(t,n.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Af extends Zi{constructor(t=new L,e=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new L){const i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(rr(t,n.x,r.x,a.x),rr(t,n.y,r.y,a.y),rr(t,n.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bh extends Zi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){const i=e,n=this.points,r=(n.length-1)*t,a=Math.floor(r),o=r-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],d=n[a>n.length-3?n.length-1:a+2];return i.set(Ec(o,l.x,c.x,h.x,d.x),Ec(o,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new st().fromArray(n))}return this}}var al=Object.freeze({__proto__:null,ArcCurve:gf,CatmullRomCurve3:xf,CubicBezierCurve:Uh,CubicBezierCurve3:Tf,EllipseCurve:Nl,LineCurve:Fh,LineCurve3:wf,QuadraticBezierCurve:Oh,QuadraticBezierCurve3:Af,SplineCurve:Bh});class Cf extends Zi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new al[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),n=this.getCurveLengths();let r=0;for(;r<n.length;){if(n[r]>=i){const a=n[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let n=0,r=this.curves;n<r.length;n++){const a=r[n],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(new al[n.type]().fromJSON(n))}return this}}class Tc extends Cf{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Fh(this.currentPoint.clone(),new st(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){const r=new Oh(this.currentPoint.clone(),new st(t,e),new st(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,r,a){const o=new Uh(this.currentPoint.clone(),new st(t,e),new st(i,n),new st(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Bh(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,n,r,a),this}absarc(t,e,i,n,r,a){return this.absellipse(t,e,i,i,n,r,a),this}ellipse(t,e,i,n,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,n,r,a,o,l),this}absellipse(t,e,i,n,r,a,o,l){const c=new Nl(t,e,i,n,r,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class fa extends Tc{constructor(t){super(t),this.uuid=cn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(new Tc().fromJSON(n))}return this}}function Rf(s,t,e=2){const i=t&&t.length,n=i?t[0]*e:s.length;let r=zh(s,0,n,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=Nf(s,t,r,e)),s.length>80*e){o=s[0],l=s[1];let h=o,d=l;for(let u=e;u<n;u+=e){const f=s[u],g=s[u+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return ur(r,a,e,o,l,c,0),a}function zh(s,t,e,i,n){let r;if(n===Xf(s,t,e,i)>0)for(let a=t;a<e;a+=i)r=wc(a/i|0,s[a],s[a+1],r);else for(let a=e-i;a>=t;a-=i)r=wc(a/i|0,s[a],s[a+1],r);return r&&Ps(r,r.next)&&(fr(r),r=r.next),r}function $n(s,t){if(!s)return s;t||(t=s);let e=s,i;do if(i=!1,!e.steiner&&(Ps(e,e.next)||De(e.prev,e,e.next)===0)){if(fr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function ur(s,t,e,i,n,r,a){if(!s)return;!a&&r&&zf(s,i,n,r);let o=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?Lf(s,i,n,r):Pf(s)){t.push(l.i,s.i,c.i),fr(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=If($n(s),t),ur(s,t,e,i,n,r,2)):a===2&&Df(s,t,e,i,n,r):ur($n(s),t,e,i,n,r,1);break}}}function Pf(s){const t=s.prev,e=s,i=s.next;if(De(t,e,i)>=0)return!1;const n=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=Math.min(n,r,a),d=Math.min(o,l,c),u=Math.max(n,r,a),f=Math.max(o,l,c);let g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&tr(n,o,r,l,a,c,g.x,g.y)&&De(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Lf(s,t,e,i){const n=s.prev,r=s,a=s.next;if(De(n,r,a)>=0)return!1;const o=n.x,l=r.x,c=a.x,h=n.y,d=r.y,u=a.y,f=Math.min(o,l,c),g=Math.min(h,d,u),v=Math.max(o,l,c),p=Math.max(h,d,u),m=ol(f,g,t,e,i),y=ol(v,p,t,e,i);let S=s.prevZ,M=s.nextZ;for(;S&&S.z>=m&&M&&M.z<=y;){if(S.x>=f&&S.x<=v&&S.y>=g&&S.y<=p&&S!==n&&S!==a&&tr(o,h,l,d,c,u,S.x,S.y)&&De(S.prev,S,S.next)>=0||(S=S.prevZ,M.x>=f&&M.x<=v&&M.y>=g&&M.y<=p&&M!==n&&M!==a&&tr(o,h,l,d,c,u,M.x,M.y)&&De(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;S&&S.z>=m;){if(S.x>=f&&S.x<=v&&S.y>=g&&S.y<=p&&S!==n&&S!==a&&tr(o,h,l,d,c,u,S.x,S.y)&&De(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;M&&M.z<=y;){if(M.x>=f&&M.x<=v&&M.y>=g&&M.y<=p&&M!==n&&M!==a&&tr(o,h,l,d,c,u,M.x,M.y)&&De(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function If(s,t){let e=s;do{const i=e.prev,n=e.next.next;!Ps(i,n)&&Gh(i,e,e.next,n)&&dr(i,n)&&dr(n,i)&&(t.push(i.i,e.i,n.i),fr(e),fr(e.next),e=s=n),e=e.next}while(e!==s);return $n(e)}function Df(s,t,e,i,n,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Hf(a,o)){let l=Hh(a,o);a=$n(a,a.next),l=$n(l,l.next),ur(a,t,e,i,n,r,0),ur(l,t,e,i,n,r,0);return}o=o.next}a=a.next}while(a!==s)}function Nf(s,t,e,i){const n=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*i,l=r<a-1?t[r+1]*i:s.length,c=zh(s,o,l,i,!1);c===c.next&&(c.steiner=!0),n.push(Gf(c))}n.sort(Uf);for(let r=0;r<n.length;r++)e=Ff(n[r],e);return e}function Uf(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const i=(s.next.y-s.y)/(s.next.x-s.x),n=(t.next.y-t.y)/(t.next.x-t.x);e=i-n}return e}function Ff(s,t){const e=Of(s,t);if(!e)return t;const i=Hh(e,s);return $n(i,i.next),$n(e,e.next)}function Of(s,t){let e=t;const i=s.x,n=s.y;let r=-1/0,a;if(Ps(s,e))return e;do{if(Ps(s,e.next))return e.next;if(n<=e.y&&n>=e.next.y&&e.next.y!==e.y){const d=e.x+(n-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===i))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&kh(n<c?i:r,n,l,c,n<c?r:i,n,e.x,e.y)){const d=Math.abs(n-e.y)/(i-e.x);dr(e,s)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&Bf(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function Bf(s,t){return De(s.prev,s,t.prev)<0&&De(t.next,s,s.next)<0}function zf(s,t,e,i){let n=s;do n.z===0&&(n.z=ol(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,kf(n)}function kf(s){let t,e=1;do{let i=s,n;s=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(n=i,i=i.nextZ,o--):(n=a,a=a.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;i=a}r.nextZ=null,e*=2}while(t>1);return s}function ol(s,t,e,i,n){return s=(s-e)*n|0,t=(t-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Gf(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function kh(s,t,e,i,n,r,a,o){return(n-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(n-a)*(i-o)}function tr(s,t,e,i,n,r,a,o){return!(s===a&&t===o)&&kh(s,t,e,i,n,r,a,o)}function Hf(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Vf(s,t)&&(dr(s,t)&&dr(t,s)&&Wf(s,t)&&(De(s.prev,s,t.prev)||De(s,t.prev,t))||Ps(s,t)&&De(s.prev,s,s.next)>0&&De(t.prev,t,t.next)>0)}function De(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ps(s,t){return s.x===t.x&&s.y===t.y}function Gh(s,t,e,i){const n=Hr(De(s,t,e)),r=Hr(De(s,t,i)),a=Hr(De(e,i,s)),o=Hr(De(e,i,t));return!!(n!==r&&a!==o||n===0&&Gr(s,e,t)||r===0&&Gr(s,i,t)||a===0&&Gr(e,s,i)||o===0&&Gr(e,t,i))}function Gr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Hr(s){return s>0?1:s<0?-1:0}function Vf(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Gh(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function dr(s,t){return De(s.prev,s,s.next)<0?De(s,t,s.next)>=0&&De(s,s.prev,t)>=0:De(s,t,s.prev)<0||De(s,s.next,t)<0}function Wf(s,t){let e=s,i=!1;const n=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&n<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==s);return i}function Hh(s,t){const e=ll(s.i,s.x,s.y),i=ll(t.i,t.x,t.y),n=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=n,n.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function wc(s,t,e,i){const n=ll(s,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function fr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function ll(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Xf(s,t,e,i){let n=0;for(let r=t,a=e-i;r<e;r+=i)n+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return n}class qf{static triangulate(t,e,i=2){return Rf(t,e,i)}}class rn{static area(t){const e=t.length;let i=0;for(let n=e-1,r=0;r<e;n=r++)i+=t[n].x*t[r].y-t[r].x*t[n].y;return i*.5}static isClockWise(t){return rn.area(t)<0}static triangulateShape(t,e){const i=[],n=[],r=[];Ac(t),Cc(i,t);let a=t.length;e.forEach(Ac);for(let l=0;l<e.length;l++)n.push(a),a+=e[l].length,Cc(i,e[l]);const o=qf.triangulate(i,n);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Ac(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Cc(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Fl extends qe{constructor(t=new fa([new st(.5,.5),new st(-.5,.5),new st(-.5,-.5),new st(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,n=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new oe(n,3)),this.setAttribute("uv",new oe(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Yf;let S,M=!1,C,A,P,_;if(m){S=m.getSpacedPoints(h),M=!0,u=!1;const J=m.isCatmullRomCurve3?m.closed:!1;C=m.computeFrenetFrames(h,J),A=new L,P=new L,_=new L}u||(p=0,f=0,g=0,v=0);const E=o.extractPoints(c);let z=E.shape;const R=E.holes;if(!rn.isClockWise(z)){z=z.reverse();for(let J=0,et=R.length;J<et;J++){const j=R[J];rn.isClockWise(j)&&(R[J]=j.reverse())}}function G(J){const j=10000000000000001e-36;let dt=J[0];for(let w=1;w<=J.length;w++){const Ot=w%J.length,yt=J[Ot],kt=yt.x-dt.x,ct=yt.y-dt.y,T=kt*kt+ct*ct,x=Math.max(Math.abs(yt.x),Math.abs(yt.y),Math.abs(dt.x),Math.abs(dt.y)),D=j*x*x;if(T<=D){J.splice(Ot,1),w--;continue}dt=yt}}G(z),R.forEach(G);const X=R.length,B=z;for(let J=0;J<X;J++){const et=R[J];z=z.concat(et)}function V(J,et,j){return et||le("ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(et,j)}const U=z.length;function nt(J,et,j){let dt,w,Ot;const yt=J.x-et.x,kt=J.y-et.y,ct=j.x-J.x,T=j.y-J.y,x=yt*yt+kt*kt,D=yt*T-kt*ct;if(Math.abs(D)>Number.EPSILON){const q=Math.sqrt(x),$=Math.sqrt(ct*ct+T*T),Y=et.x-kt/q,Et=et.y+yt/q,ht=j.x-T/$,It=j.y+ct/$,Gt=((ht-Y)*T-(It-Et)*ct)/(yt*T-kt*ct);dt=Y+yt*Gt-J.x,w=Et+kt*Gt-J.y;const tt=dt*dt+w*w;if(tt<=2)return new st(dt,w);Ot=Math.sqrt(tt/2)}else{let q=!1;yt>Number.EPSILON?ct>Number.EPSILON&&(q=!0):yt<-Number.EPSILON?ct<-Number.EPSILON&&(q=!0):Math.sign(kt)===Math.sign(T)&&(q=!0),q?(dt=-kt,w=yt,Ot=Math.sqrt(x)):(dt=yt,w=kt,Ot=Math.sqrt(x/2))}return new st(dt/Ot,w/Ot)}const Q=[];for(let J=0,et=B.length,j=et-1,dt=J+1;J<et;J++,j++,dt++)j===et&&(j=0),dt===et&&(dt=0),Q[J]=nt(B[J],B[j],B[dt]);const gt=[];let vt,xt=Q.concat();for(let J=0,et=X;J<et;J++){const j=R[J];vt=[];for(let dt=0,w=j.length,Ot=w-1,yt=dt+1;dt<w;dt++,Ot++,yt++)Ot===w&&(Ot=0),yt===w&&(yt=0),vt[dt]=nt(j[dt],j[Ot],j[yt]);gt.push(vt),xt=xt.concat(vt)}let Vt;if(p===0)Vt=rn.triangulateShape(B,R);else{const J=[],et=[];for(let j=0;j<p;j++){const dt=j/p,w=f*Math.cos(dt*Math.PI/2),Ot=g*Math.sin(dt*Math.PI/2)+v;for(let yt=0,kt=B.length;yt<kt;yt++){const ct=V(B[yt],Q[yt],Ot);zt(ct.x,ct.y,-w),dt===0&&J.push(ct)}for(let yt=0,kt=X;yt<kt;yt++){const ct=R[yt];vt=gt[yt];const T=[];for(let x=0,D=ct.length;x<D;x++){const q=V(ct[x],vt[x],Ot);zt(q.x,q.y,-w),dt===0&&T.push(q)}dt===0&&et.push(T)}}Vt=rn.triangulateShape(J,et)}const fe=Vt.length,xe=g+v;for(let J=0;J<U;J++){const et=u?V(z[J],xt[J],xe):z[J];M?(P.copy(C.normals[0]).multiplyScalar(et.x),A.copy(C.binormals[0]).multiplyScalar(et.y),_.copy(S[0]).add(P).add(A),zt(_.x,_.y,_.z)):zt(et.x,et.y,0)}for(let J=1;J<=h;J++)for(let et=0;et<U;et++){const j=u?V(z[et],xt[et],xe):z[et];M?(P.copy(C.normals[J]).multiplyScalar(j.x),A.copy(C.binormals[J]).multiplyScalar(j.y),_.copy(S[J]).add(P).add(A),zt(_.x,_.y,_.z)):zt(j.x,j.y,d/h*J)}for(let J=p-1;J>=0;J--){const et=J/p,j=f*Math.cos(et*Math.PI/2),dt=g*Math.sin(et*Math.PI/2)+v;for(let w=0,Ot=B.length;w<Ot;w++){const yt=V(B[w],Q[w],dt);zt(yt.x,yt.y,d+j)}for(let w=0,Ot=R.length;w<Ot;w++){const yt=R[w];vt=gt[w];for(let kt=0,ct=yt.length;kt<ct;kt++){const T=V(yt[kt],vt[kt],dt);M?zt(T.x,T.y+S[h-1].y,S[h-1].x+j):zt(T.x,T.y,d+j)}}}Z(),ot();function Z(){const J=n.length/3;if(u){let et=0,j=U*et;for(let dt=0;dt<fe;dt++){const w=Vt[dt];Ut(w[2]+j,w[1]+j,w[0]+j)}et=h+p*2,j=U*et;for(let dt=0;dt<fe;dt++){const w=Vt[dt];Ut(w[0]+j,w[1]+j,w[2]+j)}}else{for(let et=0;et<fe;et++){const j=Vt[et];Ut(j[2],j[1],j[0])}for(let et=0;et<fe;et++){const j=Vt[et];Ut(j[0]+U*h,j[1]+U*h,j[2]+U*h)}}i.addGroup(J,n.length/3-J,0)}function ot(){const J=n.length/3;let et=0;lt(B,et),et+=B.length;for(let j=0,dt=R.length;j<dt;j++){const w=R[j];lt(w,et),et+=w.length}i.addGroup(J,n.length/3-J,1)}function lt(J,et){let j=J.length;for(;--j>=0;){const dt=j;let w=j-1;w<0&&(w=J.length-1);for(let Ot=0,yt=h+p*2;Ot<yt;Ot++){const kt=U*Ot,ct=U*(Ot+1),T=et+dt+kt,x=et+w+kt,D=et+w+ct,q=et+dt+ct;Wt(T,x,D,q)}}}function zt(J,et,j){l.push(J),l.push(et),l.push(j)}function Ut(J,et,j){_e(J),_e(et),_e(j);const dt=n.length/3,w=y.generateTopUV(i,n,dt-3,dt-2,dt-1);Kt(w[0]),Kt(w[1]),Kt(w[2])}function Wt(J,et,j,dt){_e(J),_e(et),_e(dt),_e(et),_e(j),_e(dt);const w=n.length/3,Ot=y.generateSideWallUV(i,n,w-6,w-3,w-2,w-1);Kt(Ot[0]),Kt(Ot[1]),Kt(Ot[3]),Kt(Ot[1]),Kt(Ot[2]),Kt(Ot[3])}function _e(J){n.push(l[J*3+0]),n.push(l[J*3+1]),n.push(l[J*3+2])}function Kt(J){r.push(J.x),r.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Kf(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];i.push(o)}const n=t.options.extrudePath;return n!==void 0&&(t.options.extrudePath=new al[n.type]().fromJSON(n)),new Fl(i,t.options)}}const Yf={generateTopUV:function(s,t,e,i,n){const r=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[n*3],h=t[n*3+1];return[new st(r,a),new st(o,l),new st(c,h)]},generateSideWallUV:function(s,t,e,i,n,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],d=t[i*3+2],u=t[n*3],f=t[n*3+1],g=t[n*3+2],v=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new st(a,1-l),new st(c,1-d),new st(u,1-g),new st(v,1-m)]:[new st(o,1-l),new st(h,1-d),new st(f,1-g),new st(p,1-m)]}};function Kf(s,t,e){if(e.shapes=[],Array.isArray(s))for(let i=0,n=s.length;i<n;i++){const r=s[i];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class bs extends Ma{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new bs(t.radius,t.detail)}}class an extends qe{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],v=[],p=[];for(let m=0;m<h;m++){const y=m*u-a;for(let S=0;S<c;S++){const M=S*d-r;g.push(M,-y,0),v.push(0,0,1),p.push(S/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){const S=y+c*m,M=y+c*(m+1),C=y+1+c*(m+1),A=y+1+c*m;f.push(S,M,A),f.push(M,C,A)}this.setIndex(f),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(v,3)),this.setAttribute("uv",new oe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new an(t.width,t.height,t.widthSegments,t.heightSegments)}}class Sa extends qe{constructor(t=.5,e=1,i=32,n=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);const o=[],l=[],c=[],h=[];let d=t;const u=(e-t)/n,f=new L,g=new st;for(let v=0;v<=n;v++){for(let p=0;p<=i;p++){const m=r+p/i*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let v=0;v<n;v++){const p=v*(i+1);for(let m=0;m<i;m++){const y=m+p,S=y,M=y+i+1,C=y+i+2,A=y+1;o.push(S,M,A),o.push(M,C,A)}}this.setIndex(o),this.setAttribute("position",new oe(l,3)),this.setAttribute("normal",new oe(c,3)),this.setAttribute("uv",new oe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sa(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ol extends qe{constructor(t=new fa([new st(0,.5),new st(-.5,-.5),new st(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],n=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new oe(n,3)),this.setAttribute("normal",new oe(r,3)),this.setAttribute("uv",new oe(a,2));function c(h){const d=n.length/3,u=h.extractPoints(e);let f=u.shape;const g=u.holes;rn.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){const y=g[p];rn.isClockWise(y)===!0&&(g[p]=y.reverse())}const v=rn.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){const y=g[p];f=f.concat(y)}for(let p=0,m=f.length;p<m;p++){const y=f[p];n.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let p=0,m=v.length;p<m;p++){const y=v[p],S=y[0]+d,M=y[1]+d,C=y[2]+d;i.push(S,M,C),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Zf(e,t)}static fromJSON(t,e){const i=[];for(let n=0,r=t.shapes.length;n<r;n++){const a=e[t.shapes[n]];i.push(a)}return new Ol(i,t.curveSegments)}}function Zf(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,i=s.length;e<i;e++){const n=s[e];t.shapes.push(n.uuid)}else t.shapes.push(s.uuid);return t}class ae extends qe{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new L,u=new L,f=[],g=[],v=[],p=[];for(let m=0;m<=i;m++){const y=[],S=m/i;let M=0;m===0&&a===0?M=.5/e:m===i&&l===Math.PI&&(M=-.5/e);for(let C=0;C<=e;C++){const A=C/e;d.x=-t*Math.cos(n+A*r)*Math.sin(a+S*o),d.y=t*Math.cos(a+S*o),d.z=t*Math.sin(n+A*r)*Math.sin(a+S*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),p.push(A+M,1-S),y.push(c++)}h.push(y)}for(let m=0;m<i;m++)for(let y=0;y<e;y++){const S=h[m][y+1],M=h[m][y],C=h[m+1][y],A=h[m+1][y+1];(m!==0||a>0)&&f.push(S,M,A),(m!==i-1||l<Math.PI)&&f.push(M,C,A)}this.setIndex(f),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(v,3)),this.setAttribute("uv",new oe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ae(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Jn extends qe{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),n=Math.floor(n);const l=[],c=[],h=[],d=[],u=new L,f=new L,g=new L;for(let v=0;v<=i;v++){const p=a+v/i*o;for(let m=0;m<=n;m++){const y=m/n*r;f.x=(t+e*Math.cos(p))*Math.cos(y),f.y=(t+e*Math.cos(p))*Math.sin(y),f.z=e*Math.sin(p),c.push(f.x,f.y,f.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(m/n),d.push(v/i)}}for(let v=1;v<=i;v++)for(let p=1;p<=n;p++){const m=(n+1)*v+p-1,y=(n+1)*(v-1)+p-1,S=(n+1)*(v-1)+p,M=(n+1)*v+p;l.push(m,y,M),l.push(y,S,M)}this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function Ls(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(Xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function fi(s){const t={};for(let e=0;e<s.length;e++){const i=Ls(s[e]);for(const n in i)t[n]=i[n]}return t}function $f(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Vh(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}const Jf={clone:Ls,merge:fi};var jf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends Bs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jf,this.fragmentShader=Qf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ls(t.uniforms),this.uniformsGroups=$f(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class tp extends Ki{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _t extends Bs{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eh,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=_l,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ep extends Bs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ip extends Bs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ba extends Ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class np extends ba{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const ro=new de,Rc=new L,Pc=new L;class Wh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.mapType=vi,this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ll,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Rc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Rc),Pc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Pc),e.updateMatrixWorld(),ro.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ro,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===cr||e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ro)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Vr=new L,Wr=new Os,Oi=new L;class Xh extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Vr,Wr,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vr,Wr,Oi.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(Vr,Wr,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vr,Wr,Oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const yn=new L,Lc=new st,Ic=new st;class _i extends Xh{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=sl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(La*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return sl*2*Math.atan(Math.tan(La*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yn.x,yn.y).multiplyScalar(-t/yn.z),yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(yn.x,yn.y).multiplyScalar(-t/yn.z)}getViewSize(t,e){return this.getViewBounds(t,Lc,Ic),e.subVectors(Ic,Lc)}setViewOffset(t,e,i,n,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(La*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class sp extends Wh{constructor(){super(new _i(90,1,.5,500)),this.isPointLightShadow=!0}}class rp extends ba{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new sp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Bl extends Xh{constructor(t=-1,e=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ap extends Wh{constructor(){super(new Bl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class op extends ba{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.shadow=new ap}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class lp extends ba{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const xs=-90,_s=1;class cp extends Ge{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new _i(xs,_s,t,e);n.layers=this.layers,this.add(n);const r=new _i(xs,_s,t,e);r.layers=this.layers,this.add(r);const a=new _i(xs,_s,t,e);a.layers=this.layers,this.add(a);const o=new _i(xs,_s,t,e);o.layers=this.layers,this.add(o);const l=new _i(xs,_s,t,e);l.layers=this.layers,this.add(l);const c=new _i(xs,_s,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Vi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===cr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class hp extends _i{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class up{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=dp.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function dp(){this._document.hidden===!1&&this.reset()}function Dc(s,t,e,i){const n=fp(i);switch(e){case Sh:return s*t;case bl:return s*t/n.components*n.byteLength;case El:return s*t/n.components*n.byteLength;case Cs:return s*t*2/n.components*n.byteLength;case Tl:return s*t*2/n.components*n.byteLength;case bh:return s*t*3/n.components*n.byteLength;case Di:return s*t*4/n.components*n.byteLength;case wl:return s*t*4/n.components*n.byteLength;case $r:case Jr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case jr:case Qr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case wo:case Co:return Math.max(s,16)*Math.max(t,8)/4;case To:case Ao:return Math.max(s,8)*Math.max(t,8)/2;case Ro:case Po:case Io:case Do:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Lo:case No:case Uo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Fo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Oo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Bo:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case zo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ko:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Go:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Vo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Wo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case qo:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Yo:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ko:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Zo:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case $o:case Jo:case jo:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Qo:case tl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case el:case il:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function fp(s){switch(s){case vi:case _h:return{byteLength:1,components:1};case or:case vh:case un:return{byteLength:2,components:1};case Ml:case Sl:return{byteLength:2,components:4};case qi:case yl:case Ii:return{byteLength:4,components:1};case yh:case Mh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xl}}));typeof window<"u"&&(window.__THREE__?Xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xl);function qh(){let s=null,t=!1,e=null,i=null;function n(r,a){e(r,a),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function pp(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var mp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gp=`#ifdef USE_ALPHAHASH
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
#endif`,xp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_p=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mp=`#ifdef USE_AOMAP
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
#endif`,Sp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bp=`#ifdef USE_BATCHING
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
#endif`,Ep=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ap=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cp=`#ifdef USE_IRIDESCENCE
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
#endif`,Rp=`#ifdef USE_BUMPMAP
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
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Np=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Up=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Fp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Op=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Bp=`#define PI 3.141592653589793
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
} // validated`,zp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kp=`vec3 transformedNormal = objectNormal;
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
#endif`,Gp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xp="gl_FragColor = linearToOutputTexel( gl_FragColor );",qp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yp=`#ifdef USE_ENVMAP
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
#endif`,Kp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Zp=`#ifdef USE_ENVMAP
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
#endif`,$p=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jp=`#ifdef USE_ENVMAP
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
#endif`,jp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,em=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,im=`#ifdef USE_GRADIENTMAP
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
}`,nm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,am=`uniform bool receiveShadow;
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
#endif`,om=`#ifdef USE_ENVMAP
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
#endif`,lm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dm=`PhysicalMaterial material;
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
#endif`,fm=`uniform sampler2D dfgLUT;
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
}`,pm=`
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
#endif`,mm=`#if defined( RE_IndirectDiffuse )
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
#endif`,gm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_m=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ym=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Em=`#if defined( USE_POINTS_UV )
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
#endif`,Tm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Am=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pm=`#ifdef USE_MORPHTARGETS
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
#endif`,Lm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Im=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Om=`#ifdef USE_NORMALMAP
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
#endif`,Bm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,km=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ym=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Km=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$m=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qm=`float getShadowMask() {
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
}`,t0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,e0=`#ifdef USE_SKINNING
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
#endif`,i0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,n0=`#ifdef USE_SKINNING
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
#endif`,s0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,r0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,a0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,o0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,l0=`#ifdef USE_TRANSMISSION
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
#endif`,c0=`#ifdef USE_TRANSMISSION
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
#endif`,h0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const p0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,m0=`uniform sampler2D t2D;
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
}`,g0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y0=`#include <common>
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
}`,M0=`#if DEPTH_PACKING == 3200
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
}`,S0=`#define DISTANCE
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
}`,b0=`#define DISTANCE
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
}`,E0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,T0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w0=`uniform float scale;
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
}`,A0=`uniform vec3 diffuse;
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
}`,C0=`#include <common>
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
}`,R0=`uniform vec3 diffuse;
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
}`,P0=`#define LAMBERT
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
}`,L0=`#define LAMBERT
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
}`,I0=`#define MATCAP
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
}`,D0=`#define MATCAP
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
}`,N0=`#define NORMAL
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
}`,U0=`#define NORMAL
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
}`,F0=`#define PHONG
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
}`,O0=`#define PHONG
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
}`,B0=`#define STANDARD
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
}`,z0=`#define STANDARD
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
}`,k0=`#define TOON
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
}`,G0=`#define TOON
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
}`,H0=`uniform float size;
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
}`,V0=`uniform vec3 diffuse;
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
}`,W0=`#include <common>
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
}`,X0=`uniform vec3 color;
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
}`,q0=`uniform float rotation;
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
}`,Y0=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:mp,alphahash_pars_fragment:gp,alphamap_fragment:xp,alphamap_pars_fragment:_p,alphatest_fragment:vp,alphatest_pars_fragment:yp,aomap_fragment:Mp,aomap_pars_fragment:Sp,batching_pars_vertex:bp,batching_vertex:Ep,begin_vertex:Tp,beginnormal_vertex:wp,bsdfs:Ap,iridescence_fragment:Cp,bumpmap_pars_fragment:Rp,clipping_planes_fragment:Pp,clipping_planes_pars_fragment:Lp,clipping_planes_pars_vertex:Ip,clipping_planes_vertex:Dp,color_fragment:Np,color_pars_fragment:Up,color_pars_vertex:Fp,color_vertex:Op,common:Bp,cube_uv_reflection_fragment:zp,defaultnormal_vertex:kp,displacementmap_pars_vertex:Gp,displacementmap_vertex:Hp,emissivemap_fragment:Vp,emissivemap_pars_fragment:Wp,colorspace_fragment:Xp,colorspace_pars_fragment:qp,envmap_fragment:Yp,envmap_common_pars_fragment:Kp,envmap_pars_fragment:Zp,envmap_pars_vertex:$p,envmap_physical_pars_fragment:om,envmap_vertex:Jp,fog_vertex:jp,fog_pars_vertex:Qp,fog_fragment:tm,fog_pars_fragment:em,gradientmap_pars_fragment:im,lightmap_pars_fragment:nm,lights_lambert_fragment:sm,lights_lambert_pars_fragment:rm,lights_pars_begin:am,lights_toon_fragment:lm,lights_toon_pars_fragment:cm,lights_phong_fragment:hm,lights_phong_pars_fragment:um,lights_physical_fragment:dm,lights_physical_pars_fragment:fm,lights_fragment_begin:pm,lights_fragment_maps:mm,lights_fragment_end:gm,logdepthbuf_fragment:xm,logdepthbuf_pars_fragment:_m,logdepthbuf_pars_vertex:vm,logdepthbuf_vertex:ym,map_fragment:Mm,map_pars_fragment:Sm,map_particle_fragment:bm,map_particle_pars_fragment:Em,metalnessmap_fragment:Tm,metalnessmap_pars_fragment:wm,morphinstance_vertex:Am,morphcolor_vertex:Cm,morphnormal_vertex:Rm,morphtarget_pars_vertex:Pm,morphtarget_vertex:Lm,normal_fragment_begin:Im,normal_fragment_maps:Dm,normal_pars_fragment:Nm,normal_pars_vertex:Um,normal_vertex:Fm,normalmap_pars_fragment:Om,clearcoat_normal_fragment_begin:Bm,clearcoat_normal_fragment_maps:zm,clearcoat_pars_fragment:km,iridescence_pars_fragment:Gm,opaque_fragment:Hm,packing:Vm,premultiplied_alpha_fragment:Wm,project_vertex:Xm,dithering_fragment:qm,dithering_pars_fragment:Ym,roughnessmap_fragment:Km,roughnessmap_pars_fragment:Zm,shadowmap_pars_fragment:$m,shadowmap_pars_vertex:Jm,shadowmap_vertex:jm,shadowmask_pars_fragment:Qm,skinbase_vertex:t0,skinning_pars_vertex:e0,skinning_vertex:i0,skinnormal_vertex:n0,specularmap_fragment:s0,specularmap_pars_fragment:r0,tonemapping_fragment:a0,tonemapping_pars_fragment:o0,transmission_fragment:l0,transmission_pars_fragment:c0,uv_pars_fragment:h0,uv_pars_vertex:u0,uv_vertex:d0,worldpos_vertex:f0,background_vert:p0,background_frag:m0,backgroundCube_vert:g0,backgroundCube_frag:x0,cube_vert:_0,cube_frag:v0,depth_vert:y0,depth_frag:M0,distance_vert:S0,distance_frag:b0,equirect_vert:E0,equirect_frag:T0,linedashed_vert:w0,linedashed_frag:A0,meshbasic_vert:C0,meshbasic_frag:R0,meshlambert_vert:P0,meshlambert_frag:L0,meshmatcap_vert:I0,meshmatcap_frag:D0,meshnormal_vert:N0,meshnormal_frag:U0,meshphong_vert:F0,meshphong_frag:O0,meshphysical_vert:B0,meshphysical_frag:z0,meshtoon_vert:k0,meshtoon_frag:G0,points_vert:H0,points_frag:V0,shadow_vert:W0,shadow_frag:X0,sprite_vert:q0,sprite_frag:Y0},ft={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Gi={basic:{uniforms:fi([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:fi([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Bt(0)},envMapIntensity:{value:1}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:fi([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:fi([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:fi([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Bt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:fi([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:fi([ft.points,ft.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:fi([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:fi([ft.common,ft.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:fi([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:fi([ft.sprite,ft.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:fi([ft.common,ft.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:fi([ft.lights,ft.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Gi.physical={uniforms:fi([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const Xr={r:0,b:0,g:0},In=new Yi,K0=new de;function Z0(s,t,e,i,n,r){const a=new Bt(0);let o=n===!0?0:1,l,c,h=null,d=0,u=null;function f(y){let S=y.isScene===!0?y.background:null;if(S&&S.isTexture){const M=y.backgroundBlurriness>0;S=t.get(S,M)}return S}function g(y){let S=!1;const M=f(y);M===null?p(a,o):M&&M.isColor&&(p(M,1),S=!0);const C=s.xr.getEnvironmentBlendMode();C==="additive"?e.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(y,S){const M=f(S);M&&(M.isCubeTexture||M.mapping===ya)?(c===void 0&&(c=new Nt(new ue(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:Ls(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),In.copy(S.backgroundRotation),In.x*=-1,In.y*=-1,In.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(In.y*=-1,In.z*=-1),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(K0.makeRotationFromEuler(In)),c.material.toneMapped=ce.getTransfer(M.colorSpace)!==ge,(h!==M||d!==M.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Nt(new an(2,2),new Ki({name:"BackgroundMaterial",uniforms:Ls(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ce.getTransfer(M.colorSpace)!==ge,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,S){y.getRGB(Xr,Vh(s)),e.buffers.color.setClear(Xr.r,Xr.g,Xr.b,S,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),o=S,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,p(a,o)},render:g,addToRenderList:v,dispose:m}}function $0(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=u(null);let r=n,a=!1;function o(R,F,G,X,B){let V=!1;const U=d(R,X,G,F);r!==U&&(r=U,c(r.object)),V=f(R,X,G,B),V&&g(R,X,G,B),B!==null&&t.update(B,s.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,M(R,F,G,X),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return s.createVertexArray()}function c(R){return s.bindVertexArray(R)}function h(R){return s.deleteVertexArray(R)}function d(R,F,G,X){const B=X.wireframe===!0;let V=i[F.id];V===void 0&&(V={},i[F.id]=V);const U=R.isInstancedMesh===!0?R.id:0;let nt=V[U];nt===void 0&&(nt={},V[U]=nt);let Q=nt[G.id];Q===void 0&&(Q={},nt[G.id]=Q);let gt=Q[B];return gt===void 0&&(gt=u(l()),Q[B]=gt),gt}function u(R){const F=[],G=[],X=[];for(let B=0;B<e;B++)F[B]=0,G[B]=0,X[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:G,attributeDivisors:X,object:R,attributes:{},index:null}}function f(R,F,G,X){const B=r.attributes,V=F.attributes;let U=0;const nt=G.getAttributes();for(const Q in nt)if(nt[Q].location>=0){const vt=B[Q];let xt=V[Q];if(xt===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(xt=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(xt=R.instanceColor)),vt===void 0||vt.attribute!==xt||xt&&vt.data!==xt.data)return!0;U++}return r.attributesNum!==U||r.index!==X}function g(R,F,G,X){const B={},V=F.attributes;let U=0;const nt=G.getAttributes();for(const Q in nt)if(nt[Q].location>=0){let vt=V[Q];vt===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(vt=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(vt=R.instanceColor));const xt={};xt.attribute=vt,vt&&vt.data&&(xt.data=vt.data),B[Q]=xt,U++}r.attributes=B,r.attributesNum=U,r.index=X}function v(){const R=r.newAttributes;for(let F=0,G=R.length;F<G;F++)R[F]=0}function p(R){m(R,0)}function m(R,F){const G=r.newAttributes,X=r.enabledAttributes,B=r.attributeDivisors;G[R]=1,X[R]===0&&(s.enableVertexAttribArray(R),X[R]=1),B[R]!==F&&(s.vertexAttribDivisor(R,F),B[R]=F)}function y(){const R=r.newAttributes,F=r.enabledAttributes;for(let G=0,X=F.length;G<X;G++)F[G]!==R[G]&&(s.disableVertexAttribArray(G),F[G]=0)}function S(R,F,G,X,B,V,U){U===!0?s.vertexAttribIPointer(R,F,G,B,V):s.vertexAttribPointer(R,F,G,X,B,V)}function M(R,F,G,X){v();const B=X.attributes,V=G.getAttributes(),U=F.defaultAttributeValues;for(const nt in V){const Q=V[nt];if(Q.location>=0){let gt=B[nt];if(gt===void 0&&(nt==="instanceMatrix"&&R.instanceMatrix&&(gt=R.instanceMatrix),nt==="instanceColor"&&R.instanceColor&&(gt=R.instanceColor)),gt!==void 0){const vt=gt.normalized,xt=gt.itemSize,Vt=t.get(gt);if(Vt===void 0)continue;const fe=Vt.buffer,xe=Vt.type,Z=Vt.bytesPerElement,ot=xe===s.INT||xe===s.UNSIGNED_INT||gt.gpuType===yl;if(gt.isInterleavedBufferAttribute){const lt=gt.data,zt=lt.stride,Ut=gt.offset;if(lt.isInstancedInterleavedBuffer){for(let Wt=0;Wt<Q.locationSize;Wt++)m(Q.location+Wt,lt.meshPerAttribute);R.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Wt=0;Wt<Q.locationSize;Wt++)p(Q.location+Wt);s.bindBuffer(s.ARRAY_BUFFER,fe);for(let Wt=0;Wt<Q.locationSize;Wt++)S(Q.location+Wt,xt/Q.locationSize,xe,vt,zt*Z,(Ut+xt/Q.locationSize*Wt)*Z,ot)}else{if(gt.isInstancedBufferAttribute){for(let lt=0;lt<Q.locationSize;lt++)m(Q.location+lt,gt.meshPerAttribute);R.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let lt=0;lt<Q.locationSize;lt++)p(Q.location+lt);s.bindBuffer(s.ARRAY_BUFFER,fe);for(let lt=0;lt<Q.locationSize;lt++)S(Q.location+lt,xt/Q.locationSize,xe,vt,xt*Z,xt/Q.locationSize*lt*Z,ot)}}else if(U!==void 0){const vt=U[nt];if(vt!==void 0)switch(vt.length){case 2:s.vertexAttrib2fv(Q.location,vt);break;case 3:s.vertexAttrib3fv(Q.location,vt);break;case 4:s.vertexAttrib4fv(Q.location,vt);break;default:s.vertexAttrib1fv(Q.location,vt)}}}}y()}function C(){E();for(const R in i){const F=i[R];for(const G in F){const X=F[G];for(const B in X){const V=X[B];for(const U in V)h(V[U].object),delete V[U];delete X[B]}}delete i[R]}}function A(R){if(i[R.id]===void 0)return;const F=i[R.id];for(const G in F){const X=F[G];for(const B in X){const V=X[B];for(const U in V)h(V[U].object),delete V[U];delete X[B]}}delete i[R.id]}function P(R){for(const F in i){const G=i[F];for(const X in G){const B=G[X];if(B[R.id]===void 0)continue;const V=B[R.id];for(const U in V)h(V[U].object),delete V[U];delete B[R.id]}}}function _(R){for(const F in i){const G=i[F],X=R.isInstancedMesh===!0?R.id:0,B=G[X];if(B!==void 0){for(const V in B){const U=B[V];for(const nt in U)h(U[nt].object),delete U[nt];delete B[V]}delete G[X],Object.keys(G).length===0&&delete i[F]}}}function E(){z(),a=!0,r!==n&&(r=n,c(r.object))}function z(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:E,resetDefaultState:z,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfObject:_,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:p,disableUnusedAttributes:y}}function J0(s,t,e){let i;function n(c){i=c}function r(c,h){s.drawArrays(i,c,h),e.update(h,i,1)}function a(c,h,d){d!==0&&(s.drawArraysInstanced(i,c,h,d),e.update(h,i,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,i,1)}function l(c,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v]*u[v];e.update(g,i,1)}}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function j0(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(P){return!(P!==Di&&i.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const _=P===un&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==vi&&i.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Ii&&!_)}function l(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Xt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=s.getParameter(s.MAX_SAMPLES),A=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:M,maxSamples:C,samples:A}}function Q0(s){const t=this;let e=null,i=0,n=!1,r=!1;const a=new Gn,o=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||n;return n=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,m=s.get(d);if(!n||g===null||g.length===0||r&&!p)r?h(null):c();else{const y=r?0:i,S=y*4;let M=m.clippingState||null;l.value=M,M=h(g,u,S,f);for(let C=0;C!==S;++C)M[C]=e[C];m.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,g){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const m=f+v*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,M=f;S!==v;++S,M+=4)a.copy(d[S]).applyMatrix4(y,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}const bn=4,Nc=[.125,.215,.35,.446,.526,.582],Xn=20,tg=256,Zs=new Bl,Uc=new Bt;let ao=null,oo=0,lo=0,co=!1;const eg=new L;class Fc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,n=100,r={}){const{size:a=256,position:o=eg}=r;ao=this._renderer.getRenderTarget(),oo=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,n,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ao,oo,lo),this._renderer.xr.enabled=co,t.scissorTest=!1,vs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zn||t.mapping===As?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ao=this._renderer.getRenderTarget(),oo=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:un,format:Di,colorSpace:Rs,depthBuffer:!1},n=Oc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oc(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ig(r)),this._blurMaterial=sg(r,t,e),this._ggxMaterial=ng(r,t,e)}return n}_compileMaterial(t){const e=new Nt(new qe,t);this._renderer.compile(e,Zs)}_sceneToCubeUV(t,e,i,n,r){const l=new _i(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Uc),d.toneMapping=Wi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(n),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Nt(new ue,new Pe({name:"PMREM.Background",side:pi,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,p=v.material;let m=!1;const y=t.background;y?y.isColor&&(p.color.copy(y),t.background=null,m=!0):(p.color.copy(Uc),m=!0);for(let S=0;S<6;S++){const M=S%3;M===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):M===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));const C=this._cubeSize;vs(n,M*C,S>2?C:0,C,C),d.setRenderTarget(n),m&&d.render(v,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=y}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===Zn||t.mapping===As;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=zc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bc());const r=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;vs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Zs)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodMeshes.length;for(let r=1;r<n;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const n=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,f=d*u,{_lodMax:g}=this,v=this._sizeLods[i],p=3*v*(i>g-bn?i-g+bn:0),m=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,vs(r,p,m,3*v,2*v),n.setRenderTarget(r),n.render(o,Zs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,vs(t,p,m,3*v,2*v),n.setRenderTarget(t),n.render(o,Zs)}_blur(t,e,i,n,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",r),this._halfBlur(a,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&le("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[n];d.material=c;const u=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Xn-1),v=r/g,p=isFinite(r)?1+Math.floor(h*v):Xn;p>Xn&&Xt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Xn}`);const m=[];let y=0;for(let P=0;P<Xn;++P){const _=P/v,E=Math.exp(-_*_/2);m.push(E),P===0?y+=E:P<p&&(y+=2*E)}for(let P=0;P<m.length;P++)m[P]=m[P]/y;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:S}=this;u.dTheta.value=g,u.mipInt.value=S-i;const M=this._sizeLods[n],C=3*M*(n>S-bn?n-S+bn:0),A=4*(this._cubeSize-M);vs(e,C,A,3*M,2*M),l.setRenderTarget(e),l.render(d,Zs)}}function ig(s){const t=[],e=[],i=[];let n=s;const r=s-bn+1+Nc.length;for(let a=0;a<r;a++){const o=Math.pow(2,n);t.push(o);let l=1/o;a>s-bn?l=Nc[a-s+bn-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,v=3,p=2,m=1,y=new Float32Array(v*g*f),S=new Float32Array(p*g*f),M=new Float32Array(m*g*f);for(let A=0;A<f;A++){const P=A%3*2/3-1,_=A>2?0:-1,E=[P,_,0,P+2/3,_,0,P+2/3,_+1,0,P,_,0,P+2/3,_+1,0,P,_+1,0];y.set(E,v*g*A),S.set(u,p*g*A);const z=[A,A,A,A,A,A];M.set(z,m*g*A)}const C=new qe;C.setAttribute("position",new Mi(y,v)),C.setAttribute("uv",new Mi(S,p)),C.setAttribute("faceIndex",new Mi(M,m)),i.push(new Nt(C,null)),n>bn&&n--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function Oc(s,t,e){const i=new Xi(s,t,e);return i.texture.mapping=ya,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vs(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function ng(s,t,e){return new Ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:tg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ea(),fragmentShader:`

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
		`,blending:ln,depthTest:!1,depthWrite:!1})}function sg(s,t,e){const i=new Float32Array(Xn),n=new L(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:Xn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Ea(),fragmentShader:`

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
		`,blending:ln,depthTest:!1,depthWrite:!1})}function Bc(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ea(),fragmentShader:`

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
		`,blending:ln,depthTest:!1,depthWrite:!1})}function zc(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ln,depthTest:!1,depthWrite:!1})}function Ea(){return`

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
	`}class Yh extends Xi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Dh(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new ue(5,5,5),r=new Ki({name:"CubemapFromEquirect",uniforms:Ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pi,blending:ln});r.uniforms.tEquirect.value=e;const a=new Nt(n,r),o=e.minFilter;return e.minFilter===qn&&(e.minFilter=hi),new cp(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(r)}}function rg(s){let t=new WeakMap,e=new WeakMap,i=null;function n(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===Ca||f===Ra)if(t.has(u)){const g=t.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const v=new Yh(g.height);return v.fromEquirectangularTexture(s,u),t.set(u,v),u.addEventListener("dispose",c),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,g=f===Ca||f===Ra,v=f===Zn||f===As;if(g||v){let p=e.get(u);const m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return i===null&&(i=new Fc(s)),p=g?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{const y=u.image;return g&&y&&y.height>0||v&&y&&l(y)?(i===null&&(i=new Fc(s)),p=g?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,f){return f===Ca?u.mapping=Zn:f===Ra&&(u.mapping=As),u}function l(u){let f=0;const g=6;for(let v=0;v<g;v++)u[v]!==void 0&&f++;return f===g}function c(u){const f=u.target;f.removeEventListener("dispose",c);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:d}}function ag(s){const t={};function e(i){if(t[i]!==void 0)return t[i];const n=s.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&ca("WebGLRenderer: "+i+" extension not supported."),n}}}function og(s,t,e,i){const n={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete n[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return n[u.id]===!0||(u.addEventListener("dispose",a),n[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)t.update(u[f],s.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,g=d.attributes.position;let v=0;if(g===void 0)return;if(f!==null){const y=f.array;v=f.version;for(let S=0,M=y.length;S<M;S+=3){const C=y[S+0],A=y[S+1],P=y[S+2];u.push(C,A,A,P,P,C)}}else{const y=g.array;v=g.version;for(let S=0,M=y.length/3-1;S<M;S+=3){const C=S+0,A=S+1,P=S+2;u.push(C,A,A,P,P,C)}}const p=new(g.count>=65535?Ph:Rh)(u,1);p.version=v;const m=r.get(d);m&&t.remove(m),r.set(d,p)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function lg(s,t,e){let i;function n(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){s.drawElements(i,f,r,u*a),e.update(f,i,1)}function c(u,f,g){g!==0&&(s.drawElementsInstanced(i,f,r,u*a,g),e.update(f,i,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,i,1)}function d(u,f,g,v){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<u.length;m++)c(u[m]/a,f[m],v[m]);else{p.multiDrawElementsInstancedWEBGL(i,f,0,r,u,0,v,0,g);let m=0;for(let y=0;y<g;y++)m+=f[y]*v[y];e.update(m,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function cg(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:le("WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function hg(s,t,e){const i=new WeakMap,n=new Oe;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let z=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",z)};var f=z;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),p===!0&&(M=3);let C=o.attributes.position.count*M,A=1;C>t.maxTextureSize&&(A=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const P=new Float32Array(C*A*4*d),_=new wh(P,C,A,d);_.type=Ii,_.needsUpdate=!0;const E=M*4;for(let R=0;R<d;R++){const F=m[R],G=y[R],X=S[R],B=C*A*4*R;for(let V=0;V<F.count;V++){const U=V*E;g===!0&&(n.fromBufferAttribute(F,V),P[B+U+0]=n.x,P[B+U+1]=n.y,P[B+U+2]=n.z,P[B+U+3]=0),v===!0&&(n.fromBufferAttribute(G,V),P[B+U+4]=n.x,P[B+U+5]=n.y,P[B+U+6]=n.z,P[B+U+7]=0),p===!0&&(n.fromBufferAttribute(X,V),P[B+U+8]=n.x,P[B+U+9]=n.y,P[B+U+10]=n.z,P[B+U+11]=X.itemSize===4?n.w:1)}}u={count:d,texture:_,size:new st(C,A)},i.set(o,u),o.addEventListener("dispose",z)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function ug(s,t,e,i,n){let r=new WeakMap;function a(c){const h=n.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const dg={[uh]:"LINEAR_TONE_MAPPING",[dh]:"REINHARD_TONE_MAPPING",[fh]:"CINEON_TONE_MAPPING",[vl]:"ACES_FILMIC_TONE_MAPPING",[mh]:"AGX_TONE_MAPPING",[gh]:"NEUTRAL_TONE_MAPPING",[ph]:"CUSTOM_TONE_MAPPING"};function fg(s,t,e,i,n){const r=new Xi(t,e,{type:s,depthBuffer:i,stencilBuffer:n}),a=new Xi(t,e,{type:un,depthBuffer:!1,stencilBuffer:!1}),o=new qe;o.setAttribute("position",new oe([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new oe([0,2,0,0,2,0],2));const l=new tp({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Nt(o,l),h=new Bl(-1,1,1,-1,0,1);let d=null,u=null,f=!1,g,v=null,p=[],m=!1;this.setSize=function(y,S){r.setSize(y,S),a.setSize(y,S);for(let M=0;M<p.length;M++){const C=p[M];C.setSize&&C.setSize(y,S)}},this.setEffects=function(y){p=y,m=p.length>0&&p[0].isRenderPass===!0;const S=r.width,M=r.height;for(let C=0;C<p.length;C++){const A=p[C];A.setSize&&A.setSize(S,M)}},this.begin=function(y,S){if(f||y.toneMapping===Wi&&p.length===0)return!1;if(v=S,S!==null){const M=S.width,C=S.height;(r.width!==M||r.height!==C)&&this.setSize(M,C)}return m===!1&&y.setRenderTarget(r),g=y.toneMapping,y.toneMapping=Wi,!0},this.hasRenderPass=function(){return m},this.end=function(y,S){y.toneMapping=g,f=!0;let M=r,C=a;for(let A=0;A<p.length;A++){const P=p[A];if(P.enabled!==!1&&(P.render(y,C,M,S),P.needsSwap!==!1)){const _=M;M=C,C=_}}if(d!==y.outputColorSpace||u!==y.toneMapping){d=y.outputColorSpace,u=y.toneMapping,l.defines={},ce.getTransfer(d)===ge&&(l.defines.SRGB_TRANSFER="");const A=dg[u];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,y.setRenderTarget(v),y.render(c,h),v=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Kh=new ui,cl=new hr(1,1),Zh=new wh,$h=new Kd,Jh=new Dh,kc=[],Gc=[],Hc=new Float32Array(16),Vc=new Float32Array(9),Wc=new Float32Array(4);function zs(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let r=kc[n];if(r===void 0&&(r=new Float32Array(n),kc[n]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function We(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Xe(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function Ta(s,t){let e=Gc[t];e===void 0&&(e=new Int32Array(t),Gc[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function pg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function mg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;s.uniform2fv(this.addr,t),Xe(e,t)}}function gg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;s.uniform3fv(this.addr,t),Xe(e,t)}}function xg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;s.uniform4fv(this.addr,t),Xe(e,t)}}function _g(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(We(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,i))return;Wc.set(i),s.uniformMatrix2fv(this.addr,!1,Wc),Xe(e,i)}}function vg(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(We(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,i))return;Vc.set(i),s.uniformMatrix3fv(this.addr,!1,Vc),Xe(e,i)}}function yg(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(We(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,i))return;Hc.set(i),s.uniformMatrix4fv(this.addr,!1,Hc),Xe(e,i)}}function Mg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Sg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;s.uniform2iv(this.addr,t),Xe(e,t)}}function bg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;s.uniform3iv(this.addr,t),Xe(e,t)}}function Eg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;s.uniform4iv(this.addr,t),Xe(e,t)}}function Tg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function wg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;s.uniform2uiv(this.addr,t),Xe(e,t)}}function Ag(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;s.uniform3uiv(this.addr,t),Xe(e,t)}}function Cg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;s.uniform4uiv(this.addr,t),Xe(e,t)}}function Rg(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(cl.compareFunction=e.isReversedDepthBuffer()?Cl:Al,r=cl):r=Kh,e.setTexture2D(t||r,n)}function Pg(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||$h,n)}function Lg(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Jh,n)}function Ig(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Zh,n)}function Dg(s){switch(s){case 5126:return pg;case 35664:return mg;case 35665:return gg;case 35666:return xg;case 35674:return _g;case 35675:return vg;case 35676:return yg;case 5124:case 35670:return Mg;case 35667:case 35671:return Sg;case 35668:case 35672:return bg;case 35669:case 35673:return Eg;case 5125:return Tg;case 36294:return wg;case 36295:return Ag;case 36296:return Cg;case 35678:case 36198:case 36298:case 36306:case 35682:return Rg;case 35679:case 36299:case 36307:return Pg;case 35680:case 36300:case 36308:case 36293:return Lg;case 36289:case 36303:case 36311:case 36292:return Ig}}function Ng(s,t){s.uniform1fv(this.addr,t)}function Ug(s,t){const e=zs(t,this.size,2);s.uniform2fv(this.addr,e)}function Fg(s,t){const e=zs(t,this.size,3);s.uniform3fv(this.addr,e)}function Og(s,t){const e=zs(t,this.size,4);s.uniform4fv(this.addr,e)}function Bg(s,t){const e=zs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function zg(s,t){const e=zs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function kg(s,t){const e=zs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Gg(s,t){s.uniform1iv(this.addr,t)}function Hg(s,t){s.uniform2iv(this.addr,t)}function Vg(s,t){s.uniform3iv(this.addr,t)}function Wg(s,t){s.uniform4iv(this.addr,t)}function Xg(s,t){s.uniform1uiv(this.addr,t)}function qg(s,t){s.uniform2uiv(this.addr,t)}function Yg(s,t){s.uniform3uiv(this.addr,t)}function Kg(s,t){s.uniform4uiv(this.addr,t)}function Zg(s,t,e){const i=this.cache,n=t.length,r=Ta(e,n);We(i,r)||(s.uniform1iv(this.addr,r),Xe(i,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=cl:a=Kh;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||a,r[o])}function $g(s,t,e){const i=this.cache,n=t.length,r=Ta(e,n);We(i,r)||(s.uniform1iv(this.addr,r),Xe(i,r));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||$h,r[a])}function Jg(s,t,e){const i=this.cache,n=t.length,r=Ta(e,n);We(i,r)||(s.uniform1iv(this.addr,r),Xe(i,r));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||Jh,r[a])}function jg(s,t,e){const i=this.cache,n=t.length,r=Ta(e,n);We(i,r)||(s.uniform1iv(this.addr,r),Xe(i,r));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||Zh,r[a])}function Qg(s){switch(s){case 5126:return Ng;case 35664:return Ug;case 35665:return Fg;case 35666:return Og;case 35674:return Bg;case 35675:return zg;case 35676:return kg;case 5124:case 35670:return Gg;case 35667:case 35671:return Hg;case 35668:case 35672:return Vg;case 35669:case 35673:return Wg;case 5125:return Xg;case 36294:return qg;case 36295:return Yg;case 36296:return Kg;case 35678:case 36198:case 36298:case 36306:case 35682:return Zg;case 35679:case 36299:case 36307:return $g;case 35680:case 36300:case 36308:case 36293:return Jg;case 36289:case 36303:case 36311:case 36292:return jg}}class tx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Dg(e.type)}}class ex{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Qg(e.type)}}class ix{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.setValue(t,e[o.id],i)}}}const ho=/(\w+)(\])?(\[|\.)?/g;function Xc(s,t){s.seq.push(t),s.map[t.id]=t}function nx(s,t,e){const i=s.name,n=i.length;for(ho.lastIndex=0;;){const r=ho.exec(i),a=ho.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Xc(e,c===void 0?new tx(o,s,t):new ex(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new ix(o),Xc(e,d)),e=d}}}class ta{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);nx(o,l,this)}const n=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(a):r.push(a);n.length>0&&(this.seq=n.concat(r))}setValue(t,e,i,n){const r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,r=t.length;n!==r;++n){const a=t[n];a.id in e&&i.push(a)}return i}}function qc(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const sx=37297;let rx=0;function ax(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=n;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Yc=new jt;function ox(s){ce._getMatrix(Yc,ce.workingColorSpace,s);const t=`mat3( ${Yc.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(s)){case aa:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return Xt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Kc(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+ax(s.getShaderSource(t),o)}else return r}function lx(s,t){const e=ox(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const cx={[uh]:"Linear",[dh]:"Reinhard",[fh]:"Cineon",[vl]:"ACESFilmic",[mh]:"AgX",[gh]:"Neutral",[ph]:"Custom"};function hx(s,t){const e=cx[t];return e===void 0?(Xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const qr=new L;function ux(){ce.getLuminanceCoefficients(qr);const s=qr.x.toFixed(4),t=qr.y.toFixed(4),e=qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(er).join(`
`)}function fx(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function px(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(t,n),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function er(s){return s!==""}function Zc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $c(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const mx=/^[ \t]*#include +<([\w\d./]+)>/gm;function hl(s){return s.replace(mx,xx)}const gx=new Map;function xx(s,t){let e=te[t];if(e===void 0){const i=gx.get(t);if(i!==void 0)e=te[i],Xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return hl(e)}const _x=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jc(s){return s.replace(_x,vx)}function vx(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function jc(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const yx={[sr]:"SHADOWMAP_TYPE_PCF",[Qs]:"SHADOWMAP_TYPE_VSM"};function Mx(s){return yx[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Sx={[Zn]:"ENVMAP_TYPE_CUBE",[As]:"ENVMAP_TYPE_CUBE",[ya]:"ENVMAP_TYPE_CUBE_UV"};function bx(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Sx[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const Ex={[As]:"ENVMAP_MODE_REFRACTION"};function Tx(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Ex[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const wx={[_l]:"ENVMAP_BLENDING_MULTIPLY",[Ad]:"ENVMAP_BLENDING_MIX",[Cd]:"ENVMAP_BLENDING_ADD"};function Ax(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":wx[s.combine]||"ENVMAP_BLENDING_NONE"}function Cx(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Rx(s,t,e,i){const n=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Mx(e),c=bx(e),h=Tx(e),d=Ax(e),u=Cx(e),f=dx(e),g=fx(r),v=n.createProgram();let p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(er).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(er).join(`
`),m.length>0&&(m+=`
`)):(p=[jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),m=[jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wi?"#define TONE_MAPPING":"",e.toneMapping!==Wi?te.tonemapping_pars_fragment:"",e.toneMapping!==Wi?hx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,lx("linearToOutputTexel",e.outputColorSpace),ux(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(er).join(`
`)),a=hl(a),a=Zc(a,e),a=$c(a,e),o=hl(o),o=Zc(o,e),o=$c(o,e),a=Jc(a),o=Jc(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=y+p+a,M=y+m+o,C=qc(n,n.VERTEX_SHADER,S),A=qc(n,n.FRAGMENT_SHADER,M);n.attachShader(v,C),n.attachShader(v,A),e.index0AttributeName!==void 0?n.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function P(R){if(s.debug.checkShaderErrors){const F=n.getProgramInfoLog(v)||"",G=n.getShaderInfoLog(C)||"",X=n.getShaderInfoLog(A)||"",B=F.trim(),V=G.trim(),U=X.trim();let nt=!0,Q=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(nt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,v,C,A);else{const gt=Kc(n,C,"vertex"),vt=Kc(n,A,"fragment");le("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+gt+`
`+vt)}else B!==""?Xt("WebGLProgram: Program Info Log:",B):(V===""||U==="")&&(Q=!1);Q&&(R.diagnostics={runnable:nt,programLog:B,vertexShader:{log:V,prefix:p},fragmentShader:{log:U,prefix:m}})}n.deleteShader(C),n.deleteShader(A),_=new ta(n,v),E=px(n,v)}let _;this.getUniforms=function(){return _===void 0&&P(this),_};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let z=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=n.getProgramParameter(v,sx)),z},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=rx++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=A,this}let Px=0;class Lx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Ix(t),e.set(t,i)),i}}class Ix{constructor(t){this.id=Px++,this.code=t,this.usedTimes=0}}function Dx(s,t,e,i,n,r){const a=new Ah,o=new Lx,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer;let u=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,E,z,R,F){const G=R.fog,X=F.geometry,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,U=t.get(_.envMap||B,V),nt=U&&U.mapping===ya?U.image.height:null,Q=f[_.type];_.precision!==null&&(u=i.getMaxPrecision(_.precision),u!==_.precision&&Xt("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const gt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,vt=gt!==void 0?gt.length:0;let xt=0;X.morphAttributes.position!==void 0&&(xt=1),X.morphAttributes.normal!==void 0&&(xt=2),X.morphAttributes.color!==void 0&&(xt=3);let Vt,fe,xe,Z;if(Q){const pe=Gi[Q];Vt=pe.vertexShader,fe=pe.fragmentShader}else Vt=_.vertexShader,fe=_.fragmentShader,o.update(_),xe=o.getVertexShaderID(_),Z=o.getFragmentShaderID(_);const ot=s.getRenderTarget(),lt=s.state.buffers.depth.getReversed(),zt=F.isInstancedMesh===!0,Ut=F.isBatchedMesh===!0,Wt=!!_.map,_e=!!_.matcap,Kt=!!U,J=!!_.aoMap,et=!!_.lightMap,j=!!_.bumpMap,dt=!!_.normalMap,w=!!_.displacementMap,Ot=!!_.emissiveMap,yt=!!_.metalnessMap,kt=!!_.roughnessMap,ct=_.anisotropy>0,T=_.clearcoat>0,x=_.dispersion>0,D=_.iridescence>0,q=_.sheen>0,$=_.transmission>0,Y=ct&&!!_.anisotropyMap,Et=T&&!!_.clearcoatMap,ht=T&&!!_.clearcoatNormalMap,It=T&&!!_.clearcoatRoughnessMap,Gt=D&&!!_.iridescenceMap,tt=D&&!!_.iridescenceThicknessMap,rt=q&&!!_.sheenColorMap,wt=q&&!!_.sheenRoughnessMap,Ct=!!_.specularMap,Mt=!!_.specularColorMap,ee=!!_.specularIntensityMap,I=$&&!!_.transmissionMap,ut=$&&!!_.thicknessMap,at=!!_.gradientMap,bt=!!_.alphaMap,it=_.alphaTest>0,K=!!_.alphaHash,At=!!_.extensions;let Yt=Wi;_.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Yt=s.toneMapping);const be={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:Vt,fragmentShader:fe,defines:_.defines,customVertexShaderID:xe,customFragmentShaderID:Z,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:Ut,batchingColor:Ut&&F._colorsTexture!==null,instancing:zt,instancingColor:zt&&F.instanceColor!==null,instancingMorph:zt&&F.morphTexture!==null,outputColorSpace:ot===null?s.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Rs,alphaToCoverage:!!_.alphaToCoverage,map:Wt,matcap:_e,envMap:Kt,envMapMode:Kt&&U.mapping,envMapCubeUVHeight:nt,aoMap:J,lightMap:et,bumpMap:j,normalMap:dt,displacementMap:w,emissiveMap:Ot,normalMapObjectSpace:dt&&_.normalMapType===Ld,normalMapTangentSpace:dt&&_.normalMapType===Eh,metalnessMap:yt,roughnessMap:kt,anisotropy:ct,anisotropyMap:Y,clearcoat:T,clearcoatMap:Et,clearcoatNormalMap:ht,clearcoatRoughnessMap:It,dispersion:x,iridescence:D,iridescenceMap:Gt,iridescenceThicknessMap:tt,sheen:q,sheenColorMap:rt,sheenRoughnessMap:wt,specularMap:Ct,specularColorMap:Mt,specularIntensityMap:ee,transmission:$,transmissionMap:I,thicknessMap:ut,gradientMap:at,opaque:_.transparent===!1&&_.blending===Es&&_.alphaToCoverage===!1,alphaMap:bt,alphaTest:it,alphaHash:K,combine:_.combine,mapUv:Wt&&g(_.map.channel),aoMapUv:J&&g(_.aoMap.channel),lightMapUv:et&&g(_.lightMap.channel),bumpMapUv:j&&g(_.bumpMap.channel),normalMapUv:dt&&g(_.normalMap.channel),displacementMapUv:w&&g(_.displacementMap.channel),emissiveMapUv:Ot&&g(_.emissiveMap.channel),metalnessMapUv:yt&&g(_.metalnessMap.channel),roughnessMapUv:kt&&g(_.roughnessMap.channel),anisotropyMapUv:Y&&g(_.anisotropyMap.channel),clearcoatMapUv:Et&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:ht&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:It&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Gt&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:wt&&g(_.sheenRoughnessMap.channel),specularMapUv:Ct&&g(_.specularMap.channel),specularColorMapUv:Mt&&g(_.specularColorMap.channel),specularIntensityMapUv:ee&&g(_.specularIntensityMap.channel),transmissionMapUv:I&&g(_.transmissionMap.channel),thicknessMapUv:ut&&g(_.thicknessMap.channel),alphaMapUv:bt&&g(_.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(dt||ct),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!X.attributes.uv&&(Wt||bt),fog:!!G,useFog:_.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||X.attributes.normal===void 0&&dt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:lt,skinning:F.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:xt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:Yt,decodeVideoTexture:Wt&&_.map.isVideoTexture===!0&&ce.getTransfer(_.map.colorSpace)===ge,decodeVideoTextureEmissive:Ot&&_.emissiveMap.isVideoTexture===!0&&ce.getTransfer(_.emissiveMap.colorSpace)===ge,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ve,flipSided:_.side===pi,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:At&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&_.extensions.multiDraw===!0||Ut)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return be.vertexUv1s=l.has(1),be.vertexUv2s=l.has(2),be.vertexUv3s=l.has(3),l.clear(),be}function p(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const z in _.defines)E.push(z),E.push(_.defines[z]);return _.isRawShaderMaterial===!1&&(m(E,_),y(E,_),E.push(s.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function m(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function y(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),_.push(a.mask)}function S(_){const E=f[_.type];let z;if(E){const R=Gi[E];z=Jf.clone(R.uniforms)}else z=_.uniforms;return z}function M(_,E){let z=h.get(E);return z!==void 0?++z.usedTimes:(z=new Rx(s,E,_,n),c.push(z),h.set(E,z)),z}function C(_){if(--_.usedTimes===0){const E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function P(){o.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:S,acquireProgram:M,releaseProgram:C,releaseShaderCache:A,programs:c,dispose:P}}function Nx(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function Ux(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Qc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function th(){const s=[];let t=0;const e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,v,p,m){let y=s[t];return y===void 0?(y={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:p,group:m},s[t]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=g,y.materialVariant=a(u),y.groupOrder=v,y.renderOrder=u.renderOrder,y.z=p,y.group=m),t++,y}function l(u,f,g,v,p,m){const y=o(u,f,g,v,p,m);g.transmission>0?i.push(y):g.transparent===!0?n.push(y):e.push(y)}function c(u,f,g,v,p,m){const y=o(u,f,g,v,p,m);g.transmission>0?i.unshift(y):g.transparent===!0?n.unshift(y):e.unshift(y)}function h(u,f){e.length>1&&e.sort(u||Ux),i.length>1&&i.sort(f||Qc),n.length>1&&n.sort(f||Qc)}function d(){for(let u=t,f=s.length;u<f;u++){const g=s[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:d,sort:h}}function Fx(){let s=new WeakMap;function t(i,n){const r=s.get(i);let a;return r===void 0?(a=new th,s.set(i,[a])):n>=r.length?(a=new th,r.push(a)):a=r[n],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Ox(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Bt};break;case"SpotLight":e={position:new L,direction:new L,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function Bx(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let zx=0;function kx(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Gx(s){const t=new Ox,e=Bx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);const n=new L,r=new de,a=new de;function o(c){let h=0,d=0,u=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let f=0,g=0,v=0,p=0,m=0,y=0,S=0,M=0,C=0,A=0,P=0;c.sort(kx);for(let E=0,z=c.length;E<z;E++){const R=c[E],F=R.color,G=R.intensity,X=R.distance;let B=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Cs?B=R.shadow.map.texture:B=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=F.r*G,d+=F.g*G,u+=F.b*G;else if(R.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(R.sh.coefficients[V],G);P++}else if(R.isDirectionalLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const U=R.shadow,nt=e.get(R);nt.shadowIntensity=U.intensity,nt.shadowBias=U.bias,nt.shadowNormalBias=U.normalBias,nt.shadowRadius=U.radius,nt.shadowMapSize=U.mapSize,i.directionalShadow[f]=nt,i.directionalShadowMap[f]=B,i.directionalShadowMatrix[f]=R.shadow.matrix,y++}i.directional[f]=V,f++}else if(R.isSpotLight){const V=t.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(F).multiplyScalar(G),V.distance=X,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,i.spot[v]=V;const U=R.shadow;if(R.map&&(i.spotLightMap[C]=R.map,C++,U.updateMatrices(R),R.castShadow&&A++),i.spotLightMatrix[v]=U.matrix,R.castShadow){const nt=e.get(R);nt.shadowIntensity=U.intensity,nt.shadowBias=U.bias,nt.shadowNormalBias=U.normalBias,nt.shadowRadius=U.radius,nt.shadowMapSize=U.mapSize,i.spotShadow[v]=nt,i.spotShadowMap[v]=B,M++}v++}else if(R.isRectAreaLight){const V=t.get(R);V.color.copy(F).multiplyScalar(G),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),i.rectArea[p]=V,p++}else if(R.isPointLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){const U=R.shadow,nt=e.get(R);nt.shadowIntensity=U.intensity,nt.shadowBias=U.bias,nt.shadowNormalBias=U.normalBias,nt.shadowRadius=U.radius,nt.shadowMapSize=U.mapSize,nt.shadowCameraNear=U.camera.near,nt.shadowCameraFar=U.camera.far,i.pointShadow[g]=nt,i.pointShadowMap[g]=B,i.pointShadowMatrix[g]=R.shadow.matrix,S++}i.point[g]=V,g++}else if(R.isHemisphereLight){const V=t.get(R);V.skyColor.copy(R.color).multiplyScalar(G),V.groundColor.copy(R.groundColor).multiplyScalar(G),i.hemi[m]=V,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_FLOAT_1,i.rectAreaLTC2=ft.LTC_FLOAT_2):(i.rectAreaLTC1=ft.LTC_HALF_1,i.rectAreaLTC2=ft.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const _=i.hash;(_.directionalLength!==f||_.pointLength!==g||_.spotLength!==v||_.rectAreaLength!==p||_.hemiLength!==m||_.numDirectionalShadows!==y||_.numPointShadows!==S||_.numSpotShadows!==M||_.numSpotMaps!==C||_.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=M+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=P,_.directionalLength=f,_.pointLength=g,_.spotLength=v,_.rectAreaLength=p,_.hemiLength=m,_.numDirectionalShadows=y,_.numPointShadows=S,_.numSpotShadows=M,_.numSpotMaps=C,_.numLightProbes=P,i.version=zx++)}function l(c,h){let d=0,u=0,f=0,g=0,v=0;const p=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const S=c[m];if(S.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(p),d++}else if(S.isSpotLight){const M=i.spot[f];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(S.matrixWorld),n.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(p),f++}else if(S.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(S.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const M=i.point[u];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),u++}else if(S.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(p),v++}}}return{setup:o,setupView:l,state:i}}function eh(s){const t=new Gx(s),e=[],i=[];function n(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Hx(s){let t=new WeakMap;function e(n,r=0){const a=t.get(n);let o;return a===void 0?(o=new eh(s),t.set(n,[o])):r>=a.length?(o=new eh(s),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const Vx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wx=`uniform sampler2D shadow_pass;
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
}`,Xx=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],qx=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],ih=new de,$s=new L,uo=new L;function Yx(s,t,e){let i=new Ll;const n=new st,r=new st,a=new Oe,o=new ep,l=new ip,c={},h=e.maxTextureSize,d={[En]:pi,[pi]:En,[Ve]:Ve},u=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:Vx,fragmentShader:Wx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new qe;g.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Nt(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sr;let m=this.type;this.render=function(A,P,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===ld&&(Xt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=sr);const E=s.getRenderTarget(),z=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),F=s.state;F.setBlending(ln),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const G=m!==this.type;G&&P.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(B=>B.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,B=A.length;X<B;X++){const V=A[X],U=V.shadow;if(U===void 0){Xt("WebGLShadowMap:",V,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;n.copy(U.mapSize);const nt=U.getFrameExtents();n.multiply(nt),r.copy(U.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/nt.x),n.x=r.x*nt.x,U.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/nt.y),n.y=r.y*nt.y,U.mapSize.y=r.y));const Q=s.state.buffers.depth.getReversed();if(U.camera._reversedDepth=Q,U.map===null||G===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Qs){if(V.isPointLight){Xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Xi(n.x,n.y,{format:Cs,type:un,minFilter:hi,magFilter:hi,generateMipmaps:!1}),U.map.texture.name=V.name+".shadowMap",U.map.depthTexture=new hr(n.x,n.y,Ii),U.map.depthTexture.name=V.name+".shadowMapDepth",U.map.depthTexture.format=dn,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=ei,U.map.depthTexture.magFilter=ei}else V.isPointLight?(U.map=new Yh(n.x),U.map.depthTexture=new mf(n.x,qi)):(U.map=new Xi(n.x,n.y),U.map.depthTexture=new hr(n.x,n.y,qi)),U.map.depthTexture.name=V.name+".shadowMap",U.map.depthTexture.format=dn,this.type===sr?(U.map.depthTexture.compareFunction=Q?Cl:Al,U.map.depthTexture.minFilter=hi,U.map.depthTexture.magFilter=hi):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=ei,U.map.depthTexture.magFilter=ei);U.camera.updateProjectionMatrix()}const gt=U.map.isWebGLCubeRenderTarget?6:1;for(let vt=0;vt<gt;vt++){if(U.map.isWebGLCubeRenderTarget)s.setRenderTarget(U.map,vt),s.clear();else{vt===0&&(s.setRenderTarget(U.map),s.clear());const xt=U.getViewport(vt);a.set(r.x*xt.x,r.y*xt.y,r.x*xt.z,r.y*xt.w),F.viewport(a)}if(V.isPointLight){const xt=U.camera,Vt=U.matrix,fe=V.distance||xt.far;fe!==xt.far&&(xt.far=fe,xt.updateProjectionMatrix()),$s.setFromMatrixPosition(V.matrixWorld),xt.position.copy($s),uo.copy(xt.position),uo.add(Xx[vt]),xt.up.copy(qx[vt]),xt.lookAt(uo),xt.updateMatrixWorld(),Vt.makeTranslation(-$s.x,-$s.y,-$s.z),ih.multiplyMatrices(xt.projectionMatrix,xt.matrixWorldInverse),U._frustum.setFromProjectionMatrix(ih,xt.coordinateSystem,xt.reversedDepth)}else U.updateMatrices(V);i=U.getFrustum(),M(P,_,U.camera,V,this.type)}U.isPointLightShadow!==!0&&this.type===Qs&&y(U,_),U.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(E,z,R)};function y(A,P){const _=t.update(v);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Xi(n.x,n.y,{format:Cs,type:un})),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(P,null,_,u,v,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(P,null,_,f,v,null)}function S(A,P,_,E){let z=null;const R=_.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)z=R;else if(z=_.isPointLight===!0?l:o,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const F=z.uuid,G=P.uuid;let X=c[F];X===void 0&&(X={},c[F]=X);let B=X[G];B===void 0&&(B=z.clone(),X[G]=B,P.addEventListener("dispose",C)),z=B}if(z.visible=P.visible,z.wireframe=P.wireframe,E===Qs?z.side=P.shadowSide!==null?P.shadowSide:P.side:z.side=P.shadowSide!==null?P.shadowSide:d[P.side],z.alphaMap=P.alphaMap,z.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,z.map=P.map,z.clipShadows=P.clipShadows,z.clippingPlanes=P.clippingPlanes,z.clipIntersection=P.clipIntersection,z.displacementMap=P.displacementMap,z.displacementScale=P.displacementScale,z.displacementBias=P.displacementBias,z.wireframeLinewidth=P.wireframeLinewidth,z.linewidth=P.linewidth,_.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const F=s.properties.get(z);F.light=_}return z}function M(A,P,_,E,z){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&z===Qs)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,A.matrixWorld);const G=t.update(A),X=A.material;if(Array.isArray(X)){const B=G.groups;for(let V=0,U=B.length;V<U;V++){const nt=B[V],Q=X[nt.materialIndex];if(Q&&Q.visible){const gt=S(A,Q,E,z);A.onBeforeShadow(s,A,P,_,G,gt,nt),s.renderBufferDirect(_,null,G,gt,A,nt),A.onAfterShadow(s,A,P,_,G,gt,nt)}}}else if(X.visible){const B=S(A,X,E,z);A.onBeforeShadow(s,A,P,_,G,B,null),s.renderBufferDirect(_,null,G,B,A,null),A.onAfterShadow(s,A,P,_,G,B,null)}}const F=A.children;for(let G=0,X=F.length;G<X;G++)M(F[G],P,_,E,z)}function C(A){A.target.removeEventListener("dispose",C);for(const _ in c){const E=c[_],z=A.target.uuid;z in E&&(E[z].dispose(),delete E[z])}}}function Kx(s,t){function e(){let I=!1;const ut=new Oe;let at=null;const bt=new Oe(0,0,0,0);return{setMask:function(it){at!==it&&!I&&(s.colorMask(it,it,it,it),at=it)},setLocked:function(it){I=it},setClear:function(it,K,At,Yt,be){be===!0&&(it*=Yt,K*=Yt,At*=Yt),ut.set(it,K,At,Yt),bt.equals(ut)===!1&&(s.clearColor(it,K,At,Yt),bt.copy(ut))},reset:function(){I=!1,at=null,bt.set(-1,0,0,0)}}}function i(){let I=!1,ut=!1,at=null,bt=null,it=null;return{setReversed:function(K){if(ut!==K){const At=t.get("EXT_clip_control");K?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),ut=K;const Yt=it;it=null,this.setClear(Yt)}},getReversed:function(){return ut},setTest:function(K){K?ot(s.DEPTH_TEST):lt(s.DEPTH_TEST)},setMask:function(K){at!==K&&!I&&(s.depthMask(K),at=K)},setFunc:function(K){if(ut&&(K=Gd[K]),bt!==K){switch(K){case go:s.depthFunc(s.NEVER);break;case xo:s.depthFunc(s.ALWAYS);break;case _o:s.depthFunc(s.LESS);break;case ws:s.depthFunc(s.LEQUAL);break;case vo:s.depthFunc(s.EQUAL);break;case yo:s.depthFunc(s.GEQUAL);break;case Mo:s.depthFunc(s.GREATER);break;case So:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}bt=K}},setLocked:function(K){I=K},setClear:function(K){it!==K&&(it=K,ut&&(K=1-K),s.clearDepth(K))},reset:function(){I=!1,at=null,bt=null,it=null,ut=!1}}}function n(){let I=!1,ut=null,at=null,bt=null,it=null,K=null,At=null,Yt=null,be=null;return{setTest:function(pe){I||(pe?ot(s.STENCIL_TEST):lt(s.STENCIL_TEST))},setMask:function(pe){ut!==pe&&!I&&(s.stencilMask(pe),ut=pe)},setFunc:function(pe,$i,Ji){(at!==pe||bt!==$i||it!==Ji)&&(s.stencilFunc(pe,$i,Ji),at=pe,bt=$i,it=Ji)},setOp:function(pe,$i,Ji){(K!==pe||At!==$i||Yt!==Ji)&&(s.stencilOp(pe,$i,Ji),K=pe,At=$i,Yt=Ji)},setLocked:function(pe){I=pe},setClear:function(pe){be!==pe&&(s.clearStencil(pe),be=pe)},reset:function(){I=!1,ut=null,at=null,bt=null,it=null,K=null,At=null,Yt=null,be=null}}}const r=new e,a=new i,o=new n,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,f=[],g=null,v=!1,p=null,m=null,y=null,S=null,M=null,C=null,A=null,P=new Bt(0,0,0),_=0,E=!1,z=null,R=null,F=null,G=null,X=null;const B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,U=0;const nt=s.getParameter(s.VERSION);nt.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(nt)[1]),V=U>=1):nt.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),V=U>=2);let Q=null,gt={};const vt=s.getParameter(s.SCISSOR_BOX),xt=s.getParameter(s.VIEWPORT),Vt=new Oe().fromArray(vt),fe=new Oe().fromArray(xt);function xe(I,ut,at,bt){const it=new Uint8Array(4),K=s.createTexture();s.bindTexture(I,K),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let At=0;At<at;At++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(ut,0,s.RGBA,1,1,bt,0,s.RGBA,s.UNSIGNED_BYTE,it):s.texImage2D(ut+At,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,it);return K}const Z={};Z[s.TEXTURE_2D]=xe(s.TEXTURE_2D,s.TEXTURE_2D,1),Z[s.TEXTURE_CUBE_MAP]=xe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[s.TEXTURE_2D_ARRAY]=xe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Z[s.TEXTURE_3D]=xe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ot(s.DEPTH_TEST),a.setFunc(ws),j(!1),dt(jl),ot(s.CULL_FACE),J(ln);function ot(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function lt(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function zt(I,ut){return d[I]!==ut?(s.bindFramebuffer(I,ut),d[I]=ut,I===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ut),I===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ut),!0):!1}function Ut(I,ut){let at=f,bt=!1;if(I){at=u.get(ut),at===void 0&&(at=[],u.set(ut,at));const it=I.textures;if(at.length!==it.length||at[0]!==s.COLOR_ATTACHMENT0){for(let K=0,At=it.length;K<At;K++)at[K]=s.COLOR_ATTACHMENT0+K;at.length=it.length,bt=!0}}else at[0]!==s.BACK&&(at[0]=s.BACK,bt=!0);bt&&s.drawBuffers(at)}function Wt(I){return g!==I?(s.useProgram(I),g=I,!0):!1}const _e={[Wn]:s.FUNC_ADD,[hd]:s.FUNC_SUBTRACT,[ud]:s.FUNC_REVERSE_SUBTRACT};_e[dd]=s.MIN,_e[fd]=s.MAX;const Kt={[pd]:s.ZERO,[md]:s.ONE,[gd]:s.SRC_COLOR,[po]:s.SRC_ALPHA,[Sd]:s.SRC_ALPHA_SATURATE,[yd]:s.DST_COLOR,[_d]:s.DST_ALPHA,[xd]:s.ONE_MINUS_SRC_COLOR,[mo]:s.ONE_MINUS_SRC_ALPHA,[Md]:s.ONE_MINUS_DST_COLOR,[vd]:s.ONE_MINUS_DST_ALPHA,[bd]:s.CONSTANT_COLOR,[Ed]:s.ONE_MINUS_CONSTANT_COLOR,[Td]:s.CONSTANT_ALPHA,[wd]:s.ONE_MINUS_CONSTANT_ALPHA};function J(I,ut,at,bt,it,K,At,Yt,be,pe){if(I===ln){v===!0&&(lt(s.BLEND),v=!1);return}if(v===!1&&(ot(s.BLEND),v=!0),I!==cd){if(I!==p||pe!==E){if((m!==Wn||M!==Wn)&&(s.blendEquation(s.FUNC_ADD),m=Wn,M=Wn),pe)switch(I){case Es:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ra:s.blendFunc(s.ONE,s.ONE);break;case Ql:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:le("WebGLState: Invalid blending: ",I);break}else switch(I){case Es:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ra:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ql:le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tc:le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:le("WebGLState: Invalid blending: ",I);break}y=null,S=null,C=null,A=null,P.set(0,0,0),_=0,p=I,E=pe}return}it=it||ut,K=K||at,At=At||bt,(ut!==m||it!==M)&&(s.blendEquationSeparate(_e[ut],_e[it]),m=ut,M=it),(at!==y||bt!==S||K!==C||At!==A)&&(s.blendFuncSeparate(Kt[at],Kt[bt],Kt[K],Kt[At]),y=at,S=bt,C=K,A=At),(Yt.equals(P)===!1||be!==_)&&(s.blendColor(Yt.r,Yt.g,Yt.b,be),P.copy(Yt),_=be),p=I,E=!1}function et(I,ut){I.side===Ve?lt(s.CULL_FACE):ot(s.CULL_FACE);let at=I.side===pi;ut&&(at=!at),j(at),I.blending===Es&&I.transparent===!1?J(ln):J(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const bt=I.stencilWrite;o.setTest(bt),bt&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ot(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ot(s.SAMPLE_ALPHA_TO_COVERAGE):lt(s.SAMPLE_ALPHA_TO_COVERAGE)}function j(I){z!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),z=I)}function dt(I){I!==ad?(ot(s.CULL_FACE),I!==R&&(I===jl?s.cullFace(s.BACK):I===od?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):lt(s.CULL_FACE),R=I}function w(I){I!==F&&(V&&s.lineWidth(I),F=I)}function Ot(I,ut,at){I?(ot(s.POLYGON_OFFSET_FILL),(G!==ut||X!==at)&&(G=ut,X=at,a.getReversed()&&(ut=-ut),s.polygonOffset(ut,at))):lt(s.POLYGON_OFFSET_FILL)}function yt(I){I?ot(s.SCISSOR_TEST):lt(s.SCISSOR_TEST)}function kt(I){I===void 0&&(I=s.TEXTURE0+B-1),Q!==I&&(s.activeTexture(I),Q=I)}function ct(I,ut,at){at===void 0&&(Q===null?at=s.TEXTURE0+B-1:at=Q);let bt=gt[at];bt===void 0&&(bt={type:void 0,texture:void 0},gt[at]=bt),(bt.type!==I||bt.texture!==ut)&&(Q!==at&&(s.activeTexture(at),Q=at),s.bindTexture(I,ut||Z[I]),bt.type=I,bt.texture=ut)}function T(){const I=gt[Q];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function x(){try{s.compressedTexImage2D(...arguments)}catch(I){le("WebGLState:",I)}}function D(){try{s.compressedTexImage3D(...arguments)}catch(I){le("WebGLState:",I)}}function q(){try{s.texSubImage2D(...arguments)}catch(I){le("WebGLState:",I)}}function $(){try{s.texSubImage3D(...arguments)}catch(I){le("WebGLState:",I)}}function Y(){try{s.compressedTexSubImage2D(...arguments)}catch(I){le("WebGLState:",I)}}function Et(){try{s.compressedTexSubImage3D(...arguments)}catch(I){le("WebGLState:",I)}}function ht(){try{s.texStorage2D(...arguments)}catch(I){le("WebGLState:",I)}}function It(){try{s.texStorage3D(...arguments)}catch(I){le("WebGLState:",I)}}function Gt(){try{s.texImage2D(...arguments)}catch(I){le("WebGLState:",I)}}function tt(){try{s.texImage3D(...arguments)}catch(I){le("WebGLState:",I)}}function rt(I){Vt.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),Vt.copy(I))}function wt(I){fe.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),fe.copy(I))}function Ct(I,ut){let at=c.get(ut);at===void 0&&(at=new WeakMap,c.set(ut,at));let bt=at.get(I);bt===void 0&&(bt=s.getUniformBlockIndex(ut,I.name),at.set(I,bt))}function Mt(I,ut){const bt=c.get(ut).get(I);l.get(ut)!==bt&&(s.uniformBlockBinding(ut,bt,I.__bindingPointIndex),l.set(ut,bt))}function ee(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},Q=null,gt={},d={},u=new WeakMap,f=[],g=null,v=!1,p=null,m=null,y=null,S=null,M=null,C=null,A=null,P=new Bt(0,0,0),_=0,E=!1,z=null,R=null,F=null,G=null,X=null,Vt.set(0,0,s.canvas.width,s.canvas.height),fe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ot,disable:lt,bindFramebuffer:zt,drawBuffers:Ut,useProgram:Wt,setBlending:J,setMaterial:et,setFlipSided:j,setCullFace:dt,setLineWidth:w,setPolygonOffset:Ot,setScissorTest:yt,activeTexture:kt,bindTexture:ct,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:D,texImage2D:Gt,texImage3D:tt,updateUBOMapping:Ct,uniformBlockBinding:Mt,texStorage2D:ht,texStorage3D:It,texSubImage2D:q,texSubImage3D:$,compressedTexSubImage2D:Y,compressedTexSubImage3D:Et,scissor:rt,viewport:wt,reset:ee}}function Zx(s,t,e,i,n,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return f?new OffscreenCanvas(T,x):oa("canvas")}function v(T,x,D){let q=1;const $=ct(T);if(($.width>D||$.height>D)&&(q=D/Math.max($.width,$.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Y=Math.floor(q*$.width),Et=Math.floor(q*$.height);d===void 0&&(d=g(Y,Et));const ht=x?g(Y,Et):d;return ht.width=Y,ht.height=Et,ht.getContext("2d").drawImage(T,0,0,Y,Et),Xt("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Y+"x"+Et+")."),ht}else return"data"in T&&Xt("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),T;return T}function p(T){return T.generateMipmaps}function m(T){s.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(T,x,D,q,$=!1){if(T!==null){if(s[T]!==void 0)return s[T];Xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=x;if(x===s.RED&&(D===s.FLOAT&&(Y=s.R32F),D===s.HALF_FLOAT&&(Y=s.R16F),D===s.UNSIGNED_BYTE&&(Y=s.R8)),x===s.RED_INTEGER&&(D===s.UNSIGNED_BYTE&&(Y=s.R8UI),D===s.UNSIGNED_SHORT&&(Y=s.R16UI),D===s.UNSIGNED_INT&&(Y=s.R32UI),D===s.BYTE&&(Y=s.R8I),D===s.SHORT&&(Y=s.R16I),D===s.INT&&(Y=s.R32I)),x===s.RG&&(D===s.FLOAT&&(Y=s.RG32F),D===s.HALF_FLOAT&&(Y=s.RG16F),D===s.UNSIGNED_BYTE&&(Y=s.RG8)),x===s.RG_INTEGER&&(D===s.UNSIGNED_BYTE&&(Y=s.RG8UI),D===s.UNSIGNED_SHORT&&(Y=s.RG16UI),D===s.UNSIGNED_INT&&(Y=s.RG32UI),D===s.BYTE&&(Y=s.RG8I),D===s.SHORT&&(Y=s.RG16I),D===s.INT&&(Y=s.RG32I)),x===s.RGB_INTEGER&&(D===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),D===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),D===s.UNSIGNED_INT&&(Y=s.RGB32UI),D===s.BYTE&&(Y=s.RGB8I),D===s.SHORT&&(Y=s.RGB16I),D===s.INT&&(Y=s.RGB32I)),x===s.RGBA_INTEGER&&(D===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),D===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),D===s.UNSIGNED_INT&&(Y=s.RGBA32UI),D===s.BYTE&&(Y=s.RGBA8I),D===s.SHORT&&(Y=s.RGBA16I),D===s.INT&&(Y=s.RGBA32I)),x===s.RGB&&(D===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),D===s.UNSIGNED_INT_10F_11F_11F_REV&&(Y=s.R11F_G11F_B10F)),x===s.RGBA){const Et=$?aa:ce.getTransfer(q);D===s.FLOAT&&(Y=s.RGBA32F),D===s.HALF_FLOAT&&(Y=s.RGBA16F),D===s.UNSIGNED_BYTE&&(Y=Et===ge?s.SRGB8_ALPHA8:s.RGBA8),D===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),D===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function M(T,x){let D;return T?x===null||x===qi||x===lr?D=s.DEPTH24_STENCIL8:x===Ii?D=s.DEPTH32F_STENCIL8:x===or&&(D=s.DEPTH24_STENCIL8,Xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===qi||x===lr?D=s.DEPTH_COMPONENT24:x===Ii?D=s.DEPTH_COMPONENT32F:x===or&&(D=s.DEPTH_COMPONENT16),D}function C(T,x){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==ei&&T.minFilter!==hi?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function A(T){const x=T.target;x.removeEventListener("dispose",A),_(x),x.isVideoTexture&&h.delete(x)}function P(T){const x=T.target;x.removeEventListener("dispose",P),z(x)}function _(T){const x=i.get(T);if(x.__webglInit===void 0)return;const D=T.source,q=u.get(D);if(q){const $=q[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&E(T),Object.keys(q).length===0&&u.delete(D)}i.remove(T)}function E(T){const x=i.get(T);s.deleteTexture(x.__webglTexture);const D=T.source,q=u.get(D);delete q[x.__cacheKey],a.memory.textures--}function z(T){const x=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let $=0;$<x.__webglFramebuffer[q].length;$++)s.deleteFramebuffer(x.__webglFramebuffer[q][$]);else s.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)s.deleteFramebuffer(x.__webglFramebuffer[q]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const D=T.textures;for(let q=0,$=D.length;q<$;q++){const Y=i.get(D[q]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),a.memory.textures--),i.remove(D[q])}i.remove(T)}let R=0;function F(){R=0}function G(){const T=R;return T>=n.maxTextures&&Xt("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+n.maxTextures),R+=1,T}function X(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function B(T,x){const D=i.get(T);if(T.isVideoTexture&&yt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&D.__version!==T.version){const q=T.image;if(q===null)Xt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Xt("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(D,T,x);return}}else T.isExternalTexture&&(D.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,D.__webglTexture,s.TEXTURE0+x)}function V(T,x){const D=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){Z(D,T,x);return}else T.isExternalTexture&&(D.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,D.__webglTexture,s.TEXTURE0+x)}function U(T,x){const D=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){Z(D,T,x);return}e.bindTexture(s.TEXTURE_3D,D.__webglTexture,s.TEXTURE0+x)}function nt(T,x){const D=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&D.__version!==T.version){ot(D,T,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+x)}const Q={[bo]:s.REPEAT,[sn]:s.CLAMP_TO_EDGE,[Eo]:s.MIRRORED_REPEAT},gt={[ei]:s.NEAREST,[Rd]:s.NEAREST_MIPMAP_NEAREST,[_r]:s.NEAREST_MIPMAP_LINEAR,[hi]:s.LINEAR,[Pa]:s.LINEAR_MIPMAP_NEAREST,[qn]:s.LINEAR_MIPMAP_LINEAR},vt={[Id]:s.NEVER,[Od]:s.ALWAYS,[Dd]:s.LESS,[Al]:s.LEQUAL,[Nd]:s.EQUAL,[Cl]:s.GEQUAL,[Ud]:s.GREATER,[Fd]:s.NOTEQUAL};function xt(T,x){if(x.type===Ii&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===hi||x.magFilter===Pa||x.magFilter===_r||x.magFilter===qn||x.minFilter===hi||x.minFilter===Pa||x.minFilter===_r||x.minFilter===qn)&&Xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,Q[x.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,Q[x.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,Q[x.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,gt[x.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,gt[x.minFilter]),x.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,vt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ei||x.minFilter!==_r&&x.minFilter!==qn||x.type===Ii&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const D=t.get("EXT_texture_filter_anisotropic");s.texParameterf(T,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,n.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Vt(T,x){let D=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",A));const q=x.source;let $=u.get(q);$===void 0&&($={},u.set(q,$));const Y=X(x);if(Y!==T.__cacheKey){$[Y]===void 0&&($[Y]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,D=!0),$[Y].usedTimes++;const Et=$[T.__cacheKey];Et!==void 0&&($[T.__cacheKey].usedTimes--,Et.usedTimes===0&&E(x)),T.__cacheKey=Y,T.__webglTexture=$[Y].texture}return D}function fe(T,x,D){return Math.floor(Math.floor(T/D)/x)}function xe(T,x,D,q){const Y=T.updateRanges;if(Y.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,D,q,x.data);else{Y.sort((tt,rt)=>tt.start-rt.start);let Et=0;for(let tt=1;tt<Y.length;tt++){const rt=Y[Et],wt=Y[tt],Ct=rt.start+rt.count,Mt=fe(wt.start,x.width,4),ee=fe(rt.start,x.width,4);wt.start<=Ct+1&&Mt===ee&&fe(wt.start+wt.count-1,x.width,4)===Mt?rt.count=Math.max(rt.count,wt.start+wt.count-rt.start):(++Et,Y[Et]=wt)}Y.length=Et+1;const ht=s.getParameter(s.UNPACK_ROW_LENGTH),It=s.getParameter(s.UNPACK_SKIP_PIXELS),Gt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let tt=0,rt=Y.length;tt<rt;tt++){const wt=Y[tt],Ct=Math.floor(wt.start/4),Mt=Math.ceil(wt.count/4),ee=Ct%x.width,I=Math.floor(Ct/x.width),ut=Mt,at=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ee),s.pixelStorei(s.UNPACK_SKIP_ROWS,I),e.texSubImage2D(s.TEXTURE_2D,0,ee,I,ut,at,D,q,x.data)}T.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ht),s.pixelStorei(s.UNPACK_SKIP_PIXELS,It),s.pixelStorei(s.UNPACK_SKIP_ROWS,Gt)}}function Z(T,x,D){let q=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=s.TEXTURE_3D);const $=Vt(T,x),Y=x.source;e.bindTexture(q,T.__webglTexture,s.TEXTURE0+D);const Et=i.get(Y);if(Y.version!==Et.__version||$===!0){e.activeTexture(s.TEXTURE0+D);const ht=ce.getPrimaries(ce.workingColorSpace),It=x.colorSpace===Mn?null:ce.getPrimaries(x.colorSpace),Gt=x.colorSpace===Mn||ht===It?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let tt=v(x.image,!1,n.maxTextureSize);tt=kt(x,tt);const rt=r.convert(x.format,x.colorSpace),wt=r.convert(x.type);let Ct=S(x.internalFormat,rt,wt,x.colorSpace,x.isVideoTexture);xt(q,x);let Mt;const ee=x.mipmaps,I=x.isVideoTexture!==!0,ut=Et.__version===void 0||$===!0,at=Y.dataReady,bt=C(x,tt);if(x.isDepthTexture)Ct=M(x.format===Yn,x.type),ut&&(I?e.texStorage2D(s.TEXTURE_2D,1,Ct,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,Ct,tt.width,tt.height,0,rt,wt,null));else if(x.isDataTexture)if(ee.length>0){I&&ut&&e.texStorage2D(s.TEXTURE_2D,bt,Ct,ee[0].width,ee[0].height);for(let it=0,K=ee.length;it<K;it++)Mt=ee[it],I?at&&e.texSubImage2D(s.TEXTURE_2D,it,0,0,Mt.width,Mt.height,rt,wt,Mt.data):e.texImage2D(s.TEXTURE_2D,it,Ct,Mt.width,Mt.height,0,rt,wt,Mt.data);x.generateMipmaps=!1}else I?(ut&&e.texStorage2D(s.TEXTURE_2D,bt,Ct,tt.width,tt.height),at&&xe(x,tt,rt,wt)):e.texImage2D(s.TEXTURE_2D,0,Ct,tt.width,tt.height,0,rt,wt,tt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){I&&ut&&e.texStorage3D(s.TEXTURE_2D_ARRAY,bt,Ct,ee[0].width,ee[0].height,tt.depth);for(let it=0,K=ee.length;it<K;it++)if(Mt=ee[it],x.format!==Di)if(rt!==null)if(I){if(at)if(x.layerUpdates.size>0){const At=Dc(Mt.width,Mt.height,x.format,x.type);for(const Yt of x.layerUpdates){const be=Mt.data.subarray(Yt*At/Mt.data.BYTES_PER_ELEMENT,(Yt+1)*At/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,Yt,Mt.width,Mt.height,1,rt,be)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,0,Mt.width,Mt.height,tt.depth,rt,Mt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,it,Ct,Mt.width,Mt.height,tt.depth,0,Mt.data,0,0);else Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?at&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,it,0,0,0,Mt.width,Mt.height,tt.depth,rt,wt,Mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,it,Ct,Mt.width,Mt.height,tt.depth,0,rt,wt,Mt.data)}else{I&&ut&&e.texStorage2D(s.TEXTURE_2D,bt,Ct,ee[0].width,ee[0].height);for(let it=0,K=ee.length;it<K;it++)Mt=ee[it],x.format!==Di?rt!==null?I?at&&e.compressedTexSubImage2D(s.TEXTURE_2D,it,0,0,Mt.width,Mt.height,rt,Mt.data):e.compressedTexImage2D(s.TEXTURE_2D,it,Ct,Mt.width,Mt.height,0,Mt.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?at&&e.texSubImage2D(s.TEXTURE_2D,it,0,0,Mt.width,Mt.height,rt,wt,Mt.data):e.texImage2D(s.TEXTURE_2D,it,Ct,Mt.width,Mt.height,0,rt,wt,Mt.data)}else if(x.isDataArrayTexture)if(I){if(ut&&e.texStorage3D(s.TEXTURE_2D_ARRAY,bt,Ct,tt.width,tt.height,tt.depth),at)if(x.layerUpdates.size>0){const it=Dc(tt.width,tt.height,x.format,x.type);for(const K of x.layerUpdates){const At=tt.data.subarray(K*it/tt.data.BYTES_PER_ELEMENT,(K+1)*it/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,tt.width,tt.height,1,rt,wt,At)}x.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,rt,wt,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ct,tt.width,tt.height,tt.depth,0,rt,wt,tt.data);else if(x.isData3DTexture)I?(ut&&e.texStorage3D(s.TEXTURE_3D,bt,Ct,tt.width,tt.height,tt.depth),at&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,rt,wt,tt.data)):e.texImage3D(s.TEXTURE_3D,0,Ct,tt.width,tt.height,tt.depth,0,rt,wt,tt.data);else if(x.isFramebufferTexture){if(ut)if(I)e.texStorage2D(s.TEXTURE_2D,bt,Ct,tt.width,tt.height);else{let it=tt.width,K=tt.height;for(let At=0;At<bt;At++)e.texImage2D(s.TEXTURE_2D,At,Ct,it,K,0,rt,wt,null),it>>=1,K>>=1}}else if(ee.length>0){if(I&&ut){const it=ct(ee[0]);e.texStorage2D(s.TEXTURE_2D,bt,Ct,it.width,it.height)}for(let it=0,K=ee.length;it<K;it++)Mt=ee[it],I?at&&e.texSubImage2D(s.TEXTURE_2D,it,0,0,rt,wt,Mt):e.texImage2D(s.TEXTURE_2D,it,Ct,rt,wt,Mt);x.generateMipmaps=!1}else if(I){if(ut){const it=ct(tt);e.texStorage2D(s.TEXTURE_2D,bt,Ct,it.width,it.height)}at&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,rt,wt,tt)}else e.texImage2D(s.TEXTURE_2D,0,Ct,rt,wt,tt);p(x)&&m(q),Et.__version=Y.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ot(T,x,D){if(x.image.length!==6)return;const q=Vt(T,x),$=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+D);const Y=i.get($);if($.version!==Y.__version||q===!0){e.activeTexture(s.TEXTURE0+D);const Et=ce.getPrimaries(ce.workingColorSpace),ht=x.colorSpace===Mn?null:ce.getPrimaries(x.colorSpace),It=x.colorSpace===Mn||Et===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const Gt=x.isCompressedTexture||x.image[0].isCompressedTexture,tt=x.image[0]&&x.image[0].isDataTexture,rt=[];for(let K=0;K<6;K++)!Gt&&!tt?rt[K]=v(x.image[K],!0,n.maxCubemapSize):rt[K]=tt?x.image[K].image:x.image[K],rt[K]=kt(x,rt[K]);const wt=rt[0],Ct=r.convert(x.format,x.colorSpace),Mt=r.convert(x.type),ee=S(x.internalFormat,Ct,Mt,x.colorSpace),I=x.isVideoTexture!==!0,ut=Y.__version===void 0||q===!0,at=$.dataReady;let bt=C(x,wt);xt(s.TEXTURE_CUBE_MAP,x);let it;if(Gt){I&&ut&&e.texStorage2D(s.TEXTURE_CUBE_MAP,bt,ee,wt.width,wt.height);for(let K=0;K<6;K++){it=rt[K].mipmaps;for(let At=0;At<it.length;At++){const Yt=it[At];x.format!==Di?Ct!==null?I?at&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,At,0,0,Yt.width,Yt.height,Ct,Yt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,At,ee,Yt.width,Yt.height,0,Yt.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,At,0,0,Yt.width,Yt.height,Ct,Mt,Yt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,At,ee,Yt.width,Yt.height,0,Ct,Mt,Yt.data)}}}else{if(it=x.mipmaps,I&&ut){it.length>0&&bt++;const K=ct(rt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,bt,ee,K.width,K.height)}for(let K=0;K<6;K++)if(tt){I?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,rt[K].width,rt[K].height,Ct,Mt,rt[K].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ee,rt[K].width,rt[K].height,0,Ct,Mt,rt[K].data);for(let At=0;At<it.length;At++){const be=it[At].image[K].image;I?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,At+1,0,0,be.width,be.height,Ct,Mt,be.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,At+1,ee,be.width,be.height,0,Ct,Mt,be.data)}}else{I?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ct,Mt,rt[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ee,Ct,Mt,rt[K]);for(let At=0;At<it.length;At++){const Yt=it[At];I?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,At+1,0,0,Ct,Mt,Yt.image[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,At+1,ee,Ct,Mt,Yt.image[K])}}}p(x)&&m(s.TEXTURE_CUBE_MAP),Y.__version=$.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function lt(T,x,D,q,$,Y){const Et=r.convert(D.format,D.colorSpace),ht=r.convert(D.type),It=S(D.internalFormat,Et,ht,D.colorSpace),Gt=i.get(x),tt=i.get(D);if(tt.__renderTarget=x,!Gt.__hasExternalTextures){const rt=Math.max(1,x.width>>Y),wt=Math.max(1,x.height>>Y);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?e.texImage3D($,Y,It,rt,wt,x.depth,0,Et,ht,null):e.texImage2D($,Y,It,rt,wt,0,Et,ht,null)}e.bindFramebuffer(s.FRAMEBUFFER,T),Ot(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,q,$,tt.__webglTexture,0,w(x)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,q,$,tt.__webglTexture,Y),e.bindFramebuffer(s.FRAMEBUFFER,null)}function zt(T,x,D){if(s.bindRenderbuffer(s.RENDERBUFFER,T),x.depthBuffer){const q=x.depthTexture,$=q&&q.isDepthTexture?q.type:null,Y=M(x.stencilBuffer,$),Et=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ot(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,w(x),Y,x.width,x.height):D?s.renderbufferStorageMultisample(s.RENDERBUFFER,w(x),Y,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,Y,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,T)}else{const q=x.textures;for(let $=0;$<q.length;$++){const Y=q[$],Et=r.convert(Y.format,Y.colorSpace),ht=r.convert(Y.type),It=S(Y.internalFormat,Et,ht,Y.colorSpace);Ot(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,w(x),It,x.width,x.height):D?s.renderbufferStorageMultisample(s.RENDERBUFFER,w(x),It,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,It,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ut(T,x,D){const q=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(x.depthTexture);if($.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q){if($.__webglInit===void 0&&($.__webglInit=!0,x.depthTexture.addEventListener("dispose",A)),$.__webglTexture===void 0){$.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),xt(s.TEXTURE_CUBE_MAP,x.depthTexture);const Gt=r.convert(x.depthTexture.format),tt=r.convert(x.depthTexture.type);let rt;x.depthTexture.format===dn?rt=s.DEPTH_COMPONENT24:x.depthTexture.format===Yn&&(rt=s.DEPTH24_STENCIL8);for(let wt=0;wt<6;wt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,rt,x.width,x.height,0,Gt,tt,null)}}else B(x.depthTexture,0);const Y=$.__webglTexture,Et=w(x),ht=q?s.TEXTURE_CUBE_MAP_POSITIVE_X+D:s.TEXTURE_2D,It=x.depthTexture.format===Yn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(x.depthTexture.format===dn)Ot(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,It,ht,Y,0,Et):s.framebufferTexture2D(s.FRAMEBUFFER,It,ht,Y,0);else if(x.depthTexture.format===Yn)Ot(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,It,ht,Y,0,Et):s.framebufferTexture2D(s.FRAMEBUFFER,It,ht,Y,0);else throw new Error("Unknown depthTexture format")}function Wt(T){const x=i.get(T),D=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const q=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){const $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",$)};q.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=q}if(T.depthTexture&&!x.__autoAllocateDepthBuffer)if(D)for(let q=0;q<6;q++)Ut(x.__webglFramebuffer[q],T,q);else{const q=T.texture.mipmaps;q&&q.length>0?Ut(x.__webglFramebuffer[0],T,0):Ut(x.__webglFramebuffer,T,0)}else if(D){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=s.createRenderbuffer(),zt(x.__webglDepthbuffer[q],T,!1);else{const $=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[q];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,Y)}}else{const q=T.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),zt(x.__webglDepthbuffer,T,!1);else{const $=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,Y)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function _e(T,x,D){const q=i.get(T);x!==void 0&&lt(q.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),D!==void 0&&Wt(T)}function Kt(T){const x=T.texture,D=i.get(T),q=i.get(x);T.addEventListener("dispose",P);const $=T.textures,Y=T.isWebGLCubeRenderTarget===!0,Et=$.length>1;if(Et||(q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture()),q.__version=x.version,a.memory.textures++),Y){D.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer[ht]=[];for(let It=0;It<x.mipmaps.length;It++)D.__webglFramebuffer[ht][It]=s.createFramebuffer()}else D.__webglFramebuffer[ht]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer=[];for(let ht=0;ht<x.mipmaps.length;ht++)D.__webglFramebuffer[ht]=s.createFramebuffer()}else D.__webglFramebuffer=s.createFramebuffer();if(Et)for(let ht=0,It=$.length;ht<It;ht++){const Gt=i.get($[ht]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=s.createTexture(),a.memory.textures++)}if(T.samples>0&&Ot(T)===!1){D.__webglMultisampledFramebuffer=s.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ht=0;ht<$.length;ht++){const It=$[ht];D.__webglColorRenderbuffer[ht]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,D.__webglColorRenderbuffer[ht]);const Gt=r.convert(It.format,It.colorSpace),tt=r.convert(It.type),rt=S(It.internalFormat,Gt,tt,It.colorSpace,T.isXRRenderTarget===!0),wt=w(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,wt,rt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,D.__webglColorRenderbuffer[ht])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(D.__webglDepthRenderbuffer=s.createRenderbuffer(),zt(D.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){e.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),xt(s.TEXTURE_CUBE_MAP,x);for(let ht=0;ht<6;ht++)if(x.mipmaps&&x.mipmaps.length>0)for(let It=0;It<x.mipmaps.length;It++)lt(D.__webglFramebuffer[ht][It],T,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,It);else lt(D.__webglFramebuffer[ht],T,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);p(x)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ht=0,It=$.length;ht<It;ht++){const Gt=$[ht],tt=i.get(Gt);let rt=s.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(rt=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(rt,tt.__webglTexture),xt(rt,Gt),lt(D.__webglFramebuffer,T,Gt,s.COLOR_ATTACHMENT0+ht,rt,0),p(Gt)&&m(rt)}e.unbindTexture()}else{let ht=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ht=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ht,q.__webglTexture),xt(ht,x),x.mipmaps&&x.mipmaps.length>0)for(let It=0;It<x.mipmaps.length;It++)lt(D.__webglFramebuffer[It],T,x,s.COLOR_ATTACHMENT0,ht,It);else lt(D.__webglFramebuffer,T,x,s.COLOR_ATTACHMENT0,ht,0);p(x)&&m(ht),e.unbindTexture()}T.depthBuffer&&Wt(T)}function J(T){const x=T.textures;for(let D=0,q=x.length;D<q;D++){const $=x[D];if(p($)){const Y=y(T),Et=i.get($).__webglTexture;e.bindTexture(Y,Et),m(Y),e.unbindTexture()}}}const et=[],j=[];function dt(T){if(T.samples>0){if(Ot(T)===!1){const x=T.textures,D=T.width,q=T.height;let $=s.COLOR_BUFFER_BIT;const Y=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=i.get(T),ht=x.length>1;if(ht)for(let Gt=0;Gt<x.length;Gt++)e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Gt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Gt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer);const It=T.texture.mipmaps;It&&It.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Gt=0;Gt<x.length;Gt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),ht){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Et.__webglColorRenderbuffer[Gt]);const tt=i.get(x[Gt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,tt,0)}s.blitFramebuffer(0,0,D,q,0,0,D,q,$,s.NEAREST),l===!0&&(et.length=0,j.length=0,et.push(s.COLOR_ATTACHMENT0+Gt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(et.push(Y),j.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,j)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,et))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ht)for(let Gt=0;Gt<x.length;Gt++){e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Gt,s.RENDERBUFFER,Et.__webglColorRenderbuffer[Gt]);const tt=i.get(x[Gt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Gt,s.TEXTURE_2D,tt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function w(T){return Math.min(n.maxSamples,T.samples)}function Ot(T){const x=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function yt(T){const x=a.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function kt(T,x){const D=T.colorSpace,q=T.format,$=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||D!==Rs&&D!==Mn&&(ce.getTransfer(D)===ge?(q!==Di||$!==vi)&&Xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):le("WebGLTextures: Unsupported texture color space:",D)),x}function ct(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=F,this.setTexture2D=B,this.setTexture2DArray=V,this.setTexture3D=U,this.setTextureCube=nt,this.rebindTextures=_e,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=Ot,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function $x(s,t){function e(i,n=Mn){let r;const a=ce.getTransfer(n);if(i===vi)return s.UNSIGNED_BYTE;if(i===Ml)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Sl)return s.UNSIGNED_SHORT_5_5_5_1;if(i===yh)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Mh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===_h)return s.BYTE;if(i===vh)return s.SHORT;if(i===or)return s.UNSIGNED_SHORT;if(i===yl)return s.INT;if(i===qi)return s.UNSIGNED_INT;if(i===Ii)return s.FLOAT;if(i===un)return s.HALF_FLOAT;if(i===Sh)return s.ALPHA;if(i===bh)return s.RGB;if(i===Di)return s.RGBA;if(i===dn)return s.DEPTH_COMPONENT;if(i===Yn)return s.DEPTH_STENCIL;if(i===bl)return s.RED;if(i===El)return s.RED_INTEGER;if(i===Cs)return s.RG;if(i===Tl)return s.RG_INTEGER;if(i===wl)return s.RGBA_INTEGER;if(i===$r||i===Jr||i===jr||i===Qr)if(a===ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===$r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===$r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===To||i===wo||i===Ao||i===Co)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===To)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ao)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Co)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ro||i===Po||i===Lo||i===Io||i===Do||i===No||i===Uo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ro||i===Po)return a===ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Lo)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Io)return r.COMPRESSED_R11_EAC;if(i===Do)return r.COMPRESSED_SIGNED_R11_EAC;if(i===No)return r.COMPRESSED_RG11_EAC;if(i===Uo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Fo||i===Oo||i===Bo||i===zo||i===ko||i===Go||i===Ho||i===Vo||i===Wo||i===Xo||i===qo||i===Yo||i===Ko||i===Zo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Fo)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Oo)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bo)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zo)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ko)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Go)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ho)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vo)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wo)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xo)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qo)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yo)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ko)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zo)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$o||i===Jo||i===jo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===$o)return a===ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Jo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===jo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Qo||i===tl||i===el||i===il)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Qo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===tl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===el)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===il)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===lr?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}const Jx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jx=`
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

}`;class Qx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Nh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ki({vertexShader:Jx,fragmentShader:jx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Nt(new an(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class t_ extends Fs{constructor(t,e){super();const i=this;let n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const v=typeof XRWebGLBinding<"u",p=new Qx,m={},y=e.getContextAttributes();let S=null,M=null;const C=[],A=[],P=new st;let _=null;const E=new _i;E.viewport=new Oe;const z=new _i;z.viewport=new Oe;const R=[E,z],F=new hp;let G=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ot=C[Z];return ot===void 0&&(ot=new Ba,C[Z]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(Z){let ot=C[Z];return ot===void 0&&(ot=new Ba,C[Z]=ot),ot.getGripSpace()},this.getHand=function(Z){let ot=C[Z];return ot===void 0&&(ot=new Ba,C[Z]=ot),ot.getHandSpace()};function B(Z){const ot=A.indexOf(Z.inputSource);if(ot===-1)return;const lt=C[ot];lt!==void 0&&(lt.update(Z.inputSource,Z.frame,c||a),lt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function V(){n.removeEventListener("select",B),n.removeEventListener("selectstart",B),n.removeEventListener("selectend",B),n.removeEventListener("squeeze",B),n.removeEventListener("squeezestart",B),n.removeEventListener("squeezeend",B),n.removeEventListener("end",V),n.removeEventListener("inputsourceschange",U);for(let Z=0;Z<C.length;Z++){const ot=A[Z];ot!==null&&(A[Z]=null,C[Z].disconnect(ot))}G=null,X=null,p.reset();for(const Z in m)delete m[Z];t.setRenderTarget(S),f=null,u=null,d=null,n=null,M=null,xe.stop(),i.isPresenting=!1,t.setPixelRatio(_),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&Xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(n,e)),d},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(Z){if(n=Z,n!==null){if(S=t.getRenderTarget(),n.addEventListener("select",B),n.addEventListener("selectstart",B),n.addEventListener("selectend",B),n.addEventListener("squeeze",B),n.addEventListener("squeezestart",B),n.addEventListener("squeezeend",B),n.addEventListener("end",V),n.addEventListener("inputsourceschange",U),y.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(P),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let lt=null,zt=null,Ut=null;y.depth&&(Ut=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=y.stencil?Yn:dn,zt=y.stencil?lr:qi);const Wt={colorFormat:e.RGBA8,depthFormat:Ut,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Wt),n.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new Xi(u.textureWidth,u.textureHeight,{format:Di,type:vi,depthTexture:new hr(u.textureWidth,u.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const lt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,e,lt),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Xi(f.framebufferWidth,f.framebufferHeight,{format:Di,type:vi,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),xe.setContext(n),xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function U(Z){for(let ot=0;ot<Z.removed.length;ot++){const lt=Z.removed[ot],zt=A.indexOf(lt);zt>=0&&(A[zt]=null,C[zt].disconnect(lt))}for(let ot=0;ot<Z.added.length;ot++){const lt=Z.added[ot];let zt=A.indexOf(lt);if(zt===-1){for(let Wt=0;Wt<C.length;Wt++)if(Wt>=A.length){A.push(lt),zt=Wt;break}else if(A[Wt]===null){A[Wt]=lt,zt=Wt;break}if(zt===-1)break}const Ut=C[zt];Ut&&Ut.connect(lt)}}const nt=new L,Q=new L;function gt(Z,ot,lt){nt.setFromMatrixPosition(ot.matrixWorld),Q.setFromMatrixPosition(lt.matrixWorld);const zt=nt.distanceTo(Q),Ut=ot.projectionMatrix.elements,Wt=lt.projectionMatrix.elements,_e=Ut[14]/(Ut[10]-1),Kt=Ut[14]/(Ut[10]+1),J=(Ut[9]+1)/Ut[5],et=(Ut[9]-1)/Ut[5],j=(Ut[8]-1)/Ut[0],dt=(Wt[8]+1)/Wt[0],w=_e*j,Ot=_e*dt,yt=zt/(-j+dt),kt=yt*-j;if(ot.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(kt),Z.translateZ(yt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ut[10]===-1)Z.projectionMatrix.copy(ot.projectionMatrix),Z.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const ct=_e+yt,T=Kt+yt,x=w-kt,D=Ot+(zt-kt),q=J*Kt/T*ct,$=et*Kt/T*ct;Z.projectionMatrix.makePerspective(x,D,q,$,ct,T),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function vt(Z,ot){ot===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ot.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(n===null)return;let ot=Z.near,lt=Z.far;p.texture!==null&&(p.depthNear>0&&(ot=p.depthNear),p.depthFar>0&&(lt=p.depthFar)),F.near=z.near=E.near=ot,F.far=z.far=E.far=lt,(G!==F.near||X!==F.far)&&(n.updateRenderState({depthNear:F.near,depthFar:F.far}),G=F.near,X=F.far),F.layers.mask=Z.layers.mask|6,E.layers.mask=F.layers.mask&-5,z.layers.mask=F.layers.mask&-3;const zt=Z.parent,Ut=F.cameras;vt(F,zt);for(let Wt=0;Wt<Ut.length;Wt++)vt(Ut[Wt],zt);Ut.length===2?gt(F,E,z):F.projectionMatrix.copy(E.projectionMatrix),xt(Z,F,zt)};function xt(Z,ot,lt){lt===null?Z.matrix.copy(ot.matrixWorld):(Z.matrix.copy(lt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ot.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ot.projectionMatrix),Z.projectionMatrixInverse.copy(ot.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=sl*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(Z){return m[Z]};let Vt=null;function fe(Z,ot){if(h=ot.getViewerPose(c||a),g=ot,h!==null){const lt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let zt=!1;lt.length!==F.cameras.length&&(F.cameras.length=0,zt=!0);for(let Kt=0;Kt<lt.length;Kt++){const J=lt[Kt];let et=null;if(f!==null)et=f.getViewport(J);else{const dt=d.getViewSubImage(u,J);et=dt.viewport,Kt===0&&(t.setRenderTargetTextures(M,dt.colorTexture,dt.depthStencilTexture),t.setRenderTarget(M))}let j=R[Kt];j===void 0&&(j=new _i,j.layers.enable(Kt),j.viewport=new Oe,R[Kt]=j),j.matrix.fromArray(J.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(J.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(et.x,et.y,et.width,et.height),Kt===0&&(F.matrix.copy(j.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),zt===!0&&F.cameras.push(j)}const Ut=n.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const Kt=d.getDepthInformation(lt[0]);Kt&&Kt.isValid&&Kt.texture&&p.init(Kt,n.renderState)}if(Ut&&Ut.includes("camera-access")&&v){t.state.unbindTexture(),d=i.getBinding();for(let Kt=0;Kt<lt.length;Kt++){const J=lt[Kt].camera;if(J){let et=m[J];et||(et=new Nh,m[J]=et);const j=d.getCameraImage(J);et.sourceTexture=j}}}}for(let lt=0;lt<C.length;lt++){const zt=A[lt],Ut=C[lt];zt!==null&&Ut!==void 0&&Ut.update(zt,ot,c||a)}Vt&&Vt(Z,ot),ot.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ot}),g=null}const xe=new qh;xe.setAnimationLoop(fe),this.setAnimationLoop=function(Z){Vt=Z},this.dispose=function(){}}}const Dn=new Yi,e_=new de;function i_(s,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Vh(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,y,S,M){m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,M)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,y,S):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===pi&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===pi&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=t.get(m),S=y.envMap,M=y.envMapRotation;S&&(p.envMap.value=S,Dn.copy(M),Dn.x*=-1,Dn.y*=-1,Dn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Dn.y*=-1,Dn.z*=-1),p.envMapRotation.value.setFromMatrix4(e_.makeRotationFromEuler(Dn)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=S*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===pi&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function n_(s,t,e,i){let n={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){const M=S.program;i.uniformBlockBinding(y,M)}function c(y,S){let M=n[y.id];M===void 0&&(g(y),M=h(y),n[y.id]=M,y.addEventListener("dispose",p));const C=S.program;i.updateUBOMapping(y,C);const A=t.render.frame;r[y.id]!==A&&(u(y),r[y.id]=A)}function h(y){const S=d();y.__bindingPointIndex=S;const M=s.createBuffer(),C=y.__size,A=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,C,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,M),M}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const S=n[y.id],M=y.uniforms,C=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let A=0,P=M.length;A<P;A++){const _=Array.isArray(M[A])?M[A]:[M[A]];for(let E=0,z=_.length;E<z;E++){const R=_[E];if(f(R,A,E,C)===!0){const F=R.__offset,G=Array.isArray(R.value)?R.value:[R.value];let X=0;for(let B=0;B<G.length;B++){const V=G[B],U=v(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,F+X,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,X),X+=U.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,S,M,C){const A=y.value,P=S+"_"+M;if(C[P]===void 0)return typeof A=="number"||typeof A=="boolean"?C[P]=A:C[P]=A.clone(),!0;{const _=C[P];if(typeof A=="number"||typeof A=="boolean"){if(_!==A)return C[P]=A,!0}else if(_.equals(A)===!1)return _.copy(A),!0}return!1}function g(y){const S=y.uniforms;let M=0;const C=16;for(let P=0,_=S.length;P<_;P++){const E=Array.isArray(S[P])?S[P]:[S[P]];for(let z=0,R=E.length;z<R;z++){const F=E[z],G=Array.isArray(F.value)?F.value:[F.value];for(let X=0,B=G.length;X<B;X++){const V=G[X],U=v(V),nt=M%C,Q=nt%U.boundary,gt=nt+Q;M+=Q,gt!==0&&C-gt<U.storage&&(M+=C-gt),F.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=U.storage}}}const A=M%C;return A>0&&(M+=C-A),y.__size=M,y.__cache={},this}function v(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?Xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Xt("WebGLRenderer: Unsupported uniform value type.",y),S}function p(y){const S=y.target;S.removeEventListener("dispose",p);const M=a.indexOf(S.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(n[S.id]),delete n[S.id],delete r[S.id]}function m(){for(const y in n)s.deleteBuffer(n[y]);a=[],n={},r={}}return{bind:l,update:c,dispose:m}}const s_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bi=null;function r_(){return Bi===null&&(Bi=new Ih(s_,16,16,Cs,un),Bi.name="DFG_LUT",Bi.minFilter=hi,Bi.magFilter=hi,Bi.wrapS=sn,Bi.wrapT=sn,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}class a_{constructor(t={}){const{canvas:e=zd(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=vi}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const v=f,p=new Set([wl,Tl,El]),m=new Set([vi,qi,or,lr,Ml,Sl]),y=new Uint32Array(4),S=new Int32Array(4);let M=null,C=null;const A=[],P=[];let _=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let z=!1;this._outputColorSpace=ci;let R=0,F=0,G=null,X=-1,B=null;const V=new Oe,U=new Oe;let nt=null;const Q=new Bt(0);let gt=0,vt=e.width,xt=e.height,Vt=1,fe=null,xe=null;const Z=new Oe(0,0,vt,xt),ot=new Oe(0,0,vt,xt);let lt=!1;const zt=new Ll;let Ut=!1,Wt=!1;const _e=new de,Kt=new L,J=new Oe,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let j=!1;function dt(){return G===null?Vt:1}let w=i;function Ot(b,N){return e.getContext(b,N)}try{const b={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xl}`),e.addEventListener("webglcontextlost",At,!1),e.addEventListener("webglcontextrestored",Yt,!1),e.addEventListener("webglcontextcreationerror",be,!1),w===null){const N="webgl2";if(w=Ot(N,b),w===null)throw Ot(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw le("WebGLRenderer: "+b.message),b}let yt,kt,ct,T,x,D,q,$,Y,Et,ht,It,Gt,tt,rt,wt,Ct,Mt,ee,I,ut,at,bt;function it(){yt=new ag(w),yt.init(),ut=new $x(w,yt),kt=new j0(w,yt,t,ut),ct=new Kx(w,yt),kt.reversedDepthBuffer&&u&&ct.buffers.depth.setReversed(!0),T=new cg(w),x=new Nx,D=new Zx(w,yt,ct,x,kt,ut,T),q=new rg(E),$=new pp(w),at=new $0(w,$),Y=new og(w,$,T,at),Et=new ug(w,Y,$,at,T),Mt=new hg(w,kt,D),rt=new Q0(x),ht=new Dx(E,q,yt,kt,at,rt),It=new i_(E,x),Gt=new Fx,tt=new Hx(yt),Ct=new Z0(E,q,ct,Et,g,l),wt=new Yx(E,Et,kt),bt=new n_(w,T,kt,ct),ee=new J0(w,yt,T),I=new lg(w,yt,T),T.programs=ht.programs,E.capabilities=kt,E.extensions=yt,E.properties=x,E.renderLists=Gt,E.shadowMap=wt,E.state=ct,E.info=T}it(),v!==vi&&(_=new fg(v,e.width,e.height,n,r));const K=new t_(E,w);this.xr=K,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const b=yt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=yt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Vt},this.setPixelRatio=function(b){b!==void 0&&(Vt=b,this.setSize(vt,xt,!1))},this.getSize=function(b){return b.set(vt,xt)},this.setSize=function(b,N,W=!0){if(K.isPresenting){Xt("WebGLRenderer: Can't change size while VR device is presenting.");return}vt=b,xt=N,e.width=Math.floor(b*Vt),e.height=Math.floor(N*Vt),W===!0&&(e.style.width=b+"px",e.style.height=N+"px"),_!==null&&_.setSize(e.width,e.height),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(vt*Vt,xt*Vt).floor()},this.setDrawingBufferSize=function(b,N,W){vt=b,xt=N,Vt=W,e.width=Math.floor(b*W),e.height=Math.floor(N*W),this.setViewport(0,0,b,N)},this.setEffects=function(b){if(v===vi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let N=0;N<b.length;N++)if(b[N].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(V)},this.getViewport=function(b){return b.copy(Z)},this.setViewport=function(b,N,W,H){b.isVector4?Z.set(b.x,b.y,b.z,b.w):Z.set(b,N,W,H),ct.viewport(V.copy(Z).multiplyScalar(Vt).round())},this.getScissor=function(b){return b.copy(ot)},this.setScissor=function(b,N,W,H){b.isVector4?ot.set(b.x,b.y,b.z,b.w):ot.set(b,N,W,H),ct.scissor(U.copy(ot).multiplyScalar(Vt).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(b){ct.setScissorTest(lt=b)},this.setOpaqueSort=function(b){fe=b},this.setTransparentSort=function(b){xe=b},this.getClearColor=function(b){return b.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(b=!0,N=!0,W=!0){let H=0;if(b){let k=!1;if(G!==null){const pt=G.texture.format;k=p.has(pt)}if(k){const pt=G.texture.type,St=m.has(pt),mt=Ct.getClearColor(),Rt=Ct.getClearAlpha(),Lt=mt.r,$t=mt.g,ie=mt.b;St?(y[0]=Lt,y[1]=$t,y[2]=ie,y[3]=Rt,w.clearBufferuiv(w.COLOR,0,y)):(S[0]=Lt,S[1]=$t,S[2]=ie,S[3]=Rt,w.clearBufferiv(w.COLOR,0,S))}else H|=w.COLOR_BUFFER_BIT}N&&(H|=w.DEPTH_BUFFER_BIT),W&&(H|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&w.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",At,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",be,!1),Ct.dispose(),Gt.dispose(),tt.dispose(),x.dispose(),q.dispose(),Et.dispose(),at.dispose(),bt.dispose(),ht.dispose(),K.dispose(),K.removeEventListener("sessionstart",Hl),K.removeEventListener("sessionend",Vl),wn.stop()};function At(b){b.preventDefault(),la("WebGLRenderer: Context Lost."),z=!0}function Yt(){la("WebGLRenderer: Context Restored."),z=!1;const b=T.autoReset,N=wt.enabled,W=wt.autoUpdate,H=wt.needsUpdate,k=wt.type;it(),T.autoReset=b,wt.enabled=N,wt.autoUpdate=W,wt.needsUpdate=H,wt.type=k}function be(b){le("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function pe(b){const N=b.target;N.removeEventListener("dispose",pe),$i(N)}function $i(b){Ji(b),x.remove(b)}function Ji(b){const N=x.get(b).programs;N!==void 0&&(N.forEach(function(W){ht.releaseProgram(W)}),b.isShaderMaterial&&ht.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,W,H,k,pt){N===null&&(N=et);const St=k.isMesh&&k.matrixWorld.determinant()<0,mt=td(b,N,W,H,k);ct.setMaterial(H,St);let Rt=W.index,Lt=1;if(H.wireframe===!0){if(Rt=Y.getWireframeAttribute(W),Rt===void 0)return;Lt=2}const $t=W.drawRange,ie=W.attributes.position;let Dt=$t.start*Lt,ve=($t.start+$t.count)*Lt;pt!==null&&(Dt=Math.max(Dt,pt.start*Lt),ve=Math.min(ve,(pt.start+pt.count)*Lt)),Rt!==null?(Dt=Math.max(Dt,0),ve=Math.min(ve,Rt.count)):ie!=null&&(Dt=Math.max(Dt,0),ve=Math.min(ve,ie.count));const Be=ve-Dt;if(Be<0||Be===1/0)return;at.setup(k,H,mt,W,Rt);let Ne,ye=ee;if(Rt!==null&&(Ne=$.get(Rt),ye=I,ye.setIndex(Ne)),k.isMesh)H.wireframe===!0?(ct.setLineWidth(H.wireframeLinewidth*dt()),ye.setMode(w.LINES)):ye.setMode(w.TRIANGLES);else if(k.isLine){let ii=H.linewidth;ii===void 0&&(ii=1),ct.setLineWidth(ii*dt()),k.isLineSegments?ye.setMode(w.LINES):k.isLineLoop?ye.setMode(w.LINE_LOOP):ye.setMode(w.LINE_STRIP)}else k.isPoints?ye.setMode(w.POINTS):k.isSprite&&ye.setMode(w.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ca("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ye.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(yt.get("WEBGL_multi_draw"))ye.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const ii=k._multiDrawStarts,Pt=k._multiDrawCounts,mi=k._multiDrawCount,he=Rt?$.get(Rt).bytesPerElement:1,Ai=x.get(H).currentProgram.getUniforms();for(let Fi=0;Fi<mi;Fi++)Ai.setValue(w,"_gl_DrawID",Fi),ye.render(ii[Fi]/he,Pt[Fi])}else if(k.isInstancedMesh)ye.renderInstances(Dt,Be,k.count);else if(W.isInstancedBufferGeometry){const ii=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Pt=Math.min(W.instanceCount,ii);ye.renderInstances(Dt,Be,Pt)}else ye.render(Dt,Be)};function Gl(b,N,W){b.transparent===!0&&b.side===Ve&&b.forceSinglePass===!1?(b.side=pi,b.needsUpdate=!0,gr(b,N,W),b.side=En,b.needsUpdate=!0,gr(b,N,W),b.side=Ve):gr(b,N,W)}this.compile=function(b,N,W=null){W===null&&(W=b),C=tt.get(W),C.init(N),P.push(C),W.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(C.pushLight(k),k.castShadow&&C.pushShadow(k))}),b!==W&&b.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(C.pushLight(k),k.castShadow&&C.pushShadow(k))}),C.setupLights();const H=new Set;return b.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const pt=k.material;if(pt)if(Array.isArray(pt))for(let St=0;St<pt.length;St++){const mt=pt[St];Gl(mt,W,k),H.add(mt)}else Gl(pt,W,k),H.add(pt)}),C=P.pop(),H},this.compileAsync=function(b,N,W=null){const H=this.compile(b,N,W);return new Promise(k=>{function pt(){if(H.forEach(function(St){x.get(St).currentProgram.isReady()&&H.delete(St)}),H.size===0){k(b);return}setTimeout(pt,10)}yt.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let wa=null;function Qu(b){wa&&wa(b)}function Hl(){wn.stop()}function Vl(){wn.start()}const wn=new qh;wn.setAnimationLoop(Qu),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(b){wa=b,K.setAnimationLoop(b),b===null?wn.stop():wn.start()},K.addEventListener("sessionstart",Hl),K.addEventListener("sessionend",Vl),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;const W=K.enabled===!0&&K.isPresenting===!0,H=_!==null&&(G===null||W)&&_.begin(E,G);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(_===null||_.isCompositing()===!1)&&(K.cameraAutoUpdate===!0&&K.updateCamera(N),N=K.getCamera()),b.isScene===!0&&b.onBeforeRender(E,b,N,G),C=tt.get(b,P.length),C.init(N),P.push(C),_e.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),zt.setFromProjectionMatrix(_e,Vi,N.reversedDepth),Wt=this.localClippingEnabled,Ut=rt.init(this.clippingPlanes,Wt),M=Gt.get(b,A.length),M.init(),A.push(M),K.enabled===!0&&K.isPresenting===!0){const St=E.xr.getDepthSensingMesh();St!==null&&Aa(St,N,-1/0,E.sortObjects)}Aa(b,N,0,E.sortObjects),M.finish(),E.sortObjects===!0&&M.sort(fe,xe),j=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,j&&Ct.addToRenderList(M,b),this.info.render.frame++,Ut===!0&&rt.beginShadows();const k=C.state.shadowsArray;if(wt.render(k,b,N),Ut===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&_.hasRenderPass())===!1){const St=M.opaque,mt=M.transmissive;if(C.setupLights(),N.isArrayCamera){const Rt=N.cameras;if(mt.length>0)for(let Lt=0,$t=Rt.length;Lt<$t;Lt++){const ie=Rt[Lt];Xl(St,mt,b,ie)}j&&Ct.render(b);for(let Lt=0,$t=Rt.length;Lt<$t;Lt++){const ie=Rt[Lt];Wl(M,b,ie,ie.viewport)}}else mt.length>0&&Xl(St,mt,b,N),j&&Ct.render(b),Wl(M,b,N)}G!==null&&F===0&&(D.updateMultisampleRenderTarget(G),D.updateRenderTargetMipmap(G)),H&&_.end(E),b.isScene===!0&&b.onAfterRender(E,b,N),at.resetDefaultState(),X=-1,B=null,P.pop(),P.length>0?(C=P[P.length-1],Ut===!0&&rt.setGlobalState(E.clippingPlanes,C.state.camera)):C=null,A.pop(),A.length>0?M=A[A.length-1]:M=null};function Aa(b,N,W,H){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)C.pushLight(b),b.castShadow&&C.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||zt.intersectsSprite(b)){H&&J.setFromMatrixPosition(b.matrixWorld).applyMatrix4(_e);const St=Et.update(b),mt=b.material;mt.visible&&M.push(b,St,mt,W,J.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||zt.intersectsObject(b))){const St=Et.update(b),mt=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),J.copy(b.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),J.copy(St.boundingSphere.center)),J.applyMatrix4(b.matrixWorld).applyMatrix4(_e)),Array.isArray(mt)){const Rt=St.groups;for(let Lt=0,$t=Rt.length;Lt<$t;Lt++){const ie=Rt[Lt],Dt=mt[ie.materialIndex];Dt&&Dt.visible&&M.push(b,St,Dt,W,J.z,ie)}}else mt.visible&&M.push(b,St,mt,W,J.z,null)}}const pt=b.children;for(let St=0,mt=pt.length;St<mt;St++)Aa(pt[St],N,W,H)}function Wl(b,N,W,H){const{opaque:k,transmissive:pt,transparent:St}=b;C.setupLightsView(W),Ut===!0&&rt.setGlobalState(E.clippingPlanes,W),H&&ct.viewport(V.copy(H)),k.length>0&&mr(k,N,W),pt.length>0&&mr(pt,N,W),St.length>0&&mr(St,N,W),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function Xl(b,N,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[H.id]===void 0){const Dt=yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[H.id]=new Xi(1,1,{generateMipmaps:!0,type:Dt?un:vi,minFilter:qn,samples:Math.max(4,kt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace})}const pt=C.state.transmissionRenderTarget[H.id],St=H.viewport||V;pt.setSize(St.z*E.transmissionResolutionScale,St.w*E.transmissionResolutionScale);const mt=E.getRenderTarget(),Rt=E.getActiveCubeFace(),Lt=E.getActiveMipmapLevel();E.setRenderTarget(pt),E.getClearColor(Q),gt=E.getClearAlpha(),gt<1&&E.setClearColor(16777215,.5),E.clear(),j&&Ct.render(W);const $t=E.toneMapping;E.toneMapping=Wi;const ie=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),C.setupLightsView(H),Ut===!0&&rt.setGlobalState(E.clippingPlanes,H),mr(b,W,H),D.updateMultisampleRenderTarget(pt),D.updateRenderTargetMipmap(pt),yt.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let ve=0,Be=N.length;ve<Be;ve++){const Ne=N[ve],{object:ye,geometry:ii,material:Pt,group:mi}=Ne;if(Pt.side===Ve&&ye.layers.test(H.layers)){const he=Pt.side;Pt.side=pi,Pt.needsUpdate=!0,ql(ye,W,H,ii,Pt,mi),Pt.side=he,Pt.needsUpdate=!0,Dt=!0}}Dt===!0&&(D.updateMultisampleRenderTarget(pt),D.updateRenderTargetMipmap(pt))}E.setRenderTarget(mt,Rt,Lt),E.setClearColor(Q,gt),ie!==void 0&&(H.viewport=ie),E.toneMapping=$t}function mr(b,N,W){const H=N.isScene===!0?N.overrideMaterial:null;for(let k=0,pt=b.length;k<pt;k++){const St=b[k],{object:mt,geometry:Rt,group:Lt}=St;let $t=St.material;$t.allowOverride===!0&&H!==null&&($t=H),mt.layers.test(W.layers)&&ql(mt,N,W,Rt,$t,Lt)}}function ql(b,N,W,H,k,pt){b.onBeforeRender(E,N,W,H,k,pt),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(E,N,W,H,b,pt),k.transparent===!0&&k.side===Ve&&k.forceSinglePass===!1?(k.side=pi,k.needsUpdate=!0,E.renderBufferDirect(W,N,H,k,b,pt),k.side=En,k.needsUpdate=!0,E.renderBufferDirect(W,N,H,k,b,pt),k.side=Ve):E.renderBufferDirect(W,N,H,k,b,pt),b.onAfterRender(E,N,W,H,k,pt)}function gr(b,N,W){N.isScene!==!0&&(N=et);const H=x.get(b),k=C.state.lights,pt=C.state.shadowsArray,St=k.state.version,mt=ht.getParameters(b,k.state,pt,N,W),Rt=ht.getProgramCacheKey(mt);let Lt=H.programs;H.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?N.environment:null,H.fog=N.fog;const $t=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;H.envMap=q.get(b.envMap||H.environment,$t),H.envMapRotation=H.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Lt===void 0&&(b.addEventListener("dispose",pe),Lt=new Map,H.programs=Lt);let ie=Lt.get(Rt);if(ie!==void 0){if(H.currentProgram===ie&&H.lightsStateVersion===St)return Kl(b,mt),ie}else mt.uniforms=ht.getUniforms(b),b.onBeforeCompile(mt,E),ie=ht.acquireProgram(mt,Rt),Lt.set(Rt,ie),H.uniforms=mt.uniforms;const Dt=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Dt.clippingPlanes=rt.uniform),Kl(b,mt),H.needsLights=id(b),H.lightsStateVersion=St,H.needsLights&&(Dt.ambientLightColor.value=k.state.ambient,Dt.lightProbe.value=k.state.probe,Dt.directionalLights.value=k.state.directional,Dt.directionalLightShadows.value=k.state.directionalShadow,Dt.spotLights.value=k.state.spot,Dt.spotLightShadows.value=k.state.spotShadow,Dt.rectAreaLights.value=k.state.rectArea,Dt.ltc_1.value=k.state.rectAreaLTC1,Dt.ltc_2.value=k.state.rectAreaLTC2,Dt.pointLights.value=k.state.point,Dt.pointLightShadows.value=k.state.pointShadow,Dt.hemisphereLights.value=k.state.hemi,Dt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Dt.spotLightMatrix.value=k.state.spotLightMatrix,Dt.spotLightMap.value=k.state.spotLightMap,Dt.pointShadowMatrix.value=k.state.pointShadowMatrix),H.currentProgram=ie,H.uniformsList=null,ie}function Yl(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=ta.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function Kl(b,N){const W=x.get(b);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function td(b,N,W,H,k){N.isScene!==!0&&(N=et),D.resetTextureUnits();const pt=N.fog,St=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?N.environment:null,mt=G===null?E.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Rs,Rt=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Lt=q.get(H.envMap||St,Rt),$t=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ie=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Dt=!!W.morphAttributes.position,ve=!!W.morphAttributes.normal,Be=!!W.morphAttributes.color;let Ne=Wi;H.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Ne=E.toneMapping);const ye=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ii=ye!==void 0?ye.length:0,Pt=x.get(H),mi=C.state.lights;if(Ut===!0&&(Wt===!0||b!==B)){const Ye=b===B&&H.id===X;rt.setState(H,b,Ye)}let he=!1;H.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==mi.state.version||Pt.outputColorSpace!==mt||k.isBatchedMesh&&Pt.batching===!1||!k.isBatchedMesh&&Pt.batching===!0||k.isBatchedMesh&&Pt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Pt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Pt.instancing===!1||!k.isInstancedMesh&&Pt.instancing===!0||k.isSkinnedMesh&&Pt.skinning===!1||!k.isSkinnedMesh&&Pt.skinning===!0||k.isInstancedMesh&&Pt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Pt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Pt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Pt.instancingMorph===!1&&k.morphTexture!==null||Pt.envMap!==Lt||H.fog===!0&&Pt.fog!==pt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==rt.numPlanes||Pt.numIntersection!==rt.numIntersection)||Pt.vertexAlphas!==$t||Pt.vertexTangents!==ie||Pt.morphTargets!==Dt||Pt.morphNormals!==ve||Pt.morphColors!==Be||Pt.toneMapping!==Ne||Pt.morphTargetsCount!==ii)&&(he=!0):(he=!0,Pt.__version=H.version);let Ai=Pt.currentProgram;he===!0&&(Ai=gr(H,N,k));let Fi=!1,An=!1,Qn=!1;const Se=Ai.getUniforms(),Ze=Pt.uniforms;if(ct.useProgram(Ai.program)&&(Fi=!0,An=!0,Qn=!0),H.id!==X&&(X=H.id,An=!0),Fi||B!==b){ct.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Se.setValue(w,"projectionMatrix",b.projectionMatrix),Se.setValue(w,"viewMatrix",b.matrixWorldInverse);const pn=Se.map.cameraPosition;pn!==void 0&&pn.setValue(w,Kt.setFromMatrixPosition(b.matrixWorld)),kt.logarithmicDepthBuffer&&Se.setValue(w,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Se.setValue(w,"isOrthographic",b.isOrthographicCamera===!0),B!==b&&(B=b,An=!0,Qn=!0)}if(Pt.needsLights&&(mi.state.directionalShadowMap.length>0&&Se.setValue(w,"directionalShadowMap",mi.state.directionalShadowMap,D),mi.state.spotShadowMap.length>0&&Se.setValue(w,"spotShadowMap",mi.state.spotShadowMap,D),mi.state.pointShadowMap.length>0&&Se.setValue(w,"pointShadowMap",mi.state.pointShadowMap,D)),k.isSkinnedMesh){Se.setOptional(w,k,"bindMatrix"),Se.setOptional(w,k,"bindMatrixInverse");const Ye=k.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),Se.setValue(w,"boneTexture",Ye.boneTexture,D))}k.isBatchedMesh&&(Se.setOptional(w,k,"batchingTexture"),Se.setValue(w,"batchingTexture",k._matricesTexture,D),Se.setOptional(w,k,"batchingIdTexture"),Se.setValue(w,"batchingIdTexture",k._indirectTexture,D),Se.setOptional(w,k,"batchingColorTexture"),k._colorsTexture!==null&&Se.setValue(w,"batchingColorTexture",k._colorsTexture,D));const fn=W.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&Mt.update(k,W,Ai),(An||Pt.receiveShadow!==k.receiveShadow)&&(Pt.receiveShadow=k.receiveShadow,Se.setValue(w,"receiveShadow",k.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&N.environment!==null&&(Ze.envMapIntensity.value=N.environmentIntensity),Ze.dfgLUT!==void 0&&(Ze.dfgLUT.value=r_()),An&&(Se.setValue(w,"toneMappingExposure",E.toneMappingExposure),Pt.needsLights&&ed(Ze,Qn),pt&&H.fog===!0&&It.refreshFogUniforms(Ze,pt),It.refreshMaterialUniforms(Ze,H,Vt,xt,C.state.transmissionRenderTarget[b.id]),ta.upload(w,Yl(Pt),Ze,D)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ta.upload(w,Yl(Pt),Ze,D),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Se.setValue(w,"center",k.center),Se.setValue(w,"modelViewMatrix",k.modelViewMatrix),Se.setValue(w,"normalMatrix",k.normalMatrix),Se.setValue(w,"modelMatrix",k.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ye=H.uniformsGroups;for(let pn=0,ts=Ye.length;pn<ts;pn++){const Zl=Ye[pn];bt.update(Zl,Ai),bt.bind(Zl,Ai)}}return Ai}function ed(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function id(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(b,N,W){const H=x.get(b);H.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),x.get(b.texture).__webglTexture=N,x.get(b.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,N){const W=x.get(b);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0};const nd=w.createFramebuffer();this.setRenderTarget=function(b,N=0,W=0){G=b,R=N,F=W;let H=null,k=!1,pt=!1;if(b){const mt=x.get(b);if(mt.__useDefaultFramebuffer!==void 0){ct.bindFramebuffer(w.FRAMEBUFFER,mt.__webglFramebuffer),V.copy(b.viewport),U.copy(b.scissor),nt=b.scissorTest,ct.viewport(V),ct.scissor(U),ct.setScissorTest(nt),X=-1;return}else if(mt.__webglFramebuffer===void 0)D.setupRenderTarget(b);else if(mt.__hasExternalTextures)D.rebindTextures(b,x.get(b.texture).__webglTexture,x.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const $t=b.depthTexture;if(mt.__boundDepthTexture!==$t){if($t!==null&&x.has($t)&&(b.width!==$t.image.width||b.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(b)}}const Rt=b.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(pt=!0);const Lt=x.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Lt[N])?H=Lt[N][W]:H=Lt[N],k=!0):b.samples>0&&D.useMultisampledRTT(b)===!1?H=x.get(b).__webglMultisampledFramebuffer:Array.isArray(Lt)?H=Lt[W]:H=Lt,V.copy(b.viewport),U.copy(b.scissor),nt=b.scissorTest}else V.copy(Z).multiplyScalar(Vt).floor(),U.copy(ot).multiplyScalar(Vt).floor(),nt=lt;if(W!==0&&(H=nd),ct.bindFramebuffer(w.FRAMEBUFFER,H)&&ct.drawBuffers(b,H),ct.viewport(V),ct.scissor(U),ct.setScissorTest(nt),k){const mt=x.get(b.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+N,mt.__webglTexture,W)}else if(pt){const mt=N;for(let Rt=0;Rt<b.textures.length;Rt++){const Lt=x.get(b.textures[Rt]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Rt,Lt.__webglTexture,W,mt)}}else if(b!==null&&W!==0){const mt=x.get(b.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,mt.__webglTexture,W)}X=-1},this.readRenderTargetPixels=function(b,N,W,H,k,pt,St,mt=0){if(!(b&&b.isWebGLRenderTarget)){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=x.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&St!==void 0&&(Rt=Rt[St]),Rt){ct.bindFramebuffer(w.FRAMEBUFFER,Rt);try{const Lt=b.textures[mt],$t=Lt.format,ie=Lt.type;if(b.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+mt),!kt.textureFormatReadable($t)){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(ie)){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-H&&W>=0&&W<=b.height-k&&w.readPixels(N,W,H,k,ut.convert($t),ut.convert(ie),pt)}finally{const Lt=G!==null?x.get(G).__webglFramebuffer:null;ct.bindFramebuffer(w.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(b,N,W,H,k,pt,St,mt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=x.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&St!==void 0&&(Rt=Rt[St]),Rt)if(N>=0&&N<=b.width-H&&W>=0&&W<=b.height-k){ct.bindFramebuffer(w.FRAMEBUFFER,Rt);const Lt=b.textures[mt],$t=Lt.format,ie=Lt.type;if(b.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+mt),!kt.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Dt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Dt),w.bufferData(w.PIXEL_PACK_BUFFER,pt.byteLength,w.STREAM_READ),w.readPixels(N,W,H,k,ut.convert($t),ut.convert(ie),0);const ve=G!==null?x.get(G).__webglFramebuffer:null;ct.bindFramebuffer(w.FRAMEBUFFER,ve);const Be=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await kd(w,Be,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Dt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,pt),w.deleteBuffer(Dt),w.deleteSync(Be),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,N=null,W=0){const H=Math.pow(2,-W),k=Math.floor(b.image.width*H),pt=Math.floor(b.image.height*H),St=N!==null?N.x:0,mt=N!==null?N.y:0;D.setTexture2D(b,0),w.copyTexSubImage2D(w.TEXTURE_2D,W,0,0,St,mt,k,pt),ct.unbindTexture()};const sd=w.createFramebuffer(),rd=w.createFramebuffer();this.copyTextureToTexture=function(b,N,W=null,H=null,k=0,pt=0){let St,mt,Rt,Lt,$t,ie,Dt,ve,Be;const Ne=b.isCompressedTexture?b.mipmaps[pt]:b.image;if(W!==null)St=W.max.x-W.min.x,mt=W.max.y-W.min.y,Rt=W.isBox3?W.max.z-W.min.z:1,Lt=W.min.x,$t=W.min.y,ie=W.isBox3?W.min.z:0;else{const Ze=Math.pow(2,-k);St=Math.floor(Ne.width*Ze),mt=Math.floor(Ne.height*Ze),b.isDataArrayTexture?Rt=Ne.depth:b.isData3DTexture?Rt=Math.floor(Ne.depth*Ze):Rt=1,Lt=0,$t=0,ie=0}H!==null?(Dt=H.x,ve=H.y,Be=H.z):(Dt=0,ve=0,Be=0);const ye=ut.convert(N.format),ii=ut.convert(N.type);let Pt;N.isData3DTexture?(D.setTexture3D(N,0),Pt=w.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(D.setTexture2DArray(N,0),Pt=w.TEXTURE_2D_ARRAY):(D.setTexture2D(N,0),Pt=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,N.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,N.unpackAlignment);const mi=w.getParameter(w.UNPACK_ROW_LENGTH),he=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Ai=w.getParameter(w.UNPACK_SKIP_PIXELS),Fi=w.getParameter(w.UNPACK_SKIP_ROWS),An=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Ne.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ne.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Lt),w.pixelStorei(w.UNPACK_SKIP_ROWS,$t),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ie);const Qn=b.isDataArrayTexture||b.isData3DTexture,Se=N.isDataArrayTexture||N.isData3DTexture;if(b.isDepthTexture){const Ze=x.get(b),fn=x.get(N),Ye=x.get(Ze.__renderTarget),pn=x.get(fn.__renderTarget);ct.bindFramebuffer(w.READ_FRAMEBUFFER,Ye.__webglFramebuffer),ct.bindFramebuffer(w.DRAW_FRAMEBUFFER,pn.__webglFramebuffer);for(let ts=0;ts<Rt;ts++)Qn&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,x.get(b).__webglTexture,k,ie+ts),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,x.get(N).__webglTexture,pt,Be+ts)),w.blitFramebuffer(Lt,$t,St,mt,Dt,ve,St,mt,w.DEPTH_BUFFER_BIT,w.NEAREST);ct.bindFramebuffer(w.READ_FRAMEBUFFER,null),ct.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(k!==0||b.isRenderTargetTexture||x.has(b)){const Ze=x.get(b),fn=x.get(N);ct.bindFramebuffer(w.READ_FRAMEBUFFER,sd),ct.bindFramebuffer(w.DRAW_FRAMEBUFFER,rd);for(let Ye=0;Ye<Rt;Ye++)Qn?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ze.__webglTexture,k,ie+Ye):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Ze.__webglTexture,k),Se?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,fn.__webglTexture,pt,Be+Ye):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,fn.__webglTexture,pt),k!==0?w.blitFramebuffer(Lt,$t,St,mt,Dt,ve,St,mt,w.COLOR_BUFFER_BIT,w.NEAREST):Se?w.copyTexSubImage3D(Pt,pt,Dt,ve,Be+Ye,Lt,$t,St,mt):w.copyTexSubImage2D(Pt,pt,Dt,ve,Lt,$t,St,mt);ct.bindFramebuffer(w.READ_FRAMEBUFFER,null),ct.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Se?b.isDataTexture||b.isData3DTexture?w.texSubImage3D(Pt,pt,Dt,ve,Be,St,mt,Rt,ye,ii,Ne.data):N.isCompressedArrayTexture?w.compressedTexSubImage3D(Pt,pt,Dt,ve,Be,St,mt,Rt,ye,Ne.data):w.texSubImage3D(Pt,pt,Dt,ve,Be,St,mt,Rt,ye,ii,Ne):b.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,pt,Dt,ve,St,mt,ye,ii,Ne.data):b.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,pt,Dt,ve,Ne.width,Ne.height,ye,Ne.data):w.texSubImage2D(w.TEXTURE_2D,pt,Dt,ve,St,mt,ye,ii,Ne);w.pixelStorei(w.UNPACK_ROW_LENGTH,mi),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,he),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ai),w.pixelStorei(w.UNPACK_SKIP_ROWS,Fi),w.pixelStorei(w.UNPACK_SKIP_IMAGES,An),pt===0&&N.generateMipmaps&&w.generateMipmap(Pt),ct.unbindTexture()},this.initRenderTarget=function(b){x.get(b).__webglFramebuffer===void 0&&D.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?D.setTextureCube(b,0):b.isData3DTexture?D.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?D.setTexture2DArray(b,0):D.setTexture2D(b,0),ct.unbindTexture()},this.resetState=function(){R=0,F=0,G=null,ct.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}}function o_(s,t=!1){const e=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),n=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new qe;let c=0;for(let h=0;h<s.length;++h){const d=s[h];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const d=[];for(let u=0;u<s.length;++u){const f=s[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=s[u].attributes.position.count}l.setIndex(d)}for(const h in r){const d=nh(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in a){const d=a[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){const f=[];for(let v=0;v<a[h].length;++v)f.push(a[h][v][u]);const g=nh(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function nh(s){let t,e,i,n=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new Mi(a,e,i);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<e;g++){const v=h.getComponent(u,g);o.setComponent(u+d,g,v)}}else a.set(h.array,l);l+=h.count*e}return n!==void 0&&(o.gpuType=n),o}var Ds,jh,Qh;class l_{constructor(){ni(this,Ds);this.colliders=[]}addCircle(t,e,i,n={}){const r={type:"circle",x:t,z:e,radius:i,blocksMovement:n.blocksMovement!==!1,blocksVision:n.blocksVision!==!1,cover:!!n.cover,coverQuality:n.coverQuality??1,tag:n.tag||"circle"};return this.colliders.push(r),r}addBox(t,e,i,n,r={}){const a={type:"box",minX:Math.min(t,i),maxX:Math.max(t,i),minZ:Math.min(e,n),maxZ:Math.max(e,n),blocksMovement:r.blocksMovement!==!1,blocksVision:r.blocksVision!==!1,cover:!!r.cover,coverQuality:r.coverQuality??1,tag:r.tag||"box"};return this.colliders.push(a),a}getCoverObjects(){return this.colliders.filter(t=>t.cover)}resolveCircle(t,e,i){let n=t,r=e;for(let a=0;a<2;a+=1)for(const o of this.colliders)if(o.blocksMovement)if(o.type==="circle"){const l=n-o.x,c=r-o.z,h=o.radius+i,d=l*l+c*c;if(d>=h*h)continue;const u=Math.sqrt(d)||1e-4,f=h-u;n+=l/u*f,r+=c/u*f}else{const l=Math.max(o.minX,Math.min(n,o.maxX)),c=Math.max(o.minZ,Math.min(r,o.maxZ)),h=n-l,d=r-c,u=h*h+d*d;if(u>1e-6){if(u>=i*i)continue;const f=Math.sqrt(u),g=i-f;n+=h/f*g,r+=d/f*g}else{const f=n-o.minX,g=o.maxX-n,v=r-o.minZ,p=o.maxZ-r,m=Math.min(f,g,v,p);m===f?n=o.minX-i:m===g?n=o.maxX+i:m===v?r=o.minZ-i:r=o.maxZ+i}}return{x:n,z:r}}isBlocked(t,e,i,n){const r=i-t,a=n-e;for(const o of this.colliders)if(o.blocksVision){if(o.type==="circle"){if(O(this,Ds,jh).call(this,t,e,r,a,o.x,o.z,o.radius))return!0}else if(O(this,Ds,Qh).call(this,t,e,r,a,o))return!0}return!1}}Ds=new WeakSet,jh=function(t,e,i,n,r,a,o){const l=t-r,c=e-a,h=i*i+n*n;if(h<1e-6)return!1;const d=2*(l*i+c*n),u=l*l+c*c-o*o,f=d*d-4*h*u;if(f<0)return!1;const g=Math.sqrt(f),v=(-d-g)/(2*h),p=(-d+g)/(2*h);return v>.02&&v<.98||p>.02&&p<.98},Qh=function(t,e,i,n,r){let a=.02,o=.98;for(const l of["x","z"]){const c=l==="x"?t:e,h=l==="x"?i:n,d=l==="x"?r.minX:r.minZ,u=l==="x"?r.maxX:r.maxZ;if(Math.abs(h)<1e-6){if(c<d||c>u)return!1}else{let f=(d-c)/h,g=(u-c)/h;if(f>g&&([f,g]=[g,f]),a=Math.max(a,f),o=Math.min(o,g),a>o)return!1}}return o>a};const ti={width:44,depth:34,halfW:22,halfD:17,gateCenterZ:0,gateWidth:4,outerLimitX:30},je={radius:.6,walkSpeed:4.6,sprintSpeed:8.2,acceleration:30,deceleration:22,turnSpeed:14,staminaMax:100,staminaDrain:26,staminaRegen:17,staminaRegenDelay:.55},me={radius:.5,patrolSpeed:2.3,alertSpeed:1.75,chaseSpeed:5.35,searchSpeed:2.8,turnSpeed:8,catchRadius:1.5,patrolPauseMin:.4,patrolPauseMax:1.5,distractEveryMin:8,distractEveryMax:15,distractTimeMin:3.2,distractTimeMax:5.2,searchTime:5.5,gateCheckSpeed:2.8,gateCheckDuration:4.5,gateCheckSweepSpeed:1.35,gateCheckSweepAngle:.62,gateCheckCooldownMin:20,gateCheckCooldownMax:30,gateCheckRepeatMin:14,gateCheckRepeatMax:22,investigateSpeed:2.7,investigateScanTime:2.8,investigateMaxTime:10},Ti={walkRadius:4.5,sprintRadius:12.5,walkLife:.55,sprintLife:.85,barkLife:1,kickLife:1.05,rustleLife:.8,leafRustleRadius:7.5,distractedHearing:.4,gateCheckHearing:.55,reactionCooldown:1.5},Nn={range:1.9,noiseRadius:16,cooldown:2.2,speed:4.6,upwardSpeed:3.4,gravity:12},Yr={grass:{type:"grass",label:"grass",noiseMultiplier:1,footstep:"grass",priority:0},gravel:{type:"gravel",label:"gravel path",noiseMultiplier:1.25,footstep:"gravel",priority:1},puddle:{type:"puddle",label:"puddle",noiseMultiplier:1.4,footstep:"puddle",priority:2},leaves:{type:"leaves",label:"leaf pile",noiseMultiplier:1.6,footstep:"leaves",priority:3}},Ee={radius:.42,start:{x:18,z:10.4},patrolSpeed:2.1,chaseSpeed:5.6,searchSpeed:3.2,turnSpeed:9,sightRange:9.5,hiddenSightRange:3.5,halfAngle:55*Math.PI/180,closeSense:2.2,hiddenCloseSense:1.5,catchRadius:1.05,hearingMultiplier:1.15,alertDuration:.55,lostSightTime:2.6,searchTime:3.2,sniffTimeMin:.9,sniffTimeMax:1.6,barkNoiseRadius:18,waypoints:[{x:18,z:10.4},{x:16.2,z:2},{x:19.4,z:-3.2}]},Ue={range:15,halfAngle:40*Math.PI/180,closeRange:2.6,distractedRange:5.5,checkRange:13,checkHalfAngle:30*Math.PI/180,gainBase:.55,sprintGain:1.65,hidingGain:.1,decay:.3,chaseGain:1.3,alertThreshold:.38,chaseThreshold:.98},Qe={winX:23.6,caughtOverlayDelay:1.35,winOverlayDelay:1.2,patrolRouteStandard:[{x:-7.5,z:-4.5},{x:3.5,z:-7.5},{x:13,z:-2.5},{x:10.5,z:8.5},{x:0,z:11.2},{x:-11.5,z:6.5}],patrolRouteNervous:[{x:0,z:11.2},{x:10.5,z:8.5},{x:17.2,z:4.6},{x:13,z:-2.5},{x:3.5,z:-7.5},{x:-7.5,z:-4.5},{x:-11.5,z:6.5}],gateCheckSpot:{x:18.8,z:2.6},playerStart:{x:-16,z:12.5},humanStart:{x:-7.5,z:-4.5},gate:{x:ti.halfW,z:0}},Jt={sky:10470616,fog:12046294,grass:7110460,grassDark:6057523,grassLight:8228677,dirt:10254924,wood:9132587,woodDark:6240800,woodLight:11565634,houseWall:15852226,houseTrim:7161126,roof:10699813,roofDark:8204312,window:8372438,door:8011554,leafOrange:13658666,leafRed:11549227,leafYellow:14263595,leafGreen:5204785,turkeyBody:8079914,turkeyDark:6042656,turkeyWing:9329203,turkeyTail:11558959,beak:14721594,wattle:12597547,humanShirt:10238768,humanPants:3359836,skin:14856588,gateGlow:16757575},Sn="https://en.rustfisher.com/aiwebdemos/turkeyrun2026/index.html";function yi(s,t,e){return Math.min(e,Math.max(t,s))}function pa(s,t,e){return s+(t-s)*e}function Li(s,t,e,i){return pa(s,t,1-Math.exp(-e*i))}function Kn(s,t,e,i){let n=(t-s+Math.PI)%(Math.PI*2)-Math.PI;return n<-Math.PI&&(n+=Math.PI*2),s+n*(1-Math.exp(-e*i))}function bi(s,t,e,i){return Math.hypot(s-e,t-i)}function Ft(s,t){return s+Math.random()*(t-s)}function c_(){return typeof window<"u"&&("ontouchstart"in window||navigator.maxTouchPoints>0)}function zl(){return!!(typeof window<"u"&&window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches)}const Tt={grass:new _t({color:Jt.grass}),grassDark:new _t({color:Jt.grassDark}),dirt:new _t({color:Jt.dirt}),gravel:new _t({color:9143158,flatShading:!0}),wood:new _t({color:Jt.wood}),woodDark:new _t({color:Jt.woodDark}),woodLight:new _t({color:Jt.woodLight}),wall:new _t({color:Jt.houseWall}),trim:new _t({color:Jt.houseTrim}),roof:new _t({color:Jt.roof}),roofDark:new _t({color:Jt.roofDark}),window:new _t({color:Jt.window}),door:new _t({color:Jt.door}),leafOrange:new _t({color:Jt.leafOrange,flatShading:!0}),leafRed:new _t({color:Jt.leafRed,flatShading:!0}),leafYellow:new _t({color:Jt.leafYellow,flatShading:!0}),leafGreen:new _t({color:Jt.leafGreen,flatShading:!0}),bush:new _t({color:5598001,flatShading:!0}),bushLight:new _t({color:6979386,flatShading:!0}),stone:new _t({color:10131340,flatShading:!0}),gateGlow:new Pe({color:Jt.gateGlow})};function Qt(s,t,e,i,n,r,a,o=!0,l=!0){const c=new Nt(new ue(s,t,e),i);return c.position.set(n,r,a),c.castShadow=o,c.receiveShadow=l,c}function ys(s,t,e,i,n,r,a,o){const l=new Nt(new Fe(s,t,e,i),n);return l.position.set(r,a,o),l.castShadow=!0,l.receiveShadow=!0,l}function sh(s,t="#f7e7c6",e="#5a3318"){const i=document.createElement("canvas");i.width=512,i.height=192;const n=i.getContext("2d");n.fillStyle=t,n.fillRect(0,0,i.width,i.height),n.strokeStyle=e,n.lineWidth=14,n.strokeRect(10,10,i.width-20,i.height-20),n.fillStyle=e,n.font="bold 104px Georgia, serif",n.textAlign="center",n.textBaseline="middle",n.fillText(s,i.width/2,i.height/2+6);const r=new Il(i);return r.colorSpace=ci,r.anisotropy=4,r}var se,ea,tu,eu,iu,nu,su,ru,au,ou,lu,cu,hu,uu,du,fu,pu,mu;class h_{constructor(){ni(this,se);this.scene=new nf,this.scene.background=new Bt(Jt.sky),this.scene.fog=new Pl(Jt.fog,50,95),this.collision=new l_,this.coverObjects=[],this.surfaceZones=[],this.time=0,this.gateProximity=0,this.gateFlare=0,O(this,se,tu).call(this),O(this,se,eu).call(this),O(this,se,iu).call(this),O(this,se,su).call(this),O(this,se,ru).call(this),O(this,se,au).call(this),O(this,se,ou).call(this),O(this,se,lu).call(this),O(this,se,cu).call(this),O(this,se,hu).call(this),O(this,se,uu).call(this),O(this,se,du).call(this),O(this,se,fu).call(this),O(this,se,pu).call(this),O(this,se,mu).call(this)}setGateProximity(t){this.gateProximity=Math.max(0,Math.min(1,t))}setShadowQuality(t,e){this.sun&&(this.sun.castShadow=!!t,e&&this.sun.shadow.mapSize.set(e,e),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null))}flareGate(t=1){this.gateFlare=Math.max(this.gateFlare,t)}resetGateEffects(){this.gateProximity=0,this.gateFlare=0}getSurfaceAt(t,e){let i=Yr.grass,n=-1;for(const r of this.surfaceZones)r.priority<=n||Math.hypot(t-r.x,e-r.z)<=r.radius&&(i=r,n=r.priority);return i}update(t){if(this.time+=t,this.gateFlare=Math.max(0,this.gateFlare-t*1.35),this.gateLight){const e=3+this.gateProximity*5,i=.7+this.gateProximity*1.5;this.gateLight.intensity=4.2+this.gateProximity*2.8+this.gateFlare*9+Math.sin(this.time*e)*i}this.gateSign&&(this.gateSign.rotation.z=Math.sin(this.time*1.7)*.025),this.gateFlag&&(this.gateFlag.rotation.y=Math.sin(this.time*2.2)*.25)}}se=new WeakSet,ea=function(t,e,i,n){this.surfaceZones.push({...t,x:e,z:i,radius:n})},tu=function(){const t=new ae(128,24,16),e=t.attributes.position,i=[],n=new Bt(15913891),r=new Bt(12836325),a=new Bt(8696530),o=new Bt;for(let u=0;u<e.count;u+=1){const f=Math.max(0,Math.min(1,e.getY(u)/128));f<.22?o.copy(n).lerp(r,f/.22):o.copy(r).lerp(a,(f-.22)/.78),i.push(o.r,o.g,o.b)}t.setAttribute("color",new oe(i,3));const l=new Pe({vertexColors:!0,side:pi,fog:!1,depthWrite:!1}),c=new Nt(t,l);c.position.y=-6,this.scene.add(c);const h=new Pe({color:16774109,transparent:!0,opacity:.86,fog:!1,depthWrite:!1}),d=[[-42,31,-34,1.1],[8,35,-48,1.35],[48,29,16,1],[-52,27,32,.9],[22,33,54,1.2],[-6,38,18,.8]];for(const[u,f,g,v]of d){const p=new ne;p.position.set(u,f,g),p.scale.setScalar(v);for(let m=0;m<4;m+=1){const y=new Nt(new ae(2.4-m*.25,9,7),h);y.position.set((m-1.5)*2.3,m%2*.5,m%3*.6-.5),y.scale.set(1.35,.62,.9),p.add(y)}this.scene.add(p)}},eu=function(){const t=new np(13624302,6052400,1.15);this.scene.add(t);const e=new op(16769720,2);e.position.set(16,30,18),e.castShadow=!0;const i=window.innerWidth<800?1024:2048;e.shadow.mapSize.set(i,i),e.shadow.camera.left=-30,e.shadow.camera.right=30,e.shadow.camera.top=30,e.shadow.camera.bottom=-30,e.shadow.camera.near=5,e.shadow.camera.far=70,e.shadow.camera.updateProjectionMatrix(),e.shadow.bias=-6e-4,e.shadow.normalBias=.08,e.shadow.radius=2,this.scene.add(e),this.scene.add(e.target),e.target.position.set(0,0,0),this.sun=e;const n=new lp(16771529,.35);this.scene.add(n)},iu=function(){const t=Qt(110,.4,90,Tt.grassDark,0,-.25,0,!1,!0);t.receiveShadow=!0,this.scene.add(t);const e=Qt(ti.width,.4,ti.depth,Tt.grass,0,-.18,0,!1,!0);this.scene.add(e);const i=new ki(1,10),n=[new _t({color:Jt.grassDark,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),new _t({color:Jt.grassLight,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),new _t({color:Jt.grass,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1})];for(let r=0;r<26;r+=1){const a=Ft(1.2,3.4),o=new Nt(i,n[r%n.length]);o.scale.setScalar(a),o.rotation.x=-Math.PI/2,o.rotation.z=Ft(0,Math.PI*2),o.position.set(Ft(-20.5,20.5),.036+r*7e-4,Ft(-16,16)),o.receiveShadow=!0,this.scene.add(o)}O(this,se,nu).call(this)},nu=function(){const t=new _t({color:Jt.stone,flatShading:!0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),e=[[-14,-7.2],[-12.4,-6.2],[-9.6,-5.7],[-6.8,-5.1],[-4,-4.6],[-1.2,-4.1],[1.6,-3.6],[4.4,-3.1],[7.2,-2.6],[10,-2.1],[12.8,-1.6],[15.6,-1.1],[18.4,-.6],[20.8,-.1],[23,0]];for(let i=0;i<e.length;i+=1){const[n,r]=e[i],a=.045+i*.001,o=Qt(2.35,.08,1.55,Tt.gravel,n,a,r,!1,!0);if(o.rotation.y=(i%2===0?1:-1)*.12,o.scale.x=.92+i%3*.06,this.scene.add(o),O(this,se,ea).call(this,Yr.gravel,n,r,1.35),i%3===0){const l=new Nt(new ki(.28,6),t);l.rotation.x=-Math.PI/2,l.rotation.z=Ft(0,Math.PI),l.position.set(n+Ft(-.5,.5),a+.043,r+Ft(-.35,.35)),l.receiveShadow=!0,this.scene.add(l)}}},su=function(){const t=[],e=(d,u,f,g)=>Math.atan2(f-d,g-u),i=(d,u)=>{d.applyMatrix4(u),t.push(d)},n=(d,u,f,g)=>{const v=Math.hypot(f-d,g-u),p=e(d,u,f,g),m=new de().makeRotationY(p);m.setPosition((d+f)/2,0,(u+g)/2);const y=Math.max(1,Math.round(v/2.4));for(let M=0;M<=y;M+=1){const C=-v/2+v/y*M,A=new ue(.28,2.15,.28),P=new de().makeTranslation(0,1.075,C);i(A,m.clone().multiply(P))}for(const M of[.55,1.45]){const C=new ue(.12,.2,v),A=new de().makeTranslation(0,M,0);i(C,m.clone().multiply(A))}const S=Math.floor(v/.52);for(let M=0;M<S;M+=1){const C=-v/2+.26+M*.52,A=1.55+(M%3===0?.12:0),P=new ue(.1,A,.34),_=new de().makeTranslation(0,.86,C);i(P,m.clone().multiply(_))}},r=ti.halfW,a=ti.halfD,o=ti.gateWidth/2;n(-r,-a,r,-a),n(-r,a,r,a),n(-r,-a,-r,a),n(r,-a,r,-o-.2),n(r,o+.2,r,a);const l=o_(t,!1),c=new Nt(l,Tt.wood);c.castShadow=!0,c.receiveShadow=!0,this.scene.add(c);const h=.55;this.collision.addBox(-r-h,-a-h,r+h,-a+h,{tag:"fence"}),this.collision.addBox(-r-h,a-h,r+h,a+h,{tag:"fence"}),this.collision.addBox(-r-h,-a,-r+h,a,{tag:"fence"}),this.collision.addBox(r-h,-a,r+h,-o-.2,{tag:"fence"}),this.collision.addBox(r-h,o+.2,r+h,a,{tag:"fence"})},ru=function(){const t=new ne;t.position.set(-14,0,-12),this.scene.add(t);const e=Qt(14,.45,8.4,Tt.woodDark,0,.22,0,!1,!0);t.add(e);const i=Qt(14,5,8,Tt.wall,0,2.7,0);t.add(i);const n=Tt.trim;for(const d of[-1,1])for(const u of[-1,1])t.add(Qt(.32,5.1,.32,n,d*6.9,2.7,u*3.9));for(const d of[-1,1]){const u=Qt(15.2,.34,5.1,d<0?Tt.roofDark:Tt.roof,0,5.85,d*2.02);u.rotation.x=d*.34,t.add(u)}t.add(Qt(15.4,.32,.4,Tt.roofDark,0,6.62,0));const r=new fa;r.moveTo(-4.05,5.12),r.lineTo(4.05,5.12),r.lineTo(0,6.56),r.closePath();const a=new Fl(r,{depth:.3,bevelEnabled:!1});a.translate(0,0,-.15);for(const d of[-1,1]){const u=new Nt(a,Tt.wall);u.rotation.y=Math.PI/2,u.position.set(d*6.99,0,0),u.castShadow=!0,u.receiveShadow=!0,t.add(u);const f=new Nt(new ki(.44,12),Tt.window);f.rotation.y=d*(Math.PI/2),f.position.set(d*7.16,5.85,0),t.add(f);const g=new Nt(new Jn(.48,.07,6,16),Tt.trim);g.rotation.y=d*(Math.PI/2),g.position.set(d*7.17,5.85,0),t.add(g)}const o=Qt(1,2.2,1,Tt.woodDark,4.2,6.4,-1.8);t.add(o),t.add(Qt(1.15,.2,1.15,Tt.trim,4.2,7.55,-1.8)),t.add(Qt(1.7,2.9,.14,Tt.door,.1,2.15,3.98)),t.add(Qt(2.1,.18,.2,Tt.trim,.1,3.7,4.02)),t.add(Qt(.16,2.9,.2,Tt.trim,-.8,2.15,4.02)),t.add(Qt(.16,2.9,.2,Tt.trim,1,2.15,4.02));const l=new Nt(new ae(.08,8,8),Tt.gateGlow);l.position.set(.68,2.05,4.1),t.add(l);const c=[[-4.1,2.6,4.01],[4.2,2.6,4.01],[-6.9,2.7,-.8]];for(const[d,u,f]of c){const g=Qt(2.5,1.9,.16,Tt.trim,d,u,f),v=Qt(2.1,1.5,.18,Tt.window,d,u,f+.02);t.add(g,v),t.add(Qt(.12,1.5,.2,Tt.trim,d,u,f+.04)),t.add(Qt(2.1,.12,.2,Tt.trim,d,u,f+.04))}t.add(Qt(3,.25,1.4,Tt.wood,.1,.12,4.6,!1,!0)),t.add(Qt(3.2,.2,.5,Tt.woodLight,.1,.28,5.15,!1,!0));const h=new Nt(new ae(.18,8,8),new Pe({color:16765567}));h.position.set(-1.15,3.15,4.12),t.add(h),this.collision.addBox(-21.4,-16.4,-6.6,-7.6,{tag:"house"}),this.collision.addBox(-22,-17,-6.4,-7.5,{blocksMovement:!1,tag:"house-visual"})},au=function(){const t=new ne;t.position.set(18.25,0,12.6),this.scene.add(t),t.add(Qt(2.2,1.7,2,Tt.woodLight,0,.85,0));for(const l of[.42,1.05,1.58])t.add(Qt(2.24,.055,2.04,Tt.woodDark,0,l,0,!1,!0));for(const l of[-1.04,1.04])for(const c of[-.94,.94])t.add(Qt(.14,1.78,.14,Tt.woodDark,l,.89,c));const e=new fa;e.moveTo(-.42,0),e.lineTo(-.42,.52),e.absarc(0,.52,.42,Math.PI,0,!0),e.lineTo(.42,0),e.closePath();const i=new Nt(new Ol(e,12),new Pe({color:2496527,side:Ve}));i.position.set(0,.06,-1.01),i.rotation.y=Math.PI,t.add(i);for(const l of[-1,1]){const c=Qt(2.5,.16,1.35,l<0?Tt.roofDark:Tt.roof,0,1.92,l*.55);c.rotation.x=l*.3,t.add(c)}t.add(Qt(2.6,.16,.24,Tt.roofDark,0,2.16,0));const n=sh("WOOF");t.add(Qt(1.02,.42,.07,Tt.woodDark,0,1.55,-1.02));const r=new Nt(new an(.92,.34),new Pe({map:n,side:Ve}));r.position.set(0,1.55,-1.065),r.rotation.y=Math.PI,t.add(r);const a=new Nt(new Fe(.26,.2,.12,10),Tt.stone);a.position.set(-1.75,.06,-.35),a.receiveShadow=!0,t.add(a);const o=new Nt(new ki(.2,10),new _t({color:6175266}));o.rotation.x=-Math.PI/2,o.position.set(-1.75,.125,-.35),t.add(o),this.collision.addBox(17,11.5,19.5,13.7,{cover:!0,tag:"doghouse"})},ou=function(){const t=ti.halfW,e=ti.gateCenterZ,i=ti.gateWidth/2,n=new ne;n.position.set(t,0,e),this.scene.add(n);for(const y of[-1,1]){n.add(ys(.24,.28,3.2,8,Tt.woodDark,0,1.6,y*(i+.02))),n.add(ys(.32,.36,.3,8,Tt.wood,0,3.22,y*(i+.02)));const S=new Nt(new ae(.19,10,10),new Pe({color:16761963}));S.position.set(0,2.55,y*(i+.02)),n.add(S)}n.add(Qt(.34,.4,ti.gateWidth+1.1,Tt.woodDark,0,3.42,0));const r=sh("EXIT");this.gateSign=new ne,this.gateSign.position.set(-.02,3.42,0);const a=new Nt(new an(2.6,1),new Pe({map:r,side:Ve}));a.position.set(0,-.74,0),a.rotation.y=-Math.PI/2,this.gateSign.add(a),this.gateSign.add(Qt(.07,.3,.07,Tt.woodDark,0,-.15,-.9)),this.gateSign.add(Qt(.07,.3,.07,Tt.woodDark,0,-.15,.9)),n.add(this.gateSign);const o=new ne;o.position.set(-.18,1.25,-i+.12),o.rotation.y=-1.15;const l=new ne,c=Qt(.16,1.7,1.9,Tt.wood,0,0,0);l.add(c);for(const y of[-.62,.62])l.add(Qt(.1,.16,1.65,Tt.woodDark,.1,y,0));o.add(l),n.add(o);const h=new Pe({color:16757575}),d=new Nt(new Ui(.4,.9,4),h);d.rotation.z=-Math.PI/2,d.position.set(-1.35,1.35,0),n.add(d);const u=Qt(.16,.08,ti.gateWidth-.4,Tt.gateGlow,-.4,.06,0,!1,!1);n.add(u),this.gateLight=new rp(16757575,4.5,11,2),this.gateLight.position.set(t-.6,2.7,e),this.scene.add(this.gateLight);const f=new ne;f.position.set(t+.6,0,e+3.4),f.add(ys(.05,.05,4.2,6,Tt.woodDark,0,2.1,0));const g=new Ui(.52,1.4,4,1,!0),v=new Nt(g,new _t({color:14721594,side:Ve}));v.rotation.z=-Math.PI/2,v.rotation.x=Math.PI/2,v.position.set(.75,3.5,0),this.gateFlag=v,f.add(v),this.scene.add(f);const p=new Nt(new ki(3.2,20),new _t({color:9414990,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));p.rotation.x=-Math.PI/2,p.position.set(t+4.2,.105,e),this.scene.add(p);const m=Qt(6.5,.08,3,Tt.dirt,t+3.1,.045,e,!1,!0);this.scene.add(m);for(let y=0;y<5;y+=1){const S=new Nt(new Ui(.18,.7,5),new _t({color:7178810,flatShading:!0}));S.position.set(t+Ft(1.8,6.5),.35,e+Ft(-3,3)),S.castShadow=!0,this.scene.add(S)}},lu=function(){const t=[{x:-4.2,z:5.2,scale:1.15,color:"leafOrange"},{x:7.2,z:-6.6,scale:1,color:"leafRed"},{x:15.2,z:9,scale:1.05,color:"leafYellow"},{x:-17.6,z:5.6,scale:.95,color:"leafOrange"},{x:2.2,z:13.2,scale:1,color:"leafRed"},{x:18,z:-8.6,scale:.9,color:"leafYellow"},{x:-9,z:1.8,scale:.85,color:"leafOrange"}];for(const e of t){const i=new ne;i.position.set(e.x,0,e.z),i.scale.setScalar(e.scale),this.scene.add(i);const n=ys(.28,.42,2.4,7,Tt.woodDark,0,1.2,0);i.add(n);const r=Tt[e.color],a=[[0,3.1,0,1.25],[.85,2.75,.3,.9],[-.8,2.9,-.35,.85],[.1,3.8,-.2,.8]];for(let o=0;o<a.length;o+=1){const[l,c,h,d]=a[o],u=new Nt(new bs(d,0),o%2===0?r:Tt.leafRed);u.position.set(l,c,h),u.rotation.set(Ft(0,3),Ft(0,3),Ft(0,3)),u.castShadow=!0,u.receiveShadow=!1,i.add(u)}this.collision.addCircle(e.x,e.z,.95*e.scale,{cover:!0,tag:"tree"})}},cu=function(){const t=[{x:5.4,z:3.2,scale:1},{x:-8.2,z:9.4,scale:1.1},{x:12,z:-6,scale:.95},{x:-16.5,z:-2.4,scale:.9},{x:.6,z:-8.8,scale:.85},{x:20,z:6.2,scale:.9},{x:-3,z:-1.2,scale:.8},{x:9,z:12,scale:.95}];for(const e of t){const i=new ne;i.position.set(e.x,0,e.z),i.scale.setScalar(e.scale),this.scene.add(i);const n=[[0,.5,0,.75],[.6,.4,.2,.55],[-.55,.42,-.15,.58],[.1,.85,-.2,.5],[-.2,.55,.55,.5]];for(let r=0;r<n.length;r+=1){const[a,o,l,c]=n[r],h=new Nt(new bs(c,1),r%2===0?Tt.bush:Tt.bushLight);h.position.set(a,o,l),h.rotation.set(Ft(0,3),Ft(0,3),Ft(0,3)),h.castShadow=!0,h.receiveShadow=!1,i.add(h)}this.collision.addCircle(e.x,e.z,.95*e.scale,{cover:!0,tag:"bush"})}},hu=function(){const t=(e,i,n=1,r=0)=>{const a=new ne;a.position.set(e,0,i),a.rotation.y=r,a.scale.setScalar(n),this.scene.add(a);const o=Qt(1.3,1.25,1.3,Tt.woodLight,0,.63,0);a.add(o);for(const l of[-.56,.56])a.add(Qt(.12,1.3,.12,Tt.woodDark,l,.65,-.56)),a.add(Qt(.12,1.3,.12,Tt.woodDark,l,.65,.56)),a.add(Qt(1.3,.16,.1,Tt.woodDark,0,.53,.67));return a.add(Qt(1.35,.15,1.35,Tt.woodDark,0,1.3,0)),a};t(-8.5,-7,1,.12),t(-8.45,-7,.85,-.3).position.y=1.28,t(3.6,1.4,1,-.25),t(4,1.35,.9,.4).position.y=1.28,t(17.4,4.4,.95,.6),this.collision.addBox(-9.3,-7.8,-7.7,-6.2,{cover:!0,tag:"crate"}),this.collision.addBox(2.85,.6,4.95,2.4,{cover:!0,tag:"crate"}),this.collision.addCircle(17.4,4.4,.85,{cover:!0,tag:"crate"})},uu=function(){const t=(o,l,c)=>{const h=new ne;h.position.set(o,0,l),this.scene.add(h);const d=new Nt(new Fe(.3,.24,.48,8),new _t({color:11821884,flatShading:!0}));d.position.y=.24,d.castShadow=!0,d.receiveShadow=!0,h.add(d);const u=new Nt(new Fe(.34,.34,.1,8),new _t({color:13071688,flatShading:!0}));u.position.y=.48,u.castShadow=!0,h.add(u);const f=new Nt(new Fe(.03,.04,.5,5),Tt.leafGreen);f.position.y=.72,h.add(f);for(let g=0;g<5;g+=1){const v=new Nt(new bs(.1,0),c);v.position.set(Math.cos(g/5*Math.PI*2)*.14,.94+g%2*.08,Math.sin(g/5*Math.PI*2)*.14),v.castShadow=!0,h.add(v)}},e=new _t({color:15254346,flatShading:!0}),i=new _t({color:13130319,flatShading:!0});t(-16.4,-7.2,e),t(-11.6,-7.2,i),t(-21.2,-6.2,e),t(15.2,2.2,i);const n=new ne;n.position.set(11,0,7.4),this.scene.add(n),n.add(Qt(1.5,.12,1.5,Tt.woodLight,0,1,0));for(const o of[-.6,.6])for(const l of[-.6,.6])n.add(Qt(.12,1,.12,Tt.woodDark,o,.5,l));const r=new Nt(new ae(.32,10,8),new _t({color:13920554,flatShading:!0}));r.scale.y=.75,r.position.set(11,1.2,7.4),r.castShadow=!0,n.add(r);const a=ys(.7,.7,.9,10,Tt.leafYellow,13.2,.45,7.8);a.rotation.z=Math.PI/2,this.scene.add(a);for(let o=0;o<4;o+=1){const l=new Nt(new Dl(Ft(.25,.45),0),Tt.stone);l.position.set(Ft(-19,18),.2,Ft(-15,15)),l.rotation.set(Ft(0,3),Ft(0,3),Ft(0,3)),l.castShadow=!0,l.receiveShadow=!0,this.scene.add(l)}},du=function(){const e=new an(.24,.15),i=new Float32Array(e.attributes.position.count*3).fill(1);e.setAttribute("color",new oe(i,3));const n=new _t({vertexColors:!0,side:Ve,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),r=new da(e,n,260);r.receiveShadow=!0;const a=new Ge,o=[new Bt(Jt.leafOrange),new Bt(Jt.leafRed),new Bt(Jt.leafYellow)];for(let l=0;l<260;l+=1)a.position.set(Ft(-21.3,21.3),.06+l%8*.0012+Math.random()*4e-4,Ft(-16.3,16.3)),a.rotation.set(-Math.PI/2+Ft(-.15,.15),0,Ft(0,Math.PI*2)),a.scale.setScalar(Ft(.7,1.6)),a.updateMatrix(),r.setMatrixAt(l,a.matrix),r.setColorAt(l,o[l%o.length]);r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0),this.scene.add(r)},fu=function(){const t=[{x:-12.5,z:6.2},{x:7.5,z:5},{x:16.5,z:-5.5}],e=new _t({color:7031336,flatShading:!0}),i=new an(.22,.14),n=new Float32Array(i.attributes.position.count*3).fill(1);i.setAttribute("color",new oe(n,3));const r=new _t({vertexColors:!0,side:Ve,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),a=26,o=new da(i,r,t.length*a);o.castShadow=!0,o.receiveShadow=!0;const l=new Ge,c=[new Bt(Jt.leafOrange),new Bt(Jt.leafRed),new Bt(Jt.leafYellow),new Bt(Jt.leafGreen)];let h=0;for(const d of t){const u=new Nt(new ae(1,12,7,0,Math.PI*2,0,Math.PI/2),e);u.scale.set(1.25,.4,1.05),u.position.set(d.x,.02,d.z),u.castShadow=!0,u.receiveShadow=!0,this.scene.add(u);for(let f=0;f<a;f+=1){const g=Ft(0,Math.PI*2),v=Ft(0,1.3);l.position.set(d.x+Math.cos(g)*v,.08+Math.random()*.22,d.z+Math.sin(g)*v),l.rotation.set(-Math.PI/2+Ft(-.35,.35),Ft(0,Math.PI*2),Ft(0,Math.PI*2)),l.scale.setScalar(Ft(.7,1.35)),l.updateMatrix(),o.setMatrixAt(h,l.matrix),o.setColorAt(h,c[h%c.length]),h+=1}this.collision.addCircle(d.x,d.z,1.05,{blocksMovement:!1,blocksVision:!1,cover:!0,coverQuality:.55,tag:"leafpile"}),O(this,se,ea).call(this,Yr.leaves,d.x,d.z,1.5)}o.instanceMatrix.needsUpdate=!0,o.instanceColor&&(o.instanceColor.needsUpdate=!0),this.scene.add(o)},pu=function(){const t=[{x:-6.5,z:8},{x:12,z:4.5},{x:19.8,z:2}],e=new _t({color:6258568,transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),i=new Pe({color:4612458,transparent:!0,opacity:.48,depthWrite:!1,side:Ve,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),n=new ki(1.1,18),r=new Sa(.94,1.05,18);for(const a of t){const o=new Nt(n,e);o.rotation.set(-Math.PI/2,0,Ft(0,Math.PI)),o.scale.set(1.15,.75,1),o.position.set(a.x,.055,a.z),this.scene.add(o);const l=new Nt(r,i);l.rotation.set(-Math.PI/2,0,Ft(0,Math.PI)),l.scale.set(1.15,.75,1),l.position.set(a.x,.056,a.z),this.scene.add(l),O(this,se,ea).call(this,Yr.puddle,a.x,a.z,1.25)}},mu=function(){const t=[[-27,-11],[-26,2],[-25,15],[27,-14],[29,6],[26,16],[-20,-23],[-2,-24],[16,-22],[1,24],[17,23]];for(const[e,i]of t){const n=new ne;n.position.set(e,0,i),n.scale.setScalar(Ft(.9,1.4)),this.scene.add(n),n.add(ys(.3,.5,2.6,6,Tt.woodDark,0,1.3,0));const r=[Tt.leafOrange,Tt.leafRed,Tt.leafYellow,Tt.leafGreen];for(let a=0;a<3;a+=1){const o=new Nt(new bs(Ft(.9,1.5),0),r[a%r.length]);o.position.set(Ft(-.8,.8),3.1+a*.5,Ft(-.8,.8)),o.castShadow=!0,n.add(o)}}};const ze={body:new _t({color:Jt.turkeyBody,flatShading:!0}),dark:new _t({color:Jt.turkeyDark,flatShading:!0}),wing:new _t({color:Jt.turkeyWing,flatShading:!0}),tailOrange:new _t({color:Jt.turkeyTail,flatShading:!0}),tailRed:new _t({color:Jt.leafRed,flatShading:!0}),tailYellow:new _t({color:Jt.leafYellow,flatShading:!0}),beak:new _t({color:Jt.beak,flatShading:!0}),wattle:new _t({color:Jt.wattle,flatShading:!0}),eye:new _t({color:16777215}),pupil:new Pe({color:1709072}),leg:new _t({color:13208125,flatShading:!0})};function $e(s,t,e=0,i=0,n=0){const r=new Nt(s,t);return r.position.set(e,i,n),r.castShadow=!0,r.receiveShadow=!0,r}var Ns,gu,xu;class u_{constructor(){ni(this,Ns);this.root=new ne,this.root.name="turkey",this.time=0,this.phase=0,this.crouch=0,this.panic=0,O(this,Ns,gu).call(this),O(this,Ns,xu).call(this)}setPosition(t,e){this.root.position.set(t,0,e)}setHeading(t){this.root.rotation.y=t}resetAnimation(){this.time=0,this.phase=0,this.crouch=0,this.panic=0,this.bodyRig.position.set(0,0,0),this.bodyRig.rotation.set(0,0,0),this.bodyRig.scale.set(1,1,1),this.headGroup.position.set(0,1.48,.42),this.headGroup.rotation.set(0,0,0),this.tailGroup.rotation.set(0,0,0),this.tailGroup.scale.set(1,1,1);for(const t of this.wings)t.rotation.set(0,0,0);for(const t of this.legs)t.rotation.set(0,0,0),t.position.y=.55}update(t,e={}){const{speed:i=0,hidden:n=!1,panicked:r=!1}=e;this.time+=t;const a=i>.15,o=yi((i-je.walkSpeed*.85)/(je.sprintSpeed-je.walkSpeed*.85),0,1);a&&(this.phase+=t*(2.2+i*1.55)),this.crouch=Li(this.crouch,n?1:0,9,t),this.panic=Li(this.panic,r?1:0,8,t);const l=a?Math.sin(this.phase)*(.5+o*.55):Math.sin(this.time*1.7)*.05,c=a?Math.max(0,Math.sin(this.phase))*(.25+o*.35):0,h=a?Math.max(0,-Math.sin(this.phase))*(.25+o*.35):0;this.legs[0].rotation.x=l,this.legs[1].rotation.x=-l,this.legs[0].position.y=.55+c*.1+this.crouch*.12,this.legs[1].position.y=.55+h*.1+this.crouch*.12;const d=Math.sin(this.time*2.1)*.012,u=a?Math.abs(Math.sin(this.phase))*(.04+o*.09):0,f=this.panic*Math.sin(this.time*42)*.05;this.bodyRig.position.y=d+u-this.crouch*.26+f,this.bodyRig.position.z=this.crouch*.08,this.bodyRig.rotation.x=-o*.2-this.crouch*.12+this.panic*-.08,this.bodyRig.rotation.z=Math.sin(this.time*1.5)*.015+this.panic*Math.sin(this.time*33)*.04,this.bodyRig.scale.y=pa(1,.78,this.crouch),this.headGroup.rotation.x=this.crouch*.62+Math.sin(this.time*1.3)*.05-o*.18+this.panic*Math.sin(this.time*26)*.09,this.headGroup.rotation.y=n?0:Math.sin(this.time*.7)*.16,this.headGroup.position.y=1.48-this.crouch*.12,this.tailGroup.rotation.y=Math.sin(this.time*1.8+(a?this.phase*.4:0))*(.08+o*.1),this.tailGroup.rotation.x=-this.crouch*.4+o*.1,this.tailGroup.scale.setScalar(1-this.crouch*.18);const g=Math.sin(this.phase*.5)*(.08+o*.22),v=this.panic*(.75+Math.sin(this.time*30)*.25);this.wings[0].rotation.z=-g-v-this.crouch*.25,this.wings[1].rotation.z=g+v+this.crouch*.25,this.wings[0].rotation.x=a?Math.sin(this.phase)*.1:0,this.wings[1].rotation.x=a?Math.sin(this.phase)*.1:0}playCaught(){this.panic=1}}Ns=new WeakSet,gu=function(){this.bodyRig=new ne,this.root.add(this.bodyRig);const t=$e(new ae(.62,14,10),ze.body,0,.92,.02);t.scale.set(1,1.06,1.22),this.bodyRig.add(t);const e=$e(new ae(.5,12,9),ze.dark,0,.98,-.42);e.scale.set(.98,1,.95),this.bodyRig.add(e);const i=$e(new ae(.36,10,8),ze.wing,0,.85,.4);i.scale.set(.8,.9,.6),this.bodyRig.add(i),this.tailGroup=new ne,this.tailGroup.position.set(0,1.12,-.55),this.bodyRig.add(this.tailGroup);const n=[ze.tailOrange,ze.tailRed,ze.tailYellow,ze.tailOrange,ze.tailRed];for(let d=0;d<7;d+=1){const u=(d-3)*.3,f=$e(new ae(.33,8,6),n[d%n.length],0,0,0);f.scale.set(.26,1.35-Math.abs(d-3)*.07,.16),f.position.set(Math.sin(u)*.35,.35+Math.cos(u)*.1,-.08+Math.abs(u)*.05),f.rotation.z=-u*.85,f.rotation.x=-.55,this.tailGroup.add(f)}this.headGroup=new ne,this.headGroup.position.set(0,1.48,.42),this.bodyRig.add(this.headGroup);const r=$e(new Fe(.12,.2,.5,7),ze.body,0,-.24,.02);r.rotation.x=.16,this.headGroup.add(r);const a=$e(new ae(.28,12,9),ze.body,0,.06,.12);a.scale.set(.92,1,1),this.headGroup.add(a);const o=$e(new ae(.16,8,6),ze.wattle,0,.23,.17);o.scale.set(.9,1.15,.7),this.headGroup.add(o);const l=$e(new Ui(.1,.34,6),ze.beak,0,.02,.47);l.rotation.x=Math.PI/2,this.headGroup.add(l);const c=$e(new Ui(.055,.28,6),ze.wattle,0,.24,.42);c.rotation.x=-.5,c.rotation.z=.1,this.headGroup.add(c);const h=$e(new ae(.1,8,6),ze.wattle,0,-.14,.38);h.scale.set(.7,1.5,.8),h.rotation.x=-.2,this.headGroup.add(h);for(const d of[-1,1]){const u=$e(new ae(.075,8,8),ze.eye,d*.15,.11,.29),f=$e(new ae(.038,6,6),ze.pupil,d*.16,.12,.35),g=$e(new ue(.13,.035,.06),ze.dark,d*.15,.21,.3);g.rotation.z=d*.35,this.headGroup.add(u,f,g)}this.wings=[];for(const d of[-1,1]){const u=new ne;u.position.set(d*.56,1,.02);const f=$e(new ae(.34,9,7),ze.wing,0,-.2,0);f.scale.set(.3,.85,1.15),f.rotation.z=d*.18,u.add(f),this.bodyRig.add(u),this.wings.push(u)}this.legs=[];for(const d of[-1,1]){const u=new ne;u.position.set(d*.22,.55,.02);const f=$e(new Fe(.055,.07,.5,6),ze.leg,0,-.25,0),g=$e(new ue(.2,.07,.34),ze.leg,0,-.5,.08);for(const v of[-1,0,1]){const p=$e(new ue(.055,.05,.2),ze.beak,v*.07,-.51,.26);p.rotation.y=v*.28,u.add(p)}u.add(f,g),this.root.add(u),this.legs.push(u)}this.root.traverse(d=>{d.isMesh&&(d.castShadow=!0)})},xu=function(){const t=new Nt(new ki(.7,16),new Pe({color:1910034,transparent:!0,opacity:.24,depthWrite:!1}));t.rotation.x=-Math.PI/2,t.position.y=.04,this.root.add(t)};const Te={shirt:new _t({color:Jt.humanShirt,flatShading:!0}),shirtDark:new _t({color:7285282,flatShading:!0}),pants:new _t({color:Jt.humanPants,flatShading:!0}),shoe:new _t({color:2761759,flatShading:!0}),skin:new _t({color:Jt.skin,flatShading:!0}),hair:new _t({color:5913122,flatShading:!0}),cap:new _t({color:4156242,flatShading:!0}),capDark:new _t({color:2968890,flatShading:!0}),white:new _t({color:15985367}),dark:new Pe({color:2103830}),phone:new _t({color:2369324}),phoneGlow:new Pe({color:8902911}),flashlightGlow:new Pe({color:16770720})};function fo(s,t="!"){const e=document.createElement("canvas");e.width=128,e.height=128;const i=e.getContext("2d");i.clearRect(0,0,128,128),i.fillStyle="rgba(35, 22, 10, 0.35)",i.beginPath(),i.arc(64,70,44,0,Math.PI*2),i.fill(),i.fillStyle=s,i.beginPath(),i.arc(64,62,38,0,Math.PI*2),i.fill(),i.strokeStyle="#fff4dc",i.lineWidth=7,i.stroke(),i.fillStyle="#3a230f",i.font="bold 70px Georgia, serif",i.textAlign="center",i.textBaseline="middle",i.fillText(t,64,62);const n=new Il(e);return n.colorSpace=ci,n}function we(s,t,e=0,i=0,n=0){const r=new Nt(s,t);return r.position.set(e,i,n),r.castShadow=!0,r.receiveShadow=!0,r}var Us,_u,vu;class d_{constructor(){ni(this,Us);this.root=new ne,this.root.name="human",this.time=0,this.phase=0,this.alertTextureLow=fo("#f2c744"),this.alertTextureHigh=fo("#e2482f"),this.questionTexture=fo("#e0a23a","?"),O(this,Us,_u).call(this),O(this,Us,vu).call(this)}setPosition(t,e){this.root.position.set(t,0,e)}setHeading(t){this.root.rotation.y=t}update(t,e={}){const{speed:i=0,state:n="PATROL",alert:r=0,caught:a=!1}=e;this.time+=t;const o=i>.15,l=n==="CHASE"||i>4,c=n==="DISTRACTED",h=n==="GATE_CHECK",d=n==="INVESTIGATE";o&&(this.phase+=t*(2.4+i*2));const u=o?Math.sin(this.phase)*(l?.85:.5):0;this.legs[0].rotation.x=u,this.legs[1].rotation.x=-u,this.legs[0].position.y=.86+(o?Math.max(0,Math.sin(this.phase))*.07:0),this.legs[1].position.y=.86+(o?Math.max(0,-Math.sin(this.phase))*.07:0);const f=o?Math.abs(Math.sin(this.phase))*(l?.07:.035):Math.sin(this.time*1.9)*.01;if(this.bodyRig.position.y=f,this.bodyRig.rotation.x=l?-.16:o?-.05:0,this.arms[0].rotation.x=-u*.8,this.arms[1].rotation.x=u*.8,this.arms[0].rotation.z=.12,this.arms[1].rotation.z=-.12,c)this.arms[0].rotation.x=-1.15,this.arms[0].rotation.z=-.42,this.arms[1].rotation.x=-1,this.arms[1].rotation.z=.35,this.phone.visible=!0,this.headGroup.rotation.x=.48+Math.sin(this.time*2.3)*.04,this.headGroup.rotation.y=Math.sin(this.time*.9)*.05;else if(h)this.phone.visible=!1,this.arms[0].rotation.x=-.45,this.arms[0].rotation.z=.2,this.arms[1].rotation.x=-1.25,this.arms[1].rotation.z=-.2,this.headGroup.rotation.x=.04,this.headGroup.rotation.y=0;else{this.phone.visible=!1;const m=n==="SEARCH"||d;this.headGroup.rotation.x=m?-.05:0,this.headGroup.rotation.y=m?Math.sin(this.time*3.1)*.7:Math.sin(this.time*.8)*.16}this.flashlightProp.visible=h&&!a,this.beam.visible=h&&!a,this.beamInner.visible=h&&!a,a&&(this.bodyRig.rotation.x=-.3,this.arms[0].rotation.x=-2.4,this.arms[1].rotation.x=-2.2,this.arms[0].rotation.z=-.5,this.arms[1].rotation.z=.5,this.headGroup.rotation.x=-.25),this.alertSprite.visible=r>.04&&!a&&(!d||r>=.12),this.alertSprite.material.opacity=yi(r*1.6,0,1),this.alertSprite.material.map=r>=.7?this.alertTextureHigh:this.alertTextureLow;const g=1+Math.sin(this.time*9)*.05*(r>.7?2:1),v=pa(.5,.85,r)*g;this.alertSprite.scale.set(v,v,v),this.alertSprite.position.y=pa(2.45,2.7,r),this.questionSprite.visible=d&&!a&&r<.12;const p=.56+Math.sin(this.time*5)*.04;this.questionSprite.scale.set(p,p,p),this.questionSprite.position.y=2.55+Math.sin(this.time*3.4)*.04,r>.7&&(this.bodyRig.position.y+=Math.sin(this.time*24)*.012)}}Us=new WeakSet,_u=function(){this.bodyRig=new ne,this.root.add(this.bodyRig),this.legs=[];for(const y of[-1,1]){const S=new ne;S.position.set(y*.17,.86,0);const M=we(new Fe(.1,.12,.72,7),Te.pants,0,-.36,0),C=we(new ue(.2,.13,.34),Te.shoe,0,-.76,.07);S.add(M,C),this.bodyRig.add(S),this.legs.push(S)}const t=we(new ue(.55,.24,.34),Te.pants,0,.9,0);this.bodyRig.add(t);const e=we(new ue(.72,.86,.44),Te.shirt,0,1.38,0);e.geometry.translate(0,0,0),this.bodyRig.add(e);const i=we(new ae(.3,10,8),Te.shirt,0,1.2,.13);i.scale.set(1.05,1.15,.75),this.bodyRig.add(i);for(const y of[1.15,1.4,1.65])this.bodyRig.add(we(new ue(.74,.05,.46),Te.shirtDark,0,y,0));this.bodyRig.add(we(new ue(.76,.08,.47),Te.dark,0,.99,0)),this.arms=[];for(const y of[-1,1]){const S=new ne;S.position.set(y*.46,1.7,0);const M=we(new Fe(.08,.09,.38,6),Te.shirt,0,-.2,0),C=we(new Fe(.07,.08,.36,6),Te.skin,0,-.55,0),A=we(new ae(.1,8,6),Te.skin,0,-.76,0);S.add(M,C,A),this.bodyRig.add(S),this.arms.push(S)}this.headGroup=new ne,this.headGroup.position.set(0,1.95,0),this.bodyRig.add(this.headGroup);const n=we(new ae(.27,12,10),Te.skin,0,.06,0);n.scale.set(.95,1.05,1),this.headGroup.add(n);for(const y of[-1,1])this.headGroup.add(we(new ae(.06,6,6),Te.skin,y*.27,.07,0)),this.headGroup.add(we(new ae(.045,6,6),Te.dark,y*.1,.11,.26)),this.headGroup.add(we(new ue(.08,.03,.03),Te.hair,y*.1,.18,.25));const r=we(new Ui(.06,.16,5),Te.skin,0,.03,.29);r.rotation.x=Math.PI/2,this.headGroup.add(r);const a=we(new ue(.26,.06,.06),Te.hair,0,-.07,.26);a.rotation.z=.05,this.headGroup.add(a);const o=we(new ue(.14,.025,.03),Te.dark,0,-.14,.255);this.headGroup.add(o);const l=we(new ae(.285,10,8,0,Math.PI*2,0,Math.PI*.55),Te.hair,0,.09,-.01);l.rotation.x=-.08,this.headGroup.add(l);const c=we(new Fe(.25,.28,.18,10),Te.cap,0,.27,0);this.headGroup.add(c);const h=we(new ae(.25,10,6,0,Math.PI*2,0,Math.PI/2),Te.cap,0,.36,0);h.scale.y=.4,this.headGroup.add(h);const d=we(new ue(.4,.05,.3),Te.capDark,0,.2,.28);d.rotation.x=-.1,this.headGroup.add(d),this.phone=new ne;const u=we(new ue(.13,.24,.025),Te.phone,0,0,0),f=we(new ue(.1,.19,.006),Te.phoneGlow,0,0,.016);this.phone.add(u,f),this.phone.position.set(.08,0,.16),this.phone.rotation.x=-.5,this.phone.visible=!1,this.arms[0].add(this.phone),this.flashlightProp=new ne;const g=we(new Fe(.055,.07,.28,8),Te.phone,0,0,0);g.rotation.x=Math.PI/2;const v=we(new Fe(.075,.06,.05,8),Te.flashlightGlow,0,0,.16);v.rotation.x=Math.PI/2,this.flashlightProp.add(g,v),this.flashlightProp.position.set(.4,1.34,.48),this.flashlightProp.visible=!1,this.bodyRig.add(this.flashlightProp);const p=new Pe({color:16769184,transparent:!0,opacity:.1,depthWrite:!1,side:Ve,blending:ra,fog:!1});this.beam=new Nt(new Ui(4.4,11,18,1,!0),p),this.beam.rotation.x=-Math.PI/2,this.beam.position.set(0,1.45,5.5),this.beam.visible=!1,this.beam.castShadow=!1,this.beam.renderOrder=2,this.root.add(this.beam);const m=new Pe({color:16773572,transparent:!0,opacity:.17,depthWrite:!1,side:Ve,blending:ra,fog:!1});this.beamInner=new Nt(new Ui(1.7,10.5,14,1,!0),m),this.beamInner.rotation.x=-Math.PI/2,this.beamInner.position.set(0,1.45,5.25),this.beamInner.visible=!1,this.beamInner.castShadow=!1,this.beamInner.renderOrder=2,this.root.add(this.beamInner),this.root.traverse(y=>{y.isMesh&&(y.castShadow=!0)}),this.beam.castShadow=!1,this.beamInner.castShadow=!1},vu=function(){const t=new ua({map:this.alertTextureLow,transparent:!0,depthWrite:!1});this.alertSprite=new rl(t),this.alertSprite.position.set(0,2.65,0),this.alertSprite.scale.set(.72,.72,.72),this.alertSprite.visible=!1,this.root.add(this.alertSprite);const e=new ua({map:this.questionTexture,transparent:!0,opacity:.92,depthWrite:!1});this.questionSprite=new rl(e),this.questionSprite.position.set(0,2.55,0),this.questionSprite.scale.set(.6,.6,.6),this.questionSprite.visible=!1,this.root.add(this.questionSprite)};const ai={fur:new _t({color:8017205,flatShading:!0}),furLight:new _t({color:11108954,flatShading:!0}),furDark:new _t({color:5059360,flatShading:!0}),cream:new _t({color:15127472,flatShading:!0}),collar:new _t({color:11549227,flatShading:!0}),nose:new Pe({color:2365970}),eye:new _t({color:16777215}),pupil:new Pe({color:1709072}),tag:new _t({color:14721594}),tongue:new _t({color:13130319})};function oi(s,t,e=0,i=0,n=0){const r=new Nt(s,t);return r.position.set(e,i,n),r.castShadow=!0,r.receiveShadow=!0,r}function f_(){const s=document.createElement("canvas");s.width=128,s.height=128;const t=s.getContext("2d");t.clearRect(0,0,128,128),t.fillStyle="rgba(35, 22, 10, 0.35)",t.beginPath(),t.arc(64,70,44,0,Math.PI*2),t.fill(),t.fillStyle="#d94a32",t.beginPath(),t.arc(64,62,38,0,Math.PI*2),t.fill(),t.strokeStyle="#fff4dc",t.lineWidth=7,t.stroke(),t.fillStyle="#fff4dc",t.font="bold 70px Georgia, serif",t.textAlign="center",t.textBaseline="middle",t.fillText("!",64,62);const e=new Il(s);return e.colorSpace=ci,e}var Tn,yu,Mu,Su;class p_{constructor(){ni(this,Tn);this.root=new ne,this.root.name="dog",this.time=0,this.phase=0,this.barkTimer=0,O(this,Tn,yu).call(this),O(this,Tn,Mu).call(this),O(this,Tn,Su).call(this)}setPosition(t,e){this.root.position.set(t,0,e)}setHeading(t){this.root.rotation.y=t}triggerBark(){this.barkTimer=.45}resetAnimation(){this.time=0,this.phase=0,this.barkTimer=0,this.bodyRig.position.set(0,0,0),this.bodyRig.rotation.set(0,0,0),this.headGroup.rotation.set(0,0,0),this.tailGroup.rotation.set(0,0,0);for(const t of this.legs)t.rotation.set(0,0,0);this.alertSprite&&(this.alertSprite.visible=!1)}update(t,e={}){const{speed:i=0,state:n="PATROL"}=e;this.time+=t;const r=i>.12,a=n==="CHASE"||i>4,o=n==="SNIFF",l=n==="ALERT"||n==="CHASE";r&&(this.phase+=t*(3+i*2.4)),this.barkTimer=Math.max(0,this.barkTimer-t);const c=this.barkTimer>0,h=r?Math.sin(this.phase)*(a?.75:.45):0;this.legs[0].rotation.x=h,this.legs[3].rotation.x=h,this.legs[1].rotation.x=-h,this.legs[2].rotation.x=-h;for(const g of this.legs)g.position.y=.38+(r?Math.abs(Math.sin(this.phase))*.03:0);const d=r?Math.abs(Math.sin(this.phase))*(a?.07:.035):Math.sin(this.time*2.2)*.01;this.bodyRig.position.y=d,this.bodyRig.rotation.x=a?-.12:r?-.03:0,this.bodyRig.rotation.z=r?Math.sin(this.phase)*.02:0,this.headGroup.rotation.x=o?.5:c?-.32:l?-.1:Math.sin(this.time*1.8)*.03,this.headGroup.rotation.y=l?Math.sin(this.time*2.6)*.12:Math.sin(this.time*1.1)*.08;const u=l?11:r?8:4.5;this.tailGroup.rotation.y=Math.sin(this.time*u)*(l?.55:.35),this.tailGroup.rotation.x=o?-.2:0,this.tongue.scale.y=c||a?1.4:.8;const f=yi(.5+Math.sin(this.time*8)*.03,.42,.6);this.alertSprite.scale.setScalar(f),this.alertSprite.visible=l,c&&(this.bodyRig.position.y+=Math.sin(this.time*40)*.015),n==="CAUGHT"&&(this.bodyRig.rotation.x=-.25,this.headGroup.rotation.x=-.35,this.tailGroup.rotation.y=Math.sin(this.time*14)*.7,this.alertSprite.visible=!1)}}Tn=new WeakSet,yu=function(){this.bodyRig=new ne,this.root.add(this.bodyRig);const t=oi(new ae(.45,12,9),ai.fur,0,.62,0);t.scale.set(.64,.56,1.12),this.bodyRig.add(t);const e=oi(new ae(.3,10,8),ai.cream,0,.6,.32);e.scale.set(.82,.9,.65),this.bodyRig.add(e);const i=oi(new ae(.32,10,8),ai.furLight,0,.65,-.36);i.scale.set(.85,.8,.8),this.bodyRig.add(i);const n=oi(new Jn(.23,.055,6,14),ai.collar,0,.82,.36);this.bodyRig.add(n);const r=oi(new ae(.065,8,6),ai.tag,0,.65,.49);this.bodyRig.add(r),this.headGroup=new ne,this.headGroup.position.set(0,.92,.5),this.bodyRig.add(this.headGroup);const a=oi(new ae(.24,12,9),ai.fur,0,0,0);a.scale.set(1,.95,.92),this.headGroup.add(a);const o=oi(new ue(.2,.16,.3),ai.furLight,0,-.04,.25);this.headGroup.add(o);const l=oi(new ae(.06,8,6),ai.nose,0,-.01,.41);this.headGroup.add(l);for(const d of[-1,1]){const u=oi(new ae(.045,8,6),ai.eye,d*.1,.08,.2),f=oi(new ae(.023,6,6),ai.pupil,d*.1,.08,.235),g=oi(new ue(.08,.025,.05),ai.furDark,d*.1,.15,.19);this.headGroup.add(u,f,g);const v=oi(new ae(.12,8,6),ai.furDark,d*.18,.13,-.01);v.scale.set(.55,1.15,.45),v.rotation.z=d*.32,this.headGroup.add(v)}this.tongue=oi(new ue(.07,.02,.13),ai.tongue,0,-.11,.3),this.tongue.rotation.x=.25,this.headGroup.add(this.tongue),this.tailGroup=new ne,this.tailGroup.position.set(0,.82,-.56);const c=oi(new Ui(.075,.48,6),ai.furDark,0,.18,-.08);c.rotation.x=-.7,this.tailGroup.add(c),this.bodyRig.add(this.tailGroup),this.legs=[];const h=[[-.18,.38,.28],[.18,.38,.28],[-.18,.38,-.28],[.18,.38,-.28]];for(const[d,u,f]of h){const g=new ne;g.position.set(d,u,f);const v=oi(new Fe(.06,.075,.34,6),ai.fur,0,-.17,0),p=oi(new ue(.14,.08,.18),ai.furDark,0,-.35,.03);g.add(v,p),this.root.add(g),this.legs.push(g)}},Mu=function(){const t=new ua({map:f_(),transparent:!0,depthWrite:!1});this.alertSprite=new rl(t),this.alertSprite.position.set(0,1.45,0),this.alertSprite.scale.set(.55,.55,.55),this.alertSprite.visible=!1,this.root.add(this.alertSprite)},Su=function(){const t=new Nt(new ki(.5,14),new Pe({color:1910034,transparent:!0,opacity:.22,depthWrite:!1}));t.rotation.x=-Math.PI/2,t.position.y=.04,this.root.add(t)};const rh=new L(0,.5,0);class m_{constructor(t){this.camera=t,this.offset=new L(-19,22,19),this.lookOffset=new L(0,.7,-1.4),this.focus=new L(0,0,0),this.orbitAngle=.5,this.mode="menu",this.time=0,this.shakeTime=0,this.shakeDuration=1,this.shakeStrength=0,this.zoomImpulse=0,this.reducedMotion=zl(),this.camera.position.set(16,24,24),this.camera.lookAt(rh)}addShake(t,e=.4){this.reducedMotion||(this.shakeStrength=Math.max(this.shakeStrength,t),this.shakeDuration=Math.max(.01,e),this.shakeTime=this.shakeDuration)}addZoomPunch(t=.16){this.reducedMotion||(this.zoomImpulse=Math.max(this.zoomImpulse,t))}resetEffects(){this.shakeTime=0,this.shakeStrength=0,this.zoomImpulse=0}setMode(t){this.mode=t}snapTo(t){this.focus.copy(t),this.camera.position.copy(t).add(this.offset),this.camera.lookAt(t.clone().add(this.lookOffset))}update(t,e){if(this.time+=t,this.shakeTime=Math.max(0,this.shakeTime-t),this.zoomImpulse=Li(this.zoomImpulse,0,4.5,t),this.mode==="menu"){this.orbitAngle+=t*.055;const a=27,o=new L(Math.cos(this.orbitAngle)*a,19,Math.sin(this.orbitAngle)*a);this.camera.position.lerp(o,1-Math.exp(-1.6*t));const l=rh.clone();this.focus.lerp(l,1-Math.exp(-2*t)),this.camera.lookAt(this.focus);return}this.focus.x=Li(this.focus.x,e.x,3.4,t),this.focus.z=Li(this.focus.z,e.z,3.4,t),this.focus.y=Li(this.focus.y,e.y,3.4,t);const i=1-this.zoomImpulse,n=this.focus.clone().addScaledVector(this.offset,i);this.camera.position.x=Li(this.camera.position.x,n.x,3.2,t),this.camera.position.y=Li(this.camera.position.y,n.y,3.2,t),this.camera.position.z=Li(this.camera.position.z,n.z,3.2,t);const r=this.focus.clone().add(this.lookOffset);if(this.camera.lookAt(r),this.shakeTime>0&&this.shakeStrength>0){const a=this.shakeTime/this.shakeDuration,o=this.shakeStrength*a;this.camera.position.x+=Math.sin(this.time*97)*o,this.camera.position.y+=Math.cos(this.time*83)*o*.6,this.camera.position.z+=Math.sin(this.time*71)*o*.5}}}const g_=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight","Space","KeyH","KeyE"]),Un=new L,ah=new L,x_=new L(0,1,0),Fn=new L,Js=new L;var ma,ga,xa,bu;class __{constructor(t,e,i){ni(this,xa);ni(this,ma,t=>{g_.has(t.code)&&(this.enabled&&t.preventDefault(),this.keys.add(t.code),t.code==="KeyE"&&this.enabled&&!t.repeat&&(this.interactQueued=!0))});ni(this,ga,t=>{this.keys.delete(t.code)});this.camera=t,this.collision=e,this.coverSystem=i,this.keys=new Set,this.velocity=new L,this.heading=0,this.stamina=je.staminaMax,this.hidden=!1,this.sprinting=!1,this.nearCover=!1,this.nearCoverTag=null,this.nearCoverQuality=1,this.coverDistance=1/0,this.hideQuality=1,this.hideTag=null,this.speed=0,this.regenTimer=0,this.virtual={x:0,y:0,sprint:!1,hide:!1},this.enabled=!1,this.stepTimer=0,this.exhausted=!1,this.interactQueued=!1,window.addEventListener("keydown",xr(this,ma)),window.addEventListener("keyup",xr(this,ga)),window.addEventListener("blur",()=>this.keys.clear())}setVirtualMove(t,e){this.virtual.x=t,this.virtual.y=e}setVirtualSprint(t){this.virtual.sprint=t}setVirtualHide(t){this.virtual.hide=t}queueInteract(){this.enabled&&(this.interactQueued=!0)}reset(t){this.velocity.set(0,0,0),this.heading=.6,this.stamina=je.staminaMax,this.hidden=!1,this.sprinting=!1,this.nearCover=!1,this.nearCoverTag=null,this.nearCoverQuality=1,this.hideQuality=1,this.hideTag=null,this.regenTimer=0,this.speed=0,this.stepTimer=0,this.exhausted=!1,this.interactQueued=!1,t&&(this.heading=Math.atan2(ti.gateCenterZ-t.z,ti.halfW-t.x))}get hideHeld(){return this.keys.has("Space")||this.keys.has("KeyH")||this.virtual.hide}update(t,e,i){if(!this.enabled)return this.speed=0,this.hidden=!1,this.interactQueued=!1,{speed:0,sprinting:!1,hidden:!1,moving:!1,stamina:this.stamina,interact:!1};const n=this.coverSystem.probe(i.x,i.z);this.coverDistance=n.distance,this.nearCover=n.distance<=1.05,this.nearCoverTag=n.object?.tag||null,this.nearCoverQuality=n.object?.coverQuality??1,this.hideHeld&&this.coverSystem.canHide(i.x,i.z)?(this.hidden=!0,this.hideQuality=n.object?.coverQuality??1,this.hideTag=n.object?.tag||null):(this.hidden=!1,this.hideQuality=1,this.hideTag=null);const r=O(this,xa,bu).call(this),a=r.magnitude>.05;let o=0,l=0;a&&!this.hidden&&(this.camera.getWorldDirection(Un),Un.y=0,Un.lengthSq()<1e-4&&Un.set(0,0,-1),Un.normalize(),ah.crossVectors(Un,x_).normalize(),Fn.set(0,0,0),Fn.addScaledVector(Un,r.forward),Fn.addScaledVector(ah,r.right),Fn.lengthSq()>1e-4&&(Fn.normalize(),o=Fn.x,l=Fn.z));const c=(this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||this.virtual.sprint)&&a&&!this.hidden&&!this.exhausted&&this.stamina>.5,h=c?je.sprintSpeed:je.walkSpeed;Js.set(o*h,0,l*h);const d=Js.x-this.velocity.x,u=Js.z-this.velocity.z,f=Math.hypot(d,u),v=(a?je.acceleration:je.deceleration)*t;f>v?(this.velocity.x+=d/f*v,this.velocity.z+=u/f*v):(this.velocity.x=Js.x,this.velocity.z=Js.z),this.hidden&&this.velocity.set(0,0,0),this.speed=Math.hypot(this.velocity.x,this.velocity.z),this.sprinting=c&&this.speed>je.walkSpeed*.6,this.sprinting&&c?(this.stamina=yi(this.stamina-je.staminaDrain*t,0,je.staminaMax),this.regenTimer=je.staminaRegenDelay):(this.regenTimer=Math.max(0,this.regenTimer-t),this.regenTimer<=0&&(this.stamina=yi(this.stamina+je.staminaRegen*t,0,je.staminaMax))),c&&this.stamina<=.01&&(this.exhausted=!0),this.exhausted&&this.stamina>=25&&(this.exhausted=!1);const p=i.x,m=i.z;i.x+=this.velocity.x*t,i.z+=this.velocity.z*t,i.x=yi(i.x,-30,ti.outerLimitX),i.z=yi(i.z,-17+.35,ti.halfD-.35),i.x>ti.halfW+.4&&(i.z=yi(i.z,-17-1.5,ti.halfD+1.5));const y=this.collision.resolveCircle(i.x,i.z,je.radius);if(i.x=y.x,i.z=y.z,this.speed>.15){const C=Math.atan2(this.velocity.x,this.velocity.z);this.heading=Kn(this.heading,C,je.turnSpeed,t),e.setHeading(this.heading)}bi(p,m,i.x,i.z)<this.speed*t*.15&&this.velocity.multiplyScalar(.4),this.stepTimer-=t,this.speed>.4&&this.stepTimer<=0&&(this.stepTimer=this.sprinting?.24:.36);const M=this.interactQueued;return this.interactQueued=!1,{speed:this.speed,sprinting:this.sprinting,hidden:this.hidden,moving:this.speed>.2,stamina:this.stamina,step:this.stepTimer>.2,interact:M,hideQuality:this.hideQuality,hideTag:this.hideTag,nearCoverTag:this.nearCoverTag}}}ma=new WeakMap,ga=new WeakMap,xa=new WeakSet,bu=function(){let t=0,e=0;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(t+=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(t-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(e+=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(e-=1),t+=this.virtual.y,e+=this.virtual.x;const i=Math.hypot(t,e);return i>1&&(t/=i,e/=i),{forward:t,right:e,magnitude:Math.min(1,i)}};const v_=.65;var Ht,Ie,Hn,ul,Eu,Tu,wu,Au,ia,Cu;class y_{constructor(t,e,i,n,r={}){ni(this,Ht);this.human=t,this.vision=e,this.collision=i,this.noise=n,this.callbacks=r,this.state="PATROL",this.speed=0,this.caught=!1,this.gateCheckSpot=Qe.gateCheckSpot,this.reset()}reset(){this.position={x:Qe.humanStart.x,z:Qe.humanStart.z},this.heading=.8,this.state="PATROL",this.stateTime=0,this.speed=0,this.waypointIndex=1,this.waitTimer=0,this.distractCooldown=Ft(7,11),this.distractTimer=0,this.distractionHeading=0,this.lostSightTimer=0,this.alertLowTimer=0,this.searchTimer=0,this.caught=!1,this.caughtReported=!1,this.nervous=!1,this.routeName="standard",this.gateCheckCooldown=Ft(me.gateCheckCooldownMin,me.gateCheckCooldownMax),this.gateCheckTimer=0,this.gateCheckArrived=!1,this.sinceGateCheck=0,this.investigateTarget={x:0,z:0},this.investigateTimer=0,this.investigateArrived=!1,this.investigateLookHeading=this.heading,this.lastNoiseId=this.noise?this.noise.latestId:0,this.noiseCooldown=0,this.vision.reset(),this.human.setPosition(this.position.x,this.position.z),this.human.setHeading(this.heading),this.human.update(0,{speed:0,state:"PATROL",alert:0})}update(t,e,i,n=!0){if(this.stateTime+=t,!n)return this.speed=0,this.human.setPosition(this.position.x,this.position.z),this.human.setHeading(this.heading),this.human.update(t,{speed:0,state:this.state,alert:this.vision.alert}),{state:this.state,alert:this.vision.alert,sight:this.vision.snapshot()};this.sinceGateCheck+=t;const r=this.vision.update(t,this.position,this.heading,this.state,e,i,!0),a=r.distance;if(this.noiseCooldown=Math.max(0,this.noiseCooldown-t),this.state!=="CAUGHT"&&r.alert<Ue.alertThreshold?O(this,Ht,Tu).call(this):this.noise&&(this.lastNoiseId=this.noise.latestId),this.state!=="CAUGHT")if(this.state==="PATROL")if(this.distractCooldown-=t,this.gateCheckCooldown-=t,r.alert>=Ue.chaseThreshold)O(this,Ht,Ie).call(this,"CHASE");else if(r.alert>=Ue.alertThreshold)O(this,Ht,Ie).call(this,"ALERT");else if(this.gateCheckCooldown<=0)O(this,Ht,Ie).call(this,"GATE_CHECK");else if(this.distractCooldown<=0)O(this,Ht,Ie).call(this,"DISTRACTED");else if(this.waitTimer>0)this.waitTimer-=t,this.speed=0;else{const o=O(this,Ht,Cu).call(this),l=this.nervous?me.patrolSpeed*1.1:me.patrolSpeed;if(O(this,Ht,Hn).call(this,o.x,o.z,l,t)<.85){const h=O(this,Ht,ia).call(this);this.waypointIndex=(this.waypointIndex+1)%h.length;const d=this.nervous?me.patrolPauseMax*.65:me.patrolPauseMax;this.waitTimer=Ft(me.patrolPauseMin,d)}}else if(this.state==="DISTRACTED")this.speed=0,this.heading=Kn(this.heading,this.distractionHeading,3.5,t),this.distractTimer-=t,r.alert>=.8?O(this,Ht,Ie).call(this,"ALERT"):this.distractTimer<=0&&O(this,Ht,Ie).call(this,"PATROL");else if(this.state==="ALERT"){O(this,Ht,ul).call(this,r.lastSeen.x,r.lastSeen.z,t,8);const o=r.lastSeen;bi(this.position.x,this.position.z,o.x,o.z)>2.2?O(this,Ht,Hn).call(this,o.x,o.z,me.alertSpeed,t):this.speed=0,r.alert>=Ue.chaseThreshold?O(this,Ht,Ie).call(this,"CHASE"):r.alert<.16?(this.alertLowTimer+=t,this.alertLowTimer>2&&O(this,Ht,Ie).call(this,"SEARCH")):this.alertLowTimer=0}else if(this.state==="CHASE"){const o=r.visible?e:r.lastSeen;O(this,Ht,Hn).call(this,o.x,o.z,me.chaseSpeed,t),r.visible&&O(this,Ht,ul).call(this,e.x,e.z,t,10),a<me.catchRadius&&(!i.hidden||a<1.15)?O(this,Ht,Ie).call(this,"CAUGHT"):r.visible?this.lostSightTimer=0:(this.lostSightTimer+=t,(this.lostSightTimer>2.8||r.alert<.22)&&O(this,Ht,Ie).call(this,"SEARCH"))}else if(this.state==="SEARCH"){const o=r.lastSeen,l=bi(this.position.x,this.position.z,o.x,o.z);this.searchTimer-=t,l>1.1?O(this,Ht,Hn).call(this,o.x,o.z,me.searchSpeed,t):(this.speed=0,this.heading+=Math.sin(this.stateTime*2.4)*t*1.6),r.visible&&r.alert>=Ue.alertThreshold?O(this,Ht,Ie).call(this,r.alert>=Ue.chaseThreshold?"CHASE":"ALERT"):this.searchTimer<=0&&(this.nervous&&this.sinceGateCheck>8?O(this,Ht,Ie).call(this,"GATE_CHECK"):O(this,Ht,Ie).call(this,"PATROL"))}else this.state==="GATE_CHECK"?O(this,Ht,Au).call(this,t,r):this.state==="INVESTIGATE"?O(this,Ht,wu).call(this,t,r):this.state==="CAUGHT"&&(this.speed=0);return this.human.setPosition(this.position.x,this.position.z),this.human.setHeading(this.heading),this.human.update(t,{speed:this.speed,state:this.state,alert:this.vision.alert,caught:this.state==="CAUGHT"}),{state:this.state,alert:this.vision.alert,sight:r,caught:this.caught,nervous:this.nervous,gateCheckArrived:this.gateCheckArrived}}}Ht=new WeakSet,Ie=function(t){if(this.state!==t){if(this.state==="INVESTIGATE"&&(this.noiseCooldown=Math.max(this.noiseCooldown,Ti.reactionCooldown)),this.state=t,this.stateTime=0,this.lostSightTimer=0,this.alertLowTimer=0,(t==="ALERT"||t==="CHASE")&&(this.nervous=!0,this.routeName="nervous"),t==="DISTRACTED"&&(this.distractTimer=Ft(me.distractTimeMin,me.distractTimeMax),this.distractionHeading=this.heading+Ft(2.2,4.1)),t==="SEARCH"&&(this.searchTimer=me.searchTime),t==="INVESTIGATE"&&(this.investigateTimer=me.investigateScanTime,this.investigateArrived=!1,this.investigateLookHeading=this.heading,this.speed=0),t==="GATE_CHECK"&&(this.gateCheckTimer=me.gateCheckDuration,this.gateCheckArrived=!1,this.sinceGateCheck=0,this.gateCheckCooldown=Ft(me.gateCheckRepeatMin,me.gateCheckRepeatMax),this.speed=0),t==="PATROL"){const e=O(this,Ht,ia).call(this);this.waypointIndex%=e.length,this.waitTimer=Ft(.3,.9),this.distractCooldown=Ft(me.distractEveryMin,me.distractEveryMax),this.vision.alert=Math.min(this.vision.alert,.12)}t==="CAUGHT"&&!this.caughtReported&&(this.caughtReported=!0,this.caught=!0,this.speed=0,this.callbacks.onCaught?.())}},Hn=function(t,e,i,n){const r=t-this.position.x,a=e-this.position.z,o=Math.hypot(r,a);if(o<1e-4)return this.speed=0,o;const l=Math.atan2(r,a);this.heading=Kn(this.heading,l,me.turnSpeed,n);const c=Math.min(i*n,o);let h=this.position.x+r/o*c,d=this.position.z+a/o*c,u=this.collision.resolveCircle(h,d,me.radius),f=bi(this.position.x,this.position.z,u.x,u.z);if(f<c*.25&&c>.001)for(const g of[.9,-.9,1.5,-1.5]){const v=Math.cos(g),p=Math.sin(g),m=r/o*v-a/o*p,y=r/o*p+a/o*v,S=this.position.x+m*c,M=this.position.z+y*c,C=this.collision.resolveCircle(S,M,me.radius),A=bi(this.position.x,this.position.z,C.x,C.z);A>f&&(u=C,f=A)}return this.position.x=u.x,this.position.z=u.z,this.speed=n>0?f/n:0,this.speed=Math.min(this.speed,i),o},ul=function(t,e,i,n=7){const r=Math.atan2(t-this.position.x,e-this.position.z);this.heading=Kn(this.heading,r,n,i)},Eu=function(){return this.state==="DISTRACTED"?Ti.distractedHearing:this.state==="GATE_CHECK"?Ti.gateCheckHearing:1},Tu=function(){if(!this.noise)return!1;if(!(this.state==="PATROL"||this.state==="DISTRACTED"||this.state==="GATE_CHECK")||this.noiseCooldown>0)return this.lastNoiseId=this.noise.latestId,!1;const e=this.noise.getAudibleNoise(this.position.x,this.position.z,O(this,Ht,Eu).call(this),this.lastNoiseId);return this.lastNoiseId=this.noise.latestId,e?(O(this,Ht,Ie).call(this,"INVESTIGATE"),this.investigateTarget.x=e.x,this.investigateTarget.z=e.z,this.investigateLookHeading=Math.atan2(e.x-this.position.x,e.z-this.position.z),!0):!1},wu=function(t,e){if(e.alert>=Ue.chaseThreshold){O(this,Ht,Ie).call(this,"CHASE");return}if(e.alert>=Ue.alertThreshold){O(this,Ht,Ie).call(this,"ALERT");return}const i=this.investigateTarget;if(bi(this.position.x,this.position.z,i.x,i.z)>.9){O(this,Ht,Hn).call(this,i.x,i.z,me.investigateSpeed,t),this.stateTime>me.investigateMaxTime&&O(this,Ht,Ie).call(this,"PATROL");return}this.speed=0,this.investigateArrived||(this.investigateArrived=!0),this.investigateTimer-=t,this.heading=this.investigateLookHeading+Math.sin(this.stateTime*2.2)*.65,this.investigateTimer<=0&&O(this,Ht,Ie).call(this,"PATROL")},Au=function(t,e){if(e.alert>=Ue.chaseThreshold){O(this,Ht,Ie).call(this,"CHASE");return}if(e.alert>=Ue.alertThreshold){O(this,Ht,Ie).call(this,"ALERT");return}const i=this.gateCheckSpot;if(bi(this.position.x,this.position.z,i.x,i.z)>v_){this.gateCheckArrived=!1,O(this,Ht,Hn).call(this,i.x,i.z,me.gateCheckSpeed,t),this.stateTime>me.gateCheckDuration+7&&O(this,Ht,Ie).call(this,"PATROL");return}this.gateCheckArrived=!0,this.speed=0,this.gateCheckTimer-=t;const r=Math.atan2(0-i.x,0-i.z),a=Math.sin(this.stateTime*me.gateCheckSweepSpeed)*me.gateCheckSweepAngle;this.heading=Kn(this.heading,r+a,6,t),this.gateCheckTimer<=0&&(this.nervous=!0,this.routeName="nervous",this.waypointIndex=0,O(this,Ht,Ie).call(this,"PATROL"))},ia=function(){return this.nervous?Qe.patrolRouteNervous:Qe.patrolRouteStandard},Cu=function(){return O(this,Ht,ia).call(this)[this.waypointIndex]};var Le,zi,na,Ru,Pu,Lu,Iu;class M_{constructor(t,e,i,n={}){ni(this,Le);this.dog=t,this.collision=e,this.noise=i,this.callbacks=n,this.state="PATROL",this.speed=0,this.caught=!1,this.reset()}reset(){this.position={x:Ee.start.x,z:Ee.start.z};const t=Ee.waypoints[1];this.heading=Math.atan2(t.x-this.position.x,t.z-this.position.z),this.state="PATROL",this.stateTime=0,this.speed=0,this.waypointIndex=1,this.sniffTimer=0,this.sightTimer=0,this.alertTimer=0,this.lostTimer=0,this.searchTimer=0,this.lastSeen={x:this.position.x,z:this.position.z},this.lastNoiseId=this.noise?this.noise.latestId:0,this.noiseCooldown=0,this.caught=!1,this.caughtReported=!1,this.barkCount=0,this.dog.resetAnimation(),this.dog.setPosition(this.position.x,this.position.z),this.dog.setHeading(this.heading),this.dog.update(0,{speed:0,state:"PATROL"})}update(t,e,i,n=!0){if(this.stateTime+=t,!n)return this.speed=0,this.dog.setPosition(this.position.x,this.position.z),this.dog.setHeading(this.heading),this.dog.update(t,{speed:0,state:this.state}),{state:this.state,caught:this.caught,barkCount:this.barkCount};this.noiseCooldown=Math.max(0,this.noiseCooldown-t);const r=O(this,Le,Pu).call(this,e,i,t);if(this.state!=="CAUGHT"){let a=null;if(this.state==="PATROL"||this.state==="SNIFF"||this.state==="SEARCH"?a=O(this,Le,Lu).call(this):this.noise&&(this.lastNoiseId=this.noise.latestId),this.state==="PATROL"||this.state==="SNIFF")if(r.visible&&(r.distance<=Ee.closeSense||this.sightTimer>=.22))this.lastSeen.x=e.x,this.lastSeen.z=e.z,O(this,Le,zi).call(this,"ALERT");else if(a&&this.noiseCooldown<=0)this.lastSeen.x=a.x,this.lastSeen.z=a.z,O(this,Le,zi).call(this,"ALERT");else if(this.state==="SNIFF")this.speed=0,this.sniffTimer-=t,this.sniffTimer<=0&&O(this,Le,zi).call(this,"PATROL");else{const l=Ee.waypoints[this.waypointIndex];O(this,Le,na).call(this,l.x,l.z,Ee.patrolSpeed,t)<.7&&(this.waypointIndex=(this.waypointIndex+1)%Ee.waypoints.length,O(this,Le,zi).call(this,"SNIFF"))}else if(this.state==="ALERT")this.speed=0,O(this,Le,Ru).call(this,this.lastSeen.x,this.lastSeen.z,t,10),r.visible&&(this.lastSeen.x=e.x,this.lastSeen.z=e.z),this.alertTimer-=t,this.alertTimer<=0&&O(this,Le,zi).call(this,r.visible?"CHASE":"SEARCH");else if(this.state==="CHASE"){const o=r.visible?e:this.lastSeen;O(this,Le,na).call(this,o.x,o.z,Ee.chaseSpeed,t),r.visible?(this.lastSeen.x=e.x,this.lastSeen.z=e.z,this.lostTimer=0):this.lostTimer+=t,r.distance<Ee.catchRadius&&(r.visible||r.distance<.7)?O(this,Le,Iu).call(this):!r.visible&&this.lostTimer>Ee.lostSightTime&&O(this,Le,zi).call(this,"SEARCH")}else this.state==="SEARCH"&&(bi(this.position.x,this.position.z,this.lastSeen.x,this.lastSeen.z)>.8?O(this,Le,na).call(this,this.lastSeen.x,this.lastSeen.z,Ee.searchSpeed,t):(this.speed=0,this.sniffTimer-=t),this.searchTimer-=t,r.visible&&this.sightTimer>.18?(this.lastSeen.x=e.x,this.lastSeen.z=e.z,O(this,Le,zi).call(this,"ALERT")):a&&this.noiseCooldown<=0?(this.lastSeen.x=a.x,this.lastSeen.z=a.z,O(this,Le,zi).call(this,"ALERT")):this.searchTimer<=0&&O(this,Le,zi).call(this,"PATROL"))}return this.dog.setPosition(this.position.x,this.position.z),this.dog.setHeading(this.heading),this.dog.update(t,{speed:this.speed,state:this.state}),{state:this.state,caught:this.caught,barkCount:this.barkCount,position:this.position,sight:r}}}Le=new WeakSet,zi=function(t){this.state!==t&&(this.state=t,this.stateTime=0,t==="ALERT"&&(this.alertTimer=Ee.alertDuration,this.speed=0,this.noiseCooldown=1.2,this.barkCount+=1,this.dog.triggerBark(),this.noise?.emit(this.position.x,this.position.z,Ee.barkNoiseRadius,"bark"),this.callbacks.onBark?.(this.position.x,this.position.z)),t==="SNIFF"&&(this.sniffTimer=Ft(Ee.sniffTimeMin,Ee.sniffTimeMax),this.speed=0),t==="SEARCH"&&(this.searchTimer=Ee.searchTime,this.noiseCooldown=Math.max(this.noiseCooldown,.8)),t==="CHASE"&&(this.lostTimer=0),t==="CAUGHT"&&(this.speed=0))},na=function(t,e,i,n){const r=t-this.position.x,a=e-this.position.z,o=Math.hypot(r,a);if(o<1e-4)return this.speed=0,o;this.heading=Kn(this.heading,Math.atan2(r,a),Ee.turnSpeed,n);const l=Math.min(i*n,o);let c=this.position.x+r/o*l,h=this.position.z+a/o*l,d=this.collision.resolveCircle(c,h,Ee.radius),u=bi(this.position.x,this.position.z,d.x,d.z);if(u<l*.25&&l>.001)for(const f of[.9,-.9,1.5,-1.5]){const g=Math.cos(f),v=Math.sin(f),p=r/o*g-a/o*v,m=r/o*v+a/o*g,y=this.collision.resolveCircle(this.position.x+p*l,this.position.z+m*l,Ee.radius),S=bi(this.position.x,this.position.z,y.x,y.z);S>u&&(d=y,u=S)}return this.position.x=d.x,this.position.z=d.z,this.speed=n>0?Math.min(u/n,i):0,o},Ru=function(t,e,i,n=8){this.heading=Kn(this.heading,Math.atan2(t-this.position.x,e-this.position.z),n,i)},Pu=function(t,e,i){const n=t.x-this.position.x,r=t.z-this.position.z,a=Math.hypot(n,r)||1e-4,o=e.hidden,l=e.hideQuality??1,c=o?Ee.hiddenSightRange+(1-l)*4.5:Ee.sightRange,h=o?Ee.hiddenCloseSense+(1-l)*1.4:Ee.closeSense,d=Math.sin(this.heading),u=Math.cos(this.heading),f=(n*d+r*u)/a,g=a<=h||f>Math.cos(Ee.halfAngle),v=!this.collision.isBlocked(this.position.x,this.position.z,t.x,t.z),p=g&&a<=c&&v;return p?this.sightTimer=Math.min(1,this.sightTimer+i):this.sightTimer=Math.max(0,this.sightTimer-i*2),{visible:p,distance:a,clear:v}},Lu=function(){if(!this.noise)return null;const t=this.noise.getAudibleNoise(this.position.x,this.position.z,Ee.hearingMultiplier,this.lastNoiseId);return this.lastNoiseId=this.noise.latestId,!t||t.kind==="bark"?null:t},Iu=function(){this.caught||(this.caught=!0,this.caughtReported=!0,this.state="CAUGHT",this.stateTime=0,this.speed=0,this.dog.triggerBark(),this.callbacks.onCaught?.())};class S_{constructor(t){this.collision=t,this.reset()}reset(){this.alert=0,this.visible=!1,this.distance=1/0,this.lastSeen={x:0,z:0},this.hasSeen=!1,this.hideFactor=1,this.inCone=!1}update(t,e,i,n,r,a,o=!0){if(!o)return this.snapshot();const l=r.x-e.x,c=r.z-e.z,h=Math.hypot(l,c)||1e-4;this.distance=h;let d=Ue.range,u=Ue.halfAngle;if(n==="DISTRACTED"?(d=Ue.distractedRange,u*=.55):n==="GATE_CHECK"&&(d=Ue.checkRange,u=Ue.checkHalfAngle),h<Ue.closeRange)this.inCone=!0;else{const v=Math.sin(i),p=Math.cos(i),m=(l*v+c*p)/h;this.inCone=m>Math.cos(u)}a.sprinting&&(d*=1.1);const f=h<=d,g=!this.collision.isBlocked(e.x,e.z,r.x,r.z);if(this.hideFactor=1,a.hidden){const v=a.hideQuality??1,p=Ue.hidingGain+(1-v)*.4,m=.45+(1-v)*.3;this.hideFactor=h>2.8?p:m}if(this.visible=this.inCone&&f&&g&&this.hideFactor>.05,this.visible){const v=1+(1-yi(h/Math.max(d,1),0,1))*1.1;let p=Ue.gainBase*v*this.hideFactor;a.sprinting&&(p*=Ue.sprintGain),n==="CHASE"&&(p*=Ue.chaseGain),n==="DISTRACTED"&&(p*=.45),this.alert=yi(this.alert+p*t,0,1),this.lastSeen.x=r.x,this.lastSeen.z=r.z,this.hasSeen=!0}else{const v=n==="CHASE"?Ue.decay*.55:Ue.decay;this.alert=yi(this.alert-v*t,0,1)}return this.snapshot()}boost(t){this.alert=yi(this.alert+t,0,1)}snapshot(){return{alert:this.alert,visible:this.visible,distance:this.distance,hidingScale:this.hideFactor,lastSeen:{...this.lastSeen},hasSeen:this.hasSeen}}}class b_{constructor(t){this.collisionSystem=t,this.coverObjects=t.getCoverObjects()}distanceToCover(t,e){let i=1/0,n=null;for(const r of this.coverObjects){let a;if(r.type==="circle")a=Math.hypot(t-r.x,e-r.z)-r.radius;else{const o=Math.max(r.minX,Math.min(t,r.maxX)),l=Math.max(r.minZ,Math.min(e,r.maxZ));a=Math.hypot(t-o,e-l)}a<i&&(i=a,n=r)}return{distance:Math.max(0,i),object:n}}canHide(t,e){return this.distanceToCover(t,e).distance<=1.05}probe(t,e){return this.distanceToCover(t,e)}}const Ms=96,Ss=56,Kr=Math.PI*2;function oh(){return{active:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,rx:0,ry:0,rz:0,spinX:0,spinY:0,spinZ:0,life:0,maxLife:1,size:1,gravity:0,drag:1}}var ke,ir,dl,Du,nr,sa;class E_{constructor(t){ni(this,ke);this.scene=t,this.reducedMotion=zl(),this.density=1,this.dummy=new Ge,this.leafCursor=0,this.dustCursor=0,this.activeLeafCount=0,this.activeDustCount=0,this.leafColors=[new Bt(14263595),new Bt(13658666),new Bt(11549227),new Bt(9414990)],this.puffColors=[new Bt(6979386),new Bt(5598001),new Bt(9071156)],this.leafParticles=Array.from({length:Ms},oh),this.dustParticles=Array.from({length:Ss},oh);const e=new an(.26,.17),i=new Float32Array(e.attributes.position.count*3).fill(1);e.setAttribute("color",new oe(i,3));const n=new _t({vertexColors:!0,side:Ve,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});this.leafMesh=new da(e,n,Ms),this.leafMesh.instanceMatrix.setUsage(ic),this.leafMesh.frustumCulled=!1,this.leafMesh.castShadow=!1,this.leafMesh.receiveShadow=!1,this.leafMesh.renderOrder=1,this.leafMesh.visible=!1;const r=new ae(.11,5,4),a=new Pe({color:14074778,transparent:!0,opacity:.28,depthWrite:!1});this.dustMesh=new da(r,a,Ss),this.dustMesh.instanceMatrix.setUsage(ic),this.dustMesh.frustumCulled=!1,this.dustMesh.castShadow=!1,this.dustMesh.receiveShadow=!1,this.dustMesh.renderOrder=3,this.dustMesh.visible=!1;for(let l=0;l<Ms;l+=1)this.leafMesh.setColorAt(l,this.leafColors[l%this.leafColors.length]),O(this,ke,ir).call(this,this.leafMesh,l);this.leafMesh.instanceColor&&(this.leafMesh.instanceColor.needsUpdate=!0),this.leafMesh.instanceMatrix.needsUpdate=!0;for(let l=0;l<Ss;l+=1)O(this,ke,ir).call(this,this.dustMesh,l);this.dustMesh.instanceMatrix.needsUpdate=!0,this.ringPool=[],this.ringCursor=0,this.activeRingCount=0;const o=new Sa(.965,1,40);for(let l=0;l<8;l+=1){const c=new Pe({color:15775083,transparent:!0,opacity:0,side:Ve,depthWrite:!1}),h=new Nt(o,c);h.rotation.x=-Math.PI/2,h.position.y=.09,h.visible=!1,h.renderOrder=2,h.frustumCulled=!1,t.add(h),this.ringPool.push({mesh:h,active:!1,x:0,z:0,life:0,maxLife:1,radius:1,opacity:.3})}t.add(this.leafMesh,this.dustMesh)}setDensity(t){this.density=Math.max(.2,Math.min(1,Number(t)||1))}spawnLeafBurst(t,e,i,n=32){if(this.reducedMotion)return 0;const r=Math.max(1,Math.round(n*this.density));let a=0;for(let o=0;o<r;o+=1)O(this,ke,dl).call(this,t,e,i,this.leafColors,{radialMin:1.4,radialMax:4.8,velocityYMin:2.4,velocityYMax:6.8,lifeMin:1.1,lifeMax:2,sizeMin:.8,sizeMax:1.7,gravity:-7.5,drag:.985}),a+=1;return O(this,ke,nr).call(this),a}spawnLeafPuff(t,e,i=6){if(this.reducedMotion)return 0;const n=Math.max(1,Math.round(i*this.density));for(let r=0;r<n;r+=1)O(this,ke,dl).call(this,t,.85,e,this.puffColors,{radialMin:.3,radialMax:1.3,velocityYMin:.5,velocityYMax:1.8,lifeMin:.65,lifeMax:1.2,sizeMin:.55,sizeMax:1.05,gravity:-3.2,drag:.94});return O(this,ke,nr).call(this),n}spawnNoiseRing(t,e,i,n="walk"){const r=this.ringPool[this.ringCursor];return this.ringCursor=(this.ringCursor+1)%this.ringPool.length,r.active=!0,r.x=t,r.z=e,r.radius=i,r.maxLife=n==="bark"||n==="kick"?.85:n==="sprint"?.65:.45,r.life=r.maxLife,r.opacity=n==="bark"?.42:n==="kick"?.4:n==="rustle"?.32:n==="sprint"?.38:.2,r.mesh.position.set(t,.09,e),r.mesh.scale.setScalar(.7),r.mesh.material.color.setHex(n==="bark"?14240306:n==="kick"?14729322:n==="rustle"?10123834:n==="sprint"?15764028:15124878),r.mesh.material.opacity=r.opacity,r.mesh.visible=!0,r}spawnDust(t,e,i,n,r=2){if(this.reducedMotion)return 0;const a=Math.max(1,Math.round(r*this.density));for(let o=0;o<a;o+=1){const l=this.dustCursor;this.dustCursor=(this.dustCursor+1)%Ss;const c=this.dustParticles[l];c.active=!0,c.x=t+(Math.random()-.5)*.5,c.y=.12+Math.random()*.18,c.z=e+(Math.random()-.5)*.5,c.vx=i*(.3+Math.random()*.9)+(Math.random()-.5)*.7,c.vz=n*(.3+Math.random()*.9)+(Math.random()-.5)*.7,c.vy=.35+Math.random()*.9,c.life=.35+Math.random()*.35,c.maxLife=c.life,c.size=.55+Math.random()*.6,c.gravity=-1.1,c.drag=.92}return O(this,ke,sa).call(this),a}update(t){if(!(t<=0)&&(O(this,ke,Du).call(this,t),!(this.activeLeafCount===0&&this.activeDustCount===0))){for(let e=0;e<Ms;e+=1){const i=this.leafParticles[e];if(i.active){if(i.life-=t,i.life<=0){i.active=!1;continue}i.vy+=i.gravity*t,i.vx*=i.drag,i.vy*=i.drag,i.vz*=i.drag,i.x+=i.vx*t,i.y+=i.vy*t,i.z+=i.vz*t,i.rx+=i.spinX*t,i.ry+=i.spinY*t,i.rz+=i.spinZ*t}}for(let e=0;e<Ss;e+=1){const i=this.dustParticles[e];if(i.active){if(i.life-=t,i.life<=0){i.active=!1;continue}i.vy+=i.gravity*t,i.vx*=i.drag,i.vy*=i.drag,i.vz*=i.drag,i.x+=i.vx*t,i.y+=i.vy*t,i.z+=i.vz*t}}O(this,ke,nr).call(this),O(this,ke,sa).call(this)}}clear(){for(const t of this.leafParticles)t.active=!1;for(const t of this.dustParticles)t.active=!1;for(const t of this.ringPool)t.active=!1,t.mesh.visible=!1,t.mesh.material.opacity=0;this.activeRingCount=0,O(this,ke,nr).call(this),O(this,ke,sa).call(this)}}ke=new WeakSet,ir=function(t,e){this.dummy.position.set(0,-1e3,0),this.dummy.rotation.set(0,0,0),this.dummy.scale.setScalar(0),this.dummy.updateMatrix(),t.setMatrixAt(e,this.dummy.matrix)},dl=function(t,e,i,n,r){if(this.reducedMotion)return null;const a=this.leafCursor;this.leafCursor=(this.leafCursor+1)%Ms;const o=this.leafParticles[a],l=Math.random()*Kr,c=r.radialMin+Math.random()*(r.radialMax-r.radialMin);return o.active=!0,o.x=t+(Math.random()-.5)*.5,o.y=e+(Math.random()-.3)*.4,o.z=i+(Math.random()-.5)*.5,o.vx=Math.cos(l)*c,o.vz=Math.sin(l)*c,o.vy=r.velocityYMin+Math.random()*(r.velocityYMax-r.velocityYMin),o.rx=Math.random()*Kr,o.ry=Math.random()*Kr,o.rz=Math.random()*Kr,o.spinX=(Math.random()-.5)*8,o.spinY=(Math.random()-.5)*7,o.spinZ=(Math.random()-.5)*6,o.life=r.lifeMin+Math.random()*(r.lifeMax-r.lifeMin),o.maxLife=o.life,o.size=r.sizeMin+Math.random()*(r.sizeMax-r.sizeMin),o.gravity=r.gravity,o.drag=r.drag,this.leafMesh.setColorAt(a,n[Math.floor(Math.random()*n.length)]),this.leafMesh.instanceColor&&(this.leafMesh.instanceColor.needsUpdate=!0),a},Du=function(t){let e=0;for(const i of this.ringPool){if(!i.active)continue;if(i.life-=t,i.life<=0){i.active=!1,i.mesh.visible=!1;continue}e+=1;const n=1-i.life/i.maxLife,r=1-Math.pow(1-n,3),a=.7+(i.radius-.7)*r;i.mesh.scale.setScalar(a),i.mesh.position.y=.09,i.mesh.material.opacity=i.opacity*(1-n)}this.activeRingCount=e},nr=function(){let t=0;for(let e=0;e<Ms;e+=1){const i=this.leafParticles[e];if(!i.active){O(this,ke,ir).call(this,this.leafMesh,e);continue}t+=1,this.dummy.position.set(i.x,i.y,i.z),this.dummy.rotation.set(i.rx,i.ry,i.rz);const n=.35+.65*Math.max(0,i.life/i.maxLife);this.dummy.scale.setScalar(i.size*n),this.dummy.updateMatrix(),this.leafMesh.setMatrixAt(e,this.dummy.matrix)}this.activeLeafCount=t,this.leafMesh.visible=t>0,this.leafMesh.instanceMatrix.needsUpdate=!0},sa=function(){let t=0;for(let e=0;e<Ss;e+=1){const i=this.dustParticles[e];if(!i.active){O(this,ke,ir).call(this,this.dustMesh,e);continue}t+=1,this.dummy.position.set(i.x,i.y,i.z),this.dummy.rotation.set(0,0,0);const n=.4+.6*Math.max(0,i.life/i.maxLife);this.dummy.scale.setScalar(i.size*n),this.dummy.updateMatrix(),this.dustMesh.setMatrixAt(e,this.dummy.matrix)}this.activeDustCount=t,this.dustMesh.visible=t>0,this.dustMesh.instanceMatrix.needsUpdate=!0};class T_{constructor(){this.events=[],this.latestId=0,this.lastEvent=null}reset(){this.events.length=0,this.latestId=0,this.lastEvent=null}emit(t,e,i,n="walk"){this.latestId+=1;const r=n==="sprint"?Ti.sprintLife:n==="bark"?Ti.barkLife:n==="kick"?Ti.kickLife:n==="rustle"?Ti.rustleLife:Ti.walkLife,a={id:this.latestId,x:t,z:e,radius:i,kind:n,age:0,life:r};return this.events.push(a),this.lastEvent=a,a}update(t){if(t<=0)return;let e=0;for(let i=0;i<this.events.length;i+=1){const n=this.events[i];n.age+=t,n.age<n.life&&(this.events[e]=n,e+=1)}this.events.length=e}getAudibleNoise(t,e,i=1,n=0){let r=null;for(const a of this.events)a.id<=n||Math.hypot(t-a.x,e-a.z)>a.radius*i||(!r||a.id>r.id)&&(r=a);return r}}const wi={metal:new _t({color:9213597,flatShading:!0}),metalDark:new _t({color:5858154,flatShading:!0}),can:new _t({color:12174022,flatShading:!0}),canBand:new _t({color:11879215,flatShading:!0}),wood:new _t({color:10119738,flatShading:!0}),woodDark:new _t({color:7029798,flatShading:!0})};function Ni(s,t,e=0,i=0,n=0){const r=new Nt(s,t);return r.position.set(e,i,n),r.castShadow=!0,r.receiveShadow=!0,r}function w_(){const s=new ne;s.add(Ni(new Fe(.21,.16,.34,12),wi.metal));const t=Ni(new Jn(.2,.025,4,12),wi.metalDark,0,.16,0);t.rotation.x=Math.PI/2,s.add(t);const e=Ni(new Fe(.17,.17,.03,12),wi.metalDark,0,-.16,0);s.add(e);const i=new Nt(new Jn(.18,.012,4,10,Math.PI),wi.metalDark);return i.position.set(0,.17,0),i.castShadow=!0,s.add(i),{root:s,restY:.19,radius:.2}}function A_(){const s=new ne;s.add(Ni(new ue(.36,.36,.36),wi.wood));for(const t of[-1,1])s.add(Ni(new ue(.4,.055,.4),wi.woodDark,0,t*.13,0)),s.add(Ni(new ue(.055,.4,.4),wi.woodDark,t*.13,0,0));return s.add(Ni(new ue(.4,.055,.4),wi.woodDark,0,0,0)),{root:s,restY:.2,radius:.2}}function C_(){const s=new ne;s.add(Ni(new Fe(.11,.11,.24,12),wi.can));for(const e of[-.08,.08]){const i=Ni(new Jn(.11,.012,4,12),wi.metalDark,0,e,0);i.rotation.x=Math.PI/2,s.add(i)}s.add(Ni(new Fe(.113,.113,.07,12),wi.canBand,0,.01,0));const t=Ni(new Fe(.1,.1,.012,12),wi.metalDark,0,.126,0);return s.add(t),{root:s,restY:.14,radius:.13}}const R_=[{type:"bucket",name:"water bucket",x:-14.2,z:10.4,build:w_},{type:"crate",name:"wooden crate",x:4.4,z:10.2,build:A_},{type:"can",name:"tin can",x:11.6,z:2.4,build:C_}];class P_{constructor(t,e){this.scene=t,this.collision=e,this.props=R_.map(i=>{const n=i.build(),r=n.root,a=Ft(0,Math.PI*2);return r.position.set(i.x,n.restY,i.z),r.rotation.y=a,t.add(r),{type:i.type,name:i.name,root:r,restY:n.restY,radius:n.radius,home:{x:i.x,z:i.z,rotationY:a},x:i.x,y:n.restY,z:i.z,vx:0,vy:0,vz:0,sx:0,sy:0,sz:0,tumbling:!1,cooldown:0,moveTime:0}})}reset(){for(const t of this.props)t.x=t.home.x,t.z=t.home.z,t.y=t.restY,t.vx=0,t.vy=0,t.vz=0,t.sx=0,t.sy=0,t.sz=0,t.tumbling=!1,t.cooldown=0,t.moveTime=0,t.root.position.set(t.x,t.y,t.z),t.root.rotation.set(0,t.home.rotationY,0)}getNearest(t,e){let i=null,n=1/0;for(const r of this.props){if(r.tumbling||r.cooldown>0)continue;const a=Math.hypot(t-r.x,e-r.z);a<=Nn.range&&a<n&&(i=r,n=a)}return i}kick(t,e,i){if(!t||t.tumbling||t.cooldown>0)return null;let n=t.x-e,r=t.z-i;const a=Math.hypot(n,r);if(a<.001){const o=Ft(0,Math.PI*2);n=Math.cos(o),r=Math.sin(o)}else n/=a,r/=a;return t.vx=n*Nn.speed+Ft(-.35,.35),t.vz=r*Nn.speed+Ft(-.35,.35),t.vy=Nn.upwardSpeed,t.sx=Ft(-9,9),t.sy=Ft(-5,5),t.sz=Ft(-9,9),t.tumbling=!0,t.cooldown=Nn.cooldown,t.moveTime=0,{type:t.type,name:t.name,x:t.x,z:t.z,radius:Nn.noiseRadius}}update(t){for(const e of this.props){if(e.cooldown=Math.max(0,e.cooldown-t),!e.tumbling)continue;e.moveTime+=t,e.vy-=Nn.gravity*t,e.x+=e.vx*t,e.z+=e.vz*t;const i=this.collision.resolveCircle(e.x,e.z,e.radius);(Math.abs(i.x-e.x)>1e-4||Math.abs(i.z-e.z)>1e-4)&&(e.vx*=.45,e.vz*=.45),e.x=i.x,e.z=i.z,e.y+=e.vy*t,e.y<=e.restY&&(e.y=e.restY,Math.abs(e.vy)>1?(e.vy=-e.vy*.28,e.vx*=.68,e.vz*=.68,e.sx*=.75,e.sy*=.8,e.sz*=.75):(e.vy=0,e.vx*=.55,e.vz*=.55)),e.root.rotation.x+=e.sx*t,e.root.rotation.y+=e.sy*t,e.root.rotation.z+=e.sz*t,e.root.position.set(e.x,e.y,e.z);const n=Math.hypot(e.vx,e.vz);(e.moveTime>2.8||e.y<=e.restY+.001&&n<.25&&Math.abs(e.vy)<.25)&&(e.tumbling=!1,e.vx=0,e.vy=0,e.vz=0,e.y=e.restY,e.root.position.set(e.x,e.y,e.z))}}}const Nu="turkey-run.best-run.v1";function on(s){const t=Math.max(0,Math.round(Number(s)||0)),e=Math.floor(t/60),i=t%60;return`${e}:${String(i).padStart(2,"0")}`}function L_({won:s,time:t=0,spotted:e=0,chased:i=0}){if(!s)return{letter:"F",label:"TONIGHT'S DINNER",penalty:null};const n=Math.max(0,Number(t)||0)+e*12+i*10;return n<=50?{letter:"S",label:"FREE RANGE",penalty:n}:n<=75?{letter:"A",label:"CLEAN GETAWAY",penalty:n}:n<=105?{letter:"B",label:"LUCKY BIRD",penalty:n}:{letter:"C",label:"BARELY A BIRD",penalty:n}}function I_(){try{const s=window.localStorage.getItem(Nu);if(!s)return null;const t=JSON.parse(s);return!t||typeof t.time!="number"||!Number.isFinite(t.time)||typeof t.grade!="string"?null:{time:Math.max(0,Math.round(t.time)),grade:t.grade,spotted:Math.max(0,Math.round(Number(t.spotted)||0))}}catch{return null}}function D_(s){try{return window.localStorage.setItem(Nu,JSON.stringify(s)),!0}catch{return!1}}function N_(s,t){return t?s.time!==t.time?s.time<t.time:(s.spotted||0)<(t.spotted||0):!0}const Uu="turkey-run.quality.v1",Is={high:{key:"high",label:"HIGH",maxPixelRatio:2,shadows:!0,shadowSize:4096,effectsDensity:1,description:"Up to 2× resolution · 4096 shadows · full effects"},medium:{key:"medium",label:"MEDIUM",maxPixelRatio:1.5,shadows:!0,shadowSize:2048,effectsDensity:.65,description:"Up to 1.5× resolution · 2048 shadows · reduced effects"},low:{key:"low",label:"LOW",maxPixelRatio:1,shadows:!1,shadowSize:512,effectsDensity:.35,description:"1× resolution · shadows off · minimal effects"}};function U_(){const s=window.matchMedia?.("(pointer: coarse)")?.matches??!1,t=window.innerWidth<900;return s||t?"medium":"high"}function F_(){try{const s=window.localStorage.getItem(Uu);if(s&&Is[s])return s}catch{}return U_()}function O_(s){if(!Is[s])return!1;try{return window.localStorage.setItem(Uu,s),!0}catch{return!1}}function kl(s){return String(s||"event").toLowerCase().replace(/[^a-z0-9_]/g,"_").replace(/_+/g,"_").slice(0,40)}function B_(s){const t={};if(!s||typeof s!="object")return t;for(const[e,i]of Object.entries(s)){if(i==null)continue;const n=kl(e);typeof i=="number"?Number.isFinite(i)&&(t[n]=i):typeof i=="boolean"?t[n]=i:typeof i=="string"&&(t[n]=i.slice(0,100))}return t}function Fu(){return typeof window<"u"&&window.__ANALYTICS_ENABLED__===!0}function Re(s,t={}){if(!Fu())return!1;const e=kl(s),i=B_(t);try{window.gtag?.("event",e,i)}catch{}try{window.clarity?.("event",e)}catch{}return!0}function On(s,t){if(!Fu()||!window.clarity)return!1;const e=kl(s);if(!e)return!1;try{return window.clarity("set",e,String(t??"").slice(0,80)),!0}catch{return!1}}const Bn=1200,zn=630,lh={S:{from:"#f8dd85",to:"#d9992b",border:"#8a5a12",ink:"#4a2c18"},A:{from:"#c8e59a",to:"#7aa844",border:"#4c6a2b",ink:"#26370f"},B:{from:"#b8e2ee",to:"#5d9ab5",border:"#3d6b80",ink:"#153440"},C:{from:"#e8cba2",to:"#b17a43",border:"#7d4f26",ink:"#3a210f"},F:{from:"#ee9e80",to:"#b23a22",border:"#6e1f12",ink:"#fff1e5"}};function js(s,t,e,i,n,r){const a=Math.min(r,i/2,n/2);s.beginPath(),s.moveTo(t+a,e),s.lineTo(t+i-a,e),s.quadraticCurveTo(t+i,e,t+i,e+a),s.lineTo(t+i,e+n-a),s.quadraticCurveTo(t+i,e+n,t+i-a,e+n),s.lineTo(t+a,e+n),s.quadraticCurveTo(t,e+n,t,e+n-a),s.lineTo(t,e+a),s.quadraticCurveTo(t,e,t+a,e),s.closePath()}function Zr(s,t,e,i,n,r,a=1){s.save(),s.translate(t,e),s.rotate(n),s.scale(1,.44),s.globalAlpha=a,s.fillStyle=r,s.beginPath(),s.arc(0,0,i,0,Math.PI*2),s.fill(),s.restore()}function Je(s,t,e,i,n,r){s.font=n,s.fillStyle=r,s.fillText(t,e,i)}function z_(s){const t=s.won?"freedom":"caught",e=String(s.timeText||on(s.time||0)).replace(":","m"),i=s.grade?.letter||"F";return`turkey-run-${t}-${e}s-${i}.png`}function k_(s){const t=s.timeText||on(s.time||0),e=s.grade?.letter||"F";return s.won?`I escaped Thanksgiving in ${t} with grade ${e} in Turkey Run! Play: ${Sn}`:`I got caught ${Math.max(1,Math.round(s.distance||0))} m from the gate in Turkey Run. Happy Thanksgiving... I guess. Play: ${Sn}`}function G_(s){const t=document.createElement("canvas");t.width=Bn,t.height=zn;const e=t.getContext("2d"),i=!!s.won,n=s.grade||{letter:i?"C":"F",label:i?"BARELY A BIRD":"TONIGHT'S DINNER"},r=lh[n.letter]||lh.C,a=s.timeText||on(s.time||0),o=s.spotted??0,l=s.chased??0,c=s.hides??0,h=s.distractions??0,d=Math.max(1,Math.round(s.distance||0)),u=s.best,f=e.createLinearGradient(0,0,Bn,zn);f.addColorStop(0,"#2a160a"),f.addColorStop(.55,"#4a2b14"),f.addColorStop(1,"#241309"),e.fillStyle=f,e.fillRect(0,0,Bn,zn);const g=e.createRadialGradient(610,300,40,610,300,720);g.addColorStop(0,"rgba(255, 196, 110, 0.16)"),g.addColorStop(1,"rgba(255, 196, 110, 0)"),e.fillStyle=g,e.fillRect(0,0,Bn,zn);for(let _=0;_<9;_+=1)Zr(e,30+_*151%Bn,20+_*97%zn,22+_%4*9,_*.7,_%3===0?"#d06a2a":_%3===1?"#b03a2b":"#d9a52b",.16);e.save(),e.shadowColor="rgba(0, 0, 0, 0.45)",e.shadowBlur=34,e.shadowOffsetY=14;const v=e.createLinearGradient(0,40,0,590);v.addColorStop(0,"#f9eed9"),v.addColorStop(1,"#efd9b2"),js(e,42,42,Bn-84,zn-84,28),e.fillStyle=v,e.fill(),e.restore(),js(e,42,42,Bn-84,zn-84,28),e.lineWidth=5,e.strokeStyle="#5a3418",e.stroke(),Zr(e,1112,528,44,-.6,"#d06a2a",.32),Zr(e,1082,560,28,.4,"#d9a52b",.28),Zr(e,78,548,34,1.1,"#b03a2b",.22),Je(e,"T H A N K S G I V I N G   E S C A P E",84,102,'bold 16px "Trebuchet MS", Verdana, sans-serif',"#8a5a2c"),e.save(),e.fillStyle="rgba(90, 52, 24, 0.22)",e.font='bold 80px Georgia, "Times New Roman", serif',e.fillText("TURKEY RUN",86,186),e.restore(),Je(e,"TURKEY RUN",84,184,'bold 80px Georgia, "Times New Roman", serif',"#b23a22"),Je(e,"NO ROAST FOR ME!",86,226,'italic 30px Georgia, "Times New Roman", serif',"#6b4426"),e.strokeStyle="rgba(90, 52, 24, 0.24)",e.lineWidth=2,e.beginPath(),e.moveTo(84,250),e.lineTo(706,250),e.stroke(),Je(e,i?"FREEDOM!":"HAPPY THANKSGIVING!",84,i?330:326,i?'bold 70px Georgia, "Times New Roman", serif':'bold 43px Georgia, "Times New Roman", serif',i?"#4f7a34":"#a83321"),Je(e,i?"You escaped Thanksgiving!":"You are tonight's special guest.",86,372,'24px "Trebuchet MS", Verdana, sans-serif',"#4a2c18"),Je(e,i?`Escaped in ${a} · Grade ${n.letter}`:s.caughtBy==="dog"?`The dog got you ${d} m from the gate after ${a}`:`Caught ${d} m from the gate after ${a}`,86,406,'20px "Trebuchet MS", Verdana, sans-serif',"#8a6640");const p=[["SPOTTED",o],["CHASED",l],["HIDES",c],["PHONE BREAKS",h]];for(let _=0;_<p.length;_+=1){const E=86+_*158;Je(e,p[_][0],E,466,'bold 12px "Trebuchet MS", Verdana, sans-serif',"#8a5a2c"),Je(e,String(p[_][1]),E,508,'bold 34px Georgia, "Times New Roman", serif',"#5a3418")}const m=524;js(e,84,m,614,39,10),e.fillStyle="rgba(90, 52, 24, 0.075)",e.fill(),e.strokeStyle="rgba(90, 52, 24, 0.2)",e.lineWidth=1.5,e.stroke(),Je(e,"PLAY",98,m+25,'bold 12px "Trebuchet MS", Verdana, sans-serif',"#8a5a2c"),Je(e,Sn,137,m+25,'bold 12px "Trebuchet MS", Verdana, sans-serif',"#5a3418"),e.strokeStyle="rgba(90, 52, 24, 0.22)",e.lineWidth=2,e.beginPath(),e.moveTo(752,92),e.lineTo(752,538),e.stroke(),e.save(),e.textAlign="center",Je(e,"YOUR GRADE",916,82,'bold 13px "Trebuchet MS", Verdana, sans-serif',"#8a5a2c");const S=790,M=96,C=252,A=252;e.save(),e.shadowColor="rgba(90, 52, 24, 0.3)",e.shadowBlur=18,e.shadowOffsetY=8,js(e,S,M,C,A,30);const P=e.createLinearGradient(S,M,S+C,M+A);return P.addColorStop(0,r.from),P.addColorStop(1,r.to),e.fillStyle=P,e.fill(),e.restore(),js(e,S,M,C,A,30),e.lineWidth=5,e.strokeStyle=r.border,e.stroke(),e.fillStyle=r.ink,e.textAlign="center",e.textBaseline="middle",e.font='bold 156px Georgia, "Times New Roman", serif',e.fillText(n.letter,S+C/2,M+112),e.font='bold 16px "Trebuchet MS", Verdana, sans-serif',e.fillText(n.label,S+C/2,M+212),e.textBaseline="alphabetic",Je(e,a,916,424,'bold 64px Georgia, "Times New Roman", serif',"#5a3418"),e.textAlign="center",Je(e,i?"ESCAPE TIME":"TIME UNTIL DINNER",916,452,'bold 13px "Trebuchet MS", Verdana, sans-serif',"#8a5a2c"),s.newBest?Je(e,"NEW BEST RUN!",916,500,'bold 20px "Trebuchet MS", Verdana, sans-serif',"#b23a22"):u?Je(e,`BEST RUN ${on(u.time)} · ${u.grade}`,916,500,'bold 18px "Trebuchet MS", Verdana, sans-serif',"#8a6640"):Je(e,"FIRST RECORDED RUN",916,500,'bold 16px "Trebuchet MS", Verdana, sans-serif',"#8a6640"),Je(e,i?"THE HUMAN IS STILL YELLING AT HIS PHONE.":"THE OVEN IS PREHEATED.",916,530,'13px "Trebuchet MS", Verdana, sans-serif',"#96744a"),e.restore(),t}var _a,Ou;class H_{constructor(t={}){ni(this,_a);this.callbacks=t,this.toastTimer=null;const e=window.matchMedia?.("(pointer: coarse)")?.matches??!1;this.mobile=c_()&&e,this.hud=document.getElementById("hud"),this.startScreen=document.getElementById("start-screen"),this.pauseScreen=document.getElementById("pause-screen"),this.endScreen=document.getElementById("end-screen"),this.mobileControls=document.getElementById("mobile-controls"),this.dangerVignette=document.getElementById("danger-vignette"),this.screenFlash=document.getElementById("screen-flash"),this.dangerLevel="safe",this.startHistoryBtn=document.getElementById("history-btn"),this.endHistoryBtn=document.getElementById("end-history-btn"),this.pauseHistoryBtn=document.getElementById("pause-history-btn"),this.historyScreen=document.getElementById("history-screen"),this.historyList=document.getElementById("history-list"),this.historyCloseBtn=document.getElementById("history-close-btn"),this.endShareBtn=document.getElementById("end-share-btn"),this.shareScreen=document.getElementById("share-screen"),this.shareImage=document.getElementById("share-image"),this.shareDownloadBtn=document.getElementById("share-download-btn"),this.shareNativeBtn=document.getElementById("share-native-btn"),this.shareCopyBtn=document.getElementById("share-copy-btn"),this.shareUrlText=document.getElementById("share-url-text"),this.shareCloseBtn=document.getElementById("share-close-btn"),this.copyResetTimer=null,this.startQualityBtn=document.getElementById("quality-btn"),this.pauseQualityBtn=document.getElementById("pause-quality-btn"),this.qualityScreen=document.getElementById("quality-screen"),this.qualityOptions=[...document.querySelectorAll(".quality-option")],this.qualityCloseBtn=document.getElementById("quality-close-btn"),this.perfFps=document.getElementById("perf-fps"),this.perfCalls=document.getElementById("perf-calls"),this.perfRatio=document.getElementById("perf-ratio"),this.history=[],this.historyOpen=!1,this.shareOpen=!1,this.qualityOpen=!1,this.qualityKey="high",this.lastResult=null,this.bestRun=null,this.shareCanvas=null,this.shareBlob=null,this.shareFileName="",this.shareText="",this.alertCard=document.getElementById("alert-card"),this.alertTitle=document.getElementById("alert-title"),this.alertSub=document.getElementById("alert-sub"),this.objectiveDist=document.getElementById("objective-dist"),this.staminaFill=document.getElementById("stamina-fill"),this.staminaValue=document.getElementById("stamina-value"),this.hideBadge=document.getElementById("hide-badge"),this.prompt=document.getElementById("prompt"),this.kickPrompt=document.getElementById("kick-prompt"),this.mobileKickBtn=document.getElementById("mobile-kick"),this.toastEl=document.getElementById("toast"),this.endEyebrow=document.getElementById("end-eyebrow"),this.endTitle=document.getElementById("end-title"),this.endSubtitle=document.getElementById("end-subtitle"),this.endDetail=document.getElementById("end-detail"),this.bestRunValue=document.getElementById("best-run-value"),this.gradeBadge=document.getElementById("grade-badge"),this.gradeLetter=document.getElementById("grade-letter"),this.gradeLabel=document.getElementById("grade-label"),this.resultTimeValue=document.getElementById("result-time-value"),this.resultTimeLabel=document.getElementById("result-time-label"),this.statSpotted=document.getElementById("stat-spotted"),this.statChased=document.getElementById("stat-chased"),this.statHides=document.getElementById("stat-hides"),this.statDistractions=document.getElementById("stat-distractions"),this.recordLine=document.getElementById("record-line"),this.muteButtons=[document.getElementById("mute-btn"),document.getElementById("pause-mute-btn"),document.getElementById("end-mute-btn")],this.mobile&&document.body.classList.add("mobile"),this.mobileKickBtn?.addEventListener("pointerdown",i=>{i.preventDefault(),this.callbacks.onVirtualInteract?.()}),document.getElementById("start-btn")?.addEventListener("click",()=>this.callbacks.onStart?.()),document.getElementById("resume-btn")?.addEventListener("click",()=>this.callbacks.onResume?.()),document.getElementById("pause-restart-btn")?.addEventListener("click",()=>this.callbacks.onRestart?.()),document.getElementById("retry-btn")?.addEventListener("click",()=>this.callbacks.onRestart?.()),document.getElementById("pause-btn")?.addEventListener("click",()=>this.callbacks.onPause?.());for(const i of[this.startHistoryBtn,this.endHistoryBtn,this.pauseHistoryBtn])i?.addEventListener("click",()=>this.openHistory());this.historyCloseBtn?.addEventListener("click",()=>this.closeHistory()),this.endShareBtn?.addEventListener("click",()=>this.openShareCard()),this.shareCloseBtn?.addEventListener("click",()=>this.closeShareCard()),this.shareDownloadBtn?.addEventListener("click",()=>this.downloadShareCard()),this.shareNativeBtn?.addEventListener("click",()=>this.shareNative()),this.shareCopyBtn?.addEventListener("click",()=>this.copyGameLink()),this.startQualityBtn?.addEventListener("click",()=>this.openQuality()),this.pauseQualityBtn?.addEventListener("click",()=>this.openQuality()),this.qualityCloseBtn?.addEventListener("click",()=>this.closeQuality());for(const i of this.qualityOptions)i.addEventListener("click",()=>{this.callbacks.onQualitySelect?.(i.dataset.quality)});for(const i of document.querySelectorAll(".blog-link"))i.addEventListener("click",()=>{Re("blog_open",{source:i.dataset.blogSource||"unknown"})});for(const i of this.muteButtons)i?.addEventListener("click",()=>{const n=this.callbacks.onToggleMute?.();this.setMuted(n)});O(this,_a,Ou).call(this)}showStart(){this.startScreen.classList.remove("hidden")}hideStart(){this.startScreen.classList.add("hidden")}setHudVisible(t){this.hud.classList.toggle("hidden",!t),this.mobileControls&&this.mobileControls.classList.toggle("hidden",!t),t||(this.dangerLevel="safe",this.dangerVignette.className="",this.kickPrompt?.classList.add("hidden"),this.mobileKickBtn?.classList.add("hidden"))}setDangerLevel(t){this.dangerLevel!==t&&(this.dangerLevel=t,this.dangerVignette.className=t==="safe"?"":t)}flash(t){this.screenFlash&&(this.screenFlash.className="",this.screenFlash.offsetWidth,this.screenFlash.classList.add(t))}resetTransientEffects(){this.setDangerLevel("safe"),this.screenFlash&&(this.screenFlash.className=""),this.closeHistory(),this.closeShareCard(),this.closeQuality(),this.lastResult=null}showPause(){this.pauseScreen.classList.remove("hidden")}hidePause(){this.pauseScreen.classList.add("hidden")}setBestRun(t){this.bestRun=t,this.bestRunValue&&(t?(this.bestRunValue.textContent=`${on(t.time)} · ${t.grade}`,this.bestRunValue.classList.remove("empty")):(this.bestRunValue.textContent="No escape yet",this.bestRunValue.classList.add("empty")),this.historyOpen&&this.renderHistory())}setHistory(t){this.history=Array.isArray(t)?t:[];const e=this.history.length;this.startHistoryBtn&&(this.startHistoryBtn.textContent=e>0?`RUN HISTORY (${e})`:"RUN HISTORY"),this.endHistoryBtn&&(this.endHistoryBtn.textContent=e>0?`HISTORY (${e})`:"HISTORY"),this.pauseHistoryBtn&&(this.pauseHistoryBtn.textContent=e>0?`HISTORY (${e})`:"HISTORY"),this.historyOpen&&this.renderHistory()}formatHistoryDate(t){if(!Number.isFinite(t))return"";const e=new Date(t);return Number.isNaN(e.getTime())?"":e.toLocaleDateString(void 0,{month:"short",day:"numeric"})}renderHistory(){if(this.historyList){if(this.historyList.replaceChildren(),this.history.length===0){const t=document.createElement("div");t.className="history-empty",t.textContent="No runs yet. The record book is empty.",this.historyList.append(t);return}for(const t of this.history){const e=document.createElement("div");e.className="history-row";const i=document.createElement("span");i.className="history-grade",i.dataset.grade=t.grade||"F",i.textContent=t.grade||"F";const n=document.createElement("div");n.className="history-main";const r=document.createElement("div");r.className="history-title-row";const a=document.createElement("span");if(a.className="history-outcome",t.won?a.textContent="Escaped Thanksgiving!":t.caughtBy==="dog"?a.textContent=`The dog caught you ${Math.max(1,Math.round(t.distance||0))} m from the gate`:a.textContent=`Caught ${Math.max(1,Math.round(t.distance||0))} m from the gate`,r.append(a),t.won&&this.bestRun&&Math.round(t.time)===this.bestRun.time&&t.grade===this.bestRun.grade){const d=document.createElement("span");d.className="history-best",d.textContent="BEST",r.append(d)}const l=[this.formatHistoryDate(t.at)];t.spotted&&l.push(`${t.spotted} spotted`),t.chased&&l.push(`${t.chased} chased`),t.hides&&l.push(`${t.hides} hides`);const c=document.createElement("span");c.className="history-meta",c.textContent=l.filter(Boolean).join(" · "),n.append(r,c);const h=document.createElement("span");h.className="history-time",h.textContent=on(t.time),e.append(i,n,h),this.historyList.append(e)}}}openHistory(){Re("history_open",{runs:this.history.length}),this.renderHistory(),this.historyOpen=!0,this.historyScreen?.classList.remove("hidden")}closeHistory(){this.historyOpen=!1,this.historyScreen?.classList.add("hidden")}isOverlayOpen(){return this.historyOpen||this.shareOpen||this.qualityOpen}setQuality(t){const e=Is[t]||Is.high;this.qualityKey=e.key;const i=`GRAPHICS: ${e.label}`;this.startQualityBtn&&(this.startQualityBtn.textContent=i),this.pauseQualityBtn&&(this.pauseQualityBtn.textContent=i);for(const n of this.qualityOptions)n.classList.toggle("selected",n.dataset.quality===e.key)}openQuality(){Re("quality_panel_open",{preset:this.qualityKey}),this.qualityOpen=!0,this.setQuality(this.qualityKey),this.qualityScreen?.classList.remove("hidden")}closeQuality(){this.qualityOpen=!1,this.qualityScreen?.classList.add("hidden")}setPerformanceStats({fps:t=0,drawCalls:e=0,pixelRatio:i=1}={}){this.perfFps&&(this.perfFps.textContent=String(Math.max(0,Math.round(t)))),this.perfCalls&&(this.perfCalls.textContent=String(Math.max(0,Math.round(e)))),this.perfRatio&&(this.perfRatio.textContent=`${Number(i).toFixed(2)}×`)}openShareCard(){if(!this.lastResult)return;Re("share_card_open",{won:!!this.lastResult.won,grade:this.lastResult.grade?.letter||"F"});const t={...this.lastResult,best:this.lastResult.best||this.bestRun},e=G_(t);this.shareCanvas=e,this.shareFileName=z_(t),this.shareText=k_(t),this.shareBlob=null,this.shareOpen=!0,this.shareNativeBtn?.classList.add("hidden"),this.shareUrlText&&(this.shareUrlText.textContent=Sn),this.shareCopyBtn&&(this.shareCopyBtn.textContent="COPY LINK"),this.copyResetTimer&&clearTimeout(this.copyResetTimer),this.shareImage&&(this.shareImage.alt=t.won?"Turkey Run escape result card":"Turkey Run caught result card",this.shareImage.src=e.toDataURL("image/png")),this.shareScreen?.classList.remove("hidden"),e.toBlob(i=>{if(this.shareOpen&&(this.shareBlob=i,!!i))try{const n=new File([i],this.shareFileName,{type:"image/png"}),r=!!(navigator.canShare?.({files:[n]})&&navigator.share);this.shareNativeBtn?.classList.toggle("hidden",!r)}catch{this.shareNativeBtn?.classList.add("hidden")}},"image/png")}closeShareCard(){this.shareOpen=!1,this.shareScreen?.classList.add("hidden"),this.shareImage&&this.shareImage.removeAttribute("src"),this.shareNativeBtn?.classList.add("hidden"),this.copyResetTimer&&clearTimeout(this.copyResetTimer),this.shareCopyBtn&&(this.shareCopyBtn.textContent="COPY LINK"),this.shareCanvas=null,this.shareBlob=null,this.shareFileName=""}downloadShareCard(){if(!this.shareCanvas)return;Re("share_card_download",{won:!!this.lastResult?.won,grade:this.lastResult?.grade?.letter||"F"});const t=this.shareFileName||"turkey-run-result.png",e=document.createElement("a");if(e.download=t,e.rel="noopener",this.shareBlob){const i=URL.createObjectURL(this.shareBlob);e.href=i,document.body.appendChild(e),e.click(),e.remove(),setTimeout(()=>URL.revokeObjectURL(i),2e3)}else e.href=this.shareCanvas.toDataURL("image/png"),document.body.appendChild(e),e.click(),e.remove()}async copyGameLink(){let t=!1;try{await navigator.clipboard.writeText(Sn),t=!0}catch{try{const e=document.createElement("textarea");e.value=Sn,e.setAttribute("readonly",""),e.style.position="fixed",e.style.opacity="0",document.body.appendChild(e),e.select(),t=document.execCommand("copy"),e.remove()}catch{t=!1}}this.shareCopyBtn&&(this.shareCopyBtn.textContent=t?"COPIED!":"COPY FAILED",this.copyResetTimer&&clearTimeout(this.copyResetTimer),this.copyResetTimer=setTimeout(()=>{this.shareCopyBtn&&(this.shareCopyBtn.textContent="COPY LINK")},1800)),t&&Re("share_link_copy",{source:"share_panel"})}async shareNative(){if(!(!this.shareBlob||!navigator.share))try{const t=new File([this.shareBlob],this.shareFileName||"turkey-run-result.png",{type:"image/png"});if(!navigator.canShare?.({files:[t]}))return;await navigator.share({files:[t],title:"Turkey Run",text:this.shareText||`Play Turkey Run: ${Sn}`,url:Sn}),Re("share_card_shared",{won:!!this.lastResult?.won,grade:this.lastResult?.grade?.letter||"F"})}catch{}}showEnd(t,e={}){this.lastResult={...e,won:t};const i=e.timeText||on(e.time??e.elapsed??0),n=e.spotted??0,r=e.chased??0,a=e.hides??0,o=e.distractions??0,l=e.grade??{letter:t?"C":"F",label:t?"BARELY A BIRD":"TONIGHT'S DINNER"};this.endScreen.classList.remove("win","lose"),this.endScreen.classList.add(t?"win":"lose"),this.endScreen.classList.remove("hidden"),this.gradeBadge.dataset.grade=l.letter,this.gradeLetter.textContent=l.letter,this.gradeLabel.textContent=l.label,this.resultTimeValue.textContent=i,this.resultTimeLabel.textContent=t?"ESCAPE TIME":"TIME UNTIL DINNER",this.statSpotted.textContent=String(n),this.statChased.textContent=String(r),this.statHides.textContent=String(a),this.statDistractions.textContent=String(o);const c=(f,g)=>`${f} ${g}${f===1?"":"s"}`,h=n===0?"You were never spotted.":`You were spotted ${c(n,"time")}.`,d=r===0?"You were never chased.":`He chased you ${c(r,"time")}.`,u=a===0?"You never hid once.":`You found cover ${c(a,"time")}.`;if(t)this.endEyebrow.textContent="THE GATE IS THAT WAY, GENIUS",this.endTitle.textContent="FREEDOM!",this.endSubtitle.textContent="You escaped Thanksgiving!",this.endDetail.textContent=`Escaped in ${i}. ${h} ${d} ${u} The human is still yelling at his phone.`;else{const f=Math.max(1,Math.round(e.distance||0)),g=e.caughtBy==="dog";this.endEyebrow.textContent="DINNER IS SERVED",this.endTitle.textContent="HAPPY THANKSGIVING!",this.endSubtitle.textContent="You are tonight's special guest.",this.endDetail.textContent=`${g?"The dog got you":"Caught"} ${f} m from the gate after ${i}. ${h} ${d} ${u} ${g?"The human is already preheating the oven.":"The oven is preheated."}`}e.newBest?(this.recordLine.textContent="NEW BEST RUN!",this.recordLine.classList.add("new-best")):e.best?(this.recordLine.textContent=`BEST RUN ${on(e.best.time)} · ${e.best.grade}`,this.recordLine.classList.remove("new-best")):(this.recordLine.textContent="NO ESCAPES YET. BE THE FIRST BIRD.",this.recordLine.classList.remove("new-best"))}hideEnd(){this.endScreen.classList.add("hidden"),this.endScreen.classList.remove("win","lose")}updateHUD(t){const{stamina:e=100,alert:i=0,state:n="PATROL",hidden:r=!1,nearCover:a=!1,nearCoverTag:o=null,nearProp:l=null,gateDistance:c=0,chase:h=!1}=t,d=Math.max(0,Math.min(100,e));this.staminaFill.style.width=`${d}%`,this.staminaFill.classList.toggle("low",d<25),this.staminaValue.textContent=`${Math.round(d)}%`;let u="safe";h||i>=.72?u="detected":(n==="INVESTIGATE"||i>=.36)&&(u="suspicious"),this.alertCard.classList.remove("safe","suspicious","detected"),this.alertCard.classList.add(u);const f=h?"chase":u==="detected"?"detected":u==="suspicious"?"suspicious":"safe";this.setDangerLevel(f),u==="detected"?(this.alertTitle.textContent=h||n==="CHASE"?"HE'S COMING!":"DETECTED",this.alertSub.textContent="Sprint or hide. Now."):u==="suspicious"?(this.alertTitle.textContent="SUSPICIOUS",this.alertSub.textContent="He heard something..."):(this.alertTitle.textContent="SAFE",this.alertSub.textContent=n==="DISTRACTED"?"He is glued to his phone":n==="GATE_CHECK"?"He is checking the gate":"The yard is quiet"),this.objectiveDist.textContent=c>8?`Gate ${Math.round(c)} m`:"Gate is close!",this.hideBadge.classList.toggle("hidden",!r);const g=a&&!r;if(this.prompt.classList.toggle("hidden",!g),g){const p=o==="leafpile";this.mobile?this.prompt.textContent=p?"Hold HIDE to hide in leaves (thin cover)":"Hold HIDE to duck behind cover":this.prompt.textContent=p?"Hold SPACE to hide in leaves (thin cover)":"Hold SPACE to hide"}const v=!!l&&!r;this.kickPrompt?.classList.toggle("hidden",!v),v&&(this.kickPrompt.textContent=this.mobile?`Tap KICK to kick the ${l}`:`Press E to kick the ${l}`),this.mobileKickBtn?.classList.toggle("hidden",!(this.mobile&&v))}toast(t,e=1800){this.toastEl&&(this.toastEl.textContent=t,this.toastEl.classList.remove("hidden"),this.toastEl.style.animation="none",this.toastEl.offsetWidth,this.toastEl.style.animation="",this.toastTimer&&clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>{this.toastEl.classList.add("hidden")},e))}setMuted(t){for(const e of this.muteButtons)e&&(e.textContent=t?"SOUND OFF":"SOUND ON")}}_a=new WeakSet,Ou=function(){if(!this.mobile)return;const t=document.getElementById("joystick"),e=document.getElementById("joystick-knob");let i=null;const n=o=>{const l=t.getBoundingClientRect(),c=l.left+l.width/2,h=l.top+l.height/2;let d=(o.clientX-c)/(l.width/2),u=(o.clientY-h)/(l.height/2);const f=Math.hypot(d,u);f>1&&(d/=f,u/=f),e.style.transform=`translate(${d*34}px, ${u*34}px)`,this.callbacks.onVirtualMove?.(d,-u)},r=()=>{i=null,e.style.transform="translate(0, 0)",this.callbacks.onVirtualMove?.(0,0)};t?.addEventListener("pointerdown",o=>{i=o.pointerId;try{t.setPointerCapture(o.pointerId)}catch{}n(o),o.preventDefault()}),t?.addEventListener("pointermove",o=>{o.pointerId===i&&(n(o),o.preventDefault())}),t?.addEventListener("pointerup",r),t?.addEventListener("pointercancel",r);const a=(o,l,c)=>{const h=document.getElementById(o);if(!h)return;const d=f=>{h.classList.add("active"),l();try{h.setPointerCapture?.(f.pointerId)}catch{}f.preventDefault()},u=f=>{h.classList.remove("active"),c(),f&&f.preventDefault()};h.addEventListener("pointerdown",d),h.addEventListener("pointerup",u),h.addEventListener("pointercancel",u),h.addEventListener("pointerleave",f=>{f.buttons===0&&u(f)})};a("mobile-sprint",()=>this.callbacks.onVirtualSprint?.(!0),()=>this.callbacks.onVirtualSprint?.(!1)),a("mobile-hide",()=>this.callbacks.onVirtualHide?.(!0),()=>this.callbacks.onVirtualHide?.(!1))};var Zt,Ae,li;class V_{constructor(){ni(this,Zt);this.context=null,this.master=null,this.muted=!1,this.ready=!1}init(){if(this.context){this.context.state==="suspended"&&this.context.resume().catch(()=>{});return}const t=window.AudioContext||window.webkitAudioContext;t&&(this.context=new t,this.master=this.context.createGain(),this.master.gain.value=this.muted?0:.45,this.master.connect(this.context.destination),this.ready=!0)}setMuted(t){this.muted=t,this.master&&this.context&&this.master.gain.setTargetAtTime(t?0:.45,this.context.currentTime,.05)}toggleMute(){return this.setMuted(!this.muted),this.muted}step(t=!1,e="grass"){O(this,Zt,li).call(this,{duration:t?.08:.07,volume:t?.18:.1,filterFreq:t?700:500}),O(this,Zt,Ae).call(this,{freq:t?95:120,endFreq:55,duration:.08,type:"sine",volume:t?.12:.07}),e==="gravel"?(O(this,Zt,li).call(this,{duration:.07,volume:.09,filterFreq:1900,type:"highpass"}),O(this,Zt,li).call(this,{duration:.05,volume:.05,filterFreq:1200,type:"bandpass",delay:.03})):e==="leaves"?O(this,Zt,li).call(this,{duration:.16,volume:.12,filterFreq:950,type:"bandpass"}):e==="puddle"&&(O(this,Zt,li).call(this,{duration:.18,volume:.13,filterFreq:1500,type:"lowpass"}),O(this,Zt,Ae).call(this,{freq:300,endFreq:120,duration:.18,type:"sine",volume:.09,delay:.01}))}humanStep(t=!1){O(this,Zt,li).call(this,{duration:.09,volume:t?.2:.11,filterFreq:380}),O(this,Zt,Ae).call(this,{freq:85,endFreq:48,duration:.1,type:"sine",volume:t?.16:.08})}alert(){O(this,Zt,Ae).call(this,{freq:660,duration:.09,type:"square",volume:.13}),O(this,Zt,Ae).call(this,{freq:880,duration:.12,type:"square",volume:.13,delay:.1})}distracted(){O(this,Zt,Ae).call(this,{freq:210,endFreq:150,duration:.16,type:"sawtooth",volume:.06}),O(this,Zt,Ae).call(this,{freq:190,endFreq:130,duration:.16,type:"sawtooth",volume:.06,delay:.18}),O(this,Zt,Ae).call(this,{freq:230,endFreq:160,duration:.14,type:"sawtooth",volume:.05,delay:.38})}hide(t=!1){O(this,Zt,li).call(this,{duration:.22,volume:.15,filterFreq:1500,type:"bandpass"}),t&&(O(this,Zt,li).call(this,{duration:.28,volume:.12,filterFreq:1e3,type:"bandpass",delay:.05}),O(this,Zt,li).call(this,{duration:.16,volume:.08,filterFreq:2200,type:"bandpass",delay:.18}))}gateCheck(){O(this,Zt,li).call(this,{duration:.1,volume:.13,filterFreq:2400,type:"bandpass"}),O(this,Zt,Ae).call(this,{freq:920,endFreq:620,duration:.07,type:"square",volume:.05}),O(this,Zt,li).call(this,{duration:.08,volume:.09,filterFreq:1800,type:"bandpass",delay:.14})}noiseHeard(){O(this,Zt,Ae).call(this,{freq:330,endFreq:360,duration:.1,type:"triangle",volume:.09}),O(this,Zt,Ae).call(this,{freq:440,endFreq:490,duration:.16,type:"triangle",volume:.09,delay:.1})}bark(){O(this,Zt,Ae).call(this,{freq:230,endFreq:110,duration:.13,type:"sawtooth",volume:.11}),O(this,Zt,li).call(this,{duration:.07,volume:.07,filterFreq:650,delay:.01}),O(this,Zt,Ae).call(this,{freq:200,endFreq:95,duration:.16,type:"sawtooth",volume:.1,delay:.17}),O(this,Zt,li).call(this,{duration:.06,volume:.06,filterFreq:600,delay:.18})}kick(t="bucket"){t==="crate"?(O(this,Zt,li).call(this,{duration:.12,volume:.16,filterFreq:420,type:"lowpass"}),O(this,Zt,Ae).call(this,{freq:150,endFreq:70,duration:.18,type:"triangle",volume:.13}),O(this,Zt,Ae).call(this,{freq:92,endFreq:55,duration:.12,type:"sine",volume:.1,delay:.06})):(O(this,Zt,li).call(this,{duration:.1,volume:.14,filterFreq:3200,type:"highpass"}),O(this,Zt,Ae).call(this,{freq:t==="can"?620:480,endFreq:220,duration:.2,type:"square",volume:.08}),O(this,Zt,Ae).call(this,{freq:180,endFreq:90,duration:.12,type:"triangle",volume:.08,delay:.04}))}gobble(){if(!this.ready||this.muted)return;const t=this.context,e=t.currentTime;for(let i=0;i<5;i+=1){const n=t.createOscillator(),r=t.createGain();n.type="sawtooth",n.frequency.setValueAtTime(160+i*12,e+i*.055),n.frequency.exponentialRampToValueAtTime(90,e+i*.055+.06),r.gain.setValueAtTime(1e-4,e+i*.055),r.gain.linearRampToValueAtTime(.07,e+i*.055+.01),r.gain.exponentialRampToValueAtTime(1e-4,e+i*.055+.07),n.connect(r),r.connect(this.master),n.start(e+i*.055),n.stop(e+i*.055+.08)}}caught(){O(this,Zt,Ae).call(this,{freq:300,endFreq:210,duration:.3,type:"sawtooth",volume:.16}),O(this,Zt,Ae).call(this,{freq:260,endFreq:170,duration:.42,type:"sawtooth",volume:.16,delay:.28}),O(this,Zt,Ae).call(this,{freq:210,endFreq:90,duration:.8,type:"sawtooth",volume:.18,delay:.66}),this.gobble()}win(){[523.25,659.25,783.99,1046.5].forEach((e,i)=>{O(this,Zt,Ae).call(this,{freq:e,duration:.24,type:"triangle",volume:.16,delay:i*.12})}),O(this,Zt,Ae).call(this,{freq:1318.5,duration:.6,type:"triangle",volume:.14,delay:.52})}gateChime(){O(this,Zt,Ae).call(this,{freq:1046.5,duration:.3,type:"sine",volume:.08}),O(this,Zt,Ae).call(this,{freq:1568,duration:.4,type:"sine",volume:.06,delay:.08})}}Zt=new WeakSet,Ae=function({freq:t=440,endFreq:e=null,duration:i=.18,type:n="sine",volume:r=.3,delay:a=0,attack:o=.01}){if(!this.ready||this.muted)return;const l=this.context,c=l.currentTime+a,h=l.createOscillator(),d=l.createGain();h.type=n,h.frequency.setValueAtTime(t,c),e!==null&&h.frequency.exponentialRampToValueAtTime(Math.max(20,e),c+i),d.gain.setValueAtTime(1e-4,c),d.gain.linearRampToValueAtTime(r,c+o),d.gain.exponentialRampToValueAtTime(1e-4,c+i),h.connect(d),d.connect(this.master),h.start(c),h.stop(c+i+.02)},li=function({duration:t=.12,volume:e=.2,filterFreq:i=800,delay:n=0,type:r="lowpass"}){if(!this.ready||this.muted)return;const a=this.context,o=a.currentTime+n,l=Math.floor(a.sampleRate*t),c=a.createBuffer(1,l,a.sampleRate),h=c.getChannelData(0);for(let g=0;g<l;g+=1)h[g]=(Math.random()*2-1)*(1-g/l);const d=a.createBufferSource();d.buffer=c;const u=a.createBiquadFilter();u.type=r,u.frequency.value=i;const f=a.createGain();f.gain.value=e,d.connect(u),u.connect(f),f.connect(this.master),d.start(o)};const Ce=Object.freeze({MENU:"menu",PLAYING:"playing",PAUSED:"paused",WON:"won",LOST:"lost"});function ch(){return{spotted:0,chased:0,hides:0,distractions:0,distanceAtCatch:0,caughtBy:null}}class W_{constructor(){this.mode=Ce.MENU,this.elapsed=0,this.resultTimer=0,this.restarts=0,this.stats=ch()}reset(){this.mode=Ce.PLAYING,this.elapsed=0,this.resultTimer=0,this.stats=ch()}}const Bu="turkey-run.history.v1",zu=10;function X_(s){return s&&typeof s.time=="number"&&Number.isFinite(s.time)&&typeof s.grade=="string"&&typeof s.won=="boolean"}function ku(){try{const s=window.localStorage.getItem(Bu);if(!s)return[];const t=JSON.parse(s);return Array.isArray(t)?t.filter(X_).slice(0,zu):[]}catch{return[]}}function q_(s){try{window.localStorage.setItem(Bu,JSON.stringify(s))}catch{}}function Y_(s){const t=[s,...ku()].slice(0,zu);return q_(t),t}const kn=new L;var qt,Gu,Hu,Vu,fl,pl,Vn,Wu,ml,Xu,gl,qu,Yu,Ku,Zu,$u,Ju,ju,va;class K_{constructor(){ni(this,qt);ni(this,va,()=>{this.clock.update();const t=Math.min(this.clock.getDelta(),.05),e=this.state.mode===Ce.PAUSED;let i=t;if(this.fpsFrames+=1,this.fpsElapsed+=t,this.fpsElapsed>=.5&&(this.fps=Math.round(this.fpsFrames/this.fpsElapsed),this.fpsFrames=0,this.fpsElapsed=0,this.ui?.qualityOpen&&this.ui.setPerformanceStats({fps:this.fps,drawCalls:this.renderer.info.render.calls,pixelRatio:this.renderer.getPixelRatio()})),!e){this.hitStopTimer=Math.max(0,this.hitStopTimer-t),this.slowMoTimer=Math.max(0,this.slowMoTimer-t);const n=this.slowMoTimer>0?.35:1;this.timeScale=Li(this.timeScale,n,this.slowMoTimer>0?18:6,t),i=t*(this.hitStopTimer>0?.04:this.timeScale),this.backyard.update(t),this.noise.update(i),this.effects.update(i)}if(this.state.mode===Ce.MENU)this.menuTime+=t,this.turkey.update(t,{speed:0}),this.human.update(t,{speed:0,state:"PATROL",alert:0}),this.dog.update(t,{speed:0,state:"PATROL"}),this.rig.update(t,this.playerPosition);else if(this.state.mode===Ce.PLAYING){this.state.elapsed+=t;const n=this.player.update(i,this.turkey,this.playerPosition);this.turkey.setPosition(this.playerPosition.x,this.playerPosition.z);const r={hidden:n.hidden,sprinting:n.sprinting,hideQuality:n.hideQuality},a=this.ai.update(i,this.playerPosition,r,!0);this.dogAI.update(i,this.playerPosition,r,!0);const o=a.state==="CHASE"&&a.sight.distance<6.5;if(this.turkey.update(i,{speed:n.speed,hidden:n.hidden,panicked:o}),this.state.mode===Ce.PLAYING){this.kickSystem.update(i);let l=n.hidden?null:this.kickSystem.getNearest(this.playerPosition.x,this.playerPosition.z);n.interact&&l&&(O(this,qt,Ju).call(this,l),l=null);const c=O(this,qt,Yu).call(this,i,n,a);if(c.stepped){const h=n.sprinting?"sprint":"walk",u=(h==="sprint"?Ti.sprintRadius:Ti.walkRadius)*(c.surface?.noiseMultiplier??1);this.noise.emit(this.playerPosition.x,this.playerPosition.z,u,h),this.effects.spawnNoiseRing(this.playerPosition.x,this.playerPosition.z,u,h),c.surface?.type==="leaves"&&this.effects.spawnLeafPuff(this.playerPosition.x,this.playerPosition.z,3)}O(this,qt,$u).call(this,i,n),O(this,qt,Zu).call(this,i,n),O(this,qt,Ku).call(this,n,a),O(this,qt,ju).call(this,n,a,l),this.backyard.setGateProximity(yi(1-O(this,qt,Vn).call(this)/26,0,1)),this.playerPosition.x>Qe.winX&&Math.abs(this.playerPosition.z)<3.4&&O(this,qt,Xu).call(this)}kn.set(this.playerPosition.x,.9,this.playerPosition.z),this.rig.update(t,kn)}else this.state.mode===Ce.WON?(this.state.resultTimer-=t,this.playerPosition.x+=5.2*i,this.playerPosition.z=Li(this.playerPosition.z,0,5,i),this.turkey.setPosition(this.playerPosition.x,this.playerPosition.z),this.turkey.setHeading(Math.PI/2),this.turkey.update(i,{speed:5.2}),this.ai.update(i,this.playerPosition,{hidden:!1,sprinting:!1},!1),this.dogAI.update(i,this.playerPosition,{hidden:!1,sprinting:!1},!1),kn.set(this.playerPosition.x,.9,this.playerPosition.z),this.rig.update(t,kn),this.state.resultTimer<=0&&O(this,qt,gl).call(this,!0)):this.state.mode===Ce.LOST&&(this.state.resultTimer-=t,this.turkey.update(i,{speed:0,panicked:!0}),this.ai.update(i,this.playerPosition,{hidden:!1,sprinting:!1},!1),this.dogAI.update(i,this.playerPosition,{hidden:!1,sprinting:!1},!1),kn.set(this.playerPosition.x,.9,this.playerPosition.z),this.rig.update(t,kn),this.state.resultTimer<=0&&O(this,qt,gl).call(this,!1));this.renderer.render(this.scene,this.camera)});this.canvas=document.getElementById("game-canvas"),this.qualityKey=F_(),this.quality=Is[this.qualityKey],this.renderer=new a_({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,this.quality.maxPixelRatio)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputColorSpace=ci,this.renderer.toneMapping=vl,this.renderer.toneMappingExposure=1.05,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=sr,this.camera=new _i(55,window.innerWidth/window.innerHeight,.1,220),this.backyard=new h_,this.scene=this.backyard.scene,this.collision=this.backyard.collision,this.kickSystem=new P_(this.scene,this.collision),this.turkey=new u_,this.scene.add(this.turkey.root),this.human=new d_,this.scene.add(this.human.root),this.dog=new p_,this.scene.add(this.dog.root),this.reducedMotion=zl(),this.effects=new E_(this.scene),this.effects.reducedMotion=this.reducedMotion,this.effects.setDensity(this.quality.effectsDensity),this.renderer.shadowMap.enabled=this.quality.shadows,this.backyard.setShadowQuality(this.quality.shadows,this.quality.shadowSize),this.rig=new m_(this.camera),this.coverSystem=new b_(this.collision),this.player=new __(this.camera,this.collision,this.coverSystem),this.vision=new S_(this.collision),this.noise=new T_,this.audio=new V_,this.state=new W_,this.playerPosition=new L(Qe.playerStart.x,0,Qe.playerStart.z),this.turkey.setPosition(this.playerPosition.x,this.playerPosition.z),this.turkey.setHeading(.6),this.ai=new y_(this.human,this.vision,this.collision,this.noise,{onCaught:()=>O(this,qt,ml).call(this,"human")}),this.dogAI=new M_(this.dog,this.collision,this.noise,{onBark:(t,e)=>O(this,qt,Wu).call(this,t,e),onCaught:()=>O(this,qt,ml).call(this,"dog")}),this.ui=new H_({onStart:()=>this.start(),onRestart:()=>this.restart(),onResume:()=>this.resume(),onPause:()=>this.togglePause(),onToggleMute:()=>this.toggleMute(),onVirtualMove:(t,e)=>this.player.setVirtualMove(t,e),onVirtualSprint:t=>this.player.setVirtualSprint(t),onVirtualHide:t=>this.player.setVirtualHide(t),onVirtualInteract:()=>this.player.queueInteract(),onQualitySelect:t=>this.setQuality(t)}),this.overlayShown=!1,this.roundResult=null,this.bestRun=I_(),this.ui.setBestRun(this.bestRun),this.history=ku(),this.ui.setHistory(this.history),this.ui.setQuality(this.qualityKey),Re("game_ready",{quality:this.qualityKey,touch:this.ui.mobile,reduced_motion:this.reducedMotion}),On("quality",this.qualityKey),On("device",this.ui.mobile?"mobile":"desktop"),On("reduced_motion",String(this.reducedMotion)),this.playerStepTimer=0,this.humanStepTimer=0,this.lastHumanState="PATROL",this.wasHidden=!1,this.wasHideHeld=!1,this.hideHintCooldown=0,this.gateChimePlayed=!1,this.lowStaminaWarned=!1,this.alertWarned=!1,this.menuTime=0,this.fps=60,this.fpsFrames=0,this.fpsElapsed=0,this.timeScale=1,this.slowMoTimer=0,this.hitStopTimer=0,this.dustTimer=0,this.clock=new up,O(this,qt,Gu).call(this),O(this,qt,pl).call(this),this.ui.showStart(),this.ui.setHudVisible(!1),this.rig.setMode("menu"),this.renderer.setAnimationLoop(xr(this,va)),window.__TURKEY_RUN__=this}setQuality(t,e=!0){const i=Is[t];if(!i)return;const n=this.qualityKey;if(n===t){this.ui?.setQuality(t);return}this.qualityKey=t,this.quality=i,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,i.maxPixelRatio)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=i.shadows,this.renderer.shadowMap.needsUpdate=!0,this.backyard.setShadowQuality(i.shadows,i.shadowSize),this.effects.setDensity(i.effectsDensity),e&&O_(t),Re("quality_change",{preset:t,previous:n}),On("quality",t),this.ui?.setQuality(t),this.ui?.toast(`Graphics: ${i.label}`,1400)}start(){this.audio.init(),this.audio.gobble(),O(this,qt,fl).call(this),Re("game_start",{quality:this.qualityKey,touch:this.ui.mobile,reduced_motion:this.reducedMotion}),On("quality",this.qualityKey),this.ui.hideStart(),this.ui.toast("GO! Get to the gate before dinner.",2200)}restart(){this.audio.init(),O(this,qt,fl).call(this),Re("run_restart",{quality:this.qualityKey}),this.ui.toast("Round two. Same turkey, better odds.",2e3)}resume(){this.state.mode===Ce.PAUSED&&(this.state.mode=Ce.PLAYING,this.player.enabled=!0,this.player.interactQueued=!1,this.wasHideHeld=this.player.hideHeld,Re("game_resume",{time_seconds:Math.round(this.state.elapsed)}),this.ui.hidePause(),this.ui.setHudVisible(!0),this.rig.setMode("follow"))}togglePause(){this.state.mode===Ce.PLAYING?(this.state.mode=Ce.PAUSED,this.player.enabled=!1,this.player.interactQueued=!1,this.player.setVirtualMove(0,0),this.player.setVirtualSprint(!1),this.player.setVirtualHide(!1),Re("game_pause",{time_seconds:Math.round(this.state.elapsed)}),this.ui.showPause(),this.ui.setHudVisible(!1)):this.state.mode===Ce.PAUSED&&this.resume()}toggleMute(){const t=this.audio.toggleMute();return this.ui.setMuted(t),t}}qt=new WeakSet,Gu=function(){window.addEventListener("resize",()=>O(this,qt,Hu).call(this)),window.addEventListener("keydown",t=>O(this,qt,Vu).call(this,t)),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state.mode===Ce.PLAYING&&this.togglePause()}),this.canvas.addEventListener("contextmenu",t=>t.preventDefault())},Hu=function(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,this.quality.maxPixelRatio)),this.renderer.setSize(t,e)},Vu=function(t){if(t.code==="Escape"){if(this.ui.isOverlayOpen())return;(this.state.mode===Ce.PLAYING||this.state.mode===Ce.PAUSED)&&(t.preventDefault(),this.togglePause())}else if(t.code==="KeyM")this.toggleMute();else if(t.code==="Enter"){if(this.ui.isOverlayOpen()||document.activeElement?.tagName==="A")return;this.state.mode===Ce.MENU?(t.preventDefault(),this.start()):this.state.mode===Ce.WON||this.state.mode===Ce.LOST?(t.preventDefault(),this.restart()):this.state.mode===Ce.PAUSED&&(t.preventDefault(),this.resume())}},fl=function(){O(this,qt,pl).call(this),this.state.reset(),this.state.elapsed=0,this.overlayShown=!1,this.roundResult=null,this.playerStepTimer=0,this.humanStepTimer=0,this.lastHumanState="PATROL",this.wasHidden=!1,this.wasHideHeld=!1,this.hideHintCooldown=0,this.gateChimePlayed=!1,this.lowStaminaWarned=!1,this.alertWarned=!1,this.timeScale=1,this.slowMoTimer=0,this.hitStopTimer=0,this.dustTimer=0,this.effects.clear(),this.rig.resetEffects(),this.backyard.resetGateEffects(),this.ui.resetTransientEffects(),this.player.enabled=!0,this.ui.hideStart(),this.ui.hidePause(),this.ui.hideEnd(),this.ui.setHudVisible(!0),this.rig.setMode("follow"),this.rig.snapTo(kn.set(this.playerPosition.x,.9,this.playerPosition.z)),this.ui.updateHUD({stamina:this.player.stamina,alert:0,state:"PATROL",hidden:!1,nearCover:!1,gateDistance:O(this,qt,Vn).call(this),chase:!1})},pl=function(){this.playerPosition.set(Qe.playerStart.x,0,Qe.playerStart.z),this.player.reset(Qe.playerStart),this.turkey.setPosition(this.playerPosition.x,this.playerPosition.z),this.turkey.setHeading(this.player.heading),this.turkey.resetAnimation(),this.turkey.update(0,{speed:0,hidden:!1}),this.noise.reset(),this.ai.reset(),this.dogAI.reset(),this.kickSystem.reset(),this.vision.reset()},Vn=function(){return bi(this.playerPosition.x,this.playerPosition.z,Qe.gate.x,Qe.gate.z)},Wu=function(t,e){this.state.mode===Ce.PLAYING&&(this.audio.bark(),this.effects.spawnNoiseRing(t,e,Ee.barkNoiseRadius,"bark"),Re("dog_bark",{distance_m:Math.round(bi(this.playerPosition.x,this.playerPosition.z,t,e)),time_seconds:Math.round(this.state.elapsed)}),this.ui.toast("The dog is barking! It will bring the human.",2200))},ml=function(t="human"){this.state.mode===Ce.PLAYING&&(this.state.mode=Ce.LOST,this.state.resultTimer=Qe.caughtOverlayDelay,this.state.stats.distanceAtCatch=O(this,qt,Vn).call(this),this.state.stats.caughtBy=t,this.player.enabled=!1,this.turkey.playCaught(),t==="dog"&&this.audio.bark(),this.audio.caught(),this.reducedMotion||(this.hitStopTimer=.06,this.slowMoTimer=.45,this.timeScale=.28),this.rig.addShake(.3,.45),this.rig.addZoomPunch(.22),this.effects.spawnLeafBurst(this.playerPosition.x,1.05,this.playerPosition.z,20),this.effects.spawnDust(this.playerPosition.x,this.playerPosition.z,0,0,6),this.ui.flash("catch"),this.ui.updateHUD({stamina:this.player.stamina,alert:1,state:"CAUGHT",hidden:!1,nearCover:!1,gateDistance:O(this,qt,Vn).call(this),chase:!0}),this.ui.toast(t==="dog"?"THE DOG GOT YOU!":"CAUGHT! He saw you.",1600))},Xu=function(){this.state.mode===Ce.PLAYING&&(this.state.mode=Ce.WON,this.state.resultTimer=Qe.winOverlayDelay,this.player.enabled=!1,this.audio.win(),this.reducedMotion||(this.slowMoTimer=.4,this.timeScale=.38),this.rig.addZoomPunch(.16),this.effects.spawnLeafBurst(Qe.gate.x+1.1,1.5,Qe.gate.z,44),this.effects.spawnLeafBurst(this.playerPosition.x,1.25,this.playerPosition.z,14),this.backyard.flareGate(1),this.ui.flash("win"),this.ui.toast("FREEDOM! Keep going!",1400))},gl=function(t){this.overlayShown||(this.overlayShown=!0,this.roundResult=O(this,qt,qu).call(this,t),this.ui.setHudVisible(!1),this.ui.showEnd(t,this.roundResult))},qu=function(t){const e=this.state.stats,i=L_({won:t,time:this.state.elapsed,spotted:e.spotted,chased:e.chased});let n=this.bestRun,r=!1;if(t){const l={time:Math.max(0,Math.round(this.state.elapsed)),grade:i.letter,spotted:e.spotted};r=N_(l,n),r&&(n=l,this.bestRun=n,D_(n),this.ui.setBestRun(n))}const a={at:Date.now(),won:t,grade:i.letter,label:i.label,time:this.state.elapsed,spotted:e.spotted,chased:e.chased,hides:e.hides,distractions:e.distractions,distance:t?0:e.distanceAtCatch,caughtBy:t?null:e.caughtBy||"human"};this.history=Y_(a),this.ui.setHistory(this.history);const o={grade:i.letter,time_seconds:Math.round(this.state.elapsed),spotted:e.spotted,chased:e.chased,hides:e.hides,distractions:e.distractions,quality:this.qualityKey};return t?Re("game_win",{...o,new_best:r,distance_m:0,caught_by:"none"}):Re("game_lose",{...o,new_best:!1,distance_m:Math.round(e.distanceAtCatch),caught_by:e.caughtBy||"human"}),On("last_result",t?"win":"lose"),On("last_grade",i.letter),{won:t,grade:i,time:this.state.elapsed,timeText:on(this.state.elapsed),spotted:e.spotted,chased:e.chased,hides:e.hides,distractions:e.distractions,distance:e.distanceAtCatch,caughtBy:t?null:e.caughtBy||"human",best:n,newBest:r}},Yu=function(t,e,i){let n=!1,r=null;return this.playerStepTimer-=t,e.speed>.6&&!e.hidden?this.playerStepTimer<=0&&(r=this.backyard.getSurfaceAt(this.playerPosition.x,this.playerPosition.z),this.audio.step(e.sprinting,r.type),this.playerStepTimer=e.sprinting?.24:.38,n=!0):this.playerStepTimer=Math.min(this.playerStepTimer,.1),this.humanStepTimer-=t,this.ai.speed>.5&&i.state!=="CAUGHT"?this.humanStepTimer<=0&&(this.audio.humanStep(i.state==="CHASE"),this.humanStepTimer=i.state==="CHASE"?.3:.52):this.humanStepTimer=Math.min(this.humanStepTimer,.12),{stepped:n,sprinting:e.sprinting,surface:r}},Ku=function(t,e){const i=this.state.stats,n=this.lastHumanState;if(e.state!==n&&(e.state==="ALERT"?(n!=="CHASE"&&(i.spotted+=1),Re("human_alert",{alert_percent:Math.round(e.alert*100),time_seconds:Math.round(this.state.elapsed)}),this.audio.alert(),this.alertWarned||(this.ui.toast("He noticed you. Break the line of sight!",1800),this.alertWarned=!0)):e.state==="CHASE"?(i.chased+=1,n!=="ALERT"&&(i.spotted+=1),Re("human_chase",{alert_percent:Math.round(e.alert*100),time_seconds:Math.round(this.state.elapsed)}),this.audio.alert(),this.ui.toast("RUN! He is coming!",1500)):e.state==="DISTRACTED"?(i.distractions+=1,Re("human_distracted",{time_seconds:Math.round(this.state.elapsed)}),this.audio.distracted(),this.ui.toast("He is on his phone. Move!",1700)):e.state==="GATE_CHECK"?(Re("human_gate_check",{time_seconds:Math.round(this.state.elapsed)}),this.audio.gateCheck(),this.ui.toast("He is checking the gate! Wait for your moment.",2200)):e.state==="INVESTIGATE"?(Re("human_investigate",{time_seconds:Math.round(this.state.elapsed)}),this.audio.noiseHeard(),this.ui.toast("He heard something. Move or hide!",1800)):e.state==="SEARCH"&&(Re("human_search",{time_seconds:Math.round(this.state.elapsed)}),this.ui.toast("He lost you. For now.",1500)),this.lastHumanState=e.state),t.hidden&&!this.wasHidden){i.hides+=1;const a=this.coverSystem.probe(this.playerPosition.x,this.playerPosition.z),o=t.hideTag||a.object?.tag||"unknown";Re("hide_start",{time_seconds:Math.round(this.state.elapsed),cover:o}),o==="leafpile"?(this.effects.spawnLeafPuff(this.playerPosition.x,this.playerPosition.z,10),this.noise.emit(this.playerPosition.x,this.playerPosition.z,Ti.leafRustleRadius,"rustle"),this.effects.spawnNoiseRing(this.playerPosition.x,this.playerPosition.z,Ti.leafRustleRadius,"rustle"),this.audio.hide(!0),this.ui.toast("Hidden in the leaves. This cover is thin.",1800)):o==="bush"||o==="tree"?(this.effects.spawnLeafPuff(this.playerPosition.x,this.playerPosition.z,7),this.audio.hide(),this.ui.toast("Hidden. Stay very still.",1500)):(this.effects.spawnDust(this.playerPosition.x,this.playerPosition.z,0,0,3),this.audio.hide(),this.ui.toast("Hidden. Stay very still.",1500))}this.wasHidden=t.hidden,t.stamina<18&&!this.lowStaminaWarned&&(this.lowStaminaWarned=!0,this.ui.toast("Out of breath! Walk to recover.",1800)),t.stamina>45&&(this.lowStaminaWarned=!1);const r=O(this,qt,Vn).call(this);!this.gateChimePlayed&&r<5.5&&(this.gateChimePlayed=!0,this.backyard.flareGate(.55),this.audio.gateChime(),this.ui.toast("THE GATE! GO GO GO!",1500))},Zu=function(t,e){this.hideHintCooldown=Math.max(0,this.hideHintCooldown-t);const i=this.player.hideHeld;i&&!this.wasHideHeld&&!e.hidden&&this.hideHintCooldown<=0&&(this.ui.toast("No cover here. Hide near a bush, tree, or crate.",1900),this.hideHintCooldown=1.5),this.wasHideHeld=i},$u=function(t,e){if(e.sprinting&&e.speed>3&&!e.hidden){if(this.dustTimer-=t,this.dustTimer<=0){const i=1/(e.speed||1);this.effects.spawnDust(this.playerPosition.x,this.playerPosition.z,-this.player.velocity.x*i,-this.player.velocity.z*i,2),this.dustTimer=.15}}else this.dustTimer=Math.min(this.dustTimer,.06)},Ju=function(t){const e=this.kickSystem.kick(t,this.playerPosition.x,this.playerPosition.z);if(!e)return;this.noise.emit(e.x,e.z,e.radius,"kick"),this.effects.spawnNoiseRing(e.x,e.z,e.radius,"kick"),this.effects.spawnDust(e.x,e.z,0,0,3),this.audio.kick(e.type),this.rig.addShake(.035,.12);const i={bucket:"You kicked the bucket. Literally.",crate:"You kicked the crate. Very stealthy.",can:"Clang! That tin can went flying."};this.ui.toast(i[e.type]||"That made a lot of noise!",1900),Re("prop_kick",{prop:e.type,time_seconds:Math.round(this.state.elapsed)})},ju=function(t,e,i=null){this.ui.updateHUD({stamina:t.stamina,alert:e.alert,state:e.state,hidden:t.hidden,nearCover:this.player.nearCover,nearCoverTag:this.player.nearCoverTag,nearProp:i?i.name:null,gateDistance:O(this,qt,Vn).call(this),chase:e.state==="CHASE"})},va=new WeakMap;function hh(){try{new K_}catch(s){console.error("Turkey Run failed to start:",s);const t=document.createElement("div");t.style.cssText="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;padding:24px;background:#241408;color:#f7e9cf;font-family:Georgia,serif;font-size:18px;text-align:center;z-index:9999;",t.textContent="Turkey Run could not start. Your browser may not support WebGL, or hardware acceleration is disabled.",document.body.appendChild(t)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",hh):hh();
