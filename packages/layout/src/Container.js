import styled from 'styled-components'
import withTheme from './withTheme'

import { spacing, createRule } from './mixins'

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
`

Container.displayName = 'Container'

const ThemedContainer = withTheme(Container)

export default ThemedContainer
