import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const benefits = [
  "Personalized learning plan tailored to your goals",
  "Free assessment of your current knowledge level",
  "Flexible scheduling options to fit your lifestyle",
  "No obligation - discover if we're the right fit"
];

const reviewPlaceholders = [
  {
    name: "Mishko",
    text: "“Thank you so much!! I finally got my results and it's a 6!”",
    initials: "M",
  },
  {
    name: "Valeria",
    text: "“Thank you for your help, I got into UvA!”",
    initials: "V",
  },
  {
    name: "Teun",
    text: "“My IA got graded today and the teacher gave me 23 so I'm really happy,”",
    initials: "T",
  },
];

export default function ConsultationSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="consultation" className="h-screen flex items-center" style={{ backgroundColor: '#253551' }}>
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            {reviewPlaceholders.map((review, index) => (
              <div
                key={index}
                className="rounded-2xl p-4 md:p-5 shadow-lg border border-white/10 bg-white/5 backdrop-blur-sm flex items-center gap-4"
                data-testid={`consultation-review-${index}`}
              >
                <div className="flex-shrink-0">
                  <div
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-sm md:text-base font-semibold border border-white/30 bg-white/20 text-white"
                    style={{ boxShadow: "0 0 0 2px rgba(0,0,0,0.15)" }}
                  >
                    {review.initials}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-300 fill-yellow-300"
                      />
                    ))}
                  </div>
                  <p className="text-sm md:text-base mb-2" style={{ color: '#e0e0db' }}>
                    {review.text}
                  </p>
                  <p className="text-xs md:text-sm font-semibold" style={{ color: '#e0e0db', opacity: 0.8 }}>
                    {review.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 lg:mt-0">
            <h2 className="text-4xl md:text-5xl mb-6 text-white">
              Start with a Free Consultation
            </h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#e0e0db' }}>
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
              className="px-8 py-6 text-base md:text-lg border-0"
              style={{ backgroundColor: '#e0e0db', color: '#253551' }}
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
