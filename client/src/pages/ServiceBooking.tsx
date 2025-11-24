import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const SERVICES = {
  "exam-preparation": "Exam Preparation",
  "one-on-one": "One-on-One Tutoring",
  "skill-development": "Skill Development",
};

type FormData = z.infer<typeof insertContactSubmissionSchema>;

export default function ServiceBooking() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  
  // Get service from URL query parameter
  const params = new URLSearchParams(window.location.search);
  const serviceParam = params.get("service") || "exam-preparation";
  const serviceName = SERVICES[serviceParam as keyof typeof SERVICES] || SERVICES["exam-preparation"];

  const form = useForm<FormData>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      service: serviceName,
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const payload = {
        ...data,
        subject: data.subject?.trim() || undefined,
        service: data.service?.trim() || undefined,
      };
      const res = await apiRequest("POST", "/api/contact", payload);
      return await res.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      form.reset({
        name: "",
        email: "",
        subject: "",
        message: "",
        service: serviceName,
      });
    },
    onError: () => {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormData) => {
    submitMutation.mutate(data);
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

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel style={{ color: '#253551' }}>Service</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      readOnly
                      className="rounded-lg border-0 text-base bg-white"
                      style={{ color: '#253551' }}
                      data-testid="input-service"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel style={{ color: '#253551' }}>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="John Smith"
                      className="rounded-lg border-0 text-base bg-white"
                      style={{ color: '#253551' }}
                      data-testid="input-name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel style={{ color: '#253551' }}>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="john@example.com"
                      className="rounded-lg border-0 text-base bg-white"
                      style={{ color: '#253551' }}
                      data-testid="input-email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel style={{ color: '#253551' }}>Subject (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="What would you like to discuss?"
                      className="rounded-lg border-0 text-base bg-white"
                      style={{ color: '#253551' }}
                      data-testid="input-subject"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel style={{ color: '#253551' }}>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Tell me about your learning goals or any questions you have..."
                      rows={6}
                      className="rounded-lg border-0 text-base resize-none bg-white"
                      style={{ color: '#253551' }}
                      data-testid="input-message"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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
        </Form>
      </div>
    </div>
  );
}
