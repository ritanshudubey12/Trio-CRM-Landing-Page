import React from 'react';
import { motion } from 'framer-motion';
import { Magnet, PhoneCall, MonitorPlay, MapPin, MousePointerClick, FileSignature, Wallet, CheckCircle, Home } from 'lucide-react';

const steps = [
  { icon: Magnet, title: "Lead Capture", desc: "Auto-sync from Facebook, MagicBricks, Website" },
  { icon: PhoneCall, title: "Contact & Qualification", desc: "First call, requirements gathered, lead scored" },
  { icon: MonitorPlay, title: "Project Presentation", desc: "Digital brochure & video walkthrough shared" },
  { icon: MapPin, title: "Site Visit", desc: "Walk-in registered, executive assigned instantly" },
  { icon: MousePointerClick, title: "Unit Selection", desc: "Live inventory checked, unit blocked for 24h" },
  { icon: FileSignature, title: "Booking", desc: "Digital form filled, KYC uploaded, approved" },
  { icon: Wallet, title: "Payment", desc: "Token amount collected via payment gateway" },
  { icon: CheckCircle, title: "Collections", desc: "Milestone demands sent, receipts generated" },
  { icon: Home, title: "Possession", desc: "Final handover, NOC issued, customer onboarded" },
];

const SalesWorkflow = () => {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-[1200px] mx-auto px-12">
        
        <div className="text-center mb-16">
          <div className="text-[12px] font-[600] tracking-[0.08em] text-[#2563EB] uppercase mb-3">COMPLETE WORKFLOW</div>
          <h2 className="text-[40px] font-[700] text-[#0F172A] leading-[1.15] mb-4">From First Inquiry to Final Possession</h2>
          <p className="text-[17px] text-[#64748B]">Every step tracked, automated, and visible.</p>
        </div>

        <div className="max-w-[720px] mx-auto relative">
          
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#E2E8F0] -translate-x-1/2 rounded-full">
            <motion.div 
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full bg-gradient-to-b from-[#2563EB] to-transparent rounded-full"
            ></motion.div>
          </div>

          <div className="flex flex-col gap-4">
            {steps.map((step, i) => {
              const isEven = i % 2 === 1;
              return (
                <div key={i} className={`flex items-center justify-between w-full ${isEven ? 'flex-row-reverse' : ''}`}>
                  
                  <div className="w-[calc(50%-28px)]">
                    <motion.div 
                      initial={{ opacity: 1, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className={`bg-white border border-[#E2E8F0] rounded-[12px] p-[16px_20px] max-w-[280px] ${isEven ? '' : 'ml-auto'}`}
                    >
                      <div className="text-[11px] uppercase text-[#94A3B8] font-bold tracking-wide mb-1">
                        STEP {(i + 1).toString().padStart(2, '0')}
                      </div>
                      <h3 className="text-[15px] font-[600] text-[#0F172A]">{step.title}</h3>
                      <p className="text-[13px] text-[#64748B] mt-1 leading-[1.5]">{step.desc}</p>
                    </motion.div>
                  </div>

                  <div className="relative z-10 w-[40px] h-[40px] rounded-full bg-white border-2 border-[#2563EB] flex items-center justify-center shrink-0 shadow-sm">
                    <step.icon size={18} className="text-[#2563EB]" />
                  </div>

                  <div className="w-[calc(50%-28px)]"></div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SalesWorkflow;
