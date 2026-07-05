import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { createHash } from "crypto";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const outDir = join(root, "public", "og-images");
const manifestPath = join(root, "public", "og-images", "manifest.json");

const fontBold = readFileSync(join(root, "public", "fonts", "Inter-Bold.ttf"));
const fontRegular = readFileSync(join(root, "public", "fonts", "Inter-Regular.ttf"));

const routeMeta = {
  "/": { title: "ShiggyBot", description: "A modular Discord bot built with C# 13 and .NET 10 using Discord.Net" },
  "/commands": { title: "Commands", description: "All ShiggyBot commands: moderation, utility, search, fun, and core." },
  "/setup": { title: "Setup", description: "Learn how to set up and deploy ShiggyBot on your own server." },
  "/setup/prerequisites": { title: "Prerequisites", description: "System requirements and tools needed to build and run ShiggyBot." },
  "/setup/discord-portal": { title: "Discord Portal", description: "How to create a Discord application and get your bot token." },
  "/setup/building": { title: "Building", description: "Build ShiggyBot from source using the .NET CLI." },
  "/setup/running": { title: "Running", description: "Configure and run ShiggyBot with environment variables or config files." },
  "/setup/publishing": { title: "Publishing", description: "Publish ShiggyBot as a self-contained deployment for production." },
  "/setup/ci-cd": { title: "CI/CD", description: "Continuous integration and deployment pipeline for ShiggyBot." },
  "/configuration": { title: "Configuration", description: "Complete reference for ShiggyBot configuration keys, sources, and permissions." },
  "/configuration/keys": { title: "Keys", description: "All configuration keys that ShiggyBot's BotConfig reads at startup." },
  "/configuration/sources": { title: "Sources", description: "Where ShiggyBot loads its configuration from." },
  "/configuration/permissions": { title: "Permissions", description: "Permission levels and command gating in ShiggyBot." },
  "/architecture": { title: "Architecture", description: "High-level overview of ShiggyBot's modular architecture and design principles." },
  "/architecture/entrypoint": { title: "Entrypoint", description: "How ShiggyBot starts: config loading, service registration, and bot launch." },
  "/architecture/discord-client-service": { title: "Discord Client", description: "The central Discord client orchestrator: lifecycle, events, and connection management." },
  "/architecture/command-system": { title: "Command System", description: "How ShiggyBot's command discovery, dispatch, and permission system works." },
  "/architecture/component-systems": { title: "Components", description: "V1 and V2 component systems: message builders, embeds, buttons, and modals." },
  "/architecture/features": { title: "Features", description: "Optional runtime features: autorole, presence, code previews, and more." },
  "/architecture/services": { title: "Services", description: "Service layer: command handling, plugin management, and GitHub monitoring." },
  "/architecture/database": { title: "Database", description: "SQLite persistence layer: bans, guild settings, and data storage." },
  "/architecture/utilities": { title: "Utilities", description: "Helper utilities: embedding, error handling, formatting, and logging." },
  "/architecture/config-system": { title: "Config System", description: "How BotConfig loads and validates configuration from multiple sources." },
  "/architecture/patterns": { title: "Patterns", description: "Design patterns and conventions used throughout ShiggyBot." },
  "/extending": { title: "Extending", description: "Learn how to extend ShiggyBot with new commands, features, and data services." },
  "/extending/new-command": { title: "New Command", description: "Step-by-step guide to creating a new command for ShiggyBot." },
  "/extending/new-feature": { title: "New Feature", description: "How to create a new runtime feature for ShiggyBot." },
  "/extending/new-data": { title: "New Data", description: "Adding new data services and database entities to ShiggyBot." },
  "/extending/style-guide": { title: "Style Guide", description: "Coding conventions and style guidelines for contributing to ShiggyBot." },
  "/extending/gotchas": { title: "Gotchas", description: "Common pitfalls and gotchas when extending ShiggyBot." },
  "/404": { title: "Page Not Found", description: "The page you're looking for doesn't exist or has been moved." },
};

function slug(route) {
  return route === "/" ? "index" : route.replace(/^\//, "").replace(/\//g, "-");
}

function escapeXml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

function wrapText(text, maxChars) {
  if (text.length <= maxChars) return [text];
  const words = text.split(" ");
  const lines = [];
  let current = "";
  for (const word of words) {
    if ((current + " " + word).trim().length <= maxChars) {
      current += (current ? " " : "") + word;
    } else {
      if (current) lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function buildSvg(title, description) {
  const titleLines = wrapText(title, 28);
  const descLines = wrapText(description, 55);

  let textY = 220;
  let textElements = "";

  for (const line of titleLines) {
    textElements += `<text x="600" y="${textY}" text-anchor="middle" font-family="Inter, sans-serif" font-size="56" font-weight="700" fill="#F2EFEA">${escapeXml(line)}</text>`;
    textY += 68;
  }

  textY += 16;

  for (const line of descLines) {
    textElements += `<text x="600" y="${textY}" text-anchor="middle" font-family="Inter, sans-serif" font-size="28" font-weight="400" fill="#B5AFA8">${escapeXml(line)}</text>`;
    textY += 40;
  }

  return `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1B1917"/>
      <stop offset="100%" stop-color="#24211E"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#D7B9AE"/>
      <stop offset="100%" stop-color="#B29685"/>
    </linearGradient>
    <style>
      @font-face {
        font-family: 'Inter';
        font-weight: 700;
        src: url(data:font/truetype;base64,${fontBold.toString("base64")}) format('truetype');
      }
      @font-face {
        font-family: 'Inter';
        font-weight: 400;
        src: url(data:font/truetype;base64,${fontRegular.toString("base64")}) format('truetype');
      }
    </style>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="440" y="160" width="320" height="4" rx="2" fill="url(#accent)"/>
  ${textElements}
  <text x="600" y="540" text-anchor="middle" font-family="Inter, sans-serif" font-size="18" font-weight="400" fill="#8C8680">shiggybot.shiggycord.dev</text>
</svg>`;
}

// Load previous manifest
let manifest = {};
if (existsSync(manifestPath)) {
  manifest = JSON.parse(readFileSync(manifestPath, "utf-8"));
}

const newManifest = {};
let generated = 0;
let skipped = 0;

for (const [route, meta] of Object.entries(routeMeta)) {
  const name = slug(route);
  const outPath = join(outDir, `${name}.png`);
  const hash = createHash("sha256").update(meta.title + meta.description).digest("hex").slice(0, 12);

  newManifest[name] = hash;

  if (manifest[name] === hash && existsSync(outPath)) {
    skipped++;
    continue;
  }

  const dir = dirname(outPath);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }

  const svg = buildSvg(meta.title, meta.description);
  await sharp(Buffer.from(svg)).png().toFile(outPath);
  console.log(`  ${outPath}`);
  generated++;
}

writeFileSync(manifestPath, JSON.stringify(newManifest, null, 2));
console.log(`\nOG images: ${generated} generated, ${skipped} skipped (up to date).`);
