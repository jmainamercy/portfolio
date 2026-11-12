"use client";
import { useState, type FormEvent } from "react";
import { DATA } from "@/data/portfolio";
import { toast } from "@/lib/toast";
import { ResumeLink } from "./ResumeLink";

const EMAIL_OK = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(DATA.email);

function Out({ label, href }: { label: string; href: string }) {
  if (!href) return null;
  const external = !href.startsWith("mailto:");
  return <a className="btn" href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{label} →</a>;
}

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const set = (k: keyof typeof form) => (e: { target: { value: string } }) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!EMAIL_OK) { toast("Recipient email isn’t set yet — add it to data/portfolio.ts."); return; }
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${DATA.email}?subject=${encodeURIComponent("Portfolio enquiry from " + form.name)}&body=${encodeURIComponent(body)}`;
    toast(`Opening your mail app. If nothing opens, write to ${DATA.email}`);
  };

  return (
    <section id="contact" aria-labelledby="ch">
      <p className="m">08 — Contact</p>
      <h2 className="d rv-el" id="ch">Have a problem worth solving?</h2>
      <p style={{ maxWidth: "52ch", fontSize: "1.25rem" }}>I’m always interested in interesting engineering challenges, opportunities to learn and people building meaningful things.</p>
      <div className="cg">
        <div style={{ display: "grid", gap: ".8rem", alignContent: "start" }}>
          <Out label="Email" href={EMAIL_OK ? `mailto:${DATA.email}` : ""} />
          <Out label="GitHub" href={DATA.github} />
          <Out label="LinkedIn" href={DATA.linkedin} />
          <ResumeLink className="btn p">Download résumé ↓</ResumeLink>
        </div>
        <form onSubmit={submit} aria-label="Contact form">
          <label className="m" htmlFor="fn">Name</label>
          <input id="fn" required autoComplete="name" placeholder="Your name" value={form.name} onChange={set("name")} />
          <label className="m" htmlFor="fe">Email</label>
          <input id="fe" type="email" required autoComplete="email" placeholder="you@example.com" value={form.email} onChange={set("email")} />
          <label className="m" htmlFor="fm">Message</label>
          <textarea id="fm" rows={4} required placeholder="What are you working on?" value={form.message} onChange={set("message")} />
          <button className="btn p" type="submit" style={{ justifySelf: "start" }}>Open in my mail app →</button>
        </form>
      </div>
    </section>
  );
}
