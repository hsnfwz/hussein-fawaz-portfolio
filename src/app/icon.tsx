import { renderMonogram } from '@/lib/monogram';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

/** Browser-tab icon. */
export default function Icon() {
  return renderMonogram(size.width, true);
}
