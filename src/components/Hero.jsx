import React from 'react';

export default function Hero({ onExploreDemos }) {
  const techStack = ['Next.js 14', 'Flutter', 'React', 'Node.js', 'PostgreSQL', 'Tailwind'];

  return (
    <section className="relative w-full pb-20 md:pb-28 bg-background border-b border-border-ui overflow-hidden" id="home">
      {/* Subtle radial ambient grid overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30" 
        style={{
          backgroundImage: 'radial-gradient(rgba(37, 99, 235, 0.20) 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 20%, #000 70%, transparent 100%)'
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & High-Growth Startup Focus (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-border-ui mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-xs text-text-secondary font-medium">
                Engineering studio for high-growth startups &amp; brands
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold text-text-primary tracking-tight leading-[1.12] mb-5">
              We engineer high-converting <span className="text-accent underline decoration-accent/40 underline-offset-8">websites &amp; apps</span> for ambitious startups
            </h1>

            {/* Concise Benefit Subhead */}
            <p className="font-body text-base md:text-lg text-text-secondary leading-relaxed max-w-xl mb-8">
              From zero-to-one MVP to enterprise scale. VetriX Solutions designs and ships blazing-fast web platforms and Flutter mobile apps with dedicated weekly sprint velocity.
            </p>

            {/* Exactly ONE Primary Button + Secondary Action */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-4 mb-10 w-full sm:w-auto">
              <a
                className="w-full sm:w-auto h-12 px-6 rounded-xl bg-accent text-accent-text font-headline text-sm font-bold hover:bg-accent-hover transition-colors duration-150 inline-flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-accent shadow-[0_4px_18px_rgba(37,99,235,0.30)] cursor-pointer"
                href="#contact"
              >
                <span>Start your project</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>

              {onExploreDemos ? (
                <button
                  onClick={onExploreDemos}
                  className="w-full sm:w-auto h-12 px-5 rounded-xl bg-surface-elevated hover:bg-canvas border border-border-ui hover:border-accent text-text-primary text-xs font-semibold transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <span>Explore live demos (2)</span>
                  <span className="material-symbols-outlined text-[16px]">devices</span>
                </button>
              ) : (
                <a
                  className="text-sm font-medium text-text-primary hover:text-accent transition-colors inline-flex items-center gap-2 py-2"
                  href="#work"
                >
                  <span>View case studies</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
                </a>
              )}
            </div>

            {/* Trust Metrics / Social Proof */}
            <div className="pt-6 border-t border-border-ui/80 w-full max-w-xl grid grid-cols-3 gap-6">
              <div>
                <span className="font-headline text-2xl md:text-3xl font-extrabold text-text-primary block tracking-tight">
                  50+
                </span>
                <span className="text-xs text-text-secondary font-medium mt-1 block">
                  Products shipped
                </span>
              </div>
              <div>
                <span className="font-headline text-2xl md:text-3xl font-extrabold text-accent block tracking-tight">
                  3-4 wks
                </span>
                <span className="text-xs text-text-secondary font-medium mt-1 block">
                  Average MVP launch
                </span>
              </div>
              <div>
                <span className="font-headline text-2xl md:text-3xl font-extrabold text-success block tracking-tight">
                  99.98%
                </span>
                <span className="text-xs text-text-secondary font-medium mt-1 block">
                  Production uptime
                </span>
              </div>
            </div>

            {/* Tech Standards Strip */}
            <div className="mt-8 flex flex-wrap items-center gap-2">
              <span className="text-xs text-text-muted font-medium mr-2">Core stack:</span>
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-surface-elevated/70 border border-border-ui/80 font-mono text-xs text-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>

          {/* Right Column: Bento Stats Grid Card */}
          <div className="lg:col-span-5 flex justify-center items-center z-10 w-full py-4">
            <div className="w-full max-w-full sm:max-w-[450px] bg-surface rounded-[16px] p-[12px] border border-border-ui shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
              <div className="grid grid-cols-2 gap-[8px]">
                
                {/* Block 1 (full width) — Dark uptime stat bar */}
                <div className="col-span-2 bg-surface-elevated rounded-xl p-[16px] flex items-center justify-between border border-border-ui/60">
                  <div>
                    <span className="text-xs font-medium text-text-secondary block mb-1">Active uptime</span>
                    <span className="text-[28px] font-bold text-success leading-none tracking-tight font-mono block">
                      99.98%
                    </span>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-success/15 border border-success/30 text-success text-xs font-mono font-semibold">
                    +0.4% ↑
                  </div>
                </div>

                {/* Block 2 (left half) — Products shipped */}
                <div className="col-span-1 bg-surface-elevated rounded-xl p-[12px] border border-border-ui/60">
                  <span className="text-xs text-text-secondary font-medium block mb-1">Products shipped</span>
                  <span className="text-[22px] font-bold text-text-primary leading-tight font-headline block">
                    50+
                  </span>
                </div>

                {/* Block 3 (right half) — Avg MVP */}
                <div className="col-span-1 bg-surface-elevated rounded-xl p-[12px] border border-border-ui/60">
                  <span className="text-xs text-text-secondary font-medium block mb-1">Avg. MVP</span>
                  <span className="text-[22px] font-bold text-accent leading-tight font-headline block">
                    3–4 wks
                  </span>
                </div>

                {/* Block 4 (full width) — Testimonial strip */}
                <div className="col-span-2 bg-canvas rounded-xl py-[12px] px-[16px] flex items-center gap-3 border border-border-ui">
                  <div className="w-9 h-9 rounded-full bg-accent text-accent-text flex items-center justify-center font-bold text-xs shrink-0 font-headline shadow-sm">
                    AK
                  </div>
                  <p className="text-sm font-medium text-text-primary leading-snug">
                    &ldquo;Delivered our MVP in 3 weeks. Incredible.&rdquo;
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
