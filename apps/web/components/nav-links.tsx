"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@workspace/ui/lib/utils";

const navItems = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {navItems.map((item) => {
        const isActive =
          pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "relative px-3 py-2 text-sm font-medium transition-colors duration-150",
              "after:absolute after:bottom-0 after:left-3 after:right-3 after:h-px",
              "after:rounded-full after:bg-foreground after:content-['']",
              "after:origin-left after:transition-transform after:duration-200 after:ease-out",
              isActive
                ? "text-foreground after:scale-x-100"
                : "text-muted-foreground after:scale-x-0 hover:text-foreground hover:after:scale-x-75"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}
