import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { SectionId } from '../../types';
import { Terminal, Code, Cpu, Award, Database, Layers } from 'lucide-react';

interface SkillItem {
  name: string;
  level: number; // percentage
}

interface Domain {
  id: string;
  name: string;
  monoLabel: string;
  icon: React.ReactNode;
  description: string;
  skills: SkillItem[];
}

const DOMAINS: Domain[] = [
  {
    id: 'core-languages',
    name: 'Core Languages',
    monoLabel: 'SYS-DM.01',
    icon: <Terminal className="w-4 h-4" />,
    description: 'General-purpose programming runtimes, functional scripting, statically typed abstractions, and query structures.',
    skills: [
      { name: 'Python', level: 93 },
      { name: 'Java', level: 85 },
      { name: 'JavaScript', level: 91 },
      { name: 'C Programming', level: 84 },
      { name: 'SQL', level: 89 },
      { name: 'Dart', level: 83 }
    ]
  },
  {
    id: 'applied-intelligence',
    name: 'Applied Intelligence',
    monoLabel: 'SYS-DM.02',
    icon: <Cpu className="w-4 h-4" />,
    description: 'Neural networks, multi-agent frameworks, language model pipelines, and hybrid semantic indexing.',
    skills: [
      { name: 'PyTorch', level: 94 },
      { name: 'Keras', level: 85 },
      { name: 'OpenCV', level: 88 },
      { name: 'NLP (Natural Language Processing)', level: 90 },
      { name: 'CNN (Computer Vision)', level: 92 },
      { name: 'LangChain', level: 91 },
      { name: 'LangGraph', level: 93 },
      { name: 'LlamaIndex', level: 89 },
      { name: 'RAG Systems', level: 90 }
    ]
  },
  {
    id: 'frontend-mobile',
    name: 'Frontend & Mobile',
    monoLabel: 'SYS-DM.03',
    icon: <Code className="w-4 h-4" />,
    description: 'High-fidelity reactive UI structures, global state managers, declarative viewport stylesheets, and cross-platform native SDKs.',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'Redux Toolkit (RTK)', level: 89 },
      { name: 'Next.js', level: 92 },
      { name: 'Tailwind CSS', level: 94 },
      { name: 'Flutter', level: 82 },
      { name: 'HTML5 & CSS3', level: 93 }
    ]
  },
  {
    id: 'backend-architecture',
    name: 'Backend & Architecture',
    monoLabel: 'SYS-DM.04',
    icon: <Layers className="w-4 h-4" />,
    description: 'Asynchronous server frameworks, structural API routing protocols, request parsing pipelines, and microservices.',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 90 },
      { name: 'REST APIs', level: 91 },
      { name: 'Flask', level: 86 },
      { name: 'Django', level: 85 }
    ]
  },
  {
    id: 'datastores-tooling',
    name: 'Data Stores & Tooling',
    monoLabel: 'SYS-DM.05',
    icon: <Database className="w-4 h-4" />,
    description: 'Relational clustering systems, document directories, container virtualization, testing sandboxes, and web deployment wrappers.',
    skills: [
      { name: 'PostgreSQL', level: 89 },
      { name: 'MongoDB', level: 88 },
      { name: 'Firebase', level: 88 },
      { name: 'Docker', level: 85 },
      { name: 'Git & GitHub', level: 91 },
      { name: 'Postman', level: 87 },
      { name: 'Streamlit', level: 86 }
    ]
  }
];

export const SkillsDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(DOMAINS[0].id);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((currentTab) => {
        const currentIndex = DOMAINS.findIndex((d) => d.id === currentTab);
        const nextIndex = (currentIndex + 1) % DOMAINS.length;
        return DOMAINS[nextIndex].id;
      });
    }, 4000); // 4-second interval match

    return () => clearInterval(interval);
  }, [activeTab]);

  const selectedDomain = DOMAINS.find((d) => d.id === activeTab) || DOMAINS[0];

  return (
    <section id={SectionId.Skills} className="py-48 px-8 md:px-24 bg-rich-black border-t border-white/5 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-gold/5 blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-24">
          <span className="text-[10px] font-bold text-gold uppercase tracking-[0.4em] mb-10 block">
            Capabilities Engine
          </span>
          <h2 className="text-5xl md:text-8xl font-serif font-black tracking-tight leading-[0.9]">
            Intellectual <span className="serif-italic italic text-gold">Arsenal</span>.
          </h2>
        </div>

        {/* Dashboard Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Navigation Tabs Panel */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <span className="text-[9px] font-mono tracking-widest text-text-muted/40 uppercase block mb-2 px-2">
              Select Architectural Domain
            </span>
            {DOMAINS.map((domain) => {
              const isActive = domain.id === activeTab;
              return (
                <button
                  key={domain.id}
                  onClick={() => setActiveTab(domain.id)}
                  className={`group flex items-center justify-between px-6 py-5 rounded-xl border transition-all duration-300 font-mono text-xs text-left tracking-wider ${
                    isActive
                      ? 'bg-surface/60 border-gold text-gold shadow-[0_0_20px_rgba(212,175,55,0.08)]'
                      : 'bg-surface/40 border-white/5 text-text-muted hover:border-white/20 hover:text-text-primary'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`transition-colors duration-300 ${isActive ? 'text-gold' : 'text-text-muted/60 group-hover:text-text-primary'}`}>
                      {domain.icon}
                    </span>
                    <span className="font-semibold uppercase tracking-widest">{domain.name}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-[8px] opacity-40 group-hover:opacity-80 transition-opacity font-mono">
                      {domain.monoLabel}
                    </span>
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-gold shrink-0 border border-gold/30 shadow-[0_0_8px_#D4AF37]" />
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-white/10 shrink-0 group-hover:bg-text-muted/30 transition-colors" />
                    )}
                  </div>
                </button>
              );
            })}
            
            {/* Domain Description Summary block */}
            <div className="mt-6 p-6 border border-white/5 bg-surface/20 rounded-xl space-y-3">
              <span className="text-[9px] font-mono tracking-widest text-gold/60 uppercase block">
                Domain Intel
              </span>
              <p className="text-xs text-text-muted leading-relaxed font-light">
                {selectedDomain.description}
              </p>
            </div>
          </div>

          {/* Right Panel: Skill Cards & Progress Bars */}
          <div className="lg:col-span-8">
            <div className="bg-surface/20 border border-white/5 rounded-2xl p-8 md:p-12">
              <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
                <div>
                  <h4 className="text-lg font-serif font-bold text-text-primary">
                    {selectedDomain.name} metrics
                  </h4>
                  <p className="text-xs text-text-muted font-light">
                    Autonomous and production-level proficiencies evaluated across projects.
                  </p>
                </div>
                <Award className="w-5 h-5 text-gold/60" />
              </div>

              {/* Skills Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {selectedDomain.skills.map((skill) => (
                  <div
                    key={`${selectedDomain.id}-${skill.name}`}
                    className="bg-surface/30 border border-white/5 rounded-xl p-5 hover:border-gold/20 hover:bg-surface/50 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
                  >
                    {/* Top row spacing */}
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        {/* Proficiency Label */}
                        <span className="text-[8px] font-mono tracking-[0.2em] text-text-muted/50 mb-1 uppercase block">
                          PROFICIENCY
                        </span>
                        <h5 className="text-sm font-light text-text-primary tracking-wide">
                          {skill.name}
                        </h5>
                      </div>
                      
                      {/* Percentage readout changed from cyan to solid gold */}
                      <span className="text-gold font-mono text-sm font-semibold tracking-wider">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Track Background changed to bg-rich-black/80 */}
                    <div className="h-1.5 w-full bg-rich-black/80 rounded-full overflow-hidden">
                      {/* Kinetic Progress bar */}
                      <motion.div
                        className="h-full bg-gradient-to-r from-soft-gold to-gold rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1.2,
                          ease: [0.16, 1, 0.3, 1], // premium easeOutExpo bezier curve
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsDashboard;
