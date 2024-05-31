"use strict";(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[575],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,g=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(g,a(a({ref:t},l),{},{components:r})):n.createElement(g,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7095:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var n=r(3117),o=r(102),i=(r(7294),r(3905)),a=["components"],s={id:"reporting",title:"Off-chain reporting",sidebar_label:"\ud83c\udf10 Off-chain reporting",slug:"/reporting"},c=void 0,p={unversionedId:"reporting",id:"reporting",title:"Off-chain reporting",description:"Off-chain reporting (OCR) is an important step towards increasing the decentralization and scalability of the OrdScript module.",source:"@site/docs/off-chain-reporting.md",sourceDirName:".",slug:"/reporting",permalink:"/docs/reporting",editUrl:"https://github.com/OrdScript/documentation/tree/develop/docs/off-chain-reporting.md",tags:[],version:"current",lastUpdatedAt:1717004379,formattedLastUpdatedAt:"5/30/2024",frontMatter:{id:"reporting",title:"Off-chain reporting",sidebar_label:"\ud83c\udf10 Off-chain reporting",slug:"/reporting"},sidebar:"docs",previous:{title:"\ud83d\udda5\ufe0f Working principle",permalink:"/docs/principle"},next:{title:"\ud83d\udce6 Installation",permalink:"/docs/installation/indexer"}},l=[{value:"How does OCR work?",id:"how-does-ocr-work",children:[],level:2}],u={toc:l};function d(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Off-chain reporting (OCR) is an important step towards increasing the decentralization and scalability of the OrdScript module.\nFor off-chain reporting aggregators, all nodes communicate using a peer-to-peer network. During the communication process, a lightweight consensus algorithm runs and each node reports its data response and signs it. Then transmit a single aggregate response,\nThe report contained in the aggregate response is signed by a quorum of nodes and contains the response results from all valid peers. By aggregating the P2P network to verify response reports and checking quorum signatures on responses, we preserve the trustless properties of the OrdScript module."),(0,i.kt)("h2",{id:"how-does-ocr-work"},"How does OCR work?"),(0,i.kt)("p",null,"Protocol execution occurs primarily off-chain on a peer-to-peer network between OrdScript nodes. Whenever a user obtains data through the off-chain reporting interface, the node that receives the request is the leader node that drives the rest of the protocol.\nThe leader asks the remaining nodes to provide response results and compiles them into a report. It then sends this report back to the follower after verifying the authenticity of the signature. The leader will aggregate the 51% threshold report with the quorum's signatures and respond to the requesting client."),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(5161).Z})),(0,i.kt)("p",null,"You can use it using JSON-RPC"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "method": "ocr_call",\n    "params": {\n        "quorum": 21, //Optional parameters, range 1-21, default 21\n        "call_data": {\n            "kid": "ord83633b22d3b7a211333081bece366c8f121994a",\n            "method": "$name",\n            "params": []\n        }\n    },\n    "id": "dd7bce47-26de-44f5-a6ca-5b1d7b03b215"\n}\n')))}d.isMDXComponent=!0},5161:function(e,t,r){t.Z=r.p+"assets/images/1716049726570-80b80b3061bf0dccd9d0605807d72431.jpg"}}]);