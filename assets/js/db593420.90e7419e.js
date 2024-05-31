"use strict";(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[620],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),o=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=o(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||c;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var o=2;o<c;o++)i[o]=r[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9388:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return o},toc:function(){return l},default:function(){return u}});var n=r(3117),a=r(102),c=(r(7294),r(3905)),i=["components"],p={id:"script",title:"Script",sidebar_label:"Script",slug:"/api/script"},s="Query Script",o={unversionedId:"api/script",id:"api/script",title:"Script",description:"Interface overview",source:"@site/docs/api/script.md",sourceDirName:"api",slug:"/api/script",permalink:"/docs/api/script",editUrl:"https://github.com/brc20pm/documentation/tree/develop/docs/api/script.md",tags:[],version:"current",lastUpdatedAt:1715525814,formattedLastUpdatedAt:"5/12/2024",frontMatter:{id:"script",title:"Script",sidebar_label:"Script",slug:"/api/script"},sidebar:"docs",previous:{title:"Block",permalink:"/docs/api/block"},next:{title:"Transaction Event",permalink:"/docs/api/transaction/event"}},l=[{value:"Interface overview",id:"interface-overview",children:[],level:2},{value:"Request parameters",id:"request-parameters",children:[],level:2},{value:"Request example",id:"request-example",children:[{value:"Request URL",id:"request-url",children:[],level:3},{value:"Request method",id:"request-method",children:[],level:3},{value:"Request sample parameters",id:"request-sample-parameters",children:[],level:3},{value:"Response example",id:"response-example",children:[],level:3}],level:2}],d={toc:l};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"query-script"},"Query Script"),(0,c.kt)("h2",{id:"interface-overview"},"Interface overview"),(0,c.kt)("p",null,"This interface provides access to script information based on the script address."),(0,c.kt)("h2",{id:"request-parameters"},"Request parameters"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"kid"),": 'Required parameters, script address'")),(0,c.kt)("h2",{id:"request-example"},"Request example"),(0,c.kt)("h3",{id:"request-url"},"Request URL"),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8765/api/script/:kid")),(0,c.kt)("h3",{id:"request-method"},"Request method"),(0,c.kt)("p",null,"GET"),(0,c.kt)("h3",{id:"request-sample-parameters"},"Request sample parameters"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"kid=ord47abb2fbaa4c85cd388b2fcc4bd430ed152208563958d519944d327b26"))),(0,c.kt)("h3",{id:"response-example"},"Response example"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": 200,\n    "data": {\n        "kid": "ord47abb2fbaa4c85cd388b2fcc4bd430ed152208563958d519944d327b26",\n        "script": "636c61737320436f6e747261637420657874656e6473204b464332307b696e697428297b746869732e5f6e616d653d224b46432d55534454222c746869732e5f73796d626f6c3d224b55534454222c746869732e5f746f74616c537570706c793d3965382c746869732e5f62616c616e6365732e7365744275636b657428746869732e5f6d736753656e64657228292c746869732e5f746f74616c537570706c79292c746869732e6576656e74287b6e616d653a225472616e73666572222c66726f6d3a223030303030222c746f3a746869732e5f6d736753656e64657228292c616d6f756e743a746869732e5f746f74616c537570706c797d297d7d",\n        "abi": "[{\\"name\\":\\"$name\\",\\"params\\":[]},{\\"name\\":\\"$symbol\\",\\"params\\":[]},{\\"name\\":\\"$totalSupply\\",\\"params\\":[]},{\\"name\\":\\"$balanceOf\\",\\"params\\":[\\"account\\"]},{\\"name\\":\\"approve\\",\\"params\\":[\\"sender\\",\\"amount\\"]},{\\"name\\":\\"increaseAllowance\\",\\"params\\":[\\"spender\\",\\"addedValue\\"]},{\\"name\\":\\"decreaseAllowance\\",\\"params\\":[\\"spender\\",\\"subtractedValue\\"]},{\\"name\\":\\"$allowance\\",\\"params\\":[\\"owner\\",\\"sender\\"]},{\\"name\\":\\"transfer\\",\\"params\\":[\\"recipient\\",\\"amount\\"]},{\\"name\\":\\"transferFrom\\",\\"params\\":[\\"sender\\",\\"recipient\\",\\"amount\\"]}]",\n        "owner": "2N7TYrDKNeZf4eVGXDVJyRKWaPdbx4qvCJj",\n        "create_hash": "286b3ce4daef3b8aed6b69716c3c1f63b3871ef8990d972375a1a216fb5209cc",\n        "create_time": 1705027792\n    },\n    "msg": "success"\n}\n')))}u.isMDXComponent=!0}}]);