import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Baloo_Bhaijaan_2 } from 'next/font/google';
import '../styles/globals.css';

const baloo = Baloo_Bhaijaan_2({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Starnavi test task',
  description: 'List of the StarWars characters',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${baloo.className} antialiased`}>{children}</body>
    </html>
  );
}
