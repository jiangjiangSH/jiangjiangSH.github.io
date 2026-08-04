import { defineTool } from "@lovable.dev/mcp-js";
import { mcpPhotos, mcpSite } from "../content";

export default defineTool({
  name: "list_photography",
  title: "List photography",
  description:
    "List Jiang's published landscape/city photography shown on the site, with image paths, neutral descriptions and pixel dimensions.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const photos = mcpPhotos.map((p) => ({ ...p, url: mcpSite.url + p.src }));
    return {
      content: [
        {
          type: "text" as const,
          text: JSON.stringify({ photos, fullGallery: mcpSite.vivoGalleryUrl }, null, 2),
        },
      ],
      structuredContent: { photos, fullGallery: mcpSite.vivoGalleryUrl },
    };
  },
});