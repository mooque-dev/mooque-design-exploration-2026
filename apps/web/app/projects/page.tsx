import type { Metadata } from "next";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@workspace/ui/components/card";
import { Badge } from "@workspace/ui/components/badge";
import { projects } from "@/lib/projects";
import { cn } from "@workspace/ui/lib/utils";

export const metadata: Metadata = {
  title: "Projects",
  description: "All design explorations — concepts, prototypes, and builds.",
};

function statusClass(status: string) {
  if (status === "in-progress")
    return "border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400";
  if (status === "shipped")
    return "border-blue-500/40 bg-blue-500/10 text-blue-700 dark:text-blue-400";
  return "";
}

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
      <div className="mb-10 animate-fade-up">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Projects
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          All design explorations — from early concepts to working prototypes.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group animate-fade-up"
            style={{ animationDelay: `${100 + i * 75}ms` }}
          >
            <Card className="h-full group-hover:-translate-y-1 group-hover:shadow-md">
              <CardHeader>
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
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs text-muted-foreground">
                      #{tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
