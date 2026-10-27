export function LogoMark({ className = 'h-9 w-9', id = 'logo' }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-gradient`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff6b81" />
          <stop offset="1" stopColor="#e8336a" />
        </linearGradient>
      </defs>
      <path
        d="M20 34 6.6 20.9A8.6 8.6 0 0 1 20 9.6a8.6 8.6 0 0 1 13.4 11.3Z"
        fill="none"
        stroke={`url(#${id}-gradient)`}
        strokeWidth="4.2"
        strokeLinejoin="round"
      />
      <path d="M20 26.5 14.6 21.3a3.6 3.6 0 0 1 5.4-4.7 3.6 3.6 0 0 1 5.4 4.7Z" fill="#ff6f61" />
    </svg>
  );
}

export default function Logo({ className = '', id }) {
  return (
    <a href="#home" aria-label="HeartLoop.in home" className={`flex items-center gap-1.5 ${className}`}>
      <LogoMark id={id} />
      <span className="text-[22px] font-extrabold tracking-tight text-ink">HeartLoop.in</span>
    </a>
  );
}
