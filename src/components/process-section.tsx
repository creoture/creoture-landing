import { Card } from "@/components/ui/card";
import { Search, Paintbrush, Code, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "We start by understanding your goals, target audience, and requirements. Through in-depth discussions, we define the project scope and create a roadmap for success.",
  },
  {
    number: "02",
    icon: Paintbrush,
    title: "Design",
    description:
      "Our designers create stunning visuals and intuitive user experiences. We iterate on designs based on your feedback until we achieve the perfect look and feel.",
  },
  {
    number: "03",
    icon: Code,
    title: "Development",
    description:
      "Our developers bring designs to life with clean, efficient code. We use modern technologies and best practices to ensure scalability and performance.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Support",
    description:
      "We deploy your project and provide ongoing support. Our team ensures smooth operation and is always available to help with updates and improvements.",
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="py-20 md:py-28 relative"
      data-testid="section-process"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#f17026]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-[#004aad]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#f17026]/10 text-[#f17026] text-sm font-medium mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How We <span className="text-[#004aad]">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A streamlined process designed to deliver exceptional results while
            keeping you informed every step of the way.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#f17026]/20 via-[#004aad]/20 to-[#f17026]/20 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="stagger-item relative p-6 bg-card border-card-border group hover:border-[#f17026]/30 transition-all duration-300"
                data-testid={`card-process-${index}`}
              >
                <div className="absolute -top-4 left-6 px-3 py-1 bg-gradient-to-r from-[#f17026] to-[#e65d10] rounded-full text-white text-sm font-bold">
                  {step.number}
                </div>
                <div className="pt-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#004aad]/10 to-[#f17026]/10 flex items-center justify-center mb-4 group-hover:from-[#004aad]/20 group-hover:to-[#f17026]/20 transition-all duration-300">
                    <step.icon className="w-7 h-7 text-[#004aad]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-[#f17026] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
