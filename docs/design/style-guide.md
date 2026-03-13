# Oak & Barrell — Style Guide

## 1. Brand Overview

Oak & Barrell ist ein gehobenes Casual-Dining-Restaurant mit japanisch-westlicher Fusion-Küche. Die Marke verbindet die Raffinesse japanischer Kulinarik mit der Wärme westlicher Gastfreundschaft. Die Zielgruppe sind anspruchsvolle Genießer, die authentische Qualität in einem modernen, einladenden Ambiente erwarten.

**Markenwerte:** Handwerkskunst, Frische, Wärme, Eleganz ohne Steifheit.

---

## 2. Farbphilosophie

Alle Farbwerte sind in `design-tokens.json` unter `color` definiert.

| Farbwelt | Rolle | Tokens |
|----------|-------|--------|
| **Dunkle Töne** (`background.primary`, `background.secondary`, `background.tertiary`) | Raffinesse und Tiefe — Haupthintergrund für Sektionen, die Speisen ins Zentrum rücken | `#121212`, `#1A1A2E`, `#1E1E1E` |
| **Orange/Amber** (`accent.primary`) | Wärme, Appetit, Call-to-Action — sparsam als Akzent einsetzen | `#D4782F` |
| **Creme** (`background.cream`, `background.creamDark`) | Atempause zwischen dunklen Sektionen — für Storytelling, Chef-Profil, Blog | `#FAF5ED`, `#F0E8DA` |
| **Dunkelgrün** (`accent.secondary`) | Frische, Natur, Qualität — für Badges und sekundäre Akzente | `#2D5A3E` |

### Farbverhältnis

- Dunkle Sektionen: ~60 % der Seite
- Creme-Sektionen: ~30 % der Seite
- Akzentfarben (Orange/Grün): ~10 % — nur für CTAs, Badges, Highlights

### Kontrast

- Text auf dunklem Hintergrund: `text.onDark` (#FFFFFF) — WCAG AAA
- Gedämpfter Text auf dunkel: `text.onDarkMuted` (#B0B0B0) — WCAG AA (nur für sekundäre Infos)
- Text auf Creme: `text.onLight` (#1A1A1A) — WCAG AAA

---

## 3. Typografie

Alle Werte referenzieren `design-tokens.json` → `typography`.

### Schriftfamilien

| Rolle | Font | Token | Verwendung |
|-------|------|-------|------------|
| Headings | Playfair Display | `fontFamily.heading` | H1–H4, Display, Menü-Item-Namen |
| Body | Inter | `fontFamily.body` | Fließtext, Beschreibungen, Navigation |
| Akzent | Cormorant Garamond | `fontFamily.accent` | Eyebrow-Labels, Zitate, dekorative Texte |

### Hierarchie

| Stufe | Token | Größe | Gewicht | Verwendung |
|-------|-------|-------|---------|------------|
| Display | `fontSize.display` | 64px | Bold (700) | Hero-Headline |
| H1 | `fontSize.h1` | 48px | Bold (700) | Seitentitel |
| H2 | `fontSize.h2` | 36px | Semibold (600) | Section Headings |
| H3 | `fontSize.h3` | 28px | Semibold (600) | Card-Titel, Sub-Sektionen |
| H4 | `fontSize.h4` | 20px | Medium (500) | Menü-Item-Namen, Labels |
| Body | `fontSize.body` | 16px | Regular (400) | Fließtext |
| Small | `fontSize.small` | 14px | Regular (400) | Preise, Meta-Infos |
| Caption | `fontSize.caption` | 12px | Medium (500) | Badges, Timestamps |

### Besonderheiten

- **Uppercase + Wide Spacing** (`letterSpacing.wider`): Eyebrow-Labels, Navigationslinks, Badge-Text
- **Tight Spacing** (`letterSpacing.tight`): Display und H1 für kompaktere Wirkung
- **Kein Textschatten** — Lesbarkeit wird über Overlay-Gradienten sichergestellt

---

## 4. Fotografie-Richtlinien

### Aufnahmestil

- **Winkel:** Overhead (Top-Down) oder 3/4-Perspektive — nie frontal
- **Lichtstimmung:** Moody, warm, weiches Seitenlicht mit dunklen Schatten
- **Hintergrund:** Dunkle Teller, dunkle Oberflächen (Schiefer, dunkles Holz)
- **Requisiten:** Frische Kräuter, Gewürze, Essstäbchen, handwerkliches Geschirr

### Komposition

- Speisen immer im Goldenen Schnitt oder Drittel-Regel platzieren
- Negative Space zulassen — Bilder nicht überladen
- Immer mindestens ein frisches Element sichtbar (Kräuter, Zitrusschale, Microgreens)

### Nachbearbeitung

- Leichte Entsättigung der Umgebung, Sättigung der Speise beibehalten
- Warmer Weißabgleich (leicht ins Bernsteinfarbene)
- Kein starker HDR-Effekt — natürlich halten

### Bildformate

| Verwendung | Seitenverhältnis | Mindestauflösung |
|------------|-----------------|-----------------|
| Hero Banner | 16:9 | 1920×1080 |
| Menu Item Card | 4:3 | 800×600 |
| Blog Card | 3:2 | 900×600 |
| Chef Profil | 3:4 (Portrait) | 600×800 |

---

## 5. Ikonografie

- **Stil:** Line Icons, einheitliche Strichstärke (1.5px–2px)
- **Grid:** 24×24px Basisgröße
- **Ecken:** Abgerundet (passend zu `borderRadius.sm`)
- **Farbe:** `text.onDark` auf dunklem Hintergrund, `text.onLight` auf Creme
- **Set-Empfehlung:** Lucide Icons oder Phosphor Icons (beides Open Source, konsistenter Line-Stil)

Verwendung: Feature-Cards (Qualität, Erfahrung, Atmosphäre), Navigation, Social-Media-Icons im Footer.

---

## 6. Layout-Prinzipien

### Sektions-Rhythmus

Die Seite alterniert zwischen dunklen und hellen Sektionen, um visuellen Rhythmus zu erzeugen:

```
[Dark]  Navigation + Hero
[Dark]  Logo Strip
[Cream] Feature Cards ("Immerse yourself")
[Dark]  Menu Highlights
[Cream] Chef Profile
[Dark]  Blog/Updates
[Cream] Timeless Recipes
[Dark]  Footer
```

### Grid

- **Spalten:** 12-Spalten-Grid
- **Max-Width:** 1280px (`breakpoint.xl`)
- **Container-Padding:** `spacing.containerX` (24px), ab `breakpoint.lg` auf 48px erhöhen
- **Gutter:** `spacing.lg` (24px)

### Vertikaler Rhythmus

- Abstand zwischen Sektionen: `spacing.sectionY` (80px)
- Abstand innerhalb von Sektionen: `spacing.2xl` (48px) bis `spacing.3xl` (64px)
- Abstand zwischen Cards: `spacing.lg` (24px)

---

## 7. Tone of Voice

### Prinzipien

- **Sensorisch:** Beschreibungen aktivieren Sinne — Textur, Aroma, Temperatur
- **Knapp:** Kurze, wirkungsvolle Sätze. Kein Fülltext.
- **Zutatenorientiert:** Die Zutaten erzählen die Geschichte (wie im Menü-CSV)

### Beispiele aus dem Menü

> "Creamy burrata, black truffle, arugula, aged balsamic"
> "Hand-cut wagyu, quail egg, capers, cornichons, grilled sourdough"
> "Buttery bluefin toro, chef garnish, ponzu pearls"

### Überschriften

- Headings nutzen emotionale, einladende Sprache
- Beispiele: "Delicious food & wonderful eating experience", "Immerse yourself in an asian experience"

### Don'ts

- Keine übertriebenen Superlative ("das allerbeste Essen")
- Keine generischen Floskeln ("Willkommen auf unserer Website")
- Keine langen Absätze — maximal 2–3 Sätze pro Textblock

---

## 8. Dekorative Elemente

### Botanische Blatt-Overlays

- Tropische/asiatische Blätter (z.B. Monstera, Bambus) als halbtransparente Overlays
- Platzierung: Seitenränder, Ecken von Sektionen — nie über Inhalten
- Opacity: `opacity.muted` (0.6) oder geringer
- Farbe: Natürliches Grün, passend zu `accent.secondary`
- Nur auf dunklen Sektionen einsetzen — auf Creme-Sektionen weglassen

### Dekorative Linien

- Dünne Trennlinien (`border.dark` / `border.light`) zwischen Sektionsgruppen
- Optionale goldene/orangene Akzentlinien unter Eyebrow-Labels
