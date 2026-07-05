import { lazy, Suspense, useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline, CircularProgress, Box } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";
import MetaTags from "./components/MetaTags";
import HomePage from "./pages/HomePage";
import CommandsPage from "./pages/CommandsPage";
import NotFoundPage from "./pages/NotFoundPage";
import DocLayout from "./layouts/DocLayout";

// Setup pages
const SetupIndexPage = lazy(() => import("./pages/docs/setup/IndexPage"));
const PrerequisitesPage = lazy(() => import("./pages/docs/setup/PrerequisitesPage"));
const DiscordPortalPage = lazy(() => import("./pages/docs/setup/DiscordPortalPage"));
const BuildingPage = lazy(() => import("./pages/docs/setup/BuildingPage"));
const RunningPage = lazy(() => import("./pages/docs/setup/RunningPage"));
const PublishingPage = lazy(() => import("./pages/docs/setup/PublishingPage"));
const CicdPage = lazy(() => import("./pages/docs/setup/CicdPage"));

// Configuration pages
const ConfigurationIndexPage = lazy(() => import("./pages/docs/configuration/IndexPage"));
const KeysPage = lazy(() => import("./pages/docs/configuration/KeysPage"));
const SourcesPage = lazy(() => import("./pages/docs/configuration/SourcesPage"));
const PermissionsPage = lazy(() => import("./pages/docs/configuration/PermissionsPage"));

// Architecture pages
const ArchitectureIndexPage = lazy(() => import("./pages/docs/architecture/IndexPage"));
const EntrypointPage = lazy(() => import("./pages/docs/architecture/EntrypointPage"));
const DiscordClientServicePage = lazy(() => import("./pages/docs/architecture/DiscordClientServicePage"));
const CommandSystemPage = lazy(() => import("./pages/docs/architecture/CommandSystemPage"));
const ComponentSystemsPage = lazy(() => import("./pages/docs/architecture/ComponentSystemsPage"));
const FeaturesPage = lazy(() => import("./pages/docs/architecture/FeaturesPage"));
const ServicesPage = lazy(() => import("./pages/docs/architecture/ServicesPage"));
const DatabasePage = lazy(() => import("./pages/docs/architecture/DatabasePage"));
const UtilitiesPage = lazy(() => import("./pages/docs/architecture/UtilitiesPage"));
const ConfigSystemPage = lazy(() => import("./pages/docs/architecture/ConfigSystemPage"));
const PatternsPage = lazy(() => import("./pages/docs/architecture/PatternsPage"));

// Extending pages
const ExtendingIndexPage = lazy(() => import("./pages/docs/extending/IndexPage"));
const NewCommandPage = lazy(() => import("./pages/docs/extending/NewCommandPage"));
const NewFeaturePage = lazy(() => import("./pages/docs/extending/NewFeaturePage"));
const NewDataPage = lazy(() => import("./pages/docs/extending/NewDataPage"));
const StyleGuidePage = lazy(() => import("./pages/docs/extending/StyleGuidePage"));
const GotchasPage = lazy(() => import("./pages/docs/extending/GotchasPage"));

import "./styles/global.css";
import "./styles/highlight.css";

function PageLoader() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
      <CircularProgress />
    </Box>
  );
}

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const theme = useMemo(() => (isDark ? darkTheme : lightTheme), [isDark]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MetaTags />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onToggleTheme={() => setIsDark((d) => !d)}
                isDark={isDark}
              />
            }
          />
          <Route
            path="/commands"
            element={
              <CommandsPage
                onToggleTheme={() => setIsDark((d) => !d)}
                isDark={isDark}
              />
            }
          />

          <Route
            element={
              <DocLayout
                onToggleTheme={() => setIsDark((d) => !d)}
                isDark={isDark}
              />
            }
          >
            {/* Setup */}
            <Route path="/setup" element={<SetupIndexPage />} />
            <Route path="/setup/prerequisites" element={<PrerequisitesPage />} />
            <Route path="/setup/discord-portal" element={<DiscordPortalPage />} />
            <Route path="/setup/building" element={<BuildingPage />} />
            <Route path="/setup/running" element={<RunningPage />} />
            <Route path="/setup/publishing" element={<PublishingPage />} />
            <Route path="/setup/ci-cd" element={<CicdPage />} />

            {/* Configuration */}
            <Route path="/configuration" element={<ConfigurationIndexPage />} />
            <Route path="/configuration/keys" element={<KeysPage />} />
            <Route path="/configuration/sources" element={<SourcesPage />} />
            <Route path="/configuration/permissions" element={<PermissionsPage />} />

            {/* Architecture */}
            <Route path="/architecture" element={<ArchitectureIndexPage />} />
            <Route path="/architecture/entrypoint" element={<EntrypointPage />} />
            <Route path="/architecture/discord-client-service" element={<DiscordClientServicePage />} />
            <Route path="/architecture/command-system" element={<CommandSystemPage />} />
            <Route path="/architecture/component-systems" element={<ComponentSystemsPage />} />
            <Route path="/architecture/features" element={<FeaturesPage />} />
            <Route path="/architecture/services" element={<ServicesPage />} />
            <Route path="/architecture/database" element={<DatabasePage />} />
            <Route path="/architecture/utilities" element={<UtilitiesPage />} />
            <Route path="/architecture/config-system" element={<ConfigSystemPage />} />
            <Route path="/architecture/patterns" element={<PatternsPage />} />

            {/* Extending */}
            <Route path="/extending" element={<ExtendingIndexPage />} />
            <Route path="/extending/new-command" element={<NewCommandPage />} />
            <Route path="/extending/new-feature" element={<NewFeaturePage />} />
            <Route path="/extending/new-data" element={<NewDataPage />} />
            <Route path="/extending/style-guide" element={<StyleGuidePage />} />
            <Route path="/extending/gotchas" element={<GotchasPage />} />
          </Route>

          <Route
            path="*"
            element={
              <NotFoundPage
                onToggleTheme={() => setIsDark((d) => !d)}
                isDark={isDark}
              />
            }
          />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}
