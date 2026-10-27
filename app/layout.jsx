import { Caveat, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta', display: 'swap' });
const caveat = Caveat({ subsets: ['latin'], weight: ['600', '700'], variable: '--font-caveat', display: 'swap' });

export const metadata = {
  title: 'HeartLoop.in — Find meaningful connections',
  description:
    'Discover real people, match with confidence, chat securely, and unlock better conversations with a smart reward and subscription system.',
  openGraph: {
    title: 'HeartLoop.in — Find meaningful connections',
    description: 'Real people. Safer dating. Better conversations.',
    siteName: 'HeartLoop.in',
    locale: 'en_IN',
    type: 'website',
  },
};

export const viewport = {
  themeColor: '#f23d6d',
};

// Runs before first paint so animated elements don't flash before GSAP takes over.
const animScript = `if(!matchMedia('(prefers-reduced-motion: reduce)').matches){var d=document.documentElement;d.classList.add('anim');setTimeout(function(){d.classList.remove('anim')},3000)}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${caveat.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: animScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
