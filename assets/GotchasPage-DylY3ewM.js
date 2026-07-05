import{n as e,t}from"./index-B6UokVem.js";var n=e();function r(e){let r={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`Gotchas`}),`
`,(0,n.jsx)(r.p,{children:`Pitfalls and common mistakes to avoid when working with ShiggyBot.`}),`
`,(0,n.jsx)(r.h2,{children:`V2 namespace ambiguity`}),`
`,(0,n.jsxs)(r.p,{children:[`Discord.Net 3.20.1 ships its own `,(0,n.jsx)(r.code,{children:`ContainerBuilder`}),`, `,(0,n.jsx)(r.code,{children:`SectionBuilder`}),`, and `,(0,n.jsx)(r.code,{children:`TextDisplayBuilder`}),` under the `,(0,n.jsx)(r.code,{children:`Discord`}),` namespace. Files importing both `,(0,n.jsx)(r.code,{children:`using Discord;`}),` and `,(0,n.jsx)(r.code,{children:`using ShiggyBot.Components.V2;`}),` will get ambiguous reference errors:`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`using`}),` Discord;
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`using`}),` ShiggyBot.Components.V2;

`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// Error: ContainerBuilder is ambiguous between`}),`
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`//   Discord.ContainerBuilder and`}),`
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`//   ShiggyBot.Components.V2.ContainerBuilder`}),`
`]})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Fix:`}),` Use `,(0,n.jsx)(r.code,{children:`global::`}),` qualification:`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`using`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`global`}),`::Discord.ContainerBuilder;
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`using`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`global`}),`::Discord.SectionBuilder;
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`using`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`global`}),`::Discord.TextDisplayBuilder;
`]})}),`
`,(0,n.jsx)(r.p,{children:`Or rename with using aliases:`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`using`}),` DiscordContainerBuilder = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`global`}),`::Discord.ContainerBuilder;
`]})}),`
`,(0,n.jsx)(r.h2,{children:`config.txt parser`}),`
`,(0,n.jsxs)(r.p,{children:[`The `,(0,n.jsx)(r.code,{children:`config.txt`}),` parser uses `,(0,n.jsx)(r.code,{children:`Split('=', 2)`}),`. Contrary to what AGENTS.md states, this actually `,(0,n.jsx)(r.strong,{children:`preserves`}),` everything after the first `,(0,n.jsx)(r.code,{children:`=`}),`:`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`TOKEN=abc=def
// Split('=', 2) → ["TOKEN", "abc=def"]
// Value: "abc=def"
`})}),`
`,(0,n.jsxs)(r.p,{children:[`The confusion stems from early documentation. Values containing `,(0,n.jsx)(r.code,{children:`=`}),` are NOT truncated. However, for complex values (JSON, long strings), prefer `,(0,n.jsx)(r.code,{children:`appsettings.json`}),` or environment variables.`]}),`
`,(0,n.jsx)(r.h2,{children:`Never commit a real DISCORD_TOKEN`}),`
`,(0,n.jsx)(r.p,{children:`The config files are gitignored, but mistakes happen. Before committing:`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`hljs language-bash`,children:`git diff --cached
`})}),`
`,(0,n.jsx)(r.p,{children:`Check for any file containing a real-looking token. Use placeholders in examples:`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`DISCORD_TOKEN=your_token_here
`})}),`
`,(0,n.jsx)(r.h2,{children:`Gateway intents`}),`
`,(0,n.jsxs)(r.p,{children:[`If your feature needs a new gateway intent, remember to update it in `,(0,n.jsx)(r.strong,{children:`three places`}),`:`]}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Code`}),` — `,(0,n.jsx)(r.code,{children:`DiscordSocketConfig.GatewayIntents`}),` in `,(0,n.jsx)(r.code,{children:`DiscordClientService`})]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Developer Portal`}),` — Bot > Privileged Gateway Intents`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Restart`}),` — The bot must be restarted to pick up the new intents`]}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Missing any of these will cause the feature to fail silently.`}),`
`,(0,n.jsx)(r.h2,{children:`HTTP client boilerplate`}),`
`,(0,n.jsxs)(r.p,{children:[`Six or more classes each create their own `,(0,n.jsx)(r.code,{children:`static readonly HttpClient`}),`. When creating a new one, always set an explicit timeout:`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`static`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`readonly`}),` HttpClient _http = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),`()
{
    Timeout = TimeSpan.FromSeconds(`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`15`}),`)  `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// ⚠ Never skip this`}),`
};
`]})}),`
`,(0,n.jsxs)(r.p,{children:[`Without an explicit `,(0,n.jsx)(r.code,{children:`Timeout`}),`, the default is 100 seconds, which can cause long hangs.`]}),`
`,(0,n.jsx)(r.h2,{children:`async void event handlers`}),`
`,(0,n.jsxs)(r.p,{children:[`Discord.NET's events use `,(0,n.jsx)(r.code,{children:`async void`}),` delegates. Wrap the body in try/catch:`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[`_client.MessageReceived += `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`async`}),` (msg) =>
{
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`try`}),`
    {
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`await`}),` HandleMessage(msg);
    }
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`catch`}),` (Exception ex)
    {
        Console.Error.WriteLine(`,(0,n.jsxs)(r.span,{className:`hljs-string`,children:[`$"Error: `,(0,n.jsx)(r.span,{className:`hljs-subst`,children:`{ex.Message}`}),`"`]}),`);
    }
};
`]})}),`
`,(0,n.jsxs)(r.p,{children:[`Exceptions in `,(0,n.jsx)(r.code,{children:`async void`}),` methods crash the process — they are not captured by `,(0,n.jsx)(r.code,{children:`TaskScheduler.UnobservedTaskException`}),`.`]}),`
`,(0,n.jsx)(r.h2,{children:`Static HttpClient DNS behavior`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`HttpClient`}),` uses the underlying `,(0,n.jsx)(r.code,{children:`SocketsHttpHandler`}),` which caches DNS resolutions indefinitely by default. On .NET Core / .NET 5+, the default handler respects DNS changes, but on long-running processes, use `,(0,n.jsx)(r.code,{children:`SocketsHttpHandler`}),` with `,(0,n.jsx)(r.code,{children:`PooledConnectionLifetime`}),` for production reliability:`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`static`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`readonly`}),` HttpClient _http = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),`(`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` SocketsHttpHandler
{
    PooledConnectionLifetime = TimeSpan.FromMinutes(`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`5`}),`)
})
{
    Timeout = TimeSpan.FromSeconds(`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`15`}),`)
};
`]})}),`
`,(0,n.jsx)(r.h2,{children:`MDX template braces`}),`
`,(0,n.jsxs)(r.p,{children:[`When documenting presence templates (or any text containing `,(0,n.jsx)(r.code,{children:`{braces}`}),`) in MDX, wrap them in backticks:`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`hljs language-mdx`,children:"Watching \\`{stars}\\` stars on \\`{repo}\\`\n"})}),`
`,(0,n.jsxs)(r.p,{children:[`Without backticks, MDX interprets `,(0,n.jsx)(r.code,{children:`{stars}`}),` as a JavaScript expression and fails to compile.`]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(){return(0,n.jsx)(i,{})}export{a as default};