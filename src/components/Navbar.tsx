"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useReservation } from "./ReservationContext";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { open } = useReservation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 transition-all duration-250"
      style={{
        zIndex: "var(--z-sticky)",
        backgroundColor: scrolled ? "var(--bg-primary)" : "transparent",
        boxShadow: scrolled ? "var(--shadow-md)" : "none",
        height: "72px",
      }}
    >
      <div className="max-w-[1280px] mx-auto h-full flex items-center justify-between px-6">
        <Link
          href="/"
          className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white"
        >
          Oak & Barrell
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm uppercase tracking-[0.05em] transition-colors duration-150 ${
                pathname === link.href
                  ? "text-[var(--accent-primary)]"
                  : "text-white hover:text-[var(--accent-primary)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={open}
            className="px-6 py-2.5 text-sm font-semibold text-white rounded-[var(--radius-lg)] transition-all duration-150 cursor-pointer"
            style={{
              backgroundColor: "var(--accent-primary)",
              boxShadow: "var(--shadow-button)",
            }}
          >
            Reserve a Table
          </button>
        </div>

        {/* Mobile: CTA + Hamburger */}
        <div className="flex lg:hidden items-center gap-4">
          <button
            onClick={open}
            className="px-4 py-2 text-sm font-semibold text-white rounded-[var(--radius-lg)] cursor-pointer"
            style={{ backgroundColor: "var(--accent-primary)" }}
          >
            Reserve
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="text-white p-2 cursor-pointer"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden absolute top-[72px] left-0 right-0 py-6 px-6 flex flex-col gap-4"
          style={{
            backgroundColor: "var(--bg-primary)",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm uppercase tracking-[0.05em] py-2 transition-colors duration-150 ${
                pathname === link.href
                  ? "text-[var(--accent-primary)]"
                  : "text-white hover:text-[var(--accent-primary)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
