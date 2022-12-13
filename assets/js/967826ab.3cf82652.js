"use strict";(self.webpackChunkaaronzheng=self.webpackChunkaaronzheng||[]).push([[8168],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>k});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=n.createContext({}),o=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},c=function(e){var a=o(e.components);return n.createElement(i.Provider,{value:a},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},N=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=o(t),N=s,k=l["".concat(i,".").concat(N)]||l[N]||u[N]||r;return t?n.createElement(k,m(m({ref:a},c),{},{components:t})):n.createElement(k,m({ref:a},c))}));function k(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,m=new Array(r);m[0]=N;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p[l]="string"==typeof e?e:s,m[1]=p;for(var o=2;o<r;o++)m[o]=t[o];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},1591:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>m,default:()=>l,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var n=t(7462),s=(t(7294),t(3905));const r={},m=void 0,p={unversionedId:"EECS16A/eecs_discussion/eecs_disc_1107",id:"EECS16A/eecs_discussion/eecs_disc_1107",title:"eecs_disc_1107",description:"- Discussion notes: link",source:"@site/docs/EECS16A/eecs_discussion/eecs_disc_1107.md",sourceDirName:"EECS16A/eecs_discussion",slug:"/EECS16A/eecs_discussion/eecs_disc_1107",permalink:"/aaronzheng/docs/EECS16A/eecs_discussion/eecs_disc_1107",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/EECS16A/eecs_discussion/eecs_disc_1107.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"eecs_disc_1102",permalink:"/aaronzheng/docs/EECS16A/eecs_discussion/eecs_disc_1102"},next:{title:"eecs_disc_1109",permalink:"/aaronzheng/docs/EECS16A/eecs_discussion/eecs_disc_1109"}},i={},o=[],c={toc:o};function l(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"#r/discussion"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Discussion notes: link")),(0,s.kt)("h1",{id:"discussion-11a-1107"},"Discussion 11A 11/07"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jupyter"},'print("Hello world i am so incredibly cool")\n')),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},"Modular Circuit Buffer"),"\nVoltage dividers on their own cannot be combined without altering their behaviour, but op-amps can ",(0,s.kt)("strong",{parentName:"li"},"preserve behaviour when combined")," and thus is ",(0,s.kt)("strong",{parentName:"li"},"perfect tool for modular circuit design"),". ")),(0,s.kt)("p",null,"We would like to implement block diagram below\n![","[EpicPen_8ImsER0FwV.png]","]"),(0,s.kt)("p",null,"Combining all three resistors so that:\n![","[WhatsApp Image 2022-11-07 at 12.30.39 PM.jpeg]","]\n![","[WhatsApp Image 2022-11-07 at 12.30.39 PM (2).jpeg]","]"),(0,s.kt)("h1",{id:"op-amp-golden-rule"},"Op Amp golden rule"),(0,s.kt)("p",null,"1) ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"I"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mi",{parentName:"mrow"},"I"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"0")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"I+ = I- = 0")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.76666em",verticalAlign:"-0.08333em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"I"),(0,s.kt)("span",{parentName:"span",className:"mord"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.76666em",verticalAlign:"-0.08333em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"I"),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"))))),"\n2) ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"U"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mi",{parentName:"mrow"},"U"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"U+ = U-")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.76666em",verticalAlign:"-0.08333em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"U"),(0,s.kt)("span",{parentName:"span",className:"mord"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.76666em",verticalAlign:"-0.08333em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"U"),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u2212")))))),(0,s.kt)("p",null," ![","[WhatsApp Image 2022-11-07 at 12.39.32 PM.jpeg]","]\n![","[WhatsApp Image 2022-11-07 at 12.39.41 PM.jpeg]","]\n![","[WhatsApp Image 2022-11-07 at 12.44.17 PM.jpeg]","]"))}l.isMDXComponent=!0}}]);