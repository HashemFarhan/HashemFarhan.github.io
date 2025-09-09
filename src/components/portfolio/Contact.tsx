import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "1hashemfarhan@gmail.com",
      href: "mailto:1hashemfarhan@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone", 
      value: "(812) 778-0699",
      href: "tel:8127780699"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Bloomington, IN",
      href: null
    }
  ];

  return (
    <section className="py-20 px-6" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Let's Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on AI/ML projects or discuss opportunities in software engineering
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="card-gradient border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
            <CardHeader>
              <CardTitle className="text-2xl mb-4">Get In Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                    <div className="text-accent">
                      {info.icon}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a 
                        href={info.href}
                        className="text-foreground hover:text-accent transition-colors font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="pt-6 border-t border-border/50">
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-4">
                  Connect Online
                </p>
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.open('https://github.com/HashemFarhan', '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.open('https://www.linkedin.com/in/hash-oo7/', '_blank')}
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="card-gradient border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
            <CardHeader>
              <CardTitle className="text-2xl mb-4">Work Together</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in discussing new opportunities, research collaborations, 
                or innovative AI/ML projects. Whether you're looking for:
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1 text-sm">●</span>
                  <span className="text-sm">Machine Learning Engineering expertise</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1 text-sm">●</span>
                  <span className="text-sm">Full-stack development skills</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1 text-sm">●</span>
                  <span className="text-sm">Research collaboration opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1 text-sm">●</span>
                  <span className="text-sm">Technical consulting and mentorship</span>
                </li>
              </ul>

              <div className="pt-6">
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => window.location.href = 'mailto:1hashemfarhan@gmail.com'}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;