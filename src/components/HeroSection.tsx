import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      {/* Geometric LED Lines */}
      <div className="absolute inset-0">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute top-10 right-0 w-1/2 h-1 bg-gradient-to-l from-transparent via-primary/20 to-transparent"
        ></motion.div>
      </div>
      
      {/* Glass Panel Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="w-4/5 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-sm bg-black/30 p-12 rounded-lg border border-white/10"
          >
            <h1 className="text-5xl font-light text-white mb-6">
              GROW UP FITNESS
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { name: 'Sportzila', path: '/sportzila', desc: 'Premium nutrition supplements' },
                { name: 'Fitzilla', path: '/fitzilla', desc: 'Gym management software' },
                { name: 'Urban Iron', path: '/urban-iron', desc: 'Modern fitness centers' }
              ].map((brand) => (
                <Link to={brand.path} key={brand.name}>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="group relative overflow-hidden cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-transparent group-hover:from-black/60 transition-all duration-300"></div>
                    <div className="relative p-6 border border-white/5 hover:border-white/20 transition-all duration-300">
                      <h3 className="text-xl text-white mb-2">{brand.name}</h3>
                      <p className="text-sm text-white/70 mb-4">{brand.desc}</p>
                      <div className="h-1 w-12 bg-gradient-to-r from-primary/60 to-transparent"></div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom LED Accent */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}
        className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-primary/10 to-transparent"
      ></motion.div>
    </div>
  );
};

export default HeroSection;