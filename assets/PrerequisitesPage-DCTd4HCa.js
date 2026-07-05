import{n as e,t}from"./index-B6UokVem.js";var n=e();function r(e){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...t(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:`Prerequisites`}),`
`,(0,n.jsx)(r.p,{children:`The following tools and accounts are required to build and run ShiggyBot.`}),`
`,(0,n.jsx)(r.h2,{children:`.NET 10 SDK`}),`
`,(0,n.jsx)(r.p,{children:`ShiggyBot targets .NET 10 (C# 13). The SDK is required for both building and running.`}),`
`,(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{children:`Minimum`})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`SDK`}),(0,n.jsxs)(r.td,{children:[`.NET 10 SDK (`,(0,n.jsx)(r.code,{children:`10.0.x`}),`)`]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:`Runtime`}),(0,n.jsxs)(r.td,{children:[`.NET 10 runtime (`,(0,n.jsx)(r.code,{children:`10.0.x`}),`)`]})]})]})]}),`
`,(0,n.jsxs)(r.p,{children:[`Download from the `,(0,n.jsx)(r.a,{href:`https://dotnet.microsoft.com/en-us/download/dotnet/10.0`,children:`official .NET download page`}),`. Verify after installation:`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-bash`,children:[`dotnet --version
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# Expected: 10.x.x (e.g., 10.0.100)`}),`
`]})}),`
`,(0,n.jsx)(r.h3,{children:`Linux install`}),`
`,(0,n.jsxs)(`details`,{children:[(0,n.jsx)(`summary`,{children:`Ubuntu / Debian`}),(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-bash`,children:[(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# Register Microsoft repository`}),`
wget https://packages.microsoft.com/config/ubuntu/24.04/packages-microsoft-prod.deb
`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`sudo`}),` dpkg -i packages-microsoft-prod.deb
`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`sudo`}),` apt update

`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# Install SDK`}),`
`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`sudo`}),` apt install -y dotnet-sdk-10.0
`]})})]}),`
`,(0,n.jsxs)(`details`,{children:[(0,n.jsx)(`summary`,{children:`Fedora`}),(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-bash`,children:[(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# Register Microsoft repository`}),`
`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`sudo`}),` rpm -Uvh https://packages.microsoft.com/config/fedora/41/packages-microsoft-prod.rpm

`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# Install SDK`}),`
`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`sudo`}),` dnf install -y dotnet-sdk-10.0
`]})})]}),`
`,(0,n.jsxs)(`details`,{children:[(0,n.jsx)(`summary`,{children:`Arch Linux`}),(0,n.jsx)(r.p,{children:`Install from the official repos:`}),(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-bash`,children:[(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`sudo`}),` pacman -S dotnet-sdk
`]})}),(0,n.jsxs)(r.p,{children:[`The `,(0,n.jsx)(r.code,{children:`dotnet-sdk`}),` package in the Arch repos typically tracks the latest stable release.`]})]}),`
`,(0,n.jsxs)(`details`,{children:[(0,n.jsx)(`summary`,{children:`NixOS`}),(0,n.jsxs)(r.p,{children:[`Add `,(0,n.jsx)(r.code,{children:`dotnet-sdk`}),` to your `,(0,n.jsx)(r.code,{children:`environment.systemPackages`}),`:`]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`hljs language-nix`,children:`{ pkgs, ... }: {
  environment.systemPackages = with pkgs; [ dotnet-sdk ];
}
`})}),(0,n.jsx)(r.p,{children:`Or enter a temporary shell:`}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`hljs language-bash`,children:`nix-shell -p dotnet-sdk
`})})]}),`
`,(0,n.jsxs)(`details`,{children:[(0,n.jsx)(`summary`,{children:`Gentoo`}),(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-bash`,children:[(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`sudo`}),` emerge -av dev-dotnet/dotnet-sdk-bin
`]})}),(0,n.jsxs)(r.p,{children:[`The `,(0,n.jsx)(r.code,{children:`dotnet-sdk-bin`}),` package provides a precompiled binary SDK. For a from-source build, use `,(0,n.jsx)(r.code,{children:`dev-dotnet/dotnet-sdk`}),` (requires the `,(0,n.jsx)(r.code,{children:`dotnet`}),` overlay).`]})]}),`
`,(0,n.jsxs)(`details`,{children:[(0,n.jsx)(`summary`,{children:`openSUSE`}),(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-bash`,children:[(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# Register Microsoft repository`}),`
`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`sudo`}),` zypper install -y https://packages.microsoft.com/config/opensuse/15/packages-microsoft-prod.rpm

`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# Install SDK`}),`
`,(0,n.jsx)(r.span,{className:`hljs-built_in`,children:`sudo`}),` zypper install -y dotnet-sdk-10.0
`]})})]}),`
`,(0,n.jsx)(r.h3,{children:`macOS install`}),`
`,(0,n.jsxs)(r.p,{children:[`Using `,(0,n.jsx)(r.a,{href:`https://brew.sh`,children:`Homebrew`}),`:`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`hljs language-bash`,children:`brew install dotnet-sdk
`})}),`
`,(0,n.jsx)(r.p,{children:`Or download the official macOS installer from the .NET website.`}),`
`,(0,n.jsx)(r.h3,{children:`Windows install`}),`
`,(0,n.jsxs)(r.p,{children:[`Download and run the .NET 10 SDK installer from the official download page. The installer adds `,(0,n.jsx)(r.code,{children:`dotnet`}),` to your PATH automatically.`]}),`
`,(0,n.jsx)(r.h2,{children:`Discord bot token`}),`
`,(0,n.jsxs)(r.p,{children:[`A Discord bot token is the only `,(0,n.jsx)(r.strong,{children:`required`}),` configuration value. You obtain it from the `,(0,n.jsx)(r.a,{href:`https://discord.com/developers/applications`,children:`Discord Developer Portal`}),`. See the `,(0,n.jsx)(r.a,{href:`/setup/discord-portal`,children:`Discord Portal guide`}),` for details.`]}),`
`,(0,n.jsx)(r.h2,{children:`SQLite`}),`
`,(0,n.jsxs)(r.p,{children:[`SQLite is the database engine. No installation is needed — .NET 10 ships with `,(0,n.jsx)(r.code,{children:`Microsoft.Data.Sqlite`}),` as a NuGet dependency. The database file (`,(0,n.jsx)(r.code,{children:`shiggybot.db`}),`) is created automatically on first run.`]}),`
`,(0,n.jsx)(r.h2,{children:`Git`}),`
`,(0,n.jsx)(r.p,{children:`Required for cloning the repository and contributing:`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsxs)(r.code,{className:`hljs language-bash`,children:[`git --version
`,(0,n.jsx)(r.span,{className:`hljs-comment`,children:`# Expected: git version 2.x or later`}),`
`]})}),`
`,(0,n.jsx)(r.h2,{children:`Optional: GitHub personal access token`}),`
`,(0,n.jsx)(r.p,{children:`Without a token, GitHub API requests are limited to 60 requests per hour. With a token, the limit increases to 5,000 per hour.`}),`
`,(0,n.jsxs)(r.p,{children:[`Create one at `,(0,n.jsx)(r.a,{href:`https://github.com/settings/tokens`,children:`GitHub Settings > Tokens`}),` with the `,(0,n.jsx)(r.code,{children:`public_repo`}),` scope (or `,(0,n.jsx)(r.code,{children:`repo`}),` for private repositories).`]})]})}function i(e={}){let{wrapper:i}={...t(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}function a(){return(0,n.jsx)(i,{})}export{a as default};