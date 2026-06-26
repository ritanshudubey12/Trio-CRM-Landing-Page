import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Zap, Network, BrainCircuit, X, Check } from 'lucide-react';
import { Stars } from './Stars';

const fadeUp = {
  initial: { opacity: 1, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
};

const features = [
  { icon: Building2, title: "Builder-First Architecture", desc: "Every module designed for real estate, not retrofitted" },
  { icon: Zap, title: "End-to-End Automation", desc: "Lead to possession — fully automated, zero manual steps" },
  { icon: Network, title: "Centralized Operations", desc: "All projects, teams, and data in one platform" },
  { icon: BrainCircuit, title: "AI-Ready Infrastructure", desc: "Predictive analytics and smart suggestions built in" }
];

const tableRows = [
  { feat: "Inventory", old: "Excel", oldIcon: true },
  { feat: "Booking", old: "Manual", oldIcon: true },
  { feat: "Collections", old: "WhatsApp", oldIcon: true },
  { feat: "CP Management", old: "Phone calls", oldIcon: true },
  { feat: "Reports", old: "Monthly", oldIcon: true },
  { feat: "Site Visits", old: "No tracking", oldIcon: true },
];

const WhyTrioCRM = () => {
  return (
    <section className="py-20 dark-section">
      <Stars />

      <div className="max-w-[1200px] mx-auto px-12 relative z-10">
        
        <motion.div {...fadeUp} className="text-center mb-14">
          <div className="inline-block px-4 py-1 bg-blue-600/15 border border-blue-600/30 rounded-full text-[#93C5FD] text-[12px] font-semibold tracking-[0.08em] uppercase mb-4">
            WHY TRIO CRM
          </div>
          <h2 className="text-[40px] font-[700] text-white leading-[1.15] mb-4">Built for Real Estate. Not adapted from generic CRM.</h2>
          <p className="text-[17px] text-[#94A3B8]">The only platform designed specifically for Indian builders and developers.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mt-14">
          
          {/* Left Features */}
          <div className="space-y-8">
            {features.map((feat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 1, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-11 h-11 shrink-0 bg-blue-600/15 border border-blue-600/25 rounded-[12px] flex items-center justify-center">
                  <feat.icon size={20} className="text-[#60A5FA]" />
                </div>
                <div>
                  <h3 className="text-[16px] font-[600] text-white">{feat.title}</h3>
                  <p className="text-[14px] text-[#94A3B8] leading-[1.6] mt-1">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Table */}
          <motion.div {...fadeUp} className="bg-white/5 border border-white/10 rounded-[16px] overflow-hidden">
            <div className="grid grid-cols-3 bg-white/10 p-[14px_20px] text-[12px] uppercase tracking-wide">
              <div className="text-[#64748B]">Feature</div>
              <div className="text-[#64748B]">Old Way</div>
              <div className="text-[#60A5FA]">Trio CRM</div>
            </div>
            
            <div className="flex flex-col">
              {tableRows.map((row, i) => (
                <div key={i} className="grid grid-cols-3 p-[16px_20px] border-b border-white/5 last:border-b-0 items-center">
                  <div className="text-[14px] text-[#E2E8F0]">{row.feat}</div>
                  <div className="text-[14px] text-[#EF4444] flex items-center gap-2">
                    <X size={14} className="shrink-0" /> {row.old}
                  </div>
                  <div className="text-[14px] text-[#22C55E]">
                    <Check size={18} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyTrioCRM;
