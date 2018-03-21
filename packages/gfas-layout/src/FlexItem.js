import React from 'react'
import PropTypes from 'prop-types'

const makeStyles = (props = {}) => {
  return {
    flex: props.grow ? '1 1 auto' : '',
    width: props.width && `calc(100% * ${props.width} / 12 - 20px)`,
    boxSizing: 'border-box',
    marginRight: 10,
    marginLeft: 10,
    marginTop: props.width ? 5 : 0,
    marginBottom: props.width ? 5 : 0,
    ...props.style
  }
}

export default function FlexItem (props) {
  return (
    <div style={makeStyles(props)} className='flex-item'>
      {props.children}
    </div>
  )
}

FlexItem.propTypes = {
  width: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), // eslint-disable-line
  children: PropTypes.node.isRequired
}

FlexItem.defaultProps = {
  m: 0,
  p: 0
}
