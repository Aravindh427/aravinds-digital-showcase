import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "daravindh2005@gmail.com",
      href: "mailto:daravindh2005@gmail.com"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@Aravindhdit",
      href: "https://github.com/Aravindhdit"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Aravindh D",
      href: "https://www.linkedin.com/in/aravindhd7/"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, India",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-b from-background to-hero-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 animate-slide-up">
            <span className="text-gradient">Let's Connect</span>
          </h2>
          
          <p className="text-xl text-foreground/70 mb-16 animate-fade-in">
            I'm always interested in hearing about new projects and opportunities. 
            Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={info.label}
                className="group bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-coral/50 transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-warm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-lg font-semibold text-foreground hover:text-coral transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-lg font-semibold text-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Button
            size="lg"
            className="bg-gradient-warm hover:opacity-90 text-white px-12 py-6 text-lg"
            onClick={() => window.location.href = "mailto:daravindh2005@gmail.com"}
          >
            <Mail className="mr-2 h-5 w-5" />
            Send Me an Email
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-6 mt-24 pt-12 border-t border-border/30">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            © 2025 Aravindh D. Built with React, TypeScript & Tailwind CSS.
          </p>
          <p className="text-sm text-muted-foreground/60">
            "If You Give a Chance, I will Prove Myself!"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
