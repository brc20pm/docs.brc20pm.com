(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[237],{2012:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=2012,e.exports=t},2253:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=2253,e.exports=t},1271:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=1271,e.exports=t},4756:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=4756,e.exports=t},6248:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=6248,e.exports=t},90:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=90,e.exports=t},8326:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t,n=null!=(t=e.height)?t:100;return a.createElement("div",{style:{height:n}})}},4004:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ge}});var a={};n.r(a),n.d(a,{ASTRONAUT_DARK:function(){return V}});var l={};n.r(l),n.d(l,{toggleAstronautColor:function(){return K}});var r=n(7294),i="Container_c8H7",c=(n(9647),n(2263)),o=n(4035),s=n(1720),u=n.n(s),m=n(4997),h=n(144),p=function(){function e(e,t,n){this.autoTyper=function(){return e},this.isTypeEvent=t,this.eventType=n||"unknown"}return e.prototype.execute=function(){var e=(0,o.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null==(t=m.b_.getLogger())||t.warn("Executing empty function!");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e}(),f=function(e){function t(t,n){var a;return void 0===n&&(n={}),a=e.call(this,t,!0,"remove")||this,n=Object.assign({timeBetweenLetter:t.config.delay},n),a.config=n,a.all=!n.charCount,a}return(0,h.Z)(t,e),t.prototype.execute=function(){var e=(0,o.Z)(u().mark((function e(){var t,n,a,l=this;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.autoTyper(),n=this.config.charCount||t.text.length,a=0,e.abrupt("return",new Promise((function(e){t.interval((function(){var l=t.text.slice(0,-1);t.setText(l),++a>n&&(t.clearInterval(),e(void 0))}),l.config.timeBetweenLetter)})));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),t}(p),d=function(e){function t(t,n){var a;return void 0===n&&(n={}),a=e.call(this,t,!0,"type")||this,n=Object.assign({toType:"nothing defined",timeBetweenLetter:t.config.delay},n),a.config=n,a}return(0,h.Z)(t,e),t.prototype.execute=function(){var e=(0,o.Z)(u().mark((function e(){var t,n,a=this;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.autoTyper(),n=this.config.toType.split(""),e.abrupt("return",new Promise((function(e){t.interval((function(){var a=n.shift();a?t.setText(""+t.text+a):(t.clearInterval(),e(void 0))}),a.config.timeBetweenLetter)})));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),t}(p),E=function(e){function t(t,n){var a;return void 0===n&&(n={}),a=e.call(this,t,!1,"sleep")||this,n=Object.assign({ms:2e3},n),a.config=n,a}return(0,h.Z)(t,e),t.prototype.execute=function(){var e=(0,o.Z)(u().mark((function e(){var t,n=this;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.autoTyper(),e.abrupt("return",new Promise((function(e){t.timeout((function(){t.clearTimeout(),e(void 0)}),n.config.ms)})));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),t}(p),M=function(e){function t(t,n){var a;return void 0===n&&(n={}),(a=e.call(this,t,!1,"loop")||this).config=n,a.infinite=!n.count,a}(0,h.Z)(t,e);var n=t.prototype;return n.execute=function(){var e=(0,o.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.autoTyper(),!this.config.count){e.next=11;break}n=0;case 3:if(!(n<=this.config.count&&t.isActive)){e.next=9;break}return e.next=6,this.loop();case 6:n++,e.next=3;break;case 9:e.next=16;break;case 11:if(!t.isActive){e.next=16;break}return e.next=14,this.loop();case 14:e.next=11;break;case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.loop=function(){var e=(0,o.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=this.autoTyper()).queue=[].concat(t.executedQueue),!(n=t.queue.shift())){e.next=6;break}return e.next=6,t.executeEvent(n);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),t}(p),v=function(){function e(e){void 0===e&&(e={}),e=Object.assign({initialText:"",delay:200,textListener:function(){},isTypingListener:function(){}},e),this.config={initialText:e.initialText,delay:e.delay},this.text=e.initialText,this.textListener=e.textListener,this.isTypingListener=e.isTypingListener,this.queue=[],this.executedQueue=[],this.isTyping=!1,this.isActive=!1,this.textListener(this.text),this.isTypingListener(this.isTyping)}var t=e.prototype;return t.remove=function(e){return void 0===e&&(e={}),this.queue.push(new f(this,e)),this},t.type=function(e){return void 0===e&&(e={}),this.queue.push(new d(this,e)),this},t.loop=function(e){return void 0===e&&(e={}),this.queue.push(new M(this,e)),this},t.sleep=function(e){return void 0===e&&(e={}),this.queue.push(new E(this,e)),this},t.start=function(){return this.isActive=!0,this.executeEvents(),this},t.executeEvents=function(){var e=(0,o.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=this.queue.shift())){e.next=4;break}return e.next=4,this.executeEvent(t);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),t.executeEvent=function(){var e=(0,o.Z)(u().mark((function e(t){var n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.activeInterval){e.next=3;break}return null==(n=m.b_.getLogger())||n.warn("One Event is still acitve"),e.abrupt("return");case 3:return t.isTypeEvent&&(this.isTyping=!0,this.isTypingListener(this.isTyping)),e.next=6,t.execute();case 6:if(this.executedQueue.push(t),t.isTypeEvent&&(this.isTyping=!1,this.isTypingListener(this.isTyping)),!(this.queue.length>0&&this.isActive)){e.next=13;break}if(!(a=this.queue.shift())){e.next=13;break}return e.next=13,this.executeEvent(a);case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),t.setText=function(e){this.text=e,this.textListener(e)},t.stop=function(){this.isActive=!1,this.clearInterval(),this.clearTimeout()},t.interval=function(e,t){return void 0!==this.activeInterval||(this.activeInterval=setInterval((function(){e()}),t||1e3)),this},t.clearInterval=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){return this.activeInterval&&(clearInterval(this.activeInterval),this.activeInterval=void 0),this})),t.timeout=function(e,t){if(void 0!==this.activeTimeout)return this;this.activeTimeout=setTimeout((function(){e()}),t||1e3)},t.clearTimeout=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){return this.activeTimeout&&(clearTimeout(this.activeTimeout),this.activeTimeout=void 0),this})),e}(),g="Container_OwYF",z="Text_+Lbx",w="Cursor_uKF8",k="Cursor_Blink_vVV8",y=n(6010),x=function(e){var t,n=e.className,a=e.delay||500,l=e.words||["nothing to type","are you sure","really?"],i=e.defaultText||"nothing displayed",c=e.typeSpeed||100,o=(0,r.useState)(i),s=o[0],u=o[1],m=(0,r.useState)(!1),h=m[0],p=m[1];return(0,r.useEffect)((function(){var e=new v({delay:c,textListener:function(e){u(e)},isTypingListener:function(e){p(e)}});return l.forEach((function(t){e.type({toType:t}).sleep({ms:a}).remove()})),e.loop().start(),function(){e.stop()}}),[]),r.createElement("div",{className:(0,y.Z)(g,n)},r.createElement("div",{className:z},s),r.createElement("div",{className:(0,y.Z)(w,(t={},t[k]=!h,t))}))},F=n(8326),T=n(6775),C="ButtonContainer_7dcq",D=n(1446),_=function(e){var t=e.to,n=e.children,a=e.className,l=(0,T.k6)();return r.createElement("button",{className:(0,y.Z)(C,a),onClick:function(){!t.startsWith("http")||(0,D.Tm)()?l.push(t):window.open(t,"_blank")}},n)},A=n(3093),B="Container_DHFR",N="AstronautImage_G3sS",q="HeaderTitle_kc1v",b="SeparatorText_GSMf",L="DescriptionText_RaxB",Z="ButtonContainer_gemI",O="GithubButton_b7+-",S="GetStartedButton_+LiC",H="HeaderTyper_o8Oa";var I="MouseContainer_Q9DW",P="ScrollText_UTWW",U="Mouse_b0N8",W="MouseWheel_z09W",R=function(e){return r.createElement("div",{className:I},r.createElement("div",{className:U},r.createElement("span",{className:W})),r.createElement("div",{className:P},"Scroll"))},j=n(9920),G=n(7719),V=(0,n(3135).e)(!1),K=function(e){V.set(e)},J=Object.assign({},l,a),Q=n(9964),Y=n(9927),X=n(9277),$=n(185),ee=n(1763);(0,X.iG)((0,X.hu)({active:(0,D.Er)(),level:$.Y.level.WARN})),Q.w7.integrate(ee.Z);var te={ui:J};(0,Y.JZ)("__core__",te);var ne=te,ae="Container_yxzq",le="ImageContainer_LN75",re=function(e){var t=e.onMouseEnter,n=e.onMouseLeave,a=e.className;return r.createElement("svg",{className:a,xmlns:"http://www.w3.org/2000/svg",width:"100%",viewBox:"242.677 88.542 378.323 215.89"},r.createElement("defs",null,r.createElement("clipPath",{id:"_clipPath_DJqdLJjPMCQuZbt7zMmdGqTw0kfPk0A5"},r.createElement("path",{d:"M242.677 88.542H621V304.432H242.677z"}))),r.createElement("g",{clipPath:"url(#_clipPath_DJqdLJjPMCQuZbt7zMmdGqTw0kfPk0A5)",onMouseEnter:t,onMouseLeave:n},r.createElement("path",{fill:"none",stroke:"#A2C1E4",strokeLinecap:"square",strokeMiterlimit:"3",strokeWidth:"2",d:"M411.983 205.99c20.456-13.461 62.276 41.26 79.647 67.494 24.084 27.23 43.406 18.846 66.158-2.187C582.981 245.132 583.333 238.81 618 235",vectorEffect:"non-scaling-stroke",style:{pointerEvents:"none"}}),r.createElement("path",{fill:"#C3C2C2",strokeMiterlimit:"10",d:"M320.747 170.381l52.879-29.132c4.864-2.679 10.989-.906 13.668 3.959l33.747 61.262c2.679 4.865.906 10.989-3.958 13.669l-52.879 29.132c-4.864 2.679-10.989.906-13.668-3.959l-33.747-61.262c-2.679-4.865-.906-10.989 3.958-13.669z"}),r.createElement("path",{fill:"#DBD5FF",strokeMiterlimit:"10",d:"M372.687 268.631l-.73-1.595a1.73 1.73 0 01.852-2.292l17.163-7.857a1.73 1.73 0 012.291.852l.73 1.595a1.73 1.73 0 01-.852 2.292l-17.163 7.857a1.73 1.73 0 01-2.291-.852z"}),r.createElement("path",{fill:"#535157",d:"M371.973 270.075c6.545-4.066 14.582-7.534 22.236-10.13l12.831 32.196c-14.362 5.204-19.21 6.952-29.864 10.474-1.574-1.656-2.074-3.813-2.367-4.662-1.399-4.053 1.508-7.571 3.984-9.186q.831-.542-6.82-18.692z"}),r.createElement("path",{fill:"#A0C2E2",d:"M404.601 285.761l2.525 6.336-4.643 1.682c-1.351-3.733-.631-6.401 2.118-8.018z"}),r.createElement("path",{fill:"#A2C1E4",d:"M398.778 295.163c-8.562 3.085-13.533 4.842-21.931 7.619-1.574-1.656-1.991-3.451-2.419-4.762-1.075-4.138-.35-6.126 4.365-9.253 7.024-.447 13.7 1.69 19.985 6.396z"}),r.createElement("path",{d:"M376.847 302.782c.283.295.892 1.473 1.113 1.65l30.059-10.515-.893-1.82-30.279 10.685z"}),r.createElement("path",{strokeMiterlimit:"10",d:"M372.024 268.954l20.836-9.336a1.463 1.463 0 011.196 2.668l-20.836 9.336a1.463 1.463 0 01-1.196-2.668z"}),r.createElement("path",{fill:"#535157",strokeMiterlimit:"10",d:"M369.719 263.866l-10.531-25.447a4.573 4.573 0 012.476-5.972l13.215-5.469a4.574 4.574 0 015.972 2.476l10.531 25.447a4.573 4.573 0 01-2.476 5.972l-13.215 5.469a4.574 4.574 0 01-5.972-2.476z"}),r.createElement("g",null,r.createElement("path",{fill:"#DBD5FF",strokeMiterlimit:"10",d:"M404.326 253.475l-.858-1.539a1.726 1.726 0 01.667-2.346l16.413-9.142a1.726 1.726 0 012.346.667l.858 1.539a1.726 1.726 0 01-.667 2.346l-16.413 9.142a1.726 1.726 0 01-2.346-.667z"}),r.createElement("path",{fill:"#535157",d:"M425.092 243.303c-7.045 2.583-14.526 6.669-21.108 10.984l17.005 29.155c12.607-7.897 16.856-10.569 25.948-16.63-.326-2.201-1.681-3.878-2.157-4.612-2.271-3.505-6.713-3.385-9.437-2.453q-.914.312-10.251-16.444z"}),r.createElement("path",{fill:"#A0C2E2",d:"M417.557 277.745l3.347 5.737 4.075-2.553c-2.054-3.276-4.532-4.324-7.422-3.184z"}),r.createElement("path",{fill:"#A2C1E4",d:"M428.263 278.917c7.503-4.719 11.832-7.479 19-12.257-.326-2.201-1.453-3.597-2.203-4.712-2.53-3.307-4.49-3.943-9.717-2.201-4.556 5.121-6.921 11.524-7.08 19.17z"}),r.createElement("path",{d:"M447.263 266.66c.057.394.655 1.663.658 1.939l-26.035 16.471-.982-1.588 26.359-16.822z"}),r.createElement("path",{strokeMiterlimit:"10",d:"M424.201 242.665l-19.662 10.391a1.424 1.424 0 001.33 2.519l19.662-10.391a1.424 1.424 0 00-1.33-2.519z"}),r.createElement("path",{fill:"#535157",strokeMiterlimit:"10",d:"M401.013 248.884l-13.261-23.853a4.703 4.703 0 011.824-6.392l12.279-6.827a4.703 4.703 0 016.392 1.824l13.261 23.853a4.703 4.703 0 01-1.824 6.392l-12.279 6.827a4.703 4.703 0 01-6.392-1.824z"})),r.createElement("g",null,r.createElement("path",{fill:"#FAFBC7",strokeMiterlimit:"10",d:"M295.416 181.617l8.292-.246a2.791 2.791 0 012.87 2.706l.481 16.255a2.79 2.79 0 01-2.705 2.871l-8.292.246a2.791 2.791 0 01-2.87-2.706l-.481-16.255a2.79 2.79 0 012.705-2.871zM270.212 176.127l4.319 1.113a2.12 2.12 0 011.522 2.579l-3.956 15.342a2.12 2.12 0 01-2.579 1.522l-4.319-1.113a2.12 2.12 0 01-1.522-2.579l3.956-15.342a2.12 2.12 0 012.579-1.522z"}),r.createElement("path",{fill:"#535157",strokeMiterlimit:"10",d:"M304.968 180.842l26.462-4.223a3.844 3.844 0 014.401 3.189l2.46 15.409a3.845 3.845 0 01-3.189 4.401l-26.462 4.223a3.844 3.844 0 01-4.401-3.189l-2.46-15.409a3.845 3.845 0 013.189-4.401zM277.629 176.822l19.742 4.122a4.311 4.311 0 013.337 5.099l-2.999 14.367a4.31 4.31 0 01-5.098 3.338l-19.742-4.122a4.311 4.311 0 01-3.337-5.099l2.999-14.367a4.31 4.31 0 015.098-3.338z"}),r.createElement("path",{fill:"#535157",d:"M269.267 176.183q-5.798-1.715-15.448-4.492c-3.405-.99-6.665-.089-7.275 2.01l-3.768 12.955c-.61 2.1 1.658 4.609 5.063 5.599q9.943 4.466 15.448 4.492 5.506.026 5.98-20.564 5.799 1.716 0 0z"}),r.createElement("path",{fill:"#C8CA3C",d:"M266.318 190.25c.828-.186 1.502-.882 2.028-1.899 1.508-2.918 1.785-8.476.921-12.168-.863-3.692-2.221-6.666-3.108-8.999-.87-2.35-6.109-3.087-6.239 1.196q1.021 3.931 1.591 5.521-.466.291-3.47 3.221c-1.264 1.233-2.888 6.14.067 9.933 3.106 3.987 7.382 3.38 8.21 3.195z"})),r.createElement("g",null,r.createElement("path",{fill:"#FAFBC7",strokeMiterlimit:"10",d:"M406.155 182.596l-7.175-3.043a2.691 2.691 0 01-1.426-3.527l6.254-14.746a2.691 2.691 0 013.527-1.426l7.175 3.043a2.691 2.691 0 011.426 3.527l-6.254 14.746a2.691 2.691 0 01-3.527 1.426zM426.521 199.003l-5.284-5.739a2.565 2.565 0 01.15-3.622l10.79-9.935a2.565 2.565 0 013.622.15l5.284 5.739a2.565 2.565 0 01-.15 3.622l-10.79 9.935a2.565 2.565 0 01-3.622-.15z"}),r.createElement("path",{fill:"#535157",strokeMiterlimit:"10",d:"M397.542 179.957l-25.812-7.212a3.848 3.848 0 01-2.668-4.738l4.2-15.036a3.845 3.845 0 014.736-2.668l25.812 7.212a3.848 3.848 0 012.668 4.738l-4.2 15.036a3.845 3.845 0 01-4.736 2.668zM420.606 194.375l-15.836-12.489a4.313 4.313 0 01-.715-6.053l9.087-11.523a4.311 4.311 0 016.052-.715l15.836 12.489a4.313 4.313 0 01.715 6.053l-9.087 11.523a4.311 4.311 0 01-6.052.715z"}),r.createElement("g",{fill:"#535157"},r.createElement("path",{d:"M426.052 198.46q4.119 4.427 11.012 11.728c2.428 2.585 5.692 3.469 7.287 1.972l9.835-9.235c1.594-1.497.918-4.811-1.509-7.396q-6.287-8.904-11.012-11.728-4.726-2.824-15.613 14.659-4.118-4.428 0 0z"}),r.createElement("path",{d:"M435.75 187.852c-3.124-1.013-7.625 5.904-9.698 10.608-2.072 4.704-1.8 6.123-2.16 9.343-.072 2.269 3.653 5.43 6.236 2.131q1.447-3.889 1.44-5.562.549-.014 4.627-1.007c1.715-.418 5.609-3.816 4.996-8.585-.645-5.013-2.318-5.915-5.441-6.928z"}))),r.createElement("g",null,r.createElement("path",{fill:"#535157",strokeMiterlimit:"10",d:"M328.726 174.396l41.941-23.104a4.768 4.768 0 016.473 1.874l20.948 38.026a4.767 4.767 0 01-1.874 6.472l-41.941 23.104a4.768 4.768 0 01-6.473-1.874l-20.948-38.026a4.767 4.767 0 011.874-6.472z"}),r.createElement("path",{fill:"#535157",d:"M350.759 215.451l42.963-23.668c3.212-1.77 6.707-.364 7.8 3.138.616 1.973 5.113 9.997 7.215 12.561 2.325 2.837 1.604 6.577-1.609 8.347l-43.086 23.735c-3.212 1.77-6.887.427-8.201-2.998-.818-2.133-5.204-10.158-6.966-12.555-2.173-2.955-1.329-6.791 1.884-8.56z"}),r.createElement("path",{fill:"#FAFBC7",strokeMiterlimit:"10",d:"M335.017 192.624l47.697-26.273c.916-.504 1.99-.312 2.398.429.409.741-.003 1.752-.919 2.256l-47.697 26.273c-.916.504-1.99.312-2.398-.429-.409-.741.003-1.752.919-2.256zM340.637 202.824l47.697-26.273c.916-.504 1.99-.312 2.398.429.409.741-.003 1.752-.919 2.256l-47.697 26.273c-.916.504-1.99.312-2.398-.429-.409-.741.003-1.752.919-2.256z"}),r.createElement("path",{fill:"#C8CA3C",strokeMiterlimit:"10",d:"M342.037 185.072l31.627-17.051a1.099 1.099 0 011.487.445l8.427 15.626a1.096 1.096 0 01-.445 1.486l-31.627 17.051a1.099 1.099 0 01-1.487-.445l-8.427-15.626a1.096 1.096 0 01.445-1.486z"}),r.createElement("path",{fill:"#EBEBEB",strokeMiterlimit:"10",d:"M342.888 185.631l30.772-16.595a.721.721 0 01.975.292l7.859 14.576a.72.72 0 01-.292.975l-30.772 16.595a.721.721 0 01-.975-.292l-7.859-14.576a.72.72 0 01.292-.975z"}),r.createElement("path",{fill:"#DB1A1A",d:"M346.922 189.626a1.059 1.059 0 111.854-1.022 1.059 1.059 0 01-1.854 1.022z"}),r.createElement("path",{fill:"#B1DB1A",d:"M348.71 192.872a1.059 1.059 0 111.856-1.02 1.059 1.059 0 01-1.856 1.02z"}),r.createElement("path",{fill:"#1ADB67",d:"M350.498 196.118a1.059 1.059 0 111.856-1.02 1.059 1.059 0 01-1.856 1.02z"}),r.createElement("path",{fill:"#7BA1EC",d:"M351.344 180.675H369.34499999999997V192.44500000000002H351.344z",transform:"rotate(-28.87 359.927 186.43)"}),r.createElement("path",{strokeMiterlimit:"10",d:"M368.048 176.779l6.813-3.756a.345.345 0 01.468.135l.178.325a.345.345 0 01-.135.468l-6.813 3.756a.345.345 0 01-.468-.135l-.178-.325a.345.345 0 01.135-.468zM368.898 178.669l6.813-3.756a.345.345 0 01.468.135l.178.325a.345.345 0 01-.135.468l-6.813 3.756a.345.345 0 01-.468-.135l-.178-.325a.345.345 0 01.135-.468zM369.938 180.569l6.822-3.756a.344.344 0 01.468.135l.179.325a.345.345 0 01-.135.468l-6.822 3.756a.344.344 0 01-.468-.135l-.179-.325a.345.345 0 01.135-.468zM370.988 182.469l6.813-3.756a.345.345 0 01.468.135l.178.325a.345.345 0 01-.135.468l-6.813 3.756a.345.345 0 01-.468-.135l-.178-.325a.345.345 0 01.135-.468zM372.038 184.369l6.813-3.756a.345.345 0 01.468.135l.178.325a.345.345 0 01-.135.468l-6.813 3.756a.345.345 0 01-.468-.135l-.178-.325a.345.345 0 01.135-.468z"}),r.createElement("path",{fill:"#FAFBC7",d:"M334.088 199.814q1.518-.043 2.689-.923l-10.393-21.482q4.394 16.257 7.704 22.405zM373.599 150.792q.58-.682 3.902-.604.418.114 13.346 28.025l-17.248-27.421z"}),r.createElement("path",{fill:"#A2C1E4",d:"M356.475 237.689c.553 1.262 1.418 2.032 3.449 2.558l15.799-7.117c-10.901 3.002-13.593 2.482-19.248 4.559zM409.85 209.494c.619 1.728.038 3.568-.912 5.338l-10.956 6.036 11.868-11.374z"}),r.createElement("path",{fill:"#BDBCBC",d:"M347.713 220l6.568-1.654-6.691.059c.121.506.191 1.046.123 1.595zM397.839 190.724c.52.521 1.096.852 1.188 1.008l-3.01 3.623 1.822-4.631z"})),r.createElement("g",null,r.createElement("path",{fill:"#535157",strokeMiterlimit:"10",d:"M366.914 109.789l6.517-3.164a1.144 1.144 0 011.529.529l7.245 14.919a1.143 1.143 0 01-.529 1.528l-6.517 3.164a1.144 1.144 0 01-1.529-.529l-7.245-14.919a1.143 1.143 0 01.529-1.528z"}),r.createElement("path",{d:"M370.974 113.495a1.589 1.589 0 112.86-1.388 1.589 1.589 0 01-2.86 1.388z"}),r.createElement("path",{fill:"#C8CA3C",d:"M373.49 121.101a2.65 2.65 0 011.225-3.538 2.649 2.649 0 013.538 1.225 2.649 2.649 0 01-1.225 3.538 2.65 2.65 0 01-3.538-1.225z"}),r.createElement("path",{fill:"#535157",strokeMiterlimit:"10",d:"M289.904 147.99l6.771-3.289a1 1 0 011.337.463l7.367 15.178a1.001 1.001 0 01-.463 1.338l-6.771 3.289a1 1 0 01-1.337-.463l-7.367-15.178a1.001 1.001 0 01.463-1.338z"}),r.createElement("path",{d:"M294.09 151.636a1.589 1.589 0 112.858-1.387 1.589 1.589 0 01-2.858 1.387z"}),r.createElement("path",{fill:"#C8CA3C",d:"M296.607 159.242a2.648 2.648 0 113.537 1.225 2.648 2.648 0 01-3.537-1.225z"}),r.createElement("path",{fill:"#535157",d:"M296.37 146.282q-7.286-22.197-1.015-32.928c6.509-11.139 13.807-17.869 23.302-21.693 9.457-3.81 20.763-4.162 28.438-.877 8.605 3.683 15.07 9.141 19.24 16.635 4.02 6.217 7.531 14.348 10.491 24.397 2.051 5.876 5.042 9.032-3.165 18.825-12.076 12.264-27.548 18.382-35.276 22.062-7.027 2.885-11.602 4.852-20.183 1.371-5.757-3.731-7.987-6.963-10.801-10.154-4.866-5.79-8.782-11.515-11.031-17.638z"}),r.createElement("path",{fill:"#3D3B40",d:"M317.502 92.33c-10.764 3.987-27.742 20.344-25.043 36.764 1.317 11.855 5.045 25.076 16.65 37.975 5.642 6.19 12.908 9.073 16.939 8.803-9.315-6.9-18.375-18.358-23.086-44.101-2.464-8.314 3.254-23.333 14.54-39.441z"}),r.createElement("path",{fill:"#FAFBC7",d:"M373.661 150.641c-15.933 11.901-39.172 23.74-49.052 24.814 1.021 3.553 36.797-10.488 49.052-24.814z"}),r.createElement("path",{fill:"#313030",d:"M302.398 149.65c-8.196-14.878-.525-34.848 17.12-44.568 17.645-9.72 38.624-5.533 46.82 9.344 8.196 14.878.524 34.848-17.12 44.569-17.645 9.72-38.624 5.533-46.82-9.345z"}),r.createElement("path",{fill:"#191919",d:"M309.906 130.363c6.239-8.254 7.546-23.467 9.194-25.019.174-.139 0 .013-.005.003-.014-.025-.624.334-1.825 1.064-8.579 4.757-23.627 20.066-16.404 39.944 5.999 14.371 19.85 19.475 34.675 17.374q-17.98-5.207-21.814-8.875c-2.921-2.794-9.394-13.109-3.821-24.491z"}),r.createElement("path",{fill:"#515151",d:"M329.924 113.962c-1.348-3.522 7.794-8.501 16.177-8.149 8.171.343 16.178 7.118 13.229 10.261-1.864 1.987-5.346-4.531-13.516-4.974-8.17-.443-14.685 6.009-15.89 2.862z"}))))},ie=function(e){var t=e.onMouseEnter,n=e.onMouseLeave,a=e.className;return r.createElement("svg",{className:a,width:"100%",xmlns:"http://www.w3.org/2000/svg",viewBox:"242.677 88.542 378.323 215.89"},r.createElement("defs",null,r.createElement("clipPath",{id:"_clipPath_STwyEDuuaNbGIKbAX7KqxcyghTzV9bZj"},r.createElement("path",{d:"M242.677 88.542H621V304.432H242.677z"}))),r.createElement("g",{clipPath:"url(#_clipPath_STwyEDuuaNbGIKbAX7KqxcyghTzV9bZj)",onMouseEnter:t,onMouseLeave:n},r.createElement("path",{fill:"none",stroke:"#A2C1E4",strokeLinecap:"square",strokeMiterlimit:"3",strokeWidth:"2",d:"M411.983 205.99c20.456-13.461 62.276 41.26 79.647 67.494 24.084 27.23 43.406 18.846 66.158-2.187C582.981 245.132 583.333 238.81 618 235",vectorEffect:"non-scaling-stroke",style:{pointerEvents:"none"}}),r.createElement("path",{fill:"#C3C2C2",strokeMiterlimit:"10",d:"M321.607 172.201l52.879-29.132c4.864-2.679 10.989-.906 13.668 3.959l33.747 61.262c2.679 4.865.906 10.989-3.958 13.669l-52.879 29.132c-4.864 2.679-10.989.906-13.668-3.959l-33.747-61.262c-2.679-4.865-.906-10.989 3.958-13.669z"}),r.createElement("path",{fill:"#DBD5FF",strokeMiterlimit:"10",d:"M372.687 268.631l-.73-1.595a1.73 1.73 0 01.852-2.292l17.163-7.857a1.73 1.73 0 012.291.852l.73 1.595a1.73 1.73 0 01-.852 2.292l-17.163 7.857a1.73 1.73 0 01-2.291-.852z"}),r.createElement("path",{fill:"#F7F5FD",d:"M371.973 270.075c6.545-4.066 14.582-7.534 22.236-10.13l12.831 32.196c-14.362 5.204-19.21 6.952-29.864 10.474-1.574-1.656-2.074-3.813-2.367-4.662-1.399-4.053 1.508-7.571 3.984-9.186q.831-.542-6.82-18.692z"}),r.createElement("path",{fill:"#A0C2E2",d:"M404.601 285.761l2.525 6.336-4.643 1.682c-1.351-3.733-.631-6.401 2.118-8.018z"}),r.createElement("path",{fill:"#A2C1E4",d:"M398.778 295.163c-8.562 3.085-13.533 4.842-21.931 7.619-1.574-1.656-1.991-3.451-2.419-4.762-1.075-4.138-.35-6.126 4.365-9.253 7.024-.447 13.7 1.69 19.985 6.396z"}),r.createElement("path",{d:"M376.847 302.782c.283.295.892 1.473 1.113 1.65l30.059-10.515-.893-1.82-30.279 10.685z"}),r.createElement("path",{strokeMiterlimit:"10",d:"M372.024 268.954l20.836-9.336a1.463 1.463 0 011.196 2.668l-20.836 9.336a1.463 1.463 0 01-1.196-2.668z"}),r.createElement("path",{fill:"#F7F5FD",strokeMiterlimit:"10",d:"M369.719 263.866l-10.531-25.447a4.573 4.573 0 012.476-5.972l13.215-5.469a4.574 4.574 0 015.972 2.476l10.531 25.447a4.573 4.573 0 01-2.476 5.972l-13.215 5.469a4.574 4.574 0 01-5.972-2.476z"}),r.createElement("g",null,r.createElement("path",{fill:"#DBD5FF",strokeMiterlimit:"10",d:"M404.326 253.475l-.858-1.539a1.726 1.726 0 01.667-2.346l16.413-9.142a1.726 1.726 0 012.346.667l.858 1.539a1.726 1.726 0 01-.667 2.346l-16.413 9.142a1.726 1.726 0 01-2.346-.667z"}),r.createElement("path",{fill:"#F7F5FD",d:"M425.092 243.303c-7.045 2.583-14.526 6.669-21.108 10.984l17.005 29.155c12.607-7.897 16.856-10.569 25.948-16.63-.326-2.201-1.681-3.878-2.157-4.612-2.271-3.505-6.713-3.385-9.437-2.453q-.914.312-10.251-16.444z"}),r.createElement("path",{fill:"#A0C2E2",d:"M417.557 277.745l3.347 5.737 4.075-2.553c-2.054-3.276-4.532-4.324-7.422-3.184z"}),r.createElement("path",{fill:"#A2C1E4",d:"M428.263 278.917c7.503-4.719 11.832-7.479 19-12.257-.326-2.201-1.453-3.597-2.203-4.712-2.53-3.307-4.49-3.943-9.717-2.201-4.556 5.121-6.921 11.524-7.08 19.17z"}),r.createElement("path",{d:"M447.263 266.66c.057.394.655 1.663.658 1.939l-26.035 16.471-.982-1.588 26.359-16.822z"}),r.createElement("path",{strokeMiterlimit:"10",d:"M424.201 242.665l-19.662 10.391a1.424 1.424 0 001.33 2.519l19.662-10.391a1.424 1.424 0 00-1.33-2.519z"}),r.createElement("path",{fill:"#F7F5FD",strokeMiterlimit:"10",d:"M401.013 248.884l-13.261-23.853a4.703 4.703 0 011.824-6.392l12.279-6.827a4.703 4.703 0 016.392 1.824l13.261 23.853a4.703 4.703 0 01-1.824 6.392l-12.279 6.827a4.703 4.703 0 01-6.392-1.824z"})),r.createElement("g",null,r.createElement("path",{fill:"#DBD5FF",strokeMiterlimit:"10",d:"M295.416 181.617l8.292-.246a2.791 2.791 0 012.87 2.706l.481 16.255a2.79 2.79 0 01-2.705 2.871l-8.292.246a2.791 2.791 0 01-2.87-2.706l-.481-16.255a2.79 2.79 0 012.705-2.871zM270.212 176.127l4.319 1.113a2.12 2.12 0 011.522 2.579l-3.956 15.342a2.12 2.12 0 01-2.579 1.522l-4.319-1.113a2.12 2.12 0 01-1.522-2.579l3.956-15.342a2.12 2.12 0 012.579-1.522z"}),r.createElement("path",{fill:"#F7F5FD",strokeMiterlimit:"10",d:"M304.968 180.842l26.462-4.223a3.844 3.844 0 014.401 3.189l2.46 15.409a3.845 3.845 0 01-3.189 4.401l-26.462 4.223a3.844 3.844 0 01-4.401-3.189l-2.46-15.409a3.845 3.845 0 013.189-4.401zM277.629 176.822l19.742 4.122a4.311 4.311 0 013.337 5.099l-2.999 14.367a4.31 4.31 0 01-5.098 3.338l-19.742-4.122a4.311 4.311 0 01-3.337-5.099l2.999-14.367a4.31 4.31 0 015.098-3.338z"}),r.createElement("path",{fill:"#F7F5FD",d:"M269.267 176.183q-5.798-1.715-15.448-4.492c-3.405-.99-6.665-.089-7.275 2.01l-3.768 12.955c-.61 2.1 1.658 4.609 5.063 5.599q9.943 4.466 15.448 4.492 5.506.026 5.98-20.564 5.799 1.716 0 0z"}),r.createElement("path",{fill:"#B2A7F0",d:"M266.318 190.25c3.204-.718 4.114-9.088 2.949-14.067-1.164-4.978-2.221-6.666-3.108-8.999-.87-2.35-6.109-3.087-6.239 1.196q1.021 3.931 1.591 5.521-.466.291-3.47 3.221c-1.264 1.233-2.888 6.14.067 9.933 3.106 3.987 5.006 3.912 8.21 3.195z"})),r.createElement("g",null,r.createElement("path",{fill:"#DBD5FF",strokeMiterlimit:"10",d:"M406.155 182.596l-7.175-3.043a2.691 2.691 0 01-1.426-3.527l6.254-14.746a2.691 2.691 0 013.527-1.426l7.175 3.043a2.691 2.691 0 011.426 3.527l-6.254 14.746a2.691 2.691 0 01-3.527 1.426zM426.521 199.003l-5.284-5.739a2.565 2.565 0 01.15-3.622l10.79-9.935a2.565 2.565 0 013.622.15l5.284 5.739a2.565 2.565 0 01-.15 3.622l-10.79 9.935a2.565 2.565 0 01-3.622-.15z"}),r.createElement("path",{fill:"#F7F5FD",strokeMiterlimit:"10",d:"M397.542 179.957l-25.812-7.212a3.848 3.848 0 01-2.668-4.738l4.2-15.036a3.845 3.845 0 014.736-2.668l25.812 7.212a3.848 3.848 0 012.668 4.738l-4.2 15.036a3.845 3.845 0 01-4.736 2.668zM420.606 194.375l-15.836-12.489a4.313 4.313 0 01-.715-6.053l9.087-11.523a4.311 4.311 0 016.052-.715l15.836 12.489a4.313 4.313 0 01.715 6.053l-9.087 11.523a4.311 4.311 0 01-6.052.715z"}),r.createElement("g",{fill:"#F7F5FD"},r.createElement("path",{d:"M426.052 198.46q4.119 4.427 11.012 11.728c2.428 2.585 5.692 3.469 7.287 1.972l9.835-9.235c1.594-1.497.918-4.811-1.509-7.396q-6.287-8.904-11.012-11.728-4.726-2.824-15.613 14.659-4.118-4.428 0 0z"}),r.createElement("path",{d:"M435.75 187.852c-3.124-1.013-7.625 5.904-9.698 10.608-2.072 4.704-1.8 6.123-2.16 9.343-.072 2.269 3.653 5.43 6.236 2.131q1.447-3.889 1.44-5.562.549-.014 4.627-1.007c1.715-.418 5.609-3.816 4.996-8.585-.645-5.013-2.318-5.915-5.441-6.928z"}))),r.createElement("g",null,r.createElement("path",{fill:"#F7F5FD",strokeMiterlimit:"10",d:"M328.726 174.396l41.941-23.104a4.768 4.768 0 016.473 1.874l20.948 38.026a4.767 4.767 0 01-1.874 6.472l-41.941 23.104a4.768 4.768 0 01-6.473-1.874l-20.948-38.026a4.767 4.767 0 011.874-6.472z"}),r.createElement("path",{fill:"#F7F5FD",d:"M350.759 215.451l42.963-23.668c3.212-1.77 6.707-.364 7.8 3.138.616 1.973 5.113 9.997 7.215 12.561 2.325 2.837 1.604 6.577-1.609 8.347l-43.086 23.735c-3.212 1.77-6.887.427-8.201-2.998-.818-2.133-5.204-10.158-6.966-12.555-2.173-2.955-1.329-6.791 1.884-8.56z"}),r.createElement("path",{fill:"#DBD5FF",strokeMiterlimit:"10",d:"M335.017 192.624l47.697-26.273c.916-.504 1.99-.312 2.398.429.409.741-.003 1.752-.919 2.256l-47.697 26.273c-.916.504-1.99.312-2.398-.429-.409-.741.003-1.752.919-2.256zM340.637 202.824l47.697-26.273c.916-.504 1.99-.312 2.398.429.409.741-.003 1.752-.919 2.256l-47.697 26.273c-.916.504-1.99.312-2.398-.429-.409-.741.003-1.752.919-2.256z"}),r.createElement("path",{fill:"#8273E8",strokeMiterlimit:"10",d:"M342.037 185.072l31.627-17.051a1.099 1.099 0 011.487.445l8.427 15.626a1.096 1.096 0 01-.445 1.486l-31.627 17.051a1.099 1.099 0 01-1.487-.445l-8.427-15.626a1.096 1.096 0 01.445-1.486z"}),r.createElement("path",{fill:"#EBEBEB",strokeMiterlimit:"10",d:"M342.888 185.631l30.772-16.595a.721.721 0 01.975.292l7.859 14.576a.72.72 0 01-.292.975l-30.772 16.595a.721.721 0 01-.975-.292l-7.859-14.576a.72.72 0 01.292-.975z"}),r.createElement("path",{fill:"#DB1A1A",d:"M346.922 189.626a1.059 1.059 0 111.854-1.022 1.059 1.059 0 01-1.854 1.022z"}),r.createElement("path",{fill:"#B1DB1A",d:"M348.71 192.872a1.059 1.059 0 111.856-1.02 1.059 1.059 0 01-1.856 1.02z"}),r.createElement("path",{fill:"#1ADB67",d:"M350.498 196.118a1.059 1.059 0 111.856-1.02 1.059 1.059 0 01-1.856 1.02z"}),r.createElement("path",{fill:"#7BA1EC",d:"M351.344 180.675H369.34499999999997V192.44500000000002H351.344z",transform:"rotate(-28.87 359.927 186.43)"}),r.createElement("path",{strokeMiterlimit:"10",d:"M368.048 176.779l6.813-3.756a.345.345 0 01.468.135l.178.325a.345.345 0 01-.135.468l-6.813 3.756a.345.345 0 01-.468-.135l-.178-.325a.345.345 0 01.135-.468zM368.898 178.669l6.813-3.756a.345.345 0 01.468.135l.178.325a.345.345 0 01-.135.468l-6.813 3.756a.345.345 0 01-.468-.135l-.178-.325a.345.345 0 01.135-.468zM369.938 180.569l6.822-3.756a.344.344 0 01.468.135l.179.325a.345.345 0 01-.135.468l-6.822 3.756a.344.344 0 01-.468-.135l-.179-.325a.345.345 0 01.135-.468zM370.988 182.469l6.813-3.756a.345.345 0 01.468.135l.178.325a.345.345 0 01-.135.468l-6.813 3.756a.345.345 0 01-.468-.135l-.178-.325a.345.345 0 01.135-.468zM372.038 184.369l6.813-3.756a.345.345 0 01.468.135l.178.325a.345.345 0 01-.135.468l-6.813 3.756a.345.345 0 01-.468-.135l-.178-.325a.345.345 0 01.135-.468z"}),r.createElement("path",{fill:"#DBD5FF",d:"M334.088 199.814q1.518-.043 2.689-.923l-10.393-21.482q4.394 16.257 7.704 22.405zM373.599 150.792q.58-.682 3.902-.604.418.114 13.346 28.025l-17.248-27.421z"}),r.createElement("path",{fill:"#A2C1E4",d:"M356.475 237.689c.553 1.262 1.418 2.032 3.449 2.558l15.799-7.117c-10.901 3.002-13.593 2.482-19.248 4.559zM409.85 209.494c.619 1.728.038 3.568-.912 5.338l-10.956 6.036 11.868-11.374z"}),r.createElement("path",{fill:"#BDBCBC",d:"M347.713 220l6.568-1.654-6.691.059c.121.506.191 1.046.123 1.595zM397.839 190.724c.52.521 1.096.852 1.188 1.008l-3.01 3.623 1.822-4.631z"})),r.createElement("g",null,r.createElement("path",{fill:"#F7F5FD",strokeMiterlimit:"10",d:"M366.914 109.789l6.517-3.164a1.144 1.144 0 011.529.529l7.245 14.919a1.143 1.143 0 01-.529 1.528l-6.517 3.164a1.144 1.144 0 01-1.529-.529l-7.245-14.919a1.143 1.143 0 01.529-1.528z"}),r.createElement("path",{d:"M370.974 113.495a1.589 1.589 0 112.86-1.388 1.589 1.589 0 01-2.86 1.388z"}),r.createElement("path",{fill:"#6441BD",d:"M373.49 121.101a2.65 2.65 0 011.225-3.538 2.649 2.649 0 013.538 1.225 2.649 2.649 0 01-1.225 3.538 2.65 2.65 0 01-3.538-1.225z"}),r.createElement("path",{fill:"#F7F5FD",strokeMiterlimit:"10",d:"M289.904 147.99l6.771-3.289a1 1 0 011.337.463l7.367 15.178a1.001 1.001 0 01-.463 1.338l-6.771 3.289a1 1 0 01-1.337-.463l-7.367-15.178a1.001 1.001 0 01.463-1.338z"}),r.createElement("path",{d:"M294.09 151.636a1.589 1.589 0 112.858-1.387 1.589 1.589 0 01-2.858 1.387z"}),r.createElement("path",{fill:"#6441BD",d:"M296.607 159.242a2.648 2.648 0 113.537 1.225 2.648 2.648 0 01-3.537-1.225z"}),r.createElement("path",{fill:"#F7F5FD",d:"M296.37 146.282q-7.286-22.197-1.015-32.928c6.509-11.139 13.807-17.869 23.302-21.693 9.457-3.81 20.763-4.162 28.438-.877 8.605 3.683 15.07 9.141 19.24 16.635 4.02 6.217 7.531 14.348 10.491 24.397 2.051 5.876 5.042 9.032-3.165 18.825-12.076 12.264-27.548 18.382-35.276 22.062-7.027 2.885-11.602 4.852-20.183 1.371-5.757-3.731-7.987-6.963-10.801-10.154-4.866-5.79-8.782-11.515-11.031-17.638z"}),r.createElement("path",{fill:"#ECEAF9",d:"M317.502 92.33c-10.764 3.987-27.742 20.344-25.043 36.764 1.317 11.855 5.045 25.076 16.65 37.975 5.642 6.19 12.908 9.073 16.939 8.803-9.315-6.9-18.375-18.358-23.086-44.101-2.464-8.314 3.254-23.333 14.54-39.441z"}),r.createElement("path",{fill:"#DBD5FF",d:"M373.661 150.641c-15.933 11.901-39.172 23.74-49.052 24.814 1.021 3.553 36.797-10.488 49.052-24.814z"}),r.createElement("path",{fill:"#313030",d:"M302.398 149.65c-8.196-14.878-.525-34.848 17.12-44.568 17.645-9.72 38.624-5.533 46.82 9.344 8.196 14.878.524 34.848-17.12 44.569-17.645 9.72-38.624 5.533-46.82-9.345z"}),r.createElement("path",{fill:"#191919",d:"M309.906 130.363c6.239-8.254 7.546-23.467 9.194-25.019.174-.139 0 .013-.005.003-.014-.025-.624.334-1.825 1.064-8.579 4.757-23.627 20.066-16.404 39.944 5.999 14.371 19.85 19.475 34.675 17.374q-17.98-5.207-21.814-8.875c-2.921-2.794-9.394-13.109-3.821-24.491z"}),r.createElement("path",{fill:"#515151",d:"M329.924 113.962c-1.348-3.522 7.794-8.501 16.177-8.149 8.171.343 16.178 7.118 13.229 10.261-1.864 1.987-5.346-4.531-13.516-4.974-8.17-.443-14.685 6.009-15.89 2.862z"}))))},ce=function(e){var t=e.className,n=(0,r.useState)(!1),a=n[0],l=n[1],i=(0,r.useState)(!1),c=i[0],o=i[1],s=(0,r.useState)(!1),u=s[0],m=s[1],h=(0,G._)(ne.ui.ASTRONAUT_DARK),p=(0,j.useSpring)({to:{x:a?0:1},config:{mass:1,tension:400,friction:15,duration:500},onRest:function(){c&&(o(!1),m(!1))},onChange:function(e){var t=e.value;t.x>=.45&&t.x<=.5&&!u&&(ne.ui.toggleAstronautColor(!h),m(!0))}}),f=function(){c||(o(!0),l(!a))};return r.createElement("div",{className:(0,y.Z)(ae,t)},r.createElement(j.animated.div,{style:{transform:p.x.to({range:[0,.5,1],output:["translateY(0px)","translateY(-30px)","translateY(0px)"]})},className:le},h?r.createElement(re,{onMouseEnter:f}):r.createElement(ie,{onMouseEnter:f})))},oe=function(){var e=(0,c.Z)().siteConfig,t=function(){var e=(0,r.useState)({windowWidth:void 0,windowHeight:void 0,scrollHeight:void 0}),t=e[0],n=e[1];return(0,D.Tm)()?{windowWidth:0,windowHeight:0,scrollHeight:0}:((0,r.useEffect)((function(){function e(){n({windowWidth:window.innerWidth,windowHeight:window.innerHeight,scrollHeight:document.documentElement.scrollHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),t)}(),n=t.windowHeight,a=(0,r.useState)((0,D.TV)(["ORD SCRIPT"]))[0];return r.createElement("div",{className:B,style:{height:n>800?n:void 0}},r.createElement("div",null,r.createElement("h1",{className:q},"Everything is  ",r.createElement("span",{className:b},"here")),r.createElement(F.Z,{height:20}),r.createElement(x,{className:H,words:a,delay:5e3,defaultText:a[0]||"simple"}),r.createElement(F.Z,{height:50}),r.createElement("p",{className:L},e.tagline),r.createElement(F.Z,{height:50}),r.createElement("div",{className:Z},r.createElement(_,{className:S,to:"/docs/introducing"},"GET STARTED"),r.createElement(A.Z,{className:O,to:e.customFields.githubUrl}))),r.createElement(ce,{className:N}),n>900&&n<1200&&r.createElement(R,null))},se=n(4572),ue=n(2132),me=n(2859),he=n(5125),pe=n(1801),fe="Wrapper_3rqK",de=n(4996),Ee=n(8396),Me=function(e){var t=e.children,n=e.noFooter,a=e.wrapperClassName,l=e.permalink,i=(0,c.Z)().siteConfig,o=i.favicon,s=i.title,u=i.url,m=i.customFields.meta,h=(0,Ee.ZD)({title:e.title,description:e.description,image:e.image,color:e.color,keywords:(0,Ee.AF)(e.keywords)},m,!0),p=e.canonical||"",f=s+" - "+h.title,d=(0,de.Z)(h.image,{absolute:!0}),E=(0,de.Z)(o);return r.createElement(se.Z,null,r.createElement(me.Z,null,r.createElement("meta",{name:"environment",content:"production"}),r.createElement("meta",{name:"site_name",content:s}),r.createElement("meta",{name:"application-name",content:s}),f&&r.createElement("title",null,f),f&&r.createElement("meta",{property:"og:title",content:f}),f&&r.createElement("meta",{name:"twitter:title",content:f}),h.keywords.length>0&&r.createElement("meta",{name:"keywords",content:h.keywords.join(",")}),h.color&&r.createElement("meta",{name:"theme-color",content:h.color}),o&&r.createElement("link",{rel:"shortcut icon",href:E}),r.createElement("link",{rel:"canonical",href:""+u+(l||p)+"/"}),r.createElement("meta",{property:"og:url",content:""+u+(l||p)+"/"}),r.createElement("meta",{property:"forem:domain",content:"agile-ts.org"}),h.description&&r.createElement("meta",{name:"description",content:h.description}),h.description&&r.createElement("meta",{property:"og:description",content:h.description}),h.description&&r.createElement("meta",{name:"twitter:description",content:h.description}),h.image&&r.createElement("meta",{property:"image",content:d}),h.image&&r.createElement("meta",{property:"og:image",content:d}),h.image&&r.createElement("meta",{name:"twitter:image",content:d}),h.image&&r.createElement("meta",{name:"twitter:image:src",content:d}),h.image&&r.createElement("meta",{name:"twitter:image:alt",content:'Image for "'+h.title+'"'}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:creator",content:"@agiletypescript"}),r.createElement("noscript",null,"This site runs best with JavaScript enabled"),r.createElement("link",{rel:"sitemap",type:"application/xml",href:"/sitemap.xml"})),r.createElement(ue.ToastContainer,null),r.createElement(he.Z,null),r.createElement("div",{className:(0,y.Z)(fe,a)},t),!n&&r.createElement(pe.Z,null))},ve=function(){return r.createElement(Me,null,r.createElement("main",{className:i},r.createElement(oe,null)))},ge=function(){return r.createElement(ve,null)}}}]);