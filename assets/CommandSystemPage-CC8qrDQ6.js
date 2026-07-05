import{n as e,t}from"./index-B6UokVem.js";var n=e();function r(e){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`Command System`}),`
`,(0,n.jsx)(r.p,{children:`The command system handles prefix detection, permission checking, guild gating, and command execution.`}),`
`,(0,n.jsx)(r.h2,{children:`CommandHandler`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`CommandHandler`}),` is the central dispatch class. It is initialized with references to the Discord client, the V1 and V2 component clients, the database service, and the bot configuration.`]}),`
`,(0,n.jsx)(r.h3,{children:`Dispatch flow`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:`User sends "Sping"
1. Prefix check: message starts with "S"? Yes → continue
2. Extract command name: "ping"
3. Lookup: find ICommand with Name or Alias matching "PING" (upper-invariant)
4. Permission check: user has required guild permission?
5. Guild gating: is "ping" disabled for this guild?
6. Parse arguments: split remainder into string[] args
7. Execute: call ICommand.ExecuteAsync()
`})}),`
`,(0,n.jsx)(r.h3,{children:`Prefix check`}),`
`,(0,n.jsxs)(r.p,{children:[`The check is simple: `,(0,n.jsx)(r.code,{children:`message.Content.StartsWith(_config.Prefix, StringComparison.CurrentCultureIgnoreCase)`}),`. If false, the message is ignored entirely.`]}),`
`,(0,n.jsx)(r.h3,{children:`Case-insensitive matching`}),`
`,(0,n.jsxs)(r.p,{children:[`Commands are stored in a `,(0,n.jsx)(r.code,{children:`ConcurrentDictionary<string, ICommand>`}),` with upper-invariant keys:`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[`_dict.TryGetValue(commandName.ToUpperInvariant(), `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`out`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`var`}),` command);
`]})}),`
`,(0,n.jsxs)(r.p,{children:[`This means `,(0,n.jsx)(r.code,{children:`Sping`}),`, `,(0,n.jsx)(r.code,{children:`SPING`}),`, `,(0,n.jsx)(r.code,{children:`sping`}),`, and `,(0,n.jsx)(r.code,{children:`SpInG`}),` all match the same command.`]}),`
`,(0,n.jsx)(r.h3,{children:`Permission check`}),`
`,(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:`ICommand`}),` has an optional `,(0,n.jsx)(r.code,{children:`RequiredPermission`}),` property:`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`hljs language-csharp`,children:`GuildPermission? RequiredPermission => GuildPermission.Administrator;
`})}),`
`,(0,n.jsxs)(r.p,{children:[`The handler checks `,(0,n.jsx)(r.code,{children:`((SocketGuildUser)message.Author).GuildPermissions.Has(permission)`}),`. If the user lacks the permission, execution is silently skipped (no error message).`]}),`
`,(0,n.jsx)(r.h3,{children:`Guild gating`}),`
`,(0,n.jsxs)(r.p,{children:[`Before execution, the handler checks `,(0,n.jsx)(r.code,{children:`DatabaseService.IsCommandDisabledAsync(guildId, commandName)`}),`. If the command is disabled for that guild, execution is skipped.`]}),`
`,(0,n.jsxs)(r.p,{children:[`Commands can be toggled on/off per guild using `,(0,n.jsx)(r.code,{children:`Sdisable`}),` and `,(0,n.jsx)(r.code,{children:`Senable`}),`. See `,(0,n.jsx)(r.a,{href:`/architecture/database`,children:`Database`}),` for the schema.`]}),`
`,(0,n.jsx)(r.h2,{children:`ICommand interface`}),`
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
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Member`}),(0,n.jsx)(r.th,{children:`Purpose`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`Name`})}),(0,n.jsx)(r.td,{children:`Primary command name used for dispatch lookup`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`Description`})}),(0,n.jsx)(r.td,{children:`Shown in help text`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`Category`})}),(0,n.jsx)(r.td,{children:`Grouping category for help menu`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`Aliases`})}),(0,n.jsxs)(r.td,{children:[`Alternative names (e.g., `,(0,n.jsx)(r.code,{children:`["g", "search"]`}),` for `,(0,n.jsx)(r.code,{children:`google`}),`)`]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`RequiredPermission`})}),(0,n.jsx)(r.td,{children:`Optional guild permission requirement`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`ExecuteAsync`})}),(0,n.jsx)(r.td,{children:`The command logic`})]})]})]}),`
`,(0,n.jsx)(r.h2,{children:`Command registration`}),`
`,(0,n.jsxs)(r.p,{children:[`Commands are registered in `,(0,n.jsx)(r.code,{children:`CommandHandler.RegisterCommands()`}),`:`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[(0,n.jsxs)(r.span,{className:`hljs-function`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`void`}),` `,(0,n.jsx)(r.span,{className:`hljs-title`,children:`RegisterCommands`}),`()`]}),`
{
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`if`}),` (_v1Client `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`is`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`not`}),` `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`null`}),`)
    {
        Register(`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` PingCommand());
        Register(`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` NoteCommand());
        Register(`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` KickCommand());
        `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// ... V1-only commands`}),`
    }

    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`if`}),` (_v2Client `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`is`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`not`}),` `,(0,n.jsx)(r.span,{className:`hljs-literal`,children:`null`}),`)
    {
        Register(`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` HelpCommand());
        Register(`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` PluginCommand());
        Register(`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` TimeoutCommand());
        Register(`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` BanCommand());
        `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// ... V2-only commands`}),`
    }
}
`]})}),`
`,(0,n.jsxs)(r.p,{children:[`Commands are conditionally registered based on which component client is available. If the Discord token is null or empty, both clients are null and `,(0,n.jsx)(r.strong,{children:`no commands are registered`}),` — the bot connects but does nothing.`]}),`
`,(0,n.jsx)(r.h3,{children:`V1 commands`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Command`}),(0,n.jsx)(r.th,{children:`Category`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`Sping`})}),(0,n.jsx)(r.td,{children:`Utility`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`Snote`})}),(0,n.jsx)(r.td,{children:`Utility`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`Skick`})}),(0,n.jsx)(r.td,{children:`Moderation`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`Spurge`})}),(0,n.jsx)(r.td,{children:`Moderation`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`Snuke`})}),(0,n.jsx)(r.td,{children:`Moderation`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`Saddrole`})}),(0,n.jsx)(r.td,{children:`Moderation`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`Sremoverole`})}),(0,n.jsx)(r.td,{children:`Moderation`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`Sdisable`})}),(0,n.jsx)(r.td,{children:`Moderation`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`Senable`})}),(0,n.jsx)(r.td,{children:`Moderation`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`Ssetwelcome`})}),(0,n.jsx)(r.td,{children:`Core`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`Sgoogle`})}),(0,n.jsx)(r.td,{children:`Search`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`Smpreg`})}),(0,n.jsx)(r.td,{children:`Fun`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`Sv1`})}),(0,n.jsx)(r.td,{children:`Developer`})]})]})]}),`
`,(0,n.jsx)(r.h3,{children:`V2 commands`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Command`}),(0,n.jsx)(r.th,{children:`Category`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`Shelp`})}),(0,n.jsx)(r.td,{children:`Utility`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`Splugin`})}),(0,n.jsx)(r.td,{children:`Search`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`Stimeout`})}),(0,n.jsx)(r.td,{children:`Moderation`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`Sban`})}),(0,n.jsx)(r.td,{children:`Moderation`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`Sv2`})}),(0,n.jsx)(r.td,{children:`Developer`})]})]})]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(){return(0,n.jsx)(i,{})}export{a as default};