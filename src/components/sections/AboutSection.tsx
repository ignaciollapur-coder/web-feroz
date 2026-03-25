import SectionContainer from "@/components/layout/SectionContainer";
import { ABOUT } from "@/data/siteContent";

export default function AboutSection() {
  const stats = [ABOUT.stat1, ABOUT.stat2, ABOUT.stat3];

  return (
    <SectionContainer id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Text */}
        <div>
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Quiénes somos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">{ABOUT.headline}</h2>
          <div className="flex flex-col gap-4">
            {ABOUT.body.map((paragraph, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center gap-1 p-6 rounded-xl bg-primary text-primary-foreground"
            >
              <span className="text-3xl md:text-4xl font-bold text-accent">{stat.value}</span>
              <span className="text-xs text-primary-foreground/70 leading-tight">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
