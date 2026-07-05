import strings from "../i18n";

const t = strings;
const siteUrl = import.meta.env.VITE_SITE_URL || "https://shiggybot.shiggycord.dev";
const siteName = t.site.title;
const defaultDescription = t.site.description;
const ogImage = `${siteUrl}/favicon.gif`;

export interface PageMeta {
  title: string;
  description: string;
}

const routeMeta: Record<string, PageMeta> = {
  "/": {
    title: siteName,
    description: defaultDescription,
  },
  "/commands": {
    title: `${t.nav.commands} — ${siteName}`,
    description: `All ${siteName} commands: moderation, utility, search, fun, and core commands.`,
  },
  "/setup": {
    title: `${t.nav.setup} — ${siteName}`,
    description: `Learn how to set up and deploy ${siteName} on your own server.`,
  },
  "/setup/prerequisites": {
    title: `${t.nav.setupPrerequisites} — ${siteName}`,
    description: `System requirements and tools needed to build and run ${siteName}.`,
  },
  "/setup/discord-portal": {
    title: `${t.nav.setupDiscordPortal} — ${siteName}`,
    description: `How to create a Discord application and get your bot token for ${siteName}.`,
  },
  "/setup/building": {
    title: `${t.nav.setupBuilding} — ${siteName}`,
    description: `Build ${siteName} from source using the .NET CLI.`,
  },
  "/setup/running": {
    title: `${t.nav.setupRunning} — ${siteName}`,
    description: `Configure and run ${siteName} with environment variables or config files.`,
  },
  "/setup/publishing": {
    title: `${t.nav.setupPublishing} — ${siteName}`,
    description: `Publish ${siteName} as a self-contained deployment for production.`,
  },
  "/setup/ci-cd": {
    title: `${t.nav.setupCiCd} — ${siteName}`,
    description: `Continuous integration and deployment pipeline for ${siteName}.`,
  },
  "/configuration": {
    title: `${t.nav.configuration} — ${siteName}`,
    description: `Complete reference for ${siteName} configuration keys, sources, and permissions.`,
  },
  "/configuration/keys": {
    title: `${t.nav.configurationKeys} — ${siteName}`,
    description: `All configuration keys that ${siteName}'s BotConfig reads at startup.`,
  },
  "/configuration/sources": {
    title: `${t.nav.configurationSources} — ${siteName}`,
    description: `Where ${siteName} loads its configuration from: environment variables, JSON files, and more.`,
  },
  "/configuration/permissions": {
    title: `${t.nav.configurationPermissions} — ${siteName}`,
    description: `Permission levels and command gating in ${siteName}.`,
  },
  "/architecture": {
    title: `${t.nav.architecture} — ${siteName}`,
    description: `High-level overview of ${siteName}'s modular architecture and design principles.`,
  },
  "/architecture/entrypoint": {
    title: `${t.nav.architectureEntrypoint} — ${siteName}`,
    description: `How ${siteName} starts: config loading, service registration, and bot launch.`,
  },
  "/architecture/discord-client-service": {
    title: `${t.nav.architectureDiscordClientService} — ${siteName}`,
    description: `The central Discord client orchestrator in ${siteName}: lifecycle, events, and connection management.`,
  },
  "/architecture/command-system": {
    title: `${t.nav.architectureCommandSystem} — ${siteName}`,
    description: `How ${siteName}'s command discovery, dispatch, and permission system works.`,
  },
  "/architecture/component-systems": {
    title: `${t.nav.architectureComponentSystems} — ${siteName}`,
    description: `${siteName}'s V1 and V2 component systems: message builders, embeds, buttons, and modals.`,
  },
  "/architecture/features": {
    title: `${t.nav.architectureFeatures} — ${siteName}`,
    description: `Optional runtime features in ${siteName}: autorole, presence, code previews, and more.`,
  },
  "/architecture/services": {
    title: `${t.nav.architectureServices} — ${siteName}`,
    description: `${siteName}'s service layer: command handling, plugin management, and GitHub monitoring.`,
  },
  "/architecture/database": {
    title: `${t.nav.architectureDatabase} — ${siteName}`,
    description: `${siteName}'s SQLite persistence layer: bans, guild settings, and data storage.`,
  },
  "/architecture/utilities": {
    title: `${t.nav.architectureUtilities} — ${siteName}`,
    description: `Helper utilities used across ${siteName}: embedding, error handling, formatting, and logging.`,
  },
  "/architecture/config-system": {
    title: `${t.nav.architectureConfigSystem} — ${siteName}`,
    description: `How ${siteName}'s BotConfig loads and validates configuration from multiple sources.`,
  },
  "/architecture/patterns": {
    title: `${t.nav.architecturePatterns} — ${siteName}`,
    description: `Design patterns and conventions used throughout ${siteName}.`,
  },
  "/extending": {
    title: `${t.nav.extending} — ${siteName}`,
    description: `Learn how to extend ${siteName} with new commands, features, and data services.`,
  },
  "/extending/new-command": {
    title: `${t.nav.extendingNewCommand} — ${siteName}`,
    description: `Step-by-step guide to creating a new command for ${siteName}.`,
  },
  "/extending/new-feature": {
    title: `${t.nav.extendingNewFeature} — ${siteName}`,
    description: `How to create a new runtime feature for ${siteName}.`,
  },
  "/extending/new-data": {
    title: `${t.nav.extendingNewData} — ${siteName}`,
    description: `Adding new data services and database entities to ${siteName}.`,
  },
  "/extending/style-guide": {
    title: `${t.nav.extendingStyleGuide} — ${siteName}`,
    description: `Coding conventions and style guidelines for contributing to ${siteName}.`,
  },
  "/extending/gotchas": {
    title: `${t.nav.extendingGotchas} — ${siteName}`,
    description: `Common pitfalls and gotchas when extending ${siteName}.`,
  },
};

export function getPageMeta(pathname: string): PageMeta {
  return (
    routeMeta[pathname] ?? {
      title: siteName,
      description: defaultDescription,
    }
  );
}

export { siteUrl, siteName, defaultDescription, ogImage };
