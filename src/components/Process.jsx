import React from 'react';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      description: 'Audit business goals, target user personas, technical requirements, and core success metrics.'
    },
    {
      num: '02',
      title: 'Plan',
      description: 'Define technical stack architecture, component specifications, deliverable roadmaps, and SLA timelines.'
    },
    {
      num: '03',
      title: 'Design',
      description: 'Construct interactive design systems and high-fidelity prototypes in Figma with client sign-off.'
    },
    {
      num: '04',
      title: 'Develop',
      description: 'Write clean, modular, production code paired with automated linting, security audits, and multi-device QA.'
    },
    {
      num: '05',
      title: 'Deliver',
      description: 'Deploy live to hardened cloud environments, execute DNS configuration, and complete handover.'
    },
    {
      num: '06',
      title: 'Support',
      description: 'Provide 30-day post-launch warranty, ongoing security updates, and performance optimization.'
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-canvas border-b border-border-ui" id="process">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header (No All-Caps) */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-semibold text-accent mb-2">
            Disciplined delivery
          </span>
          <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
            Engineered delivery pipeline
          </h2>
          <p className="font-body text-base text-text-secondary max-w-xl leading-relaxed">
            Six structured stages ensuring predictability, rapid velocity, and defect-free execution.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-6 rounded-2xl bg-surface border border-border-ui flex flex-col justify-between transition-colors duration-150 hover:border-accent/40"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-surface-elevated border border-border-ui text-accent flex items-center justify-center font-mono text-sm font-bold mb-4">
                  {step.num}
                </div>
                <h3 className="font-headline text-base font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-xs text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
