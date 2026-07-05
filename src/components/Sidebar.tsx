import { useState, useCallback, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Drawer,
  ListItemButton,
  ListItemText,
  Box,
  useTheme,
  Toolbar,
  Typography,
  Collapse,
  IconButton,
} from "@mui/material";
import type { Theme } from "@mui/material";
import ChevronRight from "@mui/icons-material/ChevronRight";
import ExpandMore from "@mui/icons-material/ExpandMore";
import strings from "../i18n";

const t = strings;

const HANDLE_WIDTH = 6;

interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

const sections: { heading: string; items: NavItem[] }[] = [
  {
    heading: "",
    items: [{ label: t.nav.home, path: "/" }],
  },
  {
    heading: t.sidebar.gettingStarted,
    items: [
      {
        label: t.nav.setup,
        path: "/setup",
        children: [
          { label: t.nav.setupPrerequisites, path: "/setup/prerequisites" },
          { label: t.nav.setupDiscordPortal, path: "/setup/discord-portal" },
          { label: t.nav.setupBuilding, path: "/setup/building" },
          { label: t.nav.setupRunning, path: "/setup/running" },
          { label: t.nav.setupPublishing, path: "/setup/publishing" },
          { label: t.nav.setupCiCd, path: "/setup/ci-cd" },
        ],
      },
      {
        label: t.nav.configuration,
        path: "/configuration",
        children: [
          { label: t.nav.configurationKeys, path: "/configuration/keys" },
          { label: t.nav.configurationSources, path: "/configuration/sources" },
          { label: t.nav.configurationPermissions, path: "/configuration/permissions" },
        ],
      },
    ],
  },
  {
    heading: t.sidebar.reference,
    items: [
      {
        label: t.nav.architecture,
        path: "/architecture",
        children: [
          { label: t.nav.architectureEntrypoint, path: "/architecture/entrypoint" },
          { label: t.nav.architectureDiscordClientService, path: "/architecture/discord-client-service" },
          { label: t.nav.architectureCommandSystem, path: "/architecture/command-system" },
          { label: t.nav.architectureComponentSystems, path: "/architecture/component-systems" },
          { label: t.nav.architectureFeatures, path: "/architecture/features" },
          { label: t.nav.architectureServices, path: "/architecture/services" },
          { label: t.nav.architectureDatabase, path: "/architecture/database" },
          { label: t.nav.architectureUtilities, path: "/architecture/utilities" },
          { label: t.nav.architectureConfigSystem, path: "/architecture/config-system" },
          { label: t.nav.architecturePatterns, path: "/architecture/patterns" },
        ],
      },
    ],
  },
  {
    heading: t.sidebar.development,
    items: [
      {
        label: t.nav.extending,
        path: "/extending",
        children: [
          { label: t.nav.extendingNewCommand, path: "/extending/new-command" },
          { label: t.nav.extendingNewFeature, path: "/extending/new-feature" },
          { label: t.nav.extendingNewData, path: "/extending/new-data" },
          { label: t.nav.extendingStyleGuide, path: "/extending/style-guide" },
          { label: t.nav.extendingGotchas, path: "/extending/gotchas" },
        ],
      },
    ],
  },
];

function itemHasActiveChild(children: NavItem[] | undefined, currentPath: string): boolean {
  if (!children) return false;
  return children.some((c) => c.path === currentPath || itemHasActiveChild(c.children, currentPath));
}

interface SidebarProps {
  drawerWidth: number;
  onResize: (width: number) => void;
}

export default function Sidebar({ drawerWidth, onResize }: SidebarProps) {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const dragging = useRef(false);

  const initExpanded = useCallback(
    () => {
      const active = sections
        .flatMap((s) => s.items)
        .find((item) => item.children && (item.path === location.pathname || itemHasActiveChild(item.children, location.pathname)));
      return active?.path ?? null;
    },
    [],
  );

  const [expanded, setExpanded] = useState<string | null>(initExpanded);

  const open = (path: string) => {
    setExpanded(path);
  };

  useEffect(() => {
    const active = sections
      .flatMap((s) => s.items)
      .find((item) => item.children && (item.path === location.pathname || itemHasActiveChild(item.children, location.pathname)));
    setExpanded(active?.path ?? null);
  }, [location.pathname]);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      dragging.current = true;
      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";

      const onMove = (ev: MouseEvent) => {
        if (!dragging.current) return;
        onResize(ev.clientX);
      };

      const onUp = () => {
        dragging.current = false;
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onUp);
      };

      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onUp);
    },
    [onResize],
  );

  useEffect(() => {
    return () => {
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
  }, []);

  return (
    <Box sx={{ position: "relative", display: { xs: "none", md: "flex" } }}>
      <Drawer
        variant="permanent"
        open
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            height: "100vh",
            bgcolor: "transparent",
            borderRight: 1,
            borderColor: "divider",
            overflow: "hidden",
          },
        }}
      >
        <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              sx={{
                fontWeight: 700,
                cursor: "pointer",
                letterSpacing: "-0.01em",
              }}
              onClick={() => navigate("/")}
            >
              {t.site.title}
            </Typography>
          </Toolbar>

          <Box sx={{ flexGrow: 1, overflowY: "auto", px: 1.5 }}>
            {sections.map((section, i) => (
              <Box key={section.heading || `section-${i}`} sx={{ mb: section.heading ? 0.5 : 0 }}>
                {section.heading && (
                  <Typography
                    sx={{
                      px: 1.5,
                      pt: 2.5,
                      pb: 0.5,
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "text.secondary",
                      opacity: 0.5,
                    }}
                  >
                    {section.heading}
                  </Typography>
                )}

                {section.items.map((item) => (
                  <NavListItem
                    key={item.path}
                    item={item}
                    currentPath={location.pathname}
                    expanded={expanded === item.path}
                    onToggle={open}
                    onNavigate={navigate}
                    theme={theme}
                  />
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </Drawer>

      <Box
        onMouseDown={handleMouseDown}
        sx={{
          width: HANDLE_WIDTH,
          cursor: "col-resize",
          flexShrink: 0,
          bgcolor: "transparent",
          transition: "background-color 0.15s",
          "&:hover": { bgcolor: "primary.main", opacity: 0.3 },
          position: "absolute",
          top: 0,
          right: -HANDLE_WIDTH / 2,
          bottom: 0,
          zIndex: 10,
        }}
      />
    </Box>
  );
}

function NavListItem({
  item,
  currentPath,
  expanded,
  onToggle,
  onNavigate,
  theme,
  depth = 0,
}: {
  item: NavItem;
  currentPath: string;
  expanded: boolean;
  onToggle: (path: string) => void;
  onNavigate: (path: string) => void;
  theme: Theme;
  depth?: number;
}) {
  const isSelected = currentPath === item.path;
  const hasChildren = !!item.children && item.children.length > 0;
  const isParent = depth === 0 && hasChildren;

  return (
    <>
      <ListItemButton
        selected={isSelected}
        onClick={() => {
          if (hasChildren) {
            onToggle(item.path);
          }
          onNavigate(item.path);
        }}
        sx={{
          borderRadius: 2,
          mb: 0.25,
          pl: depth === 0 ? 1.5 : 1.5 + depth * 2,
          pr: 1,
          py: isParent ? 0.6 : 0.4,
          minHeight: isParent ? 36 : 32,
          "&.Mui-selected": {
            bgcolor: isParent
              ? theme.palette.primaryContainer
              : theme.palette.primaryContainer,
            color: theme.palette.onPrimaryContainer,
            "&:hover": { bgcolor: theme.palette.primaryContainer },
            "& .MuiListItemText-primary": { fontWeight: 600 },
          },
          "&:hover:not(.Mui-selected)": {
            bgcolor: isParent
              ? "action.hover"
              : "action.hover",
          },
        }}
      >
        <ListItemText
          primary={item.label}
          slotProps={{
            primary: {
              fontSize: isParent ? "0.8125rem" : "0.8125rem",
              fontWeight: isParent
                ? 600
                : isSelected || itemHasActiveChild(item.children, currentPath)
                  ? 600
                  : 400,
              color: isParent
                ? "text.primary"
                : undefined,
              letterSpacing: isParent ? "0.005em" : undefined,
            } as Record<string, unknown>,
          }}
        />
        {hasChildren && (
          <IconButton
            size="small"
            edge="end"
            onClick={(e) => {
              e.stopPropagation();
              onToggle(item.path);
            }}
            sx={{ mr: -0.5, opacity: 0.5 }}
          >
            {expanded ? (
              <ExpandMore sx={{ fontSize: 18 }} />
            ) : (
              <ChevronRight sx={{ fontSize: 18 }} />
            )}
          </IconButton>
        )}
      </ListItemButton>

      {hasChildren && (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          {item.children!.map((child) => (
            <NavListItem
              key={child.path}
              item={child}
              currentPath={currentPath}
              expanded={false}
              onToggle={onToggle}
              onNavigate={onNavigate}
              theme={theme}
              depth={depth + 1}
            />
          ))}
        </Collapse>
      )}
    </>
  );
}
