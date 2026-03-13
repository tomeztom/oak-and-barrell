interface SectionDividerProps {
  variant?: "line" | "gradient" | "none";
  from?: "dark" | "cream";
  to?: "dark" | "cream";
}

export default function SectionDivider({
  variant = "none",
  from = "dark",
  to = "cream",
}: SectionDividerProps) {
  if (variant === "none") return null;

  if (variant === "line") {
    const color = from === "dark" ? "var(--border-dark)" : "var(--border-light)";
    return (
      <div aria-hidden="true" className="w-full h-px" style={{ backgroundColor: color }} />
    );
  }

  const fromColor = from === "dark" ? "var(--bg-primary)" : "var(--bg-cream)";
  const toColor = to === "dark" ? "var(--bg-primary)" : "var(--bg-cream)";

  return (
    <div
      aria-hidden="true"
      className="w-full h-20"
      style={{
        background: `linear-gradient(180deg, ${fromColor} 0%, ${toColor} 100%)`,
      }}
    />
  );
}
