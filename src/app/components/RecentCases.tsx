import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, ArrowRight } from 'lucide-react';

const cases = [
  {
    attorney: 'Michael Chen',
    role: 'Corporate Law Specialist',
    case: 'Fortune 500 Merger',
    result: '$2.5B Transaction',
    image: 'https://images.unsplash.com/photo-1558222218-b7b54eede3f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0JTIwc3VpdHxlbnwxfHx8fDE3ODA3MTAxMzF8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    attorney: 'Sarah Williams',
    role: 'Civil Litigation Partner',
    case: 'Class Action Victory',
    result: '$15M Settlement',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0JTIwc3VpdHxlbnwxfHx8fDE3ODA3MTAxMzF8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    attorney: 'David Morrison',
    role: 'Trust & Estates Expert',
    case: 'Estate Planning',
    result: '$50M Preserved',
    image: 'https://images.unsplash.com/photo-1546572797-e8c933a75a1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0JTIwc3VpdHxlbnwxfHx8fDE3ODA3MTAxMzF8MA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export const RecentCases = () => {
  return (
    <section className="bg-neutral-900 text-white py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-amber-600/10 text-amber-400 px-4 py-2 rounded-full mb-4"
            >
              <Award className="w-4 h-4" />
              <span className="text-sm font-medium">Proven Results</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-6xl font-bold tracking-tight"
            >
              Recent Cases with
              <br />
              <span className="text-amber-400">Proven Results</span>
            </motion.h2>
          </div>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden lg:flex items-center gap-2 text-amber-400 hover:gap-3 transition-all duration-300 group"
          >
            <span>View All Cases</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 bg-neutral-800">
                <ImageWithFallback
                  src={caseItem.image}
                  alt={caseItem.attorney}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />

                {/* Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-amber-400 font-semibold mb-2">{caseItem.attorney}</div>
                  <div className="text-sm text-neutral-300 mb-1">{caseItem.role}</div>
                </div>
              </div>

              {/* Case Details */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold group-hover:text-amber-400 transition-colors">
                  {caseItem.case}
                </h3>
                <p className="text-neutral-400">{caseItem.result}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All */}
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="lg:hidden flex items-center gap-2 text-amber-400 hover:gap-3 transition-all duration-300 mt-12 mx-auto"
        >
          <span>View All Cases</span>
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
    </section>
  );
};
