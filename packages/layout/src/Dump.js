import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  border: 2px solid red;
  padding: 2rem;
  margin-bottom: 1rem;
  font-size: 10px;
`

export default function Dump ({ json = {} }) {
  return (
    <Container>
      <pre>
        <code>
          {JSON.stringify(json, null, 2)}
        </code>
      </pre>
    </Container>
  )
}

Dump.propTypes = {
  json: PropTypes.object.isRequired
}
