import{n as e,t}from"./index-B6UokVem.js";var n=e();function r(e){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`Architecture`}),`
`,(0,n.jsxs)(r.p,{children:[`ShiggyBot uses a flat, manually-wired architecture with no dependency injection container and no generic host. Every object is explicitly constructed in `,(0,n.jsx)(r.code,{children:`Program.cs`}),` and `,(0,n.jsx)(r.code,{children:`DiscordClientService`}),`.`]}),`
`,(0,n.jsx)(r.h2,{children:`Pages`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:`/architecture/entrypoint`,children:`Entrypoint`}),` — `,(0,n.jsx)(r.code,{children:`Program.cs`}),`, global handlers, service wiring`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:`/architecture/discord-client-service`,children:`Discord Client Service`}),` — the orchestrator, gateway config, startup sequence`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:`/architecture/command-system`,children:`Command System`}),` — prefix dispatch, command interface, registration`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:`/architecture/component-systems`,children:`Component Systems`}),` — V1 vs V2 message builders`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:`/architecture/features`,children:`Features`}),` — autorole, code previews, GitHub monitoring, and more`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:`/architecture/services`,children:`Services`}),` — BotConfig, DatabaseService, auxiliary services`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:`/architecture/database`,children:`Database`}),` — SQLite schema, conventions, single-connection model`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:`/architecture/utilities`,children:`Utilities`}),` — helper classes used across the codebase`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:`/architecture/config-system`,children:`Config System`}),` — how `,(0,n.jsx)(r.code,{children:`BotConfig`}),` loads and merges configuration`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:`/architecture/patterns`,children:`Key Patterns`}),` — ban check timer, caches, presence rotation, HttpClient usage, button dispatch`]}),`
`]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(){return(0,n.jsx)(i,{})}export{a as default};