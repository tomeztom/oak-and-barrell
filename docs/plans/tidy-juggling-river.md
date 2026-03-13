# Oak & Barrell Design System

## Context
Das Projekt ist ein Greenfield-Restaurant-Website-Projekt. Es existieren bisher nur 2 Design-Referenzbilder und eine Menü-CSV. Es gibt noch keinen Tech-Stack, keinen Source Code und keine Design-Dokumentation. Ziel ist es, ein vollständiges Design System in `docs/design/` zu erstellen, das als Grundlage für die spätere Implementierung dient.

## Zu erstellende Dateien

```
docs/design/
├── design-tokens.json      # Maschinenlesbare Tokens (Farben, Typo, Spacing, etc.)
├── style-guide.md           # Visuelle Sprache, Fotografie, Tone of Voice
├── component-specs.md       # Detaillierte Komponentenspezifikationen
└── references/
    ├── 1.png                # (vorhanden)
    └── 2.png                # (vorhanden)
```

## Reihenfolge
1. **design-tokens.json** (Fundament — alles andere referenziert darauf)
2. **style-guide.md** (Markensprache und Designprinzipien)
3. **component-specs.md** (Entwickler-Handoff)

---

## 1. design-tokens.json

Flaches JSON-Format, kompatibel mit CSS Custom Properties und Tailwind. Top-Level-Keys:

### color
- **Backgrounds**: `background.primary` (#121212), `background.secondary` (#1A1A2E), `background.tertiary` (#1E1E1E), `background.cream` (#FAF5ED), `background.creamDark` (#F0E8DA)
- **Accent**: `accent.primary` (#D4782F — Orange/Amber), `accent.primaryHover` (#E8863A), `accent.primaryActive` (#BF6A28), `accent.secondary` (#2D5A3E — Dunkelgrün), `accent.secondaryLight` (#3A7350)
- **Text**: `text.onDark` (#FFFFFF), `text.onDarkMuted` (#B0B0B0), `text.onLight` (#1A1A1A), `text.onLightMuted` (#555555), `text.accent` (#D4782F)
- **Border**: `border.dark` (#2A2A2A), `border.light` (#E0D8CC)
- **Badge**: chefsPick (#D4782F), signature (#2D5A3E), popular (#8B6914), vegetarian (#4A8C5C), premium (#6B3FA0)
- **Overlay**: dark (rgba(0,0,0,0.6)), gradient (linear-gradient)

### typography
- **Font Families**: heading ("Playfair Display", Georgia, serif), body ("Inter", "Helvetica Neue", sans-serif), accent ("Cormorant Garamond", Georgia, serif)
- **Sizes**: display (4rem/64px), h1 (3rem/48px), h2 (2.25rem/36px), h3 (1.75rem/28px), h4 (1.25rem/20px), body (1rem/16px), small (0.875rem/14px), caption (0.75rem/12px)
- **Weights**: regular (400), medium (500), semibold (600), bold (700)
- **Line Heights**: tight (1.2), normal (1.5), relaxed (1.75)
- **Letter Spacing**: tight (-0.02em), normal (0), wide (0.05em), wider (0.1em)

### spacing (8px Base-Grid)
xxs (4px), xs (8px), sm (12px), md (16px), lg (24px), xl (32px), 2xl (48px), 3xl (64px), 4xl (96px), sectionY (80px), containerX (24px)

### borderRadius
none (0), sm (4px), md (8px — Cards), lg (16px — Buttons, Bilder), xl (24px — Hero), full (9999px — Pills, Badges)

### shadow
sm, md, lg, card (für dunkle Sektionen), cardLight (für helle Sektionen), button (orange Glow)

### breakpoint
sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)

### Weitere: opacity, transition, zIndex

---

## 2. style-guide.md

### Inhalt
1. **Brand Overview** — Positionierung: gehobenes Casual Dining, japanisch-westliche Fusion
2. **Farbphilosophie** — Dunkel = Raffinesse, Orange = Wärme/Appetit, Creme = Atempause, Grün = Frische
3. **Typografie** — Serif für Headings (Eleganz), Sans-Serif für Body (Klarheit)
4. **Fotografie-Richtlinien** — Overhead/3/4-Winkel, moody/warm, dunkle Teller, Kräuter-Deko
5. **Ikonografie** — Line Icons, 24px Grid, abgerundete Ecken
6. **Layout-Prinzipien** — Alternierende dark/cream Sektionen, 12-Spalten-Grid, max-width 1280px
7. **Tone of Voice** — Sensorisch, knapp, zutatenorientiert (wie im Menü-CSV)
8. **Dekorative Elemente** — Botanische Blatt-Overlays an Rändern

---

## 3. component-specs.md

13 Komponenten, jeweils mit: Beschreibung, Token-Referenzen, Zustände, Responsive-Verhalten, Accessibility.

| # | Komponente | Beschreibung |
|---|-----------|-------------|
| 1 | **Navigation Bar** | Sticky, dunkel, Logo links, Links rechts, CTA "Reserve a Table" |
| 2 | **Hero Banner** | Fullwidth, 85vh, Food-Foto + Overlay, Display-Headline, CTA |
| 3 | **Section Header** | Zentriert, optionale Eyebrow (orange), Heading, Subtitle |
| 4 | **Feature Card** | Icon + Titel + Text, 3er-Grid, keine sichtbare Card-Border |
| 5 | **Menu Item Card** | Bild oben, Name, Beschreibung, Preis, optionaler Badge |
| 6 | **Badge / Tag** | Pill-Form, Farbvarianten pro Badge-Typ aus CSV |
| 7 | **Chef Profile** | 2-Spalten, Foto + Bio, auf Cream-Hintergrund |
| 8 | **Blog Card** | Horizontal (Desktop) / Vertikal (Mobile), Bild + Datum + Titel |
| 9 | **CTA Button** | Primary (orange), Secondary (Outline), Ghost (Text-only) |
| 10 | **Logo Strip** | Grayscale Logos, horizontale Reihe, Hover = volle Opacity |
| 11 | **Footer** | Multi-Column, Brand, Links, Kontakt, Newsletter, Social |
| 12 | **Menu Category Tabs** | Horizontale Filter-Tabs für 7 Menü-Kategorien |
| 13 | **Section Divider** | Übergang zwischen dark/cream Sektionen |

---

## Referenzdateien
- `docs/design/references/1.png` — Vollständige Seitenansicht (Mobile/Scroll)
- `docs/design/references/2.png` — Desktop-Übersicht
- `docs/menu-item.csv` — 50 Menü-Items, 7 Kategorien, 13 Badge-Typen

## Verifikation
1. JSON validieren: `python3 -m json.tool docs/design/design-tokens.json`
2. Alle Token-Referenzen in component-specs.md gegen design-tokens.json prüfen
3. Alle Badge-Typen aus menu-item.csv in den Tokens abgedeckt
4. Style Guide auf Konsistenz mit Token-Werten prüfen
