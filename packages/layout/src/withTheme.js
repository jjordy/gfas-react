import React from 'react'
import { ThemeProvider } from 'styled-components'
import WithColor from './withColor'
import defaultTheme from './Theme'

const createTheme = inheritedTheme => ({
  ...defaultTheme,
  ...inheritedTheme
})

const withTheme = (Component, defaultColor = 'lightGrey') => props => {
  return (
    <ThemeProvider theme={createTheme}>
      <WithColor {...props} defaultColor={defaultColor} Component={Component} />
    </ThemeProvider>
  )
}

export default withTheme
