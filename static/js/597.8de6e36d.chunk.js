"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[597],{597:function(e,t,n){n.r(t);var r=n(433),c=n(861),a=n(439),o=n(757),u=n.n(o),s=n(984),i=n(791),p=n(689),l=n(390),f=n(416),h=n(184);t.default=function(){var e=(0,p.UO)().id,t=(0,i.useState)([]),n=(0,a.Z)(t,2),o=n[0],v=n[1];return(0,i.useEffect)((function(){var t="https://image.tmdb.org/t/p/original";function n(){return n=(0,c.Z)(u().mark((function e(n){var c,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.Jh)(n);case 2:c=e.sent,a=c.data.cast,console.log("cast",a),a.map((function(e){return console.log(e),v((function(n){return[].concat((0,r.Z)(n),[{name:e.name,character:e.character,image:null!==e.profile_path?"".concat(t).concat(e.profile_path):null}])}))}));case 6:case"end":return e.stop()}}),e)}))),n.apply(this,arguments)}!function(e){n.apply(this,arguments)}(e)}),[e]),(0,h.jsxs)(f.e,{children:[0===o.length&&(0,h.jsx)("div",{children:"Seems like there is no information about the cast!"}),o.map((function(e){return(0,h.jsxs)("div",{className:"item",children:[(0,h.jsx)("img",{src:e.image?e.image:"https://static.vecteezy.com/system/resources/previews/006/693/445/original/camera-icon-template-black-color-editable-camera-icon-symbol-flat-illustration-for-graphic-and-web-design-free-vector.jpg",alt:e.name,width:"240px"}),(0,h.jsx)("p",{children:e.name}),(0,h.jsxs)("p",{className:"role",children:[(0,h.jsx)("span",{children:"As"})," ",(0,h.jsx)("span",{children:e.character})]})]},(0,s.x0)())}))]})}},390:function(e,t,n){n.d(t,{BG:function(){return p},Bt:function(){return h},Dw:function(){return l},Jh:function(){return f},Zn:function(){return i}});var r=n(861),c=n(757),a=n.n(c),o=n(243),u="5e62b2453973c629f1496ace3a4b7719",s="https://api.themoviedb.org/3/",i=function(){var e=(0,r.Z)(a().mark((function e(){var t,n,r=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,e.prev=1,e.next=4,o.Z.get("".concat(s,"trending/movie/day?api_key=").concat(u,"&page=").concat(t));case 4:return n=e.sent,console.log(n),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(1),console.dir(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(s,"movie/").concat(t,"?api_key=").concat(u));case 3:return n=e.sent,console.log(n),e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(s,"search/movie?api_key=").concat(u,"&query=").concat(t));case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(s,"movie/").concat(t,"/credits?api_key=").concat(u));case 3:return n=e.sent,console.log("api cast",n),e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(s,"movie/").concat(t,"/reviews?api_key=").concat(u));case 3:return n=e.sent,console.log("api reviews",n),e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},984:function(e,t,n){n.d(t,{x0:function(){return r}});var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=597.8de6e36d.chunk.js.map