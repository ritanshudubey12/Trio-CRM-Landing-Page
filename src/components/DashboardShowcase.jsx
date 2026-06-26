import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = ['Executive', 'Inventory', 'Bookings', 'Collections', 'Channel Partners'];

const DashboardShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 dashboard-section">
      <div className="max-w-[1200px] mx-auto px-12 relative z-10">
        
        <div className="text-center mb-10">
          <h2 className="text-[40px] font-[700] text-[#0F172A] leading-[1.15] mb-4">A Dashboard for Every Decision</h2>
          <p className="text-[17px] text-[#64748B]">Real-time visibility across all your operations.</p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="bg-white border border-[#E2E8F0] rounded-[10px] p-1 inline-flex shadow-sm">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-2 rounded-[8px] text-[14px] font-[500] transition-all duration-200 cursor-pointer ${
                  activeTab === i 
                    ? 'bg-[#2563EB] text-white shadow-[0_2px_8px_rgba(37,99,235,0.3)]' 
                    : 'text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-[960px] mx-auto bg-white border border-[#E2E8F0] rounded-[16px] p-6 shadow-[0_16px_48px_rgba(15,23,42,0.1)] min-h-[420px] relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="h-full flex flex-col"
            >
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#F1F5F9]">
                <div className="font-bold text-[#0F172A]">{tabs[activeTab]} Dashboard</div>
                <div className="text-[13px] text-[#64748B] bg-[#F8FAFC] px-3 py-1 rounded-md border border-[#E2E8F0]">Updated just now</div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="bg-[#F8FAFC] p-4 rounded-[12px] border border-[#E2E8F0]">
                    <div className="text-[12px] uppercase text-[#64748B] font-semibold tracking-wide mb-2">Metric {num}</div>
                    <div className="text-[28px] font-[700] text-[#0F172A] leading-none mb-2">
                      {activeTab === 0 ? (num * 124) : activeTab === 3 ? `₹${num * 4}.2Cr` : (num * 45)}
                    </div>
                    <div className="text-[12px] text-[#22C55E]">+12% vs last month</div>
                  </div>
                ))}
              </div>

              <div className="flex-1 bg-[#F8FAFC] p-6 rounded-[12px] border border-[#E2E8F0] min-h-[200px] flex items-end gap-2">
                {[40, 70, 45, 90, 65, 80, 55, 100, 75, 50, 85, 60].map((h, idx) => (
                  <div key={idx} className="flex-1 bg-gradient-to-t from-[#2563EB] to-[#60A5FA] rounded-t-sm" style={{ height: `${h}%` }}></div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default DashboardShowcase;
