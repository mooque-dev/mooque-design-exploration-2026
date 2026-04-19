import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import { Badge } from "@workspace/ui/components/badge";
import { projects, getProject } from "@/lib/projects";
import { IgProfileExplorer } from "@/components/ig-post-filter/ig-profile-explorer";

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

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const ShowcaseComponent = SHOWCASE_COMPONENTS[slug];

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-16">
      <Button asChild variant="ghost" className="mb-6">
        <Link href="/projects">
          <ArrowLeft className="size-4" />
          Back to projects
        </Link>
      </Button>

      <div className="mx-auto max-w-3xl">
        <div className="flex flex-wrap items-center gap-2">
          {project.platform.map((p) => (
            <Badge key={p} variant="secondary">
              {p}
            </Badge>
          ))}
          <Badge variant="outline">{project.status}</Badge>
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
  );
}
