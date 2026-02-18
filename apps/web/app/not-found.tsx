import Link from "next/link";
import { Button } from "@workspace/ui/components/button";

export default function NotFound() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center px-4 py-32 text-center md:px-6">
      <h1 className="text-6xl font-bold tracking-tighter">404</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        This page doesn&apos;t exist yet — but it might soon.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Go Home</Link>
      </Button>
    </div>
  );
}
