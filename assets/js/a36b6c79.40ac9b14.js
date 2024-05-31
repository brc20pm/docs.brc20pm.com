"use strict";(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[718],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9026:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],l={id:"tx-event",title:"Transaction Event",sidebar_label:"Transaction Event",slug:"/api/transaction/event"},c="Transaction Event",s={unversionedId:"api/tx-event",id:"api/tx-event",title:"Transaction Event",description:"Interface overview",source:"@site/docs/api/tx-event.md",sourceDirName:"api",slug:"/api/transaction/event",permalink:"/docs/api/transaction/event",editUrl:"https://github.com/OrdScript/documentation/tree/develop/docs/api/tx-event.md",tags:[],version:"current",lastUpdatedAt:1715525814,formattedLastUpdatedAt:"5/12/2024",frontMatter:{id:"tx-event",title:"Transaction Event",sidebar_label:"Transaction Event",slug:"/api/transaction/event"},sidebar:"docs",previous:{title:"Script",permalink:"/docs/api/script"},next:{title:"Block Event",permalink:"/docs/api/block/event"}},p=[{value:"Interface overview",id:"interface-overview",children:[],level:2},{value:"Request parameters",id:"request-parameters",children:[],level:2},{value:"Request example",id:"request-example",children:[{value:"Request URL",id:"request-url",children:[],level:3},{value:"Request method",id:"request-method",children:[],level:3},{value:"Request sample parameters",id:"request-sample-parameters",children:[],level:3},{value:"Response example",id:"response-example",children:[],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"transaction-event"},"Transaction Event"),(0,i.kt)("h2",{id:"interface-overview"},"Interface overview"),(0,i.kt)("p",null,"This interface provides a list of events generated under the transaction based on the transaction Hash."),(0,i.kt)("h2",{id:"request-parameters"},"Request parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"txHash"),": 'Required parameter, transaction Hash value'")),(0,i.kt)("h2",{id:"request-example"},"Request example"),(0,i.kt)("h3",{id:"request-url"},"Request URL"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8765/api/tx/logs/:hash")),(0,i.kt)("h3",{id:"request-method"},"Request method"),(0,i.kt)("p",null,"GET"),(0,i.kt)("h3",{id:"request-sample-parameters"},"Request sample parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"txHash=286b3ce4daef3b8aed6b69716c3c1f63b3871ef8990d972375a1a216fb5209cc"))),(0,i.kt)("h3",{id:"response-example"},"Response example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": 200,\n    "data": [\n        {\n            "e_hash": "feaf4f07446e054f1e293e8a88ee7300f96ea168121831ac90e2b37949180e61",\n            "height": 2588458,\n            "tx_hash": "84873f52a254e62eadd8339801562ab1b70fc0ac81f50fe3d50a4430e6978c3f",\n            "kid": "ordc99046834c9cf08c0caefe78b7345b3d0e04445",\n            "name": "Transfer",\n            "args": {\n                "amount": 900,\n                "from": "tb1p0yfutsrnm4hfs4yvfqr2x7l906ttnksnw2df5n3q25n8e5kngecq8u4du0",\n                "to": "tb1p34m75h6r6xd5ekx9pvt9uhgr69776pmelkwv2tpd756qxr94lh4qevaw80"\n            },\n            "timestamp": 1713718765\n        }\n    ],\n    "msg": "success"\n}\n')))}d.isMDXComponent=!0}}]);