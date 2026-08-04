import { defineMcp } from "@lovable.dev/mcp-js";
import getProfileTool from "./tools/get-profile";
import listNovelsTool from "./tools/list-novels";
import listPhotographyTool from "./tools/list-photography";

export default defineMcp({
  name: "jiang-portfolio-mcp",
  title: "Jiang 的创作世界 MCP",
  version: "0.1.0",
  instructions:
    "Public read-only tools for Jiang's creative portfolio (novels + landscape photography). Use `get_profile` for the creator introduction, `list_novels` for the serialized novels on 番茄小说 / 七猫小说, and `list_photography` for the published photo set. All data mirrors the public website; there is no private or per-user data here.",
  tools: [getProfileTool, listNovelsTool, listPhotographyTool],
});