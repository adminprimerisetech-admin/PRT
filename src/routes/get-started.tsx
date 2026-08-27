import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Rocket,
  ClipboardList,
  Users,
  CheckCircle2,
  ArrowRight,
  Send,
} from "lucide-react";
import { Section } from "../components/section";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { toast } from "sonner";

export const Route = createFileRoute("/get-started")({
  head: () => ({
    meta: [
      { title: "Get Started — PrimeRiseTech" },
      { name: "description", content: "Tell us about your project and get a tailored QA & testing plan from PrimeRiseTech within 24 hours." },
      { property: "og:title", content: "Get Started — PrimeRiseTech" },
      { property: "og:description", content: "Tell us about your project and get a tailored QA & testing plan from PrimeRiseTech within 24 hours." },
      { property: "og:url", content: "/get-started" },
    ],
    links: [{ rel: "canonical", href: "/get-started" }],
  }),
  component: GetStarted,
});

const steps = [
  {
    icon: ClipboardList,
    title: "Tell us about your project",
    desc: "Share a few details about your product and what kind of QA support you're looking for.",
  },
  {
    icon: Users,
    title: "We build your plan",
    desc: "Our team puts together a tailored testing & automation plan and matches you with the right engineers.",
  },
  {
    icon: Rocket,
    title: "We kick off together",
    desc: "You approve the plan and we get to work, usually within a few days of your first message.",
  },
];

function GetStarted() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    service: "",
    timeline: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "383cf36a-2bcc-4860-a046-3e8dcb406eeb",
          subject: `New "Get Started" submission from ${form.name}`,
          from_name: form.name,
          name: form.name,
          email: form.email,
          company: form.company,
          project_type: form.projectType,
          service_of_interest: form.service,
          timeline: form.timeline,
          message: form.message,
        }),
      });
      const result = await res.json();
      if (result.success) {
        setSubmitted(true);
        toast.success("Thanks! We'll be in touch within 24 hours with your plan.");
      } else {
        toast.error(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-20 left-1/3 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary mb-6">
            Start Your Project
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight">
            Let's Get Your <span className="text-gradient">Project Started</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Tell us a bit about what you're building. We'll come back with a tailored
            QA and testing plan within 24 hours-no obligation.
          </p>
        </div>
      </section>

      {/* How it works */}
      <Section eyebrow="How It Works" title="Three steps to kickoff">
        <div className="grid sm:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="glass rounded-3xl p-8 glass-hover animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary shadow-[var(--shadow-glow)]">
                <s.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <div className="mt-5 text-xs font-semibold text-primary uppercase tracking-wider">
                Step {i + 1}
              </div>
              <h3 className="mt-2 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Form */}
      <Section className="pt-0">
        <div className="mx-auto max-w-3xl glass rounded-3xl p-8 sm:p-10">
          {submitted ? (
            <div className="text-center py-16 animate-fade-up">
              <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-primary shadow-[var(--shadow-glow)]">
                <CheckCircle2 className="h-10 w-10 text-primary-foreground" />
              </div>
              <h3 className="mt-6 text-2xl font-bold">You're all set!</h3>
              <p className="mt-2 text-muted-foreground">
                We'll review your project and follow up within 24 hours with a tailored plan.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", email: "", company: "", projectType: "", service: "", timeline: "", message: "" });
                }}
                className="mt-6 rounded-full glass px-6 py-2.5 text-sm font-semibold hover:text-primary transition"
              >
                Submit another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h2 className="text-2xl font-bold">Tell us about your project</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full Name *" value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="Jane Doe" />
                <Field label="Email *" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="jane@company.com" />
              </div>
              <Field label="Company" value={form.company} onChange={(v) => setForm({ ...form, company: v })} placeholder="Your company" />

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-primary uppercase tracking-wider">Project Type</label>
                  <Select
                    value={form.projectType || undefined}
                    onValueChange={(value) => setForm({ ...form, projectType: value })}
                  >
                    <SelectTrigger className="mt-2 w-full rounded-xl border border-border bg-[#0f1f34] px-4 py-3 text-sm text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent className="border border-border bg-[#0f1f34] text-white">
                      <SelectItem value="New Project" className="text-white focus:bg-[#15385d] focus:text-white">New Project</SelectItem>
                      <SelectItem value="Existing Product" className="text-white focus:bg-[#15385d] focus:text-white">Existing Product</SelectItem>
                      <SelectItem value="Ongoing QA Support" className="text-white focus:bg-[#15385d] focus:text-white">Ongoing QA Support</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-primary uppercase tracking-wider">Timeline</label>
                  <Select
                    value={form.timeline || undefined}
                    onValueChange={(value) => setForm({ ...form, timeline: value })}
                  >
                    <SelectTrigger className="mt-2 w-full rounded-xl border border-border bg-[#0f1f34] px-4 py-3 text-sm text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition">
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent className="border border-border bg-[#0f1f34] text-white">
                      <SelectItem value="ASAP" className="text-white focus:bg-[#15385d] focus:text-white">ASAP</SelectItem>
                      <SelectItem value="Within 1 month" className="text-white focus:bg-[#15385d] focus:text-white">Within 1 month</SelectItem>
                      <SelectItem value="1-3 months" className="text-white focus:bg-[#15385d] focus:text-white">1-3 months</SelectItem>
                      <SelectItem value="Flexible" className="text-white focus:bg-[#15385d] focus:text-white">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-primary uppercase tracking-wider">Service of Interest</label>
                <Select
                  value={form.service || undefined}
                  onValueChange={(value) => setForm({ ...form, service: value })}
                >
                  <SelectTrigger className="mt-2 w-full rounded-xl border border-border bg-[#0f1f34] px-4 py-3 text-sm text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="border border-border bg-[#0f1f34] text-white">
                    <SelectItem value="Manual Testing" className="text-white focus:bg-[#15385d] focus:text-white">Manual Testing</SelectItem>
                    <SelectItem value="Test Automation" className="text-white focus:bg-[#15385d] focus:text-white">Test Automation</SelectItem>
                    <SelectItem value="API Testing" className="text-white focus:bg-[#15385d] focus:text-white">API Testing</SelectItem>
                    <SelectItem value="Performance Testing" className="text-white focus:bg-[#15385d] focus:text-white">Performance Testing</SelectItem>
                    <SelectItem value="Mobile & Web Testing" className="text-white focus:bg-[#15385d] focus:text-white">Mobile & Web Testing</SelectItem>
                    <SelectItem value="QA Consulting" className="text-white focus:bg-[#15385d] focus:text-white">QA Consulting</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-xs font-semibold text-primary uppercase tracking-wider">Project Details *</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  placeholder="Tell us about your product, current QA process, and what you need help with..."
                  className="mt-2 w-full rounded-xl bg-background/60 border border-border px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-[1.02] transition disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {submitting ? "Sending..." : <>Get My Free Plan <Send className="h-4 w-4" /></>}
              </button>
              <p className="text-xs text-muted-foreground text-center">
                By submitting, you agree to our privacy policy. We'll never share your info.{" "}
                Prefer to just ask a question? <Link to="/contact" className="text-primary hover:underline">Contact us instead <ArrowRight className="inline h-3 w-3" /></Link>
              </p>
            </form>
          )}
        </div>
      </Section>
    </>
  );
}

function Field({
  label, value, onChange, placeholder, type = "text",
}: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string }) {
  return (
    <div>
      <label className="text-xs font-semibold text-primary uppercase tracking-wider">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl bg-background/60 border border-border px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
      />
    </div>
  );
}
