// src/data/projectsData.ts

export type ProjectCategory = 
  | 'Website Designs' 
  | 'Full Stack Projects' 
  | 'Creative Designs'
  | 'UGC Ads'
  | 'SaaS Apps' 
  | 'Desktop Apps' 
  | 'Mobile Apps';

export interface ProjectType {
  id: string;
  title: string;
  category: ProjectCategory;
  thumbnail?: string; // Cover image for card grid
  images: string[]; // Project screenshots for the modal slider
  shortDesc: string;
  description: string;
  challenge?: string;
  solution?: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
}

export const projectsData: ProjectType[] = [
  // ==========================================================================
  // REAL PROJECTS
  // ==========================================================================
  {
    id: 'stopshop',
    title: 'StopShop — Modern Lifestyle Storefront',
    category: 'Website Designs',
    thumbnail: '/stopshop/slide-00.png',
    images: [
      '/stopshop/slide-00.png',
      '/stopshop/slide-01.png',
      '/stopshop/slide-02.png',
      '/stopshop/slide-03.png',
      '/stopshop/slide-04.png',
      '/stopshop/slide-05.png',
      '/stopshop/slide-06.png',
      '/stopshop/slide-07.png'
    ],
    shortDesc: 'An editorial, minimalist e-commerce storefront designed for modern lifestyle, footwear, audio, and everyday carry collections.',
    description: 'StopShop is a modern, conversion-focused e-commerce web design crafted with an editorial, Apple-inspired aesthetic. Featuring a bold typographic hero section, Bento-style curated category grids, interactive product showcase cards with color swatches, and a clean brand philosophy layout, the interface delivers a distraction-free shopping experience across desktop and mobile viewports.',
    challenge: 'Designing a high-retention shopping narrative that highlights diverse lifestyle categories while preserving an elevated, editorial tone.',
    solution: 'Engineered clean typographic scale hierarchies, Bento-grid product layouts, and subtle micro-interactions using Tailwind CSS and React.',
    techStack: ['React', 'Tailwind CSS'],
    liveLink: 'https://example.com/stopshop',
    githubLink: 'https://github.com/shoaib/stopshop'
  },
  {
    id: 'pureclean-website',
    title: 'PureClean — Home & Deep Cleaning Website',
    category: 'Website Designs',
    thumbnail: '/Cleaning/Slide-00.png',
    images: [
      '/Cleaning/Slide-00.png',
      '/Cleaning/slide-01.png',
      '/Cleaning/slide-02.png',
      '/Cleaning/slide-03.png',
      '/Cleaning/slide-04.png',
      '/Cleaning/slide-05.png',
      '/Cleaning/slide-06.png',
      '/Cleaning/slide-07.png'
    ],
    shortDesc: 'A trust-driven residential cleaning service website featuring service breakdowns, transparent pricing plans, and instant booking flows.',
    description: 'PureClean is a modern, conversion-focused website designed for a residential and deep-cleaning service brand. Built around the hero promise "Bringing Peace of Mind with Every Clean," the layout pairs crisp white surfaces with deep forest-green brand cards and warm gold accents. It guides homeowners seamlessly through trust pillars, categorized cleaning services, transparent tiered pricing plans, and verified household testimonials.',
    challenge: 'Service-based home cleaning businesses often overwhelm visitors with cluttered text and unclear pricing, leading to low booking conversions.',
    solution: 'Designed a clean, structured visual hierarchy featuring scannable service cards, side-by-side predictable pricing plans, trust badges, and high-contrast call-to-action sections.',
    techStack: ['React', 'Tailwind CSS']
  },
  {
    id: 'dr-profile-website',
    title: 'Dr. Alexander Hayes — Medical & Clinic Profile Website',
    category: 'Website Designs',
    thumbnail: '/Dr Profile Website/slide-00.png',
    images: [
      '/Dr Profile Website/slide-00.png',
      '/Dr Profile Website/slide-01.png',
      '/Dr Profile Website/slide-02.png',
      '/Dr Profile Website/slide-03.png',
      '/Dr Profile Website/slide-04.png',
      '/Dr Profile Website/slide-05.png',
      '/Dr Profile Website/slide-06.png',
      '/Dr Profile Website/slide-07.png'
    ],
    shortDesc: 'A trust-centered medical specialist and clinic profile website featuring diagnostic service showcases, doctor networks, clinic schedules, and appointment booking.',
    description: 'Designed for Dr. Alexander Hayes, this modern healthcare and physician profile website combines calm clinical aesthetics with clear patient navigation. Built with crisp white surfaces, deep medical teal accents, and structured typography, the experience highlights comprehensive diagnostic services, a multidisciplinary medical network, multi-location consultation schedules, verified patient testimonials, and a streamlined appointment booking flow.',
    challenge: 'Patients visiting medical websites often struggle to quickly find specialist credentials, clinic timings, and simple appointment booking without feeling overwhelmed by dense clinical jargon.',
    solution: 'Created an approachable, high-trust visual architecture featuring a clear doctor introduction hero, scannable diagnostic cards, specialist network profiles, structured clinic location schedules, and an intuitive consultation request form.',
    techStack: ['React', 'Tailwind CSS']
  },
  {
    id: 'acecourt-tennis-website',
    title: 'AceCourt — Tennis Academy & Coaching Website',
    category: 'Website Designs',
    thumbnail: '/tennis/slide-00.png',
    images: [
      '/tennis/slide-00.png',
      '/tennis/slide-01.png',
      '/tennis/slide-02.png',
      '/tennis/slide-03.png',
      '/tennis/slide-04.png',
      '/tennis/slide-05.png'
    ],
    shortDesc: 'An athletic, editorial tennis academy website showcasing structured coaching programs, court performance metrics, and player enrollment flows.',
    description: 'AceCourt is a dynamic, modern sports and tennis coaching website built around the bold hero statement "Own The Court — Future Champions Start Here." Pairing crisp white editorial layouts with deep royal-blue accent bands and high-contrast typography, the interface highlights expert-driven coaching tiers, junior and private training programs, academy milestones, and verified athlete testimonials.',
    challenge: 'Sports academies often rely on dated, text-heavy layouts that fail to convey athletic energy or clearly distinguish between beginner, junior, and competitive training programs.',
    solution: 'Designed a bold, motion-ready visual hierarchy with editorial split typography, interactive program breakdowns, high-impact academy metrics, and streamlined session booking calls-to-action.',
    techStack: ['React', 'Tailwind CSS']
  },
  {
    id: 'smokehouse-fastfood-website',
    title: 'Smokehouse Craft — Fast-Food & Digital Menu Website',
    category: 'Website Designs',
    thumbnail: '/fastfood/slide-00.png',
    images: [
      '/fastfood/slide-00.png',
      '/fastfood/slide-01.png',
      '/fastfood/slide-02.png',
      '/fastfood/slide-03.png',
      '/fastfood/slide-04.png',
      '/fastfood/slide-05.png',
      '/fastfood/slide-06.png',
      '/fastfood/slide-07.png'
    ],
    shortDesc: 'A high-appetite fast-food and gourmet burger storefront featuring spotlight hero deals, categorized digital menu grids, and instant add-to-cart ordering flows.',
    description: 'Smokehouse Craft is a bold, conversion-engineered fast-food and gourmet burger web experience built around the brand ethos "Fast Food Reimagined With Real Craftsmanship." Combining high-contrast charcoal spotlight banners for signature items like the Triple Smokehouse Smash and Tokyo Katsu Chicken Sando with crisp white menu grids, vibrant crimson CTAs, and structured sections for burgers, loaded fries, sides, and shakes, the interface makes browsing and ordering effortless across mobile and desktop screens.',
    challenge: 'Online food and restaurant websites often bury popular combos inside cluttered, slow-loading menus that cause hungry visitors to drop off before ordering.',
    solution: 'Designed an appetizing, high-contrast visual hierarchy with spotlight combo hero cards, scannable category grids, clear pricing badges, and one-tap quick-order actions.',
    techStack: ['React', 'Tailwind CSS']
  },
  {
    id: 'berlin-school-college-website',
    title: 'Berlin High School & College — Academic & Admissions Website',
    category: 'Website Designs',
    thumbnail: '/school/slide-00.png',
    images: [
      '/school/slide-00.png',
      '/school/slide-01.png',
      '/school/slide-02.png',
      '/school/slide-03.png',
      '/school/slide-04.png',
      '/school/slide-05.png',
      '/school/slide-06.png'
    ],
    shortDesc: 'An institutional secondary school and collegiate website showcasing academic pillars, daily campus schedules, honors tracks, and streamlined admissions.',
    description: 'Designed for Berlin High School & College, this modern academic and admissions website centers on the promise "Precision Learning. Proven College Success." Pairing crisp white editorial surfaces with authoritative navy-blue sections and warm amber highlights, the interface walks prospective students and parents through the four pillars of academic excellence, a structured daily campus schedule, secondary and collegiate honors cohorts, faculty highlights, and an admissions inquiry flow.',
    challenge: 'Educational institutions often struggle to organize multi-grade tracks, daily timetables, and admissions steps in a way that feels modern, trustworthy, and easy for parents and students to navigate.',
    solution: 'Built a structured, scannable academic layout featuring clear grade-level cohort cards, an interactive daily campus schedule breakdown, institutional proof metrics, and high-visibility admissions calls-to-action.',
    techStack: ['React', 'Tailwind CSS']
  },
  {
    id: 'medcore-hospital-website',
    title: 'MedCore — Multi-Specialty Hospital & Healthcare Website',
    category: 'Website Designs',
    thumbnail: '/Hospital Website/slide-00.png',
    images: [
      '/Hospital Website/slide-00.png',
      '/Hospital Website/slide-01.png',
      '/Hospital Website/slide-02.png',
      '/Hospital Website/slide-03.png',
      '/Hospital Website/slide-04.png',
      '/Hospital Website/slide-05.png',
      '/Hospital Website/slide-06.png',
      '/Hospital Website/slide-07.png'
    ],
    shortDesc: 'A comprehensive hospital and multi-specialty healthcare website featuring department directories, specialist doctor profiles, patient stories, and a 24/7 emergency care banner.',
    description: 'Designed around the hero mission "Empowering Lives Through Transformative Healthcare," this multi-specialty hospital website blends clinical trust with effortless patient navigation. Built on crisp white surfaces with medical blue accents and a high-visibility crimson emergency trauma banner, the layout showcases key hospital milestones (50K+ happy patients, 120+ specialists, 24/7 care), specialized medical departments, experienced doctor cards with direct booking actions, verified patient testimonials, and an interactive FAQ section.',
    challenge: 'Large multi-specialty hospitals often struggle to present dozens of departments, specialist schedules, and urgent emergency contacts without creating a confusing, cluttered patient experience.',
    solution: 'Engineered a calm, structured healthcare interface with scannable department cards, clear specialist profiles, dedicated 24/7 emergency trauma callouts, and an intuitive appointment booking journey.',
    techStack: ['React', 'Tailwind CSS']
  },
  {
    id: 'swift-flow-desktop',
    title: 'Swift Flow — Software House & Agency Management System',
    category: 'Desktop Apps',
    thumbnail: '/swiftflow/swiftflow-01.png',
    images: [
      '/swiftflow/swiftflow-01.png',
      '/swiftflow/swiftflow-02.png',
      '/swiftflow/swiftflow-03.png',
      '/swiftflow/swiftflow-04.png',
      '/swiftflow/swiftflow-05.png',
      '/swiftflow/swiftflow-06.png',
      '/swiftflow/swiftflow-07.png'
    ],
    shortDesc: 'An all-in-one, offline-first desktop ERP and agency management suite featuring executive analytics, project pipelines, client ledgers, attendance tracking, built-in team chat, and HR payroll.',
    description: 'Swift Flow is a high-performance desktop management application engineered specifically for software houses and digital agencies. Built on an offline-first Electron.js and SQLite architecture with a clean, executive UI, it centralizes daily operations into a single unified workspace—covering real-time revenue and project KPIs, milestone workflows, client deal ledgers, role-based team directories, live employee attendance logs, internal team messaging, and automated HR payroll management.',
    challenge: 'Software houses and agencies typically juggle separate web tools for project tracking, client invoicing, staff attendance, team communication, and payroll—leading to fragmented data, subscription bloat, and slow browser workflows.',
    solution: 'Architected a fast, unified desktop workspace combining project pipelines, client financial ledgers, attendance monitoring, real-time team chat, and HR payroll inside one responsive native application.',
    techStack: ['Electron.js', 'React', 'TypeScript', 'Tailwind CSS', 'SQLite']
  },
  {
    id: 'swift-academy-desktop',
    title: 'Swift Academy — School & Institute Management System',
    category: 'Desktop Apps',
    thumbnail: '/swiftacademy/swiftacademy-01.png',
    images: [
      '/swiftacademy/swiftacademy-01.png',
      '/swiftacademy/swiftacademy-02.png',
      '/swiftacademy/swiftacademy-03.png',
      '/swiftacademy/swiftacademy-04.png',
      '/swiftacademy/swiftacademy-05.png',
      '/swiftacademy/swiftacademy-06.png',
      '/swiftacademy/swiftacademy-07.png'
    ],
    shortDesc: 'An offline-first desktop school and academy ERP featuring student & faculty directories, batch allocations, real-time attendance tracking, monthly fee billing, and student batch transfers.',
    description: 'Swift Academy is a comprehensive, offline-first desktop management system engineered for schools, coaching centers, and educational institutes. Built with Electron.js, React, TypeScript, and local SQLite storage in a sleek dark-mode executive interface, it unifies administrative operations—covering real-time enrollment KPIs, student and teacher directories, classroom capacity & instructor allocations, daily student/staff attendance with scanner integration, monthly tuition fee ledgers & receipt generation, and audited student batch transfers.',
    challenge: 'Schools and coaching academies often rely on manual registers or disconnected spreadsheets for student records, daily attendance, teacher batch assignments, and monthly fee tracking—leading to billing errors and slow administrative workflows.',
    solution: 'Built a fast, unified desktop ERP that centralizes student enrollment, faculty assignments, live attendance rosters, automated fee collection tracking, and audited student migrations inside a single native application.',
    techStack: ['Electron.js', 'React', 'TypeScript', 'Tailwind CSS', 'SQLite']
  },
  {
    id: 'ssp-police-inventory-desktop',
    title: 'SSP Office IT Dept — Police Inventory & Dispatch System',
    category: 'Desktop Apps',
    thumbnail: '/police/inventory-01.png',
    images: [
      '/police/inventory-01.png',
      '/police/inventory-02.png',
      '/police/inventory-03.png',
      '/police/inventory-04.png',
      '/police/inventory-05.png',
      '/police/inventory-06.png',
      '/police/inventory-07.png'
    ],
    shortDesc: 'An offline-first desktop inventory and logistics command system built for the Police Department (SSP Office — IT Dept) to track district station stock, incoming/outgoing equipment, requisitions, and audit reports.',
    description: "Engineered specifically for the Police Department's SSP Office (IT Department), this secure, offline-first desktop inventory management system centralizes IT equipment and asset logistics across district police stations. Featuring an authoritative navy-and-gold command interface, it provides an Operations Command Dashboard with IN/OUT trend analytics, district station directories, incoming stock intake logs, outgoing station dispatch tracking, a global search dispatch ledger, printable audit reports, and a priority-based station requisition Action Desk.",
    challenge: 'Managing IT hardware, incoming stock, and equipment dispatches across multiple district police stations using manual registers caused tracking delays, missing audit trails, and slow requisition approvals.',
    solution: 'Built a tamper-resistant, offline-capable desktop command suite with real-time IN/OUT stock tracking, station-wise dispatch ledgers, instant global search, priority requisition logging, and one-click printable audit reports.',
    techStack: ['Electron.js', 'React', 'TypeScript', 'Tailwind CSS', 'SQLite']
  },
  {
    id: 'fullstack-pos-system',
    title: 'SwiftPOS — Full-Stack Restaurant & Retail POS System',
    category: 'Full Stack Projects',
    thumbnail: '/pos/pos-02.png',
    images: [
      '/pos/pos-02.png',
      '/pos/pos-03.png',
      '/pos/pos-04.png',
      '/pos/pos-05.png',
      '/pos/pos-06.png',
      '/pos/pos-07.png',
      '/pos/pos-08.png',
      '/pos/pos-09.png',
      '/pos/pos-10.png'
    ],
    shortDesc: 'A full-stack Point of Sale and restaurant operations platform powered by React, TypeScript, FastAPI, and PostgreSQL—featuring rapid billing, live Kitchen Display boards, table management, inventory control, and real-time revenue analytics.',
    description: 'SwiftPOS is a high-speed, full-stack Point of Sale and hospitality management platform engineered with a React + TypeScript frontend and an asynchronous Python FastAPI + PostgreSQL backend. Built for restaurants, cafes, and multi-counter retail businesses, it unifies front-of-house billing with back-of-house operations—featuring color-coded quick-billing terminals, real-time Kitchen Display System (KDS) order queues, interactive floor & table status grids, stock and inventory ledgers, thermal receipt customization, and daily revenue analytics.',
    challenge: 'High-volume restaurants and retail counters suffer from billing bottlenecks, delayed kitchen order routing, and out-of-sync stock counts when using legacy or disconnected POS software.',
    solution: 'Architected a low-latency REST API backend in FastAPI backed by transactional PostgreSQL storage and a responsive React + TypeScript interface—synchronizing counter orders, kitchen prep boards, table availability, and live inventory in real time.',
    techStack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Tailwind CSS']
  }
];
