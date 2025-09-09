import { ArrowDown, Github, Linkedin, Mail, Phone, Code, Terminal, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(90deg, hsl(189 100% 50% / 0.1) 1px, transparent 1px), linear-gradient(hsl(189 100% 50% / 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
        <div className="absolute inset-0 hero-gradient opacity-95" />
      </div>

      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 z-5 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-accent/20 text-xs font-mono animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          >
            {['01', '10', '11', '00', '101', '010'][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>

      {/* Circuit Board Elements */}
      <div className="absolute inset-0 z-10">
        {/* Tech Particles */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 border border-accent rounded animate-circuit-pulse" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-accent rounded-full animate-float opacity-60" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-4 h-4 border-2 border-accent/40 rotate-45 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-1 h-8 bg-gradient-to-b from-accent to-transparent animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-8 h-1 bg-gradient-to-r from-accent to-transparent animate-pulse" style={{ animationDelay: '1.5s' }} />
        
        {/* Geometric Tech Shapes */}
        <div className="absolute top-20 right-20">
          <Cpu className="h-8 w-8 text-accent/30 animate-pulse" />
        </div>
        <div className="absolute bottom-20 left-20">
          <Terminal className="h-6 w-6 text-accent/40 animate-float" />
        </div>
        <div className="absolute top-1/2 left-10">
          <Code className="h-10 w-10 text-accent/20 animate-circuit-pulse" />
        </div>
      </div>

      {/* Scrolling Code Background */}
      <div className="absolute bottom-10 left-0 right-0 z-5 overflow-hidden opacity-20">
        <div className="animate-code-scroll whitespace-nowrap text-accent/30 font-mono text-sm">
          const skills = ['Python', 'ML', 'TensorFlow', 'React', 'PostgreSQL']; // Machine Learning Engineer
        </div>
      </div>

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          {/* Glitch Effect on Name */}
          <div className="relative mb-6">
            <h1 className="text-5xl md:text-7xl font-bold relative">
              <span className="text-gradient relative z-10">Hashem Farhan</span>
              <span className="absolute inset-0 text-accent/20 animate-glitch z-0" style={{ animationDelay: '0.1s' }}>
                Hashem Farhan
              </span>
            </h1>
            <div className="absolute -inset-2 bg-accent/5 blur-xl animate-pulse-glow" />
          </div>
          
          <div className="relative mb-8">
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light flex items-center justify-center gap-3">
              <Terminal className="h-6 w-6 text-accent animate-pulse" />
              Machine Learning Engineer & Software Developer
              <Code className="h-6 w-6 text-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Computer Science student at <span className="text-accent font-semibold">Indiana University</span> specializing in AI/ML, 
            with experience in <span className="text-accent/80">deep learning</span>, <span className="text-accent/80">data analysis</span>, and <span className="text-accent/80">full-stack development</span>.
          </p>
          

          <div className="flex justify-center gap-6">
            <a 
              href="mailto:1hashemfarhan@gmail.com" 
              className="relative p-4 rounded-lg bg-card/30 border border-accent/20 backdrop-blur-sm hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 hover:scale-110 group overflow-hidden"
            >
              <Mail className="h-5 w-5 text-accent group-hover:animate-pulse relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </a>
            <a 
              href="tel:8127780699" 
              className="relative p-4 rounded-lg bg-card/30 border border-accent/20 backdrop-blur-sm hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 hover:scale-110 group overflow-hidden"
            >
              <Phone className="h-5 w-5 text-accent group-hover:animate-pulse relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </a>
            <a 
              href="https://github.com/HashemFarhan"
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-4 rounded-lg bg-card/30 border border-accent/20 backdrop-blur-sm hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 hover:scale-110 group overflow-hidden"
            >
              <Github className="h-5 w-5 text-accent group-hover:animate-pulse relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </a>
            <a 
              href="https://www.linkedin.com/in/hash-oo7/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-4 rounded-lg bg-card/30 border border-accent/20 backdrop-blur-sm hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 hover:scale-110 group overflow-hidden"
            >
              <Linkedin className="h-5 w-5 text-accent group-hover:animate-pulse relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2">
          <div className="text-xs text-accent/60 font-mono uppercase tracking-wider">Explore</div>
          <div className="relative">
            <div className="animate-bounce">
              <ArrowDown className="h-6 w-6 text-accent" />
            </div>
            <div className="absolute inset-0 bg-accent/20 blur-md animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;