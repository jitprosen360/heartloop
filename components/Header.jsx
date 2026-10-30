'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { links, nav } from '@/lib/site';

export default function Header() {
  const [spied, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const clickLock = useRef(null);
  // Nav items point at home-page sections, so only highlight one while on the home page.
  const active = usePathname() === '/' ? spied : null;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the nav item for whichever section crosses the upper-middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (clickLock.current) return;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = entry.target.dataset.spy;
          // Rewards lives inside the pricing section, so keep it selected while pricing is in view.
          setActive((prev) => (id === 'pricing' && prev === 'rewards' ? prev : id));
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    document.querySelectorAll('[data-spy]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  const select = (id) => {
    setActive(id);
    setOpen(false);
    clearTimeout(clickLock.current);
    clickLock.current = setTimeout(() => (clickLock.current = null), 1000);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled || open ? 'bg-white/90 shadow-[0_6px_24px_-14px_rgba(40,25,80,0.25)] backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Main" className="hidden h-full items-center gap-7 lg:flex xl:gap-9">
          {nav.map(({ id, label }) => (
            <a
              key={id}
              href={`/#${id}`}
              onClick={() => select(id)}
              aria-current={active === id ? 'true' : undefined}
              className={`relative flex h-full items-center text-[14px] font-semibold transition-colors hover:text-brand ${
                active === id ? 'text-brand' : 'text-ink'
              }`}
            >
              {label}
              <span
                className={`absolute inset-x-0 bottom-3 h-0.5 rounded-full bg-brand transition-transform duration-300 ${
                  active === id ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={links.login} className="btn-outline h-10 rounded-lg px-5 text-[13px]">
            Log in
          </a>
          <a href={links.signup} className="btn-primary h-10 rounded-lg px-5 text-[13px]">
            Get Started
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="grid h-10 w-10 place-items-center rounded-xl border border-brand/30 bg-white text-brand lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`grid transition-[grid-template-rows] duration-300 lg:hidden ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <nav aria-label="Mobile" className="container-x flex flex-col gap-1 pb-5 pt-1">
            {nav.map(({ id, label }) => (
              <a
                key={id}
                href={`/#${id}`}
                onClick={() => select(id)}
                tabIndex={open ? 0 : -1}
                className={`rounded-xl px-4 py-3 text-[15px] font-semibold ${
                  active === id ? 'bg-brand-soft text-brand' : 'text-ink hover:bg-slate-50'
                }`}
              >
                {label}
              </a>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-3">
              <a href={links.login} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} className="btn-outline h-11">
                Log in
              </a>
              <a href={links.signup} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} className="btn-primary h-11">
                Get Started
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
