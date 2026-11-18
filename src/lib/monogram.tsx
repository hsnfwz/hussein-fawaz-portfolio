import { ImageResponse } from 'next/og';
import { site } from '@/data/content';
import { loadMontserratBold, ogColors } from '@/lib/og-font';

const initials = site.name
  .split(/\s+/)
  .map((word) => word[0])
  .join('')
  .toLowerCase();

/** "hf" monogram in the accent colour on black, at any square size. */
export async function renderMonogram(px: number, rounded: boolean) {
  const montserratBold = await loadMontserratBold();

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: ogColors.background,
        borderRadius: rounded ? px * 0.22 : 0,
        color: ogColors.accent,
        fontFamily: 'Montserrat',
        fontSize: px * 0.56,
        letterSpacing: -px * 0.02,
        paddingBottom: px * 0.06,
      }}
    >
      {initials}
    </div>,
    {
      width: px,
      height: px,
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
