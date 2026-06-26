import React from 'react';
import { MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] pt-16 pb-8 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-4 md:px-12">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1 */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-xl tracking-tight leading-none">
              <span className="font-bold text-white">trio</span>
              <span className="font-bold text-gray-300">CRM</span>
            </div>
            
            <p className="text-[#64748B] text-[14px] mt-2 mb-5">
              Complete Real Estate Operating System
            </p>
            
            <div className="flex gap-2">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-[#94A3B8] hover:bg-white/10 hover:text-white transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-[#94A3B8] hover:bg-white/10 hover:text-white transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-[#94A3B8] hover:bg-white/10 hover:text-white transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-[#94A3B8] hover:bg-white/10 hover:text-white transition-all">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
          
          {/* Col 2 */}
          <div>
            <h4 className="text-[13px] uppercase tracking-wide text-[#64748B] font-semibold mb-4">Product</h4>
            <ul className="space-y-2.5">
              {['Features', 'Modules', 'Pricing', 'Roadmap', 'Changelog'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[14px] text-[#94A3B8] hover:text-[#E2E8F0] transition-colors block">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Col 3 */}
          <div>
            <h4 className="text-[13px] uppercase tracking-wide text-[#64748B] font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5">
              {['About', 'Blog', 'Careers', 'Press', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[14px] text-[#94A3B8] hover:text-[#E2E8F0] transition-colors block">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Col 4 */}
          <div>
            <h4 className="text-[13px] uppercase tracking-wide text-[#64748B] font-semibold mb-4">Support</h4>
            <ul className="space-y-2.5">
              {['Help Center', 'Documentation', 'API Docs', 'Status', 'Security'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[14px] text-[#94A3B8] hover:text-[#E2E8F0] transition-colors block">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[13px] text-[#475569]">
            © 2024 Trio CRM. All rights reserved.
          </p>
          <div className="flex gap-4 text-[13px] text-[#475569]">
            <a href="#" className="hover:text-[#94A3B8] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#94A3B8] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#94A3B8] transition-colors">Cookies</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
