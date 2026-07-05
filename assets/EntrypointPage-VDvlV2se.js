import{n as e,t}from"./index-B6UokVem.js";var n=e();function r(e){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,ul:`ul`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`Entrypoint: Program.cs`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`Program.cs`}),` uses C# top-level statements (available since C# 10). It is the single entrypoint for the entire application.`]}),`
`,(0,n.jsx)(r.h2,{children:`Structure`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// 1. Global exception handlers`}),`
AppDomain.CurrentDomain.UnhandledException += (sender, `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`args`}),`) => { ... };
TaskScheduler.UnobservedTaskException += (sender, `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`args`}),`) => { ... };

`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// 2. Load configuration`}),`
BotConfig config = BotConfig.LoadFromConfiguration();

`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// 3. Build configuration-like bag (optional AppConfiguration)`}),`
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`var`}),` appConfig = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` AppConfiguration();

`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// 4. Create and start the Discord client service`}),`
DiscordClientService client = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),`(config, appConfig);
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`await`}),` client.StartAsync();

`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// 5. Block forever`}),`
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`await`}),` Task.Delay(`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`-1`}),`);
`]})}),`
`,(0,n.jsx)(r.h2,{children:`Phase 1: Global exception handlers`}),`
`,(0,n.jsx)(r.p,{children:`Two handlers catch exceptions that would otherwise terminate the process without logging:`}),`
`,(0,n.jsx)(r.h3,{children:`AppDomain.CurrentDomain.UnhandledException`}),`
`,(0,n.jsxs)(r.p,{children:[`Catches exceptions thrown on non-thread-pool threads — for example, exceptions in `,(0,n.jsx)(r.code,{children:`Timer`}),` callbacks or finalizers. These exceptions terminate the process but are logged first.`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[`AppDomain.CurrentDomain.UnhandledException += (sender, `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`args`}),`) =>
{
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`var`}),` ex = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`args`}),`.ExceptionObject `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`as`}),` Exception;
    Console.Error.WriteLine(`,(0,n.jsxs)(r.span,{className:`hljs-string`,children:[`$"FATAL: `,(0,n.jsx)(r.span,{className:`hljs-subst`,children:`{ex?.Message}`}),`"`]}),`);
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// WebhookLogger is not available here — logging to stderr only`}),`
};
`]})}),`
`,(0,n.jsx)(r.h3,{children:`TaskScheduler.UnobservedTaskException`}),`
`,(0,n.jsxs)(r.p,{children:[`Catches exceptions from `,(0,n.jsx)(r.code,{children:`Task`}),` instances that were not awaited and whose exception was not observed before the garbage collector collected them.`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[`TaskScheduler.UnobservedTaskException += (sender, `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`args`}),`) =>
{
    Console.Error.WriteLine(`,(0,n.jsxs)(r.span,{className:`hljs-string`,children:[`$"UNOBSERVED: `,(0,n.jsxs)(r.span,{className:`hljs-subst`,children:[`{`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`args`}),`.Exception.Message}`]}),`"`]}),`);
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`args`}),`.SetObserved(); `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// Prevents the process from crashing`}),`
};
`]})}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`SetObserved()`}),` marks the exception as handled so the process continues running.`]}),`
`,(0,n.jsx)(r.h2,{children:`Phase 2: Load configuration`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`BotConfig.LoadFromConfiguration()`}),` reads all config sources and returns a populated `,(0,n.jsx)(r.code,{children:`BotConfig`}),` instance. See `,(0,n.jsx)(r.a,{href:`/architecture/config-system`,children:`Config System`}),` for details.`]}),`
`,(0,n.jsx)(r.h2,{children:`Phase 3: Create DiscordClientService`}),`
`,(0,n.jsxs)(r.p,{children:[`The `,(0,n.jsx)(r.code,{children:`DiscordClientService`}),` constructor receives the config and an `,(0,n.jsx)(r.code,{children:`AppConfiguration`}),` bag. It creates the `,(0,n.jsx)(r.code,{children:`DiscordSocketClient`}),`, initializes all features, and prepares event handlers.`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[`DiscordClientService client = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),`(config, appConfig);
`]})}),`
`,(0,n.jsx)(r.h2,{children:`Phase 4: StartAsync`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`client.StartAsync()`}),` runs synchronously (it is not a background service). It:`]}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:`Initializes the database.`}),`
`,(0,n.jsx)(r.li,{children:`Creates and wires all feature instances.`}),`
`,(0,n.jsx)(r.li,{children:`Logs in and connects to Discord.`}),`
`,(0,n.jsx)(r.li,{children:`Starts background services (ban check, monitor, presence).`}),`
`,(0,n.jsx)(r.li,{children:`Returns.`}),`
`]}),`
`,(0,n.jsx)(r.h2,{children:`Phase 5: Block`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`await`}),` Task.Delay(`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`-1`}),`);
`]})}),`
`,(0,n.jsxs)(r.p,{children:[`This keeps the process alive indefinitely. The `,(0,n.jsx)(r.code,{children:`Task.Delay(-1)`}),` never completes. The process only exits on `,(0,n.jsx)(r.code,{children:`Ctrl+C`}),`, `,(0,n.jsx)(r.code,{children:`SIGTERM`}),`, or a fatal unhandled exception.`]}),`
`,(0,n.jsx)(r.h2,{children:`Why no generic host?`}),`
`,(0,n.jsxs)(r.p,{children:[`The decision to avoid `,(0,n.jsx)(r.code,{children:`Host.CreateDefaultBuilder()`}),` is intentional:`]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Simplicity — no dependency injection container to configure.`}),`
`,(0,n.jsx)(r.li,{children:`Transparency — every dependency is visible in the code.`}),`
`,(0,n.jsx)(r.li,{children:`Control — no hidden behavior from hosted service lifecycle, configuration providers, or logging infrastructure.`}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:[`The tradeoff is that every new feature requires manual wiring in `,(0,n.jsx)(r.code,{children:`DiscordClientService`}),`.`]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(){return(0,n.jsx)(i,{})}export{a as default};