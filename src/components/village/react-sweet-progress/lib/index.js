!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports["react-sweet-progress"]=t(require("react")):e["react-sweet-progress"]=t(e.React)}(this,function(e){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=11)}([function(e,t,r){var o,n;!function(){"use strict";function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var n=typeof o;if("string"===n||"number"===n)e.push(o);else if(Array.isArray(o)&&o.length){var i=r.apply(null,o);i&&e.push(i)}else if("object"===n)for(var a in o)s.call(o,a)&&o[a]&&e.push(a)}}return e.join(" ")}var s={}.hasOwnProperty;void 0!==e&&e.exports?(r.default=r,e.exports=r):(o=[],void 0!==(n=function(){return r}.apply(t,o))&&(e.exports=n))}()},function(t,r){t.exports=e},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Progress=void 0;var o=r(8),n=function(e){return e&&e.__esModule?e:{default:e}}(o);t.Progress=n.default},function(e,t,r){"use strict";function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0});var n,s=(t.prefixClass="react-sweet-progress",t.DEFAULT_TRAIL_COLOR="#efefef",t.STATUSES={ACTIVE:"active",SUCCESS:"success",ERROR:"error",DEFAULT:"default"});t.COLOR_MAP=(n={},o(n,s.ACTIVE,"#138ce4"),o(n,s.SUCCESS,"#049e51"),o(n,s.ERROR,"#e23f33"),n)},function(e,t){e.exports={"react-sweet-progress-line":"react-sweet-progress-line","react-sweet-progress-line-inner":"react-sweet-progress-line-inner","react-sweet-progress-line-inner-status-active":"react-sweet-progress-line-inner-status-active","active-anim":"active-anim"}},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var r={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},c=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,r,o,n){var s=t&&t.defaultProps,i=arguments.length-3;if(r||0===i||(r={}),r&&s)for(var a in s)void 0===r[a]&&(r[a]=s[a]);else r||(r=s||{});if(1===i)r.children=n;else if(i>1){for(var l=Array(i),c=0;c<i;c++)l[c]=arguments[c+3];r.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:r,_owner:null}}}(),u=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),f=r(1),p=o(f),y=r(0),d=o(y),h=r(9),v=o(h),b=function(e){function t(){return s(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"getPathStyles",value:function(){var e=this.props,t=(e.prefixClass,e.percent),r=e.strokeWidth,o=e.gapDegree,n=void 0===o?0:o,s=(e.gapPosition,50-r/2),i=-s,a=-2*s,l="M 50,50 m 0,"+i+"\n     a "+s+","+s+" 0 1 1 0,"+-a+"\n     a "+s+","+s+" 0 1 1 "+-0+","+a,c=2*Math.PI*s;return{pathString:l,trailPathStyle:{strokeDasharray:c-n+"px "+c+"px",strokeDashoffset:"-"+n/2+"px",transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s"},strokePathStyle:{strokeDasharray:t/100*(c-n)+"px "+c+"px",strokeDashoffset:"-"+n/2+"px",transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s"}}}},{key:"render",value:function(){var e=this,t=this.props,r=t.prefixClass,o=t.strokeWidth,s=t.strokeColor,i=t.trailColor,a=t.style,u=t.className,f=n(t,["prefixClass","strokeWidth","strokeColor","trailColor","style","className"]),y=(0,d.default)(v.default[r+"-circle"],u),h=this.getPathStyles(),b=h.pathString,m=h.trailPathStyle,g=h.strokePathStyle;return delete f.percent,delete f.gapDegree,delete f.gapPosition,p.default.createElement("svg",l({className:y,viewBox:"0 0 100 100",style:a},f),c("path",{d:b,stroke:i,strokeWidth:o,fillOpacity:"0",style:m}),p.default.createElement("path",{d:b,stroke:s,strokeWidth:o,fillOpacity:"0",ref:function(t){e.path=t},style:g}))}}]),t}(f.Component);t.default=b},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,r,o,n){var s=t&&t.defaultProps,i=arguments.length-3;if(r||0===i||(r={}),r&&s)for(var a in s)void 0===r[a]&&(r[a]=s[a]);else r||(r=s||{});if(1===i)r.children=n;else if(i>1){for(var l=Array(i),c=0;c<i;c++)l[c]=arguments[c+3];r.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:r,_owner:null}}}(),l=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),c=r(1),u=(o(c),r(0)),f=(o(u),r(4)),p=(o(f),function(e){function t(){return n(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){var e=this.props.size?{width:this.props.size,height:this.props.size}:{width:"20px",height:"20px"};switch(this.props.name){case"success":return a("svg",{version:"1.1",viewBox:"0 0 512 512",style:e},void 0,a("path",{fill:"#049e51",d:"M489,255.9c0-0.2,0-0.5,0-0.7c0-1.6,0-3.2-0.1-4.7c0-0.9-0.1-1.8-0.1-2.8c0-0.9-0.1-1.8-0.1-2.7  c-0.1-1.1-0.1-2.2-0.2-3.3c0-0.7-0.1-1.4-0.1-2.1c-0.1-1.2-0.2-2.4-0.3-3.6c0-0.5-0.1-1.1-0.1-1.6c-0.1-1.3-0.3-2.6-0.4-4  c0-0.3-0.1-0.7-0.1-1C474.3,113.2,375.7,22.9,256,22.9S37.7,113.2,24.5,229.5c0,0.3-0.1,0.7-0.1,1c-0.1,1.3-0.3,2.6-0.4,4  c-0.1,0.5-0.1,1.1-0.1,1.6c-0.1,1.2-0.2,2.4-0.3,3.6c0,0.7-0.1,1.4-0.1,2.1c-0.1,1.1-0.1,2.2-0.2,3.3c0,0.9-0.1,1.8-0.1,2.7  c0,0.9-0.1,1.8-0.1,2.8c0,1.6-0.1,3.2-0.1,4.7c0,0.2,0,0.5,0,0.7c0,0,0,0,0,0.1s0,0,0,0.1c0,0.2,0,0.5,0,0.7c0,1.6,0,3.2,0.1,4.7  c0,0.9,0.1,1.8,0.1,2.8c0,0.9,0.1,1.8,0.1,2.7c0.1,1.1,0.1,2.2,0.2,3.3c0,0.7,0.1,1.4,0.1,2.1c0.1,1.2,0.2,2.4,0.3,3.6  c0,0.5,0.1,1.1,0.1,1.6c0.1,1.3,0.3,2.6,0.4,4c0,0.3,0.1,0.7,0.1,1C37.7,398.8,136.3,489.1,256,489.1s218.3-90.3,231.5-206.5  c0-0.3,0.1-0.7,0.1-1c0.1-1.3,0.3-2.6,0.4-4c0.1-0.5,0.1-1.1,0.1-1.6c0.1-1.2,0.2-2.4,0.3-3.6c0-0.7,0.1-1.4,0.1-2.1  c0.1-1.1,0.1-2.2,0.2-3.3c0-0.9,0.1-1.8,0.1-2.7c0-0.9,0.1-1.8,0.1-2.8c0-1.6,0.1-3.2,0.1-4.7c0-0.2,0-0.5,0-0.7  C489,256,489,256,489,255.9C489,256,489,256,489,255.9z",id:"XMLID_3_"}),a("g",{fill:"none",stroke:"#FFFFFF",strokeWidth:30,strokeMiterlimit:10},void 0,a("line",{x1:"213.6",x2:"369.7",y1:"344.2",y2:"188.2"}),a("line",{x1:"233.8",x2:"154.7",y1:"345.2",y2:"266.1"})));case"error":return a("svg",{version:"1.1",viewBox:"0 0 50 50",style:e},void 0,a("circle",{fill:"#e23f33",cx:"25",cy:"25",r:"25"}),a("polyline",{fill:"none",stroke:"#FFFFFF",strokeWidth:3,strokeLinecap:"round",strokeMiterlimit:10,points:"16,34 25,25 34,16"}),a("polyline",{fill:"none",stroke:"#FFFFFF",strokeWidth:3,strokeLinecap:"round",strokeMiterlimit:10,points:"16,16 25,25 34,34"}));default:return null}}}]),t}(c.Component));t.default=p},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e){var t=e.prefixClass,r=e.percent,o=e.className,s=e.status,a=e.background,l=e.trailColor,u=(0,c.default)(f.default[t+"-line"],o),p=(0,c.default)(f.default[t+"-line-inner"],n({},f.default[t+"-line-inner-status-"+s],!!s));return i("div",{className:u,style:{backgroundColor:l}},void 0,i("div",{className:p,style:{width:r+"%",backgroundColor:a}}))}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,r,o,n){var s=t&&t.defaultProps,i=arguments.length-3;if(r||0===i||(r={}),r&&s)for(var a in s)void 0===r[a]&&(r[a]=s[a]);else r||(r=s||{});if(1===i)r.children=n;else if(i>1){for(var l=Array(i),c=0;c<i;c++)l[c]=arguments[c+3];r.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:r,_owner:null}}}(),a=r(1),l=(o(a),r(0)),c=o(l),u=(r(3),r(4)),f=o(u);t.default=s},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},l=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,r,o,n){var s=t&&t.defaultProps,i=arguments.length-3;if(r||0===i||(r={}),r&&s)for(var a in s)void 0===r[a]&&(r[a]=s[a]);else r||(r=s||{});if(1===i)r.children=n;else if(i>1){for(var l=Array(i),c=0;c<i;c++)l[c]=arguments[c+3];r.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:r,_owner:null}}}(),c=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),u=r(1),f=(o(u),r(0)),p=o(f),y=r(3),d=r(10),h=o(d),v=r(7),b=o(v),m=r(5),g=o(m),w=r(6),S=o(w),_=function(e){function t(e){n(this,t);var r=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={status:e.status||y.STATUSES.ACTIVE},r}return i(t,e),c(t,[{key:"getSymbolByStatus",value:function(e,t){switch(e){case y.STATUSES.SUCCESS:return l(S.default,{name:"success",size:t});case y.STATUSES.ERROR:return l(S.default,{name:"error",size:t});default:return this.props.percent+"%"}}},{key:"render",value:function(){var e=this.props,t=e.percent,r=e.status,o=e.theme,n=e.style,s=e.className,i=e.symbolClassName,c=e.type,u=e.width,f=e.strokeWidth,d=null;d=0===t?y.STATUSES.DEFAULT:t>=100&&!r?y.STATUSES.SUCCESS:r||y.STATUSES.ACTIVE;var v=o&&o[d],m=v?v.color:y.COLOR_MAP[d],w=v?v.trailColor:y.DEFAULT_TRAIL_COLOR;if("circle"===c){var S=u||132,_=.16*S+6,O=1.25*_,C=v&&v.symbol||this.getSymbolByStatus(d,O),k=a({width:S,height:S,fontSize:_},n),x=f||6;return l("div",{className:y.prefixClass+"-circle-outer",style:k},void 0,l(g.default,{percent:t,strokeWidth:x,strokeColor:m,trailColor:w,prefixClass:y.prefixClass,gapDegree:0,gapPosition:"top"}),l("div",{className:h.default[y.prefixClass+"-symbol-absolute"]},void 0,l("div",{className:(0,p.default)(h.default[y.prefixClass+"-symbol"],i)},void 0,C)))}var P=v&&v.symbol||this.getSymbolByStatus(d);return l("div",{className:(0,p.default)(h.default[""+y.prefixClass],s),style:n},void 0,l(b.default,{prefixClass:y.prefixClass,percent:t,status:d,background:m,trailColor:w}),l("div",{className:(0,p.default)(h.default[y.prefixClass+"-symbol"],i)},void 0,P))}}]),t}(u.Component);_.defaultProps={percent:0},t.default=_},function(e,t){e.exports={"react-sweet-progress-circle":"react-sweet-progress-circle"}},function(e,t){e.exports={"react-sweet-progress":"react-sweet-progress","react-sweet-progress-symbol":"react-sweet-progress-symbol","react-sweet-progress-symbol-absolute":"react-sweet-progress-symbol-absolute","react-sweet-progress-circle-outer":"react-sweet-progress-circle-outer"}},function(e,t,r){r(2),e.exports=r(2)}])});