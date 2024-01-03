import{s as Q,f as h,a as N,l as ut,g as d,h as x,N as S,c as P,m as ht,d as g,j as v,k as q,G as Z,i as F,H as o,w as D,n as wt,r as R,A as vt,V as rt,W as ct,o as xt,I as Bt,e as bt}from"../chunks/scheduler.c1HY8KFf.js";import{S as G,i as Y,b as X,d as tt,m as et,a as nt,t as st,e as ot}from"../chunks/index.HRhZFR8d.js";import{a as Tt,o as Ct}from"../chunks/store.xfbYrcjM.js";import{P as It}from"../chunks/P5.w2Pv077y.js";import{T as kt}from"../chunks/TapTempo.Oc7is1s8.js";class yt{audioContext;notesInQueue=[];currentBeatInBar;beatsPerBar;currentSubdivision;subdivisionsInBeat;tempo;lookahead;scheduleAheadTime;nextNoteTime;isRunning;intervalID;onBeatStart;onBeatEnd;constructor(t=80){this.audioContext=null,this.notesInQueue=[],this.currentBeatInBar=0,this.currentSubdivision=0,this.subdivisionsInBeat=1,this.beatsPerBar=4,this.tempo=t,this.lookahead=25,this.scheduleAheadTime=.1,this.nextNoteTime=0,this.isRunning=!1,this.intervalID=null}nextNote(){var t=60/this.subdivisionsInBeat/this.tempo;this.nextNoteTime+=t,this.currentSubdivision++,this.currentSubdivision>=this.subdivisionsInBeat&&(this.currentBeatInBar++,this.currentSubdivision=0),this.currentBeatInBar>=this.beatsPerBar&&(this.currentBeatInBar=0)}scheduleNote(t,n,e){if(console.log("schedule note"),!this.audioContext){console.log("no audio context stopping scheduler");return}this.notesInQueue.push({note:t,time:e});const s=this.audioContext.createOscillator(),a=this.audioContext.createGain(),l=1e3,c=400,f=200;n!==0?s.frequency.value=f:t%this.beatsPerBar===0?s.frequency.value=l:s.frequency.value=c,a.gain.value=1,a.gain.exponentialRampToValueAtTime(1,e+.001),a.gain.exponentialRampToValueAtTime(.001,e+.02),s.connect(a),a.connect(this.audioContext.destination);const u=this.audioContext.createConstantSource();console.log({constantSourceNode:u}),u.onended=()=>{console.log("on constantSourceNode ended"),this.onBeatStart&&this.onBeatStart(t,n),s.start(),s.stop(e+.03),s.onended=()=>{this.onBeatEnd&&this.onBeatEnd()}},u.start(e),u.stop(this.audioContext.currentTime+1e-4),console.log("done scheduleNote")}scheduler(){if(!this.audioContext){console.log("no audio context, stopping scheduler");return}for(;this.nextNoteTime<this.audioContext.currentTime+this.scheduleAheadTime;)this.scheduleNote(this.currentBeatInBar,this.currentSubdivision,this.nextNoteTime),this.nextNote()}start(){if(console.log("metronome start"),this.isRunning){console.log("already running");return}this.audioContext||(console.log("trying to create new audio context"),this.audioContext=new(window.AudioContext||window.webkitAudioContext)),console.log("audio context ready"),this.isRunning=!0,this.currentBeatInBar=0,this.currentSubdivision=0,this.nextNoteTime=this.audioContext.currentTime+.05,console.log("start interval"),this.intervalID=setInterval(()=>this.scheduler(),this.lookahead)}stop(){this.isRunning=!1,this.intervalID&&clearInterval(this.intervalID)}startStop(){this.isRunning?(console.log("startstop stop"),this.stop()):(console.log("startstop start"),this.start())}}function Mt(i){let t,n,e,s="<h4>Beats in bar</h4>",a,l,c,f="-1",u,m,_=i[0].beatsPerBar+"",M,r,b,T="+1",V,E,B,C,I,L="<h4>Subdivisions in beat</h4>",k,w,p,y='<svg width="15" height="15" fill="blue" xmlns="http://www.w3.org/2000/svg" style="width: 15px; height: auto;"><path d="M 4.3 0 v 9.6 A 2.9 2.9 0 0 0 0 12.1 A 3 3 0 0 0 3 15 c 1.5 0 2.8 -1.3 2.8 -2.9 V 3 V 0 H 4.3 Z"></path></svg>',O,$,j='<svg width="15" height="15" fill="blue" xmlns="http://www.w3.org/2000/svg" style="width: 15px; height: auto;"><path d="M4.3 0v9.6A2.9 2.9 0 0 0 0 12.1 3 3 0 0 0 3 15c1.5 0 2.8-1.3 2.8-2.9V3h7.7v6.6a2.9 2.9 0 0 0-4.3 2.5 2.9 2.9 0 0 0 5.8 0V0H4.3Z"></path></svg>',A,H,it='<svg width="24" height="21" fill="blue" xmlns="http://www.w3.org/2000/svg" style="width: 24px; height: auto; top: -3px;"><path clip-rule="evenodd" d="M4.3 15.6V6H24v12.1a3 3 0 0 1-3 2.9 2.9 2.9 0 0 1-2.8-2.9 2.9 2.9 0 0 1 4.3-2.5V9H15v9.1a2.9 2.9 0 0 1-3 2.9 3 3 0 0 1-3-2.9 2.9 2.9 0 0 1 3-2.8c.5 0 1 0 1.3.3V9H5.8v9.1C5.8 19.7 4.5 21 3 21a3 3 0 0 1-3-2.9 2.9 2.9 0 0 1 4.3-2.5Z"></path><path d="M12.6 2.2 13.9.5V0h-3.1v.4h2.5l-1.4 1.7v.4h.4c.9 0 1.3.4 1.3 1s-.4 1-1.2 1c-.7 0-1.3-.3-1.6-.6l-.2.4c.4.4 1 .6 1.8.6 1.1 0 1.7-.6 1.7-1.4 0-.8-.5-1.3-1.5-1.4Z"></path></svg>',dt,W,ft='<svg width="27" height="13" fill="blue" xmlns="http://www.w3.org/2000/svg" style="width: 27px; height: auto;"><path clip-rule="evenodd" d="M3.5 0v7.9a2 2 0 0 0-1.1-.3C1 7.6 0 8.6 0 9.9c0 1.3 1 2.4 2.4 2.4 1.3 0 2.3-1 2.3-2.4V3.4H11V8a2 2 0 0 0-1.1-.3 2.3 2.3 0 1 0 0 4.7c1.3 0 2.4-1 2.4-2.4V3.4h6.1V8a2.4 2.4 0 0 0-1-.3c-1.4 0-2.5 1-2.5 2.3 0 1.3 1.1 2.4 2.4 2.4 1.3 0 2.4-1 2.4-2.4V3.4h6.2V8l-1.2-.3c-1.3 0-2.3 1-2.3 2.3a2.3 2.3 0 1 0 4.7 0V0H3.5Zm7.4 2.7H4.7V1.5H11v1.2Zm7.4 0h-6.1V1.5h6.1v1.2Zm1.3 0h6.2V1.5h-6.2v1.2Z"></path></svg>',mt,pt;return{c(){t=h("div"),n=h("div"),e=h("label"),e.innerHTML=s,a=N(),l=h("div"),c=h("button"),c.textContent=f,u=N(),m=h("span"),M=ut(_),r=N(),b=h("button"),b.textContent=T,V=N(),E=h("br"),B=N(),C=h("div"),I=h("label"),I.innerHTML=L,k=N(),w=h("div"),p=h("button"),p.innerHTML=y,O=N(),$=h("button"),$.innerHTML=j,A=N(),H=h("button"),H.innerHTML=it,dt=N(),W=h("button"),W.innerHTML=ft,this.h()},l(z){t=d(z,"DIV",{class:!0});var U=x(t);n=d(U,"DIV",{class:!0});var at=x(n);e=d(at,"LABEL",{for:!0,"data-svelte-h":!0}),S(e)!=="svelte-me1f1h"&&(e.innerHTML=s),a=P(at),l=d(at,"DIV",{class:!0});var J=x(l);c=d(J,"BUTTON",{"data-svelte-h":!0}),S(c)!=="svelte-1d4n1zi"&&(c.textContent=f),u=P(J),m=d(J,"SPAN",{style:!0});var gt=x(m);M=ht(gt,_),gt.forEach(g),r=P(J),b=d(J,"BUTTON",{"data-svelte-h":!0}),S(b)!=="svelte-g2gkw2"&&(b.textContent=T),J.forEach(g),at.forEach(g),V=P(U),E=d(U,"BR",{}),B=P(U),C=d(U,"DIV",{class:!0});var lt=x(C);I=d(lt,"LABEL",{for:!0,"data-svelte-h":!0}),S(I)!=="svelte-x5t5k1"&&(I.innerHTML=L),k=P(lt),w=d(lt,"DIV",{class:!0});var K=x(w);p=d(K,"BUTTON",{class:!0,"data-svelte-h":!0}),S(p)!=="svelte-7czod"&&(p.innerHTML=y),O=P(K),$=d(K,"BUTTON",{class:!0,"data-svelte-h":!0}),S($)!=="svelte-1p2rqi1"&&($.innerHTML=j),A=P(K),H=d(K,"BUTTON",{class:!0,"data-svelte-h":!0}),S(H)!=="svelte-72e2df"&&(H.innerHTML=it),dt=P(K),W=d(K,"BUTTON",{class:!0,"data-svelte-h":!0}),S(W)!=="svelte-rjuw0z"&&(W.innerHTML=ft),K.forEach(g),lt.forEach(g),U.forEach(g),this.h()},h(){v(e,"for","beatsInBar"),q(m,"font-size","large"),q(m,"margin-left","1em"),q(m,"margin-right","1em"),v(l,"class","subdivisions-container svelte-14nipte"),v(n,"class","controls-sub-container svelte-14nipte"),v(I,"for","subdivisionsInBeat"),v(p,"class","svelte-14nipte"),Z(p,"selected",i[0].subdivisionsInBeat===1),v($,"class","svelte-14nipte"),Z($,"selected",i[0].subdivisionsInBeat===2),v(H,"class","svelte-14nipte"),Z(H,"selected",i[0].subdivisionsInBeat===3),v(W,"class","svelte-14nipte"),Z(W,"selected",i[0].subdivisionsInBeat===4),v(w,"class","subdivisions-container svelte-14nipte"),v(C,"class","controls-sub-container svelte-14nipte"),v(t,"class","controls-container svelte-14nipte")},m(z,U){F(z,t,U),o(t,n),o(n,e),o(n,a),o(n,l),o(l,c),o(l,u),o(l,m),o(m,M),o(l,r),o(l,b),o(t,V),o(t,E),o(t,B),o(t,C),o(C,I),o(C,k),o(C,w),o(w,p),o(w,O),o(w,$),o(w,A),o(w,H),o(w,dt),o(w,W),mt||(pt=[D(c,"click",i[1]),D(b,"click",i[2]),D(p,"click",i[3]),D($,"click",i[4]),D(H,"click",i[5]),D(W,"click",i[6])],mt=!0)},p(z,[U]){U&1&&_!==(_=z[0].beatsPerBar+"")&&wt(M,_),U&1&&Z(p,"selected",z[0].subdivisionsInBeat===1),U&1&&Z($,"selected",z[0].subdivisionsInBeat===2),U&1&&Z(H,"selected",z[0].subdivisionsInBeat===3),U&1&&Z(W,"selected",z[0].subdivisionsInBeat===4)},i:R,o:R,d(z){z&&g(t),mt=!1,vt(pt)}}}function Vt(i,t,n){let{metronome:e}=t;const s=()=>n(0,e.beatsPerBar=Math.max(e.beatsPerBar-1,1),e),a=()=>n(0,e.beatsPerBar=Math.min(e.beatsPerBar+1,10),e),l=()=>n(0,e.subdivisionsInBeat=1,e),c=()=>n(0,e.subdivisionsInBeat=2,e),f=()=>n(0,e.subdivisionsInBeat=3,e),u=()=>n(0,e.subdivisionsInBeat=4,e);return i.$$set=m=>{"metronome"in m&&n(0,e=m.metronome)},[e,s,a,l,c,f,u]}class Et extends G{constructor(t){super(),Y(this,t,Vt,Mt,Q,{metronome:0})}}function Nt(i){let t,n,e,s="-5",a,l,c="-1",f,u,m,_,M,r,b,T,V="+1",E,B,C="+5",I,L;return{c(){t=h("div"),n=h("div"),e=h("button"),e.textContent=s,a=N(),l=h("button"),l.textContent=c,f=N(),u=h("div"),m=h("input"),M=ut(" BPM"),r=N(),b=h("div"),T=h("button"),T.textContent=V,E=N(),B=h("button"),B.textContent=C,this.h()},l(k){t=d(k,"DIV",{class:!0});var w=x(t);n=d(w,"DIV",{class:!0});var p=x(n);e=d(p,"BUTTON",{"data-svelte-h":!0}),S(e)!=="svelte-1ayjxgi"&&(e.textContent=s),a=P(p),l=d(p,"BUTTON",{"data-svelte-h":!0}),S(l)!=="svelte-1ri3s3e"&&(l.textContent=c),p.forEach(g),f=P(w),u=d(w,"DIV",{class:!0,style:!0});var y=x(u);m=d(y,"INPUT",{style:!0,type:!0,min:!0,max:!0}),M=ht(y," BPM"),y.forEach(g),r=P(w),b=d(w,"DIV",{class:!0});var O=x(b);T=d(O,"BUTTON",{"data-svelte-h":!0}),S(T)!=="svelte-1tvviti"&&(T.textContent=V),E=P(O),B=d(O,"BUTTON",{"data-svelte-h":!0}),S(B)!=="svelte-1vk0846"&&(B.textContent=C),O.forEach(g),w.forEach(g),this.h()},h(){v(n,"class","tempo-less svelte-oae4co"),q(m,"font-size","x-large"),q(m,"margin-right","0.1em"),v(m,"type","number"),v(m,"min","1"),v(m,"max","400"),m.value=_=i[0].tempo,v(u,"class","tempo-value svelte-oae4co"),q(u,"font-size","x-large"),v(b,"class","tempo-more svelte-oae4co"),v(t,"class","tempo-container svelte-oae4co")},m(k,w){F(k,t,w),o(t,n),o(n,e),o(n,a),o(n,l),o(t,f),o(t,u),o(u,m),o(u,M),o(t,r),o(t,b),o(b,T),o(b,E),o(b,B),I||(L=[D(e,"click",i[2]),D(l,"click",i[3]),D(m,"change",i[1]),D(T,"click",i[4]),D(B,"click",i[5])],I=!0)},p(k,[w]){w&1&&_!==(_=k[0].tempo)&&m.value!==_&&(m.value=_)},i:R,o:R,d(k){k&&g(t),I=!1,vt(L)}}}function Pt(i,t,n){let{metronome:e}=t;const s=u=>{if(!u||!u.target)return;const m=u.target,_=Number(m.value);!_||_<1||n(0,e.tempo=_,e)},a=()=>n(0,e.tempo=Number(e.tempo)-5,e),l=()=>n(0,e.tempo=Number(e.tempo)-1,e),c=()=>n(0,e.tempo=Number(e.tempo)+1,e),f=()=>n(0,e.tempo=Number(e.tempo)+5,e);return i.$$set=u=>{"metronome"in u&&n(0,e=u.metronome)},[e,s,a,l,c,f]}class St extends G{constructor(t){super(),Y(this,t,Pt,Nt,Q,{metronome:0})}}function $t(i){let t,n;return{c(){t=rt("svg"),n=rt("path"),this.h()},l(e){t=ct(e,"svg",{width:!0,height:!0,fill:!0,xmlns:!0,style:!0});var s=x(t);n=ct(s,"path",{d:!0}),x(n).forEach(g),s.forEach(g),this.h()},h(){v(n,"d","M 0 0 V 20 L 17 10"),v(t,"width","20"),v(t,"height","20"),v(t,"fill","blue"),v(t,"xmlns","http://www.w3.org/2000/svg"),q(t,"width","20px"),q(t,"height","auto")},m(e,s){F(e,t,s),o(t,n)},d(e){e&&g(t)}}}function Ht(i){let t,n;return{c(){t=rt("svg"),n=rt("path"),this.h()},l(e){t=ct(e,"svg",{width:!0,height:!0,fill:!0,xmlns:!0,style:!0});var s=x(t);n=ct(s,"path",{d:!0}),x(n).forEach(g),s.forEach(g),this.h()},h(){v(n,"d","M 0 0 V 20 L 6 20 L 6 0 L 0 0 M 9 0 V 20 H 15 V 0 H 9"),v(t,"width","20"),v(t,"height","20"),v(t,"fill","blue"),v(t,"xmlns","http://www.w3.org/2000/svg"),q(t,"width","20px"),q(t,"height","auto")},m(e,s){F(e,t,s),o(t,n)},d(e){e&&g(t)}}}function Dt(i){let t,n,e,s;function a(f,u){return f[0].isRunning?Ht:$t}let l=a(i),c=l(i);return{c(){t=h("div"),n=h("button"),c.c(),this.h()},l(f){t=d(f,"DIV",{class:!0});var u=x(t);n=d(u,"BUTTON",{style:!0});var m=x(n);c.l(m),m.forEach(g),u.forEach(g),this.h()},h(){q(n,"min-width","300px"),v(t,"class","controls-container svelte-1jo8tk4")},m(f,u){F(f,t,u),o(t,n),c.m(n,null),e||(s=[D(window,"keydown",i[2]),D(n,"click",i[1])],e=!0)},p(f,[u]){l!==(l=a(f))&&(c.d(1),c=l(f),c&&(c.c(),c.m(n,null)))},i:R,o:R,d(f){f&&g(t),c.d(),e=!1,vt(s)}}}function Lt(i,t,n){let{metronome:e}=t;const s=()=>{e.startStop(),n(0,e)},a=l=>{const c=" ";if([c].includes(l.key)&&(l.preventDefault(),l.key===c)){s();return}};return i.$$set=l=>{"metronome"in l&&n(0,e=l.metronome)},[e,s,a]}class Ot extends G{constructor(t){super(),Y(this,t,Lt,Dt,Q,{metronome:0})}}function Ut(i){let t,n,e;return n=new It({props:{sketch:i[0]}}),{c(){t=h("div"),X(n.$$.fragment),this.h()},l(s){t=d(s,"DIV",{id:!0,class:!0});var a=x(t);tt(n.$$.fragment,a),a.forEach(g),this.h()},h(){v(t,"id","canvas-container"),v(t,"class","d-flex justify-content-center")},m(s,a){F(s,t,a),et(n,t,null),e=!0},p:R,i(s){e||(nt(n.$$.fragment,s),e=!0)},o(s){st(n.$$.fragment,s),e=!1},d(s){s&&g(t),ot(n)}}}function qt(i,t,n){let{metronome:e}=t,s=!1,a=0,l=0;const c=(r,b)=>{console.log("beat start",{beatNumber:r,subdivisionNumber:b}),s=!0,a=r,l=b},f=()=>{s=!1};let u,m="white",_="white";const M=r=>{r.setup=()=>{u=r,r.createCanvas(600,300),r.textSize(40)},r.draw=()=>{const b=document.getElementById("canvas-container");if(b){const B=b?.clientWidth||600;r.width!==B&&r.resizeCanvas(B,Math.max(B/3,100))}r.clear(),r.stroke(m);const T=Math.min(r.width/e.beatsPerBar,r.height),V=r.height/e.subdivisionsInBeat;for(let B=0;B<e.beatsPerBar;B++){B===a?r.strokeWeight(5):r.strokeWeight(1),r.noFill(),r.circle(B*T+T/2,r.height/2,T*.9),r.strokeWeight(1);for(let C=0;C<e.subdivisionsInBeat;C++)s&&B===a&&C===l?r.fill(m):r.noFill(),r.circle(B*T+T/2,C*V+V/2,T/e.subdivisionsInBeat*.9)}s?r.fill(_):r.fill(m),r.fill(m);const E=(a+1).toString();r.text(E,a*T+T/2-r.textWidth(E)/2,r.height/2+r.textSize()/2)}};return xt(()=>{const r=getComputedStyle(document.body);m=r.getPropertyValue("--nc-tx-3"),_=r.getPropertyValue("--nc-tx-2"),n(1,e.onBeatStart=c,e),n(1,e.onBeatEnd=f,e)}),Bt(()=>{u?.remove()}),i.$$set=r=>{"metronome"in r&&n(1,e=r.metronome)},[M,e]}class At extends G{constructor(t){super(),Y(this,t,qt,Ut,Q,{metronome:1})}}function zt(i){let t,n,e="Tap",s,a;return{c(){t=h("div"),n=h("button"),n.textContent=e,this.h()},l(l){t=d(l,"DIV",{class:!0});var c=x(t);n=d(c,"BUTTON",{class:!0,"data-svelte-h":!0}),S(n)!=="svelte-1ln40k6"&&(n.textContent=e),c.forEach(g),this.h()},h(){v(n,"class","svelte-1gwle9f"),Z(n,"taped",i[0]),v(t,"class","controls-container svelte-1gwle9f")},m(l,c){F(l,t,c),o(t,n),s||(a=D(n,"click",i[1]),s=!0)},p(l,[c]){c&1&&Z(n,"taped",l[0])},i:R,o:R,d(l){l&&g(t),s=!1,a()}}}function Rt(i,t,n){let{onNewBPM:e}=t,s=new kt,a=!1;const l=()=>{s.addBeat(),n(0,a=!0),setTimeout(()=>n(0,a=!1),100),s.bpm>0&&e(Math.ceil(s.bpm))};return i.$$set=c=>{"onNewBPM"in c&&n(2,e=c.onNewBPM)},[a,l,e]}class Wt extends G{constructor(t){super(),Y(this,t,Rt,zt,Q,{onNewBPM:2})}}function _t(i){let t,n,e,s,a,l="Close",c,f,u=`This is a simple metronome:
                <ul><li>Use the play/pause button or the space bar to start and stop the metronome</li> <li>You can change the tempo by:</li> <ul><li>Entering a number directly in the input</li> <li>Using the -5, -1, +1 and +5 buttons</li> <li>Taping a tempo on the tap button. When taping the tempo each tap counts
                            for a subdivision if subdivisions are enabled. Stop taping for approx. 3
                            seconds to restart the tap counter.</li></ul> <li>The &quot;Beats in bar&quot; setting change the number of beats counted by the
                        metronome. The first beat is accented with a higher frequency tone.</li> <li>The &quot;Subdivisions in beat&quot; setting allow to change how the beats are
                        divided. The subdivisions after the first one are played with a lower
                        frequency tone.</li> <li>The visualization at the bottom follow the beats and their subdivisions.</li></ul>`,m,_,M,r,b="Bugs",T,V,E=`<li>While it goes against my opinion on what the web should look like, this page
                    works better with Chrome-based browsers.</li> <li>For some reason the display of the tempo settings is broken on Firefox, the
                    input doesn&#39;t resize properly.</li> <li>The sound doesn&#39;t work on Safari on iOS (and maybe on MacOS too).</li>`,B,C;return{c(){t=h("div"),n=h("div"),e=h("h4"),s=ut(`Metronome
                `),a=h("button"),a.textContent=l,c=N(),f=h("div"),f.innerHTML=u,m=N(),_=h("br"),M=N(),r=h("h5"),r.textContent=b,T=N(),V=h("ul"),V.innerHTML=E,this.h()},l(I){t=d(I,"DIV",{role:!0,class:!0});var L=x(t);n=d(L,"DIV",{class:!0});var k=x(n);e=d(k,"H4",{class:!0});var w=x(e);s=ht(w,`Metronome
                `),a=d(w,"BUTTON",{"data-svelte-h":!0}),S(a)!=="svelte-2m9p61"&&(a.textContent=l),w.forEach(g),c=P(k),f=d(k,"DIV",{"data-svelte-h":!0}),S(f)!=="svelte-1k2t2wt"&&(f.innerHTML=u),m=P(k),_=d(k,"BR",{}),M=P(k),r=d(k,"H5",{"data-svelte-h":!0}),S(r)!=="svelte-1fvxfob"&&(r.textContent=b),T=P(k),V=d(k,"UL",{"data-svelte-h":!0}),S(V)!=="svelte-19aw4nc"&&(V.innerHTML=E),k.forEach(g),L.forEach(g),this.h()},h(){v(e,"class","title-bar svelte-mmovoq"),v(n,"class","contents svelte-mmovoq"),v(t,"role","dialog"),v(t,"class","modal svelte-mmovoq")},m(I,L){F(I,t,L),o(t,n),o(n,e),o(e,s),o(e,a),o(n,c),o(n,f),o(n,m),o(n,_),o(n,M),o(n,r),o(n,T),o(n,V),B||(C=D(a,"click",Tt),B=!0)},d(I){I&&g(t),B=!1,C()}}}function Zt(i){let t,n=i[0]&&_t();return{c(){n&&n.c(),t=bt()},l(e){n&&n.l(e),t=bt()},m(e,s){n&&n.m(e,s),F(e,t,s)},p(e,[s]){e[0]?n||(n=_t(),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:R,o:R,d(e){e&&g(t),n&&n.d(e)}}}function Ft(i,t,n){let{isOpen:e}=t;return i.$$set=s=>{"isOpen"in s&&n(0,e=s.isOpen)},[e]}class jt extends G{constructor(t){super(),Y(this,t,Ft,Zt,Q,{isOpen:0})}}function Kt(i){let t,n,e,s,a,l='<i class="fa fa-info-circle" aria-hidden="true"></i>',c,f,u,m,_,M,r,b,T,V,E,B,C,I,L,k,w;return u=new Ot({props:{metronome:i[0]}}),M=new St({props:{metronome:i[0]}}),b=new Wt({props:{onNewBPM:i[2]}}),E=new Et({props:{metronome:i[0]}}),I=new At({props:{metronome:i[0]}}),{c(){t=h("div"),n=h("h3"),e=ut(`Metronome
        `),s=h("span"),a=h("button"),a.innerHTML=l,c=N(),f=h("div"),X(u.$$.fragment),m=N(),_=h("div"),X(M.$$.fragment),r=N(),X(b.$$.fragment),T=N(),V=h("div"),X(E.$$.fragment),B=N(),C=h("div"),X(I.$$.fragment),this.h()},l(p){t=d(p,"DIV",{class:!0});var y=x(t);n=d(y,"H3",{});var O=x(n);e=ht(O,`Metronome
        `),s=d(O,"SPAN",{});var $=x(s);a=d($,"BUTTON",{"data-svelte-h":!0}),S(a)!=="svelte-13whskn"&&(a.innerHTML=l),$.forEach(g),O.forEach(g),c=P(y),f=d(y,"DIV",{});var j=x(f);tt(u.$$.fragment,j),j.forEach(g),m=P(y),_=d(y,"DIV",{class:!0});var A=x(_);tt(M.$$.fragment,A),r=P(A),tt(b.$$.fragment,A),A.forEach(g),T=P(y),V=d(y,"DIV",{class:!0});var H=x(V);tt(E.$$.fragment,H),H.forEach(g),B=P(y),C=d(y,"DIV",{class:!0});var it=x(C);tt(I.$$.fragment,it),it.forEach(g),y.forEach(g),this.h()},h(){q(a,"position","relative"),v(_,"class","section svelte-1kxlsex"),v(V,"class","section svelte-1kxlsex"),v(C,"class","section svelte-1kxlsex"),v(t,"class","main svelte-1kxlsex")},m(p,y){F(p,t,y),o(t,n),o(n,e),o(n,s),o(s,a),o(t,c),o(t,f),et(u,f,null),o(t,m),o(t,_),et(M,_,null),o(_,r),et(b,_,null),o(t,T),o(t,V),et(E,V,null),o(t,B),o(t,C),et(I,C,null),L=!0,k||(w=D(a,"click",i[1]),k=!0)},p(p,[y]){const O={};y&1&&(O.metronome=p[0]),u.$set(O);const $={};y&1&&($.metronome=p[0]),M.$set($);const j={};y&1&&(j.onNewBPM=p[2]),b.$set(j);const A={};y&1&&(A.metronome=p[0]),E.$set(A);const H={};y&1&&(H.metronome=p[0]),I.$set(H)},i(p){L||(nt(u.$$.fragment,p),nt(M.$$.fragment,p),nt(b.$$.fragment,p),nt(E.$$.fragment,p),nt(I.$$.fragment,p),L=!0)},o(p){st(u.$$.fragment,p),st(M.$$.fragment,p),st(b.$$.fragment,p),st(E.$$.fragment,p),st(I.$$.fragment,p),L=!1},d(p){p&&g(t),ot(u),ot(M),ot(b),ot(E),ot(I),k=!1,w()}}}function Qt(i,t,n){console.log("before creating metronome");let e=new yt(80);return console.log("metronome"),console.log({metronome:e}),Bt(()=>{e.stop()}),[e,()=>Ct(jt),l=>{n(0,e.tempo=l/e.subdivisionsInBeat,e),n(0,e)}]}class ee extends G{constructor(t){super(),Y(this,t,Qt,Kt,Q,{})}}export{ee as component};