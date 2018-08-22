import React from 'react'

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
  grey: '#6c757d',
  darkGrey: '#343a40',
  lightGrey: '#f8f9fa',
  BASE_SIZE: 0.5,
  UNIT: 'rem'
}

const ThemeContext = React.createContext(defaultTheme)

export default ThemeContext
