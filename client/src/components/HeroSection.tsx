import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/geography_tutoring_hero_image.jfif";

export default function HeroSection() {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="h-screen flex items-center" style={{ backgroundColor: '#253551' }}>
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 text-white">
              Master IB Geography with Expert Guidance
            </h1>
            <p className="text-lg leading-relaxed mb-4" style={{ color: '#e0e0db' }}>
              As an IB graduate, I understand the struggle with trying to score in the high markbands. Therefore, I decided to commit myself to helping students in understanding the system and achieving their academic goals.
            </p>
            <p className="text-2xl md:text-3xl font-semibold mb-6" style={{ color: '#e0e0db' }}>
              Without All Nighters
            </p>
            <Button
              size="lg"
              className="px-8 py-6 text-base md:text-lg border-0"
              style={{ backgroundColor: '#e0e0db', color: '#253551' }}
              onClick={scrollToServices}
              data-testid="button-learn-more"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="relative">
            <img
              src={heroImage}
              alt="Geography tutoring materials including globe, maps, and educational resources"
              className="rounded-2xl w-full h-auto shadow-lg"
              data-testid="img-hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
