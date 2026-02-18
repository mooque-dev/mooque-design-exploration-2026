export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  thumbnail?: string;
  platform: Platform[];
  status: ProjectStatus;
  featured?: boolean;
  theme?: string;
  createdAt: string;
  updatedAt?: string;
}

export type Platform = "web" | "mobile" | "tablet" | "desktop";

export type ProjectStatus = "concept" | "in-progress" | "completed" | "archived";

export interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
  external?: boolean;
}
