# DevLaunch

DevLaunch is a responsive SaaS landing page for a startup launch platform. The project is built as a focused learning case for practicing Vite, JavaScript, HTML, Tailwind CSS v4, component-based UI, and responsive landing page design.

## Concept

Helps early-stage startup teams plan, validate, and launch a product faster. The landing page presents a fictional platform with launch planning, analytics, team collaboration, and AI-assisted product guidance.

## Prerequisites

Before getting started, make sure you have installed:

- Node.js
- npm

## Setup

1. Clone the repository:

   ```bash
   git clone <repo link>
   ```

2. Navigate to the project directory:

   ```bash
   cd dev-launch
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

## Branch Naming

Use short branch names without `features/`.

Recommended patterns:

- `main` for the stable branch.
- `docs/<topic>` for documentation updates.
- `fix/<topic>` for bug fixes.
- `refactor/<topic>` for code cleanup without behavior changes.
- `chore/<topic>` for config, dependencies, and tooling.

Examples:

- `docs/readme-update`
- `fix/mobile-menu`
- `refactor/navbar`

## Commit Naming

Use conventional commits.

Prefixes:

- `feat:` new functionality
- `fix:` bug fixes
- `refactor:` code improvements without changing behavior
- `docs:` README and documentation
- `chore:` project setup, dependencies, and config

Examples:

- `feat: add hero section`
- `fix: correct mobile menu overflow`

## Tailwind CSS Styling Guidelines

This project follows a hybrid approach that combines Tailwind CSS utilities with custom CSS. The goal is to keep layouts and component structure visible in the HTML while moving design tokens, complex visual effects, and reusable design patterns into CSS. These guidelines help maintain consistency, readability, and make the codebase easier to scale, especially when migrating to React.

### Use Tailwind for Layout & Structure

Use Tailwind utility classes for properties that define the structure, position, and behavior of elements.

**Examples:**

- Display (`flex`, `grid`, `block`, `hidden`)
- Flexbox (`items-center`, `justify-between`, `flex-col`, `flex-wrap`)
- Grid (`grid-cols-*`, `col-span-*`)
- Spacing (`p-*`, `m-*`, `gap-*`, `space-x-*`, `space-y-*`)
- Sizing (`w-*`, `h-*`, `max-w-*`, `min-h-*`)
- Positioning (`relative`, `absolute`, `top-*`, `z-*`)
- Overflow (`overflow-hidden`, `overflow-auto`, `truncate`)
- Visibility (`hidden`, `visible`, `block`, `inline`)
- Responsive breakpoints (`sm:`, `md:`, `lg:`, `xl:`)
- Borders & radius (`border`, `rounded-*`)
- Local typography (`text-*`, `font-*`, `leading-*`, `tracking-*`)
- Local states (`hover:*`, `focus:*`, `active:*`, `disabled:*`)

---

### Use CSS for Theme & Design

Keep global design decisions and visual styling in CSS.

**Examples:**

- Dark mode variables (`:root.dark`, `.dark`)
- CSS variables (`--primary`, `--surface`, `--border`, `--text`)
- Theme colors (`color`, `background-color`, `border-color`)
- Custom shadows (`box-shadow`)
- Custom backgrounds (`background`, `background-image`)
- Gradient systems (`linear-gradient()`, `radial-gradient()`)
- Custom borders (`border-color`, complex border styles)
- Glassmorphism effects (`backdrop-filter`, blur, transparency)
- Global typography styles (`font-family`, base text styles)
- Design tokens (`spacing`, `radius`, `shadow`, `color` variables)

### Use CSS for Advanced Effects

Whenever a style becomes difficult to express with utilities or requires multiple CSS features, prefer plain CSS.

**Examples:**

- `linear-gradient()`
- `radial-gradient()`
- `color-mix()`
- `backdrop-filter`
- `filter`
- `mask`
- `clip-path`
- `mix-blend-mode`
- `isolation`
- Complex `transform`
- Custom `transition`
- `@keyframes`
- `animation`

---

### Use CSS for Pseudo-elements

Pseudo-elements should always remain in CSS.

**Examples:**

- `::before`
- `::after`
- `::selection`
- `::marker`

---

### Create CSS Classes Only for Reusable Design Components

If a group of styles represents a reusable design pattern, extract it into a CSS class.

**Examples:**

- `.surface-card`
- `.glass-panel`
- `.hero`
- `.btn-primary`
- `.badge`
- `.alert`

Avoid creating CSS classes for layouts that are only used once.

---

### Avoid Unnecessary Abstraction

Do not create CSS classes that only wrap a few Tailwind utilities unless they represent a reusable component.

**Prefer**

```html
<div class="flex flex-col gap-6 lg:pl-6"></div>
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
<div class="hero grid gap-6 p-6 surface-card"></div>
```

`hero` → component identity

`grid/gap/padding` → Tailwind structure

`surface-card` → reusable design style

## Note

This project was created as a learning exercise to gain hands-on experience with Tailwind CSS.

To speed up development, some UI sections were initially based on free components from **TailwindFlex** and **Preline**. Rather than using them as-is, I customized and reworked them to match my own design ideas, visual style, and the overall flow of the project.

Many thanks to the creators of these excellent open-source resources.

### Resources & Inspiration

#### TailwindFlex

- [Navigation Bar](https://tailwindflex.com/@anonymous/navbar)
- [Hero Section](https://tailwindflex.com/@leon-bachmann/hero-template)
- [Statistics Section](https://tailwindflex.com/@laurits/statistics-card-section)
- [Feature Cards](https://tailwindflex.com/@samuel33/info-cards-5)
- [Pricing Section](https://tailwindflex.com/@laurits/fancy-pricing-card)
- [Team Section](https://tailwindflex.com/@sienna/meet-the-team-section)
- [Team Member Cards](https://tailwindflex.com/@sammytg7/profile-team-or-testimonial)
- [Newsletter Section](https://tailwindflex.com/@erik-hyatt/newsletter-form-with-svg-gradient-background)
- [Footer](https://tailwindflex.com/@sammytg7/simple-footer-2-2)

#### Preline

- [Admin Dashboard Layout](https://preline.co/blocks/application-pages/admin-dashboard-pages/)
- [Admin Dashboard Template](https://preline.co/templates/dashboards/admin-dashboard/)
