import{n as e,t}from"./index-B6UokVem.js";var n=e();function r(e){let r={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`Configuration Sources`}),`
`,(0,n.jsxs)(r.p,{children:[`The `,(0,n.jsx)(r.code,{children:`BotConfig.LoadFromConfiguration()`}),` method reads configuration from three sources in a specific order. Later sources override earlier ones.`]}),`
`,(0,n.jsx)(r.h2,{children:`Loading order`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`1. appsettings.json          (gitignored, project root)
2. Environment variables     (process environment)
3. config.txt                (INI-style, working directory)
`})}),`
`,(0,n.jsxs)(r.p,{children:[`After reading all three sources, `,(0,n.jsx)(r.code,{children:`DISCORD_TOKEN`}),` and `,(0,n.jsx)(r.code,{children:`PREFIX`}),` have an additional fallback: `,(0,n.jsx)(r.code,{children:`Environment.GetEnvironmentVariable()`}),` is called again directly, providing a last-resort for Docker and CI environments.`]}),`
`,(0,n.jsx)(r.h2,{children:`appsettings.json`}),`
`,(0,n.jsx)(r.p,{children:`A JSON file in the project root directory. It is gitignored so real tokens are not committed.`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-json`,children:[(0,n.jsx)(r.span,{className:`hljs-punctuation`,children:`{`}),`
  `,(0,n.jsx)(r.span,{className:`hljs-attr`,children:`"DISCORD_TOKEN"`}),(0,n.jsx)(r.span,{className:`hljs-punctuation`,children:`:`}),` `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"your_token_here"`}),(0,n.jsx)(r.span,{className:`hljs-punctuation`,children:`,`}),`
  `,(0,n.jsx)(r.span,{className:`hljs-attr`,children:`"PREFIX"`}),(0,n.jsx)(r.span,{className:`hljs-punctuation`,children:`:`}),` `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"S"`}),(0,n.jsx)(r.span,{className:`hljs-punctuation`,children:`,`}),`
  `,(0,n.jsx)(r.span,{className:`hljs-attr`,children:`"PRESENCE_STATUS"`}),(0,n.jsx)(r.span,{className:`hljs-punctuation`,children:`:`}),` `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"online"`}),`
`,(0,n.jsx)(r.span,{className:`hljs-punctuation`,children:`}`}),`
`]})}),`
`,(0,n.jsxs)(r.p,{children:[`The file uses `,(0,n.jsx)(r.code,{children:`System.Text.Json`}),` for deserialization. All keys are case-sensitive.`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Path:`}),` `,(0,n.jsx)(r.code,{children:`appsettings.json`}),` in the working directory.`]}),`
`,(0,n.jsx)(r.h2,{children:`Environment variables`}),`
`,(0,n.jsx)(r.p,{children:`Each config key can be set as an operating system environment variable:`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-bash`,children:[(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`export`}),` DISCORD_TOKEN=your_token_here
`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`export`}),` PREFIX=S
`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`export`}),` PRESENCE_STATUS=dnd
`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`export`}),` GITHUB_TOKEN=ghp_xxxxxxxxxxxx
`]})}),`
`,(0,n.jsxs)(r.p,{children:[`Environment variables are read via `,(0,n.jsx)(r.code,{children:`Environment.GetEnvironmentVariable()`}),`. This is the recommended method for Docker, CI/CD, and production deployments.`]}),`
`,(0,n.jsx)(r.h2,{children:`config.txt`}),`
`,(0,n.jsx)(r.p,{children:`An INI-style file placed next to the executable. Each non-empty, non-comment line is treated as a key-value pair:`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`# Discord bot token
DISCORD_TOKEN=your_token_here

# Command prefix
PREFIX=S
`})}),`
`,(0,n.jsx)(r.h3,{children:`Parsing rules`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Rule`}),(0,n.jsx)(r.th,{children:`Detail`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Comments`}),(0,n.jsxs)(r.td,{children:[`Lines starting with `,(0,n.jsx)(r.code,{children:`#`}),` are ignored (leading whitespace is NOT trimmed)`]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Key-value separator`}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:`Split('=', 2)`}),` — split only on the first `,(0,n.jsx)(r.code,{children:`=`})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Whitespace`}),(0,n.jsx)(r.td,{children:`NOT trimmed from keys or values`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Blank lines`}),(0,n.jsx)(r.td,{children:`Skipped`})]})]})]}),`
`,(0,n.jsx)(r.h3,{children:`Gotcha: values containing =`}),`
`,(0,n.jsxs)(r.p,{children:[`The parser uses `,(0,n.jsx)(r.code,{children:`string.Split('=', 2)`}),`, which splits only on the `,(0,n.jsx)(r.strong,{children:`first`}),` `,(0,n.jsx)(r.code,{children:`=`}),` character. Any `,(0,n.jsx)(r.code,{children:`=`}),` in the value portion is preserved:`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`TOKEN=abc=def   → parsed as "abc=def" ✓
`})}),`
`,(0,n.jsxs)(r.p,{children:[`Wait — this contradicts the AGENTS.md which says values are `,(0,n.jsx)(r.em,{children:`truncated`}),` at the first `,(0,n.jsx)(r.code,{children:`=`}),`. Let me verify: `,(0,n.jsx)(r.code,{children:`"abc=def".Split('=', 2)`}),` produces `,(0,n.jsx)(r.code,{children:`["abc", "def"]`}),`. So `,(0,n.jsx)(r.code,{children:`=`}),` in the value is actually fine. The truncation issue is for something else.`]}),`
`,(0,n.jsxs)(r.p,{children:[`Actually, re-reading: `,(0,n.jsx)(r.code,{children:`Split('=', 2)`}),` with `,(0,n.jsx)(r.code,{children:`StringSplitOptions.None`}),` on `,(0,n.jsx)(r.code,{children:`"abc=def=ghi"`}),` produces `,(0,n.jsx)(r.code,{children:`["abc", "def=ghi"]`}),`. So the value part preserves everything after the first `,(0,n.jsx)(r.code,{children:`=`}),`. Values containing `,(0,n.jsx)(r.code,{children:`=`}),` are NOT truncated — this is a documented misconception. The `,(0,n.jsx)(r.code,{children:`Split(count: 2)`}),` overload keeps all subsequent `,(0,n.jsx)(r.code,{children:`=`}),` in the value.`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Correction from AGENTS.md:`}),` The AGENTS.md states "Values containing `,(0,n.jsx)(r.code,{children:`=`}),` are truncated" — this appears to be incorrect. The parser preserves everything after the first `,(0,n.jsx)(r.code,{children:`=`}),`. Use `,(0,n.jsx)(r.code,{children:`appsettings.json`}),` for values with `,(0,n.jsx)(r.code,{children:`=`}),` if you encounter issues.`]}),`
`,(0,n.jsx)(r.h3,{children:`Location`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`config.txt`}),` is loaded from the working directory (not the executable directory). For published single-file deployments, place it next to the `,(0,n.jsx)(r.code,{children:`ShiggyBot`}),` binary.`]}),`
`,(0,n.jsx)(r.h2,{children:`How BotConfig.LoadFromConfiguration works`}),`
`,(0,n.jsx)(r.p,{children:`The method follows this flow:`}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`Deserialize `,(0,n.jsx)(r.code,{children:`appsettings.json`}),` using `,(0,n.jsx)(r.code,{children:`System.Text.Json`}),`.`]}),`
`,(0,n.jsx)(r.li,{children:`Read environment variables for each known key.`}),`
`,(0,n.jsxs)(r.li,{children:[`Parse `,(0,n.jsx)(r.code,{children:`config.txt`}),` line by line.`]}),`
`,(0,n.jsxs)(r.li,{children:[`Check the deserialized settings object. If not found, check environment variables. If not found, check `,(0,n.jsx)(r.code,{children:`config.txt`}),`. If still not found, apply default or fallback.`]}),`
`,(0,n.jsxs)(r.li,{children:[`For `,(0,n.jsx)(r.code,{children:`DISCORD_TOKEN`}),` and `,(0,n.jsx)(r.code,{children:`PREFIX`}),` specifically, call `,(0,n.jsx)(r.code,{children:`Environment.GetEnvironmentVariable()`}),` as a final fallback.`]}),`
`]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(){return(0,n.jsx)(i,{})}export{a as default};