import type { ReactNode } from 'react';

/** Muted introductory paragraph, used for the hero tagline and section intros. */
export function Lead({ children }: { children: ReactNode }) {
  return (
    <p className="font-heading text-lead mx-auto max-w-3xl text-center text-neutral-400">
      {children}
    </p>
  );
}
