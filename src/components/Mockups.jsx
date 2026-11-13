// High-fidelity, code-built UI mockups of the CRM. All names/numbers are fictional sample data.
// Replace with real, anonymised product screenshots (WebP, 16:10) when available.
import React from 'react';

const NAV = ['Overview', 'Leads', 'Pipeline', 'Calendar', 'Reports'];

export const Frame = ({ title = 'Sales overview', active = 'Overview', children, className = '' }) => (
  <div className={`bg-[#F8FAFD] overflow-hidden text-left ${className}`} style={{ borderRadius: 'inherit' }}>
    <div className="flex items-center gap-2 px-4 h-10 bg-[#E9EEF7] border-b border-[#DCE4F0]">
      <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B6B]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#FFC857]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#3DD6A0]" />
      <span className="ml-3 text-[11px] tracking-wide text-[#5D6B80] uppercase">Triostack CRM / {title}</span>
    </div>
    <div className="flex">
      <aside className="hidden sm:block w-[104px] shrink-0 bg-[#EEF2F9] border-r border-[#DCE4F0] py-4 px-3 space-y-1">
        {NAV.map((n) => (
          <div key={n} className={`text-[11px] rounded-md px-2 py-1.5 ${n === active ? 'bg-white text-[#8B5CF6] font-semibold shadow-sm' : 'text-[#5D6B80]'}`}>{n}</div>
        ))}
      </aside>
      <div className="flex-1 p-3 sm:p-4 min-w-0">{children}</div>
    </div>
  </div>
);

const Stat = ({ label, value, delta }) => (
  <div className="bg-white rounded-xl border border-[#E3E9F3] p-3">
    <div className="text-[9px] tracking-wider uppercase text-[#5D6B80]">{label}</div>
    <div className="font-display text-[20px] font-extrabold text-[#081426] leading-tight mt-0.5">{value}</div>
    <div className="text-[10px] text-emerald-600 font-medium">{delta}</div>
  </div>
);

const STAGES = [
  { n: 'New', w: 78, c: '#8B5CF6' },
  { n: 'Qualified', w: 58, c: '#8B5CF6' },
  { n: 'Proposal', w: 36, c: '#8B5CF6' },
  { n: 'Won', w: 22, c: '#14A37F' },
];

export const DashboardMock = ({ className = '' }) => (
  <Frame className={className}>
    <div className="grid grid-cols-3 gap-2.5">
      <Stat label="Open leads" value="248" delta="+12 this week" />
      <Stat label="Pipeline value" value="₹18.4L" delta="+6.2%" />
      <Stat label="Win rate" value="32%" delta="+3 pts" />
    </div>
    <div className="mt-2.5 grid grid-cols-5 gap-2.5">
      <div className="col-span-5 md:col-span-3 bg-white rounded-xl border border-[#E3E9F3] p-3">
        <div className="text-[11px] font-semibold text-[#081426] mb-2">Sales pipeline</div>
        <div className="space-y-2">
          {STAGES.map((s) => (
            <div key={s.n} className="flex items-center gap-2">
              <span className="w-[58px] text-[10px] text-[#5D6B80]">{s.n}</span>
              <div className="flex-1 h-2.5 rounded bg-[#E6ECF6]"><div className="h-full rounded" style={{ width: `${s.w}%`, background: s.c }} /></div>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden md:block col-span-2 bg-white rounded-xl border border-[#E3E9F3] p-3">
        <div className="text-[11px] font-semibold text-[#081426] mb-2">Next follow-ups</div>
        {[['Demo call', '10:30'], ['Send quote', '12:00'], ['WhatsApp reply', '15:15']].map(([a, t]) => (
          <div key={a} className="flex justify-between text-[10px] py-1 border-b border-[#EEF2F8] last:border-0">
            <span className="text-[#15243A]">{a}</span><span className="text-[#5D6B80]">{t}</span>
          </div>
        ))}
      </div>
    </div>
  </Frame>
);

const COLS = [
  { t: 'New', c: '#8B5CF6', cards: [['Aarav Textiles', '₹1.2L'], ['Nova Clinics', '₹80K'], ['BlueLeaf Studio', '₹45K']] },
  { t: 'Qualified', c: '#7C5CFC', cards: [['Kiran Logistics', '₹2.4L'], ['Orbit Learning', '₹1.1L']] },
  { t: 'Proposal', c: '#F59E0B', cards: [['Meridian Realty', '₹3.8L'], ['Pixel & Co.', '₹90K']] },
  { t: 'Won', c: '#14A37F', cards: [['Sutra Foods', '₹2.9L']] },
];

export const PipelineMock = () => (
  <Frame title="Pipeline" active="Pipeline">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
      {COLS.map((col) => (
        <div key={col.t} className="bg-[#EEF2F9] rounded-xl p-2">
          <div className="flex items-center gap-1.5 text-[10px] font-semibold text-[#15243A] px-1 pb-2">
            <span className="w-2 h-2 rounded-full" style={{ background: col.c }} />{col.t}
            <span className="ml-auto text-[#5D6B80] font-normal">{col.cards.length}</span>
          </div>
          <div className="space-y-2">
            {col.cards.map(([n, v]) => (
              <div key={n} className="bg-white rounded-lg border border-[#E3E9F3] p-2 shadow-sm">
                <div className="text-[10px] font-semibold text-[#081426]">{n}</div>
                <div className="flex justify-between text-[9px] text-[#5D6B80] mt-1"><span>Next: follow-up</span><span className="text-[#8B5CF6] font-semibold">{v}</span></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Frame>
);

const LEADS = [
  ['Aarav Textiles', 'Website form', 'Priya S.', 'Qualified', '#8B5CF6'],
  ['Nova Clinics', 'Meta Ads', 'Rohan M.', 'New', '#7C5CFC'],
  ['Kiran Logistics', 'Import', 'Priya S.', 'Proposal', '#F59E0B'],
  ['Orbit Learning', 'Click-to-WhatsApp', 'Isha D.', 'Qualified', '#8B5CF6'],
  ['BlueLeaf Studio', 'Google Ads', 'Rohan M.', 'New', '#7C5CFC'],
];

export const LeadsMock = () => (
  <Frame title="Leads" active="Leads">
    <div className="bg-white rounded-xl border border-[#E3E9F3] overflow-hidden">
      <div className="grid grid-cols-4 sm:grid-cols-5 text-[9px] uppercase tracking-wider text-[#5D6B80] bg-[#F1F5FB] px-3 py-2">
        <span className="col-span-2 sm:col-span-1">Lead</span><span>Source</span><span className="hidden sm:block">Owner</span><span>Status</span>
      </div>
      {LEADS.map(([n, s, o, st, c]) => (
        <div key={n} className="grid grid-cols-4 sm:grid-cols-5 items-center text-[10px] px-3 py-2 border-t border-[#EEF2F8]">
          <span className="col-span-2 sm:col-span-1 font-semibold text-[#081426]">{n}</span>
          <span className="text-[#5D6B80]">{s}</span>
          <span className="hidden sm:block text-[#5D6B80]">{o}</span>
          <span><span className="px-1.5 py-0.5 rounded-full text-[9px] font-semibold" style={{ background: `${c}1A`, color: c }}>{st}</span></span>
        </div>
      ))}
    </div>
  </Frame>
);

export const InboxMock = () => (
  <Frame title="Shared inbox" active="Leads">
    <div className="grid grid-cols-5 gap-2.5">
      <div className="hidden md:block col-span-2 bg-white rounded-xl border border-[#E3E9F3] p-2 space-y-1.5">
        {[['Aarav T.', 'Can you share the quote?', true], ['Nova C.', 'Thanks, see you Friday', false], ['Orbit L.', 'Do you integrate with…', false]].map(([n, m, a]) => (
          <div key={n} className={`rounded-lg p-2 ${a ? 'bg-[#EAF1FF]' : ''}`}>
            <div className="text-[10px] font-semibold text-[#081426]">{n}</div>
            <div className="text-[9px] text-[#5D6B80] truncate">{m}</div>
          </div>
        ))}
      </div>
      <div className="col-span-5 md:col-span-3 bg-white rounded-xl border border-[#E3E9F3] p-3 flex flex-col gap-2">
        <div className="text-[10px] font-semibold text-[#081426]">Aarav Textiles <span className="text-[#5D6B80] font-normal">· +91 98•••• ••21</span></div>
        <div className="self-start max-w-[80%] bg-[#F1F5FB] rounded-xl rounded-tl-sm px-2.5 py-1.5 text-[10px]">Hi! Can you share the quote for 25 seats?</div>
        <div className="self-end max-w-[80%] bg-[#8B5CF6] text-white rounded-xl rounded-tr-sm px-2.5 py-1.5 text-[10px]">Sure — sending it over now.</div>
        <div className="self-end text-[9px] text-[#5D6B80]">Assigned to Priya S.</div>
      </div>
    </div>
  </Frame>
);

export const QuoteMock = () => (
  <Frame title="Quotations" active="Reports">
    <div className="grid grid-cols-5 gap-2.5">
      <div className="col-span-5 md:col-span-3 bg-white rounded-xl border border-[#E3E9F3] p-3">
        <div className="flex justify-between text-[10px] mb-2"><span className="font-semibold text-[#081426]">Quotation #Q-1042</span><span className="text-amber-600 font-semibold">Sent</span></div>
        {[['CRM seats × 25', '₹1,25,000'], ['Onboarding', '₹20,000'], ['WhatsApp add-on', '₹15,000']].map(([a, b]) => (
          <div key={a} className="flex justify-between text-[10px] py-1.5 border-b border-[#EEF2F8]"><span>{a}</span><span className="text-[#5D6B80]">{b}</span></div>
        ))}
        <div className="flex justify-between text-[11px] font-bold pt-2"><span>Total</span><span className="text-[#8B5CF6]">₹1,60,000</span></div>
      </div>
      <div className="hidden md:block col-span-2 bg-white rounded-xl border border-[#E3E9F3] p-3 text-[10px]">
        <div className="font-semibold text-[#081426] mb-2">Invoice status</div>
        {[['Q-1038', 'Paid', '#14A37F'], ['Q-1040', 'Pending', '#F59E0B'], ['Q-1042', 'Draft', '#5D6B80']].map(([a, b, c]) => (
          <div key={a} className="flex justify-between py-1"><span>{a}</span><span className="font-semibold" style={{ color: c }}>{b}</span></div>
        ))}
      </div>
    </div>
  </Frame>
);

export const TimelineMock = () => (
  <Frame title="Customer timeline" active="Leads">
    <div className="bg-white rounded-xl border border-[#E3E9F3] p-3 space-y-3">
      <div className="text-[11px] font-semibold text-[#081426]">Meridian Realty</div>
      {[['Call logged', 'Discussed requirements', '2d ago', '#8B5CF6'], ['Email sent', 'Proposal v2 shared', '1d ago', '#7C5CFC'], ['Meeting booked', 'Demo — Thursday 11:00', 'Today', '#14A37F']].map(([a, b, t, c]) => (
        <div key={a} className="flex gap-2.5">
          <span className="mt-1 w-2 h-2 rounded-full shrink-0" style={{ background: c }} />
          <div className="flex-1 text-[10px]"><div className="font-semibold text-[#15243A]">{a}</div><div className="text-[#5D6B80]">{b}</div></div>
          <span className="text-[9px] text-[#5D6B80]">{t}</span>
        </div>
      ))}
    </div>
  </Frame>
);

export const CalendarMock = () => (
  <Frame title="Calendar" active="Calendar">
    <div className="grid grid-cols-5 gap-1.5 text-[9px] text-center text-[#5D6B80]">
      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((d) => <div key={d}>{d}</div>)}
      {[['Demo', 0], ['', 1], ['Follow-up', 2], ['Demo', 3], ['Review', 4], ['', 0], ['Quote call', 1], ['', 2], ['Follow-up', 3], ['', 4]].map(([t, i], k) => (
        <div key={k} className={`h-9 rounded-md ${t ? 'text-white font-semibold flex items-center justify-center' : 'bg-[#EEF2F9]'}`} style={t ? { background: ['#8B5CF6', '#7C5CFC', '#14A37F', '#F59E0B', '#0EA5E9'][i] } : {}}>{t}</div>
      ))}
    </div>
  </Frame>
);
