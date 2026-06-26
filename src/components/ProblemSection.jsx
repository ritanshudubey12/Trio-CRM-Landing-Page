import React from 'react';
import { motion } from 'framer-motion';
import { FileSpreadsheet, Users, CalendarDays, Wallet, UserX, EyeOff, ArrowDown } from 'lucide-react';

const problems = [
  { icon: FileSpreadsheet, title: "Inventory in Excel", desc: "Relying on scattered spreadsheets leads to double bookings and lost inventory control.", bg: "from-blue-50 to-indigo-50", color: "text-blue-600", border: "border-blue-100" },
  { icon: Users, title: "Leads fall through", desc: "High-value inquiries slip through the cracks, buried in WhatsApp chats and diaries.", bg: "from-orange-50 to-amber-50", color: "text-orange-500", border: "border-orange-100" },
  { icon: CalendarDays, title: "Manual booking", desc: "Endless paperwork and manual data entry severely bottleneck your entire sales cycle.", bg: "from-emerald-50 to-teal-50", color: "text-emerald-600", border: "border-emerald-100" },
  { icon: Wallet, title: "Payment nightmare", desc: "Zero visibility on outstanding collections makes tracking demands a constant struggle.", bg: "from-rose-50 to-pink-50", color: "text-rose-500", border: "border-rose-100" },
  { icon: UserX, title: "Broker chaos", desc: "Lost tracking of channel partners leads to misaligned incentives and commission disputes.", bg: "from-purple-50 to-fuchsia-50", color: "text-purple-600", border: "border-purple-100" },
  { icon: EyeOff, title: "No visibility", desc: "Operating completely in the dark without real-time insights or actionable analytics.", bg: "from-slate-50 to-gray-100", color: "text-slate-600", border: "border-slate-200" },
];

const ProblemSection = () => {
  return (
    <section className="py-24 problems-section relative isolate overflow-hidden bg-[#FAFCFF] text-slate-900">
      {/* Premium Mesh & Grid Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(37,99,235,0.12),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.1),transparent_50%)] z-0"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQwIDBMMCAwTDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMjYsIDIzMiwgMjQwLCAwLjQpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] -z-10"></div>
      
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
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, type: "spring", stiffness: 100, damping: 15 }}
              className="pain-card"
            >
              <div className={`w-12 h-12 rounded-[12px] bg-gradient-to-br ${prob.bg} border ${prob.border} flex items-center justify-center mb-5 shadow-sm`}>
                <prob.icon size={24} className={prob.color} strokeWidth={2.2} />
              </div>
              <h3 className="text-[17px] font-[700] text-slate-900 tracking-tight mb-2.5">{prob.title}</h3>
              <p className="text-[14px] text-slate-600 font-[500] leading-[1.65]">{prob.desc}</p>
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
