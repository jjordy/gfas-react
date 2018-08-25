import styled from 'styled-components'
import withTheme from './withTheme'
import { spacing, createRule } from './mixins'

const Divider = styled.div`
  ${createRule(1, 'margin-top')}
  ${createRule(1, 'margin-bottom')}
  ${props =>
    props.fitted &&
    `
    margin-top: ${props.theme.BASE_SIZE * 0.5 + props.theme.UNIT};
    margin-bottom: ${props.theme.BASE_SIZE * 0.5 + props.theme.UNIT};
  `}
  ${spacing}
  border-bottom: ${props => !props.hidden && `2px solid ${props.theme.colors.lightGrey}`};
`
const ThemedDivider = withTheme(Divider)

export default ThemedDivider
