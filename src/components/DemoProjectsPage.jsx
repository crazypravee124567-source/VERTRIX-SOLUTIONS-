import React, { useState } from 'react';
import { demoProjects } from '../data/demoProjects';
import LiveDemoPreviewModal from './LiveDemoPreviewModal';

export default function DemoProjectsPage({ onBackToHome }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [previewProject, setPreviewProject] = useState(null);

  const categories = [
    { id: 'All', label: 'All projects', count: demoProjects.length },
    { id: 'Restaurant & Hospitality', label: 'Restaurant & hospitality', count: 1 },
    { id: 'E-Commerce & Retail', label: 'E-commerce & retail', count: 1 }
  ];

  const filteredProjects = activeCategory === 'All'
    ? demoProjects
    : demoProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full bg-background text-text-primary pb-24">
      {/* Top Breadcrumb Navigation */}
      <div className="w-full bg-canvas border-b border-border-ui py-4">
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-text-secondary">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onBackToHome();
              }}
              className="hover:text-accent font-medium flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">home</span>
              <span>Home</span>
            </a>
            <span className="text-text-muted">/</span>
            <span className="text-text-primary font-semibold">Demo projects</span>
          </div>

          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              onBackToHome();
            }}
            className="inline-flex items-center gap-1 text-accent hover:text-accent-hover font-semibold transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            <span>Return to main website</span>
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="w-full py-16 md:py-20 border-b border-border-ui bg-surface">
        <div className="max-w-[1200px] mx-auto px-6 text-center flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-elevated border border-border-ui mb-4">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-xs text-text-secondary font-medium">
              Verified Vercel production deployments
            </span>
          </div>

          <h1 className="font-headline text-3xl md:text-5xl font-extrabold text-text-primary tracking-tight max-w-3xl leading-tight mb-4">
            Interactive client demo projects
          </h1>

          <p className="font-body text-base md:text-lg text-text-secondary max-w-2xl leading-relaxed mb-8">
            Experience real, production-ready web applications engineered and hosted on Vercel by Vertrix Solutions. Test live user journeys, responsive mobile flows, and performance benchmarks.
          </p>

          {/* Quick Metrics Bar */}
          <div className="w-full max-w-3xl grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-canvas border border-border-ui text-left">
            <div className="p-3 rounded-xl bg-surface border border-border-ui">
              <span className="text-[11px] text-text-muted font-medium block">Live demos</span>
              <span className="font-mono text-xl font-bold text-accent">2 Projects</span>
              <span className="text-[11px] text-text-secondary block mt-0.5">Vercel hosted</span>
            </div>
            <div className="p-3 rounded-xl bg-surface border border-border-ui">
              <span className="text-[11px] text-text-muted font-medium block">Responsiveness</span>
              <span className="font-mono text-xl font-bold text-success">100%</span>
              <span className="text-[11px] text-text-secondary block mt-0.5">Mobile & desktop</span>
            </div>
            <div className="p-3 rounded-xl bg-surface border border-border-ui">
              <span className="text-[11px] text-text-muted font-medium block">Edge latency</span>
              <span className="font-mono text-xl font-bold text-text-primary">&lt;90ms</span>
              <span className="text-[11px] text-text-secondary block mt-0.5">Global edge CDN</span>
            </div>
            <div className="p-3 rounded-xl bg-surface border border-border-ui">
              <span className="text-[11px] text-text-muted font-medium block">Architecture</span>
              <span className="font-mono text-xl font-bold text-accent">Vite + React</span>
              <span className="text-[11px] text-text-secondary block mt-0.5">Clean UI system</span>
            </div>
          </div>

        </div>
      </section>

      {/* Category Tabs & Project Showcase */}
      <section className="w-full py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 border-b border-border-ui mb-10">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-150 cursor-pointer flex items-center gap-2 ${
                    activeCategory === cat.id
                      ? 'bg-accent text-accent-text font-semibold shadow-sm'
                      : 'bg-surface-elevated hover:bg-canvas text-text-secondary hover:text-text-primary border border-border-ui'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded text-[10px] ${
                      activeCategory === cat.id
                        ? 'bg-white/20 text-accent-text'
                        : 'bg-canvas text-text-muted'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>

            <p className="text-xs text-text-muted font-medium">
              Showing {filteredProjects.length} live {filteredProjects.length === 1 ? 'application' : 'applications'}
            </p>
          </div>

          {/* Project Showcase List (Rich Vertical Cards) */}
          <div className="flex flex-col gap-12">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="rounded-2xl bg-surface border border-border-ui overflow-hidden shadow-sm hover:border-accent/40 transition-all duration-200"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  
                  {/* Left Column: Visual Preview adjusted to photo width and aspect ratio */}
                  <div
                    className={`${
                      project.orientation === 'landscape' ? 'lg:col-span-6' : 'lg:col-span-5'
                    } bg-canvas p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border-ui relative group`}
                  >
                    {project.orientation === 'portrait' ? (
                      /* Smartphone Mockup Frame for Portrait Photo (FreshNest 670x899) */
                      <div className="w-full max-w-[310px] sm:max-w-[330px] mx-auto rounded-[26px] overflow-hidden border-[2px] border-border-ui bg-background shadow-md">
                        {/* Phone Top Status Bar */}
                        <div className="h-7 px-4 bg-surface border-b border-border-ui flex items-center justify-between text-[10px] text-text-muted select-none">
                          <span className="font-semibold text-text-primary text-[10px]">9:41</span>
                          <div className="w-12 h-3 bg-canvas border border-border-ui rounded-full flex items-center justify-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-border-ui" />
                          </div>
                          <div className="flex items-center gap-1 text-[11px]">
                            <span className="material-symbols-outlined text-[13px]">wifi</span>
                            <span className="material-symbols-outlined text-[13px]">battery_full</span>
                          </div>
                        </div>

                        {/* Image Preview with exact 670/899 aspect ratio */}
                        <div className="relative aspect-[670/899] w-full overflow-hidden bg-surface-elevated">
                          <img
                            src={project.image}
                            alt={`${project.title} Mobile Preview`}
                            className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-102"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-text-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2">
                            <button
                              onClick={() => setPreviewProject(project)}
                              className="h-10 px-4 rounded-lg bg-surface text-text-primary text-xs font-semibold shadow-lg hover:bg-surface-elevated transition-colors flex items-center gap-1.5 cursor-pointer"
                            >
                              <span className="material-symbols-outlined text-[16px]">visibility</span>
                              <span>Interactive preview</span>
                            </button>
                          </div>
                        </div>

                        {/* Phone Bottom Home Indicator */}
                        <div className="h-4 bg-surface flex items-center justify-center border-t border-border-ui/60">
                          <div className="w-20 h-1 bg-border-ui rounded-full" />
                        </div>
                      </div>
                    ) : (
                      /* Desktop Browser Mockup Frame for Landscape Photo (Spice Route 1024x485) */
                      <div className="w-full rounded-xl overflow-hidden border border-border-ui bg-background shadow-xs">
                        {/* Browser Mockup Top Bar */}
                        <div className="h-7 px-3 bg-surface border-b border-border-ui flex items-center justify-between text-[11px] text-text-muted select-none">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
                            <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                          </div>
                          <span className="font-mono text-[10px] text-text-secondary truncate max-w-[200px]">
                            {project.domain}
                          </span>
                          <span className="text-[10px] text-accent font-mono font-medium hidden sm:inline">
                            Desktop Web
                          </span>
                        </div>

                        {/* Image Preview with exact 1024/485 aspect ratio */}
                        <div className="relative aspect-[1024/485] w-full overflow-hidden bg-surface-elevated">
                          <img
                            src={project.image}
                            alt={`${project.title} Desktop Preview`}
                            className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-102"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-text-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2">
                            <button
                              onClick={() => setPreviewProject(project)}
                              className="h-10 px-4 rounded-lg bg-surface text-text-primary text-xs font-semibold shadow-lg hover:bg-surface-elevated transition-colors flex items-center gap-1.5 cursor-pointer"
                            >
                              <span className="material-symbols-outlined text-[16px]">visibility</span>
                              <span>Interactive preview</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Operational Location & Status */}
                    <div className="mt-4 pt-4 border-t border-border-ui/80 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5 text-text-secondary">
                        <span className="material-symbols-outlined text-accent text-[15px]">location_on</span>
                        <span>{project.location}</span>
                      </div>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface border border-border-ui text-success font-medium text-[11px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                        Vercel live
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Full Specifications & Actions */}
                  <div
                    className={`${
                      project.orientation === 'landscape' ? 'lg:col-span-6' : 'lg:col-span-7'
                    } p-6 sm:p-8 flex flex-col justify-between`}
                  >
                    <div>
                      {/* Category & Badge */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="px-3 py-1 rounded bg-surface-elevated text-xs font-medium text-accent border border-border-ui">
                            {project.category}
                          </span>
                          <span className="px-2.5 py-1 rounded bg-canvas text-xs font-mono text-text-secondary border border-border-ui">
                            {project.deviceType}
                          </span>
                        </div>
                        <span className="font-mono text-xs text-text-muted">
                          Demo #{index + 1}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <h2 className="font-headline text-2xl font-bold text-text-primary mb-1">
                        {project.title}
                      </h2>
                      <p className="text-xs text-text-secondary font-medium mb-4">
                        {project.tagline}
                      </p>

                      {/* Description */}
                      <p className="font-body text-sm text-text-secondary leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Metric Telemetry Row */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3.5 rounded-xl bg-canvas border border-border-ui mb-6">
                        {project.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="p-2 rounded-lg bg-surface border border-border-ui">
                            <span className="text-[10px] text-text-muted block font-medium">
                              {m.label}
                            </span>
                            <span className="font-mono text-sm sm:text-base font-bold text-text-primary block mt-0.5">
                              {m.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Core Highlights */}
                      <div className="mb-6">
                        <h4 className="text-xs font-semibold text-text-primary mb-2.5 flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-accent text-[16px]">check_circle</span>
                          Key application capabilities
                        </h4>
                        <ul className="grid grid-cols-1 gap-2 font-body text-xs text-text-secondary">
                          {project.highlights.map((item, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technology Stack Pills */}
                      <div className="mb-6">
                        <span className="text-[11px] text-text-muted font-medium block mb-2">
                          Engineering stack:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded bg-canvas font-mono text-xs text-text-secondary border border-border-ui"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons Row */}
                    <div className="pt-6 border-t border-border-ui flex flex-wrap items-center gap-3">
                      {/* Exactly ONE filled accent button per card */}
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-12 px-6 rounded-lg bg-accent text-accent-text font-headline text-xs font-bold hover:bg-accent-hover transition-colors inline-flex items-center justify-center gap-2 shadow-sm"
                      >
                        <span>Open live website</span>
                        <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                      </a>

                      <button
                        onClick={() => setPreviewProject(project)}
                        className="h-12 px-5 rounded-lg bg-surface-elevated hover:bg-canvas border border-border-ui hover:border-accent text-text-primary text-xs font-semibold transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[16px]">devices</span>
                        <span>Interactive preview</span>
                      </button>

                      <button
                        onClick={() => onOpenCaseModal(project.caseKey)}
                        className="h-12 px-4 rounded-lg bg-transparent hover:bg-surface-elevated text-text-secondary hover:text-accent text-xs font-medium transition-colors inline-flex items-center justify-center gap-1.5 cursor-pointer ml-auto"
                      >
                        <span className="material-symbols-outlined text-[16px]">schema</span>
                        <span>View blueprint</span>
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Engineering Value Proposition */}
      <section className="w-full py-16 bg-canvas border-y border-border-ui mt-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-headline text-2xl md:text-3xl font-bold text-text-primary mb-3">
              How Vertrix Solutions builds demo-to-production systems
            </h3>
            <p className="font-body text-sm text-text-secondary">
              Every prototype and demo we deliver adheres strictly to production engineering benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-surface border border-border-ui">
              <div className="w-10 h-10 rounded-xl bg-surface-elevated border border-border-ui flex items-center justify-center text-accent mb-4">
                <span className="material-symbols-outlined text-[20px]">speed</span>
              </div>
              <h4 className="font-headline text-base font-bold text-text-primary mb-2">
                Ultra-fast edge delivery
              </h4>
              <p className="font-body text-xs text-text-secondary leading-relaxed">
                Deployed across global Vercel Edge networks ensuring sub-100ms first-contentful paints and rapid response times even on mobile connections.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface border border-border-ui">
              <div className="w-10 h-10 rounded-xl bg-surface-elevated border border-border-ui flex items-center justify-center text-accent mb-4">
                <span className="material-symbols-outlined text-[20px]">devices</span>
              </div>
              <h4 className="font-headline text-base font-bold text-text-primary mb-2">
                Mobile-first UX ergonomics
              </h4>
              <p className="font-body text-xs text-text-secondary leading-relaxed">
                48px minimum touch targets, intuitive bottom navigation for smartphones, and fluid transitions tailored for real customers on any device.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-surface border border-border-ui">
              <div className="w-10 h-10 rounded-xl bg-surface-elevated border border-border-ui flex items-center justify-center text-accent mb-4">
                <span className="material-symbols-outlined text-[20px]">code</span>
              </div>
              <h4 className="font-headline text-base font-bold text-text-primary mb-2">
                Zero AI slop & clean code
              </h4>
              <p className="font-body text-xs text-text-secondary leading-relaxed">
                Human-crafted component architectures, strict 8px spacing rules, verified color contrast ratios, and modular state management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Conversion CTA Banner */}
      <section className="w-full py-16 md:py-20 bg-surface">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="p-8 md:p-12 rounded-2xl bg-canvas border border-border-ui flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-xs text-accent font-semibold block mb-1">
                Custom engineering engagements
              </span>
              <h3 className="font-headline text-2xl md:text-3xl font-extrabold text-text-primary mb-3">
                Ready to engineer your custom web application?
              </h3>
              <p className="font-body text-sm text-text-secondary leading-relaxed">
                Whether you need a restaurant ordering platform like Spice Route, an e-commerce storefront like FreshNest, or custom enterprise software, we deliver on predictable milestone sprints.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
              <button
                onClick={onBackToHome}
                className="w-full sm:w-auto h-12 px-6 rounded-lg bg-surface-elevated hover:bg-canvas border border-border-ui text-text-secondary hover:text-text-primary text-xs font-semibold transition-colors cursor-pointer"
              >
                Explore all services
              </button>
              <a
                href="#contact"
                onClick={onBackToHome}
                className="w-full sm:w-auto h-12 px-6 rounded-lg bg-accent text-accent-text font-headline text-xs font-bold hover:bg-accent-hover transition-colors inline-flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Request milestone quote</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Device Preview Modal */}
      <LiveDemoPreviewModal
        key={previewProject?.id}
        project={previewProject}
        onClose={() => setPreviewProject(null)}
      />
    </div>
  );
}
