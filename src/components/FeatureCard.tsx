import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  text: string;
  dark?: boolean;
}

export default function FeatureCard({
  icon: Icon,
  title,
  text,
  dark = false,
}: FeatureCardProps) {
  return (
    <div className="text-center">
      <Icon
        size={48}
        className="mx-auto mb-4"
        style={{ color: "var(--accent-primary)" }}
        aria-hidden="true"
      />
      <h3
        className="font-[family-name:var(--font-heading)] text-xl font-semibold mb-2"
        style={{
          color: dark ? "var(--text-on-dark)" : "var(--text-on-light)",
        }}
      >
        {title}
      </h3>
      <p
        className="text-base"
        style={{
          color: dark
            ? "var(--text-on-dark-muted)"
            : "var(--text-on-light-muted)",
        }}
      >
        {text}
      </p>
    </div>
  );
}
