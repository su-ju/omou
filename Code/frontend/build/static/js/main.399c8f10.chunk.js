(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{129:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(22),l=a.n(r),c=(a(56),a(47)),i=a(29),h=a(139),s=a(140),u=a(136),m=a(46),g=a(141),d=a(137),f=a(48);var p=function(e){var t=e.data,a=e.localStorageCallback,r=void 0===a?function(e){console.log(e)}:a,l=Object(n.useState)(t),p=Object(i.a)(l,2),y=p[0],E=p[1],w=Object(n.useState)(t[0].thought),S=Object(i.a)(w,2),b=S[0],v=S[1],k=Object(n.useState)(""),x=Object(i.a)(k,2),O=x[0],I=x[1];Object(n.useEffect)((function(){r(y)}),[y,r]);var D=function(){O.trim().length>0?E([].concat(Object(c.a)(y),[{thought:O.trim(),createdAt:Date.now(),lastSeen:Date.now()}])):h.a.notify("Did you even write something?"),I("")};return o.a.createElement(s.a,{className:"App",width:"100%",height:"100%",display:"flex",alignItems:"center",flexDirection:"column",marginBottom:"10rem"},o.a.createElement(s.a,{width:"80vw",height:"100%",display:"flex",alignItems:"center",flexDirection:"column"},o.a.createElement(s.a,{marginTop:"5rem",marginBottom:"3rem",width:"80%"},o.a.createElement(u.a,{size:900,color:m.a.palette.neutral.lightest,marginBottom:"1rem",textAlign:"center",wordWrap:"break-word",height:"6rem",overflowY:"auto"},b),o.a.createElement(s.a,{width:"100%",display:"flex",alignItems:"flex-end",justifyContent:"center",flexDirection:"column"},o.a.createElement(g.a,{onClick:function(){if(y.length<1);else if(y.length<1)v(y[0].thought);else{var e=y.sort((function(e,t){return t.lastSeen-e.lastSeen})),t=e[y.length-1],a=e[0];t.lastSeen=Date.now(),v(a.thought)}},icon:"reset"},"Keep that thought"))),o.a.createElement(s.a,{width:"80%"},o.a.createElement(d.a,{height:"5rem",placeholder:"What do you think?",value:O,onChange:function(e){var t=e.target.value;t.length>140?h.a.notify("Keep your thoughts short!"):I(t)},onKeyUp:function(e){"Enter"===e.key&&D()},padding:24}),o.a.createElement(s.a,{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",flexDirection:"row"},o.a.createElement(f.a,{color:m.a.palette.neutral.lightest},"Characters left: ",140-O.length),o.a.createElement(g.a,{onClick:D,icon:"lock"},"Keep that thought")))))},y=function(){if(function(e){var t;try{t=window[e];var a="__storage_test__";return t.setItem(a,a),t.removeItem(a),!0}catch(n){return n instanceof DOMException&&(22===n.code||1014===n.code||"QuotaExceededError"===n.name||"NS_ERROR_DOM_QUOTA_REACHED"===n.name)&&t&&0!==t.length}}("localStorage")){!1;var e=Date.now(),t=JSON.parse(localStorage.getItem("thoughts"))||[{thought:"I\u2019m too drunk to taste this chicken.",createdAt:e,lastSeen:e}];return o.a.createElement(p,{data:t,localStorageCallback:function(e){localStorage.setItem("thoughts",JSON.stringify(e))}})}return o.a.createElement(p,{data:[{thought:"People say nothing is impossible, but I do nothing every day.",createdAt:1594233153181,lastSeen:1594233153181},{thought:"Nobody realizes that some people expend tremendous energy merely to be normal.",createdAt:1594233235733,lastSeen:1594233235733},{thought:"I\u2019m too drunk to taste this chicken.",createdAt:1594233241368,lastSeen:1594233241368},{thought:"My opinions may have changed, but not the fact that I\u2019m right.",createdAt:1594233246323,lastSeen:1594233246323}]})};l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root"))},51:function(e,t,a){e.exports=a(129)},56:function(e,t,a){}},[[51,1,2]]]);
//# sourceMappingURL=main.399c8f10.chunk.js.map