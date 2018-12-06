import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import withTheme from './withTheme'
import { spacing, createRule, borderRadiusMixin, findColor } from './mixins'

const ProgressContainer = styled.div`
  position: relative;
  display: block;
  max-width: 100%;
  border: none;
  ${createRule(1, 'margin-top')};
  ${createRule(1, 'margin-bottom')};
  box-shadow: none;
  background: rgba(0, 0, 0, 0.1);
  ${borderRadiusMixin} ${spacing};
`
const ProgressBar = styled.div`
  display: block;
  line-height: 1;
  background-color: ${props =>
    findColor(props)
      .darken(props.percent < 100 ? props.percent / 1000 : 100 / 1000)
      .hex()};
  width: ${props =>
    props.percent && props.percent > 100 ? 100 : props.percent}%;
  transition: width 200ms ease-in-out;
  ${createRule(1, 'height')};
  ${borderRadiusMixin};
`

const ThemedProgressBar = withTheme(ProgressBar, 'primary')

const ThemedProgressContainer = withTheme(ProgressContainer)

Progress.propTypes = {
  percent: PropTypes.number.isRequired
}

Progress.defaultProps = {
  bg: 'lightGrey'
}

Progress.displayName = 'Progress'

export default function Progress (props) {
  return (
    <ThemedProgressContainer {...props}>
      <ThemedProgressBar {...props} />
    </ThemedProgressContainer>
  )
}
