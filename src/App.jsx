import React from 'react';
import BackgroundGrid from './components/layout/BackgroundGrid';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Philosophy from './components/sections/Philosophy';
import ServicesMatrix from './components/sections/ServicesMatrix';
import FeaturedProject from './components/sections/FeaturedProject';
import PackagesPricing from './components/sections/PackagesPricing';
import DeliveryBlueprint from './components/sections/DeliveryBlueprint';
import ContactSection from './components/sections/ContactSection';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#040711] text-slate-100 selection:bg-cyan-500/25 selection:text-cyan-200">
      {/* Dynamic Background Cyber Pattern & Ambient Orbs */}
      <BackgroundGrid />

      {/* Floating Glass Navigation Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* Philosophy & Positioning (Problem-First vs Typical Agencies) */}
        <Philosophy />

        {/* 4 Core Pillars / Service Matrix */}
        <ServicesMatrix />

        {/* Flagship Selected Project Showcase + Incubation Pipeline */}
        <FeaturedProject />

        {/* Official Packages & Interactive Pricing Calculator */}
        <PackagesPricing />

        {/* 6-Stage Delivery Blueprint */}
        <DeliveryBlueprint />

        {/* Client Ingestion & WhatsApp Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

