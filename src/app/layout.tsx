import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import clsx from 'clsx';

const poppins = Poppins({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Sunstone',
  description: 'Sunstone - самообучение',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={clsx(poppins.className, 'container mx-auto p-10')}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
