import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from '../Icon'

const FakeRadio = styled.div`
  border: 1px solid #e7e7e7;
  width: 1rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1rem;
  margin-right: 0.5rem;
  color: ${props => props.theme.colors.info};
  & svg {
    margin-top: 0.14rem;
    width: 1rem;
    height: 1rem;
    align-self: center;
  }
`

const StyledRadioButton = styled.div`
  margin-bottom: 0.3rem;
  & label {
    display: flex;
    font-weight: 700;
    font-size: 0.7rem;
    align-items: center;
    margin-right: 0.2rem;
    margin-bottom: 0.2rem;
    color: ${props => props.theme.colors.grey};
    & input {
      clip: rect(1px 1px 1px 1px); /* IE 6/7 */
      clip: inset(50%); /* fix */
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap; /* fix */
      width: 1px;
    }
  }
`

const Fieldset = styled.fieldset`
  border: 0;
  display: ${props => (props.fluid ? 'block' : 'inline-block')};
  border: 1px solid #e7e7e7;
  box-shadow: 1px 1px 1px #e7e7e7;
  margin-bottom: 1rem;
  border-radius: 3px;
  & legend {
    font-weight: 700;
    font-size: 0.8rem;
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.info};
  }
`
// Radio input
export const RadioButton = ({ id, label, className, value, ...props }) => {
  return (
    <StyledRadioButton>
      <label htmlFor={id}>
        <FakeRadio>{value === id && <Icon icon='dot' />}</FakeRadio>
        <input
          name={name}
          id={id}
          type='radio'
          value={id}
          checked={
            id === value // could be something else for output?
          }
          {...props}
        />
        {label}
      </label>
    </StyledRadioButton>
  )
}

// Radio group
export const RadioButtonGroup = ({ label, fluid, children }) => {
  return (
    <div>
      <Fieldset fluid={fluid}>
        <legend>{label}</legend>
        {children}
      </Fieldset>
    </div>
  )
}

const Radio = ({ name, label, id, options, fluid, ...rest }) => (
  <RadioButtonGroup label={label} id={id} fluid={fluid}>
    {options &&
      options.map((opt, id) => (
        <RadioButton
          key={`Radio_${name}_${id}`}
          {...rest}
          id={opt.id}
          label={opt.label}
          name={name}
        />
      ))}
  </RadioButtonGroup>
)

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  id: PropTypes.string,
  options: PropTypes.array.isRequired,
  fluid: PropTypes.bool,
  values: PropTypes.object,
  errors: PropTypes.object,
  touched: PropTypes.object
}
export default Radio
