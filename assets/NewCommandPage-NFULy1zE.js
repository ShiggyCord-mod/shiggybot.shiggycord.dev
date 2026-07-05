import{n as e,t}from"./index-B6UokVem.js";var n=e();function r(e){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,span:`span`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`New Command`}),`
`,(0,n.jsx)(r.p,{children:`This page walks through creating a new command from scratch.`}),`
`,(0,n.jsx)(r.h2,{children:`1. Choose your component system`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{children:`V1`}),(0,n.jsx)(r.th,{children:`V2`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Format`}),(0,n.jsx)(r.td,{children:`Traditional embeds + components`}),(0,n.jsx)(r.td,{children:`Colored containers, sections, galleries`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Builder`}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`V1MessageBuilder`})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`V2MessageBuilder`})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Client`}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`ComponentsV1Client`})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`ComponentsV2Client`})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Flag`}),(0,n.jsx)(r.td,{children:`Standard`}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.code,{children:`1 << 15`}),` in message flags`]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Good for`}),(0,n.jsx)(r.td,{children:`Simple responses, buttons, embeds`}),(0,n.jsx)(r.td,{children:`Rich formatted messages`})]})]})]}),`
`,(0,n.jsxs)(r.p,{children:[`V1 is simpler and more widely supported. V2 provides richer layouts. See `,(0,n.jsx)(r.a,{href:`/architecture/component-systems`,children:`Component Systems`}),` for details.`]}),`
`,(0,n.jsx)(r.h2,{children:`2. Create the command class`}),`
`,(0,n.jsxs)(r.p,{children:[`Implement `,(0,n.jsx)(r.code,{children:`ICommand`}),` in `,(0,n.jsx)(r.code,{children:`Commands/<Category>/`}),`:`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`using`}),` Discord.WebSocket;
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`using`}),` ShiggyBot.Commands;

`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`namespace`}),` `,(0,n.jsx)(r.span,{className:`hljs-title`,children:`ShiggyBot.Commands.Utility`}),`;

`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`internal`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`sealed`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`class`}),` `,(0,n.jsx)(r.span,{className:`hljs-title`,children:`FooCommand`}),` : `,(0,n.jsx)(r.span,{className:`hljs-title`,children:`ICommand`}),`
{
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`string`}),` Name => `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"foo"`}),`;
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`string`}),` Description => `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Does something useful"`}),`;
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`string`}),` Category => `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Utility"`}),`;
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` IReadOnlyList<`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`string`}),`> Aliases => Array.Empty<`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`string`}),`>();

    `,(0,n.jsxs)(r.span,{className:`hljs-function`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`async`}),` Task `,(0,n.jsx)(r.span,{className:`hljs-title`,children:`ExecuteAsync`}),`(`,(0,n.jsxs)(r.span,{className:`hljs-params`,children:[`SocketUserMessage message, `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`string`}),`[] `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`args`}),`, DiscordSocketClient client`]}),`)`]}),`
    {
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`await`}),` message.Channel.SendMessageAsync(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Hello from foo!"`}),`);
    }
}
`]})}),`
`,(0,n.jsx)(r.h3,{children:`ICommand interface reference`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`interface`}),` `,(0,n.jsx)(r.span,{className:`hljs-title`,children:`ICommand`}),`
{
    `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`string`}),` Name { `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`get`}),`; }
    `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`string`}),` Description { `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`get`}),`; }
    `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`string`}),` Category { `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`get`}),`; }
    IReadOnlyList<`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`string`}),`> Aliases { `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`get`}),`; }
    GuildPermission? RequiredPermission { `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`get`}),`; }

    `,(0,n.jsxs)(r.span,{className:`hljs-function`,children:[`Task `,(0,n.jsx)(r.span,{className:`hljs-title`,children:`ExecuteAsync`}),`(`,(0,n.jsxs)(r.span,{className:`hljs-params`,children:[`SocketUserMessage message, `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`string`}),`[] `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`args`}),`, DiscordSocketClient client`]}),`)`]}),`;
}
`]})}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Member`}),(0,n.jsx)(r.th,{children:`Purpose`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`Name`})}),(0,n.jsx)(r.td,{children:`Primary dispatch name (case-insensitive)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`Description`})}),(0,n.jsxs)(r.td,{children:[`Shown in `,(0,n.jsx)(r.code,{children:`Shelp`}),` output`]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`Category`})}),(0,n.jsx)(r.td,{children:`Groups commands in help menu`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`Aliases`})}),(0,n.jsxs)(r.td,{children:[`Alternative names (e.g., `,(0,n.jsx)(r.code,{children:`["g", "search"]`}),` for google)`]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`RequiredPermission`})}),(0,n.jsx)(r.td,{children:`If set, the user must have this guild permission`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`ExecuteAsync`})}),(0,n.jsxs)(r.td,{children:[`The command body. `,(0,n.jsx)(r.code,{children:`args`}),` is the message split by spaces after the command name.`]})]})]})]}),`
`,(0,n.jsx)(r.h2,{children:`3. Register the command`}),`
`,(0,n.jsxs)(r.p,{children:[`In `,(0,n.jsx)(r.code,{children:`CommandHandler.RegisterCommands()`}),`, add your command to the appropriate client block:`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// V1 command`}),`
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`if`}),` (_v1Client `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`is`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`not`}),` `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`null`}),`)
{
    Register(`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` FooCommand());
}

`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// V2 command`}),`
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`if`}),` (_v2Client `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`is`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`not`}),` `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`null`}),`)
{
    Register(`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` BarCommand());
}
`]})}),`
`,(0,n.jsxs)(r.p,{children:[`The `,(0,n.jsx)(r.code,{children:`Register()`}),` method adds the command's name and aliases to the dispatch dictionary:`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[(0,n.jsxs)(r.span,{className:`hljs-function`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`void`}),` `,(0,n.jsx)(r.span,{className:`hljs-title`,children:`Register`}),`(`,(0,n.jsx)(r.span,{className:`hljs-params`,children:`ICommand command`}),`)`]}),`
{
    _commands[command.Name.ToUpperInvariant()] = command;
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`foreach`}),` (`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`var`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`alias`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`in`}),` command.Aliases)
    {
        _commands[`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`alias`}),`.ToUpperInvariant()] = command;
    }
}
`]})}),`
`,(0,n.jsx)(r.h2,{children:`4. Build the response`}),`
`,(0,n.jsx)(r.h3,{children:`V1 response`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[`V1MessageBuilder builder = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` V1MessageBuilder()
    .AddEmbed(`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` V1EmbedBuilder()
        .WithTitle(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Result"`}),`)
        .WithDescription(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Operation completed successfully."`}),`)
        .WithColor(V1EmbedBuilder.ColorSuccess))
    .AddButton(`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` V1ButtonBuilder()
        .WithCustomId(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"confirm"`}),`)
        .WithLabel(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Confirm"`}),`)
        .WithStyle(V1ButtonStyle.Primary));

`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`await`}),` _v1Client.SendMessageAsync(message.Channel.Id, builder);
`]})}),`
`,(0,n.jsx)(r.h3,{children:`V2 response`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[`V2MessageBuilder builder = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` V2MessageBuilder()
    .AddContainer(`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` ContainerBuilder()
        .WithAccentColor(V2ContainerColor.Primary)
        .AddSection(`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` SectionBuilder()
            .AddTextDisplay(`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` TextDisplayBuilder()
                .WithContent(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Hello from V2!"`}),`))));

`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`await`}),` _v2Client.SendMessageAsync(message.Channel.Id, builder);
`]})}),`
`,(0,n.jsx)(r.h2,{children:`5. Add reply-to support`}),`
`,(0,n.jsx)(r.p,{children:`Many moderation commands support replying to a message to target its author. Pattern:`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[`SocketUser? target = message.ReferencedMessage?.Author;

`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`if`}),` (target `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`is`}),` `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`null`}),` && `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`args`}),`.Length > `,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`)
{
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// Try parsing from args: mention (<@123>), raw ID (123), or name`}),`
    target = ParseUserFromArgs(`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`args`}),`[`,(0,n.jsx)(r.span,{className:`hljs-number`,children:`0`}),`], message, client);
}

`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`if`}),` (target `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`is`}),` `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`null`}),`)
{
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`await`}),` message.Channel.SendMessageAsync(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"Please reply to a user or specify one."`}),`);
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),`;
}

`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// Use target`}),`
`]})}),`
`,(0,n.jsx)(r.h2,{children:`6. Add permission requirements`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` GuildPermission? RequiredPermission => GuildPermission.Administrator;
`]})}),`
`,(0,n.jsxs)(r.p,{children:[`The permission is checked in `,(0,n.jsx)(r.code,{children:`CommandHandler`}),`. If the user lacks it, execution is silently skipped.`]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(){return(0,n.jsx)(i,{})}export{a as default};