import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";

const contactItems = [
  {
    label: "Email",
    value: "1hashemfarhan@gmail.com",
    href: "mailto:1hashemfarhan@gmail.com",
    icon: Mail,
  },
  {
    label: "Location",
    value: "Bloomington, Indiana",
    href: "",
    icon: MapPin,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section-shell pb-24">
      <div className="section-inner">
        <div className="panel overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-[1fr_0.9fr]">
            <div className="border-b border-white/10 p-8 lg:border-b-0 lg:border-r lg:p-10">
              <div className="section-kicker">
                <span className="eyebrow-line" />
                Contact
              </div>
              <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
                Get in touch.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">
                I am open to machine learning, software engineering, and research-focused
                opportunities.
              </p>

              <div className="mt-8 space-y-4">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex items-start gap-4 rounded-md border border-white/10 bg-white/[0.03] p-4"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-md border border-accent/20 bg-accent/10">
                        <Icon className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase text-muted-foreground">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-1 block text-sm font-medium text-foreground transition-colors hover:text-accent"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-1 text-sm font-medium text-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="section-wash p-8 lg:p-10">
              <p className="text-xs font-semibold uppercase text-accent/80">
                Areas of interest
              </p>
              <div className="mt-6 space-y-3">
                {[
                  "Machine learning engineering roles",
                  "Applied AI and NLP work",
                  "Research collaborations",
                  "Software engineering roles",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-md border border-white/10 bg-background/30 px-4 py-4"
                  >
                    <p className="text-sm leading-7 text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>

              <a
                href="mailto:1hashemfarhan@gmail.com"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:bg-foreground/90"
              >
                Start a conversation
                <ArrowRight className="h-4 w-4" />
              </a>

              <div className="mt-8 flex gap-3">
                <a
                  href="https://github.com/HashemFarhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-white/10 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/10"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/hash-oo7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-white/10 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/10"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
