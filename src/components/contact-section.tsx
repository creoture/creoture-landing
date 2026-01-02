import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { SiFacebook, SiInstagram, SiThreads } from "react-icons/si";

const services = [
  "Website Design & Development",
  "UI/UX Design",
  "Custom Web Applications",
  "E-commerce Development",
  "Maintenance & Hosting",
  "Branding & Graphic Design",
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info.creoture@gmail.com",
    href: "mailto:info.creoture@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 326 9243547",
    href: "tel:+923269243547",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Drigh Road, Karachi",
    href: null,
  },
];

const socialLinks = [
  {
    name: "Facebook",
    icon: SiFacebook,
    url: "https://www.facebook.com/profile.php?id=61578961324032",
  },
  {
    name: "Instagram",
    icon: SiInstagram,
    url: "https://www.instagram.com/creoture.tech/",
  },
  {
    name: "Threads",
    icon: SiThreads,
    url: "https://www.threads.net/@creoture.tech",
  },
];

export function ContactSection() {
  const { toast } = useToast();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: InsertContact) => {
    const formData = new FormData();
    formData.append("form-name", "contact");

    // Append all fields
    Object.keys(data).forEach((key) => {
      const value = data[key as keyof InsertContact] || "";
      formData.append(key, value);
    });

    try {
      await fetch("/", { method: "POST", body: formData });
      toast({
        title: "Message Sent!",
        description:
          "Thank you for contacting us. We'll get back to you shortly.",
      });
      form.reset();
    } catch (error) {
      toast({ title: "Error", description: "Something went wrong." });
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 md:py-28"
      data-testid="section-contact"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#f17026]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#004aad]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center animate-on-scroll">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#f17026]/10 text-[#f17026] text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Let's Start a <span className="text-[#004aad]">Project</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Ready to bring your ideas to life? Get in touch with us and let's
            discuss how we can help transform your digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <Card
            className="p-6 animate-on-scroll md:p-8 bg-card border-card-border"
            data-testid="card-contact-form"
          >
            <h3 className="mb-6 text-2xl font-bold">Send us a Message</h3>
            <Form {...form}>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
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
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="+92 XXX XXXXXXX" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                        {/* ✅ Hidden input to submit service for Netlify */}
                        <input
                          type="hidden"
                          name="service"
                          value={form.watch("service")}
                        />

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#f17026] to-[#e65d10] text-white border-0"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Form>
          </Card>

          <div className="space-y-6 animate-on-scroll">
            <Card
              className="p-6 md:p-8 bg-card border-card-border"
              data-testid="card-contact-info"
            >
              <h3 className="mb-6 text-2xl font-bold">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#f17026]/10 to-[#004aad]/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#f17026]" />
                    </div>
                    <div>
                      <div className="mb-1 text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium hover:text-[#f17026] transition-colors"
                          data-testid={`link-contact-${item.label.toLowerCase()}`}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="font-medium">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card
              className="p-6 md:p-8 bg-card border-card-border"
              data-testid="card-social-links"
            >
              <h3 className="mb-4 text-xl font-bold">Follow Us</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Stay connected and follow us on social media for updates and
                news.
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#f17026]/10 to-[#004aad]/10 flex items-center justify-center hover:from-[#f17026]/20 hover:to-[#004aad]/20 transition-all duration-300"
                    aria-label={social.name}
                    data-testid={`link-footer-${social.name.toLowerCase()}`}
                  >
                    <social.icon className="w-5 h-5 text-foreground" />
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
