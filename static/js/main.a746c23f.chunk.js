(this.webpackJsonpcarfuelfrontend=this.webpackJsonpcarfuelfrontend||[]).push([[0],{252:function(e,t,n){},253:function(e,t,n){},394:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(23),o=n.n(i),s=(n(252),n(253),n(153)),c=n(26),l=n(25),j=n(429),d=n(396),u=n(106),b=n(120),h=n(426),g=n(131),O=Object(h.a)((function(e){return{appBarMenu:{marginRight:e.spacing(2)},appTitle:Object(b.a)({display:"none"},e.breakpoints.up("sm"),{display:"block",fontWeight:"headers"}),flexgrow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},accountButton:{marginLeft:e.spacing(5),justifyContent:"flex-end"},headerContent:{marginLeft:e.spacing(100)},appCard:{justifyContent:"center",alignItems:"center"},avatar:{backgroundColor:g.a[100],color:g.a[600]},dialog:{minWidth:300,borderRadius:20},loginUsername:{height:45,width:"100%"},loginCardTitle:{fontWeight:"bold",fontSize:60,justifyContent:"center",alignContent:"center"},headers:{justifyContent:"center",alignItems:"center",alignContent:"center",fontWeight:"bold",fontSize:20},loginPaper:{height:500,width:500,justifyContent:"center",alignContent:"center",flexGrow:1},title:{fontSize:14,fontWeight:"bold"},button:{height:50,backgroundColor:"#347899",marginTop:50},buttonText:{color:"white",fontSize:15,fontWeight:"bold"},footer:{margin:0,backgroundColor:"#F5F7F9",height:"auto"},divider:{fontSize:20,fontWeight:"bold",marginTop:20},footerPaper:{height:"auto",marginTop:5,backgroundColor:"#AEDDF7"},homeCard:{height:150,margin:e.spacing(1),marginLeft:20,marginBottom:20,borderRadius:10},control:{padding:e.spacing(2)},root:{flexGrow:1,marginTop:20},allOrders:{marginTop:20,borderRadius:10,minHeight:500,backgroundColor:"#F6FAF9"}}})),f=n(455),m=n(235),p=n(5);var x=function(){var e=r.a.useState(0),t=Object(l.a)(e,2),n=(t[0],t[1],O()),a=r.a.useState(2),i=Object(l.a)(a,2);return i[0],i[1],Object(p.jsxs)("div",{children:[Object(p.jsx)(j.a,{container:!0,justifyContent:"center",children:[{type:"New Orders",number:998182},{type:"Delivered Orders",number:771828271},{type:"Cancelled Orders",number:90},{type:"Closed Orders",number:1002029291}].map((function(e,t){return function(e,t,a){return Object(p.jsx)(j.a,{item:!0,xs:3,children:Object(p.jsx)(d.a,{className:n.homeCard,style:{backgroundColor:function(e){switch(e){case 0:return"#143477";case 1:return"#1078A5 ";case 2:return"#0A5239";default:return"#360E3A"}}(a)},children:Object(p.jsxs)(j.a,{direction:"column",justifyContent:"center",alignItems:"center",alignContent:"center",container:!0,children:[Object(p.jsxs)(u.a,{style:{color:"white",fontWeight:"bold",fontSize:30,marginTop:20},children:[" ",e]}),Object(p.jsx)(u.a,{color:"inherit",style:{color:"white",fontWeight:"bold",fontSize:20,marginTop:20},children:t})]})})},a)}(e.type,e.number,t)}))}),Object(p.jsxs)(j.a,{container:!0,justifyContent:"center",children:[Object(p.jsx)(j.a,{xs:7,item:!0,children:Object(p.jsx)(d.a,{className:n.allOrders,style:{flexGrow:1,marginRight:50}})}),Object(p.jsx)(j.a,{xs:4,item:!0,children:Object(p.jsx)(d.a,{className:n.allOrders,children:Object(p.jsx)(f.a,{width:800,height:400,children:Object(p.jsx)(m.a,{cx:200,cy:200,startAngle:180,endAngle:0,data:[{name:"New Orders",value:1888281},{name:"Delivered Orders",value:771828271},{name:"Cancelled Orders",value:90},{name:"Closed Orders",value:1002029291}],dataKey:"value",fill:"red",outerRadius:80,label:!0})})})})]})]})},y=n(40),C=n(434);function v(e){var t=O();return Object(p.jsx)(j.a,{children:Object(p.jsx)(d.a,{className:t.loginPaper,children:Object(p.jsx)(C.a,{children:e.children})})})}var S=n(452),w=n(436),T=n(227),N=n(228),k=n(229),W=n(234),I=n(88),F=(n(388),function(e){Object(k.a)(n,e);var t=Object(W.a)(n);function n(e){var a;return Object(T.a)(this,n),a=t.call(this,e),I.a.configure(),a}return Object(N.a)(n,[{key:"showSuccessToast",value:function(e){I.a.success(e,{position:I.a.POSITION.BOTTOM_RIGHT})}},{key:"showErrorToast",value:function(e){I.a.error(e,{position:I.a.POSITION.BOTTOM_RIGHT})}}]),n}(r.a.Component)),L={baseUrl:"https://carfueldjango.herokuapp.com"};function z(){var e=new F,t=Object(c.f)(),n=O(),a=r.a.useState({username:"",password:"",token:"",isLoading:!1}),i=Object(l.a)(a,2),o=i[0],s=i[1];return Object(p.jsx)(j.a,{justifyContent:"center",alignItems:"center",style:{minHeight:"100vh"},container:!0,children:Object(p.jsx)(j.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justifyContent:"center",alignContent:"center",children:Object(p.jsxs)(v,{children:[Object(p.jsx)(j.a,{justifyContent:"center",alignItems:"center",alignContent:"center",container:!0,children:Object(p.jsx)(u.a,{className:n.headers,children:"Enter your login details"})}),Object(p.jsx)("div",{style:{marginTop:50},children:Object(p.jsxs)(j.a,{direction:"column",container:!0,children:[Object(p.jsxs)("form",{noValidate:!0,autoComplete:"off",className:"form",style:{marginTop:30},children:[Object(p.jsx)(S.a,{id:"username",label:"Username",variant:"outlined",fullWidth:!0,style:{marginBottom:"1em"},onChange:function(e){return t=e.target.value,void s(Object(y.a)(Object(y.a)({},o),{},{username:t}));var t},value:o.username}),Object(p.jsx)(S.a,{id:"password",label:"Password",variant:"outlined",type:"password",fullWidth:!0,value:o.password,onChange:function(e){return t=e.target.value,void s(Object(y.a)(Object(y.a)({},o),{},{password:t}));var t}})]}),Object(p.jsx)(w.a,{variant:"outlined",className:n.button,fullWidth:!0,disabled:o.isLoading,children:Object(p.jsx)(u.a,{variant:"h6",className:n.buttonText,onClick:function(){return function(){if(t.push("/home"),s(Object(y.a)(Object(y.a)({},o),{},{isLoading:!0})),!(o.username.length<4||o.password.length<4)){var n=L.baseUrl+"/api/users/login/",a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:o.username,password:o.password,email:o.username,RoleId:1})};fetch(n,a).then((function(e){return e.json()})).then((function(t){var n=JSON.parse(JSON.stringify(t));null!=n.User.token?(sessionStorage.setItem("token",n.User.token),sessionStorage.setItem("user",n.User.username),s(Object(y.a)(Object(y.a)({},o),{},{isLoading:!1})),e.showSuccessToast(t.message)):(s(Object(y.a)(Object(y.a)({},o),{},{isLoading:!1})),e.showErrorToast(t.message))})).catch((function(e){s(Object(y.a)(Object(y.a)({},o),{},{isLoading:!1})),console.log("Error ",e)}))}}()},children:"Login"})})]})})]})})})}var P=n(444),R=n(445),B=n(446),G=n(447),D=n(232),M=n.n(D),U=n(448),A=n(449),E=n(450),H=n(456),J=n(437),V=n(435),Y=n(438),_=n(439),K=n(457),X=n(441),q=n(440),Q=n(442),Z=n(443),$=function(e){var t=O(),n=e.onClose,a=e.selectedValue,r=e.open,i=function(e){console.log(e),n(e)};return Object(p.jsxs)(H.a,{onClose:function(){n(a)},open:r,classes:{paper:t.dialog},children:[Object(p.jsx)(J.a,{title:"User Settings",children:"User Settings"}),Object(p.jsxs)(V.a,{children:[Object(p.jsxs)(Y.a,{autoFocus:!0,button:!0,onClick:function(){return i("Settings")},children:[Object(p.jsx)(_.a,{children:Object(p.jsx)(K.a,{className:t.avatar,children:Object(p.jsx)(q.a,{})})}),Object(p.jsx)(X.a,{primary:"Settings"})]}),Object(p.jsxs)(Y.a,{autoFocus:!0,button:!0,onClick:function(){return i("Profile")},children:[Object(p.jsx)(_.a,{children:Object(p.jsx)(K.a,{className:t.avatar,children:Object(p.jsx)(Q.a,{})})}),Object(p.jsx)(X.a,{primary:"Profile"})]}),Object(p.jsxs)(Y.a,{autoFocus:!0,button:!0,onClick:function(){localStorage.clear(),n(a)},children:[Object(p.jsx)(_.a,{children:Object(p.jsx)(K.a,{children:Object(p.jsx)(Z.a,{})})}),Object(p.jsx)(X.a,{primary:"Logout"})]})]})]})};function ee(){var e=O(),t=r.a.useState(localStorage.getItem("isloggedIn")),n=Object(l.a)(t,2),a=n[0],i=(n[1],new Date),o=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate(),s=i.getHours()+":"+i.getMinutes(),c=r.a.useState("user02@gmail.com"),j=Object(l.a)(c,2),d=j[0],b=j[1],h=r.a.useState(!1),g=Object(l.a)(h,2),f=g[0],m=g[1];return Object(p.jsx)(P.a,{position:"static",style:{backgroundColor:"#347899"},children:a?Object(p.jsxs)(R.a,{children:[Object(p.jsx)(B.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer",children:Object(p.jsx)(M.a,{})}),Object(p.jsx)(u.a,{style:{flexGrow:1,fontSize:18,fontWeight:"bold"},children:"Dashboard"}),Object(p.jsx)(u.a,{className:e.appTitle,style:{fontWeight:"bold",fontSize:18},children:o}),Object(p.jsx)(u.a,{className:e.appTitle,style:{fontWeight:"bold",marginLeft:10,fontSize:18},children:s}),Object(p.jsx)(u.a,{className:e.appTitle,style:{fontWeight:"bold",fontSize:18,marginLeft:10},children:"Sebastian Mutuku"}),Object(p.jsx)(B.a,{"aria-label":"Notification","aria-controls":"menu-appbar","aria-haspopup":"true",color:"inherit",children:Object(p.jsx)(G.a,{badgeContent:4,color:"secondary",children:Object(p.jsx)(U.a,{})})}),Object(p.jsx)(B.a,{"aria-label":"Message","aria-controls":"menu-appbar","aria-haspopup":"true",color:"inherit",children:Object(p.jsx)(G.a,{badgeContent:4,color:"secondary",children:Object(p.jsx)(A.a,{})})}),Object(p.jsx)(B.a,{"aria-label":"Message","aria-controls":"menu-appbar","aria-haspopup":"true",color:"inherit",onClick:function(){m(!0)},children:Object(p.jsx)(E.a,{})}),Object(p.jsx)($,{selectedValue:d,open:f,onClose:function(e){m(!1),b(e)}})]}):Object(p.jsxs)(R.a,{children:[Object(p.jsx)(u.a,{style:{fontSize:14,flexGrow:1,fontWeight:"bold"},children:"Please Login or Register in to proceed"}),Object(p.jsx)(u.a,{className:e.appTitle,style:{fontWeight:"bold",fontSize:14},children:o}),Object(p.jsx)(u.a,{className:e.appTitle,style:{fontWeight:"bold",marginLeft:10,fontSize:14},children:s})]})})}var te=n(451);function ne(){var e=(new Date).getFullYear(),t=O(),n=r.a.useState(0),a=Object(l.a)(n,2),i=(a[0],a[1],{fontWeight:"bold",fontSize:12,margin:10,color:"#36756F"});return Object(p.jsxs)(j.a,{justifyContent:"space-evenly",direction:"row",container:!0,className:t.footer,alignItems:"center",children:[Object(p.jsx)(te.a,{className:t.divider,variant:"fullWidth"}),Object(p.jsxs)(u.a,{style:{fontWeight:"bold",flexGrow:1,margin:10,fontSize:12},children:["Copyright @",e]}),Object(p.jsx)(u.a,{style:i,children:"All Rights Reserved"}),Object(p.jsx)(u.a,{style:i,children:"Powered By NGINX"})]})}var ae=function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)(ee,{}),e.children,Object(p.jsx)(ne,{})]})};function re(){return Object(p.jsx)(ae,{children:Object(p.jsx)(s.a,{children:Object(p.jsxs)(c.c,{children:[Object(p.jsx)(c.a,{path:"/",children:Object(p.jsx)(z,{})}),Object(p.jsx)(c.a,{path:"/home",component:x,exact:!0})]})})})}var ie=function(){return Object(p.jsx)(re,{})},oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,459)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),i(e),o(e)}))};o.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(ie,{})}),document.getElementById("root")),oe()}},[[394,1,2]]]);
//# sourceMappingURL=main.a746c23f.chunk.js.map