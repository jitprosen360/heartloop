import Image from 'next/image';
import { ArrowRight, Coins, Heart, LockKeyhole, Play, ShieldCheck } from 'lucide-react';
import { links } from '@/lib/site';

const trust = [
  { icon: ShieldCheck, label: ['Profile', 'Verification'], wrap: 'bg-[#e8f1ff]', color: '#3b82f6', fill: '#bfd7ff' },
  { icon: LockKeyhole, label: ['Encrypted', 'Chat'], wrap: 'bg-[#e4f9ee]', color: '#16a34a', fill: '#bdf0d3' },
  { icon: Coins, label: ['Coins &', 'Rewards'], wrap: 'bg-[#fff4dc]', color: '#d99a0b', fill: '#ffd56b' },
  { icon: Heart, label: ['Smart', 'Matching'], wrap: 'bg-[#ffe6ee]', color: '#f23d6d', fill: '#ff7a98' },
];

export default function Hero() {
  return (
    <section
      id="home"
      data-spy="home"
      className="relative overflow-hidden pt-16"
      style={{ background: 'linear-gradient(125deg, #fff7f3 0%, #fff6f7 55%, #ffeef0 100%)' }}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div data-parallax="-30" className="absolute -left-44 top-48 h-80 w-80 rounded-full border-[48px] border-[#ffdcd3]/70" />
        <div className="absolute left-[38%] top-10 h-72 w-72 rounded-full bg-[#ffe3ec] opacity-70 blur-3xl" />
        <div
          data-parallax="20"
          className="absolute -bottom-36 -right-40 h-[420px] w-[420px] rounded-full opacity-80"
          style={{ background: 'linear-gradient(135deg, #ff8fab 0%, #ffc27a 100%)' }}
        />
      </div>

      <div className="container-x relative grid items-center gap-6 pb-14 pt-8 lg:grid-cols-[1fr_1.08fr] lg:gap-2 lg:pb-12 lg:pt-4">
        <div className="relative z-10">
          <p
            data-hero
            className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[11px] font-semibold text-ink/80 shadow-[0_4px_16px_-6px_rgba(242,61,109,0.3)]"
          >
            Real People <span className="text-brand">•</span> Safer Dating <span className="text-brand">•</span> Better Conversations
          </p>

          <h1
            data-hero
            className="mt-5 text-[40px] font-extrabold leading-[1.06] tracking-[-0.035em] sm:text-[52px] xl:text-[60px]"
          >
            Find meaningful connections on{' '}
            <span className="block bg-text-gradient bg-clip-text text-transparent">HeartLoop.in</span>
          </h1>

          <p data-hero className="mt-5 max-w-[490px] text-[16px] leading-relaxed text-muted sm:text-[17px]">
            Discover real people, match with confidence, chat securely, and unlock better conversations with a smart
            reward and subscription system.
          </p>

          <div data-hero className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a href={links.signup} className="btn-primary h-[52px] px-7 text-[15px]">
              Start Matching <ArrowRight size={18} />
            </a>
            <a href="#features" className="btn-outline h-[52px] px-6 text-[15px]">
              <span className="grid h-6 w-6 place-items-center rounded-full border-2 border-brand">
                <Play size={10} fill="currentColor" className="ml-px" />
              </span>
              View Features
            </a>
          </div>

          <ul data-hero className="mt-8 grid max-w-[520px] grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-3">
            {trust.map(({ icon: Icon, label, wrap, color, fill }) => (
              <li key={label[0]} className="flex items-center gap-2.5 text-[12px] font-semibold leading-tight text-ink/90">
                <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${wrap}`}>
                  <Icon size={20} color={color} fill={fill} strokeWidth={2.2} />
                </span>
                <span>
                  {label[0]}
                  <br />
                  {label[1]}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-[620px] lg:max-w-none">
          <div data-float className="will-change-transform">
            <Image
              src="/images/hero-phones.webp"
              alt="HeartLoop.in app screens: a chat with Neha, Ananya's profile card, and the Heart Coins wallet"
              width={1200}
              height={976}
              priority
              sizes="(min-width: 1280px) 640px, (min-width: 1024px) 52vw, 92vw"
              className="h-auto w-full drop-shadow-[0_28px_36px_rgba(90,30,80,0.16)]"
            />
          </div>

          <div data-hero-note className="absolute -right-1 -top-3 hidden sm:block lg:-right-6">
            <p className="-rotate-12 text-center font-script text-[24px] font-bold leading-[0.9] text-brand">
              Good
              <br />
              People
              <br />
              Brighter
              <br />
              Stories
            </p>
            <Heart size={20} className="ml-auto mt-1 rotate-12 text-brand" strokeWidth={2.4} />
          </div>

          <svg
            aria-hidden="true"
            viewBox="0 0 70 110"
            className="absolute -left-10 top-[30%] hidden w-14 text-[#ff9a62] lg:block"
            fill="none"
          >
            <path d="M14 8c-10 30 2 60 46 92" stroke="currentColor" strokeWidth="2" strokeDasharray="4 6" strokeLinecap="round" />
            <path d="M14 2a7 7 0 0 1 7 7c0 5-7 11-7 11S7 14 7 9a7 7 0 0 1 7-7Z" fill="currentColor" />
          </svg>
        </div>
      </div>
    </section>
  );
}
