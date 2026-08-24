import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart, Shield, Zap, Users2, TrendingUp, Sparkles } from "lucide-react";
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
  { icon: Shield, title: "Integrity", desc: "We do what we say. Transparent pricing, honest timelines, no surprises." },
  { icon: Zap, title: "Excellence", desc: "Craftsmanship at every layer — from code review to client communication." },
  { icon: Users2, title: "Partnership", desc: "Your success is our metric. We win only when you win." },
  { icon: TrendingUp, title: "Innovation", desc: "Continuous learning, always shipping the best-fit modern tooling." },
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
            PrimeRiseTech provides end-to-end QA and testing solutions that help businesses identify defects early, reduce production risks, and deliver reliable software faster.
          </p>
        </div>
      </section>

      {/* STORY */}
      <Section eyebrow="Our Story" title={<>From Ideas<span className="text-gradient"> to Reality</span></>}>
        <div className="max-w-4xl mx-auto glass rounded-3xl p-10 sm:p-14 space-y-5 text-muted-foreground leading-relaxed">
          <p>
            <span className="text-foreground font-semibold">PrimeRiseTech was founded in 2021</span> by a group of senior engineers who
            believed enterprise software could be built better — faster, more secure, and more human.
          </p>
          <p>
            What began as a five-person consultancy in San Francisco has grown into a global network
            of 200+ specialists across three continents. We've partnered with startups that became
            unicorns, and Fortune 500 companies reinventing themselves for the digital era.
          </p>
          <p>
            Today, our work spans custom software, cloud transformation, AI systems, and strategic
            technology advisory. But our founding principle hasn't changed:
            <span className="text-foreground font-semibold"> deliver work we'd be proud to sign our names to.</span>
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
              To empower organizations to thrive in the digital age by delivering world-class
              software solutions that solve real business problems — engineered with integrity,
              designed with empathy, and built to last.
            </p>
          </div>
          <div className="glass rounded-3xl p-10 glass-hover animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <Eye className="h-12 w-12 text-primary" />
            <h3 className="mt-6 text-3xl font-bold">Our Vision</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A world where every organization — from ambitious startups to global enterprises —
              can access the same caliber of engineering talent and strategic guidance that powers
              the world's most innovative companies.
            </p>
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
