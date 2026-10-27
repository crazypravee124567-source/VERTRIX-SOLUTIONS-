import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'work', label: 'Case studies', href: '#work' },
    { id: 'pricing', label: 'Pricing', href: '#pricing' },
    { id: 'process', label: 'Process', href: '#process' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  // Dynamic Scrollspy & scroll elevation
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          // Toggle floating island elevation on scroll
          setIsScrolled(scrollY > 15);

          // Edge case 1: Bottom of page always activates contact
          const atBottom = window.innerHeight + scrollY >= document.documentElement.scrollHeight - 70;
          if (atBottom) {
            setActiveTab('contact');
            if (window.location.hash !== '#contact') {
              window.history.replaceState(null, '', '#contact');
            }
            ticking = false;
            return;
          }

          // Edge case 2: Near top always activates home
          if (scrollY < 100) {
            setActiveTab('home');
            if (window.location.hash && window.location.hash !== '#' && window.location.hash !== '#home') {
              window.history.replaceState(null, '', window.location.pathname + window.location.search);
            }
            ticking = false;
            return;
          }

          // Iterate sections in order from top to bottom
          // triggerPoint is 220px below top of viewport (below floating dock)
          const sections = ['home', 'services', 'work', 'pricing', 'process', 'contact'];
          let currentSection = 'home';
          const triggerPoint = 220;

          for (const id of sections) {
            const el = document.getElementById(id);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= triggerPoint) {
                currentSection = id;
              }
            }
          }

          setActiveTab(currentSection);
          const newHash = currentSection === 'home' ? '' : `#${currentSection}`;
          if (window.location.hash !== newHash && (window.location.hash !== '' || newHash !== '')) {
            window.history.replaceState(null, '', newHash || window.location.pathname);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setActiveTab(targetId);
    setMobileMenuOpen(false);

    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', window.location.pathname);
      return;
    }

    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const navOffset = 96;
      const elementPosition = targetEl.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = Math.max(0, elementPosition - navOffset);

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <header className="fixed top-4 md:top-5 inset-x-0 mx-auto w-[94%] max-w-[1160px] z-50 transition-all duration-300">
      {/* Floating Island Dock with Dynamic Scroll State */}
      <div 
        className={`h-16 px-4 md:px-6 rounded-2xl bg-surface/92 backdrop-blur-xl border transition-all duration-200 flex items-center justify-between ${
          isScrolled 
            ? 'shadow-[0_16px_36px_rgba(110,21,40,0.12)] border-border-ui/90 bg-surface/98' 
            : 'shadow-[0_8px_24px_rgba(110,21,40,0.06)] border-border-ui/70'
        }`}
      >
        
        {/* Brand: Vertrix Solutions */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')}
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-accent rounded-xl p-1"
        >
          <img 
            src="/logo-icon.png" 
            alt="VetriX Solutions Logo" 
            className="w-9 h-9 rounded-xl object-cover shadow-[0_2px_8px_rgba(2,18,44,0.2)] group-hover:scale-105 transition-transform" 
          />
          <div className="flex items-center gap-2">
            <span className="font-headline text-lg font-bold tracking-tight text-white group-hover:text-accent transition-colors">
              VetriX Solutions<span className="text-accent">.</span>
            </span>
            <span className="hidden sm:inline-flex px-2 py-0.5 rounded-md bg-surface-elevated border border-border-ui text-[11px] font-medium text-text-secondary">
              Studio
            </span>
          </div>
        </a>

        {/* Center: Segmented Navigation Dock with Real-Time Scrollspy */}
        <nav className="hidden lg:flex items-center gap-1 p-1 rounded-xl bg-canvas/70 border border-border-ui/80">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                activeTab === link.id
                  ? 'bg-accent text-accent-text font-semibold shadow-sm'
                  : 'text-text-secondary hover:text-white hover:bg-surface-elevated/40'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Primary Action */}
        <div className="flex items-center gap-3">

          {/* Single Primary Action Button */}
          <a
            className="hidden sm:inline-flex items-center justify-center gap-1.5 h-10 px-5 rounded-xl bg-accent text-accent-text font-headline text-xs font-bold hover:bg-accent-hover transition-colors duration-150 shadow-[0_4px_16px_rgba(110,21,40,0.22)] focus:outline-none focus:ring-2 focus:ring-accent"
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            <span>Get a quote</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-surface-elevated border border-border-ui text-text-secondary hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Floating Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 p-5 rounded-2xl bg-surface/98 backdrop-blur-2xl border border-border-ui shadow-2xl flex flex-col gap-1.5 animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                activeTab === link.id
                  ? 'bg-accent text-accent-text font-semibold shadow-sm'
                  : 'text-text-secondary hover:text-white hover:bg-surface-elevated/50'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="mt-3 w-full h-11 rounded-xl bg-accent text-accent-text font-headline text-xs font-bold flex items-center justify-center gap-1.5"
          >
            <span>Get a quote</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>
      )}
    </header>
  );
}
