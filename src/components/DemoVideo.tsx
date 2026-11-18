'use client';

import { useEffect, useRef } from 'react';

type DemoVideoProps = {
  src: string;
  poster: string;
  label: string;
};

/**
 * Muted looping demo that only plays while on screen, and never autoplays
 * for users who prefer reduced motion (they can still use the controls).
 */
export function DemoVideo({ src, poster, label }: DemoVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotion.matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // play() rejects if the browser blocks autoplay; that's fine.
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      // Intrinsic size of the recordings (3024×1964 screen captures scaled to
      // 1280 wide) so the box has the right shape before the video loads.
      width={1280}
      height={832}
      className="rounded-media h-auto w-full bg-black"
      src={src}
      poster={poster}
      aria-label={label}
      preload="metadata"
      muted
      loop
      playsInline
      controls
    />
  );
}
