import React from 'react'
import PropTypes from 'prop-types'
import withTheme from './withTheme'
import { findColor } from './mixins'
import Puff from './Puff'
import Bars from './Bars'
import Audio from './Audio'
import Rings from './Rings'
import Oval from './Oval'
import ThreeDots from './ThreeDots'

const Spinner = ({ bg, theme, type }) => {
  console.log(bg, theme, type)
  const c = (bg && findColor({ bg }).hex()) || theme.darkGrey
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

const ThemedSpinner = withTheme(Spinner, 'darkGrey')

Spinner.propTypes = {
  type: PropTypes.oneOf([
    'puff',
    'bars',
    'audio',
    'rings',
    'oval',
    'three-dots'
  ])
}

ThemedSpinner.defaultProps = {
  color: 'darkGrey',
  active: PropTypes.bool
}

ThemedSpinner.displayName = 'Loader'

export default ThemedSpinner
