import React from 'react';

export default function AboutStrip() {
  const valueProps = [
    {
      icon: 'devices',
      title: 'Responsive design',
      description: 'Pixel-accurate rendering across mobile viewports, tablets, laptops, and 4K displays with zero layout shift.'
    },
    {
      icon: 'rocket_launch',
      title: 'Scalable architecture',
      description: 'Modular React, Flutter, and Node.js codebases designed for high transaction volume and seamless future upgrades.'
    },
    {
      icon: 'verified',
      title: 'Clear milestone pricing',
      description: 'Documented specifications with fixed deliverable pricing, weekly demo checkpoints, and zero hidden charges.'
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-canvas border-b border-border-ui">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Quote Plate - Vertrix Solutions */}
        <div className="p-8 rounded-2xl bg-surface border border-border-ui mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-12 h-12 rounded-lg bg-surface-elevated border border-border-ui flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-accent text-[26px]">format_quote</span>
            </div>
            <p className="font-headline text-xl md:text-2xl font-semibold text-text-primary tracking-tight leading-snug">
              “Vertrix Solutions partners with businesses to build reliable, high-performance digital products through disciplined engineering and transparent execution.”
            </p>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {valueProps.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-surface border border-border-ui flex flex-col justify-between transition-colors duration-150 hover:border-accent/40"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-elevated border border-border-ui flex items-center justify-center text-accent mb-6">
                  <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                </div>
                <h2 className="font-headline text-lg font-bold text-text-primary mb-2">
                  {item.title}
                </h2>
                <p className="font-body text-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
