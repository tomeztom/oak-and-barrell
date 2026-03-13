import type { BadgeType } from "@/data/menu-items";

const badgeColors: Record<BadgeType, string> = {
  chefsPick: "var(--badge-chefs-pick)",
  signature: "var(--badge-signature)",
  popular: "var(--badge-popular)",
  vegetarian: "var(--badge-vegetarian)",
  premium: "var(--badge-premium)",
  bestSeller: "var(--badge-best-seller)",
  houseFavorite: "var(--badge-house-favorite)",
  dailySpecial: "var(--badge-daily-special)",
  forTwo: "var(--badge-for-two)",
  local: "var(--badge-local)",
  byTheGlass: "var(--badge-by-the-glass)",
  sommelierPick: "var(--badge-sommelier-pick)",
  nonAlcoholic: "var(--badge-non-alcoholic)",
};

const badgeLabels: Record<BadgeType, string> = {
  chefsPick: "Chef's Pick",
  signature: "Signature",
  popular: "Popular",
  vegetarian: "Vegetarian",
  premium: "Premium",
  bestSeller: "Best Seller",
  houseFavorite: "House Favorite",
  dailySpecial: "Daily Special",
  forTwo: "For Two",
  local: "Local",
  byTheGlass: "By the Glass",
  sommelierPick: "Sommelier Pick",
  nonAlcoholic: "Non-Alcoholic",
};

interface BadgeProps {
  type: BadgeType;
  className?: string;
}

export default function Badge({ type, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-medium uppercase tracking-wide text-white whitespace-nowrap ${className}`}
      style={{ backgroundColor: badgeColors[type] }}
    >
      {badgeLabels[type]}
    </span>
  );
}
