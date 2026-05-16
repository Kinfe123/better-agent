import { defineDocs } from "@farming-labs/docs";
import { colorful } from "@farming-labs/theme/colorful";

export default defineDocs({
  entry: "docs",
  theme: colorful(),
  ordering: [
    {
      "slug": "get-started",
      "children": [
        {
          "slug": "installation"
        },
        {
          "slug": "introduction"
        },
        {
          "slug": "llms-txt"
        },
        {
          "slug": "usage"
        }
      ]
    },
    {
      "slug": "concepts",
      "children": [
        {
          "slug": "agent"
        },
        {
          "slug": "api"
        },
        {
          "slug": "cli"
        },
        {
          "slug": "client"
        },
        {
          "slug": "errors"
        },
        {
          "slug": "events"
        },
        {
          "slug": "hil"
        },
        {
          "slug": "mcp"
        },
        {
          "slug": "persistence"
        },
        {
          "slug": "plugins"
        },
        {
          "slug": "providers"
        },
        {
          "slug": "structured-output"
        },
        {
          "slug": "tools"
        },
        {
          "slug": "typescript"
        }
      ]
    },
    {
      "slug": "integrations",
      "children": [
        {
          "slug": "backend",
          "children": [
            {
              "slug": "elysia"
            },
            {
              "slug": "express"
            },
            {
              "slug": "fastify"
            },
            {
              "slug": "hono"
            },
            {
              "slug": "nestjs"
            }
          ]
        },
        {
          "slug": "full-stack",
          "children": [
            {
              "slug": "astro"
            },
            {
              "slug": "nextjs"
            },
            {
              "slug": "nuxt"
            },
            {
              "slug": "remix"
            },
            {
              "slug": "solidstart"
            },
            {
              "slug": "sveltekit"
            },
            {
              "slug": "tanstack-start"
            }
          ]
        }
      ]
    },
    {
      "slug": "plugins",
      "children": [
        {
          "slug": "auth"
        },
        {
          "slug": "ip-allowlist"
        },
        {
          "slug": "logging"
        },
        {
          "slug": "rate-limit"
        },
        {
          "slug": "sandbox"
        }
      ]
    },
    {
      "slug": "providers",
      "children": [
        {
          "slug": "anthropic"
        },
        {
          "slug": "openai"
        },
        {
          "slug": "xai"
        }
      ]
    }
  ],
  metadata: {
    titleTemplate: "%s – Docs",
    description: "Managed by @farming-labs/docs Cloud",
  },
});
