import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Casa Nube',
  description: 'Premium Barcelona café demo with multilingual foundation.'
};

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
