import{n as e,t}from"./index-B6UokVem.js";var n=e();function r(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`Key Patterns`}),`
`,(0,n.jsx)(r.p,{children:`This page documents important implementation patterns in ShiggyBot.`}),`
`,(0,n.jsx)(r.h2,{children:`BanCheckService: one-shot timer`}),`
`,(0,n.jsxs)(r.p,{children:[`Unlike a periodic polling approach (which would query the database every N seconds), the ban check uses a `,(0,n.jsx)(r.strong,{children:`one-shot timer`}),` pattern:`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`Startup
  → Query DB for earliest future UnbanTime
  → Calculate delay = UnbanTime - UtcNow + 5s buffer
  → Create System.Threading.Timer with that delay
  → Timer fires
    → Unban user
    → Remove DB entry
    → Query for next scheduled unban
    → Re-arm timer with new delay
`})}),`
`,(0,n.jsx)(r.p,{children:`Benefits: Zero CPU usage between scheduled unbans. No unnecessary database queries.`}),`
`,(0,n.jsxs)(r.p,{children:[`The timer reference is protected by `,(0,n.jsx)(r.code,{children:`System.Threading.Lock`}),` (C# 13 / .NET 9+) for thread-safe re-arming:`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` Timer? _timer;
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`readonly`}),` Lock _lock = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),`();

`,(0,n.jsxs)(r.span,{className:`hljs-function`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`void`}),` `,(0,n.jsx)(r.span,{className:`hljs-title`,children:`ArmTimer`}),`(`,(0,n.jsx)(r.span,{className:`hljs-params`,children:`TimeSpan delay`}),`)`]}),`
{
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`lock`}),` (_lock)
    {
        _timer?.Dispose();
        _timer = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` Timer(OnTimerFired, `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`null`}),`, delay, Timeout.InfiniteTimeSpan);
    }
}
`]})}),`
`,(0,n.jsx)(r.h2,{children:`In-memory caches`}),`
`,(0,n.jsx)(r.p,{children:`Three classes use in-memory caches with FIFO eviction:`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Cache`}),(0,n.jsx)(r.th,{children:`Storage`}),(0,n.jsx)(r.th,{children:`Max size`}),(0,n.jsx)(r.th,{children:`Eviction`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Commit preview data`}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:`ConcurrentDictionary<K, V>`}),` + `,(0,n.jsx)(r.code,{children:`Queue<K>`})]}),(0,n.jsx)(r.td,{children:`100`}),(0,n.jsx)(r.td,{children:`FIFO`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Mpreg image results`}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:`ConcurrentDictionary<K, V>`}),` + `,(0,n.jsx)(r.code,{children:`Queue<K>`})]}),(0,n.jsx)(r.td,{children:`100`}),(0,n.jsx)(r.td,{children:`FIFO`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Plugin index`}),(0,n.jsx)(r.td,{children:`Raw string`}),(0,n.jsx)(r.td,{children:`1`}),(0,n.jsx)(r.td,{children:`TTL (60 min)`})]})]})]}),`
`,(0,n.jsx)(r.p,{children:`The FIFO eviction pattern:`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`static`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`readonly`}),` ConcurrentDictionary<`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`string`}),`, CommitPreview> _cache = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),`();
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`static`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`readonly`}),` Queue<`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`string`}),`> _order = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),`();
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`static`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`readonly`}),` Lock _lock = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),`();

`,(0,n.jsxs)(r.span,{className:`hljs-function`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`void`}),` `,(0,n.jsx)(r.span,{className:`hljs-title`,children:`CacheAdd`}),`(`,(0,n.jsxs)(r.span,{className:`hljs-params`,children:[(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`string`}),` key, CommitPreview `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`value`})]}),`)`]}),`
{
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`lock`}),` (_lock)
    {
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`if`}),` (_order.Count >= `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`100`}),`)
        {
            `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`var`}),` oldest = _order.Dequeue();
            _cache.TryRemove(oldest, `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`out`}),` _);
        }
        _cache[key] = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`value`}),`;
        _order.Enqueue(key);
    }
}
`]})}),`
`,(0,n.jsx)(r.h2,{children:`PresenceFeature rotation`}),`
`,(0,n.jsx)(r.p,{children:`The presence feature cycles through 4 templates:`}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:`"Watching {stars} stars on {repo}"`})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:`"Watching {forks} forks on {repo}"`})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:`"Watching {open_issues} issues on {repo}"`})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.code,{children:`"{prefix}help for commands"`})}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:[`Where `,(0,n.jsx)(r.code,{children:`{stars}`}),`, `,(0,n.jsx)(r.code,{children:`{forks}`}),`, `,(0,n.jsx)(r.code,{children:`{open_issues}`}),` are fetched by `,(0,n.jsx)(r.code,{children:`GitHubStatsService`}),`, and `,(0,n.jsx)(r.code,{children:`{prefix}`}),` is the configured command prefix.`]}),`
`,(0,n.jsx)(r.h3,{children:`Gate: volatile bool`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`volatile`}),` `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`bool`}),` _updating;

`,(0,n.jsxs)(r.span,{className:`hljs-function`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`async`}),` Task `,(0,n.jsx)(r.span,{className:`hljs-title`,children:`RotatePresence`}),`()`]}),`
{
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`if`}),` (_updating) `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),`; `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// Skip overlapping ticks`}),`
    _updating = `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`true`}),`;
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`try`}),`
    {
        `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// ... set next activity`}),`
    }
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`finally`}),`
    {
        _updating = `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`false`}),`;
    }
}
`]})}),`
`,(0,n.jsxs)(r.p,{children:[`The `,(0,n.jsx)(r.code,{children:`volatile`}),` keyword ensures the flag is read directly from memory (not cached in a register), so timer ticks on different threads always see the current value.`]}),`
`,(0,n.jsx)(r.h3,{children:`MDX note`}),`
`,(0,n.jsx)(r.p,{children:`In the presence templates, the braces are literal text, not C# string interpolation or MDX expressions. When documenting these templates in MDX, the braces must be escaped with backticks:`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"Watching \\`{stars}\\` stars on \\`{repo}\\`\n"})}),`
`,(0,n.jsxs)(r.p,{children:[`Without backticks, MDX interprets `,(0,n.jsx)(r.code,{children:`{stars}`}),` as a JavaScript expression and throws a compilation error.`]}),`
`,(0,n.jsx)(r.h2,{children:`Static HttpClient instances`}),`
`,(0,n.jsxs)(r.p,{children:[`Six or more classes create their own `,(0,n.jsx)(r.code,{children:`static readonly HttpClient`}),`:`]}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Class`}),(0,n.jsx)(r.th,{children:`Timeout`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`MonitorService`})}),(0,n.jsx)(r.td,{children:`15 seconds`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Others`}),(0,n.jsx)(r.td,{children:`100 seconds (default)`})]})]})]}),`
`,(0,n.jsxs)(r.p,{children:[`The default 100-second timeout comes from `,(0,n.jsx)(r.code,{children:`HttpClientHandler`}),` defaults. For outbound API calls, this is generally acceptable but can cause long hangs if a service is unresponsive.`]}),`
`,(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:`Recommended pattern for new instances:`})}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`static`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`readonly`}),` HttpClient _http = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),`()
{
    Timeout = TimeSpan.FromSeconds(`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`15`}),`)
};
`]})}),`
`,(0,n.jsx)(r.h2,{children:`Interaction dispatch (button clicks)`}),`
`,(0,n.jsxs)(r.p,{children:[`When a button is clicked, the `,(0,n.jsx)(r.code,{children:`ButtonExecuted`}),` event fires. The dispatch chain:`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`ButtonExecuted
  → 1. EphemeralButtonService.TryHandle
    → Checks ConcurrentDictionary for custom ID
    → If found: invoke handler, remove entry (TryRemove)
    → Return true
  → 2. CommitPreviewFeature.TryHandleButton
    → Checks if custom ID matches "commit_prev:{url}" or "commit_next:{url}"
    → If matched: show cached prev/next commit
    → Return true
  → 3. Fallback: respond "This button is no longer available."
`})}),`
`,(0,n.jsx)(r.p,{children:`Each handler checks if the custom ID matches its format. The first matching handler claims the interaction.`}),`
`,(0,n.jsx)(r.h2,{children:`Build constraints`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Constraint`}),(0,n.jsx)(r.th,{children:`Effect`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`TreatWarningsAsErrors=true`})}),(0,n.jsx)(r.td,{children:`Build fails on any warning`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`AnalysisMode=All`})}),(0,n.jsx)(r.td,{children:`All Roslyn analyzers at warning severity`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`GenerateDocumentationFile=true`})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:`CS1591`}),` (missing XML doc) is a warning`]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`IDE0058`})}),(0,n.jsx)(r.td,{children:`Silent (Discord.NET fluent builder patterns)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`ServerGarbageCollection=false`})}),(0,n.jsx)(r.td,{children:`Workstation GC (lower latency, higher memory)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`RuntimeIdentifier=linux-x64`})}),(0,n.jsx)(r.td,{children:`Hardcoded for local builds`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`PublishSingleFile=true`})}),(0,n.jsx)(r.td,{children:`Release builds produce single-file binary`})]})]})]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Workstation GC:`}),` Disables server GC, which means the garbage collector uses per-process heap instead of per-CPU heaps. This results in lower memory allocation latency at the cost of higher total memory usage. Suitable for a long-running bot process.`]}),`
`,(0,n.jsx)(r.h2,{children:`XML doc requirements`}),`
`,(0,n.jsxs)(r.p,{children:[`Every public and internal type, method, and property must have a `,(0,n.jsx)(r.code,{children:`<summary>`}),` comment:`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[(0,n.jsxs)(r.span,{className:`hljs-comment`,children:[(0,n.jsx)(r.span,{className:`hljs-doctag`,children:`///`}),` `,(0,n.jsx)(r.span,{className:`hljs-doctag`,children:`<summary>`})]}),`
`,(0,n.jsxs)(r.span,{className:`hljs-comment`,children:[(0,n.jsx)(r.span,{className:`hljs-doctag`,children:`///`}),` Handles the ping command, responding with the current gateway latency.`]}),`
`,(0,n.jsxs)(r.span,{className:`hljs-comment`,children:[(0,n.jsx)(r.span,{className:`hljs-doctag`,children:`///`}),` `,(0,n.jsx)(r.span,{className:`hljs-doctag`,children:`</summary>`})]}),`
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`internal`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`sealed`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`class`}),` `,(0,n.jsx)(r.span,{className:`hljs-title`,children:`PingCommand`}),` : `,(0,n.jsx)(r.span,{className:`hljs-title`,children:`ICommand`}),`
{
    `,(0,n.jsxs)(r.span,{className:`hljs-comment`,children:[(0,n.jsx)(r.span,{className:`hljs-doctag`,children:`///`}),` `,(0,n.jsx)(r.span,{className:`hljs-doctag`,children:`<summary>`})]}),`
    `,(0,n.jsxs)(r.span,{className:`hljs-comment`,children:[(0,n.jsx)(r.span,{className:`hljs-doctag`,children:`///`}),` The command name used for dispatch.`]}),`
    `,(0,n.jsxs)(r.span,{className:`hljs-comment`,children:[(0,n.jsx)(r.span,{className:`hljs-doctag`,children:`///`}),` `,(0,n.jsx)(r.span,{className:`hljs-doctag`,children:`</summary>`})]}),`
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`string`}),` Name => `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"ping"`}),`;
}
`]})}),`
`,(0,n.jsxs)(r.p,{children:[`Without doc comments, the build fails with `,(0,n.jsx)(r.code,{children:`CS1591: Missing XML comment for publicly visible type or member`}),`.`]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(){return(0,n.jsx)(i,{})}export{a as default};