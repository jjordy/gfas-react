import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import withTheme from '../withTheme'
import MyIcon, { Svg } from '../Icon'
import { sharedPropTypes } from '../sharedPropTypes'
import Box from '../Box'
import { darkenBackgroundColorMixin, heavyFontMixin, iconReverseColorMixin, createRule, findColor } from '../mixins'

const Icon = styled.span`
  ${createRule(1, 'margin-left')};
`

const Content = styled.span`
  flex: 1 1 auto;
`

export const buttonStyles = css`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: ${props => (props.icon ? 'space-between' : 'space-around')};
  text-align: center;
  outline: 0;
  ${heavyFontMixin};
  vertical-align: middle;
  transition: background-color 0.2s ease;
  line-height: 1em;
  &[disabled] {
    background-color: #ccc;
    border: 0;
    &:hover {
      background-color: #ccc;
    }
  }
  &:hover {
    ${darkenBackgroundColorMixin};
  }
  &:focus {
    ${darkenBackgroundColorMixin};
  }
  & ${Svg} {
    ${iconReverseColorMixin};
  }
  text-decoration: none;
  & a {
    text-decoration: none;
  }
`

export const StyledButton = styled(Box).attrs({
  as: props => (props.as ? props.as : 'button'),
  children: props => props.children || props.content || '',
  px: props => !props.p && !props.px && 1,
  py: props => !props.p && !props.y && 0.5,
  border: props =>
    props.border
      ? props.border
      : `1px solid ${findColor(props)
        .darken(0.1)
        .hex()}`
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
