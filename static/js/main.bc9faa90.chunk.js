(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(7),s=n.n(c),r=n(6),o=n(8),i=(n(13),n(14),n(1)),a=n(4),l=n.n(a),u=n(0),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j="length",h="alphabetically",d=[].concat(b);var f=function(){var t=Object(i.useState)(""),e=Object(r.a)(t,2),n=e[0],c=e[1],s=Object(i.useState)(!1),a=Object(r.a)(s,2),f=a[0],g=a[1];return d=function(t,e){var n=e.sortField,c=e.reverse,s=Object(o.a)(t);switch(n){case j:s=s.sort((function(t,e){return t.length-e.length}));break;case h:s=s.sort((function(t,e){return t.localeCompare(e)}));break;default:s=b}return c&&n&&(s=s.reverse()),s}(d,{sortField:n,reverse:f}),Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{type:"button",className:l()("button is-info",{"is-light":n!==h}),onClick:function(){return c(h)},children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",onClick:function(){return c(j)},className:l()("button is-success",{"is-light":n!==j}),children:"Sort by length"}),Object(u.jsx)("button",{type:"button",onClick:function(){return g((function(t){return!t}))},className:l()("button is-warning",{"is-light":!f}),children:"Reverse"}),(f||""!==n)&&Object(u.jsx)("button",{type:"button",onClick:function(){return c("")},className:"button is-danger is-light",children:"Reset"})]}),Object(u.jsx)("ul",{children:d.map((function(t){return Object(u.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};s.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.bc9faa90.chunk.js.map