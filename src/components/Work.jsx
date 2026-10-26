import React from 'react';

export default function Work({ onOpenCaseModal }) {
  const caseStudies = [
    {
      id: 'apexlogix',
      sector: 'Enterprise logistics',
      title: 'ApexLogix ERP',
      subtitle: 'Fleet & warehouse logistics platform',
      description: 'Unified freight coordination engine replacing legacy spreadsheets with live GPS telemetry, dock slotting, automated dispatching, and vendor invoicing.',
      techStack: ['Next.js 14', 'Node.js', 'PostgreSQL', 'Redis Cache'],
      metricValue: '+140%',
      metricColor: 'text-accent',
      metricLabel: 'Dispatch turnaround velocity'
    },
    {
      id: 'novamed',
      sector: 'Healthcare & medtech',
      title: 'NovaMed Telehealth',
      subtitle: 'HIPAA-ready consultation suite',
      description: 'Encrypted peer-to-peer audio/video consultations, smart appointment queuing, digital EHR records, and automated pharmacy prescription distribution.',
      techStack: ['React Native', 'WebRTC', 'Firebase', 'End-to-End TLS'],
      metricValue: '99.98%',
      metricColor: 'text-success',
      metricLabel: 'Telemetry & call stream uptime'
    },
    {
      id: 'kovaifresh',
      sector: 'Agritech & hyperlocal',
      title: 'Kovai Fresh Agritech',
      subtitle: 'D2C grocery delivery platform',
      description: 'Direct farmer-to-consumer mobile marketplace with multi-zone order routing, batch harvesting logistics, one-click checkout, and geo-fenced delivery tracking.',
      techStack: ['Flutter', 'Express', 'Redis', 'MongoDB'],
      metricValue: '45k+',
      metricColor: 'text-accent',
      metricLabel: 'Monthly Coimbatore orders'
    },
    {
      id: 'aurapay',
      sector: 'FinTech & payments',
      title: 'AuraPay FinTech',
      subtitle: 'Cross-border payment gateway',
      description: 'High-throughput transaction routing engine supporting INR/USD/AED settlement reconciliation, webhook automation, fraud scoring, and instant payouts.',
      techStack: ['Next.js', 'Go Microservices', 'Tailwind', 'Kafka'],
      metricValue: '₹12Cr+',
      metricColor: 'text-accent',
      metricLabel: 'Monthly processed volume'
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-canvas border-b border-border-ui" id="work">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Header (No All-Caps) */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border-ui mb-3">
            <span className="w-2 h-2 rounded-full bg-success" />
            <span className="text-xs text-text-secondary font-medium">
              Verified production deployments
            </span>
          </div>
          <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
            Engineered solutions in action
          </h2>
          <p className="font-body text-base text-text-secondary max-w-xl leading-relaxed">
            Concrete business results delivered by our Coimbatore engineering team.
          </p>
        </div>

        {/* Case Studies Grid (2 x 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-surface border border-border-ui flex flex-col justify-between transition-colors duration-150 hover:border-accent/40"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded bg-surface-elevated text-xs text-text-secondary border border-border-ui font-medium">
                    {item.sector}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-success font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-success" />
                    Live
                  </span>
                </div>

                <h3 className="font-headline text-xl font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-accent font-medium mb-3">
                  {item.subtitle}
                </p>
                <p className="font-body text-sm text-text-secondary leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-canvas font-mono text-xs text-white border border-border-ui"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Verified Metric Block */}
                <div className="p-4 rounded-xl bg-canvas border border-border-ui flex items-center justify-between mb-6">
                  <div>
                    <span className="text-[11px] text-text-muted font-medium block">
                      Verified result
                    </span>
                    <span className={`font-mono text-2xl font-bold ${item.metricColor}`}>
                      {item.metricValue}
                    </span>
                  </div>
                  <span className="font-body text-xs text-text-secondary text-right font-medium max-w-[180px]">
                    {item.metricLabel}
                  </span>
                </div>
              </div>

              {/* Pinned Button (No All-Caps) */}
              <button
                className="w-full h-12 rounded-lg bg-surface-elevated hover:bg-surface-elevated/80 border border-border-ui hover:border-accent text-white hover:text-accent text-xs font-semibold transition-colors duration-150 flex items-center justify-center gap-2 cursor-pointer mt-auto"
                onClick={() => onOpenCaseModal(item.id)}
              >
                <span>Inspect system blueprint</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
