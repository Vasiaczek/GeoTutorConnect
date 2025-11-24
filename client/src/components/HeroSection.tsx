import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/geography_tutoring_hero_image.png";

export default function HeroSection() {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center py-16 md:py-24" style={{ backgroundColor: '#253551' }}>
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white">
              Master Geography with Expert Guidance
            </h1>
            <p className="text-lg leading-relaxed mb-4 text-white/80">
              Transform your understanding of the world with personalized, one-on-one geography tutoring. Whether you're preparing for exams or exploring Earth's wonders, I'll help you achieve your goals.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-white/80">
              With years of experience and a passion for teaching, I make geography engaging, accessible, and memorable for students of all levels.
            </p>
            <Button
              size="lg"
              className="px-8 py-6 text-base md:text-lg font-semibold"
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
