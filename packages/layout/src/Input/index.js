import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import withTheme from '../withTheme'
import {
  spacing,
  inputPaddingMixin,
  normalFontMixin,
  inputColorMixin,
  createRule,
  borderRadiusMixin
} from '../mixins'
import Color from 'color'
import { sharedPropTypes } from '../sharedPropTypes'
import FormLabel from '../FormLabel'

export const FormMessage = styled.small`
  font-size: 0.8rem;
  font-weight: 400;
  color: ${props =>
    props.error ? props.theme.colors.red : props.theme.colors.grey};
`

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  &:first-child input {
    border-top-right-radius: 0px !important;
    border-bottom-right-radius: 0px !important;
  }

  & button {
    border-top-left-radius: 0px !important;
    border-bottom-left-radius: 0px !important;
    height: ${props => `${props.theme.BASE_SIZE * 2}${props.theme.UNIT}`};
    border-left: 0px;
  }
`

export const StyledInput = styled.input`
  ${normalFontMixin} margin: 0;
  outline: 0;
  -webkit-appearance: none;
  height: ${props => `${props.theme.BASE_SIZE * 2}${props.theme.UNIT}`};
  line-height: ${props => props.theme.lineHeight};
  ${inputPaddingMixin} background: #fff;
  border: ${props =>
    props.error
      ? `2px solid ${props.theme.colors.red}`
      : '1px solid rgba(34, 36, 38, 0.15)'};
  ${inputColorMixin};
  ${borderRadiusMixin};
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

export const inlineLabelMixin = css`
  ${createRule(1, 'margin-right')};
  width: 150px;
`

export const FormField = styled.div`
  margin-bottom: 1rem;
  clear: both;
  display: ${props => (props.inline ? 'flex' : 'block')};
  flex: 1;
  align-items: center;
  ${FormLabel} {
    ${props => props.inline && inlineLabelMixin};
  }
  ${spacing};
`

export const RequiredSpan = styled.span`
  color: ${props => props.theme.colors.red || '#f30'};
`

export const Required = ({ required }) => {
  if (required) {
    return <RequiredSpan>*</RequiredSpan>
  }
  return null
}

Required.propTypes = {
  required: PropTypes.bool
}

const Input = ({
  action,
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
      <FormLabel
        hideLabel={hideLabel}
        htmlFor={id || `id_${name}`}
        theme={theme}
      >
        {label || name} <Required {...rest} theme={theme} />
      </FormLabel>
      <div style={{ width: '100%' }}>
        {action ? (
          <ActionContainer>
            <StyledInput
              id={id || `id_${name}`}
              name={name}
              {...rest}
              theme={theme}
            />
            {action()}
          </ActionContainer>
        ) : (
          <StyledInput
            id={id || `id_${name}`}
            name={name}
            {...rest}
            theme={theme}
          />
        )}
        {message && <FormMessage {...rest}>{message}</FormMessage>}
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
  label: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.node.isRequired
  ]),
  ...sharedPropTypes
}

ThemedInput.displayName = 'Input'

export default ThemedInput
