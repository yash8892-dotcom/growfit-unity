import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <HeroSection />
      
      {/* Testimonials Section */}
      <section className="bg-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-black/50 p-6 rounded-xl">
                <p className="text-lg mb-4">
                  "Grow Up Fitness has completely transformed my approach to fitness and health."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20" />
                  <div>
                    <p className="font-semibold">John Doe</p>
                    <p className="text-sm text-gray-400">Fitness Enthusiast</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;