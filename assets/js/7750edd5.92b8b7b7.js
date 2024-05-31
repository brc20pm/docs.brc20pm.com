"use strict";(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[241],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5304:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var n=r(3117),a=r(102),i=(r(7294),r(3905)),o=["components"],l={id:"local-simulation",title:"Local Simulation",sidebar_label:"Local Simulation",slug:"/api/simulation"},u=void 0,c={unversionedId:"api/local-simulation",id:"api/local-simulation",title:"Local Simulation",description:"Interface overview",source:"@site/docs/api/local-simulation.md",sourceDirName:"api",slug:"/api/simulation",permalink:"/docs/api/simulation",editUrl:"https://github.com/OrdScript/documentation/tree/develop/docs/api/local-simulation.md",tags:[],version:"current",lastUpdatedAt:1714989595,formattedLastUpdatedAt:"5/6/2024",frontMatter:{id:"local-simulation",title:"Local Simulation",sidebar_label:"Local Simulation",slug:"/api/simulation"},sidebar:"docs",previous:{title:"Call",permalink:"/docs/api/call"},next:{title:"\ud83d\udcc4 JSON-RPC",permalink:"/docs/josnrpc"}},s=[{value:"Interface overview",id:"interface-overview",children:[],level:2},{value:"Request parameters",id:"request-parameters",children:[],level:2},{value:"Request example",id:"request-example",children:[{value:"Request URL",id:"request-url",children:[],level:3},{value:"Request method",id:"request-method",children:[],level:3},{value:"Request sample parameters",id:"request-sample-parameters",children:[],level:3}],level:2}],p={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"interface-overview"},"Interface overview"),(0,i.kt)("p",null,"This interface provides local environment testing"),(0,i.kt)("h2",{id:"request-parameters"},"Request parameters"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    sender: account,\n    operation: "send || deploy",\n    source: str2Hex(arg)\n}\n')),(0,i.kt)("h2",{id:"request-example"},"Request example"),(0,i.kt)("h3",{id:"request-url"},"Request URL"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8765/api/indexer")),(0,i.kt)("h3",{id:"request-method"},"Request method"),(0,i.kt)("p",null,"POST"),(0,i.kt)("h3",{id:"request-sample-parameters"},"Request sample parameters"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "sender": "10000",\n    "operation": "send",\n    "source": "123213"\n}\n')))}d.isMDXComponent=!0}}]);