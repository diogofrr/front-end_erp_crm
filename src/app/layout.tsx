import type { Metadata } from 'next';

import { type LayoutProps } from '@/types/root';

import { Providers } from './provider';
import { Toaster } from 'sonner';

import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'ERP CRM',
  description: 'Generated by create next app',
  icons: {
    icon: '/favicon/favicon-32x32.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: '/favicon/site.webmanifest',
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="pt-BR">
      <body className={`antialiased`}>
        <Toaster richColors closeButton position="top-right" />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
