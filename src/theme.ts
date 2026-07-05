import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: Palette["primary"];
    primaryContainer: string;
    onPrimaryContainer: string;
    secondaryContainer: string;
    onSecondaryContainer: string;
    tertiaryContainer: string;
    onTertiaryContainer: string;
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions["primary"];
    primaryContainer?: string;
    onPrimaryContainer?: string;
    secondaryContainer?: string;
    onSecondaryContainer?: string;
    tertiaryContainer?: string;
    onTertiaryContainer?: string;
  }
}

const mochaDark = {
  primary: "#D7B9AE",
  onPrimary: "#2D2A26",
  primaryContainer: "#4A3832",
  onPrimaryContainer: "#F0E4DE",
  secondary: "#B29685",
  onSecondary: "#FFFFFF",
  secondaryContainer: "#3E3029",
  onSecondaryContainer: "#E8D9D0",
  tertiary: "#A5B8C8",
  onTertiary: "#FFFFFF",
  tertiaryContainer: "#2E3A42",
  onTertiaryContainer: "#D6E4ED",
  error: "#FFB4AB",
  onError: "#690005",
  errorContainer: "#93000A",
  onErrorContainer: "#FFDAD6",
  background: "#1B1917",
  onBackground: "#F2EFEA",
  surface: "#24211E",
  onSurface: "#F2EFEA",
  surfaceVariant: "#3D3834",
  onSurfaceVariant: "#B5AFA8",
  outline: "#8C8680",
  outlineVariant: "#3D3834",
};

const mochaLight = {
  primary: "#8D6B5E",
  onPrimary: "#FFFFFF",
  primaryContainer: "#F0E4DE",
  onPrimaryContainer: "#362520",
  secondary: "#7D6051",
  onSecondary: "#FFFFFF",
  secondaryContainer: "#E8D9D0",
  onSecondaryContainer: "#2C1F19",
  tertiary: "#6F8494",
  onTertiary: "#FFFFFF",
  tertiaryContainer: "#D6E4ED",
  onTertiaryContainer: "#1A2C37",
  error: "#BA1A1A",
  onError: "#FFFFFF",
  errorContainer: "#FFDAD6",
  onErrorContainer: "#410002",
  background: "#F5F0EB",
  onBackground: "#1C1B19",
  surface: "#FDF8F3",
  onSurface: "#1C1B19",
  surfaceVariant: "#E2DCD5",
  onSurfaceVariant: "#4A4743",
  outline: "#7C7772",
  outlineVariant: "#C4BEB8",
};

function buildTheme(mode: "light" | "dark", c: typeof mochaDark) {
  return createTheme({
    palette: {
      mode,
      primary: { main: c.primary, contrastText: c.onPrimary },
      secondary: { main: c.secondary, contrastText: c.onSecondary },
      tertiary: { main: c.tertiary, contrastText: c.onTertiary },
      error: { main: c.error, contrastText: c.onError },
      background: { default: c.background, paper: c.surface },
      text: { primary: c.onSurface, secondary: c.onSurfaceVariant },
      divider: c.outlineVariant,
      primaryContainer: c.primaryContainer,
      onPrimaryContainer: c.onPrimaryContainer,
      secondaryContainer: c.secondaryContainer,
      onSecondaryContainer: c.onSecondaryContainer,
      tertiaryContainer: c.tertiaryContainer,
      onTertiaryContainer: c.onTertiaryContainer,
    },
    shape: { borderRadius: 12 },
    typography: {
      fontFamily:
        '"Inter", "Google Sans", system-ui, -apple-system, sans-serif',
      h1: {
        fontSize: "3rem",
        fontWeight: 700,
        lineHeight: 1.15,
        letterSpacing: "-0.02em",
      },
      h2: {
        fontSize: "2rem",
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: "-0.01em",
      },
      h3: {
        fontSize: "1.375rem",
        fontWeight: 600,
        lineHeight: 1.3,
        letterSpacing: 0,
      },
      h4: {
        fontSize: "1.125rem",
        fontWeight: 600,
        lineHeight: 1.3,
        letterSpacing: 0.00625,
      },
      body1: { fontSize: "1rem", lineHeight: 1.7, letterSpacing: 0.00625 },
      body2: { fontSize: "0.875rem", lineHeight: 1.6, letterSpacing: 0.00625 },
      caption: { fontSize: "0.75rem", lineHeight: 1.4, letterSpacing: 0.025 },
      overline: {
        fontSize: "0.75rem",
        fontWeight: 600,
        lineHeight: 1.3,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: c.background,
            color: c.onSurface,
            fontFamily:
              '"Inter", "Google Sans", system-ui, -apple-system, sans-serif',
          },
          a: {
            color: c.primary,
            textDecoration: "underline",
            textUnderlineOffset: 2,
            fontWeight: 500,
          },
          "a:hover": {
            opacity: 0.85,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            backgroundImage: "none",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: { backgroundImage: "none" },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 28,
            textTransform: "none",
            fontWeight: 600,
            padding: "8px 24px",
          },
          contained: { boxShadow: "none" },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: { borderRight: "none" },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: { borderBottomColor: c.outlineVariant },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            color: c.primary,
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          },
        },
      },
      MuiTypography: {
        defaultProps: {
          color: "text.primary",
        },
      },
    },
  });
}

export const lightTheme = buildTheme("light", mochaLight);
export const darkTheme = buildTheme("dark", mochaDark);
