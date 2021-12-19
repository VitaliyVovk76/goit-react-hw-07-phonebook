(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{20:function(t,e,n){t.exports={filterWrapper:"Filter_filterWrapper__bG5Nw",filterLabel:"Filter_filterLabel__1nooo",filterInput:"Filter_filterInput__bsuXg"}},24:function(t,e,n){t.exports={contactsWrapper:"ContactsList_contactsWrapper__2aEM-",contactButton:"ContactsList_contactButton__2nzTc"}},25:function(t,e,n){t.exports={appTitle:"App_appTitle__31RVG"}},36:function(t,e,n){t.exports={container:"Container_container__3oEEn"}},77:function(t,e,n){},78:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(15),o=n.n(a),u=n(6),i=n(22),s=n.n(i),l=n(36),b=n.n(l),f=n(1);function j(t){var e=t.children;return Object(f.jsx)("div",{className:b.a.container,children:e})}j.Propypes={children:s.a.node};var p=j,d=n(26),O=n(7),m=n.n(O),h=n(19),v=n(5),x=n(10),_=n.n(x);_.a.defaults.baseURL="https://61bc6358d8542f00178246fc.mockapi.io";var g=function(t){return _.a.post("/contacts",t).then((function(t){return t.data}))},C=function(t){return _.a.delete("/contacts/".concat(t))},N=Object(v.c)("contacts/fetchContacts",function(){var t=Object(h.a)(m.a.mark((function t(e,n){var r,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,_.a.get("/contacts").then((function(t){return t.data}));case 4:return c=t.sent,t.abrupt("return",c);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",r(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),y=Object(v.c)("contacts/deleteContact",function(){var t=Object(h.a)(m.a.mark((function t(e,n){var r,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,C(e);case 4:return c=t.sent,t.abrupt("return",c.data.id);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",r(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),w=Object(v.c)("contacts/addContacts",function(){var t=Object(h.a)(m.a.mark((function t(e,n){var r,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,g(e);case 4:return c=t.sent,t.abrupt("return",c);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",r(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),k=n(16),F=function(t){return t.contacts.items},L=function(t){return t.contacts.filter},T=Object(k.a)([F,L],(function(t,e){console.log("contacts: ",t);var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),W=n(8),A=n.n(W);function B(){var t=Object(r.useState)(""),e=Object(d.a)(t,2),n=e[0],c=e[1],a=Object(r.useState)(""),o=Object(d.a)(a,2),i=o[0],s=o[1],l=Object(u.c)(F),b=Object(u.b)(),j=function(t){"name"===t.currentTarget.name&&c(t.currentTarget.value),"number"===t.currentTarget.name&&s(t.currentTarget.value)},p=function(){c(""),s("")},O=function(t){return l.find((function(e){return e.name===t}))};return Object(f.jsxs)("form",{className:A.a.contactForm,onSubmit:function(t){if(t.preventDefault(),O(n))return alert("".concat(n," is alreadi in contacts")),void p();b(w({name:n,number:i})),p()},children:[Object(f.jsxs)("label",{className:A.a.formLabel,children:["Name",Object(f.jsx)("input",{className:A.a.formInput,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:n,onChange:j})]}),Object(f.jsxs)("label",{className:A.a.formLabel,children:[Object(f.jsx)("span",{children:"Number"}),Object(f.jsx)("input",{className:A.a.formInput,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:i,onChange:j})]}),Object(f.jsx)("button",{className:A.a.formButton,type:"submit",children:"Add contact"})]})}var I=n(37),z=n.n(I),V=n(24),E=n.n(V),Z=function(){var t=Object(u.c)(T),e=Object(u.b)();return Object(r.useEffect)((function(){e(N())}),[e]),Object(f.jsx)("div",{className:E.a.contactsWrapper,children:Object(f.jsx)("ul",{children:t.map((function(t){var n=t.id,r=t.name,c=t.number;return Object(f.jsxs)("li",{children:[Object(f.jsxs)("span",{children:[r,": "]}),Object(f.jsx)("span",{children:c}),Object(f.jsx)("button",{className:E.a.contactButton,type:"button",onClick:function(){return e(y(n))},children:"Delete"})]},z.a.generate())}))})})},S=Object(v.b)("contacts/changeFilter"),G=n(20),J=n.n(G),M=function(){var t=Object(u.c)(L),e=Object(u.b)();return Object(f.jsx)("div",{className:J.a.filterWrapper,children:Object(f.jsxs)("label",{className:J.a.filterLabel,children:["Find contacts by name",Object(f.jsx)("input",{className:J.a.filterInput,type:"text",value:t,onChange:function(t){return e(S(t.target.value))}})]})})},q=n(25),D=n.n(q);var P,R,U=function(){return Object(f.jsxs)(p,{children:[Object(f.jsx)("h1",{className:D.a.appTitle,children:"Phonebook"}),Object(f.jsx)(B,{}),Object(f.jsx)("h2",{className:D.a.appTitle,children:"Contacts"}),Object(f.jsx)(M,{}),Object(f.jsx)(Z,{})]})},X=n(18),$=n(2),H=n(38),K=n.n(H),Q=n(9),Y=n(3),tt=Object(v.d)([],(P={},Object(Y.a)(P,N.fulfilled,(function(t,e){return e.payload})),Object(Y.a)(P,w.fulfilled,(function(t,e){var n=e.payload;return[].concat(Object(X.a)(t),[n])})),Object(Y.a)(P,y.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),P)),et=Object(v.d)("",Object(Y.a)({},S,(function(t,e){return e.payload}))),nt=Object(v.d)(!1,(R={},Object(Y.a)(R,w.pending,(function(){return!0})),Object(Y.a)(R,w.fulfilled,(function(){return!1})),Object(Y.a)(R,w.rejected,(function(){return!1})),Object(Y.a)(R,y.pending,(function(){return!0})),Object(Y.a)(R,y.fulfilled,(function(){return!1})),Object(Y.a)(R,y.rejected,(function(){return!1})),Object(Y.a)(R,N.pending,(function(){return!0})),Object(Y.a)(R,N.fulfilled,(function(){return!1})),Object(Y.a)(R,N.rejected,(function(){return!1})),R)),rt=Object($.b)({items:tt,filter:et,loading:nt}),ct=Object($.b)({contacts:rt}),at=Object(v.a)({reducer:ct,middleware:function(t){return[].concat(Object(X.a)(t({serializableCheck:{ignoredActions:[Q.a,Q.f,Q.b,Q.c,Q.d,Q.e]}})),[K.a])},devTools:!1});n(77);o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(u.a,{store:at,children:Object(f.jsx)(U,{})})}),document.getElementById("root"))},8:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__VsZOs",formLabel:"ContactForm_formLabel__30-fo",formInput:"ContactForm_formInput__G4F8k",formButton:"ContactForm_formButton__VlZLk"}}},[[78,1,2]]]);
//# sourceMappingURL=main.fea4952d.chunk.js.map