import { useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, BookOpen, Target } from "lucide-react";

const services = [
  {
    id: "math-exam-preparation",
    icon: GraduationCap,
    title: "Mathematics Exam Preparation",
    description: "Prepare for your mathematics exams with focused concept review, past-paper practice, and strategies tailored to your goals.",
    details: "€25 per hour"
  },
  {
    id: "math-one-on-one",
    icon: BookOpen,
    title: "One-on-One Mathematics Support",
    description: "Get personalized help understanding challenging topics, practicing problem-solving, and keeping up with your mathematics syllabus.",
    details: "€25 per hour"
  },
  {
    id: "geography-support",
    icon: Target,
    title: "Geography Tutoring",
    description: "Geography remains available as a secondary subject, including exam preparation and guidance with your IA or Extended Essay.",
    details: "€25 per hour"
  }
];

export default function ServicesSection() {
  const [, setLocation] = useLocation();

  const handleServiceClick = (serviceId: string) => {
    setLocation(`/book?service=${serviceId}`);
  };

  return (
    <section id="services" className="min-h-screen flex items-center py-20" style={{ backgroundColor: '#e0e0db' }}>
      <div className="max-w-7xl mx-auto px-6 w-full">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center mb-10 md:mb-16" style={{ color: '#253551' }}>
          Mathematics Tutoring, with Geography Also Available
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="hover-elevate active-elevate-2 transition-transform duration-200 hover:scale-[1.02] bg-white cursor-pointer"
                onClick={() => handleServiceClick(service.id)}
                data-testid={`card-service-${index}`}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-md flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(37, 53, 81, 0.1)' }}>
                    <Icon className="h-6 w-6" style={{ color: '#253551' }} />
                  </div>
                  <CardTitle className="text-xl md:text-2xl lg:text-3xl" style={{ color: '#253551' }}>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-base leading-relaxed" style={{ color: '#253551' }}>
                    {service.description}
                  </p>
                  <p className="text-sm" style={{ color: '#253551' }}>
                    {service.details}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
