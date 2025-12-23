import { Card } from "@/components/ui/card";
import {
  Globe,
  Palette,
  Code2,
  ShoppingCart,
  Server,
  Zap ,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description:
      "Modern, responsive websites that captivate your audience and drive conversions. Built with the latest technologies for optimal performance.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centered design solutions using Figma. We create intuitive interfaces that delight users and enhance engagement.",
  },
  {
    icon: Code2,
    title: "Custom Web Applications",
    description:
      "Powerful custom solutions built with Laravel, PHP, and MySQL. Scalable applications tailored to your unique business needs.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    description:
      "Complete online store solutions that drive sales. From product catalogs to payment integration, we handle it all.",
  },
  {
    icon: Server,
    title: "Maintenance & Hosting",
    description:
      "Reliable website maintenance and hosting services. Keep your digital presence running smoothly with 24/7 support.",
  },
  {
    icon: Zap ,
    title: "Wordpress Website Development",
    description:
      "We create attractive, high-performance websites using modern WordPress themes, powerful plugins, and the latest web tools.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 md:py-28 relative"
      data-testid="section-services"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#f17026]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#004aad]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#004aad]/10 text-[#004aad] text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What We <span className="text-[#f17026]">Offer</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions designed to elevate your business
            and create lasting impact in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {services.map((service, index) => (
            <Card
              key={index}
              className="stagger-item group p-6 bg-card border-card-border hover:border-[#f17026]/30 transition-all duration-300 hover:-translate-y-1"
              data-testid={`card-service-${index}`}
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#f17026]/10 to-[#004aad]/10 flex items-center justify-center mb-4 group-hover:from-[#f17026]/20 group-hover:to-[#004aad]/20 transition-all duration-300">
                <service.icon className="w-7 h-7 text-[#f17026]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-[#f17026] transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
