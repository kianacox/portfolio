import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Orbitron } from 'next/font/google';
import { VT323 } from 'next/font/google';

import './globals.css';
import Head from 'next/head';

<Head>
  <link rel="icon" href="/favicon.ico" />
</Head>;

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-orbitron',
});

const vt323 = VT323({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-vt323',
});

export const metadata: Metadata = {
  title: 'Kiana Cox | Frontend Engineer',
  description:
    'Portfolio of Kiana Cox – experienced frontend developer with a focus on accessibility, performance, and modern web development.',
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${vt323.variable} ${orbitron.variable} ${geistSans.variable} ${geistMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
