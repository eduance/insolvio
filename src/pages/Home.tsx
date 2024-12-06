import React from 'react';
import { Hero } from '../components/Hero';
import { Content } from '../components/Content';
import { ScrollIndicator } from '../components/ScrollIndicator';
import { Logo } from '../components/Logo';
import { PageTransition } from '../components/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <main 
        role="main"
        aria-label="Home page"
        className="relative"
      >
        <Logo />
        <section 
          aria-label="Hero section"
          className="scroll-section relative min-h-[100dvh] flex flex-col"
        >
          <div className="flex-grow flex flex-col items-center justify-center py-16 sm:py-20">
            <Hero />
          </div>
          <div className="flex justify-center pb-8 sm:pb-16">
            <ScrollIndicator />
          </div>
        </section>
        
        <Content />
      </main>
    </PageTransition>
  );
}