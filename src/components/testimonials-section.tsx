import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";


const testimonials = [
  {
    name: "Yousuf Razzak",
    role: "CEO, Sehet.pk",
    content:
      "I had a great experience working with Creoture for my website. Their team was very professional, responsive, and supportive throughout the whole process. They understood my requirements clearly and delivered exactly what I was looking for. The quality of their work and their attention to detail really impressed me. I would definitely recommend Creoture to anyone looking for reliable and efficient website services.",
    rating: 4,
    initials: "YR",
  },
  {
    name: "Saqib Khan",
    role: "AKC DIGITIZING",
    content:
      "Creoture did an amazing job helping us with our website! The entire process was smooth, fast, and incredibly efficient. They delivered everything in a short time without compromising on quality. Truly a professional team that makes complex tasks seem effortless. Highly recommend! Bryan",
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
      className="relative py-20 md:py-28"
      data-testid="section-testimonials"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#004aad]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-[#f17026]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center animate-on-scroll">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#f17026]/10 text-[#f17026] text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            What Our <span className="text-[#004aad]">Clients Say</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to
            say about working with Creoture.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 stagger-children">
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
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
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
