import React, { useEffect, useRef, useState } from 'react';
import { 
  FiCalendar, 
  FiArrowRight, 
  FiCheckCircle, 
  FiStar, 
  FiZap,
  FiSend
} from 'react-icons/fi';

const fullProposal = "Hi Shobi,\n\nWe're looking for a Full-Stack developer to build our next big platform. We love your modern UI/UX approach and clean architecture.\n\nLet's connect!";

const HireMe: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [progress, setProgress] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  // Typing Engine start when visible
  useEffect(() => {
    if (isVisible && !hasStarted) {
      setHasStarted(true);
    }
  }, [isVisible, hasStarted]);

  // The actual Typing & Progress Logic
  useEffect(() => {
    if (!hasStarted || isSubmitted) return;

    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullProposal.substring(0, i + 1));
      setProgress(((i + 1) / fullProposal.length) * 100);
      i++;

      if (i >= fullProposal.length) {
        clearInterval(interval);
        setTimeout(() => setIsSubmitted(true), 1500); 
      }
    }, 45);

    return () => clearInterval(interval);
  }, [hasStarted, isSubmitted]);

  return (
    <section 
      id="hire-me" 
      ref={sectionRef}
      className="relative min-h-[800px] h-screen bg-[#fafafa] dark:bg-[#050505] text-gray-900 dark:text-white flex items-center justify-center overflow-hidden selection:bg-[#f5a623]/20 transition-colors duration-500"
    >
      {/* --- Ambient Glows --- */}
      <div className="absolute top-[30%] left-[-10%] w-[35rem] h-[35rem] bg-teal-400/20 rounded-full blur-[150px] pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-[#f5a623]/15 rounded-full blur-[180px] pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>

      {/* Embedded Custom Floating Animations */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(1deg); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float-slow { animation: float-slow 7s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
        .animate-float-delayed { animation: float-fast 5s ease-in-out infinite 2s; }
      `}</style>

      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">
        
        {/* --- LEFT SIDE: Premium Text Content --- */}
        <div className={`space-y-8 flex flex-col justify-center transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}>
          
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 shadow-sm w-fit">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
            </span>
            <span className="text-sm font-mono tracking-widest text-gray-600 dark:text-gray-300 font-semibold uppercase">Available for Freelance</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-[1.1] tracking-tight">
              Let's build your next <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5a623] to-amber-400">big idea together.</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl font-light leading-relaxed max-w-lg border-l-2 border-[#f5a623] pl-5">
              Whether you need a high-performing web application, a scalable backend architecture, or a complete digital overhaul, I'm ready to bring my problem-solving expertise to your project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium">
              <FiCheckCircle className="w-5 h-5 text-teal-500 shrink-0" />
              <span>Clean, Maintainable Code</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium">
              <FiCheckCircle className="w-5 h-5 text-teal-500 shrink-0" />
              <span>High-End UI/UX Design</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium">
              <FiCheckCircle className="w-5 h-5 text-teal-500 shrink-0" />
              <span>Timely Delivery</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium">
              <FiCheckCircle className="w-5 h-5 text-teal-500 shrink-0" />
              <span>Scalable Architecture</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-5 pt-4">
            <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-gray-900 bg-gradient-to-r from-[#f5a623] to-amber-400 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(245,166,35,0.3)]">
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
              <span className="relative z-10 flex items-center gap-2">
                Start a Project <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <a 
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 font-bold text-gray-700 dark:text-gray-300 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full hover:bg-gray-50 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <FiCalendar className="w-5 h-5 text-teal-500" />
              Schedule a Call
            </a>
          </div>
        </div>

        {/* --- RIGHT SIDE: Live Animated Proposal Dashboard --- */}
        <div className={`relative h-full min-h-[500px] flex items-center justify-center transform transition-all duration-1000 delay-300 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
          
          <div className="relative w-full max-w-[480px] h-[400px]">
            
            {/* Main Center Card */}
            <div className="absolute inset-0 m-auto w-full h-full bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-3xl border border-gray-200 dark:border-white/10 rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] animate-float-slow z-20 flex flex-col overflow-hidden">
              
              {/* Header */}
              <div className="flex justify-between items-start mb-6 shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-teal-50 dark:bg-teal-950/40 border border-teal-100 dark:border-teal-500/20 flex items-center justify-center shadow-sm">
                  <FiSend className="w-6 h-6 text-teal-600 dark:text-teal-400 -ml-1 mt-1 transform -rotate-12" />
                </div>
                <div className="bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 px-4 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
                  <span className={`w-2 h-2 rounded-full ${isSubmitted ? 'bg-teal-500' : 'bg-green-500 animate-pulse'}`}></span>
                  <span className="text-xs text-gray-600 dark:text-gray-300 font-mono font-bold tracking-wide">
                    {isSubmitted ? 'Connected' : 'Ready to Connect'}
                  </span>
                </div>
              </div>

              {/* Dynamic Content Area (Typing vs Submitted) */}
              <div className="relative flex-1">
                
                {/* STATE 1: Writing Animation */}
                <div className={`absolute inset-0 transition-all duration-700 ${isSubmitted ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight mb-4">Project Proposal</h3>
                  
                  {/* Synced Loading Bar */}
                  <div className="h-1.5 w-full bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden mb-5">
                     <div 
                       className="h-full bg-gradient-to-r from-teal-400 to-[#f5a623] rounded-full transition-all duration-75 ease-linear"
                       style={{ width: `${progress}%` }}
                     ></div>
                  </div>
                  
                  {/* Live Typing Text */}
                  <div className="text-gray-600 dark:text-gray-300 text-[15px] font-mono whitespace-pre-wrap leading-relaxed h-[120px] overflow-hidden">
                    {typedText}
                    {progress < 100 && (
                      <span className="inline-block w-2 h-4 ml-1 bg-teal-500 animate-pulse align-middle"></span>
                    )}
                  </div>
                </div>

                {/* STATE 2: Proposal Submitted Success Screen */}
                <div className={`absolute inset-0 flex flex-col items-center justify-center mt-4 transition-all duration-700 delay-200 ${isSubmitted ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'}`}>
                  <div className="relative mb-5">
                    <div className="absolute inset-0 bg-teal-400 blur-xl opacity-30 rounded-full animate-pulse"></div>
                    <div className="w-16 h-16 bg-white dark:bg-[#0a0a0a] border border-teal-200 dark:border-teal-500/30 rounded-full flex items-center justify-center relative z-10 shadow-[0_10px_30px_rgba(20,184,166,0.15)]">
                        <FiCheckCircle className="w-8 h-8 text-teal-500" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight mb-2">Proposal Submitted!</h3>
                  <p className="text-teal-700 dark:text-teal-300 text-xs font-mono font-bold bg-teal-50 dark:bg-teal-950/50 px-4 py-1.5 rounded-full border border-teal-100 dark:border-teal-500/20">Client matched with Shobi</p>
                </div>

              </div>

              {/* Footer */}
              <div className="mt-auto pt-6 border-t border-gray-100 dark:border-white/5 flex items-center justify-between shrink-0">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-white dark:border-[#0a0a0a] bg-gradient-to-r from-teal-400 to-blue-500 shadow-md"></div>
                  <div className="w-10 h-10 rounded-full border-2 border-white dark:border-[#0a0a0a] bg-gradient-to-r from-[#f5a623] to-red-500 shadow-md"></div>
                  <div className="w-10 h-10 rounded-full border-2 border-white dark:border-[#0a0a0a] bg-gradient-to-r from-purple-400 to-pink-500 shadow-md"></div>
                </div>
                <div className="text-right">
                  <span className="block text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">Response Time</span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">&lt; 24 Hours</span>
                </div>
              </div>
            </div>

            {/* Floating Element 1 (Top Right) */}
            <div className="absolute -top-4 -right-4 md:-right-8 bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl border border-gray-200 dark:border-white/10 px-5 py-3 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.5)] animate-float-fast z-30 flex items-center gap-3">
              <div className="bg-[#f5a623]/10 p-2 rounded-full border border-[#f5a623]/20">
                <FiStar className="w-4 h-4 text-[#f5a623]" />
              </div>
              <span className="text-sm font-bold text-gray-800 dark:text-gray-200 tracking-wide">Premium Quality</span>
            </div>

            {/* Floating Element 2 (Bottom Left) */}
            <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl border border-gray-200 dark:border-white/10 px-5 py-3 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.5)] animate-float-delayed z-30 flex items-center gap-3">
              <div className="bg-teal-50 dark:bg-teal-950/40 p-2 rounded-full border border-teal-100 dark:border-teal-500/20">
                <FiZap className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              </div>
              <span className="text-sm font-bold text-gray-800 dark:text-gray-200 tracking-wide">Fast Delivery</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HireMe;
