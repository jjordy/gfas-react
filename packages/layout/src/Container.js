import styled from 'styled-components'
import withTheme from './withTheme'
import PropTypes from 'prop-types'
import { spacing, createRule } from './mixins'

import { sharedPropTypes } from './sharedPropTypes'

const Container = styled.div`
  margin: auto;
  box-sizing: border-box;
  ${createRule(1, 'padding')};
  ${spacing};
  width: ${props => (props.text ? '750px' : '1150px')};
  max-width: 100%;
  @media (max-width: 1024px) {
    width: 100%;
  }
  & p {
    font-size: ${props => props.text && `
      ${(props.theme.BASE_SIZE * 1.125) + props.theme.UNIT};
    `};
  }
`
const ThemedContainer = withTheme(Container)

ThemedContainer.displayName = 'Container'

ThemedContainer.propTypes = { text: PropTypes.bool, ...sharedPropTypes }

export default ThemedContainer
