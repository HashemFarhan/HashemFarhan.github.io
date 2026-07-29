import { ArrowUpRight, Brain, Briefcase, Building2, Calendar, Code2, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Researcher",
    company: "Multi-institutional Research Collaboration with MIT and the Dalle Molle Institute",
    location: "Remote",
    period: "Aug 2024 - Present",
    icon: Brain,
    summary:
      "Contributing to healthcare-focused research by building statistical and machine learning workflows across large clinical datasets.",
    achievements: [
      "Processed more than 100,000 clinical records using Python-based analytical workflows.",
      "Developed predictive models and statistical analyses to support research findings.",
      "Collaborated with distributed researchers across institutions on publication-oriented work.",
    ],
    stack: ["Python", "Pandas", "SciPy", "BigQuery", "Machine Learning", "Healthcare Data"],
  },
  {
    title: "Lead Software Engineer",
    company: "Chipedin",
    location: "Remote",
    period: "Apr 2025 - Present",
    icon: Code2,
    summary:
      "Leading product engineering across backend services, frontend delivery, and deployment workflows for a consumer platform.",
    achievements: [
      "Built REST APIs for gift contribution and social sharing flows.",
      "Improved distribution performance with Open Graph and share optimization.",
      "Directed frontend implementation in Vue.js and coordinated CI/CD deployment workflows.",
    ],
    stack: ["Laravel", "Vue.js", "REST APIs", "GitHub Actions", "DigitalOcean", "Tailwind CSS"],
  },
  {
    title: "Machine Learning Engineer Intern",
    company: "Jawaker",
    location: "Remote",
    period: "May 2025 - Aug 2025",
    icon: Brain,
    summary:
      "Worked on multilingual NLP systems and model pipelines designed to improve classification quality and support operations.",
    achievements: [
      "Fine-tuned transformer and sequence models including XLM-Roberta and Longformer.",
      "Built ensemble workflows using multi-modal training inputs.",
      "Improved model performance over baseline systems while supporting large-scale text processing.",
    ],
    stack: ["PyTorch", "Hugging Face", "NLP", "OpenAI APIs", "Classification", "Ensemble Models"],
  },
  {
    title: "Machine Learning Engineer Intern",
    company: "Maqsam",
    location: "Remote",
    period: "Jun 2024 - Sep 2024",
    icon: Briefcase,
    summary:
      "Designed language-model-powered interfaces for business data access, with a strong focus on retrieval and deployment.",
    achievements: [
      "Designed RAG pipelines for natural-language querying over internal business data.",
      "Fine-tuned open-source language models with Hugging Face tooling.",
      "Deployed applications and supporting models on Google Cloud and RunPod infrastructure.",
    ],
    stack: ["RAG", "LLM Fine-tuning", "Google Cloud", "RunPod", "Streamlit", "Hugging Face"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-shell">
      <div className="section-inner">
        <div className="max-w-3xl">
          <div className="section-kicker">
            <span className="eyebrow-line" />
            Experience
          </div>
          <h2 className="section-title">Work that connects research depth with product execution.</h2>
          <p className="section-copy">
            I have worked across research collaborations, product teams, and applied machine
            learning internships. The common thread is translating technical complexity into
            usable systems and measurable progress.
          </p>
        </div>

        <div className="mt-14 space-y-6">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;

            return (
              <article
                key={`${experience.company}-${experience.title}`}
                className="panel animate-fade-in-up p-6 md:p-8"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-3xl">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent/80">
                          {experience.title}
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold text-foreground">
                          {experience.company}
                        </h3>
                        <div className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:gap-5">
                          <span className="inline-flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-accent" />
                            {experience.period}
                          </span>
                          <span className="inline-flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-accent" />
                            {experience.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
                      {experience.summary}
                    </p>

                    <div className="mt-6 grid gap-3">
                      {experience.achievements.map((achievement) => (
                        <div
                          key={achievement}
                          className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4"
                        >
                          <p className="text-sm leading-7 text-muted-foreground">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:w-[280px]">
                    <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-5">
                      <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-accent/80">
                        <Building2 className="h-4 w-4" />
                        Stack
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {experience.stack.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-muted-foreground"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 rounded-3xl border border-white/8 bg-accent/8 p-5">
                      <div className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                        <ArrowUpRight className="h-4 w-4 text-accent" />
                        Focus
                      </div>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        Each role strengthened a blend of analytical rigor, product judgment, and
                        implementation discipline.
                      </p>
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
