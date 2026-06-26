import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, MessageSquare, Map, Smartphone, BarChart3, PieChart, Bell, Bot } from 'lucide-react';

const features = [
  { icon: ShieldCheck, title: "Role-Based Access", desc: "Granular permissions for sales, accounts, and management." },
  { icon: MessageSquare, title: "WhatsApp Integration", desc: "Automated updates and direct messaging from the CRM." },
  { icon: Map, title: "GPS Tracking", desc: "Live location tracking for field sales executives." },
  { icon: Smartphone, title: "Mobile App", desc: "Full CRM functionality on iOS and Android." },
  { icon: BarChart3, title: "Advanced Reports", desc: "Custom report builder with 50+ templates." },
  { icon: PieChart, title: "Predictive Analytics", desc: "Forecast sales and identify at-risk bookings early." },
  { icon: Bell, title: "Smart Notifications", desc: "Automated alerts for payments and tasks." },
  { icon: Bot, title: "AI-Ready", desc: "Built on an architecture ready for AI agents." },
];

const PowerFeatures = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-12">
        
        <div className="text-center mb-16">
          <h2 className="text-[40px] font-[700] text-[#0F172A] leading-[1.15] mb-4">Enterprise-Grade Capabilities</h2>
          <p className="text-[17px] text-[#64748B]">Everything you need to run a high-performance real estate operation.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 1, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[14px] p-6 flex flex-row items-start gap-4 hover:shadow-md transition-shadow"
            >
              <div className="w-11 h-11 shrink-0 bg-[#EFF6FF] rounded-[12px] flex items-center justify-center">
                <feat.icon size={20} className="text-[#2563EB]" />
              </div>
              <div>
                <h3 className="text-[15px] font-[600] text-[#0F172A]">{feat.title}</h3>
                <p className="text-[13px] text-[#64748B] mt-1 leading-[1.5]">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PowerFeatures;
