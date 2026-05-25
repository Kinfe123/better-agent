import { defineDocs } from "@farming-labs/docs";
import { colorful } from "@farming-labs/theme/colorful";

export default defineDocs({
  entry: "docs",
  theme: colorful(),
  ordering: [
    {
      "slug": "quickstart"
    },
    {
      "slug": "installation"
    },
    {
      "slug": "get-started",
      "children": [
        {
          "slug": "introduction"
        },
        {
          "slug": "installation"
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
          "slug": "providers"
        },
        {
          "slug": "tools"
        },
        {
          "slug": "events"
        },
        {
          "slug": "persistence"
        },
        {
          "slug": "plugins"
        },
        {
          "slug": "structured-output"
        },
        {
          "slug": "hil"
        },
        {
          "slug": "mcp"
        },
        {
          "slug": "errors"
        },
        {
          "slug": "typescript"
        }
      ]
    },
    {
      "slug": "plugins",
      "children": [
        {
          "slug": "auth"
        }
      ]
    }
  ],
  metadata: {
    titleTemplate: "%s – Docs",
    description: "Managed by @farming-labs/docs Cloud",
  },
});
