(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={contactList:"ContactList_contactList__GdzzX",contactItem:"ContactList_contactItem__3CxbM",contactInformation:"ContactList_contactInformation__3lrMH",contactDelete:"ContactList_contactDelete__XM5G4"}},,,,,,,,function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__3Oh9n"}},function(t,e,n){t.exports={title:"Filter_title__2_y12"}},,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(9),o=n.n(r),i=n(12),s=n(3),u=n(4),l=n(6),m=n(5),b=(n(17),n(0)),d=function(t){var e=t.children;return Object(b.jsx)("div",{className:"Container",children:e})},h=n(8),j=n(22),f=n(10),p=n.n(f),O=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:"",id:""},t.nameInputId=Object(j.a)(),t.numberInputId=Object(j.a)(),t.handleChange=function(e){var n,a=e.currentTarget,c=a.name,r=a.value,o=a.id;t.setState((n={},Object(h.a)(n,c,r),Object(h.a)(n,"id",o),n))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.resetForm()},t.resetForm=function(){t.setState({name:"",number:"",id:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(b.jsxs)("form",{onSubmit:this.handleSubmit,className:p.a.contactForm,children:[Object(b.jsxs)("label",{htmlFor:this.nameInputId,children:["Name",Object(b.jsx)("input",{type:"text",name:"name",value:e,onChange:this.handleChange,id:this.nameInputId})]}),Object(b.jsxs)("label",{htmlFor:this.numberInputId,children:["Number",Object(b.jsx)("input",{type:"text",name:"number",value:n,onChange:this.handleChange,id:this.numberInputId})]}),Object(b.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),C=n(2),v=n.n(C),x=function(t){var e=t.contactList,n=t.onDeleteContact;return Object(b.jsx)("ul",{className:v.a.contactList,children:e.map((function(t){var e=t.name,a=t.number,c=t.id;return Object(b.jsxs)("li",{className:v.a.contactItem,children:[Object(b.jsxs)("p",{className:v.a.contactInformation,children:[e,": ",a]}),Object(b.jsx)("button",{onClick:function(){n(c)},className:v.a.contactDelete,children:"Delete"})]},c)}))})},g=n(11),I=n.n(g),_=function(t){var e=t.value,n=t.onChange;return Object(b.jsxs)("label",{className:I.a.title,children:["Find contacts by name",Object(b.jsx)("input",{type:"text",name:"filter",value:e,onChange:n})]})},y=(n(19),function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.formSubmitHandler=function(e){void 0===t.state.contacts.find((function(t){return t.name===e.name}))?t.setState((function(t){var n=t.contacts;return{contacts:[].concat(Object(i.a)(n),[e])}})):alert("".concat(e.name," is already in contacts"))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getFiltredContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getFiltredContacts();return Object(b.jsxs)(d,{children:[Object(b.jsx)("h1",{children:"Phonebook"}),Object(b.jsx)(O,{onSubmit:this.formSubmitHandler}),Object(b.jsx)("h2",{children:"Contacts"}),Object(b.jsx)(_,{value:t,onChange:this.changeFilter}),Object(b.jsx)(x,{contactList:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component));o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.fa077cc6.chunk.js.map