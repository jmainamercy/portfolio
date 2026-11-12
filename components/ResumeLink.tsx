import type { ReactNode } from "react";
import { DATA } from "@/data/portfolio";

export function ResumeLink({ className, children }: { className?: string; children: ReactNode }) {
  if (!DATA.resume) return null;
  return <a className={className} href={DATA.resume} target="_blank" rel="noopener noreferrer">{children}</a>;
}
