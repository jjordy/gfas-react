import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import withTheme from './withTheme'
import MyIcon, { Svg } from './Icon'
import { sharedPropTypes } from './sharedPropTypes'

import {
  textBasedOnColorMixin,
  fluidMixin,
  floatMixin,
  spacing,
  backgroundColorMixin,
  borderRadiusMixin,
  darkenBackgroundColorMixin,
  heavyFontMixin,
  iconReverseColorMixin,
  createRule
} from './mixins'

const Icon = styled.span`
  ${createRule(1, 'margin-left')} ${spacing};
`

const Content = styled.span`
  flex: 1 1 auto;
  ${spacing};
`

export const buttonStyles = css`
  ${createRule(1, 'min-height')}
  ${createRule(1, 'padding-right')}
  ${createRule(1, 'padding-left')}
  ${createRule(0.5, 'padding-top')}
  ${createRule(0.5, 'padding-bottom')}
  display: flex;
  align-self: center;
  box-sizing: border-box;
  align-items: center;
  justify-content: ${props => props.icon ? 'space-between' : 'space-around'};
  text-align: center;
  outline: 0;
  border: 1px solid ${props => props.color.darken(0.1).hex()};
  ${heavyFontMixin};
  vertical-align: middle;
  transition: background-color 0.2s ease;
  line-height: 1em;
  &[disabled] {
    background-color: #CCC;
    border: 0;
    &:hover {
      background-color: #CCC;
    }
  }
  &:hover {
     ${darkenBackgroundColorMixin}
  }
  &:focus {
    ${darkenBackgroundColorMixin}
  }
  & ${Svg} {
    ${iconReverseColorMixin}
  }
  ${backgroundColorMixin}
  ${fluidMixin}
  ${floatMixin}
  ${textBasedOnColorMixin}
  ${borderRadiusMixin}

  ${spacing}
`

export const StyledButton = styled.button.attrs({
  children: props => props.children || props.content || ''
})`
  ${buttonStyles};
`

const ThemedButton = withTheme(StyledButton)

const Button = ({ action, icon, labelPosition, children, content, ...rest }) => (
  <ThemedButton {...rest} icon={icon}>
    {icon && !labelPosition && <MyIcon icon={icon} mr={(children || content) && 1} />}
    {children || content}
    {icon && labelPosition && labelPosition === 'right' && <MyIcon icon={icon} ml={(children || content) && 1} />}
  </ThemedButton>
)

Button.Icon = withTheme(Icon)

Button.Content = withTheme(Content)

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  float: PropTypes.oneOf(['right', 'left']),
  fluid: PropTypes.bool,
  ...sharedPropTypes
}

Button.displayName = 'Button'

export default Button
