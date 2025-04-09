import type { Metadata } from 'next';
import './globals.css';
import { ModalContextProvider } from '@/contexts/ModalContextProvider';

export const metadata: Metadata = {
  title: 'Hussein Fawaz',
  description:
    'Full Stack Software Developer | 3 Years Experience | Designing and Building Exceptional User Experiences',
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ModalContextProvider>{children}</ModalContextProvider>
      </body>
    </html>
  );
}

export default RootLayout;
