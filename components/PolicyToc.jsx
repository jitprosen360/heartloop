'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUp, ChevronDown, ListOrdered } from 'lucide-react';

// Table of contents for long legal pages: sticky sidebar on desktop, collapsible card on mobile.
export default function PolicyToc({ items }) {
  const [active, setActive] = useState(items[0]?.id);
  const [showTop, setShowTop] = useState(false);
  const mobile = useRef(null);

  useEffect(() => {
    const headings = items.map(({ id }) => document.getElementById(id)).filter(Boolean);
    let frame = 0;
    const update = () => {
      frame = 0;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      let current = headings[0]?.id;
      for (const heading of headings) {
        if (heading.getBoundingClientRect().top > 140) break;
        current = heading.id;
      }
      setActive(atBottom ? headings.at(-1)?.id : current);
      setShowTop(window.scrollY > 600);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [items]);

  const list = (onNavigate) => (
    <ol className="space-y-0.5">
      {items.map(({ id, num, title }) => (
        <li key={id}>
          <a
            href={`#${id}`}
            onClick={onNavigate}
            aria-current={active === id ? 'location' : undefined}
            className={`flex gap-2 rounded-lg px-3 py-2 text-[14px] leading-snug transition-colors ${
              active === id ? 'bg-brand-soft font-semibold text-brand' : 'text-muted hover:bg-slate-50 hover:text-ink'
            }`}
          >
            <span className="w-6 shrink-0 font-semibold tabular-nums">{num}.</span>
            <span>{title}</span>
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <>
      <details ref={mobile} className="group rounded-2xl border border-slate-100 bg-white shadow-card lg:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-[15px] font-bold [&::-webkit-details-marker]:hidden">
          <span className="flex items-center gap-2.5">
            <ListOrdered size={18} className="text-brand" aria-hidden="true" />
            Table of contents
          </span>
          <ChevronDown size={18} className="text-brand transition-transform group-open:rotate-180" aria-hidden="true" />
        </summary>
        <nav aria-label="Table of contents" className="border-t border-slate-100 px-2 py-3">
          {list(() => mobile.current?.removeAttribute('open'))}
        </nav>
      </details>

      <nav
        aria-label="Table of contents"
        className="sticky top-24 hidden max-h-[calc(100vh-7.5rem)] overflow-y-auto pb-4 lg:block"
      >
        <p className="eyebrow px-3">On this page</p>
        <div className="mt-3">{list()}</div>
      </nav>

      {showTop && (
        <a
          href="#policy-top"
          aria-label="Back to top"
          className="fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-full bg-brand text-white shadow-soft transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          <ArrowUp size={20} />
        </a>
      )}
    </>
  );
}
