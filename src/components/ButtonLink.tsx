import type { ComponentProps } from 'react';

type ButtonLinkProps = ComponentProps<'a'> & {
  variant?: 'primary' | 'secondary';
};

const base =
  'inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-bold lowercase transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none';

const variants = {
  // Accent fill; black text on the accent is ~11:1 contrast.
  primary: 'bg-accent text-black hover:bg-white',
  secondary:
    'border border-neutral-700 text-white hover:border-accent hover:text-accent',
};

/** Call-to-action link styled as a button. */
export function ButtonLink({
  variant = 'primary',
  className = '',
  ...props
}: ButtonLinkProps) {
  return (
    <a {...props} className={`${base} ${variants[variant]} ${className}`} />
  );
}
