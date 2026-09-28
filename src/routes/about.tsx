import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart,BadgeCheck, Shield, Zap, Users2,Lightbulb, TrendingUp, Sparkles } from "lucide-react";
import { Section } from "../components/section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — PrimeRiseTech" },
      { name: "description", content: "Meet PrimeRiseTech: our story, mission, vision, values, and the senior team building next-generation digital solutions." },
      { property: "og:title", content: "About Us — PrimeRiseTech" },
      { property: "og:description", content: "Meet PrimeRiseTech: our story, mission, vision, values, and the senior team building next-generation digital solutions." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { icon: Shield, title: "Quality First", desc: "We put quality at the heart of everything we do. Our goal is not simply to find defects, but to help prevent them and continuously improve the overall product experience." },
  { icon: BadgeCheck, title: "Excellence", desc: "We maintain high standards across every stage of testing, from test strategy and planning to execution, automation, reporting, and continuous improvement." },
  { icon: Users2, title: "Partnership", desc: "We believe the best results come from collaboration. We work closely with developers, product teams, and stakeholders to make quality a shared responsibility." },
  { icon: Lightbulb, title: "Innovation", desc: "Technology never stands still, and neither do we. We continuously explore automation, AI-assisted testing, modern QA tools, and smarter methodologies to make testing more efficient and effective." },
];

const team = [
  { name: "Alex Morgan", role: "CEO & Founder", bio: "20 years scaling engineering orgs at Fortune 500s." },
  { name: "Priya Sharma", role: "CTO", bio: "Ex-Google architect, cloud & AI systems specialist." },
  { name: "David Kowalski", role: "Head of Design", bio: "Award-winning product designer, ex-Airbnb." },
  { name: "Elena Rossi", role: "VP of Delivery", bio: "PMP-certified, delivered 100+ enterprise programs." },
  { name: "Rafael Santos", role: "Head of AI", bio: "PhD in ML, published researcher, LLM specialist." },
  { name: "Yuki Tanaka", role: "Head of Cloud", bio: "AWS-certified architect, DevOps evangelist." },
];

function About() {
  return (
    <>
    {/*
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary mb-6">
            <Sparkles className="h-3 w-3" /> About PrimeRiseTech
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight">
            Building Confidence Through<span className="text-gradient"> Software Quality</span> 
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
             At PrimeRiseTech, we help businesses deliver reliable, secure, high-performing, and user-friendly software through expert Quality Assurance and Testing.
          </p>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
             From Manual Testing and Test Automation to API, Performance, Web, Mobile, Regression, and End-to-End Testing, we combine proven QA practices with modern testing technologies to identify defects early, reduce risks, and strengthen product quality.
          </p>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            We work with modern testing technologies, combining proven QA practices, automation, and continuous improvement to turn quality into a competitive advantage.
          </p>
        </div>
      </section>

      {/* STORY */}
      <Section eyebrow="Our Story" title={<>From Testing to<span className="text-gradient"> Quality Engineering</span></>}>
        <div className="max-w-4xl mx-auto glass rounded-3xl p-10 sm:p-14 space-y-5 text-muted-foreground leading-relaxed">
          <p>
            At PrimeRiseTech, we help businesses deliver reliable, secure, high-performing, and user-friendly software through expert Quality Assurance and Testing.
          </p>
          <p>
            From Manual Testing and Test Automation to API, Performance, Web, Mobile, Regression, and End-to-End Testing, we combine proven QA practices with modern testing technologies to identify defects early, reduce risks, and strengthen product quality.
          </p>
          <p>
            We work closely with development and product teams throughout the software lifecycle, providing comprehensive test coverage and clear quality insights to help teams make confident release decisions.Our goal remains simple:
            <span className="text-foreground font-semibold"> Better quality. Lower risk. Greater confidence. Every release.</span>
          </p>
          <p>
            Your product represents your brand, your investment, and your customers' trust. That's why we treat software quality as more than a final testing step - it's a responsibility built into every stage of development.
          </p>
        </div>
      </Section>

      {/* MISSION & VISION */}
      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass rounded-3xl p-10 glass-hover animate-fade-up">
            <Target className="h-12 w-12 text-primary" />
            <h3 className="mt-6 text-3xl font-bold">Our Mission</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To empower businesses with smarter, faster, and more reliable software testing solutions.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              At PrimeRiseTech, we combine skilled QA expertise with quality-first mindset to identify risks early, improve product performance, accelerate releases, and help our clients deliver exceptional digital experiences.            </p>
          </div>
          <div className="glass rounded-3xl p-10 glass-hover animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <Eye className="h-12 w-12 text-primary" />
            <h3 className="mt-6 text-3xl font-bold">Our Vision</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To become a trusted global leader in software quality, transforming the way businesses build, test, and deliver reliable digital products.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
We envision a future where quality is embedded into every development process and every business can deliver digital experiences that customers can trust.            </p>
          </div>
        </div>
      </Section>

      {/* VALUES */}
      <Section
        eyebrow="What We Stand For"
        title={<>Our <span className="text-gradient">Core Values</span></>}
        subtitle="Four principles that guide every decision, every project, every day."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <div key={v.title} className="glass rounded-2xl p-8 glass-hover animate-fade-up text-center" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-xl bg-gradient-primary shadow-[var(--shadow-glow)]">
                <v.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* TEAM }
      <Section
        eyebrow="Meet the Team"
        title={<>Leaders Behind <span className="text-gradient">Every Project</span></>}
        subtitle="Senior specialists with decades of combined experience at the world's top tech companies."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <div key={m.name} className="glass rounded-2xl p-8 glass-hover animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="flex items-center gap-4">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-gradient-primary text-primary-foreground font-bold text-lg shadow-[var(--shadow-glow)]">
                  {m.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold truncate">{m.name}</h3>
                  <div className="text-xs text-primary font-semibold uppercase tracking-wider">{m.role}</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
              <div className="mt-4 flex items-center gap-1 text-xs text-muted-foreground">
                <Heart className="h-3.5 w-3.5 text-primary" /> Passionate about their craft
              </div>
            </div>
          ))}
        </div>
      </Section>
      */}
    </>
  );
}
