import React, { useState, useEffect } from 'react';

export default function LiveDemoPreviewModal({ project, onClose }) {
  const [deviceMode, setDeviceMode] = useState(project?.defaultDeviceMode || 'desktop');
  const [isLoading, setIsLoading] = useState(true);
  const [iframeKey, setIframeKey] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const deviceWidths = {
    desktop: 'w-full max-w-full',
    tablet: 'w-[768px] max-w-full',
    mobile: 'w-[390px] max-w-full'
  };

  const handleRefresh = () => {
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="previewModalTitle"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-text-primary/75 backdrop-blur-md transition-opacity duration-200"
    >
      {/* Backdrop Click Dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Preview Container */}
      <div className="relative w-full max-w-6xl h-[94vh] rounded-2xl bg-surface border border-border-ui shadow-2xl flex flex-col overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Control Bar */}
        <div className="h-16 px-4 sm:px-6 bg-surface border-b border-border-ui flex items-center justify-between gap-4 shrink-0">
          
          {/* Project Title & Live Status */}
          <div className="flex items-center gap-3 min-w-0">
            <span className="w-2.5 h-2.5 rounded-full bg-success animate-pulse shrink-0" />
            <div className="min-w-0">
              <h3 id="previewModalTitle" className="font-headline text-sm sm:text-base font-bold text-text-primary truncate">
                {project.title}
              </h3>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] text-accent hover:underline flex items-center gap-1 truncate"
              >
                <span>{project.domain}</span>
                <span className="material-symbols-outlined text-[13px]">open_in_new</span>
              </a>
            </div>
          </div>

          {/* Center: Device Viewport Switcher */}
          <div className="hidden md:flex items-center gap-1 p-1 rounded-xl bg-canvas border border-border-ui">
            <button
              onClick={() => setDeviceMode('desktop')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                deviceMode === 'desktop'
                  ? 'bg-surface text-accent font-semibold shadow-sm border border-border-ui'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
              title="Desktop View"
            >
              <span className="material-symbols-outlined text-[16px]">desktop_windows</span>
              <span>Desktop</span>
            </button>

            <button
              onClick={() => setDeviceMode('tablet')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                deviceMode === 'tablet'
                  ? 'bg-surface text-accent font-semibold shadow-sm border border-border-ui'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
              title="Tablet View (768px)"
            >
              <span className="material-symbols-outlined text-[16px]">tablet</span>
              <span>Tablet</span>
            </button>

            <button
              onClick={() => setDeviceMode('mobile')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                deviceMode === 'mobile'
                  ? 'bg-surface text-accent font-semibold shadow-sm border border-border-ui'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
              title="Mobile View (390px)"
            >
              <span className="material-symbols-outlined text-[16px]">smartphone</span>
              <span>Mobile</span>
            </button>
          </div>

          {/* Right Action Tools */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleRefresh}
              className="p-2 rounded-lg bg-surface-elevated hover:bg-canvas text-text-secondary hover:text-text-primary transition-colors border border-border-ui cursor-pointer"
              title="Reload preview"
              aria-label="Reload preview"
            >
              <span className="material-symbols-outlined text-[18px]">refresh</span>
            </button>

            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 h-9 px-3.5 rounded-lg bg-accent text-accent-text text-xs font-semibold hover:bg-accent-hover transition-colors shadow-sm"
            >
              <span>Open in new tab</span>
              <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-surface-elevated hover:bg-canvas text-text-secondary hover:text-text-primary transition-colors border border-border-ui cursor-pointer"
              title="Close modal (Esc)"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        {/* Viewport Frame Area */}
        <div className="flex-1 bg-canvas/70 p-2 sm:p-4 overflow-hidden flex items-center justify-center relative">
          
          {/* Loading Indicator */}
          {isLoading && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-surface/80 backdrop-blur-xs gap-3">
              <div className="w-8 h-8 rounded-full border-2 border-border-ui border-t-accent animate-spin" />
              <p className="font-body text-xs text-text-secondary font-medium">
                Connecting to live Vercel deployment...
              </p>
            </div>
          )}

          {/* Interactive Frame Wrapper */}
          <div
            className={`h-full ${deviceWidths[deviceMode]} transition-all duration-300 rounded-xl overflow-hidden shadow-lg border border-border-ui bg-background flex flex-col`}
          >
            {/* Browser Address Bar Simulation */}
            <div className="h-9 px-3 bg-surface border-b border-border-ui flex items-center gap-2 text-xs text-text-muted shrink-0 select-none">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
              </div>
              <div className="flex-1 mx-2 px-3 py-1 rounded bg-canvas border border-border-ui text-[11px] text-text-secondary font-mono truncate flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[13px] text-success">lock</span>
                <span className="truncate">{project.demoUrl}</span>
              </div>
              <span className="font-mono text-[10px] text-accent font-semibold px-2 py-0.5 rounded bg-surface-elevated border border-border-ui">
                LIVE
              </span>
            </div>

            {/* Actual Live Iframe */}
            <iframe
              key={iframeKey}
              src={project.demoUrl}
              title={`${project.title} Live Preview`}
              className="w-full flex-1 border-0 bg-background"
              onLoad={() => setIsLoading(false)}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="h-10 px-4 sm:px-6 bg-surface border-t border-border-ui flex items-center justify-between text-xs text-text-secondary shrink-0">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-accent text-[15px]">verified</span>
            <span className="text-[11px] sm:text-xs">
              Live deployment on Vercel Edge • Tested by Vertrix Solutions
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <span className="hidden sm:inline text-text-muted">Need direct access?</span>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent font-medium hover:underline flex items-center gap-1"
            >
              <span>{project.demoUrl}</span>
              <span className="material-symbols-outlined text-[12px]">open_in_new</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
