import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hussein Fawaz",
  description: "Full Stack Software Developer | 3 Years Experience | Designing and Building Exceptional User Experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
