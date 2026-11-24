import React, { useState } from 'react';
import { 
  FiLayout, 
  FiServer, 
  FiCloud, 
  FiGlobe, 
  FiSmartphone, 
  FiUploadCloud, 
  FiRefreshCw,
  FiCheckCircle
} from 'react-icons/fi';

const offersData = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: FiLayout,
    color: 'from-teal-400 to-teal-600',
    borderColor: 'border-teal-200 dark:border-teal-500/30',
    glow: 'bg-teal-400',
    description: "I craft pixel-perfect, highly interactive, and intuitive user interfaces. My goal is to keep users engaged with smooth animations, modern glassmorphism, and flawlessly responsive layouts.",
    deliverables: ['Custom UI/UX Implementation', 'Interactive Animations', 'Responsive Web Design', 'Frontend Performance Optimization']
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: FiServer,
    color: 'from-[#f5a623] to-amber-500',
    borderColor: 'border-amber-200 dark:border-amber-500/30',
    glow: 'bg-[#f5a623]',
    description: "The backbone of your digital product. I build secure, scalable, and high-performance server-side architectures that handle complex business logic and heavy data processing with ease.",
    deliverables: ['Custom API Development', 'Database Architecture', 'Secure Authentication', 'Server-side Logic & Routing']
  },
  {
    id: 'saas',
    title: 'SaaS App Development',
    icon: FiCloud,
    color: 'from-blue-400 to-indigo-500',
    borderColor: 'border-blue-200 dark:border-blue-500/30',
    glow: 'bg-blue-400',
    description: "From concept to cloud. I architect comprehensive Software-as-a-Service platforms featuring multi-tenancy, secure payment gateways, and scalable subscription models.",
    deliverables: ['Multi-tenant Architecture', 'Stripe/Payment Integration', 'Subscription Management', 'Scalable Cloud Infrastructure']
  },
  {
    id: 'ecosystem',
    title: 'Web Ecosystems',
    icon: FiGlobe,
    color: 'from-emerald-400 to-green-500',
    borderColor: 'border-emerald-200 dark:border-emerald-500/30',
    glow: 'bg-emerald-400',
    description: "Developing interconnected digital environments. I build complex ecosystems where multiple applications, dashboards, and microservices communicate flawlessly in real-time.",
    deliverables: ['Microservices Architecture', 'Third-party API Integrations', 'Real-time Data Sync', 'Centralized Admin Portals']
  },
  {
    id: 'mobile',
    title: 'Native Mobile Apps',
    icon: FiSmartphone,
    color: 'from-cyan-400 to-blue-500',
    borderColor: 'border-cyan-200 dark:border-cyan-500/30',
    glow: 'bg-cyan-400',
    description: "Taking your business to the app stores. I develop high-performance native and cross-platform mobile applications that provide a premium native feel on both iOS and Android.",
    deliverables: ['Cross-platform Development', 'Native UI/UX Feel', 'App Store Deployment', 'Mobile API Integration']
  },
  {
    id: 'deployment',
    title: 'Deployment & Maintenance',
    icon: FiUploadCloud,
    color: 'from-purple-400 to-purple-500',
    borderColor: 'border-purple-200 dark:border-purple-500/30',
    glow: 'bg-purple-400',
    description: "Your product deserves 99.9% uptime. I handle the complete deployment pipeline, server configurations, and provide ongoing maintenance to ensure your app runs securely and smoothly.",
    deliverables: ['AWS/VPS Server Setup', 'CI/CD Pipeline Automation', 'SSL & Security Audits', 'Ongoing Bug Fixes & Updates']
  },
  {
    id: 'redesign',
    title: 'Redesign & Development',
    icon: FiRefreshCw,
    color: 'from-red-400 to-rose-500',
    borderColor: 'border-red-200 dark:border-red-500/30',
    glow: 'bg-red-400',
    description: "Breathing new life into legacy systems. I analyze outdated software, modernize its architecture, and completely revamp the UI/UX to match current high-end industry standards.",
    deliverables: ['Legacy Code Refactoring', 'Modern UI/UX Revamp', 'Performance Boosting', 'Tech-stack Migration']
  }
];

const Offer: React.FC = () => {
  const [activeOffer, setActiveOffer] = useState(offersData[0]);
  const [animate, setAnimate] = useState(false);

  // Manual Click Handler with smooth transition
  const handleOfferChange = (offer: typeof offersData[0]) => {
    if (activeOffer.id === offer.id) return;
    setAnimate(true);
    setTimeout(() => {
      setActiveOffer(offer);
      setAnimate(false);
    }, 300);
  };

  return (
    <section 
      id="services" 
      className="relative h-screen min-h-[850px] bg-[#fafafa] dark:bg-[#050505] text-gray-900 dark:text-white flex items-center justify-center overflow-hidden selection:bg-teal-500/20 transition-colors duration-500"
    >
      
      {/* --- Dynamic Background Glows --- */}
      <div className={`absolute top-[10%] right-[-10%] w-[40rem] h-[40rem] ${activeOffer.glow} rounded-full blur-[180px] opacity-[0.15] pointer-events-none mix-blend-multiply dark:mix-blend-screen transition-colors duration-1000`}></div>
      <div className={`absolute bottom-[10%] left-[-10%] w-[35rem] h-[35rem] ${activeOffer.glow} rounded-full blur-[180px] opacity-[0.15] pointer-events-none mix-blend-multiply dark:mix-blend-screen transition-colors duration-1000 delay-300`}></div>

      {/* Embedded CSS for Custom Hidden Scrollbar */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center relative z-10">
        
        {/* --- LEFT SIDE: Dynamic Glassmorphism Content Card --- */}
        <div className="relative h-[550px] md:h-[600px] flex items-center order-2 lg:order-1">
          <div className={`absolute -inset-1 bg-gradient-to-br ${activeOffer.color} rounded-[2.5rem] blur-2xl opacity-20 dark:opacity-30 transition-all duration-1000`}></div>
          
          <div className={`relative w-full h-full flex flex-col bg-white/80 dark:bg-[#0a0a0a]/90 backdrop-blur-3xl border ${activeOffer.borderColor} rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 transform ${
            animate ? 'opacity-0 -translate-x-12 scale-95 blur-sm' : 'opacity-100 translate-x-0 scale-100 blur-0'
          }`}>
            
            <div className="flex items-center gap-6 mb-8">
              <div className={`p-5 rounded-3xl bg-gradient-to-br ${activeOffer.color} bg-opacity-10 border border-white dark:border-white/10 shadow-sm`}>
                <activeOffer.icon className="w-12 h-12 text-gray-800 dark:text-white drop-shadow-sm" />
              </div>
              <div>
                <span className="text-teal-700 dark:text-teal-300 font-mono text-xs uppercase tracking-widest bg-teal-50 dark:bg-teal-950/50 px-4 py-1.5 rounded-full border border-teal-100 dark:border-teal-500/20 shadow-sm">Service Detail</span>
              </div>
            </div>

            <h3 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
              {activeOffer.title}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg font-light leading-relaxed mb-8 flex-1">
              {activeOffer.description}
            </p>

            <div className="mt-auto">
              <h4 className="text-gray-900 dark:text-white font-semibold mb-4 tracking-wide border-b border-gray-200 dark:border-white/10 pb-2">Key Deliverables</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeOffer.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                    <FiCheckCircle className={`w-5 h-5 shrink-0 mt-0.5 text-teal-500 transition-colors duration-500`} />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* --- RIGHT SIDE: Interactive Offers Grid/List --- */}
        <div className="flex flex-col h-full max-h-[600px] order-1 lg:order-2">
          <div className="mb-8 shrink-0 lg:text-right">
            <h2 className="flex items-center lg:justify-end gap-4 text-teal-600 dark:text-teal-400 font-mono text-sm tracking-widest uppercase mb-4">
              <span className="w-12 h-px bg-teal-600/50 dark:bg-teal-400/50 hidden lg:block"></span>
              What Do I Offer?
              <span className="w-12 h-px bg-teal-600/50 dark:bg-teal-400/50 lg:hidden"></span>
            </h2>
            <h3 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white leading-tight tracking-tight">
              Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-[#f5a623] transition-colors duration-500">Solutions.</span>
            </h3>
          </div>

          <div className="flex-1 overflow-y-auto hide-scrollbar pb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {offersData.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleOfferChange(item)}
                  className={`group relative flex flex-col items-start gap-3 p-4 rounded-2xl transition-all duration-300 overflow-hidden outline-none text-left ${
                    activeOffer.id === item.id 
                      ? 'bg-white dark:bg-[#0a0a0a]/90 border border-gray-200 dark:border-white/10 shadow-[0_10px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.4)] scale-[1.02]' 
                      : 'bg-gray-50 dark:bg-white/5 border border-transparent dark:border-white/5 hover:bg-white dark:hover:bg-white/10 hover:border-gray-200 dark:hover:border-white/10 hover:shadow-sm hover:scale-[1.01]'
                  }`}
                >
                  {/* Top Color Glow line for Active Item */}
                  {activeOffer.id === item.id && (
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`}></div>
                  )}
                  
                  <div className="flex items-center gap-3 w-full">
                    <item.icon className={`w-5 h-5 transition-colors duration-300 ${activeOffer.id === item.id ? 'text-teal-600 dark:text-teal-400' : 'text-gray-400 group-hover:text-teal-500'}`} />
                    <h4 className={`font-bold text-sm md:text-base tracking-wide truncate transition-colors duration-300 ${
                      activeOffer.id === item.id ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                    }`}>
                      {item.title}
                    </h4>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Offer;
