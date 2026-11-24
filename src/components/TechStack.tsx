import React, { useState, useEffect, useRef } from 'react';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaBootstrap, 
  FaJs, 
  FaReact, 
  FaLaravel, 
  FaPhp, 
  FaPython, 
  FaDocker, 
  FaGitAlt 
} from 'react-icons/fa';
import { 
  TbBrandTailwind, 
  TbBrandTypescript, 
  TbBrandReactNative, 
  TbBolt, 
  TbAtom, 
  TbBrandMysql, 
  TbBrandMongodb, 
  TbBrandFirebase, 
  TbBrandSupabase, 
  TbBrandVercel, 
  TbBrandCloudflare 
} from 'react-icons/tb';
import { DiPostgresql } from 'react-icons/di';
import { FiTerminal, FiCpu } from 'react-icons/fi';

// Categorized & Updated Tech Data
const techData = [
  {
    id: 'frontend',
    title: 'Frontend Architecture',
    command: 'deploy_module --env=frontend',
    glowColor: 'bg-teal-400',
    techs: [
      { name: 'HTML5', icon: FaHtml5, color: '#E34F26', textClass: 'text-[#E34F26]' },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', textClass: 'text-[#1572B6]' },
      { name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3', textClass: 'text-[#7952B3]' },
      { name: 'Tailwind', icon: TbBrandTailwind, color: '#06B6D4', textClass: 'text-[#06B6D4]' },
      { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', textClass: 'text-[#D4B811]' },
      { name: 'React.js', icon: FaReact, color: '#087EA4', textClass: 'text-[#087EA4]' },
      { name: 'TypeScript', icon: TbBrandTypescript, color: '#3178C6', textClass: 'text-[#3178C6]' },
      { name: 'React Native', icon: TbBrandReactNative, color: '#00D8FF', textClass: 'text-[#00D8FF]' },
    ]
  },
  {
    id: 'backend',
    title: 'Backend Systems',
    command: 'deploy_module --env=backend',
    glowColor: 'bg-[#f5a623]',
    techs: [
      { name: 'Laravel', icon: FaLaravel, color: '#FF2D20', textClass: 'text-[#FF2D20]' },
      { name: 'Core PHP', icon: FaPhp, color: '#777BB4', textClass: 'text-[#777BB4]' },
      { name: 'Python', icon: FaPython, color: '#3776AB', textClass: 'text-[#3776AB]' },
      { name: 'FastAPI', icon: TbBolt, color: '#009688', textClass: 'text-[#009688]' },
      { name: 'Electron.js', icon: TbAtom, color: '#47848F', textClass: 'text-[#47848F]' },
    ]
  },
  {
    id: 'database',
    title: 'Data Engineering',
    command: 'initialize_databases --secure=true',
    glowColor: 'bg-blue-400',
    techs: [
      { name: 'MySQL', icon: TbBrandMysql, color: '#4479A1', textClass: 'text-[#4479A1]' },
      { name: 'PostgreSQL', icon: DiPostgresql, color: '#4169E1', textClass: 'text-[#4169E1]' },
      { name: 'MongoDB', icon: TbBrandMongodb, color: '#47A248', textClass: 'text-[#47A248]' },
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    command: 'start_pipeline --deploy=auto',
    glowColor: 'bg-purple-400',
    techs: [
      { name: 'Git', icon: FaGitAlt, color: '#F05032', textClass: 'text-[#F05032]' },
      { name: 'Docker', icon: FaDocker, color: '#2496ED', textClass: 'text-[#2496ED]' },
      { name: 'Firebase', icon: TbBrandFirebase, color: '#FFCA28', textClass: 'text-[#E5A500]' },
      { name: 'Supabase', icon: TbBrandSupabase, color: '#3ECF8E', textClass: 'text-[#3ECF8E]' },
      { name: 'Vercel', icon: TbBrandVercel, color: '#000000', textClass: 'text-black dark:text-white' },
      { name: 'Cloudflare', icon: TbBrandCloudflare, color: '#F38020', textClass: 'text-[#F38020]' },
    ]
  }
];

const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for Entrance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  // Synchronized Engine Logic
  useEffect(() => {
    if (!isVisible) return;

    const currentTechs = techData[activeCategory].techs;

    if (loadedCount < currentTechs.length) {
      const timer = setTimeout(() => {
        setLoadedCount(prev => prev + 1);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setLoadedCount(0);
        setActiveCategory((prev) => (prev + 1) % techData.length);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [loadedCount, activeCategory, isVisible]);

  const handleCategoryClick = (index: number) => {
    setActiveCategory(index);
    setLoadedCount(0);
  };

  const currentCategory = techData[activeCategory];

  return (
    <section 
      id="tech-stack" 
      ref={sectionRef}
      className="relative min-h-[900px] py-20 bg-[#fafafa] dark:bg-[#050505] overflow-hidden flex flex-col items-center justify-center selection:bg-teal-500/20 transition-colors duration-500"
    >
      {/* Background Central Dynamic Glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] ${currentCategory.glowColor} rounded-full blur-[200px] opacity-[0.15] dark:opacity-[0.25] transition-colors duration-1000 pointer-events-none mix-blend-multiply dark:mix-blend-screen`}></div>

      {/* Embedded CSS */}
      <style>{`
        @keyframes pop-in {
          0% { opacity: 0; transform: scale(0.5) translateY(20px); filter: blur(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); filter: blur(0); }
        }
        @keyframes continuous-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-pop-in { animation: pop-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
        .float-1 { animation: continuous-float 4s ease-in-out infinite; }
        .float-2 { animation: continuous-float 5s ease-in-out infinite 1s; }
        .float-3 { animation: continuous-float 6s ease-in-out infinite 2s; }
        
        .terminal-scroll::-webkit-scrollbar { width: 4px; }
        .terminal-scroll::-webkit-scrollbar-track { background: transparent; }
        .terminal-scroll::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.1); border-radius: 10px; }
        .dark .terminal-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); }
      `}</style>

      {/* --- HEADER --- */}
      <div className="text-center z-10 relative mb-12 px-6">
        <div className="inline-flex mb-4 items-center gap-3 px-5 py-2 rounded-full bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 shadow-sm">
          <FiCpu className="w-4 h-4 text-teal-600 dark:text-teal-400" />
          <span className="text-gray-600 dark:text-gray-300 font-mono text-xs tracking-widest uppercase font-semibold">The Engine Room</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-tight">
          Technologies I <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-[#f5a623]">Command.</span>
        </h2>
      </div>

      {/* --- MAIN DASHBOARD CONTAINER --- */}
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 items-stretch">
        
        {/* LEFT: Terminal Display */}
        <div className="flex flex-col h-[550px] bg-white dark:bg-[#0a0a0a]/90 border border-gray-200 dark:border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
          {/* Terminal Header */}
          <div className="flex items-center gap-3 px-6 py-4 bg-gray-50 dark:bg-white/5 border-b border-gray-100 dark:border-white/5 shrink-0">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-inner"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-inner"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-inner"></div>
            </div>
            <span className="ml-2 text-gray-500 dark:text-gray-400 font-mono text-xs flex items-center gap-2">
              <FiTerminal className="w-4 h-4" /> root@shobi-x:~
            </span>
          </div>

          {/* Terminal Body */}
          <div className="p-6 font-mono text-sm md:text-base flex-1 overflow-y-auto terminal-scroll flex flex-col">
            <div className="text-teal-600 dark:text-teal-400 mb-4 flex items-center gap-2">
              <span className="text-pink-500 font-bold">➜</span>
              <span className="text-blue-500 font-bold">~</span> 
              <span className="text-gray-900 dark:text-white font-bold">{currentCategory.command}</span>
            </div>

            <div className="space-y-3 flex-1">
              <div className="text-gray-600 dark:text-gray-300">
                <span className="text-amber-600 dark:text-amber-400 font-bold">[INFO]</span> Initializing <span className="text-gray-900 dark:text-white font-bold">{currentCategory.title}</span> module...
              </div>

              {/* Dynamic Loading Lines */}
              {currentCategory.techs.slice(0, loadedCount).map((tech, idx) => (
                <div key={idx} className="flex items-center gap-3 animate-pop-in">
                  <span className="text-emerald-500 font-bold">✔</span>
                  <span className="text-gray-500 dark:text-gray-400">Loading</span>
                  <span className={`font-bold ${tech.color === '#000000' ? 'text-black dark:text-white' : tech.textClass}`}>{tech.name}</span>
                  <span className="text-gray-400 dark:text-gray-500">... SUCCESS</span>
                </div>
              ))}

              {/* Blinking Cursor / Status */}
              {loadedCount < currentCategory.techs.length ? (
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-gray-400 dark:text-gray-500">&gt; Fetching packages</span>
                  <span className="w-2 h-4 bg-teal-500 animate-pulse"></span>
                </div>
              ) : (
                <div className="mt-4 text-emerald-600 dark:text-emerald-400 font-bold animate-pop-in border-t border-gray-100 dark:border-white/5 pt-4">
                  [SYSTEM] All modules online and fully operational.
                </div>
              )}
            </div>

            {/* Manual Switcher Tabs */}
            <div className="mt-6 border-t border-gray-100 dark:border-white/5 pt-4 flex flex-wrap gap-2 shrink-0">
              {techData.map((cat, idx) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all font-semibold cursor-pointer ${
                    activeCategory === idx 
                      ? 'bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-500/20 shadow-sm' 
                      : 'bg-white dark:bg-white/5 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 hover:text-gray-700 dark:hover:text-gray-200'
                  }`}
                >
                  {cat.id}.sh
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Holographic Visualizer */}
        <div className="relative h-[550px] flex items-center justify-center bg-white/40 dark:bg-[#0a0a0a]/60 backdrop-blur-3xl border border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]"></div>

          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 relative z-10 w-full place-items-center">
            {currentCategory.techs.slice(0, loadedCount).map((tech, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col items-center justify-center gap-3 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white dark:bg-[#0a0a0a]/90 border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-md dark:shadow-[0_10px_20px_rgba(0,0,0,0.5)] animate-pop-in ${
                  idx % 3 === 0 ? 'float-1' : idx % 2 === 0 ? 'float-2' : 'float-3'
                } group hover:border-gray-200 dark:hover:border-white/20 transition-all duration-300 cursor-default`}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-[0.08] dark:group-hover:opacity-[0.15] transition-opacity duration-500 rounded-2xl blur-lg" 
                  style={{ backgroundColor: tech.color === '#000000' ? '#888888' : tech.color }}
                ></div>
                
                <tech.icon 
                  className={`w-10 h-10 sm:w-12 sm:h-12 transition-transform duration-300 group-hover:scale-110 drop-shadow-sm ${
                    tech.color === '#000000' ? 'text-black dark:text-white' : ''
                  }`} 
                  style={tech.color !== '#000000' ? { color: tech.color } : undefined}
                />
                <span className="font-bold text-xs sm:text-sm tracking-wide text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors text-center px-1 truncate w-full">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechStack;
