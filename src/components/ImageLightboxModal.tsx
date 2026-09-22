import { useEffect } from 'react';
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ImageLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  subtitle?: string;
  onNext?: () => void;
  onPrev?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
}

export default function ImageLightboxModal({
  isOpen,
  onClose,
  imageUrl,
  title,
  subtitle,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
}: ImageLightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext && hasNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev && hasPrev) onPrev();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onNext, onPrev, hasNext, hasPrev]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        id="lightbox-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#2C221E]/80 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          id="lightbox-container"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative max-w-4xl w-full max-h-[92vh] flex flex-col bg-[#FBF8F3] rounded-2xl overflow-hidden shadow-2xl border border-[#E8E2D7]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#E8E2D7] bg-[#F4F1EB]">
            <div>
              <h4 className="font-serif-title text-base sm:text-lg font-semibold text-[#2C221E] leading-snug">
                {title}
              </h4>
              {subtitle && (
                <p className="text-xs sm:text-sm text-[#6E615A]">{subtitle}</p>
              )}
            </div>
            <button
              id="lightbox-close-button"
              onClick={onClose}
              className="p-2 rounded-full text-[#6E615A] hover:text-[#2C221E] hover:bg-[#E8E2D7] transition-colors focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Image Canvas with Controls */}
          <div className="relative flex-1 flex items-center justify-center overflow-auto bg-[#F4F1EB]/50 p-2 sm:p-4 min-h-[300px]">
            <img
              src={imageUrl}
              alt={title}
              referrerPolicy="no-referrer"
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-sm select-none"
            />

            {/* Left Nav Button */}
            {hasPrev && onPrev && (
              <button
                id="lightbox-prev-btn"
                onClick={onPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#FBF8F3]/90 text-[#2C221E] shadow-md hover:bg-white hover:scale-105 transition-all border border-[#E8E2D7]"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            {/* Right Nav Button */}
            {hasNext && onNext && (
              <button
                id="lightbox-next-btn"
                onClick={onNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#FBF8F3]/90 text-[#2C221E] shadow-md hover:bg-white hover:scale-105 transition-all border border-[#E8E2D7]"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Bottom Bar Info */}
          <div className="px-5 py-2.5 bg-[#FBF8F3] border-t border-[#E8E2D7] flex items-center justify-between text-xs text-[#6E615A]">
            <span>Taste of Sonada • Chaikhola, Darjeeling</span>
            <span>Use arrow keys to navigate or ESC to close</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
