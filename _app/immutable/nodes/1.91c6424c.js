import{s as S,f as _,l as d,a as x,g as f,h as g,m as h,d as l,c as H,i as m,H as v,n as E,E as $,B as q}from"../chunks/scheduler.d28dbe50.js";import{S as y,i as B}from"../chunks/index.ab7f3a0a.js";import{d as C}from"../chunks/singletons.b9a527b1.js";const P=()=>{const s=C;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},j={subscribe(s){return P().page.subscribe(s)}};function k(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",u;return{c(){t=_("h1"),o=d(r),n=x(),i=_("p"),u=d(c)},l(e){t=f(e,"H1",{});var a=g(t);o=h(a,r),a.forEach(l),n=H(e),i=f(e,"P",{});var p=g(i);u=h(p,c),p.forEach(l)},m(e,a){m(e,t,a),v(t,o),m(e,n,a),m(e,i,a),v(i,u)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&E(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&E(u,c)},i:$,o:$,d(e){e&&(l(t),l(n),l(i))}}}function w(s,t,r){let o;return q(s,j,n=>r(0,o=n)),[o]}let F=class extends y{constructor(t){super(),B(this,t,w,k,S,{})}};export{F as component};
