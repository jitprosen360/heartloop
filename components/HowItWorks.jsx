import Image from 'next/image';
import SectionHeading from './SectionHeading';

const steps = [
  {
    title: 'Create Profile',
    text: 'Sign up, verify your profile and tell us about yourself.',
    image: { src: '/images/step-profile.webp', width: 272, height: 236 },
  },
  {
    title: 'Match & Connect',
    text: 'Discover compatible people and get meaningful matches.',
    image: { src: '/images/step-match.webp', width: 240, height: 236 },
  },
  {
    title: 'Chat & Build Chemistry',
    text: 'Chat securely, share interests and let the conversation flow naturally.',
    image: { src: '/images/step-chat.webp', width: 240, height: 236 },
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      data-spy="features"
      className="mx-2 rounded-[36px] py-14 sm:mx-4 sm:rounded-[56px] sm:py-16"
      style={{ background: 'linear-gradient(110deg, #fff0f2 0%, #fff6f5 55%, #fdf0f7 100%)' }}
    >
      <div className="container-x">
        <SectionHeading eyebrow="Get started in minutes" title="How HeartLoop.in works" />

        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map(({ title, text, image }, i) => (
            <li data-reveal key={title}>
              <article className="relative flex h-full min-h-[150px] items-center overflow-hidden rounded-[22px] bg-white p-5 pr-0 shadow-card">
                <div className="relative z-10 flex-1 pr-2">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-brand text-[15px] font-extrabold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-3 text-[17px] font-extrabold leading-snug">{title}</h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted">{text}</p>
                </div>
                <Image
                  src={image.src}
                  alt=""
                  width={image.width}
                  height={image.height}
                  sizes="136px"
                  className="h-auto w-[120px] shrink-0 self-end lg:w-[136px]"
                />
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
