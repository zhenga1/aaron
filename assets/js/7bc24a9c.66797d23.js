"use strict";(self.webpackChunkaaronzheng=self.webpackChunkaaronzheng||[]).push([[8493],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,d=u["".concat(s,".").concat(m)]||u[m]||h[m]||i;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7359:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={},o="Interpreter",l={unversionedId:"CS61A/lec/cs_lec_20",id:"CS61A/lec/cs_lec_20",title:"Interpreter",description:"An\xa0interpreter\xa0is a program which can directly execute instructions in a programming language like Python or Scheme. To do this, the interpreter needs to understand how the rules of a language work, and to do that, the interpreter needs to be designed (by a human, usually!) to follow those rules. In CS 61A, we'd like to learn how the interpreter\xa0program\xa0works and understand the ideas that go into an interpreter to reveal the magic behind how a computer makes sense of\xa0(+ 1 2)\xa0in Scheme and\xa01 + 2\xa0in Python.",source:"@site/docs/CS61A/lec/cs_lec_20.md",sourceDirName:"CS61A/lec",slug:"/CS61A/lec/cs_lec_20",permalink:"/old_aaronzheng/docs/CS61A/lec/cs_lec_20",draft:!1,editUrl:"https://github.com/zhenga1/old_aaronzheng/tree/main/docs/CS61A/lec/cs_lec_20.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cs_lec_2",permalink:"/old_aaronzheng/docs/CS61A/lec/cs_lec_2"},next:{title:"Database Management Systems",permalink:"/old_aaronzheng/docs/CS61A/lec/cs_lec_21"}},s={},p=[{value:"REPL",id:"repl",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interpreter"},"Interpreter"),(0,a.kt)("p",null,"An\xa0",(0,a.kt)("strong",{parentName:"p"},"interpreter"),"\xa0is a program which can directly execute instructions in a programming language like Python or Scheme. To do this, the interpreter needs to understand how the rules of a language work, and to do that, the interpreter needs to be designed (by a human, usually!) to follow those rules. In CS 61A, we'd like to learn how the interpreter\xa0",(0,a.kt)("em",{parentName:"p"},"program"),"\xa0works and understand the ideas that go into an interpreter to reveal the magic behind how a computer makes sense of\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"(+ 1 2)"),"\xa0in Scheme and\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"1 + 2"),"\xa0in Python."),(0,a.kt)("h3",{id:"repl"},"REPL"),(0,a.kt)("p",null,"The interpreters we study in this course are designed around a\xa0",(0,a.kt)("strong",{parentName:"p"},"Read-Eval-Print-Loop"),"."),(0,a.kt)("p",null,"The interpreter waits for our input, looping until we type in a string of characters,\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"(+ 1 2)"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the\xa0",(0,a.kt)("strong",{parentName:"p"},"Read"),"\xa0stage, we take the string of characters and convert those characters into data structures that can be understood by the interpreter. In the Scheme interpreter, we'd like to take the string of characters\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"(+ 1 2)"),"\xa0and convert it into a\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"Pair"),"\xa0structure,\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"Pair('+', Pair(1, Pair(2, nil)))"),"."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The\xa0",(0,a.kt)("strong",{parentName:"li"},"Lexer"),"\xa0takes the string\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"(+ 1 2)"),"\xa0and splits into meaningful\xa0",(0,a.kt)("em",{parentName:"li"},"tokens"),"\xa0wherever there is whitespace or a syntax character like the open parenthesis\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"("),". The lexer returns a structure that kind of resembles a list of individual characters like\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"['(', '+', 1, 2, ')']"),"."),(0,a.kt)("li",{parentName:"ul"},"The\xa0",(0,a.kt)("strong",{parentName:"li"},"Parser"),"\xa0takes the list of smaller strings and converts them into a data structure that understands the nesting in the language. It's not too tricky to convert the example above from\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"['(', '+', '1', '2', ')']"),"\xa0to\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"Pair('+', Pair(1, Pair(2, nil)))"),". But the pair structure is much more useful when we want to work on a more nested example like\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"(= (+ 1 2) 3)"),"\xa0which the lexer converts into the flat list\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"['(', '=', '(', '+', 1, 2, ')', 3, ')']"),". As the expressions get more and more complicated, using a nested data structure helps the computer make sense of the expression in chunks, much like how we humans make sense of a Scheme expression as well."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the\xa0",(0,a.kt)("strong",{parentName:"p"},"Eval"),"\xa0stage, we evaluate the nested data structure to a value."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If the expression is simple, like a number or a boolean, we can just return the number or boolean itself without any further evaluation. Evaluating 1 in the global frame returns the number\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"1"),". If we pass in a name like 'x', we'll try to evaluate the name 'x' in the current environment, looking up through the parent frames as necessary."),(0,a.kt)("li",{parentName:"ul"},"If we pass a call expression like\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"Pair('+', Pair(1, Pair(2, nil)))"),"\xa0into the evaluator, we'll follow the call expression evaluation rules to determine the value of the value of the expression. We'll evaluate the operator,\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"'+'"),", to the built-in procedure which adds values, and each operand, 1 and 2, before applying the procedure to the arguments."),(0,a.kt)("li",{parentName:"ul"},"if the expression is a special form like\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"Pair('define', Pair('x', Pair(1, nil)))"),"\xa0(after parsing\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"(define x 1)"),"), then we'll follow the special form evaluation rules defined in the Scheme interpreter. In this example, we don't need to evaluate the name 'x' (it's just a name!) but we do need to evaluate the value, the number\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"1"),"."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the\xa0",(0,a.kt)("strong",{parentName:"p"},"Print"),"\xa0stage, we take the value we determined in the evaluation stage and figure out how to display the value to the user. Even if an expression evaluates to a number, the computer actually stores that number in its memory as a bunch of 0 and 1 binary digits! We take that number and convert it back to a more readable representation like '3'!")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once we've displayed the value, we can wait in a\xa0",(0,a.kt)("strong",{parentName:"p"},"Loop"),"\xa0until the user asks another question to the interpreter."))),(0,a.kt)("p",null,"There are some special rules in the parser to handle scenarios like the quote operator\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"'"),". Run\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"python3 scheme_reader.py"),"\xa0to explore its behavior."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"read> '1\nstr : (quote 1)\nrepr: Pair('quote', Pair(1, nil))\nread> '(1 2 3)\nstr : (quote (1 2 3))\nrepr: Pair('quote', Pair(Pair(1, Pair(2, Pair(3, nil))), nil))\n")),(0,a.kt)("p",null,"Likewise, the evaluator also needs to handle the behavior of special forms differently from standard call expressions. The\xa0",(0,a.kt)("a",{parentName:"p",href:"https://cs61a.org/articles/scheme-spec/#special-forms"},"Scheme Specification"),"\xa0contains more information, and the special form evaluation rules will also be briefly described by example here."))}u.isMDXComponent=!0}}]);