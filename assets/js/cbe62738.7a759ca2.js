"use strict";(self.webpackChunkaaronzheng=self.webpackChunkaaronzheng||[]).push([[6807],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),h=r,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||s;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7104:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const s={},i=void 0,o={unversionedId:"CS61A/lec/cs_lec_13",id:"CS61A/lec/cs_lec_13",title:"cs_lec_13",description:"- Lecture notes: link",source:"@site/docs/CS61A/lec/cs_lec_13.md",sourceDirName:"CS61A/lec",slug:"/CS61A/lec/cs_lec_13",permalink:"/aaronzheng/docs/CS61A/lec/cs_lec_13",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CS61A/lec/cs_lec_13.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cs_lec_12",permalink:"/aaronzheng/docs/CS61A/lec/cs_lec_12"},next:{title:"cs_lec_14",permalink:"/aaronzheng/docs/CS61A/lec/cs_lec_14"}},l={},c=[],p={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"#r/lecture"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Lecture notes: link")),(0,r.kt)("h1",{id:"lecture-1010"},"Lecture: 10/10"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jupyter"},'print("Hello world i am cool")\n')),(0,r.kt)("h1",{id:"attributes"},"Attributes"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Terminology: Attributes, Functions and Methods")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All ",(0,r.kt)("strong",{parentName:"li"},"objects")," have attributes, which are name-value pairs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Classes")," are objects too, so they have attributes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Instance attribute"),": attribute of an instance"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Class attribute"),": attribute of a class",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"probably equivalent to methods and ",(0,r.kt)("strong",{parentName:"li"},"static")," objects in Java.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Terminology:"),"\n![","[chrome_PBI7Kk8h3w.png]","]"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Python Object System")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Functions")," are objects."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Bound methods"),' are also objects: a function that has its first parameter "self" already bound to an instance (of the class)'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Dot expressions")," evalate to bound methods for class attributes that are functions. ",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"- Example: \n    - instance.method_name\n")),(0,r.kt)("strong",{parentName:"li"},"Looking up attributes by name(reminder)"),"\nexpression . name\nTo evaluate dot expression")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Evaluate expression to the left of the dot, which yields the object(required)"),(0,r.kt)("li",{parentName:"ol"},"Name is matched against the instance attributes of that object; if an attribute with that name exists, its vlaue is returned."),(0,r.kt)("li",{parentName:"ol"},"If not, name is looked up in the class, which yields a class attribute value"),(0,r.kt)("li",{parentName:"ol"},"That value is returned unless its a function, in which case a bound method is returned instaed")),(0,r.kt)("p",null,"Assignment statements with a dot expression on their left-hand side affect attirbutes for the objet of that dot expression."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the object is ",(0,r.kt)("strong",{parentName:"li"},"instance"),", then assignemnt set sinstance attribute"),(0,r.kt)("li",{parentName:"ul"},"If object is ",(0,r.kt)("strong",{parentName:"li"},"class"),", then assignment sets a class attribute.\n",(0,r.kt)("strong",{parentName:"li"},"Instance attribute assignment example:"),"\n![","[chrome_xR4KuTK9I4.png]","]\n'interest' is an instance attribute, since the object of the dot expression(the first thing before the dot) is ",(0,r.kt)("em",{parentName:"li"},"tom_account"),", which is an instance (of class Account)")),(0,r.kt)("p",null,"The name (",(0,r.kt)("em",{parentName:"p"},"interest"),") is not looked up in the class. In fact, ",(0,r.kt)("em",{parentName:"p"},"tom_account")," didn't even have an attribute ",(0,r.kt)("em",{parentName:"p"},"interest"),", only ",(0,r.kt)("em",{parentName:"p"},"holder")," and ",(0,r.kt)("em",{parentName:"p"},"balance"),", since it wasn't defined in the constructor. "),(0,r.kt)("p",null,"So basically python creates a new attribute called ",(0,r.kt)("em",{parentName:"p"},"interest")," under ",(0,r.kt)("em",{parentName:"p"},"tom_account"),". "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Class attribute Assignment"),"\n![","[chrome_T9WDh3sCM3.png]","]\n",(0,r.kt)("em",{parentName:"p"},"Account")," exists and is a class, so this is class attirbute assignment. Since the ",(0,r.kt)("em",{parentName:"p"},"interest")," attribute already exists, that attribute under ",(0,r.kt)("em",{parentName:"p"},"Account")," will be modified."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Attribute Assignment Statements"),"\n",(0,r.kt)("strong",{parentName:"p"},"For class assignemnt"),"\n![","[chrome_eh7xEeJrw3.png]","]\nSo ",(0,r.kt)("em",{parentName:"p"},"interest")," is the attribute for every class.\n(withdraw, deposit) are methods.\n![","[chrome_S3ePVAH28r.png]","]\nAs seen above, we see that the ",(0,r.kt)("em",{parentName:"p"},"interest")," attribute is not static and can be changed, and thsi change will be reflected in all of the ",(0,r.kt)("em",{parentName:"p"},"instances")," of the class ",(0,r.kt)("em",{parentName:"p"},"Account"),"\n",(0,r.kt)("strong",{parentName:"p"},"For instance assignemnt"),"\n![","[chrome_POhwzuOr54.png]","]"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Instance assignment attributes in different objects are different and can take on different values, even if both instances involved are objects of the same class"),(0,r.kt)("li",{parentName:"ul"},"The instance assignment (name) can be the same as a class attribute, and that will be completely fine. The assignment of the attribute for the instance is independent from the class attribute. ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Inheritance"),'\nInheritance -> Relating classes together\nCommon use: Two similar classes differ in degree of specialization.\n1) Specialized class may have same attributes as general class, along with special-case behaviour\n2) New subclass "shares" attr with base class\n3) Subclass may ',(0,r.kt)("em",{parentName:"p"},"override")," inherited attributes, class or instance."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example Inheritance"),"\nChecking account -> specialized Account (with interest cuz banks are trash)\n![","[chrome_rPc9uMpm0X.png]","]\n1) Basically regular account, but withdraw method is stlightly different.\n2) Perfect solution is to have the Checking account extend/inherit from Account, but overriding the ",(0,r.kt)("em",{parentName:"p"},"withdraw")," method to add the fee which is why banks are trash\n",(0,r.kt)("strong",{parentName:"p"},"Extending in python example below:"),"\n![","[chrome_d9njr1ZSxy.png]","]\nBase class attributes aren't copied into subclasses!\nTo look up name in class:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If it names attribute in class, return attribute"),(0,r.kt)("li",{parentName:"ol"},"Otherwise, look up name in base class, if there is one.\n![","[chrome_ZHcNRwryPE.png]","]\n",(0,r.kt)("strong",{parentName:"li"},"Noob implementation(w.o extend of base class method):"),"\n![","[chrome_32M7XkEWus.png]","]\n",(0,r.kt)("strong",{parentName:"li"},"Dominant implementation"),"\n![","[chrome_URDxhHACbk.png]","]")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Using parent method to accomplish goals"),"\n![","[chrome_dsiFyxJF8Z.png]","]\n![","[chrome_maVQTUafYY.png]","]")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Inheritance & Composition"),"\n![","[chrome_5BwlHsh1MR.png]","]"),(0,r.kt)("p",null,"![","[chrome_rItrPfyV0y.png]","]"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Designing for Inheritance"),"\n![","[chrome_Gzh4lLrqDC.png]","]\n![","[chrome_Cjd2iC5jD0.png]","]"),(0,r.kt)("p",null,"WTF:\n![","[chrome_1KOYMYwIKm.png]","]"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Multiple Inheritance"),"\n![","[chrome_32s8dM7gHq.png]","]\n![","[chrome_1yvg4wQuEl.png]","]"),(0,r.kt)("p",null,"![","[chrome_JPeGZE4j1g.png]","]\nOnly thing we need to know is that methods will first be pulled from the (first level parents class), rather than the upper levels parent class."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"There is a particular order in which you look at all of this. To find (attributes, methods, etc), all one needs to know is that you look in the subclasses before you look at the base class")," - John DeNero."))}m.isMDXComponent=!0}}]);