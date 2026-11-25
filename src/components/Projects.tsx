import React, { useState, useEffect, useRef } from 'react';
import { 
  FiX, 
  FiArrowRight, 
  FiArrowUpRight,
  FiLayers, 
  FiLayout,
  FiImage,
  FiVideo,
  FiMonitor,
  FiCloud,
  FiSmartphone,
  FiFilter, 
  FiMaximize2,
  FiChevronLeft,
  FiChevronRight,
  FiVolume2,
  FiVolumeX
} from 'react-icons/fi';
import { projectsData, type ProjectType, type ProjectCategory } from '../data/projectsData';

const filterCategories: ('All' | ProjectCategory)[] = [
  'All',
  'Website Designs',
  'Full Stack Projects',
  'Creative Designs',
  'UGC Ads',
  'SaaS Apps',
  'Desktop Apps',
  'Mobile Apps'
];

// 5 UGC Video Ads
const ugcAdVideos = [
  '/ugc/Clinic-AD.mp4',
  '/ugc/desi parents.mp4',
  '/ugc/Mec Ad.mp4',
  '/ugc/perfume Ad.mp4',
  '/ugc/Vendorcity.mp4',
];

// 19 Creative Social Media & Branding Posts
const creativeDesignPosts: string[] = [
  '/creative desiging/slide-01.jpg',
  '/creative desiging/slide-02.jpg',
  '/creative desiging/slide-03.jpg',
  '/creative desiging/slide-04.jpg',
  '/creative desiging/slide-05.jpg',
  '/creative desiging/slide-06.jpg',
  '/creative desiging/slide-07.jpg',
  '/creative desiging/slide-08.jpg',
  '/creative desiging/slide-09.jpg',
  '/creative desiging/slide-10.jpg',
  '/creative desiging/slide-11.png',
  '/creative desiging/slide-12.png',
  '/creative desiging/slide-13.png',
  '/creative desiging/slide-14.png',
  '/creative desiging/slide-15.jpg',
  '/creative desiging/slide-16.png',
  '/creative desiging/slide-17.png',
  '/creative desiging/slide-18.png',
  '/creative desiging/slide-19.png'
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [activeFilter, setActiveFilter] = useState<'All' | ProjectCategory>('All');
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Creative Designs Coverflow State
  const [currentCreativeIndex, setCurrentCreativeIndex] = useState(0);

  // UGC Ads Coverflow State
  const [currentUgcIndex, setCurrentUgcIndex] = useState(0);
  const [isUgcMuted, setIsUgcMuted] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);

  const nextCreative = () => {
    setCurrentCreativeIndex((prev) => (prev + 1) % creativeDesignPosts.length);
  };

  const prevCreative = () => {
    setCurrentCreativeIndex((prev) => (prev - 1 + creativeDesignPosts.length) % creativeDesignPosts.length);
  };

  const nextUgc = () => {
    setCurrentUgcIndex((prev) => (prev + 1) % ugcAdVideos.length);
  };

  const prevUgc = () => {
    setCurrentUgcIndex((prev) => (prev - 1 + ugcAdVideos.length) % ugcAdVideos.length);
  };

  // Autoplay active UGC video and pause inactive ones
  useEffect(() => {
    if (activeFilter === 'UGC Ads') {
      videoRefs.current.forEach((video, index) => {
        if (!video) return;
        if (index === currentUgcIndex) {
          video.currentTime = 0;
          video.muted = isUgcMuted;
          video.play().catch(() => {});
        } else {
          video.muted = true;
          video.pause();
        }
      });
    } else {
      videoRefs.current.forEach((video) => {
        if (video) {
          video.muted = true;
          video.pause();
        }
      });
    }
  }, [currentUgcIndex, activeFilter]);

  // Sync mute state for active video and keep background videos muted
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === currentUgcIndex) {
        video.muted = isUgcMuted;
      } else {
        video.muted = true;
      }
    });
  }, [isUgcMuted, currentUgcIndex]);

  // Lock Body Scroll when Modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { 
      document.body.style.overflow = 'unset'; 
    };
  }, [selectedProject]);

  // Reset slide index whenever selected project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedProject]);

  // Preload immediate next and previous modal slide images
  useEffect(() => {
    if (!selectedProject || selectedProject.images.length <= 1) return;
    const total = selectedProject.images.length;
    const nextIdx = (currentImageIndex + 1) % total;
    const prevIdx = (currentImageIndex - 1 + total) % total;

    const nextImg = new Image();
    nextImg.src = selectedProject.images[nextIdx];

    const prevImg = new Image();
    prevImg.src = selectedProject.images[prevIdx];
  }, [selectedProject, currentImageIndex]);

  // Keyboard navigation for Modal, Creative Slider & UGC Ads Slider
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProject) {
        if (e.key === 'Escape') setSelectedProject(null);
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        return;
      }

      if (activeFilter === 'Creative Designs') {
        if (e.key === 'ArrowRight') nextCreative();
        if (e.key === 'ArrowLeft') prevCreative();
      }

      if (activeFilter === 'UGC Ads') {
        if (e.key === 'ArrowRight') nextUgc();
        if (e.key === 'ArrowLeft') prevUgc();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, currentImageIndex, activeFilter]);

  const nextImage = () => {
    if (!selectedProject || selectedProject.images.length <= 1) return;
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevImage = () => {
    if (!selectedProject || selectedProject.images.length <= 1) return;
    setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    if (activeFilter === 'Creative Designs') {
      if (distance > 45) nextCreative();
      if (distance < -45) prevCreative();
    } else if (activeFilter === 'UGC Ads') {
      if (distance > 45) nextUgc();
      if (distance < -45) prevUgc();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = dragStartX - e.clientX;
    if (activeFilter === 'Creative Designs') {
      if (diff > 45) nextCreative();
      if (diff < -45) prevCreative();
    } else if (activeFilter === 'UGC Ads') {
      if (diff > 45) nextUgc();
      if (diff < -45) prevUgc();
    }
    setIsDragging(false);
  };

  const getCreativeOffset = (index: number) => {
    let diff = index - currentCreativeIndex;
    const half = Math.floor(creativeDesignPosts.length / 2);
    if (diff > half) diff -= creativeDesignPosts.length;
    if (diff < -half) diff += creativeDesignPosts.length;
    return diff;
  };

  const getUgcOffset = (index: number) => {
    let diff = index - currentUgcIndex;
    const half = Math.floor(ugcAdVideos.length / 2);
    if (diff > half) diff -= ugcAdVideos.length;
    if (diff < -half) diff += ugcAdVideos.length;
    return diff;
  };

  const handleFilterChange = (category: 'All' | ProjectCategory) => {
    if (category === activeFilter) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveFilter(category);
      setIsAnimating(false);
    }, 200); 
  };

  // 7-Section Category Directory for "All" tab
  const categoryDirectory = [
    {
      id: 'Website Designs' as ProjectCategory,
      title: 'Website Designs',
      subtitle: 'Modern, high-converting web storefronts, clinics, academies, and brand websites.',
      colSpan: 'md:col-span-6',
      icon: FiLayout,
      count: `${projectsData.filter((p) => p.category === 'Website Designs').length} Projects`,
    },
    {
      id: 'Full Stack Projects' as ProjectCategory,
      title: 'Full Stack Projects',
      subtitle: 'End-to-end web applications powered by React, TypeScript, FastAPI, Laravel, and SQL/PostgreSQL.',
      colSpan: 'md:col-span-6',
      icon: FiLayers,
      count: `${projectsData.filter((p) => p.category === 'Full Stack Projects').length} ${
        projectsData.filter((p) => p.category === 'Full Stack Projects').length === 1 ? 'Project' : 'Projects'
      }`,
    },
    {
      id: 'Creative Designs' as ProjectCategory,
      title: 'Creative Designs',
      subtitle: 'Social media branding campaigns, promotional posters, and visual creatives.',
      colSpan: 'md:col-span-4',
      icon: FiImage,
      count: `${creativeDesignPosts.length} Creatives`,
    },
    {
      id: 'UGC Ads' as ProjectCategory,
      title: 'UGC Ads',
      subtitle: 'High-retention AI-generated UGC video reels and commercial product ads.',
      colSpan: 'md:col-span-4',
      icon: FiVideo,
      count: `${ugcAdVideos.length} Video Ads`,
    },
    {
      id: 'Desktop Apps' as ProjectCategory,
      title: 'Desktop Apps',
      subtitle: 'Offline-first Electron.js, React, and SQLite enterprise management suites.',
      colSpan: 'md:col-span-4',
      icon: FiMonitor,
      count: `${projectsData.filter((p) => p.category === 'Desktop Apps').length} Projects`,
    },
    {
      id: 'SaaS Apps' as ProjectCategory,
      title: 'SaaS Apps',
      subtitle: 'Multi-tenant cloud platforms, automated workflows, and subscription-ready software.',
      colSpan: 'md:col-span-6',
      icon: FiCloud,
      count: projectsData.filter((p) => p.category === 'SaaS Apps').length > 0 
        ? `${projectsData.filter((p) => p.category === 'SaaS Apps').length} Projects` 
        : 'Coming Soon',
    },
    {
      id: 'Mobile Apps' as ProjectCategory,
      title: 'Mobile Apps',
      subtitle: 'Cross-platform iOS and Android applications engineered with React Native.',
      colSpan: 'md:col-span-6',
      icon: FiSmartphone,
      count: projectsData.filter((p) => p.category === 'Mobile Apps').length > 0 
        ? `${projectsData.filter((p) => p.category === 'Mobile Apps').length} Projects` 
        : 'Coming Soon',
    },
  ];

  // Displayed projects based on active filter
  const displayedProjects = projectsData.filter((project) => project.category === activeFilter);

  return (
    <section 
      id="projects" 
      className="relative py-24 md:py-32 bg-[#fafafa] dark:bg-[#050505] min-h-screen overflow-hidden selection:bg-teal-500/20 transition-colors duration-500"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-teal-500/5 dark:bg-teal-500/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[45rem] h-[45rem] bg-amber-500/5 dark:bg-amber-500/10 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-3xl">
            <div className="inline-flex mb-5 items-center gap-3 px-5 py-2.5 rounded-full bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 shadow-sm">
              <FiLayers className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span className="text-gray-600 dark:text-gray-300 font-mono text-xs tracking-widest uppercase font-semibold">
                Portfolio Showcase
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white tracking-tighter leading-tight">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-[#f5a623]">Case Studies.</span>
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base font-light max-w-sm border-l-2 border-teal-500 pl-4 mb-1">
            Engineered with modern architecture and dual-theme fidelity. Select any card to explore full screenshots and technical specifications.
          </p>
        </div>

        {/* --- FILTER BUTTONS --- */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12">
          <div className="hidden md:flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 dark:bg-white/5 text-gray-400 dark:text-gray-500 mr-1">
            <FiFilter className="w-4 h-4" />
          </div>
          {filterCategories.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-md scale-105'
                    : 'bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/10 hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-200 dark:hover:border-teal-500/30 shadow-sm'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* --- DYNAMIC VIEW: CATEGORY DIRECTORY ("ALL") / COVERFLOWS / 4-COLUMN CARDS GRID --- */}
        {activeFilter === 'All' ? (
          <div className={`grid grid-cols-1 md:grid-cols-12 gap-5 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            {categoryDirectory.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  handleFilterChange(item.id);
                  const el = document.getElementById('projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`group relative bg-white dark:bg-[#0a0a0a]/90 border border-gray-200 dark:border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.02)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-xl dark:hover:shadow-[0_15px_35px_rgba(0,0,0,0.7)] hover:-translate-y-1 hover:border-teal-500/50 dark:hover:border-teal-400/50 min-h-[210px] sm:min-h-[230px] ${item.colSpan}`}
              >
                {/* Subtle top hover accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-[#f5a623] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                {/* Subtle radial spotlight glow on hover */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-teal-500/10 dark:bg-teal-500/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-amber-500/10 dark:bg-amber-500/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Top Row: Icon Container + Dynamic Item Count Pill */}
                <div className="flex items-center justify-between mb-5 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-white/5 border border-teal-100 dark:border-white/10 flex items-center justify-center text-teal-600 dark:text-teal-400 group-hover:scale-110 group-hover:bg-teal-500/15 group-hover:text-teal-500 transition-all duration-300 shadow-xs">
                    <item.icon className="w-6 h-6" />
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-mono font-bold border transition-colors shadow-xs ${
                      item.count === 'Coming Soon'
                        ? 'bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/20 text-amber-700 dark:text-amber-400'
                        : 'bg-gray-100 dark:bg-white/5 border-gray-200/80 dark:border-white/10 text-gray-700 dark:text-gray-300 group-hover:border-teal-500/30 group-hover:text-teal-600 dark:group-hover:text-teal-400'
                    }`}
                  >
                    {item.count}
                  </span>
                </div>

                {/* Middle: Bold Category Title + 2-Line Subtitle */}
                <div className="mb-6 relative z-10">
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white tracking-tight leading-snug mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-light line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>

                {/* Bottom Row: Interactive Footer CTA */}
                <div className="pt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between mt-auto relative z-10">
                  <span className="text-xs font-bold text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                    Explore Section
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gray-50 dark:bg-white/5 border border-gray-200/80 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-400 group-hover:bg-teal-500 group-hover:text-white group-hover:border-teal-500 transition-all duration-300 shadow-xs">
                    <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : activeFilter === 'Creative Designs' ? (
          <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            
            {/* Context Header */}
            <div className="text-center mb-8">
              <span className="text-teal-700 dark:text-teal-300 font-mono text-xs uppercase tracking-widest font-bold bg-teal-50 dark:bg-white/5 border border-teal-200 dark:border-white/10 px-4 py-1.5 rounded-full inline-block shadow-xs">
                Visual Branding & Social Media Creatives
              </span>
              <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-2.5 max-w-md mx-auto font-light">
                Explore 19 curated branding, promotional graphics, and social media campaigns in an interactive 3D coverflow showcase.
              </p>
            </div>

            {/* 3D Coverflow Stage */}
            <div 
              className="relative w-full max-w-6xl mx-auto h-[440px] sm:h-[520px] md:h-[600px] flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing select-none px-4"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
            >
              {/* Slides Track */}
              {creativeDesignPosts.map((post, index) => {
                const offset = getCreativeOffset(index);
                const absOffset = Math.abs(offset);

                if (absOffset > 2) return null;

                let translatePercent = 0;
                let scale = 1;
                let zIndex = 30;
                let opacity = 1;
                let extraClasses = '';

                if (offset === 0) {
                  translatePercent = 0;
                  scale = 1;
                  zIndex = 30;
                  opacity = 1;
                  extraClasses = 'blur-0 ring-2 ring-teal-500/70 dark:ring-teal-400/70 shadow-[0_20px_50px_rgba(20,184,166,0.3)] dark:shadow-[0_20px_50px_rgba(20,184,166,0.35)]';
                } else if (absOffset === 1) {
                  translatePercent = offset * 68;
                  scale = 0.88;
                  zIndex = 20;
                  opacity = 0.65;
                  extraClasses = 'blur-[4px] shadow-lg hover:opacity-90';
                } else if (absOffset === 2) {
                  translatePercent = offset * 125;
                  scale = 0.75;
                  zIndex = 10;
                  opacity = 0.3;
                  extraClasses = 'blur-[7px] shadow-sm hidden md:block hover:opacity-60';
                }

                return (
                  <div
                    key={index}
                    onClick={() => {
                      if (offset !== 0) setCurrentCreativeIndex(index);
                    }}
                    style={{
                      transform: `translateX(${translatePercent}%) scale(${scale})`,
                      zIndex,
                      opacity,
                    }}
                    className={`absolute transition-all duration-500 ease-out cursor-pointer origin-center w-[250px] sm:w-[320px] md:w-[380px] aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-100 dark:bg-black/60 border border-gray-200 dark:border-white/10 ${extraClasses}`}
                  >
                    <img 
                      src={post} 
                      alt={`Creative Post ${index + 1}`} 
                      className="w-full h-full object-cover pointer-events-none select-none"
                      loading={offset === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                    />

                    {/* Gradient highlight on active slide */}
                    {offset === 0 && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
                    )}
                  </div>
                );
              })}

              {/* Prev Circular Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevCreative();
                }}
                aria-label="Previous Slide"
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/90 dark:bg-black/80 hover:bg-white dark:hover:bg-black text-gray-800 dark:text-white backdrop-blur-md border border-gray-200 dark:border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-xl hover:scale-105 active:scale-95 z-40"
              >
                <FiChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Circular Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextCreative();
                }}
                aria-label="Next Slide"
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/90 dark:bg-black/80 hover:bg-white dark:hover:bg-black text-gray-800 dark:text-white backdrop-blur-md border border-gray-200 dark:border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-xl hover:scale-105 active:scale-95 z-40"
              >
                <FiChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Slide Counter & Progress Dots */}
            <div className="flex flex-col items-center gap-4 mt-6">
              {/* Counter Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 shadow-sm">
                <span className="font-mono text-xs font-bold text-teal-600 dark:text-teal-400">
                  {String(currentCreativeIndex + 1).padStart(2, '0')}
                </span>
                <span className="text-gray-400 text-xs font-mono">/</span>
                <span className="font-mono text-xs text-gray-500 dark:text-gray-400">
                  {String(creativeDesignPosts.length).padStart(2, '0')}
                </span>
              </div>

              {/* Dots Progress Strip */}
              <div className="flex items-center justify-center gap-1.5 max-w-sm sm:max-w-md mx-auto px-4 overflow-x-auto hide-scrollbar py-1">
                {creativeDesignPosts.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentCreativeIndex(idx)}
                    aria-label={`Jump to slide ${idx + 1}`}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      currentCreativeIndex === idx
                        ? 'w-7 h-2 bg-gradient-to-r from-teal-500 to-[#f5a623]'
                        : 'w-2 h-2 bg-gray-300 dark:bg-white/20 hover:bg-gray-400 dark:hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>
        ) : activeFilter === 'UGC Ads' ? (
          <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            
            {/* Context Header */}
            <div className="text-center mb-8">
              <span className="text-teal-700 dark:text-teal-300 font-mono text-xs uppercase tracking-widest font-bold bg-teal-50 dark:bg-white/5 border border-teal-200 dark:border-white/10 px-4 py-1.5 rounded-full inline-block shadow-xs">
                Short-Form UGC & Video Campaigns
              </span>
              <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-2.5 max-w-md mx-auto font-light">
                High-converting UGC reel video ads designed for commercial reach, viral hook rates, and brand engagement.
              </p>
            </div>

            {/* 3D Coverflow Stage */}
            <div 
              className="relative w-full max-w-6xl mx-auto h-[460px] sm:h-[540px] md:h-[620px] flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing select-none px-4"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
            >
              {/* Slides Track */}
              {ugcAdVideos.map((videoSrc, index) => {
                const offset = getUgcOffset(index);
                const absOffset = Math.abs(offset);

                if (absOffset > 2) return null;

                let translatePercent = 0;
                let scale = 1;
                let zIndex = 30;
                let opacity = 1;
                let extraClasses = '';

                if (offset === 0) {
                  translatePercent = 0;
                  scale = 1;
                  zIndex = 30;
                  opacity = 1;
                  extraClasses = 'blur-0 ring-2 ring-teal-500/70 dark:ring-teal-400/70 shadow-[0_20px_50px_rgba(20,184,166,0.3)] dark:shadow-[0_20px_50px_rgba(20,184,166,0.35)]';
                } else if (absOffset === 1) {
                  translatePercent = offset * 68;
                  scale = 0.88;
                  zIndex = 20;
                  opacity = 0.65;
                  extraClasses = 'blur-[4px] shadow-lg hover:opacity-90';
                } else if (absOffset === 2) {
                  translatePercent = offset * 125;
                  scale = 0.75;
                  zIndex = 10;
                  opacity = 0.3;
                  extraClasses = 'blur-[7px] shadow-sm hidden md:block hover:opacity-60';
                }

                const isCenterSlide = offset === 0;

                return (
                  <div
                    key={index}
                    onClick={() => {
                      if (offset !== 0) setCurrentUgcIndex(index);
                    }}
                    style={{
                      transform: `translateX(${translatePercent}%) scale(${scale})`,
                      zIndex,
                      opacity,
                    }}
                    className={`absolute transition-all duration-500 ease-out cursor-pointer origin-center w-[230px] sm:w-[280px] md:w-[320px] aspect-[9/16] rounded-2xl sm:rounded-3xl overflow-hidden bg-black border border-gray-200 dark:border-white/10 ${extraClasses}`}
                  >
                    <video
                      ref={(el) => {
                        videoRefs.current[index] = el;
                      }}
                      src={videoSrc}
                      autoPlay
                      loop
                      muted={isUgcMuted || !isCenterSlide}
                      playsInline
                      className="w-full h-full object-cover"
                    />

                    {/* Mute / Unmute Floating Sound Toggle Button on Active Center Card */}
                    {isCenterSlide && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsUgcMuted((prev) => !prev);
                        }}
                        aria-label={isUgcMuted ? 'Unmute video' : 'Mute video'}
                        className="absolute top-3.5 right-3.5 z-40 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-black/80 hover:border-teal-400 transition-all duration-200 focus:outline-none"
                      >
                        {isUgcMuted ? (
                          <FiVolumeX className="w-4 h-4" />
                        ) : (
                          <FiVolume2 className="w-4 h-4" />
                        )}
                      </button>
                    )}

                    {/* Gradient highlight on active slide */}
                    {offset === 0 && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
                    )}
                  </div>
                );
              })}

              {/* Prev Circular Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevUgc();
                }}
                aria-label="Previous Slide"
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/90 dark:bg-black/80 hover:bg-white dark:hover:bg-black text-gray-800 dark:text-white backdrop-blur-md border border-gray-200 dark:border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-xl hover:scale-105 active:scale-95 z-40"
              >
                <FiChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Circular Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextUgc();
                }}
                aria-label="Next Slide"
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/90 dark:bg-black/80 hover:bg-white dark:hover:bg-black text-gray-800 dark:text-white backdrop-blur-md border border-gray-200 dark:border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-xl hover:scale-105 active:scale-95 z-40"
              >
                <FiChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Slide Counter & Progress Dots */}
            <div className="flex flex-col items-center gap-4 mt-6">
              {/* Counter Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 shadow-sm">
                <span className="font-mono text-xs font-bold text-teal-600 dark:text-teal-400">
                  {String(currentUgcIndex + 1).padStart(2, '0')}
                </span>
                <span className="text-gray-400 text-xs font-mono">/</span>
                <span className="font-mono text-xs text-gray-500 dark:text-gray-400">
                  {String(ugcAdVideos.length).padStart(2, '0')}
                </span>
              </div>

              {/* Dots Progress Strip */}
              <div className="flex items-center justify-center gap-2 max-w-sm sm:max-w-md mx-auto px-4 overflow-x-auto hide-scrollbar py-1">
                {ugcAdVideos.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentUgcIndex(idx)}
                    aria-label={`Jump to slide ${idx + 1}`}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      currentUgcIndex === idx
                        ? 'w-7 h-2 bg-gradient-to-r from-teal-500 to-[#f5a623]'
                        : 'w-2 h-2 bg-gray-300 dark:bg-white/20 hover:bg-gray-400 dark:hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>
        ) : (
          <div 
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 transition-opacity duration-300 ${
              isAnimating ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {displayedProjects.map((project, index) => (
              <div 
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-white dark:bg-[#0a0a0a]/90 border border-gray-200 dark:border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.02)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-xl dark:hover:shadow-[0_15px_35px_rgba(0,0,0,0.7)] hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
                style={{ animationDelay: `${index * 40}ms` }}
              >
                {/* Subtle top hover accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-[#f5a623] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                {/* Compact 16:10 Cover Image Frame */}
                <div className="relative w-full aspect-[16/10] bg-gray-100 dark:bg-black/50 overflow-hidden">
                  <img 
                    src={project.thumbnail || project.images[0]} 
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Floating Category Badge & Maximize Icon */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="text-teal-700 dark:text-teal-300 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider font-bold bg-white/90 dark:bg-black/75 backdrop-blur-md px-3 py-1 rounded-full border border-gray-200/60 dark:border-white/15 shadow-sm">
                      {project.category}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-white/90 dark:bg-black/75 backdrop-blur-md border border-gray-200/60 dark:border-white/15 flex items-center justify-center text-gray-700 dark:text-gray-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors shadow-sm">
                      <FiMaximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Card Content Area with compact p-5 padding */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Project Title */}
                    <h3 className="text-base sm:text-lg font-black text-gray-900 dark:text-white tracking-tight leading-snug mb-1.5 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors line-clamp-1">
                      {project.title}
                    </h3>

                    {/* Concise Short Description */}
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed font-light line-clamp-2 mb-3.5">
                      {project.shortDesc}
                    </p>
                  </div>

                  {/* Card Bottom: Tech Stack Pills & CTA */}
                  <div className="pt-3 border-t border-gray-100 dark:border-white/5 mt-auto">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.techStack.slice(0, 3).map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-2 py-0.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-md text-gray-700 dark:text-gray-300 text-[10px] sm:text-[11px] font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="px-2 py-0.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-md text-gray-400 dark:text-gray-500 text-[10px] sm:text-[11px] font-medium">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 text-gray-900 dark:text-white font-bold text-xs group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      <span>View Details</span>
                      <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>

              </div>
            ))}

            {/* Empty State Fallback for categories with no projects yet */}
            {displayedProjects.length === 0 && (
              <div className="col-span-full text-center py-20 px-6">
                <div className="inline-flex p-3 rounded-2xl bg-teal-50 dark:bg-white/5 border border-teal-100 dark:border-teal-500/20 text-teal-600 dark:text-teal-400 mb-4 shadow-sm">
                  <FiLayers className="w-6 h-6" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1.5">
                  Projects in {activeFilter} are coming soon!
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto">
                  Currently preparing and uploading real case studies for this category. Check back shortly or browse other categories!
                </p>
              </div>
            )}
          </div>
        )}

      </div>

      {/* ==================================================================== */}
      {/* LARGE SPLIT-VIEW MODAL (LEFT IMAGE SLIDER + RIGHT DESCRIPTION)       */}
      {/* ==================================================================== */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md transition-all duration-300 animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          {/* Modal Container */}
          <div 
            className="relative w-full max-w-6xl max-h-[92vh] flex flex-col bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.3)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <span className="text-teal-700 dark:text-teal-300 font-mono text-xs uppercase tracking-wider font-bold bg-teal-50 dark:bg-teal-950/50 px-3 py-1 rounded-full border border-teal-100 dark:border-teal-500/20">
                  {selectedProject.category}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 hidden sm:inline">
                  Interactive Split Case Study
                </span>
              </div>

              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)} 
                aria-label="Close Modal"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content Split Grid */}
            <div className="p-6 sm:p-8 overflow-y-auto hide-scrollbar flex-1">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch min-h-full">
                
                {/* -------------------------------------------------------- */}
                {/* LEFT SIDE: Interactive Image Slider (Full Height Flex)   */}
                {/* -------------------------------------------------------- */}
                <div className="flex flex-col justify-between h-full gap-4">
                  
                  {/* Expanded Main Showcase Frame */}
                  <div className="relative w-full flex-1 min-h-[380px] lg:min-h-[460px] bg-gray-100 dark:bg-black/60 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 flex items-center justify-center shadow-inner group">
                    <img 
                      key={currentImageIndex}
                      src={selectedProject.images[currentImageIndex] || selectedProject.images[0]} 
                      alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                      decoding="async"
                      className="w-full h-full object-contain p-2 sm:p-4 transition-all duration-500"
                    />

                    {/* Slide Counter Badge */}
                    <div className="absolute top-3 left-3 pointer-events-none z-10">
                      <span className="text-[11px] font-mono tracking-widest px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 font-bold">
                        {currentImageIndex + 1} / {selectedProject.images.length}
                      </span>
                    </div>

                    {/* Navigation Buttons (visible when more than 1 image) */}
                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          aria-label="Previous Image"
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/85 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all cursor-pointer opacity-90 hover:scale-105 active:scale-95 z-10"
                        >
                          <FiChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={nextImage}
                          aria-label="Next Image"
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/85 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all cursor-pointer opacity-90 hover:scale-105 active:scale-95 z-10"
                        >
                          <FiChevronRight className="w-5 h-5" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Clickable Mini Thumbnails / Slider Strip */}
                  {selectedProject.images.length > 1 && (
                    <div className="flex items-center justify-center flex-wrap gap-2.5 pt-1 h-20 shrink-0 overflow-y-auto hide-scrollbar">
                      {selectedProject.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`relative h-20 aspect-[4/5] rounded-xl overflow-hidden border-2 transition-all cursor-pointer bg-gray-100 dark:bg-black/40 ${
                            currentImageIndex === idx 
                              ? 'border-teal-500 shadow-md scale-105' 
                              : 'border-transparent opacity-60 hover:opacity-100 hover:border-gray-300 dark:hover:border-white/30'
                          }`}
                        >
                          <img src={img} alt={`Thumbnail ${idx + 1}`} loading="lazy" decoding="async" className="w-full h-full object-contain p-0.5" />
                        </button>
                      ))}
                    </div>
                  )}

                </div>

                {/* -------------------------------------------------------- */}
                {/* RIGHT SIDE: Description & Tech Stack ("Built With")       */}
                {/* -------------------------------------------------------- */}
                <div className="flex flex-col space-y-6">
                  
                  {/* Title & Category Header */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white tracking-tight leading-tight mb-3">
                      {selectedProject.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Challenge & Solution Breakdown */}
                  {(selectedProject.challenge || selectedProject.solution) && (
                    <div className="space-y-3.5">
                      {selectedProject.challenge && (
                        <div className="p-4 rounded-2xl bg-teal-50/50 dark:bg-white/[0.03] border-l-4 border-teal-500 border-y border-r border-gray-200/60 dark:border-white/5">
                          <h4 className="text-[11px] font-mono uppercase tracking-wider text-teal-600 dark:text-teal-400 font-bold mb-1">
                            The Challenge
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-200 leading-relaxed font-light">
                            {selectedProject.challenge}
                          </p>
                        </div>
                      )}

                      {selectedProject.solution && (
                        <div className="p-4 rounded-2xl bg-amber-50/40 dark:bg-white/[0.03] border-l-4 border-[#f5a623] border-y border-r border-gray-200/60 dark:border-white/5">
                          <h4 className="text-[11px] font-mono uppercase tracking-wider text-amber-600 dark:text-[#f5a623] font-bold mb-1">
                            The Solution
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-200 leading-relaxed font-light">
                            {selectedProject.solution}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Dedicated "Built With / Technologies Used" Section */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3 font-semibold">
                      Built With / Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3.5 py-1.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-800 dark:text-gray-200 text-xs font-semibold shadow-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      )}

      {/* Embedded Animation Styles */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .hide-scrollbar::-webkit-scrollbar { width: 5px; }
        .hide-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .hide-scrollbar::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.1); border-radius: 10px; }
        .dark .hide-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); }
      `}</style>

    </section>
  );
};

export default Projects;
