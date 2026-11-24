// src/data/projectsData.ts

export interface ProjectType {
  id: string;
  title: string;
  category: string;
  thumbnail: string; // Main image for the grid
  gallery: string[]; // Extra images for the modal
  shortDesc: string;
  story: {
    challenge: string;
    solution: string;
  };
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
}

export const projectsData: ProjectType[] = [
  {
    id: 'urbannest',
    title: 'UrbanNest Platform',
    category: 'Full-Stack Web App',
    // Demo images (Aap inki jagah apne real URLs laga sakte hain)
    thumbnail: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687920-4e2a09be1587?q=80&w=1000&auto=format&fit=crop'
    ],
    shortDesc: 'A modern real estate platform bridging the gap between buyers and premium properties.',
    story: {
      challenge: 'The real estate market lacked a digitized, highly responsive platform where users could seamlessly browse high-end properties with dynamic filtering and real-time updates.',
      solution: 'Architected UrbanNest using modern front-end technologies with a robust backend. Implemented advanced search algorithms, secure user authentication, and a high-end glassmorphism UI to provide a premium browsing experience.'
    },
    techStack: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    liveLink: '#',
    githubLink: '#'
  },
  {
    id: 'cipherstream',
    title: 'CipherStream Elite',
    category: 'Security & Systems',
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1510511459019-5d654d5f14e6?q=80&w=1000&auto=format&fit=crop'
    ],
    shortDesc: 'A highly secure encryption engine and system architecture for sensitive data.',
    story: {
      challenge: 'Data breaches and insecure data transmission are major threats. The client needed a bulletproof encryption engine that could encrypt and decrypt data streams in real-time without latency.',
      solution: 'Developed the "Cipher Engine" using Core PHP and complex cryptographic logic. Built a highly secure system architecture that processes data rapidly while maintaining military-grade encryption standards.'
    },
    techStack: ['Core PHP', 'MySQL', 'Encryption Logic', 'HTML/CSS'],
    liveLink: '#',
    githubLink: '#'
  },
  {
    id: 'newsportal',
    title: 'Bilingual News Portal',
    category: 'Content Management',
    thumbnail: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1000&auto=format&fit=crop'
    ],
    shortDesc: 'A complete dynamic news portal with English & Urdu dual-language support.',
    story: {
      challenge: 'Managing content in two completely different typographic systems (LTR English and RTL Urdu) simultaneously from a single dashboard is complex and often breaks UI layouts.',
      solution: 'Designed a custom, scalable admin panel specifically engineered for bilingual support. The system dynamically adjusts typography, text direction, and layout based on the content language, ensuring a flawless reading experience.'
    },
    techStack: ['Laravel', 'Tailwind CSS', 'PostgreSQL', 'Dynamic RTL'],
    liveLink: '#',
    githubLink: '#'
  }
];
// Naya project add karne ke liye bas is array mein ek naya object copy-paste karke apni details likh dein!