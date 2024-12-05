import React from 'react';
import { Navigation } from '../components/Navigation';
import { PromiseHero } from '../components/Promise/PromiseHero';
import { PromiseSection } from '../components/Promise/PromiseSection';
import { ClosingStatement } from '../components/Promise/ClosingStatement';
import { PageTransition } from '../components/PageTransition';

export default function Promise() {
  return (
    <PageTransition>
      <main className="min-h-screen">
        <Navigation />
        <PromiseHero />
        <PromiseSection />
        <ClosingStatement />
      </main>
    </PageTransition>
  );
}