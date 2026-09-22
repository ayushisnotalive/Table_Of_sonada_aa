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
          ? 'bg-[#FAFAF9]/90 backdrop-blur-md shadow-sm border-b border-[#E7E5E4] py-3'
          : 'bg-[#FAFAF9]/80 backdrop-blur-sm border-b border-[#E7E5E4]/60 py-4'
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
            <div className="w-10 h-10 rounded-xl bg-[#C2410C] flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
              <Coffee className="w-5 h-5 text-amber-100" />
            </div>
            <div>
              <span className="font-serif-title text-xl sm:text-2xl font-bold tracking-tight text-[#292524] block leading-none">
                Taste of Sonada
              </span>
              <span className="text-[11px] font-medium tracking-wide text-[#57534E] uppercase block mt-1">
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
                className="text-sm font-medium text-[#292524]/80 hover:text-[#C2410C] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C2410C] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions: Rating pill & Phone CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#vibe"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F5F5F4] border border-[#E7E5E4] text-xs font-semibold text-[#292524] hover:bg-[#F5F5F4] transition-colors"
            >
              <div className="flex items-center text-amber-600">
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
              <span>4.9</span>
              <span className="text-[#57534E] font-normal">(135+ Reviews)</span>
            </a>

            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              id="navbar-call-btn"
              className="slow-pop inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#C2410C] text-white text-sm font-semibold shadow-sm hover:bg-[#9A3412]"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="p-2 rounded-lg bg-[#C2410C] text-white hover:bg-[#9A3412]"
              aria-label="Call cafe"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#292524] hover:bg-[#F5F5F4] border border-[#E7E5E4]"
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
          className="md:hidden bg-[#FAFAF9] border-b border-[#E7E5E4] px-4 pt-3 pb-6 shadow-lg transition-all"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-base font-medium text-[#292524] hover:bg-[#F5F5F4] hover:text-[#C2410C] transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 border-t border-[#E7E5E4] flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs text-[#57534E] px-3">
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-600 fill-current" />
                  <strong>4.9 Stars</strong> (135+ Reviews)
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#C2410C]" />
                  Open until 8:00 PM
                </span>
              </div>
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#C2410C] text-white font-semibold shadow-sm"
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
