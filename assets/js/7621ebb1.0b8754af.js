"use strict";(self.webpackChunkaaronzheng=self.webpackChunkaaronzheng||[]).push([[4050],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||i;return r?n.createElement(d,c(c({ref:t},p),{},{components:r})):n.createElement(d,c({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6622:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={},c=void 0,o={unversionedId:"CS61A/misc/slicing",id:"CS61A/misc/slicing",title:"slicing",description:"slice is a function that creates a slice object. Makes list slicing easier",source:"@site/docs/CS61A/misc/slicing.md",sourceDirName:"CS61A/misc",slug:"/CS61A/misc/slicing",permalink:"/aaronzheng/docs/CS61A/misc/slicing",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CS61A/misc/slicing.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Scheme",permalink:"/aaronzheng/docs/CS61A/misc/retarded error"},next:{title:"tree_representation",permalink:"/aaronzheng/docs/CS61A/misc/tree_representation"}},s={},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"slice"))," is a function that creates a ",(0,a.kt)("em",{parentName:"p"},"slice")," object. Makes list slicing easier"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"slice(start, end, step)")," creates a slice object that starts slicing list or iterable from ",(0,a.kt)("em",{parentName:"li"},"start")," to ",(0,a.kt)("em",{parentName:"li"},"end"),", kind of like a range object, each time stepping by ",(0,a.kt)("em",{parentName:"li"},"step")," amount of times.\nExample:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Python"},'a = ("a",\xa0"b",\xa0"c",\xa0"d",\xa0"e",\xa0"f",\xa0"g",\xa0"h")  \nx =\xa0slice(3,\xa05)  \nprint(a[x])\n>>>Execute\n(\'d\',\'e\')\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Python"},'a = ("a", "b", "c", "d", "e", "f", "g", "h")\nx = slice(0, 8, 3)\nprint(a[x])\n>>>Execute\n(\'a\',\'d\',\'g\')\n')),(0,a.kt)("p",null,"Its a pretty cool function"))}u.isMDXComponent=!0}}]);