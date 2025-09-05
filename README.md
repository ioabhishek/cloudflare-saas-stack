# Cloudflare SaaS Stack

A modern SaaS starter stack leveraging Cloudflare, Next.js, Drizzle ORM, and Turborepo for scalable, full-stack application development.

## Monorepo Structure

- **apps/**
  - `client/`: Next.js frontend app with authentication, middleware, and custom configuration.
  - `server/`: Backend services using Drizzle ORM for database access and schema management.
- **packages/**
  - `eslint-config/`: Shared ESLint configuration for consistent code quality.
  - `tailwind-config/`: Shared Tailwind CSS and PostCSS configuration.
  - `typescript-config/`: Shared TypeScript configuration for all packages and apps.
  - `ui/`: Reusable UI components and styles.

## Key Technologies

- **Next.js**: React framework for SSR and static sites.
- **Cloudflare**: Edge deployment and serverless functions.
- **Drizzle ORM**: Type-safe database access and migrations.
- **Turborepo**: Monorepo management for scalable development.
- **Tailwind CSS**: Utility-first CSS framework.
- **ESLint & Prettier**: Code linting and formatting.

## Getting Started

1. **Install dependencies:**

   ```bash
   bun install
   ```

2. **Development:**

   ```bash
   # Start all apps and packages in dev mode
   bun turbo dev
   ```

3. **Database Migrations:**
   - Migrations are managed via Drizzle ORM in `apps/server/src/db/migrations/`.

4. **Environment Configuration:**
   - Each app/package may have its own config files (e.g., `wrangler.jsonc`, `next.config.ts`).

## Folder Overview

- `apps/client/`: Frontend, authentication, and middleware.
- `apps/server/`: Backend, database schema, and logic.
- `packages/ui/`: Shared UI components.
- `packages/tailwind-config/`: Shared Tailwind/PostCSS config.
- `packages/eslint-config/`: Shared linting rules.
- `packages/typescript-config/`: Shared TypeScript settings.

## Scripts

- `bun turbo dev`: Run all apps in development mode.
- `bun turbo build`: Build all apps and packages.
- `bun turbo lint`: Lint all code.

## Deployment

- Designed for Cloudflare Workers/Pages.
- See `wrangler.jsonc` in each app for deployment configuration.

## License

MIT
