"use client";
import { useEffect, useRef, useState } from "react";
import { DATA } from "@/data/portfolio";
import { Ph } from "./Ph";

export function Philosophy() {
  return (
    <section id="think" aria-labelledby="th">
      <p className="m">05 — Philosophy</p>
      <h2 className="d xh rv-el" id="th">Good software isn’t just about <span className="ac">making it work.</span></h2>
      <div>
        {DATA.principles.map((t, i) => (
          <div className="th rv-el" key={t}><span className="d">0{i + 1}</span><p>{t}</p></div>
        ))}
      </div>
    </section>
  );
}

export function Toolkit() {
  const keys = Object.keys(DATA.toolkit);
  const [k, setK] = useState(keys[0]);
  const hoverable = () => matchMedia("(hover:hover)").matches;
  return (
    <section id="kit" aria-labelledby="kh">
      <p className="m">06 — Toolkit</p>
      <h2 className="d xh rv-el" id="kh">My <span className="ac">toolkit.</span></h2>
      <div className="tk">
        <div className="cats" role="tablist" aria-label="Toolkit categories">
          {keys.map((c) => (
            <button key={c} className="cat" role="tab" aria-selected={c === k} onClick={() => setK(c)} onMouseEnter={() => hoverable() && setK(c)}>
              {c}<span>{DATA.toolkit[c].length}</span>
            </button>
          ))}
        </div>
        <div id="chips" role="tabpanel" aria-live="polite" key={k}>
          {DATA.toolkit[k].map((t, i) => <span className="chip" key={t} style={{ animationDelay: `${i * 60}ms` }}>{t}</span>)}
        </div>
      </div>
    </section>
  );
}

export function Path() {
  const tl = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = tl.current;
    if (!el) return;
    const onScroll = () => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--p", `${Math.min(1, Math.max(0, (innerHeight * 0.6 - r.top) / r.height)) * 100}%`);
    };
    onScroll(); addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section id="path" aria-labelledby="ph">
      <p className="m">07 — Experience &amp; education</p>
      <h2 className="d xh rv-el" id="ph">The <span className="ac">path</span> so far.</h2>
      <div className="tl" ref={tl}>
        <i />
        {DATA.timeline.map((t) => (
          <div className="te rv-el" key={t.title}>
            <span className="m">{t.label}</span>
            <h3 className="d">{t.title}</h3>
            <p style={{ fontSize: "1.2rem", margin: ".2rem 0" }}>{t.sub}</p>
            <p><Ph s={t.note} /></p>
          </div>
        ))}
      </div>
    </section>
  );
}
