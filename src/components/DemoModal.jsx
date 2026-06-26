import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Building2, User, Phone, Mail, ArrowRight } from 'lucide-react';

const DemoModal = ({ isOpen, onClose }) => {
  // Prevent scrolling when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-[520px] bg-white rounded-[24px] shadow-2xl overflow-hidden z-10"
          >
            {/* Header */}
            <div className="px-8 pt-8 pb-6 border-b border-slate-100">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
              <h2 className="text-[28px] font-[800] text-slate-900 leading-tight">
                Schedule your free demo
              </h2>
              <p className="text-slate-500 mt-2 text-[15px]">
                See how Trio CRM can transform your real estate business.
              </p>
            </div>

            {/* Form */}
            <div className="p-8">
              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); onClose(); alert('Demo request submitted successfully!'); }}>
                <div>
                  <label className="block text-[12px] font-[700] text-slate-600 tracking-wider uppercase mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-[12px] text-[15px] focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[12px] font-[700] text-slate-600 tracking-wider uppercase mb-2">
                    Company Name
                  </label>
                  <div className="relative">
                    <Building2 size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input 
                      type="text" 
                      placeholder="Skyline Developers"
                      className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-[12px] text-[15px] focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[12px] font-[700] text-slate-600 tracking-wider uppercase mb-2">
                      Phone
                    </label>
                    <div className="relative">
                      <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input 
                        type="tel" 
                        placeholder="+91 98765 43210"
                        className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-[12px] text-[15px] focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[12px] font-[700] text-slate-600 tracking-wider uppercase mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input 
                        type="email" 
                        placeholder="john@skyline.com"
                        className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-[12px] text-[15px] focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit"
                    className="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white font-[700] text-[16px] py-4 rounded-[12px] flex items-center justify-center gap-2 transition-all shadow-[0_8px_20px_rgba(37,99,235,0.25)] hover:shadow-[0_12px_25px_rgba(37,99,235,0.35)] hover:-translate-y-0.5"
                  >
                    Book My Free Demo <ArrowRight size={18} />
                  </button>
                  <p className="text-center text-[13px] text-slate-500 font-medium mt-4">
                    We'll call you within 2 business hours.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DemoModal;
