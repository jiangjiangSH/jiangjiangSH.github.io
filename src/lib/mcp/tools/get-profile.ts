import { defineTool } from "@lovable.dev/mcp-js";
import { mcpSite } from "../content";

export default defineTool({
  name: "get_profile",
  title: "Get creator profile",
  description:
    "Get Jiang's creator profile: site headline, self-introduction, site URL and the external vivo photography gallery link.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text" as const, text: JSON.stringify(mcpSite, null, 2) }],
    structuredContent: mcpSite,
  }),
});