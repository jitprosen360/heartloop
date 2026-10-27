import { ChevronDown } from 'lucide-react';
import SectionHeading from './SectionHeading';

const faqs = [
  {
    q: 'How does HeartLoop.in work?',
    a: 'Create and verify your profile, discover compatible people through smart matching, and start a secure chat when you both connect.',
  },
  {
    q: 'How do the plans work?',
    a: 'Each plan lets you connect with a set number of people for a fixed time — from 1 person for 3 days on Plan A up to 50 people for 30 days on Plan D.',
  },
  {
    q: 'What are Heart Coins?',
    a: 'Coins you earn by staying active and completing activities. Spend them on Super Likes, Profile Boosts, Unlock Chat and Special Badges.',
  },
  {
    q: 'Is my exact location shared?',
    a: 'No. Other members only see an approximate area, such as Bengaluru (5–10 km range), never your exact location.',
  },
  {
    q: 'What is the Virtual Friend?',
    a: "An AI conversation companion for when you're not ready to match yet — chat, unwind and build confidence at your own pace.",
  },
  {
    q: 'How do I report someone?',
    a: 'Use the Block & Report tools on any profile or chat. Our moderation team reviews reports to keep the community safe and respectful.',
  },
];

export default function Faq() {
  return (
    <section id="faq" data-spy="faq" className="container-x pb-16 sm:pb-20">
      <SectionHeading eyebrow="Good to know" title="Frequently asked questions" />

      <div className="mx-auto mt-10 grid max-w-5xl items-start gap-3 md:grid-cols-2">
        {faqs.map(({ q, a }, i) => (
          <details
            data-reveal
            key={q}
            open={i === 0}
            className="group rounded-2xl border border-slate-100 bg-white px-5 shadow-card [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[15px] font-bold">
              {q}
              <ChevronDown size={18} className="shrink-0 text-brand transition-transform duration-300 group-open:rotate-180" />
            </summary>
            <p className="pb-4 text-[14px] leading-relaxed text-muted">{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
