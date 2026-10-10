import { m } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { timelineData } from "@/data/experience";
import { aboutContent } from "@/data/content";
import TimelineCard from "@/components/ui/TimelineCard";
import SectionHeading from "@/components/ui/SectionHeading";

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-28">
      <m.div
        className="max-w-5xl mx-auto w-full"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionHeading
          number={aboutContent.section.headingNumber}
          title={aboutContent.section.title}
        />

        <div className="grid md:grid-cols-5 gap-12">
          <m.div
            variants={fadeInUp}
            className="md:col-span-2 text-text-muted leading-relaxed space-y-4"
          >
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </m.div>

          <m.div
            variants={staggerContainer}
            className="md:col-span-3 flex flex-col gap-4"
          >
            {timelineData.map((item, i) => (
              <m.div key={i} variants={fadeInUp}>
                <TimelineCard item={item} />
              </m.div>
            ))}
          </m.div>
        </div>
      </m.div>
    </section>
  );
};

export default AboutSection;
