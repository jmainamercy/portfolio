"use client";
import { useEffect, useRef, useState } from "react";
import { ResumeLink } from "./ResumeLink";

const eat = new Intl.DateTimeFormat("en-GB", { timeZone: "Africa/Nairobi", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });

function Clock() {
  const [t, setT] = useState("--:--:--");
  useEffect(() => { const tick = () => setT(eat.format(new Date())); tick(); const id = setInterval(tick, 1000); return () => clearInterval(id); }, []);
  return <b style={{ color: "var(--fg)", fontWeight: 600 }}>{t}</b>;
}

interface Dot { ox: number; oy: number; x: number; y: number }

function DotField({ heroRef }: { heroRef: React.RefObject<HTMLElement | null> }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current, hero = heroRef.current;
    const ctx = c?.getContext("2d");
    if (!c || !hero || !ctx) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches, S = 44;
    let W = 0, H = 0, vis = true, raf = 0, pts: Dot[] = [];
    const m = { x: -999, y: -999 };
    const size = () => {
      const d = Math.min(devicePixelRatio || 1, 2); W = c.clientWidth; H = c.clientHeight; c.width = W * d; c.height = H * d; ctx.setTransform(d, 0, 0, d, 0, 0); pts = [];
      for (let i = S / 2; i < W; i += S) for (let j = S / 2; j < H; j += S) pts.push({ ox: i, oy: j, x: i, y: j });
    };
    const move = (e: PointerEvent) => { const r = c.getBoundingClientRect(); m.x = e.clientX - r.left; m.y = e.clientY - r.top; };
    const leave = () => { m.x = m.y = -999; };
    const obs = new IntersectionObserver((e) => { vis = e[0].isIntersecting; });
    const frame = (t: number) => {
      if (vis) {
        ctx.clearRect(0, 0, W, H);
        for (const p of pts) {
          const dx = p.ox - m.x, dy = p.oy - m.y, d = Math.hypot(dx, dy), near = d < 160; let tx = p.ox, ty = p.oy;
          if (near) { const k = ((160 - d) / 160) * 38; tx += (dx / d) * k; ty += (dy / d) * k; }
          if (!reduce) tx += Math.sin(t / 1400 + p.oy * 0.02) * 3;
          p.x += (tx - p.x) * 0.12; p.y += (ty - p.y) * 0.12;
          ctx.fillStyle = near ? "#9d4dff" : "rgba(237,232,223,.28)"; ctx.fillRect(p.x - 1, p.y - 1, near ? 3 : 2, near ? 3 : 2);
        }
      }
      if (!reduce) raf = requestAnimationFrame(frame);
    };
    size(); addEventListener("resize", size); hero.addEventListener("pointermove", move); hero.addEventListener("pointerleave", leave); obs.observe(hero);
    if (reduce) frame(0); else raf = requestAnimationFrame(frame);
    return () => { cancelAnimationFrame(raf); obs.disconnect(); removeEventListener("resize", size); hero.removeEventListener("pointermove", move); hero.removeEventListener("pointerleave", leave); };
  }, [heroRef]);
  return <canvas id="cv" ref={ref} aria-hidden="true" />;
}

export function Hero() {
  const hero = useRef<HTMLElement>(null);
  return (
    <section id="hero" ref={hero} aria-labelledby="h1">
      <DotField heroRef={hero} />
      <div className="scrl m" aria-hidden="true">Scroll</div>
      <div className="meta m">
        <span><i className="dot" />Open to opportunities</span>
        <span>Nairobi, KE — <Clock /> EAT</span>
        <span>01 / 10</span>
      </div>
      <h1 className="d" id="h1">
        <span><i>Building systems.</i></span><span><i>Breaking things.</i></span><span><i>Making them better.</i></span>
      </h1>
      <div className="hrow">
        <div>
          <div className="d" style={{ fontSize: "clamp(1.4rem,3vw,2.4rem)" }}>Mercy Maina</div>
          <div className="m">Software Engineer / Nairobi, Kenya</div>
          <p style={{ marginTop: "1rem" }}>I write code, build intelligent systems, investigate failures and turn complex problems into working software.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a className="btn p" href="#work">Explore my work ↓</a>
          <ResumeLink className="btn">View résumé</ResumeLink>
        </div>
      </div>
    </section>
  );
}

export function Marquee({ text, dark, reverse }: { text: string; dark?: boolean; reverse?: boolean }) {
  const words = text.split(" ✳ ").filter(Boolean);
  return (
    <div className={`mq${dark ? " dk" : ""}${reverse ? " rv" : ""}`} aria-hidden="true">
      <div className="mt d">
        {Array.from({ length: 4 }).flatMap((_, k) => words.map((w) => <span key={`${k}-${w}`}>{w} ✳</span>))}
      </div>
    </div>
  );
}
