import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import withTheme from '../withTheme'
import MyIcon, { Svg } from '../Icon'
import { sharedPropTypes } from '../sharedPropTypes'
import Box from '../Box'
import {
  darkenBackgroundColorMixin,
  heavyFontMixin,
  iconReverseColorMixin,
  createRule,
  findColor
} from '../mixins'

const Icon = styled.span`
  ${createRule(1, 'margin-left')};
`

const Content = styled.span`
  flex: 1 1 auto;
`

const outlineActiveCss = css`
  color: ${props =>
    findColor(props)
      .darken(0.2)
      .hex()};
  border: 1px solid
    ${props =>
    findColor(props)
      .darken(0.2)
      .hex()};
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
  background-color: ${props => (props.outline ? 'transparent' : '')};
  color: ${props => (props.outline ? findColor(props).hex() : '')};
  transition: background-color 0.2s ease;
  border: ${props =>
    props.border
      ? props.border
      : `1px solid ${findColor(props)
        .darken(0.1)
        .hex()}`};
  line-height: 1em;
  &[disabled] {
    background-color: #ccc;
    border: 0;
    &:hover {
      border: 0;
      background-color: #ccc;
    }
  }
  &:hover {
    ${props => !props.outline && darkenBackgroundColorMixin};
    ${props => props.outline && outlineActiveCss}
  }
  &:focus {
    ${props => !props.outline && darkenBackgroundColorMixin};
    ${props => props.outline && outlineActiveCss}
  }
  & ${Svg} {
    ${iconReverseColorMixin};
  }
  text-decoration: none;
  & a {
    text-decoration: none;
  }
`

export const StyledButton = styled(Box).attrs(props => ({
  children: props.children || props.content || '',
  // disabled: props.disabled === 'true' ? true : null,
  px: !props.p && !props.px && 1,
  py: !props.p && !props.py && 0.5
}))`
  ${buttonStyles};
`

StyledButton.defaultProps = {
  as: 'button',
  bg: 'lightGrey'
}

const ThemedButton = withTheme(StyledButton)

const Button = ({
  action,
  icon,
  labelPosition,
  children,
  content,
  ...rest
}) => {
  if (icon && typeof icon === 'string') {
    if (!labelPosition) {
      return (
        <ThemedButton {...rest} icon={icon}>
          <MyIcon icon={icon} mr={(children || content) && 1} />
          {children || content}
        </ThemedButton>
      )
    }
    if (labelPosition && labelPosition === 'right') {
      return (
        <ThemedButton {...rest} icon={icon}>
          {children || content}
          <MyIcon icon={icon} ml={(children || content) && 1} />
        </ThemedButton>
      )
    }
    if (labelPosition && labelPosition === 'left') {
      return (
        <ThemedButton {...rest} icon={icon}>
          {children || content}
          <MyIcon icon={icon} ml={(children || content) && 1} />
        </ThemedButton>
      )
    }
  } else if (icon && React.isValidElement(icon)) {
    if (!labelPosition) {
      return (
        <ThemedButton {...rest} icon={icon}>
          {icon}
          {children || content}
        </ThemedButton>
      )
    }
    if (labelPosition && labelPosition === 'right') {
      return (
        <ThemedButton {...rest} icon={icon}>
          {children || content}
          {icon}
        </ThemedButton>
      )
    }
    if (labelPosition && labelPosition === 'left') {
      return (
        <ThemedButton {...rest} icon={icon}>
          {children || content}
          {icon}
        </ThemedButton>
      )
    }
  } else if (icon && typeof icon === 'function') {
    if (!labelPosition) {
      return (
        <ThemedButton {...rest} icon={icon}>
          {icon()}
          {children || content}
        </ThemedButton>
      )
    }
    if (labelPosition && labelPosition === 'right') {
      return (
        <ThemedButton {...rest} icon={icon}>
          {children || content}
          {icon()}
        </ThemedButton>
      )
    }
    if (labelPosition && labelPosition === 'left') {
      return (
        <ThemedButton {...rest} icon={icon}>
          {children || content}
          {icon()}
        </ThemedButton>
      )
    }
  }
  return <ThemedButton {...rest}>{children || content}</ThemedButton>
}

Button.Icon = withTheme(Icon)

Button.Content = withTheme(Content)

Button.propTypes = {
  outline: PropTypes.bool,
  children: PropTypes.node,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  float: PropTypes.oneOf(['right', 'left']),
  fluid: PropTypes.bool,
  ...sharedPropTypes
}

Button.displayName = 'Button'

export default Button
