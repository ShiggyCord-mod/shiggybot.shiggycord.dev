import { useEffect, useRef, useState, useCallback, useMemo, memo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ListItemButton,
  ListItemText,
  Box,
  Typography,
  useTheme,
  Divider,
  Collapse,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRight from "@mui/icons-material/ChevronRight";
import ExpandMore from "@mui/icons-material/ExpandMore";
import strings from "../i18n";

const t = strings;

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

const HANDLE = 48;

const sheetSx = (open: boolean, height: string) => ({
  position: "fixed" as const,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 1200,
  bgcolor: "background.default",
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  borderTop: 1,
  borderLeft: 1,
  borderRight: 1,
  borderColor: "divider",
  boxShadow: open ? 3 : 0,
  height,
  transition: "height 0.25s ease",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
});

const handleSx = {
  display: "flex",
  alignItems: "center",
  gap: 1.5,
  px: 2.5,
  height: HANDLE,
  cursor: "pointer",
  flexShrink: 0,
  touchAction: "none",
};

const pillSx = {
  width: 32,
  height: 4,
  borderRadius: 2,
  bgcolor: "text.secondary",
  opacity: 0.35,
  flexShrink: 0,
};

const contentBoxSx = { px: 1.5, py: 1, overflowY: "auto", flexGrow: 1, minHeight: 0 };

const dividerSx = { borderColor: "divider", mb: 1 };

const sectionHeadingSx = {
  px: 1.5,
  pt: 1.5,
  pb: 0.5,
  fontSize: "0.65rem",
  fontWeight: 700 as const,
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  color: "text.secondary",
  opacity: 0.5,
};

const iconSx = { sx: { fontSize: 18 } };

export default function MobileNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [contentH, setContentH] = useState(0);

  const [expanded, setExpanded] = useState<string | null>(() => {
    const active = sections
      .flatMap((s) => s.items)
      .find((item) => item.children && (item.path === location.pathname || itemHasActiveChild(item.children, location.pathname)));
    return active?.path ?? null;
  });

  const sheetRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ startY: 0, active: false, moved: false });

  const currentPage = useMemo(
    () =>
      sections
        .flatMap((s) => s.items)
        .flatMap((item) => (item.children ? [item, ...item.children] : [item]))
        .find((i) => i.path === location.pathname),
    [location.pathname],
  );

  const handleNav = useCallback(
    (path: string) => {
      navigate(path);
      setOpen(false);
    },
    [navigate],
  );

  const setNavExpanded = useCallback((path: string) => {
    setExpanded(path);
  }, []);

  const closeOverlay = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const active = sections
      .flatMap((s) => s.items)
      .find((item) => item.children && (item.path === location.pathname || itemHasActiveChild(item.children, location.pathname)));
    setExpanded(active?.path ?? null);
  }, [location.pathname]);

  useEffect(() => {
    const measure = () => {
      if (!contentRef.current) return;
      const inner = contentRef.current.scrollHeight;
      if (inner > 0) {
        setContentH(Math.min(HANDLE + 1 + inner, window.innerHeight * 0.8));
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const expandedHeight = useMemo(
    () => contentH || Math.round(window.innerHeight * 0.35),
    [contentH],
  );

  const sheetHeight = open ? `${expandedHeight}px` : `${HANDLE}px`;

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    drag.current = { startY: e.touches[0].clientY, active: true, moved: false };
    if (sheetRef.current) {
      sheetRef.current.style.transition = "none";
    }
  }, []);

  const onTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!drag.current.active) return;
      const delta = drag.current.startY - e.touches[0].clientY;
      if (Math.abs(delta) > 3) drag.current.moved = true;
      const maxH = expandedHeight;
      const base = open ? maxH : HANDLE;
      const h = Math.round(Math.max(HANDLE, Math.min(maxH, base + delta)));
      if (sheetRef.current) {
        sheetRef.current.style.height = `${h}px`;
      }
    },
    [expandedHeight, open],
  );

  const onTouchEnd = useCallback(() => {
    drag.current.active = false;
    const el = sheetRef.current;
    if (!el) return;
    const cur = el.offsetHeight;
    const mid = (expandedHeight + HANDLE) / 2;
    el.style.transition = "";
    el.style.height = "";
    if (cur > mid) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [expandedHeight]);

  const onHandleClick = useCallback(() => {
    if (!drag.current.moved) setOpen((v) => !v);
  }, []);

  return (
    <Box sx={{ display: { xs: "block", md: "none" } }}>
      {open && <Box onClick={closeOverlay} sx={{ position: "fixed", inset: 0, zIndex: 1199, bgcolor: "rgba(0,0,0,0.4)" }} />}

      <Box ref={sheetRef} sx={sheetSx(open, sheetHeight)}>
        <Box onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} onClick={onHandleClick} sx={handleSx}>
          <Box sx={pillSx} />
          <Typography variant="body2" noWrap sx={{ flexGrow: 1, fontWeight: 500, color: "text.secondary" }}>
            {currentPage?.label ?? "Navigation"}
          </Typography>
          <MenuIcon sx={{ fontSize: 20, color: "text.secondary" }} />
        </Box>

        <Box ref={contentRef} sx={contentBoxSx}>
          <Divider sx={dividerSx} />

          {sections.map((section, i) => (
            <Box key={section.heading || `section-${i}`} sx={{ mb: section.heading ? 0.5 : 0 }}>
              {section.heading && <Typography sx={sectionHeadingSx}>{section.heading}</Typography>}

              {section.items.map((item) => (
                <MobileNavListItem
                  key={item.path}
                  item={item}
                  expanded={expanded === item.path}
                  onToggle={setNavExpanded}
                  onNavigate={handleNav}
                />
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

const MobileNavListItem = memo(function MobileNavListItem({
  item,
  expanded,
  onToggle,
  onNavigate,
  depth = 0,
}: {
  item: NavItem;
  expanded: boolean;
  onToggle: (path: string) => void;
  onNavigate: (path: string) => void;
  depth?: number;
}) {
  const theme = useTheme();
  const location = useLocation();

  const currentPath = location.pathname;
  const isSelected = currentPath === item.path;
  const hasChildren = !!item.children && item.children.length > 0;
  const isParent = depth === 0 && hasChildren;

  const hasActiveChild = useMemo(() => itemHasActiveChild(item.children, currentPath), [item.children, currentPath]);

  const primaryFontWeight = isParent || isSelected || hasActiveChild ? 600 : 400;

  const handleClick = useCallback(() => {
    if (hasChildren) onToggle(item.path);
    onNavigate(item.path);
  }, [hasChildren, item.path, onToggle, onNavigate]);

  const handleChevronClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      onToggle(item.path);
    },
    [item.path, onToggle],
  );

  const sx = useMemo(
    () => ({
      borderRadius: 2,
      mb: 0.25,
      pl: depth === 0 ? 1.5 : 1.5 + depth * 2,
      pr: 1,
      py: isParent ? 0.6 : 0.4,
      minHeight: isParent ? 36 : 32,
      ...(item.path === "/" && {
        "& .MuiListItemText-primary": { fontWeight: 600 },
      }),
      "&.Mui-selected": {
        bgcolor: theme.palette.primaryContainer,
        color: theme.palette.onPrimaryContainer,
        "&:hover": { bgcolor: theme.palette.primaryContainer },
        "& .MuiListItemText-primary": { fontWeight: 600 },
      },
      "&:hover:not(.Mui-selected)": {
        bgcolor: "action.hover",
      },
    }),
    [depth, isParent, item.path, theme],
  );

  const slotProps = useMemo(
    () =>
      ({
        primary: {
          fontSize: "0.8125rem",
          fontWeight: primaryFontWeight,
        },
      }) as Record<string, unknown>,
    [primaryFontWeight],
  );

  const chevronSx = useMemo(() => ({ mr: -0.5, opacity: 0.5 }), []);

  return (
    <>
      <ListItemButton selected={isSelected} onClick={handleClick} sx={sx}>
        <ListItemText primary={item.label} slotProps={slotProps} />
        {hasChildren && (
          <IconButton size="small" edge="end" onClick={handleChevronClick} sx={chevronSx}>
            {expanded ? <ExpandMore {...iconSx} /> : <ChevronRight {...iconSx} />}
          </IconButton>
        )}
      </ListItemButton>

      {hasChildren && (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          {item.children!.map((child) => (
            <MobileNavListItem
              key={child.path}
              item={child}
              expanded={false}
              onToggle={onToggle}
              onNavigate={onNavigate}
              depth={depth + 1}
            />
          ))}
        </Collapse>
      )}
    </>
  );
});
