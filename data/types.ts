export interface ImageSlot {
  file: string;
  caption: string;
}

export interface Project {
  name: string;
  kind?: string;
  tag?: string;
  desc: string;
  tech: string[];
  role: string;
  mine?: string[];
  team?: string[];
  problem: string;
  decisions: string[];
  challenges: string[];
  repo: string;
  repoLabel?: string;
  demo?: string;
  demoLabel?: string;
  shot?: string;
  images?: ImageSlot[];
  app?: string;
  informationalWebsite?: string;
  appLabel?: string;
  informationalWebsiteLabel?: string;
}

export type Expertise = [
  title: string,
  blurb: string,
  tech: string[],
  keywords: string[],
];

export interface TimelineItem {
  title: string;
  sub: string;
  label: string;
  note: string;
}

export interface PortfolioData {
  email: string;
  github: string;
  linkedin: string;
  resume: string;
  facts: [string, string, string][];
  expertise: Expertise[];
  projects: Project[];
  experiments: Project[];
  principles: string[];
  toolkit: Record<string, string[]>;
  timeline: TimelineItem[];
}
