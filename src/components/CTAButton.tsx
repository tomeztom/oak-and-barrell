import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "default" | "lg";

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit";
}

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  default: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-base",
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[var(--accent-primary)] text-white hover:bg-[var(--accent-primary-hover)] active:bg-[var(--accent-primary-active)] shadow-[var(--shadow-button)]",
  secondary:
    "bg-transparent border-2 border-[var(--accent-primary)] text-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-white",
  ghost:
    "bg-transparent text-[var(--accent-primary)] hover:text-[var(--accent-primary-hover)]",
};

export default function CTAButton({
  children,
  variant = "primary",
  size = "default",
  href,
  onClick,
  disabled = false,
  className = "",
  type = "button",
}: CTAButtonProps) {
  const classes = `inline-flex items-center justify-center font-semibold rounded-[var(--radius-lg)] transition-all duration-150 ease-in-out focus:outline-2 focus:outline-offset-2 focus:outline-[var(--accent-primary)] min-h-[44px] ${variantClasses[variant]} ${sizeClasses[size]} ${disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"} ${className}`;

  if (href && !disabled) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled || undefined}
      className={classes}
    >
      {children}
    </button>
  );
}
