import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee, Settings } from 'lucide-react';
import { useMenu } from '../contexts/MenuContext';

export const Navbar: React.FC = () => {
  const { toggleAdminMode } = useMenu();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-panel shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 bg-sage-800 rounded-full flex items-center justify-center text-cream-100 shadow-md">
            <Coffee size={20} />
          </div>
          <span className="text-2xl font-bold tracking-tight text-sage-900">
            وِرد <span className="text-gold-500">&</span> کِرِما
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-sans text-sm tracking-wide text-sage-800 font-bold">
          <a href="#menu" className="hover:text-gold-500 transition-colors">منو</a>
          <a href="#about" className="hover:text-gold-500 transition-colors">داستان ما</a>
          <a href="#visit" className="hover:text-gold-500 transition-colors">بازدید</a>
          
          <button 
             onClick={toggleAdminMode}
             className="text-sage-400 hover:text-sage-800 transition-colors"
             title="ورود به پنل مدیریت"
          >
             <Settings size={20} />
          </button>

          <button 
            onClick={() => document.getElementById('ai-chat')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-2 bg-sage-800 text-cream-100 rounded-full hover:bg-sage-900 transition-all hover:scale-105 shadow-md flex items-center gap-2"
          >
            <span>باریستای هوشمند</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-sage-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-cream-100 border-b border-sage-200 py-8 md:hidden flex flex-col items-center gap-6 shadow-xl">
          <a href="#menu" onClick={() => setIsMobileMenuOpen(false)} className="text-sage-900 font-bold text-xl">منو</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-sage-900 font-bold text-xl">داستان ما</a>
          <a href="#visit" onClick={() => setIsMobileMenuOpen(false)} className="text-sage-900 font-bold text-xl">بازدید</a>
          <button onClick={() => {toggleAdminMode(); setIsMobileMenuOpen(false)}} className="text-sage-500 font-bold">مدیریت</button>
        </div>
      )}
    </nav>
  );
};