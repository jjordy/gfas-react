import React from 'react'
import baseTheme from './baseTheme'
import { ThemeProvider } from 'styled-components'

export default function withTheme ({ children }) {
  return (
    <ThemeProvider theme={baseTheme()}>
      {children}
    </ThemeProvider>
  )
}
