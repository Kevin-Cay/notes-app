(this["webpackJsonpnotes-app"]=this["webpackJsonpnotes-app"]||[]).push([[0],{100:function(e,t,n){},204:function(e,t,n){},206:function(e,t,n){"use strict";n.r(t);var a=n(7),c=n.n(a),s=n(86),r=n.n(s),i=(n(100),n(13)),o=(n(15),n(1)),l=n.n(o),j=n(3),d=n(87),u=n(23),b=n(27),h=Object(d.a)({apiKey:"AIzaSyCcoCRi5rb6DLTn9Gwn3KXHZ2zqhWOtK2k",authDomain:"bases-de-datos-4c04e.firebaseapp.com",projectId:"bases-de-datos-4c04e",storageBucket:"bases-de-datos-4c04e.appspot.com",messagingSenderId:"271585872227",appId:"1:271585872227:web:d98e825f2b7b48b4626b56",measurementId:"G-Q5DJWMZX11"}),O=Object(u.e)(h),m=Object(b.c)(h),p=(new u.a,O),x=n(11),f=function(e){e.handleAddNote;var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],s=n[1];function r(){return(r=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(u.b)(Object(u.c)(p,"notas"),{text:c,date:new Date});case 3:t=e.sent,console.log("Nota escrita con id: ",t.id),s(""),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(x.jsxs)("div",{className:"note new",children:[Object(x.jsx)("textarea",{cols:"10",rows:"8",value:c,onChange:function(e){e.preventDefault(),200-e.target.value.length>=0&&s(e.target.value)},placeholder:"Write a new note..."}),Object(x.jsxs)("div",{className:"note-footer",children:[Object(x.jsxs)("small",{children:[200-c.length," available characters"]}),Object(x.jsx)("button",{className:"save",onClick:function(){return r.apply(this,arguments)},children:"Save"})]})]})},v=n(48),g=function(e){var t=e.date,n=e.id,a=e.text,c=e.handleDeleteNote;return Object(x.jsxs)("div",{className:"note",id:n,children:[Object(x.jsxs)("span",{children:[" ",a]}),Object(x.jsxs)("div",{className:"note-footer",children:[Object(x.jsx)("small",{children:t}),Object(x.jsx)(v.a,{onClick:function(){return c(n)},className:"delete-icon",size:"1.3em"})]})]})},N=function(e){var t=e.notes,n=e.handleAddNote,a=e.handleDeleteNote;return Object(x.jsxs)("div",{className:"notes-list",children:[t.map((function(e){return Object(x.jsx)(g,{id:e.id,text:e.data.text,handleDeleteNote:a})})),Object(x.jsx)(f,{handleAddNote:n})]})},w=function(e){var t=e.handleSearchNote;return Object(x.jsxs)("div",{className:"search",children:[Object(x.jsx)(v.b,{className:"search-icons",size:"1.3em"}),Object(x.jsx)("input",{onChange:function(e){return t(e.target.value)},type:"text",placeholder:"Search Notes.."})]})},S=(n(95),n(88)),k=function(e){var t=e.handleToggleDarkMode;return Object(x.jsxs)("div",{className:"header",children:[Object(x.jsx)("h1",{children:"Notes"}),Object(x.jsxs)("div",{className:"headerOptions",children:[Object(x.jsx)("button",{className:"theme headerbutton",onClick:function(){return t((function(e){return!e}))},children:"Theme \ud83c\udf19/\ud83c\udf1e"}),Object(x.jsxs)("div",{className:"signoutbutton",onClick:function(){return Object(b.g)(m)},children:[Object(x.jsx)(S.a,{}),"Sign Out"]})]})]})};var y=function(e){var t=e.userEmail,n=Object(a.useState)([]),c=Object(i.a)(n,2),s=c[0],r=c[1],o=Object(a.useState)(!1),d=Object(i.a)(o,2),b=d[0],h=d[1],O=Object(a.useState)(""),m=Object(i.a)(O,2),f=(m[0],m[1]);return Object(a.useEffect)((function(){var e=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.d)(Object(u.c)(p,"notas"));case 2:t=e.sent,r(t.docs.map((function(e){return{id:e.id,data:e.data()}})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[s]),console.log(t),Object(x.jsx)("div",{className:"".concat(b&&"dark-mode"),children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)(k,{handleToggleDarkMode:h}),Object(x.jsx)(w,{handleSearchNote:f}),Object(x.jsx)(N,{notes:s,handleDeleteNote:function(e){var t=s.filter((function(t){return t.id===e?t.id:null}));console.log(t)}})]})})},C=n.p+"static/media/noteImage.a4a8b030.png",D=n(38),I=(n(205),n(94)),L=(n(204),function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),r=Object(i.a)(s,2),o=r[0],d=(r[1],new b.a);function u(){return(u=Object(j.a)(l.a.mark((function e(t){var a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.email,c=t.pass,!n){e.next=8;break}return e.next=5,Object(b.b)(m,a,c);case 5:e.sent,e.next=11;break;case 8:return e.next=10,Object(b.e)(m,a,c);case 10:e.sent;case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"contentLog",children:[Object(x.jsx)("div",{className:"imgContainer",children:Object(x.jsx)("img",{src:C,alt:""})}),Object(x.jsx)("h1",{children:n?"Sign Up":"Login"}),o&&Object(x.jsx)("p",{className:"error",children:o}),Object(x.jsx)(D.c,{enableReinitialize:!0,initialValues:{email:"",password:""},onSubmit:function(e){return u.apply(this,arguments)},children:Object(x.jsxs)(D.b,{className:"formStyle",children:[Object(x.jsx)("label",{htmlFor:"email",children:"Email"}),Object(x.jsx)(D.a,{type:"email",id:"email",name:"email",placeholder:"example@gmail.com",style:{padding:"10px"}}),Object(x.jsx)("label",{htmlFor:"email",children:"Password"}),Object(x.jsx)(D.a,{id:"pass",name:"pass",placeholder:"password",type:"password",style:{padding:"10px"}}),Object(x.jsx)("button",{className:"buttonSubmit",type:"submit",children:n?"Create Account":"Login"})]})}),Object(x.jsx)("button",{onClick:function(){return c(!n)},children:n?"You have an account? Login":"Don't have an account? Sign up"}),Object(x.jsxs)("button",{className:"googleButton",onClick:function(){Object(b.f)(m,d)},children:[Object(x.jsx)(I.a,{})," Login with Google"]})]})})});var z=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(b.d)(m,(function(e){c(e||null)})),Object(x.jsx)(x.Fragment,{children:n?Object(x.jsx)(y,{userEmail:n.email}):Object(x.jsx)(L,{})})};r.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(z,{})}),document.getElementById("root"))}},[[206,1,2]]]);
//# sourceMappingURL=main.19ca17fd.chunk.js.map