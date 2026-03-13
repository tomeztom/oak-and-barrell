"use client";

import { useEffect, useRef, useState } from "react";
import { X, Loader2 } from "lucide-react";
import { useReservation } from "./ReservationContext";

export default function ReservationModal() {
  const { isOpen, close } = useReservation();
  const overlayRef = useRef<HTMLDivElement>(null);
  const firstFocusRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => firstFocusRef.current?.focus(), 50);
      setSuccess(false);
      setError("");
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  if (!isOpen) return null;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          partySize: formData.get("partySize"),
          date: formData.get("date"),
          time: formData.get("time"),
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setSuccess(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 flex items-center justify-center p-4"
      style={{
        zIndex: "var(--z-modal)",
        backgroundColor: "var(--overlay-dark)",
      }}
      onClick={(e) => {
        if (e.target === overlayRef.current) close();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Reserve a table"
    >
      <div
        className="w-full max-w-md rounded-xl p-8 relative"
        style={{
          backgroundColor: "var(--bg-secondary)",
          boxShadow: "var(--shadow-lg)",
        }}
      >
        <button
          onClick={close}
          aria-label="Close"
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors cursor-pointer"
        >
          <X size={24} />
        </button>

        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-white mb-6">
          Reserve a Table
        </h2>

        {success ? (
          <div className="text-center py-8">
            <p className="text-lg text-white font-semibold mb-2">
              Reservation confirmed!
            </p>
            <p className="text-white/70 mb-6">
              We look forward to welcoming you.
            </p>
            <button
              onClick={close}
              className="px-6 py-3 rounded-[var(--radius-lg)] text-white font-semibold transition-all duration-150 cursor-pointer"
              style={{
                backgroundColor: "var(--accent-primary)",
                boxShadow: "var(--shadow-button)",
              }}
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="res-name" className="block text-sm text-white/80 mb-1">
                Name
              </label>
              <input
                ref={firstFocusRef}
                id="res-name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg text-white bg-[var(--bg-tertiary)] border border-[var(--border-dark)] focus:outline-none focus:border-[var(--accent-primary)]"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="res-party" className="block text-sm text-white/80 mb-1">
                Party Size
              </label>
              <select
                id="res-party"
                name="partySize"
                required
                className="w-full px-4 py-3 rounded-lg text-white bg-[var(--bg-tertiary)] border border-[var(--border-dark)] focus:outline-none focus:border-[var(--accent-primary)]"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="res-date" className="block text-sm text-white/80 mb-1">
                Date
              </label>
              <input
                id="res-date"
                name="date"
                type="date"
                required
                className="w-full px-4 py-3 rounded-lg text-white bg-[var(--bg-tertiary)] border border-[var(--border-dark)] focus:outline-none focus:border-[var(--accent-primary)]"
              />
            </div>

            <div>
              <label htmlFor="res-time" className="block text-sm text-white/80 mb-1">
                Time
              </label>
              <select
                id="res-time"
                name="time"
                required
                className="w-full px-4 py-3 rounded-lg text-white bg-[var(--bg-tertiary)] border border-[var(--border-dark)] focus:outline-none focus:border-[var(--accent-primary)]"
              >
                {[
                  "5:00 PM",
                  "5:30 PM",
                  "6:00 PM",
                  "6:30 PM",
                  "7:00 PM",
                  "7:30 PM",
                  "8:00 PM",
                  "8:30 PM",
                  "9:00 PM",
                  "9:30 PM",
                ].map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {error && (
              <p className="text-red-400 text-sm">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full py-3 rounded-[var(--radius-lg)] text-white font-semibold transition-all duration-150 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              style={{
                backgroundColor: "var(--accent-primary)",
                boxShadow: "var(--shadow-button)",
              }}
            >
              {loading ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Reserving…
                </>
              ) : (
                "Confirm Reservation"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
