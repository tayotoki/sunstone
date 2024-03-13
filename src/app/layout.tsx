import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';

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
      <body className="container mx-auto bg-background p-10 min-h-screen font-montserrat font-normal text-base">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
