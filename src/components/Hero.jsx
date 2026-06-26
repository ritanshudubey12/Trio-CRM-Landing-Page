import React from 'react';
import { ArrowRight, Play, CheckCircle2, IndianRupee, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 1, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
};

const Hero = ({ onOpenDemo }) => {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-20 relative overflow-hidden">
      {/* Premium Real Estate Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover z-0"
        poster="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-building-exterior-44163-large.mp4" type="video/mp4" />
      </video>
      {/* Dark Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-slate-950/85 z-0" />
      {/* Soft Glow in the center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_0%,transparent_60%)] z-0" />

      <div className="max-w-[1200px] mx-auto px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div {...fadeUp}>
            <h1 className="text-[52px] font-[800] text-white leading-[1.1] mb-[24px]">
              Complete Real Estate CRM <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#60A5FA] to-[#3B82F6]">for Builders &<br/>Developers</span>
            </h1>
            
            <p className="text-[18px] text-slate-300 mb-[32px] leading-[1.6] max-w-[460px]">
              Manage Projects, Inventory, Site Visits, Bookings, Collections, Channel Partners and Sales Teams — from one intelligent platform.
            </p>
            
            <div className="flex flex-row gap-[16px] mb-[32px]">
              <button onClick={onOpenDemo} className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-[28px] py-[15px] rounded-[10px] font-[600] text-[16px] flex items-center justify-center gap-2 transition-transform hover:-translate-y-[2px] shadow-[0_10px_25px_-5px_rgba(37,99,235,0.5)] cursor-pointer">
                Book a Free Demo <ArrowRight size={18} />
              </button>
            </div>
            
            <div className="flex flex-row gap-[24px] text-[13px] text-slate-400 font-medium">
              <div className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-[#22C55E]" /> No credit card required</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-[#22C55E]" /> Setup in 48 hours</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-[#22C55E]" /> Onboarding included</div>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="relative w-full max-w-lg mx-auto lg:ml-auto mt-10 lg:mt-0">
            {/* Animated Glowing Aura Behind Card */}
            <motion.div 
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-10 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-full blur-[80px] opacity-30"
            />
            
            <motion.div 
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative bg-white/80 backdrop-blur-2xl rounded-[16px] border border-white p-[24px] shadow-[0_32px_64px_rgba(15,23,42,0.1),inset_0_1px_0_rgba(255,255,255,0.6)] transform perspective-[1000px] hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(37,99,235,0.15)] transition-all duration-500 z-10 overflow-hidden"
            >
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
            </motion.div>

            <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-4 -right-4 bg-white border border-[#E2E8F0] rounded-[10px] p-3 shadow-[0_12px_24px_rgba(0,0,0,0.06)] flex items-center gap-3 max-w-[240px] z-20">
              <div className="w-9 h-9 rounded-full bg-green-50 flex items-center justify-center text-[#22C55E] shrink-0"><CheckCircle2 size={18}/></div>
              <div className="leading-tight">
                <div className="text-[13px] font-bold text-[#0F172A]">Booking Confirmed</div>
                <div className="text-[11px] text-[#64748B] mt-0.5">₹5,00,000 received for Unit A-402</div>
              </div>
            </motion.div>

            <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-6 -left-6 bg-white border border-[#E2E8F0] rounded-[10px] p-3 shadow-[0_12px_24px_rgba(0,0,0,0.06)] flex items-center gap-3 max-w-[240px] z-20">
              <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-[#2563EB] shrink-0"><IndianRupee size={18}/></div>
              <div className="leading-tight">
                <div className="text-[13px] font-bold text-[#0F172A]">Payment Received</div>
                <div className="text-[11px] text-[#64748B] mt-0.5">₹10,50,000 from client Amit Kumar</div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
