import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Brain, 
  BarChart3, 
  Globe, 
  Cloud, 
  Code2, 
  Wrench,
  Zap,
  TrendingUp
} from "lucide-react";

const Skills = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const skillCategories = [
    {
      title: "Machine Learning & AI",
      skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face", "Deep Learning", "NLP", "Computer Vision"],
      icon: Brain,
      gradient: "from-accent/10 via-accent/5 to-background",
      borderGradient: "from-accent to-accent/80",
      description: "Building intelligent systems and neural networks"
    },
    {
      title: "Data & Analytics", 
      skills: ["BigQuery", "SQL", "PostgreSQL", "Pandas", "NumPy", "SciPy", "Seaborn", "Data Analysis"],
      icon: BarChart3,
      gradient: "from-accent/8 via-accent/4 to-background",
      borderGradient: "from-accent/90 to-accent/70",
      description: "Extracting insights from complex datasets"
    },
    {
      title: "Web Development",
      skills: ["JavaScript", "Vue.js", "React", "Laravel", "Flask", "REST APIs", "Web Development"],
      icon: Globe,
      gradient: "from-accent/12 via-accent/6 to-background",
      borderGradient: "from-accent to-accent/60",
      description: "Creating dynamic and responsive web experiences"
    },
    {
      title: "Cloud & DevOps",
      skills: ["Google Cloud Platform", "Docker", "GitHub Actions", "CI/CD", "DigitalOcean", "Firebase"],
      icon: Cloud,
      gradient: "from-accent/6 via-accent/3 to-background",
      borderGradient: "from-accent/80 to-accent/90",
      description: "Scaling applications in the cloud"
    },
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "C++", "SQL", "TypeScript"],
      icon: Code2,
      gradient: "from-accent/14 via-accent/7 to-background",
      borderGradient: "from-accent/70 to-accent",
      description: "Fluent in multiple programming paradigms"
    },
    {
      title: "Tools & Platforms",
      skills: ["GitHub", "Unix", "Streamlit", "Jupyter", "Git", "Phabricator"],
      icon: Wrench,
      gradient: "from-accent/9 via-accent/4 to-background",
      borderGradient: "from-accent/85 to-accent/75",
      description: "Mastering the developer toolchain"
    }
  ];

  return (
    <section className="py-16 px-6 relative" id="skills">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent"></div>
            <Zap className="h-5 w-5 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient">Technical Skills</span>
            </h2>
            <Zap className="h-5 w-5 text-accent" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent"></div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertise across AI/ML, data science, and full-stack development
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <Card 
                key={category.title}
                className={`
                  group relative overflow-hidden border-0 transition-all duration-300 cursor-pointer
                  hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-1
                  bg-gradient-to-br ${category.gradient} backdrop-blur-sm
                `}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Gradient Border */}
                <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${category.borderGradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                <div className="absolute inset-[1px] rounded-lg bg-card" />
                
                {/* Content */}
                <div className="relative p-5">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`
                      flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${category.borderGradient} 
                      flex items-center justify-center transition-transform duration-300
                      group-hover:scale-105
                    `}>
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-base text-foreground group-hover:text-accent transition-colors duration-300">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill}
                        className={`
                          opacity-0 animate-fade-in-up
                        `}
                        style={{ 
                          animationDelay: `${(index * 0.1) + (skillIndex * 0.02)}s`,
                          animationFillMode: 'forwards'
                        }}
                      >
                        <div className={`
                          px-2.5 py-1.5 rounded-md bg-secondary/40 border border-border/20
                          hover:bg-accent/10 hover:border-accent/30 hover:text-accent
                          transition-all duration-200 text-sm font-medium text-center
                          group-hover:bg-secondary/50
                        `}>
                          {skill}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Technology Count */}
                  <div className="pt-3 border-t border-border/10">
                    <div className="flex items-center justify-center text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <TrendingUp className="h-3 w-3" />
                        {category.skills.length} technologies
                      </span>
                    </div>
                  </div>
                </div>

                {/* Subtle Hover Glow */}
                <div className={`
                  absolute inset-0 rounded-lg bg-gradient-to-r ${category.borderGradient} opacity-0 
                  group-hover:opacity-5 transition-opacity duration-500 pointer-events-none
                `} />
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-2xl bg-card/50 border border-border/30 backdrop-blur-sm">
              <div className="text-3xl font-bold text-accent mb-2">
                {skillCategories.reduce((total, cat) => total + cat.skills.length, 0)}+
              </div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card/50 border border-border/30 backdrop-blur-sm">
              <div className="text-3xl font-bold text-accent mb-2">
                {skillCategories.length}
              </div>
              <div className="text-sm text-muted-foreground">Specializations</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card/50 border border-border/30 backdrop-blur-sm">
              <div className="text-3xl font-bold text-accent mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card/50 border border-border/30 backdrop-blur-sm">
              <div className="text-3xl font-bold text-accent mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;