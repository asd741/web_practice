!function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e){let o,n=document.getElementById("canvas"),r=document.getElementById("audio"),i=document.getElementById("time"),l=new AudioContext,c=l.createAnalyser(),a=l.createMediaElementSource(r),u=10,d=3,f=360/d*2,p=new Uint8Array(f),h=n.getContext("2d"),s=200;function g(){n.width=window.innerWidth,n.height=window.innerHeight,i.style.cssText=`\n            border-radius:50%;\n            width:${2*s}px;\n            height:${2*s}px;\n            position:absolute;\n            top:${n.height/2-s}px;\n            left:${n.width/2-s}px;\n            background-image: url("ummm.jpg");\n            background-position: left -60px;\n            background-repeat: no-repeat;\n            opacity: .7;\n        `}function y(){function t(){h.translate(n.width/2,n.height/2),h.rotate(d*Math.PI/180),h.translate(-n.width/2,-n.height/2)}h.clearRect(0,0,n.width,n.height),c.getByteFrequencyData(p),function(){for(let e=0;e<f/2;e++)colorStart=0,colorGap=30,colorStart+e>=360?color=colorStart-360+e/(f/2)*colorGap:color=colorStart+e/(f/2)*colorGap,o=p[e],h.fillStyle=`hsl(${color},70%,60%)`,t(),h.fillRect(n.width/2+s,n.height/2,o,u)}(),function(){for(let e=f/2;e<f;e++)colorStart=0,colorGap=360,colorStart+e>=360?color=colorStart-360+e/(f/2)*colorGap:color=colorStart+e/(f/2)*colorGap,o=p[e]/2,h.fillStyle=`hsl(${color},30%,60%)`,t(),h.fillRect(n.width/2+s,n.height/2,o,u)}(),requestAnimationFrame(y)}window.addEventListener("load",function(){a.connect(c),c.connect(l.destination),window.onresize=g,g(),y()},!1)}]);