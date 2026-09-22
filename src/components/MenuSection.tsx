import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ZoomIn, Utensils, Coffee, Flame, Sparkles, Phone, CheckCircle2, ChevronRight } from 'lucide-react';
import { MENU_IMAGES, CURATED_MENU, RESTAURANT_INFO } from '../data/restaurantData';
import { MenuItem } from '../types';
import ImageLightboxModal from './ImageLightboxModal';

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxImage, setLightboxImage] = useState<{
    url: string;
    title: string;
    subtitle?: string;
  } | null>(null);

  const categories = [
    { id: 'all', label: 'All Specials' },
    { id: 'breakfast', label: 'Breakfast & Brunch' },
    { id: 'burgers', label: 'Gourmet Burgers' },
    { id: 'chicken', label: 'Crispy Fried Chicken' },
    { id: 'tea-coffee', label: 'Darjeeling Tea & Coffee' },
    { id: 'bites', label: 'Tibetan Momos & Bites' },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? CURATED_MENU
      : CURATED_MENU.filter((item) => item.category === selectedCategory);

  return (
    <section id="menu" className="py-20 bg-[#FBF8F3] relative overflow-hidden">
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-[#D2691E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-24 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#F4F1EB] border border-[#E8E2D7] text-xs font-semibold text-[#D2691E] uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Fresh Hillside Culinary Craft
            </span>
            <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-[#2C221E] tracking-tight">
              Menu Highlights &amp; Official Cards
            </h2>
            <p className="mt-3.5 text-base sm:text-lg text-[#6E615A] leading-relaxed">
              Explore our full in-house printed menus and signature dishes. From golden crispy fried chicken
              and loaded burgers to misty morning tea and fluffy pancakes.
            </p>
          </motion.div>
        </div>

        {/* PROMINENT OFFICIAL MENU CARDS (Two Specific Menu Images from PRD) */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-serif-title text-2xl font-bold text-[#2C221E]">
                Official In-House Menus
              </h3>
              <p className="text-sm text-[#6E615A]">
                Click either menu page below to enlarge in high-resolution view
              </p>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#D2691E] bg-[#F4F1EB] px-3 py-1.5 rounded-full border border-[#E8E2D7]">
              <ZoomIn className="w-3.5 h-3.5" />
              Tap to Expand &amp; Zoom
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MENU_IMAGES.map((menu, index) => (
              <motion.div
                key={menu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                onClick={() =>
                  setLightboxImage({
                    url: menu.url,
                    title: menu.title,
                    subtitle: menu.description,
                  })
                }
                className="group relative cursor-pointer bg-[#F4F1EB] rounded-2xl overflow-hidden border border-[#E8E2D7] shadow-md hover:shadow-2xl transition-all duration-400 ease-in-out hover:scale-[1.02]"
              >
                {/* Menu Image Preview */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-200">
                  <img
                    src={menu.url}
                    alt={menu.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C221E]/80 via-[#2C221E]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#2C221E]/80 backdrop-blur-md text-white text-xs font-medium border border-white/20">
                      Page {index + 1} of 2
                    </span>
                  </div>

                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="px-4 py-2.5 rounded-xl bg-[#D2691E] text-white text-sm font-semibold shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <ZoomIn className="w-4 h-4" />
                      <span>Click to Zoom &amp; Read</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Card Meta */}
                <div className="p-5 flex items-center justify-between bg-[#F4F1EB]">
                  <div>
                    <h4 className="font-serif-title text-lg font-bold text-[#2C221E] group-hover:text-[#D2691E] transition-colors">
                      {menu.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#6E615A] mt-0.5">
                      {menu.description}
                    </p>
                  </div>
                  <div className="p-2 rounded-xl bg-white text-[#D2691E] shadow-sm border border-[#E8E2D7] group-hover:bg-[#D2691E] group-hover:text-white transition-colors">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CURATED SIGNATURE DISHES & SPECIALTIES */}
        <div className="bg-[#F4F1EB] rounded-3xl p-6 sm:p-10 border border-[#E8E2D7] shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#D2691E]">
                Prepared Fresh to Order
              </span>
              <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#2C221E] mt-1">
                Featured Cafe Dishes &amp; Specialties
              </h3>
              <p className="text-sm text-[#6E615A] mt-1">
                Comforting mountain cafe food crafted with fresh ingredients • Price Range: ₹200–400 per person
              </p>
            </div>

            {/* Quick Call Action for Takeaway */}
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="slow-pop inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#D2691E] text-white text-sm font-semibold hover:bg-[#BD5813] self-start md:self-auto shrink-0 shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Order via Phone: {RESTAURANT_INFO.phone}</span>
            </a>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#2C221E] text-[#FBF8F3] shadow-md'
                    : 'bg-[#FBF8F3] text-[#6E615A] hover:bg-[#E8E2D7] hover:text-[#2C221E] border border-[#E8E2D7]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Dishes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="slow-pop bg-[#FBF8F3] rounded-2xl p-5 border border-[#E8E2D7] hover:border-[#D2691E]/40 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Tag / Diet / Price */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <div className="flex items-center gap-2">
                        {item.isVeg ? (
                          <span
                            title="Vegetarian"
                            className="inline-flex items-center justify-center w-4 h-4 border border-emerald-600 rounded-xs p-0.5"
                          >
                            <span className="w-2 h-2 rounded-full bg-emerald-600" />
                          </span>
                        ) : (
                          <span
                            title="Non-Vegetarian"
                            className="inline-flex items-center justify-center w-4 h-4 border border-red-700 rounded-xs p-0.5"
                          >
                            <span className="w-2 h-2 rounded-full bg-red-700" />
                          </span>
                        )}
                        {item.badge && (
                          <span className="px-2 py-0.5 text-[11px] font-semibold rounded-md bg-[#D2691E]/10 text-[#D2691E] border border-[#D2691E]/20">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <div className="text-base sm:text-lg font-bold text-[#2C221E] font-serif-title">
                        ₹{item.price}
                      </div>
                    </div>

                    {/* Dish Name */}
                    <h4 className="font-serif-title text-base sm:text-lg font-bold text-[#2C221E] leading-snug">
                      {item.name}
                    </h4>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#6E615A] mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Note */}
                  <div className="pt-4 mt-4 border-t border-[#E8E2D7]/70 flex items-center justify-between text-xs text-[#6E615A]">
                    <span className="flex items-center gap-1 text-emerald-800">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Made fresh on order
                    </span>
                    <a
                      href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                      className="text-[#D2691E] font-medium hover:underline flex items-center gap-0.5"
                    >
                      Call to order
                      <ChevronRight className="w-3 h-3" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Lightbox for zooming menu pages */}
      {lightboxImage && (
        <ImageLightboxModal
          isOpen={!!lightboxImage}
          onClose={() => setLightboxImage(null)}
          imageUrl={lightboxImage.url}
          title={lightboxImage.title}
          subtitle={lightboxImage.subtitle}
        />
      )}
    </section>
  );
}
