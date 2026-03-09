import {rootMetadata} from '@/lib/metadata';
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = rootMetadata;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
