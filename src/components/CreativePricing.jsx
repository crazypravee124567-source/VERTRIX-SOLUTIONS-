import React from 'react';

export default function CreativePricing() {
  const appAndWebServices = [
    {
      category: 'Mobile architecture',
      price: '₹60,000',
      title: 'Basic Android app',
      description: 'Core functionality, clean mobile UI implementation, foundational backend REST API integration, test builds, and Google Play Store deployment assistance.'
    },
    {
      category: 'Enterprise mobile',
      price: '₹80,000',
      title: 'Business mobile app',
      description: 'Secure registration, authenticated sessions, live database & REST integrations, push notifications, role-based workflows, and full staging deployment.'
    },
    {
      category: 'M-commerce',
      price: '₹1,50,000',
      title: 'E-commerce mobile app',
      description: 'Full product catalog browsing, cart & express checkout, multi-method payment integrations, real-time live order tracking, and custom merchant dashboard.'
    },
    {
      category: 'Cross-platform',
      price: '₹95,000',
      title: 'Flutter iOS & Android app',
      description: 'Single codebase powering both Apple App Store and Google Play Store with native 60fps animations, local caching, and offline support.'
    },
    {
      category: 'Custom web platform',
      price: '₹60,000',
      title: 'Custom web application',
      description: 'High-frequency operations dashboards, client CRM portals, internal inventory tracking, scheduling systems, and tailored automated pipelines.'
    },
    {
      category: 'Enterprise SaaS',
      price: '₹1,20,000',
      title: 'Full-stack cloud web portal',
      description: 'Multi-tenant architecture, role-based access control, PostgreSQL database clustering, payment billing subscriptions, and administrative analytics.'
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-canvas border-b border-border-ui">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-semibold text-accent mb-2">
            Mobile &amp; web suite
          </span>
          <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight mb-3">
            Mobile apps &amp; custom web platforms
          </h2>
          <p className="font-body text-base text-text-secondary max-w-xl leading-relaxed">
            Engineered exclusively for iOS, Android, and scalable web architectures with full production delivery.
          </p>
        </div>

        {/* 6 Cards Grid (3x2) - Websites & Apps Only */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {appAndWebServices.map((card, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-surface border border-border-ui flex flex-col justify-between transition-colors duration-150 hover:border-accent/40"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded bg-surface-elevated text-[11px] text-text-secondary font-medium border border-border-ui">
                    {card.category}
                  </span>
                  <span className="font-mono text-lg font-bold text-accent">
                    {card.price}<span className="text-text-muted text-xs ml-0.5">+</span>
                  </span>
                </div>
                <h3 className="font-headline text-lg font-bold text-text-primary mb-2">
                  {card.title}
                </h3>
                <p className="font-body text-sm text-text-secondary leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              <div className="pt-4 border-t border-border-ui/60 mt-auto">
                <a
                  className="text-xs font-semibold text-accent hover:underline inline-flex items-center gap-1.5"
                  href="#contact"
                >
                  <span>Request spec details</span>
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
