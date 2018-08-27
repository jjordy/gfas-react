import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from '@jjordy/layout'
import styled from 'styled-components'

const Column = styled.div`
  cursor: pointer;
  min-width: ${props => props.width}px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const DataColumn = ({
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
}) => {
  const displaySortIcon = asc ? (
    <Icon icon='chevron_up' color='red' width='12' height='12' />
  ) : (
    <Icon icon='chevron_down' color='red' width='12' height='12' />
  )
  return (
    <div {...rest} onClick={() => toggleSort(id)}>
      <Column width={width}>
        <small>
          <strong>{name}</strong>
        </small>
        {'   '}
        {activeSort === id && displaySortIcon}
      </Column>
    </div>
  )
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

DataColumn.displayName = 'DataColumn'

export default DataColumn
