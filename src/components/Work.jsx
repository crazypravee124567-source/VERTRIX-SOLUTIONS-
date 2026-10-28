import React, { useState } from 'react';
import { demoProjects } from '../data/demoProjects';

export default function Work({ onOpenCaseModal, onNavigateToDemos }) {
  const [activeTab, setActiveTab] = useState('demos'); // 'demos' or 'enterprise'

  const enterpriseCaseStudies = [
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
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border-ui mb-3">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-xs text-text-secondary font-medium">
              Verified production deployments
            </span>
          </div>
          <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight mb-3">
            Engineered solutions in action
          </h2>
          <p className="font-body text-base text-text-secondary max-w-xl leading-relaxed">
            Concrete business results delivered by our Coimbatore engineering team.
          </p>
        </div>

        {/* View Switcher: Live Demos vs Enterprise Systems */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 p-1 rounded-xl bg-surface border border-border-ui">
            <button
              onClick={() => setActiveTab('demos')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-150 flex items-center gap-2 cursor-pointer ${
                activeTab === 'demos'
                  ? 'bg-accent text-accent-text shadow-sm'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-success" />
              <span>Live Vercel demos (2)</span>
            </button>
            <button
              onClick={() => setActiveTab('enterprise')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-150 flex items-center gap-2 cursor-pointer ${
                activeTab === 'enterprise'
                  ? 'bg-accent text-accent-text shadow-sm'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <span className="material-symbols-outlined text-[15px]">domain</span>
              <span>Enterprise case studies (4)</span>
            </button>
          </div>

          {onNavigateToDemos && (
            <button
              onClick={onNavigateToDemos}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-hover transition-colors cursor-pointer"
            >
              <span>Explore dedicated demo projects page</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          )}
        </div>

        {/* TAB 1: Live Vercel Demos */}
        {activeTab === 'demos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-200">
            {demoProjects.map((project) => (
              <div
                key={project.id}
                className="p-6 md:p-8 rounded-2xl bg-surface border border-border-ui flex flex-col justify-between transition-colors duration-150 hover:border-accent/40 group shadow-xs"
              >
                <div>
                  {/* Top Bar with Preview Link */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded bg-surface-elevated text-xs text-accent font-medium border border-border-ui">
                      {project.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-success font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                      Live on Vercel
                    </span>
                  </div>

                  {/* Visual Screenshot Thumbnail - Width & Frame adjusted to photo */}
                  <div className="mb-5 h-[240px] w-full rounded-xl overflow-hidden border border-border-ui bg-canvas/60 flex items-center justify-center relative p-2">
                    {project.orientation === 'portrait' ? (
                      <div className="h-full aspect-[670/899] rounded-xl overflow-hidden border border-border-ui/80 bg-background shadow-xs relative">
                        <img
                          src={project.image}
                          alt={`${project.title} Mobile Preview`}
                          className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-300"
                        />
                        <div className="absolute top-1.5 inset-x-0 flex justify-center pointer-events-none">
                          <span className="w-10 h-1 rounded-full bg-border-ui/70" />
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-full rounded-xl overflow-hidden border border-border-ui/80 bg-background shadow-xs relative flex items-center">
                        <img
                          src={project.image}
                          alt={`${project.title} Desktop Preview`}
                          className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-surface/90 backdrop-blur-xs border border-border-ui text-[10px] font-mono text-text-secondary shadow-xs">
                      {project.domain}
                    </div>
                  </div>

                  <h3 className="font-headline text-xl font-bold text-text-primary mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-accent font-medium mb-3">
                    {project.subtitle}
                  </p>
                  <p className="font-body text-sm text-text-secondary leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-canvas font-mono text-xs text-text-secondary border border-border-ui"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Live Metric */}
                  <div className="p-4 rounded-xl bg-canvas border border-border-ui flex items-center justify-between mb-6">
                    <div>
                      <span className="text-[11px] text-text-muted font-medium block">
                        Verified metric
                      </span>
                      <span className="font-mono text-2xl font-bold text-accent">
                        {project.metrics[0].value}
                      </span>
                    </div>
                    <span className="font-body text-xs text-text-secondary text-right font-medium max-w-[180px]">
                      {project.metrics[0].label}
                    </span>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="grid grid-cols-2 gap-3 mt-auto pt-2">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 rounded-lg bg-accent hover:bg-accent-hover text-accent-text text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>Launch demo</span>
                    <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  </a>

                  <button
                    onClick={() => onOpenCaseModal(project.caseKey)}
                    className="h-12 rounded-lg bg-surface-elevated hover:bg-canvas border border-border-ui hover:border-accent text-text-secondary hover:text-accent text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Blueprint</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: Enterprise Case Studies */}
        {activeTab === 'enterprise' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-200">
            {enterpriseCaseStudies.map((item) => (
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

                  <h3 className="font-headline text-xl font-bold text-text-primary mb-1">
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
                        className="px-2.5 py-1 rounded bg-canvas font-mono text-xs text-text-secondary border border-border-ui"
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

                {/* Pinned Button */}
                <button
                  className="w-full h-12 rounded-lg bg-surface-elevated hover:bg-canvas border border-border-ui hover:border-accent text-text-secondary hover:text-accent text-xs font-semibold transition-colors duration-150 flex items-center justify-center gap-2 cursor-pointer mt-auto"
                  onClick={() => onOpenCaseModal(item.id)}
                >
                  <span>Inspect system blueprint</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
