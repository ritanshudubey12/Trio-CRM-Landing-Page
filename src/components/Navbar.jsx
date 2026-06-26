import React from 'react';

const Navbar = ({ onOpenDemo }) => {
  return (
    <nav className="sticky top-0 z-50 h-[64px] bg-white/92 backdrop-blur-[20px] border-b border-slate-200 flex items-center">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-12 flex justify-between items-center">
        
        {/* Left: Logo */}
        <div className="flex items-center">
          <div className="text-[28px] tracking-tighter leading-none flex items-baseline">
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">trio</span>
            <span className="font-bold text-slate-800">CRM</span>
            <span className="w-2 h-2 bg-indigo-500 rounded-full ml-1"></span>
          </div>
        </div>

        {/* Center: Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Features', 'Modules', 'Workflow', 'Pricing'].map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className="text-[14px] font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <button onClick={onOpenDemo} className="bg-blue-600 hover:bg-blue-700 text-white text-[14px] font-medium px-5 py-2 rounded-lg transition-colors cursor-pointer shadow-[0_4px_12px_rgba(37,99,235,0.3)] hover:-translate-y-0.5">
            Book Demo →
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
