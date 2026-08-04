/**
 * Plain-text mirror of the public site content for the MCP server.
 *
 * Kept free of image imports and env reads so it stays import-safe inside the
 * Deno edge function bundle. Update alongside `src/data/site.ts`.
 */

export interface McpBook {
  title: string;
  status: string;
  genre: string;
  tagline: string;
  synopsis: string;
  platforms: { platform: string; url: string | null }[];
}

export const mcpBooks: McpBook[] = [
  {
    title: "重生断亲后，假千金全家悔疯了",
    status: "连载中",
    genre: "现代都市 · 重生 · 真假千金 · 断亲逆袭",
    tagline: "她把所有算计原路退回，把亲情这本账，一笔一笔清算。",
    synopsis:
      "重活一世，她不再是那个被豪门收养、努力讨好的乖顺假千金。撕破温情表象，她主动断亲，走出金丝笼；曾经辜负她、算计她的家族，从疑惑到崩溃，一步一步悔到发疯。都市豪门、家族棋局、职场翻身、感情克制——所有人都会看清：她值得的，从来不是残羹冷炙。",
    platforms: [{ platform: "番茄小说", url: null }],
  },
  {
    title: "皇兄送我去和亲，我扶战损质子破局",
    status: "连载中",
    genre: "古言 · 和亲 · 权谋 · 战损质子 · 乱世破局",
    tagline: "他被弃于风雪，她被送入敌国，两个残局，合成一盘活棋。",
    synopsis:
      "皇兄一道诏书，把她送去和亲，塞外风雪迎接她的，是一个满身战伤、被本国抛弃的年轻质子。她本应认命，他本应赴死；她偏要看看，两个被弃子的人，能不能在敌国的棋盘上，为自己扳回一局。宫阙、边塞、旌旗、暗涌——权谋徐徐展开，锋芒藏于袖间。",
    platforms: [{ platform: "七猫小说", url: null }],
  },
];

export interface McpPhoto {
  src: string;
  alt: string;
  meta: string;
  width: number;
  height: number;
}

export const mcpPhotos: McpPhoto[] = [
  {
    src: "/images/photography/vivo-3.webp",
    alt: "开阔的城市远景，天空占据画面上部",
    meta: "City · Skyline",
    width: 598,
    height: 384,
  },
  {
    src: "/images/photography/vivo-2.webp",
    alt: "竖幅光影记录",
    meta: "Light · Frame",
    width: 597,
    height: 883,
  },
  {
    src: "/images/photography/vivo-6.webp",
    alt: "竖幅街巷光影",
    meta: "Street · Light",
    width: 597,
    height: 881,
  },
  {
    src: "/images/photography/vivo-5.webp",
    alt: "竖幅生活切片",
    meta: "Life · Slice",
    width: 600,
    height: 886,
  },
  {
    src: "/images/photography/vivo-1.webp",
    alt: "横幅景观记录",
    meta: "Scene · Wide",
    width: 599,
    height: 516,
  },
  {
    src: "/images/photography/vivo-4.webp",
    alt: "横幅光影切片",
    meta: "Light · Wide",
    width: 598,
    height: 513,
  },
];

export const mcpSite = {
  name: "Jiang",
  headline: "Jiang 的创作世界",
  subline: "小说创作与风景摄影",
  url: "https://genesis-glow-verse.lovable.app",
  vivoGalleryUrl:
    "https://gallery.vivo.com.cn/galleryh5static/index.html?#/user/661532516758",
  about: [
    "我是 Jiang，一个喜欢在文字里造世界、在光影里记远方的普通创作者。",
    "白天写小说，把脑子里翻涌的重生、权谋、都市与古代故事一点点落成章节，目前在番茄小说和七猫小说各有一部作品在连载。",
    "闲下来的时候，我会背着相机走走停停，把夜色里的城市、江南的水与远方山川，安静地收进画面。",
  ],
};