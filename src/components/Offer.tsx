import React, { useState, useEffect } from 'react';
import { 
  FiLayout, 
  FiCpu, 
  FiEdit3, 
  FiVideo, 
  FiPieChart, 
  FiImage, 
  FiCrop, 
  FiCheckCircle,
  FiPlayCircle,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiZap
} from 'react-icons/fi';

// ============================================================================
// 1. UGC AD SAMPLES DATA (Easily drop your .mp4, .webm, or image URLs here)
// ============================================================================
export interface UgcSample {
  id: string;
  title: string;
  category: string;
  hook: string;
  concept: string;
  aiTools: string[];
  metricBadge: string;
  mediaType: 'image' | 'video';
  mediaUrl: string; // Add your .mp4, .webm, or image URL
  posterUrl?: string;
}

const ugcSamplesData: UgcSample[] = [
  {
    id: 'ugc-1',
    title: 'SaaS Product Velocity Ad',
    category: 'SaaS & Enterprise',
    hook: '"Stop spending 3 weeks building what AI can ship in 2 days."',
    concept: 'High-energy hook with dynamic screen recordings, highlighting rapid MVP prototyping, automated dashboard generation, and instant value delivery.',
    aiTools: ['Stitch AI', 'Claude', 'Figma AI'],
    metricBadge: '3.8x CTR on Meta',
    mediaType: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'ugc-2',
    title: 'E-Commerce Viral Product Reel',
    category: 'DTC & Consumer Goods',
    hook: '"I let AI redesign my brand product shoot—and sales tripled."',
    concept: 'UGC-style creator testimonial featuring photorealistic 3D product renders, dynamic lighting shifts, and viral TikTok pacing with auto-synced captions.',
    aiTools: ['Gemini', 'Midjourney', 'Stitch AI'],
    metricBadge: '4.2x ROAS',
    mediaType: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'ugc-3',
    title: 'Fintech App Onboarding Reel',
    category: 'Mobile & Fintech',
    hook: '"The AI personal CFO that saves you $400 every single month."',
    concept: 'First-person mobile screen demonstration with kinetic typography, seamless micro-animations, and direct-response app download CTA.',
    aiTools: ['Cursor', 'Lovable', 'ChatGPT'],
    metricBadge: '52K+ Organic Views',
    mediaType: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'ugc-4',
    title: 'Automated Content Engine Showcase',
    category: 'Content Marketing',
    hook: '"How we scaled from 1 post a week to 30 viral hooks on autopilot."',
    concept: 'Behind-the-scenes walkthrough demonstrating multi-platform content scheduling, AI script ideation, and automated video asset generation.',
    aiTools: ['Antigravity', 'Claude', 'ChatGPT'],
    metricBadge: '68% Lower CAC',
    mediaType: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1000&auto=format&fit=crop'
  }
];

// Master AI Tool Stack
const aiToolsStack = [
  'Claude',
  'Gemini',
  'ChatGPT',
  'Antigravity',
  'Cursor',
  'Lovable',
  'Stitch AI',
  'Figma AI'
];

// ============================================================================
// 2. AI-POWERED SOLUTIONS DATA
// ============================================================================
const offersData = [
  {
    id: 'ai-website',
    title: 'AI Website Building',
    icon: FiLayout,
    color: 'from-teal-400 to-teal-600',
    borderColor: 'border-teal-200 dark:border-teal-500/30',
    glow: 'bg-teal-400',
    description: "High-converting, modern websites architected and shipped rapidly using AI-assisted workflows, responsive layouts, and smooth micro-interactions.",
    deliverables: [
      'AI-Accelerated Wireframing & UX',
      'Ultra-Responsive Full-Stack Layouts',
      'High-Converting Copy & Architecture',
      'Max Performance & SEO Optimization'
    ],
    tools: ['Cursor', 'Claude', 'Figma AI', 'Antigravity']
  },
  {
    id: 'ai-saas',
    title: 'AI SaaS Projects',
    icon: FiCpu,
    color: 'from-[#f5a623] to-amber-500',
    borderColor: 'border-amber-200 dark:border-amber-500/30',
    glow: 'bg-[#f5a623]',
    description: "End-to-end SaaS MVPs, dashboards, multi-tenant architectures, and intelligent workflows built at 10x speed.",
    deliverables: [
      'Rapid MVP Architecture & Deployment',
      'Multi-Tenant Auth & User Portals',
      'Intelligent Agent & API Workflows',
      'Scalable Database & Stripe Integrations'
    ],
    tools: ['Cursor', 'Lovable', 'Antigravity', 'Gemini']
  },
  {
    id: 'ai-content',
    title: 'AI Content Creation',
    icon: FiEdit3,
    color: 'from-cyan-400 to-blue-500',
    borderColor: 'border-cyan-200 dark:border-cyan-500/30',
    glow: 'bg-cyan-400',
    description: "High-retention social media scripts, brand storytelling, ad copy, and automated content pipelines.",
    deliverables: [
      'High-Retention Viral Video Scripts',
      'Multi-Platform Ad & Social Copy',
      'Automated Content Distribution Pipelines',
      'Custom Brand Voice & Tone Modeling'
    ],
    tools: ['Claude', 'ChatGPT', 'Gemini', 'Stitch AI']
  },
  {
    id: 'ugc-ads',
    title: 'UGC Ads Creation',
    icon: FiVideo,
    color: 'from-rose-400 to-amber-500',
    borderColor: 'border-rose-200 dark:border-rose-500/30',
    glow: 'bg-rose-400',
    description: "Scroll-stopping AI-generated UGC video reels, virtual brand influencers, and product ad creatives for TikTok, Instagram, and Meta.",
    deliverables: [
      'Viral 9:16 Vertical Video Reels',
      'Virtual Brand Influencer Avatars',
      'Conversion-Driven Direct Response Ads',
      'Hook Optimization & Sound Syncing'
    ],
    tools: ['Stitch AI', 'ChatGPT', 'Figma AI', 'Gemini']
  },
  {
    id: 'ai-presentations',
    title: 'AI Presentations & PPTs',
    icon: FiPieChart,
    color: 'from-emerald-400 to-teal-500',
    borderColor: 'border-emerald-200 dark:border-emerald-500/30',
    glow: 'bg-emerald-400',
    description: "Executive pitch decks, investor presentations, and structured visual slides designed with AI precision.",
    deliverables: [
      'Investor Pitch Deck Structuring',
      'Visual Data Storytelling & Infographics',
      'Custom Corporate Slide Systems',
      'Executive Keynotes & Sales Decks'
    ],
    tools: ['Claude', 'Gemini', 'Figma AI', 'ChatGPT']
  },
  {
    id: 'ai-images',
    title: 'AI Image Generation',
    icon: FiImage,
    color: 'from-purple-400 to-indigo-500',
    borderColor: 'border-purple-200 dark:border-purple-500/30',
    glow: 'bg-purple-400',
    description: "Studio-grade 4:4 product photography, 3D renders, brand mockups, and custom visual assets.",
    deliverables: [
      'Studio-Grade Product Photography',
      'Photorealistic 3D Brand Renders',
      'Custom Digital Art & Character Design',
      'High-Resolution Multi-Format Outputs'
    ],
    tools: ['Gemini', 'ChatGPT', 'Figma AI', 'Stitch AI']
  },
  {
    id: 'ai-photoshop',
    title: 'AI Photoshop & Visual Editing',
    icon: FiCrop,
    color: 'from-teal-400 to-amber-500',
    borderColor: 'border-teal-200 dark:border-amber-500/30',
    glow: 'bg-teal-400',
    description: "Generative fill, background replacement, product retouching, and high-impact commercial graphics.",
    deliverables: [
      'Generative Fill & Image Outpainting',
      'Seamless Background Replacement',
      'Commercial Product Retouching',
      'Dynamic Ad Graphics & Mockups'
    ],
    tools: ['Figma AI', 'Stitch AI', 'Gemini', 'ChatGPT']
  }
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const Offer: React.FC = () => {
  const [activeOffer, setActiveOffer] = useState(offersData[0]);
  const [animate, setAnimate] = useState(false);
  
  // UGC Modal State
  const [isUgcModalOpen, setIsUgcModalOpen] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Smooth offer switch handler
  const handleOfferChange = (offer: typeof offersData[0]) => {
    if (activeOffer.id === offer.id) return;
    setAnimate(true);
    setTimeout(() => {
      setActiveOffer(offer);
      setAnimate(false);
    }, 250);
  };

  // Lock body scroll when UGC modal is active
  useEffect(() => {
    if (isUgcModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isUgcModalOpen]);

  // Keyboard navigation for UGC Modal (Esc to close, Left/Right arrows to slide)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isUgcModalOpen) return;
      if (e.key === 'Escape') setIsUgcModalOpen(false);
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isUgcModalOpen, currentSlideIndex]);

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % ugcSamplesData.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + ugcSamplesData.length) % ugcSamplesData.length);
  };

  const currentSample = ugcSamplesData[currentSlideIndex];

  return (
    <section 
      id="services" 
      className="relative py-20 min-h-screen lg:min-h-[920px] bg-[#fafafa] dark:bg-[#050505] text-gray-900 dark:text-white flex items-center justify-center overflow-hidden selection:bg-teal-500/20 transition-colors duration-500"
    >
      
      {/* --- Ambient Dynamic Glows --- */}
      <div className={`absolute top-[10%] right-[-10%] w-[38rem] h-[38rem] ${activeOffer.glow} rounded-full blur-[180px] opacity-[0.14] pointer-events-none mix-blend-multiply dark:mix-blend-screen transition-colors duration-1000`}></div>
      <div className={`absolute bottom-[10%] left-[-10%] w-[34rem] h-[34rem] ${activeOffer.glow} rounded-full blur-[180px] opacity-[0.14] pointer-events-none mix-blend-multiply dark:mix-blend-screen transition-colors duration-1000 delay-300`}></div>

      {/* Custom hidden scrollbar styles */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-10 lg:gap-14 items-center relative z-10">
        
        {/* --- LEFT SIDE: Dynamic Glassmorphic Content Card --- */}
        <div className="relative min-h-[580px] lg:h-[620px] flex items-center order-2 lg:order-1">
          <div className={`absolute -inset-1 bg-gradient-to-br ${activeOffer.color} rounded-[2.5rem] blur-2xl opacity-20 dark:opacity-30 transition-all duration-1000`}></div>
          
          <div className={`relative w-full h-full flex flex-col justify-between bg-white/85 dark:bg-[#0a0a0a]/90 backdrop-blur-3xl border ${activeOffer.borderColor} rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 transform ${
            animate ? 'opacity-0 -translate-x-8 scale-95 blur-sm' : 'opacity-100 translate-x-0 scale-100 blur-0'
          }`}>
            
            {/* Header info */}
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${activeOffer.color} bg-opacity-10 border border-white dark:border-white/10 shadow-sm`}>
                  <activeOffer.icon className="w-8 h-8 text-gray-800 dark:text-white drop-shadow-sm" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-teal-700 dark:text-teal-300 font-mono text-xs uppercase tracking-widest bg-teal-50 dark:bg-teal-950/50 px-3.5 py-1.5 rounded-full border border-teal-100 dark:border-teal-500/20 shadow-sm flex items-center gap-1.5">
                    <FiZap className="w-3.5 h-3.5 text-amber-500" />
                    AI Solution
                  </span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight leading-tight">
                {activeOffer.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base font-normal leading-relaxed mb-6">
                {activeOffer.description}
              </p>
            </div>

            {/* Key Deliverables */}
            <div className="my-auto">
              <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 dark:text-gray-400 mb-3 border-b border-gray-100 dark:border-white/10 pb-2">
                Key Deliverables
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {activeOffer.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 dark:text-gray-200">
                    <FiCheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-teal-500" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* AI Tool Stack Pills Strip */}
            <div className="pt-4 border-t border-gray-100 dark:border-white/10">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[11px] font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500">
                  Powered By AI Stack
                </span>
                <span className="text-[11px] font-medium text-teal-600 dark:text-teal-400">
                  Optimized for Fast Delivery
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {aiToolsStack.map((tool) => {
                  const isSpecialized = activeOffer.tools.includes(tool);
                  return (
                    <span
                      key={tool}
                      className={`text-[11px] sm:text-xs px-2.5 py-1 rounded-full font-medium transition-all duration-200 ${
                        isSpecialized
                          ? 'bg-teal-500/10 border border-teal-500/30 text-teal-700 dark:text-teal-300 font-semibold shadow-sm'
                          : 'bg-gray-50 border border-gray-200 text-gray-600 dark:bg-white/5 dark:border-white/10 dark:text-gray-300'
                      }`}
                    >
                      {tool}
                    </span>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* --- RIGHT SIDE: Section Header & Interactive Category Tabs --- */}
        <div className="flex flex-col h-full order-1 lg:order-2">
          
          {/* Header Area with Top-Right UGC Samples CTA */}
          <div className="mb-6 shrink-0 flex flex-col lg:items-end">
            
            {/* Top-Right Standout UGC Ad Samples Button */}
            <button
              onClick={() => setIsUgcModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 bg-gradient-to-r from-teal-500/10 via-amber-500/10 to-teal-500/10 hover:from-teal-500/20 hover:to-amber-500/20 border border-teal-500/30 dark:border-teal-400/30 text-teal-700 dark:text-teal-300 shadow-[0_0_20px_rgba(20,184,166,0.12)] hover:shadow-[0_0_25px_rgba(245,166,35,0.25)] hover:scale-[1.03] active:scale-95 group cursor-pointer"
            >
              <FiPlayCircle className="w-4 h-4 text-[#f5a623] group-hover:scale-110 transition-transform duration-300" />
              <span>Want to see UGC Ad Samples?</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
            </button>

            <h2 className="flex items-center lg:justify-end gap-3 text-teal-600 dark:text-teal-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-2">
              <span className="w-10 h-px bg-teal-600/50 dark:bg-teal-400/50 hidden lg:block"></span>
              What Do I Offer?
              <span className="w-10 h-px bg-teal-600/50 dark:bg-teal-400/50 lg:hidden"></span>
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white leading-tight tracking-tight lg:text-right">
              AI-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-[#f5a623] transition-colors duration-500">Solutions.</span>
            </h3>
          </div>

          {/* Interactive Category Tabs List */}
          <div className="flex-1 overflow-y-auto hide-scrollbar">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {offersData.map((item) => {
                const isActive = activeOffer.id === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleOfferChange(item)}
                    className={`group relative flex flex-col items-start gap-2.5 p-3.5 sm:p-4 rounded-2xl transition-all duration-300 overflow-hidden outline-none text-left cursor-pointer ${
                      isActive 
                        ? 'bg-white dark:bg-[#0a0a0a]/90 border border-teal-500/40 dark:border-teal-500/30 shadow-[0_10px_25px_rgba(20,184,166,0.08)] dark:shadow-[0_10px_25px_rgba(0,0,0,0.5)] scale-[1.02]' 
                        : 'bg-gray-50/80 dark:bg-white/5 border border-transparent dark:border-white/5 hover:bg-white dark:hover:bg-white/10 hover:border-gray-200 dark:hover:border-white/10 hover:scale-[1.01]'
                    }`}
                  >
                    {/* Top Accent Stripe on Active Card */}
                    {isActive && (
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`}></div>
                    )}
                    
                    <div className="flex items-center gap-3 w-full">
                      <div className={`p-2 rounded-xl transition-colors duration-300 ${
                        isActive
                          ? 'bg-teal-500/10 text-teal-600 dark:text-teal-400'
                          : 'bg-gray-200/50 dark:bg-white/5 text-gray-500 dark:text-gray-400 group-hover:text-teal-500'
                      }`}>
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className={`font-bold text-xs sm:text-sm tracking-wide truncate transition-colors duration-300 ${
                          isActive 
                            ? 'text-gray-900 dark:text-white' 
                            : 'text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white'
                        }`}>
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

      </div>

      {/* ==================================================================== */}
      {/* 3. CINEMATIC UGC ADS SLIDER MODAL                                    */}
      {/* ==================================================================== */}
      {isUgcModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md transition-all duration-300 animate-fadeIn"
          onClick={() => setIsUgcModalOpen(false)}
        >
          {/* Modal Container */}
          <div 
            className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-2xl border border-gray-200 dark:border-white/10 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.3)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Modal Top Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-white/10">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400">
                  <FiVideo className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-gray-900 dark:text-white tracking-tight">
                    UGC Ad Samples & Creative Showcase
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Scroll-stopping vertical video creatives & AI storytelling
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button 
                onClick={() => setIsUgcModalOpen(false)}
                className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
                aria-label="Close Modal"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body / Carousel Content */}
            <div className="p-6 overflow-y-auto hide-scrollbar flex-1">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* Left/Center: Vertical 9:16 Reel Preview Frame */}
                <div className="md:col-span-5 flex flex-col items-center justify-center">
                  <div className="relative w-[240px] sm:w-[260px] aspect-[9/16] rounded-2xl overflow-hidden border border-gray-200 dark:border-white/15 shadow-2xl bg-black group">
                    
                    {currentSample.mediaType === 'video' ? (
                      <video 
                        key={currentSample.mediaUrl}
                        controls 
                        playsInline
                        poster={currentSample.posterUrl}
                        className="w-full h-full object-cover"
                      >
                        <source src={currentSample.mediaUrl} type="video/mp4" />
                        Your browser does not support video playback.
                      </video>
                    ) : (
                      <>
                        <img 
                          src={currentSample.mediaUrl} 
                          alt={currentSample.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none"></div>
                        
                        {/* Center Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                            <FiPlayCircle className="w-8 h-8 text-white" />
                          </div>
                        </div>
                      </>
                    )}

                    {/* Top Overlay Badge */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-teal-300 border border-white/15">
                        9:16 UGC Reel
                      </span>
                      <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-amber-500/90 text-gray-950 shadow-sm">
                        {currentSample.metricBadge}
                      </span>
                    </div>

                    {/* Bottom Title Bar */}
                    <div className="absolute bottom-3 left-3 right-3 pointer-events-none">
                      <p className="text-xs font-bold text-white drop-shadow-md truncate">
                        {currentSample.title}
                      </p>
                      <p className="text-[10px] text-gray-300 drop-shadow-md">
                        {currentSample.category}
                      </p>
                    </div>

                  </div>
                </div>

                {/* Right: Ad Story, Hook & AI Stack Details */}
                <div className="md:col-span-7 flex flex-col justify-center space-y-5">
                  
                  {/* Category & Status */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-500/30 text-teal-700 dark:text-teal-300 font-semibold">
                      {currentSample.category}
                    </span>
                    <span className="text-xs font-medium text-gray-400">
                      Sample #{currentSlideIndex + 1} of {ugcSamplesData.length}
                    </span>
                  </div>

                  {/* Ad Title */}
                  <h4 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white tracking-tight">
                    {currentSample.title}
                  </h4>

                  {/* Hook Callout */}
                  <div className="p-4 rounded-2xl bg-teal-50/50 dark:bg-white/5 border-l-4 border-teal-500 border-y border-r border-gray-200/50 dark:border-white/5">
                    <span className="block text-[11px] font-mono uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-1">
                      Viral Hook / Headline
                    </span>
                    <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-100 italic">
                      {currentSample.hook}
                    </p>
                  </div>

                  {/* Creative Concept */}
                  <div>
                    <h5 className="text-xs font-mono uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">
                      Creative Strategy & Direction
                    </h5>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {currentSample.concept}
                    </p>
                  </div>

                  {/* AI Tools Used */}
                  <div>
                    <h5 className="text-xs font-mono uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2.5">
                      AI Workflow Stack
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {currentSample.aiTools.map((tool) => (
                        <span 
                          key={tool}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-gray-50 border border-gray-200 text-gray-700 dark:bg-white/5 dark:border-white/10 dark:text-gray-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* Modal Bottom Controls: Arrows & Slide Indicator Dots */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.02]">
              
              {/* Prev Button */}
              <button
                onClick={prevSlide}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-200 hover:border-teal-500 dark:hover:border-teal-400 transition-colors shadow-sm cursor-pointer"
              >
                <FiChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              {/* Indicator Dots */}
              <div className="flex items-center gap-2">
                {ugcSamplesData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlideIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentSlideIndex === idx 
                        ? 'w-6 bg-teal-500' 
                        : 'w-2 bg-gray-300 dark:bg-white/20 hover:bg-teal-300'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-200 hover:border-teal-500 dark:hover:border-teal-400 transition-colors shadow-sm cursor-pointer"
              >
                <span>Next</span>
                <FiChevronRight className="w-4 h-4" />
              </button>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default Offer;
