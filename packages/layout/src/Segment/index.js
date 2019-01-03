import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Dimmer from '../Dimmer'
import Loader from '../Loader'
import withTheme from '../withTheme'
import {
  borderRadiusMixin,
  createRule,
  borderTopRadiusMixin,
  borderBottomRadiusMixin,
  findColor,
  hasPaddingProp
} from '../mixins'
import { StyledButton } from '../Button'
import { StyledInput } from '../Input'
import { StyledSelect } from '../Select'
import Box from '../Box'

const attachedTopMixin = css`
  margin-top: 1rem;
  border-bottom: 0;
  ${borderTopRadiusMixin};
`

const attachedMixin = css`
  margin-top: 0;
  border-bottom: 0;
  margin-bottom: 0;
  border-radius: 0px;
`

const attachedBottomMixin = css`
  margin-bottom: 1rem;
  ${borderBottomRadiusMixin};
`

const colorMixin = css`
  border-top: 0.15rem solid ${props => findColor(props).hex()};
  color: ${props => props.theme.colors.black};
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

const Segment = styled(Box)`
  ${props => (!props.vertical ? 'border: 1px solid #e7e7e7' : null)};
  position: relative;
  padding: ${props => (!hasPaddingProp(props) ? '1rem' : null)};
  clear: ${props => (props.clearing ? clearingMixin : null)};
  ${props => props.attached && props.attached === 'top' && attachedTopMixin}
  ${props =>
    props.attached && props.attached === 'bottom' && attachedBottomMixin}
  ${props =>
    props.attached && typeof props.attached === 'boolean' && attachedMixin}
  ${props => props.bg && colorMixin}
  background-color: ${props => !props.vertical && '#FFF'};
  & ${Dimmer} {
    padding: 0;
  }

  & ${StyledButton} {
    ${borderRadiusMixin}
  }

  & ${StyledInput} {
    ${borderRadiusMixin}
  }

  & ${StyledSelect} {
    ${borderRadiusMixin}
  }
`

Segment.propTypes = {
  clearing: PropTypes.bool,
  children: PropTypes.node,
  attached: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['top', 'bottom'])
  ])
}

const ThemedSegment = withTheme(Segment)

const LoadingSegment = ({ loading, ...rest }) => (
  <React.Fragment>
    <Dimmer active={loading}>
      <Loader active={loading} />
    </Dimmer>
    <ThemedSegment {...rest} />
  </React.Fragment>
)

export default LoadingSegment
