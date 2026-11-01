import type { ProjectVideo } from "@/data/projects";

export function ProjectVideoPlayer({ video, title }: { video: ProjectVideo; title: string }) {
  return (
    <section aria-labelledby="walkthrough-heading" className="mt-6 flex flex-col gap-4">
      <h2 id="walkthrough-heading" className="font-display text-3xl font-light tracking-tight">
        Walkthrough
      </h2>
      <figure className="flex flex-col gap-3">
        <div className="overflow-hidden rounded-card border border-line bg-surface-2">
          {/* Silent screen recording; controls let visitors play it. */}
          <video
            controls
            playsInline
            preload="none"
            poster={video.poster}
            width={video.width}
            height={video.height}
            aria-label={`${title} walkthrough video`}
            className="block h-auto w-full"
          >
            <source src={video.src} type="video/mp4" />
            Your browser does not support embedded video.
          </video>
        </div>
        <figcaption className="text-sm text-muted">{video.caption}</figcaption>
      </figure>
    </section>
  );
}
