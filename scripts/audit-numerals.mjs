import { chromium } from "playwright";
const ROUTES=["/ar","/ar/products","/ar/products/trophies-awards","/ar/products/corporate-gifts","/ar/products/boxes","/ar/products/home-decor","/ar/about","/ar/craft","/ar/our-work","/ar/contact","/ar/privacy","/ar/terms"];
const b=await chromium.launch(); const p=await (await b.newContext({viewport:{width:1440,height:900}})).newPage();
let n=0;
for(const r of ROUTES){
  await p.goto("http://localhost:3111"+r,{waitUntil:"networkidle"});
  await p.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=400){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,25));}});
  const hits=await p.evaluate(()=>{
    const out=[],seen=new Set();
    const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
    for(let x=w.nextNode();x;x=w.nextNode()){
      const t=x.nodeValue.replace(/\s+/g," ").trim();
      if(!t||!/[0-9]/.test(t))continue;
      const el=x.parentElement;
      if(!el||el.closest("script,style,noscript"))continue;
      if(getComputedStyle(el).display==="none"||!el.getClientRects().length)continue;
      // phone numbers, emails and the language switch are conventionally Latin
      if(/^[+\d\s()\u2013-]+$/.test(t)&&t.replace(/\D/g,"").length>6)continue;
      if(/@|https?:|\.(com|net|ae|sa)/.test(t))continue;
      if(el.closest('[dir="ltr"]'))continue;
      if(seen.has(t))continue; seen.add(t);
      out.push({tag:el.tagName.toLowerCase(),cls:(el.className||"").toString().slice(0,24),t:t.slice(0,90)});
    }
    return out;
  });
  if(hits.length){console.log("### "+r);hits.forEach(h=>console.log("   "+h.tag.padEnd(6)+h.cls.padEnd(26)+h.t));n+=hits.length;}
}
console.log(n?`\n${n} node(s) with Western digits`:"\nno Western digits in Arabic text");
await b.close();
