import { cn } from "@/lib/utils";

interface SectionContainerProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export default function SectionContainer({ id, className, children }: SectionContainerProps) {
  return (
    <section id={id} className={cn("w-full py-20 md:py-28", className)}>
      <div className="container mx-auto max-w-6xl px-6 md:px-10">
        {children}
      </div>
    </section>
  );
}
