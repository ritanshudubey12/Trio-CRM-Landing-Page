import React from 'react';
import { motion } from 'framer-motion';
import { FileSpreadsheet, Users, CalendarDays, Wallet, UserX, EyeOff, ArrowDown } from 'lucide-react';

const problems = [
  { icon: FileSpreadsheet, title: "Inventory in Excel", desc: "Multiple versions of the truth. Overbooking units because sales teams didn't see the latest file." },
  { icon: Users, title: "Leads fall through", desc: "No central system to track inquiries. High-value leads get lost in WhatsApp chats and diaries." },
  { icon: CalendarDays, title: "Manual booking", desc: "Paper forms, physical signatures, and manual data entry slowing down the sales cycle." },
  { icon: Wallet, title: "Payment nightmare", desc: "Chasing clients for demands, manual receipt generation, and zero visibility on outstanding collections." },
  { icon: UserX, title: "Broker chaos", desc: "Unable to track which Channel Partner brought which lead, leading to commission disputes." },
  { icon: EyeOff, title: "No visibility", desc: "Management has no real-time dashboard. By the time reports are generated, the data is outdated." },
];

const ProblemSection = () => {
  return (
    <section className="py-20 problems-section">
      <div className="max-w-[1200px] mx-auto px-12 relative z-10">
        
        <div className="text-center mb-12">
          <div className="text-[12px] font-[600] tracking-[0.08em] text-[#2563EB] uppercase mb-3">THE PROBLEM</div>
          <h2 className="text-[40px] font-[700] text-[#0F172A] leading-[1.15] mb-4">Sound familiar?</h2>
          <p className="text-[17px] text-[#64748B]">Every real estate team hits these walls before Trio CRM</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((prob, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 1, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="pain-card"
            >
              <div className="w-10 h-10 rounded-[10px] bg-[#FEF2F2] flex items-center justify-center mb-4">
                <prob.icon size={20} className="text-[#EF4444]" />
              </div>
              <h3 className="text-[16px] font-[600] text-[#0F172A] mb-2">{prob.title}</h3>
              <p className="text-[14px] text-[#64748B] leading-[1.6]">{prob.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 text-center flex flex-col items-center justify-center gap-2">
          <ArrowDown size={20} className="text-[#2563EB] animate-bounce" />
          <div className="text-[15px] text-[#2563EB] font-[500]">There's a better way →</div>
        </div>

      </div>
    </section>
  );
};

export default ProblemSection;
