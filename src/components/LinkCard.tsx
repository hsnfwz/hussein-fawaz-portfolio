import type { ReactNode } from 'react';
import { SpotlightArticle } from '@/components/SpotlightArticle';

/**
 * Card shell whose whole surface is clickable via a "stretched link": put
 * `stretchedLinkClass` on the one <a> inside the card and its ::after covers
 * the card. There is still a single link (one tab stop, one screen-reader
 * announcement). The card also gets a cursor-following accent glow on hover.
 * Anything interactive inside the card that must stay usable
 * (e.g. video controls) needs `relative z-10` to sit above the overlay.
 */
export const stretchedLinkClass =
  'outline-none after:absolute after:inset-0 after:rounded-media';

export function LinkCard({ children }: { children: ReactNode }) {
  return (
    <SpotlightArticle className="group rounded-media hover:border-accent has-[a:focus-visible]:border-accent has-[a:focus-visible]:outline-accent relative flex h-full flex-col gap-6 border border-neutral-800 bg-neutral-950 p-6 transition-colors duration-300 has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 motion-reduce:transition-none md:p-8">
      {children}
    </SpotlightArticle>
  );
}

/** Decorative ↗ that lights up with the card; place it beside the card title. */
export function CardArrow() {
  return (
    <span
      aria-hidden="true"
      className="group-hover:text-accent group-has-[a:focus-visible]:text-accent ml-auto shrink-0 self-start text-xl text-neutral-600 transition-colors duration-300 motion-reduce:transition-none"
    >
      ↗
    </span>
  );
}
