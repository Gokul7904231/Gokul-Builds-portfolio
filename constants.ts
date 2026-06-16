import { Experience, Project, SkillCategory, LinkedInPost, Achievement, Certification, Education } from './types';

export const RESUME_URL = 'https://drive.google.com/file/d/1joujfVpHbztCevZu7p2g-lGCSIlpNigi/view?usp=sharing';
export const PROFILE_IMAGE_URL = 'https://lh3.googleusercontent.com/d/1RSTOiIZ6O7C0Bb5kKjDFIxXDmmOu8nOO';
export const ALNOOF_DRIVE_URL = 'https://drive.google.com/file/d/1fkp76NJGRuQk7eulKvMcyNC2T13-CJ3F/view?usp=sharing';

export const SKILLS: SkillCategory[] = [
  {
    category: 'Applied Intelligence',
    skills: ['PyTorch', 'Keras', 'OpenCV', 'NLP', 'CNN', 'LangChain', 'LangGraph', 'LlamaIndex', 'RAG']
  },
  {
    category: 'The Craft',
    skills: ['React.js', 'Redux Toolkit (RTK)', 'Next.js', 'Node.js', 'Express.js', 'REST APIs', 'Flutter', 'Tailwind CSS', 'HTML5', 'CSS3']
  },
  {
    category: 'Foundations',
    skills: ['Python', 'Java', 'C', 'SQL', 'Dart', 'PostgreSQL', 'MongoDB', 'Firebase', 'Docker', 'Git/GitHub', 'Postman', 'Flask', 'Streamlit']
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'HireHawk',
    problemStatement: 'Manual job application workflows are tedious, slow, and lack cohesive multi-agent orchestration and precision tailoring.',
    description: 'A production-grade multi-agent system that autonomously handles the entire job application workflow. Features a Chrome Extension (Manifest V3) that captures web job descriptions in real-time and streams live multi-agent execution paths directly to the user via AG-UI protocol.',
    imageGallery: ['https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=1200'],
    highlights: [
      'Orchestrated a LangGraph supervisor controlling a swarm of specialized tool-using agents via 5 custom MCP servers.',
      'Designed a multi-framework setup delegating to CrewAI resume tailors via Google\'s A2A cross-framework cooperation protocol.',
      'Integrated cross-session mem0 memory, self-healing runtime recovery, and semantic MCP routing with Qdrant to reduce token overhead by ~99%.'
    ],
    techStack: ['LangGraph', 'CrewAI', 'MCP', 'Chrome Ext', 'Qdrant', 'mem0', 'Langfuse', 'DeepEval'],
    metrics: '99% Token Reduction / A2A Protocol',
    githubUrl: 'https://github.com/Gokul7904231/HireHawk',
    demoUrl: 'https://hirehawk-demo.vercel.app/'
  },
  {
    title: 'Sentixcare',
    problemStatement: 'Static metadata fails to capture the actual emotional state of a user when interacting with content.',
    description: 'A multimodal emotion AI system combining a CNN-based facial emotion recognizer with an NLP recommendation engine. It utilizes custom ERMA & AEISA algorithms for real-time webcam inference.',
    imageGallery: [
      '/Sentixcareimg/0.png',
      '/Sentixcareimg/1.png',
      '/Sentixcareimg/2.png',
      '/Sentixcareimg/3.png',
      '/Sentixcareimg/4.png',
      '/Sentixcareimg/5.png',
      '/Sentixcareimg/6.png'
    ],
    highlights: [
      'Engineered a hybrid CNN + NLP system for mood-driven recommendations.',
      'Optimized real-time inference using OpenCV and PyTorch, deploying the backend via Flask and Streamlit.',
      'Published foundational research on the system\'s architecture at ICRIT \'26.'
    ],
    techStack: ['Python', 'PyTorch', 'OpenCV', 'Flask'],
    metrics: 'ICRIT \'26 Publication',
    githubUrl: 'https://github.com/Gokul7904231/MDPRS',
    demoUrl: 'https://huggingface.co/spaces/gokul-music/Sentixcare'
  },
  {
    title: 'Planetopia',
    problemStatement: 'Sustainability often feels like an isolated chore rather than a shared, engaging community mission.',
    description: 'A gamified eco-education platform engineered during a 36-hour sprint. It features real-time dashboards, reward systems, and robust integration testing across all features.',
    imageGallery: [
      '/planetopiaimg/0.png',
      '/planetopiaimg/1.png',
      '/planetopiaimg/2.png',
      '/planetopiaimg/3.png',
      '/planetopiaimg/4.png',
      '/planetopiaimg/5.png',
      '/planetopiaimg/6.png',
      '/planetopiaimg/7.png'
    ],
    highlights: [
      'Architected real-time leaderboards and interactive eco-dashboards utilizing the MERN stack.',
      'Built a custom REST API layer to handle high-velocity gamification events.',
      'Secured a national finalist position in the Smart India Hackathon (SIH) 2025.'
    ],
    techStack: ['React.js', 'Node.js', 'Express', 'MongoDB'],
    metrics: 'SIH 2025 Finalist',
    githubUrl: 'https://github.com/Gokul7904231',
    demoUrl: 'https://fluffy-raindrop-2fae3e.netlify.app/',
    videoUrl: 'https://youtu.be/YNPv22hxtF4'
  },
  {
    title: 'Carbon Ingest Platform',
    problemStatement: 'Enterprise ESG tracking requires strict data immutability and the ability to parse highly fragmented external datasets.',
    description: 'An enterprise-grade Django/React platform for ingesting, normalizing, and auditing complex Scope 1/2/3 emissions data. Designed with multi-tenancy and strict data immutability protocols.',
    imageGallery: [
      '/carbon ingestimg/0.png',
      '/carbon ingestimg/1.png',
      '/carbon ingestimg/2.png',
      '/carbon ingestimg/3.png'
    ],
    highlights: [
      'Engineered multi-format ingestion pipelines standardizing SAP, Utilities, and Travel data.',
      'Implemented strict data immutability layers using Django REST Framework and PostgreSQL.',
      'Developed a scalable multi-tenant architecture for isolated enterprise data auditing.'
    ],
    techStack: ['Django', 'React', 'PostgreSQL', 'Docker'],
    metrics: 'Enterprise Architecture',
    githubUrl: 'https://github.com/Gokul7904231/Carbon-ingest',
    demoUrl: 'https://carbon-ingest.onrender.com/'
  },
  {
    title: 'Meeting Intelligence System',
    problemStatement: 'Valuable insights from meetings are lost due to unstructured formats and manual transcription bottlenecks.',
    description: 'An AI-powered meeting analysis platform that turns raw conversations into structured intelligence, automatically generating summaries, action items, and decision logs.',
    imageGallery: [
      '/Hintroimg/0.png',
      '/Hintroimg/1.png',
      '/Hintroimg/2.png',
      '/Hintroimg/3.png',
      '/Hintroimg/4.png'
    ],
    highlights: [
      'Developed a full-stack JavaScript build for real-time conversation processing.',
      'Integrated NLP models to automatically extract and structure meeting intelligence.',
      'Built secure REST APIs for seamless frontend-backend communication.'
    ],
    techStack: ['JavaScript', 'Node.js', 'React', 'AI/NLP'],
    metrics: 'Real-time Processing',
    githubUrl: 'https://github.com/Gokul7904231/Meeting-Intelligence-System',
    demoUrl: 'https://hintro-intel.onrender.com/',
    videoUrl: 'https://www.loom.com/share/4cb5c80333bd4d059608451c42f687b7'
  },
  {
    title: 'Apex Shopify Engine',
    problemStatement: 'E-commerce storefronts require immediate, actionable data extraction without navigating clunky traditional dashboards.',
    description: 'An agentic AI analytics engine designed for seamless e-commerce data retrieval. It provides real-time sales tracking, inventory insights, and robust data aggregation.',
    imageGallery: [
      '/apeximg/1.png',
      '/apeximg/2.png',
      '/apeximg/3.png',
      '/apeximg/4.png'
    ],
    highlights: [
      'Engineered an agentic retrieval system handling real-time storefront metrics.',
      'Optimized database queries to serve heavy numerical aggregations with minimal latency.',
      'Maintained a highly available backend currently live in production environments.'
    ],
    techStack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Agentic AI'],
    metrics: 'Live Production System',
    githubUrl: 'https://github.com/Gokul7904231/Apex-Shopify-Engine',
    demoUrl: 'https://apex-shopify-engine-1.onrender.com/'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    company: 'Infosys Limited',
    role: 'AI/ML Intern',
    period: 'Aug 2025 — Oct 2025',
    highlights: [
      'Implemented a CNN and NLP hybrid system for real-time mood-based music playback using OpenCV and PyTorch.',
      'Optimized inference pipelines for high-speed webcam detection and deployed scalable backends via Flask and Streamlit.',
      'Led full-lifecycle AI development from data ingestion to deployment, collaborating in a professional Agile setting.'
    ]
  },
  {
    company: 'Zidio Development',
    role: 'Full Stack Developer Intern',
    period: 'Jul 2024 — Sep 2024',
    highlights: [
      'Built a MERN-stack job platform with Redux-based authentication, application tracking, and dynamic search filtering.',
      'Reduced frontend latency by 35% and optimized backend API logic to ensure response times under 500ms.',
      'Collaborated in an Agile/Scrum environment, delivering all project milestones two weeks ahead of schedule.'
    ]
  },
  {
    company: 'Al Noof Recruitment Services',
    role: 'Web Application Development Intern',
    period: 'May 2024 — Jul 2024',
    highlights: [
      'Developed responsive frontend modules using HTML, CSS, and JavaScript.',
      'Improved user experience by optimizing layouts and navigation workflows.',
      'Participated in debugging and testing to ensure stable deployment.',
      'Collaborated with internal teams on UI enhancements and feature updates.'
    ]
  }
];

export const ABOUT_TEXT = `I am an aspiring Software Engineer (2026 Batch) with hands-on expertise in AI/ML and MERN stack development from internships at Infosys and Zidio. I focus on building scalable RESTful architectures and deploying production-ready, real-time AI solutions.

As a B.Tech Computer Science student at Crescent College of Engineering, I bridge the gap between rigorous AI research and scalable web architecture. I believe that good engineering is about finding the balance between performance and human clarity. I spend my time training models for high-speed inference and optimizing web services, keeping the user experience clean and latency-free.

Lately, I have been focused on seamlessly integrating deep learning, LLM pipelines, and robust full-stack infrastructures, ensuring that AI feels like a natural extension of high-performance web systems.`;

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'SIH 2025 Finalist',
    description: 'National Level Finalist — Won Internal College Round for Planetopia (EcoSpark).',
    date: '2025',
    iconType: 'trophy',
    link: 'https://drive.google.com/file/d/1kTBj-E50B982Vtf-XOr1x3roCtOHsgub/view?usp=sharing',
    linkLabel: 'view doc'
  },
  {
    title: 'Published Researcher',
    description: 'Authored and delivered a peer-reviewed paper on AI-driven personalized recommendation systems at ICRIT \'26.',
    date: '2026',
    iconType: 'star',
    link: 'https://www.academia.edu/168639338/Mood_Driven_Personalized_Recommendation_System_using_ERS',
    linkLabel: 'View Paper'
  },
  {
    title: 'Cobotics Club Executive',
    description: 'Executive Lead of the Crescent Club of Cobotics, operating under the I-Hub Foundation for Cobotics (IHFC), the Technology Innovation Hub of IIT Delhi.',
    date: '2025',
    iconType: 'users'
  },
  {
    title: 'Tech Quiz Winner',
    description: 'Winner of the Talent Hunt Tech Quiz held at Crescent College.',
    date: '2025',
    iconType: 'award'
  },
  {
    title: 'Crescent club of cobotics',
    description: 'Solved 100+ Data Structures and Algorithms problems across LeetCode and GeeksforGeeks.',
    date: '2025',
    iconType: 'award'
  },
  {
    title: 'Alumni Network IT Lead',
    description: 'Senior Sub-Committee Member (IT) of Crescent Club of Finance; led development for the Alumni website.',
    date: '2024',
    iconType: 'users'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'Certified LLM Security Professional (CLLMSP)',
    issuer: 'Red Team leaders — Scored 95%',
    date: '2025',
    tag: 'Security'
  },
  {
    name: 'Deep Learning for Developers',
    issuer: 'Infosys Springboard',
    date: '2025',
    tag: 'AI/ML'
  },
  {
    name: 'Machine Learning Foundations',
    issuer: 'Infosys Springboard',
    date: '2025',
    tag: 'AI/ML'
  },
  {
    name: 'OpenAI Assistants API & GPT-3 Integration',
    issuer: 'Infosys Springboard',
    date: '2025',
    tag: 'Generative AI'
  },
  {
    name: 'Generative AI',
    issuer: 'Databricks',
    date: '2025',
    tag: 'Generative AI'
  },
  {
    name: 'AI : Neural Networks',
    issuer: 'LinkedIn Learning',
    date: '2025',
    tag: 'AI/ML'
  },
  {
    name: 'Reinforcement Learning',
    issuer: 'LinkedIn Learning',
    date: '2025',
    tag: 'AI/ML'
  },
  {
    name: 'Advanced Business Development',
    issuer: 'LinkedIn Learning',
    date: '2025',
    tag: 'Business'
  }
];

export const EDUCATION: Education[] = [
  {
    institution: 'Crescent College of Engineering, Tamil Nadu',
    degree: 'B.Tech in Computer Science',
    period: '2022 — 2026',
    grade: 'CGPA: 7.5/10',
    coursework: ['Data Structures and Algorithms', 'DBMS', 'Operating Systems', 'OOPS', 'Software Engineering (SDLC)', 'Computer Networks']
  },
  {
    institution: 'Vani Vidyalaya Matric Hr Sec School, Erode',
    degree: 'HSC & SSLC',
    period: '2020 — 2022',
    grade: 'HSC: 80.8% | SSLC: 88%'
  }
];

export const LINKEDIN_POSTS: LinkedInPost[] = [
  {
    title: 'The Dawn of Agentic Intelligence',
    summary: 'Exploring how multi-agent orchestration and autonomy are bridging the gap to Artificial General Intelligence (AGI) through structured tool-use and native memories.',
    tag: 'AGI & Agentic AI',
    url: 'https://linkedin.com'
  },
  {
    title: 'Architecting for Intent',
    summary: 'A deep dive into how we built Planetopia for SIH 2025 and why performance is a feature, not just a metric.',
    tag: 'Hackathon',
    url: 'https://linkedin.com'
  },
  {
    title: 'The Future of Micro-Inference',
    summary: 'Discussing the patterns used to keep AI-driven interfaces responsive without sacrificing model complexity.',
    tag: 'AI',
    url: 'https://linkedin.com'
  }
];

export const SYSTEM_DESIGN_TEXT = "I focus on creating systems where intelligence doesn't compromise performance—bridging the gap between heavy AI models and fluid user experiences.";