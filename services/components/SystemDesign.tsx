import React from 'react';
import { SectionId } from '../../types';
import { SYSTEM_DESIGN_TEXT } from '../../constants';

const SystemDesign: React.FC = () => {
  return (
    <section id={SectionId.SystemDesign} className="py-48 bg-rich-black overflow-hidden px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-[10px] font-bold text-gold uppercase tracking-[0.4em] mb-12">Engineering Philosophy</h2>
            <h3 className="text-6xl md:text-8xl font-serif font-black mb-16 tracking-tight leading-[0.9]">
              The <span className="serif-italic italic text-gold">Architecture</span> of Intelligence.
            </h3>
            
            <div className="relative pl-12 border-l border-gold/30">
              <p className="text-2xl md:text-3xl text-text-muted leading-relaxed font-light italic">
                "{SYSTEM_DESIGN_TEXT}"
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-16 border border-white/5 bg-surface relative">
              <div className="absolute top-0 right-0 p-4">
                <span className="text-[8px] font-bold text-gold/20 uppercase tracking-[0.5em] rotate-90 inline-block origin-right">MOD-024A</span>
              </div>
              
              <div className="space-y-16">
                <div>
                  <h4 className="text-[10px] font-bold text-text-primary uppercase tracking-widest mb-4">01 / The Human Core</h4>
                  <p className="text-sm text-text-muted font-light leading-relaxed">
                    Decoupling complex AI inference from the user experience thread to ensure fluid interaction even under heavy compute.
                  </p>
                </div>
                
                <div className="h-px bg-white/5 w-full"></div>

                <div>
                  <h4 className="text-[10px] font-bold text-text-primary uppercase tracking-widest mb-4">02 / Scalable Intent</h4>
                  <p className="text-sm text-text-muted font-light leading-relaxed">
                    Moving away from generic REST patterns towards specialized data-orchestration that mirrors human decision paths.
                  </p>
                </div>

                <div className="pt-8">
                   <div className="flex gap-4">
                      <div className="w-2 h-2 rounded-full bg-gold"></div>
                      <div className="w-2 h-2 rounded-full bg-white/10"></div>
                      <div className="w-2 h-2 rounded-full bg-white/10"></div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemDesign;