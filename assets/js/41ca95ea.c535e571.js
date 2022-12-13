"use strict";(self.webpackChunkaaronzheng=self.webpackChunkaaronzheng||[]).push([[7369],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,h=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={},l=void 0,i={unversionedId:"EECS16A/eecs_lecture/eecs_lec_5",id:"EECS16A/eecs_lecture/eecs_lec_5",title:"eecs_lec_5",description:"Safety protocol",source:"@site/docs/EECS16A/eecs_lecture/eecs_lec_5.md",sourceDirName:"EECS16A/eecs_lecture",slug:"/EECS16A/eecs_lecture/eecs_lec_5",permalink:"/aaronzheng/docs/EECS16A/eecs_lecture/eecs_lec_5",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/EECS16A/eecs_lecture/eecs_lec_5.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"eecs_lec_4",permalink:"/aaronzheng/docs/EECS16A/eecs_lecture/eecs_lec_4"},next:{title:"eecs_lec_6",permalink:"/aaronzheng/docs/EECS16A/eecs_lecture/eecs_lec_6"}},c={},s=[],u={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Safety protocol\nEECS 16A\nDesigning information devices and Systems I"),(0,o.kt)("p",null,"Real world --\x3e [","[ Sensors --\x3e (Electrical Signals) Processing ]","] --\x3e Information\nAll kinds of sensors exist in the real world, which produce signals."),(0,o.kt)("p",null,"Module 2- More tools to build systems\nAnalog World, Sensor, Processing, Actuation\nMeasurements -> Accuracy in the measurement -> Stick the thermometer in skin."),(0,o.kt)("p",null,"Actuation -> 16B. After you process the data, the next step would be -\nThe actuation will be, air conditioning will come on, and teh device will blow cold air ... to a certain temperature.\nThen the air conditioning turns on.."),(0,o.kt)("p",null,"System Example - Electromyography"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Monitors muscle activity"),(0,o.kt)("li",{parentName:"ul"},"Used in gesture recognition"),(0,o.kt)("li",{parentName:"ul"},"Impact in rehabilitation")),(0,o.kt)("p",null,"Bad parts about it"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bulky electrodes"),(0,o.kt)("li",{parentName:"ul"},"Poor accuracy - low resolution"),(0,o.kt)("li",{parentName:"ul"},"Computation performed on external devices")),(0,o.kt)("p",null,"Very fine muscles that are responsible for your mobility\nElecctrodes ar every bulky, accuracy of the electrodes are very low"),(0,o.kt)("p",null,"System example - Electromyography.\nScientist/Engineer mixing silver and "),(0,o.kt)("p",null,"TEAM was able to define 16 movements in the hand very precisely\nTaking fthis class requires both hardware and software. You are going to learn how to analyse circuits.\nHere the metabiology is a bit different in high school, and what is used in circuit classes later. "),(0,o.kt)("p",null,"Class (Intro to electrical engineering\nHopes -> Build gigantic machinery\nReality -> Designing (software) to do circuitry"),(0,o.kt)("p",null,"Electrons are very important for electriical devices, as they are the only thing that can move, which\ncan create CURRENT. "),(0,o.kt)("p",null,"SOme electrons give radiation"),(0,o.kt)("p",null,"Electronic devices depned on movement of charge"),(0,o.kt)("p",null,"What are the electrical quantities(properties we know).\nCurrent -> Flow of electrons -> I -> Ampere(Amp)\nVoltage(Electric potential) -> Force pushing the electrons -> V -> Volts(V)\nResistance R --\x3e Units is Ohms(ohm) -> Opposition to the flow of electrons"),(0,o.kt)("p",null,"Diode -> only allows current in one direction\nWith lines -> We have no current devices or large current devices"),(0,o.kt)("p",null,"You can have a wire that is connected to a voltage source.\nVelem = 0\nI elem = ?\nCurrent is set by the external circuit. You can connect a live wire (a current running through it)\nand there will be current but there won't be any voltage. (Just like a wire, wire has no difference (voltage) across\nbut it has current)"),(0,o.kt)("p",null,"I elem = 0\nVelem = ?\nDetermined by external sources. Open circuit has zero current but may have some vvoltage."),(0,o.kt)("p",null,"Voltage\nVoltage source = Vs\nIelem = ?\n( elem set by ext. circuit)"),(0,o.kt)("p",null,"Use transistors, or diodes, or solar cells. "),(0,o.kt)("p",null,"I element = Is\nVel = ? (No one knows, cuz its set by the external circuit).\nVoltage and current can both be negative... it depends on the directionality"),(0,o.kt)("p",null,"Electronic box.\nA circuit diagram can have many nodes and junctions"),(0,o.kt)("p",null,"Nodes: point where elements meet\n-> whenever one elemenet meets another element, that is a node\nJunction: point where different materials meet. -> when materials + wire, that is one junction.\nWIre = Copper + plastics -> Junction\nDiodes -> P, N, etc, -> Junction"),(0,o.kt)("p",null,"Voltage is difference in electrical potential",(0,o.kt)("br",{parentName:"p"}),"\n","There are 4 nodes"),(0,o.kt)("p",null,"In a matrix A such that we can have A*x = 0, we must have\nRow = measurement(each)\nColumn = variable(each)"),(0,o.kt)("p",null,"Range = Column space = span"))}p.isMDXComponent=!0}}]);