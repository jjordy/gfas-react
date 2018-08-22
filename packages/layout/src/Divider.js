import styled from 'styled-components'
import withTheme from './withTheme'
import { spacing } from './mixins'

const Divider = styled.div`
  ${spacing}
  border-bottom: ${props => !props.hidden && '2px solid #e7e7e7'};
`
const ThemedDivider = withTheme(Divider)

export default ThemedDivider

ThemedDivider.defaultProps = {
  mb: 1,
  mt: 1
}
