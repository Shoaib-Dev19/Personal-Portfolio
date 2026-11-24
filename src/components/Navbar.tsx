import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiDownload, FiCode, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const navItems = ['Home', 'Projects', 'Skills', 'Contact'];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Smooth scroll and scroll detection to change navbar state fluidly
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 top-0 left-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
      isScrolled 
        ? 'bg-white/70 dark:bg-[#050505]/80 backdrop-blur-2xl border-b border-gray-200/50 dark:border-white/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
        : 'bg-transparent py-6'
    }`}>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-12">
          
          {/* --- LEFT: Fluid Brand Logo --- */}
          <div className="flex-shrink-0 flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center group-hover:bg-teal-500/20 transition-all duration-300">
              <FiCode className="w-4 h-4 text-teal-600 dark:text-teal-400 transform group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-2xl font-black text-gray-900 dark:text-white tracking-tighter">
              Shoaib Dev<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-amber-500">.</span>
            </span>
          </div>
          
          {/* --- CENTER: Floating Pill Navigation (Premium & Centered) --- */}
          <div className="hidden md:flex items-center justify-center">
            <div className="flex items-center gap-1 bg-gray-50/60 dark:bg-white/5 border border-gray-200/60 dark:border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md shadow-[inset_0_1px_3px_rgba(0,0,0,0.01)]">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative group px-4 py-2 text-xs lg:text-sm font-bold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 rounded-full"
                >
                  <span className="relative z-10">{item}</span>
                  {/* Fluid Background Capsule Pill Hover Effect */}
                  <span className="absolute inset-0 bg-white dark:bg-white/10 border border-gray-200/50 dark:border-white/10 rounded-full scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-sm"></span>
                </a>
              ))}
            </div>
          </div>

          {/* --- RIGHT: Theme Toggle & CV Download Button --- */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Dark/Light Mode"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="p-2.5 rounded-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-amber-400 hover:text-teal-600 dark:hover:text-amber-300 hover:border-teal-300 dark:hover:border-amber-400/30 hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm"
            >
              {theme === 'dark' ? (
                <FiSun className="w-4 h-4 text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-45" />
              ) : (
                <FiMoon className="w-4 h-4 text-gray-700 transition-transform duration-300 -rotate-12 hover:rotate-0" />
              )}
            </button>

            {/* Elite Download CV Button */}
            <a 
              href="/cv.pdf"
              download="Shoaib_CV.pdf"
              className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 font-bold text-gray-800 dark:text-gray-200 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full overflow-hidden transition-all duration-300 hover:text-white hover:border-transparent hover:shadow-[0_10px_25px_rgba(20,184,166,0.15)] active:scale-95"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"></span>
              
              <span className="relative z-10 flex items-center gap-2 text-xs uppercase tracking-wider">
                <FiDownload className="w-3.5 h-3.5 transform group-hover:-translate-y-0.5 group-hover:scale-110 transition-transform duration-300" />
                Download CV
              </span>
            </a>
          </div>

          {/* --- MOBILE: Actions (Theme Toggle + Hamburger) --- */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Dark/Light Mode"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="p-2.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200/80 dark:border-white/10 text-gray-700 dark:text-amber-400 hover:text-teal-600 dark:hover:text-amber-300 transition-all focus:outline-none active:scale-90"
            >
              {theme === 'dark' ? <FiSun className="w-5 h-5 text-amber-400" /> : <FiMoon className="w-5 h-5 text-gray-700" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="p-2.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200/80 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50/50 dark:hover:bg-white/10 transition-all focus:outline-none active:scale-90"
            >
              {isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* --- MOBILE: Fluid Dropdown Menu --- */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-3xl border-b border-gray-200 dark:border-white/10 shadow-xl animate-[slideDown_0.4s_cubic-bezier(0.16,1,0.3,1)_forwards]">
          <div className="px-6 pt-4 pb-8 space-y-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gray-600 dark:text-gray-300 font-semibold hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50/50 dark:hover:bg-white/5 rounded-xl text-base transition-all"
              >
                {item}
              </a>
            ))}
            
            {/* Mobile CV Download Button */}
            <div className="pt-4 mt-2 border-t border-gray-100 dark:border-white/10">
              <a 
                href="/cv.pdf"
                download="Shoaib_CV.pdf"
                className="flex items-center justify-center gap-2 w-full px-5 py-3.5 font-bold text-white bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-98 text-sm uppercase tracking-wider"
              >
                <FiDownload className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Embedded Liquid/Fluid Animations Custom CSS */}
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
