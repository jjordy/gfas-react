import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import ThemeContext from './Theme'
import Color from 'color'

const labelColorMixin = css`
  color: ${props =>
    props.theme
      ? Color(props.theme.darkGrey)
        .darken(0.2)
        .hex()
      : 'rgba(0, 0, 0, 0.87)'};
`

const FormMessage = styled.small`
  font-size: 0.8rem;
  font-weight: 400;
  color: ${props => (props.error ? props.theme.red : props.theme.darkGray)};
`

export const StyledSelect = styled.select`
  font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  margin: 0;
  outline: 0;
  -webkit-appearance: none;
  tap-highlight-color: rgba(255, 255, 255, 0);
  line-height: 1.6em;
  padding: 0.2rem;
  font-size: 1.1em;
  background: #fff;
  border: ${props => (props.error ? `2px solid ${props.theme.red}` : '1px solid rgba(34, 36, 38, 0.15)')};
  color: ${({ theme }) => [theme['darkGrey']]};
  border-radius: ${props => (props.rounded ? '.28571429rem' : 0)};
  box-shadow: 0 0 0 0 transparent inset;
  transition: color 0.1s ease, border-color 0.1s ease;
  width: 100%;
  vertical-align: top;`

const StyledLabel = styled.label`
  display: block;
  margin: 0 0 0.28571429rem 0;
  ${labelColorMixin}
  font-size: 1.0em;
  font-weight: 700;
  text-transform: none;
  $
`
const inlineLabelMixin = css`
  margin-right: 1rem;
`

const FormField = styled.div`
  clear: both;
  margin: 0 0 1em;
  display: ${props => (props.inline ? 'flex' : 'inherit')} ${StyledLabel} {
    ${props => props.inline && inlineLabelMixin};
  }
  &::after {
    content: '>';
    font: 17px 'Consolas', monospace;
    font-weight: 700;
    color: ${props => props.theme[props.color] || props.theme.darkGray};
    transform: rotate(90deg);
    padding: 0 0 2px;
    margin-top: .5rem;
    margin-left: -2rem;
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
  <option value={option.value}>{option.name || option.label || option.value}</option>
)
const Select = ({ theme, label, id, name, inline, message, options, children, ...rest }) => {
  return (
    <FormField inline={inline} theme={theme}>
      <StyledLabel htmlFor={id || `id_${name}`} theme={theme}>
        {label} <Required {...rest} theme={theme} />
      </StyledLabel>
      <StyledSelect id={id || `id_${name}`} name={name} {...rest} theme={theme}>
        {options
          ? options.map((option, id) => <SelectOption option={option} key={`${name}_select_option_${id}`} />)
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
  label: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.node.isRequired])
}

const ThemedSelect = props => {
  return <ThemeContext.Consumer>{theme => <Select {...props} theme={theme} />}</ThemeContext.Consumer>
}

export default ThemedSelect
