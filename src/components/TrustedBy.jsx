import React from 'react';
import { Building2 } from 'lucide-react';

const companies = [
  "IICPA", "HS Codes", "Tax Esquire", "Menorah", "The Poetry Shop",
  "IICPA", "HS Codes", "Tax Esquire", "Menorah", "The Poetry Shop"
];

const TrustedBy = () => {
  return (
    <section className="py-10 relative bg-[#FAFCFF] border-y border-[#F1F5F9] overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.08),transparent_70%)]" />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.3 }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/20 to-transparent" />

      <div className="relative z-10 text-center text-[13px] text-[#94A3B8] tracking-widest uppercase mb-7 font-medium">
        Trusted by 1000+ growing business across India
      </div>
      
      <div className="relative flex overflow-hidden group w-full" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
        <div className="flex animate-marquee gap-4 w-max">
          {[...companies, ...companies, ...companies, ...companies].map((company, index) => (
            <div key={index} className="relative overflow-hidden flex items-center gap-2 shrink-0 bg-white/70 backdrop-blur-md border border-[#E2E8F0]/80 rounded-[12px] px-6 py-3 shadow-[0_4px_14px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(37,99,235,0.12)] hover:border-[#2563EB]/30 hover:-translate-y-0.5 group/card">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent translate-x-[-100%] group-hover/card:translate-x-[100%] transition-transform duration-700 ease-in-out pointer-events-none opacity-80" />
              <Building2 size={16} className="text-[#94A3B8] transition-colors group-hover/card:text-[#2563EB] relative z-10" />
              <span className="text-[14px] font-[600] text-[#475569] transition-colors group-hover/card:text-[#0F172A] relative z-10">{company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
