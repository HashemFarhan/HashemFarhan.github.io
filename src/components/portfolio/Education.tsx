import { Award, BookOpen, Calendar, GraduationCap, MapPin, Users } from "lucide-react";

const achievements = [
  "MIT Beaver Works quantum computing workshop nominee",
  "Semi-finalist in the IYMC International Math Competition",
  "Second place in the FLL Robotics Competition",
];

const leadership = [
  {
    role: "Academic Tutor",
    organization: "Luddy School of Informatics, Computing, and Engineering",
    period: "Sep 2024 - Present",
    description:
      "Support computer science students through tutoring, explanation, and structured problem solving.",
  },
  {
    role: "Public Relations Manager",
    organization: "Google Developer Student Club",
    period: "Sep 2023 - Jul 2024",
    description:
      "Led outreach and communication efforts to strengthen student engagement in the campus developer community.",
  },
];

const Education = () => {
  return (
    <section id="education" className="section-shell">
      <div className="section-inner">
        <div className="max-w-3xl">
          <div className="section-kicker">
            <span className="eyebrow-line" />
            Education
          </div>
          <h2 className="section-title">Education and involvement.</h2>
          <p className="section-copy">
            Computer science coursework, tutoring, student leadership, and selected recognitions.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="panel p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-accent/20 bg-accent/10">
                <GraduationCap className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase text-accent/80">
                  Degree
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-foreground">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <BookOpen className="h-4 w-4 text-accent" />
                  Indiana University Bloomington
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-white/10 bg-white/[0.03] p-4">
                <p className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                  <Calendar className="h-4 w-4 text-accent" />
                  Expected graduation
                </p>
                <p className="mt-2 text-sm text-muted-foreground">May 2026</p>
              </div>
              <div className="rounded-md border border-white/10 bg-white/[0.03] p-4">
                <p className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                  <MapPin className="h-4 w-4 text-accent" />
                  Campus location
                </p>
                <p className="mt-2 text-sm text-muted-foreground">Bloomington, Indiana</p>
              </div>
              <div className="rounded-md border border-white/10 bg-white/[0.03] p-4 sm:col-span-2">
                <p className="text-sm font-medium text-foreground">GPA</p>
                <p className="mt-2 text-sm text-muted-foreground">3.66</p>
              </div>
            </div>
          </article>

          <article className="panel p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-accent/20 bg-accent/10">
                <Award className="h-4 w-4 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Selected achievements</h3>
            </div>

            <div className="mt-6 space-y-3">
              {achievements.map((achievement) => (
                <div
                  key={achievement}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-4"
                >
                  <p className="text-sm leading-7 text-muted-foreground">{achievement}</p>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-6 panel p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md border border-accent/20 bg-accent/10">
              <Users className="h-4 w-4 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Leadership and service</h3>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {leadership.map((item) => (
              <div key={item.role} className="rounded-md border border-white/10 bg-white/[0.03] p-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">{item.role}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{item.organization}</p>
                  </div>
                  <span className="rounded-md border border-white/10 px-3 py-1 text-xs font-semibold uppercase text-accent">
                    {item.period}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
