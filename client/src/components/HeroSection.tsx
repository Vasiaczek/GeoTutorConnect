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
    <section id="hero" className="min-h-screen flex items-center pt-0 pb-16 lg:py-20" style={{ backgroundColor: '#253551' }}>
      <div className="max-w-7xl mx-auto px-6 w-full">

        {/* Mobile-only image banner — hidden on lg+ */}
        <div className="lg:hidden mb-8">
          <img
            src={heroImage}
            alt="Geography tutoring materials including globe, maps, and educational resources"
            className="rounded-2xl w-full object-cover shadow-lg"
            style={{ maxHeight: '300px', objectPosition: 'center' }}
            data-testid="img-hero"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 text-white">
              Master IB Geography with Expert Guidance
            </h1>
            <p className="text-base sm:text-lg leading-relaxed mb-4" style={{ color: '#e0e0db' }}>
              As an IB graduate, I understand the struggle with trying to score in the high markbands. Therefore, I decided to commit myself to helping students in understanding the system and achieving their academic goals.
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6" style={{ color: '#e0e0db' }}>
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

          {/* Desktop-only image — hidden on mobile (rendered above instead) */}
          <div className="relative hidden lg:block">
            <img
              src={heroImage}
              alt="Geography tutoring materials including globe, maps, and educational resources"
              className="rounded-2xl w-full h-auto shadow-lg"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
