import styled from 'styled-components'
import Loader from './Loader'

const StyledLoader = styled(Loader)``

const Dimmer = styled.div`
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100%;
  height: 100%;
  text-align: center;
  vertical-align: middle;
  background-color: ${props =>
    props.dark ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.85)'};
  opacity: ${props => (props.active ? 1 : 0)};
  line-height: 1;
  animation-fill-mode: both;
  animation-duration: 0.5s;
  transition: opacity 0.5s linear;
  pointer-events: none;
  will-change: opacity;
  z-index: 1000;
  & ${StyledLoader} {
    opacity: 1;
  }
`

Dimmer.displayName = 'Dimmer'

export default Dimmer
