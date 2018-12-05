import PropTypes from 'prop-types'

const spacing = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6]

export const sharedPropTypes = {
  /** Margin all sides */
  m: PropTypes.oneOf(spacing),
  /** Margin top and bottom */
  mx: PropTypes.oneOf(spacing),
  my: PropTypes.oneOf(spacing),
  mb: PropTypes.oneOf(spacing),
  mt: PropTypes.oneOf(spacing),
  p: PropTypes.oneOf(spacing),
  px: PropTypes.oneOf(spacing),
  py: PropTypes.oneOf(spacing),
  pt: PropTypes.oneOf(spacing),
  pb: PropTypes.oneOf(spacing),
  pl: PropTypes.oneOf(spacing),
  ml: PropTypes.oneOf(spacing),
  mr: PropTypes.oneOf(spacing),
  pr: PropTypes.oneOf(spacing)
}
