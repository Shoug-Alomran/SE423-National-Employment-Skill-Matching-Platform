import { Buildings, CalendarBlank, ChartLine, ChartPie, File, GridFour, HardDrives, Lightning, UserPlus, UsersThree } from '@phosphor-icons/react';
import { LevelBadge, PageHeader, SectionHeading } from '../components/ui.jsx';
import { communicationPlan, kpiTargets, metrics, powerInterestMatrix, stakeholders, strategyStyles } from '../data/stakeholders.js';

const metricIcons = { registration: UserPlus, match: Lightning, uptime: HardDrives, retention: Buildings };

function Th({ children }) {
  return (
    <th scope="col" className="whitespace-nowrap px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-charcoal-lighter">
      {children}
    </th>
  );
}

export default function StakeholdersMetrics() {
  return (
    <>
      <PageHeader
        badge="Artifact 04"
        badgeIcon={File}
        title="Stakeholders, Communication & Metrics"
        description="Managing stakeholder relationships, project communication, and performance measurement."
      />

      <div className="container-page space-y-16 py-12 lg:py-16">
        {/* 1. Stakeholder analysis */}
        <section aria-labelledby="stakeholder-analysis">
          <SectionHeading id="stakeholder-analysis" icon={UsersThree} title="1. Stakeholder Analysis" />

          <div className="hidden overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm lg:block">
            <div className="custom-scrollbar overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <Th>Stakeholder</Th>
                    <Th>Classification</Th>
                    <Th>Power</Th>
                    <Th>Interest</Th>
                    <Th>How they affect the project</Th>
                    <Th>Communication needs</Th>
                    <Th>Management strategy</Th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white text-sm">
                  {stakeholders.map((s) => (
                    <tr key={s.name} className="transition-colors hover:bg-gray-50">
                      <td className="px-5 py-4 font-medium text-charcoal">{s.name}</td>
                      <td className="whitespace-nowrap px-5 py-4">
                        <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${s.classTone}`}>{s.classification}</span>
                      </td>
                      <td className="px-5 py-4"><LevelBadge level={s.power} /></td>
                      <td className="px-5 py-4"><LevelBadge level={s.interest} /></td>
                      <td className="min-w-[200px] px-5 py-4 text-charcoal-lighter">{s.effect}</td>
                      <td className="min-w-[200px] px-5 py-4 text-charcoal-lighter">{s.communication}</td>
                      <td className={`whitespace-nowrap px-5 py-4 font-medium ${strategyStyles[s.strategy]}`}>{s.strategy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:hidden">
            {stakeholders.map((s) => (
              <article key={s.name} className="card p-5">
                <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                  <h3 className="font-bold text-charcoal">{s.name}</h3>
                  <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${s.classTone}`}>{s.classification}</span>
                </div>
                <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-charcoal-lighter">
                  <span className="flex items-center gap-1.5">Power <LevelBadge level={s.power} /></span>
                  <span className="flex items-center gap-1.5">Interest <LevelBadge level={s.interest} /></span>
                </div>
                <dl className="space-y-2 border-t border-gray-100 pt-3 text-sm">
                  <div>
                    <dt className="eyebrow">Effect on project</dt>
                    <dd className="mt-0.5 text-charcoal-lighter">{s.effect}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Communication needs</dt>
                    <dd className="mt-0.5 text-charcoal-lighter">{s.communication}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Strategy</dt>
                    <dd className={`mt-0.5 font-medium ${strategyStyles[s.strategy]}`}>{s.strategy}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        {/* 2. Power–interest matrix */}
        <section aria-labelledby="power-interest">
          <SectionHeading id="power-interest" icon={GridFour} title="2. Power–Interest Matrix" />
          <div className="card flex items-stretch gap-2 p-4 sm:gap-4 sm:p-10">
            <div className="flex items-center">
              <span className="text-xs font-bold uppercase tracking-widest text-charcoal-lighter sm:text-sm" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                Power
              </span>
            </div>
            <div className="flex min-w-0 flex-1 flex-col items-center">
              <div className="flex w-full max-w-3xl">
                <div className="mr-2 flex flex-col justify-between py-4 text-xs font-medium text-gray-400">
                  <span>High</span>
                  <span>Low</span>
                </div>
                <div className="grid flex-1 grid-cols-2 grid-rows-2 gap-1 border-2 border-gray-300 bg-gray-200 p-1 sm:aspect-[4/3]">
                  {powerInterestMatrix.map((q) => (
                    <div key={q.title} className={`flex min-h-[150px] flex-col items-center justify-center p-3 text-center transition-colors sm:p-6 ${q.tone}`}>
                      <span className={`mb-1 text-base font-bold sm:text-lg ${q.titleTone}`}>{q.title}</span>
                      <span className="mb-2 hidden text-[11px] uppercase tracking-wide text-gray-400 sm:block">{q.subtitle}</span>
                      <ul className={`space-y-0.5 text-xs sm:text-sm ${q.textTone}`}>
                        {q.members.map((m) => (
                          <li key={m}>{m}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ml-10 mt-2 flex w-full max-w-3xl justify-between pl-2 text-xs font-medium text-gray-400">
                <span>Low</span>
                <span>High</span>
              </div>
              <span className="mt-2 text-xs font-bold uppercase tracking-widest text-charcoal-lighter sm:text-sm">Interest</span>
            </div>
          </div>
        </section>

        {/* 3. Communication plan */}
        <section aria-labelledby="communication-plan">
          <SectionHeading id="communication-plan" icon={CalendarBlank} title="3. Communication Plan" />

          <div className="hidden overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm lg:block">
            <div className="custom-scrollbar overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <Th>Information</Th>
                    <Th>Why It Matters</Th>
                    <Th>Audience</Th>
                    <Th>Method</Th>
                    <Th>Responsible Person</Th>
                    <Th>Frequency</Th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white text-sm">
                  {communicationPlan.map((c) => (
                    <tr key={c.info} className="transition-colors hover:bg-gray-50">
                      <td className="whitespace-nowrap px-5 py-4 font-medium text-charcoal">{c.info}</td>
                      <td className="min-w-[220px] px-5 py-4 text-charcoal-lighter">{c.why}</td>
                      <td className="px-5 py-4 text-charcoal-lighter">{c.audience}</td>
                      <td className="px-5 py-4 text-charcoal-lighter">{c.method}</td>
                      <td className="whitespace-nowrap px-5 py-4 text-charcoal-lighter">{c.owner}</td>
                      <td className="whitespace-nowrap px-5 py-4 font-medium text-charcoal-lighter">{c.frequency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:hidden">
            {communicationPlan.map((c) => (
              <article key={c.info} className="card p-5">
                <div className="mb-2 flex items-start justify-between gap-2">
                  <h3 className="font-bold text-charcoal">{c.info}</h3>
                  <span className="whitespace-nowrap rounded-full bg-saudi-light px-2.5 py-0.5 text-xs font-medium text-saudi">{c.frequency}</span>
                </div>
                <p className="mb-3 text-sm text-charcoal-lighter">{c.why}</p>
                <dl className="grid grid-cols-1 gap-2 border-t border-gray-100 pt-3 text-sm sm:grid-cols-3 md:grid-cols-1">
                  <div>
                    <dt className="eyebrow">Audience</dt>
                    <dd className="text-charcoal-lighter">{c.audience}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Method</dt>
                    <dd className="text-charcoal-lighter">{c.method}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Responsible</dt>
                    <dd className="text-charcoal-lighter">{c.owner}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        {/* 4. Metrics */}
        <section aria-labelledby="project-metrics">
          <SectionHeading id="project-metrics" icon={ChartLine} title="4. Project Metrics" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {metrics.map((m) => {
              const Icon = metricIcons[m.key];
              return (
                <article key={m.key} className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-colors hover:border-saudi/50">
                  <div className="mb-4 flex items-center justify-between gap-3 border-b border-gray-100 pb-4">
                    <h3 className="text-lg font-bold text-charcoal">{m.title}</h3>
                    <span className={`inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${m.tone}`}>
                      <Icon size={16} weight="bold" />
                    </span>
                  </div>
                  <dl className="flex flex-grow flex-col space-y-4">
                    <div>
                      <dt className="eyebrow text-charcoal-lighter">Rationale</dt>
                      <dd className="mt-1 text-sm text-charcoal">{m.rationale}</dd>
                    </div>
                    <div>
                      <dt className="eyebrow text-charcoal-lighter">How it is measured</dt>
                      <dd className="mt-1 text-sm text-charcoal">{m.measure}</dd>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <dt className="eyebrow text-charcoal-lighter">Frequency</dt>
                        <dd className="mt-1 text-sm font-medium text-charcoal">{m.frequency}</dd>
                      </div>
                      <div>
                        <dt className="eyebrow text-charcoal-lighter">Responsible</dt>
                        <dd className="mt-1 text-sm font-medium text-charcoal">{m.responsible}</dd>
                      </div>
                    </div>
                    <div className="mt-auto pt-2">
                      <dt className="eyebrow text-saudi">Benefit to Project</dt>
                      <dd className="mt-1 text-sm text-charcoal">{m.benefit}</dd>
                    </div>
                  </dl>
                </article>
              );
            })}
          </div>
        </section>

        {/* 5. Performance overview */}
        <section aria-labelledby="performance-overview">
          <SectionHeading
            id="performance-overview"
            icon={ChartPie}
            title="5. Performance Overview"
            description="Target values for the future real-time dashboard. Live figures will be tracked after launch."
          />
          <div className="card space-y-6 p-5 sm:p-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {kpiTargets.map((k) => (
                <div key={k.label} className="flex h-32 flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-200 bg-gray-50/50 p-6 text-center">
                  <span className="text-sm font-medium text-gray-500">{k.label}</span>
                  <span className="mt-2 text-base font-semibold text-charcoal">{k.target}</span>
                  <span className="mt-1 text-[11px] uppercase tracking-wide text-gray-400">Target</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="flex h-56 flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-200 bg-gray-50/50 p-6 text-center lg:col-span-2 lg:h-64">
                <ChartLine size={32} className="mb-2 text-gray-300" />
                <span className="font-medium text-gray-400">Monthly User Growth Chart</span>
                <span className="mt-1 text-xs text-gray-400">Populated from platform analytics after launch</span>
              </div>
              <div className="flex h-56 flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-200 bg-gray-50/50 p-6 text-center lg:h-64">
                <ChartPie size={32} className="mb-2 text-gray-300" />
                <span className="font-medium text-gray-400">Demographics Breakdown</span>
                <span className="mt-1 text-xs text-gray-400">Populated from platform analytics after launch</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
