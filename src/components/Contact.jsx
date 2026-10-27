import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddr: '',
    phoneNum: '',
    serviceSelect: '',
    projectMessage: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sendError, setSendError] = useState('');

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_wy6cdx7';
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_9fnrv7i';
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'cHIHoXOHeZaETzanE';

  const SERVICE_LABELS = {
    web: 'Website Development (₹7,999+)',
    app: 'Mobile App Development (Flutter / iOS & Android)',
    saas: 'Custom Web Application / SaaS',
    ecommerce: 'E-commerce Website & App',
    maintenance: 'Web & App Maintenance Retainer',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSendError('');

    const serviceLabel = SERVICE_LABELS[formData.serviceSelect] || formData.serviceSelect;

    const templateParams = {
      to_name: 'VetriX Solutions',
      to_email: 'vetrixsolutionscbe@gmail.com',

      from_name: formData.fullName,
      name: formData.fullName,
      user_name: formData.fullName,

      from_email: formData.emailAddr,
      email: formData.emailAddr,
      user_email: formData.emailAddr,
      reply_to: formData.emailAddr,

      phone_number: formData.phoneNum,
      phone: formData.phoneNum,

      service_type: serviceLabel,
      service: serviceLabel,

      message: formData.projectMessage,
      project_details: formData.projectMessage,
    };

    console.log('[EmailJS] Sending with params:', templateParams);

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );
      console.log('[EmailJS] SUCCESS:', result.status, result.text);
      setSubmitted(true);
      setFormData({ fullName: '', emailAddr: '', phoneNum: '', serviceSelect: '', projectMessage: '' });
    } catch (err) {
      console.error('[EmailJS] FAILED — full error:', err);
      console.error('[EmailJS] Status:', err?.status, '| Text:', err?.text);
      setSendError(
        `Send failed (${err?.text || err?.message || 'unknown error'}). Email us directly: vetrixsolutionscbe@gmail.com`
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="w-full py-16 md:py-24 bg-background border-b border-border-ui" id="contact">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header (No All-Caps) */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-semibold text-accent mb-2">
            Direct transmission
          </span>
          <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight mb-3">
            Initiate project scoping
          </h2>
          <p className="font-body text-base text-text-secondary max-w-xl leading-relaxed">
            Connect directly with our engineering team in Coimbatore for technical scoping and estimates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Specifications (5 cols) */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-surface border border-border-ui flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <img 
                src="/logo-icon.png" 
                alt="VetriX Solutions Logo" 
                className="w-10 h-10 rounded-xl object-cover shadow-[0_4px_12px_rgba(0,0,0,0.08)]" 
              />
              <div>
                <h3 className="font-headline text-lg font-bold text-text-primary">VetriX Solutions</h3>
                <p className="text-xs text-accent font-medium">
                  Engineering studio
                </p>
              </div>
            </div>

            <p className="font-body text-sm text-text-secondary leading-relaxed">
              We deliver production-ready codebases with dedicated post-launch support and responsive communication.
            </p>

            <div className="flex flex-col gap-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-surface-elevated border border-border-ui flex items-center justify-center shrink-0 text-accent">
                  <span className="material-symbols-outlined text-[20px]">location_on</span>
                </div>
                <div>
                  <span className="text-xs text-text-muted font-medium block">
                    Headquarters
                  </span>
                  <p className="font-body text-sm text-text-primary font-medium">Coimbatore, Tamil Nadu, India</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-surface-elevated border border-border-ui flex items-center justify-center shrink-0 text-accent">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </div>
                <div>
                  <span className="text-xs text-text-muted font-medium block">
                    Direct email
                  </span>
                  <a
                    className="font-body text-sm text-accent hover:underline"
                    href="mailto:vetrixsolutionscbe@gmail.com"
                  >
                    vetrixsolutionscbe@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-surface-elevated border border-border-ui flex items-center justify-center shrink-0 text-accent">
                  <span className="material-symbols-outlined text-[20px]">call</span>
                </div>
                <div>
                  <span className="text-xs text-text-muted font-medium block">
                    Phone &amp; WhatsApp
                  </span>
                  <a
                    className="font-body text-sm text-accent hover:underline font-mono"
                    href="tel:+916379130164"
                  >
                    +91 63791 30164
                  </a>
                </div>
              </div>

           
            </div>

            {/* Direct Channel Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border-ui/60">
              <a
                className="h-10 px-4 rounded-lg bg-surface-elevated hover:bg-surface-elevated/70 border border-border-ui text-text-primary text-xs font-medium inline-flex items-center gap-2 transition-colors duration-150"
                href="https://wa.me/916379130164?text=Hi%20Vertrix%20Solutions,%20I'd%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[16px] text-success">chat</span>
                WhatsApp: +91 63791 30164
              </a>
              <a
                className="h-10 px-4 rounded-lg bg-surface-elevated hover:bg-surface-elevated/70 border border-border-ui text-text-primary text-xs font-medium inline-flex items-center gap-2 transition-colors duration-150"
                href="tel:+916379130164"
              >
                <span className="material-symbols-outlined text-[16px] text-accent">call</span>
                Quick call
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form (7 cols) */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-surface border border-border-ui flex flex-col gap-6">
            <div>
              <h3 className="font-headline text-xl font-bold text-text-primary">Send a project enquiry</h3>
              <p className="font-body text-xs text-text-secondary mt-1">
                Fill out the technical requirements below and our lead engineer will respond within 24 hours.
              </p>
            </div>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-text-secondary font-medium" htmlFor="fullName">
                    Full name *
                  </label>
                  <input
                    className="w-full h-12 px-4 rounded-lg bg-surface-subtle text-text-primary placeholder:text-text-muted border border-border-ui focus:outline-none focus:ring-2 focus:ring-accent transition-colors text-sm"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Ramesh Kumar"
                    required
                    type="text"
                  />
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-text-secondary font-medium" htmlFor="emailAddr">
                    Email address *
                  </label>
                  <input
                    className="w-full h-12 px-4 rounded-lg bg-surface-subtle text-text-primary placeholder:text-text-muted border border-border-ui focus:outline-none focus:ring-2 focus:ring-accent transition-colors text-sm"
                    id="emailAddr"
                    name="emailAddr"
                    value={formData.emailAddr}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    required
                    type="email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone Number */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-text-secondary font-medium" htmlFor="phoneNum">
                    Phone number *
                  </label>
                  <div className="flex items-center rounded-lg bg-canvas border border-border-ui overflow-hidden">
                    <span className="px-3.5 text-text-secondary font-mono text-xs bg-surface-elevated h-12 flex items-center border-r border-border-ui font-medium">
                      +91
                    </span>
                    <input
                      className="w-full h-12 px-4 bg-transparent text-text-primary placeholder:text-text-muted focus:outline-none text-sm"
                      id="phoneNum"
                      name="phoneNum"
                      value={formData.phoneNum}
                      onChange={handleChange}
                      placeholder="98765 43210"
                      required
                      type="tel"
                    />
                  </div>
                </div>

                {/* Service Requested */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-text-secondary font-medium" htmlFor="serviceSelect">
                    Capability requested *
                  </label>
                  <select
                    className="w-full h-12 px-4 rounded-lg bg-surface-subtle text-text-primary border border-border-ui focus:outline-none focus:ring-2 focus:ring-accent transition-colors text-sm"
                    id="serviceSelect"
                    name="serviceSelect"
                    value={formData.serviceSelect}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select a capability...</option>
                    <option value="web">Website development (₹7,999+)</option>
                    <option value="app">Mobile app development (Flutter / iOS &amp; Android)</option>
                    <option value="saas">Custom web application / SaaS</option>
                    <option value="ecommerce">E-commerce website &amp; app</option>
                    <option value="maintenance">Web &amp; app maintenance retainer</option>
                  </select>
                </div>
              </div>

              {/* Project Details */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-text-secondary font-medium" htmlFor="projectMessage">
                  Project scope &amp; target timeline *
                </label>
                <textarea
                  className="w-full p-4 rounded-lg bg-surface-subtle text-text-primary placeholder:text-text-muted border border-border-ui focus:outline-none focus:ring-2 focus:ring-accent transition-colors resize-none text-sm"
                  id="projectMessage"
                  name="projectMessage"
                  value={formData.projectMessage}
                  onChange={handleChange}
                  placeholder="Outline your feature objectives, estimated target launch date, and any reference URLs..."
                  required
                  rows={4}
                />
              </div>

              {/* Submit Button */}
              <button
                className="w-full h-12 rounded-lg bg-accent text-accent-text font-headline text-sm font-bold hover:bg-accent-hover transition-colors duration-150 inline-flex items-center justify-center gap-2 mt-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-60 disabled:cursor-not-allowed"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-accent-text/30 border-t-accent-text rounded-full animate-spin" />
                    <span>Sending…</span>
                  </>
                ) : (
                  <>
                    <span>Transmit project enquiry</span>
                    <span className="material-symbols-outlined text-[18px]">send</span>
                  </>
                )}
              </button>

              {/* Success Notification */}
              {submitted && (
                <div className="p-4 rounded-lg bg-surface-subtle border border-success text-success flex items-center gap-3">
                  <span className="material-symbols-outlined text-[20px] shrink-0">
                    check_circle
                  </span>
                  <span className="font-body text-xs font-medium">
                    Enquiry transmitted successfully. Our Coimbatore lead engineer will review and respond within 24 business hours.
                  </span>
                </div>
              )}

              {/* Error Notification */}
              {sendError && (
                <div className="p-4 rounded-lg bg-surface-subtle border border-error text-error flex items-center gap-3">
                  <span className="material-symbols-outlined text-[20px] shrink-0">
                    error
                  </span>
                  <span className="font-body text-xs font-medium">{sendError}</span>
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
