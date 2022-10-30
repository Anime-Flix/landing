import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/icons-material/Menu'

export default function NavbarComponent() {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Menu />
        </IconButton>
        <Typography variant="h6" fontWeight={600}>
          &nbsp;Ani<span style={{ color: '#e91e63' }}>Flix</span>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
