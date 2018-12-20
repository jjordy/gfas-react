import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import {
  inputColorMixin,
  inputPaddingMixin,
  normalFontMixin,
  createRule,
  borderRadiusMixin
} from '../mixins'
import withTheme from '../withTheme'
import Color from 'color'
import { StyledLabel } from '../Input'

const FormMessage = styled.small`
  font-size: 0.8rem;
  font-weight: 400;
  color: ${props =>
    props.error ? props.theme.colors.red : props.theme.colors.grey};
`

export const StyledSelect = styled.select`
  ${normalFontMixin};
  margin: 0;
  ${inputColorMixin};
  outline: 0;
  -webkit-appearance: none;
  height: ${props => `${props.theme.BASE_SIZE * 2}${props.theme.UNIT}`};
  line-height: ${props => props.theme.lineHeight};
  ${inputPaddingMixin};
  background: #fff;
  border: ${props =>
    props.error
      ? `2px solid ${props.theme.colors.red}`
      : '1px solid rgba(34, 36, 38, 0.15)'};
  ${borderRadiusMixin};
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

const inlineLabelMixin = css`
  max-width: 150px;
  min-width: 150px;
`

const FormField = styled.div`
  width: 100%;
  position: relative;
  ${createRule(1, 'margin-bottom')};
  display: ${props => (props.inline ? 'flex' : 'block')};
  align-items: center;
  & ${StyledLabel} {
    ${props => props.inline && inlineLabelMixin};
  }
`

const InputWrapper = styled.div`
  width: 100%;
  :after {
    content: ${props => !props.error && '">"'};
    font: 1rem 'Consolas', monospace;
    font-weight: 700;
    color: ${props =>
    props.theme.colors[props.color] || props.theme.colors.darkGray};
    transform: rotate(90deg);
    padding: 0 0 2px;
    ${createRule(0.4, 'margin-top')};
    ${createRule(-2, 'margin-left')};
    position: absolute;
    pointer-events: none;
  }
`

const RequiredSpan = styled.span`
  color: ${props => props.theme.colors.red || '#f30'};
`

const Required = ({ required }) => {
  if (required) {
    return <RequiredSpan>*</RequiredSpan>
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
  hideLabel,
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
      <div style={{ width: '100%' }}>
        <InputWrapper>
          <StyledSelect
            id={id || `id_${name}`}
            name={name}
            {...rest}
            theme={theme}
          >
            {options
              ? options.map((option, id) => (
                <SelectOption
                  option={option}
                  key={`${name}_select_option_${id}`}
                />
              ))
              : children}
          </StyledSelect>
        </InputWrapper>
        {message && (
          <FormMessage {...rest} theme={theme}>
            {message}
          </FormMessage>
        )}
      </div>
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
  required: PropTypes.bool
}

export default withTheme(Select)
