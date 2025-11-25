import { WidgetData } from "@/components/WidgetCard";

export const widgets: WidgetData[] = [
  {
    id: "gorboy-flipper",
    title: "Gorboy Flipper",
    subtitle: "Flagship Widget · GGT Snap",
    description:
      "Live risk snapshot widget for any Gorbagana token. Reads your mint via ?mint= and streams Neon Field snaps from GORBOY GUARD TERMINAL (GGT).",
    status: "live",
    demoUrl: "https://www.ggt.wtf/flipper.html",
    howToEmbed: [
      "Copy the iframe below.",
      "Paste it into your meme website.",
      "Replace YOUR_MINT_HERE with your token mint.",
    ],
    embedCode: `<!-- Gorboy Flipper iframe widget (Gorbagana only) -->
<iframe
  src="https://www.ggt.wtf/flipper.html?mint=YOUR_MINT_HERE"
  style="
    width: 480px;
    max-width: 100%;
    height: 220px;
    border: 0;
    border-radius: 22px;
    overflow: hidden;
    display:block;
    margin:0 auto;
  "
  loading="lazy"
></iframe>`,
  },
  {
    id: "meme-generator",
    title: "Meme Frame Generator",
    subtitle: "Labs Frames",
    description:
      "Create memes inside Gorboy Labs' branded frames. Export clean images ready for X/Telegram.",
    status: "live",
    demoUrl: "https://gorboylabs.vercel.app/meme.html",
    howToEmbed: [
      "Copy the compact iframe below.",
      "Paste into your website / Webflow / Notion / any HTML block.",
    ],
    embedCode: `<!-- Gorboy Meme Generator iframe widget (compact mobile version) -->
<iframe
  src="https://gorboylabs.vercel.app/meme.html"
  style="
    width: 100%;
    max-width: 480px;
    height: 520px;
    border: 0;
    border-radius: 18px;
    overflow: hidden;
    display:block;
    margin:0 auto;
  "
  loading="lazy"
></iframe>`,
  },
  {
    id: "slot-a",
    title: "Next Tool for Meme Founders",
    subtitle: "",
    description: "Next tool for meme founders.",
    status: "coming-soon",
    slot: "Slot A",
  },
  {
    id: "slot-b",
    title: "Reserved Widget",
    subtitle: "",
    description: "Reserved spot for future widget.",
    status: "coming-soon",
    slot: "Slot B",
  },
];
