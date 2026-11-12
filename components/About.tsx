"use client";
import { useEffect, useState } from "react";
import { DATA } from "@/data/portfolio";
import { Ph } from "./Ph";
import Image from "next/image";

export function About() {
  return (
    <section id="about" aria-labelledby="ah">
      <div className="ag">
        <p className="m" style={{ gridColumn: "1/-1" }}>
          02 — About
        </p>
        <h2 className="d rv-el" id="ah">
          More than just{" "}
          <span
            style={{
              background: "var(--ink)",
              color: "var(--paper)",
              padding: "0 .15em",
            }}
          >
            writing code.
          </span>
        </h2>
        <div className="ph rv-el" role="img" aria-label="Mercy Maina monogram">
          <Image
            src="/images/portrait.png"
            alt="Mercy Maina portrait"
            width={500}
            height={500}
            priority
          />
        </div>
        <div className="tx rv-el">
          <p>
            I&apos;m Mercy, a software engineer interested in the intersection
            of reliable software, intelligent systems and meaningful technology.
          </p>
          <p>
            I enjoy working across the engineering process — from understanding
            requirements and designing backend architecture to building
            applications, experimenting with machine learning and testing
            systems against real-world scenarios.
          </p>
          <p>
            I&apos;m particularly interested in understanding why things break,
            how to make them better and how technology can solve problems that
            matter.
          </p>
        </div>
        <div className="facts rv-el">
          {DATA.facts.map(([label, title, note]) => (
            <div key={title + label}>
              <span className="m">{label}</span>
              <h3 className="d">{title}</h3>
              <p style={{ margin: 0 }}>
                <Ph s={note} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Count({ to, run }: { to: number; run: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(to);
      return;
    }
    let s = 0;
    setN(0);
    const id = setInterval(() => {
      s++;
      setN(s);
      if (s >= to) clearInterval(id);
    }, 90);
    return () => clearInterval(id);
  }, [run, to]);
  return <>{n}</>;
}

export function Expertise() {
  const [open, setOpen] = useState<number | null>(null);

  const hoverable = () => matchMedia("(hover:hover)").matches;

  return (
    <section id="do" aria-labelledby="dh">
      <p className="m">03 — What I do</p>

      <h2 className="d xh" id="dh">
        The things I like <span className="ac">building.</span>
      </h2>

      <div>
        {DATA.expertise.map(([title, blurb, tech, keywords], i) => {
          const isOpen = open === i;

          return (
            <div
              key={title}
              className={`xi${isOpen ? " open" : ""}`}
              onMouseEnter={() => hoverable() && setOpen(i)}
            >
              <button
                className="xt"
                aria-expanded={isOpen}
                aria-controls={`xb${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className="m">0{i + 1}</span>
                <span className="d">{title}</span>
              </button>

              <div className="xb" id={`xb${i}`}>
                <div>
                  <div className="xin">
                    <div>
                      <p style={{ margin: "0 0 1rem", maxWidth: "40ch" }}>
                        {blurb}
                      </p>
                      <div className="m">{keywords.join(" · ")}</div>
                    </div>

                    <div>
                      <div className="num d">
                        <Count to={tech.length} run={isOpen} />
                      </div>
                      <div className="m" style={{ marginBottom: ".8rem" }}>
                        technologies in this area
                      </div>
                      <div className="tags">
                        {tech.map((t) => (
                          <span className="tag" key={t}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
