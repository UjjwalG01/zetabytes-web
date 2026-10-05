# CLAUDE.md

Guidance for working in this repository.

## Overview

Marketing site and auth-enabled web app for **Zetabytes Nepal** (landing, about, services, internship, contact pages, plus login/register and a protected area). Package name: `zetabytes-app`.

**Stack:** Next.js 14.1 (App Router) · React 18 · TypeScript (strict) · Tailwind CSS 3 + shadcn/ui (Radix) · Framer Motion · next-themes · react-hook-form + zod · Auth.js (`next-auth` v5 beta) · Prisma 5 + PostgreSQL.

## Commands

```bash
npm run dev     # next dev (http://localhost:3000)
npm run build   # next build
npm start       # next start
npm run lint    # next lint (extends next/core-web-vitals)
npx prisma generate   # regenerate client after editing prisma/schema.prisma
npx prisma db push    # sync schema to the database
```

There is no test suite. Verify changes with `npm run lint` and `npm run build` (type-checks).

## Environment variables (`.env`, git-ignored)

`DATABASE_URL`, `AUTH_SECRET`, `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`.

## Project layout

```
app/
  layout.tsx            Root layout: Montserrat font, ThemeProvider, AnimatedLayout, Toaster
  (landing)/page.tsx    Home page "/", composed of components/home/* sections
  (auth)/               /login, /register (own layout)
  (pages)/(routes)/     Public pages: about, services, internship, contact
  (pages)/(protected)/  dashboard, settings (require login)
  api/auth/[...nextauth]/route.ts   Re-exports GET/POST handlers from auth.ts
actions/                Server actions ("use server"): login.ts, register.ts
components/
  ui/                   shadcn/ui primitives (config in components.json)
  <feature>/            about, auth, contact, header, footer, home, internship, services
data/                   Prisma query helpers (user.ts, verification-token.ts); return null on error
lib/                    db.ts (Prisma singleton), tokens.ts, utils.ts (cn), custom-utils.ts
schemas/index.ts        zod schemas (LoginSchema, RegisterSchema)
prisma/schema.prisma    User, Account, VerificationToken; UserRole enum (USER, ADMIN)
auth.ts / auth.config.ts / middleware.ts / routes.ts   Auth setup (see below)
next-auth.d.ts          Session type augmentation (adds `user.role`)
public/                 Static images
```

Path alias: `@/*` maps to the repo root (e.g. `@/components/ui/button`).

## Authentication architecture

- `auth.config.ts` — providers (GitHub, Google, Credentials). Credentials `authorize` validates with `LoginSchema`, looks up the user, and compares the password with bcrypt.
- `auth.ts` — `NextAuth({...})` with `PrismaAdapter`, **JWT sessions**, and callbacks: `signIn` (credentials users must have `emailVerified`), `jwt` (loads `role` from DB), `session` (copies `id` and `role` to `session.user`). Exports `auth`, `signIn`, `signOut`, `handlers`.
- `middleware.ts` — builds its own `NextAuth(authConfig)` instance; redirects based on `routes.ts`:
  - `publicRoutes` — open to everyone (`/`, `/about`, `/internship`, `/services`, `/contact`, `/faqs`)
  - `authRoutes` — `/login`, `/register`; logged-in users are redirected to `DEFAULT_LOGIN_REDIRECT` (`/settings`)
  - `apiAuthPrefix` — `/api/auth` is always passed through
  - anything else requires login, else redirect to `/login`
- **When adding a new public page, add its path to `publicRoutes` in `routes.ts`**, otherwise middleware redirects anonymous users to `/login`.
- `actions/register.ts` hashes the password, creates the user, and generates a `VerificationToken` (`lib/tokens.ts`). `actions/login.ts` validates, then calls `signIn("credentials")`; unverified users get a new token instead of signing in. Sending the verification email is **not implemented** (TODO), and token verification flow does not exist yet, so credentials users cannot currently become verified.

## Conventions

- Server actions live in `actions/`, start with `"use server"`, validate input with the matching zod schema from `schemas/`, and return `{ error }` or `{ success }` objects.
- Database access goes through `@/lib/db` (`db`); put reusable queries in `data/`.
- Client components need `"use client"`; pages and layouts are server components by default.
- Styling: Tailwind utility classes with shadcn CSS variables (`app/globals.css`, `tailwind.config.ts`); brand colours `main.light` (`#3559e0`) / `main.dark` (`#2d4cbb`); dark mode via the `class` strategy. Use `cn()` from `@/lib/utils` to merge classes.
- Add new shadcn components with `npx shadcn-ui@latest add <name>` (style `default`, base colour `slate`, RSC enabled).
- Code style in existing files: 4-space indentation in auth/actions/lib/data files, 2-space in `app/` and component files; match the file you edit.

## Known quirks / gotchas

- `auth.config.ts` and `actions/register.ts` use `require("bcryptjs")`, but `package.json` depends on `bcrypt` (not `bcryptjs`), and `next.config.mjs` marks `bcrypt` as a webpack external. Install `bcryptjs` or reconcile before relying on credentials auth in a fresh checkout.
- `middleware.ts` runs in the Edge runtime but imports `auth.config.ts`, which imports Prisma-backed helpers and bcrypt; keep this in mind when changing providers or deployment targets.
- `generateVerificationToken` comments say "1 day" but `DURATION` is 1 hour.
- `dashboard/page.tsx` is a placeholder; `settings/page.tsx` (the post-login landing page) dumps the session JSON and has a sign-out button. Both set `export const runtime = "edge"`.
- `/faqs` is listed in `publicRoutes` but no such page exists (FAQs render on the home page).
- `README.md` is the unmodified create-next-app template; `app/layout.tsx` metadata description is still "Generated by create next app".
- `next.config.mjs` adds an `html-loader` webpack rule for `.html` imports.
