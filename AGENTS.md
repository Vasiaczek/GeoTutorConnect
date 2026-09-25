# AGENTS.md — AI Agent Context for GeoTutorConnect

This file provides structured context for AI coding agents working on this repository.

---

## Project Overview

**GeoTutorConnect** is the codebase for **Wasiak Tutoring**, a professional website for Stanisław Wasiak — an IB Geography tutor. The site is a marketing + booking platform for IB students seeking Geography tutoring.

- **Business context:** Solo tutoring service, 1 tutor, €25/hour, international student base (NL, ES, SE, PL, CH)
- **Key user actions:** Browse services → book a consultation → submit a contact form
- **Brand colors:** Dark navy `#253551` and off-white `#e0e0db`

---

## Architecture

This is a **full-stack TypeScript monorepo** with a clear three-layer separation:

```
client/   ← React SPA (Vite, Tailwind, shadcn/ui)
server/   ← Express REST API (TypeScript, tsx / esbuild)
shared/   ← Drizzle ORM schemas + Zod validators (used by both)
```

### Path Aliases (Vite + TypeScript)
| Alias | Resolves to |
|-------|-------------|
| `@` | `client/src/` |
| `@shared` | `shared/` |
| `@assets` | `attached_assets/` |

Always use these aliases when importing across layers. Never use relative paths like `../../shared`.

---

## Key Files

| File | Purpose |
|------|---------|
| [`client/src/App.tsx`](client/src/App.tsx) | Router — two routes: `/` (Home) and `/book` (ServiceBooking) |
| [`client/src/pages/Home.tsx`](client/src/pages/Home.tsx) | Composes all landing page sections in order |
| [`client/src/pages/ServiceBooking.tsx`](client/src/pages/ServiceBooking.tsx) | Booking form — reads `?service=` query param, submits via Web3Forms |
| [`client/src/components/Navigation.tsx`](client/src/components/Navigation.tsx) | Fixed top nav with smooth-scroll anchors |
| [`client/src/components/HeroSection.tsx`](client/src/components/HeroSection.tsx) | Section `#hero` — headline + hero image |
| [`client/src/components/ServicesSection.tsx`](client/src/components/ServicesSection.tsx) | Section `#services` — 3 service cards, clicking navigates to `/book?service=<id>` |
| [`client/src/components/ConsultationSection.tsx`](client/src/components/ConsultationSection.tsx) | Section `#consultation` — testimonials + free consultation CTA |
| [`client/src/components/AboutSection.tsx`](client/src/components/AboutSection.tsx) | Section `#about` — tutor bio + credential badges |
| [`client/src/components/ContactSection.tsx`](client/src/components/ContactSection.tsx) | Section `#contact` — inline contact form |
| [`shared/schema.ts`](shared/schema.ts) | Drizzle table definitions + Zod schemas for `users` and `contact_submissions` |
| [`server/routes.ts`](server/routes.ts) | Express routes — currently only `POST /api/contact` |
| [`server/storage.ts`](server/storage.ts) | `IStorage` interface + `MemStorage` in-memory implementation |
| [`server/app.ts`](server/app.ts) | Express app factory with middleware |

---

## Data Model

### `contact_submissions` table ([`shared/schema.ts`](shared/schema.ts))
| Column | Type | Notes |
|--------|------|-------|
| `id` | `varchar` (UUID) | PK, auto-generated |
| `name` | `text` | Required |
| `email` | `text` | Required, validated as email |
| `subject` | `text` | Optional |
| `message` | `text` | Required |
| `service` | `text` | Optional — which service was selected |
| `submitted_at` | `timestamp` | Defaults to `NOW()` |

### `users` table
Basic auth table (not actively used in the current frontend flows).

---

## Form Submission Flow

The site has **two contact form submission paths**:

1. **`ServiceBooking.tsx`** (`/book` page): Uses `submitWeb3Form()` from `client/src/lib/web3forms.ts` — sends email directly via the [Web3Forms](https://web3forms.com/) API. **This does NOT hit the backend.**
2. **`ContactSection.tsx`** (inline on Home): May use the `POST /api/contact` backend endpoint or Web3Forms — check the component's implementation.

> **Important:** The backend `POST /api/contact` endpoint saves to `MemStorage` (in-memory, non-persistent). If you need persistence, wire up the Drizzle PostgreSQL adapter using the `DATABASE_URL` environment variable and replace `MemStorage` with a DB-backed implementation.

---

## Styling Conventions

- **Component library:** [shadcn/ui](https://ui.shadcn.com/) — components live in `client/src/components/ui/`. Do not edit these manually; use `shadcn` CLI to add/update.
- **Tailwind:** Use utility classes. Custom animations are in `tailwind.config.ts`.
- **Inline styles:** Brand colors `#253551` and `#e0e0db` are applied as inline `style` props throughout. Consider centralising these as CSS variables if the palette grows.
- **Section structure:** Each landing page section is a full-screen `<section>` (`h-screen flex items-center`) with an `id` for anchor navigation.

---

## Services

The three tutoring services are hardcoded in `ServicesSection.tsx`:

| `service` ID | Display Name |
|-------------|-------------|
| `exam-preparation` | Exam Preparation |
| `one-on-one` | One-on-One Tutoring / Help writing the IA/EE |
| `skill-development` | Syllabus Practice |

The `ServiceBooking.tsx` page maps these IDs to display names via the `SERVICES` object. If you add a service, update **both** `ServicesSection.tsx` and the `SERVICES` map in `ServiceBooking.tsx`.

---

## Development Commands

```bash
npm run dev        # Start dev server (Express + Vite HMR on port 5000)
npm run build      # Build client (Vite) + bundle server (esbuild) → dist/
npm start          # Run production build
npm run check      # TypeScript type check
npm run db:push    # Push schema changes to PostgreSQL (requires DATABASE_URL)
```

---

## Common Agent Tasks & Tips

### Adding a new page/route
1. Create `client/src/pages/MyPage.tsx`
2. Add a `<Route path="/my-path" component={MyPage} />` in `client/src/App.tsx`

### Adding a new API endpoint
1. Add the route handler in `server/routes.ts`
2. Add any new CRUD methods to `IStorage` in `server/storage.ts` and implement in `MemStorage`
3. Add the corresponding Drizzle schema + Zod validator in `shared/schema.ts`

### Adding a new shadcn/ui component
```bash
npx shadcn@latest add <component-name>
```
Components are added to `client/src/components/ui/`.

### Using shared types in the client
```ts
import { type ContactSubmission } from "@shared/schema";
```

### Fetching data from the API (client)
Use TanStack Query. The `queryClient` is pre-configured in `client/src/lib/queryClient.ts`.

---

## Things to Watch Out For

- **No auth on the API** — `POST /api/contact` has no rate limiting or authentication. Consider adding both before deploying at scale.
- **MemStorage is ephemeral** — all contact submissions are lost on server restart unless a real database is wired up.
- **Replit plugins in vite.config.ts** — `@replit/vite-plugin-cartographer` and `@replit/vite-plugin-dev-banner` are conditionally loaded only when `REPL_ID` is set. They are safe to ignore in local dev.
- **Web3Forms API key** — check `client/src/lib/web3forms.ts` for the API key. This should be stored as an environment variable, not hardcoded.
- **`drizzle.config.ts` throws** if `DATABASE_URL` is not set — do not run `db:push` without a database configured.
