var Yu=Object.defineProperty;var $u=(i,t,e)=>t in i?Yu(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var F=(i,t,e)=>$u(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nl="170",Ku=0,Hl=1,Zu=2,Ah=1,ju=2,Hn=3,mi=0,ke=1,Vn=2,ui=0,ls=1,Zr=2,Gl=3,Vl=4,bh=5,Li=100,Ju=101,Qu=102,td=103,wh=104,ed=200,nd=201,id=202,sd=203,io=204,so=205,rd=206,ad=207,od=208,ld=209,cd=210,hd=211,ud=212,dd=213,fd=214,ro=0,ao=1,oo=2,fs=3,lo=4,co=5,ho=6,uo=7,Rh=0,pd=1,md=2,di=0,gd=1,_d=2,vd=3,Md=4,xd=5,Sd=6,Ed=7,Ch=300,ps=301,ms=302,fo=303,po=304,ia=306,mo=1e3,Ni=1001,go=1002,xn=1003,yd=1004,or=1005,In=1006,ga=1007,Oi=1008,$n=1009,Ph=1010,Ih=1011,Xs=1012,il=1013,Bi=1014,Wn=1015,Qs=1016,sl=1017,rl=1018,gs=1020,Lh=35902,Dh=1021,Uh=1022,vn=1023,Nh=1024,Oh=1025,cs=1026,_s=1027,Fh=1028,al=1029,Bh=1030,ol=1031,ll=1033,Vr=33776,kr=33777,Wr=33778,Xr=33779,_o=35840,vo=35841,Mo=35842,xo=35843,So=36196,Eo=37492,yo=37496,To=37808,Ao=37809,bo=37810,wo=37811,Ro=37812,Co=37813,Po=37814,Io=37815,Lo=37816,Do=37817,Uo=37818,No=37819,Oo=37820,Fo=37821,qr=36492,Bo=36494,zo=36495,zh=36283,Ho=36284,Go=36285,Vo=36286,Td=3200,Ad=3201,bd=0,wd=1,hi="",rn="srgb",Ms="srgb-linear",sa="linear",Qt="srgb",ki=7680,kl=519,Rd=512,Cd=513,Pd=514,Hh=515,Id=516,Ld=517,Dd=518,Ud=519,ko=35044,Wl="300 es",Xn=2e3,jr=2001;class xs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xl=1234567;const hs=Math.PI/180,qs=180/Math.PI;function qn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[i&255]+Ce[i>>8&255]+Ce[i>>16&255]+Ce[i>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function Ie(i,t,e){return Math.max(t,Math.min(e,i))}function cl(i,t){return(i%t+t)%t}function Nd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Od(i,t,e){return i!==t?(e-i)/(t-i):0}function zs(i,t,e){return(1-e)*i+e*t}function Fd(i,t,e,n){return zs(i,t,1-Math.exp(-e*n))}function Bd(i,t=1){return t-Math.abs(cl(i,t*2)-t)}function zd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Hd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Gd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Vd(i,t){return i+Math.random()*(t-i)}function kd(i){return i*(.5-Math.random())}function Wd(i){i!==void 0&&(Xl=i);let t=Xl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Xd(i){return i*hs}function qd(i){return i*qs}function Yd(i){return(i&i-1)===0&&i!==0}function $d(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Kd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Zd(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function mn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Jt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const jd={DEG2RAD:hs,RAD2DEG:qs,generateUUID:qn,clamp:Ie,euclideanModulo:cl,mapLinear:Nd,inverseLerp:Od,lerp:zs,damp:Fd,pingpong:Bd,smoothstep:zd,smootherstep:Hd,randInt:Gd,randFloat:Vd,randFloatSpread:kd,seededRandom:Wd,degToRad:Xd,radToDeg:qd,isPowerOfTwo:Yd,ceilPowerOfTwo:$d,floorPowerOfTwo:Kd,setQuaternionFromProperEuler:Zd,normalize:Jt,denormalize:mn};class Vt{constructor(t=0,e=0){Vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Dt{constructor(t,e,n,s,r,a,o,l,c){Dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],y=s[1],E=s[4],M=s[7],I=s[2],w=s[5],R=s[8];return r[0]=a*_+o*y+l*I,r[3]=a*m+o*E+l*w,r[6]=a*p+o*M+l*R,r[1]=c*_+h*y+u*I,r[4]=c*m+h*E+u*w,r[7]=c*p+h*M+u*R,r[2]=d*_+f*y+g*I,r[5]=d*m+f*E+g*w,r[8]=d*p+f*M+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(_a.makeScale(t,e)),this}rotate(t){return this.premultiply(_a.makeRotation(-t)),this}translate(t,e){return this.premultiply(_a.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const _a=new Dt;function Gh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Jr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Jd(){const i=Jr("canvas");return i.style.display="block",i}const ql={};function Us(i){i in ql||(ql[i]=!0,console.warn(i))}function Qd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function tf(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ef(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const qt={enabled:!0,workingColorSpace:Ms,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Qt&&(i.r=Yn(i.r),i.g=Yn(i.g),i.b=Yn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Qt&&(i.r=us(i.r),i.g=us(i.g),i.b=us(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===hi?sa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Yl=[.64,.33,.3,.6,.15,.06],$l=[.2126,.7152,.0722],Kl=[.3127,.329],Zl=new Dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jl=new Dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qt.define({[Ms]:{primaries:Yl,whitePoint:Kl,transfer:sa,toXYZ:Zl,fromXYZ:jl,luminanceCoefficients:$l,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:Yl,whitePoint:Kl,transfer:Qt,toXYZ:Zl,fromXYZ:jl,luminanceCoefficients:$l,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}});let Wi;class nf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Wi===void 0&&(Wi=Jr("canvas")),Wi.width=t.width,Wi.height=t.height;const n=Wi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Wi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Jr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Yn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Yn(e[n]/255)*255):e[n]=Yn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let sf=0;class Vh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=qn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(va(s[a].image)):r.push(va(s[a]))}else r=va(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function va(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?nf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rf=0;class We extends xs{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,n=Ni,s=Ni,r=In,a=Oi,o=vn,l=$n,c=We.DEFAULT_ANISOTROPY,h=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=qn(),this.name="",this.source=new Vh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ch)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case mo:t.x=t.x-Math.floor(t.x);break;case Ni:t.x=t.x<0?0:1;break;case go:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case mo:t.y=t.y-Math.floor(t.y);break;case Ni:t.y=t.y<0?0:1;break;case go:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=Ch;We.DEFAULT_ANISOTROPY=1;class se{constructor(t=0,e=0,n=0,s=1){se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,M=(f+1)/2,I=(p+1)/2,w=(h+d)/4,R=(u+_)/4,P=(g+m)/4;return E>M&&E>I?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=w/n,r=R/n):M>I?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=w/s,r=P/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=R/r,s=P/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class af extends xs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new We(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Vh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends af{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class kh extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class of extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class En{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-o;const p=l*d+c*f+h*g+u*_,y=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const I=Math.sqrt(E),w=Math.atan2(I,p*y);m=Math.sin(m*w)/I,o=Math.sin(o*w)/I}const M=o*y;if(l=l*m+d*M,c=c*m+f*M,h=h*m+g*M,u=u*m+_*M,m===1-o){const I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,n=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ma.copy(this).projectOnVector(t),this.sub(Ma)}reflect(t){return this.sub(Ma.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ma=new A,Jl=new En;class vi{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,un):un.fromBufferAttribute(r,a),un.applyMatrix4(t.matrixWorld),this.expandByPoint(un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),lr.copy(n.boundingBox)),lr.applyMatrix4(t.matrixWorld),this.union(lr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,un),un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Cs),cr.subVectors(this.max,Cs),Xi.subVectors(t.a,Cs),qi.subVectors(t.b,Cs),Yi.subVectors(t.c,Cs),ni.subVectors(qi,Xi),ii.subVectors(Yi,qi),Ei.subVectors(Xi,Yi);let e=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-Ei.z,Ei.y,ni.z,0,-ni.x,ii.z,0,-ii.x,Ei.z,0,-Ei.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-Ei.y,Ei.x,0];return!xa(e,Xi,qi,Yi,cr)||(e=[1,0,0,0,1,0,0,0,1],!xa(e,Xi,qi,Yi,cr))?!1:(hr.crossVectors(ni,ii),e=[hr.x,hr.y,hr.z],xa(e,Xi,qi,Yi,cr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Nn=[new A,new A,new A,new A,new A,new A,new A,new A],un=new A,lr=new vi,Xi=new A,qi=new A,Yi=new A,ni=new A,ii=new A,Ei=new A,Cs=new A,cr=new A,hr=new A,yi=new A;function xa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){yi.fromArray(i,r);const o=s.x*Math.abs(yi.x)+s.y*Math.abs(yi.y)+s.z*Math.abs(yi.z),l=t.dot(yi),c=e.dot(yi),h=n.dot(yi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const lf=new vi,Ps=new A,Sa=new A;class Gi{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):lf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ps.subVectors(t,this.center);const e=Ps.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ps,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ps.copy(t.center).add(Sa)),this.expandByPoint(Ps.copy(t.center).sub(Sa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const On=new A,Ea=new A,ur=new A,si=new A,ya=new A,dr=new A,Ta=new A;class hl{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,On)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=On.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(On.copy(this.origin).addScaledVector(this.direction,e),On.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ea.copy(t).add(e).multiplyScalar(.5),ur.copy(e).sub(t).normalize(),si.copy(this.origin).sub(Ea);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ur),o=si.dot(this.direction),l=-si.dot(ur),c=si.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ea).addScaledVector(ur,d),f}intersectSphere(t,e){On.subVectors(t.center,this.origin);const n=On.dot(this.direction),s=On.dot(On)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,On)!==null}intersectTriangle(t,e,n,s,r){ya.subVectors(e,t),dr.subVectors(n,t),Ta.crossVectors(ya,dr);let a=this.direction.dot(Ta),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;si.subVectors(this.origin,t);const l=o*this.direction.dot(dr.crossVectors(si,dr));if(l<0)return null;const c=o*this.direction.dot(ya.cross(si));if(c<0||l+c>a)return null;const h=-o*si.dot(Ta);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class re{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,g,_,m){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,_,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/$i.setFromMatrixColumn(t,0).length(),r=1/$i.setFromMatrixColumn(t,1).length(),a=1/$i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cf,t,hf)}lookAt(t,e,n){const s=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),ri.crossVectors(n,$e),ri.lengthSq()===0&&(Math.abs(n.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),ri.crossVectors(n,$e)),ri.normalize(),fr.crossVectors($e,ri),s[0]=ri.x,s[4]=fr.x,s[8]=$e.x,s[1]=ri.y,s[5]=fr.y,s[9]=$e.y,s[2]=ri.z,s[6]=fr.z,s[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],E=n[7],M=n[11],I=n[15],w=s[0],R=s[4],P=s[8],T=s[12],x=s[1],C=s[5],G=s[9],H=s[13],X=s[2],Z=s[6],W=s[10],J=s[14],k=s[3],st=s[7],ht=s[11],St=s[15];return r[0]=a*w+o*x+l*X+c*k,r[4]=a*R+o*C+l*Z+c*st,r[8]=a*P+o*G+l*W+c*ht,r[12]=a*T+o*H+l*J+c*St,r[1]=h*w+u*x+d*X+f*k,r[5]=h*R+u*C+d*Z+f*st,r[9]=h*P+u*G+d*W+f*ht,r[13]=h*T+u*H+d*J+f*St,r[2]=g*w+_*x+m*X+p*k,r[6]=g*R+_*C+m*Z+p*st,r[10]=g*P+_*G+m*W+p*ht,r[14]=g*T+_*H+m*J+p*St,r[3]=y*w+E*x+M*X+I*k,r[7]=y*R+E*C+M*Z+I*st,r[11]=y*P+E*G+M*W+I*ht,r[15]=y*T+E*H+M*J+I*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+_*(+e*l*f-e*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],y=u*m*c-_*d*c+_*l*f-o*m*f-u*l*p+o*d*p,E=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,M=h*_*c-g*u*c+g*o*f-a*_*f-h*o*p+a*u*p,I=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,w=e*y+n*E+s*M+r*I;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return t[0]=y*R,t[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*R,t[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*p+n*l*p)*R,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*R,t[4]=E*R,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*R,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*R,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*f+e*l*f)*R,t[8]=M*R,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*R,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*p+e*o*p)*R,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*R,t[12]=I*R,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*R,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*m-e*o*m)*R,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,_=a*h,m=a*u,p=o*u,y=l*c,E=l*h,M=l*u,I=n.x,w=n.y,R=n.z;return s[0]=(1-(_+p))*I,s[1]=(f+M)*I,s[2]=(g-E)*I,s[3]=0,s[4]=(f-M)*w,s[5]=(1-(d+p))*w,s[6]=(m+y)*w,s[7]=0,s[8]=(g+E)*R,s[9]=(m-y)*R,s[10]=(1-(d+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=$i.set(s[0],s[1],s[2]).length();const a=$i.set(s[4],s[5],s[6]).length(),o=$i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],dn.copy(this);const c=1/r,h=1/a,u=1/o;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=h,dn.elements[5]*=h,dn.elements[6]*=h,dn.elements[8]*=u,dn.elements[9]*=u,dn.elements[10]*=u,e.setFromRotationMatrix(dn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Xn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(o===Xn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===jr)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Xn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,f=(n+s)*h;let g,_;if(o===Xn)g=(a+r)*u,_=-2*u;else if(o===jr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const $i=new A,dn=new re,cf=new A(0,0,0),hf=new A(1,1,1),ri=new A,fr=new A,$e=new A,Ql=new re,tc=new En;class Kn{constructor(t=0,e=0,n=0,s=Kn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ie(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ql.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ql,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return tc.setFromEuler(this),this.setFromQuaternion(tc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kn.DEFAULT_ORDER="XYZ";class ul{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let uf=0;const ec=new A,Ki=new En,Fn=new re,pr=new A,Is=new A,df=new A,ff=new En,nc=new A(1,0,0),ic=new A(0,1,0),sc=new A(0,0,1),rc={type:"added"},pf={type:"removed"},Zi={type:"childadded",child:null},Aa={type:"childremoved",child:null};class Xe extends xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xe.DEFAULT_UP.clone();const t=new A,e=new Kn,n=new En,s=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new Dt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=Xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ul,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.premultiply(Ki),this}rotateX(t){return this.rotateOnAxis(nc,t)}rotateY(t){return this.rotateOnAxis(ic,t)}rotateZ(t){return this.rotateOnAxis(sc,t)}translateOnAxis(t,e){return ec.copy(t).applyQuaternion(this.quaternion),this.position.add(ec.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nc,t)}translateY(t){return this.translateOnAxis(ic,t)}translateZ(t){return this.translateOnAxis(sc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?pr.copy(t):pr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Is,pr,this.up):Fn.lookAt(pr,Is,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),Ki.setFromRotationMatrix(Fn),this.quaternion.premultiply(Ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rc),Zi.child=t,this.dispatchEvent(Zi),Zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pf),Aa.child=t,this.dispatchEvent(Aa),Aa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rc),Zi.child=t,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,t,df),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,ff,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Xe.DEFAULT_UP=new A(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new A,Bn=new A,ba=new A,zn=new A,ji=new A,Ji=new A,ac=new A,wa=new A,Ra=new A,Ca=new A,Pa=new se,Ia=new se,La=new se;class on{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),fn.subVectors(t,e),s.cross(fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){fn.subVectors(s,e),Bn.subVectors(n,e),ba.subVectors(t,e);const a=fn.dot(fn),o=fn.dot(Bn),l=fn.dot(ba),c=Bn.dot(Bn),h=Bn.dot(ba),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zn.x),l.addScaledVector(a,zn.y),l.addScaledVector(o,zn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Pa.setScalar(0),Ia.setScalar(0),La.setScalar(0),Pa.fromBufferAttribute(t,e),Ia.fromBufferAttribute(t,n),La.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Pa,r.x),a.addScaledVector(Ia,r.y),a.addScaledVector(La,r.z),a}static isFrontFacing(t,e,n,s){return fn.subVectors(n,e),Bn.subVectors(t,e),fn.cross(Bn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),fn.cross(Bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return on.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return on.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return on.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return on.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return on.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;ji.subVectors(s,n),Ji.subVectors(r,n),wa.subVectors(t,n);const l=ji.dot(wa),c=Ji.dot(wa);if(l<=0&&c<=0)return e.copy(n);Ra.subVectors(t,s);const h=ji.dot(Ra),u=Ji.dot(Ra);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ji,a);Ca.subVectors(t,r);const f=ji.dot(Ca),g=Ji.dot(Ca);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ji,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return ac.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(ac,o);const p=1/(m+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector(ji,a).addScaledVector(Ji,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Wh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},mr={h:0,s:0,l:0};function Da(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=qt.workingColorSpace){if(t=cl(t,1),e=Ie(e,0,1),n=Ie(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Da(a,r,t+1/3),this.g=Da(a,r,t),this.b=Da(a,r,t-1/3)}return qt.toWorkingColorSpace(this,s),this}setStyle(t,e=rn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){const n=Wh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yn(t.r),this.g=Yn(t.g),this.b=Yn(t.b),this}copyLinearToSRGB(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return qt.fromWorkingColorSpace(Pe.copy(this),t),Math.round(Ie(Pe.r*255,0,255))*65536+Math.round(Ie(Pe.g*255,0,255))*256+Math.round(Ie(Pe.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(Pe.copy(this),e);const n=Pe.r,s=Pe.g,r=Pe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=rn){qt.fromWorkingColorSpace(Pe.copy(this),t);const e=Pe.r,n=Pe.g,s=Pe.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ai),this.setHSL(ai.h+t,ai.s+e,ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ai),t.getHSL(mr);const n=zs(ai.h,mr.h,e),s=zs(ai.s,mr.s,e),r=zs(ai.l,mr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pe=new Ut;Ut.NAMES=Wh;let mf=0;class tr extends xs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=qn(),this.name="",this.blending=ls,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=io,this.blendDst=so,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(n.blending=this.blending),this.side!==mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==io&&(n.blendSrc=this.blendSrc),this.blendDst!==so&&(n.blendDst=this.blendDst),this.blendEquation!==Li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Mi extends tr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ge=new A,gr=new Vt;class Ue{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ko,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)gr.fromBufferAttribute(this,e),gr.applyMatrix3(t),this.setXY(e,gr.x,gr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array),r=Jt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ko&&(t.usage=this.usage),t}}class Xh extends Ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class qh extends Ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class _e extends Ue{constructor(t,e,n){super(new Float32Array(t),e,n)}}let gf=0;const en=new re,Ua=new Xe,Qi=new A,Ke=new vi,Ls=new vi,xe=new A;class we extends xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gh(t)?qh:Xh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Dt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,n){return en.makeTranslation(t,e,n),this.applyMatrix4(en),this}scale(t,e,n){return en.makeScale(t,e,n),this.applyMatrix4(en),this}lookAt(t){return Ua.lookAt(t),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _e(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ke.setFromBufferAttribute(r),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const n=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ls.setFromBufferAttribute(o),this.morphTargetsRelative?(xe.addVectors(Ke.min,Ls.min),Ke.expandByPoint(xe),xe.addVectors(Ke.max,Ls.max),Ke.expandByPoint(xe)):(Ke.expandByPoint(Ls.min),Ke.expandByPoint(Ls.max))}Ke.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(xe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)xe.fromBufferAttribute(o,c),l&&(Qi.fromBufferAttribute(t,c),xe.add(Qi)),s=Math.max(s,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ue(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new A,l[P]=new A;const c=new A,h=new A,u=new A,d=new Vt,f=new Vt,g=new Vt,_=new A,m=new A;function p(P,T,x){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,x),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),o[P].add(_),o[T].add(_),o[x].add(_),l[P].add(m),l[T].add(m),l[x].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let P=0,T=y.length;P<T;++P){const x=y[P],C=x.start,G=x.count;for(let H=C,X=C+G;H<X;H+=3)p(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const E=new A,M=new A,I=new A,w=new A;function R(P){I.fromBufferAttribute(s,P),w.copy(I);const T=o[P];E.copy(T),E.sub(I.multiplyScalar(I.dot(T))).normalize(),M.crossVectors(w,T);const C=M.dot(l[P])<0?-1:1;a.setXYZW(P,E.x,E.y,E.z,C)}for(let P=0,T=y.length;P<T;++P){const x=y[P],C=x.start,G=x.count;for(let H=C,X=C+G;H<X;H+=3)R(t.getX(H+0)),R(t.getX(H+1)),R(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new A,r=new A,a=new A,o=new A,l=new A,c=new A,h=new A,u=new A;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Ue(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const oc=new re,Ti=new hl,_r=new Gi,lc=new A,vr=new A,Mr=new A,xr=new A,Na=new A,Sr=new A,cc=new A,Er=new A;class Le extends Xe{constructor(t=new we,e=new Mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Sr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Na.fromBufferAttribute(u,t),a?Sr.addScaledVector(Na,h):Sr.addScaledVector(Na.sub(e),h))}e.add(Sr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(r),Ti.copy(t.ray).recast(t.near),!(_r.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(_r,lc)===null||Ti.origin.distanceToSquared(lc)>(t.far-t.near)**2))&&(oc.copy(r).invert(),Ti.copy(t.ray).applyMatrix4(oc),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ti)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,I=E;M<I;M+=3){const w=o.getX(M),R=o.getX(M+1),P=o.getX(M+2);s=yr(this,p,t,n,c,h,u,w,R,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=o.getX(m),E=o.getX(m+1),M=o.getX(m+2);s=yr(this,a,t,n,c,h,u,y,E,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,I=E;M<I;M+=3){const w=M,R=M+1,P=M+2;s=yr(this,p,t,n,c,h,u,w,R,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=m,E=m+1,M=m+2;s=yr(this,a,t,n,c,h,u,y,E,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function _f(i,t,e,n,s,r,a,o){let l;if(t.side===ke?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===mi,o),l===null)return null;Er.copy(o),Er.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Er);return c<e.near||c>e.far?null:{distance:c,point:Er.clone(),object:i}}function yr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,vr),i.getVertexPosition(l,Mr),i.getVertexPosition(c,xr);const h=_f(i,t,e,n,vr,Mr,xr,cc);if(h){const u=new A;on.getBarycoord(cc,vr,Mr,xr,u),s&&(h.uv=on.getInterpolatedAttribute(s,o,l,c,u,new Vt)),r&&(h.uv1=on.getInterpolatedAttribute(r,o,l,c,u,new Vt)),a&&(h.normal=on.getInterpolatedAttribute(a,o,l,c,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new A,materialIndex:0};on.getNormal(vr,Mr,xr,d.normal),h.face=d,h.barycoord=u}return h}class Ss extends we{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(h,3)),this.setAttribute("uv",new _e(u,2));function g(_,m,p,y,E,M,I,w,R,P,T){const x=M/R,C=I/P,G=M/2,H=I/2,X=w/2,Z=R+1,W=P+1;let J=0,k=0;const st=new A;for(let ht=0;ht<W;ht++){const St=ht*C-H;for(let Ot=0;Ot<Z;Ot++){const ee=Ot*x-G;st[_]=ee*y,st[m]=St*E,st[p]=X,c.push(st.x,st.y,st.z),st[_]=0,st[m]=0,st[p]=w>0?1:-1,h.push(st.x,st.y,st.z),u.push(Ot/R),u.push(1-ht/P),J+=1}}for(let ht=0;ht<P;ht++)for(let St=0;St<R;St++){const Ot=d+St+Z*ht,ee=d+St+Z*(ht+1),Y=d+(St+1)+Z*(ht+1),et=d+(St+1)+Z*ht;l.push(Ot,ee,et),l.push(ee,Y,et),k+=6}o.addGroup(f,k,T),f+=k,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ss(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function vs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Be(i){const t={};for(let e=0;e<i.length;e++){const n=vs(i[e]);for(const s in n)t[s]=n[s]}return t}function vf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Yh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const dl={clone:vs,merge:Be};var Mf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zn extends tr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mf,this.fragmentShader=xf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vs(t.uniforms),this.uniformsGroups=vf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class $h extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=Xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new A,hc=new Vt,uc=new Vt;class an extends $h{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=qs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(hs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(oi.x,oi.y).multiplyScalar(-t/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-t/oi.z)}getViewSize(t,e){return this.getViewBounds(t,hc,uc),e.subVectors(uc,hc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(hs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ts=-90,es=1;class Sf extends Xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new an(ts,es,t,e);s.layers=this.layers,this.add(s);const r=new an(ts,es,t,e);r.layers=this.layers,this.add(r);const a=new an(ts,es,t,e);a.layers=this.layers,this.add(a);const o=new an(ts,es,t,e);o.layers=this.layers,this.add(o);const l=new an(ts,es,t,e);l.layers=this.layers,this.add(l);const c=new an(ts,es,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===jr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Kh extends We{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ps,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ef extends zi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Kh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:In}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ss(5,5,5),r=new Zn({name:"CubemapFromEquirect",uniforms:vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:ui});r.uniforms.tEquirect.value=e;const a=new Le(s,r),o=e.minFilter;return e.minFilter===Oi&&(e.minFilter=In),new Sf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Oa=new A,yf=new A,Tf=new Dt;class Pi{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Oa.subVectors(n,e).cross(yf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Oa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Tf.getNormalMatrix(t),s=this.coplanarPoint(Oa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new Gi,Tr=new A;class Zh{constructor(t=new Pi,e=new Pi,n=new Pi,s=new Pi,r=new Pi,a=new Pi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Xn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],y=s[13],E=s[14],M=s[15];if(n[0].setComponents(l-r,d-c,m-f,M-p).normalize(),n[1].setComponents(l+r,d+c,m+f,M+p).normalize(),n[2].setComponents(l+a,d+h,m+g,M+y).normalize(),n[3].setComponents(l-a,d-h,m-g,M-y).normalize(),n[4].setComponents(l-o,d-u,m-_,M-E).normalize(),e===Xn)n[5].setComponents(l+o,d+u,m+_,M+E).normalize();else if(e===jr)n[5].setComponents(o,u,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(t){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Tr.x=s.normal.x>0?t.max.x:t.min.x,Tr.y=s.normal.y>0?t.max.y:t.min.y,Tr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Tr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Af(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class ra extends we{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const y=p*d-a;for(let E=0;E<c;E++){const M=E*u-r;g.push(M,-y,0),_.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const E=y+c*p,M=y+c*(p+1),I=y+1+c*(p+1),w=y+1+c*p;f.push(E,M,w),f.push(M,I,w)}this.setIndex(f),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(_,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ra(t.width,t.height,t.widthSegments,t.heightSegments)}}var bf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wf=`#ifdef USE_ALPHAHASH
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
#endif`,Rf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,If=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lf=`#ifdef USE_AOMAP
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
#endif`,Df=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uf=`#ifdef USE_BATCHING
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
#endif`,Nf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Of=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ff=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zf=`#ifdef USE_IRIDESCENCE
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
#endif`,Hf=`#ifdef USE_BUMPMAP
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
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Kf=`#define PI 3.141592653589793
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
} // validated`,Zf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jf=`vec3 transformedNormal = objectNormal;
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
#endif`,Jf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ep=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,np="gl_FragColor = linearToOutputTexel( gl_FragColor );",ip=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sp=`#ifdef USE_ENVMAP
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
#endif`,rp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ap=`#ifdef USE_ENVMAP
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
#endif`,op=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lp=`#ifdef USE_ENVMAP
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
#endif`,cp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,up=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fp=`#ifdef USE_GRADIENTMAP
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
}`,pp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_p=`uniform bool receiveShadow;
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
#endif`,vp=`#ifdef USE_ENVMAP
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
#endif`,Mp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yp=`PhysicalMaterial material;
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
#endif`,Tp=`struct PhysicalMaterial {
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
}`,Ap=`
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
#endif`,bp=`#if defined( RE_IndirectDiffuse )
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
#endif`,wp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ip=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Up=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Np=`#if defined( USE_POINTS_UV )
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
#endif`,Op=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gp=`#ifdef USE_MORPHTARGETS
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
#endif`,Vp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$p=`#ifdef USE_NORMALMAP
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
#endif`,Kp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,em=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,im=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,am=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,om=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hm=`float getShadowMask() {
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
}`,um=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dm=`#ifdef USE_SKINNING
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
#endif`,fm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pm=`#ifdef USE_SKINNING
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
#endif`,mm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_m=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mm=`#ifdef USE_TRANSMISSION
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
#endif`,xm=`#ifdef USE_TRANSMISSION
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
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Am=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bm=`uniform sampler2D t2D;
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
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Im=`#include <common>
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
}`,Lm=`#if DEPTH_PACKING == 3200
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
}`,Dm=`#define DISTANCE
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
}`,Um=`#define DISTANCE
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
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Om=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fm=`uniform float scale;
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
}`,Bm=`uniform vec3 diffuse;
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
}`,zm=`#include <common>
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
}`,Hm=`uniform vec3 diffuse;
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
}`,Gm=`#define LAMBERT
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
}`,Vm=`#define LAMBERT
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
}`,km=`#define MATCAP
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
}`,Wm=`#define MATCAP
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
}`,Xm=`#define NORMAL
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
}`,qm=`#define NORMAL
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
}`,Ym=`#define PHONG
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
}`,$m=`#define PHONG
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
}`,Km=`#define STANDARD
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
}`,Zm=`#define STANDARD
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
}`,jm=`#define TOON
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
}`,Jm=`#define TOON
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
}`,Qm=`uniform float size;
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
}`,tg=`uniform vec3 diffuse;
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
}`,eg=`#include <common>
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
}`,ng=`uniform vec3 color;
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
}`,ig=`uniform float rotation;
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
}`,sg=`uniform vec3 diffuse;
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
}`,Ct={alphahash_fragment:bf,alphahash_pars_fragment:wf,alphamap_fragment:Rf,alphamap_pars_fragment:Cf,alphatest_fragment:Pf,alphatest_pars_fragment:If,aomap_fragment:Lf,aomap_pars_fragment:Df,batching_pars_vertex:Uf,batching_vertex:Nf,begin_vertex:Of,beginnormal_vertex:Ff,bsdfs:Bf,iridescence_fragment:zf,bumpmap_pars_fragment:Hf,clipping_planes_fragment:Gf,clipping_planes_pars_fragment:Vf,clipping_planes_pars_vertex:kf,clipping_planes_vertex:Wf,color_fragment:Xf,color_pars_fragment:qf,color_pars_vertex:Yf,color_vertex:$f,common:Kf,cube_uv_reflection_fragment:Zf,defaultnormal_vertex:jf,displacementmap_pars_vertex:Jf,displacementmap_vertex:Qf,emissivemap_fragment:tp,emissivemap_pars_fragment:ep,colorspace_fragment:np,colorspace_pars_fragment:ip,envmap_fragment:sp,envmap_common_pars_fragment:rp,envmap_pars_fragment:ap,envmap_pars_vertex:op,envmap_physical_pars_fragment:vp,envmap_vertex:lp,fog_vertex:cp,fog_pars_vertex:hp,fog_fragment:up,fog_pars_fragment:dp,gradientmap_pars_fragment:fp,lightmap_pars_fragment:pp,lights_lambert_fragment:mp,lights_lambert_pars_fragment:gp,lights_pars_begin:_p,lights_toon_fragment:Mp,lights_toon_pars_fragment:xp,lights_phong_fragment:Sp,lights_phong_pars_fragment:Ep,lights_physical_fragment:yp,lights_physical_pars_fragment:Tp,lights_fragment_begin:Ap,lights_fragment_maps:bp,lights_fragment_end:wp,logdepthbuf_fragment:Rp,logdepthbuf_pars_fragment:Cp,logdepthbuf_pars_vertex:Pp,logdepthbuf_vertex:Ip,map_fragment:Lp,map_pars_fragment:Dp,map_particle_fragment:Up,map_particle_pars_fragment:Np,metalnessmap_fragment:Op,metalnessmap_pars_fragment:Fp,morphinstance_vertex:Bp,morphcolor_vertex:zp,morphnormal_vertex:Hp,morphtarget_pars_vertex:Gp,morphtarget_vertex:Vp,normal_fragment_begin:kp,normal_fragment_maps:Wp,normal_pars_fragment:Xp,normal_pars_vertex:qp,normal_vertex:Yp,normalmap_pars_fragment:$p,clearcoat_normal_fragment_begin:Kp,clearcoat_normal_fragment_maps:Zp,clearcoat_pars_fragment:jp,iridescence_pars_fragment:Jp,opaque_fragment:Qp,packing:tm,premultiplied_alpha_fragment:em,project_vertex:nm,dithering_fragment:im,dithering_pars_fragment:sm,roughnessmap_fragment:rm,roughnessmap_pars_fragment:am,shadowmap_pars_fragment:om,shadowmap_pars_vertex:lm,shadowmap_vertex:cm,shadowmask_pars_fragment:hm,skinbase_vertex:um,skinning_pars_vertex:dm,skinning_vertex:fm,skinnormal_vertex:pm,specularmap_fragment:mm,specularmap_pars_fragment:gm,tonemapping_fragment:_m,tonemapping_pars_fragment:vm,transmission_fragment:Mm,transmission_pars_fragment:xm,uv_pars_fragment:Sm,uv_pars_vertex:Em,uv_vertex:ym,worldpos_vertex:Tm,background_vert:Am,background_frag:bm,backgroundCube_vert:wm,backgroundCube_frag:Rm,cube_vert:Cm,cube_frag:Pm,depth_vert:Im,depth_frag:Lm,distanceRGBA_vert:Dm,distanceRGBA_frag:Um,equirect_vert:Nm,equirect_frag:Om,linedashed_vert:Fm,linedashed_frag:Bm,meshbasic_vert:zm,meshbasic_frag:Hm,meshlambert_vert:Gm,meshlambert_frag:Vm,meshmatcap_vert:km,meshmatcap_frag:Wm,meshnormal_vert:Xm,meshnormal_frag:qm,meshphong_vert:Ym,meshphong_frag:$m,meshphysical_vert:Km,meshphysical_frag:Zm,meshtoon_vert:jm,meshtoon_frag:Jm,points_vert:Qm,points_frag:tg,shadow_vert:eg,shadow_frag:ng,sprite_vert:ig,sprite_frag:sg},nt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},Ge={basic:{uniforms:Be([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:Be([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:Be([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:Be([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:Be([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:Be([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:Be([nt.points,nt.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:Be([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:Be([nt.common,nt.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:Be([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:Be([nt.sprite,nt.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distanceRGBA:{uniforms:Be([nt.common,nt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distanceRGBA_vert,fragmentShader:Ct.distanceRGBA_frag},shadow:{uniforms:Be([nt.lights,nt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};Ge.physical={uniforms:Be([Ge.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};const Ar={r:0,b:0,g:0},bi=new Kn,rg=new re;function ag(i,t,e,n,s,r,a){const o=new Ut(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(y){let E=y.isScene===!0?y.background:null;return E&&E.isTexture&&(E=(y.backgroundBlurriness>0?e:t).get(E)),E}function _(y){let E=!1;const M=g(y);M===null?p(o,l):M&&M.isColor&&(p(M,1),E=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,E){const M=g(E);M&&(M.isCubeTexture||M.mapping===ia)?(h===void 0&&(h=new Le(new Ss(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:vs(Ge.backgroundCube.uniforms),vertexShader:Ge.backgroundCube.vertexShader,fragmentShader:Ge.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),bi.copy(E.backgroundRotation),bi.x*=-1,bi.y*=-1,bi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(rg.makeRotationFromEuler(bi)),h.material.toneMapped=qt.getTransfer(M.colorSpace)!==Qt,(u!==M||d!==M.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Le(new ra(2,2),new Zn({name:"BackgroundMaterial",uniforms:vs(Ge.background.uniforms),vertexShader:Ge.background.vertexShader,fragmentShader:Ge.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=qt.getTransfer(M.colorSpace)!==Qt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,E){y.getRGB(Ar,Yh(i)),n.buffers.color.setClear(Ar.r,Ar.g,Ar.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(y,E=1){o.set(y),l=E,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:_,addToRenderList:m}}function og(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(x,C,G,H,X){let Z=!1;const W=u(H,G,C);r!==W&&(r=W,c(r.object)),Z=f(x,H,G,X),Z&&g(x,H,G,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,M(x,C,G,H),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,C,G){const H=G.wireframe===!0;let X=n[x.id];X===void 0&&(X={},n[x.id]=X);let Z=X[C.id];Z===void 0&&(Z={},X[C.id]=Z);let W=Z[H];return W===void 0&&(W=d(l()),Z[H]=W),W}function d(x){const C=[],G=[],H=[];for(let X=0;X<e;X++)C[X]=0,G[X]=0,H[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:G,attributeDivisors:H,object:x,attributes:{},index:null}}function f(x,C,G,H){const X=r.attributes,Z=C.attributes;let W=0;const J=G.getAttributes();for(const k in J)if(J[k].location>=0){const ht=X[k];let St=Z[k];if(St===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(St=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(St=x.instanceColor)),ht===void 0||ht.attribute!==St||St&&ht.data!==St.data)return!0;W++}return r.attributesNum!==W||r.index!==H}function g(x,C,G,H){const X={},Z=C.attributes;let W=0;const J=G.getAttributes();for(const k in J)if(J[k].location>=0){let ht=Z[k];ht===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(ht=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(ht=x.instanceColor));const St={};St.attribute=ht,ht&&ht.data&&(St.data=ht.data),X[k]=St,W++}r.attributes=X,r.attributesNum=W,r.index=H}function _(){const x=r.newAttributes;for(let C=0,G=x.length;C<G;C++)x[C]=0}function m(x){p(x,0)}function p(x,C){const G=r.newAttributes,H=r.enabledAttributes,X=r.attributeDivisors;G[x]=1,H[x]===0&&(i.enableVertexAttribArray(x),H[x]=1),X[x]!==C&&(i.vertexAttribDivisor(x,C),X[x]=C)}function y(){const x=r.newAttributes,C=r.enabledAttributes;for(let G=0,H=C.length;G<H;G++)C[G]!==x[G]&&(i.disableVertexAttribArray(G),C[G]=0)}function E(x,C,G,H,X,Z,W){W===!0?i.vertexAttribIPointer(x,C,G,X,Z):i.vertexAttribPointer(x,C,G,H,X,Z)}function M(x,C,G,H){_();const X=H.attributes,Z=G.getAttributes(),W=C.defaultAttributeValues;for(const J in Z){const k=Z[J];if(k.location>=0){let st=X[J];if(st===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(st=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(st=x.instanceColor)),st!==void 0){const ht=st.normalized,St=st.itemSize,Ot=t.get(st);if(Ot===void 0)continue;const ee=Ot.buffer,Y=Ot.type,et=Ot.bytesPerElement,vt=Y===i.INT||Y===i.UNSIGNED_INT||st.gpuType===il;if(st.isInterleavedBufferAttribute){const rt=st.data,At=rt.stride,Pt=st.offset;if(rt.isInstancedInterleavedBuffer){for(let Ft=0;Ft<k.locationSize;Ft++)p(k.location+Ft,rt.meshPerAttribute);x.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ft=0;Ft<k.locationSize;Ft++)m(k.location+Ft);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let Ft=0;Ft<k.locationSize;Ft++)E(k.location+Ft,St/k.locationSize,Y,ht,At*et,(Pt+St/k.locationSize*Ft)*et,vt)}else{if(st.isInstancedBufferAttribute){for(let rt=0;rt<k.locationSize;rt++)p(k.location+rt,st.meshPerAttribute);x.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let rt=0;rt<k.locationSize;rt++)m(k.location+rt);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let rt=0;rt<k.locationSize;rt++)E(k.location+rt,St/k.locationSize,Y,ht,St*et,St/k.locationSize*rt*et,vt)}}else if(W!==void 0){const ht=W[J];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(k.location,ht);break;case 3:i.vertexAttrib3fv(k.location,ht);break;case 4:i.vertexAttrib4fv(k.location,ht);break;default:i.vertexAttrib1fv(k.location,ht)}}}}y()}function I(){P();for(const x in n){const C=n[x];for(const G in C){const H=C[G];for(const X in H)h(H[X].object),delete H[X];delete C[G]}delete n[x]}}function w(x){if(n[x.id]===void 0)return;const C=n[x.id];for(const G in C){const H=C[G];for(const X in H)h(H[X].object),delete H[X];delete C[G]}delete n[x.id]}function R(x){for(const C in n){const G=n[C];if(G[x.id]===void 0)continue;const H=G[x.id];for(const X in H)h(H[X].object),delete H[X];delete G[x.id]}}function P(){T(),a=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:T,dispose:I,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function lg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function cg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==vn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const P=R===Qs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==$n&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Wn&&!P)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:I,maxSamples:w}}function hg(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Pi,o=new Dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,E=y*4;let M=p.clippingState||null;l.value=M,M=h(g,d,E,f);for(let I=0;I!==E;++I)M[I]=e[I];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,M=f;E!==_;++E,M+=4)a.copy(u[E]).applyMatrix4(y,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function ug(i){let t=new WeakMap;function e(a,o){return o===fo?a.mapping=ps:o===po&&(a.mapping=ms),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===fo||o===po)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ef(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Jh extends $h{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const as=4,dc=[.125,.215,.35,.446,.526,.582],Di=20,Fa=new Jh,fc=new Ut;let Ba=null,za=0,Ha=0,Ga=!1;const Ii=(1+Math.sqrt(5))/2,ns=1/Ii,pc=[new A(-Ii,ns,0),new A(Ii,ns,0),new A(-ns,0,Ii),new A(ns,0,Ii),new A(0,Ii,-ns),new A(0,Ii,ns),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class mc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ba=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ba,za,Ha),this._renderer.xr.enabled=Ga,t.scissorTest=!1,br(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ps||t.mapping===ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ba=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:In,minFilter:In,generateMipmaps:!1,type:Qs,format:vn,colorSpace:Ms,depthBuffer:!1},s=gc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dg(r)),this._blurMaterial=fg(r,t,e)}return s}_compileMaterial(t){const e=new Le(this._lodPlanes[0],t);this._renderer.compile(e,Fa)}_sceneToCubeUV(t,e,n,s){const o=new an(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(fc),h.toneMapping=di,h.autoClear=!1;const f=new Mi({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),g=new Le(new Ss,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(fc),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const E=this._cubeSize;br(s,y*E,p>2?E:0,E,E),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ps||t.mapping===ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_c());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Le(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;br(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Fa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=pc[(s-r-1)%pc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Le(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Di-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Di;m>Di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Di}`);const p=[];let y=0;for(let R=0;R<Di;++R){const P=R/_,T=Math.exp(-P*P/2);p.push(T),R===0?y+=T:R<m&&(y+=2*T)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;const M=this._sizeLods[s],I=3*M*(s>E-as?s-E+as:0),w=4*(this._cubeSize-M);br(e,I,w,3*M,2*M),l.setRenderTarget(e),l.render(u,Fa)}}function dg(i){const t=[],e=[],n=[];let s=i;const r=i-as+1+dc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-as?l=dc[a-i+as-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),E=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let w=0;w<f;w++){const R=w%3*2/3-1,P=w>2?0:-1,T=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];y.set(T,_*g*w),E.set(d,m*g*w);const x=[w,w,w,w,w,w];M.set(x,p*g*w)}const I=new we;I.setAttribute("position",new Ue(y,_)),I.setAttribute("uv",new Ue(E,m)),I.setAttribute("faceIndex",new Ue(M,p)),t.push(I),s>as&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function gc(i,t,e){const n=new zi(i,t,e);return n.texture.mapping=ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function br(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function fg(i,t,e){const n=new Float32Array(Di),s=new A(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fl(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function _c(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fl(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function vc(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function fl(){return`

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
	`}function pg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===fo||l===po,h=l===ps||l===ms;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new mc(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new mc(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function mg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Us("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function gg(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let E=0,M=y.length;E<M;E+=3){const I=y[E+0],w=y[E+1],R=y[E+2];d.push(I,w,w,R,R,I)}}else if(g!==void 0){const y=g.array;_=g.version;for(let E=0,M=y.length/3-1;E<M;E+=3){const I=E+0,w=E+1,R=E+2;d.push(I,w,w,R,R,I)}}else return;const m=new(Gh(d)?qh:Xh)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function _g(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*_[y];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function vg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Mg(i,t,e){const n=new WeakMap,s=new se;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let x=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var f=x;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let I=o.attributes.position.count*M,w=1;I>t.maxTextureSize&&(w=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const R=new Float32Array(I*w*4*u),P=new kh(R,I,w,u);P.type=Wn,P.needsUpdate=!0;const T=M*4;for(let C=0;C<u;C++){const G=p[C],H=y[C],X=E[C],Z=I*w*4*C;for(let W=0;W<G.count;W++){const J=W*T;g===!0&&(s.fromBufferAttribute(G,W),R[Z+J+0]=s.x,R[Z+J+1]=s.y,R[Z+J+2]=s.z,R[Z+J+3]=0),_===!0&&(s.fromBufferAttribute(H,W),R[Z+J+4]=s.x,R[Z+J+5]=s.y,R[Z+J+6]=s.z,R[Z+J+7]=0),m===!0&&(s.fromBufferAttribute(X,W),R[Z+J+8]=s.x,R[Z+J+9]=s.y,R[Z+J+10]=s.z,R[Z+J+11]=X.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new Vt(I,w)},n.set(o,d),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function xg(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Qh extends We{constructor(t,e,n,s,r,a,o,l,c,h=cs){if(h!==cs&&h!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===cs&&(n=Bi),n===void 0&&h===_s&&(n=gs),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:xn,this.minFilter=l!==void 0?l:xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const tu=new We,Mc=new Qh(1,1),eu=new kh,nu=new of,iu=new Kh,xc=[],Sc=[],Ec=new Float32Array(16),yc=new Float32Array(9),Tc=new Float32Array(4);function Es(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=xc[s];if(r===void 0&&(r=new Float32Array(s),xc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function aa(i,t){let e=Sc[t];e===void 0&&(e=new Int32Array(t),Sc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Sg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2fv(this.addr,t),Me(e,t)}}function yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;i.uniform3fv(this.addr,t),Me(e,t)}}function Tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4fv(this.addr,t),Me(e,t)}}function Ag(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(ve(e,n))return;Tc.set(n),i.uniformMatrix2fv(this.addr,!1,Tc),Me(e,n)}}function bg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(ve(e,n))return;yc.set(n),i.uniformMatrix3fv(this.addr,!1,yc),Me(e,n)}}function wg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(ve(e,n))return;Ec.set(n),i.uniformMatrix4fv(this.addr,!1,Ec),Me(e,n)}}function Rg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Cg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2iv(this.addr,t),Me(e,t)}}function Pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3iv(this.addr,t),Me(e,t)}}function Ig(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4iv(this.addr,t),Me(e,t)}}function Lg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Dg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2uiv(this.addr,t),Me(e,t)}}function Ug(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3uiv(this.addr,t),Me(e,t)}}function Ng(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4uiv(this.addr,t),Me(e,t)}}function Og(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Mc.compareFunction=Hh,r=Mc):r=tu,e.setTexture2D(t||r,s)}function Fg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||nu,s)}function Bg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||iu,s)}function zg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||eu,s)}function Hg(i){switch(i){case 5126:return Sg;case 35664:return Eg;case 35665:return yg;case 35666:return Tg;case 35674:return Ag;case 35675:return bg;case 35676:return wg;case 5124:case 35670:return Rg;case 35667:case 35671:return Cg;case 35668:case 35672:return Pg;case 35669:case 35673:return Ig;case 5125:return Lg;case 36294:return Dg;case 36295:return Ug;case 36296:return Ng;case 35678:case 36198:case 36298:case 36306:case 35682:return Og;case 35679:case 36299:case 36307:return Fg;case 35680:case 36300:case 36308:case 36293:return Bg;case 36289:case 36303:case 36311:case 36292:return zg}}function Gg(i,t){i.uniform1fv(this.addr,t)}function Vg(i,t){const e=Es(t,this.size,2);i.uniform2fv(this.addr,e)}function kg(i,t){const e=Es(t,this.size,3);i.uniform3fv(this.addr,e)}function Wg(i,t){const e=Es(t,this.size,4);i.uniform4fv(this.addr,e)}function Xg(i,t){const e=Es(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function qg(i,t){const e=Es(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Yg(i,t){const e=Es(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function $g(i,t){i.uniform1iv(this.addr,t)}function Kg(i,t){i.uniform2iv(this.addr,t)}function Zg(i,t){i.uniform3iv(this.addr,t)}function jg(i,t){i.uniform4iv(this.addr,t)}function Jg(i,t){i.uniform1uiv(this.addr,t)}function Qg(i,t){i.uniform2uiv(this.addr,t)}function t_(i,t){i.uniform3uiv(this.addr,t)}function e_(i,t){i.uniform4uiv(this.addr,t)}function n_(i,t,e){const n=this.cache,s=t.length,r=aa(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||tu,r[a])}function i_(i,t,e){const n=this.cache,s=t.length,r=aa(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||nu,r[a])}function s_(i,t,e){const n=this.cache,s=t.length,r=aa(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||iu,r[a])}function r_(i,t,e){const n=this.cache,s=t.length,r=aa(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||eu,r[a])}function a_(i){switch(i){case 5126:return Gg;case 35664:return Vg;case 35665:return kg;case 35666:return Wg;case 35674:return Xg;case 35675:return qg;case 35676:return Yg;case 5124:case 35670:return $g;case 35667:case 35671:return Kg;case 35668:case 35672:return Zg;case 35669:case 35673:return jg;case 5125:return Jg;case 36294:return Qg;case 36295:return t_;case 36296:return e_;case 35678:case 36198:case 36298:case 36306:case 35682:return n_;case 35679:case 36299:case 36307:return i_;case 35680:case 36300:case 36308:case 36293:return s_;case 36289:case 36303:case 36311:case 36292:return r_}}class o_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Hg(e.type)}}class l_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=a_(e.type)}}class c_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Va=/(\w+)(\])?(\[|\.)?/g;function Ac(i,t){i.seq.push(t),i.map[t.id]=t}function h_(i,t,e){const n=i.name,s=n.length;for(Va.lastIndex=0;;){const r=Va.exec(n),a=Va.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ac(e,c===void 0?new o_(o,i,t):new l_(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new c_(o),Ac(e,u)),e=u}}}class Yr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);h_(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function bc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const u_=37297;let d_=0;function f_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const wc=new Dt;function p_(i){qt._getMatrix(wc,qt.workingColorSpace,i);const t=`mat3( ${wc.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(i)){case sa:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Rc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+f_(i.getShaderSource(t),a)}else return s}function m_(i,t){const e=p_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function g_(i,t){let e;switch(t){case gd:e="Linear";break;case _d:e="Reinhard";break;case vd:e="Cineon";break;case Md:e="ACESFilmic";break;case Sd:e="AgX";break;case Ed:e="Neutral";break;case xd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const wr=new A;function __(){qt.getLuminanceCoefficients(wr);const i=wr.x.toFixed(4),t=wr.y.toFixed(4),e=wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ns).join(`
`)}function M_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function x_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ns(i){return i!==""}function Cc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const S_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wo(i){return i.replace(S_,y_)}const E_=new Map;function y_(i,t){let e=Ct[t];if(e===void 0){const n=E_.get(t);if(n!==void 0)e=Ct[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Wo(e)}const T_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ic(i){return i.replace(T_,A_)}function A_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Lc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function b_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ah?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ju?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Hn&&(t="SHADOWMAP_TYPE_VSM"),t}function w_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ps:case ms:t="ENVMAP_TYPE_CUBE";break;case ia:t="ENVMAP_TYPE_CUBE_UV";break}return t}function R_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ms:t="ENVMAP_MODE_REFRACTION";break}return t}function C_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Rh:t="ENVMAP_BLENDING_MULTIPLY";break;case pd:t="ENVMAP_BLENDING_MIX";break;case md:t="ENVMAP_BLENDING_ADD";break}return t}function P_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function I_(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=b_(e),c=w_(e),h=R_(e),u=C_(e),d=P_(e),f=v_(e),g=M_(r),_=s.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ns).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ns).join(`
`),p.length>0&&(p+=`
`)):(m=[Lc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),p=[Lc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?Ct.tonemapping_pars_fragment:"",e.toneMapping!==di?g_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ct.colorspace_pars_fragment,m_("linearToOutputTexel",e.outputColorSpace),__(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ns).join(`
`)),a=Wo(a),a=Cc(a,e),a=Pc(a,e),o=Wo(o),o=Cc(o,e),o=Pc(o,e),a=Ic(a),o=Ic(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=y+m+a,M=y+p+o,I=bc(s,s.VERTEX_SHADER,E),w=bc(s,s.FRAGMENT_SHADER,M);s.attachShader(_,I),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(C){if(i.debug.checkShaderErrors){const G=s.getProgramInfoLog(_).trim(),H=s.getShaderInfoLog(I).trim(),X=s.getShaderInfoLog(w).trim();let Z=!0,W=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,I,w);else{const J=Rc(s,I,"vertex"),k=Rc(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+G+`
`+J+`
`+k)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(H===""||X==="")&&(W=!1);W&&(C.diagnostics={runnable:Z,programLog:G,vertexShader:{log:H,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(I),s.deleteShader(w),P=new Yr(s,_),T=x_(s,_)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,u_)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=d_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=w,this}let L_=0;class D_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new U_(t),e.set(t,n)),n}}class U_{constructor(t){this.id=L_++,this.code=t,this.usedTimes=0}}function N_(i,t,e,n,s,r,a){const o=new ul,l=new D_,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,x,C,G,H){const X=G.fog,Z=H.geometry,W=T.isMeshStandardMaterial?G.environment:null,J=(T.isMeshStandardMaterial?e:t).get(T.envMap||W),k=J&&J.mapping===ia?J.image.height:null,st=g[T.type];T.precision!==null&&(f=s.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));const ht=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,St=ht!==void 0?ht.length:0;let Ot=0;Z.morphAttributes.position!==void 0&&(Ot=1),Z.morphAttributes.normal!==void 0&&(Ot=2),Z.morphAttributes.color!==void 0&&(Ot=3);let ee,Y,et,vt;if(st){const jt=Ge[st];ee=jt.vertexShader,Y=jt.fragmentShader}else ee=T.vertexShader,Y=T.fragmentShader,l.update(T),et=l.getVertexShaderID(T),vt=l.getFragmentShaderID(T);const rt=i.getRenderTarget(),At=i.state.buffers.depth.getReversed(),Pt=H.isInstancedMesh===!0,Ft=H.isBatchedMesh===!0,he=!!T.map,kt=!!T.matcap,pe=!!J,N=!!T.aoMap,Qe=!!T.lightMap,zt=!!T.bumpMap,Ht=!!T.normalMap,yt=!!T.displacementMap,ae=!!T.emissiveMap,Et=!!T.metalnessMap,b=!!T.roughnessMap,v=T.anisotropy>0,O=T.clearcoat>0,$=T.dispersion>0,j=T.iridescence>0,q=T.sheen>0,Mt=T.transmission>0,at=v&&!!T.anisotropyMap,ut=O&&!!T.clearcoatMap,Wt=O&&!!T.clearcoatNormalMap,Q=O&&!!T.clearcoatRoughnessMap,ft=j&&!!T.iridescenceMap,Tt=j&&!!T.iridescenceThicknessMap,bt=q&&!!T.sheenColorMap,pt=q&&!!T.sheenRoughnessMap,Gt=!!T.specularMap,Nt=!!T.specularColorMap,ne=!!T.specularIntensityMap,L=Mt&&!!T.transmissionMap,it=Mt&&!!T.thicknessMap,V=!!T.gradientMap,K=!!T.alphaMap,ct=T.alphaTest>0,ot=!!T.alphaHash,It=!!T.extensions;let de=di;T.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(de=i.toneMapping);const Re={shaderID:st,shaderType:T.type,shaderName:T.name,vertexShader:ee,fragmentShader:Y,defines:T.defines,customVertexShaderID:et,customFragmentShaderID:vt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:Ft,batchingColor:Ft&&H._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&H.instanceColor!==null,instancingMorph:Pt&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Ms,alphaToCoverage:!!T.alphaToCoverage,map:he,matcap:kt,envMap:pe,envMapMode:pe&&J.mapping,envMapCubeUVHeight:k,aoMap:N,lightMap:Qe,bumpMap:zt,normalMap:Ht,displacementMap:d&&yt,emissiveMap:ae,normalMapObjectSpace:Ht&&T.normalMapType===wd,normalMapTangentSpace:Ht&&T.normalMapType===bd,metalnessMap:Et,roughnessMap:b,anisotropy:v,anisotropyMap:at,clearcoat:O,clearcoatMap:ut,clearcoatNormalMap:Wt,clearcoatRoughnessMap:Q,dispersion:$,iridescence:j,iridescenceMap:ft,iridescenceThicknessMap:Tt,sheen:q,sheenColorMap:bt,sheenRoughnessMap:pt,specularMap:Gt,specularColorMap:Nt,specularIntensityMap:ne,transmission:Mt,transmissionMap:L,thicknessMap:it,gradientMap:V,opaque:T.transparent===!1&&T.blending===ls&&T.alphaToCoverage===!1,alphaMap:K,alphaTest:ct,alphaHash:ot,combine:T.combine,mapUv:he&&_(T.map.channel),aoMapUv:N&&_(T.aoMap.channel),lightMapUv:Qe&&_(T.lightMap.channel),bumpMapUv:zt&&_(T.bumpMap.channel),normalMapUv:Ht&&_(T.normalMap.channel),displacementMapUv:yt&&_(T.displacementMap.channel),emissiveMapUv:ae&&_(T.emissiveMap.channel),metalnessMapUv:Et&&_(T.metalnessMap.channel),roughnessMapUv:b&&_(T.roughnessMap.channel),anisotropyMapUv:at&&_(T.anisotropyMap.channel),clearcoatMapUv:ut&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:pt&&_(T.sheenRoughnessMap.channel),specularMapUv:Gt&&_(T.specularMap.channel),specularColorMapUv:Nt&&_(T.specularColorMap.channel),specularIntensityMapUv:ne&&_(T.specularIntensityMap.channel),transmissionMapUv:L&&_(T.transmissionMap.channel),thicknessMapUv:it&&_(T.thicknessMap.channel),alphaMapUv:K&&_(T.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Ht||v),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Z.attributes.uv&&(he||K),fog:!!X,useFog:T.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:At,skinning:H.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Ot,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:de,decodeVideoTexture:he&&T.map.isVideoTexture===!0&&qt.getTransfer(T.map.colorSpace)===Qt,decodeVideoTextureEmissive:ae&&T.emissiveMap.isVideoTexture===!0&&qt.getTransfer(T.emissiveMap.colorSpace)===Qt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Vn,flipSided:T.side===ke,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:It&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&T.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function p(T){const x=[];if(T.shaderID?x.push(T.shaderID):(x.push(T.customVertexShaderID),x.push(T.customFragmentShaderID)),T.defines!==void 0)for(const C in T.defines)x.push(C),x.push(T.defines[C]);return T.isRawShaderMaterial===!1&&(y(x,T),E(x,T),x.push(i.outputColorSpace)),x.push(T.customProgramCacheKey),x.join()}function y(T,x){T.push(x.precision),T.push(x.outputColorSpace),T.push(x.envMapMode),T.push(x.envMapCubeUVHeight),T.push(x.mapUv),T.push(x.alphaMapUv),T.push(x.lightMapUv),T.push(x.aoMapUv),T.push(x.bumpMapUv),T.push(x.normalMapUv),T.push(x.displacementMapUv),T.push(x.emissiveMapUv),T.push(x.metalnessMapUv),T.push(x.roughnessMapUv),T.push(x.anisotropyMapUv),T.push(x.clearcoatMapUv),T.push(x.clearcoatNormalMapUv),T.push(x.clearcoatRoughnessMapUv),T.push(x.iridescenceMapUv),T.push(x.iridescenceThicknessMapUv),T.push(x.sheenColorMapUv),T.push(x.sheenRoughnessMapUv),T.push(x.specularMapUv),T.push(x.specularColorMapUv),T.push(x.specularIntensityMapUv),T.push(x.transmissionMapUv),T.push(x.thicknessMapUv),T.push(x.combine),T.push(x.fogExp2),T.push(x.sizeAttenuation),T.push(x.morphTargetsCount),T.push(x.morphAttributeCount),T.push(x.numDirLights),T.push(x.numPointLights),T.push(x.numSpotLights),T.push(x.numSpotLightMaps),T.push(x.numHemiLights),T.push(x.numRectAreaLights),T.push(x.numDirLightShadows),T.push(x.numPointLightShadows),T.push(x.numSpotLightShadows),T.push(x.numSpotLightShadowsWithMaps),T.push(x.numLightProbes),T.push(x.shadowMapType),T.push(x.toneMapping),T.push(x.numClippingPlanes),T.push(x.numClipIntersection),T.push(x.depthPacking)}function E(T,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),T.push(o.mask)}function M(T){const x=g[T.type];let C;if(x){const G=Ge[x];C=dl.clone(G.uniforms)}else C=T.uniforms;return C}function I(T,x){let C;for(let G=0,H=h.length;G<H;G++){const X=h[G];if(X.cacheKey===x){C=X,++C.usedTimes;break}}return C===void 0&&(C=new I_(i,x,T,r),h.push(C)),C}function w(T){if(--T.usedTimes===0){const x=h.indexOf(T);h[x]=h[h.length-1],h.pop(),T.destroy()}}function R(T){l.remove(T)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:I,releaseProgram:w,releaseShaderCache:R,programs:h,dispose:P}}function O_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function F_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Dc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Uc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function o(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||F_),n.length>1&&n.sort(d||Dc),s.length>1&&s.sort(d||Dc)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function B_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Uc,i.set(n,[a])):s>=r.length?(a=new Uc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function z_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new Ut};break;case"SpotLight":e={position:new A,direction:new A,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new A,halfWidth:new A,halfHeight:new A};break}return i[t.id]=e,e}}}function H_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let G_=0;function V_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function k_(i){const t=new z_,e=H_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);const s=new A,r=new re,a=new re;function o(c){let h=0,u=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,E=0,M=0,I=0,w=0,R=0;c.sort(V_);for(let T=0,x=c.length;T<x;T++){const C=c[T],G=C.color,H=C.intensity,X=C.distance,Z=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=G.r*H,u+=G.g*H,d+=G.b*H;else if(C.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(C.sh.coefficients[W],H);R++}else if(C.isDirectionalLight){const W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const J=C.shadow,k=e.get(C);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=Z,n.directionalShadowMatrix[f]=C.shadow.matrix,y++}n.directional[f]=W,f++}else if(C.isSpotLight){const W=t.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(G).multiplyScalar(H),W.distance=X,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,n.spot[_]=W;const J=C.shadow;if(C.map&&(n.spotLightMap[I]=C.map,I++,J.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[_]=J.matrix,C.castShadow){const k=e.get(C);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=Z,M++}_++}else if(C.isRectAreaLight){const W=t.get(C);W.color.copy(G).multiplyScalar(H),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=W,m++}else if(C.isPointLight){const W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){const J=C.shadow,k=e.get(C);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,k.shadowCameraNear=J.camera.near,k.shadowCameraFar=J.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=C.shadow.matrix,E++}n.point[g]=W,g++}else if(C.isHemisphereLight){const W=t.get(C);W.skyColor.copy(C.color).multiplyScalar(H),W.groundColor.copy(C.groundColor).multiplyScalar(H),n.hemi[p]=W,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==y||P.numPointShadows!==E||P.numSpotShadows!==M||P.numSpotMaps!==I||P.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=M+I-w,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,P.directionalLength=f,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=y,P.numPointShadows=E,P.numSpotShadows=M,P.numSpotMaps=I,P.numLightProbes=R,n.version=G_++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const E=c[p];if(E.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(E.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(E.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Nc(i){const t=new k_(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function W_(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Nc(i),t.set(s,[o])):r>=a.length?(o=new Nc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class X_ extends tr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Td,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class q_ extends tr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Y_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$_=`uniform sampler2D shadow_pass;
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
}`;function K_(i,t,e){let n=new Zh;const s=new Vt,r=new Vt,a=new se,o=new X_({depthPacking:Ad}),l=new q_,c={},h=e.maxTextureSize,u={[mi]:ke,[ke]:mi,[Vn]:Vn},d=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:Y_,fragmentShader:$_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new we;g.setAttribute("position",new Ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Le(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ah;let p=this.type;this.render=function(w,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const T=i.getRenderTarget(),x=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),G=i.state;G.setBlending(ui),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const H=p!==Hn&&this.type===Hn,X=p===Hn&&this.type!==Hn;for(let Z=0,W=w.length;Z<W;Z++){const J=w[Z],k=J.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const st=k.getFrameExtents();if(s.multiply(st),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,k.mapSize.y=r.y)),k.map===null||H===!0||X===!0){const St=this.type!==Hn?{minFilter:xn,magFilter:xn}:{};k.map!==null&&k.map.dispose(),k.map=new zi(s.x,s.y,St),k.map.texture.name=J.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const ht=k.getViewportCount();for(let St=0;St<ht;St++){const Ot=k.getViewport(St);a.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),G.viewport(a),k.updateMatrices(J,St),n=k.getFrustum(),M(R,P,k.camera,J,this.type)}k.isPointLightShadow!==!0&&this.type===Hn&&y(k,P),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,x,C)};function y(w,R){const P=t.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new zi(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,P,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,P,f,_,null)}function E(w,R,P,T){let x=null;const C=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)x=C;else if(x=P.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const G=x.uuid,H=R.uuid;let X=c[G];X===void 0&&(X={},c[G]=X);let Z=X[H];Z===void 0&&(Z=x.clone(),X[H]=Z,R.addEventListener("dispose",I)),x=Z}if(x.visible=R.visible,x.wireframe=R.wireframe,T===Hn?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:u[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const G=i.properties.get(x);G.light=P}return x}function M(w,R,P,T,x){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===Hn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const H=t.update(w),X=w.material;if(Array.isArray(X)){const Z=H.groups;for(let W=0,J=Z.length;W<J;W++){const k=Z[W],st=X[k.materialIndex];if(st&&st.visible){const ht=E(w,st,T,x);w.onBeforeShadow(i,w,R,P,H,ht,k),i.renderBufferDirect(P,null,H,ht,w,k),w.onAfterShadow(i,w,R,P,H,ht,k)}}}else if(X.visible){const Z=E(w,X,T,x);w.onBeforeShadow(i,w,R,P,H,Z,null),i.renderBufferDirect(P,null,H,Z,w,null),w.onAfterShadow(i,w,R,P,H,Z,null)}}const G=w.children;for(let H=0,X=G.length;H<X;H++)M(G[H],R,P,T,x)}function I(w){w.target.removeEventListener("dispose",I);for(const P in c){const T=c[P],x=w.target.uuid;x in T&&(T[x].dispose(),delete T[x])}}}const Z_={[ro]:ao,[oo]:ho,[lo]:uo,[fs]:co,[ao]:ro,[ho]:oo,[uo]:lo,[co]:fs};function j_(i,t){function e(){let L=!1;const it=new se;let V=null;const K=new se(0,0,0,0);return{setMask:function(ct){V!==ct&&!L&&(i.colorMask(ct,ct,ct,ct),V=ct)},setLocked:function(ct){L=ct},setClear:function(ct,ot,It,de,Re){Re===!0&&(ct*=de,ot*=de,It*=de),it.set(ct,ot,It,de),K.equals(it)===!1&&(i.clearColor(ct,ot,It,de),K.copy(it))},reset:function(){L=!1,V=null,K.set(-1,0,0,0)}}}function n(){let L=!1,it=!1,V=null,K=null,ct=null;return{setReversed:function(ot){if(it!==ot){const It=t.get("EXT_clip_control");it?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT);const de=ct;ct=null,this.setClear(de)}it=ot},getReversed:function(){return it},setTest:function(ot){ot?rt(i.DEPTH_TEST):At(i.DEPTH_TEST)},setMask:function(ot){V!==ot&&!L&&(i.depthMask(ot),V=ot)},setFunc:function(ot){if(it&&(ot=Z_[ot]),K!==ot){switch(ot){case ro:i.depthFunc(i.NEVER);break;case ao:i.depthFunc(i.ALWAYS);break;case oo:i.depthFunc(i.LESS);break;case fs:i.depthFunc(i.LEQUAL);break;case lo:i.depthFunc(i.EQUAL);break;case co:i.depthFunc(i.GEQUAL);break;case ho:i.depthFunc(i.GREATER);break;case uo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=ot}},setLocked:function(ot){L=ot},setClear:function(ot){ct!==ot&&(it&&(ot=1-ot),i.clearDepth(ot),ct=ot)},reset:function(){L=!1,V=null,K=null,ct=null,it=!1}}}function s(){let L=!1,it=null,V=null,K=null,ct=null,ot=null,It=null,de=null,Re=null;return{setTest:function(jt){L||(jt?rt(i.STENCIL_TEST):At(i.STENCIL_TEST))},setMask:function(jt){it!==jt&&!L&&(i.stencilMask(jt),it=jt)},setFunc:function(jt,cn,Dn){(V!==jt||K!==cn||ct!==Dn)&&(i.stencilFunc(jt,cn,Dn),V=jt,K=cn,ct=Dn)},setOp:function(jt,cn,Dn){(ot!==jt||It!==cn||de!==Dn)&&(i.stencilOp(jt,cn,Dn),ot=jt,It=cn,de=Dn)},setLocked:function(jt){L=jt},setClear:function(jt){Re!==jt&&(i.clearStencil(jt),Re=jt)},reset:function(){L=!1,it=null,V=null,K=null,ct=null,ot=null,It=null,de=null,Re=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,E=null,M=null,I=null,w=null,R=new Ut(0,0,0),P=0,T=!1,x=null,C=null,G=null,H=null,X=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,J=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(k)[1]),W=J>=1):k.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),W=J>=2);let st=null,ht={};const St=i.getParameter(i.SCISSOR_BOX),Ot=i.getParameter(i.VIEWPORT),ee=new se().fromArray(St),Y=new se().fromArray(Ot);function et(L,it,V,K){const ct=new Uint8Array(4),ot=i.createTexture();i.bindTexture(L,ot),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let It=0;It<V;It++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(it+It,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return ot}const vt={};vt[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),vt[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),vt[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(i.DEPTH_TEST),a.setFunc(fs),zt(!1),Ht(Hl),rt(i.CULL_FACE),N(ui);function rt(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function At(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Pt(L,it){return u[L]!==it?(i.bindFramebuffer(L,it),u[L]=it,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=it),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=it),!0):!1}function Ft(L,it){let V=f,K=!1;if(L){V=d.get(it),V===void 0&&(V=[],d.set(it,V));const ct=L.textures;if(V.length!==ct.length||V[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,It=ct.length;ot<It;ot++)V[ot]=i.COLOR_ATTACHMENT0+ot;V.length=ct.length,K=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,K=!0);K&&i.drawBuffers(V)}function he(L){return g!==L?(i.useProgram(L),g=L,!0):!1}const kt={[Li]:i.FUNC_ADD,[Ju]:i.FUNC_SUBTRACT,[Qu]:i.FUNC_REVERSE_SUBTRACT};kt[td]=i.MIN,kt[wh]=i.MAX;const pe={[ed]:i.ZERO,[nd]:i.ONE,[id]:i.SRC_COLOR,[io]:i.SRC_ALPHA,[cd]:i.SRC_ALPHA_SATURATE,[od]:i.DST_COLOR,[rd]:i.DST_ALPHA,[sd]:i.ONE_MINUS_SRC_COLOR,[so]:i.ONE_MINUS_SRC_ALPHA,[ld]:i.ONE_MINUS_DST_COLOR,[ad]:i.ONE_MINUS_DST_ALPHA,[hd]:i.CONSTANT_COLOR,[ud]:i.ONE_MINUS_CONSTANT_COLOR,[dd]:i.CONSTANT_ALPHA,[fd]:i.ONE_MINUS_CONSTANT_ALPHA};function N(L,it,V,K,ct,ot,It,de,Re,jt){if(L===ui){_===!0&&(At(i.BLEND),_=!1);return}if(_===!1&&(rt(i.BLEND),_=!0),L!==bh){if(L!==m||jt!==T){if((p!==Li||M!==Li)&&(i.blendEquation(i.FUNC_ADD),p=Li,M=Li),jt)switch(L){case ls:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zr:i.blendFunc(i.ONE,i.ONE);break;case Gl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Gl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,E=null,I=null,w=null,R.set(0,0,0),P=0,m=L,T=jt}return}ct=ct||it,ot=ot||V,It=It||K,(it!==p||ct!==M)&&(i.blendEquationSeparate(kt[it],kt[ct]),p=it,M=ct),(V!==y||K!==E||ot!==I||It!==w)&&(i.blendFuncSeparate(pe[V],pe[K],pe[ot],pe[It]),y=V,E=K,I=ot,w=It),(de.equals(R)===!1||Re!==P)&&(i.blendColor(de.r,de.g,de.b,Re),R.copy(de),P=Re),m=L,T=!1}function Qe(L,it){L.side===Vn?At(i.CULL_FACE):rt(i.CULL_FACE);let V=L.side===ke;it&&(V=!V),zt(V),L.blending===ls&&L.transparent===!1?N(ui):N(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const K=L.stencilWrite;o.setTest(K),K&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ae(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):At(i.SAMPLE_ALPHA_TO_COVERAGE)}function zt(L){x!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),x=L)}function Ht(L){L!==Ku?(rt(i.CULL_FACE),L!==C&&(L===Hl?i.cullFace(i.BACK):L===Zu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):At(i.CULL_FACE),C=L}function yt(L){L!==G&&(W&&i.lineWidth(L),G=L)}function ae(L,it,V){L?(rt(i.POLYGON_OFFSET_FILL),(H!==it||X!==V)&&(i.polygonOffset(it,V),H=it,X=V)):At(i.POLYGON_OFFSET_FILL)}function Et(L){L?rt(i.SCISSOR_TEST):At(i.SCISSOR_TEST)}function b(L){L===void 0&&(L=i.TEXTURE0+Z-1),st!==L&&(i.activeTexture(L),st=L)}function v(L,it,V){V===void 0&&(st===null?V=i.TEXTURE0+Z-1:V=st);let K=ht[V];K===void 0&&(K={type:void 0,texture:void 0},ht[V]=K),(K.type!==L||K.texture!==it)&&(st!==V&&(i.activeTexture(V),st=V),i.bindTexture(L,it||vt[L]),K.type=L,K.texture=it)}function O(){const L=ht[st];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Mt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Wt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Tt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(L){ee.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ee.copy(L))}function pt(L){Y.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Y.copy(L))}function Gt(L,it){let V=c.get(it);V===void 0&&(V=new WeakMap,c.set(it,V));let K=V.get(L);K===void 0&&(K=i.getUniformBlockIndex(it,L.name),V.set(L,K))}function Nt(L,it){const K=c.get(it).get(L);l.get(it)!==K&&(i.uniformBlockBinding(it,K,L.__bindingPointIndex),l.set(it,K))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},st=null,ht={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,E=null,M=null,I=null,w=null,R=new Ut(0,0,0),P=0,T=!1,x=null,C=null,G=null,H=null,X=null,ee.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:At,bindFramebuffer:Pt,drawBuffers:Ft,useProgram:he,setBlending:N,setMaterial:Qe,setFlipSided:zt,setCullFace:Ht,setLineWidth:yt,setPolygonOffset:ae,setScissorTest:Et,activeTexture:b,bindTexture:v,unbindTexture:O,compressedTexImage2D:$,compressedTexImage3D:j,texImage2D:ft,texImage3D:Tt,updateUBOMapping:Gt,uniformBlockBinding:Nt,texStorage2D:Wt,texStorage3D:Q,texSubImage2D:q,texSubImage3D:Mt,compressedTexSubImage2D:at,compressedTexSubImage3D:ut,scissor:bt,viewport:pt,reset:ne}}function Oc(i,t,e,n){const s=J_(n);switch(e){case Dh:return i*t;case Nh:return i*t;case Oh:return i*t*2;case Fh:return i*t/s.components*s.byteLength;case al:return i*t/s.components*s.byteLength;case Bh:return i*t*2/s.components*s.byteLength;case ol:return i*t*2/s.components*s.byteLength;case Uh:return i*t*3/s.components*s.byteLength;case vn:return i*t*4/s.components*s.byteLength;case ll:return i*t*4/s.components*s.byteLength;case Vr:case kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wr:case Xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vo:case xo:return Math.max(i,16)*Math.max(t,8)/4;case _o:case Mo:return Math.max(i,8)*Math.max(t,8)/2;case So:case Eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case To:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ao:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case bo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case wo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ro:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Co:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Po:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Io:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Lo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Do:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case No:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Oo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Fo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case qr:case Bo:case zo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case zh:case Ho:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Go:case Vo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function J_(i){switch(i){case $n:case Ph:return{byteLength:1,components:1};case Xs:case Ih:case Qs:return{byteLength:2,components:1};case sl:case rl:return{byteLength:2,components:4};case Bi:case il:case Wn:return{byteLength:4,components:1};case Lh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Q_(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Vt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return f?new OffscreenCanvas(b,v):Jr("canvas")}function _(b,v,O){let $=1;const j=Et(b);if((j.width>O||j.height>O)&&($=O/Math.max(j.width,j.height)),$<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const q=Math.floor($*j.width),Mt=Math.floor($*j.height);u===void 0&&(u=g(q,Mt));const at=v?g(q,Mt):u;return at.width=q,at.height=Mt,at.getContext("2d").drawImage(b,0,0,q,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+q+"x"+Mt+")."),at}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){i.generateMipmap(b)}function y(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(b,v,O,$,j=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let q=v;if(v===i.RED&&(O===i.FLOAT&&(q=i.R32F),O===i.HALF_FLOAT&&(q=i.R16F),O===i.UNSIGNED_BYTE&&(q=i.R8)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.R8UI),O===i.UNSIGNED_SHORT&&(q=i.R16UI),O===i.UNSIGNED_INT&&(q=i.R32UI),O===i.BYTE&&(q=i.R8I),O===i.SHORT&&(q=i.R16I),O===i.INT&&(q=i.R32I)),v===i.RG&&(O===i.FLOAT&&(q=i.RG32F),O===i.HALF_FLOAT&&(q=i.RG16F),O===i.UNSIGNED_BYTE&&(q=i.RG8)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RG8UI),O===i.UNSIGNED_SHORT&&(q=i.RG16UI),O===i.UNSIGNED_INT&&(q=i.RG32UI),O===i.BYTE&&(q=i.RG8I),O===i.SHORT&&(q=i.RG16I),O===i.INT&&(q=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGB8UI),O===i.UNSIGNED_SHORT&&(q=i.RGB16UI),O===i.UNSIGNED_INT&&(q=i.RGB32UI),O===i.BYTE&&(q=i.RGB8I),O===i.SHORT&&(q=i.RGB16I),O===i.INT&&(q=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),O===i.UNSIGNED_INT&&(q=i.RGBA32UI),O===i.BYTE&&(q=i.RGBA8I),O===i.SHORT&&(q=i.RGBA16I),O===i.INT&&(q=i.RGBA32I)),v===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),v===i.RGBA){const Mt=j?sa:qt.getTransfer($);O===i.FLOAT&&(q=i.RGBA32F),O===i.HALF_FLOAT&&(q=i.RGBA16F),O===i.UNSIGNED_BYTE&&(q=Mt===Qt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function M(b,v){let O;return b?v===null||v===Bi||v===gs?O=i.DEPTH24_STENCIL8:v===Wn?O=i.DEPTH32F_STENCIL8:v===Xs&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Bi||v===gs?O=i.DEPTH_COMPONENT24:v===Wn?O=i.DEPTH_COMPONENT32F:v===Xs&&(O=i.DEPTH_COMPONENT16),O}function I(b,v){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==xn&&b.minFilter!==In?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function w(b){const v=b.target;v.removeEventListener("dispose",w),P(v),v.isVideoTexture&&h.delete(v)}function R(b){const v=b.target;v.removeEventListener("dispose",R),x(v)}function P(b){const v=n.get(b);if(v.__webglInit===void 0)return;const O=b.source,$=d.get(O);if($){const j=$[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&T(b),Object.keys($).length===0&&d.delete(O)}n.remove(b)}function T(b){const v=n.get(b);i.deleteTexture(v.__webglTexture);const O=b.source,$=d.get(O);delete $[v.__cacheKey],a.memory.textures--}function x(b){const v=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let j=0;j<v.__webglFramebuffer[$].length;j++)i.deleteFramebuffer(v.__webglFramebuffer[$][j]);else i.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)i.deleteFramebuffer(v.__webglFramebuffer[$]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=b.textures;for(let $=0,j=O.length;$<j;$++){const q=n.get(O[$]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(O[$])}n.remove(b)}let C=0;function G(){C=0}function H(){const b=C;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),C+=1,b}function X(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function Z(b,v){const O=n.get(b);if(b.isVideoTexture&&yt(b),b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){const $=b.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,b,v);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function W(b,v){const O=n.get(b);if(b.version>0&&O.__version!==b.version){Y(O,b,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function J(b,v){const O=n.get(b);if(b.version>0&&O.__version!==b.version){Y(O,b,v);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function k(b,v){const O=n.get(b);if(b.version>0&&O.__version!==b.version){et(O,b,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}const st={[mo]:i.REPEAT,[Ni]:i.CLAMP_TO_EDGE,[go]:i.MIRRORED_REPEAT},ht={[xn]:i.NEAREST,[yd]:i.NEAREST_MIPMAP_NEAREST,[or]:i.NEAREST_MIPMAP_LINEAR,[In]:i.LINEAR,[ga]:i.LINEAR_MIPMAP_NEAREST,[Oi]:i.LINEAR_MIPMAP_LINEAR},St={[Rd]:i.NEVER,[Ud]:i.ALWAYS,[Cd]:i.LESS,[Hh]:i.LEQUAL,[Pd]:i.EQUAL,[Dd]:i.GEQUAL,[Id]:i.GREATER,[Ld]:i.NOTEQUAL};function Ot(b,v){if(v.type===Wn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===In||v.magFilter===ga||v.magFilter===or||v.magFilter===Oi||v.minFilter===In||v.minFilter===ga||v.minFilter===or||v.minFilter===Oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,st[v.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,st[v.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,st[v.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ht[v.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ht[v.minFilter]),v.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,St[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===xn||v.minFilter!==or&&v.minFilter!==Oi||v.type===Wn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ee(b,v){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",w));const $=v.source;let j=d.get($);j===void 0&&(j={},d.set($,j));const q=X(v);if(q!==b.__cacheKey){j[q]===void 0&&(j[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),j[q].usedTimes++;const Mt=j[b.__cacheKey];Mt!==void 0&&(j[b.__cacheKey].usedTimes--,Mt.usedTimes===0&&T(v)),b.__cacheKey=q,b.__webglTexture=j[q].texture}return O}function Y(b,v,O){let $=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=i.TEXTURE_3D);const j=ee(b,v),q=v.source;e.bindTexture($,b.__webglTexture,i.TEXTURE0+O);const Mt=n.get(q);if(q.version!==Mt.__version||j===!0){e.activeTexture(i.TEXTURE0+O);const at=qt.getPrimaries(qt.workingColorSpace),ut=v.colorSpace===hi?null:qt.getPrimaries(v.colorSpace),Wt=v.colorSpace===hi||at===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let Q=_(v.image,!1,s.maxTextureSize);Q=ae(v,Q);const ft=r.convert(v.format,v.colorSpace),Tt=r.convert(v.type);let bt=E(v.internalFormat,ft,Tt,v.colorSpace,v.isVideoTexture);Ot($,v);let pt;const Gt=v.mipmaps,Nt=v.isVideoTexture!==!0,ne=Mt.__version===void 0||j===!0,L=q.dataReady,it=I(v,Q);if(v.isDepthTexture)bt=M(v.format===_s,v.type),ne&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,bt,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,bt,Q.width,Q.height,0,ft,Tt,null));else if(v.isDataTexture)if(Gt.length>0){Nt&&ne&&e.texStorage2D(i.TEXTURE_2D,it,bt,Gt[0].width,Gt[0].height);for(let V=0,K=Gt.length;V<K;V++)pt=Gt[V],Nt?L&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,pt.width,pt.height,ft,Tt,pt.data):e.texImage2D(i.TEXTURE_2D,V,bt,pt.width,pt.height,0,ft,Tt,pt.data);v.generateMipmaps=!1}else Nt?(ne&&e.texStorage2D(i.TEXTURE_2D,it,bt,Q.width,Q.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,ft,Tt,Q.data)):e.texImage2D(i.TEXTURE_2D,0,bt,Q.width,Q.height,0,ft,Tt,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Nt&&ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,bt,Gt[0].width,Gt[0].height,Q.depth);for(let V=0,K=Gt.length;V<K;V++)if(pt=Gt[V],v.format!==vn)if(ft!==null)if(Nt){if(L)if(v.layerUpdates.size>0){const ct=Oc(pt.width,pt.height,v.format,v.type);for(const ot of v.layerUpdates){const It=pt.data.subarray(ot*ct/pt.data.BYTES_PER_ELEMENT,(ot+1)*ct/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,ot,pt.width,pt.height,1,ft,It)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,pt.width,pt.height,Q.depth,ft,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,bt,pt.width,pt.height,Q.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,pt.width,pt.height,Q.depth,ft,Tt,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,V,bt,pt.width,pt.height,Q.depth,0,ft,Tt,pt.data)}else{Nt&&ne&&e.texStorage2D(i.TEXTURE_2D,it,bt,Gt[0].width,Gt[0].height);for(let V=0,K=Gt.length;V<K;V++)pt=Gt[V],v.format!==vn?ft!==null?Nt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,V,bt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?L&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,pt.width,pt.height,ft,Tt,pt.data):e.texImage2D(i.TEXTURE_2D,V,bt,pt.width,pt.height,0,ft,Tt,pt.data)}else if(v.isDataArrayTexture)if(Nt){if(ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,bt,Q.width,Q.height,Q.depth),L)if(v.layerUpdates.size>0){const V=Oc(Q.width,Q.height,v.format,v.type);for(const K of v.layerUpdates){const ct=Q.data.subarray(K*V/Q.data.BYTES_PER_ELEMENT,(K+1)*V/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,Q.width,Q.height,1,ft,Tt,ct)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ft,Tt,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,bt,Q.width,Q.height,Q.depth,0,ft,Tt,Q.data);else if(v.isData3DTexture)Nt?(ne&&e.texStorage3D(i.TEXTURE_3D,it,bt,Q.width,Q.height,Q.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ft,Tt,Q.data)):e.texImage3D(i.TEXTURE_3D,0,bt,Q.width,Q.height,Q.depth,0,ft,Tt,Q.data);else if(v.isFramebufferTexture){if(ne)if(Nt)e.texStorage2D(i.TEXTURE_2D,it,bt,Q.width,Q.height);else{let V=Q.width,K=Q.height;for(let ct=0;ct<it;ct++)e.texImage2D(i.TEXTURE_2D,ct,bt,V,K,0,ft,Tt,null),V>>=1,K>>=1}}else if(Gt.length>0){if(Nt&&ne){const V=Et(Gt[0]);e.texStorage2D(i.TEXTURE_2D,it,bt,V.width,V.height)}for(let V=0,K=Gt.length;V<K;V++)pt=Gt[V],Nt?L&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,ft,Tt,pt):e.texImage2D(i.TEXTURE_2D,V,bt,ft,Tt,pt);v.generateMipmaps=!1}else if(Nt){if(ne){const V=Et(Q);e.texStorage2D(i.TEXTURE_2D,it,bt,V.width,V.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,Tt,Q)}else e.texImage2D(i.TEXTURE_2D,0,bt,ft,Tt,Q);m(v)&&p($),Mt.__version=q.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function et(b,v,O){if(v.image.length!==6)return;const $=ee(b,v),j=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+O);const q=n.get(j);if(j.version!==q.__version||$===!0){e.activeTexture(i.TEXTURE0+O);const Mt=qt.getPrimaries(qt.workingColorSpace),at=v.colorSpace===hi?null:qt.getPrimaries(v.colorSpace),ut=v.colorSpace===hi||Mt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Wt=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,ft=[];for(let K=0;K<6;K++)!Wt&&!Q?ft[K]=_(v.image[K],!0,s.maxCubemapSize):ft[K]=Q?v.image[K].image:v.image[K],ft[K]=ae(v,ft[K]);const Tt=ft[0],bt=r.convert(v.format,v.colorSpace),pt=r.convert(v.type),Gt=E(v.internalFormat,bt,pt,v.colorSpace),Nt=v.isVideoTexture!==!0,ne=q.__version===void 0||$===!0,L=j.dataReady;let it=I(v,Tt);Ot(i.TEXTURE_CUBE_MAP,v);let V;if(Wt){Nt&&ne&&e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Gt,Tt.width,Tt.height);for(let K=0;K<6;K++){V=ft[K].mipmaps;for(let ct=0;ct<V.length;ct++){const ot=V[ct];v.format!==vn?bt!==null?Nt?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct,0,0,ot.width,ot.height,bt,ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct,Gt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct,0,0,ot.width,ot.height,bt,pt,ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct,Gt,ot.width,ot.height,0,bt,pt,ot.data)}}}else{if(V=v.mipmaps,Nt&&ne){V.length>0&&it++;const K=Et(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Gt,K.width,K.height)}for(let K=0;K<6;K++)if(Q){Nt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ft[K].width,ft[K].height,bt,pt,ft[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Gt,ft[K].width,ft[K].height,0,bt,pt,ft[K].data);for(let ct=0;ct<V.length;ct++){const It=V[ct].image[K].image;Nt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct+1,0,0,It.width,It.height,bt,pt,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct+1,Gt,It.width,It.height,0,bt,pt,It.data)}}else{Nt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,bt,pt,ft[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Gt,bt,pt,ft[K]);for(let ct=0;ct<V.length;ct++){const ot=V[ct];Nt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct+1,0,0,bt,pt,ot.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ct+1,Gt,bt,pt,ot.image[K])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),q.__version=j.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function vt(b,v,O,$,j,q){const Mt=r.convert(O.format,O.colorSpace),at=r.convert(O.type),ut=E(O.internalFormat,Mt,at,O.colorSpace),Wt=n.get(v),Q=n.get(O);if(Q.__renderTarget=v,!Wt.__hasExternalTextures){const ft=Math.max(1,v.width>>q),Tt=Math.max(1,v.height>>q);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,q,ut,ft,Tt,v.depth,0,Mt,at,null):e.texImage2D(j,q,ut,ft,Tt,0,Mt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),Ht(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,j,Q.__webglTexture,0,zt(v)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,j,Q.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(b,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,b),v.depthBuffer){const $=v.depthTexture,j=$&&$.isDepthTexture?$.type:null,q=M(v.stencilBuffer,j),Mt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=zt(v);Ht(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,q,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,q,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,q,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,b)}else{const $=v.textures;for(let j=0;j<$.length;j++){const q=$[j],Mt=r.convert(q.format,q.colorSpace),at=r.convert(q.type),ut=E(q.internalFormat,Mt,at,q.colorSpace),Wt=zt(v);O&&Ht(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,ut,v.width,v.height):Ht(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt,ut,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ut,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function At(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(v.depthTexture);$.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);const j=$.__webglTexture,q=zt(v);if(v.depthTexture.format===cs)Ht(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(v.depthTexture.format===_s)Ht(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Pt(b){const v=n.get(b),O=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){const $=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){const j=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",j)};$.addEventListener("dispose",j),v.__depthDisposeCallback=j}v.__boundDepthTexture=$}if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");At(v.__webglFramebuffer,b)}else if(O){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=i.createRenderbuffer(),rt(v.__webglDepthbuffer[$],b,!1);else{const j=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),rt(v.__webglDepthbuffer,b,!1);else{const $=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,j)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(b,v,O){const $=n.get(b);v!==void 0&&vt($.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Pt(b)}function he(b){const v=b.texture,O=n.get(b),$=n.get(v);b.addEventListener("dispose",R);const j=b.textures,q=b.isWebGLCubeRenderTarget===!0,Mt=j.length>1;if(Mt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=v.version,a.memory.textures++),q){O.__webglFramebuffer=[];for(let at=0;at<6;at++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[at]=[];for(let ut=0;ut<v.mipmaps.length;ut++)O.__webglFramebuffer[at][ut]=i.createFramebuffer()}else O.__webglFramebuffer[at]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let at=0;at<v.mipmaps.length;at++)O.__webglFramebuffer[at]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let at=0,ut=j.length;at<ut;at++){const Wt=n.get(j[at]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&Ht(b)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let at=0;at<j.length;at++){const ut=j[at];O.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[at]);const Wt=r.convert(ut.format,ut.colorSpace),Q=r.convert(ut.type),ft=E(ut.internalFormat,Wt,Q,ut.colorSpace,b.isXRRenderTarget===!0),Tt=zt(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,ft,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,O.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(O.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Ot(i.TEXTURE_CUBE_MAP,v);for(let at=0;at<6;at++)if(v.mipmaps&&v.mipmaps.length>0)for(let ut=0;ut<v.mipmaps.length;ut++)vt(O.__webglFramebuffer[at][ut],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,ut);else vt(O.__webglFramebuffer[at],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(v)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let at=0,ut=j.length;at<ut;at++){const Wt=j[at],Q=n.get(Wt);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),Ot(i.TEXTURE_2D,Wt),vt(O.__webglFramebuffer,b,Wt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),m(Wt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(at=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,$.__webglTexture),Ot(at,v),v.mipmaps&&v.mipmaps.length>0)for(let ut=0;ut<v.mipmaps.length;ut++)vt(O.__webglFramebuffer[ut],b,v,i.COLOR_ATTACHMENT0,at,ut);else vt(O.__webglFramebuffer,b,v,i.COLOR_ATTACHMENT0,at,0);m(v)&&p(at),e.unbindTexture()}b.depthBuffer&&Pt(b)}function kt(b){const v=b.textures;for(let O=0,$=v.length;O<$;O++){const j=v[O];if(m(j)){const q=y(b),Mt=n.get(j).__webglTexture;e.bindTexture(q,Mt),p(q),e.unbindTexture()}}}const pe=[],N=[];function Qe(b){if(b.samples>0){if(Ht(b)===!1){const v=b.textures,O=b.width,$=b.height;let j=i.COLOR_BUFFER_BIT;const q=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(b),at=v.length>1;if(at)for(let ut=0;ut<v.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let ut=0;ut<v.length;ut++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[ut]);const Wt=n.get(v[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Wt,0)}i.blitFramebuffer(0,0,O,$,0,0,O,$,j,i.NEAREST),l===!0&&(pe.length=0,N.length=0,pe.push(i.COLOR_ATTACHMENT0+ut),b.depthBuffer&&b.resolveDepthBuffer===!1&&(pe.push(q),N.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let ut=0;ut<v.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[ut]);const Wt=n.get(v[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const v=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function zt(b){return Math.min(s.maxSamples,b.samples)}function Ht(b){const v=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function yt(b){const v=a.render.frame;h.get(b)!==v&&(h.set(b,v),b.update())}function ae(b,v){const O=b.colorSpace,$=b.format,j=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==Ms&&O!==hi&&(qt.getTransfer(O)===Qt?($!==vn||j!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function Et(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=G,this.setTexture2D=Z,this.setTexture2DArray=W,this.setTexture3D=J,this.setTextureCube=k,this.rebindTextures=Ft,this.setupRenderTarget=he,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=Ht}function t0(i,t){function e(n,s=hi){let r;const a=qt.getTransfer(s);if(n===$n)return i.UNSIGNED_BYTE;if(n===sl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===rl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Lh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ph)return i.BYTE;if(n===Ih)return i.SHORT;if(n===Xs)return i.UNSIGNED_SHORT;if(n===il)return i.INT;if(n===Bi)return i.UNSIGNED_INT;if(n===Wn)return i.FLOAT;if(n===Qs)return i.HALF_FLOAT;if(n===Dh)return i.ALPHA;if(n===Uh)return i.RGB;if(n===vn)return i.RGBA;if(n===Nh)return i.LUMINANCE;if(n===Oh)return i.LUMINANCE_ALPHA;if(n===cs)return i.DEPTH_COMPONENT;if(n===_s)return i.DEPTH_STENCIL;if(n===Fh)return i.RED;if(n===al)return i.RED_INTEGER;if(n===Bh)return i.RG;if(n===ol)return i.RG_INTEGER;if(n===ll)return i.RGBA_INTEGER;if(n===Vr||n===kr||n===Wr||n===Xr)if(a===Qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_o||n===vo||n===Mo||n===xo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_o)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===So||n===Eo||n===yo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===So||n===Eo)return a===Qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===yo)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===To||n===Ao||n===bo||n===wo||n===Ro||n===Co||n===Po||n===Io||n===Lo||n===Do||n===Uo||n===No||n===Oo||n===Fo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===To)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ao)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bo)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wo)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ro)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Co)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Po)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Io)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Lo)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Do)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Uo)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===No)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oo)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fo)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qr||n===Bo||n===zo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===qr)return a===Qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zh||n===Ho||n===Go||n===Vo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===qr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ho)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Go)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class e0 extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class me extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const n0={type:"move"};class ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(n0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new me;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const i0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,s0=`
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

}`;class r0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new We,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Zn({vertexShader:i0,fragmentShader:s0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Le(new ra(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class a0 extends xs{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new r0,m=e.getContextAttributes();let p=null,y=null;const E=[],M=[],I=new Vt;let w=null;const R=new an;R.viewport=new se;const P=new an;P.viewport=new se;const T=[R,P],x=new e0;let C=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let et=E[Y];return et===void 0&&(et=new ka,E[Y]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Y){let et=E[Y];return et===void 0&&(et=new ka,E[Y]=et),et.getGripSpace()},this.getHand=function(Y){let et=E[Y];return et===void 0&&(et=new ka,E[Y]=et),et.getHandSpace()};function H(Y){const et=M.indexOf(Y.inputSource);if(et===-1)return;const vt=E[et];vt!==void 0&&(vt.update(Y.inputSource,Y.frame,c||a),vt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function X(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",Z);for(let Y=0;Y<E.length;Y++){const et=M[Y];et!==null&&(M[Y]=null,E[Y].disconnect(et))}C=null,G=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,y=null,ee.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",X),s.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){const et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new zi(f.framebufferWidth,f.framebufferHeight,{format:vn,type:$n,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,vt=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?_s:cs,vt=m.stencil?gs:Bi);const At={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(At),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new zi(d.textureWidth,d.textureHeight,{format:vn,type:$n,depthTexture:new Qh(d.textureWidth,d.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ee.setContext(s),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(Y){for(let et=0;et<Y.removed.length;et++){const vt=Y.removed[et],rt=M.indexOf(vt);rt>=0&&(M[rt]=null,E[rt].disconnect(vt))}for(let et=0;et<Y.added.length;et++){const vt=Y.added[et];let rt=M.indexOf(vt);if(rt===-1){for(let Pt=0;Pt<E.length;Pt++)if(Pt>=M.length){M.push(vt),rt=Pt;break}else if(M[Pt]===null){M[Pt]=vt,rt=Pt;break}if(rt===-1)break}const At=E[rt];At&&At.connect(vt)}}const W=new A,J=new A;function k(Y,et,vt){W.setFromMatrixPosition(et.matrixWorld),J.setFromMatrixPosition(vt.matrixWorld);const rt=W.distanceTo(J),At=et.projectionMatrix.elements,Pt=vt.projectionMatrix.elements,Ft=At[14]/(At[10]-1),he=At[14]/(At[10]+1),kt=(At[9]+1)/At[5],pe=(At[9]-1)/At[5],N=(At[8]-1)/At[0],Qe=(Pt[8]+1)/Pt[0],zt=Ft*N,Ht=Ft*Qe,yt=rt/(-N+Qe),ae=yt*-N;if(et.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ae),Y.translateZ(yt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),At[10]===-1)Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const Et=Ft+yt,b=he+yt,v=zt-ae,O=Ht+(rt-ae),$=kt*he/b*Et,j=pe*he/b*Et;Y.projectionMatrix.makePerspective(v,O,$,j,Et,b),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function st(Y,et){et===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(et.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let et=Y.near,vt=Y.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(vt=_.depthFar)),x.near=P.near=R.near=et,x.far=P.far=R.far=vt,(C!==x.near||G!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,G=x.far),R.layers.mask=Y.layers.mask|2,P.layers.mask=Y.layers.mask|4,x.layers.mask=R.layers.mask|P.layers.mask;const rt=Y.parent,At=x.cameras;st(x,rt);for(let Pt=0;Pt<At.length;Pt++)st(At[Pt],rt);At.length===2?k(x,R,P):x.projectionMatrix.copy(R.projectionMatrix),ht(Y,x,rt)};function ht(Y,et,vt){vt===null?Y.matrix.copy(et.matrixWorld):(Y.matrix.copy(vt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(et.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=qs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let St=null;function Ot(Y,et){if(h=et.getViewerPose(c||a),g=et,h!==null){const vt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let rt=!1;vt.length!==x.cameras.length&&(x.cameras.length=0,rt=!0);for(let Pt=0;Pt<vt.length;Pt++){const Ft=vt[Pt];let he=null;if(f!==null)he=f.getViewport(Ft);else{const pe=u.getViewSubImage(d,Ft);he=pe.viewport,Pt===0&&(t.setRenderTargetTextures(y,pe.colorTexture,d.ignoreDepthValues?void 0:pe.depthStencilTexture),t.setRenderTarget(y))}let kt=T[Pt];kt===void 0&&(kt=new an,kt.layers.enable(Pt),kt.viewport=new se,T[Pt]=kt),kt.matrix.fromArray(Ft.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Ft.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(he.x,he.y,he.width,he.height),Pt===0&&(x.matrix.copy(kt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),rt===!0&&x.cameras.push(kt)}const At=s.enabledFeatures;if(At&&At.includes("depth-sensing")){const Pt=u.getDepthInformation(vt[0]);Pt&&Pt.isValid&&Pt.texture&&_.init(t,Pt,s.renderState)}}for(let vt=0;vt<E.length;vt++){const rt=M[vt],At=E[vt];rt!==null&&At!==void 0&&At.update(rt,et,c||a)}St&&St(Y,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const ee=new jh;ee.setAnimationLoop(Ot),this.setAnimationLoop=function(Y){St=Y},this.dispose=function(){}}}const wi=new Kn,o0=new re;function l0(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Yh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,E,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ke&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ke&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),E=y.envMap,M=y.envMapRotation;E&&(m.envMap.value=E,wi.copy(M),wi.x*=-1,wi.y*=-1,wi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),m.envMapRotation.value.setFromMatrix4(o0.makeRotationFromEuler(wi)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ke&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function c0(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){const M=E.program;n.uniformBlockBinding(y,M)}function c(y,E){let M=s[y.id];M===void 0&&(g(y),M=h(y),s[y.id]=M,y.addEventListener("dispose",m));const I=E.program;n.updateUBOMapping(y,I);const w=t.render.frame;r[y.id]!==w&&(d(y),r[y.id]=w)}function h(y){const E=u();y.__bindingPointIndex=E;const M=i.createBuffer(),I=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,I,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,M),M}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const E=s[y.id],M=y.uniforms,I=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let w=0,R=M.length;w<R;w++){const P=Array.isArray(M[w])?M[w]:[M[w]];for(let T=0,x=P.length;T<x;T++){const C=P[T];if(f(C,w,T,I)===!0){const G=C.__offset,H=Array.isArray(C.value)?C.value:[C.value];let X=0;for(let Z=0;Z<H.length;Z++){const W=H[Z],J=_(W);typeof W=="number"||typeof W=="boolean"?(C.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,G+X,C.__data)):W.isMatrix3?(C.__data[0]=W.elements[0],C.__data[1]=W.elements[1],C.__data[2]=W.elements[2],C.__data[3]=0,C.__data[4]=W.elements[3],C.__data[5]=W.elements[4],C.__data[6]=W.elements[5],C.__data[7]=0,C.__data[8]=W.elements[6],C.__data[9]=W.elements[7],C.__data[10]=W.elements[8],C.__data[11]=0):(W.toArray(C.__data,X),X+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,E,M,I){const w=y.value,R=E+"_"+M;if(I[R]===void 0)return typeof w=="number"||typeof w=="boolean"?I[R]=w:I[R]=w.clone(),!0;{const P=I[R];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return I[R]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(y){const E=y.uniforms;let M=0;const I=16;for(let R=0,P=E.length;R<P;R++){const T=Array.isArray(E[R])?E[R]:[E[R]];for(let x=0,C=T.length;x<C;x++){const G=T[x],H=Array.isArray(G.value)?G.value:[G.value];for(let X=0,Z=H.length;X<Z;X++){const W=H[X],J=_(W),k=M%I,st=k%J.boundary,ht=k+st;M+=st,ht!==0&&I-ht<J.storage&&(M+=I-ht),G.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=M,M+=J.storage}}}const w=M%I;return w>0&&(M+=I-w),y.__size=M,y.__cache={},this}function _(y){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),E}function m(y){const E=y.target;E.removeEventListener("dispose",m);const M=a.indexOf(E.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class h0{constructor(t={}){const{canvas:e=Jd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=rn,this.toneMapping=di,this.toneMappingExposure=1;const M=this;let I=!1,w=0,R=0,P=null,T=-1,x=null;const C=new se,G=new se;let H=null;const X=new Ut(0);let Z=0,W=e.width,J=e.height,k=1,st=null,ht=null;const St=new se(0,0,W,J),Ot=new se(0,0,W,J);let ee=!1;const Y=new Zh;let et=!1,vt=!1;const rt=new re,At=new re,Pt=new A,Ft=new se,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function pe(){return P===null?k:1}let N=n;function Qe(S,D){return e.getContext(S,D)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${nl}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",ot,!1),N===null){const D="webgl2";if(N=Qe(D,S),N===null)throw Qe(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let zt,Ht,yt,ae,Et,b,v,O,$,j,q,Mt,at,ut,Wt,Q,ft,Tt,bt,pt,Gt,Nt,ne,L;function it(){zt=new mg(N),zt.init(),Nt=new t0(N,zt),Ht=new cg(N,zt,t,Nt),yt=new j_(N,zt),Ht.reverseDepthBuffer&&d&&yt.buffers.depth.setReversed(!0),ae=new vg(N),Et=new O_,b=new Q_(N,zt,yt,Et,Ht,Nt,ae),v=new ug(M),O=new pg(M),$=new Af(N),ne=new og(N,$),j=new gg(N,$,ae,ne),q=new xg(N,j,$,ae),bt=new Mg(N,Ht,b),Q=new hg(Et),Mt=new N_(M,v,O,zt,Ht,ne,Q),at=new l0(M,Et),ut=new B_,Wt=new W_(zt),Tt=new ag(M,v,O,yt,q,f,l),ft=new K_(M,q,Ht),L=new c0(N,ae,Ht,yt),pt=new lg(N,zt,ae),Gt=new _g(N,zt,ae),ae.programs=Mt.programs,M.capabilities=Ht,M.extensions=zt,M.properties=Et,M.renderLists=ut,M.shadowMap=ft,M.state=yt,M.info=ae}it();const V=new a0(M,N);this.xr=V,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const S=zt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=zt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(S){S!==void 0&&(k=S,this.setSize(W,J,!1))},this.getSize=function(S){return S.set(W,J)},this.setSize=function(S,D,B=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=S,J=D,e.width=Math.floor(S*k),e.height=Math.floor(D*k),B===!0&&(e.style.width=S+"px",e.style.height=D+"px"),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(W*k,J*k).floor()},this.setDrawingBufferSize=function(S,D,B){W=S,J=D,k=B,e.width=Math.floor(S*B),e.height=Math.floor(D*B),this.setViewport(0,0,S,D)},this.getCurrentViewport=function(S){return S.copy(C)},this.getViewport=function(S){return S.copy(St)},this.setViewport=function(S,D,B,z){S.isVector4?St.set(S.x,S.y,S.z,S.w):St.set(S,D,B,z),yt.viewport(C.copy(St).multiplyScalar(k).round())},this.getScissor=function(S){return S.copy(Ot)},this.setScissor=function(S,D,B,z){S.isVector4?Ot.set(S.x,S.y,S.z,S.w):Ot.set(S,D,B,z),yt.scissor(G.copy(Ot).multiplyScalar(k).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(S){yt.setScissorTest(ee=S)},this.setOpaqueSort=function(S){st=S},this.setTransparentSort=function(S){ht=S},this.getClearColor=function(S){return S.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(S=!0,D=!0,B=!0){let z=0;if(S){let U=!1;if(P!==null){const tt=P.texture.format;U=tt===ll||tt===ol||tt===al}if(U){const tt=P.texture.type,lt=tt===$n||tt===Bi||tt===Xs||tt===gs||tt===sl||tt===rl,mt=Tt.getClearColor(),gt=Tt.getClearAlpha(),wt=mt.r,Lt=mt.g,_t=mt.b;lt?(g[0]=wt,g[1]=Lt,g[2]=_t,g[3]=gt,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=wt,_[1]=Lt,_[2]=_t,_[3]=gt,N.clearBufferiv(N.COLOR,0,_))}else z|=N.COLOR_BUFFER_BIT}D&&(z|=N.DEPTH_BUFFER_BIT),B&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),ut.dispose(),Wt.dispose(),Et.dispose(),v.dispose(),O.dispose(),q.dispose(),ne.dispose(),L.dispose(),Mt.dispose(),V.dispose(),V.removeEventListener("sessionstart",Ll),V.removeEventListener("sessionend",Dl),Si.stop()};function K(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const S=ae.autoReset,D=ft.enabled,B=ft.autoUpdate,z=ft.needsUpdate,U=ft.type;it(),ae.autoReset=S,ft.enabled=D,ft.autoUpdate=B,ft.needsUpdate=z,ft.type=U}function ot(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function It(S){const D=S.target;D.removeEventListener("dispose",It),de(D)}function de(S){Re(S),Et.remove(S)}function Re(S){const D=Et.get(S).programs;D!==void 0&&(D.forEach(function(B){Mt.releaseProgram(B)}),S.isShaderMaterial&&Mt.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,B,z,U,tt){D===null&&(D=he);const lt=U.isMesh&&U.matrixWorld.determinant()<0,mt=Wu(S,D,B,z,U);yt.setMaterial(z,lt);let gt=B.index,wt=1;if(z.wireframe===!0){if(gt=j.getWireframeAttribute(B),gt===void 0)return;wt=2}const Lt=B.drawRange,_t=B.attributes.position;let Yt=Lt.start*wt,ie=(Lt.start+Lt.count)*wt;tt!==null&&(Yt=Math.max(Yt,tt.start*wt),ie=Math.min(ie,(tt.start+tt.count)*wt)),gt!==null?(Yt=Math.max(Yt,0),ie=Math.min(ie,gt.count)):_t!=null&&(Yt=Math.max(Yt,0),ie=Math.min(ie,_t.count));const oe=ie-Yt;if(oe<0||oe===1/0)return;ne.setup(U,z,mt,B,gt);let He,Kt=pt;if(gt!==null&&(He=$.get(gt),Kt=Gt,Kt.setIndex(He)),U.isMesh)z.wireframe===!0?(yt.setLineWidth(z.wireframeLinewidth*pe()),Kt.setMode(N.LINES)):Kt.setMode(N.TRIANGLES);else if(U.isLine){let xt=z.linewidth;xt===void 0&&(xt=1),yt.setLineWidth(xt*pe()),U.isLineSegments?Kt.setMode(N.LINES):U.isLineLoop?Kt.setMode(N.LINE_LOOP):Kt.setMode(N.LINE_STRIP)}else U.isPoints?Kt.setMode(N.POINTS):U.isSprite&&Kt.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Kt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))Kt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const xt=U._multiDrawStarts,Un=U._multiDrawCounts,Zt=U._multiDrawCount,hn=gt?$.get(gt).bytesPerElement:1,Vi=Et.get(z).currentProgram.getUniforms();for(let Ye=0;Ye<Zt;Ye++)Vi.setValue(N,"_gl_DrawID",Ye),Kt.render(xt[Ye]/hn,Un[Ye])}else if(U.isInstancedMesh)Kt.renderInstances(Yt,oe,U.count);else if(B.isInstancedBufferGeometry){const xt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Un=Math.min(B.instanceCount,xt);Kt.renderInstances(Yt,oe,Un)}else Kt.render(Yt,oe)};function jt(S,D,B){S.transparent===!0&&S.side===Vn&&S.forceSinglePass===!1?(S.side=ke,S.needsUpdate=!0,ar(S,D,B),S.side=mi,S.needsUpdate=!0,ar(S,D,B),S.side=Vn):ar(S,D,B)}this.compile=function(S,D,B=null){B===null&&(B=S),p=Wt.get(B),p.init(D),E.push(p),B.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),S!==B&&S.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const z=new Set;return S.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const tt=U.material;if(tt)if(Array.isArray(tt))for(let lt=0;lt<tt.length;lt++){const mt=tt[lt];jt(mt,B,U),z.add(mt)}else jt(tt,B,U),z.add(tt)}),E.pop(),p=null,z},this.compileAsync=function(S,D,B=null){const z=this.compile(S,D,B);return new Promise(U=>{function tt(){if(z.forEach(function(lt){Et.get(lt).currentProgram.isReady()&&z.delete(lt)}),z.size===0){U(S);return}setTimeout(tt,10)}zt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let cn=null;function Dn(S){cn&&cn(S)}function Ll(){Si.stop()}function Dl(){Si.start()}const Si=new jh;Si.setAnimationLoop(Dn),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(S){cn=S,V.setAnimationLoop(S),S===null?Si.stop():Si.start()},V.addEventListener("sessionstart",Ll),V.addEventListener("sessionend",Dl),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(D),D=V.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,D,P),p=Wt.get(S,E.length),p.init(D),E.push(p),At.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Y.setFromProjectionMatrix(At),vt=this.localClippingEnabled,et=Q.init(this.clippingPlanes,vt),m=ut.get(S,y.length),m.init(),y.push(m),V.enabled===!0&&V.isPresenting===!0){const tt=M.xr.getDepthSensingMesh();tt!==null&&ma(tt,D,-1/0,M.sortObjects)}ma(S,D,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(st,ht),kt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,kt&&Tt.addToRenderList(m,S),this.info.render.frame++,et===!0&&Q.beginShadows();const B=p.state.shadowsArray;ft.render(B,S,D),et===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,U=m.transmissive;if(p.setupLights(),D.isArrayCamera){const tt=D.cameras;if(U.length>0)for(let lt=0,mt=tt.length;lt<mt;lt++){const gt=tt[lt];Nl(z,U,S,gt)}kt&&Tt.render(S);for(let lt=0,mt=tt.length;lt<mt;lt++){const gt=tt[lt];Ul(m,S,gt,gt.viewport)}}else U.length>0&&Nl(z,U,S,D),kt&&Tt.render(S),Ul(m,S,D);P!==null&&(b.updateMultisampleRenderTarget(P),b.updateRenderTargetMipmap(P)),S.isScene===!0&&S.onAfterRender(M,S,D),ne.resetDefaultState(),T=-1,x=null,E.pop(),E.length>0?(p=E[E.length-1],et===!0&&Q.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function ma(S,D,B,z){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Y.intersectsSprite(S)){z&&Ft.setFromMatrixPosition(S.matrixWorld).applyMatrix4(At);const lt=q.update(S),mt=S.material;mt.visible&&m.push(S,lt,mt,B,Ft.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Y.intersectsObject(S))){const lt=q.update(S),mt=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ft.copy(S.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Ft.copy(lt.boundingSphere.center)),Ft.applyMatrix4(S.matrixWorld).applyMatrix4(At)),Array.isArray(mt)){const gt=lt.groups;for(let wt=0,Lt=gt.length;wt<Lt;wt++){const _t=gt[wt],Yt=mt[_t.materialIndex];Yt&&Yt.visible&&m.push(S,lt,Yt,B,Ft.z,_t)}}else mt.visible&&m.push(S,lt,mt,B,Ft.z,null)}}const tt=S.children;for(let lt=0,mt=tt.length;lt<mt;lt++)ma(tt[lt],D,B,z)}function Ul(S,D,B,z){const U=S.opaque,tt=S.transmissive,lt=S.transparent;p.setupLightsView(B),et===!0&&Q.setGlobalState(M.clippingPlanes,B),z&&yt.viewport(C.copy(z)),U.length>0&&rr(U,D,B),tt.length>0&&rr(tt,D,B),lt.length>0&&rr(lt,D,B),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function Nl(S,D,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new zi(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?Qs:$n,minFilter:Oi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const tt=p.state.transmissionRenderTarget[z.id],lt=z.viewport||C;tt.setSize(lt.z,lt.w);const mt=M.getRenderTarget();M.setRenderTarget(tt),M.getClearColor(X),Z=M.getClearAlpha(),Z<1&&M.setClearColor(16777215,.5),M.clear(),kt&&Tt.render(B);const gt=M.toneMapping;M.toneMapping=di;const wt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),et===!0&&Q.setGlobalState(M.clippingPlanes,z),rr(S,B,z),b.updateMultisampleRenderTarget(tt),b.updateRenderTargetMipmap(tt),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let _t=0,Yt=D.length;_t<Yt;_t++){const ie=D[_t],oe=ie.object,He=ie.geometry,Kt=ie.material,xt=ie.group;if(Kt.side===Vn&&oe.layers.test(z.layers)){const Un=Kt.side;Kt.side=ke,Kt.needsUpdate=!0,Ol(oe,B,z,He,Kt,xt),Kt.side=Un,Kt.needsUpdate=!0,Lt=!0}}Lt===!0&&(b.updateMultisampleRenderTarget(tt),b.updateRenderTargetMipmap(tt))}M.setRenderTarget(mt),M.setClearColor(X,Z),wt!==void 0&&(z.viewport=wt),M.toneMapping=gt}function rr(S,D,B){const z=D.isScene===!0?D.overrideMaterial:null;for(let U=0,tt=S.length;U<tt;U++){const lt=S[U],mt=lt.object,gt=lt.geometry,wt=z===null?lt.material:z,Lt=lt.group;mt.layers.test(B.layers)&&Ol(mt,D,B,gt,wt,Lt)}}function Ol(S,D,B,z,U,tt){S.onBeforeRender(M,D,B,z,U,tt),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),U.onBeforeRender(M,D,B,z,S,tt),U.transparent===!0&&U.side===Vn&&U.forceSinglePass===!1?(U.side=ke,U.needsUpdate=!0,M.renderBufferDirect(B,D,z,U,S,tt),U.side=mi,U.needsUpdate=!0,M.renderBufferDirect(B,D,z,U,S,tt),U.side=Vn):M.renderBufferDirect(B,D,z,U,S,tt),S.onAfterRender(M,D,B,z,U,tt)}function ar(S,D,B){D.isScene!==!0&&(D=he);const z=Et.get(S),U=p.state.lights,tt=p.state.shadowsArray,lt=U.state.version,mt=Mt.getParameters(S,U.state,tt,D,B),gt=Mt.getProgramCacheKey(mt);let wt=z.programs;z.environment=S.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(S.isMeshStandardMaterial?O:v).get(S.envMap||z.environment),z.envMapRotation=z.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,wt===void 0&&(S.addEventListener("dispose",It),wt=new Map,z.programs=wt);let Lt=wt.get(gt);if(Lt!==void 0){if(z.currentProgram===Lt&&z.lightsStateVersion===lt)return Bl(S,mt),Lt}else mt.uniforms=Mt.getUniforms(S),S.onBeforeCompile(mt,M),Lt=Mt.acquireProgram(mt,gt),wt.set(gt,Lt),z.uniforms=mt.uniforms;const _t=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(_t.clippingPlanes=Q.uniform),Bl(S,mt),z.needsLights=qu(S),z.lightsStateVersion=lt,z.needsLights&&(_t.ambientLightColor.value=U.state.ambient,_t.lightProbe.value=U.state.probe,_t.directionalLights.value=U.state.directional,_t.directionalLightShadows.value=U.state.directionalShadow,_t.spotLights.value=U.state.spot,_t.spotLightShadows.value=U.state.spotShadow,_t.rectAreaLights.value=U.state.rectArea,_t.ltc_1.value=U.state.rectAreaLTC1,_t.ltc_2.value=U.state.rectAreaLTC2,_t.pointLights.value=U.state.point,_t.pointLightShadows.value=U.state.pointShadow,_t.hemisphereLights.value=U.state.hemi,_t.directionalShadowMap.value=U.state.directionalShadowMap,_t.directionalShadowMatrix.value=U.state.directionalShadowMatrix,_t.spotShadowMap.value=U.state.spotShadowMap,_t.spotLightMatrix.value=U.state.spotLightMatrix,_t.spotLightMap.value=U.state.spotLightMap,_t.pointShadowMap.value=U.state.pointShadowMap,_t.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Lt,z.uniformsList=null,Lt}function Fl(S){if(S.uniformsList===null){const D=S.currentProgram.getUniforms();S.uniformsList=Yr.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function Bl(S,D){const B=Et.get(S);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function Wu(S,D,B,z,U){D.isScene!==!0&&(D=he),b.resetTextureUnits();const tt=D.fog,lt=z.isMeshStandardMaterial?D.environment:null,mt=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ms,gt=(z.isMeshStandardMaterial?O:v).get(z.envMap||lt),wt=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Lt=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),_t=!!B.morphAttributes.position,Yt=!!B.morphAttributes.normal,ie=!!B.morphAttributes.color;let oe=di;z.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(oe=M.toneMapping);const He=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Kt=He!==void 0?He.length:0,xt=Et.get(z),Un=p.state.lights;if(et===!0&&(vt===!0||S!==x)){const tn=S===x&&z.id===T;Q.setState(z,S,tn)}let Zt=!1;z.version===xt.__version?(xt.needsLights&&xt.lightsStateVersion!==Un.state.version||xt.outputColorSpace!==mt||U.isBatchedMesh&&xt.batching===!1||!U.isBatchedMesh&&xt.batching===!0||U.isBatchedMesh&&xt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&xt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&xt.instancing===!1||!U.isInstancedMesh&&xt.instancing===!0||U.isSkinnedMesh&&xt.skinning===!1||!U.isSkinnedMesh&&xt.skinning===!0||U.isInstancedMesh&&xt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&xt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&xt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&xt.instancingMorph===!1&&U.morphTexture!==null||xt.envMap!==gt||z.fog===!0&&xt.fog!==tt||xt.numClippingPlanes!==void 0&&(xt.numClippingPlanes!==Q.numPlanes||xt.numIntersection!==Q.numIntersection)||xt.vertexAlphas!==wt||xt.vertexTangents!==Lt||xt.morphTargets!==_t||xt.morphNormals!==Yt||xt.morphColors!==ie||xt.toneMapping!==oe||xt.morphTargetsCount!==Kt)&&(Zt=!0):(Zt=!0,xt.__version=z.version);let hn=xt.currentProgram;Zt===!0&&(hn=ar(z,D,U));let Vi=!1,Ye=!1,ws=!1;const le=hn.getUniforms(),yn=xt.uniforms;if(yt.useProgram(hn.program)&&(Vi=!0,Ye=!0,ws=!0),z.id!==T&&(T=z.id,Ye=!0),Vi||x!==S){yt.buffers.depth.getReversed()?(rt.copy(S.projectionMatrix),tf(rt),ef(rt),le.setValue(N,"projectionMatrix",rt)):le.setValue(N,"projectionMatrix",S.projectionMatrix),le.setValue(N,"viewMatrix",S.matrixWorldInverse);const ti=le.map.cameraPosition;ti!==void 0&&ti.setValue(N,Pt.setFromMatrixPosition(S.matrixWorld)),Ht.logarithmicDepthBuffer&&le.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&le.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),x!==S&&(x=S,Ye=!0,ws=!0)}if(U.isSkinnedMesh){le.setOptional(N,U,"bindMatrix"),le.setOptional(N,U,"bindMatrixInverse");const tn=U.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),le.setValue(N,"boneTexture",tn.boneTexture,b))}U.isBatchedMesh&&(le.setOptional(N,U,"batchingTexture"),le.setValue(N,"batchingTexture",U._matricesTexture,b),le.setOptional(N,U,"batchingIdTexture"),le.setValue(N,"batchingIdTexture",U._indirectTexture,b),le.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&le.setValue(N,"batchingColorTexture",U._colorsTexture,b));const Rs=B.morphAttributes;if((Rs.position!==void 0||Rs.normal!==void 0||Rs.color!==void 0)&&bt.update(U,B,hn),(Ye||xt.receiveShadow!==U.receiveShadow)&&(xt.receiveShadow=U.receiveShadow,le.setValue(N,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(yn.envMap.value=gt,yn.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&D.environment!==null&&(yn.envMapIntensity.value=D.environmentIntensity),Ye&&(le.setValue(N,"toneMappingExposure",M.toneMappingExposure),xt.needsLights&&Xu(yn,ws),tt&&z.fog===!0&&at.refreshFogUniforms(yn,tt),at.refreshMaterialUniforms(yn,z,k,J,p.state.transmissionRenderTarget[S.id]),Yr.upload(N,Fl(xt),yn,b)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Yr.upload(N,Fl(xt),yn,b),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&le.setValue(N,"center",U.center),le.setValue(N,"modelViewMatrix",U.modelViewMatrix),le.setValue(N,"normalMatrix",U.normalMatrix),le.setValue(N,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const tn=z.uniformsGroups;for(let ti=0,ei=tn.length;ti<ei;ti++){const zl=tn[ti];L.update(zl,hn),L.bind(zl,hn)}}return hn}function Xu(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function qu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(S,D,B){Et.get(S.texture).__webglTexture=D,Et.get(S.depthTexture).__webglTexture=B;const z=Et.get(S);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,D){const B=Et.get(S);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,B=0){P=S,w=D,R=B;let z=!0,U=null,tt=!1,lt=!1;if(S){const gt=Et.get(S);if(gt.__useDefaultFramebuffer!==void 0)yt.bindFramebuffer(N.FRAMEBUFFER,null),z=!1;else if(gt.__webglFramebuffer===void 0)b.setupRenderTarget(S);else if(gt.__hasExternalTextures)b.rebindTextures(S,Et.get(S.texture).__webglTexture,Et.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const _t=S.depthTexture;if(gt.__boundDepthTexture!==_t){if(_t!==null&&Et.has(_t)&&(S.width!==_t.image.width||S.height!==_t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(S)}}const wt=S.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(lt=!0);const Lt=Et.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Lt[D])?U=Lt[D][B]:U=Lt[D],tt=!0):S.samples>0&&b.useMultisampledRTT(S)===!1?U=Et.get(S).__webglMultisampledFramebuffer:Array.isArray(Lt)?U=Lt[B]:U=Lt,C.copy(S.viewport),G.copy(S.scissor),H=S.scissorTest}else C.copy(St).multiplyScalar(k).floor(),G.copy(Ot).multiplyScalar(k).floor(),H=ee;if(yt.bindFramebuffer(N.FRAMEBUFFER,U)&&z&&yt.drawBuffers(S,U),yt.viewport(C),yt.scissor(G),yt.setScissorTest(H),tt){const gt=Et.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,gt.__webglTexture,B)}else if(lt){const gt=Et.get(S.texture),wt=D||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,gt.__webglTexture,B||0,wt)}T=-1},this.readRenderTargetPixels=function(S,D,B,z,U,tt,lt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=Et.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&lt!==void 0&&(mt=mt[lt]),mt){yt.bindFramebuffer(N.FRAMEBUFFER,mt);try{const gt=S.texture,wt=gt.format,Lt=gt.type;if(!Ht.textureFormatReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-z&&B>=0&&B<=S.height-U&&N.readPixels(D,B,z,U,Nt.convert(wt),Nt.convert(Lt),tt)}finally{const gt=P!==null?Et.get(P).__webglFramebuffer:null;yt.bindFramebuffer(N.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(S,D,B,z,U,tt,lt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=Et.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&lt!==void 0&&(mt=mt[lt]),mt){const gt=S.texture,wt=gt.format,Lt=gt.type;if(!Ht.textureFormatReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=S.width-z&&B>=0&&B<=S.height-U){yt.bindFramebuffer(N.FRAMEBUFFER,mt);const _t=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,_t),N.bufferData(N.PIXEL_PACK_BUFFER,tt.byteLength,N.STREAM_READ),N.readPixels(D,B,z,U,Nt.convert(wt),Nt.convert(Lt),0);const Yt=P!==null?Et.get(P).__webglFramebuffer:null;yt.bindFramebuffer(N.FRAMEBUFFER,Yt);const ie=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Qd(N,ie,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,_t),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,tt),N.deleteBuffer(_t),N.deleteSync(ie),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,D=null,B=0){S.isTexture!==!0&&(Us("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,S=arguments[1]);const z=Math.pow(2,-B),U=Math.floor(S.image.width*z),tt=Math.floor(S.image.height*z),lt=D!==null?D.x:0,mt=D!==null?D.y:0;b.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,B,0,0,lt,mt,U,tt),yt.unbindTexture()},this.copyTextureToTexture=function(S,D,B=null,z=null,U=0){S.isTexture!==!0&&(Us("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,S=arguments[1],D=arguments[2],U=arguments[3]||0,B=null);let tt,lt,mt,gt,wt,Lt,_t,Yt,ie;const oe=S.isCompressedTexture?S.mipmaps[U]:S.image;B!==null?(tt=B.max.x-B.min.x,lt=B.max.y-B.min.y,mt=B.isBox3?B.max.z-B.min.z:1,gt=B.min.x,wt=B.min.y,Lt=B.isBox3?B.min.z:0):(tt=oe.width,lt=oe.height,mt=oe.depth||1,gt=0,wt=0,Lt=0),z!==null?(_t=z.x,Yt=z.y,ie=z.z):(_t=0,Yt=0,ie=0);const He=Nt.convert(D.format),Kt=Nt.convert(D.type);let xt;D.isData3DTexture?(b.setTexture3D(D,0),xt=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(b.setTexture2DArray(D,0),xt=N.TEXTURE_2D_ARRAY):(b.setTexture2D(D,0),xt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);const Un=N.getParameter(N.UNPACK_ROW_LENGTH),Zt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),hn=N.getParameter(N.UNPACK_SKIP_PIXELS),Vi=N.getParameter(N.UNPACK_SKIP_ROWS),Ye=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,oe.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,oe.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,gt),N.pixelStorei(N.UNPACK_SKIP_ROWS,wt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Lt);const ws=S.isDataArrayTexture||S.isData3DTexture,le=D.isDataArrayTexture||D.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const yn=Et.get(S),Rs=Et.get(D),tn=Et.get(yn.__renderTarget),ti=Et.get(Rs.__renderTarget);yt.bindFramebuffer(N.READ_FRAMEBUFFER,tn.__webglFramebuffer),yt.bindFramebuffer(N.DRAW_FRAMEBUFFER,ti.__webglFramebuffer);for(let ei=0;ei<mt;ei++)ws&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Et.get(S).__webglTexture,U,Lt+ei),S.isDepthTexture?(le&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Et.get(D).__webglTexture,U,ie+ei),N.blitFramebuffer(gt,wt,tt,lt,_t,Yt,tt,lt,N.DEPTH_BUFFER_BIT,N.NEAREST)):le?N.copyTexSubImage3D(xt,U,_t,Yt,ie+ei,gt,wt,tt,lt):N.copyTexSubImage2D(xt,U,_t,Yt,ie+ei,gt,wt,tt,lt);yt.bindFramebuffer(N.READ_FRAMEBUFFER,null),yt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else le?S.isDataTexture||S.isData3DTexture?N.texSubImage3D(xt,U,_t,Yt,ie,tt,lt,mt,He,Kt,oe.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(xt,U,_t,Yt,ie,tt,lt,mt,He,oe.data):N.texSubImage3D(xt,U,_t,Yt,ie,tt,lt,mt,He,Kt,oe):S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,_t,Yt,tt,lt,He,Kt,oe.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,_t,Yt,oe.width,oe.height,He,oe.data):N.texSubImage2D(N.TEXTURE_2D,U,_t,Yt,tt,lt,He,Kt,oe);N.pixelStorei(N.UNPACK_ROW_LENGTH,Un),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Zt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,hn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Vi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ye),U===0&&D.generateMipmaps&&N.generateMipmap(xt),yt.unbindTexture()},this.copyTextureToTexture3D=function(S,D,B=null,z=null,U=0){return S.isTexture!==!0&&(Us("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,S=arguments[2],D=arguments[3],U=arguments[4]||0),Us('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,D,B,z,U)},this.initRenderTarget=function(S){Et.get(S).__webglFramebuffer===void 0&&b.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?b.setTextureCube(S,0):S.isData3DTexture?b.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?b.setTexture2DArray(S,0):b.setTexture2D(S,0),yt.unbindTexture()},this.resetState=function(){w=0,R=0,P=null,yt.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}class u0 extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class d0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ko,this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Fe=new A;class ln{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=mn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=mn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=mn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=mn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array),r=Jt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ue(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ln(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class f0 extends Ue{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}class su extends tr{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Fc=new re,Xo=new hl,Rr=new Gi,Cr=new A;class p0 extends Xe{constructor(t=new we,e=new su){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(s),Rr.radius+=r,t.ray.intersectsSphere(Rr)===!1)return;Fc.copy(s).invert(),Xo.copy(t.ray).applyMatrix4(Fc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);Cr.fromBufferAttribute(u,m),Bc(Cr,m,l,s,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,_=f;g<_;g++)Cr.fromBufferAttribute(u,g),Bc(Cr,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Bc(i,t,e,n,s,r,a){const o=Xo.distanceSqToPoint(i);if(o<e){const l=new A;Xo.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Cn extends we{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;y(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new _e(u,3)),this.setAttribute("normal",new _e(d,3)),this.setAttribute("uv",new _e(f,2));function y(){const M=new A,I=new A;let w=0;const R=(e-t)/n;for(let P=0;P<=r;P++){const T=[],x=P/r,C=x*(e-t)+t;for(let G=0;G<=s;G++){const H=G/s,X=H*l+o,Z=Math.sin(X),W=Math.cos(X);I.x=C*Z,I.y=-x*n+m,I.z=C*W,u.push(I.x,I.y,I.z),M.set(Z,R,W).normalize(),d.push(M.x,M.y,M.z),f.push(H,1-x),T.push(g++)}_.push(T)}for(let P=0;P<s;P++)for(let T=0;T<r;T++){const x=_[T][P],C=_[T+1][P],G=_[T+1][P+1],H=_[T][P+1];(t>0||T!==0)&&(h.push(x,C,H),w+=3),(e>0||T!==r-1)&&(h.push(C,G,H),w+=3)}c.addGroup(p,w,0),p+=w}function E(M){const I=g,w=new Vt,R=new A;let P=0;const T=M===!0?t:e,x=M===!0?1:-1;for(let G=1;G<=s;G++)u.push(0,m*x,0),d.push(0,x,0),f.push(.5,.5),g++;const C=g;for(let G=0;G<=s;G++){const X=G/s*l+o,Z=Math.cos(X),W=Math.sin(X);R.x=T*W,R.y=m*x,R.z=T*Z,u.push(R.x,R.y,R.z),d.push(0,x,0),w.x=Z*.5+.5,w.y=W*.5*x+.5,f.push(w.x,w.y),g++}for(let G=0;G<s;G++){const H=I+G,X=C+G;M===!0?h.push(X,X+1,H):h.push(X+1,X,H),P+=3}c.addGroup(p,P,M===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class oa extends Cn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new oa(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class pl extends we{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new _e(r,3)),this.setAttribute("normal",new _e(r.slice(),3)),this.setAttribute("uv",new _e(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const E=new A,M=new A,I=new A;for(let w=0;w<e.length;w+=3)f(e[w+0],E),f(e[w+1],M),f(e[w+2],I),l(E,M,I,y)}function l(y,E,M,I){const w=I+1,R=[];for(let P=0;P<=w;P++){R[P]=[];const T=y.clone().lerp(M,P/w),x=E.clone().lerp(M,P/w),C=w-P;for(let G=0;G<=C;G++)G===0&&P===w?R[P][G]=T:R[P][G]=T.clone().lerp(x,G/C)}for(let P=0;P<w;P++)for(let T=0;T<2*(w-P)-1;T++){const x=Math.floor(T/2);T%2===0?(d(R[P][x+1]),d(R[P+1][x]),d(R[P][x])):(d(R[P][x+1]),d(R[P+1][x+1]),d(R[P+1][x]))}}function c(y){const E=new A;for(let M=0;M<r.length;M+=3)E.x=r[M+0],E.y=r[M+1],E.z=r[M+2],E.normalize().multiplyScalar(y),r[M+0]=E.x,r[M+1]=E.y,r[M+2]=E.z}function h(){const y=new A;for(let E=0;E<r.length;E+=3){y.x=r[E+0],y.y=r[E+1],y.z=r[E+2];const M=m(y)/2/Math.PI+.5,I=p(y)/Math.PI+.5;a.push(M,1-I)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){const E=a[y+0],M=a[y+2],I=a[y+4],w=Math.max(E,M,I),R=Math.min(E,M,I);w>.9&&R<.1&&(E<.2&&(a[y+0]+=1),M<.2&&(a[y+2]+=1),I<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,E){const M=y*3;E.x=t[M+0],E.y=t[M+1],E.z=t[M+2]}function g(){const y=new A,E=new A,M=new A,I=new A,w=new Vt,R=new Vt,P=new Vt;for(let T=0,x=0;T<r.length;T+=9,x+=6){y.set(r[T+0],r[T+1],r[T+2]),E.set(r[T+3],r[T+4],r[T+5]),M.set(r[T+6],r[T+7],r[T+8]),w.set(a[x+0],a[x+1]),R.set(a[x+2],a[x+3]),P.set(a[x+4],a[x+5]),I.copy(y).add(E).add(M).divideScalar(3);const C=m(I);_(w,x+0,y,C),_(R,x+2,E,C),_(P,x+4,M,C)}}function _(y,E,M,I){I<0&&y.x===1&&(a[E]=y.x-1),M.x===0&&M.z===0&&(a[E]=I/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pl(t.vertices,t.indices,t.radius,t.details)}}const Pr=new A,Ir=new A,Wa=new A,Lr=new on;class ru extends we{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(hs*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:p}=Lr;if(_.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),Lr.getNormal(Wa),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){const E=(y+1)%3,M=u[y],I=u[E],w=Lr[h[y]],R=Lr[h[E]],P=`${M}_${I}`,T=`${I}_${M}`;T in d&&d[T]?(Wa.dot(d[T].normal)<=r&&(f.push(w.x,w.y,w.z),f.push(R.x,R.y,R.z)),d[T]=null):P in d||(d[P]={index0:c[y],index1:c[E],normal:Wa.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:m}=d[g];Pr.fromBufferAttribute(o,_),Ir.fromBufferAttribute(o,m),f.push(Pr.x,Pr.y,Pr.z),f.push(Ir.x,Ir.y,Ir.z)}this.setAttribute("position",new _e(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class ml extends pl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ml(t.radius,t.detail)}}class la extends we{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new A,d=new A,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const y=[],E=p/n;let M=0;p===0&&a===0?M=.5/e:p===n&&l===Math.PI&&(M=-.5/e);for(let I=0;I<=e;I++){const w=I/e;u.x=-t*Math.cos(s+w*r)*Math.sin(a+E*o),u.y=t*Math.cos(a+E*o),u.z=t*Math.sin(s+w*r)*Math.sin(a+E*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(w+M,1-E),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const E=h[p][y+1],M=h[p][y],I=h[p+1][y],w=h[p+1][y+1];(p!==0||a>0)&&f.push(E,M,w),(p!==n-1||l<Math.PI)&&f.push(M,I,w)}this.setIndex(f),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(_,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new la(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class m0 extends we{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,s=new A,r=new A;if(t.index!==null){const a=t.attributes.position,o=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],d=u.start,f=u.count;for(let g=d,_=d+f;g<_;g+=3)for(let m=0;m<3;m++){const p=o.getX(g+m),y=o.getX(g+(m+1)%3);s.fromBufferAttribute(a,p),r.fromBufferAttribute(a,y),zc(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{const a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,u=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),zc(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new _e(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function zc(i,t,e){const n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}class g0 extends we{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class _0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Hc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Hc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Hc(){return performance.now()}class Ys extends d0{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}const Gc=new re;class v0{constructor(t,e,n=0,s=1/0){this.ray=new hl(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ul,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Gc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gc),this}intersectObject(t,e=!0,n=[]){return qo(t,this,n,e),n.sort(Vc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)qo(t[s],this,n,e);return n.sort(Vc),n}}function Vc(i,t){return i.distance-t.distance}function qo(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)qo(r[a],t,e,!0)}}const kc=new A,Dr=new A;class M0{constructor(t=new A,e=new A){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){kc.subVectors(t,this.start),Dr.subVectors(this.end,this.start);const n=Dr.dot(Dr);let r=Dr.dot(kc)/n;return e&&(r=Ie(r,0,1)),r}closestPointToPoint(t,e,n){const s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nl);const au=66743e-15,$s=9.80665,Sn={radius:6371e3,mu:au*5972e21,siderealDay:86164},ue={radius:1737400,mu:au*7342e19,soiRadius:661e5,orbitRadius:3844e5,orbitPeriod:27.32*86400},Hs={ceiling:14e4,interface:122e3,seaLevelDensity:1.225,scaleHeight:7200},Rt=1e-6,Xa=[1,2,5,10,50,100,1e3,1e4,1e5],$r=10,Os=2*Math.PI/ue.orbitPeriod,Ve={name:"EARTH",mu:Sn.mu,radius:Sn.radius,atmosphere:Hs.ceiling,soi:1/0,positionAt:()=>new A,velocityAt:()=>new A,spinAt:i=>2*Math.PI*i/Sn.siderealDay},Bt={name:"MOON",mu:ue.mu,radius:ue.radius,atmosphere:0,soi:ue.soiRadius,positionAt(i){const t=Os*i;return new A(ue.orbitRadius*Math.cos(t),0,-3844e5*Math.sin(t))},velocityAt(i){const t=Os*i,e=ue.orbitRadius*Os;return new A(-e*Math.sin(t),0,-e*Math.cos(t))},spinAt:i=>Os*i},x0={EARTH:Ve,MOON:Bt};function Kr(i){return i===Bt?Os:2*Math.PI/Sn.siderealDay}const Gs=Math.PI*2;class Ne{constructor(t,e,n,s){F(this,"e");F(this,"a");F(this,"p");F(this,"h");F(this,"hVec");F(this,"eHat");F(this,"qHat");F(this,"n");F(this,"M0");this.mu=t,this.epoch=e,this.hVec=new A().crossVectors(n,s),this.h=this.hVec.length();const r=n.length(),a=new A().crossVectors(s,this.hVec).divideScalar(t).addScaledVector(n,-1/r);this.e=a.length(),this.a=-t/(2*(s.lengthSq()/2-t/r)),this.p=this.h*this.h/t,this.eHat=this.e>1e-9?a.divideScalar(this.e):n.clone().divideScalar(r),this.qHat=new A().crossVectors(this.hVec,this.eHat).normalize(),this.n=Math.sqrt(t/Math.abs(this.a)**3),this.M0=this.meanFromTrue(Math.atan2(n.dot(this.qHat),n.dot(this.eHat)))}static fromState(t,e,n,s=0){return new Ne(n,s,t,e)}get closed(){return this.e<1}get periapsis(){return this.p/(1+this.e)}get apoapsis(){return this.closed?this.p/(1-this.e):1/0}get period(){return this.closed?Gs/this.n:1/0}get inclination(){return Math.acos(Math.max(-1,Math.min(1,this.hVec.y/this.h)))}radiusAt(t){return this.p/(1+this.e*Math.cos(t))}meanAnomalyAt(t){return this.M0+this.n*(t-this.epoch)}trueAnomalyAt(t){return this.trueFromMean(this.meanAnomalyAt(t))}stateAt(t,e=new A,n){return this.stateAtTrueAnomaly(this.trueAnomalyAt(t),e,n)}stateAtTrueAnomaly(t,e=new A,n){const s=Math.cos(t),r=Math.sin(t),a=this.p/(1+this.e*s);if(e.copy(this.eHat).multiplyScalar(a*s).addScaledVector(this.qHat,a*r),n){const o=this.mu/this.h;n.copy(this.eHat).multiplyScalar(-o*r).addScaledVector(this.qHat,o*(this.e+s))}return e}timeAtTrueAnomaly(t,e){const n=this.meanFromTrue(t);if(this.closed){let r=(n-this.meanAnomalyAt(e))%Gs;return r<0&&(r+=Gs),e+r/this.n}const s=this.epoch+(n-this.M0)/this.n;return s>=e?s:null}nextRadiusCrossing(t,e,n){if(this.e<1e-9)return null;const s=(this.p/t-1)/this.e;return s<-1||s>1?null:this.timeAtTrueAnomaly(n*Math.acos(s),e)}nextPeriapsis(t){return this.timeAtTrueAnomaly(0,t)}nextApoapsis(t){return this.closed?this.timeAtTrueAnomaly(Math.PI,t):null}meanFromTrue(t){const e=this.e;if(e<1){const s=Math.atan2(Math.sqrt(1-e*e)*Math.sin(t),e+Math.cos(t));return s-e*Math.sin(s)}const n=2*Math.atanh(Math.sqrt((e-1)/(e+1))*Math.tan(t/2));return e*Math.sinh(n)-n}trueFromMean(t){const e=this.e;if(e<1){const s=S0(t,e);return 2*Math.atan2(Math.sqrt(1+e)*Math.sin(s/2),Math.sqrt(1-e)*Math.cos(s/2))}const n=E0(t,e);return 2*Math.atan(Math.sqrt((e+1)/(e-1))*Math.tanh(n/2))}}function S0(i,t){const e=Math.round(i/Gs)*Gs,n=i-e;let s=t>.8?Math.sign(n)*Math.PI*.9||.1:n;for(let r=0;r<50;r++){const a=(s-t*Math.sin(s)-n)/(1-t*Math.cos(s));if(s-=a,Math.abs(a)<1e-13)break}return s+e}function E0(i,t){let e=Math.sign(i)*Math.log(2*Math.abs(i)/t+1.8);for(let n=0;n<60;n++){const s=(t*Math.sinh(e)-e-i)/(t*Math.cosh(e)-1);if(e-=s,Math.abs(s)<1e-13*Math.max(1,Math.abs(e)))break}return e}const y0=.001;function gl(i,t,e,n){let s=null;const r=(l,c)=>{c!==null&&c>e&&c<=n&&(!s||c<s.t)&&(s={kind:l,t:c})},a=i.stateAt(e).length(),o=t.radius+t.atmosphere;return t.atmosphere>0&&a>o?r("atmosphere",i.nextRadiusCrossing(o,e,-1)):a>t.radius&&r("surface",i.nextRadiusCrossing(t.radius,e,-1)),t===Bt?r("soi-exit",i.nextRadiusCrossing(t.soi,e,1)):r("soi-enter",T0(i,e,s?s.t:n)),s}function T0(i,t,e){const n=new A,s=c=>i.stateAt(c,n).distanceTo(Bt.positionAt(c))-Bt.soi,r=i.mu/i.h*(1+i.e)+Bt.velocityAt(0).length();let a=t,o=s(a),l=o>0;for(;a<e;){const c=Math.min(e,a+Math.max(30,Math.abs(o)/r)),h=s(c);if(l&&h<=0){let u=a,d=c;for(;d-u>y0;){const f=(u+d)/2;s(f)>0?u=f:d=f}return d}h>0&&(l=!0),a=c,o=h}return null}function Qr(i,t,e,n){const s=i==="soi-enter"?-1:1;return t.addScaledVector(Bt.positionAt(n),s),e.addScaledVector(Bt.velocityAt(n),s),i==="soi-enter"?Bt:Ve}function _l(i,t,e,n,s,r=4){const a=[],o=t.clone(),l=e.clone();let c=n,h=i;for(;a.length<r&&c<s;){const u=Ne.fromState(o,l,h.mu,c),d=gl(u,h,c,s),f=d?d.t:s;if(a.push({primary:h,orbit:u,t0:c,t1:f,end:(d==null?void 0:d.kind)??null}),!d||d.kind==="atmosphere"||d.kind==="surface")break;u.stateAt(f,o,l),h=Qr(d.kind,o,l,f),c=f}return a}function A0(i){const t=i.find(l=>l.primary===Bt);if(t){const l=t.orbit,c=l.nextPeriapsis(t.t0)??t.t0;return{signedRadius:Math.sign(l.hVec.y||1)*l.periapsis,t:c,captured:!0}}const e=i[0];if(!e||e.primary!==Ve)return null;const n=Math.min(e.t1,e.t0+(e.orbit.closed?e.orbit.period:10*86400)),s=new A,r=new A;let a=null;const o=400;for(let l=0;l<=o;l++){const c=e.t0+(n-e.t0)*l/o;e.orbit.stateAt(c,s,r);const h=s.sub(Bt.positionAt(c)),u=h.length();if(!a||u<Math.abs(a.signedRadius)){const d=r.sub(Bt.velocityAt(c));a={signedRadius:Math.sign(new A().crossVectors(h,d).y||1)*u,t:c,captured:!1}}}return a}function b0(i,t){const e=i.length();return i.clone().multiplyScalar(-t/(e*e*e))}function ou(i){return i>Hs.ceiling?0:Hs.seaLevelDensity*Math.exp(-Math.max(i,0)/Hs.scaleHeight)}function Wc(i,t,e,n){const s=ou(i.length()-Sn.radius),r=t.length();if(s===0||r<1e-6)return new A;const a=.5*s*r*r*n.cdA/e,o=t.clone().multiplyScalar(-a/r);return n.liftToDrag>0&&n.liftDir&&o.addScaledVector(n.liftDir,a*n.liftToDrag),o}function lu(i,t,e,n,s){const r=(g,_)=>b0(g,s).add(n(g,_)),a=r(i,t),o=t.clone(),l=t.clone().addScaledVector(a,e/2),c=r(i.clone().addScaledVector(o,e/2),l),h=t.clone().addScaledVector(c,e/2),u=r(i.clone().addScaledVector(l,e/2),h),d=t.clone().addScaledVector(u,e),f=r(i.clone().addScaledVector(h,e),d);i.addScaledVector(o.add(l.multiplyScalar(2)).add(h.multiplyScalar(2)).add(d),e/6),t.addScaledVector(a.add(c.multiplyScalar(2)).add(u.multiplyScalar(2)).add(f),e/6)}function vl(i,t){const e=t.clone().normalize(),n=new A().crossVectors(i,t).normalize(),s=new A().crossVectors(e,n).normalize();return{prograde:e,normal:n,radial:s}}function Ks(i){return{thrust:i.stage.thrust,ve:i.exhaustVelocity,mass:i.mass}}function w0(i){return Math.hypot(i.prograde,i.normal,i.radial)}function cu(i,t){return i.thrust<=0?1/0:i.mass*(1-Math.exp(-t/i.ve))/(i.thrust/i.ve)}function Ze(i,t){const e=i.pos.clone(),n=i.vel.clone();let s=i.primary,r=i.t;for(let a=0;a<8&&r<t;a++){const o=Ne.fromState(e,n,s.mu,r),l=gl(o,s,r,t),c=l&&(l.kind==="soi-enter"||l.kind==="soi-exit")?l.t:t;o.stateAt(c,e,n),r=c,c<t&&l&&(s=Qr(l.kind,e,n,c))}return{primary:s,pos:e,vel:n,t:Math.max(r,t)}}function hu(i,t){const e=vl(t.pos,t.vel);return e.prograde.multiplyScalar(i.prograde).addScaledVector(e.normal,i.normal).addScaledVector(e.radial,i.radial)}function uu(i,t,e){const n=vl(e.pos,e.vel);return{tig:i,prograde:t.dot(n.prograde),normal:t.dot(n.normal),radial:t.dot(n.radial)}}function du(i,t,e,n=1){const s=i.pos.clone(),r=i.vel.clone(),a=e.clone().normalize(),o=e.length();let l=t.mass,c=0,h=i.t;const u=t.thrust/t.ve;for(;c<o-1e-6;){const d=t.mass*Math.exp(-o/t.ve),f=Math.min(n,(l-d)/u);if(f<=1e-9)break;const g=a.clone().multiplyScalar(t.thrust/(l-u*f/2));lu(s,r,f,()=>g,i.primary.mu),l-=u*f,c=t.ve*Math.log(t.mass/l),h+=f}return{primary:i.primary,pos:s,vel:r,t:h}}function ys(i,t,e,n){const s=Ze(i,Math.max(i.t,e.tig)),r=hu(e,s),a=cu(t,r.length()),o=Math.max(i.t,e.tig-a/2),l=du(Ze(i,o),t,r),c=_l(l.primary,l.pos,l.vel,l.t,l.t+n);return{atTig:s,ignition:o,duration:a,cutoff:l,arcs:c}}function R0(i,t,e,n){const s=e.lengthSq()>1e-6?du(i,t,e):i;return _l(s.primary,s.pos,s.vel,s.t,s.t+n)}function Yo(i,t){return _l(i.primary,i.pos,i.vel,i.t,i.t+t)}function gi(i,t,e){return{primary:t,pos:i.position.clone(),vel:i.velocity.clone(),t:e}}const Xc=.05;class C0{constructor(t,e,n){F(this,"target");F(this,"ignition");F(this,"duration");F(this,"phase","pending");F(this,"litAt",null);this.maneuver=t,this.target=hu(t,Ze(e,Math.max(e.t,t.tig))),this.duration=cu(Ks(n),this.target.length()),this.ignition=t.tig-this.duration/2}get total(){return this.target.length()}toGo(t){return this.litAt===null?this.target.clone():this.target.clone().sub(t.burnDv)}remaining(t){return this.toGo(t).dot(this.target)/Math.max(this.total,1e-9)}cue(t){const e=this.toGo(t);return e.lengthSq()>1e-8?e.normalize():this.target.clone().normalize()}update(t,e){if(this.phase!=="done"){if(this.litAt===null&&!t.firing){t.burnDv.set(0,0,0);return}t.firing?(this.litAt??(this.litAt=e),this.phase="burning"):this.phase==="burning"&&(this.phase=this.remaining(t)<Xc?"done":"paused")}}accept(){this.phase="done"}autopilot(t,e,n){const s=ca(t,this.cue(t));if(this.phase==="done")return{hold:s,throttle:0};const r=t.forward.angleTo(this.cue(t))<2*Math.PI/180,a=this.litAt!==null;if(!a&&(e+n<=this.ignition||!r))return{hold:s,throttle:0};const o=this.remaining(t);if(o<Xc/2)return{hold:s,throttle:0};const l=t.stage.thrust/t.mass,c=a?n:Math.min(n,e+n-this.ignition);return{hold:s,throttle:Math.min(c/n,o/(l*n))}}}function ca(i,t){return new En().setFromUnitVectors(i.forward,t.clone().normalize()).multiply(i.quaternion).normalize()}function P0(i,t){const e=i.clone().normalize(),n=new A().crossVectors(t,e);n.lengthSq()<1e-10&&n.set(1,0,0).cross(e),n.normalize();const s=new A().crossVectors(e,n);return new En().setFromRotationMatrix(new re().makeBasis(n,s,e))}const qc={csm:{label:"CSM",stages:[{name:"S-IVB",dryMass:11e3,fuelMass:106e3,thrust:1e6,isp:421},{name:"SPS",dryMass:6200,fuelMass:24e3,thrust:91e3,isp:314},{name:"CM",dryMass:5800,fuelMass:0,thrust:0,isp:1}],rcsThrust:890,rcsFuelMass:500,rcsIsp:290,angularAccel:.9},lm:{label:"LM",stages:[{name:"DPS",dryMass:2200,fuelMass:7800,thrust:75e3,isp:311},{name:"APS",dryMass:2500,fuelMass:3e3,thrust:24e3,isp:311}],rcsThrust:1780,rcsFuelMass:280,rcsIsp:290,angularAccel:1.4}},nn={cdA:1.3*12,liftToDrag:.3,drogue:{altitude:7300,maxSpeed:250,cdA:1.2*2*20},mains:{altitude:3e3,cdA:.9*3*450},inflation:10},Ml=new A(0,1,0);function jn(i,t){const e=i.position.length(),n=i.position.clone().divideScalar(e),s=new A().crossVectors(Ml,i.position).multiplyScalar(Kr(t)),r=i.velocity.clone().sub(s),a=r.dot(n),o=r.clone().addScaledVector(n,-a),l=o.length(),c=i.velocity.clone().addScaledVector(n,-i.velocity.dot(n)).length(),h=t.mu/(e*e)-c*c/e;return{r:e,up:n,h:e-t.radius,vz:a,vhVec:o,vh:l,gEff:h}}function xl(i,t,e,n,s,r){const a=i.vhVec.dot(t),o=i.vhVec.clone().addScaledVector(t,-a),l=d=>{const f=6*(e.h-i.h)/(d*d)-(4*i.vz+2*e.vz)/d+i.gEff,g=i.up.clone().multiplyScalar(f);return r?g.addScaledVector(r,6/(d*d)).addScaledVector(i.vhVec,-4/d):g.addScaledVector(t,(e.vh-a)/d).addScaledVector(o,-1/d)},c=(r==null?void 0:r.dot(t))??0;if(r&&c>1&&a>.5){let d=2*c/a;for(let f=0;f<60&&l(d).length()>s*n;f++)d*=1.05;return{accel:l(d),tgo:d}}let h=1,u=4e3;for(let d=0;d<50;d++){const f=Math.sqrt(h*u);l(f).length()>s*n?h=f:u=f}return{accel:l(u),tgo:u}}function ta(i,t,e,n){return{dir:i.clone().normalize(),throttle:Math.min(1,i.length()/t),phase:e,tgo:n}}const $o={h:120,vz:-3,vh:0},I0=.65,fu=2e3;function L0(i,t,e){const n=jn(i,t),s=i.stage.thrust/i.mass,r=n.vh>.5?n.vhVec.clone().normalize():new A().crossVectors(n.up,Ml).normalize(),a=n.h<=fu,o=a&&e?e.clone().sub(i.position).projectOnPlane(n.up):void 0;if(n.h>(o?$o.h-20:250)){const h=xl(n,r,$o,s,.8,o);if(h.tgo>(o?2:8))return ta(h.accel,s,a?"P64 APPROACH":"P63 BRAKING",h.tgo)}const l=Math.min(1,3/Math.max(n.vh,1e-6)),c=-Math.min(3,Math.max(.7,n.h/25))*Math.max(.15,l);return U0(n,s,c)}function D0(i,t){const e=jn(i,t),n=e.vh>.5?e.vhVec.clone().normalize():new A().crossVectors(e.up,Ml).normalize(),s=xl(e,n,$o,i.stage.thrust/i.mass,I0);return i.position.clone().addScaledVector(e.vhVec,s.tgo/2).setLength(t.radius)}function U0(i,t,e){const n=1.2*(e-i.vz)+i.gEff,s=i.vhVec.clone().multiplyScalar(-.6);s.clampLength(0,.45*Math.max(n,.5));const r=i.up.clone().multiplyScalar(Math.max(0,n)).add(s);return ta(r,t,"P66 LAND",i.h/Math.max(.5,-i.vz))}function Ur(i,t,e,n){const s=jn(i,t),r=i.stage.thrust/i.mass,a=new A().crossVectors(e,s.up).normalize(),o=i.velocity.dot(a),l=n.speed-o;if(s.h<150)return{...ta(s.up,r,"P12 VERTICAL RISE",0),throttle:1,toGo:l};const c={...s,vhVec:i.velocity.clone().addScaledVector(s.up,-i.velocity.dot(s.up))},h=xl(c,a,{h:n.radius-t.radius,vz:0,vh:n.speed},r,1);return{...ta(h.accel,r,"P12 ASCENT",h.tgo),throttle:1,toGo:l}}function Sl(i,t=4){const e=i.ship,n=e.position.length(),s=e.position.clone().divideScalar(n),r=e.velocity.length(),a=e.velocity.dot(s),o=i.gLoad*$s/Math.sqrt(1+nn.liftToDrag**2),l=nn.liftToDrag*o;if(r<1500||l<.05)return{bank:0,targetG:t};const h=.12*(Math.max(-150,Math.min(150,60*(i.gLoad-t)))-a),u=r*r-a*a,d=i.primary.mu/(n*n),f=(h+d-u/n+o*a/r)/l;return{bank:Math.acos(Math.max(-1,Math.min(1,f))),targetG:t}}function ha(i){const t=i.ship,e=t.velocity.clone().normalize(),n=t.position.clone().normalize(),s=n.addScaledVector(e,-n.dot(e)).normalize(),r=i.liftDirection(),a=new A().crossVectors(s,r).dot(e);return Math.atan2(a,s.dot(r))}function N0(i){const t=i.relative();if(!t)return null;const e=i.ship,n=t.pos.clone().normalize(),s=Math.min(6,Math.max(.25,t.range/60)),r=t.vel.clone().negate(),a=n.clone().multiplyScalar(s).sub(r).multiplyScalar(.5),o=e.spec.rcsThrust/e.mass,l=a.divideScalar(o).applyQuaternion(e.quaternion.clone().invert()),c=h=>Math.abs(h)<.03?0:Math.max(-1,Math.min(1,h));return{translation:{x:c(l.x),y:c(l.y),z:c(l.z)},closing:-t.rangeRate,desired:s}}function O0(i,t,e,n,s){const r=i.length(),a=t.length(),o=new A().crossVectors(i,t);let l=Math.acos(Math.max(-1,Math.min(1,i.dot(t)/(r*a))));o.dot(s)<0&&(l=2*Math.PI-l);const c=Math.sin(l)*Math.sqrt(r*a/(1-Math.cos(l)));if(!isFinite(c)||Math.abs(c)<1e-9)return null;const h=I=>r+a+c*(I*$c(I)-1)/Math.sqrt(Yc(I)),u=I=>{const w=h(I);return(w/Yc(I))**1.5*$c(I)+c*Math.sqrt(w)-Math.sqrt(n)*e};let d=4*Math.PI*Math.PI-1e-6,f=-4*Math.PI*Math.PI;for(;f<d&&!(h(f)>0);)f+=.1;if(!(f<d&&u(f)<0&&u(d)>0))return null;for(let I=0;I<200;I++){const w=(f+d)/2;if(u(w)>0?d=w:f=w,d-f<1e-12)break}const g=(f+d)/2,_=h(g),m=1-_/r,p=c*Math.sqrt(_/n),y=1-_/a,E=t.clone().addScaledVector(i,-m).divideScalar(p),M=t.clone().multiplyScalar(y).sub(i).divideScalar(p);return{v1:E,v2:M}}function Yc(i){return i>1e-8?(1-Math.cos(Math.sqrt(i)))/i:i<-1e-8?(Math.cosh(Math.sqrt(-i))-1)/-i:1/2-i/24}function $c(i){if(i>1e-8){const t=Math.sqrt(i);return(t-Math.sin(t))/(t*t*t)}if(i<-1e-8){const t=Math.sqrt(-i);return(Math.sinh(t)-t)/(t*t*t)}return 1/6-i/120}const be={perilune:-1847400,lunarOrbit:ue.radius+11e4,descentPerilune:ue.radius+15e3,entryAngle:-6.5*Math.PI/180,entryInterface:Sn.radius+Hs.interface,tliApogee:1.3*ue.orbitRadius,teiDeltaV:1e3},ua=12*86400;function da(i){const t=A0(i);return t&&t.captured?t.signedRadius:null}function er(i){const t=be.entryInterface,e=Math.sqrt(Math.max(0,2*(i.mu/t-i.mu/(2*i.a)))),n=i.h/(t*e);return n<=1?-Math.acos(Math.max(-1,n)):Math.acos(1/n)}function Ts(i){const t=i[i.length-1];return t&&t.primary===Ve?t:null}function F0(i,t,e,n,s,r){for(let a=0;a<60&&Math.abs(n-t)>r;a++){let o=n-s*(n-t)/(s-e);o>Math.min(t,n)&&o<Math.max(t,n)||(o=(t+n)/2);const l=i(o);if(l===null)return null;Math.sign(l)===Math.sign(e)?(t=o,e=l):(n=o,s=l)}return Math.abs(e)<Math.abs(s)?t:n}function pu(i,t,e,n,s){let r=t,a=i(t);for(let o=t+n;o<=e;o+=n){const l=i(o);if(a!==null&&l!==null&&Math.sign(a)!==Math.sign(l)){const c=F0(i,r,a,o,l,s);if(c!==null)return c}r=o,a=l}return null}function mu(i,t,e,n,s,r){let a={...e};const o=c=>{const h=n(ys(i,t,c,ua));return h===null?null:h-s};let l=o(a);for(let c=0;c<25&&l!==null&&Math.abs(l)>r;c++){const h=Math.max(.02,.001*Math.hypot(a.prograde,a.radial)),u=o({...a,prograde:a.prograde+h}),d=o({...a,radial:a.radial+h});if(u===null||d===null)return null;const f=(u-l)/h,g=(d-l)/h,_=f*f+g*g;if(_===0)return null;let m=1,p=a,y=null;for(let E=0;E<8&&(p={...a,prograde:a.prograde-m*l*f/_,radial:a.radial-m*l*g/_},y=o(p),!(y!==null&&Math.abs(y)<Math.abs(l)));E++)m/=2;if(y===null)return null;a=p,l=y}return l!==null&&Math.abs(l)<=r*10?a:null}function gu(i,t,e,n,s,r,a){const o=d=>{const f=s(ys(i,t,{tig:e,prograde:d,normal:0,radial:0},ua));return f===null?null:f-r};let l=n,c=o(l),h=n*1.02+Math.sign(n||1)*.5,u=o(h);for(let d=0;d<40&&c!==null&&u!==null&&Math.abs(u)>a&&u!==c;d++){const f=h-u*(h-l)/(u-c);l=h,c=u,h=f,u=o(h)}return u!==null&&Math.abs(u)<=a*10?{tig:e,prograde:h,normal:0,radial:0}:null}function B0(i,t){const e=i.pos.length();return Math.sqrt(i.primary.mu*(2/e-2/(e+t)))-i.vel.length()}function _u(i,t,e=i.t+300){const n=Ne.fromState(i.pos,i.vel,i.primary.mu,i.t).period,s=c=>Ne.fromState(c.cutoff.pos,c.cutoff.vel,c.cutoff.primary.mu).apoapsis,r=gu(i,t,e,B0(Ze(i,e),be.tliApogee),s,be.tliApogee,1e5);if(!r)return null;const a=c=>({tig:c,prograde:r.prograde,normal:0,radial:0}),l=pu(c=>{const h=da(ys(i,t,a(c),ua).arcs);return h===null?null:h-be.perilune},e,e+n,20,.01);return l===null?null:a(l)}function z0(i,t,e){return mu(i,t,{tig:e,prograde:0,normal:0,radial:0},s=>da(s.arcs),be.perilune,50)}function H0(i,t){const n=Ne.fromState(i.pos,i.vel,i.primary.mu,i.t).nextPeriapsis(i.t);if(n===null)return null;const s=Ze(i,n),r=s.pos.clone().normalize(),a=s.vel.clone().normalize(),o=h=>{const u=ys(i,t,h,0).cutoff,d=Ne.fromState(u.pos,u.vel,u.primary.mu);return[d.e*d.eHat.dot(r),d.e*d.eHat.dot(a)]};let l={tig:n,prograde:Math.sqrt(i.primary.mu/s.pos.length())-s.vel.length(),normal:0,radial:0},c=o(l);for(let h=0;h<20&&Math.hypot(c[0],c[1])>1e-5;h++){const d=o({...l,prograde:l.prograde+.05}),f=o({...l,radial:l.radial+.05}),[g,_]=[(d[0]-c[0])/.05,(d[1]-c[1])/.05],[m,p]=[(f[0]-c[0])/.05,(f[1]-c[1])/.05],y=g*p-m*_;if(Math.abs(y)<1e-12)return null;l={...l,prograde:l.prograde-(p*c[0]-m*c[1])/y,radial:l.radial-(-_*c[0]+g*c[1])/y},c=o(l)}return Math.hypot(c[0],c[1])<1e-4?l:null}function G0(i,t,e,n){const s=Ze(i,e),r=s.pos.length(),a=Math.sqrt(i.primary.mu*(2/r-2/(r+n)))-s.vel.length();return gu(i,t,e,a,l=>{const c=Ne.fromState(l.cutoff.pos,l.cutoff.vel,l.cutoff.primary.mu);return n<r?c.periapsis:c.apoapsis},n,5)}function V0(i,t,e=i.t+300){const n=Ne.fromState(i.pos,i.vel,i.primary.mu,i.t).period,s=o=>{const l=ys(i,t,{tig:o,prograde:be.teiDeltaV,normal:0,radial:0},ua),c=Ts(l.arcs),h=c&&c.orbit.stateAt(c.t0,new A,r).dot(r)<0;return c&&h?er(c.orbit)-be.entryAngle:null},r=new A,a=pu(s,e,e+n,30,.01);return a===null?null:{tig:a,prograde:be.teiDeltaV,normal:0,radial:0}}function k0(i,t,e){return mu(i,t,{tig:e,prograde:0,normal:0,radial:0},r=>{const a=Ts(r.arcs);return a?er(a.orbit):null},be.entryAngle,1e-4)}function W0(i,t,e,n=i.t+120){const s=Ne.fromState(i.pos,i.vel,i.primary.mu,i.t).period;let r=null;for(let a=n;a<n+3*s;a+=20){const o=Ze(i,a),l=a+e,c=Ze(t,l),h=O0(o.pos,c.pos,e,o.primary.mu,new A().crossVectors(o.pos,o.vel));if(!h)continue;const u=h.v1.clone().sub(o.vel),d=c.vel.clone().sub(h.v2).length(),f=u.length()+d;(!r||f<r.cost)&&(r={tpi:uu(a,u,o),arrival:l,brakingDv:d,cost:f})}return r&&{tpi:r.tpi,arrival:r.arrival,brakingDv:r.brakingDv}}function X0(i,t,e,n=120){let s=i.t,r=1/0;for(let l=i.t;l<i.t+e;l+=5){const c=Ze(i,l).pos.distanceTo(Ze(t,l).pos);c<r&&(r=c,s=l)}const a=Math.max(i.t+60,s-n),o=Ze(i,a);return uu(a,Ze(t,a).vel.sub(o.vel),o)}function ce(i,t=0){return isFinite(i)?`${(i/1e3).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t})} KM`:"∞"}function Rn(i){return isFinite(i)?Math.abs(i)<1e4?`${(Math.round(i)||0).toLocaleString("en-US")} M`:ce(i,Math.abs(i)<1e5?1:0):"—"}function te(i,t=0){return isFinite(i)?`${i.toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t})} M/S`:"—"}function ze(i){if(!isFinite(i))return"—";const t=Math.max(0,Math.floor(i)),e=Math.floor(t/86400),n=Math.floor(t%86400/3600),s=Math.floor(t%3600/60),r=t%60,a=`${Vs(s)}:${Vs(r)}`;return e>0?`${e}D ${Vs(n)}:${a}`:n>0?`${n}:${a}`:a}function q0(i){const t=Math.max(0,Math.floor(i));return`${String(Math.floor(t/3600)).padStart(3,"0")}:${Vs(Math.floor(t%3600/60))}:${Vs(t%60)}`}function Zs(i,t=1){return`${(i*180/Math.PI).toFixed(t)}°`}function Y0(i){return i>=1e3?`${(i/1e3).toLocaleString("en-US")}K×`:`${Math.round(i)}×`}function Vs(i){return i.toString().padStart(2,"0")}function xi(i,t,e){const n=i<=t[0]?3:i<=t[1]?2:i<=t[2]?1:0;return e.usedAuto?Math.min(2,n):n}const $0={"go-for-tli":"APOLLO 11, THIS IS HOUSTON. YOU ARE GO FOR TLI.","magnificent-ride":"HOUSTON, APOLLO 11 — THAT SATURN GAVE US A MAGNIFICENT RIDE.","go-for-loi":"11, THIS IS HOUSTON. YOU ARE GO FOR LOI. — ROGER, GO FOR LOI.","other-side":"ALL YOUR SYSTEMS ARE LOOKING GOOD GOING AROUND THE CORNER. WE'LL SEE YOU ON THE OTHER SIDE.","go-for-pdi":"EAGLE, HOUSTON. IF YOU READ, YOU'RE GO FOR POWERED DESCENT.","alarm-1202":"ROGER, 1202. WE COPY IT.","alarm-1202-again":"SAME ALARM, AND IT APPEARS TO COME UP WHEN WE HAVE A 16 68 UP.","alarm-1201":"WE'RE GO. SAME TYPE. WE'RE GO.","sixty-seconds":"60 SECONDS.","thirty-seconds":"30 SECONDS.","contact-light":"CONTACT LIGHT. — OKAY, ENGINE STOP.","eagle-has-landed":"TRANQUILITY BASE HERE. THE EAGLE HAS LANDED. — ROGER, TRANQUILITY, WE COPY YOU ON THE GROUND.","small-step":"THAT'S ONE SMALL STEP FOR MAN, ONE GIANT LEAP FOR MANKIND.","cleared-for-takeoff":"…AND YOU'RE CLEARED FOR TAKEOFF. — ROGER, UNDERSTAND. WE'RE NUMBER ONE ON THE RUNWAY.","ascent-countdown":"9, 8, 7, 6, 5 — ABORT STAGE, ENGINE ARM ASCENT, PROCEED.","smooth-ride":"BEAUTIFUL. 26, 36 FEET PER SECOND UP. VERY SMOOTH. VERY QUIET RIDE.","coming-home":"APOLLO 11, HOUSTON. HOW DID IT GO? — ROGER, WE GOT YOU COMING HOME.","visual-contact":"THE HORNET NOW REPORTS A VISUAL CONTACT. VISUAL CONTACT FROM THE RECOVERY SHIP.",cigars:"AND THE FLAGS ARE WAVING AND THE CIGARS ARE BEING LIT UP, CLEAR ACROSS.","big-board":"…OF LANDING A MAN ON THE MOON AND RETURNING HIM SAFELY TO THE EARTH. — THAT HAS BEEN ACCOMPLISHED."};function De(i,t,e="info"){i.emit(`“${$0[t]}”`,e,t)}const vu=120;class Mu{constructor(t,e,n){F(this,"ctx");F(this,"phaseIndex",0);F(this,"maneuver",null);F(this,"guide",null);F(this,"solution",null);F(this,"auto",!1);F(this,"status","flying");F(this,"failure",null);F(this,"grade",null);var s;this.chapter=t,this.sim=e,this.start=n,e.restore(n),this.ctx={sim:e,t0:e.met,memo:{},usedAuto:!1,guide:null},(s=t.begin)==null||s.call(t,this.ctx),this.enter(0)}get phase(){return this.chapter.phases[this.phaseIndex]??null}get capcom(){var t;return this.status==="failed"?this.failure??"ABORT":((t=this.phase)==null?void 0:t.say(this.ctx))??""}get cue(){const t=this.phase;return!t||this.status!=="flying"?null:t.kind==="pilot"?t.cue(this.ctx):t.kind==="burn"&&this.guide&&this.guide.phase!=="done"?{dir:this.guide.cue(this.sim.ship),toGo:this.guide.remaining(this.sim.ship),label:t.name}:null}get nextEvent(){var e;const t=this.phase;return!t||this.status!=="flying"?null:t.kind==="coast"?t.until(this.ctx):t.kind==="pilot"?((e=t.next)==null?void 0:e.call(t,this.ctx))??null:t.kind==="burn"&&this.guide&&this.guide.litAt===null?this.guide.ignition-30:null}holdTarget(){var e;const t=(e=this.cue)==null?void 0:e.dir;return t?ca(this.sim.ship,t):null}toggleAuto(){this.auto=!this.auto,this.auto&&(this.ctx.usedAuto=!0)}designate(t){const e=this.phase;return this.status==="flying"&&(e==null?void 0:e.kind)==="pilot"&&e.designate?e.designate(this.ctx,t):null}accept(){var t;((t=this.guide)==null?void 0:t.phase)==="paused"&&this.guide.accept()}replan(t){const e=this.phase;if((e==null?void 0:e.kind)!=="burn"||!this.guide||this.guide.litAt!==null)return!1;if(t===void 0&&this.solution&&this.solution.ignition>this.sim.met)return this.arm(this.solution.maneuver),!0;const n=e.solve(this.ctx,t);return n?(this.arm(n),!0):!1}preStep(t,e=0){var o;if(this.status!=="flying")return!1;const n=this.phase,s=this.sim,r=this.nextEvent;s.warpUntil===null&&r!==null&&r>s.met&&s.met+s.warp*t>r&&(s.warpUntil=r);const a=!this.auto&&(n==null?void 0:n.kind)==="pilot"&&!!((o=n.assist)!=null&&o.call(n,this.ctx,t,e));if(!this.auto)return a;if((n==null?void 0:n.kind)==="burn"&&this.guide){const l=s.warp>$r?0:t*s.warp,c=this.guide.autopilot(s.ship,s.met,l);s.hold=c.hold,s.ship.throttle=l>0?c.throttle:0}else(n==null?void 0:n.kind)==="pilot"&&n.autopilot(this.ctx,t);return!0}postStep(){var r,a,o,l,c;if(this.status!=="flying")return;const t=this.sim,e=this.phase;if((e==null?void 0:e.kind)==="burn"&&this.guide){this.guide.update(t.ship,t.met);const h=t.ship.stage.thrust/t.ship.mass;this.guide.phase==="burning"&&t.warp>1&&this.guide.remaining(t.ship)<h*8&&(t.warp=1,t.emit("WARP OFF — CUTOFF COMING UP","warn"))}(e==null?void 0:e.kind)==="pilot"&&((r=e.tick)==null||r.call(e,this.ctx));const n=((a=t.outcome)==null?void 0:a.kind)==="lost"?t.outcome.reason:this.missedIgnition()??((l=(o=this.chapter).failed)==null?void 0:l.call(o,this.ctx))??null;if(n){this.status="failed",this.failure=n,t.ship.throttle=0;return}!e||!(e.kind==="burn"&&(!this.guide||this.guide.phase==="done")||e.kind==="coast"&&t.met>=e.until(this.ctx)-.001||e.kind==="pilot"&&e.done(this.ctx))||(e.kind==="coast"&&((c=e.arrive)==null||c.call(e,this.ctx)),e.kind==="burn"&&this.endBurn(),this.enter(this.phaseIndex+1))}missedIgnition(){const t=this.phase,e=this.guide;return(t==null?void 0:t.kind)!=="burn"||!e||e.litAt!==null||this.sim.met<e.ignition+vu?null:`MISSED THE ${t.name} BURN — NO IGNITION`}enter(t){var s,r,a;this.phaseIndex=t,this.maneuver=null,this.guide=this.ctx.guide=null,this.solution=null;const e=this.phase;if(!e){(r=(s=this.chapter).finish)==null||r.call(s,this.ctx),this.status="complete",this.grade=this.chapter.grade(this.ctx),this.sim.ship.throttle=0,this.sim.hold=null,this.auto=!1;return}if((a=e.enter)==null||a.call(e,this.ctx),e.kind!=="burn")return;const n=e.solve(this.ctx);if(!n){this.status="failed",this.failure=`NO ${e.name} SOLUTION — CHECK YOUR TRAJECTORY`;return}if(w0(n)<(e.waive??0)){this.sim.emit(`${e.name} NOT REQUIRED — TRAJECTORY NOMINAL`,"good"),this.enter(t+1);return}this.arm(n),this.solution={maneuver:n,ignition:this.guide.ignition}}arm(t){this.maneuver=t,this.guide=this.ctx.guide=new C0(t,gi(this.sim.ship,this.sim.primary,this.sim.met),this.sim.ship)}endBurn(){const t=this.sim;t.ship.throttle=0,this.auto&&(t.hold=null);const e=this.guide?this.guide.toGo(t.ship).length():0;t.emit(`${this.phase.name} CUTOFF — RESIDUAL ${e.toFixed(1)} M/S`,e<1?"good":"warn")}}const kn=Math.PI/180;function Jn(i){return gi(i.ship,i.primary,i.met)}function As(i){return Ks(i.ship)}function nr(i){return Yo(Jn(i),12*86400)}function fe(i,t,e){return{label:i,value:t,ok:e}}function _i(i,t){const e=i.guide;if(!e)return t;const n=i.sim.ship,s=e.ignition-i.sim.met,r=n.forward.angleTo(e.cue(n))*180/Math.PI;if(e.phase==="paused")return`RESIDUAL ${te(e.remaining(n),1)} — Z TO RELIGHT AND TRIM, OR ENTER TO ACCEPT.`;if(e.phase==="burning"){const a=e.remaining(n);return a<0?`OVERBURN ${te(-a,1)} — CUT IT, X!`:a<30?"COMING UP ON CUTOFF… X AT ZERO. CTRL FEATHERS THE THROTTLE.":e.duration>60?"GOOD BURN. PERIOD (.) WARPS IT UP TO 10×. X TO CUT OFF AT ZERO.":"GOOD BURN. WATCH ΔV TO GO — X TO CUT OFF AT ZERO."}return s>120?`${t} IGNITION IN ${ze(s)} — G WARPS THERE.`:s<-3?`YOU'RE LATE — ${r>3?"ON THE ◇ AND ":""}LIGHT IT, Z. ${ze(vu+s)} UNTIL THE BURN IS MISSED.`:r>3?`IGNITION IN ${ze(s)}. GET ON THE ◇ CUE — WASD/QE, OR F TO HOLD IT.`:s>5?`ATTITUDE IS GOOD. IGNITION IN ${ze(s)} — Z TO LIGHT IT ON ZERO.`:"IGNITION — Z!"}function xu(i,t,e){i.sim.hold=ca(i.sim.ship,t),i.sim.ship.throttle=e}function Kc(i){const t=Ts(nr(i));return(t==null?void 0:t.end)==="atmosphere"?t:null}function Ko(i){const t=Ts(nr(i));return t?er(t.orbit):null}const K0={id:"tei",title:"TRANS-EARTH INJECTION",summary:"One burn behind the Moon decides whether you come home.",phases:[{kind:"burn",name:"TEI",solve:(i,t)=>V0(Jn(i.sim),As(i.sim),t??i.sim.met+600),say:i=>_i(i,"COLUMBIA, YOU'RE GO FOR TEI. IT'S ON THE FAR SIDE — AIM FOR A −6.5° ENTRY, AND THE PACIFIC WILL DO THE REST.")}],failed:i=>{var t;return((t=i.guide)==null?void 0:t.phase)!=="done"?null:Ko(i.sim)===null?"NOT ON A RETURN TRAJECTORY":null},finish:i=>De(i.sim,"coming-home"),grade(i){const t=Ko(i.sim),e=t===null?1/0:Math.abs(t-be.entryAngle);return{stars:xi(e,[.5*kn,1.5*kn,4*kn],i),lines:[fe("PREDICTED ENTRY",t===null?"NO RETURN":t>0?"MISSES EARTH":Zs(t,2),e<1.5*kn),fe("CORRIDOR",`${Zs(be.entryAngle,1)} ± 1.5°`,!0)]}}},Z0=16,j0={id:"entry",title:"ENTRY & SPLASHDOWN",summary:"Trim the corridor, cut loose the SM, and fly the lift vector home.",begin(i){i.sim.peakG=0},phases:[{kind:"burn",name:"MCC-7",waive:.3,solve(i,t){const e=Ts(nr(i.sim)),n=i.sim.met+900;return k0(Jn(i.sim),As(i.sim),t??(e?Math.max(n,e.t1-8*3600):n))},say:i=>_i(i,"THE CORRIDOR IS TIGHT. MCC-7 TRIMS YOUR ENTRY ANGLE BACK TO −6.5°.")},{kind:"coast",name:"COAST TO ENTRY",enter:i=>{delete i.memo.ei,i.memo.coasting=1},until:i=>{var t,e;return(e=i.memo).ei??(e.ei=((t=Kc(i.sim))==null?void 0:t.t1)??i.sim.met),i.memo.ei-600},arrive(i){const t=i.sim;delete i.memo.coasting,t.ship.dropStage(),t.ship.quaternion.copy(P0(t.ship.velocity.clone().negate(),t.ship.position)),t.emit("CM/SM SEP — HEAT SHIELD FORWARD, LIFT UP","good")},say:i=>{const t=Ko(i.sim);return`ENTRY INTERFACE IN ${ze((i.memo.ei??i.sim.met)-i.sim.met)}, ${t===null?"—":Zs(t,2)}. G TO COAST THERE.`}},{kind:"pilot",name:"ENTRY",cue:i=>({bank:Sl(i.sim).bank,label:i.sim.chutes==="none"?"P65 ENTRY":"CHUTES"}),autopilot(i){const t=i.sim;t.hold=null,t.rotation={pitch:0,yaw:0,roll:J0(t)}},tick(i){i.sim.chutes==="mains"&&i.memo.sighted===void 0&&(i.memo.sighted=1,De(i.sim,"visual-contact"))},done:i=>{var t;return((t=i.sim.outcome)==null?void 0:t.kind)==="splashdown"},say:i=>Q0(i)}],failed:i=>{const t=i.sim;if(t.peakG>Z0)return`CREW LOST — ${t.peakG.toFixed(0)} G`;if(i.memo.coasting&&!Kc(t))return"MISSING THE ENTRY INTERFACE — COLUMBIA WILL NOT COME HOME";const e=t.ship.velocity.dot(t.ship.position)>0;return t.peakG>.5&&e&&t.altitude>13e4&&t.primary===Ve?"SKIPPED OUT OF THE ATMOSPHERE — LIFT DOWN SOONER":null},finish:i=>De(i.sim,"cigars"),grade(i){const t=i.sim.peakG;return{stars:xi(t,[7.5,9,12],i),lines:[fe("PEAK LOAD",`${t.toFixed(1)} G`,t<=7.5),fe("SPLASHDOWN","MID-PACIFIC",!0)]}}};function J0(i){const t=Sl(i).bank,e=ha(i),n=(e>=0?1:-1)*t-e;return Math.max(-1,Math.min(1,-2*n-1.5*i.ship.angularVelocity.z))}function Q0(i){const t=i.sim;if(t.chutes==="mains")return"THREE GOOD CHUTES. WELCOME HOME, APOLLO 11.";if(t.chutes==="drogue")return"DROGUES OUT.";const e=Sl(t).bank,n=Math.abs(ha(t)),s=t.altitude;if(s>Ve.atmosphere)return`${ce(s)} TO INTERFACE, ${te(t.ship.velocity.length())}. KEEP LIFT UP — Q/E ROLL THE LIFT VECTOR.`;const r=Math.abs(n-e)>20*kn,a=e<60*kn?"LIFT UP":e>120*kn?"LIFT DOWN":"LIFT HORIZONTAL";return`${t.gLoad.toFixed(1)} G. BANK ${Math.round(n/kn)}° — GUIDANCE WANTS ${Math.round(e/kn)}° (${a}).${r?" ROLL, Q/E!":""}`}const qa=4.5,Zc=90,jc=115,Ri=250,tv=new A(0,1,0);class fa{constructor(t,e,n){F(this,"center");F(this,"east");F(this,"north");F(this,"boulders",[]);F(this,"craterRadius",Zc);F(this,"extent",Ri);this.radius=e,this.seed=n,this.center=t.clone().normalize(),this.east=new A().crossVectors(tv,this.center).normalize(),this.north=new A().crossVectors(this.center,this.east);const s=ev(n);for(const[r,a,o,l,c]of[[9,0,jc,.8,2.6],[24,jc,Ri,.5,1.6]])for(let h=-o;h<=o;h+=r)for(let u=-o;u<=o;u+=r){const d=h+(s()-.5)*r,f=u+(s()-.5)*r,g=Math.hypot(d,f),_=l+(c-l)*s()**2;g>=a&&g<o&&this.boulders.push({e:d,n:f,r:_})}}static fromSpec(t,e){return new fa(new A().fromArray(t.center),e,t.seed)}get spec(){return{center:this.center.toArray(),seed:this.seed}}local(t){const e=t.clone().normalize();return{e:this.radius*e.dot(this.east),n:this.radius*e.dot(this.north)}}point(t,e){return this.center.clone().multiplyScalar(this.radius).addScaledVector(this.east,t).addScaledVector(this.north,e).normalize()}hazardAt(t){const{e,n}=this.local(t),s=Math.hypot(e,n);return s>Ri+qa+3?null:s<Zc?"crater":this.boulders.some(r=>Math.hypot(r.e-e,r.n-n)<r.r+qa)?"boulder":null}clearAhead(t){const e=Math.hypot(t.e,t.n)||1,[n,s]=[t.e/e,t.n/e];for(let r=Ri+qa;r<Ri*4;r+=5){const a={e:n*r,n:s*r};if(!this.hazardAt(this.point(a.e,a.n)))return a}return{e:n*Ri*4,n:s*Ri*4}}}function ev(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const El=ue.radius,js=new A(0,1,0),nv=[[1e4,1202,"alarm-1202"],[7e3,1202,"alarm-1202-again"],[900,1201,"alarm-1201"]],iv=1.5,Su=8,ea=20,Zo=[60,30,0],sv=["sixty-seconds","thirty-seconds",null],rv=45,av=2*Math.PI/180,Ya=2e3,ov=1969,lv={id:"descent",title:"POWERED DESCENT",summary:"Fly the descent cue from 15 km to contact light — and not onto the boulders.",phases:[{kind:"coast",name:"COAST TO PDI",until:i=>{var t;return(t=i.memo).pdi??(t.pdi=i.sim.orbit.nextPeriapsis(i.sim.met)??i.sim.met)},say:i=>`EAGLE, YOU'RE GO FOR POWERED DESCENT. PDI AT PERILUNE IN ${ze((i.memo.pdi??0)-i.sim.met)} — G WARPS THERE.`},{kind:"pilot",name:"DESCENT",enter:i=>{i.memo.pdiFuel=i.sim.ship.fuel,i.sim.emit("PDI — THROTTLE UP (Z)","warn"),De(i.sim,"go-for-pdi")},cue:i=>{const t=Js(i),e=i.memo,n=e.lowGate?null:na(i);return{dir:t.dir,throttle:t.throttle,label:t.phase,alarm:cv(i)?String(e.alarmCode):void 0,site:n??void 0,hazard:n?!!i.sim.terrain.hazardAt(n):void 0}},autopilot(i){const t=i.sim,e=i.memo.lowGate?null:na(i);if(e&&t.terrain.hazardAt(e)){const s=t.terrain.clearAhead(Eu(i));i.memo.siteE=s.e,i.memo.siteN=s.n}const n=Js(i);xu(i,n.dir,n.throttle)},assist:dv,tick:hv,designate:uv,done:i=>i.sim.ship.landed,next:i=>Jc(i)?(i.sim.orbit.nextPeriapsis(i.sim.met)??i.sim.met)-20:null,say:i=>Jc(i)?"EAGLE, YOU MISSED PDI. G TAKES YOU AROUND TO THE NEXT PERILUNE — LIGHT IT THERE.":pv(i)}],finish(i){const t=i.sim,e=t.lastContact;i.memo.vs=e.verticalSpeed,i.memo.hs=e.horizontalSpeed,i.memo.hover=pa(t);const n=t.terrain;if(n&&t.ship.landedSite){const{e:s,n:r}=n.local(t.ship.landedSite);i.memo.long=Math.hypot(s,r)}De(t,"contact-light"),De(t,"eagle-has-landed")},grade(i){const{vs:t,hs:e,hover:n,long:s}=i.memo,r=Math.max(t/1.5,e/1);let a=r<=1?3:r<=2?2:1;return n<ea&&(a=Math.min(a,2)),{stars:i.usedAuto?Math.min(2,a):a,lines:[fe("CONTACT",r<=1?"SOFT":r<=2?"FIRM":"HARD",r<=2),fe("SINK RATE",te(t,1),t<=1.5),fe("DRIFT",te(e,1),e<=1),fe("PROPELLANT",`${Math.round(n)} S OF HOVER · EAGLE HAD ~${rv}`,n>=ea),...s!==void 0?[fe("FROM THE COMPUTER'S SITE",Rn(s),!0)]:[]]}}};function na(i){const t=i.sim.terrain;return t&&i.memo.siteE!==void 0?t.point(i.memo.siteE,i.memo.siteN):null}function Js(i){const t=i.sim,e=i.memo;if(e.freezeUntil!==void 0&&t.met<e.freezeUntil)return{dir:new A(e.frozenX,e.frozenY,e.frozenZ),throttle:e.frozenThrottle,phase:"RESTART",tgo:0};const n=e.lowGate?null:na(i),s=n==null?void 0:n.applyAxisAngle(js,t.primary.spinAt(t.met)).multiplyScalar(El);return L0(t.ship,t.primary,s)}function pa(i){const t=i.ship,e=i.primary.mu/t.position.lengthSq();return t.fuel*t.exhaustVelocity/(e*t.mass)}function cv(i){return i.memo.alarmAt!==void 0&&i.sim.met-i.memo.alarmAt<Su}function Eu(i){const t=i.sim,e=jn(t.ship,t.primary).vhVec.applyAxisAngle(js,-t.primary.spinAt(t.met)),n=t.terrain,s=e.dot(n.east),r=e.dot(n.north),a=Math.hypot(s,r)||1;return{e:s/a,n:r/a}}function hv(i){const t=i.sim,e=t.ship,n=i.memo;if(e.landed)return;const s=jn(e,t.primary);if(!t.terrain&&e.firing&&s.h<=fu){const l=D0(e,t.primary).applyAxisAngle(js,-t.primary.spinAt(t.met));t.terrain=new fa(l,El,ov),n.siteE=n.siteN=0,t.emit("HIGH GATE — P64. THE LPD SHOWS WHERE THE COMPUTER IS TAKING YOU","warn")}const r=Js(i);t.terrain&&!n.lowGate&&r.phase==="P66 LAND"&&(n.lowGate=1);const a=nv[n.alarms??0];a&&e.firing&&s.h<a[0]&&(n.alarms=(n.alarms??0)+1,n.alarmAt=t.met,n.alarmCode=a[1],[n.frozenX,n.frozenY,n.frozenZ,n.frozenThrottle]=[r.dir.x,r.dir.y,r.dir.z,r.throttle],n.freezeUntil=t.met+iv,t.emit(`PROGRAM ALARM ${a[1]}`,"bad"),De(t,a[2]));const o=Zo[n.calls??0];if(o!==void 0&&e.firing&&pa(t)-ea<=o){n.calls=(n.calls??0)+1,n.callAt=t.met;const l=sv[n.calls-1];l?De(t,l,"warn"):t.emit("BINGO — LAND IT OR LOSE IT","bad")}}function uv(i,t){const e=i.sim,n=i.memo,s=e.terrain;if(!s)return"THE LPD COMES ALIVE AT HIGH GATE";if(n.lowGate||e.ship.landed)return"LPD IS OUT — IN P66 YOU FLY IT THERE";const r=Eu(i),a=s.local(e.ship.position.clone().applyAxisAngle(js,-e.primary.spinAt(e.met)));let o;if("at"in t){if(o=s.local(t.at),(o.e-a.e)*r.e+(o.n-a.n)*r.n<0)return"LPD — THAT'S BEHIND YOU"}else{const d=s.point(n.siteE,n.siteN).multiplyScalar(El).distanceTo(e.ship.position.clone().applyAxisAngle(js,-e.primary.spinAt(e.met)))*Math.tan(av),[f,g]=t.clicks;o={e:n.siteE+(r.e*f+r.n*g)*d,n:n.siteN+(r.n*f-r.e*g)*d}}const l=Math.hypot(o.e,o.n);return l>Ya&&(o={e:o.e*Ya/l,n:o.n*Ya/l}),n.siteE=o.e,n.siteN=o.n,s.hazardAt(s.point(o.e,o.n))?"LPD — STILL IN THE BOULDERS":`LPD — CLEAR GROUND, ${Rn(Math.hypot(o.e,o.n))} FROM THE COMPUTER'S SITE`}function dv(i,t,e){var l;const n=i.sim.ship;if(n.landed||n.throttle===0||n.fuel<=0)return!1;const s=Js(i);if(s.phase!=="P66 LAND")return n.throttle=Math.max(.05,s.throttle),delete i.memo.rod,!0;const r=jn(n,i.sim.primary);(l=i.memo).rod??(l.rod=Math.max(-3,Math.min(-.5,r.vz))),i.memo.rod=Math.max(-5,Math.min(1,i.memo.rod+e*fv*t));const a=Math.max(.3,n.forward.dot(r.up)),o=1.5*(i.memo.rod-r.vz)+r.gEff;return n.throttle=Math.max(.05,Math.min(1,o*n.mass/(n.stage.thrust*a))),!0}const fv=1;function Jc(i){const t=i.sim,e=t.orbit;if(t.ship.fuel<i.memo.pdiFuel-1||!e.closed)return!1;const n=t.met-((e.nextPeriapsis(t.met)??t.met)-e.period);return n>90&&n<e.period-60}function pv(i){const t=i.sim,e=t.ship,n=i.memo,s=jn(e,t.primary),r=c=>c===void 0?1/0:t.met-c;if(!e.firing&&s.h>1e3)return"LIGHT THE DPS — Z. THE COMPUTER THROTTLES; YOU FLY THE ◇ (F HOLDS IT).";if(r(n.alarmAt)<Su){const c=n.alarmCode;return r(n.alarmAt)<3.5?`PROGRAM ALARM… IT'S A ${c}. GIVE US A READING ON THE ${c}.`:n.alarms===1?"HOUSTON: WE'RE GO ON THAT ALARM. THE COMPUTER IS SHEDDING WORK — FLY ON.":"HOUSTON: SAME TYPE — WE'RE GO. KEEP FLYING."}const a=pa(t);if((n.calls??0)>=Zo.length)return`BINGO. ${Math.round(a)} SECONDS OF HOVER — GET IT DOWN.`;if(r(n.callAt)<5)return`${Zo[n.calls-1]} SECONDS.`;const o=Js(i);if(o.phase==="P66 LAND"){const c=n.rod??s.vz;return s.vh>3?`P66 — YOU HAVE IT. DRIFT ${te(s.vh,1)}: NULL IT WITH THE STICK (OR F) BEFORE YOU SET DOWN.`:s.h>30?`P66. ${Math.round(s.h)} M, SINK ${te(-c,1)} — SHIFT SLOWS IT, CTRL SPEEDS IT. AIM FOR UNDER 1.5 M/S AT CONTACT.`:`${Math.round(s.h)} M… DOWN ${te(-s.vz,1)}… PICKING UP SOME DUST.`}const l=na(i);return l&&t.terrain.hazardAt(l)?"THE COMPUTER IS TAKING YOU INTO A BOULDER FIELD. REDESIGNATE — ARROWS OR CLICK THE GROUND — OR TAKE IT LONG IN P66.":o.phase==="P64 APPROACH"?`P64. ${ce(s.h,1)}. LPD SITE CLEAR — THE COMPUTER FLIES YOU THERE; P66 AT LOW GATE IS YOURS.`:`P63 BRAKING. ${ce(s.h,1)}, ${te(s.vh)} ACROSS THE GROUND. AUTO THROTTLE; YOU'RE GO.`}const fi=ue.radius,mv=new A(0,1,0),gv={id:"doi",title:"UNDOCK & DESCENT ORBIT",summary:"Eagle has wings. Drop perilune to 15 km for the landing.",begin(i){i.sim.undock(.3),i.sim.emit("UNDOCKED — THE EAGLE HAS WINGS","good")},phases:[{kind:"burn",name:"DOI",solve:(i,t)=>G0(Jn(i.sim),As(i.sim),t??i.t0+1200,be.descentPerilune),say:i=>_i(i,"EAGLE, YOU'RE GO FOR DOI. A SMALL RETRO BURN — PERILUNE 15 KM, HALF AN ORBIT AHEAD.")}],failed:i=>i.sim.ship.firing?null:i.sim.orbit.periapsis<fi+4e3?"PERILUNE UNDER 4 KM — EAGLE WOULD HIT THE MOUNTAINS":null,grade(i){const t=i.sim.orbit.periapsis-fi,e=Math.abs(i.sim.orbit.periapsis-be.descentPerilune);return{stars:xi(e,[1e3,4e3,12e3],i),lines:[fe("PERILUNE",ce(t,1),e<4e3),fe("TARGET",ce(be.descentPerilune-fi,1),!0)]}}},Nr=(()=>{const i=fi+18e3,t=(i+fi+83e3)/2;return{radius:i,speed:Math.sqrt(ue.mu*(2/i-1/t))}})(),_v=9.4,$a=.1;function vv(i){const t=gi(i.csm,i.primary,i.met),e=Ne.fromState(t.pos,t.vel,t.primary.mu,t.t),n=i.lm.landedSite,s=o=>{const l=e.stateAt(o),c=n.clone().applyAxisAngle(mv,i.primary.spinAt(o)),h=e.hVec.clone().normalize();return Math.atan2(new A().crossVectors(c,l).dot(h),c.dot(l))},r=o=>Math.atan2(Math.sin(o),Math.cos(o));let a=r(s(i.met+600)-$a);for(let o=i.met+630;o<i.met+3*e.period;o+=30){const l=r(s(o)-$a);if(a<0&&l>=0){let c=o-30,h=o;for(let u=0;u<40;u++){const d=(c+h)/2;r(s(d)-$a)<0?c=d:h=d}return Math.round(h)}a=l}return i.met+600}function Or(i){return new A().crossVectors(i.csm.position,i.csm.velocity).normalize()}const Mv={id:"ascent",title:"LUNAR ASCENT",summary:"Leave the descent stage behind and chase Columbia into orbit.",begin(i){i.memo.window=vv(i.sim),i.sim.ship.dropStage(),i.sim.emit("ASCENT STAGE ARMED — DESCENT STAGE STAYS AS THE LAUNCH PAD","info"),De(i.sim,"small-step")},phases:[{kind:"coast",name:"LIFTOFF WINDOW",until:i=>i.sim.ship.landed?i.memo.window-20:i.sim.met,arrive:i=>void(i.sim.ship.landed&&De(i.sim,"cleared-for-takeoff")),say:i=>`EVA COMPLETE. COLUMBIA IS COMING AROUND — YOUR LIFTOFF WINDOW IS IN ${ze(i.memo.window-i.sim.met)}. G TO WARP.`},{kind:"pilot",name:"ASCENT",cue:i=>{const t=Ur(i.sim.ship,i.sim.primary,Or(i.sim),Nr);return{dir:t.dir,throttle:t.toGo>0?1:0,toGo:t.toGo,label:t.phase}},autopilot(i,t){const e=i.sim,n=Ur(e.ship,e.primary,Or(e),Nr),s=e.ship.stage.thrust/e.ship.mass,r=t*Math.min(e.warp,10),a=e.ship.landed&&e.met+r<i.memo.window?0:Math.min(1,Math.max(0,n.toGo)/(s*r));xu(i,n.dir,a)},tick(i){const t=i.sim,e=i.memo;t.ship.landed&&e.countdown===void 0&&t.met>=e.window-_v&&t.met<e.window&&(e.countdown=1,De(t,"ascent-countdown")),!t.ship.landed&&e.ride===void 0&&(e.ride=1,De(t,"smooth-ride"))},done:i=>{const t=i.sim;if(t.ship.landed)return!1;i.memo.liftoff===void 0&&(i.memo.liftoff=t.met);const e=Ur(t.ship,t.primary,Or(t),Nr);return!t.ship.firing&&e.toGo<2&&t.orbit.periapsis>fi+5e3},say:i=>{const t=i.sim,e=i.memo.window-t.met;if(t.ship.landed)return e>0?`LIFTOFF IN ${Math.ceil(e)} — Z ON ZERO, THEN RIDE THE ◇.`:"LIFTOFF — Z! THE WINDOW IS OPEN.";const n=Ur(t.ship,t.primary,Or(t),Nr);return!t.ship.firing&&n.toGo>2?`APS OFF WITH ${te(n.toGo)} TO GO — RELIGHT, Z!`:n.toGo<60?`${te(n.toGo)} TO GO — X ON ZERO FOR INSERTION.`:`${n.phase}. FOLLOW THE ◇. ${te(n.toGo)} TO ORBIT.`}}],grade(i){const t=i.sim.orbit,e=t.periapsis-fi,n=t.apoapsis-fi,s=Math.abs((i.memo.liftoff??i.memo.window)-i.memo.window),r=Math.max(Math.max(0,15e3-e)*5,Math.abs(n-83e3));return{stars:Math.min(xi(r,[25e3,6e4,2e5],i),s<15?3:s<60?2:1),lines:[fe("INSERTION ORBIT",`${ce(e)} × ${ce(n)}`,r<25e3),fe("LIFTOFF",s<1?"ON TIME":`${Math.round(s)} S OFF`,s<15),fe("APS PROPELLANT",`${Math.round(i.sim.ship.fuelFraction*100)}%`,!0)]}}},xv=2400,Qc=15,Fr=1;function th(i){return gi(i.csm,i.primary,i.met)}const Sv={id:"rendezvous",title:"RENDEZVOUS & DOCKING",summary:"Intercept Columbia, brake, and fly the last hundred meters on RCS.",begin(i){i.memo.rcs0=Math.max(1e-9,i.sim.lm.rcsFuel)},phases:[{kind:"burn",name:"TPI",solve(i){const t=W0(Jn(i.sim),th(i.sim),xv);return t&&(i.memo.arrival=t.arrival),(t==null?void 0:t.tpi)??null},say:i=>_i(i,"EAGLE, COLUMBIA IS AHEAD AND ABOVE. TPI PUTS YOU ON AN INTERCEPT — 40 MINUTES TO CLOSE.")},{kind:"burn",name:"BRAKING",solve:i=>X0(Jn(i.sim),th(i.sim),(i.memo.arrival??i.sim.met)-i.sim.met+900),say:i=>_i(i,"ON THE INTERCEPT. THE BRAKING BURN MATCHES COLUMBIA AT CLOSEST APPROACH.")},{kind:"pilot",name:"DOCKING",enter:i=>void(i.memo.prox=1),cue:i=>{const t=i.sim.relative();return{dir:t==null?void 0:t.pos.clone().normalize(),label:"PROX OPS"}},autopilot(i){const t=i.sim,e=N0(t),n=t.relative();!e||!n||(t.hold=ca(t.ship,n.pos),t.translation=e.translation,t.ship.throttle=0)},done:i=>{const t=i.sim,e=t.relative();return!e||e.range>Qc||-e.rangeRate>=Fr?!1:(i.memo.contact=Math.max(0,-e.rangeRate),i.memo.rcsUsed=1-t.lm.rcsFuel/i.memo.rcs0,t.translation={x:0,y:0,z:0},t.dock(!0),t.emit("CAPTURE — HARD DOCK. CREW TRANSFER; EAGLE JETTISONED.","good"),!0)},say:i=>{const t=i.sim.relative();if(!t)return"";const e=-t.rangeRate,n=Math.min(6,Math.max(.25,t.range/60)),s=e>n*1.5?"TOO FAST — BRAKE WITH K.":e<0?"OPENING — CLOSE WITH I.":"GOOD RATE.";return`RANGE ${Rn(t.range)}, CLOSING ${te(e,2)}. ${s} I/K CLOSE, J/L U/O NULL DRIFT. CAPTURE UNDER ${Fr} M/S.`}}],failed:i=>{const t=i.sim.relative();return i.memo.prox&&t&&t.range<Qc&&-t.rangeRate>=Fr?`COLLISION AT ${te(-t.rangeRate,1)} — DOCKING PROBE DAMAGED`:null},grade(i){const{contact:t,rcsUsed:e}=i.memo;return{stars:Math.min(xi(t,[.3,.6,Fr],i),e<.6?3:2),lines:[fe("CONTACT SPEED",te(t,2),t<=.3),fe("RCS USED",`${Math.round(e*100)}%`,e<.6)]}}},Mn=ue.radius;function ds(i){const t=i.sim;return t.primary===Bt?Math.sign(t.orbit.hVec.y)*t.orbit.periapsis:da(nr(t))}function yu(i){const t=ds(i);return t===null?1/0:Math.abs(t-be.perilune)}const Ev={id:"tli",title:"TRANS-LUNAR INJECTION",summary:"Light the S-IVB and throw Columbia at the Moon.",begin:i=>De(i.sim,"go-for-tli"),phases:[{kind:"burn",name:"TLI",solve:(i,t)=>_u(Jn(i.sim),As(i.sim),t??i.sim.met+300),say:i=>_i(i,i.sim.met-i.t0<40?"APOLLO 11, HOUSTON. YOU'RE GO FOR TLI. THE ◇ ON THE BALL IS YOUR BURN ATTITUDE — M SHOWS THE MAP.":"THE S-IVB BURN SENDS YOU 3 DAYS UPHILL TO A 110 KM PERILUNE.")}],finish(i){i.sim.ship.dropStage(),i.sim.emit("S-IVB SEP — TRANSPOSITION AND DOCKING COMPLETE","good"),De(i.sim,"magnificent-ride")},failed:i=>{const t=i.guide;return i.sim.ship.fuel<=0&&t&&t.remaining(i.sim.ship)>50?"S-IVB DEPLETED SHORT OF TLI":(t==null?void 0:t.phase)==="done"&&ds(i)===null?"NO LUNAR ENCOUNTER — THE BURN MISSED THE MOON":null},grade(i){const t=yu(i),e=ds(i);return{stars:xi(t,[5e5,25e5,3e7],i),lines:[fe("PREDICTED PERILUNE",e===null?"MISSES THE MOON":Math.abs(e)<Mn?"LUNAR IMPACT":ce(Math.abs(e)-Mn),t<25e5),fe("TARGET",ce(Math.abs(be.perilune)-Mn),!0)]}}},yv={id:"mcc",title:"MIDCOURSE CORRECTION",summary:"Trim the coast so perilune lands on 110 km — or skip it if TLI was clean.",phases:[{kind:"burn",name:"MCC-2",waive:.3,solve:(i,t)=>z0(Jn(i.sim),As(i.sim),t??i.t0+20*3600),say:i=>_i(i,"TRACKING SHOWS YOUR PERILUNE OFF THE MARK. MCC-2 IS A SMALL SPS BURN — FEATHER IT WITH THE THROTTLE.")},{kind:"coast",name:"TRANSLUNAR COAST",until:i=>{if(i.memo.soi===void 0){const t=nr(i.sim).find(e=>e.primary===Bt);i.memo.soi=t?t.t0:i.sim.met+3*86400}return i.memo.soi},enter:i=>{delete i.memo.soi,i.memo.coasting=1},say:i=>{const t=ds(i),e=(i.memo.soi??i.sim.met)-i.sim.met;return`PERILUNE ${t===null?"—":Math.abs(t)<Mn?"BELOW THE SURFACE":ce(Math.abs(t)-Mn)}. THE MOON'S SPHERE OF INFLUENCE IN ${ze(e)} — G TO COAST THERE.`}}],failed:i=>{if(!i.memo.coasting)return null;const t=ds(i);return t===null?"NO LUNAR ENCOUNTER — THE COAST MISSES THE MOON":Math.abs(t)<Mn+2e4?"IMPACT TRAJECTORY — PERILUNE BELOW 20 KM":null},grade(i){const t=yu(i),e=ds(i);return{stars:xi(t,[25e3,15e4,1e6],i),lines:[fe("PERILUNE",e===null?"—":ce(Math.abs(e)-Mn),t<15e4),fe("ERROR",ce(t),t<25e3)]}}},Tv={id:"loi",title:"LUNAR ORBIT INSERTION",summary:"Behind the Moon, out of contact: burn retrograde and stay.",begin(i){De(i.sim,"go-for-loi"),De(i.sim,"other-side")},phases:[{kind:"burn",name:"LOI",solve:i=>H0(Jn(i.sim),As(i.sim)),say:i=>_i(i,"YOU'RE GO FOR LOI. THE BURN IS AT PERILUNE, BEHIND THE MOON — IF IT DOESN'T HAPPEN, YOU FLY STRAIGHT ON PAST.")}],failed:i=>{var e;const t=i.sim.orbit;return i.sim.primary!==Bt?"NOT CAPTURED — COLUMBIA FLEW PAST THE MOON":((e=i.guide)==null?void 0:e.phase)!=="done"&&i.sim.ship.fuel>0||t.closed?null:"NOT CAPTURED — COLUMBIA IS FLYING PAST THE MOON"},grade(i){const t=i.sim.orbit,e=be.lunarOrbit,n=Math.max(Math.abs(t.apoapsis-e),Math.abs(t.periapsis-e));return{stars:t.periapsis>Mn+2e4?xi(n,[15e3,4e4,15e4],i):0,lines:[fe("ORBIT",`${ce(t.periapsis-Mn)} × ${ce(t.apoapsis-Mn)}`,n<4e4),fe("TARGET",`${ce(e-Mn)} CIRCULAR`,!0)]}}},qe=[Ev,yv,Tv,gv,lv,Mv,Sv,K0,j0],eh="orbital.apollo11.v4";class Av{constructor(){F(this,"data",{stars:qe.map(()=>0),unlocked:0,resume:null});try{const t=localStorage.getItem(eh);t&&Object.assign(this.data,JSON.parse(t))}catch{}}get totalStars(){return this.data.stars.reduce((t,e)=>t+e,0)}record(t,e){this.data.stars[t]=Math.max(this.data.stars[t]??0,e),this.data.unlocked=Math.max(this.data.unlocked,Math.min(qe.length-1,t+1)),this.save()}setResume(t,e){this.data.resume=e&&t<qe.length?{chapter:t,start:e}:null,this.save()}save(){try{localStorage.setItem(eh,JSON.stringify(this.data))}catch{}}}const nh={pitch:0,yaw:0,roll:0},ih={x:0,y:0,z:0},bv=2.5,wv=.35,sh=new A(0,0,1);class rh{constructor(t){F(this,"position",new A);F(this,"velocity",new A);F(this,"quaternion",new En);F(this,"angularVelocity",new A);F(this,"fuels");F(this,"stagesDropped",0);F(this,"rcsFuel");F(this,"throttle",0);F(this,"sas",!0);F(this,"attachedMass",0);F(this,"landedSite",null);F(this,"rcsCommand",new A);F(this,"burnDv",new A);this.id=t;const e=qc[t];this.fuels=e.stages.map(n=>n.fuelMass),this.rcsFuel=e.rcsFuelMass}get spec(){return qc[this.id]}get stage(){return this.spec.stages[this.stagesDropped]}get fuel(){return this.fuels[this.stagesDropped]}get fuelFraction(){return this.stage.fuelMass>0?this.fuel/this.stage.fuelMass:0}get landed(){return this.landedSite!==null}get canStage(){return this.stagesDropped<this.spec.stages.length-1}dropStage(){this.canStage&&this.stagesDropped++}get ownMass(){let t=this.rcsFuel;for(let e=this.stagesDropped;e<this.spec.stages.length;e++)t+=this.spec.stages[e].dryMass+this.fuels[e];return t}get mass(){return this.ownMass+this.attachedMass}get exhaustVelocity(){return this.stage.isp*$s}get deltaV(){return this.stage.thrust<=0?0:this.exhaustVelocity*Math.log(this.mass/(this.mass-this.fuel))}get firing(){return this.throttle>0&&this.fuel>0&&this.stage.thrust>0}get forward(){return sh.clone().applyQuaternion(this.quaternion)}axis(t,e,n){return new A(t,e,n).applyQuaternion(this.quaternion)}get thrustAccel(){return this.firing?this.forward.multiplyScalar(this.stage.thrust*this.throttle/this.mass):new A}get rcsAccel(){return this.rcsFuel<=0||this.rcsCommand.lengthSq()<1e-6?new A:this.rcsCommand.clone().clampLength(0,1).applyQuaternion(this.quaternion).multiplyScalar(this.spec.rcsThrust/this.mass)}consume(t){if(this.firing){const n=this.stage.thrust*this.throttle/this.exhaustVelocity;this.fuels[this.stagesDropped]=Math.max(0,this.fuel-n*t)}const e=Math.min(1,this.rcsCommand.length());if(e>.001&&this.rcsFuel>0){const n=this.spec.rcsThrust*e/(this.spec.rcsIsp*$s);this.rcsFuel=Math.max(0,this.rcsFuel-n*t)}}applyRotationInput(t,e){const n=this.spec.angularAccel;this.angularVelocity.x+=t.pitch*n*e,this.angularVelocity.y+=t.yaw*n*e,this.angularVelocity.z+=t.roll*n*e;const s=t.pitch!==0||t.yaw!==0||t.roll!==0;this.sas&&!s&&(this.angularVelocity.multiplyScalar(Math.exp(-5*e)),this.angularVelocity.lengthSq()<1e-8&&this.angularVelocity.set(0,0,0))}integrateAttitude(t){const e=this.angularVelocity;if(e.lengthSq()===0)return;const n=new En().setFromAxisAngle(e.clone().normalize(),e.length()*t);this.quaternion.multiply(n).normalize()}slewToward(t,e){const n=this.quaternion.angleTo(t);if(this.angularVelocity.set(0,0,0),n<1e-6){this.quaternion.copy(t);return}const s=Math.min(n,Math.min(wv,bv*n)*e);this.quaternion.slerp(t,s/n)}reset(t,e,n=e){this.position.copy(t),this.velocity.copy(e),this.angularVelocity.set(0,0,0),this.stagesDropped=0,this.fuels=this.spec.stages.map(s=>s.fuelMass),this.rcsFuel=this.spec.rcsFuelMass,this.throttle=0,this.sas=!0,this.attachedMass=0,this.landedSite=null,this.rcsCommand.set(0,0,0),this.burnDv.set(0,0,0),this.pointAlong(n)}pointAlong(t){this.quaternion.setFromUnitVectors(sh,t.clone().normalize())}}const ah=5,Rv=30,Cv=50,is=new A(0,1,0);class yl{constructor(){F(this,"csm",new rh("csm"));F(this,"lm",new rh("lm"));F(this,"activeId","csm");F(this,"docked",!0);F(this,"lmAlive",!0);F(this,"met",0);F(this,"warp",1);F(this,"warpUntil",null);F(this,"primary",Ve);F(this,"outcome",null);F(this,"chutes","none");F(this,"chuteAt",0);F(this,"gLoad",0);F(this,"peakG",0);F(this,"lastContact",null);F(this,"terrain",null);F(this,"rotation",nh);F(this,"translation",ih);F(this,"hold",null);F(this,"events",[]);F(this,"rails",null);F(this,"otherRails",null);F(this,"orbitCache",null)}get ship(){return this.activeId==="csm"?this.csm:this.lm}get other(){return this.docked||!this.lmAlive?null:this.activeId==="csm"?this.lm:this.csm}get orbit(){return this.rails?this.rails:((!this.orbitCache||this.orbitCache.epoch!==this.met)&&(this.orbitCache=Ne.fromState(this.ship.position,this.ship.velocity,this.primary.mu,this.met)),this.orbitCache)}get altitude(){return this.ship.position.length()-this.primary.radius}get chuteOpen(){return this.chutes==="none"?0:Math.min(1,(this.met-this.chuteAt)/nn.inflation)}get inAtmosphere(){return this.primary.atmosphere>0&&this.altitude<this.primary.atmosphere+1}get maxWarp(){const t=this.ship;return t.firing||t.rcsCommand.lengthSq()>0||this.inAtmosphere&&!t.landed?$r:1/0}absolutePosition(t=this.ship){return this.primary.positionAt(this.met).add(t.position)}relative(){const t=this.other;if(!t)return null;const e=t.position.clone().sub(this.ship.position),n=t.velocity.clone().sub(this.ship.velocity),s=e.length();return{range:s,rangeRate:s>0?e.dot(n)/s:0,pos:e,vel:n}}emit(t,e="info",n){this.events.push({text:t,tone:e,voice:n})}perturbed(){this.reshaped(),this.otherRails=null}reshaped(){this.rails=null,this.orbitCache=null}undock(t=.3){if(!this.docked||!this.lmAlive)return;const e=this.csm.forward;this.lm.position.copy(this.csm.position).addScaledVector(e,12),this.lm.velocity.copy(this.csm.velocity).addScaledVector(e,t),this.lm.quaternion.copy(this.csm.quaternion),this.lm.angularVelocity.set(0,0,0),this.csm.attachedMass=0,this.docked=!1,this.activeId="lm",this.perturbed()}dock(t){if(this.docked||!this.lmAlive)return;const e=this.csm.mass,n=this.lm.mass;this.csm.velocity.multiplyScalar(e).addScaledVector(this.lm.velocity,n).divideScalar(e+n),this.lm.position.copy(this.csm.position),this.lm.velocity.copy(this.csm.velocity),this.docked=!0,this.activeId="csm",this.lmAlive=!t,this.csm.attachedMass=t?0:this.lm.ownMass,this.perturbed()}step(t){if(this.outcome)return;const e=this.ship;this.warp=Math.min(this.warp,this.maxWarp);let n=t*this.warp;this.warpUntil!==null&&(n=Math.min(n,Math.max(0,this.warpUntil-this.met))),this.stepAttitude(e,t,n),e.rcsCommand.set(this.translation.x,this.translation.y,this.translation.z),this.anchorOther(),e.landedSite?(this.met+=n,this.stepLanded(e)):e.firing||e.rcsCommand.lengthSq()>0||this.inAtmosphere?this.stepNumeric(n):this.stepRails(n),this.propagateOther(),this.warpUntil!==null&&this.met>=this.warpUntil-1e-6&&(this.warpUntil=null,this.warp=1)}stepAttitude(t,e,n){const s=this.aeroTrimActive(t);this.hold&&!s?t.slewToward(this.hold,e*Math.min(this.warp,$r)):this.warp<=$r&&(t.applyRotationInput(this.rotation,n),t.integrateAttitude(n)),s&&this.trimHeatShield(t)}stepLanded(t){const e=this.primary;if(t.position.copy(t.landedSite).applyAxisAngle(is,e.spinAt(this.met)).multiplyScalar(e.radius),t.velocity.crossVectors(is,t.position).multiplyScalar(Kr(e)),this.rails=null,!t.firing)return;const n=e.mu/t.position.lengthSq()*t.mass;t.stage.thrust*t.throttle>n&&(t.landedSite=null,t.position.addScaledVector(t.position.clone().normalize(),.5),this.emit("LIFTOFF","good"))}stepRails(t){const e=this.ship,n=this.met+t;for(;this.met<n&&!this.outcome;){this.rails??(this.rails=Ne.fromState(e.position,e.velocity,this.primary.mu,this.met));const s=gl(this.rails,this.primary,this.met,n),r=s?s.t:n;if(this.rails.stateAt(r,e.position,e.velocity),this.met=r,!s)break;if(s.kind==="soi-enter"||s.kind==="soi-exit")this.changePrimary(s.kind);else{this.rails=null,s.kind==="surface"&&this.contact();break}}}stepNumeric(t){const e=this.ship;this.rails=null;const n=this.primary.atmosphere>0,r=Math.max(1,Math.ceil(t/(n?.25:.5))),a=t/r;for(let o=0;o<r&&!this.outcome;o++){this.updateChutes(e);const l=e.thrustAccel,c=l.clone().add(e.rcsAccel),h=n?this.aero(e):null,u=e.mass,d=h?(f,g)=>Wc(f,g,u,h).add(c):()=>c;if(h){const f=Wc(e.position,e.velocity,u,h).add(c);this.gLoad=f.length()/$s,this.inAtmosphere&&(this.peakG=Math.max(this.peakG,this.gLoad))}else this.gLoad=c.length()/$s;if(lu(e.position,e.velocity,a,d,this.primary.mu),e.burnDv.addScaledVector(l,a),e.consume(a),this.met+=a,e.position.length()<=this.primary.radius){this.contact();break}this.checkSoiNumeric()}}checkSoiNumeric(){const t=this.ship.position;this.primary===Ve?t.distanceTo(Bt.positionAt(this.met))<Bt.soi&&this.changePrimary("soi-enter"):t.length()>this.primary.soi&&this.changePrimary("soi-exit")}changePrimary(t){const e=this.ship;this.propagateOther(),this.primary=Qr(t,e.position,e.velocity,this.met);const n=this.other;n&&!n.landedSite?Qr(t,n.position,n.velocity,this.met):n&&(this.lmAlive=!1,this.emit("LM LEFT BEHIND","warn")),this.reshaped(),this.otherRails=null,this.anchorOther(),this.emit(t==="soi-enter"?"ENTERING LUNAR SPHERE OF INFLUENCE":"LEAVING LUNAR SPHERE OF INFLUENCE")}anchorOther(){const t=this.other;t&&!t.landedSite&&!this.otherRails&&(this.otherRails=Ne.fromState(t.position,t.velocity,this.primary.mu,this.met))}propagateOther(){const t=this.other;if(t){if(t.landedSite){const e=this.primary;t.position.copy(t.landedSite).applyAxisAngle(is,e.spinAt(this.met)).multiplyScalar(e.radius),t.velocity.crossVectors(is,t.position).multiplyScalar(Kr(e));return}this.anchorOther(),this.otherRails.stateAt(this.met,t.position,t.velocity)}}aero(t){if(!(t.id==="csm"&&t.stage.name==="CM"))return{cdA:25,liftToDrag:0};if(this.chutes==="none")return{cdA:nn.cdA,liftToDrag:nn.liftToDrag,liftDir:this.liftDirection(t)};const[n,s]=this.chutes==="drogue"?[nn.cdA,nn.drogue.cdA]:[nn.drogue.cdA,nn.mains.cdA],r=this.chuteOpen;return{cdA:n+(s-n)*r*r,liftToDrag:0}}liftDirection(t=this.ship){const e=t.velocity.clone().normalize(),n=t.axis(0,1,0);return n.addScaledVector(e,-n.dot(e)).normalize()}aeroTrimActive(t){return t.id!=="csm"||t.stage.name!=="CM"||this.primary.atmosphere===0?!1:.5*ou(this.altitude)*t.velocity.lengthSq()>Cv}trimHeatShield(t){const e=t.velocity.clone().normalize().negate(),n=new En().setFromUnitVectors(t.forward,e);t.quaternion.premultiply(n).normalize(),t.angularVelocity.x=t.angularVelocity.y=0}updateChutes(t){if(t.id!=="csm"||t.stage.name!=="CM"||this.primary!==Ve)return;const e=this.altitude;this.chutes==="none"&&e<nn.drogue.altitude&&t.velocity.length()<nn.drogue.maxSpeed?(this.chutes="drogue",this.chuteAt=this.met,this.emit("DROGUES","good")):this.chutes==="drogue"&&e<nn.mains.altitude&&(this.chutes="mains",this.chuteAt=this.met,this.emit("MAIN CHUTES — THREE GOOD CHUTES","good"))}contact(){var d;const t=this.ship,e=this.primary,n=t.position.clone().normalize(),s=new A().crossVectors(is,t.position).multiplyScalar(Kr(e)),r=t.velocity.clone().sub(s),a=-r.dot(n),o=r.addScaledVector(n,a).length(),l=t.forward.angleTo(n)*180/Math.PI;if(this.lastContact={body:e.name,verticalSpeed:a,horizontalSpeed:o,tilt:l},t.throttle=0,this.warp=1,this.warpUntil=null,this.reshaped(),e===Ve){const f=this.chutes==="mains"&&a<15;this.outcome=f?{kind:"splashdown",reason:"SPLASHDOWN"}:{kind:"lost",reason:`IMPACT AT ${Math.round(t.velocity.length())} M/S`},t.position.setLength(Sn.radius),t.velocity.set(0,0,0);return}const c=Math.hypot(a,o);if(c>ah||l>Rv){this.outcome={kind:"lost",reason:c>ah?`IMPACT AT ${c.toFixed(1)} M/S`:`TIPPED OVER — ${Math.round(l)}° TILT`},t.position.setLength(e.radius),t.velocity.copy(s);return}const h=n.applyAxisAngle(is,-e.spinAt(this.met)),u=e===Bt?(d=this.terrain)==null?void 0:d.hazardAt(h):null;if(u){this.outcome={kind:"lost",reason:u==="crater"?"TIPPED OVER — ON THE CRATER WALL":"TIPPED OVER — A BOULDER UNDER A FOOTPAD"},t.position.setLength(e.radius),t.velocity.copy(s);return}t.landedSite=h,t.pointAlong(t.position),this.stepLanded(t),this.emit("CONTACT LIGHT","good")}snapshot(){var e;const t=n=>{var s;return{pos:n.position.toArray(),vel:n.velocity.toArray(),quat:n.quaternion.toArray(),fuels:[...n.fuels],stagesDropped:n.stagesDropped,rcsFuel:n.rcsFuel,attachedMass:n.attachedMass,landedSite:((s=n.landedSite)==null?void 0:s.toArray())??null}};return{met:this.met,primary:this.primary.name,activeId:this.activeId,docked:this.docked,lmAlive:this.lmAlive,chutes:this.chutes,terrain:((e=this.terrain)==null?void 0:e.spec)??null,csm:t(this.csm),lm:t(this.lm)}}restore(t){const e=(n,s)=>{n.position.fromArray(s.pos),n.velocity.fromArray(s.vel),n.quaternion.fromArray(s.quat),n.angularVelocity.set(0,0,0),n.fuels=[...s.fuels],n.stagesDropped=s.stagesDropped,n.rcsFuel=s.rcsFuel,n.attachedMass=s.attachedMass,n.landedSite=s.landedSite?new A().fromArray(s.landedSite):null,n.throttle=0,n.sas=!0,n.rcsCommand.set(0,0,0),n.burnDv.set(0,0,0)};this.met=t.met,this.primary=x0[t.primary],this.activeId=t.activeId,this.docked=t.docked,this.lmAlive=t.lmAlive,this.chutes=t.chutes,this.terrain=t.terrain?fa.fromSpec(t.terrain,Bt.radius):null,e(this.csm,t.csm),e(this.lm,t.lm),this.outcome=null,this.warp=1,this.warpUntil=null,this.gLoad=this.peakG=0,this.lastContact=null,this.hold=null,this.rotation=nh,this.translation=ih,this.events=[],this.perturbed()}}const oh=2*3600+1680,Pv=185e3,Iv=1500;function Tu(){const i=new yl,t=Sn.radius+Pv,e=Math.sqrt(Sn.mu/t**3),n=r=>{const a=new A(t*Math.cos(r),0,-t*Math.sin(r)),o=new A(-Math.sin(r),0,-Math.cos(r)).multiplyScalar(e*t);i.primary=Ve,i.met=oh,i.csm.reset(a,o),i.lm.reset(a,o),i.activeId="csm",i.docked=!0,i.lmAlive=!0,i.csm.attachedMass=i.lm.ownMass,i.perturbed()};n(0);const s=_u(gi(i.ship,i.primary,i.met),Ks(i.ship),i.met+300);return s&&n(e*(s.tig-(oh+Iv))),i.snapshot()}function Lv(i,t,e,n=1/20,s=4e5){const r=new Mu(i,t,e);r.toggleAuto();for(let a=0;a<s&&r.status==="flying";a++){const o=r.nextEvent;o!==null&&t.met<o-.5&&!t.ship.firing&&(t.warpUntil=o,t.warp=1e9),r.preStep(n),t.step(n),r.postStep(),t.events.length=0}return r}class Dv{constructor(){F(this,"starts",[]);F(this,"sim",new yl)}start(t){for(this.starts.length||this.starts.push(Tu());this.starts.length<=t;){const e=this.starts.length-1,n=Lv(qe[e],this.sim,this.starts[e]);if(n.status!=="complete")throw new Error(`nominal ${qe[e].id} failed: ${n.failure}`);this.starts.push(this.sim.snapshot())}return this.starts[t]}}const Uv={Period:"warp-up",Comma:"warp-down",KeyG:"warp-next",KeyZ:"throttle-full",KeyX:"throttle-cut",KeyF:"hold",KeyT:"sas",KeyB:"auto",KeyM:"map",Tab:"focus",KeyH:"help",Enter:"enter",NumpadEnter:"enter",KeyR:"restart",KeyC:"continue",Escape:"menu",Backspace:"replan",ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right"};class Nv{constructor(){F(this,"held",new Set);F(this,"queue",[]);F(this,"onFirstKey",null);window.addEventListener("keydown",t=>{var n;(n=this.onFirstKey)==null||n.call(this),(t.code==="Tab"||t.code==="Space"||t.code.startsWith("Arrow")||t.code==="Backspace")&&t.preventDefault(),this.held.add(t.code);const e=Uv[t.code];e&&!t.repeat&&this.queue.push(e)}),window.addEventListener("keyup",t=>this.held.delete(t.code)),window.addEventListener("blur",()=>this.held.clear())}drain(){const t=this.queue;return this.queue=[],t}axis(t,e){return(this.held.has(e)?1:0)-(this.held.has(t)?1:0)}get rotation(){return{pitch:this.axis("KeyS","KeyW"),yaw:this.axis("KeyD","KeyA"),roll:this.axis("KeyE","KeyQ")}}get translation(){return{x:this.axis("KeyJ","KeyL"),y:this.axis("KeyO","KeyU"),z:this.axis("KeyK","KeyI")}}get throttleRate(){const t=this.held.has("ShiftLeft")||this.held.has("ShiftRight"),e=this.held.has("ControlLeft")||this.held.has("ControlRight");return(t?1:0)-(e?1:0)}get manual(){const t=this.rotation,e=this.translation;return t.pitch!==0||t.yaw!==0||t.roll!==0||e.x!==0||e.y!==0||e.z!==0||this.throttleRate!==0}get steering(){const t=this.rotation;return t.pitch!==0||t.yaw!==0||t.roll!==0}}const Ov=15,Fv=5e7;class Bv{constructor(t){F(this,"mode","chase");F(this,"focus","auto");F(this,"mapZoom",1);F(this,"az",.55);F(this,"el",.28);F(this,"dist",90);F(this,"center",new A);F(this,"half",20);F(this,"dragging",!1);F(this,"prox",!1);this.stage=t;const e=t.canvas;e.addEventListener("pointerdown",n=>{this.mode==="chase"&&n.button===0&&(this.dragging=!0,e.setPointerCapture(n.pointerId))}),e.addEventListener("pointerup",()=>this.dragging=!1),e.addEventListener("pointermove",n=>{this.dragging&&(this.az-=n.movementX*.006,this.el=Math.min(1.45,Math.max(-1.3,this.el+n.movementY*.006)))}),e.addEventListener("wheel",n=>{const s=Math.exp(Math.sign(n.deltaY)*.18);this.mode==="chase"?this.dist=Math.min(Fv,Math.max(Ov,this.dist*s)):this.mapZoom=Math.min(40,Math.max(.02,this.mapZoom*s)),n.preventDefault()},{passive:!1})}setMode(t){this.mode=t,this.stage.active=t==="chase"?this.stage.chase:this.stage.map}resetChase(t=90){this.az=.55,this.el=.28,this.dist=t}updateChase(t,e){const n=t.ship,s=n.position.clone().normalize(),r=t.relative(),a=!!r&&r.range<3e3;a&&!this.prox&&(this.az=.08,this.dist=Math.min(this.dist,50)),this.prox=a;let o=a?r.pos.clone():n.velocity.clone().addScaledVector(s,-n.velocity.dot(s));o.lengthSq()<1e-4&&(o=new A(0,1,0).cross(s)),o.normalize(),a&&s.addScaledVector(o,-s.dot(o)).normalize();const l=a?Math.min(this.el,.12):this.el,c=new A().crossVectors(o,s),h=o.clone().multiplyScalar(-Math.cos(this.az)).addScaledVector(c,Math.sin(this.az)).multiplyScalar(Math.cos(l)).addScaledVector(s,Math.sin(l)).multiplyScalar(this.dist*Rt),u=this.stage.chase;u.position.copy(e).add(h),u.up.copy(s),u.lookAt(e)}updateMap(t,e,n){var y;const s=t.met,r=Bt.positionAt(s).multiplyScalar(Rt),a=t.absolutePosition().multiplyScalar(Rt),o=e.flatMap(E=>(E==null?void 0:E.slice(0,2))??[]),l=t.primary===Bt,c=o.some(E=>E.primary!==t.primary),h=o.find(E=>E.primary===Bt&&E.t0>s),u=window.innerWidth/window.innerHeight;let d;l?d=(y=e[1])!=null&&y.some(E=>E.primary!==Bt)?"system":"moon":d=c||t.orbit.apoapsis>1e8?"system":"earth";const f=this.focus==="auto"?d:this.focus;let g,_;if(f==="system"){const E=[new A,r,a];h&&E.push(Bt.positionAt(h.t0).multiplyScalar(Rt));const M=E.reduce((w,R)=>w.min(R),E[0].clone()),I=E.reduce((w,R)=>w.max(R),E[0].clone());g=M.clone().add(I).multiplyScalar(.5),_=Math.max((I.z-M.z)/2,(I.x-M.x)/2/u)*1.25+30}else if(f==="moon"){g=r;const E=t.orbit,M=l?E.closed?E.apoapsis:t.ship.position.length():ue.radius*3;_=Math.max(ue.radius*1.8,Math.min(ue.soiRadius,M)*1.3)*Rt}else{g=new A;const E=l?null:t.orbit;_=Math.max(12,(E&&E.closed&&E.apoapsis<1e8?E.apoapsis:8e6)*1.35*Rt)}_*=this.mapZoom*1.08,g=g.clone().add(new A(0,0,_*.16));const m=1-Math.exp(-n*5);this.center.distanceTo(g)>this.half*3||Math.abs(Math.log(_/this.half))>3?(this.center.copy(g),this.half=_):(this.center.lerp(g,m),this.half+=(_-this.half)*m);const p=this.stage.map;p.position.set(this.center.x,this.center.y+5e3,this.center.z),p.up.set(0,0,-1),p.lookAt(this.center),this.stage.setMapHalfHeight(this.half)}}const lh=new v0;function zv(i,t,e,n,s){lh.setFromCamera(new Vt(t/window.innerWidth*2-1,-(e/window.innerHeight)*2+1),i);const r=lh.ray.intersectSphere(new Gi(n,s),new A);return r?r.sub(n):null}function Hv(){const i=(1/Rt).toFixed(1),t=(e,n,s)=>{if(!Ct[e].includes(n))throw new Error(`log depth: ${e} changed upstream`);Ct[e]=Ct[e].replace(n,s)};t("logdepthbuf_vertex","vFragDepth = 1.0 + gl_Position.w;",`vFragDepth = 1.0 + ${i} * gl_Position.w;`),t("logdepthbuf_fragment","log2( vFragDepth ) * logDepthBufFC * 0.5",`log2( vFragDepth ) / log2( ${i} * ( exp2( 2.0 / logDepthBufFC ) - 1.0 ) + 1.0 )`)}nt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Vt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Ge.line={uniforms:dl.merge([nt.common,nt.fog,nt.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Au extends Zn{static get type(){return"LineMaterial"}constructor(t){super({uniforms:dl.clone(Ge.line.uniforms),vertexShader:Ge.line.vertexShader,fragmentShader:Ge.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const ch=new vi,Br=new A;class Tl extends g0{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new _e(t,3)),this.setAttribute("uv",new _e(e,2))}applyMatrix4(t){const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new Ys(e,6,1);return this.setAttribute("instanceStart",new ln(n,3,0)),this.setAttribute("instanceEnd",new ln(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new Ys(e,6,1);return this.setAttribute("instanceColorStart",new ln(n,3,0)),this.setAttribute("instanceColorEnd",new ln(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new m0(t.geometry)),this}fromLineSegments(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),ch.setFromBufferAttribute(e),this.boundingBox.union(ch))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Br.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Br)),Br.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Br));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}const Ka=new se,hh=new A,uh=new A,Se=new se,Ee=new se,Tn=new se,Za=new A,ja=new re,Te=new M0,dh=new A,zr=new vi,Hr=new Gi,An=new se;let Pn,Fi;function fh(i,t,e){return An.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),An.multiplyScalar(1/An.w),An.x=Fi/e.width,An.y=Fi/e.height,An.applyMatrix4(i.projectionMatrixInverse),An.multiplyScalar(1/An.w),Math.abs(Math.max(An.x,An.y))}function Gv(i,t){const e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,l=a;o<l;o++){Te.start.fromBufferAttribute(s,o),Te.end.fromBufferAttribute(r,o),Te.applyMatrix4(e);const c=new A,h=new A;Pn.distanceSqToSegment(Te.start,Te.end,h,c),h.distanceTo(c)<Fi*.5&&t.push({point:h,pointOnLine:c,distance:Pn.origin.distanceTo(h),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function Vv(i,t,e){const n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),u=-t.near;Pn.at(1,Tn),Tn.w=1,Tn.applyMatrix4(t.matrixWorldInverse),Tn.applyMatrix4(n),Tn.multiplyScalar(1/Tn.w),Tn.x*=r.x/2,Tn.y*=r.y/2,Tn.z=0,Za.copy(Tn),ja.multiplyMatrices(t.matrixWorldInverse,a);for(let d=0,f=h;d<f;d++){if(Se.fromBufferAttribute(l,d),Ee.fromBufferAttribute(c,d),Se.w=1,Ee.w=1,Se.applyMatrix4(ja),Ee.applyMatrix4(ja),Se.z>u&&Ee.z>u)continue;if(Se.z>u){const E=Se.z-Ee.z,M=(Se.z-u)/E;Se.lerp(Ee,M)}else if(Ee.z>u){const E=Ee.z-Se.z,M=(Ee.z-u)/E;Ee.lerp(Se,M)}Se.applyMatrix4(n),Ee.applyMatrix4(n),Se.multiplyScalar(1/Se.w),Ee.multiplyScalar(1/Ee.w),Se.x*=r.x/2,Se.y*=r.y/2,Ee.x*=r.x/2,Ee.y*=r.y/2,Te.start.copy(Se),Te.start.z=0,Te.end.copy(Ee),Te.end.z=0;const _=Te.closestPointToPointParameter(Za,!0);Te.at(_,dh);const m=jd.lerp(Se.z,Ee.z,_),p=m>=-1&&m<=1,y=Za.distanceTo(dh)<Fi*.5;if(p&&y){Te.start.fromBufferAttribute(l,d),Te.end.fromBufferAttribute(c,d),Te.start.applyMatrix4(a),Te.end.applyMatrix4(a);const E=new A,M=new A;Pn.distanceSqToSegment(Te.start,Te.end,M,E),e.push({point:M,pointOnLine:E,distance:Pn.origin.distanceTo(M),object:i,face:null,faceIndex:d,uv:null,uv1:null})}}}class Al extends Le{constructor(t=new Tl,e=new Au({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,l=e.count;a<l;a++,o+=2)hh.fromBufferAttribute(e,a),uh.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+hh.distanceTo(uh);const r=new Ys(s,2,1);return t.setAttribute("instanceDistanceStart",new ln(r,1,0)),t.setAttribute("instanceDistanceEnd",new ln(r,1,1)),this}raycast(t,e){const n=this.material.worldUnits,s=t.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Pn=t.ray;const a=this.matrixWorld,o=this.geometry,l=this.material;Fi=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),Hr.copy(o.boundingSphere).applyMatrix4(a);let c;if(n)c=Fi*.5;else{const u=Math.max(s.near,Hr.distanceToPoint(Pn.origin));c=fh(s,u,l.resolution)}if(Hr.radius+=c,Pn.intersectsSphere(Hr)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),zr.copy(o.boundingBox).applyMatrix4(a);let h;if(n)h=Fi*.5;else{const u=Math.max(s.near,zr.distanceToPoint(Pn.origin));h=fh(s,u,l.resolution)}zr.expandByScalar(h),Pn.intersectsBox(zr)!==!1&&(n?Gv(this,e):Vv(this,s,e))}onBeforeRender(t){const e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Ka),this.material.uniforms.resolution.value.set(Ka.z,Ka.w))}}const bu=new Vt(1,1);let jo=1;const wu=new Set;function kv(i,t,e){bu.set(i*e,t*e),jo=e;for(const n of wu)n.linewidth=n.cssWidth*jo}const Ru="2.0",Wv="7e-6",Xv="1.5",qv="5.0";function ph(i,t,e){if(!i.includes(t))throw new Error(`lines: LineMaterial shader changed upstream (${t.slice(0,40)}…)`);return i.replace(t,e)}const Yv=[["uniform vec2 resolution;",`uniform vec2 resolution;
    #ifdef USE_FEATURE_FADE
      attribute float instanceFeature;
      varying float vFade;
    #endif`],["vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );",`vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );
    #ifdef USE_FEATURE_FADE
    {
      // Screen size of this segment's feature, foreshortened by the sphere it lies on.
      bool atStart = position.y < 0.5;
      vec3 p = atStart ? start.xyz : end.xyz;
      vec3 n = normalize( ( modelViewMatrix * vec4( atStart ? instanceStart : instanceEnd, 0.0 ) ).xyz );
      bool persp = projectionMatrix[ 2 ][ 3 ] == - 1.0;
      vec3 view = persp ? normalize( p ) : vec3( 0.0, 0.0, - 1.0 );
      #ifdef FEATURE_FADE_SOLID
        float foreshortening = 1.0;
      #else
        float foreshortening = abs( dot( view, n ) );
      #endif
      float size = instanceFeature * foreshortening * projectionMatrix[ 1 ][ 1 ] * 0.5 * resolution.y;
      vFade = smoothstep( ${Xv}, ${qv}, persp ? size / length( p ) : size );
    }
    #endif`],["offset *= linewidth;",`offset *= linewidth + ${Ru};`]],$v=[["uniform float linewidth;",`uniform float linewidth;
    #ifdef USE_FEATURE_FADE
      varying float vFade;
    #endif`],["if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX",""],["vec4 diffuseColor = vec4( diffuse, alpha );",`
    // Exact coverage of a box-filtered stroke: distance to the centerline in device px.
    float cap = max( abs( vUv.y ) - 1.0, 0.0 );
    float r = length( vec2( vUv.x, cap ) ) * ( linewidth + ${Ru} ) * 0.5;
    float coverage = clamp( 0.5 * linewidth + 0.5 - r, 0.0, 1.0 );
    #ifdef USE_DASH
      float u = mod( vLineDistance + dashOffset, dashSize + gapSize );
      float px = max( fwidth( vLineDistance ), 1e-9 ); // line distance per device px
      coverage *= clamp( u / px + 0.5, 0.0, 1.0 ) * clamp( ( dashSize - u ) / px + 0.5, 0.0, 1.0 );
    #endif
    #ifdef USE_FEATURE_FADE
      coverage *= vFade;
    #endif
    vec4 diffuseColor = vec4( diffuse, alpha );`],["#include <logdepthbuf_fragment>",`#include <logdepthbuf_fragment>
    #ifdef USE_LOGDEPTHBUF
      if ( vIsPerspective != 0.0 ) gl_FragDepth -= ${Wv};
    #endif`],["gl_FragColor = vec4( diffuseColor.rgb, alpha );","gl_FragColor = vec4( diffuseColor.rgb * coverage, coverage );"],["#include <premultiplied_alpha_fragment>",`#include <premultiplied_alpha_fragment>
	gl_FragColor.rgb *= opacity;`]];class Kv extends Au{constructor({color:e,width:n=1.25,opacity:s=1,dash:r,fade:a=!1}){super({color:e.getHex(),linewidth:n*jo,worldUnits:!1,dashed:!!r});F(this,"cssWidth");this.cssWidth=n,this.opacity=s,r&&([this.dashSize,this.gapSize]=r),a&&(this.defines.USE_FEATURE_FADE=""),a==="solid"&&(this.defines.FEATURE_FADE_SOLID=""),this.uniforms.resolution.value=bu,this.transparent=!0,this.depthWrite=!1,this.blending=bh,this.blendEquation=wh,this.onBeforeCompile=o=>{o.vertexShader=Yv.reduce((l,[c,h])=>ph(l,c,h),o.vertexShader),o.fragmentShader=$v.reduce((l,[c,h])=>ph(l,c,h),o.fragmentShader)},this.customProgramCacheKey=()=>"vector-line",wu.add(this)}get fades(){return"USE_FEATURE_FADE"in this.defines}}function Oe(i){return new Kv(i)}function Qn(i,t,e){return new Al(Cu(i,t,e),t)}function Cu(i,t,e){const n=new Tl().setPositions(i instanceof Float32Array?i:Float32Array.from(i));if(t.fades){const s=Math.floor(i.length/6);if(!e||e.length!==s)throw new Error("lines: a fading stroke needs one feature size per segment");n.setAttribute("instanceFeature",new f0(Float32Array.from(e),1))}return t.dashed&&new Al(n,t).computeLineDistances(),n}function Pu(i,t){return Qn(i.flatMap(e=>[e.x,e.y,e.z]),t)}function bl(i,t,e=!1){const n=[],s=e?i.length:i.length-1;for(let r=0;r<s;r++){const a=i[r],o=i[(r+1)%i.length];n.push(a.x,a.y,a.z,o.x,o.y,o.z)}return Qn(n,t)}function Zv(i,t,e=12){return Qn(new ru(i,e).getAttribute("position").array,t)}function jv(i){return i.isLineSegments2===!0}class Iu{constructor(t,e){F(this,"object");F(this,"geometry",new Tl);F(this,"ends");F(this,"distances",null);F(this,"scratch",new Float32Array(0));this.capacity=e,this.ends=new Ys(new Float32Array(e*6),6,1),this.geometry.setAttribute("instanceStart",new ln(this.ends,3,0)),this.geometry.setAttribute("instanceEnd",new ln(this.ends,3,3)),t.dashed&&(this.distances=new Ys(new Float32Array(e*2),2,1),this.geometry.setAttribute("instanceDistanceStart",new ln(this.distances,1,0)),this.geometry.setAttribute("instanceDistanceEnd",new ln(this.distances,1,1))),this.geometry.instanceCount=0,this.object=new Al(this.geometry,t),this.object.frustumCulled=!1}setSegments(t,e=Math.floor(t.length/6)){const n=Math.min(e,this.capacity),s=this.ends.array;for(let r=0;r<n*6;r++)s[r]=t[r];if(this.ends.needsUpdate=!0,this.distances){const r=this.distances.array;let a=0;for(let o=0;o<n;o++){const l=o*6;r[o*2]=a,a+=Math.hypot(s[l+3]-s[l],s[l+4]-s[l+1],s[l+5]-s[l+2]),r[o*2+1]=a}this.distances.needsUpdate=!0}this.geometry.instanceCount=n}setPolyline(t,e=Math.floor(t.length/3)){const n=Math.max(0,Math.min(e-1,this.capacity)),s=this.scratch.length>=n*6?this.scratch:this.scratch=new Float32Array(n*6);for(let r=0;r<n;r++)for(let a=0;a<3;a++)s[r*6+a]=t[r*3+a],s[r*6+3+a]=t[(r+1)*3+a];this.setSegments(s,n)}}const wl=new Ut("#d9e4df"),Lu=new Ut("#6f817a"),Rl=new Ut("#24302c"),Du=new Ut("#59c486"),ir=new Ut("#9fb0a9"),Jv=new Ut("#7fdca0"),Cl=new Ut("#ffb547"),Qv=new Ut("#6fd3ff"),tM=new Ut("#ff5a4f"),bs=new Ut("#030506");class eM{constructor(t){F(this,"scene",new u0);F(this,"renderer");F(this,"chase");F(this,"map");F(this,"active");F(this,"mapHalfHeight",20);Hv(),this.renderer=new h0({antialias:!0,logarithmicDepthBuffer:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(bs),t.appendChild(this.renderer.domElement),this.chase=new an(50,1,1e-7,1e7),this.map=new Jh(-1,1,1,-1,.001,1e7),this.active=this.chase,this.resize(),window.addEventListener("resize",()=>this.resize())}get canvas(){return this.renderer.domElement}setMapHalfHeight(t){this.mapHalfHeight=t,this.updateMap()}resize(){const t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e),kv(t,e,this.renderer.getPixelRatio()),this.chase.aspect=t/e,this.chase.updateProjectionMatrix(),this.updateMap()}updateMap(){const t=window.innerWidth/window.innerHeight,e=this.mapHalfHeight;Object.assign(this.map,{top:e,bottom:-e,left:-e*t,right:e*t}),this.map.updateProjectionMatrix()}render(){this.renderer.render(this.scene,this.active)}}function nM(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new we;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=mh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<a[h].length;++_)f.push(a[h][_][d]);const g=mh(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function mh(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new Ue(a,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){const _=h.getComponent(d,g);o.setComponent(d+u,g,_)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}const iM=new Mi({color:bs,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),sM=Oe({color:ir,width:1.1,fade:"solid"}),rM=Oe({color:ir,width:1.25}),aM=Oe({color:ir,width:1});class oM{constructor(t){F(this,"group",new me);this.field=t;const e=this.group;Uu(e,t.center,t.east,t.radius),e.scale.setScalar(Rt);const n=[],s=[],r=[];t.boulders.forEach((a,o)=>{const l=cM(a.r,o);l.translate(a.e,a.r*.3,-a.n),n.push(l);const c=new ru(l,20).getAttribute("position").array;for(let h=0;h<c.length;h++)s.push(c[h]);for(let h=0;h<c.length/6;h++)r.push(a.r*Rt)}),e.add(new Le(nM(n),iM)),e.add(Qn(s,sM,r));for(const[a,o]of[[t.craterRadius,rM],[t.craterRadius*.6,aM]]){const l=[];for(let c=0;c<96;c++){const h=c/96*Math.PI*2,u=1+.04*Math.sin(h*5+a)+.02*Math.sin(h*13);l.push(new A(Math.cos(h)*a*u,.6,Math.sin(h)*a*u))}e.add(bl(l,o,!0))}}dispose(){this.group.traverse(t=>{var e;return(e=t.geometry)==null?void 0:e.dispose()})}}class lM{constructor(){F(this,"group",new me);F(this,"clear",Oe({color:Cl,width:1.5}));F(this,"danger",Oe({color:tM,width:1.5}));F(this,"marks",[]);const t=[];for(let n=0;n<48;n++){const s=n/48*Math.PI*2;t.push(new A(Math.cos(s),0,Math.sin(s)))}const e=[1.4,0,0,2.4,0,0,-1.4,0,0,-2.4,0,0,0,0,1.4,0,0,2.4,0,0,-1.4,0,0,-2.4];this.marks.push(bl(t,this.clear,!0),Qn(e,this.clear)),this.group.add(...this.marks),this.group.visible=!1}update(t,e,n,s){if(this.group.visible=!!t,!t)return;const r=new A(0,1,0).cross(t).normalize();Uu(this.group,t,r,n+.5),this.group.scale.setScalar(Math.max(4,s*.012)*Rt);for(const a of this.marks)a.material=e?this.danger:this.clear}}function Uu(i,t,e,n){const s=t.clone().normalize(),r=new A().crossVectors(e,s);i.quaternion.setFromRotationMatrix(new re().makeBasis(e,s,r)),i.position.copy(s).multiplyScalar(n*Rt)}function cM(i,t){const e=new ml(i,0),n=e.getAttribute("position");for(let s=0;s<n.count;s++){const r=(n.getX(s)*12.9898+n.getY(s)*78.233+n.getZ(s)*37.719)/i,a=Math.sin(r+(t+1)*4.1414)*43758.5453,o=.75+.5*(a-Math.floor(a));n.setXYZ(s,n.getX(s)*o,n.getY(s)*o*.65,n.getZ(s)*o)}return e}const Jo=Sn.radius*Rt;function hM(){const i=new me;return i.add(new Le(new la(Jo*.998,96,64),new Mi({color:bs}))),i.add(Nu(Jo,15,Oe({color:Rl,width:1,fade:!0}),7.5)),uM(i),i}function Nu(i,t,e,n=0){const s=[],r=l=>s.push(l.x,l.y,l.z);for(let l=-90+t-n;l<90;l+=t)for(let c=0;c<128;c++)r(Fs(i,l,c/128*360)),r(Fs(i,l,(c+1)/128*360));for(let l=0;l<360;l+=t)for(let c=0;c<128/2;c++)r(Fs(i,-90+c/(128/2)*180,l)),r(Fs(i,-90+(c+1)/(128/2)*180,l));const o=i*t*(Math.PI/180);return Qn(s,e,new Array(s.length/6).fill(o))}function Fs(i,t,e){const n=t*Math.PI/180,s=e*Math.PI/180;return new A(i*Math.cos(n)*Math.cos(s),i*Math.sin(n),-i*Math.cos(n)*Math.sin(s))}function uM(i){fetch("./data/ne_50m_coastline.json").then(t=>t.json()).then(t=>{const e=[];for(const{geometry:n}of t.features){const s=n.type==="LineString"?[n.coordinates]:n.coordinates;for(const r of s)for(let a=1;a<r.length;a++)for(const[o,l]of[r[a-1],r[a]]){const c=Fs(Jo*1.0006,l,o);e.push(c.x,c.y,c.z)}}i.add(Qn(e,Oe({color:Du,width:1.25})))}).catch(()=>{})}const Ds=ue.radius*Rt;function dM(){const i=[];let t=7;const e=()=>(t=t*16807%2147483647)/2147483647;for(let n=0;n<90;n++){const s=Math.asin(e()*2-1)*(180/Math.PI),r=e()*360,a=.015+.09*e()**3;i.push([s,r,a])}return i}function fM(){const i=new me;i.add(new Le(new la(Ds*.998,96,64),new Mi({color:bs}))),i.add(Nu(Ds*1.0002,30,Oe({color:Rl,width:1,fade:!0}),15));const t=[],e=[];for(const[n,s,r]of dM()){const a=t.length;pM(t,Ds*1.0004,n,s,Ds*r);for(let o=a;o<t.length;o+=6)e.push(2*Ds*r)}return i.add(Qn(t,Oe({color:ir,width:1.25,opacity:.75,fade:!0}),e)),i}function pM(i,t,e,n,s,r=28){const a=e*Math.PI/180,o=n*Math.PI/180,l=new A(Math.cos(a)*Math.cos(o),Math.sin(a),-Math.cos(a)*Math.sin(o)),c=new A(-Math.sin(o),0,-Math.cos(o)),h=new A().crossVectors(l,c).normalize().negate(),u=d=>{const f=d/r*Math.PI*2;return l.clone().multiplyScalar(t).addScaledVector(c,s*Math.cos(f)).addScaledVector(h,s*Math.sin(f)).setLength(t)};for(let d=0;d<r;d++){const f=u(d),g=u(d+1);i.push(f.x,f.y,f.z,g.x,g.y,g.z)}}const mM=new Mi({color:bs,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1});function Gn(i,t){const e=new me;return e.add(new Le(i,mM),Zv(i,t)),e}const Pl=()=>Oe({color:wl,width:1.5}),Il=()=>Oe({color:Lu,width:1.25});function li(i,t){return i.rotateX(Math.PI/2),i.translate(0,0,t),i}function Ou(i,t,e){const n=new oa(t,e,12,1,!0);n.rotateX(-Math.PI/2);const s=new Le(n,new Mi({color:new Ut(i),transparent:!0,opacity:.2,blending:Zr,depthWrite:!1}));return s.visible=!1,s}function gM(){const i=Pl(),t=Il(),e=new me,n=Gn(li(new oa(1.95,3.2,16),3.55),i),s=new me;s.add(Gn(li(new Cn(1.95,1.95,4,16),0),i)),s.add(Gn(li(new Cn(.5,1.2,2.8,16,1,!0),-3.4),t));const r=new me;r.add(Gn(li(new Cn(1.95,3.3,8.5,16,1,!0),-6.25),t)),r.add(Gn(li(new Cn(3.3,3.3,17.8,16),-19.4),i)),r.add(Gn(li(new Cn(.9,1.6,3.2,16,1,!0),-29.9),t)),e.add(n,s,r);const a=Ou("#ffe7b0",1,9),o=gh(2,3.5,22,3),l=gh(3,12,40,9);e.add(a,o,l);let c=0;const h=wl.clone();return{group:e,setStage(u){c=u,r.visible=u<1,s.visible=u<2},setPlume(u,d){if(a.visible=u>0,!u)return;const f=.9+.1*Math.sin(d*53)*Math.sin(d*31),g=c===0?1.7:1;a.scale.set(g,g,(.35+.65*u)*f*g),a.position.z=(c===0?-31.5:-4.8)-4.5*a.scale.z},setHeat(u){i.color.copy(h).lerp(Cl,Math.min(1,u))},setChutes(u,d){o.visible=u==="drogue",l.visible=u==="mains",(u==="mains"?l:o).scale.setScalar(.25+.75*Math.min(1,d))}}}function gh(i,t,e,n){const s=[],r=new A(0,0,5.2);for(let o=0;o<i;o++){const l=o/i*Math.PI*2,c=new A(Math.cos(l)*n,Math.sin(l)*n,r.z+e),h=c.clone().add(new A(0,0,t*.55)),u=12;for(let d=0;d<u;d++){const f=d/u*Math.PI*2,g=(d+1)/u*Math.PI*2,_=c.clone().add(new A(Math.cos(f)*t,Math.sin(f)*t,0)),m=c.clone().add(new A(Math.cos(g)*t,Math.sin(g)*t,0));s.push(_,m,_,h),d%3===0&&s.push(_,r)}}const a=new me;return a.add(Pu(s,Oe({color:wl,width:1.25,opacity:.8}))),a.visible=!1,a}function _M(){const i=Pl(),t=Il(),e=new me,n=new me,s=Gn(new Ss(3.8,3.2,2.6),i);s.position.z=1.9,n.add(s,Gn(li(new Cn(.5,.5,.8,10),3.6),t));const r=Bu(i,t),a=Ou("#fff0c8",.7,5),o=new me;o.position.z=Fu,o.add(n,r,a),e.add(o);let l=!1;return{group:e,setStage(c){l=c>0,r.visible=!l},setPlume(c,h){if(a.visible=c>0,!c)return;const u=.9+.1*Math.sin(h*47)*Math.sin(h*29);a.scale.set(1,1,(.35+.65*c)*u),a.position.z=(l?.5:-1.8)-2.5*a.scale.z}}}const Fu=3;function vM(){const i=new me,t=Bu();return t.position.z=Fu,i.add(t),i}function Bu(i=Pl(),t=Il()){const e=new me,n=Gn(li(new Cn(2.1,2.1,1.7,8),-.3),i);e.add(n);const s=[];for(let r=0;r<4;r++){const a=r/4*Math.PI*2+Math.PI/4,o=Math.cos(a),l=Math.sin(a),c=new A(o*2,l*2,.2),h=new A(o*4.2,l*4.2,-3),u=new A(o*2.1,l*2.1,-1.1);s.push(c,h,u,h),s.push(h.clone().add(new A(-l*.45,o*.45,0)),h.clone().add(new A(l*.45,-o*.45,0)))}return e.add(Pu(s,t)),e}function MM(i=1e5){const t=new me;return fetch("./data/star_catalog.json").then(e=>e.json()).then(e=>{t.add(_h(e.filter(([,,n])=>n<=2.5),i,2.2)),t.add(_h(e.filter(([,,n])=>n>2.5),i,1.2))}).catch(()=>{}),t}function _h(i,t,e){const n=new Float32Array(i.length*3),s=new Float32Array(i.length*3),r=new Ut;i.forEach(([o,l,c,h],u)=>{const d=o*Math.PI/180,f=l*Math.PI/180;n.set([t*Math.cos(f)*Math.cos(d),t*Math.sin(f),-t*Math.cos(f)*Math.sin(d)],u*3);const g=Math.min(.85,Math.max(.12,10**(-.3*c)));r.set(h<0?"#c3d2ff":h<.5?"#eef2ff":h<1.1?"#fff4e2":"#ffdcb8").multiplyScalar(g),s.set([r.r,r.g,r.b],u*3)});const a=new we;return a.setAttribute("position",new Ue(n,3)),a.setAttribute("color",new Ue(s,3)),new p0(a,xM(e))}function xM(i){const t=new su({size:i,sizeAttenuation:!1,vertexColors:!0,blending:Zr,depthWrite:!1}),e=(n,s,r)=>{if(!n.includes(s))throw new Error("starfield: points shader changed upstream");return n.replace(s,r)};return t.onBeforeCompile=n=>{n.vertexShader=e(n.vertexShader,"gl_PointSize = size;",`gl_PointSize = size + 2.0;
	vDiameter = size;`),n.vertexShader=e(n.vertexShader,"uniform float scale;",`uniform float scale;
varying float vDiameter;`),n.fragmentShader=e(n.fragmentShader,"uniform float opacity;",`uniform float opacity;
varying float vDiameter;`),n.fragmentShader=e(n.fragmentShader,"outgoingLight = diffuseColor.rgb;",`float r = length( gl_PointCoord - 0.5 ) * ( vDiameter + 2.0 ); // device px from the center
      outgoingLight = diffuseColor.rgb * clamp( 0.5 * vDiameter + 0.5 - r, 0.0, 1.0 );`)},t.customProgramCacheKey=()=>"star-disc",t}const Ci=5e3,vh=32e4,SM=1e3,EM=1e4;class Mh{constructor(t,e,n){F(this,"group",new me);F(this,"lines");F(this,"material");F(this,"ground");F(this,"key","");this.radius=t,this.cratered=n,this.ground=new Le(yM(t-.5,vh),new Mi({color:bs})),this.material=Oe({color:e,width:1,opacity:.8,fade:!0}),this.lines=Qn([],this.material,[]),this.group.add(this.ground,this.lines),this.group.visible=!1}update(t){const e=Ci/this.radius,n=Math.round(Math.asin(Math.max(-1,Math.min(1,t.y)))/e)*e,s=Math.round(Math.atan2(-t.z,t.x)/e)*e,r=`${n.toFixed(6)},${s.toFixed(6)}`;if(r===this.key)return;this.key=r;const a=new A(Math.cos(n)*Math.cos(s),Math.sin(n),-Math.cos(n)*Math.sin(s)),o=new A(-Math.sin(s),0,-Math.cos(s)),l=new A().crossVectors(o,a);this.group.quaternion.setFromRotationMatrix(new re().makeBasis(o,a,l)),this.lines.geometry.dispose(),this.lines.geometry=this.buildLines(n,s)}buildLines(t,e){const n=this.radius,s=[],r=[],a=(h,u)=>new A(h,n,u).setLength(n+.5).multiplyScalar(Rt),o=(h,u,d,f,g,_)=>{for(let m=0;m<g;m++){const p=a(h+(d-h)*m/g,u+(f-u)*m/g),y=a(h+(d-h)*(m+1)/g,u+(f-u)*(m+1)/g);s.push(p.x,p.y,p.z,y.x,y.y,y.z),r.push(_*Rt)}},l=(h,u,d)=>{for(let f=-u;f<=u;f+=h)o(f,-u,f,u,d,h),o(-u,f,u,f,d,h)};if(l(100,Ci/2+1500,(Ci/2+1500)/100),l(SM,12e3,24),l(EM,vh*.7,64),this.cratered){const h=Math.round(t*n/Ci),u=Math.round(e*n/Ci);for(let _=-16;_<=16;_++)for(let m=-16;m<=16;m++){let p=Ja(h+_,u+m);const y=p%3;for(let E=0;E<y;E++){p=Ja(p,E+17);const M=(m+p%1e3/1e3-.5)*Ci,I=-(_+(p>>10)%1e3/1e3-.5)*Ci,w=60+1400*((p>>20)%1e3/1e3)**3;c(M,I,w)}}const d=250,f=Math.round(t*n/d),g=Math.round(e*n/d);for(let _=-10;_<=10;_++)for(let m=-10;m<=10;m++){const p=Ja(f+_+7919,g+m+104729);if(p%3!==0)continue;const y=(m+p%997/997-.5)*d+(g*d-e*n),E=-((_+(p>>10)%997/997-.5)*d+(f*d-t*n));c(y,E,4+40*((p>>20)%997/997)**2)}}return Cu(s,this.material,r);function c(h,u,d){for(let g=0;g<16;g++){const _=g/16*Math.PI*2,m=(g+1)/16*Math.PI*2,p=a(h+d*Math.cos(_),u+d*Math.sin(_)),y=a(h+d*Math.cos(m),u+d*Math.sin(m));s.push(p.x,p.y,p.z,y.x,y.y,y.z),r.push(2*d*Rt)}}}}function yM(i,t){const s=t/i,r=[],a=[];for(let l=0;l<=48;l++){const c=s*(l/48)**2;for(let h=0;h<=96;h++){const u=h/96*Math.PI*2,d=new A(Math.sin(c)*Math.cos(u),Math.cos(c),Math.sin(c)*Math.sin(u)).multiplyScalar(i*Rt);r.push(d.x,d.y,d.z)}}for(let l=0;l<48;l++)for(let c=0;c<96;c++){const h=l*97+c,u=h+96+1;a.push(h,h+1,u,u,h+1,u+1)}const o=new we;return o.setAttribute("position",new Ue(new Float32Array(r),3)),o.setIndex(a),o}function Ja(i,t){let e=(Math.imul(i|0,668265261)^Math.imul(t|0,374761393))>>>0;return e=Math.imul(e^e>>>15,739982445)>>>0,(e^e>>>12)>>>0}const ks=360,TM=4,Qa=[9,6];class to{constructor(t,e={}){F(this,"group",new me);F(this,"lines",[]);F(this,"material");F(this,"points",new Float32Array(ks*3));this.material=Oe({color:t,width:1.5,opacity:e.opacity,dash:e.dashed?Qa:void 0});for(let n=0;n<TM;n++){const s=new Iu(this.material,ks-1);this.lines.push(s),this.group.add(s.object)}}update(t,e,n,s=1){this.material.dashed&&([this.material.dashSize,this.material.gapSize]=[Qa[0]*s,Qa[1]*s]),this.lines.forEach((r,a)=>{const o=t==null?void 0:t[a];if(r.object.visible=!!o,!o)return;r.object.position.copy(Qo(o,e,n).multiplyScalar(Rt));const l=AM(o);for(let c=0;c<ks;c++)this.points[c*3]=l[c].x*Rt,this.points[c*3+1]=l[c].y*Rt,this.points[c*3+2]=l[c].z*Rt;r.setPolyline(this.points)})}set visible(t){this.group.visible=t}}function Qo(i,t,e){return i.primary.positionAt(i.primary===e?t:Math.max(t,i.t0))}function AM(i){const t=i.orbit,e=t.trueAnomalyAt(i.t0);let n;if(t.closed&&i.t1-i.t0>=t.period?n=Math.PI*2:(n=t.trueAnomalyAt(i.t1)-e,t.closed&&(n=(n%(2*Math.PI)+2*Math.PI)%(2*Math.PI))),!t.closed){const r=Math.acos(-1/t.e)-.02;n=Math.min(n,r-e)}const s=[];for(let r=0;r<ks;r++)s.push(t.stateAtTrueAnomaly(e+n*r/(ks-1)));return s}const eo=new A(0,1,0),bM=new En().setFromAxisAngle(new A(1,0,0),Math.PI),wM=12.15;class RM{constructor(t){F(this,"earth",hM());F(this,"moon",fM());F(this,"csm",gM());F(this,"lm",_M());F(this,"pad",vM());F(this,"track",new to(Jv));F(this,"plan",new to(Cl,{dashed:!0}));F(this,"partner",new to(Qv,{opacity:.55}));F(this,"moonPatch",new Mh(ue.radius,ir,!0));F(this,"earthPatch",new Mh(Sn.radius,Du,!1));F(this,"soi");F(this,"drop",new Iu(Oe({color:Lu,width:1.25}),17));F(this,"dropPoints",new Float32Array(102));F(this,"padSite",null);F(this,"boulders",null);F(this,"lpd",new lM);this.moon.add(this.moonPatch.group,this.lpd.group),this.earth.add(this.earthPatch.group);const e=[];for(let n=0;n<180;n++){const s=n/180*Math.PI*2;e.push(new A(Math.cos(s),0,Math.sin(s)).multiplyScalar(ue.soiRadius*Rt))}this.soi=bl(e,Oe({color:Rl,width:1.25}),!0);for(const n of[this.csm,this.lm])n.group.scale.setScalar(Rt);this.pad.scale.setScalar(Rt),t.add(this.earth,this.moon,this.soi,this.drop.object,this.csm.group,this.lm.group,this.pad,this.track.group,this.plan.group,this.partner.group,MM())}craftPosition(t,e){return t.absolutePosition(t[e]).multiplyScalar(Rt)}sync(t,e,n,s,r,a){var m,p,y,E,M,I;const o=t.met,l=Bt.positionAt(o).multiplyScalar(Rt);this.moon.position.copy(l),this.moon.rotation.y=Bt.spinAt(o),this.earth.rotation.y=Ve.spinAt(o);const c=[e.plan,e.current].flatMap(w=>w??[]).find(w=>w.primary===Bt&&w.primary!==t.primary);this.soi.position.copy(c?Bt.positionAt(c.t0).multiplyScalar(Rt):l),this.soi.visible=n;const h=this.craftPosition(t,"csm");this.csm.group.position.copy(h),this.csm.group.quaternion.copy(t.csm.quaternion),this.csm.setStage(t.csm.stagesDropped),this.csm.setPlume(t.csm.firing?t.csm.throttle:0,s),(p=(m=this.csm).setHeat)==null||p.call(m,t.activeId==="csm"&&t.inAtmosphere&&t.chutes==="none"?Math.min(1,t.gLoad/5):0),(E=(y=this.csm).setChutes)==null||E.call(y,t.chutes,t.chuteOpen);const u=t.lmAlive&&!(t.docked&&t.csm.stagesDropped===0);this.lm.group.visible=u,u&&(this.lm.setStage(t.lm.landedSite?0:t.lm.stagesDropped),t.docked?(this.lm.group.position.copy(h).addScaledVector(t.csm.forward,wM*Rt),this.lm.group.quaternion.copy(t.csm.quaternion).multiply(bM),this.lm.setPlume(0,s)):(this.lm.group.position.copy(this.craftPosition(t,"lm")),this.lm.group.quaternion.copy(t.lm.quaternion),this.lm.setPlume(t.lm.firing?t.lm.throttle:0,s))),t.lm.landedSite&&(this.padSite=t.lm.landedSite.clone()),t.lm.stagesDropped===0&&(this.padSite=null);const d=!!this.padSite&&t.lm.stagesDropped>0&&!t.lm.landedSite&&!n;if(this.pad.visible=d,d){const w=this.padSite.clone().applyAxisAngle(eo,Bt.spinAt(o));this.pad.position.copy(l).addScaledVector(w,ue.radius*Rt),this.pad.quaternion.setFromUnitVectors(new A(0,0,1),w)}const f=!n&&t.altitude<(t.primary===Bt?6e4:4e4),g=t.primary===Bt?this.moonPatch:this.earthPatch,_=g===this.moonPatch?this.earthPatch:this.moonPatch;if(_.group.visible=!1,g.group.visible=f,f){const w=t.ship.position.clone().normalize().applyAxisAngle(eo,-t.primary.spinAt(o));g.update(w)}for(const[w,R]of[[this.earth,f&&g===this.earthPatch],[this.moon,f&&g===this.moonPatch]])for(const P of w.children)jv(P)&&(P.visible=!R);this.syncDropLine(t,f&&t.altitude<4e3&&!t.ship.landed),this.syncSite(t,f&&g===this.moonPatch,a);for(const w of[this.track,this.plan,this.partner])w.visible=n;n&&(this.track.update(((M=e.current)==null?void 0:M.slice(0,2))??null,o,t.primary),this.plan.update(((I=e.plan)==null?void 0:I.slice(0,2))??null,o,t.primary,r),this.partner.update(e.partner,o,t.primary))}syncSite(t,e,n){var o;((o=this.boulders)==null?void 0:o.field)!==t.terrain&&(this.boulders&&(this.moon.remove(this.boulders.group),this.boulders.dispose()),this.boulders=t.terrain?new oM(t.terrain):null,this.boulders&&this.moon.add(this.boulders.group)),this.boulders&&(this.boulders.group.visible=e);const s=e&&n?n.site:null,r=t.ship.position.clone().applyAxisAngle(eo,-t.primary.spinAt(t.met)),a=s?s.clone().multiplyScalar(ue.radius).distanceTo(r):0;this.lpd.update(s,(n==null?void 0:n.hazard)??!1,ue.radius,a)}syncDropLine(t,e){if(this.drop.object.visible=e,!e)return;const n=t.ship.position.clone().normalize(),s=t.altitude;this.drop.object.position.copy(this.craftPosition(t,t.activeId));const r=this.dropPoints,a=n.clone().multiplyScalar(-s);r.set([0,0,0,a.x*Rt,a.y*Rt,a.z*Rt]);const o=new A(1,0,0).cross(n).normalize(),l=new A().crossVectors(n,o),c=4+s*.02;for(let h=0;h<16;h++){const u=h/16*Math.PI*2,d=(h+1)/16*Math.PI*2,f=a.clone().addScaledVector(o,c*Math.cos(u)).addScaledVector(l,c*Math.sin(u)).multiplyScalar(Rt),g=a.clone().addScaledVector(o,c*Math.cos(d)).addScaledVector(l,c*Math.sin(d)).multiplyScalar(Rt);r.set([f.x,f.y,f.z,g.x,g.y,g.z],6+h*6)}this.drop.setSegments(r)}}const CM=8e3;class PM{constructor(){F(this,"ctx",null);F(this,"master");F(this,"engine");F(this,"engineFilter");F(this,"alarm",null);F(this,"lastRcs",0);F(this,"voiceGain");F(this,"clips",new Map);F(this,"voiceQueue",Promise.resolve())}init(){if(this.ctx)return;const t=new AudioContext;this.ctx=t,this.master=t.createGain(),this.master.gain.value=.45,this.master.connect(t.destination),this.voiceGain=t.createGain(),this.voiceGain.gain.value=1.6,this.voiceGain.connect(this.master);const e=t.createOscillator();e.frequency.value=118;const n=t.createGain();n.gain.value=.008,e.connect(n).connect(this.master),e.start(),this.engine=t.createGain(),this.engine.gain.value=0,this.engineFilter=t.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.value=380,this.engineFilter.connect(this.engine).connect(this.master);for(const[a,o]of[[31,.7],[62,.35]]){const l=t.createOscillator();l.frequency.value=a;const c=t.createGain();c.gain.value=o,l.connect(c).connect(this.engine),l.start()}const s=t.createBufferSource();s.buffer=xh(t,2),s.loop=!0;const r=t.createGain();r.gain.value=.9,s.connect(r).connect(this.engineFilter),s.start()}update(t,e,n,s){if(!this.ctx)return;const r=this.ctx.currentTime;this.engine.gain.setTargetAtTime(t?.12+.28*e:0,r,t?.06:.03),this.engineFilter.frequency.setTargetAtTime(220+520*n,r,.2),s&&!this.alarm&&this.startAlarm(),!s&&this.alarm&&this.stopAlarm()}rcs(){if(!this.ctx)return;const t=performance.now();t-this.lastRcs<70||(this.lastRcs=t,this.blip(1800,.05,.12,"bandpass"))}voice(t){if(!this.ctx)return;const e=performance.now(),n=this.clip(t);this.voiceQueue=this.voiceQueue.then(async()=>{const s=await n;if(!s||!this.ctx||performance.now()-e>CM)return;const r=this.ctx.createBufferSource();r.buffer=s,r.connect(this.voiceGain),await new Promise(a=>{r.onended=()=>a(),r.start()})})}clip(t){let e=this.clips.get(t);return e||(e=fetch(`./audio/apollo11/${t}.mp3`).then(n=>n.ok?n.arrayBuffer():Promise.reject(new Error(`${n.status}`))).then(n=>this.ctx.decodeAudioData(n)).catch(()=>null),this.clips.set(t,e)),e}quindar(){this.tone(2525,.25,.05)}chime(){this.tone(1320,.08,.04),setTimeout(()=>this.tone(1760,.1,.035),90)}tone(t,e,n){if(!this.ctx)return;const s=this.ctx,r=s.createOscillator();r.type="sine",r.frequency.value=t;const a=s.createGain();a.gain.setValueAtTime(0,s.currentTime),a.gain.linearRampToValueAtTime(n,s.currentTime+.01),a.gain.setValueAtTime(n,s.currentTime+e-.02),a.gain.linearRampToValueAtTime(0,s.currentTime+e),r.connect(a).connect(this.master),r.start(),r.stop(s.currentTime+e+.05)}blip(t,e,n,s){const r=this.ctx,a=r.createBufferSource();a.buffer=xh(r,e);const o=r.createBiquadFilter();o.type=s,o.frequency.value=t;const l=r.createGain();l.gain.setValueAtTime(n,r.currentTime),l.gain.exponentialRampToValueAtTime(.001,r.currentTime+e),a.connect(o).connect(l).connect(this.master),a.start()}startAlarm(){const t=this.ctx,e=t.createOscillator();e.type="square",e.frequency.value=750;const n=t.createGain();n.gain.value=.025,e.connect(n).connect(this.master),e.start();let s=!1;const r=window.setInterval(()=>{s=!s,e.frequency.value=s?2e3:750},400);this.alarm={osc:e,timer:r}}stopAlarm(){this.alarm&&(clearInterval(this.alarm.timer),this.alarm.osc.stop(),this.alarm=null)}}function xh(i,t){const e=i.createBuffer(1,Math.max(1,Math.floor(i.sampleRate*t)),i.sampleRate),n=e.getChannelData(0);for(let s=0;s<n.length;s++)n[s]=Math.random()*2-1;return e}const bn=i=>document.getElementById(i);function wn(i){return i.map(([t,e,n])=>`<div class="row"><span class="k">${t}</span><b class="${n??""}">${e}</b></div>`).join("")}function Sh(i,t,e=!1){const n=Math.max(0,Math.min(1,i))*100,s=t===void 0?"":`<span class="bug" style="left:${Math.max(0,Math.min(1,t))*100}%"></span>`;return`<div class="bar${e?" low":""}"><i style="width:${n}%"></i>${s}</div>`}function Eh(i){if(!(i!=null&&i.length))return"—";const t=da(i),e=i[0];if(e.primary===Ve&&t!==null){const a=Math.abs(t)-Bt.radius;return a<0?"LUNAR IMPACT":`PERILUNE ${ce(a)}`}const n=e.primary===Bt&&!e.orbit.closed?Ts(i):null;if(n){const a=er(n.orbit);return a>0?"MISSES EARTH":`ENTRY ${Zs(a,2)}`}const s=e.orbit,r=e.primary.radius;return s.closed?s.periapsis<r?`SUBORBITAL · AP ${ce(s.apoapsis-r,1)}`:`${ce(s.periapsis-r,s.periapsis-r<5e4?1:0)} × ${ce(s.apoapsis-r)}`:"ESCAPE"}class IM{constructor(){F(this,"lastCall","");F(this,"revealAt",0);F(this,"onTransmission",null)}update(t,e,n){bn("met").textContent=q0(t.met),bn("chapter").textContent=e?`CH ${qe.indexOf(e.chapter)+1} · ${e.chapter.title}`:"",bn("warp").textContent=Y0(t.warp),bn("view").textContent=n.map?"MAP":"CHASE",bn("auto").classList.toggle("on",!!(e!=null&&e.auto)),bn("hold").classList.toggle("on",n.hold),this.capcom((e==null?void 0:e.capcom)??""),this.orbit(t),this.engine(t,e),bn("card").innerHTML=e?this.card(t,e,n.plan):""}capcom(t){var r;const e=bn("capcom"),n=t.replace(/[\d:.,−-]+/g,"#");n!==this.lastCall&&(this.lastCall=n,this.revealAt=performance.now(),t&&((r=this.onTransmission)==null||r.call(this)));const s=Math.floor((performance.now()-this.revealAt)/14);e.textContent=s>=t.length?t:t.slice(0,s)}orbit(t){const e=t.orbit,n=t.primary.radius,s=[["BODY",t.primary.name],["ALTITUDE",Rn(t.altitude)],["VELOCITY",te(t.ship.velocity.length())]];if(t.ship.landed)s.push(["STATUS","ON THE SURFACE","good"]);else{s.push(["APOAPSIS",e.closed?Rn(e.apoapsis-n):"ESCAPE"]),s.push(["PERIAPSIS",e.periapsis<n?"SUBORBITAL":Rn(e.periapsis-n),e.periapsis<n?"bad":""]);const r=e.nextPeriapsis(t.met);r!==null&&r-t.met<30*86400&&s.push(["T PERIAPSIS",ze(r-t.met)])}bn("orbit").innerHTML=wn(s)}engine(t,e){const n=t.ship,s=n.stage,r=e==null?void 0:e.cue,a=s.thrust<=0?"—":n.fuel<=0?"DRY":n.firing?"BURN":"IDLE",o=wn([[t.docked&&t.lmAlive?`${n.spec.label}+LM`:n.spec.label,`${s.name} ${a}`,n.firing?"plan":""],["THROTTLE",`${Math.round(n.throttle*100)}%`]])+Sh(n.throttle,r==null?void 0:r.throttle)+wn([[s.name==="CM"?"PROPELLANT":`${s.name} PROP`,s.fuelMass?`${Math.round(n.fuelFraction*100)}%`:"—"]])+Sh(n.fuelFraction,void 0,n.fuelFraction<.1)+wn([["ΔV LEFT",te(n.deltaV)],["RCS",`${Math.round(n.rcsFuel/n.spec.rcsFuelMass*100)}%`]]);bn("engine").innerHTML=o}card(t,e,n){const s=e.phase;if(!s||e.status!=="flying")return"";if(s.kind==="burn"&&e.guide){const a=e.guide,o=t.ship,l=a.litAt!==null,c=a.ignition-t.met,h=1-Math.max(0,a.remaining(o))/a.total;return`<h3>${s.name} BURN</h3><div class="row"><span class="k">ΔV TO GO</span><b class="big plan">${te(a.remaining(o),1)}</b></div><div class="meter"><i style="width:${h*100}%"></i></div>`+wn([["ΔV PLANNED",te(a.total,1)],l?["BURNING",ze(t.met-a.litAt)]:["IGNITION",c>=0?`T−${ze(c)}`:`LATE ${ze(-c)}`,c<0?"bad":""],["BURN TIME",ze(a.duration)],["ATTITUDE",`${(o.forward.angleTo(a.cue(o))*180/Math.PI).toFixed(1)}° OFF`,o.forward.angleTo(a.cue(o))<.035?"good":"plan"],["RESULT",Eh(n),"plan"]])}if(s.kind==="coast"){const a=(e.nextEvent??t.met)-t.met;return`<h3>${s.name}</h3>`+wn([["NEXT EVENT",`T−${ze(a)}`],["WARP","G"]])}const r=e.cue;switch(s.name){case"DESCENT":{const a=jn(t.ship,t.primary),o=pa(t)-ea;return(r!=null&&r.alarm?`<h3 class="bad">PROGRAM ALARM ${r.alarm}</h3>`:`<h3>${(r==null?void 0:r.label)??s.name}</h3>`)+`<div class="row"><span class="k">ALTITUDE</span><b class="big">${Rn(a.h)}</b></div>`+wn([["SINK RATE",te(-a.vz,1),-a.vz>3&&a.h<200?"bad":""],["DRIFT",te(a.vh,a.vh<100?1:0),a.vh>3&&a.h<200?"plan":""],...r!=null&&r.site?[["LPD",r.hazard?"BOULDERS — ↑↓←→":"CLEAR",r.hazard?"bad":"good"]]:[],["TO BINGO",o>0?`${Math.round(o)} S`:"BINGO",o<30?"bad":o<60?"plan":""],e.ctx.memo.rod!==void 0&&!e.auto?["ROD SET",`${te(-e.ctx.memo.rod,1)} ↓`,"plan"]:["THROTTLE",e.auto?"COMPUTER":"AUTO THR","plan"]])}case"ASCENT":{const a=jn(t.ship,t.primary);return`<h3>${(r==null?void 0:r.label)??s.name}</h3><div class="row"><span class="k">TO ORBIT</span><b class="big plan">${te((r==null?void 0:r.toGo)??0)}</b></div>`+wn([["ALTITUDE",Rn(a.h)],["CLIMB",te(a.vz,1)],["ORBIT",Eh([{primary:t.primary,orbit:t.orbit,t0:t.met,t1:t.met,end:null}])]])}case"DOCKING":{const a=t.relative();if(!a)return"";const o=-a.rangeRate,l=Math.min(6,Math.max(.25,a.range/60)),c=a.vel.clone().addScaledVector(a.pos.clone().normalize(),-a.vel.dot(a.pos)/a.range).length();return`<h3>PROX OPS — COLUMBIA</h3><div class="row"><span class="k">RANGE</span><b class="big tgt">${Rn(a.range)}</b></div>`+wn([["CLOSING",te(o,2),o>l*1.5?"bad":o<0?"plan":"good"],["SAFE RATE",`≤ ${te(l,2)}`],["DRIFT",te(c,2),c>.5?"plan":""],["RCS",`${Math.round(t.ship.rcsFuel/t.ship.spec.rcsFuelMass*100)}%`]])}case"ENTRY":{const a=Math.abs(ha(t));return`<h3>${(r==null?void 0:r.label)??"ENTRY"}</h3><div class="row"><span class="k">LOAD</span><b class="big ${t.gLoad>8?"bad":""}">${t.gLoad.toFixed(1)} G</b></div>`+wn([["PEAK",`${t.peakG.toFixed(1)} G`],["BANK",`${Math.round(a*180/Math.PI)}°`],["GUIDANCE",`${Math.round(((r==null?void 0:r.bank)??0)*180/Math.PI)}°`,"plan"],["VELOCITY",te(t.ship.velocity.length())]])}}return""}}class Gr{constructor(t){F(this,"root");F(this,"pool",new Map);F(this,"used",new Set);this.root=document.createElement("div"),this.root.className="labels",t.appendChild(this.root)}begin(){this.used=new Set}put(t,e,n,s,r){r.updateMatrixWorld();const a=e.clone().project(r);if(a.z>1||a.z<-1||Math.abs(a.x)>1.2||Math.abs(a.y)>1.2)return null;let o=this.pool.get(t);return o||(o=document.createElement("div"),this.pool.set(t,o),this.root.appendChild(o)),o.className=`label ${s}`,o.textContent!==n&&(o.textContent=n),o.style.transform=`translate(${(a.x+1)/2*window.innerWidth}px, ${(1-a.y)/2*window.innerHeight}px)`,o.style.display="",this.used.add(t),o}end(){for(const[t,e]of this.pool)this.used.has(t)||(e.style.display="none")}static screen(t,e){const n=t.clone().project(e);return{x:(n.x+1)/2*window.innerWidth,y:(1-n.y)/2*window.innerHeight}}}const yh=18,LM=120;class DM{constructor(t,e,n,s,r,a,o,l){F(this,"labels");F(this,"drag",!1);F(this,"pendingTig",null);F(this,"lastReplan",0);F(this,"nodeScreen",null);this.canvas=e,this.camera=n,this.getDirector=s,this.sim=r,this.active=a,this.chase=o,this.chaseCamera=l,this.labels=new Gr(t);const c=h=>{var d;if(!this.active()||!this.nodeScreen)return;(((d=h.target.classList)==null?void 0:d.contains("node"))||Math.hypot(h.clientX-this.nodeScreen.x,h.clientY-this.nodeScreen.y)<yh)&&(this.drag=!0,h.preventDefault())};e.addEventListener("pointerdown",c),t.addEventListener("pointerdown",c),window.addEventListener("pointermove",h=>{e.style.cursor=this.drag?"grabbing":this.nearNode(h)?"grab":"",this.drag&&(this.pendingTig=this.tigAt(h.clientX,h.clientY))}),window.addEventListener("pointerup",()=>{var h;this.drag&&this.pendingTig!==null&&((h=this.getDirector())==null||h.replan(this.pendingTig)),this.drag=!1,this.pendingTig=null})}nearNode(t){return!!this.nodeScreen&&this.active()&&Math.hypot(t.clientX-this.nodeScreen.x,t.clientY-this.nodeScreen.y)<yh}tigAt(t,e){const n=this.sim,s=new A(t/window.innerWidth*2-1,-(e/window.innerHeight)*2+1,0).unproject(this.camera),r=Ne.fromState(n.ship.position,n.ship.velocity,n.primary.mu,n.met),a=s.divideScalar(Rt).sub(n.primary.positionAt(n.met));a.y=0;const o=Math.atan2(a.dot(r.qHat),a.dot(r.eHat)),l=r.timeAtTrueAnomaly(o,n.met+60);return l===null?null:l}update(t){var o,l;const e=this.sim,n=this.camera,s=this.labels;if(s.begin(),this.nodeScreen=null,!this.active()){const c=e.relative();if(this.chase()&&c&&c.range<5e4){const h=e.absolutePosition(e.other).multiplyScalar(Rt);s.put("chase-other",h,`${e.activeId==="lm"?"COLUMBIA":"EAGLE"} ${Rn(c.range)}`,"partner",this.chaseCamera)}s.end();return}const r=this.getDirector(),a=Rt;if(s.put("earth",new A,"EARTH","body",n),s.put("moon",Bt.positionAt(e.met).multiplyScalar(a),"MOON","body",n),s.put("ship",e.absolutePosition().multiplyScalar(a),e.activeId==="lm"?"EAGLE":"COLUMBIA","craft",n),e.other&&s.put("other",e.absolutePosition(e.other).multiplyScalar(a),e.activeId==="lm"?"COLUMBIA":"EAGLE","partner",n),this.apsides("cur",((o=t.current)==null?void 0:o[0])??null,e.met),this.encounters("plan",t.plan??t.current,e.met),r!=null&&r.guide&&r.guide.litAt===null&&r.maneuver){const c=this.drag&&this.pendingTig!==null?this.pendingTig:r.maneuver.tig,h=Ze(gi(e.ship,e.primary,e.met),c),u=h.primary.positionAt(h.primary===e.primary?e.met:c).add(h.pos).multiplyScalar(a);s.put("node",u,`${((l=r.phase)==null?void 0:l.name)??"BURN"}`,"node drag",n)&&(this.nodeScreen=Gr.screen(u,n)),this.drag&&this.pendingTig!==null&&performance.now()-this.lastReplan>LM&&(this.lastReplan=performance.now(),r.replan(this.pendingTig))}s.end()}apsides(t,e,n){if(!e||!e.orbit.closed)return;const s=e.orbit,r=Qo(e,n,this.sim.primary),a=Gr.screen(r.clone().multiplyScalar(Rt),this.camera),o=Gr.screen(s.stateAtTrueAnomaly(Math.PI).add(r).multiplyScalar(Rt),this.camera);if(Math.hypot(a.x-o.x,a.y-o.y)<60)return;const l=(h,u,d)=>this.labels.put(`${t}-${h}`,s.stateAtTrueAnomaly(u).add(r).multiplyScalar(Rt),d,"apsis",this.camera),c=e.primary.radius;if(s.e<.003){l("pe",Math.PI/2,ce(s.periapsis-c));return}l("pe",0,`PE ${ce(s.periapsis-c,s.periapsis-c<5e4?1:0)}`),s.apoapsis<5e8&&l("ap",Math.PI,`AP ${ce(s.apoapsis-c)}`)}encounters(t,e,n){e&&e.slice(0,2).forEach((s,r)=>{if(r===0&&s.primary===this.sim.primary)return;const a=Qo(s,n,this.sim.primary);if(s.primary===Bt){const o=s.orbit.stateAtTrueAnomaly(0).add(a).multiplyScalar(Rt);this.labels.put(`${t}-pl${r}`,o,`PERILUNE ${ce(s.orbit.periapsis-Bt.radius)}`,"pass",this.camera),s.t0>n+3600&&this.labels.put(`${t}-mo${r}`,a.clone().multiplyScalar(Rt),`MOON AT ENCOUNTER · T−${ze(s.t0-n)}`,"body",this.camera)}else if(s.primary===Ve&&s.end==="atmosphere"){const o=s.orbit.stateAt(s.t1).add(a).multiplyScalar(Rt);this.labels.put(`${t}-ei${r}`,o,`ENTRY ${Zs(er(s.orbit),2)}`,"pass",this.camera)}})}}const os=196,Xt=os/2,pn=os*.42,ye={ink:"#d9e4df",dim:"#6f817a",faint:"#24302c",track:"#7fdca0",plan:"#ffb547",target:"#6fd3ff"};class UM{constructor(t){F(this,"ctx");const e=document.createElement("canvas"),n=Math.min(window.devicePixelRatio||1,2);e.width=e.height=Math.round(os*n),e.style.width=e.style.height=`${os}px`,t.appendChild(e),this.ctx=e.getContext("2d"),this.ctx.scale(n,n)}update(t){const e=this.ctx;e.clearRect(0,0,os,os),e.font="9px ui-monospace, Menlo, Consolas, monospace",e.textAlign="center",e.textBaseline="middle";const n=t.quaternion.clone().invert(),s=a=>a.clone().normalize().applyQuaternion(n);this.shell();const r=vl(t.position,t.velocity);if(this.horizon(s(r.radial)),this.marker(s(r.prograde),"pro","PRO",ye.ink),this.marker(s(r.prograde.clone().negate()),"retro","RET",ye.dim),this.marker(s(r.normal),"solid","N",ye.dim),this.marker(s(r.normal.clone().negate()),"hollow","AN",ye.dim),this.marker(s(r.radial),"solid","RAD",ye.dim),this.marker(s(r.radial.clone().negate()),"hollow","IN",ye.dim),t.target&&t.target.pos.lengthSq()>1&&(this.marker(s(t.target.pos),"target","TGT",ye.target),t.target.vel.lengthSq()>1e-4)){const a=t.target.vel.clone().negate();this.marker(s(a),"pro","V REL",ye.target)}t.cue&&this.marker(s(t.cue),"cue","",ye.plan),t.bank&&this.bankDial(t.bank.current,t.bank.target),this.reticle()}shell(){const t=this.ctx;t.lineWidth=1,t.strokeStyle=ye.faint,t.beginPath(),t.arc(Xt,Xt,pn*.5,0,Math.PI*2),t.stroke(),t.strokeStyle=ye.dim,t.beginPath(),t.arc(Xt,Xt,pn,0,Math.PI*2),t.stroke();for(let e=0;e<36;e++){const n=e/36*Math.PI*2,s=pn-(e%9===0?7:3);t.beginPath(),t.moveTo(Xt+Math.cos(n)*s,Xt+Math.sin(n)*s),t.lineTo(Xt+Math.cos(n)*pn,Xt+Math.sin(n)*pn),t.stroke()}}horizon(t){let e=new A().crossVectors(t,new A(0,0,1));e.lengthSq()<1e-6&&(e=new A().crossVectors(t,new A(0,1,0))),e.normalize();const n=new A().crossVectors(t,e).normalize();for(const s of[!1,!0]){const r=this.ctx;r.strokeStyle=s?ye.track:ye.faint,r.globalAlpha=s?.7:1,r.beginPath();let a=!1;for(let o=0;o<=120;o++){const l=o/120*Math.PI*2,c=e.clone().multiplyScalar(Math.cos(l)).addScaledVector(n,Math.sin(l));if(c.z>=0!==s){a=!1;continue}const h=Xt+c.x*pn,u=Xt-c.y*pn;a?r.lineTo(h,u):r.moveTo(h,u),a=!0}r.stroke(),r.globalAlpha=1}}marker(t,e,n,s){const r=this.ctx,a=t.z>=0,o=a?1:1/Math.max(1e-6,Math.hypot(t.x,t.y)),l=Xt+t.x*o*pn*(a?1:.97),c=Xt-t.y*o*pn*(a?1:.97);switch(r.save(),r.globalAlpha=a?1:.35,r.strokeStyle=r.fillStyle=s,r.lineWidth=e==="cue"?1.6:1,r.beginPath(),e){case"pro":r.arc(l,c,5,0,Math.PI*2),r.moveTo(l-9,c),r.lineTo(l-5,c),r.moveTo(l+5,c),r.lineTo(l+9,c),r.moveTo(l,c-5),r.lineTo(l,c-9);break;case"retro":r.arc(l,c,5,0,Math.PI*2),r.moveTo(l-3.5,c-3.5),r.lineTo(l+3.5,c+3.5),r.moveTo(l+3.5,c-3.5),r.lineTo(l-3.5,c+3.5);break;case"solid":r.moveTo(l,c-5),r.lineTo(l+5,c+4),r.lineTo(l-5,c+4),r.closePath();break;case"hollow":r.arc(l,c,4,0,Math.PI*2);break;case"target":r.rect(l-5,c-5,10,10),r.moveTo(l,c-9),r.lineTo(l,c+9);break;case"cue":r.moveTo(l,c-9),r.lineTo(l+9,c),r.lineTo(l,c+9),r.lineTo(l-9,c),r.closePath();break}r.stroke(),n&&r.fillText(n,l,c+(c>Xt+pn*.75?-15:15)),r.restore()}bankDial(t,e){const n=this.ctx,s=pn+9,r=c=>-Math.PI/2+c;n.save(),n.strokeStyle=ye.faint,n.beginPath(),n.arc(Xt,Xt,s,-Math.PI,0),n.stroke();const a=t>=0?1:-1;n.strokeStyle=ye.plan,n.lineWidth=2;const o=r(a*e);n.beginPath(),n.moveTo(Xt+Math.cos(o)*(s-5),Xt+Math.sin(o)*(s-5)),n.lineTo(Xt+Math.cos(o)*(s+5),Xt+Math.sin(o)*(s+5)),n.stroke(),n.strokeStyle=ye.ink;const l=r(t);n.beginPath(),n.moveTo(Xt,Xt),n.lineTo(Xt+Math.cos(l)*s,Xt+Math.sin(l)*s),n.globalAlpha=.5,n.stroke(),n.restore()}reticle(){const t=this.ctx;t.strokeStyle=ye.ink,t.lineWidth=1.5,t.beginPath(),t.moveTo(Xt-16,Xt),t.lineTo(Xt-6,Xt),t.lineTo(Xt,Xt+5),t.lineTo(Xt+6,Xt),t.lineTo(Xt+16,Xt),t.stroke()}}const Th=3200,NM=3;function sn(i,t="info"){var s;const e=document.getElementById("toasts");if([...e.children].some(r=>r.textContent===i))return;const n=document.createElement("div");for(n.className=`toast ${t}`,n.textContent=i,e.appendChild(n),setTimeout(()=>n.classList.add("fade"),Th),setTimeout(()=>n.remove(),Th+700);e.children.length>NM;)(s=e.firstChild)==null||s.remove()}const Je=()=>document.getElementById("overlay");function OM(i,t=3){return"★".repeat(i)+`<span class="off">${"★".repeat(t-i)}</span>`}function FM(){Je().hidden=!0,Je().innerHTML=""}function BM(i,t,e){const{stars:n,unlocked:s,resume:r}=i.data,a=qe.map((l,c)=>{const h=c>s,u=[h?"locked":"",c===t?"sel":""].join(" "),d=h?"—":n[c]?"★".repeat(n[c])+'<span class="off">'+"★".repeat(3-n[c])+"</span>":"";return`<li class="${u}" data-i="${c}"><span class="n">${String(c+1).padStart(2,"0")}</span><span>${l.title}<small>${l.summary}</small></span><span class="stars">${d}</span></li>`}).join(""),o=r?`CONTINUE YOUR FLIGHT AT CHAPTER ${r.chapter+1} — <b>C</b> · `:"";Je().innerHTML=`
    <div class="panel">
      <h2>APOLLO 11 · JULY 1969</h2>
      <h1>ORBITAL</h1>
      <p class="lead">Fly the first landing from Earth orbit to the Sea of Tranquility and home. Houston tells you what comes next and why; you fly it. Every chapter is graded — ★★★ takes a clean hand-flown job.</p>
      <ul class="chapters">${a}</ul>
      <div class="keys">${o}↑↓ SELECT · <b>ENTER</b> FLY · ${i.totalStars}/${qe.length*3} ★</div>
      <a class="watch" href="trailer/">▶ WATCH THE TRAILER</a>
    </div>`,Je().hidden=!1,Je().querySelectorAll("li[data-i]").forEach(l=>{l.addEventListener("click",()=>{const c=Number(l.dataset.i);c<=s&&e(c)})})}function zM(i){Je().innerHTML=`<div class="panel"><h2>${i}</h2></div>`,Je().hidden=!1}function HM(i,t,e,n){const s=qe[i],r=t.lines.map(a=>`<div class="row"><span class="k">${a.label}</span><b class="${a.ok?"good":"plan"}">${a.value}</b></div>`).join("");Je().innerHTML=`
    <div class="panel">
      <h2>CHAPTER ${i+1} COMPLETE</h2>
      <h1 style="font-size:24px;letter-spacing:0.2em">${s.title}</h1>
      <div class="stars-big">${OM(t.stars)}</div>
      ${e?'<p class="note">The computer flew part of this chapter — ★★★ needs a hand-flown job.</p>':""}
      <div class="result">${r}</div>
      <div class="keys"><b>ENTER</b> ${n?"FINISH":"NEXT CHAPTER"} · <b>R</b> FLY IT AGAIN · <b>ESC</b> MENU</div>
    </div>`,Je().hidden=!1}function GM(i,t){Je().innerHTML=`
    <div class="panel abort">
      <h2>ABORT — CHAPTER ${i+1}</h2>
      <h1 style="font-size:24px;letter-spacing:0.12em">${t}</h1>
      <p class="lead">Flight dynamics has the numbers. Take it again from the top of the chapter — it only costs you seconds.</p>
      <div class="keys"><b>R</b> RESTART CHAPTER · <b>ESC</b> MENU</div>
    </div>`,Je().hidden=!1}function VM(i){Je().innerHTML=`
    <div class="panel">
      <h2>SPLASHDOWN · MID-PACIFIC</h2>
      <h1 style="font-size:30px;letter-spacing:0.3em">MISSION COMPLETE</h1>
      <p class="lead">"Houston, Tranquility Base here." You flew it all the way — out, down, up and home.</p>
      <div class="stars-big">${i.totalStars} / ${qe.length*3} ★</div>
      <div class="keys"><b>ENTER</b> MENU</div>
    </div>`,Je().hidden=!1}const kM=[["W/S A/D Q/E","Pitch, yaw, roll"],["F","Hold attitude on the ◇ cue"],["T","SAS rate damping"],["Z / X","Throttle full / cut off"],["SHIFT / CTRL","Throttle up / down · P66: sink rate"],["I/K J/L U/O","RCS translate (docking)"],["G","Warp to the next event"],[", / .","Time warp down / up"],["B","Hand this phase to the computer"],["ENTER","Accept a short burn · continue"],["M · TAB","Map view · map focus"],["DRAG ◇","In the map: move the burn, re-solve"],["BACKSPACE","Restore the computer’s burn"],["R · ESC","Restart chapter · menu"]];function WM(){document.getElementById("help").innerHTML="<h4>KEYS</h4>"+kM.map(([i,t])=>`<span class="k">${i}</span><span class="d">${t}</span>`).join("")}const no=12*86400,XM=new A(0,1,0),qM=.6,Ln=new eM(document.getElementById("app")),dt=new yl,tl=new RM(Ln.scene),Ae=new Bv(Ln),zu=new IM,YM=new UM(document.getElementById("navball")),Hi=new PM,ci=new Nv,pi=new Av,$M=new Dv;let je="menu",$t=null,gn=0,Ui=Math.min(pi.data.unlocked,qe.length-1),_n=!1,el=dt.activeId,ss={current:null,plan:null,partner:null};const KM=new DM(document.getElementById("ui"),Ln.canvas,Ln.map,()=>$t,dt,()=>Ae.mode==="map"&&je==="flying",()=>Ae.mode==="chase"&&je==="flying",Ln.chase);ci.onFirstKey=()=>Hi.init();let Bs=null;Ln.canvas.addEventListener("pointerdown",i=>Bs={x:i.clientX,y:i.clientY});Ln.canvas.addEventListener("pointerup",i=>{var s;const t=Bs&&Math.hypot(i.clientX-Bs.x,i.clientY-Bs.y)<5;if(Bs=null,!t||je!=="flying"||Ae.mode!=="chase"||!((s=$t==null?void 0:$t.cue)!=null&&s.site))return;const e=zv(Ln.chase,i.clientX,i.clientY,tl.moon.position,ue.radius*Rt);if(!e)return;const n=$t.designate({at:e.applyAxisAngle(XM,-Bt.spinAt(dt.met)).normalize()});n&&sn(n,n.includes("BOULDERS")?"warn":"info")});zu.onTransmission=()=>Hi.quindar();WM();function sr(i){je=i,document.getElementById("ui").classList.toggle("menu",i==="menu")}function Ws(){sr("menu"),$t=null,dt.warp=1,dt.warpUntil=null,BM(pi,Ui,i=>(Ui=i,Hu(i)))}function Hu(i){zM("COMPUTING THE NOMINAL TRAJECTORY…"),setTimeout(()=>{try{rs(i,$M.start(i))}catch(t){throw Ws(),sn("NOMINAL TRAJECTORY FAILED — SEE CONSOLE","warn"),t}},30)}function rs(i,t){gn=i,$t=new Mu(qe[i],dt,t),sr("flying"),_n=!1,FM(),Ae.setMode("chase"),Ae.resetChase(dt.activeId==="lm"?45:70),el=dt.activeId,pi.setResume(i,t),Gu()}function Gu(){for(const i of dt.events)sn(i.text,i.tone),i.tone==="good"&&Hi.chime(),i.voice&&Hi.voice(i.voice);dt.events.length=0}function ZM(i){pi.record(gn,i.grade.stars);const t=gn===qe.length-1;pi.setResume(gn+1,t?null:dt.snapshot()),sr("debrief"),HM(gn,i.grade,i.ctx.usedAuto,t)}function jM(i){var e,n;if(je==="menu"){i==="up"&&(Ui=Math.max(0,Ui-1)),i==="down"&&(Ui=Math.min(pi.data.unlocked,Ui+1)),(i==="up"||i==="down")&&Ws(),i==="enter"&&Hu(Ui);const s=pi.data.resume;i==="continue"&&s&&rs(s.chapter,s.start);return}if(i==="menu")return Ws();if(i==="help"){const s=document.getElementById("help");s.hidden=!s.hidden;return}if(je==="debrief"){i==="enter"&&(gn===qe.length-1?(sr("finale"),VM(pi),Hi.voice("big-board")):rs(gn+1,dt.snapshot())),i==="restart"&&$t&&rs(gn,$t.start);return}if(je==="finale"){i==="enter"&&Ws();return}if(je==="abort"){i==="restart"&&$t&&rs(gn,$t.start);return}if(!$t)return;const t=dt.ship;switch(i){case"restart":return rs(gn,$t.start);case"throttle-full":t.throttle=1;break;case"throttle-cut":t.throttle=0;break;case"hold":_n=!_n&&!!((e=$t.cue)!=null&&e.dir),sn(_n?"ATTITUDE HOLD — ON THE CUE":"ATTITUDE HOLD OFF");break;case"sas":t.sas=!t.sas,sn(t.sas?"SAS ON":"SAS OFF");break;case"auto":$t.toggleAuto(),!$t.auto&&t.firing&&((n=$t.cue)!=null&&n.dir)&&(_n=!0),sn($t.auto?"AUTO — THE COMPUTER HAS IT (MAX ★★)":_n?"MANUAL — HOLDING THE CUE, X TO CUT OFF":"MANUAL CONTROL","warn");break;case"map":Ae.setMode(Ae.mode==="map"?"chase":"map");break;case"focus":Ae.focus=Ae.focus==="auto"?"earth":Ae.focus==="earth"?"moon":"auto",Ae.mapZoom=1,sn(`MAP FOCUS ${Ae.focus.toUpperCase()}`);break;case"enter":$t.accept();break;case"replan":sn($t.replan()?"BURN RESTORED TO THE COMPUTER SOLUTION":"NO UNLIT BURN TO RESTORE");break;case"up":case"down":case"left":case"right":{const s=i==="up"?[1,0]:i==="down"?[-1,0]:i==="left"?[0,-1]:[0,1],r=$t.designate({clicks:s});r&&sn(r,r.includes("BOULDERS")?"warn":"info");break}case"warp-next":{const s=$t.nextEvent;s!==null&&s>dt.met+1?dt.warpUntil=s:sn("NOTHING TO WARP TO — FLY IT");break}case"warp-up":case"warp-down":{dt.warpUntil=null;const s=Xa.findIndex(a=>a>=dt.warp),r=Xa[Math.max(0,Math.min(Xa.length-1,(s<0?0:s)+(i==="warp-up"?1:-1)))];r>dt.maxWarp&&sn("WARP LIMITED UNDER POWER","warn"),dt.warp=Math.min(r,dt.maxWarp);break}}}function JM(i){const t=$t,e=dt.ship;ci.manual&&t.auto&&(t.auto=!1,sn("MANUAL TAKEOVER","warn")),ci.steering&&(_n=!1),dt.rotation=ci.rotation,dt.translation=ci.translation,e.throttle=Math.min(1,Math.max(0,e.throttle+ci.throttleRate*qM*i)),dt.hold=_n?t.holdTarget():null,_n&&!dt.hold&&(_n=!1),dt.warpUntil!==null&&(dt.warp=Math.min(1e5,Math.max(20,(dt.warpUntil-dt.met)/.6))),t.preStep(i,ci.throttleRate),dt.step(i),t.postStep(),Gu(),t.status==="complete"?ZM(t):t.status==="failed"&&(sr("abort"),GM(gn,t.failure??"ABORT")),dt.activeId!==el&&(el=dt.activeId,Ae.resetChase(dt.activeId==="lm"?45:70))}function QM(){const i=gi(dt.ship,dt.primary,dt.met),e=dt.ship.landed||dt.inAtmosphere?null:Yo(i,no);let n=null;const s=($t==null?void 0:$t.status)==="flying"?$t.guide:null;s&&s.phase!=="done"&&($t!=null&&$t.maneuver)&&(s.litAt===null?n=ys(i,Ks(dt.ship),$t.maneuver,no).arcs:n=R0(i,Ks(dt.ship),s.toGo(dt.ship),no));const r=dt.other,a=r&&!r.landed?Yo(gi(r,dt.primary,dt.met),dt.orbit.closed?dt.orbit.period:7200):null;return{current:e,plan:n,partner:a}}const Vu=new _0;function ku(){requestAnimationFrame(ku),tx(Math.min(Vu.getDelta(),.05))}function tx(i){for(const t of ci.drain())jM(t);je==="flying"?JM(i):je==="menu"&&(Ae.az+=i*.04),ss=QM(),ex(i)}function ex(i){var h;const t=Ae.mode==="map",e=Vu.elapsedTime,n=je==="flying"?$t:null,s=n==null?void 0:n.cue,r=s!=null&&s.site?{site:s.site,hazard:!!s.hazard}:null;tl.sync(dt,ss,t,e,2*Ln.mapHalfHeight/window.innerHeight,r),t?Ae.updateMap(dt,[ss.current,ss.plan],i):Ae.updateChase(dt,tl.craftPosition(dt,dt.activeId)),KM.update(ss),zu.update(dt,n,{map:t,hold:_n,plan:ss.plan});const a=dt.relative(),o=((h=n==null?void 0:n.phase)==null?void 0:h.name)==="ENTRY"&&dt.chutes==="none";YM.update({quaternion:dt.ship.quaternion,position:dt.ship.position,velocity:dt.ship.velocity,cue:(s==null?void 0:s.dir)??null,target:a&&(n==null?void 0:n.chapter.id)==="rendezvous"?{pos:a.pos,vel:a.vel}:null,bank:o?{current:ha(dt),target:(s==null?void 0:s.bank)??0}:null});const l=dt.ship,c=je==="flying"&&l.firing&&l.fuelFraction<.06;Hi.update(l.firing,l.throttle,Math.min(1,l.stage.thrust/1e6),c||!!(s!=null&&s.alarm)),je==="flying"&&dt.translation&&(dt.translation.x||dt.translation.y||dt.translation.z)&&Hi.rcs(),Ln.render()}dt.restore(Tu());Ws();ku();
