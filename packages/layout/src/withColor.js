import React from 'react'
import { withTheme } from 'styled-components'
import Color from 'color'

const WithColor = ({ Component, color, theme, defaultColor, ...rest }) => {
  const c = color
    ? Color(theme.colors[color])
    : Color(theme.colors[defaultColor])
  return <Component {...rest} color={c} />
}

export default withTheme(WithColor)
