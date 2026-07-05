import{n as e,t}from"./index-B6UokVem.js";var n=e();function r(e){let r={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`Style Guide`}),`
`,(0,n.jsx)(r.p,{children:`This page documents the code conventions expected in ShiggyBot contributions.`}),`
`,(0,n.jsx)(r.h2,{children:`Zero warnings`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`TreatWarningsAsErrors=true`}),` means any warning — from the compiler or any Roslyn analyzer — will fail the build. Run `,(0,n.jsx)(r.code,{children:`dotnet build`}),` locally before committing to ensure zero warnings.`]}),`
`,(0,n.jsx)(r.h2,{children:`XML doc comments`}),`
`,(0,n.jsxs)(r.p,{children:[`Every public and internal type, method, and property must have a `,(0,n.jsx)(r.code,{children:`<summary>`}),` comment. `,(0,n.jsx)(r.code,{children:`GenerateDocumentationFile=true`}),` makes `,(0,n.jsx)(r.code,{children:`CS1591`}),` a warning:`]}),`
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
`,(0,n.jsx)(r.h2,{children:`Locking`}),`
`,(0,n.jsxs)(r.p,{children:[`Use `,(0,n.jsx)(r.code,{children:`System.Threading.Lock`}),` (C# 13 / .NET 9+) for thread synchronization:`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`readonly`}),` Lock _lock = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),`();

`,(0,n.jsxs)(r.span,{className:`hljs-function`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`void`}),` `,(0,n.jsx)(r.span,{className:`hljs-title`,children:`DoSomething`}),`()`]}),`
{
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`lock`}),` (_lock)
    {
        `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// Thread-safe operation`}),`
    }
}
`]})}),`
`,(0,n.jsxs)(r.p,{children:[`Prefer `,(0,n.jsx)(r.code,{children:`Lock`}),` over `,(0,n.jsx)(r.code,{children:`lock(obj)`}),` on a plain object. `,(0,n.jsx)(r.code,{children:`System.Threading.Lock`}),` provides better diagnostics and performance.`]}),`
`,(0,n.jsx)(r.h2,{children:`ConfigureAwait`}),`
`,(0,n.jsxs)(r.p,{children:[`In library code (non-UI contexts), use `,(0,n.jsx)(r.code,{children:`ConfigureAwait(false)`}),` on all `,(0,n.jsx)(r.code,{children:`await`}),` calls:`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`await`}),` _connection.OpenAsync().ConfigureAwait(`,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`false`}),`);
`]})}),`
`,(0,n.jsx)(r.p,{children:`This avoids capturing the synchronization context, which is unnecessary in a console application.`}),`
`,(0,n.jsx)(r.h2,{children:`ValueTask`}),`
`,(0,n.jsxs)(r.p,{children:[`For hot-path handlers that may complete synchronously, return `,(0,n.jsx)(r.code,{children:`ValueTask`}),` instead of `,(0,n.jsx)(r.code,{children:`Task`}),`:`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[(0,n.jsxs)(r.span,{className:`hljs-function`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` ValueTask `,(0,n.jsx)(r.span,{className:`hljs-title`,children:`HandleAsync`}),`()`]}),`
{
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`if`}),` (_cached)
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` ValueTask.CompletedTask;

    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` DoAsync();
}

`,(0,n.jsxs)(r.span,{className:`hljs-function`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`async`}),` Task `,(0,n.jsx)(r.span,{className:`hljs-title`,children:`DoAsync`}),`()`]}),` { ... }
`]})}),`
`,(0,n.jsx)(r.h2,{children:`No DI`}),`
`,(0,n.jsx)(r.p,{children:`Do not use dependency injection. Construct dependencies manually:`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// ✅ Correct`}),`
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`var`}),` db = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` DatabaseService();
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`var`}),` feature = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` MyFeature(db);

`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// ❌ Wrong`}),`
services.AddSingleton<MyFeature>();
`]})}),`
`,(0,n.jsx)(r.h2,{children:`File organization`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Type`}),(0,n.jsx)(r.th,{children:`Directory`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Command classes`}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`Commands/<Category>/`})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Feature classes`}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`Features/`})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Discord-related`}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`Discord/`})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Builders / models`}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:`Components/V1/`}),` or `,(0,n.jsx)(r.code,{children:`Components/V2/`})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Services`}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`Services/`})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Utilities`}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`Utils/`})})]})]})]}),`
`,(0,n.jsx)(r.h2,{children:`Naming conventions`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`Files: `,(0,n.jsx)(r.code,{children:`PascalCase.cs`}),` matching the type name`]}),`
`,(0,n.jsxs)(r.li,{children:[`Classes: `,(0,n.jsx)(r.code,{children:`PascalCase`})]}),`
`,(0,n.jsxs)(r.li,{children:[`Methods: `,(0,n.jsx)(r.code,{children:`PascalCase`})]}),`
`,(0,n.jsxs)(r.li,{children:[`Local variables: `,(0,n.jsx)(r.code,{children:`camelCase`})]}),`
`,(0,n.jsxs)(r.li,{children:[`Private fields: `,(0,n.jsx)(r.code,{children:`_camelCase`})]}),`
`,(0,n.jsxs)(r.li,{children:[`Constants: `,(0,n.jsx)(r.code,{children:`PascalCase`}),` (no special prefix)`]}),`
`,(0,n.jsxs)(r.li,{children:[`Interfaces: `,(0,n.jsx)(r.code,{children:`I`}),` prefix (`,(0,n.jsx)(r.code,{children:`ICommand`}),`)`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{children:`Command naming`}),`
`,(0,n.jsxs)(r.p,{children:[`Commands are matched case-insensitively. The `,(0,n.jsx)(r.code,{children:`Name`}),` property should be lower-case:`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`string`}),` Name => `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"mycommand"`}),`; `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// matches SMycommand, smycommand, SMYCOMMAND`}),`
`]})}),`
`,(0,n.jsxs)(r.p,{children:[`The display name in help uses `,(0,n.jsx)(r.code,{children:`Name`}),` as-is.`]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(){return(0,n.jsx)(i,{})}export{a as default};