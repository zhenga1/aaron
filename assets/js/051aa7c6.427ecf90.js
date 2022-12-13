"use strict";(self.webpackChunkaaronzheng=self.webpackChunkaaronzheng||[]).push([[6700],{3905:(a,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>h});var s=t(7294);function n(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,s)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){n(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,s,n=function(a,e){if(null==a)return{};var t,s,n={},m=Object.keys(a);for(s=0;s<m.length;s++)t=m[s],e.indexOf(t)>=0||(n[t]=a[t]);return n}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(s=0;s<m.length;s++)t=m[s],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(n[t]=a[t])}return n}var l=s.createContext({}),i=function(a){var e=s.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},c=function(a){var e=i(a.components);return s.createElement(l.Provider,{value:e},a.children)},o="mdxType",N={inlineCode:"code",wrapper:function(a){var e=a.children;return s.createElement(s.Fragment,{},e)}},k=s.forwardRef((function(a,e){var t=a.components,n=a.mdxType,m=a.originalType,l=a.parentName,c=p(a,["components","mdxType","originalType","parentName"]),o=i(t),k=n,h=o["".concat(l,".").concat(k)]||o[k]||N[k]||m;return t?s.createElement(h,r(r({ref:e},c),{},{components:t})):s.createElement(h,r({ref:e},c))}));function h(a,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof a||n){var m=t.length,r=new Array(m);r[0]=k;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=a,p[o]="string"==typeof a?a:n,r[1]=p;for(var i=2;i<m;i++)r[i]=t[i];return s.createElement.apply(null,r)}return s.createElement.apply(null,t)}k.displayName="MDXCreateElement"},1688:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>o,frontMatter:()=>m,metadata:()=>p,toc:()=>i});var s=t(7462),n=(t(7294),t(3905));const m={},r=void 0,p={unversionedId:"EECS16A/eecs_lecture/eecs_lec_20",id:"EECS16A/eecs_lecture/eecs_lec_20",title:"eecs_lec_20",description:"![[WhatsApp Image 2022-11-08 at 12.46.27 PM.jpeg]]",source:"@site/docs/EECS16A/eecs_lecture/eecs_lec_20.md",sourceDirName:"EECS16A/eecs_lecture",slug:"/EECS16A/eecs_lecture/eecs_lec_20",permalink:"/aaronzheng/docs/EECS16A/eecs_lecture/eecs_lec_20",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/EECS16A/eecs_lecture/eecs_lec_20.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"eecs_lec_2",permalink:"/aaronzheng/docs/EECS16A/eecs_lecture/eecs_lec_2"},next:{title:"eecs_lec_21",permalink:"/aaronzheng/docs/EECS16A/eecs_lecture/eecs_lec_21"}},l={},i=[],c={toc:i};function o(a){let{components:e,...t}=a;return(0,n.kt)("wrapper",(0,s.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"![","[WhatsApp Image 2022-11-08 at 12.46.27 PM.jpeg]","]"),(0,n.kt)("h1",{id:"design-procedure"},"Design Procedure"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 1 (Specification):")," Concretely restate the goals for the design.\nFrequently, a design prompt will inclddue a lot of text, so we'd like to restate all fo the most important features of our design. We'll refer to these specifications later to determine if our design is complete. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 2 (Strategy)")," ",(0,n.kt)("em",{parentName:"p"},"Describe your strategy")," (often in the form of block diagram) to achieve your goal. To do this, start by thinking about what you can measure s what you want to know"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 3 (Implementation)")," ",(0,n.kt)("em",{parentName:"p"},"Implement the components described in your strategy.")," This is where pattern matching is useful: remind yourself of blocks you know, (ex. voltage divider, inverting amplifier) and check if any of these can be used to implement steps of your strategy."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 4 (Verification):")," ",(0,n.kt)("em",{parentName:"p"},"Check that your design from Step 3 does what you specified in Step 1.")," Check block-to-block connections, as these are the most common point for problems. Does one block load another block causing it to behave differently than expected? Are there any contradictions (ex. a voltage source with both ends connected by a wire, or a current source directed into an open circuit)?"),(0,n.kt)("h1",{id:"cascading-blocks"},"Cascading Blocks"),(0,n.kt)("h1",{id:"unit-gain-buffer"},"Unit Gain Buffer"),(0,n.kt)("p",null,"Allows us to isolate circuits/blocks\n![","[chrome_iAYimPap4l.png]","]"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example 1"),"\nWe want this:\n",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"V"),(0,n.kt)("mrow",{parentName:"msub"},(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mi",{parentName:"mrow"},"n"))),(0,n.kt)("mo",{parentName:"mrow"},"\u2192"),(0,n.kt)("mfrac",{parentName:"mrow"},(0,n.kt)("msub",{parentName:"mfrac"},(0,n.kt)("mi",{parentName:"msub"},"R"),(0,n.kt)("mn",{parentName:"msub"},"2")),(0,n.kt)("mrow",{parentName:"mfrac"},(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"R"),(0,n.kt)("mn",{parentName:"msub"},"1")),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"R"),(0,n.kt)("mn",{parentName:"msub"},"2")))),(0,n.kt)("mo",{parentName:"mrow"},"\u2192"),(0,n.kt)("mi",{parentName:"mrow"},"A"),(0,n.kt)("mi",{parentName:"mrow"},"v"),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mn",{parentName:"mrow"},"10"),(0,n.kt)("mo",{parentName:"mrow"},"\u2192"),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"V"),(0,n.kt)("mrow",{parentName:"msub"},(0,n.kt)("mi",{parentName:"mrow"},"o"),(0,n.kt)("mi",{parentName:"mrow"},"u"),(0,n.kt)("mi",{parentName:"mrow"},"t")))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"V_{in} \\rightarrow \\frac{R_2}{R_1+R_2} \\rightarrow Av = 10 \\rightarrow V_{out}")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.83333em",verticalAlign:"-0.15em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.22222em"}},"V"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.31166399999999994em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"-0.22222em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"\u2192"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1.3335309999999998em",verticalAlign:"-0.44509999999999994em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,n.kt)("span",{parentName:"span",className:"mfrac"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8884309999999999em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.655em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.00773em"}},"R"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.31731428571428577em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.357em",marginLeft:"-0.00773em",marginRight:"0.07142857142857144em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.5em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size3 size1 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.143em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mbin mtight"},"+"),(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.00773em"}},"R"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.31731428571428577em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.357em",marginLeft:"-0.00773em",marginRight:"0.07142857142857144em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.5em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size3 size1 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.143em"}},(0,n.kt)("span",{parentName:"span"}))))))))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,n.kt)("span",{parentName:"span",style:{top:"-3.4101em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.00773em"}},"R"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.31731428571428577em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.357em",marginLeft:"-0.00773em",marginRight:"0.07142857142857144em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.5em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size3 size1 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.143em"}},(0,n.kt)("span",{parentName:"span"})))))))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.44509999999999994em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"\u2192"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.68333em",verticalAlign:"0em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"1"),(0,n.kt)("span",{parentName:"span",className:"mord"},"0"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"\u2192"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.83333em",verticalAlign:"-0.15em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.22222em"}},"V"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2805559999999999em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"-0.22222em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"o"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"u"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"}))))))))))," "),(0,n.kt)("p",null,"![","[chrome_kmRdzsS29z.png]","]\n![","[chrome_78AFfy7IkI.png]","]\n",(0,n.kt)("strong",{parentName:"p"},"Example 3"),"\nWe see that A in the above expression is basically the expression:\n",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"V"),(0,n.kt)("mrow",{parentName:"msub"},(0,n.kt)("mi",{parentName:"mrow"},"o"),(0,n.kt)("mi",{parentName:"mrow"},"u"),(0,n.kt)("mi",{parentName:"mrow"},"t")))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"V_{out}")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.83333em",verticalAlign:"-0.15em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.22222em"}},"V"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2805559999999999em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"-0.22222em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"o"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"u"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"}))))))))))),(0,n.kt)("p",null,"A\xa0",(0,n.kt)("strong",{parentName:"p"},"voltage follower"),"\xa0(also called a unity-gain amplifier, a buffer amplifier, and an isolation amplifier) is a op-amp circuit which has a voltage gain of 1."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Floating node")," capacitors always conserve capacitor charge "),(0,n.kt)("p",null,"A common use of an op-amp is to ",(0,n.kt)("strong",{parentName:"p"},"convert a current signal into a voltage signal"),". This configuration is called a ",(0,n.kt)("strong",{parentName:"p"},"transresistance amplifier"),", as shown in Figure 2. (Note: In the real world, we call this a transimpedance amplifier. Impedance is just a fancy word to describe resistance as a function of frequency.) Assume that VSS = \u2212VDD for all the parts of this problem."),(0,n.kt)("p",null,"An ideal current source is a device which supplies constant current to any load resistor that is connected across it. An ideal current source has infinite parallel resistance connected across its terminals. Thus, the output current is independent of voltage of the source terminals as well as the value of the resistor it is providing current to. A realistic current source is a device that has some internal resistance connected across its terminals. Unlike the ideal version, the current of a real-world current source depends on the voltage of the source. The more this voltage, the smaller the current will be"),(0,n.kt)("p",null,"The first rule holds since we assume that the input resistance for an op-amp is infinite. The second rule holds because in feedback, the input and output voltage have to be the same."))}o.isMDXComponent=!0}}]);