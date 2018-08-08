import React from 'react'
import PropTypes from 'prop-types'

const px = n => (typeof n === 'number' ? n + 'px' : n)

const gridStyles = (width, gap, align, span) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fit, minmax(${px(width)}, 1fr))`,
  gridGap: px(gap),
  alignItems: align || null,
  gridColumn: span ? `span ${span}` : null
})

function Grid ({ children, width, gap, align, span }) {
  return <div style={gridStyles(width, gap, align, span)}>{children}</div>
}

Grid.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  gap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  align: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Grid
