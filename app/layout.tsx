import type { Metadata } from 'next';
import './globals.css';

// Canonical site URL — used to resolve OG/Twitter image paths to absolute URLs.
// Production uses the custom domain; dev falls back to localhost. Can be
// overridden with NEXT_PUBLIC_SITE_URL (e.g. for preview deployments).
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.NODE_ENV === 'production'
    ? 'https://yuccaagency.com'
    : 'http://localhost:3000');

const title = 'Yucca Agency — Paid social ads for service businesses';
const description =
  'Paid social campaigns for dentists, lawyers, contractors, gyms, salons, spas, and other service and ecommerce brands — built on trend-aware creative, AI-assisted targeting, and real campaign experience. No $3-5k/mo retainer required.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: '/',
    siteName: 'Yucca Agency',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
