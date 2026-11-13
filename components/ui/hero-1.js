export function Hero({
  eyebrow,
  title,
  subtitle,
  lead,
  ctaLabel,
  ctaHref,
  secondaryLabel,
  secondaryHref,
  note,
  children,
}) {
  return (
    <div className="hero-copy">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="rl">{subtitle}</p>
      <p className="lead">{lead}</p>
      <div className="hero-actions">
        <a className="btn mag" href={ctaHref}>{ctaLabel}<span aria-hidden="true">↗</span></a>
        <a className="btn gh mag" href={secondaryHref}>{secondaryLabel}</a>
      </div>
      <p className="hero-status"><i aria-hidden="true" />{note}</p>
      {children}
    </div>
  )
}
