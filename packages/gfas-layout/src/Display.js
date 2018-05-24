import React from 'react'
import PropTypes from 'prop-types'

// default for 1rem
const BASE = 16

export default function Display (props) {
  return <div style={createStyles(props)}>
    {props.children}
  </div>
}

Display.propTypes = {
  children: PropTypes.node.isRequired,
  p: PropTypes.number,
  px: PropTypes.number,
  py: PropTypes.number,
  m: PropTypes.number,
  mx: PropTypes.number,
  my: PropTypes.number
}

const convertToRem = v => {
  return `${BASE * v / 16}rem`
}

const createStyles = props => {
  const styles = {
    display: 'block'
  }

  if (props.p) {
    styles.padding = convertToRem(props.p)
  } else if (props.px) {
    styles.paddingLeft = convertToRem(props.px)
    styles.paddingRight = convertToRem(props.px)
  } else if (props.py) {
    styles.paddingTop = convertToRem(props.py)
    styles.paddingBottom = convertToRem(props.py)
  } else if (props.m) {
    styles.margin = convertToRem(props.m)
  } else if (props.mx) {
    styles.marginRight = convertToRem(props.mx)
    styles.marginLeft = convertToRem(props.mx)
  } else if (props.my) {
    styles.marginTop = convertToRem(props.my)
    styles.marginBottom = convertToRem(props.my)
  }
  return Object.assign({}, props.style, styles)
}
