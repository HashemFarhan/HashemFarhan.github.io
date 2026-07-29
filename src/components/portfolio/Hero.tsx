import { ArrowRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const highlights = [
  "Predictive modeling and applied machine learning",
  "Research partnerships across academic and industry teams",
  "Production-minded full-stack engineering",
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-6 pb-16 pt-32 md:pb-24 md:pt-40"
    >
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 grid-fade opacity-50" />
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-accent/10 to-transparent" />

      <div className="section-inner relative">
        <div className="grid items-end gap-12 lg:grid-cols-[1.5fr_0.9fr]">
          <div className="animate-fade-in-up">
            <div className="section-kicker">
              <span className="eyebrow-line" />
              Bloomington, Indiana
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] text-foreground md:text-7xl">
              Building AI products and software systems with a calm, rigorous approach.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
              I am Hashem Farhan, a machine learning engineer and software developer focused on
              practical AI, trustworthy data work, and production-ready implementation. My work
              spans research, applied modeling, and product engineering.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:1hashemfarhan@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-glow transition-transform hover:-translate-y-0.5"
              >
                Contact Hashem
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#experience"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/10"
              >
                View experience
              </a>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {highlights.map((item) => (
                <div key={item} className="rounded-3xl border border-white/8 bg-white/[0.03] p-4">
                  <p className="text-sm leading-7 text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-in-up panel p-6 md:p-8" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center justify-between border-b border-white/8 pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent/80">
                  Profile
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-foreground">Hashem Farhan</h2>
              </div>
              <span className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                Available
              </span>
            </div>

            <div className="space-y-5 py-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 text-accent" />
                <div>
                  <p className="text-sm font-medium text-foreground">Location</p>
                  <p className="text-sm text-muted-foreground">Bloomington, Indiana</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-4 w-4 text-accent" />
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <a
                    href="mailto:1hashemfarhan@gmail.com"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    1hashemfarhan@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-4 w-4 text-accent" />
                <div>
                  <p className="text-sm font-medium text-foreground">Phone</p>
                  <a
                    href="tel:8127780699"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    (812) 778-0699
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-5">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent/80">
                Focus areas
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Machine Learning", "NLP", "Analytics", "Full-Stack", "Cloud"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com/HashemFarhan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/8"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/hash-oo7/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/8"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
