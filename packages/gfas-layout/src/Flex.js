import React from 'react'
import PropTypes from 'prop-types'

const base = 8

const makeStyles = (props = {}) => {
  return {
    display: 'flex',
    flexFlow: 'column wrap',
    flexWrap: 'wrap',
    justifyContent: props.justify || 'flex-start',
    alignItems: props.align || 'flex-start',
    boxSizing: 'border-box',
    margin: props.p * base,
    padding: props.p * base,
    flexDirection: props.column || 'row',
    ...props.style
  }
}

export default function Flex (props) {
  return (
    <div style={makeStyles(props)}>
      {props.children}
    </div>
  )
}

Flex.propTypes = {
  children: PropTypes.node.isRequired
}

Flex.defaultProps = {
  m: 0,
  p: 0
}
