import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`

const fadeOut = keyframes`
  from { opacity: 1; }
  to   { opacity: 0; }
`

const FadeIn = styled.div`
  animation: ${fadeIn} ${props => props.duration}ms ease-in;
`

const FadeOut = styled.div`
  animation: ${fadeOut} ${props => props.duration}ms ease-in;
`

export default class Fade extends React.Component {
  state = { animateIn: false, animateOut: false, visible: false, animating: false }
  componentDidMount () {
    if (this.props.visible) {
      this.setState({ visible: true, animateIn: true })
    }
  }
  componentDidUpdate (prevProps) {
    if (this.props.visible !== prevProps.visible) {
      if (prevProps.visible && !this.props.visible && !this.state.animating) {
        this.setState({ animating: true, animateOut: true, animateIn: false, visible: true }) // eslint-disable-line
        setTimeout(() => {
          this.setState({ visible: false, animating: false })
        }, this.props.duration + 1)
      } else if (!prevProps.visible && this.props.visible && !this.state.animating) {
        this.setState({ animateOut: false, animateIn: true, visible: true, animating: true }) // eslint-disable-line
        setTimeout(() => {
          this.setState({ animating: false })
        }, this.props.duration + 1)
      } else {
        this.setState({ animateOut: false, animateIn: false }) // eslint-disable-line
      }
    }
  }
  render () {
    const { children, duration } = this.props
    const { animateIn, animateOut, visible } = this.state
    if (visible && animateIn) {
      return <FadeIn duration={duration}>{children}</FadeIn>
    } else if (visible && animateOut) {
      return <FadeOut duration={duration}>{children}</FadeOut>
    } else if (visible) {
      return <React.Fragment>{children}</React.Fragment>
    }
    return null
  }
}

Fade.propTypes = {
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool.isRequired,
  duration: PropTypes.number.isRequired
}

Fade.defaultProps = {
  duration: 250
}
