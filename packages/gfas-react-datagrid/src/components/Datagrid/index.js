import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AutoSizer, Grid, ScrollSync } from 'react-virtualized'
import cn from 'classnames'
import { format as formatDate, isValid as isDateValid, parse } from 'date-fns'
import scrollbarSize from 'dom-helpers/util/scrollbarSize'
import withDataProvider from './withDataProvider'
import withSearchProvider from './withSearchProvider'
import { compose } from './util'

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

  _getRowClassName = row => {
    const { rowHighlightKey, data } = this.props
    if (rowHighlightKey) {
      if (data[row]) {
        const key = data[row][rowHighlightKey]
        if (key) {
          return 'highlightClass'
        }
      }
    } else {
      return row % 2 === 0 ? 'evenRow' : 'oddRow'
    }
  }

  _noContentRenderer = () => {
    return <div className='noCells'>No cells</div>
  }

  _renderHeaderCell = ({ columnIndex, key, rowIndex, style }) => {
    const rowClass = this._getRowClassName(rowIndex)
    const childColumnEl = React.Children.toArray(this.props.children)[columnIndex]
    const classNames = cn(rowClass, 'headerCell', 'centeredCell')
    if (childColumnEl.props.active) {
      return (
        <div className={classNames} key={key} style={style}>
          {React.cloneElement(childColumnEl, {
            toggleSort: this.props.toggleSort,
            activeSort: this.props.activeSort,
            asc: this.props.asc
          })}
        </div>
      )
    }
  }
  render () {
    const { height, overscanColumnCount, overscanRowCount, scrollToColumn, scrollToRow } = this.state

    const { data, columnCount, rowCount, rowHeight } = this.props

    const renderBodyCell = ({ columnIndex, key, rowIndex, style }) => {
      const { columns } = this.props
      const rowClass = this._getRowClassName(rowIndex)
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
        const classNames = cn(rowClass, 'cell', 'centeredCell')

        return (
          <div className={classNames} key={key} style={style}>
            {childColumnEl && childColumnEl.props.render
              ? childColumnEl.props.render({
                row: datum,
                value: datum[columnName]
              })
              : content}
          </div>
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
                    <Grid
                      cellRenderer={this._headerCellRenderer}
                      className={'HeaderGrid'}
                      columnWidth={this._getColumnWidth}
                      columnCount={columnCount}
                      height={rowHeight}
                      overscanColumnCount={overscanColumnCount}
                      rowHeight={rowHeight}
                      rowCount={1}
                      scrollLeft={scrollLeft}
                      width={width - scrollbarSize()}
                    />
                    {/* Body Grid */}
                    <Grid
                      cellRenderer={renderBodyCell}
                      className={'BodyGrid'}
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
                      width={width - scrollbarSize()}
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
  rowHighlightKey: PropTypes.string
}

export default compose(withDataProvider, withSearchProvider)(DataGrid)
