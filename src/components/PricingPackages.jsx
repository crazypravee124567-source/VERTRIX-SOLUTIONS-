import React from 'react';

export default function PricingPackages() {
  const packages = [
    {
      tier: 'Entry tier',
      name: 'Starter website',
      price: '₹7,999',
      features: [
        'One-page responsive website',
        'Business introduction and services',
        'Contact and WhatsApp direct buttons',
        'Basic on-page SEO setup',
        'Fast 3-day turnaround'
      ],
      highlightFast: true,
      popular: false,
      btnText: 'Choose starter'
    },
    {
      tier: 'Growth tier',
      name: 'Business website',
      price: '₹15,000',
      features: [
        'Up to five custom pages',
        'Mobile-first responsive design',
        'Interactive contact & lead form',
        'Social media integration & links',
        'Basic search engine optimization'
      ],
      popular: false,
      btnText: 'Choose business'
    },
    {
      tier: 'High scale',
      name: 'Professional website',
      price: '₹25,000',
      features: [
        'Custom visual design system',
        'Multiple specialized service sections',
        'Lead capture conversion workflows',
        'Google Analytics & tracking setup',
        'Advanced performance & SEO structure'
      ],
      popular: true,
      btnText: 'Select professional'
    },
    {
      tier: 'Commerce',
      name: 'E-commerce website',
      price: '₹35,000',
      features: [
        'Dynamic product catalogue & filters',
        'Shopping cart & checkout workflows',
        'Payment gateway (Razorpay / UPI)',
        'Order management system',
        'Secure administrative dashboard'
      ],
      popular: false,
      btnText: 'Choose commerce'
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-background border-b border-border-ui" id="pricing">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header (No All-Caps) */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-semibold text-accent mb-2">
            Structured investments
          </span>
          <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
            Website development packages
          </h2>
          <p className="font-body text-base text-text-secondary max-w-xl leading-relaxed">
            Transparent investment tiers tailored to businesses of all sizes with zero surprise costs.
          </p>
        </div>

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative p-6 rounded-2xl flex flex-col justify-between transition-colors duration-150 ${
                pkg.popular
                  ? 'bg-surface-elevated border-2 border-accent shadow-lg'
                  : 'bg-surface border border-border-ui hover:border-border-ui/90'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent text-accent-text text-[11px] font-bold shadow-sm">
                  Most popular
                </div>
              )}

              <div>
                <span className="text-xs text-text-secondary font-medium">
                  {pkg.tier}
                </span>
                <h3 className="font-headline text-lg font-bold text-white mt-1">
                  {pkg.name}
                </h3>
                
                <div className="mt-4 mb-6">
                  <span className="font-mono text-3xl font-extrabold text-white">
                    {pkg.price}
                  </span>
                  <span className="text-xs text-text-muted ml-1 font-medium">
                    onwards
                  </span>
                </div>

                <ul className="flex flex-col gap-3 font-body text-xs text-text-secondary">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <span className={`material-symbols-outlined text-[16px] shrink-0 mt-0.5 ${
                        fIdx === 4 && pkg.highlightFast ? 'text-success' : 'text-accent'
                      }`}>
                        {fIdx === 4 && pkg.highlightFast ? 'bolt' : 'check_circle'}
                      </span>
                      <span className={fIdx === 4 && pkg.highlightFast ? 'text-white font-medium' : ''}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pinned Button (No All-Caps) */}
              <div className="pt-6 mt-auto">
                <a
                  className={`w-full h-12 rounded-lg text-center font-headline text-xs font-bold transition-colors duration-150 flex items-center justify-center ${
                    pkg.popular
                      ? 'bg-accent text-accent-text hover:bg-accent-hover shadow-md'
                      : 'bg-surface-elevated hover:bg-surface-elevated/70 border border-border-ui text-white hover:border-accent hover:text-accent'
                  }`}
                  href="#contact"
                >
                  {pkg.btnText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Cost Notice Banner */}
        <div className="mt-8 p-4 rounded-xl bg-surface border border-border-ui flex items-center gap-3">
          <span className="material-symbols-outlined text-accent text-[20px] shrink-0">
            info
          </span>
          <p className="font-body text-xs text-text-secondary leading-relaxed">
            Domain registration, hosting, paid plugins, third-party subscriptions, and payment gateway fees are billed directly at cost unless explicitly bundled.
          </p>
        </div>

      </div>
    </section>
  );
}
