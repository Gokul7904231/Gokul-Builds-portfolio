import React from 'react';
import { ACHIEVEMENTS } from '../../constants';
import { SectionId } from '../../types';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

const Achievements: React.FC = () => {
  return (
    <motion.section 
      id={SectionId.Achievements} 
      className="py-48 px-12 md:px-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[10px] font-bold text-gold uppercase tracking-[0.4em] mb-20 block">Milestones</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
          {ACHIEVEMENTS.map((item, idx) => (
            <motion.div 
              key={idx} 
              className="group border-t border-white/5 pt-12 hover:border-gold/40 transition-all duration-700 flex flex-col justify-between h-full"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              <div>
                <span className="text-[10px] font-bold text-gold/60 mb-8 block uppercase tracking-widest">{item.date}</span>
                <h3 className="text-2xl font-serif font-black text-text-primary mb-6 group-hover:italic transition-all">
                  {item.title}
                </h3>
                <p className="text-text-muted font-light leading-relaxed text-sm mb-6">
                  {item.description}
                </p>
              </div>
              
              {item.link && item.linkLabel && (
                <div className="mt-auto pt-4">
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="group inline-flex items-center gap-3 text-xs font-bold text-gold hover:text-text-primary uppercase tracking-widest transition-colors duration-300"
                  >
                    <span>{item.linkLabel}</span>
                    <div className="relative overflow-hidden w-4 h-4 flex items-center justify-center">
                      <ArrowUpRight className="absolute text-gold transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] group-hover:translate-x-full group-hover:-translate-y-full w-4 h-4" />
                      <ArrowUpRight className="absolute text-gold -translate-x-full translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] group-hover:translate-x-0 group-hover:translate-y-0 w-4 h-4" />
                    </div>
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Achievements;