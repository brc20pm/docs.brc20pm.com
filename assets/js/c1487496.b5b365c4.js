"use strict";(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[333],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,b=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return t?r.createElement(b,o(o({ref:n},s),{},{components:t})):r.createElement(b,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<l;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1868:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=t(3117),a=t(102),l=(t(7294),t(3905)),o=["components"],c={id:"json-rpc",title:"JSON-RPC",sidebar_label:"\ud83d\udcc4 JSON-RPC",slug:"/josnrpc"},i=void 0,p={unversionedId:"json-rpc",id:"json-rpc",title:"JSON-RPC",description:"Port",source:"@site/docs/json-rpc.md",sourceDirName:".",slug:"/josnrpc",permalink:"/docs/josnrpc",editUrl:"https://github.com/brc20pm/documentation/tree/develop/docs/json-rpc.md",tags:[],version:"current",lastUpdatedAt:1717004379,formattedLastUpdatedAt:"5/30/2024",frontMatter:{id:"json-rpc",title:"JSON-RPC",sidebar_label:"\ud83d\udcc4 JSON-RPC",slug:"/josnrpc"},sidebar:"docs",previous:{title:"Local Simulation",permalink:"/docs/api/simulation"},next:{title:"Others Notes",permalink:"/docs/others"}},s=[{value:"Port",id:"port",children:[],level:2},{value:"ord_call",id:"ord_call",children:[],level:2},{value:"ocr_call",id:"ocr_call",children:[],level:2},{value:"bestBlockNumber",id:"bestblocknumber",children:[],level:2},{value:"getTransaction",id:"gettransaction",children:[],level:2},{value:"getEvents",id:"getevents",children:[],level:2},{value:"getBlockNumber",id:"getblocknumber",children:[],level:2},{value:"getScriptModel",id:"getscriptmodel",children:[],level:2},{value:"version",id:"version",children:[],level:2}],u={toc:s};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST \\\n  http://xxx.xx:prot \\\n  -H 'Content-Type: application/json' \\\n")),(0,l.kt)("h2",{id:"port"},"Port"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Local")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"6399")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"TestNet")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"7399")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"MainNet")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"8399")),(0,l.kt)("h2",{id:"ord_call"},"ord_call"),(0,l.kt)("p",null,"Called through the light client interface"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "method": "ord_call",\n  "params": {\n    "kid": "ord7b19b528298c3dfae6e588b91b40945eaec4ad56bc29bb92bc023860ee",\n    "method":"$name",\n    "params":[]\n  },\n  "id": "243a718a-2ebb-4e32-8cc8-210c39e8a14b"\n}\n')),(0,l.kt)("h2",{id:"ocr_call"},"ocr_call"),(0,l.kt)("p",null,"Calling through multi-node aggregation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "method": "ocr_call",\n    "params": {\n        "quorum": 21, //Optional parameters, range 1-21, default 21\n        "call_data": {\n            "kid": "ord83633b22d3b7a211333081bece366c8f121994a",\n            "method": "$name",\n            "params": []\n        }\n    },\n    "id": "dd7bce47-26de-44f5-a6ca-5b1d7b03b215"\n}\n')),(0,l.kt)("h2",{id:"bestblocknumber"},"bestBlockNumber"),(0,l.kt)("p",null,"Get the latest block number of the index"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "method": "bestBlockNumber",\n  "params": {},\n  "id": "243a718a-2ebb-4e32-8cc8-210c39e8a14b"\n}\n')),(0,l.kt)("h2",{id:"gettransaction"},"getTransaction"),(0,l.kt)("p",null,"Query Transaction"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "method": "getTransaction",\n  "params": {\n    "hash":"efd7a5bfc05c04c1c18834abaf076c23980f059cb8283f250d622c11b8ae6a89"\n  },\n  "id": "243a718a-2ebb-4e32-8cc8-210c39e8a14b"\n}\n')),(0,l.kt)("h2",{id:"getevents"},"getEvents"),(0,l.kt)("p",null,"Query the event log"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "method": "getEvents",\n  "params": {\n    "number":"8528700",\n  },\n  "id": "243a718a-2ebb-4e32-8cc8-210c39e8a14b"\n}\n')),(0,l.kt)("h2",{id:"getblocknumber"},"getBlockNumber"),(0,l.kt)("p",null,"Query transactions contained in a block"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "method": "getBlockNumber",\n  "params": {\n    "number": "8528700"\n  },\n  "id": "243a718a-2ebb-4e32-8cc8-210c39e8a14b"\n}\n')),(0,l.kt)("h2",{id:"getscriptmodel"},"getScriptModel"),(0,l.kt)("p",null,"Query script model"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "method": "getScriptModel",\n  "params": {\n    "kid": "ordd266d91d0c96ca1cdc357f576571b26a662a7fa"\n  },\n  "id": "243a718a-2ebb-4e32-8cc8-210c39e8a14b"\n}\n')),(0,l.kt)("h2",{id:"version"},"version"),(0,l.kt)("p",null,"Query the indexer version"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "method": "version",\n  "id": "243a718a-2ebb-4e32-8cc8-210c39e8a14b"\n}\n')))}d.isMDXComponent=!0}}]);