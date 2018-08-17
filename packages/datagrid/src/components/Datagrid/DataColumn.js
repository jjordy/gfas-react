import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'semantic-ui-react'

export default class DataColumn extends PureComponent {
  state = { hovering: false }

  hoverOn = () => this.setState({ hovering: true })

  hoverOff = () => this.setState({ hovering: false })

  render () {
    const {
      asc,
      name,
      sort,
      id,
      activeSort,
      width,
      toggleSort,
      date,
      dateInputFormat,
      nullDateMessage,
      render,
      active,
      ...rest
    } = this.props

    return (
      <div {...rest} onClick={() => toggleSort(id)}>
        <div style={{ cursor: 'pointer', minWidth: width }} onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
          <small>
            <strong>{name}</strong>
          </small>
          {activeSort === id && <Icon name={`caret ${asc ? 'up' : 'down'}`} color='red' />}
        </div>
      </div>
    )
  }
}

DataColumn.propTypes = {
  active: PropTypes.bool.isRequired,
  asc: PropTypes.bool,
  id: PropTypes.string,
  activeSort: PropTypes.string,
  name: PropTypes.string.isRequired,
  sort: PropTypes.string,
  toggleSort: PropTypes.func,
  width: PropTypes.number,
  hidden: PropTypes.bool,
  date: PropTypes.bool,
  dateInputFormat: PropTypes.string,
  nullDateMessage: PropTypes.string,
  render: PropTypes.func
}

DataColumn.defaultProps = {
  sort: 'asc',
  dateInputFormat: 'YYYY-MM-DD',
  nullDateMessage: 'N/A',
  active: true
}
