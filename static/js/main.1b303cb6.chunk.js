(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){e.exports=a(181)},167:function(e,t,a){},180:function(e,t,a){},181:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(7),c=a.n(l),o=a(54),i=a(55),s=a(59),d=a(56),m=a(60),u=a(104),p=a(184),h=p.a.TreeNode,y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).onLoadData=function(e){return new Promise(function(t){e.props.children?t():setTimeout(function(){e.props.dataRef.children=[{title:"Child Node",key:"".concat(e.props.eventKey,"-0")},{title:"Child Node",key:"".concat(e.props.eventKey,"-1")}],a.setState({treeData:Object(u.a)(a.state.treeData)}),t()},1e3)})},a.renderTreeNodes=function(e){return e.map(function(e){return e.children?r.a.createElement(h,{title:e.title,key:e.key,dataRef:e},a.renderTreeNodes(e.children)):r.a.createElement(h,Object.assign({},e,{dataRef:e}))})},a.state={treeData:[{title:"Expand to load",key:"0"},{title:"Expand to load",key:"1"},{title:"Tree Node",key:"2",isLeaf:!0}]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.a,{loadData:this.onLoadData},this.renderTreeNodes(this.state.treeData)))}}]),t}(r.a.Component),E=(a(167),a(168),a(182)),f=a(183),b=a(185),g=a(76),N=E.a.Header,k=E.a.Content,j=E.a.Footer,v=f.a.Search,O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={pageName:["Home","test"]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){for(var e,t=[],a=0;a<this.state.pageName.length;a++)console.log(this.state.pageName[a]),t.push(r.a.createElement(b.a.Item,null,this.state.pageName[a]));return"Home"===this.state.pageName[0]&&(e=r.a.createElement(b.a,{style:{margin:"16px 0"}},t)),r.a.createElement("div",{className:"App"},r.a.createElement(E.a,{className:"layout"},r.a.createElement(N,null,r.a.createElement("div",{className:"logo"}),r.a.createElement(g.b,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],style:{lineHeight:"64px"}},r.a.createElement(v,{placeholder:"input search text",onSearch:function(e){return console.log(e)},style:{width:200}}),r.a.createElement(g.b.Item,{key:"1"},"Home"),r.a.createElement(g.b.Item,{key:"2"},"Show"),r.a.createElement(g.b.Item,{key:"3"},"Query"))),r.a.createElement(k,{style:{padding:"0 50px"}},e,r.a.createElement("div",{className:"wrap"},r.a.createElement(y,null))),r.a.createElement(j,{style:{textAlign:"center"}},"Ant Design \xa92018 Created by Ant UED")))}}]),t}(r.a.Component);a(180);c.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[108,1,2]]]);
//# sourceMappingURL=main.1b303cb6.chunk.js.map