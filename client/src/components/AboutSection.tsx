import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Award, MapPin, Users } from "lucide-react";
import aboutImage from "@assets/generated_images/geography_tutor_professional_headshot.png";

const credentials = [
  { icon: Award, text: "Master's Degree in Geography" },
  { icon: Users, text: "8+ Years Teaching Experience" },
  { icon: MapPin, text: "Specialized in Physical & Human Geography" }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <Avatar className="w-32 h-32 mx-auto mb-6">
            <AvatarImage src={aboutImage} alt="Professional geography tutor" />
            <AvatarFallback>GT</AvatarFallback>
          </Avatar>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground mb-8">
          <p>
            Hello! I'm a passionate geography educator dedicated to making the world come alive for my students. With over eight years of teaching experience, I've helped hundreds of students not only improve their grades but develop a genuine love for understanding our planet.
          </p>
          <p>
            My approach combines rigorous academic preparation with engaging, real-world examples that make geography relevant and exciting. Whether you're struggling with tectonic plates or tackling urban development theories, I break down complex concepts into clear, manageable lessons.
          </p>
          <p>
            I believe every student can excel in geography with the right guidance and support. My teaching philosophy centers on building confidence, encouraging curiosity, and fostering critical thinking skills that extend far beyond the classroom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {credentials.map((credential, index) => {
            const Icon = credential.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 rounded-md bg-muted/30"
                data-testid={`credential-${index}`}
              >
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-3">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-medium">{credential.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
