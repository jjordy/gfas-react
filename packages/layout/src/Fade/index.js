import PropTypes from 'prop-types'
import styled from 'styled-components'
import Box from '../Box'

const Fade = styled(Box)`
  opacity: ${props => (props.visible ? 1 : 0)};
  line-height: 1;
  animation-fill-mode: both;
  animation-duration: ${props => props.duration};
  transition: opacity 0.4s ease, height 0.1s ease-out;
  height: ${props => (props.visible ? '100%' : 0)};
  pointer-events: ${props => (props.visible ? 'auto' : 'none')};
`
Fade.propTypes = {
  children: PropTypes.node.isRequired,
  visible: PropTypes.oneOfType([
    PropTypes.bool.isRequired,
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  duration: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ])
}

Fade.defaultProps = {
  duration: 250
}

Fade.displayName = 'Fade'

export default Fade
