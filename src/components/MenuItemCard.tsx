import Image from "next/image";
import Badge from "./Badge";
import type { MenuItem } from "@/data/menu-items";

interface MenuItemCardProps {
  item: MenuItem;
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <article
      className="rounded-lg overflow-hidden transition-all duration-250 ease-in-out hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]"
      style={{
        backgroundColor: "var(--bg-tertiary)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {item.badge && (
          <div className="absolute top-2 left-2">
            <Badge type={item.badge} />
          </div>
        )}
      </div>
      <div className="p-4">
        <h3
          className="font-[family-name:var(--font-heading)] text-xl font-medium mb-2"
          style={{ color: "var(--text-on-dark)" }}
        >
          {item.name}
        </h3>
        <p
          className="text-sm mb-3 line-clamp-2"
          style={{ color: "var(--text-on-dark-muted)" }}
        >
          {item.description}
        </p>
        <p
          className="text-xl font-bold"
          style={{ color: "var(--accent-primary)" }}
          aria-label={`Price: $${item.price}`}
        >
          ${item.price}
        </p>
      </div>
    </article>
  );
}
