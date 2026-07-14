import { useProjects } from "./hooks/useProjects";
import ProjectCard from "./components/ProjectCard";
import type { Project } from "./types/Project";

function App() {
  const { projects, loading, error } = useProjects();

  if (loading) {
    return <div>Loading projects...</div>;
  } else if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>My Projects</h1>
      {projects.map((project: Project) => {
        return <ProjectCard key={project.id} project={project} />;
      })}
    </div>
  );
}

export default App;
