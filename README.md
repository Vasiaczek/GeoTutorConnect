# GeoTutorConnect / Wasiak Tutoring

This is the codebase behind **Wasiak Tutoring**, a personal tutoring website for Stanisław Wasiak, an IB graduate who scored 7/7 in Geography HL and now helps other IB students do the same.

The site is built to do one thing well: turn a curious student into a booked session. Visitors can read about the services, see what past students have said, learn about Stanisław's background, and send a booking request, all from a single scrollable page.

---

## What the site looks like

The homepage is a full-screen single-page layout with five sections:

1. **Hero** - a headline and a call-to-action to scroll down
2. **Services** - three clickable cards, each leading to a booking form
3. **Consultation** - student testimonials + a prompt to book a free 30-minute intro call
4. **About** - Stanisław's background, IB results, and tutoring history
5. **Contact** - a simple form to send a message directly

The color scheme is deliberately minimal: dark navy (`#253551`) and off-white (`#e0e0db`).

**Routes:**
| Path | What's there |
|------|-------------|
| `/` | The main landing page |
| `/book?service=<id>` | The booking form for a specific service |
| `*` | 404 page |

---

## Project structure

```
GeoTutorConnect/
├── client/                        # Everything the browser sees
│   ├── index.html
│   ├── public/                    # Static files (favicon, logo)
│   └── src/
│       ├── main.tsx               # React entry point
│       ├── App.tsx                # Routes
│       ├── index.css              # Global styles
│       ├── components/
│       │   ├── Navigation.tsx     # Top nav bar
│       │   ├── HeroSection.tsx    # First thing you see
│       │   ├── ServicesSection.tsx# The three service cards
│       │   ├── ConsultationSection.tsx # Testimonials + free consult CTA
│       │   ├── AboutSection.tsx   # Tutor bio
│       │   ├── ContactSection.tsx # Contact form
│       │   └── ui/                # shadcn/ui primitives (don't edit directly)
│       ├── pages/
│       │   ├── Home.tsx           # Assembles the landing page sections
│       │   ├── ServiceBooking.tsx # Booking form page
│       │   └── not-found.tsx      # 404
│       ├── hooks/
│       │   ├── use-toast.ts
│       │   └── use-mobile.tsx
│       └── lib/
│           ├── queryClient.ts     # TanStack Query setup
│           ├── web3forms.ts       # Sends booking emails via Web3Forms
│           └── utils.ts
│
├── server/                        # The Express backend
│   ├── app.ts                     # App setup and middleware
│   ├── routes.ts                  # API routes (currently just POST /api/contact)
│   ├── storage.ts                 # In-memory data store
│   ├── index-dev.ts               # Dev entry point
│   └── index-prod.ts              # Production entry point
│
├── shared/                        # Types shared between client and server
│   └── schema.ts                  # Drizzle table definitions + Zod schemas
│
├── attached_assets/               # Images used in the UI
│   └── generated_images/
│       ├── geography_tutoring_hero_image.jfif
│       └── geography_tutor_professional_headshot.jpg
│
├── package.json
├── tsconfig.json
├── vite.config.ts                 # Path aliases: @ -> client/src, @shared, @assets
├── tailwind.config.ts
├── drizzle.config.ts              # Needs DATABASE_URL to run
└── components.json                # shadcn/ui config
```

---

## Tech stack

| | |
|--|--|
| Frontend | React 18, Vite 5 |
| Styling | Tailwind CSS + shadcn/ui (Radix UI) |
| Animations | Framer Motion |
| Routing | wouter |
| Forms | React Hook Form + Zod |
| Server state | TanStack Query |
| Backend | Express 4 (TypeScript) |
| ORM | Drizzle ORM (PostgreSQL) |
| Email delivery | Web3Forms API |
| Runtime | Node.js 20 |

---

## Services

Three services, all at €25/hour:

| ID | Name |
|----|------|
| `exam-preparation` | Exam Preparation |
| `one-on-one` | Help Writing the IA/EE |
| `skill-development` | Syllabus Practice |

---

## Running it locally

### Prerequisites

- **Node.js 20+** (check your version with `node -v`)
- **npm** (comes with Node, check with `npm -v`)
- No database required for basic local dev; the app uses in-memory storage by default

### First-time setup

Clone the repo and install dependencies:

```bash
git clone <repo-url>
cd GeoTutorConnect
npm install
```

### Development

```bash
npm run dev
```

This starts the Express server and Vite dev server together, both served from a single port. Open `http://localhost:5000` in your browser. Hot module replacement (HMR) is enabled, so changes to React components reflect instantly without a full reload.

You can change the port by setting a `PORT` environment variable:

```bash
PORT=3000 npm run dev
```

### Production build

```bash
npm run build   # Compiles the React app with Vite + bundles the server with esbuild
npm start       # Runs the compiled output from dist/
```

After building, the client lands in `dist/public/` and the server bundle is at `dist/index.js`.

### Type checking

```bash
npm run check
```

Runs `tsc` across the whole project. Worth running before committing to catch any type errors.

### Optional: PostgreSQL database

By default the app stores contact form submissions in memory and they will be lost on restart. To persist them:

1. Provision a PostgreSQL database and grab the connection URL.
2. Set the environment variable:
   ```bash
   export DATABASE_URL=postgresql://user:password@host:5432/dbname
   ```
3. Push the schema:
   ```bash
   npm run db:push
   ```
4. Update `server/storage.ts` to use the Drizzle PostgreSQL adapter instead of `MemStorage`.

---

## API

Only one endpoint at the moment:

| Method | Path | What it does |
|--------|------|-------------|
| `POST` | `/api/contact` | Saves a contact/booking form submission |

The request body is validated against `insertContactSubmissionSchema` in [`shared/schema.ts`](shared/schema.ts).

---

## Environment variables

| Variable | When you need it |
|----------|-----------------|
| `DATABASE_URL` | Only if using `db:push` or swapping in a real database |
| `NODE_ENV` | Set automatically by the npm scripts |

> **Heads up:** By default, the server stores contact submissions in memory. They will disappear on restart. To persist them, wire up the Drizzle PostgreSQL adapter and replace `MemStorage` in `server/storage.ts`.
