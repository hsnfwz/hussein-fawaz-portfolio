import { ButtonLink } from '@/components/ButtonLink';
import { ContactCard } from '@/components/ContactCard';
import { ExperienceCard } from '@/components/ExperienceCard';
import { Lead } from '@/components/Lead';
import { ProjectCard } from '@/components/ProjectCard';
import { Section } from '@/components/Section';
import { SiteHeader } from '@/components/SiteHeader';
import {
  experience,
  experienceIntro,
  projects,
  projectsIntro,
  contactIntro,
  site,
} from '@/data/content';
import { siteUrl } from '@/lib/site-url';

// Newest role first, regardless of the order roles are written in.
// ISO YYYY-MM strings sort correctly as plain strings.
const experienceNewestFirst = [...experience].sort((a, b) =>
  b.start.localeCompare(a.start)
);

// Structured data so search engines understand who the site is about.
const currentRole = experience.find((role) => !role.end);
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  jobTitle: site.title,
  url: siteUrl.href,
  email: `mailto:${site.email}`,
  sameAs: [site.linkedin],
  ...(currentRole && {
    worksFor: { '@type': 'Organization', name: currentRole.company },
  }),
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Vancouver',
    addressRegion: 'BC',
    addressCountry: 'CA',
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // Escape '<' so the JSON can never close the script tag early.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <a
        href="#main"
        className="sr-only z-[60] bg-white p-4 text-black focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
      >
        Skip to content
      </a>
      <SiteHeader name={site.name} />

      <main id="main">
        <section
          id="home"
          aria-label="Introduction"
          className="flex min-h-svh items-center"
        >
          <div className="container-page flex flex-col gap-8">
            <h1 className="text-display text-center lowercase">
              {site.name}
              <br />
              <span className="text-shimmer">{site.title}</span>
            </h1>
            <Lead>{site.tagline}</Lead>
            <div className="flex flex-wrap justify-center gap-4">
              <ButtonLink href="#projects">View projects</ButtonLink>
              <ButtonLink href="#contact" variant="secondary">
                Get in touch
              </ButtonLink>
            </div>
          </div>
        </section>

        <Section id="experience" title="Experience" intro={experienceIntro}>
          <ul className="font-heading grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {experienceNewestFirst.map((role) => (
              <li
                key={`${role.company}-${role.start}`}
                className="reveal-on-scroll"
              >
                <ExperienceCard role={role} />
              </li>
            ))}
          </ul>
        </Section>

        <Section id="projects" title="Projects" intro={projectsIntro}>
          <ul className="font-heading grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {projects.map((project) => (
              <li key={project.name} className="reveal-on-scroll">
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contact" title="Contact" intro={contactIntro}>
          <ul className="font-heading grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            <li className="reveal-on-scroll">
              <ContactCard
                label="Email"
                value={site.email}
                href={`mailto:${site.email}`}
              />
            </li>
            <li className="reveal-on-scroll">
              <ContactCard
                label="LinkedIn"
                value="/in/hsnfwz"
                href={site.linkedin}
                external
              />
            </li>
          </ul>
        </Section>
      </main>

      <footer className="border-t border-neutral-800">
        <p className="container-page font-heading py-8 text-center text-xs lowercase">
          &copy; {new Date().getFullYear()} {site.name}
        </p>
      </footer>
    </>
  );
}
