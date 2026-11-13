import React, { Suspense, lazy, useCallback, useState } from 'react';
import { Navbar, StickyCta, Footer } from './components/Chrome';
import { Hero } from './components/Hero';
import { DemoModal } from './components/LeadForm';
import {
  ProductReveal, TrustStrip, ProblemSolution, Capabilities, FollowUps, ProductTour, Gallery, HowItWorks,
  ConnectedSuite, UseCases, SecuritySection, FAQ, FinalCta,
} from './components/Sections';
import { track } from './lib/track';

// WebGL world is code-split so the page content paints first.
const Scene3D = lazy(() => import('./components/Scene3D'));

export default function App() {
  const [modal, setModal] = useState(null);
  const demo = useCallback(() => { track('cta_click', { id: 'book_demo' }); setModal('demo'); }, []);
  const start = useCallback(() => { track('cta_click', { id: 'start_free' }); setModal('start'); }, []);

  return (
    <>
      <Suspense fallback={<div aria-hidden="true" className="fixed inset-0 -z-10 scene-fallback" />}>
        <Scene3D />
      </Suspense>
      <Navbar onOpenDemo={demo} onStart={start} />
      <main>
        <Hero onStart={start} onDemo={demo} />
        <ProductReveal />
        <TrustStrip />
        <ProblemSolution />
        <Capabilities />
        <FollowUps />
        <ProductTour />
        <Gallery />
        <HowItWorks />
        <ConnectedSuite />
        <UseCases />
        <SecuritySection />
        <FAQ />
        <FinalCta onStart={start} />
      </main>
      <Footer />
      <StickyCta onStart={start} />
      <DemoModal open={!!modal} intent={modal} onClose={() => setModal(null)} />
    </>
  );
}
