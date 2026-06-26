import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Zap, Network, BrainCircuit, X, Check, FileSpreadsheet, CalendarDays, Wallet, UserX, BarChart3, MapPin } from 'lucide-react';
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
  { feat: "Inventory", old: "Excel", new: "Live Sync", icon: FileSpreadsheet },
  { feat: "Booking", old: "Manual", new: "1-Click Digital", icon: CalendarDays },
  { feat: "Collections", old: "WhatsApp", new: "Auto-Demands", icon: Wallet },
  { feat: "CP Management", old: "Phone calls", new: "Partner Portal", icon: UserX },
  { feat: "Reports", old: "Monthly", new: "Live Dashboard", icon: BarChart3 },
  { feat: "Site Visits", old: "No tracking", new: "QR Check-in", icon: MapPin },
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

        <div className="grid lg:grid-cols-2 gap-16 items-stretch mt-14">
          
          {/* Left Features */}
          <div className="flex flex-col justify-between h-full gap-3">
            {features.map((feat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -30, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1, type: "spring", stiffness: 100, damping: 15 }}
                className="group relative flex items-start gap-4 p-4 rounded-[16px] bg-[#0B1120]/80 backdrop-blur-xl border border-white/5 hover:border-blue-500/40 transition-all duration-500 overflow-hidden shadow-[0_0_0_0_rgba(37,99,235,0)] hover:shadow-[0_8px_30px_-8px_rgba(37,99,235,0.25)] hover:-translate-y-0.5"
              >
                {/* Glowing Background Reveal on Hover */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="w-11 h-11 shrink-0 bg-blue-950/40 border border-blue-500/20 group-hover:border-blue-400/60 group-hover:bg-blue-900/40 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-[inset_0_0_12px_rgba(37,99,235,0.15)] relative z-10">
                  <feat.icon size={20} className="text-blue-500 group-hover:text-blue-300 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" strokeWidth={1.5} />
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-[15px] font-[600] text-slate-300 group-hover:text-white tracking-wide mb-1 transition-colors duration-300">{feat.title}</h3>
                  <p className="text-[13px] text-slate-500 group-hover:text-slate-300 leading-[1.5] font-[400] transition-colors duration-300">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Table */}
          <motion.div {...fadeUp} className="bg-white/5 border border-white/10 rounded-[16px] overflow-hidden flex flex-col h-full justify-between">
            <div className="grid grid-cols-3 bg-white/10 p-[14px_20px] text-[12px] uppercase tracking-wide">
              <div className="text-[#64748B]">Feature</div>
              <div className="text-[#64748B]">Old Way</div>
              <div className="text-[#60A5FA]">Trio CRM</div>
            </div>
            
            <div className="flex flex-col">
              {tableRows.map((row, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, type: "spring", stiffness: 100, damping: 15 }}
                  whileHover={{ x: 8, backgroundColor: "rgba(255,255,255,0.06)" }}
                  className="grid grid-cols-3 p-[16px_20px] border-b border-white/5 last:border-b-0 items-center group cursor-default"
                >
                  <div className="text-[14px] font-[500] text-[#E2E8F0] flex items-center gap-3">
                    <div className="w-7 h-7 rounded-[6px] bg-white/5 border border-white/10 flex items-center justify-center text-[#94A3B8] group-hover:text-[#60A5FA] group-hover:border-[#60A5FA]/30 group-hover:bg-[#60A5FA]/10 transition-all duration-300">
                      <row.icon size={14} />
                    </div>
                    {row.feat}
                  </div>
                  <div className="text-[13.5px] font-[500] text-[#EF4444]/90 flex items-center gap-2">
                    <X size={14} className="shrink-0 group-hover:scale-110 transition-transform duration-300" /> {row.old}
                  </div>
                  <div className="text-[13.5px] font-[600] text-[#10B981] flex items-center gap-1.5 bg-[#10B981]/10 w-max px-3 py-1.5 rounded-full border border-[#10B981]/20 shadow-[0_0_10px_rgba(16,185,129,0.05)] group-hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:scale-105 transition-all duration-300 origin-left">
                    <Check size={14} className="stroke-[3]" /> {row.new}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyTrioCRM;
