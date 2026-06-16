import React, { useState, useEffect } from 'react';
import Navigation from './services/components/Navigation';
import Hero from './services/components/Hero';
import ProjectCard from './services/components/ProjectCard';
import Contact from './services/components/Contact';
import Certifications from './services/components/Certifications';
import LinkedInHighlights from './services/components/LinkedInHighlights';
import Achievements from './services/components/Achievements';
import SystemDesign from './services/components/SystemDesign';
import ResumeView from './services/components/ResumeView';
import CustomCursor from './services/components/CustomCursor';
import SkillsDashboard from './services/components/SkillsDashboard';
import ExperienceTimeline from './services/components/ExperienceTimeline';
import { ABOUT_TEXT, PROJECTS } from './constants';
import { SectionId } from './types';
import { Play, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

function App() {
  const [viewResume, setViewResume] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkRoute = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const isResume = searchParams.get('view') === 'resume' || window.location.hash === '#resume';
      setViewResume(isResume);
    };

    checkRoute();
    window.addEventListener('hashchange', checkRoute);

    // Initial page loader state for 2 seconds to match animation cycle smoothly
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      window.removeEventListener('hashchange', checkRoute);
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-rich-black z-[9999] flex flex-col items-center justify-center gap-24">
        <div className="loader"></div>
        <p className="text-[10px] font-bold text-gold/60 uppercase tracking-[0.5em] animate-pulse">
          ENGINEERING INTELLIGENCE
        </p>
      </div>
    );
  }

  if (viewResume) {
    return <ResumeView />;
  }

  return (
    <div className="min-h-screen bg-rich-black text-text-primary selection:bg-gold selection:text-rich-black">
      <CustomCursor />
      <Navigation />
      
      <AnimatePresence>
        <main className="flex flex-col">
          {/* Section 1: Hero (Purest Black) */}
          <Hero />
          
          {/* Section 2: About (Deep Grey Elevation) */}
          <motion.section 
            id={SectionId.About} 
            className="py-64 px-8 md:px-24 bg-deep-charcoal border-y border-white/5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 50 }}
          >
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-12 gap-32 items-start">
                <div className="lg:col-span-8 animate-fade-in">
                  <h2 className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-12">Background</h2>
                  <h3 className="text-5xl md:text-8xl font-serif font-black mb-20 tracking-tight leading-[0.9]">
                    Engineered with <span className="serif-italic italic text-gold">clarity</span>.
                  </h3>
                  <div className="text-xl md:text-2xl text-text-muted font-light space-y-16 max-w-3xl leading-[1.8] text-justify">
                    {ABOUT_TEXT.split('\n\n').map((para, i) => (
                      <p key={i} className="text-justify">{para}</p>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-4 mt-24">
                  <div className="border-t border-gold/20 pt-16 relative">
                     <div className="absolute top-0 right-0 w-12 h-[1px] bg-gold/40"></div>
                     <h4 className="text-[10px] font-bold text-gold uppercase tracking-[0.4em] mb-16">Core Principles</h4>
                     <ul className="space-y-16">
                       {[
                         { title: 'PROSE-LEVEL CLARITY', desc: 'Code architecture that speaks before it executes.' },
                         { title: 'SCALABLE DURABILITY', desc: 'Systems designed for the pressures of tomorrow.' },
                         { title: 'LATENT INTELLIGENCE', desc: 'AI that feels like a natural extension of the UI.' }
                       ].map((v, i) => (
                         <li key={i} className="group">
                           <p className="text-[10px] font-black tracking-[0.2em] text-text-primary mb-4 group-hover:text-gold transition-colors">{v.title}</p>
                           <p className="text-sm font-light text-text-muted leading-relaxed">{v.desc}</p>
                         </li>
                       ))}
                     </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Interactive Skills Dashboard Section */}
          <SkillsDashboard />

          {/* Chronological Vertical Experience Timeline Section */}
          <ExperienceTimeline />

          {/* Section 4: Projects (Pure Black) */}
          <motion.section 
            id={SectionId.Projects} 
            className="py-64 px-8 md:px-24 bg-rich-black border-t border-white/5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 50 }}
          >
            <div className="max-w-7xl mx-auto">
              <div className="mb-40">
                <h2 className="text-[10px] font-bold text-gold uppercase tracking-[0.6em] mb-10">Selected Artifacts</h2>
                <h3 className="text-7xl md:text-[10rem] font-serif font-black tracking-tighter leading-none opacity-90">Case <span className="italic serif-italic text-gold">Studies</span></h3>
              </div>
              <div className="space-y-12">
                {PROJECTS.map((project, index) => (
                  <ProjectCard key={index} project={project} index={index} />
                ))}
              </div>
            </div>
          </motion.section>

        {/* Section 5: System Design (Deep Grey Elevated) */}
        <div className="bg-[#0D0D0D] border-y border-white/5">
          <SystemDesign />
        </div>

        {/* Section 6: Credentials (Surface) */}
        <div className="bg-surface">
          <Certifications />
        </div>

        {/* Section 7: Achievements (Pure Black Elevation) */}
        <div className="bg-rich-black">
          <Achievements />
        </div>

        {/* Section 8: Public Writing (Deep Charcoal) */}
        <div className="bg-deep-charcoal border-t border-white/5">
          <LinkedInHighlights />
        </div>
        
        {/* Section 9: Contact (Pure Black) */}
        <Contact />

        <footer className="py-40 border-t border-white/5 text-center bg-rich-black relative">
          <div className="font-serif italic text-4xl mb-12 opacity-80">G<span className="text-gold">.</span>A</div>
          <p className="text-[9px] font-bold text-text-muted/30 uppercase tracking-[1em]">
            &copy; {new Date().getFullYear()} — Engineering for the human experience
          </p>
          <div className="absolute bottom-8 right-8 text-[8px] font-mono text-white/5 tracking-widest">
            LAT: 11.0168 / LONG: 76.9558
          </div>
        </footer>
      </main>
      </AnimatePresence>
    </div>
  );
}

export default App;