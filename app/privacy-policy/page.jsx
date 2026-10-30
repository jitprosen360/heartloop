import Link from 'next/link';
import { CalendarCheck, CalendarClock, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PolicyToc from '@/components/PolicyToc';
import { getPrivacyPolicy } from '@/lib/privacy-policy';

const policy = getPrivacyPolicy();
const url = 'https://heartloop.in/privacy-policy';
const title = 'Privacy Policy — HeartLoop.in';
const description =
  'What information HeartLoop collects, how we use it, when we share it, how we protect it, and the choices and rights available to you.';

export const metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: 'HeartLoop.in', locale: 'en_IN', type: 'website' },
  // Keep the page out of search results until every "[Insert ...]" detail has been filled in.
  robots: policy.placeholders.length ? { index: false, follow: true } : { index: true, follow: true },
};

const facts = [
  { icon: CalendarCheck, label: 'Effective date', value: policy.effectiveDate },
  { icon: CalendarClock, label: 'Last updated', value: policy.lastUpdated },
  { icon: Globe, label: 'Website', value: policy.website?.replace(/^https?:\/\//, '') },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <a
        href="#policy"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-brand focus:shadow-card"
      >
        Skip to policy
      </a>
      <Header />

      <main>
        <section
          id="policy-top"
          className="relative overflow-hidden pt-16"
          style={{ background: 'linear-gradient(125deg, #fff7f3 0%, #fff6f7 55%, #ffeef0 100%)' }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-36 -top-24 h-80 w-80 rounded-full border-[44px] border-[#ffdcd3]/60"
          />
          <div className="container-x relative py-12 sm:py-16">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-[13px] font-semibold text-muted">
                <li>
                  <Link href="/" className="transition-colors hover:text-brand">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-ink">
                  Privacy Policy
                </li>
              </ol>
            </nav>

            <p className="eyebrow mt-8">Legal</p>
            <h1 className="mt-2 text-[38px] font-extrabold leading-tight tracking-[-0.03em] sm:text-[52px]">
              Privacy Policy
            </h1>
            <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-muted sm:text-[17px]">
              This Privacy Policy explains what information we collect, how we use it, when we share it, how we protect
              it, and the choices and rights available to you.
            </p>

            <dl className="mt-8 flex flex-wrap gap-3">
              {facts.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 rounded-xl bg-white/90 px-4 py-2.5 shadow-[0_4px_16px_-8px_rgba(242,61,109,0.35)]"
                >
                  <Icon size={18} className="text-brand" aria-hidden="true" />
                  <dt className="text-[13px] text-muted">{label}:</dt>
                  <dd className="text-[13px] font-bold text-ink">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <div className="container-x grid items-start gap-8 py-10 sm:py-14 lg:grid-cols-[270px_minmax(0,1fr)] lg:gap-12">
          <aside className="self-stretch">
            <PolicyToc items={policy.toc} />
          </aside>
          <article
            id="policy"
            className="policy-prose min-w-0 rounded-[28px] border border-slate-100 bg-white px-5 py-8 shadow-card sm:px-10 sm:py-12"
            dangerouslySetInnerHTML={{ __html: policy.html }}
          />
        </div>
      </main>

      <Footer />
    </>
  );
}
