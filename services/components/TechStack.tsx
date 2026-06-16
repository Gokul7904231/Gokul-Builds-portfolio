import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Terminal, Layout, Database, Blocks, Settings } from 'lucide-react';

interface TechItem {
  name: string;
  category: 'lang' | 'frontend' | 'backend' | 'db' | 'aiml' | 'tool';
}

const AI_ML_STACK: TechItem[] = [
  { name: 'PyTorch', category: 'aiml' },
  { name: 'TensorFlow', category: 'aiml' },
  { name: 'Keras', category: 'aiml' },
  { name: 'OpenCV', category: 'aiml' },
  { name: 'Convolutional Nets (CNN)', category: 'aiml' },
  { name: 'LangChain', category: 'aiml' },
  { name: 'LangGraph', category: 'aiml' },
  { name: 'LlamaIndex', category: 'aiml' },
  { name: 'FAISS', category: 'aiml' },
  { name: 'HuggingFace', category: 'aiml' },
  { name: 'Python', category: 'lang' }
];

const FULL_STACK: TechItem[] = [
  { name: 'React.js', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Express.js', category: 'backend' },
  { name: 'Django', category: 'backend' },
  { name: 'TypeScript', category: 'lang' },
  { name: 'JavaScript', category: 'lang' },
  { name: 'PostgreSQL', category: 'db' },
  { name: 'MongoDB', category: 'db' }
];

const DEVOPS_TOOLS: TechItem[] = [
  { name: 'AWS', category: 'tool' },
  { name: 'Docker', category: 'tool' },
  { name: 'Git & GitHub', category: 'tool' },
  { name: 'Postman', category: 'tool' },
  { name: 'Vercel', category: 'tool' },
  { name: 'Render', category: 'tool' },
  { name: 'Dart', category: 'lang' }
];

export const TechStack: React.FC = () => {
  const getCategoryIcon = (category: TechItem['category']) => {
    switch (category) {
      case 'lang':
        return <Terminal className="w-3.5 h-3.5 text-gold/60" />;
      case 'frontend':
        return <Layout className="w-3.5 h-3.5 text-gold/60" />;
      case 'backend':
        return <Cpu className="w-3.5 h-3.5 text-gold/60" />;
      case 'db':
        return <Database className="w-3.5 h-3.5 text-gold/60" />;
      case 'aiml':
        return <Blocks className="w-3.5 h-3.5 text-gold/60" />;
      case 'tool':
        return <Settings className="w-3.5 h-3.5 text-gold/60" />;
      default:
        return <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />;
    }
  };

  // Duplicate arrays to satisfy secure infinite loop overflow logic
  const aiMlDoubled = [...AI_ML_STACK, ...AI_ML_STACK, ...AI_ML_STACK, ...AI_ML_STACK];
  const fullStackDoubled = [...FULL_STACK, ...FULL_STACK, ...FULL_STACK, ...FULL_STACK];
  const devOpsDoubled = [...DEVOPS_TOOLS, ...DEVOPS_TOOLS, ...DEVOPS_TOOLS, ...DEVOPS_TOOLS];

  return (
    <section className="py-24 bg-deep-charcoal border-y border-white/5 relative overflow-hidden">
      {/* Visual background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-gold/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 md:px-24 mb-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="text-[10px] font-mono tracking-[0.5em] text-gold uppercase font-bold block mb-6">
              Computational Arsenal
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-black tracking-tight text-text-primary">
              Core <span className="serif-italic italic text-gold">Tech Stack</span>
            </h2>
          </div>
          <p className="text-xs md:text-sm text-text-muted font-light max-w-sm leading-relaxed">
            Continuous horizontal integration of frameworks, languages, and deep architectural models powering intelligent applications.
          </p>
        </div>
      </div>

      <div className="relative flex flex-col gap-8 z-10 w-full overflow-hidden">
        {/* Premium Edge-Fading Mask Overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-deep-charcoal via-deep-charcoal/90 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-deep-charcoal via-deep-charcoal/90 to-transparent z-20" />

        {/* Track 1: AI / ML Domain -> Right Slidng */}
        <div className="space-y-3">
          <div className="max-w-7xl mx-auto px-8 md:px-24 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-[9px] font-mono tracking-[0.4em] text-gold uppercase font-semibold">
              AI & Deep Learning Domain
            </span>
          </div>
          <div className="relative flex w-full overflow-x-hidden group">
            <div className="animate-marquee-reverse flex gap-4 pr-4">
              {aiMlDoubled.map((item, idx) => (
                <div
                  key={`ai-ml-${idx}`}
                  className="whitespace-nowrap flex items-center gap-4 px-6 py-3 rounded-xl border border-white/[0.05] bg-surface/30 backdrop-blur-md transition-all duration-300 hover:border-gold/30 hover:bg-surface/60"
                >
                  {getCategoryIcon(item.category)}
                  <span className="text-sm font-light text-text-primary tracking-wide">
                    {item.name}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gold/25" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Track 2: Full Stack Domain -> Left Sliding */}
        <div className="space-y-3">
          <div className="max-w-7xl mx-auto px-8 md:px-24 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold/40" />
            <span className="text-[9px] font-mono tracking-[0.4em] text-gold/80 uppercase font-semibold">
              Full Stack Architecture
            </span>
          </div>
          <div className="relative flex w-full overflow-x-hidden group">
            <div className="animate-marquee flex gap-4 pr-4">
              {fullStackDoubled.map((item, idx) => (
                <div
                  key={`fs-${idx}`}
                  className="whitespace-nowrap flex items-center gap-4 px-6 py-3 rounded-xl border border-white/[0.05] bg-surface/30 backdrop-blur-md transition-all duration-300 hover:border-gold/30 hover:bg-surface/60"
                >
                  {getCategoryIcon(item.category)}
                  <span className="text-sm font-light text-text-primary tracking-wide">
                    {item.name}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gold/25" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Track 3: DevOps & Foundations Domain -> Right Sliding */}
        <div className="space-y-3">
          <div className="max-w-7xl mx-auto px-8 md:px-24 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold/40" />
            <span className="text-[9px] font-mono tracking-[0.4em] text-gold/80 uppercase font-semibold">
              DevOps & Foundations
            </span>
          </div>
          <div className="relative flex w-full overflow-x-hidden group">
            <div className="animate-marquee-reverse flex gap-4 pr-4">
              {devOpsDoubled.map((item, idx) => (
                <div
                  key={`devops-${idx}`}
                  className="whitespace-nowrap flex items-center gap-4 px-6 py-3 rounded-xl border border-white/[0.05] bg-surface/30 backdrop-blur-md transition-all duration-300 hover:border-gold/30 hover:bg-surface/60"
                >
                  {getCategoryIcon(item.category)}
                  <span className="text-sm font-light text-text-primary tracking-wide">
                    {item.name}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gold/25" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
