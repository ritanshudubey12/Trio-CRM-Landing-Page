import React from 'react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 h-[64px] bg-white/92 backdrop-blur-[20px] border-b border-trio-border flex items-center">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-12 flex justify-between items-center">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <div className="text-xl tracking-tight leading-none">
            <span className="font-bold text-trio-primary">trio</span>
            <span className="font-bold text-trio-dark">CRM</span>
          </div>
          <div className="hidden sm:flex bg-blue-50 text-blue-700 text-[11px] font-semibold px-2 py-0.5 rounded-full border border-blue-100 uppercase tracking-wide">
            Real Estate
          </div>
        </div>

        {/* Center: Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Features', 'Modules', 'Workflow', 'Pricing'].map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className="text-[14px] font-medium text-slate-600 hover:text-trio-primary transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-[14px] font-medium text-slate-600 hover:text-trio-dark transition-colors px-2 cursor-pointer">
            Login
          </button>
          <button className="bg-trio-primary hover:bg-blue-700 text-white text-[14px] font-medium px-5 py-2 rounded-lg transition-colors cursor-pointer">
            Book Demo →
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
