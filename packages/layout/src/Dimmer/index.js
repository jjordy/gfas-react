import styled from 'styled-components'
import Loader from '../Loader'
import Box from '../Box'
const StyledLoader = styled(Loader)``

const Dimmer = styled(Box)`
  box-sizing: border-box;
  position: ${props =>
    props.page ? 'fixed !important' : 'absolute !important'};
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0 !important;
  left: 0 !important;
  width: 100%;
  height: 100%;
  text-align: center;
  vertical-align: middle;
  background-color: ${props =>
    props.dark ? 'rgba(0, 0, 0, 0.85)' : 'rgba(255, 255, 255, 0.6)'};
  opacity: ${props => (props.active ? 1 : 0)};
  line-height: 1;
  animation-fill-mode: both;
  animation-duration: 0.4s;
  transition: opacity 0.4s linear;
  pointer-events: ${props => (props.active ? 'auto' : 'none')};
  will-change: opacity;
  z-index: 1000;
  & ${StyledLoader} {
    opacity: 1;
  }
`

Dimmer.displayName = 'Dimmer'

export default Dimmer
