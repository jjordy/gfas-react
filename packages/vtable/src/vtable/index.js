import React from 'react'
import PropTypes from 'prop-types'
import { VariableSizeGrid as Grid } from 'react-window'

export function VirtualTable ({ data, children }) {
  const handleColumnWidth = index => {
    const c = React.Children.toArray(children)[index]
    if (c.props && c.props.width) {
      return c.props.width
    }
    return 50
  }

  const handleRowHeight = index => {
    return 50
  }

  const Cell = ({ columnIndex, rowIndex, style }) => {
    const c = React.Children.toArray(children)
    return (
      <div style={style}>
        {React.cloneElement(c[columnIndex], {
          ...c[columnIndex].props,
          row: data[rowIndex],
          value: data[rowIndex][c[columnIndex].props.name]
        })}
      </div>
    )
  }

  return (
    <Grid
      columnCount={2}
      columnWidth={handleColumnWidth}
      rowCount={data.length}
      rowHeight={handleRowHeight}
      height={150}
      width={300}>
      {Cell}
    </Grid>
  )
}

VirtualTable.propTypes = {
  children: PropTypes.element,
  data: PropTypes.array.isRequired
}
