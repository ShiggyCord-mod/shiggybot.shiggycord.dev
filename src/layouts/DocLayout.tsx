import { useState, useCallback, useEffect, useRef, useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Box, Toolbar, useTheme } from "@mui/material";
import { MDXProvider } from "@mdx-js/react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MobileNav from "../components/MobileNav";
import { createMDXComponents } from "../components/MDXComponents";

const STORAGE_KEY = "shiggybot-docs:sidebar-width";
const MIN_WIDTH = 200;
const MAX_WIDTH = 400;
const DEFAULT_WIDTH = 260;

function loadWidth(): number {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const w = Number(stored);
      if (w >= MIN_WIDTH && w <= MAX_WIDTH) return w;
    }
  } catch {}
  return DEFAULT_WIDTH;
}

interface DocLayoutProps {
  onToggleTheme: () => void;
  isDark: boolean;
}

export default function DocLayout({ onToggleTheme, isDark }: DocLayoutProps) {
  const theme = useTheme();
  const location = useLocation();
  const mainRef = useRef<HTMLDivElement>(null);
  const [drawerWidth, setDrawerWidth] = useState(loadWidth);

  useEffect(() => {
    mainRef.current?.scrollTo(0, 0);
  }, [location.pathname]);

  const handleResize = useCallback((w: number) => {
    const clamped = Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, w));
    setDrawerWidth(clamped);
    try {
      localStorage.setItem(STORAGE_KEY, String(clamped));
    } catch {}
  }, []);

  const mdxComponents = useMemo(() => createMDXComponents(isDark), [isDark]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleResize(DEFAULT_WIDTH);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleResize]);

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <Header
        drawerWidth={drawerWidth}
        onToggleTheme={onToggleTheme}
        isDark={isDark}
      />

      <Sidebar drawerWidth={drawerWidth} onResize={handleResize} />

      <Box
        component="main"
        ref={mainRef}
        sx={{
          flexGrow: 1,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          height: "100vh",
          overflowY: "auto",
          minWidth: 0,
        }}
      >
        <Toolbar />

        <Box
          className="doc-content"
          sx={{
            maxWidth: 900,
            mx: "auto",
            px: { xs: 2, sm: 3, md: 5 },
            py: { xs: 2.5, md: 5 },
            pb: { xs: "72px", md: 5 },
            "& code:not(pre code)": {
              bgcolor: isDark
                ? "rgba(215,185,174,0.12)"
                : "rgba(141,107,94,0.1)",
            },
            "& blockquote": {
              bgcolor: isDark
                ? "rgba(215,185,174,0.08)"
                : "rgba(141,107,94,0.06)",
              borderLeft: `4px solid ${theme.palette.primary.main}`,
              color: theme.palette.text.secondary,
            },
            "& hr": {
              bgcolor: theme.palette.divider,
            },
          }}
        >
          <MDXProvider components={mdxComponents}>
            <Outlet />
          </MDXProvider>
        </Box>
      </Box>

      <MobileNav />
    </Box>
  );
}
