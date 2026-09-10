/* eslint-disable @typescript-eslint/ban-ts-comment, no-var, prefer-const */
// @ts-nocheck — imperative legacy behaviour is isolated to this component.
"use client";

import { useEffect } from "react";
import { Locale, DEFAULT_LOCALE } from "@/lib/i18n";
import { ui } from "@/lib/dictionaries/ui";

/**
 * Homepage behaviour, carried over verbatim from the old static index.html:
 * scroll reveals, the cycling hero word, the stat counters, the testimonial
 * rotator, and the deferred model-viewer boot.
 *
 * Kept as imperative DOM code inside one effect rather than rewritten as React
 * state. It is proven, it drives markup that is otherwise static, and porting it
 * to hooks would risk changing behaviour during the migration for no gain.
 *
 * The old nav dropdown and mobile-menu scripts are deliberately NOT here — the
 * shared <Nav /> component owns that now.
 *
 * It stays isolated from the content and conversion flow, so its direct DOM
 * operations cannot intercept a form submission or alter the static markup.
 */
export default function HomeClient({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  // Named `dict`, not `t`: the ported rotator declares its own `var t` inside
  // render(), and shadowing across a 200-line effect is a trap.
  const dict = ui(locale).home;
  // the gallery swaps <img>s in from script, so its alt has to come from the
  // dictionary too — as a literal it stayed English on /ar
  const clientWorkAlt = ui(locale).a11y.clientWork;
  useEffect(() => {
      (function(){
        const els = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
        if (!('IntersectionObserver' in window)) {
          els.forEach(function(el){ el.classList.add('visible'); });
          return;
        }

        /* Cards inside a side-scrolling strip (the occasions row) sit outside
           the viewport horizontally, so they never intersect on a vertical
           scroll and would stay at opacity 0 — three of the five were
           invisible on mobile in both locales. Watch the strip instead and
           reveal its cards together. Same fix as RevealOnScroll. */
        function scroller(el){
          let node = el.parentElement;
          while (node && node !== document.body) {
            const ox = getComputedStyle(node).overflowX;
            if ((ox === 'auto' || ox === 'scroll') && node.scrollWidth > node.clientWidth + 4) return node;
            node = node.parentElement;
          }
          return null;
        }

        const grouped = new Map(), standalone = [];
        els.forEach(function(el){
          const strip = scroller(el);
          if (strip) {
            const g = grouped.get(strip);
            if (g) g.push(el); else grouped.set(strip, [el]);
          } else standalone.push(el);
        });

        var io = new IntersectionObserver(function(entries){
          entries.forEach(function(entry){
            if (!entry.isIntersecting) return;
            const g = grouped.get(entry.target);
            if (g) g.forEach(function(el){ el.classList.add('visible'); });
            else entry.target.classList.add('visible');
            io.unobserve(entry.target);
          });
        }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

        standalone.forEach(function(el){ io.observe(el); });
        grouped.forEach(function(_, strip){ io.observe(strip); });
      })();

      (function(){
        const el = document.getElementById('cycle-word');
        if (!el) return;
        const words = dict.cycleWords;
        let wordIdx = 0, charIdx = 0, deleting = false;
        function tick(){
          const word = words[wordIdx];
          if (!deleting) {
            charIdx++;
            el.textContent = word.slice(0, charIdx);
            if (charIdx === word.length) { deleting = true; setTimeout(tick, 1700); return; }
            setTimeout(tick, 85);
          } else {
            charIdx--;
            el.textContent = word.slice(0, charIdx);
            if (charIdx === 0) { deleting = false; wordIdx = (wordIdx + 1) % words.length; setTimeout(tick, 350); return; }
            setTimeout(tick, 40);
          }
        }
        tick();
      })();

      (function(){
        const stats = document.querySelectorAll('.stat-n[data-count]');
        if (!stats.length) return;
        const arabic = locale === 'ar';
        /* Count in the locale's own digits, and finish on whatever the markup
           already said. The counter used to format with toLocaleString('en-US')
           and end on its own computed string, which overwrote the Arabic
           values in the markup with Latin ones a second after load. */
        function digits(str){
          return arabic ? str.replace(/[0-9]/g, function(d){ return '٠١٢٣٤٥٦٧٨٩'[+d]; }).replace(/,/g, '٬') : str;
        }
        function animate(el){
          const target = parseInt(el.getAttribute('data-count'), 10);
          const suffix = el.getAttribute('data-suffix') || '';
          const finalText = el.textContent;
          const duration = 1400;
          let start = null;
          function fmt(n){ return digits(n >= 1000 ? n.toLocaleString('en-US') : String(n)); }
          function step(ts){
            if (start === null) start = ts;
            const progress = Math.min((ts - start) / duration, 1);
            if (progress >= 1) { el.textContent = finalText; return; }
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = arabic ? fmt(Math.round(target * eased)) : fmt(Math.round(target * eased)) + suffix;
            requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
        }
        if (!('IntersectionObserver' in window)) return;
        var io = new IntersectionObserver(function(entries){
          entries.forEach(function(entry){
            if (entry.isIntersecting) { animate(entry.target); io.unobserve(entry.target); }
          });
        }, { threshold: 0.4 });
        stats.forEach(function(el){ io.observe(el); });
      })();

      (function(){
        const slideEl = document.getElementById('tq-slide');
        const textEl = document.getElementById('tq-text');
        const nameEl = document.getElementById('tq-name');
        const roleEl = document.getElementById('tq-role');
        const imgWrap = document.getElementById('tq-img-wrap');
        const progressEl = document.getElementById('tq-progress');
        const counterEl = document.getElementById('tq-counter');
        const dots = document.querySelectorAll('.tql-btn');
        const prevBtn = document.getElementById('tq-prev');
        const nextBtn = document.getElementById('tq-next');
        if (!slideEl || !dots.length) return;
      
        const testimonials = dict.testimonials;
      
        let idx = 0, timer = null, progressTimer = null;
        const AUTO_MS = 6000;
      
        function pad(n){ return n < 10 ? '0' + n : String(n); }
      
        function crossfadeTo(src){
          const loader = new Image();
          loader.onload = function(){ swap(src); };
          loader.onerror = function(){ swap(src); };
          loader.src = src;
        }
      
        function swap(src){
          const current = imgWrap.querySelector('img.active');
          const next = document.createElement('img');
          next.src = src;
          next.alt = clientWorkAlt;
          imgWrap.appendChild(next);
          // force layout so the browser registers the starting (opacity:0) state
          // before we flip to active, otherwise the transition is skipped entirely
          void next.offsetWidth;
          next.classList.add('active');
          if (current){
            current.classList.remove('active');
            setTimeout(function(){
              if (current.parentNode) current.parentNode.removeChild(current);
            }, 950);
          }
        }
      
        function render(i, direction){
          const t = testimonials[i];
          slideEl.classList.add(direction === 'next' ? 'out' : 'out');
          setTimeout(function(){
            textEl.textContent = t.quote;
            nameEl.textContent = t.name;
            roleEl.textContent = t.role;
            crossfadeTo(t.img);
            slideEl.classList.remove('out');
            slideEl.classList.add('in');
            requestAnimationFrame(function(){
              slideEl.classList.remove('in');
            });
          }, 220);
      
          dots.forEach(function(d, di){ d.classList.toggle('active', di === i); });
          if (counterEl) counterEl.textContent = pad(i + 1) + ' / ' + pad(testimonials.length);
        }
      
        function startProgress(){
          if (!progressEl) return;
          progressEl.classList.remove('running');
          void progressEl.offsetWidth;
          progressEl.classList.add('running');
        }
      
        function goTo(i, direction){
          idx = (i + testimonials.length) % testimonials.length;
          render(idx, direction);
          startProgress();
          resetTimer();
        }
      
        function next(){ goTo(idx + 1, 'next'); }
        function prev(){ goTo(idx - 1, 'prev'); }
      
        function resetTimer(){
          if (timer) clearTimeout(timer);
          timer = setTimeout(next, AUTO_MS);
        }
      
        dots.forEach(function(d){
          d.addEventListener('click', function(){
            const i = parseInt(d.getAttribute('data-idx'), 10);
            goTo(i, i > idx ? 'next' : 'prev');
          });
        });
        if (nextBtn) nextBtn.addEventListener('click', next);
        if (prevBtn) prevBtn.addEventListener('click', prev);
      
        startProgress();
        resetTimer();
      })();

      /* The deferred <model-viewer> boot lived here. The hero is a still image
         now, so there is no viewer to lazy-load and no CDN runtime to fetch. */
  }, [dict, clientWorkAlt]);

  return null;
}
