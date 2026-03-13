import Image from "next/image";
import { images } from "@/data/pexels-images";
import MenuBook from "@/components/menu/MenuBook";

export default function MenuPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative min-h-[300px] h-[40vh] flex items-center justify-center">
        <Image
          src={images.menuHero}
          alt="Elegantly set dining table with fine cutlery"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-white mb-3">
            Our Menu
          </h1>
          <p className="text-base" style={{ color: "var(--text-on-dark-muted)" }}>
            From artisan sushi to prime-cut steaks — crafted with passion, served
            with pride
          </p>
        </div>
      </section>

      {/* Menu Book */}
      <section className="py-16 px-4 md:px-6" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="max-w-[1000px] mx-auto">
          <MenuBook />
        </div>
      </section>
    </>
  );
}
