import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { Section } from "../components/section";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — PrimeRiseTech" },
      { name: "description", content: "Get in touch with PrimeRiseTech. Free consultation, 24h response, and dedicated senior engineers ready to help." },
      { property: "og:title", content: "Contact Us — PrimeRiseTech" },
      { property: "og:description", content: "Get in touch with PrimeRiseTech. Free consultation, 24h response, and dedicated senior engineers ready to help." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@primerisetech.com", href: "mailto:hello@primerisetech.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
  { icon: MapPin, label: "Office", value: "1234 Innovation Drive, San Francisco, CA 94107" },
  { icon: Clock, label: "Hours", value: "Mon–Fri: 9AM – 6PM PST" },
];

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    setSubmitted(true);
    toast.success("Thanks! We'll be in touch within 24 hours.");
  };

  return (
    <>
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-20 left-1/3 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary mb-6">
            Get In Touch
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight">
            Let's Build Something <span className="text-gradient">Great Together</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Tell us about your project. We'll respond within 24 hours with next steps.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
          {/* Info */}
          <div className="space-y-6">
            <div className="glass rounded-3xl p-8">
              <h2 className="text-2xl font-bold">Contact Information</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Reach out directly, or use the form. Whichever works best.
              </p>
              <div className="mt-8 space-y-5">
                {contactInfo.map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-primary shadow-[var(--shadow-glow)]">
                      <c.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-primary uppercase tracking-wider">{c.label}</div>
                      {c.href ? (
                        <a href={c.href} className="text-sm hover:text-primary transition break-words">{c.value}</a>
                      ) : (
                        <div className="text-sm break-words">{c.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-3xl overflow-hidden border border-primary/20">
              <iframe
                title="PrimeRiseTech Office Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d421.87898844216596!2d72.47637285198064!3d23.02427109542679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1785505414778!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(0.9)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className="glass rounded-3xl p-8 sm:p-10">
            {submitted ? (
              <div className="text-center py-16 animate-fade-up">
                <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-primary shadow-[var(--shadow-glow)]">
                  <CheckCircle2 className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="mt-6 text-2xl font-bold">Message Sent!</h3>
                <p className="mt-2 text-muted-foreground">We'll respond within 24 hours. Talk soon.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", service: "", message: "" }); }}
                  className="mt-6 rounded-full glass px-6 py-2.5 text-sm font-semibold hover:text-primary transition"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="text-2xl font-bold">Send us a message</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Full Name *" value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="Jane Doe" />
                  <Field label="Email *" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="jane@company.com" />
                </div>
                <Field label="Company" value={form.company} onChange={(v) => setForm({ ...form, company: v })} placeholder="Your company" />
                <div>
                  <label className="text-xs font-semibold text-primary uppercase tracking-wider">Service of Interest</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="mt-2 w-full rounded-xl bg-background/60 border border-border px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                  >
                    <option value="">Select a service</option>
                    <option>Web Development</option>
                    <option>Mobile App Development</option>
                    <option>AI Solutions</option>
                    <option>Cloud Solutions</option>
                    <option>UI/UX Design</option>
                    <option>IT Consulting</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-primary uppercase tracking-wider">Message *</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    placeholder="Tell us about your project, goals, timeline..."
                    className="mt-2 w-full rounded-xl bg-background/60 border border-border px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-[1.02] transition"
                >
                  Send Message <Send className="h-4 w-4" />
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you agree to our privacy policy. We'll never share your info.
                </p>
              </form>
            )}
          </div>
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
