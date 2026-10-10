const Bar = ({ className }: { className: string }) => (
  <div className={`relative overflow-hidden rounded-md bg-white/[0.06] ${className}`}>
    <div className="absolute inset-0 animate-shimmer bg-linear-to-r from-transparent via-white/[0.07] to-transparent motion-reduce:animate-none" />
  </div>
);

const ProjectCardSkeleton = () => (
  <div
    aria-hidden="true"
    className="overflow-hidden rounded-2xl border border-border bg-surface/70"
  >
    <Bar className="aspect-[16/10] rounded-none" />
    <div className="space-y-4 p-6">
      <Bar className="h-6 w-1/2" />
      <div className="space-y-2">
        <Bar className="h-3.5 w-full" />
        <Bar className="h-3.5 w-4/5" />
      </div>
      <div className="flex gap-2 pt-1">
        <Bar className="h-6 w-16" />
        <Bar className="h-6 w-20" />
        <Bar className="h-6 w-14" />
      </div>
      <div className="flex gap-2 pt-3">
        <Bar className="h-9 w-28 rounded-xl" />
        <Bar className="h-9 w-32 rounded-xl" />
      </div>
    </div>
  </div>
);

export default ProjectCardSkeleton;
