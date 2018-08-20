import React from 'react'

const DEFAULT_UNIT = 1
const UNIT = 'rem'

const defaultTheme = {
  blue: '#004D71',
  green: '#94D500',
  yellow: '#F2DF00',
  teal: '#00BBB3',
  lightBlue: '#00A5CD',
  red: '#EF483D',
  orange: '#f26B3B',
  white: '#FFF',
  black: '#222',
  grey: '#ccc',
  darkGrey: '#594A46',
  space: {
    xs: `${DEFAULT_UNIT / 4}${UNIT}`,
    sm: `${DEFAULT_UNIT / 2}${UNIT}`,
    md: `${DEFAULT_UNIT}${UNIT}`,
    lg: `${DEFAULT_UNIT * 2}${UNIT}`,
    xl: `${DEFAULT_UNIT * 4}${UNIT}`
  }
}

const ThemeContext = React.createContext(defaultTheme)

export default ThemeContext
