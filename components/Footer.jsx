import { Facebook, Heart, Instagram, Linkedin, Youtube } from 'lucide-react';
import Logo from './Logo';

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.4l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.6l5.24 6.93ZM17.6 20.64h2.04L6.49 3.24H4.3Z" />
    </svg>
  );
}

// Replace the placeholder hrefs with real pages and profiles.
const pages = [
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
  { label: 'Contact', href: '#' },
  { label: 'FAQ', href: '#faq' },
];

const socials = [
  { label: 'Instagram', icon: Instagram, href: '#' },
  { label: 'Facebook', icon: Facebook, href: '#' },
  { label: 'X', icon: XIcon, href: '#' },
  { label: 'YouTube', icon: Youtube, href: '#' },
  { label: 'LinkedIn', icon: Linkedin, href: '#' },
];

export default function Footer() {
  return (
    <footer className="container-x pb-8 pt-14">
      <div className="grid items-center gap-8 md:grid-cols-[1.3fr_1fr_auto]">
        <div>
          <Logo id="footer-logo" />
          <p className="mt-3 text-[13px] leading-relaxed text-muted">
            Real people. Real conversations.
            <br />
            A safer and more meaningful dating experience for modern India.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3 text-[13px] font-semibold text-ink/80">
          {pages.map(({ label, href }) => (
            <a key={label} href={href} className="transition-colors hover:text-brand">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <span className="text-[13px] text-muted">Follow us</span>
          <ul className="flex items-center gap-3.5">
            {socials.map(({ label, icon: Icon, href }) => (
              <li key={label}>
                <a href={href} aria-label={label} className="block text-ink transition-colors hover:text-brand">
                  <Icon className="h-[19px] w-[19px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-2 border-t border-slate-200/70 pt-5 text-[12px] text-muted sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} HeartLoop.in. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Made with <Heart size={13} className="fill-brand text-brand" /> in India
        </p>
      </div>
    </footer>
  );
}
