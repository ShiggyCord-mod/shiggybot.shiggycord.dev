import type { ReactNode } from 'react'
import GavelIcon from '@mui/icons-material/Gavel'
import CodeIcon from '@mui/icons-material/Code'
import SearchIcon from '@mui/icons-material/Search'
import ImageIcon from '@mui/icons-material/Image'
import SettingsIcon from '@mui/icons-material/Settings'
import SpeedIcon from '@mui/icons-material/Speed'

const iconMap: Record<string, ReactNode> = {
  moderation: <GavelIcon />,
  codePreviews: <CodeIcon />,
  pluginSearch: <SearchIcon />,
  funCommands: <ImageIcon />,
  autorole: <SettingsIcon />,
  gitHubStats: <SpeedIcon />,
}

export function getFeatureIcon(id: string): ReactNode {
  return iconMap[id] ?? null
}
