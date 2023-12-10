import{s as ee,f as E,g as C,h as I,d as _,j as K,i as N,A as V,F as rt,a as M,c as B,B as ue,C as ve,E as ot,e as ge,I as Z,l as q,m as X,D as w,R as De,S as he,P as Se,n as st,T as Ne}from"../chunks/scheduler.062eb097.js";import{S as me,i as _e,b as te,d as le,m as ne,a as A,t as W,e as re,g as Te,c as we}from"../chunks/index.7dd5eebf.js";import{e as H}from"../chunks/each.a3b5a397.js";import{P as it}from"../chunks/P5.ef98b533.js";const U=["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"],$e=o=>{if(o<1||o>7)throw new Error(`Unkown degree ${o}`);return["I","II","III","IV","V","VI","VII"][o-1]};function at(o){let e,n,t;return n=new it({props:{sketch:o[0]}}),{c(){e=E("div"),te(n.$$.fragment),this.h()},l(l){e=C(l,"DIV",{class:!0});var r=I(e);le(n.$$.fragment,r),r.forEach(_),this.h()},h(){K(e,"class","d-flex justify-content-center")},m(l,r){N(l,e,r),ne(n,e,null),t=!0},p:V,i(l){t||(A(n.$$.fragment,l),t=!0)},o(l){W(n.$$.fragment,l),t=!1},d(l){l&&_(e),re(n)}}}const ye=14;function ct(o,e,n){let t,{labelMode:l="name"}=e,{notesToDisplay:r}=e;const c=["C","D","E","F","G","A","B"],h=["C#","D#","F#","G#","A#"],g=u=>{const s=[80,70,60,150],m=[80,70,60],a=u.width/ye;for(let d=0;d<ye;d++){const k=c[d%c.length];u.strokeWeight(1),u.stroke(s),u.noFill(),u.rect(a*d,0,a,u.height);const b=k+"#";h.includes(b)&&(u.fill(m),u.rect(a*d+2*a/3,0,a/2,u.height*.65))}},y=(u,s,m)=>{if(m==="name")return s;const a=u.indexOf(s);if(a===-1)throw new Error("note not in scale");return $e(a+1)},S=u=>{const s=u.width/ye;for(let m=0;m<ye;m++){const a=c[m%c.length],d=r.indexOf(a);if(d>=0){d===0?u.fill([250,80,80]):u.fill("black");const p=s*m+s/2,f=u.height*.8;u.circle(p,f,20),u.noStroke(),u.fill("white");const T=y(r,a,l);u.text(T,p-u.textWidth(T)/2,f+u.textSize()/2)}const k=a+"#",b=r.indexOf(k);if(b>=0){b===0?u.fill([250,80,80]):u.fill("black");const p=s*m+s,f=u.height*.5;u.circle(p,f,20),u.noStroke(),u.fill("white");const T=y(r,k,l);u.text(T,p-u.textWidth(T)/2,f+u.textSize()/2)}}},L=u=>{u.setup=()=>{n(3,t=u),u.createCanvas(900,300),u.textStyle(u.BOLD)},u.draw=()=>{u.background([200,190,170]),g(u),S(u),u.noLoop()}};return rt(()=>{t==null||t.remove()}),o.$$set=u=>{"labelMode"in u&&n(1,l=u.labelMode),"notesToDisplay"in u&&n(2,r=u.notesToDisplay)},o.$$.update=()=>{o.$$.dirty&14&&(r||l)&&(t==null||t.draw())},[L,l,r,t]}class ft extends me{constructor(e){super(),_e(this,e,ct,at,ee,{labelMode:1,notesToDisplay:2})}}function ht(o){let e,n,t;return n=new it({props:{sketch:o[0]}}),{c(){e=E("div"),te(n.$$.fragment),this.h()},l(l){e=C(l,"DIV",{class:!0});var r=I(e);le(n.$$.fragment,r),r.forEach(_),this.h()},h(){K(e,"class","d-flex justify-content-center")},m(l,r){N(l,e,r),ne(n,e,null),t=!0},p:V,i(l){t||(A(n.$$.fragment,l),t=!0)},o(l){W(n.$$.fragment,l),t=!1},d(l){l&&_(e),re(n)}}}const Pe=15,de=30;function dt(o,e,n){let t,{labelMode:l="name"}=e,{notesToDisplay:r}=e;const c=["E","A","D","G","B","E"],h=c.map(s=>{const m=U.indexOf(s);if(m===-1)throw new Error(`Base ${s} not found`);const a=[s];for(let d=1;d<Pe;d++){const k=U[(m+d)%U.length];a.push(k)}return a}),g=s=>{const m=[80,70,60,150],a=s.height/6;for(let p=0;p<h.length;p++){const f=c[p],T=a*p+a/2;s.strokeWeight(1),s.stroke(m),s.noFill(),s.line(de,T,s.width,T),s.noStroke(),s.fill(m),s.text(f,5,s.height-T+s.textSize()/2)}s.strokeWeight(5),s.stroke(m),s.noFill(),s.line(de,a/2,de,s.height-a/2),s.strokeWeight(1);const d=s.width/h[0].length;for(let p=1;p<Pe;p++){const f=de+d*p;s.line(f,a/2,f,s.height-a/2)}const k=[3,5,7,9,15];for(const p of k){let{x:f,y:T}=L({string:2,fret:p});T-=a/2,s.fill(m),s.circle(f,T,10)}const b=[1,3];for(const p of b){let{x:f,y:T}=L({string:p,fret:12});T-=a/2,s.fill(m),s.circle(f,T,10)}},y=(s,m,a)=>{if(a==="name")return m;const d=s.indexOf(m);if(d===-1)throw new Error("note not in scale");return $e(d+1)},S=s=>{for(let m=0;m<6;m++){const a=h[m];for(let d=0;d<a.length;d++){const k=a[d];if(!r.includes(k))continue;const b={string:m,fret:d},{x:p,y:f}=L(b);r.indexOf(k)===0?s.fill([250,80,80]):s.fill("black"),s.circle(p,f,20),s.noStroke(),s.fill("white");const T=y(r,k,l);s.text(T,p-s.textWidth(T)/2,f+s.textSize()/2)}}},L=s=>{const{string:m,fret:a}=s,d=t.height/6,k=d*(5-m)+d/2;if(a===0)return{x:de,y:k};const b=t.width/h[0].length;return{x:de+b*(a-1)+b*.5,y:k}},u=s=>{s.setup=()=>{n(3,t=s),s.createCanvas(900,300),s.textStyle(s.BOLD)},s.draw=()=>{s.background([200,190,170]),g(s),S(s),s.noLoop()}};return rt(()=>{t==null||t.remove()}),o.$$set=s=>{"labelMode"in s&&n(1,l=s.labelMode),"notesToDisplay"in s&&n(2,r=s.notesToDisplay)},o.$$.update=()=>{o.$$.dirty&14&&(r||l)&&(t==null||t.draw())},[u,l,r,t]}class ut extends me{constructor(e){super(),_e(this,e,dt,ht,ee,{labelMode:1,notesToDisplay:2})}}function Re(o){let e,n;return e=new ut({props:{notesToDisplay:o[0],labelMode:o[1]}}),{c(){te(e.$$.fragment)},l(t){le(e.$$.fragment,t)},m(t,l){ne(e,t,l),n=!0},p(t,l){const r={};l&1&&(r.notesToDisplay=t[0]),l&2&&(r.labelMode=t[1]),e.$set(r)},i(t){n||(A(e.$$.fragment,t),n=!0)},o(t){W(e.$$.fragment,t),n=!1},d(t){re(e,t)}}}function ze(o){let e,n;return e=new ft({props:{notesToDisplay:o[0],labelMode:o[1]}}),{c(){te(e.$$.fragment)},l(t){le(e.$$.fragment,t)},m(t,l){ne(e,t,l),n=!0},p(t,l){const r={};l&1&&(r.notesToDisplay=t[0]),l&2&&(r.labelMode=t[1]),e.$set(r)},i(t){n||(A(e.$$.fragment,t),n=!0)},o(t){W(e.$$.fragment,t),n=!1},d(t){re(e,t)}}}function gt(o){let e=["neck","both"].includes(o[3][o[2]]),n,t=["keyboard","both"].includes(o[3][o[2]]),l,r,c="C / IV",h,g,y='<i class="fas fa-guitar"></i> / <i class="fas fa-keyboard"></i>',S,L,u,s=e&&Re(o),m=t&&ze(o);return{c(){s&&s.c(),n=M(),m&&m.c(),l=M(),r=E("button"),r.textContent=c,h=M(),g=E("button"),g.innerHTML=y},l(a){s&&s.l(a),n=B(a),m&&m.l(a),l=B(a),r=C(a,"BUTTON",{"data-svelte-h":!0}),ue(r)!=="svelte-jnv4j6"&&(r.textContent=c),h=B(a),g=C(a,"BUTTON",{"data-svelte-h":!0}),ue(g)!=="svelte-1b31f97"&&(g.innerHTML=y)},m(a,d){s&&s.m(a,d),N(a,n,d),m&&m.m(a,d),N(a,l,d),N(a,r,d),N(a,h,d),N(a,g,d),S=!0,L||(u=[ve(r,"click",o[4]),ve(g,"click",o[5])],L=!0)},p(a,[d]){d&4&&(e=["neck","both"].includes(a[3][a[2]])),e?s?(s.p(a,d),d&4&&A(s,1)):(s=Re(a),s.c(),A(s,1),s.m(n.parentNode,n)):s&&(Te(),W(s,1,1,()=>{s=null}),we()),d&4&&(t=["keyboard","both"].includes(a[3][a[2]])),t?m?(m.p(a,d),d&4&&A(m,1)):(m=ze(a),m.c(),A(m,1),m.m(l.parentNode,l)):m&&(Te(),W(m,1,1,()=>{m=null}),we())},i(a){S||(A(s),A(m),S=!0)},o(a){W(s),W(m),S=!1},d(a){a&&(_(n),_(l),_(r),_(h),_(g)),s&&s.d(a),m&&m.d(a),L=!1,ot(u)}}}function mt(o,e,n){let{notesToDisplay:t}=e,l="name";const r=["neck","keyboard","both"];let c=0;const h=()=>n(1,l=l==="name"?"degree":"name"),g=()=>n(2,c=(c+1)%r.length);return o.$$set=y=>{"notesToDisplay"in y&&n(0,t=y.notesToDisplay)},[t,l,c,r,h,g]}class _t extends me{constructor(e){super(),_e(this,e,mt,gt,ee,{notesToDisplay:0})}}const He=[{name:"Axis progression",examples:["Let it be","Take on me","Someone like you","Don't step believin'","Can you feel the love tonight","Let it go"],chords:[{degree:1},{degree:5},{degree:6,minor:!0},{degree:4}]},{name:"Other axis progression",examples:["Numb - Linkin Park","Kids - MGMT","Africa - Toto","Rivers flow in you (piano thingy)","Complicated - Avril Lavigne","Grenade","San Francisco","Save tonight"],chords:[{degree:6,minor:!0},{degree:4},{degree:1},{degree:5}]},{name:"Third axis progression",examples:["What's my age again?","Umbrella - Rihanna","Dragosta Din Tei","Boulevard of broken dreams (chorus)","Alejandro - Lady Gaga"],chords:[{degree:4},{degree:1},{degree:5},{degree:6,minor:!0}]},{name:"Andalusian cadence",examples:["Hit the road Jack","Good vibrations - The Beach boys","Happy together","Vanina"],chords:[{degree:1,minor:!0},{degree:7,flat:!0},{degree:6,flat:!0},{degree:5}]},{name:"Aeolian vamp",examples:["Rolling in the deep","All along the watchtower","Stairway to heaven","My hear will go on","Somebody that I used to know"],chords:[{degree:1,minor:!0},{degree:7,flat:!0},{degree:6,flat:!0},{degree:7,flat:!0}]},{name:"Doo-Woop change",examples:["I will always love you","Crocodile rock","Let's twist again","Baby - Justin Bieber"],chords:[{degree:1},{degree:6,minor:!0},{degree:4},{degree:5}]},{name:"Major scale vamp",examples:["Your body is a wonderland","All the small things - Blink 182"],chords:[{degree:1},{degree:5},{degree:4},{degree:5}]},{name:"Mixolydyan vamp",examples:["Hey Jude (Lalalalaa)","Sympathy for the devil","Sweet child o' mine","Royals - Lorde","Sweet home Alabama"],chords:[{degree:1},{degree:7,flat:!0},{degree:4},{degree:5}]},{name:"pachelbel's cannon",chords:[{degree:1},{degree:5},{degree:6,minor:!0},{degree:3,minor:!0},{degree:4},{degree:1},{degree:4},{degree:5}]},{name:"Plagal cascade",examples:["Wonderwall","Boulevard of broken dreams (couplet)","Mad world","Pumped up kids","Radioactive - Imagine Dragons"],chords:[{degree:1,minor:!0},{degree:3,flat:!0},{degree:7,flat:!0},{degree:4}]},{name:`"Can't stop" progression`,examples:["Can't stop","Cant't hold us - Mackelmore & Ryan Lewis"],chords:[{degree:1,minor:!0},{degree:7,flat:!0},{degree:5,minor:!0},{degree:6,flat:!0}]},{name:'"Closing time" progression',examples:["Closing time - Semisonic","SOS - ABBA","Believe - Cher","All star (Shrek)"],chords:[{degree:1},{degree:5},{degree:2,minor:!0},{degree:4}]},{name:'"More than a feeling" progression',examples:["More than a feeling","Mr Brightside - The Killers"],chords:[{degree:1},{degree:4},{degree:6,minor:!0},{degree:5}]},{name:"Classic blues slow change",chords:[{degree:1},{degree:1},{degree:1},{degree:1},{degree:4},{degree:4},{degree:1},{degree:1},{degree:5},{degree:4},{degree:1},{degree:5}]},{name:"Classic blues quick change",chords:[{degree:1},{degree:4},{degree:1},{degree:1},{degree:4},{degree:4},{degree:1},{degree:1},{degree:5},{degree:4},{degree:1},{degree:5}]},{name:"Classic rock",chords:[{degree:1},{degree:4},{degree:1},{degree:1},{degree:4},{degree:4},{degree:1},{degree:1},{degree:5},{degree:5},{degree:1},{degree:1}]}];function We(o,e,n){const t=o.slice();return t[3]=e[n],t}function Fe(o,e,n){const t=o.slice();return t[6]=e[n],t}function Ge(o,e,n){const t=o.slice();return t[6]=e[n],t}function vt(o){let e,n,t="Examples:",l,r=o[3].examples.join(", ")+"",c;return{c(){e=E("span"),n=E("b"),n.textContent=t,l=M(),c=q(r)},l(h){e=C(h,"SPAN",{});var g=I(e);n=C(g,"B",{"data-svelte-h":!0}),ue(n)!=="svelte-1jvpsk3"&&(n.textContent=t),l=B(g),c=X(g,r),g.forEach(_)},m(h,g){N(h,e,g),w(e,n),w(e,l),w(e,c)},d(h){h&&_(e)}}}function Ke(o){let e,n=o[0](o[6])+"",t;return{c(){e=E("th"),t=q(n),this.h()},l(l){e=C(l,"TH",{class:!0});var r=I(e);t=X(r,n),r.forEach(_),this.h()},h(){K(e,"class","svelte-14ztni8")},m(l,r){N(l,e,r),w(e,t)},p:V,d(l){l&&_(e)}}}function Ve(o){let e,n=o[1](o[6])+"",t;return{c(){e=E("td"),t=q(n),this.h()},l(l){e=C(l,"TD",{class:!0});var r=I(e);t=X(r,n),r.forEach(_),this.h()},h(){K(e,"class","svelte-14ztni8")},m(l,r){N(l,e,r),w(e,t)},p:V,d(l){l&&_(e)}}}function Ue(o){let e,n,t=o[3].name+"",l,r,c,h,g,y,S,L,u,s=o[3].examples&&vt(o),m=H(o[3].chords),a=[];for(let b=0;b<m.length;b+=1)a[b]=Ke(Ge(o,m,b));let d=H(o[3].chords),k=[];for(let b=0;b<d.length;b+=1)k[b]=Ve(Fe(o,d,b));return{c(){e=E("div"),n=E("h4"),l=q(t),r=M(),s&&s.c(),c=M(),h=E("table"),g=E("tr");for(let b=0;b<a.length;b+=1)a[b].c();y=M(),S=E("tr");for(let b=0;b<k.length;b+=1)k[b].c();L=M(),u=E("br")},l(b){e=C(b,"DIV",{});var p=I(e);n=C(p,"H4",{});var f=I(n);l=X(f,t),f.forEach(_),r=B(p),s&&s.l(p),c=B(p),h=C(p,"TABLE",{});var T=I(h);g=C(T,"TR",{});var oe=I(g);for(let G=0;G<a.length;G+=1)a[G].l(oe);oe.forEach(_),y=B(T),S=C(T,"TR",{});var J=I(S);for(let G=0;G<k.length;G+=1)k[G].l(J);J.forEach(_),T.forEach(_),p.forEach(_),L=B(b),u=C(b,"BR",{})},m(b,p){N(b,e,p),w(e,n),w(n,l),w(e,r),s&&s.m(e,null),w(e,c),w(e,h),w(h,g);for(let f=0;f<a.length;f+=1)a[f]&&a[f].m(g,null);w(h,y),w(h,S);for(let f=0;f<k.length;f+=1)k[f]&&k[f].m(S,null);N(b,L,p),N(b,u,p)},p(b,p){if(p&1){m=H(b[3].chords);let f;for(f=0;f<m.length;f+=1){const T=Ge(b,m,f);a[f]?a[f].p(T,p):(a[f]=Ke(T),a[f].c(),a[f].m(g,null))}for(;f<a.length;f+=1)a[f].d(1);a.length=m.length}if(p&2){d=H(b[3].chords);let f;for(f=0;f<d.length;f+=1){const T=Fe(b,d,f);k[f]?k[f].p(T,p):(k[f]=Ve(T),k[f].c(),k[f].m(S,null))}for(;f<k.length;f+=1)k[f].d(1);k.length=d.length}},d(b){b&&(_(e),_(L),_(u)),s&&s.d(),Z(a,b),Z(k,b)}}}function bt(o){let e,n="Progressions",t,l,r=H(He),c=[];for(let h=0;h<r.length;h+=1)c[h]=Ue(We(o,r,h));return{c(){e=E("h3"),e.textContent=n,t=M();for(let h=0;h<c.length;h+=1)c[h].c();l=ge()},l(h){e=C(h,"H3",{"data-svelte-h":!0}),ue(e)!=="svelte-xukbl8"&&(e.textContent=n),t=B(h);for(let g=0;g<c.length;g+=1)c[g].l(h);l=ge()},m(h,g){N(h,e,g),N(h,t,g);for(let y=0;y<c.length;y+=1)c[y]&&c[y].m(h,g);N(h,l,g)},p(h,[g]){if(g&3){r=H(He);let y;for(y=0;y<r.length;y+=1){const S=We(h,r,y);c[y]?c[y].p(S,g):(c[y]=Ue(S),c[y].c(),c[y].m(l.parentNode,l))}for(;y<c.length;y+=1)c[y].d(1);c.length=r.length}},i:V,o:V,d(h){h&&(_(e),_(t),_(l)),Z(c,h)}}}function kt(o,e,n){let{scaleNotes:t=[]}=e;const l=c=>{let h=$e(c.degree);return c.minor&&(h=h.toLowerCase()),c.flat&&(h="b"+h),h},r=c=>{const h=t[c.degree-1];let g=U.indexOf(h);c.flat&&(g--,g===-1&&(g=U.length-1));let y=U[g];return c.minor&&(y+="m"),y};return o.$$set=c=>{"scaleNotes"in c&&n(2,t=c.scaleNotes)},[l,r,t]}class pt extends me{constructor(e){super(),_e(this,e,kt,bt,ee,{scaleNotes:2})}}function Je(o,e,n){const t=o.slice();t[12]=e[n],t[15]=n;const l=t[1].chords[t[15]];return t[13]=l,t}function Ye(o,e,n){const t=o.slice();return t[16]=e[n],t[15]=n,t}function qe(o,e,n){const t=o.slice();return t[2]=e[n],t}function Xe(o,e,n){const t=o.slice();return t[1]=e[n],t}function yt(o,e,n){const t=o.slice();return t[12]=e[n],t}function Tt(o){let e,n,t;return{c(){e=E("option"),n=q(o[12]),t=M(),this.h()},l(l){e=C(l,"OPTION",{});var r=I(e);n=X(r,o[12]),t=B(r),r.forEach(_),this.h()},h(){e.__value=o[12],Se(e,e.__value)},m(l,r){N(l,e,r),w(e,n),w(e,t)},p:V,d(l){l&&_(e)}}}function Qe(o){let e,n=o[1].name+"",t,l;return{c(){e=E("option"),t=q(n),l=M(),this.h()},l(r){e=C(r,"OPTION",{});var c=I(e);t=X(c,n),l=B(c),c.forEach(_),this.h()},h(){e.__value=o[1],Se(e,e.__value)},m(r,c){N(r,e,c),w(e,t),w(e,l)},p:V,d(r){r&&_(e)}}}function Ze(o){let e,n=o[2].name+"",t,l;return{c(){e=E("option"),t=q(n),l=M(),this.h()},l(r){e=C(r,"OPTION",{});var c=I(e);t=X(c,n),l=B(c),c.forEach(_),this.h()},h(){e.__value=o[2],Se(e,e.__value)},m(r,c){N(r,e,c),w(e,t),w(e,l)},p:V,d(r){r&&_(e)}}}function et(o){let e,n=o[6](o[15]+1,o[16])+"",t;return{c(){e=E("th"),t=q(n),this.h()},l(l){e=C(l,"TH",{class:!0});var r=I(e);t=X(r,n),r.forEach(_),this.h()},h(){K(e,"class","svelte-14ztni8")},m(l,r){N(l,e,r),w(e,t)},p(l,r){r&2&&n!==(n=l[6](l[15]+1,l[16])+"")&&st(t,n)},d(l){l&&_(e)}}}function tt(o){let e,n=o[7](o[12],o[13])+"",t;return{c(){e=E("td"),t=q(n),this.h()},l(l){e=C(l,"TD",{class:!0});var r=I(e);t=X(r,n),r.forEach(_),this.h()},h(){K(e,"class","svelte-14ztni8")},m(l,r){N(l,e,r),w(e,t)},p(l,r){r&10&&n!==(n=l[7](l[12],l[13])+"")&&st(t,n)},d(l){l&&_(e)}}}function lt(o){let e=o[3],n,t,l=nt(o);return{c(){l.c(),n=ge()},l(r){l.l(r),n=ge()},m(r,c){l.m(r,c),N(r,n,c),t=!0},p(r,c){c&8&&ee(e,e=r[3])?(Te(),W(l,1,1,V),we(),l=nt(r),l.c(),A(l,1),l.m(n.parentNode,n)):l.p(r,c)},i(r){t||(A(l),t=!0)},o(r){W(l),t=!1},d(r){r&&_(n),l.d(r)}}}function nt(o){let e,n;return e=new pt({props:{scaleNotes:o[3]}}),{c(){te(e.$$.fragment)},l(t){le(e.$$.fragment,t)},m(t,l){ne(e,t,l),n=!0},p(t,l){const r={};l&8&&(r.scaleNotes=t[3]),e.$set(r)},i(t){n||(A(e.$$.fragment,t),n=!0)},o(t){W(e.$$.fragment,t),n=!1},d(t){re(e,t)}}}function wt(o){let e,n="Scales",t,l,r,c='<th class="svelte-14ztni8"><label for="tonicInput">Tonic</label></th> <th class="svelte-14ztni8"><label for="scaleInput">Scale</label></th> <th class="svelte-14ztni8"><label for="modeInput">mode</label></th>',h,g,y,S,L,u,s,m,a,d,k,b,p,f,T,oe,J,G,Q,be,Ee=["Major","Natural minor"].includes(o[1].name),se,ke,Ce,Ie,Me=H(U),Y=[];for(let i=0;i<Me.length;i+=1)Y[i]=Tt(yt(o,Me,i));let ie=H(o[4]),O=[];for(let i=0;i<ie.length;i+=1)O[i]=Qe(Xe(o,ie,i));let ae=H(o[5]),P=[];for(let i=0;i<ae.length;i+=1)P[i]=Ze(qe(o,ae,i));let ce=H(o[1].chords),R=[];for(let i=0;i<ce.length;i+=1)R[i]=et(Ye(o,ce,i));let fe=H(o[3]),z=[];for(let i=0;i<fe.length;i+=1)z[i]=tt(Je(o,fe,i));Q=new _t({props:{notesToDisplay:o[3]}});let x=Ee&&lt(o);return{c(){e=E("h2"),e.textContent=n,t=M(),l=E("table"),r=E("tr"),r.innerHTML=c,h=M(),g=E("tr"),y=E("td"),S=E("select");for(let i=0;i<Y.length;i+=1)Y[i].c();L=M(),u=E("td"),s=E("select");for(let i=0;i<O.length;i+=1)O[i].c();m=M(),a=E("td"),d=E("select");for(let i=0;i<P.length;i+=1)P[i].c();k=M(),b=E("br"),p=M(),f=E("table"),T=E("tr");for(let i=0;i<R.length;i+=1)R[i].c();oe=M(),J=E("tr");for(let i=0;i<z.length;i+=1)z[i].c();G=M(),te(Q.$$.fragment),be=M(),x&&x.c(),se=ge(),this.h()},l(i){e=C(i,"H2",{"data-svelte-h":!0}),ue(e)!=="svelte-b2sc71"&&(e.textContent=n),t=B(i),l=C(i,"TABLE",{});var D=I(l);r=C(D,"TR",{"data-svelte-h":!0}),ue(r)!=="svelte-allvrg"&&(r.innerHTML=c),h=B(D),g=C(D,"TR",{});var $=I(g);y=C($,"TD",{class:!0});var v=I(y);S=C(v,"SELECT",{id:!0});var F=I(S);for(let j=0;j<Y.length;j+=1)Y[j].l(F);F.forEach(_),v.forEach(_),L=B($),u=C($,"TD",{class:!0});var Be=I(u);s=C(Be,"SELECT",{id:!0});var Le=I(s);for(let j=0;j<O.length;j+=1)O[j].l(Le);Le.forEach(_),Be.forEach(_),m=B($),a=C($,"TD",{class:!0});var xe=I(a);d=C(xe,"SELECT",{id:!0});var je=I(d);for(let j=0;j<P.length;j+=1)P[j].l(je);je.forEach(_),xe.forEach(_),$.forEach(_),D.forEach(_),k=B(i),b=C(i,"BR",{}),p=B(i),f=C(i,"TABLE",{});var pe=I(f);T=C(pe,"TR",{});var Ae=I(T);for(let j=0;j<R.length;j+=1)R[j].l(Ae);Ae.forEach(_),oe=B(pe),J=C(pe,"TR",{});var Oe=I(J);for(let j=0;j<z.length;j+=1)z[j].l(Oe);Oe.forEach(_),pe.forEach(_),G=B(i),le(Q.$$.fragment,i),be=B(i),x&&x.l(i),se=ge(),this.h()},h(){K(S,"id","tonicInput"),o[0]===void 0&&De(()=>o[8].call(S)),K(y,"class","svelte-14ztni8"),K(s,"id","scaleInput"),o[1]===void 0&&De(()=>o[9].call(s)),K(u,"class","svelte-14ztni8"),K(d,"id","modeInput"),o[2]===void 0&&De(()=>o[10].call(d)),K(a,"class","svelte-14ztni8")},m(i,D){N(i,e,D),N(i,t,D),N(i,l,D),w(l,r),w(l,h),w(l,g),w(g,y),w(y,S);for(let $=0;$<Y.length;$+=1)Y[$]&&Y[$].m(S,null);he(S,o[0],!0),w(g,L),w(g,u),w(u,s);for(let $=0;$<O.length;$+=1)O[$]&&O[$].m(s,null);he(s,o[1],!0),w(g,m),w(g,a),w(a,d);for(let $=0;$<P.length;$+=1)P[$]&&P[$].m(d,null);he(d,o[2],!0),N(i,k,D),N(i,b,D),N(i,p,D),N(i,f,D),w(f,T);for(let $=0;$<R.length;$+=1)R[$]&&R[$].m(T,null);w(f,oe),w(f,J);for(let $=0;$<z.length;$+=1)z[$]&&z[$].m(J,null);N(i,G,D),ne(Q,i,D),N(i,be,D),x&&x.m(i,D),N(i,se,D),ke=!0,Ce||(Ie=[ve(S,"change",o[8]),ve(s,"change",o[9]),ve(d,"change",o[10])],Ce=!0)},p(i,[D]){if(D&1&&he(S,i[0]),D&16){ie=H(i[4]);let v;for(v=0;v<ie.length;v+=1){const F=Xe(i,ie,v);O[v]?O[v].p(F,D):(O[v]=Qe(F),O[v].c(),O[v].m(s,null))}for(;v<O.length;v+=1)O[v].d(1);O.length=ie.length}if(D&18&&he(s,i[1]),D&32){ae=H(i[5]);let v;for(v=0;v<ae.length;v+=1){const F=qe(i,ae,v);P[v]?P[v].p(F,D):(P[v]=Ze(F),P[v].c(),P[v].m(d,null))}for(;v<P.length;v+=1)P[v].d(1);P.length=ae.length}if(D&36&&he(d,i[2]),D&66){ce=H(i[1].chords);let v;for(v=0;v<ce.length;v+=1){const F=Ye(i,ce,v);R[v]?R[v].p(F,D):(R[v]=et(F),R[v].c(),R[v].m(T,null))}for(;v<R.length;v+=1)R[v].d(1);R.length=ce.length}if(D&138){fe=H(i[3]);let v;for(v=0;v<fe.length;v+=1){const F=Je(i,fe,v);z[v]?z[v].p(F,D):(z[v]=tt(F),z[v].c(),z[v].m(J,null))}for(;v<z.length;v+=1)z[v].d(1);z.length=fe.length}const $={};D&8&&($.notesToDisplay=i[3]),Q.$set($),D&2&&(Ee=["Major","Natural minor"].includes(i[1].name)),Ee?x?(x.p(i,D),D&2&&A(x,1)):(x=lt(i),x.c(),A(x,1),x.m(se.parentNode,se)):x&&(Te(),W(x,1,1,()=>{x=null}),we())},i(i){ke||(A(Q.$$.fragment,i),A(x),ke=!0)},o(i){W(Q.$$.fragment,i),W(x),ke=!1},d(i){i&&(_(e),_(t),_(l),_(k),_(b),_(p),_(f),_(G),_(be),_(se)),Z(Y,i),Z(O,i),Z(P,i),Z(R,i),Z(z,i),re(Q,i),x&&x.d(i),Ce=!1,ot(Ie)}}}function $t(o,e,n){const t=[{name:"Major",intervals:[2,2,1,2,2,2,1],chords:["major","minor","minor","diminished","major","minor","major"]},{name:"Natural minor",intervals:[2,1,2,2,1,2,2],chords:["minor","diminished","major","minor","major","major","minor"]},{name:"Pentatonic major",intervals:[2,2,3,2,3],chords:["major","minor","minor","major","minor"]},{name:"Pentatonic minor",intervals:[3,2,2,3,2],chords:["minor","major","minor","major","major"]}],l=[{name:"Ionian",degree:1},{name:"Dorian",degree:2},{name:"Phrygian",degree:3},{name:"Lydian",degree:4},{name:"Mixolydian",degree:5},{name:"Aeolian",degree:6},{name:"Locrian",degree:7}];let r="C",c=t[0],h=l[0],g=[];const y=(a,d,k)=>{const{intervals:b}=d;n(3,g=[a]);const p=U.indexOf(a);if(p===-1)throw new Error(`Tonic ${a} not found`);let f=p;for(const T of b)f=(f+T)%U.length,g.push(U[f]);g.pop();for(let T=1;T<k.degree;T++)g.push(g.shift())},S=(a,d)=>{let k=$e(a);return d==="minor"?k=k.toLowerCase():d==="diminished"&&(k+="°"),k},L=(a,d)=>{let k=a;return d==="minor"?k+="m":d==="diminished"&&(k+="°"),k};function u(){r=Ne(this),n(0,r)}function s(){c=Ne(this),n(1,c),n(4,t)}function m(){h=Ne(this),n(2,h),n(5,l)}return o.$$.update=()=>{o.$$.dirty&7&&y(r,c,h)},[r,c,h,g,t,l,S,L,u,s,m]}class Et extends me{constructor(e){super(),_e(this,e,$t,wt,ee,{})}}function Ct(o){let e,n;return e=new Et({}),{c(){te(e.$$.fragment)},l(t){le(e.$$.fragment,t)},m(t,l){ne(e,t,l),n=!0},p:V,i(t){n||(A(e.$$.fragment,t),n=!0)},o(t){W(e.$$.fragment,t),n=!1},d(t){re(e,t)}}}class Mt extends me{constructor(e){super(),_e(this,e,null,Ct,ee,{})}}export{Mt as component};
