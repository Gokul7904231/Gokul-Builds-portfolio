import React from 'react';
import { CERTIFICATIONS } from '../../constants';
import { SectionId } from '../../types';

const Certifications: React.FC = () => {
  return (
    <section id={SectionId.Certifications} className="py-48 px-8 md:px-24 border-t border-white/5 bg-deep-charcoal">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-[10px] font-bold text-gold uppercase tracking-[0.4em] mb-8">Credentials</h2>
            <h3 className="text-5xl font-serif font-black tracking-tight leading-none mb-10">Validation & Core Training</h3>
          </div>
          
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="group flex flex-col border-t border-white/5 pt-8">
                  <span className="text-[9px] font-bold text-text-muted/60 uppercase tracking-widest block mb-1">
                    {cert.date} — {cert.tag}
                  </span>
                  <h5 className="text-xl font-serif font-bold text-text-primary mt-1 group-hover:italic transition-all duration-300 leading-snug">
                    {cert.name}
                  </h5>
                  <p className="text-text-muted text-sm font-light mt-1">
                    {cert.issuer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
