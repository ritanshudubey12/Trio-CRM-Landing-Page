import React from 'react';
import { ArrowRight, Play, CheckCircle2, IndianRupee, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 1, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
};

const Hero = () => {
  return (
    <section className="hero-bg min-h-screen flex items-center pt-20 pb-20">
      <div className="hero-grid" />

      <div className="max-w-[1200px] mx-auto px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div {...fadeUp}>
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[13px] font-medium mb-[24px]">
              Real Estate OS · Trusted by 500+ Builders
            </div>
            
            <h1 className="text-[52px] font-[800] text-[#0F172A] leading-[1.1] mb-[24px]">
              Complete Real Estate CRM <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#2563EB] to-[#1D4ED8]">for Builders &<br/>Developers</span>
            </h1>
            
            <p className="text-[18px] text-[#475569] mb-[24px] leading-[1.6] max-w-[460px]">
              Manage Projects, Inventory, Site Visits, Bookings, Collections, Channel Partners and Sales Teams — from one intelligent platform.
            </p>
            
            <div className="flex flex-row gap-[16px] mb-[20px]">
              <button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-[28px] py-[14px] rounded-[10px] font-[600] text-[16px] flex items-center justify-center gap-2 transition-transform hover:-translate-y-[1px] shadow-[0_4px_14px_rgba(37,99,235,0.35)] cursor-pointer">
                Book a Free Demo <ArrowRight size={18} />
              </button>
              <button className="bg-white hover:border-[#2563EB] hover:text-[#2563EB] text-[#0F172A] border-[1.5px] border-[#E2E8F0] px-[24px] py-[14px] rounded-[10px] font-[500] text-[16px] flex items-center justify-center gap-2 transition-colors cursor-pointer">
                <Play size={18} className="text-[#2563EB]" fill="currentColor" /> Watch Demo
              </button>
            </div>
            
            <div className="flex flex-row gap-[24px] text-[13px] text-[#64748B]">
              <div className="flex items-center gap-1"><CheckCircle2 size={16} className="text-[#22C55E]" /> No credit card required</div>
              <div className="flex items-center gap-1"><CheckCircle2 size={16} className="text-[#22C55E]" /> Setup in 48 hours</div>
              <div className="flex items-center gap-1"><CheckCircle2 size={16} className="text-[#22C55E]" /> Onboarding included</div>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="relative">
            <div className="bg-white rounded-[16px] border border-[#E2E8F0] p-[20px] shadow-[0_24px_64px_rgba(15,23,42,0.12),0_4px_16px_rgba(15,23,42,0.06)] transform perspective-[1000px] rotate-x-[1deg] -rotate-y-[3deg]">
              
              <div className="flex justify-between items-center border-b border-[#F1F5F9] pb-[12px] mb-[16px]">
                <div>
                  <span className="text-[13px] font-bold text-[#0F172A]">Executive Dashboard</span>
                  <span className="text-[13px] text-[#94A3B8] ml-2">Q4 2024</span>
                </div>
                <div className="flex items-center gap-1.5 bg-green-50 text-[#22C55E] text-[11px] px-2 py-0.5 rounded-full font-mono font-medium border border-green-100 uppercase tracking-wide">
                  <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full animate-pulse"></span>
                  Live
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-[#F8FAFC] rounded-[10px] p-[12px_16px]">
                  <div className="text-[11px] uppercase tracking-wide text-[#64748B] mb-1">Total Leads</div>
                  <div className="text-[24px] font-[700] text-[#0F172A] leading-none mb-1">1,284</div>
                  <div className="text-[12px] text-[#22C55E]">+12% vs last month</div>
                </div>
                <div className="bg-[#F8FAFC] rounded-[10px] p-[12px_16px]">
                  <div className="text-[11px] uppercase tracking-wide text-[#64748B] mb-1">Site Visits</div>
                  <div className="text-[24px] font-[700] text-[#0F172A] leading-none mb-1">847</div>
                  <div className="text-[12px] text-[#22C55E]">+8% vs last month</div>
                </div>
                <div className="bg-[#F8FAFC] rounded-[10px] p-[12px_16px]">
                  <div className="text-[11px] uppercase tracking-wide text-[#64748B] mb-1">Bookings</div>
                  <div className="text-[24px] font-[700] text-[#0F172A] leading-none mb-1">142</div>
                  <div className="text-[12px] text-[#22C55E]">+24% vs last month</div>
                </div>
                <div className="bg-[#F8FAFC] rounded-[10px] p-[12px_16px]">
                  <div className="text-[11px] uppercase tracking-wide text-[#64748B] mb-1">Collection</div>
                  <div className="text-[24px] font-[700] text-[#0F172A] leading-none mb-1">₹48.6Cr</div>
                  <div className="text-[12px] text-[#22C55E]">+18% vs last month</div>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-[12px] text-[#475569] font-medium mb-3">Project-wise Inventory</div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-[12px]">
                    <div className="w-20 text-[#64748B]">Skyline</div>
                    <div className="flex-1 h-2 bg-[#F1F5F9] rounded-full overflow-hidden flex">
                      <div className="w-[70%] h-full bg-[#2563EB]"></div>
                    </div>
                    <div className="text-[#0F172A] font-medium w-8 text-right">70%</div>
                  </div>
                  <div className="flex items-center gap-3 text-[12px]">
                    <div className="w-20 text-[#64748B]">Marina Bay</div>
                    <div className="flex-1 h-2 bg-[#F1F5F9] rounded-full overflow-hidden flex">
                      <div className="w-[45%] h-full bg-[#2563EB]"></div>
                    </div>
                    <div className="text-[#0F172A] font-medium w-8 text-right">45%</div>
                  </div>
                  <div className="flex items-center gap-3 text-[12px]">
                    <div className="w-20 text-[#64748B]">Green Valley</div>
                    <div className="flex-1 h-2 bg-[#F1F5F9] rounded-full overflow-hidden flex">
                      <div className="w-[85%] h-full bg-[#2563EB]"></div>
                    </div>
                    <div className="text-[#0F172A] font-medium w-8 text-right">85%</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <div className="flex-1 bg-[#F1F5F9] text-[12px] font-medium text-[#475569] rounded-[8px] py-1.5 flex items-center justify-center gap-1.5">
                  <Building2 size={14} className="text-[#2563EB]"/> Skyline
                </div>
                <div className="flex-1 bg-[#F1F5F9] text-[12px] font-medium text-[#475569] rounded-[8px] py-1.5 flex items-center justify-center gap-1.5">
                  <Building2 size={14} className="text-[#2563EB]"/> Marina
                </div>
                <div className="flex-1 bg-[#F1F5F9] text-[12px] font-medium text-[#475569] rounded-[8px] py-1.5 flex items-center justify-center gap-1.5">
                  <Building2 size={14} className="text-[#2563EB]"/> Green Val
                </div>
              </div>
            </div>

            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-4 -right-4 bg-white border border-[#E2E8F0] rounded-[10px] p-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex items-center gap-3 max-w-[220px]">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-[#22C55E] shrink-0"><CheckCircle2 size={16}/></div>
              <div className="leading-tight">
                <div className="text-[12px] font-bold text-[#0F172A]">Booking Confirmed</div>
                <div className="text-[10px] text-[#64748B]">Unit A-104 · ₹1.2Cr</div>
              </div>
            </motion.div>

            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-6 -left-6 bg-white border border-[#E2E8F0] rounded-[10px] p-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex items-center gap-3 max-w-[220px]">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[#2563EB] shrink-0"><IndianRupee size={16}/></div>
              <div className="leading-tight">
                <div className="text-[12px] font-bold text-[#0F172A]">Payment Received</div>
                <div className="text-[10px] text-[#64748B]">Demand #4 · Skyline</div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
