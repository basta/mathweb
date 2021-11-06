var g=Object.defineProperty;var x=(i,e,t)=>e in i?g(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var c=(i,e,t)=>(x(i,typeof e!="symbol"?e+"":e,t),t);import{G as y,A as w,T as f,C as v,o as _,c as C,d as T,a as V,b}from"./vendor.64730dac.js";const E=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}};E();class l{constructor(...e){c(this,"elements",[]);this.elements=e}get e(){return this.elements}lineParams(e){if(this.e.length!=2)throw new Error("Can only get line params for 2d vector");return[e.width/2,e.height/2,e.width/2+this.elements[0],e.height/2-this.elements[1]]}multiply(e){if(typeof e=="number")return new l(...this.elements.map(t=>t*e));{let t=new l;for(const n in this.e){let s=0;for(const r in e.e)s+=e.e[r].e[n]*this.e[r];t.e.push(s)}return t}}}class d{constructor(...e){c(this,"elements",[]);this.elements=e}get e(){return this.elements}multiply(e){if(typeof e=="number")return new d(...this.elements.map(t=>t.multiply(e)));{let t=new d;for(const n of e.e)t.e.push(n.multiply(this));return t}}}class L{constructor(e,t,n,s,r=3,o=0,a=null){c(this,"width");c(this,"color");c(this,"_x1",0);c(this,"_x2",0);c(this,"_y1",0);c(this,"_y2",0);c(this,"graphics",new y);this.x1=e,this.x2=n,this.y1=t,this.y2=s,this.width=3,this.color=o,this._reset()}get y1(){return this._y1}set y1(e){this._y1=e,this._reset()}get y2(){return this._y2}set y2(e){this._y2=e,this._reset()}get x1(){return this._x1}set x1(e){this._x1=e,this._reset()}get x2(){return this._x2}set x2(e){this._x2=e,this._reset()}_reset(){this.graphics.clear(),this.graphics.lineStyle(this.width,this.color),this.graphics.moveTo(this.x1,this.y1),this.graphics.lineTo(this.x2,this.y2)}get startVector(){return new l(this.x1,this.y1)}set startVector(e){this.x1=e.e[0],this.y1=e.e[1],this._reset()}get endVector(){return new l(this.x2,this.y2)}set endVector(e){this.x2=e.e[0],this.y2=e.e[1],this._reset()}get vectors(){return[this.startVector,this.endVector]}set vectors(e){this.startVector=e[0],this.endVector=e[1],this._reset()}}var M=(i,e)=>{for(const[t,n]of e)i[t]=n;return i};const B={name:"space",mounted(){var p;document.getElementById("draw-space")!=null&&(document.getElementById("draw-space").innerHTML="");const i=500,e=500,t=new w({antialias:!0,width:i,height:e,backgroundColor:16777215});(p=document.getElementById("draw-space"))==null||p.appendChild(t.view);const n=new y,s=new f("X");s.x=i-20,s.y=e/2-30,t.stage.addChild(s),n.lineStyle(2,7829367),n.moveTo(0,e/2),n.lineTo(i,e/2);const r=new f("Y");r.x=i/2-25,r.y=0,t.stage.addChild(r),n.lineStyle(2,7829367),n.moveTo(i/2,0),n.lineTo(i/2,e),t.stage.addChild(n);let o=new v;o.x=t.screen.width/2,o.y=t.screen.height/2,t.stage.addChild(o);let a=new L(0,0,70,50);o.addChild(a.graphics);function u(){let h=.1,m=new d(new l(Math.cos(h),Math.sin(h)),new l(-Math.sin(h),Math.cos(h)));a.endVector=a.endVector.multiply(m),a.startVector=a.startVector.multiply(m),setTimeout(u,50)}u()}},I={id:"draw-space"};function k(i,e,t,n,s,r){return _(),C("div",I)}var A=M(B,[["render",k]]);const S=T({setup(i){return(e,t)=>(_(),V(A))}});b(S).mount("#app");
