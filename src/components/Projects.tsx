import React, { useState, useEffect } from 'react';
import { FiX, FiExternalLink, FiGithub, FiArrowRight, FiLayers, FiFilter, FiMaximize2 } from 'react-icons/fi';

// Define the Project Type Interface
export interface ProjectType {
  id: string | number;
  title: string;
  category: string;
  shortDesc: string;
  thumbnail: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
  story: {
    challenge: string;
    solution: string;
  };
  gallery: string[];
}

const filterCategories = [
  "All", 
  "Website Designs", 
  "Full Stack Projects", 
  "SaaS Apps", 
  "Desktop Apps", 
  "Mobile Apps"
];

const Projects: React.FC = () => {
  // States for Dynamic Data
  const [projectsData, setProjectsData] = useState<ProjectType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Original States
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [isAnimating, setIsAnimating] = useState(false);

  // Dynamic API Fetch
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/projects'); 
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        setProjectsData(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Lock Body Scroll when Modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  const handleFilterChange = (category: string) => {
    if (category === activeFilter) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveFilter(category);
      setIsAnimating(false);
    }, 250); 
  };

  // Static Filter Logic matching categories safely
  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === "All") return true;
    
    const cat = project.category.toLowerCase();
    const filter = activeFilter.toLowerCase();
    
    if (filter.includes('website') && (cat.includes('front') || cat.includes('web') || cat.includes('design'))) return true;
    if (filter.includes('full stack') && (cat.includes('full') || cat.includes('stack') || cat.includes('backend'))) return true;
    if (filter.includes('saas') && cat.includes('saas')) return true;
    if (filter.includes('desktop') && cat.includes('desktop')) return true;
    if (filter.includes('mobile') && (cat.includes('mobile') || cat.includes('app'))) return true;
    
    return false;
  });

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-[#fafafa] dark:bg-[#050505] min-h-screen overflow-hidden selection:bg-teal-500/20 transition-colors duration-500">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-teal-500/5 dark:bg-teal-500/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[50rem] h-[50rem] bg-amber-500/5 dark:bg-amber-500/10 rounded-full blur-[200px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex mb-6 items-center gap-3 px-5 py-2.5 rounded-full bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 shadow-sm">
              <FiLayers className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span className="text-gray-600 dark:text-gray-300 font-mono text-xs tracking-widest uppercase font-semibold">Portfolio Showcase</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter leading-none">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-amber-500">Case Studies.</span>
            </h2>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-lg font-light max-w-sm border-l-2 border-teal-500 pl-5 mb-2">
            Explore my digital architectures by category. Click on any card to view the complete visual story and screenshots.
          </p>
        </div>

        {/* --- FILTER BUTTONS --- */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 text-gray-400 dark:text-gray-500 mr-2">
            <FiFilter className="w-4 h-4" />
          </div>
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilterChange(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-md scale-105'
                  : 'bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/10 hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-200 dark:hover:border-teal-500/30 shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* --- DYNAMIC PROJECT CARDS GRID --- */}
        {isLoading ? (
           <div className="flex justify-center items-center h-64 w-full">
             <div className="text-teal-600 dark:text-teal-400 font-bold text-xl animate-pulse">Loading Elite Projects...</div>
           </div>
        ) : (
          <div className={`transition-opacity duration-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-white dark:bg-[#0a0a0a]/90 border border-gray-200 dark:border-white/10 rounded-[2rem] p-8 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.02)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:-translate-y-2 cursor-pointer flex flex-col h-[380px] overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="mb-6 flex justify-between items-center">
                  <span className="text-teal-600 dark:text-teal-400 font-mono text-xs uppercase tracking-widest font-bold bg-teal-50 dark:bg-teal-950/40 px-4 py-1.5 rounded-full border border-teal-100 dark:border-teal-500/20 inline-block">
                    {project.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-400 dark:text-gray-500 group-hover:text-teal-600 dark:group-hover:text-teal-400 group-hover:bg-teal-50 dark:group-hover:bg-white/10 transition-colors">
                    <FiMaximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h3 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight leading-tight mb-4 group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-light mb-6 flex-1 line-clamp-4">
                  {project.shortDesc}
                </p>

                <div className="mt-auto pt-6 border-t border-gray-100 dark:border-white/5">
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.techStack.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-2.5 py-1 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-gray-600 dark:text-gray-300 text-[11px] font-semibold">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2.5 py-1 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-gray-400 dark:text-gray-500 text-[11px] font-semibold">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-gray-900 dark:text-white font-bold text-sm group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    View Details & Case Study <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
            
            {/* Empty State Fallback */}
            {!isLoading && filteredProjects.length === 0 && (
              <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-20 text-gray-500 dark:text-gray-400 font-medium">
                No projects found in this category.
              </div>
            )}
          </div>
        )}
      </div>

      {/* --- CINEMATIC LIGHT / DARK MODAL (WITH IMAGES & STORY) --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-0">
          <div className="absolute inset-0 bg-white/70 dark:bg-black/80 backdrop-blur-2xl animate-[fadeIn_0.4s_ease-out]" onClick={() => setSelectedProject(null)}></div>
          
          <div className="relative w-full max-w-6xl h-[90vh] md:h-[85vh] bg-white dark:bg-[#0a0a0a]/95 border border-gray-200 dark:border-white/10 rounded-[2.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.15)] dark:shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col animate-[modalEntrance_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards] z-10">
            
            <button 
              onClick={() => setSelectedProject(null)} 
              aria-label="Close Modal"
              className="absolute top-6 right-6 z-50 w-12 h-12 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md hover:bg-white dark:hover:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 shadow-sm rounded-full flex items-center justify-center text-gray-900 dark:text-white transition-all active:scale-90"
            >
              <FiX className="w-5 h-5" />
            </button>

            <div className="flex-1 overflow-y-auto hide-scrollbar">
              {/* Hero Banner Image */}
              <div className="relative w-full h-[40vh] md:h-[50vh]">
                <img src={selectedProject.thumbnail} alt="Project Banner" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0a0a0a] via-white/30 dark:via-[#0a0a0a]/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 md:p-12">
                   <span className="text-teal-600 dark:text-teal-400 font-mono text-sm tracking-widest uppercase font-bold mb-3 block">{selectedProject.category}</span>
                   <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter drop-shadow-sm">{selectedProject.title}</h2>
                </div>
              </div>

              {/* Grid content */}
              <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] gap-12 bg-white dark:bg-[#0a0a0a]">
                <div className="space-y-10">
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, i) => (
                        <span key={i} className="px-4 py-1.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-700 dark:text-gray-300 text-xs font-bold">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">Deployments</h4>
                    {selectedProject.liveLink && selectedProject.liveLink !== '#' && (
                      <a href={selectedProject.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-3 w-full px-6 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-2xl hover:bg-black dark:hover:bg-gray-200 transition-all justify-center shadow-lg group">
                        <FiExternalLink className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" /> Visit Live Project
                      </a>
                    )}
                    {selectedProject.githubLink && selectedProject.githubLink !== '#' && (
                      <a href={selectedProject.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-3 w-full px-6 py-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-bold rounded-2xl hover:bg-gray-50 dark:hover:bg-white/10 transition-all justify-center shadow-sm group">
                        <FiGithub className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" /> View on GitHub
                      </a>
                    )}
                  </div>
                </div>

                <div className="space-y-12">
                  <div className="prose prose-gray max-w-none">
                    <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 flex items-center gap-3"><span className="w-8 h-1 bg-teal-500 rounded-full"></span> The Challenge</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-light mb-10">{selectedProject.story.challenge}</p>

                    <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 flex items-center gap-3"><span className="w-8 h-1 bg-amber-500 rounded-full"></span> The Solution</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-light">{selectedProject.story.solution}</p>
                  </div>

                  {/* Screenshots Gallery */}
                  {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                    <div className="space-y-6 pt-6">
                      <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Project Screenshots</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {selectedProject.gallery.map((img, i) => (
                          <div key={i} className="rounded-3xl overflow-hidden border border-gray-100 dark:border-white/10 shadow-lg group bg-gray-50 dark:bg-white/5">
                            <img src={img} alt={`Gallery ${i}`} className="w-full h-auto group-hover:scale-102 transition-transform duration-500" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes modalEntrance { 
          from { opacity: 0; transform: translateY(80px) scale(0.96); } 
          to { opacity: 1; transform: translateY(0) scale(1); } 
        }
        .hide-scrollbar::-webkit-scrollbar { width: 6px; }
        .hide-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .hide-scrollbar::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 10px; }
        .dark .hide-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); }
      `}</style>

    </section>
  );
};

export default Projects;
