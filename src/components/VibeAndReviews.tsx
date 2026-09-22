import { Star, MessageSquareQuote, CheckCircle, MapPin, Heart, Coffee, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { REVIEWS_DATA, RESTAURANT_INFO } from '../data/restaurantData';

export default function VibeAndReviews() {
  return (
    <section id="vibe" className="py-20 bg-[#FAFAF9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5F5F4] border border-[#E7E5E4] text-xs font-semibold text-[#C2410C] uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 fill-current text-amber-500" />
              Community Loved &amp; Top Rated
            </span>
            <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-[#292524] tracking-tight">
              The Vibe &amp; 4.9★ Guest Reviews
            </h2>
            <p className="mt-3.5 text-base sm:text-lg text-[#57534E] leading-relaxed">
              Discover why locals, students of Green Hill School, and travelers on the Darjeeling-Kurseong
              hill road consistently rate Taste of Sonada as their favorite mountain cafe.
            </p>
          </motion.div>
        </div>

        {/* Rating Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#F5F5F4] rounded-3xl p-6 sm:p-10 border border-[#E7E5E4] shadow-sm mb-14"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Score Box */}
            <div className="lg:col-span-4 text-center lg:text-left lg:border-r lg:border-[#E7E5E4] lg:pr-8">
              <div className="inline-flex items-baseline gap-2">
                <span className="font-serif-title text-6xl sm:text-7xl font-bold text-[#292524] tracking-tight">
                  4.9
                </span>
                <span className="text-xl sm:text-2xl text-[#57534E] font-serif-title">/ 5.0</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-1 my-2 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-sm font-semibold text-[#292524]">
                Based on 135+ Verified Google Reviews
              </p>
              <p className="text-xs text-[#57534E] mt-1">
                Highest rated cafe &amp; restaurant in the Sonada Chaikhola area
              </p>
            </div>

            {/* Criteria Progress */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#FAFAF9] p-4 rounded-2xl border border-[#E7E5E4]">
                <div className="flex justify-between items-center text-sm font-medium text-[#292524] mb-1.5">
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#C2410C]" />
                    Fried Chicken &amp; Food Quality
                  </span>
                  <span className="font-bold">5.0 / 5.0</span>
                </div>
                <div className="w-full bg-[#E7E5E4] h-2 rounded-full overflow-hidden">
                  <div className="bg-[#C2410C] h-full w-[99%]" />
                </div>
              </div>

              <div className="bg-[#FAFAF9] p-4 rounded-2xl border border-[#E7E5E4]">
                <div className="flex justify-between items-center text-sm font-medium text-[#292524] mb-1.5">
                  <span className="flex items-center gap-2">
                    <Coffee className="w-4 h-4 text-amber-700" />
                    Darjeeling Tea &amp; Coffee
                  </span>
                  <span className="font-bold">4.9 / 5.0</span>
                </div>
                <div className="w-full bg-[#E7E5E4] h-2 rounded-full overflow-hidden">
                  <div className="bg-amber-600 h-full w-[98%]" />
                </div>
              </div>

              <div className="bg-[#FAFAF9] p-4 rounded-2xl border border-[#E7E5E4]">
                <div className="flex justify-between items-center text-sm font-medium text-[#292524] mb-1.5">
                  <span className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-rose-600" />
                    Warm Ambiance &amp; Hospitality
                  </span>
                  <span className="font-bold">4.9 / 5.0</span>
                </div>
                <div className="w-full bg-[#E7E5E4] h-2 rounded-full overflow-hidden">
                  <div className="bg-[#C2410C] h-full w-[98%]" />
                </div>
              </div>

              <div className="bg-[#FAFAF9] p-4 rounded-2xl border border-[#E7E5E4]">
                <div className="flex justify-between items-center text-sm font-medium text-[#292524] mb-1.5">
                  <span className="flex items-center gap-2">
                    <span className="font-bold text-emerald-700">₹</span>
                    Value for Money (₹200–400)
                  </span>
                  <span className="font-bold">4.9 / 5.0</span>
                </div>
                <div className="w-full bg-[#E7E5E4] h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-600 h-full w-[98%]" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Customer Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {REVIEWS_DATA.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="slow-pop bg-[#F5F5F4] rounded-2xl p-6 sm:p-7 border border-[#E7E5E4] flex flex-col justify-between"
            >
              <div>
                {/* Header of review */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-[#57534E] font-medium flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-700" />
                    {review.source}
                  </span>
                </div>

                {/* Highlight Quote */}
                <h4 className="font-serif-title font-bold text-lg text-[#292524] mb-2 leading-snug">
                  "{review.highlight}"
                </h4>

                {/* Body Text */}
                <p className="text-sm text-[#57534E] leading-relaxed italic">
                  "{review.reviewText}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 mt-4 border-t border-[#E7E5E4] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#C2410C]/20 text-[#C2410C] font-bold flex items-center justify-center text-xs">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[#292524] block leading-none">
                      {review.author}
                    </span>
                    <span className="text-[11px] text-[#57534E] mt-0.5 block">
                      Local Guide • {review.date}
                    </span>
                  </div>
                </div>
                <span className="text-xs text-emerald-800 font-medium bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                  Verified Visit
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Conversational Mountain Vibe Story Card */}
        <div className="bg-gradient-to-br from-[#F5F5F4] to-[#F5F5F4] rounded-3xl p-7 sm:p-10 border border-[#E7E5E4] shadow-sm">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C2410C]">
              Our Story &amp; Sonada Heritage
            </span>
            <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#292524] mt-1.5 mb-3.5">
              A Warm Mountain Sanctuary Amidst Chilly Himalayan Mists
            </h3>
            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed mb-4">
              Perched at Chaikhola near the iconic Green Hill School in Sonada, Taste of Sonada
              was born out of a passion to serve authentic, soul-warming cafe food in Darjeeling's
              scenic hill terrain.
            </p>
            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
              Whether you are an adventurous traveler cruising through National Highway 55, a family
              enjoying a leisurely brunch, or students dropping by for our signature crunchy fried chicken
              and loaded monster burgers, our doors are open with genuine mountain warmth until 8:00 PM every evening.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
