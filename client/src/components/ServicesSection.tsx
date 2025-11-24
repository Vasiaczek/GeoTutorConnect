import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, BookOpen, Target } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Exam Preparation",
    description: "Comprehensive exam preparation for GCSE, A-Level, and university geography courses. Structured revision plans, practice questions, and proven strategies to maximize your grades.",
    details: "Tailored support for all major exam boards"
  },
  {
    icon: BookOpen,
    title: "One-on-One Tutoring",
    description: "Personalized tutoring sessions designed around your learning style and pace. From physical geography to human geography, we cover all topics with clarity and depth.",
    details: "Flexible scheduling to fit your needs"
  },
  {
    icon: Target,
    title: "Skill Development",
    description: "Build essential geography skills including map reading, data analysis, fieldwork techniques, and critical thinking. Perfect for students looking to excel beyond the curriculum.",
    details: "Interactive learning with real-world examples"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-32" style={{ backgroundColor: '#e0e0db' }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: '#253551' }}>
          My Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="hover-elevate active-elevate-2 transition-transform duration-200 hover:scale-[1.02] bg-white"
                data-testid={`card-service-${index}`}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-md flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(37, 53, 81, 0.1)' }}>
                    <Icon className="h-6 w-6" style={{ color: '#253551' }} />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-semibold" style={{ color: '#253551' }}>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-base leading-relaxed" style={{ color: '#253551', opacity: 0.8 }}>
                    {service.description}
                  </p>
                  <p className="text-sm font-medium" style={{ color: '#253551' }}>
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
