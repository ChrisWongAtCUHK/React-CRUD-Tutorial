(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){var r={"./john.png":42,"./mark.png":43,"./mary.png":44};function n(e){var t=l(e);return a(t)}function l(e){var t=r[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}n.keys=function(){return Object.keys(r)},n.resolve=l,e.exports=n,n.id=25},30:function(e,t,a){e.exports=a(54)},35:function(e,t,a){},37:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){e.exports=a.p+"static/media/john.2d9f64bb.png"},43:function(e,t,a){e.exports=a.p+"static/media/mark.7d951de6.png"},44:function(e,t,a){e.exports=a.p+"static/media/mary.6a8df8e0.png"},54:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),l=a(17),s=a.n(l),o=(a(35),a(8)),c=a(9),i=a(11),m=a(10),h=a(12),d=a(56),u=a(55),p=a(58),v=a(59),E=(a(37),a(18)),f=a.n(E),y=(a(40),[{id:1,name:"Mark",gender:"Male",contactPreference:"Email",email:"mark@pragimtech.com",dateOfBirth:new Date("10/25/1988"),department:"IT",isActive:!0,photoPath:"mark.png"},{id:2,name:"Mary",gender:"Female",contactPreference:"Phone",phoneNumber:2345978640,dateOfBirth:new Date("11/20/1979"),department:"HR",isActive:!0,photoPath:"mary.png"},{id:3,name:"John",gender:"Male",contactPreference:"Phone",phoneNumber:5432978640,dateOfBirth:new Date("3/25/1976"),department:"IT",isActive:!1,photoPath:"john.png"}]);function b(e){return y.find(function(t){return t.id.toString()===e})}function g(){return function(e){var t={},a=!0,r=!1,n=void 0;try{for(var l,s=e.keys()[Symbol.iterator]();!(a=(l=s.next()).done);a=!0){var o=l.value;t[o.replace("./","")]=e(o)}}catch(c){r=!0,n=c}finally{try{a||null==s.return||s.return()}finally{if(r)throw n}}return t}(a(25))}var N=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleSelectedEmployee",value:function(){var e="panel panel-primary pointerCursor";return this.props.selectedEmployeeId===this.props.employee.id.toString()?e+" panel-success":e}},{key:"render",value:function(){return n.a.createElement("div",{className:this.handleSelectedEmployee(),onClick:this.props.onClick},n.a.createElement("div",{className:"panel-heading"},n.a.createElement("h3",{className:"panel-title"},this.props.employee.name)),n.a.createElement("div",{className:"panel-body"},n.a.createElement("div",{className:"col-xs-10"},n.a.createElement("div",{className:"row vertical-align"},n.a.createElement("div",{className:"col-xs-4"},n.a.createElement("img",{className:"imageClass",src:g()[this.props.employee.photoPath],alt:""})),n.a.createElement("div",{className:"col-xs-8"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xs-6"},"Gender"),n.a.createElement("div",{className:"col-xs-6"},": ",this.props.employee.gender)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xs-6"},"Date of Birth"),n.a.createElement("div",{className:"col-xs-6"},": ",f()(this.props.employee.dateOfBirth).format("ll"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xs-6"},"Contact Preference"),n.a.createElement("div",{className:"col-xs-6"},": ",this.props.employee.contactPreference)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xs-6"},"Phone"),n.a.createElement("div",{className:"col-xs-6"},": ",this.props.employee.phoneNumber)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xs-6"},"Email"),n.a.createElement("div",{className:"col-xs-6"},": ",this.props.employee.email)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xs-6"},"Department"),n.a.createElement("div",{className:"col-xs-6"},": ",this.props.employee.department)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xs-6"},"Is Active"),n.a.createElement("div",{className:"col-xs-6"},": ",this.props.employee.isActive.toString())))))))}}]),t}(r.Component),C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={dataFromChild:null},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(e){this.setState({dataFromChild:e}),this.props.history.push("/employees/".concat(e.id))}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,this.props.employees.map(function(t){return n.a.createElement(N,{key:t.id,employee:t,onClick:e.handleClick.bind(e,t),selectedEmployeeId:e.props.match.params.id})}))}}]),t}(r.Component),w=a(13),O=a(4),P=a(29),S=a(57);a(51);var k=function(e){var t={},a=!0,r=!1,n=void 0;try{for(var l,s=e.keys()[Symbol.iterator]();!(a=(l=s.next()).done);a=!0){var o=l.value;t[o.replace("./","")]=e(o)}}catch(c){r=!0,n=c}finally{try{a||null==s.return||s.return()}finally{if(r)throw n}}return t}(a(25)),x={fullName:"",email:"",phoneNumber:"",contactPreference:"",gender:"",dateOfBirth:new Date,photoPath:"",password:"",confirmPassword:""},j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={employee:Object.assign({},x),previewPhoto:!1,employeeForm:{invalid:!0},fullNameControl:{touched:!1,hasError:!1,hasSuccess:!1},emailControl:{touched:!1,hasError:!1,hasSuccess:!1,invalid:!1},phoneNumberControl:{touched:!1,hasError:!1,hasSuccess:!1,invalid:void 0},contactPreferenceControl:{touched:!1,hasError:!0},isActiveControl:{touched:!1,invalid:!0},genderControl:{touched:!1,hasError:!0},departmentControl:{selectedId:null,touched:!1,hasError:!1},passwordControl:{touched:!1,hasError:!1},confirmPasswordControl:{touched:!1,hasError:!1},passwordMatch:!0,dirty:!1},a.handleChange=a.handleChange.bind(Object(O.a)(Object(O.a)(a))),a.handleRadioChange=a.handleRadioChange.bind(Object(O.a)(Object(O.a)(a))),a.handleCheckboxChange=a.handleCheckboxChange.bind(Object(O.a)(Object(O.a)(a))),a.handleSelectChange=a.handleSelectChange.bind(Object(O.a)(Object(O.a)(a))),a.handleDateChange=a.handleDateChange.bind(Object(O.a)(Object(O.a)(a))),a.handlePhotoChange=a.handlePhotoChange.bind(Object(O.a)(Object(O.a)(a))),a.handlePhotoToggle=a.handlePhotoToggle.bind(Object(O.a)(Object(O.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(O.a)(Object(O.a)(a))),a.validate=a.validate.bind(Object(O.a)(Object(O.a)(a))),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){var t=this.state.employee;t[e.target.id]=e.target.value,this.setState({employee:t}),this.validate(e)}},{key:"handleRadioChange",value:function(e){var t=this.state.employee;t[e.target.name]=e.target.value,this.setState({employee:t}),this.validate(e),this.handleDynamicRequired(e)}},{key:"handleCheckboxChange",value:function(e){var t=this.state.employee;t[e.target.name]=e.target.checked,this.setState({employee:t}),this.validate(e)}},{key:"handleSelectChange",value:function(e){var t=this.state.employee;t[e.target.name]=e.target.value,this.setState({employee:t}),this.validate(e)}},{key:"handleDateChange",value:function(e){var t=this.state.employee;t.dateOfBirth=e,this.setState({employee:t})}},{key:"handlePhotoChange",value:function(e){var t=this.state.employee;t.photoPath=k[e.target.value],this.setState({employee:t})}},{key:"handlePhotoToggle",value:function(){this.setState(function(e){return{previewPhoto:!e.previewPhoto}})}},{key:"handleSubmit",value:function(e){console.log(JSON.stringify(this.state.employee)),e.preventDefault()}},{key:"validate",value:function(e){for(var t in this.state.employee)console.log(t,this.state.employee[t]),this.state.employee[t]!==x[t]&&this.setState({dirty:!0});var a=!1,r="".concat(e.target.id,"Control");"radio"!==e.target.type&&"checkbox"!==e.target.type||(r="".concat(e.target.name,"Control")),e.target.required?null===e.target.value||0===e.target.value.trim().length?(this.setState(Object(w.a)({},r,{touched:!0,hasError:!0,hasSuccess:!1}),function(){this.handleSaveButton()}),a=!0):this.setState(Object(w.a)({},r,{touched:!0,hasError:!1,hasSuccess:!0}),function(){this.handleSaveButton()}):this.setState(Object(w.a)({},r,{touched:!0,hasError:!1,hasSuccess:!1}),function(){this.handleSaveButton()}),e.target.required&&e.target.pattern&&(RegExp(e.target.pattern).test(e.target.value)?this.setState(function(e){return Object(w.a)({},r,{touched:!0,invalid:!1,hasError:!1,hasSuccess:!0})}):a||(this.setState(function(e){return Object(w.a)({},r,{touched:!0,invalid:!0,hasError:!0,hasSuccess:e[r].hasSuccess})}),a=!0))}},{key:"handleSaveButton",value:function(){var e=document.getElementById("email"),t=document.getElementById("phoneNumber"),a=document.getElementsByName("isActive")[0],r=document.getElementById("department"),n=document.getElementById("password"),l=document.getElementById("confirmPassword");this.state.fullNameControl.touched&&this.state.fullNameControl.hasSuccess&&this.state.contactPreferenceControl.touched&&!this.state.contactPreferenceControl.hasError&&(e.required&&this.state.emailControl.touched&&this.state.emailControl.hasSuccess&&!this.state.emailControl.invalid||!e.required)&&(t.required&&this.state.phoneNumberControl.touched&&this.state.phoneNumberControl.hasSuccess||!t.required)&&this.state.genderControl.touched&&this.state.genderControl.hasSuccess&&(a.required&&!this.state.isActiveControl.invalid||!a.required)&&(r.required&&this.state.departmentControl.touched&&!this.state.departmentControl.hasError||!r.required)&&(n.required&&this.state.passwordControl.touched&&!this.state.passwordControl.hasError||!n.required)&&(l.required&&this.state.confirmPasswordControl.touched&&!this.state.confirmPasswordControl.hasError||!l.required)&&this.state.employee.password===this.state.employee.confirmPassword?this.setState({employeeForm:{invalid:!1}}):this.setState({employeeForm:{invalid:!0}})}},{key:"handleDynamicRequired",value:function(e){if("email"===e.target.value){this.enableHasError("email",!0);var t=document.getElementById("email");"email"===this.state.employee.contactPreference&&t.pattern&&(RegExp(t.pattern).test(t.value)?this.setState(function(e){return Object(w.a)({},"emailControl",{touched:!0,invalid:!1,hasError:!1,hasSuccess:!0})}):this.setState(function(e){return Object(w.a)({},"emailControl",{touched:!0,invalid:!0,hasError:!0,hasSuccess:!1})})),this.enableHasError("phoneNumber",!1)}else"phoneNumber"===e.target.value&&(this.enableHasError("phoneNumber",!0),this.enableHasError("email",!1))}},{key:"enableHasError",value:function(e,t){var a="".concat(e,"Control"),r=document.getElementById(e).value;!t||null!==r&&0!==r.trim().length?this.setState(function(e){return Object(w.a)({},a,{hasError:!1,hasSuccess:!1})},function(){this.handleSaveButton()}):this.setState(function(e){return Object(w.a)({},a,{hasError:!0,hasSuccess:!1})},function(){this.handleSaveButton()})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("div",{className:"panel panel-primary"},n.a.createElement("div",{className:"panel-heading"},n.a.createElement("h3",{className:"panel-title"},"Create Employee")),n.a.createElement("div",{className:"panel-body"},n.a.createElement("div",{className:"form-group "+(this.state.fullNameControl.hasError?"has-error":"")+(this.state.fullNameControl.hasSuccess?"has-success":"")},n.a.createElement("label",{htmlFor:"fullName"},"Full Name"),n.a.createElement("input",{id:"fullName",type:"text",className:"form-control",name:"fullName",required:!0,value:this.state.employee.fullName,onChange:this.handleChange,onBlur:this.validate}),this.state.fullNameControl.hasError?n.a.createElement("span",{className:"help-block"},"Full Name is required"):null),n.a.createElement("div",{className:"form-group "+(this.state.emailControl.hasError?"has-error":"")+(this.state.emailControl.hasSuccess?"has-success":"")},n.a.createElement("label",{htmlFor:"email"},"Email"),n.a.createElement("input",{id:"email",type:"text",className:"form-control",name:"email",required:"email"===this.state.employee.contactPreference,pattern:"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$",value:this.state.employee.email,onChange:this.handleChange,onBlur:this.validate}),this.state.emailControl.hasError?n.a.createElement("span",{className:"help-block"},"Email is required"):null,this.state.emailControl.invalid?n.a.createElement("span",{className:"help-block"},"Email is invalid"):null),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"phoneNumber"},"Phone Number"),n.a.createElement("input",{id:"phoneNumber",type:"text",className:"form-control",name:"phoneNumber",required:"phoneNumber"===this.state.employee.contactPreference,value:this.state.employee.phoneNumber,onChange:this.handleChange,onBlur:this.validate}),this.state.phoneNumberControl.hasError?n.a.createElement("span",{className:"help-block"},"Phone Number is required"):null),n.a.createElement("div",{className:"form-group "+(this.state.contactPreferenceControl.hasError?"has-error":"")},n.a.createElement("label",null,"Contact Preference"),n.a.createElement("div",{className:"form-control"},n.a.createElement("label",{className:"radio-inline"},n.a.createElement("input",{type:"radio",name:"contactPreference",value:"email",required:!0,onChange:this.handleRadioChange,onBlur:this.validate}),"Email"),n.a.createElement("label",{className:"radio-inline"},n.a.createElement("input",{type:"radio",name:"contactPreference",value:"phoneNumber",required:!0,onChange:this.handleRadioChange}),"Phone")),this.state.contactPreferenceControl.hasError?n.a.createElement("span",{className:"help-block"},"Contact Preference is required"):null),n.a.createElement("div",{className:"form-group "+(this.state.genderControl.hasError?"has-error":"")},n.a.createElement("label",null,"Gender"),n.a.createElement("div",{className:"form-control"},n.a.createElement("label",{className:"radio-inline"},n.a.createElement("input",{type:"radio",name:"gender",value:"male",required:!0,onChange:this.handleRadioChange}),"Male"),n.a.createElement("label",{className:"radio-inline"},n.a.createElement("input",{type:"radio",name:"gender",value:"female",required:!0,onChange:this.handleRadioChange}),"Female")),this.state.genderControl.hasError?n.a.createElement("span",{className:"help-block"},"Gender is invalid"):null),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"form-control"},n.a.createElement("label",{className:"checkbox-inline"},n.a.createElement("input",{type:"checkbox",name:"isActive",required:!0,onChange:this.handleCheckboxChange}),"Is Active")),this.state.isActiveControl.invalid?n.a.createElement("span",{className:"help-block"},"Is Active is required"):null),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"department"},"Department"),n.a.createElement("select",{id:"department",name:"department",className:"form-control",required:!0,defaultValue:"",onChange:this.handleSelectChange,onBlur:this.validate},n.a.createElement("option",{value:"",disabled:!0},"Select Department"),[{id:1,name:"Help Desk"},{id:2,name:"HR"},{id:3,name:"IT"},{id:4,name:"Payroll"}].map(function(e){return n.a.createElement("option",{value:e.id,key:e.id},e.name)})),this.state.departmentControl.hasError?n.a.createElement("span",{className:"help-block"},"Department is required"):null),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"dateOfBirth"},"Date of Birth"),n.a.createElement(P.a,{className:"form-control",id:"dateOfBirth",name:"dateOfBirth",selected:this.state.employee.dateOfBirth,onChange:this.handleDateChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"photoPath"},"Photo Path"),n.a.createElement("input",{id:"photoPath",type:"text",className:"form-control",name:"photoPath",onChange:this.handlePhotoChange})),n.a.createElement("div",{className:"form-group"},this.state.previewPhoto?n.a.createElement("img",{src:this.state.employee.photoPath,height:"200",width:"200",alt:""}):null),n.a.createElement("div",{className:"form-group"},n.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.handlePhotoToggle},"Show Preview")),n.a.createElement("div",{className:"form-group "+(this.state.passwordControl.hasError?"has-error":"")},n.a.createElement("label",{htmlFor:"password"},"Password"),n.a.createElement("input",{id:"password",type:"text",className:"form-control",name:"password",required:!0,value:this.state.employee.password,onChange:this.handleChange,onBlur:this.validate}),this.state.passwordControl.hasError?n.a.createElement("span",{className:"help-block"},"Password is required"):null),n.a.createElement("div",{className:"form-group "+(this.state.confirmPasswordControl.hasError?"has-error":"")},n.a.createElement("label",{htmlFor:"confirmPassword"},"Confirm Password"),n.a.createElement("input",{id:"confirmPassword",type:"text",className:"form-control",name:"confirmPassword",required:!0,value:this.state.employee.confirmPassword,onChange:this.handleChange,onBlur:this.validate}),this.state.confirmPasswordControl.hasError?n.a.createElement("span",{className:"help-block"},"Confirm Password is required"):null,this.state.employee.password!==this.state.employee.confirmPassword?n.a.createElement("span",{className:"help-block"},"Password and Confirm Password does not match"):null),n.a.createElement("div",{className:"panel-footer"},n.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:this.state.employeeForm.invalid},"Save"))))),"Generated Model :",JSON.stringify(this.state.employee),n.a.createElement(S.a,{when:this.state.dirty,message:function(e){return"Are you sure you want to discard your changes?"}}))}}]),t}(r.Component),B=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={employee:b(a.props.match.params.id)},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"getNextEmployee",value:function(){var e=parseInt(this.props.match.params.id);e<3?e+=1:e=1,this.props.history.push("/employees/".concat(e)),this.setState({employee:b(e.toString())})}},{key:"render",value:function(){return n.a.createElement("div",{className:"panel panel-primary"},n.a.createElement("div",{className:"panel-heading"},n.a.createElement("h3",{className:"panel-title"},this.state.employee.name)),n.a.createElement("div",{className:"panel-body"},n.a.createElement("div",{className:"col-xs-10"},n.a.createElement("div",{className:"row vertical-align"},n.a.createElement("div",{className:"col-xs-4"},n.a.createElement("img",{className:"imageClass",src:g()[this.state.employee.photoPath],alt:""})),n.a.createElement("div",{className:"col-xs-8"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xs-6"},"Gender"),n.a.createElement("div",{className:"col-xs-6"},": ",this.state.employee.gender)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xs-6"},"Date of Birth"),n.a.createElement("div",{className:"col-xs-6"},": ",f()(this.state.employee.dateOfBirth).format("ll"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xs-6"},"Contact Preference"),n.a.createElement("div",{className:"col-xs-6"},": ",this.state.employee.contactPreference)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xs-6"},"Phone"),n.a.createElement("div",{className:"col-xs-6"},": ",this.state.employee.phoneNumber)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xs-6"},"Email"),n.a.createElement("div",{className:"col-xs-6"},": ",this.state.employee.email)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xs-6"},"Department"),n.a.createElement("div",{className:"col-xs-6"},": ",this.state.employee.department)),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xs-6"},"Is Active"),n.a.createElement("div",{className:"col-xs-6"},": ",this.state.employee.isActive.toString())))))),n.a.createElement("div",{className:"panel-footer"},n.a.createElement(u.a,{className:"btn btn-primary",to:"/list/".concat(this.props.match.params.id)},"Back to List"),n.a.createElement("button",{className:"btn btn-primary pull-right",onClick:this.getNextEmployee.bind(this)},"View Next Employee")))}}]),t}(r.Component),q=y,D=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(d.a,null,n.a.createElement("div",{className:"container"},n.a.createElement("nav",{className:"navbar navbar-default"},n.a.createElement("ul",{className:"nav navbar-nav"},n.a.createElement("li",null,n.a.createElement(u.a,{to:"/list"},"List")),n.a.createElement("li",null,n.a.createElement(u.a,{to:"/create"},"Create")))),n.a.createElement(p.a,null,n.a.createElement(v.a,{exact:!0,path:"/",component:function(e){return n.a.createElement(C,Object.assign({},e,{employees:q}))}}),n.a.createElement(v.a,{exact:!0,path:"/create",component:j}),n.a.createElement(v.a,{exact:!0,path:"/list/:id?",component:function(e){return n.a.createElement(C,Object.assign({},e,{employees:q}))}}),n.a.createElement(v.a,{exact:!0,path:"/employees/:id",component:B}),n.a.createElement(v.a,{component:function(e){return n.a.createElement(C,Object.assign({},e,{employees:q}))}}))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.28e8e549.chunk.js.map