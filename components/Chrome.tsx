"use client";
import { useEffect, useRef, useState } from "react";

export function Chrome() {
  const [gone, setGone] = useState(false);
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = window.setTimeout(() => { setGone(true); document.body.classList.add("in"); }, reduce ? 0 : 700);

    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("on"); io.unobserve(e.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll(".rv-el").forEach((el) => io.observe(el));

    const move = (e: PointerEvent) => {
      if (e.pointerType === "mouse" && cursor.current) cursor.current.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
    };
    const over = (e: PointerEvent) => cursor.current?.classList.toggle("h", !!(e.target as Element).closest("a,button,.pj,.xi"));
    addEventListener("pointermove", move);
    document.addEventListener("pointerover", over);
    return () => { clearTimeout(t); io.disconnect(); removeEventListener("pointermove", move); document.removeEventListener("pointerover", over); };
  }, []);

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <div id="cu" ref={cursor} aria-hidden="true" />
      <div id="ld" className={gone ? "go" : ""} aria-hidden="true"><b className="d">M.M</b></div>
      <div id="tt" role="status" aria-live="polite" />
    </>
  );
}

const LINKS: [string, string][] = [["About", "#about"], ["Do", "#do"], ["Work", "#work"], ["Think", "#think"], ["Kit", "#kit"], ["Path", "#path"], ["Contact", "#contact"]];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav aria-label="Primary">
      <a href="#hero" className="m" style={{ color: "inherit" }}>MM/2026</a>
      <button id="mb" aria-expanded={open} aria-controls="lk" onClick={() => setOpen((o) => !o)}>{open ? "CLOSE" : "MENU"}</button>
      <div className={`links m${open ? " open" : ""}`} id="lk" style={{ color: "inherit" }}>
        {LINKS.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer>
      <span className="m">Mercy Maina © 2026</span>
      <span className="m" style={{ color: "var(--fg)" }}>Built with curiosity and a lot of debugging.</span>
      <a className="btn" href="#hero">Back to top ↑</a>
    </footer>
  );
}
