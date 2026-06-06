import React from 'react';
import { motion } from 'motion/react';
import { Award, Users, TrendingUp, Shield } from 'lucide-react';

export const NewAbout = () => {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Upholding the highest ethical standards in every case'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Delivering superior legal outcomes through expertise'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Building lasting relationships with our clients'
    },
    {
      icon: TrendingUp,
      title: 'Results',
      description: 'Focused on achieving measurable success'
    }
  ];

  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-amber-600 rounded-full" />
              <span className="text-sm font-medium">About Our Firm</span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 mb-6">
              Advocacy Without
              <br />
              <span className="text-amber-600">Compromise</span>
            </h2>

            <div className="space-y-4 text-lg text-neutral-600 leading-relaxed mb-8">
              <p>
                In a profession often defined by volume, we choose precision. We represent clients who value strategic thinking, discretion, and outcomes over spectacle.
              </p>
              <p>
                Our philosophy is founded on a single principle: <strong className="text-neutral-900">clarity precedes victory</strong>. Every case begins with understanding, continues through meticulous preparation, and concludes with resolution.
              </p>
              <p>
                Our approach is rooted in the belief that legal excellence requires both intellectual rigor and human understanding. We don't just know the law—we anticipate how it will be applied.
              </p>
            </div>

            {/* Client List */}
            <div className="pt-8 border-t border-neutral-200">
              <span className="text-sm font-medium text-neutral-500 block mb-4">Trusted counsel for</span>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-700 font-medium">
                {['Goldman Sachs', 'JPMorgan', 'Pfizer', 'Meta', 'ExxonMobil', 'Citigroup', 'Oracle'].map((client, i) => (
                  <motion.span
                    key={client}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="hover:text-amber-600 transition-colors cursor-default"
                  >
                    {client}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-gradient-to-br from-neutral-50 to-amber-50/20 p-8 rounded-2xl border border-neutral-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
