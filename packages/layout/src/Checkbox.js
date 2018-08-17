import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ThemeContext from './Theme'
import Icon from './Icon'

const Container = styled.div`
  display: inline-flex;
  user-select: none;
`

Container.displayName = 'Container'

export const Label = styled.span`
  margin-left: 8px;
  font-size: 1rem;
  font-weight: 700;
  color: ${({ color, theme }) => theme['black']};
`

Label.displayName = 'Label'

const Check = styled.div`
  width: 18px;
  height: 18px;
`

const HiddenCheck = styled.input`
  z-index: -1;
  width: .2px;
  translate: transform(99999px);
`

Check.displayName = 'Check'

export const CheckIcon = styled(Icon)`
  width: 18px;
  height: 18px;
  fill: ${({ color, theme }) => theme[color]};
`

CheckIcon.displayName = 'CheckIcon'

class Checkbox extends Component {
  constructor (props) {
    super(props)
    const { checked } = props

    this.state = {
      checked: checked
    }
  }

  onClick = () => {
    this.setState({ checked: !this.state.checked }, () => {
      this.props.onChange({ checked: this.state.checked })
    })
  }

  render () {
    const { id, label, ...rest } = this.props
    const { checked } = this.state

    return (
      <Container id={id} onClick={this.onClick}>
        <HiddenCheck type='checkbox' tabIndex='0' checked={checked} id={id} />
        <Check>
          <CheckIcon {...rest} icon={checked ? 'checkbox_checked' : 'checkbox_unchecked'} checked={checked} />
        </Check>
        {' '}
        <Label {...rest} className='label' htmlFor={id}>
          {label}
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
  onChange: () => {},
  color: 'grey'
}

export default function ThemedCheckbox (props) {
  return <ThemeContext.Consumer>{theme =>
    <Checkbox {...props} theme={theme} />
  }
  </ThemeContext.Consumer>
}
