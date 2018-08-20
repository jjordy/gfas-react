import React from 'react'
import ThemeContext from './Theme'
import Color from 'color'

const withTheme = Component => props => {
  return (
    <ThemeContext.Consumer>
      {theme => <WithColor {...props} theme={theme} Component={Component} />}
    </ThemeContext.Consumer>
  )
}

const WithColor = ({Component, color, theme, ...rest}) => {
  const c = color ? Color(theme[color]) : null
  return <Component {...rest} theme={theme} color={c} />
}

export default withTheme
