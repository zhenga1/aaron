"use strict";(self.webpackChunkaaronzheng=self.webpackChunkaaronzheng||[]).push([[1623],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=c,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:c,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8408:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),c=(r(7294),r(3905));const o={},a=void 0,s={unversionedId:"CS61A/disc/cs_disc_928",id:"CS61A/disc/cs_disc_928",title:"cs_disc_928",description:"- Discussion notes: link",source:"@site/docs/CS61A/disc/cs_disc_928.md",sourceDirName:"CS61A/disc",slug:"/CS61A/disc/cs_disc_928",permalink:"/aaronzheng/docs/CS61A/disc/cs_disc_928",draft:!1,editUrl:"https://github.com/zhenga1/aaronzheng/tree/main/docs/CS61A/disc/cs_disc_928.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cs_disc_2",permalink:"/aaronzheng/docs/CS61A/disc/cs_disc_2"},next:{title:"Cs_lec_7",permalink:"/aaronzheng/docs/CS61A/lec/Cs_lec_7"}},i={},l=[],u={toc:l};function p(e){let{components:t,...r}=e;return(0,c.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"#r/discussion"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Discussion notes: link")),(0,c.kt)("h1",{id:"discussion-928"},"Discussion 9/28"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jupyter"},'print("Hello world i am cool")\n')),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jupyter"},"def max_product(s):\n    if s==[]:\n        return 1\n    else:\n        return max(max_product(s[2:])*s[0],max_product(s[1:])\n\nmax_product([10,3,1,9,2])\n")),(0,c.kt)("p",null,"[","[Sequences]","]\n[","[CS61A/misc/TREES]","]\n[","[tree_representation]","]"))}p.isMDXComponent=!0}}]);