(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[7],{55:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(21),r=a(22),c=a(24),o=a(23),i=a(25),l=a(0),s=a.n(l),u=a(57),m=(a(56),function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{style:this.props.style,className:"scroll",ref:"scroll"},s.a.createElement("div",{className:"scrollContent"},this.props.children))}},{key:"componentDidMount",value:function(){new u.a(this.refs.scroll,{tap:!0,click:!0,probeType:3,freeScroll:!0})}}]),t}(l.Component))},56:function(e,t,a){},58:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(21),r=a(22),c=a(24),o=a(23),i=a(25),l=a(0),s=a.n(l),u=a(26),m=(a(59),[{id:1,title:"\u9996\u9875",icon:"iconfont icon-sanjiaoxing",to:"/home"},{id:2,title:"\u53d1\u73b0",icon:"iconfont icon-zhengfangxing",to:"/found"},{id:3,title:"",icon:"iconfont icon-shangchuan",to:"/upload"},{id:4,title:"\u901a\u77e5",icon:"iconfont icon-yuan",to:"/notice"},{id:5,title:"\u6211\u7684",icon:"iconfont icon-cha",to:"/mine"}]),p=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{id:"tabs",className:"border-top"},m.map((function(e){return 3===e.id?s.a.createElement(u.c,{key:e.id,to:e.to},s.a.createElement("em",{className:e.icon})):s.a.createElement(u.c,{key:e.id,to:e.to},s.a.createElement("em",{className:e.icon}),s.a.createElement("span",null,e.title))})))}}]),t}(l.Component)},59:function(e,t,a){},62:function(e,t,a){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var a=[],n=!0,r=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(l){r=!0,c=l}finally{try{n||null==i.return||i.return()}finally{if(r)throw c}}return a}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}a.d(t,"a",(function(){return n}))},66:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(17),r=a(28),c=a(8),o=a.n(c),i=a(11),l=a(62),s=a(0),u=a.n(s),m=a(55),p=a(58),d=a(15),f=a(27),b=a(26);a(66);function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function O(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t.default=Object(s.memo)((function(e){var t=Object(s.useState)([]),a=Object(l.a)(t,2),r=a[0],c=a[1],y=Object(s.useState)(""),h=Object(l.a)(y,2),j=h[0],E=h[1],v=Object(s.useState)(),g=Object(l.a)(v,2),N=g[0],k=g[1],w=Object(s.useState)("- The End -"),x=Object(l.a)(w,2),S=x[0],P=x[1],C=Object(s.useRef)();function A(e){return I.apply(this,arguments)}function I(){return(I=Object(i.a)(o.a.mark((function e(t){var a,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P("\u70b9\u51fb\u52a0\u8f7d\u66f4\u591a..."),a="next"===t?j:t?f.a.SEARCH.replace("{{key}}",t):f.a.SEARCH.replace("{{key}}",C.current.value),e.next=4,Object(d.a)(a);case 4:(i=e.sent).nextPageUrl?E(i.nextPageUrl.replace("http://baobab.kaiyanapp.com/","/")):E(""),r.itemList&&"next"===t?c(O({},r,{itemList:[].concat(Object(n.a)(r.itemList),Object(n.a)(i.itemList))})):c(i);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=Object(s.useMemo)((function(){return r.itemList&&r.itemList.filter((function(e){return"video"===e.type})).map((function(e){return console.log(e),u.a.createElement("div",{className:"item border-bottom",key:Math.random()},u.a.createElement(b.b,{to:{pathname:"/home/detail",state:{id:e.data.id}}},u.a.createElement("img",{src:e.data.cover.detail.replace("quality/60","quality/1000"),alt:e.data.id})),u.a.createElement("span",{className:"duration"},parseInt(e.data.duration/60)<10?"0"+parseInt(e.data.duration/60):parseInt(e.data.duration/60),":",e.data.duration%60<10?"0"+e.data.duration%60:e.data.duration%60),u.a.createElement("div",{className:"description"},u.a.createElement("div",{className:"headIcon"},u.a.createElement("img",{src:e.data.author.icon,alt:e.data.author.id})),u.a.createElement("div",{className:"center text-overflow"},u.a.createElement("h2",{className:"text-overflow"},e.data.title),u.a.createElement("p",null,u.a.createElement("span",{className:"text-overflow"},e.data.author.name),"\xa0/\xa0",u.a.createElement("span",null,"#",e.data.category))),u.a.createElement("em",{className:"iconfont icon-fenxiang"})))}))}),[r]),L=N&&N.map((function(e){return u.a.createElement("div",{className:"categoryItem",key:e.defaultAuthorId,onClick:function(){A(e.name)}},u.a.createElement("img",{src:e.bgPicture,alt:e.defaultAuthorId}),u.a.createElement("span",{className:"title"},"#",e.name))}));return Object(s.useEffect)((function(){function e(){return(e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.a)(f.a.SHOW_CATEGORY);case 2:t=e.sent,k(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),u.a.createElement("div",{className:"found page"},u.a.createElement("div",{className:"top border-bottom"},u.a.createElement("input",{ref:C,onKeyDown:function(e){13===e.keyCode&&""!==C&&A()},placeholder:"\u8bf7\u8f93\u5165\u5173\u952e\u8bcd",type:"text",autoFocus:!0}),u.a.createElement("span",{onClick:function(){""!==C&&A()}})),u.a.createElement(m.a,{className:"scroll"},u.a.createElement("h1",null,"\u70ed\u95e8\u5206\u7c7b"),u.a.createElement("div",{className:"hscroll"},u.a.createElement("div",{className:"cateBox border-bottom"},L)),u.a.createElement("div",{className:"result"},D),u.a.createElement("div",{className:"loadMore",onClick:function(){j?A("next"):P("- The End -")}},S)),u.a.createElement(p.a,null))}))}}]);
//# sourceMappingURL=7.ac8588f2.chunk.js.map