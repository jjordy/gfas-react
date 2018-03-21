import React from 'react'
import PropTypes from 'prop-types'

const base = 8

const makeStyles = (props = {}) => {
  return {
    flex: props.grow ? '1 1 auto' : '',
    width: props.width && `calc(100% * ${props.width} / 12 - 20px)`,
    boxSizing: 'border-box',
    marginRight: 10,
    marginLeft: 10,
    ...props.style
  }
}

export default function FlexItem (props) {
  return <div style={makeStyles(props)}>{props.children}</div>
}

FlexItem.propTypes = {
  width: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), // eslint-disable-line
  children: PropTypes.node.isRequired
}

FlexItem.defaultProps = {
  m: 0,
  p: 0
}
