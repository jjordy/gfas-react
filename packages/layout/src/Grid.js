import PropTypes from 'prop-types'
import styled from 'styled-components'

const px = n => (typeof n === 'number' ? n + 'px' : n)

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${props => px(props.width)}, 1fr));
  grid-gap: ${props => px(props.gap)};
  align-items: ${props => props.align || null};
  grid-column: ${props => (props.span ? `span ${props => props.span}` : null)};
`

Grid.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  gap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  align: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Grid
