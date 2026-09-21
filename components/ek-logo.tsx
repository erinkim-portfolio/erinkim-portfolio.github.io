export function EkLogo({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 64 64" role="img" aria-label="Erin Kim logo">
    <path className="logo-frame" d="M8 8h48v48H8z" />
    <path className="logo-mark" fill="none" d="M18 17v30m0-15h15M18 17h18M18 47h18M45 17 30 32l15 15" />
    <g className="logo-route">
      <path className="logo-apex" fill="none" d="M9 50 24 37l10 5 21-28" />
      <circle className="logo-dot" cx="55" cy="14" r="3" />
    </g>
  </svg>;
}
