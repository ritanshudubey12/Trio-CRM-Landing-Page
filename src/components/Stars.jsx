import React from 'react';

export function Stars() {
  const stars = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    dur: `${3 + Math.random() * 4}s`,
    delay: `${Math.random() * 3}s`,
  }));
  
  return (
    <div className="stars">
      {stars.map(s => (
        <div key={s.id} className="star" style={{
          top: s.top, left: s.left,
          '--dur': s.dur,
          animationDelay: s.delay
        }} />
      ))}
    </div>
  );
}

export default Stars;
