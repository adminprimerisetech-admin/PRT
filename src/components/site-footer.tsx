import { Link } from "@tanstack/react-router";
import { Zap, Mail, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";

/* Official-style X logo — currently disabled
const XLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.963 6.817H1.684l7.73-8.835L1.254 2.25H8.08l4.713 6.231L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
  </svg>
);
*/

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-primary">
                <Zap className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
              </div>

              <span className="font-display text-xl font-bold">
                PrimeRise<span className="text-gradient">Tech</span>
              </span>
            </Link>

            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Helping businesses deliver better software through quality-focused QA and automation.
            </p>

            {/* Social Media */}
            <div className="mt-6 flex gap-3">
              {[
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/primerisetech-undefined-b409a6431/",
                  label: "LinkedIn",
                },
                /* X social link — currently disabled
                {
                  icon: XLogo,
                  href: "https://x.com",
                  label: "X",
                },
                */
                {
                  icon: Facebook,
                  href: "https://www.facebook.com/profile.php?id=61593809043258",
                  label: "Facebook",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/primerisetech/",
                  label: "Instagram",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-lg glass hover:text-primary transition"
                  aria-label={label}
                  title={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>

            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/about" className="hover:text-primary">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/services" className="hover:text-primary">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/qa-training" className="hover:text-primary">
                  QA Training
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-primary">
                  Contact Us
                </Link>
              </li>

              <li>
                <a href="#" className="hover:text-primary">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>

            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Manual Testing</li>
              <li>Test Automation</li>
              <li>API Testing</li>
              <li>Performance Testing</li>
              <li>Database Testing</li>
              <li>QA Consulting</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span>Canada: 37, Wayne Avenue, Oshawa</span>
              </li>

              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span>India: Unit 826, Shaligram Arcade, South Bopal, Ahmedabad</span>
              </li>

              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary shrink-0" />

                <a href="mailto:support@primerisetech.com" className="hover:text-primary">
                  support@primerisetech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between gap-3 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} PrimeRiseTech. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-primary"></a>

            <a href="#" className="hover:text-primary"></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
