import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      data-testid="section-cta"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#004aad]/20 via-background to-[#f17026]/20" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f17026]/10 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#004aad]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f17026]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Ready to Transform Your{" "}
          <span className="bg-gradient-to-r from-[#f17026] to-[#004aad] bg-clip-text text-transparent">
            Digital Presence
          </span>
          ?
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Let's work together to create something exceptional. Our team is ready
          to bring your vision to life with cutting-edge solutions tailored to
          your needs.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={() => scrollToSection("#contact")}
            className="bg-gradient-to-r from-[#f17026] to-[#e65d10] text-white border-0 px-8 py-6 text-lg"
            data-testid="button-cta-contact"
          >
            Contact Us
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("#portfolio")}
            className="border-[#004aad] text-foreground px-8 py-6 text-lg"
            data-testid="button-cta-portfolio"
          >
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  );
}
