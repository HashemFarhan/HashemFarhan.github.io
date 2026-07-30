import { BarChart3, Brain, Cloud, Code2, Globe, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Machine Learning and AI",
    description: "Training and testing models for text, vision, and prediction tasks.",
    icon: Brain,
    skills: ["Python", "PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face", "NLP", "Computer Vision"],
  },
  {
    title: "Data and Analytics",
    description: "Cleaning data, writing queries, and turning results into useful summaries.",
    icon: BarChart3,
    skills: ["SQL", "BigQuery", "PostgreSQL", "Pandas", "NumPy", "SciPy", "Seaborn"],
  },
  {
    title: "Web Engineering",
    description: "Building interfaces, APIs, and web features people can actually use.",
    icon: Globe,
    skills: ["React", "Vue.js", "TypeScript", "JavaScript", "Laravel", "Flask", "REST APIs"],
  },
  {
    title: "Cloud and Delivery",
    description: "Shipping projects with repeatable builds, deployments, and cloud tools.",
    icon: Cloud,
    skills: ["Google Cloud", "Docker", "GitHub Actions", "CI/CD", "DigitalOcean", "Firebase"],
  },
  {
    title: "Languages",
    description: "Writing code across web apps, data scripts, and backend services.",
    icon: Code2,
    skills: ["Python", "TypeScript", "JavaScript", "C++", "SQL"],
  },
  {
    title: "Tooling",
    description: "Using the tools that keep projects organized and easy to share.",
    icon: Wrench,
    skills: ["Git", "GitHub", "Unix", "Jupyter", "Streamlit", "Phabricator"],
  },
];

const stats = [
  { value: "25+", label: "Technologies used in real projects" },
  { value: "6", label: "Main skill areas" },
  { value: "3", label: "Research, startup, and internship settings" },
];

const Skills = () => {
  return (
    <section id="skills" className="section-shell">
      <div className="section-inner">
        <div className="max-w-3xl">
          <div className="section-kicker">
            <span className="eyebrow-line" />
            Capabilities
          </div>
          <h2 className="section-title">Skills I use most.</h2>
          <p className="section-copy">
            A focused view of the tools I use for machine learning, data work, web development,
            and deployment.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <article
                key={category.title}
                className="panel animate-rise p-5 transition-transform duration-300 hover:-translate-y-0.5"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border border-accent/20 bg-accent/10">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <span className="font-mono text-xs uppercase text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold text-foreground">{category.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{category.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-sm text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="panel p-6">
              <p className="text-3xl font-semibold text-foreground">{stat.value}</p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
