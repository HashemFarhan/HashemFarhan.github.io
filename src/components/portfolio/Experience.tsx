import { Brain, Briefcase, Calendar, Code2, MapPin, Sparkles } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer, AI Systems",
    company: "Factua",
    location: "Remote",
    period: "Jan 2026 - Present",
    icon: Brain,
    highlight: "35% more M&A leads",
    summary:
      "Building AI features and backend services for lead generation workflows.",
    achievements: [
      "Shipped AI features with Python, FastAPI, and LangGraph.",
      "Connected scraping, retrieval, and LLM reasoning into APIs.",
      "Built reusable Python modules and deployment scripts.",
    ],
    stack: ["Python", "FastAPI", "LangGraph", "LLMs", "Bash", "CI/CD"],
  },
  {
    title: "Independent Full-Stack Software Engineer",
    company: "Kortas AI Note Generation Platform",
    location: "Remote",
    period: "Nov 2025 - May 2026",
    icon: Code2,
    highlight: "40+ beta users",
    summary:
      "Built an AI note generation platform from the first architecture decisions through production launch.",
    achievements: [
      "Built the app with Next.js, FastAPI, PostgreSQL, Python, and TypeScript.",
      "Designed document ingestion, chunking, retrieval, and note generation flows.",
      "Supported 40+ beta users and generated 100+ notes.",
    ],
    stack: ["Next.js", "FastAPI", "PostgreSQL", "Python", "TypeScript", "DigitalOcean"],
  },
  {
    title: "Software Engineer",
    company: "Soloist",
    location: "Remote",
    period: "Nov 2025 - Apr 2026",
    icon: Briefcase,
    highlight: "$150K funding support",
    summary:
      "Built mobile and backend features for a music application with real-time audio features.",
    achievements: [
      "Built React Native audio playback, recording, and effects features.",
      "Created FastAPI services, REST APIs, and PostgreSQL data models.",
      "Owned features end-to-end while the team secured $150K in funding.",
    ],
    stack: ["React Native", "FastAPI", "PostgreSQL", "REST APIs", "Audio"],
  },
  {
    title: "Researcher",
    company: "Research collaboration with MIT and the Dalle Molle Institute",
    location: "Remote",
    period: "Aug 2024 - Present",
    icon: Brain,
    highlight: "Research + healthcare data",
    summary:
      "Working with a research team on healthcare data analysis and predictive modeling.",
    achievements: [
      "Processed 100,000+ clinical records for analysis.",
      "Built predictive models and statistical reports in Python.",
      "Contributed to a research paper prepared for peer review.",
    ],
    stack: ["Python", "Pandas", "SciPy", "BigQuery", "Machine Learning"],
  },
  {
    title: "Lead Software Engineer",
    company: "Chipedin",
    location: "Remote",
    period: "Apr 2025 - Dec 2025",
    icon: Code2,
    highlight: "Leadership + production web app",
    summary:
      "Led development for a funding platform for content creators.",
    achievements: [
      "Designed Python backend services and REST APIs.",
      "Built PostgreSQL schemas for core platform features.",
      "Mentored a junior developer through code reviews and system design discussions.",
    ],
    stack: ["Python", "PostgreSQL", "REST APIs", "Vue.js", "GitHub Actions"],
  },
  {
    title: "Machine Learning Engineer Intern",
    company: "Jawaker",
    location: "Remote",
    period: "May 2025 - Aug 2025",
    icon: Brain,
    highlight: "NLP + model improvement",
    summary:
      "Built model pipelines for cheating detection and moderation workflows.",
    achievements: [
      "Built Python pipelines with PyTorch and Hugging Face.",
      "Created Docker, Bash, and Linux workflows for model deployment.",
      "Reduced moderation workload by 70% and response time by 80%.",
    ],
    stack: ["Python", "PyTorch", "Hugging Face", "Docker", "Bash", "Linux"],
  },
  {
    title: "Machine Learning Engineer Intern",
    company: "Maqsam",
    location: "Remote",
    period: "Jun 2024 - Sep 2024",
    icon: Briefcase,
    highlight: "LLMs + cloud deployment",
    summary:
      "Built tools that let teams ask natural-language questions about business data.",
    achievements: [
      "Designed RAG pipelines for business data search.",
      "Fine-tuned open-source language models.",
      "Deployed models and demos on Google Cloud and RunPod.",
    ],
    stack: ["RAG", "LLM Fine-tuning", "Google Cloud", "RunPod", "Streamlit"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-shell">
      <div className="section-inner">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Work</p>
            <h2 className="section-title">Recent experience.</h2>
          </div>
          <p className="section-copy">
            A mix of AI systems, full-stack engineering, research, and machine learning
            internships.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;

            return (
              <article
                key={`${experience.company}-${experience.title}`}
                className="panel animate-rise group p-5 md:p-6"
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
                  <div>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] transition group-hover:border-accent/40">
                          <Icon className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">{experience.title}</h3>
                          <p className="mt-1 text-base text-foreground/80">{experience.company}</p>
                          <div className="mt-3 flex flex-wrap gap-3 text-sm text-muted-foreground">
                            <span className="inline-flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              {experience.period}
                            </span>
                            <span className="inline-flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-muted-foreground" />
                              {experience.location}
                            </span>
                          </div>
                        </div>
                      </div>
                      <span className="inline-flex w-fit items-center gap-2 rounded-md border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-sm font-medium text-emerald-200">
                        <Sparkles className="h-4 w-4" />
                        {experience.highlight}
                      </span>
                    </div>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground">
                      {experience.summary}
                    </p>

                    <div className="mt-5 grid gap-2 md:grid-cols-3">
                      {experience.achievements.map((achievement) => (
                        <div
                          key={achievement}
                          className="rounded-md border border-white/10 bg-white/[0.025] p-3 text-sm leading-6 text-muted-foreground"
                        >
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-md border border-white/10 bg-black/20 p-4">
                    <p className="text-xs font-semibold uppercase text-muted-foreground">
                      Tools used
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {experience.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs text-muted-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
