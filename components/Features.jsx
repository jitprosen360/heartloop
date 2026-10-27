import { Coins, Heart, MessageCircleMore, UserRound } from 'lucide-react';
import SectionHeading from './SectionHeading';

const features = [
  {
    icon: Heart,
    title: 'Smart Matching',
    text: 'Our intelligent matching system suggests compatible people based on your interests, values and preferences.',
    card: 'from-[#fff0f5] to-[#fffafc]',
    wrap: 'bg-[#ffdce7]',
    color: '#f23d6d',
    fill: '#ff5c84',
  },
  {
    icon: MessageCircleMore,
    title: 'Secure Chat',
    text: 'Chat with confidence using end-to-end encryption and advanced safety measures.',
    card: 'from-[#f6f0ff] to-[#fcfaff]',
    wrap: 'bg-[#e9dcff]',
    color: '#ffffff',
    fill: '#9b6bff',
  },
  {
    icon: Coins,
    title: 'Rewards & Coins',
    text: 'Get rewarded for being active. Use coins to unlock premium features, boosts and better conversations.',
    card: 'from-[#fff6e9] to-[#fffbf6]',
    wrap: 'bg-[#ffecc4]',
    color: '#c98a0c',
    fill: '#ffc93c',
  },
  {
    icon: UserRound,
    title: 'Virtual Friend',
    text: 'Not ready to match yet? Try our Virtual Friend – an AI conversation companion to chat, unwind and build confidence.',
    card: 'from-[#f0f1ff] to-[#fafaff]',
    wrap: 'bg-[#dfe1ff]',
    color: '#5b5bf0',
    fill: '#8a8cff',
  },
];

export default function Features() {
  return (
    <section id="features" data-spy="features" className="container-x py-16 sm:py-20">
      <SectionHeading
        eyebrow="Why HeartLoop.in"
        title="More than just a dating app"
        subtitle="Thoughtful features to help you find real connections, safely and enjoyably."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, text, card, wrap, color, fill }) => (
          <div data-reveal key={title}>
            <article
              className={`h-full rounded-[22px] border border-white bg-gradient-to-br ${card} p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-float`}
            >
              <span className={`grid h-14 w-14 place-items-center rounded-full ${wrap}`}>
                <Icon size={28} color={color} fill={fill} strokeWidth={2} />
              </span>
              <h3 className="mt-4 text-[19px] font-extrabold">{title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">{text}</p>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
