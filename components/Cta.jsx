import { ArrowRight, Heart } from 'lucide-react';
import { links } from '@/lib/site';

export default function Cta() {
  return (
    <section id="join" data-spy="faq" className="container-x">
      <div
        data-reveal
        className="relative overflow-hidden rounded-[32px] bg-cta-gradient px-6 py-10 text-white shadow-soft sm:px-12 md:rounded-full md:py-9 lg:px-28"
      >
        <div aria-hidden="true" className="absolute left-8 top-1/2 hidden -translate-y-1/2 -rotate-12 flex-col gap-1 lg:flex">
          <Heart size={18} strokeWidth={2.2} className="ml-5" />
          <Heart size={26} strokeWidth={2.2} />
        </div>

        <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-[26px] font-extrabold leading-tight tracking-tight sm:text-[32px]">
              Ready to start your HeartLoop?
            </h2>
            <p className="mt-1.5 text-[15px] text-white/90 sm:text-[16px]">
              Real people. Meaningful conversations. Brighter stories.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={links.signup} className="btn h-12 bg-white px-6 text-[14px] text-brand hover:-translate-y-0.5">
              Join HeartLoop.in <ArrowRight size={17} />
            </a>
            <a href="#pricing" className="btn h-12 border border-white/80 px-6 text-[14px] text-white hover:-translate-y-0.5 hover:bg-white/10">
              Explore Pricing
            </a>
          </div>
        </div>

        <p
          aria-hidden="true"
          className="absolute right-6 top-1/2 hidden -translate-y-1/2 rotate-[-14deg] text-center font-script text-[19px] font-bold leading-[0.9] xl:block"
        >
          Same
          <br />
          People
          <br />
          Brighter
          <br />
          Tomorrows ♡
        </p>
      </div>
    </section>
  );
}
