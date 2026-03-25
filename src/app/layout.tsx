import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ram Pratheesh S K - Portfolio',
  description: 'Scrollytelling Portfolio built with Next.js, Framer Motion, and HTML5 Canvas',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black min-h-screen text-white antialiased selection:bg-white selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
