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

export const metadata: Metadata = {
  title: "Projects",
  description: "All design explorations — concepts, prototypes, and builds.",
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Projects
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          All design explorations — from early concepts to working prototypes.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            <Card className="h-full transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="flex flex-wrap items-center gap-2">
                  {project.platform.map((p) => (
                    <Badge key={p} variant="secondary">
                      {p}
                    </Badge>
                  ))}
                  <Badge variant="outline">{project.status}</Badge>
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
