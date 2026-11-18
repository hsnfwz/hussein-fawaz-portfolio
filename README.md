# Hussein Fawaz — Portfolio

Single-page portfolio built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4. Deployed on Vercel with Vercel Analytics and Speed Insights.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts

| Script                 | Purpose                       |
| ---------------------- | ----------------------------- |
| `npm run dev`          | Start the dev server          |
| `npm run build`        | Production build              |
| `npm start`            | Serve the production build    |
| `npm run lint`         | ESLint (Next.js config)       |
| `npm run format`       | Format with Prettier          |
| `npm run format:check` | Check formatting (e.g. in CI) |

## Environment

| Variable               | Purpose                                                                                                                                     |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Optional override for the site URL. Defaults to `site.url` in `src/data/content.ts` (https://husseinfawaz.ca), or localhost in development. |

## Structure

```
src/
  app/
    layout.tsx           Root layout, metadata, fonts, analytics
    page.tsx             Page markup (rendered from the data file) + JSON-LD
    not-found.tsx        404 page
    opengraph-image.tsx  Social preview image (generated at build)
    robots.ts, sitemap.ts  robots.txt and sitemap.xml
    icon.tsx             Browser-tab icon ("hf" monogram)
    apple-icon.tsx       iOS home-screen icon
    globals.css          Theme tokens, type scale, shared utilities
  components/            Section, cards (LinkCard shell + Experience/Project/
                         Contact), DemoVideo, ButtonLink, SiteHeader, Lead
  data/content.ts        All site copy: profile, experience, projects
  lib/                   Site URL, date formatting, OG image helpers
assets/fonts/            Montserrat Bold for generated images (SIL OFL)
public/logos/            Company logos
public/videos/           Project demos (H.264, 1280px, 30fps) + poster frames
```

## Editing content

All copy lives in `src/data/content.ts`. Add a role to `experience` or a project to `projects` and the page updates.

### Adding a project video

Re-encode screen recordings before adding them (requires `ffmpeg`):

```bash
ffmpeg -i input.mov -an -vf "scale=1280:-2:flags=lanczos,fps=30" \
  -c:v libx264 -preset slow -crf 26 -pix_fmt yuv420p -movflags +faststart \
  public/videos/name.mp4
ffmpeg -ss 1 -i public/videos/name.mp4 -frames:v 1 \
  -vf "scale=1080:-2:flags=lanczos" -q:v 6 public/videos/name.jpg
```
