import { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Share2,
  Copy,
  Check,
  Coffee,
  Heart,
  ExternalLink,
  Star,
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function ContactAndFooter() {
  const [copied, setCopied] = useState(false);

  // Compute live open/closed status for "Closes 8 PM"
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const totalMinutes = currentHour * 60 + currentMinute;
  // 8:30 AM = 510 mins, 8:00 PM = 1200 mins
  const isOpen = totalMinutes >= 510 && totalMinutes < 1200;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(RESTAURANT_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Taste of Sonada - Cafe & Restaurant',
          text: 'Check out Taste of Sonada! 4.9★ cozy cafe in Chaikhola, Sonada, Darjeeling.',
          url: window.location.href,
        });
      } catch (err) {
        // user dismissed share
      }
    } else {
      handleCopyAddress();
    }
  };

  return (
    <footer id="contact" className="bg-[#FBF8F3] border-t border-[#E8E2D7] pt-20 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact & Map Banner */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F4F1EB] border border-[#E8E2D7] text-xs font-semibold text-[#D2691E] uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5" />
              Visit Taste of Sonada
            </span>
            <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-[#2C221E] tracking-tight">
              Find Us in Chaikhola, Sonada
            </h2>
            <p className="mt-3.5 text-base sm:text-lg text-[#6E615A] leading-relaxed">
              Located right by Green Hill School in Sonada, Darjeeling. Drop in for a comforting
              warm meal, grab a takeaway, or call ahead for quick preparation.
            </p>
          </motion.div>
        </div>

        {/* Two Column Card: Info on Left, Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          {/* Left Column: Business Details */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#F4F1EB] rounded-3xl p-6 sm:p-8 border border-[#E8E2D7] shadow-sm">
            <div className="space-y-6">
              {/* Header with Live Status */}
              <div className="flex items-center justify-between border-b border-[#E8E2D7] pb-5">
                <div>
                  <h3 className="font-serif-title text-2xl font-bold text-[#2C221E]">
                    Taste of Sonada
                  </h3>
                  <p className="text-xs text-[#6E615A] uppercase tracking-wider mt-0.5">
                    Cafe &amp; Restaurant • Darjeeling
                  </p>
                </div>
                <div
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${
                    isOpen
                      ? 'bg-emerald-100/90 text-emerald-800 border border-emerald-300'
                      : 'bg-amber-100 text-amber-800 border border-amber-300'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isOpen ? 'bg-emerald-600 animate-pulse' : 'bg-amber-600'
                    }`}
                  />
                  <span>{isOpen ? 'Open Now • Closes 8 PM' : 'Opens Daily 8:30 AM'}</span>
                </div>
              </div>

              {/* Location item */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#D2691E]/10 text-[#D2691E] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif-title font-bold text-sm text-[#2C221E]">
                    Our Address
                  </h4>
                  <p className="text-sm text-[#6E615A] mt-0.5 leading-relaxed">
                    {RESTAURANT_INFO.address}
                  </p>
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1 text-xs text-[#D2691E] font-medium hover:underline mt-1.5 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied to clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone item */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#D2691E]/10 text-[#D2691E] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif-title font-bold text-sm text-[#2C221E]">
                    Direct Phone Line
                  </h4>
                  <a
                    href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                    className="text-lg font-bold text-[#D2691E] hover:underline block mt-0.5"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                  <p className="text-xs text-[#6E615A] mt-0.5">
                    Available for orders, enquiries, and directions
                  </p>
                </div>
              </div>

              {/* Timing item */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#D2691E]/10 text-[#D2691E] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif-title font-bold text-sm text-[#2C221E]">
                    Operating Hours
                  </h4>
                  <p className="text-sm text-[#2C221E] font-medium mt-0.5">
                    Monday – Sunday: 8:30 AM – 8:00 PM
                  </p>
                  <p className="text-xs text-[#6E615A] mt-0.5">
                    Closes promptly at 8:00 PM every evening
                  </p>
                </div>
              </div>

              {/* Price range item */}
              <div className="p-4 rounded-2xl bg-[#FBF8F3] border border-[#E8E2D7]">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-[#6E615A]">Target Price Range</span>
                  <span className="font-bold text-[#2C221E]">₹200–400 per person</span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm mt-1.5">
                  <span className="text-[#6E615A]">Google Review Rating</span>
                  <span className="font-bold text-[#D2691E] flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    4.9 / 5.0 (135+ Reviews)
                  </span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-6 mt-6 border-t border-[#E8E2D7] grid grid-cols-2 gap-3">
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                id="footer-call-btn"
                className="slow-pop flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#D2691E] text-white text-sm font-semibold hover:bg-[#BD5813] shadow-sm text-center"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>

              <a
                href={RESTAURANT_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-directions-btn"
                className="slow-pop flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#2C221E] text-[#FBF8F3] text-sm font-semibold hover:bg-[#3D2C24] shadow-sm text-center"
              >
                <Navigation className="w-4 h-4 text-amber-300" />
                <span>Directions</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-7 bg-[#F4F1EB] rounded-3xl p-3 sm:p-4 border border-[#E8E2D7] shadow-sm flex flex-col min-h-[420px]">
            <div className="relative flex-1 w-full h-full rounded-2xl overflow-hidden border border-[#E8E2D7] bg-[#EFE9DF]">
              <iframe
                title="Taste of Sonada Google Map Location"
                src="https://maps.google.com/maps?q=Taste+of+Sonada+Chaikhola+Green+Hill+School+Sonada+Darjeeling+West+Bengal+734209&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Map Floating Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs p-3.5 bg-[#FBF8F3]/95 backdrop-blur-md rounded-xl shadow-lg border border-[#E8E2D7] text-left">
                <div className="flex items-center gap-2 text-xs font-bold text-[#2C221E]">
                  <MapPin className="w-4 h-4 text-[#D2691E]" />
                  <span>Chaikhola, Sonada, Darjeeling</span>
                </div>
                <p className="text-[11px] text-[#6E615A] mt-1 leading-tight">
                  Near Green Hill School • PIN 734209
                </p>
                <a
                  href={RESTAURANT_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#D2691E] hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer Details & SEO Footprint */}
        <div className="border-t border-[#E8E2D7] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#6E615A]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#D2691E] flex items-center justify-center text-white text-[11px] font-bold">
              TS
            </div>
            <span className="font-semibold text-[#2C221E]">Taste of Sonada</span>
            <span>•</span>
            <span>Chaikhola, near Green Hill School, Sonada, Darjeeling 734209</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#home" className="hover:text-[#D2691E] transition-colors">
              Home
            </a>
            <a href="#menu" className="hover:text-[#D2691E] transition-colors">
              Menu Cards
            </a>
            <a href="#gallery" className="hover:text-[#D2691E] transition-colors">
              Gallery &amp; Reels
            </a>
            <a href="#vibe" className="hover:text-[#D2691E] transition-colors">
              4.9★ Reviews
            </a>
            <a href="#faq" className="hover:text-[#D2691E] transition-colors">
              FAQs
            </a>
          </div>

          <div className="text-center md:text-right">
            <span>© {new Date().getFullYear()} Taste of Sonada. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
