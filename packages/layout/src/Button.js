import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import withTheme from './withTheme'
import {
  textBasedOnColorMixin,
  fluidMixin,
  floatMixin,
  spacing,
  backgroundColorMixin,
  borderRadiusMixin,
  darkenBackgroundColorMixin,
  heavyFontMixin
} from './mixins'

const Icon = styled.span`
  margin-left: 1rem;
  ${spacing};
`

const Content = styled.span`
  flex: 1 1 auto;
  ${spacing};
`

export const buttonStyles = css`
  min-height: 1em;
  display: flex;
  align-self: center;
  flex: 1 1 auto;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  outline: 0;
  border: ${props => (props.color && props.color.isDark() ? 0 : '1px solid #e7e7e7')};
  box-shadow: ${props => (props.color && props.color.isDark() ? 'none' : '1px 1px 1px #e7e7e7')};
  ${heavyFontMixin}
  vertical-align: middle;
  line-height: 1em;
  &:hover {
     ${darkenBackgroundColorMixin}
  }
  &:focus {
    ${darkenBackgroundColorMixin}
  }
  ${backgroundColorMixin}
  ${fluidMixin}
  ${floatMixin}
  ${textBasedOnColorMixin}
  ${borderRadiusMixin}
  padding-right: ${props => `
    ${props.theme.BASE_SIZE * 2}${props.theme.UNIT};
  `};
  padding-left: ${props => `
    ${props.theme.BASE_SIZE * 2}${props.theme.UNIT};
  `};
  padding-top: ${props => `
    ${props.theme.BASE_SIZE * 1.5}${props.theme.UNIT};
  `};
  padding-bottom: ${props => `
    ${props.theme.BASE_SIZE * 1.5}${props.theme.UNIT};
  `};
  ${spacing}
`

export const StyledButton = styled.button.attrs({
  role: props => props.role || 'button',
  children: props => props.children || props.content || ''
})`
  ${buttonStyles};
`

const Button = withTheme(StyledButton)

Button.Icon = Icon

Button.Content = Content

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  float: PropTypes.oneOf(['right', 'left']),
  fluid: PropTypes.bool
}

Button.displayName = 'Button'

export default Button
