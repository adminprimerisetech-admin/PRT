import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Star } from "lucide-react";
import heroImg from "../assets/hero-tech.jpg";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    const onMove = (e: MouseEvent) => {
      const w = window.innerWidth, h = window.innerHeight;
      setMouse({ x: (e.clientX / w - 0.5) * 2, y: (e.clientY / h - 0.5) * 2 });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  // Deterministic particle positions (avoid SSR/CSR mismatch)
  const particles = Array.from({ length: 24 }, (_, i) => ({
    left: (i * 37) % 100,
    top: (i * 53) % 100,
    delay: (i * 0.4) % 6,
    duration: 8 + (i % 5) * 2,
    size: 2 + (i % 3),
  }));

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center pt-24 overflow-hidden"
    >
      {/* Background image with parallax */}
      <div
        aria-hidden
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `translate3d(${mouse.x * -12}px, ${scrollY * 0.3 + mouse.y * -8}px, 0) scale(1.08)`,
          transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1024}
          className="h-full w-full object-cover object-right animate-hero-float"
        />
        {/* Gradient scrims: strong on left for text legibility, subtle on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      {/* Grid overlay */}
      <div aria-hidden className="absolute inset-0 grid-pattern opacity-20" />

      {/* Ambient glows */}
      <div aria-hidden className="absolute top-1/3 left-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-glow-pulse" />
      <div aria-hidden className="absolute bottom-1/4 right-1/4 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      {/* Floating particles */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-primary/60 shadow-[0_0_12px_rgba(6,182,212,0.8)] animate-particle"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Content — left side */}
      <div className="relative mx-auto max-w-7xl px-6 w-full">
        <div className="max-w-2xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-glow-pulse" />
            Smarter QA • Better Software
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            Rise&nbsp;with&nbsp; <span className="text-gradient">PrimeRiseTech</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            PrimeRiseTech helps businesses deliver reliable software through expert QA, intelligent testing, and automation.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-105 transition"
            >
              Book a Free Consultation
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold hover:text-primary transition"
            >            
              Explore Services
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
            </div>
            <span>Trusted by 15+ enterprises worldwide by delivering secure, scalable, and reliable software for businesses of all sizes.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
