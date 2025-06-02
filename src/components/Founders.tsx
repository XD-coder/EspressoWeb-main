'use client';

import { motion } from 'framer-motion';
import { Code, Database, Scale, Coffee } from 'lucide-react';
import Image from 'next/image'; // Import Image from Next.js
import { founders } from '@/data/siteData'; // Adjusted import path

// Helper function to get icon component based on string
const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'Code':
      return <Code className="w-6 h-6" />;
    case 'Database':
      return <Database className="w-6 h-6" />;
    case 'Scale':
      return <Scale className="w-6 h-6" />;
    case 'Coffee':
      return <Coffee className="w-6 h-6" />;
    default:
      return null;
  }
};

export function Founders() {
  return (
    <section id="founders" className="py-24 bg-dark-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Meet the Founders</h2>
          <p className="text-xl text-neutral-400">The team brewing your success</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              className="rounded-2xl bg-dark-200 p-8 border border-dark-300 hover:border-brown-600 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={founder.image}
                  alt={founder.name}
                  width={192} // Required for next/image, w-48 is 192px
                  height={192} // Required for next/image, h-48 is 192px
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-100/90 to-transparent" />
                <motion.div
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-dark-200/90 flex items-center justify-center text-brown-400"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {getIconComponent(founder.icon)}
                </motion.div>
              </motion.div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-1">{founder.name}</h3>
                <p className="text-brown-400 font-medium mb-4">{founder.title}</p>
                <p className="text-neutral-400 mb-4">{founder.description}</p>
                {founder.link && (
                  <motion.a
                    href={founder.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brown-400 hover:text-brown-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Visit Portfolio
                    <Code className="w-4 h-4" />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}