import{n as e,t}from"./index-B6UokVem.js";var n=e();function r(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`Component Systems`}),`
`,(0,n.jsx)(r.p,{children:`ShiggyBot has two parallel message component systems: V1 (legacy) and V2 (Discord's Components V2 format). Commands are assigned to one system based on which client is available.`}),`
`,(0,n.jsx)(r.h2,{children:`V1 (Components/V1/)`}),`
`,(0,n.jsxs)(r.p,{children:[`The V1 system uses Discord's traditional embed and component format. Messages are sent via direct REST API calls (`,(0,n.jsx)(r.code,{children:`discord.com/api/v10`}),`) rather than through Discord.NET's built-in send methods.`]}),`
`,(0,n.jsx)(r.h3,{children:`Key types`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Type`}),(0,n.jsx)(r.th,{children:`Purpose`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`V1MessageBuilder`})}),(0,n.jsx)(r.td,{children:`Top-level message container`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`V1EmbedBuilder`})}),(0,n.jsx)(r.td,{children:`Embed with title, description, fields, color`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`V1ButtonBuilder`})}),(0,n.jsx)(r.td,{children:`Button with custom ID, label, style, emoji`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`V1SelectMenuBuilder`})}),(0,n.jsx)(r.td,{children:`Dropdown menu with options`})]})]})]}),`
`,(0,n.jsx)(r.h3,{children:`V1MessageBuilder usage`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[`V1MessageBuilder builder = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` V1MessageBuilder()
    .AddEmbed(`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` V1EmbedBuilder()
        .WithTitle(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Hello"`}),`)
        .WithDescription(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"World"`}),`)
        .WithColor(V1EmbedBuilder.ColorPrimary))
    .AddButton(`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` V1ButtonBuilder()
        .WithCustomId(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"my_button"`}),`)
        .WithLabel(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Click me"`}),`)
        .WithStyle(V1ButtonStyle.Primary));

`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`await`}),` _v1Client.SendMessageAsync(channelId, builder);
`]})}),`
`,(0,n.jsx)(r.h3,{children:`V1EmbedBuilder present colors`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Constant`}),(0,n.jsx)(r.th,{children:`Hex`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`ColorPrimary`})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`#D7B9AE`})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`ColorSuccess`})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`#4CAF50`})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`ColorError`})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`#F44336`})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`ColorWarning`})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`#FF9800`})})]})]})]}),`
`,(0,n.jsx)(r.h2,{children:`V2 (Components/V2/)`}),`
`,(0,n.jsx)(r.p,{children:`The V2 system uses Discord's newer Components V2 format, which supports rich layouts: colored containers, text displays, media galleries, separators, and thumbnails.`}),`
`,(0,n.jsxs)(r.p,{children:[`Messages are flagged with `,(0,n.jsx)(r.code,{children:`1 << 15`}),` in the message flags to indicate V2 format.`]}),`
`,(0,n.jsx)(r.h3,{children:`Key types`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Type`}),(0,n.jsx)(r.th,{children:`Purpose`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`ContainerBuilder`})}),(0,n.jsx)(r.td,{children:`Colored section container (header background)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`SectionBuilder`})}),(0,n.jsx)(r.td,{children:`Grouped component section`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`TextDisplayBuilder`})}),(0,n.jsx)(r.td,{children:`Formatted text block with markdown`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`MediaGalleryBuilder`})}),(0,n.jsx)(r.td,{children:`Image/media gallery`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`ThumbnailBuilder`})}),(0,n.jsx)(r.td,{children:`Thumbnail image`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`SeparatorBuilder`})}),(0,n.jsx)(r.td,{children:`Visual divider`})]})]})]}),`
`,(0,n.jsx)(r.h3,{children:`V2MessageBuilder usage`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[`V2MessageBuilder builder = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` V2MessageBuilder()
    .AddContainer(`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` ContainerBuilder()
        .WithAccentColor(V2ContainerColor.Primary)
        .AddSection(`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` SectionBuilder()
            .AddTextDisplay(`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` TextDisplayBuilder()
                .WithContent(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Hello World"`}),`))));

`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`await`}),` _v2Client.SendMessageAsync(channelId, builder);
`]})}),`
`,(0,n.jsx)(r.h3,{children:`Ambiguity warning`}),`
`,(0,n.jsxs)(r.p,{children:[`Discord.Net 3.20.1 ships its own `,(0,n.jsx)(r.code,{children:`ContainerBuilder`}),`, `,(0,n.jsx)(r.code,{children:`SectionBuilder`}),`, and `,(0,n.jsx)(r.code,{children:`TextDisplayBuilder`}),` under the `,(0,n.jsx)(r.code,{children:`Discord`}),` namespace. Files importing both `,(0,n.jsx)(r.code,{children:`using Discord;`}),` and `,(0,n.jsx)(r.code,{children:`using ShiggyBot.Components.V2;`}),` will have ambiguous type references.`]}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:`Fix:`}),` Use `,(0,n.jsx)(r.code,{children:`global::Discord.`}),` qualification:`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`using`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`global`}),`::Discord.ContainerBuilder;
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`using`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`global`}),`::Discord.SectionBuilder;
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`using`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`global`}),`::Discord.TextDisplayBuilder;
`]})}),`
`,(0,n.jsx)(r.p,{children:`Or use using-aliases:`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`using`}),` DiscordContainerBuilder = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`global`}),`::Discord.ContainerBuilder;
`]})}),`
`,(0,n.jsx)(r.h2,{children:`Selection criteria`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Factor`}),(0,n.jsx)(r.th,{children:`V1`}),(0,n.jsx)(r.th,{children:`V2`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Format`}),(0,n.jsx)(r.td,{children:`Traditional embeds + components`}),(0,n.jsx)(r.td,{children:`Containers, sections, galleries`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Complexity`}),(0,n.jsx)(r.td,{children:`Lower`}),(0,n.jsx)(r.td,{children:`Higher`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Rich layout`}),(0,n.jsx)(r.td,{children:`No (embeds only)`}),(0,n.jsx)(r.td,{children:`Yes (colored containers)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Client type`}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`ComponentsV1Client`})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`ComponentsV2Client`})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Flag`}),(0,n.jsx)(r.td,{children:`Standard`}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`1 << 15`})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Good for`}),(0,n.jsx)(r.td,{children:`Simple commands, modals`}),(0,n.jsx)(r.td,{children:`Rich formatted messages, help menus`})]})]})]}),`
`,(0,n.jsx)(r.h2,{children:`Why both?`}),`
`,(0,n.jsx)(r.p,{children:`V2 components are newer and not all Discord clients support them. V1 is the fallback for commands that don't need V2's rich layout features. The dual system will likely converge to V2-only in the future.`})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(){return(0,n.jsx)(i,{})}export{a as default};