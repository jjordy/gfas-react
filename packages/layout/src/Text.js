import React from 'react'
import styled from 'styled-components'
import ThemeContext from './Theme'
import Color from 'color'

const P = styled.p`
  font-size: 1rem;
`

const Strong = styled.strong`
`

function Text ({ color, theme, ...rest }) {
  let colorObj = null
  if (color) {
    colorObj = Color(theme[color])
  }
  return <P {...rest} color={colorObj} />
}

export default function ThemedText ({ strong, ...props }) {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <React.Fragment>
          {strong ? <Strong {...props} theme={theme} /> : <Text {...props} theme={theme} />}
        </React.Fragment>
      )}
    </ThemeContext.Consumer>
  )
}
