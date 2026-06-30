# DevLaunch

DevLaunch is a responsive SaaS landing page for a startup launch platform. The project is built as a focused portfolio case for practicing React, Vite, Tailwind CSS, component-based UI, and responsive landing page design.

## Project Status

Planning stage. The repository currently contains the project brief and implementation roadmap. The application files will be added during development.

## Product Concept

DevLaunch helps early-stage startup teams plan, validate, and launch a product faster. The landing page presents a fictional platform with launch planning, analytics, team collaboration, and AI-assisted product guidance.

## Goals

- Practice Tailwind CSS through a real landing page instead of isolated UI exercises.
- Build reusable React components with clear section boundaries.
- Create a polished responsive layout for mobile, tablet, and desktop.
- Demonstrate practical UI decisions: hierarchy, spacing, typography, states, and conversion-focused sections.
- Ship a complete GitHub portfolio project with documentation and deployment.

## Branch Naming

Use short branch names without `features/`.

Recommended patterns:

- `main` for the stable branch.
- `setup/<topic>` for initial project setup.
- `ui/<section>` for landing page sections.
- `docs/<topic>` for documentation updates.
- `fix/<topic>` for bug fixes.
- `refactor/<topic>` for code cleanup without behavior changes.
- `test/<topic>` for test work.
- `chore/<topic>` for config, dependencies, and tooling.

Examples:

- `setup/devlaunch-base`
- `ui/hero-section`
- `ui/pricing-section`
- `docs/readme-update`
- `fix/mobile-menu`
- `refactor/navbar`

## Commit Naming

Use conventional commits.

Prefixes:

- `feat:` new functionality
- `fix:` bug fixes
- `refactor:` code improvements without changing behavior
- `style:` formatting, spacing, indentation, and visual-only changes
- `docs:` README and documentation
- `chore:` project setup, dependencies, and config
- `test:` tests

Examples:

- `feat: add hero section`
- `feat: build responsive navbar`
- `fix: correct mobile menu overflow`
- `refactor: split feature cards into data`
- `style: align section spacing`
- `docs: update project brief`
- `chore: install tailwind dependencies`
- `test: add faq accordion coverage`

## Tech Stack

- Vite
- Tailwind CSS v4
- HTML
- JavaScript

## Design Direction

DevLaunch should feel like a modern B2B SaaS product: clean, confident, and operational. The UI should prioritize clarity and product value over decorative effects.

### Visual Style

- Dark interface with strong contrast.
- Clean dashboard-inspired hero mockup.
- Compact cards with subtle borders and shadows.
- Purple used as an accent, not as the entire visual identity.
- Responsive spacing and typography.
- Smooth hover and focus states.

### Suggested Palette

| Token       | Color     | Usage                              |
| ----------- | --------- | ---------------------------------- |
| Background  | `#0B1120` | Main page background               |
| Surface     | `#111827` | Cards and panels                   |
| Surface Alt | `#1F2937` | Nested UI blocks                   |
| Primary     | `#7C3AED` | Main CTA and highlights            |
| Accent      | `#22C55E` | Positive metrics and growth states |
| Text        | `#F8FAFC` | Main text                          |
| Muted Text  | `#94A3B8` | Supporting copy                    |
| Border      | `#334155` | Subtle dividers                    |

## Planned Structure

```text
public/

src/
├── assets/
│   ├── images/
│   ├── icons/
│   └── logos/
│
├── css/
│   └── style.css
│
├── js/
│   ├── navbar.js
│   ├── faq.js
│   └── theme.js
│
└── main.js

index.html
vite.config.js
package.json
README.md
```

## Page Sections

### 1. Navbar

Content:

- Logo: `DevLaunch`
- Links: `Home`, `Features`, `How it works`, `Pricing`, `FAQ`
- Actions: `Login`, `Get started`

Requirements:

- Sticky or fixed navigation.
- Backdrop blur on scroll area.
- Mobile menu with open and close states.
- Accessible buttons and links.

Tailwind practice:

- Flexbox
- Responsive visibility
- Fixed positioning
- Backdrop blur
- Spacing and alignment

### 2. Hero

Headline:

```text
Launch your startup in days, not months.
```

Description:

```text
Plan your launch, track growth, and keep your team aligned from idea to first customers.
```

Buttons:

- `Start free trial`
- `View demo`

Hero visual:

- A custom SaaS dashboard mockup with revenue, active users, launch checklist, and growth chart.

Tailwind practice:

- Responsive grid
- Typography scale
- Button states
- Dashboard card layout
- Decorative but restrained gradients

### 3. Trusted By

Display fictional or text-based partner logos:

```text
Orbit Labs
Northstar
LaunchPad
SignalHQ
Metricly
```

Tailwind practice:

- Flex wrap
- Gap utilities
- Muted text styles
- Hover states

### 4. Features

Six feature cards:

- Launch Roadmaps
- Growth Analytics
- Team Workspaces
- AI Product Assistant
- Security Controls
- Investor Reporting

Tailwind practice:

- CSS grid
- Reusable cards
- Icon styling
- Hover and focus states

### 5. Dashboard Preview

Build a realistic SaaS dashboard preview that showcases the product interface.

The preview should include:

- Sidebar
- Header
- Four statistic cards
- Analytics chart
- Recent activity table

Tailwind practice:

- Nested CSS Grid
- Flexbox layouts
- Responsive dashboard
- Reusable UI components
- Glassmorphism
- Shadows and gradients
- Spacing system

### 6. How It Works

Three-step flow:

1. Create a launch plan.
2. Invite your team.
3. Track growth and ship.

Tailwind practice:

- Ordered layout
- Responsive columns
- Step indicators
- Alignment

### 7. Pricing

Plans:

- Starter: `$0`
- Pro: `$29/month`
- Scale: `$99/month`

Requirements:

- Highlight the Pro plan.
- Include feature lists.
- Add clear CTA buttons.
- Optional monthly/yearly billing toggle after MVP.

Tailwind practice:

- Grid
- Borders
- Badges
- Button variants

### 8. Testimonials

Create three concise customer reviews with names, roles, and company names.

Tailwind practice:

- Card layout
- Typography
- Avatar placeholders
- Responsive grid

### 9. Call To Action (CTA)

Final conversion section encouraging users to start building with DevLaunch.

Content:

- Strong headline focused on launching products faster.
- Short supporting description explaining the value.
- Primary CTA button:
  - Start building
  - Get started
- Secondary CTA button:
  - View demo
  - Explore features

Tailwind practice:

- Flex layout
- Responsive spacing
- Background utilities
- Button variants
- Decorative absolute elements
- Hover and focus states

### 10. Footer

Content:

- Product links
- Company links
- Resource links
- Social links: GitHub, X, LinkedIn

Tailwind practice:

- Multi-column responsive layout
- Link states
- Borders and spacing

## Bonus Features

Add these only after the MVP works well:

- Dark/light theme switcher.
- Animated statistics.
- Interactive pricing toggle.
- Scroll reveal animations.
- Newsletter form.
- More detailed dashboard chart mockups.

## Tailwind CSS Styling Guidelines

This project follows a hybrid approach that combines Tailwind CSS utilities with custom CSS. The goal is to keep layouts and component structure visible in the HTML while moving design tokens, complex visual effects, and reusable design patterns into CSS. These guidelines help maintain consistency, readability, and make the codebase easier to scale, especially when migrating to React.

### Use Tailwind for Layout & Structure

Use Tailwind utility classes for properties that define the structure, position, and behavior of elements.

**Examples:**

* Display (`flex`, `grid`, `block`, `hidden`)
* Flexbox (`items-center`, `justify-between`, `flex-col`, `flex-wrap`)
* Grid (`grid-cols-*`, `col-span-*`)
* Spacing (`p-*`, `m-*`, `gap-*`, `space-x-*`, `space-y-*`)
* Sizing (`w-*`, `h-*`, `max-w-*`, `min-h-*`)
* Positioning (`relative`, `absolute`, `top-*`, `z-*`)
* Overflow (`overflow-hidden`, `overflow-auto`, `truncate`)
* Visibility (`hidden`, `visible`, `block`, `inline`)
* Responsive breakpoints (`sm:`, `md:`, `lg:`, `xl:`)
* Borders & radius (`border`, `rounded-*`)
* Local typography (`text-*`, `font-*`, `leading-*`, `tracking-*`)
* Local states (`hover:*`, `focus:*`, `active:*`, `disabled:*`)

---

### Use CSS for Theme & Design

Keep global design decisions and visual styling in CSS.

**Examples:**

* Dark mode variables (`:root.dark`, `.dark`)
* CSS variables (`--primary`, `--surface`, `--border`, `--text`)
* Theme colors (`color`, `background-color`, `border-color`)
* Custom shadows (`box-shadow`)
* Custom backgrounds (`background`, `background-image`)
* Gradient systems (`linear-gradient()`, `radial-gradient()`)
* Custom borders (`border-color`, complex border styles)
* Glassmorphism effects (`backdrop-filter`, blur, transparency)
* Global typography styles (`font-family`, base text styles)
* Design tokens (`spacing`, `radius`, `shadow`, `color` variables)

### Use CSS for Advanced Effects

Whenever a style becomes difficult to express with utilities or requires multiple CSS features, prefer plain CSS.

**Examples:**

* `linear-gradient()`
* `radial-gradient()`
* `color-mix()`
* `backdrop-filter`
* `filter`
* `mask`
* `clip-path`
* `mix-blend-mode`
* `isolation`
* Complex `transform`
* Custom `transition`
* `@keyframes`
* `animation`

---

### Use CSS for Pseudo-elements

Pseudo-elements should always remain in CSS.

**Examples:**

* `::before`
* `::after`
* `::selection`
* `::marker`

---

### Create CSS Classes Only for Reusable Design Components

If a group of styles represents a reusable design pattern, extract it into a CSS class.

**Examples:**

* `.surface-card`
* `.glass-panel`
* `.hero`
* `.btn-primary`
* `.badge`
* `.alert`

Avoid creating CSS classes for layouts that are only used once.

---

### Avoid Unnecessary Abstraction

Do not create CSS classes that only wrap a few Tailwind utilities unless they represent a reusable component.

**Prefer**

```html
<div class="flex flex-col gap-6 lg:pl-6">
```

**Instead of**

```css
.dashboard-main {
  @apply flex flex-col gap-6 lg:pl-6;
}
```

The HTML should clearly communicate the component's layout, while CSS should focus on reusable design and advanced styling.

## Class order convention

When combining Tailwind utilities and custom classes:

1. Component class(es)
2. Tailwind layout & positioning
3. Tailwind spacing & sizing
4. Tailwind typography
5. Tailwind state variants (hover:, focus:, active:, ...)
6. Utility/helper classes

**Example:**

```html
<div class="hero grid gap-6 p-6 surface-card">
```

`hero` → component identity

`grid/gap/padding` → Tailwind structure

`surface-card` → reusable design style
