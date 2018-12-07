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

export const Loader = ({ active, bg, theme, type }) => {
  const c = (bg && findColor({ bg, theme }).hex()) || theme.darkGrey
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
  ])
}

ThemedLoader.defaultProps = {
  bg: 'darkGrey',
  active: PropTypes.bool
}

ThemedLoader.displayName = 'Loader'

export default ThemedLoader
