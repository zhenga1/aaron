"use strict";(self.webpackChunkaaronzheng=self.webpackChunkaaronzheng||[]).push([[534],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),f=a,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||o;return t?r.createElement(d,l(l({ref:n},c),{},{components:t})):r.createElement(d,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8280:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const o={},l=void 0,i={unversionedId:"CS61A/lec/cs_lec_2",id:"CS61A/lec/cs_lec_2",title:"cs_lec_2",description:"Warren Hall can be used for CS 61a help",source:"@site/docs/CS61A/lec/cs_lec_2.md",sourceDirName:"CS61A/lec",slug:"/CS61A/lec/cs_lec_2",permalink:"/aaronzheng/docs/CS61A/lec/cs_lec_2",draft:!1,editUrl:"https://github.com/zhenga1/aaronzheng/tree/main/docs/CS61A/lec/cs_lec_2.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cs_lec_19",permalink:"/aaronzheng/docs/CS61A/lec/cs_lec_19"},next:{title:"Interpreter",permalink:"/aaronzheng/docs/CS61A/lec/cs_lec_20"}},s={},u=[{value:"Looking Up Names In Environment",id:"looking-up-names-in-environment",level:3}],c={toc:u};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Warren Hall can be used for CS 61a help\nTypes of expressions\nExpression descrbes a computation and evaluates to a value"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"18+69\n6/23\nsqrt(3493161)\n")),(0,a.kt)("p",null,"The way the call expression is done is as so:\n===function call notation\nCall notation==="),(0,a.kt)("p",null,"Anatomy of call expression"),(0,a.kt)("p",null,"THIS IS THE CALL EXPRESSION\n",(0,a.kt)("inlineCode",{parentName:"p"},"add (2,3))"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"Operator(the function name) ( Operand, Operand )")),(0,a.kt)("p",null,"Evaluation procedure for call exressions:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Evaluating nested expression:"),"\nThis is all just one call expression\n",(0,a.kt)("inlineCode",{parentName:"p"},"mul(add(4,mul(4,6)),add(3,5))"),"\nThe operator is ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"mul")),", the operands are ",(0,a.kt)("inlineCode",{parentName:"p"},"add(4,mul(4,6))")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"add(3,5)"),"\nCall procedure is the operands. "),(0,a.kt)("p",null,"All arguments are values\nArgument is just a number"),(0,a.kt)("p",null,"Execution rule for assignment statements:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"evaluate all expressions to the right of = from left to right.")),(0,a.kt)("p",null,"Defining Functions\nssignment is a simple means of abtraction: binds names to values"),(0,a.kt)("p",null,"Function definition is a more powerful means of abstraction: binds names to expression"),(0,a.kt)("p",null,"Function definition is a more powerful means of abstraction: binds names to expressions\nFunction signature indicates how many arguments a function takes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def <name> <formal Paramenters>:\n    return <return expressions>\n")),(0,a.kt)("p",null,"Calling user-defined functions\nProcedure for calling/applying user-defined functions (version 1):"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Add a local frame, forming a new environemnt"),(0,a.kt)("li",{parentName:"ol"},"Bind the functions' formal paramenters to its arguments in that frame"),(0,a.kt)("li",{parentName:"ol"},"Execute the body of the function in that new environment")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"from operator import mul\ndef square(x):\n    return mul(x,x)\nsquare(-2)\n")),(0,a.kt)("p",null,"Global frame "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mul \u2192 func mul(...)\nsquare \u2192 func square(x)\n")),(0,a.kt)("p",null,"Original name of fucntion called\nsquare"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    x | -2\n    return value 4\n")),(0,a.kt)("p",null,"A function"),(0,a.kt)("h3",{id:"looking-up-names-in-environment"},"Looking Up Names In Environment"),(0,a.kt)("p",null,"Every expression is evaluated in the context of an environment."),(0,a.kt)("p",null,"So far, the ccurrent environment is either:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The globl frame alone, or "),(0,a.kt)("li",{parentName:"ul"},"A local frame, followed by the global frame")),(0,a.kt)("p",null,"Most important two things I'll say all day:\nAn environment is a sequence of frames."),(0,a.kt)("p",null,"A name evaluates to the value bound to that name in the\nearliest frame of the curent environemnt in which that name is found."))}p.isMDXComponent=!0}}]);