import { SiFacebook, SiInstagram, SiThreads } from "react-icons/si";
import { Mail, Phone, MapPin } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
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

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className="bg-card/50 border-t border-border pt-16 pb-8"
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div className="lg:col-span-1">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 mb-4"
              data-testid="link-footer-logo"
            >
              <span className="text-2xl font-bold">
                <span className="text-[#f17026]">Creo</span>
                <span className="text-[#004aad]">ture</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              Smart Solutions. Crafted for Tomorrow.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your trusted partner for premium software and digital solutions
              that drive growth and success.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-[#f17026] transition-colors text-sm"
                    data-testid={`link-footer-nav-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#f17026] flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:info.creoture@gmail.com"
                  className="text-muted-foreground hover:text-[#f17026] transition-colors text-sm"
                  data-testid="link-footer-email"
                >
                  info.creoture@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#f17026] flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+923269243547"
                  className="text-muted-foreground hover:text-[#f17026] transition-colors text-sm"
                  data-testid="link-footer-phone"
                >
                  +92 326 9243547
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#f17026] flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Drigh Road, Karachi
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Stay connected on social media
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#f17026]/10 to-[#004aad]/10 flex items-center justify-center hover:from-[#f17026]/20 hover:to-[#004aad]/20 transition-all duration-300"
                  aria-label={social.name}
                  data-testid={`link-footer-social-${social.name.toLowerCase()}`}
                >
                  <social.icon className="w-5 h-5 text-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {new Date().getFullYear()} Creoture. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Crafting digital excellence
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
