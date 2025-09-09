import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BookOpen, Calendar, GraduationCap, MapPin, Trophy } from "lucide-react";

const Education = () => {
  const achievements = [
    {
      title: "MIT Beaver Works — Quantum Computing Workshop Nominee",
      type: "Workshop",
      icon: <Award className="h-5 w-5" />
    },
    {
      title: "Semi-Finalist — IYMC International Math Competition", 
      type: "Competition",
      icon: <Trophy className="h-5 w-5" />
    },
    {
      title: "2nd Place — FLL Robotics Competition",
      type: "Competition", 
      icon: <Trophy className="h-5 w-5" />
    }
  ];

  const leadership = [
    {
      role: "Academic Tutor",
      organization: "Luddy School of Informatics, Computing, and Engineering",
      period: "Sep 2024 – Present",
      description: "Providing academic support and mentorship to fellow computer science students"
    },
    {
      role: "Public Relations Manager", 
      organization: "Google Developer Student Club (GDSC)",
      period: "Sep 2023 – Jul 2024",
      description: "Led marketing initiatives and community engagement for the campus developer community"
    }
  ];

  return (
    <section className="py-20 px-6 bg-secondary/20" id="education">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Education & Leadership</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic excellence combined with active community leadership and recognition
          </p>
        </div>

        {/* Education */}
        <Card className="card-gradient border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 mb-8">
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                <GraduationCap className="h-6 w-6 text-accent" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-2xl mb-2">Bachelor of Science in Computer Science</CardTitle>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <BookOpen className="h-4 w-4" />
                  <span className="font-medium">Indiana University Bloomington</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>Expected May 2026</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>Bloomington, IN</span>
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Achievements */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center">
            <span className="text-gradient">Achievements</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <Card 
                key={index}
                className="card-gradient border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group text-center"
              >
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-lg bg-accent/10 border border-accent/20 group-hover:bg-accent/20 transition-colors">
                      {achievement.icon}
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2 group-hover:text-accent transition-colors">
                    {achievement.title}
                  </h4>
                  <Badge variant="secondary" className="text-xs">
                    {achievement.type}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">
            <span className="text-gradient">Leadership Experience</span>
          </h3>
          <div className="space-y-4">
            {leadership.map((exp, index) => (
              <Card 
                key={index}
                className="card-gradient border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group"
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                    <div>
                      <h4 className="font-semibold text-lg group-hover:text-accent transition-colors">
                        {exp.role}
                      </h4>
                      <p className="text-muted-foreground font-medium">{exp.organization}</p>
                    </div>
                    <Badge variant="outline" className="border-accent/30 text-accent self-start sm:self-center">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;