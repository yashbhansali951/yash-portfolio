/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/FooterAndImpact';
import { Hero } from './components/Hero';
import { MarqueeSection, About } from './components/AboutAndMarquee';
import { Services, Projects } from './components/ServicesAndProjects';
import { ImpactStats, Footer } from './components/FooterAndImpact';

export default function App() {
  return (
    <div className="min-h-screen bg-system-bg text-gray-200 selection:bg-blue-500/30 selection:text-blue-200 grid-background relative">
      {/* Scanline Effect */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        <div className="scanline" />
      </div>

      <Navbar />
      
      <main>
        <Hero />
        <MarqueeSection />
        <About />
        <Services />
        <Projects />
        <ImpactStats />
      </main>

      <Footer />
    </div>
  );
}
