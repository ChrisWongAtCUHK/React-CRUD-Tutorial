(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){e.exports=t(37)},23:function(e,a,t){},25:function(e,a,t){},28:function(e,a,t){},30:function(e,a,t){var n={"./john.png":31,"./mark.png":32,"./mary.png":33};function l(e){var a=r(e);return t(a)}function r(e){var a=n[e];if(!(a+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a}l.keys=function(){return Object.keys(n)},l.resolve=r,e.exports=l,l.id=30},31:function(e,a,t){e.exports=t.p+"static/media/john.2d9f64bb.png"},32:function(e,a,t){e.exports=t.p+"static/media/mark.7d951de6.png"},33:function(e,a,t){e.exports=t.p+"static/media/mary.6a8df8e0.png"},37:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(14),c=t.n(r),m=(t(23),t(6)),o=t(7),i=t(9),s=t(8),d=t(10),h=t(40),u=t(39),p=t(41),v=t(42),E=(t(25),t(15)),f=t.n(E);t(28);var N=function(e){var a={},t=!0,n=!1,l=void 0;try{for(var r,c=e.keys()[Symbol.iterator]();!(t=(r=c.next()).done);t=!0){var m=r.value;a[m.replace("./","")]=e(m)}}catch(o){n=!0,l=o}finally{try{t||null==c.return||c.return()}finally{if(n)throw l}}return a}(t(30)),b=function(e){function a(){return Object(m.a)(this,a),Object(i.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,this.props.employees.map(function(e){return l.a.createElement("div",{className:"panel panel-primary",key:e.id},l.a.createElement("div",{className:"panel-heading"},l.a.createElement("h3",{className:"panel-title"},e.name)),l.a.createElement("div",{className:"panel-body"},l.a.createElement("div",{className:"col-xs-10"},l.a.createElement("div",{className:"row vertical-align"},l.a.createElement("div",{className:"col-xs-4"},l.a.createElement("img",{className:"imageClass",src:N[e.photoPath],alt:""})),l.a.createElement("div",{className:"col-xs-8"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-6"},"Gender"),l.a.createElement("div",{className:"col-xs-6"},": ",e.gender)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-6"},"Date of Birth"),l.a.createElement("div",{className:"col-xs-6"},": ",f()(e.dateOfBirth).format("ll"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-6"},"Contact Preference"),l.a.createElement("div",{className:"col-xs-6"},": ",e.contactPreference)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-6"},"Phone"),l.a.createElement("div",{className:"col-xs-6"},": ",e.phoneNumber)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-6"},"Email"),l.a.createElement("div",{className:"col-xs-6"},": ",e.email)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-6"},"Department"),l.a.createElement("div",{className:"col-xs-6"},": ",e.department)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-6"},"Is Active"),l.a.createElement("div",{className:"col-xs-6"},": ",e.isActive.toString())))))))}))}}]),a}(n.Component),g=t(5),y=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(i.a)(this,Object(s.a)(a).call(this,e))).state={employee:{fullName:"",email:"",phoneNumber:"",contactPreference:"",gender:""}},t.handleRadioChange=t.handleRadioChange.bind(Object(g.a)(Object(g.a)(t))),t.handleCheckboxChange=t.handleCheckboxChange.bind(Object(g.a)(Object(g.a)(t))),t.handleSubmit=t.handleSubmit.bind(Object(g.a)(Object(g.a)(t))),t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"handleChange",value:function(e){var a=this.state.employee;a[e.target.id]=e.target.value,this.setState({employee:a})}},{key:"handleRadioChange",value:function(e){var a=this.state.employee;a[e.target.name]=e.target.value,this.setState({employee:a})}},{key:"handleCheckboxChange",value:function(e){var a=this.state.employee;a[e.target.name]=e.target.checked,this.setState({employee:a})}},{key:"handleSubmit",value:function(e){alert(JSON.stringify(this.state.employee)),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"panel panel-primary"},l.a.createElement("div",{className:"panel-heading"},l.a.createElement("h3",{className:"panel-title"},"Create Employee")),l.a.createElement("div",{className:"panel-body"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"fullName"},"Full Name"),l.a.createElement("input",{id:"fullName",type:"text",className:"form-control",name:"fullName",value:this.state.employee.fullName,onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{id:"email",type:"text",className:"form-control",name:"email",value:this.state.employee.email,onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"phoneNumber"},"Phone Number"),l.a.createElement("input",{id:"phoneNumber",type:"text",className:"form-control",name:"phoneNumber",value:this.state.employee.phoneNumber,onChange:this.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Contact Preference"),l.a.createElement("div",{className:"form-control"},l.a.createElement("label",{className:"radio-inline"},l.a.createElement("input",{type:"radio",name:"contactPreference",value:"email",onChange:this.handleRadioChange}),"Email"),l.a.createElement("label",{className:"radio-inline"},l.a.createElement("input",{type:"radio",name:"contactPreference",value:"phone",onChange:this.handleRadioChange}),"Phone"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Gender"),l.a.createElement("div",{className:"form-control"},l.a.createElement("label",{className:"radio-inline"},l.a.createElement("input",{type:"radio",name:"gender",value:"male",onChange:this.handleRadioChange}),"Male"),l.a.createElement("label",{className:"radio-inline"},l.a.createElement("input",{type:"radio",name:"gender",value:"female",onChange:this.handleRadioChange}),"Female"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"form-control"},l.a.createElement("label",{className:"checkbox-inline"},l.a.createElement("input",{type:"checkbox",name:"isActive",onChange:this.handleCheckboxChange}),"Is Active"))),l.a.createElement("div",{className:"panel-footer"},l.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Save"))))),"Generated Model :",JSON.stringify(this.state.employee))}}]),a}(n.Component),C=[{id:1,name:"Mark",gender:"Male",contactPreference:"Email",email:"mark@pragimtech.com",dateOfBirth:new Date("10/25/1988"),department:"IT",isActive:!0,photoPath:"mark.png"},{id:2,name:"Mary",gender:"Female",contactPreference:"Phone",phoneNumber:2345978640,dateOfBirth:new Date("11/20/1979"),department:"HR",isActive:!0,photoPath:"mary.png"},{id:3,name:"John",gender:"Male",contactPreference:"Phone",phoneNumber:5432978640,dateOfBirth:new Date("3/25/1976"),department:"IT",isActive:!1,photoPath:"john.png"}],x=function(e){function a(){return Object(m.a)(this,a),Object(i.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(h.a,null,l.a.createElement("div",{className:"container"},l.a.createElement("nav",{className:"navbar navbar-default"},l.a.createElement("ul",{className:"nav navbar-nav"},l.a.createElement("li",null,l.a.createElement(u.a,{to:"/list"},"List")),l.a.createElement("li",null,l.a.createElement(u.a,{to:"/create"},"Create")))),l.a.createElement(p.a,null,l.a.createElement(v.a,{exact:!0,path:"/",component:function(e){return l.a.createElement(b,Object.assign({},e,{employees:C}))}}),l.a.createElement(v.a,{exact:!0,path:"/create",component:y}),l.a.createElement(v.a,{exact:!0,path:"/list",component:function(e){return l.a.createElement(b,Object.assign({},e,{employees:C}))}}),l.a.createElement(v.a,{component:function(e){return l.a.createElement(b,Object.assign({},e,{employees:C}))}}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.a4645ab3.chunk.js.map