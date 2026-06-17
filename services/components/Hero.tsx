import React, { useState, useEffect } from 'react';
import { SectionId } from '../../types';
import { PROFILE_IMAGE_URL, RESUME_URL } from '../../constants';
import { FileDown, ChevronRight, ArrowUpRight } from 'lucide-react';
import Hero3DScene from './Hero3DScene';

const Hero: React.FC = () => {
  const [isColorized, setIsColorized] = useState(false);

  useEffect(() => {
    // Auto-transition from grayscale to color after 800ms
    const timer = setTimeout(() => {
      setIsColorized(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id={SectionId.Home} className="min-h-screen flex flex-col justify-center px-8 md:px-24 pt-20 bg-rich-black relative overflow-hidden">
      {/* Scope-contained keyframe animations for premium layout effects */}
      <style>{`
        @keyframes emerge-left {
          0% {
            transform: translateX(-100px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes line-emerge-oscillate {
          0% {
            transform: scaleX(0);
            transform-origin: left;
          }
          35% {
            transform: scaleX(1);
            transform-origin: left;
          }
          45% {
            transform: scaleX(1);
            transform-origin: left;
          }
          50% {
            transform: scaleX(0);
            transform-origin: left;
          }
          51% {
            transform: scaleX(0);
            transform-origin: right;
          }
          85% {
            transform: scaleX(1);
            transform-origin: right;
          }
          95% {
            transform: scaleX(1);
            transform-origin: right;
          }
          100% {
            transform: scaleX(0);
            transform-origin: right;
          }
        }

        .animate-emerge-left {
          animation: emerge-left 1.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-line-oscillate {
          animation: line-emerge-oscillate 12s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>

      {/* 3D Interactive Canvas Background */}
      <Hero3DScene />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-20">
        
        {/* Profile Image - The "Gallery" Framing */}
        {/* eslint-disable-next-line */}
        <div className="lg:col-span-5 order-2 lg:order-1 animate-fade-in flex justify-center lg:justify-start" style={{ animationDelay: '0.2s' }} suppressHydrationWarning>
          <div className="relative group">
            {/* Double Asymmetric Gold Borders - Made thicker and more defined for interactive precision */}
            <div className="absolute -inset-6 border-2 border-gold/20 asymmetric-border transform rotate-6 scale-110 pointer-events-none transition-transform duration-1000 group-hover:rotate-12"></div>
            <div className="absolute -inset-4 border-2 border-gold/35 asymmetric-border transform -rotate-3 pointer-events-none transition-transform duration-1000 group-hover:-rotate-6"></div>
            
            {/* The Image Container */}
            <div className={`w-72 h-72 md:w-96 md:h-96 lg:w-105 lg:h-105 rounded-full overflow-hidden transition-all duration-[1.5s] border border-white/10 bg-surface shadow-[0_0_100px_rgba(0,0,0,0.9)] relative z-10 ${isColorized ? 'grayscale-0' : 'grayscale'}`}>
              {/* eslint-disable-next-line */}
              <img src={PROFILE_IMAGE_URL} alt="Gokul A" className="w-full h-full object-cover object-[center_15%] scale-100 group-hover:scale-110 transition-transform duration-[3s] ease-out" style={{ filter: 'contrast(1.1) brightness(0.9) saturate(1.1)' }} suppressHydrationWarning />
              <div className="absolute inset-0 bg-linear-to-t from-rich-black/40 to-transparent opacity-60"></div>
            </div>
            
            {/* Minimalist Data Tag */}
            <div className="absolute top-1/2 -right-12 transform -rotate-90 origin-center hidden lg:block">
              <span className="text-[8px] font-bold text-gold/30 tracking-[0.8em] uppercase whitespace-nowrap">ID-ENGINEER_REF_2025</span>
            </div>
          </div>
        </div>

        {/* Text Content - Luxury Serif Rhythm */}
        <div className="lg:col-span-7 order-1 lg:order-2 animate-fade-in">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-gold/50 animate-emerge-left inline-block"></div>
            <p className="text-gold uppercase tracking-[0.7em] text-[9px] font-bold">System Architect</p>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-serif font-black mb-10 leading-[0.82] tracking-tighter overflow-hidden">
            {/* eslint-disable-next-line */}
            <span className="inline-block animate-emerge-left" style={{ animationDelay: '0.1s' }} suppressHydrationWarning>
              Gokul A<span className="text-gold">.</span>
            </span>
          </h1>
          
          <div className="relative inline-block max-w-2xl mb-16">
            <p className="text-xl md:text-3xl text-text-muted font-light leading-relaxed pb-6">
              I craft thoughtful systems where <span className="text-text-primary italic serif-italic">architecture</span> meets human <span className="text-text-primary">intelligence</span>.
            </p>
            {/* Elegant Sub-headline Active Line Underneath with slow left-to-right & right-to-left loop */}
            <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gold/15 rounded-full overflow-hidden">
              {/* eslint-disable-next-line */}
              <div className="w-full h-full bg-gold rounded-full animate-line-oscillate" style={{ transform: 'scaleX(0)' }} suppressHydrationWarning />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-12">
            <a 
              href={RESUME_URL} 
              target="_blank" 
              className="group relative inline-flex items-center gap-3 py-4 px-12 border border-gold/40 text-gold text-[10px] font-bold uppercase tracking-[0.3em] hover:text-rich-black transition-all duration-700 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 -z-10"></div>
              <FileDown className="w-4 h-4" />
              <span>Obtain CV</span>
              <div className="relative overflow-hidden w-4 h-4 flex items-center justify-center">
                <ArrowUpRight className="absolute transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] group-hover:translate-x-full group-hover:-translate-y-full w-4 h-4 text-gold group-hover:text-rich-black" />
                <ArrowUpRight className="absolute -translate-x-full translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] group-hover:translate-x-0 group-hover:translate-y-0 w-4 h-4 text-gold group-hover:text-rich-black" />
              </div>
            </a>
            
            <div className="flex items-center gap-12">
              <a href="https://github.com/Gokul7904231" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-[0.4em] text-text-muted hover:text-gold transition-colors gold-underline">Code</a>
              <a href="https://linkedin.com/in/gokul1234" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-[0.4em] text-text-muted hover:text-gold transition-colors gold-underline">Connect</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-24 hidden lg:flex items-center gap-6 animate-pulse z-20">
        <span className="text-[8px] font-bold text-gold/40 uppercase tracking-[0.5em] rotate-90 origin-left">Scroll</span>
        <div className="w-px h-12 bg-gold/20"></div>
      </div>
    </section>
  );
};

export default Hero;