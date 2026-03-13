import Image from "next/image";
import Badge from "../Badge";
import type { MenuItem } from "@/data/menu-items";

interface MenuItemRowProps {
  item: MenuItem;
}

export default function MenuItemRow({ item }: MenuItemRowProps) {
  return (
    <div className="flex items-center gap-4 py-3">
      {/* Thumbnail */}
      <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="64px"
        />
      </div>

      {/* Name + Description + Badge */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h4
            className="font-[family-name:var(--font-heading)] text-base font-medium"
            style={{ color: "var(--text-on-light)" }}
          >
            {item.name}
          </h4>
          {item.badge && <Badge type={item.badge} />}
        </div>
        <p
          className="text-sm truncate"
          style={{ color: "var(--text-on-light-muted)" }}
        >
          {item.description}
        </p>
      </div>

      {/* Dotted line */}
      <div
        className="flex-1 border-b border-dotted hidden sm:block"
        style={{ borderColor: "var(--border-light)" }}
      />

      {/* Price */}
      <p
        className="text-lg font-bold shrink-0"
        style={{ color: "var(--accent-primary)" }}
        aria-label={`Price: $${item.price}`}
      >
        ${item.price}
      </p>
    </div>
  );
}
