(this.webpackJsonptodo_app=this.webpackJsonptodo_app||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){},25:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);n(0);var o=n(5),c=n.n(o),s=(n(16),n(17),n(18),n(6)),i=n(2),r=n(4),d="todos/CHANGE_INPUT",a="todos/INSERT",u="todos/TOGGLE",j="todos/REMOVE",b=4,l={input:"",todos:[{id:1,text:"\ub9ac\uc561\ud2b8\uc758 \uae30\ucd08 \uc54c\uc544\ubcf4\uae30",checked:!0},{id:2,text:"\ucef4\ud3ec\ub10c\ud2b8 \uc2a4\ud0c0\uc77c\ub9c1 \ud574 \ubcf4\uae30",checked:!0},{id:3,text:"\uc77c\uc815 \uad00\ub9ac \uc571 \ub9cc\ub4e4\uc5b4 \ubcf4\uae30",checked:!1}]};var O=Object(r.combineReducers)({todos:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case d:return Object(i.a)(Object(i.a)({},t),{},{input:e.input});case a:return Object(i.a)(Object(i.a)({},t),{},{todos:t.todos.concat(e.todo)});case u:return Object(i.a)(Object(i.a)({},t),{},{todos:t.todos.map((function(t){return t.id===e.id?Object(i.a)(Object(i.a)({},t),{},{checked:!t.checked}):t}))});case j:return Object(i.a)(Object(i.a)({},t),{},{todos:t.todos.filter((function(t){return t.id!==e.id}))});default:return t}}}),p=O,h=n(3),v=(n(25),n(1)),f=function(t){var e=t.input,n=t.onChangeInput,o=t.onInsert;return Object(v.jsxs)("form",{className:"TodoInsert",onSubmit:function(t){o(e),t.preventDefault(),n("")},children:[Object(v.jsx)("input",{placeholder:"\ud560 \uc77c\uc744 \uc785\ub825\ud558\uc138\uc694",value:e,onChange:function(t){n(t.target.value)}}),Object(v.jsx)("button",{type:"submit",children:Object(v.jsx)(h.a,{})})]})},x=n(10),m=n.n(x);n(27);var g=function(t){var e=t.todo,n=t.onRemove,o=t.onToggle,c=e.id,s=e.text,i=e.checked;return Object(v.jsxs)("div",{className:"TodoListItem",children:[Object(v.jsxs)("div",{className:m()("Checkbox",{checked:i}),onClick:function(){o(c)},children:[i?Object(v.jsx)(h.b,{}):Object(v.jsx)(h.c,{}),Object(v.jsx)("div",{className:"text",children:s})]}),Object(v.jsx)("div",{className:"remove",onClick:function(){n(c)},children:Object(v.jsx)(h.d,{})})]})};n(28);var k=function(t){var e=t.todos,n=t.onRemove,o=t.onToggle;return Object(v.jsx)("div",{className:"TodoList",children:e.map((function(t){return Object(v.jsx)(g,{todo:t,onRemove:n,onToggle:o},t.id)}))})},T=Object(s.b)((function(t){var e=t.todos;return{input:e.input,todos:e.todos}}),{changeInput:function(t){return{type:d,input:t}},insert:function(t){return{type:a,todo:{id:b++,text:t,checked:!1}}},toggle:function(t){return{type:u,id:t}},remove:function(t){return{type:j,id:t}}})((function(t){var e=t.input,n=t.todos,o=t.changeInput,c=t.insert,s=t.toggle,i=t.remove;return Object(v.jsxs)("div",{className:"TodoTemplate",children:[Object(v.jsx)("div",{className:"app-title",children:"\uc77c\uc815 \uad00\ub9ac"}),Object(v.jsxs)("div",{className:"content",children:[Object(v.jsx)(f,{input:e,onInsert:c,onChangeInput:o}),Object(v.jsx)(k,{todos:n,onRemove:i,onToggle:s})]})]})}));var N=function(){return Object(v.jsx)(T,{})},I=n(11),y=Object(r.createStore)(p,Object(I.devToolsEnhancer)());c.a.render(Object(v.jsx)(s.a,{store:y,children:Object(v.jsx)(N,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.edc9fca6.chunk.js.map