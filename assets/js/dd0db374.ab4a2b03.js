"use strict";(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[559],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,h=p["".concat(d,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4750:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],l={id:"standard",title:"New Standards",sidebar_label:"\ud83d\udd75\ufe0f Standard",slug:"/standard"},d=void 0,s={unversionedId:"standard",id:"standard",title:"New Standards",description:"In this standard, we will no longer use the address in the output script as the owner, but the fee payer of the relay transaction as the owner",source:"@site/docs/standard.md",sourceDirName:".",slug:"/standard",permalink:"/docs/standard",editUrl:"https://github.com/OrdScript/documentation/tree/develop/docs/standard.md",tags:[],version:"current",lastUpdatedAt:1717004379,formattedLastUpdatedAt:"5/30/2024",frontMatter:{id:"standard",title:"New Standards",sidebar_label:"\ud83d\udd75\ufe0f Standard",slug:"/standard"},sidebar:"docs",previous:{title:"\ud83d\udcd6 Introducing",permalink:"/docs/introducing"},next:{title:"\ud83d\udda5\ufe0f Working principle",permalink:"/docs/principle"}},c=[{value:"Deploy",id:"deploy",children:[],level:2},{value:"Send",id:"send",children:[],level:2},{value:"Minimum OutValue",id:"minimum-outvalue",children:[],level:2}],u={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this standard, we will no longer use the address in the output script as the owner, but the fee payer of the relay transaction as the owner"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Key"),(0,o.kt)("th",{parentName:"tr",align:null},"Required?"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"src"),(0,o.kt)("td",{parentName:"tr",align:null},"option"),(0,o.kt)("td",{parentName:"tr",align:null},"Programmable module (high priority): When op is deploy and src exists, it is considered a deployment script. When op is send and src exists, it is considered a call to the execution method,")))),(0,o.kt)("p",null,"Please check the complete standards ",(0,o.kt)("a",{parentName:"p",href:"https://domo-2.gitbook.io/brc-20-experiment"},"BRC20")),(0,o.kt)("h2",{id:"deploy"},"Deploy"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{ \n  "p": "brc-20",\n  "op": "deploy",\n  "src": "source code hex"\n}\n')),(0,o.kt)("h2",{id:"send"},"Send"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'\ncalldata = {\n    "kid":"",\n    "method":"",\n    "params":[...params]\n}\n\n{ \n  "p": "brc-20",\n  "op": "send",\n  "src": strToHex(JSON.stringify(calldata))\n}\n')),(0,o.kt)("p",null,"We should ensure that these keys always have a higher priority than other keys. When ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," exists, it will be recognized as a programmable module instruction and other keys will be excluded"),(0,o.kt)("h2",{id:"minimum-outvalue"},"Minimum OutValue"),(0,o.kt)("p",null,"The satoshi of the first output address should be greater than or equal to 2000"))}p.isMDXComponent=!0}}]);