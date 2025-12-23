import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CheckCircle, Target, Users, Zap } from "lucide-react";

const highlights = [
  { icon: Target, label: "Goal-Oriented Solutions" },
  { icon: Zap, label: "Fast Delivery" },
  { icon: Users, label: "Client-Centric Approach" },
  { icon: CheckCircle, label: "Quality Assurance" },
];

const targetClients = [
  "Startups",
  "Small Businesses",
  "Medium Enterprises",
  "Local Companies",
  "International Clients",
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-card/30 relative"
      data-testid="section-about"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 right-1/4 w-96 h-96 bg-[#004aad]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="animate-on-scroll">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#f17026]/10 text-[#f17026] text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-[#f17026] to-[#004aad] bg-clip-text text-transparent">
                Creoture
              </span>
              ?
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              At Creoture, we believe in crafting digital solutions that not only
              meet but exceed expectations. Our team of experienced developers,
              designers, and strategists work together to transform your ideas
              into powerful digital experiences.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We focus on scalability, quality, and long-term value. Every
              project we undertake is treated with the same level of dedication
              and attention to detail, ensuring that your digital presence
              stands out from the competition.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border"
                  data-testid={`about-highlight-${index}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#f17026]/10 to-[#004aad]/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#f17026]" />
                  </div>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-on-scroll">
            <Card className="p-8 bg-card border-card-border">
              <h3 className="text-2xl font-bold mb-6">
                We Work With{" "}
                <span className="text-[#004aad]">All Businesses</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                From ambitious startups to established enterprises, we deliver
                tailored solutions that drive growth and success across all
                industries.
              </p>
              <div className="flex flex-wrap gap-2">
                {targetClients.map((client, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 text-sm"
                    data-testid={`badge-client-${index}`}
                  >
                    {client}
                  </Badge>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-[#f17026] mb-1">
                      100%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Project Completion Rate
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#004aad] mb-1">
                      24/7
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Support Available
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
