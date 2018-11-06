import styled from 'styled-components'
import PropTypes from 'prop-types'
import Box from '../Box'
import { sharedPropTypes } from '../sharedPropTypes'

const Container = styled(Box).attrs({
  bg: '#FFF'
})`
  margin: auto;
  width: ${props => (props.text ? '750px' : '1150px')};
  background-color: transparent;
  max-width: 100%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`

Container.displayName = 'Container'

Container.propTypes = { text: PropTypes.bool, ...sharedPropTypes }

export default Container
