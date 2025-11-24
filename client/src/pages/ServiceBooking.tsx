import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

const SERVICES = {
  "exam-preparation": "Exam Preparation",
  "one-on-one": "One-on-One Tutoring",
  "skill-development": "Skill Development",
  "general": "General Inquiry"
};

export default function ServiceBooking() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  
  // Get service from URL query parameter
  const params = new URLSearchParams(window.location.search);
  const serviceParam = params.get("service") || "general";
  const serviceName = SERVICES[serviceParam as keyof typeof SERVICES] || SERVICES.general;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    service: serviceName
  });

  const submitMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const res = await apiRequest("POST", "/api/contact", data);
      return await res.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", subject: "", message: "", service: serviceName });
    },
    onError: () => {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate(formData);
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
    <div className="min-h-screen flex items-center" style={{ backgroundColor: '#e0e0db' }}>
      <div className="max-w-3xl mx-auto px-6 py-16 w-full">
        <Button
          variant="ghost"
          className="mb-8 -ml-2"
          onClick={() => setLocation("/")}
          data-testid="button-back"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl mb-4" style={{ color: '#253551' }}>
            Book {serviceName}
          </h1>
          <p className="text-lg" style={{ color: '#253551' }}>
            Fill out the form below and I'll get back to you within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="service" style={{ color: '#253551' }}>Service</Label>
            <Input
              id="service"
              name="service"
              value={formData.service}
              readOnly
              className="rounded-lg border-0 text-base bg-white"
              style={{ color: '#253551' }}
              data-testid="input-service"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="name" style={{ color: '#253551' }}>Full Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="John Smith"
              value={formData.name}
              onChange={handleChange}
              required
              className="rounded-lg border-0 text-base bg-white"
              style={{ color: '#253551' }}
              data-testid="input-name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" style={{ color: '#253551' }}>Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="rounded-lg border-0 text-base bg-white"
              style={{ color: '#253551' }}
              data-testid="input-email"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject" style={{ color: '#253551' }}>Subject (Optional)</Label>
            <Input
              id="subject"
              name="subject"
              placeholder="What would you like to discuss?"
              value={formData.subject}
              onChange={handleChange}
              className="rounded-lg border-0 text-base bg-white"
              style={{ color: '#253551' }}
              data-testid="input-subject"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" style={{ color: '#253551' }}>Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell me about your learning goals or any questions you have..."
              value={formData.message}
              onChange={handleChange}
              rows={6}
              required
              className="rounded-lg border-0 text-base resize-none bg-white"
              style={{ color: '#253551' }}
              data-testid="input-message"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full text-base md:text-lg border-0"
            style={{ backgroundColor: '#253551', color: '#e0e0db' }}
            disabled={submitMutation.isPending}
            data-testid="button-submit"
          >
            {submitMutation.isPending ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </div>
  );
}
