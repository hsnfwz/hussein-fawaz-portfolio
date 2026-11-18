'use client';

import { useRef, type PointerEvent, type ReactNode } from 'react';

type SpotlightArticleProps = {
  className: string;
  children: ReactNode;
};

/**
 * <article> with a soft accent glow that follows the mouse while hovering.
 * The cursor position is written to CSS variables (no React re-renders);
 * touch and pen input are ignored. The glow sits behind the content
 * (-z-10 inside an isolated stacking context).
 */
export function SpotlightArticle({
  className,
  children,
}: SpotlightArticleProps) {
  const ref = useRef<HTMLElement>(null);

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (event.pointerType !== 'mouse' || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--spot-x', `${event.clientX - rect.left}px`);
    ref.current.style.setProperty('--spot-y', `${event.clientY - rect.top}px`);
  }

  return (
    <article
      ref={ref}
      onPointerMove={handlePointerMove}
      className={`isolate ${className}`}
    >
      <span
        aria-hidden="true"
        className="rounded-media pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none"
        style={{
          background:
            'radial-gradient(420px circle at var(--spot-x, 50%) var(--spot-y, 50%), color-mix(in oklab, var(--color-accent) 14%, transparent), transparent 70%)',
        }}
      />
      {children}
    </article>
  );
}
