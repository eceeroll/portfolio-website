import { useProjects } from "../../hooks/useProjects";
import ProjectCard from "../ui/ProjectCard";

const ProjectsSection = () => {
  const { projects, loading, error } = useProjects();

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center px-6 py-20"
    >
      <div className="max-w-5xl mx-auto w-full">
        <p className="text-primary font-mono text-sm mb-2">02. Projects</p>
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-8">
          What I've Built
        </h2>

        {loading && <p className="text-text-muted">Loading projects...</p>}
        {error && <p className="text-red-400">Error: {error}</p>}

        {!loading && !error && (
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
