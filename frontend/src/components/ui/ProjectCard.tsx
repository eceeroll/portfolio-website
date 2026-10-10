import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import type { Project } from "@/types/Project";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

const MAX_BADGES = 6;

const initials = (title: string) =>
  title
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join("");

const ProjectPreview = ({ project }: { project: Project }) => {
  const [failed, setFailed] = useState(false);

  if (project.imageUrl && !failed) {
    return (
      <img
        src={project.imageUrl}
        alt={`Screenshot of ${project.title}`}
        loading="lazy"
        decoding="async"
        width={1280}
        height={800}
        onError={() => setFailed(true)}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/spot:scale-[1.04]"
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={`${project.title} placeholder artwork`}
      className="relative flex h-full w-full items-center justify-center bg-[radial-gradient(80%_70%_at_30%_20%,rgb(139_92_246/0.35),transparent_70%),linear-gradient(135deg,var(--color-surface-raised),var(--color-background))]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(circle at 50% 50%, #000, transparent 75%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 50%, #000, transparent 75%)",
        }}
      />
      <span className="text-gradient-primary relative font-display text-6xl font-semibold tracking-tight">
        {initials(project.title)}
      </span>
    </div>
  );
};

const ProjectCard = ({ project, featured = false }: ProjectCardProps) => {
  const year = new Date(project.createdAt).getFullYear();
  const badges = project.techStack.slice(0, MAX_BADGES);
  const hiddenCount = project.techStack.length - badges.length;

  return (
    <SpotlightCard
      className="h-full transition-transform duration-500 hover:-translate-y-1"
      contentClassName={cn("flex flex-col", featured && "md:grid md:grid-cols-2")}
    >
      <div
        className={cn(
          "relative aspect-[16/10] overflow-hidden border-b border-border bg-background",
          featured && "md:aspect-auto md:min-h-80 md:border-r md:border-b-0",
        )}
      >
        <ProjectPreview project={project} />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-surface/70 via-transparent to-transparent"
        />
        {!Number.isNaN(year) && (
          <span className="glass absolute top-3 left-3 rounded-full border border-border-strong/70 px-2.5 py-0.5 font-mono text-[0.7rem] text-text">
            {year}
          </span>
        )}
      </div>

      <div className={cn("flex flex-1 flex-col p-6", featured && "md:justify-center md:p-9")}>
        <h3
          className={cn(
            "font-display font-semibold tracking-tight text-white",
            featured ? "text-2xl md:text-3xl" : "text-xl",
          )}
        >
          {project.title}
        </h3>
        <p
          className={cn(
            "mt-3 text-sm leading-relaxed text-text-muted",
            featured ? "md:text-base" : "line-clamp-3",
          )}
        >
          {project.description}
        </p>

        {badges.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
            {badges.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-primary/20 bg-primary/10 px-2.5 py-1 font-mono text-[0.7rem] text-primary-pale"
              >
                {tech}
              </li>
            ))}
            {hiddenCount > 0 && (
              <li className="rounded-md border border-border px-2.5 py-1 font-mono text-[0.7rem] text-text-muted">
                +{hiddenCount}
              </li>
            )}
          </ul>
        )}

        {(project.liveUrl || project.githubUrl) && (
          <div className="mt-auto flex flex-wrap gap-2 pt-6">
            {project.liveUrl && (
              <ButtonLink
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                aria-label={`Open live demo of ${project.title} (opens in a new tab)`}
                rightIcon={
                  <ArrowUpRight
                    size={15}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  />
                }
              >
                Live demo
              </ButtonLink>
            )}
            {project.githubUrl && (
              <ButtonLink
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                variant="secondary"
                aria-label={`View source code of ${project.title} on GitHub (opens in a new tab)`}
                leftIcon={<FaGithub size={15} aria-hidden="true" />}
              >
                Source code
              </ButtonLink>
            )}
          </div>
        )}
      </div>
    </SpotlightCard>
  );
};

export default ProjectCard;
