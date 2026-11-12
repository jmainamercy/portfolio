"use client";
import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
} from "react";
import { DATA } from "@/data/portfolio";
import type { Project } from "@/data/types";
import Image from "next/image";

const Art = ({ i }: { i: number }) => (
  <svg
    viewBox="0 0 300 200"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
  >
    {i % 2 ? (
      <g fill="none" stroke="#9d4dff" strokeWidth="1.5">
        <circle cx="100" cy="100" r="26" />
        <circle cx="200" cy="60" r="18" />
        <circle cx="210" cy="150" r="22" />
        <circle cx="60" cy="40" r="12" />
        <path d="M100 100L200 60M100 100L210 150M60 40L100 100M200 60L210 150" />
      </g>
    ) : (
      <g fill="none" stroke="#9d4dff" strokeWidth="1.5">
        <rect x="40" y="30" width="90" height="140" />
        <rect x="150" y="60" width="110" height="80" />
        <path d="M60 60h50M60 80h30M170 90h70M170 110h40" />
        <circle cx="210" cy="125" r="6" fill="#9d4dff" />
      </g>
    )}
  </svg>
);

const List = ({ items }: { items: string[] }) =>
  items.length ? (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  ) : null;

function Details({ p, onClose }: { p: Project; onClose: () => void }) {
  const hasLinks = Boolean(p.repo || p.demo);
  return (
    <div className="mi">
      <button className="cl" onClick={onClose}>
        CLOSE ✕
      </button>
      <span className="m">{p.kind ?? "Selected project"}</span>
      <h2 className="d" id="dt">
        {p.name}
      </h2>
      <p style={{ fontSize: "1.15rem", maxWidth: "60ch" }}>{p.desc}</p>
      <h4 className="m">My role</h4>
      <p>{p.role}</p>
      {p.mine?.length ? (
        <div className="gr">
          <div>
            <h4 className="m">My contributions</h4>
            <List items={p.mine} />
          </div>
          {p.team?.length ? (
            <div>
              <h4 className="m">Team contributions</h4>
              <List items={p.team} />
            </div>
          ) : null}
        </div>
      ) : null}
      {p.problem ? (
        <>
          <h4 className="m">Problem</h4>
          <p>{p.problem}</p>
        </>
      ) : null}
      {p.decisions.length > 0 || p.challenges.length > 0 ? (
        <div className="gr">
          {p.decisions.length > 0 ? (
            <div>
              <h4 className="m">Engineering decisions</h4>
              <List items={p.decisions} />
            </div>
          ) : null}
          {p.challenges.length > 0 ? (
            <div>
              <h4 className="m">Engineering considerations</h4>
              <List items={p.challenges} />
            </div>
          ) : null}
        </div>
      ) : null}
      {p.tech.length > 0 ? (
        <>
          <h4 className="m">Technologies</h4>
          <div className="tags">
            {p.tech.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>
        </>
      ) : null}
      {p.images?.length ? (
        <>
          <h4 className="m">Screenshots</h4>
          <div className="gal">
            {p.images.map((slot) => (
              <figure className="shot" key={slot.file}>
                <Image
                  src={`/${slot.file}`}
                  alt={`${p.name}: ${slot.caption}`}
                  loading="lazy"
                  width={200}
                  height={200}
                />
                <figcaption className="m">{slot.caption}</figcaption>
              </figure>
            ))}
          </div>
        </>
      ) : null}
      {hasLinks ? (
        <div className="lk">
          {p.repo ? (
            <a
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
              href={p.repo}
            >
              {p.repoLabel ?? "GitHub"} →
            </a>
          ) : null}
          {p.demo ? (
            <a
              className="btn p"
              target="_blank"
              rel="noopener noreferrer"
              href={p.demo}
            >
              {p.demoLabel ?? "Live demo"} →
            </a>
          ) : null}
          {p.app ? (
            <a
              className="btn p"
              target="_blank"
              rel="noopener noreferrer"
              href={p.app}
            >
              {p.appLabel ?? "Web application"} →
            </a>
          ) : null}
          {p.informationalWebsite ? (
            <a
              className="btn p"
              target="_blank"
              rel="noopener noreferrer"
              href={p.informationalWebsite}
            >
              {p.informationalWebsiteLabel ?? "Informational website"} →
            </a>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export function Work() {
  const [sel, setSel] = useState<Project | null>(null);
  const dlg = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (sel && dlg.current && !dlg.current.open) dlg.current.showModal();
  }, [sel]);
  const close = () => dlg.current?.close();
  const key = (p: Project) => (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setSel(p);
    }
  };

  return (
    <section id="work" aria-labelledby="wh">
      <p className="m">04 — Selected projects</p>
      <h2 className="d xh rv-el" id="wh">
        Selected <span className="ac">work.</span>
      </h2>
      <div>
        {DATA.projects.map((p, i) => (
          <article
            key={p.name}
            className="pj rv-el"
            role="button"
            tabIndex={0}
            aria-label={`Open details: ${p.name}`}
            onClick={() => setSel(p)}
            onKeyDown={key(p)}
          >
            <h3 className="d big">{p.name}</h3>
            <div className="pv">
              <Art i={i} />
              <span
                className="m"
                style={{ position: "absolute", left: ".8rem", bottom: ".6rem" }}
              >
                {p.shot}
              </span>
            </div>
            <div className="info">
              <p>{p.desc}</p>
              <div className="m">
                0{i + 1} / {p.tag}
                <br />
                {p.tech.join(" · ")}
                <br />
                <span style={{ color: "var(--ac)" }}>View case study →</span>
              </div>
            </div>
          </article>
        ))}
      </div>
      {DATA.experiments.length > 0 ? (
        <>
          <div style={{ padding: "4rem clamp(1.1rem,4vw,3.5rem) 1.5rem" }}>
            <p className="m">Additional project</p>
          </div>
          <div className="exg">
            {DATA.experiments.map((p, i) => (
              <button
                key={p.name}
                className="ex rv-el"
                onClick={() => setSel(p)}
              >
                <span className="m">
                  {String(i + DATA.projects.length + 1).padStart(2, "0")} /{" "}
                  {p.kind}
                </span>
                <h3 className="d">{p.name}</h3>
                <span className="m" style={{ textTransform: "none" }}>
                  {p.desc}
                </span>
              </button>
            ))}
          </div>
        </>
      ) : null}
      <dialog
        ref={dlg}
        aria-labelledby="dt"
        onClose={() => setSel(null)}
        onClick={(e: MouseEvent<HTMLDialogElement>) => {
          if (e.target === dlg.current) close();
        }}
      >
        {sel ? <Details p={sel} onClose={close} /> : null}
      </dialog>
    </section>
  );
}
