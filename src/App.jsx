import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import ProblemSection from './components/ProblemSection';
import WhyTrioCRM from './components/WhyTrioCRM';
import CoreModules from './components/CoreModules';
import SalesWorkflow from './components/SalesWorkflow';
import InventoryShowcase from './components/InventoryShowcase';
import DashboardShowcase from './components/DashboardShowcase';
import PowerFeatures from './components/PowerFeatures';
import Statistics from './components/Statistics';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import BookDemo from './components/BookDemo';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import { useState } from 'react';

function App() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onOpenDemo={() => setIsDemoOpen(true)} />
      <Hero onOpenDemo={() => setIsDemoOpen(true)} />
      <TrustedBy />
      <ProblemSection />
      <WhyTrioCRM />
      <CoreModules />
      <SalesWorkflow />
      <InventoryShowcase />
      <DashboardShowcase />
      <PowerFeatures />
      <Statistics />
      <Testimonials />
      <FAQ />
      <BookDemo onOpenDemo={() => setIsDemoOpen(true)} />
      <Footer />
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  );
}

export default App;
