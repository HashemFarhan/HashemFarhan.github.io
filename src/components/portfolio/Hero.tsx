import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 hero-gradient opacity-90" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-float opacity-60" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-accent rounded-full animate-float opacity-30" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Hashem Farhan</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
            Machine Learning Engineer & Software Developer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Computer Science student at Indiana University specializing in AI/ML, 
            with experience in deep learning, data analysis, and full-stack development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="default" size="lg" className="group">
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Contact Me
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <a 
              href="mailto:1hashemfarhan@gmail.com" 
              className="p-3 rounded-lg bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 hover:scale-110 group"
            >
              <Mail className="h-5 w-5 text-accent group-hover:animate-pulse" />
            </a>
            <a 
              href="tel:8127780699" 
              className="p-3 rounded-lg bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 hover:scale-110 group"
            >
              <Phone className="h-5 w-5 text-accent group-hover:animate-pulse" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-lg bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 hover:scale-110 group"
            >
              <Github className="h-5 w-5 text-accent group-hover:animate-pulse" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-lg bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin className="h-5 w-5 text-accent group-hover:animate-pulse" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 text-accent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;