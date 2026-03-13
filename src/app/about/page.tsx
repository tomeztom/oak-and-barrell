import Image from "next/image";
import { images } from "@/data/pexels-images";
import SectionHeader from "@/components/SectionHeader";
import FeatureCard from "@/components/FeatureCard";
import SectionDivider from "@/components/SectionDivider";
import { Hammer, Leaf, Heart } from "lucide-react";
import ReserveCTA from "../ReserveCTA";

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative min-h-[400px] h-[50vh] flex items-center justify-center">
        <Image
          src={images.aboutHero}
          alt="Oak & Barrell restaurant interior with warm ambient lighting"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-white">
            Our Story
          </h1>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section-cream py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src={images.founder}
                alt="Leon van Zyl, founder of Oak & Barrell"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ boxShadow: "var(--shadow-card-light)" }}
              />
            </div>
            <div>
              <p
                className="font-[family-name:var(--font-accent)] text-sm uppercase tracking-[0.1em] mb-2"
                style={{ color: "var(--text-accent)" }}
              >
                Our Founder
              </p>
              <h2
                className="font-[family-name:var(--font-heading)] text-3xl font-semibold mb-4"
                style={{ color: "var(--text-on-light)" }}
              >
                Leon van Zyl
              </h2>
              <p
                className="font-[family-name:var(--font-accent)] text-lg mb-6"
                style={{ color: "var(--accent-primary)" }}
              >
                Visionary &amp; Restaurateur
              </p>
              <div
                className="space-y-4 text-base"
                style={{ color: "var(--text-on-light-muted)" }}
              >
                <p>
                  Born in Cape Town, South Africa, Leon discovered his passion for
                  culinary arts while traveling through Asia in his early twenties.
                  A transformative apprenticeship in Tokyo under master chef
                  Takeshi Yamamoto taught him the art of precision, balance, and
                  deep respect for ingredients.
                </p>
                <p>
                  In 2004, Leon brought his vision to life in the heart of
                  Manhattan — a place where Japanese culinary precision meets the
                  warmth and generosity of Western hospitality. Oak & Barrell was
                  born from the belief that great food is about more than
                  technique; it&apos;s about creating moments of genuine connection.
                </p>
                <p>
                  Two decades later, Oak & Barrell remains a neighborhood
                  institution — a place where regulars and first-time guests alike
                  feel the same sense of welcome that Leon experienced in that
                  small Tokyo kitchen all those years ago.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chef Profile */}
      <section className="section-cream py-20 px-6 border-t" style={{ borderColor: "var(--border-light)" }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src={images.chef}
                alt="Chef Kenji Tanaka in the kitchen"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                style={{ boxShadow: "var(--shadow-card-light)" }}
              />
            </div>
            <div className="md:col-span-7">
              <p
                className="font-[family-name:var(--font-accent)] text-sm uppercase tracking-[0.1em] mb-2"
                style={{ color: "var(--text-accent)" }}
              >
                Our Chef
              </p>
              <h2
                className="font-[family-name:var(--font-heading)] text-3xl font-semibold mb-2"
                style={{ color: "var(--text-on-light)" }}
              >
                Kenji Tanaka
              </h2>
              <p
                className="font-[family-name:var(--font-accent)] text-lg mb-6"
                style={{ color: "var(--accent-primary)" }}
              >
                Executive Chef
              </p>
              <div
                className="space-y-4 text-base"
                style={{ color: "var(--text-on-light-muted)" }}
              >
                <p>
                  With over 20 years of experience spanning Tokyo&apos;s
                  Michelin-starred kitchens and New York&apos;s finest dining rooms,
                  Chef Kenji brings an unparalleled mastery of both Japanese and
                  Western techniques.
                </p>
                <p>
                  His philosophy is simple: honor the ingredient. Every dish on
                  our menu reflects his commitment to sourcing the best — from A5
                  Wagyu raised in Miyazaki Prefecture to locally foraged herbs
                  from upstate farms. The result is a menu that feels both
                  adventurous and deeply satisfying.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="gradient" from="cream" to="dark" />

      {/* Values */}
      <section className="section-dark py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            eyebrow="What We Stand For"
            heading="Our Values"
            subtitle="The principles that guide every dish, every drink, every evening"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              icon={Hammer}
              title="Craftsmanship"
              text="Every cut, every roll, every sauce is made with meticulous attention to detail — no shortcuts, no compromises."
              dark
            />
            <FeatureCard
              icon={Leaf}
              title="Freshness"
              text="Ingredients arrive daily from trusted purveyors. Our fish is flown in from Tsukiji, our beef dry-aged in-house."
              dark
            />
            <FeatureCard
              icon={Heart}
              title="Warmth"
              text="We believe hospitality is an art. From your first step through the door to the last sip of your drink — you're family."
              dark
            />
          </div>
        </div>
      </section>

      <SectionDivider variant="gradient" from="dark" to="cream" />

      {/* CTA */}
      <section className="section-cream py-20 px-6">
        <div className="max-w-[700px] mx-auto text-center">
          <h2
            className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-semibold mb-4"
            style={{ color: "var(--text-on-light)" }}
          >
            Come Visit Us
          </h2>
          <div
            className="text-base mb-8 space-y-1"
            style={{ color: "var(--text-on-light-muted)" }}
          >
            <p>142 Oak Street, Manhattan, New York, NY 10013</p>
            <p>Mon–Thu: 5 PM – 11 PM &middot; Fri–Sat: 5 PM – 12 AM &middot; Sun: 12 PM – 10 PM</p>
          </div>
          <ReserveCTA variant="primary" />
        </div>
      </section>
    </>
  );
}
