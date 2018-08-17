import React from 'react'
import PropTypes from 'prop-types'
import ThemeContext from './Theme'
import Color from 'color'
import styled from 'styled-components'

export const StyledButton = styled.button.attrs({
  role: props => props.role || 'button'
})`
  font-size: 1rem;
  display: inline-block;
  min-height: 1em;
  outline: 0;
  border: ${props => (props.color.isDark() ? 0 : '1px solid #e7e7e7')};
  margin: 0 0.25em 0 0;
  box-shadow: ${props => (props.color.isDark() ? 'none' : '#222 #222 #222 2px')};
  padding: 0.78em 1.5em 0.78em;
  text-align: center;
  font-weight: 700;
  line-height: 1em;
  border-radius: ${props => props.rounded ? '0.28rem' : '0'};
  float: ${props => (props.float ? props.float : null)};
  background-color: ${props => (props.color ? props.color.hex() : 'inherit')};
  color: ${props => (props.color.isDark() ? '#FFF' : '#222')};
  &:hover {
    background-color: ${props => props.color.darken(0.2).hex()};
  }
  &:focus {
    background-color: ${props => props.color.darken(0.2).hex()};
  }
`

function Button (props) {
  const color = Color(props.theme[props.color] || '#e7e7e7')
  return <StyledButton {...props} color={color} />
}

export default function ThemedButton (props) {
  return <ThemeContext.Consumer>{theme => <Button {...props} theme={theme} />}</ThemeContext.Consumer>
}

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(['blue', 'green', 'yellow', 'teal', 'orange', 'red', 'lightBlue', 'white', 'black']),
  content: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
  float: PropTypes.oneOf(['right', 'left']),
  fluid: PropTypes.bool,
  theme: PropTypes.object.isRequired
}
