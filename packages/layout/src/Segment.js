import React from 'react'
import PropTypes from 'prop-types'
import ThemeContext from './Theme'
import Color from 'color'
import styled, { css } from 'styled-components'
import { StyledButton } from './Button'
import { StyledInput } from './Input'
import { CheckIcon } from './Checkbox'

const borderTopRadiusMixin = css`
  border-top-right-radius: .28rem;
  border-top-left-radius: .28rem;
`

const borderBottomRadiusMixin = css`
  border-bottom-right-radius: .28rem;
  border-bottom-left-radius: .28rem;
`

const attachedTopMixin = css`
  margin-top: 1rem;
  border-bottom: 0;
  ${props => props.rounded && borderTopRadiusMixin}
`

const attachedMixin = css`
  margin-top: 0;
  border-bottom: 0;
  margin-bottom: 0;
`

const attachedBottomMixin = css`
  margin-bottom: 1rem;
  ${props => props.rounded && borderBottomRadiusMixin}
`

const segmentMixin = css`
  border-radius: ${props => props.rounded ? '.28rem' : '0px'};
  margin: 1rem;
  ${StyledButton} {
    border-radius: ${props => props.rounded ? '.28rem' : '0px'};
  }
  ${StyledInput} {
    border-radius: ${props => props.rounded ? '.28rem' : '0px'};
  }
`

const paddedMixin = css`
  padding: 2rem;
`

const veryPaddedMixin = css`
  padding: 2.5rem;
`

const colorMixin = css`
  border-top: 0.15rem solid ${props => props.color.hex()};
  ${StyledButton} {
    background-color: ${props => props.color.hex()};
    color: ${props => (props.color.isDark() ? '#FFF' : '#222')};
    &:hover {
      background-color: ${props => props.color.darken(0.2).hex()};
    }
    &:focus {
      background-color: ${props => props.color.darken(0.2).hex()};
    }
  }
  ${CheckIcon} {
    fill: ${props => props.color.hex()};
  }
`

const clearingMixin = css`
  overflow: auto;
  &::after {
    content: '.';
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
`

const Segment = styled.div`
  border: 1px solid #e7e7e7;
  margin-left: 1rem;
  margin-right: 1rem;
  padding: 1rem;
  clear: ${props => (props.clearing ? clearingMixin : null)};
  ${props => props.attached && props.attached === 'top' && attachedTopMixin}
  ${props => props.attached && props.attached === 'bottom' && attachedBottomMixin}
  ${props => props.attached && typeof props.attached === 'boolean' && attachedMixin}
  ${props => !props.attached && segmentMixin}
  ${props => props.padded && props.padded === 'very' && veryPaddedMixin}
  ${props => props.padded && typeof props.padded === 'boolean' && paddedMixin}
  ${props => props.color && colorMixin}
`

Segment.propTypes = {
  clearing: PropTypes.bool,
  children: PropTypes.node.isRequired,
  attached: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['top', 'bottom'])]),
  padded: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['very'])])
}

const WithColor = ({ theme, color, ...rest }) => {
  let hex = null
  if (color) {
    hex = Color(theme[color])
  }
  return <Segment {...rest} color={hex} />
}

export default function ThemedSegment (props) {
  return <ThemeContext.Consumer>{theme => <WithColor {...props} theme={theme} />}</ThemeContext.Consumer>
}
