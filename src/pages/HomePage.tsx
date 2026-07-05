import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Typography,
  useTheme,
  Collapse,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import Header from "../components/Header";
import FeatureCard from "../components/FeatureCard";
import TechBadge from "../components/TechBadge";
import CodeWindow from "../components/CodeWindow";
import strings from "../i18n";

const t = strings;

interface Props {
  onToggleTheme: () => void;
  isDark: boolean;
}

export default function HomePage({ onToggleTheme, isDark }: Props) {
  const theme = useTheme();
  const navigate = useNavigate();
  const [showCode, setShowCode] = useState(false);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        overflowX: "hidden",
        userSelect: "none",
      }}
    >
      <Header drawerWidth={0} onToggleTheme={onToggleTheme} isDark={isDark} />

      {/* ──────── Hero ──────── */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          pt: { xs: 6, md: 12 },
          pb: { xs: 8, md: 14 },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse 700px 450px at 50% 40%, ${theme.palette.primary.main}15, transparent)`,
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 3fr" },
              gap: { md: 8 },
              alignItems: "center",
            }}
          >
            {/* Left — text */}
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Box
                component="img"
                src="/favicon.gif"
                alt=""
                sx={{
                  width: { xs: 80, md: 120 },
                  height: { xs: 80, md: 120 },
                  borderRadius: 2.5,
                  mb: { xs: 2, md: 3 },
                }}
              />

              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: "2.25rem", sm: "3rem", md: "3.75rem" },
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                  mb: 1.5,
                }}
              >
                {t.hero.headline}
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "0.95rem", md: "1.125rem" },
                  color: "text.secondary",
                  lineHeight: 1.65,
                  maxWidth: 460,
                  mx: { xs: "auto", md: 0 },
                  mb: 3.5,
                }}
              >
                {t.hero.subheadline}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  gap: 1.5,
                  flexWrap: "wrap",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate("/setup")}
                >
                  {t.hero.cta}
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<GitHubIcon />}
                  component="a"
                  href="https://github.com/kmmiio99o/ShiggyBot"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ borderColor: "divider", color: "text.primary" }}
                >
                  {t.hero.github}
                </Button>
              </Box>
            </Box>

            {/* Right — code window */}
            <Box sx={{ mt: { xs: 6, md: 0 }, minWidth: 0 }}>
              {/* Mobile: toggle button + collapsible */}
              <Box
                sx={{
                  display: { xs: "block", md: "none" },
                  textAlign: "center",
                }}
              >
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<CodeIcon />}
                  onClick={() => setShowCode((v) => !v)}
                  sx={{ borderColor: "divider", color: "text.secondary" }}
                >
                  {showCode ? "Hide source" : "Browse source"}
                </Button>
                <Collapse in={showCode} timeout={350}>
                  <Box sx={{ mt: 2 }}>
                    <CodeWindow />
                  </Box>
                </Collapse>
              </Box>

              {/* Desktop: always visible, scrollable */}
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <CodeWindow />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ──────── Features ──────── */}
      <Box sx={{ bgcolor: "surface" }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 9 } }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.25rem", sm: "1.5rem" },
              fontWeight: 600,
              mb: 3,
            }}
          >
            {t.features.title}
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "repeat(3, 1fr)",
              },
              gap: { xs: 2, md: 2.5 },
            }}
          >
            {t.features.items.map((f) => (
              <FeatureCard
                key={f.id}
                id={f.id}
                title={f.title}
                description={f.description}
              />
            ))}
          </Box>
        </Container>
      </Box>

      {/* ──────── Tech Stack ──────── */}
      <Container
        maxWidth="lg"
        sx={{ py: { xs: 6, md: 9 }, textAlign: "center" }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "1.25rem", sm: "1.5rem" },
            fontWeight: 600,
            mb: 3,
          }}
        >
          {t.techStack.title}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "center",
          }}
        >
          {t.techStack.items.map((item) => (
            <TechBadge key={item.label} label={item.label} sub={item.sub} />
          ))}
        </Box>
      </Container>

      {/* ──────── CTA ──────── */}
      <Box sx={{ bgcolor: "surface" }}>
        <Container
          maxWidth="lg"
          sx={{ py: { xs: 6, md: 9 }, textAlign: "center" }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.25rem", sm: "1.5rem" },
              fontWeight: 600,
              mb: 1.5,
            }}
          >
            {t.cta.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              mb: 3,
              lineHeight: 1.6,
              maxWidth: 420,
              mx: "auto",
              whiteSpace: "pre-line",
            }}
          >
            {t.cta.description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 1.5,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate("/setup")}
            >
              {t.cta.setupButton}
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<GitHubIcon />}
              component="a"
              href="https://github.com/kmmiio99o/ShiggyBot"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ borderColor: "divider", color: "text.primary" }}
            >
              View on GitHub
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ──────── Footer ──────── */}
      <Box component="footer" sx={{ py: 4, textAlign: "center" }}>
        <Container maxWidth="lg">
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            {t.site.title} &middot; {t.footer.copyright} &middot;{" "}
            {new Date().getFullYear()}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
