"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowUpDown, Check } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";
import { SORT_OPTIONS, type SortOption } from "@/lib/ig-post-filter-data";

interface SortControlProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export function SortControl({ value, onChange }: SortControlProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-sm font-medium transition-colors hover:border-primary/30"
      >
        <ArrowUpDown className="size-3.5" />
        <span className="hidden sm:inline">Sort</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-48 rounded-xl border bg-background p-1 shadow-lg">
          {SORT_OPTIONS.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className={cn(
                "flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors",
                value === option.value
                  ? "bg-primary/10 text-primary"
                  : "text-foreground hover:bg-muted"
              )}
            >
              {option.label}
              {value === option.value && <Check className="size-3.5" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
