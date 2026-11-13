// Reusable 3D effects: scroll-linked flip-in, pointer tilt with glare, 3D word reveal.
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, useSpring, useMotionValue } from 'framer-motion';

// Plane flips up from a tilted angle as it scrolls into view (scroll-linked, reversible).
export function Flip({ children, className = '', from = 28, offsetEnd = 0.5 }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', `start ${offsetEnd}`] });
  const rotateX = useTransform(scrollYProgress, [0, 1], [from, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [70, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  return (
    <div ref={ref} className="persp">
      <motion.div className={className} style={reduce ? undefined : { rotateX, y, scale, opacity, transformOrigin: '50% 100%' }}>{children}</motion.div>
    </div>
  );
}

// Pointer-driven tilt + moving glare. Disabled on touch / reduced motion.
export function Tilt({ children, className = '', max = 9 }) {
  const reduce = useReducedMotion();
  const rx = useMotionValue(0), ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 160, damping: 16 }), sry = useSpring(ry, { stiffness: 160, damping: 16 });
  const ref = useRef(null);
  const move = (e) => {
    if (reduce || e.pointerType === 'touch') return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    ry.set((x - 0.5) * max * 2); rx.set(-(y - 0.5) * max * 2);
    ref.current.style.setProperty('--mx', `${x * 100}%`); ref.current.style.setProperty('--my', `${y * 100}%`);
  };
  const leave = () => { rx.set(0); ry.set(0); };
  return (
    <div className="persp h-full">
      <motion.div ref={ref} onPointerMove={move} onPointerLeave={leave} style={{ rotateX: srx, rotateY: sry, transformStyle: 'preserve-3d' }} className={`tilt relative h-full ${className}`}>
        {children}
        <span className="glare" aria-hidden="true" />
      </motion.div>
    </div>
  );
}

// Headline words flip in on load, one after another.
export function Words({ text, className = '', accentFrom = Infinity }) {
  const reduce = useReducedMotion();
  return (
    <span className={`inline-block persp ${className}`}>
      {text.split(' ').map((w, i) => (
        <motion.span key={i} className={`inline-block mr-[0.26em] origin-bottom ${i >= accentFrom ? 'grad-text' : ''}`}
          initial={reduce ? false : { opacity: 0, rotateX: -80, y: 30 }} animate={{ opacity: 1, rotateX: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}>{w}</motion.span>
      ))}
    </span>
  );
}

export const Head = ({ kicker, title, lead, center = true }) => (
  <div className={center ? 'text-center mx-auto max-w-[760px]' : 'max-w-[640px]'}>
    <p className="kicker">{kicker}</p>
    <h2 className="h2 mt-3">{title}</h2>
    {lead && <p className={`lead mt-4 ${center ? 'mx-auto' : ''}`}>{lead}</p>}
  </div>
);
