import { CircularProgress, Zoom } from '@mui/material'
import React from 'react'

export default function LoadingComponent() {
  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
      <Zoom in={true} style={{ transitionDelay: '500ms' }}>
        <CircularProgress />
      </Zoom>
    </div>
  )
}
