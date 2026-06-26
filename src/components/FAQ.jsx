import React, { useState } from 'react';
import { faqData } from '../constants/faqData';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ faq, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-[#F1F5F9] py-5">
      <div 
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleOpen}
      >
        <h3 className="text-[16px] font-[500] text-[#0F172A] select-none pr-8">{faq.question}</h3>
        <button className="text-[#2563EB] shrink-0 outline-none transform transition-transform duration-200" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="text-[15px] text-[#64748B] leading-[1.7] pt-3 pb-1">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 faq-section">
      <div className="max-w-[1200px] mx-auto px-12 relative z-10">
        
        <div className="text-center mb-16 max-w-[560px] mx-auto">
          <h2 className="text-[40px] font-[700] text-[#0F172A] leading-[1.15]">Frequently Asked Questions</h2>
        </div>

        <div className="max-w-[720px] mx-auto">
          {faqData.map((faq, index) => (
            <FAQItem 
              key={index} 
              faq={faq} 
              isOpen={openIndex === index} 
              toggleOpen={() => setOpenIndex(openIndex === index ? null : index)} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
