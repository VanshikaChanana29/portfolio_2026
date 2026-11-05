"use client";

import { useRef, useState } from "react";
import { HiPlay, HiX } from "react-icons/hi";
import { track } from "@/lib/track";

// Demo video + screenshot gallery for one case study. Opens in a native <dialog>
// (keyboard and Escape support built in). Nothing heavy loads until it's opened.
export default function ProofMedia({ title, slug, proof }) {
  const dialog = useRef(null);
  const [view, setView] = useState(null); // { kind: "video" } | { kind: "image", index }
  const shots = proof.screenshots || [];
  const hasVideo = Boolean(proof.video || proof.embed);

  const open = (next) => {
    setView(next);
    dialog.current?.showModal();
    if (next.kind === "video") track("watch_demo", { label: slug });
  };
  const close = () => {
    dialog.current?.close();
    setView(null);
  };

  if (!hasVideo && shots.length === 0) return null;

  return (
    <div className="mt-6">
      {hasVideo && (
        <button type="button" onClick={() => open({ kind: "video" })} className="btn-primary">
          <HiPlay aria-hidden="true" className="h-5 w-5" />
          Watch 60-sec demo
        </button>
      )}

      {shots.length > 0 && (
        <ul className="mt-4 grid grid-cols-3 gap-2" aria-label={`${title} screenshots`}>
          {shots.map((s, i) => (
            <li key={s.src}>
              <button type="button" onClick={() => open({ kind: "image", index: i })} className="block w-full overflow-hidden rounded-lg border border-line">
                <img src={s.src} alt={s.alt} loading="lazy" decoding="async" width="480" height="300" className="aspect-[16/10] w-full object-cover object-top" />
                <span className="sr-only">Enlarge screenshot {i + 1}</span>
              </button>
            </li>
          ))}
        </ul>
      )}

      <dialog
        ref={dialog}
        onClose={() => setView(null)}
        onClick={(e) => e.target === dialog.current && close()}
        aria-label={`${title} demo`}
        className="w-[min(960px,94vw)] rounded-2xl border border-line bg-surface p-0 text-ink backdrop:bg-black/70"
      >
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <p className="font-semibold">{title}</p>
          <button type="button" onClick={close} className="btn-ghost !min-h-0 !p-2" aria-label="Close">
            <HiX aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
        <div className="bg-black">
          {view?.kind === "video" && proof.video && (
            <video src={proof.video} poster={proof.poster || undefined} controls autoPlay playsInline className="aspect-video w-full" />
          )}
          {view?.kind === "video" && !proof.video && proof.embed && (
            <iframe
              src={proof.embed}
              title={`${title} demo video`}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="aspect-video w-full"
            />
          )}
          {view?.kind === "image" && shots[view.index] && (
            <img src={shots[view.index].src} alt={shots[view.index].alt} className="max-h-[80vh] w-full object-contain" />
          )}
        </div>
        {view?.kind === "image" && shots.length > 1 && (
          <div className="flex justify-between px-4 py-3">
            <button type="button" className="btn-secondary" onClick={() => setView({ kind: "image", index: (view.index - 1 + shots.length) % shots.length })}>
              Previous
            </button>
            <span className="self-center text-sm text-muted" aria-live="polite">
              {view.index + 1} / {shots.length}
            </span>
            <button type="button" className="btn-secondary" onClick={() => setView({ kind: "image", index: (view.index + 1) % shots.length })}>
              Next
            </button>
          </div>
        )}
      </dialog>
    </div>
  );
}
