import { defineTool } from "@lovable.dev/mcp-js";
import { mcpBooks } from "../content";

export default defineTool({
  name: "list_novels",
  title: "List novels",
  description:
    "List Jiang's serialized novels with status, genre, synopsis and the reading platform (番茄小说 / 七猫小说). Reading URLs are null when not yet published on the site.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text" as const, text: JSON.stringify(mcpBooks, null, 2) }],
    structuredContent: { novels: mcpBooks },
  }),
});