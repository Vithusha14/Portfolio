export const personalInfo = {
  name: 'Vithusha Pathmanathan',
  email: 'vithusha014@gmail.com',
  phone: '+94 77 392 4735',
  location: 'Colombo, Sri Lanka',
  github: 'https://github.com/Vithusha14',
  linkedin: 'https://www.linkedin.com/in/vithusha-pathmanathan-8b356828a',
  resumeUrl: '/Vithusha-Pathmanathan.pdf',
  profileImage: '/profile.png',
  tagline:
    'Building scalable full-stack applications, AI-powered solutions, and modern digital experiences with clean architecture and innovative technologies.',
  roles: [
    'Software Engineer',
    'Full Stack Developer',
    'AI Application Developer',
    'Backend Developer',
  ],
  floatingTech: ['React', 'Node.js', 'Python', 'Spring Boot', 'MongoDB', 'TypeScript', 'FastAPI', 'AWS'],
};

export const about = {
  summary: `Vithusha Pathmanathan is a Software Engineering graduate passionate about building scalable software solutions using modern web technologies, backend frameworks, cloud platforms, and artificial intelligence. She specializes in full-stack development, REST API design, AI integrations, and creating user-friendly applications.`,
  highlights: [
    { label: 'Intern Projects', value: '7' },
    { label: 'Academic Projects', value: '6+' },
    { label: 'GitHub Repos', value: '12+' },
    { label: 'Technologies', value: '30+' },
    { label: 'Certifications', value: '8' },
  ],
  strengths: [
    'Full Stack Development',
    'Backend Engineering',
    'AI Integration',
    'Software Architecture',
    'Database Design',
    'UI/UX Implementation',
  ],
};

export const education = [
  {
    degree: 'BSc (Hons) in Information Technology — Software Engineering',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    period: 'Sep 2022 – Present',
    description:
      'Specializing in Software Engineering with focus on full-stack development, software architecture, AI, and cloud computing.',
    courses: [
      'Software Engineering',
      'Software Architecture',
      'Database Systems',
      'Artificial Intelligence',
      'Cloud Computing',
      'Data Structures and Algorithms',
    ],
  },
];

export const experience = [
  {
    title: 'Software Engineering Intern',
    company: 'Nilavitech Pty Ltd',
    period: 'Sep 2025 – Present',
    type: 'Internship',
    description:
      'Building production-grade full-stack, fintech, e-commerce, and AI-powered applications across logistics, healthcare, accounting, and conversational AI domains.',
    achievements: [],
    technologies: ['MERN Stack', 'Spring Boot', 'React', 'Next.js', 'FastAPI', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker'],
    projects: [
      {
        name: 'SPC Bazaar Website',
        subtitle: 'Premium Organic Products & E-Commerce Platform',
        tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'MERN Stack'],
        live: 'https://www.spcbazaar.com.au/',
        points: [
          'Built a customer-facing e-commerce website showcasing premium organic products and traditional Indian sweets to customers',
          'Enabled admins to manage and update product catalog, offers, and promotions with up-to-date information for customers',
        ],
      },
      {
        name: 'Tiger Express',
        subtitle: 'Cross-Border Logistics Platform',
        tech: ['Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'AWS'],
        live: 'https://www.tigerexpress.com.au/',
        points: [
          'Built a cross-border logistics platform (Australia ↔ Sri Lanka & India) with sea/air freight options and dynamic pricing engine',
          'Implemented RBAC for Admin, Agent, and Client roles with RESTful APIs via AWS API Gateway and Swagger UI',
        ],
      },
      {
        name: 'Account360',
        subtitle: 'All-in-One Accounting & Shop Management',
        tech: ['Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'REST APIs'],
        live: 'https://account360.tigerexpress.com.au/',
        points: [
          'Developed an accounting system managing invoices, inventory, employees, cash flow, and financial reporting in one dashboard',
          'Built features that can replace manual accountant workflows with automated bookkeeping, bank CSV upload, and multi-user verification',
        ],
      },
      {
        name: 'MedTrace AI Web',
        subtitle: 'Full-Stack Clinical Intelligence Platform',
        tech: ['Next.js', 'TypeScript', 'FastAPI', 'Python', 'PostgreSQL', 'Google Gemini', 'Docker'],
        points: [
          'Built AI-powered medical document pipeline: PDF ingestion → Gemini entity extraction → structured PostgreSQL storage',
          'Implemented patient health timelines, rule-based risk detection, and alert-review APIs',
        ],
      },
      {
        name: 'AI Receptionist',
        subtitle: 'Multi-Channel Conversational AI System',
        tech: ['FastAPI', 'Dialogflow CX', 'Google STT/TTS', 'Twilio', 'React', 'PostgreSQL', 'Redis'],
        points: [
          'Built multi-channel AI receptionist for voice calls, web chat, and SMS with WebSocket real-time conversations',
          'Integrated Google Calendar API and OpenAI/Gemini for NLP-driven booking, rescheduling, and cancellation',
        ],
      },
      {
        name: 'Hospital Patient Portal',
        subtitle: 'Secure Healthcare Access Platform',
        tech: ['FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Next.js', 'TypeScript', 'JWT', 'Twilio', 'Gemini AI'],
        points: [
          'Developed secure multi-role platform for patient registration, specialist discovery, and appointment management',
          'Built consent-driven medical record access with OTP verification, time-limited sessions, and audit controls',
        ],
      },
      {
        name: 'Money Exchange',
        subtitle: 'Multi-Currency Exchange Management App',
        tech: ['Next.js', 'Spring Boot', 'TypeScript', 'PostgreSQL', 'REST APIs'],
        live: 'https://moneyexchange.tigerexpress.com.au/',
        points: [
          'Built a money exchange platform converting LKR and INR to AUD with real-time balance and transaction history tracking',
          'Implemented exchange balance management for money exchangers operating from AUD with secure financial record keeping',
        ],
      },
    ],
  },
];

export const projects = [
  {
    title: 'Tax-Trail',
    subtitle: 'AI-Powered Tax Transparency Mobile App',
    description:
      'Mobile app aligned with UN SDG 10 integrating LangChain and Groq for AI-powered anomaly detection, trend forecasting, and automated executive summary generation with 150+ currency support.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop',
    technologies: ['React Native', 'TypeScript', 'Expo', 'LangChain', 'Groq AI', 'Appwrite'],
    github: 'https://github.com/TaxTrail-Team/Tax-Trail-Application',
    featured: true,
  },
  {
    title: 'GreenLoop',
    subtitle: 'Smart Waste Management System',
    description:
      'Team project with Stripe payments, Firebase OAuth, Redux Toolkit, and Chart.js analytics dashboard. Includes QR-based collection verification, Factory Design Pattern, and admin approval workflow.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=500&fit=crop',
    technologies: ['MERN Stack', 'Redux Toolkit', 'Stripe', 'Firebase', 'Chart.js'],
    github: 'https://github.com/Project-Group-3rd-Year-2nd-Semester/Smart-Waste-Management-System',
    featured: true,
  },
  {
    title: 'Event Booking Platform',
    subtitle: 'Microservice-Based Event Management',
    description:
      'Developed the Event Service in a distributed microservices architecture handling event management, availability, and inter-service communication via REST APIs with MongoDB.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Microservices', 'React'],
    github: 'https://github.com/Vithusha14/Event_Management-IT22208262-',
    featured: true,
  },
  {
    title: 'Personal Finance Tracker',
    subtitle: 'Secure Budget Management Backend',
    description:
      'Scalable backend for budget management, goal tracking, email notifications, and multi-currency support with authentication, API design, and performance testing using Jest and Artillery.',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=500&fit=crop',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Jest', 'Supertest', 'Artillery'],
    github: 'https://github.com/Vithusha14/Personal-Finance-Tracker',
    featured: true,
  },
  {
    title: 'Country Finder',
    subtitle: 'React REST Countries Explorer',
    description:
      'Responsive web app using React, Tailwind CSS, and REST Countries API. Features search, region filters, dark mode toggle, and favorite country saving via Local Storage.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop',
    technologies: ['React', 'Tailwind CSS', 'REST API', 'Local Storage'],
    github: 'https://github.com/Vithusha14/Final_AF_Country_Finder',
    featured: true,
  },
  {
    title: 'Food Delivery',
    subtitle: 'Online Food Ordering Platform',
    description:
      'Full-stack food delivery web application with product catalog, cart management, and payment integration built for academic coursework using modern JavaScript technologies.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=500&fit=crop',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'MySQL'],
    github: 'https://github.com/Vithusha14/SE_Y3S1_25_1.2_FOOD_DELIVERY_DS',
    featured: true,
  },
];

export const skills = {
  frontend: [
    'React.js', 'Next.js', 'TypeScript', 'JavaScript', 'React Native',
    'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap',
  ],
  backend: [
    'Java', 'Spring Boot', 'Python', 'FastAPI', 'Node.js',
    'Express.js', 'REST APIs', 'JWT Authentication',
  ],
  databases: [
    'MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Appwrite',
  ],
  ai: [
    'OpenAI API', 'Google Gemini', 'LangChain', 'Groq AI',
    'Dialogflow CX', 'TensorFlow/Keras',
  ],
  cloud: [
    'AWS', 'Docker', 'Git', 'GitHub', 'GitHub Actions', 'CI/CD',
  ],
  tools: [
    'Postman', 'Swagger', 'Figma', 'VS Code', 'IntelliJ IDEA',
  ],
};

export const githubRepos = [
  {
    name: 'Tax-Trail-Application',
    description: 'AI-powered tax transparency mobile app with LangChain, Groq AI, and real-time multi-currency support.',
    language: 'TypeScript',
    stars: 0,
    url: 'https://github.com/TaxTrail-Team/Tax-Trail-Application',
    topics: ['React Native', 'LangChain', 'Groq AI', 'Appwrite'],
    featured: true,
  },
  {
    name: 'Smart-Waste-Management-System',
    description: 'GreenLoop — MERN stack waste management with Stripe, Firebase, Redux Toolkit, and QR verification.',
    language: 'JavaScript',
    stars: 0,
    url: 'https://github.com/Project-Group-3rd-Year-2nd-Semester/Smart-Waste-Management-System',
    topics: ['MERN', 'Stripe', 'Firebase', 'Chart.js'],
    featured: true,
  },
  {
    name: 'Event_Management-IT22208262-',
    description: 'Microservice-based event booking platform with distributed User, Event, Booking, and Review services.',
    language: 'JavaScript',
    stars: 0,
    url: 'https://github.com/Vithusha14/Event_Management-IT22208262-',
    topics: ['Node.js', 'Microservices', 'MongoDB', 'React'],
    featured: true,
  },
  {
    name: 'Personal-Finance-Tracker',
    description: 'Secure finance tracker backend with budget management, authentication, and performance testing.',
    language: 'JavaScript',
    stars: 0,
    url: 'https://github.com/Vithusha14/Personal-Finance-Tracker',
    topics: ['Node.js', 'Express', 'MongoDB', 'Jest'],
    featured: false,
  },
  {
    name: 'Final_AF_Country_Finder',
    description: 'Country Finder app with React, Tailwind CSS, REST Countries API, and dark mode.',
    language: 'JavaScript',
    stars: 0,
    url: 'https://github.com/Vithusha14/Final_AF_Country_Finder',
    topics: ['React', 'Tailwind CSS', 'REST API'],
    featured: false,
  },
  {
    name: 'SE_Y3S1_25_1.2_FOOD_DELIVERY_DS',
    description: 'Online food delivery web application with payment integration.',
    language: 'JavaScript',
    stars: 0,
    url: 'https://github.com/Vithusha14/SE_Y3S1_25_1.2_FOOD_DELIVERY_DS',
    topics: ['JavaScript', 'Food Delivery', 'Web App'],
    featured: false,
  },
];

export const languageStats = [
  { name: 'JavaScript', percent: 45, color: '#f7df1e' },
  { name: 'TypeScript', percent: 25, color: '#3178c6' },
  { name: 'Python', percent: 15, color: '#3776ab' },
  { name: 'Java', percent: 10, color: '#b07219' },
  { name: 'Other', percent: 5, color: '#8b5cf6' },
];

export const certificates = [
  {
    title: 'Web Design for Beginners',
    issuer: 'University of Moratuwa',
    date: 'Completed',
    link: 'https://open.uom.lk',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=200&h=200&fit=crop',
  },
  {
    title: 'Python for Beginners',
    issuer: 'University of Moratuwa',
    date: 'Completed',
    link: 'https://open.uom.lk',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=200&h=200&fit=crop',
  },
  {
    title: 'Java Programming',
    issuer: 'Great Learning Academy',
    date: 'Completed',
    link: 'https://www.mygreatlearning.com',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=200&h=200&fit=crop',
  },
  {
    title: 'UI/UX for Beginners',
    issuer: 'Great Learning Academy',
    date: 'Completed',
    link: 'https://www.mygreatlearning.com',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&h=200&fit=crop',
  },
  {
    title: 'React JS',
    issuer: 'Great Learning Academy',
    date: 'Completed',
    link: 'https://www.mygreatlearning.com',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=200&h=200&fit=crop',
  },
  {
    title: 'WordPress with Docker',
    issuer: 'Great Learning Academy',
    date: 'Completed',
    link: 'https://www.mygreatlearning.com',
    image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=200&h=200&fit=crop',
  },
  {
    title: 'Design Fundamentals',
    issuer: 'Great Learning Academy',
    date: 'Completed',
    link: 'https://www.mygreatlearning.com',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=200&h=200&fit=crop',
  },
  {
    title: 'Sinhala Language Course',
    issuer: 'National Reconciliation Foundation',
    date: 'Completed',
    link: '#',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=200&h=200&fit=crop',
  },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'ai-features', label: 'AI Features' },
  { id: 'contact', label: 'Contact' },
];
