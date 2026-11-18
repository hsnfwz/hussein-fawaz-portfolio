import { CardArrow, LinkCard, stretchedLinkClass } from '@/components/LinkCard';

type ContactCardProps = {
  label: string;
  /** Visible address, e.g. the email or profile handle. */
  value: string;
  href: string;
  /** Opens in a new tab (use for web links, not mailto:). */
  external?: boolean;
};

/** Contact method card; the whole card is the link. */
export function ContactCard({
  label,
  value,
  href,
  external = false,
}: ContactCardProps) {
  return (
    <LinkCard>
      <div className="flex gap-4">
        <div className="flex min-w-0 flex-col gap-2">
          <h3 className="md:text-heading text-2xl leading-tight">
            <a
              href={href}
              className={stretchedLinkClass}
              {...(external && {
                target: '_blank',
                rel: 'noopener noreferrer',
              })}
            >
              <span className="link-underline">{label}</span>
              <span className="sr-only">
                {`: ${value}`}
                {external && ' (opens in a new tab)'}
              </span>
            </a>
          </h3>
          <p className="text-accent [overflow-wrap:anywhere]">{value}</p>
        </div>
        <CardArrow />
      </div>
    </LinkCard>
  );
}
