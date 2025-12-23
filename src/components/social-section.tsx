import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SiFacebook, SiInstagram, SiThreads } from "react-icons/si";

const socialLinks = [
  {
    name: "Facebook",
    icon: SiFacebook,
    url: "https://www.facebook.com/profile.php?id=61578961324032",
    description: "Follow us for updates and company news",
    color: "#1877F2",
  },
  {
    name: "Instagram",
    icon: SiInstagram,
    url: "https://www.instagram.com/creoture.tech/",
    description: "See our latest projects and behind the scenes",
    color: "#E4405F",
  },
  {
    name: "Threads",
    icon: SiThreads,
    url: "https://www.threads.net/@creoture.tech",
    description: "Join the conversation and share ideas",
    color: "#000000",
  },
];

export function SocialSection() {
  return (
    <section
      className="py-20 md:py-28 bg-card/30 relative"
      data-testid="section-social"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#f17026]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-[#004aad]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#004aad]/10 text-[#004aad] text-sm font-medium mb-4">
            Connect With Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Follow Our <span className="text-[#f17026]">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay updated with our latest projects, industry insights, and
            company news. Connect with us on social media.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
          {socialLinks.map((social, index) => (
            <Card
              key={index}
              className="stagger-item group p-6 bg-card border-card-border hover:border-[#f17026]/30 transition-all duration-300 text-center"
              data-testid={`card-social-${index}`}
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#f17026]/10 to-[#004aad]/10 flex items-center justify-center mx-auto mb-4 group-hover:from-[#f17026]/20 group-hover:to-[#004aad]/20 transition-all duration-300">
                <social.icon
                  className="w-10 h-10 transition-colors duration-300"
                  style={{ color: social.color }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{social.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {social.description}
              </p>
              <Button
                asChild
                variant="outline"
                className="border-[#000000] hover:border-[#f17026] hover:text-[#f17026]"
              >
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`link-social-${social.name.toLowerCase()}`}
                >
                  Follow on {social.name}
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
