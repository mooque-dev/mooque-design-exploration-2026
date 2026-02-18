import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Mooque — a design exploration portfolio documenting thought processes, research, and creative ideas.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          About
        </h1>

        <div className="mt-8 space-y-6 text-muted-foreground">
          <p className="text-lg">
            Mooque is a living portfolio of design explorations — a space to
            turn ideas into tangible, interactive experiences across mobile, web,
            and tablet.
          </p>

          <h2 className="text-xl font-semibold text-foreground">
            The Approach
          </h2>
          <p>
            Every project starts with research and a clear design intent. From
            there, it moves through wireframing, system design, and
            implementation — all documented along the way. The goal is not just
            the final product, but the journey of getting there.
          </p>

          <h2 className="text-xl font-semibold text-foreground">
            Systems Thinking
          </h2>
          <p>
            This portfolio is built on a shared design system — reusable tokens,
            consistent components, and flexible theming. Each project can have
            its own visual identity while benefiting from the same underlying
            architecture.
          </p>

          <h2 className="text-xl font-semibold text-foreground">
            Tech Stack
          </h2>
          <ul className="list-inside list-disc space-y-1">
            <li>
              <span className="text-foreground">React 19</span> with Next.js 15
              App Router
            </li>
            <li>
              <span className="text-foreground">Tailwind CSS v4</span> with
              OKLCH design tokens
            </li>
            <li>
              <span className="text-foreground">Shadcn/ui</span> as the
              component foundation
            </li>
            <li>
              <span className="text-foreground">Turborepo</span> monorepo for
              shared packages
            </li>
            <li>
              <span className="text-foreground">TypeScript</span> throughout
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground">
            What&apos;s Next
          </h2>
          <p>
            Blog posts documenting design decisions. Video walkthroughs of
            explorations. Mobile app versions. This portfolio will grow as new
            ideas take shape.
          </p>
        </div>
      </div>
    </div>
  );
}
