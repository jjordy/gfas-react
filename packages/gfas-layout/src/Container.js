import React from 'react'
import PropTypes from 'prop-types'

const makeContainerStyles = text => ({
  margin: 'auto',
  width: text ? 750 : 1150
})
function Container ({ text, children }) {
  return <div style={makeContainerStyles(text)}>{children}</div>
}

Container.propTypes = {
  text: PropTypes.bool,
  children: PropTypes.node.isRequired
}

export default Container
