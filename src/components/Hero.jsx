import React, { useState } from 'react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('web');

  const techStack = ['Next.js 14', 'Flutter', 'React', 'Node.js', 'PostgreSQL', 'Tailwind'];

  return (
    <section className="relative w-full pb-20 md:pb-28 bg-background border-b border-border-ui overflow-hidden" id="home">
      {/* Subtle radial ambient grid overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-50" 
        style={{
          backgroundImage: 'radial-gradient(#DFD3C0 1.5px, transparent 1.5px)',
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
            <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold text-white tracking-tight leading-[1.12] mb-5">
              We engineer high-converting <span className="text-accent underline decoration-border-wine/40 underline-offset-8">websites &amp; apps</span> for ambitious startups
            </h1>

            {/* Concise Benefit Subhead */}
            <p className="font-body text-base md:text-lg text-text-secondary leading-relaxed max-w-xl mb-8">
              From zero-to-one MVP to enterprise scale. Vertrix Solutions designs and ships blazing-fast web platforms and Flutter mobile apps with dedicated weekly sprint velocity.
            </p>

            {/* Exactly ONE Primary Button + ONE Secondary Link */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-10 w-full sm:w-auto">
              <a
                className="w-full sm:w-auto h-12 px-6 rounded-xl bg-accent text-accent-text font-headline text-sm font-bold hover:bg-accent-hover transition-colors duration-150 inline-flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-accent shadow-[0_4px_16px_rgba(110,21,40,0.22)]"
                href="#contact"
              >
                <span>Start your project</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>

              <a
                className="text-sm font-medium text-white hover:text-accent transition-colors inline-flex items-center gap-2 py-2"
                href="#work"
              >
                <span>View case studies</span>
                <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
              </a>
            </div>

            {/* Trust Metrics / Social Proof */}
            <div className="pt-6 border-t border-border-ui/80 w-full max-w-xl grid grid-cols-3 gap-6">
              <div>
                <span className="font-headline text-2xl md:text-3xl font-extrabold text-white block tracking-tight">
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

          {/* Right Column: Interactive Startup Product Console & Showcase (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center z-10">
            <div className="w-full max-w-[480px] rounded-2xl bg-surface border border-border-ui shadow-[0_16px_40px_rgba(110,21,40,0.08)] overflow-hidden transition-all duration-200">
              
              {/* Console Window Header with Interactive Switcher */}
              <div className="px-4 py-3 bg-surface-elevated border-b border-border-ui flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-error/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-success/80" />
                  <span className="font-mono text-[11px] text-text-secondary ml-2 hidden sm:inline-block">
                    vertrix.engine/v2.4
                  </span>
                </div>

                {/* View Switcher: Web vs Mobile */}
                <div className="flex items-center p-1 rounded-lg bg-canvas border border-border-ui text-xs">
                  <button
                    onClick={() => setActiveTab('web')}
                    className={`px-2.5 py-1 rounded-md font-medium text-xs transition-colors ${
                      activeTab === 'web'
                        ? 'bg-accent text-accent-text font-semibold shadow-sm'
                        : 'text-text-secondary hover:text-white'
                    }`}
                  >
                    Web app
                  </button>
                  <button
                    onClick={() => setActiveTab('mobile')}
                    className={`px-2.5 py-1 rounded-md font-medium text-xs transition-colors ${
                      activeTab === 'mobile'
                        ? 'bg-accent text-accent-text font-semibold shadow-sm'
                        : 'text-text-secondary hover:text-white'
                    }`}
                  >
                    Mobile app
                  </button>
                </div>
              </div>

              {/* View 1: Web Application SaaS Dashboard */}
              {activeTab === 'web' && (
                <div className="p-6 flex flex-col gap-5">
                  {/* Fake Browser URL bar */}
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-canvas border border-border-ui text-xs text-text-secondary font-mono">
                    <span className="material-symbols-outlined text-[14px] text-success">lock</span>
                    <span className="text-text-primary">app.vertrix.io</span>
                    <span className="text-text-muted">/live-analytics</span>
                  </div>

                  {/* Top Analytics Metrics */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-canvas border border-border-ui">
                      <span className="text-[11px] text-text-muted font-medium block">Edge response time</span>
                      <div className="flex items-baseline gap-1.5 mt-1">
                        <span className="font-mono text-xl font-bold text-white">38ms</span>
                        <span className="text-[10px] text-success font-semibold font-mono">Optimal</span>
                      </div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-canvas border border-border-ui">
                      <span className="text-[11px] text-text-muted font-medium block">Active users</span>
                      <div className="flex items-baseline gap-1.5 mt-1">
                        <span className="font-mono text-xl font-bold text-accent">48,920</span>
                        <span className="text-[10px] text-success font-semibold font-mono">+21.8%</span>
                      </div>
                    </div>
                  </div>

                  {/* Performance Chart Simulation (SVG curve) */}
                  <div className="p-4 rounded-xl bg-canvas border border-border-ui">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent" />
                        <span className="text-xs font-semibold text-white">Live traffic telemetry</span>
                      </div>
                      <span className="text-[11px] font-mono text-text-muted">Real-time</span>
                    </div>

                    <div className="h-28 w-full relative">
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 320 80" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#6E1528" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#6E1528" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        {/* Area */}
                        <path
                          d="M0 65 Q 40 50, 80 55 T 160 35 T 240 25 T 320 10 L 320 80 L 0 80 Z"
                          fill="url(#chartGradient)"
                        />
                        {/* Line */}
                        <path
                          d="M0 65 Q 40 50, 80 55 T 160 35 T 240 25 T 320 10"
                          fill="none"
                          stroke="#6E1528"
                          strokeWidth="2.5"
                        />
                        {/* Indicator Circle */}
                        <circle cx="320" cy="10" r="4" fill="#6E1528" className="animate-ping" />
                        <circle cx="320" cy="10" r="3" fill="#6E1528" />
                      </svg>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-border-ui/60 text-[10px] font-mono text-text-muted">
                      <span>00:00</span>
                      <span>06:00</span>
                      <span>12:00</span>
                      <span>18:00</span>
                      <span className="text-accent font-semibold">Now (42ms)</span>
                    </div>
                  </div>

                  {/* Infrastructure Status Row */}
                  <div className="p-3 rounded-xl bg-surface-elevated border border-border-ui flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-success text-[18px]">verified</span>
                      <span className="text-xs text-white font-medium">Next.js edge cluster</span>
                    </div>
                    <span className="font-mono text-xs text-text-secondary">0.38s latency</span>
                  </div>
                </div>
              )}

              {/* View 2: Mobile Application Device Simulation */}
              {activeTab === 'mobile' && (
                <div className="p-6 flex flex-col items-center">
                  <div className="w-full max-w-[320px] rounded-3xl bg-canvas border-2 border-border-ui p-4 shadow-xl flex flex-col gap-4">
                    
                    {/* Phone Status Bar */}
                    <div className="flex items-center justify-between px-1 text-[11px] font-mono text-text-muted">
                      <span>9:41</span>
                      <div className="w-16 h-4 rounded-full bg-surface-elevated mx-auto" />
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px]">wifi</span>
                        <span className="material-symbols-outlined text-[13px]">battery_full</span>
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="flex items-center justify-between pt-1">
                      <div>
                        <span className="text-[11px] text-text-muted block">Welcome back</span>
                        <span className="font-headline text-sm font-bold text-white">Alex Rivera</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent/30 to-surface-elevated border border-accent/40 flex items-center justify-center text-accent text-xs font-bold">
                        AR
                      </div>
                    </div>

                    {/* App Health Card */}
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-surface to-surface-elevated border border-border-ui">
                      <span className="text-[10px] text-text-secondary font-medium">Crash-free app sessions</span>
                      <span className="font-mono text-2xl font-extrabold text-white block mt-1">99.95%</span>
                      <div className="flex items-center gap-1.5 mt-2">
                        <span className="px-2 py-0.5 rounded-full bg-success/20 text-success text-[10px] font-semibold font-mono">
                          Zero runtime errors
                        </span>
                      </div>
                    </div>

                    {/* Quick App Actions */}
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-2.5 rounded-xl bg-surface border border-border-ui flex flex-col items-center gap-1">
                        <span className="material-symbols-outlined text-accent text-[18px]">speed</span>
                        <span className="text-[10px] text-text-secondary font-medium">60 FPS</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-surface border border-border-ui flex flex-col items-center gap-1">
                        <span className="material-symbols-outlined text-success text-[18px]">insights</span>
                        <span className="text-[10px] text-text-secondary font-medium">Telemetry</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-surface border border-border-ui flex flex-col items-center gap-1">
                        <span className="material-symbols-outlined text-white text-[18px]">sync</span>
                        <span className="text-[10px] text-text-secondary font-medium">Cloud DB</span>
                      </div>
                    </div>

                    {/* Recent Deployment Item */}
                    <div className="p-2.5 rounded-xl bg-surface border border-border-ui flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-surface-elevated flex items-center justify-center text-accent">
                          <span className="material-symbols-outlined text-[16px]">rocket_launch</span>
                        </div>
                        <div>
                          <span className="text-[11px] font-medium text-white block">App Store &amp; Play Store build</span>
                          <span className="text-[9px] text-text-muted">Deployed 2m ago</span>
                        </div>
                      </div>
                      <span className="font-mono text-xs font-bold text-success">Active</span>
                    </div>

                    {/* Mobile App Bottom Pill */}
                    <div className="pt-2 text-center">
                      <span className="text-[10px] font-mono text-text-muted">
                        Flutter 60fps native engine
                      </span>
                    </div>

                  </div>
                </div>
              )}

              {/* Bottom Console Status Bar */}
              <div className="px-6 py-3.5 bg-canvas border-t border-border-ui flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success" />
                  <span className="text-text-secondary font-medium">
                    Continuous CI/CD pipeline
                  </span>
                </div>
                <span className="font-mono text-accent font-semibold">
                  Zero downtime
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
