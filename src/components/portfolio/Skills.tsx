import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Machine Learning & AI",
      skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face", "Deep Learning", "NLP", "Computer Vision"],
      icon: "🤖"
    },
    {
      title: "Data & Analytics", 
      skills: ["BigQuery", "SQL", "PostgreSQL", "Pandas", "NumPy", "SciPy", "Seaborn", "Data Analysis"],
      icon: "📊"
    },
    {
      title: "Web Development",
      skills: ["JavaScript", "Vue.js", "React", "Laravel", "Flask", "REST APIs", "Web Development"],
      icon: "🌐"
    },
    {
      title: "Cloud & DevOps",
      skills: ["Google Cloud Platform", "Docker", "GitHub Actions", "CI/CD", "DigitalOcean", "Firebase"],
      icon: "☁️"
    },
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "C++", "SQL", "TypeScript"],
      icon: "💻"
    },
    {
      title: "Tools & Platforms",
      skills: ["GitHub", "Unix", "Streamlit", "Jupyter", "Git", "Phabricator"],
      icon: "🛠️"
    }
  ];

  return (
    <section className="py-20 px-6" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Technical Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for machine learning, data science, and full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="card-gradient border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <span className="text-2xl">{category.icon}</span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-secondary/80 hover:bg-accent/20 hover:text-accent hover:border-accent/50 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;