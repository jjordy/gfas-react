import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import withTheme from './withTheme'
import Color from 'color'
import {
  spacing,
  inputPaddingMixin,
  inputMarginMixin,
  normalFontMixin,
  heavyFontMixin,
  inputColorMixin,
  createRule
} from './mixins'

const labelColorMixin = css`
  color: ${props =>
    props.theme ? props.theme.colors.grey : 'rgba(0, 0, 0, 0.87)'};
`

const FormMessage = styled.small`
  font-size: 0.8rem;
  font-weight: 400;
  color: ${props =>
    props.error ? props.theme.colors.red : props.theme.colors.darkGray};
`

export const StyledInput = styled.input`
  ${normalFontMixin}
  margin: 0;
  outline: 0;
  -webkit-appearance: none;
  line-height: 1.6em;
  ${inputPaddingMixin}
  background: #fff;
  border: ${props =>
    props.error
      ? `2px solid ${props.theme.colors.red}`
      : '1px solid rgba(34, 36, 38, 0.15)'};
  ${inputColorMixin}
  border-radius: ${props => (props.rounded ? '.28571429rem' : 0)};
  box-shadow: 0 0 0 0 transparent inset;
  transition: color 0.1s ease, border-color 0.1s ease;
  width: 100%;
  vertical-align: top;
  :disabled {
    background-color: #f6f9fc;
  }
`

const StyledLabel = styled.label`
  display: block;
  ${inputMarginMixin}
  ${labelColorMixin}
  ${heavyFontMixin}
  text-transform: none;
`
const inlineLabelMixin = css`
  margin-right: 1rem;
`

const FormField = styled.div`
  clear: both;
  ${createRule(1, 'margin-bottom')};
  display: ${props => (props.inline ? 'flex' : 'inherit')} ${StyledLabel} {
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

const Input = ({
  theme,
  hideLabel,
  label,
  id,
  name,
  inline,
  message,
  ...rest
}) => {
  return (
    <FormField inline={inline} theme={theme} {...rest}>
      <StyledLabel
        hideLabel={hideLabel}
        htmlFor={id || `id_${name}`}
        theme={theme}
      >
        {label} <Required {...rest} theme={theme} />
      </StyledLabel>
      <StyledInput
        id={id || `id_${name}`}
        name={name}
        {...rest}
        theme={theme}
      />
      {message && (
        <FormMessage {...rest} theme={theme}>
          {message}
        </FormMessage>
      )}
    </FormField>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  label: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.node.isRequired
  ])
}

const ThemedInput = withTheme(Input)

export default ThemedInput
