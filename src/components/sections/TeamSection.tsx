import Image from "next/image";
import SectionContainer from "@/components/layout/SectionContainer";
import { TEAM } from "@/data/siteContent";

export default function TeamSection() {
  return (
    <SectionContainer id="team" className="bg-secondary/40">
      <div className="text-center mb-12">
        <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
          Las personas detrás
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-primary">Nuestro equipo</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {TEAM.map((member) => (
          <div
            key={member.name}
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow"
          >
            <div className="relative w-full aspect-[3/4] bg-muted">
              <Image
                src={member.photo}
                alt={`Foto de ${member.name}`}
                fill
                className="object-cover"
                style={{ objectPosition: member.objectPosition ?? "center 50%" }}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-primary text-lg">{member.name}</h3>
              <p className="text-accent text-sm font-medium mb-3">{member.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
