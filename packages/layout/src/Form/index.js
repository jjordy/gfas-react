import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Loader from '../Loader'
import Dimmer from '../Dimmer'
import { spacing } from '../mixins'
import withTheme from '../withTheme'
import { sharedPropTypes } from '../sharedPropTypes'

export const StyledForm = styled.form`
  font-size: 1rem;
  max-width: 100%;
  ${spacing};
`

const ThemedForm = withTheme(StyledForm)

export const Form = ({ onSubmit, loading, ...rest }) => {
  const handleSubmit = (evt, ...args) => {
    evt.preventDefault()
    onSubmit(evt, ...rest, ...args)
  }
  return (
    <React.Fragment>
      <Dimmer active={loading}>
        <Loader bg='primary' />
      </Dimmer>
      <ThemedForm onSubmit={handleSubmit} {...rest} />
    </React.Fragment>
  )
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  ...sharedPropTypes
}

export default Form
