import { motion } from 'framer-motion';
import { Coffee, Tag } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-dark-100 border-b border-dark-300 z-50">
      {/* Promotional Banner */}
      <motion.div 
        className="bg-gradient-to-r from-brown-700 to-brown-600 py-3 text-white text-center font-medium shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="container mx-auto px-4 flex items-center justify-center gap-3">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Tag className="w-5 h-5 text-brown-200" />
          </motion.div>
          <span className="text-brown-100">We are open! Enjoy 10% discount on everything</span>
        </div>
      </motion.div>
      
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="relative">
            <Coffee className="w-8 h-8 text-brown-400" />
            {/* Steam animation */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute -top-2 left-1/2 w-1 h-1 bg-brown-400/20 rounded-full"
                initial={{ y: 0, opacity: 0.5, scale: 1 }}
                animate={{
                  y: -20,
                  opacity: 0,
                  scale: 1.5,
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  },
                }}
              />
            ))}
          </div>
          <span className="text-xl font-bold text-white">Espresso Hosting</span>
        </motion.div>
        
        <div className="flex items-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#plans"
            className="px-4 py-2 rounded-lg bg-brown-600 text-white font-medium hover:bg-brown-700 transition-colors"
          >
            Purchase
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://panel.espressohost.xyz"
            className="px-4 py-2 rounded-lg border border-brown-400 text-brown-400 font-medium hover:bg-brown-400/10 transition-colors"
          >
            Panel
          </motion.a>
        </div>
      </nav>
    </header>
  );
}