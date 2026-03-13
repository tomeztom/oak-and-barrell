# Oak & Barrell — Website Implementation Plan

## Context

Das Projekt ist eine Restaurant-Website für "The Oak & Barrell" in New York (Steaks, Sushi, Burger, Craft Beer). Es existiert bereits ein frisches Next.js 16 Scaffold und ein vollständiges Design System (Tokens, Style Guide, Component Specs). Ziel: 3 Seiten (Home, About, Menu) mit Stock-Bildern von Pexels, wobei die Menüseite ein einzigartiges "Buch-Blätter"-Erlebnis bieten soll.

---

## Phase 0: Foundation

### 0.1 `next.config.ts` — Pexels-Domain erlauben
- `images.remotePatterns` für `images.pexels.com` hinzufügen

### 0.2 `src/app/layout.tsx` — Google Fonts
- Geist/Geist_Mono ersetzen durch: **Playfair Display** (`--font-heading`), **Inter** (`--font-body`), **Cormorant Garamond** (`--font-accent`)
- Metadata: title "Oak & Barrell", description anpassen

### 0.3 `src/app/globals.css` — Design Tokens + Tailwind
- Alle Werte aus `design-tokens.json` als CSS Custom Properties in `:root`
- `@theme inline` Block für Tailwind-Integration
- Base styles: body mit `var(--font-body)`, dark background, white text
- Utility-Klassen: `.section-dark`, `.section-cream`

### 0.4 Daten-Layer
- **`src/data/menu-items.ts`**: Alle 50 Items als typisiertes Array mit Pexels-Bild-URLs, plus Hilfsfunktionen (`getItemsByCategory`, `CATEGORIES`)
- **`src/data/events.ts`**: Freitag-Abend & Sonntag-Nachmittag Live-Musik Events
- **`src/data/pexels-images.ts`**: Zentrale Bild-URL-Registry (Hero, About, Chef, etc.)

### 0.5 Dependency installieren
- `npm install lucide-react` (Line Icons, 24px, passend zum Style Guide)

---

## Phase 1: Shared Components

Alle in `src/components/`. Jede Komponente folgt exakt den Specs aus `component-specs.md`.

| # | Datei | Typ | Beschreibung |
|---|-------|-----|-------------|
| 1.1 | `CTAButton.tsx` | Server | Primary/Secondary/Ghost, 3 Größen, orange Glow-Shadow |
| 1.2 | `Badge.tsx` | Server | Pill-Badge mit 13 Farbvarianten aus Tokens |
| 1.3 | `SectionHeader.tsx` | Server | Eyebrow (orange) + Heading + Subtitle, dark/cream Variante |
| 1.4 | `SectionDivider.tsx` | Server | Line/Gradient/None, `aria-hidden` |
| 1.5 | `MenuItemCard.tsx` | Server | Card mit Bild, Name, Beschreibung, Preis, Badge; Hover-Lift |
| 1.6 | `FeatureCard.tsx` | Server | Icon + Titel + Text, transparenter Hintergrund |
| 1.7 | `Navbar.tsx` | **Client** | Sticky, transparent→solid on scroll, Hamburger-Menü mobile, aktiver Link |
| 1.8 | `Footer.tsx` | Server | 4-Spalten (Brand, Links, Contact, Newsletter), Social Icons |
| 1.9 | `ReservationModal.tsx` | **Client** | Modal mit Name, Party Size, Datum, Uhrzeit; Focus-Trap, Escape-Close |
| 1.10 | `ReservationContext.tsx` | **Client** | React Context für Modal open/close State |

---

## Phase 2: Layout Shell

### 2.1 `src/app/layout.tsx` — Aufbau
```
<ReservationProvider>
  <Navbar />
  <main id="main-content">{children}</main>
  <Footer />
  <ReservationModal />
</ReservationProvider>
```

---

## Phase 3: Home Page (`src/app/page.tsx`)

Sektionen in Reihenfolge (alternierend dark/cream):

1. **Hero** (dark, 85vh) — Fullwidth Pexels-Bild, Overlay-Gradient, Display-Headline "Delicious food & wonderful eating experience", Subtitle, 2 CTAs ("Explore Our Menu" + "Reserve a Table")
2. **Beliebte Gerichte** (dark) — Section Header + 6 handverlesene MenuItemCards (Truffle Burrata, Dragon Roll, Prime Ribeye, Wagyu Smash Burger, Toro Sashimi, Chocolate Lava Cake) + "View Full Menu" CTA
3. **Experience** (cream) — Section Header "Immerse yourself in an asian experience" + 3 FeatureCards (Premium Ingredients, Expert Craft, Warm Atmosphere)
4. **Events** (dark) — Section Header "Live at Oak & Barrell" + 2 Event-Cards (Freitag Live-Musik, Sonntag Nachmittags-Session)
5. **Reservation CTA** (cream) — Großer Text + "Reserve a Table" Button

---

## Phase 4: About Page (`src/app/about/page.tsx`)

1. **Page Hero** (dark, ~50vh) — Restaurant-Interior-Bild, Heading "Our Story"
2. **Gründer-Story** (cream) — 2-Spalten: Bild links, Text rechts. Leon van Zyl, geboren in Südafrika, ausgebildet in Tokyo, eröffnete Oak & Barrell 2004 in NYC. Fusion aus japanischer Präzision und westlicher Gastfreundschaft.
3. **Chef Profile** (cream, Spec #7) — 2-Spalten: Portrait links (3:4), Bio rechts. Eyebrow "Our Chef", Name, Rolle in Cormorant Garamond.
4. **Werte** (dark) — 3 FeatureCards: Handwerkskunst, Frische, Wärme
5. **CTA** (cream) — "Come Visit Us", Adresse, Öffnungszeiten, Reserve-Button

---

## Phase 5: Menu Page — Buch-Erlebnis (`src/app/menu/page.tsx`)

Dies ist das Herzstück. Die Menüseite soll sich anfühlen wie das Durchblättern eines physischen Restaurant-Menüs.

### Komponenten in `src/components/menu/`:

| Datei | Beschreibung |
|-------|-------------|
| `MenuBook.tsx` (Client) | Buch-Container: dunkler "Einband" (#1A1A2E), creme "Seiten" (#FAF5ED), Seitenränder-Effekt, State für aktuelle Kategorie |
| `MenuPage.tsx` | Eine "Seite" = eine Kategorie. Dekotiver Kategorie-Titel oben (Playfair Display), Items im klassischen Menü-Layout |
| `MenuItemRow.tsx` | Einzelnes Item: kleines Thumbnail (60-80px) | Name + Beschreibung + Badge | gepunktete Linie | Preis (orange, rechts) |
| `MenuPageNavigation.tsx` (Client) | Links/Rechts-Pfeile zum Blättern, Kategorie-Dots unten, Keyboard-Navigation (Pfeiltasten) |

### Seiten-Blätter-Animation
- CSS 3D Transform mit `perspective(1200px)` und `rotateY` für Page-Flip-Effekt
- `transition.spring` Token (500ms cubic-bezier(0.34, 1.56, 0.64, 1))
- `@media (prefers-reduced-motion: reduce)` → einfacher Fade

### Mobile Fallback (< 768px)
- Buch-Metapher wird zu: horizontale scrollbare Kategorie-Tabs (Spec #12) + vertikale Item-Liste
- Gleiche elegante Typografie und gepunktete Preislinien
- Swipe zwischen Kategorien

### Seitenstruktur
1. **Page Hero** (dark, kurz) — Bild eines gedeckten Tisches, "Our Menu", Subtitle
2. **Menu Book Section** (cream Hintergrund) — Zentrierter `<MenuBook />`, max-width ~900px
3. **Quick-Jump Tabs** (dark) — Horizontale Kategorie-Tabs unterhalb des Buchs (Spec #12)

---

## Dateistruktur

```
src/
├── app/
│   ├── layout.tsx              # Fonts, Navbar, Footer, Modal, Provider
│   ├── globals.css             # Design Tokens, Tailwind Theme
│   ├── page.tsx                # Home
│   ├── about/page.tsx          # About
│   └── menu/page.tsx           # Menu
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── CTAButton.tsx
│   ├── Badge.tsx
│   ├── SectionHeader.tsx
│   ├── SectionDivider.tsx
│   ├── MenuItemCard.tsx
│   ├── FeatureCard.tsx
│   ├── ReservationModal.tsx
│   ├── ReservationContext.tsx
│   └── menu/
│       ├── MenuBook.tsx
│       ├── MenuPage.tsx
│       ├── MenuPageNavigation.tsx
│       └── MenuItemRow.tsx
└── data/
    ├── menu-items.ts
    ├── events.ts
    └── pexels-images.ts
```

---

## Implementierungsreihenfolge

1. Phase 0 (Foundation): next.config, Fonts, globals.css, Daten-Layer, lucide-react
2. Phase 1 (Components): CTAButton → Badge → SectionHeader → SectionDivider → FeatureCard → MenuItemCard → Navbar → Footer → ReservationContext → ReservationModal
3. Phase 2 (Layout): Root Layout Shell
4. Phase 3 (Home Page)
5. Phase 4 (About Page)
6. Phase 5 (Menu Page mit Buch-Erlebnis)
7. Responsive Polish & Animationen

---

## Verifikation

1. `npm run build` — keine Build-Fehler
2. `npm run dev` — alle 3 Seiten manuell testen
3. Navigation zwischen Seiten funktioniert
4. Reservation Modal öffnet/schließt korrekt
5. Menu-Buch: Blättern durch alle 7 Kategorien, alle 50 Items sichtbar
6. Responsive: Testen bei 375px (Mobile), 768px (Tablet), 1280px (Desktop)
7. Alle Pexels-Bilder laden korrekt
8. Accessibility: Keyboard-Navigation, Focus-Management im Modal
