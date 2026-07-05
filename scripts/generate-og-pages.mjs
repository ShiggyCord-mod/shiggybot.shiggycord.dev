import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const dist = join(root, "dist");
const html = readFileSync(join(dist, "index.html"), "utf-8");

const siteUrl = process.env.SITE_URL || "https://shiggybot.shiggycord.dev";

function routeImage(route) {
  const name = route === "/" ? "index" : route.replace(/^\//, "").replace(/\//g, "-");
  return `${siteUrl}/og-images/${name}.png`;
}

const routeMeta = {
  "/": { title: "ShiggyBot", description: "A modular Discord bot built with C# 13 and .NET 10 using Discord.Net" },
  "/commands": { title: "Commands — ShiggyBot", description: "All ShiggyBot commands: moderation, utility, search, fun, and core." },
  "/setup": { title: "Setup — ShiggyBot", description: "Learn how to set up and deploy ShiggyBot on your own server." },
  "/setup/prerequisites": { title: "Prerequisites — ShiggyBot", description: "System requirements and tools needed to build and run ShiggyBot." },
  "/setup/discord-portal": { title: "Discord Portal — ShiggyBot", description: "How to create a Discord application and get your bot token." },
  "/setup/building": { title: "Building — ShiggyBot", description: "Build ShiggyBot from source using the .NET CLI." },
  "/setup/running": { title: "Running — ShiggyBot", description: "Configure and run ShiggyBot with environment variables or config files." },
  "/setup/publishing": { title: "Publishing — ShiggyBot", description: "Publish ShiggyBot as a self-contained deployment for production." },
  "/setup/ci-cd": { title: "CI/CD — ShiggyBot", description: "Continuous integration and deployment pipeline for ShiggyBot." },
  "/configuration": { title: "Configuration — ShiggyBot", description: "Complete reference for ShiggyBot configuration keys, sources, and permissions." },
  "/configuration/keys": { title: "Keys — ShiggyBot", description: "All configuration keys that ShiggyBot's BotConfig reads at startup." },
  "/configuration/sources": { title: "Sources — ShiggyBot", description: "Where ShiggyBot loads its configuration from." },
  "/configuration/permissions": { title: "Permissions — ShiggyBot", description: "Permission levels and command gating in ShiggyBot." },
  "/architecture": { title: "Architecture — ShiggyBot", description: "High-level overview of ShiggyBot's modular architecture and design principles." },
  "/architecture/entrypoint": { title: "Entrypoint — ShiggyBot", description: "How ShiggyBot starts: config loading, service registration, and bot launch." },
  "/architecture/discord-client-service": { title: "Discord Client — ShiggyBot", description: "The central Discord client orchestrator: lifecycle, events, and connection management." },
  "/architecture/command-system": { title: "Command System — ShiggyBot", description: "How ShiggyBot's command discovery, dispatch, and permission system works." },
  "/architecture/component-systems": { title: "Components — ShiggyBot", description: "V1 and V2 component systems: message builders, embeds, buttons, and modals." },
  "/architecture/features": { title: "Features — ShiggyBot", description: "Optional runtime features: autorole, presence, code previews, and more." },
  "/architecture/services": { title: "Services — ShiggyBot", description: "Service layer: command handling, plugin management, and GitHub monitoring." },
  "/architecture/database": { title: "Database — ShiggyBot", description: "SQLite persistence layer: bans, guild settings, and data storage." },
  "/architecture/utilities": { title: "Utilities — ShiggyBot", description: "Helper utilities: embedding, error handling, formatting, and logging." },
  "/architecture/config-system": { title: "Config System — ShiggyBot", description: "How BotConfig loads and validates configuration from multiple sources." },
  "/architecture/patterns": { title: "Patterns — ShiggyBot", description: "Design patterns and conventions used throughout ShiggyBot." },
  "/extending": { title: "Extending — ShiggyBot", description: "Learn how to extend ShiggyBot with new commands, features, and data services." },
  "/extending/new-command": { title: "New Command — ShiggyBot", description: "Step-by-step guide to creating a new command for ShiggyBot." },
  "/extending/new-feature": { title: "New Feature — ShiggyBot", description: "How to create a new runtime feature for ShiggyBot." },
  "/extending/new-data": { title: "New Data — ShiggyBot", description: "Adding new data services and database entities to ShiggyBot." },
  "/extending/style-guide": { title: "Style Guide — ShiggyBot", description: "Coding conventions and style guidelines for contributing to ShiggyBot." },
  "/extending/gotchas": { title: "Gotchas — ShiggyBot", description: "Common pitfalls and gotchas when extending ShiggyBot." },
  "/404": { title: "Page Not Found — ShiggyBot", description: "The page you're looking for doesn't exist or has been moved." },
};

function injectMeta(baseHtml, route, meta) {
  const url = route === "/" ? siteUrl : `${siteUrl}${route}`;
  const image = routeImage(route);

  return baseHtml
    .replace(
      "<title>ShiggyBot — Discord Bot</title>",
      `<title>${escapeHtml(meta.title)}</title>` +
        `<meta name="description" content="${escapeHtml(meta.description)}" />` +
        `<meta property="og:type" content="website" />` +
        `<meta property="og:url" content="${url}" />` +
        `<meta property="og:title" content="${escapeHtml(meta.title)}" />` +
        `<meta property="og:description" content="${escapeHtml(meta.description)}" />` +
        `<meta property="og:image" content="${image}" />` +
        `<meta property="og:image:width" content="1200" />` +
        `<meta property="og:image:height" content="630" />` +
        `<meta name="twitter:card" content="summary_large_image" />` +
        `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />` +
        `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />` +
        `<meta name="twitter:image" content="${image}" />`,
    );
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

for (const [route, meta] of Object.entries(routeMeta)) {
  const outPath = join(dist, route.slice(1), "index.html");
  const dir = dirname(outPath);

  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }

  const outHtml = injectMeta(html, route, meta);
  writeFileSync(outPath, outHtml);
  console.log(`  ${outPath}`);

  // GitHub Pages serves 404.html at root for unmatched routes
  if (route === "/404") {
    writeFileSync(join(dist, "404.html"), outHtml);
    console.log(`  ${join(dist, "404.html")}`);
  }
}

console.log(`\nGenerated ${Object.keys(routeMeta).length} route HTML files with OG tags.`);
