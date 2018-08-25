import styled from 'styled-components'
import { spacing, createRule, borderRadiusMixin, backgroundColorMixin } from './mixins'
import withTheme from './withTheme'

const Label = styled.div`
  width: 100%;
  ${createRule(0.2, 'padding')}
  ${spacing}
  ${borderRadiusMixin}
  ${backgroundColorMixin}
`

export default withTheme(Label)
