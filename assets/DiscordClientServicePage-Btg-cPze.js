import{n as e,t}from"./index-B6UokVem.js";var n=e();function r(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`DiscordClientService`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`DiscordClientService`}),` is the main orchestrator. It creates the `,(0,n.jsx)(r.code,{children:`DiscordSocketClient`}),`, initializes every feature, wires all event handlers, and manages the connection lifecycle.`]}),`
`,(0,n.jsx)(r.h2,{children:`Gateway configuration`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[`DiscordSocketConfig config = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),`()
{
    GatewayIntents = GatewayIntents.Guilds
                   | GatewayIntents.GuildMembers
                   | GatewayIntents.GuildMessages
                   | GatewayIntents.MessageContent,
    LogLevel = LogSeverity.Info,
    AlwaysDownloadUsers = `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`true`}),`,
    MessageCacheSize = `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`50`}),`,
};
`]})}),`
`,(0,n.jsx)(r.h3,{children:`GatewayIntents`}),`
`,(0,n.jsx)(r.p,{children:`The bot requests four intents:`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Intent`}),(0,n.jsx)(r.th,{children:`Why`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`Guilds`})}),(0,n.jsx)(r.td,{children:`Guild metadata, channel enumeration, role list`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`GuildMembers`})}),(0,n.jsx)(r.td,{children:`Member join/leave events (autorole)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`GuildMessages`})}),(0,n.jsx)(r.td,{children:`Message receive/update/delete events`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`MessageContent`})}),(0,n.jsxs)(r.td,{children:[`Read `,(0,n.jsx)(r.code,{children:`.Content`}),` on messages for command parsing`]})]})]})]}),`
`,(0,n.jsx)(r.h3,{children:`AlwaysDownloadUsers`}),`
`,(0,n.jsxs)(r.p,{children:[`When `,(0,n.jsx)(r.code,{children:`true`}),`, Discord.NET downloads the entire user list for each guild on connect. This ensures that when a `,(0,n.jsx)(r.code,{children:`GuildMemberUpdated`}),` event fires, the user object is already cached. Required for autorole to function reliably.`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Downside:`}),` Increases login time and memory usage for large guilds (5000+ members).`]}),`
`,(0,n.jsx)(r.h3,{children:`MessageCacheSize`}),`
`,(0,n.jsx)(r.p,{children:`Set to 50. This caches the last 50 messages per channel in memory. Used by commands that need message context (e.g., purge, reply-to detection).`}),`
`,(0,n.jsx)(r.h3,{children:`LogLevel`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`LogSeverity.Info`}),` enables Discord.NET internal logging at Info level. Messages are forwarded to `,(0,n.jsx)(r.code,{children:`Console.WriteLine`}),`.`]}),`
`,(0,n.jsx)(r.h2,{children:`Startup sequence`}),`
`,(0,n.jsxs)(r.p,{children:[`The `,(0,n.jsx)(r.code,{children:`StartAsync()`}),` method executes these steps sequentially:`]}),`
`,(0,n.jsx)(r.h3,{children:`Step 1: Database initialization`}),`
`,(0,n.jsxs)(r.p,{children:[`Calls `,(0,n.jsx)(r.code,{children:`DatabaseService.InitializeAsync()`}),` which runs `,(0,n.jsx)(r.code,{children:`CREATE TABLE IF NOT EXISTS`}),` for all required tables.`]}),`
`,(0,n.jsx)(r.h3,{children:`Step 2: Feature construction`}),`
`,(0,n.jsx)(r.p,{children:`Creates instances of every feature class:`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[`_commandHandler = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` CommandHandler(...);
_banCheckService = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` BanCheckService(...);
_monitorService = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` MonitorService(...);
_autoroleFeature = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` AutoroleFeature(_client, _db, ...);
_presenceFeature = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` PresenceFeature(...);
_gitHubStatsService = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` GitHubStatsService(...);
_codePreviewFeature = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` CodePreviewFeature(...);
_commitPreviewFeature = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` CommitPreviewFeature(...);
_pluginService = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` PluginService(...);
_webhookLogger = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` WebhookLogger(...);
_ephemeralButtonService = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` EphemeralButtonService(...);
`]})}),`
`,(0,n.jsx)(r.h3,{children:`Step 3: Feature wiring`}),`
`,(0,n.jsxs)(r.p,{children:[`Each feature's `,(0,n.jsx)(r.code,{children:`Start()`}),` method registers event handlers on the Discord client:`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[`_autoroleFeature.Start();       `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// wires GuildMemberUpdated`}),`
_presenceFeature.Start();       `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// wires nothing (timer-based)`}),`
_codePreviewFeature.Start();    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// wires MessageReceived (before command dispatch)`}),`
_commitPreviewFeature.Start();  `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// wires MessageReceived`}),`
`]})}),`
`,(0,n.jsx)(r.h3,{children:`Step 4: Login and connect`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`await`}),` _client.LoginAsync(TokenType.Bot, _config.DiscordToken);
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`await`}),` _client.StartAsync();
`]})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`LoginAsync`}),` authenticates with Discord. `,(0,n.jsx)(r.code,{children:`StartAsync`}),` connects to the gateway. Both must succeed for the bot to come online.`]}),`
`,(0,n.jsx)(r.h3,{children:`Step 5: Event wiring`}),`
`,(0,n.jsx)(r.p,{children:`After connection, remaining event handlers are attached:`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`hljs language-csharp`,children:`_client.Ready += OnReady;
_client.MessageReceived += _commandHandler.HandleMessage;
_client.ButtonExecuted += OnButtonExecuted;
_client.SelectMenuExecuted += OnSelectMenuExecuted;
`})}),`
`,(0,n.jsx)(r.h3,{children:`Step 6: Background services start`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[`_banCheckService.Start();    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// queries DB, arms one-shot timer`}),`
_monitorService.Start();     `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// begins 5-minute GitHub polling`}),`
`]})}),`
`,(0,n.jsx)(r.h3,{children:`Step 7: Return control to Program.cs`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`StartAsync()`}),` completes. `,(0,n.jsx)(r.code,{children:`Program.cs`}),` then blocks with `,(0,n.jsx)(r.code,{children:`Task.Delay(-1)`}),`.`]}),`
`,(0,n.jsx)(r.h2,{children:`Client events`}),`
`,(0,n.jsx)(r.h3,{children:`Ready`}),`
`,(0,n.jsx)(r.p,{children:`Logs the bot's connected guild count, shard information, and latency.`}),`
`,(0,n.jsx)(r.h3,{children:`MessageReceived`}),`
`,(0,n.jsxs)(r.p,{children:[`First handled by `,(0,n.jsx)(r.code,{children:`CodePreviewFeature`}),` for inline code link detection. Then by `,(0,n.jsx)(r.code,{children:`CommandHandler`}),` for prefix-based command dispatch.`]}),`
`,(0,n.jsx)(r.h3,{children:`ButtonExecuted`}),`
`,(0,n.jsxs)(r.p,{children:[`The button dispatch chain: `,(0,n.jsx)(r.code,{children:`EphemeralButtonService.TryHandle`}),` → `,(0,n.jsx)(r.code,{children:`CommitPreviewFeature.TryHandleButton`}),` → fallback message.`]}),`
`,(0,n.jsx)(r.h3,{children:`SelectMenuExecuted`}),`
`,(0,n.jsx)(r.p,{children:`Currently only used by the help command's category select menu (V2 mode).`}),`
`,(0,n.jsx)(r.h2,{children:`Lifecycle`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`Dispose()`}),` unregisters all feature event handlers and disposes the Discord client:`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[(0,n.jsxs)(r.span,{className:`hljs-function`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`void`}),` `,(0,n.jsx)(r.span,{className:`hljs-title`,children:`Dispose`}),`()`]}),`
{
    _myFeature?.Unregister();
    _client?.Dispose();
}
`]})}),`
`,(0,n.jsxs)(r.p,{children:[`Note that the process does not normally call `,(0,n.jsx)(r.code,{children:`Dispose()`}),` — it terminates via `,(0,n.jsx)(r.code,{children:`Ctrl+C`}),` or `,(0,n.jsx)(r.code,{children:`SIGTERM`}),`, at which point the OS reclaims all resources.`]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(){return(0,n.jsx)(i,{})}export{a as default};