import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "NLP-based Sentiment Analysis",
      description: "Advanced sentiment analysis system using bidirectional LSTM models for social media text classification. Applied comprehensive NLP preprocessing techniques including tokenization and stemming to achieve high accuracy.",
      technologies: ["Python", "Keras", "LSTM", "NLP", "Social Media Analytics"],
      highlights: [
        "Bidirectional LSTM architecture for improved context understanding",
        "Comprehensive NLP preprocessing pipeline", 
        "Real-time sentiment classification",
        "Social media text optimization"
      ],
      category: "Machine Learning"
    },
    {
      title: "Satellite Image Classification", 
      description: "Transfer learning implementation using EfficientNetB0 for anomaly detection in satellite imagery. Developed comprehensive data augmentation pipeline to maximize model performance on geospatial data.",
      technologies: ["Python", "TensorFlow", "EfficientNet", "Computer Vision", "Transfer Learning"],
      highlights: [
        "EfficientNetB0 transfer learning implementation",
        "Advanced data augmentation techniques",
        "Satellite imagery anomaly detection",
        "Optimized preprocessing pipeline"
      ],
      category: "Computer Vision"
    },
    {
      title: "Clinical Hemoglobin Predictor",
      description: "Research project developing predictive models for hemoglobin response to blood transfusions using large-scale clinical data from BigQuery eICU database.",
      technologies: ["BigQuery", "Python", "Scikit-learn", "Healthcare Analytics", "Statistical Modeling"],
      highlights: [
        "Large-scale clinical database analysis",
        "Predictive modeling for medical outcomes", 
        "Statistical significance testing",
        "Research paper publication in progress"
      ],
      category: "Healthcare AI"
    }
  ];

  return (
    <section className="py-20 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative AI/ML solutions spanning healthcare, computer vision, and natural language processing
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="card-gradient border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 group h-full flex flex-col"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Badge variant="outline" className="border-accent/30 text-accent mb-3">
                      {project.category}
                    </Badge>
                    <CardTitle className="text-xl mb-3 group-hover:text-accent transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-accent">Key Features</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-accent mt-1 text-xs">●</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mt-auto">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;