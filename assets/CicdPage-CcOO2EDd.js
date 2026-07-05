import{n as e,t}from"./index-B6UokVem.js";var n=e();function r(e){let r={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`CI/CD`}),`
`,(0,n.jsxs)(r.p,{children:[`ShiggyBot uses GitHub Actions for continuous integration and deployment. Workflows are defined in `,(0,n.jsx)(r.code,{children:`.github/workflows/`}),`.`]}),`
`,(0,n.jsxs)(r.h2,{children:[`CI workflow (`,(0,n.jsx)(r.code,{children:`ci.yml`}),`)`]}),`
`,(0,n.jsxs)(r.p,{children:[`Triggered on push or pull request to the `,(0,n.jsx)(r.code,{children:`dev`}),` branch.`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-yaml`,children:[(0,n.jsx)(r.span,{className:`hljs-attr`,children:`jobs:`}),`
  `,(0,n.jsx)(r.span,{className:`hljs-attr`,children:`build:`}),`
    `,(0,n.jsx)(r.span,{className:`hljs-attr`,children:`runs-on:`}),` `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`ubuntu-latest`}),`
    `,(0,n.jsx)(r.span,{className:`hljs-attr`,children:`steps:`}),`
      `,(0,n.jsx)(r.span,{className:`hljs-bullet`,children:`-`}),` `,(0,n.jsx)(r.span,{className:`hljs-attr`,children:`uses:`}),` `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`actions/checkout@v4`}),`
      `,(0,n.jsx)(r.span,{className:`hljs-bullet`,children:`-`}),` `,(0,n.jsx)(r.span,{className:`hljs-attr`,children:`uses:`}),` `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`actions/setup-dotnet@v4`}),`
        `,(0,n.jsx)(r.span,{className:`hljs-attr`,children:`with:`}),`
          `,(0,n.jsx)(r.span,{className:`hljs-attr`,children:`dotnet-version:`}),` `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"10.0.x"`}),`
      `,(0,n.jsx)(r.span,{className:`hljs-bullet`,children:`-`}),` `,(0,n.jsx)(r.span,{className:`hljs-attr`,children:`run:`}),` `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`dotnet`}),` `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`build`}),` `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`-c`}),` `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`Release`}),`
`]})}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Step`}),(0,n.jsx)(r.th,{children:`What it does`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`checkout`})}),(0,n.jsx)(r.td,{children:`Clones the repository`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`setup-dotnet`})}),(0,n.jsx)(r.td,{children:`Installs .NET 10 SDK`})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`dotnet build -c Release`})}),(0,n.jsxs)(r.td,{children:[`Builds in Release mode. Fails on any warning due to `,(0,n.jsx)(r.code,{children:`TreatWarningsAsErrors`}),`.`]})]})]})]}),`
`,(0,n.jsx)(r.h3,{children:`CI triggers`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Event`}),(0,n.jsx)(r.th,{children:`Branch`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Push`}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`dev`})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Pull request`}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`dev`})})]})]})]}),`
`,(0,n.jsxs)(r.h2,{children:[`Release workflow (`,(0,n.jsx)(r.code,{children:`release.yml`}),`)`]}),`
`,(0,n.jsxs)(r.p,{children:[`Triggered on push to the `,(0,n.jsx)(r.code,{children:`main`}),` branch.`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-yaml`,children:[(0,n.jsx)(r.span,{className:`hljs-attr`,children:`jobs:`}),`
  `,(0,n.jsx)(r.span,{className:`hljs-attr`,children:`publish:`}),`
    `,(0,n.jsx)(r.span,{className:`hljs-attr`,children:`strategy:`}),`
      `,(0,n.jsx)(r.span,{className:`hljs-attr`,children:`matrix:`}),`
        `,(0,n.jsx)(r.span,{className:`hljs-attr`,children:`rid:`}),` [`,(0,n.jsx)(r.span,{className:`hljs-string`,children:`win-x64`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`linux-x64`}),`, `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`osx-x64`}),`]
    `,(0,n.jsx)(r.span,{className:`hljs-attr`,children:`runs-on:`}),` `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`ubuntu-latest`}),`
    `,(0,n.jsx)(r.span,{className:`hljs-attr`,children:`steps:`}),`
      `,(0,n.jsx)(r.span,{className:`hljs-bullet`,children:`-`}),` `,(0,n.jsx)(r.span,{className:`hljs-attr`,children:`uses:`}),` `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`actions/checkout@v4`}),`
      `,(0,n.jsx)(r.span,{className:`hljs-bullet`,children:`-`}),` `,(0,n.jsx)(r.span,{className:`hljs-attr`,children:`uses:`}),` `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`actions/setup-dotnet@v4`}),`
        `,(0,n.jsx)(r.span,{className:`hljs-attr`,children:`with:`}),`
          `,(0,n.jsx)(r.span,{className:`hljs-attr`,children:`dotnet-version:`}),` `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`"10.0.x"`}),`
      `,(0,n.jsx)(r.span,{className:`hljs-bullet`,children:`-`}),` `,(0,n.jsx)(r.span,{className:`hljs-attr`,children:`run:`}),` `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`dotnet`}),` `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`publish`}),` `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`-c`}),` `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`Release`}),` `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`-r`}),` `,(0,n.jsx)(r.span,{className:`hljs-string`,children:"${{"}),` `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`matrix.rid`}),` `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`}}`}),` `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`--self-contained`}),`
      `,(0,n.jsx)(r.span,{className:`hljs-bullet`,children:`-`}),` `,(0,n.jsx)(r.span,{className:`hljs-attr`,children:`uses:`}),` `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`actions/upload-artifact@v4`}),`
        `,(0,n.jsx)(r.span,{className:`hljs-attr`,children:`with:`}),`
          `,(0,n.jsx)(r.span,{className:`hljs-attr`,children:`name:`}),` `,(0,n.jsx)(r.span,{className:`hljs-string`,children:"ShiggyBot-${{"}),` `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`matrix.rid`}),` `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`}}`}),`
          `,(0,n.jsx)(r.span,{className:`hljs-attr`,children:`path:`}),` `,(0,n.jsx)(r.span,{className:`hljs-string`,children:"bin/Release/net10.0/${{"}),` `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`matrix.rid`}),` `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`}}/publish/`}),`
  `,(0,n.jsx)(r.span,{className:`hljs-attr`,children:`release:`}),`
    `,(0,n.jsx)(r.span,{className:`hljs-attr`,children:`needs:`}),` `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`publish`}),`
    `,(0,n.jsx)(r.span,{className:`hljs-attr`,children:`runs-on:`}),` `,(0,n.jsx)(r.span,{className:`hljs-string`,children:`ubuntu-latest`}),`
    `,(0,n.jsx)(r.span,{className:`hljs-attr`,children:`steps:`}),`
      `,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# ... creates a GitHub Release with the artifacts`}),`
`]})}),`
`,(0,n.jsx)(r.h3,{children:`Release triggers`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:`Event`}),(0,n.jsx)(r.th,{children:`Branch`})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Push`}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:`main`})})]})})]}),`
`,(0,n.jsx)(r.h3,{children:`Release output`}),`
`,(0,n.jsx)(r.p,{children:`Three platform-specific archives are uploaded as release artifacts:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:`ShiggyBot-win-x64.zip`}),` — Windows x86-64 single-file binary`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:`ShiggyBot-linux-x64.tar.gz`}),` — Linux x86-64 single-file binary`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:`ShiggyBot-osx-x64.tar.gz`}),` — macOS Intel single-file binary`]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:[`A GitHub Release is created automatically with the version from `,(0,n.jsx)(r.code,{children:`VERSION`}),` file.`]}),`
`,(0,n.jsx)(r.h2,{children:`Checking CI status`}),`
`,(0,n.jsxs)(r.p,{children:[`You can view workflow runs in the repository's `,(0,n.jsx)(r.strong,{children:`Actions`}),` tab. A green checkmark means the build passed. Red means it failed — click the run for details.`]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(){return(0,n.jsx)(i,{})}export{a as default};