import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useReducedMotion } from 'framer-motion';
import { ArrowRight, Check, ChevronDown, Shield, Users, KeyRound, Link2 } from 'lucide-react';
import { Flip, Tilt, Head } from './fx';
import { LeadForm } from './LeadForm';
import { Shot } from './Shot';
import { SHOT_LIST } from '../data/shots';
import { track } from '../lib/track';
import { LEAD_SOURCES, PROBLEMS, SOLUTION, CAPABILITIES, FOLLOWUPS, TOUR, STEPS, SUITE, USE_CASES, SECURITY, FAQS } from '../data/content';

/* Big product reveal right under the hero */
export const ProductReveal = () => (
  <section aria-label="Product screenshot" className="relative pb-16 lg:pb-28 -mt-10">
    <div className="container-x">
      <Flip from={38} offsetEnd={0.35}>
        <div className="mx-auto max-w-[1100px] rounded-[24px] overflow-hidden border border-white/20 shadow-[0_60px_140px_-20px_rgba(139,92,246,.6)]">
          <Shot id="customers" eager />
        </div>
      </Flip>
      <p className="mt-4 text-center text-[11px] text-mist/70">Triostack CRM — product screenshot with sample data.</p>
    </div>
  </section>
);

/* Lead sources strip (verifiable facts only) */
export const TrustStrip = () => (
  <section aria-label="Supported lead sources" className="relative py-8 border-y border-white/10 bg-void/60 backdrop-blur-md overflow-hidden">
    <p className="text-center text-[12px] font-semibold tracking-[.18em] uppercase text-mist mb-5">Bring leads in from</p>
    <div className="marquee-track">
      {[...LEAD_SOURCES, ...LEAD_SOURCES].map((s, i) => (
        <span key={i} aria-hidden={i >= LEAD_SOURCES.length} className="mx-2.5 px-5 py-2 rounded-full border border-white/12 bg-white/5 text-[14px] font-medium whitespace-nowrap">{s}</span>
      ))}
    </div>
  </section>
);

/* Problem → solution: cards fly in as tilted planes */
export const ProblemSolution = () => (
  <section id="product" className="section">
    <div className="container-x">
      <Head kicker="The problem" title="Sales shouldn't depend on memory and spreadsheets." />
      <div className="mt-14 grid md:grid-cols-3 gap-5">
        {PROBLEMS.map((p, i) => (
          <Flip key={p.t} from={34 - i * 4}>
            <Tilt className="panel p-8 h-full">
              <span className="font-display text-5xl font-bold grad-text">0{i + 1}</span>
              <h3 className="mt-4 text-2xl font-bold" style={{ transform: 'translateZ(40px)' }}>{p.t}</h3>
              <p className="mt-2 text-mist" style={{ transform: 'translateZ(20px)' }}>{p.d}</p>
            </Tilt>
          </Flip>
        ))}
      </div>
      <Flip className="mt-6" from={20}>
        <div className="panel p-8 lg:p-12 grid lg:grid-cols-2 gap-8 items-center !border-violet/40">
          <div>
            <p className="kicker">The solution</p>
            <h3 className="mt-3 text-3xl lg:text-5xl font-bold">{SOLUTION.t}</h3>
            <p className="mt-3 text-mist max-w-[46ch]">{SOLUTION.d}</p>
          </div>
          <ul className="space-y-3">
            {SOLUTION.points.map((p) => (
              <li key={p} className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3.5">
                <span className="grid place-items-center w-6 h-6 rounded-full bg-lime text-void"><Check size={14} /></span>{p}
              </li>
            ))}
          </ul>
        </div>
      </Flip>
    </div>
  </section>
);

/* Scrollytelling capabilities: pinned stage, the 3D panel rotates to the next feature as you scroll */
export const Capabilities = () => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const n = CAPABILITIES.length;
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const k = Math.min(n - 1, Math.max(0, Math.floor(v * n)));
    setI((prev) => { if (prev !== k) setDir(k > prev ? 1 : -1); return k; });
  });
  const c = CAPABILITIES[i];
  return (
    <section id="features" ref={ref} style={{ height: `${n * 80 + 20}vh` }} className="relative">
      <div className="sticky top-0 min-h-screen flex items-center py-20">
        <div className="container-x w-full grid lg:grid-cols-[.9fr_1.1fr] gap-8 lg:gap-14 items-center">
          <div>
            <p className="kicker">Core capabilities</p>
            <ul className="mt-5 hidden sm:flex flex-wrap gap-2" aria-label="Capabilities">
              {CAPABILITIES.map((x, k) => (
                <li key={x.id} className={`px-3 py-1 rounded-full text-[12px] font-semibold border transition-colors ${k === i ? 'bg-lime text-void border-lime' : 'border-white/15 text-mist'}`}>{x.tag}</li>
              ))}
            </ul>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={c.id} initial={reduce ? false : { opacity: 0, y: 30 * dir }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 * dir }} transition={{ duration: .35 }} className="mt-6 min-h-[210px]">
                <h3 className="text-[clamp(1.9rem,3.6vw,3.1rem)] font-bold leading-[1.05]">{c.t}</h3>
                <p className="mt-4 text-mist max-w-[48ch]">{c.d}</p>
              </motion.div>
            </AnimatePresence>
            <div className="mt-6 flex gap-1.5" aria-hidden="true">
              {CAPABILITIES.map((_, k) => <span key={k} className={`h-1 rounded-full transition-all duration-300 ${k === i ? 'w-10 bg-lime' : 'w-4 bg-white/20'}`} />)}
            </div>
          </div>
          <div className="persp">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={c.id}
                initial={reduce ? false : { opacity: 0, rotateY: 55 * dir, rotateX: 8, scale: .9, z: -120 }}
                animate={{ opacity: 1, rotateY: -8, rotateX: 4, scale: 1, z: 0 }}
                exit={{ opacity: 0, rotateY: -55 * dir, scale: .9, z: -120 }}
                transition={{ duration: .5, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[22px] overflow-hidden border border-white/20 shadow-[0_50px_120px_-20px_rgba(139,92,246,.55)]" style={{ transformStyle: 'preserve-3d' }}>
                <Shot id={c.shot} />
              </motion.div>
            </AnimatePresence>
            <p className="mt-4 text-center text-[11px] text-mist/70">Product screenshots, sample data.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const FollowUps = () => (
  <section className="relative pb-24">
    <div className="container-x">
      <Flip from={22}>
        <div className="panel p-8 lg:p-10 grid md:grid-cols-[1fr_auto] items-center gap-8">
          <div>
            <p className="kicker">Follow-ups</p>
            <h3 className="mt-2 text-2xl lg:text-4xl font-bold">{FOLLOWUPS.t}</h3>
            <p className="mt-2 text-mist max-w-[56ch]">{FOLLOWUPS.d}</p>
          </div>
          <div className="w-full md:w-[460px] rounded-2xl overflow-hidden border border-white/15 shadow-2xl"><Shot id="notifications" /></div>
        </div>
      </Flip>
    </div>
  </section>
);

/* Product tour: a real 3D carousel ring. Click a tab / arrows / drag the ring to rotate */
const useWidth = () => {
  const [w, setW] = useState(typeof window === 'undefined' ? 1200 : window.innerWidth);
  useEffect(() => { const f = () => setW(window.innerWidth); window.addEventListener('resize', f); return () => window.removeEventListener('resize', f); }, []);
  return w;
};

export const ProductTour = () => {
  const [i, setI] = useState(0);
  const w = useWidth();
  const n = TOUR.length;
  const CARD = 520;
  const CH = Math.round((CARD * 9) / 16);
  const radius = Math.round(CARD / 2 / Math.tan(Math.PI / n)) + 40;
  const scale = Math.min(1, (w - 32) / (CARD + 80));
  const drag = useRef(null);
  const go = (k) => { setI(((k % n) + n) % n); };
  const onKey = (e) => { if (e.key === 'ArrowRight') go(i + 1); if (e.key === 'ArrowLeft') go(i - 1); };
  return (
    <section className="section overflow-hidden">
      <div className="container-x">
        <Head kicker="Product tour" title="Spin through the workspace your team will use every day." />
        <div role="tablist" aria-label="Product tour" onKeyDown={onKey} className="mt-10 flex flex-wrap justify-center gap-2">
          {TOUR.map((t, k) => (
            <button key={t.id} role="tab" aria-selected={k === i} tabIndex={k === i ? 0 : -1} onClick={() => { go(k); track('tour_tab', { tab: t.id }); }}
              className={`min-h-[44px] px-5 rounded-full text-[14px] font-bold cursor-pointer transition-all ${k === i ? 'bg-lime text-void' : 'text-white border border-white/20 hover:bg-white/10'}`}>{t.label}</button>
          ))}
        </div>
        <div className="persp mt-10 mx-auto touch-pan-y select-none" style={{ height: CH * scale + 40, perspective: 1800 }}
          onPointerDown={(e) => { drag.current = e.clientX; }}
          onPointerUp={(e) => { if (drag.current != null) { const d = e.clientX - drag.current; if (Math.abs(d) > 40) go(i + (d < 0 ? 1 : -1)); drag.current = null; } }}>
          <div className="relative mx-auto" style={{ width: CARD, height: CH, transform: `scale(${scale})`, transformOrigin: 'top center' }}>
            <div className="ring3d absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)]" style={{ transform: `translateZ(-${radius}px) rotateY(${-i * (360 / n)}deg)` }}>
              {TOUR.map((t, k) => {
                const active = k === i;
                return (
                  <div key={t.id} role="tabpanel" aria-hidden={!active} className="absolute inset-0 rounded-[20px] overflow-hidden border border-white/20 bg-panel transition-opacity duration-500"
                    style={{ transform: `rotateY(${k * (360 / n)}deg) translateZ(${radius}px)`, opacity: active ? 1 : 0.35, backfaceVisibility: 'hidden', boxShadow: active ? '0 40px 100px -20px rgba(139,92,246,.7)' : 'none' }}>
                    <Shot id={t.shot} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <p className="text-center text-mist mt-4">{TOUR[i].cap}</p>
        <p className="text-center text-[11px] text-mist/60 mt-1">Drag or use the tabs · Product screenshots, sample data.</p>
      </div>
    </section>
  );
};

/* Gallery: every product screen. Cards tilt toward the pointer; click opens a full-size viewer. */
export const Gallery = () => {
  const [open, setOpen] = useState(-1);
  const n = SHOT_LIST.length;
  useEffect(() => {
    if (open < 0) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(-1);
      if (e.key === 'ArrowRight') setOpen((o) => (o + 1) % n);
      if (e.key === 'ArrowLeft') setOpen((o) => (o - 1 + n) % n);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open, n]);
  return (
    <section id="gallery" className="section">
      <div className="container-x">
        <Head kicker="Inside the product" title="Every screen, one connected workspace." lead="Tap any screen to view it full size. Personal details are blurred." />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SHOT_LIST.map((s, k) => (
            <Flip key={s.id} from={26}>
              <Tilt className="panel overflow-hidden !rounded-[20px]" max={6}>
                <button onClick={() => { setOpen(k); track('gallery_open', { shot: s.id }); }} className="block w-full text-left cursor-zoom-in" aria-label={`View ${s.title} full size`}>
                  <img src={s.src} alt={s.alt} width="1920" height="1080" loading="lazy" decoding="async" className="block w-full h-auto" />
                  <span className="block px-5 py-3.5 font-display font-bold text-[15px] border-t border-white/10">{s.title}</span>
                </button>
              </Tilt>
            </Flip>
          ))}
        </div>
      </div>
      {open >= 0 && (
        <div role="dialog" aria-modal="true" aria-label={SHOT_LIST[open].title} className="fixed inset-0 z-[70] grid place-items-center p-3 sm:p-8 bg-void/90 backdrop-blur-md" onMouseDown={(e) => e.target === e.currentTarget && setOpen(-1)}>
          <button onClick={() => setOpen(-1)} aria-label="Close" className="absolute top-3 right-3 w-11 h-11 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 cursor-pointer text-xl">×</button>
          <button onClick={() => setOpen((open - 1 + n) % n)} aria-label="Previous" className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 cursor-pointer text-xl">‹</button>
          <button onClick={() => setOpen((open + 1) % n)} aria-label="Next" className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 cursor-pointer text-xl">›</button>
          <figure className="max-w-[1280px] w-full">
            <img src={SHOT_LIST[open].src} alt={SHOT_LIST[open].alt} className="w-full h-auto rounded-2xl border border-white/20 shadow-[0_40px_120px_rgba(139,92,246,.4)]" />
            <figcaption className="mt-3 text-center text-mist text-sm">{SHOT_LIST[open].title} · {open + 1} / {n}</figcaption>
          </figure>
        </div>
      )}
    </section>
  );
};

/* How it works: a 3D staircase — each step steps forward in depth */
export const HowItWorks = () => (
  <section id="workflow" className="section">
    <div className="container-x">
      <Head kicker="How it works" title="From first enquiry to handoff." />
      <div className="persp mt-16">
        <ol className="grid gap-4 lg:gap-0 lg:grid-cols-5" style={{ transformStyle: 'preserve-3d' }}>
          {STEPS.map((s) => (
            <li key={s.n} className="lg:[transform:rotateY(-14deg)]">
              <Flip from={40} offsetEnd={0.7}>
                <div className="panel p-6 lg:mx-1.5 relative overflow-hidden">
                  <span className="absolute -right-2 -top-4 font-display text-[88px] font-bold text-white/[.05] leading-none">{s.n}</span>
                  <span className="relative inline-grid place-items-center w-11 h-11 rounded-xl bg-gradient-to-br from-violet to-pink font-display font-bold">{s.n}</span>
                  <h3 className="relative mt-4 text-xl font-bold">{s.t}</h3>
                  <p className="relative mt-1.5 text-[14px] text-mist">{s.d}</p>
                </div>
              </Flip>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

const SUITE_ICONS = [KeyRound, Link2, Users];
export const ConnectedSuite = () => (
  <section id="suite" className="section">
    <div className="container-x">
      <Head kicker="Connected suite" title="Your customer relationship is bigger than a sales pipeline." lead="Triostack CRM works with the rest of TriostackOne through shared identity and deal handoffs." />
      <div className="mt-14 grid md:grid-cols-3 gap-5">
        {SUITE.map((s, k) => {
          const Icon = SUITE_ICONS[k];
          return (
            <Flip key={s.t} from={30}>
              <Tilt className="panel p-8 h-full">
                <div className="w-14 h-14 rounded-2xl bg-lime/10 text-lime grid place-items-center" style={{ transform: 'translateZ(50px)' }}><Icon size={26} /></div>
                <h3 className="mt-6 text-2xl font-bold" style={{ transform: 'translateZ(30px)' }}>{s.t}</h3>
                <p className="mt-2 text-mist">{s.d}</p>
              </Tilt>
            </Flip>
          );
        })}
      </div>
      <p className="mt-6 text-center text-xs text-mist/70">Workflow availability varies — confirm the exact handoffs available today in a demo.</p>
    </div>
  </section>
);

export const UseCases = () => (
  <section id="solutions" className="section">
    <div className="container-x">
      <Head kicker="Use cases" title="Built for teams that sell through relationships." />
      <div className="mt-14 grid md:grid-cols-3 gap-5">
        {USE_CASES.map((u) => (
          <Flip key={u.t} from={30}>
            <Tilt className="panel p-8 h-full">
              <h3 className="text-3xl font-bold grad-text" style={{ transform: 'translateZ(40px)' }}>{u.t}</h3>
              <p className="mt-3 text-mist">{u.d}</p>
              <a href="#contact" className="mt-6 inline-flex items-center gap-1.5 text-lime font-bold text-[14px] hover:gap-2.5 transition-all">Talk to us <ArrowRight size={16} /></a>
            </Tilt>
          </Flip>
        ))}
      </div>
    </div>
  </section>
);

const SEC_ICONS = [KeyRound, Shield, Users];
export const SecuritySection = () => (
  <section className="section">
    <div className="container-x grid lg:grid-cols-[1fr_1.3fr] gap-12 items-center">
      <div>
        <p className="kicker">Security & control</p>
        <h2 className="h2 mt-3">Keep access simple and in your hands.</h2>
        <p className="lead mt-4">Decide who sees what, and keep every record accountable.</p>
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        {SECURITY.map((s, k) => {
          const Icon = SEC_ICONS[k];
          return (
            <Flip key={s.t} from={30}>
              <Tilt className="panel p-6 h-full">
                <Icon className="text-lime" size={26} style={{ transform: 'translateZ(40px)' }} />
                <h3 className="mt-4 font-bold text-lg">{s.t}</h3>
                <p className="mt-1.5 text-sm text-mist">{s.d}</p>
              </Tilt>
            </Flip>
          );
        })}
      </div>
      <div className="lg:col-span-2">
        <Flip from={24}>
          <div className="mx-auto max-w-[1000px] rounded-[22px] overflow-hidden border border-white/20 shadow-[0_50px_120px_-20px_rgba(139,92,246,.45)]"><Shot id="audit" /></div>
        </Flip>
        <p className="mt-3 text-center text-[11px] text-mist/70">Audit logs record activity across modules. Sample data.</p>
      </div>
    </div>
  </section>
);

export const FAQ = () => {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="section">
      <div className="container-x max-w-[820px]">
        <Head kicker="FAQ" title="Questions, answered." />
        <div className="mt-10 space-y-3">
          {FAQS.map((f, k) => {
            const isOpen = open === k;
            return (
              <div key={f.q} className="panel !rounded-2xl">
                <h3>
                  <button aria-expanded={isOpen} aria-controls={`faq-${k}`} onClick={() => setOpen(isOpen ? -1 : k)}
                    className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 min-h-[60px] py-3 font-sans font-semibold text-[16px] tracking-normal cursor-pointer">
                    {f.q}<ChevronDown size={20} className={`shrink-0 text-lime transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                </h3>
                <div id={`faq-${k}`} role="region" hidden={!isOpen} className="px-5 sm:px-6 pb-5 -mt-1 text-mist text-[15px]">{f.a}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const FinalCta = ({ onStart }) => (
  <section id="contact" className="section">
    <div className="container-x grid lg:grid-cols-[1.1fr_.9fr] gap-12 items-center">
      <div>
        <p className="kicker">Get started</p>
        <h2 className="h2 mt-3 text-[clamp(2.4rem,5vw,4.4rem)]">Ready to fly through your pipeline?</h2>
        <p className="lead mt-4">Start free, or book a walkthrough and we'll show you the workspace with your sales process in mind.</p>
        <ul className="mt-6 space-y-2.5">
          {['Leads, pipeline and conversations in one place', 'A walkthrough tailored to your team', 'No credit card required'].map((t) => (
            <li key={t} className="flex items-center gap-3"><span className="grid place-items-center w-5 h-5 rounded-full bg-lime text-void"><Check size={12} /></span>{t}</li>
          ))}
        </ul>
        <button onClick={onStart} className="btn btn-outline mt-8 lg:hidden">Prefer a quick start? Start free</button>
      </div>
      <Flip from={26}>
        <div className="panel p-6 sm:p-8 !border-violet/40">
          <h3 className="text-xl font-bold mb-1">Book a live demo</h3>
          <p className="text-sm text-mist mb-5">Tell us a little about your team.</p>
          <LeadForm id="final" intent="demo" />
        </div>
      </Flip>
    </div>
  </section>
);
