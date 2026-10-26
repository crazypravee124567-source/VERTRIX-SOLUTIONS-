import React from 'react';

export default function PaymentMilestones() {
  const milestones = [
    {
      percentage: '50%',
      phase: 'Initial phase',
      color: 'text-accent',
      title: '50% project kickoff',
      description: 'Paid upon project confirmation and contract signing, before architecture and code sprints commence.'
    },
    {
      percentage: '30%',
      phase: 'Mid checkpoint',
      color: 'text-wine-light',
      title: '30% staging approval',
      description: 'Paid after interactive UI sign-off and functional staging preview approval on private sandbox.'
    },
    {
      percentage: '20%',
      phase: 'Final launch',
      color: 'text-success',
      title: '20% live handover',
      description: 'Paid after multi-device QA testing and final client sign-off, immediately prior to live production DNS deployment.'
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-background border-b border-border-ui">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header (No All-Caps) */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-semibold text-accent mb-2">
            Financial integrity
          </span>
          <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
            Transparent payment milestones
          </h2>
          <p className="font-body text-base text-text-secondary max-w-xl leading-relaxed">
            Zero ambiguity. Funds unlocked strictly as concrete development targets are verified.
          </p>
        </div>

        {/* Milestone Stage Visual Tracker */}
        <div className="w-full bg-canvas rounded-full h-2 mb-10 overflow-hidden flex border border-border-ui">
          <div className="h-full bg-accent w-1/2" />
          <div className="h-full bg-wine-light w-[30%]" />
          <div className="h-full bg-success w-[20%]" />
        </div>

        {/* 3 Stage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {milestones.map((m, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-surface border border-border-ui flex flex-col justify-between transition-colors duration-150 hover:border-accent/40"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`font-mono text-3xl font-extrabold ${m.color}`}>
                    {m.percentage}
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded bg-surface-elevated text-text-secondary border border-border-ui font-medium">
                    {m.phase}
                  </span>
                </div>
                <h3 className="font-headline text-lg font-bold text-white mb-2">
                  {m.title}
                </h3>
                <p className="font-body text-sm text-text-secondary leading-relaxed">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Real Example Box */}
        <div className="p-6 rounded-2xl bg-surface border border-border-ui flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-accent text-[24px] shrink-0">
              calculate
            </span>
            <div>
              <span className="font-headline text-sm font-bold text-white block">
                Concrete milestone example:
              </span>
              <p className="font-body text-xs text-text-secondary mt-0.5">
                On a ₹20,000 project: ₹10,000 advance • ₹6,000 staging milestone • ₹4,000 final live deployment.
              </p>
            </div>
          </div>
          <span className="text-xs text-success font-medium shrink-0 bg-canvas px-3 py-1.5 rounded-lg border border-border-ui">
            100% milestone based
          </span>
        </div>

      </div>
    </section>
  );
}
