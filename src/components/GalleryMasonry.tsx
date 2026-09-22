import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ZoomIn, Camera, Sparkles, Film, Image as ImageIcon } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { MediaAsset } from '../types';
import ImageLightboxModal from './ImageLightboxModal';

export default function GalleryMasonry() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filters = [
    { id: 'all', label: 'All Photos & Reels' },
    { id: 'ambiance', label: 'Ambiance & Views' },
    { id: 'food', label: 'Signature Dishes' },
    { id: 'cozy', label: 'Cozy Corners & Brews' },
    { id: 'video', label: 'Video Moments' },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) =>
          activeFilter === 'video'
            ? item.type === 'video'
            : item.category === activeFilter
        );

  const handleOpenLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const handleNext = () => {
    if (selectedIndex !== null && selectedIndex < filteredItems.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const currentItem = selectedIndex !== null ? filteredItems[selectedIndex] : null;

  return (
    <section id="gallery" className="py-20 bg-[#F4F1EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EFE9DF] border border-[#E8E2D7] text-xs font-semibold text-[#D2691E] uppercase tracking-wider mb-3">
              <Camera className="w-3.5 h-3.5" />
              Glimpses of Taste of Sonada
            </span>
            <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-[#2C221E] tracking-tight">
              Ambiance, Food &amp; Mountain Vibe
            </h2>
            <p className="mt-3.5 text-base sm:text-lg text-[#6E615A] leading-relaxed">
              Experience the warm wooden warmth, misty hillside dining, sizzling burgers,
              crispy fried chicken, and cozy moments nestled near Green Hill School in Sonada.
            </p>
          </motion.div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeFilter === f.id
                    ? 'bg-[#D2691E] text-white shadow-sm'
                    : 'bg-[#FBF8F3] text-[#6E615A] hover:bg-[#E8E2D7] hover:text-[#2C221E] border border-[#E8E2D7]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Responsive CSS Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 auto-rows-[280px]"
        >
          <AnimatePresence>
            {filteredItems.map((item, idx) => {
              const isVideo = item.type === 'video';
              // Varied card sizing for visual rhythm
              const isLarge = idx === 0 || idx === 4;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.4 }}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-[#EFE9DF] border border-[#E8E2D7] shadow-sm hover:shadow-2xl transition-all duration-400 ease-in-out hover:scale-105 ${
                    isLarge ? 'sm:col-span-2 sm:row-span-2' : ''
                  }`}
                  onClick={() => handleOpenLightbox(idx)}
                >
                  {/* Media (Image or Video preview) */}
                  {isVideo ? (
                    <div className="relative w-full h-full bg-[#2C221E]/10 flex items-center justify-center overflow-hidden">
                      <video
                        src={item.url}
                        muted
                        loop
                        playsInline
                        autoPlay
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Video indicator badge */}
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#2C221E]/75 backdrop-blur-md text-amber-200 text-xs font-medium flex items-center gap-1.5 border border-white/10 z-10">
                        <Film className="w-3.5 h-3.5" />
                        <span>Reel</span>
                      </div>
                      {/* Play overlay button */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-[#D2691E]/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 ml-0.5 fill-white" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full h-full overflow-hidden">
                      <img
                        src={item.url}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                        loading="lazy"
                        decoding="async"
                      />
                      {/* Zoom icon badge */}
                      <div className="absolute top-3 right-3 p-1.5 rounded-full bg-[#2C221E]/60 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs">
                        <ZoomIn className="w-4 h-4" />
                      </div>
                    </div>
                  )}

                  {/* Bottom Warm Gradient & Caption Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C221E]/85 via-[#2C221E]/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-4 sm:p-5 text-[#FBF8F3]">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-300 mb-0.5">
                      {isVideo ? 'Cafe Short Reel' : item.category}
                    </span>
                    <h4 className="font-serif-title font-bold text-base sm:text-lg leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#FBF8F3]/80 line-clamp-1 mt-0.5 font-light">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {currentItem && (
        <ImageLightboxModal
          isOpen={selectedIndex !== null}
          onClose={() => setSelectedIndex(null)}
          imageUrl={currentItem.url}
          title={currentItem.title}
          subtitle={currentItem.subtitle}
          onNext={handleNext}
          onPrev={handlePrev}
          hasNext={selectedIndex !== null && selectedIndex < filteredItems.length - 1}
          hasPrev={selectedIndex !== null && selectedIndex > 0}
        />
      )}
    </section>
  );
}
