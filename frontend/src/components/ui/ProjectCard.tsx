import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa6";
import type { Project } from "../../types/Project";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group relative bg-surface border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-shadow"
    >
      <div className="relative aspect-video overflow-hidden bg-background">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-surface to-background">
            <Code2 className="text-text-muted/30" size={48} />
          </div>
        )}

        <div className="absolute inset-0 bg-linear-to-t from-surface via-transparent to-transparent opacity-60" />

        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-background/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 bg-surface border border-border hover:border-primary text-text px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              <Github size={16} />
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-text text-lg font-semibold mb-2">
          {project.title}
        </h3>
        <p className="text-text-muted text-sm mb-4 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono text-primary bg-primary/10 px-2.5 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
