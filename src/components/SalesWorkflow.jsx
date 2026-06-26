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

        <div className="relative mt-12">
          {/* Subtle Background Path Line (Desktop) */}
          <div className="hidden lg:block absolute top-[80px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-blue-200 to-transparent z-0" />
          <div className="hidden lg:block absolute top-[280px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-blue-200 to-transparent z-0" />
          <div className="hidden lg:block absolute top-[480px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-blue-200 to-transparent z-0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative bg-white border border-slate-200 rounded-[20px] p-6 shadow-sm hover:shadow-[0_15px_40px_-15px_rgba(37,99,235,0.15)] hover:border-blue-400 transition-all duration-300 overflow-hidden"
              >
                {/* Huge Watermark Number */}
                <div className="absolute -right-4 -bottom-6 text-[100px] font-[900] text-slate-50 group-hover:text-blue-50 transition-colors duration-500 select-none z-0">
                  {i + 1}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-[14px] bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300 shrink-0">
                      <step.icon size={22} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="text-[11px] font-[800] tracking-widest text-blue-500 uppercase mb-0.5">
                        Step {(i + 1).toString().padStart(2, '0')}
                      </div>
                      <h3 className="text-[16px] font-[700] text-slate-900 leading-tight">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-[14px] text-slate-600 leading-[1.6] font-[500]">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Highlight Edge */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SalesWorkflow;
