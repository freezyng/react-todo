(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{33:function(t,e,n){},34:function(t,e,n){},35:function(t,e,n){},60:function(t,e,n){},61:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),o=n(10),a=n.n(o),u=(n(33),n(34),n(7)),s=(n(35),n(3)),i=n(5),d=n(4),b=n.n(d),j=n(8),f=n(23).create({baseURL:"https://60b78ee617d1dc0017b8a562.mockapi.io/todo-posts/"}),O=function(){return f.get().then((function(t){return t.data}))},l=function(t){return f.delete(t)},p=function(t){return f.post("",t).then((function(t){return t.data}))},h=function(t){return f.put(t.id,{message:t.message})},v="ADD_TODO",T="DELETE_TODO",m="UPDATE_TODO",x="GET_TODO",k=function(){return function(){var t=Object(j.a)(b.a.mark((function t(e){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O();case 2:n=t.sent,e({type:x,todo:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=n(1);var w=Object(s.b)(Object(i.b)("",{addTodoThunk:function(t){return function(){var e=Object(j.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t);case 2:n(k());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))((function(t){var e=Object(i.c)((function(t){return t})),n=Object(r.useState)(),c=Object(u.a)(n,2),o=c[0],a=c[1];return Object(g.jsx)("div",{children:Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("input",{type:"text",className:"form-post",value:o,onChange:function(t){return a(t.target.value)}}),Object(g.jsx)("button",{className:"btn btn-add-post",onClick:function(){o&&(t.addTodoThunk({id:e.length+1,message:o}),a(""))},children:"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})})})),N=n(24),y=n(25),D=n(28),E=n(27);n(60);var C=function(t){var e=Object(r.useState)(!1),n=Object(u.a)(e,2),c=n[0],o=n[1],a=Object(r.useState)(t.todo.message),s=Object(u.a)(a,2),i=s[0],d=s[1];return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"item-row",children:[Object(g.jsxs)("div",{className:"id",children:["#",t.todo.id]}),c?Object(g.jsx)("input",{type:"text",className:"form-post",autoFocus:!0,value:i,onChange:function(t){return d(t.target.value)}}):Object(g.jsx)("div",{className:"title",children:t.todo.message}),Object(g.jsxs)("div",{className:"wrap-btns",children:[Object(g.jsx)("button",{className:"btn btn-edit",onClick:function(){c&&t.updateTodoThunk({id:t.todo.id,message:i}),o(!c)},children:"\u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c"}),Object(g.jsx)("button",{className:"btn btn-delete",onClick:function(){return t.deleteTodoThunk(t.todo.id)},children:"\u0443\u0434\u0430\u043b\u0438\u0442\u044c"})]})]})})},_=function(t){Object(D.a)(n,t);var e=Object(E.a)(n);function n(){return Object(N.a)(this,n),e.apply(this,arguments)}return Object(y.a)(n,[{key:"updateProfile",value:function(){this.props.getTodoThunk()}},{key:"componentDidMount",value:function(){this.updateProfile()}},{key:"render",value:function(){var t=this;return Object(g.jsxs)("div",{children:[Object(g.jsx)("h2",{children:"todo list"}),this.props.todo.map((function(e){return Object(g.jsx)(C,{todo:e,deleteTodoThunk:t.props.deleteTodoThunk,updateTodoThunk:t.props.updateTodoThunk},e.id)}))]})}}]),n}(c.a.Component),S=Object(s.b)(Object(i.b)((function(t){return{todo:t}}),{deleteTodoThunk:function(t){return function(){var e=Object(j.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(t);case 2:n(k());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},updateTodoThunk:function(t){return function(){var e=Object(j.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t);case 2:n(k());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},getTodoThunk:k}))(_);var P=function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("h2",{children:"TODO REACT"}),Object(g.jsx)(w,{}),Object(g.jsx)(S,{})]})},F=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,o=e.getLCP,a=e.getTTFB;n(t),r(t),c(t),o(t),a(t)}))},L=n(9),A=[{id:1,message:"ddddd"}],I=n(26),M=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.b,R=Object(s.c)((function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case x:return t=Object(L.a)(e),t=n.todo;case v:return(t=Object(L.a)(e)).push(n.todo),t;case T:t=(t=Object(L.a)(e)).filter((function(t){return t.id!==n.todoId}));for(var r=0;r<t.length;r++)t[r].id=r+1;return t;case m:return(t=Object(L.a)(e))[n.todo.id-1]=n.todo,t;default:return e}}),M(Object(s.b)(Object(s.a)(I.a))));window.store=R,a.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(i.a,{store:R,children:Object(g.jsx)(P,{})})}),document.getElementById("root")),F()}},[[61,1,2]]]);
//# sourceMappingURL=main.ae7a9d79.chunk.js.map