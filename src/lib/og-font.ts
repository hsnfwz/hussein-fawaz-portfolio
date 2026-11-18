import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

/**
 * Montserrat Bold for images generated with next/og (social preview, icons).
 * The generator needs a TTF/OTF file, not the web font next/font serves.
 * Licensed under the SIL Open Font License; see assets/fonts/OFL.txt.
 */
export function loadMontserratBold() {
  return readFile(join(process.cwd(), 'assets/fonts/Montserrat-Bold.ttf'));
}

export const ogColors = {
  background: '#000000',
  foreground: '#ffffff',
  muted: '#a3a3a3',
  accent: '#c4b5fd',
} as const;
