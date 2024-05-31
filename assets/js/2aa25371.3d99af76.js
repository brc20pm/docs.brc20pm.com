"use strict";(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[669],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2005:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),s=["components"],o={id:"first-script",title:"The First Script",sidebar_label:"The First Script",slug:"/guide/first-script"},c="The first script",p={unversionedId:"guide/first-script",id:"guide/first-script",title:"The First Script",description:"Next we will use local test environment",source:"@site/docs/guide/first-script.md",sourceDirName:"guide",slug:"/guide/first-script",permalink:"/docs/guide/first-script",editUrl:"https://github.com/brc20pm/documentation/tree/develop/docs/guide/first-script.md",tags:[],version:"current",lastUpdatedAt:1715646124,formattedLastUpdatedAt:"5/14/2024",frontMatter:{id:"first-script",title:"The First Script",sidebar_label:"The First Script",slug:"/guide/first-script"},sidebar:"docs",previous:{title:"Preparations",permalink:"/docs/guide/preparations"},next:{title:"Extends",permalink:"/docs/guide/extends"}},l=[{value:"Create script",id:"create-script",children:[],level:2},{value:"Deploy script",id:"deploy-script",children:[],level:2},{value:"script interaction",id:"script-interaction",children:[],level:2}],u={toc:l};function d(e){var t=e.components,o=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-first-script"},"The first script"),(0,a.kt)("p",null,"Next we will use ",(0,a.kt)("strong",{parentName:"p"},"local test environment")),(0,a.kt)("p",null,"Create a script containing ",(0,a.kt)("strong",{parentName:"p"},"Get and Set")," functions to write and read the variable ",(0,a.kt)("inlineCode",{parentName:"p"},"name")),(0,a.kt)("h2",{id:"create-script"},"Create script"),(0,a.kt)("p",null,"Create a new ",(0,a.kt)("inlineCode",{parentName:"p"},"new_test6.js")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"class Contract {\n\n     _name;\n\n     init(){\n        \n     }\n    \n     setName(name){\n         this._name = name;\n     }\n    \n     $getName(){\n         return this._name;\n     }\n    \n}\n")),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},"\u26a0\ufe0f"),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"In the BRC20pm, function names starting with $ are read-only functions, _ are private functions, and functions without any symbols are write functions")))),(0,a.kt)("h2",{id:"deploy-script"},"Deploy script"),(0,a.kt)("p",null,"After deployment is completed, you will see the following interface:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(1626).Z})),(0,a.kt)("h2",{id:"script-interaction"},"script interaction"),(0,a.kt)("p",null,"First, we call the ",(0,a.kt)("inlineCode",{parentName:"p"},"$getName")," function of the script for the first time to obtain the ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," value."),(0,a.kt)("p",null,"As shown in the figure, the ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," value at this time is empty."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(1127).Z})),(0,a.kt)("p",null,"Next we call the ",(0,a.kt)("inlineCode",{parentName:"p"},"$setName")," function of the script and pass in ",(0,a.kt)("inlineCode",{parentName:"p"},"Hello-BTC")),(0,a.kt)("p",null,"As shown in the figure, the transaction is successful ",(0,a.kt)("inlineCode",{parentName:"p"},"success status: 1")," ",(0,a.kt)("inlineCode",{parentName:"p"},"failure status: 0")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(1085).Z})),(0,a.kt)("p",null,"Next, we call the ",(0,a.kt)("inlineCode",{parentName:"p"},"$getName")," function of the script again to obtain the ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," value"),(0,a.kt)("p",null,"As shown in the figure, the value at this time is already the ",(0,a.kt)("inlineCode",{parentName:"p"},"Hello-BTC")," we just passed in."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6223).Z})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Have you learned it?")),(0,a.kt)("p",null,"Let's take it one step further! ! !"))}d.isMDXComponent=!0},1626:function(e,t,n){t.Z=n.p+"assets/images/1705109980623-34b3034906e1cc4d68ea2e642991f3f9.jpg"},1127:function(e,t,n){t.Z=n.p+"assets/images/1705110597970-b804acb3b44a7b2576f19a2046936da5.jpg"},1085:function(e,t,n){t.Z=n.p+"assets/images/1705110981648-30ccd188a991efa0b74301c792c87b9b.jpg"},6223:function(e,t,n){t.Z=n.p+"assets/images/1705111119124-b06567d6981b670a1b064386a6204738.jpg"}}]);