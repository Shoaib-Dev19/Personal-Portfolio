import React, { useState, useEffect, useRef } from 'react';
import { FiSend, FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import { FaWhatsapp, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll Entrance Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  // Form Submit Simulation
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  return (
    <section id="contact" ref={sectionRef} className="relative min-h-screen w-full bg-[#fafafa] dark:bg-[#050505] flex items-center justify-center overflow-hidden selection:bg-teal-500/20 py-20 lg:py-0 transition-colors duration-500">
      
      {/* --- DYNAMIC AMBIENT BACKGROUND GLOWS --- */}
      <div className="absolute top-[10%] left-[-10%] w-[30rem] h-[30rem] lg:w-[50rem] lg:h-[50rem] bg-teal-400/20 rounded-full blur-[200px] pointer-events-none mix-blend-multiply dark:mix-blend-screen animate-[pulse_6s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[30rem] h-[30rem] lg:w-[50rem] lg:h-[50rem] bg-[#f5a623]/15 rounded-full blur-[200px] pointer-events-none mix-blend-multiply dark:mix-blend-screen animate-[pulse_8s_ease-in-out_infinite_reverse]"></div>

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-24 items-center">
          
          {/* --- LEFT SIDE: Minimal Contact Links --- */}
          <div className={`flex flex-col transform transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}>
            
            <div className="mb-12">
              <div className="inline-flex mb-6 items-center gap-3 px-5 py-2.5 rounded-full bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
                <span className="text-gray-600 dark:text-gray-300 font-mono text-xs tracking-widest uppercase font-semibold">Available for Work</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter leading-[1.1]">
                Let's Build <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-[#f5a623]">The Future.</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg font-light leading-relaxed border-l-2 border-teal-500 pl-5">
                Ready to turn your idea into a high-end digital reality? Drop a message or connect directly via my socials.
              </p>
            </div>

            {/* Direct Contact Cards (Email, WhatsApp, LinkedIn) */}
            <div className="space-y-4 w-full max-w-md">
              
              {/* Email Card */}
              <a href="mailto:shoaib.224173@gmail.com" className="group flex items-center justify-between p-5 rounded-2xl bg-white dark:bg-[#0a0a0a]/90 border border-gray-200 dark:border-white/10 hover:border-teal-200 dark:hover:border-teal-500/30 hover:bg-teal-50/50 dark:hover:bg-white/5 transition-all duration-500 shadow-sm hover:shadow-[0_10px_30px_rgba(20,184,166,0.1)] hover:-translate-y-1">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-teal-50 dark:bg-teal-950/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-teal-100 dark:group-hover:bg-teal-900/40 transition-all duration-300">
                    <FaEnvelope className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1">Email</h4>
                    <p className="text-gray-900 dark:text-white font-bold text-lg tracking-wide">shoaib.224173@gmail.com</p>
                  </div>
                </div>
                <FiArrowRight className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-teal-600 dark:group-hover:text-teal-400 group-hover:translate-x-1 transition-all" />
              </a>

              {/* WhatsApp Card */}
              <a href="https://wa.me/923171276578" target="_blank" rel="noreferrer" className="group flex items-center justify-between p-5 rounded-2xl bg-white dark:bg-[#0a0a0a]/90 border border-gray-200 dark:border-white/10 hover:border-[#25D366]/30 hover:bg-[#25D366]/5 dark:hover:bg-[#25D366]/10 transition-all duration-500 shadow-sm hover:shadow-[0_10px_30px_rgba(37,211,102,0.1)] hover:-translate-y-1">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#25D366]/20 transition-all duration-300">
                    <FaWhatsapp className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1">WhatsApp</h4>
                    <p className="text-gray-900 dark:text-white font-bold text-lg tracking-wide">Let's Chat</p>
                  </div>
                </div>
                <FiArrowRight className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-[#25D366] group-hover:translate-x-1 transition-all" />
              </a>

              {/* LinkedIn Card */}
              <a href="https://www.linkedin.com/in/shoaib-ahmed-b270b0293/" target="_blank" rel="noreferrer" className="group flex items-center justify-between p-5 rounded-2xl bg-white dark:bg-[#0a0a0a]/90 border border-gray-200 dark:border-white/10 hover:border-[#0A66C2]/30 hover:bg-[#0A66C2]/5 dark:hover:bg-[#0A66C2]/10 transition-all duration-500 shadow-sm hover:shadow-[0_10px_30px_rgba(10,102,194,0.1)] hover:-translate-y-1">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-[#0A66C2]/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0A66C2]/20 transition-all duration-300">
                    <FaLinkedinIn className="w-5 h-5 text-[#0A66C2]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1">LinkedIn</h4>
                    <p className="text-gray-900 dark:text-white font-bold text-lg tracking-wide">Connect Professionally</p>
                  </div>
                </div>
                <FiArrowRight className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-[#0A66C2] group-hover:translate-x-1 transition-all" />
              </a>

            </div>
          </div>

          {/* --- RIGHT SIDE: Glassmorphic Form --- */}
          <div className={`relative w-full transform transition-all duration-1000 delay-400 ease-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
            
            {/* 3D Glass Form Backdrop */}
            <div className="absolute -inset-2 bg-gradient-to-bl from-teal-400/20 to-[#f5a623]/20 rounded-[3rem] blur-2xl opacity-50 pointer-events-none"></div>
            
            <div className="relative bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-3xl border border-gray-200 dark:border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              
              {isSubmitted ? (
                // Success State View (Animated)
                <div className="flex flex-col items-center justify-center h-[420px] text-center animate-[popIn_0.5s_ease-out]">
                  <div className="w-24 h-24 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-500/30 flex items-center justify-center mb-6 shadow-[0_10px_30px_rgba(20,184,166,0.15)] relative">
                    <div className="absolute inset-0 rounded-full border-4 border-teal-100 dark:border-teal-500/20 border-l-teal-400 animate-spin"></div>
                    <FiCheckCircle className="w-12 h-12 text-teal-500" />
                  </div>
                  <h3 className="text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">Transmission <br /> Successful!</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg max-w-xs">I've received your coordinates. Expect a reply shortly.</p>
                </div>
              ) : (
                // Actual Form
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div className="space-y-2 group">
                      <label className="text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest pl-2 group-focus-within:text-teal-600 dark:group-focus-within:text-teal-400 transition-colors font-semibold">Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="John Doe"
                        className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl px-6 py-4 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-teal-400 focus:bg-white dark:focus:bg-white/10 focus:shadow-[0_0_15px_rgba(20,184,166,0.1)] transition-all duration-300"
                      />
                    </div>
                    {/* Email Input */}
                    <div className="space-y-2 group">
                      <label className="text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest pl-2 group-focus-within:text-teal-600 dark:group-focus-within:text-teal-400 transition-colors font-semibold">Email</label>
                      <input 
                        type="email" 
                        required
                        placeholder="john@example.com"
                        className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl px-6 py-4 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-teal-400 focus:bg-white dark:focus:bg-white/10 focus:shadow-[0_0_15px_rgba(20,184,166,0.1)] transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="space-y-2 group">
                    <label className="text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest pl-2 group-focus-within:text-[#f5a623] transition-colors font-semibold">Subject</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Project Inquiry / Consultation"
                      className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl px-6 py-4 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-[#f5a623]/50 focus:bg-white dark:focus:bg-white/10 focus:shadow-[0_0_15px_rgba(245,166,35,0.1)] transition-all duration-300"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2 group">
                    <label className="text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest pl-2 group-focus-within:text-teal-600 dark:group-focus-within:text-teal-400 transition-colors font-semibold">Message</label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="Tell me about your vision..."
                      className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl px-6 py-4 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-teal-400 focus:bg-white dark:focus:bg-white/10 focus:shadow-[0_0_15px_rgba(20,184,166,0.1)] transition-all duration-300 resize-none custom-scrollbar"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="group relative w-full inline-flex items-center justify-center gap-3 px-8 py-5 font-bold text-gray-900 bg-gradient-to-r from-teal-400 to-[#f5a623] rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(20,184,166,0.3)] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 mt-2"
                  >
                    <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
                    <span className="relative z-10 flex items-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-gray-900/30 border-t-gray-900 rounded-full animate-spin"></div>
                          Initializing...
                        </>
                      ) : (
                        <>
                          Launch Project <FiSend className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Embedded CSS for Custom Modals & Scrollbars */}
      <style>{`
        @keyframes popIn { 
          0% { opacity: 0; transform: scale(0.9) translateY(20px); filter: blur(10px); } 
          100% { opacity: 1; transform: scale(1) translateY(0); filter: blur(0); } 
        }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.1); border-radius: 10px; }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(20, 184, 166, 0.4); }
      `}</style>
    </section>
  );
};

export default Contact;
