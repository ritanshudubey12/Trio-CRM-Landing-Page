import React from 'react';
import { ArrowRight, Star, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Stars } from './Stars';

const fadeUp = {
  initial: { opacity: 1, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
};

const BookDemo = () => {
  return (
    <section className="py-20 demo-section dark-section">
      <Stars />
      <div className="demo-blob-1"></div>
      <div className="demo-blob-2"></div>
      <div className="demo-blob-3"></div>

      <div className="max-w-[1200px] mx-auto px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-[80px] items-center">
          
          {/* Left Text */}
          <motion.div {...fadeUp}>
            <div className="inline-block px-4 py-1 bg-blue-600/20 border border-blue-600/30 rounded-full text-white text-[12px] font-semibold tracking-[0.08em] uppercase mb-5">
              GET STARTED
            </div>
            
            <h2 className="text-[40px] font-[700] text-white leading-[1.15] mb-4">
              Ready to Transform Your Real Estate Operations?
            </h2>
            
            <p className="text-[16px] text-[#94A3B8] leading-[1.6]">
              Join 500+ builders already on Trio CRM. Get a personalized demo in under 30 minutes.
            </p>
            
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-[#22C55E]" />
                <span className="text-[15px] text-white">Full platform walkthrough</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-[#22C55E]" />
                <span className="text-[15px] text-white">Custom workflow mapping</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-[#22C55E]" />
                <span className="text-[15px] text-white">Transparent pricing, no surprises</span>
              </div>
            </div>

            <div className="mt-7 flex items-center gap-3 text-[14px] text-[#94A3B8]">
              <div className="flex text-[#F59E0B]">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" stroke="none" />)}
              </div>
              <span>4.9/5 · 120+ reviews</span>
            </div>
          </motion.div>

          {/* Right Form Card */}
          <motion.div {...fadeUp}>
            <div className="demo-form-card shadow-[0_24px_64px_rgba(0,0,0,0.25)]">
              <h3 className="text-[20px] font-[600] text-[#0F172A] mb-[24px]">Schedule your free demo</h3>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-[12px] font-[500] text-[#374151] uppercase tracking-wide mb-1.5">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full p-[11px_14px] border-[1.5px] border-[#E2E8F0] rounded-[8px] text-[15px] text-[#0F172A] focus:outline-none focus:border-[#2563EB] box-border"
                  />
                </div>
                
                <div>
                  <label className="block text-[12px] font-[500] text-[#374151] uppercase tracking-wide mb-1.5">Company Name</label>
                  <input 
                    type="text" 
                    placeholder="Skyline Developers" 
                    className="w-full p-[11px_14px] border-[1.5px] border-[#E2E8F0] rounded-[8px] text-[15px] text-[#0F172A] focus:outline-none focus:border-[#2563EB] box-border"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[12px] font-[500] text-[#374151] uppercase tracking-wide mb-1.5">Phone</label>
                    <input 
                      type="tel" 
                      placeholder="+91 98765 43210" 
                      className="w-full p-[11px_14px] border-[1.5px] border-[#E2E8F0] rounded-[8px] text-[15px] text-[#0F172A] focus:outline-none focus:border-[#2563EB] box-border"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] font-[500] text-[#374151] uppercase tracking-wide mb-1.5">Email</label>
                    <input 
                      type="email" 
                      placeholder="john@skyline.com" 
                      className="w-full p-[11px_14px] border-[1.5px] border-[#E2E8F0] rounded-[8px] text-[15px] text-[#0F172A] focus:outline-none focus:border-[#2563EB] box-border"
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full mt-[20px] p-[14px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[16px] font-[600] rounded-[10px] border-none cursor-pointer shadow-[0_4px_14px_rgba(37,99,235,0.4)] transition-all flex items-center justify-center gap-2"
                >
                  Book My Free Demo <ArrowRight size={18} />
                </button>
                
                <p className="text-center text-[13px] text-[#94A3B8] mt-[12px]">
                  We'll call you within 2 business hours.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookDemo;
