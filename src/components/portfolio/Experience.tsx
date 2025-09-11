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
  Zap,
  CheckCircle,
  Sparkles,
  Cpu,
  Terminal,
  Database
} from "lucide-react";

const Experience = () => {
  // Color mapping for proper Tailwind class generation
  const getColorClasses = (color) => {
    const colorMap = {
      'accent': {
        border: 'border-accent/30',
        borderHover: 'hover:border-accent/60',
        bg: 'bg-gradient-to-br from-card/80 via-accent/5 to-card/60',
        shadow: 'hover:shadow-xl hover:shadow-accent/20',
        gradientLine: 'from-accent via-accent/80 to-accent/40',
        gradientTop: 'from-transparent via-accent/60 to-transparent',
        cornerHighlight: 'from-accent/10 to-transparent',
        iconBg: 'from-accent/20 via-accent/10 to-accent/5 border-accent/30 shadow-accent/20 group-hover:shadow-accent/40',
        iconColor: 'text-accent',
        titleHover: 'group-hover:text-accent',
        companyColor: 'text-accent',
        dateBadge: 'bg-accent/10 text-accent',
        bulletBg: 'bg-gradient-to-r from-accent/5 to-accent/10 border-accent/20 hover:border-accent/40 hover:shadow-md hover:shadow-accent/10',
        bulletDot: 'bg-accent group-hover/point:ring-4 group-hover/point:ring-accent/20',
        bulletPulse: 'bg-accent',
        bulletHighlight: 'from-accent/0 via-accent/5 to-accent/0',
        impactBg: 'bg-gradient-to-br from-accent/8 to-accent/12 border-accent/25 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10',
        impactText: 'text-accent',
        badgeBg: 'bg-accent/10 text-accent border-accent/30 hover:bg-accent/20 hover:border-accent/60 hover:shadow-md hover:shadow-accent/20'
      },
      'green': {
        border: 'border-green-500/30',
        borderHover: 'hover:border-green-500/60',
        bg: 'bg-gradient-to-br from-card/80 via-green-500/5 to-card/60',
        shadow: 'hover:shadow-xl hover:shadow-green-500/20',
        gradientLine: 'from-green-500 via-green-500/80 to-green-500/40',
        gradientTop: 'from-transparent via-green-500/60 to-transparent',
        cornerHighlight: 'from-green-500/10 to-transparent',
        iconBg: 'from-green-500/20 via-green-500/10 to-green-500/5 border-green-500/30 shadow-green-500/20 group-hover:shadow-green-500/40',
        iconColor: 'text-green-500',
        titleHover: 'group-hover:text-green-500',
        companyColor: 'text-green-500',
        dateBadge: 'bg-green-500/10 text-green-500',
        bulletBg: 'bg-gradient-to-r from-green-500/5 to-green-500/10 border-green-500/20 hover:border-green-500/40 hover:shadow-md hover:shadow-green-500/10',
        bulletDot: 'bg-green-500 group-hover/point:ring-4 group-hover/point:ring-green-500/20',
        bulletPulse: 'bg-green-500',
        bulletHighlight: 'from-green-500/0 via-green-500/5 to-green-500/0',
        impactBg: 'bg-gradient-to-br from-green-500/8 to-green-500/12 border-green-500/25 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10',
        impactText: 'text-green-500',
        badgeBg: 'bg-green-500/10 text-green-500 border-green-500/30 hover:bg-green-500/20 hover:border-green-500/60 hover:shadow-md hover:shadow-green-500/20'
      },
      'blue': {
        border: 'border-blue-500/30',
        borderHover: 'hover:border-blue-500/60',
        bg: 'bg-gradient-to-br from-card/80 via-blue-500/5 to-card/60',
        shadow: 'hover:shadow-xl hover:shadow-blue-500/20',
        gradientLine: 'from-blue-500 via-blue-500/80 to-blue-500/40',
        gradientTop: 'from-transparent via-blue-500/60 to-transparent',
        cornerHighlight: 'from-blue-500/10 to-transparent',
        iconBg: 'from-blue-500/20 via-blue-500/10 to-blue-500/5 border-blue-500/30 shadow-blue-500/20 group-hover:shadow-blue-500/40',
        iconColor: 'text-blue-500',
        titleHover: 'group-hover:text-blue-500',
        companyColor: 'text-blue-500',
        dateBadge: 'bg-blue-500/10 text-blue-500',
        bulletBg: 'bg-gradient-to-r from-blue-500/5 to-blue-500/10 border-blue-500/20 hover:border-blue-500/40 hover:shadow-md hover:shadow-blue-500/10',
        bulletDot: 'bg-blue-500 group-hover/point:ring-4 group-hover/point:ring-blue-500/20',
        bulletPulse: 'bg-blue-500',
        bulletHighlight: 'from-blue-500/0 via-blue-500/5 to-blue-500/0',
        impactBg: 'bg-gradient-to-br from-blue-500/8 to-blue-500/12 border-blue-500/25 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10',
        impactText: 'text-blue-500',
        badgeBg: 'bg-blue-500/10 text-blue-500 border-blue-500/30 hover:bg-blue-500/20 hover:border-blue-500/60 hover:shadow-md hover:shadow-blue-500/20'
      },
      'orange': {
        border: 'border-orange-500/30',
        borderHover: 'hover:border-orange-500/60',
        bg: 'bg-gradient-to-br from-card/80 via-orange-500/5 to-card/60',
        shadow: 'hover:shadow-xl hover:shadow-orange-500/20',
        gradientLine: 'from-orange-500 via-orange-500/80 to-orange-500/40',
        gradientTop: 'from-transparent via-orange-500/60 to-transparent',
        cornerHighlight: 'from-orange-500/10 to-transparent',
        iconBg: 'from-orange-500/20 via-orange-500/10 to-orange-500/5 border-orange-500/30 shadow-orange-500/20 group-hover:shadow-orange-500/40',
        iconColor: 'text-orange-500',
        titleHover: 'group-hover:text-orange-500',
        companyColor: 'text-orange-500',
        dateBadge: 'bg-orange-500/10 text-orange-500',
        bulletBg: 'bg-gradient-to-r from-orange-500/5 to-orange-500/10 border-orange-500/20 hover:border-orange-500/40 hover:shadow-md hover:shadow-orange-500/10',
        bulletDot: 'bg-orange-500 group-hover/point:ring-4 group-hover/point:ring-orange-500/20',
        bulletPulse: 'bg-orange-500',
        bulletHighlight: 'from-orange-500/0 via-orange-500/5 to-orange-500/0',
        impactBg: 'bg-gradient-to-br from-orange-500/8 to-orange-500/12 border-orange-500/25 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10',
        impactText: 'text-orange-500',
        badgeBg: 'bg-orange-500/10 text-orange-500 border-orange-500/30 hover:bg-orange-500/20 hover:border-orange-500/60 hover:shadow-md hover:shadow-orange-500/20'
      }
    };
    return colorMap[color] || colorMap['accent'];
  };

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
      color: "green",
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
      color: "blue",
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
      color: "orange",
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
    <section className="py-16 px-6 relative overflow-hidden" id="experience">
      {/* Elegant Dotted Background */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/98 to-background" />
        
        {/* Subtle dotted pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: 'radial-gradient(circle, hsl(189 100% 50%) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}
        />
        
        {/* Flowing lines */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-[0.02]" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <path d="M0,300 Q250,200 500,300 T1000,300" stroke="currentColor" strokeWidth="1" fill="none" className="text-accent" />
            <path d="M0,600 Q250,500 500,600 T1000,600" stroke="currentColor" strokeWidth="1" fill="none" className="text-accent" />
            <path d="M0,800 Q250,700 500,800 T1000,800" stroke="currentColor" strokeWidth="1" fill="none" className="text-accent" />
          </svg>
        </div>
        
        {/* Minimal floating elements */}
        <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-accent/20 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-accent/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-accent/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Clean Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/60"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Experience</h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/60"></div>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building AI/ML solutions and leading development teams
          </p>
        </div>

        {/* Experience Grid - Enhanced Design */}
        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            const colors = getColorClasses(exp.color);
            
            return (
              <div 
                key={index}
                className="relative"
                style={{
                  opacity: 0,
                  animation: 'fade-in-up 0.6s ease-out forwards',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Experience Card - Enhanced */}
                <Card className={`
                  group relative overflow-hidden border-2 transition-all duration-500 backdrop-blur-sm
                  ${colors.border} ${colors.bg} ${colors.borderHover} ${colors.shadow}
                  hover:scale-[1.02] hover:-translate-y-1
                `}>
                  {/* Enhanced accent elements */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${colors.gradientLine}`} />
                  
                  {/* Subtle top accent */}
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${colors.gradientTop}`} />
                  
                  {/* Corner highlight */}
                  <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl ${colors.cornerHighlight} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <CardContent className="p-6 relative z-10">
                    {/* Enhanced Header */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex items-start gap-4 flex-1">
                        <div className={`
                          w-14 h-14 rounded-xl bg-gradient-to-br shadow-lg flex items-center justify-center transition-all duration-500
                          ${colors.iconBg}
                          border-2 group-hover:scale-110 group-hover:rotate-3
                        `}>
                          <IconComponent className={`h-7 w-7 ${colors.iconColor} transition-all duration-300`} />
                        </div>
                        <div className="flex-1">
                          <h3 className={`text-xl font-bold mb-1 transition-colors duration-300 ${colors.titleHover}`}>
                            {exp.title}
                          </h3>
                          <p className={`font-semibold text-lg mb-3 ${colors.companyColor}`}>
                            {exp.company}
                          </p>
                          <div className="flex items-center gap-4 text-sm">
                            <div className={`flex items-center gap-2 px-2 py-1 rounded-full ${colors.dateBadge}`}>
                              <Calendar className="h-3 w-3" />
                              <span className="font-medium">{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <MapPin className="h-3 w-3" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Key Points */}
                    <div className="mb-5">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle className={`h-4 w-4 ${colors.iconColor}`} />
                        <span className="text-sm font-semibold text-foreground uppercase tracking-wider">Key Achievements</span>
                      </div>
                      <div className="grid md:grid-cols-2 gap-3">
                        {exp.keyPoints.map((point, i) => (
                          <div key={i} className={`
                            group/point relative flex items-start gap-3 p-4 rounded-xl border transition-all duration-300
                            ${colors.bulletBg}
                            hover:scale-[1.02]
                          `}>
                            {/* Enhanced bullet point */}
                            <div className="relative mt-1.5">
                              <div className={`w-2 h-2 rounded-full transition-all duration-300 ${colors.bulletDot}`} />
                              <div className={`absolute inset-0 w-2 h-2 rounded-full animate-pulse ${colors.bulletPulse} opacity-0 group-hover/point:opacity-30`} />
                            </div>
                            <span className="text-sm text-foreground leading-relaxed font-medium flex-1">{point}</span>
                            
                            {/* Subtle highlight effect */}
                            <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${colors.bulletHighlight} opacity-0 group-hover/point:opacity-100 transition-opacity duration-300`} />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced Bottom Section */}
                    <div className="flex flex-col lg:flex-row gap-5 items-start">
                      {/* Enhanced Impact Section */}
                      <div className={`
                        flex-1 p-4 rounded-xl border-2 transition-all duration-300
                        ${colors.impactBg}
                        hover:scale-[1.01]
                      `}>
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className={`h-4 w-4 ${colors.iconColor}`} />
                          <span className="text-sm font-bold text-foreground uppercase tracking-wider">Impact & Results</span>
                        </div>
                        <p className={`text-sm ${colors.impactText} font-semibold leading-relaxed`}>
                          {exp.impact}
                        </p>
                      </div>

                      {/* Enhanced Technologies */}
                      <div className="lg:max-w-sm">
                        <div className="flex items-center gap-2 mb-3">
                          <Code className={`h-4 w-4 ${colors.iconColor}`} />
                          <span className="text-sm font-semibold text-foreground uppercase tracking-wider">Tech Stack</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.tags.map((tag, tagIndex) => (
                            <Badge 
                              key={tag}
                              variant="secondary"
                              className={`
                                text-xs px-3 py-1.5 rounded-full border-2 font-semibold transition-all duration-300
                                ${colors.badgeBg}
                                hover:scale-110 hover:-translate-y-0.5
                              `}
                              style={{
                                animationDelay: `${tagIndex * 0.1}s`
                              }}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;