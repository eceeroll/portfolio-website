const ProjectCardSkeleton = () => {
  return (
    <div className="rounded-2xl overflow-hidden border border-border bg-surface animate-pulse">
      <div className="h-64 bg-surface/60" />

      <div className="p-6 space-y-4">
        <div className="h-7 w-1/2 rounded bg-surface/60" />

        <div className="space-y-2">
          <div className="h-4 rounded bg-surface/60" />
          <div className="h-4 w-3/4 rounded bg-surface/60" />
        </div>

        <div className="flex gap-2">
          <div className="h-6 w-16 rounded bg-surface/60" />
          <div className="h-6 w-16 rounded bg-surface/60" />
          <div className="h-6 w-16 rounded bg-surface/60" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCardSkeleton;
