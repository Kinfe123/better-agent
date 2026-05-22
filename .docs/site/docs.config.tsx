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
          "slug": "providers"
        },
        {
          "slug": "typescript"
        }
      ]
    }
  ],
  metadata: {
    titleTemplate: "%s – Docs",
    description: "Managed by @farming-labs/docs Cloud",
  },
});
