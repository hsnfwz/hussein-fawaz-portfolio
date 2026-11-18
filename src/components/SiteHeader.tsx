// Vertical padding keeps a 48px+ tap target; horizontal padding tightens on
// phones so all links fit at 320px. The underline sits on the inner span.
const navLinkClass =
  'block whitespace-nowrap px-2 py-4 text-sm lowercase sm:px-4 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent';

const links = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((word) => word[0])
    .join('');
}

export function SiteHeader({ name }: { name: string }) {
  return (
    <header className="fixed top-0 z-50 w-full bg-black">
      <nav aria-label="Primary" className="container-page flex items-center">
        {/* Initials on phones (the full name doesn't fit beside the links),
            full name from 640px. On phones the accessible name is
            "hf (Hussein Fawaz)": it starts with the visible text, so voice
            control ("click hf") works, and still gives the full name. */}
        <a href="#home" className={`${navLinkClass} -ml-2 font-bold sm:-ml-4`}>
          <span className="sm:hidden">
            <span className="link-underline">{initials(name)}</span>
            <span className="sr-only"> ({name})</span>
          </span>
          <span className="link-underline hidden sm:inline">{name}</span>
        </a>
        <ul className="-mr-2 ml-auto flex sm:-mr-4">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={navLinkClass}>
                <span className="link-underline">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
