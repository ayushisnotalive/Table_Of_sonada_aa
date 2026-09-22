import { Star, Coffee, Utensils, IndianRupee, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function HighlightsBar() {
  const highlights = [
    {
      icon: Star,
      title: '4.9 ★ Highest Rated',
      desc: '135+ verified local & traveler reviews',
      color: 'text-amber-600',
      bg: 'bg-amber-100/70',
    },
    {
      icon: IndianRupee,
      title: '₹200–400 Avg Spend',
      desc: 'Affordable gourmet cafe dining',
      color: 'text-emerald-700',
      bg: 'bg-emerald-100/70',
    },
    {
      icon: Utensils,
      title: 'Famous For Crunch & Comfort',
      desc: 'Burgers, crispy chicken, momos & brunch',
      color: 'text-[#C2410C]',
      bg: 'bg-orange-100/70',
    },
    {
      icon: Coffee,
      title: 'Fresh Darjeeling Brews',
      desc: 'Artisan coffee & single-estate tea',
      color: 'text-amber-800',
      bg: 'bg-stone-200/70',
    },
  ];

  return (
    <section className="relative z-20 -mt-7 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#F5F5F4] rounded-2xl shadow-xl border border-[#E7E5E4] p-4 sm:p-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#E7E5E4]">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex items-start gap-3.5 ${
                  idx > 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''
                }`}
              >
                <div className={`p-2.5 rounded-xl ${item.bg} ${item.color} shrink-0 mt-0.5`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif-title font-bold text-[#292524] text-base leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#57534E] mt-1 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
