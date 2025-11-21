# Portfolio Project Instructions

## Goal
Build a personal portfolio website for the user, inspired by [https://aayushbharti.in/](https://aayushbharti.in/).

## Tech Stack
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion (required for many UI libraries below)

## UI Libraries & Components
Use the following libraries to build the best UI patterns:
1.  **Shadcn UI** (`https://ui.shadcn.com/`):
    -   Use for base components (Buttons, Inputs, Dialogs, Cards, Forms).
    -   Installation: `npx shadcn@latest init`
2.  **Aceternity UI** (`https://ui.aceternity.com/`):
    -   Use for "Hero" sections, "Bento Grids" for projects, "Infinite Moving Cards" for testimonials, and "3D Cards".
3.  **Magic UI** (`https://magicui.design/`):
    -   Use for "Marquee" (Skills), "Icon Cloud", "Text Reveal" effects, and "Animated Lists".
4.  **React Bits** (`https://www.reactbits.dev/`):
    -   Use for unique creative UI elements and micro-interactions.
    https://www.heroui.com/docs/components
5.  **Hero UI** (`https://www.heroui.com/`):
    -   Use for additional Hero sections and Call-to-Actions.
https://animate-ui.com/docs/components
https://lightswind.com/components


## Design Guidelines
-   **Theme**: Modern, clean, likely Dark Mode by default (or toggleable).
-   **Typography**: Clean sans-serif fonts (e.g., Inter, Geist Sans).
-   **Layout**: Responsive, mobile-first.
    -   **Global Layout**: The `Navbar` and `Footer` must be placed in `src/app/layout.tsx` to ensure persistence across all pages (Multi-page architecture).
    -   **Container**: Use a consistent max-width container (e.g., `max-w-7xl`) for main content to ensure readability on large screens.
-   **Visuals**: High usage of subtle animations, gradients, and glassmorphism.
-   **Design System**:
    -   Define primary and secondary colors in `globals.css` or Tailwind config.
    -   Use CSS variables for theme colors to allow easy switching.

## Planned Sections (Based on Reference)
1.  **Hero Section**:
    -   Headline: "Hello, I'm [Name]"
    -   Subheadline: "Full Stack Developer" / Value Proposition.
    -   Visual: Spotlight effect or Aurora background (Aceternity/Magic UI).
    -   CTA: "Let's Connect" / "View Work".
2.  **About Section**:
    -   Brief bio.
    -   Mention remote work flexibility and time zones.
3.  **Skills / Tech Stack**:
    -   Visual: Infinite Marquee or Icon Cloud (Magic UI).
    -   Categories: Frontend, Backend, DevOps, Tools.
4.  **Services**:
    -   Cards detailing services (e.g., System Architecture, UI Design).
    -   Visual: Hover effects (Aceternity UI Hover Border Gradient).
5.  **Projects / Case Studies**:
    -   Layout: Bento Grid (Aceternity UI).
    -   Content: Title, Description, Tech Stack, Links (Live/Repo).
6.  **Testimonials**:
    -   Visual: Infinite Moving Cards (Aceternity UI).
7.  **Contact**:
    -   Simple form (Shadcn UI).
    -   Social links.
8.  **Footer**:
    -   Navigation links.
    -   Copyright.
    -   Social Icons.

## Workflow
-   Always check `copilot-instructions.md` for context.
-   **Multi-page Approach**: Build components assuming they might be used on separate pages, but keep the main landing page as a scrollable overview if desired, while allowing deep links.
-   When adding components from Aceternity/Magic UI, ensure `framer-motion` and `clsx`/`tailwind-merge` are installed.
-   Follow the "add component" instructions from the respective library docs (usually involves copying code to `components/ui`).
