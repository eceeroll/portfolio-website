import type { Project } from "../../types/Project";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-surface border border-border rounded-xl p-6 flex flex-col">
      <h3 className="text-text text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-text-muted mb-4 flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech: string) => (
          <span
            key={tech}
            className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-primary transition-colors text-sm"
          >
            GitHub →
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-primary transition-colors text-sm"
          >
            Live Demo →
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
