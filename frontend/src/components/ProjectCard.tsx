import type { Project } from "../types/Project";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p>{project.techStack.join(", ")}</p>
      {project.githubUrl && <a href={project.githubUrl}>GitHub</a>}
      {project.liveUrl && <a href={project.liveUrl}>Live Demo</a>}
    </div>
  );
};

export default ProjectCard;
