import { ArrowRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const contactItems = [
  {
    label: "Email",
    value: "1hashemfarhan@gmail.com",
    href: "mailto:1hashemfarhan@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "(812) 778-0699",
    href: "tel:8127780699",
    icon: Phone,
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
            <div className="border-b border-white/8 p-8 lg:border-b-0 lg:border-r lg:p-10">
              <div className="section-kicker">
                <span className="eyebrow-line" />
                Contact
              </div>
              <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
                Open to meaningful engineering, research, and product conversations.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">
                If you are hiring, exploring a collaboration, or building something ambitious in
                AI and software, I would be glad to connect.
              </p>

              <div className="mt-8 space-y-4">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex items-start gap-4 rounded-3xl border border-white/8 bg-white/[0.03] p-4"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10">
                        <Icon className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
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
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent/80">
                Preferred engagements
              </p>
              <div className="mt-6 space-y-3">
                {[
                  "Machine learning engineering roles",
                  "Applied AI and NLP product work",
                  "Research collaborations with clear execution goals",
                  "Software engineering opportunities with strong technical ownership",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/8 bg-background/30 px-4 py-4"
                  >
                    <p className="text-sm leading-7 text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>

              <a
                href="mailto:1hashemfarhan@gmail.com"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-glow transition-transform hover:-translate-y-0.5"
              >
                Start a conversation
                <ArrowRight className="h-4 w-4" />
              </a>

              <div className="mt-8 flex gap-3">
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
      </div>
    </section>
  );
};

export default Contact;
