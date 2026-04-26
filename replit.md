# Audi A3 8V VCDS Reference

## Overview

A comprehensive VCDS (VAG-COM Diagnostic System) reference application for the 2018 Audi A3 8V MQB platform. The app provides an interactive reference for VCDS coding, adaptations, fault codes, security codes, and module documentation.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Frontend**: React + Vite (artifacts/vcds-reference)
- **API framework**: Express 5 (artifacts/api-server)
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Features

- Dashboard with stats (17 modules, 118 fault codes, 26 security codes, 44 warning lights)
- Module detail pages with VCDS coding, adaptations, and live data
- Fault code reference browser
- Warning lights diagnostic guide
- Security codes reference
- VCDS setup guide

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

## Project Structure

- `artifacts/vcds-reference/` — Main VCDS Reference React app (frontend)
- `artifacts/api-server/` — Express API server
- `artifacts/mockup-sandbox/` — UI prototyping sandbox
- `attached_assets/` — VCDS manual DOCX source documents
- `lib/` — Shared TypeScript libraries (API client, Zod schemas, DB)
- `scripts/` — Utility scripts

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
