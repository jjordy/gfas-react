import React from 'react'
import styled from 'styled-components'
import Loader from './Loader'
import Dimmer from './Dimmer'
import { spacing } from './mixins'
import withTheme from './withTheme'

const StyledForm = styled.form`
  font-size: 1rem;
  max-width: 100%;
  position: relative;
  ${spacing};
`

const ThemedForm = withTheme(StyledForm)

const Form = ({ onSubmit, loading, ...rest }) => {
  const handleSubmit = (evt, ...args) => {
    evt.preventDefault()
    onSubmit(evt, ...rest, ...args)
  }
  return (
    <React.Fragment>
      <Dimmer active={loading}>
        <Loader color='primary' />
      </Dimmer>
      <ThemedForm onSubmit={handleSubmit} {...rest} />
    </React.Fragment>
  )
}

export default Form
