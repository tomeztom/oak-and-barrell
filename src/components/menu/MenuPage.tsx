import type { Category, MenuItem } from "@/data/menu-items";
import MenuItemRow from "./MenuItemRow";

interface MenuPageProps {
  category: Category;
  items: MenuItem[];
}

export default function MenuPage({ category, items }: MenuPageProps) {
  return (
    <div className="p-6 md:p-10 min-h-[500px]">
      <h3
        className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-semibold text-center mb-8 pb-4 border-b"
        style={{
          color: "var(--text-on-light)",
          borderColor: "var(--border-light)",
        }}
      >
        {category}
      </h3>
      <div className="divide-y" style={{ borderColor: "var(--border-light)" }}>
        {items.map((item) => (
          <MenuItemRow key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
