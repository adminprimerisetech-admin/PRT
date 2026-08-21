import { createFileRoute, Link } from "@tanstack/react-router";
import { Code2, Smartphone, Brain, Cloud, Palette, Briefcase, CheckCircle2, ArrowRight, ClipboardCheck,
  Bot,
  Network,
  Gauge,
  MonitorSmartphone,
  BriefcaseBusiness, } from "lucide-react";
import { Section } from "../components/section";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — PrimeRiseTech" },
      { name: "description", content: "Web, mobile, AI, cloud, UI/UX, and IT consulting — enterprise-grade services delivered by senior specialists." },
      { property: "og:title", content: "Services — PrimeRiseTech" },
      { property: "og:description", content: "Web, mobile, AI, cloud, UI/UX, and IT consulting — enterprise-grade services delivered by senior specialists." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const services = [
  {
    icon: ClipboardCheck, title: "Manual Testing",
    desc: "Comprehensive functional, regression, exploratory, and usability testing to ensure reliable software releases.",
    features: ["Functional testing", "Regression testing", "UI validation", "Cross-browser checks", "Bug reporting", "Release verification"],
  },
  {
    icon: Bot, title: "Test Automation",
    desc: "Automated testing for web and mobile applications to ensure quality and performance.",
    features: ["Selenium & Appium", "Cypress & Playwright", "TestNG & JUnit", "CI/CD integration", "Reporting & analytics", "Cross-platform compatibility"],
  },
  {
    icon: Network, title: "API Testing",
    desc: "Thorough API validation covering functionality, data integrity, integrations, authentication, and performance.",
    features: ["API endpoint Testing", "Authentication & Authorization", "Integration Testing", "Error Handling", "Rate Limiting & Throttling", "Versioning & Backward Compatibility"],
  },
  {
    icon: Gauge, title: "Performance Testing",
    desc: "Identify bottlenecks and ensure applications remain fast, stable, and reliable under real-world workloads.",
    features: ["Load Testing", "Stress Testing", "Response Time Testing", "Scalability Testing", "Performance Regression Testing", "Bottleneck Analysis"],
  },
  {
    icon: MonitorSmartphone, title: "Mobile & Web Testing",
    desc: "End-to-end testing across browsers, devices, operating systems, and screen sizes for consistent experiences.",
    features: ["Functional Testing", "UI/UX Testing", "Compatibility Testing", "Integration Testing", "Regression Testing", "System Testing", "Accessibility Testing", "Analytics Testing", "Ad Testing", "Usability Testing", "User Acceptance Testing", "End-to-End Testing"],
  },
  {
    icon: BriefcaseBusiness, title: "QA Consulting",
    desc: "Strategic QA guidance, test strategy, process improvement, and quality engineering solutions tailored to your business.",
    features: ["QA strategy & planning", "Test process optimization", "Automation strategy", "Quality engineering", "QA team mentoring", "CI/CD quality integration"],
  },
];

function Services() {
  return (
    <>
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-20 right-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary mb-6">
            Our Services
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight">
            Full-Stack <span className="text-gradient">Digital Expertise</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Six specialized practices, one integrated team. Everything you need to design,
            build, launch, and scale — under one roof.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 space-y-8">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="service-card glass rounded-3xl p-8 sm:p-12 grid lg:grid-cols-[1fr_1.5fr] gap-8 items-center glass-hover animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div>
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-primary shadow-[var(--shadow-glow)]">
                  <s.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h2 className="mt-6 text-3xl font-bold">{s.title}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-105 transition"
                >
                  Request a Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {s.features.map((f) => (
                  <div key={f} className="flex items-start gap-3 rounded-xl bg-background/40 p-4 border border-border/50">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Section>
        <div className="glass rounded-3xl p-12 sm:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-primary opacity-10" />
          <div className="relative">
            <h2 className="text-4xl sm:text-5xl font-bold">Not sure which service fits?</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Book a free discovery call and we'll help you map the right path forward.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-105 transition"
            >
              Talk to an Expert <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
