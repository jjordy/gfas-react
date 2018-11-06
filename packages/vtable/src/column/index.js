import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledColumn = styled.div`
  box-sizing: border-box;
  padding: 4px;
  border: 1px solid #e7e7e7;
  height: 100%;
`

export function Column ({ render, row, value }) {
  return (
    <StyledColumn>
      {render({ row, value })}
    </StyledColumn>
  )
}
