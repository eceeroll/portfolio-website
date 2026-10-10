import { m } from "framer-motion";
import { useProjects } from "@/hooks/useProjects";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { projectsContent } from "@/data/content";
import ProjectCardSkeleton from "@/components/ui/ProjectCardSkeleton";

const ProjectsSection = () => {
  const { projects, loading, error, retry } = useProjects();

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center px-6 py-28"
    >
      <m.div
        className="max-w-5xl mx-auto w-full"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionHeading
          number={projectsContent.section.headingNumber}
          title={projectsContent.section.title}
        />

        {loading && (
          <div className="grid md:grid-cols-2 gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <ProjectCardSkeleton key={index} />
            ))}
          </div>
        )}

        {!loading && error && (
          <div
            role="alert"
            className="flex flex-col items-center gap-4 rounded-xl border border-border bg-surface/60 px-6 py-12 text-center"
          >
            <p className="text-text">{error}</p>
            <button
              type="button"
              onClick={retry}
              className="rounded-lg bg-primary-hover px-5 py-2.5 text-sm font-medium text-white hover:bg-primary"
            >
              Try again
            </button>
          </div>
        )}

        {!loading && !error && projects.length === 0 && (
          <p className="rounded-xl border border-border bg-surface/60 px-6 py-12 text-center text-text-muted">
            {projectsContent.emptyText}
          </p>
        )}

        {!loading && !error && projects.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <m.div key={project.id} variants={fadeInUp}>
                <ProjectCard project={project} />
              </m.div>
            ))}
          </div>
        )}
      </m.div>
    </section>
  );
};

export default ProjectsSection;
