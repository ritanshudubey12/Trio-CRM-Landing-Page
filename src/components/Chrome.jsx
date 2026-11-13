import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '../data/content';
import { track } from '../lib/track';

export const Logo = () => (
  <a href="#top" className="flex items-center gap-2.5 font-display font-bold text-[20px] tracking-tight" aria-label="Triostack CRM home">
    <img src="/logo.png" alt="" width="41" height="36" className="h-9 w-auto" />
    Triostack<span className="text-cyan">CRM</span>
  </a>
);

export const Navbar = ({ onOpenDemo, onStart }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <header className="fixed top-3 inset-x-0 z-50 px-3">
      <div className={`mx-auto max-w-[1100px] h-[60px] rounded-full flex items-center justify-between pl-5 pr-2 transition-all duration-300 ${scrolled || open ? 'bg-[#0F0D22]/80 backdrop-blur-xl border border-white/10 shadow-[0_20px_60px_-20px_rgba(59,130,255,.5)]' : 'bg-transparent border border-transparent'}`}>
        <Logo />
        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
          {NAV_LINKS.map((l) => <a key={l.label} href={l.href} className="text-[14px] font-medium text-mist hover:text-white transition-colors">{l.label}</a>)}
        </nav>
        <div className="flex items-center gap-1.5">
          <button onClick={onOpenDemo} className="hidden md:inline-flex text-[14px] font-medium text-mist hover:text-white px-3 min-h-[44px] items-center cursor-pointer">Book a demo</button>
          <button onClick={onStart} className="btn btn-primary !min-h-[44px] !px-5 !text-[14px]">Start free</button>
          <button className="lg:hidden grid place-items-center w-11 h-11 text-white cursor-pointer" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden mx-auto max-w-[1100px] mt-2 rounded-3xl bg-[#0F0D22]/95 backdrop-blur-xl border border-white/10 px-5 pb-5 pt-2">
          {NAV_LINKS.map((l) => <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-[16px] text-white border-b border-white/5">{l.label}</a>)}
          <button onClick={() => { setOpen(false); onOpenDemo(); }} className="btn btn-outline w-full mt-4">Book a live demo</button>
        </div>
      )}
    </header>
  );
};

export const StickyCta = ({ onStart }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => {
      const c = document.getElementById('contact');
      setShow(window.scrollY > 700 && !(c && c.getBoundingClientRect().top < window.innerHeight));
    };
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <div className={`md:hidden fixed bottom-3 inset-x-4 z-40 transition-all duration-300 ${show ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
      <button onClick={() => { track('cta_click', { id: 'sticky_start_free' }); onStart(); }} className="btn btn-primary w-full">Start free <ArrowRight size={18} /></button>
    </div>
  );
};

export const Footer = () => (
  <footer className="relative bg-void/90 backdrop-blur-md border-t border-white/10 text-mist pt-16 pb-8">
    <div className="container-x">
      <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Logo />
          <p className="mt-4 text-sm max-w-[34ch]">The sales workspace of the TriostackOne suite — leads, pipeline and conversations, connected.</p>
        </div>
        {[['Product', ['Features', 'Product tour', 'Integrations', 'Pricing']], ['Solutions', ['Technology', 'Professional services', 'Real estate']], ['Company', ['TriostackOne', 'Contact sales', 'Privacy policy', 'Terms']]].map(([h, items]) => (
          <div key={h}>
            <h3 className="text-white text-sm font-bold mb-4 font-sans tracking-normal">{h}</h3>
            <ul className="space-y-2.5 text-sm">{items.map((i) => <li key={i}><a href="#top" className="hover:text-white transition-colors">{i}</a></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="mt-12 pt-6 border-t border-white/10 text-xs flex flex-col sm:flex-row justify-between gap-2">
        <span>© {new Date().getFullYear()} TriostackOne. All rights reserved.</span>
        <span>Product visuals are illustrative and use sample data.</span>
      </div>
    </div>
  </footer>
);
