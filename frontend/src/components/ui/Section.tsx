import type { ReactNode } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import type { SectionContent } from "@/data/content";
import { cn } from "@/lib/cn";

interface SectionProps {
  id: string;
  content: SectionContent;
  children: ReactNode;
  className?: string;
}

const Section = ({ id, content, children, className }: SectionProps) => (
  <section
    id={id}
    aria-labelledby={`${id}-title`}
    className={cn("relative scroll-mt-24 py-24 md:py-32", className)}
  >
    <div
      aria-hidden="true"
      className="absolute inset-x-0 top-0 mx-auto h-px max-w-5xl bg-linear-to-r from-transparent via-border-strong/70 to-transparent"
    />
    <Container>
      <SectionHeading
        id={id}
        number={content.headingNumber}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      />
      {children}
    </Container>
  </section>
);

export default Section;
