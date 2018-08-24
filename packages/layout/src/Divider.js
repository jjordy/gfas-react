import styled from 'styled-components'
import withTheme from './withTheme'
import { spacing, createRule } from './mixins'

const Divider = styled.div`
  ${createRule(1, 'margin-top')}
  ${createRule(1, 'margin-bottom')}
  ${spacing}
  border-bottom: ${props => !props.hidden && '2px solid #e7e7e7'};
  &::after {
    content:""
  }
`
const ThemedDivider = withTheme(Divider)

export default ThemedDivider
