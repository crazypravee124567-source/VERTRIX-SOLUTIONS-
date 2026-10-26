import React from 'react';

export default function MaintenancePricing() {
  const checklist = [
    'Routine web content & app catalog updates',
    'Weekly uptime, API health & SSL monitoring',
    'App Store & Play Store OS compatibility care',
    'Speed telemetry & continuous security patches'
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-background border-b border-border-ui">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="p-8 md:p-12 rounded-2xl bg-surface border border-border-ui">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 flex flex-col">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated border border-border-ui w-fit mb-4">
                <span className="w-2 h-2 rounded-full bg-success" />
                <span className="text-xs font-semibold text-success">
                  Continuous reliability service
                </span>
              </div>

              <h3 className="font-headline text-2xl md:text-3xl font-bold text-white mb-3">
                Proactive web &amp; app maintenance &amp; technical care
              </h3>
              
              <p className="font-body text-base text-text-secondary leading-relaxed mb-6">
                Keep your websites, mobile applications, and cloud APIs fast, secure, and always accessible without diverting your internal team from core operations.
              </p>

              {/* Checklist Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {checklist.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-accent text-[18px] shrink-0">
                      check_circle
                    </span>
                    <span className="font-body text-xs text-text-secondary">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-text-muted italic">
                * Note: Major feature modifications and architectural overhauls are quoted separately.
              </p>
            </div>

            {/* Retainer Card */}
            <div className="lg:col-span-4 p-6 rounded-xl bg-canvas border border-border-ui flex flex-col gap-4">
              <div>
                <span className="text-xs font-medium text-text-muted block">
                  Monthly retainer
                </span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="font-mono text-3xl font-extrabold text-white">₹2,000</span>
                  <span className="text-xs text-text-secondary font-medium">/ month onwards</span>
                </div>
              </div>

              <a
                className="w-full h-12 rounded-lg bg-accent text-accent-text font-headline text-xs font-bold flex items-center justify-center hover:bg-accent-hover transition-colors duration-150"
                href="#contact"
              >
                Subscribe to care plan
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
