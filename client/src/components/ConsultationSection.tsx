import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import consultationImage from "@assets/generated_images/tutoring_consultation_session_image.png";

const benefits = [
  "Personalized learning plan tailored to your goals",
  "Free assessment of your current knowledge level",
  "Flexible scheduling options to fit your lifestyle",
  "No obligation - discover if we're the right fit"
];

export default function ConsultationSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="consultation" className="py-16 md:py-24 lg:py-32" style={{ backgroundColor: '#253551' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={consultationImage}
              alt="Geography tutor working with student in engaging learning session"
              className="rounded-2xl w-full h-auto shadow-lg"
              data-testid="img-consultation"
            />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Start with a Free Consultation
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-white/80">
              Not sure where to begin? Book a complimentary 30-minute consultation to discuss your learning goals and how I can help you succeed.
            </p>

            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                  data-testid={`benefit-${index}`}
                >
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(224, 224, 219, 0.2)' }}>
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-base leading-relaxed text-white">{benefit}</p>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="px-8 py-6 text-base md:text-lg font-semibold"
              onClick={scrollToContact}
              data-testid="button-book-consultation"
            >
              Book Your Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
