import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@workspace/ui/components/card";
import { Badge } from "@workspace/ui/components/badge";
import { getFeaturedProjects } from "@/lib/projects";

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="container mx-auto px-4 py-24 md:px-6 md:py-32 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Design ideas,
            <br />
            <span className="text-muted-foreground">brought to life.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            A collection of design explorations — from concept to code.
            Researching, prototyping, and building across mobile, web, and
            tablet.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/projects">
                View Projects
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">About Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="border-t bg-muted/40 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Featured Explorations
              </h2>
              <p className="mt-2 text-muted-foreground">
                Recent design concepts and experiments.
              </p>
            </div>
            <Button asChild variant="ghost" className="hidden md:flex">
              <Link href="/projects">
                View all
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {featured.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`}>
                <Card className="h-full transition-shadow hover:shadow-md">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      {project.platform.map((p) => (
                        <Badge key={p} variant="secondary">
                          {p}
                        </Badge>
                      ))}
                      <Badge variant="outline">{project.status}</Badge>
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-muted-foreground"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-6 text-center md:hidden">
            <Button asChild variant="outline">
              <Link href="/projects">View all projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Philosophy / CTA */}
      <section className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Systems-first thinking
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every exploration starts with a design system foundation — reusable
            tokens, consistent components, and flexible theming. This ensures
            each project feels intentional while remaining adaptable.
          </p>
        </div>
      </section>
    </div>
  );
}
