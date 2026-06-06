import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

export const NewNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Practice Areas', path: '/#services' },
    { name: 'Cases', path: '/work' },
    { name: 'About', path: '/#about' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <Link to="/" className="relative z-10">
            <div className={`text-2xl font-bold tracking-tighter transition-colors ${
              scrolled ? 'text-neutral-900' : 'text-neutral-900'
            }`}>
              STERLING <span className="text-amber-600">&</span> ASSOCIATES
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium hover:text-amber-600 transition-colors ${
                  scrolled ? 'text-neutral-700' : 'text-neutral-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+15551234567"
              className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden relative z-10 p-2 transition-colors ${
              scrolled ? 'text-neutral-900' : 'text-neutral-900'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-neutral-200 ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div className="px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-medium text-neutral-700 hover:text-amber-600 transition-colors py-2"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+15551234567"
            className="flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-4 rounded-xl transition-all duration-300 w-full"
          >
            <Phone className="w-4 h-4" />
            <span className="font-medium">Call Now</span>
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
};
