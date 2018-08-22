import styled from 'styled-components'
import withTheme from './withTheme'

import {
  spacing
} from './mixins'

const Container = styled.div`
  margin: auto;
  box-sizing: border-box;
  ${spacing}
  width: ${props =>
    props.text ? '750px' : '1150px'};
  @media (max-width: 1024px) {
    width: 100%;
  }
`

Container.displayName = 'Container'
Container.defaultProps = {
  px: 1,
  py: 1
}

const ThemedContainer = withTheme(Container)

export default ThemedContainer
