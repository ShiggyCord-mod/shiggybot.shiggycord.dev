import { Box, Typography, useTheme } from '@mui/material'
import { getFeatureIcon } from './IconMap'

interface FeatureCardProps {
  id: string
  title: string
  description: string
}

export default function FeatureCard({ id, title, description }: FeatureCardProps) {
  const theme = useTheme()

  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 4,
        bgcolor: 'surface',
        border: 1,
        borderColor: 'divider',
        transition: 'all 0.2s',
        '&:hover': {
          borderColor: 'primary.main',
          boxShadow: `0 4px 20px ${theme.palette.primary.main}15`,
        },
      }}
    >
      <Box sx={{ color: 'primary.main', mb: 1.5, '& .MuiSvgIcon-root': { fontSize: 28 } }}>
        {getFeatureIcon(id)}
      </Box>
      <Typography variant="h4" sx={{ mb: 0.5 }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
        {description}
      </Typography>
    </Box>
  )
}
