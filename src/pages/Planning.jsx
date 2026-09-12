import { useRef, useState } from 'react';
import {
  Calculator,
  CalendarCheck,
  ChartBarHorizontal,
  CheckSquare,
  Clock,
  Flag,
  Info,
  Kanban,
  Lightbulb,
  ListNumbers,
  NotePencil,
  Plugs,
  RocketLaunch,
  TreeStructure,
  Users,
  WarningCircle,
} from '@phosphor-icons/react';
import { PageHeader, SectionHeading } from '../components/ui.jsx';
import { agile, estimation, milestones, planDriven, planningFactors, wbs } from '../data/planning.js';

const factorIcons = { assumptions: Lightbulb, constraints: WarningCircle, dependencies: Plugs, notes: NotePencil };

function WbsTree() {
  return (
    <div className="flex flex-col items-center">
      <div className="z-10 flex items-center gap-2 rounded-lg border-b-4 border-saudi-400 bg-charcoal px-6 py-3 font-semibold text-white shadow-md">
        <RocketLaunch size={20} className="text-saudi-300" /> {wbs.root}
      </div>
      <div className="h-8 w-0.5 bg-slate-300" />

      {/* Horizontal connector (desktop only) */}
      <div className="relative hidden h-6 w-full lg:block">
        <div className="absolute left-[10%] right-[10%] top-0 h-0.5 bg-slate-300" />
        {wbs.branches.map((b, i) => (
          <div key={b.id} className="absolute top-0 h-full w-0.5 bg-slate-300" style={{ left: `${10 + i * 20}%` }} />
        ))}
      </div>

      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
        {wbs.branches.map((b) => (
          <div key={b.id} className="flex flex-col">
            <div className="mb-4 rounded-lg border border-slate-200 bg-slate-50 p-3 text-center font-medium text-charcoal shadow-sm">
              <span className="mr-1 text-xs font-semibold text-saudi">{b.id}.0</span> {b.title}
            </div>
            <ul className="ml-3 space-y-2 pl-4">
              {b.items.map((item, i) => (
                <li
                  key={item}
                  className={`relative rounded border border-slate-200 bg-white p-3 text-sm text-slate-600 transition-colors hover:border-saudi
                    before:absolute before:-left-[18px] before:top-5 before:h-0.5 before:w-[17px] before:bg-slate-300
                    after:absolute after:-left-[18px] after:w-0.5 after:bg-slate-300 ${
                      i === b.items.length - 1 ? 'after:-top-2 after:h-[1.85rem]' : 'after:-top-2 after:bottom-[-0.5rem]'
                    } ${i === 0 ? 'after:-top-4 after:h-[2.35rem]' : ''}`}
                >
                  <span className="mr-1 text-xs text-slate-400">
                    {b.id}.{i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function AgileView() {
  const used = agile.sprint1.stories.reduce((sum, s) => sum + s.points, 0);
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <div className="rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between rounded-t-lg border-b border-slate-200 bg-slate-50 px-4 py-3">
          <h3 className="text-sm font-semibold text-charcoal">Product Backlog / Epics</h3>
          <span className="rounded-full bg-slate-200 px-2 py-0.5 text-xs text-slate-600">{agile.epics.length} epics</span>
        </div>
        <ul className="space-y-3 p-4">
          {agile.epics.map((e) => (
            <li key={e} className="flex h-12 items-center rounded-lg border border-dashed border-slate-300 px-3 text-sm text-slate-600">
              {e}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between rounded-t-lg border-b border-slate-200 bg-saudi-light px-4 py-3">
          <h3 className="text-sm font-semibold text-saudi">Sprint 0 (Setup &amp; Spikes)</h3>
          <span className="flex items-center gap-1 text-xs text-saudi">
            <Clock size={14} /> {agile.sprint0.duration}
          </span>
        </div>
        <ul className="space-y-3 p-4">
          {agile.sprint0.tasks.map((t) => (
            <li key={t.title} className="flex items-start gap-3 rounded border border-slate-100 bg-slate-50 p-3">
              <CheckSquare size={18} className="mt-0.5 flex-shrink-0 text-saudi" />
              <div>
                <p className="text-sm font-medium text-charcoal">{t.title}</p>
                <p className="text-xs text-slate-500">{t.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between rounded-t-lg border-b border-slate-200 bg-slate-50 px-4 py-3">
          <h3 className="text-sm font-semibold text-charcoal">Sprint 1 Backlog</h3>
          <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700">Planned</span>
        </div>
        <div className="p-4">
          <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="text-sm text-slate-600">Committed / Capacity:</span>
            <span className="text-sm font-bold text-charcoal">
              {used} / {agile.sprint1.capacity} pts
            </span>
          </div>
          <div className="mb-4 h-2 overflow-hidden rounded-full bg-slate-100" role="progressbar" aria-valuenow={used} aria-valuemin={0} aria-valuemax={agile.sprint1.capacity} aria-label="Sprint 1 capacity used">
            <div className="h-full rounded-full bg-saudi" style={{ width: `${Math.min(100, (used / agile.sprint1.capacity) * 100)}%` }} />
          </div>
          <ul className="space-y-2">
            {agile.sprint1.stories.map((s) => (
              <li key={s.title} className="flex justify-between gap-2 rounded border border-slate-200 bg-slate-50 p-2 text-sm text-slate-600">
                <span>{s.title}</span>
                <span className="whitespace-nowrap rounded bg-slate-200 px-1.5 text-xs leading-5">{s.points} pts</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function PlanDrivenView() {
  const months = 12;
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="space-y-6">
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-charcoal">
            <ListNumbers size={18} /> Task Breakdown
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500">
                  <th className="pb-2 pr-2 font-medium">Task</th>
                  <th className="pb-2 pr-2 font-medium">Duration</th>
                  <th className="pb-2 font-medium">Pre-req</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                {planDriven.tasks.map((t) => (
                  <tr key={t.task}>
                    <td className="py-2 pr-2">{t.task}</td>
                    <td className="whitespace-nowrap py-2 pr-2">{t.duration}</td>
                    <td className="py-2">{t.prereq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-charcoal">
            <Users size={18} /> Resource Allocation
          </h3>
          <ul className="divide-y divide-slate-100 text-sm">
            {planDriven.resources.map((r) => (
              <li key={r.role} className="flex flex-col py-2 sm:flex-row sm:justify-between sm:gap-3 lg:flex-col xl:flex-row">
                <span className="font-medium text-charcoal">{r.role}</span>
                <span className="text-slate-500">{r.allocation}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm lg:col-span-2">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-charcoal">
            <ChartBarHorizontal size={18} /> Gantt Chart Schedule
          </h3>
          <span className="rounded border border-slate-200 bg-slate-100 px-2 py-1 text-xs text-slate-600">12-month baseline</span>
        </div>
        <div className="custom-scrollbar overflow-x-auto pb-2">
          <div className="min-w-[560px] space-y-2.5">
            <div className="ml-[150px] flex border-b border-slate-100 pb-2 text-xs text-slate-400">
              {['Q1', 'Q2', 'Q3', 'Q4'].map((q) => (
                <div key={q} className="flex-1 border-l border-slate-100 pl-1">
                  {q}
                </div>
              ))}
            </div>
            {planDriven.gantt.map((row) => (
              <div key={row.label} className={`flex items-center ${row.level === 0 ? 'mt-4 first-of-type:mt-0' : ''}`}>
                <div className={`w-[150px] truncate pr-2 ${row.level === 0 ? 'text-sm font-medium text-slate-700' : 'pl-4 text-xs text-slate-600'}`} title={row.label}>
                  {row.label}
                </div>
                <div className={`relative flex-1 rounded bg-slate-50 ${row.level === 0 ? 'h-6' : 'h-4'}`}>
                  <div
                    className={`absolute h-full rounded ${row.tone}`}
                    style={{ left: `${(row.start / months) * 100}%`, width: `${(row.length / months) * 100}%` }}
                    title={`Month ${row.start + 1} – ${row.start + row.length}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const tabs = [
  { id: 'agile', label: 'Agile Delivery (Selected)' },
  { id: 'plan', label: 'Plan-Driven View (Baseline)' },
];

export default function Planning() {
  const [active, setActive] = useState('agile');
  const tabRefs = useRef([]);

  const onTabKey = (e, index) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const next = (index + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
    setActive(tabs[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <>
      <PageHeader
        badge="Artifact 03"
        badgeIcon={Kanban}
        title="Estimation & Scheduling"
        description="Breaking down the project, estimating effort, and defining how the work will be delivered."
      />

      <div className="container-page space-y-12 py-12 lg:py-16">
        <section aria-labelledby="wbs" className="card p-5 sm:p-8">
          <SectionHeading id="wbs" icon={TreeStructure} title="Work Breakdown Structure" description="Hierarchical visualization of all major project deliverables." />
          <WbsTree />
        </section>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <section aria-labelledby="estimation" className="card flex flex-col p-5 sm:p-8">
            <SectionHeading id="estimation" icon={Calculator} title="Estimation Approach" description="Methodology used to forecast project effort and cost." />
            <div className="flex flex-grow flex-col space-y-6">
              <div>
                <p className="mb-1 text-sm font-medium text-slate-700">Selected Estimation Technique</p>
                <div className="rounded-md border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-900">
                  <p className="font-medium">{estimation.technique}</p>
                  <p className="text-xs text-slate-500">{estimation.crossCheck}</p>
                </div>
              </div>
              <div>
                <p className="mb-1 text-sm font-medium text-slate-700">Rationale</p>
                <p className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm leading-relaxed text-slate-600">{estimation.rationale}</p>
              </div>
              <div className="mt-auto border-t border-slate-100 pt-6">
                <h3 className="eyebrow mb-4">Estimated Effort Overview</h3>
                <div className="grid grid-cols-2 gap-4">
                  {estimation.totals.map((t) => (
                    <div key={t.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-center">
                      <div className="mb-1 text-2xl font-semibold text-charcoal sm:text-3xl">{t.value}</div>
                      <div className="text-xs font-medium uppercase text-slate-500">{t.label}</div>
                    </div>
                  ))}
                </div>
                <p className="mt-3 flex items-start gap-1.5 text-xs text-slate-500">
                  <Info size={14} className="mt-0.5 flex-shrink-0" /> {estimation.basis}
                </p>
              </div>
            </div>
          </section>

          <section aria-labelledby="assumptions" className="card flex flex-col p-5 sm:p-8">
            <SectionHeading id="assumptions" icon={Info} title="Planning Assumptions" description="Factors considered true, real, or certain for planning purposes." />
            <div className="grid flex-grow grid-cols-1 gap-4 sm:grid-cols-2">
              {planningFactors.map((f) => {
                const Icon = factorIcons[f.key];
                return (
                  <div key={f.key} className={`rounded-lg border border-t-4 border-slate-200 bg-slate-50 p-4 ${f.tone}`}>
                    <div className="mb-2 flex items-center gap-2">
                      <Icon size={18} className={f.iconTone} />
                      <h3 className="text-sm font-semibold text-charcoal">{f.title}</h3>
                    </div>
                    <ul className="list-disc space-y-2 pl-4 text-sm text-slate-600">
                      {f.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        <section aria-labelledby="schedule" className="card overflow-hidden">
          <div className="border-b border-slate-200 px-5 pt-8 sm:px-8">
            <SectionHeading id="schedule" icon={CalendarCheck} title="Schedule & Delivery Model" description="Sprint-based delivery under Scrum, with a plan-driven baseline for milestone reporting." />
            <div role="tablist" aria-label="Delivery model" className="-mb-px flex gap-6 overflow-x-auto sm:gap-8">
              {tabs.map((t, i) => (
                <button
                  key={t.id}
                  ref={(el) => (tabRefs.current[i] = el)}
                  id={`tab-${t.id}`}
                  type="button"
                  role="tab"
                  aria-selected={active === t.id}
                  aria-controls={`panel-${t.id}`}
                  tabIndex={active === t.id ? 0 : -1}
                  onClick={() => setActive(t.id)}
                  onKeyDown={(e) => onTabKey(e, i)}
                  className={`whitespace-nowrap border-b-2 pb-4 text-sm font-medium transition-colors ${
                    active === t.id ? 'border-saudi text-saudi' : 'border-transparent text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
          <div className="bg-slate-50/60 p-5 sm:p-8">
            <div id="panel-agile" role="tabpanel" aria-labelledby="tab-agile" hidden={active !== 'agile'}>
              <AgileView />
            </div>
            <div id="panel-plan" role="tabpanel" aria-labelledby="tab-plan" hidden={active !== 'plan'}>
              <PlanDrivenView />
            </div>
          </div>
        </section>

        <section aria-labelledby="timeline" className="card p-5 sm:p-8">
          <SectionHeading id="timeline" icon={Flag} title="Project Timeline Overview" description="High-level phases and major delivery milestones." />
          <div className="relative mx-auto mt-8 max-w-5xl">
            {/* Desktop horizontal track */}
            <div className="absolute left-[12.5%] right-[12.5%] top-[4.1rem] hidden h-1 bg-slate-200 md:block" />
            <div className="absolute left-[12.5%] top-[4.1rem] hidden h-1 w-1/4 bg-saudi md:block" />
            {/* Mobile vertical track */}
            <div className="absolute bottom-3 left-3 top-3 w-1 bg-slate-200 md:hidden" />

            <ol className="relative grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-4">
              {milestones.map((m, i) => (
                <li key={m.phase} className="flex gap-4 md:flex-col md:items-center md:gap-0 md:text-center">
                  <h3 className="hidden md:mb-3 md:block md:min-h-[2.75rem]">
                    <span className="block text-sm font-bold text-charcoal">{m.phase}</span>
                    <span className="block text-xs font-normal text-slate-500">{m.code}</span>
                  </h3>
                  <div
                    className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border-4 shadow ${
                      i === 0 ? 'border-white bg-saudi' : i === 1 ? 'border-saudi bg-white' : 'border-white bg-slate-300'
                    }`}
                  >
                    {i === 0 && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                    {i === milestones.length - 1 && <Flag size={10} weight="fill" className="text-slate-500" />}
                  </div>
                  <div className="md:mt-3">
                    <p className="text-sm font-bold text-charcoal md:hidden">{m.phase}</p>
                    <p className="text-xs text-slate-500 md:hidden">{m.code}</p>
                    <p className="mt-1 text-xs font-semibold text-saudi md:mt-0">{m.when}</p>
                    <p className="mt-1 text-xs text-slate-500">{m.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </div>
    </>
  );
}
