import React from 'react'
import { ThemeProvider } from 'styled-components'
import defaultTheme from './Theme'

const createTheme = inheritedTheme => ({
  ...defaultTheme,
  ...inheritedTheme
})

const withTheme = (Component, defaultColor = 'lightGrey') => props => {
  return (
    <ThemeProvider theme={createTheme}>
      <Component {...props} />
    </ThemeProvider>
  )
}

export default withTheme
