# Oak & Barrell — Component Specifications

Alle Token-Referenzen beziehen sich auf `design-tokens.json`. Format: `token.path` → Wert.

---

## 1. Navigation Bar

**Beschreibung:** Sticky Top-Navigation mit Logo links und Navigationslinks + CTA rechts.

### Token-Referenzen

| Eigenschaft | Token | Wert |
|-------------|-------|------|
| Hintergrund | `color.background.primary` | #121212 |
| Text | `color.text.onDark` | #FFFFFF |
| Text (hover) | `color.accent.primary` | #D4782F |
| CTA-Hintergrund | `color.accent.primary` | #D4782F |
| CTA-Text | `color.text.onDark` | #FFFFFF |
| CTA-Border-Radius | `borderRadius.lg` | 16px |
| Höhe | — | 72px (Desktop), 64px (Mobile) |
| Padding horizontal | `spacing.containerX` | 24px |
| Font (Links) | `typography.fontFamily.body` | Inter |
| Font-Größe (Links) | `typography.fontSize.small` | 14px |
| Letter-Spacing (Links) | `typography.letterSpacing.wide` | 0.05em |
| z-index | `zIndex.sticky` | 200 |
| Shadow (on scroll) | `shadow.md` | 0 4px 12px rgba(0,0,0,0.2) |

### Zustände

- **Default:** Transparent oder leicht durchscheinend über dem Hero
- **Scrolled:** Voller `background.primary`-Hintergrund + `shadow.md`
- **Mobile:** Hamburger-Icon rechts, Slide-in-Menü von rechts

### Navigationslinks

Home, Menu, About, Blog, Contact — uppercase, `letterSpacing.wide`

### CTA-Button

"Reserve a Table" — `accent.primary`, `borderRadius.lg`, `fontWeight.semibold`

### Responsive

| Breakpoint | Verhalten |
|-----------|----------|
| ≥ `breakpoint.lg` (1024px) | Volle Navigation sichtbar |
| < `breakpoint.lg` | Hamburger-Menü, nur Logo + CTA sichtbar |

### Accessibility

- `<nav>` mit `aria-label="Main navigation"`
- Mobile: Hamburger als `<button>` mit `aria-expanded`
- Fokus-Reihenfolge: Logo → Links → CTA
- Skip-to-content Link als erstes Element

---

## 2. Hero Banner

**Beschreibung:** Fullwidth-Banner mit großflächigem Food-Foto, dunklem Overlay, Display-Headline und CTA.

### Token-Referenzen

| Eigenschaft | Token | Wert |
|-------------|-------|------|
| Höhe | — | 85vh (min 600px) |
| Overlay | `color.overlay.gradient` | linear-gradient nach unten |
| Headline-Font | `typography.fontFamily.heading` | Playfair Display |
| Headline-Größe | `typography.fontSize.display` | 64px |
| Headline-Gewicht | `typography.fontWeight.bold` | 700 |
| Headline-Farbe | `color.text.onDark` | #FFFFFF |
| Subtitle-Font | `typography.fontFamily.body` | Inter |
| Subtitle-Größe | `typography.fontSize.body` | 16px |
| Subtitle-Farbe | `color.text.onDarkMuted` | #B0B0B0 |
| CTA-Hintergrund | `color.accent.primary` | #D4782F |
| CTA-Shadow | `shadow.button` | Orange Glow |
| CTA-Radius | `borderRadius.lg` | 16px |
| Content-Padding | `spacing.containerX` | 24px |

### Layout

- Bild: `object-fit: cover`, volle Breite und Höhe
- Overlay: `color.overlay.gradient` über dem Bild
- Content: Vertikal und horizontal zentriert
- Botanische Blatt-Overlays an den Seitenrändern

### Zustände

- Kein interaktiver Zustand außer CTA-Button (siehe Komponente 9)

### Responsive

| Breakpoint | Anpassung |
|-----------|----------|
| ≥ `breakpoint.lg` | `fontSize.display` (64px), max-width 700px für Text |
| `breakpoint.md`–`breakpoint.lg` | `fontSize.h1` (48px) |
| < `breakpoint.md` | `fontSize.h2` (36px), Höhe 75vh |

### Accessibility

- Hintergrundbild als `<img>` mit `alt`-Text oder als CSS-Background mit `role="img"` + `aria-label`
- Overlay darf kein interaktives Element verdecken
- CTA muss auch bei reduziertem Kontrast sichtbar bleiben

---

## 3. Section Header

**Beschreibung:** Zentrierter Sektions-Header mit optionalem Eyebrow-Label, Heading und Subtitle.

### Token-Referenzen

| Eigenschaft | Token | Wert |
|-------------|-------|------|
| Eyebrow-Font | `typography.fontFamily.accent` | Cormorant Garamond |
| Eyebrow-Größe | `typography.fontSize.small` | 14px |
| Eyebrow-Farbe | `color.text.accent` | #D4782F |
| Eyebrow-Spacing | `typography.letterSpacing.wider` | 0.1em |
| Heading-Font | `typography.fontFamily.heading` | Playfair Display |
| Heading-Größe | `typography.fontSize.h2` | 36px |
| Heading-Gewicht | `typography.fontWeight.semibold` | 600 |
| Subtitle-Größe | `typography.fontSize.body` | 16px |
| Abstand Eyebrow → Heading | `spacing.xs` | 8px |
| Abstand Heading → Subtitle | `spacing.sm` | 12px |
| Abstand nach unten (zur Sektion) | `spacing.2xl` | 48px |

### Farbvarianten

| Kontext | Heading-Farbe | Subtitle-Farbe |
|---------|--------------|----------------|
| Dark Section | `color.text.onDark` | `color.text.onDarkMuted` |
| Cream Section | `color.text.onLight` | `color.text.onLightMuted` |

### Layout

- Alles zentriert (`text-align: center`)
- Max-Width für Subtitle: 600px
- Eyebrow: Uppercase

### Accessibility

- Eyebrow ist dekorativ — kein eigenes Heading-Level
- Heading: passendes `<h2>` oder `<h3>` je nach Kontext

---

## 4. Feature Card

**Beschreibung:** Informationskarte mit Icon, Titel und kurzem Text. Wird in einem 3er-Grid dargestellt.

### Token-Referenzen

| Eigenschaft | Token | Wert |
|-------------|-------|------|
| Hintergrund | transparent | — |
| Icon-Größe | — | 48px |
| Icon-Farbe | `color.accent.primary` | #D4782F |
| Titel-Font | `typography.fontFamily.heading` | Playfair Display |
| Titel-Größe | `typography.fontSize.h4` | 20px |
| Titel-Gewicht | `typography.fontWeight.semibold` | 600 |
| Text-Größe | `typography.fontSize.body` | 16px |
| Abstand Icon → Titel | `spacing.md` | 16px |
| Abstand Titel → Text | `spacing.xs` | 8px |
| Grid-Gap | `spacing.lg` | 24px |

### Farbvarianten

| Kontext | Titel-Farbe | Text-Farbe |
|---------|------------|------------|
| Cream Section | `color.text.onLight` | `color.text.onLightMuted` |
| Dark Section | `color.text.onDark` | `color.text.onDarkMuted` |

### Layout

- 3-Spalten-Grid ab `breakpoint.md`, 1-Spalte darunter
- Zentrierter Inhalt pro Card
- Keine sichtbare Card-Border oder Hintergrund

### Accessibility

- Icon: `aria-hidden="true"` (dekorativ, Titel trägt die Bedeutung)

---

## 5. Menu Item Card

**Beschreibung:** Karte für ein einzelnes Menü-Item mit Bild, Name, Beschreibung, Preis und optionalem Badge.

### Token-Referenzen

| Eigenschaft | Token | Wert |
|-------------|-------|------|
| Card-Hintergrund | `color.background.tertiary` | #1E1E1E |
| Card-Radius | `borderRadius.md` | 8px |
| Card-Shadow | `shadow.card` | 0 4px 16px rgba(0,0,0,0.3) |
| Bild-Radius (oben) | `borderRadius.md` | 8px (nur top-left, top-right) |
| Name-Font | `typography.fontFamily.heading` | Playfair Display |
| Name-Größe | `typography.fontSize.h4` | 20px |
| Name-Farbe | `color.text.onDark` | #FFFFFF |
| Beschreibung-Größe | `typography.fontSize.small` | 14px |
| Beschreibung-Farbe | `color.text.onDarkMuted` | #B0B0B0 |
| Preis-Font | `typography.fontFamily.body` | Inter |
| Preis-Größe | `typography.fontSize.h4` | 20px |
| Preis-Farbe | `color.accent.primary` | #D4782F |
| Preis-Gewicht | `typography.fontWeight.bold` | 700 |
| Content-Padding | `spacing.md` | 16px |
| Abstand Name → Beschreibung | `spacing.xs` | 8px |
| Abstand Beschreibung → Preis | `spacing.sm` | 12px |

### Badge-Platzierung

- Positioniert oben-links auf dem Bild
- Abstand vom Rand: `spacing.xs` (8px)
- Badge-Styling: siehe Komponente 6

### Zustände

- **Default:** Wie beschrieben
- **Hover:** Leichtes Anheben (`transform: translateY(-4px)`), Shadow verstärkt auf `shadow.lg`, Transition `transition.normal`

### Responsive

| Breakpoint | Layout |
|-----------|--------|
| ≥ `breakpoint.lg` | 3-Spalten-Grid |
| `breakpoint.md`–`breakpoint.lg` | 2-Spalten-Grid |
| < `breakpoint.md` | 1-Spalte, volle Breite |

### Accessibility

- `<article>` pro Card
- Bild: `alt` mit Item-Name
- Preis: `aria-label="Price: $XX"`

---

## 6. Badge / Tag

**Beschreibung:** Pill-förmige Labels zur Kennzeichnung von Menü-Items (Chef's Pick, Signature, etc.)

### Token-Referenzen

| Eigenschaft | Token | Wert |
|-------------|-------|------|
| Border-Radius | `borderRadius.full` | 9999px |
| Font | `typography.fontFamily.body` | Inter |
| Font-Größe | `typography.fontSize.caption` | 12px |
| Font-Gewicht | `typography.fontWeight.medium` | 500 |
| Letter-Spacing | `typography.letterSpacing.wide` | 0.05em |
| Padding | `spacing.xxs` × `spacing.xs` | 4px 8px |
| Text-Farbe | `color.text.onDark` | #FFFFFF |

### Farbvarianten (aus `color.badge`)

| Badge-Typ | Token | Hex |
|-----------|-------|-----|
| Chef's Pick | `badge.chefsPick` | #D4782F |
| Signature | `badge.signature` | #2D5A3E |
| Popular | `badge.popular` | #8B6914 |
| Vegetarian | `badge.vegetarian` | #4A8C5C |
| Premium | `badge.premium` | #6B3FA0 |
| Best Seller | `badge.bestSeller` | #C4383A |
| House Favorite | `badge.houseFavorite` | #8B4513 |
| Daily Special | `badge.dailySpecial` | #1A6B8A |
| For Two | `badge.forTwo` | #7A3B69 |
| Local | `badge.local` | #5B7A3D |
| By the Glass | `badge.byTheGlass` | #8B6914 |
| Sommelier Pick | `badge.sommelierPick` | #7A2D5A |
| Non-Alcoholic | `badge.nonAlcoholic` | #2D8A7A |

### Layout

- Uppercase Text
- Inline-Block, kein Zeilenumbruch im Badge-Text

### Accessibility

- Nicht nur über Farbe kommunizieren — Text ist immer sichtbar
- Optional: `role="status"` für dynamisch zugewiesene Badges

---

## 7. Chef Profile

**Beschreibung:** 2-Spalten-Layout mit Chef-Foto links und Bio-Text rechts, auf Creme-Hintergrund.

### Token-Referenzen

| Eigenschaft | Token | Wert |
|-------------|-------|------|
| Sektion-Hintergrund | `color.background.cream` | #FAF5ED |
| Foto-Radius | `borderRadius.lg` | 16px |
| Foto-Shadow | `shadow.cardLight` | 0 2px 8px rgba(0,0,0,0.08) |
| Name-Font | `typography.fontFamily.heading` | Playfair Display |
| Name-Größe | `typography.fontSize.h3` | 28px |
| Name-Farbe | `color.text.onLight` | #1A1A1A |
| Rolle-Font | `typography.fontFamily.accent` | Cormorant Garamond |
| Rolle-Farbe | `color.text.accent` | #D4782F |
| Bio-Größe | `typography.fontSize.body` | 16px |
| Bio-Farbe | `color.text.onLightMuted` | #555555 |
| Grid-Gap | `spacing.2xl` | 48px |
| Section-Padding | `spacing.sectionY` | 80px |

### Layout

- Desktop: 2 Spalten (5:7 Verhältnis), Foto links, Text rechts
- Text-Spalte: Eyebrow ("Our Chef") → Name → Rolle → Bio-Text
- Foto: Portrait-Format (3:4), `object-fit: cover`

### Responsive

| Breakpoint | Verhalten |
|-----------|----------|
| ≥ `breakpoint.md` | 2-Spalten nebeneinander |
| < `breakpoint.md` | Gestapelt — Foto oben (max-height 400px), Text darunter |

### Accessibility

- Foto: `alt` mit Name und Rolle des Chefs
- Bio-Text: normaler Lesefluss, keine besonderen ARIA-Attribute nötig

---

## 8. Blog Card

**Beschreibung:** Karte für Blog-/Update-Einträge mit Bild, Datum, Titel und optionalem Teaser.

### Token-Referenzen

| Eigenschaft | Token | Wert |
|-------------|-------|------|
| Card-Hintergrund | `color.background.tertiary` | #1E1E1E |
| Card-Radius | `borderRadius.md` | 8px |
| Card-Shadow | `shadow.card` | 0 4px 16px rgba(0,0,0,0.3) |
| Bild-Radius | `borderRadius.md` | 8px |
| Datum-Font | `typography.fontFamily.body` | Inter |
| Datum-Größe | `typography.fontSize.caption` | 12px |
| Datum-Farbe | `color.text.onDarkMuted` | #B0B0B0 |
| Titel-Font | `typography.fontFamily.heading` | Playfair Display |
| Titel-Größe | `typography.fontSize.h4` | 20px |
| Titel-Farbe | `color.text.onDark` | #FFFFFF |
| Teaser-Größe | `typography.fontSize.small` | 14px |
| Teaser-Farbe | `color.text.onDarkMuted` | #B0B0B0 |
| Content-Padding | `spacing.md` | 16px |

### Layout

| Breakpoint | Layout |
|-----------|--------|
| ≥ `breakpoint.md` | Horizontal — Bild links (40%), Text rechts (60%) |
| < `breakpoint.md` | Vertikal — Bild oben, Text darunter |

### Zustände

- **Hover:** Titel-Farbe wechselt zu `color.accent.primary`, Transition `transition.fast`
- Gesamte Card ist klickbar (Link)

### Accessibility

- `<article>` mit `<time datetime="...">`
- Link umschließt die gesamte Card — `<a>` als Block-Element
- Titel als `<h3>` oder `<h4>`

---

## 9. CTA Button

**Beschreibung:** Hauptaktions-Button in drei Varianten: Primary, Secondary, Ghost.

### Token-Referenzen (Primary)

| Eigenschaft | Token | Wert |
|-------------|-------|------|
| Hintergrund | `color.accent.primary` | #D4782F |
| Hintergrund (hover) | `color.accent.primaryHover` | #E8863A |
| Hintergrund (active) | `color.accent.primaryActive` | #BF6A28 |
| Text-Farbe | `color.text.onDark` | #FFFFFF |
| Font | `typography.fontFamily.body` | Inter |
| Font-Größe | `typography.fontSize.body` | 16px |
| Font-Gewicht | `typography.fontWeight.semibold` | 600 |
| Border-Radius | `borderRadius.lg` | 16px |
| Padding | `spacing.sm` × `spacing.lg` | 12px 24px |
| Shadow | `shadow.button` | Orange Glow |
| Transition | `transition.fast` | 150ms ease |

### Varianten

| Variante | Hintergrund | Border | Text-Farbe |
|----------|------------|--------|------------|
| **Primary** | `accent.primary` | none | `text.onDark` |
| **Secondary** | transparent | 2px solid `accent.primary` | `accent.primary` |
| **Ghost** | transparent | none | `accent.primary` |

### Zustände

| Zustand | Veränderung |
|---------|------------|
| Hover | Hintergrund aufhellen, Shadow verstärken |
| Active | Hintergrund abdunkeln, Shadow reduzieren |
| Focus | 2px Outline-Offset, `accent.primary` Farbe |
| Disabled | `opacity.disabled` (0.4), `cursor: not-allowed` |

### Größen

| Größe | Padding | Font-Größe |
|-------|---------|-----------|
| Small | 8px 16px | `fontSize.small` (14px) |
| Default | 12px 24px | `fontSize.body` (16px) |
| Large | 16px 32px | `fontSize.body` (16px) |

### Accessibility

- `<button>` oder `<a>` je nach Kontext
- Mindestgröße: 44×44px Touch-Target
- Focus-Ring sichtbar bei Tastaturnavigation
- Disabled: `aria-disabled="true"`

---

## 10. Logo Strip

**Beschreibung:** Horizontale Reihe von Partner-/Presse-Logos in Grayscale.

### Token-Referenzen

| Eigenschaft | Token | Wert |
|-------------|-------|------|
| Sektion-Hintergrund | `color.background.primary` | #121212 |
| Border oben/unten | `color.border.dark` | #2A2A2A |
| Logo-Opacity (default) | `opacity.muted` | 0.6 |
| Logo-Opacity (hover) | `opacity.full` | 1.0 |
| Transition | `transition.normal` | 250ms ease |
| Padding vertikal | `spacing.xl` | 32px |
| Gap zwischen Logos | `spacing.2xl` | 48px |

### Layout

- Logos horizontal zentriert, gleichmäßig verteilt
- Alle Logos: Grayscale-Filter (`filter: grayscale(100%)`)
- Max-Höhe pro Logo: 32px

### Responsive

| Breakpoint | Verhalten |
|-----------|----------|
| ≥ `breakpoint.md` | Alle Logos in einer Reihe |
| < `breakpoint.md` | 2×2 oder 3×2 Grid, oder horizontales Scrolling |

### Accessibility

- Jedes Logo: `<img alt="[Partner-Name] logo">`
- Sektion: `aria-label="Our partners"` oder ähnlich

---

## 11. Footer

**Beschreibung:** Multi-Column-Footer mit Brand-Info, Navigationslinks, Kontakt, Newsletter und Social Media.

### Token-Referenzen

| Eigenschaft | Token | Wert |
|-------------|-------|------|
| Hintergrund | `color.background.primary` | #121212 |
| Border oben | `color.border.dark` | #2A2A2A |
| Heading-Font | `typography.fontFamily.heading` | Playfair Display |
| Heading-Größe | `typography.fontSize.h4` | 20px |
| Heading-Farbe | `color.text.onDark` | #FFFFFF |
| Link-Farbe | `color.text.onDarkMuted` | #B0B0B0 |
| Link-Hover | `color.accent.primary` | #D4782F |
| Text-Größe | `typography.fontSize.small` | 14px |
| Column-Gap | `spacing.2xl` | 48px |
| Section-Padding | `spacing.sectionY` | 80px |
| Row-Gap (Links) | `spacing.xs` | 8px |

### Spalten

| Spalte | Inhalt |
|--------|--------|
| Brand | Logo, kurze Beschreibung (1–2 Sätze) |
| Quick Links | Home, Menu, About, Blog, Contact |
| Contact | Adresse, Telefon, E-Mail, Öffnungszeiten |
| Newsletter | Heading, Kurzbeschreibung, E-Mail-Input + Submit-Button |

### Bottom Bar

- Copyright-Text, Social-Media-Icons
- Hintergrund: leicht dunkler oder gleich mit `border.dark` als Trennlinie
- Social Icons: 24px, `text.onDarkMuted`, Hover → `accent.primary`

### Responsive

| Breakpoint | Layout |
|-----------|--------|
| ≥ `breakpoint.lg` | 4 Spalten nebeneinander |
| `breakpoint.md`–`breakpoint.lg` | 2×2 Grid |
| < `breakpoint.md` | Gestapelt, volle Breite |

### Accessibility

- `<footer>` mit `aria-label="Site footer"`
- Newsletter-Input: `<label>` sichtbar oder `aria-label`
- Social Links: `aria-label` pro Icon (z.B. "Follow us on Instagram")

---

## 12. Menu Category Tabs

**Beschreibung:** Horizontale Filter-Tabs für die 7 Menü-Kategorien aus dem CSV.

### Token-Referenzen

| Eigenschaft | Token | Wert |
|-------------|-------|------|
| Tab-Font | `typography.fontFamily.body` | Inter |
| Tab-Größe | `typography.fontSize.small` | 14px |
| Tab-Gewicht (inaktiv) | `typography.fontWeight.medium` | 500 |
| Tab-Gewicht (aktiv) | `typography.fontWeight.semibold` | 600 |
| Tab-Farbe (inaktiv) | `color.text.onDarkMuted` | #B0B0B0 |
| Tab-Farbe (aktiv) | `color.text.onDark` | #FFFFFF |
| Aktiv-Indikator | `color.accent.primary` | #D4782F |
| Tab-Padding | `spacing.xs` × `spacing.md` | 8px 16px |
| Tab-Gap | `spacing.xs` | 8px |
| Letter-Spacing | `typography.letterSpacing.wide` | 0.05em |
| Transition | `transition.fast` | 150ms ease |

### Kategorien

1. All
2. Appetizers
3. Sushi & Sashimi
4. Prime Steaks
5. Burgers & Grills
6. Craft Beverages
7. Desserts
8. Sides

### Zustände

| Zustand | Darstellung |
|---------|------------|
| Inaktiv | Nur Text, `text.onDarkMuted` |
| Hover | Text wird `text.onDark` |
| Aktiv | Text `text.onDark` + 2px Unterline in `accent.primary` |
| Focus | Outline-Ring um den Tab |

### Layout

- Horizontal zentriert
- Uppercase-Text

### Responsive

| Breakpoint | Verhalten |
|-----------|----------|
| ≥ `breakpoint.md` | Alle Tabs sichtbar, zentriert |
| < `breakpoint.md` | Horizontal scrollbar, kein Umbruch, Scroll-Hinweis (Fade an den Rändern) |

### Accessibility

- `role="tablist"` auf dem Container
- Jeder Tab: `role="tab"`, `aria-selected="true/false"`
- Zugehöriger Content: `role="tabpanel"`, `aria-labelledby`
- Tastatur: Pfeiltasten navigieren zwischen Tabs

---

## 13. Section Divider

**Beschreibung:** Visueller Übergang zwischen dunklen und hellen Sektionen.

### Token-Referenzen

| Eigenschaft | Token | Wert |
|-------------|-------|------|
| Höhe | — | 1px (einfach) oder 80px (Gradient) |
| Farbe (einfach, dunkel) | `color.border.dark` | #2A2A2A |
| Farbe (einfach, hell) | `color.border.light` | #E0D8CC |

### Varianten

| Variante | Beschreibung |
|----------|-------------|
| **Line** | Einfache 1px-Linie, `border.dark` oder `border.light` |
| **Gradient** | Sanfter Farbverlauf von einer Sektion zur nächsten (z.B. `background.primary` → `background.cream`), Höhe 80px |
| **None** | Kein sichtbarer Divider — Sektionen grenzen direkt aneinander |

### Verwendung

| Übergang | Empfohlene Variante |
|----------|-------------------|
| Dark → Cream | Gradient oder None |
| Cream → Dark | Gradient oder None |
| Dark → Dark | Line |
| Cream → Cream | Line |

### Accessibility

- `aria-hidden="true"` — rein dekorativ
- Kein `<hr>` verwenden, da es semantisch einen thematischen Bruch impliziert und Screenreader es vorlesen
