import React, { useEffect, useRef, useState } from 'react';
import { FiDatabase, FiServer, FiLayout, FiCheckCircle } from 'react-icons/fi';

const codeLines = [
  <div key="1" className="flex"><span className="text-pink-600 dark:text-pink-400 mr-2">const</span><span className="text-teal-600 dark:text-teal-400">developerProfile</span> <span className="text-gray-800 dark:text-gray-200">=</span> <span className="text-amber-500">{'{'}</span></div>,
  <div key="2" className="pl-6"><span className="text-blue-600 dark:text-blue-400">name:</span> <span className="text-emerald-600 dark:text-emerald-400">'Shobi'</span>,</div>,
  <div key="3" className="pl-6"><span className="text-blue-600 dark:text-blue-400">role:</span> <span className="text-emerald-600 dark:text-emerald-400">'Full-Stack Problem Solver'</span>,</div>,
  <div key="4" className="pl-6 pt-2"><span className="text-blue-600 dark:text-blue-400">techStack:</span> <span className="text-amber-500">{'{'}</span></div>,
  <div key="5" className="pl-12"><span className="text-purple-600 dark:text-purple-400">frontend:</span> <span className="text-gray-600 dark:text-gray-300">['React', 'Tailwind CSS']</span>,</div>,
  <div key="6" className="pl-12"><span className="text-purple-600 dark:text-purple-400">backend:</span> <span className="text-gray-600 dark:text-gray-300">['Laravel', 'Core PHP', 'Node.js']</span>,</div>,
  <div key="7" className="pl-12"><span className="text-purple-600 dark:text-purple-400">desktop:</span> <span className="text-gray-600 dark:text-gray-300">['Electron']</span>,</div>,
  <div key="8" className="pl-12"><span className="text-purple-600 dark:text-purple-400">database:</span> <span className="text-gray-600 dark:text-gray-300">['MySQL', 'MongoDB']</span></div>,
  <div key="9" className="pl-6 text-amber-500">{'}'}<span className="text-gray-800 dark:text-gray-200">,</span></div>,
  <div key="10" className="pl-6 pt-2"><span className="text-blue-600 dark:text-blue-400">philosophy:</span> <span className="text-emerald-600 dark:text-emerald-400">'Writing clean logic that digitizes real-world problems.'</span>,</div>,
  <div key="11" className="pl-6 pt-2"><span className="text-blue-600 dark:text-blue-400">executeTask</span><span className="text-gray-800 dark:text-gray-200">:</span> <span className="text-pink-600 dark:text-pink-400">async</span> <span className="text-gray-800 dark:text-gray-200">()</span> <span className="text-pink-600 dark:text-pink-400">{'=>'}</span> <span className="text-amber-500">{'{'}</span></div>,
  <div key="12" className="pl-12"><span className="text-pink-600 dark:text-pink-400">await</span> <span className="text-teal-600 dark:text-teal-400">this</span>.<span className="text-blue-600 dark:text-blue-400">buildHighEndSolutions</span>();</div>,
  <div key="13" className="pl-6 text-amber-500">{'}'}</div>,
  <div key="14" className="text-amber-500">{'}'}<span className="text-gray-800 dark:text-gray-200">;</span></div>,
];

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Code Typing Animation Logic
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isVisible && visibleLines < codeLines.length) {
      interval = setInterval(() => {
        setVisibleLines((prev) => prev + 1);
      }, 350); 
    } else if (isVisible && visibleLines === codeLines.length && !showSuccessMsg) {
      const timer = setTimeout(() => setShowSuccessMsg(true), 1000); 
      return () => clearTimeout(timer);
    }
    return () => clearInterval(interval);
  }, [isVisible, visibleLines, showSuccessMsg]);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative h-screen min-h-[800px] bg-[#fafafa] dark:bg-[#050505] text-gray-900 dark:text-white flex items-center justify-center overflow-hidden selection:bg-teal-500/20 transition-colors duration-500"
    >
      {/* --- Deep Glassmorphism Backgrounds (Light & Dark) --- */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-teal-400/20 rounded-full blur-[150px] pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[35rem] h-[35rem] bg-[#f5a623]/15 rounded-full blur-[150px] pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* --- LEFT SIDE: Animated IDE Card --- */}
        <div 
          className={`relative w-full max-w-[550px] mx-auto lg:mx-0 transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}
        >
          {/* Glowing Backing Drop */}
          <div className="absolute -inset-0.5 bg-gradient-to-br from-teal-400/30 via-purple-400/10 to-[#f5a623]/30 rounded-[2rem] blur-xl opacity-60 animate-pulse"></div>
          
          {/* Main Code Card */}
          <div className="relative h-[460px] bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-3xl border border-gray-200 dark:border-white/10 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col">
            
            {/* Mac OS Window Controls */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100 dark:border-white/5 shrink-0">
              <div className="flex gap-2.5">
                <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] shadow-inner"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] shadow-inner"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] shadow-inner"></div>
              </div>
              <div className="text-gray-400 dark:text-gray-500 text-xs font-mono tracking-widest uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                developer.config.ts
              </div>
            </div>

            {/* Detailed Code View with Line Numbers */}
            <div className="font-mono text-sm sm:text-[15px] leading-relaxed flex-1 py-4 flex relative z-10">
              {/* Line Numbers */}
              <div className="w-12 shrink-0 flex flex-col items-end pr-4 text-gray-400 dark:text-gray-600 select-none">
                {codeLines.slice(0, visibleLines).map((_, idx) => (
                  <span key={idx}>{idx + 1}</span>
                ))}
              </div>
              
              {/* Code Lines */}
              <div className="flex-1 pr-6 flex flex-col">
                {codeLines.slice(0, visibleLines).map((line, idx) => (
                  <div key={idx} className={`flex items-center transition-colors ${idx === visibleLines - 1 && !showSuccessMsg ? 'bg-teal-50/60 dark:bg-teal-950/40 rounded-r-md -ml-2 pl-2' : ''}`}>
                    {line}
                    {idx === visibleLines - 1 && !showSuccessMsg && (
                      <span className="inline-block w-2 h-4 bg-teal-500 animate-pulse ml-1 align-middle"></span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Success Message Overlay */}
            <div className={`absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-[2rem] z-20 flex items-center justify-center transition-all duration-700 ${showSuccessMsg ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
              <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 p-8 rounded-2xl shadow-[0_10px_40px_rgba(20,184,166,0.1)] flex flex-col items-center gap-4 transform hover:-translate-y-1 transition-transform cursor-pointer">
                <div className="relative">
                  <div className="absolute inset-0 bg-teal-400 blur-md opacity-30 rounded-full animate-pulse"></div>
                  <FiCheckCircle className="w-14 h-14 text-teal-500 relative z-10" />
                </div>
                <h4 className="text-gray-900 dark:text-white font-black text-2xl tracking-wide">Profile Compiled!</h4>
                <p className="text-teal-700 dark:text-teal-300 text-sm font-mono bg-teal-50 dark:bg-teal-950/50 px-5 py-2 rounded-full border border-teal-100 dark:border-teal-500/20 shadow-sm">
                  System.Ready()
                </p>
              </div>
            </div>

            {/* Floating Glassmorphism Tech Badges */}
            <div className={`absolute -bottom-6 right-6 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 px-5 py-3.5 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex gap-5 z-30 transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <FiLayout className="w-5 h-5 text-teal-500 hover:scale-110 transition-transform cursor-pointer" />
              <div className="w-px h-5 bg-gray-200 dark:bg-white/10"></div>
              <FiServer className="w-5 h-5 text-[#f5a623] hover:scale-110 transition-transform cursor-pointer" />
              <div className="w-px h-5 bg-gray-200 dark:bg-white/10"></div>
              <FiDatabase className="w-5 h-5 text-purple-500 hover:scale-110 transition-transform cursor-pointer" />
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: Professional English Content --- */}
        <div className="space-y-8 lg:pl-6 flex flex-col justify-center">
          
          <div className={`transform transition-all duration-1000 delay-200 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="flex items-center gap-4 text-teal-600 dark:text-teal-400 font-mono text-sm tracking-widest uppercase mb-4">
              <span className="w-12 h-px bg-teal-600/50 dark:bg-teal-400/50"></span>
              About Me
            </h2>
            <h3 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white leading-tight tracking-tight">
              Transforming complex challenges into <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5a623] to-amber-400">elegant artistry.</span>
            </h3>
          </div>

          <div className={`space-y-5 text-gray-600 dark:text-gray-300 text-lg font-light leading-relaxed transform transition-all duration-1000 delay-400 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <p className="border-l-2 border-teal-500 pl-5">
              I don't just write code; I architect solutions. I believe that exceptional development goes beyond mere syntax—it's about building a robust foundation that seamlessly resolves real-world challenges.
            </p>
            <p className="pl-5">
              As a full-stack developer with a passion for modern aesthetics and intelligent architecture, I bridge the gap between creative design and complex backend logic. My ultimate focus is delivering high-end digital experiences that are as functional as they are beautiful.
            </p>
          </div>

          {/* Stats / Highlights */}
          <div className={`grid grid-cols-2 gap-8 pt-4 transform transition-all duration-1000 delay-600 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="border-l-4 border-teal-500 pl-4 group cursor-default">
              <h4 className="text-4xl font-black text-gray-900 dark:text-white mb-1 tracking-tight group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">20+</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest font-bold">Projects Completed</p>
            </div>
            <div className="border-l-4 border-[#f5a623] pl-4 group cursor-default">
              <h4 className="text-4xl font-black text-gray-900 dark:text-white mb-1 tracking-tight group-hover:text-[#f5a623] transition-colors">100%</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest font-bold">Client Satisfaction</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
