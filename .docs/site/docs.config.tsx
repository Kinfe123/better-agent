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
          "slug": "client"
        },
        {
          "slug": "typescript"
        },
        {
          "slug": "tools"
        },
        {
          "slug": "events"
        },
        {
          "slug": "providers"
        },
        {
          "slug": "structured-output"
        },
        {
          "slug": "persistence"
        },
        {
          "slug": "plugins"
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
          "slug": "cli"
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
