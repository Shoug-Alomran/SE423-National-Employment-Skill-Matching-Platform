import { Link } from "react-router-dom";
import {
  Bug,
  CalendarBlank,
  CalendarCheck,
  ChartLine,
  CheckCircle,
  Crosshair,
  File,
  Flag,
  GridFour,
  HourglassMedium,
  Share,
  Smiley,
  UsersThree,
} from "@phosphor-icons/react";
import { PageHeader, SectionHeading } from "../components/ui.jsx";
import {
  communicationCategories,
  communicationFields,
  metricParts,
  metrics,
  metricsIntro,
  metricsMapping,
  registerColumns,
  registerSubsections,
  strategyGroups,
} from "../data/stakeholders.js";

const metricIcons = {
  schedule: CalendarCheck,
  quality: Bug,
  matching: Crosshair,
  satisfaction: Smiley,
};

const sections = [
  { to: "#stakeholder-register", label: "Stakeholder Register", done: false },
  { to: "#stakeholder-analysis", label: "Stakeholder Analysis", done: false },
  { to: "#communication-plan", label: "Communications Plan", done: false },
  { to: "#project-metrics", label: "Project Metrics", done: true },
];

function StatusBadge({ done }) {
  const Icon = done ? CheckCircle : HourglassMedium;
  return (
    <span
      className={`inline-flex items-center gap-1 self-start whitespace-nowrap rounded-full py-0.5 px-2.5 sm:self-auto text-xs font-medium ${
        done ? "bg-saudi-light text-saudi" : "bg-amber-100 text-amber-800"
      }`}
    >
      <Icon size={13} weight="bold" /> {done ? "Complete" : "In progress"}
    </span>
  );
}

function Pending({ className = "" }) {
  return (
    <span className={`whitespace-nowrap italic text-gray-400 ${className}`}>
      To be added
    </span>
  );
}

function PlaceholderCard({ id, title, note, children }) {
  return (
    <article className="rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 p-5">
      <h3 className="font-bold text-charcoal">
        {id && <span className="mr-2 text-gray-400">{id}</span>}
        {title}
      </h3>
      {note && <p className="mt-1 text-sm text-charcoal-lighter">{note}</p>}
      {children ?? <Pending className="mt-3 block text-sm" />}
    </article>
  );
}

function Th({ children }) {
  return (
    <th
      scope="col"
      className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-charcoal-lighter"
    >
      {children}
    </th>
  );
}

// A table showing the agreed columns with empty rows, until the content is ready.
function PlaceholderTable({ caption, columns, rowLabels }) {
  return (
    <div className="overflow-hidden rounded-xl border-2 border-dashed border-gray-200 bg-white">
      <div className="custom-scrollbar overflow-x-auto">
        <table className="min-w-[860px] w-full divide-y divide-gray-200 text-sm">
          <caption className="sr-only">{caption}</caption>
          <thead className="bg-gray-50">
            <tr>
              {columns.map((c) => (
                <Th key={c}>{c}</Th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {rowLabels.map((label, i) => (
              <tr key={label ?? i}>
                {columns.map((c, k) => (
                  <td key={c} className="px-5 py-4">
                    {k === 0 && label ? (
                      <span className="font-medium text-charcoal">{label}</span>
                    ) : (
                      <Pending />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function MetricCard({ metric }) {
  const Icon = metricIcons[metric.key];
  return (
    <article className="card p-5 sm:p-8">
      <header className="mb-5 flex items-center gap-4 border-b border-gray-100 pb-5">
        <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-saudi-light text-saudi">
          <Icon size={22} />
        </span>
        <div>
          <p className="eyebrow">Metric {metric.id.split(".")[1]}</p>
          <h3 className="text-xl font-bold text-charcoal">
            {metric.id} {metric.title}
          </h3>
        </div>
      </header>

      <h4 className="eyebrow mb-1.5">Rationale</h4>
      <p className="text-sm leading-relaxed text-charcoal-lighter">
        {metric.rationale}
      </p>

      <div className="mt-6 grid gap-8 lg:grid-cols-2">
        <div>
          <h4 className="eyebrow mb-3">Measurement</h4>
          <dl className="space-y-3 text-sm">
            {metric.measures.map((m) => (
              <div key={m.name}>
                <dt className="font-semibold text-charcoal">{m.name}</dt>
                <dd className="mt-0.5 leading-relaxed text-charcoal-lighter">
                  {m.text}
                </dd>
                {m.formula && (
                  <dd className="mt-1.5 rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-medium text-charcoal">
                    {m.formula}
                  </dd>
                )}
              </div>
            ))}
          </dl>
          <dl className="mt-4 space-y-3 border-t border-gray-100 pt-4 text-sm">
            {[
              ["How often", metric.when],
              ["By whom", metric.owner],
            ].map(([label, text]) => (
              <div key={label}>
                <dt className="font-semibold text-charcoal">{label}</dt>
                <dd className="mt-0.5 leading-relaxed text-charcoal-lighter">
                  {text}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm">
            <p className="flex items-center gap-1.5 font-semibold text-amber-800">
              <Flag size={15} weight="bold" /> {metric.threshold.label}
            </p>
            <p className="mt-1 leading-relaxed text-charcoal-lighter">
              {metric.threshold.text}
            </p>
          </div>
        </div>

        <div>
          <h4 className="eyebrow mb-3">Usage &amp; Benefits</h4>
          <ul className="space-y-3 text-sm">
            {metric.usage.map((u) => (
              <li key={u.name} className="flex gap-2.5">
                <CheckCircle
                  size={18}
                  weight="fill"
                  className="mt-0.5 flex-shrink-0 text-saudi"
                />
                <span className="leading-relaxed text-charcoal-lighter">
                  <strong className="font-semibold text-charcoal">
                    {u.name}:
                  </strong>{" "}
                  {u.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

function MappingTable() {
  return (
    <>
      <div className="hidden overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm lg:block">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <caption className="sr-only">
            Which stakeholders receive each metric, how often and in what format
          </caption>
          <thead className="bg-gray-50">
            <tr>
              <Th>Metric</Th>
              <Th>Stakeholders Receiving It</Th>
              <Th>Frequency</Th>
              <Th>Format</Th>
            </tr>
          </thead>
          {metricsMapping.map((group) => (
            <tbody
              key={group.metric}
              className="divide-y divide-gray-200 border-t border-gray-200 bg-white"
            >
              {group.rows.map((r, i) => (
                <tr key={r.audience}>
                  {i === 0 && (
                    <th
                      scope="rowgroup"
                      rowSpan={group.rows.length}
                      className="w-48 bg-gray-50 px-5 py-4 text-left align-top font-semibold text-charcoal"
                    >
                      {group.metric}
                    </th>
                  )}
                  <td className="px-5 py-4 text-charcoal-lighter">
                    {r.audience}
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 font-medium text-charcoal-lighter">
                    {r.frequency}
                  </td>
                  <td className="px-5 py-4 text-charcoal-lighter">
                    {r.format}
                  </td>
                </tr>
              ))}
            </tbody>
          ))}
        </table>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:hidden">
        {metricsMapping.map((group) => (
          <article key={group.metric} className="card p-5">
            <h4 className="font-bold text-charcoal">{group.metric}</h4>
            <ul className="mt-3 divide-y divide-gray-100 text-sm">
              {group.rows.map((r) => (
                <li key={r.audience} className="py-3 first:pt-0 last:pb-0">
                  <p className="font-medium text-charcoal">{r.audience}</p>
                  <p className="mt-0.5 text-xs font-semibold text-saudi">
                    {r.frequency}
                  </p>
                  <p className="mt-1 text-charcoal-lighter">{r.format}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </>
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
        {/* Progress */}
        <nav aria-label="Artifact 4 sections and their status">
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {sections.map((s, i) => (
              <li key={s.to}>
                <Link
                  to={s.to}
                  className="card flex h-full flex-col items-start gap-2 p-4 transition-shadow hover:shadow-md"
                >
                  <span className="font-semibold text-charcoal">
                    {i + 1}. {s.label}
                  </span>
                  <StatusBadge done={s.done} />
                </Link>
              </li>
            ))}
          </ol>
        </nav>

        {/* 1. Stakeholder register (placeholder) */}
        <section aria-labelledby="stakeholder-register" className="space-y-6">
          <SectionHeading
            id="stakeholder-register"
            icon={UsersThree}
            title="1. Stakeholder Register"
            action={<StatusBadge done={false} />}
          />
          <div className="grid gap-4 md:grid-cols-2">
            {registerSubsections.map((s) => (
              <PlaceholderCard key={s.id} {...s} />
            ))}
          </div>
          <div>
            <h3 className="mb-3 font-bold text-charcoal">
              <span className="mr-2 text-gray-400">1.3</span>
              Stakeholder Register Table
            </h3>
            <PlaceholderTable
              caption="Stakeholder register, to be added"
              columns={registerColumns}
              rowLabels={[null, null, null]}
            />
          </div>
        </section>

        {/* 2. Stakeholder analysis (placeholder) */}
        <section aria-labelledby="stakeholder-analysis" className="space-y-6">
          <SectionHeading
            id="stakeholder-analysis"
            icon={GridFour}
            title="2. Stakeholder Analysis"
            action={<StatusBadge done={false} />}
          />
          <div>
            <h3
              id="power-interest"
              className="mb-3 scroll-mt-24 font-bold text-charcoal"
            >
              <span className="mr-2 text-gray-400">2.1</span>
              Power/Interest Grid
            </h3>
            <div className="rounded-xl border-2 border-dashed border-gray-200 bg-white p-4 sm:p-8">
              <div className="mx-auto flex max-w-3xl items-stretch gap-2 sm:gap-3">
                <span
                  className="self-center text-xs font-bold uppercase tracking-widest text-charcoal-lighter"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  Power
                </span>
                <div className="min-w-0 flex-1">
                  <div className="grid grid-cols-2 gap-1.5">
                    {strategyGroups.map((g) => (
                      <div
                        key={g.title}
                        className="flex min-h-[120px] flex-col items-center justify-center rounded-lg bg-gray-50 p-3 text-center sm:min-h-[140px]"
                      >
                        <span className="font-bold text-charcoal">
                          {g.title}
                        </span>
                        <span className="mt-0.5 text-xs text-gray-400">
                          {g.subtitle}
                        </span>
                        <Pending className="mt-2 text-sm" />
                      </div>
                    ))}
                  </div>
                  <p className="mt-2 text-center text-xs font-bold uppercase tracking-widest text-charcoal-lighter">
                    Interest
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-bold text-charcoal">
              <span className="mr-2 text-gray-400">2.2</span>
              Management Strategies by Group
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Manage Closely",
                "Keep Satisfied",
                "Keep Informed",
                "Monitor",
              ].map((title) => (
                <PlaceholderCard key={title} title={title} />
              ))}
            </div>
          </div>
        </section>

        {/* 3. Communications plan (placeholder) */}
        <section aria-labelledby="communication-plan" className="space-y-6">
          <SectionHeading
            id="communication-plan"
            icon={CalendarBlank}
            title="3. Communications Plan"
            action={<StatusBadge done={false} />}
          />
          <PlaceholderCard id="3.1" title="Communication Categories Overview" />
          <div>
            <h3 className="mb-1 font-bold text-charcoal">
              <span className="mr-2 text-gray-400">3.2</span>
              Communication Entries
            </h3>
            <p className="mb-3 text-sm text-charcoal-lighter">
              <span className="mr-1 font-semibold text-gray-400">3.3</span>
              Each entry covers why it must be conveyed, its audience, format
              and tone, the responsible person, and timing and frequency.
            </p>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {communicationCategories.map((c) => (
                <PlaceholderCard key={c.id} id={c.id} title={c.title}>
                  <dl className="mt-3 space-y-2 text-sm">
                    {communicationFields.map((f) => (
                      <div key={f}>
                        <dt className="eyebrow">{f}</dt>
                        <dd>
                          <Pending />
                        </dd>
                      </div>
                    ))}
                  </dl>
                </PlaceholderCard>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 font-bold text-charcoal">
              <span className="mr-2 text-gray-400">3.4</span>
              Communications Plan Summary Table
            </h3>
            <PlaceholderTable
              caption="Communications plan summary, to be added"
              columns={["Category", ...communicationFields]}
              rowLabels={communicationCategories.map((c) => c.title)}
            />
          </div>
        </section>

        {/* 4. Metrics */}
        <section aria-labelledby="project-metrics" className="space-y-6">
          <SectionHeading
            id="project-metrics"
            icon={ChartLine}
            title="4. Project Metrics"
            action={<StatusBadge done />}
          />
          <p className="max-w-4xl leading-relaxed text-charcoal-lighter">
            {metricsIntro}
          </p>
          {metrics.map((m) => (
            <MetricCard key={m.key} metric={m} />
          ))}
          <p className="max-w-4xl text-sm leading-relaxed text-charcoal-lighter">
            <span className="mr-1 font-semibold text-gray-400">4.5</span>
            {metricParts}
          </p>
          <div>
            <h3
              id="metrics-mapping"
              className="mb-3 flex scroll-mt-24 items-center gap-2 font-bold text-charcoal"
            >
              <Share size={18} className="text-saudi" />
              <span className="text-gray-400">4.6</span>
              Metrics-to-Stakeholder Mapping
            </h3>
            <MappingTable />
          </div>
        </section>
      </div>
    </>
  );
}
