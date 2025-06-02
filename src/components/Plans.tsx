'use client';

import { motion } from 'framer-motion';
import { Coffee, CoffeeIcon, Cpu, Database, Globe, Shield } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link'; // Import Link from Next.js
import { homePagePlans } from '@/data/siteData'; // Adjusted import path

// Helper function to get icon component based on string
const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'Coffee':
      return <Coffee className="w-6 h-6" />;
    case 'CoffeeIcon':
      return <CoffeeIcon className="w-6 h-6" />;
    // Add other cases if needed for other icons in plans
    default:
      return null;
  }
};

export function Plans() {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  return (
    <section id="plans" className="py-24 bg-dark-200">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Game Server Plans</h2>
          <p className="text-xl text-neutral-400">Choose the perfect plan for your gaming needs</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {homePagePlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-2xl p-8 bg-dark-100 ${
                plan.popular ? 'border-2 border-brown-600' : 'border border-dark-300'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                rotateY: hoveredPlan === index ? 5 : 0
              }}
              onHoverStart={() => setHoveredPlan(index)}
              onHoverEnd={() => setHoveredPlan(null)}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brown-600 to-brown-700 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              <motion.div 
                className="flex items-center justify-center mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-16 rounded-full bg-brown-600/20 flex items-center justify-center text-brown-400">
                  {getIconComponent(plan.icon)}
                </div>
              </motion.div>

              <h3 className="text-2xl font-bold text-white text-center mb-2">{plan.name}</h3>
              <div className="text-center mb-6">
                <p className="text-3xl font-bold text-brown-400">
                  <span className="line-through text-neutral-500">{plan.price}</span>
                  <span className="ml-2">{plan.discountedPrice}</span>
                  <span className="text-sm text-neutral-400">/month</span>
                </p>
                <p className="text-sm text-green-400 mt-1">10% OFF</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-2 text-neutral-400"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Shield className="w-5 h-5 text-brown-400" />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <Link href="/payment" passHref legacyBehavior>
              <motion.a
                className={`w-full py-3 rounded-lg ${
                  plan.popular
                    ? 'bg-gradient-to-r from-brown-600 to-brown-700 text-white hover:shadow-lg hover:shadow-brown-600/20'
                    : 'border border-brown-400 text-brown-400 hover:bg-brown-400/10'
                } font-medium transition-all text-center block`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Select Plan
              </motion.a>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/all-plans" passHref legacyBehavior>
            <motion.a
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-brown-600 to-brown-700 text-white font-medium hover:shadow-lg hover:shadow-brown-600/20 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View More Plans
            </motion.a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}