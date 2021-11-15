var j=Object.defineProperty;var z=(i,e,n)=>e in i?j(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n;var x=(i,e,n)=>(z(i,typeof e!="symbol"?e+"":e,n),n);import{G as P,d as v,r as y,A as B,C as G,o as U,T as $,s as O,a as F,b as l,c,F as _,e as M,u,w as A,v as E,f as H,t as q,g as w,i as I,h as k,j as C,k as D,l as L,m as K}from"./vendor.08863a3d.js";const R=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}};R();class h{constructor(...e){x(this,"elements",[]);this.elements=e}get e(){return this.elements}get dim(){return this.elements.length}get as2D(){if(this.dim>2){let e=new g(new h(1,0),new h(0,-1),new h(.5*Math.cos(Math.atan(2)),-.5*Math.sin(Math.atan(2))));return this.multiply(e)}else return this}lineParams(){if(this.dim>3)throw new Error("Can only get line params for vector with max dimension 4");if(this.dim==1)return[0,0,this.elements[0],0];if(this.dim==2)return[0,0,this.elements[0],-this.elements[1]];{let e=this.as2D;return[0,0,e.e[0],e.e[1]]}}multiply(e){if(typeof e=="number")return new h(...this.elements.map(n=>n*e));{let n=new h;for(const t in this.e){let s=0;for(const r in e.e)s+=e.e[r].e[t]*this.e[r];n.e.push(s)}return n}}}class g{constructor(...e){x(this,"elements",[]);this.elements=e}get e(){return this.elements}multiply(e){if(typeof e=="number")return new g(...this.elements.map(n=>n.multiply(e)));{let n=new g;for(const t of e.e)n.e.push(t.multiply(this));return n}}}class W{constructor(e,n,t,s,r=3,a=0,d=null){x(this,"width");x(this,"color");x(this,"_x1",0);x(this,"_x2",0);x(this,"_y1",0);x(this,"_y2",0);x(this,"graphics",new P);this.x1=e,this.x2=t,this.y1=n,this.y2=s,this.width=3,this.color=a,this._reset()}get y1(){return this._y1}set y1(e){this._y1=e,this._reset()}get y2(){return this._y2}set y2(e){this._y2=e,this._reset()}get x1(){return this._x1}set x1(e){this._x1=e,this._reset()}get x2(){return this._x2}set x2(e){this._x2=e,this._reset()}_reset(){this.graphics.clear(),this.graphics.lineStyle(this.width,this.color),this.graphics.moveTo(this.x1,this.y1),this.graphics.lineTo(this.x2,this.y2)}get startVector(){return new h(this.x1,this.y1)}set startVector(e){this.x1=e.e[0],this.y1=e.e[1],this._reset()}get endVector(){return new h(this.x2,this.y2)}set endVector(e){this.x2=e.e[0],this.y2=e.e[1],this._reset()}get vectors(){return[this.startVector,this.endVector]}set vectors(e){this.startVector=e[0],this.endVector=e[1],this._reset()}}const S=v({props:{vectors:null,bases:null},setup(i){const e=i,n=200,t=200,s=y(null),r=new B({antialias:!0,width:n,height:t,backgroundColor:16777215});let a=new G,d=[];return U(()=>{s==null||s.value.appendChild(r.view);const o=new P,p=new $("X");p.x=n-20,p.y=t/2-30,r.stage.addChild(p),o.lineStyle(2,7829367),o.moveTo(0,t/2),o.lineTo(n,t/2);const m=new $("Y");if(m.x=n/2-25,m.y=0,r.stage.addChild(m),o.lineStyle(2,7829367),o.moveTo(n/2,0),o.lineTo(n/2,t),r.stage.addChild(o),e.vectors.some(f=>f.dim>=3)){const f=new $("Z");f.x=n/2+Math.tan(Math.PI/2-Math.atan(2))*t/2,f.y=0,r.stage.addChild(f),o.lineStyle(2,7829367),o.moveTo(n/2+Math.tan(Math.PI/2-Math.atan(2))*t/2,0),o.lineTo(n/2-Math.tan(Math.PI/2-Math.atan(2))*(t/2),t),r.stage.addChild(o)}if(a.x=r.screen.width/2,a.y=r.screen.height/2,r.stage.addChild(a),e.vectors){const f=["Aqua","Chocolate","red","SeaGreen","SlateGrey"];for(const V in e.vectors){let b=e.vectors[V].lineParams(),T=new W(b[0],b[1],b[2],b[3],3,O(f[V]));a.addChild(T.graphics),d.push(T)}}}),F(()=>{for(const o in e.vectors)d[o].y2=e.vectors[o].lineParams()[3],d[o].x2=e.vectors[o].lineParams()[2]}),(o,p)=>(l(),c("div",{ref:(m,f)=>{f.root=m,s.value=m}},null,512))}}),X={class:"w-auto inline-block border-l-4 border-r-4 border-black"},Y={class:"object-fill flex"},Z=["onUpdate:modelValue"],J=v({props:{cols:null,rows:null},emits:["matrixChange"],setup(i,{emit:e}){const n=i;let t=y(Array(n.rows).fill(0).map(()=>Array(n.cols).fill(0)));for(let s=0;s<Math.min(n.cols,n.rows);s++)t.value[s][s]=1;return e("matrixChange",t.value),console.log(t),(s,r)=>(l(),c("div",X,[(l(!0),c(_,null,M(u(t),(a,d)=>(l(),c("div",Y,[(l(!0),c(_,null,M(a,(o,p)=>A((l(),c("input",{class:"flex-auto w-6 text-center","onUpdate:modelValue":m=>u(t)[p][d]=m,onInput:r[0]||(r[0]=m=>s.$emit("matrixChange",u(t)))},null,40,Z)),[[E,u(t)[p][d]]])),256))]))),256))]))}}),Q={class:"w-auto inline-block border-l-4 border-r-4 border-black"},ee={class:"object-fill flex"},te={class:"flex-auto w-20 text-center"},se=["onUpdate:modelValue"],ne=v({props:{cols:null,rows:null},emits:["matrixChange"],setup(i,{emit:e}){const n=i;let t=y(Array(n.rows).fill(0).map(()=>Array(n.cols).fill(0)));for(let s=0;s<Math.min(n.cols,n.rows);s++)t.value[s][s]=1;return e("matrixChange",t.value),console.log(t),(s,r)=>(l(),c("div",Q,[(l(!0),c(_,null,M(u(t),(a,d)=>(l(),c("div",ee,[(l(!0),c(_,null,M(a,(o,p)=>(l(),c("div",te,[H(q(u(t)[d][p])+" ",1),A(w("input",{onInput:r[0]||(r[0]=m=>s.$emit("matrixChange",u(t))),type:"range","onUpdate:modelValue":m=>u(t)[d][p]=m,class:"container pr-1 pl-1",min:"-3",max:"3",step:"0.1"},null,40,se),[[E,u(t)[d][p]]])]))),256))]))),256))]))}}),re={class:"flex-col",style:{"align-items":"center"}},oe=v({props:{cols:null,rows:null},setup(i){let e=y("cisla");return(n,t)=>(l(),c("div",re,[u(e)==="cisla"?(l(),c("button",{key:0,class:"butt block text-center m-auto",onClick:t[0]||(t[0]=s=>I(e)?e.value="posuvniky":e="posuvniky")},"P\u0159epnout na \u010D\xEDsla")):k("",!0),u(e)==="cisla"?(l(),C(J,{key:1,cols:i.cols,rows:i.rows,onMatrixChange:t[1]||(t[1]=s=>n.$emit("matrixChange",s))},null,8,["cols","rows"])):k("",!0),u(e)==="posuvniky"?(l(),c("button",{key:2,class:"butt block text-center m-auto",onClick:t[2]||(t[2]=s=>I(e)?e.value="cisla":e="cisla")},"P\u0159epnout na posuvn\xEDky")):k("",!0),u(e)==="posuvniky"?(l(),C(ne,{key:3,cols:i.cols,rows:i.rows,onMatrixChange:t[3]||(t[3]=s=>n.$emit("matrixChange",s))},null,8,["cols","rows"])):k("",!0)]))}}),ie={class:"flex items-center justify-between flex-wrap"},N=v({props:{inputvectors:null,mcols:null,mrows:null},setup(i){const e=i;let n=new g(new h(0,0),new h(0,0));y(null);let t=0,s=d=>{n=new g(...d.map(o=>new h(...o))),console.log("Input vectors:",r.value),a.value=r.value.map(o=>o.multiply(n)),t=t+1,console.log(t)},r=y(e.inputvectors),a=y([]);return s([[1,0],[0,1]]),(d,o)=>(l(),c("div",ie,[(l(),C(D(S),{vectors:u(r),id:"leftMatrix"},null,8,["vectors"])),(l(),C(D(oe),{rows:i.mrows,cols:i.mcols,class:"flex-shrink",onMatrixChange:u(s)},null,8,["rows","cols","onMatrixChange"])),(l(),C(D(S),{vectors:u(a),id:"rightMatrix"},null,8,["vectors"]))]))}});const le=w("h1",{class:"text-7xl mb-10"},"Ba\u0161tovo web na matiku",-1),ae={class:"container m-auto"},ce=w("h2",{class:"text-3xl"},"Matice lin. zobrazen\xED",-1),ue={class:"container m-auto"},he=w("h2",{class:"text-3xl"},"Line\xE1rn\xED zobrazen\xED ve 3D",-1),de=v({setup(i){const e=[new h(50,0),new h(0,50)],n=[new h(50,0,0),new h(0,50,0),new h(0,0,50)];return(t,s)=>(l(),c(_,null,[le,w("div",ae,[ce,L(N,{mcols:2,mrows:2,inputvectors:e})]),w("div",ue,[he,L(N,{inputvectors:n,mcols:3,mrows:3})])],64))}});K(de).mount("#app");
