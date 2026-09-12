// Small shared building blocks used across pages.

export function PageHeader({ badge, badgeIcon: BadgeIcon, title, description }) {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="container-page py-12 md:py-16">
        <div className="max-w-4xl">
          {badge && (
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-saudi/20 bg-saudi-light px-3 py-1 text-xs font-semibold uppercase tracking-wider text-saudi">
              {BadgeIcon && <BadgeIcon size={14} weight="bold" />}
              {badge}
            </div>
          )}
          <h1 className="text-4xl font-bold tracking-tight text-charcoal-dark md:text-5xl">{title}</h1>
          {description && (
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">{description}</p>
          )}
        </div>
      </div>
    </header>
  );
}

export function SectionHeading({ id, icon: Icon, number, title, description, action }) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 id={id} className="flex items-center gap-3 text-2xl font-bold text-charcoal md:text-3xl">
          {number != null && (
            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-saudi text-sm font-bold text-white">
              {number}
            </span>
          )}
          {Icon && (
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-saudi-light text-saudi">
              <Icon size={22} />
            </span>
          )}
          {title}
        </h2>
        {description && <p className="mt-2 text-sm text-slate-500 md:text-base">{description}</p>}
      </div>
      {action}
    </div>
  );
}

const levelStyles = {
  High: 'bg-red-100 text-red-800',
  Medium: 'bg-amber-100 text-amber-800',
  Low: 'bg-slate-100 text-slate-700',
};

export function LevelBadge({ level }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${levelStyles[level] ?? levelStyles.Low}`}>
      {level}
    </span>
  );
}
