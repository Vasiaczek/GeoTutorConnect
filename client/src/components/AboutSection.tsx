import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Award, MapPin, Users } from "lucide-react";
import aboutImage from "@assets/generated_images/geography_tutor_professional_headshot.jpg";

const credentials = [
  { icon: Award, text: "7/7 in Geography HL" },
  { icon: Users, text: "Prepared 15 students for final exams" },
  { icon: MapPin, text: "Specialized in Urban Geography" }
];

export default function AboutSection() {
  return (
    <section id="about" className="h-screen flex items-center" style={{ backgroundColor: '#e0e0db' }}>
      <div className="max-w-4xl mx-auto px-6 w-full">
        <div className="text-center mb-12">
          <Avatar className="w-32 h-32 mx-auto mb-6">
            <AvatarImage src={aboutImage} alt="Professional geography tutor" />
            <AvatarFallback>GT</AvatarFallback>
          </Avatar>
          <h2 className="text-4xl md:text-5xl mb-4" style={{ color: '#253551' }}>About Me</h2>
        </div>

        <div className="space-y-6 text-lg leading-relaxed mb-8" style={{ color: '#253551' }}>
          <p>
            My name is Stanisław Wasiak and I'm a second year BSc Spatial Planning and Design student at the University of Groningen. I graduated the International Baccalaureate Programme at the Stefan Batory High School in Warsaw, Poland, with a score of 37/45. Of those points, I graduated with 7/7 in both Higher Level Geography and Standard Level AA Mathematics.
          </p>
          <p>
            I began tutoring in 2024, when I partnered up with a Dutch company offering tutoring services to students in the Netherlands. I decided to begin tutoring on my own when both my students and I realized that their needs are better met when I'm available to them at all times - something that previously wasn't possible. Since then, I've guided more than a dozen students through their finals, writing IAs, and Extended Essays.
          </p>
          <p>
            I helped students from The Netherlands, Spain, Sweden, Poland, and Switzerland in achieving their desired grades, with an average final score of 6.6/7. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
