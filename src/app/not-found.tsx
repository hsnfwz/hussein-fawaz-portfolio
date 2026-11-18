import type { Metadata } from 'next';
import { ButtonLink } from '@/components/ButtonLink';
import { Lead } from '@/components/Lead';

export const metadata: Metadata = {
  title: 'Page not found',
};

/** Shown for any URL that doesn't exist. */
export default function NotFound() {
  return (
    <main className="flex min-h-svh items-center">
      <div className="container-page flex flex-col items-center gap-8 text-center">
        <p className="text-accent text-cinematic text-sm">404</p>
        <h1 className="text-title text-cinematic lowercase">lost the plot</h1>
        <Lead>This page doesn&apos;t exist, or it has moved.</Lead>
        <ButtonLink href="/">Back to home</ButtonLink>
      </div>
    </main>
  );
}
