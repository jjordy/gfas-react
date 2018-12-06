import PropTypes from 'prop-types'
import styled from 'styled-components'
import withTheme from '../withTheme'
import { createRule, findColor } from '../mixins'
import Box from '../Box'

const Divider = styled(Box).attrs({
  children: null,
  content: null
})`
  ${createRule(1, 'margin-top')}
  ${createRule(1, 'margin-bottom')}
  ${props =>
    props.fitted &&
    `
    margin-top: ${props.theme.BASE_SIZE * 0.5 + props.theme.UNIT};
    margin-bottom: ${props.theme.BASE_SIZE * 0.5 + props.theme.UNIT};
  `}
  height: 5px;
  border-bottom: ${props =>
    !props.hidden &&
    `3px solid ${findColor(props, props.theme.colors.lightGrey).hex()}`};
`

const ThemedDivider = withTheme(Divider)

ThemedDivider.displayName = 'Divider'

ThemedDivider.propTypes = {
  fitted: PropTypes.bool
}

export default ThemedDivider
