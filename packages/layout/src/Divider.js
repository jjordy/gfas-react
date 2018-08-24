import styled from 'styled-components'
import withTheme from './withTheme'
import { spacing } from './mixins'

const Divider = styled.div`
  margin-top: ${props => `
    ${props.theme.BASE_SIZE * 1}${props.theme.UNIT};
  `};
  margin-bottom: ${props => `
    ${props.theme.BASE_SIZE * 1}${props.theme.UNIT};
  `};
  ${spacing}
  border-bottom: ${props => !props.hidden && '2px solid #e7e7e7'};
`
const ThemedDivider = withTheme(Divider)

export default ThemedDivider
