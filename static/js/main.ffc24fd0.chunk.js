(this.webpackJsonpsttwins_viewer=this.webpackJsonpsttwins_viewer||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(6),c=a.n(s),i=a(1),u=a.n(i),l=a(2),o=a(4);var m=function(){return r.a.createElement("div",{className:"st-twins-header-1 is-size-5 is-uppercase"},r.a.createElement("a",{href:"https://cdn.sttwins.com/static/book/map.pdf",target:"_blank",className:"has-text-white"},"\u041a\u0430\u0440\u0442\u0430 \u0433\u043e\u0440\u043e\u0434\u0430"),r.a.createElement("hr",{className:"st-twins-line is-paddingless is-marginless"}))},d=a(7),f=a.n(d);var p=function(e){var t=e.queryUpdated,a=Object(n.useCallback)(f()((function(e){return t(e)}),500),[]);return r.a.createElement("div",{className:"field"},r.a.createElement("input",{className:"input is-success",type:"search",placeholder:"\u041f\u043e\u0438\u0441\u043a",onChange:function(e){return a(e.target.value)}}))};var v=function(e){var t=e.header,a=e.content,n=t?r.a.createElement("h2",null,t):null,s=a.map((function(e){return r.a.createElement("div",{className:"f-row"},r.a.createElement("div",{className:"f-title"},e.title),r.a.createElement("div",{className:"f-right"},r.a.createElement("div",{className:"f-dots"},"\xa0"),r.a.createElement("div",{className:"f-address"},e.address)))}));return r.a.createElement(r.a.Fragment,null,n,s)};var h=function(e){var t=e.data;return r.a.createElement("div",{className:"column addresses",id:"addresses"},t.map((function(e){return r.a.createElement(v,e)})))},E=a(3),w=a.n(E);var b=function(){var e=Object(l.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:return t=e.sent,a=j(t),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){w.a.getJSON("data.json",e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function j(e){var t,a=[];for(var n in e){var r=e[n];for(var s in r){var c=O[t="null"!==s?s:n]||t,i=r[s];a.push({header:c,content:i})}}return a}var O={"\u041f\u0420\u0415\u0414\u041f\u0420\u0418\u042f\u0422\u0418\u042f":"\u0423\u0427\u0420\u0415\u0416\u0414\u0415\u041d\u0418\u042f","\u0421\u0420\u0415\u0414\u0421\u0422\u0412\u0410 \u041c\u0410\u0421\u0421\u041e\u0412\u041e\u0419 \u0418\u041d\u0424\u041e\u0420\u041c\u0410\u0426\u0418\u0418":"\u0421\u041c\u0418","\u041a\u041e\u041c\u041c\u0423\u041d\u0410\u041b\u042c\u041d\u042b\u0415 \u0421\u041b\u0423\u0416\u0411\u042b":"\u041a\u041e\u041c. \u0421\u041b\u0423\u0416\u0411\u042b","\u0424\u0418\u041d\u0410\u041d\u0421\u041e\u0412\u042b\u0415 \u0423\u0427\u0420\u0415\u0416\u0414\u0415\u041d\u0418\u042f":"\u0424\u0418\u041d. \u0423\u0427\u0420\u0415\u0416\u0414\u0415\u041d\u0418\u042f"};var g=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)([]),i=Object(o.a)(c,2),d=i[0],f=i[1],v=Object(n.useState)([]),E=Object(o.a)(v,2),N=E[0],j=E[1];Object(n.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){var e=function(e,t){if(!t)return e;if(!(t=t.toLowerCase().replace("-","")))return e;var a=[];return e.forEach((function(e){var n=e.content.filter((function(e){var a=e.title.toLowerCase(),n=e.address.toLowerCase().replace("-","");return a.includes(t)||n.includes(t)}));n.length>0&&a.push({header:e.header,content:n})})),a}(d,a);j(e)}),[a,d]);var O=w.a.isEmptyObject(N)?r.a.createElement("h1",null,"no results"):r.a.createElement(h,{data:N});return r.a.createElement("section",{className:"hero is-fullheight"},r.a.createElement("h1",{className:"address-book title is-size-3 has-text-white is-uppercase has-text-weight-bold has-text-centered"},"\u0410\u0434\u0440\u0435\u0441\u043d\u0430\u044f \u043a\u043d\u0438\u0433\u0430 \u0421\u0435\u0439\u043d\u0442-\u0422\u0432\u0438\u043d\u0441"),r.a.createElement("section",{className:"address-book-section hero-body"},r.a.createElement("div",{className:"container is-widescreen"},r.a.createElement("div",{className:"columns has-text-white"},r.a.createElement("div",{className:"column is-one-quarter is-narrow-mobile"},r.a.createElement(p,{queryUpdated:s}),r.a.createElement(m,null)),O))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.ffc24fd0.chunk.js.map