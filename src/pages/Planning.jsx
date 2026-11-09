import { useState } from "react";
import {
  Calculator,
  CalendarCheck,
  CaretDown,
  ChatsCircle,
  CheckCircle,
  Clock,
  Flask,
  Gauge,
  GitDiff,
  Info,
  Kanban,
  ListChecks,
  PuzzlePiece,
  RocketLaunch,
  Target,
  TreeStructure,
} from "@phosphor-icons/react";
import {
  ArtifactDownload,
  LevelBadge,
  PageHeader,
  SectionHeading,
} from "../components/ui.jsx";
import {
  backlog,
  backlogTotals,
  changesFromA1,
  changesToA2,
  estimation,
  meetings,
  pointScale,
  priorityLevels,
  release1,
  scrumElements,
  sprint1,
  sprint6Note,
  sprintSummary,
  wbs,
} from "../data/planning.js";

const releaseTones = {
  1: { bar: "bg-saudi", chip: "bg-saudi-light text-saudi" },
  2: { bar: "bg-blue-500", chip: "bg-blue-100 text-blue-800" },
  3: { bar: "bg-amber-500", chip: "bg-amber-100 text-amber-800" },
};

const releaseOf = Object.fromEntries(
  sprintSummary.map((s) => [s.sprint, s.release]),
);

function WbsView() {
  return (
    <div className="flex flex-col items-center">
      <div className="z-10 flex items-center gap-2 rounded-lg border-b-4 border-saudi-400 bg-charcoal px-6 py-3 font-semibold text-white shadow-md">
        <RocketLaunch size={20} className="text-saudi-300" /> {wbs.root}
      </div>
      <div className="h-6 w-0.5 bg-slate-300" />
      <ol className="grid w-full grid-cols-1 gap-4 border-t-2 border-slate-200 pt-6 sm:grid-cols-2 lg:grid-cols-4">
        {wbs.phases.map((p) => (
          <li
            key={p.id}
            className="rounded-lg border border-slate-200 bg-slate-50 p-4 transition-colors hover:border-saudi"
          >
            <p className="mb-1 text-xs font-semibold text-saudi">{p.id}</p>
            <h3 className="mb-2 font-semibold text-charcoal">{p.title}</h3>
            <p className="text-sm leading-relaxed text-slate-600">{p.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function SprintLoadChart() {
  const max = 30;
  const { low, high } = estimation.capacity;
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-sm font-semibold text-charcoal">
          Story points per sprint
        </h3>
        <div className="flex flex-wrap gap-2 text-xs">
          {[1, 2, 3].map((r) => (
            <span
              key={r}
              className={`rounded-full px-2 py-0.5 font-medium ${releaseTones[r].chip}`}
            >
              Release {r}
            </span>
          ))}
          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-slate-600">
            Shaded band = {low}–{high} SP capacity
          </span>
        </div>
      </div>
      <ul className="space-y-2">
        {sprintSummary.map((s) => (
          <li key={s.sprint} className="flex items-center gap-3">
            <span className="w-16 flex-shrink-0 text-xs font-medium text-slate-600">
              Sprint {s.sprint}
            </span>
            <div className="relative h-5 flex-1 rounded bg-slate-50">
              <div
                className="absolute inset-y-0 bg-slate-200"
                style={{
                  left: `${(low / max) * 100}%`,
                  width: `${((high - low) / max) * 100}%`,
                }}
                aria-hidden="true"
              />
              <div
                className={`absolute inset-y-1 left-0 rounded ${releaseTones[s.release].bar}`}
                style={{ width: `${(s.points / max) * 100}%` }}
                title={s.focus}
              />
            </div>
            <span className="w-10 flex-shrink-0 text-right text-xs font-semibold text-charcoal">
              {s.points}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-4 flex items-start gap-1.5 text-xs text-slate-500">
        <Info size={14} className="mt-0.5 flex-shrink-0" /> {sprint6Note}
      </p>
    </div>
  );
}

const filters = [
  { id: "all", label: "All", match: () => true },
  { id: "r1", label: "Release 1", match: (b) => releaseOf[b.sprint] === 1 },
  { id: "r2", label: "Release 2", match: (b) => releaseOf[b.sprint] === 2 },
  { id: "r3", label: "Release 3", match: (b) => releaseOf[b.sprint] === 3 },
];

function BacklogTable() {
  const [filter, setFilter] = useState("all");
  const rows = backlog.filter(filters.find((f) => f.id === filter).match);
  const points = rows.reduce((sum, b) => sum + (b.points ?? 0), 0);

  return (
    <div className="rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-4 py-3">
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Filter backlog by release"
        >
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                filter === f.id
                  ? "border-saudi bg-saudi-light text-saudi"
                  : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <span className="text-xs text-slate-500">
          {rows.length} items · {points} SP
        </span>
      </div>
      <div className="custom-scrollbar max-h-[36rem] overflow-auto">
        <table className="min-w-[720px] w-full text-left text-sm">
          <thead className="sticky top-0 bg-slate-50 text-xs uppercase tracking-wider text-slate-700">
            <tr>
              {["ID", "Epic", "User Story", "SP", "Priority", "Sprint"].map(
                (h) => (
                  <th key={h} scope="col" className="px-4 py-3 font-semibold">
                    {h}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-600">
            {rows.map((b) => (
              <tr key={b.id} className={b.points == null ? "bg-purple-50" : ""}>
                <td className="whitespace-nowrap px-4 py-3 font-semibold text-charcoal">
                  {b.id}
                  {b.points == null && (
                    <Flask
                      size={14}
                      className="ml-1 inline text-purple-600"
                      aria-label="Spike"
                    />
                  )}
                </td>
                <td className="px-4 py-3 text-xs">{b.epic}</td>
                <td className="px-4 py-3">{b.story}</td>
                <td className="px-4 py-3 text-center font-semibold text-charcoal">
                  {b.points ?? "–"}
                </td>
                <td className="px-4 py-3">
                  <LevelBadge level={b.priority} />
                </td>
                <td className="px-4 py-3 text-center">
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${releaseTones[releaseOf[b.sprint]].chip}`}
                  >
                    {b.sprint}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AcceptanceItem({ story }) {
  return (
    <details className="group rounded-lg border border-slate-200 bg-white shadow-sm">
      <summary className="flex cursor-pointer list-none items-start gap-3 p-4">
        <span className="mt-0.5 rounded bg-slate-100 px-1.5 text-xs font-semibold leading-5 text-charcoal">
          {story.id}
        </span>
        <span className="flex-1 text-sm text-slate-700">{story.story}</span>
        <span className="whitespace-nowrap rounded bg-slate-200 px-1.5 text-xs leading-5 text-slate-700">
          {story.points} SP
        </span>
        <CaretDown
          size={16}
          className="mt-0.5 flex-shrink-0 text-slate-400 transition-transform group-open:rotate-180"
        />
      </summary>
      <ul className="space-y-2 border-t border-slate-100 px-4 py-3">
        {sprint1.acceptance[story.id].map((c) => (
          <li key={c} className="flex items-start gap-2 text-sm text-slate-600">
            <CheckCircle
              size={16}
              className="mt-0.5 flex-shrink-0 text-saudi"
            />{" "}
            {c}
          </li>
        ))}
      </ul>
    </details>
  );
}

export default function Planning() {
  const sprint1Stories = backlog.filter((b) => b.sprint === 1);
  const sprint1Points = sprint1Stories.reduce((sum, s) => sum + s.points, 0);
  const { low, high } = estimation.capacity;

  return (
    <>
      <PageHeader
        badge="Artifact 03"
        badgeIcon={Kanban}
        title="Estimation & Scheduling"
        description="How Fursah is broken down, estimated and scheduled under Scrum: a hybrid WBS, a 236-point product backlog, the Release 1 sprint plan and a fully specified Sprint 1."
      />

      <div className="container-page space-y-12 py-12 lg:py-16">
        <ArtifactDownload artifact={3} />

        <section aria-labelledby="wbs" className="card p-5 sm:p-8">
          <SectionHeading
            id="wbs"
            icon={TreeStructure}
            title="Work Breakdown Structure"
            description="A hybrid WBS: seven phases from planning to scope review, delivered iteratively through Scrum sprints."
          />
          <WbsView />
        </section>

        <section aria-labelledby="backlog" className="space-y-6">
          <SectionHeading
            id="backlog"
            icon={ListChecks}
            title="Release Plan & Product Backlog"
            description="User stories follow “As a [user], I want [feature], so that [benefit]”, grouped into epics, estimated in story points and prioritized."
          />
          <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {backlogTotals.map((t) => (
              <div
                key={t.label}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <dt className="mb-1 text-sm font-medium text-slate-500">
                  {t.label}
                </dt>
                <dd className="text-3xl font-bold text-charcoal-dark">
                  {t.value}
                </dd>
                {t.note && (
                  <dd className="mt-1 text-xs text-slate-400">{t.note}</dd>
                )}
              </div>
            ))}
          </dl>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="space-y-6">
              <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="mb-3 text-sm font-semibold text-charcoal">
                  Story point scale (Fibonacci)
                </h3>
                <ul className="space-y-2">
                  {pointScale.map((p) => (
                    <li
                      key={p.points}
                      className="flex items-start gap-3 text-sm text-slate-600"
                    >
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded bg-saudi-light text-xs font-bold text-saudi">
                        {p.points}
                      </span>
                      {p.meaning}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="mb-3 text-sm font-semibold text-charcoal">
                  Priority levels
                </h3>
                <ul className="space-y-3">
                  {priorityLevels.map((p) => (
                    <li
                      key={p.level}
                      className="flex items-start gap-3 text-sm text-slate-600"
                    >
                      <LevelBadge level={p.level} /> <span>{p.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-2">
              <SprintLoadChart />
            </div>
          </div>

          <BacklogTable />
        </section>

        <section aria-labelledby="schedule" className="card p-5 sm:p-8">
          <SectionHeading
            id="schedule"
            icon={CalendarCheck}
            title="Scrum Process & Release 1 Schedule"
            description={release1.summary}
          />
          <ol className="relative space-y-4 border-l-2 border-slate-200 pl-6">
            {release1.sprints.map((s, i) => (
              <li key={s.name} className="relative">
                <span
                  className={`absolute -left-[33px] top-1 h-4 w-4 rounded-full border-4 border-white shadow ${i === 0 ? "bg-slate-300" : "bg-saudi"}`}
                />
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="font-semibold text-charcoal">
                      {s.name}{" "}
                      <span className="font-normal text-slate-500">
                        · {s.theme}
                      </span>
                    </h3>
                    <span className="flex items-center gap-1 text-xs font-medium text-saudi">
                      <Clock size={14} /> {s.weeks}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600">{s.activities}</p>
                  <p className="mt-2 text-xs text-slate-500">
                    <span className="font-semibold text-slate-700">
                      Deliverable:
                    </span>{" "}
                    {s.deliverable}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-6 flex items-start gap-1.5 text-sm text-slate-500">
            <Info size={16} className="mt-0.5 flex-shrink-0" /> {release1.later}
          </p>
        </section>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <section aria-labelledby="ceremonies" className="card p-5 sm:p-8">
            <SectionHeading
              id="ceremonies"
              icon={ChatsCircle}
              title="Scrum Meetings"
              description="Events the team holds in every sprint."
            />
            <ul className="divide-y divide-slate-100">
              {meetings.map((m) => (
                <li key={m.name} className="py-3 first:pt-0 last:pb-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-sm font-semibold text-charcoal">
                      {m.name}
                    </h3>
                    <span className="text-xs text-slate-500">
                      {m.frequency} · {m.duration}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-slate-600">{m.purpose}</p>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="scrum-elements" className="card p-5 sm:p-8">
            <SectionHeading
              id="scrum-elements"
              icon={PuzzlePiece}
              title="Additional Scrum Elements"
              description="Practices layered on top of the core events."
            />
            <ul className="space-y-4">
              {scrumElements.map((e) => (
                <li
                  key={e.name}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-4"
                >
                  <h3 className="text-sm font-semibold text-charcoal">
                    {e.name}
                  </h3>
                  <p className="mt-0.5 text-xs text-slate-500">
                    {e.description}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">{e.use}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section aria-labelledby="estimation" className="card p-5 sm:p-8">
          <SectionHeading
            id="estimation"
            icon={Calculator}
            title="Velocity & Estimation"
            description="How stories are sized and how much the team expects to deliver per sprint."
          />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="space-y-4">
              <div className="rounded-md border border-slate-300 bg-slate-50 px-3 py-2.5">
                <p className="font-medium text-slate-900">
                  {estimation.technique}
                </p>
                <p className="text-xs text-slate-500">{estimation.scale}</p>
              </div>
              <p className="text-sm leading-relaxed text-slate-600">
                {estimation.process}
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                {estimation.meaning}
              </p>
            </div>

            <div>
              <h3 className="eyebrow mb-3">Reference stories</h3>
              <ul className="space-y-3">
                {estimation.references.map((r) => (
                  <li
                    key={r.id}
                    className="flex gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3"
                  >
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-saudi text-sm font-bold text-white">
                      {r.points}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-charcoal">
                        {r.id}: {r.title}
                      </p>
                      <p className="text-xs text-slate-500">{r.reason}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col">
              <h3 className="eyebrow mb-3 flex items-center gap-1.5">
                <Gauge size={14} /> Forecasted velocity
              </h3>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-center">
                <p className="text-xs text-slate-500">
                  Midpoint of planned capacity
                </p>
                <p className="my-2 font-mono text-sm text-slate-700">
                  ({low} + {high}) ÷ 2 = {(low + high) / 2}
                </p>
                <p className="text-3xl font-semibold text-charcoal">
                  ≈ 22–23 SP
                </p>
                <p className="text-xs font-medium uppercase text-slate-500">
                  per two-week sprint
                </p>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-500">
                {estimation.capacityNote}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">
                {estimation.forecastNote}
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="sprint-1" className="card p-5 sm:p-8">
          <SectionHeading
            id="sprint-1"
            icon={Target}
            title="Sprint 1: Platform Foundation"
            description="The first development sprint, planned in full with acceptance criteria."
          />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="space-y-4">
              <div className="rounded-lg border border-saudi-100 bg-saudi-light p-4">
                <h3 className="mb-1 text-sm font-semibold text-saudi">
                  Sprint goal
                </h3>
                <p className="text-sm leading-relaxed text-slate-700">
                  {sprint1.goal}
                </p>
              </div>
              <dl className="divide-y divide-slate-100 rounded-lg border border-slate-200 bg-white text-sm">
                {sprint1.details.map((d) => (
                  <div
                    key={d.label}
                    className="flex flex-col gap-0.5 px-4 py-2.5"
                  >
                    <dt className="text-xs font-medium text-slate-500">
                      {d.label}
                    </dt>
                    <dd className="text-slate-700">{d.value}</dd>
                  </div>
                ))}
              </dl>
              <div>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="text-slate-600">Committed / capacity</span>
                  <span className="font-bold text-charcoal">
                    {sprint1Points} / {low}–{high} SP
                  </span>
                </div>
                <div
                  className="h-2 overflow-hidden rounded-full bg-slate-100"
                  role="progressbar"
                  aria-valuenow={sprint1Points}
                  aria-valuemin={0}
                  aria-valuemax={high}
                  aria-label="Sprint 1 capacity used"
                >
                  <div
                    className="h-full rounded-full bg-saudi"
                    style={{ width: `${(sprint1Points / high) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-3 lg:col-span-2">
              <h3 className="eyebrow">
                Selected stories & acceptance criteria
              </h3>
              {sprint1Stories.map((s) => (
                <AcceptanceItem key={s.id} story={s} />
              ))}
              <p className="flex items-start gap-1.5 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                <CheckCircle
                  size={18}
                  className="mt-0.5 flex-shrink-0 text-saudi"
                />
                <span>
                  <span className="font-semibold text-charcoal">
                    Definition of Done.{" "}
                  </span>
                  {sprint1.dod}
                </span>
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="changes" className="card p-5 sm:p-8">
          <SectionHeading
            id="changes"
            icon={GitDiff}
            title="Changes to Previous Artifacts"
            description="How the Artifact 1 baseline and the Artifact 2 methodology decision were refined in this artifact."
          />
          <h3 className="mb-3 text-sm font-semibold text-charcoal">
            From Artifact 1
          </h3>
          <div className="custom-scrollbar mb-8 overflow-x-auto rounded-lg border border-slate-200">
            <table className="min-w-[640px] w-full text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-700">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Area
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Artifact 1 baseline
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Artifact 3
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                {changesFromA1.map((c) => (
                  <tr key={c.area}>
                    <th
                      scope="row"
                      className="px-4 py-3 font-semibold text-charcoal"
                    >
                      {c.area}
                    </th>
                    <td className="px-4 py-3">{c.before}</td>
                    <td className="px-4 py-3">{c.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mb-2 text-sm font-semibold text-charcoal">
            From Artifact 2
          </h3>
          <p className="mb-4 text-sm text-slate-600">{changesToA2.intro}</p>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {changesToA2.additions.map((a) => (
              <li
                key={a.title}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm font-semibold text-charcoal">{a.title}</p>
                <p className="mt-1 text-sm text-slate-600">{a.text}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
