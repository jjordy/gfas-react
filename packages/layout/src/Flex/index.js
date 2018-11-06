import PropTypes from 'prop-types'
import styled from 'styled-components'
import { sharedPropTypes } from '../sharedPropTypes'

const Flex = styled.div`
  display: flex;
  ${props => props.justify && `
    justify-content: ${props.justify}
  `}
  ${props => props.align && `
    align-items: ${props.align};
  `}
  ${props => props.direction && `
    flex-direction: ${props.direction};
  `}
  ${props => props.wrap && `
    flex-wrap: ${props.wrap};
  `}
  ${props => props.content && `
    align-content: ${props.content};
  `}
`

Flex.propTypes = {
  align: PropTypes.oneOf([
    'center',
    'flex-start',
    'flex-end',
    'stretch',
    'baseline'
  ]),
  content: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'stretch'
  ]),
  direction: PropTypes.oneOf([
    'column',
    'row',
    'column-reverse',
    'row-reverse'
  ]),
  justify: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around'
  ]),
  ...sharedPropTypes,
  wrap: PropTypes.oneOf([
    'wrap',
    'nowrap',
    'wrap-reverse'
  ])
}

Flex.displayName = 'Flex'

export default Flex
