import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AutoSizer, Grid, ScrollSync } from 'react-virtualized'
import formatDate from 'date-fns/format'
import isDateValid from 'date-fns/is_valid'
import parse from 'date-fns/parse'
import { Text } from '@jjordy/layout'
import withDataProvider from './withDataProvider'
import withSearchProvider from './withSearchProvider'
import { compose } from './util'
import styled from 'styled-components'

const HeaderGrid = styled(Grid)`
  width: 100%;
  overflow: hidden !important;
  box-sizing: border-box;
  background-color: #f8f8f8;
  border-top: 1px solid #e7e7e7;
  border-left: 1px solid #e7e7e7;
  border-right: 1px solid #e7e7e7;
  &:focus {
    outline: thin;
  }
`

const BodyGrid = styled(Grid)`
  width: 100%;
  background-color: #f8f8f8;
  border: 1px solid #e7e7e7;
  box-sizing: border-box;

  &:focus {
    outline: thin;
  }
`

const NoCells = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1em;
  color: #bdbdbd;
`
const HeaderCell = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0.5em;
  font-weight: bold;
  border-right: 1px solid #e0e0e0;
  background-color: #f8f8f8;
  align-items: center;
  text-align: center;
`

const Cell = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => (props.highlight ? props.rowHighlightColor : '#FFF')};
  align-items: center;
  padding: 0 0.5em;
  box-sizing: border-box;
  border-right: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
`

class DataGrid extends Component {
  constructor (props) {
    super(props)

    this.state = {
      height: 300,
      overscanColumnCount: 0,
      overscanRowCount: 10,
      scrollToColumn: undefined,
      scrollToRow: undefined
    }
  }

  _cellRenderer = ({ columnIndex, key, rowIndex, style }) => {
    return this._renderBodyCell({ columnIndex, key, rowIndex, style })
  }

  _headerCellRenderer = ({ columnIndex, key, rowIndex, style }) => {
    return this._renderHeaderCell({ columnIndex, key, rowIndex, style })
  }

  _getColumnWidth = ({ index }) => {
    return this.props.columns[index].width
  }

  _getDatum = index => {
    const { data } = this.props
    return data[index]
  }

  _getRowHighlight = row => {
    const { rowHighlightKey, data } = this.props
    if (rowHighlightKey) {
      if (data[row]) {
        const key = data[row][rowHighlightKey]
        if (key) {
          return true
        }
      }
    } else {
      return false
    }
  }

  _noContentRenderer = () => {
    return (
      <NoCells>
        <Text color='darkGrey' strong>
          No Records Found
        </Text>
      </NoCells>
    )
  }

  _renderHeaderCell = ({ columnIndex, key, rowIndex, style }) => {
    const childColumnEl = React.Children.toArray(this.props.children)[columnIndex]
    if (childColumnEl.props.active) {
      return (
        <HeaderCell key={key} style={style}>
          {React.cloneElement(childColumnEl, {
            toggleSort: this.props.toggleSort,
            activeSort: this.props.activeSort,
            asc: this.props.asc
          })}
        </HeaderCell>
      )
    }
  }
  render () {
    const { height, overscanColumnCount, overscanRowCount, scrollToColumn, scrollToRow } = this.state

    const { data, columnCount, rowCount, rowHeight, rowHighlightColor } = this.props

    const renderBodyCell = ({ columnIndex, key, rowIndex, style }) => {
      const { columns } = this.props
      const highlight = this._getRowHighlight(rowIndex)
      const datum = data[rowIndex]
      const columnName = columns[columnIndex].id
      const childColumnEl = React.Children.toArray(this.props.children)[columnIndex]

      if (datum && childColumnEl.props.active) {
        let content = datum[columnName]
        if (childColumnEl.props.date && Number.isInteger(content)) {
          const d = parse(content)
          const checkDate = isDateValid(d)
          if (checkDate) {
            content = <span>{formatDate(d, 'MM/DD/YYYY')}</span>
          }
        }
        return (
          <Cell key={key} style={style} highlight={highlight} rowHighlightColor={rowHighlightColor}>
            {childColumnEl && childColumnEl.props.render
              ? childColumnEl.props.render({
                row: datum,
                value: datum[columnName]
              })
              : content}
          </Cell>
        )
      } else {
        return null
      }
    }
    return (
      <div>
        <ScrollSync>
          {({ clientHeight, clientWidth, onScroll, scrollHeight, scrollLeft, scrollTop, scrollWidth }) => {
            return (
              <AutoSizer disableHeight>
                {({ width }) => (
                  <div>
                    {/* Header Grid */}
                    <HeaderGrid
                      cellRenderer={this._headerCellRenderer}
                      columnWidth={this._getColumnWidth}
                      columnCount={columnCount}
                      height={rowHeight}
                      overscanColumnCount={overscanColumnCount}
                      rowHeight={rowHeight}
                      rowCount={1}
                      scrollLeft={scrollLeft}
                      width={width}
                    />
                    {/* Body Grid */}
                    <BodyGrid
                      cellRenderer={renderBodyCell}
                      columnWidth={this._getColumnWidth}
                      columnCount={columnCount}
                      height={height}
                      noContentRenderer={this._noContentRenderer}
                      scrollLeft={scrollLeft}
                      overscanColumnCount={overscanColumnCount}
                      overscanRowCount={overscanRowCount}
                      rowHeight={rowHeight}
                      rowCount={(data && data.length) || rowCount}
                      scrollToColumn={scrollToColumn}
                      scrollToRow={scrollToRow}
                      onScroll={onScroll}
                      width={width}
                    />
                  </div>
                )}
              </AutoSizer>
            )
          }}
        </ScrollSync>
      </div>
    )
  }
}

DataGrid.propTypes = {
  activeSort: PropTypes.string,
  asc: PropTypes.bool.isRequired,
  toggleSort: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired,
  columns: PropTypes.array.isRequired,
  columnCount: PropTypes.number.isRequired,
  rowCount: PropTypes.number.isRequired,
  rowHeight: PropTypes.number,
  rowHighlightKey: PropTypes.string,
  rowHighlightColor: PropTypes.string
}

DataGrid.defaultProps = {
  rowHighlightColor: 'rgba(172, 222, 242, 0.6)'
}

export default compose(
  withDataProvider,
  withSearchProvider
)(DataGrid)
