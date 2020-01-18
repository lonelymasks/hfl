function init(){!function(){var e,t;RK.STLExporter=function(){},RK.STLExporter.prototype={constructor:THREE.STLExporter,parse:(e=new THREE.Vector3,t=new THREE.Matrix3,function(r){console.log(r);var n="";for(var o in n+="solid exported\n",r)r[o].traverse(function(r){if(r instanceof RK.Mesh){if(0==r.visible)return;var o=r.geometry,a=r.matrixWorld,i=r.skeleton,s=r;if(o instanceof RK.BufferGeometry){var c=o.clone();o=(new RK.Geometry).fromBufferGeometry(o);for(var l=c.getAttribute("skinIndex"),d=c.getAttribute("skinWeight"),p=c.getAttribute("morphTarget0"),f=0;void 0!==p;)f++,p=c.getAttribute("morphTarget"+f);if(void 0!==l){o.skinIndices=[],o.skinWeights=[],o.morphTargets=[];for(var u=0;u<f;u++)o.morphTargets[u]={},o.morphTargets[u].vertices=[];for(var m=0;m<o.vertices.length;m++)for(o.skinIndices.push((new THREE.Vector4).fromBufferAttribute(l,m)),o.skinWeights.push((new THREE.Vector4).fromBufferAttribute(d,m)),u=0;u<f;u++)o.morphTargets[u].vertices.push((new THREE.Vector3).fromBufferAttribute(c.getAttribute("morphTarget"+u)))}}if(o instanceof RK.Geometry){var g=o.vertices,h=o.faces;if(t.getNormalMatrix(a),void 0!==h){m=0;for(var v=h.length;m<v;m++){var y=h[m];e.copy(y.normal).applyMatrix3(t).normalize(),n+="\tfacet normal "+e.x+" "+e.y+" "+e.z+"\n",n+="\t\touter loop\n";var x=[y.a,y.b,y.c];for(u=0;u<3;u++){var b=x[u];if(void 0!==o.skinIndices&&0==o.skinIndices.length)e.copy(g[b]).applyMatrix4(a),n+="\t\t\tvertex "+e.x+" "+e.y+" "+e.z+"\n";else{e.copy(g[b]);var T=[o.skinIndices[b].x,o.skinIndices[b].y,o.skinIndices[b].z,o.skinIndices[b].w],w=[o.skinWeights[b].x,o.skinWeights[b].y,o.skinWeights[b].z,o.skinWeights[b].w],E=[i.boneInverses[T[0]],i.boneInverses[T[1]],i.boneInverses[T[2]],i.boneInverses[T[3]]],R=[i.bones[T[0]].matrixWorld,i.bones[T[1]].matrixWorld,i.bones[T[2]].matrixWorld,i.bones[T[3]].matrixWorld];if("undefined"!==o.morphTargets)for(var k=[],j=[],S=[],A=[],I=0;I<o.morphTargets.length;I++)k[I]=o.morphTargets[I].vertices[b].x,j[I]=o.morphTargets[I].vertices[b].y,S[I]=o.morphTargets[I].vertices[b].z,A[I]=s.morphTargetInfluences[I];var C=new THREE.Vector4;if("undefined"!==s.geometry.morphTargets){var B=new THREE.Vector4(e.x,e.y,e.z);for(I=0;I<o.morphTargets.length;I++)B.lerp(new THREE.Vector4(k[I],j[I],S[I],1),A[I])}for(var L=0;L<4;L++){var K=new THREE.Vector4(e.x,e.y,e.z);K.multiplyScalar(w[L]),K.applyMatrix4(E[L]).applyMatrix4(R[L]),C.add(K)}n+="\t\t\tvertex "+C.x+" "+C.y+" "+C.z+"\n"}}n+="\t\tendloop\n",n+="\tendfacet\n"}}}}});return n+="endsolid exported\n"})},"undefined"!=typeof module&&module.exports?module.exports=RK.STLExporter:"undefined"!=typeof define&&null!==define&&null!==define.amd&&define([],function(){return saveAs});var r,n,o,a,i,s={"margin-left":"20px","font-size":"1.4em",color:"rgba(255, 255, 255, 0.8)",cursor:"pointer"};jQuery("<a />").css(s).text("Export Figure"),n=jQuery("<a />").css(s).text("Export Model (STL)"),o=jQuery("<a />").css(s).text("Export (JSON)"),a=jQuery("<input/>").attr({type:"file",id:"ljson"}).css({display:"none"}).text("Import (JSON)"),i=jQuery("<label/>").attr({for:"ljson"}).css(s).text("Import (JSON)"),(r=jQuery(".characterArea")).append(n),r.append(o),r.append(a),r.append(i),r.css("right",0),n.click(function(e){e.preventDefault();var t=(new RK.STLExporter).parse([CK.character]),r=get_name();download(t,r+".stl","application/sla")}),o.click(function(e){e.preventDefault();var t=JSON.stringify(CK.data),r=get_name();download(t,r+".json","text/plain")}),a.on("change",function(e){e.preventDefault();var t=e.target.files[0],r=new FileReader;r.onload=function(e){e.preventDefault(),CK.change(JSON.parse(e.target.result))},r.readAsText(t)})}()}function inject_script(e,t){var r=document.getElementsByTagName("head")[0],n=document.createElement("script");n.src=e,n.onload=function(e){t()},r.appendChild(n)}function get_name(){(new Date).getUTCMilliseconds().toString(16);var e="Character_uqID";try{var t=CK.character.data.meta.character_name;e=""===t?e:t}catch(e){e instanceof ReferenceError?(console.log("Name of character data location has changed"),console.log(e)):(console.log("Other Error"),console.log(e))}return e}!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():e.download=t()}(this,function(){return function e(t,r,n){function o(e){e=(t=e.split(/[:;,]/))[1];for(var t,r=(t=("base64"==t[2]?atob:decodeURIComponent)(t.pop())).length,n=0,o=new Uint8Array(r);n<r;++n)o[n]=t.charCodeAt(n);return new d([o],{type:e})}function a(e,t){if("download"in l)return l.href=e,l.setAttribute("download",p),l.className="download-js-link",l.innerHTML="downloading...",l.style.display="none",document.body.appendChild(l),setTimeout(function(){l.click(),document.body.removeChild(l),!0===t&&setTimeout(function(){i.URL.revokeObjectURL(l.href)},250)},66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(e)&&(e="data:"+e.replace(/^data:([\w\/\-\+]+)/,"application/octet-stream")),!window.open(e)&&confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")&&(location.href=e),!0;var r=document.createElement("iframe");document.body.appendChild(r),!t&&/^data:/.test(e)&&(e="data:"+e.replace(/^data:([\w\/\-\+]+)/,"application/octet-stream")),r.src=e,setTimeout(function(){document.body.removeChild(r)},333)}var i=window,s=n||"application/octet-stream",c=!r&&!n&&t,l=document.createElement("a");n=function(e){return String(e)};var d=i.Blob||i.MozBlob||i.WebKitBlob||n,p=r||"download";d=d.call?d.bind(i):Blob;if("true"===String(this)&&(s=(t=[t,s])[0],t=t[1]),c&&2048>c.length&&(p=c.split("/").pop().split("?")[0],l.href=c,-1!==l.href.indexOf(c))){var f=new XMLHttpRequest;return f.open("GET",c,!0),f.responseType="blob",f.onload=function(t){e(t.target.response,p,"application/octet-stream")},setTimeout(function(){f.send()},0),f}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(t)){if(!(2096103.424<t.length&&d!==n))return navigator.msSaveBlob?navigator.msSaveBlob(o(t),p):a(t);s=(t=o(t)).type||"application/octet-stream"}else if(/([\x80-\xff])/.test(t)){r=0;for(var u=(c=new Uint8Array(t.length)).length;r<u;++r)c[r]=t.charCodeAt(r);t=new d([c],{type:s})}if(t=t instanceof d?t:new d([t],{type:s}),navigator.msSaveBlob)return navigator.msSaveBlob(t,p);if(i.URL)a(i.URL.createObjectURL(t),!0);else{if("string"==typeof t||t.constructor===n)try{return a("data:"+s+";base64,"+i.btoa(t))}catch(e){return a("data:"+s+","+encodeURIComponent(t))}(s=new FileReader).onload=function(e){a(this.result)},s.readAsDataURL(t)}return!0}}),inject_script("//code.jquery.com/jquery-3.3.1.min.js",function(){inject_script("//cdnjs.cloudflare.com/ajax/libs/three.js/100/three.js",function(){init()})});