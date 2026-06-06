import React from 'react';
import { motion } from 'motion/react';
import { Scale, Briefcase, FileText, Users, Home, Shield, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: "Corporate Law",
    description: "Strategic counsel for mergers, acquisitions, and complex corporate transactions. Navigate regulatory frameworks with confidence.",
    stats: "2.5B+ in transactions"
  },
  {
    icon: Scale,
    title: "Civil Litigation",
    description: "High-stakes dispute resolution in federal and state courts. Aggressive advocacy balanced with strategic negotiation.",
    stats: "98% success rate"
  },
  {
    icon: FileText,
    title: "Trust & Estates",
    description: "Comprehensive estate planning, wealth preservation, and fiduciary services for high-net-worth individuals and families.",
    stats: "$50M+ preserved"
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Commercial and residential real estate transactions, development agreements, and property dispute resolution.",
    stats: "500+ closings"
  },
  {
    icon: Users,
    title: "Labor & Employment",
    description: "Comprehensive employment counsel from compliance to complex workplace disputes and collective bargaining.",
    stats: "200+ cases resolved"
  },
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description: "Proactive compliance strategies and representation in regulatory investigations and enforcement actions.",
    stats: "100% compliance"
  }
];

export const NewServices = () => {
  return (
    <section id="services" className="bg-neutral-900 text-white py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">

        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-amber-600/10 text-amber-400 px-4 py-2 rounded-full mb-4"
          >
            <Scale className="w-4 h-4" />
            <span className="text-sm font-medium">Our Expertise</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold tracking-tight"
            >
              Practice Areas
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-neutral-300 leading-relaxed lg:pl-12"
            >
              We deliver specialized counsel across core practice areas, combining deep legal knowledge with strategic commercial insight.
            </motion.p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-neutral-800 hover:bg-neutral-800/80 border border-neutral-700 hover:border-amber-600/50 rounded-2xl p-8 transition-all duration-300 h-full flex flex-col">

                {/* Icon */}
                <div className="w-14 h-14 bg-amber-600/10 group-hover:bg-amber-600 rounded-xl flex items-center justify-center mb-6 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-amber-400 group-hover:text-white transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-400 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Stats */}
                <div className="pt-4 border-t border-neutral-700 group-hover:border-amber-600/30 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-amber-400">
                      {service.stats}
                    </span>
                    <ArrowRight className="w-5 h-5 text-neutral-600 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-amber-600/0 group-hover:border-amber-600/50 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-neutral-400 mb-6">
            Don't see what you're looking for? We handle a wide range of legal matters.
          </p>
          <button className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl transition-all duration-300 group shadow-xl">
            <span className="font-semibold">Discuss Your Legal Needs</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
