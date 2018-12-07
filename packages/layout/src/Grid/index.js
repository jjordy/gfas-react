import PropTypes from 'prop-types'
import styled from 'styled-components'
import withTheme from '../withTheme'
import { sharedPropTypes } from '../sharedPropTypes'
import Box from '../Box'

const px = n => (typeof n === 'number' ? n + 'px' : n)

const Grid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(calc(${props => px(props.width)} - ${props => px(props.gap)}), 1fr)
  );
  grid-gap: ${props => px(props.gap)};
  align-items: ${props => props.align || null};
  grid-column: 1 / span 3;
  ${props =>
    !props.dontBreakOnMobile &&
    `@media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    }`};
`

const ThemedGrid = withTheme(Grid)

ThemedGrid.displayName = 'Grid'

ThemedGrid.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  gap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  align: PropTypes.string,
  children: PropTypes.node.isRequired,
  ...sharedPropTypes
}

ThemedGrid.defaultProps = {
  gap: 8
}

export default ThemedGrid