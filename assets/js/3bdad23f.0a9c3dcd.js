"use strict";(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[538],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(f,s(s({ref:n},c),{},{components:t})):r.createElement(f,s({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8966:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var r=t(3117),a=t(102),o=(t(7294),t(3905)),s=["components"],i={id:"create-b20-token",title:"Create B20 Token",sidebar_label:"Create B20 Token",slug:"/guide/create-b20-token"},l="Create B20 Token on OrdScript",u={unversionedId:"guide/create-b20-token",id:"guide/create-b20-token",title:"Create B20 Token",description:"BIP-20",source:"@site/docs/guide/create-b20-token.md",sourceDirName:"guide",slug:"/guide/create-b20-token",permalink:"/docs/guide/create-b20-token",editUrl:"https://github.com/OrdScript/documentation/tree/develop/docs/guide/create-b20-token.md",tags:[],version:"current",lastUpdatedAt:1716015162,formattedLastUpdatedAt:"5/18/2024",frontMatter:{id:"create-b20-token",title:"Create B20 Token",sidebar_label:"Create B20 Token",slug:"/guide/create-b20-token"},sidebar:"docs",previous:{title:"Properties",permalink:"/docs/guide/properties"},next:{title:"Quickly Create B20 Token",permalink:"/docs/guide/quickly-create-b20"}},c=[],d={toc:c};function p(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-b20-token-on-ordscript"},"Create B20 Token on OrdScript"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"BIP-20"),"\nThe standard requires the following functionality to be implemented to ensure the operation and management of the token:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$name()")," Gets the name of the token."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$symbol()")," Gets the token's symbol."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$totalSupply()")," Gets the total amount of tokens issued"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$balanceOf(address)")," Gets the number of tokens held by the specified address."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$allowance(owner, sender)")," Get the owner's authorization amount for another address"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"transfer(to, tokenId)")," transfers tokens from the current caller to another address."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"transferFrom(from, to, tokenId)")," transfers from one address to another, provided the caller is authorized."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"approve(to, tokenId)")," authorizes an address to manage a specific token."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"increaseAllowance(spender, addedValue)")," increases the quota management of a specific address"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"decreaseAllowance(spender, subtractedValue)")," reduces the quota management of a specific address")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Script source code")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"class Contract {\n\n    _name;\n    _symbol;\n    _totalSupply;\n    _balances;\n    _allowances;\n\n    init() {\n        this._allowances = new Map();\n        this._balances = new Map();\n\n        this._name = 'BIP20';\n        this._symbol = 'B20';\n        this._totalSupply = SafeMath.val(100000000);\n        this._balances.setBucket(this._msgSender(), this._totalSupply);\n        this.event({\n            name: 'Transfer',\n            from: address(0),\n            to: this._msgSender(),\n            amount: this._totalSupply\n        });\n    }\n\n    $name() {\n        return this._name;\n    };\n\n    $symbol() {\n        return this._symbol;\n    }\n\n    $totalSupply() {\n        return SafeMath.val(this._totalSupply);\n    };\n\n    $balanceOf(account) {\n        return SafeMath.val(this._balances.getBucket(account));\n    };\n\n    approve(sender, amount) {\n        this._approve(this._msgSender(), sender, amount);\n        return true;\n    };\n\n    increaseAllowance(spender, addedValue) {\n        let aOld = this._allowances.getBucket(this._msgSender(), sender);\n        this._approve(this._msgSender(), spender, SafeMath.add(aOld, addedValue));\n        return true;\n    };\n\n    decreaseAllowance(spender, subtractedValue) {\n        let aOld = this._allowances.getBucket(this._msgSender(), sender);\n        this._approve(this._msgSender(), spender, SafeMath.sub(aOld, subtractedValue));\n        return true;\n    };\n\n    $allowance(owner, sender) {\n        return SafeMath.val(this._allowances.getBucket(owner, sender));\n    };\n\n    transfer(recipient, amount) {\n        this._transfer(this._msgSender(), recipient, amount);\n        return true;\n    };\n\n    transferFrom(sender, recipient, amount) {\n        let aOld = this._allowances.getBucket(sender, this._msgSender());\n        require(SafeMath.gte(aOld, amount), 'B20: transfer amount exceeds allowance');\n        this._transfer(sender, recipient, amount);\n        this._approve(sender, this._msgSender(), SafeMath.sub(aOld, amount));\n        return true;\n    };\n\n    _approve(owner, sender, amount) {\n        if (owner === sender) {\n            return\n        }\n        this._allowances.setBucket(owner, sender, SafeMath.val(amount));\n        this.event({\n            name: 'Approve',\n            from: owner,\n            to: sender,\n            amount: amount\n        })\n    };\n\n    _transfer(owner, recipient, amount) {\n        let oldO = this._balances.getBucket(owner);\n\n        require(SafeMath.gte(oldO, amount), 'B20: transfer amount exceeds balance');\n\n        let oldR = this._balances.getBucket(recipient)\n\n        this._balances.setBucket(owner, SafeMath.sub(oldO, amount));\n        this._balances.setBucket(recipient, SafeMath.add(oldR, amount))\n\n        this.event({\n            name: 'Transfer',\n            from: owner,\n            to: recipient,\n            amount: amount\n        });\n    };\n\n    _msgSender() {\n        return this.msgSender;\n    }\n};\n")))}p.isMDXComponent=!0}}]);