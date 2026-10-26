# Vertrix Solutions — Design Constraints & Token Specification
Based on the Tranzora Digital 5-Step Framework for Human-Crafted UI.

---

## 1. Brand Facts
- **Brand**: Vertrix Solutions (`vertrixsolutionscbe@gmail.com`)
- **HQ**: Coimbatore, Tamil Nadu, India
- **Core Value**: Production-ready web, mobile, and custom software engineering delivered with predictable milestones.
- **Brand Identity**: Vertrix Solutions monogram `V` badge + Vertrix Solutions studio wordmark.
- **Typography Case**: Natural title case and sentence case throughout. No shouting all-caps.

---

## 2. 60/30/10 Color Tokens (Light Sand & Wine Red Edition)
- **60% Light Sand Canvas & Main Background**:
  - `bg-background`: `#F7F3EB` (pure luxury Light Sand)
  - `bg-canvas`: `#EFE8DC` (alternating Light Sand sections)
- **30% Sand Structure & Cards**:
  - `surface`: `#FCFAF6` (clean Light Sand card surfaces)
  - `surface-elevated`: `#F2EBE0` (elevated sandstone cards)
  - `surface-subtle`: `#F8F4EC`
  - `border-ui`: `#DFD3C0` (1px solid, clean non-fuzzy sand boundaries)
  - `border-wine`: `#6E1528` (deep wine borders)
  - `text-primary`: `#450C17` (deep Wine Red headings & titles)
  - `text-secondary`: `#7A2838` (rich Wine Red body copy)
  - `text-muted`: `#9C4E5E` (muted Wine Red meta)
- **10% ONE Accent Color (Wine Red CTA)**:
  - `accent`: `#6E1528` (Velvet Wine Red for primary CTA buttons, active state, and key KPI metrics)
  - `accent-hover`: `#851D33`
  - `accent-text`: `#FCFAF6` (Light Sand text on Wine Red buttons)
- **Semantic Feedback**:
  - `success`: `#15803D` (Forest green for live node telemetry & uptime stats)
  - `error`: `#B91C1C`

---

## 3. Strict 8px Spacing System
Allowed values ONLY: `4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px`.
- **Inside group (Title to body)**: `8px – 16px`
- **Between groups (Content to buttons)**: `24px – 32px`
- **Section top/bottom padding**: `96px` desktop (`py-24`), `64px` mobile (`py-16`)
- **Container max-width**: `1200px` centered with `24px` margins
- **Grid**: 12 columns with `24px` gutter (`gap-6`)

---

## 4. Typography Scale & Hierarchy
- **Font Families**:
  - Primary Typography: `Plus Jakarta Sans`, sans-serif
  - Body & UI: `Plus Jakarta Sans` / `Inter`, sans-serif
  - Code & Metrics: `Space Grotesk`, monospace
- **Scale**:
  - Level 1 (Hero/Section H1/H2): `36px – 48px`, weight 800/700, line-height 1.15
  - Level 2 (Subheads & Card Titles): `18px – 24px`, weight 600/700
  - Level 3 (Body copy): `14px – 16px`, weight 400, line-height 1.6, max length 65 characters
- **Casing Rule**: All uppercase classes removed. Clean, elegant sentence case and title case only.

---

## 5. Shape & Corner Radii
- **Inputs & Buttons**: strictly `8px` (`rounded-lg`)
- **Cards & Containers**: strictly `16px` (`rounded-2xl`)
- **Floating Island Dock**: `16px` (`rounded-2xl`)

---

## 6. Buttons & Interactive States
- **Height**: strictly `48px` (touch-target compliant)
- **Hierarchy Rule**:
  - Exactly **ONE** primary filled button per section.
  - Secondary buttons are outline or ghost text links.
  - Never place two filled buttons side-by-side.

---

## 7. Ban List (Zero AI Slop)
- ❌ No rainbow pink/purple/blue gradients.
- ❌ No floating blurred background blobs.
- ❌ No ALL-CAPS uppercase shouting.
- ❌ No emoji used as interface icons.
- ❌ No filler copy ("Elevate", "Unlock", "Seamless", "Revolutionize").
- ❌ No fuzzy drop shadows. Clean `1px` borders only.
