import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, Smartphone, Brain, Cloud, Palette, Briefcase,ClipboardCheck,
  Bot,
  Network,
  Gauge,SearchCheck,ClipboardList,ListChecks,FileCheck2,
  MonitorSmartphone,
  BriefcaseBusiness,
  Shield, Rocket, Users, Award, CheckCircle2, Star, ChevronDown,
  Search, Lightbulb, Cpu, TestTube2, Send,CircleAlert,ShieldCheck,BadgeCheck,
} from "lucide-react";
import { Section } from "../components/section";
import { HeroSection } from "../components/hero-section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PrimeRiseTech" },
      { name: "description", content: "PrimeRiseTech delivers custom software, AI, cloud, and digital solutions designed to help businesses innovate, scale, and rise above the competition." },
      { property: "og:title", content: "PrimeRiseTech" },
      { property: "og:description", content: "PrimeRiseTech delivers custom software, AI, cloud, and digital solutions designed to help businesses innovate, scale, and rise above the competition." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  { icon: ClipboardCheck, title: "Manual Testing", desc: "Comprehensive functional, regression, exploratory, and usability testing to ensure reliable software releases." },
  { icon: Bot, title: "Test Automation", desc: "Automated testing for web and mobile applications to ensure quality and performance." },
  { icon: Network, title: "API Testing", desc: "Thorough API validation covering functionality, data integrity, integrations, authentication, and performance." },
  { icon: Gauge, title: "Performance Testing", desc: "Identify bottlenecks and ensure applications remain fast, stable, and reliable under real-world workloads." },
  { icon: MonitorSmartphone, title: "Mobile & Web Testing", desc: "End-to-end testing across browsers, devices, operating systems, and screen sizes for consistent experiences." },
  { icon: BriefcaseBusiness, title: "QA Consulting", desc: "Strategic QA guidance, test strategy, process improvement, and quality engineering solutions tailored to your business." },
];

const stats = [
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Enterprise Clients" },
  { value: 10, suffix: "+", label: "Years of Expertise" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

const whyUs = [
  { icon: BadgeCheck, title: "Quality You Can Trust", desc: "Thorough testing helps identify defects early and deliver stable, reliable software to your customers." },
  { icon: Rocket, title: "Faster Releases", desc: "Smart automation and efficient QA processes help teams release high-quality software faster and with confidence." },
  { icon: Users, title: "Expert QA Team", desc: "Experienced QA professionals bring proven testing expertise across web, mobile, API, automation, and performance testing." },
  { icon: ShieldCheck, title: "Reduced Risk", desc: "Identify critical issues before production, reduce release risks, and improve the overall quality of your product." },
];

const process = [
  { icon: SearchCheck, title: "Discovery & Requirements", desc: "Understand your product, users, business goals, requirements, and potential quality risks." },
  { icon: ClipboardList, title: "Test Strategy", desc: "Define the testing approach, scope, test coverage, environments, tools, and quality objectives." },
  { icon: ListChecks, title: "Test Execution", desc: "Execute functional, regression, API, mobile, web, and exploratory testing to identify defects early." },
  { icon: FileCheck2, title: "Quality Validation", desc: "Validate integrations, and verify application quality across releases." },
  { icon: Rocket, title: "Release", desc: "Support release readiness, monitor quality, analyze defects, and continuously improve the testing process." },
];

const tech = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "Go",
  "AWS", "Azure", "Kubernetes", "PostgreSQL", "TensorFlow", "OpenAI",
  "Swift", "Kotlin", "Flutter", "GraphQL",
];

const testimonials = [
  { name: "Sarah Chen", role: "CTO, Nexora Finance", text: "PrimeRiseTech rebuilt our trading platform end-to-end. Latency dropped 60%, and their team feels like an extension of ours." },
  { name: "Marcus Weber", role: "VP Engineering, Helix Logistics", text: "Their AI team delivered a demand-forecasting model that saved us $2.4M in the first year. Exceptional partners." },
  { name: "Ana Ribeiro", role: "Founder, Bloom Health", text: "From cloud migration to HIPAA compliance — flawless execution. Would recommend to any healthcare startup." },
];

const faqs = [
  { q: "How do you price projects?", a: "We offer fixed-price for well-scoped work, and time & materials for evolving initiatives. Every engagement starts with a free discovery call." },
  { q: "How long does a typical project take?", a: "MVPs ship in 8–12 weeks. Enterprise platforms range from 4–9 months depending on scope. We provide clear milestone-based timelines." },
  { q: "Do you sign NDAs?", a: "Yes — always. NDAs are executed before any technical or business discussion." },
  { q: "Do you work with startups or only enterprises?", a: "Both. We have dedicated tracks for early-stage startups (lean MVPs) and enterprise-scale transformation." },
  { q: "What's your team composition?", a: "Senior engineers, architects, designers, PMs, and QA. Every project has a dedicated tech lead as your single point of contact." },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - t0) / duration, 1);
      setCount(Math.floor(p * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return count;
}

function StatCard({ value, suffix, label, start }: { value: number; suffix: string; label: string; start: boolean }) {
  const n = useCountUp(value, 1800, start);
  return (
    <div className="glass rounded-2xl p-8 text-center glass-hover">
      <div className="text-4xl sm:text-5xl font-bold text-gradient font-display">
        {n}{suffix}
      </div>
      <div className="mt-2 text-sm text-muted-foreground uppercase tracking-wider">{label}</div>
    </div>
  );
}

function Home() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsInView, setStatsInView] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setStatsInView(true),
      { threshold: 0.3 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* HERO */}
      <HeroSection />


      {/* STATS */}
      <section ref={statsRef} className="py-16">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => <StatCard key={s.label} {...s} start={statsInView} />)}
        </div>
      </section>

      {/* SERVICES */}
      <Section
        eyebrow="OUR SERVICES"
        title={<>Innovative Solutions. <span className="text-gradient">Powerful Results.</span></>}
        subtitle="PrimeRiseTech delivers custom software, AI, cloud, and digital solutions designed to help businesses innovate, scale, and rise above the competition."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="glass glass-hover rounded-2xl p-8 group animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-primary shadow-[var(--shadow-glow)] group-hover:scale-110 transition">
                <s.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <Link to="/services" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* WHY US */}
      <Section
        eyebrow="WHY CHOOSE US"
        title={<>The Partner You Can <span className="text-gradient">Rely On</span></>}
        subtitle="We help businesses deliver reliable, high-quality software through smarter testing, automation, and quality engineering."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((w, i) => (
            <div key={w.title} className="glass rounded-2xl p-8 glass-hover animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
              <w.icon className="h-10 w-10 text-primary" />
              <h3 className="mt-5 text-lg font-bold">{w.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section
        eyebrow="HOW WE DELIVER"
        title={<>Our <span className="text-gradient">QA Delivery Processs</span></>}
        subtitle="A structured, risk-based approach to delivering reliable software at every stage."
      >
        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="grid gap-8 lg:grid-cols-5">
            {process.map((p, i) => (
              <div key={p.title} className="relative text-center animate-fade-up" style={{ animationDelay: `${i * 120}ms` }}>
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-primary shadow-[var(--shadow-glow)] relative z-10">
                  <p.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <div className="mt-4 text-xs font-bold text-primary uppercase tracking-wider">Step {i + 1}</div>
                <h3 className="mt-2 text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* TECH */}
      <Section
        eyebrow="Our Stack"
        title={<>Technologies <span className="text-gradient">We Use</span></>}
        subtitle="Best-in-class tools, chosen per project&nbsp; never trend-driven."
      >
        <div className="flex flex-wrap justify-center gap-3">
          {tech.map((t, i) => (
            <div
              key={t}
              className="glass rounded-full px-6 py-3 text-sm font-semibold glass-hover animate-fade-up"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              {t}
            </div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section
        eyebrow="Client Voices"
        title={<>What Our <span className="text-gradient">Clients Say</span></>}
      >
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={t.name} className="glass rounded-2xl p-8 glass-hover animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-primary text-primary" />)}
              </div>
              <p className="text-sm leading-relaxed text-foreground/90">"{t.text}"</p>
              <div className="mt-6 pt-6 border-t border-border/50">
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section
        eyebrow="FAQ"
        title={<>Frequently Asked <span className="text-gradient">Questions</span></>}
      >
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="glass rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:text-primary transition"
              >
                <span className="font-semibold pr-4">{f.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 transition ${openFaq === i ? "rotate-180 text-primary" : ""}`} />
              </button>
              {openFaq === i && (
                <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed animate-fade-up">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="glass rounded-3xl p-12 sm:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-primary opacity-10" />
            <div className="relative">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Ready to build something <span className="text-gradient">extraordinary?</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Let's talk about your vision. Free 30-minute strategy call, no strings attached.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-105 transition"
              >
                Book Your Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <div className="mt-6 flex items-center justify-center gap-6 text-xs text-muted-foreground flex-wrap">
                <span className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-primary" /> No commitments</span>
                <span className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-primary" /> NDA on request</span>
                <span className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-primary" /> Response in 24h</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
