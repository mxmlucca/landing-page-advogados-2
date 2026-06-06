import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Robert Chen',
    role: 'CEO, Tech Innovations Inc.',
    content: 'Sterling & Associates handled our corporate merger with exceptional professionalism. Their strategic counsel was invaluable, and they navigated complex negotiations with remarkable expertise. Truly a top-tier firm.',
    rating: 5
  },
  {
    name: 'Jennifer Martinez',
    role: 'Private Client',
    content: 'After 20 years of looking for the right estate planning attorney, I finally found the team at Sterling & Associates. Their attention to detail and personalized approach gave me complete peace of mind.',
    rating: 5
  },
  {
    name: 'David Thompson',
    role: 'Managing Director, Thompson Holdings',
    content: 'The litigation support we received was outstanding. They achieved a favorable settlement that exceeded our expectations. Their deep knowledge of civil law and tenacious advocacy made all the difference.',
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="bg-gradient-to-br from-neutral-50 to-amber-50/30 py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 px-4 py-2 rounded-full mb-4"
          >
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">Client Testimonials</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="bg-amber-600 rounded-full p-3">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                ))}
              </div>

              {/* Content */}
              <p className="text-neutral-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-neutral-200 pt-4">
                <div className="font-semibold text-neutral-900">{testimonial.name}</div>
                <div className="text-sm text-neutral-600">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-4xl font-bold text-amber-600 mb-2">4.9/5</div>
            <div className="text-sm text-neutral-600">Client Rating</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-amber-600 mb-2">200+</div>
            <div className="text-sm text-neutral-600">5-Star Reviews</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-amber-600 mb-2">95%</div>
            <div className="text-sm text-neutral-600">Client Retention</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-amber-600 mb-2">24hr</div>
            <div className="text-sm text-neutral-600">Response Time</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
