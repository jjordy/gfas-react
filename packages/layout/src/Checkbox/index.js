import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import withTheme from '../withTheme'
import Icon from '../Icon'
import { spacing, findColor } from '../mixins'
import { sharedPropTypes } from '../sharedPropTypes'

const Container = styled.div`
  display: inline-flex;
  box-sizing: border-box;
  user-select: none;
  margin-right: 1rem;
  align-self: center;
  outline: 0;
  ${spacing};
`

const FormMessage = styled.small`
  font-size: 0.8rem;
  font-weight: 400;
`

export const Label = styled.label`
  margin-left: 8px;
  font-size: 1rem;
  color: ${({ color, theme, error }) => {
    return error ? theme.red : theme.darkGray
  }};
`

Label.displayName = 'Label'

const Check = styled.div`
  width: 18px;
  height: 18px;
`

const HiddenCheck = styled.input`
  z-index: -1;
  width: 0.2px;
  translate: transform(99999px);
  &:focus {
    outline: none;
  }
`

Check.displayName = 'Check'

export const CheckIcon = styled(Icon)`
  width: 18px;
  height: 18px;
  fill: ${({ bg, theme, error }) => {
    if (error) {
      return theme.red
    } else {
      return findColor({ bg, theme }).hex()
    }
  }};
`

CheckIcon.displayName = 'CheckIcon'

export class Checkbox extends PureComponent {
  constructor (props) {
    super(props)
    const { checked } = props

    this.state = { checked: checked, overrideFocusStyles: false }
  }

  onClick = e => {
    this.setState(
      { checked: !this.state.checked, overrideFocusStyles: true },
      () => {
        this.props.onChange(this.state.checked)
      }
    )
  }

  componentDidUpdate (prevProps) {
    if (this.props.checked !== prevProps.checked) {
      this.setState({ checked: this.props.checked })
    }
  }

  handleSpacebar = evt => {
    if (evt.keyCode === 32) {
      this.setState(currentState => {
        this.props.onChange(!currentState.checked)
        return { checked: !currentState.checked }
      })
    }
  }

  render () {
    const { id, label, message, name, ...rest } = this.props
    const { checked, overrideFocusStyles } = this.state

    return (
      <Container
        onClick={this.onClick}
        {...rest}
        overrideFocusStyles={overrideFocusStyles}
        tabIndex='0'
        onKeyDown={this.handleSpacebar}
      >
        <HiddenCheck
          type='checkbox'
          tabIndex='-1'
          name={name}
          checked={checked}
          id={id || `id_${name}`}
          onChange={() => {}}
        />
        <Check>
          <CheckIcon
            name={name}
            icon={checked ? 'checkbox_checked' : 'checkbox_unchecked'}
            checked={checked}
            {...rest}
          />
        </Check>{' '}
        <Label {...rest} className='label' htmlFor={id || `id_${name}`}>
          {label}
          <br />
          <FormMessage>{message && message}</FormMessage>
        </Label>
      </Container>
    )
  }
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func
}

Checkbox.defaultProps = {
  checked: false,
  bg: 'grey',
  onChange: () => {}
}

Checkbox.displayName = 'Checkbox'

Container.displayName = 'CheckboxContainer'

Container.propTypes = {
  ...sharedPropTypes
}

export default withTheme(Checkbox, 'grey')
