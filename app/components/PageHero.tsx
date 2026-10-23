/**
 * Inner-page header in the homepage style: centred copy over a shorter crop
 * of the golden-hour desert illustration.
 */
export default function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <header className="hero page-hero">
      <div className="wrap hero-copy">
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        {children}
      </div>
      <div className="hero-art page-hero-art" aria-hidden="true">
        <img src="/art/hero-desert.svg" alt="" />
      </div>
    </header>
  );
}
