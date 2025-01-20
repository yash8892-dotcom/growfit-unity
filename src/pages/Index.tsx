import Navigation from "@/components/Navigation";
import SubBrandCard from "@/components/SubBrandCard";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const subBrands = [
    {
      title: "Sportzila",
      description: "Premium nutrition supplements for peak performance",
      path: "/sportzila",
      imageUrl: "/placeholder.svg",
    },
    {
      title: "Fitzilla",
      description: "Revolutionary gym management software",
      path: "/fitzilla",
      imageUrl: "/placeholder.svg",
    },
    {
      title: "Urban Iron",
      description: "Modern gyms for the modern athlete",
      path: "/urban-iron",
      imageUrl: "/placeholder.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg"
            alt="Fitness background"
            className="h-full w-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 text-center px-4 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Life with
            <span className="text-primary"> Grow Up Fitness</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Your journey to fitness excellence starts here. Discover our ecosystem of fitness solutions.
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto hover:bg-primary/90 transition-colors">
            Get Started <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Sub-brands Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Our Fitness Ecosystem
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {subBrands.map((brand) => (
            <SubBrandCard key={brand.title} {...brand} />
          ))}
        </div>
      </section>

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