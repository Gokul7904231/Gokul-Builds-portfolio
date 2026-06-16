import React from 'react';
import { LINKEDIN_POSTS } from '../../constants';
import { SectionId } from '../../types';

const LinkedInHighlights: React.FC = () => {
  return (
    <section id={SectionId.LinkedIn} className="py-48 bg-surface px-12 md:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-24">
            <h2 className="text-[10px] font-bold text-gold uppercase tracking-[0.4em] mb-6">Writing & Learning</h2>
            <h3 className="text-5xl font-serif font-black tracking-tight">Public Thinking</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 lg:gap-x-16 gap-y-16">
          {LINKEDIN_POSTS.map((post, idx) => (
            <a 
              key={idx} 
              href={post.url} 
              target="_blank" 
              className="group block border-b border-white/5 pb-16 hover:border-gold transition-colors duration-500"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="text-[9px] font-bold text-gold uppercase tracking-widest">
                  {post.tag}
                </span>
              </div>
              <h3 className="text-3xl font-serif font-bold text-text-primary mb-6 group-hover:italic transition-all">
                {post.title}
              </h3>
              <p className="text-text-muted text-lg font-light leading-relaxed">
                {post.summary}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinkedInHighlights;