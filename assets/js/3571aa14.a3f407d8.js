"use strict";(self.webpackChunkaaronzheng=self.webpackChunkaaronzheng||[]).push([[1233],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4734:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const a={},i=void 0,c={unversionedId:"CS61A/misc/Scheme syntax",id:"CS61A/misc/Scheme syntax",title:"Scheme syntax",description:"procedure:\xa0cons\xa0obj1 obj2",source:"@site/docs/CS61A/misc/Scheme syntax.md",sourceDirName:"CS61A/misc",slug:"/CS61A/misc/Scheme syntax",permalink:"/aaronzheng/docs/CS61A/misc/Scheme syntax",draft:!1,editUrl:"https://github.com/zhenga1/aaronzheng/tree/main/docs/CS61A/misc/Scheme syntax.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Scheme Doc",permalink:"/aaronzheng/docs/CS61A/misc/Scheme Doc"},next:{title:"Sequences",permalink:"/aaronzheng/docs/CS61A/misc/Sequences"}},s={},p=[],l={toc:p};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"procedure:\xa0",(0,o.kt)("strong",{parentName:"p"},"cons"),"\xa0",(0,o.kt)("em",{parentName:"p"},"obj1 obj2")),(0,o.kt)("p",null,"Returns a newly allocated pair whose car is\xa0obj1\xa0and whose cdr is\xa0obj2. The pair is guaranteed to be different (in the sense of\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"eqv?"),") from every previously existing object."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"(cons 'a '()) "),"                          =>  (a)\n",(0,o.kt)("inlineCode",{parentName:"p"},"(cons '(a) '(b c d))      "),"              =>  ((a) b c d)\n",(0,o.kt)("inlineCode",{parentName:"p"},'(cons "a" \'(b c)) '),'                      =>  ("a" b c)\n',(0,o.kt)("inlineCode",{parentName:"p"},"(cons 'a 3)     "),"                        =>  (a . 3)\n",(0,o.kt)("inlineCode",{parentName:"p"},"(cons '(a b) 'c)             "),"           =>  ((a b) . c)"),(0,o.kt)("h1",{id:"ways-of-defining-various-expressions"},"Ways of defining various expressions:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"(begin (foo) (bar))")," is a scheme expression that will run each subsequent expression within the ",(0,o.kt)("inlineCode",{parentName:"p"},"()")," of begin, and returns the evaluation of the last expression."))}u.isMDXComponent=!0}}]);