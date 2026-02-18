"use client";

import { User } from "lucide-react";
import type { IgProfile } from "@/lib/ig-post-filter-data";

interface ProfileHeaderProps {
  profile: IgProfile;
}

function formatCount(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 10_000) return `${(n / 1_000).toFixed(1)}K`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return n.toString();
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <div className="px-4 py-4">
      {/* Mobile layout */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5 ring-2 ring-border sm:size-24">
          <User className="size-8 text-muted-foreground sm:size-10" />
        </div>

        {/* Stats */}
        <div className="flex flex-1 justify-around">
          <StatItem value={profile.posts} label="posts" />
          <StatItem value={profile.followers} label="followers" />
          <StatItem value={profile.following} label="following" />
        </div>
      </div>

      {/* Name + Bio */}
      <div className="mt-3">
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-semibold">{profile.displayName}</span>
        </div>
        <p className="mt-1 whitespace-pre-line text-sm text-foreground">
          {profile.bio}
        </p>
      </div>

      {/* Action buttons */}
      <div className="mt-3 flex gap-2">
        <button className="flex-1 rounded-lg bg-secondary px-4 py-1.5 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80">
          Follow
        </button>
        <button className="flex-1 rounded-lg bg-secondary px-4 py-1.5 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80">
          Message
        </button>
      </div>
    </div>
  );
}

function StatItem({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-base font-semibold">{formatCount(value)}</span>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  );
}
