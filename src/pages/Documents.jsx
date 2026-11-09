import { Link } from "react-router-dom";
import { ArrowRight, FilePdf, FileXls, Files } from "@phosphor-icons/react";
import { DocumentActions, PageHeader } from "../components/ui.jsx";
import { documents } from "../data/documents.js";

export default function Documents() {
  return (
    <>
      <PageHeader
        badge="Documents"
        badgeIcon={Files}
        title="Project Documents"
        description="Read or download the documents submitted for each artifact. PDFs open in your browser, with no sign-in needed."
      />

      <div className="container-page py-12 lg:py-16">
        <ul className="grid gap-6 md:grid-cols-2">
          {documents.map((doc) => {
            const Icon = doc.format === "PDF" ? FilePdf : FileXls;
            return (
              <li
                key={doc.id}
                id={doc.id}
                className="card flex scroll-mt-24 flex-col p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-saudi-light text-saudi">
                    <Icon size={22} />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Artifact {doc.artifact} · {doc.format}
                    {doc.pages ? ` · ${doc.pages} pages` : ""}
                  </p>
                </div>
                <h2 className="text-xl font-bold text-charcoal">{doc.title}</h2>
                <p className="mb-6 mt-2 flex-1 leading-relaxed text-slate-600">
                  {doc.description}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <DocumentActions doc={doc} />
                  <Link
                    to={doc.path}
                    className="inline-flex items-center gap-1 text-sm font-medium text-saudi hover:underline"
                  >
                    See it on the site <ArrowRight size={14} />
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
