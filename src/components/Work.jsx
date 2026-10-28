import React from 'react';
import { demoProjects } from '../data/demoProjects';

export default function Work() {
  return (
    <section className="w-full py-16 md:py-24 bg-canvas border-b border-border-ui" id="work">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
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

        {/* Live Vercel Demos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {demoProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-surface border border-border-ui overflow-hidden flex flex-col justify-between transition-colors duration-150 hover:border-accent/40 group shadow-xs"
            >
              {/* Compact Preview Image — 16:9 */}
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-canvas border-b border-border-ui">
                <img
                  src={project.image}
                  alt={`${project.title} Preview`}
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-102"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-surface/90 backdrop-blur-xs border border-border-ui text-[10px] font-mono text-text-secondary shadow-xs">
                  {project.domain}
                </div>
              </div>

              {/* Details */}
              <div className="p-6 md:p-7 flex flex-col flex-1 justify-between">
                <div>
                  {/* Category & Live Status */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded bg-surface-elevated text-xs text-accent font-semibold border border-border-ui">
                      {project.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-success font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                      Live on Vercel
                    </span>
                  </div>

                  <h3 className="font-headline text-xl font-bold text-text-primary mb-1 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-accent font-medium mb-3">
                    {project.subtitle}
                  </p>
                  <p className="font-body text-sm text-text-secondary leading-relaxed line-clamp-3 mb-5">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded bg-canvas font-mono text-xs text-text-secondary border border-border-ui"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Live Metric */}
                  <div className="p-3.5 rounded-xl bg-canvas border border-border-ui flex items-center justify-between mb-5">
                    <div>
                      <span className="text-[11px] text-text-muted font-medium block">
                        Verified metric
                      </span>
                      <span className="font-mono text-xl font-bold text-accent">
                        {project.metrics[0].value}
                      </span>
                    </div>
                    <span className="font-body text-xs text-text-secondary text-right font-medium max-w-[180px]">
                      {project.metrics[0].label}
                    </span>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-3 border-t border-border-ui">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-11 rounded-lg bg-accent hover:bg-accent-hover text-accent-text text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>Live Demo</span>
                    <span className="material-symbols-outlined text-[15px]">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
