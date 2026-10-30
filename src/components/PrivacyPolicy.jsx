/* Designed & developed by Vertrix Solutions */
import React, { useEffect } from 'react';

export default function PrivacyPolicy({ onClose }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const sections = [
    {
      title: 'Who We Are',
      content: (
        <>
          <p>
            VetriX Solutions ("VetriX", "we", "us", "our") is an IT and web services business based in
            Coimbatore, Tamil Nadu, India, offering website development, mobile app development,
            maintenance, logo design and SEO services.
          </p>
          <div className="mt-3 p-4 rounded-xl bg-canvas border border-border-ui flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-xs text-text-secondary">
              <span className="material-symbols-outlined text-accent text-[15px]">mail</span>
              <a href="mailto:vetrixsolutionscbe@gmail.com" className="hover:text-accent transition-colors">
                vetrixsolutionscbe@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-xs text-text-secondary">
              <span className="material-symbols-outlined text-accent text-[15px]">call</span>
              <a href="tel:+916379130164" className="hover:text-accent transition-colors font-mono">
                +91 63791 30164
              </a>
            </div>
            <div className="flex items-center gap-2 text-xs text-text-secondary">
              <span className="material-symbols-outlined text-accent text-[15px]">location_on</span>
              <span>Coimbatore, Tamil Nadu, India</span>
            </div>
          </div>
          <p className="mt-3">
            This policy explains how we collect, use, store, share and protect personal data of
            visitors to our website and of people who contact us or enquire about our services.
            Personal data that we handle on behalf of our clients while building or maintaining
            their projects is governed by a separate Data Processing Agreement, not by this policy.
          </p>
        </>
      ),
    },
    {
      title: 'Personal Data We Collect',
      content: (
        <ul className="flex flex-col gap-2">
          {[
            { icon: 'person', label: 'Information you give us', desc: 'Name, phone number, email address, business name, project requirements and any message you send through our contact form, email, phone or WhatsApp.' },
            { icon: 'receipt_long', label: 'Business and billing information', desc: 'Company name, address, GST number (if applicable), and payment or invoice details for clients.' },
            { icon: 'analytics', label: 'Technical information (automatic)', desc: 'IP address, browser type, device type, pages visited, time spent and referring website, collected through cookies and analytics tools.' },
          ].map(({ icon, label, desc }) => (
            <li key={label} className="flex gap-3 p-3 rounded-lg bg-canvas border border-border-ui">
              <span className="material-symbols-outlined text-accent text-[18px] mt-0.5 shrink-0">{icon}</span>
              <div>
                <p className="text-xs font-semibold text-text-primary mb-0.5">{label}</p>
                <p className="text-xs text-text-secondary leading-relaxed">{desc}</p>
              </div>
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: 'Why We Use Your Data',
      content: (
        <ul className="flex flex-col gap-1.5">
          {[
            'To respond to enquiries and prepare quotations',
            'To provide, deliver, maintain and support our services',
            'To raise invoices, receive payments and keep accounting records',
            'To communicate about projects, updates and support',
            'To improve our website and services',
            'To send service or promotional messages, only where you have agreed',
            'To comply with legal, tax and regulatory obligations',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-xs text-text-secondary">
              <span className="material-symbols-outlined text-accent text-[14px] mt-0.5 shrink-0">check_circle</span>
              {item}
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: 'Consent',
      content: (
        <p>
          Where the law requires consent, we collect it before processing your data, for a clear
          and specific purpose. You may withdraw consent at any time by writing to us. Withdrawal
          will not affect processing already done, and it may mean we can no longer provide
          certain services.
        </p>
      ),
    },
    {
      title: 'Cookies and Analytics',
      content: (
        <>
          <p>
            Our website uses cookies and similar technologies to make the site work, remember
            preferences and understand traffic. You can disable cookies in your browser settings,
            but some features may not work properly.
          </p>
          <p className="mt-2">
            Third-party tools we use or may use include analytics platforms, hosting providers,
            and payment gateways such as Razorpay.
          </p>
        </>
      ),
    },
    {
      title: 'Sharing of Data',
      content: (
        <>
          <p className="mb-3">We do not sell your personal data. We may share it only with:</p>
          <ul className="flex flex-col gap-1.5">
            {[
              'Service providers who help us operate (hosting, email, analytics, payment processors) under confidentiality and security obligations',
              'Professional advisers such as accountants and lawyers',
              'Government or legal authorities when required by law',
              'A successor business in case of merger or sale, with notice to you',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs text-text-secondary">
                <span className="material-symbols-outlined text-accent text-[14px] mt-0.5 shrink-0">shield</span>
                {item}
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: 'Storage, Security and Retention',
      content: (
        <p>
          We use reasonable security safeguards including access controls, encrypted storage of
          credentials, two-factor authentication on key accounts and regular backups. No system
          is completely secure, and we cannot guarantee absolute security. We keep personal data
          only as long as needed for the purposes above or as required by law (for example, tax
          and accounting records). After that, we delete or anonymise it.
        </p>
      ),
    },
    {
      title: 'Your Rights',
      content: (
        <>
          <p className="mb-3">
            Subject to applicable law, including the Digital Personal Data Protection Act, 2023,
            you may:
          </p>
          <ul className="flex flex-col gap-1.5">
            {[
              'Request a summary of the personal data we hold about you and how it is used',
              'Ask us to correct, complete or update your data',
              'Ask us to erase your data when it is no longer needed',
              'Withdraw consent previously given',
              'Nominate another person to exercise your rights in case of death or incapacity',
              'Raise a grievance with us and, if unresolved, approach the Data Protection Board of India',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs text-text-secondary">
                <span className="material-symbols-outlined text-accent text-[14px] mt-0.5 shrink-0">verified_user</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-text-secondary">
            To exercise any right, email{' '}
            <a href="mailto:vetrixsolutionscbe@gmail.com" className="text-accent hover:underline">
              vetrixsolutionscbe@gmail.com
            </a>{' '}
            with the subject <span className="font-mono bg-canvas px-1 rounded">"Privacy Request"</span>.
            We aim to respond within 30 days.
          </p>
        </>
      ),
    },
    {
      title: 'Data Breach',
      content: (
        <p>
          If a personal data breach affecting you occurs, we will notify you and the relevant
          authority as required by law.
        </p>
      ),
    },
    {
      title: 'Third-Party Links',
      content: (
        <p>
          Our website may link to other websites. We are not responsible for their privacy
          practices. We recommend reviewing the privacy policy of any third-party site you visit.
        </p>
      ),
    },
    {
      title: 'Changes to This Policy',
      content: (
        <p>
          We may update this policy from time to time. The latest version will always be posted
          on this page with the updated date.
        </p>
      ),
    },
    {
      title: 'Contact and Grievances',
      content: (
        <div className="p-4 rounded-xl bg-canvas border border-border-ui flex flex-col gap-2">
          <p className="text-xs font-semibold text-text-primary">Grievance Officer</p>
          <div className="flex items-center gap-2 text-xs text-text-secondary">
            <span className="material-symbols-outlined text-accent text-[15px]">person</span>
            <span>Kaamesh Mittal</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-text-secondary">
            <span className="material-symbols-outlined text-accent text-[15px]">mail</span>
            <a href="mailto:pskmittal23@gmail.com" className="hover:text-accent transition-colors">
              pskmittal23@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 text-xs text-text-secondary">
            <span className="material-symbols-outlined text-accent text-[15px]">call</span>
            <a href="tel:+919360275704" className="hover:text-accent transition-colors font-mono">
              +91 93602 75704
            </a>
          </div>
        </div>
      ),
    },
  ];

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="Privacy Policy"
    >
      {/* Dimmed overlay */}
      <div
        className="absolute inset-0 bg-text-primary/30 backdrop-blur-xs"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal panel */}
      <div className="relative z-10 w-full sm:max-w-[450px] md:max-w-2xl max-h-[92vh] sm:max-h-[88vh] flex flex-col rounded-t-2xl sm:rounded-2xl bg-surface border border-border-ui shadow-2xl overflow-hidden">

        {/* Sticky header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border-ui bg-surface shrink-0">
          <div>
            <h2 className="font-headline text-base font-bold text-text-primary">Privacy Policy</h2>
            <p className="text-[11px] text-text-muted mt-0.5">
              Effective 30 Oct 2026 · Last updated 31 Oct 2026
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center bg-surface-elevated border border-border-ui text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
            aria-label="Close privacy policy"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1 px-6 py-6 flex flex-col gap-7">

          {/* Intro note */}
          <p className="font-body text-xs text-text-secondary leading-relaxed">
            VetriX Solutions is committed to protecting your personal data. This policy explains
            how we collect, use, store, share and protect your information when you visit our
            website or contact us about our services.
          </p>

          {sections.map(({ title, content }) => (
            <div key={title}>
              <h3 className="font-headline text-sm font-bold text-text-primary mb-2 flex items-center gap-2">
                <span className="w-1 h-4 rounded-full bg-accent inline-block shrink-0" />
                {title}
              </h3>
              <div className="font-body text-xs text-text-secondary leading-relaxed pl-3">
                {content}
              </div>
            </div>
          ))}

          {/* Bottom spacer */}
          <div className="pb-2" />
        </div>

        {/* Sticky footer */}
        <div className="border-t border-border-ui px-6 py-4 bg-surface shrink-0 flex items-center justify-between gap-4">
          <p className="text-[11px] text-text-muted">
            © {new Date().getFullYear()} VetriX Solutions. All rights reserved.
          </p>
          <button
            onClick={onClose}
            className="h-9 px-5 rounded-lg bg-accent hover:bg-accent-hover text-accent-text text-xs font-bold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

