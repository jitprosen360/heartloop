import Image from 'next/image';
import { Check, CircleCheck, Flag, LockKeyhole, MapPin, ScanFace, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';

const items = [
  {
    icon: ScanFace,
    title: 'Face & Profile Verification',
    text: 'Verify your identity to meet real people.',
    wrap: 'bg-[#e8f1ff] text-[#3b82f6]',
  },
  {
    icon: Flag,
    title: 'Block & Report Tools',
    text: 'Easily block or report suspicious behaviour.',
    wrap: 'bg-[#ffe6ee] text-brand',
  },
  {
    icon: LockKeyhole,
    title: 'Privacy-First Design',
    text: 'Your data stays private and secure.',
    wrap: 'bg-[#e4f9ee] text-[#16a34a]',
  },
  {
    icon: MapPin,
    title: 'Approximate Location Sharing',
    text: 'We show only approximate locations to protect your privacy.',
    wrap: 'bg-[#f1e8ff] text-[#9b5cf6]',
  },
];

const checklist = ['Real people, real profiles', 'Encrypted conversations', 'Strict moderation', 'Safe and respectful community'];

function SafetyVisual() {
  return (
    <div data-reveal className="relative mx-auto aspect-square w-full max-w-[540px] sm:aspect-[13/10]">
      <div
        aria-hidden="true"
        className="absolute inset-[4%_0_2%_4%]"
        style={{
          borderRadius: '46% 54% 48% 52% / 52% 45% 55% 48%',
          background:
            'radial-gradient(circle at 28% 30%, #ffe7e1 0, transparent 45%), radial-gradient(circle at 80% 78%, #efe6ff 0, transparent 45%), #fff6f5',
        }}
      />
      <Sparkles aria-hidden="true" className="absolute left-[4%] top-[30%] h-5 w-5 text-[#f6a5c0]" />
      <Sparkles aria-hidden="true" className="absolute right-[3%] top-[48%] h-4 w-4 text-[#c3a6ff]" />
      <Sparkles aria-hidden="true" className="absolute bottom-[30%] left-[44%] h-4 w-4 text-[#c3a6ff]" />

      <figure className="absolute left-[12%] top-[3%] w-[31%] rounded-2xl border-[5px] border-white bg-white shadow-float">
        <Image
          src="/images/verified-profile.webp"
          alt="Verified member profile photo"
          width={270}
          height={360}
          sizes="170px"
          className="h-auto w-full rounded-xl"
        />
        <span className="absolute -bottom-3 -right-3 grid h-9 w-9 place-items-center rounded-full border-[3px] border-white bg-[#3b82f6] text-white">
          <Check size={18} strokeWidth={3} />
        </span>
      </figure>

      <div className="absolute left-[5%] top-[57%] flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-float">
        <CircleCheck size={22} className="shrink-0 text-white" fill="#22c55e" />
        <p className="text-[11px] leading-tight text-muted sm:text-[12px]">
          <strong className="block text-ink">Verified Profile</strong>Photo verified
        </p>
      </div>

      <div className="absolute right-0 top-0 w-[47%] rounded-2xl bg-white p-3.5 shadow-float sm:p-4">
        <p className="text-[12px] font-extrabold sm:text-[13px]">Your Safety, Our Priority</p>
        <ul className="mt-2.5 space-y-2">
          {checklist.map((item) => (
            <li key={item} className="flex items-start gap-1.5 text-[10.5px] leading-snug text-muted sm:text-[12px]">
              <CircleCheck size={15} className="mt-px shrink-0 text-white" fill="#22c55e" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <svg aria-hidden="true" viewBox="0 0 64 74" className="absolute bottom-[8%] left-[22%] w-[12%] drop-shadow-lg">
        <defs>
          <linearGradient id="shield-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#60a5fa" />
            <stop offset="1" stopColor="#2563eb" />
          </linearGradient>
        </defs>
        <path d="M32 2 60 12v22c0 18-12 31-28 38C16 65 4 52 4 34V12Z" fill="url(#shield-gradient)" />
        <rect x="21" y="33" width="22" height="17" rx="3" fill="#fff" />
        <path d="M25 33v-5a7 7 0 0 1 14 0v5" fill="none" stroke="#fff" strokeWidth="3.5" />
        <circle cx="32" cy="41.5" r="2.6" fill="#2563eb" />
      </svg>

      <div aria-hidden="true" className="absolute bottom-[9%] left-[46%] grid aspect-square w-[20%] place-items-center">
        <span className="absolute inset-0 rounded-full border border-dashed border-brand/30" />
        <span className="absolute inset-[22%] rounded-full border border-brand/20 bg-brand/5" />
        <MapPin size={26} className="relative -mt-2 text-white" fill="#f23d6d" />
      </div>

      <div className="absolute bottom-[7%] right-0 w-[36%] rounded-2xl bg-white p-3 shadow-float sm:p-3.5">
        <p className="flex items-center gap-1.5 text-[10.5px] font-bold sm:text-[12px]">
          <CircleCheck size={15} className="shrink-0 text-white" fill="#22c55e" />
          Approximate location
        </p>
        <p className="mt-1.5 text-[12px] font-extrabold sm:text-[13px]">Bengaluru</p>
        <p className="text-[10.5px] text-muted sm:text-[12px]">(5–10 km range)</p>
      </div>
    </div>
  );
}

export default function Safety() {
  return (
    <section id="safety" data-spy="safety" className="container-x grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-8">
      <div>
        <SectionHeading
          align="left"
          eyebrow="Your safety comes first"
          title="Built with safety in mind"
          subtitle="We're committed to creating a safe, respectful and authentic space for real connections."
          className="mx-0"
        />
        <ul className="mt-9 grid gap-x-6 gap-y-7 sm:grid-cols-2">
          {items.map(({ icon: Icon, title, text, wrap }) => (
            <li data-reveal key={title} className="flex items-start gap-3.5">
              <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-full ${wrap}`}>
                <Icon size={22} strokeWidth={2.2} />
              </span>
              <div>
                <h3 className="text-[15px] font-extrabold">{title}</h3>
                <p className="mt-1 text-[13.5px] leading-relaxed text-muted">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <SafetyVisual />
    </section>
  );
}
