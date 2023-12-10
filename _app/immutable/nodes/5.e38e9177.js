import{s as ce,f as $,a as A,l as U,g as y,h as I,c as L,m as q,d as u,j as W,i as N,D as b,C as ge,n as Ze,F as lt,e as ie,B as ue,A as J,I as Z,R as we,S as se,E as nt,P as ye,T as $e}from"../chunks/scheduler.062eb097.js";import{S as _e,i as me,b as ve,d as pe,m as be,a as Y,t as ee,e as ke,g as et,c as tt}from"../chunks/index.7dd5eebf.js";import{e as j}from"../chunks/each.a3b5a397.js";import{P as rt}from"../chunks/P5.ef98b533.js";const V=["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"],Ce=l=>{if(l<1||l>7)throw new Error(`Unkown degree ${l}`);return["I","II","III","IV","V","VI","VII"][l-1]};function ot(l){let e,r,t,n,s,a,h,g;return r=new rt({props:{sketch:l[1]}}),{c(){e=$("div"),ve(r.$$.fragment),t=A(),n=$("button"),s=U(l[0]),this.h()},l(_){e=y(_,"DIV",{class:!0});var E=I(e);pe(r.$$.fragment,E),t=L(E),n=y(E,"BUTTON",{});var M=I(n);s=q(M,l[0]),M.forEach(u),E.forEach(u),this.h()},h(){W(e,"class","d-flex justify-content-center")},m(_,E){N(_,e,E),be(r,e,null),b(e,t),b(e,n),b(n,s),a=!0,h||(g=ge(n,"click",l[4]),h=!0)},p(_,[E]){(!a||E&1)&&Ze(s,_[0])},i(_){a||(Y(r.$$.fragment,_),a=!0)},o(_){ee(r.$$.fragment,_),a=!1},d(_){_&&u(e),ke(r),h=!1,g()}}}const Me=15,ae=30;function st(l,e,r){let t,n="name",{notesToDisplay:s}=e;const a=["E","A","D","G","B","E"],h=a.map(i=>{const m=V.indexOf(i);if(m===-1)throw new Error(`Base ${i} not found`);const p=[i];for(let v=1;v<Me;v++){const f=V[(m+v)%V.length];p.push(f)}return p}),g=i=>{const m=[80,70,60,150],p=i.height/6;for(let c=0;c<h.length;c++){const C=a[c],D=p*c+p/2;i.strokeWeight(1),i.stroke(m),i.noFill(),i.line(ae,D,i.width,D),i.noStroke(),i.fill(m),i.text(C,5,i.height-D+i.textSize()/2)}i.strokeWeight(5),i.stroke(m),i.noFill(),i.line(ae,p/2,ae,i.height-p/2),i.strokeWeight(1);const v=i.width/h[0].length;for(let c=1;c<Me;c++){const C=ae+v*c;i.line(C,p/2,C,i.height-p/2)}const f=[3,5,7,9,15];for(const c of f){let{x:C,y:D}=M({string:2,fret:c});D-=p/2,i.fill(m),i.circle(C,D,10)}const w=[1,3];for(const c of w){let{x:C,y:D}=M({string:c,fret:12});D-=p/2,i.fill(m),i.circle(C,D,10)}},_=(i,m,p)=>{if(p==="name")return m;const v=i.indexOf(m);if(v===-1)throw new Error("note not in scale");return Ce(v+1)},E=i=>{for(let m=0;m<6;m++){const p=h[m];for(let v=0;v<p.length;v++){const f=p[v];if(!s.includes(f))continue;const w={string:m,fret:v},{x:c,y:C}=M(w);s.indexOf(f)===0?i.fill([250,80,80]):i.fill("black"),i.circle(c,C,20),i.noStroke(),i.fill("white");const D=_(s,f,n);i.text(D,c-i.textWidth(D)/2,C+i.textSize()/2)}}},M=i=>{const{string:m,fret:p}=i,v=t.height/6,f=v*(5-m)+v/2;if(p===0)return{x:ae,y:f};const w=t.width/h[0].length;return{x:ae+w*(p-1)+w*.5,y:f}},H=i=>{i.setup=()=>{r(3,t=i),i.createCanvas(900,300),i.textStyle(i.BOLD)},i.draw=()=>{i.background([200,190,170]),g(i),E(i),i.noLoop()}};lt(()=>{t==null||t.remove()});const S=()=>r(0,n=n==="name"?"degree":"name");return l.$$set=i=>{"notesToDisplay"in i&&r(2,s=i.notesToDisplay)},l.$$.update=()=>{l.$$.dirty&13&&(s||n)&&(t==null||t.draw())},[n,H,s,t,S]}class at extends _e{constructor(e){super(),me(this,e,st,ot,ce,{notesToDisplay:2})}}const Pe=[{name:"Axis progression",examples:["Let it be","Take on me","Someone like you","Don't step believin'","Can you feel the love tonight","Let it go"],chords:[{degree:1},{degree:5},{degree:6,minor:!0},{degree:4}]},{name:"Other axis progression",examples:["Numb - Linkin Park","Kids - MGMT","Africa - Toto","Rivers flow in you (piano thingy)","Complicated - Avril Lavigne","Grenade","San Francisco","Save tonight"],chords:[{degree:6,minor:!0},{degree:4},{degree:1},{degree:5}]},{name:"Third axis progression",examples:["What's my age again?","Umbrella - Rihanna","Dragosta Din Tei","Boulevard of broken dreams (chorus)","Alejandro - Lady Gaga"],chords:[{degree:4},{degree:1},{degree:5},{degree:6,minor:!0}]},{name:"Andalusian cadence",examples:["Hit the road Jack","Good vibrations - The Beach boys","Happy together","Vanina"],chords:[{degree:1,minor:!0},{degree:7,flat:!0},{degree:6,flat:!0},{degree:5}]},{name:"Aeolian vamp",examples:["Rolling in the deep","All along the watchtower","Stairway to heaven","My hear will go on","Somebody that I used to know"],chords:[{degree:1,minor:!0},{degree:7,flat:!0},{degree:6,flat:!0},{degree:7,flat:!0}]},{name:"Doo-Woop change",examples:["I will always love you","Crocodile rock","Let's twist again","Baby - Justin Bieber"],chords:[{degree:1},{degree:6,minor:!0},{degree:4},{degree:5}]},{name:"Major scale vamp",examples:["Your body is a wonderland","All the small things - Blink 182"],chords:[{degree:1},{degree:5},{degree:4},{degree:5}]},{name:"Mixolydyan vamp",examples:["Hey Jude (Lalalalaa)","Sympathy for the devil","Sweet child o' mine","Royals - Lorde","Sweet home Alabama"],chords:[{degree:1},{degree:7,flat:!0},{degree:4},{degree:5}]},{name:"pachelbel's cannon",chords:[{degree:1},{degree:5},{degree:6,minor:!0},{degree:3,minor:!0},{degree:4},{degree:1},{degree:4},{degree:5}]},{name:"Plagal cascade",examples:["Wonderwall","Boulevard of broken dreams (couplet)","Mad world","Pumped up kids","Radioactive - Imagine Dragons"],chords:[{degree:1,minor:!0},{degree:3,flat:!0},{degree:7,flat:!0},{degree:4}]},{name:`"Can't stop" progression`,examples:["Can't stop","Cant't hold us - Mackelmore & Ryan Lewis"],chords:[{degree:1,minor:!0},{degree:7,flat:!0},{degree:5,minor:!0},{degree:6,flat:!0}]},{name:'"Closing time" progression',examples:["Closing time - Semisonic","SOS - ABBA","Believe - Cher","All star (Shrek)"],chords:[{degree:1},{degree:5},{degree:2,minor:!0},{degree:4}]},{name:'"More than a feeling" progression',examples:["More than a feeling","Mr Brightside - The Killers"],chords:[{degree:1},{degree:4},{degree:6,minor:!0},{degree:5}]},{name:"Classic blues slow change",chords:[{degree:1},{degree:1},{degree:1},{degree:1},{degree:4},{degree:4},{degree:1},{degree:1},{degree:5},{degree:4},{degree:1},{degree:5}]},{name:"Classic blues quick change",chords:[{degree:1},{degree:4},{degree:1},{degree:1},{degree:4},{degree:4},{degree:1},{degree:1},{degree:5},{degree:4},{degree:1},{degree:5}]},{name:"Classic rock",chords:[{degree:1},{degree:4},{degree:1},{degree:1},{degree:4},{degree:4},{degree:1},{degree:1},{degree:5},{degree:5},{degree:1},{degree:1}]}];function Re(l,e,r){const t=l.slice();return t[3]=e[r],t}function Oe(l,e,r){const t=l.slice();return t[6]=e[r],t}function ze(l,e,r){const t=l.slice();return t[6]=e[r],t}function it(l){let e,r,t="Examples:",n,s=l[3].examples.join(", ")+"",a;return{c(){e=$("span"),r=$("b"),r.textContent=t,n=A(),a=U(s)},l(h){e=y(h,"SPAN",{});var g=I(e);r=y(g,"B",{"data-svelte-h":!0}),ue(r)!=="svelte-1jvpsk3"&&(r.textContent=t),n=L(g),a=q(g,s),g.forEach(u)},m(h,g){N(h,e,g),b(e,r),b(e,n),b(e,a)},d(h){h&&u(e)}}}function He(l){let e,r=l[0](l[6])+"",t;return{c(){e=$("th"),t=U(r),this.h()},l(n){e=y(n,"TH",{class:!0});var s=I(e);t=q(s,r),s.forEach(u),this.h()},h(){W(e,"class","svelte-14ztni8")},m(n,s){N(n,e,s),b(e,t)},p:J,d(n){n&&u(e)}}}function je(l){let e,r=l[1](l[6])+"",t;return{c(){e=$("td"),t=U(r),this.h()},l(n){e=y(n,"TD",{class:!0});var s=I(e);t=q(s,r),s.forEach(u),this.h()},h(){W(e,"class","svelte-14ztni8")},m(n,s){N(n,e,s),b(e,t)},p:J,d(n){n&&u(e)}}}function Fe(l){let e,r,t=l[3].name+"",n,s,a,h,g,_,E,M,H,S=l[3].examples&&it(l),i=j(l[3].chords),m=[];for(let f=0;f<i.length;f+=1)m[f]=He(ze(l,i,f));let p=j(l[3].chords),v=[];for(let f=0;f<p.length;f+=1)v[f]=je(Oe(l,p,f));return{c(){e=$("div"),r=$("h4"),n=U(t),s=A(),S&&S.c(),a=A(),h=$("table"),g=$("tr");for(let f=0;f<m.length;f+=1)m[f].c();_=A(),E=$("tr");for(let f=0;f<v.length;f+=1)v[f].c();M=A(),H=$("br")},l(f){e=y(f,"DIV",{});var w=I(e);r=y(w,"H4",{});var c=I(r);n=q(c,t),c.forEach(u),s=L(w),S&&S.l(w),a=L(w),h=y(w,"TABLE",{});var C=I(h);g=y(C,"TR",{});var D=I(g);for(let G=0;G<m.length;G+=1)m[G].l(D);D.forEach(u),_=L(C),E=y(C,"TR",{});var K=I(E);for(let G=0;G<v.length;G+=1)v[G].l(K);K.forEach(u),C.forEach(u),w.forEach(u),M=L(f),H=y(f,"BR",{})},m(f,w){N(f,e,w),b(e,r),b(r,n),b(e,s),S&&S.m(e,null),b(e,a),b(e,h),b(h,g);for(let c=0;c<m.length;c+=1)m[c]&&m[c].m(g,null);b(h,_),b(h,E);for(let c=0;c<v.length;c+=1)v[c]&&v[c].m(E,null);N(f,M,w),N(f,H,w)},p(f,w){if(w&1){i=j(f[3].chords);let c;for(c=0;c<i.length;c+=1){const C=ze(f,i,c);m[c]?m[c].p(C,w):(m[c]=He(C),m[c].c(),m[c].m(g,null))}for(;c<m.length;c+=1)m[c].d(1);m.length=i.length}if(w&2){p=j(f[3].chords);let c;for(c=0;c<p.length;c+=1){const C=Oe(f,p,c);v[c]?v[c].p(C,w):(v[c]=je(C),v[c].c(),v[c].m(E,null))}for(;c<v.length;c+=1)v[c].d(1);v.length=p.length}},d(f){f&&(u(e),u(M),u(H)),S&&S.d(),Z(m,f),Z(v,f)}}}function ct(l){let e,r="Progressions",t,n,s=j(Pe),a=[];for(let h=0;h<s.length;h+=1)a[h]=Fe(Re(l,s,h));return{c(){e=$("h3"),e.textContent=r,t=A();for(let h=0;h<a.length;h+=1)a[h].c();n=ie()},l(h){e=y(h,"H3",{"data-svelte-h":!0}),ue(e)!=="svelte-xukbl8"&&(e.textContent=r),t=L(h);for(let g=0;g<a.length;g+=1)a[g].l(h);n=ie()},m(h,g){N(h,e,g),N(h,t,g);for(let _=0;_<a.length;_+=1)a[_]&&a[_].m(h,g);N(h,n,g)},p(h,[g]){if(g&3){s=j(Pe);let _;for(_=0;_<s.length;_+=1){const E=Re(h,s,_);a[_]?a[_].p(E,g):(a[_]=Fe(E),a[_].c(),a[_].m(n.parentNode,n))}for(;_<a.length;_+=1)a[_].d(1);a.length=s.length}},i:J,o:J,d(h){h&&(u(e),u(t),u(n)),Z(a,h)}}}function ht(l,e,r){let{scaleNotes:t=[]}=e;const n=a=>{let h=Ce(a.degree);return a.minor&&(h=h.toLowerCase()),a.flat&&(h="b"+h),h},s=a=>{const h=t[a.degree-1];let g=V.indexOf(h);a.flat&&(g--,g===-1&&(g=V.length-1));let _=V[g];return a.minor&&(_+="m"),_};return l.$$set=a=>{"scaleNotes"in a&&r(2,t=a.scaleNotes)},[n,s,t]}class ft extends _e{constructor(e){super(),me(this,e,ht,ct,ce,{scaleNotes:2})}}function Ge(l,e,r){const t=l.slice();return t[10]=e[r],t}function We(l,e,r){const t=l.slice();return t[13]=e[r],t[15]=r,t}function Ve(l,e,r){const t=l.slice();return t[2]=e[r],t}function Je(l,e,r){const t=l.slice();return t[1]=e[r],t}function dt(l,e,r){const t=l.slice();return t[10]=e[r],t}function gt(l){let e,r,t;return{c(){e=$("option"),r=U(l[10]),t=A(),this.h()},l(n){e=y(n,"OPTION",{});var s=I(e);r=q(s,l[10]),t=L(s),s.forEach(u),this.h()},h(){e.__value=l[10],ye(e,e.__value)},m(n,s){N(n,e,s),b(e,r),b(e,t)},p:J,d(n){n&&u(e)}}}function Ue(l){let e,r=l[1].name+"",t,n;return{c(){e=$("option"),t=U(r),n=A(),this.h()},l(s){e=y(s,"OPTION",{});var a=I(e);t=q(a,r),n=L(a),a.forEach(u),this.h()},h(){e.__value=l[1],ye(e,e.__value)},m(s,a){N(s,e,a),b(e,t),b(e,n)},p:J,d(s){s&&u(e)}}}function qe(l){let e,r=l[2].name+"",t,n;return{c(){e=$("option"),t=U(r),n=A(),this.h()},l(s){e=y(s,"OPTION",{});var a=I(e);t=q(a,r),n=L(a),a.forEach(u),this.h()},h(){e.__value=l[2],ye(e,e.__value)},m(s,a){N(s,e,a),b(e,t),b(e,n)},p:J,d(s){s&&u(e)}}}function Ke(l){let e,r=Ce(l[15]+1)+"",t;return{c(){e=$("th"),t=U(r),this.h()},l(n){e=y(n,"TH",{class:!0});var s=I(e);t=q(s,r),s.forEach(u),this.h()},h(){W(e,"class","svelte-14ztni8")},m(n,s){N(n,e,s),b(e,t)},p:J,d(n){n&&u(e)}}}function Xe(l){let e,r=l[10]+"",t;return{c(){e=$("td"),t=U(r),this.h()},l(n){e=y(n,"TD",{class:!0});var s=I(e);t=q(s,r),s.forEach(u),this.h()},h(){W(e,"class","svelte-14ztni8")},m(n,s){N(n,e,s),b(e,t)},p(n,s){s&8&&r!==(r=n[10]+"")&&Ze(t,r)},d(n){n&&u(e)}}}function Ye(l){let e=l[3],r,t,n=Qe(l);return{c(){n.c(),r=ie()},l(s){n.l(s),r=ie()},m(s,a){n.m(s,a),N(s,r,a),t=!0},p(s,a){a&8&&ce(e,e=s[3])?(et(),ee(n,1,1,J),tt(),n=Qe(s),n.c(),Y(n,1),n.m(r.parentNode,r)):n.p(s,a)},i(s){t||(Y(n),t=!0)},o(s){ee(n),t=!1},d(s){s&&u(r),n.d(s)}}}function Qe(l){let e,r;return e=new ft({props:{scaleNotes:l[3]}}),{c(){ve(e.$$.fragment)},l(t){pe(e.$$.fragment,t)},m(t,n){be(e,t,n),r=!0},p(t,n){const s={};n&8&&(s.scaleNotes=t[3]),e.$set(s)},i(t){r||(Y(e.$$.fragment,t),r=!0)},o(t){ee(e.$$.fragment,t),r=!1},d(t){ke(e,t)}}}function ut(l){let e,r="Scales",t,n,s,a='<th class="svelte-14ztni8"><label for="tonicInput">Tonic</label></th> <th class="svelte-14ztni8"><label for="scaleInput">Scale</label></th> <th class="svelte-14ztni8"><label for="modeInput">mode</label></th>',h,g,_,E,M,H,S,i,m,p,v,f,w,c,C,D,K,G,Q,he,Ee=["Major","Natural minor"].includes(l[1].name),te,fe,Te,Se,Ie=j(V),X=[];for(let o=0;o<Ie.length;o+=1)X[o]=gt(dt(l,Ie,o));let le=j(l[4]),P=[];for(let o=0;o<le.length;o+=1)P[o]=Ue(Je(l,le,o));let ne=j(l[5]),R=[];for(let o=0;o<ne.length;o+=1)R[o]=qe(Ve(l,ne,o));let re=j(l[3]),O=[];for(let o=0;o<re.length;o+=1)O[o]=Ke(We(l,re,o));let oe=j(l[3]),z=[];for(let o=0;o<oe.length;o+=1)z[o]=Xe(Ge(l,oe,o));Q=new at({props:{notesToDisplay:l[3]}});let x=Ee&&Ye(l);return{c(){e=$("h2"),e.textContent=r,t=A(),n=$("table"),s=$("tr"),s.innerHTML=a,h=A(),g=$("tr"),_=$("td"),E=$("select");for(let o=0;o<X.length;o+=1)X[o].c();M=A(),H=$("td"),S=$("select");for(let o=0;o<P.length;o+=1)P[o].c();i=A(),m=$("td"),p=$("select");for(let o=0;o<R.length;o+=1)R[o].c();v=A(),f=$("br"),w=A(),c=$("table"),C=$("tr");for(let o=0;o<O.length;o+=1)O[o].c();D=A(),K=$("tr");for(let o=0;o<z.length;o+=1)z[o].c();G=A(),ve(Q.$$.fragment),he=A(),x&&x.c(),te=ie(),this.h()},l(o){e=y(o,"H2",{"data-svelte-h":!0}),ue(e)!=="svelte-b2sc71"&&(e.textContent=r),t=L(o),n=y(o,"TABLE",{});var T=I(n);s=y(T,"TR",{"data-svelte-h":!0}),ue(s)!=="svelte-allvrg"&&(s.innerHTML=a),h=L(T),g=y(T,"TR",{});var k=I(g);_=y(k,"TD",{class:!0});var d=I(_);E=y(d,"SELECT",{id:!0});var F=I(E);for(let B=0;B<X.length;B+=1)X[B].l(F);F.forEach(u),d.forEach(u),M=L(k),H=y(k,"TD",{class:!0});var Ne=I(H);S=y(Ne,"SELECT",{id:!0});var xe=I(S);for(let B=0;B<P.length;B+=1)P[B].l(xe);xe.forEach(u),Ne.forEach(u),i=L(k),m=y(k,"TD",{class:!0});var De=I(m);p=y(De,"SELECT",{id:!0});var Be=I(p);for(let B=0;B<R.length;B+=1)R[B].l(Be);Be.forEach(u),De.forEach(u),k.forEach(u),T.forEach(u),v=L(o),f=y(o,"BR",{}),w=L(o),c=y(o,"TABLE",{});var de=I(c);C=y(de,"TR",{});var Ae=I(C);for(let B=0;B<O.length;B+=1)O[B].l(Ae);Ae.forEach(u),D=L(de),K=y(de,"TR",{});var Le=I(K);for(let B=0;B<z.length;B+=1)z[B].l(Le);Le.forEach(u),de.forEach(u),G=L(o),pe(Q.$$.fragment,o),he=L(o),x&&x.l(o),te=ie(),this.h()},h(){W(E,"id","tonicInput"),l[0]===void 0&&we(()=>l[6].call(E)),W(_,"class","svelte-14ztni8"),W(S,"id","scaleInput"),l[1]===void 0&&we(()=>l[7].call(S)),W(H,"class","svelte-14ztni8"),W(p,"id","modeInput"),l[2]===void 0&&we(()=>l[8].call(p)),W(m,"class","svelte-14ztni8")},m(o,T){N(o,e,T),N(o,t,T),N(o,n,T),b(n,s),b(n,h),b(n,g),b(g,_),b(_,E);for(let k=0;k<X.length;k+=1)X[k]&&X[k].m(E,null);se(E,l[0],!0),b(g,M),b(g,H),b(H,S);for(let k=0;k<P.length;k+=1)P[k]&&P[k].m(S,null);se(S,l[1],!0),b(g,i),b(g,m),b(m,p);for(let k=0;k<R.length;k+=1)R[k]&&R[k].m(p,null);se(p,l[2],!0),N(o,v,T),N(o,f,T),N(o,w,T),N(o,c,T),b(c,C);for(let k=0;k<O.length;k+=1)O[k]&&O[k].m(C,null);b(c,D),b(c,K);for(let k=0;k<z.length;k+=1)z[k]&&z[k].m(K,null);N(o,G,T),be(Q,o,T),N(o,he,T),x&&x.m(o,T),N(o,te,T),fe=!0,Te||(Se=[ge(E,"change",l[6]),ge(S,"change",l[7]),ge(p,"change",l[8])],Te=!0)},p(o,[T]){if(T&1&&se(E,o[0]),T&16){le=j(o[4]);let d;for(d=0;d<le.length;d+=1){const F=Je(o,le,d);P[d]?P[d].p(F,T):(P[d]=Ue(F),P[d].c(),P[d].m(S,null))}for(;d<P.length;d+=1)P[d].d(1);P.length=le.length}if(T&18&&se(S,o[1]),T&32){ne=j(o[5]);let d;for(d=0;d<ne.length;d+=1){const F=Ve(o,ne,d);R[d]?R[d].p(F,T):(R[d]=qe(F),R[d].c(),R[d].m(p,null))}for(;d<R.length;d+=1)R[d].d(1);R.length=ne.length}if(T&36&&se(p,o[2]),T&8){re=j(o[3]);let d;for(d=0;d<re.length;d+=1){const F=We(o,re,d);O[d]?O[d].p(F,T):(O[d]=Ke(F),O[d].c(),O[d].m(C,null))}for(;d<O.length;d+=1)O[d].d(1);O.length=re.length}if(T&8){oe=j(o[3]);let d;for(d=0;d<oe.length;d+=1){const F=Ge(o,oe,d);z[d]?z[d].p(F,T):(z[d]=Xe(F),z[d].c(),z[d].m(K,null))}for(;d<z.length;d+=1)z[d].d(1);z.length=oe.length}const k={};T&8&&(k.notesToDisplay=o[3]),Q.$set(k),T&2&&(Ee=["Major","Natural minor"].includes(o[1].name)),Ee?x?(x.p(o,T),T&2&&Y(x,1)):(x=Ye(o),x.c(),Y(x,1),x.m(te.parentNode,te)):x&&(et(),ee(x,1,1,()=>{x=null}),tt())},i(o){fe||(Y(Q.$$.fragment,o),Y(x),fe=!0)},o(o){ee(Q.$$.fragment,o),ee(x),fe=!1},d(o){o&&(u(e),u(t),u(n),u(v),u(f),u(w),u(c),u(G),u(he),u(te)),Z(X,o),Z(P,o),Z(R,o),Z(O,o),Z(z,o),ke(Q,o),x&&x.d(o),Te=!1,nt(Se)}}}function _t(l,e,r){const t=[{name:"Major",intervals:[2,2,1,2,2,2,1]},{name:"Natural minor",intervals:[2,1,2,2,1,2,2]},{name:"Pentatonic major",intervals:[2,2,3,2,3]},{name:"Pentatonic minor",intervals:[3,2,2,3,2]}],n=[{name:"Ionian",degree:1},{name:"Dorian",degree:2},{name:"Phrygian",degree:3},{name:"Lydian",degree:4},{name:"Mixolydian",degree:5},{name:"Aeolian",degree:6},{name:"Locrian",degree:7}];let s="C",a=t[0],h=n[0],g=[];const _=(S,i,m)=>{const{intervals:p}=i;r(3,g=[S]);const v=V.indexOf(S);if(v===-1)throw new Error(`Tonic ${S} not found`);let f=v;for(const w of p)f=(f+w)%V.length,g.push(V[f]);g.pop();for(let w=1;w<m.degree;w++)g.push(g.shift())};function E(){s=$e(this),r(0,s)}function M(){a=$e(this),r(1,a),r(4,t)}function H(){h=$e(this),r(2,h),r(5,n)}return l.$$.update=()=>{l.$$.dirty&7&&_(s,a,h)},[s,a,h,g,t,n,E,M,H]}class mt extends _e{constructor(e){super(),me(this,e,_t,ut,ce,{})}}function vt(l){let e,r;return e=new mt({}),{c(){ve(e.$$.fragment)},l(t){pe(e.$$.fragment,t)},m(t,n){be(e,t,n),r=!0},p:J,i(t){r||(Y(e.$$.fragment,t),r=!0)},o(t){ee(e.$$.fragment,t),r=!1},d(t){ke(e,t)}}}class Tt extends _e{constructor(e){super(),me(this,e,null,vt,ce,{})}}export{Tt as component};
