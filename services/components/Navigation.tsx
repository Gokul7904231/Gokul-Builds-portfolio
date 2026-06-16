import React, { useState, useEffect } from 'react';
import { SectionId } from '../../types';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Profile', id: SectionId.About },
    { label: 'Skills', id: SectionId.Skills },
    { label: 'Writing', id: SectionId.LinkedIn },
    { label: 'Systems', id: SectionId.Projects },
    { label: 'Contact', id: SectionId.Contact },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-rich-black/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-10'}`}>
      <div className="container mx-auto px-12 flex justify-between items-center">
        <div 
          className="text-text-primary font-serif italic text-2xl cursor-pointer group"
          onClick={() => scrollToSection(SectionId.Home)}
        >
          G<span className="text-gold group-hover:text-text-primary transition-colors">.</span>A
        </div>

        <nav className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-[10px] font-bold text-text-muted hover:text-gold uppercase tracking-[0.3em] transition-all gold-underline"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button className="md:hidden text-gold" onClick={() => setIsMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-rich-black z-[-1] transition-transform duration-700 flex flex-col items-center justify-center gap-12 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="text-4xl font-serif font-black text-text-primary uppercase"
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Navigation;