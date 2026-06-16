import React from 'react';
import { EXPERIENCE, ALNOOF_DRIVE_URL } from '../../constants';
import { SectionId } from '../../types';
import { ArrowUpRight, Play, Award, Milestone, Archive } from 'lucide-react';
import { motion } from 'motion/react';

export const ExperienceTimeline: React.FC = () => {
  // Sort the experiences in reverse chronological order (latest first)
  // Aug 2025 -> Oct 2025 (Infosys)
  // Jul 2024 -> Sep 2024 (Zidio)
  // May 2024 -> Jul 2024 (Al Noof)
  const sortedExperiences = [...EXPERIENCE];

  // Mapping some metadata for realistic details in the timeline
  const metadataMap: Record<string, { type: string; sector: string; completeText: string; score: number }> = {
    'Al Noof Recruitment Services': {
      type: 'Web Dev Intern',
      sector: 'Doha, Qatar (Remote)',
      completeText: 'DEPLOYMENT_STABLE',
      score: 92
    },
    'Zidio Development': {
      type: 'Full Stack Intern',
      sector: 'Remote, India',
      completeText: 'SYS_INTEGRATION_COMPLETE',
      score: 96
    },
    'Infosys Limited': {
      type: 'AI/ML Intern',
      sector: 'Bengaluru, India',
      completeText: 'NEURAL_PIPELINES_LIVE',
      score: 100
    }
  };

  const certMap: Record<string, string> = {
    'Al Noof Recruitment Services': 'https://drive.google.com/file/d/1Q6ZdDZ9FNklHOHPBpV98GPM0c5LOKkw2/view?usp=sharing',
    'Zidio Development': 'https://drive.google.com/file/d/1Mf5eQiTgM-eWCeSKa9a3u7e0mK3mwrIp/view?usp=sharing',
    'Infosys Limited': 'https://drive.google.com/file/d/1ULUx_LNl2NQN1b47XoH-vbK4zukGiEfs/view?usp=sharing'
  };

  return (
    <section 
      id={SectionId.Experience} 
      className="py-56 bg-rich-black border-t border-white/5 relative overflow-hidden px-8 md:px-24"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-gold/5 blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-32 text-center md:text-left">
          <span className="text-[10px] font-bold text-gold uppercase tracking-[0.4em] mb-10 block">
            Career Chronicle
          </span>
          <h2 className="text-5xl md:text-8xl font-serif font-black tracking-tight leading-[0.9]">
            Intellectual <span className="serif-italic italic text-gold">Evolution</span>.
          </h2>
          <p className="text-xs text-text-muted font-light mt-6 max-w-xl leading-relaxed">
            A chronological sequence of architectural engineering, core system integrations, and neural modeling.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Central Vertical Timeline Line */}
          {/* Hidden on mobile, down the center on desktop */}
          <div className="absolute left-1/2 top-8 bottom-8 w-[1px] bg-gradient-to-b from-gold/5 via-gold/30 to-gold/5 -translate-x-1/2 hidden md:block" />

          {/* Left Vertical Line for Mobile */}
          <div className="absolute left-4 top-8 bottom-8 w-[1px] bg-gradient-to-b from-gold/5 via-gold/30 to-gold/5 md:hidden" />

          {/* Experiences Grid */}
          <div className="space-y-40 relative">
            {sortedExperiences.map((exp, i) => {
              const isEven = i % 2 === 0;
              const meta = metadataMap[exp.company] || {
                type: 'Internship',
                sector: 'India',
                completeText: 'PROCESS_COMPLETE',
                score: 100
              };

              return (
                <div 
                  key={exp.company}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center relative"
                >
                  
                  {/* CENTRAL INDICATOR NODE (Desktop) */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-12 z-20 hidden md:flex items-center justify-center">
                    {/* Ring */}
                    <div className="w-5 h-5 rounded-full bg-rich-black border-2 border-gold flex items-center justify-center shadow-[0_0_12px_rgba(212,175,55,0.3)]">
                      {/* Active inner core */}
                      <div className="w-2.5 h-2.5 rounded-full bg-gold" />
                    </div>
                    {/* Horizontal Connector Stem joining timeline node to card */}
                    <div 
                      className={`absolute top-2.5 w-12 h-[1px] bg-gold/25 ${
                        isEven ? 'right-5' : 'left-5'
                      }`} 
                    />
                    {/* Opposite stem for Log Entry Pill */}
                    <div 
                      className={`absolute top-2.5 w-12 h-[1px] bg-gold/15 ${
                        isEven ? 'left-5' : 'right-5'
                      }`} 
                    />
                  </div>

                  {/* MOBILE INDICATOR NODE */}
                  <div className="absolute left-4 -translate-x-1/2 top-12 z-20 md:hidden flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-rich-black border border-gold flex items-center justify-center shadow-[0_0_8px_rgba(212,175,55,0.3)]">
                      <div className="w-2 h-2 rounded-full bg-gold" />
                    </div>
                  </div>

                  {/* CARD ELEMENT (Alternates Left/Right layout) */}
                  <div className={`pl-12 md:pl-0 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                    <motion.div
                      className="relative border border-white/5 bg-surface/30 backdrop-blur-sm rounded-2xl p-8 md:p-10 hover:border-gold/30 hover:bg-surface/50 transition-all duration-300 group"
                      whileHover={{ y: -6 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      {/* Cyberpunk Elegant Corner Brackets */}
                      {/* Top-Right Corner Bracket */}
                      <span className="absolute top-4 right-4 w-3.5 h-3.5 border-t border-r border-gold/30 group-hover:border-gold transition-colors duration-300" />
                      {/* Bottom-Left Corner Bracket */}
                      <span className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b border-l border-gold/30 group-hover:border-gold transition-colors duration-300" />

                      {/* Header Row */}
                      <div className="mb-6">
                        <span className="text-[9px] font-mono tracking-[0.2em] text-gold uppercase block mb-1">
                          {meta.type}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-serif font-black tracking-tight text-text-primary group-hover:italic transition-all duration-300">
                          {exp.company}
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-2">
                          <p className="text-xs md:text-sm text-text-muted font-light tracking-wide">
                            {exp.role}
                          </p>
                          {certMap[exp.company] && (
                            <>
                              <span className="text-gold/30 text-xs hidden sm:inline select-none">•</span>
                              <a 
                                href={certMap[exp.company]}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-gold hover:text-white transition-colors duration-200 group/link"
                              >
                                <span>VIEW CERTIFICATE</span>
                                <ArrowUpRight className="w-3 h-3 text-gold group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform shrink-0" />
                              </a>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Details Monospace Block */}
                      <div className="grid grid-cols-2 gap-4 py-4 my-6 border-y border-white/5 font-mono text-[9px] text-text-muted/60 uppercase tracking-widest bg-rich-black/30 px-4 rounded-lg">
                        <div>
                          <span className="block text-[8px] text-gold/60 mb-1 font-bold">TIMELINE</span>
                          <span className="text-[10px] text-text-primary font-semibold">{exp.period.replace(' — ', ' - ')}</span>
                        </div>
                        <div>
                          <span className="block text-[8px] text-gold/60 mb-1 font-bold">SECTOR / STATUS</span>
                          <span className="text-[10px] text-text-primary font-semibold">{meta.sector}</span>
                        </div>
                      </div>

                      {/* Bullet Highlights Styled as Functional Logs */}
                      <div className="space-y-4 mb-8">
                        {exp.highlights.map((highlight, index) => (
                          <div key={index} className="flex gap-4 items-start">
                            {/* Simple index counter index prefix */}
                            <span className="text-[8px] font-mono text-gold bg-gold/10 px-1.5 py-0.5 rounded shrink-0 select-none mt-1">
                              LOG_{String(index + 1).padStart(2, '0')}
                            </span>
                            <p className="text-xs text-text-muted leading-relaxed font-light text-justify">
                              {highlight}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Research Proof link for Al Noof */}
                      {exp.company === 'Al Noof Recruitment Services' && (
                        <div className="mb-8 p-4 border border-gold/10 bg-rich-black/40 rounded-xl flex items-center justify-between group-hover:border-gold/30 transition-all duration-300">
                          <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                            <span className="text-[10px] font-mono text-text-muted tracking-wider uppercase">Verification Documentation</span>
                          </div>
                          <a 
                            href={ALNOOF_DRIVE_URL} 
                            target="_blank" 
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-[9px] font-bold tracking-widest text-gold hover:text-white uppercase transition-colors"
                          >
                            <span>Open Proof</span>
                            <ArrowUpRight className="w-3 h-3 text-gold" />
                          </a>
                        </div>
                      )}

                      {/* Dynamic Installation/Integration Meter matching the user image */}
                      <div className="pt-2">
                        <div className="flex justify-between items-center text-[9px] font-mono tracking-widest uppercase mb-2">
                          <span className="text-text-muted/60 text-[8px]">{meta.completeText}</span>
                          <span className="text-gold font-bold">{meta.score} / 100</span>
                        </div>
                        <div className="h-1 w-full bg-rich-black/80 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-gradient-to-r from-soft-gold to-gold rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${meta.score}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                          />
                        </div>
                      </div>

                    </motion.div>
                  </div>

                  {/* PILL ON OPPOSITE COLUMN (Desktop) */}
                  <div className={`hidden md:flex ${
                    isEven ? 'md:order-2 md:justify-start pl-12' : 'md:order-1 md:justify-end pr-12'
                  }`}>
                    <div className="border border-white/5 bg-surface/30 backdrop-blur-sm rounded-full py-2 px-5 font-mono text-[9px] tracking-[0.2em] text-text-muted flex items-center gap-3 select-none hover:border-gold/30 hover:text-gold transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
                      <Milestone className="w-3 h-3 text-gold/60" />
                      <span>LOG_ENTRY:</span>
                      <span className="text-text-primary text-[10px] font-bold tracking-wider">
                        {exp.period.toUpperCase()}
                      </span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ExperienceTimeline;
