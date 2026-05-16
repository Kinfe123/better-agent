# Agent Instructions
Use this file when an AI coding agent edits the generated documentation PR.
## Documentation Source
- The docs source lives in `apps/docs`.
- `docs.json` is the Docs Cloud configuration for publishing, previews, and content roots.
- Keep every page grounded in README, package metadata, source exports, CLI help, environment examples, or existing docs.
## Generated Docs Map
- /docs - create-better-agent
- /docs/get-started - Get Started
- /docs/get-started/installation - Installation
- /docs/get-started/introduction - Introduction
- /docs/get-started/llms-txt - llms.txt
- /docs/get-started/usage - Usage
- /docs/concepts - Concepts
- /docs/concepts/agent - Agent
- /docs/concepts/api - API
- /docs/concepts/cli - CLI
- /docs/concepts/client - Client
- /docs/concepts/errors - Errors
- /docs/concepts/events - Events
- /docs/concepts/hil - Human in the Loop
- /docs/concepts/mcp - MCP
- /docs/concepts/persistence - Persistence
- /docs/concepts/plugins - Plugins
- /docs/concepts/providers - Providers
- /docs/concepts/structured-output - Structured Output
- /docs/concepts/tools - Tools
- /docs/concepts/typescript - TypeScript
- /docs/integrations - Integrations
- /docs/integrations/backend - Backend
- /docs/integrations/full-stack - Full Stack
- 22 more generated pages are present in the docs source.
## Editing Rules
- Prefer reader-facing task explanations over source inventories.
- Do not add commands, flags, environment variables, routes, imports, or framework names unless they are present in the repository.
- If you add or rename a page, keep its frontmatter title and description accurate and make sure the navigation ordering still includes it.
- Avoid analyzer language such as generated from, source evidence, implementation map, source surface, or detected in files.
## Verification
- Build the docs site with `cd apps/docs && pnpm install && pnpm build` before handing off a docs PR.
- Open `/docs` and at least one generated leaf page to confirm the sidebar and page content match the PR.
