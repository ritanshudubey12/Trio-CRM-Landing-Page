import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 3, suffix: 'x', label: 'Faster Booking Process', desc: 'vs manual paperwork workflows' },
  { value: 40, suffix: '%', label: 'Better Lead Conversion', desc: 'with automated follow-up & scoring' },
  { value: 100, suffix: '%', label: 'Collection Visibility', desc: 'real-time tracking vs chasing via WhatsApp' },
  { value: 60, suffix: '%', label: 'Improved Team Productivity', desc: 'less admin, more selling' },
];

const Counter = ({ to, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const incrementTime = 30;
    const steps = duration / incrementTime;
    const stepValue = to / steps;

    const timer = setInterval(() => {
      start += stepValue;
      if (start >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, incrementTime);
    return () => clearInterval(timer);
  }, [to, inView]);

  return <>{count}</>;
};

const Statistics = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-[72px] stats-section">
      <div className="max-w-[1200px] mx-auto px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-[2px]">
          {stats.map((stat, i) => (
            <div key={i} className="flex-1 text-center p-[32px_24px] border-b md:border-b-0 md:border-r border-white/15 last:border-0">
              <div className="flex items-baseline justify-center leading-none">
                <span className="text-[56px] font-[800] text-white stat-number">
                  <Counter to={stat.value} inView={isInView} />
                </span>
                <span className="text-[32px] text-white/70 ml-1">{stat.suffix}</span>
              </div>
              <div className="text-[16px] font-[600] text-white mt-2">{stat.label}</div>
              <div className="text-[13px] text-white/60 mt-1">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
