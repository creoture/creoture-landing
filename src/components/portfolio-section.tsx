import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Specialty Septic Website",
    category: "Wordpress",
    description:
      "Developed and designed the Specialty Septic website, showcasing their professional septic system and underground utility services with a clean, user-friendly interface.",
    tags: ["Wordpress", "PHP", "MySQL", "Plugins"],
    color: "from-[#f17026]/20 to-[#004aad]/20",
    link: "https://www.specialtyseptic.com/"
  },
  {
    title: "Sehet.Pk Business Dashboard",
    category: "Custom Application",
    description:
      "Developed a complete business dashboard solution for Sehet.Pk, providing clear insights and organized control over business processes.",
    tags: ["PHP", "MYSQL", "JS", "Bootstrap"],
    color: "from-[#004aad]/20 to-[#f17026]/20",
    link: ""
  },
];

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="py-20 md:py-28 bg-card/30 relative"
      data-testid="section-portfolio"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#f17026]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-[#004aad]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#004aad]/10 text-[#004aad] text-sm font-medium mb-4">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-[#f17026]">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of our recent work demonstrating our expertise across
            different industries and technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="stagger-item group overflow-hidden bg-card border-card-border hover:border-[#f17026]/30 transition-all duration-300"
              data-testid={`card-project-${index}`}
            >
              <a href={project.link ?? "#"} target="_blank">
                <div
                  className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-50" />
                  <div className="relative z-10 text-center px-6">
                    <div className="w-16 h-16 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <ExternalLink className="w-7 h-7 text-foreground" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-background/20 backdrop-blur-sm border-0"
                    >
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-[#f17026] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="text-xs border-border"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
