import React, { useRef } from 'react';
import { 
  FiBriefcase, 
  FiCode, 
  FiCpu, 
  FiCheckCircle, 
  FiChevronRight, 
  FiChevronLeft,
  FiLayout,
  FiSmartphone
} from 'react-icons/fi';

const experiences = [
  {
    id: 1,
    role: 'Web Developer & Creative Designer',
    company: 'Logical Technologist, Hyderabad',
    duration: 'July 1st - Present',
    icon: FiLayout,
    year: '2026',
    colorTheme: 'teal',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600 dark:text-teal-400',
    borderColor: 'border-teal-200 dark:border-teal-500/30',
    bullets: [
      "Designing and developing modern commercial SaaS websites and interactive web platforms using React, Next.js, and Tailwind CSS.",
      "Crafting cohesive brand identities, social media visual campaigns, product mockups, and high-retention creative designs.",
      "Enhancing frontend performance and user engagement through responsive layouts, smooth micro-interactions, and clean UI/UX systems."
    ]
  },
  {
    id: 2,
    role: 'Freelance Desktop & Mobile Developer',
    company: 'Independent / Remote',
    duration: '',
    icon: FiSmartphone,
    year: '',
    colorTheme: 'amber',
    iconBg: 'bg-amber-50',
    iconColor: 'text-[#f5a623]',
    borderColor: 'border-amber-200 dark:border-amber-500/30',
    bullets: [
      "Architecting offline-first desktop applications using Electron.js, React, TypeScript, and local SQLite databases for business automation.",
      "Building cross-platform mobile applications with responsive interfaces, real-time cloud sync, and seamless REST API integrations.",
      "Delivering end-to-end custom software solutions—from database architecture and licensing systems to deployment and client support."
    ]
  },
  {
    id: 3,
    role: 'Lead Developer',
    company: 'CodeTacto Team, Hyderabad',
    duration: 'Aug 2025 – Present',
    icon: FiCode,
    year: '2025',
    colorTheme: 'teal',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600 dark:text-teal-400',
    borderColor: 'border-teal-200 dark:border-teal-500/30',
    bullets: [
      "Architecting and leading the development of complex enterprise-grade SaaS platforms, including Government-level Letter Management Systems.",
      "Spearheaded the design and deployment of secure, scalable backend infrastructures, significantly reducing operational manual load by 60%.",
      "Mentoring team members on backend logic, database optimization, and modern UI/UX design patterns using Tailwind CSS v4 and React.js."
    ]
  },
  {
    id: 4,
    role: 'Full-Stack Developer',
    company: 'MK TECH LAB, Hyderabad, Qasimabad',
    duration: 'Jun 2025 – Dec 2025',
    icon: FiBriefcase,
    year: '2025',
    colorTheme: 'amber',
    iconBg: 'bg-amber-50',
    iconColor: 'text-[#f5a623]',
    borderColor: 'border-amber-200 dark:border-amber-500/30',
    bullets: [
      "Developed and maintained responsive web applications, ensuring high-performance standards and cross-browser compatibility.",
      "Collaborated with cross-functional teams to integrate complex database logic, resulting in a 30% improvement in system data retrieval speeds.",
      "Core contributor to institutional management projects, focusing on secure data handling and user authentication modules."
    ]
  },
  {
    id: 5,
    role: 'Freelance Software Engineer',
    company: 'Self-Employed (Personal Projects), Hyderabad',
    duration: 'Mar 2025 – Present',
    icon: FiCpu,
    year: '2025',
    colorTheme: 'blue',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600 dark:text-blue-400',
    borderColor: 'border-blue-200 dark:border-blue-500/30',
    bullets: [
      "Independently engineered end-to-end SaaS products, handling everything from database schema design to frontend deployment.",
      "Successfully delivered high-end digital solutions for diverse clients, focusing on custom automation, API integrations, and robust security implementation.",
      "Built and deployed multiple production-ready systems, managing continuous integration and deployment (CI/CD) pipelines independently."
    ]
  }
];

const WorkExperience: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Function to smoothly scroll right or left
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 600 : 300;
      scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="experience" className="relative h-screen min-h-[800px] bg-[#fafafa] dark:bg-[#050505] flex flex-col md:flex-row items-center overflow-hidden selection:bg-teal-500/20 transition-colors duration-500">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#f5a623] rounded-full blur-[200px] opacity-[0.03] dark:opacity-[0.08] pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>
      <div className="absolute bottom-0 left-[-10%] w-[40rem] h-[40rem] bg-teal-500 rounded-full blur-[200px] opacity-[0.03] dark:opacity-[0.08] pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>

      {/* Embedded CSS for Custom Scrollbar Hide */}
      <style>{`
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* --- LEFT FIXED PANEL: The Story Intro --- */}
      <div className="w-full md:w-[35%] lg:w-[30%] px-8 md:pl-16 lg:pl-24 pt-20 md:pt-0 shrink-0 flex flex-col justify-center z-10">
        <div className="inline-flex mb-6 items-center gap-3 px-5 py-2.5 rounded-full bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 shadow-sm w-fit">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f5a623] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f5a623]"></span>
          </span>
          <span className="text-gray-600 dark:text-gray-300 font-mono text-xs tracking-widest uppercase font-semibold">My Journey</span>
        </div>
        
        <h2 className="text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-[#f5a623]">Story.</span>
        </h2>
        
        <p className="text-gray-500 dark:text-gray-400 text-lg font-light leading-relaxed mb-10">
          Scroll through the chapters of my professional career, where each role brought new challenges and enterprise-level solutions.
        </p>

        {/* Scroll Controls */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => scroll('left')}
            aria-label="Scroll Left"
            className="w-12 h-12 rounded-full bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/10 hover:text-teal-600 dark:hover:text-teal-400 transition-all shadow-sm active:scale-95"
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => scroll('right')}
            aria-label="Scroll Right"
            className="w-12 h-12 rounded-full bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/10 hover:text-teal-600 dark:hover:text-teal-400 transition-all shadow-sm active:scale-95"
          >
            <FiChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* --- RIGHT SCROLLING PANEL: Horizontal Storyline --- */}
      <div 
        ref={scrollRef}
        className="w-full md:w-[65%] lg:w-[70%] h-full overflow-x-auto flex items-center snap-x snap-mandatory hide-scroll px-8 md:px-0 py-10 md:py-0 relative z-10"
      >
        {/* The Continuous Horizontal Timeline Track */}
        <div className="absolute top-1/2 left-0 w-[500%] h-0.5 bg-gray-200 dark:bg-white/10 -translate-y-1/2 hidden md:block z-0"></div>

        <div className="flex items-center gap-8 md:gap-16 pb-10 md:pb-0 md:pr-32">
          {experiences.map((exp) => (
            <div 
              key={exp.id} 
              className="relative w-[85vw] md:w-[500px] lg:w-[600px] shrink-0 snap-center md:snap-start group"
            >
              
              {/* Timeline Node & Year (Desktop only visual) */}
              <div className="hidden md:flex flex-col items-center absolute -left-8 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20">
                {exp.year ? (
                  <span className="text-4xl font-black text-gray-200 dark:text-gray-800 mb-4 opacity-50 group-hover:text-teal-500 dark:group-hover:text-teal-400 group-hover:opacity-100 transition-colors duration-500">
                    {exp.year}
                  </span>
                ) : (
                  <span className="text-4xl font-black mb-4 invisible select-none">
                    &nbsp;
                  </span>
                )}
                <div className={`w-6 h-6 rounded-full bg-white dark:bg-[#0a0a0a] border-4 ${exp.borderColor} shadow-md`}></div>
              </div>

              {/* The Experience Card */}
              <div className="relative bg-white dark:bg-[#0a0a0a]/90 border border-gray-200 dark:border-white/10 rounded-3xl p-8 lg:p-10 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:-translate-y-2">
                
                {/* Top Gradient Accent */}
                <div className={`absolute top-0 left-0 right-0 h-2 rounded-t-3xl ${exp.iconBg.replace('bg-', 'bg-gradient-to-r from-').replace('-50', '-400')} to-transparent opacity-80`}></div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${exp.iconBg} dark:bg-white/5 ${exp.iconColor} border ${exp.borderColor} dark:border-white/10 shadow-sm`}>
                      <exp.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight leading-none">
                        {exp.role}
                      </h3>
                      <h4 className="text-sm font-bold tracking-widest text-gray-400 dark:text-gray-500 uppercase mt-2">
                        {exp.company}
                      </h4>
                    </div>
                  </div>
                  {exp.duration && (
                    <span className={`text-xs font-bold font-mono px-4 py-2 rounded-full border ${exp.iconBg} dark:bg-white/5 ${exp.borderColor} dark:border-white/10 ${exp.iconColor} shrink-0`}>
                      {exp.duration}
                    </span>
                  )}
                </div>
                
                {/* Storytelling Bullet Points */}
                <div className="space-y-4">
                  {exp.bullets.map((bullet: string, i: number) => (
                    <div key={i} className="flex items-start gap-3">
                      <FiCheckCircle className={`w-5 h-5 shrink-0 mt-0.5 ${exp.iconColor}`} />
                      <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed font-light">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}

          {/* End of Story Indicator */}
          <div className="w-[200px] shrink-0 flex flex-col items-center justify-center opacity-50">
            <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-700 mb-2"></div>
            <div className="w-2 h-2 rounded-full bg-gray-200 dark:bg-gray-800 mb-2"></div>
            <div className="w-1 h-1 rounded-full bg-gray-200 dark:bg-gray-800"></div>
            <span className="text-gray-400 dark:text-gray-600 font-mono text-sm uppercase tracking-widest mt-4">To be continued</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
