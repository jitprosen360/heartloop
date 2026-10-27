export default function SectionHeading({ eyebrow, title, subtitle, align = 'center', className = '' }) {
  const centered = align === 'center';
  return (
    <div data-reveal className={`${centered ? 'mx-auto text-center' : ''} max-w-2xl ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="heading">{title}</h2>
      {subtitle && <p className="lead">{subtitle}</p>}
    </div>
  );
}
