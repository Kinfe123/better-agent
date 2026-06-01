# Docs Maintenance Guide
Use this file as the handoff checklist for future edits to this documentation PR.
## Source Layout
- The docs source lives in `apps/docs`.
- `docs.json` is the Docs Cloud configuration for publishing, previews, and content roots.
- Keep every page grounded in README content, package metadata, source exports, CLI help, environment examples, or existing docs.
## Docs Routes
- /docs - Introduction
- /docs/installation - Installation
- /docs/quickstart - Quickstart
- /docs/get-started - Get Started
- /docs/get-started/introduction - Introduction
- /docs/get-started/installation - Installation
- /docs/get-started/usage - Usage
- /docs/concepts - Concepts
- /docs/concepts/agent - Agent
- /docs/concepts/api - API
- /docs/concepts/cli - CLI
- /docs/concepts/client - Client
- /docs/concepts/tools - Tools
- /docs/concepts/providers - Providers
- /docs/concepts/events - Events
- /docs/concepts/persistence - Persistence
- /docs/concepts/structured-output - Structured Output
- /docs/concepts/hil - Human in the Loop
- /docs/concepts/mcp - MCP
- /docs/concepts/plugins - Plugins
- /docs/concepts/errors - Errors
- /docs/concepts/typescript - TypeScript
- /docs/plugins - Plugins
- /docs/plugins/auth - Auth
## Editing Guidelines
- Prefer reader-facing setup, usage, and troubleshooting notes over source inventories.
- Do not add commands, flags, environment variables, routes, imports, or framework names unless they are present in the repository.
- If you add or rename a page, keep its frontmatter title and description accurate and make sure the navigation ordering still includes it.
- Avoid analyzer language such as generated from, source evidence, implementation map, source surface, or detected in files.
## Verification
- Build the docs site with `cd apps/docs && node ./scripts/docs-cloud-vercel.mjs install && node ./scripts/docs-cloud-vercel.mjs build` before handing off a docs PR.
- Open `/docs` and at least one generated leaf page to confirm the sidebar and page content match the PR.
