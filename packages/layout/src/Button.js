import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import withTheme from './withTheme'

const widthMixin = css`
  width: ${props => props.fluid && '100%'};
`

const Icon = styled.span`
  margin-left: 1rem;
`

const Content = styled.span`
  flex: 1 1 auto;
`

export const StyledButton = styled.button.attrs({
  role: props => props.role || 'button',
  children: props => props.children || props.content || ''
})`
  font-size: 1rem;
  min-height: 1em;
  display: flex;
  align-self: center;
  flex: 1 1 auto;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  outline: 0;
  border: ${props =>
    props.color && props.color.isDark() ? 0 : '1px solid #e7e7e7'};
  margin: 0 0.25em 0 0;
  box-shadow: ${props =>
    props.color && props.color.isDark() ? 'none' : '1px 1px 1px #e7e7e7'};
  padding: 0.78em 1.5em 0.78em;
  text-align: center;
  font-family: inherit;
  font-weight: 700;
  vertical-align: middle;
  line-height: 1em;
  ${widthMixin}
  border-radius: ${props => (props.rounded ? '0.28rem' : '0')};
  float: ${props => (props.float ? props.float : null)};
  background-color: ${props => (props.color ? props.color.hex() : 'inherit')};
  color: ${props => (props.color && props.color.isDark() ? '#FFF' : '#222')};
  &:hover {
    background-color: ${props => props.color && props.color.darken(0.1).hex()};
  }
  &:focus {
    background-color: ${props => props.color && props.color.darken(0.1).hex()};
  }
`

const Button = withTheme(StyledButton)

Button.Icon = Icon

Button.Content = Content

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf([
    'blue',
    'green',
    'yellow',
    'teal',
    'orange',
    'red',
    'lightBlue',
    'white',
    'black'
  ]),
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  float: PropTypes.oneOf(['right', 'left']),
  fluid: PropTypes.bool,
  theme: PropTypes.object.isRequired
}

export default Button
