# Mooque — Design Exploration

A portfolio of design explorations — from concept to code. Mobile, web, tablet, and beyond.

## Structure

```
apps/
  web/                  → Next.js 15 portfolio (App Router, React 19)
packages/
  ui/                   → Shared design system (Shadcn/ui, Tailwind v4, OKLCH tokens)
  utils/                → Shared hooks, types, and helpers
  tailwind-config/      → Shared Tailwind preset
  typescript-config/    → Shared TypeScript configurations
content/                → Future blog / docs / MDX content
```

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build all packages
pnpm build

# Format code
pnpm format
```

## Tech Stack

- **Framework**: Next.js 15, React 19
- **Styling**: Tailwind CSS v4 with OKLCH design tokens
- **Components**: Shadcn/ui (new-york style)
- **Monorepo**: Turborepo + pnpm workspaces
- **Language**: TypeScript

## Design System

The shared UI package (`packages/ui`) provides:

- **Theme tokens**: OKLCH color variables with light/dark mode
- **Components**: Button, Card, Badge, and more via Shadcn/ui
- **Theme provider**: Light/dark/system mode with per-project theme overrides
- **Utility**: `cn()` for conditional class merging

### Adding Shadcn Components

```bash
cd apps/web
npx shadcn@latest add [component]
```

The CLI installs shared components to `packages/ui` and app-specific ones to `apps/web/components`.

### Per-Project Theming

Each design exploration can override the base theme using `data-theme` attributes:

```css
[data-theme="my-project"] {
  --primary: oklch(0.55 0.24 262);
}
```

## Adding a New Project

1. Add an entry to `apps/web/lib/projects.ts`
2. The showcase page at `/projects/[slug]` renders automatically
3. Optionally create a theme override in `packages/ui/src/themes/`
