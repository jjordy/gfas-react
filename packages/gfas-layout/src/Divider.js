import React from 'react'
import PropTypes from 'prop-types'

const makeDivider = hidden => ({
  borderBottom: !hidden && '2px solid #e7e7e7',
  marginBottom: '2rem',
  marginTop: '2rem'
})

function Divider ({ hidden }) {
  return <div style={makeDivider(hidden)} />
}

Divider.propTypes = {
  hidden: PropTypes.bool
}

export default Divider
