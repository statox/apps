import{s as le,f as $,g as C,h as I,d as v,j as V,i as N,A as z,F as rt,a as M,e as ee,B as te,c as x,D as w,C as ve,E as ot,I as Z,l as q,m as X,R as De,S as ue,P as Se,n as st,T as Ne}from"../chunks/scheduler.062eb097.js";import{S as me,i as _e,b as ne,d as re,m as oe,a as j,t as F,e as se,g as Te,c as we}from"../chunks/index.7dd5eebf.js";import{e as W}from"../chunks/each.a3b5a397.js";import{P as it}from"../chunks/P5.ef98b533.js";const U=["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"],$e=o=>{if(o<1||o>7)throw new Error(`Unkown degree ${o}`);return["I","II","III","IV","V","VI","VII"][o-1]};function at(o){let e,n,t;return n=new it({props:{sketch:o[0]}}),{c(){e=$("div"),ne(n.$$.fragment),this.h()},l(l){e=C(l,"DIV",{class:!0});var r=I(e);re(n.$$.fragment,r),r.forEach(v),this.h()},h(){V(e,"class","d-flex justify-content-center")},m(l,r){N(l,e,r),oe(n,e,null),t=!0},p:z,i(l){t||(j(n.$$.fragment,l),t=!0)},o(l){F(n.$$.fragment,l),t=!1},d(l){l&&v(e),se(n)}}}const ye=14;function ct(o,e,n){let t,{labelMode:l="name"}=e,{notesToDisplay:r}=e;const c=["C","D","E","F","G","A","B"],g=["C#","D#","F#","G#","A#"],_=h=>{const a=[80,70,60,150],y=[80,70,60],d=h.width/ye;for(let b=0;b<ye;b++){const p=c[b%c.length];h.strokeWeight(1),h.stroke(a),h.noFill(),h.rect(d*b,0,d,h.height);const f=p+"#";g.includes(f)&&(h.fill(y),h.rect(d*b+2*d/3,0,d/2,h.height*.65))}},T=(h,a,y)=>{if(y==="name")return a;const d=h.indexOf(a);if(d===-1)throw new Error("note not in scale");return $e(d+1)},S=h=>{const a=h.width/ye;for(let y=0;y<ye;y++){const d=c[y%c.length],b=r.indexOf(d);if(b>=0){b===0?h.fill([250,80,80]):h.fill("black");const u=a*y+a/2,s=h.height*.8;h.circle(u,s,20),h.noStroke(),h.fill("white");const m=T(r,d,l);h.text(m,u-h.textWidth(m)/2,s+h.textSize()/2)}const p=d+"#",f=r.indexOf(p);if(f>=0){f===0?h.fill([250,80,80]):h.fill("black");const u=a*y+a,s=h.height*.5;h.circle(u,s,20),h.noStroke(),h.fill("white");const m=T(r,p,l);h.text(m,u-h.textWidth(m)/2,s+h.textSize()/2)}}},B=h=>{h.setup=()=>{n(3,t=h),h.createCanvas(900,300),h.textStyle(h.BOLD)},h.draw=()=>{h.background([200,190,170]),_(h),S(h),h.noLoop()}};return rt(()=>{t==null||t.remove()}),o.$$set=h=>{"labelMode"in h&&n(1,l=h.labelMode),"notesToDisplay"in h&&n(2,r=h.notesToDisplay)},o.$$.update=()=>{o.$$.dirty&14&&(r||l)&&(t==null||t.draw())},[B,l,r,t]}class ft extends me{constructor(e){super(),_e(this,e,ct,at,le,{labelMode:1,notesToDisplay:2})}}function ht(o){let e,n,t;return n=new it({props:{sketch:o[0]}}),{c(){e=$("div"),ne(n.$$.fragment),this.h()},l(l){e=C(l,"DIV",{class:!0});var r=I(e);re(n.$$.fragment,r),r.forEach(v),this.h()},h(){V(e,"class","d-flex justify-content-center")},m(l,r){N(l,e,r),oe(n,e,null),t=!0},p:z,i(l){t||(j(n.$$.fragment,l),t=!0)},o(l){F(n.$$.fragment,l),t=!1},d(l){l&&v(e),se(n)}}}const Pe=15,ge=30;function dt(o,e,n){let t,{labelMode:l="name"}=e,{notesToDisplay:r}=e;const c=["E","A","D","G","B","E"],g=c.map(a=>{const y=U.indexOf(a);if(y===-1)throw new Error(`Base ${a} not found`);const d=[a];for(let b=1;b<Pe;b++){const p=U[(y+b)%U.length];d.push(p)}return d}),_=a=>{const y=[80,70,60,150],d=a.height/6;for(let u=0;u<g.length;u++){const s=c[u],m=d*u+d/2;a.strokeWeight(1),a.stroke(y),a.noFill(),a.line(ge,m,a.width,m),a.noStroke(),a.fill(y),a.text(s,5,a.height-m+a.textSize()/2)}a.strokeWeight(5),a.stroke(y),a.noFill(),a.line(ge,d/2,ge,a.height-d/2),a.strokeWeight(1);const b=a.width/g[0].length;for(let u=1;u<Pe;u++){const s=ge+b*u;a.line(s,d/2,s,a.height-d/2)}const p=[3,5,7,9,15];for(const u of p){let{x:s,y:m}=B({string:2,fret:u});m-=d/2,a.fill(y),a.circle(s,m,10)}const f=[1,3];for(const u of f){let{x:s,y:m}=B({string:u,fret:12});m-=d/2,a.fill(y),a.circle(s,m,10)}},T=(a,y,d)=>{if(d==="name")return y;const b=a.indexOf(y);if(b===-1)throw new Error("note not in scale");return $e(b+1)},S=a=>{for(let y=0;y<6;y++){const d=g[y];for(let b=0;b<d.length;b++){const p=d[b];if(!r.includes(p))continue;const f={string:y,fret:b},{x:u,y:s}=B(f);r.indexOf(p)===0?a.fill([250,80,80]):a.fill("black"),a.circle(u,s,20),a.noStroke(),a.fill("white");const m=T(r,p,l);a.text(m,u-a.textWidth(m)/2,s+a.textSize()/2)}}},B=a=>{const{string:y,fret:d}=a,b=t.height/6,p=b*(5-y)+b/2;if(d===0)return{x:ge,y:p};const f=t.width/g[0].length;return{x:ge+f*(d-1)+f*.5,y:p}},h=a=>{a.setup=()=>{n(3,t=a),a.createCanvas(900,300),a.textStyle(a.BOLD)},a.draw=()=>{a.background([200,190,170]),_(a),S(a),a.noLoop()}};return rt(()=>{t==null||t.remove()}),o.$$set=a=>{"labelMode"in a&&n(1,l=a.labelMode),"notesToDisplay"in a&&n(2,r=a.notesToDisplay)},o.$$.update=()=>{o.$$.dirty&14&&(r||l)&&(t==null||t.draw())},[h,l,r,t]}class ut extends me{constructor(e){super(),_e(this,e,dt,ht,le,{labelMode:1,notesToDisplay:2})}}function Re(o){let e,n;return e=new ut({props:{notesToDisplay:o[0],labelMode:o[1]}}),{c(){ne(e.$$.fragment)},l(t){re(e.$$.fragment,t)},m(t,l){oe(e,t,l),n=!0},p(t,l){const r={};l&1&&(r.notesToDisplay=t[0]),l&2&&(r.labelMode=t[1]),e.$set(r)},i(t){n||(j(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){se(e,t)}}}function He(o){let e,n;return e=new ft({props:{notesToDisplay:o[0],labelMode:o[1]}}),{c(){ne(e.$$.fragment)},l(t){re(e.$$.fragment,t)},m(t,l){oe(e,t,l),n=!0},p(t,l){const r={};l&1&&(r.notesToDisplay=t[0]),l&2&&(r.labelMode=t[1]),e.$set(r)},i(t){n||(j(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){se(e,t)}}}function gt(o){let e,n="Instrument",t,l,r,c="C / IV",g,_,T='<i class="fas fa-guitar"></i> / <i class="fas fa-keyboard"></i>',S,B=["neck","both"].includes(o[3][o[2]]),h,a=["keyboard","both"].includes(o[3][o[2]]),y,d,b,p,f=B&&Re(o),u=a&&He(o);return{c(){e=$("h3"),e.textContent=n,t=M(),l=$("div"),r=$("button"),r.textContent=c,g=M(),_=$("button"),_.innerHTML=T,S=M(),f&&f.c(),h=M(),u&&u.c(),y=ee()},l(s){e=C(s,"H3",{"data-svelte-h":!0}),te(e)!=="svelte-r64p2h"&&(e.textContent=n),t=x(s),l=C(s,"DIV",{});var m=I(l);r=C(m,"BUTTON",{"data-svelte-h":!0}),te(r)!=="svelte-16iriab"&&(r.textContent=c),g=x(m),_=C(m,"BUTTON",{"data-svelte-h":!0}),te(_)!=="svelte-1rhgwvu"&&(_.innerHTML=T),m.forEach(v),S=x(s),f&&f.l(s),h=x(s),u&&u.l(s),y=ee()},m(s,m){N(s,e,m),N(s,t,m),N(s,l,m),w(l,r),w(l,g),w(l,_),N(s,S,m),f&&f.m(s,m),N(s,h,m),u&&u.m(s,m),N(s,y,m),d=!0,b||(p=[ve(r,"click",o[4]),ve(_,"click",o[5])],b=!0)},p(s,[m]){m&4&&(B=["neck","both"].includes(s[3][s[2]])),B?f?(f.p(s,m),m&4&&j(f,1)):(f=Re(s),f.c(),j(f,1),f.m(h.parentNode,h)):f&&(Te(),F(f,1,1,()=>{f=null}),we()),m&4&&(a=["keyboard","both"].includes(s[3][s[2]])),a?u?(u.p(s,m),m&4&&j(u,1)):(u=He(s),u.c(),j(u,1),u.m(y.parentNode,y)):u&&(Te(),F(u,1,1,()=>{u=null}),we())},i(s){d||(j(f),j(u),d=!0)},o(s){F(f),F(u),d=!1},d(s){s&&(v(e),v(t),v(l),v(S),v(h),v(y)),f&&f.d(s),u&&u.d(s),b=!1,ot(p)}}}function mt(o,e,n){let{notesToDisplay:t}=e,l="name";const r=["neck","keyboard","both"];let c=0;const g=()=>n(1,l=l==="name"?"degree":"name"),_=()=>n(2,c=(c+1)%r.length);return o.$$set=T=>{"notesToDisplay"in T&&n(0,t=T.notesToDisplay)},[t,l,c,r,g,_]}class _t extends me{constructor(e){super(),_e(this,e,mt,gt,le,{notesToDisplay:0})}}const We=[{name:"Axis progression",examples:["Let it be","Take on me","Someone like you","Don't step believin'","Can you feel the love tonight","Let it go"],chords:[{degree:1},{degree:5},{degree:6,minor:!0},{degree:4}]},{name:"Other axis progression",examples:["Numb - Linkin Park","Kids - MGMT","Africa - Toto","Rivers flow in you (piano thingy)","Complicated - Avril Lavigne","Grenade","San Francisco","Save tonight"],chords:[{degree:6,minor:!0},{degree:4},{degree:1},{degree:5}]},{name:"Third axis progression",examples:["What's my age again?","Umbrella - Rihanna","Dragosta Din Tei","Boulevard of broken dreams (chorus)","Alejandro - Lady Gaga"],chords:[{degree:4},{degree:1},{degree:5},{degree:6,minor:!0}]},{name:"Andalusian cadence",examples:["Hit the road Jack","Good vibrations - The Beach boys","Happy together","Vanina"],chords:[{degree:1,minor:!0},{degree:7,flat:!0},{degree:6,flat:!0},{degree:5}]},{name:"Aeolian vamp",examples:["Rolling in the deep","All along the watchtower","Stairway to heaven","My hear will go on","Somebody that I used to know"],chords:[{degree:1,minor:!0},{degree:7,flat:!0},{degree:6,flat:!0},{degree:7,flat:!0}]},{name:"Doo-Woop change",examples:["I will always love you","Crocodile rock","Let's twist again","Baby - Justin Bieber"],chords:[{degree:1},{degree:6,minor:!0},{degree:4},{degree:5}]},{name:"Major scale vamp",examples:["Your body is a wonderland","All the small things - Blink 182"],chords:[{degree:1},{degree:5},{degree:4},{degree:5}]},{name:"Mixolydyan vamp",examples:["Hey Jude (Lalalalaa)","Sympathy for the devil","Sweet child o' mine","Royals - Lorde","Sweet home Alabama"],chords:[{degree:1},{degree:7,flat:!0},{degree:4},{degree:5}]},{name:"pachelbel's cannon",chords:[{degree:1},{degree:5},{degree:6,minor:!0},{degree:3,minor:!0},{degree:4},{degree:1},{degree:4},{degree:5}]},{name:"Plagal cascade",examples:["Wonderwall","Boulevard of broken dreams (couplet)","Mad world","Pumped up kids","Radioactive - Imagine Dragons"],chords:[{degree:1,minor:!0},{degree:3,flat:!0},{degree:7,flat:!0},{degree:4}]},{name:`"Can't stop" progression`,examples:["Can't stop","Cant't hold us - Mackelmore & Ryan Lewis"],chords:[{degree:1,minor:!0},{degree:7,flat:!0},{degree:5,minor:!0},{degree:6,flat:!0}]},{name:'"Closing time" progression',examples:["Closing time - Semisonic","SOS - ABBA","Believe - Cher","All star (Shrek)"],chords:[{degree:1},{degree:5},{degree:2,minor:!0},{degree:4}]},{name:'"More than a feeling" progression',examples:["More than a feeling","Mr Brightside - The Killers"],chords:[{degree:1},{degree:4},{degree:6,minor:!0},{degree:5}]},{name:"Classic blues slow change",chords:[{degree:1},{degree:1},{degree:1},{degree:1},{degree:4},{degree:4},{degree:1},{degree:1},{degree:5},{degree:4},{degree:1},{degree:5}]},{name:"Classic blues quick change",chords:[{degree:1},{degree:4},{degree:1},{degree:1},{degree:4},{degree:4},{degree:1},{degree:1},{degree:5},{degree:4},{degree:1},{degree:5}]},{name:"Classic rock",chords:[{degree:1},{degree:4},{degree:1},{degree:1},{degree:4},{degree:4},{degree:1},{degree:1},{degree:5},{degree:5},{degree:1},{degree:1}]}];function Fe(o,e,n){const t=o.slice();return t[3]=e[n],t}function Ge(o,e,n){const t=o.slice();return t[6]=e[n],t}function Ke(o,e,n){const t=o.slice();return t[6]=e[n],t}function vt(o){let e,n,t="Examples:",l,r=o[3].examples.join(", ")+"",c;return{c(){e=$("span"),n=$("b"),n.textContent=t,l=M(),c=q(r)},l(g){e=C(g,"SPAN",{});var _=I(e);n=C(_,"B",{"data-svelte-h":!0}),te(n)!=="svelte-1jvpsk3"&&(n.textContent=t),l=x(_),c=X(_,r),_.forEach(v)},m(g,_){N(g,e,_),w(e,n),w(e,l),w(e,c)},d(g){g&&v(e)}}}function Ve(o){let e,n=o[0](o[6])+"",t;return{c(){e=$("th"),t=q(n),this.h()},l(l){e=C(l,"TH",{class:!0});var r=I(e);t=X(r,n),r.forEach(v),this.h()},h(){V(e,"class","svelte-gg3pfu")},m(l,r){N(l,e,r),w(e,t)},p:z,d(l){l&&v(e)}}}function ze(o){let e,n=o[1](o[6])+"",t;return{c(){e=$("td"),t=q(n),this.h()},l(l){e=C(l,"TD",{class:!0});var r=I(e);t=X(r,n),r.forEach(v),this.h()},h(){V(e,"class","svelte-gg3pfu")},m(l,r){N(l,e,r),w(e,t)},p:z,d(l){l&&v(e)}}}function Ue(o){let e,n,t=o[3].name+"",l,r,c,g,_,T,S,B,h,a=o[3].examples&&vt(o),y=W(o[3].chords),d=[];for(let f=0;f<y.length;f+=1)d[f]=Ve(Ke(o,y,f));let b=W(o[3].chords),p=[];for(let f=0;f<b.length;f+=1)p[f]=ze(Ge(o,b,f));return{c(){e=$("div"),n=$("h4"),l=q(t),r=M(),a&&a.c(),c=M(),g=$("table"),_=$("tr");for(let f=0;f<d.length;f+=1)d[f].c();T=M(),S=$("tr");for(let f=0;f<p.length;f+=1)p[f].c();B=M(),h=$("br")},l(f){e=C(f,"DIV",{});var u=I(e);n=C(u,"H4",{});var s=I(n);l=X(s,t),s.forEach(v),r=x(u),a&&a.l(u),c=x(u),g=C(u,"TABLE",{});var m=I(g);_=C(m,"TR",{});var ie=I(_);for(let K=0;K<d.length;K+=1)d[K].l(ie);ie.forEach(v),T=x(m),S=C(m,"TR",{});var J=I(S);for(let K=0;K<p.length;K+=1)p[K].l(J);J.forEach(v),m.forEach(v),u.forEach(v),B=x(f),h=C(f,"BR",{})},m(f,u){N(f,e,u),w(e,n),w(n,l),w(e,r),a&&a.m(e,null),w(e,c),w(e,g),w(g,_);for(let s=0;s<d.length;s+=1)d[s]&&d[s].m(_,null);w(g,T),w(g,S);for(let s=0;s<p.length;s+=1)p[s]&&p[s].m(S,null);N(f,B,u),N(f,h,u)},p(f,u){if(u&1){y=W(f[3].chords);let s;for(s=0;s<y.length;s+=1){const m=Ke(f,y,s);d[s]?d[s].p(m,u):(d[s]=Ve(m),d[s].c(),d[s].m(_,null))}for(;s<d.length;s+=1)d[s].d(1);d.length=y.length}if(u&2){b=W(f[3].chords);let s;for(s=0;s<b.length;s+=1){const m=Ge(f,b,s);p[s]?p[s].p(m,u):(p[s]=ze(m),p[s].c(),p[s].m(S,null))}for(;s<p.length;s+=1)p[s].d(1);p.length=b.length}},d(f){f&&(v(e),v(B),v(h)),a&&a.d(),Z(d,f),Z(p,f)}}}function bt(o){let e,n="Progressions",t,l,r=W(We),c=[];for(let g=0;g<r.length;g+=1)c[g]=Ue(Fe(o,r,g));return{c(){e=$("h3"),e.textContent=n,t=M();for(let g=0;g<c.length;g+=1)c[g].c();l=ee()},l(g){e=C(g,"H3",{"data-svelte-h":!0}),te(e)!=="svelte-xukbl8"&&(e.textContent=n),t=x(g);for(let _=0;_<c.length;_+=1)c[_].l(g);l=ee()},m(g,_){N(g,e,_),N(g,t,_);for(let T=0;T<c.length;T+=1)c[T]&&c[T].m(g,_);N(g,l,_)},p(g,[_]){if(_&3){r=W(We);let T;for(T=0;T<r.length;T+=1){const S=Fe(g,r,T);c[T]?c[T].p(S,_):(c[T]=Ue(S),c[T].c(),c[T].m(l.parentNode,l))}for(;T<c.length;T+=1)c[T].d(1);c.length=r.length}},i:z,o:z,d(g){g&&(v(e),v(t),v(l)),Z(c,g)}}}function kt(o,e,n){let{scaleNotes:t=[]}=e;const l=c=>{let g=$e(c.degree);return c.minor&&(g=g.toLowerCase()),c.flat&&(g="b"+g),g},r=c=>{const g=t[c.degree-1];let _=U.indexOf(g);c.flat&&(_--,_===-1&&(_=U.length-1));let T=U[_];return c.minor&&(T+="m"),T};return o.$$set=c=>{"scaleNotes"in c&&n(2,t=c.scaleNotes)},[l,r,t]}class pt extends me{constructor(e){super(),_e(this,e,kt,bt,le,{scaleNotes:2})}}function Je(o,e,n){const t=o.slice();t[12]=e[n],t[15]=n;const l=t[1].chords[t[15]];return t[13]=l,t}function Ye(o,e,n){const t=o.slice();return t[16]=e[n],t[15]=n,t}function qe(o,e,n){const t=o.slice();return t[2]=e[n],t}function Xe(o,e,n){const t=o.slice();return t[1]=e[n],t}function yt(o,e,n){const t=o.slice();return t[12]=e[n],t}function Tt(o){let e,n,t;return{c(){e=$("option"),n=q(o[12]),t=M(),this.h()},l(l){e=C(l,"OPTION",{});var r=I(e);n=X(r,o[12]),t=x(r),r.forEach(v),this.h()},h(){e.__value=o[12],Se(e,e.__value)},m(l,r){N(l,e,r),w(e,n),w(e,t)},p:z,d(l){l&&v(e)}}}function Qe(o){let e,n=o[1].name+"",t,l;return{c(){e=$("option"),t=q(n),l=M(),this.h()},l(r){e=C(r,"OPTION",{});var c=I(e);t=X(c,n),l=x(c),c.forEach(v),this.h()},h(){e.__value=o[1],Se(e,e.__value)},m(r,c){N(r,e,c),w(e,t),w(e,l)},p:z,d(r){r&&v(e)}}}function Ze(o){let e,n=o[2].name+"",t,l;return{c(){e=$("option"),t=q(n),l=M(),this.h()},l(r){e=C(r,"OPTION",{});var c=I(e);t=X(c,n),l=x(c),c.forEach(v),this.h()},h(){e.__value=o[2],Se(e,e.__value)},m(r,c){N(r,e,c),w(e,t),w(e,l)},p:z,d(r){r&&v(e)}}}function et(o){let e,n=o[6](o[15]+1,o[16])+"",t;return{c(){e=$("th"),t=q(n),this.h()},l(l){e=C(l,"TH",{class:!0});var r=I(e);t=X(r,n),r.forEach(v),this.h()},h(){V(e,"class","svelte-gg3pfu")},m(l,r){N(l,e,r),w(e,t)},p(l,r){r&2&&n!==(n=l[6](l[15]+1,l[16])+"")&&st(t,n)},d(l){l&&v(e)}}}function tt(o){let e,n=o[7](o[12],o[13])+"",t;return{c(){e=$("td"),t=q(n),this.h()},l(l){e=C(l,"TD",{class:!0});var r=I(e);t=X(r,n),r.forEach(v),this.h()},h(){V(e,"class","svelte-gg3pfu")},m(l,r){N(l,e,r),w(e,t)},p(l,r){r&10&&n!==(n=l[7](l[12],l[13])+"")&&st(t,n)},d(l){l&&v(e)}}}function lt(o){let e=o[3],n,t,l=nt(o);return{c(){l.c(),n=ee()},l(r){l.l(r),n=ee()},m(r,c){l.m(r,c),N(r,n,c),t=!0},p(r,c){c&8&&le(e,e=r[3])?(Te(),F(l,1,1,z),we(),l=nt(r),l.c(),j(l,1),l.m(n.parentNode,n)):l.p(r,c)},i(r){t||(j(l),t=!0)},o(r){F(l),t=!1},d(r){r&&v(n),l.d(r)}}}function nt(o){let e,n;return e=new pt({props:{scaleNotes:o[3]}}),{c(){ne(e.$$.fragment)},l(t){re(e.$$.fragment,t)},m(t,l){oe(e,t,l),n=!0},p(t,l){const r={};l&8&&(r.scaleNotes=t[3]),e.$set(r)},i(t){n||(j(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){se(e,t)}}}function wt(o){let e,n="Scales",t,l,r,c='<th class="svelte-gg3pfu"><label for="tonicInput">Tonic</label></th> <th class="svelte-gg3pfu"><label for="scaleInput">Scale</label></th> <th class="svelte-gg3pfu"><label for="modeInput">mode</label></th>',g,_,T,S,B,h,a,y,d,b,p,f,u,s,m,ie,J,K,Q,be,Ce=["Major","Natural minor"].includes(o[1].name),ae,ke,Ee,Ie,Me=W(U),Y=[];for(let i=0;i<Me.length;i+=1)Y[i]=Tt(yt(o,Me,i));let ce=W(o[4]),O=[];for(let i=0;i<ce.length;i+=1)O[i]=Qe(Xe(o,ce,i));let fe=W(o[5]),P=[];for(let i=0;i<fe.length;i+=1)P[i]=Ze(qe(o,fe,i));let he=W(o[1].chords),R=[];for(let i=0;i<he.length;i+=1)R[i]=et(Ye(o,he,i));let de=W(o[3]),H=[];for(let i=0;i<de.length;i+=1)H[i]=tt(Je(o,de,i));Q=new _t({props:{notesToDisplay:o[3]}});let L=Ce&&lt(o);return{c(){e=$("h2"),e.textContent=n,t=M(),l=$("table"),r=$("tr"),r.innerHTML=c,g=M(),_=$("tr"),T=$("td"),S=$("select");for(let i=0;i<Y.length;i+=1)Y[i].c();B=M(),h=$("td"),a=$("select");for(let i=0;i<O.length;i+=1)O[i].c();y=M(),d=$("td"),b=$("select");for(let i=0;i<P.length;i+=1)P[i].c();p=M(),f=$("br"),u=M(),s=$("table"),m=$("tr");for(let i=0;i<R.length;i+=1)R[i].c();ie=M(),J=$("tr");for(let i=0;i<H.length;i+=1)H[i].c();K=M(),ne(Q.$$.fragment),be=M(),L&&L.c(),ae=ee(),this.h()},l(i){e=C(i,"H2",{"data-svelte-h":!0}),te(e)!=="svelte-b2sc71"&&(e.textContent=n),t=x(i),l=C(i,"TABLE",{});var D=I(l);r=C(D,"TR",{"data-svelte-h":!0}),te(r)!=="svelte-1edz06s"&&(r.innerHTML=c),g=x(D),_=C(D,"TR",{});var E=I(_);T=C(E,"TD",{class:!0});var k=I(T);S=C(k,"SELECT",{id:!0});var G=I(S);for(let A=0;A<Y.length;A+=1)Y[A].l(G);G.forEach(v),k.forEach(v),B=x(E),h=C(E,"TD",{class:!0});var xe=I(h);a=C(xe,"SELECT",{id:!0});var Be=I(a);for(let A=0;A<O.length;A+=1)O[A].l(Be);Be.forEach(v),xe.forEach(v),y=x(E),d=C(E,"TD",{class:!0});var Le=I(d);b=C(Le,"SELECT",{id:!0});var Ae=I(b);for(let A=0;A<P.length;A+=1)P[A].l(Ae);Ae.forEach(v),Le.forEach(v),E.forEach(v),D.forEach(v),p=x(i),f=C(i,"BR",{}),u=x(i),s=C(i,"TABLE",{});var pe=I(s);m=C(pe,"TR",{});var je=I(m);for(let A=0;A<R.length;A+=1)R[A].l(je);je.forEach(v),ie=x(pe),J=C(pe,"TR",{});var Oe=I(J);for(let A=0;A<H.length;A+=1)H[A].l(Oe);Oe.forEach(v),pe.forEach(v),K=x(i),re(Q.$$.fragment,i),be=x(i),L&&L.l(i),ae=ee(),this.h()},h(){V(S,"id","tonicInput"),o[0]===void 0&&De(()=>o[8].call(S)),V(T,"class","svelte-gg3pfu"),V(a,"id","scaleInput"),o[1]===void 0&&De(()=>o[9].call(a)),V(h,"class","svelte-gg3pfu"),V(b,"id","modeInput"),o[2]===void 0&&De(()=>o[10].call(b)),V(d,"class","svelte-gg3pfu")},m(i,D){N(i,e,D),N(i,t,D),N(i,l,D),w(l,r),w(l,g),w(l,_),w(_,T),w(T,S);for(let E=0;E<Y.length;E+=1)Y[E]&&Y[E].m(S,null);ue(S,o[0],!0),w(_,B),w(_,h),w(h,a);for(let E=0;E<O.length;E+=1)O[E]&&O[E].m(a,null);ue(a,o[1],!0),w(_,y),w(_,d),w(d,b);for(let E=0;E<P.length;E+=1)P[E]&&P[E].m(b,null);ue(b,o[2],!0),N(i,p,D),N(i,f,D),N(i,u,D),N(i,s,D),w(s,m);for(let E=0;E<R.length;E+=1)R[E]&&R[E].m(m,null);w(s,ie),w(s,J);for(let E=0;E<H.length;E+=1)H[E]&&H[E].m(J,null);N(i,K,D),oe(Q,i,D),N(i,be,D),L&&L.m(i,D),N(i,ae,D),ke=!0,Ee||(Ie=[ve(S,"change",o[8]),ve(a,"change",o[9]),ve(b,"change",o[10])],Ee=!0)},p(i,[D]){if(D&1&&ue(S,i[0]),D&16){ce=W(i[4]);let k;for(k=0;k<ce.length;k+=1){const G=Xe(i,ce,k);O[k]?O[k].p(G,D):(O[k]=Qe(G),O[k].c(),O[k].m(a,null))}for(;k<O.length;k+=1)O[k].d(1);O.length=ce.length}if(D&18&&ue(a,i[1]),D&32){fe=W(i[5]);let k;for(k=0;k<fe.length;k+=1){const G=qe(i,fe,k);P[k]?P[k].p(G,D):(P[k]=Ze(G),P[k].c(),P[k].m(b,null))}for(;k<P.length;k+=1)P[k].d(1);P.length=fe.length}if(D&36&&ue(b,i[2]),D&66){he=W(i[1].chords);let k;for(k=0;k<he.length;k+=1){const G=Ye(i,he,k);R[k]?R[k].p(G,D):(R[k]=et(G),R[k].c(),R[k].m(m,null))}for(;k<R.length;k+=1)R[k].d(1);R.length=he.length}if(D&138){de=W(i[3]);let k;for(k=0;k<de.length;k+=1){const G=Je(i,de,k);H[k]?H[k].p(G,D):(H[k]=tt(G),H[k].c(),H[k].m(J,null))}for(;k<H.length;k+=1)H[k].d(1);H.length=de.length}const E={};D&8&&(E.notesToDisplay=i[3]),Q.$set(E),D&2&&(Ce=["Major","Natural minor"].includes(i[1].name)),Ce?L?(L.p(i,D),D&2&&j(L,1)):(L=lt(i),L.c(),j(L,1),L.m(ae.parentNode,ae)):L&&(Te(),F(L,1,1,()=>{L=null}),we())},i(i){ke||(j(Q.$$.fragment,i),j(L),ke=!0)},o(i){F(Q.$$.fragment,i),F(L),ke=!1},d(i){i&&(v(e),v(t),v(l),v(p),v(f),v(u),v(s),v(K),v(be),v(ae)),Z(Y,i),Z(O,i),Z(P,i),Z(R,i),Z(H,i),se(Q,i),L&&L.d(i),Ee=!1,ot(Ie)}}}function $t(o,e,n){const t=[{name:"Major",intervals:[2,2,1,2,2,2,1],chords:["major","minor","minor","diminished","major","minor","major"]},{name:"Natural minor",intervals:[2,1,2,2,1,2,2],chords:["minor","diminished","major","minor","major","major","minor"]},{name:"Pentatonic major",intervals:[2,2,3,2,3],chords:["major","minor","minor","major","minor"]},{name:"Pentatonic minor",intervals:[3,2,2,3,2],chords:["minor","major","minor","major","major"]}],l=[{name:"Ionian",degree:1},{name:"Dorian",degree:2},{name:"Phrygian",degree:3},{name:"Lydian",degree:4},{name:"Mixolydian",degree:5},{name:"Aeolian",degree:6},{name:"Locrian",degree:7}];let r="C",c=t[0],g=l[0],_=[];const T=(d,b,p)=>{const{intervals:f}=b;n(3,_=[d]);const u=U.indexOf(d);if(u===-1)throw new Error(`Tonic ${d} not found`);let s=u;for(const m of f)s=(s+m)%U.length,_.push(U[s]);_.pop();for(let m=1;m<p.degree;m++)_.push(_.shift())},S=(d,b)=>{let p=$e(d);return b==="minor"?p=p.toLowerCase():b==="diminished"&&(p+="°"),p},B=(d,b)=>{let p=d;return b==="minor"?p+="m":b==="diminished"&&(p+="°"),p};function h(){r=Ne(this),n(0,r)}function a(){c=Ne(this),n(1,c),n(4,t)}function y(){g=Ne(this),n(2,g),n(5,l)}return o.$$.update=()=>{o.$$.dirty&7&&T(r,c,g)},[r,c,g,_,t,l,S,B,h,a,y]}class Ct extends me{constructor(e){super(),_e(this,e,$t,wt,le,{})}}function Et(o){let e,n;return e=new Ct({}),{c(){ne(e.$$.fragment)},l(t){re(e.$$.fragment,t)},m(t,l){oe(e,t,l),n=!0},p:z,i(t){n||(j(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){se(e,t)}}}class Mt extends me{constructor(e){super(),_e(this,e,null,Et,le,{})}}export{Mt as component};
