import React from 'react'
import PropTypes from 'prop-types'

function Segment ({ attached, children, padded }) {
  const makeSegmentStyles = () => {
    const styles = {
      border: '1px solid #e7e7e7',
      marginLeft: '1rem',
      marginRight: '1rem',
      padding: '1rem'
    }
    if (attached) {
      if (attached === 'top') {
        styles.marginTop = '1rem'
        styles.borderBottom = 0
        styles.borderTopRightRadius = 6
        styles.borderTopLeftRadius = 6
      } else if (attached === 'bottom') {
        styles.marginBottom = '1rem'
        styles.borderBottomRightRadius = 6
        styles.borderBottomLeftRadius = 6
      } else {
        styles.marginTop = 0
        styles.borderBottom = 0
        styles.marginBottom = 0
      }
    } else {
      styles.borderRadius = 6
      styles.margin = '1rem'
    }

    if (padded) {
      if (padded === 'very') {
        styles.padding = '2.5rem'
      } else {
        styles.padding = '2rem'
      }
    }
    return styles
  }

  return <div style={makeSegmentStyles()}>{children}</div>
}

Segment.propTypes = {
  children: PropTypes.node.isRequired,
  attached: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['top', 'bottom'])]),
  padded: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['very'])])
}

export default Segment
