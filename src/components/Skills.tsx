import { Code2, Database, Layout, Server, FileCode, GitBranch } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Layout,
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
      color: "coral"
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Java", "Python"],
      color: "salmon"
    },
    {
      title: "Database",
      icon: Database,
      skills: ["MySQL", "SQL"],
      color: "warm-orange"
    },
    {
      title: "Tools",
      icon: GitBranch,
      skills: ["Git", "GitHub", "VS Code", "Excel"],
      color: "coral-light"
    }
  ];

  return (
    <section id="skills" className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center animate-slide-up">
          <span className="text-gradient">Skills & Technologies</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-warm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="h-7 w-7 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground">{category.title}</h3>
              
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-muted-foreground hover:text-coral transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-coral" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
