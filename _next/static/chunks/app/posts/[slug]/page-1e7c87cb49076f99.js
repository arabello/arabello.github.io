(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[333],{6993:function(e,t,s){Promise.resolve().then(s.bind(s,2722))},2722:function(e,t,s){"use strict";s.d(t,{Post:function(){return p}});var n=s(7437),i=s(2265),l=s(6648),a=s(179);s(5421);var r=s(231),c=s.n(r);let o=e=>(0,n.jsx)(c(),{...e,children:(0,n.jsx)(l.default,{...e})}),d=e=>(0,n.jsxs)(a.Z,{className:"d-flex flex-row align-items-center gap-3",children:[e.actions.left&&(0,n.jsx)("div",{className:"text-center",children:(0,n.jsx)(o,{...e.actions.left,width:24,height:24})}),(0,n.jsxs)("div",{className:"d-flex flex-column flex-grow-1",children:[(0,n.jsx)("div",{className:"fs-4 fw-medium text-primary flex-grow-1",children:e.heading}),e.subheading&&(0,n.jsx)("div",{className:"fs-6 fw-light text-muted preserveBreaklineTabs",children:e.subheading})]}),(0,n.jsx)("div",{className:"text-center",children:(0,n.jsx)(o,{...e.actions.right,width:24,height:24})})]}),u=()=>(0,n.jsxs)("a",{type:"button",className:"btn btn-outline-light text-reset border-0 align-items-center d-flex gap-2 justify-content-center",href:"#mailgo","data-address":"matteo.pelle.pellegrino","data-domain":"gmail.com",children:[(0,n.jsx)(l.default,{src:"/assets/icons/mail.svg",width:24,height:24,alt:"email icon"}),(0,n.jsx)("span",{children:"Drop me a line"})]}),h=e=>(0,n.jsxs)(a.Z,{className:"d-flex flex-row align-items-center justify-content-between",children:[(0,n.jsx)("span",{children:e.caption}),(0,n.jsx)(u,{})]});var f=s(9233);function m(e){let{children:t}=e;return(0,n.jsx)("div",{className:"container-centered d-flex flex-column p-2 p-md-3 pt-md-4",children:t})}function g(e){let{children:t}=e;return(0,n.jsxs)("div",{className:"min-vh-100",children:[(0,n.jsx)("div",{className:"bg-gradient-custom"}),t]})}function x(e){let{src:t}=e,[{y:s},a]=function(){let[e,t]=i.useState({x:null,y:null}),s=i.useCallback((...e)=>{if("object"==typeof e[0])window.scrollTo(e[0]);else if("number"==typeof e[0]&&"number"==typeof e[1])window.scrollTo(e[0],e[1]);else throw Error("Invalid arguments passed to scrollTo. See here for more info. https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo")},[]);return i.useLayoutEffect(()=>{let e=()=>{t({x:window.scrollX,y:window.scrollY})};return e(),window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),[e,s]}();return(0,n.jsx)("div",{style:{position:"relative",height:280,width:"100%"},className:"mt-4 mt-md-0",children:(0,n.jsx)(l.default,{src:t,alt:"post header image",fill:!0,style:{objectPosition:"center ".concat(60-(null!=s?s:0)/30,"%")},className:"post-header-image"})})}function p(e){let{post:t}=e;return t?(0,n.jsxs)(g,{children:[(0,n.jsx)(m,{children:(0,n.jsx)(d,{heading:t.title,subheading:"Published 	".concat(t.publishDate,"\nUpdated 	").concat(t.lastUpdate),actions:{right:{src:"/assets/icons/home.svg",alt:"home icon link",href:"/"},left:{src:"/assets/icons/chevron-left.svg",alt:"back icon link",href:"/posts"}}})}),(0,n.jsx)(x,{src:"/assets/posts/".concat(t.slug,".webp")}),(0,n.jsxs)(m,{children:[(0,n.jsx)(a.Z,{children:(0,n.jsx)(f.Markdown,{content:t.content})}),(0,n.jsx)(h,{caption:"Any feedback or open to discuss?"})]})]}):(0,n.jsx)("div",{children:"Post not found"})}},179:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});var n=s(7437);let i=e=>(0,n.jsx)("div",{className:"card shadow-sm border-0 rounded-3 mt-4 p-3 p-md-4 fs-6 fw-light ".concat(e.className),children:e.children})},5421:function(e,t,s){"use strict";s.r(t),s.d(t,{ContactsCard:function(){return o}});var n=s(7437),i=s(8710),l=s.n(i),a=s(179),r=s(6648),c=s(2265);let o=()=>((0,c.useEffect)(()=>{l()({actions:{yahoo:!1,gmail:!1,outlook:!1},showFooter:!1})},[]),(0,n.jsxs)(a.Z,{children:[(0,n.jsx)("div",{className:"text-center",children:"Let's keep in touch \uD83D\uDC47"}),(0,n.jsxs)("a",{type:"button",className:"btn btn-outline-light text-reset border-0 align-items-center d-flex gap-2 justify-content-center mt-2",href:"/assets/matteo-pellegrino-resume.pdf",target:"blank",children:[(0,n.jsx)(r.default,{src:"/assets/icons/file-text.svg",width:24,height:24,alt:"R\xe9sum\xe9 icon"}),(0,n.jsx)("span",{children:"R\xe9sum\xe9"})]}),(0,n.jsxs)("a",{type:"button",className:"btn btn-outline-light text-reset border-0 align-items-center d-flex gap-2 justify-content-center mt-2",href:"#mailgo","data-address":"matteo.pelle.pellegrino","data-domain":"gmail.com",children:[(0,n.jsx)(r.default,{src:"/assets/icons/mail.svg",width:24,height:24,alt:"email icon"}),(0,n.jsx)("span",{children:"Drop me a line"})]}),(0,n.jsxs)("a",{type:"button",className:"btn btn-outline-light text-reset border-0 align-items-center d-flex gap-2 justify-content-center mt-2",href:"https://www.linkedin.com/in/mttpll",target:"blank",children:[(0,n.jsx)(r.default,{src:"/assets/icons/linkedin.svg",width:24,height:24,alt:"linkedin icon"}),(0,n.jsx)("span",{children:"Linkedin"})]})]}))},9233:function(e,t,s){"use strict";s.r(t),s.d(t,{Markdown:function(){return m}});var n=s(7437),i=s(8303),l=s.n(i);s(8610);var a=s(5300),r=s(3237),c=s(138),o=s(5064),d=s(2265);a.Z.registerLanguage("typescript",r.Z),a.Z.registerLanguage("plaintext",c.Z),a.Z.registerLanguage("diff",o.Z),a.Z.configure({languages:["typescript","plaintext","diff"]});let u={},h=Object.keys(u).map(e=>({type:"output",regex:RegExp("<".concat(e,"(.*)>"),"g"),replace:"<".concat(e,' class="').concat(u[e],'" $1>')})),f={type:"output",regex:/\$\^\{([^\s]+)\}\$/g,replace:"<sup>$1</sup>"},m=e=>{let t=new(l()).Converter({extensions:[...h,f]}).makeHtml(e.content);return(0,d.useEffect)(()=>a.Z.highlightAll(),[]),(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:t}})}}},function(e){e.O(0,[658,231,698,971,582,744],function(){return e(e.s=6993)}),_N_E=e.O()}]);