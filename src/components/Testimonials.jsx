import React, { useRef } from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../constants/testimonials';

const Testimonials = () => {
  const scrollRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    scrollRef.current.classList.add('cursor-grabbing');
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
    scrollRef.current.classList.remove('cursor-grabbing');
  };

  const handleMouseUp = () => {
    isDown = false;
    scrollRef.current.classList.remove('cursor-grabbing');
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-[1200px] mx-auto px-12 mb-10 text-center">
        <h2 className="text-[40px] font-[700] text-[#0F172A] leading-[1.15] mb-4">Builders Trust Trio CRM</h2>
        <p className="text-[17px] text-[#64748B]">Real results from real estate teams across India.</p>
      </div>

      <div 
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="flex gap-6 overflow-x-auto p-[8px_48px_24px] cursor-grab select-none no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {testimonials.map((t) => (
          <div 
            key={t.id} 
            className="testimonial-card"
          >
            <div className="flex gap-1 mb-4 text-[#F59E0B]">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" stroke="none" />)}
            </div>
            
            <p className="text-[15px] text-[#374151] leading-[1.7] italic mb-5 whitespace-normal">
              "{t.quote}"
            </p>
            
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-[40px] h-[40px] rounded-full bg-gradient-to-br from-[#2563EB] to-[#60A5FA] flex items-center justify-center text-white text-[14px] font-[600]">
                {t.name.split(' ').map(n=>n[0]).join('')}
              </div>
              <div>
                <div className="font-[600] text-[14px] text-[#0F172A]">{t.name}</div>
                <div className="text-[13px] text-[#64748B]">{t.title}, {t.company}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
