import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HighlightsBar from './components/HighlightsBar';
import MenuSection from './components/MenuSection';
import GalleryMasonry from './components/GalleryMasonry';
import VibeAndReviews from './components/VibeAndReviews';
import GeoFaqSection from './components/GeoFaqSection';
import ContactAndFooter from './components/ContactAndFooter';
import { Phone, ArrowUp } from 'lucide-react';
import { RESTAURANT_INFO } from './data/restaurantData';

export default function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#292524] selection:bg-[#C2410C]/20 selection:text-[#292524] flex flex-col font-sans">
      {/* Sticky Glassmorphic Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Step 3: Hero Section */}
        <Hero />

        {/* High-Converting Metrics Bar */}
        <HighlightsBar />

        {/* Step 4: Menu Highlights Section */}
        <MenuSection />

        {/* Step 5: Ambiance Gallery & Video Masonry */}
        <GalleryMasonry />

        {/* Step 6: Vibe & 4.9★ Reviews */}
        <VibeAndReviews />

        {/* Generative Engine Optimization (GEO) & AEO FAQ */}
        <GeoFaqSection />

        {/* Step 7: Footer & Contact with Google Maps Embed */}
        <ContactAndFooter />
      </main>

      {/* Floating Action Button for Mobile Foot Traffic & Quick Orders */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        <button
          onClick={scrollToTop}
          id="scroll-to-top-btn"
          aria-label="Scroll to top"
          className="p-2.5 rounded-full bg-[#F5F5F4] text-[#292524] shadow-md border border-[#E7E5E4] hover:bg-white hover:text-[#C2410C] transition-all"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

        <a
          href={`tel:${RESTAURANT_INFO.phoneRaw}`}
          id="floating-call-btn"
          aria-label="Call Taste of Sonada"
          className="slow-pop flex items-center gap-2 px-4 py-3 rounded-full bg-[#C2410C] text-white font-semibold shadow-xl hover:bg-[#9A3412] border border-amber-400/30"
        >
          <Phone className="w-4 h-4 animate-bounce" />
          <span className="text-xs sm:text-sm">Call 070016 74927</span>
        </a>
      </div>
    </div>
  );
}
