import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Bot,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  Database,
  Gauge,
  Network,
  ShieldCheck,
} from "lucide-react";
import { Section } from "../components/section";
import { toast } from "sonner";

const WEB3FORMS_ACCESS_KEY = "383cf36a-2bcc-4860-a046-3e8dcb406eeb";

export const Route = createFileRoute("/qa-training")({
  head: () => ({
    meta: [
      { title: "QA Training — PrimeRiseTech" },
      {
        name: "description",
        content:
          "Build practical software testing skills with QA training in manual testing, test automation, and API testing.",
      },
      { property: "og:title", content: "QA Training — PrimeRiseTech" },
      {
        property: "og:description",
        content:
          "Build practical software testing skills with QA training in manual testing, test automation, and API testing.",
      },
      { property: "og:url", content: "/qa-training" },
    ],
    links: [{ rel: "canonical", href: "/qa-training" }],
  }),
  component: QaTraining,
});

const topics = [
  {
    icon: BookOpen,
    title: "QA Fundamentals",
    description:
      "Learn testing principles, the software development lifecycle, and how to approach quality throughout a project.",
    skills: ["Testing Concepts", "Test Planning", "Defect Reporting"],
  },
  {
    icon: ClipboardCheck,
    title: "Manual Testing",
    description:
      "Practice designing and executing tests for web and mobile applications, from exploratory testing to regression.",
    skills: ["Test Cases", "Exploratory Testing", "Regression Testing", "Mobile Testing"],
  },
  {
    icon: Bot,
    title: "Test Automation",
    description:
      "Explore automation fundamentals and how automated checks support reliable, repeatable software releases.",
    skills: ["Automation Concepts", "Web Testing Tools", "CI/CD Basics"],
  },
  {
    icon: Network,
    title: "API Testing",
    description:
      "Understand how to validate API behavior, data, and error responses as part of a complete testing workflow.",
    skills: ["API Requests", "Response Validation", "Integration Testing"],
  },
  {
    icon: Database,
    title: "Database Testing",
    description:
      "Learn to verify database functionality, data integrity, and reliable data handling across applications.",
    skills: ["Data Validation", "CRUD Operations", "Database Integration"],
  },
  {
    icon: Gauge,
    title: "Performance Testing",
    description:
      "Explore ways to evaluate application speed, stability, and scalability under different workloads.",
    skills: ["Load Testing", "Response Time Analysis", "Performance Bottlenecks"],
  },
];

function QaTraining() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "Beginner / Fresher",
    training: "Complete QA Training Program",
    questions: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const phone = form.phone.trim();
    const phoneDigitCount = phone.replace(/\D/g, "").length;
    if (!/^\+?[0-9][0-9 ()-]*$/.test(phone) || phoneDigitCount < 7 || phoneDigitCount > 15) {
      toast.error("Enter a valid phone number with 7 to 15 digits.");
      return;
    }

    setSubmitting(true);
    try {
      const body = new FormData(event.currentTarget);
      body.append("access_key", WEB3FORMS_ACCESS_KEY);
      body.append("subject", `New QA training enquiry from ${form.name}`);
      body.append("from_name", form.name);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body,
      });
      const result: { success?: boolean; message?: string } = await response.json();

      if (!response.ok || !result.success) {
        toast.error(result.message || "Could not send your enquiry. Please try again.");
        return;
      }

      setSubmitted(true);
      toast.success("Your training enquiry has been sent to our team.");
    } catch {
      toast.error("Could not send your enquiry. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-16">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-20 right-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 text-center animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Learn with PrimeRiseTech
          </div>
          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
            QA <span className="text-gradient">Training</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Build practical software quality skills, from testing fundamentals to automation and API
            testing.
          </p>
        </div>
      </section>

      <Section
        eyebrow="What You Can Learn"
        title={
          <>
            Practical skills for <span className="text-gradient">quality-focused teams</span>
          </>
        }
        subtitle="Explore core QA topics designed to help you understand how software is tested and delivered with confidence."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {topics.map((topic, index) => (
            <div
              key={topic.title}
              className="glass glass-hover animate-fade-up rounded-3xl p-8"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary shadow-[var(--shadow-glow)]">
                <topic.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h2 className="mt-5 text-2xl font-bold">{topic.title}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{topic.description}</p>
              <ul className="mt-5 space-y-3">
                {topic.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="training-enquiry">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border/50 bg-[#04152b] p-6 sm:p-8">
          <div className="mb-7 text-center">
            <div className="mb-3 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              Start Your QA Journey
            </div>
            <h2 className="text-2xl font-bold">
              Interested in <span className="text-gradient">QA Training?</span>
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill out the form below, and our team will contact you with training details, course
              structure, and next steps.
            </p>
          </div>

          {submitted ? (
            <div className="py-8 text-center" role="status">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-primary shadow-[var(--shadow-glow)]">
                <CheckCircle2 className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-2xl font-bold">Enquiry Sent!</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Thanks for your interest. Our team will contact you with training details and next
                steps.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setForm({
                    name: "",
                    email: "",
                    phone: "",
                    experience: "Beginner / Fresher",
                    training: "Complete QA Training Program",
                    questions: "",
                  });
                }}
                className="mt-6 rounded-full glass px-6 py-2.5 text-sm font-semibold transition hover:text-primary"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="training-name" className="mb-1.5 block text-sm font-semibold">
                  Full Name *
                </label>
                <input
                  id="training-name"
                  name="name"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                  placeholder="Enter your full name"
                  className="w-full rounded-full border border-border bg-background/30 px-4 py-2.5 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="training-email" className="mb-1.5 block text-sm font-semibold">
                    Email Address *
                  </label>
                  <input
                    id="training-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={(event) => setForm({ ...form, email: event.target.value })}
                    placeholder="you@example.com"
                    className="w-full rounded-full border border-border bg-background/30 px-4 py-2.5 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <div>
                  <label htmlFor="training-phone" className="mb-1.5 block text-sm font-semibold">
                    Phone *
                  </label>
                  <input
                    id="training-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    maxLength={24}
                    pattern="[+]?[0-9][0-9 ()-]{5,23}"
                    title="Enter a valid phone number with 7 to 15 digits."
                    value={form.phone}
                    onChange={(event) => setForm({ ...form, phone: event.target.value })}
                    placeholder="Your Phone Number"
                    className="w-full rounded-full border border-border bg-background/30 px-4 py-2.5 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30"
                  />
                </div>
              </div>

              <fieldset>
                <legend className="mb-2 text-sm font-semibold">
                  Your Current Experience Level *
                </legend>
                <div className="space-y-2.5">
                  {[
                    "Beginner / Fresher",
                    "Looking for a career switch",
                    "Working professional / QA professional",
                  ].map((experience) => (
                    <label
                      key={experience}
                      className="flex cursor-pointer items-center gap-2.5 text-sm"
                    >
                      <input
                        type="radio"
                        name="experience"
                        value={experience}
                        required
                        checked={form.experience === experience}
                        onChange={(event) => setForm({ ...form, experience: event.target.value })}
                        className="h-4 w-4 accent-primary"
                      />
                      {experience}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div>
                <label htmlFor="training-interest" className="mb-1.5 block text-sm font-semibold">
                  Which Training Are You Interested In? *
                </label>
                <select
                  id="training-interest"
                  name="training"
                  required
                  value={form.training}
                  onChange={(event) => setForm({ ...form, training: event.target.value })}
                  className="w-full rounded-lg border border-border bg-[#04152b] px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                >
                  <option>Complete QA Training Program</option>
                  <option>Manual Testing</option>
                  <option>Test Automation</option>
                  <option>API Testing</option>
                  <option>Other / Not Sure Yet</option>
                </select>
              </div>

              <div>
                <label htmlFor="training-questions" className="mb-1.5 block text-sm font-semibold">
                  Any Questions? (Optional)
                </label>
                <textarea
                  id="training-questions"
                  name="questions"
                  rows={3}
                  value={form.questions}
                  onChange={(event) => setForm({ ...form, questions: event.target.value })}
                  placeholder="Tell us about your goals or ask a question..."
                  className="w-full resize-y rounded-lg border border-border bg-background/30 px-3 py-2.5 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30"
                />
              </div>

              <div className="flex items-start gap-2 rounded-xl bg-primary/10 p-3 text-xs text-muted-foreground">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p>
                  Your information will be used to respond to your training enquiry. We respect your
                  privacy.
                </p>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
              >
                {submitting ? (
                  "Sending..."
                ) : (
                  <>
                    Submit Enquiry <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Your enquiry will be sent securely to the PrimeRiseTech team.
              </p>
            </form>
          )}
        </div>
      </Section>
    </>
  );
}
