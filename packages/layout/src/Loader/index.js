import React from 'react'
import PropTypes from 'prop-types'
import withTheme from '../withTheme'
import { findColor } from '../mixins'
import Puff from './Puff'
import Bars from './Bars'
import Audio from './Audio'
import Rings from './Rings'
import Oval from './Oval'
import ThreeDots from './ThreeDots'
import styled, { keyframes } from 'styled-components'

const dualRing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const FallbackLoader = styled.div`
  display: inline-block;
  width: 32px;
  height: 32px;

  &:after {
    content: ' ';
    display: block;
    width: 24px;
    height: 24px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid ${props => (props.color ? props.color : '#000')};
    border-color: ${props => props.color} transparent ${props => props.color}
      transparent;
    animation: ${dualRing} 1.2s linear infinite;
  }
`

export const Loader = ({ active, bg, theme, type }) => {
  const c = (bg && findColor({ bg, theme }).hex()) || theme.darkGrey
  if (typeof window !== 'undefined' && document.documentMode && active) {
    return <FallbackLoader color={c} />
  }
  if (active) {
    switch (type) {
      case 'puff':
        return <Puff color={c} />
      case 'bars':
        return <Bars color={c} />
      case 'audio':
        return <Audio color={c} />
      case 'rings':
        return <Rings color={c} />
      case 'oval':
        return <Oval color={c} />
      case 'three-dots':
        return <ThreeDots color={c} />
      default:
        return <Puff color={c} />
    }
  }
  return null
}

const ThemedLoader = withTheme(Loader, 'darkGrey')

Loader.propTypes = {
  type: PropTypes.oneOf([
    'puff',
    'bars',
    'audio',
    'rings',
    'oval',
    'three-dots'
  ]),
  active: PropTypes.bool,
  bg: PropTypes.string,
  theme: PropTypes.object
}

ThemedLoader.defaultProps = {
  bg: 'darkGrey',
  active: PropTypes.bool
}

ThemedLoader.displayName = 'Loader'

export default ThemedLoader
