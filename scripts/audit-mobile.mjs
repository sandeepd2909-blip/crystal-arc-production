/* Mobile quality audit at 390px: page length, type sizes, tap targets,
   line length, overflow. Numbers rather than impressions. */
import { chromium } from "playwright";
const R=["/en","/en/products","/en/products/trophies-awards","/en/products/corporate-gifts","/en/products/boxes","/en/products/home-decor","/en/about","/en/craft","/en/our-work","/en/contact"];
const b=await chromium.launch();
const p=await (await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:2,isMobile:false})).newPage();
const rows=[];
for(const r of R){
  await p.goto("http://localhost:3111"+r,{waitUntil:"networkidle"});
  await p.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=500){window.scrollTo(0,y);await new Promise(x=>setTimeout(x,20));}window.scrollTo(0,0);});
  await p.waitForTimeout(400);
  const m=await p.evaluate(()=>{
    const H=document.body.scrollHeight;
    const vis=el=>{const s=getComputedStyle(el);return s.display!=="none"&&s.visibility!=="hidden"&&el.getClientRects().length;};
    let tiny=[],smallTap=[],longLine=[];
    for(const el of document.querySelectorAll("p,span,div,a,li,h1,h2,h3,h4,button")){
      if(!vis(el))continue;
      const kids=[...el.childNodes].filter(n=>n.nodeType===3&&n.nodeValue.trim());
      if(!kids.length)continue;
      const s=getComputedStyle(el), fs=parseFloat(s.fontSize);
      const txt=kids.map(n=>n.nodeValue.trim()).join(" ");
      if(fs<12) tiny.push(`${fs}px "${txt.slice(0,32)}"`);
      const r=el.getBoundingClientRect();
      // characters per line, rough: width / (0.5 * font-size)
      if(txt.length>60 && r.width/(fs*0.5) > 78) longLine.push(`${Math.round(r.width/(fs*0.5))}ch`);
    }
    for(const el of document.querySelectorAll("a,button,[role=button],input,select")){
      if(!vis(el))continue;
      const r=el.getBoundingClientRect();
      if(r.width&&r.height&&(r.height<40||r.width<40)) smallTap.push(`${Math.round(r.width)}x${Math.round(r.height)} ${(el.textContent||el.getAttribute("aria-label")||el.tagName).trim().slice(0,24)}`);
    }
    return {H, overflow:document.documentElement.scrollWidth>window.innerWidth,
      tiny:[...new Set(tiny)], smallTap:[...new Set(smallTap)], longLine:longLine.length,
      imgs:document.querySelectorAll("img").length,
      sections:document.querySelectorAll("section").length};
  });
  rows.push({r,...m});
}
console.log("PAGE".padEnd(34),"HEIGHT".padStart(8),"SCREENS".padStart(8),"IMGS".padStart(6),"SECT".padStart(5),"OVF");
for(const x of rows) console.log(x.r.padEnd(34),String(x.H).padStart(8),(x.H/844).toFixed(1).padStart(8),String(x.imgs).padStart(6),String(x.sections).padStart(5),x.overflow?" YES":" no");
console.log("\n--- type under 12px ---");
for(const x of rows) if(x.tiny.length) console.log(" "+x.r+"\n   "+x.tiny.slice(0,6).join("\n   "));
console.log("\n--- tap targets under 40px ---");
for(const x of rows) if(x.smallTap.length) console.log(" "+x.r+": "+x.smallTap.slice(0,5).join(" | "));
await b.close();
