# Geography Tutoring Website

## Overview

This is a professional geography tutoring website built to connect students with expert tutoring services. The application serves as a marketing and lead generation platform, featuring service offerings, tutor credentials, and a contact form for booking consultations. The site emphasizes credibility, approachable professionalism, and clear conversion pathways from awareness to service booking.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack Query (React Query) for server state
- **Form Handling**: React Hook Form with Zod validation
- **UI Framework**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens

**Design System**:
- Typography: Marcellus font (serif) for elegant, professional aesthetic
- Color Palette: Navy blue (#253551) primary, cream (#e0e0db) secondary
- Full-screen sections with smooth scroll navigation
- Responsive grid layouts (mobile-first approach)
- Component-based architecture with examples directory for development

**Page Structure**:
- Single-page application with smooth scroll sections
- Home page sections: Hero, Services, Consultation, About, Contact
- ServiceBooking page for service-specific inquiries
- 404 Not Found fallback

### Backend Architecture

**Server Framework**: Express.js with TypeScript
- **Development Mode**: Vite middleware integration for HMR
- **Production Mode**: Static file serving from build directory
- **API Structure**: RESTful endpoint design

**Current Endpoints**:
- `POST /api/contact` - Contact form submission handler with validation

**Data Validation**:
- Zod schemas for runtime type checking and validation
- Shared schema definitions between client and server (`@shared/schema`)

### Data Storage

**Current Implementation**: In-memory storage (MemStorage class)
- User management (placeholder for future authentication)
- Contact form submissions storage

**Database Configuration**: PostgreSQL with Drizzle ORM
- Drizzle Kit configured for migrations
- Neon serverless database driver (@neondatabase/serverless)
- Schema defined with type-safe table definitions
- Tables: `users`, `contact_submissions`

**Note**: Application is configured for PostgreSQL but currently uses in-memory storage. Database can be activated by setting DATABASE_URL environment variable and running migrations.

### External Dependencies

**UI Component Libraries**:
- @radix-ui/* - Accessible, unstyled component primitives (accordion, dialog, dropdown, forms, navigation, etc.)
- shadcn/ui - Pre-styled component library built on Radix
- Lucide React - Icon library
- Tailwind CSS - Utility-first CSS framework

**Form & Validation**:
- react-hook-form - Form state management
- @hookform/resolvers - Form validation resolvers
- zod - Schema validation
- drizzle-zod - Zod schema generation from Drizzle tables

**Data Fetching**:
- @tanstack/react-query - Server state management, caching, and synchronization

**Database & ORM**:
- drizzle-orm - TypeScript ORM
- @neondatabase/serverless - PostgreSQL driver for serverless environments
- drizzle-kit - Migration and schema management tools

**Development Tools**:
- Vite - Build tool and dev server
- @vitejs/plugin-react - React Fast Refresh support
- tsx - TypeScript execution engine
- esbuild - JavaScript bundler for production builds
- @replit/vite-plugin-* - Replit-specific development enhancements

**Routing**:
- wouter - Lightweight React router (alternative to React Router)

**Design Assets**:
- Generated images stored in `attached_assets/generated_images/` directory
- Custom fonts loaded via Google Fonts (Marcellus)

**Build & Deployment**:
- Development: `npm run dev` - Runs Vite dev server with Express backend
- Production: `npm run build` - Builds client with Vite, bundles server with esbuild
- Type Checking: `npm run check` - TypeScript compiler validation
- Database: `npm run db:push` - Push schema changes to database