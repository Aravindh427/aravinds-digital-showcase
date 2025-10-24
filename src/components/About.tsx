const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 animate-slide-up">
            <span className="text-gradient">About Me</span>
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-foreground/80 animate-fade-in">
            <p className="leading-relaxed">
              I'm a passionate <span className="text-coral font-semibold">Frontend Web Developer</span> based in Chennai, India. 
              I specialize in building efficient systems and crafting clean, intuitive user interfaces.
            </p>
            
            <p className="leading-relaxed">
              With expertise in modern web technologies, I transform ideas into responsive, 
              performant applications that deliver exceptional user experiences.
            </p>

            <blockquote className="border-l-4 border-coral pl-6 py-4 my-8 italic text-foreground/70">
              "Frontend development is where logic meets light — every line of code shaping how the world feels the web."
            </blockquote>

            <div className="pt-8">
              <h3 className="text-2xl font-bold mb-4 text-coral">Current Focus</h3>
              <p className="leading-relaxed">
                Building innovative projects and continuously expanding my skills in React, Node.js, and modern JavaScript frameworks. 
                Always eager to take on new challenges and prove my capabilities through quality work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
