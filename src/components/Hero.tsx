import React, { useState, useEffect } from 'react';

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Saas App Developer",
  "Team Lead",
  "Problem Solver"
];

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Mouse position state for background animation
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Typing Animation Logic
  useEffect(() => {
    const typingSpeed = isDeleting ? 75 : 150;
    const currentRole = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setCurrentText(currentRole.substring(0, currentText.length + (isDeleting ? -1 : 1)));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  // Handle Mouse Move for Background Animation
  const handleMouseMove = (e: React.MouseEvent) => {
    // Getting coordinates relative to the viewport
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-[#fafafa] dark:bg-[#050505] text-gray-900 dark:text-white flex items-center justify-center overflow-hidden py-20 font-sans selection:bg-teal-500/20 transition-colors duration-500"
    >
      
      {/* --- Ultra-Modern Interactive Background --- */}
      {/* Static Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Interactive Mouse Follower Orb */}
      <div 
        className="absolute w-[600px] h-[600px] bg-teal-400/10 dark:bg-teal-400/15 rounded-full blur-[100px] pointer-events-none transition-transform duration-700 ease-out z-0"
        style={{
          transform: `translate(calc(${mousePos.x}px - 50%), calc(${mousePos.y}px - 50%))`,
          left: 0,
          top: 0
        }}
      ></div>

      {/* Static Ambient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#f5a623]/10 rounded-full blur-[150px] mix-blend-multiply dark:mix-blend-screen pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_1fr] gap-12 items-center relative z-10">
        
        {/* --- LEFT COLUMN --- */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 space-y-10">
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-medium text-gray-500 dark:text-gray-400 tracking-wide uppercase text-sm">Welcome to my universe</h2>
            <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#f5a623] via-amber-400 to-[#f5a623] tracking-tight pb-2">
              Shoaib.
            </h1>
          </div>
          
          {/* Glowing Experience Card */}
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-[#f5a623] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative flex items-center gap-5 bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-xl border border-gray-200 dark:border-white/10 px-8 py-5 rounded-2xl transform transition duration-500 group-hover:-translate-y-1 shadow-sm">
              <span className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-teal-500 to-teal-700 dark:from-teal-400 dark:to-teal-600 drop-shadow-sm">02</span>
              <span className="text-xs tracking-widest text-gray-600 dark:text-gray-300 font-semibold uppercase leading-relaxed text-left">
                Years <br /> <span className="text-gray-400 dark:text-gray-500">Experience</span>
              </span>
            </div>
          </div>

          <p className="mt-4 max-w-[280px] text-xs sm:text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            Crafting scalable <span className="font-semibold text-gray-900 dark:text-white">web, desktop, and mobile</span> products—let’s connect and build something impactful.
          </p>
        </div>

        {/* --- CENTER COLUMN (Image) --- */}
        <div className="flex justify-center items-center order-1 lg:order-2">
          <div className="relative w-72 h-72 md:w-96 md:h-96 group">
            {/* Animated Gradient Border Layer */}
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 via-purple-400 to-[#f5a623] rounded-[2.5rem] blur-md opacity-30 group-hover:opacity-60 transition duration-1000 animate-pulse"></div>
            
            {/* Inner Container */}
            <div className="relative w-full h-full rounded-[2.5rem] p-1 bg-gradient-to-br from-white/60 to-white/10 dark:from-white/15 dark:to-white/5 border border-white/40 dark:border-white/10 backdrop-blur-sm z-10 transform transition duration-500 group-hover:scale-[1.02] shadow-xl">
               <div className="w-full h-full rounded-[2.2rem] overflow-hidden bg-gray-100 dark:bg-gray-900 relative">
                 {/* Inner subtle glow over image */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 pointer-events-none"></div>
                 <img 
                   src="/image.png" 
                   alt="Shobi Profile" 
                   className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110" 
                 />
               </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN --- */}
        <div className="flex flex-col items-center lg:items-end text-center lg:text-right order-3 space-y-12">
          
          <p className="text-gray-600 dark:text-gray-300 max-w-[300px] text-sm md:text-base leading-relaxed font-light">
            I build <span className="text-gray-900 dark:text-white font-semibold">beautifully robust applications</span> and I love creating digital experiences that solve real problems.
          </p>

          {/* Glowing Review Card */}
          <div className="relative group w-full max-w-[280px]">
             <div className="absolute -inset-0.5 bg-gradient-to-r from-[#f5a623] to-teal-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
             <div className="relative bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-2xl border border-gray-200 dark:border-white/10 p-5 rounded-2xl shadow-xl flex flex-col gap-4 transform transition duration-500 group-hover:-translate-y-1">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-gray-700 dark:text-gray-300 tracking-wide uppercase">Full-Stack Dev</span>
                <span className="text-[#f5a623] text-xs tracking-tighter drop-shadow-sm">★★★★★</span>
              </div>
              <div className="flex items-center gap-4 justify-center lg:justify-end">
                <div className="flex -space-x-3">
                   <div className="w-9 h-9 rounded-full border-[3px] border-white dark:border-[#0a0a0a] bg-gray-300 dark:bg-gray-700 shadow-sm"></div>
                   <div className="w-9 h-9 rounded-full border-[3px] border-white dark:border-[#0a0a0a] bg-gray-200 dark:bg-gray-800 shadow-sm"></div>
                   <div className="w-9 h-9 rounded-full border-[3px] border-white dark:border-[#0a0a0a] bg-gray-100 dark:bg-gray-900 shadow-sm"></div>
                   <div className="w-9 h-9 rounded-full border-[3px] border-white dark:border-[#0a0a0a] bg-teal-500 text-white flex items-center justify-center text-[10px] font-bold z-10 shadow-sm">+2</div>
                </div>
                <span className="font-black text-xl text-gray-900 dark:text-white">4.5</span>
              </div>
            </div>
          </div>

          {/* Typing Animation Section */}
          <div className="h-28 flex flex-col justify-center items-center lg:items-end">
            <h3 className="font-serif italic text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-2">Expert in</h3>
            <div className="flex items-center gap-1">
              <h3 className="font-bold text-3xl md:text-5xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400 dark:from-teal-400 dark:to-teal-300">
                {currentText}
              </h3>
              <span className="animate-pulse inline-block w-[4px] h-8 md:h-10 bg-teal-500 align-middle rounded-full"></span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
