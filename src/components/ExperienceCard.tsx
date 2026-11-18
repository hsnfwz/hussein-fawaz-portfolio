import Image from 'next/image';
import { CardArrow, LinkCard, stretchedLinkClass } from '@/components/LinkCard';
import type { Role } from '@/data/content';
import { formatMonth } from '@/lib/date';

/** Role card; the whole card links to the company's LinkedIn page. */
export function ExperienceCard({ role }: { role: Role }) {
  return (
    <LinkCard>
      <div className="flex items-center gap-4">
        <Image
          src={role.logo}
          alt=""
          width={72}
          height={72}
          className="rounded-media size-16 shrink-0 md:size-[72px]"
        />
        <div className="flex flex-col gap-1">
          <h3 className="md:text-heading text-2xl leading-tight">
            <a
              href={role.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={stretchedLinkClass}
            >
              <span className="link-underline">{role.company}</span>
              <span className="sr-only"> on LinkedIn (opens in a new tab)</span>
            </a>
          </h3>
          <p className="text-accent">{role.title}</p>
        </div>
        <CardArrow />
      </div>

      <p className="text-sm text-neutral-400">
        {role.location}
        <span aria-hidden="true"> · </span>
        <span className="sr-only">, </span>
        <time dateTime={role.start}>{formatMonth(role.start)}</time>
        {' – '}
        {role.end ? (
          <time dateTime={role.end}>{formatMonth(role.end)}</time>
        ) : (
          'Present'
        )}
      </p>

      <p className="leading-relaxed text-neutral-300">{role.summary}</p>
    </LinkCard>
  );
}
