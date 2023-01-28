const a = document.querySelector(".A");
const s = document.querySelector(".S");
const d = document.querySelector(".D");
const f = document.querySelector(".F");
const g = document.querySelector(".G");
const h = document.querySelector(".H");
const j = document.querySelector(".J");
const k = document.querySelector(".K");
const l = document.querySelector(".L");
const col = document.querySelector(".col");

const w = document.querySelector(".W");
const e = document.querySelector(".E");
const t = document.querySelector(".T");
const y = document.querySelector(".Y");
const u = document.querySelector(".U");
const o = document.querySelector(".O");
const p = document.querySelector(".P");

let aa = new Audio("music/a.wav");
let sa = new Audio("music/s.wav");
let da = new Audio("music/d.wav");
let fa = new Audio("music/f.wav");
let ga = new Audio("music/g.wav");
let ha = new Audio("music/h.wav");
let ja = new Audio("music/j.wav");
let ka = new Audio("music/k.wav");
let la = new Audio("music/l.wav");
let cola = new Audio("music/;.wav");
let wa = new Audio("music/w.wav");
let ea = new Audio("music/e.wav");
let ta = new Audio("music/t.wav");
let ya = new Audio("music/y.wav");
let ua = new Audio("music/u.wav");
let oa = new Audio("music/o.wav");
let pa = new Audio("music/p.wav");

a.addEventListener('click',()=>{
  aa.play();
  
})
s.addEventListener('click',()=>{
  sa.play();
 
})
d.addEventListener('click',()=>{
  da.play();
 
})
f.addEventListener('click',()=>{
  fa.play();
 
})
g.addEventListener('click',()=>{
  ga.play();
 
})
h.addEventListener('click',()=>{
  ha.play();
  
})
j.addEventListener('click',()=>{
  ja.play();
  
})
k.addEventListener('click',()=>{
  ka.play();
  
})
l.addEventListener('click',()=>{
  la.play();
})
col.addEventListener('click',()=>{
  cola.play();
  
})
w.addEventListener('click',()=>{
  wa.play("");
})
e.addEventListener('click',()=>{
  ea.play();
})
t.addEventListener('click',()=>{
  ta.play();
})
y.addEventListener('click',()=>{
  ya.play();
})
u.addEventListener('click',()=>{
  ua.play();
})
o.addEventListener('click',()=>{
  oa.play();
})
p.addEventListener('click',()=>{
  pa.play();
})
const volumeHandle = (e) => {
   aa.volume = e.target.value;
   sa.volume = e.target.value;
   da.volume = e.target.value;
   fa.volume = e.target.value;
   ga.volume = e.target.value;
   ha.volume = e.target.value;
   ja.volume = e.target.value;
   ka.volume = e.target.value;
   la.volume = e.target.value;
   cola.volume = e.target.value;
   wa.volume = e.target.value;
   ea.volume = e.target.value;
   ta.volume = e.target.value;
   ya.volume = e.target.value;
   ua.volume = e.target.value;
   oa.volume = e.target.value;
   pa.volume = e.target.value;
}
document.querySelector(".volumeHandler").addEventListener('input',volumeHandle);





