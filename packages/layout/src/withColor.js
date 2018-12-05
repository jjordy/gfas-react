import React from 'react'
import { withTheme } from 'styled-components'
import Color from 'color'

const WithColor = ({ Component, bg, fg, theme, defaultColor, ...rest }) => {
  const bgObj = bg ? Color(theme.colors[bg]) : Color(theme.colors[defaultColor])
  const fgObj = fg ? Color(theme.colors[fg]) : null
  return <Component {...rest} bg={bgObj} fg={fgObj} />
}

export default withTheme(WithColor)
