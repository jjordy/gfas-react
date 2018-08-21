import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import withTheme from './withTheme'

const ProgressContainer = styled.div`
  position: relative;
  display: block;
  max-width: 100%;
  border: none;
  margin: 1em 0 2.5em;
  box-shadow: none;
  background: rgba(0, 0, 0, 0.1);
  padding: 0;
  border-radius: 0.28571429rem;
`
const ProgressBar = styled.div`
  display: block;
  line-height: 1;
  background-color: ${props => props.color.darken(props.percent < 100 ? props.percent / 1000 : 100 / 1000).hex()};
  width: ${props => (props.percent && props.percent > 100 ? 100 : props.percent)}%;
  transition: width 200ms ease-in-out;
  height: 1.75em;
  border-radius: 0.28571429rem;
`

const ThemedProgressBar = withTheme(ProgressBar)

ThemedProgressBar.defaultProps = {
  color: 'green'
}

Progress.propTypes = {
  percent: PropTypes.number.isRequired,
  color: PropTypes.string
}

export default function Progress (props) {
  return (
    <ProgressContainer {...props}>
      <ThemedProgressBar {...props} />
    </ProgressContainer>
  )
}
