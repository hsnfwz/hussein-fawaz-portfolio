'use client';

import { Menu } from 'lucide-react';
import useModalContext from '@/hooks/useModalContext';
import useIntersection from '@/hooks/useIntersection';
import Modal from '@/components/Modal';
import Button from '@/components/Button';
import Anchor from '@/components/Anchor';
import HorizontalScrollGrid from '@/components/HorizontalScrollGrid';
import HorizontalScrollCard from '@/components/HorizontalScrollCard';
import { useEffect } from 'react';

export default function Home() {
  const { modal, setModal } = useModalContext();
  const [elementRef, intersectingElement] = useIntersection();
  useEffect(() => console.log(elementRef), [intersectingElement]);

  // todo: animate your name to transition between first and last
  // todo: fix chevron button movement scroll for mobile

  const freelanceItems = [
    {
      website: 'https://www.noureddinefeathers.com/',
      githubClient: 'https://github.com/hsnfwz/noureddine-feathers',
      githubServer: null,
      mobileImage: './images/noureddinefeathers-mobile.png',
      desktopImage: './images/noureddinefeathers.png',
      title: 'Noureddine Feathers',
      description:
        'Shop authentic ostrich feather dusters, eggshells, and more.',
      tags: [
        'HTML',
        'CSS',
        'Tailwind CSS',
        'JavaScript',
        'Svelte',
        'Sveltekit',
        'Supabase',
        'Vercel',
        'Stripe API',
      ],
    },
    {
      website: 'https://www.marksbarbershop.ca/',
      githubClient: 'https://github.com/hsnfwz/marks-barbershop',
      githubServer: null,
      mobileImage: './images/marksbarbershop-mobile.png',
      desktopImage: './images/marksbarbershop.png',
      title: "Mark's Barbershop",
      description:
        'Book your next fresh haircut with local professional barber Mark.',
      tags: [
        'HTML',
        'CSS',
        'Tailwind CSS',
        'JavaScript',
        'Vercel',
        'Squire API',
      ],
    },
  ];

  const projectItems = [
    {
      website: 'https://filmfest-2025.vercel.app/',
      githubClient: 'https://github.com/hsnfwz/movies',
      githubServer: null,
      mobileImage: './images/filmfest-mobile.png',
      desktopImage: './images/filmfest.png',
      title: 'FilmFest',
      description: 'Track and rate movies and create collaborative lists with friends and family!',
      tags: [
        'HTML',
        'CSS',
        'Tailwind CSS',
        'JavaScript',
        'React',
        'Next.js',
        'SQL',
        'Neon',
        'Resend',
        'React Email',
        'Vercel',
        'Auth0',
        'TMDB API',
      ],
    },
    {
      website: 'https://sakina-one.vercel.app/',
      githubClient: 'https://github.com/hsnfwz/sakina',
      githubServer: null,
      mobileImage: './images/sakina-mobile.png',
      desktopImage: './images/sakina.png',
      title: 'Sakina',
      description: 'Video streaming and discussions platform.',
      tags: [
        'HTML',
        'CSS',
        'Tailwind CSS',
        'JavaScript',
        'React',
        'Supabase',
        'Vercel',
        'Vimeo API',
      ],
      isWorkInProgress: true,
    },
    {
      website: 'https://cellystats.vercel.app/',
      githubClient: 'https://github.com/hsnfwz/cellystats',
      githubServer: null,
      mobileImage: './images/cellystats-mobile.png',
      desktopImage: './images/cellystats.png',
      title: 'CellyStats',
      description:
        'Search, view, and compare National Hockey League (NHL) player statistics with visual breakdowns.',
      tags: [
        'HTML',
        'CSS',
        'Tailwind CSS',
        'JavaScript',
        'React',
        'Next.js',
        'Vercel',
        'Tremor',
        'NHL API',
      ],
    },
    {
      website: 'https://bc-transit-one.vercel.app/',
      githubClient: 'https://github.com/hsnfwz/bc-transit',
      githubServer: null,
      mobileImage: './images/bctransit-mobile.png',
      desktopImage: './images/bctransit.png',
      title: 'BC Transit',
      description:
        'View real-time transit routes and vehicles in British Columbia.',
      tags: [
        'HTML',
        'CSS',
        'Tailwind CSS',
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'Vercel',
        'Leaflet',
        'TransLink API',
      ],
    },
    {
      website: 'https://piggysave.onrender.com/',
      githubClient: 'https://github.com/hsnfwz/piggysave-client',
      githubServer: 'https://github.com/hsnfwz/piggysave-server',
      mobileImage: './images/piggysave-mobile.png',
      desktopImage: './images/piggysave.png',
      title: 'PiggySave',
      description:
        'Track and calculate your income and expenses and view trends with visual breakdowns.',
      tags: [
        'HTML',
        'CSS',
        'Tailwind CSS',
        'JavaScript',
        'TypeScript',
        'React',
        'Node.js',
        'Express.js',
        'SQL',
        'Neon',
        'Render',
        'Auth0',
        'Recharts',
      ],
    },
    {
      website: 'https://chart-maker-five.vercel.app/',
      githubClient: 'https://github.com/hsnfwz/chart-maker',
      githubServer: null,
      mobileImage: './images/chartmaker-mobile.png',
      desktopImage: './images/chartmaker.png',
      title: 'Chart Maker',
      description:
        'Create bar, line, and area charts and export as PNG or JPEG.',
      tags: [
        'HTML',
        'CSS',
        'Tailwind CSS',
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'Vercel',
        'Recharts',
      ],
      isWorkInProgress: true,
    },
    {
      website: 'https://www.husseinfawaz.ca/',
      githubClient: 'https://github.com/hsnfwz/hussein-fawaz-portfolio',
      githubServer: null,
      mobileImage: './images/husseinfawazportfolio-mobile.png',
      desktopImage: './images/husseinfawazportfolio.png',
      title: 'Hussein Fawaz Portfolio',
      description: 'Official portfolio of Hussein Fawaz.',
      tags: [
        'HTML',
        'CSS',
        'Tailwind CSS',
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'Vercel',
      ],
    },
    {
      website: 'https://www.zeinabfawaz.ca/',
      githubClient: 'https://github.com/hsnfwz/zeinab-fawaz-portfolio',
      githubServer: null,
      mobileImage: './images/zeinabfawazportfolio-mobile.png',
      desktopImage: './images/zeinabfawazportfolio.png',
      title: 'Zeinab Fawaz Portfolio',
      description: 'Official portfolio of Zeinab Fawaz.',
      tags: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'Vercel'],
    },
  ];

  return (
    <main className="flex flex-col gap-16 overflow-auto">
      <Modal show={modal && modal.type === 'NAV_MODAL'}>
        <Anchor handleClick={() => setModal(null)} to="#home">
          home
        </Anchor>
        <Anchor handleClick={() => setModal(null)} to="#about">
          about
        </Anchor>
        <Anchor handleClick={() => setModal(null)} to="#experience">
          experience
        </Anchor>
        <Anchor handleClick={() => setModal(null)} to="#contact">
          contact
        </Anchor>
      </Modal>
      <Modal show={modal && modal.type === 'ITEM_MODAL' && modal.item}>
        <h2 className="w-full self-center text-center text-4xl uppercase">
          {modal && modal.item && modal.item.title}
        </h2>
        <p className="text-center">{modal && modal.item && modal.item.description}</p>
        <div className="flex w-full flex-wrap justify-center gap-1">
          {modal &&
            modal.item &&
            modal.item.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="rounded bg-neutral-100 px-2 py-1 text-black"
              >
                {tag}
              </span>
            ))}
        </div>
      </Modal>
      <nav className="fixed top-4 right-4 z-40">
        <Button
          handleClick={() => setModal({ type: 'NAV_MODAL' })}
          isRound={true}
        >
          <Menu />
        </Button>
      </nav>
      <section
        id="#home"
        className="relative h-full min-h-screen w-full overflow-hidden"
      >
        <a
          className="group absolute top-1/2 left-1/2 block w-full max-w-[200px] -translate-x-1/2 -translate-y-1/2 rotate-6 border border-transparent transition-all duration-300 hover:rotate-0 focus:border-black focus:ring-0 focus:outline-none md:max-w-[400px]"
          href="https://www.linkedin.com/in/hsnfwz/"
          target="_blank"
        >
          <img src="./images/headshot.png" className="w-full shadow" />
          <div className="absolute -top-2 -left-2 -z-10 h-4 w-4 border-t border-l border-black transition-all duration-300 group-hover:h-full group-hover:w-full"></div>
          <div className="absolute -top-2 -right-2 -z-10 h-4 w-4 border-t border-r border-black transition-all duration-300 group-hover:h-full group-hover:w-full"></div>
          <div className="absolute -bottom-2 -left-2 -z-10 h-4 w-4 border-b border-l border-black transition-all duration-300 group-hover:h-full group-hover:w-full"></div>
          <div className="absolute -right-2 -bottom-2 -z-10 h-4 w-4 border-r border-b border-black transition-all duration-300 group-hover:h-full group-hover:w-full"></div>
        </a>
        <h1 className="absolute top-0 left-1/2 w-full -translate-x-1/2 border-b border-black bg-neutral-100 p-4 text-center text-4xl text-black uppercase transition-all duration-300 md:text-7xl">
          Hussein
        </h1>
        <h1 className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 border-t border-black bg-neutral-100 p-4 text-center text-4xl text-black uppercase transition-all duration-300 md:text-7xl">
          Hussein
        </h1>
        <h1 className="app_vertical-text absolute top-0 left-0 h-full border-r border-black bg-neutral-100 p-4 text-center text-4xl text-black uppercase transition-all duration-300 md:text-7xl">
          Fawaz
        </h1>
        <h1 className="app_vertical-text absolute top-0 right-0 h-full border-l border-black bg-neutral-100 p-4 text-center text-4xl text-black uppercase transition-all duration-300 md:text-7xl">
          Fawaz
        </h1>
      </section>
      <section
        id="about"
        className="relative top-0 left-0 flex w-full flex-col gap-16"
      >
        <h3 className="sticky top-0 z-30 w-full bg-neutral-100 p-4 text-center uppercase">
          About
        </h3>
        <div className="mx-auto flex max-w-[1024px] flex-col gap-16 px-4">
          <div className="flex flex-col gap-8 md:flex-row">
            <h2 className="w-full self-center text-center text-4xl uppercase">
              3+ Years Professional Experience
            </h2>
            <p className="w-full">
              I worked at a Vancouver-based startup company called Switchboard
              and helped develop their software-as-a-service (SaaS), which
              empowers companies in the commercial transportation industry
              across North America to manage their fleets while staying
              compliant with government regulations. I also worked as a
              self-employed freelancer to deliver tailored websites to local
              businesses and help excel their digital presence.
            </p>
          </div>
          <div className="flex flex-col gap-8 md:flex-row">
            <h2 className="w-full self-center text-center text-4xl uppercase">
              Full-Stack Web Developer
            </h2>
            <p className="w-full">
              I have a sound understanding of both front-end and back-end
              software development, always learning to improve my knowledge and
              skills through professional opportunities and personal projects to
              deliver exceptional user experiences. I specialize in Figma, HTML,
              CSS, Tailwind CSS, JavaScript, TypeScript, React, Next.js,
              Node.js, Express.js, Supabase, and Vercel.
            </p>
          </div>
          <div className="flex flex-col gap-8 md:flex-row">
            <h2 className="w-full self-center text-center text-4xl uppercase">
              Outgoing Personality
            </h2>
            <p className="w-full">
              I love to spend my free time volunteering with my community,
              watching hockey and cheering on the Vancouver Canucks, playing
              volleyball and paddle-boarding with my friends in the summers,
              weight-lifting at my local gym, keeping up with blockbuster movies
              and binge-worthy shows, and reading about technology, business,
              and politics.
            </p>
          </div>
        </div>
      </section>
      <section
        id="experience"
        className="relative top-0 left-0 flex w-full flex-col gap-16"
      >
        <h3 className="sticky top-0 z-30 w-full bg-neutral-100 p-4 text-center uppercase">
          Experience
        </h3>
        <div className="mx-auto flex max-w-[1024px] flex-col gap-16 px-4">
          <h2 className="w-full self-center text-center text-4xl uppercase">
            Industry
          </h2>
          <a
            className="group relative top-0 left-0 mx-auto block w-[calc(100%-16px)] max-w-[calc(1024px-16px)] self-start border border-transparent focus:border focus:border-black focus:ring-0 focus:outline-none"
            href="https://www.onswitchboard.com/"
            target="_blank"
          >
            <img
              src="./images/switchboard.png"
              className="w-full bg-white/50 object-cover object-center shadow backdrop-blur-lg"
            />
            <div className="absolute -top-2 -left-2 -z-10 h-4 w-4 border-t border-l border-black transition-all duration-300 group-hover:h-full group-hover:w-full"></div>
            <div className="absolute -top-2 -right-2 -z-10 h-4 w-4 border-t border-r border-black transition-all duration-300 group-hover:h-full group-hover:w-full"></div>
            <div className="absolute -bottom-2 -left-2 -z-10 h-4 w-4 border-b border-l border-black transition-all duration-300 group-hover:h-full group-hover:w-full"></div>
            <div className="absolute -right-2 -bottom-2 -z-10 h-4 w-4 border-r border-b border-black transition-all duration-300 group-hover:h-full group-hover:w-full"></div>
          </a>
          <div className="flex w-full flex-col gap-4">
            <p>
              Switchboard | Vancouver, BC | 3 Years | January 2021 - December
              2023
            </p>
            <ul className="flex w-full list-inside list-disc flex-col gap-4">
              <li>
                Communicated and collaborated with the Web, Mobile, QA, and
                Support teams in a startup environment to build a SaaS for
                companies in the commercial transportation industry across North
                America, empowering them to manage their fleets while staying
                compliant with government regulations.
              </li>
              <li>
                Researched, designed, and implemented user
                interfaces/experiences using Figma and React, improving visual
                appearances, user interactions, and workflows.
              </li>
              <li>
                Developed and improved API functionalities across microservices
                using JavaScript, Node.js, Express.js, and Parse Platform,
                speeding up execution times by 2x and delivering accurate data.
              </li>
              <li>
                Managed projects using Jira, Bitbucket, and Confluence to
                organize, document, and complete tasks within sprint intervals,
                increasing team efficiency and release of features and bug fixes
                by 10%.
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto flex max-w-[1024px] flex-col gap-16 px-4">
          <h2 className="w-full self-center text-center text-4xl uppercase">
            Freelance
          </h2>
        </div>
        <HorizontalScrollGrid>
          {freelanceItems.map((item, index) => (
            <HorizontalScrollCard key={index} item={item} />
          ))}
        </HorizontalScrollGrid>
        <div className="mx-auto flex max-w-[1024px] flex-col gap-16 px-4">
          <h2 className="w-full self-center text-center text-4xl uppercase">
            Projects
          </h2>
        </div>
        <HorizontalScrollGrid>
          {projectItems.map((item, index) => (
            <HorizontalScrollCard key={index} item={item} />
          ))}
        </HorizontalScrollGrid>
      </section>
      <section
        id="contact"
        className="relative top-0 left-0 flex w-full flex-col gap-16"
      >
        <h3 className="sticky top-0 z-30 w-full bg-neutral-100 p-4 text-center uppercase">
          Contact
        </h3>
        <div className="mx-auto flex max-w-[1024px] flex-col gap-16 px-4">
          <div className="flex flex-col gap-8">
            <h2 className="w-full self-center text-center text-4xl uppercase">
              Let's Connect!
            </h2>
            <p>
              I am seeking a professional opportunity as a software developer in
              North America and would love to meet and discuss more about my
              qualifications and how I can help your team and business.
            </p>
          </div>
          <div className="flex w-full flex-col gap-8">
            <Anchor to="mailto: hsnfwz99@gmail.com">Email</Anchor>
            <Anchor to="https://www.linkedin.com/in/hsnfwz/" target="_blank">
              LinkedIn
            </Anchor>
            <Anchor to="https://github.com/hsnfwz" target="_blank">
              GitHub
            </Anchor>
            <Anchor to="https://docs.google.com/document/d/1mSE5ze5_DX32lnXj1PkR6NM3aipGZoBAb5aLEFiAiOc/export?format=pdf">
              Resume
            </Anchor>
          </div>
        </div>
      </section>
      <footer className="flex flex-col items-center justify-center p-4">
        <p className="text-center text-xs">Copyright 2025 Hussein Fawaz</p>
      </footer>
    </main>
  );
}
