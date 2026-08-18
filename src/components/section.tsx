import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
  id,
}: {
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-6">
        {(eyebrow || title || subtitle) && (
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
            {eyebrow && (
              <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-glow-pulse" />
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">{title}</h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
