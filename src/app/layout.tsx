import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { site } from '@/data/content';
import { siteUrl } from '@/lib/site-url';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-montserrat',
});

const description = `${site.title} | ${site.tagline}`;

// Icons and the social preview image come from app/icon.tsx,
// app/apple-icon.tsx and app/opengraph-image.tsx.
export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: `${site.name} · ${site.title}`,
  description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: site.name,
    title: `${site.name} · ${site.title}`,
    description,
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} · ${site.title}`,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
