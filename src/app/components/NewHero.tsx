import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export const NewHero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 text-neutral-900">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column - Lawyer Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-amber-600 rounded-full" />
              <span className="text-sm font-medium">Your Trusted Legal Guidance</span>
            </div>

            {/* Main Title */}
            <h1 className="text-6xl lg:text-8xl font-bold tracking-tighter mb-6">
              Alexander
              <br />
              Sterling
            </h1>

            {/* Description */}
            <p className="text-lg text-neutral-600 mb-8 max-w-xl leading-relaxed">
              I am a dedicated legal professional with <strong>40 years of experience</strong> in trust & estates, strategic counsel, and high-stakes litigation. Delivering results-driven solutions with discretion and integrity.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              <div className="flex flex-col">
                <div className="text-4xl font-bold text-amber-600 mb-1">40+</div>
                <div className="text-sm text-neutral-600">Years Experience</div>
              </div>
              <div className="flex flex-col">
                <div className="text-4xl font-bold text-amber-600 mb-1">500+</div>
                <div className="text-sm text-neutral-600">Cases Won</div>
              </div>
              <div className="flex flex-col">
                <div className="text-4xl font-bold text-amber-600 mb-1">98%</div>
                <div className="text-sm text-neutral-600">Success Rate</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-3 mb-8">
              <div className="flex items-center gap-3 text-neutral-700">
                <Phone className="w-5 h-5 text-amber-600" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-700">
                <Mail className="w-5 h-5 text-amber-600" />
                <span>alexander@sterlinglaw.com</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-700">
                <MapPin className="w-5 h-5 text-amber-600" />
                <span>Manhattan, New York</span>
              </div>
            </div>

            {/* Lawyer Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative aspect-[3/4] max-w-md rounded-2xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBsYXd5ZXIlMjBhdHRvcm5leSUyMHBvcnRyYWl0fGVufDF8fHx8MTc4MDcxMDEyNnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Alexander Sterling - Senior Partner"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/30 to-transparent" />
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-3">Request a Consultation</h2>
              <p className="text-neutral-600">
                Get expert legal advice tailored to your situation. Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-neutral-700">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all bg-neutral-50"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-neutral-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all bg-neutral-50"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2 text-neutral-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all bg-neutral-50"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-neutral-700">
                  How can we help? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all resize-none bg-neutral-50"
                  placeholder="Briefly describe your legal needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl"
              >
                <span className="font-semibold">Schedule Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-xs text-neutral-500 text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-300/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};
