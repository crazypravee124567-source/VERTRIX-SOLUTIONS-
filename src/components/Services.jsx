import React from 'react';
import { servicesData } from '../data/services';

export default function Services() {
  return (
    <section className="w-full py-16 md:py-24 bg-background border-b border-border-ui" id="services">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Header (No All-Caps) */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-semibold text-accent mb-2">
            Core capabilities
          </span>
          <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight mb-3">
            Website &amp; mobile app services
          </h2>
          <p className="font-body text-base text-text-secondary max-w-xl leading-relaxed">
            Full-cycle website and mobile application engineering tailored for speed, security, and market performance.
          </p>
        </div>

        {/* 6-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="p-8 rounded-2xl bg-surface border border-border-ui flex flex-col justify-between transition-colors duration-150 hover:border-accent/40"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-elevated border border-border-ui flex items-center justify-center mb-6 text-accent">
                  <span className="material-symbols-outlined text-[24px]">
                    {service.icon}
                  </span>
                </div>
                <h3 className="font-headline text-lg font-bold text-text-primary mb-2">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-text-secondary leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Pinned Bottom Metadata & Link */}
              <div className="pt-4 border-t border-border-ui/60 flex items-center justify-between mt-auto">
                <span className="font-mono text-xs text-text-muted">
                  {service.tag}
                </span>
                <a
                  className="text-xs font-semibold text-accent hover:underline inline-flex items-center gap-1.5"
                  href="#contact"
                >
                  <span>Enquire</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
