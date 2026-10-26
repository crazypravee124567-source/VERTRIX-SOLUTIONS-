import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutStrip from './components/AboutStrip';
import Services from './components/Services';
import Work from './components/Work';
import CaseStudyModal from './components/CaseStudyModal';
import PricingPackages from './components/PricingPackages';
import CreativePricing from './components/CreativePricing';
import MaintenancePricing from './components/MaintenancePricing';
import Process from './components/Process';
import PaymentMilestones from './components/PaymentMilestones';
import Terms from './components/Terms';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  return (
    <div className="min-h-screen bg-background text-text-primary flex flex-col font-body selection:bg-accent selection:text-accent-text">
      {/* Floating Island Dock Navigation */}
      <Navbar />

      {/* Main Page Layout with breathing room for floating navbar */}
      <main className="w-full pt-28 md:pt-32 bg-background flex flex-col">
        <Hero />
        <AboutStrip />
        <Services />
        <Work onOpenCaseModal={(id) => setSelectedCaseStudy(id)} />
        <PricingPackages />
        <CreativePricing />
        <MaintenancePricing />
        <Process />
        <PaymentMilestones />
        <Terms />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Case Study Blueprint Modal */}
      <CaseStudyModal
        caseKey={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </div>
  );
}
