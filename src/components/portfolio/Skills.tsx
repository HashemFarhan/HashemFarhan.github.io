import { BarChart3, Brain, Cloud, Code2, Globe, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Machine Learning and AI",
    description: "Model development, evaluation, and deployment for real-world use cases.",
    icon: Brain,
    skills: ["Python", "PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face", "NLP", "Computer Vision"],
  },
  {
    title: "Data and Analytics",
    description: "Structured analysis pipelines with a focus on clarity, signal, and decision support.",
    icon: BarChart3,
    skills: ["SQL", "BigQuery", "PostgreSQL", "Pandas", "NumPy", "SciPy", "Seaborn"],
  },
  {
    title: "Web Engineering",
    description: "Product-facing applications that balance performance, reliability, and clean UX.",
    icon: Globe,
    skills: ["React", "Vue.js", "TypeScript", "JavaScript", "Laravel", "Flask", "REST APIs"],
  },
  {
    title: "Cloud and Delivery",
    description: "Deployment workflows and infrastructure choices that support steady execution.",
    icon: Cloud,
    skills: ["Google Cloud", "Docker", "GitHub Actions", "CI/CD", "DigitalOcean", "Firebase"],
  },
  {
    title: "Languages",
    description: "Comfortable moving between application, scripting, and data-oriented environments.",
    icon: Code2,
    skills: ["Python", "TypeScript", "JavaScript", "C++", "SQL"],
  },
  {
    title: "Tooling",
    description: "Daily workflow built around reproducibility, collaboration, and fast iteration.",
    icon: Wrench,
    skills: ["Git", "GitHub", "Unix", "Jupyter", "Streamlit", "Phabricator"],
  },
];

const stats = [
  { value: "25+", label: "Technologies used across research and product work" },
  { value: "6", label: "Core capability areas spanning engineering and ML" },
  { value: "3", label: "Distinct environments: research, startup, and internship" },
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
          <h2 className="section-title">Technical breadth with a strong applied core.</h2>
          <p className="section-copy">
            My work sits at the intersection of machine learning, analytics, and software
            engineering. I care about building systems that are technically sound, useful in
            practice, and maintainable by the teams around them.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <article
                key={category.title}
                className="panel animate-fade-in-up p-6 transition-transform duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold text-foreground">{category.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{category.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-muted-foreground"
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
