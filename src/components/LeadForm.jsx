import React, { useEffect, useRef, useState } from 'react';
import { Check, X } from 'lucide-react';
import { track } from '../lib/track';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const LeadForm = ({ intent = 'demo', id = 'lead' }) => {
  const [v, setV] = useState({ name: '', email: '', company: '', phone: '' });
  const [err, setErr] = useState({});
  const [done, setDone] = useState(false);
  const started = useRef(false);

  const set = (k) => (e) => {
    if (!started.current) { started.current = true; track('form_start', { form: id }); }
    setV({ ...v, [k]: e.target.value });
  };
  const submit = (e) => {
    e.preventDefault();
    const n = {};
    if (!v.name.trim()) n.name = 'Please enter your name.';
    if (!EMAIL.test(v.email)) n.email = 'Enter a valid work email.';
    setErr(n);
    if (Object.keys(n).length) { track('form_error', { form: id, fields: Object.keys(n).join(',') }); return; }
    // TODO: POST to your CRM / lead endpoint here.
    track('form_submit', { form: id, intent });
    setDone(true);
  };

  if (done) {
    return (
      <div role="status" className="text-center py-8">
        <div className="mx-auto w-14 h-14 rounded-full bg-cyan/15 grid place-items-center text-cyan"><Check size={28} /></div>
        <h3 className="mt-4 text-xl font-bold">Thanks, {v.name.split(' ')[0]}!</h3>
        <p className="mt-2 text-sm text-mist">We'll be in touch at {v.email} shortly.</p>
      </div>
    );
  }
  const field = 'w-full min-h-[48px] rounded-xl border px-4 text-[15px] bg-white/5 text-white placeholder:text-white/35 focus:border-blue focus:ring-2 focus:ring-blue/40 outline-none';
  return (
    <form onSubmit={submit} noValidate className="space-y-3.5">
      {[['name', 'Full name', 'text', 'name', 'Aarav Sharma'], ['email', 'Work email', 'email', 'email', 'you@company.com'], ['company', 'Company (optional)', 'text', 'organization', 'Company name'], ['phone', 'Phone (optional)', 'tel', 'tel', '+91 …']].map(([k, label, type, ac, ph]) => (
        <div key={k}>
          <label htmlFor={`${id}-${k}`} className="block text-[13px] font-semibold mb-1.5 text-white/90">{label}</label>
          <input id={`${id}-${k}`} type={type} autoComplete={ac} placeholder={ph} value={v[k]} onChange={set(k)}
            aria-invalid={!!err[k]} aria-describedby={err[k] ? `${id}-${k}-e` : undefined}
            className={`${field} ${err[k] ? 'border-coral' : 'border-white/15'}`} />
          {err[k] && <p id={`${id}-${k}-e`} className="text-coral text-xs mt-1">{err[k]}</p>}
        </div>
      ))}
      <button type="submit" className="btn btn-primary w-full">{intent === 'start' ? 'Start free' : 'Book my demo'}</button>
      <p className="text-xs text-center text-mist">We'll only use your details to respond. See our privacy policy.</p>
    </form>
  );
};

export const DemoModal = ({ open, intent, onClose }) => {
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return;
    const prev = document.activeElement;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    ref.current?.querySelector('input')?.focus();
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; prev?.focus?.(); };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60] grid place-items-center p-4 bg-void/80 backdrop-blur-md" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div ref={ref} role="dialog" aria-modal="true" aria-labelledby="dlg-title" className="panel relative w-full max-w-[440px] max-h-[92vh] overflow-auto p-6 sm:p-8">
        <button onClick={onClose} aria-label="Close" className="absolute top-3 right-3 w-11 h-11 grid place-items-center rounded-full text-mist hover:bg-white/10 cursor-pointer"><X size={20} /></button>
        <h2 id="dlg-title" className="text-2xl font-bold">{intent === 'start' ? 'Start free' : 'Book a live demo'}</h2>
        <p className="text-sm text-mist mt-1 mb-5">{intent === 'start' ? 'Tell us where to send your workspace details.' : 'A short walkthrough tailored to your sales process.'}</p>
        <LeadForm intent={intent} id="modal" />
      </div>
    </div>
  );
};
