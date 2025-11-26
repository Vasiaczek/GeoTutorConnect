import { useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, BookOpen, Target } from "lucide-react";

const services = [
  {
    id: "exam-preparation",
    icon: GraduationCap,
    title: "Exam Preparation",
    description: "Comprehensive exam preparation for IB, MYP, and university level courses. Guidance through solving past papers and essay-writing practice.",
    details: "€25 per hour"
  },
  {
    id: "one-on-one",
    icon: BookOpen,
    title: "Help in writing the IA/EE",
    description: "Guidance through every stage of your Geography IA or EE: topic selection, research design, data collection, analysis, and final write-up.",
    details: "€25 per hour"
  },
  {
    id: "skill-development",
    icon: Target,
    title: "Syllabus practice",
    description: "Targeted practice that follows your syllabus, where I help you understand difficult concepts in simple, concise terms, utilizing modern, tangible examples.",
    details: "€25 per hour"
  }
];

export default function ServicesSection() {
  const [, setLocation] = useLocation();

  const handleServiceClick = (serviceId: string) => {
    setLocation(`/book?service=${serviceId}`);
  };

  return (
    <section id="services" className="h-screen flex items-center" style={{ backgroundColor: '#e0e0db' }}>
      <div className="max-w-7xl mx-auto px-6 w-full">
        <h2 className="text-4xl md:text-5xl text-center mb-16" style={{ color: '#253551' }}>
          My Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <CardTitle className="text-2xl md:text-3xl" style={{ color: '#253551' }}>
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
