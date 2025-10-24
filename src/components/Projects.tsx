import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "TinytoolsProject",
      description: "A delightful collection of shareable micro-tools designed to simplify everyday tasks with elegant, user-friendly interfaces.",
      tags: ["React", "JavaScript", "CSS"],
      github: "https://github.com/Aravindhdit/TinytoolsProject",
      gradient: "from-coral to-salmon"
    },
    {
      title: "LocalFarmMini",
      description: "Mini project focused on local farming initiatives, connecting farmers with consumers through a streamlined digital platform.",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Aravindhdit/LocalFarmMini",
      gradient: "from-salmon to-warm-orange"
    },
    {
      title: "FitWellFusion",
      description: "Comprehensive Android fitness application helping users track workouts, nutrition, and achieve their health goals.",
      tags: ["Android", "Java", "Mobile"],
      github: "https://github.com/Aravindhdit/FitwellApp",
      gradient: "from-warm-orange to-coral-light"
    },
    {
      title: "AravTravely",
      description: "Travel planning and exploration platform making journey planning intuitive and exciting for adventure seekers.",
      tags: ["Web Development", "UI/UX"],
      github: "https://github.com/Aravindhdit/aravtravely",
      gradient: "from-coral-light to-coral"
    }
  ];

  return (
    <section id="projects" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center animate-slide-up">
          <span className="text-gradient">Featured Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Header */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-white drop-shadow-lg">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-muted rounded-full text-sm text-foreground/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-coral/30 hover:border-coral hover:bg-coral/5"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-gradient-warm hover:opacity-90 text-white px-8"
            onClick={() => window.open("https://github.com/Aravindhdit?tab=repositories", "_blank")}
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
