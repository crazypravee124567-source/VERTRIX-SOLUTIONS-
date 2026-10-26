import React, { useEffect } from 'react';
import { caseStudiesData } from '../data/caseStudies';

export default function CaseStudyModal({ caseKey, onClose }) {
  const data = caseKey ? caseStudiesData[caseKey] : null;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (caseKey) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseKey, onClose]);

  if (!data) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-canvas/80 backdrop-blur-sm transition-opacity duration-200"
    >
      {/* Backdrop Click Dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-surface border border-border-ui shadow-2xl p-6 md:p-8 flex flex-col gap-6 z-10"
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b border-border-ui pb-5">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded bg-surface-elevated text-accent text-xs font-medium border border-border-ui">
                {data.sector}
              </span>
              <span className="text-xs text-success flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-success" />
                <span>{data.timeline}</span>
              </span>
            </div>
            <h3 className="font-headline text-2xl font-bold text-white mt-1" id="modalTitle">
              {data.title}
            </h3>
            <p className="font-body text-sm text-text-secondary">
              {data.subtitle}
            </p>
          </div>

          {/* Close Button */}
          <button
            aria-label="Close dialog"
            className="w-10 h-10 rounded-lg bg-surface-elevated hover:bg-surface-elevated/70 text-text-secondary hover:text-white flex items-center justify-center transition-colors border border-border-ui cursor-pointer"
            onClick={onClose}
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Telemetry Metrics Row */}
        <div className="p-4 rounded-xl bg-canvas border border-border-ui">
          <div className="flex items-center justify-between pb-3 border-b border-border-ui mb-3 text-xs">
            <span className="font-mono text-text-muted">{data.consoleId.replace('vetrix', 'velmora')}</span>
            <span className="text-success font-semibold font-mono">Status: 200 OK</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3 rounded-lg bg-surface border border-border-ui">
              <span className="text-[11px] text-text-muted font-medium block">Core KPI</span>
              <span className="font-mono text-xl font-bold text-accent mt-0.5 block">{data.kpiVal}</span>
              <span className="font-body text-xs text-text-secondary">{data.kpiLabel}</span>
            </div>
            <div className="p-3 rounded-lg bg-surface border border-border-ui">
              <span className="text-[11px] text-text-muted font-medium block">Availability</span>
              <span className="font-mono text-xl font-bold text-success mt-0.5 block">{data.uptimeVal}</span>
              <span className="font-body text-xs text-text-secondary">{data.uptimeLabel}</span>
            </div>
            <div className="p-3 rounded-lg bg-surface border border-border-ui">
              <span className="text-[11px] text-text-muted font-medium block">Latency</span>
              <span className="font-mono text-xl font-bold text-white mt-0.5 block">{data.latencyVal}</span>
              <span className="font-body text-xs text-text-secondary">{data.latencyLabel}</span>
            </div>
          </div>
        </div>

        {/* Deliverables & Specifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-3">
            <h4 className="text-xs text-accent font-semibold flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">engineering</span>
              Delivered modules
            </h4>
            <ul className="flex flex-col gap-2 font-body text-xs text-text-secondary">
              {data.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-accent text-[14px] mt-0.5 shrink-0">
                    check_circle
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-xs text-white font-semibold flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">security</span>
              Architecture standards
            </h4>
            <div className="p-4 rounded-xl bg-canvas border border-border-ui flex flex-col gap-3 font-body text-xs text-text-secondary">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-accent text-[16px] shrink-0">verified_user</span>
                <span className="text-white">{data.archSpec}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-success text-[16px] shrink-0">database</span>
                <span className="text-white">{data.dataSpec}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-text-muted text-[16px] shrink-0">cloud_sync</span>
                <span className="text-white">{data.deploySpec}</span>
              </div>
            </div>

            <div className="mt-2">
              <span className="text-[11px] text-text-muted block mb-2 font-medium">
                Technology stack:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {data.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded bg-surface-elevated font-mono text-[11px] text-white border border-border-ui"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="pt-4 border-t border-border-ui flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
          <p className="text-xs text-text-muted font-medium">
            Vertrix Solutions Engineering Lab
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              className="h-12 px-5 rounded-lg bg-surface-elevated hover:bg-surface-elevated/70 text-text-secondary hover:text-white text-xs font-semibold transition-colors border border-border-ui w-full sm:w-auto cursor-pointer"
              onClick={onClose}
            >
              Close
            </button>
            <a
              className="h-12 px-6 rounded-lg bg-accent text-accent-text font-headline text-sm font-bold hover:bg-accent-hover transition-colors inline-flex items-center justify-center gap-2 w-full sm:w-auto text-center cursor-pointer"
              href="#contact"
              onClick={onClose}
            >
              <span>Request similar estimate</span>
              <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
