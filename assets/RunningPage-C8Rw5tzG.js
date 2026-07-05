import{n as e,t}from"./index-B6UokVem.js";var n=e();function r(e){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`Running`}),`
`,(0,n.jsx)(r.p,{children:`Once built, the bot can be started with a single command. This page covers first launch, verifying the bot is online, and troubleshooting common problems.`}),`
`,(0,n.jsx)(r.h2,{children:`Start the bot`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`hljs language-bash`,children:`dotnet build && dotnet run
`})}),`
`,(0,n.jsxs)(r.p,{children:[`The `,(0,n.jsx)(r.code,{children:`dotnet run`}),` command compiles (if needed) and executes the project. The `,(0,n.jsx)(r.code,{children:`&&`}),` ensures the bot only runs if the build succeeds.`]}),`
`,(0,n.jsx)(r.h2,{children:`Configuration`}),`
`,(0,n.jsxs)(r.p,{children:[`Before running, the bot needs a `,(0,n.jsx)(r.code,{children:`DISCORD_TOKEN`}),`. Create a `,(0,n.jsx)(r.code,{children:`config.txt`}),` file in the project root with:`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`DISCORD_TOKEN=your_token_here
`})}),`
`,(0,n.jsxs)(r.p,{children:[`Replace `,(0,n.jsx)(r.code,{children:`your_token_here`}),` with the token copied from the Discord Developer Portal. See `,(0,n.jsx)(r.a,{href:`/configuration/sources`,children:`Configuration Sources`}),` for all available config options and file formats.`]}),`
`,(0,n.jsx)(r.h2,{children:`Startup sequence`}),`
`,(0,n.jsx)(r.p,{children:`On first run, the bot performs these steps in order:`}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Load configuration`}),` — reads from `,(0,n.jsx)(r.code,{children:`appsettings.json`}),`, environment variables, and `,(0,n.jsx)(r.code,{children:`config.txt`}),` (later overrides earlier).`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Initialize database`}),` — creates `,(0,n.jsx)(r.code,{children:`shiggybot.db`}),` in the output directory with tables `,(0,n.jsx)(r.code,{children:`TimedBans`}),`, `,(0,n.jsx)(r.code,{children:`DisabledCommands`}),`, and `,(0,n.jsx)(r.code,{children:`GuildConfig`}),`.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Create Discord client`}),` — configures gateway intents, log level, message cache.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Initialize features`}),` — creates all feature instances and wires their event handlers.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Connect to Discord`}),` — logs in with the bot token and connects to the gateway.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Start background services`}),` — arms the ban check scheduler, starts GitHub monitoring, begins presence rotation.`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:`Block indefinitely`}),` — `,(0,n.jsx)(r.code,{children:`Task.Delay(-1)`}),` keeps the process alive.`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{children:`Verifying the bot is online`}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`Open Discord and check that the bot appears `,(0,n.jsx)(r.strong,{children:`online`}),` (green dot) in the member list.`]}),`
`,(0,n.jsxs)(r.li,{children:[`In any channel the bot can see, type `,(0,n.jsx)(r.code,{children:`Sping`}),`.`]}),`
`,(0,n.jsx)(r.li,{children:`The bot should respond with its WebSocket latency.`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`If the bot responds, it is fully operational.`}),`
`,(0,n.jsx)(r.h2,{children:`Troubleshooting`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Symptom`}),(0,n.jsx)(r.th,{children:`Likely cause`}),(0,n.jsx)(r.th,{children:`Fix`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Bot stays offline (gray dot)`}),(0,n.jsx)(r.td,{children:`No token or invalid token`}),(0,n.jsxs)(r.td,{children:[`Check `,(0,n.jsx)(r.code,{children:`DISCORD_TOKEN`}),` in your config file. Verify the token was copied correctly from the Developer Portal.`]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Bot online but does not respond`}),(0,n.jsx)(r.td,{children:`Message Content Intent disabled`}),(0,n.jsxs)(r.td,{children:[`Go to Developer Portal > Bot > Privileged Gateway Intents > enable `,(0,n.jsx)(r.strong,{children:`Message Content Intent`}),`.`]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Commands not working after prefix change`}),(0,n.jsx)(r.td,{children:`Incorrect prefix`}),(0,n.jsxs)(r.td,{children:[`The default prefix is `,(0,n.jsx)(r.code,{children:`S`}),`. If you changed `,(0,n.jsx)(r.code,{children:`PREFIX`}),` in config, use the new prefix.`]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Database errors`}),(0,n.jsx)(r.td,{children:`No write permission in output directory`}),(0,n.jsxs)(r.td,{children:[`Ensure the directory where `,(0,n.jsx)(r.code,{children:`shiggybot.db`}),` is created has write permissions.`]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:`dotnet run`}),` fails`]}),(0,n.jsx)(r.td,{children:`Missing .NET 10 SDK`}),(0,n.jsxs)(r.td,{children:[`Run `,(0,n.jsx)(r.code,{children:`dotnet --version`}),` and verify it returns `,(0,n.jsx)(r.code,{children:`10.x.x`}),`.`]})]})]})]}),`
`,(0,n.jsx)(r.h2,{children:`Stopping the bot`}),`
`,(0,n.jsxs)(r.p,{children:[`Press `,(0,n.jsx)(r.code,{children:`Ctrl+C`}),` in the terminal where the bot is running. The process will terminate gracefully. Note that Discord.NET may take a few seconds to disconnect from the gateway.`]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(){return(0,n.jsx)(i,{})}export{a as default};