import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Award, MapPin, Users } from "lucide-react";
import aboutImage from "@assets/generated_images/geography_tutor_professional_headshot.jpg";

const credentials = [
  { icon: Award, text: "7/7 in Mathematics" },
  { icon: Users, text: "Tutored students across 5 countries" },
  { icon: MapPin, text: "7/7 in Geography HL" }
];

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center py-20" style={{ backgroundColor: '#e0e0db' }}>
      <div className="max-w-4xl mx-auto px-6 w-full">
        <div className="text-center mb-8 md:mb-12">
          <Avatar className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6">
            <AvatarImage src={aboutImage} alt="Stanisław Wasiak" className="object-cover object-top" />
            <AvatarFallback>GT</AvatarFallback>
          </Avatar>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4" style={{ color: '#253551' }}>About Me</h2>
        </div>

        <div className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed mb-8" style={{ color: '#253551' }}>
          <p>
          My name is Stanisław Wasiak, and I study Applied Mathematics and Spatial Planning and Design at the University of Groningen. I graduated from the International Baccalaureate Programme at Stefan Batory High School in Warsaw with a score of 37/45, including 7/7 in Mathematics and 7/7 in Geography.
          </p>
          <p>
          My main tutoring focus is mathematics: helping students build understanding, approach problems with confidence, and prepare for exams. I also continue to offer Geography tutoring, drawing on my experience supporting students with exams, IAs, and Extended Essays.
          </p>
          <p>
          I began tutoring in 2024 and have supported students in the Netherlands, Spain, Sweden, Poland, and Switzerland. My students have achieved an average final score of 6.6/7.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {credentials.map((credential, index) => {
            const Icon = credential.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 rounded-md bg-white"
                data-testid={`credential-${index}`}
              >
                <div className="w-10 h-10 rounded-md flex items-center justify-center mb-3" style={{ backgroundColor: 'rgba(37, 53, 81, 0.1)' }}>
                  <Icon className="h-5 w-5" style={{ color: '#253551' }} />
                </div>
                <p className="text-sm" style={{ color: '#253551' }}>{credential.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
