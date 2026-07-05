import{n as e,t}from"./index-B6UokVem.js";var n=e();function r(e){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,span:`span`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`Building`}),`
`,(0,n.jsx)(r.p,{children:`ShiggyBot uses the standard .NET build system with strict analyzer rules. This page covers cloning, building, and handling common build failures.`}),`
`,(0,n.jsx)(r.h2,{children:`Clone the repository`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-bash`,children:[`git `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`clone`}),` https://github.com/kmmiio99o/ShiggyBot.git
`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`cd`}),` ShiggyBot
`]})}),`
`,(0,n.jsx)(r.p,{children:`The repository uses two primary branches:`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Branch`}),(0,n.jsx)(r.th,{children:`Purpose`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`main`})}),(0,n.jsx)(r.td,{children:`Stable releases. CI publishes platform-specific bundles on push.`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`dev`})}),(0,n.jsx)(r.td,{children:`Active development. CI builds on push/PR.`})]})]})]}),`
`,(0,n.jsx)(r.h2,{children:`Build`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`hljs language-bash`,children:`dotnet build
`})}),`
`,(0,n.jsxs)(r.p,{children:[`This compiles the project and runs all analyzers. The build compiles to `,(0,n.jsx)(r.code,{children:`bin/Debug/net10.0/`}),`.`]}),`
`,(0,n.jsx)(r.h2,{children:`Build constraints`}),`
`,(0,n.jsxs)(r.p,{children:[`The project file (`,(0,n.jsx)(r.code,{children:`ShiggyBot.csproj`}),`) enforces strict quality rules:`]}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Setting`}),(0,n.jsx)(r.th,{children:`Effect`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`TreatWarningsAsErrors=true`})}),(0,n.jsx)(r.td,{children:`Any compiler or analyzer warning becomes a build error.`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`AnalysisMode=All`})}),(0,n.jsx)(r.td,{children:`All built-in Roslyn analyzers are enabled at warning level.`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`GenerateDocumentationFile=true`})}),(0,n.jsxs)(r.td,{children:[`XML documentation is generated. `,(0,n.jsx)(r.code,{children:`CS1591`}),` (missing doc on public/internal API) is a warning.`]})]})]})]}),`
`,(0,n.jsxs)(r.p,{children:[`The only suppressed warning is `,(0,n.jsx)(r.code,{children:`IDE0058`}),` (unused expression result), which is set to `,(0,n.jsx)(r.code,{children:`silent`}),` because Discord.NET's fluent builder APIs return disposable objects that are intentionally discarded in builder patterns.`]}),`
`,(0,n.jsx)(r.h2,{children:`Build errors and fixes`}),`
`,(0,n.jsx)(r.h3,{children:`.NET 10 SDK not found`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`hljs language-text`,children:`error : The current .NET SDK does not support targeting .NET 10.0.
`})}),`
`,(0,n.jsxs)(r.p,{children:[`Run `,(0,n.jsx)(r.code,{children:`dotnet --version`}),` to check the installed SDK version. Download .NET 10 SDK from the `,(0,n.jsx)(r.a,{href:`https://dotnet.microsoft.com/en-us/download/dotnet/10.0`,children:`official site`}),`.`]}),`
`,(0,n.jsx)(r.h3,{children:`Project file not found`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`hljs language-text`,children:`error MSB4132: The specified runtime 'linux-x64' was not recognized.
`})}),`
`,(0,n.jsxs)(r.p,{children:[`Ensure you are in the project root directory (contains `,(0,n.jsx)(r.code,{children:`ShiggyBot.csproj`}),`). The `,(0,n.jsx)(r.code,{children:`RuntimeIdentifier`}),` is only relevant for `,(0,n.jsx)(r.code,{children:`dotnet publish`}),`, not `,(0,n.jsx)(r.code,{children:`dotnet build`}),`.`]}),`
`,(0,n.jsx)(r.h3,{children:`Locked bin/obj directories`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`hljs language-text`,children:`error MSB3021: Unable to copy file "..." to "bin/...". The process cannot access the file because it is being used by another process.
`})}),`
`,(0,n.jsxs)(r.p,{children:[`Run `,(0,n.jsx)(r.code,{children:`dotnet clean`}),` to remove intermediate files, or close any processes that may have files open (e.g., the running bot, file explorers).`]}),`
`,(0,n.jsx)(r.h3,{children:`Analyzer warnings as errors`}),`
`,(0,n.jsx)(r.p,{children:`If your code produces a warning, the build will fail with an error message like:`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`hljs language-text`,children:`error CAxxxx: ...
`})}),`
`,(0,n.jsx)(r.p,{children:`Fix the warning before committing. The CI pipeline enforces the same rules.`}),`
`,(0,n.jsx)(r.h2,{children:`Building in Release mode`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`hljs language-bash`,children:`dotnet build -c Release
`})}),`
`,(0,n.jsxs)(r.p,{children:[`Release mode applies optimizations (inlining, dead-code elimination). The output goes to `,(0,n.jsx)(r.code,{children:`bin/Release/net10.0/`}),`.`]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(){return(0,n.jsx)(i,{})}export{a as default};