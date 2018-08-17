const theme = () => {
  const space_unit = 16
  const unit = 'px'

  return {
    space: {
      xs: `${space_unit / 4}${unit}`,
      sm: `${space_unit / 2}${unit}`,
      md: `${space_unit}${unit}`,
      lg: `${space_unit * 2}${unit}`,
      xl: `${space_unit * 4}${unit}`
    },

    fontSizes: {
      xs: '10px',
      sm: '12px',
      md: '16px',
      lg: '24px',
      xl: '36px'
    },

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
      grey: '#ccc',
      darkGrey: '#7F8489'
    }
  }
}

export default theme
