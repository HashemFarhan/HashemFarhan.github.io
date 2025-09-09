import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Researcher", 
      company: "Multi-institutional Research — MIT, Dalle Molle Institute",
      location: "Remote",
      period: "Aug 2024 – Present",
      description: [
        "Conducted data analysis on the BigQuery eICU database using tools such SciPy/Seaborn/Pandas",
        "Developed predictive modelling pipelines with scikit-learn and statistical methods to identify key clinical and treatment-level predictors of hemoglobin response",
        "Writing a research paper on clinical predictors of hemoglobin response to blood transfusions"
      ],
      tags: ["BigQuery", "Python", "Machine Learning", "Healthcare", "Research"]
    },
    {
      title: "Lead Software Engineer",
      company: "Chipedin", 
      location: "Remote",
      period: "Apr 2025 – Present",
      description: [
        "Built REST APIs in Laravel for wishlist management, including endpoints for real-time gift contributions",
        "Built social media sharing features using OpenGraph metadata, SEO optimization, boosting CTR by 10%",
        "Managing frontend development with Vue.js and Tailwind CSS",
        "Deployed and maintained applications on DigitalOcean, setting up CI/CD pipelines with GitHub Actions for automated testing and deployment"
      ],
      tags: ["Laravel", "Vue.js", "REST APIs", "DevOps", "SEO"]
    },
    {
      title: "ML Engineer - Intern",
      company: "Jawaker",
      location: "Remote", 
      period: "May 2025 – Aug 2025",
      description: [
        "Fine-tuned LLM and NLP models (XLM-Roberta, Longformer, LSTM) with PyTorch and Hugging Face to detect cheating in specific online games",
        "Built an ensemble model trained on multi-modal data and combining outputs, improving model performance by 15%",
        "Built optimized data pipelines for large-scale batching, labelling, and text classification using OpenAI APIs",
        "Reduced moderation tickets by 70% and resolution time by 80%"
      ],
      tags: ["PyTorch", "Hugging Face", "NLP", "OpenAI", "Data Pipelines"]
    },
    {
      title: "ML Engineer - Intern",
      company: "Maqsam",
      location: "Remote",
      period: "Jun 2024 – Sep 2024", 
      description: [
        "Designed RAG pipelines, allowing businesses to query and analyze their data in natural language",
        "Designed and fine-tuned an open-source LLM using HuggingFace Transformers",
        "Used Google Cloud Platform and RunPod cloud servers to deploy and run the model on virtual machines",
        "Built an interactive user interface through Streamlit to interact with the LLM"
      ],
      tags: ["RAG", "LLM", "GCP", "Streamlit", "Transformers"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-secondary/20" id="experience">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building AI solutions and leading development teams across multiple industries
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="card-gradient border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl mb-2 group-hover:text-accent transition-colors">
                      {exp.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Building2 className="h-4 w-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground leading-relaxed flex items-start gap-2">
                      <span className="text-accent mt-2 text-xs">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="border-accent/30 text-accent">
                      {tag}
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

export default Experience;