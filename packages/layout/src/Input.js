import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import ThemeContext from './Theme'
import Color from 'color'

export const StyledInput = styled.input`
  font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  margin: 0;
  outline: 0;
  -webkit-appearance: none;
  tap-highlight-color: rgba(255, 255, 255, 0);
  line-height: 1.6em;
  padding: 0.67857143em 1em;
  font-size: 1.1em;
  font-weight: 700;
  background: #fff;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  border-radius: ${props => (props.rounded ? '.28571429rem' : 0)};
  box-shadow: 0 0 0 0 transparent inset;
  transition: color 0.1s ease, border-color 0.1s ease;
  width: 100%;
  vertical-align: top;
`

const StyledLabel = styled.label`
  display: block;
  margin: 0 0 0.28571429rem 0;
  color: ${props => props.theme ? Color(props.theme.darkGrey).darken(0.2).hex() : 'rgba(0, 0, 0, 0.87)'};
  font-size: 0.92857143em;
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
  display: ${props => (props.inline ? 'flex' : 'inherit')}
  justify-content: center;
  align-items: center;
  ${StyledLabel} {
    ${props => props.inline && inlineLabelMixin}
  }
`

const Required = ({ required, theme }) => {
  if (required) {
    return <span style={{ color: theme.red || '#f30' }}>*</span>
  }
  return null
}

const Input = ({ theme, label, id, name, inline, ...rest }) => {
  return (
    <FormField inline={inline} theme={theme}>
      <StyledLabel htmlFor={id || `id_${name}`} theme={theme}>
        {label} <Required {...rest} theme={theme} />
      </StyledLabel>
      <StyledInput id={id || `id_${name}`} name={name} {...rest} theme={theme} />
    </FormField>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.node.isRequired])
}

const ThemedInput = props => {
  return <ThemeContext.Consumer>{theme => <Input {...props} theme={theme} />}</ThemeContext.Consumer>
}

export default ThemedInput
