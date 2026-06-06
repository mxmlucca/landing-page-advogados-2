import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="bg-gradient-to-br from-amber-50 to-neutral-50 py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 px-4 py-2 rounded-full mb-4"
          >
            <div className="w-2 h-2 bg-amber-600 rounded-full" />
            <span className="text-sm font-medium">Get In Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 mb-6"
          >
            Let's Discuss Your Case
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-neutral-600 max-w-3xl mx-auto"
          >
            Schedule a confidential consultation with our experienced legal team.
            We're here to provide the strategic counsel you need.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Phone</h3>
                  <a href="tel:+15551234567" className="text-neutral-600 hover:text-amber-600 transition-colors text-lg">
                    +1 (555) 123-4567
                  </a>
                  <p className="text-sm text-neutral-500 mt-1">Mon-Fri, 9am-6pm EST</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Email</h3>
                  <a href="mailto:contact@sterlinglaw.com" className="text-neutral-600 hover:text-amber-600 transition-colors text-lg">
                    contact@sterlinglaw.com
                  </a>
                  <p className="text-sm text-neutral-500 mt-1">We'll respond within 24 hours</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Office</h3>
                  <p className="text-neutral-600 text-lg">
                    350 Fifth Avenue<br />
                    Manhattan, NY 10118
                  </p>
                  <p className="text-sm text-neutral-500 mt-1">Suite 4200</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Office Hours</h3>
                  <div className="space-y-1 text-neutral-600">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: By appointment</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-4 shadow-lg overflow-hidden"
          >
            <div className="w-full h-full min-h-[600px] bg-gradient-to-br from-neutral-100 to-amber-50 rounded-xl flex items-center justify-center relative overflow-hidden">
              {/* Decorative Map Pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" />
                  <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.5" />
                </svg>
              </div>

              {/* Center Pin */}
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-neutral-900 text-xl mb-2">Sterling & Associates</h3>
                <p className="text-neutral-600">Manhattan, New York</p>
              </div>

              {/* Decorative Rings */}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="w-32 h-32 border-2 border-amber-600/30 rounded-full" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="w-48 h-48 border-2 border-amber-600/20 rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
