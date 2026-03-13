"use client";

import { useState, useEffect, useCallback } from "react";
import { CATEGORIES, getItemsByCategory } from "@/data/menu-items";
import MenuPage from "./MenuPage";
import MenuPageNavigation from "./MenuPageNavigation";

export default function MenuBook() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const [animating, setAnimating] = useState(false);

  const navigate = useCallback(
    (index: number) => {
      if (index === current || animating) return;
      setDirection(index > current ? "right" : "left");
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
        setDirection(null);
      }, 400);
    },
    [current, animating]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && current > 0) navigate(current - 1);
      if (e.key === "ArrowRight" && current < CATEGORIES.length - 1)
        navigate(current + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, navigate]);

  const category = CATEGORIES[current];
  const items = getItemsByCategory(category);

  return (
    <div>
      {/* Desktop: Book */}
      <div className="hidden md:block">
        <div
          className="mx-auto max-w-[900px] rounded-xl overflow-hidden"
          style={{
            backgroundColor: "var(--bg-secondary)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          }}
        >
          {/* Book inner "page" */}
          <div
            className="relative overflow-hidden"
            style={{
              perspective: "1200px",
            }}
          >
            <div
              className={`transition-transform duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                animating
                  ? direction === "right"
                    ? "[transform:rotateY(-8deg)]"
                    : "[transform:rotateY(8deg)]"
                  : ""
              }`}
              style={{
                transformOrigin:
                  direction === "right" ? "left center" : "right center",
              }}
            >
              <div
                className="rounded-lg m-4"
                style={{ backgroundColor: "var(--bg-cream)" }}
              >
                <MenuPage category={category} items={items} />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div
            className="px-4 pb-4"
            style={{ backgroundColor: "var(--bg-secondary)" }}
          >
            <div
              className="rounded-lg p-2"
              style={{ backgroundColor: "var(--bg-cream)" }}
            >
              <MenuPageNavigation
                categories={CATEGORIES}
                current={current}
                onNavigate={navigate}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Tabs + List */}
      <div className="md:hidden">
        {/* Scrollable category tabs */}
        <div
          className="overflow-x-auto scrollbar-hide mb-6"
          role="tablist"
          aria-label="Menu categories"
        >
          <div className="flex gap-2 min-w-max px-4">
            {CATEGORIES.map((cat, i) => (
              <button
                key={cat}
                role="tab"
                aria-selected={i === current}
                onClick={() => setCurrent(i)}
                className={`px-4 py-2 text-sm font-medium uppercase tracking-wide rounded-full whitespace-nowrap transition-all duration-150 cursor-pointer ${
                  i === current
                    ? "text-white"
                    : "text-[var(--text-on-dark-muted)] hover:text-white"
                }`}
                style={
                  i === current
                    ? { backgroundColor: "var(--accent-primary)" }
                    : {}
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Items */}
        <div
          className="rounded-xl p-4"
          style={{ backgroundColor: "var(--bg-cream)" }}
          role="tabpanel"
          aria-label={category}
        >
          <h3
            className="font-[family-name:var(--font-heading)] text-xl font-semibold text-center mb-4 pb-3 border-b"
            style={{
              color: "var(--text-on-light)",
              borderColor: "var(--border-light)",
            }}
          >
            {category}
          </h3>
          <div>
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 py-3 border-b last:border-b-0"
                style={{ borderColor: "var(--border-light)" }}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4
                      className="font-[family-name:var(--font-heading)] text-sm font-medium"
                      style={{ color: "var(--text-on-light)" }}
                    >
                      {item.name}
                    </h4>
                    {item.badge && (
                      <span
                        className="inline-block rounded-full px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white"
                        style={{
                          backgroundColor: `var(--badge-${item.badge
                            .replace(/([A-Z])/g, "-$1")
                            .toLowerCase()
                            .replace(/^-/, "")})`,
                        }}
                      >
                        {item.badge
                          .replace(/([A-Z])/g, " $1")
                          .trim()}
                      </span>
                    )}
                  </div>
                  <p
                    className="text-xs truncate"
                    style={{ color: "var(--text-on-light-muted)" }}
                  >
                    {item.description}
                  </p>
                </div>
                <p
                  className="text-sm font-bold shrink-0"
                  style={{ color: "var(--accent-primary)" }}
                >
                  ${item.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
