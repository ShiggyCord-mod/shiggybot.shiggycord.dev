import{n as e,t}from"./index-B6UokVem.js";var n=e();function r(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,span:`span`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`New Data`}),`
`,(0,n.jsx)(r.p,{children:`This page covers extending the database with new tables and query methods.`}),`
`,(0,n.jsx)(r.h2,{children:`1. Add a table`}),`
`,(0,n.jsxs)(r.p,{children:[`In `,(0,n.jsx)(r.code,{children:`DatabaseService.InitializeAsync()`}),`, add a `,(0,n.jsx)(r.code,{children:`CREATE TABLE IF NOT EXISTS`}),` statement:`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`await`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`using`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`var`}),` cmd = _connection.CreateCommand();
cmd.CommandText = `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"""
    CREATE TABLE IF NOT EXISTS MyData (
        Id INTEGER PRIMARY KEY AUTOINCREMENT,
        GuildId TEXT NOT NULL,
        Key TEXT NOT NULL,
        Value TEXT,
        CreatedAt TEXT NOT NULL
    )
    """`}),`;
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`await`}),` cmd.ExecuteNonQueryAsync();
`]})}),`
`,(0,n.jsx)(r.h2,{children:`2. Add query methods`}),`
`,(0,n.jsxs)(r.p,{children:[`Add methods to `,(0,n.jsx)(r.code,{children:`DatabaseService`}),`:`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[(0,n.jsxs)(r.span,{className:`hljs-function`,children:[(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`async`}),` Task `,(0,n.jsx)(r.span,{className:`hljs-title`,children:`InsertMyDataAsync`}),`(`,(0,n.jsxs)(r.span,{className:`hljs-params`,children:[(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`ulong`}),` guildId, `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`string`}),` key, `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`string`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`value`})]}),`)`]}),`
{
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`await`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`using`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`var`}),` cmd = _connection.CreateCommand();
    cmd.CommandText = `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"""
        INSERT INTO MyData (GuildId, Key, Value, CreatedAt)
        VALUES (@guildId, @key, @value, @createdAt)
        """`}),`;
    cmd.Parameters.AddWithValue(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"@guildId"`}),`, guildId.ToString(CultureInfo.InvariantCulture));
    cmd.Parameters.AddWithValue(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"@key"`}),`, key);
    cmd.Parameters.AddWithValue(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"@value"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`value`}),`);
    cmd.Parameters.AddWithValue(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"@createdAt"`}),`, DateTime.UtcNow.ToString(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"O"`}),`, CultureInfo.InvariantCulture));
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`await`}),` cmd.ExecuteNonQueryAsync();
}

`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`public`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`async`}),` Task<`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`string`}),`?> GetMyDataAsync(`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`ulong`}),` guildId, `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`string`}),` key)
{
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`await`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`using`}),` `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`var`}),` cmd = _connection.CreateCommand();
    cmd.CommandText = `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"""
        SELECT Value FROM MyData
        WHERE GuildId = @guildId AND Key = @key
        LIMIT 1
        """`}),`;
    cmd.Parameters.AddWithValue(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"@guildId"`}),`, guildId.ToString(CultureInfo.InvariantCulture));
    cmd.Parameters.AddWithValue(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"@key"`}),`, key);
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`var`}),` result = `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`await`}),` cmd.ExecuteScalarAsync();
    `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`return`}),` result `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`as`}),` `,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`string`}),`;
}
`]})}),`
`,(0,n.jsx)(r.h2,{children:`Database conventions`}),`
`,(0,n.jsx)(r.h3,{children:`ID storage`}),`
`,(0,n.jsxs)(r.p,{children:[`Guild and user IDs are stored as `,(0,n.jsx)(r.code,{children:`TEXT`}),` (not `,(0,n.jsx)(r.code,{children:`INTEGER`}),`):`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[`cmd.Parameters.AddWithValue(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"@guildId"`}),`, guildId.ToString(CultureInfo.InvariantCulture));
`]})}),`
`,(0,n.jsxs)(r.p,{children:[`SQLite's `,(0,n.jsx)(r.code,{children:`INTEGER`}),` type is 64-bit. Discord snowflakes can be up to 64-bit unsigned, which exceeds `,(0,n.jsx)(r.code,{children:`long.MaxValue`}),` in some operations. Storing as `,(0,n.jsx)(r.code,{children:`TEXT`}),` avoids overflow.`]}),`
`,(0,n.jsx)(r.h3,{children:`Date/time storage`}),`
`,(0,n.jsx)(r.p,{children:`All timestamps are ISO 8601 strings:`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[`DateTime.UtcNow.ToString(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"O"`}),`, CultureInfo.InvariantCulture)
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`// Example: "2026-07-04T12:34:56.7890123Z"`}),`
`]})}),`
`,(0,n.jsxs)(r.p,{children:[`The `,(0,n.jsx)(r.code,{children:`"O"`}),` format specifier produces round-trippable output. ISO 8601 strings are human-readable and sort correctly lexicographically when using UTC.`]}),`
`,(0,n.jsx)(r.h3,{children:`Parameterized queries`}),`
`,(0,n.jsxs)(r.p,{children:[`Always use `,(0,n.jsx)(r.code,{children:`@parameters`}),` to prevent SQL injection:`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[`cmd.Parameters.AddWithValue(`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"@value"`}),`, `,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`value`}),`);
`]})}),`
`,(0,n.jsx)(r.p,{children:`Never concatenate user input into SQL strings.`}),`
`,(0,n.jsx)(r.h3,{children:`CultureInfo.InvariantCulture`}),`
`,(0,n.jsxs)(r.p,{children:[`All `,(0,n.jsx)(r.code,{children:`ToString()`}),` conversions for database values must use `,(0,n.jsx)(r.code,{children:`CultureInfo.InvariantCulture`}),` to ensure consistent formatting regardless of the system locale.`]}),`
`,(0,n.jsx)(r.h3,{children:`Single connection`}),`
`,(0,n.jsxs)(r.p,{children:[`The `,(0,n.jsx)(r.code,{children:`SqliteConnection`}),` is opened once and kept open. Do not create or dispose connections in individual methods.`]}),`
`,(0,n.jsx)(r.h2,{children:`Adding a new index`}),`
`,(0,n.jsx)(r.p,{children:`For performance on large tables, add indexes:`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-csharp`,children:[`cmd.CommandText = `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"""
    CREATE INDEX IF NOT EXISTS IX_MyData_GuildId
    ON MyData (GuildId)
    """`}),`;
`,(0,n.jsx)(r.span,{className:`hljs-keyword`,children:`await`}),` cmd.ExecuteNonQueryAsync();
`]})})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(){return(0,n.jsx)(i,{})}export{a as default};