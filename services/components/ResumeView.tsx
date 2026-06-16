import React from 'react';
import { PROJECTS, EXPERIENCE, SKILLS, EDUCATION, ACHIEVEMENTS, CERTIFICATIONS } from '../../constants';
import { ArrowLeft, Printer, RefreshCw, Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';

export const ResumeView: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleReturn = () => {
    window.location.search = '';
    window.location.hash = '';
  };

  return (
    <div className="min-h-screen bg-[#070707] text-[#E0E0E0] font-sans antialiased relative selection:bg-gold selection:text-[#070707] print:bg-white print:text-black">
      {/* Interactive Controls - Hidden during print */}
      <div className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-12 flex items-center justify-between print:hidden">
        <button
          onClick={handleReturn}
          className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-text-muted hover:text-gold transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Exit to Site</span>
        </button>

        <div className="flex items-center gap-4">
          <p className="hidden md:block text-[10px] font-mono text-gold/60 tracking-widest uppercase">
            Designed for Paper & Screen (Press Ctrl+P / Cmd+P)
          </p>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2.5 bg-gold hover:bg-gold/90 text-[#070707] text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded shadow-lg transition-all transform hover:scale-105"
          >
            <Printer className="w-4 h-4" />
            <span>Print or Save PDF</span>
          </button>
        </div>
      </div>

      {/* Main Resume Container */}
      <div className="max-w-[850px] mx-auto px-6 py-12 md:py-20 print:p-0 print:max-w-full">
        <div className="bg-[#0b0b0b] border border-white/5 p-8 md:p-16 rounded-2xl shadow-2xl relative overflow-hidden print:border-0 print:p-0 print:bg-white print:text-black print:shadow-none">
          {/* Subtle Aesthetic gold accents */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-gold/80 to-transparent print:hidden" />
          <div className="absolute top-8 right-8 w-24 h-24 rounded-full bg-gold/5 blur-3xl pointer-events-none print:hidden" />

          {/* Header Section */}
          <header className="border-b border-white/10 pb-8 mb-8 print:border-black/10 print:pb-4 print:mb-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-serif font-black tracking-tight text-white print:text-black leading-none mb-2">
                  GOKUL A
                </h1>
                <p className="text-sm font-mono tracking-[0.3em] text-gold print:text-black uppercase font-bold">
                  Software Engineer & AI/ML Specialist
                </p>
              </div>

              {/* Contact Information */}
              <div className="text-xs space-y-2 text-text-muted print:text-neutral-700">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-gold/80 print:text-neutral-600 shrink-0" />
                  <a href="mailto:asgokul2004@gmail.com" className="hover:underline hover:text-white print:hover:text-black">asgokul2004@gmail.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-gold/80 print:text-neutral-600 shrink-0" />
                  <span>+91 79042 31257</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-gold/80 print:text-neutral-600 shrink-0" />
                  <span>Tamil Nadu, India</span>
                </div>
                <div className="flex items-center gap-3 pt-1.5 print:hidden">
                  <a href="https://github.com/Gokul7904231" target="_blank" rel="noreferrer" className="text-text-muted hover:text-gold transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-text-muted hover:text-gold transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </header>

          {/* About/Objective */}
          <section className="mb-8 print:mb-6">
            <h2 className="text-xs font-bold text-gold print:text-black uppercase tracking-[0.25em] mb-3 border-b border-white/5 pb-1 print:border-black/5">
              Professional Summary
            </h2>
            <p className="text-sm text-text-muted print:text-neutral-700 leading-relaxed font-light">
              Aspiring Software Engineer with hands-on expertise in AI/ML architectures and full-stack development. Combined background in building modular real-time AI solutions, multi-agent frameworks, and highly scaling web platform backends. Proven record of developing responsive applications and optimizing computational latencies.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="mb-8 print:mb-6">
            <h2 className="text-xs font-bold text-gold print:text-black uppercase tracking-[0.25em] mb-4 border-b border-white/5 pb-1 print:border-black/5">
              Technical Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 print:grid-cols-3">
              {SKILLS.map((skillGroup, idx) => (
                <div key={idx} className="bg-white/[0.01] border border-white/5 rounded-lg p-4 print:p-0 print:border-0 print:bg-transparent">
                  <h3 className="text-xs font-bold text-white print:text-black tracking-wider uppercase mb-2">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {skillGroup.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx} 
                        className="text-[11px] bg-white/5 border border-white/5 text-text-muted px-2 py-0.5 rounded print:bg-neutral-100 print:text-neutral-800 print:border-neutral-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Work Experience */}
          <section className="mb-8 print:mb-6">
            <h2 className="text-xs font-bold text-gold print:text-black uppercase tracking-[0.25em] mb-4 border-b border-white/5 pb-1 print:border-black/5">
              Professional Experience
            </h2>
            <div className="space-y-6">
              {EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="relative pl-4 border-l border-gold/35 print:border-neutral-400">
                  <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-1 mb-2">
                    <div>
                      <h3 className="text-base font-serif font-black text-white print:text-black">
                        {exp.company}
                      </h3>
                      <p className="text-xs text-gold/80 print:text-neutral-700 font-mono tracking-wide uppercase">
                        {exp.role}
                      </p>
                    </div>
                    <span className="text-[11px] font-mono text-text-muted print:text-neutral-500 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-1.5">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="text-xs text-text-muted print:text-neutral-700 leading-relaxed font-light">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Projects */}
          <section className="mb-8 print:mb-6 page-break-before">
            <h2 className="text-xs font-bold text-gold print:text-black uppercase tracking-[0.25em] mb-4 border-b border-white/5 pb-1 print:border-black/5">
              Key Architectural Projects
            </h2>
            <div className="space-y-5">
              {PROJECTS.slice(0, 4).map((project, idx) => (
                <div key={idx} className="group relative">
                  <div className="flex flex-col md:flex-row md:justify-between items-start mb-1.5">
                    <div>
                      <h3 className="text-sm font-bold text-white print:text-black inline-flex items-center gap-1">
                        {project.title}
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-gold print:text-neutral-700 hover:text-white print:hidden">
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </h3>
                      <p className="text-[10px] text-text-muted/70 print:text-neutral-600 font-mono mt-0.5">
                        {project.techStack.join(' • ')}
                      </p>
                    </div>
                    {project.metrics && (
                      <span className="text-[10px] font-mono bg-gold/10 text-gold border border-gold/20 px-2 py-0.5 rounded print:bg-neutral-100 print:text-black print:border-neutral-300">
                        {project.metrics}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-text-muted print:text-neutral-700 font-light leading-relaxed mb-2">
                    {project.description}
                  </p>
                  <ul className="list-disc list-outside ml-4 space-y-1">
                    {project.highlights.slice(0, 2).map((highlight, hIdx) => (
                      <li key={hIdx} className="text-[11px] text-text-muted/80 print:text-neutral-700 font-light">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education & Credentials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 print:grid-cols-2">
            {/* Education */}
            <section>
              <h2 className="text-xs font-bold text-gold print:text-black uppercase tracking-[0.25em] mb-4 border-b border-white/5 pb-1 print:border-black/5">
                Education
              </h2>
              <div className="space-y-4">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="text-xs">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="font-bold text-white print:text-black">{edu.institution}</h3>
                      <span className="text-[10px] font-mono text-text-muted print:text-neutral-500 shrink-0">{edu.period}</span>
                    </div>
                    <p className="text-gold/80 print:text-neutral-700">{edu.degree}</p>
                    <p className="text-text-muted/60 print:text-neutral-500 font-mono text-[10px] mt-0.5">{edu.grade}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications and Milestones */}
            <section>
              <h2 className="text-xs font-bold text-gold print:text-black uppercase tracking-[0.25em] mb-4 border-b border-white/5 pb-1 print:border-black/5">
                Selected Credentials
              </h2>
              <div className="space-y-3.5 text-xs">
                {CERTIFICATIONS.slice(0, 3).map((cert, idx) => (
                  <div key={idx} className="flex justify-between items-start gap-2">
                    <div>
                      <h4 className="font-bold text-white print:text-black">{cert.name}</h4>
                      <p className="text-[10px] text-text-muted print:text-neutral-600">{cert.issuer}</p>
                    </div>
                    <span className="text-[10px] font-mono text-gold print:text-neutral-600 shrink-0">{cert.date}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeView;
