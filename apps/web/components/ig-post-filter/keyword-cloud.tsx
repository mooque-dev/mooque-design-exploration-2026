"use client";

import { cn } from "@workspace/ui/lib/utils";

interface KeywordCloudProps {
  keywords: { keyword: string; count: number }[];
  selected: string[];
  onToggle: (keyword: string) => void;
  onClearAll: () => void;
}

export function KeywordCloud({
  keywords,
  selected,
  onToggle,
  onClearAll,
}: KeywordCloudProps) {
  const isFiltering = selected.length > 0;

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={onClearAll}
        className={cn(
          "inline-flex items-center rounded-full border px-3 py-1.5 text-sm font-medium transition-all",
          !isFiltering
            ? "border-primary/20 bg-primary/10 text-primary"
            : "border-border bg-background text-muted-foreground hover:border-primary/30 hover:text-foreground"
        )}
      >
        All
      </button>
      {keywords.map(({ keyword, count }) => {
        const active = selected.includes(keyword);
        return (
          <button
            key={keyword}
            onClick={() => onToggle(keyword)}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-all",
              active
                ? "border-primary/20 bg-primary/10 text-primary"
                : "border-border bg-background text-foreground hover:border-primary/30"
            )}
          >
            <span>{keyword}</span>
            <span
              className={cn(
                "text-xs tabular-nums",
                active ? "text-primary/70" : "text-muted-foreground"
              )}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
