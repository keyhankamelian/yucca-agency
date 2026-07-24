import type { Metadata } from 'next';
import Script from 'next/script';
import PageTransition from './components/PageTransition';
import './globals.css';

const FB_PIXEL_ID = '1583702113103565';

// Canonical site URL — used to resolve OG/Twitter image paths to absolute URLs.
// Production uses the custom domain; dev falls back to localhost. Can be
// overridden with NEXT_PUBLIC_SITE_URL (e.g. for preview deployments).
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.NODE_ENV === 'production'
    ? 'https://yuccaagency.com'
    : 'http://localhost:3000');

const title = 'Yucca Agency - Digital Marketing';
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
  // suppressHydrationWarning: the inline script in <head> adds the .js class to
  // <html> before React hydrates, which React would otherwise report as a
  // server/client attribute mismatch.
  return (
    <html lang="en" suppressHydrationWarning>
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
        {/* Marks that JS is running, before first paint. Scroll-reveal styles
            are gated on .js so that if the bundle never executes, the content
            renders plainly visible instead of stuck at opacity:0. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
      </head>
      <body>
        <PageTransition>{children}</PageTransition>
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            alt=""
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
      </body>
    </html>
  );
}
