import{n as e,t}from"./index-B6UokVem.js";var n=e();function r(e){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`Creating a Discord bot application`}),`
`,(0,n.jsx)(r.p,{children:`This page covers every step in the Discord Developer Portal — from creating the application to inviting the bot to your server.`}),`
`,(0,n.jsx)(r.h2,{children:`Step 1: Create a new application`}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`Go to the `,(0,n.jsx)(r.a,{href:`https://discord.com/developers/applications`,children:`Discord Developer Portal`}),`.`]}),`
`,(0,n.jsxs)(r.li,{children:[`Click `,(0,n.jsx)(r.strong,{children:`New Application`}),` in the top-right corner.`]}),`
`,(0,n.jsx)(r.li,{children:`Enter a name for your bot (this is not the bot's display name on servers — that is set separately).`}),`
`,(0,n.jsx)(r.li,{children:`Accept the Discord Developer Terms of Service and the Developer Policy.`}),`
`,(0,n.jsxs)(r.li,{children:[`Click `,(0,n.jsx)(r.strong,{children:`Create`}),`.`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{children:`Step 2: Configure the bot`}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`Navigate to the `,(0,n.jsx)(r.strong,{children:`Bot`}),` tab in the left sidebar.`]}),`
`,(0,n.jsxs)(r.li,{children:[`Click `,(0,n.jsx)(r.strong,{children:`Add Bot`}),` and confirm.`]}),`
`,(0,n.jsx)(r.li,{children:`Customize your bot's display name and avatar (optional).`}),`
`,(0,n.jsxs)(r.li,{children:[`Under `,(0,n.jsx)(r.strong,{children:`Token`}),`, click `,(0,n.jsx)(r.strong,{children:`Reset Token`}),` (or `,(0,n.jsx)(r.strong,{children:`Copy`}),` if it already exists). Store this token somewhere safe — you will need it for `,(0,n.jsx)(r.code,{children:`config.txt`}),` or `,(0,n.jsx)(r.code,{children:`appsettings.json`}),`. The token is shown only once.`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{children:`Privileged Gateway Intents`}),`
`,(0,n.jsx)(r.p,{children:`Two intents must be enabled for the bot to function:`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Intent`}),(0,n.jsx)(r.th,{children:`Required for`}),(0,n.jsx)(r.th,{children:`Must enable?`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`Message Content Intent`})}),(0,n.jsx)(r.td,{children:`Reading message text for prefix-based commands`}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.strong,{children:`Yes`}),` — bot will be online but will not respond without this`]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:`Server Members Intent`})}),(0,n.jsx)(r.td,{children:`Autorole on member join events`}),(0,n.jsxs)(r.td,{children:[`Optional — needed only if using `,(0,n.jsx)(r.code,{children:`WELCOME_ROLE_ID`})]})]})]})]}),`
`,(0,n.jsxs)(r.p,{children:[`Both are toggles under the `,(0,n.jsx)(r.strong,{children:`Privileged Gateway Intents`}),` section. You may need to verify your bot (if it is in 100+ servers) before enabling them.`]}),`
`,(0,n.jsx)(r.h2,{children:`Step 3: Invite the bot to a server`}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`Go to the `,(0,n.jsx)(r.strong,{children:`OAuth2 > URL Generator`}),` tab.`]}),`
`,(0,n.jsxs)(r.li,{children:[`Under `,(0,n.jsx)(r.strong,{children:`Scopes`}),`, check `,(0,n.jsx)(r.code,{children:`bot`}),` and `,(0,n.jsx)(r.code,{children:`applications.commands`}),`.`]}),`
`,(0,n.jsxs)(r.li,{children:[`Under `,(0,n.jsx)(r.strong,{children:`Bot Permissions`}),`, select:`]}),`
`]}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Permission`}),(0,n.jsx)(r.th,{children:`Reason`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Read Messages / View Channels`}),(0,n.jsx)(r.td,{children:`Basic operation`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Send Messages`}),(0,n.jsx)(r.td,{children:`Replying to commands`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Manage Messages`}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:`Spurge`}),` command`]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Embed Links`}),(0,n.jsx)(r.td,{children:`Commit previews, code previews, help embeds`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Attach Files`}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:`Smpreg`}),` image compositing`]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Read Message History`}),(0,n.jsx)(r.td,{children:`Command context`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Kick Members`}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:`Skick`}),` command`]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Ban Members`}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:`Sban`}),` (timed bans + unban)`]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Moderate Members`}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:`Stimeout`}),` command`]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Manage Roles`}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:`Saddrole`}),` / `,(0,n.jsx)(r.code,{children:`Sremoverole`})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Manage Channels`}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:`Snuke`}),` (clone + delete)`]})]})]})]}),`
`,(0,n.jsxs)(r.ol,{start:`4`,children:[`
`,(0,n.jsx)(r.li,{children:`Copy the generated URL at the bottom of the page.`}),`
`,(0,n.jsx)(r.li,{children:`Open the URL in your browser.`}),`
`,(0,n.jsxs)(r.li,{children:[`Select the server you want to add the bot to (you need the `,(0,n.jsx)(r.code,{children:`Manage Server`}),` permission in that server).`]}),`
`,(0,n.jsxs)(r.li,{children:[`Click `,(0,n.jsx)(r.strong,{children:`Authorize`}),` and complete the CAPTCHA.`]}),`
`]}),`
`,(0,n.jsx)(r.h2,{children:`Step 4: Verify the bot appears`}),`
`,(0,n.jsx)(r.p,{children:`Once invited, the bot will appear in the server's member list with an offline status. It will come online once configured and running.`}),`
`,(0,n.jsx)(r.h2,{children:`Troubleshooting`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Problem`}),(0,n.jsx)(r.th,{children:`Fix`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`"Bot requires code grant"`}),(0,n.jsxs)(r.td,{children:[`Disable `,(0,n.jsx)(r.strong,{children:`Requires OAuth2 Code Grant`}),` in the Bot tab`]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Bot not appearing in invite flow`}),(0,n.jsxs)(r.td,{children:[`Ensure `,(0,n.jsx)(r.code,{children:`bot`}),` scope is checked in the URL Generator`]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Wrong permissions granted`}),(0,n.jsx)(r.td,{children:`Regenerate the invite URL with correct permissions`})]})]})]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(){return(0,n.jsx)(i,{})}export{a as default};