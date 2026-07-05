import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Typography } from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";
import Header from "../components/Header";

interface NotFoundPageProps {
  onToggleTheme: () => void;
  isDark: boolean;
}

export default function NotFoundPage({ onToggleTheme, isDark }: NotFoundPageProps) {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <Header drawerWidth={0} onToggleTheme={onToggleTheme} isDark={isDark} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          pt: { xs: 14, md: 18 },
          pb: { xs: 8, md: 12 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "5rem", md: "7rem" },
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1,
              background: (t) =>
                `linear-gradient(135deg, ${t.palette.primary.main}, ${t.palette.primary.light})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 1,
            }}
          >
            404
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.25rem", md: "1.5rem" },
              fontWeight: 600,
              mb: 1.5,
            }}
          >
            Page not found
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              lineHeight: 1.6,
              mb: 4,
              maxWidth: 360,
              mx: "auto",
            }}
          >
            The page you're looking for doesn't exist or has been moved.
          </Typography>

          <Box sx={{ display: "flex", gap: 1.5, justifyContent: "center" }}>
            <Button
              variant="contained"
              startIcon={<ArrowBack />}
              onClick={() => navigate("/")}
            >
              Back to Home
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
