import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <HeroSection />
      
      {/* Testimonials Section with Glass Morphism */}
      <section className="relative py-20 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#222222] via-[#1a1a1a] to-[#222222] opacity-95"></div>
        
        {/* Glass Overlay */}
        <div className="absolute inset-0 backdrop-blur-[80px]"></div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
          >
            Success Stories
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Urban Iron has completely transformed my approach to fitness and health.",
                author: "John Doe",
                role: "Fitness Enthusiast"
              },
              {
                text: "The best gym experience I've ever had. The community here is amazing!",
                author: "Jane Smith",
                role: "Professional Athlete"
              },
              {
                text: "State-of-the-art equipment and knowledgeable trainers make this place special.",
                author: "Mike Johnson",
                role: "Business Executive"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#333333] to-[#222222] rounded-xl transition-all duration-300"></div>
                <div className="relative backdrop-blur-sm bg-[#222222]/40 p-6 rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300">
                  <div className="h-1 w-12 bg-gradient-to-r from-primary to-transparent mb-4"></div>
                  <p className="text-lg mb-4 text-gray-200">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#333333] to-[#222222] flex items-center justify-center">
                      <span className="text-xl text-primary">{testimonial.author[0]}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.author}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;