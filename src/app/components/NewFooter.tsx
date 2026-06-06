import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram, ArrowRight } from 'lucide-react';

export const NewFooter = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      {/* CTA Section */}
      <div className="border-b border-neutral-800">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Ready to discuss
                <br />
                <span className="text-amber-400">your case?</span>
              </h2>
              <p className="text-xl text-neutral-400 max-w-xl">
                Schedule a confidential consultation with our experienced legal team. We're here to provide the strategic counsel you need.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col sm:flex-row gap-4 lg:justify-end"
            >
              <a
                href="tel:+15551234567"
                className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl transition-all duration-300 group shadow-xl"
              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">Call Now</span>
              </a>
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-neutral-900 px-8 py-4 rounded-xl transition-all duration-300 group"
              >
                <span className="font-semibold">Request Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold tracking-tighter mb-4">
              STERLING <span className="text-amber-600">&</span> ASSOCIATES
            </div>
            <p className="text-neutral-400 mb-6 leading-relaxed">
              Delivering strategic legal counsel with integrity, discretion, and excellence since 1984.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-neutral-800 hover:bg-amber-600 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-neutral-800 hover:bg-amber-600 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-neutral-800 hover:bg-amber-600 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-semibold mb-4 text-amber-400">Practice Areas</h3>
            <ul className="space-y-3">
              <li><Link to="/#services" className="text-neutral-400 hover:text-white transition-colors">Corporate Law</Link></li>
              <li><Link to="/#services" className="text-neutral-400 hover:text-white transition-colors">Civil Litigation</Link></li>
              <li><Link to="/#services" className="text-neutral-400 hover:text-white transition-colors">Trust & Estates</Link></li>
              <li><Link to="/#services" className="text-neutral-400 hover:text-white transition-colors">Real Estate</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-amber-400">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-neutral-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/#about" className="text-neutral-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/work" className="text-neutral-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/#contact" className="text-neutral-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-amber-400">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-neutral-400">
                <MapPin className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <span>350 Fifth Avenue<br />Manhattan, NY 10118</span>
              </li>
              <li className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <a href="tel:+15551234567">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <a href="mailto:contact@sterlinglaw.com">contact@sterlinglaw.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            © 2026 Sterling & Associates. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-neutral-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
