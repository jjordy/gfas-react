import React, { Component } from 'react'
import PropTypes from 'prop-types'
import formatDate from 'date-fns/format'
import sortBy from 'lodash.sortby'

export default function DataProvider (C) {
  class DataProvider extends Component {
    state = {
      data: null,
      columns: [],
      rowCount: 0,
      columnCount: 0,
      rowHeight: 40,
      activeSort: '',
      asc: false,
      settings: false
    }
    componentDidMount () {
      if (this.props.data) {
        const d = [...this.props.data]
        const data = this.formatDataWithDates(d)
        this.setState({ data: data, rowCount: data.length })
        this._generateColumns()
      }
    }
    formatDataWithDates = data => {
      if (data) {
        const dateColumns = React.Children.map(this.props.children, child => {
          if (child.props.date) {
            if (!child.props.dateInputFormat) {
              throw new Error('You must include a dateInputFormat prop if you specify a column as a date.')
            } else {
              return {
                id: child.props.id,
                dateInputFormat: child.props.dateInputFormat,
                ...child.props
              }
            }
          }
        })

        const modifiedData = data.map(item => {
          let newItem = {}
          dateColumns.map(column => {
            let newDate = 'N/A'
            if (!isNaN(Date.parse(item[column.id]))) {
              newDate = Date.parse(formatDate(item[column.id], 'MM/DD/YYYY'))
            }
            newItem[column.id] = newDate
          })
          return Object.assign({}, item, newItem)
        })

        return modifiedData
      } else {
        return []
      }
    }
    _generateColumns = () => {
      if (this.props.children) {
        const columns = []
        React.Children.forEach(this.props.children, child => {
          columns.push({
            name: child.props.name,
            id: child.props.id,
            width: child.props.width,
            active: child.props.active
          })
        })
        this.setState({
          columns: columns,
          columnCount: columns.length
        })
      }
    }

    toggleSort = column => {
      console.log(column)
      const newSort = !this.state.asc
      const sorted = sortBy(this.state.data, [item => item[column]])
      this.setState({
        asc: newSort,
        activeSort: column,
        data: newSort ? sorted : sorted.reverse(),
        rowHeight: this.state.rowHeight === 40 ? 40.5 : 40
      })
    }

    render () {
      return (
        <div>
          {this.state.data && this.state.columns && <C {...this.props} {...this.state} toggleSort={this.toggleSort} />}
        </div>
      )
    }
  }
  DataProvider.propTypes = {
    data: PropTypes.array.isRequired,
    children: PropTypes.node.isRequired,
    settings: PropTypes.bool
  }

  return DataProvider
}
