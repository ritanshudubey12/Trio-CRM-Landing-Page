import React from 'react';
import { motion } from 'framer-motion';
import { Stars } from './Stars';

const fadeUp = {
  initial: { opacity: 1, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
};

// Floor setup
const floors = [
  { level: "Floor 12", units: ['A', 'A', 'A', 'B', 'A', 'A'] }, 
  { level: "Floor 11", units: ['A', 'B', 'B', 'L', 'A', 'A'] },
  { level: "Floor 10", units: ['B', 'A', 'A', 'L', 'B', 'A'] },
  { level: "Floor 09", units: ['A', 'A', 'B', 'B', 'B', 'A'] },
  { level: "Floor 08", units: ['A', 'A', 'A', 'A', 'L', 'L'] },
];

const getUnitClasses = (type, isPulse) => {
  if (type === 'A') return `unit-available ${isPulse ? 'unit-pulse' : ''}`;
  if (type === 'B') return "unit-booked";
  if (type === 'L') return "unit-blocked";
  return "";
};

const InventoryShowcase = () => {
  return (
    <section className="py-20 dark-section inventory-section">
      <Stars />
      <div className="max-w-[1200px] mx-auto px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <motion.div {...fadeUp}>
            <div className="inline-block px-4 py-1 bg-blue-600/15 border border-blue-600/30 rounded-full text-[#93C5FD] text-[12px] font-semibold tracking-[0.08em] uppercase mb-4">
              INVENTORY MANAGEMENT
            </div>
            
            <h2 className="text-[38px] font-[700] text-white leading-[1.15] mb-6">
              Real-Time Inventory at Your Fingertips
            </h2>
            
            <p className="text-[16px] text-[#94A3B8] leading-[1.7] mb-8">
              Know exactly which units are available, blocked, or booked — across all your projects — in real time. No Excel. No calls. No overbooking. Ever.
            </p>

            <div className="bg-white/[0.04] rounded-[10px] p-[16px_20px] font-mono text-[13px] text-[#94A3B8]">
              <div className="flex items-center gap-2">
                <span className="text-[#60A5FA]">📂</span> Project
              </div>
              <div className="flex items-center gap-2 ml-4 mt-2 border-l border-white/10 pl-3">
                <span className="text-[#60A5FA]">↳</span> Phase
              </div>
              <div className="flex items-center gap-2 ml-8 mt-2 border-l border-white/10 pl-3">
                <span className="text-[#60A5FA]">↳</span> Tower
              </div>
              <div className="flex items-center gap-2 ml-12 mt-2 border-l border-white/10 pl-3">
                <span className="text-[#60A5FA]">↳</span> Floor
              </div>
              <div className="flex items-center gap-2 ml-16 mt-2 border-l border-white/10 pl-3">
                <span className="text-[#60A5FA]">↳</span> Unit
              </div>
            </div>
          </motion.div>

          {/* Right Matrix */}
          <motion.div {...fadeUp} className="bg-white/[0.05] border border-white/10 rounded-[16px] p-6 shadow-2xl backdrop-blur-sm">
            
            <div className="text-[13px] text-[#94A3B8] font-medium mb-4">
              Skyline Heights · Tower A · Phase 1
            </div>

            <div className="flex flex-col gap-2">
              {floors.map((floor, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="text-[12px] text-[#64748B] w-[60px] shrink-0 font-medium">{floor.level}</div>
                  <div className="flex gap-[6px]">
                    {floor.units.map((u, j) => (
                      <div 
                        key={j} 
                        title={u === 'A' ? `Unit A-${12-i}0${j+1} · 2BHK · ₹85L` : ''}
                        className={`${getUnitClasses(u, i === 3 && j === 0)}`}
                      ></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-5 mt-4 pt-4 border-t border-white/[0.08]">
              <div className="flex items-center gap-1.5 text-[12px] text-[#64748B]">
                <span className="text-[10px]">🟢</span> Available (18)
              </div>
              <div className="flex items-center gap-1.5 text-[12px] text-[#64748B]">
                <span className="text-[10px]">🔴</span> Booked (8)
              </div>
              <div className="flex items-center gap-1.5 text-[12px] text-[#64748B]">
                <span className="text-[10px]">🟡</span> Blocked (4)
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-6">
              <div className="bg-white/[0.05] rounded-[8px] p-[10px_14px]">
                <div className="text-[20px] font-[700] text-white leading-none mb-1">30</div>
                <div className="text-[11px] text-[#64748B] uppercase tracking-wide">Total</div>
              </div>
              <div className="bg-white/[0.05] rounded-[8px] p-[10px_14px]">
                <div className="text-[20px] font-[700] text-white leading-none mb-1">18</div>
                <div className="text-[11px] text-[#64748B] uppercase tracking-wide">Available</div>
              </div>
              <div className="bg-white/[0.05] rounded-[8px] p-[10px_14px]">
                <div className="text-[20px] font-[700] text-white leading-none mb-1">60%</div>
                <div className="text-[11px] text-[#64748B] uppercase tracking-wide">Occupancy</div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InventoryShowcase;
