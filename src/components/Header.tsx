import { useNavigate } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'

import strings from '../i18n'

const t = strings

interface HeaderProps {
  drawerWidth: number
  onToggleTheme: () => void
  isDark: boolean
}

export default function Header({ drawerWidth, onToggleTheme, isDark }: HeaderProps) {
  const navigate = useNavigate()

  return (
    <AppBar
      position="fixed"
      elevation={0}
      color="inherit"
      sx={{
        bgcolor: 'transparent',
        backdropFilter: 'blur(12px)',
        borderBottom: 1,
        borderColor: 'divider',
        ml: { md: `${drawerWidth}px` },
        width: { md: `calc(100% - ${drawerWidth}px)` },
        zIndex: 1201,
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          sx={{
            fontWeight: 700,
            cursor: 'pointer',
            letterSpacing: '-0.01em',
            ...(drawerWidth > 0 && {
              display: { xs: 'block', md: 'none' },
            }),
          }}
          onClick={() => navigate('/')}
        >
          {t.site.title}
        </Typography>

        <span style={{ flex: 1 }} />

        <IconButton onClick={onToggleTheme} size="small" sx={{ mr: 1, color: 'text.secondary' }}>
          {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>

        <IconButton
          size="small"
          component="a"
          href="https://github.com/kmmiio99o/ShiggyBot"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'text.secondary' }}
        >
          <GitHubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
