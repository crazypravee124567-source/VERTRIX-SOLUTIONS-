import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutStrip from './components/AboutStrip';
import Services from './components/Services';
import Work from './components/Work';
import PricingPackages from './components/PricingPackages';
import CreativePricing from './components/CreativePricing';
import MaintenancePricing from './components/MaintenancePricing';
import Process from './components/Process';
import PaymentMilestones from './components/PaymentMilestones';
import Terms from './components/Terms';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const handleNavigate = (section) => {
    if (!section || section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', window.location.pathname);
      return;
    }

    const el = document.getElementById(section);
    if (el) {
      const navOffset = 96;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: Math.max(0, elementPosition - navOffset),
        behavior: 'smooth'
      });
      window.history.pushState(null, '', `#${section}`);
    }
  };

  return (
    <div className="min-h-screen bg-background text-text-primary flex flex-col font-body selection:bg-accent selection:text-accent-text">
      {/* Floating Island Dock Navigation */}
      <Navbar onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="w-full pt-24 md:pt-28 bg-background flex flex-col flex-1">
        <Hero />
        <AboutStrip />
        <Services />
        <Work />
        <PricingPackages />
        <CreativePricing />
        <MaintenancePricing />
        <Process />
        <PaymentMilestones />
        <Terms />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
