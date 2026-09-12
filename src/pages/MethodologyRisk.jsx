import {
  ArrowsClockwise,
  ChartPieSlice,
  CheckCircle,
  DownloadSimple,
  Files,
  GitBranch,
  GitMerge,
  Globe,
  Kanban,
  MinusCircle,
  PlusCircle,
  PuzzlePiece,
  Scales,
  SquaresFour,
  Table,
  Target,
} from '@phosphor-icons/react';
import { PageHeader, SectionHeading } from '../components/ui.jsx';
import {
  exposure,
  impactLabels,
  methodologies,
  probabilityLabels,
  risks,
  selectedMethodology,
  severity,
  severityLabels,
} from '../data/methodologyRisk.js';

const severityBadge = {
  extreme: 'bg-rose-100 text-rose-800 border-rose-200',
  high: 'bg-orange-100 text-orange-800 border-orange-200',
  med: 'bg-amber-100 text-amber-800 border-amber-200',
  low: 'bg-green-100 text-green-800 border-green-200',
};

function MethodCard({ method }) {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="border-b border-slate-100 bg-slate-50 px-6 py-4">
        <h4 className="text-lg font-semibold text-charcoal-dark">{method.name}</h4>
      </div>
      <div className="space-y-5 p-6">
        <div>
          <h5 className="eyebrow mb-1.5 flex items-center gap-1.5 text-slate-400">
            <PlusCircle size={14} className="text-emerald-600" /> Strengths
          </h5>
          <p className="text-sm leading-relaxed text-slate-700">{method.strengths}</p>
        </div>
        <div>
          <h5 className="eyebrow mb-1.5 flex items-center gap-1.5 text-slate-400">
            <MinusCircle size={14} className="text-rose-600" /> Weaknesses
          </h5>
          <p className="text-sm leading-relaxed text-slate-700">{method.weaknesses}</p>
        </div>
        <dl className="grid grid-cols-1 gap-4 border-t border-slate-100 pt-4 md:grid-cols-3">
          {[
            ['Project Fit', method.fit.project],
            ['Team Fit', method.fit.team],
            ['Stakeholder Fit', method.fit.stakeholder],
          ].map(([label, value]) => (
            <div key={label}>
              <dt className="eyebrow mb-1 text-slate-400">{label}</dt>
              <dd className="text-sm text-slate-700">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}

function SeverityBadge({ score }) {
  const s = severity(score);
  return (
    <span className={`inline-flex items-center rounded border px-2 py-0.5 text-xs font-semibold ${severityBadge[s]}`}>
      {score} · {severityLabels[s]}
    </span>
  );
}

function ScaleBadge({ value, labels }) {
  return (
    <span className="inline-flex items-center whitespace-nowrap rounded border border-slate-200 bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-800">
      {labels[value - 1]} ({value})
    </span>
  );
}

function downloadRiskRegister() {
  const header = ['ID', 'Name', 'Category', 'Description', 'Probability', 'Impact', 'Exposure', 'Severity', 'First Indicator', 'Mitigation'];
  const escape = (v) => `"${String(v).replace(/"/g, '""')}"`;
  const rows = risks.map((r) => {
    const score = exposure(r);
    return [
      r.id,
      r.name,
      r.category === 'methodology' ? 'Methodology-Specific' : 'General Project',
      r.description,
      `${probabilityLabels[r.probability - 1]} (${r.probability})`,
      `${impactLabels[r.impact - 1]} (${r.impact})`,
      score,
      severityLabels[severity(score)],
      r.indicator,
      r.mitigation,
    ];
  });
  const csv = [header, ...rows].map((row) => row.map(escape).join(',')).join('\r\n');
  const url = URL.createObjectURL(new Blob([`﻿${csv}`], { type: 'text/csv;charset=utf-8' }));
  const a = document.createElement('a');
  a.href = url;
  a.download = 'nesmp-risk-register.csv';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

const groups = [
  { key: 'methodology', label: 'Methodology-Specific Risks', icon: GitBranch, tone: 'text-saudi-800 bg-saudi-50/60' },
  { key: 'general', label: 'General Project Risks (Internal/External)', icon: Globe, tone: 'text-blue-800 bg-blue-50/60' },
];

export default function MethodologyRisk() {
  const methodologyCount = risks.filter((r) => r.category === 'methodology').length;
  const generalCount = risks.length - methodologyCount;
  const highPriority = risks.filter((r) => exposure(r) >= 10).length;

  const stats = [
    { label: 'Total Risks Identified', value: risks.length, bar: 'bg-slate-400' },
    { label: 'High Priority Risks', value: highPriority, bar: 'bg-rose-500', note: 'Exposure ≥ 10' },
    { label: 'Methodology-Specific', value: methodologyCount, bar: 'bg-saudi-500' },
    { label: 'General Project Risks', value: generalCount, bar: 'bg-blue-500' },
  ];

  return (
    <>
      <PageHeader
        badge="Artifact 02"
        badgeIcon={Files}
        title="Methodology & Risk"
        description="Evaluating development approaches and managing uncertainty throughout the project lifecycle for the National Employment & Skill Matching Platform."
      />

      <div className="container-page space-y-16 py-12 lg:py-16">
        {/* Methodology analysis */}
        <section aria-labelledby="methodology-analysis">
          <SectionHeading id="methodology-analysis" icon={GitMerge} title="Methodology Analysis" />
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
            <div className="space-y-6">
              <div className="rounded-lg border border-slate-200 bg-slate-200/50 px-4 py-2">
                <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-700">
                  <Kanban size={16} /> Plan-Driven Approaches
                </h3>
              </div>
              {methodologies.planDriven.map((m) => (
                <MethodCard key={m.name} method={m} />
              ))}
            </div>
            <div className="space-y-6">
              <div className="rounded-lg border border-saudi-100 bg-saudi-50/60 px-4 py-2">
                <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-saudi-800">
                  <ArrowsClockwise size={16} /> Agile Approaches
                </h3>
              </div>
              {methodologies.agile.map((m) => (
                <MethodCard key={m.name} method={m} />
              ))}
            </div>
          </div>
        </section>

        {/* Selected methodology */}
        <section aria-labelledby="selected-methodology">
          <div className="relative overflow-hidden rounded-2xl border border-saudi-900 bg-saudi-800 shadow-xl">
            <svg className="pointer-events-none absolute right-0 top-0 -mr-16 -mt-16 text-white opacity-10" width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
              <defs>
                <pattern id="dots-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect width="4" height="4" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="404" fill="url(#dots-pattern)" />
            </svg>
            <div className="relative p-6 sm:p-8 lg:p-10">
              <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                  <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-saudi-300">Final Recommendation</span>
                  <h2 id="selected-methodology" className="text-3xl font-bold text-white lg:text-4xl">
                    Selected: <span className="text-saudi-200">{selectedMethodology.name}</span>
                  </h2>
                  <p className="mt-1 text-saudi-100">{selectedMethodology.qualifier}</p>
                </div>
                <div className="inline-flex items-center gap-2 self-start rounded-lg border border-saudi-600 bg-saudi-950/40 px-4 py-2 md:self-auto">
                  <CheckCircle size={20} className="text-saudi-300" />
                  <span className="text-sm font-medium text-white">Approved Approach</span>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
                {[
                  { icon: Target, title: 'Why it was selected', text: selectedMethodology.why },
                  { icon: PuzzlePiece, title: 'Why it fits this project', text: selectedMethodology.fit },
                  { icon: Scales, title: 'Why preferred over others', text: selectedMethodology.preferred },
                ].map(({ icon: Icon, title, text }) => (
                  <div key={title} className="rounded-xl border border-saudi-600/60 bg-saudi-950/25 p-6">
                    <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-white">
                      <Icon size={20} className="text-saudi-300" /> {title}
                    </h3>
                    <p className="text-sm leading-relaxed text-saudi-50">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Risk overview */}
        <section aria-labelledby="risk-overview">
          <SectionHeading id="risk-overview" icon={ChartPieSlice} title="Risk Overview" />
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="relative flex flex-col justify-center overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className={`absolute bottom-0 left-0 top-0 w-1.5 ${s.bar}`} />
                <dt className="mb-1 text-sm font-medium text-slate-500">{s.label}</dt>
                <dd className="text-3xl font-bold text-charcoal-dark">{s.value}</dd>
                {s.note && <dd className="mt-1 text-xs text-slate-400">{s.note}</dd>}
              </div>
            ))}
          </dl>
        </section>

        {/* Risk register */}
        <section aria-labelledby="risk-register">
          <SectionHeading
            id="risk-register"
            icon={Table}
            title="Risk Register"
            description="Probability and impact are scored 1–5; exposure = probability × impact."
            action={
              <button
                type="button"
                onClick={downloadRiskRegister}
                className="inline-flex items-center gap-1.5 self-start rounded border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50 sm:self-auto"
              >
                <DownloadSimple size={16} /> Export CSV
              </button>
            }
          />

          {/* Desktop table */}
          <div className="hidden overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm lg:block">
            <div className="custom-scrollbar overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    {['ID / Name', 'Description', 'Probability', 'Impact', 'Exposure', 'First Indicator', 'Mitigation / Management'].map((h) => (
                      <th key={h} scope="col" className="whitespace-nowrap px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-700">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                {groups.map((g) => (
                  <tbody key={g.key} className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <th colSpan={7} scope="colgroup" className={`px-4 py-2 text-left text-xs font-bold uppercase tracking-wider ${g.tone}`}>
                        <g.icon size={14} className="mr-1 inline" /> {g.label}
                      </th>
                    </tr>
                    {risks
                      .filter((r) => r.category === g.key)
                      .map((r) => (
                        <tr key={r.id} className="transition-colors hover:bg-slate-50">
                          <td className="px-4 py-4 align-top">
                            <div className="font-bold text-slate-900">{r.id}</div>
                            <div className="mt-0.5 min-w-[130px] text-xs text-slate-600">{r.name}</div>
                          </td>
                          <td className="min-w-[220px] px-4 py-4 align-top text-slate-600">{r.description}</td>
                          <td className="px-4 py-4 align-top">
                            <ScaleBadge value={r.probability} labels={probabilityLabels} />
                          </td>
                          <td className="px-4 py-4 align-top">
                            <ScaleBadge value={r.impact} labels={impactLabels} />
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 align-top">
                            <SeverityBadge score={exposure(r)} />
                          </td>
                          <td className="min-w-[170px] px-4 py-4 align-top text-xs text-slate-600">{r.indicator}</td>
                          <td className="min-w-[260px] px-4 py-4 align-top text-xs text-slate-600">{r.mitigation}</td>
                        </tr>
                      ))}
                  </tbody>
                ))}
              </table>
            </div>
          </div>

          {/* Mobile / tablet cards */}
          <div className="space-y-8 lg:hidden">
            {groups.map((g) => (
              <div key={g.key}>
                <h3 className={`mb-3 rounded-md px-3 py-2 text-xs font-bold uppercase tracking-wider ${g.tone}`}>
                  <g.icon size={14} className="mr-1 inline" /> {g.label}
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {risks
                    .filter((r) => r.category === g.key)
                    .map((r) => (
                      <article key={r.id} className="card p-5">
                        <div className="mb-2 flex items-start justify-between gap-3">
                          <div>
                            <span className="font-bold text-slate-900">{r.id}</span>
                            <h4 className="text-sm font-medium text-slate-700">{r.name}</h4>
                          </div>
                          <SeverityBadge score={exposure(r)} />
                        </div>
                        <p className="mb-3 text-sm text-slate-600">{r.description}</p>
                        <div className="mb-3 flex flex-wrap gap-2 text-xs text-slate-500">
                          <span>
                            P: <ScaleBadge value={r.probability} labels={probabilityLabels} />
                          </span>
                          <span>
                            I: <ScaleBadge value={r.impact} labels={impactLabels} />
                          </span>
                        </div>
                        <dl className="space-y-2 border-t border-slate-100 pt-3 text-xs">
                          <div>
                            <dt className="eyebrow text-slate-400">First Indicator</dt>
                            <dd className="mt-0.5 text-slate-600">{r.indicator}</dd>
                          </div>
                          <div>
                            <dt className="eyebrow text-slate-400">Mitigation</dt>
                            <dd className="mt-0.5 text-slate-600">{r.mitigation}</dd>
                          </div>
                        </dl>
                      </article>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Risk matrix */}
        <section aria-labelledby="risk-matrix" className="pb-4">
          <SectionHeading id="risk-matrix" icon={SquaresFour} title="Risk Matrix Visualization" />
          <div className="flex flex-col items-center justify-center gap-8 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-8 md:flex-row lg:gap-16">
            <div className="flex w-full max-w-[520px] items-stretch">
              <div className="mr-2 flex items-center sm:mr-3">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-600 sm:text-sm" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                  Probability
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex">
                  <div className="mr-2 flex w-14 flex-col text-right text-[10px] font-medium leading-tight text-slate-500 sm:w-20 sm:text-xs">
                    {[...probabilityLabels].reverse().map((l) => (
                      <span key={l} className="flex flex-1 items-center justify-end">
                        {l}
                      </span>
                    ))}
                  </div>
                  <div className="grid aspect-square flex-1 grid-cols-5 grid-rows-5 gap-1">
                    {[5, 4, 3, 2, 1].map((p) =>
                      [1, 2, 3, 4, 5].map((i) => {
                        const cellRisks = risks.filter((r) => r.probability === p && r.impact === i);
                        return (
                          <div
                            key={`${p}-${i}`}
                            title={`Probability: ${probabilityLabels[p - 1]} · Impact: ${impactLabels[i - 1]}`}
                            className={`matrix-cell-${severity(p * i)} flex flex-wrap content-center items-center justify-center gap-0.5 rounded-sm p-0.5`}
                          >
                            {cellRisks.map((r) => (
                              <span
                                key={r.id}
                                title={r.name}
                                className="flex h-5 w-6 items-center justify-center rounded-full bg-white text-[9px] font-bold text-slate-800 shadow-sm sm:h-6 sm:w-7 sm:text-[10px]"
                              >
                                {r.id}
                              </span>
                            ))}
                          </div>
                        );
                      }),
                    )}
                  </div>
                </div>
                <div className="ml-16 mt-2 flex sm:ml-[5.5rem]">
                  {impactLabels.map((l) => (
                    <div key={l} className="w-1/5 text-center text-[10px] font-medium text-slate-500 sm:text-xs">
                      {l}
                    </div>
                  ))}
                </div>
                <div className="ml-16 mt-3 text-center sm:ml-[5.5rem]">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-600 sm:text-sm">Impact</span>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col gap-3 rounded-lg border border-slate-200 bg-slate-50 p-5 md:w-auto md:min-w-[220px]">
              <h3 className="mb-1 border-b border-slate-200 pb-2 text-sm font-bold text-slate-800">Severity Legend</h3>
              {[
                ['extreme', 'Extreme Risk', '16–25'],
                ['high', 'High Risk', '10–15'],
                ['med', 'Medium Risk', '5–9'],
                ['low', 'Low Risk', '1–4'],
              ].map(([key, label, range]) => (
                <div key={key} className="flex items-center gap-3">
                  <div className={`h-4 w-4 rounded-sm matrix-cell-${key}`} />
                  <span className="text-sm text-slate-700">{label}</span>
                  <span className="ml-auto text-xs text-slate-400">{range}</span>
                </div>
              ))}
              <p className="mt-2 border-t border-slate-200 pt-3 text-xs italic text-slate-500">
                Placement is based on the probability and impact scores in the risk register.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
