import { Box, Typography } from "@mui/material";

interface TechBadgeProps {
  label: string;
  sub: string;
}

export default function TechBadge({ label, sub }: TechBadgeProps) {
  return (
    <Box
      sx={{
        px: 3,
        py: 2,
        borderRadius: 3,
        bgcolor: "background.default",
        border: 1,
        borderColor: "divider",
        textAlign: "center",
        minWidth: 160,
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.25 }}>
        {label}
      </Typography>
      <Typography variant="caption" sx={{ color: "text.secondary" }}>
        {sub}
      </Typography>
    </Box>
  );
}
