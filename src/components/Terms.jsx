import React from 'react';

export default function Terms() {
  const conditions = [
    {
      num: '01',
      text: 'Prices shown are indicative baseline starting investments and are finalized upon formal scope definition.'
    },
    {
      num: '02',
      text: 'Final quotation is fixed based on technical features, third-party integrations, asset readiness, and delivery timeline.'
    },
    {
      num: '03',
      text: 'Applicable statutory taxes extra as per Indian regulatory requirements.'
    },
    {
      num: '04',
      text: 'Third-party cloud infrastructure (AWS/GCP), domains, Apple/Google developer accounts, and paid APIs are billed directly to client.'
    },
    {
      num: '05',
      text: 'Any change requests outside the approved sprint scope document will be scoped and estimated as a distinct work order.'
    },
    {
      num: '06',
      text: 'Full intellectual property rights, repository codebases, and production assets are transferred immediately upon final milestone settlement.'
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-canvas border-b border-border-ui">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="p-8 md:p-12 rounded-2xl bg-surface border border-border-ui">
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-accent text-[26px]">gavel</span>
            <h3 className="font-headline text-2xl font-bold text-white tracking-tight">
              Terms &amp; working conditions
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {conditions.map((item) => (
              <div key={item.num} className="flex items-start gap-4">
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-surface-elevated text-accent font-semibold shrink-0 border border-border-ui">
                  {item.num}
                </span>
                <p className="font-body text-xs text-text-secondary leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
