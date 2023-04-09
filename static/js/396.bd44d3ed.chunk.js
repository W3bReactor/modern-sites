"use strict";(self.webpackChunkcutaway=self.webpackChunkcutaway||[]).push([[396],{4396:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var r=n(2791),o=n(3869),i=n(885),a=n(4942),s=n(1315),c=n(4753);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var u=["horizontal","factor","offset","speed","sticky"],d=["pages","innerStyle","config","enabled","horizontal","children"],p=r.createContext(null);function h(e){return e?"scrollLeft":"scrollTop"}function v(e,t){return r.Children.map(e,(function(e){return((n=e).type?n.type===r.Fragment:n===r.Fragment)?v(e.props.children,t):t(e);var n}))}var m="translate3d(0px,0px,0px)",g="translate(0px,0px)",y=r.memo(r.forwardRef((function(e,t){var n,o=e.horizontal,i=e.factor,d=void 0===i?1:i,h=e.offset,v=void 0===h?0:h,m=e.speed,g=void 0===m?0:m,y=e.sticky,w=f(e,u),b=(0,r.useContext)(p),x=(0,s.Pr)((function(){var e;if(y){e=(y.start||0)*b.space}else{var t=Math.floor(v)*b.space,n=b.space*v+t*g;e=-b.current*g+n}return new c.Controller({space:y?b.space:b.space*d,translate:e})}),[]),k=(0,s.Pr)((function(){return{horizontal:void 0===o||y?b.horizontal:o,sticky:void 0,isSticky:!1,setPosition:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(y)z(e,t);else{var r=Math.floor(v)*e,o=e*v+r*g;x.start({translate:-t*g+o,config:b.config,immediate:n})}},setHeight:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];x.start({space:y?e:e*d,config:b.config,immediate:t})}}}),[]);(0,s.tf)((function(){if(y){var e=y.start||0,t=y.end||e+1;k.sticky={start:e,end:t}}})),r.useImperativeHandle(t,(function(){return k}));var j=(0,r.useRef)(),z=function(e,t){var n=k.sticky.start*e,r=k.sticky.end*e,o=t>=n&&t<=r;o!==k.isSticky&&(k.isSticky=o,j.current.style.position=o?"sticky":"absolute",x.set({translate:o?0:t<n?n:r}))};(0,s.tf)((function(){if(b)return b.layers.add(k),b.update(),function(){b.layers.delete(k),b.update()}}));var E=x.springs.translate.to(k.horizontal?function(e){return"translate3d(".concat(e,"px,0,0)")}:function(e){return"translate3d(0,".concat(e,"px,0)")});return r.createElement(c.a.div,l({},w,{ref:j,style:l((n={position:"absolute",top:0,bottom:0,left:0,right:0,backgroundSize:"auto",backgroundRepeat:"no-repeat",willChange:"transform"},(0,a.Z)(n,k.horizontal?"height":"width","100%"),(0,a.Z)(n,k.horizontal?"width":"height",x.springs.space),(0,a.Z)(n,"WebkitTransform",E),(0,a.Z)(n,"msTransform",E),(0,a.Z)(n,"transform",E),n),w.style)}))}))),w=r.memo(r.forwardRef((function(e,t){var n,o=(0,r.useState)(!1),u=(0,i.Z)(o,2),y=u[0],w=u[1],b=e.pages,x=e.config,k=void 0===x?c.config.slow:x,j=e.enabled,z=void 0===j||j,E=e.horizontal,S=void 0!==E&&E,T=e.children,C=f(e,d),Z=(0,r.useRef)(),P=(0,r.useRef)(),O=(0,s.Pr)((function(){return{config:k,horizontal:S,busy:!1,space:0,current:0,offset:0,controller:new c.Controller({scroll:0}),layers:new Set,container:Z,content:P,update:function(){return W()},scrollTo:function(e){return F(e)},stop:function(){return O.controller.stop()}}}),[]);(0,r.useEffect)((function(){O.config=k}),[k]),r.useImperativeHandle(t,(function(){return O}));var W=function(){var e=Z.current;if(e){var t=S?"clientWidth":"clientHeight";O.space=e[t];var n=h(S);z?O.current=e[n]:e[n]=O.current=O.offset*O.space;var r=P.current;if(r){var o=S?"width":"height";r.style[o]="".concat(O.space*b,"px")}O.layers.forEach((function(e){e.setHeight(O.space,!0),e.setPosition(O.space,O.current,!0)}))}},F=function(e){var t=Z.current,n=h(S);O.offset=e,O.controller.set({scroll:O.current}),O.controller.stop().start({scroll:e*O.space,config:k,onChange:function(e){var r=e.value.scroll;t[n]=r}})};(0,r.useEffect)((function(){return O.update()})),(0,s.tf)((function(){w(!0);var e=function(){var e=function(){return O.update()};s.Wn.onFrame(e),setTimeout(e,150)};return window.addEventListener("resize",e,!1),function(){return window.removeEventListener("resize",e,!1)}}));var H=z?{overflowY:S?"hidden":"scroll",overflowX:S?"scroll":"hidden"}:{overflowY:"hidden",overflowX:"hidden"};return r.createElement(c.a.div,l({},C,{ref:Z,onScroll:function(e){O.busy||(O.busy=!0,O.current=e.target[h(S)],s.Wn.onStart((function(){O.layers.forEach((function(e){return e.setPosition(O.space,O.current)})),O.busy=!1})))},onWheel:z?O.stop:void 0,onTouchStart:z?O.stop:void 0,style:l({position:"absolute",width:"100%",height:"100%"},H,{WebkitOverflowScrolling:"touch",WebkitTransform:g,msTransform:g,transform:m},C.style)}),y&&r.createElement(r.Fragment,null,r.createElement(c.a.div,{ref:P,style:l((n={overflow:"hidden",position:"absolute"},(0,a.Z)(n,S?"height":"width","100%"),(0,a.Z)(n,S?"width":"height",O.space*b),(0,a.Z)(n,"WebkitTransform",g),(0,a.Z)(n,"msTransform",g),(0,a.Z)(n,"transform",m),n),e.innerStyle)},r.createElement(p.Provider,{value:O},v(T,(function(e){return!e.props.sticky&&e})))),r.createElement(p.Provider,{value:O},v(T,(function(e){return e.props.sticky&&e})))))}))),b=n(1694),x=n.n(b),k=n(4864),j=n(7689),z=n(157),E=n(184),S=function(e){var t=e.theme,n=x()({mainDark:t===k.n.DARK,mainLight:t===k.n.LIGHT}),r=(0,j.UO)().content;return(0,j.TH)().pathname.includes("modern-sites/frontend")?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(z.b,{theme:t}),(0,E.jsx)(j.j3,{})]}):(0,E.jsx)(E.Fragment,{children:(0,E.jsx)("div",{children:r?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(z.b,{theme:t}),(0,E.jsx)(j.j3,{})]}):(0,E.jsxs)(w,{className:n,pages:2,style:{top:"0",left:"0"},children:[(0,E.jsx)(y,{offset:0,speed:2.5,style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,E.jsx)(o.Q8,{theme:t})}),(0,E.jsx)(y,{offset:1,speed:2.5,style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,E.jsx)(o.XY,{theme:t})})]})})})}}}]);
//# sourceMappingURL=396.bd44d3ed.chunk.js.map