import type { Project } from "@workspace/utils";

export const projects: Project[] = [
  {
    slug: "habit-tracker",
    title: "Habit Tracker",
    description:
      "A minimal habit tracking app exploring streak mechanics and gentle motivation through micro-interactions.",
    tags: ["mobile", "wellness", "interaction-design"],
    platform: ["mobile"],
    status: "concept",
    featured: true,
    theme: "example-project",
    createdAt: "2026-02-18",
  },
  {
    slug: "recipe-dashboard",
    title: "Recipe Dashboard",
    description:
      "A responsive web dashboard for recipe management with a focus on typography, spacing, and visual hierarchy.",
    tags: ["web", "food", "dashboard"],
    platform: ["web", "tablet"],
    status: "concept",
    featured: true,
    createdAt: "2026-02-18",
  },
  {
    slug: "reading-list",
    title: "Reading List",
    description:
      "A cross-platform reading list app exploring card layouts, filtering patterns, and offline-first architecture.",
    tags: ["web", "mobile", "productivity"],
    platform: ["web", "mobile"],
    status: "concept",
    createdAt: "2026-02-18",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
