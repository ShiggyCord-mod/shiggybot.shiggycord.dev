import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Typography } from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";
import Header from "../components/Header";
import strings from "../i18n";

const t = strings;

interface CommandsPageProps {
  onToggleTheme: () => void;
  isDark: boolean;
}

const catColors = ["#7957d5", "#e86a7a", "#5b7bf2", "#d4a13e", "#2d9d4a"];

export default function CommandsPage({ onToggleTheme, isDark }: CommandsPageProps) {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <Header drawerWidth={0} onToggleTheme={onToggleTheme} isDark={isDark} />

      <Box sx={{ pt: { xs: 10, md: 13 }, pb: { xs: 8, md: 12 } }}>
        <Container maxWidth="md">
          <Button
            startIcon={<ArrowBack />}
            onClick={() => navigate("/")}
            sx={{ mb: 3, color: "text.secondary", "&:hover": { color: "text.primary" } }}
          >
            Back to Home
          </Button>

          <Typography variant="h1" sx={{ fontSize: { xs: "2rem", md: "2.5rem" }, fontWeight: 700, mb: 1 }}>
            {t.commands.title}
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 5, lineHeight: 1.6 }}>
            {t.commands.subtitle.replace("{prefix}", t.commands.prefix)}
          </Typography>

          {t.commands.categories.map((cat, ci) => (
            <Box key={cat.name} sx={{ mb: 5 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    bgcolor: catColors[ci % catColors.length],
                    flexShrink: 0,
                  }}
                />
                <Typography variant="h2" sx={{ fontSize: "1.25rem", fontWeight: 600 }}>
                  {cat.name}
                </Typography>
              </Box>

              <Box
                sx={{
                  borderRadius: 2,
                  border: 1,
                  borderColor: "divider",
                  overflow: "hidden",
                }}
              >
                {cat.commands.map((cmd, i) => (
                  <Box
                    key={cmd.name}
                    sx={{
                      px: 3,
                      py: 2.5,
                      borderBottom: i < cat.commands.length - 1 ? 1 : 0,
                      borderColor: "divider",
                      "&:hover": { bgcolor: "action.hover" },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: 1.5,
                        mb: 0.5,
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 600,
                          fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                          fontSize: "0.875rem",
                          color: "primary.main",
                        }}
                      >
                        {t.commands.prefix}{cmd.signature}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                      {cmd.description}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Container>
      </Box>
    </Box>
  );
}
