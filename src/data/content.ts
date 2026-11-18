export type Role = {
  company: string;
  /** Square logo in /public/logos. */
  logo: string;
  title: string;
  /** Company page on LinkedIn. */
  linkedin: string;
  location: string;
  /** One-sentence summary of the work, shown on the card. */
  summary: string;
  /** ISO dates (YYYY-MM) for machine-readable <time> elements. */
  start: string;
  end?: string;
};

export type Project = {
  name: string;
  description: string;
  url: string;
  video: string;
  /** First-frame image shown before the video loads. */
  poster: string;
};

export const site = {
  name: 'Hussein Fawaz',
  /** Official domain, used for canonical links, previews and the sitemap. */
  url: 'https://husseinfawaz.ca',
  title: 'Web Developer',
  tagline:
    '4+ years of professional experience designing and building exceptional user experiences',
  email: 'hsnfwz99@gmail.com',
  linkedin: 'https://www.linkedin.com/in/hsnfwz/',
  /** Resume link is currently hidden on the page; kept for when it returns. */
  resume:
    'https://docs.google.com/document/d/1556_mPAxeexguFJGg-k6Kg3q0U8zdiHWkyLg1vZ53f4/export?format=pdf',
};

export const experience: Role[] = [
  {
    company: 'Switchboard',
    logo: '/logos/switchboard.jpeg',
    title: 'Web Developer',
    linkedin: 'https://www.linkedin.com/company/switchboard/',
    location: 'Vancouver, BC',
    summary:
      'At Switchboard, I built web software for a fleet management platform that helps trucking companies track vehicles, manage drivers and stay compliant.',
    start: '2021-01',
    end: '2023-12',
  },
  {
    company: 'Conversion',
    logo: '/logos/conversion.jpeg',
    title: 'Web Developer',
    linkedin: 'https://www.linkedin.com/company/conversion-factory/',
    location: 'Vancouver, BC',
    summary:
      'Today at Conversion, part of GAIN, I build website experiments that help global brands like Universal, Microsoft and Nike improve their conversion rates.',
    start: '2025-10',
  },
];

export const projects: Project[] = [
  {
    name: 'RemBump',
    description: 'The smart music therapy experience',
    url: 'https://www.rembump.com/',
    video: '/videos/rembump.mp4',
    poster: '/videos/rembump.jpg',
  },
  {
    name: 'Noureddine Feathers',
    description: 'Shop high quality ostrich feather dusters',
    url: 'https://www.noureddinefeathers.com/',
    video: '/videos/noureddinefeathers.mp4',
    poster: '/videos/noureddinefeathers.jpg',
  },
  {
    name: 'FilmFest',
    description: 'Track and rate movies with your friends',
    url: 'https://filmfest-2025.vercel.app/',
    video: '/videos/filmfest.mp4',
    poster: '/videos/filmfest.jpg',
  },
  {
    name: 'CellyStats',
    description: 'View and compare hockey player statistics',
    url: 'https://cellystats.vercel.app/',
    video: '/videos/cellystats.mp4',
    poster: '/videos/cellystats.jpg',
  },
  {
    name: 'QuickReport',
    description: 'Convert CSV files to polished PDF files',
    url: 'https://quickreport-v1.vercel.app/',
    video: '/videos/quickreport.mp4',
    poster: '/videos/quickreport.jpg',
  },
  {
    name: 'QuickChart',
    description: 'Generate bar, line, and area charts and save as PNG or JPG',
    url: 'https://quickchart-v1.vercel.app/',
    video: '/videos/quickchart.mp4',
    poster: '/videos/quickchart.jpg',
  },
];

export const experienceIntro =
  "I've spent 4+ years as a web developer across logistics and digital marketing.";

export const projectsIntro =
  "A mix of personal and freelance projects I've designed and built.";

export const contactIntro =
  "Have a freelance project or a collaboration in mind? I'd love to hear about it.";
