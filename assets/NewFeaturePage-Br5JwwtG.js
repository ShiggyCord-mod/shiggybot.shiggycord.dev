import{n as e,t}from"./index-B6UokVem.js";var n=e();function r(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`New Feature`}),`
`,(0,n.jsx)(r.p,{children:`Features are event-driven behaviors that run outside the command dispatch system. This page covers adding a new feature.`}),`
`,(0,n.jsx)(r.h2,{children:`1. Create the feature class`}),`
`,(0,n.jsxs)(r.p,{children:[`Place it in `,(0,n.jsx)(r.code,{children:`Features/`}),`:`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`using`}),` Discord.WebSocket;

`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`namespace`}),` `,(0,n.jsx)(r.span,{className:`hljs-title`,children:`ShiggyBot.Features`}),`;

`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`internal`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`sealed`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`class`}),` `,(0,n.jsx)(r.span,{className:`hljs-title`,children:`MyFeature`}),`
{
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`readonly`}),` DiscordSocketClient _client;

    `,(0,n.jsxs)(r.span,{className:`hljs-function`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-title`,children:`MyFeature`}),`(`,(0,n.jsx)(r.span,{className:`hljs-params`,children:`DiscordSocketClient client`}),`)`]}),`
    {
        _client = client;
    }

    `,(0,n.jsxs)(r.span,{className:`hljs-function`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`void`}),` `,(0,n.jsx)(r.span,{className:`hljs-title`,children:`Start`}),`()`]}),`
    {
        _client.MessageReceived += OnMessageReceived;
    }

    `,(0,n.jsxs)(r.span,{className:`hljs-function`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`void`}),` `,(0,n.jsx)(r.span,{className:`hljs-title`,children:`Unregister`}),`()`]}),`
    {
        _client.MessageReceived -= OnMessageReceived;
    }

    `,(0,n.jsxs)(r.span,{className:`hljs-function`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`async`}),` Task `,(0,n.jsx)(r.span,{className:`hljs-title`,children:`OnMessageReceived`}),`(`,(0,n.jsx)(r.span,{className:`hljs-params`,children:`SocketMessage msg`}),`)`]}),`
    {
        `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// Feature logic`}),`
    }
}
`]})}),`
`,(0,n.jsx)(r.h2,{children:`2. Wire it in DiscordClientService`}),`
`,(0,n.jsx)(r.p,{children:`Add a field:`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` MyFeature? _myFeature;
`]})}),`
`,(0,n.jsxs)(r.p,{children:[`Initialize and start before `,(0,n.jsx)(r.code,{children:`ConnectAsync`}),`:`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[`_myFeature = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`new`}),` MyFeature(_client);
_myFeature.Start();
`]})}),`
`,(0,n.jsx)(r.p,{children:`Wire disposal:`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[(0,n.jsxs)(r.span,{className:`hljs-function`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`void`}),` `,(0,n.jsx)(r.span,{className:`hljs-title`,children:`Dispose`}),`()`]}),`
{
    _myFeature?.Unregister();
    `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// ... existing disposal`}),`
}
`]})}),`
`,(0,n.jsx)(r.h2,{children:`Feature lifecycle`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Phase`}),(0,n.jsx)(r.th,{children:`Method`}),(0,n.jsx)(r.th,{children:`When`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Construction`}),(0,n.jsx)(r.td,{children:`Constructor`}),(0,n.jsxs)(r.td,{children:[`Before `,(0,n.jsx)(r.code,{children:`ConnectAsync`})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Start`}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`Start()`})}),(0,n.jsx)(r.td,{children:`Registers event handlers`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Stop`}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`Unregister()`})}),(0,n.jsx)(r.td,{children:`Removes event handlers`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Dispose`}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`Dispose()`})}),(0,n.jsx)(r.td,{children:`Cleanup resources`})]})]})]}),`
`,(0,n.jsx)(r.h2,{children:`Event handler best practices`}),`
`,(0,n.jsx)(r.h3,{children:`Async void handlers`}),`
`,(0,n.jsxs)(r.p,{children:[`Discord.NET event handlers are `,(0,n.jsx)(r.code,{children:`async void`}),` (not `,(0,n.jsx)(r.code,{children:`async Task`}),`). Exceptions thrown in `,(0,n.jsx)(r.code,{children:`async void`}),` handlers crash the process. Always wrap handler bodies in `,(0,n.jsx)(r.code,{children:`try/catch`}),`:`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[(0,n.jsxs)(r.span,{className:`hljs-function`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`private`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`async`}),` Task `,(0,n.jsx)(r.span,{className:`hljs-title`,children:`OnMessageReceived`}),`(`,(0,n.jsx)(r.span,{className:`hljs-params`,children:`SocketMessage msg`}),`)`]}),`
{
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`try`}),`
    {
        `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// Feature logic`}),`
    }
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`catch`}),` (Exception ex)
    {
        Console.Error.WriteLine(`,(0,n.jsxs)(r.span,{className:`hljs-string`,children:[`$"MyFeature error: `,(0,n.jsx)(r.span,{className:`hljs-subst`,children:`{ex.Message}`}),`"`]}),`);
    }
}
`]})}),`
`,(0,n.jsx)(r.h3,{children:`Fire-and-forget safety`}),`
`,(0,n.jsxs)(r.p,{children:[`If you invoke a handler via fire-and-forget (e.g., `,(0,n.jsx)(r.code,{children:`_ = handler(args)`}),`), wrap the lambda:`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[`_ = Task.Run(`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`async`}),` () =>
{
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`try`}),`
    {
        `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`await`}),` handler(`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`args`}),`);
    }
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`catch`}),` (Exception ex)
    {
        Console.Error.WriteLine(`,(0,n.jsxs)(r.span,{className:`hljs-string`,children:[`$"Handler error: `,(0,n.jsx)(r.span,{className:`hljs-subst`,children:`{ex.Message}`}),`"`]}),`);
    }
});
`]})}),`
`,(0,n.jsxs)(r.p,{children:[`This prevents unobserved task exceptions from triggering `,(0,n.jsx)(r.code,{children:`TaskScheduler.UnobservedTaskException`}),`.`]}),`
`,(0,n.jsx)(r.h2,{children:`Feature vs command`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{children:`Feature`}),(0,n.jsx)(r.th,{children:`Command`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Activation`}),(0,n.jsx)(r.td,{children:`Event-driven`}),(0,n.jsx)(r.td,{children:`Message prefix + name`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`File location`}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`Features/`})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`Commands/<Category>/`})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Registration`}),(0,n.jsxs)(r.td,{children:[`Wire in `,(0,n.jsx)(r.code,{children:`DiscordClientService`})]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`CommandHandler.RegisterCommands()`})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Lifecycle`}),(0,n.jsx)(r.td,{children:`Start/Stop/Dispose`}),(0,n.jsx)(r.td,{children:`Stateless (one instance per command)`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Response`}),(0,n.jsx)(r.td,{children:`May not respond directly`}),(0,n.jsx)(r.td,{children:`Always responds`})]})]})]}),`
`,(0,n.jsxs)(r.p,{children:[`If your new behavior is triggered by a user message with a specific prefix, it should be a `,(0,n.jsx)(r.strong,{children:`command`}),`, not a feature.`]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(){return(0,n.jsx)(i,{})}export{a as default};