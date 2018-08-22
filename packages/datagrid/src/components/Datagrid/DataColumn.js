import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { FiChevronUp, FiChevronDown } from 'react-icons/fi'

export default class DataColumn extends PureComponent {
  state = { hovering: false };

  hoverOn = () => this.setState({ hovering: true });

  hoverOff = () => this.setState({ hovering: false });

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
        <div
          style={{ cursor: 'pointer', minWidth: width, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onMouseEnter={this.hoverOn}
          onMouseLeave={this.hoverOff}
        >
          <small>
            <strong>{name}</strong>
          </small>
          {' '}
          {activeSort === id && asc ? (
            <FiChevronUp color='red' />
          ) : (
            <FiChevronDown color='red' />
          )}
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
