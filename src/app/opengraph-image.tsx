import { ImageResponse } from 'next/og';
import { site } from '@/data/content';
import { loadMontserratBold, ogColors } from '@/lib/og-font';

export const alt = `${site.name}, ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** Social preview card shown when the site is shared (LinkedIn, Slack, etc.). */
export default async function OpengraphImage() {
  const montserratBold = await loadMontserratBold();

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 96px',
        background: ogColors.background,
        fontFamily: 'Montserrat',
      }}
    >
      <div
        style={{
          fontSize: 112,
          lineHeight: 1.05,
          color: ogColors.foreground,
          textTransform: 'lowercase',
        }}
      >
        {site.name}
      </div>
      <div
        style={{
          fontSize: 112,
          lineHeight: 1.05,
          color: ogColors.accent,
          textTransform: 'lowercase',
        }}
      >
        {site.title}
      </div>
      <div
        style={{
          width: 96,
          height: 6,
          borderRadius: 3,
          background: ogColors.accent,
          margin: '48px 0 32px',
        }}
      />
      <div style={{ fontSize: 36, color: ogColors.muted, maxWidth: 900 }}>
        {site.tagline}
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: 'Montserrat',
          data: montserratBold,
          weight: 700,
          style: 'normal',
        },
      ],
    }
  );
}
