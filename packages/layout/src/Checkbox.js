import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import withTheme from './withTheme';
import Icon from './Icon';
import { spacing } from './mixins';
import { sharedPropTypes } from './sharedPropTypes';

const Container = styled.div`
  display: inline-flex;
  user-select: none;
  margin-right: 1rem;
  align-self: center;
  ${spacing};
`

const FormMessage = styled.small`
  font-size: 0.8rem;
  font-weight: 400;
`

export const Label = styled.span`
  margin-left: 8px;
  font-size: 1rem;
  color: ${({ color, theme, error }) => {
    return error ? theme['red'] : theme['darkGray']
  }};
`

Label.displayName = 'Label';

const Check = styled.div`
  width: 18px;
  height: 18px;
`

const HiddenCheck = styled.input`
  z-index: -1;
  width: 0.2px;
  translate: transform(99999px);
`

Check.displayName = 'Check';

export const CheckIcon = styled(Icon)`
  width: 18px;
  height: 18px;
  fill: ${({ color, theme, error }) => {
    if (error) {
      return theme['red']
    } else {
      return color.hex()
    }
  }};
`

CheckIcon.displayName = 'CheckIcon';

class Checkbox extends Component {
  constructor (props) {
    super(props)
    const { checked } = props
    this.state = {
      checked: checked
    }
  }

  onClick = e => {
    this.setState({ checked: !this.state.checked }, () => {
      this.props.onChange(this.state.checked)
    })
  };

  render () {
    const { id, label, message, name, ...rest } = this.props
    const { checked } = this.state

    return (
      <Container id={id} onClick={this.onClick} {...rest}>
        <HiddenCheck
          type='checkbox'
          tabIndex='0'
          checked={checked}
          aria-labelledby={id || `id_${name}`}
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
        <Label {...rest} className='label' id={id || `id_${name}`}>
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
  onChange: () => {}
}

Checkbox.displayName = 'Checkbox';

Container.displayName = 'CheckboxContainer';

Container.propTypes = {
  ...sharedPropTypes
}
export default withTheme(Checkbox, 'grey')
