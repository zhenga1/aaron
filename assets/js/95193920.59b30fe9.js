"use strict";(self.webpackChunkaaronzheng=self.webpackChunkaaronzheng||[]).push([[8487],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,k=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return t?a.createElement(k,l(l({ref:n},m),{},{components:t})):a.createElement(k,l({ref:n},m))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2326:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const i={},l=void 0,o={unversionedId:"CS61A/lec/cs_lec_19",id:"CS61A/lec/cs_lec_19",title:"cs_lec_19",description:"Scheme is a dialect of Lisp",source:"@site/docs/CS61A/lec/cs_lec_19.md",sourceDirName:"CS61A/lec",slug:"/CS61A/lec/cs_lec_19",permalink:"/aaronzheng/docs/CS61A/lec/cs_lec_19",draft:!1,editUrl:"https://github.com/zhenga1/aaronzheng/tree/main/docs/CS61A/lec/cs_lec_19.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cs_lec_18",permalink:"/aaronzheng/docs/CS61A/lec/cs_lec_18"},next:{title:"cs_lec_2",permalink:"/aaronzheng/docs/CS61A/lec/cs_lec_2"}},s={},p=[{value:"Part 3: Special Forms",id:"part-3-special-forms",level:2}],m={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Scheme")," is a dialect of ",(0,r.kt)("strong",{parentName:"p"},"Lisp")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Scheme programs")," consist of expressions, which can be:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Primitive expressions:")," 2, 3.3, true, +, quotient, ..."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Combinations:")," (quotient 10 2), (not true), etc")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Numbers")," are ",(0,r.kt)("em",{parentName:"p"},"self-evaluating"),", whilst ",(0,r.kt)("strong",{parentName:"p"},"symbols")," are bound to ",(0,r.kt)("strong",{parentName:"p"},"values"),"\n",(0,r.kt)("strong",{parentName:"p"},"Call expressions")," include an ",(0,r.kt)("em",{parentName:"p"},"operator")," and ",(0,r.kt)("em",{parentName:"p"},"0 or more operands")," in parenthesis. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scheme"},"> (quotient 10 2)\n5\n> (quotient (+ 8 7) 5)\n3\n> (+ (* 3 ()))\n")),(0,r.kt)("p",null,'"quotient" names Scheme\'s built-in integer division procedure (i.e. function)\n![',"[chrome_TPrim4rfNQ.png]","]\nOne can also combine ",(0,r.kt)("strong",{parentName:"p"},"expressions")," throughout ",(0,r.kt)("strong",{parentName:"p"},"many lines"),", as long as the expressions are closed correctly(spacing doesn't matter). All it matters is that you ",(0,r.kt)("strong",{parentName:"p"},"close")," ",(0,r.kt)("strong",{parentName:"p"},"parenthesis")," that you open. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scheme"},"> 2\n2\n> (+ 1 2 3 4)\n10\n> (+)\n0\n> (* 1 2 3 4)\n24\n> (*)\n1\n> (* 2 2 2 2 2 3 3 3)\n864\n> (- (* 2 2 2 2 3 3 3) 1)\n> (number? 3)\n#t\n> (number? +)\n#f\n> (zero? 0)\n#t\n> (zero? 2)\n#f\n> (integer? 2.2)\n#f\n> (integer? 2)\n#t\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Special Form:"),"\nA combination that is not a call expression is a ",(0,r.kt)("strong",{parentName:"p"},"special form")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"If")," expression. (",(0,r.kt)("inlineCode",{parentName:"li"},"if <predicate> <consequent> <alternative>"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"And")," and ",(0,r.kt)("strong",{parentName:"li"},"or")," (",(0,r.kt)("inlineCode",{parentName:"li"},"and <e1>, <e2>, ... <en>"),"), (",(0,r.kt)("inlineCode",{parentName:"li"},"or <e1>,<e2>, ... ,<en>"),")"),(0,r.kt)("li",{parentName:"ul"},"Binding symbol: (",(0,r.kt)("inlineCode",{parentName:"li"},"define <symbol> <expression>"),")"),(0,r.kt)("li",{parentName:"ul"},"New procedures: (",(0,r.kt)("inlineCode",{parentName:"li"},"define (<symbol> <formal parameters>) <body>"),")")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scheme"},"> define (square x) (* x x)\nsquare\n#We have defined the procedure square \n\n> (square 16)\n256\n> (define (average x y) (/ (+ x y) 2))\naverage\n> \n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"define pi 3.14"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"define (square x) (* x x)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Lambda expressions"),"\nLambda expressions evaluate to ",(0,r.kt)("strong",{parentName:"p"},"anonymous procedures"),"\nTwo equivalent expressions for a plus 4 procedure:\n",(0,r.kt)("inlineCode",{parentName:"p"},"(define (plus4 x) (+ x 4))"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"(define plus4 (lambda x (+ x 4)))")),(0,r.kt)("p",null,"![","[chrome_X1HkJkdgbA.png]","]\nThe ",(0,r.kt)("strong",{parentName:"p"},"cond")," special form behaves as an if-elif-else statements in Python"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scheme"},"> (cond ((> x 10) 'big)\n> (> x 5) 'medium))\n")),(0,r.kt)("p",null,"![","[chrome_6ecR99LzGL.png]","]"),(0,r.kt)("h1",{id:"let-expression"},"Let Expression"),(0,r.kt)("p",null,"The let special form binds symbols to values ",(0,r.kt)("strong",{parentName:"p"},"temporarily"),", just for one expression."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Python"},"a = 3\nb = 2+2\nc = math.sqrt(a*a + b*b)\n# a and b are still bound down here\n")),(0,r.kt)("p",null,"![","[chrome_8BwSa7GGxe.png]","]"),(0,r.kt)("h1",{id:"sierpenskis-triangle"},"Sierpenski's triangle"),(0,r.kt)("p",null,"![","[chrome_IJZMY5hWem.png]","]"),(0,r.kt)("h1",{id:"scheme-lists"},"Scheme Lists"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Scheme")," has ",(0,r.kt)("strong",{parentName:"p"},"lists"),", and lists in Scheme are like the ",(0,r.kt)("strong",{parentName:"p"},"LinkedList")," class in python. "),(0,r.kt)("p",null,"In the late 1950s, computer scientists use confusing names"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"cons"),": Two argument procedure that creates a linked list. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"car"),": Procedure that returns first element of a list."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"cdr"),": Procedure that returns the rest of the list"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"nil"),": The empty list. ")),(0,r.kt)("p",null,"Scheme lists are ",(0,r.kt)("strong",{parentName:"p"},"written in parenthesis")," with ",(0,r.kt)("strong",{parentName:"p"},"elements separated by spaces"),".\n![","[chrome_slSxg6DUGL.png]","]"),(0,r.kt)("h1",{id:"symbolic-programming"},"Symbolic Programming"),(0,r.kt)("p",null,"Symbols normally refer to values; how to refer to symbols?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scheme"},"> (define a 1)\n> (define b 2)\n> (list a b)\n(1 2)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Quotation is used to refer to symbols directly in LISP.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scheme"},"> (list 'a 'b)\n(a b)\n> (list 'a b)\n(a 2)\n")),(0,r.kt)("p",null,"![","[chrome_aLiymWLI94.png]","]"),(0,r.kt)("p",null,"![","[chrome_DbmrR9BJsS.png]","]"),(0,r.kt)("h1",{id:"even-subsets"},"Even Subsets"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Definition:")," a ",(0,r.kt)("em",{parentName:"p"},"non-empty subset")," of a list ",(0,r.kt)("strong",{parentName:"p"},"s")," is a list containing some of the elements of ",(0,r.kt)("strong",{parentName:"p"},"s"),".\n(A ",(0,r.kt)("em",{parentName:"p"},"non-empty subset")," could contain all of the elements of ",(0,r.kt)("strong",{parentName:"p"},"s"),", but not none of them )\n![","[chrome_HgF6zZEIUt.png]","]"),(0,r.kt)("p",null,"![","[chrome_5d7E1RpU41.png]","]\n![","[I7xxw0VeFp.png]","]"),(0,r.kt)("h1",{id:"raise-exception"},"Raise Exception"),(0,r.kt)("p",null,"Python exceptions are raised with a raise statement.\n",(0,r.kt)("inlineCode",{parentName:"p"},"raise <exception>"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"<exception>")," must evaluate to a subclass of BaseException or an instance of one"),(0,r.kt)("p",null,"Exceptions are constructed like any other object.\n![","[chrome_84Sqoalbh5.png]","]"),(0,r.kt)("h1",{id:"try-statements"},"Try Statements"),(0,r.kt)("p",null,"Try statements handles exceptions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"try:\n    <try suite>\nexcept <exception class> as name:\n    <except suite>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Handling Exceptions")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},">>> try:\n        x = 1/0\n    except ZeroDivisionError as e:\n        x = 0   \n")),(0,r.kt)("p",null,"![","[chrome_CLCD7LVwNT.png]","]"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Scheme")," is a programming language that has few rules. "),(0,r.kt)("h1",{id:"programming-languages"},"Programming Languages"),(0,r.kt)("p",null,"A computer typically executes program written in many different programming langauges"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Machine Languages:")," statements are interpreted by the hardware itself"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A fixed set of instructions invoke operations implemented by the circuitry of the central processing unit(CPU)"),(0,r.kt)("li",{parentName:"ul"},"Operations refer to specific hardware memoray addresses; no abstraction mechanisms\n",(0,r.kt)("strong",{parentName:"li"},"Higher level languages")," statements & expressions are interpreted by another program or compiled (translated) into another language."),(0,r.kt)("li",{parentName:"ul"},"Provide means of abstraction such as naming, ufnction defintion, and objects. "),(0,r.kt)("li",{parentName:"ul"},"Abstract away system details to be independent of hardware or operating systems")),(0,r.kt)("h1",{id:"metalinguistic-abstraction"},"Metalinguistic Abstraction"),(0,r.kt)("p",null,"A powerful form of abstraction is to define a new language that is tailored to a particular type of application or problem domain."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type of application:")," Erlang was designed for concurrent programs. It ahs built-in elements for expressing concurrent communication. It is used, for example, to implement chat servers with many simulatenous connections."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Problem Domain")," The MediaWiki markup language was designed for generating static web pages. It ahs built-in elemnets for text formatting and cross-page linking. it is uesed, for example, to create Wikipedia pages."),(0,r.kt)("p",null,"A programming language has:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Syntax"),": the legal statements and expressions in the lagnauge"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Semantics"),": The execution/evaluation rule for those statemnets and expressions\nTo create a new programming langauge, you either need a:"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Specification"),": A document decribin the precise syntax and semantics of the language"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Canonical Implementation"),": An interpreter or complier for the language.")),(0,r.kt)("h2",{id:"part-3-special-forms"},"Part 3: Special Forms"),(0,r.kt)("p",null,"This section will be completed in\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"scheme_forms.py"),"."),(0,r.kt)("p",null,"Logical special forms include\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"if"),",\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"and"),",\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"or"),", and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"cond"),". These expressions are special because not all of their sub-expressions may be evaluated."),(0,r.kt)("p",null,"In Scheme, only\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"#f"),"\xa0is a false value. All other values (including\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"\xa0and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"nil"),") are true values. You can test whether a value is a true or false value using the provided Python functions\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"is_scheme_true"),"\xa0and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"is_scheme_false"),", defined in\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"scheme_utils.py"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Scheme traditionally uses\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"#f"),"\xa0to indicate the false Boolean value. In our interpreter, that is equivalent to\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"\xa0or\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"False"),". Similarly,\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"true"),",\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"True"),", and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"#t"),"\xa0are all equivalent. However,\xa0",(0,r.kt)("strong",{parentName:"p"},"when unlocking tests"),", use\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"#t"),"\xa0and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"#f"),".")),(0,r.kt)("p",null,"To get you started, we've provided an implementation of the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"if"),"\xa0special form in the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"do_if_form"),"\xa0function. Make sure you understand that implementation before starting the following questions."),(0,r.kt)("h1",{id:"the-structure-of-an-interpreter"},"The Structure of an Interpreter"),(0,r.kt)("p",null,"It shares a lot with calculator example\nThere is an ",(0,r.kt)("strong",{parentName:"p"},"Eval")," and an ",(0,r.kt)("strong",{parentName:"p"},"Apply")," function. "),(0,r.kt)("h1",{id:"eval"},(0,r.kt)("strong",{parentName:"h1"},"Eval")),(0,r.kt)("p",null,"Base cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Primitive values (numbers)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Look up values bound to symbols"))),(0,r.kt)("p",null,"Recursive calls:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Eval(operator, operands) of call expressions"),(0,r.kt)("li",{parentName:"ul"},"Apply(procedure, arguments)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Eval(sub-expressions) of special forms"),"\nThis is going to require an environment for symbol lookup.")),(0,r.kt)("h1",{id:"apply"},"Apply"),(0,r.kt)("p",null,"Base cases;"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Built-in primitive procedures\nRecursive calls:"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Eval(body) of user defined procedures"),"\nCreates a new environment each time a user-defined procedure(like a lambda function) is applied ")),(0,r.kt)("h1",{id:"scheme-evaluation"},"Scheme Evaluation"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"scheme_eval")," function dispatches on expression for form:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Symbols are bound to valeus in the current environment"),(0,r.kt)("li",{parentName:"ul"},"Self-evaluating expressions are returned"),(0,r.kt)("li",{parentName:"ul"},"All other legal expressions are represented as Scheme lists, called combinations. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"(if <predicate> <consequent> <alternative>)\n(lambda (<formal-parameters>) <body>)\n(define <name> <expression>)\n(<operator> <operand 0> ... <operand k>)\n(define (demo s) (if (null? s) '(3) )\n")),(0,r.kt)("p",null,"![","[chrome_MZ7cWIlUok.png]","]"),(0,r.kt)("h1",{id:"logical-special-forms"},"Logical Special Forms"),(0,r.kt)("p",null,"Logical forms may only evaluate some sub-expressions."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"If")," expression: ",(0,r.kt)("inlineCode",{parentName:"li"},"if <predicate> <consequent> <alternative>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"And")," and ",(0,r.kt)("strong",{parentName:"li"},"or"),": (",(0,r.kt)("inlineCode",{parentName:"li"},"and <e1> ... <en>"),")     (",(0,r.kt)("inlineCode",{parentName:"li"},"or <e1> ... <en>"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cond")," expression: (",(0,r.kt)("inlineCode",{parentName:"li"},"cond (<p1> <e1>) ... (<pn> <en>)"),")")),(0,r.kt)("p",null,"The value of an ",(0,r.kt)("strong",{parentName:"p"},"if")," expression is the value of a sub-expression."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Evaluate the predicate"),(0,r.kt)("li",{parentName:"ul"},"Choose a sub-expression: ",(0,r.kt)("inlineCode",{parentName:"li"},"<consequent>")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"<alternative>")),(0,r.kt)("li",{parentName:"ul"},"Evaluate that sub-expression in place of the whole expression. ")),(0,r.kt)("h1",{id:"quotation"},"Quotation"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"quote")," special form evaluates to the quoted expression, which is ",(0,r.kt)("strong",{parentName:"p"},"not evaluated")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<expresssion>")," itself is the value of the expression\n",(0,r.kt)("inlineCode",{parentName:"p"},"'<expression>")," is shorthand for (",(0,r.kt)("inlineCode",{parentName:"p"},"quote <expression>"),")"),(0,r.kt)("h1",{id:"define-expressions"},"Define Expressions"),(0,r.kt)("p",null,"Define binds a symbol to a value in the first frame of the current environment:\n",(0,r.kt)("inlineCode",{parentName:"p"},"(define <name> <expression>)"),"\nWe define the following procedural steps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Evaluate the ",(0,r.kt)("inlineCode",{parentName:"li"},"<expression>")),(0,r.kt)("li",{parentName:"ol"},"Bind ",(0,r.kt)("inlineCode",{parentName:"li"},"<name>")," to its value in the current frame.\n",(0,r.kt)("strong",{parentName:"li"},"Procedure definition:")," ")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Shorthand of define with a lambda expression\n",(0,r.kt)("inlineCode",{parentName:"li"},"(define (<name> <formal parameters>) <body>)"),"\nThis above is equivalent to:\n",(0,r.kt)("inlineCode",{parentName:"li"},"(define <name> (lambda (<formal parameters>) <body>))"))),(0,r.kt)("h1",{id:"applying-user-defined-procedures"},"Applying User-defined procedures"),(0,r.kt)("p",null,"To apply user-defined procedure, we must create a new frame bound to argument values, whose parent is the ",(0,r.kt)("strong",{parentName:"p"},"env")," of the procedure."),(0,r.kt)("p",null,"Evaluate the body of the procedure in the environemnt that starts with this new frame."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scheme"},"(define (demo s) (if (null? s) '(3) (cons (car s) (demo (cdr s))) (demo (list 1 2))\n")))}u.isMDXComponent=!0}}]);