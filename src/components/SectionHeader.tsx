interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  subtitle?: string;
  dark?: boolean;
  as?: "h2" | "h3";
}

export default function SectionHeader({
  eyebrow,
  heading,
  subtitle,
  dark = true,
  as: Tag = "h2",
}: SectionHeaderProps) {
  return (
    <div className="text-center mb-12">
      {eyebrow && (
        <p
          className="font-[family-name:var(--font-accent)] text-sm uppercase tracking-[0.1em] mb-2"
          style={{ color: "var(--text-accent)" }}
        >
          {eyebrow}
        </p>
      )}
      <Tag
        className="font-[family-name:var(--font-heading)] text-4xl font-semibold mb-3"
        style={{
          color: dark ? "var(--text-on-dark)" : "var(--text-on-light)",
        }}
      >
        {heading}
      </Tag>
      {subtitle && (
        <p
          className="text-base max-w-[600px] mx-auto"
          style={{
            color: dark
              ? "var(--text-on-dark-muted)"
              : "var(--text-on-light-muted)",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
