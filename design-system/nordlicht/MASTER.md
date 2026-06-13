# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Nordlicht
**Generated:** 2026-06-12 12:37:28
**Category:** Legal Services

---

## Global Rules

### Color Palette

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Primary | `#2563EB` | `--color-primary` |
| Secondary | `#3B82F6` | `--color-secondary` |
| CTA/Accent | `#F97316` | `--color-cta` |
| Background | `#F8FAFC` | `--color-background` |
| Text | `#1E293B` | `--color-text` |

**Color Notes:** Professional navy + blue CTA

### Typography

- **Heading Font:** Orbitron
- **Body Font:** JetBrains Mono
- **Mood:** cyberpunk, neon, glitch, hud, sci-fi, dark, matrix green, magenta, chamfered, tactical
- **Google Fonts:** [Orbitron + JetBrains Mono](https://fonts.google.com/share?selection.family=JetBrains+Mono:wght@400;500|Orbitron:wght@700;900)

**CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Orbitron:wght@700;900&display=swap');
```

### Spacing Variables

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `16px` / `1rem` | Standard padding |
| `--space-lg` | `24px` / `1.5rem` | Section padding |
| `--space-xl` | `32px` / `2rem` | Large gaps |
| `--space-2xl` | `48px` / `3rem` | Section margins |
| `--space-3xl` | `64px` / `4rem` | Hero padding |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Hero images, featured cards |

---

## Component Specs

### Button
*Category: interactive*

**Variants:**

| Variant | Background | Text | Border | Hover BG |
|---------|-----------|------|--------|----------|
| primary | `#2563EB` | `#FFFFFF` | `none` | `#1F54C7` |
| secondary | `#3B82F6` | `#FFFFFF` | `none` | `#326ED1` |
| outline | `transparent` | `#2563EB` | `1px solid #E2E8F0` | `#F8FAFC` |
| ghost | `transparent` | `#1E293B` | `none` | `#F8FAFC` |
| destructive | `#EF4444` | `#FFFFFF` | `none` | `#DC2626` |
| link | `transparent` | `#2563EB` | `none` | `transparent` |

**Sizes:** sm(6px 12px) / default(8px 16px) / lg(12px 24px)

**States:** default, hover, active, focus, disabled, loading

**Specs:** radius: `4px` | shadow: `none` | transition: `all 150ms ease`

### Input
*Category: form*

**Variants:**

| Variant | Background | Text | Border | Hover BG |
|---------|-----------|------|--------|----------|
| text | `#F8FAFC` | `#1E293B` | `1px solid #E2E8F0` | `#F1F5F9` |
| email | `#F8FAFC` | `#1E293B` | `1px solid #E2E8F0` | `#F1F5F9` |
| password | `#F8FAFC` | `#1E293B` | `1px solid #E2E8F0` | `#F1F5F9` |
| number | `#F8FAFC` | `#1E293B` | `1px solid #E2E8F0` | `#F1F5F9` |
| search | `#F8FAFC` | `#1E293B` | `1px solid #E2E8F0` | `#F1F5F9` |
| textarea | `#F8FAFC` | `#1E293B` | `1px solid #E2E8F0` | `#F1F5F9` |

**Sizes:** sm(6px 10px) / default(8px 12px) / lg(10px 14px)

**States:** default, focus, error, disabled, readonly

**Specs:** radius: `4px` | shadow: `none` | transition: `border-color 150ms ease`

### Select
*Category: form*

**Variants:**

| Variant | Background | Text | Border | Hover BG |
|---------|-----------|------|--------|----------|
| default | `#F8FAFC` | `#1E293B` | `1px solid #E2E8F0` | `#F1F5F9` |
| multi | `#F8FAFC` | `#1E293B` | `1px solid #E2E8F0` | `#F1F5F9` |

**Sizes:** sm(6px 10px) / default(8px 12px) / lg(10px 14px)

**States:** default, focus, open, disabled

**Specs:** radius: `4px` | shadow: `none` | transition: `border-color 150ms ease`

### Checkbox
*Category: form*

**Variants:**

| Variant | Background | Text | Border | Hover BG |
|---------|-----------|------|--------|----------|
| default | `#F8FAFC` | `#1E293B` | `1px solid #E2E8F0` | `#F1F5F9` |
| indeterminate | `#F8FAFC` | `#1E293B` | `1px solid #E2E8F0` | `#F1F5F9` |

**Sizes:** sm(8px 16px) / default(8px 16px)

**States:** default, checked, focus, disabled

**Specs:** radius: `2px` | shadow: `none` | transition: `all 100ms ease`

### Radio
*Category: form*

**Variants:**

| Variant | Background | Text | Border | Hover BG |
|---------|-----------|------|--------|----------|
| default | `#F8FAFC` | `#1E293B` | `1px solid #E2E8F0` | `#F1F5F9` |

**Sizes:** sm(8px 16px) / default(8px 16px)

**States:** default, selected, focus, disabled

**Specs:** radius: `50%` | shadow: `none` | transition: `all 100ms ease`

### Toggle
*Category: form*

**Variants:**

| Variant | Background | Text | Border | Hover BG |
|---------|-----------|------|--------|----------|
| default | `#F8FAFC` | `#1E293B` | `1px solid #E2E8F0` | `#F1F5F9` |

**Sizes:** sm(8px 16px) / default(8px 16px) / lg(8px 16px)

**States:** default, on, focus, disabled

**Specs:** radius: `9999px` | shadow: `none` | transition: `all 200ms ease`

### Card
*Category: container*

**Variants:**

| Variant | Background | Text | Border | Hover BG |
|---------|-----------|------|--------|----------|
| default | `#F8FAFC` | `#1E293B` | `1px solid #E2E8F0` | `#F1F5F9` |
| elevated | `#FFFFFF` | `#1E293B` | `none` | `#FFFFFF` |
| outline | `transparent` | `#2563EB` | `1px solid #E2E8F0` | `#F8FAFC` |
| interactive | `#FFFFFF` | `#1E293B` | `1px solid #E2E8F0` | `#F8FAFC` |

**Sizes:** sm(12px) / default(16px) / lg(24px)

**States:** default, hover

**Specs:** radius: `8px` | shadow: `default:0 1px 3px rgba(0,0,0,0.05)|elevated:0 4px 6px rgba(0,0,0,0.07)` | transition: `none`

### Modal
*Category: overlay*

**Variants:**

| Variant | Background | Text | Border | Hover BG |
|---------|-----------|------|--------|----------|
| default | `#F8FAFC` | `#1E293B` | `1px solid #E2E8F0` | `#F1F5F9` |
| alert | `#F8FAFC` | `#1E293B` | `1px solid #E2E8F0` | `#F1F5F9` |
| fullscreen | `#F8FAFC` | `#1E293B` | `1px solid #E2E8F0` | `#F1F5F9` |

**Sizes:** sm(16px) / default(24px) / lg(32px)

**States:** open, closing

**Specs:** radius: `8px` | shadow: `0 8px 30px rgba(0,0,0,0.12)` | transition: `all 200ms ease`

### Nav
*Category: navigation*

**Variants:**

| Variant | Background | Text | Border | Hover BG |
|---------|-----------|------|--------|----------|
| horizontal | `#F8FAFC` | `#1E293B` | `1px solid #E2E8F0` | `#F1F5F9` |
| vertical | `#F8FAFC` | `#1E293B` | `1px solid #E2E8F0` | `#F1F5F9` |
| mobile | `#F8FAFC` | `#1E293B` | `1px solid #E2E8F0` | `#F1F5F9` |

**Sizes:** default(8px 16px)

**States:** default, sticky, scrolled

**Specs:** radius: `0` | shadow: `scrolled:0 1px 3px rgba(0,0,0,0.05)` | transition: `all 200ms ease`

### Sidebar
*Category: navigation*

**Variants:**

| Variant | Background | Text | Border | Hover BG |
|---------|-----------|------|--------|----------|
| default | `#F8FAFC` | `#1E293B` | `1px solid #E2E8F0` | `#F1F5F9` |
| collapsible | `#F8FAFC` | `#1E293B` | `1px solid #E2E8F0` | `#F1F5F9` |
| mini | `#F8FAFC` | `#1E293B` | `1px solid #E2E8F0` | `#F1F5F9` |

**Sizes:** default(8px 16px)

**States:** default, collapsed, expanded

**Specs:** radius: `0` | shadow: `none` | transition: `width 200ms ease`

### Badge
*Category: indicator*

**Variants:**

| Variant | Background | Text | Border | Hover BG |
|---------|-----------|------|--------|----------|
| default | `#F8FAFC` | `#1E293B` | `1px solid #E2E8F0` | `#F1F5F9` |
| success | `#22C55E` | `#FFFFFF` | `none` | `#16A34A` |
| warning | `#F59E0B` | `#FFFFFF` | `none` | `#D97706` |
| error | `#EF4444` | `#FFFFFF` | `none` | `#DC2626` |
| info | `#3B82F6` | `#FFFFFF` | `none` | `#2563EB` |
| outline | `transparent` | `#2563EB` | `1px solid #E2E8F0` | `#F8FAFC` |

**Sizes:** sm(2px 6px) / default(4px 8px)

**States:** default

**Specs:** radius: `9999px` | shadow: `none` | transition: `none`

### Alert
*Category: feedback*

**Variants:**

| Variant | Background | Text | Border | Hover BG |
|---------|-----------|------|--------|----------|
| default | `#F8FAFC` | `#1E293B` | `1px solid #E2E8F0` | `#F1F5F9` |
| success | `#22C55E` | `#FFFFFF` | `none` | `#16A34A` |
| warning | `#F59E0B` | `#FFFFFF` | `none` | `#D97706` |
| error | `#EF4444` | `#FFFFFF` | `none` | `#DC2626` |
| info | `#3B82F6` | `#FFFFFF` | `none` | `#2563EB` |

**Sizes:** default(8px 16px)

**States:** default, dismissing

**Specs:** radius: `8px` | shadow: `none` | transition: `opacity 200ms ease`

### Toast
*Category: feedback*

**Variants:**

| Variant | Background | Text | Border | Hover BG |
|---------|-----------|------|--------|----------|
| default | `#F8FAFC` | `#1E293B` | `1px solid #E2E8F0` | `#F1F5F9` |
| success | `#22C55E` | `#FFFFFF` | `none` | `#16A34A` |
| error | `#EF4444` | `#FFFFFF` | `none` | `#DC2626` |
| info | `#3B82F6` | `#FFFFFF` | `none` | `#2563EB` |

**Sizes:** default(8px 16px)

**States:** visible, dismissing

**Specs:** radius: `8px` | shadow: `0 4px 12px rgba(0,0,0,0.1)` | transition: `all 300ms ease`

### Table
*Category: data*

**Variants:**

| Variant | Background | Text | Border | Hover BG |
|---------|-----------|------|--------|----------|
| default | `#F8FAFC` | `#1E293B` | `1px solid #E2E8F0` | `#F1F5F9` |
| striped | `#F8FAFC` | `#1E293B` | `1px solid #E2E8F0` | `#F1F5F9` |
| bordered | `#F8FAFC` | `#1E293B` | `1px solid #E2E8F0` | `#F1F5F9` |

**Sizes:** default(8px 16px)

**States:** default, hover-row, selected-row

**Specs:** radius: `0` | shadow: `none` | transition: `none`

### Dropdown
*Category: interactive*

**Variants:**

| Variant | Background | Text | Border | Hover BG |
|---------|-----------|------|--------|----------|
| default | `#F8FAFC` | `#1E293B` | `1px solid #E2E8F0` | `#F1F5F9` |
| searchable | `#F8FAFC` | `#1E293B` | `1px solid #E2E8F0` | `#F1F5F9` |

**Sizes:** default(8px 16px)

**States:** default, open, disabled

**Specs:** radius: `8px` | shadow: `0 4px 12px rgba(0,0,0,0.08)` | transition: `all 150ms ease`

### Tabs
*Category: navigation*

**Variants:**

| Variant | Background | Text | Border | Hover BG |
|---------|-----------|------|--------|----------|
| default | `#F8FAFC` | `#1E293B` | `1px solid #E2E8F0` | `#F1F5F9` |
| underline | `#F8FAFC` | `#1E293B` | `1px solid #E2E8F0` | `#F1F5F9` |
| pill | `#F8FAFC` | `#1E293B` | `1px solid #E2E8F0` | `#F1F5F9` |

**Sizes:** sm(6px 12px) / default(8px 16px)

**States:** default, active, disabled

**Specs:** radius: `6px` | shadow: `none` | transition: `all 150ms ease`

---

## Style Guidelines

**Style:** Trust & Authority

**Keywords:** Certificates/badges displayed, expert credentials, case studies with metrics, before/after comparisons, industry recognition, security badges

**Best For:** Healthcare/medical landing pages, financial services, enterprise software, premium/luxury products, legal services

**Key Effects:** Badge hover effects, metric pulse animations, certificate carousel, smooth stat reveal

### Page Pattern

**Pattern Name:** Trust & Authority + Minimal

- **CTA Placement:** Above fold
- **Section Order:** Hero > Features > CTA

---

## Anti-Patterns (Do NOT Use)

- ❌ Outdated design
- ❌ Hidden credentials
- ❌ AI purple/pink gradients

### Additional Forbidden Patterns

- ❌ **Emojis as icons** — Use SVG icons (Heroicons, Lucide, Simple Icons)
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layout
- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio
- ❌ **Instant state changes** — Always use transitions (150-300ms)
- ❌ **Invisible focus states** — Focus states must be visible for a11y

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile
