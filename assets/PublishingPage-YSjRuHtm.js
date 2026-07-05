import{n as e,t}from"./index-B6UokVem.js";var n=e();function r(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,span:`span`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`Publishing`}),`
`,(0,n.jsx)(r.p,{children:`For production deployment, publish ShiggyBot as a single-file self-contained binary.`}),`
`,(0,n.jsx)(r.h2,{children:`Single-file publish`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`hljs language-bash`,children:`dotnet publish -c Release -r linux-x64 --self-contained
`})}),`
`,(0,n.jsx)(r.p,{children:`This produces a standalone executable that includes the .NET runtime. No .NET SDK or runtime is required on the target machine.`}),`
`,(0,n.jsx)(r.h3,{children:`What the flags mean`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Flag`}),(0,n.jsx)(r.th,{children:`Effect`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`-c Release`})}),(0,n.jsx)(r.td,{children:`Release mode with optimizations enabled`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`-r linux-x64`})}),(0,n.jsx)(r.td,{children:`Target runtime identifier (Linux x86-64)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`--self-contained`})}),(0,n.jsx)(r.td,{children:`Bundle the .NET runtime into the publish output`})]})]})]}),`
`,(0,n.jsx)(r.h3,{children:`Runtime identifiers`}),`
`,(0,n.jsxs)(r.p,{children:[`The project file hardcodes `,(0,n.jsx)(r.code,{children:`RuntimeIdentifier=linux-x64`}),` in `,(0,n.jsx)(r.code,{children:`PropertyGroup`}),` for local builds. The CI workflow uses a matrix for multiple platforms:`]}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`RID`}),(0,n.jsx)(r.th,{children:`Platform`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`win-x64`})}),(0,n.jsx)(r.td,{children:`Windows x86-64`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`linux-x64`})}),(0,n.jsx)(r.td,{children:`Linux x86-64`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`osx-x64`})}),(0,n.jsx)(r.td,{children:`macOS Intel`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`osx-arm64`})}),(0,n.jsx)(r.td,{children:`macOS Apple Silicon (CI only)`})]})]})]}),`
`,(0,n.jsx)(r.h3,{children:`Publish output`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`ShiggyBot/bin/Release/net10.0/linux-x64/publish/
├── ShiggyBot              # Executable
├── ShiggyBot.pdb          # Debug symbols (optional)
├── config.txt             # Create this for configuration
└── appsettings.json       # (optional) JSON config
`})}),`
`,(0,n.jsx)(r.p,{children:`The publish directory is self-contained. Copy the entire directory to any compatible Linux machine and run:`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`hljs language-bash`,children:`./ShiggyBot
`})}),`
`,(0,n.jsxs)(r.p,{children:[`No `,(0,n.jsx)(r.code,{children:`dotnet`}),` command is needed on the target machine because `,(0,n.jsx)(r.code,{children:`--self-contained`}),` bundles the runtime.`]}),`
`,(0,n.jsx)(r.h2,{children:`Configuration in production`}),`
`,(0,n.jsxs)(r.p,{children:[`Place `,(0,n.jsx)(r.code,{children:`config.txt`}),` or `,(0,n.jsx)(r.code,{children:`appsettings.json`}),` next to the published executable. The bot looks for these files in the working directory (the directory where you run `,(0,n.jsx)(r.code,{children:`./ShiggyBot`}),`).`]}),`
`,(0,n.jsx)(r.h2,{children:`Publishing for other platforms`}),`
`,(0,n.jsxs)(r.p,{children:[`Override the `,(0,n.jsx)(r.code,{children:`RuntimeIdentifier`}),` at publish time:`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-bash`,children:[(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# Windows`}),`
dotnet publish -c Release -r win-x64 --self-contained

`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# macOS Intel`}),`
dotnet publish -c Release -r osx-x64 --self-contained

`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# macOS Apple Silicon`}),`
dotnet publish -c Release -r osx-arm64 --self-contained
`]})}),`
`,(0,n.jsx)(r.h2,{children:`Required file on target`}),`
`,(0,n.jsxs)(r.p,{children:[`Only `,(0,n.jsx)(r.code,{children:`ShiggyBot`}),` (the executable) and your config file are strictly required. The `,(0,n.jsx)(r.code,{children:`.pdb`}),` file is optional and only needed for crash diagnostics.`]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(){return(0,n.jsx)(i,{})}export{a as default};