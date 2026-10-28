import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutStrip from './components/AboutStrip';
import Services from './components/Services';
import Work from './components/Work';
import DemoProjectsPage from './components/DemoProjectsPage';
import PricingPackages from './components/PricingPackages';
import CreativePricing from './components/CreativePricing';
import MaintenancePricing from './components/MaintenancePricing';
import Process from './components/Process';
import PaymentMilestones from './components/PaymentMilestones';
import Terms from './components/Terms';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    return window.location.hash === '#demos' ? 'demos' : 'home';
  });

  // Sync with browser back/forward and hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#demos') {
        setCurrentPage('demos');
      } else if (currentPage === 'demos' && hash !== '#demos') {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentPage]);

  const handleNavigate = (page, targetSection) => {
    if (page === 'demos') {
      setCurrentPage('demos');
      window.location.hash = '#demos';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Navigating back to home
    setCurrentPage('home');

    if (targetSection && targetSection !== 'home') {
      window.location.hash = `#${targetSection}`;
      setTimeout(() => {
        const el = document.getElementById(targetSection);
        if (el) {
          const navOffset = 96;
          const elementPosition = el.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: Math.max(0, elementPosition - navOffset),
            behavior: 'smooth'
          });
        }
      }, 50);
    } else {
      window.history.pushState(null, '', window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-text-primary flex flex-col font-body selection:bg-accent selection:text-accent-text">
      {/* Floating Island Dock Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area */}
      <main className="w-full pt-24 md:pt-28 bg-background flex flex-col flex-1">
        {currentPage === 'demos' ? (
          <DemoProjectsPage
            onBackToHome={() => handleNavigate('home')}
          />
        ) : (
          <>
            <Hero onExploreDemos={() => handleNavigate('demos')} />
            <AboutStrip />
            <Services />
            <Work
              onNavigateToDemos={() => handleNavigate('demos')}
            />
            <PricingPackages />
            <CreativePricing />
            <MaintenancePricing />
            <Process />
            <PaymentMilestones />
            <Terms />
            <Contact />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
