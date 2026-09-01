# TBK Design System

Design system for **PT Trans Berjaya Khatulistiwa (TBK)** — the layer between the brand guideline (logo, Classic Blue palette, typography) and a buildable product UI. Built from the brand guideline brief and the frontend rules doc (`AGENTS.md`-style) the team provided in chat; no Figma file or codebase was attached, so components here are a spec/reference implementation, not a copy of shipped code.

**Sources given:**
- Brand guideline text brief (fondasi warna Classic Blue, tipografi Geist, logo, pattern gelombang)
- Frontend rules doc: Next.js + TypeScript + Tailwind + shadcn/ui + react-hook-form/zod + lucide-react
- `uploads/Logo.svg` (logotype) → `assets/logo-full.svg`
- `uploads/Logo2.svg` (logomark) → `assets/logomark.svg`

No codebase or Figma was attached — if one exists, attach it and this system should be reconciled against it.

## Stack this system targets

Next.js (App Router) + TypeScript, Tailwind CSS, shadcn/ui (`components/ui/`), react-hook-form + zod, lucide-react, Geist Variable / Geist Mono. Rules are absolute (see brief): all UI from shadcn, Tailwind-only styling, no inline visual CSS (CSS-variable passthrough excepted), Dialog for all modals, Form+Input+Label for all forms, warna hanya lewat token semantik.

This project reproduces that contract as portable tokens + components so it can be previewed and reasoned about outside the actual Next.js repo. In production, every component here maps 1:1 to a shadcn primitive in `components/ui/`.

## Decisions made on open questions (brief §6.3)

Per the brief's own recommendation for an operational, data-dense product:
- **Density:** compact (`sm` controls in tables/toolbars/filters)
- **`--radius`:** `0.375rem`
- **Base neutral:** slate

## Gaps closed (brief §5)

- **Semantic colors** — success/warning/info added as 4-step scales (surface/border/content/foreground), sitting alongside shadcn's own `--destructive`. Info reuses the Classic Blue family for cohesion; success/warning use standard accessible green/amber so status meaning stays legible.
- **Neutral scale** — full slate 50–950, separate from the blue primitive scale.
- **Step 500 risk** — `--tbk-500` (`#537ABD`, 4.12:1) is never aliased into a text token; only `--tbk-700` (7.22:1 AAA) is `--primary`.
- **SF Mono license** — swapped for **Geist Mono** (recommended in brief), one type family with Geist Variable.
- **Font sourcing** — Geist Variable and Geist Mono are loaded from Google Fonts CDN (`tokens/typography.css`) because no webfont files were provided. **Flag:** if TBK has official Geist binaries/licensing preferences, send them and this will switch to local `@font-face`.

## Components (30)

Organized by concern; each `<Name>.jsx`+`.d.ts`+`.prompt.md` maps to a shadcn primitive named in brief §8.

**Primitives** (`components/primitives/`): Icon (intentional addition — CDN wrapper for lucide-react's icons), Button, Badge, Avatar, Separator, Skeleton, Spinner
**Forms** (`components/forms/`): Label, Input, Textarea, Select, Checkbox, RadioGroup, Switch, FormField
**Feedback** (`components/feedback/`): Alert, Tooltip
**Overlay** (`components/overlay/`): Dialog, AlertDialog, Sheet
**Navigation** (`components/navigation/`): Tabs, Accordion, Breadcrumb, Pagination
**Data display** (`components/data-display/`): Card, Table
**Patterns** (`components/patterns/`): Sidebar, PageHeader, EmptyState, FilterBar

**Not yet built** (need assembly per brief §Tier 2/3, flagged rather than faked): Dropdown/Command menu, Toast (Sonner), Date Picker (Calendar+Popover), full Data Table (Table+TanStack sort/filter/bulk-select), Loading/Error-state patterns. These are compositions of the primitives above — ask if you want them built next.

## Content fundamentals

Brief and rules doc are written in Bahasa Indonesia, direct and procedural — short declarative sentences, numbered rules, explicit "SALAH/BENAR" (wrong/right) code pairs rather than abstract prose. No marketing tone, no emoji. Copy in components/UI kit examples follows this register: plain Indonesian nouns/labels ("Simpan", "Batal", "Nama", "Pelanggan"), no exclamation points, no cute empty-state copy — a heading plus one plain sentence of instruction. Error messages are direct: "Nama wajib diisi", not softened.

## Visual foundations

- **Color:** one brand hue (Classic Blue, `--tbk-700 #35548A` primary) plus a strictly separate slate neutral scale. No gradients anywhere in the guideline. Semantic color is always a surface+border+content triad, never a bare bright fill.
- **Type:** Geist Variable for all UI text (sans, single family, weight does the work — no serif, no display face). Geist Mono for numbers, IDs, currency, code (`font-mono tabular-nums`). Page titles `text-2xl font-semibold tracking-tight`; section titles `text-lg font-semibold`; body `text-sm`; secondary text `text-sm text-muted-foreground`.
- **Spacing:** Tailwind's 4px base scale, unmodified. `gap-4`/`p-6` for layout, `space-y-6` between sections, `space-y-4` between form fields. No arbitrary pixel values.
- **Radius:** `0.375rem` system-wide (compact/data-dense choice) — cards get `+4px` (`--radius-lg`), inputs/buttons use the base.
- **Shadow:** flat, low-elevation only — a 1–2px ambient shadow on cards (`--shadow-sm`), a slightly stronger one on modals/popovers (`--shadow-md`/`--shadow-lg`). No colored/glow shadows.
- **Borders:** 1px, `var(--border)` (slate-200), used liberally on cards/inputs/table rows instead of relying on shadow for separation — a data-dense SaaS convention.
- **Backgrounds:** flat white/near-white surfaces. No photography, no illustration, no pattern in the product UI itself — the geometric wave pattern from the brand guideline is a **marketing-only decorative asset** (brief §4.4: not functional, needs an opacity + no-text-on-top rule); it does not appear in any component or UI kit screen here.
- **Motion:** brief doesn't specify; used sparingly — `120–180ms` color/border transitions on interactive states (`--duration-fast`/`--duration-base`, `cubic-bezier(0.16,1,0.3,1)`), no bounce, no page-level animation.
- **Hover/press states:** hover darkens fills one step (e.g. primary → `--tbk-800`) or adds a neutral tint (`--secondary`/`--muted`) for outline/ghost buttons; no scale/press-shrink effects — consistent with a dense, functional SaaS surface.
- **Focus:** every interactive element keeps a visible 2px `--ring` outline (`:focus-visible`) — never removed, per accessibility rules.
- **Cards:** white surface, 1px slate-200 border, `--radius-lg`, `--shadow-sm`. Never colored left-border accent cards.
- **Layout:** fixed-width dark sidebar (`--slate-950`) + top bar + `max-w-screen-2xl` content area with `p-6`, per brief §6.1's mandated SaaS pattern.

## Iconography

**lucide-react** (bundled with shadcn) is the only icon system in the brief — no custom icon font, no PNG icons, no emoji. This system's `Icon` component pulls the same icon set live from the `lucide-static` CDN (`unpkg.com/lucide-static`) by name, so previews stay in sync with the real library without vendoring hundreds of SVGs. In the actual Next.js app, use `lucide-react` imports directly; `Icon` here is a documentation/preview convenience. Icons are stroke-based, 24×24, `currentColor` — recolor with the `icon-invert` utility class (`filter:invert(1)`) for icons on the dark sidebar.

## Assets

- `assets/logo-full.svg` — TBK logotype (mark + wordmark), Classic Blue
- `assets/logomark.svg` — TBK logomark only, for favicon/avatar/tight spaces
No other illustrations or imagery were supplied.

## Index

```
styles.css                 → tokens/colors.css, typography.css, spacing.css, base.css, components.css
tokens/                     design tokens (CSS custom properties) + base reset + utility component classes
assets/                     logo-full.svg, logomark.svg
components/primitives/      Icon, Button, Badge, Avatar, Separator, Skeleton, Spinner
components/forms/           Label, Input, Textarea, Select, Checkbox, RadioGroup, Switch, FormField
components/feedback/        Alert, Tooltip
components/overlay/         Dialog, AlertDialog, Sheet
components/navigation/      Tabs, Accordion, Breadcrumb, Pagination
components/data-display/    Card, Table
components/patterns/        Sidebar, PageHeader, EmptyState, FilterBar
ui_kits/                    (pending) full-screen SaaS example recreations
SKILL.md                    Claude Code-compatible skill wrapper
```
