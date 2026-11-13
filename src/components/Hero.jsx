import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Words } from './fx';
import { track } from '../lib/track';

export const Hero = ({ onStart, onDemo }) => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  // As you scroll, the hero copy is pushed "back" into the scene: shrinks, tilts, fades.
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.82]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 18]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative min-h-[100svh] flex items-center pt-[110px] pb-24">
      <div className="container-x w-full grid lg:grid-cols-[1.1fr_.9fr] gap-10">
        <div className="persp">
          <motion.div style={reduce ? undefined : { scale, rotateX, y, opacity, transformOrigin: '0% 100%' }}>
            <motion.p initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-3.5 py-1.5 text-[12px] font-semibold tracking-[.14em] uppercase text-cyan">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan" /> Sales CRM · Built for growing teams
            </motion.p>
            <h1 className="mt-6 text-[clamp(2.7rem,6.2vw,5.6rem)] leading-[1] font-bold">
              <Words text="Turn every lead into a clearer path to revenue." accentFrom={6} />
            </h1>
            <motion.p initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .9 }} className="lead mt-6 text-[1.12rem]">
              Capture leads, manage your sales pipeline, follow up faster, and keep every customer conversation connected — all from one intelligent CRM workspace.
            </motion.p>
            <motion.div initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: 1.05 }} className="mt-9 flex flex-wrap gap-3">
              <button onClick={() => { track('cta_click', { id: 'hero_start_free' }); onStart(); }} className="btn btn-primary">Start free <ArrowRight size={18} /></button>
              <button onClick={() => { track('cta_click', { id: 'hero_book_demo' }); onDemo(); }} className="btn btn-outline">Book a live demo</button>
            </motion.div>
            {/* Retain only while accurate */}
            <p className="mt-5 text-[13px] text-mist">No credit card required <span className="mx-1.5 opacity-50">•</span> Set up in minutes</p>
          </motion.div>
        </div>

        {/* Floating glass stat cards sit over the 3D crystal (rendered in the fixed WebGL scene) */}
        <div className="relative hidden lg:block min-h-[420px]" aria-hidden="true">
          <div className="float-a absolute left-0 top-[8%] panel px-5 py-4">
            <div className="text-[10px] uppercase tracking-wider text-cyan">New lead</div>
            <div className="font-display font-bold text-lg">Aarav Textiles</div>
            <div className="text-xs text-mist">via Website form</div>
          </div>
          <div className="float-b absolute right-0 top-[44%] panel px-5 py-4">
            <div className="text-[10px] uppercase tracking-wider text-coral">Pipeline value</div>
            <div className="font-display font-bold text-2xl">₹18.4L</div>
            <div className="text-xs text-cyan">+6.2% this week</div>
          </div>
          <div className="float-a absolute left-[14%] bottom-[2%] panel px-5 py-4">
            <div className="text-[10px] uppercase tracking-wider text-blue">Next follow-up</div>
            <div className="font-display font-bold">Demo call · 10:30</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 inset-x-0 flex flex-col items-center gap-2 text-[11px] tracking-[.2em] uppercase text-mist" aria-hidden="true">
        Scroll to fly through
        <span className="w-px h-10 bg-gradient-to-b from-cyan to-transparent" />
      </div>
    </section>
  );
};
