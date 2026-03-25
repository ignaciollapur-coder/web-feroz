import { BarChart3, Settings2, Users2, TrendingUp, type LucideIcon } from "lucide-react";
import SectionContainer from "@/components/layout/SectionContainer";
import { SERVICES } from "@/data/siteContent";

const ICON_MAP: Record<string, LucideIcon> = {
  BarChart3,
  Settings2,
  Users2,
  TrendingUp,
};

export default function ServicesSection() {
  return (
    <SectionContainer id="services" className="bg-secondary/40">
      <div className="text-center mb-12">
        <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
          Lo que hacemos
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-primary">Nuestros servicios</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left — video placeholder */}
        <div className="w-full aspect-video rounded-xl bg-primary/10 border-2 border-dashed border-primary/20 flex items-center justify-center">
          <p className="text-sm text-muted-foreground">Video explicativo</p>
        </div>

        {/* Right — service cards stacked */}
        <div className="flex flex-col gap-6">
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon] ?? BarChart3;
            return (
              <div
                key={service.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold text-primary text-lg leading-snug">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
