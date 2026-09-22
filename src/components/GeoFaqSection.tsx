import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Sparkles, MessageCircle, MapPin } from 'lucide-react';
import { FAQ_DATA, RESTAURANT_INFO } from '../data/restaurantData';

export default function GeoFaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 bg-[#F4F1EB] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EFE9DF] border border-[#E8E2D7] text-xs font-semibold text-[#D2691E] uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              Frequently Asked Questions &amp; Travel Guide
            </span>
            <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-[#2C221E] tracking-tight">
              Got Questions About Taste of Sonada?
            </h2>
            <p className="mt-3.5 text-base sm:text-lg text-[#6E615A] leading-relaxed">
              Everything you need to know about our location in Chaikhola, menu specialties,
              timings, and why we are Sonada's top-rated 4.9★ cafe.
            </p>
          </motion.div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-[#FBF8F3] rounded-2xl border border-[#E8E2D7] overflow-hidden transition-all duration-300 shadow-xs"
              >
                <button
                  id={`faq-btn-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none cursor-pointer hover:bg-[#F4F1EB]/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 pr-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#D2691E]/10 text-[#D2691E] shrink-0">
                      {faq.category}
                    </span>
                    <span className="font-serif-title text-base sm:text-lg font-bold text-[#2C221E] leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#D2691E] text-white' : 'bg-[#F4F1EB] text-[#6E615A]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#6E615A] leading-relaxed border-t border-[#E8E2D7]/50 mt-1">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Contact Prompt */}
        <div className="mt-10 p-5 rounded-2xl bg-[#EFE9DF] border border-[#E8E2D7] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#D2691E] text-white flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif-title font-bold text-base text-[#2C221E]">
                Have a specific question or custom order?
              </h4>
              <p className="text-xs sm:text-sm text-[#6E615A]">
                Call our direct cafe front counter at 070016 74927
              </p>
            </div>
          </div>
          <a
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            className="slow-pop px-5 py-2.5 rounded-xl bg-[#2C221E] text-[#FBF8F3] text-sm font-semibold hover:bg-[#D2691E] transition-colors shrink-0 shadow-sm"
          >
            Call Us Directly
          </a>
        </div>
      </div>
    </section>
  );
}
