import React from 'react';
import { Building2 } from 'lucide-react';

const companies = [
  "Lodha Group", "Godrej Properties", "DLF Limited", "Prestige Estates", 
  "Sobha Limited", "Oberoi Realty", "Puravankara", "Brigade Group",
  "Mahindra Lifespaces", "Sunteck Realty"
];

const TrustedBy = () => {
  return (
    <section className="py-10 bg-white border-y border-[#F1F5F9] overflow-hidden">
      <div className="text-center text-[13px] text-[#94A3B8] tracking-widest uppercase mb-7 font-medium">
        Trusted by India's Leading Real Estate Companies
      </div>
      
      <div className="relative flex overflow-hidden group w-full" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
        <div className="flex animate-marquee gap-4">
          {[...companies, ...companies].map((company, index) => (
            <div key={index} className="flex items-center gap-2 shrink-0 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] px-5 py-2.5">
              <Building2 size={16} className="text-[#94A3B8]" />
              <span className="text-[14px] font-[500] text-[#475569]">{company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
