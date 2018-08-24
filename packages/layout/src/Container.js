import styled from 'styled-components'
import withTheme from './withTheme'

import { spacing } from './mixins'

const Container = styled.div`
  margin: auto;
  box-sizing: border-box;
  padding: ${props => `
    ${props.theme.BASE_SIZE * 1}${props.theme.UNIT};
  `};
  ${spacing}
  width: ${props => (props.text ? '750px' : '1150px')};
  @media (max-width: 1024px) {
    width: 100%;
  }
`

Container.displayName = 'Container'

const ThemedContainer = withTheme(Container)

export default ThemedContainer
