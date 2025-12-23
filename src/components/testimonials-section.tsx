import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Hassan",
    role: "CEO, TechVenture Solutions",
    content:
      "Creoture transformed our outdated website into a modern, high-converting platform. Their attention to detail and commitment to excellence is unmatched. The team delivered beyond our expectations.",
    rating: 5,
    initials: "AH",
  },
  {
    name: "Sara Khan",
    role: "Founder, StyleHub Boutique",
    content:
      "Working with Creoture was a game-changer for our e-commerce business. They built us a beautiful online store that's easy to manage and our sales have increased by 150% since launch.",
    rating: 5,
    initials: "SK",
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, GlobalTech Inc",
    content:
      "The branding work Creoture did for us was exceptional. They captured our company's vision perfectly and created a cohesive brand identity that resonates with our target audience.",
    rating: 5,
    initials: "MC",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 relative"
      data-testid="section-testimonials"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#004aad]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-[#f17026]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#f17026]/10 text-[#f17026] text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What Our <span className="text-[#004aad]">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to
            say about working with Creoture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="stagger-item p-6 bg-card border-card-border hover:border-[#f17026]/30 transition-all duration-300 relative"
              data-testid={`card-testimonial-${index}`}
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-[#f17026]/20" />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#f17026] text-[#f17026]"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12 border-2 border-[#004aad]/20">
                  <AvatarFallback className="bg-gradient-to-br from-[#f17026]/20 to-[#004aad]/20 text-foreground font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
