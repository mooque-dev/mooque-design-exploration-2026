import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { NavLinks } from "@/components/nav-links";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold transition-opacity duration-150 hover:opacity-70"
        >
          <span className="text-lg tracking-tight">mooque</span>
        </Link>

        <nav className="flex items-center gap-1">
          <NavLinks />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
