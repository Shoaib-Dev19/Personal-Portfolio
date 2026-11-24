import React, { useState, useEffect, useRef } from 'react';
import { 
  FiLayout, 
  FiServer, 
  FiMonitor, 
  FiCloud, 
  FiSmartphone, 
  FiGlobe, 
  FiArrowRight,
  FiCode
} from 'react-icons/fi';

// Updated & Expanded Arsenal Data
const expertiseData = [
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    icon: FiLayout,
    color: 'from-teal-400 to-teal-600',
    borderColor: 'border-teal-200 dark:border-teal-500/30',
    glow: 'bg-teal-400',
    description: "Designing pixel-perfect, highly responsive user interfaces. My focus is on creating immersive digital experiences with modern animations and glassmorphism aesthetics.",
    techStack: ['React.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
    projectsCount: '12+ Projects'
  },
  {
    id: 'backend',
    title: 'Backend Architecture',
    icon: FiServer,
    color: 'from-[#f5a623] to-amber-500',
    borderColor: 'border-amber-200 dark:border-amber-500/30',
    glow: 'bg-[#f5a623]',
    description: "Building scalable, secure, and robust server-side logic. I write clean, maintainable code to solve complex problems and handle heavy database operations seamlessly.",
    techStack: ['Laravel', 'Core PHP', 'Node.js', 'MySQL', 'APIs'],
    projectsCount: '15+ Projects'
  },
  {
    id: 'saas',
    title: 'SaaS App Development',
    icon: FiCloud,
    color: 'from-blue-400 to-indigo-500',
    borderColor: 'border-blue-200 dark:border-blue-500/30',
    glow: 'bg-blue-400',
    description: "Architecting multi-tenant Software-as-a-Service platforms. I focus on building scalable cloud-based solutions with secure authentication and robust subscription infrastructure.",
    techStack: ['AWS', 'Stripe Integration', 'Multi-tenancy', 'Docker'],
    projectsCount: '5+ Platforms'
  },
  {
    id: 'mobile',
    title: 'Native Mobile Apps',
    icon: FiSmartphone,
    color: 'from-cyan-400 to-blue-500',
    borderColor: 'border-cyan-200 dark:border-cyan-500/30',
    glow: 'bg-cyan-400',
    description: "Crafting high-performance native and cross-platform mobile applications. I ensure flawless user experiences across iOS and Android with fluid native animations.",
    techStack: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    projectsCount: '8+ Apps'
  },
  {
    id: 'web-ecosystem',
    title: 'Web Ecosystems',
    icon: FiGlobe,
    color: 'from-emerald-400 to-green-500',
    borderColor: 'border-emerald-200 dark:border-emerald-500/30',
    glow: 'bg-emerald-400',
    description: "Developing comprehensive web ecosystems and microservices. I build interconnected applications that communicate flawlessly, ensuring high availability.",
    techStack: ['Microservices', 'GraphQL', 'WebSockets', 'Redis'],
    projectsCount: 'Enterprise Level'
  },
  {
    id: 'desktop',
    title: 'Desktop Applications',
    icon: FiMonitor,
    color: 'from-purple-400 to-purple-500',
    borderColor: 'border-purple-200 dark:border-purple-500/30',
    glow: 'bg-purple-400',
    description: "Bringing web technologies to the desktop environment. I develop cross-platform native desktop applications ensuring a seamless user experience outside the browser.",
    techStack: ['Electron.js', 'JavaScript', 'Node Integration'],
    projectsCount: '4+ Projects'
  }
];

const Expertise: React.FC = () => {
  const [activeTab, setActiveTab] = useState(expertiseData[0]);
  const [animate, setAnimate] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll Observer Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Tab change animation
  const handleTabChange = (expertise: typeof expertiseData[0]) => {
    if (activeTab.id === expertise.id) return;
    setAnimate(true);
    setTimeout(() => {
      setActiveTab(expertise);
      setAnimate(false);
    }, 300);
  };

  return (
    <section 
      id="expertise" 
      ref={sectionRef}
      className="relative h-screen min-h-[850px] bg-[#fafafa] dark:bg-[#050505] text-gray-900 dark:text-white flex items-center justify-center overflow-hidden selection:bg-teal-500/20 transition-colors duration-500"
    >
      
      {/* --- Dynamic Background Glows --- */}
      <div className={`absolute top-[20%] left-[-10%] w-[40rem] h-[40rem] ${activeTab.glow} rounded-full blur-[180px] opacity-[0.15] pointer-events-none mix-blend-multiply dark:mix-blend-screen transition-colors duration-1000`}></div>
      <div className={`absolute bottom-[10%] right-[-5%] w-[35rem] h-[35rem] ${activeTab.glow} rounded-full blur-[180px] opacity-[0.15] pointer-events-none mix-blend-multiply dark:mix-blend-screen transition-colors duration-1000 delay-300`}></div>

      {/* Embedded CSS for Custom Scrollbar */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.1); border-radius: 10px; }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb { background: rgba(20, 184, 166, 0.4); }
      `}</style>

      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-center relative z-10">
        
        {/* --- LEFT SIDE: Scrollable Tabs --- */}
        <div className={`flex flex-col h-full max-h-[600px] transform transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="mb-8 shrink-0">
            <h2 className="flex items-center gap-4 text-teal-600 dark:text-teal-400 font-mono text-sm tracking-widest uppercase mb-4">
              <span className="w-12 h-px bg-teal-600/50 dark:bg-teal-400/50"></span>
              My Arsenal
            </h2>
            <h3 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white leading-tight tracking-tight">
              Areas of <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-[#f5a623] transition-colors duration-500">Expertise.</span>
            </h3>
          </div>

          {/* Scrollable Container */}
          <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar space-y-3 pb-10">
            {expertiseData.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabChange(item)}
                className={`group relative w-full flex items-center gap-5 p-4 rounded-2xl transition-all duration-500 overflow-hidden outline-none ${
                  activeTab.id === item.id 
                    ? 'bg-white dark:bg-[#0a0a0a]/90 border border-gray-200 dark:border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] scale-[1.02]' 
                    : 'bg-transparent border border-transparent hover:bg-gray-50 dark:hover:bg-white/5 hover:border-gray-200 dark:hover:border-white/10 hover:scale-[1.01]'
                }`}
              >
                {/* Active Tab Indicator Glow */}
                {activeTab.id === item.id && (
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${item.color}`}></div>
                )}
                
                <div className={`p-3 rounded-xl transition-all duration-500 ${
                  activeTab.id === item.id ? `bg-gradient-to-br ${item.color} bg-opacity-10 shadow-sm` : 'bg-gray-100 dark:bg-white/5 group-hover:bg-gray-200 dark:group-hover:bg-white/10'
                }`}>
                  <item.icon className={`w-5 h-5 md:w-6 md:h-6 transition-colors duration-500 ${activeTab.id === item.id ? 'text-teal-700 dark:text-teal-300' : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200'}`} />
                </div>
                
                <div className="flex-1 text-left">
                  <h4 className={`font-bold text-base md:text-lg tracking-wide transition-colors duration-500 ${
                    activeTab.id === item.id ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200'
                  }`}>
                    {item.title}
                  </h4>
                </div>

                <FiArrowRight className={`w-5 h-5 transition-all duration-500 ${
                  activeTab.id === item.id ? 'opacity-100 text-teal-600 dark:text-teal-400 translate-x-0' : 'opacity-0 -translate-x-6'
                }`} />
              </button>
            ))}
          </div>
        </div>

        {/* --- RIGHT SIDE: Dynamic Glassmorphic Card --- */}
        <div className={`relative h-[550px] flex items-center transform transition-all duration-1000 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {/* Animated Background Glow strictly behind the card */}
          <div className={`absolute -inset-1 bg-gradient-to-br ${activeTab.color} rounded-[2.5rem] blur-2xl opacity-[0.15] dark:opacity-[0.25] transition-all duration-1000`}></div>
          
          <div className={`relative w-full h-full flex flex-col justify-center bg-white/70 dark:bg-[#0a0a0a]/90 backdrop-blur-3xl border ${activeTab.borderColor} rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 transform ${
            animate ? 'opacity-0 translate-y-8 scale-[0.98] blur-sm' : 'opacity-100 translate-y-0 scale-100 blur-0'
          }`}>
            
            <div className="flex items-center justify-between mb-8">
              <div className={`p-4 rounded-2xl bg-gradient-to-br ${activeTab.color} bg-opacity-10 border border-white dark:border-white/10 shadow-sm`}>
                <activeTab.icon className="w-10 h-10 text-gray-800 dark:text-white drop-shadow-sm" />
              </div>
              <span className="px-5 py-2 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-mono text-gray-600 dark:text-gray-300 tracking-widest shadow-sm">
                {activeTab.projectsCount}
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
              {activeTab.title}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 text-lg font-light leading-relaxed mb-10 flex-1">
              {activeTab.description}
            </p>

            <div className="mt-auto">
              <h4 className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 font-mono uppercase tracking-widest mb-4">
                <FiCode className="w-4 h-4" /> Tools & Technologies
              </h4>
              <div className="flex flex-wrap gap-3">
                {activeTab.techStack.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white dark:hover:bg-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-all cursor-default shadow-sm hover:shadow-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Expertise;
