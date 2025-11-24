import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log("Contact form submitted:", formData);

    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="h-screen flex items-center" style={{ backgroundColor: '#253551' }}>
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contact Me</h2>
            <p className="text-lg leading-relaxed text-white/80">
              Have questions? Ready to start your geography learning journey? Send me a message and I'll get back to you within 24 hours.
            </p>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="rounded-lg border-0 text-base"
                  style={{ backgroundColor: '#e0e0db', color: '#253551' }}
                  data-testid="input-name"
                />
              </div>

              <div className="space-y-2">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="rounded-lg border-0 text-base"
                  style={{ backgroundColor: '#e0e0db', color: '#253551' }}
                  data-testid="input-email"
                />
              </div>

              <div className="space-y-2">
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Subject (Optional)"
                  value={formData.subject}
                  onChange={handleChange}
                  className="rounded-lg border-0 text-base"
                  style={{ backgroundColor: '#e0e0db', color: '#253551' }}
                  data-testid="input-subject"
                />
              </div>

              <div className="space-y-2">
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your learning goals or any questions you have..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className="rounded-lg border-0 text-base resize-none"
                  style={{ backgroundColor: '#e0e0db', color: '#253551' }}
                  data-testid="input-message"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full text-base md:text-lg font-semibold"
                disabled={isSubmitting}
                data-testid="button-submit"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
