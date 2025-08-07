'use client';

import useModalContext from '@/hooks/useModalContext';
import useIntersection from '@/hooks/useIntersection';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [elementRef, intersectingElement] = useIntersection();
  useEffect(() => console.log(elementRef), [intersectingElement]);

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
      description:
        'Track and rate movies and create collaborative lists with friends and family!',
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
    <main className="relative flex flex-col gap-16">
      <nav className="fixed top-0 z-50 w-full border-y border-t-transparent border-b-neutral-100 bg-white px-4">
        <div className="m-auto flex w-full max-w-[1024px]">
          <Link
            onMouseDown={(event) => event.preventDefault()}
            className="block items-center justify-center border-y-2 border-transparent p-4 text-center text-xs lowercase transition-all hover:border-b-black focus:z-50 focus:border-black focus:ring-0 focus:outline-0"
            href="#home"
          >
            Home
          </Link>
          <Link
            onMouseDown={(event) => event.preventDefault()}
            className="block items-center justify-center border-y-2 border-transparent p-4 text-center text-xs lowercase transition-all hover:border-b-black focus:z-50 focus:border-black focus:ring-0 focus:outline-0"
            href="#experience"
          >
            Experience
          </Link>
          <Link
            onMouseDown={(event) => event.preventDefault()}
            className="block items-center justify-center border-y-2 border-transparent p-4 text-center text-xs lowercase transition-all hover:border-b-black focus:z-50 focus:border-black focus:ring-0 focus:outline-0"
            href="#projects"
          >
            projects
          </Link>
          <Link
            onMouseDown={(event) => event.preventDefault()}
            className="block items-center justify-center border-y-2 border-transparent p-4 text-center text-xs lowercase transition-all hover:border-b-black focus:z-50 focus:border-black focus:ring-0 focus:outline-0"
            href="#contact"
          >
            Contact
          </Link>
        </div>
      </nav>
      <section
        id="home"
        className="flex h-full min-h-screen w-full items-center justify-center p-4"
      >
        <div className="m-auto flex w-full max-w-[1024px] flex-col gap-8">
          <h1 className="text-5xl lowercase sm:text-7xl">Hussein Fawaz</h1>

          <div className="flex flex-col gap-4">
            <h2 className="lowercase">
              Full Stack Software Developer | 4 Years Professional Experience |
              Designing and Building Exceptional User Experiences
            </h2>
          </div>
        </div>
      </section>
      <section
        id="experience"
        className="flex h-full min-h-screen w-full items-center justify-center p-4"
      >
        <div className="m-auto flex w-full max-w-[1024px] flex-col gap-8">
          <h1 className="text-5xl lowercase sm:text-7xl">Experience</h1>
          <div className="flex flex-col gap-4">
            <h2 className="lowercase">
              June 2022 - June 2025 | Digital Solutions Architect |
              Self-employed
            </h2>
            <h2 className="lowercase">
              January 2021 - December 2023 | Web Software Developer |{' '}
              <Link
                href="https://www.onswitchboard.com/"
                target="_blank"
                className="underline transition-all hover:text-sky-500"
              >
                Switchboard
              </Link>
            </h2>
          </div>
          <Link
            onMouseDown={(event) => event.preventDefault()}
            className="block items-center justify-center self-start border border-black p-4 text-center text-xs lowercase transition-all hover:bg-black hover:text-white focus:z-50 focus:border-black focus:ring-0 focus:outline-0 rounded"
            href="https://docs.google.com/document/d/1556_mPAxeexguFJGg-k6Kg3q0U8zdiHWkyLg1vZ53f4/export?format=pdf"
            target="_blank" download
          >
            Download Resume
          </Link>
        </div>
      </section>
      <section
        id="projects"
        className="flex h-full min-h-screen w-full items-center justify-center p-4"
      >
        <div className="m-auto flex w-full max-w-[1024px] flex-col gap-8">
          <h1 className="text-5xl lowercase sm:text-7xl">Projects</h1>
          <h2 className="lowercase">
            Specialized in Figma, HTML, CSS, Tailwind CSS, JavaScript,
            TypeScript, React, Next.js, Node.js, Express.js, SQL, Supabase,
            Neon, and Vercel | Learning React Native and Expo
          </h2>
          <div className="grid w-full grid-cols-1 gap-8 rounded-2xl bg-neutral-100 p-8 sm:grid-cols-2">
            <div className="flex w-full flex-col gap-4">
              <video
                className="w-full bg-black border border-black rounded"
                src="/rembump_demo.mp4"
                width=""
                height=""
                muted
                controls
                autoPlay
                loop
                playsInline
              >
                <source src="/rembump_demo.mp4" type="video/mp4" />
              </video>
              <h2 className="lowercase">
                <Link
                  href="https://www.rembump.com/"
                  target="_blank"
                  className="self-start lowercase underline transition-all hover:text-sky-500"
                >
                  RemBump
                </Link>{' '}
                | the smart music therapy experience
              </h2>
            </div>
            <div className="flex w-full flex-col gap-4">
              <video
                className="w-full bg-black border border-black rounded"
                src="/noureddinefeathers_demo.mp4"
                width=""
                height=""
                muted
                controls
                autoPlay
                loop
                playsInline
              >
                <source src="/noureddinefeathers_demo.mp4" type="video/mp4" />
              </video>
              <h2 className="lowercase">
                <Link
                  href="https://www.noureddinefeathers.com/"
                  target="_blank"
                  className="self-start lowercase underline transition-all hover:text-sky-500"
                >
                  Noureddine Feathers
                </Link>{' '}
                | shop high quality ostrich feather dusters
              </h2>
            </div>
            <div className="flex w-full flex-col gap-4">
              <video
                className="w-full bg-black border border-black rounded"
                src="/filmfest_demo.mp4"
                width=""
                height=""
                muted
                controls
                autoPlay
                loop
                playsInline
              >
                <source src="/filmfest_demo.mp4" type="video/mp4" />
              </video>
              <h2 className="lowercase">
                <Link
                  href="https://filmfest-2025.vercel.app/"
                  target="_blank"
                  className="self-start lowercase underline transition-all hover:text-sky-500"
                >
                  FilmFest
                </Link>{' '}
                | track and rate movies with your friends
              </h2>
            </div>
            <div className="flex w-full flex-col gap-4">
              <video
                className="w-full bg-black border border-black rounded"
                src="/cellystats_demo.mp4"
                width=""
                height=""
                muted
                controls
                autoPlay
                loop
                playsInline
              >
                <source src="/cellystats_demo.mp4" type="video/mp4" />
              </video>
              <h2 className="lowercase">
                <Link
                  href="https://cellystats.vercel.app/"
                  target="_blank"
                  className="self-start lowercase underline transition-all hover:text-sky-500"
                >
                  CellyStats
                </Link>{' '}
                | view and compare hockey player statistics
              </h2>
            </div>
            <div className="flex w-full flex-col gap-4">
              <video
                className="w-full bg-black border border-black rounded"
                src="/quickreport_demo.mp4"
                width=""
                height=""
                muted
                controls
                autoPlay
                loop
                playsInline
              >
                <source src="/quickreport_demo.mp4" type="video/mp4" />
              </video>
              <h2 className="lowercase">
                <Link
                  href="https://quickreport-v1.vercel.app/"
                  target="_blank"
                  className="self-start lowercase underline transition-all hover:text-sky-500"
                >
                  QuickReport
                </Link>{' '}
                | convert CSV files to polished PDF files
              </h2>
            </div>
            <div className="flex w-full flex-col gap-4">
              <video
                className="w-full bg-black border border-black rounded"
                src="/quickchart_demo.mp4"
                width=""
                height=""
                muted
                controls
                autoPlay
                loop
                playsInline
              >
                <source src="/quickchart_demo.mp4" type="video/mp4" />
              </video>
              <h2 className="lowercase">
                <Link
                  href="https://quickchart-v1.vercel.app/"
                  target="_blank"
                  className="self-start lowercase underline transition-all hover:text-sky-500"
                >
                  QuickChart
                </Link>{' '}
                | generate bar, line, and area charts and save as PNG or JPG
              </h2>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="p-4">
        <div className="m-auto flex h-[1px] w-full max-w-[1024px] items-center justify-center rounded-full bg-neutral-100 text-9xl font-bold text-neutral-100">
          3
        </div>
      </div> */}
      <section
        id="contact"
        className="flex h-full min-h-screen w-full items-center justify-center p-4"
      >
        <div className="m-auto flex w-full max-w-[1024px] flex-col gap-8">
          <h1 className="text-5xl lowercase sm:text-7xl">Contact</h1>
          <div className="flex flex-col gap-4">
            <h2 className="lowercase">
              email |{' '}
              <Link
                href="mailto: hsnfwz99@gmail.com"
                className="underline transition-all hover:text-sky-500"
              >
                hsnfwz99@gmail.com
              </Link>
            </h2>
            <h2 className="lowercase">
              LinkedIn |{' '}
              <Link
                href="https://www.linkedin.com/in/hsnfwz/"
                target="_blank"
                className="underline transition-all hover:text-sky-500"
              >
                /in/hsnfwz
              </Link>
            </h2>
          </div>
        </div>
      </section>

      <footer className="m-auto w-full max-w-[1024px] p-4">
        <h2 className="text-xs lowercase">Copyright 2025 Hussein Fawaz</h2>
      </footer>
    </main>
  );
}
