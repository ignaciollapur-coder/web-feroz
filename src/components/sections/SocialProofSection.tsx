import Image from "next/image";
import SectionContainer from "@/components/layout/SectionContainer";
import { CLIENT_LOGOS } from "@/data/siteContent";

export default function SocialProofSection() {
  return (
    <SectionContainer className="py-14 md:py-16">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-10">
        Empresas que confiaron en nosotros
      </p>
      <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
        {CLIENT_LOGOS.map((client) => (
          <div key={client.name} className="relative h-8 w-28 opacity-50 hover:opacity-80 transition-opacity grayscale">
            <Image
              src={client.src}
              alt={client.name}
              fill
              className="object-contain"
              sizes="112px"
            />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
