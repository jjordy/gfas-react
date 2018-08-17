import React from 'react'
import styled, { css } from 'styled-components'
import { StyledInput } from './Input'
import { StyledButton } from './Button'

const borderRadiusMixin = css`
  border-radius: .28rem;
`

const StyledForm = styled.form`
  font-size: 1rem;
  max-width: 100%;
  position: relative;
  ${StyledInput} {
    ${props => props.rounded && borderRadiusMixin}
  }
  ${StyledButton} {
    ${props => props.rounded && borderRadiusMixin}
  }
`

const Form = ({ onSubmit, ...rest }) => {
  const handleSubmit = (evt, ...args) => {
    evt.preventDefault()
    onSubmit(evt, ...rest, ...args)
  }
  return <StyledForm onSubmit={handleSubmit} {...rest} />
}

export default Form
