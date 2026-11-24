import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiHeart, FiMail } from 'react-icons/fi';

const Footer: React.FC = () => {
  // Navigation Links Mapping
  const quickLinks = [
    { name: 'Home', link: '#' },
    { name: 'About Me', link: '#about' },
    { name: 'Expertise', link: '#expertise' },
    { name: 'Projects', link: '#projects' },
    { name: 'Experience', link: '#experience' }
  ];

  return (
    <footer className="relative bg-[#fafafa] dark:bg-[#050505] pt-20 pb-10 overflow-hidden selection:bg-teal-500/20 transition-colors duration-500">
      
      {/* --- AMBIENT TOP BORDER GLOW --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-teal-500/30 dark:via-teal-500/50 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[10rem] bg-teal-400/10 rounded-full blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- MAIN FOOTER GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-3xl font-black text-gray-900 dark:text-white tracking-tighter">
              Shoaib<span className="text-teal-500">.</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-light">
              A problem solver and full-stack architect dedicated to crafting high-end digital experiences, scalable architectures, and beautiful user interfaces.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/10 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <FiGithub className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/shoaib-ahmed-b270b0293/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-[#0A66C2] hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:border-blue-100 dark:hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <FiLinkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-[#1DA1F2] hover:bg-sky-50 dark:hover:bg-sky-950/30 hover:border-sky-100 dark:hover:border-sky-500/30 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <FiTwitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:pl-8">
            <h4 className="text-gray-900 dark:text-white font-bold mb-6 tracking-wide">Quick Explore</h4>
            <ul className="space-y-4">
              {quickLinks.map((item, i) => (
                <li key={i}>
                  <a href={item.link} className="text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 text-sm transition-all duration-300 flex items-center gap-2 group font-medium">
                    <span className="w-0 h-[1px] bg-teal-500 group-hover:w-3 transition-all duration-300"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-bold mb-6 tracking-wide">My Services</h4>
            <ul className="space-y-4">
              {['Frontend Development', 'Backend Architecture', 'SaaS Applications', 'Native Mobile Apps', 'UI/UX Design'].map((item, i) => (
                <li key={i}>
                  <a href="#services" className="text-gray-500 dark:text-gray-400 hover:text-amber-500 dark:hover:text-amber-400 text-sm transition-all duration-300 flex items-center gap-2 group font-medium">
                    <span className="w-0 h-[1px] bg-amber-500 group-hover:w-3 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact CTA */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-bold mb-6 tracking-wide">Ready to start?</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 font-light">
              Let's connect and discuss how we can bring your vision to life.
            </p>
            <a href="mailto:shoaib.224173@gmail.com" className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/10 hover:border-teal-300 dark:hover:border-teal-500/40 hover:shadow-md transition-all duration-300 group">
              <FiMail className="w-4 h-4 text-teal-500 group-hover:animate-bounce" />
              <span className="text-sm font-bold tracking-wide">shoaib.224173@gmail.com</span>
            </a>
          </div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm font-medium flex items-center gap-1.5 text-center md:text-left">
            © {new Date().getFullYear()} Shoaib Ahmed. Built with <FiHeart className="w-3 h-3 text-red-500 animate-pulse inline" /> as a Problem Solver.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-xs font-medium transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-xs font-medium transition-colors">Terms of Service</a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
