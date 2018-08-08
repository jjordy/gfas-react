import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  background: '#f4f4f4',
  border: '1px solid #ddd',
  borderLeft: '3px solid #f36d33',
  color: '#666',
  pageBreakInside: 'avoid',
  fontFamily: 'monospace',
  fontSize: '1rem',
  lineHeight: '1.6',
  marginBottom: '1.6em',
  maxWidth: '100%',
  overflow: 'auto',
  padding: '1em 1.5em',
  display: 'block',
  wordWrap: 'break-word'
}

function Code ({ code }) {
  return (
    <pre style={styles}>
      <code>{code}</code>
    </pre>
  )
}

Code.propTypes = {
  code: PropTypes.string.isRequired
}

export default Code
