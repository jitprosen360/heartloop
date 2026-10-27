import Image from 'next/image';
import { Star } from 'lucide-react';
import SectionHeading from './SectionHeading';

const testimonials = [
  {
    name: 'Aditya Sharma',
    city: 'Pune',
    photo: '/images/avatar-aditya.webp',
    quote: 'HeartLoop.in helped me meet someone who truly understands me. The app feels safe, genuine and easy to use.',
  },
  {
    name: 'Priya Nair',
    city: 'Bengaluru',
    photo: '/images/avatar-priya.webp',
    quote: "I love the rewards system and the quality of profiles. I've had some amazing conversations here!",
  },
  {
    name: 'Karan Mehta',
    city: 'Mumbai',
    photo: '/images/avatar-karan.webp',
    quote: 'Finally, a dating app that feels made for real people in India. The verification feature gives me great confidence.',
  },
];

export default function Testimonials() {
  return (
    <section id="stories" data-spy="pricing" className="container-x py-16 sm:py-20">
      <SectionHeading eyebrow="Real stories, real people" title="What our users say" />

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map(({ name, city, photo, quote }) => (
          <figure
            data-reveal
            key={name}
            className="flex gap-4 rounded-[20px] border border-slate-100 bg-white p-5 shadow-card"
          >
            <Image src={photo} alt={name} width={120} height={120} sizes="64px" className="h-16 w-16 shrink-0 rounded-full" />
            <div className="flex flex-1 flex-col">
              <blockquote className="text-[13.5px] leading-relaxed text-muted">“{quote}”</blockquote>
              <figcaption className="mt-3 flex items-end justify-between gap-3">
                <span>
                  <span className="block text-[14px] font-extrabold">{name}</span>
                  <span className="block text-[12.5px] text-muted">{city}</span>
                </span>
                <span className="flex gap-0.5 text-[#ffb52e]" role="img" aria-label="Rated 5 out of 5">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                  ))}
                </span>
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
