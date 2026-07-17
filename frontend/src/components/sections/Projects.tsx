import { motion } from "framer-motion";
import { useProjects } from "../../hooks/useProjects";
import ProjectCard from "../ui/ProjectCard";
import SectionHeading from "../ui/SectionHeading";
import { fadeInUp, staggerContainer } from "../../lib/animations";
import { projectsContent } from "../../data/content";

const ProjectsSection = () => {
  const { projects, loading, error } = useProjects();

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center px-6 py-28"
    >
      <motion.div
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
          <p className="text-text-muted font-mono text-sm">
            {projectsContent.loadingText}
          </p>
        )}
        {error && (
          <p className="text-red-400 font-mono text-sm">Error: {error}</p>
        )}

        {!loading && !error && (
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <motion.div key={project.id} variants={fadeInUp}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
