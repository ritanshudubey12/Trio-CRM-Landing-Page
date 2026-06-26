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

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
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
      <BookDemo />
      <Footer />
    </div>
  );
}

export default App;
