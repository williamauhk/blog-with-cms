(this["webpackJsonppurple4pur-s-blog"]=this["webpackJsonppurple4pur-s-blog"]||[]).push([[0],{38:function(e,t,a){e.exports=a.p+"static/media/logo.df728e58.ico"},42:function(e,t,a){e.exports=a(72)},51:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),c=a(7),o=a(19),s=a(1),u=a(2),i=a(4),h=a(3),p=a(5),m=a(16),d=(a(51),a(13)),v=(a(52),a(38)),O=a.n(v),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(h.a)(t).call(this,e))).state={navClass:"",hoverClass1:"",hoverClass2:"",hoverClass3:"",hoverClass4:"",hoverClass5:"",hoverClass6:""},a.toggleMenu=a.toggleMenu.bind(Object(d.a)(a)),a.handleOver1=a.handleOver1.bind(Object(d.a)(a)),a.handleOver2=a.handleOver2.bind(Object(d.a)(a)),a.handleOver3=a.handleOver3.bind(Object(d.a)(a)),a.handleOver4=a.handleOver4.bind(Object(d.a)(a)),a.handleOver5=a.handleOver5.bind(Object(d.a)(a)),a.handleOver6=a.handleOver6.bind(Object(d.a)(a)),a.handleOut=a.handleOut.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"toggleMenu",value:function(){""===this.state.navClass?this.setState({navClass:" openMenu"}):this.setState({navClass:""})}},{key:"handleOver1",value:function(){this.setState({hoverClass1:" hover"})}},{key:"handleOver2",value:function(){this.setState({hoverClass2:" hover"})}},{key:"handleOver3",value:function(){this.setState({hoverClass3:" hover"})}},{key:"handleOver4",value:function(){this.setState({hoverClass4:" hover"})}},{key:"handleOver5",value:function(){this.setState({hoverClass5:" hover"})}},{key:"handleOver6",value:function(){this.setState({hoverClass6:" hover"})}},{key:"handleOut",value:function(){this.setState({hoverClass1:"",hoverClass2:"",hoverClass3:"",hoverClass4:"",hoverClass5:"",hoverClass6:""})}},{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"header-ui"},r.a.createElement("span",{onClick:this.toggleMenu},r.a.createElement("i",{className:"fas fa-bars"})),r.a.createElement(c.c,{to:"/"},r.a.createElement("img",{src:O.a,alt:"Purple4pur's Blog"}))),r.a.createElement("nav",{className:"header-nav"+this.state.navClass},r.a.createElement("div",{className:"header-nav-bg-touch",onClick:this.toggleMenu}),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.c,{to:"/",className:"header-nav-mobile"},"\u9996\u9875 | HOME"),r.a.createElement(c.c,{to:"/",className:"header-nav-desktop"+this.state.hoverClass1,onMouseOver:this.handleOver1,onMouseOut:this.handleOut},"\u9996\u9875",r.a.createElement("div",null,r.a.createElement("span",null,"HOME")))),r.a.createElement("li",null,r.a.createElement(c.c,{to:"/coding",className:"header-nav-mobile"},"\u4ee3\u7801 | CODING"),r.a.createElement(c.c,{to:"/coding",className:"header-nav-desktop"+this.state.hoverClass2,onMouseOver:this.handleOver2,onMouseOut:this.handleOut},"\u4ee3\u7801",r.a.createElement("div",null,r.a.createElement("span",null,"CODING")))),r.a.createElement("li",null,r.a.createElement(c.c,{to:"/creating",className:"header-nav-mobile"},"\u521b\u4f5c | CREATING"),r.a.createElement(c.c,{to:"/creating",className:"header-nav-desktop"+this.state.hoverClass3,onMouseOver:this.handleOver3,onMouseOut:this.handleOut},"\u521b\u4f5c",r.a.createElement("div",null,r.a.createElement("span",null,"CREATING")))),r.a.createElement("li",null,r.a.createElement(c.c,{to:"/thoughts",className:"header-nav-mobile"},"\u6742\u8c08 | THOUGHTS"),r.a.createElement(c.c,{to:"/thoughts",className:"header-nav-desktop"+this.state.hoverClass4,onMouseOver:this.handleOver4,onMouseOut:this.handleOut},"\u6742\u8c08",r.a.createElement("div",null,r.a.createElement("span",null,"THOUGHTS")))),r.a.createElement("li",null,r.a.createElement(c.c,{to:"/tags",className:"header-nav-mobile"},"\u6807\u7b7e | TAGS"),r.a.createElement(c.c,{to:"/tags",className:"header-nav-desktop"+this.state.hoverClass5,onMouseOver:this.handleOver5,onMouseOut:this.handleOut},"\u6807\u7b7e",r.a.createElement("div",null,r.a.createElement("span",null,"TAGS")))),r.a.createElement("li",null,r.a.createElement(c.c,{to:"/about",className:"header-nav-mobile"},"\u5173\u4e8e | ABOUT"),r.a.createElement(c.c,{to:"/about",className:"header-nav-desktop"+this.state.hoverClass6,onMouseOver:this.handleOver6,onMouseOut:this.handleOut},"\u5173\u4e8e",r.a.createElement("div",null,r.a.createElement("span",null,"ABOUT")))))))}}]),t}(n.PureComponent),g=(a(54),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("span",null,r.a.createElement("i",{className:"far fa-copyright"})," ",r.a.createElement(c.b,{to:"/about"},"Purple4pur")," | 2020"),r.a.createElement("span",null,r.a.createElement("a",{href:"http://www.beian.miit.gov.cn/",target:"_blank",rel:"noopener noreferrer"},"\u7ca4ICP\u590719158409\u53f7-1")))}}]),t}(n.PureComponent)),f="START_FETCH_LIST",E="FETCH_LIST_SUCCESS",j="FETCH_LIST_FAILED",C="START_FETCH_TAGS",y="FETCH_TAGS_SUCCESS",k="FETCH_TAGS_FAILED",S=a(40),T=a.n(S).a.create({baseURL:"http://localhost/php"}),L=function(e,t,a){return T.post("/login.php",{username:e,password:t,decoratedToken:a})},I=function(e){return{type:E,payload:{data:e}}},M=function(){return{type:j}},D=function(){return{type:k}},N=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("li",null,r.a.createElement("h3",null,this.props.title),r.a.createElement("p",null,this.props.content))}}]),t}(n.PureComponent),P=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.categoryID?this.props.fetchList(this.props.categoryID,void 0):this.props.fetchList(void 0,this.props.tagID)}},{key:"render",value:function(){return this.props.isLoading?r.a.createElement("div",null,"loading..."):this.props.fetchError?r.a.createElement("div",null,"\u83b7\u53d6\u6570\u636e\u5931\u8d25\uff0c\u8bf7\u4e0e\u7ef4\u62a4\u8005\u8054\u7cfb\u3002"):r.a.createElement("ul",null,this.props.list.map((function(e){return r.a.createElement(N,Object.assign({key:e.id},e))})))}}]),t}(n.PureComponent),w=Object(o.b)((function(e){return{isLoading:e.postList.isLoading,fetchError:e.postList.fetchError,list:e.postList.list}}),{fetchList:function(e,t){return function(a){var n;a({type:f}),e?(n=e,T.get("/categories.php",{params:{categoryID:n}})).then((function(e){200===e.status?a(I(e.data)):(console.log("fetch list error: status = "+e.status),a(M()))})).catch((function(e){console.log(e),a(M())})):function(e){return T.get("/tags.php",{params:{tagID:e}})}(t).then((function(e){200===e.status?a(I(e.data)):(console.log("fetch list error: status = "+e.status),a(M()))})).catch((function(e){console.log(e),a(M())}))}}})(P),U=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("li",null,r.a.createElement(c.b,{to:"/tags/"+this.props.id},r.a.createElement("span",null,this.props.name)))}}]),t}(n.PureComponent),F=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchTags()}},{key:"render",value:function(){return this.props.isLoading?r.a.createElement("div",null,"loading..."):this.props.fetchError?r.a.createElement("div",null,"\u83b7\u53d6\u6570\u636e\u5931\u8d25\uff0c\u8bf7\u4e0e\u7ef4\u62a4\u8005\u8054\u7cfb\u3002"):r.a.createElement("ul",null,this.props.tags.map((function(e){return r.a.createElement(U,Object.assign({key:e.id},e))})))}}]),t}(n.PureComponent),A=Object(o.b)((function(e){return{isLoading:e.tagList.isLoading,fetchError:e.tagList.fetchError,tags:e.tagList.tags}}),{fetchTags:function(){return function(e){e({type:C}),T.get("/tags.php").then((function(t){var a;200===t.status?e((a=t.data,{type:y,payload:{data:a}})):(console.log("fetch list error: status = "+t.status),e(D()))})).catch((function(t){console.log(t),e(D())}))}}})(F),_=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"\u8fd9\u91cc\u662f\u9996\u9875\u3002Coming soon..."))}}]),t}(n.PureComponent),x=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"\u8fd9\u91cc\u662f\u4ee3\u7801\u3002Coming soon."),r.a.createElement(w,{categoryID:1}))}}]),t}(n.PureComponent),H=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"\u8fd9\u91cc\u662f\u521b\u4f5c\u3002Coming soon."),r.a.createElement(w,{categoryID:2}))}}]),t}(n.PureComponent),G=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"\u8fd9\u91cc\u662f\u6742\u8c08\u3002Coming soon."),r.a.createElement(w,{categoryID:3}))}}]),t}(n.PureComponent),R=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"\u8fd9\u91cc\u662f\u5173\u4e8e\u3002Coming soon."))}}]),t}(n.PureComponent),J=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.props.match.params.tagID?r.a.createElement(w,{tagID:this.props.match.params.tagID}):r.a.createElement(A,null)}}]),t}(n.PureComponent),W=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"404. \u672a\u627e\u5230\u6b64\u9875\u9762\u3002")}}]),t}(n.PureComponent),B=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(h.a)(t).call(this,e))).checkToken=function(){localStorage.getItem("purple4pur/blog:JWT")?L(void 0,void 0,localStorage.getItem("purple4pur/blog:JWT")).then((function(e){e.data.activeUser&&a.setState({isLoggedIn:!0,activeUser:e.data.activeUser})})):a.setState({isLoggedIn:!1,activeUser:""})},a.handleChgUser=function(e){a.setState({user:e.target.value})},a.handleChgPwd=function(e){a.setState({pwd:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),L(a.state.user,a.state.pwd,void 0).then((function(e){"Verified."===e.data?(localStorage.setItem("purple4pur/blog:JWT",e.headers.authorization),a.setState({isLoggedIn:!0,activeUser:a.state.user})):console.log(e.data)})).catch((function(e){console.log(e)}))},a.handleReset=function(e){e.preventDefault(),a.setState({user:"",pwd:""})},a.handleRmToken=function(){localStorage.removeItem("purple4pur/blog:JWT"),a.checkToken()},a.state={user:"purple4pur",pwd:"123456",isLoggedIn:!1,activeUser:""},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.checkToken()}},{key:"render",value:function(){return this.state.isLoggedIn?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"\u5df2\u7ecf\u767b\u9646\u4e3a\uff1a",this.state.activeUser),r.a.createElement("input",{type:"button",value:"\u9000\u51fa",onClick:this.handleRmToken})):r.a.createElement("form",null,r.a.createElement("div",null,r.a.createElement("input",{type:"text",name:"username",placeholder:"username",value:this.state.user,autoComplete:"off",onChange:this.handleChgUser})),r.a.createElement("div",null,r.a.createElement("input",{type:"password",name:"password",placeholder:"********",value:this.state.pwd,autoComplete:"off",onChange:this.handleChgPwd})),r.a.createElement("input",{type:"submit",value:"\u767b\u9646",onClick:this.handleSubmit}),r.a.createElement("input",{type:"reset",value:"\u91cd\u7f6e",onClick:this.handleReset}))}}]),t}(n.PureComponent),q=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),r.a.createElement(m.d,null,r.a.createElement(m.b,{component:_,path:"/",exact:!0}),r.a.createElement(m.b,{component:x,path:"/coding",exact:!0}),r.a.createElement(m.b,{component:H,path:"/creating",exact:!0}),r.a.createElement(m.b,{component:G,path:"/thoughts",exact:!0}),r.a.createElement(m.b,{component:J,path:"/tags",exact:!0}),r.a.createElement(m.b,{component:J,path:"/tags/:tagID",exact:!0}),r.a.createElement(m.b,{component:R,path:"/about",exact:!0}),r.a.createElement(m.b,{component:W,path:"/404",exact:!0}),r.a.createElement(m.b,{component:B,path:"/admin",exact:!0}),r.a.createElement(m.a,{to:"/404"})),r.a.createElement(g,null))}}]),t}(n.PureComponent),z=a(18),V=a(41),K=a(17),Q={isLoading:!1,fetchError:!1,list:[]},X={isLoading:!1,fetchError:!1,tags:[]},Y=Object(z.c)({postList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(K.a)({},e,{isLoading:!0});case E:return Object(K.a)({},e,{isLoading:!1,fetchError:!1,list:t.payload.data});case j:return Object(K.a)({},e,{isLoading:!1,fetchError:!0});default:return e}},tagList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(K.a)({},e,{isLoading:!0});case y:return Object(K.a)({},e,{isLoading:!1,fetchError:!1,tags:t.payload.data});case k:return Object(K.a)({},e,{isLoading:!1,fetchError:!0});default:return e}}}),Z=Object(z.d)(Y,Object(z.a)(V.a));Object(l.render)(r.a.createElement(o.a,{store:Z},r.a.createElement(c.a,{forceRefresh:!0},r.a.createElement(q,null))),document.querySelector("#root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.824823cd.chunk.js.map