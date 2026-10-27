import { ChevronRight, Coins, Crown, Gem, Gift, Heart, Send, Zap } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { links } from '@/lib/site';

const plans = [
  { name: 'Plan A', people: '1 person', days: '3 days', price: 99, note: 'Ideal to give it a try', icon: Send, wrap: 'bg-[#ffe6ee]', color: '#f23d6d', fill: '#ff7a98' },
  { name: 'Plan B', people: '2 people', days: '7 days', price: 199, note: 'Connect with more people', icon: Heart, wrap: 'bg-[#ffe6ee]', color: '#f23d6d', fill: '#ff5c84' },
  { name: 'Plan C', people: '20 people', days: '15 days', price: 499, note: 'Great value for active users', icon: Crown, wrap: 'bg-[#fff1cf]', color: '#d99a0b', fill: '#ffc93c', popular: true },
  { name: 'Plan D', people: '50 people', days: '30 days', price: 999, note: 'Best for maximum matches', icon: Gem, wrap: 'bg-[#e3efff]', color: '#2f7bf5', fill: '#7fb3ff' },
];

const swipes = [
  { label: '50 Swipes', price: 49 },
  { label: '200 Swipes', price: 149, popular: true },
  { label: '500 Swipes', price: 299 },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      data-spy="pricing"
      className="mx-2 rounded-[36px] py-14 sm:mx-4 sm:rounded-[56px] sm:py-16"
      style={{ background: 'linear-gradient(110deg, #fff8f3 0%, #fff2ec 55%, #fff6f3 100%)' }}
    >
      <div className="container-x grid gap-6 lg:grid-cols-[1fr_300px] lg:items-end xl:gap-8">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Flexible plans for everyone"
            title="Choose the plan that works for you"
            subtitle="Unlock more matches, more conversations and a better experience with our affordable plans."
            className="mx-0"
          />

          <div className="mt-9 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {plans.map(({ name, people, days, price, note, icon: Icon, wrap, color, fill, popular }) => (
              <div data-reveal key={name}>
                <article
                  className={`relative flex h-full flex-col items-center rounded-[20px] bg-white px-3 pb-4 pt-6 text-center shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-float sm:px-4 ${
                    popular ? 'ring-2 ring-brand/70' : ''
                  }`}
                >
                  {popular && (
                    <span className="absolute -top-3 right-3 rounded-full bg-brand px-2.5 py-1 text-[10px] font-bold text-white">
                      Most Popular
                    </span>
                  )}
                  <span className={`grid h-12 w-12 place-items-center rounded-full ${wrap}`}>
                    <Icon size={24} color={color} fill={fill} strokeWidth={2} />
                  </span>
                  <h3 className="mt-3 text-[16px] font-extrabold">{name}</h3>
                  <p className="mt-1 text-[13px] leading-snug text-muted">
                    {people}
                    <br />
                    {days}
                  </p>
                  <p className="mt-3 text-[24px] font-extrabold leading-none">₹{price}</p>
                  <p className="mt-2 min-h-[32px] text-[12px] leading-snug text-muted">{note}</p>
                  <a href={links.signup} className="btn-primary mt-3 h-10 w-full rounded-full text-[13px] shadow-none">
                    Get {name}
                  </a>
                </article>
              </div>
            ))}
          </div>
        </div>

        <aside id="rewards" aria-label="Swipe packages and rewards" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <div data-reveal className="rounded-[20px] bg-white p-5 shadow-card">
            <div className="flex gap-3">
              <Zap size={26} className="shrink-0" color="#f59e0b" fill="#ffc93c" />
              <div>
                <h3 className="text-[15px] font-extrabold">Swipe Packages</h3>
                <p className="mt-1 text-[12.5px] leading-snug text-muted">
                  Need more swipes? Get extra swipes anytime and keep the conversations going.
                </p>
              </div>
            </div>
            <ul className="mt-4 space-y-2">
              {swipes.map(({ label, price, popular }) => (
                <li key={label}>
                  <a
                    href={links.signup}
                    className="flex items-center gap-2 rounded-xl border border-slate-200/80 px-2.5 py-2.5 text-[13px] transition-colors hover:border-brand/50 hover:bg-brand-soft"
                  >
                    <span className="h-4 w-4 shrink-0 rounded-[5px] border-2 border-slate-300" />
                    <span className="flex-1 whitespace-nowrap font-semibold">{label}</span>
                    {popular && (
                      <span className="rounded-full bg-brand px-2 py-0.5 text-[10px] font-bold text-white">Popular</span>
                    )}
                    <span className="font-extrabold">₹{price}</span>
                    <ChevronRight size={15} className="text-slate-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal className="flex items-center gap-3 rounded-[20px] bg-white p-5 shadow-card">
            <Gift size={34} className="shrink-0" color="#e0336b" fill="#ff8fb0" />
            <div className="flex-1">
              <h3 className="text-[15px] font-extrabold">Your Rewards</h3>
              <p className="mt-1 text-[12.5px] leading-snug text-muted">Complete activities, stay active and earn extra coins!</p>
            </div>
            <Coins size={32} className="shrink-0" color="#d99a0b" fill="#ffc93c" />
          </div>
        </aside>
      </div>
    </section>
  );
}
