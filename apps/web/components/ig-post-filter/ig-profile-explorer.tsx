"use client";

import { useState, useMemo, useCallback } from "react";
import Fuse from "fuse.js";
import { Search, Grid3X3, Clapperboard, Bookmark as BookmarkIcon } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";
import {
  samplePosts,
  profile,
  extractKeywords,
  sortPosts,
  type SortOption,
  type IgPost,
} from "@/lib/ig-post-filter-data";
import { ProfileHeader } from "./profile-header";
import { KeywordCloud } from "./keyword-cloud";
import { SearchBar } from "./search-bar";
import { SortControl } from "./sort-control";
import { PostGrid } from "./post-grid";

const fuse = new Fuse(samplePosts, {
  keys: ["caption", "keywords"],
  threshold: 0.4,
  ignoreLocation: true,
});

const tabs = [
  { id: "posts" as const, icon: Grid3X3, label: "Posts" },
  { id: "reels" as const, icon: Clapperboard, label: "Reels" },
  { id: "saved" as const, icon: BookmarkIcon, label: "Saved" },
];

type TabId = (typeof tabs)[number]["id"];

export function IgProfileExplorer() {
  const [query, setQuery] = useState("");
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const [sort, setSort] = useState<SortOption>("newest");
  const [activeTab, setActiveTab] = useState<TabId>("posts");
  const [showSearch, setShowSearch] = useState(false);
  const [showFilters, setShowFilters] = useState(true);

  const toggleKeyword = useCallback((keyword: string) => {
    setSelectedKeywords((prev) =>
      prev.includes(keyword)
        ? prev.filter((k) => k !== keyword)
        : [...prev, keyword]
    );
  }, []);

  const clearKeywords = useCallback(() => {
    setSelectedKeywords([]);
  }, []);

  const filteredPosts = useMemo(() => {
    let posts: IgPost[] = samplePosts;

    if (activeTab === "reels") {
      posts = posts.filter((p) => p.type === "reel");
    }

    if (query.trim()) {
      const results = fuse.search(query);
      const matchedIds = new Set(results.map((r) => r.item.id));
      posts = posts.filter((p) => matchedIds.has(p.id));
    }

    if (selectedKeywords.length > 0) {
      posts = posts.filter((p) =>
        selectedKeywords.some((kw) => p.keywords.includes(kw))
      );
    }

    return sortPosts(posts, sort);
  }, [query, selectedKeywords, sort, activeTab]);

  const activeKeywordCounts = useMemo(() => {
    return extractKeywords(
      activeTab === "reels"
        ? samplePosts.filter((p) => p.type === "reel")
        : samplePosts
    );
  }, [activeTab]);

  return (
    <div className="mx-auto max-w-lg bg-background">
      {/* IG-style top bar */}
      <div className="sticky top-14 z-40 flex items-center justify-between border-b bg-background px-4 py-2.5">
        <span className="text-base font-semibold tracking-tight">
          {profile.username}
        </span>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setShowSearch(!showSearch)}
            className={cn(
              "rounded-full p-2 transition-colors",
              showSearch
                ? "bg-primary/10 text-primary"
                : "text-foreground hover:bg-muted"
            )}
          >
            <Search className="size-4" />
          </button>
        </div>
      </div>

      <ProfileHeader profile={profile} />

      {/* Tab bar */}
      <div className="flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex flex-1 items-center justify-center gap-1.5 py-2.5 transition-colors",
              activeTab === tab.id
                ? "border-b-2 border-foreground text-foreground"
                : "text-muted-foreground"
            )}
          >
            <tab.icon className="size-4" />
            <span className="hidden text-xs font-medium sm:inline">
              {tab.label}
            </span>
          </button>
        ))}
      </div>

      {/* Filter area */}
      {activeTab !== "saved" && (
        <div className="border-b">
          {/* Search + Sort row */}
          <div className="flex items-center gap-2 px-4 py-2.5">
            {showSearch ? (
              <SearchBar
                value={query}
                onChange={setQuery}
                className="flex-1"
              />
            ) : (
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={cn(
                  "text-xs font-medium transition-colors",
                  showFilters ? "text-primary" : "text-muted-foreground"
                )}
              >
                {showFilters ? "Hide filters" : "Show filters"}
              </button>
            )}
            <SortControl value={sort} onChange={setSort} />
          </div>

          {/* Keyword cloud */}
          {showFilters && (
            <div className="px-4 pb-3">
              <KeywordCloud
                keywords={activeKeywordCounts}
                selected={selectedKeywords}
                onToggle={toggleKeyword}
                onClearAll={clearKeywords}
              />
            </div>
          )}

          {/* Active filter summary */}
          {(selectedKeywords.length > 0 || query) && (
            <div className="flex items-center gap-2 border-t px-4 py-2">
              <span className="text-xs text-muted-foreground">
                {filteredPosts.length} post
                {filteredPosts.length !== 1 ? "s" : ""}
              </span>
              {selectedKeywords.length > 0 && (
                <button
                  onClick={clearKeywords}
                  className="text-xs font-medium text-primary"
                >
                  Clear filters
                </button>
              )}
            </div>
          )}
        </div>
      )}

      {/* Post grid */}
      {activeTab === "saved" ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <BookmarkIcon className="size-12 text-muted-foreground/40" />
          <p className="mt-3 text-sm text-muted-foreground">
            Saved posts are private
          </p>
        </div>
      ) : (
        <PostGrid
          posts={filteredPosts}
          query={query}
          activeKeywords={selectedKeywords}
        />
      )}
    </div>
  );
}
