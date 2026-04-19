import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { Badge } from "@workspace/ui/components/badge";
import { projects, getProject } from "@/lib/projects";
import { IgProfileExplorer } from "@/components/ig-post-filter/ig-profile-explorer";
import { cn } from "@workspace/ui/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

const SHOWCASE_COMPONENTS: Record<string, React.ComponentType> = {
  "ig-post-filter": IgProfileExplorer,
};

function statusClass(status: string) {
  if (status === "in-progress")
    return "border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400";
  if (status === "shipped")
    return "border-blue-500/40 bg-blue-500/10 text-blue-700 dark:text-blue-400";
  return "";
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const ShowcaseComponent = SHOWCASE_COMPONENTS[slug];

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-16">
      {/* Breadcrumb */}
      <nav className="animate-fade-in mb-8 flex items-center gap-1.5 text-sm text-muted-foreground">
        <Link
          href="/"
          className="transition-colors duration-150 hover:text-foreground"
        >
          Home
        </Link>
        <ChevronRight className="size-3.5 shrink-0" />
        <Link
          href="/projects"
          className="transition-colors duration-150 hover:text-foreground"
        >
          Projects
        </Link>
        <ChevronRight className="size-3.5 shrink-0" />
        <span className="truncate font-medium text-foreground">
          {project.title}
        </span>
      </nav>

      <div className="animate-fade-up mx-auto max-w-3xl">
        <div className="flex flex-wrap items-center gap-2">
          {project.platform.map((p) => (
            <Badge key={p} variant="secondary">
              {p}
            </Badge>
          ))}
          <Badge
            variant="outline"
            className={cn(statusClass(project.status))}
          >
            {project.status}
          </Badge>
        </div>

        <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
          {project.title}
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-sm text-muted-foreground">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <hr className="my-8" />

      <div className="animate-fade-up [animation-delay:150ms]">
        {ShowcaseComponent ? (
          <div className="mx-auto max-w-lg overflow-hidden rounded-2xl border shadow-sm">
            <ShowcaseComponent />
          </div>
        ) : (
          <div className="mx-auto max-w-3xl rounded-xl border border-dashed p-12 text-center">
            <p className="text-muted-foreground">
              This is where the design exploration for{" "}
              <span className="font-medium text-foreground">
                {project.title}
              </span>{" "}
              will live. Add screens, components, interaction demos, and
              documentation here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
