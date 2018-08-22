import React from 'react'
import ThemeContext from './Theme'
import Color from 'color'

const withTheme = (Component, defaultColor = 'lightGrey') => props => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <WithColor
          {...props}
          defaultColor={defaultColor}
          theme={theme}
          Component={Component}
        />
      )}
    </ThemeContext.Consumer>
  )
}

const WithColor = ({ Component, color, theme, defaultColor, ...rest }) => {
  const c = color ? Color(theme[color]) : Color(theme[defaultColor])
  return <Component {...rest} theme={theme} color={c} />
}

export default withTheme
