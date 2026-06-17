import React, { useState, useEffect } from 'react';
import { Project } from '../../types';
import { Github, ArrowUpRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const isEven = index % 2 === 0;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (project.imageGallery.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === project.imageGallery.length - 1 ? 0 : prev + 1));
    }, 4000); // changes image every 4 seconds

    return () => clearInterval(interval);
  }, [project.imageGallery.length]);

  const prevSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? project.imageGallery.length - 1 : prev - 1));
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === project.imageGallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <motion.div 
      className={`flex flex-col lg:flex-row gap-16 py-32 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
    >
      {/* Visual Side */}
      <div className="w-full lg:w-3/5">
        <div className="project-image-container relative group w-full aspect-[4/3] md:aspect-video rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] transition-all duration-500 hover:border-gold/30">
          
          {/* Browser Header Mockup */}
          <div className="h-10 border-b border-white/5 bg-[#121212] px-4 flex items-center justify-between relative z-20">
            {/* Window controls (red, yellow, green circles) */}
            <div className="flex gap-2 items-center">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/40 group-hover:bg-red-500/70 transition-colors duration-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40 group-hover:bg-yellow-500/70 transition-colors duration-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/40 group-hover:bg-green-500/70 transition-colors duration-300" />
            </div>
            
            {/* Elegant Domain Address Bar */}
            <div className="text-[10px] font-mono text-text-muted/50 bg-rich-black/60 px-6 py-1 rounded-md border border-white/5 w-1/2 max-w-[280px] text-center truncate">
              {project.title.toLowerCase().replace(/\s+/g, '')}.gokul.dev
            </div>
            
            {/* Status indicators */}
            <div className="flex gap-2 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-gold/30" />
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            </div>
          </div>

          <div className="relative w-full h-[calc(100%-2.5rem)] overflow-hidden bg-rich-black">
            {/* Ambient Background Blur of current image */}
            {project.imageGallery.map((imgUrl, i) => (
              <div
                key={`ambient-${i}`}
                style={{ backgroundImage: `url(${imgUrl})` }}
                className={`absolute inset-0 bg-cover bg-center filter blur-3xl scale-105 transition-all duration-1000 ${
                  i === currentIndex ? 'opacity-25' : 'opacity-0'
                }`}
              />
            ))}
            
            {/* Subtle contrast mask */}
            <div className="absolute inset-0 bg-rich-black/40 z-10 pointer-events-none" />

            {/* Actual Screenshot with elegant spacing and round borders */}
            <div className="absolute inset-3 z-10 rounded-xl overflow-hidden border border-white/5 bg-rich-black/40">
              {project.imageGallery.map((imgUrl, i) => (
                <img 
                  key={i}
                  src={imgUrl} 
                  alt={`${project.title} ${i + 1}`} 
                  className={`absolute inset-0 w-full h-full object-contain transition-all duration-1000 ${
                    i === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows inside view area */}
            {project.imageGallery.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-black/60 backdrop-blur-md hover:bg-gold hover:text-rich-black text-text-primary p-2.5 transition-all duration-300 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 animate-fade-in"
                  aria-label="Previous Slide"
                  id={`project-${index}-prev`}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-black/60 backdrop-blur-md hover:bg-gold hover:text-rich-black text-text-primary p-2.5 transition-all duration-300 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 animate-fade-in"
                  aria-label="Next Slide"
                  id={`project-${index}-next`}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Subtle base gradient for page dots overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none" />

                {/* Page dots status pill overlay */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5">
                  {project.imageGallery.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setCurrentIndex(idx);
                      }}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentIndex ? 'bg-gold w-3' : 'bg-white/40 hover:bg-white/70'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                      id={`project-${index}-dot-${idx}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {project.metrics && (
            <div className="absolute bottom-4 left-4 z-20 bg-black/80 backdrop-blur-md border border-white/10 rounded px-3 py-1.5 text-[9px] font-bold tracking-widest uppercase text-gold">
              {project.metrics}
            </div>
          )}
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-2/5 px-4 lg:px-0">
        <h3 className="text-4xl md:text-5xl font-serif font-black mb-6 tracking-tight">
          {project.title}
        </h3>
        
        <p className="text-sm italic serif-italic text-gold/80 mb-8 border-l border-gold/40 pl-6 leading-relaxed">
          {project.problemStatement}
        </p>

        <div className="space-y-6 text-text-muted font-light leading-relaxed mb-10 text-lg">
          <p>{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
          {project.techStack.map((tech) => (
            <span key={tech} className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted/60">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-x-12 gap-y-4">
          {project.githubUrl !== undefined && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              className="group inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-gold hover:text-text-primary transition-colors"
            >
              <Github className="w-4 h-4" /> 
              {project.title !== 'Planetopia' && <span>Source Code</span>}
              {project.title !== 'Planetopia' && (
                <div className="relative overflow-hidden w-4 h-4 flex items-center justify-center">
                  <ArrowUpRight className="absolute text-gold transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] group-hover:translate-x-full group-hover:-translate-y-full w-4 h-4" />
                  <ArrowUpRight className="absolute text-gold -translate-x-full translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] group-hover:translate-x-0 group-hover:translate-y-0 w-4 h-4" />
                </div>
              )}
            </a>
          )}
          {project.demoUrl !== undefined && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              className="group inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-gold hover:text-text-primary transition-colors"
            >
              <span>Live System</span>
              <div className="relative overflow-hidden w-4 h-4 flex items-center justify-center">
                <ArrowUpRight className="absolute text-gold transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] group-hover:translate-x-full group-hover:-translate-y-full w-4 h-4" />
                <ArrowUpRight className="absolute text-gold -translate-x-full translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] group-hover:translate-x-0 group-hover:translate-y-0 w-4 h-4" />
              </div>
            </a>
          )}
          {project.videoUrl !== undefined && (
            <a 
              href={project.videoUrl} 
              target="_blank" 
              className="group inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-gold hover:text-text-primary transition-colors"
            >
              <Play className="w-4 h-4 fill-gold/20 group-hover:fill-gold transition-colors" /> 
              <span>Video Demo</span>
              <div className="relative overflow-hidden w-4 h-4 flex items-center justify-center">
                <ArrowUpRight className="absolute text-gold transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] group-hover:translate-x-full group-hover:-translate-y-full w-4 h-4" />
                <ArrowUpRight className="absolute text-gold -translate-x-full translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] group-hover:translate-x-0 group-hover:translate-y-0 w-4 h-4" />
              </div>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;