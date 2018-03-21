import React from 'react'
import PropTypes from 'prop-types'

const calculateFileSize = fs => {
  const kb = fs / 1000
  const mb = kb / 1000
  const gb = mb / 1000
  if (gb > 1) {
    return `${gb.toFixed(2)} GB`
  } else if (mb > 1) {
    return `${mb.toFixed(0)} MB`
  } else if (kb > 1) {
    return `${kb} KB`
  } else {
    return `${fs} bytes`
  }
}

export default function Filesize (props) {
  if (props.fileSize === null) {
    return null
  }
  const fileSize = calculateFileSize(props.fileSize)
  return (
    <div>{fileSize}</div>
  )
}

Filesize.propTypes = {
  fileSize: PropTypes.number.isRequired
}
