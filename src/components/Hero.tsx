import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-coral/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-salmon/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 animate-slide-up">
          {/* Name */}
          <div className="space-y-2">
            <p className="text-coral text-lg md:text-xl font-medium tracking-wide">Hi, I'm</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight">
              <span className="block text-white">ARAVINDH D</span>
            </h1>
          </div>

          {/* Large Display Text */}
          <div className="py-8">
            <h2 className="text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-black leading-none">
              <span className="text-gradient">FRONTEND</span>
            </h2>
            <h2 className="text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-black leading-none -mt-4 md:-mt-8">
              <span className="text-gradient">DEVELOPER</span>
            </h2>
          </div>

          {/* Tagline */}
          <p className="text-white/80 text-xl md:text-2xl max-w-2xl font-light">
            Crafting beautiful web experiences with clean code and modern design
          </p>

          {/* Social Links */}
          <div className="flex gap-4 pt-8">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm"
              onClick={() => window.open("https://github.com/Aravindhdit", "_blank")}
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm"
              onClick={() => window.open("https://www.linkedin.com/in/aravindhd7/", "_blank")}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm"
              onClick={() => window.location.href = "mailto:daravindh2005@gmail.com"}
            >
              <Mail className="mr-2 h-5 w-5" />
              Email
            </Button>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection("about")}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer group"
            aria-label="Scroll to about section"
          >
            <ChevronDown className="h-8 w-8 text-white/60 group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
