import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import {
  inputColorMixin,
  inputPaddingMixin,
  normalFontMixin,
  inputMarginMixin,
  heavyFontMixin,
  createRule
} from './mixins'
import withTheme from './withTheme'
import Color from 'color'

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

export const StyledSelect = styled.select`
  ${normalFontMixin};
  margin: 0;
  ${inputColorMixin};
  outline: 0;
  -webkit-appearance: none;
  line-height: 1.6em;
  ${inputPaddingMixin};
  background: #fff;
  border: ${props =>
    props.error
      ? `2px solid ${props.theme.colors.red}`
      : '1px solid rgba(34, 36, 38, 0.15)'};
  border-radius: ${props => (props.rounded ? '.28571429rem' : 0)};
  box-shadow: 0 0 0 0 transparent inset;
  transition: color 0.1s ease, border-color 0.1s ease;
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
  ${labelColorMixin}
  ${inputMarginMixin}
  ${heavyFontMixin}
  text-transform: none;
  $
`
const inlineLabelMixin = css`
  margin-right: 1rem;
`

const FormField = styled.div`
  width: 100%;
  position: relative;
  ${createRule(1, 'margin-bottom')};
  display: ${props => (props.inline ? 'flex' : 'block')};
  & ${StyledLabel} {
    ${props => props.inline && inlineLabelMixin};
  }
  &::after {
  content: ${props => !props.error && '>'};
    font: 1rem "Consolas", monospace;
    font-weight: 700;
    color: ${props =>
    props.theme.colors[props.color] || props.theme.colors.darkGray};
    transform: rotate(90deg);
    padding: 0 0 2px;
    ${createRule(0.5, 'margin-top')};
    ${createRule(-2, 'margin-left')};
    position: absolute;
    pointer-events: none;
  }
`

const Required = ({ required, theme }) => {
  if (required) {
    return <span style={{ color: theme.red || '#f30' }}>*</span>
  }
  return null
}

const SelectOption = ({ option }) => (
  <option value={option.value}>
    {option.name || option.label || option.value}
  </option>
)

const Select = ({
  theme,
  label,
  id,
  name,
  inline,
  message,
  options,
  children,
  ...rest
}) => {
  return (
    <FormField inline={inline} theme={theme}>
      <StyledLabel htmlFor={id || `id_${name}`} theme={theme}>
        {label} <Required {...rest} theme={theme} />
      </StyledLabel>
      <StyledSelect id={id || `id_${name}`} name={name} {...rest} theme={theme}>
        {options
          ? options.map((option, id) => (
            <SelectOption
              option={option}
              key={`${name}_select_option_${id}`}
            />
          ))
          : children}
      </StyledSelect>
      {message && (
        <FormMessage {...rest} theme={theme}>
          {message}
        </FormMessage>
      )}
    </FormField>
  )
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  label: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.node.isRequired
  ])
}

SelectOption.propTypes = { option: PropTypes.object }

Required.propTypes = {
  required: PropTypes.bool,
  theme: PropTypes.object
}

export default withTheme(Select)
