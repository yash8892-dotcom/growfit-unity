import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const images = [
    '/lovable-uploads/23146edb-5853-44aa-9d8b-25087f2881bd.png',
    '/lovable-uploads/3a40cbfc-e587-41cc-b05e-1cc5d22567b0.png',
    '/lovable-uploads/495c05d1-0bf0-4f79-aa89-2a9a26fe01f9.png',
    '/lovable-uploads/1400bccf-4c1b-468f-8245-d272336e89a7.png',
    '/lovable-uploads/1d791547-bc26-47de-ba23-a8fde20a49d9.png',
    '/lovable-uploads/65e472fd-bade-4ad4-a9b4-3ebf314e670b.png'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 20000); // Change image every 20 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 opacity-30">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full h-full"
          >
            <img
              src={images[currentImageIndex]}
              alt="Gym interior"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Wooden Frame Border */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-[#8B4513]/40 via-[#DEB887]/20 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-[#8B4513]/40 via-[#DEB887]/20 to-transparent"></div>
        <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-[#8B4513]/40 via-[#DEB887]/20 to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-[#8B4513]/40 via-[#DEB887]/20 to-transparent"></div>
      </div>

      {/* Geometric LED Lines with Wood Accent */}
      <div className="absolute inset-0">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#DEB887]/20 to-transparent"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute top-10 right-0 w-1/2 h-1 bg-gradient-to-l from-transparent via-[#DEB887]/20 to-transparent"
        ></motion.div>
      </div>
      
      {/* Glass Panel Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="w-4/5 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-lg bg-black/50 p-12 rounded-lg border border-[#DEB887]/10 shadow-[0_0_15px_rgba(222,184,135,0.1)]"
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
                    <div className="relative p-6 border border-[#DEB887]/5 hover:border-[#DEB887]/20 transition-all duration-300">
                      <h3 className="text-xl text-white mb-2">{brand.name}</h3>
                      <p className="text-sm text-white/70 mb-4">{brand.desc}</p>
                      <div className="h-1 w-12 bg-gradient-to-r from-[#DEB887]/60 to-transparent"></div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom LED Accent with Wood Tone */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}
        className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#DEB887]/10 to-transparent"
      ></motion.div>
    </div>
  );
};

export default HeroSection;