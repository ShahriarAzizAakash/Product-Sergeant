webpackJsonp([1],{"2Dfl":function(e,t){},"6FQG":function(e,t){},"7Otq":function(e,t,r){e.exports=r.p+"static/img/logo.11566c6.png"},"9dd/":function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("img",{staticClass:"logo",attrs:{src:r("7Otq")}}),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var n=r("VU/8")({name:"App"},o,!1,function(e){r("2Dfl")},null,null).exports,s=r("/ocq"),i=r("mtWM"),l=r.n(i),u={name:"Signin",data:function(){return{email:"",password:"",error:""}},created:function(){this.checkSignedIn()},updated:function(){this.checkSignedIn()},methods:{signin:function(){var e=this;l.a.post("https://product-sergeant-api.herokuapp.com/login",{email:this.email,password:this.password}).then(function(t){return e.signinSuccessful(t)}).catch(function(t){return e.signinFailed(t)})},signinSuccessful:function(e){e.data?(localStorage.token=e.data,localStorage.signedIn=!0,this.error="",this.$router.replace("/products")):this.signinFailed(e)},signinFailed:function(e){this.error=e.response&&e.response.data&&e.response.data.error||"",delete localStorage.token,delete localStorage.signedIn},checkSignedIn:function(){localStorage.signedIn&&this.$router.replace("/products")}}},c={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("form",{staticClass:"form-signin",on:{submit:function(t){return t.preventDefault(),e.signin(t)}}},[r("h3",[e._v("Login to Admin Portal")]),e._v(" "),r("hr"),e._v(" "),r("br"),e._v(" "),e.error?r("div",{staticClass:"alert alert-danger"},[e._v(e._s(e.error))]):e._e(),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"email"}},[e._v("Email address")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:"email@example.com",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[e._v("Password")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),r("button",{staticClass:"btn btn-primary mb-3",attrs:{type:"submit"}},[e._v("Sign in")]),e._v(" "),r("div",[r("router-link",{attrs:{to:"/signup"}},[e._v("Sign up")])],1)])])},staticRenderFns:[]};var d=r("VU/8")(u,c,!1,function(e){r("9dd/")},null,null).exports,p={name:"Signup",data:function(){return{email:"",password:"",password_confirmation:"",username:"",company_name:"",error:""}},created:function(){this.checkSignedIn()},updated:function(){this.checkSignedIn()},methods:{signup:function(){var e=this,t={company_name:this.company_name,username:this.username,email:this.email,password:this.password,password_confirmation:this.password_confirmation};l.a.post("https://product-sergeant-api.herokuapp.com/company/register",{user:t}).then(function(t){return e.signupSuccessful(t)}).catch(function(t){return e.signupFailed(t)})},signupSuccessful:function(e){e.data?(this.$router.replace("/"),alert("Account Created: "+e.data.user)):this.signupFailed(e)},signupFailed:function(e){this.error=e.response&&e.response.data&&e.response.data.error||"Something went wrong",delete localStorage.token,delete localStorage.signedIn},checkSignedIn:function(){localStorage.signedIn&&this.$router.replace("/products")}}},m={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("form",{staticClass:"form-signup",on:{submit:function(t){return t.preventDefault(),e.signup(t)}}},[r("h3",[e._v("Register Your Company")]),e._v(" "),r("hr"),e._v(" "),r("br"),e._v(" "),e.error?r("div",{staticClass:"alert alert-danger"},[e._v(e._s(e.error))]):e._e(),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"company_name"}},[e._v("Company Name")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.company_name,expression:"company_name"}],staticClass:"form-control",attrs:{type:"company_name",id:"company_name",placeholder:"ABC Inc.",required:""},domProps:{value:e.company_name},on:{input:function(t){t.target.composing||(e.company_name=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"username"}},[e._v("Username")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"form-control",attrs:{type:"username",id:"username",placeholder:"username",required:""},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"email"}},[e._v("Email address")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:"email@example.com",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[e._v("Password")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[e._v("Password Confirmation")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password_confirmation,expression:"password_confirmation"}],staticClass:"form-control",attrs:{type:"password",id:"password_confirmation",placeholder:"Password Confirmation",required:""},domProps:{value:e.password_confirmation},on:{input:function(t){t.target.composing||(e.password_confirmation=t.target.value)}}})]),e._v(" "),r("button",{staticClass:"btn btn-primary mb-3",attrs:{type:"submit"}},[e._v("Sign up")]),e._v(" "),r("div",[r("router-link",{attrs:{to:"/"}},[e._v("Sign in")])],1)])])},staticRenderFns:[]};var v=r("VU/8")(p,m,!1,function(e){r("6FQG")},null,null).exports,g={name:"addProduct",data:function(){return{name:"",origin:"",vendor:"",mydate:"",barcodeValue:"",error:""}},created:function(){localStorage.signedIn||this.$router.replace("/")},methods:{insertProduct:function(){if(localStorage.signedIn){var e={name:this.name,origin:this.origin,vendor:this.vendor,expiry_date:this.mydate,upc:this.barcodeValue};l.a.post("https://product-sergeant-api.herokuapp.com/products/new",{product:e},{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then(function(e){console.log(e),200==e.data.status?alert("Product Created!"):alert("Failed To Create Product!")}).catch(function(e){return console.log(e)})}},signOut:function(){var e=this;localStorage.signedIn&&l.a.delete("https://product-sergeant-api.herokuapp.com/logout").then(function(t){delete localStorage.token,delete localStorage.signedIn,e.$router.replace("/")}).catch(function(t){return e.setError(t,"Cannot sign out")})}}},f={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("form",{staticClass:"form-product",on:{submit:function(t){return t.preventDefault(),e.insertProduct(t)}}},[r("h3",[e._v("Insert New Product")]),e._v(" "),r("hr"),e._v(" "),r("br"),e._v(" "),e.error?r("div",{staticClass:"alert alert-danger"},[e._v(e._s(e.error))]):e._e(),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"productName"}},[e._v("Product Name")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{id:"productName",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"productOrigin"}},[e._v("Product Origin")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.origin,expression:"origin"}],staticClass:"form-control",attrs:{type:"productOrigin",id:"productOrigin",required:""},domProps:{value:e.origin},on:{input:function(t){t.target.composing||(e.origin=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"productVendor"}},[e._v("Product Vendor")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.vendor,expression:"vendor"}],staticClass:"form-control",attrs:{type:"productVendor",id:"productVendor",required:""},domProps:{value:e.vendor},on:{input:function(t){t.target.composing||(e.vendor=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"productExpiry"}},[e._v("Product Expiry Date")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.mydate,expression:"mydate"}],staticClass:"form-control",attrs:{type:"date",id:"productExpiry",required:""},domProps:{value:e.mydate},on:{input:function(t){t.target.composing||(e.mydate=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"productUPC"}},[e._v("Product UPC")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.barcodeValue,expression:"barcodeValue"}],staticClass:"form-control",attrs:{type:"barcodeValue",id:"productUPC",required:""},domProps:{value:e.barcodeValue},on:{input:function(t){t.target.composing||(e.barcodeValue=t.target.value)}}})]),e._v(" "),r("button",{staticClass:"btn btn-primary mb-3",attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),r("div",[r("label",{on:{click:e.signOut}},[e._v("Sign out")])])])])},staticRenderFns:[]};var _=r("VU/8")(g,f,!1,function(e){r("g82V")},null,null).exports;a.a.use(s.a);var h=new s.a({routes:[{path:"/",component:d},{path:"/signup",component:v},{path:"/products",component:_}]});a.a.config.productionTip=!1,a.a.prototype.$http=l.a;var w=localStorage.getItem("token");w&&(a.a.prototype.$http.defaults.headers.common.Authorization=w),new a.a({el:"#app",router:h,components:{App:n},template:"<App/>"})},g82V:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.54f59ba3059fcec16b39.js.map