import { DemoVideo } from '@/components/DemoVideo';
import { CardArrow, LinkCard, stretchedLinkClass } from '@/components/LinkCard';
import type { Project } from '@/data/content';

function displayHost(url: string) {
  return new URL(url).hostname.replace(/^www\./, '');
}

/**
 * Project card; the whole card links to the live site. The video sits above
 * the stretched link (relative z-10) so its controls stay usable.
 */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <LinkCard>
      <div className="relative z-10">
        <DemoVideo
          src={project.video}
          poster={project.poster}
          label={`${project.name} demo video`}
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="md:text-heading text-2xl leading-tight">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={stretchedLinkClass}
              >
                <span className="link-underline">{project.name}</span>
                <span className="sr-only"> website (opens in a new tab)</span>
              </a>
            </h3>
            <p className="text-accent text-sm">{displayHost(project.url)}</p>
          </div>
          <CardArrow />
        </div>

        <p className="leading-relaxed text-neutral-300">
          {project.description}
        </p>
      </div>
    </LinkCard>
  );
}
