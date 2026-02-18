"use client";

import { useState } from "react";
import {
  Heart,
  MessageCircle,
  Bookmark,
  Repeat2,
  Image,
  Play,
  Layers,
  X,
} from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";
import type { IgPost } from "@/lib/ig-post-filter-data";

interface PostGridProps {
  posts: IgPost[];
  query: string;
  activeKeywords: string[];
}

function formatNumber(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toString();
}

function timeAgo(timestamp: string): string {
  const diff = Date.now() - new Date(timestamp).getTime();
  const days = Math.floor(diff / 86_400_000);
  if (days < 1) return "today";
  if (days === 1) return "1d ago";
  if (days < 7) return `${days}d ago`;
  if (days < 30) return `${Math.floor(days / 7)}w ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
}

function TypeIcon({ type }: { type: IgPost["type"] }) {
  switch (type) {
    case "reel":
      return <Play className="size-3.5 fill-current" />;
    case "carousel":
      return <Layers className="size-3.5" />;
    default:
      return null;
  }
}

export function PostGrid({ posts, query, activeKeywords }: PostGridProps) {
  const [selectedPost, setSelectedPost] = useState<IgPost | null>(null);

  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <Image className="size-12 text-muted-foreground/40" />
        <p className="mt-3 text-sm font-medium text-muted-foreground">
          No posts found
        </p>
        <p className="mt-1 text-xs text-muted-foreground/70">
          {query
            ? `No results for "${query}"`
            : activeKeywords.length > 0
              ? `No posts matching ${activeKeywords.map((k) => `"${k}"`).join(", ")}`
              : "No posts to display"}
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-0.5">
        {posts.map((post) => (
          <button
            key={post.id}
            onClick={() => setSelectedPost(post)}
            className="group relative aspect-square overflow-hidden bg-muted"
          >
            {/* Color placeholder for image */}
            <div
              className="absolute inset-0 transition-opacity group-hover:opacity-80"
              style={{ backgroundColor: post.color }}
            />

            {/* Type indicator */}
            {post.type !== "image" && (
              <div className="absolute right-1.5 top-1.5 text-white drop-shadow-md">
                <TypeIcon type={post.type} />
              </div>
            )}

            {/* Hover overlay with stats */}
            <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="flex items-center gap-1 text-sm font-semibold text-white">
                <Heart className="size-4 fill-current" />
                {formatNumber(post.likes)}
              </span>
              <span className="flex items-center gap-1 text-sm font-semibold text-white">
                <MessageCircle className="size-4 fill-current" />
                {formatNumber(post.comments)}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Post detail sheet */}
      {selectedPost && (
        <PostDetailSheet
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}
    </>
  );
}

function PostDetailSheet({
  post,
  onClose,
}: {
  post: IgPost;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-t-2xl bg-background sm:rounded-2xl">
        {/* Drag handle (mobile) */}
        <div className="flex justify-center py-2 sm:hidden">
          <div className="h-1 w-8 rounded-full bg-muted-foreground/30" />
        </div>

        <div className="flex items-center justify-between px-4 py-3">
          <span className="text-sm font-semibold">Post Detail</span>
          <button
            onClick={onClose}
            className="rounded-full p-1 hover:bg-muted"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Post image placeholder */}
        <div
          className={cn(
            "w-full",
            post.aspectRatio === "portrait"
              ? "aspect-[4/5]"
              : post.aspectRatio === "landscape"
                ? "aspect-video"
                : "aspect-square"
          )}
          style={{ backgroundColor: post.color }}
        />

        {/* Stats bar */}
        <div className="flex items-center gap-4 px-4 py-3">
          <StatPill icon={Heart} value={post.likes} />
          <StatPill icon={MessageCircle} value={post.comments} />
          <StatPill icon={Bookmark} value={post.saves} />
          <StatPill icon={Repeat2} value={post.reposts} />
          <span className="ml-auto text-xs text-muted-foreground">
            {timeAgo(post.timestamp)}
          </span>
        </div>

        {/* Caption */}
        <div className="px-4 pb-4">
          <p className="text-sm leading-relaxed">{post.caption}</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {post.keywords.map((kw) => (
              <span
                key={kw}
                className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatPill({
  icon: Icon,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
}) {
  return (
    <span className="flex items-center gap-1 text-sm text-muted-foreground">
      <Icon className="size-4" />
      <span className="text-xs tabular-nums">{formatNumber(value)}</span>
    </span>
  );
}
