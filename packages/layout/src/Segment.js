import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Dimmer from './Dimmer'
import Loader from './Loader'
import withTheme from './withTheme'
import { spacing, borderRadiusMixin } from './mixins'
import { StyledButton } from './Button'
import { StyledInput } from './Input'

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
`

const colorMixin = css`
  border-top: .14rem solid ${props => props.color.hex()};
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
  position: relative;
  ${spacing}
  clear: ${props => (props.clearing ? clearingMixin : null)};
  ${props => props.attached && props.attached === 'top' && attachedTopMixin}
  ${props =>
    props.attached && props.attached === 'bottom' && attachedBottomMixin}
  ${props =>
    props.attached && typeof props.attached === 'boolean' && attachedMixin}
  ${props => !props.attached && segmentMixin}
  ${props => props.color && colorMixin}
  background-color: #fff;
  & ${Dimmer} {
    padding: 0;
  }

  & ${StyledButton} {
    ${borderRadiusMixin}
  }

  & ${StyledInput} {
    ${borderRadiusMixin}
  }
`

Segment.propTypes = {
  clearing: PropTypes.bool,
  children: PropTypes.node.isRequired,
  attached: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['top', 'bottom'])])
}

Segment.defaultProps = {
  p: 2,
  loading: false
}

const ThemedSegment = withTheme(Segment)

const LoadingSegment = ({loading, ...rest}) => (
  <div style={{position: 'relative'}}>
    <Dimmer active={loading}>
      <Loader color='blue' />
    </Dimmer>
    <ThemedSegment {...rest} />
  </div>
)

export default LoadingSegment
