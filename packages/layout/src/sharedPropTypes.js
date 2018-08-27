import PropTypes from 'prop-types'

const spacing = [0, 1, 2, 3, 4, 5, 6]

export const sharedPropTypes = {
  m: PropTypes.oneOf(spacing),
  mx: PropTypes.oneOf(spacing),
  my: PropTypes.oneOf(spacing),
  mb: PropTypes.oneOf(spacing),
  mt: PropTypes.oneOf(spacing),
  p: PropTypes.oneOf(spacing),
  px: PropTypes.oneOf(spacing),
  py: PropTypes.oneOf(spacing),
  pt: PropTypes.oneOf(spacing),
  pb: PropTypes.oneOf(spacing)
}
