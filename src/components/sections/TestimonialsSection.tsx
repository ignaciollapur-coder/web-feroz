import SectionContainer from "@/components/layout/SectionContainer";
import { TESTIMONIALS } from "@/data/siteContent";
import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <SectionContainer id="testimonials" className="bg-primary text-primary-foreground">
      <div className="text-center mb-12">
        <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
          Lo que dicen de nosotros
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">Testimonios</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.author}
            className="bg-primary-foreground/10 rounded-xl p-8 flex flex-col gap-5 border border-primary-foreground/10"
          >
            <Quote size={28} className="text-accent shrink-0" aria-hidden />
            <p className="text-primary-foreground/85 leading-relaxed text-sm italic flex-1">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="border-t border-primary-foreground/20 pt-4">
              <p className="font-semibold text-primary-foreground">{t.author}</p>
              <p className="text-xs text-primary-foreground/60">
                {t.role} — {t.company}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
