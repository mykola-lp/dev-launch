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

| Token | Color | Usage |
| --- | --- | --- |
| Background | `#0B1120` | Main page background |
| Surface | `#111827` | Cards and panels |
| Surface Alt | `#1F2937` | Nested UI blocks |
| Primary | `#7C3AED` | Main CTA and highlights |
| Accent | `#22C55E` | Positive metrics and growth states |
| Text | `#F8FAFC` | Main text |
| Muted Text | `#94A3B8` | Supporting copy |
| Border | `#334155` | Subtle dividers |

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
├── sections/
│   ├── hero.html
│   ├── features.html
│   ├── pricing.html
│   └── faq.html
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
- Links: `Features`, `How it works`, `Pricing`, `FAQ`
- Actions: `Log in`, `Get started`

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

### 5. How It Works

Three-step flow:

1. Create a launch plan.
2. Invite your team.
3. Track growth and ship.

Tailwind practice:

- Ordered layout
- Responsive columns
- Step indicators
- Alignment

### 6. Pricing

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

### 7. Testimonials

Create three concise customer reviews with names, roles, and company names.

Tailwind practice:

- Card layout
- Typography
- Avatar placeholders
- Responsive grid

### 8. FAQ

Accordion questions:

- How does DevLaunch help early-stage teams?
- Can I use it with my existing tools?
- Is there a free plan?
- Can I cancel anytime?

React practice:

- `useState`
- Conditional rendering
- Mapping data arrays
- Accessible accordion controls

### 9. CTA

Headline:

```text
Ready to launch with a clearer plan?
```

Button:

```text
Get started
```

Tailwind practice:

- Section spacing
- CTA hierarchy
- Background accents
- Centered content

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

## MVP Scope

The MVP is complete when:

- All ten sections are implemented.
- The page is responsive on mobile, tablet, and desktop.
- Content is stored in data arrays where it improves readability.
- Components are reusable and clearly named.
- The FAQ accordion works.
- Navigation links scroll to the correct sections.
- The project builds without errors.
- The app is deployed and linked from the README.

## Bonus Features

Add these only after the MVP works well:

- Dark/light theme switcher.
- Animated statistics.
- Interactive pricing toggle.
- Scroll reveal animations.
- Newsletter form.
- More detailed dashboard chart mockups.

## Learning Objectives

After completing this project, the developer should be comfortable with:

- Tailwind utility classes.
- Responsive design.
- React component composition.
- Reusable data-driven sections.
- Basic UI state with `useState`.
- Landing page structure and conversion flow.
- GitHub project documentation.
- Deployment workflow.

## Development Roadmap

### Day 1

- Create the Vite React project.
- Install and configure Tailwind CSS.
- Build Navbar and Hero.

### Day 2

- Build Trusted By and Features.
- Move repeated content into data files.

### Day 3

- Build How It Works and Pricing.
- Add responsive states.

### Day 4

- Build Testimonials, CTA, and Footer.

### Day 5

- Build FAQ accordion.
- Add accessible interaction states.

### Day 6

- Polish responsive design.
- Test mobile, tablet, and desktop layouts.

### Day 7

- Refactor components.
- Run production build.
- Deploy the project.
- Update README with screenshots and live URL.

## Recommended Learning Path

1. Set up Tailwind with Vite using the official Tailwind documentation.
2. Learn utility-first styling and responsive variants.
3. Build the landing page section by section.
4. Refactor repeated UI into reusable components.
5. Deploy and document the finished result.

## Definition of Done

- The interface matches the planned content and layout.
- The design looks polished on common screen sizes.
- The code uses readable React components.
- Tailwind classes are used consistently.
- Interactive elements have hover, focus, and active states.
- The project includes a live deployment link.
- The README explains the project, stack, setup, and final result.
