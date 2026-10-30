/* Designed & developed by Vertrix Solutions */
import React from 'react';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ onNavigate, onPrivacyPolicy }) {
  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Projects', href: '#work', id: 'work' },
    { label: 'Pricing', href: '#pricing', id: 'pricing' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <footer className="w-full bg-canvas border-t border-border-ui">
      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-16">

          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <img
                src="/logo-icon.png"
                alt="VetriX Solutions Logo"
                className="w-8 h-8 rounded-lg object-cover shadow-[0_2px_8px_rgba(2,18,44,0.15)]"
              />
              <span className="font-headline text-lg font-bold text-text-primary tracking-tight">
                VetriX Solutions
              </span>
            </div>
            <p className="text-xs text-accent font-medium mt-1">
              Engineering studio &bull; Coimbatore
            </p>
            <p className="font-body text-xs text-text-secondary max-w-sm leading-relaxed mt-1">
              Production web applications, cross-platform mobile systems, and custom software architectures engineered for growth.
            </p>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-semibold text-text-primary">
              Navigation
            </span>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    if (onNavigate) {
                      e.preventDefault();
                      onNavigate(link.id);
                    }
                  }}
                  className="font-body text-xs text-text-secondary hover:text-accent transition-colors duration-150 py-0.5 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact & Status (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-semibold text-text-primary">
              Headquarters
            </span>
            <div className="flex flex-col gap-2 font-body text-xs text-text-secondary">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-accent text-[16px]">
                  mail
                </span>
                <a
                  className="hover:text-accent transition-colors duration-150"
                  href="mailto:vetrixsolutionscbe@gmail.com"
                >
                  vetrixsolutionscbe@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-accent text-[16px]">
                  call
                </span>
                <a
                  className="hover:text-accent transition-colors duration-150 font-mono"
                  href="tel:+916379130164"
                >
                  +91 63791 30164
                </a>
              </div>

              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-success text-[16px]">
                  chat
                </span>
                <a
                  className="hover:text-accent transition-colors duration-150"
                  href="https://wa.me/916379130164?text=Hi%20Vertrix%20Solutions,%20I'd%20like%20to%20discuss%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp direct
                </a>
              </div>

              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-accent text-[16px]">
                  location_on
                </span>
                <span>Coimbatore, Tamil Nadu, India</span>
              </div>

              <div className="flex items-center gap-2 mt-2">
                <span className="w-2 h-2 rounded-full bg-success" />
                <span className="text-[11px] text-success font-medium">
                  Studio operational &bull; Client deliveries active
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Legal Line */}
        <div className="pt-8 border-t border-border-ui flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-[14px] text-text-secondary text-center sm:text-left">
            Designed &amp; developed by Vertrix Solutions
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={onPrivacyPolicy}
              className="text-xs text-text-muted hover:text-accent transition-colors duration-150 cursor-pointer underline-offset-2 hover:underline"
            >
              Privacy Policy
            </button>
            <span className="text-xs text-text-muted">
              &copy; {CURRENT_YEAR} Vertrix Solutions. All rights reserved.
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
