import { motion } from "framer-motion";
import type { Project } from "../../types/Project";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group relative bg-surface border border-border rounded-xl p-6 flex flex-col overflow-hidden hover:border-primary/50"
    >
      <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-primary to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />

      <h3 className="text-text text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-text-muted mb-5 flex-1 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs font-mono text-primary bg-primary/10 px-2.5 py-1 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-5 pt-4 border-t border-border">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-primary transition-colors text-sm font-medium"
          >
            GitHub →
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-primary transition-colors text-sm font-medium"
          >
            Live Demo →
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
