import{a as c,p as s}from"./chunk-PVWAREVJ-DyyNGt94.js";import{c as n}from"./button-BCkynWF1.js";/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),g=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,e,a)=>a?a.toUpperCase():e.toLowerCase()),l=r=>{const t=g(r);return t.charAt(0).toUpperCase()+t.slice(1)},u=(...r)=>r.filter((t,e,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===e).join(" ").trim(),h=r=>{for(const t in r)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var w={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=c.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:e=2,absoluteStrokeWidth:a,className:d="",children:o,iconNode:m,...i},f)=>c.createElement("svg",{ref:f,...w,width:t,height:t,stroke:r,strokeWidth:a?Number(e)*24/Number(t):e,className:u("lucide",d),...!o&&!h(i)&&{"aria-hidden":"true"},...i},[...m.map(([p,x])=>c.createElement(p,x)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=(r,t)=>{const e=c.forwardRef(({className:a,...d},o)=>c.createElement(b,{ref:o,iconNode:t,className:u(`lucide-${C(l(r))}`,`lucide-${r}`,a),...d}));return e.displayName=l(r),e};/**
 * @license lucide-react v0.541.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],N=v("mail",j);function k({className:r,...t}){return s.jsx("div",{"data-slot":"card",className:n("flex flex-col gap-6 py-6 bg-card text-card-foreground rounded-lg border border-accent-foreground/10 shadow-sm hover:shadow-xl",r),...t})}function L({className:r,...t}){return s.jsx("div",{"data-slot":"card-header",className:n("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",r),...t})}function E({className:r,...t}){return s.jsx("div",{"data-slot":"card-title",className:n("leading-none font-semibold",r),...t})}function _({className:r,...t}){return s.jsx("div",{"data-slot":"card-description",className:n("text-muted-foreground text-sm",r),...t})}function $({className:r,...t}){return s.jsx("div",{"data-slot":"card-action",className:n("col-start-2 row-span-2 row-start-1 self-start justify-self-end",r),...t})}function R({className:r,...t}){return s.jsx("div",{"data-slot":"card-content",className:n("px-6",r),...t})}export{k as C,N as M,L as a,E as b,v as c,_ as d,$ as e,R as f};
