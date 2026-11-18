import type { ReactNode } from 'react';
import { Lead } from '@/components/Lead';

type SectionProps = {
  id: string;
  title: string;
  /** Optional intro paragraph shown under the heading. */
  intro?: string;
  children: ReactNode;
};

/**
 * Content section with the page's shared vertical rhythm:
 * 96px (128px desktop) top/bottom padding, 48px (64px desktop) between the
 * heading block and the content, 24px between heading and intro.
 */
export function Section({ id, title, intro, children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="scroll-mt-14 py-24 md:py-32"
    >
      <div className="container-page flex flex-col items-center gap-12 md:gap-16">
        <header className="flex flex-col items-center gap-6">
          <h2
            id={headingId}
            className="text-title text-cinematic text-center lowercase"
          >
            {title}
          </h2>
          {intro && <Lead>{intro}</Lead>}
        </header>
        {children}
      </div>
    </section>
  );
}
