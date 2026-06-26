import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, Target, LayoutDashboard, Wallet, Users, KeySquare, Calculator } from 'lucide-react';

const modules = [
  { icon: Building2, title: "Project Hub", features: ["Project master data", "Phase & tower setup", "Unit configurations"] },
  { icon: KeySquare, title: "Inventory Hub", features: ["Real-time unit status", "Block & release units", "Floor plan integration"] },
  { icon: Target, title: "Site Visit Center", features: ["Walk-in registration", "Executive assignment", "Feedback collection"] },
  { icon: Calendar, title: "Booking Center", features: ["Digital application form", "KYC document upload", "Allotment letter generation"] },
  { icon: Wallet, title: "Collections Center", features: ["Payment schedules", "Demand letter automation", "Receipt generation"] },
  { icon: Users, title: "Channel Partner Network", features: ["CP onboarding", "Lead tagging", "Brokerage calculation"] },
  { icon: Calculator, title: "Cost Sheet Studio", features: ["Dynamic pricing", "Tax & PLC calculation", "Discount approvals"] },
  { icon: LayoutDashboard, title: "Executive Dashboard", features: ["Sales velocity metrics", "Collection projections", "Team performance"] }
];

const CoreModules = () => {
  return (
    <section className="py-20 modules-section">
      <div className="max-w-[1200px] mx-auto px-12 relative z-10">
        
        <div className="text-center mb-12">
          <div className="text-[12px] font-[600] tracking-[0.08em] text-[#2563EB] uppercase mb-3">CORE MODULES</div>
          <h2 className="text-[40px] font-[700] text-[#0F172A] leading-[1.15] mb-4">Everything you need. Nothing you don't.</h2>
          <p className="text-[17px] text-[#64748B]">8 specialized modules. One unified platform.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {modules.map((mod, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 1, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="module-card"
            >
              <div className="w-11 h-11 bg-[#EFF6FF] rounded-[10px] flex items-center justify-center mb-[14px]">
                <mod.icon size={20} className="text-[#2563EB]" />
              </div>
              <h3 className="text-[15px] font-[600] text-[#0F172A] mb-[10px]">{mod.title}</h3>
              <div className="space-y-[3px]">
                {mod.features.map((feat, idx) => (
                  <div key={idx} className="text-[13px] text-[#64748B] leading-[1.5]">
                    {feat}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoreModules;
