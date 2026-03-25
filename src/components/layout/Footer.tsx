import Link from "next/link";
import { Linkedin } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { FOOTER } from "@/data/siteContent";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-6xl px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <span className="font-bold text-xl tracking-tight">FERZ</span>
            <p className="text-sm text-primary-foreground/70 max-w-xs">{FOOTER.tagline}</p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/50 mb-3">
              Navegación
            </p>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/50 mb-3">
              Redes
            </p>
            <div className="flex gap-3">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de FERZ"
                className="p-2 rounded-md bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-xs text-primary-foreground/50">
          {FOOTER.copyright}
        </div>
      </div>
    </footer>
  );
}
