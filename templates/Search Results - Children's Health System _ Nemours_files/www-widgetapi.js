(function(){var k;function aa(){var a=l,b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},m;
if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var n;a:{var ca={K:!0},da={};try{da.__proto__=ca;n=da.K;break a}catch(a){}n=!1}m=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ea=m;
function fa(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(ea)ea(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.J=b.prototype}
var ia="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ja="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function ka(a,b){if(b){for(var c=ja,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ia(c,d,{configurable:!0,writable:!0,value:f})}}
var la="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}return a};
ka("Object.assign",function(a){return a||la});
var q=this||self;function t(a){return"string"==typeof a}
function v(a){a=a.split(".");for(var b=q,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function ma(){}
function w(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function x(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var y="closure_uid_"+(1E9*Math.random()>>>0),na=0;function oa(a,b,c){return a.call.apply(a.bind,arguments)}
function pa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function z(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?z=oa:z=pa;return z.apply(null,arguments)}
var qa=Date.now||function(){return+new Date};
function C(a,b){var c=a.split("."),d=q;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function ra(a,b){function c(){}
c.prototype=b.prototype;a.J=b.prototype;a.prototype=new c;a.prototype.constructor=a}
;var sa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(t(a))return t(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},D=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=t(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
function ta(a,b){a:{var c=a.length;for(var d=t(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:t(a)?a.charAt(c):a[c]}
function ua(a){return Array.prototype.concat.apply([],arguments)}
function va(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
;function wa(a,b){this.f=a;this.g=b;this.b=0;this.a=null}
wa.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null}else a=this.f();return a};var xa=/&/g,ya=/</g,za=/>/g,Aa=/"/g,Ba=/'/g,Ca=/\x00/g,Da=/[\x00&<>"']/;var E;a:{var Ea=q.navigator;if(Ea){var Fa=Ea.userAgent;if(Fa){E=Fa;break a}}E=""};function Ga(a){var b=F,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
;function G(a,b){this.b=a===Ha&&b||"";this.a=Ia}
var Ia={},Ha={},H=new G(Ha,"");function I(a,b,c){this.f=a===J&&b||"";this.a=a===J&&c||null;this.b=Ja}
var Ja={},J={};function K(){this.a="";this.b=Ka}
var Ka={};function L(a){var b=new K;b.a=a;return b}
L("<!DOCTYPE html>");var M=L("");L("<br>");function La(a){var b=new I(J,H instanceof G&&H.constructor===G&&H.a===Ia?H.b:"type_error:Const",null);a.src=b.a?b.a:(b instanceof I&&b.constructor===I&&b.b===Ja?b.f:"type_error:TrustedResourceUrl").toString()}
;function Ma(a,b){var c,d;var e=document;e=b||e;if(e.querySelectorAll&&e.querySelector&&a)return e.querySelectorAll(a?"."+a:"");if(a&&e.getElementsByClassName){var f=e.getElementsByClassName(a);return f}f=e.getElementsByTagName("*");if(a){var g={};for(c=d=0;e=f[c];c++){var h=e.className,p;if(p="function"==typeof h.split)p=0<=sa(h.split(/\s+/),a);p&&(g[d++]=e)}g.length=d;return g}return f}
function Na(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function Oa(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Pa(a){q.setTimeout(function(){throw a;},0)}
var Qa;
function Ra(){var a=q.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==E.indexOf("Presto")&&(a=function(){var e=Na("IFRAME");e.style.display="none";La(e);document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(M instanceof K&&M.constructor===K&&M.b===Ka?M.a:"type_error:SafeHtml");e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=
z(function(p){if(("*"==h||p.origin==h)&&p.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&-1==E.indexOf("Trident")&&-1==E.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.C;c.C=null;e()}};
return function(e){d.next={C:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in Na("SCRIPT")?function(e){var f=Na("SCRIPT");
f.onreadystatechange=function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;e();e=null};
document.documentElement.appendChild(f)}:function(e){q.setTimeout(e,0)}}
;function Sa(){this.b=this.a=null}
var Ua=new wa(function(){return new Ta},function(a){a.reset()});
Sa.prototype.add=function(a,b){var c=Ua.get();c.set(a,b);this.b?this.b.next=c:this.a=c;this.b=c};
Sa.prototype.remove=function(){var a=null;this.a&&(a=this.a,this.a=this.a.next,this.a||(this.b=null),a.next=null);return a};
function Ta(){this.next=this.b=this.a=null}
Ta.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};
Ta.prototype.reset=function(){this.next=this.b=this.a=null};function Va(a){N||Wa();Xa||(N(),Xa=!0);Ya.add(a,void 0)}
var N;function Wa(){if(q.Promise&&q.Promise.resolve){var a=q.Promise.resolve(void 0);N=function(){a.then(Za)}}else N=function(){var b=Za,c;
!(c="function"!=w(q.setImmediate))&&(c=q.Window&&q.Window.prototype)&&(c=-1==E.indexOf("Edge")&&q.Window.prototype.setImmediate==q.setImmediate);c?(Qa||(Qa=Ra()),Qa(b)):q.setImmediate(b)}}
var Xa=!1,Ya=new Sa;function Za(){for(var a;a=Ya.remove();){try{a.a.call(a.b)}catch(c){Pa(c)}var b=Ua;b.g(a);100>b.b&&(b.b++,a.next=b.a,b.a=a)}Xa=!1}
;function O(){this.f=this.f;this.g=this.g}
O.prototype.f=!1;O.prototype.dispose=function(){this.f||(this.f=!0,this.w())};
O.prototype.w=function(){if(this.g)for(;this.g.length;)this.g.shift()()};var $a=q.JSON.stringify;function P(a){O.call(this);this.m=1;this.h=[];this.i=0;this.a=[];this.b={};this.o=!!a}
ra(P,O);k=P.prototype;k.subscribe=function(a,b,c){var d=this.b[a];d||(d=this.b[a]=[]);var e=this.m;this.a[e]=a;this.a[e+1]=b;this.a[e+2]=c;this.m=e+3;d.push(e);return e};
function ab(a,b,c){var d=Q;if(a=d.b[a]){var e=d.a;(a=ta(a,function(f){return e[f+1]==b&&e[f+2]==c}))&&d.B(a)}}
k.B=function(a){var b=this.a[a];if(b){var c=this.b[b];if(0!=this.i)this.h.push(a),this.a[a+1]=ma;else{if(c){var d=sa(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.a[a];delete this.a[a+1];delete this.a[a+2]}}return!!b};
k.G=function(a,b){var c=this.b[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.o)for(e=0;e<c.length;e++){var g=c[e];bb(this.a[g+1],this.a[g+2],d)}else{this.i++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.a[g+1].apply(this.a[g+2],d)}finally{if(this.i--,0<this.h.length&&0==this.i)for(;c=this.h.pop();)this.B(c)}}return 0!=e}return!1};
function bb(a,b,c){Va(function(){a.apply(b,c)})}
k.clear=function(a){if(a){var b=this.b[a];b&&(D(b,this.B,this),delete this.b[a])}else this.a.length=0,this.b={}};
k.w=function(){P.J.w.call(this);this.clear();this.h.length=0};var cb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function db(a){var b=a.match(cb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function eb(a,b,c){if("array"==w(b))for(var d=0;d<b.length;d++)eb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function fb(a){var b=[],c;for(c in a)eb(c,a[c],b);return b.join("&")}
var gb=/#|$/;var R=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};C("yt.config_",R);function hb(a){var b=arguments;1<b.length?R[b[0]]=b[1]:1===b.length&&Object.assign(R,b[0])}
;function ib(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){jb(b)}}:a}
function jb(a,b){var c=v("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=[],c="ERRORS"in R?R.ERRORS:c,c.push([a,b,void 0,void 0,void 0]),hb("ERRORS",c))}
;var kb=0;C("ytDomDomGetNextId",v("ytDomDomGetNextId")||function(){return++kb});var lb={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function S(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{a=a||window.event;if(!a)return;this.a=a}catch(c){return}for(var b in a)b in lb||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==
this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}
S.prototype.preventDefault=function(){this.a&&(this.a.returnValue=!1,this.a.preventDefault&&this.a.preventDefault())};
S.prototype.stopPropagation=function(){this.a&&(this.a.cancelBubble=!0,this.a.stopPropagation&&this.a.stopPropagation())};
S.prototype.stopImmediatePropagation=function(){this.a&&(this.a.cancelBubble=!0,this.a.stopImmediatePropagation&&this.a.stopImmediatePropagation())};var F=v("ytEventsEventsListeners")||{};C("ytEventsEventsListeners",F);var mb=v("ytEventsEventsCounter")||{count:0};C("ytEventsEventsCounter",mb);
function nb(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Ga(function(e){var f="boolean"==typeof e[4]&&e[4]==!!d,g;if(g=x(e[4])&&x(d))a:{g=e[4];for(var h in g)if(!(h in d)||g[h]!==d[h]){g=!1;break a}for(var p in d)if(!(p in g)){g=!1;break a}g=!0}return!!e.length&&e[0]==a&&e[1]==b&&e[2]==
c&&(f||g)})}
function ob(a){a&&("string"==typeof a&&(a=[a]),D(a,function(b){if(b in F){var c=F[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?pb()||"boolean"==typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete F[b]}}))}
var pb=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=!1;
try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function qb(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=nb(a,b,c,d);if(!e){e=++mb.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new S(h);if(!Oa(h.relatedTarget,function(p){return p==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new S(h);
h.currentTarget=a;return c.call(a,h)};
g=ib(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),pb()||"boolean"==typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);F[e]=[a,b,c,g,d]}}}
;function rb(a){"function"==w(a)&&(a=ib(a));return window.setInterval(a,250)}
;var sb={};function tb(a){return sb[a]||(sb[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var T={},l=[],Q=new P,ub={};function vb(){var a="undefined"!=typeof Symbol&&Symbol.iterator&&l[Symbol.iterator];var b;a?b=a.call(l):b={next:aa()};a=b;for(b=a.next();!b.done;b=a.next())b=b.value,b()}
function wb(a,b){b||(b=document);var c=va(b.getElementsByTagName("yt:"+a)),d="yt-"+a,e=b||document;d=va(e.querySelectorAll&&e.querySelector?e.querySelectorAll("."+d):Ma(d,b));return ua(c,d)}
function U(a,b){var c;"yt:"==a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[tb(b)]:a.getAttribute("data-"+b):null;return c}
function xb(a,b){Q.G.apply(Q,arguments)}
;function yb(a){this.b=a||{};this.f=this.a=!1;a=document.getElementById("www-widgetapi-script");if(this.a=!!("https:"==document.location.protocol||a&&0==a.src.indexOf("https:"))){a=[this.b,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.replace("http://","https://"))}}
function V(a,b){for(var c=[a.b,window.YTConfig||{}],d=0;d<c.length;d++){var e=c[d][b];if(void 0!=e)return e}return null}
function zb(a,b,c){W||(W={},qb(window,"message",z(a.g,a)));W[c]=b}
yb.prototype.g=function(a){if(a.origin==V(this,"host")||a.origin==V(this,"host").replace(/^http:/,"https:")){try{var b=JSON.parse(a.data)}catch(c){return}this.f=!0;this.a||0!=a.origin.indexOf("https:")||(this.a=!0);if(a=W[b.id])a.o=!0,a.o&&(D(a.m,a.A,a),a.m.length=0),a.H(b)}};
var W=null;function X(a,b,c){this.i=this.a=this.b=null;this.h=this[y]||(this[y]=++na);this.f=0;this.o=!1;this.m=[];this.g=null;this.D=c;this.I={};c=document;if(a=t(a)?c.getElementById(a):a)if(c="iframe"==a.tagName.toLowerCase(),b.host||(b.host=c?db(a.src):"https://www.youtube.com"),this.b=new yb(b),c||(b=Ab(this,a),this.i=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.a=a,this.a.id||(a=b=this.a,a=a[y]||(a[y]=++na),b.id="widget"+a),T[this.a.id]=this,window.postMessage){this.g=new P;Bb(this);b=V(this.b,"events");
for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in ub)Cb(this,e)}}
k=X.prototype;k.setSize=function(a,b){this.a.width=a;this.a.height=b;return this};
k.L=function(){return this.a};
k.H=function(a){this.s(a.event,a)};
k.addEventListener=function(a,b){var c=b;"string"==typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.g.subscribe(a,c);Db(this,a);return this};
function Cb(a,b){var c=b.split(".");if(2==c.length){var d=c[1];a.D==c[0]&&Db(a,d)}}
k.destroy=function(){this.a.id&&(T[this.a.id]=null);var a=this.g;a&&"function"==typeof a.dispose&&a.dispose();if(this.i){a=this.a;var b=a.parentNode;b&&b.replaceChild(this.i,a)}else(a=this.a)&&a.parentNode&&a.parentNode.removeChild(a);W&&(W[this.h]=null);this.b=null;a=this.a;for(var c in F)F[c][0]==a&&ob(c);this.i=this.a=null};
k.u=function(){return{}};
function Eb(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.o?a.A(b):a.m.push(b)}
k.s=function(a,b){if(!this.g.f){var c={target:this,data:b};this.g.G(a,c);xb(this.D+"."+a,c)}};
function Ab(a,b){for(var c=document.createElement("iframe"),d=b.attributes,e=0,f=d.length;e<f;e++){var g=d[e].value;null!=g&&""!=g&&"null"!=g&&c.setAttribute(d[e].name,g)}c.setAttribute("frameBorder",0);c.setAttribute("allowfullscreen",1);c.setAttribute("allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+V(a.b,"title"));(d=V(a.b,"width"))&&c.setAttribute("width",d);(d=V(a.b,"height"))&&c.setAttribute("height",d);var h=a.u();h.enablejsapi=
window.postMessage?1:0;window.location.host&&(h.origin=window.location.protocol+"//"+window.location.host);h.widgetid=a.h;window.location.href&&D(["debugjs","debugcss"],function(p){var u=window.location.href;var ha=u.search(gb);b:{var r=0;for(var A=p.length;0<=(r=u.indexOf(p,r))&&r<ha;){var B=u.charCodeAt(r-1);if(38==B||63==B)if(B=u.charCodeAt(r+A),!B||61==B||38==B||35==B)break b;r+=A+1}r=-1}if(0>r)u=null;else{A=u.indexOf("&",r);if(0>A||A>ha)A=ha;r+=p.length+1;u=decodeURIComponent(u.substr(r,A-r).replace(/\+/g,
" "))}null===u||(h[p]=u)});
c.src=V(a.b,"host")+a.v()+"?"+fb(h);return c}
k.F=function(){this.a&&this.a.contentWindow?this.A({event:"listening"}):window.clearInterval(this.f)};
function Bb(a){zb(a.b,a,a.h);a.f=rb(z(a.F,a));qb(a.a,"load",z(function(){window.clearInterval(this.f);this.f=rb(z(this.F,this))},a))}
function Db(a,b){a.I[b]||(a.I[b]=!0,Eb(a,"addEventListener",[b]))}
k.A=function(a){a.id=this.h;a.channel="widget";a=$a(a);var b=this.b;var c=db(this.a.src||"");b=0==c.indexOf("https:")?[c]:b.a?[c.replace("http:","https:")]:b.f?[c]:[c,c.replace("http:","https:")];if(this.a.contentWindow)for(c=0;c<b.length;c++)try{this.a.contentWindow.postMessage(a,b[c])}catch(d){if(d.name&&"SyntaxError"==d.name)jb(d,"WARNING");else throw d;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function Fb(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function Gb(a){return 0==a.search("get")||0==a.search("is")}
;function Y(a,b){if(!a)throw Error("YouTube player element ID required.");var c={title:"video player",videoId:"",width:640,height:360};if(b)for(var d in b)c[d]=b[d];X.call(this,a,c,"player");this.j={};this.l={}}
fa(Y,X);k=Y.prototype;k.v=function(){return"/embed/"+V(this.b,"videoId")};
k.u=function(){var a=V(this.b,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!=window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=V(this.b,"embedConfig")){if(x(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
k.H=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(x(a))for(var c in a)this.j[c]=a[c];break;case "infoDelivery":Hb(this,a);break;case "initialDelivery":window.clearInterval(this.f);this.l={};this.j={};Ib(this,a.apiInterface);Hb(this,a);break;default:this.s(b,a)}};
function Hb(a,b){if(x(b))for(var c in b)a.l[c]=b[c]}
function Ib(a,b){D(b,function(c){this[c]||("getCurrentTime"==c?this[c]=function(){var d=this.l.currentTime;if(1==this.l.playerState){var e=(qa()/1E3-this.l.currentTimeLastUpdated_)*this.l.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:Fb(c)?this[c]=function(){this.l={};
this.j={};Eb(this,c,arguments);return this}:Gb(c)?this[c]=function(){var d=0;
0==c.search("get")?d=3:0==c.search("is")&&(d=2);return this.l[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){Eb(this,c,arguments);
return this})},a)}
k.getVideoEmbedCode=function(){var a=parseInt(V(this.b,"width"),10);var b=parseInt(V(this.b,"height"),10),c=V(this.b,"host")+this.v();Da.test(c)&&(-1!=c.indexOf("&")&&(c=c.replace(xa,"&amp;")),-1!=c.indexOf("<")&&(c=c.replace(ya,"&lt;")),-1!=c.indexOf(">")&&(c=c.replace(za,"&gt;")),-1!=c.indexOf('"')&&(c=c.replace(Aa,"&quot;")),-1!=c.indexOf("'")&&(c=c.replace(Ba,"&#39;")),-1!=c.indexOf("\x00")&&(c=c.replace(Ca,"&#0;")));a='<iframe width="'+a+'" height="'+b+'" src="'+c+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
return a};
k.getOptions=function(a){return this.j.namespaces?a?this.j[a].options||[]:this.j.namespaces||[]:[]};
k.getOption=function(a,b){if(this.j.namespaces&&a&&b)return this.j[a][b]};
function Jb(a){if("iframe"!=a.tagName.toLowerCase()){var b=U(a,"videoid");b&&(b={videoId:b,width:U(a,"width"),height:U(a,"height")},new Y(a,b))}}
;function Z(a,b){var c={title:"Thumbnail",videoId:"",width:120,height:68};if(b)for(var d in b)c[d]=b[d];X.call(this,a,c,"thumbnail")}
fa(Z,X);Z.prototype.v=function(){return"/embed/"+V(this.b,"videoId")};
Z.prototype.u=function(){return{player:0,thumb_width:V(this.b,"thumbWidth"),thumb_height:V(this.b,"thumbHeight"),thumb_align:V(this.b,"thumbAlign")}};
Z.prototype.s=function(a,b){X.prototype.s.call(this,a,b?b.info:void 0)};
function Kb(a){if("iframe"!=a.tagName.toLowerCase()){var b=U(a,"videoid");if(b){b={videoId:b,events:{},width:U(a,"width"),height:U(a,"height"),thumbWidth:U(a,"thumb-width"),thumbHeight:U(a,"thumb-height"),thumbAlign:U(a,"thumb-align")};var c=U(a,"onclick");c&&(b.events.onClick=c);new Z(a,b)}}}
;C("YT.PlayerState.UNSTARTED",-1);C("YT.PlayerState.ENDED",0);C("YT.PlayerState.PLAYING",1);C("YT.PlayerState.PAUSED",2);C("YT.PlayerState.BUFFERING",3);C("YT.PlayerState.CUED",5);C("YT.get",function(a){return T[a]});
C("YT.scan",vb);C("YT.subscribe",function(a,b,c){Q.subscribe(a,b,c);ub[a]=!0;for(var d in T)Cb(T[d],a)});
C("YT.unsubscribe",function(a,b,c){ab(a,b,c)});
C("YT.Player",Y);C("YT.Thumbnail",Z);X.prototype.destroy=X.prototype.destroy;X.prototype.setSize=X.prototype.setSize;X.prototype.getIframe=X.prototype.L;X.prototype.addEventListener=X.prototype.addEventListener;Y.prototype.getVideoEmbedCode=Y.prototype.getVideoEmbedCode;Y.prototype.getOptions=Y.prototype.getOptions;Y.prototype.getOption=Y.prototype.getOption;l.push(function(a){a=wb("player",a);D(a,Jb)});
l.push(function(){var a=wb("thumbnail");D(a,Kb)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||vb();var Lb=v("onYTReady");Lb&&Lb();var Mb=v("onYouTubeIframeAPIReady");Mb&&Mb();var Nb=v("onYouTubePlayerAPIReady");Nb&&Nb();}).call(this);
