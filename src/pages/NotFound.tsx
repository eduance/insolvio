import React from 'react';
import { Button } from '../components/Button';
import { Logo } from '../components/Logo';
import { PageTransition } from '../components/PageTransition';

export default function NotFound() {
  return (
    <PageTransition>
      <main className="min-h-[100dvh] flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden">
        <Logo />
        
        <div className="text-center mt-16 sm:mt-32">
          <div className="space-y-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-serif text-brand-primary/80 mb-4 sm:mb-6">
              Looks like we've encountered an unexpected challenge
            </h1>
          </div>
          
          <p className="text-base sm:text-lg text-black/70 mt-4 sm:mt-6 mb-8 sm:mb-12 max-w-md mx-auto">
            But don't worry – solving complex problems is what we do best.
            Let's get you back on track.
          </p>

          <Button
            to="/"
            text="Back to home"
            variant="primary"
            icon="arrow-left"
          />
        </div>

        <div className="fixed inset-0 pointer-events-none opacity-[0.03]">
          <div className="absolute inset-0 bg-grid-pattern" />
        </div>
      </main>
    </PageTransition>
  );
}