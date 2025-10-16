---
date: 2025-10-16T19:15:00+02:00
researcher: Cascade AI
git_commit: 3b39838ad202b53047dbacabded98dcc69d22946
branch: quotes
repository: arabello.github.io
topic: "How the Application and Codebase Works - High-Level Overview"
tags: [research, codebase, architecture, react-router, personal-website]
status: complete
last_updated: 2025-10-16
last_updated_by: Cascade AI
---

# Research: How the Application and Codebase Works - High-Level Overview

**Date**: 2025-10-16T19:15:00+02:00
**Researcher**: Cascade AI
**Git Commit**: 3b39838ad202b53047dbacabded98dcc69d22946
**Branch**: quotes
**Repository**: arabello.github.io

## Research Question

How does the application and codebase work at a high level? What are the key architectural patterns, technologies, and organizational conventions?

## Summary

This is a personal portfolio website for Matteo Pellegrino (Software Engineer) built with **React Router v7** (SSG/static site), **TypeScript**, **TailwindCSS**, and **shadcn/ui** components. The site is statically generated and deployed to GitHub Pages via GitHub Actions. The architecture follows a simple, file-based routing pattern with JSON data files for content, prerendered routes for SEO, and a focus on responsive design and maintainability.

## Detailed Findings

### Technology Stack

**Framework & Build Tools:**

- **React Router v7** (`react-router.config.ts:4-7`) - Configured for SSR disabled (static site generation)
- **React 18.3.1** with TypeScript 5.8.3
- **Vite 6.3.3** (`vite.config.ts`) - Build tool with plugins for TailwindCSS and React Router
- **pnpm** - Package manager (evidenced by `pnpm-lock.yaml`)

**Styling & UI:**

- **TailwindCSS v4** (`@tailwindcss/vite` plugin)
- **shadcn/ui components** (Radix UI primitives with custom styling)
- **Lucide React** for icons
- **class-variance-authority** for variant-based component APIs

**Deployment:**

- **GitHub Pages** via GitHub Actions (`.github/workflows/deploy.yml`)
- Custom domain: `www.matteopellegrino.dev`
- Build output: `./build/client`

### Application Architecture

#### 1. Routing System

**File-based routing configuration** (`app/routes.ts:3-8`):

```typescript
export default [
  index("./home.tsx"), // Home page (/)
  route("/books", "./books/books.tsx"), // Books list
  route("/posts/:slug", "./posts/post.tsx"), // Dynamic post pages
  route("/ai-news", "./ai-news/ai-news.tsx"), // AI News viewer
] satisfies RouteConfig;
```

**Prerendering** (`react-router.config.ts:5-7`):

- Routes are prerendered at build time: `["/", "/books", "/posts/ts-gadt", "/ai-news"]`
- This creates static HTML files for SEO and performance
- SSR is disabled, making this a pure static site

#### 2. Layout & Root Structure

**Root Layout** (`app/root.tsx:43-83`):

- Provides global HTML structure with `<Layout>` component
- Includes SEO meta tags, Open Graph, Twitter cards
- Schema.org structured data for Person entity
- Global CSS (`app.css`)
- Google Fonts (Inter) preconnected and loaded
- Consistent footer with copyright
- Error boundary for 404 and error handling

**Layout pattern:**

```
<html>
  <head>
    - Meta tags
    - Links (fonts, etc.)
    - Structured data (JSON-LD)
  </head>
  <body>
    <main> (max-w-3xl, centered)
      {children} (page content via <Outlet />)
    </main>
    <footer> (copyright)
    </footer>
  </body>
</html>
```

#### 3. Page Structure Patterns

**Three main page patterns:**

**A. Home Page** (`app/home.tsx`):

- Navigation buttons (Books, AI News, Resume PDF)
- Personal intro section
- Posts list (from `posts.json`, sorted by date)
- Old Projects showcase (hardcoded array in loader)
- Social links (GitHub, LinkedIn, Email)

**B. Content List Pages** (`app/books/books.tsx`, `app/ai-news/ai-news.tsx`):

- Back to home button
- Page title and introduction
- Content from JSON data files:
  - `books/books.json` - Books with optional ISBN for covers
  - `ai-news/ai-news.json` - LinkedIn video URLs
- Responsive layouts (grid or interactive UI)

**C. Dynamic Content Pages** (`app/posts/post.tsx`):

- Slug-based routing (`/posts/:slug`)
- Metadata from `posts.json` (title, date, description, URL or htmlPath)
- HTML content loaded from `public/content/` directory
- Client-side HTML enhancement with TailwindCSS classes
- Responsive typography and code blocks

#### 4. Data Management

**JSON-based content files** (all static, imported at build time):

- `app/posts/posts.json` - Blog post metadata
- `app/books/books.json` - Reading list
- `app/ai-news/ai-news.json` - AI news video links
- `app/quotes/quotes.json` - Quote collection (new feature in progress)

**External data fetching:**

- Book covers from OpenLibrary API (`books.tsx:8-24`)
- Static HTML files from `public/content/` directory

#### 5. Component Architecture

**UI Components** (`app/components/ui/`):

- **shadcn/ui pattern**: Radix UI primitives + TailwindCSS + CVA variants
- Button, Card, Badge, Separator, Navigation Menu, etc.
- Custom typography components: `H1.tsx`, `H2.tsx`
- Composable with `asChild` prop (Radix Slot pattern)

**Example Button API** (`app/components/ui/button.tsx:7-36`):

```typescript
buttonVariants = cva(baseStyles, {
  variants: {
    variant: { default, destructive, outline, secondary, ghost, link },
    size: { default, sm, lg, icon }
  }
})
```

**Utility functions:**

- `lib/utils.ts` - `cn()` for className merging (clsx + tailwind-merge)

#### 6. TypeScript Configuration

**Path aliases** (`tsconfig.json:17-19`):

```json
"paths": { "~/*": ["./app/*"] }
```

- Allows importing with `~/components/ui/button` instead of relative paths

**Strict TypeScript:**

- `strict: true`
- Type-safe route parameters via `Route.ComponentProps` and `Route.LoaderArgs`
- Generated types in `.react-router/types/` directory

### Key Architectural Patterns

**1. Static Site Generation (SSG):**

- All routes prerendered at build time
- No server-side runtime
- Content from JSON files and static HTML

**2. File Collocation:**

- Route components live in feature directories (`books/`, `ai-news/`, `posts/`)
- Data files colocated with their route components
- Clear separation of concerns by feature

**3. Responsive Design:**

- Mobile-first TailwindCSS approach
- Breakpoints: `sm:`, `md:`, `lg:` used consistently
- Touch-friendly minimum heights (`min-h-[44px]`)

**4. Component Composition:**

- Radix UI primitives for accessibility
- CVA for variant management
- Slot pattern for polymorphic components

**5. Content Enhancement:**

- Post HTML enhanced client-side with TailwindCSS classes
- Book covers fetched at build time and base64-encoded
- Progressive enhancement approach

### Directory Structure

```
app/
├── components/
│   └── ui/           # shadcn/ui components
├── lib/
│   └── utils.ts      # Utility functions
├── [feature]/        # Feature directories (books, ai-news, posts, quotes)
│   ├── [feature].tsx # Route component
│   └── [feature].json # Data file
├── root.tsx          # Root layout
├── routes.ts         # Route configuration
├── home.tsx          # Home page
└── app.css           # Global styles

public/
├── assets/           # Static assets (resume PDF)
└── content/          # HTML content files

.windsurf/
├── workflows/        # Development workflows
│   ├── implement.md  # Implementation workflow
│   ├── plan.md       # Planning workflow
│   └── research.md   # Research workflow
└── local/
    └── tasks/        # Task descriptions
```

### Build & Deployment Flow

**Development:**

```bash
pnpm dev              # Start dev server (react-router dev)
pnpm typecheck        # Type checking
pnpm format           # Prettier formatting
```

**Production Build:**

1. `pnpm build` runs `react-router build`
2. Routes prerendered to static HTML
3. Output in `./build/client/`

**Deployment** (`.github/workflows/deploy.yml:1-39`):

1. Trigger: Push to `main` or `master` branch
2. Setup: pnpm latest + Node LTS
3. Build: `pnpm install && pnpm build`
4. Deploy: `./build/client` to GitHub Pages
5. Custom domain: `www.matteopellegrino.dev`

### Code References

**Core Files:**

- `app/root.tsx:1-117` - Root layout and error boundaries
- `app/routes.ts:1-9` - Route configuration
- `app/home.tsx:1-225` - Home page with navigation
- `react-router.config.ts:1-9` - React Router configuration
- `vite.config.ts:1-9` - Vite build configuration
- `package.json:1-44` - Dependencies and scripts

**Example Routes:**

- `app/books/books.tsx:1-127` - Books list with OpenLibrary covers
- `app/ai-news/ai-news.tsx:1-79` - AI News video carousel
- `app/posts/post.tsx:1-171` - Dynamic post renderer

**Components:**

- `app/components/ui/button.tsx:1-60` - Button component with CVA variants
- `app/components/ui/card.tsx` - Card component family
- `app/lib/utils.ts` - Utility functions

**Deployment:**

- `.github/workflows/deploy.yml:1-39` - GitHub Actions workflow

### Architecture Insights

**Design Principles:**

1. **Simplicity First** - No unnecessary complexity, static generation over server runtime
2. **Content as Data** - JSON files for structured content, HTML for rich content
3. **Type Safety** - Strict TypeScript throughout
4. **Responsive by Default** - Mobile-first design with clear breakpoints
5. **SEO Optimized** - Prerendering, meta tags, structured data
6. **Developer Experience** - Fast builds, type safety, clear conventions

**Conventions:**

- Feature folders contain route + data
- shadcn/ui components for consistency
- `~/` path alias for app imports
- Mobile-first responsive classes
- Loaders for data fetching at build time
- Back to home button on all sub-pages

**Performance Optimizations:**

- Static site generation (no server runtime)
- Preconnected fonts
- Lazy-loaded images with `loading="lazy"`
- Base64-encoded book covers (fetched once at build)
- Minimal JavaScript bundle

### Historical Context (from .windsurf/)

**Workflows** (`.windsurf/workflows/`):

- `/implement` - Structured implementation planning process
- `/plan` - Plan execution with phase-based approach
- `/research` - Codebase research methodology

**Current Task** (`.windsurf/local/tasks/2025-10-16-quotes.md`):

- Adding a new `/quotes` route
- Following the pattern of `/books` route
- Quotes data already prepared in `app/quotes/quotes.json`
- Simple, personality-focused design

**Recent Activity** (git log):

- `3b39838` - "chore: setup-spec-driven-development"
- Recent features: AI News, mobile responsiveness, resume update
- Consistent evolution toward content-rich personal portfolio

### Open Questions

**None** - The architecture is straightforward and well-documented through code.

## Related Research

This is the first architecture research document for this repository.

## Follow-up Recommendations

1. **Testing**: Consider adding unit tests for component logic and integration tests for routes
2. **Performance Monitoring**: Add analytics to track page performance and user engagement
3. **Content Management**: As content grows, consider a headless CMS for easier editing
4. **Build Optimization**: Monitor bundle size as features are added
5. **Accessibility**: Audit with tools like Lighthouse and axe DevTools
