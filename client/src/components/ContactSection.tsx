import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";
import { submitWeb3Form } from "@/lib/web3forms";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

type FormData = z.infer<typeof insertContactSubmissionSchema>;

export default function ContactSection() {
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      service: undefined,
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: FormData) => {
      return await submitWeb3Form({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        service: data.service,
      });
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      form.reset();
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
    <section id="contact" className="h-screen flex items-center" style={{ backgroundColor: '#e0e0db' }}>
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="mt-16">
            <h2 className="text-4xl md:text-5xl mb-6" style={{ color: '#253551' }}>Contact Me</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#253551', opacity: 0.8 }}>
              Have questions? Send me a message and I'll get back to you within 24 hours.
            </p>
          </div>

          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Full Name"
                          className="rounded-lg border-0 text-base"
                          style={{ backgroundColor: '#ffffff', color: '#253551' }}
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
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="Email"
                          className="rounded-lg border-0 text-base"
                          style={{ backgroundColor: '#ffffff', color: '#253551' }}
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
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Subject (Optional)"
                          className="rounded-lg border-0 text-base"
                          style={{ backgroundColor: '#ffffff', color: '#253551' }}
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
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Tell me about your learning goals or any questions you have..."
                          rows={4}
                          className="rounded-lg border-0 text-base resize-none"
                          style={{ backgroundColor: '#ffffff', color: '#253551' }}
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
      </div>
    </section>
  );
}
