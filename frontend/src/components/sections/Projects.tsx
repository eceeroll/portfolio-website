import { useMemo, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { FolderOpen, Loader2, RotateCw, ServerCrash } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { useProjects } from "@/hooks/useProjects";
import { projectsContent } from "@/data/content";
import { profileData } from "@/data/profile";
import Section from "@/components/ui/Section";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectCardSkeleton from "@/components/ui/ProjectCardSkeleton";
import { Button, ButtonLink } from "@/components/ui/Button";
import { EASE_OUT_EXPO } from "@/lib/animations";
import { cn } from "@/lib/cn";
import type { Project } from "@/types/Project";

const MAX_FILTERS = 8;

const getTopTechnologies = (projects: Project[]) => {
  const counts = new Map<string, number>();
  projects.forEach((project) =>
    project.techStack.forEach((tech) =>
      counts.set(tech, (counts.get(tech) ?? 0) + 1),
    ),
  );
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, MAX_FILTERS)
    .map(([tech]) => tech);
};

const StateCard = ({
  icon: Icon,
  title,
  children,
  role,
}: {
  icon: typeof FolderOpen;
  title?: string;
  children: React.ReactNode;
  role?: "alert";
}) => (
  <div
    role={role}
    className="flex flex-col items-center rounded-2xl border border-dashed border-border-strong/70 bg-surface/40 px-6 py-16 text-center"
  >
    <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary-soft">
      <Icon size={24} aria-hidden="true" />
    </span>
    {title && <p className="mb-2 font-display text-lg font-semibold text-white">{title}</p>}
    {children}
  </div>
);

const ProjectsSection = () => {
  const { projects, loading, isSlow, error, retry } = useProjects();
  const [activeTech, setActiveTech] = useState<string | null>(null);

  const filters = useMemo(() => getTopTechnologies(projects), [projects]);
  const showFilters = projects.length > 2 && filters.length > 1;
  const visibleProjects =
    showFilters && activeTech
      ? projects.filter((project) => project.techStack.includes(activeTech))
      : projects;
  const featureFirst = visibleProjects.length % 2 === 1;

  return (
    <Section id="projects" content={projectsContent.section}>
      {loading && (
        <div aria-busy="true">
          <div className="grid gap-6 md:grid-cols-2">
            {Array.from({ length: 2 }).map((_, index) => (
              <ProjectCardSkeleton key={index} />
            ))}
          </div>
          <p
            aria-live="polite"
            className="mt-6 flex items-center justify-center gap-2 text-sm text-text-muted"
          >
            <Loader2 size={16} className="animate-spin text-primary-soft" aria-hidden="true" />
            {isSlow ? projectsContent.slowLoadingText : projectsContent.loadingText}
          </p>
        </div>
      )}

      {!loading && error && (
        <StateCard icon={ServerCrash} title={projectsContent.errorTitle} role="alert">
          <p className="mb-6 max-w-md text-sm text-text-muted">{error}</p>
          <Button
            onClick={retry}
            leftIcon={<RotateCw size={16} aria-hidden="true" />}
          >
            {projectsContent.retryLabel}
          </Button>
        </StateCard>
      )}

      {!loading && !error && projects.length === 0 && (
        <StateCard icon={FolderOpen}>
          <p className="mb-6 max-w-md text-text-muted">{projectsContent.emptyText}</p>
          <ButtonLink
            href={profileData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            leftIcon={<FaGithub size={16} aria-hidden="true" />}
          >
            Browse my GitHub
          </ButtonLink>
        </StateCard>
      )}

      {!loading && !error && projects.length > 0 && (
        <>
          {showFilters && (
            <div
              role="group"
              aria-label={projectsContent.filterLabel}
              className="mb-8 flex flex-wrap gap-2"
            >
              {[null, ...filters].map((tech) => {
                const isActive = activeTech === tech;
                return (
                  <button
                    key={tech ?? "all"}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveTech(tech)}
                    className={cn(
                      "relative rounded-full border px-4 py-1.5 text-sm transition-colors duration-200",
                      isActive
                        ? "border-primary/50 text-white"
                        : "border-border text-text-muted hover:border-border-strong hover:text-white",
                    )}
                  >
                    {isActive && (
                      <m.span
                        layoutId="project-filter"
                        aria-hidden="true"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                        className="absolute inset-0 rounded-full bg-primary/20"
                      />
                    )}
                    <span className="relative">{tech ?? projectsContent.filterAllLabel}</span>
                  </button>
                );
              })}
            </div>
          )}

          <m.ul layout className="grid gap-6 md:grid-cols-2">
            <AnimatePresence mode="popLayout" initial={false}>
              {visibleProjects.map((project, index) => (
                <m.li
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, ease: EASE_OUT_EXPO, delay: (index % 2) * 0.08 }}
                  className={cn(featureFirst && index === 0 && "md:col-span-2")}
                >
                  <ProjectCard project={project} featured={featureFirst && index === 0} />
                </m.li>
              ))}
            </AnimatePresence>
          </m.ul>
        </>
      )}
    </Section>
  );
};

export default ProjectsSection;
