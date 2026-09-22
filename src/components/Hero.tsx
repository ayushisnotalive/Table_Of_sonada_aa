import { Star, MapPin, Clock, Utensils, Phone, ArrowRight, ShieldCheck, Heart, Coffee } from 'lucide-react';
import { motion } from 'motion/react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Hero() {
  // Gallery image #1 or #3 as warm background
  const heroBackgroundUrl =
    'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlzOq_w91zHaHUZc8wgG2cVsiotDY_qY9DlimkwOHhn192bEDzdWj6EXrRfI-A7XVPbMzamfRyLvBvZ6zDPBa7vbbhO7VYmMVBs2SERafgh972huyywHyRp1dszhXm8GkDLNGopD1k9qBXl=w229-h191-n-k-no-nu';

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Warm Cafe Tone Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackgroundUrl}
          alt="Taste of Sonada Cozy Cafe Ambiance"
          referrerPolicy="no-referrer"
          fetchPriority="high"
          decoding="sync"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:transition-transform duration-1000 filter brightness-[0.88] contrast-[1.05]"
        />
        {/* Soft, warm amber-espresso gradient overlay to maintain strict cafe warmth without harsh black */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#292524]/90 via-[#3D2C24]/65 to-[#292524]/45 backdrop-blur-[1px]" />
        {/* Warm subtle vignette */}
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#292524]/60 pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#FAFAF9]">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          {/* Top Badges Strip */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAFAF9]/15 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium text-[#FAFAF9]">
              <MapPin className="w-3.5 h-3.5 text-amber-300" />
              Chaikhola, near Green Hill School, Sonada
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-300/30 text-xs sm:text-sm font-semibold text-amber-200">
              <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              4.9 Stars • 135+ Reviews
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAFAF9]/15 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium text-[#FAFAF9]">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              Open Daily Till 8:00 PM
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-3 max-w-4xl mx-auto">
            <h1 className="font-serif-title text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FAFAF9] leading-[1.12]">
              Taste of Sonada
            </h1>
            <p className="font-serif-title text-xl sm:text-2xl md:text-3xl text-amber-200/90 italic font-medium">
              Cafe &amp; Restaurant • Hearty Flavors in the Darjeeling Hills
            </p>
          </div>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#FAFAF9]/85 font-light leading-relaxed">
            Your cozy hill-station retreat in Sonada. Famous for hot Darjeeling brews,
            artisan coffees, sizzling burgers, golden fried chicken, and comforting all-day breakfast.
          </p>

          {/* Highlighted Menu Tags */}
          <div className="pt-1 flex flex-wrap justify-center items-center gap-2 text-xs sm:text-sm text-amber-100/90 font-medium">
            <span className="px-3 py-1 rounded-lg bg-black/20 backdrop-blur-xs">Breakfast &amp; Brunch</span>
            <span className="text-amber-400">•</span>
            <span className="px-3 py-1 rounded-lg bg-black/20 backdrop-blur-xs">Crispy Fried Chicken</span>
            <span className="text-amber-400">•</span>
            <span className="px-3 py-1 rounded-lg bg-black/20 backdrop-blur-xs">Handcrafted Burgers</span>
            <span className="text-amber-400">•</span>
            <span className="px-3 py-1 rounded-lg bg-black/20 backdrop-blur-xs">Darjeeling Teas &amp; Coffee</span>
            <span className="text-amber-400">•</span>
            <span className="px-3 py-1 rounded-lg bg-black/20 backdrop-blur-xs">Tibetan Momos</span>
          </div>

          {/* CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <a
              href="#menu"
              id="hero-explore-menu-btn"
              className="slow-pop w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#C2410C] text-white text-base font-semibold shadow-lg hover:bg-[#9A3412] border border-amber-500/30"
            >
              <Utensils className="w-4 h-4" />
              <span>Explore Our Menu</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>

            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              id="hero-call-btn"
              className="slow-pop w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FAFAF9]/90 text-[#292524] text-base font-semibold shadow-md hover:bg-white hover:text-[#C2410C] border border-[#E7E5E4]"
            >
              <Phone className="w-4 h-4 text-[#C2410C]" />
              <span>Call 070016 74927</span>
            </a>

            <a
              href={RESTAURANT_INFO.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-directions-btn"
              className="slow-pop w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-black/30 backdrop-blur-md text-[#FAFAF9] text-base font-medium hover:bg-black/45 border border-white/20"
            >
              <MapPin className="w-4 h-4 text-amber-300" />
              <span>Directions</span>
            </a>
          </div>

          {/* Value points */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto border-t border-white/15 text-xs sm:text-sm text-[#FAFAF9]/80">
            <div className="flex items-center justify-center gap-1.5 py-1">
              <ShieldCheck className="w-4 h-4 text-amber-300" />
              <span>100% Fresh Daily</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 py-1">
              <span className="font-bold text-amber-200">₹200–400</span>
              <span>Avg Spend</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 py-1">
              <Heart className="w-4 h-4 text-rose-300" />
              <span>Warm Hospitality</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 py-1">
              <Coffee className="w-4 h-4 text-amber-300" />
              <span>Misty Hill Views</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Gentle Scroll Prompt */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center text-[#FAFAF9]/60 text-xs">
        <span className="tracking-widest uppercase text-[10px] mb-1">Scroll down</span>
        <div className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-2 bg-amber-300 rounded-full animate-bounce mt-1" />
        </div>
      </div>
    </section>
  );
}
