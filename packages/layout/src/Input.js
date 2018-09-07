import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import withTheme from './withTheme'
import {
  spacing,
  inputPaddingMixin,
  inputMarginMixin,
  normalFontMixin,
  heavyFontMixin,
  inputColorMixin,
  createRule,
  borderRadiusMixin
} from './mixins'
import Color from 'color'
import { sharedPropTypes } from './sharedPropTypes'
import Icon from './Icon'
import Button from './Button'

const labelColorMixin = css`
  color: ${props => (props.theme ? props.theme.colors.grey : 'rgba(0, 0, 0, 0.87)')};
`

const FormMessage = styled.small`
  font-size: 0.8rem;
  font-weight: 400;
  color: ${props => (props.error ? props.theme.colors.red : props.theme.colors.grey)};
`

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  &:first-child input {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }

  & button {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    height: 36px;
    border-left: 0px;
  }
`

export const StyledInput = styled.input`
  ${normalFontMixin} margin: 0;
  outline: 0;
  -webkit-appearance: none;
  line-height: 1.6em;
  ${inputPaddingMixin} background: #fff;
  border: ${props => (props.error ? `2px solid ${props.theme.colors.red}` : '1px solid rgba(34, 36, 38, 0.15)')};
  ${inputColorMixin} ${borderRadiusMixin}
  box-shadow: 0 0 0 0 transparent inset;
  transition: color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  width: 100%;
  vertical-align: top;
  :disabled {
    background-color: #f6f9fc;
  }

  :focus {
    border-color: ${props => !props.error && props.theme.colors.info};
    box-shadow: 0 0 0 0.2rem
      rgba(
        ${props =>
    !props.error &&
          Color(props.theme.colors.info)
            .rgb()
            .array()
            .join(',')},
        0.25
      );
  }
`

const StyledLabel = styled.label`
  display: block;
  ${inputMarginMixin}
  ${labelColorMixin}
  ${heavyFontMixin}
  ${props =>
    props.hideLabel &&
    `
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
  `}
  text-transform: none;
`
const inlineLabelMixin = css`
  ${createRule(1, 'margin-right')};
`

const FormField = styled.div`
  clear: both;
  ${props => (props.inline ? 'margin-right: 1rem' : 'margin-bottom: 1rem')};
  display: ${props => (props.inline ? 'flex' : 'block')};
  align-items: center;
  ${StyledLabel} {
    ${props => props.inline && inlineLabelMixin};
  }
  ${spacing};
`

const Required = ({ required, theme }) => {
  if (required) {
    return <span style={{ color: theme.red || '#f30' }}>*</span>
  }
  return null
}

Required.propTypes = {
  required: PropTypes.bool,
  theme: PropTypes.object
}

const Input = ({ action, theme, hideLabel, label, id, name, inline, message, ...rest }) => {
  return (
    <FormField inline={inline} theme={theme} {...rest}>
      <StyledLabel hideLabel={hideLabel} htmlFor={id || `id_${name}`} theme={theme}>
        {label} <Required {...rest} theme={theme} />
      </StyledLabel>
      <div>
        {action ? (
          <ActionContainer>
            <StyledInput id={id || `id_${name}`} name={name} {...rest} theme={theme} />
            {action()}
          </ActionContainer>
        ) : (
          <StyledInput id={id || `id_${name}`} name={name} {...rest} theme={theme} />
        )}
        {message && (
          <FormMessage {...rest} theme={theme}>
            {message}
          </FormMessage>
        )}
      </div>
    </FormField>
  )
}

const ThemedInput = withTheme(Input)

ThemedInput.propTypes = {
  action: PropTypes.func,
  actionIcon: PropTypes.string,
  actionName: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  inline: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  message: PropTypes.string,
  hideLabel: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.node.isRequired]),
  ...sharedPropTypes
}

ThemedInput.displayName = 'Input'

export default ThemedInput
