import Image from "next/image";
import { images } from "@/data/pexels-images";
import { menuItems } from "@/data/menu-items";
import { events } from "@/data/events";
import CTAButton from "@/components/CTAButton";
import SectionHeader from "@/components/SectionHeader";
import MenuItemCard from "@/components/MenuItemCard";
import FeatureCard from "@/components/FeatureCard";
import SectionDivider from "@/components/SectionDivider";
import { Gem, ChefHat, Flame } from "lucide-react";
import ReserveCTA from "./ReserveCTA";

const featuredIds = [
  "truffle-burrata",
  "dragon-roll",
  "prime-ribeye",
  "wagyu-smash-burger",
  "toro-sashimi",
  "chocolate-lava",
];

const featuredItems = featuredIds
  .map((id) => menuItems.find((i) => i.id === id)!)
  .filter(Boolean);

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[600px] h-[85vh] flex items-center justify-center">
        <Image
          src={images.hero}
          alt="Elegant restaurant dining table with warm lighting"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--overlay-gradient)" }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-6 max-w-[700px]">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-[4rem] font-bold text-white leading-tight tracking-tight mb-4">
            Delicious food &amp; wonderful eating experience
          </h1>
          <p className="text-base text-[var(--text-on-dark-muted)] mb-8 max-w-md mx-auto">
            A fusion of Japanese precision and Western warmth — premium steaks,
            artisan sushi, and handcrafted cocktails in the heart of Manhattan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/menu">Explore Our Menu</CTAButton>
            <ReserveCTA />
          </div>
        </div>
      </section>

      {/* Popular Dishes */}
      <section className="section-dark py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="From Our Kitchen"
            heading="Popular Dishes"
            subtitle="Hand-selected favorites from our chefs, crafted with the finest ingredients"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredItems.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
          <div className="text-center mt-12">
            <CTAButton href="/menu" variant="secondary">
              View Full Menu
            </CTAButton>
          </div>
        </div>
      </section>

      <SectionDivider variant="gradient" from="dark" to="cream" />

      {/* Experience */}
      <section className="section-cream py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="Why Oak & Barrell"
            heading="Immerse yourself in an asian experience"
            subtitle="Where Japanese culinary artistry meets the warmth of Western hospitality"
            dark={false}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              icon={Gem}
              title="Premium Ingredients"
              text="Sourced from the finest purveyors — A5 Wagyu from Miyazaki, bluefin toro from Tsukiji, dry-aged prime cuts from local farms."
            />
            <FeatureCard
              icon={ChefHat}
              title="Expert Craft"
              text="Our chef brings 20 years of experience from Tokyo and New York, blending precision technique with bold, inventive flavors."
            />
            <FeatureCard
              icon={Flame}
              title="Warm Atmosphere"
              text="Dark wood, warm lighting, and live music create an intimate setting perfect for date nights, celebrations, or a quiet weeknight dinner."
            />
          </div>
        </div>
      </section>

      <SectionDivider variant="gradient" from="cream" to="dark" />

      {/* Events */}
      <section className="section-dark py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="What's On"
            heading="Live at Oak & Barrell"
            subtitle="Weekly live music sessions to complement your dining experience"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((event) => (
              <article
                key={event.id}
                className="rounded-lg overflow-hidden"
                style={{
                  backgroundColor: "var(--bg-tertiary)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "var(--overlay-gradient)" }}
                  />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p
                      className="text-sm font-medium uppercase tracking-wider"
                      style={{ color: "var(--accent-primary)" }}
                    >
                      {event.day} &middot; {event.time}
                    </p>
                    <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-white">
                      {event.title}
                    </h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm" style={{ color: "var(--text-on-dark-muted)" }}>
                    {event.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="gradient" from="dark" to="cream" />

      {/* Reservation CTA */}
      <section className="section-cream py-20 px-6">
        <div className="max-w-[700px] mx-auto text-center">
          <h2
            className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-semibold mb-4"
            style={{ color: "var(--text-on-light)" }}
          >
            Ready for an unforgettable evening?
          </h2>
          <p
            className="text-base mb-8"
            style={{ color: "var(--text-on-light-muted)" }}
          >
            Reserve your table and let us take care of the rest. Walk-ins
            welcome, but reservations are recommended for parties of 4 or more.
          </p>
          <ReserveCTA variant="primary" />
        </div>
      </section>
    </>
  );
}
