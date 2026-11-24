import React, { useEffect, useRef, useState } from 'react';
import { FiExternalLink, FiMapPin, FiUsers, FiBriefcase, FiAward } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';

const LinkedInSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll Observer for entrance animation
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

  return (
    <section 
      id="linkedin-connect" 
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#fafafa] dark:bg-[#050505] overflow-hidden flex items-center justify-center selection:bg-[#0A66C2]/20 transition-colors duration-500"
    >
      {/* --- Ambient Background Glows --- */}
      <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-[#0A66C2]/5 dark:bg-[#0A66C2]/10 rounded-full blur-[150px] pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[25rem] h-[25rem] bg-teal-500/5 dark:bg-teal-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* --- LEFT SIDE: Typography & Intro --- */}
        <div className={`flex flex-col justify-center transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}>
          
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 shadow-sm w-fit mb-8">
            <FaLinkedin className="w-4 h-4 text-[#0A66C2]" />
            <span className="text-sm font-mono tracking-widest text-gray-600 dark:text-gray-300 font-semibold uppercase">Professional Network</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-[1.1] tracking-tight mb-6">
            Let's build a network of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A66C2] to-blue-400">digital innovators.</span>
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-lg border-l-2 border-[#0A66C2] pl-5 mb-10">
            Connect with me on LinkedIn to follow my latest projects, architectural insights, and journey as a founder and full-stack developer. Let's grow together.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center border border-blue-100 dark:border-blue-500/20">
                <FiUsers className="w-5 h-5 text-[#0A66C2]" />
              </div>
              <div>
                <h4 className="text-xl font-black text-gray-900 dark:text-white">500+</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest font-bold">Connections</p>
              </div>
            </div>
            <div className="w-px h-10 bg-gray-200 dark:bg-white/10 hidden sm:block"></div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-teal-50 dark:bg-teal-950/40 flex items-center justify-center border border-teal-100 dark:border-teal-500/20">
                <FiAward className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <h4 className="text-xl font-black text-gray-900 dark:text-white">Top Voice</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest font-bold">In Tech</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: Interactive LinkedIn Card --- */}
        <div className={`relative flex items-center justify-center transform transition-all duration-1000 delay-300 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
          
          {/* Floating Aesthetic Elements behind card */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#0A66C2]/10 to-transparent rounded-[3rem] blur-xl opacity-50"></div>

          {/* Main Profile Card */}
          <div className="relative w-full max-w-[420px] bg-white dark:bg-[#0a0a0a]/90 rounded-[2.5rem] border border-gray-200 dark:border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden group hover:shadow-[0_30px_80px_rgba(10,102,194,0.12)] transition-all duration-500 hover:-translate-y-2">
            
            {/* Cover Photo Area (Modern Gradient) */}
            <div className="h-36 bg-gradient-to-br from-[#0A66C2]/10 via-blue-50 to-teal-50 dark:from-[#0A66C2]/20 dark:via-blue-950/30 dark:to-teal-950/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#0A66C21a_1px,transparent_1px),linear-gradient(to_bottom,#0A66C21a_1px,transparent_1px)] bg-[size:20px_20px]"></div>
              
              <div className="absolute top-5 right-5 bg-white/80 dark:bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 border border-white dark:border-white/10 shadow-sm">
                <FaLinkedin className="w-3.5 h-3.5 text-[#0A66C2]" /> 
                <span className="text-[10px] font-bold text-gray-700 dark:text-gray-200 tracking-widest uppercase">Verified</span>
              </div>
            </div>

            {/* Profile Content */}
            <div className="px-8 pb-8 relative">
              
              {/* Overlapping Avatar */}
              <div className="absolute -top-16 left-8">
                <div className="w-28 h-28 rounded-[1.5rem] border-4 border-white dark:border-[#0a0a0a] bg-gray-100 dark:bg-gray-800 shadow-lg overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <img src="/image.png" alt="Shoaib" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Text Info */}
              <div className="pt-16">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2 mb-1">
                  Shoaib <span className="flex items-center justify-center w-5 h-5 bg-[#0A66C2] rounded-full text-white text-[10px]">✓</span>
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm font-medium leading-relaxed mb-5">
                  Founder @ CodeTacto Team | Full-Stack Architect | Next-Gen AI & SaaS Solutions | Problem Solver
                </p>

                <div className="flex flex-col gap-2.5 mb-8">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <FiBriefcase className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                    <span className="font-medium">CodeTacto Team</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <FiMapPin className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                    <span className="font-medium">Hyderabad, Sindh, Pakistan</span>
                  </div>
                </div>

                {/* Call To Actions */}
                <div className="flex items-center gap-3">
                  <a 
                    href="https://www.linkedin.com/in/shoaib-ahmed-b270b0293/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#0A66C2] hover:bg-[#084e96] text-white py-3.5 rounded-2xl font-bold transition-all shadow-[0_10px_20px_rgba(10,102,194,0.2)] hover:shadow-[0_15px_30px_rgba(10,102,194,0.3)] hover:-translate-y-0.5"
                  >
                    View Profile <FiExternalLink className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/shoaib-ahmed-b270b0293/"
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center justify-center px-6 py-3.5 bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-200 rounded-2xl font-bold transition-all"
                  >
                    Follow
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LinkedInSection;
