import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";

const quickFacts = [
  "CS at Indiana University",
  "ML engineering internships",
  "Research with large clinical datasets",
  "Full-stack product work",
];

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden px-6 pb-14 pt-32 md:pb-20 md:pt-36">
      <div className="absolute inset-0 surface-grid opacity-70" />
      <div className="section-inner relative">
        <div className="max-w-4xl animate-rise">
          <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2">
              <MapPin className="h-4 w-4 text-accent" />
              Bloomington, IN
            </span>
            <span className="rounded-md border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-emerald-200">
              Open to ML and software roles
            </span>
          </div>

          <h1 className="max-w-3xl text-5xl font-semibold leading-none text-foreground md:text-7xl">
            Hashem Farhan
          </h1>

          <p className="mt-5 max-w-3xl text-xl leading-8 text-foreground/90 md:text-2xl">
            Machine learning engineer and software developer building practical AI tools,
            data workflows, and web applications.
          </p>

          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
            I work across model training, data analysis, backend APIs, and frontend product
            development. I like clear systems, useful results, and teams that care about doing
            the work well.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#experience"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:bg-foreground/90"
            >
              See experience
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:1hashemfarhan@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-foreground transition hover:border-white/20 hover:bg-white/[0.06]"
            >
              <Mail className="h-4 w-4" />
              Email me
            </a>
            <a
              href="https://github.com/HashemFarhan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-foreground transition hover:border-white/20 hover:bg-white/[0.06]"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/hash-oo7/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-foreground transition hover:border-white/20 hover:bg-white/[0.06]"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-14 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2 lg:grid-cols-4">
          {quickFacts.map((fact, index) => (
            <div
              key={fact}
              className="animate-rise rounded-md border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-muted-foreground"
              style={{ animationDelay: `${0.08 + index * 0.05}s` }}
            >
              {fact}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
