import Link from "next/link";
import { buttonVariants } from "@/lib/buttonVariants";
import { HERO } from "@/data/siteContent";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-primary text-primary-foreground overflow-hidden"
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 50%, white 1px, transparent 1px), radial-gradient(circle at 75% 20%, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden
      />

      <div className="container mx-auto max-w-6xl px-6 md:px-10 py-32 relative z-10">
        <div className="max-w-3xl">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-6">
            Consultoría de gestión
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            {HERO.headline}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/75 mb-10 max-w-2xl leading-relaxed">
            {HERO.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={HERO.ctaPrimary.href}
              className={cn(buttonVariants({ size: "lg" }), "bg-accent text-accent-foreground hover:bg-accent/90 font-semibold gap-2")}
            >
              {HERO.ctaPrimary.label}
              <ArrowRight size={18} />
            </Link>
            <Link
              href={HERO.ctaSecondary.href}
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10")}
            >
              {HERO.ctaSecondary.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
