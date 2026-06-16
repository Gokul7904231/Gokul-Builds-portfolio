export interface Project {
  title: string;
  description: string;
  problemStatement: string;
  highlights: string[];
  techStack: string[];
  imageGallery: string[];
  githubUrl?: string;
  demoUrl?: string;
  videoUrl?: string;
  metrics?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  tag: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface LinkedInPost {
  title: string;
  summary: string;
  tag: 'AI' | 'Full Stack' | 'Career' | 'Hackathon' | 'Learning';
  url: string;
}

export interface Achievement {
  title: string;
  description: string;
  date: string;
  iconType: 'award' | 'trophy' | 'users' | 'star';
  link?: string;
  linkLabel?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  grade: string;
  coursework?: string[];
}

export enum SectionId {
  Home = 'home',
  About = 'about',
  Skills = 'skills',
  Projects = 'projects',
  Experience = 'experience',
  Certifications = 'certifications',
  LinkedIn = 'linkedin-posts',
  Achievements = 'achievements',
  SystemDesign = 'system-design',
  Contact = 'contact'
}