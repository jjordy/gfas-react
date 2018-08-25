import React from 'react'

export const defaultTheme = {
  BASE_SIZE: 1.2,
  UNIT: 'rem',
  rounded: true,
  colors: {
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
    primary: '#004D71',
    secondary: '#f8f9fa',
    success: '#94D500',
    error: '#EF483D',
    info: '#00A5CD'
  }
}

const ThemeContext = React.createContext(defaultTheme)

export default ThemeContext
