import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { label: "Overview", href: "#hero" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1));
      const scrollPosition = window.scrollY + 140;

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-lg border border-white/10 bg-background/80 px-4 py-3 shadow-[0_16px_40px_-28px_rgba(0,0,0,0.85)] backdrop-blur-xl md:px-5">
        <button
          type="button"
          onClick={() => scrollToSection("#hero")}
          className="flex items-center gap-3 text-left"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-sm font-bold text-accent">
            HF
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-semibold text-foreground">Hashem Farhan</span>
            <span className="block text-xs uppercase text-muted-foreground">
              Machine Learning Engineer
            </span>
          </span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);

            return (
              <button
                key={item.label}
                type="button"
                onClick={() => scrollToSection(item.href)}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-white/10 text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <a
            href="mailto:1hashemfarhan@gmail.com"
            className="ml-3 rounded-md bg-foreground px-4 py-2 text-sm font-semibold text-background transition hover:bg-foreground/90"
          >
            Get in touch
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-foreground md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="mx-auto mt-3 max-w-6xl rounded-lg border border-white/10 bg-background/94 p-4 shadow-[0_24px_50px_-28px_rgba(0,0,0,0.9)] backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);

              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => scrollToSection(item.href)}
                  className={`rounded-md px-4 py-3 text-left text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-white/10 text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <a
              href="mailto:1hashemfarhan@gmail.com"
              className="mt-2 rounded-md bg-foreground px-4 py-3 text-center text-sm font-semibold text-background"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
