(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){e.exports=a(250)},105:function(e,t,a){},249:function(e,t,a){},250:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),i=a.n(c),l=(a(105),a(16)),s=a(17),o=a(19),u=a(18),m=a(20),h=a(15),p=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("section",{className:e.splashScreen})}}]),t}(n.Component),d=Object(h.withStyles)(function(e){return{splashScreen:{backgroundColor:e.palette.background.paper}}})(p),f=a(91),b=a.n(f),E=a(92),j=a.n(E),v=a(23),k=a.n(v),O=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){this.props.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{position:"static"},r.a.createElement(j.a,null,r.a.createElement(k.a,{variant:"title",color:"inherit"},"SnackIT App"))))}}]),t}(n.Component),y=a(25),g=a.n(y),S=a(26),w=a.n(S),C=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("section",{className:e.heroSection},r.a.createElement("div",{className:e.heroContent},r.a.createElement(k.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"Welcome"),r.a.createElement(k.a,{variant:"h6",align:"center",color:"textSecondary",paragraph:!0},"Choose your snack \u2026"),r.a.createElement("div",{className:e.heroButtons},r.a.createElement(g.a,{container:!0,spacing:16,justify:"center"},r.a.createElement(g.a,{item:!0},r.a.createElement(w.a,{variant:"contained",color:"primary"},"Search")),r.a.createElement(g.a,{item:!0},r.a.createElement(w.a,{variant:"outlined",color:"primary"},"Filter")),r.a.createElement(g.a,{item:!0},r.a.createElement(w.a,{variant:"outlined",color:"primary"},"Favorites"))))))}}]),t}(n.Component),N=Object(h.withStyles)(function(e){return{heroSection:{},heroContent:{maxWidth:600,margin:"0 auto",padding:"".concat(8*e.spacing.unit,"px 0 ").concat(6*e.spacing.unit,"px")},heroButtons:{marginTop:4*e.spacing.unit}}})(C),x=a(93),W=a.n(x),B=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).onSearchChange=function(t){e.setState({snackSearch:t.target.value})},e.state={snackSearch:""},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement("form",{className:e.formContainer,noValidate:!0,autoComplete:"off"},r.a.createElement(W.a,{id:"filled-search-full-width",className:e.textField,label:"search your snack",type:"search",margin:"normal",fullWidth:!0,value:this.state.snackSearch,onChange:this.onSearchChange})))}}]),t}(n.Component),F=Object(h.withStyles)(function(e){return{formContainer:{},textField:{}}})(B),I=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.filterSnackGroups})}}]),t}(n.Component),T=Object(h.withStyles)(function(e){return{filterSnackGroups:{}}})(I),_=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("section",{className:e.filterSection},r.a.createElement("div",{className:e.filterContent},r.a.createElement(F,null),r.a.createElement(T,null)))}}]),t}(n.Component),z=Object(h.withStyles)(function(e){return{filterSection:{},filterContent:{}}})(_),A=a(94),G=a.n(A),J=a(97),D=a.n(J),L=a(96),M=a.n(L),P=a(95),R=a.n(P);var U=Object(h.withStyles)(function(e){return{cardmedia:{height:0,paddingTop:"26.25%",backgroundColor:"red"}}})(function(e){var t=e.snack.meta,a=t.snack_brand,n=t.snack_price,c=t.snack_size,i=t.snack_description,l=e.snack.title,s=e.classes;return r.a.createElement("div",{className:"snack-item"},r.a.createElement("h3",{className:"snack-name"},e.snack?r.a.createElement(G.a,null,r.a.createElement(R.a,{className:s.cardmedia,image:"https://placeimg.com/640/480/nature/"+e.index,title:l.rendered}),r.a.createElement(M.a,null,r.a.createElement(k.a,{variant:"headline",component:"h2"},l.rendered),r.a.createElement(k.a,{gutterBottom:!0,variant:"headline",component:"h3"},a),r.a.createElement(k.a,{component:"p"},c," ",r.a.createElement("br",null),i)),r.a.createElement(D.a,null,"e",r.a.createElement(w.a,{size:"small",color:"primary"},(n/100).toLocaleString("de-DE",{style:"currency",currency:"EUR"})))):null))}),V=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).getSnackItems=function(){fetch("https://snackit.ritapbest.io/wp-json/wp/v2/snack").then(function(e){return e.json()}).then(function(t){e.setState({snacks:t,filteredSnacks:t})})},e.state={snacks:[],filteredSnacks:[]},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.getSnackItems()}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("section",{className:t.listSection},this.state.snacks?r.a.createElement(g.a,{container:!0,className:t.container,spacing:24},Object.keys(this.state.snacks).map(function(t){return r.a.createElement(g.a,{item:!0,xs:12,sm:6,lg:4,xl:2,key:t,index:t},r.a.createElement(U,{snack:e.state.snacks[t]}))})):r.a.createElement("div",null,"'No Snacks here'"))}}]),t}(n.Component),$=Object(h.withStyles)(function(e){return{listSection:{},container:{display:"flex",flexWrap:"wrap"}}})(V),q=a(98),H=a.n(q),K=a(99),Q=a.n(K),X=(Object(h.withStyles)(function(e){return{fab:{margin:e.spacing.unit}}})(function(e){var t=e.classes;return r.a.createElement("div",null,r.a.createElement(H.a,{color:"secondary","aria-label":"Add",className:t.fab},r.a.createElement(Q.a,null)))}),a(249),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"SnackIT"},r.a.createElement(d,null),r.a.createElement(O,null),r.a.createElement("main",null,r.a.createElement(N,null),r.a.createElement(z,null),r.a.createElement($,null)))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[100,1,2]]]);
//# sourceMappingURL=main.d3d6a24d.chunk.js.map