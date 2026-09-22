import { useState, useEffect } from 'react';
import { Coffee, Phone, Star, Menu, X, Clock, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Ambiance', href: '#gallery' },
    { name: 'Vibe & Reviews', href: '#vibe' },
    { name: 'FAQs', href: '#faq' },
    { name: 'Visit Us', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FBF8F3]/90 backdrop-blur-md shadow-sm border-b border-[#E8E2D7] py-3'
          : 'bg-[#FBF8F3]/80 backdrop-blur-sm border-b border-[#E8E2D7]/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            id="brand-logo-link"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-[#D2691E] flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
              <Coffee className="w-5 h-5 text-amber-100" />
            </div>
            <div>
              <span className="font-serif-title text-xl sm:text-2xl font-bold tracking-tight text-[#2C221E] block leading-none">
                Taste of Sonada
              </span>
              <span className="text-[11px] font-medium tracking-wide text-[#6E615A] uppercase block mt-1">
                Cafe & Restaurant • Sonada
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#2C221E]/80 hover:text-[#D2691E] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D2691E] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions: Rating pill & Phone CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#vibe"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F4F1EB] border border-[#E8E2D7] text-xs font-semibold text-[#2C221E] hover:bg-[#EFE9DF] transition-colors"
            >
              <div className="flex items-center text-amber-600">
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
              <span>4.9</span>
              <span className="text-[#6E615A] font-normal">(135+ Reviews)</span>
            </a>

            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              id="navbar-call-btn"
              className="slow-pop inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#D2691E] text-white text-sm font-semibold shadow-sm hover:bg-[#BD5813]"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="p-2 rounded-lg bg-[#D2691E] text-white hover:bg-[#BD5813]"
              aria-label="Call cafe"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#2C221E] hover:bg-[#F4F1EB] border border-[#E8E2D7]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-[#FBF8F3] border-b border-[#E8E2D7] px-4 pt-3 pb-6 shadow-lg transition-all"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-base font-medium text-[#2C221E] hover:bg-[#F4F1EB] hover:text-[#D2691E] transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 border-t border-[#E8E2D7] flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs text-[#6E615A] px-3">
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-600 fill-current" />
                  <strong>4.9 Stars</strong> (135+ Reviews)
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#D2691E]" />
                  Open until 8:00 PM
                </span>
              </div>
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#D2691E] text-white font-semibold shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call {RESTAURANT_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
