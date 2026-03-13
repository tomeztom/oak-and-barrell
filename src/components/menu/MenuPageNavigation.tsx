"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Category } from "@/data/menu-items";

interface MenuPageNavigationProps {
  categories: Category[];
  current: number;
  onNavigate: (index: number) => void;
}

export default function MenuPageNavigation({
  categories,
  current,
  onNavigate,
}: MenuPageNavigationProps) {
  return (
    <div className="flex items-center justify-center gap-4 py-4">
      <button
        onClick={() => onNavigate(Math.max(0, current - 1))}
        disabled={current === 0}
        aria-label="Previous category"
        className="p-2 rounded-full transition-all duration-150 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black/10"
        style={{ color: "var(--text-on-light)" }}
      >
        <ChevronLeft size={24} />
      </button>

      <div className="flex gap-2">
        {categories.map((cat, i) => (
          <button
            key={cat}
            onClick={() => onNavigate(i)}
            aria-label={cat}
            aria-current={i === current ? "true" : undefined}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-150 cursor-pointer ${
              i === current
                ? "scale-125"
                : "opacity-40 hover:opacity-70"
            }`}
            style={{
              backgroundColor:
                i === current
                  ? "var(--accent-primary)"
                  : "var(--text-on-light-muted)",
            }}
          />
        ))}
      </div>

      <button
        onClick={() =>
          onNavigate(Math.min(categories.length - 1, current + 1))
        }
        disabled={current === categories.length - 1}
        aria-label="Next category"
        className="p-2 rounded-full transition-all duration-150 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black/10"
        style={{ color: "var(--text-on-light)" }}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
