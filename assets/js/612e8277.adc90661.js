"use strict";(self.webpackChunkaaronzheng=self.webpackChunkaaronzheng||[]).push([[6902],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=i,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6595:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={},a=void 0,s={unversionedId:"EECS16A/EECS_circuits",id:"EECS16A/EECS_circuits",title:"EECS_circuits",description:"![[Note14.pdf]]",source:"@site/docs/EECS16A/EECS_circuits.md",sourceDirName:"EECS16A",slug:"/EECS16A/EECS_circuits",permalink:"/aaronzheng/docs/EECS16A/EECS_circuits",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/EECS16A/EECS_circuits.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Correlation and Trilateration Notes",permalink:"/aaronzheng/docs/EECS16A/Correlation and Trilateration Notes"},next:{title:"Least Squares",permalink:"/aaronzheng/docs/EECS16A/Least Squares"}},c={},l=[],u={toc:l};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"![","[Note14.pdf]","]"),(0,i.kt)("h1",{id:"power"},"Power"),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"What does it mean for the power of a particular component to be negative, for the following components?\n(a) Resistor\nIt means current is flowing opposing the direction of the voltage applied, which implies resistor is providing power -> impossible\n(b) Voltage source\nIt means voltage source is generating power, since current is flowing (in the case of voltage source) against the direction of potential difference\n(c) Current source\nIt means the current source is generating power, forcing current to flow in a direction opposing the voltage differential\n\u9488\u5bf9\u6240\u6709\u7684\u7535\u538b\u7535\u6d41\u6e90\u8fdb\u884c\u72ec\u7acb\u5206\u6790\n\u5168\u90fd\u662f\u7ebf\u6027\u65b9\u7a0b\uff0c\u6240\u4ee5\u5c31\u662f\u53ef\u4ee5\u76f8\u52a0\u7684\u3002\u6240\u4ee5Vs\uff0cVb\uff0c Ia \u5168\u90fd\u662f\u53ef\u4ee5\u8bbe\u4e3a\u96f6\u76f8\u52a0\u7684\u3002")),(0,i.kt)("p",null,"Voltage source = short circuit = wire\nCurrent source = open circuit\nVoltmeter = open circuit\nAmmeter = short circuit = wire"),(0,i.kt)("p",null,"All electronic devices require connections to conduct signals. These connections, or traces, are manufactured through different deposition methods such as physical vapor deposition and chemical vapor deposition. Another less traditional technique is printing. Inks can be made from metallic nanoparticles and deposited using inkjet printing, screen printing, and spray coating. A commonly printed metal ink is silver."),(0,i.kt)("h1",{id:"note-15"},"Note 15"),(0,i.kt)("p",null,"![","[Note15.pdf]","]\nCircuit analysis can be cumbersome to do by hand, and it can be difficult to understand the high-level behavior of complicated circuits given a schematic. We need tools we can use to both lessen the burden of analysis, and help us think about circuits and understand how they behave. Ultimately, our goal is to design interesting circuits, and in this note we will build up additional tools to help us."),(0,i.kt)("h1",{id:"dependent-sources"},"Dependent Sources"),(0,i.kt)("p",null,"At this point, we will introduce a new circuit element: dependent sources. Dependent sources act like the independent sources we\u2019ve studied so far, but instead of a producing a single voltage/current, the voltage/current is controlled by something else in the circuit. There are four different types of dependent sources, shown below.\n![","[chrome_O7WvOXsbHn.png]","]\nI.e. Dependent source (provides voltage, current depending on another quantity of voltage/current that is being provided)\nIn this case, the current in the dependent source is equal a constant (gm) times the voltage vc, which is defined elsewhere in the circuit. Just like an independent current source, this dependent source will produce the same current, regardless of what is connected to it (unless vc changes \u2013 then the current will change appropriately). As we\u2019ll see in future notes, dependent sources are useful tools for modeling many advanced circuit elements."),(0,i.kt)("p",null,"For each independent source k (either voltage source or current source):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Set all other independent sources to 0 "),(0,i.kt)("li",{parentName:"ul"},"Voltage source: replace with a wire "),(0,i.kt)("li",{parentName:"ul"},"Current source: replace with an open circuit "),(0,i.kt)("li",{parentName:"ul"},"Compute the circuit voltages and currents due to this source k"),(0,i.kt)("li",{parentName:"ul"},"Compute Vout by summing the Vout,ks for all k")),(0,i.kt)("p",null,"We know that the slope of the line is equal to 1/R . What happens in the limit where R trends towards infinity? Then the line becomes the x-axis, which corresponds to an open circuit as we\u2019ve seen earlier. Now what happens in the limit where R trends towards zero? The line becomes the y-axis, which corresponds to a wire. "),(0,i.kt)("p",null,"To summarize, ",(0,i.kt)("strong",{parentName:"p"},"zero voltage source and zero resistance are equivalent to wires (i.e. short circuits); zero current source and infinite resistance are equivalent to open circuits.")),(0,i.kt)("p",null,"Definition of ",(0,i.kt)("strong",{parentName:"p"},"equivalence"),"\nTwo circuits are ",(0,i.kt)("strong",{parentName:"p"},"equivalent")," if they have the same I \u2212V relationship. (An example of an I \u2212V is that of a resistor, i.e., V = IR or I = V R ). This is exactly what we mean by equivalence; be careful not to overextend this definition or apply others. For example, equivalence tells us nothing about the power in a circuit and one should be careful not to assume it does. "),(0,i.kt)("p",null,"Now why is this possibly intuitively? "),(0,i.kt)("p",null,"Since voltage and current are governed by a linear relationship for all of the circuit elements we\u2019ve learned about, and a line can be uniquely determined by exactly two points, we can capture the original circuit with a simplified circuit that has exactly two components: a voltage (or current) source and a resistor."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Definition 15.1 (equivalent circuit): If we pick two terminals within a circuit, we say that another circuit is equivalent to the original circuit if it exhibits the same I \u2212V relationship at those two terminals.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"15.8 Summary for Finding Equivalent Resistance"),"\nIn general, there are three ways of finding the Thevenin/Norton equivalent resistance of a circuit. However, some of them only work in certain situations, so need to be used with caution. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Zero out all independent sources and apply a Vtest or Itest to calculate the resulting Itest or Vtest respectively. Req = Vtest / Itest . This is the method that we described in detail in the examples above, because this method works for any circuit. When in doubt, this method is the most reliable. "),(0,i.kt)("li",{parentName:"ol"},"Zero out all independent sources and reduce the entire remaining circuit into a single resistor using the series and parallel resistor formulas that were derived in Sections 15.7.1 and 15.7.2. This method does not work if there are dependent sources. Remember that only independent sources are zeroed out, and there are no resistor formulas for dependent sources. In addition, some resistor configurations cannot be decomposed into combinations of parallel and series resistances. "),(0,i.kt)("li",{parentName:"ol"},"Calculate Vth and Ino, Req = Vth / Ino . This is an efficient method of finding Req if both the Thevenin and Norton equivalent circuits are being derived. Why does this work? Since the IV relationship is linear, we can calculate the slope (which is the reciprocal of resistance) from any two points. Vth and Ino are the points where the IV curve crosses the V and I axes, respectively (see the left-hand figure below). However, this method does not work if Vth and Ino do not provide two unique points on the IV curve (see the right-hand figure below). Specifically, this method only works if there is at least one independent source in the circuit. When there are no independent sources, Vth = Ino = 0 which does not provide enough information to calculate Req.")))}d.isMDXComponent=!0}}]);