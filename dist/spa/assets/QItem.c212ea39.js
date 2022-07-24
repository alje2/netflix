import{c as v,a as k,b as I}from"./render.5c284163.js";import{c as a,h as r,r as f,O as E,s as Q,g as R}from"./index.35b508a4.js";import{u as S,a as K}from"./use-router-link.1e543269.js";var N=v({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:n}){const l=a(()=>parseInt(e.lines,10)),i=a(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(l.value===1?" ellipsis":"")),c=a(()=>e.lines!==void 0&&l.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":l.value}:null);return()=>r("div",{style:c.value,class:i.value},k(n.default))}}),T=v({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:n}){const l=a(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>r("div",{class:l.value},k(n.default))}});const P={dark:{type:Boolean,default:null}};function $(e,n){return a(()=>e.dark===null?n.dark.isActive:e.dark)}var F=v({name:"QItem",props:{...P,...S,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:n,emit:l}){const{proxy:{$q:i}}=R(),c=$(e,i),{hasRouterLink:q,hasLink:d,linkProps:_,linkClass:h,linkTag:y,navigateToRouterLink:g}=K(),s=f(null),o=f(null),m=a(()=>e.clickable===!0||d.value===!0||e.tag==="label"),u=a(()=>e.disable!==!0&&m.value===!0),B=a(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(c.value===!0?" q-item--dark":"")+(d.value===!0&&e.active===null?h.value:e.active===!0?`${e.activeClass!==void 0?` ${e.activeClass}`:""} q-item--active`:"")+(e.disable===!0?" disabled":"")+(u.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),L=a(()=>{if(e.insetLevel===void 0)return null;const t=i.lang.rtl===!0?"Right":"Left";return{["padding"+t]:16+e.insetLevel*56+"px"}});function x(t){u.value===!0&&(o.value!==null&&(t.qKeyEvent!==!0&&document.activeElement===s.value?o.value.focus():document.activeElement===o.value&&s.value.focus()),q.value===!0&&g(t),l("click",t))}function C(t){if(u.value===!0&&E(t,13)===!0){Q(t),t.qKeyEvent=!0;const b=new MouseEvent("click",t);b.qKeyEvent=!0,s.value.dispatchEvent(b)}l("keyup",t)}function w(){const t=I(n.default,[]);return u.value===!0&&t.unshift(r("div",{class:"q-focus-helper",tabindex:-1,ref:o})),t}return()=>{const t={ref:s,class:B.value,style:L.value,onClick:x,onKeyup:C};return u.value===!0?(t.tabindex=e.tabindex||"0",Object.assign(t,_.value)):m.value===!0&&(t["aria-disabled"]="true"),r(y.value,t,w())}}});export{F as Q,$ as a,T as b,N as c,P as u};
