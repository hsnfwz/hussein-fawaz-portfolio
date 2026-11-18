import { renderMonogram } from '@/lib/monogram';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

/** Home-screen icon on iOS (iOS applies its own rounded mask). */
export default function AppleIcon() {
  return renderMonogram(size.width, false);
}
