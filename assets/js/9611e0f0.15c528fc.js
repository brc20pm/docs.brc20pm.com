"use strict";(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[17],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9670:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var n=r(3117),a=r(102),l=(r(7294),r(3905)),i=["components"],o={id:"call",title:"Call Script",sidebar_label:"Call",slug:"/api/call"},c=void 0,p={unversionedId:"api/call",id:"api/call",title:"Call Script",description:"Interface overview",source:"@site/docs/api/call.md",sourceDirName:"api",slug:"/api/call",permalink:"/docs/api/call",editUrl:"https://github.com/brc20pm/documentation/tree/develop/docs/api/call.md",tags:[],version:"current",lastUpdatedAt:1715525814,formattedLastUpdatedAt:"5/12/2024",frontMatter:{id:"call",title:"Call Script",sidebar_label:"Call",slug:"/api/call"},sidebar:"docs",previous:{title:"Script Model",permalink:"/docs/api/model"},next:{title:"Local Simulation",permalink:"/docs/api/simulation"}},s=[{value:"Interface overview",id:"interface-overview",children:[],level:2},{value:"Request parameters",id:"request-parameters",children:[],level:2},{value:"Request example",id:"request-example",children:[{value:"Request URL",id:"request-url",children:[],level:3},{value:"Request method",id:"request-method",children:[],level:3},{value:"Request sample parameters",id:"request-sample-parameters",children:[],level:3},{value:"Response example",id:"response-example",children:[],level:3}],level:2}],u={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"interface-overview"},"Interface overview"),(0,l.kt)("p",null,"This interface provides script reading interaction"),(0,l.kt)("h2",{id:"request-parameters"},"Request parameters"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "sender": "",\n    "source": ""\n}\n')),(0,l.kt)("h2",{id:"request-example"},"Request example"),(0,l.kt)("h3",{id:"request-url"},"Request URL"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8765/api/call")),(0,l.kt)("h3",{id:"request-method"},"Request method"),(0,l.kt)("p",null,"POST"),(0,l.kt)("h3",{id:"request-sample-parameters"},"Request sample parameters"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "sender":"2N7TYrDKNeZf4eVGXDVJyRKWaPdbx4qvCJj",\n    "source":"7b226b6964223a226b666337663563663165356637653962383539373237643262666466323166306430383665373432346436636563383838386463353165316631313663222c226d6574686f64223a22246e616d65222c2261726773223a5b5d7d"\n}\n')),(0,l.kt)("h3",{id:"response-example"},"Response example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": 200,\n    "data": {\n        "input": {\n            "method": "$name",\n            "params": [],\n            "kid": "ord7f5cf1e5f7e9b859727d2bfdf21f0d086e7424d6cec8888dc51e1f116c"\n        },\n        "out": "INSC"\n    },\n    "msg": "success"\n}\n')))}d.isMDXComponent=!0}}]);