import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Building2, 
  Calendar, 
  MapPin, 
  Briefcase, 
  TrendingUp, 
  Code, 
  Brain,
  Zap
} from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Researcher", 
      company: "Multi-institutional Research — MIT, Dalle Molle Institute",
      location: "Remote",
      period: "Aug 2024 – Present",
      year: "2024",
      color: "accent",
      icon: Brain,
      keyPoints: [
        "Processing 100K+ clinical records with advanced statistical methods",
        "Developing predictive models using scikit-learn and statistical analysis", 
        "Collaborating with MIT and Dalle Molle Institute researchers",
        "Authoring research paper for peer-reviewed publication"
      ],
      impact: "Advanced statistical modeling • Multi-institutional collaboration",
      tags: ["BigQuery", "Python", "SciPy", "Pandas", "Machine Learning", "Healthcare Research"]
    },
    {
      title: "Lead Software Engineer",
      company: "Chipedin", 
      location: "Remote",
      period: "Apr 2025 – Present",
      year: "2025",
      color: "green-500",
      icon: Code,
      keyPoints: [
        "Built high-performance REST APIs with real-time gift contribution endpoints",
        "Implemented social media sharing with OpenGraph metadata optimization",
        "Leading frontend development team using Vue.js and Tailwind CSS",
        "Orchestrated CI/CD pipelines with GitHub Actions and DigitalOcean deployment"
      ],
      impact: "10% CTR improvement • Full-stack leadership • DevOps automation",
      tags: ["Laravel", "Vue.js", "REST APIs", "GitHub Actions", "DigitalOcean", "Team Leadership"]
    },
    {
      title: "ML Engineer - Intern",
      company: "Jawaker",
      location: "Remote", 
      period: "May 2025 – Aug 2025",
      year: "2025",
      color: "blue-500",
      icon: Brain,
      keyPoints: [
        "Fine-tuned XLM-Roberta, Longformer, and LSTM models with PyTorch",
        "Engineered ensemble model with multi-modal data training",
        "Built optimized pipelines for large-scale text classification using OpenAI APIs",
        "Achieved 15% performance improvement over baseline models"
      ],
      impact: "70% reduction in tickets • 80% faster resolution • 15% model improvement",
      tags: ["PyTorch", "Hugging Face", "XLM-Roberta", "OpenAI APIs", "NLP", "Ensemble Models"]
    },
    {
      title: "ML Engineer - Intern",
      company: "Maqsam",
      location: "Remote",
      period: "Jun 2024 – Sep 2024",
      year: "2024",
      color: "orange-500",
      icon: Zap,
      keyPoints: [
        "Designed RAG pipelines for natural language business data querying",
        "Fine-tuned open-source LLMs using HuggingFace Transformers",
        "Deployed models on Google Cloud Platform and RunPod infrastructure",
        "Built interactive Streamlit interface for seamless LLM interaction"
      ],
      impact: "RAG architecture • Cloud-scale deployment • Natural language querying",
      tags: ["RAG", "LLM Fine-tuning", "HuggingFace", "Google Cloud", "Streamlit", "NLP"]
    }
  ];

  return (
    <section className="py-16 px-6 relative" id="experience">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/98 to-background/95" />

      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent"></div>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient">Experience</span>
            </h2>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent"></div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building AI/ML solutions and leading development teams
          </p>
        </div>

        {/* Experience Grid */}
        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            
            return (
              <div 
                key={index}
                className="relative"
                style={{
                  opacity: 0,
                  animation: 'fade-in-up 0.8s ease-out forwards',
                  animationDelay: `${index * 0.15}s`
                }}
              >
                {/* Experience Card */}
                <div className="w-full">
                  <Card className="group relative overflow-hidden border border-border/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 bg-card/80 backdrop-blur-sm">
                    {/* Accent Bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.color === 'accent' ? 'from-accent to-accent/80' : `from-${exp.color} to-${exp.color}/80`}`} />
                    
                    <CardContent className="p-8">
                      {/* Header Row */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-start gap-4">
                          <div className={`
                            w-14 h-14 rounded-xl bg-gradient-to-br ${exp.color === 'accent' ? 'from-accent/20 to-accent/10 border-accent/20' : `from-${exp.color}/20 to-${exp.color}/10 border-${exp.color}/20`}
                            border flex items-center justify-center transition-all duration-300
                            group-hover:scale-105
                          `}>
                            <IconComponent className={`h-7 w-7 ${exp.color === 'accent' ? 'text-accent' : `text-${exp.color}`}`} />
                          </div>
                          <div className="flex-1">
                            <h3 className={`text-2xl font-bold text-foreground group-hover:${exp.color === 'accent' ? 'text-accent' : `text-${exp.color}`} transition-colors duration-300 mb-2`}>
                              {exp.title}
                            </h3>
                            <p className={`${exp.color === 'accent' ? 'text-accent' : `text-${exp.color}`} font-semibold text-lg mb-3`}>
                              {exp.company}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                            <Calendar className="h-4 w-4" />
                            <span className="font-medium">{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span className="font-medium">{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Key Points Grid */}
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        {exp.keyPoints.map((point, i) => (
                          <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 border border-border/20">
                            <div className={`w-2 h-2 rounded-full ${exp.color === 'accent' ? 'bg-accent' : `bg-${exp.color}`} mt-2.5 flex-shrink-0`} />
                            <span className="text-sm text-muted-foreground leading-relaxed">{point}</span>
                          </div>
                        ))}
                      </div>

                      {/* Bottom Row */}
                      <div className="flex flex-col md:flex-row gap-4 justify-between items-start">
                        {/* Impact */}
                        <div className={`flex-1 p-4 rounded-lg ${exp.color === 'accent' ? 'bg-accent/5 border-accent/10' : `bg-${exp.color}/5 border-${exp.color}/10`} border`}>
                          <div className="flex items-center gap-2 mb-2">
                            <TrendingUp className={`h-4 w-4 ${exp.color === 'accent' ? 'text-accent' : `text-${exp.color}`}`} />
                            <span className="text-sm font-semibold text-foreground">Impact & Results</span>
                          </div>
                          <p className={`${exp.color === 'accent' ? 'text-accent' : `text-${exp.color}`} font-medium text-sm`}>
                            {exp.impact}
                          </p>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 max-w-md">
                          {exp.tags.map((tag, i) => (
                            <Badge 
                              key={tag}
                              variant="secondary"
                              className={`
                                text-xs bg-secondary/60 hover:${exp.color === 'accent' ? 'bg-accent/10 text-accent border-accent/20' : `bg-${exp.color}/10 text-${exp.color} border-${exp.color}/20`}
                                transition-all duration-300 border border-transparent
                                px-2.5 py-1 font-medium
                              `}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;