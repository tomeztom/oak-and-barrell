"use client";

import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
];

export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      className="border-t"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderColor: "var(--border-dark)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-xl text-white mb-4">
              Oak & Barrell
            </h4>
            <p className="text-sm" style={{ color: "var(--text-on-dark-muted)" }}>
              A fusion of Japanese precision and Western warmth. Premium steaks,
              artisan sushi, craft cocktails in the heart of New York.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-xl text-white mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-150 hover:text-[var(--accent-primary)]"
                    style={{ color: "var(--text-on-dark-muted)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-xl text-white mb-4">
              Contact
            </h4>
            <div
              className="text-sm flex flex-col gap-2"
              style={{ color: "var(--text-on-dark-muted)" }}
            >
              <p>142 Oak Street, Manhattan</p>
              <p>New York, NY 10013</p>
              <p>(212) 555-0142</p>
              <p>hello@oakandbarrell.com</p>
              <div className="mt-2">
                <p className="text-white text-xs uppercase tracking-wider mb-1">
                  Hours
                </p>
                <p>Mon–Thu: 5 PM – 11 PM</p>
                <p>Fri–Sat: 5 PM – 12 AM</p>
                <p>Sun: 12 PM – 10 PM</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-xl text-white mb-4">
              Newsletter
            </h4>
            <p
              className="text-sm mb-4"
              style={{ color: "var(--text-on-dark-muted)" }}
            >
              Get updates on seasonal menus, events and special offers.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-lg text-sm bg-[var(--bg-tertiary)] text-white border border-[var(--border-dark)] focus:outline-none focus:border-[var(--accent-primary)]"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg text-sm font-semibold text-white cursor-pointer"
                style={{ backgroundColor: "var(--accent-primary)" }}
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="border-t py-6 px-6"
        style={{ borderColor: "var(--border-dark)" }}
      >
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-sm"
            style={{ color: "var(--text-on-dark-muted)" }}
          >
            &copy; {new Date().getFullYear()} Oak & Barrell. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Follow us on Instagram"
              className="transition-colors duration-150 hover:text-[var(--accent-primary)]"
              style={{ color: "var(--text-on-dark-muted)" }}
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              aria-label="Follow us on Facebook"
              className="transition-colors duration-150 hover:text-[var(--accent-primary)]"
              style={{ color: "var(--text-on-dark-muted)" }}
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              aria-label="Follow us on Twitter"
              className="transition-colors duration-150 hover:text-[var(--accent-primary)]"
              style={{ color: "var(--text-on-dark-muted)" }}
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
