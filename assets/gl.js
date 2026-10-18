(()=>{var $K="186";var ZK=0,jQ=1,KK=2;var X9=1,WK=2,c9=3,n9=0,hJ=1,cJ=2,Q8=0,M7=1,Y9=2,yQ=3,vQ=4,XK=5;var s9=100,YK=101,HK=102,UK=103,GK=104,NK=200,EK=201,qK=202,DK=203,FK=204,OK=205,RK=206,MK=207,LK=208,kK=209,VK=210,BK=211,IK=212,_K=213,AK=214,CK=0,zK=1,PK=2,fQ=3,wK=4,TK=5,SK=6,jK=7,yK=0,vK=1,fK=2,H8=0,L7=1,k7=2,V7=3,H9=4,B7=5,I7=6,_7=7;var i9=301,U9=302,B6=303,I6=304,A7=306,C7=1000,G9=1001,bK=1002,n8=1003,hK=1004;var z7=1005;var iJ=1006,_6=1007;var N9=1008;var U8=1009,xK=1010,gK=1011,P7=1012,bQ=1013,s8=1014,T8=1015,PJ=1016,hQ=1017,xQ=1018,o9=1020,pK=35902,mK=35899,lK=1021,dK=1022,R8=1023,E9=1026,q9=1027,uK=1028,gQ=1029,D9=1030,pQ=1031;var mQ=1033,A6=33776,C6=33777,z6=33778,P6=33779,lQ=35840,dQ=35841,uQ=35842,cQ=35843,nQ=36196,sQ=37492,iQ=37496,oQ=37488,aQ=37489,w6=37490,rQ=37491,tQ=37808,eQ=37809,J$=37810,Q$=37811,$$=37812,Z$=37813,K$=37814,W$=37815,X$=37816,Y$=37817,H$=37818,U$=37819,G$=37820,N$=37821,E$=36492,q$=36494,D$=36495,F$=36283,O$=36284,T6=36285,R$=36286;var M$=0,cK=1,F9="",S8="srgb",L$="srgb-linear",k$="linear",EJ="srgb";var nK=512,sK=513,iK=514,S6=515,oK=516,aK=517,j6=518,rK=519;var V$="300 es",B$=2000;function NX(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function EX(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function q7(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function tK(){let J=q7("canvas");return J.style.display="block",J}var wZ={},d9=null;function I$(...J){let Q="THREE."+J.shift();if(d9)d9("log",Q,...J);else console.log(Q,...J)}function eK(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function m0(...J){J=eK(J);let Q="THREE."+J.shift();if(d9)d9("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function l0(...J){J=eK(J);let Q="THREE."+J.shift();if(d9)d9("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function K9(...J){let Q=J.join(" ");if(Q in wZ)return;wZ[Q]=!0,m0(...J)}function JW(J,Q,$){return new Promise(function(Z,K){function W(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:K();break;case J.TIMEOUT_EXPIRED:setTimeout(W,$);break;default:Z()}}setTimeout(W,$)})}var QW={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class j8{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let Z=$[J];if(Z!==void 0){let K=Z.indexOf(Q);if(K!==-1)Z.splice(K,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let Z=$.slice(0);for(let K=0,W=Z.length;K<W;K++)Z[K].call(this,J);J.target=null}}}var mJ=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ZQ=Math.PI/180,D7=180/Math.PI;function a9(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(mJ[J&255]+mJ[J>>8&255]+mJ[J>>16&255]+mJ[J>>24&255]+"-"+mJ[Q&255]+mJ[Q>>8&255]+"-"+mJ[Q>>16&15|64]+mJ[Q>>24&255]+"-"+mJ[$&63|128]+mJ[$>>8&255]+"-"+mJ[$>>16&255]+mJ[$>>24&255]+mJ[Z&255]+mJ[Z>>8&255]+mJ[Z>>16&255]+mJ[Z>>24&255]).toLowerCase()}function JJ(J,Q,$){return Math.max(Q,Math.min($,J))}function qX(J,Q){return(J%Q+Q)%Q}function KQ(J,Q,$){return(1-$)*J+$*Q}function W7(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:case Uint8ClampedArray:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function sJ(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}class Z0{static{Z0.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6],this.y=Z[1]*Q+Z[4]*$+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=JJ(this.x,J.x,Q.x),this.y=JJ(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=JJ(this.x,J,Q),this.y=JJ(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(JJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(JJ($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),K=this.x-J.x,W=this.y-J.y;return this.x=K*$-W*Z+J.x,this.y=K*Z+W*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class y8{constructor(J=0,Q=0,$=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=Z}static slerpFlat(J,Q,$,Z,K,W,X){let Y=$[Z+0],H=$[Z+1],U=$[Z+2],N=$[Z+3],E=K[W+0],G=K[W+1],D=K[W+2],M=K[W+3];if(N!==M||Y!==E||H!==G||U!==D){let I=Y*E+H*G+U*D+N*M;if(I<0)E=-E,G=-G,D=-D,M=-M,I=-I;let F=1-X;if(I<0.9995){let q=Math.acos(I),C=Math.sin(q);F=Math.sin(F*q)/C,X=Math.sin(X*q)/C,Y=Y*F+E*X,H=H*F+G*X,U=U*F+D*X,N=N*F+M*X}else{Y=Y*F+E*X,H=H*F+G*X,U=U*F+D*X,N=N*F+M*X;let q=1/Math.sqrt(Y*Y+H*H+U*U+N*N);Y*=q,H*=q,U*=q,N*=q}}J[Q]=Y,J[Q+1]=H,J[Q+2]=U,J[Q+3]=N}static multiplyQuaternionsFlat(J,Q,$,Z,K,W){let X=$[Z],Y=$[Z+1],H=$[Z+2],U=$[Z+3],N=K[W],E=K[W+1],G=K[W+2],D=K[W+3];return J[Q]=X*D+U*N+Y*G-H*E,J[Q+1]=Y*D+U*E+H*N-X*G,J[Q+2]=H*D+U*G+X*E-Y*N,J[Q+3]=U*D-X*N-Y*E-H*G,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,Z){return this._x=J,this._y=Q,this._z=$,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:Z,_z:K,_order:W}=J,X=Math.cos,Y=Math.sin,H=X($/2),U=X(Z/2),N=X(K/2),E=Y($/2),G=Y(Z/2),D=Y(K/2);switch(W){case"XYZ":this._x=E*U*N+H*G*D,this._y=H*G*N-E*U*D,this._z=H*U*D+E*G*N,this._w=H*U*N-E*G*D;break;case"YXZ":this._x=E*U*N+H*G*D,this._y=H*G*N-E*U*D,this._z=H*U*D-E*G*N,this._w=H*U*N+E*G*D;break;case"ZXY":this._x=E*U*N-H*G*D,this._y=H*G*N+E*U*D,this._z=H*U*D+E*G*N,this._w=H*U*N-E*G*D;break;case"ZYX":this._x=E*U*N-H*G*D,this._y=H*G*N+E*U*D,this._z=H*U*D-E*G*N,this._w=H*U*N+E*G*D;break;case"YZX":this._x=E*U*N+H*G*D,this._y=H*G*N+E*U*D,this._z=H*U*D-E*G*N,this._w=H*U*N-E*G*D;break;case"XZY":this._x=E*U*N-H*G*D,this._y=H*G*N-E*U*D,this._z=H*U*D+E*G*N,this._w=H*U*N+E*G*D;break;default:m0("Quaternion: .setFromEuler() encountered an unknown order: "+W)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,Z=Math.sin($);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],Z=Q[4],K=Q[8],W=Q[1],X=Q[5],Y=Q[9],H=Q[2],U=Q[6],N=Q[10],E=$+X+N;if(E>0){let G=0.5/Math.sqrt(E+1);this._w=0.25/G,this._x=(U-Y)*G,this._y=(K-H)*G,this._z=(W-Z)*G}else if($>X&&$>N){let G=2*Math.sqrt(1+$-X-N);this._w=(U-Y)/G,this._x=0.25*G,this._y=(Z+W)/G,this._z=(K+H)/G}else if(X>N){let G=2*Math.sqrt(1+X-$-N);this._w=(K-H)/G,this._x=(Z+W)/G,this._y=0.25*G,this._z=(Y+U)/G}else{let G=2*Math.sqrt(1+N-$-X);this._w=(W-Z)/G,this._x=(K+H)/G,this._y=(Y+U)/G,this._z=0.25*G}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(JJ(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let Z=Math.min(1,Q/$);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:Z,_z:K,_w:W}=J,X=Q._x,Y=Q._y,H=Q._z,U=Q._w;return this._x=$*U+W*X+Z*H-K*Y,this._y=Z*U+W*Y+K*X-$*H,this._z=K*U+W*H+$*Y-Z*X,this._w=W*U-$*X-Z*Y-K*H,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:Z,_z:K,_w:W}=J,X=this.dot(J);if(X<0)$=-$,Z=-Z,K=-K,W=-W,X=-X;let Y=1-Q;if(X<0.9995){let H=Math.acos(X),U=Math.sin(H);Y=Math.sin(Y*H)/U,Q=Math.sin(Q*H)/U,this._x=this._x*Y+$*Q,this._y=this._y*Y+Z*Q,this._z=this._z*Y+K*Q,this._w=this._w*Y+W*Q,this._onChangeCallback()}else this._x=this._x*Y+$*Q,this._y=this._y*Y+Z*Q,this._z=this._z*Y+K*Q,this._w=this._w*Y+W*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),Z=Math.sqrt(1-$),K=Math.sqrt($);return this.set(Z*Math.sin(J),Z*Math.cos(J),K*Math.sin(Q),K*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{static{j.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(TZ.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(TZ.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements;return this.x=K[0]*Q+K[3]*$+K[6]*Z,this.y=K[1]*Q+K[4]*$+K[7]*Z,this.z=K[2]*Q+K[5]*$+K[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements,W=1/(K[3]*Q+K[7]*$+K[11]*Z+K[15]);return this.x=(K[0]*Q+K[4]*$+K[8]*Z+K[12])*W,this.y=(K[1]*Q+K[5]*$+K[9]*Z+K[13])*W,this.z=(K[2]*Q+K[6]*$+K[10]*Z+K[14])*W,this}applyQuaternion(J){let Q=this.x,$=this.y,Z=this.z,K=J.x,W=J.y,X=J.z,Y=J.w,H=2*(W*Z-X*$),U=2*(X*Q-K*Z),N=2*(K*$-W*Q);return this.x=Q+Y*H+W*N-X*U,this.y=$+Y*U+X*H-K*N,this.z=Z+Y*N+K*U-W*H,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements;return this.x=K[0]*Q+K[4]*$+K[8]*Z,this.y=K[1]*Q+K[5]*$+K[9]*Z,this.z=K[2]*Q+K[6]*$+K[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=JJ(this.x,J.x,Q.x),this.y=JJ(this.y,J.y,Q.y),this.z=JJ(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=JJ(this.x,J,Q),this.y=JJ(this.y,J,Q),this.z=JJ(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(JJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:Z,z:K}=J,W=Q.x,X=Q.y,Y=Q.z;return this.x=Z*Y-K*X,this.y=K*W-$*Y,this.z=$*X-Z*W,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return WQ.copy(this).projectOnVector(J),this.sub(WQ)}reflect(J){return this.sub(WQ.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(JJ($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,Z=this.z-J.z;return Q*Q+$*$+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let Z=Math.sin(Q)*J;return this.x=Z*Math.sin($),this.y=Math.cos(Q)*J,this.z=Z*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=Z,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var WQ=new j,TZ=new y8;class c0{static{c0.prototype.isMatrix3=!0}constructor(J,Q,$,Z,K,W,X,Y,H){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,K,W,X,Y,H)}set(J,Q,$,Z,K,W,X,Y,H){let U=this.elements;return U[0]=J,U[1]=Z,U[2]=X,U[3]=Q,U[4]=K,U[5]=Y,U[6]=$,U[7]=W,U[8]=H,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,K=this.elements,W=$[0],X=$[3],Y=$[6],H=$[1],U=$[4],N=$[7],E=$[2],G=$[5],D=$[8],M=Z[0],I=Z[3],F=Z[6],q=Z[1],C=Z[4],A=Z[7],L=Z[2],_=Z[5],P=Z[8];return K[0]=W*M+X*q+Y*L,K[3]=W*I+X*C+Y*_,K[6]=W*F+X*A+Y*P,K[1]=H*M+U*q+N*L,K[4]=H*I+U*C+N*_,K[7]=H*F+U*A+N*P,K[2]=E*M+G*q+D*L,K[5]=E*I+G*C+D*_,K[8]=E*F+G*A+D*P,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],X=J[5],Y=J[6],H=J[7],U=J[8];return Q*W*U-Q*X*H-$*K*U+$*X*Y+Z*K*H-Z*W*Y}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],X=J[5],Y=J[6],H=J[7],U=J[8],N=U*W-X*H,E=X*Y-U*K,G=H*K-W*Y,D=Q*N+$*E+Z*G;if(D===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/D;return J[0]=N*M,J[1]=(Z*H-U*$)*M,J[2]=(X*$-Z*W)*M,J[3]=E*M,J[4]=(U*Q-Z*Y)*M,J[5]=(Z*K-X*Q)*M,J[6]=G*M,J[7]=($*Y-H*Q)*M,J[8]=(W*Q-$*K)*M,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,Z,K,W,X){let Y=Math.cos(K),H=Math.sin(K);return this.set($*Y,$*H,-$*(Y*W+H*X)+W+J,-Z*H,Z*Y,-Z*(-H*W+Y*X)+X+Q,0,0,1),this}scale(J,Q){return K9("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(XQ.makeScale(J,Q)),this}rotate(J){return K9("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(XQ.makeRotation(-J)),this}translate(J,Q){return K9("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(XQ.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<9;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var XQ=new c0,SZ=new c0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),jZ=new c0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function DX(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(K,W,X){if(this.enabled===!1||W===X||!W||!X)return K;if(this.spaces[W].transfer==="srgb")K.r=P8(K.r),K.g=P8(K.g),K.b=P8(K.b);if(this.spaces[W].primaries!==this.spaces[X].primaries)K.applyMatrix3(this.spaces[W].toXYZ),K.applyMatrix3(this.spaces[X].fromXYZ);if(this.spaces[X].transfer==="srgb")K.r=l9(K.r),K.g=l9(K.g),K.b=l9(K.b);return K},workingToColorSpace:function(K,W){return this.convert(K,this.workingColorSpace,W)},colorSpaceToWorking:function(K,W){return this.convert(K,W,this.workingColorSpace)},getPrimaries:function(K){return this.spaces[K].primaries},getTransfer:function(K){if(K==="")return"linear";return this.spaces[K].transfer},getToneMappingMode:function(K){return this.spaces[K].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(K,W=this.workingColorSpace){return K.fromArray(this.spaces[W].luminanceCoefficients)},define:function(K){Object.assign(this.spaces,K)},_getMatrix:function(K,W,X){return K.copy(this.spaces[W].toXYZ).multiply(this.spaces[X].fromXYZ)},_getDrawingBufferColorSpace:function(K){return this.spaces[K].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(K=this.workingColorSpace){return this.spaces[K].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(K,W){return K9("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(K,W)},toWorkingColorSpace:function(K,W){return K9("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(K,W)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:Z,transfer:"linear",toXYZ:SZ,fromXYZ:jZ,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:Z,transfer:"srgb",toXYZ:SZ,fromXYZ:jZ,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var QJ=DX();function P8(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function l9(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var w9;class _${static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(w9===void 0)w9=q7("canvas");w9.width=J.width,w9.height=J.height;let Z=w9.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);$=w9}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=q7("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let Z=$.getImageData(0,0,J.width,J.height),K=Z.data;for(let W=0;W<K.length;W++)K[W]=P8(K[W]/255)*255;return $.putImageData(Z,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(P8(Q[$]/255)*255);else Q[$]=P8(Q[$]);return{data:Q,width:J.width,height:J.height}}else return m0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var FX=0;class w7{constructor(J=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:FX++}),this.uuid=a9(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let K;if(Array.isArray(Z)){K=[];for(let W=0,X=Z.length;W<X;W++)if(Z[W].isDataTexture)K.push(YQ(Z[W].image));else K.push(YQ(Z[W]))}else K=YQ(Z);$.url=K}if(!Q)J.images[this.uuid]=$;return $}}function YQ(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return _$.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return m0("Texture: Unable to serialize Texture."),{}}var OX=0,HQ=new j;class fJ extends j8{constructor(J=fJ.DEFAULT_IMAGE,Q=fJ.DEFAULT_MAPPING,$=1001,Z=1001,K=1006,W=1008,X=1023,Y=1009,H=fJ.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:OX++}),this.uuid=a9(),this.name="",this.source=new w7(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=Z,this.magFilter=K,this.minFilter=W,this.anisotropy=H,this.format=X,this.internalFormat=null,this.type=Y,this.offset=new Z0(0,0),this.repeat=new Z0(1,1),this.center=new Z0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new c0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(HQ).x}get height(){return this.source.getSize(HQ).y}get depth(){return this.source.getSize(HQ).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){m0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){m0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(Z&&$&&(Z.isVector2&&$.isVector2))Z.copy($);else if(Z&&$&&(Z.isVector3&&$.isVector3))Z.copy($);else if(Z&&$&&(Z.isMatrix3&&$.isMatrix3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}fJ.DEFAULT_IMAGE=null;fJ.DEFAULT_MAPPING=300;fJ.DEFAULT_ANISOTROPY=1;class LJ{static{LJ.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,Z=1){this.x=J,this.y=Q,this.z=$,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,Z){return this.x=J,this.y=Q,this.z=$,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,K=this.w,W=J.elements;return this.x=W[0]*Q+W[4]*$+W[8]*Z+W[12]*K,this.y=W[1]*Q+W[5]*$+W[9]*Z+W[13]*K,this.z=W[2]*Q+W[6]*$+W[10]*Z+W[14]*K,this.w=W[3]*Q+W[7]*$+W[11]*Z+W[15]*K,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,Z,K,W=0.01,X=0.1,Y=J.elements,H=Y[0],U=Y[4],N=Y[8],E=Y[1],G=Y[5],D=Y[9],M=Y[2],I=Y[6],F=Y[10];if(Math.abs(U-E)<0.01&&Math.abs(N-M)<0.01&&Math.abs(D-I)<0.01){if(Math.abs(U+E)<0.1&&Math.abs(N+M)<0.1&&Math.abs(D+I)<0.1&&Math.abs(H+G+F-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let C=(H+1)/2,A=(G+1)/2,L=(F+1)/2,_=(U+E)/4,P=(N+M)/4,z=(D+I)/4;if(C>A&&C>L)if(C<0.01)$=0,Z=0.707106781,K=0.707106781;else $=Math.sqrt(C),Z=_/$,K=P/$;else if(A>L)if(A<0.01)$=0.707106781,Z=0,K=0.707106781;else Z=Math.sqrt(A),$=_/Z,K=z/Z;else if(L<0.01)$=0.707106781,Z=0.707106781,K=0;else K=Math.sqrt(L),$=P/K,Z=z/K;return this.set($,Z,K,Q),this}let q=Math.sqrt((I-D)*(I-D)+(N-M)*(N-M)+(E-U)*(E-U));if(Math.abs(q)<0.001)q=1;return this.x=(I-D)/q,this.y=(N-M)/q,this.z=(E-U)/q,this.w=Math.acos((H+G+F-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=JJ(this.x,J.x,Q.x),this.y=JJ(this.y,J.y,Q.y),this.z=JJ(this.z,J.z,Q.z),this.w=JJ(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=JJ(this.x,J,Q),this.y=JJ(this.y,J,Q),this.z=JJ(this.z,J,Q),this.w=JJ(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(JJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class A$ extends j8{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new LJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new LJ(0,0,J,Q),this.textures=[];let Z={width:J,height:Q,depth:$.depth},K=new fJ(Z),W=$.count;for(let X=0;X<W;X++)this.textures[X]=K.clone(),this.textures[X].isRenderTargetTexture=!0,this.textures[X].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveColorBuffer=$.resolveColorBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this.storeMultisampledColorBuffer=$.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=$.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=$.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview,this.useArrayDepthTexture=$.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(J!==null&&J.renderTarget===null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let Z=0,K=this.textures.length;Z<K;Z++)if(this.textures[Z].image.width=J,this.textures[Z].image.height=Q,this.textures[Z].image.depth=$,this.textures[Z].isData3DTexture!==!0)this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let Z=Object.assign({},J.textures[Q].image);this.textures[Q].source=new w7(Z)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveColorBuffer=J.resolveColorBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,this.storeMultisampledColorBuffer=J.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=J.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=J.storeMultisampledStencilBuffer,J.depthTexture!==null)if(J.depthTexture.renderTarget===J){let Q=J.depthTexture.clone();Q.renderTarget=null,this.depthTexture=Q}else this.depthTexture=J.depthTexture;return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class IJ extends A${constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class y6 extends fJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class C$ extends fJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}}class MJ{static{MJ.prototype.isMatrix4=!0}constructor(J,Q,$,Z,K,W,X,Y,H,U,N,E,G,D,M,I){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,K,W,X,Y,H,U,N,E,G,D,M,I)}set(J,Q,$,Z,K,W,X,Y,H,U,N,E,G,D,M,I){let F=this.elements;return F[0]=J,F[4]=Q,F[8]=$,F[12]=Z,F[1]=K,F[5]=W,F[9]=X,F[13]=Y,F[2]=H,F[6]=U,F[10]=N,F[14]=E,F[3]=G,F[7]=D,F[11]=M,F[15]=I,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new MJ().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,$=J.elements,Z=1/T9.setFromMatrixColumn(J,0).length(),K=1/T9.setFromMatrixColumn(J,1).length(),W=1/T9.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*Z,Q[1]=$[1]*Z,Q[2]=$[2]*Z,Q[3]=0,Q[4]=$[4]*K,Q[5]=$[5]*K,Q[6]=$[6]*K,Q[7]=0,Q[8]=$[8]*W,Q[9]=$[9]*W,Q[10]=$[10]*W,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,Z=J.y,K=J.z,W=Math.cos($),X=Math.sin($),Y=Math.cos(Z),H=Math.sin(Z),U=Math.cos(K),N=Math.sin(K);if(J.order==="XYZ"){let E=W*U,G=W*N,D=X*U,M=X*N;Q[0]=Y*U,Q[4]=-Y*N,Q[8]=H,Q[1]=G+D*H,Q[5]=E-M*H,Q[9]=-X*Y,Q[2]=M-E*H,Q[6]=D+G*H,Q[10]=W*Y}else if(J.order==="YXZ"){let E=Y*U,G=Y*N,D=H*U,M=H*N;Q[0]=E+M*X,Q[4]=D*X-G,Q[8]=W*H,Q[1]=W*N,Q[5]=W*U,Q[9]=-X,Q[2]=G*X-D,Q[6]=M+E*X,Q[10]=W*Y}else if(J.order==="ZXY"){let E=Y*U,G=Y*N,D=H*U,M=H*N;Q[0]=E-M*X,Q[4]=-W*N,Q[8]=D+G*X,Q[1]=G+D*X,Q[5]=W*U,Q[9]=M-E*X,Q[2]=-W*H,Q[6]=X,Q[10]=W*Y}else if(J.order==="ZYX"){let E=W*U,G=W*N,D=X*U,M=X*N;Q[0]=Y*U,Q[4]=D*H-G,Q[8]=E*H+M,Q[1]=Y*N,Q[5]=M*H+E,Q[9]=G*H-D,Q[2]=-H,Q[6]=X*Y,Q[10]=W*Y}else if(J.order==="YZX"){let E=W*Y,G=W*H,D=X*Y,M=X*H;Q[0]=Y*U,Q[4]=M-E*N,Q[8]=D*N+G,Q[1]=N,Q[5]=W*U,Q[9]=-X*U,Q[2]=-H*U,Q[6]=G*N+D,Q[10]=E-M*N}else if(J.order==="XZY"){let E=W*Y,G=W*H,D=X*Y,M=X*H;Q[0]=Y*U,Q[4]=-N,Q[8]=H*U,Q[1]=E*N+M,Q[5]=W*U,Q[9]=G*N-D,Q[2]=D*N-G,Q[6]=X*U,Q[10]=M*N+E}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(RX,J,MX)}lookAt(J,Q,$){let Z=this.elements;if(aJ.subVectors(J,Q),aJ.lengthSq()===0)aJ.z=1;if(aJ.normalize(),m8.crossVectors($,aJ),m8.lengthSq()===0){if(Math.abs($.z)===1)aJ.x+=0.0001;else aJ.z+=0.0001;aJ.normalize(),m8.crossVectors($,aJ)}return m8.normalize(),J6.crossVectors(aJ,m8),Z[0]=m8.x,Z[4]=J6.x,Z[8]=aJ.x,Z[1]=m8.y,Z[5]=J6.y,Z[9]=aJ.y,Z[2]=m8.z,Z[6]=J6.z,Z[10]=aJ.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,K=this.elements,W=$[0],X=$[4],Y=$[8],H=$[12],U=$[1],N=$[5],E=$[9],G=$[13],D=$[2],M=$[6],I=$[10],F=$[14],q=$[3],C=$[7],A=$[11],L=$[15],_=Z[0],P=Z[4],z=Z[8],O=Z[12],V=Z[1],h=Z[5],y=Z[9],b=Z[13],u=Z[2],w=Z[6],m=Z[10],o=Z[14],p=Z[3],W0=Z[7],c=Z[11],r=Z[15];return K[0]=W*_+X*V+Y*u+H*p,K[4]=W*P+X*h+Y*w+H*W0,K[8]=W*z+X*y+Y*m+H*c,K[12]=W*O+X*b+Y*o+H*r,K[1]=U*_+N*V+E*u+G*p,K[5]=U*P+N*h+E*w+G*W0,K[9]=U*z+N*y+E*m+G*c,K[13]=U*O+N*b+E*o+G*r,K[2]=D*_+M*V+I*u+F*p,K[6]=D*P+M*h+I*w+F*W0,K[10]=D*z+M*y+I*m+F*c,K[14]=D*O+M*b+I*o+F*r,K[3]=q*_+C*V+A*u+L*p,K[7]=q*P+C*h+A*w+L*W0,K[11]=q*z+C*y+A*m+L*c,K[15]=q*O+C*b+A*o+L*r,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],K=J[12],W=J[1],X=J[5],Y=J[9],H=J[13],U=J[2],N=J[6],E=J[10],G=J[14],D=J[3],M=J[7],I=J[11],F=J[15],q=Y*G-H*E,C=X*G-H*N,A=X*E-Y*N,L=W*G-H*U,_=W*E-Y*U,P=W*N-X*U;return Q*(M*q-I*C+F*A)-$*(D*q-I*L+F*_)+Z*(D*C-M*L+F*P)-K*(D*A-M*_+I*P)}determinantAffine(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],K=J[1],W=J[5],X=J[9],Y=J[2],H=J[6],U=J[10];return Q*(W*U-X*H)-$*(K*U-X*Y)+Z*(K*H-W*Y)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=Q,Z[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],X=J[5],Y=J[6],H=J[7],U=J[8],N=J[9],E=J[10],G=J[11],D=J[12],M=J[13],I=J[14],F=J[15],q=Q*X-$*W,C=Q*Y-Z*W,A=Q*H-K*W,L=$*Y-Z*X,_=$*H-K*X,P=Z*H-K*Y,z=U*M-N*D,O=U*I-E*D,V=U*F-G*D,h=N*I-E*M,y=N*F-G*M,b=E*F-G*I,u=q*b-C*y+A*h+L*V-_*O+P*z;if(u===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/u;return J[0]=(X*b-Y*y+H*h)*w,J[1]=(Z*y-$*b-K*h)*w,J[2]=(M*P-I*_+F*L)*w,J[3]=(E*_-N*P-G*L)*w,J[4]=(Y*V-W*b-H*O)*w,J[5]=(Q*b-Z*V+K*O)*w,J[6]=(I*A-D*P-F*C)*w,J[7]=(U*P-E*A+G*C)*w,J[8]=(W*y-X*V+H*z)*w,J[9]=($*V-Q*y-K*z)*w,J[10]=(D*_-M*A+F*q)*w,J[11]=(N*A-U*_-G*q)*w,J[12]=(X*O-W*h-Y*z)*w,J[13]=(Q*h-$*O+Z*z)*w,J[14]=(M*C-D*L-I*q)*w,J[15]=(U*L-N*C+E*q)*w,this}scale(J){let Q=this.elements,$=J.x,Z=J.y,K=J.z;return Q[0]*=$,Q[4]*=Z,Q[8]*=K,Q[1]*=$,Q[5]*=Z,Q[9]*=K,Q[2]*=$,Q[6]*=Z,Q[10]*=K,Q[3]*=$,Q[7]*=Z,Q[11]*=K,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,Z))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),K=1-$,W=J.x,X=J.y,Y=J.z,H=K*W,U=K*X;return this.set(H*W+$,H*X-Z*Y,H*Y+Z*X,0,H*X+Z*Y,U*X+$,U*Y-Z*W,0,H*Y-Z*X,U*Y+Z*W,K*Y*Y+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,Z,K,W){return this.set(1,$,K,0,J,1,W,0,Q,Z,1,0,0,0,0,1),this}compose(J,Q,$){let Z=this.elements,K=Q._x,W=Q._y,X=Q._z,Y=Q._w,H=K+K,U=W+W,N=X+X,E=K*H,G=K*U,D=K*N,M=W*U,I=W*N,F=X*N,q=Y*H,C=Y*U,A=Y*N,L=$.x,_=$.y,P=$.z;return Z[0]=(1-(M+F))*L,Z[1]=(G+A)*L,Z[2]=(D-C)*L,Z[3]=0,Z[4]=(G-A)*_,Z[5]=(1-(E+F))*_,Z[6]=(I+q)*_,Z[7]=0,Z[8]=(D+C)*P,Z[9]=(I-q)*P,Z[10]=(1-(E+M))*P,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,Q,$){let Z=this.elements;J.x=Z[12],J.y=Z[13],J.z=Z[14];let K=this.determinantAffine();if(K===0)return $.set(1,1,1),Q.identity(),this;let W=T9.set(Z[0],Z[1],Z[2]).length(),X=T9.set(Z[4],Z[5],Z[6]).length(),Y=T9.set(Z[8],Z[9],Z[10]).length();if(K<0)W=-W;K8.copy(this);let H=1/W,U=1/X,N=1/Y;return K8.elements[0]*=H,K8.elements[1]*=H,K8.elements[2]*=H,K8.elements[4]*=U,K8.elements[5]*=U,K8.elements[6]*=U,K8.elements[8]*=N,K8.elements[9]*=N,K8.elements[10]*=N,Q.setFromRotationMatrix(K8),$.x=W,$.y=X,$.z=Y,this}makePerspective(J,Q,$,Z,K,W,X=2000,Y=!1){let H=this.elements,U=2*K/(Q-J),N=2*K/($-Z),E=(Q+J)/(Q-J),G=($+Z)/($-Z),D,M;if(Y)D=K/(W-K),M=W*K/(W-K);else if(X===2000)D=-(W+K)/(W-K),M=-2*W*K/(W-K);else if(X===2001)D=-W/(W-K),M=-W*K/(W-K);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+X);return H[0]=U,H[4]=0,H[8]=E,H[12]=0,H[1]=0,H[5]=N,H[9]=G,H[13]=0,H[2]=0,H[6]=0,H[10]=D,H[14]=M,H[3]=0,H[7]=0,H[11]=-1,H[15]=0,this}makeOrthographic(J,Q,$,Z,K,W,X=2000,Y=!1){let H=this.elements,U=2/(Q-J),N=2/($-Z),E=-(Q+J)/(Q-J),G=-($+Z)/($-Z),D,M;if(Y)D=1/(W-K),M=W/(W-K);else if(X===2000)D=-2/(W-K),M=-(W+K)/(W-K);else if(X===2001)D=-1/(W-K),M=-K/(W-K);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+X);return H[0]=U,H[4]=0,H[8]=0,H[12]=E,H[1]=0,H[5]=N,H[9]=0,H[13]=G,H[2]=0,H[6]=0,H[10]=D,H[14]=M,H[3]=0,H[7]=0,H[11]=0,H[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<16;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var T9=new j,K8=new MJ,RX=new j(0,0,0),MX=new j(1,1,1),m8=new j,J6=new j,aJ=new j,yZ=new MJ,vZ=new y8;class w8{constructor(J=0,Q=0,$=0,Z=w8.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,Z=this._order){return this._x=J,this._y=Q,this._z=$,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let Z=J.elements,K=Z[0],W=Z[4],X=Z[8],Y=Z[1],H=Z[5],U=Z[9],N=Z[2],E=Z[6],G=Z[10];switch(Q){case"XYZ":if(this._y=Math.asin(JJ(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-U,G),this._z=Math.atan2(-W,K);else this._x=Math.atan2(E,H),this._z=0;break;case"YXZ":if(this._x=Math.asin(-JJ(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(X,G),this._z=Math.atan2(Y,H);else this._y=Math.atan2(-N,K),this._z=0;break;case"ZXY":if(this._x=Math.asin(JJ(E,-1,1)),Math.abs(E)<0.9999999)this._y=Math.atan2(-N,G),this._z=Math.atan2(-W,H);else this._y=0,this._z=Math.atan2(Y,K);break;case"ZYX":if(this._y=Math.asin(-JJ(N,-1,1)),Math.abs(N)<0.9999999)this._x=Math.atan2(E,G),this._z=Math.atan2(Y,K);else this._x=0,this._z=Math.atan2(-W,H);break;case"YZX":if(this._z=Math.asin(JJ(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,H),this._y=Math.atan2(-N,K);else this._x=0,this._y=Math.atan2(X,G);break;case"XZY":if(this._z=Math.asin(-JJ(W,-1,1)),Math.abs(W)<0.9999999)this._x=Math.atan2(E,H),this._y=Math.atan2(X,K);else this._x=Math.atan2(-U,G),this._y=0;break;default:m0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return yZ.makeRotationFromQuaternion(J),this.setFromRotationMatrix(yZ,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return vZ.setFromEuler(this),this.setFromQuaternion(vZ,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}w8.DEFAULT_ORDER="XYZ";class v6{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var LX=0,fZ=new j,S9=new y8,I8=new MJ,Q6=new j,X7=new j,kX=new j,VX=new y8,bZ=new j(1,0,0),hZ=new j(0,1,0),xZ=new j(0,0,1),gZ={type:"added"},BX={type:"removed"},j9={type:"childadded",child:null},UQ={type:"childremoved",child:null};class bJ extends j8{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:LX++}),this.uuid=a9(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bJ.DEFAULT_UP.clone();let J=new j,Q=new w8,$=new y8,Z=new j(1,1,1);function K(){$.setFromEuler(Q,!1)}function W(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(K),$._onChange(W),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new MJ},normalMatrix:{value:new c0}}),this.matrix=new MJ,this.matrixWorld=new MJ,this.matrixAutoUpdate=bJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new v6,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return S9.setFromAxisAngle(J,Q),this.quaternion.multiply(S9),this}rotateOnWorldAxis(J,Q){return S9.setFromAxisAngle(J,Q),this.quaternion.premultiply(S9),this}rotateX(J){return this.rotateOnAxis(bZ,J)}rotateY(J){return this.rotateOnAxis(hZ,J)}rotateZ(J){return this.rotateOnAxis(xZ,J)}translateOnAxis(J,Q){return fZ.copy(J).applyQuaternion(this.quaternion),this.position.add(fZ.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(bZ,J)}translateY(J){return this.translateOnAxis(hZ,J)}translateZ(J){return this.translateOnAxis(xZ,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(I8.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)Q6.copy(J);else Q6.set(J,Q,$);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),X7.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)I8.lookAt(X7,Q6,this.up);else I8.lookAt(Q6,X7,this.up);if(this.quaternion.setFromRotationMatrix(I8),Z)I8.extractRotation(Z.matrixWorld),S9.setFromRotationMatrix(I8),this.quaternion.premultiply(S9.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return l0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(gZ),j9.child=J,this.dispatchEvent(j9),j9.child=null;else l0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(BX),UQ.child=J,this.dispatchEvent(UQ),UQ.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),I8.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),I8.multiply(J.parent.matrixWorld);return J.applyMatrix4(I8),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(gZ),j9.child=J,this.dispatchEvent(j9),j9.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,Z=this.children.length;$<Z;$++){let W=this.children[$].getObjectByProperty(J,Q);if(W!==void 0)return W}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let Z=this.children;for(let K=0,W=Z.length;K<W;K++)Z[K].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(X7,J,kX),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(X7,VX,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(J){J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:Z}=J,K=this.matrix.elements;K[12]+=Q-K[0]*Q-K[4]*$-K[8]*Z,K[13]+=$-K[1]*Q-K[5]*$-K[9]*Z,K[14]+=Z-K[2]*Q-K[6]*$-K[10]*Z}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q,$=!1){let Z=this.parent;if(J===!0&&Z!==null)Z.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}if(Q===!0){let K=this.children;for(let W=0,X=K.length;W<X;W++)K[W].updateWorldMatrix(!1,!0,$)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,Z.name=this.name,Z.castShadow=this.castShadow,Z.receiveShadow=this.receiveShadow,Z.visible=this.visible,Z.frustumCulled=this.frustumCulled,Z.renderOrder=this.renderOrder,Z.static=this.static,Z.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.pivot!==null)Z.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)Z.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)Z.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((X)=>({...X,boundingBox:X.boundingBox?X.boundingBox.toJSON():void 0,boundingSphere:X.boundingSphere?X.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((X)=>({...X})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(J),Z.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function K(X,Y){if(X[Y.uuid]===void 0)X[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=K(J.geometries,this.geometry);let X=this.geometry.parameters;if(X!==void 0&&X.shapes!==void 0){let Y=X.shapes;if(Array.isArray(Y))for(let H=0,U=Y.length;H<U;H++){let N=Y[H];K(J.shapes,N)}else K(J.shapes,Y)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)K(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let X=[];for(let Y=0,H=this.material.length;Y<H;Y++)X.push(K(J.materials,this.material[Y]));Z.material=X}else Z.material=K(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let X=0;X<this.children.length;X++)Z.children.push(this.children[X].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let X=0;X<this.animations.length;X++){let Y=this.animations[X];Z.animations.push(K(J.animations,Y))}}if(Q){let X=W(J.geometries),Y=W(J.materials),H=W(J.textures),U=W(J.images),N=W(J.shapes),E=W(J.skeletons),G=W(J.animations),D=W(J.nodes);if(X.length>0)$.geometries=X;if(Y.length>0)$.materials=Y;if(H.length>0)$.textures=H;if(U.length>0)$.images=U;if(N.length>0)$.shapes=N;if(E.length>0)$.skeletons=E;if(G.length>0)$.animations=G;if(D.length>0)$.nodes=D}return $.object=Z,$;function W(X){let Y=[];for(let H in X){let U=X[H];delete U.metadata,Y.push(U)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let Z=J.children[$];this.add(Z.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}bJ.DEFAULT_UP=new j(0,1,0);bJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;bJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class O8 extends bJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var IX={type:"move"};class T7{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new O8,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new O8,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new O8,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let Z=null,K=null,W=null,X=this._targetRay,Y=this._grip,H=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(H&&J.hand){W=!0;for(let M of J.hand.values()){let I=Q.getJointPose(M,$),F=this._getHandJoint(H,M);if(I!==null)F.matrix.fromArray(I.transform.matrix),F.matrix.decompose(F.position,F.rotation,F.scale),F.matrixWorldNeedsUpdate=!0,F.jointRadius=I.radius;F.visible=I!==null}let U=H.joints["index-finger-tip"],N=H.joints["thumb-tip"],E=U.position.distanceTo(N.position),G=0.02,D=0.005;if(H.inputState.pinching&&E>G+D)H.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!H.inputState.pinching&&E<=G-D)H.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(K=Q.getPose(J.gripSpace,$),K!==null){if(Y.matrix.fromArray(K.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,K.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(K.linearVelocity);else Y.hasLinearVelocity=!1;if(K.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(K.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(X!==null){if(Z=Q.getPose(J.targetRaySpace,$),Z===null&&K!==null)Z=K;if(Z!==null){if(X.matrix.fromArray(Z.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,Z.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(Z.linearVelocity);else X.hasLinearVelocity=!1;if(Z.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(Z.angularVelocity);else X.hasAngularVelocity=!1;this.dispatchEvent(IX)}}}if(X!==null)X.visible=Z!==null;if(Y!==null)Y.visible=K!==null;if(H!==null)H.visible=W!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new O8;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var $W={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},l8={h:0,s:0,l:0},$6={h:0,s:0,l:0};function GQ(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class b0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,QJ.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,Z=QJ.workingColorSpace){return this.r=J,this.g=Q,this.b=$,QJ.colorSpaceToWorking(this,Z),this}setHSL(J,Q,$,Z=QJ.workingColorSpace){if(J=qX(J,1),Q=JJ(Q,0,1),$=JJ($,0,1),Q===0)this.r=this.g=this.b=$;else{let K=$<=0.5?$*(1+Q):$+Q-$*Q,W=2*$-K;this.r=GQ(W,K,J+0.3333333333333333),this.g=GQ(W,K,J),this.b=GQ(W,K,J-0.3333333333333333)}return QJ.colorSpaceToWorking(this,Z),this}setStyle(J,Q="srgb"){function $(K){if(K===void 0)return;if(parseFloat(K)<1)m0("Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let K,W=Z[1],X=Z[2];switch(W){case"rgb":case"rgba":if(K=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(K[4]),this.setRGB(Math.min(255,parseInt(K[1],10))/255,Math.min(255,parseInt(K[2],10))/255,Math.min(255,parseInt(K[3],10))/255,Q);if(K=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(K[4]),this.setRGB(Math.min(100,parseInt(K[1],10))/100,Math.min(100,parseInt(K[2],10))/100,Math.min(100,parseInt(K[3],10))/100,Q);break;case"hsl":case"hsla":if(K=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(X))return $(K[4]),this.setHSL(parseFloat(K[1])/360,parseFloat(K[2])/100,parseFloat(K[3])/100,Q);break;default:m0("Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let K=Z[1],W=K.length;if(W===3)return this.setRGB(parseInt(K.charAt(0),16)/15,parseInt(K.charAt(1),16)/15,parseInt(K.charAt(2),16)/15,Q);else if(W===6)return this.setHex(parseInt(K,16),Q);else m0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=$W[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else m0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=P8(J.r),this.g=P8(J.g),this.b=P8(J.b),this}copyLinearToSRGB(J){return this.r=l9(J.r),this.g=l9(J.g),this.b=l9(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return QJ.workingToColorSpace(lJ.copy(this),J),Math.round(JJ(lJ.r*255,0,255))*65536+Math.round(JJ(lJ.g*255,0,255))*256+Math.round(JJ(lJ.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=QJ.workingColorSpace){QJ.workingToColorSpace(lJ.copy(this),Q);let{r:$,g:Z,b:K}=lJ,W=Math.max($,Z,K),X=Math.min($,Z,K),Y,H,U=(X+W)/2;if(X===W)Y=0,H=0;else{let N=W-X;switch(H=U<=0.5?N/(W+X):N/(2-W-X),W){case $:Y=(Z-K)/N+(Z<K?6:0);break;case Z:Y=(K-$)/N+2;break;case K:Y=($-Z)/N+4;break}Y/=6}return J.h=Y,J.s=H,J.l=U,J}getRGB(J,Q=QJ.workingColorSpace){return QJ.workingToColorSpace(lJ.copy(this),Q),J.r=lJ.r,J.g=lJ.g,J.b=lJ.b,J}getStyle(J="srgb"){QJ.workingToColorSpace(lJ.copy(this),J);let{r:Q,g:$,b:Z}=lJ;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(Z*255)})`}offsetHSL(J,Q,$){return this.getHSL(l8),this.setHSL(l8.h+J,l8.s+Q,l8.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(l8),J.getHSL($6);let $=KQ(l8.h,$6.h,Q),Z=KQ(l8.s,$6.s,Q),K=KQ(l8.l,$6.l,Q);return this.setHSL($,Z,K),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,Z=this.b,K=J.elements;return this.r=K[0]*Q+K[3]*$+K[6]*Z,this.g=K[1]*Q+K[4]*$+K[7]*Z,this.b=K[2]*Q+K[5]*$+K[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var lJ=new b0;b0.NAMES=$W;class S7{constructor(J,Q=1,$=1000){this.isFog=!0,this.name="",this.color=new b0(J),this.near=Q,this.far=$}clone(){return new S7(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class j7 extends bJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new w8,this.environmentIntensity=1,this.environmentRotation=new w8,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();return Q.object.backgroundBlurriness=this.backgroundBlurriness,Q.object.backgroundIntensity=this.backgroundIntensity,Q.object.backgroundRotation=this.backgroundRotation.toArray(),Q.object.environmentIntensity=this.environmentIntensity,Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var W8=new j,_8=new j,NQ=new j,A8=new j,y9=new j,v9=new j,pZ=new j,EQ=new j,qQ=new j,DQ=new j,FQ=new LJ,OQ=new LJ,RQ=new LJ;class J8{constructor(J=new j,Q=new j,$=new j){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,Z){Z.subVectors($,Q),W8.subVectors(J,Q),Z.cross(W8);let K=Z.lengthSq();if(K>0)return Z.multiplyScalar(1/Math.sqrt(K));return Z.set(0,0,0)}static getBarycoord(J,Q,$,Z,K){W8.subVectors(Z,Q),_8.subVectors($,Q),NQ.subVectors(J,Q);let W=W8.dot(W8),X=W8.dot(_8),Y=W8.dot(NQ),H=_8.dot(_8),U=_8.dot(NQ),N=W*H-X*X;if(N===0)return K.set(0,0,0),null;let E=1/N,G=(H*Y-X*U)*E,D=(W*U-X*Y)*E;return K.set(1-G-D,D,G)}static containsPoint(J,Q,$,Z){if(this.getBarycoord(J,Q,$,Z,A8)===null)return!1;return A8.x>=0&&A8.y>=0&&A8.x+A8.y<=1}static getInterpolation(J,Q,$,Z,K,W,X,Y){if(this.getBarycoord(J,Q,$,Z,A8)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(K,A8.x),Y.addScaledVector(W,A8.y),Y.addScaledVector(X,A8.z),Y}static getInterpolatedAttribute(J,Q,$,Z,K,W){return FQ.setScalar(0),OQ.setScalar(0),RQ.setScalar(0),FQ.fromBufferAttribute(J,Q),OQ.fromBufferAttribute(J,$),RQ.fromBufferAttribute(J,Z),W.setScalar(0),W.addScaledVector(FQ,K.x),W.addScaledVector(OQ,K.y),W.addScaledVector(RQ,K.z),W}static isFrontFacing(J,Q,$,Z){return W8.subVectors($,Q),_8.subVectors(J,Q),W8.cross(_8).dot(Z)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,Z){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,Q,$,Z){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return W8.subVectors(this.c,this.b),_8.subVectors(this.a,this.b),W8.cross(_8).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return J8.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return J8.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,Z,K){return J8.getInterpolation(J,this.a,this.b,this.c,Q,$,Z,K)}containsPoint(J){return J8.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return J8.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,Z=this.b,K=this.c,W,X;y9.subVectors(Z,$),v9.subVectors(K,$),EQ.subVectors(J,$);let Y=y9.dot(EQ),H=v9.dot(EQ);if(Y<=0&&H<=0)return Q.copy($);qQ.subVectors(J,Z);let U=y9.dot(qQ),N=v9.dot(qQ);if(U>=0&&N<=U)return Q.copy(Z);let E=Y*N-U*H;if(E<=0&&Y>=0&&U<=0)return W=Y/(Y-U),Q.copy($).addScaledVector(y9,W);DQ.subVectors(J,K);let G=y9.dot(DQ),D=v9.dot(DQ);if(D>=0&&G<=D)return Q.copy(K);let M=G*H-Y*D;if(M<=0&&H>=0&&D<=0)return X=H/(H-D),Q.copy($).addScaledVector(v9,X);let I=U*D-G*N;if(I<=0&&N-U>=0&&G-D>=0)return pZ.subVectors(K,Z),X=(N-U)/(N-U+(G-D)),Q.copy(Z).addScaledVector(pZ,X);let F=1/(I+M+E);return W=M*F,X=E*F,Q.copy($).addScaledVector(y9,W).addScaledVector(v9,X)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class O9{constructor(J=new j(1/0,1/0,1/0),Q=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(X8.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(X8.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=X8.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let K=$.getAttribute("position");if(Q===!0&&K!==void 0&&J.isInstancedMesh!==!0)for(let W=0,X=K.count;W<X;W++){if(J.isMesh===!0)J.getVertexPosition(W,X8);else X8.fromBufferAttribute(K,W);X8.applyMatrix4(J.matrixWorld),this.expandByPoint(X8)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();Z6.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();Z6.copy($.boundingBox)}Z6.applyMatrix4(J.matrixWorld),this.union(Z6)}}let Z=J.children;for(let K=0,W=Z.length;K<W;K++)this.expandByObject(Z[K],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,X8),X8.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(Y7),K6.subVectors(this.max,Y7),f9.subVectors(J.a,Y7),b9.subVectors(J.b,Y7),h9.subVectors(J.c,Y7),d8.subVectors(b9,f9),u8.subVectors(h9,b9),e8.subVectors(f9,h9);let Q=[0,-d8.z,d8.y,0,-u8.z,u8.y,0,-e8.z,e8.y,d8.z,0,-d8.x,u8.z,0,-u8.x,e8.z,0,-e8.x,-d8.y,d8.x,0,-u8.y,u8.x,0,-e8.y,e8.x,0];if(!MQ(Q,f9,b9,h9,K6))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!MQ(Q,f9,b9,h9,K6))return!1;return W6.crossVectors(d8,u8),Q=[W6.x,W6.y,W6.z],MQ(Q,f9,b9,h9,K6)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,X8).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(X8).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return C8[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),C8[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),C8[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),C8[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),C8[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),C8[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),C8[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),C8[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(C8),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var C8=[new j,new j,new j,new j,new j,new j,new j,new j],X8=new j,Z6=new O9,f9=new j,b9=new j,h9=new j,d8=new j,u8=new j,e8=new j,Y7=new j,K6=new j,W6=new j,J9=new j;function MQ(J,Q,$,Z,K){for(let W=0,X=J.length-3;W<=X;W+=3){J9.fromArray(J,W);let Y=K.x*Math.abs(J9.x)+K.y*Math.abs(J9.y)+K.z*Math.abs(J9.z),H=Q.dot(J9),U=$.dot(J9),N=Z.dot(J9);if(Math.max(-Math.max(H,U,N),Math.min(H,U,N))>Y)return!1}return!0}var zJ=new j,X6=new Z0,_X=0;class Y8 extends j8{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_X++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let Z=0,K=this.itemSize;Z<K;Z++)this.array[J+Z]=Q.array[$+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)X6.fromBufferAttribute(this,Q),X6.applyMatrix3(J),this.setXY(Q,X6.x,X6.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)zJ.fromBufferAttribute(this,Q),zJ.applyMatrix3(J),this.setXYZ(Q,zJ.x,zJ.y,zJ.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)zJ.fromBufferAttribute(this,Q),zJ.applyMatrix4(J),this.setXYZ(Q,zJ.x,zJ.y,zJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)zJ.fromBufferAttribute(this,Q),zJ.applyNormalMatrix(J),this.setXYZ(Q,zJ.x,zJ.y,zJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)zJ.fromBufferAttribute(this,Q),zJ.transformDirection(J),this.setXYZ(Q,zJ.x,zJ.y,zJ.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=W7($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=sJ($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=W7(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=sJ(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=W7(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=sJ(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=W7(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=sJ(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=W7(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=sJ(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=sJ(Q,this.array),$=sJ($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J*=this.itemSize,this.normalized)Q=sJ(Q,this.array),$=sJ($,this.array),Z=sJ(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this}setXYZW(J,Q,$,Z,K){if(J*=this.itemSize,this.normalized)Q=sJ(Q,this.array),$=sJ($,this.array),Z=sJ(Z,this.array),K=sJ(K,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this.array[J+3]=K,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return J.name=this.name,J.usage=this.usage,J.gpuType=this.gpuType,J}dispose(){this.dispatchEvent({type:"dispose"})}}class f6 extends Y8{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class b6 extends Y8{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class HJ extends Y8{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var AX=new O9,H7=new j,LQ=new j;class y7{constructor(J=new j,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else AX.setFromPoints(J).getCenter($);let Z=0;for(let K=0,W=J.length;K<W;K++)Z=Math.max(Z,$.distanceToSquared(J[K]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;H7.subVectors(J,this.center);let Q=H7.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),Z=($-this.radius)*0.5;this.center.addScaledVector(H7,Z/$),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else LQ.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(H7.copy(J.center).add(LQ)),this.expandByPoint(H7.copy(J.center).sub(LQ));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var CX=0,eJ=new MJ,kQ=new bJ,x9=new j,rJ=new O9,U7=new O9,jJ=new j;class yJ extends j8{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:CX++}),this.uuid=a9(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((NX(J))?b6:f6)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let K=new c0().getNormalMatrix(J);$.applyNormalMatrix(K),$.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return eJ.makeRotationFromQuaternion(J),this.applyMatrix4(eJ),this}rotateX(J){return eJ.makeRotationX(J),this.applyMatrix4(eJ),this}rotateY(J){return eJ.makeRotationY(J),this.applyMatrix4(eJ),this}rotateZ(J){return eJ.makeRotationZ(J),this.applyMatrix4(eJ),this}translate(J,Q,$){return eJ.makeTranslation(J,Q,$),this.applyMatrix4(eJ),this}scale(J,Q,$){return eJ.makeScale(J,Q,$),this.applyMatrix4(eJ),this}lookAt(J){return kQ.lookAt(J),kQ.updateMatrix(),this.applyMatrix4(kQ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(x9).negate(),this.translate(x9.x,x9.y,x9.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let Z=0,K=J.length;Z<K;Z++){let W=J[Z];$.push(W.x,W.y,W.z||0)}this.setAttribute("position",new HJ($,3))}else{let $=Math.min(J.length,Q.count);for(let Z=0;Z<$;Z++){let K=J[Z];Q.setXYZ(Z,K.x,K.y,K.z||0)}if(J.length>Q.count)m0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new O9;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){l0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,Z=Q.length;$<Z;$++){let K=Q[$];if(rJ.setFromBufferAttribute(K),this.morphTargetsRelative)jJ.addVectors(this.boundingBox.min,rJ.min),this.boundingBox.expandByPoint(jJ),jJ.addVectors(this.boundingBox.max,rJ.max),this.boundingBox.expandByPoint(jJ);else this.boundingBox.expandByPoint(rJ.min),this.boundingBox.expandByPoint(rJ.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))l0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new y7;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){l0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(J){let $=this.boundingSphere.center;if(rJ.setFromBufferAttribute(J),Q)for(let K=0,W=Q.length;K<W;K++){let X=Q[K];if(U7.setFromBufferAttribute(X),this.morphTargetsRelative)jJ.addVectors(rJ.min,U7.min),rJ.expandByPoint(jJ),jJ.addVectors(rJ.max,U7.max),rJ.expandByPoint(jJ);else rJ.expandByPoint(U7.min),rJ.expandByPoint(U7.max)}rJ.getCenter($);let Z=0;for(let K=0,W=J.count;K<W;K++)jJ.fromBufferAttribute(J,K),Z=Math.max(Z,$.distanceToSquared(jJ));if(Q)for(let K=0,W=Q.length;K<W;K++){let X=Q[K],Y=this.morphTargetsRelative;for(let H=0,U=X.count;H<U;H++){if(jJ.fromBufferAttribute(X,H),Y)x9.fromBufferAttribute(J,H),jJ.add(x9);Z=Math.max(Z,$.distanceToSquared(jJ))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))l0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){l0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:Z,uv:K}=Q,W=this.getAttribute("tangent");if(W===void 0||W.count!==$.count)W=new Y8(new Float32Array(4*$.count),4),this.setAttribute("tangent",W);let X=[],Y=[];for(let z=0;z<$.count;z++)X[z]=new j,Y[z]=new j;let H=new j,U=new j,N=new j,E=new Z0,G=new Z0,D=new Z0,M=new j,I=new j;function F(z,O,V){H.fromBufferAttribute($,z),U.fromBufferAttribute($,O),N.fromBufferAttribute($,V),E.fromBufferAttribute(K,z),G.fromBufferAttribute(K,O),D.fromBufferAttribute(K,V),U.sub(H),N.sub(H),G.sub(E),D.sub(E);let h=1/(G.x*D.y-D.x*G.y);if(!isFinite(h))return;M.copy(U).multiplyScalar(D.y).addScaledVector(N,-G.y).multiplyScalar(h),I.copy(N).multiplyScalar(G.x).addScaledVector(U,-D.x).multiplyScalar(h),X[z].add(M),X[O].add(M),X[V].add(M),Y[z].add(I),Y[O].add(I),Y[V].add(I)}let q=this.groups;if(q.length===0)q=[{start:0,count:J.count}];for(let z=0,O=q.length;z<O;++z){let V=q[z],h=V.start,y=V.count;for(let b=h,u=h+y;b<u;b+=3)F(J.getX(b+0),J.getX(b+1),J.getX(b+2))}let C=new j,A=new j,L=new j,_=new j;function P(z){L.fromBufferAttribute(Z,z),_.copy(L);let O=X[z];C.copy(O),C.sub(L.multiplyScalar(L.dot(O))).normalize(),A.crossVectors(_,O);let h=A.dot(Y[z])<0?-1:1;W.setXYZW(z,C.x,C.y,C.z,h)}for(let z=0,O=q.length;z<O;++z){let V=q[z],h=V.start,y=V.count;for(let b=h,u=h+y;b<u;b+=3)P(J.getX(b+0)),P(J.getX(b+1)),P(J.getX(b+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0||$.count!==Q.count)$=new Y8(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let E=0,G=$.count;E<G;E++)$.setXYZ(E,0,0,0);let Z=new j,K=new j,W=new j,X=new j,Y=new j,H=new j,U=new j,N=new j;if(J)for(let E=0,G=J.count;E<G;E+=3){let D=J.getX(E+0),M=J.getX(E+1),I=J.getX(E+2);Z.fromBufferAttribute(Q,D),K.fromBufferAttribute(Q,M),W.fromBufferAttribute(Q,I),U.subVectors(W,K),N.subVectors(Z,K),U.cross(N),X.fromBufferAttribute($,D),Y.fromBufferAttribute($,M),H.fromBufferAttribute($,I),X.add(U),Y.add(U),H.add(U),$.setXYZ(D,X.x,X.y,X.z),$.setXYZ(M,Y.x,Y.y,Y.z),$.setXYZ(I,H.x,H.y,H.z)}else for(let E=0,G=Q.count;E<G;E+=3)Z.fromBufferAttribute(Q,E+0),K.fromBufferAttribute(Q,E+1),W.fromBufferAttribute(Q,E+2),U.subVectors(W,K),N.subVectors(Z,K),U.cross(N),$.setXYZ(E+0,U.x,U.y,U.z),$.setXYZ(E+1,U.x,U.y,U.z),$.setXYZ(E+2,U.x,U.y,U.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)jJ.fromBufferAttribute(J,Q),jJ.normalize(),J.setXYZ(Q,jJ.x,jJ.y,jJ.z)}toNonIndexed(){function J(X,Y){let{array:H,itemSize:U,normalized:N}=X,E=new H.constructor(Y.length*U),G=0,D=0;for(let M=0,I=Y.length;M<I;M++){if(X.isInterleavedBufferAttribute)G=Y[M]*X.data.stride+X.offset;else G=Y[M]*U;for(let F=0;F<U;F++)E[D++]=H[G++]}return new Y8(E,U,N)}if(this.index===null)return m0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new yJ,$=this.index.array,Z=this.attributes;for(let X in Z){let Y=Z[X],H=J(Y,$);Q.setAttribute(X,H)}let K=this.morphAttributes;for(let X in K){let Y=[],H=K[X];for(let U=0,N=H.length;U<N;U++){let E=H[U],G=J(E,$);Y.push(G)}Q.morphAttributes[X]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;for(let X=0,Y=W.length;X<Y;X++){let H=W[X];Q.addGroup(H.start,H.count,H.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,J.name=this.name,Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let H in Y)if(Y[H]!==void 0)J[H]=Y[H];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let Y in $){let H=$[Y];J.data.attributes[Y]=H.toJSON(J.data)}let Z={},K=!1;for(let Y in this.morphAttributes){let H=this.morphAttributes[Y],U=[];for(let N=0,E=H.length;N<E;N++){let G=H[N];U.push(G.toJSON(J.data))}if(U.length>0)Z[Y]=U,K=!0}if(K)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;if(W.length>0)J.data.groups=JSON.parse(JSON.stringify(W));let X=this.boundingSphere;if(X!==null)J.data.boundingSphere=X.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let Z=J.attributes;for(let H in Z){let U=Z[H];this.setAttribute(H,U.clone(Q))}let K=J.morphAttributes;for(let H in K){let U=[],N=K[H];for(let E=0,G=N.length;E<G;E++)U.push(N[E].clone(Q));this.morphAttributes[H]=U}this.morphTargetsRelative=J.morphTargetsRelative;let W=J.groups;for(let H=0,U=W.length;H<U;H++){let N=W[H];this.addGroup(N.start,N.count,N.materialIndex)}let X=J.boundingBox;if(X!==null)this.boundingBox=X.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}var VQ=new j,zX=new j,PX=new c0;class F8{constructor(J=new j(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,Z){return this.normal.set(J,Q,$),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let Z=VQ.subVectors($,Q).cross(zX.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let Z=J.delta(VQ),K=this.normal.dot(Z);if(K===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/K;if($===!0&&(W<0||W>1))return null;return Q.copy(J.start).addScaledVector(Z,W)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||PX.getNormalMatrix(J),Z=this.coplanarPoint(VQ).applyMatrix4(J),K=this.normal.applyMatrix3($).normalize();return this.constant=-Z.dot(K),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(J){return this.normal.fromArray(J.normal),this.constant=J.constant,this}}var wX=0;class R9 extends j8{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:wX++}),this.uuid=a9(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new b0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){m0(`Material: parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){m0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set($);else if(Z&&Z.isVector2&&($&&$.isVector2)||Z&&Z.isEuler&&($&&$.isEuler)||Z&&Z.isVector3&&($&&$.isVector3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,$.blending=this.blending,$.side=this.side,$.shadowSide=this.shadowSide,$.vertexColors=this.vertexColors,$.opacity=this.opacity,$.transparent=this.transparent,$.blendSrc=this.blendSrc,$.blendDst=this.blendDst,$.blendEquation=this.blendEquation,$.blendSrcAlpha=this.blendSrcAlpha,$.blendDstAlpha=this.blendDstAlpha,$.blendEquationAlpha=this.blendEquationAlpha,$.blendColor=this.blendColor.getHex(),$.blendAlpha=this.blendAlpha,$.depthFunc=this.depthFunc,$.depthTest=this.depthTest,$.depthWrite=this.depthWrite,$.colorWrite=this.colorWrite,$.clipIntersection=this.clipIntersection,$.clipShadows=this.clipShadows,$.stencilWriteMask=this.stencilWriteMask,$.stencilFunc=this.stencilFunc,$.stencilRef=this.stencilRef,$.stencilFuncMask=this.stencilFuncMask,$.stencilFail=this.stencilFail,$.stencilZFail=this.stencilZFail,$.stencilZPass=this.stencilZPass,$.stencilWrite=this.stencilWrite,$.polygonOffset=this.polygonOffset,$.polygonOffsetFactor=this.polygonOffsetFactor,$.polygonOffsetUnits=this.polygonOffsetUnits,$.dithering=this.dithering,$.alphaTest=this.alphaTest,$.alphaHash=this.alphaHash,$.alphaToCoverage=this.alphaToCoverage,$.premultipliedAlpha=this.premultipliedAlpha,$.forceSinglePass=this.forceSinglePass,$.allowOverride=this.allowOverride,$.visible=this.visible,$.toneMapped=this.toneMapped,$.name=this.name,this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)$.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)$.clippingPlanes=this.clippingPlanes.map((K)=>K.toJSON());if(this.rotation!==void 0)$.rotation=this.rotation;if(this.depthPacking!==void 0)$.depthPacking=this.depthPacking;if(this.linewidth!==void 0)$.linewidth=this.linewidth;if(this.linecap!==void 0)$.linecap=this.linecap;if(this.linejoin!==void 0)$.linejoin=this.linejoin;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.wireframe!==void 0)$.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)$.flatShading=this.flatShading;if(this.fog!==void 0)$.fog=this.fog;if(Object.keys(this.userData).length>0)$.userData=this.userData;function Z(K){let W=[];for(let X in K){let Y=K[X];delete Y.metadata,W.push(Y)}return W}if(Q){let K=Z(J.textures),W=Z(J.images);if(K.length>0)$.textures=K;if(W.length>0)$.images=W}return $}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new b0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.retroreflectivity!==void 0)this.retroreflectivity=J.retroreflectivity;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.clippingPlanes!==void 0)this.clippingPlanes=J.clippingPlanes.map(($)=>new F8().fromJSON($));if(J.clipIntersection!==void 0)this.clipIntersection=J.clipIntersection;if(J.clipShadows!==void 0)this.clipShadows=J.clipShadows;if(J.depthPacking!==void 0)this.depthPacking=J.depthPacking;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.linecap!==void 0)this.linecap=J.linecap;if(J.linejoin!==void 0)this.linejoin=J.linejoin;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let $=J.normalScale;if(Array.isArray($)===!1)$=[$,$];this.normalScale=new Z0().fromArray($)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new Z0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let Z=Q.length;$=Array(Z);for(let K=0;K!==Z;++K)$[K]=Q[K].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var z8=new j,BQ=new j,Y6=new j,H6=new j;class z${constructor(J=new j,Q=new j(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,z8)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=z8.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return z8.copy(this.origin).addScaledVector(this.direction,Q),z8.distanceToSquared(J)}distanceSqToSegment(J,Q,$,Z){BQ.copy(J).add(Q).multiplyScalar(0.5),Y6.copy(Q).sub(J).normalize(),H6.copy(this.origin).sub(BQ);let K=J.distanceTo(Q)*0.5,W=-this.direction.dot(Y6),X=H6.dot(this.direction),Y=-H6.dot(Y6),H=H6.lengthSq(),U=Math.abs(1-W*W),N,E,G,D;if(U>0)if(N=W*Y-X,E=W*X-Y,D=K*U,N>=0)if(E>=-D)if(E<=D){let M=1/U;N*=M,E*=M,G=N*(N+W*E+2*X)+E*(W*N+E+2*Y)+H}else E=K,N=Math.max(0,-(W*E+X)),G=-N*N+E*(E+2*Y)+H;else E=-K,N=Math.max(0,-(W*E+X)),G=-N*N+E*(E+2*Y)+H;else if(E<=-D)N=Math.max(0,-(-W*K+X)),E=N>0?-K:Math.min(Math.max(-K,-Y),K),G=-N*N+E*(E+2*Y)+H;else if(E<=D)N=0,E=Math.min(Math.max(-K,-Y),K),G=E*(E+2*Y)+H;else N=Math.max(0,-(W*K+X)),E=N>0?K:Math.min(Math.max(-K,-Y),K),G=-N*N+E*(E+2*Y)+H;else E=W>0?-K:K,N=Math.max(0,-(W*E+X)),G=-N*N+E*(E+2*Y)+H;if($)$.copy(this.origin).addScaledVector(this.direction,N);if(Z)Z.copy(BQ).addScaledVector(Y6,E);return G}intersectSphere(J,Q){if(J.radius<0)return null;z8.subVectors(J.center,this.origin);let $=z8.dot(this.direction),Z=z8.dot(z8)-$*$,K=J.radius*J.radius;if(Z>K)return null;let W=Math.sqrt(K-Z),X=$-W,Y=$+W;if(Y<0)return null;if(X<0)return this.at(Y,Q);return this.at(X,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,Z,K,W,X,Y,H=1/this.direction.x,U=1/this.direction.y,N=1/this.direction.z,E=this.origin;if(H>=0)$=(J.min.x-E.x)*H,Z=(J.max.x-E.x)*H;else $=(J.max.x-E.x)*H,Z=(J.min.x-E.x)*H;if(U>=0)K=(J.min.y-E.y)*U,W=(J.max.y-E.y)*U;else K=(J.max.y-E.y)*U,W=(J.min.y-E.y)*U;if($>W||K>Z)return null;if(K>$||isNaN($))$=K;if(W<Z||isNaN(Z))Z=W;if(N>=0)X=(J.min.z-E.z)*N,Y=(J.max.z-E.z)*N;else X=(J.max.z-E.z)*N,Y=(J.min.z-E.z)*N;if($>Y||X>Z)return null;if(X>$||$!==$)$=X;if(Y<Z||Z!==Z)Z=Y;if(Z<0)return null;return this.at($>=0?$:Z,Q)}intersectsBox(J){return this.intersectBox(J,z8)!==null}intersectTriangle(J,Q,$,Z,K){let W=this.origin,X=this.direction,Y=X.x,H=X.y,U=X.z,N=J.x-W.x,E=J.y-W.y,G=J.z-W.z,D=Q.x-W.x,M=Q.y-W.y,I=Q.z-W.z,F=$.x-W.x,q=$.y-W.y,C=$.z-W.z,A=Math.abs(Y),L=Math.abs(H),_=Math.abs(U),P,z,O,V,h,y,b,u,w,m,o,p;if(A>=L&&A>=_)if(O=Y,y=N,w=D,p=F,Y>=0)P=H,z=U,V=E,h=G,b=M,u=I,m=q,o=C;else P=U,z=H,V=G,h=E,b=I,u=M,m=C,o=q;else if(L>=_)if(O=H,y=E,w=M,p=q,H>=0)P=U,z=Y,V=G,h=N,b=I,u=D,m=C,o=F;else P=Y,z=U,V=N,h=G,b=D,u=I,m=F,o=C;else if(O=U,y=G,w=I,p=C,U>=0)P=Y,z=H,V=N,h=E,b=D,u=M,m=F,o=q;else P=H,z=Y,V=E,h=N,b=M,u=D,m=q,o=F;if(O===0)return null;let W0=P/O,c=z/O,r=1/O,Q0=V-W0*y,T0=h-c*y,S0=b-W0*w,WJ=u-c*w,n0=m-W0*p,n=o-c*p,K0=n0*WJ-n*S0,X0=Q0*n-T0*n0,j0=S0*T0-WJ*Q0;if(Z){if(K0<0||X0<0||j0<0)return null}else if((K0<0||X0<0||j0<0)&&(K0>0||X0>0||j0>0))return null;let x0=K0+X0+j0;if(x0===0)return null;let B0=r*(K0*y+X0*w+j0*p);if(x0>0?B0<0:B0>0)return null;return this.at(B0/x0,K)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class G8 extends R9{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new b0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new w8,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var mZ=new MJ,Q9=new z$,U6=new y7,lZ=new j,G6=new j,N6=new j,E6=new j,IQ=new j,q6=new j,dZ=new j,D6=new j;class kJ extends bJ{constructor(J=new yJ,Q=new G8){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,W=Z.length;K<W;K++){let X=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[X]=K}}}}getVertexPosition(J,Q){let $=this.geometry,Z=$.attributes.position,K=$.morphAttributes.position,W=$.morphTargetsRelative;Q.fromBufferAttribute(Z,J);let X=this.morphTargetInfluences;if(K&&X){q6.set(0,0,0);for(let Y=0,H=K.length;Y<H;Y++){let U=X[Y],N=K[Y];if(U===0)continue;if(IQ.fromBufferAttribute(N,J),W)q6.addScaledVector(IQ,U);else q6.addScaledVector(IQ.sub(Q),U)}Q.add(q6)}return Q}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,Z=this.material,K=this.matrixWorld;if(Z===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(U6.copy($.boundingSphere),U6.applyMatrix4(K),Q9.copy(J.ray).recast(J.near),U6.containsPoint(Q9.origin)===!1){if(Q9.intersectSphere(U6,lZ)===null)return;if(Q9.origin.distanceToSquared(lZ)>(J.far-J.near)**2)return}if(mZ.copy(K).invert(),Q9.copy(J.ray).applyMatrix4(mZ),$.boundingBox!==null){if(Q9.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,Q9)}_computeIntersections(J,Q,$){let Z,K=this.geometry,W=this.material,X=K.index,Y=K.attributes.position,H=K.attributes.uv,U=K.attributes.uv1,N=K.attributes.normal,E=K.groups,G=K.drawRange;if(X!==null)if(Array.isArray(W))for(let D=0,M=E.length;D<M;D++){let I=E[D],F=W[I.materialIndex],q=Math.max(I.start,G.start),C=Math.min(X.count,Math.min(I.start+I.count,G.start+G.count));for(let A=q,L=C;A<L;A+=3){let _=X.getX(A),P=X.getX(A+1),z=X.getX(A+2);if(Z=F6(this,F,J,$,H,U,N,_,P,z),Z)Z.faceIndex=Math.floor(A/3),Z.face.materialIndex=I.materialIndex,Q.push(Z)}}else{let D=Math.max(0,G.start),M=Math.min(X.count,G.start+G.count);for(let I=D,F=M;I<F;I+=3){let q=X.getX(I),C=X.getX(I+1),A=X.getX(I+2);if(Z=F6(this,W,J,$,H,U,N,q,C,A),Z)Z.faceIndex=Math.floor(I/3),Q.push(Z)}}else if(Y!==void 0)if(Array.isArray(W))for(let D=0,M=E.length;D<M;D++){let I=E[D],F=W[I.materialIndex],q=Math.max(I.start,G.start),C=Math.min(Y.count,Math.min(I.start+I.count,G.start+G.count));for(let A=q,L=C;A<L;A+=3){let _=A,P=A+1,z=A+2;if(Z=F6(this,F,J,$,H,U,N,_,P,z),Z)Z.faceIndex=Math.floor(A/3),Z.face.materialIndex=I.materialIndex,Q.push(Z)}}else{let D=Math.max(0,G.start),M=Math.min(Y.count,G.start+G.count);for(let I=D,F=M;I<F;I+=3){let q=I,C=I+1,A=I+2;if(Z=F6(this,W,J,$,H,U,N,q,C,A),Z)Z.faceIndex=Math.floor(I/3),Q.push(Z)}}}}function TX(J,Q,$,Z,K,W,X,Y){let H;if(Q.side===1)H=Z.intersectTriangle(X,W,K,!0,Y);else H=Z.intersectTriangle(K,W,X,Q.side===0,Y);if(H===null)return null;D6.copy(Y),D6.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(D6);if(U<$.near||U>$.far)return null;return{distance:U,point:D6.clone(),object:J}}function F6(J,Q,$,Z,K,W,X,Y,H,U){J.getVertexPosition(Y,G6),J.getVertexPosition(H,N6),J.getVertexPosition(U,E6);let N=TX(J,Q,$,Z,G6,N6,E6,dZ);if(N){let E=new j;if(J8.getBarycoord(dZ,G6,N6,E6,E),K)N.uv=J8.getInterpolatedAttribute(K,Y,H,U,E,new Z0);if(W)N.uv1=J8.getInterpolatedAttribute(W,Y,H,U,E,new Z0);if(X){if(N.normal=J8.getInterpolatedAttribute(X,Y,H,U,E,new j),N.normal.dot(Z.direction)>0)N.normal.multiplyScalar(-1)}let G={a:Y,b:H,c:U,normal:new j,materialIndex:0};J8.getNormal(G6,N6,E6,G.normal),N.face=G,N.barycoord=E}return N}class P$ extends fJ{constructor(J=null,Q=1,$=1,Z,K,W,X,Y,H=1003,U=1003,N,E){super(null,W,X,Y,H,U,Z,K,N,E);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var $9=new y7,SX=new Z0(0.5,0.5),O6=new j;class v7{constructor(J=new F8,Q=new F8,$=new F8,Z=new F8,K=new F8,W=new F8){this.planes=[J,Q,$,Z,K,W]}set(J,Q,$,Z,K,W){let X=this.planes;return X[0].copy(J),X[1].copy(Q),X[2].copy($),X[3].copy(Z),X[4].copy(K),X[5].copy(W),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let Z=this.planes,K=J.elements,W=K[0],X=K[1],Y=K[2],H=K[3],U=K[4],N=K[5],E=K[6],G=K[7],D=K[8],M=K[9],I=K[10],F=K[11],q=K[12],C=K[13],A=K[14],L=K[15];if(Z[0].setComponents(H-W,G-U,F-D,L-q).normalize(),Z[1].setComponents(H+W,G+U,F+D,L+q).normalize(),Z[2].setComponents(H+X,G+N,F+M,L+C).normalize(),Z[3].setComponents(H-X,G-N,F-M,L-C).normalize(),$)Z[4].setComponents(Y,E,I,A).normalize(),Z[5].setComponents(H-Y,G-E,F-I,L-A).normalize();else if(Z[4].setComponents(H-Y,G-E,F-I,L-A).normalize(),Q===2000)Z[5].setComponents(H+Y,G+E,F+I,L+A).normalize();else if(Q===2001)Z[5].setComponents(Y,E,I,A).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();$9.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();$9.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere($9)}intersectsSprite(J){$9.center.set(0,0,0);let Q=SX.distanceTo(J.center);return $9.radius=0.7071067811865476+Q,$9.applyMatrix4(J.matrixWorld),this.intersectsSphere($9)}intersectsSphere(J){let Q=this.planes,$=J.center,Z=-J.radius;for(let K=0;K<6;K++)if(Q[K].distanceToPoint($)<Z)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let Z=Q[$];if(O6.x=Z.normal.x>0?J.max.x:J.min.x,O6.y=Z.normal.y>0?J.max.y:J.min.y,O6.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(O6)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class h6 extends fJ{constructor(J=[],Q=301,$,Z,K,W,X,Y,H,U){super(J,Q,$,Z,K,W,X,Y,H,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class M8 extends fJ{constructor(J,Q,$,Z,K,W,X,Y,H){super(J,Q,$,Z,K,W,X,Y,H);this.isCanvasTexture=!0,this.needsUpdate=!0}}class v8 extends fJ{constructor(J,Q,$=1014,Z,K,W,X=1003,Y=1003,H,U=1026,N=1){if(U!==1026&&U!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let E={width:J,height:Q,depth:N};super(E,Z,K,W,X,Y,U,$,H);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new w7(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);return Q.compareFunction=this.compareFunction,Q}}class w$ extends v8{constructor(J,Q=1014,$=301,Z,K,W=1003,X=1003,Y,H=1026){let U={width:J,height:J,depth:1},N=[U,U,U,U,U,U];super(J,J,Q,$,Z,K,W,X,Y,H);this.image=N,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class x6 extends fJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class r9 extends yJ{constructor(J=1,Q=1,$=1,Z=1,K=1,W=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:Z,heightSegments:K,depthSegments:W};let X=this;Z=Math.floor(Z),K=Math.floor(K),W=Math.floor(W);let Y=[],H=[],U=[],N=[],E=0,G=0;D("z","y","x",-1,-1,$,Q,J,W,K,0),D("z","y","x",1,-1,$,Q,-J,W,K,1),D("x","z","y",1,1,J,$,Q,Z,W,2),D("x","z","y",1,-1,J,$,-Q,Z,W,3),D("x","y","z",1,-1,J,Q,$,Z,K,4),D("x","y","z",-1,-1,J,Q,-$,Z,K,5),this.setIndex(Y),this.setAttribute("position",new HJ(H,3)),this.setAttribute("normal",new HJ(U,3)),this.setAttribute("uv",new HJ(N,2));function D(M,I,F,q,C,A,L,_,P,z,O){let V=A/P,h=L/z,y=A/2,b=L/2,u=_/2,w=P+1,m=z+1,o=0,p=0,W0=new j;for(let c=0;c<m;c++){let r=c*h-b;for(let Q0=0;Q0<w;Q0++){let T0=Q0*V-y;W0[M]=T0*q,W0[I]=r*C,W0[F]=u,H.push(W0.x,W0.y,W0.z),W0[M]=0,W0[I]=0,W0[F]=_>0?1:-1,U.push(W0.x,W0.y,W0.z),N.push(Q0/P),N.push(1-c/z),o+=1}}for(let c=0;c<z;c++)for(let r=0;r<P;r++){let Q0=E+r+w*c,T0=E+r+w*(c+1),S0=E+(r+1)+w*(c+1),WJ=E+(r+1)+w*c;Y.push(Q0,T0,WJ),Y.push(T0,S0,WJ),p+=6}X.addGroup(G,p,O),G+=p,E+=o}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new r9(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class f7 extends yJ{constructor(J=1,Q=1,$=4,Z=8,K=1){super();this.type="CapsuleGeometry",this.parameters={radius:J,height:Q,capSegments:$,radialSegments:Z,heightSegments:K},Q=Math.max(0,Q),$=Math.max(1,Math.floor($)),Z=Math.max(3,Math.floor(Z)),K=Math.max(1,Math.floor(K));let W=[],X=[],Y=[],H=[],U=Q/2,N=Math.PI/2*J,E=Q,G=2*N+E,D=$*2+K,M=Z+1,I=new j,F=new j;for(let q=0;q<=D;q++){let C=0,A=0,L=0,_=0;if(q<=$){let O=q/$,V=O*Math.PI/2;A=-U-J*Math.cos(V),L=J*Math.sin(V),_=-J*Math.cos(V),C=O*N}else if(q<=$+K){let O=(q-$)/K;A=-U+O*Q,L=J,_=0,C=N+O*E}else{let O=(q-$-K)/$,V=O*Math.PI/2;A=U+J*Math.sin(V),L=J*Math.cos(V),_=J*Math.sin(V),C=N+E+O*N}let P=Math.max(0,Math.min(1,C/G)),z=0;if(q===0)z=0.5/Z;else if(q===D)z=-0.5/Z;for(let O=0;O<=Z;O++){let V=O/Z,h=V*Math.PI*2,y=Math.sin(h),b=Math.cos(h);F.x=-L*b,F.y=A,F.z=L*y,X.push(F.x,F.y,F.z),I.set(-L*b,_,L*y),I.normalize(),Y.push(I.x,I.y,I.z),H.push(V+z,P)}if(q>0){let O=(q-1)*M;for(let V=0;V<Z;V++){let h=O+V,y=O+V+1,b=q*M+V,u=q*M+V+1;W.push(h,y,b),W.push(y,u,b)}}}this.setIndex(W),this.setAttribute("position",new HJ(X,3)),this.setAttribute("normal",new HJ(Y,3)),this.setAttribute("uv",new HJ(H,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new f7(J.radius,J.height,J.capSegments,J.radialSegments,J.heightSegments)}}class b7 extends yJ{constructor(J=1,Q=32,$=0,Z=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:J,segments:Q,thetaStart:$,thetaLength:Z},Q=Math.max(3,Q);let K=[],W=[],X=[],Y=[],H=new j,U=new Z0;W.push(0,0,0),X.push(0,0,1),Y.push(0.5,0.5);for(let N=0,E=3;N<=Q;N++,E+=3){let G=$+N/Q*Z;H.x=J*Math.cos(G),H.y=J*Math.sin(G),W.push(H.x,H.y,H.z),X.push(0,0,1),U.x=(W[E]/J+1)/2,U.y=(W[E+1]/J+1)/2,Y.push(U.x,U.y)}for(let N=1;N<=Q;N++)K.push(N,N+1,0);this.setIndex(K),this.setAttribute("position",new HJ(W,3)),this.setAttribute("normal",new HJ(X,3)),this.setAttribute("uv",new HJ(Y,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new b7(J.radius,J.segments,J.thetaStart,J.thetaLength)}}class h7 extends yJ{constructor(J=1,Q=1,$=1,Z=32,K=1,W=!1,X=0,Y=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Q,height:$,radialSegments:Z,heightSegments:K,openEnded:W,thetaStart:X,thetaLength:Y};let H=this;Z=Math.floor(Z),K=Math.floor(K);let U=[],N=[],E=[],G=[],D=0,M=[],I=$/2,F=0;if(q(),W===!1){if(J>0)C(!0);if(Q>0)C(!1)}this.setIndex(U),this.setAttribute("position",new HJ(N,3)),this.setAttribute("normal",new HJ(E,3)),this.setAttribute("uv",new HJ(G,2));function q(){let A=new j,L=new j,_=0,P=(Q-J)/$;for(let z=0;z<=K;z++){let O=[],V=z/K,h=V*(Q-J)+J;for(let y=0;y<=Z;y++){let b=y/Z,u=b*Y+X,w=Math.sin(u),m=Math.cos(u);L.x=h*w,L.y=-V*$+I,L.z=h*m,N.push(L.x,L.y,L.z),A.set(w,P,m).normalize(),E.push(A.x,A.y,A.z),G.push(b,1-V),O.push(D++)}M.push(O)}for(let z=0;z<Z;z++)for(let O=0;O<K;O++){let V=M[O][z],h=M[O+1][z],y=M[O+1][z+1],b=M[O][z+1];if(J>0||O!==0)U.push(V,h,b),_+=3;if(Q>0||O!==K-1)U.push(h,y,b),_+=3}H.addGroup(F,_,0),F+=_}function C(A){let L=D,_=new Z0,P=new j,z=0,O=A===!0?J:Q,V=A===!0?1:-1;for(let y=1;y<=Z;y++)N.push(0,I*V,0),E.push(0,V,0),G.push(0.5,0.5),D++;let h=D;for(let y=0;y<=Z;y++){let u=y/Z*Y+X,w=Math.cos(u),m=Math.sin(u);P.x=O*m,P.y=I*V,P.z=O*w,N.push(P.x,P.y,P.z),E.push(0,V,0),_.x=w*0.5+0.5,_.y=m*0.5*V+0.5,G.push(_.x,_.y),D++}for(let y=0;y<Z;y++){let b=L+y,u=h+y;if(A===!0)U.push(u,u+1,b);else U.push(u+1,u,b);z+=3}H.addGroup(F,z,A===!0?1:2),F+=z}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new h7(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class $8{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){m0("Curve: .getPoint() not implemented.")}getPointAt(J,Q){let $=this.getUtoTmapping(J);return this.getPoint($,Q)}getPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPoint($/J));return Q}getSpacedPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPointAt($/J));return Q}getLength(){let J=this.getLengths();return J[J.length-1]}getLengths(J=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===J+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let Q=[],$,Z=this.getPoint(0),K=0;Q.push(0);for(let W=1;W<=J;W++)$=this.getPoint(W/J),K+=$.distanceTo(Z),Q.push(K),Z=$;return this.cacheArcLengths=Q,Q}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(J,Q=null){let $=this.getLengths(),Z=0,K=$.length,W;if(Q)W=Q;else W=J*$[K-1];let X=0,Y=K-1,H;while(X<=Y)if(Z=Math.floor(X+(Y-X)/2),H=$[Z]-W,H<0)X=Z+1;else if(H>0)Y=Z-1;else{Y=Z;break}if(Z=Y,$[Z]===W)return Z/(K-1);let U=$[Z],E=$[Z+1]-U,G=(W-U)/E;return(Z+G)/(K-1)}getTangent(J,Q){let Z=J-0.0001,K=J+0.0001;if(Z<0)Z=0;if(K>1)K=1;let W=this.getPoint(Z),X=this.getPoint(K),Y=Q||(W.isVector2?new Z0:new j);return Y.copy(X).sub(W).normalize(),Y}getTangentAt(J,Q){let $=this.getUtoTmapping(J);return this.getTangent($,Q)}computeFrenetFrames(J,Q=!1){let $=new j,Z=[],K=[],W=[],X=new j,Y=new MJ;for(let G=0;G<=J;G++){let D=G/J;Z[G]=this.getTangentAt(D,new j)}K[0]=new j,W[0]=new j;let H=Number.MAX_VALUE,U=Math.abs(Z[0].x),N=Math.abs(Z[0].y),E=Math.abs(Z[0].z);if(U<=H)H=U,$.set(1,0,0);if(N<=H)H=N,$.set(0,1,0);if(E<=H)$.set(0,0,1);X.crossVectors(Z[0],$).normalize(),K[0].crossVectors(Z[0],X),W[0].crossVectors(Z[0],K[0]);for(let G=1;G<=J;G++){if(K[G]=K[G-1].clone(),W[G]=W[G-1].clone(),X.crossVectors(Z[G-1],Z[G]),X.length()>Number.EPSILON){X.normalize();let D=Math.acos(JJ(Z[G-1].dot(Z[G]),-1,1));K[G].applyMatrix4(Y.makeRotationAxis(X,D))}W[G].crossVectors(Z[G],K[G])}if(Q===!0){let G=Math.acos(JJ(K[0].dot(K[J]),-1,1));if(G/=J,Z[0].dot(X.crossVectors(K[0],K[J]))>0)G=-G;for(let D=1;D<=J;D++)K[D].applyMatrix4(Y.makeRotationAxis(Z[D],G*D)),W[D].crossVectors(Z[D],K[D])}return{tangents:Z,normals:K,binormals:W}}clone(){return new this.constructor().copy(this)}copy(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}toJSON(){let J={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return J.arcLengthDivisions=this.arcLengthDivisions,J.type=this.type,J}fromJSON(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}}class x7 extends $8{constructor(J=0,Q=0,$=1,Z=1,K=0,W=Math.PI*2,X=!1,Y=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=J,this.aY=Q,this.xRadius=$,this.yRadius=Z,this.aStartAngle=K,this.aEndAngle=W,this.aClockwise=X,this.aRotation=Y}getPoint(J,Q=new Z0){let $=Q,Z=Math.PI*2,K=this.aEndAngle-this.aStartAngle,W=Math.abs(K)<Number.EPSILON;while(K<0)K+=Z;while(K>Z)K-=Z;if(K<Number.EPSILON)if(W)K=0;else K=Z;if(this.aClockwise===!0&&!W)if(K===Z)K=-Z;else K=K-Z;let X=this.aStartAngle+J*K,Y=this.aX+this.xRadius*Math.cos(X),H=this.aY+this.yRadius*Math.sin(X);if(this.aRotation!==0){let U=Math.cos(this.aRotation),N=Math.sin(this.aRotation),E=Y-this.aX,G=H-this.aY;Y=E*U-G*N+this.aX,H=E*N+G*U+this.aY}return $.set(Y,H)}copy(J){return super.copy(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}toJSON(){let J=super.toJSON();return J.aX=this.aX,J.aY=this.aY,J.xRadius=this.xRadius,J.yRadius=this.yRadius,J.aStartAngle=this.aStartAngle,J.aEndAngle=this.aEndAngle,J.aClockwise=this.aClockwise,J.aRotation=this.aRotation,J}fromJSON(J){return super.fromJSON(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}}class T$ extends x7{constructor(J,Q,$,Z,K,W){super(J,Q,$,$,Z,K,W);this.isArcCurve=!0,this.type="ArcCurve"}}function S$(){let J=0,Q=0,$=0,Z=0;function K(W,X,Y,H){J=W,Q=Y,$=-3*W+3*X-2*Y-H,Z=2*W-2*X+Y+H}return{initCatmullRom:function(W,X,Y,H,U){K(X,Y,U*(Y-W),U*(H-X))},initNonuniformCatmullRom:function(W,X,Y,H,U,N,E){let G=(X-W)/U-(Y-W)/(U+N)+(Y-X)/N,D=(Y-X)/N-(H-X)/(N+E)+(H-Y)/E;G*=N,D*=N,K(X,Y,G,D)},calc:function(W){let X=W*W,Y=X*W;return J+Q*W+$*X+Z*Y}}}var uZ=new j,cZ=new j,_Q=new S$,AQ=new S$,CQ=new S$;class j$ extends $8{constructor(J=[],Q=!1,$="centripetal",Z=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=J,this.closed=Q,this.curveType=$,this.tension=Z}getPoint(J,Q=new j){let $=Q,Z=this.points,K=Z.length,W=(K-(this.closed?0:1))*J,X=Math.floor(W),Y=W-X;if(this.closed)X+=X>0?0:(Math.floor(Math.abs(X)/K)+1)*K;else if(Y===0&&X===K-1)X=K-2,Y=1;let H,U;if(this.closed||X>0)H=Z[(X-1)%K];else cZ.subVectors(Z[0],Z[1]).add(Z[0]),H=cZ;let N=Z[X%K],E=Z[(X+1)%K];if(this.closed||X+2<K)U=Z[(X+2)%K];else uZ.subVectors(Z[K-1],Z[K-2]).add(Z[K-1]),U=uZ;if(this.curveType==="centripetal"||this.curveType==="chordal"){let G=this.curveType==="chordal"?0.5:0.25,D=Math.pow(H.distanceToSquared(N),G),M=Math.pow(N.distanceToSquared(E),G),I=Math.pow(E.distanceToSquared(U),G);if(M<0.0001)M=1;if(D<0.0001)D=M;if(I<0.0001)I=M;_Q.initNonuniformCatmullRom(H.x,N.x,E.x,U.x,D,M,I),AQ.initNonuniformCatmullRom(H.y,N.y,E.y,U.y,D,M,I),CQ.initNonuniformCatmullRom(H.z,N.z,E.z,U.z,D,M,I)}else if(this.curveType==="catmullrom")_Q.initCatmullRom(H.x,N.x,E.x,U.x,this.tension),AQ.initCatmullRom(H.y,N.y,E.y,U.y,this.tension),CQ.initCatmullRom(H.z,N.z,E.z,U.z,this.tension);return $.set(_Q.calc(Y),AQ.calc(Y),CQ.calc(Y)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(Z.clone())}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let Z=this.points[Q];J.points.push(Z.toArray())}return J.closed=this.closed,J.curveType=this.curveType,J.tension=this.tension,J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(new j().fromArray(Z))}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}}function nZ(J,Q,$,Z,K){let W=(Z-Q)*0.5,X=(K-$)*0.5,Y=J*J,H=J*Y;return(2*$-2*Z+W+X)*H+(-3*$+3*Z-2*W-X)*Y+W*J+$}function jX(J,Q){let $=1-J;return $*$*Q}function yX(J,Q){return 2*(1-J)*J*Q}function vX(J,Q){return J*J*Q}function N7(J,Q,$,Z){return jX(J,Q)+yX(J,$)+vX(J,Z)}function fX(J,Q){let $=1-J;return $*$*$*Q}function bX(J,Q){let $=1-J;return 3*$*$*J*Q}function hX(J,Q){return 3*(1-J)*J*J*Q}function xX(J,Q){return J*J*J*Q}function E7(J,Q,$,Z,K){return fX(J,Q)+bX(J,$)+hX(J,Z)+xX(J,K)}class g6 extends $8{constructor(J=new Z0,Q=new Z0,$=new Z0,Z=new Z0){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=J,this.v1=Q,this.v2=$,this.v3=Z}getPoint(J,Q=new Z0){let $=Q,Z=this.v0,K=this.v1,W=this.v2,X=this.v3;return $.set(E7(J,Z.x,K.x,W.x,X.x),E7(J,Z.y,K.y,W.y,X.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class y$ extends $8{constructor(J=new j,Q=new j,$=new j,Z=new j){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=J,this.v1=Q,this.v2=$,this.v3=Z}getPoint(J,Q=new j){let $=Q,Z=this.v0,K=this.v1,W=this.v2,X=this.v3;return $.set(E7(J,Z.x,K.x,W.x,X.x),E7(J,Z.y,K.y,W.y,X.y),E7(J,Z.z,K.z,W.z,X.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class p6 extends $8{constructor(J=new Z0,Q=new Z0){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=J,this.v2=Q}getPoint(J,Q=new Z0){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new Z0){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class v$ extends $8{constructor(J=new j,Q=new j){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=J,this.v2=Q}getPoint(J,Q=new j){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new j){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class m6 extends $8{constructor(J=new Z0,Q=new Z0,$=new Z0){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new Z0){let $=Q,Z=this.v0,K=this.v1,W=this.v2;return $.set(N7(J,Z.x,K.x,W.x),N7(J,Z.y,K.y,W.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class f$ extends $8{constructor(J=new j,Q=new j,$=new j){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new j){let $=Q,Z=this.v0,K=this.v1,W=this.v2;return $.set(N7(J,Z.x,K.x,W.x),N7(J,Z.y,K.y,W.y),N7(J,Z.z,K.z,W.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class l6 extends $8{constructor(J=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=J}getPoint(J,Q=new Z0){let $=Q,Z=this.points,K=(Z.length-1)*J,W=Math.floor(K),X=K-W,Y=Z[W===0?W:W-1],H=Z[W],U=Z[W>Z.length-2?Z.length-1:W+1],N=Z[W>Z.length-3?Z.length-1:W+2];return $.set(nZ(X,Y.x,H.x,U.x,N.x),nZ(X,Y.y,H.y,U.y,N.y)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(Z.clone())}return this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let Z=this.points[Q];J.points.push(Z.toArray())}return J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(new Z0().fromArray(Z))}return this}}var wQ=Object.freeze({__proto__:null,ArcCurve:T$,CatmullRomCurve3:j$,CubicBezierCurve:g6,CubicBezierCurve3:y$,EllipseCurve:x7,LineCurve:p6,LineCurve3:v$,QuadraticBezierCurve:m6,QuadraticBezierCurve3:f$,SplineCurve:l6});class b$ extends $8{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(J){this.curves.push(J)}closePath(){let J=this.curves[0].getPoint(0),Q=this.curves[this.curves.length-1].getPoint(1);if(!J.equals(Q)){let $=J.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wQ[$](Q,J))}return this}getPoint(J,Q){let $=J*this.getLength(),Z=this.getCurveLengths(),K=0;while(K<Z.length){if(Z[K]>=$){let W=Z[K]-$,X=this.curves[K],Y=X.getLength(),H=Y===0?0:1-W/Y;return X.getPointAt(H,Q)}K++}return null}getLength(){let J=this.getCurveLengths();return J[J.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let J=[],Q=0;for(let $=0,Z=this.curves.length;$<Z;$++)Q+=this.curves[$].getLength(),J.push(Q);return this.cacheLengths=J,J}getSpacedPoints(J=40){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPoint($/J));if(this.autoClose)Q.push(Q[0]);return Q}getPoints(J=12){let Q=[],$;for(let Z=0,K=this.curves;Z<K.length;Z++){let W=K[Z],X=W.isEllipseCurve?J*2:W.isLineCurve||W.isLineCurve3?1:W.isSplineCurve?J*W.points.length:J,Y=W.getPoints(X);for(let H=0;H<Y.length;H++){let U=Y[H];if($&&$.equals(U))continue;Q.push(U),$=U}}if(this.autoClose&&Q.length>1&&!Q[Q.length-1].equals(Q[0]))Q.push(Q[0]);return Q}copy(J){super.copy(J),this.curves=[];for(let Q=0,$=J.curves.length;Q<$;Q++){let Z=J.curves[Q];this.curves.push(Z.clone())}return this.autoClose=J.autoClose,this}toJSON(){let J=super.toJSON();J.autoClose=this.autoClose,J.curves=[];for(let Q=0,$=this.curves.length;Q<$;Q++){let Z=this.curves[Q];J.curves.push(Z.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.autoClose=J.autoClose,this.curves=[];for(let Q=0,$=J.curves.length;Q<$;Q++){let Z=J.curves[Q];this.curves.push(new wQ[Z.type]().fromJSON(Z))}return this}}class V6 extends b${constructor(J){super();if(this.type="Path",this.currentPoint=new Z0,J)this.setFromPoints(J)}setFromPoints(J){this.moveTo(J[0].x,J[0].y);for(let Q=1,$=J.length;Q<$;Q++)this.lineTo(J[Q].x,J[Q].y);return this}moveTo(J,Q){return this.currentPoint.set(J,Q),this}lineTo(J,Q){let $=new p6(this.currentPoint.clone(),new Z0(J,Q));return this.curves.push($),this.currentPoint.set(J,Q),this}quadraticCurveTo(J,Q,$,Z){let K=new m6(this.currentPoint.clone(),new Z0(J,Q),new Z0($,Z));return this.curves.push(K),this.currentPoint.set($,Z),this}bezierCurveTo(J,Q,$,Z,K,W){let X=new g6(this.currentPoint.clone(),new Z0(J,Q),new Z0($,Z),new Z0(K,W));return this.curves.push(X),this.currentPoint.set(K,W),this}splineThru(J){let Q=[this.currentPoint.clone()].concat(J),$=new l6(Q);return this.curves.push($),this.currentPoint.copy(J[J.length-1]),this}arc(J,Q,$,Z,K,W){let X=this.currentPoint.x,Y=this.currentPoint.y;return this.absarc(J+X,Q+Y,$,Z,K,W),this}absarc(J,Q,$,Z,K,W){return this.absellipse(J,Q,$,$,Z,K,W),this}ellipse(J,Q,$,Z,K,W,X,Y){let H=this.currentPoint.x,U=this.currentPoint.y;return this.absellipse(J+H,Q+U,$,Z,K,W,X,Y),this}absellipse(J,Q,$,Z,K,W,X,Y){let H=new x7(J,Q,$,Z,K,W,X,Y);if(this.curves.length>0){let N=H.getPoint(0);if(!N.equals(this.currentPoint))this.lineTo(N.x,N.y)}this.curves.push(H);let U=H.getPoint(1);return this.currentPoint.copy(U),this}copy(J){return super.copy(J),this.currentPoint.copy(J.currentPoint),this}toJSON(){let J=super.toJSON();return J.currentPoint=this.currentPoint.toArray(),J}fromJSON(J){return super.fromJSON(J),this.currentPoint.fromArray(J.currentPoint),this}}class g7 extends V6{constructor(J){super(J);this.uuid=a9(),this.type="Shape",this.holes=[]}getPointsHoles(J){let Q=[];for(let $=0,Z=this.holes.length;$<Z;$++)Q[$]=this.holes[$].getPoints(J);return Q}extractPoints(J){return{shape:this.getPoints(J),holes:this.getPointsHoles(J)}}copy(J){super.copy(J),this.holes=[];for(let Q=0,$=J.holes.length;Q<$;Q++){let Z=J.holes[Q];this.holes.push(Z.clone())}return this}toJSON(){let J=super.toJSON();J.uuid=this.uuid,J.holes=[];for(let Q=0,$=this.holes.length;Q<$;Q++){let Z=this.holes[Q];J.holes.push(Z.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.uuid=J.uuid,this.holes=[];for(let Q=0,$=J.holes.length;Q<$;Q++){let Z=J.holes[Q];this.holes.push(new V6().fromJSON(Z))}return this}}function gX(J,Q,$=2){let Z=Q&&Q.length,K=Z?Q[0]*$:J.length,W=ZW(J,0,K,$,!0),X=[];if(!W||W.next===W.prev)return X;let Y,H,U;if(Z)W=uX(J,Q,W,$);if(J.length>80*$){Y=J[0],H=J[1];let N=Y,E=H;for(let G=$;G<K;G+=$){let D=J[G],M=J[G+1];if(D<Y)Y=D;if(M<H)H=M;if(D>N)N=D;if(M>E)E=M}U=Math.max(N-Y,E-H),U=U!==0?32767/U:0}return F7(W,X,$,Y,H,U,0),X}function ZW(J,Q,$,Z,K){let W;if(K===QY(J,Q,$,Z)>0)for(let X=Q;X<$;X+=Z)W=sZ(X/Z|0,J[X],J[X+1],W);else for(let X=$-Z;X>=Q;X-=Z)W=sZ(X/Z|0,J[X],J[X+1],W);if(W&&u9(W,W.next))R7(W),W=W.next;return W}function W9(J,Q){if(!J)return J;if(!Q)Q=J;let $=J,Z;do if(Z=!1,!$.steiner&&(u9($,$.next)||BJ($.prev,$,$.next)===0)){if(R7($),$=Q=$.prev,$===$.next)break;Z=!0}else $=$.next;while(Z||$!==Q);return Q}function F7(J,Q,$,Z,K,W,X){if(!J)return;if(!X&&W)oX(J,Z,K,W);let Y=J;while(J.prev!==J.next){let{prev:H,next:U}=J;if(W?mX(J,Z,K,W):pX(J)){Q.push(H.i,J.i,U.i),R7(J),J=U.next,Y=U.next;continue}if(J=U,J===Y){if(!X)F7(W9(J),Q,$,Z,K,W,1);else if(X===1)J=lX(W9(J),Q),F7(J,Q,$,Z,K,W,2);else if(X===2)dX(J,Q,$,Z,K,W);break}}}function pX(J){let Q=J.prev,$=J,Z=J.next;if(BJ(Q,$,Z)>=0)return!1;let K=Q.x,W=$.x,X=Z.x,Y=Q.y,H=$.y,U=Z.y,N=Math.min(K,W,X),E=Math.min(Y,H,U),G=Math.max(K,W,X),D=Math.max(Y,H,U),M=Z.next;while(M!==Q){if(M.x>=N&&M.x<=G&&M.y>=E&&M.y<=D&&G7(K,Y,W,H,X,U,M.x,M.y)&&BJ(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function mX(J,Q,$,Z){let K=J.prev,W=J,X=J.next;if(BJ(K,W,X)>=0)return!1;let Y=K.x,H=W.x,U=X.x,N=K.y,E=W.y,G=X.y,D=Math.min(Y,H,U),M=Math.min(N,E,G),I=Math.max(Y,H,U),F=Math.max(N,E,G),q=TQ(D,M,Q,$,Z),C=TQ(I,F,Q,$,Z),A=J.prevZ,L=J.nextZ;while(A&&A.z>=q&&L&&L.z<=C){if(A.x>=D&&A.x<=I&&A.y>=M&&A.y<=F&&A!==K&&A!==X&&G7(Y,N,H,E,U,G,A.x,A.y)&&BJ(A.prev,A,A.next)>=0)return!1;if(A=A.prevZ,L.x>=D&&L.x<=I&&L.y>=M&&L.y<=F&&L!==K&&L!==X&&G7(Y,N,H,E,U,G,L.x,L.y)&&BJ(L.prev,L,L.next)>=0)return!1;L=L.nextZ}while(A&&A.z>=q){if(A.x>=D&&A.x<=I&&A.y>=M&&A.y<=F&&A!==K&&A!==X&&G7(Y,N,H,E,U,G,A.x,A.y)&&BJ(A.prev,A,A.next)>=0)return!1;A=A.prevZ}while(L&&L.z<=C){if(L.x>=D&&L.x<=I&&L.y>=M&&L.y<=F&&L!==K&&L!==X&&G7(Y,N,H,E,U,G,L.x,L.y)&&BJ(L.prev,L,L.next)>=0)return!1;L=L.nextZ}return!0}function lX(J,Q){let $=J;do{let Z=$.prev,K=$.next.next;if(!u9(Z,K)&&WW(Z,$,$.next,K)&&O7(Z,K)&&O7(K,Z))Q.push(Z.i,$.i,K.i),R7($),R7($.next),$=J=K;$=$.next}while($!==J);return W9($)}function dX(J,Q,$,Z,K,W){let X=J;do{let Y=X.next.next;while(Y!==X.prev){if(X.i!==Y.i&&tX(X,Y)){let H=XW(X,Y);X=W9(X,X.next),H=W9(H,H.next),F7(X,Q,$,Z,K,W,0),F7(H,Q,$,Z,K,W,0);return}Y=Y.next}X=X.next}while(X!==J)}function uX(J,Q,$,Z){let K=[];for(let W=0,X=Q.length;W<X;W++){let Y=Q[W]*Z,H=W<X-1?Q[W+1]*Z:J.length,U=ZW(J,Y,H,Z,!1);if(U===U.next)U.steiner=!0;K.push(rX(U))}K.sort(cX);for(let W=0;W<K.length;W++)$=nX(K[W],$);return $}function cX(J,Q){let $=J.x-Q.x;if($===0){if($=J.y-Q.y,$===0){let Z=(J.next.y-J.y)/(J.next.x-J.x),K=(Q.next.y-Q.y)/(Q.next.x-Q.x);$=Z-K}}return $}function nX(J,Q){let $=sX(J,Q);if(!$)return Q;let Z=XW($,J);return W9(Z,Z.next),W9($,$.next)}function sX(J,Q){let $=Q,Z=J.x,K=J.y,W=-1/0,X;if(u9(J,$))return $;do{if(u9(J,$.next))return $.next;else if(K<=$.y&&K>=$.next.y&&$.next.y!==$.y){let E=$.x+(K-$.y)*($.next.x-$.x)/($.next.y-$.y);if(E<=Z&&E>W){if(W=E,X=$.x<$.next.x?$:$.next,E===Z)return X}}$=$.next}while($!==Q);if(!X)return null;let Y=X,H=X.x,U=X.y,N=1/0;$=X;do{if(Z>=$.x&&$.x>=H&&Z!==$.x&&KW(K<U?Z:W,K,H,U,K<U?W:Z,K,$.x,$.y)){let E=Math.abs(K-$.y)/(Z-$.x);if(O7($,J)&&(E<N||E===N&&($.x>X.x||$.x===X.x&&iX(X,$))))X=$,N=E}$=$.next}while($!==Y);return X}function iX(J,Q){return BJ(J.prev,J,Q.prev)<0&&BJ(Q.next,J,J.next)<0}function oX(J,Q,$,Z){let K=J;do{if(K.z===0)K.z=TQ(K.x,K.y,Q,$,Z);K.prevZ=K.prev,K.nextZ=K.next,K=K.next}while(K!==J);K.prevZ.nextZ=null,K.prevZ=null,aX(K)}function aX(J){let Q,$=1;do{let Z=J,K;J=null;let W=null;Q=0;while(Z){Q++;let X=Z,Y=0;for(let U=0;U<$;U++)if(Y++,X=X.nextZ,!X)break;let H=$;while(Y>0||H>0&&X){if(Y!==0&&(H===0||!X||Z.z<=X.z))K=Z,Z=Z.nextZ,Y--;else K=X,X=X.nextZ,H--;if(W)W.nextZ=K;else J=K;K.prevZ=W,W=K}Z=X}W.nextZ=null,$*=2}while(Q>1);return J}function TQ(J,Q,$,Z,K){return J=(J-$)*K|0,Q=(Q-Z)*K|0,J=(J|J<<8)&16711935,J=(J|J<<4)&252645135,J=(J|J<<2)&858993459,J=(J|J<<1)&1431655765,Q=(Q|Q<<8)&16711935,Q=(Q|Q<<4)&252645135,Q=(Q|Q<<2)&858993459,Q=(Q|Q<<1)&1431655765,J|Q<<1}function rX(J){let Q=J,$=J;do{if(Q.x<$.x||Q.x===$.x&&Q.y<$.y)$=Q;Q=Q.next}while(Q!==J);return $}function KW(J,Q,$,Z,K,W,X,Y){return(K-X)*(Q-Y)>=(J-X)*(W-Y)&&(J-X)*(Z-Y)>=($-X)*(Q-Y)&&($-X)*(W-Y)>=(K-X)*(Z-Y)}function G7(J,Q,$,Z,K,W,X,Y){return!(J===X&&Q===Y)&&KW(J,Q,$,Z,K,W,X,Y)}function tX(J,Q){return J.next.i!==Q.i&&J.prev.i!==Q.i&&!eX(J,Q)&&(O7(J,Q)&&O7(Q,J)&&JY(J,Q)&&(BJ(J.prev,J,Q.prev)||BJ(J,Q.prev,Q))||u9(J,Q)&&BJ(J.prev,J,J.next)>0&&BJ(Q.prev,Q,Q.next)>0)}function BJ(J,Q,$){return(Q.y-J.y)*($.x-Q.x)-(Q.x-J.x)*($.y-Q.y)}function u9(J,Q){return J.x===Q.x&&J.y===Q.y}function WW(J,Q,$,Z){let K=M6(BJ(J,Q,$)),W=M6(BJ(J,Q,Z)),X=M6(BJ($,Z,J)),Y=M6(BJ($,Z,Q));if(K!==W&&X!==Y)return!0;if(K===0&&R6(J,$,Q))return!0;if(W===0&&R6(J,Z,Q))return!0;if(X===0&&R6($,J,Z))return!0;if(Y===0&&R6($,Q,Z))return!0;return!1}function R6(J,Q,$){return Q.x<=Math.max(J.x,$.x)&&Q.x>=Math.min(J.x,$.x)&&Q.y<=Math.max(J.y,$.y)&&Q.y>=Math.min(J.y,$.y)}function M6(J){return J>0?1:J<0?-1:0}function eX(J,Q){let $=J;do{if($.i!==J.i&&$.next.i!==J.i&&$.i!==Q.i&&$.next.i!==Q.i&&WW($,$.next,J,Q))return!0;$=$.next}while($!==J);return!1}function O7(J,Q){return BJ(J.prev,J,J.next)<0?BJ(J,Q,J.next)>=0&&BJ(J,J.prev,Q)>=0:BJ(J,Q,J.prev)<0||BJ(J,J.next,Q)<0}function JY(J,Q){let $=J,Z=!1,K=(J.x+Q.x)/2,W=(J.y+Q.y)/2;do{if($.y>W!==$.next.y>W&&$.next.y!==$.y&&K<($.next.x-$.x)*(W-$.y)/($.next.y-$.y)+$.x)Z=!Z;$=$.next}while($!==J);return Z}function XW(J,Q){let $=SQ(J.i,J.x,J.y),Z=SQ(Q.i,Q.x,Q.y),K=J.next,W=Q.prev;return J.next=Q,Q.prev=J,$.next=K,K.prev=$,Z.next=$,$.prev=Z,W.next=Z,Z.prev=W,Z}function sZ(J,Q,$,Z){let K=SQ(J,Q,$);if(!Z)K.prev=K,K.next=K;else K.next=Z.next,K.prev=Z,Z.next.prev=K,Z.next=K;return K}function R7(J){if(J.next.prev=J.prev,J.prev.next=J.next,J.prevZ)J.prevZ.nextZ=J.nextZ;if(J.nextZ)J.nextZ.prevZ=J.prevZ}function SQ(J,Q,$){return{i:J,x:Q,y:$,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function QY(J,Q,$,Z){let K=0;for(let W=Q,X=$-Z;W<$;W+=Z)K+=(J[X]-J[W])*(J[W+1]+J[X+1]),X=W;return K}class YW{static triangulate(J,Q,$=2){return gX(J,Q,$)}}class Z9{static area(J){let Q=J.length,$=0;for(let Z=Q-1,K=0;K<Q;Z=K++)$+=J[Z].x*J[K].y-J[K].x*J[Z].y;return $*0.5}static isClockWise(J){return Z9.area(J)<0}static triangulateShape(J,Q){let $=[],Z=[],K=[];iZ(J),oZ($,J);let W=J.length;Q.forEach(iZ);for(let Y=0;Y<Q.length;Y++)Z.push(W),W+=Q[Y].length,oZ($,Q[Y]);let X=YW.triangulate($,Z);for(let Y=0;Y<X.length;Y+=3)K.push(X.slice(Y,Y+3));return K}}function iZ(J){let Q=J.length;if(Q>2&&J[Q-1].equals(J[0]))J.pop()}function oZ(J,Q){for(let $=0;$<Q.length;$++)J.push(Q[$].x),J.push(Q[$].y)}class p7 extends yJ{constructor(J=new g7([new Z0(0.5,0.5),new Z0(-0.5,0.5),new Z0(-0.5,-0.5),new Z0(0.5,-0.5)]),Q={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:J,options:Q},J=Array.isArray(J)?J:[J];let $=this,Z=[],K=[];for(let X=0,Y=J.length;X<Y;X++){let H=J[X];W(H)}this.setAttribute("position",new HJ(Z,3)),this.setAttribute("uv",new HJ(K,2)),this.computeVertexNormals();function W(X){let Y=[],H=Q.curveSegments!==void 0?Q.curveSegments:12,U=Q.steps!==void 0?Q.steps:1,N=Q.depth!==void 0?Q.depth:1,E=Q.bevelEnabled!==void 0?Q.bevelEnabled:!0,G=Q.bevelThickness!==void 0?Q.bevelThickness:0.2,D=Q.bevelSize!==void 0?Q.bevelSize:G-0.1,M=Q.bevelOffset!==void 0?Q.bevelOffset:0,I=Q.bevelSegments!==void 0?Q.bevelSegments:3,F=Q.extrudePath,q=Q.UVGenerator!==void 0?Q.UVGenerator:$Y,C,A=!1,L,_,P,z;if(F){C=F.getSpacedPoints(U),A=!0,E=!1;let t=F.isCatmullRomCurve3?F.closed:!1;L=F.computeFrenetFrames(U,t),_=new j,P=new j,z=new j}if(!E)I=0,G=0,D=0,M=0;let O=X.extractPoints(H),V=O.shape,h=O.holes;if(!Z9.isClockWise(V)){V=V.reverse();for(let t=0,$0=h.length;t<$0;t++){let Y0=h[t];if(Z9.isClockWise(Y0))h[t]=Y0.reverse()}}function b(t){let G0=t[0];for(let O0=1;O0<=t.length;O0++){let z0=O0%t.length,v0=t[z0],h0=v0.x-G0.x,d0=v0.y-G0.y,T=h0*h0+d0*d0,XJ=Math.max(Math.abs(v0.x),Math.abs(v0.y),Math.abs(G0.x),Math.abs(G0.y)),i0=0.000000000000000000010000000000000001*XJ*XJ;if(T<=i0){t.splice(z0,1),O0--;continue}G0=v0}}b(V),h.forEach(b);let u=h.length,w=V;for(let t=0;t<u;t++){let $0=h[t];V=V.concat($0)}function m(t,$0,Y0){if(!$0)l0("ExtrudeGeometry: vec does not exist");return t.clone().addScaledVector($0,Y0)}let o=V.length;function p(t,$0,Y0){let G0,O0,z0,v0=t.x-$0.x,h0=t.y-$0.y,d0=Y0.x-t.x,T=Y0.y-t.y,XJ=v0*v0+h0*h0,i0=v0*T-h0*d0;if(Math.abs(i0)>Number.EPSILON){let o0=Math.sqrt(XJ),B=Math.sqrt(d0*d0+T*T),R=$0.x-h0/o0,S=$0.y+v0/o0,l=Y0.x-T/B,e=Y0.y+d0/B,H0=((l-R)*T-(e-S)*d0)/(v0*T-h0*d0);G0=R+v0*H0-t.x,O0=S+h0*H0-t.y;let N0=G0*G0+O0*O0;if(N0<=2)return new Z0(G0,O0);else z0=Math.sqrt(N0/2)}else{let o0=!1;if(v0>Number.EPSILON){if(d0>Number.EPSILON)o0=!0}else if(v0<-Number.EPSILON){if(d0<-Number.EPSILON)o0=!0}else if(Math.sign(h0)===Math.sign(T))o0=!0;if(o0)G0=-h0,O0=v0,z0=Math.sqrt(XJ);else G0=v0,O0=h0,z0=Math.sqrt(XJ/2)}return new Z0(G0/z0,O0/z0)}let W0=[];for(let t=0,$0=w.length,Y0=$0-1,G0=t+1;t<$0;t++,Y0++,G0++){if(Y0===$0)Y0=0;if(G0===$0)G0=0;W0[t]=p(w[t],w[Y0],w[G0])}let c=[],r,Q0=W0.concat();for(let t=0,$0=u;t<$0;t++){let Y0=h[t];r=[];for(let G0=0,O0=Y0.length,z0=O0-1,v0=G0+1;G0<O0;G0++,z0++,v0++){if(z0===O0)z0=0;if(v0===O0)v0=0;r[G0]=p(Y0[G0],Y0[z0],Y0[v0])}c.push(r),Q0=Q0.concat(r)}let T0;if(I===0)T0=Z9.triangulateShape(w,h);else{let t=[],$0=[];for(let Y0=0;Y0<I;Y0++){let G0=Y0/I,O0=G*Math.cos(G0*Math.PI/2),z0=D*Math.sin(G0*Math.PI/2)+M;for(let v0=0,h0=w.length;v0<h0;v0++){let d0=m(w[v0],W0[v0],z0);if(X0(d0.x,d0.y,-O0),G0===0)t.push(d0)}for(let v0=0,h0=u;v0<h0;v0++){let d0=h[v0];r=c[v0];let T=[];for(let XJ=0,i0=d0.length;XJ<i0;XJ++){let o0=m(d0[XJ],r[XJ],z0);if(X0(o0.x,o0.y,-O0),G0===0)T.push(o0)}if(G0===0)$0.push(T)}}T0=Z9.triangulateShape(t,$0)}let S0=T0.length,WJ=D+M;for(let t=0;t<o;t++){let $0=E?m(V[t],Q0[t],WJ):V[t];if(!A)X0($0.x,$0.y,0);else P.copy(L.normals[0]).multiplyScalar($0.x),_.copy(L.binormals[0]).multiplyScalar($0.y),z.copy(C[0]).add(P).add(_),X0(z.x,z.y,z.z)}for(let t=1;t<=U;t++)for(let $0=0;$0<o;$0++){let Y0=E?m(V[$0],Q0[$0],WJ):V[$0];if(!A)X0(Y0.x,Y0.y,N/U*t);else P.copy(L.normals[t]).multiplyScalar(Y0.x),_.copy(L.binormals[t]).multiplyScalar(Y0.y),z.copy(C[t]).add(P).add(_),X0(z.x,z.y,z.z)}for(let t=I-1;t>=0;t--){let $0=t/I,Y0=G*Math.cos($0*Math.PI/2),G0=D*Math.sin($0*Math.PI/2)+M;for(let O0=0,z0=w.length;O0<z0;O0++){let v0=m(w[O0],W0[O0],G0);X0(v0.x,v0.y,N+Y0)}for(let O0=0,z0=h.length;O0<z0;O0++){let v0=h[O0];r=c[O0];for(let h0=0,d0=v0.length;h0<d0;h0++){let T=m(v0[h0],r[h0],G0);if(!A)X0(T.x,T.y,N+Y0);else X0(T.x,T.y+C[U-1].y,C[U-1].x+Y0)}}}n0(),n();function n0(){let t=Z.length/3;if(E){let $0=0,Y0=o*$0;for(let G0=0;G0<S0;G0++){let O0=T0[G0];j0(O0[2]+Y0,O0[1]+Y0,O0[0]+Y0)}$0=U+I*2,Y0=o*$0;for(let G0=0;G0<S0;G0++){let O0=T0[G0];j0(O0[0]+Y0,O0[1]+Y0,O0[2]+Y0)}}else{for(let $0=0;$0<S0;$0++){let Y0=T0[$0];j0(Y0[2],Y0[1],Y0[0])}for(let $0=0;$0<S0;$0++){let Y0=T0[$0];j0(Y0[0]+o*U,Y0[1]+o*U,Y0[2]+o*U)}}$.addGroup(t,Z.length/3-t,0)}function n(){let t=Z.length/3,$0=0;K0(w,$0),$0+=w.length;for(let Y0=0,G0=h.length;Y0<G0;Y0++){let O0=h[Y0];K0(O0,$0),$0+=O0.length}$.addGroup(t,Z.length/3-t,1)}function K0(t,$0){let Y0=t.length;while(--Y0>=0){let G0=Y0,O0=Y0-1;if(O0<0)O0=t.length-1;for(let z0=0,v0=U+I*2;z0<v0;z0++){let h0=o*z0,d0=o*(z0+1),T=$0+G0+h0,XJ=$0+O0+h0,i0=$0+O0+d0,o0=$0+G0+d0;x0(T,XJ,i0,o0)}}}function X0(t,$0,Y0){Y.push(t),Y.push($0),Y.push(Y0)}function j0(t,$0,Y0){B0(t),B0($0),B0(Y0);let G0=Z.length/3,O0=q.generateTopUV($,Z,G0-3,G0-2,G0-1);s0(O0[0]),s0(O0[1]),s0(O0[2])}function x0(t,$0,Y0,G0){B0(t),B0($0),B0(G0),B0($0),B0(Y0),B0(G0);let O0=Z.length/3,z0=q.generateSideWallUV($,Z,O0-6,O0-3,O0-2,O0-1);s0(z0[0]),s0(z0[1]),s0(z0[3]),s0(z0[1]),s0(z0[2]),s0(z0[3])}function B0(t){Z.push(Y[t*3+0]),Z.push(Y[t*3+1]),Z.push(Y[t*3+2])}function s0(t){K.push(t.x),K.push(t.y)}}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON(),Q=this.parameters.shapes,$=this.parameters.options;return ZY(Q,$,J)}static fromJSON(J,Q){let $=[];for(let K=0,W=J.shapes.length;K<W;K++){let X=Q[J.shapes[K]];$.push(X)}let Z=J.options.extrudePath;if(Z!==void 0)J.options.extrudePath=new wQ[Z.type]().fromJSON(Z);return new p7($,J.options)}}var $Y={generateTopUV:function(J,Q,$,Z,K){let W=Q[$*3],X=Q[$*3+1],Y=Q[Z*3],H=Q[Z*3+1],U=Q[K*3],N=Q[K*3+1];return[new Z0(W,X),new Z0(Y,H),new Z0(U,N)]},generateSideWallUV:function(J,Q,$,Z,K,W){let X=Q[$*3],Y=Q[$*3+1],H=Q[$*3+2],U=Q[Z*3],N=Q[Z*3+1],E=Q[Z*3+2],G=Q[K*3],D=Q[K*3+1],M=Q[K*3+2],I=Q[W*3],F=Q[W*3+1],q=Q[W*3+2];if(Math.abs(Y-N)<Math.abs(X-U))return[new Z0(X,1-H),new Z0(U,1-E),new Z0(G,1-M),new Z0(I,1-q)];else return[new Z0(Y,1-H),new Z0(N,1-E),new Z0(D,1-M),new Z0(F,1-q)]}};function ZY(J,Q,$){if($.shapes=[],Array.isArray(J))for(let Z=0,K=J.length;Z<K;Z++){let W=J[Z];$.shapes.push(W.uuid)}else $.shapes.push(J.uuid);if($.options=Object.assign({},Q),Q.extrudePath!==void 0)$.options.extrudePath=Q.extrudePath.toJSON();return $}class m7 extends yJ{constructor(J=[new Z0(0,-0.5),new Z0(0.5,0),new Z0(0,0.5)],Q=12,$=0,Z=Math.PI*2){super();this.type="LatheGeometry",this.parameters={points:J,segments:Q,phiStart:$,phiLength:Z},Q=Math.floor(Q),Z=JJ(Z,0,Math.PI*2);let K=[],W=[],X=[],Y=[],H=[],U=1/Q,N=new j,E=new Z0,G=new j,D=new j,M=new j,I=0,F=0;for(let q=0;q<=J.length-1;q++)switch(q){case 0:I=J[q+1].x-J[q].x,F=J[q+1].y-J[q].y,G.x=F*1,G.y=-I,G.z=F*0,M.copy(G),G.normalize(),Y.push(G.x,G.y,G.z);break;case J.length-1:Y.push(M.x,M.y,M.z);break;default:I=J[q+1].x-J[q].x,F=J[q+1].y-J[q].y,G.x=F*1,G.y=-I,G.z=F*0,D.copy(G),G.x+=M.x,G.y+=M.y,G.z+=M.z,G.normalize(),Y.push(G.x,G.y,G.z),M.copy(D)}for(let q=0;q<=Q;q++){let C=$+q*U*Z,A=Math.sin(C),L=Math.cos(C);for(let _=0;_<=J.length-1;_++){N.x=J[_].x*A,N.y=J[_].y,N.z=J[_].x*L,W.push(N.x,N.y,N.z),E.x=q/Q,E.y=_/(J.length-1),X.push(E.x,E.y);let P=Y[3*_+0]*A,z=Y[3*_+1],O=Y[3*_+0]*L;H.push(P,z,O)}}for(let q=0;q<Q;q++)for(let C=0;C<J.length-1;C++){let A=C+q*J.length,L=A,_=A+J.length,P=A+J.length+1,z=A+1;K.push(L,_,z),K.push(P,z,_)}this.setIndex(K),this.setAttribute("position",new HJ(W,3)),this.setAttribute("uv",new HJ(X,2)),this.setAttribute("normal",new HJ(H,3))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new m7(J.points,J.segments,J.phiStart,J.phiLength)}}class i8 extends yJ{constructor(J=1,Q=1,$=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:Z};let K=J/2,W=Q/2,X=Math.floor($),Y=Math.floor(Z),H=X+1,U=Y+1,N=J/X,E=Q/Y,G=[],D=[],M=[],I=[];for(let F=0;F<U;F++){let q=F*E-W;for(let C=0;C<H;C++){let A=C*N-K;D.push(A,-q,0),M.push(0,0,1),I.push(C/X),I.push(1-F/Y)}}for(let F=0;F<Y;F++)for(let q=0;q<X;q++){let C=q+H*F,A=q+H*(F+1),L=q+1+H*(F+1),_=q+1+H*F;G.push(C,A,_),G.push(A,L,_)}this.setIndex(G),this.setAttribute("position",new HJ(D,3)),this.setAttribute("normal",new HJ(M,3)),this.setAttribute("uv",new HJ(I,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new i8(J.width,J.height,J.widthSegments,J.heightSegments)}}class l7 extends yJ{constructor(J=1,Q=32,$=16,Z=0,K=Math.PI*2,W=0,X=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:J,widthSegments:Q,heightSegments:$,phiStart:Z,phiLength:K,thetaStart:W,thetaLength:X},Q=Math.max(3,Math.floor(Q)),$=Math.max(2,Math.floor($));let Y=Math.min(W+X,Math.PI),H=0,U=[],N=new j,E=new j,G=[],D=[],M=[],I=[];for(let F=0;F<=$;F++){let q=[],C=F/$,A=W+C*X,L=J*Math.cos(A),_=Math.sqrt(J*J-L*L),P=0;if(F===0&&W===0)P=0.5/Q;else if(F===$&&Y===Math.PI)P=-0.5/Q;for(let z=0;z<=Q;z++){let O=z/Q,V=Z+O*K;N.x=-_*Math.cos(V),N.y=L,N.z=_*Math.sin(V),D.push(N.x,N.y,N.z),E.copy(N).normalize(),M.push(E.x,E.y,E.z),I.push(O+P,1-C),q.push(H++)}U.push(q)}for(let F=0;F<$;F++)for(let q=0;q<Q;q++){let C=U[F][q+1],A=U[F][q],L=U[F+1][q],_=U[F+1][q+1];if(F!==0||W>0)G.push(C,A,_);if(F!==$-1||Y<Math.PI)G.push(A,L,_)}this.setIndex(G),this.setAttribute("position",new HJ(D,3)),this.setAttribute("normal",new HJ(M,3)),this.setAttribute("uv",new HJ(I,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new l7(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}function M9(J){let Q={};for(let $ in J){Q[$]={};for(let Z in J[$]){let K=J[$][Z];if(aZ(K))if(K.isRenderTargetTexture)m0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][Z]=null;else Q[$][Z]=K.clone();else if(Array.isArray(K))if(aZ(K[0])){let W=[];for(let X=0,Y=K.length;X<Y;X++)W[X]=K[X].clone();Q[$][Z]=W}else Q[$][Z]=K.slice();else Q[$][Z]=K}}return Q}function dJ(J){let Q={};for(let $=0;$<J.length;$++){let Z=M9(J[$]);for(let K in Z)Q[K]=Z[K]}return Q}function aZ(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function KY(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function h$(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return QJ.workingColorSpace}var f8={clone:M9,merge:dJ},WY=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XY=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _J extends R9{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WY,this.fragmentShader=XY,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=M9(J.uniforms),this.uniformsGroups=KY(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let Z in this.uniforms){let W=this.uniforms[Z].value;if(W&&W.isTexture)Q.uniforms[Z]={type:"t",value:W.toJSON(J).uuid};else if(W&&W.isColor)Q.uniforms[Z]={type:"c",value:W.getHex()};else if(W&&W.isVector2)Q.uniforms[Z]={type:"v2",value:W.toArray()};else if(W&&W.isVector3)Q.uniforms[Z]={type:"v3",value:W.toArray()};else if(W&&W.isVector4)Q.uniforms[Z]={type:"v4",value:W.toArray()};else if(W&&W.isMatrix3)Q.uniforms[Z]={type:"m3",value:W.toArray()};else if(W&&W.isMatrix4)Q.uniforms[Z]={type:"m4",value:W.toArray()};else Q.uniforms[Z]={value:W}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let Z in this.extensions)if(this.extensions[Z]===!0)$[Z]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let $ in J.uniforms){let Z=J.uniforms[$];switch(this.uniforms[$]={},Z.type){case"t":this.uniforms[$].value=Q[Z.value]||null;break;case"c":this.uniforms[$].value=new b0().setHex(Z.value);break;case"v2":this.uniforms[$].value=new Z0().fromArray(Z.value);break;case"v3":this.uniforms[$].value=new j().fromArray(Z.value);break;case"v4":this.uniforms[$].value=new LJ().fromArray(Z.value);break;case"m3":this.uniforms[$].value=new c0().fromArray(Z.value);break;case"m4":this.uniforms[$].value=new MJ().fromArray(Z.value);break;default:this.uniforms[$].value=Z.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let $ in J.extensions)this.extensions[$]=J.extensions[$];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class d7 extends _J{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class x$ extends R9{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new b0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new b0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Z0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new w8,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class o8 extends x${constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Z0(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return JJ(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(Q){this.ior=(1+0.4*Q)/(1-0.4*Q)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new b0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new b0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new b0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(J){if(this._retroreflectivity>0!==J>0)this.version++;this._retroreflectivity=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.retroreflectivity=J.retroreflectivity,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class g$ extends R9{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class p$ extends R9{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function g9(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function zQ(J){return J!==void 0&&J.inTangents!==void 0&&J.outTangents!==void 0}class L9{constructor(J,Q,$,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,Z=Q[$],K=Q[$-1];$:{J:{let W;Q:{Z:if(!(J<Z)){for(let X=$+2;;){if(Z===void 0){if(J<K)break Z;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===X)break;if(K=Z,Z=Q[++$],J<Z)break J}W=Q.length;break Q}if(!(J>=K)){let X=Q[1];if(J<X)$=2,K=X;for(let Y=$-2;;){if(K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===Y)break;if(Z=K,K=Q[--$-1],J>=K)break J}W=$,$=0;break Q}break $}while($<W){let X=$+W>>>1;if(J<Q[X])W=X;else $=X+1}if(Z=Q[$],K=Q[$-1],K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,K,Z)}return this.interpolate_($,K,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,K=J*Z;for(let W=0;W!==Z;++W)Q[W]=$[K+W];return Q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class m$ extends L9{constructor(J,Q,$,Z){super(J,Q,$,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let Z=this.parameterPositions,K=J-2,W=J+1,X=Z[K],Y=Z[W];if(X===void 0)switch(this.getSettings_().endingStart){case 2401:K=J,X=2*Q-$;break;case 2402:K=Z.length-2,X=Q+Z[K]-Z[K+1];break;default:K=J,X=$}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:W=J,Y=2*$-Q;break;case 2402:W=1,Y=$+Z[1]-Z[0];break;default:W=J-1,Y=Q}let H=($-Q)*0.5,U=this.valueSize;this._weightPrev=H/(Q-X),this._weightNext=H/(Y-$),this._offsetPrev=K*U,this._offsetNext=W*U}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,U=this._offsetPrev,N=this._offsetNext,E=this._weightPrev,G=this._weightNext,D=($-Q)/(Z-Q),M=D*D,I=M*D,F=-E*I+2*E*M-E*D,q=(1+E)*I+(-1.5-2*E)*M+(-0.5+E)*D+1,C=(-1-G)*I+(1.5+G)*M+0.5*D,A=G*I-G*M;for(let L=0;L!==X;++L)K[L]=F*W[U+L]+q*W[H+L]+C*W[Y+L]+A*W[N+L];return K}}class l$ extends L9{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,U=($-Q)/(Z-Q),N=1-U;for(let E=0;E!==X;++E)K[E]=W[H+E]*N+W[Y+E]*U;return K}}class d$ extends L9{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class u$ extends L9{interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=J*X,H=Y-X,U=this.inTangents,N=this.outTangents;if(!U||!N){let D=($-Q)/(Z-Q),M=1-D;for(let I=0;I!==X;++I)K[I]=W[H+I]*M+W[Y+I]*D;return K}let E=X*2,G=J-1;for(let D=0;D!==X;++D){let M=W[H+D],I=W[Y+D],F=G*E+D*2,q=N[F],C=N[F+1],A=J*E+D*2,L=U[A],_=U[A+1],P=HY($,Q,q,L,Z);K[D]=HW(P,M,C,_,I)}return K}}function HW(J,Q,$,Z,K){let W=1-J;return W*W*W*Q+3*W*W*J*$+3*W*J*J*Z+J*J*J*K}function YY(J,Q,$,Z,K){let W=1-J;return 3*W*W*($-Q)+6*W*J*(Z-$)+3*J*J*(K-Z)}function HY(J,Q,$,Z,K){let W=(J-Q)/(K-Q);for(let X=0;X<8;X++){let Y=HW(W,Q,$,Z,K)-J;if(Math.abs(Y)<0.0000000001)break;let H=YY(W,Q,$,Z,K);if(Math.abs(H)<0.0000000001)break;W=Math.max(0,Math.min(1,W-Y/H))}return W}class Z8{constructor(J,Q,$,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=g9(Q,this.TimeBufferType),this.values=g9($,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:g9(J.times,Array),values:g9(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)$.interpolation=Z;if(zQ(J.settings))$.settings={inTangents:g9(J.settings.inTangents,Array),outTangents:g9(J.settings.outTangents,Array)}}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new d$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new l$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new m$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new u$(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return m0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]*=J;if(zQ(this.settings))rZ(this.settings.inTangents,J),rZ(this.settings.outTangents,J)}return this}trim(J,Q){let $=this.times,Z=$.length,K=0,W=Z-1;while(K!==Z&&$[K]<J)++K;while(W!==-1&&$[W]>Q)--W;if(++W,K!==0||W!==Z){if(K>=W)W=Math.max(W,1),K=W-1;let X=this.getValueSize();this.times=$.slice(K,W),this.values=this.values.slice(K*X,W*X)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)l0("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,Z=this.values,K=$.length;if(K===0)l0("KeyframeTrack: Track is empty.",this),J=!1;let W=null;for(let X=0;X!==K;X++){let Y=$[X];if(typeof Y==="number"&&isNaN(Y)){l0("KeyframeTrack: Time is not a valid number.",this,X,Y),J=!1;break}if(W!==null&&W>Y){l0("KeyframeTrack: Out of order keys.",this,X,Y,W),J=!1;break}W=Y}if(Z!==void 0){if(EX(Z))for(let X=0,Y=Z.length;X!==Y;++X){let H=Z[X];if(isNaN(H)){l0("KeyframeTrack: Value is not a valid number.",this,X,H),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),Z=this.getInterpolation()===2302,K=J.length-1,W=1;for(let X=1;X<K;++X){let Y=!1,H=J[X],U=J[X+1];if(H!==U&&(X!==1||H!==J[0]))if(!Z){let N=X*$,E=N-$,G=N+$;for(let D=0;D!==$;++D){let M=Q[N+D];if(M!==Q[E+D]||M!==Q[G+D]){Y=!0;break}}}else Y=!0;if(Y){if(X!==W){J[W]=J[X];let N=X*$,E=W*$;for(let G=0;G!==$;++G)Q[E+G]=Q[N+G]}++W}}if(K>0){J[W]=J[K];for(let X=K*$,Y=W*$,H=0;H!==$;++H)Q[Y+H]=Q[X+H];++W}if(W!==J.length)this.times=J.slice(0,W),this.values=Q.slice(0,W*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),Z=new this.constructor(this.name,J,Q);if(Z.createInterpolant=this.createInterpolant,zQ(this.settings))Z.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return Z}}function rZ(J,Q){for(let $=0,Z=J.length;$!==Z;$+=2)J[$]*=Q}Z8.prototype.ValueTypeName="";Z8.prototype.TimeBufferType=Float32Array;Z8.prototype.ValueBufferType=Float32Array;Z8.prototype.DefaultInterpolation=2301;class k9 extends Z8{constructor(J,Q,$){super(J,Q,$)}}k9.prototype.ValueTypeName="bool";k9.prototype.ValueBufferType=Array;k9.prototype.DefaultInterpolation=2300;k9.prototype.InterpolantFactoryMethodLinear=void 0;k9.prototype.InterpolantFactoryMethodSmooth=void 0;class c$ extends Z8{constructor(J,Q,$,Z){super(J,Q,$,Z)}}c$.prototype.ValueTypeName="color";class n$ extends Z8{constructor(J,Q,$,Z){super(J,Q,$,Z)}}n$.prototype.ValueTypeName="number";class s$ extends L9{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=($-Q)/(Z-Q),H=J*X;for(let U=H+X;H!==U;H+=4)y8.slerpFlat(K,0,W,H-X,W,H,Y);return K}}class d6 extends Z8{constructor(J,Q,$,Z){super(J,Q,$,Z)}InterpolantFactoryMethodLinear(J){return new s$(this.times,this.values,this.getValueSize(),J)}}d6.prototype.ValueTypeName="quaternion";d6.prototype.InterpolantFactoryMethodSmooth=void 0;class V9 extends Z8{constructor(J,Q,$){super(J,Q,$)}}V9.prototype.ValueTypeName="string";V9.prototype.ValueBufferType=Array;V9.prototype.DefaultInterpolation=2300;V9.prototype.InterpolantFactoryMethodLinear=void 0;V9.prototype.InterpolantFactoryMethodSmooth=void 0;class i$ extends Z8{constructor(J,Q,$,Z){super(J,Q,$,Z)}}i$.prototype.ValueTypeName="vector";class o${constructor(J,Q,$){let Z=this,K=!1,W=0,X=0,Y=void 0,H=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(U){if(X++,K===!1){if(Z.onStart!==void 0)Z.onStart(U,W,X)}K=!0},this.itemEnd=function(U){if(W++,Z.onProgress!==void 0)Z.onProgress(U,W,X);if(W===X){if(K=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(U){if(Z.onError!==void 0)Z.onError(U)},this.resolveURL=function(U){if(U=U.normalize("NFC"),Y)return Y(U);return U},this.setURLModifier=function(U){return Y=U,this},this.addHandler=function(U,N){return H.push(U,N),this},this.removeHandler=function(U){let N=H.indexOf(U);if(N!==-1)H.splice(N,2);return this},this.getHandler=function(U){for(let N=0,E=H.length;N<E;N+=2){let G=H[N],D=H[N+1];if(G.global)G.lastIndex=0;if(G.test(U))return D}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var UW=new o$;class a${constructor(J){if(this.manager=J!==void 0?J:UW,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(Z,K){$.load(J,Z,Q,K)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}a$.DEFAULT_MATERIAL_NAME="__DEFAULT";class u6 extends bJ{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new b0(J),this.intensity=Q}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}var PQ=new MJ,tZ=new j,eZ=new j;class c6{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Z0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new MJ,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new v7,this._frameExtents=new Z0(1,1),this._viewportCount=1,this._viewports=[new LJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera;tZ.setFromMatrixPosition(J.matrixWorld),Q.position.copy(tZ),eZ.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(eZ),Q.updateMatrixWorld(),this._updateMatrix(Q,this.matrix,this._frustum)}_updateMatrix(J,Q,$,Z){PQ.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),$.setFromProjectionMatrix(PQ,J.coordinateSystem,J.reversedDepth);let K=this._frameExtents,W=Z?Z.z/K.x:1,X=Z?Z.w/K.y:1,Y=Z?Z.x/K.x:0,H=Z?Z.y/K.y:0;if(J.coordinateSystem===2001||J.reversedDepth)Q.set(0.5*W,0,0,0.5*W+Y,0,0.5*X,0,0.5*X+H,0,0,1,0,0,0,0,1);else Q.set(0.5*W,0,0,0.5*W+Y,0,0.5*X,0,0.5*X+H,0,0,0.5,0.5,0,0,0,1);Q.multiply(PQ)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};return J.intensity=this.intensity,J.bias=this.bias,J.normalBias=this.normalBias,J.radius=this.radius,J.blurSamples=this.blurSamples,J.mapSize=this.mapSize.toArray(),J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var L6=new j,k6=new y8,D8=new j;class n6 extends bJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new MJ,this.projectionMatrix=new MJ,this.projectionMatrixInverse=new MJ,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(L6,k6,D8),D8.x===1&&D8.y===1&&D8.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(L6,k6,D8.set(1,1,1)).invert()}updateWorldMatrix(J,Q,$=!1){if(super.updateWorldMatrix(J,Q,$),this.matrixWorld.decompose(L6,k6,D8),D8.x===1&&D8.y===1&&D8.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(L6,k6,D8.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var c8=new j,JK=new Z0,QK=new Z0;class vJ extends n6{constructor(J=50,Q=1,$=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=Z,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=D7*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(ZQ*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return D7*2*Math.atan(Math.tan(ZQ*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){c8.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(c8.x,c8.y).multiplyScalar(-J/c8.z),c8.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(c8.x,c8.y).multiplyScalar(-J/c8.z)}getViewSize(J,Q){return this.getViewBounds(J,JK,QK),Q.subVectors(QK,JK)}setViewOffset(J,Q,$,Z,K,W){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(ZQ*0.5*this.fov)/this.zoom,$=2*Q,Z=this.aspect*$,K=-0.5*Z,W=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:H}=W;K+=W.offsetX*Z/Y,Q-=W.offsetY*$/H,Z*=W.width/Y,$*=W.height/H}let X=this.filmOffset;if(X!==0)K+=J*X/this.getFilmWidth();this.projectionMatrix.makePerspective(K,K+Z,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class GW extends c6{constructor(){super(new vJ(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(J){let Q=this.camera,$=D7*2*J.angle*this.focus,Z=this.mapSize.width/this.mapSize.height*this.aspect,K=J.distance||Q.far;if($!==Q.fov||Z!==Q.aspect||K!==Q.far)Q.fov=$,Q.aspect=Z,Q.far=K,Q.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this.aspect=J.aspect,this}toJSON(){let J=super.toJSON();return J.focus=this.focus,J.aspect=this.aspect,J}}class u7 extends u6{constructor(J,Q,$=0,Z=Math.PI/3,K=0,W=2){super(J,Q);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bJ.DEFAULT_UP),this.updateMatrix(),this.target=new bJ,this.distance=$,this.angle=Z,this.penumbra=K,this.decay=W,this.map=null,this.shadow=new GW}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.map=J.map,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);if(Q.object.distance=this.distance,Q.object.angle=this.angle,Q.object.decay=this.decay,Q.object.penumbra=this.penumbra,Q.object.target=this.target.uuid,this.map&&this.map.isTexture)Q.object.map=this.map.toJSON(J).uuid;return Q.object.shadow=this.shadow.toJSON(),Q}}class NW extends c6{constructor(){super(new vJ(90,1,0.5,500));this.isPointLightShadow=!0}}class s6 extends u6{constructor(J,Q,$=0,Z=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=Z,this.shadow=new NW}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.distance=this.distance,Q.object.decay=this.decay,Q.object.shadow=this.shadow.toJSON(),Q}}class t9 extends n6{constructor(J=-1,Q=1,$=1,Z=-1,K=0.1,W=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=Z,this.near=K,this.far=W,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,Z,K,W){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,K=$-J,W=$+J,X=Z+Q,Y=Z-Q;if(this.view!==null&&this.view.enabled){let H=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;K+=H*this.view.offsetX,W=K+H*this.view.width,X-=U*this.view.offsetY,Y=X-U*this.view.height}this.projectionMatrix.makeOrthographic(K,W,X,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}var p9=-90,m9=1;class r$ extends bJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new vJ(p9,m9,J,Q);Z.layers=this.layers,this.add(Z);let K=new vJ(p9,m9,J,Q);K.layers=this.layers,this.add(K);let W=new vJ(p9,m9,J,Q);W.layers=this.layers,this.add(W);let X=new vJ(p9,m9,J,Q);X.layers=this.layers,this.add(X);let Y=new vJ(p9,m9,J,Q);Y.layers=this.layers,this.add(Y);let H=new vJ(p9,m9,J,Q);H.layers=this.layers,this.add(H)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,Z,K,W,X,Y]=Q;for(let H of Q)this.remove(H);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),K.up.set(0,0,-1),K.lookAt(0,1,0),W.up.set(0,0,1),W.lookAt(0,-1,0),X.up.set(0,1,0),X.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),K.up.set(0,0,1),K.lookAt(0,1,0),W.up.set(0,0,-1),W.lookAt(0,-1,0),X.up.set(0,-1,0),X.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let H of Q)this.add(H),H.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[K,W,X,Y,H,U]=this.children,N=J.getRenderTarget(),E=J.getActiveCubeFace(),G=J.getActiveMipmapLevel(),D=J.xr.enabled;J.xr.enabled=!1;let M=$.texture.generateMipmaps;$.texture.generateMipmaps=!1;let I=!1;if(J.isWebGLRenderer===!0)I=J.state.buffers.depth.getReversed();else I=J.reversedDepthBuffer;if(J.setRenderTarget($,0,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,K),J.setRenderTarget($,1,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,W),J.setRenderTarget($,2,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),J.setRenderTarget($,3,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget($,4,Z),I&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),$.texture.generateMipmaps=M,J.setRenderTarget($,5,Z),I&&J.autoClear===!1)J.clearDepth();J.render(Q,U),J.setRenderTarget(N,E,G),J.xr.enabled=D,$.texture.needsPMREMUpdate=!0}}class t$ extends vJ{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}class i6{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(J){if(this._document=J,J.hidden!==void 0)this._pageVisibilityHandler=UY.bind(this),J.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(J){return this._timescale=J,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(J){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(J!==void 0?J:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function UY(){if(this._document.hidden===!1)this.reset()}var e$="\\[\\]\\.:\\/",GY=new RegExp("["+e$+"]","g"),JZ="[^"+e$+"]",NY="[^"+e$.replace("\\.","")+"]",EY=/((?:WC+[\/:])*)/.source.replace("WC",JZ),qY=/(WCOD+)?/.source.replace("WCOD",NY),DY=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",JZ),FY=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",JZ),OY=new RegExp("^"+EY+qY+DY+FY+"$"),RY=["material","materials","bones","map"];class EW{constructor(J,Q,$){let Z=$||NJ.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,Z)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,Z=this._bindings[$];if(Z!==void 0)Z.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,K=$.length;Z!==K;++Z)$[Z].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class NJ{constructor(J,Q,$){this.path=Q,this.parsedPath=$||NJ.parseTrackName(Q),this.node=NJ.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new NJ(J,Q,$);else return new NJ.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(GY,"")}static parseTrackName(J){let Q=OY.exec(J);if(Q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},Z=$.nodeName&&$.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let K=$.nodeName.substring(Z+1);if(RY.indexOf(K)!==-1)$.nodeName=$.nodeName.substring(0,Z),$.objectName=K}if($.propertyName===null||$.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(K){for(let W=0;W<K.length;W++){let X=K[W];if(X.name===Q||X.uuid===Q)return X;let Y=$(X.children);if(Y)return Y}return null},Z=$(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)J[Q++]=$[Z]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,Z=Q.propertyName,K=Q.propertyIndex;if(!J)J=NJ.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){m0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let H=Q.objectIndex;switch($){case"materials":if(!J.material){l0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){l0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){l0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===H){H=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){l0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){l0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){l0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(H!==void 0){if(J[H]===void 0){l0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[H]}}let W=J[Z];if(W===void 0){let H=Q.nodeName;l0("PropertyBinding: Trying to update property for track: "+H+"."+Z+" but it wasn't found.",J);return}let X=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)X=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)X=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(K!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){l0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){l0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[K]!==void 0)K=J.morphTargetDictionary[K]}Y=this.BindingType.ArrayElement,this.resolvedProperty=W,this.propertyIndex=K}else if(W.fromArray!==void 0&&W.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=W;else if(Array.isArray(W))Y=this.BindingType.EntireArray,this.resolvedProperty=W;else this.propertyName=Z;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][X]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}NJ.Composite=EW;NJ.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};NJ.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};NJ.prototype.GetterByBindingType=[NJ.prototype._getValue_direct,NJ.prototype._getValue_array,NJ.prototype._getValue_arrayElement,NJ.prototype._getValue_toArray];NJ.prototype.SetterByBindingTypeAndVersioning=[[NJ.prototype._setValue_direct,NJ.prototype._setValue_direct_setNeedsUpdate,NJ.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[NJ.prototype._setValue_array,NJ.prototype._setValue_array_setNeedsUpdate,NJ.prototype._setValue_array_setMatrixWorldNeedsUpdate],[NJ.prototype._setValue_arrayElement,NJ.prototype._setValue_arrayElement_setNeedsUpdate,NJ.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[NJ.prototype._setValue_fromArray,NJ.prototype._setValue_fromArray_setNeedsUpdate,NJ.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var A5=new Float32Array(1);class QZ{static{QZ.prototype.isMatrix2=!0}constructor(J,Q,$,Z){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,Z)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,Z){let K=this.elements;return K[0]=J,K[2]=Q,K[1]=$,K[3]=Z,this}}function $Z(J,Q,$,Z){let K=MY(Z);switch($){case 1021:return J*Q;case 1028:return J*Q/K.components*K.byteLength;case 1029:return J*Q/K.components*K.byteLength;case 1030:return J*Q*2/K.components*K.byteLength;case 1031:return J*Q*2/K.components*K.byteLength;case 1022:return J*Q*3/K.components*K.byteLength;case 1023:return J*Q*4/K.components*K.byteLength;case 1033:return J*Q*4/K.components*K.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function MY(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window<"u")if(window.__THREE__)m0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";function vW(){let J=null,Q=!1,$=null,Z=null;function K(W,X){Z=J.requestAnimationFrame(K),$(W,X)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;Z=J.requestAnimationFrame(K),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(Z);Q=!1},setAnimationLoop:function(W){$=W},setContext:function(W){J=W}}}function LY(J){let Q=new WeakMap;function $(Y,H){let{array:U,usage:N}=Y,E=U.byteLength,G=J.createBuffer();J.bindBuffer(H,G),J.bufferData(H,U,N),Y.onUploadCallback();let D;if(U instanceof Float32Array)D=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)D=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(Y.isFloat16BufferAttribute)D=J.HALF_FLOAT;else D=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)D=J.SHORT;else if(U instanceof Uint32Array)D=J.UNSIGNED_INT;else if(U instanceof Int32Array)D=J.INT;else if(U instanceof Int8Array)D=J.BYTE;else if(U instanceof Uint8Array)D=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)D=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:G,type:D,bytesPerElement:U.BYTES_PER_ELEMENT,version:Y.version,size:E}}function Z(Y,H,U){let{array:N,updateRanges:E}=H;if(J.bindBuffer(U,Y),E.length===0)J.bufferSubData(U,0,N);else{E.sort((D,M)=>D.start-M.start);let G=0;for(let D=1;D<E.length;D++){let M=E[G],I=E[D];if(I.start<=M.start+M.count+1)M.count=Math.max(M.count,I.start+I.count-M.start);else++G,E[G]=I}E.length=G+1;for(let D=0,M=E.length;D<M;D++){let I=E[D];J.bufferSubData(U,I.start*N.BYTES_PER_ELEMENT,N,I.start,I.count)}H.clearUpdateRanges()}H.onUploadCallback()}function K(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function W(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let H=Q.get(Y);if(H)J.deleteBuffer(H.buffer),Q.delete(Y)}function X(Y,H){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let N=Q.get(Y);if(!N||N.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let U=Q.get(Y);if(U===void 0)Q.set(Y,$(Y,H));else if(U.version<Y.version){if(U.size!==Y.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(U.buffer,Y,H),U.version=Y.version}}return{get:K,remove:W,update:X}}var kY=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,VY=`#ifdef USE_ALPHAHASH
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
#endif`,BY=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,IY=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_Y=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,AY=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,CY=`#ifdef USE_AOMAP
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
#endif`,zY=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PY=`#ifdef USE_BATCHING
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
#endif`,wY=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,TY=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,SY=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jY=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yY=`#ifdef USE_IRIDESCENCE
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
#endif`,vY=`#ifdef USE_BUMPMAP
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
#endif`,fY=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bY=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hY=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xY=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gY=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pY=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mY=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lY=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,dY=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,uY=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cY=`vec3 transformedNormal = objectNormal;
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
#endif`,nY=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sY=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iY=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oY=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aY="gl_FragColor = linearToOutputTexel( gl_FragColor );",rY=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tY=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,eY=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,JH=`#ifdef USE_ENVMAP
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
#endif`,QH=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$H=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ZH=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,KH=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,WH=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,XH=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YH=`#ifdef USE_GRADIENTMAP
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
}`,HH=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,UH=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GH=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NH=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,EH=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,qH=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,DH=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FH=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,OH=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RH=`PhysicalMaterial material;
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,MH=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
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
}`,LH=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kH=`#if defined( RE_IndirectDiffuse )
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
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,VH=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,BH=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,IH=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_H=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AH=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CH=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zH=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,PH=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wH=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,TH=`#if defined( USE_POINTS_UV )
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
#endif`,SH=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jH=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yH=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vH=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fH=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bH=`#ifdef USE_MORPHTARGETS
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
#endif`,hH=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xH=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gH=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pH=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mH=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lH=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,dH=`#ifdef USE_NORMALMAP
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
#endif`,uH=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cH=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nH=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sH=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iH=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oH=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,aH=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rH=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tH=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eH=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,JU=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QU=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$U=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
#endif`,ZU=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,KU=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,WU=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,XU=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YU=`#ifdef USE_SKINNING
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
#endif`,HU=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,UU=`#ifdef USE_SKINNING
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
#endif`,GU=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,NU=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,EU=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qU=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,DU=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,FU=`#ifdef USE_TRANSMISSION
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
#endif`,OU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LU=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,kU=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VU=`uniform sampler2D t2D;
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
}`,BU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IU=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_U=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AU=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CU=`#include <common>
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
}`,zU=`#if DEPTH_PACKING == 3200
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
}`,PU=`#define DISTANCE
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
}`,wU=`#define DISTANCE
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
void main() {
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
}`,TU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,SU=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jU=`uniform float scale;
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
}`,yU=`uniform vec3 diffuse;
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
}`,vU=`#include <common>
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
}`,fU=`uniform vec3 diffuse;
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
}`,bU=`#define LAMBERT
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
}`,hU=`#define LAMBERT
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
}`,xU=`#define MATCAP
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
}`,gU=`#define MATCAP
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
}`,pU=`#define NORMAL
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
}`,mU=`#define NORMAL
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
}`,lU=`#define PHONG
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
}`,dU=`#define PHONG
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
}`,uU=`#define STANDARD
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
}`,cU=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,nU=`#define TOON
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
}`,sU=`#define TOON
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
}`,iU=`uniform float size;
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
}`,oU=`uniform vec3 diffuse;
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
}`,aU=`#include <common>
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
}`,rU=`uniform vec3 color;
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
}`,tU=`uniform float rotation;
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
}`,eU=`uniform vec3 diffuse;
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
}`,t0={alphahash_fragment:kY,alphahash_pars_fragment:VY,alphamap_fragment:BY,alphamap_pars_fragment:IY,alphatest_fragment:_Y,alphatest_pars_fragment:AY,aomap_fragment:CY,aomap_pars_fragment:zY,batching_pars_vertex:PY,batching_vertex:wY,begin_vertex:TY,beginnormal_vertex:SY,bsdfs:jY,iridescence_fragment:yY,bumpmap_pars_fragment:vY,clipping_planes_fragment:fY,clipping_planes_pars_fragment:bY,clipping_planes_pars_vertex:hY,clipping_planes_vertex:xY,color_fragment:gY,color_pars_fragment:pY,color_pars_vertex:mY,color_vertex:lY,common:dY,cube_uv_reflection_fragment:uY,defaultnormal_vertex:cY,displacementmap_pars_vertex:nY,displacementmap_vertex:sY,emissivemap_fragment:iY,emissivemap_pars_fragment:oY,colorspace_fragment:aY,colorspace_pars_fragment:rY,envmap_fragment:tY,envmap_common_pars_fragment:eY,envmap_pars_fragment:JH,envmap_pars_vertex:QH,envmap_physical_pars_fragment:EH,envmap_vertex:$H,fog_vertex:ZH,fog_pars_vertex:KH,fog_fragment:WH,fog_pars_fragment:XH,gradientmap_pars_fragment:YH,lightmap_pars_fragment:HH,lights_lambert_fragment:UH,lights_lambert_pars_fragment:GH,lights_pars_begin:NH,lights_toon_fragment:qH,lights_toon_pars_fragment:DH,lights_phong_fragment:FH,lights_phong_pars_fragment:OH,lights_physical_fragment:RH,lights_physical_pars_fragment:MH,lights_fragment_begin:LH,lights_fragment_maps:kH,lights_fragment_end:VH,lightprobes_pars_fragment:BH,logdepthbuf_fragment:IH,logdepthbuf_pars_fragment:_H,logdepthbuf_pars_vertex:AH,logdepthbuf_vertex:CH,map_fragment:zH,map_pars_fragment:PH,map_particle_fragment:wH,map_particle_pars_fragment:TH,metalnessmap_fragment:SH,metalnessmap_pars_fragment:jH,morphinstance_vertex:yH,morphcolor_vertex:vH,morphnormal_vertex:fH,morphtarget_pars_vertex:bH,morphtarget_vertex:hH,normal_fragment_begin:xH,normal_fragment_maps:gH,normal_pars_fragment:pH,normal_pars_vertex:mH,normal_vertex:lH,normalmap_pars_fragment:dH,clearcoat_normal_fragment_begin:uH,clearcoat_normal_fragment_maps:cH,clearcoat_pars_fragment:nH,iridescence_pars_fragment:sH,opaque_fragment:iH,packing:oH,premultiplied_alpha_fragment:aH,project_vertex:rH,dithering_fragment:tH,dithering_pars_fragment:eH,roughnessmap_fragment:JU,roughnessmap_pars_fragment:QU,shadowmap_pars_fragment:$U,shadowmap_pars_vertex:ZU,shadowmap_vertex:KU,shadowmask_pars_fragment:WU,skinbase_vertex:XU,skinning_pars_vertex:YU,skinning_vertex:HU,skinnormal_vertex:UU,specularmap_fragment:GU,specularmap_pars_fragment:NU,tonemapping_fragment:EU,tonemapping_pars_fragment:qU,transmission_fragment:DU,transmission_pars_fragment:FU,uv_pars_fragment:OU,uv_pars_vertex:RU,uv_vertex:MU,worldpos_vertex:LU,background_vert:kU,background_frag:VU,backgroundCube_vert:BU,backgroundCube_frag:IU,cube_vert:_U,cube_frag:AU,depth_vert:CU,depth_frag:zU,distance_vert:PU,distance_frag:wU,equirect_vert:TU,equirect_frag:SU,linedashed_vert:jU,linedashed_frag:yU,meshbasic_vert:vU,meshbasic_frag:fU,meshlambert_vert:bU,meshlambert_frag:hU,meshmatcap_vert:xU,meshmatcap_frag:gU,meshnormal_vert:pU,meshnormal_frag:mU,meshphong_vert:lU,meshphong_frag:dU,meshphysical_vert:uU,meshphysical_frag:cU,meshtoon_vert:nU,meshtoon_frag:sU,points_vert:iU,points_frag:oU,shadow_vert:aU,shadow_frag:rU,sprite_vert:tU,sprite_frag:eU},R0={common:{diffuse:{value:new b0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new c0},alphaMap:{value:null},alphaMapTransform:{value:new c0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new c0}},envmap:{envMap:{value:null},envMapRotation:{value:new c0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new c0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new c0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new c0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new c0},normalScale:{value:new Z0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new c0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new c0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new c0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new c0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new b0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new b0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new c0},alphaTest:{value:0},uvTransform:{value:new c0}},sprite:{diffuse:{value:new b0(16777215)},opacity:{value:1},center:{value:new Z0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new c0},alphaMap:{value:null},alphaMapTransform:{value:new c0},alphaTest:{value:0}}},k8={basic:{uniforms:dJ([R0.common,R0.specularmap,R0.envmap,R0.aomap,R0.lightmap,R0.fog]),vertexShader:t0.meshbasic_vert,fragmentShader:t0.meshbasic_frag},lambert:{uniforms:dJ([R0.common,R0.specularmap,R0.envmap,R0.aomap,R0.lightmap,R0.emissivemap,R0.bumpmap,R0.normalmap,R0.displacementmap,R0.fog,R0.lights,{emissive:{value:new b0(0)},envMapIntensity:{value:1}}]),vertexShader:t0.meshlambert_vert,fragmentShader:t0.meshlambert_frag},phong:{uniforms:dJ([R0.common,R0.specularmap,R0.envmap,R0.aomap,R0.lightmap,R0.emissivemap,R0.bumpmap,R0.normalmap,R0.displacementmap,R0.fog,R0.lights,{emissive:{value:new b0(0)},specular:{value:new b0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:t0.meshphong_vert,fragmentShader:t0.meshphong_frag},standard:{uniforms:dJ([R0.common,R0.envmap,R0.aomap,R0.lightmap,R0.emissivemap,R0.bumpmap,R0.normalmap,R0.displacementmap,R0.roughnessmap,R0.metalnessmap,R0.fog,R0.lights,{emissive:{value:new b0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:t0.meshphysical_vert,fragmentShader:t0.meshphysical_frag},toon:{uniforms:dJ([R0.common,R0.aomap,R0.lightmap,R0.emissivemap,R0.bumpmap,R0.normalmap,R0.displacementmap,R0.gradientmap,R0.fog,R0.lights,{emissive:{value:new b0(0)}}]),vertexShader:t0.meshtoon_vert,fragmentShader:t0.meshtoon_frag},matcap:{uniforms:dJ([R0.common,R0.bumpmap,R0.normalmap,R0.displacementmap,R0.fog,{matcap:{value:null}}]),vertexShader:t0.meshmatcap_vert,fragmentShader:t0.meshmatcap_frag},points:{uniforms:dJ([R0.points,R0.fog]),vertexShader:t0.points_vert,fragmentShader:t0.points_frag},dashed:{uniforms:dJ([R0.common,R0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:t0.linedashed_vert,fragmentShader:t0.linedashed_frag},depth:{uniforms:dJ([R0.common,R0.displacementmap]),vertexShader:t0.depth_vert,fragmentShader:t0.depth_frag},normal:{uniforms:dJ([R0.common,R0.bumpmap,R0.normalmap,R0.displacementmap,{opacity:{value:1}}]),vertexShader:t0.meshnormal_vert,fragmentShader:t0.meshnormal_frag},sprite:{uniforms:dJ([R0.sprite,R0.fog]),vertexShader:t0.sprite_vert,fragmentShader:t0.sprite_frag},background:{uniforms:{uvTransform:{value:new c0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:t0.background_vert,fragmentShader:t0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new c0}},vertexShader:t0.backgroundCube_vert,fragmentShader:t0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:t0.cube_vert,fragmentShader:t0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:t0.equirect_vert,fragmentShader:t0.equirect_frag},distance:{uniforms:dJ([R0.common,R0.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:t0.distance_vert,fragmentShader:t0.distance_frag},shadow:{uniforms:dJ([R0.lights,R0.fog,{color:{value:new b0(0)},opacity:{value:1}}]),vertexShader:t0.shadow_vert,fragmentShader:t0.shadow_frag}};k8.physical={uniforms:dJ([k8.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new c0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new c0},clearcoatNormalScale:{value:new Z0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new c0},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new c0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new c0},sheen:{value:0},sheenColor:{value:new b0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new c0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new c0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new c0},transmissionSamplerSize:{value:new Z0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new c0},attenuationDistance:{value:0},attenuationColor:{value:new b0(0)},specularColor:{value:new b0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new c0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new c0},anisotropyVector:{value:new Z0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new c0}}]),vertexShader:t0.meshphysical_vert,fragmentShader:t0.meshphysical_frag};var o6={r:0,b:0,g:0},JG=new MJ,fW=new c0;fW.set(-1,0,0,0,1,0,0,0,1);function QG(J,Q,$,Z,K,W){let X=new b0(0),Y=K===!0?0:1,H,U,N=null,E=0,G=null;function D(C){let A=C.isScene===!0?C.background:null;if(A&&A.isTexture){let L=C.backgroundBlurriness>0;A=Q.get(A,L)}return A}function M(C){let A=!1,L=D(C);if(L===null)F(X,Y);else if(L&&L.isColor)F(L,1),A=!0;let _=J.xr.getEnvironmentBlendMode();if(_==="additive")$.buffers.color.setClear(0,0,0,1,W);else if(_==="alpha-blend")$.buffers.color.setClear(0,0,0,0,W);if(J.autoClear||A)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function I(C,A){let L=D(A);if(L&&(L.isCubeTexture||L.mapping===A7)){if(U===void 0)U=new kJ(new r9(1,1,1),new _J({name:"BackgroundCubeMaterial",uniforms:M9(k8.backgroundCube.uniforms),vertexShader:k8.backgroundCube.vertexShader,fragmentShader:k8.backgroundCube.fragmentShader,side:hJ,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(_,P,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Z.update(U);if(U.material.uniforms.envMap.value=L,U.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(JG.makeRotationFromEuler(A.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1)U.material.uniforms.backgroundRotation.value.premultiply(fW);if(U.material.toneMapped=QJ.getTransfer(L.colorSpace)!==EJ,N!==L||E!==L.version||G!==J.toneMapping)U.material.needsUpdate=!0,N=L,E=L.version,G=J.toneMapping;U.layers.enableAll(),C.unshift(U,U.geometry,U.material,0,0,null)}else if(L&&L.isTexture){if(H===void 0)H=new kJ(new i8(2,2),new _J({name:"BackgroundMaterial",uniforms:M9(k8.background.uniforms),vertexShader:k8.background.vertexShader,fragmentShader:k8.background.fragmentShader,side:n9,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),H.geometry.deleteAttribute("normal"),Object.defineProperty(H.material,"map",{get:function(){return this.uniforms.t2D.value}}),Z.update(H);if(H.material.uniforms.t2D.value=L,H.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,H.material.toneMapped=QJ.getTransfer(L.colorSpace)!==EJ,L.matrixAutoUpdate===!0)L.updateMatrix();if(H.material.uniforms.uvTransform.value.copy(L.matrix),N!==L||E!==L.version||G!==J.toneMapping)H.material.needsUpdate=!0,N=L,E=L.version,G=J.toneMapping;H.layers.enableAll(),C.unshift(H,H.geometry,H.material,0,0,null)}}function F(C,A){C.getRGB(o6,h$(J)),$.buffers.color.setClear(o6.r,o6.g,o6.b,A,W)}function q(){if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0;if(H!==void 0)H.geometry.dispose(),H.material.dispose(),H=void 0}return{getClearColor:function(){return X},setClearColor:function(C,A=1){X.set(C),Y=A,F(X,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(C){Y=C,F(X,Y)},render:M,addToRenderList:I,dispose:q}}function $G(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},K=G(null),W=K,X=!1;function Y(y,b,u,w,m){let o=!1,p=E(y,w,u,b);if(W!==p)W=p,U(W.object);if(o=D(y,w,u,m),o)M(y,w,u,m);if(m!==null)Q.update(m,J.ELEMENT_ARRAY_BUFFER);if(o||X){if(X=!1,L(y,b,u,w),m!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(m).buffer)}}function H(){return J.createVertexArray()}function U(y){return J.bindVertexArray(y)}function N(y){return J.deleteVertexArray(y)}function E(y,b,u,w){let m=w.wireframe===!0,o=Z[b.id];if(o===void 0)o={},Z[b.id]=o;let p=y.isInstancedMesh===!0?y.id:0,W0=o[p];if(W0===void 0)W0={},o[p]=W0;let c=W0[u.id];if(c===void 0)c={},W0[u.id]=c;let r=c[m];if(r===void 0)r=G(H()),c[m]=r;return r}function G(y){let b=[],u=[],w=[];for(let m=0;m<$;m++)b[m]=0,u[m]=0,w[m]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:u,attributeDivisors:w,object:y,attributes:{},index:null}}function D(y,b,u,w){let m=W.attributes,o=b.attributes,p=0,W0=u.getAttributes();for(let c in W0)if(W0[c].location>=0){let Q0=m[c],T0=o[c];if(T0===void 0){if(c==="instanceMatrix"&&y.instanceMatrix)T0=y.instanceMatrix;if(c==="instanceColor"&&y.instanceColor)T0=y.instanceColor}if(Q0===void 0)return!0;if(Q0.attribute!==T0)return!0;if(T0&&Q0.data!==T0.data)return!0;p++}if(W.attributesNum!==p)return!0;if(W.index!==w)return!0;return!1}function M(y,b,u,w){let m={},o=b.attributes,p=0,W0=u.getAttributes();for(let c in W0)if(W0[c].location>=0){let Q0=o[c];if(Q0===void 0){if(c==="instanceMatrix"&&y.instanceMatrix)Q0=y.instanceMatrix;if(c==="instanceColor"&&y.instanceColor)Q0=y.instanceColor}let T0={};if(T0.attribute=Q0,Q0&&Q0.data)T0.data=Q0.data;m[c]=T0,p++}W.attributes=m,W.attributesNum=p,W.index=w}function I(){let y=W.newAttributes;for(let b=0,u=y.length;b<u;b++)y[b]=0}function F(y){q(y,0)}function q(y,b){let{newAttributes:u,enabledAttributes:w,attributeDivisors:m}=W;if(u[y]=1,w[y]===0)J.enableVertexAttribArray(y),w[y]=1;if(m[y]!==b)J.vertexAttribDivisor(y,b),m[y]=b}function C(){let{newAttributes:y,enabledAttributes:b}=W;for(let u=0,w=b.length;u<w;u++)if(b[u]!==y[u])J.disableVertexAttribArray(u),b[u]=0}function A(y,b,u,w,m,o,p){if(p===!0)J.vertexAttribIPointer(y,b,u,m,o);else J.vertexAttribPointer(y,b,u,w,m,o)}function L(y,b,u,w){I();let m=w.attributes,o=u.getAttributes(),p=b.defaultAttributeValues;for(let W0 in o){let c=o[W0];if(c.location>=0){let r=m[W0];if(r===void 0){if(W0==="instanceMatrix"&&y.instanceMatrix)r=y.instanceMatrix;if(W0==="instanceColor"&&y.instanceColor)r=y.instanceColor}if(r!==void 0){let{normalized:Q0,itemSize:T0}=r,S0=Q.get(r);if(S0===void 0)continue;let{buffer:WJ,type:n0,bytesPerElement:n}=S0,K0=n0===J.INT||n0===J.UNSIGNED_INT||r.gpuType===bQ;if(r.isInterleavedBufferAttribute){let X0=r.data,j0=X0.stride,x0=r.offset;if(X0.isInstancedInterleavedBuffer){for(let B0=0;B0<c.locationSize;B0++)q(c.location+B0,X0.meshPerAttribute);if(y.isInstancedMesh!==!0&&w._maxInstanceCount===void 0)w._maxInstanceCount=X0.meshPerAttribute*X0.count}else for(let B0=0;B0<c.locationSize;B0++)F(c.location+B0);J.bindBuffer(J.ARRAY_BUFFER,WJ);for(let B0=0;B0<c.locationSize;B0++)A(c.location+B0,T0/c.locationSize,n0,Q0,j0*n,(x0+T0/c.locationSize*B0)*n,K0)}else{if(r.isInstancedBufferAttribute){for(let X0=0;X0<c.locationSize;X0++)q(c.location+X0,r.meshPerAttribute);if(y.isInstancedMesh!==!0&&w._maxInstanceCount===void 0)w._maxInstanceCount=r.meshPerAttribute*r.count}else for(let X0=0;X0<c.locationSize;X0++)F(c.location+X0);J.bindBuffer(J.ARRAY_BUFFER,WJ);for(let X0=0;X0<c.locationSize;X0++)A(c.location+X0,T0/c.locationSize,n0,Q0,T0*n,T0/c.locationSize*X0*n,K0)}}else if(p!==void 0){let Q0=p[W0];if(Q0!==void 0)switch(Q0.length){case 2:J.vertexAttrib2fv(c.location,Q0);break;case 3:J.vertexAttrib3fv(c.location,Q0);break;case 4:J.vertexAttrib4fv(c.location,Q0);break;default:J.vertexAttrib1fv(c.location,Q0)}}}}C()}function _(){V();for(let y in Z){let b=Z[y];for(let u in b){let w=b[u];for(let m in w){let o=w[m];for(let p in o)N(o[p].object),delete o[p];delete w[m]}}delete Z[y]}}function P(y){if(Z[y.id]===void 0)return;let b=Z[y.id];for(let u in b){let w=b[u];for(let m in w){let o=w[m];for(let p in o)N(o[p].object),delete o[p];delete w[m]}}delete Z[y.id]}function z(y){for(let b in Z){let u=Z[b];for(let w in u){let m=u[w];if(m[y.id]===void 0)continue;let o=m[y.id];for(let p in o)N(o[p].object),delete o[p];delete m[y.id]}}}function O(y){for(let b in Z){let u=Z[b],w=y.isInstancedMesh===!0?y.id:0,m=u[w];if(m===void 0)continue;for(let o in m){let p=m[o];for(let W0 in p)N(p[W0].object),delete p[W0];delete m[o]}if(delete u[w],Object.keys(u).length===0)delete Z[b]}}function V(){if(h(),X=!0,W===K)return;W=K,U(W.object)}function h(){K.geometry=null,K.program=null,K.wireframe=!1}return{setup:Y,reset:V,resetDefaultState:h,dispose:_,releaseStatesOfGeometry:P,releaseStatesOfObject:O,releaseStatesOfProgram:z,initAttributes:I,enableAttribute:F,disableUnusedAttributes:C}}function ZG(J,Q,$){let Z;function K(H){Z=H}function W(H,U){J.drawArrays(Z,H,U),$.update(U,Z,1)}function X(H,U,N){if(N===0)return;J.drawArraysInstanced(Z,H,U,N),$.update(U,Z,N)}function Y(H,U,N){if(N===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,H,0,U,0,N);let G=0;for(let D=0;D<N;D++)G+=U[D];$.update(G,Z,1)}this.setMode=K,this.render=W,this.renderInstances=X,this.renderMultiDraw=Y}function KG(J,Q,$,Z){let K;function W(){if(K!==void 0)return K;if(Q.has("EXT_texture_filter_anisotropic")===!0){let z=Q.get("EXT_texture_filter_anisotropic");K=J.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else K=0;return K}function X(z){if(z!==R8&&Z.convert(z)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(z){let O=z===PJ&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(z!==U8&&z!==T8&&!O&&Z.convert(z)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function H(z){if(z==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";z="mediump"}if(z==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=$.precision!==void 0?$.precision:"highp",N=H(U);if(N!==U)m0("WebGLRenderer:",U,"not supported, using",N,"instead."),U=N;let E=$.logarithmicDepthBuffer===!0,G=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if($.reversedDepthBuffer===!0&&G===!1)m0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let D=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),M=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),I=J.getParameter(J.MAX_TEXTURE_SIZE),F=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),q=J.getParameter(J.MAX_VERTEX_ATTRIBS),C=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),A=J.getParameter(J.MAX_VARYING_VECTORS),L=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),_=J.getParameter(J.MAX_SAMPLES),P=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:W,getMaxPrecision:H,textureFormatReadable:X,textureTypeReadable:Y,precision:U,logarithmicDepthBuffer:E,reversedDepthBuffer:G,maxTextures:D,maxVertexTextures:M,maxTextureSize:I,maxCubemapSize:F,maxAttributes:q,maxVertexUniforms:C,maxVaryings:A,maxFragmentUniforms:L,maxSamples:_,samples:P}}function WG(J){let Q=this,$=null,Z=0,K=!1,W=!1,X=new F8,Y=new c0,H={value:null,needsUpdate:!1};this.uniform=H,this.numPlanes=0,this.numIntersection=0,this.init=function(E,G){let D=E.length!==0||G||Z!==0||K;return K=G,Z=E.length,D},this.beginShadows=function(){W=!0,N(null)},this.endShadows=function(){W=!1},this.setGlobalState=function(E,G){$=N(E,G,0)},this.setState=function(E,G,D){let{clippingPlanes:M,clipIntersection:I,clipShadows:F}=E,q=J.get(E);if(!K||M===null||M.length===0||W&&!F)if(W)N(null);else U();else{let C=W?0:Z,A=C*4,L=q.clippingState||null;H.value=L,L=N(M,G,A,D);for(let _=0;_!==A;++_)L[_]=$[_];q.clippingState=L,this.numIntersection=I?this.numPlanes:0,this.numPlanes+=C}};function U(){if(H.value!==$)H.value=$,H.needsUpdate=Z>0;Q.numPlanes=Z,Q.numIntersection=0}function N(E,G,D,M){let I=E!==null?E.length:0,F=null;if(I!==0){if(F=H.value,M!==!0||F===null){let q=D+I*4,C=G.matrixWorldInverse;if(Y.getNormalMatrix(C),F===null||F.length<q)F=new Float32Array(q);for(let A=0,L=D;A!==I;++A,L+=4)X.copy(E[A]).applyMatrix4(C,Y),X.normal.toArray(F,L),F[L+3]=X.constant}H.value=F,H.needsUpdate=!0}return Q.numPlanes=I,Q.numIntersection=0,F}}var J7=4,XG=6,YG=20,HG=256,c7=new t9,qW=new b0,ZZ=null,KZ=0,WZ=0,XZ=!1,UG=new j,B9=new j;class o7{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,$=0.1,Z=100,K={}){let{size:W=256,position:X=UG}=K;ZZ=this._renderer.getRenderTarget(),KZ=this._renderer.getActiveCubeFace(),WZ=this._renderer.getActiveMipmapLevel(),XZ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(W);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,$,Z,Y,X),Q>0)this._blur(Y,0,0,Q);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=OW(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=FW(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(ZZ,KZ,WZ),this._renderer.xr.enabled=XZ,J.scissorTest=!1,e9(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===i9||J.mapping===U9)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);ZZ=this._renderer.getRenderTarget(),KZ=this._renderer.getActiveCubeFace(),WZ=this._renderer.getActiveMipmapLevel(),XZ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:iJ,minFilter:iJ,generateMipmaps:!1,type:PJ,format:R8,colorSpace:L$,depthBuffer:!1},Z=DW(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=DW(J,Q,$);let{_lodMax:K}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=GG(K)),this._blurMaterial=EG(K,J,Q),this._ggxMaterial=NG(K,J,Q)}return Z}_compileMaterial(J){let Q=new kJ(new yJ,J);this._renderer.compile(Q,c7)}_sceneToCubeUV(J,Q,$,Z,K){let Y=new vJ(90,1,Q,$),H=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],N=this._renderer,E=N.autoClear,G=N.toneMapping;if(N.getClearColor(qW),N.toneMapping=H8,N.autoClear=!1,N.state.buffers.depth.getReversed())N.setRenderTarget(Z),N.clearDepth(),N.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new kJ(new r9,new G8({name:"PMREM.Background",side:hJ,depthWrite:!1,depthTest:!1}));let M=this._backgroundBox,I=M.material,F=!1,q=J.background;if(q){if(q.isColor)I.color.copy(q),J.background=null,F=!0}else I.color.copy(qW),F=!0;for(let C=0;C<6;C++){let A=C%3;if(A===0)Y.up.set(0,H[C],0),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x+U[C],K.y,K.z);else if(A===1)Y.up.set(0,0,H[C]),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x,K.y+U[C],K.z);else Y.up.set(0,H[C],0),Y.position.set(K.x,K.y,K.z),Y.lookAt(K.x,K.y,K.z+U[C]);let L=this._cubeSize;if(e9(Z,A*L,C>2?L:0,L,L),N.setRenderTarget(Z),F)N.render(M,Y);N.render(J,Y)}N.toneMapping=G,N.autoClear=E,J.background=q}_textureToCubeUV(J,Q){let $=this._renderer,Z=J.mapping===i9||J.mapping===U9;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=OW();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=FW();let K=Z?this._cubemapMaterial:this._equirectMaterial,W=this._lodMeshes[0];W.material=K;let X=K.uniforms;X.envMap.value=J;let Y=this._cubeSize;e9(Q,0,0,3*Y,2*Y),$.setRenderTarget(Q),$.render(W,c7)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let Z=this._lodMeshes.length;for(let K=1;K<Z;K++)this._applyGGXFilter(J,K-1,K);Q.autoClear=$}_applyGGXFilter(J,Q,$){let Z=this._renderer,K=this._pingPongRenderTarget,W=this._ggxMaterial,X=this._lodMeshes[$];X.material=W;let Y=W.uniforms,H=$/(this._lodMeshes.length-1),U=Q/(this._lodMeshes.length-1),N=Math.sqrt(H*H-U*U),E=H*1.25,G=N*E,{_lodMax:D}=this,M=this._sizeLods[$],I=3*M*($>D-J7?$-D+J7:0),F=4*(this._cubeSize-M);Y.envMap.value=J.texture,Y.roughness.value=G,Y.mipInt.value=D-Q,e9(K,I,F,3*M,2*M),Z.setRenderTarget(K),Z.render(X,c7),Y.envMap.value=K.texture,Y.roughness.value=0,Y.mipInt.value=D-$,e9(J,I,F,3*M,2*M),Z.setRenderTarget(J),Z.render(X,c7)}_blur(J,Q,$,Z){let K=this._pingPongRenderTarget,W=Math.min(Z,Math.PI)/Math.SQRT2;this._blurPass(J,K,Q,$,W),this._blurPass(K,J,$,$,W)}_blurPass(J,Q,$,Z,K){let W=this._renderer,X=this._blurMaterial,Y=this._lodMeshes[Z];Y.material=X;let H=X.uniforms;H.envMap.value=J.texture,H.sigma.value=K,H.mipInt.value=this._lodMax-$;let U=this._sizeLods[Z],N=3*U*(Z>this._lodMax-J7?Z-this._lodMax+J7:0),E=4*(this._cubeSize-U);e9(Q,N,E,3*U,2*U),W.setRenderTarget(Q),W.render(Y,c7)}}function GG(J){let Q=[],$=[],Z=J,K=J-J7+1+XG;for(let W=0;W<K;W++){let X=Math.pow(2,Z);Q.push(X);let Y=1/(X-2),H=-Y,U=1+Y,N=[H,H,U,H,U,U,H,H,U,U,H,U],E=6,G=6,D=3,M=new Float32Array(D*G*E),I=new Float32Array(D*G*E);for(let q=0;q<E;q++){let C=q%3*2/3-1,A=q>2?0:-1,L=[C,A,0,C+0.6666666666666666,A,0,C+0.6666666666666666,A+1,0,C,A,0,C+0.6666666666666666,A+1,0,C,A+1,0];M.set(L,D*G*q);for(let _=0;_<G;_++){let P=N[_*2]*2-1,z=N[_*2+1]*2-1;if(q===0)B9.set(1,z,P);else if(q===1)B9.set(-P,1,-z);else if(q===2)B9.set(-P,z,1);else if(q===3)B9.set(-1,z,-P);else if(q===4)B9.set(-P,-1,z);else B9.set(P,z,-1);B9.toArray(I,(q*G+_)*D)}}let F=new yJ;if(F.setAttribute("position",new Y8(M,D)),F.setAttribute("outputDirection",new Y8(I,D)),$.push(new kJ(F,null)),Z>J7)Z--}return{lodMeshes:$,sizeLods:Q}}function DW(J,Q,$){let Z=new IJ(J,Q,$);return Z.texture.mapping=A7,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function e9(J,Q,$,Z,K){J.viewport.set(Q,$,Z,K),J.scissor.set(Q,$,Z,K)}function NG(J,Q,$){return new _J({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:HG,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:r6(),fragmentShader:`

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
		`,blending:Q8,depthTest:!1,depthWrite:!1})}function EG(J,Q,$){return new _J({name:"SphericalGaussianBlur",defines:{SAMPLES:YG,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:r6(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Q8,depthTest:!1,depthWrite:!1})}function FW(){return new _J({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:r6(),fragmentShader:`

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
		`,blending:Q8,depthTest:!1,depthWrite:!1})}function OW(){return new _J({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:r6(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Q8,depthTest:!1,depthWrite:!1})}function r6(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class NZ extends IJ{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},Z=[$,$,$,$,$,$];this.texture=new h6(Z),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},Z=new r9(5,5,5),K=new _J({name:"CubemapFromEquirect",uniforms:M9($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:hJ,blending:Q8});K.uniforms.tEquirect.value=Q;let W=new kJ(Z,K),X=Q.minFilter;if(Q.minFilter===N9)Q.minFilter=iJ;return new r$(1,10,this).update(J,W),Q.minFilter=X,W.geometry.dispose(),W.material.dispose(),this}clear(J,Q=!0,$=!0,Z=!0){let K=J.getRenderTarget();for(let W=0;W<6;W++)J.setRenderTarget(this,W),J.clear(Q,$,Z);J.setRenderTarget(K)}}function qG(J){let Q=new WeakMap,$=new WeakMap,Z=null;function K(G,D=!1){if(G===null||G===void 0)return null;if(D)return X(G);return W(G)}function W(G){if(G&&G.isTexture){let D=G.mapping;if(D===B6||D===I6)if(Q.has(G)){let M=Q.get(G).texture;return Y(M,G.mapping)}else{let M=G.image;if(M&&M.height>0){let I=new NZ(M.height);return I.fromEquirectangularTexture(J,G),Q.set(G,I),G.addEventListener("dispose",U),Y(I.texture,G.mapping)}else return null}}return G}function X(G){if(G&&G.isTexture){let D=G.mapping,M=D===B6||D===I6,I=D===i9||D===U9;if(M||I){let F=$.get(G),q=F!==void 0?F.texture.pmremVersion:0;if(G.isRenderTargetTexture&&G.pmremVersion!==q){if(Z===null)Z=new o7(J);return F=M?Z.fromEquirectangular(G,F):Z.fromCubemap(G,F),F.texture.pmremVersion=G.pmremVersion,$.set(G,F),F.texture}else if(F!==void 0)return F.texture;else{let C=G.image;if(M&&C&&C.height>0||I&&C&&H(C)){if(Z===null)Z=new o7(J);return F=M?Z.fromEquirectangular(G):Z.fromCubemap(G),F.texture.pmremVersion=G.pmremVersion,$.set(G,F),G.addEventListener("dispose",N),F.texture}else return null}}}return G}function Y(G,D){if(D===B6)G.mapping=i9;else if(D===I6)G.mapping=U9;return G}function H(G){let D=0,M=6;for(let I=0;I<M;I++)if(G[I]!==void 0)D++;return D===M}function U(G){let D=G.target;D.removeEventListener("dispose",U);let M=Q.get(D);if(M!==void 0)Q.delete(D),M.dispose()}function N(G){let D=G.target;D.removeEventListener("dispose",N);let M=$.get(D);if(M!==void 0)$.delete(D),M.dispose()}function E(){if(Q=new WeakMap,$=new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:K,dispose:E}}function DG(J){let Q={};function $(Z){if(Q[Z]!==void 0)return Q[Z];let K=J.getExtension(Z);return Q[Z]=K,K}return{has:function(Z){return $(Z)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(Z){let K=$(Z);if(K===null)K9("WebGLRenderer: "+Z+" extension not supported.");return K}}}function FG(J,Q,$,Z){let K={},W=new WeakMap;function X(E){let G=E.target;if(G.index!==null)Q.remove(G.index);for(let M in G.attributes)Q.remove(G.attributes[M]);G.removeEventListener("dispose",X),delete K[G.id];let D=W.get(G);if(D)Q.remove(D),W.delete(G);if(Z.releaseStatesOfGeometry(G),G.isInstancedBufferGeometry===!0)delete G._maxInstanceCount;$.memory.geometries--}function Y(E,G){if(K[G.id]===!0)return G;return G.addEventListener("dispose",X),K[G.id]=!0,$.memory.geometries++,G}function H(E){let G=E.attributes;for(let D in G)Q.update(G[D],J.ARRAY_BUFFER)}function U(E){let G=[],D=E.index,M=E.attributes.position,I=0;if(M===void 0)return;if(D!==null){let C=D.array;I=D.version;for(let A=0,L=C.length;A<L;A+=3){let _=C[A+0],P=C[A+1],z=C[A+2];G.push(_,P,P,z,z,_)}}else{let C=M.array;I=M.version;for(let A=0,L=C.length/3-1;A<L;A+=3){let _=A+0,P=A+1,z=A+2;G.push(_,P,P,z,z,_)}}let F=new(M.count>=65535?b6:f6)(G,1);F.version=I;let q=W.get(E);if(q)Q.remove(q);W.set(E,F)}function N(E){let G=W.get(E);if(G){let D=E.index;if(D!==null){if(G.version<D.version)U(E)}}else U(E);return W.get(E)}return{get:Y,update:H,getWireframeAttribute:N}}function OG(J,Q,$){let Z;function K(E){Z=E}let W,X;function Y(E){W=E.type,X=E.bytesPerElement}function H(E,G){J.drawElements(Z,G,W,E*X),$.update(G,Z,1)}function U(E,G,D){if(D===0)return;J.drawElementsInstanced(Z,G,W,E*X,D),$.update(G,Z,D)}function N(E,G,D){if(D===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,G,0,W,E,0,D);let I=0;for(let F=0;F<D;F++)I+=G[F];$.update(I,Z,1)}this.setMode=K,this.setIndex=Y,this.render=H,this.renderInstances=U,this.renderMultiDraw=N}function RG(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(W,X,Y){switch($.calls++,X){case J.TRIANGLES:$.triangles+=Y*(W/3);break;case J.LINES:$.lines+=Y*(W/2);break;case J.LINE_STRIP:$.lines+=Y*(W-1);break;case J.LINE_LOOP:$.lines+=Y*W;break;case J.POINTS:$.points+=Y*W;break;default:l0("WebGLInfo: Unknown draw mode:",X);break}}function K(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:K,update:Z}}function MG(J,Q,$){let Z=new WeakMap,K=new LJ;function W(X,Y,H){let U=X.morphTargetInfluences,N=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,E=N!==void 0?N.length:0,G=Z.get(Y);if(G===void 0||G.count!==E){let V=function(){z.dispose(),Z.delete(Y),Y.removeEventListener("dispose",V)};if(G!==void 0)G.texture.dispose();let D=Y.morphAttributes.position!==void 0,M=Y.morphAttributes.normal!==void 0,I=Y.morphAttributes.color!==void 0,F=Y.morphAttributes.position||[],q=Y.morphAttributes.normal||[],C=Y.morphAttributes.color||[],A=0;if(D===!0)A=1;if(M===!0)A=2;if(I===!0)A=3;let L=Y.attributes.position.count*A,_=1;if(L>Q.maxTextureSize)_=Math.ceil(L/Q.maxTextureSize),L=Q.maxTextureSize;let P=new Float32Array(L*_*4*E),z=new y6(P,L,_,E);z.type=T8,z.needsUpdate=!0;let O=A*4;for(let h=0;h<E;h++){let y=F[h],b=q[h],u=C[h],w=L*_*4*h;for(let m=0;m<y.count;m++){let o=m*O;if(D===!0)K.fromBufferAttribute(y,m),P[w+o+0]=K.x,P[w+o+1]=K.y,P[w+o+2]=K.z,P[w+o+3]=0;if(M===!0)K.fromBufferAttribute(b,m),P[w+o+4]=K.x,P[w+o+5]=K.y,P[w+o+6]=K.z,P[w+o+7]=0;if(I===!0)K.fromBufferAttribute(u,m),P[w+o+8]=K.x,P[w+o+9]=K.y,P[w+o+10]=K.z,P[w+o+11]=u.itemSize===4?K.w:1}}G={count:E,texture:z,size:new Z0(L,_)},Z.set(Y,G),Y.addEventListener("dispose",V)}if(X.isInstancedMesh===!0&&X.morphTexture!==null)H.getUniforms().setValue(J,"morphTexture",X.morphTexture,$);else{let D=0;for(let I=0;I<U.length;I++)D+=U[I];let M=Y.morphTargetsRelative?1:1-D;H.getUniforms().setValue(J,"morphTargetBaseInfluence",M),H.getUniforms().setValue(J,"morphTargetInfluences",U)}H.getUniforms().setValue(J,"morphTargetsTexture",G.texture,$),H.getUniforms().setValue(J,"morphTargetsTextureSize",G.size)}return{update:W}}function LG(J,Q,$,Z,K){let W=new WeakMap;function X(U){let N=K.render.frame,E=U.geometry,G=Q.get(U,E);if(W.get(G)!==N)Q.update(G),W.set(G,N);if(U.isInstancedMesh){if(U.hasEventListener("dispose",H)===!1)U.addEventListener("dispose",H);if(W.get(U)!==N){if($.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)$.update(U.instanceColor,J.ARRAY_BUFFER);W.set(U,N)}}if(U.isSkinnedMesh){let D=U.skeleton;if(W.get(D)!==N)D.update(),W.set(D,N)}return G}function Y(){W=new WeakMap}function H(U){let N=U.target;if(N.removeEventListener("dispose",H),Z.releaseStatesOfObject(N),$.remove(N.instanceMatrix),N.instanceColor!==null)$.remove(N.instanceColor)}return{update:X,dispose:Y}}var kG={[L7]:"LINEAR_TONE_MAPPING",[k7]:"REINHARD_TONE_MAPPING",[V7]:"CINEON_TONE_MAPPING",[H9]:"ACES_FILMIC_TONE_MAPPING",[I7]:"AGX_TONE_MAPPING",[_7]:"NEUTRAL_TONE_MAPPING",[B7]:"CUSTOM_TONE_MAPPING"};function VG(J,Q,$,Z,K,W){let X=new IJ(Q,$,{type:J,depthBuffer:K,stencilBuffer:W,samples:Z?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),Y=null,H=null,U=new yJ;U.setAttribute("position",new HJ([-1,3,0,-1,-1,0,3,-1,0],3)),U.setAttribute("uv",new HJ([0,2,0,0,2,0],2));let N=new d7({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),E=new kJ(U,N),G=new t9(-1,1,1,-1,0,1),D=null,M=null,I=!1,F,q=null,C=[],A=!1;this.setSize=function(L,_){if(X.setSize(L,_),Y!==null)Y.setSize(L,_);if(H!==null)H.setSize(L,_);for(let P=0;P<C.length;P++){let z=C[P];if(z.setSize)z.setSize(L,_)}},this.setEffects=function(L){C=L,A=C.length>0&&C[0].isRenderPass===!0;let{width:_,height:P}=X;if(C.length>0&&Y===null)Y=new IJ(_,P,{type:PJ,depthBuffer:!1,stencilBuffer:!1}),H=new IJ(_,P,{type:PJ,depthBuffer:!1,stencilBuffer:!1});for(let z=0;z<C.length;z++){let O=C[z];if(O.setSize)O.setSize(_,P)}},this.begin=function(L,_){if(I)return!1;if(L.toneMapping===H8&&C.length===0)return!1;if(q=_,_!==null){let{width:P,height:z}=_;if(X.width!==P||X.height!==z)this.setSize(P,z)}if(A===!1)L.setRenderTarget(X);return F=L.toneMapping,L.toneMapping=H8,!0},this.hasRenderPass=function(){return A},this.end=function(L,_){L.toneMapping=F,I=!0;let P=X,z=Y;for(let O=0;O<C.length;O++){let V=C[O];if(V.enabled===!1)continue;if(V.render(L,z,P,_),V.needsSwap!==!1)P=z,z=z===Y?H:Y}if(D!==L.outputColorSpace||M!==L.toneMapping){if(D=L.outputColorSpace,M=L.toneMapping,N.defines={},QJ.getTransfer(D)===EJ)N.defines.SRGB_TRANSFER="";let O=kG[M];if(O)N.defines[O]="";N.needsUpdate=!0}N.uniforms.tDiffuse.value=P.texture,L.setRenderTarget(q),L.render(E,G),q=null,I=!1},this.isCompositing=function(){return I},this.dispose=function(){if(X.dispose(),Y!==null)Y.dispose();if(H!==null)H.dispose();U.dispose(),N.dispose()}}var bW=new fJ,UZ=new v8(1,1),hW=new y6,xW=new C$,gW=new h6,RW=[],MW=[],LW=new Float32Array(16),kW=new Float32Array(9),VW=new Float32Array(4);function Q7(J,Q,$){let Z=J[0];if(Z<=0||Z>0)return J;let K=Q*$,W=RW[K];if(W===void 0)W=new Float32Array(K),RW[K]=W;if(Q!==0){Z.toArray(W,0);for(let X=1,Y=0;X!==Q;++X)Y+=$,J[X].toArray(W,Y)}return W}function TJ(J,Q){if(J.length!==Q.length)return!1;for(let $=0,Z=J.length;$<Z;$++)if(J[$]!==Q[$])return!1;return!0}function SJ(J,Q){for(let $=0,Z=Q.length;$<Z;$++)J[$]=Q[$]}function t6(J,Q){let $=MW[Q];if($===void 0)$=new Int32Array(Q),MW[Q]=$;for(let Z=0;Z!==Q;++Z)$[Z]=J.allocateTextureUnit();return $}function BG(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function IG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(TJ($,Q))return;J.uniform2fv(this.addr,Q),SJ($,Q)}}function _G(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(TJ($,Q))return;J.uniform3fv(this.addr,Q),SJ($,Q)}}function AG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(TJ($,Q))return;J.uniform4fv(this.addr,Q),SJ($,Q)}}function CG(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(TJ($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),SJ($,Q)}else{if(TJ($,Z))return;VW.set(Z),J.uniformMatrix2fv(this.addr,!1,VW),SJ($,Z)}}function zG(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(TJ($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),SJ($,Q)}else{if(TJ($,Z))return;kW.set(Z),J.uniformMatrix3fv(this.addr,!1,kW),SJ($,Z)}}function PG(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(TJ($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),SJ($,Q)}else{if(TJ($,Z))return;LW.set(Z),J.uniformMatrix4fv(this.addr,!1,LW),SJ($,Z)}}function wG(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function TG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(TJ($,Q))return;J.uniform2iv(this.addr,Q),SJ($,Q)}}function SG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(TJ($,Q))return;J.uniform3iv(this.addr,Q),SJ($,Q)}}function jG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(TJ($,Q))return;J.uniform4iv(this.addr,Q),SJ($,Q)}}function yG(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function vG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(TJ($,Q))return;J.uniform2uiv(this.addr,Q),SJ($,Q)}}function fG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(TJ($,Q))return;J.uniform3uiv(this.addr,Q),SJ($,Q)}}function bG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(TJ($,Q))return;J.uniform4uiv(this.addr,Q),SJ($,Q)}}function hG(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;let W;if(this.type===J.SAMPLER_2D_SHADOW)UZ.compareFunction=$.isReversedDepthBuffer()?j6:S6,W=UZ;else W=bW;$.setTexture2D(Q||W,K)}function xG(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTexture3D(Q||xW,K)}function gG(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTextureCube(Q||gW,K)}function pG(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTexture2DArray(Q||hW,K)}function mG(J){switch(J){case 5126:return BG;case 35664:return IG;case 35665:return _G;case 35666:return AG;case 35674:return CG;case 35675:return zG;case 35676:return PG;case 5124:case 35670:return wG;case 35667:case 35671:return TG;case 35668:case 35672:return SG;case 35669:case 35673:return jG;case 5125:return yG;case 36294:return vG;case 36295:return fG;case 36296:return bG;case 35678:case 36198:case 36298:case 36306:case 35682:return hG;case 35679:case 36299:case 36307:return xG;case 35680:case 36300:case 36308:case 36293:return gG;case 36289:case 36303:case 36311:case 36292:return pG}}function lG(J,Q){J.uniform1fv(this.addr,Q)}function dG(J,Q){let $=Q7(Q,this.size,2);J.uniform2fv(this.addr,$)}function uG(J,Q){let $=Q7(Q,this.size,3);J.uniform3fv(this.addr,$)}function cG(J,Q){let $=Q7(Q,this.size,4);J.uniform4fv(this.addr,$)}function nG(J,Q){let $=Q7(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function sG(J,Q){let $=Q7(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function iG(J,Q){let $=Q7(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function oG(J,Q){J.uniform1iv(this.addr,Q)}function aG(J,Q){J.uniform2iv(this.addr,Q)}function rG(J,Q){J.uniform3iv(this.addr,Q)}function tG(J,Q){J.uniform4iv(this.addr,Q)}function eG(J,Q){J.uniform1uiv(this.addr,Q)}function JN(J,Q){J.uniform2uiv(this.addr,Q)}function QN(J,Q){J.uniform3uiv(this.addr,Q)}function $N(J,Q){J.uniform4uiv(this.addr,Q)}function ZN(J,Q,$){let Z=this.cache,K=Q.length,W=t6($,K);if(!TJ(Z,W))J.uniform1iv(this.addr,W),SJ(Z,W);let X;if(this.type===J.SAMPLER_2D_SHADOW)X=UZ;else X=bW;for(let Y=0;Y!==K;++Y)$.setTexture2D(Q[Y]||X,W[Y])}function KN(J,Q,$){let Z=this.cache,K=Q.length,W=t6($,K);if(!TJ(Z,W))J.uniform1iv(this.addr,W),SJ(Z,W);for(let X=0;X!==K;++X)$.setTexture3D(Q[X]||xW,W[X])}function WN(J,Q,$){let Z=this.cache,K=Q.length,W=t6($,K);if(!TJ(Z,W))J.uniform1iv(this.addr,W),SJ(Z,W);for(let X=0;X!==K;++X)$.setTextureCube(Q[X]||gW,W[X])}function XN(J,Q,$){let Z=this.cache,K=Q.length,W=t6($,K);if(!TJ(Z,W))J.uniform1iv(this.addr,W),SJ(Z,W);for(let X=0;X!==K;++X)$.setTexture2DArray(Q[X]||hW,W[X])}function YN(J){switch(J){case 5126:return lG;case 35664:return dG;case 35665:return uG;case 35666:return cG;case 35674:return nG;case 35675:return sG;case 35676:return iG;case 5124:case 35670:return oG;case 35667:case 35671:return aG;case 35668:case 35672:return rG;case 35669:case 35673:return tG;case 5125:return eG;case 36294:return JN;case 36295:return QN;case 36296:return $N;case 35678:case 36198:case 36298:case 36306:case 35682:return ZN;case 35679:case 36299:case 36307:return KN;case 35680:case 36300:case 36308:case 36293:return WN;case 36289:case 36303:case 36311:case 36292:return XN}}class pW{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=mG(Q.type)}}class mW{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=YN(Q.type)}}class lW{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let Z=this.seq;for(let K=0,W=Z.length;K!==W;++K){let X=Z[K];X.setValue(J,Q[X.id],$)}}}var YZ=/(\w+)(\])?(\[|\.)?/g;function BW(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function HN(J,Q,$){let Z=J.name,K=Z.length;YZ.lastIndex=0;while(!0){let W=YZ.exec(Z),X=YZ.lastIndex,Y=W[1],H=W[2]==="]",U=W[3];if(H)Y=Y|0;if(U===void 0||U==="["&&X+2===K){BW($,U===void 0?new pW(Y,J,Q):new mW(Y,J,Q));break}else{let E=$.map[Y];if(E===void 0)E=new lW(Y),BW($,E);$=E}}}class i7{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let W=0;W<$;++W){let X=J.getActiveUniform(Q,W),Y=J.getUniformLocation(Q,X.name);HN(X,Y,this)}let Z=[],K=[];for(let W of this.seq)if(W.type===J.SAMPLER_2D_SHADOW||W.type===J.SAMPLER_CUBE_SHADOW||W.type===J.SAMPLER_2D_ARRAY_SHADOW)Z.push(W);else K.push(W);if(Z.length>0)this.seq=Z.concat(K)}setValue(J,Q,$,Z){let K=this.map[Q];if(K!==void 0)K.setValue(J,$,Z)}setOptional(J,Q,$){let Z=Q[$];if(Z!==void 0)this.setValue(J,$,Z)}static upload(J,Q,$,Z){for(let K=0,W=Q.length;K!==W;++K){let X=Q[K],Y=$[X.id];if(Y.needsUpdate!==!1)X.setValue(J,Y.value,Z)}}static seqWithValue(J,Q){let $=[];for(let Z=0,K=J.length;Z!==K;++Z){let W=J[Z];if(W.id in Q)$.push(W)}return $}}function IW(J,Q,$){let Z=J.createShader(Q);return J.shaderSource(Z,$),J.compileShader(Z),Z}var UN=37297,GN=0;function NN(J,Q){let $=J.split(`
`),Z=[],K=Math.max(Q-6,0),W=Math.min(Q+6,$.length);for(let X=K;X<W;X++){let Y=X+1;Z.push(`${Y===Q?">":" "} ${Y}: ${$[X]}`)}return Z.join(`
`)}var _W=new c0;function EN(J){QJ._getMatrix(_W,QJ.workingColorSpace,J);let Q=`mat3( ${_W.elements.map(($)=>$.toFixed(4))} )`;switch(QJ.getTransfer(J)){case k$:return[Q,"LinearTransferOETF"];case EJ:return[Q,"sRGBTransferOETF"];default:return m0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function AW(J,Q,$){let Z=J.getShaderParameter(Q,J.COMPILE_STATUS),W=(J.getShaderInfoLog(Q)||"").trim();if(Z&&W==="")return"";let X=/ERROR: 0:(\d+)/.exec(W);if(X){let Y=parseInt(X[1]);return $.toUpperCase()+`

`+W+`

`+NN(J.getShaderSource(Q),Y)}else return W}function qN(J,Q){let $=EN(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}var DN={[L7]:"Linear",[k7]:"Reinhard",[V7]:"Cineon",[H9]:"ACESFilmic",[I7]:"AgX",[_7]:"Neutral",[B7]:"Custom"};function FN(J,Q){let $=DN[Q];if($===void 0)return m0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var a6=new j;function ON(){QJ.getLuminanceCoefficients(a6);let J=a6.x.toFixed(4),Q=a6.y.toFixed(4),$=a6.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function RN(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(s7).join(`
`)}function MN(J){let Q=[];for(let $ in J){let Z=J[$];if(Z===!1)continue;Q.push("#define "+$+" "+Z)}return Q.join(`
`)}function LN(J,Q){let $={},Z=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let K=0;K<Z;K++){let W=J.getActiveAttrib(Q,K),X=W.name,Y=1;if(W.type===J.FLOAT_MAT2)Y=2;if(W.type===J.FLOAT_MAT3)Y=3;if(W.type===J.FLOAT_MAT4)Y=4;$[X]={type:W.type,location:J.getAttribLocation(Q,X),locationSize:Y}}return $}function s7(J){return J!==""}function CW(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_SUN_LIGHTS/g,Q.numSunLights).replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,Q.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function zW(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var kN=/^[ \t]*#include +<([\w\d./]+)>/gm;function GZ(J){return J.replace(kN,BN)}var VN=new Map;function BN(J,Q){let $=t0[Q];if($===void 0){let Z=VN.get(Q);if(Z!==void 0)$=t0[Z],m0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,Z);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">")}return GZ($)}var IN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function PW(J){return J.replace(IN,_N)}function _N(J,Q,$,Z){let K="";for(let W=parseInt(Q);W<parseInt($);W++)K+=Z.replace(/\[\s*i\s*\]/g,"[ "+W+" ]").replace(/UNROLLED_LOOP_INDEX/g,W);return K}function wW(J){let Q=`precision ${J.precision} float;
	precision ${J.precision} int;
	precision ${J.precision} sampler2D;
	precision ${J.precision} samplerCube;
	precision ${J.precision} sampler3D;
	precision ${J.precision} sampler2DArray;
	precision ${J.precision} sampler2DShadow;
	precision ${J.precision} samplerCubeShadow;
	precision ${J.precision} sampler2DArrayShadow;
	precision ${J.precision} isampler2D;
	precision ${J.precision} isampler3D;
	precision ${J.precision} isamplerCube;
	precision ${J.precision} isampler2DArray;
	precision ${J.precision} usampler2D;
	precision ${J.precision} usampler3D;
	precision ${J.precision} usamplerCube;
	precision ${J.precision} usampler2DArray;
	`;if(J.precision==="highp")Q+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")Q+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")Q+=`
#define LOW_PRECISION`;return Q}var AN={[X9]:"SHADOWMAP_TYPE_PCF",[c9]:"SHADOWMAP_TYPE_VSM"};function CN(J){return AN[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var zN={[i9]:"ENVMAP_TYPE_CUBE",[U9]:"ENVMAP_TYPE_CUBE",[A7]:"ENVMAP_TYPE_CUBE_UV"};function PN(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return zN[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var wN={[U9]:"ENVMAP_MODE_REFRACTION"};function TN(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return wN[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var SN={[yK]:"ENVMAP_BLENDING_MULTIPLY",[vK]:"ENVMAP_BLENDING_MIX",[fK]:"ENVMAP_BLENDING_ADD"};function jN(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return SN[J.combine]||"ENVMAP_BLENDING_NONE"}function yN(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,Z=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:Z,maxMip:$}}function vN(J,Q,$,Z){let K=J.getContext(),W=$.defines,X=$.vertexShader,Y=$.fragmentShader,H=CN($),U=PN($),N=TN($),E=jN($),G=yN($),D=RN($),M=MN(W),I=K.createProgram(),F,q,C=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(F=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,M].filter(s7).join(`
`),F.length>0)F+=`
`;if(q=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,M].filter(s7).join(`
`),q.length>0)q+=`
`}else F=[wW($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,M,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+N:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+H:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(s7).join(`
`),q=[wW($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,M,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+U:"",$.envMap?"#define "+N:"",$.envMap?"#define "+E:"",G?"#define CUBEUV_TEXEL_WIDTH "+G.texelWidth:"",G?"#define CUBEUV_TEXEL_HEIGHT "+G.texelHeight:"",G?"#define CUBEUV_MAX_MIP "+G.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.retroreflection?"#define USE_RETROREFLECTION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+H:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==H8?"#define TONE_MAPPING":"",$.toneMapping!==H8?t0.tonemapping_pars_fragment:"",$.toneMapping!==H8?FN("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",t0.colorspace_pars_fragment,qN("linearToOutputTexel",$.outputColorSpace),ON(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(s7).join(`
`);if(X=GZ(X),X=CW(X,$),X=zW(X,$),Y=GZ(Y),Y=CW(Y,$),Y=zW(Y,$),X=PW(X),Y=PW(Y),$.isRawShaderMaterial!==!0)C=`#version 300 es
`,F=[D,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+F,q=["#define varying in",$.glslVersion===V$?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===V$?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+q;let A=C+F+X,L=C+q+Y,_=IW(K,K.VERTEX_SHADER,A),P=IW(K,K.FRAGMENT_SHADER,L);if(K.attachShader(I,_),K.attachShader(I,P),$.index0AttributeName!==void 0)K.bindAttribLocation(I,0,$.index0AttributeName);else if($.hasPositionAttribute===!0)K.bindAttribLocation(I,0,"position");K.linkProgram(I);function z(y){if(J.debug.checkShaderErrors){let b=K.getProgramInfoLog(I)||"",u=K.getShaderInfoLog(_)||"",w=K.getShaderInfoLog(P)||"",m=b.trim(),o=u.trim(),p=w.trim(),W0=!0,c=!0;if(K.getProgramParameter(I,K.LINK_STATUS)===!1)if(W0=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(K,I,_,P);else{let r=AW(K,_,"vertex"),Q0=AW(K,P,"fragment");l0("WebGLProgram: Shader Error "+K.getError()+" - VALIDATE_STATUS "+K.getProgramParameter(I,K.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+m+`
`+r+`
`+Q0)}else if(m!=="")m0("WebGLProgram: Program Info Log:",m);else if(o===""||p==="")c=!1;if(c)y.diagnostics={runnable:W0,programLog:m,vertexShader:{log:o,prefix:F},fragmentShader:{log:p,prefix:q}}}K.deleteShader(_),K.deleteShader(P),O=new i7(K,I),V=LN(K,I)}let O;this.getUniforms=function(){if(O===void 0)z(this);return O};let V;this.getAttributes=function(){if(V===void 0)z(this);return V};let h=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(h===!1)h=K.getProgramParameter(I,UN);return h},this.destroy=function(){Z.releaseStatesOfProgram(this),K.deleteProgram(I),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=GN++,this.cacheKey=Q,this.usedTimes=1,this.program=I,this.vertexShader=_,this.fragmentShader=P,this}var fN=0;class dW{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,$){let Z=this._getShaderCacheForMaterial(J);if(Z.has(Q)===!1)Z.add(Q),Q.usedTimes++;if(Z.has($)===!1)Z.add($),$.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new uW(J),Q.set(J,$);return $}}class uW{constructor(J){this.id=fN++,this.code=J,this.usedTimes=0}}function bN(J){return J===D9||J===w6||J===T6}function hN(J,Q,$,Z,K,W){let X=new v6,Y=new dW,H=new Set,U=[],N=new Map,E=Z.logarithmicDepthBuffer,G=Z.precision,D={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(O){if(H.add(O),O===0)return"uv";return`uv${O}`}function I(O,V,h,y,b,u){let w=y.fog,m=b.geometry,o=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?y.environment:null,p=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,W0=Q.get(O.envMap||o,p),c=!!W0&&W0.mapping===A7?W0.image.height:null,r=D[O.type];if(O.precision!==null){if(G=Z.getMaxPrecision(O.precision),G!==O.precision)m0("WebGLProgram.getParameters:",O.precision,"not supported, using",G,"instead.")}let Q0=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,T0=Q0!==void 0?Q0.length:0,S0=0;if(m.morphAttributes.position!==void 0)S0=1;if(m.morphAttributes.normal!==void 0)S0=2;if(m.morphAttributes.color!==void 0)S0=3;let WJ,n0,n,K0;if(r){let GJ=k8[r];WJ=GJ.vertexShader,n0=GJ.fragmentShader}else{WJ=O.vertexShader,n0=O.fragmentShader;let GJ=Y.getVertexShaderStage(O),YJ=Y.getFragmentShaderStage(O);Y.update(O,GJ,YJ),n=GJ.id,K0=YJ.id}let X0=J.getRenderTarget(),j0=J.state.buffers.depth.getReversed(),x0=b.isInstancedMesh===!0,B0=b.isBatchedMesh===!0,s0=!!O.map,t=!!O.matcap,$0=!!W0,Y0=!!O.aoMap,G0=!!O.lightMap,O0=!!O.bumpMap&&O.wireframe===!1,z0=!!O.normalMap,v0=!!O.displacementMap,h0=!!O.emissiveMap,d0=!!O.metalnessMap,T=!!O.roughnessMap,XJ=O.anisotropy>0,i0=O.clearcoat>0,o0=O.dispersion>0,B=O.retroreflectivity>0,R=O.iridescence>0,S=O.sheen>0,l=O.transmission>0,e=XJ&&!!O.anisotropyMap,H0=i0&&!!O.clearcoatMap,N0=i0&&!!O.clearcoatNormalMap,s=i0&&!!O.clearcoatRoughnessMap,a=R&&!!O.iridescenceMap,M0=R&&!!O.iridescenceThicknessMap,C0=S&&!!O.sheenColorMap,E0=S&&!!O.sheenRoughnessMap,U0=!!O.specularMap,A0=!!O.specularColorMap,f0=!!O.specularIntensityMap,e0=l&&!!O.transmissionMap,f=l&&!!O.thicknessMap,q0=!!O.gradientMap,i=!!O.alphaMap,D0=O.alphaTest>0,V0=!!O.alphaHash,J0=!!O.extensions,F0=H8;if(O.toneMapped){if(X0===null||X0.isXRRenderTarget===!0)F0=J.toneMapping}let u0={shaderID:r,shaderType:O.type,shaderName:O.name,vertexShader:WJ,fragmentShader:n0,defines:O.defines,customVertexShaderID:n,customFragmentShaderID:K0,isRawShaderMaterial:O.isRawShaderMaterial===!0,glslVersion:O.glslVersion,precision:G,batching:B0,batchingColor:B0&&b._colorsTexture!==null,instancing:x0,instancingColor:x0&&b.instanceColor!==null,instancingMorph:x0&&b.morphTexture!==null,outputColorSpace:X0===null?J.outputColorSpace:X0.isXRRenderTarget===!0?X0.texture.colorSpace:QJ.workingColorSpace,alphaToCoverage:!!O.alphaToCoverage,map:s0,matcap:t,envMap:$0,envMapMode:$0&&W0.mapping,envMapCubeUVHeight:c,aoMap:Y0,lightMap:G0,bumpMap:O0,normalMap:z0,displacementMap:v0,emissiveMap:h0,normalMapObjectSpace:z0&&O.normalMapType===cK,normalMapTangentSpace:z0&&O.normalMapType===M$,packedNormalMap:z0&&O.normalMapType===M$&&bN(O.normalMap.format),metalnessMap:d0,roughnessMap:T,anisotropy:XJ,anisotropyMap:e,clearcoat:i0,clearcoatMap:H0,clearcoatNormalMap:N0,clearcoatRoughnessMap:s,dispersion:o0,retroreflection:B,iridescence:R,iridescenceMap:a,iridescenceThicknessMap:M0,sheen:S,sheenColorMap:C0,sheenRoughnessMap:E0,specularMap:U0,specularColorMap:A0,specularIntensityMap:f0,transmission:l,transmissionMap:e0,thicknessMap:f,gradientMap:q0,opaque:O.transparent===!1&&O.blending===M7&&O.alphaToCoverage===!1,alphaMap:i,alphaTest:D0,alphaHash:V0,combine:O.combine,mapUv:s0&&M(O.map.channel),aoMapUv:Y0&&M(O.aoMap.channel),lightMapUv:G0&&M(O.lightMap.channel),bumpMapUv:O0&&M(O.bumpMap.channel),normalMapUv:z0&&M(O.normalMap.channel),displacementMapUv:v0&&M(O.displacementMap.channel),emissiveMapUv:h0&&M(O.emissiveMap.channel),metalnessMapUv:d0&&M(O.metalnessMap.channel),roughnessMapUv:T&&M(O.roughnessMap.channel),anisotropyMapUv:e&&M(O.anisotropyMap.channel),clearcoatMapUv:H0&&M(O.clearcoatMap.channel),clearcoatNormalMapUv:N0&&M(O.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:s&&M(O.clearcoatRoughnessMap.channel),iridescenceMapUv:a&&M(O.iridescenceMap.channel),iridescenceThicknessMapUv:M0&&M(O.iridescenceThicknessMap.channel),sheenColorMapUv:C0&&M(O.sheenColorMap.channel),sheenRoughnessMapUv:E0&&M(O.sheenRoughnessMap.channel),specularMapUv:U0&&M(O.specularMap.channel),specularColorMapUv:A0&&M(O.specularColorMap.channel),specularIntensityMapUv:f0&&M(O.specularIntensityMap.channel),transmissionMapUv:e0&&M(O.transmissionMap.channel),thicknessMapUv:f&&M(O.thicknessMap.channel),alphaMapUv:i&&M(O.alphaMap.channel),vertexTangents:!!m.attributes.tangent&&(z0||XJ),vertexNormals:!!m.attributes.normal,vertexColors:O.vertexColors,vertexAlphas:O.vertexColors===!0&&!!m.attributes.color&&m.attributes.color.itemSize===4,pointsUvs:b.isPoints===!0&&!!m.attributes.uv&&(s0||i),fog:!!w,useFog:O.fog===!0,fogExp2:!!w&&w.isFogExp2,flatShading:O.wireframe===!1&&(O.flatShading===!0||m.attributes.normal===void 0&&z0===!1&&(O.isMeshLambertMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isMeshPhysicalMaterial)),sizeAttenuation:O.sizeAttenuation===!0,logarithmicDepthBuffer:E,reversedDepthBuffer:j0,skinning:b.isSkinnedMesh===!0,hasPositionAttribute:m.attributes.position!==void 0,morphTargets:m.morphAttributes.position!==void 0,morphNormals:m.morphAttributes.normal!==void 0,morphColors:m.morphAttributes.color!==void 0,morphTargetsCount:T0,morphTextureStride:S0,numSunLights:V.sun.length,numDirLights:V.directional.length,numPointLights:V.point.length,numSpotLights:V.spot.length,numSpotLightMaps:V.spotLightMap.length,numRectAreaLights:V.rectArea.length,numHemiLights:V.hemi.length,numSunLightShadows:V.sunShadowMap.length,numDirLightShadows:V.directionalShadowMap.length,numPointLightShadows:V.pointShadowMap.length,numSpotLightShadows:V.spotShadowMap.length,numSpotLightShadowsWithMaps:V.numSpotLightShadowsWithMaps,numLightProbes:V.numLightProbes,numLightProbeGrids:u.length,numClippingPlanes:W.numPlanes,numClipIntersection:W.numIntersection,dithering:O.dithering,shadowMapEnabled:J.shadowMap.enabled&&h.length>0,shadowMapType:J.shadowMap.type,toneMapping:F0,decodeVideoTexture:s0&&O.map.isVideoTexture===!0&&QJ.getTransfer(O.map.colorSpace)===EJ,decodeVideoTextureEmissive:h0&&O.emissiveMap.isVideoTexture===!0&&QJ.getTransfer(O.emissiveMap.colorSpace)===EJ,premultipliedAlpha:O.premultipliedAlpha,doubleSided:O.side===cJ,flipSided:O.side===hJ,useDepthPacking:O.depthPacking>=0,depthPacking:O.depthPacking||0,index0AttributeName:O.index0AttributeName,extensionClipCullDistance:J0&&O.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(J0&&O.extensions.multiDraw===!0||B0)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:O.customProgramCacheKey()};return u0.vertexUv1s=H.has(1),u0.vertexUv2s=H.has(2),u0.vertexUv3s=H.has(3),H.clear(),u0}function F(O){let V=[];if(O.shaderID)V.push(O.shaderID);else V.push(O.customVertexShaderID),V.push(O.customFragmentShaderID);if(O.defines!==void 0)for(let h in O.defines)V.push(h),V.push(O.defines[h]);if(O.isRawShaderMaterial===!1)q(V,O),C(V,O),V.push(J.outputColorSpace);return V.push(O.customProgramCacheKey),V.join()}function q(O,V){O.push(V.precision),O.push(V.outputColorSpace),O.push(V.envMapMode),O.push(V.envMapCubeUVHeight),O.push(V.mapUv),O.push(V.alphaMapUv),O.push(V.lightMapUv),O.push(V.aoMapUv),O.push(V.bumpMapUv),O.push(V.normalMapUv),O.push(V.displacementMapUv),O.push(V.emissiveMapUv),O.push(V.metalnessMapUv),O.push(V.roughnessMapUv),O.push(V.anisotropyMapUv),O.push(V.clearcoatMapUv),O.push(V.clearcoatNormalMapUv),O.push(V.clearcoatRoughnessMapUv),O.push(V.iridescenceMapUv),O.push(V.iridescenceThicknessMapUv),O.push(V.sheenColorMapUv),O.push(V.sheenRoughnessMapUv),O.push(V.specularMapUv),O.push(V.specularColorMapUv),O.push(V.specularIntensityMapUv),O.push(V.transmissionMapUv),O.push(V.thicknessMapUv),O.push(V.combine),O.push(V.fogExp2),O.push(V.sizeAttenuation),O.push(V.morphTargetsCount),O.push(V.morphAttributeCount),O.push(V.numSunLights),O.push(V.numDirLights),O.push(V.numPointLights),O.push(V.numSpotLights),O.push(V.numSpotLightMaps),O.push(V.numHemiLights),O.push(V.numRectAreaLights),O.push(V.numSunLightShadows),O.push(V.numDirLightShadows),O.push(V.numPointLightShadows),O.push(V.numSpotLightShadows),O.push(V.numSpotLightShadowsWithMaps),O.push(V.numLightProbes),O.push(V.shadowMapType),O.push(V.toneMapping),O.push(V.numClippingPlanes),O.push(V.numClipIntersection),O.push(V.depthPacking)}function C(O,V){if(X.disableAll(),V.instancing)X.enable(0);if(V.instancingColor)X.enable(1);if(V.instancingMorph)X.enable(2);if(V.matcap)X.enable(3);if(V.envMap)X.enable(4);if(V.normalMapObjectSpace)X.enable(5);if(V.normalMapTangentSpace)X.enable(6);if(V.clearcoat)X.enable(7);if(V.iridescence)X.enable(8);if(V.alphaTest)X.enable(9);if(V.vertexColors)X.enable(10);if(V.vertexAlphas)X.enable(11);if(V.vertexUv1s)X.enable(12);if(V.vertexUv2s)X.enable(13);if(V.vertexUv3s)X.enable(14);if(V.vertexTangents)X.enable(15);if(V.anisotropy)X.enable(16);if(V.alphaHash)X.enable(17);if(V.batching)X.enable(18);if(V.dispersion)X.enable(19);if(V.retroreflection)X.enable(24);if(V.batchingColor)X.enable(20);if(V.gradientMap)X.enable(21);if(V.packedNormalMap)X.enable(22);if(V.vertexNormals)X.enable(23);if(O.push(X.mask),X.disableAll(),V.fog)X.enable(0);if(V.useFog)X.enable(1);if(V.flatShading)X.enable(2);if(V.logarithmicDepthBuffer)X.enable(3);if(V.reversedDepthBuffer)X.enable(4);if(V.skinning)X.enable(5);if(V.morphTargets)X.enable(6);if(V.morphNormals)X.enable(7);if(V.morphColors)X.enable(8);if(V.premultipliedAlpha)X.enable(9);if(V.shadowMapEnabled)X.enable(10);if(V.doubleSided)X.enable(11);if(V.flipSided)X.enable(12);if(V.useDepthPacking)X.enable(13);if(V.dithering)X.enable(14);if(V.transmission)X.enable(15);if(V.sheen)X.enable(16);if(V.opaque)X.enable(17);if(V.pointsUvs)X.enable(18);if(V.decodeVideoTexture)X.enable(19);if(V.decodeVideoTextureEmissive)X.enable(20);if(V.alphaToCoverage)X.enable(21);if(V.numLightProbeGrids>0)X.enable(22);if(V.hasPositionAttribute)X.enable(23);O.push(X.mask)}function A(O){let V=D[O.type],h;if(V){let y=k8[V];h=f8.clone(y.uniforms)}else h=O.uniforms;return h}function L(O,V){let h=N.get(V);if(h!==void 0)++h.usedTimes;else h=new vN(J,V,O,K),U.push(h),N.set(V,h);return h}function _(O){if(--O.usedTimes===0){let V=U.indexOf(O);U[V]=U[U.length-1],U.pop(),N.delete(O.cacheKey),O.destroy()}}function P(O){Y.remove(O)}function z(){Y.dispose()}return{getParameters:I,getProgramCacheKey:F,getUniforms:A,acquireProgram:L,releaseProgram:_,releaseShaderCache:P,programs:U,dispose:z}}function xN(){let J=new WeakMap;function Q(X){return J.has(X)}function $(X){let Y=J.get(X);if(Y===void 0)Y={},J.set(X,Y);return Y}function Z(X){J.delete(X)}function K(X,Y,H){J.get(X)[Y]=H}function W(){J=new WeakMap}return{has:Q,get:$,remove:Z,update:K,dispose:W}}function gN(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function TW(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function SW(){let J=[],Q=0,$=[],Z=[],K=[];function W(){Q=0,$.length=0,Z.length=0,K.length=0}function X(G){let D=0;if(G.isInstancedMesh)D+=2;if(G.isSkinnedMesh)D+=1;return D}function Y(G,D,M,I,F,q){let C=J[Q];if(C===void 0)C={id:G.id,object:G,geometry:D,material:M,materialVariant:X(G),groupOrder:I,renderOrder:G.renderOrder,z:F,group:q},J[Q]=C;else C.id=G.id,C.object=G,C.geometry=D,C.material=M,C.materialVariant=X(G),C.groupOrder=I,C.renderOrder=G.renderOrder,C.z=F,C.group=q;return Q++,C}function H(G,D,M,I,F,q,C){if(C.reversedDepth===!0)F=-F;let A=Y(G,D,M,I,F,q);if(M.transmission>0)Z.push(A);else if(M.transparent===!0)K.push(A);else $.push(A)}function U(G,D,M,I,F,q){let C=Y(G,D,M,I,F,q);if(M.transmission>0)Z.unshift(C);else if(M.transparent===!0)K.unshift(C);else $.unshift(C)}function N(G,D){if($.length>1)$.sort(G||gN);if(Z.length>1)Z.sort(D||TW);if(K.length>1)K.sort(D||TW)}function E(){for(let G=Q,D=J.length;G<D;G++){let M=J[G];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:$,transmissive:Z,transparent:K,init:W,push:H,unshift:U,finish:E,sort:N}}function pN(){let J=new WeakMap;function Q(Z,K){let W=J.get(Z),X;if(W===void 0)X=new SW,J.set(Z,[X]);else if(K>=W.length)X=new SW,W.push(X);else X=W[K];return X}function $(){J=new WeakMap}return{get:Q,dispose:$}}function mN(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={direction:new j,color:new b0};break;case"SpotLight":$={position:new j,direction:new j,color:new b0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new j,color:new b0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new j,skyColor:new b0,groundColor:new b0};break;case"RectAreaLight":$={color:new b0,position:new j,halfWidth:new j,halfHeight:new j};break}return J[Q.id]=$,$}}}function lN(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var dN=0;function uN(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function cN(J){let Q=new mN,$=lN(),Z={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)Z.probe.push(new j);let K=new j,W=new MJ,X=new MJ;function Y(U){let N=0,E=0,G=0;for(let b=0;b<9;b++)Z.probe[b].set(0,0,0);let D=0,M=0,I=0,F=0,q=0,C=0,A=0,L=0,_=0,P=0,z=0,O=0,V=0,h=0;U.sort(uN);for(let b=0,u=U.length;b<u;b++){let w=U[b],m=w.color,o=w.intensity,p=w.distance,W0=null;if(w.shadow&&w.shadow.map)if(w.shadow.map.texture.format===D9)W0=w.shadow.map.texture;else W0=w.shadow.map.depthTexture||w.shadow.map.texture;if(w.isAmbientLight)N+=m.r*o,E+=m.g*o,G+=m.b*o;else if(w.isLightProbe){for(let c=0;c<9;c++)Z.probe[c].addScaledVector(w.sh.coefficients[c],o);h++}else if(w.isSunLight){let c=Q.get(w);if(c.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let r=w.shadow,Q0=$.get(w);Q0.shadowIntensity=r.intensity,Q0.shadowBias=r.bias,Q0.shadowNormalBias=r.normalBias,Q0.shadowRadius=r.radius,Q0.shadowMapSize.copy(r.mapSize).multiply(r.getFrameExtents()),Z.sunShadow[M]=Q0,Z.sunShadowMap[M]=W0;let T0=r.getViewportCount();for(let S0=0;S0<T0;S0++)Z.sunShadowMatrix[I+S0]=r.getMatrix(S0),Z.sunShadowCascade[I+S0]=r._cascadeData[S0];I+=T0,M++}Z.sun[D]=c,D++}else if(w.isDirectionalLight){let c=Q.get(w);if(c.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let r=w.shadow,Q0=$.get(w);Q0.shadowIntensity=r.intensity,Q0.shadowBias=r.bias,Q0.shadowNormalBias=r.normalBias,Q0.shadowRadius=r.radius,Q0.shadowMapSize=r.mapSize,Z.directionalShadow[F]=Q0,Z.directionalShadowMap[F]=W0,Z.directionalShadowMatrix[F]=w.shadow.matrix,_++}Z.directional[F]=c,F++}else if(w.isSpotLight){let c=Q.get(w);c.position.setFromMatrixPosition(w.matrixWorld),c.color.copy(m).multiplyScalar(o),c.distance=p,c.coneCos=Math.cos(w.angle),c.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),c.decay=w.decay,Z.spot[C]=c;let r=w.shadow;if(w.map){if(Z.spotLightMap[O]=w.map,O++,r.updateMatrices(w),w.castShadow)V++}if(Z.spotLightMatrix[C]=r.matrix,w.castShadow){let Q0=$.get(w);Q0.shadowIntensity=r.intensity,Q0.shadowBias=r.bias,Q0.shadowNormalBias=r.normalBias,Q0.shadowRadius=r.radius,Q0.shadowMapSize=r.mapSize,Z.spotShadow[C]=Q0,Z.spotShadowMap[C]=W0,z++}C++}else if(w.isRectAreaLight){let c=Q.get(w);c.color.copy(m).multiplyScalar(o),c.halfWidth.set(w.width*0.5,0,0),c.halfHeight.set(0,w.height*0.5,0),Z.rectArea[A]=c,A++}else if(w.isPointLight){let c=Q.get(w);if(c.color.copy(w.color).multiplyScalar(w.intensity),c.distance=w.distance,c.decay=w.decay,w.castShadow){let r=w.shadow,Q0=$.get(w);Q0.shadowIntensity=r.intensity,Q0.shadowBias=r.bias,Q0.shadowNormalBias=r.normalBias,Q0.shadowRadius=r.radius,Q0.shadowMapSize=r.mapSize,Q0.shadowCameraNear=r.camera.near,Q0.shadowCameraFar=r.camera.far,Z.pointShadow[q]=Q0,Z.pointShadowMap[q]=W0,Z.pointShadowMatrix[q]=w.shadow.matrix,P++}Z.point[q]=c,q++}else if(w.isHemisphereLight){let c=Q.get(w);c.skyColor.copy(w.color).multiplyScalar(o),c.groundColor.copy(w.groundColor).multiplyScalar(o),Z.hemi[L]=c,L++}}if(A>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=R0.LTC_FLOAT_1,Z.rectAreaLTC2=R0.LTC_FLOAT_2;else Z.rectAreaLTC1=R0.LTC_HALF_1,Z.rectAreaLTC2=R0.LTC_HALF_2;Z.ambient[0]=N,Z.ambient[1]=E,Z.ambient[2]=G;let y=Z.hash;if(y.sunLength!==D||y.directionalLength!==F||y.pointLength!==q||y.spotLength!==C||y.rectAreaLength!==A||y.hemiLength!==L||y.numSunShadows!==M||y.numDirectionalShadows!==_||y.numPointShadows!==P||y.numSpotShadows!==z||y.numSpotMaps!==O||y.numLightProbes!==h)Z.sun.length=D,Z.directional.length=F,Z.spot.length=C,Z.rectArea.length=A,Z.point.length=q,Z.hemi.length=L,Z.sunShadow.length=M,Z.sunShadowMap.length=M,Z.sunShadowMatrix.length=I,Z.sunShadowCascade.length=I,Z.directionalShadow.length=_,Z.directionalShadowMap.length=_,Z.directionalShadowMatrix.length=_,Z.pointShadow.length=P,Z.pointShadowMap.length=P,Z.pointShadowMatrix.length=P,Z.spotShadow.length=z,Z.spotShadowMap.length=z,Z.spotLightMatrix.length=z+O-V,Z.spotLightMap.length=O,Z.numSpotLightShadowsWithMaps=V,Z.numLightProbes=h,y.sunLength=D,y.directionalLength=F,y.pointLength=q,y.spotLength=C,y.rectAreaLength=A,y.hemiLength=L,y.numSunShadows=M,y.numDirectionalShadows=_,y.numPointShadows=P,y.numSpotShadows=z,y.numSpotMaps=O,y.numLightProbes=h,Z.version=dN++}function H(U,N){let E=0,G=0,D=0,M=0,I=0,F=0,q=N.matrixWorldInverse;for(let C=0,A=U.length;C<A;C++){let L=U[C];if(L.isSunLight){let _=Z.sun[E];_.direction.setFromMatrixPosition(L.matrixWorld),_.direction.transformDirection(q),E++}else if(L.isDirectionalLight){let _=Z.directional[G];_.direction.setFromMatrixPosition(L.matrixWorld),K.setFromMatrixPosition(L.target.matrixWorld),_.direction.sub(K),_.direction.transformDirection(q),G++}else if(L.isSpotLight){let _=Z.spot[M];_.position.setFromMatrixPosition(L.matrixWorld),_.position.applyMatrix4(q),_.direction.setFromMatrixPosition(L.matrixWorld),K.setFromMatrixPosition(L.target.matrixWorld),_.direction.sub(K),_.direction.transformDirection(q),M++}else if(L.isRectAreaLight){let _=Z.rectArea[I];_.position.setFromMatrixPosition(L.matrixWorld),_.position.applyMatrix4(q),X.identity(),W.copy(L.matrixWorld),W.premultiply(q),X.extractRotation(W),_.halfWidth.set(L.width*0.5,0,0),_.halfHeight.set(0,L.height*0.5,0),_.halfWidth.applyMatrix4(X),_.halfHeight.applyMatrix4(X),I++}else if(L.isPointLight){let _=Z.point[D];_.position.setFromMatrixPosition(L.matrixWorld),_.position.applyMatrix4(q),D++}else if(L.isHemisphereLight){let _=Z.hemi[F];_.direction.setFromMatrixPosition(L.matrixWorld),_.direction.transformDirection(q),F++}}}return{setup:Y,setupView:H,state:Z}}function jW(J){let Q=new cN(J),$=[],Z=[],K=[];function W(G){E.camera=G,$.length=0,Z.length=0,K.length=0}function X(G){$.push(G)}function Y(G){Z.push(G)}function H(G){K.push(G)}function U(){Q.setup($)}function N(G){Q.setupView($,G)}let E={lightsArray:$,shadowsArray:Z,lightProbeGridArray:K,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:W,state:E,setupLights:U,setupLightsView:N,pushLight:X,pushShadow:Y,pushLightProbeGrid:H}}function nN(J){let Q=new WeakMap;function $(K,W=0){let X=Q.get(K),Y;if(X===void 0)Y=new jW(J),Q.set(K,[Y]);else if(W>=X.length)Y=new jW(J),X.push(Y);else Y=X[W];return Y}function Z(){Q=new WeakMap}return{get:$,dispose:Z}}var sN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iN=`uniform sampler2D shadow_pass;
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
}`,oN=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],aN=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],yW=new MJ,n7=new j,HZ=new j;function rN(J,Q,$){let Z=new v7,K=new Z0,W=new Z0,X=new LJ,Y=new g$,H=new p$,U={},N=$.maxTextureSize,E={[n9]:hJ,[hJ]:n9,[cJ]:cJ},G=new _J({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Z0},radius:{value:4}},vertexShader:sN,fragmentShader:iN}),D=G.clone();D.defines.HORIZONTAL_PASS=1;let M=new yJ;M.setAttribute("position",new Y8(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let I=new kJ(M,G),F=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=X9;let q=this.type;this.render=function(P,z,O){if(F.enabled===!1)return;if(F.autoUpdate===!1&&F.needsUpdate===!1)return;if(P.length===0)return;if(this.type===WK)m0("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=X9;let V=J.getRenderTarget(),h=J.getActiveCubeFace(),y=J.getActiveMipmapLevel(),b=J.state;if(b.setBlending(Q8),b.buffers.depth.getReversed()===!0)b.buffers.color.setClear(0,0,0,0);else b.buffers.color.setClear(1,1,1,1);b.buffers.depth.setTest(!0),b.setScissorTest(!1);let u=q!==this.type;if(u)z.traverse(function(w){if(w.material)if(Array.isArray(w.material))w.material.forEach((m)=>m.needsUpdate=!0);else w.material.needsUpdate=!0});for(let w=0,m=P.length;w<m;w++){let o=P[w],p=o.shadow;if(p===void 0){m0("WebGLShadowMap:",o,"has no shadow.");continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;K.copy(p.mapSize);let W0=p.getFrameExtents();if(K.multiply(W0),W.copy(p.mapSize),K.x>N||K.y>N){if(K.x>N)W.x=Math.floor(N/W0.x),K.x=W.x*W0.x,p.mapSize.x=W.x;if(K.y>N)W.y=Math.floor(N/W0.y),K.y=W.y*W0.y,p.mapSize.y=W.y}let c=J.state.buffers.depth.getReversed();if(p.camera._reversedDepth=c,p.map===null||u===!0){if(p.map!==null){if(p.map.depthTexture!==null)p.map.depthTexture.dispose(),p.map.depthTexture=null;p.map.dispose()}if(this.type===c9){if(o.isPointLight){m0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}p.map=new IJ(K.x,K.y,{format:D9,type:PJ,minFilter:iJ,magFilter:iJ,generateMipmaps:!1}),p.map.texture.name=o.name+".shadowMap",p.map.depthTexture=new v8(K.x,K.y,T8),p.map.depthTexture.name=o.name+".shadowMapDepth",p.map.depthTexture.format=E9,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=n8,p.map.depthTexture.magFilter=n8}else{if(o.isPointLight)p.map=new NZ(K.x),p.map.depthTexture=new w$(K.x,s8);else p.map=new IJ(K.x,K.y),p.map.depthTexture=new v8(K.x,K.y,s8);if(p.map.depthTexture.name=o.name+".shadowMap",p.map.depthTexture.format=E9,this.type===X9)p.map.depthTexture.compareFunction=c?j6:S6,p.map.depthTexture.minFilter=iJ,p.map.depthTexture.magFilter=iJ;else p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=n8,p.map.depthTexture.magFilter=n8}p.camera.updateProjectionMatrix()}if(p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==K.x||p.map.height!==K.y))p.map.setSize(K.x,K.y);let r=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();if(o.isPointLight!==!0)p.updateMatrices(o,O);for(let Q0=0;Q0<r;Q0++){let T0=p.getCamera(Q0);if(o.isPointLight){let{camera:S0,matrix:WJ}=p,n0=o.distance||S0.far;if(n0!==S0.far)S0.far=n0,S0.updateProjectionMatrix();n7.setFromMatrixPosition(o.matrixWorld),S0.position.copy(n7),HZ.copy(S0.position),HZ.add(oN[Q0]),S0.up.copy(aN[Q0]),S0.lookAt(HZ),S0.updateMatrixWorld(),WJ.makeTranslation(-n7.x,-n7.y,-n7.z),yW.multiplyMatrices(S0.projectionMatrix,S0.matrixWorldInverse),p._frustum.setFromProjectionMatrix(yW,S0.coordinateSystem,S0.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)J.setRenderTarget(p.map,Q0),J.clear();else{if(Q0===0)J.setRenderTarget(p.map),J.clear();let S0=p.getViewport(Q0);X.set(W.x*S0.x,W.y*S0.y,W.x*S0.z,W.y*S0.w),b.viewport(X)}Z=p.getFrustum(Q0),L(z,O,T0,o,this.type)}if(p.isPointLightShadow!==!0&&this.type===c9)C(p,O);p.needsUpdate=!1}q=this.type,F.needsUpdate=!1,J.setRenderTarget(V,h,y)};function C(P,z){let O=Q.update(I);if(G.defines.VSM_SAMPLES!==P.blurSamples)G.defines.VSM_SAMPLES=P.blurSamples,D.defines.VSM_SAMPLES=P.blurSamples,G.needsUpdate=!0,D.needsUpdate=!0;if(P.mapPass===null)P.mapPass=new IJ(K.x,K.y,{format:D9,type:PJ});else if(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)P.mapPass.setSize(P.map.width,P.map.height);G.uniforms.shadow_pass.value=P.map.depthTexture,G.uniforms.resolution.value.set(P.map.width,P.map.height),G.uniforms.radius.value=P.radius,J.setRenderTarget(P.mapPass),J.clear(),J.renderBufferDirect(z,null,O,G,I,null),D.uniforms.shadow_pass.value=P.mapPass.texture,D.uniforms.resolution.value.set(P.map.width,P.map.height),D.uniforms.radius.value=P.radius,J.setRenderTarget(P.map),J.clear(),J.renderBufferDirect(z,null,O,D,I,null)}function A(P,z,O,V){let h=null,y=O.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(y!==void 0)h=y;else if(h=O.isPointLight===!0?H:Y,J.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){let b=h.uuid,u=z.uuid,w=U[b];if(w===void 0)w={},U[b]=w;let m=w[u];if(m===void 0)m=h.clone(),w[u]=m,z.addEventListener("dispose",_);h=m}if(h.visible=z.visible,h.wireframe=z.wireframe,V===c9)h.side=z.shadowSide!==null?z.shadowSide:z.side;else h.side=z.shadowSide!==null?z.shadowSide:E[z.side];if(h.alphaMap=z.alphaMap,h.alphaTest=z.alphaToCoverage===!0?0.5:z.alphaTest,h.map=z.map,h.clipShadows=z.clipShadows,h.clippingPlanes=z.clippingPlanes,h.clipIntersection=z.clipIntersection,h.displacementMap=z.displacementMap,h.displacementScale=z.displacementScale,h.displacementBias=z.displacementBias,h.wireframeLinewidth=z.wireframeLinewidth,h.linewidth=z.linewidth,O.isPointLight===!0&&h.isMeshDistanceMaterial===!0){let b=J.properties.get(h);b.light=O}return h}function L(P,z,O,V,h){if(P.visible===!1)return;if(P.layers.test(z.layers)&&(P.isMesh||P.isLine||P.isPoints)){if((P.castShadow||P.receiveShadow&&h===c9)&&(!P.frustumCulled||P.intersectsFrustum(Z))){P.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,P.matrixWorld);let u=Q.update(P),w=P.material;if(Array.isArray(w)){let m=u.groups;for(let o=0,p=m.length;o<p;o++){let W0=m[o],c=w[W0.materialIndex];if(c&&c.visible){let r=A(P,c,V,h);P.onBeforeShadow(J,P,z,O,u,r,W0),J.renderBufferDirect(O,null,u,r,P,W0),P.onAfterShadow(J,P,z,O,u,r,W0)}}}else if(w.visible){let m=A(P,w,V,h);P.onBeforeShadow(J,P,z,O,u,m,null),J.renderBufferDirect(O,null,u,m,P,null),P.onAfterShadow(J,P,z,O,u,m,null)}}}let b=P.children;for(let u=0,w=b.length;u<w;u++)L(b[u],z,O,V,h)}function _(P){P.target.removeEventListener("dispose",_);for(let O in U){let V=U[O],h=P.target.uuid;if(h in V)V[h].dispose(),delete V[h]}}}function tN(J,Q){function $(){let f=!1,q0=new LJ,i=null,D0=new LJ(0,0,0,0);return{setMask:function(V0){if(i!==V0&&!f)J.colorMask(V0,V0,V0,V0),i=V0},setLocked:function(V0){f=V0},setClear:function(V0,J0,F0,u0,GJ){if(GJ===!0)V0*=u0,J0*=u0,F0*=u0;if(q0.set(V0,J0,F0,u0),D0.equals(q0)===!1)J.clearColor(V0,J0,F0,u0),D0.copy(q0)},reset:function(){f=!1,i=null,D0.set(-1,0,0,0)}}}function Z(){let f=!1,q0=!1,i=null,D0=null,V0=null;return{setReversed:function(J0){if(q0!==J0){let F0=Q.get("EXT_clip_control");if(J0)F0.clipControlEXT(F0.LOWER_LEFT_EXT,F0.ZERO_TO_ONE_EXT);else F0.clipControlEXT(F0.LOWER_LEFT_EXT,F0.NEGATIVE_ONE_TO_ONE_EXT);q0=J0;let u0=V0;V0=null,this.setClear(u0)}},getReversed:function(){return q0},setTest:function(J0){if(J0)X0(J.DEPTH_TEST);else j0(J.DEPTH_TEST)},setMask:function(J0){if(i!==J0&&!f)J.depthMask(J0),i=J0},setFunc:function(J0){if(q0)J0=QW[J0];if(D0!==J0){switch(J0){case CK:J.depthFunc(J.NEVER);break;case zK:J.depthFunc(J.ALWAYS);break;case PK:J.depthFunc(J.LESS);break;case fQ:J.depthFunc(J.LEQUAL);break;case wK:J.depthFunc(J.EQUAL);break;case TK:J.depthFunc(J.GEQUAL);break;case SK:J.depthFunc(J.GREATER);break;case jK:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}D0=J0}},setLocked:function(J0){f=J0},setClear:function(J0){if(V0!==J0){if(V0=J0,q0)J0=1-J0;J.clearDepth(J0)}},reset:function(){f=!1,i=null,D0=null,V0=null,q0=!1}}}function K(){let f=!1,q0=null,i=null,D0=null,V0=null,J0=null,F0=null,u0=null,GJ=null;return{setTest:function(YJ){if(!f)if(YJ)X0(J.STENCIL_TEST);else j0(J.STENCIL_TEST)},setMask:function(YJ){if(q0!==YJ&&!f)J.stencilMask(YJ),q0=YJ},setFunc:function(YJ,xJ,nJ){if(i!==YJ||D0!==xJ||V0!==nJ)J.stencilFunc(YJ,xJ,nJ),i=YJ,D0=xJ,V0=nJ},setOp:function(YJ,xJ,nJ){if(J0!==YJ||F0!==xJ||u0!==nJ)J.stencilOp(YJ,xJ,nJ),J0=YJ,F0=xJ,u0=nJ},setLocked:function(YJ){f=YJ},setClear:function(YJ){if(GJ!==YJ)J.clearStencil(YJ),GJ=YJ},reset:function(){f=!1,q0=null,i=null,D0=null,V0=null,J0=null,F0=null,u0=null,GJ=null}}}let W=new $,X=new Z,Y=new K,H=new WeakMap,U=new WeakMap,N={},E={},G={},D=new WeakMap,M=[],I=null,F=!1,q=null,C=null,A=null,L=null,_=null,P=null,z=null,O=new b0(0,0,0),V=0,h=!1,y=null,b=null,u=null,w=null,m=null,o=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),p=!1,W0=0,c=J.getParameter(J.VERSION);if(c.indexOf("WebGL")!==-1)W0=parseFloat(/^WebGL (\d)/.exec(c)[1]),p=W0>=1;else if(c.indexOf("OpenGL ES")!==-1)W0=parseFloat(/^OpenGL ES (\d)/.exec(c)[1]),p=W0>=2;let r=null,Q0={},T0=J.getParameter(J.SCISSOR_BOX),S0=J.getParameter(J.VIEWPORT),WJ=new LJ().fromArray(T0),n0=new LJ().fromArray(S0);function n(f,q0,i,D0){let V0=new Uint8Array(4),J0=J.createTexture();J.bindTexture(f,J0),J.texParameteri(f,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(f,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let F0=0;F0<i;F0++)if(f===J.TEXTURE_3D||f===J.TEXTURE_2D_ARRAY)J.texImage3D(q0,0,J.RGBA,1,1,D0,0,J.RGBA,J.UNSIGNED_BYTE,V0);else J.texImage2D(q0+F0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,V0);return J0}let K0={};K0[J.TEXTURE_2D]=n(J.TEXTURE_2D,J.TEXTURE_2D,1),K0[J.TEXTURE_CUBE_MAP]=n(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),K0[J.TEXTURE_2D_ARRAY]=n(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),K0[J.TEXTURE_3D]=n(J.TEXTURE_3D,J.TEXTURE_3D,1,1),W.setClear(0,0,0,1),X.setClear(1),Y.setClear(0),X0(J.DEPTH_TEST),X.setFunc(fQ),O0(!1),z0(jQ),X0(J.CULL_FACE),Y0(Q8);function X0(f){if(N[f]!==!0)J.enable(f),N[f]=!0}function j0(f){if(N[f]!==!1)J.disable(f),N[f]=!1}function x0(f,q0){if(G[f]!==q0){if(J.bindFramebuffer(f,q0),G[f]=q0,f===J.DRAW_FRAMEBUFFER)G[J.FRAMEBUFFER]=q0;if(f===J.FRAMEBUFFER)G[J.DRAW_FRAMEBUFFER]=q0;return!0}return!1}function B0(f,q0){let i=M,D0=!1;if(f){if(i=D.get(q0),i===void 0)i=[],D.set(q0,i);let V0=f.textures;if(i.length!==V0.length||i[0]!==J.COLOR_ATTACHMENT0){for(let J0=0,F0=V0.length;J0<F0;J0++)i[J0]=J.COLOR_ATTACHMENT0+J0;i.length=V0.length,D0=!0}}else if(i[0]!==J.BACK)i[0]=J.BACK,D0=!0;if(D0)J.drawBuffers(i)}function s0(f){if(I!==f)return J.useProgram(f),I=f,!0;return!1}let t={[s9]:J.FUNC_ADD,[YK]:J.FUNC_SUBTRACT,[HK]:J.FUNC_REVERSE_SUBTRACT};t[UK]=J.MIN,t[GK]=J.MAX;let $0={[NK]:J.ZERO,[EK]:J.ONE,[qK]:J.SRC_COLOR,[FK]:J.SRC_ALPHA,[VK]:J.SRC_ALPHA_SATURATE,[LK]:J.DST_COLOR,[RK]:J.DST_ALPHA,[DK]:J.ONE_MINUS_SRC_COLOR,[OK]:J.ONE_MINUS_SRC_ALPHA,[kK]:J.ONE_MINUS_DST_COLOR,[MK]:J.ONE_MINUS_DST_ALPHA,[BK]:J.CONSTANT_COLOR,[IK]:J.ONE_MINUS_CONSTANT_COLOR,[_K]:J.CONSTANT_ALPHA,[AK]:J.ONE_MINUS_CONSTANT_ALPHA};function Y0(f,q0,i,D0,V0,J0,F0,u0,GJ,YJ){if(f===Q8){if(F===!0)j0(J.BLEND),F=!1;return}if(F===!1)X0(J.BLEND),F=!0;if(f!==XK){if(f!==q||YJ!==h){if(C!==s9||_!==s9)J.blendEquation(J.FUNC_ADD),C=s9,_=s9;if(YJ)switch(f){case M7:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case Y9:J.blendFunc(J.ONE,J.ONE);break;case yQ:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case vQ:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:l0("WebGLState: Invalid blending: ",f);break}else switch(f){case M7:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case Y9:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case yQ:l0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vQ:l0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:l0("WebGLState: Invalid blending: ",f);break}A=null,L=null,P=null,z=null,O.set(0,0,0),V=0,q=f,h=YJ}return}if(V0=V0||q0,J0=J0||i,F0=F0||D0,q0!==C||V0!==_)J.blendEquationSeparate(t[q0],t[V0]),C=q0,_=V0;if(i!==A||D0!==L||J0!==P||F0!==z)J.blendFuncSeparate($0[i],$0[D0],$0[J0],$0[F0]),A=i,L=D0,P=J0,z=F0;if(u0.equals(O)===!1||GJ!==V)J.blendColor(u0.r,u0.g,u0.b,GJ),O.copy(u0),V=GJ;q=f,h=!1}function G0(f,q0){f.side===cJ?j0(J.CULL_FACE):X0(J.CULL_FACE);let i=f.side===hJ;if(q0)i=!i;O0(i),f.blending===M7&&f.transparent===!1?Y0(Q8):Y0(f.blending,f.blendEquation,f.blendSrc,f.blendDst,f.blendEquationAlpha,f.blendSrcAlpha,f.blendDstAlpha,f.blendColor,f.blendAlpha,f.premultipliedAlpha),X.setFunc(f.depthFunc),X.setTest(f.depthTest),X.setMask(f.depthWrite),W.setMask(f.colorWrite);let D0=f.stencilWrite;if(Y.setTest(D0),D0)Y.setMask(f.stencilWriteMask),Y.setFunc(f.stencilFunc,f.stencilRef,f.stencilFuncMask),Y.setOp(f.stencilFail,f.stencilZFail,f.stencilZPass);h0(f.polygonOffset,f.polygonOffsetFactor,f.polygonOffsetUnits),f.alphaToCoverage===!0?X0(J.SAMPLE_ALPHA_TO_COVERAGE):j0(J.SAMPLE_ALPHA_TO_COVERAGE)}function O0(f){if(y!==f){if(f)J.frontFace(J.CW);else J.frontFace(J.CCW);y=f}}function z0(f){if(f!==ZK){if(X0(J.CULL_FACE),f!==b)if(f===jQ)J.cullFace(J.BACK);else if(f===KK)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else j0(J.CULL_FACE);b=f}function v0(f){if(f!==u){if(p)J.lineWidth(f);u=f}}function h0(f,q0,i){if(f){if(X0(J.POLYGON_OFFSET_FILL),w!==q0||m!==i){if(w=q0,m=i,X.getReversed())q0=-q0;J.polygonOffset(q0,i)}}else j0(J.POLYGON_OFFSET_FILL)}function d0(f){if(f)X0(J.SCISSOR_TEST);else j0(J.SCISSOR_TEST)}function T(f){if(f===void 0)f=J.TEXTURE0+o-1;if(r!==f)J.activeTexture(f),r=f}function XJ(f,q0,i){if(i===void 0)if(r===null)i=J.TEXTURE0+o-1;else i=r;let D0=Q0[i];if(D0===void 0)D0={type:void 0,texture:void 0},Q0[i]=D0;if(D0.type!==f||D0.texture!==q0){if(r!==i)J.activeTexture(i),r=i;J.bindTexture(f,q0||K0[f]),D0.type=f,D0.texture=q0}}function i0(){let f=Q0[r];if(f!==void 0&&f.type!==void 0)J.bindTexture(f.type,null),f.type=void 0,f.texture=void 0}function o0(){try{J.compressedTexImage2D(...arguments)}catch(f){l0("WebGLState:",f)}}function B(){try{J.compressedTexImage3D(...arguments)}catch(f){l0("WebGLState:",f)}}function R(){try{J.texSubImage2D(...arguments)}catch(f){l0("WebGLState:",f)}}function S(){try{J.texSubImage3D(...arguments)}catch(f){l0("WebGLState:",f)}}function l(){try{J.compressedTexSubImage2D(...arguments)}catch(f){l0("WebGLState:",f)}}function e(){try{J.compressedTexSubImage3D(...arguments)}catch(f){l0("WebGLState:",f)}}function H0(){try{J.texStorage2D(...arguments)}catch(f){l0("WebGLState:",f)}}function N0(){try{J.texStorage3D(...arguments)}catch(f){l0("WebGLState:",f)}}function s(){try{J.texImage2D(...arguments)}catch(f){l0("WebGLState:",f)}}function a(){try{J.texImage3D(...arguments)}catch(f){l0("WebGLState:",f)}}function M0(f){if(E[f]!==void 0)return E[f];else return J.getParameter(f)}function C0(f,q0){if(E[f]!==q0)J.pixelStorei(f,q0),E[f]=q0}function E0(f){if(WJ.equals(f)===!1)J.scissor(f.x,f.y,f.z,f.w),WJ.copy(f)}function U0(f){if(n0.equals(f)===!1)J.viewport(f.x,f.y,f.z,f.w),n0.copy(f)}function A0(f,q0){let i=U.get(q0);if(i===void 0)i=new WeakMap,U.set(q0,i);let D0=i.get(f);if(D0===void 0)D0=J.getUniformBlockIndex(q0,f.name),i.set(f,D0)}function f0(f,q0){let D0=U.get(q0).get(f);if(H.get(q0)!==D0)J.uniformBlockBinding(q0,D0,f.__bindingPointIndex),H.set(q0,D0)}function e0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),X.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),N={},E={},r=null,Q0={},G={},D=new WeakMap,M=[],I=null,F=!1,q=null,C=null,A=null,L=null,_=null,P=null,z=null,O=new b0(0,0,0),V=0,h=!1,y=null,b=null,u=null,w=null,m=null,WJ.set(0,0,J.canvas.width,J.canvas.height),n0.set(0,0,J.canvas.width,J.canvas.height),W.reset(),X.reset(),Y.reset()}return{buffers:{color:W,depth:X,stencil:Y},enable:X0,disable:j0,bindFramebuffer:x0,drawBuffers:B0,useProgram:s0,setBlending:Y0,setMaterial:G0,setFlipSided:O0,setCullFace:z0,setLineWidth:v0,setPolygonOffset:h0,setScissorTest:d0,activeTexture:T,bindTexture:XJ,unbindTexture:i0,compressedTexImage2D:o0,compressedTexImage3D:B,texImage2D:s,texImage3D:a,pixelStorei:C0,getParameter:M0,updateUBOMapping:A0,uniformBlockBinding:f0,texStorage2D:H0,texStorage3D:N0,texSubImage2D:R,texSubImage3D:S,compressedTexSubImage2D:l,compressedTexSubImage3D:e,scissor:E0,viewport:U0,reset:e0}}function eN(J,Q,$,Z,K,W,X){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,H=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new Z0,N=new WeakMap,E=new Set,G,D=new WeakMap,M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(B){}function I(B,R){return M?new OffscreenCanvas(B,R):q7("canvas")}function F(B,R,S){let l=1,e=o0(B);if(e.width>S||e.height>S)l=S/Math.max(e.width,e.height);if(l<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){let H0=Math.floor(l*e.width),N0=Math.floor(l*e.height);if(G===void 0)G=I(H0,N0);let s=R?I(H0,N0):G;return s.width=H0,s.height=N0,s.getContext("2d").drawImage(B,0,0,H0,N0),m0("WebGLRenderer: Texture has been resized from ("+e.width+"x"+e.height+") to ("+H0+"x"+N0+")."),s}else{if("data"in B)m0("WebGLRenderer: Image in DataTexture is too big ("+e.width+"x"+e.height+").");return B}return B}function q(B){return B.generateMipmaps}function C(B){J.generateMipmap(B)}function A(B){if(B.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(B.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function L(B,R,S,l,e,H0=!1){if(B!==null){if(J[B]!==void 0)return J[B];m0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let N0;if(l){if(N0=Q.get("EXT_texture_norm16"),!N0)m0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let s=R;if(R===J.RED){if(S===J.FLOAT)s=J.R32F;if(S===J.HALF_FLOAT)s=J.R16F;if(S===J.UNSIGNED_BYTE)s=J.R8;if(S===J.UNSIGNED_SHORT&&N0)s=N0.R16_EXT;if(S===J.SHORT&&N0)s=N0.R16_SNORM_EXT}if(R===J.RED_INTEGER){if(S===J.UNSIGNED_BYTE)s=J.R8UI;if(S===J.UNSIGNED_SHORT)s=J.R16UI;if(S===J.UNSIGNED_INT)s=J.R32UI;if(S===J.BYTE)s=J.R8I;if(S===J.SHORT)s=J.R16I;if(S===J.INT)s=J.R32I}if(R===J.RG){if(S===J.FLOAT)s=J.RG32F;if(S===J.HALF_FLOAT)s=J.RG16F;if(S===J.UNSIGNED_BYTE)s=J.RG8;if(S===J.UNSIGNED_SHORT&&N0)s=N0.RG16_EXT;if(S===J.SHORT&&N0)s=N0.RG16_SNORM_EXT}if(R===J.RG_INTEGER){if(S===J.UNSIGNED_BYTE)s=J.RG8UI;if(S===J.UNSIGNED_SHORT)s=J.RG16UI;if(S===J.UNSIGNED_INT)s=J.RG32UI;if(S===J.BYTE)s=J.RG8I;if(S===J.SHORT)s=J.RG16I;if(S===J.INT)s=J.RG32I}if(R===J.RGB_INTEGER){if(S===J.UNSIGNED_BYTE)s=J.RGB8UI;if(S===J.UNSIGNED_SHORT)s=J.RGB16UI;if(S===J.UNSIGNED_INT)s=J.RGB32UI;if(S===J.BYTE)s=J.RGB8I;if(S===J.SHORT)s=J.RGB16I;if(S===J.INT)s=J.RGB32I}if(R===J.RGBA_INTEGER){if(S===J.UNSIGNED_BYTE)s=J.RGBA8UI;if(S===J.UNSIGNED_SHORT)s=J.RGBA16UI;if(S===J.UNSIGNED_INT)s=J.RGBA32UI;if(S===J.BYTE)s=J.RGBA8I;if(S===J.SHORT)s=J.RGBA16I;if(S===J.INT)s=J.RGBA32I}if(R===J.RGB){if(S===J.UNSIGNED_SHORT&&N0)s=N0.RGB16_EXT;if(S===J.SHORT&&N0)s=N0.RGB16_SNORM_EXT;if(S===J.UNSIGNED_INT_5_9_9_9_REV)s=J.RGB9_E5;if(S===J.UNSIGNED_INT_10F_11F_11F_REV)s=J.R11F_G11F_B10F}if(R===J.RGBA){let a=H0?k$:QJ.getTransfer(e);if(S===J.FLOAT)s=J.RGBA32F;if(S===J.HALF_FLOAT)s=J.RGBA16F;if(S===J.UNSIGNED_BYTE)s=a===EJ?J.SRGB8_ALPHA8:J.RGBA8;if(S===J.UNSIGNED_SHORT&&N0)s=N0.RGBA16_EXT;if(S===J.SHORT&&N0)s=N0.RGBA16_SNORM_EXT;if(S===J.UNSIGNED_SHORT_4_4_4_4)s=J.RGBA4;if(S===J.UNSIGNED_SHORT_5_5_5_1)s=J.RGB5_A1}if(s===J.R16F||s===J.R32F||s===J.RG16F||s===J.RG32F||s===J.RGBA16F||s===J.RGBA32F)Q.get("EXT_color_buffer_float");return s}function _(B,R){let S;if(B){if(R===null||R===s8||R===o9)S=J.DEPTH24_STENCIL8;else if(R===T8)S=J.DEPTH32F_STENCIL8;else if(R===P7)S=J.DEPTH24_STENCIL8,m0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(R===null||R===s8||R===o9)S=J.DEPTH_COMPONENT24;else if(R===T8)S=J.DEPTH_COMPONENT32F;else if(R===P7)S=J.DEPTH_COMPONENT16;return S}function P(B,R){if(q(B)===!0||B.isFramebufferTexture&&B.minFilter!==n8&&B.minFilter!==iJ)return Math.log2(Math.max(R.width,R.height))+1;else if(B.mipmaps!==void 0&&B.mipmaps.length>0)return B.mipmaps.length;else if(B.isCompressedTexture&&Array.isArray(B.image))return R.mipmaps.length;else return 1}function z(B){let R=B.target;if(R.removeEventListener("dispose",z),V(R),R.isVideoTexture)N.delete(R);if(R.isHTMLTexture)E.delete(R)}function O(B){let R=B.target;R.removeEventListener("dispose",O),y(R)}function V(B){let R=Z.get(B);if(R.__webglInit===void 0)return;let S=B.source,l=D.get(S);if(l){let e=l[R.__cacheKey];if(e.usedTimes--,e.usedTimes===0)h(B);if(Object.keys(l).length===0)D.delete(S)}Z.remove(B)}function h(B){let R=Z.get(B);J.deleteTexture(R.__webglTexture);let S=B.source,l=D.get(S);delete l[R.__cacheKey],X.memory.textures--}function y(B){let R=Z.get(B);if(B.depthTexture)B.depthTexture.dispose(),Z.remove(B.depthTexture);if(B.isWebGLCubeRenderTarget)for(let l=0;l<6;l++){if(Array.isArray(R.__webglFramebuffer[l]))for(let e=0;e<R.__webglFramebuffer[l].length;e++)J.deleteFramebuffer(R.__webglFramebuffer[l][e]);else J.deleteFramebuffer(R.__webglFramebuffer[l]);if(R.__webglDepthbuffer)J.deleteRenderbuffer(R.__webglDepthbuffer[l])}else{if(Array.isArray(R.__webglFramebuffer))for(let l=0;l<R.__webglFramebuffer.length;l++)J.deleteFramebuffer(R.__webglFramebuffer[l]);else J.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer)J.deleteRenderbuffer(R.__webglDepthbuffer);if(R.__webglMultisampledFramebuffer)J.deleteFramebuffer(R.__webglMultisampledFramebuffer);if(R.__webglColorRenderbuffer){for(let l=0;l<R.__webglColorRenderbuffer.length;l++)if(R.__webglColorRenderbuffer[l])J.deleteRenderbuffer(R.__webglColorRenderbuffer[l])}if(R.__webglDepthRenderbuffer)J.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let S=B.textures;for(let l=0,e=S.length;l<e;l++){let H0=Z.get(S[l]);if(H0.__webglTexture)J.deleteTexture(H0.__webglTexture),X.memory.textures--;Z.remove(S[l])}Z.remove(B)}let b=0;function u(){b=0}function w(){return b}function m(B){b=B}function o(){let B=b;if(B>=K.maxTextures)m0("WebGLTextures: Trying to use "+(B+1)+" texture units while this GPU supports only "+K.maxTextures);return b+=1,B}function p(B){let R=[];return R.push(B.wrapS),R.push(B.wrapT),R.push(B.wrapR||0),R.push(B.magFilter),R.push(B.minFilter),R.push(B.anisotropy),R.push(B.internalFormat),R.push(B.format),R.push(B.type),R.push(B.generateMipmaps),R.push(B.premultiplyAlpha),R.push(B.flipY),R.push(B.unpackAlignment),R.push(B.colorSpace),R.join()}function W0(B,R){let S=Z.get(B);if(B.isVideoTexture)XJ(B);if(B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&S.__version!==B.version){let l=B.image;if(l===null)m0("WebGLRenderer: Texture marked for update but no image data found.");else if(l.complete===!1)m0("WebGLRenderer: Texture marked for update but image is incomplete");else{j0(S,B,R);return}}else if(B.isExternalTexture)S.__webglTexture=B.sourceTexture?B.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,S.__webglTexture,J.TEXTURE0+R)}function c(B,R){let S=Z.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&S.__version!==B.version){j0(S,B,R);return}else if(B.isExternalTexture)S.__webglTexture=B.sourceTexture?B.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,S.__webglTexture,J.TEXTURE0+R)}function r(B,R){let S=Z.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&S.__version!==B.version){j0(S,B,R);return}$.bindTexture(J.TEXTURE_3D,S.__webglTexture,J.TEXTURE0+R)}function Q0(B,R){let S=Z.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&S.__version!==B.version){x0(S,B,R);return}$.bindTexture(J.TEXTURE_CUBE_MAP,S.__webglTexture,J.TEXTURE0+R)}let T0={[C7]:J.REPEAT,[G9]:J.CLAMP_TO_EDGE,[bK]:J.MIRRORED_REPEAT},S0={[n8]:J.NEAREST,[hK]:J.NEAREST_MIPMAP_NEAREST,[z7]:J.NEAREST_MIPMAP_LINEAR,[iJ]:J.LINEAR,[_6]:J.LINEAR_MIPMAP_NEAREST,[N9]:J.LINEAR_MIPMAP_LINEAR},WJ={[nK]:J.NEVER,[rK]:J.ALWAYS,[sK]:J.LESS,[S6]:J.LEQUAL,[iK]:J.EQUAL,[j6]:J.GEQUAL,[oK]:J.GREATER,[aK]:J.NOTEQUAL};function n0(B,R){if(R.type===T8&&Q.has("OES_texture_float_linear")===!1&&(R.magFilter===iJ||R.magFilter===_6||R.magFilter===z7||R.magFilter===N9||R.minFilter===iJ||R.minFilter===_6||R.minFilter===z7||R.minFilter===N9))m0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(B,J.TEXTURE_WRAP_S,T0[R.wrapS]),J.texParameteri(B,J.TEXTURE_WRAP_T,T0[R.wrapT]),B===J.TEXTURE_3D||B===J.TEXTURE_2D_ARRAY)J.texParameteri(B,J.TEXTURE_WRAP_R,T0[R.wrapR]);if(J.texParameteri(B,J.TEXTURE_MAG_FILTER,S0[R.magFilter]),J.texParameteri(B,J.TEXTURE_MIN_FILTER,S0[R.minFilter]),R.compareFunction)J.texParameteri(B,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(B,J.TEXTURE_COMPARE_FUNC,WJ[R.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===n8)return;if(R.minFilter!==z7&&R.minFilter!==N9)return;if(R.type===T8&&Q.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||Z.get(R).__currentAnisotropy){let S=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(B,S.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,K.getMaxAnisotropy())),Z.get(R).__currentAnisotropy=R.anisotropy}}}function n(B,R){let S=!1;if(B.__webglInit===void 0)B.__webglInit=!0,R.addEventListener("dispose",z);let l=R.source,e=D.get(l);if(e===void 0)e={},D.set(l,e);let H0=p(R);if(H0!==B.__cacheKey){if(e[H0]===void 0)e[H0]={texture:J.createTexture(),usedTimes:0},X.memory.textures++,S=!0;e[H0].usedTimes++;let N0=e[B.__cacheKey];if(N0!==void 0){if(e[B.__cacheKey].usedTimes--,N0.usedTimes===0)h(R)}B.__cacheKey=H0,B.__webglTexture=e[H0].texture}return S}function K0(B,R,S){return Math.floor(Math.floor(B/S)/R)}function X0(B,R,S,l){let H0=B.updateRanges;if(H0.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,R.width,R.height,S,l,R.data);else{H0.sort((C0,E0)=>C0.start-E0.start);let N0=0;for(let C0=1;C0<H0.length;C0++){let E0=H0[N0],U0=H0[C0],A0=E0.start+E0.count,f0=K0(U0.start,R.width,4),e0=K0(E0.start,R.width,4);if(U0.start<=A0+1&&f0===e0&&K0(U0.start+U0.count-1,R.width,4)===f0)E0.count=Math.max(E0.count,U0.start+U0.count-E0.start);else++N0,H0[N0]=U0}H0.length=N0+1;let s=$.getParameter(J.UNPACK_ROW_LENGTH),a=$.getParameter(J.UNPACK_SKIP_PIXELS),M0=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,R.width);for(let C0=0,E0=H0.length;C0<E0;C0++){let U0=H0[C0],A0=Math.floor(U0.start/4),f0=Math.ceil(U0.count/4),e0=A0%R.width,f=Math.floor(A0/R.width),q0=f0,i=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,e0),$.pixelStorei(J.UNPACK_SKIP_ROWS,f),$.texSubImage2D(J.TEXTURE_2D,0,e0,f,q0,1,S,l,R.data)}B.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,s),$.pixelStorei(J.UNPACK_SKIP_PIXELS,a),$.pixelStorei(J.UNPACK_SKIP_ROWS,M0)}}function j0(B,R,S){let l=J.TEXTURE_2D;if(R.isDataArrayTexture||R.isCompressedArrayTexture)l=J.TEXTURE_2D_ARRAY;if(R.isData3DTexture)l=J.TEXTURE_3D;let e=n(B,R),H0=R.source;$.bindTexture(l,B.__webglTexture,J.TEXTURE0+S);let N0=Z.get(H0);if(H0.version!==N0.__version||e===!0){if($.activeTexture(J.TEXTURE0+S),(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)===!1){let i=QJ.getPrimaries(QJ.workingColorSpace),D0=R.colorSpace===F9?null:QJ.getPrimaries(R.colorSpace),V0=R.colorSpace===F9||i===D0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,R.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,V0)}$.pixelStorei(J.UNPACK_ALIGNMENT,R.unpackAlignment);let a=F(R.image,!1,K.maxTextureSize);a=i0(R,a);let M0=W.convert(R.format,R.colorSpace),C0=W.convert(R.type),E0=L(R.internalFormat,M0,C0,R.normalized,R.colorSpace,R.isVideoTexture);n0(l,R);let U0,A0=R.mipmaps,f0=R.isVideoTexture!==!0,e0=N0.__version===void 0||e===!0,f=H0.dataReady,q0=P(R,a);if(R.isDepthTexture){if(E0=_(R.format===q9,R.type),e0)if(f0)$.texStorage2D(J.TEXTURE_2D,1,E0,a.width,a.height);else $.texImage2D(J.TEXTURE_2D,0,E0,a.width,a.height,0,M0,C0,null)}else if(R.isDataTexture)if(A0.length>0){if(f0&&e0)$.texStorage2D(J.TEXTURE_2D,q0,E0,A0[0].width,A0[0].height);for(let i=0,D0=A0.length;i<D0;i++)if(U0=A0[i],f0){if(f)$.texSubImage2D(J.TEXTURE_2D,i,0,0,U0.width,U0.height,M0,C0,U0.data)}else $.texImage2D(J.TEXTURE_2D,i,E0,U0.width,U0.height,0,M0,C0,U0.data);R.generateMipmaps=!1}else if(f0){if(e0)$.texStorage2D(J.TEXTURE_2D,q0,E0,a.width,a.height);if(f)X0(R,a,M0,C0)}else $.texImage2D(J.TEXTURE_2D,0,E0,a.width,a.height,0,M0,C0,a.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){if(f0&&e0)$.texStorage3D(J.TEXTURE_2D_ARRAY,q0,E0,A0[0].width,A0[0].height,a.depth);for(let i=0,D0=A0.length;i<D0;i++)if(U0=A0[i],R.format!==R8)if(M0!==null)if(f0){if(f)if(R.layerUpdates.size>0){let V0=$Z(U0.width,U0.height,R.format,R.type);for(let J0 of R.layerUpdates){let F0=U0.data.subarray(J0*V0/U0.data.BYTES_PER_ELEMENT,(J0+1)*V0/U0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,i,0,0,J0,U0.width,U0.height,1,M0,F0)}}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,i,0,0,0,U0.width,U0.height,a.depth,M0,U0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,i,E0,U0.width,U0.height,a.depth,0,U0.data,0,0);else m0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(f0){if(f)$.texSubImage3D(J.TEXTURE_2D_ARRAY,i,0,0,0,U0.width,U0.height,a.depth,M0,C0,U0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,i,E0,U0.width,U0.height,a.depth,0,M0,C0,U0.data);if(R.layerUpdates.size>0)R.clearLayerUpdates()}else{if(f0&&e0)$.texStorage2D(J.TEXTURE_2D,q0,E0,A0[0].width,A0[0].height);for(let i=0,D0=A0.length;i<D0;i++)if(U0=A0[i],R.format!==R8)if(M0!==null)if(f0){if(f)$.compressedTexSubImage2D(J.TEXTURE_2D,i,0,0,U0.width,U0.height,M0,U0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,i,E0,U0.width,U0.height,0,U0.data);else m0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(f0){if(f)$.texSubImage2D(J.TEXTURE_2D,i,0,0,U0.width,U0.height,M0,C0,U0.data)}else $.texImage2D(J.TEXTURE_2D,i,E0,U0.width,U0.height,0,M0,C0,U0.data)}else if(R.isDataArrayTexture)if(f0){if(e0)$.texStorage3D(J.TEXTURE_2D_ARRAY,q0,E0,a.width,a.height,a.depth);if(f)if(R.layerUpdates.size>0){let i=$Z(a.width,a.height,R.format,R.type);for(let D0 of R.layerUpdates){let V0=a.data.subarray(D0*i/a.data.BYTES_PER_ELEMENT,(D0+1)*i/a.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,D0,a.width,a.height,1,M0,C0,V0)}R.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,a.width,a.height,a.depth,M0,C0,a.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,E0,a.width,a.height,a.depth,0,M0,C0,a.data);else if(R.isData3DTexture)if(f0){if(e0)$.texStorage3D(J.TEXTURE_3D,q0,E0,a.width,a.height,a.depth);if(f)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,a.width,a.height,a.depth,M0,C0,a.data)}else $.texImage3D(J.TEXTURE_3D,0,E0,a.width,a.height,a.depth,0,M0,C0,a.data);else if(R.isFramebufferTexture){if(e0)if(f0)$.texStorage2D(J.TEXTURE_2D,q0,E0,a.width,a.height);else{let{width:i,height:D0}=a;for(let V0=0;V0<q0;V0++)$.texImage2D(J.TEXTURE_2D,V0,E0,i,D0,0,M0,C0,null),i>>=1,D0>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in J){let i=J.canvas;if(!i.hasAttribute("layoutsubtree"))i.setAttribute("layoutsubtree","true");if(a.parentNode!==i){i.appendChild(a),E.add(R),i.onpaint=(D0)=>{let V0=D0.changedElements;for(let J0 of E)if(V0.includes(J0.image))J0.needsUpdate=!0},i.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,a);else{let{RGBA:V0,RGBA:J0,UNSIGNED_BYTE:F0}=J;J.texElementImage2D(J.TEXTURE_2D,0,V0,J0,F0,a)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(A0.length>0){if(f0&&e0){let i=o0(A0[0]);$.texStorage2D(J.TEXTURE_2D,q0,E0,i.width,i.height)}for(let i=0,D0=A0.length;i<D0;i++)if(U0=A0[i],f0){if(f)$.texSubImage2D(J.TEXTURE_2D,i,0,0,M0,C0,U0)}else $.texImage2D(J.TEXTURE_2D,i,E0,M0,C0,U0);R.generateMipmaps=!1}else if(f0){if(e0){let i=o0(a);$.texStorage2D(J.TEXTURE_2D,q0,E0,i.width,i.height)}if(f)$.texSubImage2D(J.TEXTURE_2D,0,0,0,M0,C0,a)}else $.texImage2D(J.TEXTURE_2D,0,E0,M0,C0,a);if(q(R))C(l);if(N0.__version=H0.version,R.onUpdate)R.onUpdate(R)}B.__version=R.version}function x0(B,R,S){if(R.image.length!==6)return;let l=n(B,R),e=R.source;$.bindTexture(J.TEXTURE_CUBE_MAP,B.__webglTexture,J.TEXTURE0+S);let H0=Z.get(e);if(e.version!==H0.__version||l===!0){$.activeTexture(J.TEXTURE0+S);let N0=QJ.getPrimaries(QJ.workingColorSpace),s=R.colorSpace===F9?null:QJ.getPrimaries(R.colorSpace),a=R.colorSpace===F9||N0===s?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,R.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,R.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,a);let M0=R.isCompressedTexture||R.image[0].isCompressedTexture,C0=R.image[0]&&R.image[0].isDataTexture,E0=[];for(let J0=0;J0<6;J0++){if(!M0&&!C0)E0[J0]=F(R.image[J0],!0,K.maxCubemapSize);else E0[J0]=C0?R.image[J0].image:R.image[J0];E0[J0]=i0(R,E0[J0])}let U0=E0[0],A0=W.convert(R.format,R.colorSpace),f0=W.convert(R.type),e0=L(R.internalFormat,A0,f0,R.normalized,R.colorSpace),f=R.isVideoTexture!==!0,q0=H0.__version===void 0||l===!0,i=e.dataReady,D0=P(R,U0);n0(J.TEXTURE_CUBE_MAP,R);let V0;if(M0){if(f&&q0)$.texStorage2D(J.TEXTURE_CUBE_MAP,D0,e0,U0.width,U0.height);for(let J0=0;J0<6;J0++){V0=E0[J0].mipmaps;for(let F0=0;F0<V0.length;F0++){let u0=V0[F0];if(R.format!==R8)if(A0!==null)if(f){if(i)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,F0,0,0,u0.width,u0.height,A0,u0.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,F0,e0,u0.width,u0.height,0,u0.data);else m0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(f){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,F0,0,0,u0.width,u0.height,A0,f0,u0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,F0,e0,u0.width,u0.height,0,A0,f0,u0.data)}}}else{if(V0=R.mipmaps,f&&q0){if(V0.length>0)D0++;let J0=o0(E0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,D0,e0,J0.width,J0.height)}for(let J0=0;J0<6;J0++)if(C0){if(f){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,0,0,0,E0[J0].width,E0[J0].height,A0,f0,E0[J0].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,0,e0,E0[J0].width,E0[J0].height,0,A0,f0,E0[J0].data);for(let F0=0;F0<V0.length;F0++){let GJ=V0[F0].image[J0].image;if(f){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,F0+1,0,0,GJ.width,GJ.height,A0,f0,GJ.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,F0+1,e0,GJ.width,GJ.height,0,A0,f0,GJ.data)}}else{if(f){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,0,0,0,A0,f0,E0[J0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,0,e0,A0,f0,E0[J0]);for(let F0=0;F0<V0.length;F0++){let u0=V0[F0];if(f){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,F0+1,0,0,A0,f0,u0.image[J0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,F0+1,e0,A0,f0,u0.image[J0])}}}if(q(R))C(J.TEXTURE_CUBE_MAP);if(H0.__version=e.version,R.onUpdate)R.onUpdate(R)}B.__version=R.version}function B0(B,R,S,l,e,H0){let N0=W.convert(S.format,S.colorSpace),s=W.convert(S.type),a=L(S.internalFormat,N0,s,S.normalized,S.colorSpace),M0=Z.get(R),C0=Z.get(S);if(C0.__renderTarget=R,!M0.__hasExternalTextures){let E0=Math.max(1,R.width>>H0),U0=Math.max(1,R.height>>H0);if(e===J.TEXTURE_3D||e===J.TEXTURE_2D_ARRAY)$.texImage3D(e,H0,a,E0,U0,R.depth,0,N0,s,null);else $.texImage2D(e,H0,a,E0,U0,0,N0,s,null)}if($.bindFramebuffer(J.FRAMEBUFFER,B),T(R))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,l,e,C0.__webglTexture,0,d0(R));else if(e===J.TEXTURE_2D||e>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&e<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,l,e,C0.__webglTexture,H0);$.bindFramebuffer(J.FRAMEBUFFER,null)}function s0(B,R,S){if(J.bindRenderbuffer(J.RENDERBUFFER,B),R.depthBuffer){let l=R.depthTexture,e=l&&l.isDepthTexture?l.type:null,H0=_(R.stencilBuffer,e),N0=R.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(T(R))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,d0(R),H0,R.width,R.height);else if(S)J.renderbufferStorageMultisample(J.RENDERBUFFER,d0(R),H0,R.width,R.height);else J.renderbufferStorage(J.RENDERBUFFER,H0,R.width,R.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,N0,J.RENDERBUFFER,B)}else{let l=R.textures;for(let e=0;e<l.length;e++){let H0=l[e],N0=W.convert(H0.format,H0.colorSpace),s=W.convert(H0.type),a=L(H0.internalFormat,N0,s,H0.normalized,H0.colorSpace);if(T(R))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,d0(R),a,R.width,R.height);else if(S)J.renderbufferStorageMultisample(J.RENDERBUFFER,d0(R),a,R.width,R.height);else J.renderbufferStorage(J.RENDERBUFFER,a,R.width,R.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function t(B,R,S){let l=R.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,B),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let e=Z.get(R.depthTexture);if(e.__renderTarget=R,!e.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0;if(l){if(e.__webglInit===void 0)e.__webglInit=!0,R.depthTexture.addEventListener("dispose",z);if(e.__webglTexture===void 0){e.__webglTexture=J.createTexture(),$.bindTexture(J.TEXTURE_CUBE_MAP,e.__webglTexture),n0(J.TEXTURE_CUBE_MAP,R.depthTexture);let M0=W.convert(R.depthTexture.format),C0=W.convert(R.depthTexture.type),E0;if(R.depthTexture.format===E9)E0=J.DEPTH_COMPONENT24;else if(R.depthTexture.format===q9)E0=J.DEPTH24_STENCIL8;for(let U0=0;U0<6;U0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+U0,0,E0,R.width,R.height,0,M0,C0,null)}}else W0(R.depthTexture,0);let H0=e.__webglTexture,N0=d0(R),s=l?J.TEXTURE_CUBE_MAP_POSITIVE_X+S:J.TEXTURE_2D,a=R.depthTexture.format===q9?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(R.depthTexture.format===E9)if(T(R))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,a,s,H0,0,N0);else J.framebufferTexture2D(J.FRAMEBUFFER,a,s,H0,0);else if(R.depthTexture.format===q9)if(T(R))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,a,s,H0,0,N0);else J.framebufferTexture2D(J.FRAMEBUFFER,a,s,H0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $0(B){let R=Z.get(B),S=B.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==B.depthTexture){let l=B.depthTexture;if(R.__depthDisposeCallback)R.__depthDisposeCallback();if(l){let e=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,l.removeEventListener("dispose",e)};l.addEventListener("dispose",e),R.__depthDisposeCallback=e}R.__boundDepthTexture=l}if(B.depthTexture&&!R.__autoAllocateDepthBuffer)if(S)for(let l=0;l<6;l++)t(R.__webglFramebuffer[l],B,l);else{let l=B.texture.mipmaps;if(l&&l.length>0)t(R.__webglFramebuffer[0],B,0);else t(R.__webglFramebuffer,B,0)}else if(S){R.__webglDepthbuffer=[];for(let l=0;l<6;l++)if($.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer[l]),R.__webglDepthbuffer[l]===void 0)R.__webglDepthbuffer[l]=J.createRenderbuffer(),s0(R.__webglDepthbuffer[l],B,!1);else{let e=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,H0=R.__webglDepthbuffer[l];J.bindRenderbuffer(J.RENDERBUFFER,H0),J.framebufferRenderbuffer(J.FRAMEBUFFER,e,J.RENDERBUFFER,H0)}}else{let l=B.texture.mipmaps;if(l&&l.length>0)$.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer);if(R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=J.createRenderbuffer(),s0(R.__webglDepthbuffer,B,!1);else{let e=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,H0=R.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,H0),J.framebufferRenderbuffer(J.FRAMEBUFFER,e,J.RENDERBUFFER,H0)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function Y0(B,R,S){let l=Z.get(B);if(R!==void 0)B0(l.__webglFramebuffer,B,B.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(S!==void 0)$0(B)}function G0(B){let R=B.texture,S=Z.get(B),l=Z.get(R);B.addEventListener("dispose",O);let e=B.textures,H0=B.isWebGLCubeRenderTarget===!0,N0=e.length>1;if(!N0){if(l.__webglTexture===void 0)l.__webglTexture=J.createTexture();l.__version=R.version,X.memory.textures++}if(H0){S.__webglFramebuffer=[];for(let s=0;s<6;s++)if(R.mipmaps&&R.mipmaps.length>0){S.__webglFramebuffer[s]=[];for(let a=0;a<R.mipmaps.length;a++)S.__webglFramebuffer[s][a]=J.createFramebuffer()}else S.__webglFramebuffer[s]=J.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){S.__webglFramebuffer=[];for(let s=0;s<R.mipmaps.length;s++)S.__webglFramebuffer[s]=J.createFramebuffer()}else S.__webglFramebuffer=J.createFramebuffer();if(N0)for(let s=0,a=e.length;s<a;s++){let M0=Z.get(e[s]);if(M0.__webglTexture===void 0)M0.__webglTexture=J.createTexture(),X.memory.textures++}if(B.samples>0&&T(B)===!1){S.__webglMultisampledFramebuffer=J.createFramebuffer(),S.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,S.__webglMultisampledFramebuffer);for(let s=0;s<e.length;s++){let a=e[s];S.__webglColorRenderbuffer[s]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,S.__webglColorRenderbuffer[s]);let M0=W.convert(a.format,a.colorSpace),C0=W.convert(a.type),E0=L(a.internalFormat,M0,C0,a.normalized,a.colorSpace,B.isXRRenderTarget===!0),U0=d0(B);J.renderbufferStorageMultisample(J.RENDERBUFFER,U0,E0,B.width,B.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+s,J.RENDERBUFFER,S.__webglColorRenderbuffer[s])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),B.depthBuffer)S.__webglDepthRenderbuffer=J.createRenderbuffer(),s0(S.__webglDepthRenderbuffer,B,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(H0){$.bindTexture(J.TEXTURE_CUBE_MAP,l.__webglTexture),n0(J.TEXTURE_CUBE_MAP,R);for(let s=0;s<6;s++)if(R.mipmaps&&R.mipmaps.length>0)for(let a=0;a<R.mipmaps.length;a++)B0(S.__webglFramebuffer[s][a],B,R,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+s,a);else B0(S.__webglFramebuffer[s],B,R,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+s,0);if(q(R))C(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(N0){for(let s=0,a=e.length;s<a;s++){let M0=e[s],C0=Z.get(M0),E0=J.TEXTURE_2D;if(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)E0=B.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(E0,C0.__webglTexture),n0(E0,M0),B0(S.__webglFramebuffer,B,M0,J.COLOR_ATTACHMENT0+s,E0,0),q(M0))C(E0)}$.unbindTexture()}else{let s=J.TEXTURE_2D;if(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)s=B.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(s,l.__webglTexture),n0(s,R),R.mipmaps&&R.mipmaps.length>0)for(let a=0;a<R.mipmaps.length;a++)B0(S.__webglFramebuffer[a],B,R,J.COLOR_ATTACHMENT0,s,a);else B0(S.__webglFramebuffer,B,R,J.COLOR_ATTACHMENT0,s,0);if(q(R))C(s);$.unbindTexture()}if(B.depthBuffer)$0(B)}function O0(B){let R=B.textures;for(let S=0,l=R.length;S<l;S++){let e=R[S];if(q(e)){let H0=A(B),N0=Z.get(e).__webglTexture;$.bindTexture(H0,N0),C(H0),$.unbindTexture()}}}let z0=[],v0=[];function h0(B){if(B.samples>0){if(T(B)===!1){let{textures:R,width:S,height:l}=B,e=J.COLOR_BUFFER_BIT,H0=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,N0=Z.get(B),s=R.length>1;if(s)for(let M0=0;M0<R.length;M0++)$.bindFramebuffer(J.FRAMEBUFFER,N0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+M0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,N0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+M0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,N0.__webglMultisampledFramebuffer);let a=B.texture.mipmaps;if(a&&a.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,N0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,N0.__webglFramebuffer);for(let M0=0;M0<R.length;M0++){if(B.resolveDepthBuffer){if(B.depthBuffer)e|=J.DEPTH_BUFFER_BIT;if(B.stencilBuffer&&B.resolveStencilBuffer)e|=J.STENCIL_BUFFER_BIT}if(s){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,N0.__webglColorRenderbuffer[M0]);let C0=Z.get(R[M0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,C0,0)}if(J.blitFramebuffer(0,0,S,l,0,0,S,l,e,J.NEAREST),H===!0){if(z0.length=0,v0.length=0,z0.push(J.COLOR_ATTACHMENT0+M0),B.depthBuffer&&B.storeMultisampledDepthBuffer===!1)z0.push(H0),v0.push(H0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,v0);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,z0)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),s)for(let M0=0;M0<R.length;M0++){$.bindFramebuffer(J.FRAMEBUFFER,N0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+M0,J.RENDERBUFFER,N0.__webglColorRenderbuffer[M0]);let C0=Z.get(R[M0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,N0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+M0,J.TEXTURE_2D,C0,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,N0.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&H){let R=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[R])}}}function d0(B){return Math.min(K.maxSamples,B.samples)}function T(B){let R=Z.get(B);return B.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function XJ(B){let R=X.render.frame;if(N.get(B)!==R)N.set(B,R),B.update()}function i0(B,R){let{colorSpace:S,format:l,type:e}=B;if(B.isCompressedTexture===!0||B.isVideoTexture===!0)return R;if(S!==L$&&S!==F9)if(QJ.getTransfer(S)===EJ){if(l!==R8||e!==U8)m0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else l0("WebGLTextures: Unsupported texture color space:",S);return R}function o0(B){if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement)U.width=B.naturalWidth||B.width,U.height=B.naturalHeight||B.height;else if(typeof VideoFrame<"u"&&B instanceof VideoFrame)U.width=B.displayWidth,U.height=B.displayHeight;else U.width=B.width,U.height=B.height;return U}this.allocateTextureUnit=o,this.resetTextureUnits=u,this.getTextureUnits=w,this.setTextureUnits=m,this.setTexture2D=W0,this.setTexture2DArray=c,this.setTexture3D=r,this.setTextureCube=Q0,this.rebindTextures=Y0,this.setupRenderTarget=G0,this.updateRenderTargetMipmap=O0,this.updateMultisampleRenderTarget=h0,this.setupDepthRenderbuffer=$0,this.setupFrameBufferTexture=B0,this.useMultisampledRTT=T,this.isReversedDepthBuffer=function(){return $.buffers.depth.getReversed()}}function J5(J,Q){function $(Z,K=F9){let W,X=QJ.getTransfer(K);if(Z===U8)return J.UNSIGNED_BYTE;if(Z===hQ)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===xQ)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===pK)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===mK)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Z===xK)return J.BYTE;if(Z===gK)return J.SHORT;if(Z===P7)return J.UNSIGNED_SHORT;if(Z===bQ)return J.INT;if(Z===s8)return J.UNSIGNED_INT;if(Z===T8)return J.FLOAT;if(Z===PJ)return J.HALF_FLOAT;if(Z===lK)return J.ALPHA;if(Z===dK)return J.RGB;if(Z===R8)return J.RGBA;if(Z===E9)return J.DEPTH_COMPONENT;if(Z===q9)return J.DEPTH_STENCIL;if(Z===uK)return J.RED;if(Z===gQ)return J.RED_INTEGER;if(Z===D9)return J.RG;if(Z===pQ)return J.RG_INTEGER;if(Z===mQ)return J.RGBA_INTEGER;if(Z===A6||Z===C6||Z===z6||Z===P6)if(X===EJ)if(W=Q.get("WEBGL_compressed_texture_s3tc_srgb"),W!==null){if(Z===A6)return W.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===C6)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===z6)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===P6)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(W=Q.get("WEBGL_compressed_texture_s3tc"),W!==null){if(Z===A6)return W.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===C6)return W.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===z6)return W.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===P6)return W.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===lQ||Z===dQ||Z===uQ||Z===cQ)if(W=Q.get("WEBGL_compressed_texture_pvrtc"),W!==null){if(Z===lQ)return W.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===dQ)return W.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===uQ)return W.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===cQ)return W.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===nQ||Z===sQ||Z===iQ||Z===oQ||Z===aQ||Z===w6||Z===rQ)if(W=Q.get("WEBGL_compressed_texture_etc"),W!==null){if(Z===nQ||Z===sQ)return X===EJ?W.COMPRESSED_SRGB8_ETC2:W.COMPRESSED_RGB8_ETC2;if(Z===iQ)return X===EJ?W.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:W.COMPRESSED_RGBA8_ETC2_EAC;if(Z===oQ)return W.COMPRESSED_R11_EAC;if(Z===aQ)return W.COMPRESSED_SIGNED_R11_EAC;if(Z===w6)return W.COMPRESSED_RG11_EAC;if(Z===rQ)return W.COMPRESSED_SIGNED_RG11_EAC}else return null;if(Z===tQ||Z===eQ||Z===J$||Z===Q$||Z===$$||Z===Z$||Z===K$||Z===W$||Z===X$||Z===Y$||Z===H$||Z===U$||Z===G$||Z===N$)if(W=Q.get("WEBGL_compressed_texture_astc"),W!==null){if(Z===tQ)return X===EJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:W.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===eQ)return X===EJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:W.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===J$)return X===EJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:W.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===Q$)return X===EJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:W.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===$$)return X===EJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:W.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===Z$)return X===EJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:W.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===K$)return X===EJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:W.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===W$)return X===EJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:W.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===X$)return X===EJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:W.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===Y$)return X===EJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:W.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===H$)return X===EJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:W.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===U$)return X===EJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:W.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===G$)return X===EJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:W.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===N$)return X===EJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:W.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===E$||Z===q$||Z===D$)if(W=Q.get("EXT_texture_compression_bptc"),W!==null){if(Z===E$)return X===EJ?W.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:W.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===q$)return W.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===D$)return W.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===F$||Z===O$||Z===T6||Z===R$)if(W=Q.get("EXT_texture_compression_rgtc"),W!==null){if(Z===F$)return W.COMPRESSED_RED_RGTC1_EXT;if(Z===O$)return W.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===T6)return W.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===R$)return W.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===o9)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:$}}var Q5=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$5=`
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

}`;class cW{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new x6(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new _J({vertexShader:Q5,fragmentShader:$5,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new kJ(new i8(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nW extends j8{constructor(J,Q){super();let $=this,Z=null,K=1,W=null,X="local-floor",Y=1,H=null,U=null,N=null,E=null,G=null,D=null,M=typeof XRWebGLBinding<"u",I=new cW,F={},q=Q.getContextAttributes(),C=null,A=null,L=[],_=[],P=new Z0,z=null,O=null,V=new vJ;V.viewport=new LJ;let h=new vJ;h.viewport=new LJ;let y=[V,h],b=new t$,u=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(n){let K0=L[n];if(K0===void 0)K0=new T7,L[n]=K0;return K0.getTargetRaySpace()},this.getControllerGrip=function(n){let K0=L[n];if(K0===void 0)K0=new T7,L[n]=K0;return K0.getGripSpace()},this.getHand=function(n){let K0=L[n];if(K0===void 0)K0=new T7,L[n]=K0;return K0.getHandSpace()};function m(n){let K0=_.indexOf(n.inputSource);if(K0===-1)return;let X0=L[K0];if(X0!==void 0)X0.update(n.inputSource,n.frame,H||W),X0.dispatchEvent({type:n.type,data:n.inputSource})}function o(){Z.removeEventListener("select",m),Z.removeEventListener("selectstart",m),Z.removeEventListener("selectend",m),Z.removeEventListener("squeeze",m),Z.removeEventListener("squeezestart",m),Z.removeEventListener("squeezeend",m),Z.removeEventListener("end",o),Z.removeEventListener("inputsourceschange",p);for(let n=0;n<L.length;n++){let K0=_[n];if(K0===null)continue;_[n]=null,L[n].disconnect(K0)}u=null,w=null,I.reset();for(let n in F)delete F[n];if(J.setRenderTarget(C),G=null,E=null,N=null,Z=null,A=null,n0.stop(),$.isPresenting=!1,J.setPixelRatio(z),J.setSize(P.width,P.height,!1),O!==null){let n=O.camera;n.fov=O.fov,n.zoom=O.zoom,n.updateProjectionMatrix(),O=null}$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(n){if(K=n,$.isPresenting===!0)m0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(n){if(X=n,$.isPresenting===!0)m0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return H||W},this.setReferenceSpace=function(n){H=n},this.getBaseLayer=function(){return E!==null?E:G},this.getBinding=function(){if(N===null&&M)N=new XRWebGLBinding(Z,Q);return N},this.getFrame=function(){return D},this.getSession=function(){return Z},this.setSession=async function(n){if(Z=n,Z!==null){if(C=J.getRenderTarget(),Z.addEventListener("select",m),Z.addEventListener("selectstart",m),Z.addEventListener("selectend",m),Z.addEventListener("squeeze",m),Z.addEventListener("squeezestart",m),Z.addEventListener("squeezeend",m),Z.addEventListener("end",o),Z.addEventListener("inputsourceschange",p),q.xrCompatible!==!0)await Q.makeXRCompatible();if(z=J.getPixelRatio(),J.getSize(P),!(M&&("createProjectionLayer"in XRWebGLBinding.prototype))){let X0={antialias:q.antialias,alpha:!0,depth:q.depth,stencil:q.stencil,framebufferScaleFactor:K};G=new XRWebGLLayer(Z,Q,X0),Z.updateRenderState({baseLayer:G}),J.setPixelRatio(1),J.setSize(G.framebufferWidth,G.framebufferHeight,!1),A=new IJ(G.framebufferWidth,G.framebufferHeight,{format:R8,type:U8,colorSpace:J.outputColorSpace,stencilBuffer:q.stencil,resolveDepthBuffer:G.ignoreDepthValues===!1,resolveStencilBuffer:G.ignoreDepthValues===!1,storeMultisampledDepthBuffer:G.ignoreDepthValues===!1,storeMultisampledStencilBuffer:G.ignoreDepthValues===!1})}else{let X0=null,j0=null,x0=null;if(q.depth)x0=q.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,X0=q.stencil?q9:E9,j0=q.stencil?o9:s8;let B0={colorFormat:Q.RGBA8,depthFormat:x0,scaleFactor:K};N=this.getBinding(),E=N.createProjectionLayer(B0),Z.updateRenderState({layers:[E]}),J.setPixelRatio(1),J.setSize(E.textureWidth,E.textureHeight,!1),A=new IJ(E.textureWidth,E.textureHeight,{format:R8,type:U8,depthTexture:new v8(E.textureWidth,E.textureHeight,j0,void 0,void 0,void 0,void 0,void 0,void 0,X0),stencilBuffer:q.stencil,colorSpace:J.outputColorSpace,samples:q.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1,storeMultisampledDepthBuffer:E.ignoreDepthValues===!1,storeMultisampledStencilBuffer:E.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(Y),H=null,W=await Z.requestReferenceSpace(X),n0.setContext(Z),n0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return I.getDepthTexture()};function p(n){for(let K0=0;K0<n.removed.length;K0++){let X0=n.removed[K0],j0=_.indexOf(X0);if(j0>=0)_[j0]=null,L[j0].disconnect(X0)}for(let K0=0;K0<n.added.length;K0++){let X0=n.added[K0],j0=_.indexOf(X0);if(j0===-1){for(let B0=0;B0<L.length;B0++)if(B0>=_.length){_.push(X0),j0=B0;break}else if(_[B0]===null){_[B0]=X0,j0=B0;break}if(j0===-1)break}let x0=L[j0];if(x0)x0.connect(X0)}}let W0=new j,c=new j;function r(n,K0,X0){W0.setFromMatrixPosition(K0.matrixWorld),c.setFromMatrixPosition(X0.matrixWorld);let j0=W0.distanceTo(c),x0=K0.projectionMatrix.elements,B0=X0.projectionMatrix.elements,s0=x0[14]/(x0[10]-1),t=x0[14]/(x0[10]+1),$0=(x0[9]+1)/x0[5],Y0=(x0[9]-1)/x0[5],G0=(x0[8]-1)/x0[0],O0=(B0[8]+1)/B0[0],z0=s0*G0,v0=s0*O0,h0=j0/(-G0+O0),d0=h0*-G0;if(K0.matrixWorld.decompose(n.position,n.quaternion,n.scale),n.translateX(d0),n.translateZ(h0),n.matrixWorld.compose(n.position,n.quaternion,n.scale),n.matrixWorldInverse.copy(n.matrixWorld).invert(),x0[10]===-1)n.projectionMatrix.copy(K0.projectionMatrix),n.projectionMatrixInverse.copy(K0.projectionMatrixInverse);else{let T=s0+h0,XJ=t+h0,i0=z0-d0,o0=v0+(j0-d0),B=$0*t/XJ*T,R=Y0*t/XJ*T;n.projectionMatrix.makePerspective(i0,o0,B,R,T,XJ),n.projectionMatrixInverse.copy(n.projectionMatrix).invert()}}function Q0(n,K0){if(K0===null)n.matrixWorld.copy(n.matrix);else n.matrixWorld.multiplyMatrices(K0.matrixWorld,n.matrix);n.matrixWorldInverse.copy(n.matrixWorld).invert()}this.updateCamera=function(n){if(Z===null)return;let{near:K0,far:X0}=n;if(I.texture!==null){if(I.depthNear>0)K0=I.depthNear;if(I.depthFar>0)X0=I.depthFar}if(b.near=h.near=V.near=K0,b.far=h.far=V.far=X0,u!==b.near||w!==b.far)Z.updateRenderState({depthNear:b.near,depthFar:b.far}),u=b.near,w=b.far;b.layers.mask=n.layers.mask|6,V.layers.mask=b.layers.mask&-5,h.layers.mask=b.layers.mask&-3;let j0=n.parent,x0=b.cameras;Q0(b,j0);for(let B0=0;B0<x0.length;B0++)Q0(x0[B0],j0);if(x0.length===2)r(b,V,h);else b.projectionMatrix.copy(V.projectionMatrix);if(O===null&&n.isPerspectiveCamera)O={camera:n,fov:n.fov,zoom:n.zoom};T0(n,b,j0)};function T0(n,K0,X0){if(X0===null)n.matrix.copy(K0.matrixWorld);else n.matrix.copy(X0.matrixWorld),n.matrix.invert(),n.matrix.multiply(K0.matrixWorld);if(n.matrix.decompose(n.position,n.quaternion,n.scale),n.updateMatrixWorld(!0),n.projectionMatrix.copy(K0.projectionMatrix),n.projectionMatrixInverse.copy(K0.projectionMatrixInverse),n.isPerspectiveCamera)n.fov=D7*2*Math.atan(1/n.projectionMatrix.elements[5]),n.zoom=1}this.getCamera=function(){return b},this.getFoveation=function(){if(E===null&&G===null)return;return Y},this.setFoveation=function(n){if(Y=n,E!==null)E.fixedFoveation=n;if(G!==null&&G.fixedFoveation!==void 0)G.fixedFoveation=n},this.hasDepthSensing=function(){return I.texture!==null},this.getDepthSensingMesh=function(){return I.getMesh(b)},this.getCameraTexture=function(n){return F[n]};let S0=null;function WJ(n,K0){if(U=K0.getViewerPose(H||W),D=K0,U!==null){let X0=U.views;if(G!==null)J.setRenderTargetFramebuffer(A,G.framebuffer),J.setRenderTarget(A);let j0=!1;if(X0.length!==b.cameras.length)b.cameras.length=0,j0=!0;for(let t=0;t<X0.length;t++){let $0=X0[t],Y0=null;if(G!==null)Y0=G.getViewport($0);else{let O0=N.getViewSubImage(E,$0);if(Y0=O0.viewport,t===0)J.setRenderTargetTextures(A,O0.colorTexture,O0.depthStencilTexture),J.setRenderTarget(A)}let G0=y[t];if(G0===void 0)G0=new vJ,G0.layers.enable(t),G0.viewport=new LJ,y[t]=G0;if(G0.matrix.fromArray($0.transform.matrix),G0.matrix.decompose(G0.position,G0.quaternion,G0.scale),G0.projectionMatrix.fromArray($0.projectionMatrix),G0.projectionMatrixInverse.copy(G0.projectionMatrix).invert(),G0.viewport.set(Y0.x,Y0.y,Y0.width,Y0.height),t===0)b.matrix.copy(G0.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale);if(j0===!0)b.cameras.push(G0)}let x0=Z.enabledFeatures;if(x0&&x0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&M){N=$.getBinding();let t=N.getDepthInformation(X0[0]);if(t&&t.isValid&&t.texture)I.init(t,Z.renderState)}if(x0&&x0.includes("camera-access")&&M){J.state.unbindTexture(),N=$.getBinding();for(let t=0;t<X0.length;t++){let $0=X0[t].camera;if($0){let Y0=F[$0];if(!Y0)Y0=new x6,F[$0]=Y0;let G0=N.getCameraImage($0);Y0.sourceTexture=G0}}}}for(let X0=0;X0<L.length;X0++){let j0=_[X0],x0=L[X0];if(j0!==null&&x0!==void 0)x0.update(j0,K0,H||W)}if(S0)S0(n,K0);if(K0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:K0});D=null}let n0=new vW;n0.setAnimationLoop(WJ),this.setAnimationLoop=function(n){S0=n},this.dispose=function(){}}}var Z5=new MJ,sW=new c0;sW.set(-1,0,0,0,1,0,0,0,1);function K5(J,Q){function $(F,q){if(F.matrixAutoUpdate===!0)F.updateMatrix();q.value.copy(F.matrix)}function Z(F,q){if(q.color.getRGB(F.fogColor.value,h$(J)),q.isFog)F.fogNear.value=q.near,F.fogFar.value=q.far;else if(q.isFogExp2)F.fogDensity.value=q.density}function K(F,q,C,A,L){if(q.isNodeMaterial)q.uniformsNeedUpdate=!1;else if(q.isMeshBasicMaterial)W(F,q);else if(q.isMeshLambertMaterial){if(W(F,q),q.envMap)F.envMapIntensity.value=q.envMapIntensity}else if(q.isMeshToonMaterial)W(F,q),E(F,q);else if(q.isMeshPhongMaterial){if(W(F,q),N(F,q),q.envMap)F.envMapIntensity.value=q.envMapIntensity}else if(q.isMeshStandardMaterial){if(W(F,q),G(F,q),q.isMeshPhysicalMaterial)D(F,q,L)}else if(q.isMeshMatcapMaterial)W(F,q),M(F,q);else if(q.isMeshDepthMaterial)W(F,q);else if(q.isMeshDistanceMaterial)W(F,q),I(F,q);else if(q.isMeshNormalMaterial)W(F,q);else if(q.isLineBasicMaterial){if(X(F,q),q.isLineDashedMaterial)Y(F,q)}else if(q.isPointsMaterial)H(F,q,C,A);else if(q.isSpriteMaterial)U(F,q);else if(q.isShadowMaterial)F.color.value.copy(q.color),F.opacity.value=q.opacity;else if(q.isShaderMaterial)q.uniformsNeedUpdate=!1}function W(F,q){if(F.opacity.value=q.opacity,q.color)F.diffuse.value.copy(q.color);if(q.emissive)F.emissive.value.copy(q.emissive).multiplyScalar(q.emissiveIntensity);if(q.map)F.map.value=q.map,$(q.map,F.mapTransform);if(q.alphaMap)F.alphaMap.value=q.alphaMap,$(q.alphaMap,F.alphaMapTransform);if(q.bumpMap){if(F.bumpMap.value=q.bumpMap,$(q.bumpMap,F.bumpMapTransform),F.bumpScale.value=q.bumpScale,q.side===hJ)F.bumpScale.value*=-1}if(q.normalMap){if(F.normalMap.value=q.normalMap,$(q.normalMap,F.normalMapTransform),F.normalScale.value.copy(q.normalScale),q.side===hJ)F.normalScale.value.negate()}if(q.displacementMap)F.displacementMap.value=q.displacementMap,$(q.displacementMap,F.displacementMapTransform),F.displacementScale.value=q.displacementScale,F.displacementBias.value=q.displacementBias;if(q.emissiveMap)F.emissiveMap.value=q.emissiveMap,$(q.emissiveMap,F.emissiveMapTransform);if(q.specularMap)F.specularMap.value=q.specularMap,$(q.specularMap,F.specularMapTransform);if(q.alphaTest>0)F.alphaTest.value=q.alphaTest;let C=Q.get(q),A=C.envMap,L=C.envMapRotation;if(A){if(F.envMap.value=A,F.envMapRotation.value.setFromMatrix4(Z5.makeRotationFromEuler(L)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1)F.envMapRotation.value.premultiply(sW);F.reflectivity.value=q.reflectivity,F.ior.value=q.ior,F.refractionRatio.value=q.refractionRatio}if(q.lightMap)F.lightMap.value=q.lightMap,F.lightMapIntensity.value=q.lightMapIntensity,$(q.lightMap,F.lightMapTransform);if(q.aoMap)F.aoMap.value=q.aoMap,F.aoMapIntensity.value=q.aoMapIntensity,$(q.aoMap,F.aoMapTransform)}function X(F,q){if(F.diffuse.value.copy(q.color),F.opacity.value=q.opacity,q.map)F.map.value=q.map,$(q.map,F.mapTransform)}function Y(F,q){F.dashSize.value=q.dashSize,F.totalSize.value=q.dashSize+q.gapSize,F.scale.value=q.scale}function H(F,q,C,A){if(F.diffuse.value.copy(q.color),F.opacity.value=q.opacity,F.size.value=q.size*C,F.scale.value=A*0.5,q.map)F.map.value=q.map,$(q.map,F.uvTransform);if(q.alphaMap)F.alphaMap.value=q.alphaMap,$(q.alphaMap,F.alphaMapTransform);if(q.alphaTest>0)F.alphaTest.value=q.alphaTest}function U(F,q){if(F.diffuse.value.copy(q.color),F.opacity.value=q.opacity,F.rotation.value=q.rotation,q.map)F.map.value=q.map,$(q.map,F.mapTransform);if(q.alphaMap)F.alphaMap.value=q.alphaMap,$(q.alphaMap,F.alphaMapTransform);if(q.alphaTest>0)F.alphaTest.value=q.alphaTest}function N(F,q){F.specular.value.copy(q.specular),F.shininess.value=Math.max(q.shininess,0.0001)}function E(F,q){if(q.gradientMap)F.gradientMap.value=q.gradientMap}function G(F,q){if(F.metalness.value=q.metalness,q.metalnessMap)F.metalnessMap.value=q.metalnessMap,$(q.metalnessMap,F.metalnessMapTransform);if(F.roughness.value=q.roughness,q.roughnessMap)F.roughnessMap.value=q.roughnessMap,$(q.roughnessMap,F.roughnessMapTransform);if(q.envMap)F.envMapIntensity.value=q.envMapIntensity}function D(F,q,C){if(F.ior.value=q.ior,q.sheen>0){if(F.sheenColor.value.copy(q.sheenColor).multiplyScalar(q.sheen),F.sheenRoughness.value=q.sheenRoughness,q.sheenColorMap)F.sheenColorMap.value=q.sheenColorMap,$(q.sheenColorMap,F.sheenColorMapTransform);if(q.sheenRoughnessMap)F.sheenRoughnessMap.value=q.sheenRoughnessMap,$(q.sheenRoughnessMap,F.sheenRoughnessMapTransform)}if(q.clearcoat>0){if(F.clearcoat.value=q.clearcoat,F.clearcoatRoughness.value=q.clearcoatRoughness,q.clearcoatMap)F.clearcoatMap.value=q.clearcoatMap,$(q.clearcoatMap,F.clearcoatMapTransform);if(q.clearcoatRoughnessMap)F.clearcoatRoughnessMap.value=q.clearcoatRoughnessMap,$(q.clearcoatRoughnessMap,F.clearcoatRoughnessMapTransform);if(q.clearcoatNormalMap){if(F.clearcoatNormalMap.value=q.clearcoatNormalMap,$(q.clearcoatNormalMap,F.clearcoatNormalMapTransform),F.clearcoatNormalScale.value.copy(q.clearcoatNormalScale),q.side===hJ)F.clearcoatNormalScale.value.negate()}}if(q.dispersion>0)F.dispersion.value=q.dispersion;if(q.retroreflectivity>0)F.retroreflectivity.value=q.retroreflectivity;if(q.iridescence>0){if(F.iridescence.value=q.iridescence,F.iridescenceIOR.value=q.iridescenceIOR,F.iridescenceThicknessMinimum.value=q.iridescenceThicknessRange[0],F.iridescenceThicknessMaximum.value=q.iridescenceThicknessRange[1],q.iridescenceMap)F.iridescenceMap.value=q.iridescenceMap,$(q.iridescenceMap,F.iridescenceMapTransform);if(q.iridescenceThicknessMap)F.iridescenceThicknessMap.value=q.iridescenceThicknessMap,$(q.iridescenceThicknessMap,F.iridescenceThicknessMapTransform)}if(q.transmission>0){if(F.transmission.value=q.transmission,F.transmissionSamplerMap.value=C.texture,F.transmissionSamplerSize.value.set(C.width,C.height),q.transmissionMap)F.transmissionMap.value=q.transmissionMap,$(q.transmissionMap,F.transmissionMapTransform);if(F.thickness.value=q.thickness,q.thicknessMap)F.thicknessMap.value=q.thicknessMap,$(q.thicknessMap,F.thicknessMapTransform);F.attenuationDistance.value=q.attenuationDistance,F.attenuationColor.value.copy(q.attenuationColor)}if(q.anisotropy>0){if(F.anisotropyVector.value.set(q.anisotropy*Math.cos(q.anisotropyRotation),q.anisotropy*Math.sin(q.anisotropyRotation)),q.anisotropyMap)F.anisotropyMap.value=q.anisotropyMap,$(q.anisotropyMap,F.anisotropyMapTransform)}if(F.specularIntensity.value=q.specularIntensity,F.specularColor.value.copy(q.specularColor),q.specularColorMap)F.specularColorMap.value=q.specularColorMap,$(q.specularColorMap,F.specularColorMapTransform);if(q.specularIntensityMap)F.specularIntensityMap.value=q.specularIntensityMap,$(q.specularIntensityMap,F.specularIntensityMapTransform)}function M(F,q){if(q.matcap)F.matcap.value=q.matcap}function I(F,q){let C=Q.get(q).light;F.referencePosition.value.setFromMatrixPosition(C.matrixWorld),F.nearDistance.value=C.shadow.camera.near,F.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:K}}function W5(J,Q,$,Z){let K={},W={},X=[],Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function H(L,_){let P=_.program;Z.uniformBlockBinding(L,P)}function U(L,_){let P=K[L.id];if(P===void 0)F(L),P=N(L),K[L.id]=P,L.addEventListener("dispose",C);let z=_.program;Z.updateUBOMapping(L,z);let O=Q.render.frame;if(W[L.id]!==O)G(L),W[L.id]=O}function N(L){let _=E();L.__bindingPointIndex=_;let P=J.createBuffer(),z=L.__size,O=L.usage;return J.bindBuffer(J.UNIFORM_BUFFER,P),J.bufferData(J.UNIFORM_BUFFER,z,O),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,_,P),P}function E(){for(let L=0;L<Y;L++)if(X.indexOf(L)===-1)return X.push(L),L;return l0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function G(L){let _=K[L.id],P=L.uniforms,z=L.__cache;J.bindBuffer(J.UNIFORM_BUFFER,_);for(let O=0,V=P.length;O<V;O++){let h=P[O];if(Array.isArray(h))for(let y=0,b=h.length;y<b;y++)D(h[y],O,y,z);else D(h,O,0,z)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function D(L,_,P,z){if(I(L,_,P,z)===!0){let{__offset:O,value:V}=L;if(Array.isArray(V)){let h=0;for(let y=0;y<V.length;y++){let b=V[y],u=q(b);if(M(b,L.__data,h),typeof b!=="number"&&typeof b!=="boolean"&&!b.isMatrix3&&!ArrayBuffer.isView(b))h+=u.storage/Float32Array.BYTES_PER_ELEMENT}}else M(V,L.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,O,L.__data)}}function M(L,_,P){if(typeof L==="number"||typeof L==="boolean")_[0]=L;else if(L.isMatrix3)_[0]=L.elements[0],_[1]=L.elements[1],_[2]=L.elements[2],_[3]=0,_[4]=L.elements[3],_[5]=L.elements[4],_[6]=L.elements[5],_[7]=0,_[8]=L.elements[6],_[9]=L.elements[7],_[10]=L.elements[8],_[11]=0;else if(ArrayBuffer.isView(L))_.set(new L.constructor(L.buffer,L.byteOffset,_.length));else L.toArray(_,P)}function I(L,_,P,z){let O=L.value,V=_+"_"+P;if(z[V]===void 0){if(typeof O==="number"||typeof O==="boolean")z[V]=O;else if(ArrayBuffer.isView(O))z[V]=O.slice();else z[V]=O.clone();return!0}else{let h=z[V];if(typeof O==="number"||typeof O==="boolean"){if(h!==O)return z[V]=O,!0}else if(ArrayBuffer.isView(O))return!0;else if(h.equals(O)===!1)return h.copy(O),!0}return!1}function F(L){let _=L.uniforms,P=0,z=16;for(let V=0,h=_.length;V<h;V++){let y=Array.isArray(_[V])?_[V]:[_[V]];for(let b=0,u=y.length;b<u;b++){let w=y[b],m=Array.isArray(w.value)?w.value:[w.value];for(let o=0,p=m.length;o<p;o++){let W0=m[o],c=q(W0),r=P%z,Q0=r%c.boundary,T0=r+Q0;if(P+=Q0,T0!==0&&z-T0<c.storage)P+=z-T0;w.__data=new Float32Array(c.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=P,P+=c.storage}}}let O=P%z;if(O>0)P+=z-O;return L.__size=P,L.__cache={},this}function q(L){let _={boundary:0,storage:0};if(typeof L==="number"||typeof L==="boolean")_.boundary=4,_.storage=4;else if(L.isVector2)_.boundary=8,_.storage=8;else if(L.isVector3||L.isColor)_.boundary=16,_.storage=12;else if(L.isVector4)_.boundary=16,_.storage=16;else if(L.isMatrix3)_.boundary=48,_.storage=48;else if(L.isMatrix4)_.boundary=64,_.storage=64;else if(L.isTexture)m0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(L))_.boundary=16,_.storage=L.byteLength;else m0("WebGLRenderer: Unsupported uniform value type.",L);return _}function C(L){let _=L.target;_.removeEventListener("dispose",C);let P=X.indexOf(_.__bindingPointIndex);X.splice(P,1),J.deleteBuffer(K[_.id]),delete K[_.id],delete W[_.id]}function A(){for(let L in K)J.deleteBuffer(K[L]);X=[],K={},W={}}return{bind:H,update:U,dispose:A}}var X5=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),L8=null;function Y5(){if(L8===null)L8=new P$(X5,16,16,D9,PJ),L8.name="DFG_LUT",L8.minFilter=iJ,L8.magFilter=iJ,L8.wrapS=G9,L8.wrapT=G9,L8.generateMipmaps=!1,L8.needsUpdate=!0;return L8}class EZ{constructor(J={}){let{canvas:Q=tK(),context:$=null,depth:Z=!0,stencil:K=!1,alpha:W=!1,antialias:X=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:H=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:N=!1,reversedDepthBuffer:E=!1,outputBufferType:G=U8}=J;this.isWebGLRenderer=!0;let D;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");D=$.getContextAttributes().alpha}else D=W;let M=G,I=new Set([mQ,pQ,gQ]),F=new Set([U8,s8,P7,o9,hQ,xQ]),q=new Uint32Array(4),C=new Int32Array(4),A=new j,L=null,_=null,P=[],z=[],O=null;this.domElement=Q,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=H8,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let V=this,h=!1,y=null,b=null,u=null,w=null;this._outputColorSpace=S8;let m=0,o=0,p=null,W0=-1,c=null,r=new LJ,Q0=new LJ,T0=null,S0=new b0(0),WJ=0,n0=Q.width,n=Q.height,K0=1,X0=null,j0=null,x0=new LJ(0,0,n0,n),B0=new LJ(0,0,n0,n),s0=!1,t=new v7,$0=!1,Y0=!1,G0=new MJ,O0=new j,z0=new LJ,v0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},h0=!1;function d0(){return p===null?K0:1}let T=$;function XJ(k,v){return Q.getContext(k,v)}let i0,o0,B,R,S,l,e,H0,N0,s,a,M0,C0,E0,U0,A0,f0,e0,f,q0,i,D0,V0;try{let k={alpha:!0,depth:Z,stencil:K,antialias:X,premultipliedAlpha:Y,preserveDrawingBuffer:H,powerPreference:U,failIfMajorPerformanceCaveat:N};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${$K}`);if(Q.addEventListener("webglcontextlost",u0,!1),Q.addEventListener("webglcontextrestored",GJ,!1),Q.addEventListener("webglcontextcreationerror",YJ,!1),T===null){if(T=XJ("webgl2",k),T===null)if(XJ("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}J0()}catch(k){throw Q.removeEventListener("webglcontextlost",u0,!1),Q.removeEventListener("webglcontextrestored",GJ,!1),Q.removeEventListener("webglcontextcreationerror",YJ,!1),l0("WebGLRenderer: "+k.message),k}function J0(){if(i0=new DG(T),i0.init(),i=new J5(T,i0),o0=new KG(T,i0,J,i),B=new tN(T,i0),o0.reversedDepthBuffer&&E)B.buffers.depth.setReversed(!0);b=T.createFramebuffer(),u=T.createFramebuffer(),w=T.createFramebuffer(),R=new RG(T),S=new xN,l=new eN(T,i0,B,S,o0,i,R),e=new qG(V),H0=new LY(T),D0=new $G(T,H0),N0=new FG(T,H0,R,D0),s=new LG(T,N0,H0,D0,R),e0=new MG(T,o0,l),U0=new WG(S),a=new hN(V,e,i0,o0,D0,U0),M0=new K5(V,S),C0=new pN,E0=new nN(i0),f0=new QG(V,e,B,s,D,Y),A0=new rN(V,s,o0),V0=new W5(T,R,o0,B),f=new ZG(T,i0,R),q0=new OG(T,i0,R),R.programs=a.programs,V.capabilities=o0,V.extensions=i0,V.properties=S,V.renderLists=C0,V.shadowMap=A0,V.state=B,V.info=R}if(M!==U8)O=new VG(M,Q.width,Q.height,X,Z,K);let F0=new nW(V,T);this.xr=F0,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let k=i0.get("WEBGL_lose_context");if(k)k.loseContext()},this.forceContextRestore=function(){let k=i0.get("WEBGL_lose_context");if(k)k.restoreContext()},this.getPixelRatio=function(){return K0},this.setPixelRatio=function(k){if(k===void 0)return;K0=k,this.setSize(n0,n,!1)},this.getSize=function(k){return k.set(n0,n)},this.setSize=function(k,v,d=!0){if(F0.isPresenting){m0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(n0=k,n=v,Q.width=Math.floor(k*K0),Q.height=Math.floor(v*K0),d===!0)Q.style.width=k+"px",Q.style.height=v+"px";if(O!==null)O.setSize(Q.width,Q.height);this.setViewport(0,0,k,v)},this.getDrawingBufferSize=function(k){return k.set(n0*K0,n*K0).floor()},this.setDrawingBufferSize=function(k,v,d){n0=k,n=v,K0=d,Q.width=Math.floor(k*d),Q.height=Math.floor(v*d),this.setViewport(0,0,k,v)},this.setEffects=function(k){if(M===U8){l0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(k){for(let v=0;v<k.length;v++)if(k[v].isOutputPass===!0){m0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(k||[])},this.getCurrentViewport=function(k){return k.copy(r)},this.getViewport=function(k){return k.copy(x0)},this.setViewport=function(k,v,d,x){if(k.isVector4)x0.set(k.x,k.y,k.z,k.w);else x0.set(k,v,d,x);B.viewport(r.copy(x0).multiplyScalar(K0).round())},this.getScissor=function(k){return k.copy(B0)},this.setScissor=function(k,v,d,x){if(k.isVector4)B0.set(k.x,k.y,k.z,k.w);else B0.set(k,v,d,x);B.scissor(Q0.copy(B0).multiplyScalar(K0).round())},this.getScissorTest=function(){return s0},this.setScissorTest=function(k){B.setScissorTest(s0=k)},this.setOpaqueSort=function(k){X0=k},this.setTransparentSort=function(k){j0=k},this.getClearColor=function(k){return k.copy(f0.getClearColor())},this.setClearColor=function(){f0.setClearColor(...arguments)},this.getClearAlpha=function(){return f0.getClearAlpha()},this.setClearAlpha=function(){f0.setClearAlpha(...arguments)},this.clear=function(k=!0,v=!0,d=!0){let x=0;if(k){let g=!1;if(p!==null){let k0=p.texture.format;g=I.has(k0)}if(g){let k0=p.texture.type,_0=F.has(k0),L0=f0.getClearColor(),P0=f0.getClearAlpha(),y0=L0.r,r0=L0.g,$J=L0.b;if(_0)q[0]=y0,q[1]=r0,q[2]=$J,q[3]=P0,T.clearBufferuiv(T.COLOR,0,q);else C[0]=y0,C[1]=r0,C[2]=$J,C[3]=P0,T.clearBufferiv(T.COLOR,0,C)}else x|=T.COLOR_BUFFER_BIT}if(v)x|=T.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(d)x|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(x!==0)T.clear(x)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(k){k.setRenderer(this),y=k},this.dispose=function(){Q.removeEventListener("webglcontextlost",u0,!1),Q.removeEventListener("webglcontextrestored",GJ,!1),Q.removeEventListener("webglcontextcreationerror",YJ,!1),f0.dispose(),C0.dispose(),E0.dispose(),S.dispose(),e.dispose(),s.dispose(),D0.dispose(),V0.dispose(),a.dispose(),F0.dispose(),F0.removeEventListener("sessionstart",e7),F0.removeEventListener("sessionend",a8),N8.stop()};function u0(k){k.preventDefault(),I$("WebGLRenderer: Context Lost."),h=!0}function GJ(){I$("WebGLRenderer: Context Restored."),h=!1;let k=R.autoReset,v=A0.enabled,d=A0.autoUpdate,x=A0.needsUpdate,g=A0.type;J0(),R.autoReset=k,A0.enabled=v,A0.autoUpdate=d,A0.needsUpdate=x,A0.type=g}function YJ(k){l0("WebGLRenderer: A WebGL context could not be created. Reason: ",k.statusMessage)}function xJ(k){let v=k.target;v.removeEventListener("dispose",xJ),nJ(v)}function nJ(k){A9(k),S.remove(k)}function A9(k){let v=S.get(k).programs;if(v!==void 0){if(v.forEach(function(d){a.releaseProgram(d)}),k.isShaderMaterial)a.releaseShaderCache(k)}}this.renderBufferDirect=function(k,v,d,x,g,k0){if(v===null)v=v0;let _0=g.isMesh&&g.matrixWorld.determinantAffine()<0,L0=r8(k,v,d,x,g);B.setMaterial(x,_0);let P0=d.index,y0=1;if(x.wireframe===!0){if(P0=N0.getWireframeAttribute(d),P0===void 0)return;y0=2}let r0=d.drawRange,$J=d.attributes.position,w0=r0.start*y0,UJ=(r0.start+r0.count)*y0;if(k0!==null)w0=Math.max(w0,k0.start*y0),UJ=Math.min(UJ,(k0.start+k0.count)*y0);if(P0!==null)w0=Math.max(w0,0),UJ=Math.min(UJ,P0.count);else if($J!==void 0&&$J!==null)w0=Math.max(w0,0),UJ=Math.min(UJ,$J.count);let CJ=UJ-w0;if(CJ<0||CJ===1/0)return;D0.setup(g,x,L0,d,P0);let RJ,FJ=f;if(P0!==null)RJ=H0.get(P0),FJ=q0,FJ.setIndex(RJ);if(g.isMesh)if(x.wireframe===!0)B.setLineWidth(x.wireframeLinewidth*d0()),FJ.setMode(T.LINES);else FJ.setMode(T.TRIANGLES);else if(g.isLine){let pJ=x.linewidth;if(pJ===void 0)pJ=1;if(B.setLineWidth(pJ*d0()),g.isLineSegments)FJ.setMode(T.LINES);else if(g.isLineLoop)FJ.setMode(T.LINE_LOOP);else FJ.setMode(T.LINE_STRIP)}else if(g.isPoints)FJ.setMode(T.POINTS);else if(g.isSprite)FJ.setMode(T.TRIANGLES);if(g.isBatchedMesh)if(!i0.get("WEBGL_multi_draw")){let{_multiDrawStarts:pJ,_multiDrawCounts:I0,_multiDrawCount:uJ}=g,KJ=P0?H0.get(P0).bytesPerElement:1,tJ=S.get(x).currentProgram.getUniforms();for(let q8=0;q8<uJ;q8++)tJ.setValue(T,"_gl_DrawID",q8),FJ.render(pJ[q8]/KJ,I0[q8])}else FJ.renderMultiDraw(g._multiDrawStarts,g._multiDrawCounts,g._multiDrawCount);else if(g.isInstancedMesh)FJ.renderInstances(w0,CJ,g.count);else if(d.isInstancedBufferGeometry){let pJ=d._maxInstanceCount!==void 0?d._maxInstanceCount:1/0,I0=Math.min(d.instanceCount,pJ);FJ.renderInstances(w0,CJ,I0)}else FJ.render(w0,CJ)};function C9(k,v,d,x){if(y!==null&&k.isNodeMaterial)y.setObject(x,k);if($0===!0)U0.setState(k,d,!1);if(k.transparent===!0&&k.side===cJ&&k.forceSinglePass===!1)k.side=hJ,k.needsUpdate=!0,DJ(k,v,x),k.side=n9,k.needsUpdate=!0,DJ(k,v,x),k.side=cJ;else DJ(k,v,x)}this.compile=function(k,v,d=null){if(d===null)d=k;if(y!==null)y.renderStart(k,v,d);if(_=E0.get(d),_.init(v),z.push(_),d.traverseVisible(function(g){if(g.isLight&&g.layers.test(v.layers)){if(_.pushLight(g),g.castShadow)_.pushShadow(g)}}),k!==d)k.traverseVisible(function(g){if(g.isLight&&g.layers.test(v.layers)){if(_.pushLight(g),g.castShadow)_.pushShadow(g)}});if(_.setupLights(),y!==null)y.updateLights(_.state.lightsArray);if(Y0=this.localClippingEnabled,$0=U0.init(this.clippingPlanes,Y0),$0===!0)U0.setGlobalState(this.clippingPlanes,v);if(y!==null)A0.render(_.state.shadowsArray,d,v);let x=new Set;if(k.traverse(function(g){if(!(g.isMesh||g.isPoints||g.isLine||g.isSprite))return;let k0=g.material;if(k0)if(Array.isArray(k0))for(let _0=0;_0<k0.length;_0++){let L0=k0[_0];C9(L0,d,v,g),x.add(L0)}else C9(k0,d,v,g),x.add(k0)}),_=z.pop(),y!==null)y.renderEnd();return x},this.compileAsync=function(k,v,d=null){let x=this.compile(k,v,d);return new Promise((g)=>{function k0(){if(x.forEach(function(_0){let P0=S.get(_0).currentProgram;if(P0===void 0||P0.isReady())x.delete(_0)}),x.size===0){g(k);return}setTimeout(k0,10)}if(i0.get("KHR_parallel_shader_compile")!==null)k0();else setTimeout(k0,10)})};let h8=null;function Z7(k){if(h8)h8(k)}function e7(){N8.stop()}function a8(){N8.start()}let N8=new vW;if(N8.setAnimationLoop(Z7),typeof self<"u")N8.setContext(self);this.setAnimationLoop=function(k){h8=k,F0.setAnimationLoop(k),k===null?N8.stop():N8.start()},F0.addEventListener("sessionstart",e7),F0.addEventListener("sessionend",a8),this.render=function(k,v){if(v!==void 0&&v.isCamera!==!0){l0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;if(y!==null)y.renderStart(k,v);let d=F0.enabled===!0&&F0.isPresenting===!0,x=O!==null&&(p===null||d)&&O.begin(V,p);if(k.matrixWorldAutoUpdate===!0)k.updateMatrixWorld();if(v.parent===null&&v.matrixWorldAutoUpdate===!0)v.updateMatrixWorld();if(F0.enabled===!0&&F0.isPresenting===!0&&(O===null||O.isCompositing()===!1)){if(F0.cameraAutoUpdate===!0)F0.updateCamera(v);v=F0.getCamera()}if(k.isScene===!0)k.onBeforeRender(V,k,v,p);if(_=E0.get(k,z.length),_.init(v),_.state.textureUnits=l.getTextureUnits(),z.push(_),G0.multiplyMatrices(v.projectionMatrix,v.matrixWorldInverse),t.setFromProjectionMatrix(G0,B$,v.reversedDepth),Y0=this.localClippingEnabled,$0=U0.init(this.clippingPlanes,Y0),L=C0.get(k,P.length),L.init(),P.push(L),F0.enabled===!0&&F0.isPresenting===!0){let _0=V.xr.getDepthSensingMesh();if(_0!==null)p0(_0,v,-1/0,V.sortObjects)}if(p0(k,v,0,V.sortObjects),L.finish(),y!==null)y.updateLights(_.state.lightsArray);if(V.sortObjects===!0)L.sort(X0,j0);if(h0=F0.enabled===!1||F0.isPresenting===!1||F0.hasDepthSensing()===!1,h0)f0.addToRenderList(L,k);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if($0===!0)U0.beginShadows();let g=_.state.shadowsArray;if(A0.render(g,k,v),$0===!0)U0.endShadows();if((x&&O.hasRenderPass())===!1){let{opaque:_0,transmissive:L0}=L;if(_.setupLights(),v.isArrayCamera){let P0=v.cameras;if(L0.length>0)for(let y0=0,r0=P0.length;y0<r0;y0++){let $J=P0[y0];g0(_0,L0,k,$J)}if(h0)f0.render(k);for(let y0=0,r0=P0.length;y0<r0;y0++){let $J=P0[y0];a0(L,k,$J,$J.viewport)}}else{if(L0.length>0)g0(_0,L0,k,v);if(h0)f0.render(k);a0(L,k,v)}}if(p!==null&&o===0)l.updateMultisampleRenderTarget(p),l.updateRenderTargetMipmap(p);if(x)O.end(V);if(k.isScene===!0)k.onAfterRender(V,k,v);if(D0.resetDefaultState(),W0=-1,c=null,z.pop(),z.length>0){if(_=z[z.length-1],l.setTextureUnits(_.state.textureUnits),$0===!0)U0.setGlobalState(V.clippingPlanes,_.state.camera)}else _=null;if(P.pop(),P.length>0)L=P[P.length-1];else L=null;if(y!==null)y.renderEnd()};function p0(k,v,d,x){if(k.visible===!1)return;if(k.layers.test(v.layers)){if(k.isGroup)d=k.renderOrder;else if(k.isLOD){if(k.autoUpdate===!0)k.update(v)}else if(k.isLightProbeGrid)_.pushLightProbeGrid(k);else if(k.isLight){if(_.pushLight(k),k.castShadow)_.pushShadow(k)}else if(k.isSprite){if(!k.frustumCulled||k.intersectsFrustum(t)){if(x)z0.setFromMatrixPosition(k.matrixWorld).applyMatrix4(G0);let _0=s.update(k),L0=k.material;if(L0.visible)L.push(k,_0,L0,d,z0.z,null,v)}}else if(k.isMesh||k.isLine||k.isPoints){if(!k.frustumCulled||k.intersectsFrustum(t)){let _0=s.update(k),L0=k.material;if(x){if(k.boundingSphere!==void 0){if(k.boundingSphere===null)k.computeBoundingSphere();z0.copy(k.boundingSphere.center)}else{if(_0.boundingSphere===null)_0.computeBoundingSphere();z0.copy(_0.boundingSphere.center)}z0.applyMatrix4(k.matrixWorld).applyMatrix4(G0)}if(Array.isArray(L0)){let P0=_0.groups;for(let y0=0,r0=P0.length;y0<r0;y0++){let $J=P0[y0],w0=L0[$J.materialIndex];if(w0&&w0.visible)L.push(k,_0,w0,d,z0.z,$J,v)}}else if(L0.visible)L.push(k,_0,L0,d,z0.z,null,v)}}}let k0=k.children;for(let _0=0,L0=k0.length;_0<L0;_0++)p0(k0[_0],v,d,x)}function a0(k,v,d,x){let{opaque:g,transmissive:k0,transparent:_0}=k;if(_.setupLightsView(d),$0===!0)U0.setGlobalState(V.clippingPlanes,d);if(x)B.viewport(r.copy(x));if(g.length>0)ZJ(g,v,d);if(k0.length>0)ZJ(k0,v,d);if(_0.length>0)ZJ(_0,v,d);B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function g0(k,v,d,x){if((d.isScene===!0?d.overrideMaterial:null)!==null)return;if(_.state.transmissionRenderTarget[x.id]===void 0){let w0=i0.has("EXT_color_buffer_half_float")||i0.has("EXT_color_buffer_float");_.state.transmissionRenderTarget[x.id]=new IJ(1,1,{generateMipmaps:!0,type:w0?PJ:U8,minFilter:N9,samples:Math.max(4,o0.samples),stencilBuffer:K,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:QJ.workingColorSpace})}let k0=_.state.transmissionRenderTarget[x.id],_0=x.viewport||r;k0.setSize(_0.z*V.transmissionResolutionScale,_0.w*V.transmissionResolutionScale);let L0=V.getRenderTarget(),P0=V.getActiveCubeFace(),y0=V.getActiveMipmapLevel();if(V.setRenderTarget(k0),V.getClearColor(S0),WJ=V.getClearAlpha(),WJ<1)V.setClearColor(16777215,0.5);if(V.clear(),h0)f0.render(d);let r0=V.toneMapping;V.toneMapping=H8;let $J=x.viewport;if(x.viewport!==void 0)x.viewport=void 0;if(_.setupLightsView(x),$0===!0)U0.setGlobalState(V.clippingPlanes,x);if(ZJ(k,d,x),l.updateMultisampleRenderTarget(k0),l.updateRenderTargetMipmap(k0),i0.has("WEBGL_multisampled_render_to_texture")===!1){let w0=!1;for(let UJ=0,CJ=v.length;UJ<CJ;UJ++){let RJ=v[UJ],{object:FJ,geometry:pJ,material:I0,group:uJ}=RJ;if(I0.side===cJ&&FJ.layers.test(x.layers)){let KJ=I0.side;I0.side=hJ,I0.needsUpdate=!0,VJ(FJ,d,x,pJ,I0,uJ),I0.side=KJ,I0.needsUpdate=!0,w0=!0}}if(w0===!0)l.updateMultisampleRenderTarget(k0),l.updateRenderTargetMipmap(k0)}if(V.setRenderTarget(L0,P0,y0),V.setClearColor(S0,WJ),$J!==void 0)x.viewport=$J;V.toneMapping=r0}function ZJ(k,v,d){let x=v.isScene===!0?v.overrideMaterial:null;for(let g=0,k0=k.length;g<k0;g++){let _0=k[g],{object:L0,geometry:P0,group:y0}=_0,r0=_0.material;if(r0.allowOverride===!0&&x!==null)r0=x;if(L0.layers.test(d.layers))VJ(L0,v,d,P0,r0,y0)}}function VJ(k,v,d,x,g,k0){if(y!==null&&g.isNodeMaterial)y.setObject(k,g);if(k.onBeforeRender(V,v,d,x,g,k0),k.modelViewMatrix.multiplyMatrices(d.matrixWorldInverse,k.matrixWorld),k.normalMatrix.getNormalMatrix(k.modelViewMatrix),g.onBeforeRender(V,v,d,x,k,k0),g.transparent===!0&&g.side===cJ&&g.forceSinglePass===!1)g.side=hJ,g.needsUpdate=!0,V.renderBufferDirect(d,v,x,g,k,k0),g.side=n9,g.needsUpdate=!0,V.renderBufferDirect(d,v,x,g,k,k0),g.side=cJ;else V.renderBufferDirect(d,v,x,g,k,k0);k.onAfterRender(V,v,d,x,g,k0)}function DJ(k,v,d){if(v.isScene!==!0)v=v0;let x=S.get(k),g=_.state.lights,k0=_.state.shadowsArray,_0=g.state.version,L0=a.getParameters(k,g.state,k0,v,d,_.state.lightProbeGridArray),P0=a.getProgramCacheKey(L0),y0=x.programs;x.environment=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?v.environment:null,x.fog=v.fog;let r0=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap;if(x.envMap=e.get(k.envMap||x.environment,r0),x.envMapRotation=x.environment!==null&&k.envMap===null?v.environmentRotation:k.envMapRotation,y0===void 0)k.addEventListener("dispose",xJ),y0=new Map,x.programs=y0;let $J=y0.get(P0);if($J!==void 0){if(x.currentProgram===$J&&x.lightsStateVersion===_0)return wJ(k,L0),$J}else{if(L0.uniforms=a.getUniforms(k),y!==null&&k.isNodeMaterial)y.build(k,d,L0);k.onBeforeCompile(L0,V),$J=a.acquireProgram(L0,P0),y0.set(P0,$J),x.uniforms=L0.uniforms}let w0=x.uniforms;if(!k.isShaderMaterial&&!k.isRawShaderMaterial||k.clipping===!0)w0.clippingPlanes=U0.uniform;if(wJ(k,L0),x.needsLights=$Q(k),x.lightsStateVersion=_0,x.needsLights)w0.ambientLightColor.value=g.state.ambient,w0.lightProbe.value=g.state.probe,w0.sunLights.value=g.state.sun,w0.sunLightShadows.value=g.state.sunShadow,w0.directionalLights.value=g.state.directional,w0.directionalLightShadows.value=g.state.directionalShadow,w0.spotLights.value=g.state.spot,w0.spotLightShadows.value=g.state.spotShadow,w0.rectAreaLights.value=g.state.rectArea,w0.ltc_1.value=g.state.rectAreaLTC1,w0.ltc_2.value=g.state.rectAreaLTC2,w0.pointLights.value=g.state.point,w0.pointLightShadows.value=g.state.pointShadow,w0.hemisphereLights.value=g.state.hemi,w0.sunShadowMatrix.value=g.state.sunShadowMatrix,w0.sunShadowCascade.value=g.state.sunShadowCascade,w0.directionalShadowMatrix.value=g.state.directionalShadowMatrix,w0.spotLightMatrix.value=g.state.spotLightMatrix,w0.spotLightMap.value=g.state.spotLightMap,w0.pointShadowMatrix.value=g.state.pointShadowMatrix;return x.lightProbeGrid=_.state.lightProbeGridArray.length>0,x.currentProgram=$J,x.uniformsList=null,$J}function gJ(k){if(k.uniformsList===null){let v=k.currentProgram.getUniforms();k.uniformsList=i7.seqWithValue(v.seq,k.uniforms)}return k.uniformsList}function wJ(k,v){let d=S.get(k);d.outputColorSpace=v.outputColorSpace,d.batching=v.batching,d.batchingColor=v.batchingColor,d.instancing=v.instancing,d.instancingColor=v.instancingColor,d.instancingMorph=v.instancingMorph,d.skinning=v.skinning,d.morphTargets=v.morphTargets,d.morphNormals=v.morphNormals,d.morphColors=v.morphColors,d.morphTargetsCount=v.morphTargetsCount,d.numClippingPlanes=v.numClippingPlanes,d.numIntersection=v.numClipIntersection,d.vertexAlphas=v.vertexAlphas,d.vertexTangents=v.vertexTangents,d.toneMapping=v.toneMapping}function E8(k,v){if(k.length===0)return null;if(k.length===1)return k[0].texture!==null?k[0]:null;A.setFromMatrixPosition(v.matrixWorld);for(let d=0,x=k.length;d<x;d++){let g=k[d];if(g.texture!==null&&g.boundingBox.containsPoint(A))return g}return null}function r8(k,v,d,x,g){if(v.isScene!==!0)v=v0;l.resetTextureUnits();let k0=v.fog,_0=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?v.environment:null,L0=p===null?V.outputColorSpace:p.isXRRenderTarget===!0?p.texture.colorSpace:QJ.workingColorSpace,P0=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,y0=e.get(x.envMap||_0,P0),r0=x.vertexColors===!0&&!!d.attributes.color&&d.attributes.color.itemSize===4,$J=!!d.attributes.tangent&&(!!x.normalMap||x.anisotropy>0),w0=!!d.morphAttributes.position,UJ=!!d.morphAttributes.normal,CJ=!!d.morphAttributes.color,RJ=H8;if(x.toneMapped){if(p===null||p.isXRRenderTarget===!0)RJ=V.toneMapping}let FJ=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,pJ=FJ!==void 0?FJ.length:0,I0=S.get(x),uJ=_.state.lights;if($0===!0){if(Y0===!0||k!==c){let OJ=k===c&&x.id===W0;U0.setState(x,k,OJ)}}let KJ=!1;if(x.version===I0.__version){if(I0.needsLights&&I0.lightsStateVersion!==uJ.state.version)KJ=!0;else if(I0.outputColorSpace!==L0)KJ=!0;else if(g.isBatchedMesh&&I0.batching===!1)KJ=!0;else if(!g.isBatchedMesh&&I0.batching===!0)KJ=!0;else if(g.isBatchedMesh&&I0.batchingColor===!0&&g._colorsTexture===null)KJ=!0;else if(g.isBatchedMesh&&I0.batchingColor===!1&&g._colorsTexture!==null)KJ=!0;else if(g.isInstancedMesh&&I0.instancing===!1)KJ=!0;else if(!g.isInstancedMesh&&I0.instancing===!0)KJ=!0;else if(g.isSkinnedMesh&&I0.skinning===!1)KJ=!0;else if(!g.isSkinnedMesh&&I0.skinning===!0)KJ=!0;else if(g.isInstancedMesh&&I0.instancingColor===!0&&g.instanceColor===null)KJ=!0;else if(g.isInstancedMesh&&I0.instancingColor===!1&&g.instanceColor!==null)KJ=!0;else if(g.isInstancedMesh&&I0.instancingMorph===!0&&g.morphTexture===null)KJ=!0;else if(g.isInstancedMesh&&I0.instancingMorph===!1&&g.morphTexture!==null)KJ=!0;else if(I0.envMap!==y0)KJ=!0;else if(x.fog===!0&&I0.fog!==k0)KJ=!0;else if(I0.numClippingPlanes!==void 0&&(I0.numClippingPlanes!==U0.numPlanes||I0.numIntersection!==U0.numIntersection))KJ=!0;else if(I0.vertexAlphas!==r0)KJ=!0;else if(I0.vertexTangents!==$J)KJ=!0;else if(I0.morphTargets!==w0)KJ=!0;else if(I0.morphNormals!==UJ)KJ=!0;else if(I0.morphColors!==CJ)KJ=!0;else if(I0.toneMapping!==RJ)KJ=!0;else if(I0.morphTargetsCount!==pJ)KJ=!0;else if(!!I0.lightProbeGrid!==_.state.lightProbeGridArray.length>0)KJ=!0}else KJ=!0,I0.__version=x.version;let tJ=I0.currentProgram;if(KJ===!0){if(tJ=DJ(x,v,g),y&&x.isNodeMaterial)y.onUpdateProgram(x,tJ,I0)}let q8=!1,x8=!1,z9=!1,qJ=tJ.getUniforms(),AJ=I0.uniforms;if(B.useProgram(tJ.program))q8=!0,x8=!0,z9=!0;if(x.id!==W0)W0=x.id,x8=!0;if(I0.needsLights){let OJ=E8(_.state.lightProbeGridArray,g);if(I0.lightProbeGrid!==OJ)I0.lightProbeGrid=OJ,x8=!0}if(q8||c!==k){if(B.buffers.depth.getReversed()&&k.reversedDepth!==!0)k._reversedDepth=!0,k.updateProjectionMatrix();qJ.setValue(T,"projectionMatrix",k.projectionMatrix),qJ.setValue(T,"viewMatrix",k.matrixWorldInverse);let p8=qJ.map.cameraPosition;if(p8!==void 0)p8.setValue(T,O0.setFromMatrixPosition(k.matrixWorld));if(o0.logarithmicDepthBuffer)qJ.setValue(T,"logDepthBufFC",2/(Math.log(k.far+1)/Math.LN2));if(x.isMeshPhongMaterial||x.isMeshToonMaterial||x.isMeshLambertMaterial||x.isMeshBasicMaterial||x.isMeshStandardMaterial||x.isShaderMaterial)qJ.setValue(T,"isOrthographic",k.isOrthographicCamera===!0);if(c!==k)c=k,x8=!0,z9=!0}if(I0.needsLights){if(uJ.state.sunShadowMap.length>0)qJ.setValue(T,"sunShadowMap",uJ.state.sunShadowMap,l);if(uJ.state.directionalShadowMap.length>0)qJ.setValue(T,"directionalShadowMap",uJ.state.directionalShadowMap,l);if(uJ.state.spotShadowMap.length>0)qJ.setValue(T,"spotShadowMap",uJ.state.spotShadowMap,l);if(uJ.state.pointShadowMap.length>0)qJ.setValue(T,"pointShadowMap",uJ.state.pointShadowMap,l)}if(g.isSkinnedMesh){qJ.setOptional(T,g,"bindMatrix"),qJ.setOptional(T,g,"bindMatrixInverse");let OJ=g.skeleton;if(OJ){if(OJ.boneTexture===null)OJ.computeBoneTexture();qJ.setValue(T,"boneTexture",OJ.boneTexture,l)}}if(g.isBatchedMesh){if(qJ.setOptional(T,g,"batchingTexture"),qJ.setValue(T,"batchingTexture",g._matricesTexture,l),qJ.setOptional(T,g,"batchingIdTexture"),qJ.setValue(T,"batchingIdTexture",g._indirectTexture,l),qJ.setOptional(T,g,"batchingColorTexture"),g._colorsTexture!==null)qJ.setValue(T,"batchingColorTexture",g._colorsTexture,l)}let g8=d.morphAttributes;if(g8.position!==void 0||g8.normal!==void 0||g8.color!==void 0)e0.update(g,d,tJ);if(x8||I0.receiveShadow!==g.receiveShadow)I0.receiveShadow=g.receiveShadow,qJ.setValue(T,"receiveShadow",g.receiveShadow);if((x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial)&&x.envMap===null&&v.environment!==null)AJ.envMapIntensity.value=v.environmentIntensity;if(AJ.dfgLUT!==void 0)AJ.dfgLUT.value=Y5();if(x8){if(qJ.setValue(T,"toneMappingExposure",V.toneMappingExposure),I0.needsLights)t8(AJ,z9);if(k0&&x.fog===!0)M0.refreshFogUniforms(AJ,k0);if(M0.refreshMaterialUniforms(AJ,x,K0,n,_.state.transmissionRenderTarget[k.id]),I0.needsLights&&I0.lightProbeGrid){let OJ=I0.lightProbeGrid;AJ.probesSH.value=OJ.texture,AJ.probesMin.value.copy(OJ.boundingBox.min),AJ.probesMax.value.copy(OJ.boundingBox.max),AJ.probesResolution.value.copy(OJ.resolution)}i7.upload(T,gJ(I0),AJ,l)}if(x.isShaderMaterial&&x.uniformsNeedUpdate===!0)i7.upload(T,gJ(I0),AJ,l),x.uniformsNeedUpdate=!1;if(x.isSpriteMaterial)qJ.setValue(T,"center",g.center);if(qJ.setValue(T,"modelViewMatrix",g.modelViewMatrix),qJ.setValue(T,"normalMatrix",g.normalMatrix),qJ.setValue(T,"modelMatrix",g.matrixWorld),x.uniformsGroups!==void 0){let OJ=x.uniformsGroups;for(let p8=0,P9=OJ.length;p8<P9;p8++){let PZ=OJ[p8];V0.update(PZ,tJ),V0.bind(PZ,tJ)}}return tJ}function t8(k,v){k.ambientLightColor.needsUpdate=v,k.lightProbe.needsUpdate=v,k.sunLights.needsUpdate=v,k.sunLightShadows.needsUpdate=v,k.directionalLights.needsUpdate=v,k.directionalLightShadows.needsUpdate=v,k.pointLights.needsUpdate=v,k.pointLightShadows.needsUpdate=v,k.spotLights.needsUpdate=v,k.spotLightShadows.needsUpdate=v,k.rectAreaLights.needsUpdate=v,k.hemisphereLights.needsUpdate=v}function $Q(k){return k.isMeshLambertMaterial||k.isMeshToonMaterial||k.isMeshPhongMaterial||k.isMeshStandardMaterial||k.isShadowMaterial||k.isShaderMaterial&&k.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return o},this.getRenderTarget=function(){return p},this.setRenderTargetTextures=function(k,v,d){let x=S.get(k);if(x.__autoAllocateDepthBuffer=k.resolveDepthBuffer===!1,x.__autoAllocateDepthBuffer===!1)x.__useRenderToTexture=!1;S.get(k.texture).__webglTexture=v,S.get(k.depthTexture).__webglTexture=x.__autoAllocateDepthBuffer?void 0:d,x.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(k,v){let d=S.get(k);d.__webglFramebuffer=v,d.__useDefaultFramebuffer=v===void 0},this.setRenderTarget=function(k,v=0,d=0){p=k,m=v,o=d;let x=null,g=!1,k0=!1;if(k){let L0=S.get(k);if(L0.__useDefaultFramebuffer!==void 0){B.bindFramebuffer(T.FRAMEBUFFER,L0.__webglFramebuffer),r.copy(k.viewport),Q0.copy(k.scissor),T0=k.scissorTest,B.viewport(r),B.scissor(Q0),B.setScissorTest(T0),W0=-1;return}else if(L0.__webglFramebuffer===void 0)l.setupRenderTarget(k);else if(L0.__hasExternalTextures)l.rebindTextures(k,S.get(k.texture).__webglTexture,S.get(k.depthTexture).__webglTexture);else if(k.depthBuffer){let r0=k.depthTexture;if(L0.__boundDepthTexture!==r0){if(r0!==null&&S.has(r0)&&(k.width!==r0.image.width||k.height!==r0.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");l.setupDepthRenderbuffer(k)}}let P0=k.texture;if(P0.isData3DTexture||P0.isDataArrayTexture||P0.isCompressedArrayTexture)k0=!0;let y0=S.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget){if(Array.isArray(y0[v]))x=y0[v][d];else x=y0[v];g=!0}else if(k.samples>0&&l.useMultisampledRTT(k)===!1)x=S.get(k).__webglMultisampledFramebuffer;else if(Array.isArray(y0))x=y0[d];else x=y0;r.copy(k.viewport),Q0.copy(k.scissor),T0=k.scissorTest}else r.copy(x0).multiplyScalar(K0).floor(),Q0.copy(B0).multiplyScalar(K0).floor(),T0=s0;if(d!==0)x=b;if(B.bindFramebuffer(T.FRAMEBUFFER,x))B.drawBuffers(k,x);if(B.viewport(r),B.scissor(Q0),B.setScissorTest(T0),g){let L0=S.get(k.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+v,L0.__webglTexture,d)}else if(k0){let L0=v;for(let P0=0;P0<k.textures.length;P0++){let y0=S.get(k.textures[P0]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+P0,y0.__webglTexture,d,L0)}}else if(k!==null&&d!==0){let L0=S.get(k.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,L0.__webglTexture,d)}W0=-1};function K7(k){let v=S.get(k);if(v.__readFormat!==k.format||v.__readType!==k.type)v.__readFormat=k.format,v.__readType=k.type,v.__formatReadable=o0.textureFormatReadable(k.format),v.__typeReadable=o0.textureTypeReadable(k.type);return v}if(this.readRenderTargetPixels=function(k,v,d,x,g,k0,_0,L0=0){if(!(k&&k.isWebGLRenderTarget)){l0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let P0=S.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&_0!==void 0)P0=P0[_0];if(P0){B.bindFramebuffer(T.FRAMEBUFFER,P0);try{let y0=k.textures[L0],r0=y0.format,$J=y0.type;if(k.textures.length>1)T.readBuffer(T.COLOR_ATTACHMENT0+L0);let w0=K7(y0);if(w0.__formatReadable===!1){l0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(w0.__typeReadable===!1){l0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(v>=0&&v<=k.width-x&&(d>=0&&d<=k.height-g))T.readPixels(v,d,x,g,i.convert(r0),i.convert($J),k0)}finally{let y0=p!==null?S.get(p).__webglFramebuffer:null;B.bindFramebuffer(T.FRAMEBUFFER,y0)}}},this.readRenderTargetPixelsAsync=async function(k,v,d,x,g,k0,_0,L0=0){if(!(k&&k.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let P0=S.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&_0!==void 0)P0=P0[_0];if(P0)if(v>=0&&v<=k.width-x&&(d>=0&&d<=k.height-g)){B.bindFramebuffer(T.FRAMEBUFFER,P0);let y0=k.textures[L0],r0=y0.format,$J=y0.type;if(k.textures.length>1)T.readBuffer(T.COLOR_ATTACHMENT0+L0);let w0=K7(y0);if(w0.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(w0.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let UJ=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,UJ),T.bufferData(T.PIXEL_PACK_BUFFER,k0.byteLength,T.STREAM_READ),T.readPixels(v,d,x,g,i.convert(r0),i.convert($J),0),T.bindBuffer(T.PIXEL_PACK_BUFFER,null);let CJ=p!==null?S.get(p).__webglFramebuffer:null;B.bindFramebuffer(T.FRAMEBUFFER,CJ);let RJ=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await JW(T,RJ,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,UJ),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,k0),T.bindBuffer(T.PIXEL_PACK_BUFFER,null),T.deleteBuffer(UJ),T.deleteSync(RJ),k0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(k,v=null,d=0){let x=Math.pow(2,-d),g=Math.floor(k.image.width*x),k0=Math.floor(k.image.height*x),_0=v!==null?v.x:0,L0=v!==null?v.y:0;l.setTexture2D(k,0),T.copyTexSubImage2D(T.TEXTURE_2D,d,0,0,_0,L0,g,k0),B.unbindTexture()},this.copyTextureToTexture=function(k,v,d=null,x=null,g=0,k0=0){let _0,L0,P0,y0,r0,$J,w0,UJ,CJ,RJ=k.isCompressedTexture?k.mipmaps[k0]:k.image;if(d!==null)_0=d.max.x-d.min.x,L0=d.max.y-d.min.y,P0=d.isBox3?d.max.z-d.min.z:1,y0=d.min.x,r0=d.min.y,$J=d.isBox3?d.min.z:0;else{let AJ=Math.pow(2,-g);if(_0=Math.floor(RJ.width*AJ),L0=Math.floor(RJ.height*AJ),k.isDataArrayTexture)P0=RJ.depth;else if(k.isData3DTexture)P0=Math.floor(RJ.depth*AJ);else P0=1;y0=0,r0=0,$J=0}if(x!==null)w0=x.x,UJ=x.y,CJ=x.z;else w0=0,UJ=0,CJ=0;let FJ=i.convert(v.format),pJ=i.convert(v.type),I0;if(v.isData3DTexture)l.setTexture3D(v,0),I0=T.TEXTURE_3D;else if(v.isDataArrayTexture||v.isCompressedArrayTexture)l.setTexture2DArray(v,0),I0=T.TEXTURE_2D_ARRAY;else l.setTexture2D(v,0),I0=T.TEXTURE_2D;B.activeTexture(T.TEXTURE0),B.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,v.flipY),B.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),B.pixelStorei(T.UNPACK_ALIGNMENT,v.unpackAlignment);let uJ=B.getParameter(T.UNPACK_ROW_LENGTH),KJ=B.getParameter(T.UNPACK_IMAGE_HEIGHT),tJ=B.getParameter(T.UNPACK_SKIP_PIXELS),q8=B.getParameter(T.UNPACK_SKIP_ROWS),x8=B.getParameter(T.UNPACK_SKIP_IMAGES);B.pixelStorei(T.UNPACK_ROW_LENGTH,RJ.width),B.pixelStorei(T.UNPACK_IMAGE_HEIGHT,RJ.height),B.pixelStorei(T.UNPACK_SKIP_PIXELS,y0),B.pixelStorei(T.UNPACK_SKIP_ROWS,r0),B.pixelStorei(T.UNPACK_SKIP_IMAGES,$J);let z9=k.isDataArrayTexture||k.isData3DTexture,qJ=v.isDataArrayTexture||v.isData3DTexture;if(k.isDepthTexture){let AJ=S.get(k),g8=S.get(v),OJ=S.get(AJ.__renderTarget),p8=S.get(g8.__renderTarget);B.bindFramebuffer(T.READ_FRAMEBUFFER,OJ.__webglFramebuffer),B.bindFramebuffer(T.DRAW_FRAMEBUFFER,p8.__webglFramebuffer);for(let P9=0;P9<P0;P9++){if(z9)T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,S.get(k).__webglTexture,g,$J+P9),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,S.get(v).__webglTexture,k0,CJ+P9);T.blitFramebuffer(y0,r0,_0,L0,w0,UJ,_0,L0,T.DEPTH_BUFFER_BIT,T.NEAREST)}B.bindFramebuffer(T.READ_FRAMEBUFFER,null),B.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(g!==0||k.isRenderTargetTexture||S.has(k)){let AJ=S.get(k),g8=S.get(v);B.bindFramebuffer(T.READ_FRAMEBUFFER,u),B.bindFramebuffer(T.DRAW_FRAMEBUFFER,w);for(let OJ=0;OJ<P0;OJ++){if(z9)T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,AJ.__webglTexture,g,$J+OJ);else T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,AJ.__webglTexture,g);if(qJ)T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,g8.__webglTexture,k0,CJ+OJ);else T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,g8.__webglTexture,k0);if(g!==0)T.blitFramebuffer(y0,r0,_0,L0,w0,UJ,_0,L0,T.COLOR_BUFFER_BIT,T.NEAREST);else if(qJ)T.copyTexSubImage3D(I0,k0,w0,UJ,CJ+OJ,y0,r0,_0,L0);else T.copyTexSubImage2D(I0,k0,w0,UJ,y0,r0,_0,L0)}B.bindFramebuffer(T.READ_FRAMEBUFFER,null),B.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(qJ)if(k.isDataTexture||k.isData3DTexture)T.texSubImage3D(I0,k0,w0,UJ,CJ,_0,L0,P0,FJ,pJ,RJ.data);else if(v.isCompressedArrayTexture)T.compressedTexSubImage3D(I0,k0,w0,UJ,CJ,_0,L0,P0,FJ,RJ.data);else T.texSubImage3D(I0,k0,w0,UJ,CJ,_0,L0,P0,FJ,pJ,RJ);else if(k.isDataTexture)T.texSubImage2D(T.TEXTURE_2D,k0,w0,UJ,_0,L0,FJ,pJ,RJ.data);else if(k.isCompressedTexture)T.compressedTexSubImage2D(T.TEXTURE_2D,k0,w0,UJ,RJ.width,RJ.height,FJ,RJ.data);else T.texSubImage2D(T.TEXTURE_2D,k0,w0,UJ,_0,L0,FJ,pJ,RJ);if(B.pixelStorei(T.UNPACK_ROW_LENGTH,uJ),B.pixelStorei(T.UNPACK_IMAGE_HEIGHT,KJ),B.pixelStorei(T.UNPACK_SKIP_PIXELS,tJ),B.pixelStorei(T.UNPACK_SKIP_ROWS,q8),B.pixelStorei(T.UNPACK_SKIP_IMAGES,x8),k0===0&&v.generateMipmaps)T.generateMipmap(I0);B.unbindTexture()},this.initRenderTarget=function(k){if(S.get(k).__webglFramebuffer===void 0)l.setupRenderTarget(k)},this.initTexture=function(k){if(k.isCubeTexture)l.setTextureCube(k,0);else if(k.isData3DTexture)l.setTexture3D(k,0);else if(k.isDataArrayTexture||k.isCompressedArrayTexture)l.setTexture2DArray(k,0);else l.setTexture2D(k,0);B.unbindTexture()},this.resetState=function(){m=0,o=0,p=null,B.reset(),D0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return B$}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=QJ._getDrawingBufferColorSpace(J),Q.unpackColorSpace=QJ._getUnpackColorSpace()}}var $7={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class oJ{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var H5=new t9(-1,1,1,-1,0,1);class iW extends yJ{constructor(){super();this.setAttribute("position",new HJ([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new HJ([0,2,0,0,2,0],2))}}var U5=new iW;class b8{constructor(J){this._mesh=new kJ(U5,J)}dispose(){this._mesh.geometry.dispose()}render(J){J.render(this._mesh,H5)}get material(){return this._mesh.material}set material(J){this._mesh.material=J}}class a7 extends oJ{constructor(J,Q="tDiffuse"){super();if(this.textureID=Q,this.uniforms=null,this.material=null,J instanceof _J)this.uniforms=J.uniforms,this.material=J;else if(J)this.uniforms=f8.clone(J.uniforms),this.material=new _J({name:J.name!==void 0?J.name:"unspecified",defines:Object.assign({},J.defines),uniforms:this.uniforms,vertexShader:J.vertexShader,fragmentShader:J.fragmentShader});this._fsQuad=new b8(this.material)}render(J,Q,$){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=$.texture;if(this._fsQuad.material=this.material,this.renderToScreen)J.setRenderTarget(null),this._fsQuad.render(J);else{if(J.setRenderTarget(Q),this.clear)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);this._fsQuad.render(J)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class e6 extends oJ{constructor(J,Q){super();this.scene=J,this.camera=Q,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(J,Q,$){let Z=J.getContext(),K=J.state;K.buffers.color.setMask(!1),K.buffers.depth.setMask(!1),K.buffers.color.setLocked(!0),K.buffers.depth.setLocked(!0);let W,X;if(this.inverse)W=0,X=1;else W=1,X=0;if(K.buffers.stencil.setTest(!0),K.buffers.stencil.setOp(Z.REPLACE,Z.REPLACE,Z.REPLACE),K.buffers.stencil.setFunc(Z.ALWAYS,W,4294967295),K.buffers.stencil.setClear(X),K.buffers.stencil.setLocked(!0),J.setRenderTarget($),this.clear)J.clear();if(J.render(this.scene,this.camera),J.setRenderTarget(Q),this.clear)J.clear();J.render(this.scene,this.camera),K.buffers.color.setLocked(!1),K.buffers.depth.setLocked(!1),K.buffers.color.setMask(!0),K.buffers.depth.setMask(!0),K.buffers.stencil.setLocked(!1),K.buffers.stencil.setFunc(Z.EQUAL,1,4294967295),K.buffers.stencil.setOp(Z.KEEP,Z.KEEP,Z.KEEP),K.buffers.stencil.setLocked(!0)}}class DZ extends oJ{constructor(){super();this.needsSwap=!1}render(J){J.state.buffers.stencil.setLocked(!1),J.state.buffers.stencil.setTest(!1)}}class FZ{constructor(J,Q){if(this.renderer=J,this._pixelRatio=J.getPixelRatio(),Q===void 0){let $=J.getSize(new Z0);this._width=$.width,this._height=$.height,Q=new IJ(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:PJ}),Q.texture.name="EffectComposer.rt1"}else this._width=Q.width,this._height=Q.height;this.renderTarget1=Q,this.renderTarget2=Q.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new a7($7),this.copyPass.material.blending=Q8,this.timer=new i6}swapBuffers(){let J=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=J}addPass(J){this.passes.push(J),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(J,Q){this.passes.splice(Q,0,J),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(J){let Q=this.passes.indexOf(J);if(Q!==-1)this.passes.splice(Q,1)}isLastEnabledPass(J){for(let Q=J+1;Q<this.passes.length;Q++)if(this.passes[Q].enabled)return!1;return!0}render(J){if(this.timer.update(),J===void 0)J=this.timer.getDelta();let Q=this.renderer.getRenderTarget(),$=!1;for(let Z=0,K=this.passes.length;Z<K;Z++){let W=this.passes[Z];if(W.enabled===!1)continue;if(W.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(Z),W.render(this.renderer,this.writeBuffer,this.readBuffer,J,$),W.needsSwap){if($){let X=this.renderer.getContext(),Y=this.renderer.state.buffers.stencil;Y.setFunc(X.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,J),Y.setFunc(X.EQUAL,1,4294967295)}this.swapBuffers()}if(e6!==void 0){if(W instanceof e6)$=!0;else if(W instanceof DZ)$=!1}}this.renderer.setRenderTarget(Q)}reset(J){if(J===void 0){let Q=this.renderer.getSize(new Z0);this._pixelRatio=this.renderer.getPixelRatio(),this._width=Q.width,this._height=Q.height,J=this.renderTarget1.clone(),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=J,this.renderTarget2=J.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(J,Q){this._width=J,this._height=Q;let $=this._width*this._pixelRatio,Z=this._height*this._pixelRatio;this.renderTarget1.setSize($,Z),this.renderTarget2.setSize($,Z);for(let K=0;K<this.passes.length;K++)this.passes[K].setSize($,Z)}setPixelRatio(J){this._pixelRatio=J,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class OZ extends oJ{constructor(J,Q,$=null,Z=null,K=null){super();this.scene=J,this.camera=Q,this.overrideMaterial=$,this.clearColor=Z,this.clearAlpha=K,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new b0}render(J,Q,$){let Z=J.autoClear;J.autoClear=!1;let K,W;if(this.overrideMaterial!==null)W=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)J.getClearColor(this._oldClearColor),J.setClearColor(this.clearColor,J.getClearAlpha());if(this.clearAlpha!==null)K=J.getClearAlpha(),J.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)J.clearDepth();if(J.setRenderTarget(this.renderToScreen?null:$),this.clear===!0)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);if(J.render(this.scene,this.camera),this.clearColor!==null)J.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)J.setClearAlpha(K);if(this.overrideMaterial!==null)this.scene.overrideMaterial=W;J.autoClear=Z}}var oW={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new b0(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class I9 extends oJ{constructor(J,Q=1,$,Z){super();this.strength=Q,this.radius=$,this.threshold=Z,this.resolution=J!==void 0?new Z0(J.x,J.y):new Z0(256,256),this.clearColor=new b0(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let K=Math.round(this.resolution.x/2),W=Math.round(this.resolution.y/2);this.renderTargetBright=new IJ(K,W,{type:PJ,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let U=0;U<this.nMips;U++){let N=new IJ(K,W,{type:PJ,depthBuffer:!1});N.texture.name="UnrealBloomPass.h"+U,N.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(N);let E=new IJ(K,W,{type:PJ,depthBuffer:!1});E.texture.name="UnrealBloomPass.v"+U,E.texture.generateMipmaps=!1,this.renderTargetsVertical.push(E),K=Math.round(K/2),W=Math.round(W/2)}let X=oW;this.highPassUniforms=f8.clone(X.uniforms),this.highPassUniforms.luminosityThreshold.value=Z,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new _J({uniforms:this.highPassUniforms,vertexShader:X.vertexShader,fragmentShader:X.fragmentShader}),this.separableBlurMaterials=[];let Y=[6,10,14,18,22];K=Math.round(this.resolution.x/2),W=Math.round(this.resolution.y/2);for(let U=0;U<this.nMips;U++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(Y[U])),this.separableBlurMaterials[U].uniforms.invSize.value=new Z0(1/K,1/W),K=Math.round(K/2),W=Math.round(W/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=Q,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let H=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=H,this.bloomTintColors=[new j(1,1,1),new j(1,1,1),new j(1,1,1),new j(1,1,1),new j(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=f8.clone($7.uniforms),this.blendMaterial=new _J({uniforms:this.copyUniforms,vertexShader:$7.vertexShader,fragmentShader:$7.fragmentShader,premultipliedAlpha:!0,blending:Y9,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new b0,this._oldClearAlpha=1,this._basic=new G8,this._fsQuad=new b8(null)}dispose(){for(let J=0;J<this.renderTargetsHorizontal.length;J++)this.renderTargetsHorizontal[J].dispose();for(let J=0;J<this.renderTargetsVertical.length;J++)this.renderTargetsVertical[J].dispose();this.renderTargetBright.dispose();for(let J=0;J<this.separableBlurMaterials.length;J++)this.separableBlurMaterials[J].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(J,Q){let $=Math.round(J/2),Z=Math.round(Q/2);this.renderTargetBright.setSize($,Z);for(let K=0;K<this.nMips;K++)this.renderTargetsHorizontal[K].setSize($,Z),this.renderTargetsVertical[K].setSize($,Z),this.separableBlurMaterials[K].uniforms.invSize.value=new Z0(1/$,1/Z),$=Math.round($/2),Z=Math.round(Z/2)}render(J,Q,$,Z,K){J.getClearColor(this._oldClearColor),this._oldClearAlpha=J.getClearAlpha();let W=J.autoClear;if(J.autoClear=!1,J.setClearColor(this.clearColor,0),K)J.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=$.texture,J.setRenderTarget(null),J.clear(),this._fsQuad.render(J);this.highPassUniforms.tDiffuse.value=$.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,J.setRenderTarget(this.renderTargetBright),J.clear(),this._fsQuad.render(J);let X=this.renderTargetBright;for(let Y=0;Y<this.nMips;Y++)this._fsQuad.material=this.separableBlurMaterials[Y],this.separableBlurMaterials[Y].uniforms.colorTexture.value=X.texture,this.separableBlurMaterials[Y].uniforms.direction.value=I9.BlurDirectionX,J.setRenderTarget(this.renderTargetsHorizontal[Y]),J.clear(),this._fsQuad.render(J),this.separableBlurMaterials[Y].uniforms.colorTexture.value=this.renderTargetsHorizontal[Y].texture,this.separableBlurMaterials[Y].uniforms.direction.value=I9.BlurDirectionY,J.setRenderTarget(this.renderTargetsVertical[Y]),J.clear(),this._fsQuad.render(J),X=this.renderTargetsVertical[Y];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,J.setRenderTarget(this.renderTargetsHorizontal[0]),J.clear(),this._fsQuad.render(J),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,K)J.state.buffers.stencil.setTest(!0);if(this.renderToScreen)J.setRenderTarget(null),this._fsQuad.render(J);else J.setRenderTarget($),this._fsQuad.render(J);J.setClearColor(this._oldClearColor,this._oldClearAlpha),J.autoClear=W}_getSeparableBlurMaterial(J){let Q=[],$=J/3;for(let W=0;W<J;W++)Q.push(0.39894*Math.exp(-0.5*W*W/($*$))/$);let Z=[],K=[];for(let W=1;W<J;W+=2){let X=Q[W],Y=W+1<J?Q[W+1]:0,H=X+Y;Z.push((W*X+(W+1)*Y)/H),K.push(H)}return new _J({defines:{KERNEL_PAIRS:Z.length},uniforms:{colorTexture:{value:null},invSize:{value:new Z0(0.5,0.5)},direction:{value:new Z0(0.5,0.5)},centerWeight:{value:Q[0]},gaussianOffsets:{value:Z},gaussianWeights:{value:K}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(J){return new _J({defines:{NUM_MIPS:J},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}I9.BlurDirectionX=new Z0(1,0);I9.BlurDirectionY=new Z0(0,1);var r7={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class RZ extends oJ{constructor(){super();this.isOutputPass=!0,this.uniforms=f8.clone(r7.uniforms),this.material=new d7({name:r7.name,uniforms:this.uniforms,vertexShader:r7.vertexShader,fragmentShader:r7.fragmentShader}),this._fsQuad=new b8(this.material),this._outputColorSpace=null,this._toneMapping=null}render(J,Q,$){if(this.uniforms.tDiffuse.value=$.texture,this.uniforms.toneMappingExposure.value=J.toneMappingExposure,this._outputColorSpace!==J.outputColorSpace||this._toneMapping!==J.toneMapping){if(this._outputColorSpace=J.outputColorSpace,this._toneMapping=J.toneMapping,this.material.defines={},QJ.getTransfer(this._outputColorSpace)===EJ)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===L7)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===k7)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===V7)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===H9)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===I7)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===_7)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===B7)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)J.setRenderTarget(null),this._fsQuad.render(J);else{if(J.setRenderTarget(Q),this.clear)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);this._fsQuad.render(J)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}var MZ=`
  precision highp float;
  uniform float cameraNear;
  uniform float cameraFar;
  uniform float focus;
  uniform float aperture;
  uniform float maxCoc;
  varying vec2 vUv;

  float linearDepth(float d) {
    float z = d * 2.0 - 1.0;
    return (2.0 * cameraNear * cameraFar) / (cameraFar + cameraNear - z * (cameraFar - cameraNear));
  }
  // circle of confusion in full-resolution pixels
  float cocAt(float d) {
    return clamp(aperture * abs(1.0 - focus / linearDepth(d)), 0.0, maxCoc);
  }
  // guard against stray NaN/Inf from specular lobes, which bloom would smear across the frame
  vec3 safe(vec3 c) {
    if (any(isnan(c)) || any(isinf(c))) return vec3(0.0);
    return min(c, vec3(48.0));
  }
`,G5=MZ+`
  uniform sampler2D tColor;
  uniform sampler2D tDepth;
  uniform vec2 resolution;
  void main() {
    vec2 o = 0.5 / resolution;
    vec3 c = safe(texture2D(tColor, vUv + vec2(-o.x, -o.y)).rgb)
           + safe(texture2D(tColor, vUv + vec2(o.x, -o.y)).rgb)
           + safe(texture2D(tColor, vUv + vec2(-o.x, o.y)).rgb)
           + safe(texture2D(tColor, vUv + vec2(o.x, o.y)).rgb);
    float k = cocAt(texture2D(tDepth, vUv + vec2(-o.x, -o.y)).x)
            + cocAt(texture2D(tDepth, vUv + vec2(o.x, -o.y)).x)
            + cocAt(texture2D(tDepth, vUv + vec2(-o.x, o.y)).x)
            + cocAt(texture2D(tDepth, vUv + vec2(o.x, o.y)).x);
    gl_FragColor = vec4(c * 0.25, k * 0.25);
  }
`,N5=MZ+`
  uniform sampler2D tPrep;
  uniform vec2 resolution;
  void main() {
    vec4 c0 = texture2D(tPrep, vUv);
    float r0 = c0.a;
    if (r0 < 0.5) { gl_FragColor = c0; return; }
    vec3 acc = c0.rgb;
    float wsum = 1.0;
    const float GOLDEN = 2.39996323;
    for (int i = 0; i < TAPS; i++) {
      float fi = float(i) + 0.5;
      float r = sqrt(fi / float(TAPS)) * r0;
      float a = fi * GOLDEN;
      vec4 s = texture2D(tPrep, vUv + vec2(cos(a), sin(a)) * r / resolution);
      // a sample only contributes if its own blur disc reaches this pixel
      float w = clamp(s.a - r + 1.0, 0.0, 1.0);
      // gentle highlight bias gives bright points a lens-like disc
      w *= 1.0 + 0.6 * smoothstep(1.0, 4.0, dot(s.rgb, vec3(0.2126, 0.7152, 0.0722)));
      acc += s.rgb * w;
      wsum += w;
    }
    gl_FragColor = vec4(acc / wsum, r0);
  }
`,E5=MZ+`
  uniform sampler2D tColor;
  uniform sampler2D tDepth;
  uniform sampler2D tBlur;
  void main() {
    vec3 sharp = safe(texture2D(tColor, vUv).rgb);
    float c = cocAt(texture2D(tDepth, vUv).x);
    if (c < 0.5) { gl_FragColor = vec4(sharp, 1.0); return; }
    gl_FragColor = vec4(mix(sharp, texture2D(tBlur, vUv).rgb, smoothstep(0.5, 2.5, c)), 1.0);
  }
`,q5=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`;class LZ extends oJ{constructor(J,Q){super();this.camera=J,this.uniforms={cameraNear:{value:J.near},cameraFar:{value:J.far},focus:{value:1},aperture:{value:4},maxCoc:{value:14},resolution:{value:new Z0(1,1)}};let $=(K,W,X={})=>new _J({defines:X,uniforms:{...this.uniforms,...W},vertexShader:q5,fragmentShader:K,depthTest:!1,depthWrite:!1});this.prep=$(G5,{tColor:{value:null},tDepth:{value:null}}),this.blur=$(N5,{tPrep:{value:null}},{TAPS:Q}),this.composite=$(E5,{tColor:{value:null},tDepth:{value:null},tBlur:{value:null}}),this.quad=new b8(this.prep);let Z=()=>new IJ(1,1,{type:PJ,depthBuffer:!1});this.rtPrep=Z(),this.rtBlur=Z()}setSize(J,Q){this.uniforms.resolution.value.set(J,Q);let $=Math.max(1,Math.floor(J/2)),Z=Math.max(1,Math.floor(Q/2));this.rtPrep.setSize($,Z),this.rtBlur.setSize($,Z)}render(J,Q,$){if(this.uniforms.cameraNear.value=this.camera.near,this.uniforms.cameraFar.value=this.camera.far,this.uniforms.aperture.value>0)this.prep.uniforms.tColor.value=$.texture,this.prep.uniforms.tDepth.value=$.depthTexture,this.quad.material=this.prep,J.setRenderTarget(this.rtPrep),this.quad.render(J),this.blur.uniforms.tPrep.value=this.rtPrep.texture,this.quad.material=this.blur,J.setRenderTarget(this.rtBlur),this.quad.render(J);this.composite.uniforms.tColor.value=$.texture,this.composite.uniforms.tDepth.value=$.depthTexture,this.composite.uniforms.tBlur.value=this.rtBlur.texture,this.quad.material=this.composite,J.setRenderTarget(this.renderToScreen?null:Q),this.quad.render(J)}dispose(){for(let J of[this.prep,this.blur,this.composite])J.dispose();this.rtPrep.dispose(),this.rtBlur.dispose(),this.quad.dispose()}}var D5=`
  precision highp float;
  uniform sampler2D tDiffuse;
  uniform vec2 resolution;
  uniform float time;
  uniform float grain;
  uniform float vignette;
  uniform float fringe;
  varying vec2 vUv;

  float hash(vec2 p) {
    p = fract(p * vec2(443.897, 441.423));
    p += dot(p, p.yx + 19.19);
    return fract((p.x + p.y) * p.x);
  }
  void main() {
    vec2 c = vUv - 0.5;
    float d = length(c * vec2(resolution.x / resolution.y, 1.0));
    vec2 dir = c * fringe * d;
    vec3 col;
    col.r = texture2D(tDiffuse, vUv - dir).r;
    col.g = texture2D(tDiffuse, vUv).g;
    col.b = texture2D(tDiffuse, vUv + dir).b;
    float v = smoothstep(0.95, 0.15, d);
    col *= mix(1.0 - vignette, 1.0, v);
    float l = dot(col, vec3(0.299, 0.587, 0.114));
    float n = hash(floor(vUv * resolution) + fract(time) * 917.0) - 0.5;
    col += n * grain * (0.35 + 0.65 * (1.0 - abs(l * 2.0 - 1.0)));
    gl_FragColor = vec4(col, 1.0);
  }
`;function aW(){return{uniforms:{tDiffuse:{value:null},resolution:{value:new Z0(1,1)},time:{value:0},grain:{value:0.035},vignette:{value:0.42},fringe:{value:0.0035}},vertexShader:`
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
    `,fragmentShader:D5}}function JQ(J){let Q=J>>>0;return function(){Q=Q+1831565813>>>0;let $=Q;return $=Math.imul($^$>>>15,$|1),$^=$+Math.imul($^$>>>7,$|61),(($^$>>>14)>>>0)/4294967296}}function _9(J,Q){let $=document.createElement("canvas");return $.width=J,$.height=Q,$}function rW(J,Q){let $=JQ(J),Z=new Float32Array(Q*Q);for(let W=0;W<Z.length;W++)Z[W]=$();let K=(W,X)=>Z[(X%Q+Q)%Q*Q+(W%Q+Q)%Q];return function(W,X){let Y=Math.floor(W),H=Math.floor(X),U=W-Y,N=X-H,E=U*U*(3-2*U),G=N*N*(3-2*N),D=K(Y,H),M=K(Y+1,H),I=K(Y,H+1),F=K(Y+1,H+1);return D+(M-D)*E+(I-D)*G+(D-M-I+F)*E*G}}function tW(J,Q,$,Z,K){let W=0,X=0.5,Y=K,H=0;for(let U=0;U<Z;U++)W+=X*J(Q*Y,$*Y),H+=X,X*=0.5,Y*=2;return W/H}function eW(J=512){let Q=rW(11,256),$=rW(29,256),Z=JQ(7),K=_9(J,J),W=_9(J,J),X=K.getContext("2d"),Y=W.getContext("2d"),H=X.createImageData(J,J),U=Y.createImageData(J,J),N=256/J;for(let D=0;D<J;D++)for(let M=0;M<J;M++){let I=(D*J+M)*4,F=tW(Q,M*N,D*N,5,0.03125),q=tW($,M*N,D*N,3,0.5),C=Z()>0.9965?0.55+Z()*0.45:0,A=22+F*18+q*7+C*70;H.data[I]=A,H.data[I+1]=A+1,H.data[I+2]=A+3,H.data[I+3]=255;let L=120+F*70-q*25-C*60;U.data[I]=L,U.data[I+1]=L,U.data[I+2]=L,U.data[I+3]=255}X.putImageData(H,0,0),Y.putImageData(U,0,0);let E=new M8(K);E.colorSpace=S8;let G=new M8(W);for(let D of[E,G])D.wrapS=D.wrapT=C7,D.anisotropy=8;return{albedo:E,rough:G}}function JX(J=1024,Q=256){let $=_9(J,Q),Z=$.getContext("2d");Z.fillStyle="rgb(118,118,118)",Z.fillRect(0,0,J,Q);let K=JQ(42);for(let X=0;X<2600;X++){let Y=K()*Q,H=80+K()*J*0.9,U=K()*J-H*0.2,N=70+K()*110;Z.strokeStyle=`rgba(${N},${N},${N},${0.06+K()*0.16})`,Z.lineWidth=0.4+K()*1.1,Z.beginPath(),Z.moveTo(U,Y),Z.lineTo(U+H,Y+(K()-0.5)*0.6),Z.stroke()}let W=new M8($);return W.wrapS=W.wrapT=C7,W.anisotropy=8,W}function QX(J=2048,Q=512){let $=_9(J,Q),Z=$.getContext("2d");Z.fillStyle="rgb(255,255,255)",Z.fillRect(0,0,J,Q),Z.textBaseline="middle",Z.textAlign="center",Z.fillStyle="rgb(80,80,80)",Z.font='500 120px "Familjen Grotesk", "Inter Tight", system-ui, sans-serif',Z.fillText("glasslatch",J*0.5,Q*0.5),Z.font='500 34px "IBM Plex Mono", ui-monospace, monospace',Z.fillStyle="rgb(130,130,130)",Z.fillText("BUILT IN THE EU",J*0.5,Q*0.5+100);let K=new M8($);return K.wrapS=K.wrapT=G9,K.anisotropy=8,K}function $X(J=2048,Q=1024){let $=_9(J,Q),Z=$.getContext("2d"),K=Z.createLinearGradient(0,0,0,Q);K.addColorStop(0,"#07090d"),K.addColorStop(0.45,"#0a0f15"),K.addColorStop(0.72,"#070a0e"),K.addColorStop(1,"#040506"),Z.fillStyle=K,Z.fillRect(0,0,J,Q);let W=(U,N,E,G,D,M)=>{Z.save(),Z.translate(U,N),Z.scale(E/G,1);let I=Z.createRadialGradient(0,0,0,0,0,G);I.addColorStop(0,D.replace("A",M)),I.addColorStop(0.5,D.replace("A",M*0.35)),I.addColorStop(1,D.replace("A",0)),Z.fillStyle=I,Z.beginPath(),Z.arc(0,0,G,0,Math.PI*2),Z.fill(),Z.restore()};W(J*0.5,Q*0.62,J*0.2,Q*0.34,"rgba(46,112,132,A)",0.55),W(J*0.5,Q*0.66,J*0.07,Q*0.14,"rgba(150,214,226,A)",0.22),W(J*0.22,Q*0.4,J*0.12,Q*0.2,"rgba(120,96,70,A)",0.18),W(J*0.8,Q*0.45,J*0.1,Q*0.18,"rgba(40,80,110,A)",0.25);let X=JQ(2026),Y=[[168,232,244],[214,201,173],[236,244,248],[110,196,220]];for(let U=0;U<46;U++){let N=J*(0.04+X()*0.92),E=Q*(0.16+X()*0.42),G=8+Math.pow(X(),2)*34,D=Y[Math.floor(X()*Y.length)],M=0.05+X()*0.2,I=Z.createRadialGradient(N,E,0,N,E,G);I.addColorStop(0,`rgba(${D[0]},${D[1]},${D[2]},${M*0.7})`),I.addColorStop(0.78,`rgba(${D[0]},${D[1]},${D[2]},${M*0.85})`),I.addColorStop(0.9,`rgba(${D[0]},${D[1]},${D[2]},${M})`),I.addColorStop(1,`rgba(${D[0]},${D[1]},${D[2]},0)`),Z.fillStyle=I,Z.beginPath(),Z.arc(N,E,G,0,Math.PI*2),Z.fill()}let H=new M8($);return H.colorSpace=S8,H.wrapS=G9,H.anisotropy=4,H}function kZ(J,Q,{size:$=512,blur:Z=24,color:K="#000",alpha:W=1,stretchY:X=1,rim:Y=0}){let H=_9($,$),U=H.getContext("2d"),[N,E,G,D]=Q,M=$*0.62/Math.max(G,D);U.save();let I=$*4;U.translate($/2-I,$/2),U.scale(M,M*X),U.translate(-(N+G/2),-(E+D/2)),U.shadowColor=K,U.globalAlpha=W,U.shadowBlur=Z,U.shadowOffsetX=I,U.shadowOffsetY=0,U.fillStyle="#000";for(let q of J)U.fill(new Path2D(q));if(Y>0){U.lineWidth=Y,U.strokeStyle="#000";for(let q of J)U.stroke(new Path2D(q))}U.restore();let F=new M8(H);return F.colorSpace=S8,F}function ZX(J,Q){let $=_9(J,J),Z=$.getContext("2d"),K=Z.createRadialGradient(J/2,J/2,0,J/2,J/2,J/2);for(let[X,Y]of Q)K.addColorStop(X,Y);Z.fillStyle=K,Z.fillRect(0,0,J,J);let W=new M8($);return W.colorSpace=S8,W}var VZ="M520 96.2H715C820.6 96.2 847.6 168.3 847.6 218C847.6 279.1 813.6 321.2 745 321.2H545C420.7 321.2 349.8 436.1 349.8 522C349.8 601.1 401.5 680.5 515 680.5H588C597 680.5 604.6 688 604.6 697V876C604.6 886 597 893.2 588 893.2H470C412.8 893.2 317.7 902.5 237.2 822.8C148.2 734.8 131.2 665.9 131.2 540C131.2 396 148.9 308.1 250.3 204.8C320.2 133.6 411.5 96.2 520 96.2Z",BZ="M609.5 610H831.5V690C831.5 738.1 804.3 781.6 768.8 818.8C714.4 875.8 653.8 893.2 650 893.2H626C616.5 893.2 609.5 886 609.5 877Z",F5="M512 423.2H846C882.1 423.2 917.2 456.6 917.2 494V556C917.2 593.4 884.6 627 846 627H512C443.7 627 407 587.5 407 525C407 472.7 456.5 423.2 512 423.2Z",V8=0.00028,XX=524,YX=893.2,IZ=17,KX=175,B8=(J,Q)=>[(J-XX)*V8,(YX-Q)*V8];function O5(J){let Q=J.match(/[a-zA-Z]|-?\d*\.?\d+/g),$=new g7,Z=0,K="M",W=0,X=0,Y=()=>parseFloat(Q[Z++]);while(Z<Q.length){if(/[a-zA-Z]/.test(Q[Z])){if(K=Q[Z++],K==="Z"||K==="z")continue}if(K==="M")W=Y(),X=Y(),$.moveTo(...B8(W,X)),K="L";else if(K==="L")W=Y(),X=Y(),$.lineTo(...B8(W,X));else if(K==="H")W=Y(),$.lineTo(...B8(W,X));else if(K==="V")X=Y(),$.lineTo(...B8(W,X));else if(K==="C"){let H=B8(Y(),Y()),U=B8(Y(),Y());W=Y(),X=Y(),$.bezierCurveTo(H[0],H[1],U[0],U[1],...B8(W,X))}else throw Error("Unsupported path command "+K)}return $}function _Z(J,Q,$,Z,K){let W=new p7(O5(J),{depth:Q,bevelEnabled:!0,bevelThickness:$,bevelSize:$*0.85,bevelOffset:-$*0.85,bevelSegments:Z,curveSegments:K});return W.translate(0,0,-Q/2),W.computeVertexNormals(),W}function R5(J){let Q=new j7,$=new kJ(new l7(12,32,16),new G8({color:new b0(0.014,0.016,0.019),side:hJ}));Q.add($);let Z=(X,Y,H,U,N)=>{let E=new G8({color:new b0(...N).multiplyScalar(U),side:cJ}),G=new kJ(new i8(X,Y),E);return G.position.set(...H),G.lookAt(0,0.1,0),Q.add(G),G};Z(3.2,2,[-2.6,3,-2.8],9,[1,0.985,0.96]),Z(0.55,4,[3.2,1.3,0.4],6,[0.82,0.94,1]),Z(0.45,3,[-3.4,1.1,2.2],2.6,[1,0.93,0.84]),Z(2.6,2.6,[0.4,4.4,0.8],2.2,[1,1,1]),Z(5,0.35,[0,0.5,-4],1.8,[0.45,0.86,0.98]),Z(1.2,0.8,[2.4,0.6,3],1.1,[0.9,0.95,1]),Z(3.4,1.8,[0.7,1.9,3.8],1.5,[0.93,0.97,1]);let K=new o7(J),W=K.fromScene(Q,0.012);return K.dispose(),Q.traverse((X)=>{if(X.geometry)X.geometry.dispose();if(X.material)X.material.dispose()}),W.texture}var AZ=(J,Q,$)=>J+(Q-J)*$,M5=(J)=>Math.min(1,Math.max(0,J)),L5=(J)=>J*J*(3-2*J),k5=(J)=>J<0.5?4*J*J*J:1-Math.pow(-2*J+2,3)/2,CZ=Math.PI/180,WX={hero:{target:"center",radius:0.135,focus:"center",az:[-24,-36],el:[6,13],fov:30,wide:{fit:0.6,shift:[0.36,0.02]},tall:{fit:0.68,shift:[0,0.47]},aperture:9,env:[0,0.35]},seal:{target:"knob",radius:0.075,focus:"knob",az:[-46,-30],el:[13,8],fov:26,wide:{fit:0.6,shift:[0.36,0]},tall:{fit:0.66,shift:[0,0.42]},aperture:9,env:[0.3,0.6]},access:{target:"center",radius:0.135,focus:"center",az:[10,-4],el:[3,6],fov:30,wide:{fit:0.72,shift:[-0.4,0.04]},tall:{fit:0.8,shift:[0,0.34]},aperture:8,env:[1.4,1.6]}};async function HX({canvas:J,layer:Q,reducedMotion:$,mobile:Z,onReady:K,onSealed:W}){let X=new EZ({canvas:J,antialias:!1,alpha:!1,powerPreference:"high-performance",stencil:!1});if(X.toneMapping=H9,X.toneMappingExposure=1.05,X.outputColorSpace=S8,X.shadowMap.enabled=!0,X.shadowMap.type=X9,X.setClearColor(263430,1),Z)X.transmissionResolutionScale=0.6;let Y=Math.min(window.devicePixelRatio||1,Z?1.6:2);if(navigator.deviceMemory&&navigator.deviceMemory<=2)Y=Math.min(Y,1.2);let H=window.matchMedia("(min-width: 900px) and (orientation: landscape)"),U=new j7;U.background=new b0(263430),U.environment=R5(X),U.environmentIntensity=1,U.fog=new S7(329224,1.9,4.2);let N=new vJ(30,1,0.05,20),E=new o8({color:16777215,metalness:0,roughness:0.03,transmission:1,thickness:0.055,ior:1.5,dispersion:1.4,attenuationColor:new b0("#79cfdd"),attenuationDistance:0.3,specularIntensity:1,envMapIntensity:1.15,side:cJ}),G=JX();G.repeat.set(6.25,22.22222222222222);let D=QX();{let g0=(700-XX)*V8,ZJ=(YX-525)*V8;D.repeat.set(5.88235294117647,23.52941176470588),D.offset.set(-(g0-0.085)/0.17,-(ZJ-0.02125)/0.0425)}let M=new o8({color:new b0("#d3d7dc"),metalness:1,roughness:0.5,roughnessMap:G,anisotropy:0.6,anisotropyRotation:0,bumpMap:D,bumpScale:4,aoMap:D,aoMapIntensity:0.55,envMapIntensity:1.25}),I=new o8({color:new b0("#d4d7db"),metalness:1,roughness:0.3,anisotropy:0.55,anisotropyRotation:0,envMapIntensity:1.2,side:cJ}),F=new o8({color:new b0("#0b1a1e"),roughness:0.15,metalness:0,emissive:new b0("#6fe3f6"),emissiveIntensity:0,clearcoat:1}),q=eW(Z?512:1024);for(let p0 of[q.albedo,q.rough])p0.repeat.set(5,5);let C=new o8({color:16777215,map:q.albedo,roughnessMap:q.rough,roughness:1,metalness:0,bumpMap:q.rough,bumpScale:0.25,clearcoat:0.35,clearcoatRoughness:0.32,envMapIntensity:0.9}),A=new O8;A.position.y=0.0005,U.add(A);let L=0.046,_=new kJ(_Z(VZ,L,0.0062,7,40),E),P=new kJ(_Z(BZ,L,0.0062,7,28),E);A.add(_,P);let z=0.016,O=new O8,V=new kJ(_Z(F5,z,0.0032,6,36),M);V.castShadow=!0,V.receiveShadow=!0,O.add(V);let h=z/2+0.0032,[y,b]=B8(512,525),u=58*V8,w=0.0078,m=[[u*1.08,0],[u*1.02,0.0007],[u,0.0012],[u,w-0.0016],[u*0.965,w-0.0006],[u*0.9,w],[u*0.34,w],[u*0.3,w-0.0006],[u*0.2,w-0.0006],[0,w-0.0004]].map(([p0,a0])=>new Z0(p0,a0)),o=new m7(m,96);o.rotateX(Math.PI/2),o.computeTangents();let p=new kJ(o,I);p.position.set(y,b,h-0.0002),p.castShadow=!0,O.add(p);let[W0,c]=B8(884,525),r=new kJ(new f7(0.0017,0.013,6,16),F);r.position.set(W0,c,h-0.0006),r.scale.set(1,1,0.6),O.add(r),O.position.y=IZ*V8,A.add(O);let Q0=new kJ(new b7(4.2,96),C);Q0.rotation.x=-Math.PI/2,Q0.receiveShadow=!0,U.add(Q0);let T0=new kJ(new h7(4.2,4.2,6,96,1,!0,Math.PI*0.35,Math.PI*1.3),new G8({map:$X(),side:hJ,fog:!1}));T0.material.color.setScalar(1.6),T0.position.y=2.6,U.add(T0);let S0=(p0,a0,g0,ZJ)=>{let VJ=new kJ(new i8(a0,g0),new G8({map:p0,transparent:!0,depthWrite:!1,side:cJ,...ZJ}));return VJ.rotation.x=-Math.PI/2,VJ},WJ=S0(ZX(256,[[0,"rgba(0,0,0,0.92)"],[0.45,"rgba(0,0,0,0.55)"],[1,"rgba(0,0,0,0)"]]),0.34,0.12,{});WJ.position.set(-0.012,0.0006,0.004),U.add(WJ);let n0=[131,96,717,797],n=0.2,K0=new O8;K0.rotation.y=-0.32,K0.position.set(0,0.0008,0);let X0=kZ([VZ,BZ],n0,{size:512,blur:26,color:"rgba(0,0,0,0.62)"}),j0=S0(X0,0.35842293906810035,n/0.62,{});j0.scale.y=-1,j0.position.set(0,0,n/2+0.012),K0.add(j0);let x0=kZ([VZ,BZ],n0,{size:512,blur:14,color:"rgba(150,232,246,1)"}),B0=S0(x0,0.3046594982078853,n*0.8/0.62,{blending:Y9,opacity:0.075});B0.scale.y=-1,B0.position.set(0.004,0.0004,n*0.4+0.02),K0.add(B0),U.add(K0);let s0=new u7(16774892,9,0,0.42,1,2);s0.position.set(-0.75,1.15,-0.95),s0.target.position.set(0,0.08,0.05),s0.castShadow=!0,s0.shadow.mapSize.set(Z?1024:2048,Z?1024:2048),s0.shadow.camera.near=0.6,s0.shadow.camera.far=3,s0.shadow.bias=-0.0004,s0.shadow.normalBias=0.002,s0.shadow.radius=6,U.add(s0,s0.target);let t=new u7(15332607,5,0,0.55,1,2);t.position.set(0.45,1.6,1.1),t.target.position.set(0,0,0),U.add(t,t.target);let $0=new s6(8379632,0.35,0,2);$0.position.set(0.5,0.3,-0.6),U.add($0);let Y0={center:new j(0,0.112,0),knob:new j(y,b+IZ*V8,h+w),glass:new j(...B8(250,205),L/2+0.006),led:new j(W0,c+IZ*V8,h)},G0=new Set(["knob","led"]),O0=(p0,a0,g0)=>{if(g0.copy(Y0[p0]),G0.has(p0))g0.x+=f(a0)*V8;return g0},z0=new Z0,v0={type:PJ,samples:Z?2:4,depthTexture:new v8(1,1)},h0=new FZ(X,new IJ(1,1,v0));h0.addPass(new OZ(U,N));let d0=new LZ(N,Z?24:40);h0.addPass(d0);let T=new I9(new Z0(256,256),0.22,0.5,1.6);h0.addPass(T),h0.addPass(new RZ);let XJ=new a7(aW());h0.addPass(XJ);let i0=0,o0=0;function B(p0){let{clientWidth:a0,clientHeight:g0}=J;if(!p0&&a0===i0&&Math.abs(g0-o0)<120)return;i0=a0,o0=g0,X.setPixelRatio(Y),X.setSize(a0,g0,!1),h0.setPixelRatio(Y),h0.setSize(a0,g0),X.getDrawingBufferSize(z0),XJ.uniforms.resolution.value.copy(z0),N.aspect=a0/g0,l(),C0=!0}let R={hero:".hero__inner",access:".access__panel"},S={};function l(){let p0=J.clientHeight,a0=document.getElementById("nav"),g0=(a0?a0.getBoundingClientRect().bottom:64)+6;for(let ZJ of Object.keys(R)){S[ZJ]=null;let VJ=document.querySelector(`[data-shot="${ZJ}"]`),DJ=VJ&&VJ.querySelector(R[ZJ]);if(!VJ||!DJ||H.matches)continue;let gJ=DJ.getBoundingClientRect().top-VJ.getBoundingClientRect().top-10,wJ=gJ-g0;if(wJ<60)continue;let E8=Math.min(WX[ZJ].tall.fit,Math.max(0.36,0.9*wJ/(p0*N.aspect)));S[ZJ]={fit:E8,shift:[0,1-(g0+gJ)/p0]}}}let e=[...document.querySelectorAll("[data-shot]")],H0=Q?[...Q.querySelectorAll("[data-anchor]")]:[],N0=null,s=0,a=!1,M0=null,C0=!0,E0=$;function U0(){let p0=window.innerHeight,a0=null,g0=0,ZJ=0;for(let VJ of e){let DJ=VJ.getBoundingClientRect(),gJ=Math.min(p0,DJ.bottom)-Math.max(0,DJ.top);if(gJ>g0){g0=gJ,a0=VJ;let wJ=VJ.dataset.shot==="hero"?-DJ.top/Math.max(1,DJ.height):(p0-DJ.top)/(p0+DJ.height);ZJ=M5(wJ)}}if(a=g0>1,N0=a0?a0.dataset.shot:null,s=E0?N0==="hero"?0:0.5:ZJ,N0!==M0)M0=N0,C0=!0}let A0={x:0,y:0,sx:0,sy:0};if(!Z&&!$)window.addEventListener("pointermove",(p0)=>{A0.x=p0.clientX/window.innerWidth-0.5,A0.y=p0.clientY/window.innerHeight-0.5},{passive:!0});let f0=0.75,e0=1.45;function f(p0){if($)return 0;if(p0<=f0)return KX;if(p0<e0)return KX*(1-k5((p0-f0)/(e0-f0)));let a0=(p0-e0)/0.32;if(a0>=1)return 0;return 5*Math.sin(a0*Math.PI)*(1-a0)}function q0(p0){if($)return 1;if(p0<e0)return 0;let a0=p0-e0;return a0<0.06?a0/0.06*1.8:1+0.8*Math.exp(-(a0-0.06)*5)}let i=new j,D0=new j,V0=new j,J0=new j,F0=!1;function u0(p0,a0,g0){let ZJ=WX[p0],DJ=H.matches?ZJ.wide:S[p0]||ZJ.tall,gJ=L5(a0),wJ=E0?0:1,E8=(AZ(ZJ.az[0],ZJ.az[1],gJ)+wJ*(Math.sin(g0*0.13)*1.6+A0.sx*5))*CZ,r8=(AZ(ZJ.el[0],ZJ.el[1],gJ)+wJ*(Math.sin(g0*0.21+1.3)*0.6-A0.sy*3))*CZ;N.fov=ZJ.fov;let $Q=Math.tan(ZJ.fov*CZ/2)*Math.min(1,N.aspect),K7=ZJ.radius/(DJ.fit*$Q)*(1+0.04*(1-gJ))*(1-wJ*0.01*Math.sin(g0*0.09));O0(ZJ.target,g0,V0),D0.set(Math.sin(E8)*Math.cos(r8),Math.sin(r8),Math.cos(E8)*Math.cos(r8)).multiplyScalar(K7).add(V0),N.position.copy(D0),N.lookAt(V0),N.near=Math.max(0.02,K7*0.2),N.far=20,N.updateProjectionMatrix(),N.projectionMatrix.elements[8]=-DJ.shift[0],N.projectionMatrix.elements[9]=-DJ.shift[1],N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),O0(ZJ.focus,g0,J0);let k=J0.distanceTo(N.position);d0.uniforms.focus.value=k;let v=z0.y/900;d0.uniforms.aperture.value=GJ.dof?ZJ.aperture*v:0,d0.uniforms.maxCoc.value=18*v,U.environmentRotation.y=AZ(ZJ.env[0],ZJ.env[1],gJ)+(E0?0:Math.sin(g0*0.07)*0.08)}let GJ={dof:!0};function YJ(){if(!H0.length)return;let{clientWidth:p0,clientHeight:a0}=J;for(let g0 of H0){let ZJ=g0.dataset.shot===N0&&a&&g0.offsetParent!==null;if(ZJ){O0(g0.dataset.anchor,xJ,i),i.project(N);let VJ=(i.x*0.5+0.5)*p0,DJ=(-i.y*0.5+0.5)*a0;if(!g0._tw)g0._tw=g0.querySelector(".anno__text").offsetWidth+62,g0._side=g0.classList.contains("anno--up")?"up":g0.classList.contains("anno--left")?"left":"right",g0._avoid=g0.dataset.avoid?[...document.querySelectorAll(g0.dataset.avoid)]:[];let gJ=(g0._tw-62)/2,wJ=g0._side==="up"?[VJ-gJ,DJ-104,VJ+gJ,DJ-80]:g0._side==="left"?[VJ-g0._tw,DJ-12,VJ-6,DJ+26]:[VJ+6,DJ-12,VJ+g0._tw,DJ+26],E8=wJ[0]>12&&wJ[2]<p0-12&&wJ[1]>70&&DJ<a0-20;for(let r8 of g0._avoid){if(!E8)break;let t8=r8.getBoundingClientRect();if(wJ[0]<t8.right+16&&wJ[2]>t8.left-16&&wJ[1]<t8.bottom+8&&wJ[3]>t8.top-8)E8=!1}if(!E8)ZJ=!1;else g0.style.transform=`translate3d(${VJ.toFixed(1)}px, ${DJ.toFixed(1)}px, 0)`}g0.classList.toggle("is-on",ZJ&&F0)}}let xJ=0,nJ=0,A9=0,C9=0,h8=0,Z7=!0;function e7(p0){let a0=f(p0);O.position.x=a0*V8;let g0=q0(p0);if(F.emissiveIntensity=g0*7,!F0&&($||p0>=e0))F0=!0,W&&W();A0.sx+=(A0.x-A0.sx)*0.05,A0.sy+=(A0.y-A0.sy)*0.05,XJ.uniforms.time.value=p0}function a8(){if(!N0)return;u0(N0,s,xJ),e7(xJ),h0.render(),YJ()}if(B(!0),U0(),!N0)N0="hero";await X.compileAsync(U,N),a8(),K&&K(),window.addEventListener("resize",()=>B(!1));function N8(p0){if(requestAnimationFrame(N8),document.hidden){nJ=p0;return}let a0=nJ?Math.min(0.05,(p0-nJ)/1000):0.016;if(nJ=p0,U0(),!a)return;if(E0){if(!C0)return;C0=!1,a8();return}if(xJ+=a0,a8(),C0=!1,Z7){if(A9++,A9>30&&a0>0.028)C9++;if(A9>=150){if(C9>50&&h8<3){if(h8++,h8===1)Y=Math.max(1,Y*0.75),X.transmissionResolutionScale=0.6;else if(h8===2)Y=1,T.enabled=!1,GJ.dof=!1;else E0=!0,Z7=!1;B(!0)}else Z7=!1;A9=0,C9=0}}}return requestAnimationFrame(N8),{debug:{renderer:X,scene:U,camera:N,composer:h0,setTime:(p0)=>{xJ=p0,a8()}}}}var t7=document.documentElement,QQ=document.getElementById("gl-canvas"),V5=document.getElementById("gl-annotations"),B5=window.matchMedia("(prefers-reduced-motion: reduce)").matches,I5=window.matchMedia("(pointer: coarse)").matches||window.innerWidth<820;function zZ(){t7.classList.add("is-sealed")}function _5(){try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}}async function UX(){let J=navigator.connection&&navigator.connection.saveData;if(!QQ||J||!_5()){t7.classList.add("no-webgl"),zZ(),window.__ready=!0;return}try{if(document.fonts&&document.fonts.load)await Promise.race([Promise.all([document.fonts.load('500 120px "Familjen Grotesk"'),document.fonts.load('500 34px "IBM Plex Mono"')]),new Promise(($)=>setTimeout($,1500))]);let Q=await HX({canvas:QQ,layer:V5,reducedMotion:B5,mobile:I5,onReady:()=>{t7.classList.add("gl-ready"),window.__ready=!0},onSealed:zZ});window.__gl=Q.debug}catch(Q){console.warn("glasslatch: WebGL scene unavailable, showing poster.",Q),t7.classList.add("no-webgl"),zZ(),window.__ready=!0}}QQ&&QQ.addEventListener("webglcontextlost",(J)=>{J.preventDefault(),t7.classList.add("no-webgl")});var GX=()=>window.requestIdleCallback?window.requestIdleCallback(UX,{timeout:700}):setTimeout(UX,60);if(document.readyState==="complete")GX();else window.addEventListener("load",GX,{once:!0});})();
